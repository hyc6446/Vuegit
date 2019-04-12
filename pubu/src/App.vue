<template>
  <div id="fh5co-main">
        <div class="container">
          <div class="row">
            <div id="fh5co-board" data-columns="4">
              <div class="column size-1of4" v-for="(row,index) in picdatas" :key="index">
                <div class="item" v-for="(item,index) in row" :key="index">
                  <div class="animate-box bounceIn animated">
                    <a v-bind:href="item.img" class="image-popup fh5co-board-img" v-bind:title="item.title">
                      <img v-bind:src="item.img" v-bind:alt="item.alt">
                    </a>
                  </div>
                  <div class="fh5co-desc">{{item.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
  // import column from './components/column'

  export default {
    data () {
      return {
        allDatas: [
          {'img': '../static/img/img_1.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_2.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_3.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_4.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_5.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_6.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_7.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_8.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_9.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_10.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_11.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_12.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_13.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_14.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_15.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_16.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_17.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_18.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_19.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_20.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_21.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_22.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_23.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_24.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_25.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_26.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_27.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_28.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_29.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
          {'img': '../static/img/img_30.jpg','title':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?','alt':"Free HTML5 Bootstrap template"},
        ]
      }
    },
    computed: {
      picdatas () {
        let arrtemp =[]
        let index = 0
        let count = 4
        for(var i=0;i<this.allDatas.length;i++){
          index = Math.floor(i%count)
          if(arrtemp.length<count){
            arrtemp.push([])
          }
          console.log(index)
          arrtemp[index].push(this.allDatas[i])
        }
        return arrtemp
      }
    },
    components: {
    }
  }
</script>

<style>

</style>
