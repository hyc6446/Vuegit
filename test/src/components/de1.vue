<template>
  <div>Props: <br>
    DE1-name:<input type="text" placeholder="name" v-model="item" @keyup.enter="add"><br>
  </div>
</template>

<script>
export default {
  props: {
    additem: Function
  },
  data () {
    return {
      item: ''
    }
  },
  methods: {
    add () {
      let data = {'name': this.item}
      this.additem(data)
    }
  }
}
</script>

<style>
</style>
