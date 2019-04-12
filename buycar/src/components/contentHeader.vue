<template>
  <div class="shop_info">
    <div class="all_check">
      <input type="checkbox" class="shop_a" v-model="ischeckshop" :index="index">
    </div>
    <div class="shop_name">
      店铺：<a href="javascript:;">{{shopName}}</a>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        shopName: String,
        shopinfos: Array,
        selectAllBox: Function,
        index: Number
      },
      computed: {
        ischeckshop:{
          get () {
            const {shopinfos}= this
            let checked = shopinfos.reduce((subtotal,shopinfo) => subtotal + (shopinfo.status?1:0),0)
            return checked === shopinfos.length
          },
          set (value) {
            this.selectAllBox(value,this.index)
          }
        }
      }
    }
</script>

<style>


</style>
