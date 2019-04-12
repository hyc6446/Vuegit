<template>
  <div>
    <ul class="order_lists" v-for="(item,index) in shopinfos" :key="index" :index="index" >
      <orderItem :item="item" :pindex="pindex" :index="index" :delGood="delGood"/>
    </ul>
  </div>

</template>

<script>
  import orderItem from './orderItem'
    export default {
      props: {
        shopinfos: Array,
        pindex:Number,
        delGood:  Function
      },
      data () {
        return {

        }
      },
      components: {
        orderItem
      }
    }
</script>

<style>


</style>
