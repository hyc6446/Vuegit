<template>
  <section class="cartMain">
    <buycarHeader :allDatas="allDatas" :selectAllShop="selectAllShop"/>
    <buycarContent :allDatas="allDatas" :selectAllBox="selectAllBox" :delGood="delGood"/>
    <buycarFooter :allDatas="allDatas"/>

    <section class="model_bg" v-if="isShowBg"></section>
    <section class="my_model" v-if="isShowConfirm">
      <p class="title">删除宝贝<span class="closeModel" @click="close">X</span></p>
      <p>您确认要删除该宝贝吗？</p>
      <div class="opBtn"><a href="javascript:;" class="dialog-sure">确定</a><a href="javascript:;" class="dialog-close" @click="close">关闭</a></div>
    </section>
  </section>
</template>

<script>
import buycarHeader from './components/buycarHeader'
import buycarContent from './components/buycarContent'
import buycarFooter from './components/buycarFooter'

export default {
  data () {
    return {
      isShowBg: false,
      isShowConfirm: false,
      allDatas: [
        {'shopName': '搜猎人艺术生活','status':true,'shops':
          [
            {'img': require('./assets/1.png'),'goodsname': '夏季男士迷彩衫男','speci': '默认','size': '16*16*3(cm)','price': '980','count': 2,'status': true},
            {'img': require('./assets/2.png'),'goodsname': '夏季男士青年时尚打底衫男','speci': '默认','size': '16*16*3(cm)','price': '190','count': 5,'status': true},
            {'img': require('./assets/3.png'),'goodsname': '夏韩版修身男装背心青年时尚打底衫男','speci': '默认','size': '16*16*3(cm)','price': '290','count': 1,'status': true},
          ]
        },
        {'shopName': '卷卷旗舰店','status':true,'shops':
            [
              {'img': require('./assets/1.png'),'goodsname': '夏季男士迷彩衫男','speci': '默认','size': '16*16*3(cm)','price': '980','count': '2','status': true},
              {'img': require('./assets/2.png'),'goodsname': '夏季男士青年时尚打底衫男','speci': '默认','size': '16*16*3(cm)','price': '190','count': '5','status': true},
              {'img': require('./assets/3.png'),'goodsname': '夏韩版修身男装背心青年时尚打底衫男','speci': '默认','size': '16*16*3(cm)','price': '290','count': '1','status': true},
              {'img': require('./assets/4.png'),'goodsname': '心青年时尚打底衫男','speci': '默认','size': '16*16*3(cm)','price': '390','count': '1','status': true}
            ]
        },

      ]
    }
  },
  methods: {
    selectAllShop (value) {
      this.allDatas.forEach(data => data.shops.forEach(item =>item.status= value))
    },
    selectAllBox (value,index) {
      const {allDatas}= this
      allDatas[index].shops.forEach(item => item.status=value)
    },
    delGood (pindex,index) {
      this.allDatas[pindex].shops.splice(index,1)

    },
    close () {
      this.isShowBg = false
      this.isShowConfirm = false
    }

  },
  components: {
    buycarHeader,
    buycarContent,
    buycarFooter
  }
}
</script>

<style>
</style>
