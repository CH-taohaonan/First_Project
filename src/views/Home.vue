<template>
  <div class="body-bg">
      <div class="tou_ys" >
          <div class="tou_ziti" >
              <div></div>

              <div>
                  <img src="../assets/img/best.png">
              </div>
              <div></div>
              <div></div>
              <div></div>
                  <el-row >
                      <el-col  :xs="0" :sm="24" :md="24" :lg="24" :xl="24"  >
                          <el-menu
                                  :default-active="activeIndex"
                                  class="el-menu-demo"
                                  mode="horizontal"
                                  text-color="white"
                                  id="elmenu_yangshi"
                                  active-text-color="#ffd04b"
                                  @select="handleSelect" >
                              <el-menu-item v-for="home,index in home_list" :index="home.id" :style="active" style="border-bottom-color: transparent" :key="home.id">
                                  <div v-if="activeIndex === home.id" class="hover-bg">{{home.name}}</div>
                                  <div v-else @mouseover="menu_mouseover" @mouseout="menu_mouseout" class="hover-bg-line">{{home.name}}</div>
                              </el-menu-item>
                          </el-menu>
                      </el-col>
                      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0" >
                          <img @click="openDiv_show" style="width: 40px;height: 40px;" src="../assets/img/shouji_tubiao.png">
                      </el-col>
                  </el-row>
              <div></div>
          </div>
          <div class="title_div" >
              <div class="menu_neirong" v-if="div_show" >
                  <div style="padding: 10px 0 10px 20px;font-size: 0.8rem;" @click="shouye">首頁</div>
                  <div style="height: 2px;background-color: white"></div>
                  <div @click="fuwu" class="nei_zi">提供服务</div>
                  <div @click="fangan" class="nei_zi">解决方案</div>
                  <div @click="anli" class="nei_zi">行业案例</div>
                  <div @click="xinwen" class="nei_zi">新闻动态</div>
                  <div @click="guanyu" style="padding: 10px 0 10px 20px;font-size: 0.8rem;">关于我们</div>
              </div>
          </div>
      </div>
      <div v-if="this.title_num.is_true" style="position: relative">
          <!--          <swiper :options="swiperOption" @slideChangeTransitionEnd="slideChangeTransitionEnd"  ref="goodSwiper" >-->
          <!--              <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"  >-->
          <!--                  <img  class="image_el" style="width: 100%;height: 95vh" :src="slide">-->
          <!--              </swiper-slide>-->

          <!--              <div class="swiper-pagination" slot="pagination"></div>-->

          <!--              <div class="swiper-button-prev" slot="button-prev"></div>-->
          <!--              <div class="swiper-button-next" slot="button-next"></div>-->
          <!--          </swiper>-->

          <el-row>
              <el-col :xs="0" :sm="24">
                  <div class="block">
                      <span class="demonstration"></span>
                      <el-carousel height="95vh">
                          <el-carousel-item v-for="slide in swiperSlides" :key="slide.id">
                              <img style="width: 100%;height: 100%" :src="slide">
                          </el-carousel-item>
                      </el-carousel>
                  </div>
              </el-col>
              <el-col :xs="24" :sm="0">
                  <div class="block">
                      <span class="demonstration"></span>
                      <el-carousel height="40vh">
                          <el-carousel-item v-for="slide in swiperSlides" :key="slide.id">
                              <img style="width: 100%;height: 100%" :src="slide">
                          </el-carousel-item>
                      </el-carousel>
                  </div>
              </el-col>
          </el-row>
      </div>
      <div v-else>
          <img style="width: 100%;" src="../assets/img/back.png">
      </div>
      <div v-if="this.title_num.is_fuwu">
          <services></services>
      </div>
      <div v-if="this.title_num.is_guanyu">
          <guan-yu></guan-yu>
      </div>
      <div v-if="this.title_num.is_anli">
          <case></case>
      </div>
      <div v-if="this.title_num.is_fangan">
          <industry-solution></industry-solution>
      </div>
      <div v-if="this.title_num.is_xinwen">
          <news></news>
      </div>
<!--      <div v-if="this.is_fuwu">-->
<!--      </div>-->



