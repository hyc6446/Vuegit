<template>
  <div class="form-box">
    <div class="form">
      <form class="layui-form" action="" @submit.prevent>
        <div class="layui-form-item layui-form-text">
          <div class="layui-input-block">
            <input type="text" name="username" placeholder="用户名" autocomplete="off" class="layui-input" v-model="name"><br>
            <textarea name="content" placeholder="既然来了，就说几句" class="layui-textarea" v-model="content"></textarea>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block" style="text-align: right;">
            <button class="layui-btn definite" @click="add">確定</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          name: '',
          content: ''
        }
      },
      //接受父类组件数据
      props: {
        //父类组件中的声明的函数
        addcomment: {
          type: Function,
          required: true
        }
      },
      //方法
      methods: {
        //添加的点击事件
        add () {
          //1.收集绑定的数据信息
          const name= this.name.trim()
          const content = this.content.trim()
          //2.验证收集的数据合法性
          if(name==="用户名" || !name){
            alert('输入姓名')
            return false
          }else if(content==='既然来了，就说几句' || !content){
            alert('输入内容')
            return false
          }
          //3.声明存放收集信息的对象
          const comment={
            name,
            content,
            pubdate: (new Date()).getTime()
          }
          //4.调用父类组件声明的函数传入收集的信息
          this.addcomment(comment)
          //5.清除收集字段的信息
          this.name= ''
          this.content= ''
        }
      }



    }
</script>

<style>

  .form{margin-bottom: 16px;}
  .form .layui-form-item{clear: none;}
  .form .layui-input-block{margin-left: 70px;}
  .form .layui-input-block .layui-btn{width: 100px; height: 40px; line-height: 40px; background: #ff7f21;}
  .form .layui-form-item{clear: both;}
  .form textarea{border-color: #402760;}
  .form .layui-input-block .layui-btn{width: 100px; height: 40px; line-height: 40px; background: #ff7f21;}
</style>
