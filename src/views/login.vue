<template>
    <div class="login">
        <form class="form-horizontal">
		  <div class="form-group g-return">
		    <div class="col-sm-2 col-sm-offset-10 col-xs-2 col-xs-offset-10">
		      <a href="javascript:;" @click="handle">返回首页</a>
		    </div>
		  </div>
		  <div class="form-group g-logo">
		    <div class="col-sm-2 col-sm-offset-5 col-xs-2 col-xs-offset-5">
		      <img src="../assets/img/login/logo.jpg"/>
		    </div>
		  </div>
		  <div class="form-group g-login">
		    <div class="col-sm-12 col-xs-12">
		      <span><img src="../assets/img/login/user.gif"/></span><input type="text"  id="user" placeholder="请输入登录账号" ref="uname" />
		    </div>
		  </div>
		  <div class="form-group g-login">
		    <div class="col-sm-12 col-xs-12">
		      <span><img src="../assets/img/login/pwd.gif"/></span><input type="password" id="pwd" placeholder="请输入登录密码" ref="upass" />
		    </div>
		  </div>
		  <div class="form-group g-forget">
		    <div class="col-sm-2 col-sm-offset-10 col-xs-2 col-xs-offset-10">
		      <a href="index.html">忘记密码？</a>
		    </div>
		  </div>
		  <div class="form-group g-btn">
		    <div class="col-sm-12 col-xs-12">
		      <input type="button" class="btn btn-default m-login" value="登录" @click="toLogon"/>
		    </div>
		  </div>
		  <div class="form-group g-btn">
		    <div class="col-sm-12 col-xs-12">
		      <input type="button" class="btn btn-default m-reg" value="注册" />
		    </div>
		  </div>
		  
		</form>
		<div class="err">
			<div class="ico">
				!
			</div>
			<span class="msg">请输入登录密码</span>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        handle(){
            this.$router.push({path:"/"});
        },
        toLogon(){
            let that=this;
            // 获取用户名和密码
            let uname=this.$refs.uname.value;
            let upass=this.$refs.upass.value;
            if(!uname||!upass){
                alert("用户名或密码为空");
                return;
            }
            // 和后台确认用户
            // this.$axios.get(`/api/vueuser1/list`).then(res => {
            //   this.tableData = res.data.data
            // })
            this.$axios.post(`/api/users/login`, {
                uname,
                upass
            }).then(function (response) {
                console.log(response);
                if(response.data.errorNo==0){
                    alert(response.data.message);
                    that.$local.save("user",{
                        login:true,
                        username:uname
                    });
                }else{
                    alert(response.data.message);
                }
                that.$router.back();
            }).catch(function (error) {
                console.log(error);
            });

           
        }
    }
}
</script>

<style>
.login{
    padding: 5% 20%;
}
.g-return{
    text-align: right;
}
.g-return a{
    color: #44B25F;
}
.g-logo img{
    width: 100%;
}
.g-logo h1{
    margin-top: 1%;
    white-space: 3px;
    font-size: 25px;
    text-align: center;
}
.g-login input{
    width: 100%;
    border: none;
    padding-left: 80px;
    padding: 3% 8%;
    background-color: transparent;
    border-bottom: 1px solid #CACBCF;
    position: relative;
}
.g-login span{
    position: absolute;
    left: 4%;
    top: 30%;
    z-index: 99;
}
.g-login span img{
    width: 50%;
}
.g-forget{
    text-align: right;
    
}
.g-forget a{    
    color: #bbb;
}
.g-btn input{
    width: 100%;
    border-radius: 5px;
    padding: 2% 8%;
    margin-top: 3%;
}
.g-btn .m-login{
    background-color: #78C052;
    color: #FFFFFF;
}
.g-btn .m-reg{
    margin-top: 1%;
    color: #85B772;
    border: 1px solid #85B772;
}
.g-chat{
    margin-top: 10%;
    
}
.g-chat img{
    width: 100%;
}
.err{
    position: absolute;
    left: 40%;
    top: 40%;
    padding: 3% 2% 5% 2%;
    background-color: rgba(0,0,0,0.7);
    border-radius: 5px;
    color: #FFFFFF;
    transform: scale(0);
}
.err .ico{
    margin: 5px auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #F63631;
    color: rgba(0,0,0,0.5);
    text-align: center;
    line-height: 20px;
}
</style>
