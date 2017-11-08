$(function(){
	$.ajax({
		"type" : "get",
		"url" : "../json/index.json",
		"success" : function(data){
			//轮播图数据
			var pic = data["swiper"];
			$(pic).each(function(i,value){
				$(".swiper-img li a img").eq(i).attr({"src":value.src,"alt":value.alt,"title":value.title});
			})
			//show数据
			var show = data["show"];
			var showHtml = "";
			for(var i = 0;i < show.length;i++){
				showHtml += `<div class="new-xp">
								<a href="#" target="_blank"><img src="${show[i].src}"/></a>
								<div class="new-xp-txt">${show[i].alt}</div>
							</div>`;
			}
			$(".brand .show").html(showHtml);
			//danpin数据
			var dan = data["danpin"];
			var dHtml = "";
			for(var i = 0;i < dan.length;i ++){
				dHtml="";
				for(var j = 0;j<dan[i].length;j++){
					var dp = dan[i];
					dHtml += `<a href="#">
								<dl>
									<dt><img src="${dp[j].src}" alt="${dp[j].alt}" /></dt>
									<dd>
										<h4>${dp[j].name}</h4>
										<p>${dp[j].type}</p>
										<h2>${dp[j].price}</h2>
									</dd>
								</dl>
							</a>`;
				}
				$(".brand .danpin .pic-show li").eq(i).html(dHtml);
			}
		}
	});	
	
	/*轮播图*/
	var $index = 0;
	var $timer = null;
	var $intervalTime = 1000;
	var $dots = $(".dot span");
	//左点击事件
	$(".btnL").click(function(){
		moveL();
		clearInterval($timer);
	});
	//右点击事件
	$(".btnR").click(function(){
		moveR();
		clearInterval($timer);
	})
	function moveR(){
		if($index == 3){
			$index = 0;
			$(".swiper-img").css("left",0).stop().animate({left:-1240},$intervalTime);
		}else{
			$index += 1;
			$(".swiper-img").stop().animate({left:(-1240*$index)-1240},$intervalTime);
		}
		$dots.removeClass("active");
		$dots.eq($index).addClass("active");
	}
	function moveL(){
		if($index == 0){
			$index = 3;
			$(".swiper-img").css("left",-1240*5).stop().animate({left:-1240*4},$intervalTime);
		}else{
			$index -= 1;	
			$(".swiper-img").stop().animate({left:(-1240*$index)-1240},$intervalTime)
		}
		$dots.removeClass("active");
		$dots.eq($index).addClass("active");
	}
	//自动轮播
	function play(){
		$timer = setInterval(function(){
			moveR();
		},3000);
	}
	play();
	//鼠标移入移出图片事件
	$(".swiper-img li").mouseover(function(){
		clearInterval($timer);
	})
	$(".swiper-img li").mouseout(function(){
		play();
	})
	//鼠标移入移出按钮事件
	$(".dot span").mouseover(function(){
		clearInterval($timer);
	})
	$(".dot span").mouseout(function(){
		play();
	})
	//点击按钮事件
	$dots.click(function(){
		$index = $(this).index();
		$dots.removeClass("active");
		$dots.eq($index).addClass("active");
		$(".swiper-img").stop().animate({left:(-1240*$index)-1240},$intervalTime)
	})

	//单品选项卡
	var $oli = $(".tab li");
	var $uli = $(".pic-show li");
	var $olsub = -1;//下标
	var $ulsub = -1;
	var dTimer = null;
	var $sub = 0;
	$uli.eq(0).addClass("select");
	$oli.mouseover(function(){
		$sub = $(this).index();
		$(this).removeClass().addClass("cur").siblings().removeClass("cur");
		$uli.eq($sub).removeClass().addClass("select").siblings().removeClass("select");
		clearInterval(dTimer);
	
	})
	$oli.mouseout(function(){
		$ulsub = $sub;
		$olsub = $sub;
		tabPlay();
	})
	$uli.mouseover(function(){
		clearInterval(dTimer);
	})
	$uli.mouseout(function(){
		$ulsub = $(this).index();
		$olsub = $(this).index();
		tabPlay();
	})
	function tabPlay(){
		dTimer = setInterval(function(){
			$oli.eq(++$olsub % 4).removeClass().addClass("cur").siblings().removeClass("cur");
			$uli.eq(++$ulsub % 4).removeClass().addClass("select").siblings().removeClass("select");
		},2000)
	}
	tabPlay();
	
	//玫瑰鲜花左侧
	var $xh = $(".mgxh .mgxh-cont .mgxh-cont-l .f_in");
	$xh.mouseover(function(){
		$(this).stop().animate({"opacity":"0.4"},500);
	})
	$xh.mouseout(function(){
		$(this).stop().animate({"opacity":"0"},500);
	})
	//玫瑰鲜花右侧
	var $xhR = $(".mgxh .mgxh-cont .mgxh-cont-r .f_out");
	$xhR.mouseover(function(){
		$(this).stop().animate({"opacity":0.4},500);
	})
	$xhR.mouseout(function(){
		$(this).stop().animate({"opacity":0},500);
	})
	//专卖店动画效果
	var $zmd = $(".store .zmd .zm_cur");
	$zmd.mouseover(function(){
		$(this).stop().animate({"opacity":0.4},500);
	})
	$zmd.mouseout(function(){
		$(this).stop().animate({"opacity":0},500);
	})
	
	
	


});

	
	