<template>
  <li @mouseenter="handle(true)" @mouseleave="handle(false)" :style="{background: bgColor}">
    <input type="checkbox" name="" v-model="item.status">
    <label >{{item.name}}</label>
    <input type="button" class="layui-btn layui-btn-sm layui-btn-danger fr" v-show="isShow" value="删除" @click="delitem">
  </li>
</template>

<script>
    export default {
      data (){
        return {
          bgColor: '#f2f2f2',
          isShow: false
        }
      },
      props: {
        item:Object,
        index:Number,
        delLi: Function
      },
      methods: {
        delitem () {
          const {item,index}= this
          if(window.confirm(`确认删除${item.name}?`)){
            this.delLi(index)
          }
        },
        handle (isEnter) {
          if(isEnter) {
            this.bgColor= 'white'
            this.isShow= true
          }else{
            this.bgColor= '#f2f2f2'
            this.isShow= false
          }
        }
      },
      computed: {

      }
    }
</script>

<style>
  #demo .container ul li{
    line-height: 38px;
    padding:0px 20px;
    margin:10px 0;
  }
  #demo .container ul li .layui-btn-danger{
    margin-top:4px;
  }
</style>
