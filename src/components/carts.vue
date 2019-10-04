<template>
    <div class="myshop">
          <h3 class="title">我的购物车</h3>
          <div class="empty">
               <h3>购物车为空</h3>
               <p>您还没有选购任何商品，现在前往选购吧!</p>
           </div>
           <div class="content">
               <div class="item" style="height:40px;">
                    <span>图&nbsp;&nbsp;片</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>删除</span>
               </div>
               <div class="item">
                    <span><img src="../assets/img/index/product1.png"/></span>
                    <span>100</span>
                    <span>3</span>
                    <span>￥300</span>
                    <span>X</span>
               </div>
               <div class="item">
                    <span><img src="../assets/img/index/product2.png"/></span>
                    <span>100</span>
                    <span>3</span>
                    <span>￥300</span>
                    <span>X</span>
               </div>
               <div class="item">
                    <span><img src="../assets/img/index/product3.png"/></span>
                    <span>100</span>
                    <span>3</span>
                    <span>￥300</span>
                    <span>X</span>
               </div>
           </div>
           <div class="my-footer">
               <span>商品共件</span> <span>总价</span> <span　class="close-shop" @click="closeShop">关闭</span>
           </div>
      </div>
</template>

<script>
import goodsList from "../datas/goodsData"
import "../assets/css/common.css"
export default {
   data(){
        return{
            goodsList
        }
    },
    methods:{
        closeShop(){
            this.$emit("myClose",1);
        }
    }
 
}
</script>

<style>
.myshop{
    font-size: 14px;
    position: absolute;
    top:60px;
    right:120px;
    background: #f8f8f8;
    z-index: 100;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #000;
    width: 400px;
    line-height: 30px;

}
.myshop .title{
    padding: 20px; 
    font-size: 20px;
    color:#666;
}
.myshop .empty{
    padding-left:20px;
    font-size: 16px;
}
.myshop .empty h3,.myshop .empty p{
    font-size: 16px;
    margin: 0px;
    padding: 0px;
}
.myshop .content{
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}
.myshop .content span:first-child{
    display: inline-block;
    width: 60px;
    height: 60px;
}
.myshop .content img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
.myshop .content span{
    margin-left:20px;
    padding: 6px;
}
.myshop .content .item{
    padding-bottom: 10px;
    
}
.myshop .my-footer{
    padding: 30px;
}
.myshop .close-shop{
    margin-left: 200px;
    cursor: pointer;
}
</style>
