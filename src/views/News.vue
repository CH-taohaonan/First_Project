<template>
    <div class="buju_tou">
        <h3 style="padding: 2.5rem">新闻动态 News</h3>
        <el-row style="display: flex;justify-content: center">
            <el-col :xs="0" :sm="24">
                <div style="padding: 0 10rem;">
                    <div style="">
                        <el-row :gutter="5">
                            <el-col v-for="swiper in swiperList" :sm="24" :lg="8" :key="swiper.id" style="padding-top: 2rem;">

<!--                                <div style="background-color: white">-->
                                <img style="width: 100%;height: 240px;max-width: 300px;min-width: 300px;" :src="swiper.imageurl">
                                <div style="display: flex;justify-content: center">
                                    <div style="padding: 1rem 0;font-size: 18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
                                        display: block;font-weight:bold;background-color: white;max-width: 300px;min-width: 300px;">
                                        {{swiper.title}}
                                    </div>
                                </div>
                                <div style="display: flex;justify-content: center;">
                                    <div style="font-size: 12px;padding-bottom: 1rem;background-color:white;max-width: 300px;min-width: 300px;cursor: pointer"
                                         @click="dianji(swiper.weburl)">
                                        了解更多</div>
                                </div>
<!--                                </div>-->
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="0">
                <div style="padding: 0 0.5rem;">
                    <div style="">
                        <el-row :gutter="5">
                            <el-col v-for="swiper in swiperList" :sm="24" :lg="8" :key="swiper.id" style="padding-top: 2rem;">

                                <!--                                <div style="background-color: white">-->
                                <img style="width: 100%;height: 240px;max-width: 300px;min-width: 300px;" :src="swiper.imageurl">
                                <div style="display: flex;justify-content: center">
                                    <div style="padding: 1rem 0;font-size: 18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
                                        display: block;font-weight:bold;background-color: white;max-width: 300px;min-width: 300px;">
                                        {{swiper.title}}
                                    </div>
                                </div>
                                <div style="display: flex;justify-content: center;">
                                    <div style="font-size: 12px;padding-bottom: 1rem;background-color:white;max-width: 300px;min-width: 300px;cursor: pointer"
                                         @click="dianji(swiper.weburl)">
                                        了解更多</div>
                                </div>
                                <!--                                </div>-->
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Case",
        data () {
            return{
                swiperSlides: [
                    require('../assets/img/al_q1.png'),
                    require('../assets/img/al_q2.png'),
                    require('../assets/img/al_q3.png'),
                    require('../assets/img/al_q4.png'),
                    require('../assets/img/al_q5.png'),
                    require('../assets/img/al_q6.png'),
                    require('../assets/img/al_q7.png'),
                    require('../assets/img/al_q8.png'),
                    require('../assets/img/al_q9.png')
                ],
                swiperList: []
            }
        },
        methods: {
            // 查看新闻资讯信息
            customerInfo() {
                var url = 'https://www.bestkuo.com/api/newsInfo/'
                var param = {
                    pageSize: '9',
                    pageIndex: '0'
                }
                var that = this
                axios.post(url,param)
                    .then(function (resp) {
                        that.swiperList = resp.data.data.newslist
                        window.console.log(resp.data.data)
                    })
            },
            dianji (content) {
                window.open(content)
            }
        },
        mounted () {
            this.customerInfo()
        }
    }
</script>

<style scoped>
    .buju_tou{
        background-color: #F5F4F4;
        padding: 40px 0 50px;
        text-align: center;
        width: auto;
    }
</style>
