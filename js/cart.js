$(window).ready(function(){
	var x = $('.main-ul-one .for-copy')
	console.log(x)
	var y = x.clone()
	$('.main-two-cont .main-ul-one li').append(y)
	$('.main-two-cont .main-ul-one li').find('.for-copy').eq(0).css('display','none')
	
})
$('.panel-ul li').hover(function(){
	var i=$(this).index()
	console.log(i)
	$('.main-two-cont').css('left',-1210*i+'px')
	$(this).addClass('hover').siblings().removeClass('hover')
	
})


