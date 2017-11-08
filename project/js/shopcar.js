$(function(){
	var html = "";
	var arr = getCookie("shoplist");
	for(var i = 0;i < arr.length;i ++){
		shopinfo = arr[i];
		html += '<tr height="120">'+
							'<td class="pid">'+(i+1)+'</td>'+
							'<td>roseonly</td>'+
							'<td>'+
								'<img class="cart_img" src="'+shopinfo.src+'"/>'+
								'<div class="cart_name">'+shopinfo.name+'</div>'+
							'</td>'+
							'<td class="cost">'+shopinfo.price+'</td>'+
							'<td>'+
								'<a class="cart_down count" href="javascript:;" data-number="-1">'+
									'<img src="../img/cart_jian.png"/>'+
								'</a>'+
							'</td>'+
							'<td>'+
								'<input type="text" id="cart_count" value="'+shopinfo.count+'"/>'+
							'</td>'+
							'<td align="right">'+
								'<a class="cart_up count" href="javascript:;" data-number="1" >'+
									'<img src="../img/cart_jia.png"/>'+
								'</a>'+
							'</td>'+
							'<td>'+
								'<a class="cart_del" href="javascript:;">删除</a>'+
							'</td>'+
						'</tr>';
	}
	$("#shopping-cart").append(html);
	//console.log(arr);
	//清空购物车
	$("#shop_del").click(function(){
		removeCookie("shoplist");
		location.reload();
	})
	//删除操作
	$("#shopping-cart").on("click",".cart_del",function(){
			//获取当前操作的商品的 编号和 名称
			var pid = $(this).parent().parent().find(".pid").text();
			//查找操作的商品 pid 和 pname  和 arr中的哪一个信息相同   ，满足条件  就删除
			for( var i = 0 ; i < arr.length ; i++ ){
				if( arr[i].id == pid ){
					arr.splice(i,1);
					//操作cookie改变  重新设置cookie
					setCookie("shoplist",JSON.stringify(arr));
					
					//操作页面
					$(this).parent().parent().remove();
				}
			}
	})
	//加减操作
	$("#shopping-cart").on("click",".count",function(){
		var pid = $(this).parent().parent().find(".pid").html();
		var sign = $(this).data("number");
		var count = $(this).parent().parent().find("#cart_count").val();
		if( sign == "-1" && count == 1 ){
			return ;
		}
		for(var i = 0;i<arr.length;i++){
			if(arr[i].id == pid){
				sign == 1 ? arr[i].count++:arr[i].count--;
				setCookie("shoplist",JSON.stringify(arr));
				$(this).parent().parent().find("#cart_count").val(arr[i].count);
			}
		}
		//console.log(arr);
		total();
		
	})
	total();
	//合计
	function total(){
		var sum = 0;
		var price = "";
		$(".pid").each(function(){
			price = $(this).parent().find(".cost").html();
			price = price.substring(1);
			sum += parseFloat(price*$(this).parent().find("#cart_count").val());
		})
		//console.log(sum);
		$("#total").html(sum);
	}
})
