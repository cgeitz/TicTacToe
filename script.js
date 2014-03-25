var choices = [false, false, false, false, false, false, false, false, false];

$(document).ready(function(){
	$('.item').click(function(){
		$(this).addClass('obama');
	});
	$('.item').dblclick(function(){
		$(this).toggleClass('kanye')
	});
});

('container').onclick=function(){
	if($('.box0').hasClass('obama')){
		choices[0]= true;
	}
	else if($('.box1').hasClass('obama')){
		choices[1]= true;
	}
	else if($('.box2').hasClass('obama')){
		choices[2]= true;
	};

if(choices[0]===true && choices[1]===true && choices[2]===true){
alert("obama wins!");
};
};