<!--      <news></news>-->
      <div style="display: flex;justify-content: center;color: white">
          <el-row style="width: 80%;">
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                  <div style="padding:  3rem 2rem;">
                      <img src="../assets/img/best.png">
                      <div>联系电话：0710-3258668</div>
                      <div>邮 箱：kkcast@qq.com</div>
                      <div>地 址：襄阳市樊城区春园西路领秀中原写字楼705B室</div>
                  </div>
              </el-col>
              <el-col :xs="12"  :sm="6" :md="6" :lg="4" :xl="4" style="display: flex">
                  <div style="padding: 3rem 0.5rem">
                      <div style="text-align: center">提供服务</div>
                      <ul style="padding-inline-start: 10px">
                          <li>安卓、IOS</li>
                          <li class="li_top">WEB网站建设</li>
                          <li class="li_top">后台管理软件</li>
                          <li class="li_top">微信开发</li>
                          <li class="li_top">定制软件开发</li>
                      </ul>
                  </div>
              </el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="4" :xl="4" style="display: flex">
                  <div style="padding: 3rem 0.5rem">
                      <div style="text-align: center">解决方案</div>
                      <ul style="padding-inline-start: 10px">
                          <li>电商平台开发</li>
                          <li class="li_top" >新闻软件定制</li>
                          <li class="li_top" >企业软件定制</li>
                          <li class="li_top" >新闻软件定制</li>
                          <li class="li_top">视频直播软件</li>
                      </ul>
                  </div>
              </el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="4" :xl="4" style="display: flex">
                  <div style="padding: 3rem 0.5rem">
                      <div style="text-align: center">产品案例</div>
                      <ul style="padding-inline-start: 10px">
                          <li >商城开发</li>
                          <li class="li_top">网站开发</li>
                          <li class="li_top">APP开发</li>
                          <li class="li_top">微信开发</li>
                          <li class="li_top">定制软件</li>
                      </ul>
                  </div>
              </el-col>
              <el-col :xs="12"  :sm="6" :md="6" :lg="4" :xl="4" style="display: flex">
                  <div style="padding: 3rem 0.5rem">
                      <div style="text-align: center">售后服务</div>
                        <ul style="padding-inline-start: 10px">
                            <li>电商平台售后</li>
                            <li class="li_top">网站建设售后</li>
                            <li class="li_top">APP开发售后</li>
                            <li class="li_top">微信开发售后</li>
                            <li class="li_top">定制软件售后</li>
                        </ul>
                  </div>
              </el-col>
          </el-row>



      </div>


      <el-backtop  :bottom="100">
          <div
                  style="{
                    height: 100%;
                    width: 100%;
                    background-color: #f2f5f6;
                    box-shadow: 0 0 6px rgba(0,0,0, .12);
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                  }"
          >
              UP
          </div>
      </el-backtop>

  </div>

