<template>
  <div>
      <li class="list_chk">
        <input type="checkbox" class="item_box" v-model="item.status">
      </li>
      <li class="list_con">
        <div class="list_img"><a href="javascript:;"><img v-bind:src="item.img" alt=""></a></div>
        <div class="list_text"><a href="javascript:;">{{item.goodsname}}</a></div>
      </li>
      <li class="list_info">
        <p>规格：{{item.speci}}</p>
        <p>尺寸：{{item.size}}</p>
      </li>
      <li class="list_price">
        <p class="price">￥{{item.price}}</p>
      </li>
      <li class="list_amount">
        <div class="amount_box">
          <a href="javascript:;" :class="item.count === 1 ? 'reSty' : ''" @click="calcCount(0)">-</a>
          <input type="text" v-bind:value="item.count" class="sum">
          <a href="javascript:;" class="plus" :class="item.count >= 5 ? 'reSty' : ''" @click="calcCount(1)">+</a>
        </div>
      </li>
      <li class="list_sum">
        <p class="sum_price">￥{{subtotal}}</p>
      </li>
      <li class="list_op">
        <p class="del"><a href="javascript:;" class="delBtn" @click="del">移除商品</a></p>
      </li>
  </div>

</template>

<script>
  import PubSub from 'pubsub-js'
    export default {
      props: {
        item: Object,
        pindex: Number,
        index: Number,
        //delGood: Function
      },
      data () {
        return {
          count: this.item.count
        }
      },
      computed: {
        subtotal () {
          const {item}= this
          return parseInt(item.price) * item.count
        },
      },
      methods: {
        del () {
          if(window.confirm("您确认要删除该宝贝吗?")){
            //this.delGood(this.pindex,this.index)
            //发布消息（不需要prosp）
            let data = {'pindex':this.pindex,'index':this.index}
            PubSub.publish('delGood',data)
          }
        },
        calcCount (bool) {
          if(bool) {
            if(this.item.count>=5) {
              return false
            }else{
              this.count = this.item.count ++
              return this.count
            }
          }else{
            if(this.item.count<=1) {
              return false
            }else{
              this.count = this.item.count --
              return this.count
            }

          }
        }

      }

    }
</script>

<style>


</style>
