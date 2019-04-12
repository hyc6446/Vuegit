<template>
    <div>
      <div id="info">
        {{ msg }},{{ name }}
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '你可以看到我嘛',
      name: '访问者'
    }
  }
}
</script>

<style>
#info{
  width: 400px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background: mediumseagreen;
}

</style>
