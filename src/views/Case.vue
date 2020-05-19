<template>
    <div class="buju_tou">
        <h3 style="padding: 2.5rem">行业案例 Case</h3>
        <el-row style="display: flex;justify-content: center">
            <el-col :xs="0" :sm="18">
                <div style="padding: 0 10rem;">
                    <div style="">
                        <el-row :gutter="5" style="">
                            <el-col v-for="swiper in swiperSlides" :sm="8" :key="swiper.id">
                                <img style="width: 100%;" :src="swiper">
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="0">
                <div style="padding: 0 0.5rem">
                    <div >
                        <el-row :gutter="5">
                            <el-col v-for="swiper in swiperSlides" :sm="8" :key="swiper.id">
                                <img style="width: 100%;height: 100%" :src="swiper">
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
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
                ]
            }
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
