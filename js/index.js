$('.province td').not(':eq(0)').hover(function() {
	var i = $(this).index();
	$(this).css('background', '#e3e4e5').css('color', '#C81623')
}, function() {
	$('.province td').not(':eq(0)').css('background', '#FFFFFF').css('color', '#666')
})

$('.area').hover(function() {
	$('.area').css('background', 'white');
	$('.province table').css('display', 'block')
}, function() {
	$('.area').css('background', '#e3e4e5');
	$('.province table').css('display', 'none')
})

//倒计时开始
var sec = 60;
var min = 23;
var timer = setInterval(time, 1000)

function time() {
	sec--;
	if(sec == 0) {
		sec = 60;
		min--;
		if(min < 10) {
			$('.cd-min-span').html("0" + min)
		}

	}
	$('.cd-second-span').html(sec);
	if(sec < 10) {
		$('.cd-second-span').html("0" + sec)
	}
	$('.cd-min-span').html(min);
}

//倒计时结束
//秒杀banner效果开始 
$(document).ready(function() {
	var count = -1;
	var timer2 = setInterval(tim, 2000);

	function tim() {
		count++;
		if(count == 2) {
			count = 0;
		}
		$('.list-banner img').eq(count).css('opacity', '1').siblings('img').css('opacity', '0');
		$('.list-dot').eq(count).css('background', '#C81623').siblings('.list-dot').css('background', '#333')
	}
	$('.list-banner').hover(function() {
		clearInterval(timer2)
	}, function() {
		timer2 = setInterval(tim, 2000);
	})
})
//秒杀banner效果结束   

//banner图区域动态效果开始

$('.banner-ul>li').each(function(i) {
	this.style.background = 'url(img/imgages/banner' + (i + 1) + '.jpg)'
})

var oul = document.querySelector(".banner-ul")
var num = 0;
var timer = setInterval(fun, 2000)

function fun() {
	num++;
	if(num == 8) {
		num = 0;
	}

	$('.banner-ul li').css('opacity', '0').eq(num).css('opacity', '1');
	$('.banner-ul3 li').css('background', 'white').eq(num).css('background', '#C81623');
}

$('.banner-ul3>li').click(function() {
	$('.banner-ul3>li').css('background', 'white').eq($(this).index()).css('background', '#C81623')
	$('.banner-ul>li').css('opacity', '0').eq($(this).index()).css('opacity', '1')
	num = $(this).index();
	clearInterval(timer);
})

$('.banner4-li1').click(function() {
	clearInterval(timer);
	num--;
	if(num == -1) {
		num = 7
	}

	$('.banner-ul3>li').css('background', 'white').eq(num).css('background', '#C81623')
	$('.banner-ul>li').css('opacity', '0').eq(num).css('opacity', '1')
})

$('.banner4-li2').click(function() {
	clearInterval(timer);
	num++;
	if(num == 8) {
		num = 0
	}
	$('.banner-ul3>li').css('background', 'white').eq(num).css('background', '#C81623')
	$('.banner-ul>li').css('opacity', '0').eq(num).css('opacity', '1')
})

$('.banner ul').hover(function() {
	clearInterval(timer); //移入鼠标
}, function() { //移出鼠标 
	timer = setInterval(fun, 2000)

})

$('.login-neck-tab p:nth-child(1)').hover(function() {
	$(this).css('border-bottom', '2px solid #C81623');
	$('.login-ul1').css('display', 'block');
	$('.login-ul2').css('display', 'none');
	$('.login-neck-tab p:nth-child(3)').css('border-bottom', 'none')
}, function() {

})
$('.login-neck-tab p:nth-child(3)').hover(function() {
	$(this).css('border-bottom', '2px solid #C81623');
	$('.login-ul2').css('display', 'block');
	$('.login-ul1').css('display', 'none')
	$('.login-neck-tab p:nth-child(1)').css('border-bottom', 'none')
}, function() {

})

//  $(".login-bot i").each(function(i){
//  	$(".login-bot i").eq(i).css('background-position','')
//  })
//banner图动态效果结束

//吸顶栏开始
window.onscroll = function() {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t >= 650) {
		$('.search').css("top", '0')
	} else {
		$('.search').css("top", '-60px')
	}
}
//吸顶栏结束
// hover效果开始
$('.fbt-right-content li').hover(function() {
	var i = $(this).index();
	$('.fbt-right-content li>a').css('border', 'none').eq(i).css('border-bottom', '2px solid #C81623');
	$('.fbt-right-content li table').css('display', 'none').eq(i).css('display', 'block')
}, function() {

})

//hover效果结束

//第三个banner图效果开始

var cum = 0;
var timer3 = setInterval(func, 2000);

function func() {

	cum++;
	if(cum == 5) {
		cum = 0;
	}

	$('.mime-ul li').css('opacity', '0').eq(cum).css('opacity', '1');
	$('.mime-ul2 li').css('background', '#c7c7c7').eq(cum).css('background', '#C81623');
}

$('.mime').hover(function() {
	clearInterval(timer3)
}, function() {
	timer3 = setInterval(func, 2000)
})

//第三个banner图效果结束

