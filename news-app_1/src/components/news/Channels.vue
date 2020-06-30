<template>
  <div class="news-types" v-if="channels.length >0">
      <div class="item" v-for="item in showChannels" 
      :key="item.channelId"
      :class="{
          active: item.channelId==chooseId,
          }"
        @click="switchTo(item.channelId)"      
    ><span class="name">{{item.name}}</span></div>

      <a href="" @click.prevent="isCollapse=!isCollapse">{{isCollapse?"展开":"收起"}}</a>
  </div>
</template>

<script>
import {getNewsChannels} from "../../services/newsService"
export default {
    data(){
        return{
            channels:[],//先定义一个空数组 通过Create函数在页面加载前从服务器获取数据
            isCollapse: true,// 控制是否折叠
            chooseId: null,
        };
                     
    },
    computed:{
        //计算属性 需要显示的频道
        showChannels(){
            if (this.isCollapse){
                return this.channels.slice(0,8);//折叠状态显示8个
            }else{
                return this.channels;
            }
        }
    },
    async created(){
      var resp = await getNewsChannels();
      this.channels =resp;
      this.switchTo(this.channels[0].channelId);
    },
    methods:{
        //切换chooseId
        switchTo(id){
            this.chooseId= id;
            this.$emit("change",this.chooseId)
        }
    }
}
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>