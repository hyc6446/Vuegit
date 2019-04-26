<template>
    <div>
      <div id="footer" class="am-cf">
        <div class="footer-com-info">
          <p class="ft-txt">地址：浙江省杭州市西湖区紫霞街176号杭州互联网创新创业园4(D)-3</p>
          <p class="ft-txt">电话：0571-81903306</p>
          <p class="ft-txt">邮箱：wuqinglong@sooying.vip</p>
        </div>
        <div class="copyinfo">Copyright 2019 All Rights Reserved.</div>
      </div>
      <div id="button-groups" class="am-cf">
        <div class="button-box">
          <OnlineMsg></OnlineMsg>
        </div>
        <div class="button-box">
          <Callme></Callme>
        </div>
        <div class="button-box">
          <Gongzhonghao></Gongzhonghao>
        </div>
      </div>
    </div>
</template>



<script>
  import OnlineMsg from './onlineMsg'
  import Callme from './callme'
  import Gongzhonghao from './gongzhonghao'
  export default {
    components: {
      OnlineMsg,
      Callme,
      Gongzhonghao,
    }
  }
</script>

<style>
  [v-cloak]{
    display: none;
  }
</style>
