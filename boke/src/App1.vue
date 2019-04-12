<template>
  <div class="content whisper-content leacots-content">
    <div class="cont w1000">
      <div class="review-version">
        <commentForm :addcomment='addcomment' />
        <allcounts :allcounts='allcounts'/>
        <commentList :commentitems='commentitems' :delcomment='delcomment' />
      </div>
    </div>
  </div>
</template>

<script>
import commentForm from './components/commentForm.vue'
import commentList from './components/commentList.vue'
import allcounts from './components/allcounts.vue'
export default {
  data () {
    return {
      //数据在哪个组件，操作数据的行为/方法就应该定义在哪个组件
      //把form表单的数据收集在commen对象，并添加到这里的commentitems里面
      commentitems: [
        {name:'老司机',content:'带带我',pubdate:(new Date()).getTime()}
      ]
    }
  },
  computed: {
      allcounts () {
        return this.commentitems.length
      }
  },
  methods: {
    //添加评论
    addcomment (comment) {
      //把评论添加到数组的头部
      this.commentitems.unshift(comment)
    },
    //删除指定索引的评论
    delcomment (index) {
      this.commentitems.splice(index,1)
    }

  },
  components: {
    commentForm,
    allcounts,
    commentList
  }
}
</script>

<style>
body{font: 14px 宋体 Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif; overflow-x: hidden;}
.w1000{max-width: 1000px!important; margin:0 auto;}
.review-version{padding:20px; border-top: 1px dashed #dddddd;}
</style>
