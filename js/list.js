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

$('.two-level .one-menu').hover(function(){
	$(this).css('border-color','#f30213');
	$('.two-level .level-arrow').css('background-position','0px -45px');
	$('.two-level .one-menu-main').css('border-color','#f30213').css('display','block')
	$('.two-level .bottom-line').css('display','block')
},function(){
	var i=$(this).index()
	$('.two-level .one-menu-main').css('display','none')
	$('.two-level .bottom-line').css('display','none');
	$(this).css('border-color','#ddd');
	$('.two-level .level-arrow').css('background-position','4px 7px');
})

$('.three-level .one-menu').hover(function(){
	$(this).css('border-color','#f30213');
	$('.three-level .level-arrow').css('background-position','0px -45px');
	$('.three-level .one-menu-main').css('border-color','#f30213').css('display','block')
	$('.three-level .bottom-line').css('display','block')
},function(){
	var i=$(this).index()
	$('.three-level .one-menu-main').css('display','none')
	$('.three-level .bottom-line').css('display','none');
	$(this).css('border-color','#ddd');
	$('.three-level .level-arrow').css('background-position','4px 7px');
})

$('.four-level .one-menu').hover(function(){
	$(this).css('border-color','#f30213');
	$('.four-level .level-arrow').css('background-position','0px -45px');
	$('.four-level .one-menu-main').css('border-color','#f30213').css('display','block')
	$('.four-level .bottom-line').css('display','block')
},function(){
	var i=$(this).index()
	$('.four-level .one-menu-main').css('display','none')
	$('.four-level .bottom-line').css('display','none');
	$(this).css('border-color','#ddd');
	$('.four-level .level-arrow').css('background-position','4px 7px');
})

$('.value li').hover(function(){
	$(this).css('border-color','#e4393c').css('color','#e4393c');
	$(this).css('box-shadow','2px 2px 3px rgba(0,0,0,.12)').css('position','relative')
	$(this).html('海信（Hisense）');
	
},function(){
	$(this).css('position','none');
	$(this).css('border-color','#ddd');
	$(this).css('box-shadow','2px 2px 3px rgba(0,0,0,.12)')
	$(this).html('<img src="img/imgages/56a82fc0N787b0b09.jpg" alt="" />')
})

var flag=false;
$('.button-wrap').click(function(){
	flag=!flag;
	if (flag) {
		$('.solid').css('display','block');
		$('.morei2').css('background-position','4px -27px')
		$(this).html('收起'+
					'<i class="morei2"></i>')
		
	}
	else{
		$('.solid').css('display','none')
		$('.morei2').css('background-position','4px 7px')
		$(this).html('能效等级、品牌类型、合约方案 等'+
					'<i class="morei2"></i>')
	}
})

$('.button-sel').hover(function(){
	
	   if(!flag){
	   	$('.morei2').css('background-position','4px -10px')
	   	}
	   else{
	   	$('.morei2').css('background-position','4px -45px')
	   }		
	   },function(){
	   	if(!flag){
	   	$('.morei2').css('background-position','4px 7px')
	   	}
	   else{
	   	$('.morei2').css('background-position','4px -27px')
	   }	
	   })

   var flag2=false;
$('.fea-ul li').click(function(){
	flag2=!flag2;
	if (flag2) {
		var i=$(this).index()
	    $('.ai').eq(i).css('background-position','-1px -108px').css('border-color','#e4393c')
	}
	else{
		var i=$(this).index()
	    $('.ai').eq(i).css('background-position','10px 108px').css('border-color','#ccc')
	}
})

$(window).ready(function(){
	var x = $('.for-copy')
	$('.list-ul li').html(x)
	
	
})


$('.footer').load('footer.html')