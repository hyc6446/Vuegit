<template>
  <el-row id="footer">
    <el-col :sm="20" offset="2">
      <el-col :sm="12" class="address-info">
        <p>地址：浙江省杭州市西湖区紫霞街176号杭州互联网创新创业园4(D)-3</p>
        <p>电话：0571-81903306</p>
        <p>邮箱：wuqinglong@sooying.vip</p>
      </el-col>
      <el-col :sm="12" class="bom-wxcode">
        <img src="../assets/img/wxCode.jpg" alt="" width="120" height="120">
        <div class="bom-wxcode-txt">
          <span>微信扫码关注</span>
          <span>获取贴心服务</span>
        </div>
      </el-col>
    </el-col>
    <el-col class="copyinfo">Copyright 2019 All Rights Reserved.</el-col>
  </el-row>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
