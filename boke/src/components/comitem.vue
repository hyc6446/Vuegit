<template>
  <div class="cont">
    <div class="img">
      <img src="../assets/header.png" alt="">
    </div>
    <div class="text">
      <!--显示每条数据的具体内容-->
      <p class="tit"><span class="name">{{ item.name }}</span><span class="data">{{ item.pubdate|formatDate }}</span></p>
      <p class="ct">{{ item.content }}</p>
      <p class="layui-col-xs1 layui-col-md-offset11 layui-red" style="color: #FF5722; cursor: pointer;" @click="del" >删除</p>
    </div>
  </div>
</template>

<script>
  //1.引入组件
  import {formatDate} from "@/assets/js/date";
  export default {
    //2.接受父类组件(comlist页面)
      props: {
        item: Object,
        delcomment: Function,
        index: Number
      },
      methods: {
        //del点击事件
        del () {
          //接受父组件传递的item对象
          const {item}= this
          if(window.confirm(`确定要删除 ${item.name} 评论嘛？`)){
            //调用父组件传递的delcomment方法
            this.delcomment(this.index)
          }
        }
      },
    //过滤器进行时间的格式化
      filters: {
        formatDate: function (time) {
          if (time != null && time != "") {
            var date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm");
          } else {
            return "";
          }
        }
      }
    }
</script>

<style>


</style>
