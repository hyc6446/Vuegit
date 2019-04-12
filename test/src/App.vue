<!--<template>-->
<!--  <div id="app">-->
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'App'-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <!-- 第三步使用组件标签-->
    <hello/>
    <br>
    <abl/>
  </div>
</template>

<script>
//  第一步，引入组件
import hello from './components/hello.vue'
import abl from './components/abl.vue'
export default {
//  第二步映射组件
  components: {
    hello,
    abl
  }
}
</script>

<style>
img{
  width: 200px;
  height: 200px;
}

</style>
