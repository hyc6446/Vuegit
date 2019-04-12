<template>
  <div class="order_content">
    <orderItems :shopinfos="shopinfos" :pindex="index" :delGood="delGood"/>
  </div>
</template>

<script>
  import orderItems from './orderItems.vue'
  export default {
    props: {
      shopinfos: Array,
      index:Number,
      delGood: Function
    },
    components: {
      orderItems
    }
  }
</script>

<style>


</style>
