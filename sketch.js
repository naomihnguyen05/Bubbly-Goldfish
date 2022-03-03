let micVar;
let mic;
let fr = 90;
let bigBubbles = []; // empty array

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(fr); //Attempt to refresh at starting FPS
  //console.log(bigBubble1);

  for (let i = 0; i < 3; i++) {
    bigBubbles[i] = new bigBubble(random(width), random(height));
  }
}

function draw() {
  //Beginning Colors
  //background(220);
  background(162, 210, 255);
  micVar = map(mic.getLevel(), 0, 0.1, 0, 245);
  console.log(micVar);

  //console.log(mouseX);
  //conditional for Bubbles Movement
  if (mouseX > width * 0 && mouseX < width * 1) {
    if (mouseY > height * 0 && mouseY < height * 1) {
      look = 1;
    } else {
      look = 0;
    }
  } else {
    look = 0;
  }

  //bubble class movement
  for (let i = 0; i < 3; i++) {
    bigBubbles[i].body();
    bigBubbles[i].move();
  }

  bubbles(237, 245, 253);
  body(223, 124, 42);
  head(254, 207, 163);
  eye(0, 0, 0);
  tailSection();
  finSection(254, 207, 163);
}

class bigBubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.y++;

    if (this.y > height) {
      this.y = 0;
    }
  }

  body() {
    strokeWeight(0);
    fill(150, 188, 255);
    ellipse(this.x, this.y, 50, 50);
  }
}

function bubbles(r, g, b) {
  strokeWeight(0);
  fill(154, 196, 255);
  // rising bubble 1
  circle(width * 0.1, height * 0.9 - frameCount, width * 0.04);
  // rising bubble 2
  circle(width * 0.16, height * 0.6 - frameCount, width * 0.07);
  // rising bubble 3
  circle(width * 0.47, height * 0.8 - frameCount, width * 0.04);
  // rising bubble 4
  circle(width * 0.6, height * 0.9 - frameCount, width * 0.06);
  // rising bubble 5
  circle(width * 0.56, height * 0.72 - frameCount, width * 0.04);
  // rising bubble 6
  circle(width * 0.88, height * 0.6 - frameCount, width * 0.04);
  fill(237, 245, 280, 10 + micVar);
  // bubble 1
  circle(width * 0.8, height * 0.37, width * 0.16 + micVar / 35);
  // bubble 2
  circle(width * 0.89, height * 0.24, width * 0.08 + micVar / 35);
  // bubble 3
  circle(width * 0.8, height * 0.16, width * 0.06 + micVar / 35);
  // bubble 4
  circle(width * 0.2, height * 0.65, width * 0.12 + micVar / 35);
  // bubble 5
  circle(width * 0.12, height * 0.8, width * 0.08 + micVar / 35);
  // bubble 6
  circle(width * 0.28, height * 0.77, width * 0.05 + micVar / 35);
}

function body(r, g, b) {
  //draw goldfish body
  strokeWeight(0);
  fill(223, 124, 42);
  circle(width * 0.58, height * 0.48, width * 0.4);
}

function head(r, g, b) {
  //draw goldfish head
  strokeWeight(0);
  fill(254, 207, 163);
  triangle(
    width * 0.57,
    height * 0.28,
    width * 0.78,
    height * 0.28,
    width * 0.78,
    height * 0.48
  );
}

function eye(r, g, b) {
  //draw goldfish eye
  strokeWeight(0);
  fill(0, 0, 0);
  circle(width * 0.66, height * 0.31, width * 0.03);
}

function tailSection(r, g, b) {
  //draw goldfish tail
  strokeWeight(0);
  fill(254, 207, 163);
  triangle(
    width * 0.24,
    height * 0.28,
    width * 0.24,
    height * 0.68,
    width * 0.57,
    height * 0.68
  );
  //draw goldfish tail fin
  fill(223, 124, 42);
  rect(width * 0.19, height * 0.28, width * 0.05, height * 0.4);
}

function finSection(r, g, b) {
  //Fin Section
  stroke(223, 124, 42);
  strokeWeight(1);
  fill(254, 207, 163);
  if (look == 0) {
    // fin 1
    push();
    translate(width / 2, height / 2);
    translate(width * -0.5, height * -0.5);
    rotate(0);
    triangle(
      width * 0.58,
      height * 0.46,
      width * 0.58,
      height * 0.58,
      width * 0.71,
      height * 0.58
    );
    pop();
    // fin 2
    push();
    translate(width / 2, height / 2);
    translate(width * -0.5, height * -0.5);
    rotate(0);
    triangle(
      width * 0.58,
      height * 0.46,
      width * 0.58,
      height * 0.58,
      width * 0.71,
      height * 0.62
    );
    pop();
    // fin 3
    push();
    translate(width / 2, height / 2);
    translate(width * -0.5, height * -0.5);
    rotate(0);
    triangle(
      width * 0.58,
      height * 0.46,
      width * 0.58,
      height * 0.58,
      width * 0.68,
      height * 0.66
    );
    pop();
  } else if (look == 1) {
    // fin 1
    push();
    translate(width / 2, height / 2);
    translate(width * -0.5, height * -0.5);
    rotate(0);
    triangle(
      width * 0.58,
      height * 0.46,
      width * 0.58,
      height * 0.58,
      width * 0.71,
      height * 0.45
    );
    pop();
    // fin 2
    push();
    translate(width / 2, height / 2);
    translate(width * -0.5, height * -0.5);
    rotate(0);
    triangle(
      width * 0.58,
      height * 0.46,
      width * 0.58,
      height * 0.58,
      width * 0.71,
      height * 0.41
    );
    pop();
    // fin 3
    push();
    translate(width / 2, height / 2);
    translate(width * -0.5, height * -0.5);
    rotate(0);
    triangle(
      width * 0.58,
      height * 0.46,
      width * 0.58,
      height * 0.58,
      width * 0.68,
      height * 0.36
    );
    pop();
  }
}
