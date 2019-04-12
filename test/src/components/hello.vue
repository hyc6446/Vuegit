<!--  子组件 -->
<template>
    <div>
      <p class="msg">{{ msg }}</p>
    </div>
</template>

<script>
//  向外暴露配置对象
export default {
// 组件里面必须写函数
  data () {
    return {
      msg: 'hello，world'
    }
  }
}
</script>

<style>
.msg{
  font-size: 20px;
  color: cornflowerblue;
}

</style>
