<template>
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStar">
      <ul class="images" :style="{
        width: banners.length *100+'%',
        marginLeft: -index*100 +'%',
        }">
          <li v-for="(item,i) in banners" :key="i">
            <a :href="item.link"><img :src="item.url" /></a>    
          </li>
      </ul>

     <ul class="dots">
         <li  v-for="(item,i) in banners" :key="i" :class="{active: i==index}" @click="index=i"></li>
     </ul>
  </div>
</template>

<script>
export default {
  props: {
    banners:{
      type: Array,      //属性类型必须是数组
      required: true,   //必须要传递该属性
    }
    },
    data(){
      return{
        index: 0,
        timer: null,
      }
  },
  created(){
    this.autoStar()//组件调用前 开始轮播
  },
  destroyed(){
    this.autoStop()//组件销毁后 结束轮播
  },
  methods:{

    autoStar(){
      if(this.timer){//判断是否为空
        return; 
      }
      this.timer = setInterval(()=>{
        this.index = (this.index +1) % this.banners.length;//(0+1)/3=1;(1+1)/3=2轮回
      },2000)
    },
    autoStop(){
      clearInterval(this.timer);//清空timer
      this.timer=null;
    }
  }
}
</script>

<style scoped>    /* scoped 组件样式绑定 打包后加标签和其他区别  */   
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.banner-container img {
  width: 1080px;
  height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>