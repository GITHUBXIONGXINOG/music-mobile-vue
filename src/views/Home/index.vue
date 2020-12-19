<template>
    <div class="home">
        <Nav />
        <home-data />
    </div>
</template>

<script>
import Nav from "@/components/Nav";
import HomeData from "@/views/Home/HomeData";
export default {
    name: "Home",
    components: {
        Nav,//顶部导航
        HomeData,//数据
    },

}
</script>

<style lang="scss" scoped>

</style>
