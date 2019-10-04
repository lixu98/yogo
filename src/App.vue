<template>
  <div id="app">
    <my-header v-show="this.$route.meta.showHeader"></my-header>
    <router-view/>
    <my-footer v-show="this.$route.meta.showFooter"></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'
import "./assets/css/common.css"
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFooter
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: #000;
}
.activeClass{
    background-color: pink;
}
</style>
