$(function(){
	var x;
	var y;
	$('.preview_img').on('mouseenter',function(e){
		
		$('.mask,.big').show(200);
	
	})
	$('.preview_img').on("mouseleave",function(e){
		
		$('.mask,.big').hide();
	
	})
	$('.preview_img').on("mousemove",function(e){
		x = parseInt( e.pageX - $(this).offset().left);
		y = parseInt(e.pageY- $(this).offset().top);
		x = x - $('.mask').width() / 2;
		y = y - $('.mask').height() / 2;
		var maxX =  parseInt($('.preview_img').width() - $('.mask').width()); 
		var maxY =  parseInt($('.preview_img').height()- $('.mask').height());
		if(x <= 0){
			x = 0;
			}
			else if( x >= maxX){
				x = maxX;
				}
						if(y <= 0){
			y = 0;
			}
			else if( y >= maxY){
				y =maxY;
				}
			
			 	$('.mask').css({
			"left": x ,
			"top" :y 
		})
        // 大图片的移动距离 X Y
		$('.big').css("display",'block !important');
		 $('bigImg').css("display","block");
	
		 var bigMax = parseInt($('.bigImg').width()) -  parseInt($('.big').width());
        var bigX = -parseInt(x) * (bigMax / maxX);
        var bigY = -parseInt(y) * (bigMax / maxY);
			console.log(bigX,bigY);
      $('.big img').css({"top":bigY,"left":bigX})
	  
		
	
	})
	
})