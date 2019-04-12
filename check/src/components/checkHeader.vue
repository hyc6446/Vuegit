<template>
  <div class="header">
    <input type="text" placeholder="输入内容回车确定" class="layui-input" v-model="inputText" @keyup.enter="add">
  </div>

</template>

<script>
    export default {
      data () {
        return {
          inputText: ''
        }
      },
      props: {
        // addItem: Function
      },
      methods: {
        add () {
          if(!this.inputText){
            alert("输入内容")
            return false
          }
          const content = {name:this.inputText.trim(),status:false}
          //this.addItem(content) //1.

          //触发自定义事件
          this.$emit('addItem',content)


          this.inputText = ''
        }
      }
    }
</script>

<style>


</style>
