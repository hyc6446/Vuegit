<template>
  <div>
    <div class="cartBox" v-for="(shop,index) in allDatas" :key="index" :index="index" >
    <contentHeader :shopName="shop.shopName" :shopinfos="shop.shops" :selectAllBox="selectAllBox" :index="index" />
    <contentInfo :shopinfos="shop.shops" :index="index" :delGood="delGood"/>
    </div>
  </div>
</template>

<script>
  import contentHeader from './contentHeader'
  import contentInfo from './contentInfo'
    export default {
    data () {
      return {

      }
    },
      props: {
        allDatas: Array,
        selectAllBox: Function,
        delGood: Function
      },
      components: {
        contentHeader,
        contentInfo
      }
    }
</script>

<style>


</style>
