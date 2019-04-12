<template>
  <div class="cont">
    <div class="img">
      <img src="../assets/header.png" alt="">
    </div>
    <div class="text">
      <p class="tit"><span class="name">{{item.name}}</span><span class="data">{{ item.pubdate|formatDate}}</span></p>
      <p class="ct">{{item.content}}</p>
      <p class="layui-col-xs1 layui-col-md-offset11 layui-red" style="color: #FF5722; cursor: pointer;" @click='del' >删除</p>
    </div>
  </div>

</template>

<script>
  import {formatDate} from '../assets/js/date.js';
  export default {
      props: {
        item: Object,
        delcomment: Function,
        ind: Number
      },
      methods: {
        del () {
          const {item,ind,delcomment} = this
          if(window.confirm(`确认要删除 ${item.name} 的评论吗?`)) {
            this.delcomment(ind)
          }
        }
      },
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
