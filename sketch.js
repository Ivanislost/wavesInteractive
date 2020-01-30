
let pointArray = [];
var xAmplitude = 15;
var yAmplitude = 15;
var xSpeed;
var ySpeed;

function displacement(x, y){
  console.log(`I am a point with x=${x}, y=${y}`);
}

function setup() {

  createCanvas(1600,800);

  for (var xNumIn = 1; xNumIn <= 20; xNumIn++) {
  	for (var yNumIn = 1; yNumIn <= 20; yNumIn++) {
  		pointArray.push(new ppoint(xNumIn, yNumIn, displacement));

  	}
  }
  noStroke();

  xSpeed = frameCount/40;
  ySpeed = frameCount/40;
}



function draw() {
  background('#FFF');
  pointArray.forEach(function(element){
      fill(color('red'));
      ellipse(element.x, element.y, 5, 5);
      fill('#141414');
      element.display();
  })
}



//point class
class ppoint{
	constructor(xNumIn, yNumIn, funkyIn){
		this.xNum = xNumIn;
		this.yNum = yNumIn;
		this.x = xNumIn * 50;
		this.y = yNumIn * 50;
    this.funky = funkyIn;
    funkyIn(this.x, this.y);
	}

	display() {
    // fill(120, 200+4*this.xDisplace(), 200-4*this.yDisplace());
		//ellipse(this.x + this.pXChange(), this.y+ this.pYChange(), 5, 5);
		ellipse(this.x + this.xDisplace(), this.y + this.yDisplace(), 15, 15);
	}

  xSpeed(){
    return frameCount/40;
  }
  ySpeed(){
    return frameCount/40;
  }

  xDisplace(){
    return xAmplitude*sin(this.xSpeed() + 0.2*this.xNum + this.yNum);
  }
  yDisplace(){
    return yAmplitude*sin(this.ySpeed() + 0.2*this.yNum - this.xNum);
  }

	pXChange(){
		return(sin((frameCount/10) + this.numX));
	}

	pYChange(){

		return(cos((frameCount/10) + this.numY));
	}



}
