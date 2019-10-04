<template>
  <div>
    <header>
        <img src="../assets/img/index/head.png"/>
    </header>
    <!--导航条  -->
    <div class="main">
        <ul class="clearfix">
            <li><img src="../assets/img/index/logo.png" /></li>
            <li><router-link to="/">首页</router-link></li>
            <li @mouseover="isShow1=!isShow1" @mouseout="isShow1=!isShow1" class="m-header">黑莓系列
                <my-pop v-show="isShow1" :pic-data="picList1"></my-pop>
            </li>
            <li @mouseover="isShow2=!isShow2" @mouseout="isShow2=!isShow2" class="m-header">蓝莓系列
                <my-pop v-show="isShow2" :pic-data="picList2"></my-pop>
            </li>
            <li><router-link to="/center">个人中心</router-link></li>
            <li><router-link to="/order">我的订单</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
            <li v-if="!isLogin"><router-link to="/login">登录</router-link></li>
            <li v-else>{{loginName}}|<span @click="out">退出登录</span></li>
            <li>
                <span @click="close">我的购物车</span>
                <my-cart v-show="isShowCart" @myClose="close"></my-cart>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import MyPop from './pop'
import MyCart from './cart'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            isShowCart:false,
            isShow1:false,
            picList1:[
                {id:2,pic:require("../assets/img/index/product2.png"),
                title:"随心购【金色纪念款-瓶装】 60瓶/箱*1箱",price:"￥1930"},
                {id:3,pic:require("../assets/img/index/product3.png"),
                title:"随心购【金色纪念款-瓶装】 60瓶/箱*1箱",price:"￥1930"},
                {id:4,pic:require("../assets/img/index/product4.png"),
                title:"畅心体验装【金色纪念款-瓶装】 60瓶/箱*2箱",price:"￥3120"},
                {id:5,pic:require("../assets/img/index/product5.png"),
                title:"随心购【金色纪念款-瓶装】 60瓶/箱*1箱",price:"￥1930"}
            ],
            isShow2:false,
            picList2:[
                {id:6,pic:require("../assets/img/index/product6.png"),
                title:"蓝莓酒小饮套装 2瓶装",price:"￥796"},
                {id:7,pic:require("../assets/img/index/product7.png"),
                title:"蓝莓酒畅饮套装 6瓶装",price:"￥2388"}
            ],
            isLogin:false,
            loginName:""
        }
    },
    created(){
        if (this.$local.get("user").login) {
            this.loginName=this.$local.get("user").username;
            this.isLogin=true;
        }else{
            this.isLogin=false;
        }
    },
    components:{
        MyPop,
        MyCart,
        // ...mapState(["isShowCart"])
    },
    watch:{
        $route(){
            this.isLogin=this.$local.get("user").login;
            this.loginName=this.$local.get("user").username;
        }
    },
    methods:{
        out(){
            this.$local.remove("user");
            this.isLogin=false;
            this.$router.push("/");
        },
        close(){
            if(!this.$local.get("user").username){
                alert("请先登录");
                this.$router.push("/login");
                return;
            }
            this.isShowCart=!this.isShowCart;
        }
    }
}
</script>

<style>
header{
	width: 100%;
}
header img{
	width: 100%;
}
.main{
    width: 100%;
    height: 80px;
    font-size: 14px;
    background-color: #FBFEF9; 
    box-shadow: 0 3px 3px 0 rgba(180,180,180,0.30);
    position: relative;
}
.main>ul{
    width: 80%;
    margin: 0 auto;
}
.main>ul>li:first-child{
    width: 15%;
}
.main>ul>li{
    float: left;
    line-height: 80px;
    padding: 0px 2%;

}
.f-index{
    width: 150px;
    text-align: center;
}
.f-index img{
    display: none;
    width: 100%;
}
.router-link-exact-active,a:hover,li.m-header:hover,a:active:hover,.router-link-exact-active:hover{
    color: #79C053;
    text-decoration: none;
}
a{
    color: #000;
    text-decoration: none;
}

</style>
