$('.news-one a').hover(function(){
	$(this).addClass('active5').siblings().removeClass('active5')
})
$('.news-two a').hover(function(){
	$(this).addClass('cuzz').siblings().removeClass('cuzz')
})

var i=$('.panel-large').index();
$('.news-two a').hover(function(){
	 i=$(this).index();
	$('.panel-large').eq(i).addClass('opac').siblings().removeClass('opac')
})



$('.right-btn').click(function(){
	
 		i++;
	if(i==3){
		i=0
	}
	$('.panel-large').eq(i).addClass('opac').siblings().removeClass('opac')
	$('.news-two a').eq(i).addClass('cuzz').siblings().removeClass('cuzz')
})
$('.left-btn').click(function(){
 		i--;
	if(i==-1){
		i=2
	}
	$('.panel-large').eq(i).addClass('opac').siblings().removeClass('opac')
	$('.news-two a').eq(i).addClass('cuzz').siblings().removeClass('cuzz')
})
$('.switch-ul li').eq(0).hover(function(){
	$('.one-line').css('display','block').css('left','0px').css('width','78px')
	$(this).addClass('active-cont' )
	$('.switch-ul li').eq(1).removeClass('active-cont' )
},function(){
	
})
$('.switch-ul li').eq(1).hover(function(){
	$('.one-line').css('display','block').css('left','92px').css('width','90px')
	$(this).addClass('active-cont' )
	$('.switch-ul li').eq(0).removeClass('active-cont' )
},function(){
	
})

$.get('http://www.1shizhan.com/szw/index.php/Home/Index/shop.html', function(data, b, c) {
			data = JSON.parse(data);
			console.log(data)
			var str1 = data[0].goods_name;
			var str2 = data[0].goods_thumb;
			var str3 = "http://www.1shizhan.com/szw/" + str2;
			var str4 = data[0].shop_price;
			$('.load-img').attr('src', str3);
			$('.load-name').html('<em>+</em>' + str1);
			$('.load-price').text(str4);
			$('.load-allprice').text( str4);
			var num = 1;
			$('.add').click(function() {
				num++
				$('.shuliang').val(num);
				$('.load-allprice').text(num * str4 + '.00');
				if($('.one-choose').prop('checked', 'checked')) {
					$('.load-account').text(num);
					$('.load-sumprice').text('¥' + num * str4 + '.00');
					$('.item-last').css('background','#fff4e8')
				}
				
			})
			$('.minus').click(function() {
				num--;
				if(num == 0) {
					num = 1
				}
				$('.shuliang').val(num);
				$('.load-allprice').text(num * str4 + '.00');
				if($('.one-choose').prop('checked', 'checked')) {
					$('.load-account').text(num);
					$('.load-sumprice').text('¥' + num * str4 + '.00');
					$('.item-last').css('background','#fff4e8')
				}
				
			})

		})
            $(".load-allxuan").click(function checkAll() 
				{ 
				var checkedOfAll=$(".load-allxuan").prop("checked"); 
				console.log(checkedOfAll)
				if (checkedOfAll==true) {
				  	$('.item-last').css('background','#fff4e8')
				  	var num=$('.shuliang').val();
				  	var str4=$('.load-allprice').html()
				  	$('.load-account').text(num);
				  	$('.load-sumprice').text('¥' + str4);
				  } 
				  else{
				  	$('.item-last').css('background','#fff')
				  	$('.load-account').text(0);
				  	$('.load-sumprice').text('¥0.00');
				  }
				$("input[name='procheck']").prop("checked", checkedOfAll); 
				} ) 
				
				
			$(".one-choose").click(function checkAll() 
				{ 
				var checkedOfAll=$(".one-choose").prop("checked"); 
				  if (checkedOfAll==true) {
				  	$('.item-last').css('background','#fff4e8');
				  	var num=$('.shuliang').val();
				  	var str4=$('.load-allprice').html()
				  	$('.load-account').text(num);
				  	$('.load-sumprice').text('¥' + str4);
				  	
				  } 
				  else{
				  	$("input[name='procheck']").prop("checked", checkedOfAll);
				  	$('.item-last').css('background','#fff');
				  	$('.load-account').text(0);
				  	$('.load-sumprice').text('¥0.00');
				  }
				} ) 
					

          