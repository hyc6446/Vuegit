<template>
  <el-row id="banner">
    <el-col :sm="20"  offset="2">
      <div class="banner-grid-content">
        <el-row type="flex" >
          <el-col :sm="24" :md="13" class="slogan-word">
            <el-row>
              <el-col :sm="24" class="title">财鱼<em>让你</em></el-col>
              <el-col :sm="20" :md="20" offset="4" class="ad-normal-txt">会赚钱 懂花钱</el-col>
            </el-row>
          </el-col>
          <el-col :sm="24" :md="4"></el-col>
          <el-col :sm="24" :md="7" class="wxcode-img">
            <div class="wx-word">
              <span>微信扫码关注</span>
              <span>获取贴心服务</span>
            </div>
            <p class="QRcode img-bg"><img src="../assets/img/wxCode.jpg" alt="" class="banner-img am-img-responsive"></p>
          </el-col>
        </el-row>
      </div>
    </el-col>

  </el-row>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
