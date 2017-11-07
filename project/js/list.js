$(function(){
//	var html = "";
	$.ajax({
		type:"get",
		url:"../json/meiguishoupeng.json",
		success : function(data){
			var arr = [];
			//页面加载时
			$("#main #prolist").html( bianli(data) );
			//综合
			$("#zonghe").click(function(){
				//var data1 = data;指向的是同一个地址后面改变，data也会改变   重新排序或者对数组进行复制
				var data1 = data.concat();//复制数组
				$("#main #prolist").html("");
				$("#main #prolist").html(bianli(data1));
//				$("#main #prolist").fadeIn(300);
			})
			//销量
			$("#sale").click(function(){
				var saleData = data.concat();
				$("#main #prolist").html("");
				for(var i = 0;i < saleData.length;i++){
					for(var j = i+1;j<saleData.length;j++){
						if(saleData[i].sale < saleData[j].sale){
							var k = saleData[i];
							saleData[i] = saleData[j];
							saleData[j] = k;
						}
						
					}
				}
				$("#main #prolist").html(bianli(saleData));
			})
			//最新
			$("#new").click(function(){
				var newData = data.concat();;
				$("#main #prolist").html("");
				for(var i = 0;i < newData.length;i++){
					for(var j = i+1;j<newData.length;j++){
						if(newData[i].sale > newData[j].sale){
							var k = newData[i];
							newData[i] = newData[j];
							newData[j] = k;
						}
					}
				}
				$("#main #prolist").html(bianli(newData));
			})
			//价格
			$("#pay").click(function(){
				$(this).siblings().removeClass("sort_add");
				var priceDate = data.concat();
				$("#main #prolist").html("");
				for(var i = 0;i<priceDate.length-1;i++){
					for(var j = i+1;j < priceDate.length;j++){
						if(priceDate[i].price > priceDate[j].price){
							var k = priceDate[i];
							priceDate[i] = priceDate[j];
							priceDate[j] = k;
						}
					}
				}
				$("#main #prolist").html(bianli(priceDate));
			})
			//价格范围
			
			
			$("#minprice").keyup(function(){
				html = "";
				arr = [];
				$("#main #prolist").html("");
				for(var i = 0;i<data.length;i++){
					item = parseInt( data[i].price )
					if($(this).val()<item){
						arr.push(data[i]);
					}
				}
				$("#main #prolist").html(bianli(arr));
			})
			$("#maxprice").keyup(function(){
				arr = [];
				$("#main #prolist").html("");
				for(var i = 0;i<data.length;i++){
					item = parseInt( data[i].price )
					if((item>$("#minprice").val())&&(item<$(this).val())){
						arr.push(data[i]);
					}
				}
				$("#main #prolist").html(bianli(arr));
			})
			
			$("#main .rose-filter a:not(:last)").click(function(){
				$(this).addClass("sort_add").siblings().removeClass("sort_add");
			})
			//遍历符合条件的数组
			function bianli(data){
				var html = "";
				for(var i = 0;i<data.length;i++){
					html += `<a href="#" class="li_right" target="_blank" title="${data[i].alt}" id="${data[i].id}">
								<li>
									<div class="li_img">
										<img class="lazy" src="${data[i].src}"/>
									</div>
									<b class="f14">鲜花玫瑰-爱在满怀系列</b>
									<p class="f12">${data[i].name}</p>
									<b class="f14">￥${data[i].price}</b>
								</li>
							</a>`;
				}
				return html;
			}
			$("#prolist a").eq(0).attr("href","../html/item.html");
			$("#prolist a").eq(3).attr("href","../html/item2.html");
			
		}
	});
	
})
