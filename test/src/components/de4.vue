<template>
    <div>
      <div>Ajax</div>
      <div v-if="!url">loading...</div>
      <div v-else>收看电视覅开裆裤<a :href="url">{{ name }}</a></div>
    </div>
</template>

<script>
// 引入插件
import axios from 'axios'
export default {
  data () {
    return {
      url: '',
      name: ''
    }
  },
  mounted () {
    // ajax请求获取数据
    const url = 'https://api.github.com/search/repositories?q=scra&sort=stars'
    axios.get(url).then(response => {
      // 成功状态下
      const result = response.data
      this.url = result.items[0].html_url
      this.name = result.items[0].name
    }).catch(error => {
      alert('失败了' + error)
    })
  }
}
</script>

<style>
</style>
