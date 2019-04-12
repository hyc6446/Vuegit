<template>
  <div id="demo" class="layui-container">
    <div class="layui-row">
      <div id="innerbox" class="layui-col-xs6 layui-col-sm6 layui-col-md6  layui-col-md-offset3">
<!--        <checkHeader :addItem="addItem" />  1.原始方法-->
<!--        <checkHeader @addItem="addItem" />  2.自定义事件绑定&ndash;&gt;-->
        <checkHeader ref="header" />  <!-- 3.生命周期回调函数mounted-->
        <checkContent :checkItems="checkItems" :delLi="delLi"/>
        <checkFooter :checkItems="checkItems" :delAllCheck="delAllCheck" :selectAll="selectAll" />
      </div>
    </div>

  </div>

</template>

<script>
import checkHeader from './components/checkHeader'
import checkContent from './components/checkContent'
import checkFooter from './components/checkFooter'
import checkItem from "./components/checkItem";

export default {
  data () {
    return {
      //从本地localStorage保存的json数据读取出来,需要深度监视(一旦数据发生改变就需要保存数据到本地)
      checkItems: JSON.parse(window.localStorage.getItem('checkItems') || '[]')
    }
  },
  computed: {
  },
  mounted () {//执行异步代码
    //给checkHeader绑定事件监听
    this.$refs.header.$on('addItem',this.addItem)

  },
  methods: {
    addItem (content) {
      this.checkItems.unshift(content)
    },
    delLi (index) {
      this.checkItems.splice(index,1)
    },
    delAllCheck () {
      this.checkItems = this.checkItems.filter(p => !p.status)
    },
    selectAll (status) {
      this.checkItems.forEach(p => p.status=status)
    }

  },
  watch: {//监视
    checkItems: {
      deep: true,//深度监视
      handler: function (value) {
        //将checkItems最新的数据以json格式保存到本地localStorage
        window.localStorage.setItem("checkItems", JSON.stringify(value))//保存为json格式
      }
    }
  },
  components: {
    checkHeader,
    checkContent,
    checkFooter
  }
}
</script>

<style>
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  #demo{
    margin:50px auto;
  }
  #innerbox{
    padding:40px 20px;
    background: #f2f2f2;
  }
</style>
