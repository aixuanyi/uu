$(function(){
	
	var timer = null;
	//放大镜
	$(".container .main_left .small img").eq(0).css("display","block").siblings().css("display","none");
	$(".container .main_left .big img").eq(0).css("display","block").siblings().css("display","none");
	$(".bottom #bm").click(function(){
		var index = $(this).index();
		$(this).addClass("img_select").siblings().removeClass("img_select");
		
		$(".container .main_left .small img").eq(index-1).css("display","block").siblings().css("display","none");
		$(".container .main_left .big img").eq(index-1).css("display","block").siblings().css("display","block");
		console.log(index);
	})
	$(".container .main_left .small").mouseover(function(){
		$(".mask").show();
		$(".container .main_left .big").show();
	}).mouseout(function(){
		
		$(".mask").hide();
		$(".container .main_left .big").hide();
	})
	$(".small").mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $(".container .main_left .small").offset().left - $(".mask").width()/2;
		var y = e.pageY - $(".container .main_left .small").offset().top - $(".mask").height()/2;
		var maxL = $(".container .main_left .small").width() - $(".mask").width();
		var maxT = $(".container .main_left .small").height() - $(".mask").height();
		x = Math.min(maxL,Math.max(0,x));
		y = Math.min(maxT,Math.max(0,y));
		
		$(".mask").css({"left":x,"top":y});
		
		//大图和小图比例   大图left/小图left = 大图宽度/小图宽度
		var bigX = x * $(".bigImg").width()/$(".smallImg").width();
		var bigY = y * $(".bigImg").height()/$(".smallImg").height();
		
		$(".bigImg").css({"left":-bigX,"top":-bigY});
	})
	//购物车加减
	var num = 1;
	$(".container .right_select .right_u_d .right_up").click(function(){
		num = $(".container .right_select .right_num").val();
		//console.log(num);
		num++;
		$(".container .right_select .right_num").val(num);
	})
	$(".container .right_select .right_u_d .right_down").click(function(){
		if(num==1){
			return ;
		}else{
			num--;
			$(".container .right_select .right_num").val(num);
		}	
	})
	
	$(".btn_bar2").click(function(){
		
		var arr = [];
		var json = {
			id : $(this).prev().data("id"),
			name : $(".main_right .right_tit").html(),
			src : $(this).prev().data("src"),
			price : $(".right_pay .price").text(),
			count : parseInt($(".right_num").val())
		}
		var flag = true;
		preCookie = getCookie("shoplist");
		if(preCookie.length != 0){
			arr = preCookie;
			for(var i = 0;i < arr.length;i++){
				if(json.id == arr[i].id){
					flag = false;
					arr[i].count +=parseInt($(".right_num").val());
					break;
				}
			}
		}
		if(flag){
			arr.push(json);
		}
		setCookie("shoplist",JSON.stringify( arr ));
		/*if( !confirm("继续购物？？点击确定，继续购物，点击取消去结算页面") ){
			
		}*/
		location.href = "shopcar.html";
		console.log(getCookie("shoplist"));
	})
	
	
	//热卖推荐
	$.ajax({
		type:"get",
		url:"../json/item.json",
		success : function(data){
			var html="";
			for(var i = 0;i<2;i++){
				html = "";
				for(var j = i*4;j<(i+1)*4;j++){
					html += `<li>
								<div>
									<a href="#" target="_blank">
										<dl>
											<dt><img src="${data[j].src}"/></dt>
											<dd>
												<h3>${data[j].type}</h3>
												<p>${data[j].name}</p>
												<h2>${data[j].price}</h2>
											</dd>
										</dl>
									</a>
								</div>
							</li>`;
				}
				$(".container .rmtj .hot_pic .pic").eq(i).html(html);
			}
		}
	})
	var i = 1;
	$(".container .rmtj .hot_pic .pic").eq(0).css("display","block");
	$(".container .rmtj .hot_pic .pic").eq(1).css("display","none");
	
	timer = setInterval(function(){
		$(".container .rmtj .hot_pic .page li").eq(i++%2).addClass("cur").siblings().removeClass("cur");
		$(".container .rmtj .hot_pic .pic").eq((i-1)%2).show();
		$(".container .rmtj .hot_pic .pic").eq(i%2).hide();
	},2000)
	$(".container .rmtj .hot_pic").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer = setInterval(function(){
		$(".container .rmtj .hot_pic .page li").eq(i++%2).addClass("cur").siblings().removeClass("cur");
		$(".container .rmtj .hot_pic .pic").eq((i-1)%2).show();
		$(".container .rmtj .hot_pic .pic").eq(i%2).hide();
	},2000)
	})
	$(".container .rmtj .hot_pic .page li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".container .rmtj .hot_pic .pic").eq(index).show().siblings(".pic").hide();
		clearInterval(timer);
	})
	
})

