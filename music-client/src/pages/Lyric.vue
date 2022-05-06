<template>
    <div class="song-lyric">
        <h1 class="lyric-title">歌词</h1>
        <!-- 有歌词 -->
        <ul class="has-lyric" v-if="lyr.length" key="index">
            <li v-for="(item,index) in lyr" v-bind:key="index">
                {{item[1]}}
            </li>
        </ul>
        <!-- 没有歌词 -->
        <div v-else class="no-lyric" key="no-lyric">
            <span>暂无歌词</span>
        </div>
    </div>
</template>
<script>
import {mixin} from '../mixins';
import {mapGetters} from 'vuex';

export default {
    name: 'lyric',
    mixins: [mixin],
    data(){
        return {
            lyr: []         //当前歌曲的歌词
        }
    },
    computed: {
        ...mapGetters([
            'curTime',      //当前歌曲播放到的位置
            'id',           //当前播放的歌曲id
            'lyric',        //歌词
            'listIndex',    //当前歌曲在歌单中的位置
            'listOfSongs',  //当前歌单列表
        ])
    },
    created(){
        this.lyr = this.lyric;
    },
    watch:{
        id:function(){
            this.lyr = this.parseLyric(this.listOfSongs[this.listIndex].lyric)
        },
        curTime: function(){
            if(this.lyr.length>0){
                for(let i=0;i<this.lyr.length;i++){
                    if(this.curTime>=this.lyr[i][0]){
                        for(let j=0;j<this.lyr.length;j++){
                            document.querySelectorAll('.has-lyric li')[j].style.color = '#000';
                            document.querySelectorAll('.has-lyric li')[j].style.fontSize = '15px';
                        }
                        if(i>=0){
                            document.querySelectorAll('.has-lyric li')[i].style.color = '#95d2f6';
                            document.querySelectorAll('.has-lyric li')[i].style.fontSize = '25px';
                        }
                    }
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/lyric.scss';
</style>