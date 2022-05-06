<template>
    <div class="song-audio">
        <audio ref="player" 
            :src="url" 
            controls = "controls" 
            preload = "true"
            @canplay="startPlay"
            @ended="ended"
            @timeupdate="timeupdate"
        ></audio>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'song-audio',
    computed: {
        ...mapGetters([
            'id',               //歌曲id
            'url',              //歌曲地址
            'isPlay',           //播放状态
            'listOfSongs',     //当前歌曲列表
            'curTime',         //当前音乐的播放位置
            'changeTime',      //指定播放时刻
            'autoNext',        //用于自动触发播放下一首
            'volume'           //音量
        ])
    },
    watch:{
        //监听播放还是暂停
        isPlay(){
            this.togglePlay();
        },
        //跳转到指定播放时刻
        changeTime(){
            this.$refs.player.currentTime = this.changeTime;
        },
        //改变音量
        volume(val){
            this.$refs.player.volume = val;
        }
    },
    methods:{
        //获取链接后准备播放
        startPlay(){
            let player = this.$refs.player;
            this.$store.commit('setDuration',player.duration);
            //开始播放
            player.play();
            this.$store.commit('setIsPlay',true);
        },
        //播放完成之后触发
        ended(){
           this.$store.commit('setIsPlay',false);
           this.$store.commit('setCurTime',0);
           this.$store.commit('setAutoNext',!this.autoNext);
        },
        //开始、暂停
        togglePlay() {
            let player = this.$refs.player;
            if(this.isPlay){
                player.play();
            }else{
                player.pause();
            }
        },
        //音乐播放时记录音乐的播放位置
        timeupdate(){
            this.$store.commit('setCurTime',this.$refs.player.currentTime);
        }
    }
}
</script>

<style>
    .song-audio {
        display: none;
    }
</style>