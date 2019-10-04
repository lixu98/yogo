<template>
  <div>
    <!--轮播图  -->
    <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item,key in imgList" :key="key">
            <h3><img :src="item.pic" alt=""></h3>
        </el-carousel-item>
    </el-carousel>
    <!--产品  -->
    <div class="container g-piclist">
        <div class="row">
            <div class="col-sm-6 col-md-4" v-for="item in goodsList">
                <router-link :to="'/detail/'+item.id">
                    <div class="thumbnail">
                        <img :src="item.pic" alt="...">
                        <div class="caption u-first">
                            <h3 v-html="item.title"></h3>
                            <p>¥{{item.price}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import goodsList from "../datas/goodsData"
import {mapState} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState(["goodsList","imgList"])
    }
}
</script>

<style>
  .el-carousel__container{
      height: 400px;
  }
  .el-carousel__item h3 img{
      width: 100%;
  }
  .g-piclist{
	margin-top: 50px;
	margin-bottom: 30px;
	padding-left: 100px;
	padding-right: 100px;
}
.g-piclist .thumbnail {
    padding: 0px;
    margin-bottom: 18px;
    margin-right: 18px;
    text-align: center;
    border: 1px solid #ddd;
    /*height: 420px;*/
}
.g-piclist .thumbnail .u-img{
	 width: 100%;
}
.g-piclist .thumbnail .u-img img{
	background-color: #FAFAFA;
	width: 100%;
}
.g-piclist>.row>div:last-of-type .thumbnail{
    margin-right: 0px;
}
.g-piclist .thumbnail h3{
	font-size: 14px;
}
.g-piclist .thumbnail p{
	font-size: 24px;
	color: #79C053;
}
.g-piclist .thumbnail:hover{
	box-shadow: 0px 4px 7px 0 rgba(180,180,180,0.50);
}
.g-piclist .thumbnail:hover .caption{
	background-color: #79C053;
	color: #fff;
}
.g-piclist .thumbnail:hover .caption p{
	color: #fff;
}
.u-first{
	margin-top: 15px;
}
</style>
