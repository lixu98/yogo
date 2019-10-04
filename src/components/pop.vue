<template>
  <div>
      <div class="m-heimei">
        <div class="thumbnail" v-for="item,index in picData">
			<router-link :to="'/detail/'+item.id">
				<img :src="item.pic" alt="...">
				<div class="caption">
					<h3>{{item.title}}</h3>
					<p>{{item.price}}</p>
				</div>
			</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
	props:["picData"]
}
</script>

<style>
.m-heimei{
	width: 100%;
	height: 300px;
	position: absolute;
	left: 0;
	top: 80px;
	z-index: 99;
	display: flex;
	justify-content: flex-start;
	border-top: 1px solid #ccc;
	background-color: #fff;
	box-shadow: 0 8px 7px 0 rgba(180,180,180,0.50);
}
.m-heimei .thumbnail{
	display: inline-block;
	width: 190px;
	padding: 0px;
    margin-bottom: 0px;
    border: 1px solid transparent;
    border-radius: 0px;
    text-align: center;
}
.m-heimei .thumbnail h3{
	font-size: 10px;
}
.m-heimei .thumbnail p{
	font-size: 14px;
	color: #79C053;
}
</style>
