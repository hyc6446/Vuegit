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
  import Banner from '../views/Banner'
  import Body from '../views/Body'
  import Footer from '../views/Footer'
    export default {
        name: "index",
      components: {
       Header,
       Banner,
       Body,
       Footer,
      }
    }
</script>

<style scoped>

</style>
