<template>
    <div class="buju_tou">
        <h3 style="padding: 2.5rem">我们的品质 Quality</h3>
        <div>
            <el-row>
                <el-col :xs="0" :sm="24">
                    <el-carousel height="37.5rem" arrow="never" indicator-position="none">
                        <el-carousel-item v-for="slide in swiperSlides" :key="slide.id">
                            <img style="width: 100%;height: 100%" :src="slide">
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :xs="24" :sm="0">
                    <el-carousel height="15rem" arrow="never" indicator-position="none">
                        <el-carousel-item v-for="slide in swiperSlides" :key="slide.id">
                            <img style="width: 100%;height: 100%" :src="slide">
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Quality",
        data() {
            return {
                swiperSlides: [require('../assets/img/a.png'),
                    require('../assets/img/b.png'),
                    require('../assets/img/c.png')]
            }
        }
    }
</script>

<style scoped>
    .buju_tou{
        background-color: #F5F4F4;
        padding: 20px 0 50px;
        text-align: center;
        width: auto;
    }
</style>
