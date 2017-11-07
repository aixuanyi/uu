$(function() {
	/*二级菜单*/
	var $menu = $(".nav .nav-cont li .menu");
	$(".nav .nav-cont li a").mouseover(function() {
		$(this).next(".menu").stop().fadeIn(1000);
	})
	$(".nav .nav-cont li a").mouseout(function() {
		$(this).next(".menu").stop().fadeOut(50);
	})
	$menu.mouseover(function() {
		$(this).stop().fadeIn(100);
	})
	$menu.mouseout(function() {
		$(this).stop().fadeOut(50);
	})
	/*顶部悬浮*/
	$(window).scroll(function() {
		if($(window).scrollTop() > 145) {
			$(".logo_cur").css("display", "block");
			$(".nav").addClass("nav_cur");
			$(".nav_cur .nav-cont li").css("margin", "0 14px");
			$("#top .top-content .right").addClass("right_cur");
		} else {
			$(".logo_cur").css("display", "none");
			$(".nav").removeClass("nav_cur");
			$(".nav .nav-cont li").css("margin", "0 32px");
			$(".nav .nav-cont li").eq(0).css("margin-left", 0);
			$("#top .top-content .right").removeClass("right_cur");
		}
		if($(window).scrollTop() > 950) {
			$("#back-to-top").css("display", "block").stop().animate({
				"opacity": 1
			}, 500)
		} else {
			$("#back-to-top").stop().animate({
				"opacity": 0
			}, 500, function() {
				$(this).css("display", "none")
			})
		}
	});
	//回到顶部
	$("#back-to-top .go-top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500)
	})
	//客服
	$(".kefu #kf-btn").mouseover(function() {
		$(".kefu .message").css("display", "block");
	})
	$(".kefu #kf-btn").mouseout(function() {
		$(".kefu .message").css("display", "none");
	})
	$(".kefu .message").mouseover(function() {
		$(this).css("display", "block");
	})
	$(".kefu .message").mouseout(function() {
		$(this).css("display", "none");
	})
	//二维码
	$("#ewm-box #ewm").mouseover(function() {
		$("#ewm-box .ewm-cont").css("display", "block")
	})
	$("#ewm-box #ewm").mouseout(function() {
		$("#ewm-box .ewm-cont").css("display", "none")
	})
	$("#ewm-box .ewm-cont").mouseover(function() {
		$(this).css("display", "block");
	})
	$("#ewm-box .ewm-cont").mouseout(function() {
		$(this).css("display", "none");
	})
	
})