//第四个banner图开始
var timer4=setInterval(fun4,2000)
var num4=0;   
     function fun4(){
     	num4++;
     	if (num4==3) {
     		num4=0;
     	}
     	$('.page-one').removeClass('actives').eq(num4).addClass('actives')
     	$('.page-dot>li').removeClass('actives2').eq(num4).addClass('actives2')
     }
     $('.page-sup').hover(function() {
	clearInterval(timer4)
   }, function() {
	timer4 = setInterval(fun4, 2000)
   })
     
     
    $('.page-dot>li').click(function() {
	$('.page-dot>li').removeClass('actives2').eq(num4).addClass('actives2')
	$('.page-one').removeClass('actives').eq(num4).addClass('actives')
	num4 = $(this).index();
	clearInterval(timer4);
})

$('.page-li1').click(function() {
	clearInterval(timer4);
	num4--;
	if(num4 == -1) {
		num4 = 2
	}
	$('.page-dot>li').removeClass('actives2').eq(num4).addClass('actives2')
	$('.page-one').removeClass('actives').eq(num4).addClass('actives')
})

$('.page-li2').click(function() {
	clearInterval(timer);
	num4++;
	if(num4 == 3) {
		num4 = 0
	}
	$('.page-dot>li').removeClass('actives2').eq(num4).addClass('actives2')
	$('.page-one').removeClass('actives').eq(num4).addClass('actives')
})
     
//第四个banner图结束

//第五个banner图开始
var timer5=setInterval(fun5,2000)
var num5=0;   
     function fun5(){
     	num5++;
     	if (num5==5) {
     		num5=0;
     	}
     	$('.live-list>li').removeClass('live-active').eq(num5).addClass('live-active')
     	$('.live-dot>li').removeClass('live-active2').eq(num5).addClass('live-active2')
     }
     
     
    $('.live-dot>li').click(function() {
	$('.live-list>li').removeClass('live-active').eq(num5).addClass('live-active')
     	$('.live-dot>li').removeClass('live-active2').eq(num5).addClass('live-active2')
	
})

$('.btn-pre').click(function() {
	clearInterval(timer5)
	num5--;
	if(num5 == -1) {
		num5 = 4
	}
	$('.live-list>li').removeClass('live-active').eq(num5).addClass('live-active')
    $('.live-dot>li').removeClass('live-active2').eq(num5).addClass('live-active2')
})

$('.btn-next').click(function() {
	clearInterval(timer5)
	num5++;
	if(num5 == 5) {
		num5 = 0
	}
	$('.live-list>li').removeClass('live-active').eq(num5).addClass('live-active')
    $('.live-dot>li').removeClass('live-active2').eq(num5).addClass('live-active2')
})
     $('.live-inner').hover(function() {
	clearInterval(timer5)
   }, function() {
	timer5 = setInterval(fun5, 2000)
   })


//第五个banner图结束

//楼梯效果开始
$(document).scroll(function(){
	var t=$(this).scrollTop();
	if(t>=1800){
    	$('.stair').show(500)
    }
    else{
    	$('.stair').hide(500)
    }     //显现楼梯
    
   $('.sta-ul li').click(function(){
    	var mm=$(this).index();
    	console.log(mm)
    	if(mm==11){
    		 $("body,html").stop().animate({
    			scrollTop:'0'
    		},500)
    	}
    	else{
    		$("body,html").stop().animate({
    			scrollTop:$('.entry').eq(mm).offset().top
    		},500)
    	}	
    	})   //点击事件跳转到相应的楼层
    	
    	

   
   $('.entry').each(function(i,o){
   	 var nowt=$(o).offset().top;
   	 if(t>=nowt-200){
   	 	$('.sta-ul li').removeClass('hov').eq(i).addClass('hov')
   	 }
   })  //滚轮到对应的楼层出现蒙版
})

 $('.sta-ul li').hover(function(){
 	var i=$(this).index()
 	$('.sta-ul li').eq(i).addClass('ho')
 	
 },function(){
 	$('.sta-ul li').removeClass('ho')
 })  //鼠标浮在上面出现蒙版


//楼梯效果结束


//$('.clo-page-ul>li').hover(function(){
//	var i=$(this).index()
//	$('.clo-page-ul li img').eq(i).css('transform','translateX(-5px)')
//},function(){
//	var i=$(this).index()
//	$('.clo-page-ul li img').eq(i).css('transform','translateX(0px)')
//})
//
//$('.clo-page-ul2>li').hover(function(){
//	var i=$(this).index()
//	$('.clo-page-ul2 li img').eq(i).css('transform','translateX(-5px)')
//},function(){
//	var i=$(this).index()
//	$('.clo-page-ul2 li img').eq(i).css('transform','translateX(0px)')
//})

$('.footer').load('footer.html')


//取出local
$(document).ready(function(){
	 
	var user=localStorage.getItem("user")
    var change=sessionStorage.getItem('change')
    
    if (change==1) {
    	$('.index-login').text('欢迎您，'+user)
    	$('.index-region').text('退出');
    	$('.index-region').attr('href','javascript:void(0)')
    
    	
    }
})
$('.index-region').click(function(){
//  		 localStorage.clear('change');           
    	$('.index-login').text('你好，请登录')
    	$('.index-region').text('免费注册');
//  	$('.index-region').attr('href','') 

   })