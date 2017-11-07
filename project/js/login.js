$(function(){
	
	//选择国家
	var ops = $("#loginForm #country option");
	ops.parent().change(function(){
		for(var i = 0;i<ops.length;i++){
			if(ops.eq(i).prop("selected")){
				$(".prefixC").html("");
				$(".prefixC").html("+"+ops.eq(i).val());
			}
		}
	})
	$(".login_btn").click(function(){
		var arr = getCookie("username");
		if(arr.length==0){
			alert("您还没有注册，请先注册");
			location.href = "../html/regist.html";
		}else{
			for(var i = 0;i< arr.length;i++){
				if($("#username").val()==arr[i].tel&&$("#password").val()==arr[i].pass){
					location.href = "index.html?id=1";
				}else{
					$(".passNum").css("display","block");
				}
			}
		}
		
	})
})
