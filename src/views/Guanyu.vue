<template>
    <div class="buju_tou">
        <el-row>
            <el-col :xs="0"  :sm="24" >
                <div style="display: flex;padding:  0 5%;justify-content: center">
                    <el-row>
                        <el-col :xs="24" :sm="24" :md="12" style="display: flex;justify-content: center;padding-right: 5rem">
                            <div style="padding: 0.5rem;width: 500px">
                                <h4 style="font-size: 2rem">湖北优阔网络科技有限公司</h4>
                                <div style="padding-top: 1rem">湖北优阔网络科技有限公司是一家专注企业信息化软件、移动APP、企业网站、电子商城、视频直播、政务信息化、智能硬件等系统开发的技术服务企业。开发团队拥有成熟的开发技术和完备的开发售后服务 ，立足于荆楚大地信息化产业发展，积极开发相关技术产品，致力于移动互联网应用的开发与创新，为客户提供专业、优质、个性化的企业应用开发和定制。 Hubei Youkuo Network Technology Co., Ltd. is a technical service enterprise specializing in the construction of customized enterprise information, providing customers with professional, high-quality, personalized enterprise application development and customization.</div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12">
                            <div style="padding: 1rem;text-align: center">
                                <img  src="../assets/img/bgcj.png">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :xs="24" :sm="0" >
                <div style="display: flex;padding:  0 1rem">
                    <el-row>
                        <el-col :xs="24" :sm="12">
                            <div style="padding: 0.5rem">
                                <div style="font-size: 2rem">公司简介</div>
                                <div style="padding-top: 1rem">公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介</div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12">
                            <div style="padding: 1rem;">
                                <img style="width: 90%;"  src="../assets/img/bgcj.png">
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
       <div style="text-align: center">
            <div>
                <h4 style="font-size: 2rem">服务流程</h4>
            </div>
           <div style="display: inline;justify-content: center">
               <el-row >
                   <el-col :xs="0" :sm="24">
                       <el-row style="padding: 1rem">
                           <el-col :xs="24" :sm="16" style="padding-top: 0.5rem" >
                               <el-row style="height: 20rem;">
                                   <el-col v-for="(fuwu,index) in fuwu_list" :key="fuwu.id" :xs="6" :sm="6" class="elcol_xq" >
                                       <div v-if="index%2 === 1 && index< 4" @mouseover="xuanzhong(index)" @click="xuanzhong(index)" class="xuanzhong" style="background-color: white;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
                                           <div v-if="fuwu.isTrue">
                                               <img  :src="fuwu.imgs">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                           <div v-else>
                                               <img  :src="fuwu.img">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                       </div>
                                       <div v-else-if="index%2 !== 1 && index>= 4" @mouseover="xuanzhong(index)" @click="xuanzhong(index)" class="xuanzhong" style="background-color: white;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
                                           <div v-if="fuwu.isTrue">
                                               <img  :src="fuwu.imgs">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                           <div v-else>
                                               <img  :src="fuwu.img">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                       </div>
                                       <div v-else @mouseover="xuanzhong(index)" @click="xuanzhong(index)" class="xuanzhong" style="background-color: #F7F5F5;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
                                           <div v-if="fuwu.isTrue">
                                               <img  :src="fuwu.imgs">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                           <div v-else>
                                               <img  :src="fuwu.img">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                       </div>
                                   </el-col>
                               </el-row>
                           </el-col>
                           <el-col :xs="24" :sm="8" style="padding-left: 3rem;padding-top: 0.5rem">
                               <div >
                                   <div style="height: 20rem;background-color: #19C097;color: white">
                                       <div>{{xuqiu_name}}</div>
                                       <div style="padding: 2rem">{{xuqiu_content}}</div>
                                   </div>

                               </div>
                           </el-col>
                       </el-row>
                   </el-col>
                   <el-col :xs="24" :sm="0">
                       <el-row style="padding: 1rem">
<!--                           <el-col :xs="24" :sm="16">-->
<!--                               <el-row style="height: 10rem;">-->
<!--                                   <el-col  :xs="12" :sm="6" class="elcol_xq" style="background-color: #19C097;color: white">-->
<!--                                       <div >-->
<!--                                           <img  src="../assets/img/xqsj.png">-->
<!--                                           <div >需求收集</div>-->
<!--                                       </div>-->

