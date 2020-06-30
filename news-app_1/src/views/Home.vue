<template>
  <div>
      <Banner :banners="banners" :duration="3000" /><!--duration 图片切换间隔时间-->
      <Channels @change="handleChange"/>
      <Loading v-show="isLoading" />
      <NewsList v-show="!isLoading" :news="news"/><!--:news 绑定news数组-->
  </div>
</template>

<script>
import Banner from "../components/Banner"
import Channels from "../components/news/Channels"
import NewsList from "../components/news/NewsList"
import Loading from "../components/Loading"
import Center from "../components/Center"
import { getNews } from '../services/newsService'

export default {
    components:{
        Banner,
        Channels,
        NewsList,
        Loading,
        Center,
    },
    data(){
        return{
            banners:[
                {link:"www.baidu.com" ,url:require("../assets/banner/banner1.jpeg") },
                {link:"www.bilibili.com" ,url:require("../assets/banner/banner2.jpeg") },
                {link:"www.dilidili.com" ,url:require("../assets/banner/banner3.jpeg") },
            ],
            news:[],//创建news数组存放news
            isLoading: true
        };
    },

    methods:{
        async handleChange(channelId){ //频道改变获取频道ID
            this.isLoading =true;//在加载获取数据前余姚一段时间
            var resp = await getNews(channelId,1,10);//通过评到ID获取新闻 传给news数组
            this.news=resp.contentlist;   
            this.isLoading =false;
            console.log(resp.contentlist);
            
        }
    }
};
</script>

<style>

</style>