</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import '../assets/css/swiper.min.css'
import IndustrySolution from '../views/IndustrySolution'
import Services from './Services'
import Case from '../views/Case'
import Quality from '../views/Quality'
import News from '../views/News'
import GuanYu from '../views/Guanyu'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  components: {
    HelloWorld,
      swiper,
      swiperSlide,
      IndustrySolution,
      Services,
      Case,
      Quality,
      News,
      GuanYu
  },
  data() {
    return {
        title_num: {
            is_true: true,
            is_fuwu: true,
            is_anli: true,
            is_fangan: true,
            is_guanyu: false,
            is_xinwen: false
        },
      activeIndex: '1',
      isWidth: '', // 根据宽度改变现实的内容
      active: '', // 样式
        te_cube: 'cube', // coverflow  cube
      div_show: false,
      carousel_height: '', // 高度
      home_list:[
        {
          id: '1',
          name: '首页'
        },
        {
          id: '2',
          name: '提供服务'
        },
        {
          id: '3',
          name: '解决方案'
        },
        {
          id: '4',
          name: '行业案例'
        },
        {
          id: '5',
          name: '新闻动态'
        },
        {
          id: '6',
          name: '关于我们'
        }
      ],
        swiperOption: {
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            centeredSlides: true, //设置slide居中
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            loop:true,
            spaceBetween: 30,
            effect: 'flip',
            // cubeEffect: {
            //     slideShadows: false,
            //     shadow: false,
            //     shadowOffset: 100,
            //     shadowScale: 0.6
            // },
            // on:{
            //     that:'this2',
            //     init: function(){
            //         swiperAnimateCache(this) //隐藏动画元素
            //         swiperAnimate(this); //初始化完成开始动画
            //         console.log(that)
            //         this.params.effect = 'cube'
            //     },
            //     slideChangeTransitionEnd: function(){
            //         swiperAnimate(this)
            //         console.log(this.params.effect)
            //         this.params.effect = 'rotateIn'
            //         console.log('fffffff')
            //     }
            // }
        },
        swiperSlides: [
            require('../assets/img/beijing_1.png'),
            require('../assets/img/beijing_2.png')
        ]
    }
  },
  methods: {
      slideChangeTransitionEnd () {
          // console.log(this.swiperOption.effect)
          var data =[
              'fade','cube','coverflow','flip'
          ]
          var data1 = []
          for (var index in data){
              if (this.swiperOption.effect === data[index]) {

              }else {
                  data1.push(data[index])
              }
          }
          var rand = Math.floor( Math.random() * data1.length );
          console.log(this.swiperOption.effect)
          this.swiperOption.effect = data1[rand]

          // this.$refs.goodSwiper.swiper.params.effect = data1[rand]
          //

          // this.$refs.goodSwiper.swiper.update(true)
          console.log(1,this.$refs.goodSwiper.swiper.params)




          // this.$refs.goodSwiper.swiper.destroy()   //先销毁
          // this.$refs.goodSwiper.swiper.init
          // console.log(this.swiperOption.effect)
      },

    browserRedirect() {
      var sUserAgent = navigator.userAgent.toLowerCase();
      if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        //跳转移动端页面
        console.log('移动端')
      } else {
        //跳转pc端页面
        console.log('PC端')
      }
    },
    // 判读是哪个页面
    handleSelect(key, keyPath){
      this.activeIndex = key
        switch (key) {
            case '1':
                this.title_num.is_true = true
                this.title_num.is_fuwu = true
                this.title_num.is_fangan = true
                this.title_num.is_anli = true
                this.title_num.is_xinwen = false
                this.title_num.is_guanyu = false
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break
            case '2':
                this.title_num.is_true = false
                this.title_num.is_fuwu = true
                this.title_num.is_fangan = false
                this.title_num.is_anli = false
                this.title_num.is_xinwen = false
                this.title_num.is_guanyu = false
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break
            case '3':
                this.title_num.is_true = false
                this.title_num.is_fuwu = false
                this.title_num.is_fangan = true
                this.title_num.is_anli = false
                this.title_num.is_xinwen = false
                this.title_num.is_guanyu = false
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break
            case '4':

                this.title_num.is_true = false
                this.title_num.is_fuwu = false
                this.title_num.is_fangan = false
                this.title_num.is_anli = true
                this.title_num.is_xinwen = false
                this.title_num.is_guanyu = false
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break
            case '5':
                this.title_num.is_true = false
                this.title_num.is_fuwu = false
                this.title_num.is_fangan = false
                this.title_num.is_anli = false
                this.title_num.is_xinwen = true
                this.title_num.is_guanyu = false
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break
            case '6':
                this.title_num.is_true = false
                this.title_num.is_fuwu = false
                this.title_num.is_fangan = false
                this.title_num.is_anli = false
                this.title_num.is_xinwen = false
                this.title_num.is_guanyu = true
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break
        }
      console.log(key,keyPath,this.activeIndex )
    },
    echartsResize() {
      var that = this
      if(this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => { // 只执行最后一个定时器的 结果
        var screenWidth = document.documentElement.clientWidth
        // 获取游览器的宽度 并且判断
        console.log(screenWidth)

          // that.carousel_height = tou_ys.clientHeight
        if (screenWidth< 960) {
          that.isWidth = false
        }else {
          that.div_show =false
          that.isWidth = true
        }
      }, 50); // 推迟 300 ms 在执行resize 效果
    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll !== 0){
        var tou_ys = document.getElementsByClassName('tou_ys')[0]
        tou_ys.style.backgroundColor = '#000'
          var title_div = document.getElementsByClassName('title_div')[0]
          title_div.style.backgroundColor = '#000'

      }else {
        var tou_y = document.getElementsByClassName('tou_ys')[0]
        tou_y.style.backgroundColor = ''
          var title_div = document.getElementsByClassName('title_div')[0]
          title_div.style.backgroundColor = ''
      }
    },
    menu_mouseover () {
      this.active = 'background-color: transparent;'
    },
    menu_mouseout () {
      this.active = 'background-color: transparent;'
    },
    openDiv_show () {
      if (this.div_show){
        this.div_show = false
      } else {
        this.div_show = true
      }
    },
      //首页
      shouye () {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          this.title_num.is_true = true
          this.title_num.is_fuwu = true
          this.title_num.is_fangan = true
          this.title_num.is_anli = true
          this.title_num.is_xinwen = false
          this.title_num.is_guanyu = false
          this.div_show = false
      },
    // 提供服务
    fuwu(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.title_num.is_true = false
        this.title_num.is_fuwu = true
        this.title_num.is_fangan = false
        this.title_num.is_anli = false
        this.title_num.is_xinwen = false
        this.title_num.is_guanyu = false
        this.div_show = false
    },
    // 解决方案
    fangan(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.title_num.is_true = false
        this.title_num.is_fuwu = false
        this.title_num.is_fangan = true
        this.title_num.is_anli = false
        this.title_num.is_xinwen = false
        this.title_num.is_guanyu = false
        this.div_show = false
    },
    // 产品案例
    anli(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.title_num.is_true = false
        this.title_num.is_fuwu = false
        this.title_num.is_fangan = false
        this.title_num.is_anli = true
        this.title_num.is_xinwen = false
        this.title_num.is_guanyu = false
        this.div_show = false
    },
    // 新闻动态
    xinwen(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.title_num.is_true = false
        this.title_num.is_fuwu = false
        this.title_num.is_fangan = false
        this.title_num.is_anli = false
        this.title_num.is_xinwen = true
        this.title_num.is_guanyu = false
        this.div_show = false
    },
    // 关于我们
    guanyu(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.title_num.is_true = false
        this.title_num.is_fuwu = false
        this.title_num.is_fangan = false
        this.title_num.is_anli = false
        this.title_num.is_xinwen = false
        this.title_num.is_guanyu = true
        this.div_show = false
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.echartsResize); // 通过有名函数 解除事件订阅
    window.removeEventListener('scroll', this.menu);
  },
  mounted() {
      // setInterval(() => {
      //     console.log('simulate async data')
      //     if (this.swiperSlides.length < 10) {
      //         this.swiperSlides.push(this.swiperSlides.length + 1)
      //     }
      // }, 3000)
      // console.log(33333333 ,this.swiperOption)
    this.echartsResize()
    window.addEventListener('resize', this.echartsResize);
    window.addEventListener('scroll', this.menu)


  }
}

