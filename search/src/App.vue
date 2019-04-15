<template>
  <div class="layui-container wrapper">
    <div class="layui-row">
      <searchForm />
      <showViem />
    </div>
  </div>
</template>

<script>
import searchForm from './components/searchForm'
import showViem from  './components/showViem'
export default {
  components: {
    searchForm,
    showViem
  }
}
</script>

<style>
</style>
