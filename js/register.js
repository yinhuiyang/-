$('input').focus(function(){
	var i=$(this).index('input');
	 $('txt').eq(i).css('display','none')
	 $(this).css('opacity','1')
	 $('.tip-span').eq(i).css('display','block')
	 
})	
$('input').blur(function(){
	var i=$(this).index('input');
	if($(this).val()==''){
	    $('txt').eq(i).css('display','block')
	    $(this).css('opacity','0');
	    $('.tip-span').eq(i).css('display','none')
	}
	else{
		$('txt').eq(i).css('display','none');
	    $(this).css('opacity','1');
	    $('.tip-span').eq(i).css('display','none')
	}
})	
var  reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5-]{4,20}$/;
$('.inp').eq(0).on('input',function(){	
if($('.inp').eq(0).val().match(reg)) {
	$('.account .statu').eq(0).css('display','block');
	$('.tip-span').eq(0).css('display','none')
	$('.account').eq(0).css('border','1px solid #ddd')
}
else{
	$('.account .statu').eq(0).css('display','none')
	$('.tip-span').eq(0).css('display','block').css('color','red');
	$('.tip-span').eq(0).html('<i class="icon"></i>请输入正确格式的账号')
	$('.icon').eq(0).css('background-position','-18px -100px')
	$('.account').eq(0).css('border','1px solid red')
}
})



var  reg2 = /^(?!_)(?!.*?_$)[a-zA-Z0-9_-]{4,20}$/;
$('.inp').eq(1).on('input',function(){	
if($('.inp').eq(1).val().match(reg2)) {
	$('.account .statu').eq(1).css('display','block');
	$('.tip-span').eq(1).css('display','none')
	$('.account').eq(1).css('border','1px solid #ddd')
}
else{
	$('.account .statu').eq(1).css('display','none')
	$('.tip-span').eq(1).css('display','block').css('color','red');
	$('.tip-span').eq(1).html('<i class="icon"></i>'+'请输入正确格式的密码')
	$('.icon').eq(1).css('background-position','-18px -100px')
	$('.account').eq(1).css('border','1px solid red')
}
})


$('.inp').eq(2).on('input',function(){
	if($('.inp').eq(2).val()!=$('.inp').eq(1).val()){
		$('.account .statu').eq(2).css('display','none')
	    $('.tip-span').eq(2).css('display','block').css('color','red');  
		$('.tip-span').eq(2).html('<i class="icon"></i>'+'两次输入的密码不一致')
		$('.icon').eq(2).css('background-position','-18px -100px');
		$('.account').eq(2).css('border','1px solid red')
	}
	else{
		$('.account .statu').eq(2).css('display','block');
	    $('.tip-span').eq(2).css('display','none');
	    $('.tip-span').eq(2).css('display','none').css('color','red');
	    $('.account').eq(2).css('border','1px solid #ddd')
	}
	
})


var  reg3 = /^1[3|4|5|8][0-9]\d{8}$/;
$('.inp').eq(3).on('input',function(){	
if($('.inp').eq(3).val().match(reg3)) {
	$('.account .statu').eq(3).css('display','block');
	$('.tip-span').eq(3).css('display','none')
	$('.account').eq(3).css('border','1px solid #ddd')
}
else{
	$('.account .statu').eq(3).css('display','none')
	$('.tip-span').eq(3).css('display','block').css('color','red');
	$('.tip-span').eq(3).html('<i class="icon"></i>'+'请输入正确格式的手机号')
	$('.icon').eq(3).css('background-position','-18px -100px');
	$('.account').eq(3).css('border','1px solid red')
}
})

$('.inp').eq(4).on('input',function(){
if($('.inp').eq(4).val().length==4) {
	$('.account .statu').eq(4).css('display','block');
	$('.tip-span').eq(4).css('display','none');
	$('.account').eq(4).css('border','1px solid #ddd')
}
else{
	$('.account .statu').eq(4).css('display','none')
	$('.tip-span').eq(4).css('display','block').css('color','red');
	$('.tip-span').eq(4).html('<i class="icon"></i>'+'请输入正确的验证码')
	$('.icon').eq(4).css('background-position','-18px -100px');
	$('.account').eq(4).css('border','1px solid red')
}
})

var reg4=/^\d{4}$/
$('.inp').eq(5).on('input',function(){	
if($('.inp').eq(5).val().match(reg4)) {
	$('.account .statu').eq(5).css('display','block');
	$('.tip-span').eq(5).css('display','none');
	$('.account').eq(5).css('border','1px solid #ddd')
}
else{
	$('.account').eq(5).css('border','1px solid red')
}
})

$('.submit').click(function(){
	if ($('.inp').eq(0).val().match(reg)&&$('.inp').eq(1).val().match(reg2)&&
	    $('.inp').eq(3).val().match(reg3)&&$('.inp').eq(2).val()==$('.inp').eq(1).val()&&
	    $('.inp').eq(4).val().length==4&&$('.inp').eq(5).val().match(reg4)
	) 
	{
		var count=$('.inp').eq(0).val();
		var psw=$('.inp').eq(1).val();
		window.localStorage.setItem(count,psw);
		window.location.href="login.html";
	}
	
	else{
		window.location.href="register.html";
	}
	
	
	
})
