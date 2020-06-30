import Vue from 'vue';
import App from './App.vue';
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from "./routers/index"


new Vue({
  render: h => h(App),
  router:router,//配置路由到Vue实例中
}).$mount('#app')
