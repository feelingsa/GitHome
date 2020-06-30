<template>
    <Center>
       
    <div>
        <Pager :page="page" :limit="10" :total="2011" :pannelNumber="6" @pageChange="handleChange" />
    </div>
    </Center>

</template>

<script>
import Center from "../components/Center"
import Pager from "../components/Pager"
export default {
    components:{
        Center,
        Pager,
    },
    data(){
        return{
            page:4,
        };
    },
    methods:{
        handleChange(newPage){
            this.page=newPage;
            console.log("this is channelnews page:"+this.page);
            
        },
    }
}
</script>

<style>

</style>