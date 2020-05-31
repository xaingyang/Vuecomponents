<template>
    <div class="row">
        <h2 v-if="isFirst">初次见面亲多包涵</h2>
        <h2 v-else-if="isLoading">发送请求中，请稍后...</h2>
        <h2 v-else-if="errMsg">请求出错，{{errMsg}}请重新发送请求</h2>
        <div class="card" v-else v-for="user in users" :key="user.user_name">
            <a :href="user.user_url" target="_blank">
                <img :src="user.user_img" style='width: 100px' />
            </a>
            <p class="card-text">{{user.user_name}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios' //导入axios去发送Ajax请求
import VueResource from 'vue-resource' //这是一个插件 官方的插件
import Vue from 'vue'
Vue.use(VueResource) //声明使用插件
    export default {
        mounted () {
            //用来绑定事件  定时器  等等一些异步处理的操作
            this.$bus.$on('searchAjax',this.searchAjax)
        },
        data () {
            return {
                isFirst:true, //看是不是第一次显示页面
                isLoading:false, //看是不是正在发送请求
                errMsg:'', //请求出错后需要保存的信息
                users:[] //请求成功后需要保存的信息
            }
        },
        methods:{
            //axios的使用
            // searchAjax(searchName){
            //     //发送请求的时候我们把页面切换成正在发送请求的页面
            //     this.isFirst = false
            //     this.isLoading = true
            //     axios({
            //         url:' https://api.github.com/search/users',
            //         method:'GET',
            //         params:{
            //             q:searchName
            //         }
            //     }).then(response => {
            //         //如果请求成功，我们需要把成功后的数据进行过滤，填充到我们的数组当中users
            //         this.isLoading = false
            //         //items第一条信息就是一个用户信息 是一个对象
            //         response.data.items.forEach(item => {
            //             //从每一个获取到的数据当中过滤我要找的数据
            //             let user_name = item.login
            //             let user_img = item.avatar_url
            //             let user_url = item.url
            //             //把我要的数据组装成一个对象
            //             let obj = {
            //                 user_name,
            //                 user_img,
            //                 user_url
            //             }
            //             //把数据对象放到我的数据当中
            //             this.users.push(obj)
            //         })
            //     }).catch(error => {
            //         //如果请求失败那么我们得把页面切换成请求失败的页面
            //         this.errMsg = error.message
            //         // this.errMsg = error.statusText
            //         this.isLoading = false
            //     })
            // }

            //axios和await async的使用
            async searchAjax(searchName){
                //发送请求的时候我们把页面切换成正在发送请求的页面
                this.isFirst = false
                this.isLoading = true
                let response = await axios({
                    url:' https://api.github.com/search/users',
                    method:'GET',
                    params:{
                        q:searchName
                    }
                })
                try {
                    //如果请求成功，我们需要把成功后的数据进行过滤，填充到我们的数组当中users
                    this.isLoading = false
                    //items第一条信息就是一个用户信息 是一个对象
                    response.data.items.forEach(item => {
                        //从每一个获取到的数据当中过滤我要找的数据
                        let user_name = item.login
                        let user_img = item.avatar_url
                        let user_url = item.url
                        //把我要的数据组装成一个对象
                        let obj = {
                            user_name,
                            user_img,
                            user_url
                        }
                        //把数据对象放到我的数据当中
                        this.users.push(obj)
                    })
                } catch (error) {
                    //如果请求失败那么我们得把页面切换成请求失败的页面
                    this.errMsg = error.message
                    // this.errMsg = error.statusText
                    this.isLoading = false
                }
            }

            //vue-resource的使用
            // searchAjax(searchName){
            //     //发送请求的时候我们把页面切换成正在发送请求的页面
            //     this.isFirst = false
            //     this.isLoading = true
            //     this.$http({
            //         url:' https://api.github.com/search/users',
            //         method:'GET',
            //         params:{
            //             q:searchName
            //         }
            //     }).then(response => {
            //         //如果请求成功，我们需要把成功后的数据进行过滤，填充到我们的数组当中users
            //         this.isLoading = false
            //         //items第一条信息就是一个用户信息 是一个对象
            //         response.data.items.forEach(item => {
            //             //从每一个获取到的数据当中过滤我要找的数据
            //             let user_name = item.login
            //             let user_img = item.avatar_url
            //             let user_url = item.url
            //             //把我要的数据组装成一个对象
            //             let obj = {
            //                 user_name,
            //                 user_img,
            //                 user_url
            //             }
            //             //把数据对象放到我的数据当中
            //             this.users.push(obj)
            //         })
            //     }).catch(error => {
            //         //如果请求失败那么我们得把页面切换成请求失败的页面
            //         this.errMsg = error.statusText //错误信息拿的时候不再是message
            //         this.isLoading = false
            //     })
            // }
        }
    }
</script>

<style scoped>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card>img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>