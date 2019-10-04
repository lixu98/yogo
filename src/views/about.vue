<template>
  <div class="container g-piclist">
      <div class="g-return">
        <div class="text"><a href="javascript:;" @click="handle">首页</a> > 关于我们</div>
      </div>
      <router-link to="/about">介绍我们</router-link>
      <router-link to="/about/two">产品介绍</router-link>
      <router-link to="/about/three">相关新闻</router-link>
      <div class="content-slide">
        <transition :name="direction" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
      </div>
  </div>
</template>

<script>
import MyTitle from '../components/title'
export default {
    data(){
        return{
            direction:"right"
        }
    },
    components:{
        MyTitle
    },
    methods:{
        handle(){
            this.$router.push({path:"/"});
        }
    },
    watch:{
        $route(to,from){
            if (to.meta.index<from.meta.index) {
                this.direction="right";
            }else{
                this.direction="left";
            }
        }
    }
}
</script>

<style>
.container{
    padding: 20px 50px;
}
.container a{
    color: black;
    text-decoration: none;
    margin-right: 50px;
}
.content-slide{
    width: 100%;
    background:#ecfde7;
    margin: 0px auto;
    font-size: 14px;
    color: #000;
    padding: 50px;
}
.g-return{
	color: #74846B;
	height: 80px;
	width: 100%;
}
.g-return a{
	color: #74846B;
}
.g-return .text{
	float: left;
	line-height: 80px;
}
.g-piclist p{
	padding: 40px 45px 40px 20px;
	line-height: 30px;
	text-indent: 32px;
}
.g-piclist p.u-firstP{
	padding-bottom: 0px;
}
.g-piclist p.u-lastP{
	padding-top: 15px;
}
/* .v-enter{
    opacity: 0;
}
.v-enter-to{
    opacity: 1;
}
.v-enter-active{
    transition: 1s;
}
.v-leave{
    opacity: 1;
}
.v-leave-to{
    opacity: 0;
}
.v-leave-active{
    transition: 1s;
} */
.right-enter{
    transform: translateX(-100px);
}
.right-enter-to{
    transform: translateX(0px);
}
.right-enter-active{
    transition: 1s;
}
.left-enter{
    transform: translateX(100px);
}
.left-enter-to{
    transform: translateX(0px);
}
.left-enter-active{
    transition: 1s;
}
</style>
