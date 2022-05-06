import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import MyMusic from '@/pages/MyMusic'
import Singer from '@/pages/Singer'
import SongList from '@/pages/SongList'
import Search from '@/pages/Search'
import Lyric from '@/pages/lyric'
import SignUp from '@/pages/SignUp'
import LoginIn from '@/pages/LoginIn'
import Setting from '@/pages/Setting'
import SingerAlbum from '@/pages/SingerAlbum'
import SongListAlbum from '@/pages/SongListAlbum'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my-music',
      name: 'my-music',
      component: MyMusic
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/song-list',
      name: 'song-list',
      component: SongList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/lyric',
      name: 'lyric',
      component: Lyric
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/login-in',
      name: 'login-in',
      component: LoginIn
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/singer-album/:id',
      name: 'singer-album',
      component: SingerAlbum
    },
    {
      path: '/song-list-album/:id',
      name: 'song-list-album',
      component: SongListAlbum
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
