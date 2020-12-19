<template>
    <ul class="nav-top">
       <li>
           <router-link to="/">首页</router-link>
       </li>
        <li>
            <router-link to="/songList">歌单</router-link>
        </li>
        <li>
            <router-link to="/artists">歌手</router-link>
        </li>
        <li>
            <router-link to="/top">榜单</router-link>
        </li>
        <li>
            <router-link to="/mine">我的</router-link>
        </li>
        <li>
            <router-link to="/search">搜索</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style scoped lang="scss">
.nav-top{
    display: flex;
    background: #fff;
    li{
        flex: 1;
        text-align: center;
        padding-top: 10px;
        a{
            display: block;
            padding-bottom: 8px;
        }
        //精准匹配
        .router-link-exact-active {
            border-bottom: 2px solid #ff0000;
        }
    }
}
</style>
