<template>
    <div>订阅消息 <br>
      DE2-name:<input type="text" placeholder="name" v-model="item" @keyup.enter="add"><br>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {
      item: ''
    }
  },
  methods: {
    add () {
      let data = {'name': this.item}
      PubSub.publish('additem', data)
    }
  }
}
</script>

<style>
</style>
