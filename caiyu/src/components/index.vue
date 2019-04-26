<template>
  <div>
    <Header></Header>
    <div class="am-cf"></div>
    <Banner></Banner>
    <div class="am-cf"></div>
    <Body></Body>
    <div class="am-cf"></div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../views/header'
  import Banner from '../views/banner'
  import Body from '../views/body'
  import Footer from '../views/footer'
    export default {
      components:{
        Header,
        Banner,
        Body,
        Footer
      }
    }
</script>

<style>


</style>
