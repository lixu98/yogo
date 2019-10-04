<template>
  <div class="g-cart">
      <h3>我的购物车<span @click="close">×</span></h3>
      <div class="empty" v-if="cartList.length==0">
          <p>
              <img src="../assets/img/index/cart-empty.png" alt="">
          </p>
          <p>您还没有选购任何商品，立即前往选购吧!</p>
      </div>
      <ul v-else>
          <li v-for="item,idx in cartList" class="clearfix">
              <img :src="item.pic" alt="" />
              <div class="content">
                <h4 class="name" v-html="item.title"></h4>
                <p class="price">￥{{item.price}}×{{item.count}}</p>
                <p class="num"><input type="button" value="-" @click="changeCount({index:idx,flag:0})"/><input type="text" v-model="item.count" /><input type="button" value="+" @click="changeCount({index:idx,flag:1})" /></p>
              </div>
              <el-button size="mini" type="success" icon="el-icon-delete" circle @click="del"></el-button>
          </li>
          <li class="count">总计：{{totalCount}}</li>
      </ul>
      <div class="m-footer" v-if="cartList.length!=0">
            <span>商品总价</span><span>￥{{totalPrice}}</span>
      </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(["cartList"]),
        ...mapGetters(["totalPrice","totalCount"])
    },
    methods:{
        close(){
            this.$emit("myClose");
        },
        ...mapActions({
            changeCount:"changeAction",
            del:"delAction"
        })
    }
}
</script>

<style>
.g-cart{
    position: absolute;
    right: 5%;
    z-index: 99;
    width: 25%;
    /* background-color: rgba(121,192,83,0.8); */
    background-color: #FBFEF9;
    padding: 0px;
    padding-top: 1%;
}
.g-cart>.empty>p{
    text-align: center;
}
.g-cart>.empty{
    padding: 5% 0;
}
.g-cart>h3{
    color: #555555;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #DFDFDF;
    padding-bottom: 4%;
}
.g-cart>h3 span{
    float: right;
    margin-right: 6%;
    font-size: 23px;
    cursor: pointer;
}
div.g-cart>ul{
    padding: 2% 5%;
    width: 100%;
}

div.g-cart>ul>li{
    width: 100%;
    line-height: 20px;
    margin-top: 5%;
}
div.g-cart>ul>li.count{
    font-size: 12px;
    color: #69C053;
    text-align: right;
}
.g-cart ul>li img{
    width: 40%;
}
.g-cart .content{
    display: inline-block;
    width: 35%;
    line-height: 20px;
}
.name{
    font-size: 13px;
    display: inline;
}
.num{
    color: #b7a1B8;
}
.price{
    color: #E2214B;
}
.num input{
    margin: 0 5px;
    width: 22px;
    border-radius: 50%;
    border: none;
    outline: none;
    text-align: center;
}
.m-footer span{
    display: inline-block;
    width: 50%;
    text-align: center;
    border: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
}
</style>
