//Create a reference for canvas 

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image

greencar_width=45;
greencar_height=45;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_image_down = "car2down.png";

//Set initial position for a car image.

greencar_X=10;
greencar_Y=10;

function add() {
	
	background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

	greencar_imgTag=new Image();
    greencar_imgTag.onload=uploadGreenCar;
	greencar_imgTag.src=greencar_image;

	greencar_imgTag_down=new Image();
    greencar_imgTag_down.onload=uploadGreenCardown;
	greencar_imgTag_down.src=greencar_image_down;
}

function uploadBackground() {

	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadGreenCar() {

	ctx.drawImage(greencar_imgTag,greencar_X,greencar_Y,greencar_width,greencar_height);
	
}

function uploadGreenCardown() {

	ctx.drawImage(greencar_imgTag,greencar_X,greencar_Y,greencar_width,greencar_height);
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if(greencar_Y >= 0){
		greencar_Y = greencar_Y-10;
		console.log("when up arrow pressed, X= "+greencar_X+" Y= "+greencar_Y);
		uploadBackground();
		uploadGreenCar(); 
	}
	}
	
	function down(){
		if(greencar_Y <= 500){
			greencar_Y = greencar_Y+10;
			console.log("when down arrow pressed, X= "+greencar_X+" Y= "+greencar_Y);
			uploadBackground();
			uploadGreenCardown(); 
		}
		}
	
		function left(){
			if(greencar_X >= 0){
				greencar_X = greencar_X-10;
				console.log("when Left arrow pressed, X= "+greencar_X+" Y= "+greencar_Y);
				uploadBackground();
				uploadGreenCarLeft(); 
			}
			}
	
			function right(){
				if(greencar_X <= 700){
					greencar_X = greencar_X+10;
					console.log("when Right arrow pressed, X= "+greencar_X+" Y= "+greencar_Y);
					uploadBackground();
					uploadGreenCar(); 
				}
				}