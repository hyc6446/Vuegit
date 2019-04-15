<template>
  <div class="layui-col-md12 user">
    <h3 class="prompt" v-if="tipMsg">空空如也</h3>
      <div class="warp" v-if="loading">
        <div class="k-ball-holder3">
          <div class="k-ball7a"></div>
          <div class="k-ball7b"></div>
          <div class="k-ball7c"></div>
          <div class="k-ball7d"></div>
        </div>
      </div>
    <h3 class="prompt" v-if="errorMsg">{{errorMsg}}</h3>
    <div>
<!--      <p v-if="users">共找到 <em class="allcount">{{allcount}}</em> 位用户</p>-->
      <ul class="user layui-col-md12" >
        <li class="layui-col-md3" v-for="(item,index) in users" :key="index">
          <div class="head-img"><img v-bind:src="item.src" v-bind:alt="item.name" v-bind:title="item.name"></div>
          <div class="tit layui-col-md12">
            <h1 class="name">{{item.name}}</h1>
            <p class="motto"><a v-bind:href="item.url">个人主页</a></p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data () {
      return {
        tipMsg: true,
        loading: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted() {
      PubSub.subscribe('searchItems',(msg,data) => {
        const url= `https://gitee.com/api/v5/search/users?q=${data}&page=1&per_page=100&order=desc`
        //1.初始化界面
        this.tipMsg= false
        this.loading= true
        this.users= null
        //2.发送ajax
        axios.get(url).then((response) => {
          const result= response.data
          if(result.length) {
            const users= result.map(item => ({
              src: item.avatar_url,
              name: item.login,
              url: item.html_url
            }))
            this.users= users
            this.loading= false
          }else{
            this.loading= false
            this.tipMsg= true
          }
        }).catch(error => {
          this.tipMsg= false
          this.loading= false
          this.errorMsg= "请求失败，没有获取数据!"
        })



      })
    }
  }

  // import PubSub from 'pubsub-js'
  // import axios from 'axios'
  // export default {
  //   data () {
  //     return {
  //       tipMsg: true,
  //       loading: false,
  //       users: null,
  //       errorMsg: '',
  //       // allcount: 0
  //     }
  //   },
  //   mounted () {
  //     PubSub.subscribe('searchItems',(msg,searchWord) => {
  //       const url= `https://api.github.com/search/users?q=${searchWord}`
  //       this.tipMsg= false
  //       this.loading= true
  //       this.users= null
  //       axios.get(url).then(response => {
  //         const result= response.data
  //         const users= result.items.map(item => ({
  //           src: item.avatar_url,
  //           name: item.login,
  //           home: item.html_url
  //         }))
  //           this.loading= false
  //           this.users= users
  //           this.allcount= result.items.length
  //       }).catch(error => {
  //         // console.log(error)
  //         this.tipMsg= false
  //         this.loading= false
  //         this.errorMsg= "请求错误，没有数据返回"
  //       })
  //     })
  //   }
  //
  // }


</script>

<style>


</style>
