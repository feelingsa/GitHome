import VueRouter from "vue-router";
import Vue from "vue";
import config from "./config"

//1.安装
Vue.use(VueRouter);

//2.创建路由对象
var router =new VueRouter(
  //配置
  config   //hash 默认路径是#后面的  history 默认路径是/后面的 
);



export default router;//导出