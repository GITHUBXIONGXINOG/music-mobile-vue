<template>
    <div class="MusicList">
        <div class="block-padding">
            <div class="title">
                <h3>{{title}}</h3>
                <a href="#">更多</a>
            </div>
            <div class="list clearfix" v-if="musicData.length>0">
                <a href="#" class="item" v-for="(item,index) in musicData" :key="index"
                    :class="{'clear-padding':index%3 !== 1}"
                >
                    <div class="img-wrapper">
                        <img :src="item.pic_radio" alt="">
                    </div>
                    <div class="main">{{setText(item.title)}}</div>
                    <div class="gray">{{setText(item.author)}}</div>
                </a>
            </div>
            <div v-else>正在加载数据...</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MusicList",
    props:{
      musicData: {
          type: Array,
          required: true
      },
        title: {
            type: String,
            default: ""
        }
    },
    data(){
        return{

        }
    },
    methods:{
        //超出指定长度显示省略号
        setText(text){
            if (text.length > 8){
                text = text.substring(0,8)+"..."
                return text
            }
          return text
        }
    }


}
</script>

<style scoped lang="scss">
.MusicList {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>
