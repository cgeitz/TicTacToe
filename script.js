
var choices = [false, false, false, false, false, false, false, false, false];
//this changes the div to a picture of obama on a single click
$(document).ready(function(){
	$('.item').click(function(){
		$(this).addClass('obama');
	});

	//this section of code changes the div to a picture of kanye;
	//and changes the value of the array to help determine a winner;

	$('.box0').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[0]=true;
		};
	});

	$('.box1').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[1]=true;
			};
	});

	$('.box2').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[2]=true;
			};
	});

	$('.box3').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[3]=true;
		};
	});

	$('.box4').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[4]=true;
			};
	});

	$('.box5').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[5]=true;
			};
	});

	$('.box6').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[6]=true;
			};
	});

	$('.box7').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[7]=true;
			};
	});

	$('.box8').dblclick(function(){
		$(this).toggleClass('kanye');
		if($(this).hasClass('kanye')){
			choices[8]=true;
			};
	});

$('.container').mousemove(function(){
		if(choices[0]===true && choices[1]===true && choices[2]===true){
			alert("kanye wins!");
		};
		if(choices[0]===true && choices[3]===true && choices[6]===true){
			alert("kanye wins!");
		};
		if(choices[0]===true && choices[4]===true && choices[8]===true){
			alert("kanye wins!");
		};
		if(choices[1]===true && choices[4]===true && choices[7]===true){
			alert("kanye wins!");
		};
		if(choices[2]===true && choices[5]===true && choices[8]===true){
			alert("kanye wins!");
		};
		if(choices[3]===true && choices[4]===true && choices[5]===true){
			alert("kanye wins!");
		};
		if(choices[6]===true && choices[7]===true && choices[8]===true){
			alert("kanye wins!");
		};
		if(choices[2]===true && choices[4]===true && choices[6]===true){
			alert("kanye wins!");
		};
	});	
		
});







