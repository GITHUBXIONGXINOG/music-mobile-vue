<template>
    <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in swiperImg" :key="index">
            <div class="banner">
                <img :src="item" alt="">
            </div>
        </swiper-slide>

        <!--分页器-->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name: "Carousel",
    data(){
        return{
            //轮播图配置
            swiperOptions: {
                //循环
                loop:true,
                //分页器
                pagination: {
                    el: '.swiper-pagination',
                    //可点击跳转
                    clickable:true,
                }
            },

        }
    },
    props:{
        //图片列表
        swiperImg: {
            type: Array,
            required: true
        }
    },

}
</script>

<style scoped lang="scss">
//轮播图样式
.banner{
    padding: 10px;
    img{
        border-radius: 10px;
    }
}

</style>
