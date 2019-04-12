<template>
  <div class="cartMain_hd">
    <ul class="order_lists cartTop">
      <li class="list_chk">
        <input type="checkbox" id="all" v-model="isAllchecked">
        <label for="all"></label>
        全选
      </li>
      <li class="list_con">商品信息</li>
      <li class="list_info">商品参数</li>
      <li class="list_price">单价</li>
      <li class="list_amount">数量</li>
      <li class="list_sum">金额</li>
      <li class="list_op">操作</li>
    </ul>
  </div>
</template>

<script>
    export default {
      props: {
        allDatas: Array,
        selectAllShop:Function
      },
      computed: {
        isAllchecked: {
          get () {
            let checkedGoodsCount = this.allDatas.reduce((alltotal,data)=>alltotal + data.shops.filter(item=>item.status=== true).length,0)
            let allGoodsCount = this.allDatas.reduce((alltotal,data) => alltotal + (data.shops.filter(item => item).length),0)
            return checkedGoodsCount === allGoodsCount
          },
          set (value) {
            this.selectAllShop(value)
          }
        }
      }
    }
</script>

<style>


</style>
