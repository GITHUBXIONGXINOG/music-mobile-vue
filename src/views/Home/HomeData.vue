<template>
    <div class="HomeData">
        <music-list title="今日推荐" v-if="todayRecommendData.length>0" :musicData="todayRecommendData"/>
        <music-list title="热门歌单" v-if="hotMusic.length>0" :musicData="hotMusic"/>
        <music-list title="摇滚歌曲" v-if="rockMusic.length>0" :musicData="rockMusic"/>
    </div>
</template>

<script>
import MusicList from '@/components/MusicList/index'
export default {
    name: "HomeData",
    data(){
        return{
            todayRecommendData: [],//今日推荐
            hotMusic:[],//热门歌单
            rockMusic:[],//摇滚音乐
        }
    },
    components:{
      MusicList
    },
    mounted() {
        //今日推荐
        this.$api.getMusicInfo({
            method:'baidu.ting.billboard.billList',
            type: 1,
            size: 6,
            offset: 0
        }).then(res => {
              this.todayRecommendData = res.data.song_list
          })

        //热门歌单
        this.$api.getMusicInfo({
            method:'baidu.ting.billboard.billList',
            type: 2,
            size: 6,
            offset: 0
        }).then(res => {
            this.hotMusic = res.data.song_list

        })

        //摇滚音乐
        this.$api.getMusicInfo({
            method:'baidu.ting.billboard.billList',
            type: 11,
            size: 3,
            offset: 0
        }).then(res => {
            this.rockMusic = res.data.song_list

        })

    },

}
</script>

<style scoped lang="scss">

</style>
