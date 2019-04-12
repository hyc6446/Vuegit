<template>
  <div class="bar-wrapper">
    <div class="bar-right">
      <div class="piece">已选商品<strong class="piece_num">{{hasSelectGood}}</strong>件</div>
      <div class="totalMoney">共计: <strong class="total_text">{{allPrices}}</strong></div>
      <div class="calBtn"><a href="javascript:;" v-model="hasSelectGood" :class="hasSelectGood ? 'btn_sty' : '' ">结算</a></div>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        allDatas: Array
      },
      data () {
        return {
          btn_sty:'btn_sty'
        }
      },
      computed: {
        hasSelectGood (){
          const {allDatas}= this
          let selectCounts
          selectCounts = allDatas.reduce((totalCounts,data) => totalCounts + data.shops.filter(item => item.status).length,0)
          return selectCounts
        },
        allPrices () {
          const {allDatas}= this
          let prices
          prices = allDatas.reduce(function(price,data){
            data.shops.forEach(function (item) {
              if(item.status){
                price += parseInt(item.price)*item.count
              }else{
                price += 0
              }
            })
            return price
          },0)
          return prices
        }
      }
    }
</script>

<style>


</style>
