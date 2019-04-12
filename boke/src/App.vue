<template>
  <div class="content whisper-content leacots-content">
    <div class="cont w1000">
      <div class="review-version">
        <!-- :addcomment(向子页面<form表单页面>传递绑定的addcomment数据)-->
        <comform :addcomment="addcomment"/>
        <!-- :allcounts(向子页面<显示所有评论数目页面>传递绑定的allcounts数据)-->
        <comcounts :allcounts="allcounts"/>
        <!-- :commentItems(向子页面传递绑定的commentItems数据)-->
        <!-- :delcomment(向子页面传递绑定的delcomment数据)-->
        <comlist :commentItems="commentItems" :delcomment="delcomment"/>
      </div>
    </div>
  </div>
</template>

<script>
import comform from './components/comform'
import comcounts from './components/comcounts'
import comlist from './components/comlist'
export default {

  //组件的data须是函数
  data () {
    return {
      commentItems:JSON.parse(window.localStorage.getItem("boke_key") || '[]')
    }
  },
  //计算属性
  computed: {
    allcounts () {
      return this.commentItems.length
    }
  },
  //方法
  methods: {
    //需求的数据在哪个组件，操作数据的方法就应该在哪个组件中
    //commentItems在App中，所以操作数据的方法在APP页面，操作的方法是逐层向下传递到需要的子页面，子页面只需要调用方法对象，具体的操作是在App页面执行
    // 添加评论方法
      addcomment (comment) {
        //执行在头部添加数据的实际操作
        this.commentItems.unshift(comment)
      },
    //删除评论方法
      delcomment (index) {
        //执行删除指定索引的数据。
        this.commentItems.splice(index,1)
      }
  },
  //监视
  watch: {
    commentItems: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem("boke_key",JSON.stringify(value))
      }
    }
  },
  //注册组件(引入组件后要注册才能使用)
  components: {
    comform,
    comcounts,
    comlist
  }


}
</script>

<style>
body{font: 14px 宋体 Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif; overflow-x: hidden;}
.w1000{max-width: 1000px!important; margin:0 auto;}
.review-version{padding:20px; border-top: 1px dashed #dddddd;}

</style>
