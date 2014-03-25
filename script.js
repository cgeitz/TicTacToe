$(document).ready(function(){
	$('.item').click(function(){
		$(this).addClass('obama');
	});
	$('.item').dblclick(function(){
		$(this).toggleClass('kanye')
	});
});