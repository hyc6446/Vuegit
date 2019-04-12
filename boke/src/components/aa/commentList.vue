<template>
<!--  <commentNum/>-->
  <div class="list-cont">
    <commentItem v-for="(item,index) in commentitems" :key="index" :item="item" :ind="index" :delcomment="delcomment" />
  </div>
</template>

<script>
  import commentItem from './commentItem.vue'
  // import commentNum from './commentNum.vue'
    export default {
      props: ['commentitems','delcomment'],
      components: {
        commentItem
        // commentNum
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
