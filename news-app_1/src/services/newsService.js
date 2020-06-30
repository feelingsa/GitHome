//获取新闻内容和类别

import axios from "axios";//导入axios库  npm i axios 安装
import {APPCODE} from "./config"

//获取所有新闻类别

export async function getNewsChannels(){
    var resp = await axios.get("http://ali-news.showapi.com/channelList" ,{   //await 等待 必须放在async函数里
        headers:{
            Authorization: `APPCODE ${APPCODE} ` , //模板字符串拼接 身份认证https://help.aliyun.com/document_detail/157953.html?spm=5176.730006-56956004-57126001-cmapi011150.content.6.8998688fEuXu4v
        },
    });
    return resp.data.showapi_res_body.channelList;
    console.log(111);
    
    
}

/**
 * 按照频道分页获取新闻
 * @param {*} channelId 频道Id 
 * @param {*} page 页数
 * @param {*} limit 每页多少条
 */

export async function getNews( channelId,page = 1,limit = 10){
    var resp = await axios.get("http://ali-news.showapi.com/newsList",{
        headers:{
            Authorization: `APPCODE ${APPCODE} ` ,
        },
        params:{    //参数
            channelId,
            page,
            maxResult:limit,
            needAllList: false,
            needContent:1,
        }
    })
    return resp.data.showapi_res_body.pagebean;

    
    
}

