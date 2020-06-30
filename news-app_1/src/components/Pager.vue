<template>
    <div class="pager" v-if="total>0">
        <a href="" class="pager-item" :class="{
            disabled: page=== 1,
        }"
        @click.prevent="handleChange(1)"
        >首页</a>
        <a href="" class="pager-item" :class="{
            disabled: page=== 1,
        }"
        @click.prevent="handleChange(page-1)"
        >上一页</a>

        <span class="pager-text">
            <i>{{page}}</i>
            /
            <i>{{pageNumber}}</i>
        </span>
    </div>
</template>

<script>
export default {
    props:{
        page:{
            //当前页码
            default:1,
            type:Number,
        },
        total:{
            //总数据量
            default:0,
            type:Number,
        },
        limit:{
            //页容量
            default:10,
            type:Number,
        },
        paneNumber:{
            //最多显示多少数字页码
            default:10,
            type:Number,
        },
    },
    computed:{
        //总页数
        pageNumber(){
            return Math.ceil(this.total/this.limit);
        }
    },
    methods:{
        handleChange(newPage){
             this.$emit("pageChange", newPage);//监听触发事件
            console.log(newPage);
            
        }
    }
}
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>