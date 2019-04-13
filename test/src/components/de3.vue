<template>
    <div>slot插槽(反复使用):用于父组件向子组件传递‘标签数据’ <br>
      <div id="con">
        <slot name="left"></slot>
        <slot name="content"></slot>
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
  #con{
    width: 500px;
    height: 40px;
    margin: 0 auto;
    border:1px solid #1b6d85;
  }
</style>