<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="background-color: #F7F5F5">-->
<!--                                       <div >-->
<!--                                           <img  src="../assets/img/xmbj.png" style="height: 54px">-->
<!--                                           <div >项目报价</div>-->
<!--                                       </div >-->
<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="height: 50%;">-->
<!--                                       <div>-->
<!--                                           <img  src="../assets/img/faqd.png" style="height: 54px">-->
<!--                                           <div >方案确定</div>-->
<!--                                       </div>-->
<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="height: 50%;background-color: white">-->
<!--                                       <div>-->
<!--                                           <img  src="../assets/img/cysj.png" style="height: 54px">-->
<!--                                           <div >创意设计</div>-->
<!--                                       </div>-->
<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="height: 50%;background-color: white">-->
<!--                                       <div>-->
<!--                                           <img  src="../assets/img/cxkf.png" style="height: 54px">-->
<!--                                           <div >程序开发</div>-->
<!--                                       </div>-->
<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="height: 50%;">-->
<!--                                       <div>-->
<!--                                           <img  src="../assets/img/khsh.png" style="height: 54px">-->
<!--                                           <div >客户审核</div>-->
<!--                                       </div>-->
<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="height: 50%;">-->
<!--                                       <div>-->
<!--                                           <img  src="../assets/img/khys.png" style="height: 54px">-->
<!--                                           <div >客户验收</div>-->
<!--                                       </div>-->
<!--                                   </el-col>-->
<!--                                   <el-col :xs="12" :sm="6" class="elcol_xq" style="height: 50%;background-color: white">-->
<!--                                       <div>-->
<!--                                           <img  src="../assets/img/hqwh.png" style="height: 54px">-->
<!--                                           <div >后期维护</div>-->
<!--                                       </div>-->
<!--                                   </el-col>-->
<!--                               </el-row>-->
<!--                           </el-col>-->
<!--                           <el-col :xs="24" :sm="8" >-->
<!--                               <div >-->
<!--                                   <div style="height: 10rem;background-color: #19C097;color: white">需求收集</div>-->
<!--                               </div>-->
<!--                           </el-col>-->
                           <el-col :xs="24" :sm="16"  >
                               <el-row style="height: 10rem;">
                                   <el-col v-for="(fuwu,index) in fuwu_list" :key="fuwu.id" :xs="6" :sm="6" class="elcol_xq1" >
                                       <div v-if="index%2 === 1 && index< 4" @mouseover="xuanzhong1(index)" @click="xuanzhong(index)" class="xuanzhong1" style="background-color: white;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
                                           <div v-if="fuwu.isTrue">
                                               <img  :src="fuwu.imgs">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                           <div v-else>
                                               <img  :src="fuwu.img">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                       </div>
                                       <div v-else-if="index%2 === 1 && index>= 4" @mouseover="xuanzhong1(index)"  @click="xuanzhong(index)" class="xuanzhong1" style="background-color: white;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
                                           <div v-if="fuwu.isTrue">
                                               <img  :src="fuwu.imgs">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                           <div v-else>
                                               <img  :src="fuwu.img">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                       </div>
                                       <div v-else @mouseover="xuanzhong1(index)" @click="xuanzhong(index)" class="xuanzhong1" style="background-color: #F7F5F5;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center">
                                           <div v-if="fuwu.isTrue">
                                               <img  :src="fuwu.imgs">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                           <div v-else>
                                               <img  :src="fuwu.img">
                                               <div >{{fuwu.name}}</div>
                                           </div>
                                       </div>
                                   </el-col>
                               </el-row>
                           </el-col>
                           <el-col :xs="24" :sm="8" style="padding-top: 0.5rem">
                               <div >
                                   <div style="height: 20rem;background-color: #19C097;color: white">
                                       <div>{{xuqiu_name}}</div>
                                       <div style="padding: 2rem">{{xuqiu_content}}</div>
                                   </div>

                               </div>
                           </el-col>
                       </el-row>
                   </el-col>
               </el-row>



           </div>
       </div>
        <div style="padding-top: 40px">
            <el-row style="text-align: center">
                <el-col v-for="(info,index) in info_list" :key="info.id"  :xs="24" :sm="8" style="background-color:  white;height: 100%">
                    <div @mouseover="info_xz(index)" @click="info_xz(index)" class="info_xuanzhong" >
                        <div v-if="info.isTrue">
                            <img :src="info.imgs" style="height: 100px">
                            <div style="padding: 0.1rem">{{info.name}}</div>
                            <div style="padding: 0.1rem">{{info.content}}</div>
                        </div>
                        <div v-else>
                            <img :src="info.img" style="height: 100px">
                            <div style="padding: 0.1rem">{{info.name}}</div>
                            <div style="padding: 0.1rem">{{info.content}}</div>
                        </div>
                    </div>

                </el-col>
            </el-row>
        </div>
        <div class="back_img">
            <div style="width: 100%;display: flex;justify-content: center">
                <el-form style="width: 80%;max-width: 600px"  >
                    <el-form-item >
                        <el-input placeholder="您的尊称"  v-model="user_info.customname"></el-input>
                    </el-form-item>
                    <el-form-item  >
                        <div style="display: flex;justify-content: space-between">
                        <el-col :span="11">
                            <el-input placeholder="邮箱" v-model="user_info.email"></el-input>
                        </el-col>
                        <el-col :span="11">
                            <el-input placeholder="微信" v-model="user_info.wechat"></el-input>
                        </el-col>
                        </div>
                    </el-form-item>
                    <el-form-item  >
                        <div style="display: flex;justify-content: space-between">
                            <el-col :span="11">
                                <el-input placeholder="QQ" v-model="user_info.qq"></el-input>
                            </el-col>
                            <el-col :span="11">
                                <el-input placeholder="电话" v-model="user_info.phone"></el-input>
                            </el-col>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-input  type="textarea" resize="none"
                                   :rows="3" placeholder="需求" v-model="user_info.content"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align: center">
                        <el-button type="primary" @click="tijiao">提交留言</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Guanyu",
        data () {
            return{
                user_info:{
                    customname: '',
                    phone: '',
                    email: '',
                    qq: '',
                    wechat: '',
                    content: ''
                }, // 客户信息
                xuqiu_name: '',
                xuqiu_content: '',
                fuwu_list:[
                    {
                        img: require('../assets/img/xqsj.png'),
                        imgs: require('../assets/img/xqsj_s.png'),
                        name: '需求收集',
                        content: '123',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/xmbj.png'),
                        imgs: require('../assets/img/xmbj_s.png'),
                        name: '项目报价',
                        content: '456',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/faqd.png'),
                        imgs: require('../assets/img/faqd_s.png'),
                        name: '方案确定',
                        content: '',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/cysj.png'),
                        imgs: require('../assets/img/cysj_s.png'),
                        name: '创意设计',
                        content: '',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/cxkf.png'),
                        imgs: require('../assets/img/cxkf_s.png'),
                        name: '程序开发',
                        content: '',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/khsh.png'),
                        imgs: require('../assets/img/khsh_s.png'),
                        name: '客户审核',
                        content: '',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/khys.png'),
                        imgs: require('../assets/img/khys_s.png'),
                        name: '客户验收',
                        content: '',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/hqwh.png'),
                        imgs: require('../assets/img/hqwh_s.png'),
                        name: '后期维护',
                        content: '',
                        isTrue: false
                    }
                ],
                info_list:[
                    {
                        img: require('../assets/img/yx.png'),
                        imgs: require('../assets/img/yx_s.png'),
                        name: '邮箱',
                        content: '656478992@qq.com',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/dh.png'),
                        imgs: require('../assets/img/dh_s.png'),
                        name: '电话',
                        content: '18574658756',
                        isTrue: false
                    },
                    {
                        img: require('../assets/img/dz.png'),
                        imgs: require('../assets/img/dz_s.png'),
                        name: '地址',
                        content: '湖北省',
                        isTrue: false
                    }
                ]
            }
        },
        methods: {
            xuanzhong(index) {
                var list = []
                list = document.getElementsByClassName('xuanzhong')
                var that = this
                for (var dex in this.fuwu_list){
                        if (String(index) === String(dex)) {
                            document.getElementsByClassName('xuanzhong')[index].style.backgroundColor = '#19C097'
                            document.getElementsByClassName('xuanzhong')[index].style.color = '#ffffff'
                            that.xuqiu_content = this.fuwu_list[dex].content
                            that.xuqiu_name = this.fuwu_list[dex].name
                            this.fuwu_list[dex].isTrue = true
                        }else {
                            this.fuwu_list[dex].isTrue = false
                            if (dex === 'length') {
                            }else if(dex === 'item'){
                            }else if(dex === 'namedItem'){
                            }
                            else {
                                if (dex%2 ===1 && dex< 4) {
                                    document.getElementsByClassName('xuanzhong')[dex].style.backgroundColor = '#FFFFFF'
                                    document.getElementsByClassName('xuanzhong')[dex].style.color = ''
                                }else if(dex%2 !== 1 && dex>=4){
                                    document.getElementsByClassName('xuanzhong')[dex].style.backgroundColor = '#FFFFFF'
                                    document.getElementsByClassName('xuanzhong')[dex].style.color = ''
                                }else {
                                    document.getElementsByClassName('xuanzhong')[dex].style.backgroundColor = '#F7F5F5'
                                    document.getElementsByClassName('xuanzhong')[dex].style.color = ''
                                }
                            }
                        }


                }

            },
            xuanzhong1(index) {
                var that = this
                for (var dex in this.fuwu_list){
                    if (String(index) === String(dex)) {
                        document.getElementsByClassName('xuanzhong1')[index].style.backgroundColor = '#19C097'
                        document.getElementsByClassName('xuanzhong1')[index].style.color = '#ffffff'
                        that.xuqiu_content = this.fuwu_list[dex].content
                        that.xuqiu_name = this.fuwu_list[dex].name
                        this.fuwu_list[dex].isTrue = true
                    }else {
                        this.fuwu_list[dex].isTrue = false
                        if (dex === 'length') {
                        }else if(dex === 'item'){
                        }else if(dex === 'namedItem'){
                        }
                        else {
                            if (dex%2 ===1 && dex< 4) {
                                document.getElementsByClassName('xuanzhong1')[dex].style.backgroundColor = '#FFFFFF'
                                document.getElementsByClassName('xuanzhong1')[dex].style.color = ''
                            }else if(dex%2 === 1 && dex>=4){
                                document.getElementsByClassName('xuanzhong1')[dex].style.backgroundColor = '#FFFFFF'
                                document.getElementsByClassName('xuanzhong1')[dex].style.color = ''
                            }else {
                                document.getElementsByClassName('xuanzhong1')[dex].style.backgroundColor = '#F7F5F5'
                                document.getElementsByClassName('xuanzhong1')[dex].style.color = ''
                            }
                        }
                    }


                }

            },
            info_xz (index) {
                var that = this
                for (var dex in this.info_list){
                    if (String(index) === String(dex)) {
                        document.getElementsByClassName('info_xuanzhong')[index].style.backgroundColor = '#19C097'
                        document.getElementsByClassName('info_xuanzhong')[index].style.color = '#ffffff'
                        that.info_list[index].isTrue = true
                    }else {
                        document.getElementsByClassName('info_xuanzhong')[dex].style.backgroundColor = '#ffffff'
                        document.getElementsByClassName('info_xuanzhong')[dex].style.color = ''
                        that.info_list[dex].isTrue = false
                    }
                }
            },
            tijiao () {
                var url = 'https://www.bestkuo.com/api/createCustomer/'
                var param = {
                    customname: this.user_info.customname,
                    phone: this.user_info.phone,
                    email: this.user_info.email,
                    qq: this.user_info.qq,
                    wechat: this.user_info.wechat,
                    content: this.user_info.content,
                }
                var that = this
                axios.post(url,param)
                    .then(function (resp) {
                        // console.log('成功')
                        that.user_info = []
                    })
            }
        },
        mounted () {
            this.fuwu_list[0].isTrue = true
            this.info_list[1].isTrue = true
            document.getElementsByClassName('xuanzhong')[0].style.backgroundColor = '#19C097'
            document.getElementsByClassName('xuanzhong')[0].style.color = '#ffffff'
            document.getElementsByClassName('xuanzhong1')[0].style.backgroundColor = '#19C097'
            document.getElementsByClassName('xuanzhong1')[0].style.color = '#ffffff'
            document.getElementsByClassName('info_xuanzhong')[1].style.backgroundColor = '#19C097'
            document.getElementsByClassName('info_xuanzhong')[1].style.color = '#ffffff'
            this.xuqiu_content = this.fuwu_list[0].content
            this.xuqiu_name = this.fuwu_list[0].name

        }
    }
</script>

<style scoped>
    .buju_tou{
        background-color: #F5F4F4;
        padding: 40px 0 50px;
        /*text-align: center;*/
        width: auto;
    }
    .elcol_xq{
        height: 50%;
        /*display: flex;*/
        /*padding: 0.5rem;*/
        /*align-items: center;*/
        /*justify-content: center;*/

        max-width: 50%;
        min-width: 100px;
    }
    .elcol_xq1{
        height: 50%;
        /*display: flex;*/
        /*padding: 0.5rem;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        width: 100%;
        max-width: 50%;
        min-width: 100px;
    }
    .back_img{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        background-image: url('../assets/img/ditu.png');
        background-repeat: no-repeat;
        height: 100vh;
    }
    /*/deep/input::-webkit-input-placeholder {*/
    /*    color: black;*/
    /*}*/
    /*/deep/textarea::-webkit-input-placeholder {*/
    /*    color: black;*/
    /*}*/


</style>
<style>

</style>
