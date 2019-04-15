<template>
  <div class="layui-col-md12 search"  >
    <div class="layui-col-md-offset3">
      <input type="text" class="inp" placeholder="关键字搜索用户" v-model="searchWord">
      <input type="button" class="active" value="搜索" @click="search">
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default  {
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    search () {
      const word = this.searchWord.trim()
      if(word) {
        PubSub.publish("searchItems",word)
      }
      this.searchWord= ''
    }
  }
}


  // import PubSub from 'pubsub-js'
  // export default {
  //   data () {
  //     return {
  //       searchWord: ''
  //     }
  //   },
  //   methods: {
  //     search () {
  //       if(this.searchWord.trim()) {
  //         PubSub.publish('searchItems',this.searchWord.trim())
  //       }
  //     }
  //   }
  // }
</script>

<style>


</style>
