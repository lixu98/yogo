<template>
    <div class="container hea_b">
        <ul>
            <li><h3>{{titleName}}</h3></li>
            <li></li>
        </ul>
	</div>
</template>

<script>
export default {
    props:["titleName"]
}
</script>

<style>
.hea_b{
	height: 120px;
}

.hea_b ul li:first-child h3{
	line-height: 90px;
	color: #333333;
	font-size: 18px;
}
.hea_b ul li:last-child{
	border-bottom: 4px solid #79C053;
	width: 30px;
	position: relative;
	bottom: 35px;
	left: 18px;
}
</style>
