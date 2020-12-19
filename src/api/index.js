import base from "@/api/base";
import axios from '@/utils/https'

const getData = {
    //获取推荐歌曲
    getMusicInfo(params){
        return axios.get(base.baseUrl+base.type,{
            // params:params
            params
        })
    }

}

export default getData
