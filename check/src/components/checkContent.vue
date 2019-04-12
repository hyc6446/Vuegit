<template>
  <div class="container ">
    <ul>
      <checkItem v-for="(item,index) in checkItems" :key="index" :index="index" :item="item" :delLi="delLi"/>

    </ul>
  </div>

</template>

<script>
  import checkItem from './checkItem'
    export default {
      props: {
        checkItems: Array,
        delLi: Function
      },
      //映射标签
      components: {
        checkItem
      }
    }
</script>

<style>

  #demo .container ul{
    margin:20px 0;
  }



</style>
