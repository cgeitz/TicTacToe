
var choices = [false, false, false, false, false, false, false, false, false];
$(document).ready(function(){
	//this changes the div to a picture of obama on a single click and adds win notification
	//functionality
	$('.box0').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[0]=1;
		};
	});

	$('.box1').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[1]=1;
			};
	});

	$('.box2').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[2]=1;
			};
	});

	$('.box3').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[3]=1;
		};
	});

	$('.box4').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[4]=1;
			};
	});

	$('.box5').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[5]=1;
			};
	});

	$('.box6').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[6]=1;
			};
	});

	$('.box7').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[7]=1;
			};
	});

	$('.box8').click(function(){
		$(this).toggleClass('obama');
		if($(this).hasClass('obama')){
			choices[8]=1;
			};
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
			alert("Kanye wins!");
		};
		if(choices[0]===true && choices[3]===true && choices[6]===true){
			alert("Kanye wins!");
		};
		if(choices[0]===true && choices[4]===true && choices[8]===true){
			alert("Kanye wins!");
		};
		if(choices[1]===true && choices[4]===true && choices[7]===true){
			alert("Kanye wins!");
		};
		if(choices[2]===true && choices[5]===true && choices[8]===true){
			alert("Kanye wins!");
		};
		if(choices[3]===true && choices[4]===true && choices[5]===true){
			alert("Kanye wins!");
		};
		if(choices[6]===true && choices[7]===true && choices[8]===true){
			alert("Kanye wins!");
		};
		if(choices[2]===true && choices[4]===true && choices[6]===true){
			alert("Kanye wins!");
		};
	//obama win notification functionality
		if(choices[0]===1 && choices[1]===1 && choices[2]===1){
			alert("Obama wins!");
		};
		if(choices[0]===1 && choices[3]===1 && choices[6]===1){
			alert("Obama wins!");
		};
		if(choices[0]===1 && choices[4]===1 && choices[8]===1){
			alert("Obama wins!");
		};
		if(choices[1]===1 && choices[4]===1 && choices[7]===1){
			alert("Obama wins!");
		};
		if(choices[2]===1 && choices[5]===1 && choices[8]===1){
			alert("Obama wins!");
		};
		if(choices[3]===1 && choices[4]===1 && choices[5]===1){
			alert("Obama wins!");
		};
		if(choices[6]===1 && choices[7]===1 && choices[8]===1){
			alert("Obama wins!");
		};
		if(choices[2]===1 && choices[4]===1 && choices[6]===1){
			alert("Obama wins!");
		};
	});	
		
});







