var roach;
var roaches =[];

function preload(){
	roach = loadImage('images/roach.jpg');
}

function setup(){
	createCanvas(800, 800)
	for(var i=0; i<10; i++){
		roaches.push(new Roaches(random(0, 800), random(0, 800)));
	}
}

function draw(){
	background("white");
	for(var i=0; i<10; i++){
		roaches[i].move();
		roaches[i].show();



	}
}
function Roaches(x, y){
	this.x = x;
	this.y = y;
	this.col = color(random(255), random(255), random(255));
	// this.showX= random();
	// this.showY= random();



	this.show = function(){
		tint(this.col);
		image(roach, this.x, this.y);
	}

	this.move = function() {
		this.x += random(1, 4);
		this.y += random(1, -5);


	}			
}