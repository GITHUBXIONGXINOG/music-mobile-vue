<template>
    <div class="home">
        <Nav />
        <home-data />
        <Carousel :swiperImg="swiperImg"/>
    </div>
</template>

<script>
import Nav from "@/components/Nav";
import HomeData from "@/views/Home/HomeData";
import Carousel from "@/components/Carousel"
export default {
    name: "Home",
    components: {
        Nav,//顶部导航
        HomeData,//数据
        Carousel,//轮播图
    },
    data(){
        return{
            //图片列表
            swiperImg: [
                require('../../assets/img/b1.jpg'),
                require('../../assets/img/b2.jpg'),
                require('../../assets/img/b3.jpg'),
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
