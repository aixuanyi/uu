$(function(){
	var html = "";
	var arr = getCookie("shoplist");
	for(var i = 0;i < arr.length;i ++){
		shopinfo = arr[i];
		html += '<tr height="120">'+
							'<td class="pid">'+shopinfo.id+'</td>'+
							'<td>roseonly</td>'+
							'<td>'+
								'<img class="cart_img" src="'+shopinfo.src+'"/>'+
								'<div class="cart_name">'+shopinfo.name+'</div>'+
							'</td>'+
							'<td>'+shopinfo.price+'</td>'+
							'<td>'+
								'<a class="cart_down" href="javascript:;" class="cart_jian">'+
									'<img src="../img/cart_jian.png"/>'+
								'</a>'+
							'</td>'+
							'<td>'+
								'<input type="text" id="cart_count" value="'+shopinfo.count+'" min="1"/>'+
							'</td>'+
							'<td align="right">'+
								'<a class="cart_up" href="javascript:;" class="cart_jia">'+
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
			//var pname = $(this).parent().parent().find(".count").data("name");
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
})
