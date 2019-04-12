<template>
  <div class="footer">
    <input type="checkbox" v-model="isselectall">
    <span>已选 <em>{{getchecked}}</em> /全部 <i>{{checkItems.length}}</i></span>
    <input type="button" class="layui-btn layui-btn-danger fr" value="删除选中属性" v-if="getchecked" @click="delallcompare">
  </div>

</template>

<script>
    export default {
      props: {
        checkItems: Array,
        delAllCheck: Function,
        selectAll: Function
      },
      data () {
        return {

        }
      },
      methods: {
        delallcompare () {
          if(window.confirm("是否要删除全部已完成项目")){
            this.delAllCheck()
          }
        }
      },
      computed: {
        getchecked () {
          const {checkItems}= this
          // return checkItems.filter(p => p.status===true).length
          return checkItems.reduce((pretotal,checkItem) => pretotal + (checkItem.status?1:0),0)
        },
        isselectall:{
          get () {
            return this.getchecked === this.checkItems.length && this.checkItems.length
          },
          set (value) {
            this.selectAll(value)
          }
        }

      }
    }
</script>

<style>
  #demo .footer{
    overflow: hidden;
    line-height: 38px;
  }
  #demo .footer span{
    line-height: 38px;
  }
  #demo .footer span em{
    font-style: normal;
    color: #FF5722;
    font-weight: bold;
  }
  #demo .footer span i{
    font-style: normal;
  }



</style>
