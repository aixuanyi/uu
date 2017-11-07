$(function(){
	var arr1 = ["../img/yzm/yzm1.jpg","../img/yzm/yzm2.jpg","../img/yzm/yzm3.jpg","../img/yzm/yzm4.jpg","../img/yzm/yzm5.jpg","../img/yzm/yzm6.jpg","../img/yzm/yzm7.jpg","../img/yzm/yzm8.jpg","../img/yzm/yzm9.jpg","../img/yzm/yzm10.jpg","../img/yzm/yzm11.jpg","../img/yzm/yzm12.jpg","../img/yzm/yzm13.jpg","../img/yzm/yzm14.jpg","../img/yzm/yzm15.jpg","../img/yzm/yzm16.jpg","../img/yzm/yzm17.jpg","../img/yzm/yzm18.jpg","../img/yzm/yzm19.jpg","../img/yzm/yzm20.jpg","../img/yzm/yzm21.jpg","../img/yzm/yzm22.jpg","../img/yzm/yzm23.jpg","../img/yzm/yzm24.jpg","../img/yzm/yzm25.jpg","../img/yzm/yzm26.jpg","../img/yzm/yzm27.jpg","../img/yzm/yzm28.jpg","../img/yzm/yzm29.jpg","../img/yzm/yzm30.jpg","../img/yzm/yzm31.jpg","../img/yzm/yzm32.jpg","../img/yzm/yzm33.jpg","../img/yzm/yzm34.jpg","../img/yzm/yzm35.jpg","../img/yzm/yzm36.jpg","../img/yzm/yzm37.jpg","../img/yzm/yzm38.jpg","../img/yzm/yzm39.jpg","../img/yzm/yzm40.jpg"];
	$(".yzm").find("img").attr("src",arr1[rand(0,40)]);
	var cookieFlag = true;
	//选择国家
	var ops = $("#registerForm #country option");
	ops.parent().change(function(){
		for(var i = 0;i<ops.length;i++){
			if(ops.eq(i).prop("selected")){
				$(".prefixC").html("");
				$(".prefixC").html("+"+ops.eq(i).val());
			}
		}
	})
	//图片验证码
	//$(".yzm #imgYzm").attr("src",arr[rand(0,40)]);
	$(".yzmChange").click(function(){
		var arr = ["../img/yzm/yzm1.jpg","../img/yzm/yzm2.jpg","../img/yzm/yzm3.jpg","../img/yzm/yzm4.jpg","../img/yzm/yzm5.jpg","../img/yzm/yzm6.jpg","../img/yzm/yzm7.jpg","../img/yzm/yzm8.jpg","../img/yzm/yzm9.jpg","../img/yzm/yzm10.jpg","../img/yzm/yzm11.jpg","../img/yzm/yzm12.jpg","../img/yzm/yzm13.jpg","../img/yzm/yzm14.jpg","../img/yzm/yzm15.jpg","../img/yzm/yzm16.jpg","../img/yzm/yzm17.jpg","../img/yzm/yzm18.jpg","../img/yzm/yzm19.jpg","../img/yzm/yzm20.jpg","../img/yzm/yzm21.jpg","../img/yzm/yzm22.jpg","../img/yzm/yzm23.jpg","../img/yzm/yzm24.jpg","../img/yzm/yzm25.jpg","../img/yzm/yzm26.jpg","../img/yzm/yzm27.jpg","../img/yzm/yzm28.jpg","../img/yzm/yzm29.jpg","../img/yzm/yzm30.jpg","../img/yzm/yzm31.jpg","../img/yzm/yzm32.jpg","../img/yzm/yzm33.jpg","../img/yzm/yzm34.jpg","../img/yzm/yzm35.jpg","../img/yzm/yzm36.jpg","../img/yzm/yzm37.jpg","../img/yzm/yzm38.jpg","../img/yzm/yzm39.jpg","../img/yzm/yzm40.jpg"];
		$(".yzm").find("img").attr("src",arr[rand(0,40)]);
		
	});
	
	function rand(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	var flag = true;
	//手机号验证
	var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	$("#username").blur(function(){
		if(reg.test($(this).val())){
			flag = true;
			$(".phoneNum").css("display","none");
			
		}else{
			flag = false;
			$(".phoneNum").css("display","block");
		}
	})
	//图片验证码验证
	$("#rand").blur(function(){
		if($(this).val()==""){
			flag = false;
			$(".imgNum").css("display","block");
		}else{
			flag = true;
			$(".imgNum").css("display","none");
		}
	})
	//密码验证
	var pwd = /^[a-z|A-Z|0-9]{6,16}$/;
	$("#password").blur(function(){
		if(pwd.test($(this).val())){
			flag = true;
			$(".passNum").css("display","none");
		}else{
			flag = false;
			$(".passNum").css("display","block");
		}
	})
	//提交
	var arr = [];
	$("#registerSub").click(function(){
		
		if(flag){
			var json = {
				tel : $("#username").val(),
				pass : $("#password").val()
			}
			oldCookie = getCookie("username");
			if(oldCookie.length!=0){
				arr = oldCookie;
				for(var i = 0;i<arr.length;i++){
					if(json.tel == arr[i].tel){
						cookieFlag = false;
						$(".copyTel").css("display","block");
						break;
					}else{
						$(".copyTel").css("display","none");
					}
				}
			}
			if(cookieFlag){
				arr.push(json);
			}
			
			setCookie("username",JSON.stringify(arr));
			//console.log(getCookie("username"))
			//alert("注册成功");
			location.href = "../html/login.html";
		}else{
			alert("请填写正确的信息");
		}
	})
})
