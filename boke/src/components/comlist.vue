<template>
  <div class="list-cont">
    <h2 v-show="commentItems.length===0" style="margin:20px;">暂无评论，开始评论!</h2>
    <!--3.使用组件    -->
    <!--循环遍历父组件传递的数据，并向comitem页面传递遍历的每条具体数据和索引，delcomment方法 -->
    <comitem v-for="(item,index) in commentItems" :key="index" :item="item" :delcomment="delcomment" :index="index"/>
  </div>
</template>

<script>
//1.引入组件
import comitem from './comitem'
export default {
  //接受父类组件数据(App页面传递的commentItems，delcomment)
  props: {
    commentItems: {
      type: Array,
      required: true
    },
    delcomment: {
      type: Function,
      required: true
    }
  },
  //2.注册组件
  components: {
    comitem
  }
}
</script>

<style>
  .review-version .list-cont .cont{padding:40px 0 30px 0; border-bottom: 1px solid #e5e5e5;}
  .review-version .list-cont .cont:last-child{border-bottom: 0;}
  .review-version .list-cont .cont .text{padding-left: 70px; line-height: 22px; color: #333; }
  .review-version .list-cont .cont .text .tit{margin-bottom: 18px;}
  .review-version .list-cont .cont .text .data{float: right;}

</style>
