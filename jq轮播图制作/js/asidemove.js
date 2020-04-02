$(function(){
	<!--侧边导航电梯-->
	isDisplay(1);
	var flag = true; //设置一个互斥锁
	$(window).scroll(function(){
		isDisplay();
			if(flag){
			 $('.floor').children().each(function(index, e) {
                if($(document).scrollTop()>= $(e).offset().top ){
					$('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current');
					}
            });
			}
		})
		$('.fixedtool ul li').on('click',function(){
			flag = false;
			$(this).addClass('current').siblings().removeClass('current');
			var i = $(this).index();
		
			var t = $('.floor').children().eq(i).offset().top;
			$('html,body').animate({
				scrollTop:t+2
				},500,function(){
					flag = true; //在动画函数执行完后的回调函数里再打开开关
					})
			})
	function isDisplay(time){
		if($(document).scrollTop() < $('.recommend').offset().top){
			$('.fixedtool').fadeOut(time || 300);
			
			}else{
				$('.fixedtool').fadeIn(300);
				}
		}
		
		<!--轮播图jq-->
		var index = 0; //判断点击的变量
		var maxNum = $('.focus ul li').length; //给一个最初的初始化li最大长度
		var flagPict = true; //节流阀变量
		var cirleCount = 0;//圈圈计数器
		 $('.focus').on("mouseenter",function(){
			 $('.arrow-l,.arrow-r').show();
			 window.clearInterval(setPlay);
			 })
			 
	 	$('.focus').on("mouseleave",function(){
			 setPlay =window.setInterval(function(){
					$('.arrow-r').click();
				},2000);
			 $('.arrow-l,.arrow-r').hide();
			 })
			 
		$('.focus ul li').each(function(index, e) {
            $('.circle').append("<li></li>");
			if(index == 0){
				$('.circle>li').addClass("current");
				}
        });
		
		//右箭头实现滚动!
		$('.arrow-r').on("click",function(){
			if(flagPict){
				flagPict=false;
			index++;
			cirleCount++;
			
			if(index < maxNum){
			$('.focus ul').animate({
				left:-$('.focus ul li').eq(index).position().left
				},300,function(){
					flagPict = true;
					$(".circle li").eq(cirleCount).addClass("current").siblings().removeClass("current");
					});
			}
			else
			{
				cirleCount = 0;
				var li = $('.focus ul li:first').clone(true);
				$('.focus ul').append(li);
				$('.focus ul').animate({
				left:-$('.focus ul li').eq(index).position().left
				},300,function(){
					$('.focus ul li:last').remove();
					flagPict = true;
					//动画回调函数实现无缝滚动!
						$('.focus ul').css({
					left:0
					})
					index = 0;
					$(".circle li").eq(cirleCount).addClass("current").siblings().removeClass("current");
					});
				}
			}
		})
		
		//左箭头实现滚动!
		$('.arrow-l').on("click",function(){
			if(flagPict){
				flagPict=false;
			index--;
			cirleCount--;
			
			if(index >= 0 && index < maxNum){
			$('.focus ul').animate({
				left:-$('.focus ul li').eq(index).position().left
				},300,function(){
					flagPict = true;
					
					$(".circle li").eq(cirleCount).addClass("current").siblings().removeClass("current");
					});
			}
			else 
			{
				cirleCount=maxNum -1;
				var li = $('.focus ul li:last').clone(true);
				$('.focus ul').prepend(li);
				$('.focus ul').css({
					left:$('.focus ul li').eq(1).position().left
					});
				$('.focus ul').animate({
				left:-$('.focus ul li:first').position().left
				},300,function(){
					flagPict = true;
					index = maxNum -1;
				
					
					//动画回调函数实现无缝滚动!
						$('.focus ul').css({
					left:-$(".focus ul li:last").position().left
					});
					$(".focus ul li:first").remove();
					
					
					$(".circle li").eq(cirleCount).addClass("current").siblings().removeClass("current");
					});
				}
			}
		})
		
		
			<!--自动播放功能!-->
		 var setPlay =	window.setInterval(function(){
					$('.arrow-r').click();
				},2000)
		
		
			
			<!--实现圆圈控制轮播图!-->
			$('.circle li').on("click",function(){
				$(this).addClass("current").siblings().removeClass("current");
				var index = $(this).index();
				$(".focus ul").animate({
					left:-$(".focus ul li").eq(index).position().left
					},500)
				});
				
	})