<template>
    <div class="buju_tou">
        <h3 style="padding: 2.5rem">服务项目 Service</h3>
        <div style="display: flex;justify-content: center;">
            <el-row >
                <el-col :xs="24" :sm="8"  :md="8" :lg="8" :xl="8"  v-for="solution in solution_list" :key="solution.id">
                    <div style="padding: 0.5rem 0.5rem;">
<!--                        <el-avatar :size="80" >-->
                            <img :src="solution.icon"/>
<!--                        </el-avatar>-->
                        <div style="font-size: 20px;">
                            {{solution.title}}
                        </div>
                        <div style="font-size: 12px;padding: 0.5rem">
                            {{solution.content}}
                        </div>
                        <div >
                            <el-button style="">立即咨询</el-button>
                        </div>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Services",
        data() {
            return{
                solution_list:[
                    {
                        icon: require('../assets/img/zdlx.png'),
                        title: '终端类型',
                        content: 'APP开发、PC端开发、微信小程序开发'
                    },
                    {
                        icon: require('../assets/img/hyly.png'),
                        title: '行业领域',
                        content: '电商领域、金融领域、房地产领域、政府事业单位、教育领域、传统领域、生产制造业、IT行业'
                    },
                    {
                        icon: require('../assets/img/syms.png'),
                        title: '商业模式',
                        content: '电商系统、新闻系统、在线教育、生活服务、金融平台、视频直播、物联网系统、办公系统'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .buju_tou{
        background-color: #F1EFEF;
        padding: 40px 0 30px;
        text-align: center;
        width: auto;
    }
</style>