</script>
<style>
    .li_top{
        padding-top:0.5rem
    }
    .ul{
        padding-inline-start: 10px
    }
    .body-bg {
    position: absolute;
    width: 100%;
    /*border-color: yellow;*/
    /*background-color: white;*/
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: fragments;
  }
  .body-tupian {
    /*width: 100%;*/
  }
  .tou_ys{
    position: fixed;
    width: 100%;
    height: 4rem;
    opacity: 0.8;
    /*border-color: black;*/
    /*color: red;*/
    z-index: 10;
  }
  .tou_ziti{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title_div{
      display: flex;
      justify-content: center
  }
  .menu_neirong{
      background-color: #272E36;
    text-align: left;
    width: 80%;

      cursor:pointer;
      color: white;
  }
  .el-menu-demo{
    height: 0;
  }
  .hover-bg {
    height: 57px;
    background-color: transparent;
    border-bottom: 3px solid #D4B146;;
  }
  .hover-bg-line {
    transition: background-size 300ms linear;
    background: linear-gradient(90deg, #D4B146 0, #D4B146 98%) no-repeat left bottom;
    background-size: 0 3px;
  }

  .hover-bg-line:hover {
    background-size: 100% 3px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
    line-height: 600px;
  }
  .nei_zi {
      padding: 10px 0 10px 20px;
      font-size: 0.8rem;
      transition: background-size 300ms linear;
      background: linear-gradient(90deg, white , white 98%) no-repeat left bottom;
      background-size: 0 2px;
  }
  .nei_zi:hover {
      background-size: 100% 2px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
<style>
  #elmenu_yangshi.el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  #elmenu_yangshi.el-menu--horizontal>.el-menu-item{
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;

  }
</style>
