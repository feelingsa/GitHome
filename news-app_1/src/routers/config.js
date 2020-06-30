import Home from"@/views/Home";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";


export default{
    
    mode:"history",//hash 默认路径是#后面的  history  真实地址路径 
    routes:[
        {
            path:"/",
            name:"Home",
            component: ()=>import("@/views/Home"),//wepack 动态导入
        },
        {
            path:"/login",
            name:"Login",
            component: ()=>import("@/views/Login"),
        },
        {
            path:"/reg",
            name:"Reg",
            component: ()=>import("@/views/Reg"),
        },
        {
            path:"/channel/:id",
            name:"ChannelNews",
            component: ()=>import("@/views/ChannelNews"),
        },
        {
            path:"*",
            name:"404",
            component: ()=>import("@/views/NotFound"),
        },
    ],
}