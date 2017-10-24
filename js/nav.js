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