$(function(){
		$('.nav ul li a').click(function(){
			var index = $(this).attr('data-index');
			switch (index){
				case '1':
				 $('li').eq(0).addClass('current').siblings().removeClass('current');
				 $('.window').show();
				 $('.look-info').show().siblings().hide();
				break;
				case '2':
				$('li').eq(1).addClass('current').siblings().removeClass('current');
				$('.window').show();
				$('.amend-info').show().siblings().hide();
				console.log($('.amend-info').siblings());			
				break;
				case '3':
				$('li').eq(2).addClass('current').siblings().removeClass('current');
				$('.window').show();
				$('.amend-vip').show().siblings().hide();
				break;
				case '4':
				$('li').eq(3).addClass('current').siblings().removeClass('current');
				$('.window').show();
				$('.amend-pas').show().siblings().hide();
				break;
			}
		})
	})