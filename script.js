//this program draws a snowman

function setup() {
  createCanvas(500, 500); //canvas
  background('#b3cee6');
  noLoop();
}

function draw() { //snowman #1
  noStroke();
  rect(0, 400, 500, 200); //ground

  stroke('#858585');
  ellipse(250, 400, 180, 160); //bottom
  stroke('#a8a8a8');
  ellipse(250, 280, 155, 140); //middle
  stroke('#b8b6b6');
  ellipse(250, 165, 145, 140); //top

  strokeWeight(15);
  stroke('#8f4825');
  line(300, 280, 390, 170); //R arm
  line(190, 280, 130, 370); //L arm

  strokeWeight(1);
  stroke('#cf6b00');
  fill('orange');
  triangle(250, 190, 260, 170, 200, 165); //nose

  noStroke();
  fill('black'); //eyes
  ellipse(220, 150, 20);
  ellipse(280, 150, 20);

  fill('black'); //mouth L to R
  ellipse(225, 205, 10);
  ellipse(240, 210, 10);
  ellipse(260, 210, 10);
  ellipse(275, 205, 10);
  
}