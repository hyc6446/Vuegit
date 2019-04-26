<template>
    <div>
      <el-button type="text" @click="dialogFormVisible = true" class="modal-btn">财鱼公众号</el-button>
      <el-dialog :visible.sync="dialogFormVisible" :close-on-press-escape="false" :show-close="false" custom-class="gzh">
        <span slot="title">长按识别或保存二维码</span>
        <div>
          <img src="../assets/mobile/wxcode.png" alt="">
          <p class="tip-txt"><span>微信扫码关注</span><span>获取贴心服务</span><br></p>
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
      }
    }
</script>

<style>


</style>
