<!--<template>-->
<!--  <div id="app">-->
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'App'-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->

<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <!-- 第三步使用组件标签-->
    <hello/>
    <br>
    <abl/>
    <div>
      <de1 :additem="additem"/>
      <de2/>
      <ul>
        <li v-for="(item,index) in items" :key="index"> {{ item.name }}</li>
      </ul>
    </div>
    <div>
      <de3>
        <input type="checkbox" slot="left">
        <span slot="content">是绝对大快递费可</span>
        <input type="button" value="删除" slot="right"/>
      </de3>
    </div>
    <div>
      <de4/>
    </div>
  </div>
</template>

<script>
//  第一步，引入组件
import PubSub from 'pubsub-js'
import hello from './components/hello.vue'
import abl from './components/abl.vue'
import de1 from './components/de1'
import de2 from './components/de2.vue'
import de3 from './components/de3.vue'
import de4 from './components/de4.vue'
import storageUtil from './util/storageUtil'

export default {
//  第二步映射组件
  components: {
    hello,
    abl,
    de1,
    de2,
    de3,
    de4
  },
  data () {
    return {
      items: [
        {'name': '11'}
      ],
      todos: storageUtil.readTodos()
    }
  },
  methods: {
    additem (item) {
      this.items.unshift(item)
    }
  },
  mounted () {
    PubSub.subscribe('additem', (msg, data) => {
      this.additem(data)
    })
  },
  watch: {
    todos: {
      deep: true,
      // handler: function(value){
      //   storageUtil.saveTodos(value)
      // }
      handler: storageUtil.saveTodos
    }
  }

}
</script>

<style>
img{
  width: 200px;
  height: 200px;
}

</style>
