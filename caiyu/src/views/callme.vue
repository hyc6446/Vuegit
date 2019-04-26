<template>
    <div>
      <el-button type="text" @click="dialogFormVisible = true" class="modal-btn">电话咨询</el-button>
      <el-dialog :visible.sync="dialogFormVisible" :close-on-press-escape="false" :close-on-click-modal=false :show-close="false" custom-class="callme">
        <span>拨打 0571-81903306</span>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false" class="cancle-btn">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false" class="sure-btn" >确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          dialogFormVisible: false
        }
      },
      methods: {

      }
    }
</script>

<style>


</style>
