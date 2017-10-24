$('.er-code').css('transition-delay', '2s').css('left', '64px')
$('.phone').css('transition-delay', '2s').css('opacity', '0')

$('.code-main').hover(function() {
	$('.er-code').css('transition-delay', '0s').css('left', '0');
	$('.phone').css('opacity', '1').css('transition-delay', '.3s');
}, function() {
	$('.er-code').css('left', '64px');
	$('.phone').css('opacity', '0');
	$('.phone').css('transition-delay', '0s');
})

$('.account input').focus(function() {
	$('.account label').css('background-position', '0px -48px')
})
$('.account input').blur(function() {
	$('.account label').css('background-position', '0px 0px')
})

$('.password input').focus(function() {
	$('.password label').css('background-position', '-48px -48px')
})
$('.password input').blur(function() {
	$('.password label').css('background-position', '-48px 0px')
})

$('.tab-right').click(function() {
	$('.login-box').css('display', 'block');
	$('.code-login').css('display', 'none');
	$('.tab-right p').addClass('active');
	$('.tab-left p').removeClass('active');
})
$('.tab-left').click(function() {
	$('.login-box').css('display', 'none');
	$('.code-login').css('display', 'block');
	$('.tab-left p').addClass('active');
	$('.tab-right p').removeClass('active');
})
$('.account>input').on('input', function() {
	if($('.account>input').val() != '') {
		$('.account span').css('display', 'block')
	} else {
		$('.account span').css('display', 'none')
	}

})
$('.account>span').click(function() {
	$(this).siblings('input').val('');
})

$('.password>input').on('input', function() {
	if($('.password>input').val() != '') {
		$('.password span').css('display', 'block')
	} else {
		$('.password span').css('display', 'none')
	}

})
$('.password span').click(function() {
	$('.password input').val('');
})

function showStorage() {
	
	
		
		   for(var i = 0; i < localStorage.length; i++) {
				var acc = localStorage.key(i);
				var paw = localStorage.getItem(acc)
				console.log(acc,paw)
				}
	$('.account input').on('change', function() {
			if($(this).val() != acc
			) {	    
				$('.error').css('display','block');						
			    $('.error').html('<b></b>'+'该账号未注册,请重新输入')
			}
			else{
				$('.error').css('display','none');			
			}
		})
	       var change=0;
		$('.login-btn').click(function(){
			if($('.account input').val() == acc&&
			   $('.password input').val() == paw
			) {	 
				window.location.href="index.html";
				change=1;
		      window.sessionStorage.setItem("change",change);
		      window.localStorage.setItem("user",acc)
				
			}
			else{
				window.sessionStorage.setItem("change",change)
				$('.error').css('display','block');	
				$('.error').html('<b></b>'+'账号与密码不匹配，请重新输入')
			}
		})
	
}
      showStorage();
$('button').click(function(){
	localStorage.clear();
})