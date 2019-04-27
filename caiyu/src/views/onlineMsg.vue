<template>
    <div>
      <el-button type="text" @click="dialogFormVisible = true" class="modal-btn">在线留言</el-button>
      <el-dialog :visible.sync="dialogFormVisible" :close-on-press-escape="false" :close-on-click-modal=false :show-close="false" custom-class="onlineMsg">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium">
          <el-form-item prop="companyName" >
            <el-input v-model="ruleForm.companyName" placeholder="请输入公司名称" class="long-input"></el-input>
          </el-form-item>
          <el-form-item prop="name" >
            <el-input v-model="ruleForm.name" placeholder="请输入姓名" class="long-input"></el-input>
          </el-form-item>
          <el-form-item prop="phone" >
            <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号码" class="long-input"></el-input>
          </el-form-item>
          <el-form-item prop="veriCode" :inline="true" >
            <el-input v-model.number="ruleForm.veriCode" placeholder="请输入验证码" class="short-input"></el-input>
            <el-button type="info" @click="getVeroCode(ruleForm.phone)" :disabled="btnDisabled" ref="getVeroCode" class="getvericode">{{getVeroCodeTxt}}</el-button>
          </el-form-item>
          <el-form-item placeholder="请输入留言内容（非必填）" prop="remark"  ref="remark">
            <el-input type="textarea" v-model="ruleForm.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('ruleForm')" class="cancle-btn">取消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')" class="sure-btn">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    data() {
      return {
        dialogFormVisible: false,
        btnDisabled: false,
        getVeroCodeTxt: '获取验证码',
        againGetVeriTime: 60,
        timer: null,
        base_url : 'http://192.168.3.19:9030',
        ruleForm: {
          companyName: '',
          name: '',
          phone: '',
          veriCode: '',
          remark: ''
        },
        rules: {
          companyName: [
            { required: true, message: '公司名称不能为空', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          phone: [
            { pattern: "^1((3|5|8){1}\\d{1}|70)\\d{8}$",required: true, message: '手机号码不正确', trigger: 'blur' },
            { type: 'number', message: '手机号码必须为数字'}
          ],
          veriCode: [
            { required: true, message: '验证码不能为空', trigger: 'blur' },
            { type: 'number', message: '验证码为数字'},
            { min: 6, max: 6, message: '验证码为长度为6位数字', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      getVeroCode (phone) {
        var reg = RegExp('^1((3|5|8){1}\\d{1}|70)\\d{8}$')
        if(phone === ''){
          this.$message({
            type: 'error',
            message: '手机号码不能为空',
            customClass: 'alertmessage'
          })
          return false
        }else{
          if(!reg.test(phone)){
            return false
          }else{
            let url = this.base_url + "/usr/pushSmsVeriCode?phone=" + phone
            this.btnDisabled= true
            axios.get(url).then(response => {
              this.$message({
                type: 'success',
                message: response.data.msg,
                customClass: 'alertmessage'
              })
              this.timeDown()
            }).catch(error => {
              this.$message({
                type: 'error',
                message: response.data.msg,
                customClass: 'alertmessage'
              })
            })
          }
        }
      },
      timeDown () {
        this.timer = setInterval(() => {
          if(this.againGetVeriTime === 0){
            clearInterval(this.timer)
            this.btnDisabled= false
            this.getVeroCodeTxt= '获取验证码'
            this.againGetVeriTime= 60
          }else{
            this.againGetVeriTime--
            this.getVeroCodeTxt= this.againGetVeriTime+'秒后再次发送'
          }
        },1000)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let sub_url = this.base_url + '/usr/pushContacts'
            const data = {
              companyName: this.ruleForm.companyName,
              name: this.ruleForm.name,
              phone: this.ruleForm.phone,
              veriCode: this.ruleForm.veriCode,
              remark: this.ruleForm.remark
            }

            axios.post(sub_url,qs.stringify(data)).then(response => {
              console.log(response.data.status)
              if(response.data.status!==200){
                this.$message({
                  type: 'error',
                  message: response.data.msg,
                  customClass: 'alertmessage'
                })
              } else{
                this.$message({
                  type: 'success',
                  message: response.data.msg,
                  customClass: 'alertmessage'
                })
              }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogFormVisible= false
        clearInterval(this.timer)
      }
    }
  }
</script>

<style>


</style>
