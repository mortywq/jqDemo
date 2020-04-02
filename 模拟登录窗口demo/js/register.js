$(function(){
		var flag = true;
		$('#img-hide').click(function(){
			 if(flag){
				  $(this).prop('src','images/passhow.svg');
					flag = !flag;
					$(this).siblings('input').prop('type','text');
			 }
			 else{
				 $(this).prop('src','images/pashide.svg');
				 flag = !flag;
				 	$(this).siblings('input').prop('type','password');
			 }
			
		})
		$('.title img').click(function(){
			$('.window').hide();
			$('.text-login').show();
		});
		$('.text-login a').click(function(){
			$('.text-login').hide();
			$('.window').show();
		})
	})