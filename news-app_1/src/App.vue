<template>
  <div id="app">
    <Header/>
    <div class="container">
      <!-- router 安装好后会有一个router-view组件 该组件会根据不同的访问路径渲染不同的组件 -->
      <router-view></router-view>
     
    </div>
  </div>
</template>


<script>
import Header from "./components/Header"

export default {
  components:{

    Header
  },

 
}
</script>



<style scoped>
.container{
  margin: 30px auto;
}

</style>