let scene = 6;
let imgShadow;
let imgEmptynail;
let nails1 = [];
let currentLoad = 0;
let loadedNails = [];
let brush;
let scene2Background;
let colourFlag = false;
let maze;
let step1 = 0;
let avatar1;
let transparentCountV = 1;
let transparentCountV2 = 1;
let transparentCountV3 = 1;
let transparentCount1 = 100;
let transparentCount2 = 100;
let transparentCountx2 = 100;
let transparentCount3 = 100;
let transparentCount4 = 100;
var drop = []
let dropNum = 800;
var elems = []
let elemsNum = 20;
let eyeBackground;
let closedEyeBackground;
let donut;
var openDoor;
let closeDoor;
let nail;
let rain;
let nailsSet = new Set();
let nailHasPlayed = false;
let rainHasPlayed = false;
let rainHasPlayed2 = false;
let clickAmount = 0;

class Avatar {
  constructor(x, y, scene, diameter) {
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.step = 3;
    this.footprintX = x;
    this.footprintY = y;
    this.diameter = diameter;
    this.f = 5;
    this.tillEnd = false;
  }

  display() {
    
    noStroke();
    fill(210, 7, 44, 10);
    ellipse(this.footprintX, this.footprintY, this.diameter/2+(sin(frameCount/5)*this.f*2), this.diameter/6+(sin(frameCount/20)*this.f));

    fill(0, 34, 100);

    ellipse(this.footprintX, this.footprintY-this.diameter/4*3+(sin(frameCount/5)*this.f*3), this.diameter);


    
    if (this.scene == 1) {
      if ((keyIsPressed && keyCode === UP_ARROW) || (keyIsPressed && keyCode === LEFT_ARROW)) {
        if (this.footprintX > windowWidth/100*65 && this.footprintY > windowHeight/100*53 && this.footprintX < windowWidth && this.footprintY < windowHeight) {
        
          this.footprintX -= this.step;
          this.footprintY = this.footprintX*(16/15)*(windowHeight/windowWidth)-49/300*windowHeight;
          this.diameter -= 0.5;
          this.f -= 0.01;
  
        } else if (this.footprintX <= windowWidth/100*65 && this.footprintY <= windowHeight/100*53 && this.footprintX > windowWidth/100*48 && this.footprintY > windowHeight/100*48) {
          
          this.footprintX -= this.step;
          this.footprintY = this.footprintX*(5/17)*(windowHeight/windowWidth)+144/425*windowHeight;
          this.diameter -= 0.3;
          this.f -= 0.01;
          
        } else if (this.footprintX <= windowWidth/100*48 && this.footprintY <= windowHeight/100*48 && this.footprintX > windowWidth/100*35 && this.footprintY > windowHeight/100*45.5) {
          
          this.footprintX -= this.step;
          this.footprintY = this.footprintX*(5/26)*(windowHeight/windowWidth)+126/325*windowHeight;
          this.diameter -= 0.2;
          this.f -= 0.01;
  
        } else {
          
          this.footprintX -= this.step;
          this.footprintY = this.footprintX*(6/170)*(windowHeight/windowWidth)+301/680*windowHeight;
          
        }

        if (this.footprintX < 0) {      
          this.tillEnd = true;   
        }
      }
    }

    if (this.scene == 2) {
      if ((keyIsPressed && keyCode === UP_ARROW) || (keyIsPressed && keyCode === RIGHT_ARROW)) {
        if (this.footprintX < windowWidth/100*22 && this.footprintY > windowHeight/100*77 && this.footprintX > 0 && this.footprintY < windowHeight) {
        
          this.footprintX += this.step;
          this.footprintY = this.footprintX*(-1)*(windowHeight/windowWidth)+99/100*windowHeight;
          this.diameter -= 0.4;
          this.f -= 0.01;
  
        } else if (this.footprintX < windowWidth/100*35 && this.footprintY > windowHeight/100*69 && this.footprintX >= windowWidth/100*22 && this.footprintY <= windowHeight/100*77) {
          
          this.footprintX += this.step;
          this.footprintY = this.footprintX*(-8/13)*(windowHeight/windowWidth)+1177/1300*windowHeight;
          this.diameter -= 0.2;
          this.f -= 0.01;
          
        } else if (this.footprintX < windowWidth/100*50 && this.footprintY > windowHeight/100*63 && this.footprintX >= windowWidth/100*35 && this.footprintY <= windowHeight/100*69) {
          
          this.footprintX += this.step;
          this.footprintY = this.footprintX*(-2/5)*(windowHeight/windowWidth)+83/100*windowHeight;
          this.diameter -= 0.15;
          this.f -= 0.01;
  
        } else {
          
          this.footprintX += this.step;
          this.footprintY = this.footprintX*(-9/50)*(windowHeight/windowWidth)+36/50*windowHeight;
          this.diameter -= 0.1;
          this.f -= 0.01;

        }

        if (this.footprintX >= windowWidth) {      
          this.tillEnd = true;   
        }
      }
    }


    


    
  }


}

class Brush {
  constructor (windowWidth, windowHeight) {
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.mainLength = windowWidth/6;
  }
  
  display() {
    stroke(10, 80, 100);
    fill(10, 80, 100);
    ellipse(mouseX, mouseY, windowHeight/40, this.mainLength);
    stroke(40, 90, 100);
    fill(40, 90, 100);
    ellipse(mouseX, mouseY+this.mainLength/2, windowHeight/50, windowWidth/6/10);
    stroke(0, 10, 80);
    fill(0, 10, 80);
    ellipse(mouseX, mouseY+this.mainLength/2-this.mainLength/20, windowHeight/70, this.mainLength/50);  
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  

  // opener
  imgShadow = loadImage('assets/shadow.png');

  // maze
  maze = loadImage('assets/maze.png');
  maze2_1 = loadImage('assets/maze2_1.png');
  maze2_2 = loadImage('assets/maze2_2.png');

  // nails
  nails1.push(loadImage('assets/emptynail.png'));
  for (let i = 1; i < 11; i++) {
    nails1.push(loadImage('assets/1.' + str(i) + '.png'));
  }

  eyeBackground = loadImage('assets/eyeBackground.png');
  closedEyeBackground = loadImage('assets/closedEyeBackground.png');
  
}

function setup() {
  // create the canvas using the full browser window
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  brush = new Brush(windowWidth, windowHeight);

  for(var i = 0; i < dropNum; i++) {
    drop[i] = new Drop();
  }

  avatar1 = new Avatar(windowWidth/100*95, windowHeight/100*85, 1, windowWidth/10);
  avatar2 = new Avatar(windowWidth/100*9, windowHeight/100*90, 2, windowWidth/12);
  // avatar3 = new Avatar(windowWidth/100*95, windowHeight/100*85, 3, windowWidth/10);
  // avatar4 = new Avatar(windowWidth/100*9, windowHeight/100*90, 4, windowWidth/12);

  
  for(var i = windowHeight/80; i <= windowWidth+windowHeight/40; i+=windowHeight/40) {
    for(var j = windowHeight/80; j <= windowHeight+windowHeight/40; j+=windowHeight/40) {
      elems.push(new Elem(i, j));
    }
  }

  donut = new Donut(windowHeight/15*14);

  openDoor = loadSound('assets/openDoor.m4a');
  closeDoor = loadSound("assets/closeDoor.m4a");
  nail = loadSound("assets/nail.m4a")
  rain = loadSound("assets/rain.m4a")

}

function draw() {

  if (scene == 0) {

    drawScene0();

  } else if (scene == 1) {

    drawScene1();
  
  } else if (scene == 2) {
    drawScene2();
  } else if (scene == 3) {
    drawScene3();
    if (avatar1.tillEnd) {
      noStroke();
      colorMode(RGB, 100);
      fill(0, 0, 0, transparentCountV);
      transparentCountV += 1;
      rect(0, 0, windowWidth, windowHeight);
      if (rain.isPlaying()){
        rain.pause()  
      }

      if (transparentCountV >= 100) {
        scene = 4;
      }  
    }
  } else if (scene == 4) {
    
    drawScene4();
    
  } else if (scene == 5) {
    drawScene5();
    if (avatar2.tillEnd) {
      noStroke();
      colorMode(RGB, 100);
      fill(0, 0, 0, transparentCountV2);
      transparentCountV2 += 1;
      rect(0, 0, windowWidth, windowHeight);

      if (rain.isPlaying()){
        rain.pause()   
      }
      if (transparentCountV2 >= 100) {
        scene = 6;
      }  
    }
  } else if (scene == 6) {
    drawScene6();
  } else if (scene == 7) {
    drawScene7();
  } else if (scene == 8) {
    drawScene8();
  } else if (scene == 9) {
    drawScene9();
  }
}


function Drop() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.show = function() {
    strokeWeight(0.5);
    stroke(200, 100, 100);
    line(this.x, this.y, this.x, this.y + random(150, 160));   
  }
  this.update = function() {
    this.speed = random(20, 30);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = 0;
      this.gravity = 0;
    }
  }
  
  // this.show = function() {
  //   noStroke();
  //   colorMode(HSB, 360, 100, 100);
  //   fill(10, 20, 100);
  //   ellipse(this.x, this.y, random(1, 3), random(1, 3));   
  // }

  // this.update = function() {
  //   this.speed = random(1, 5);
  //   this.gravity = 1.05;
  //   // this.y = this.y - this.speed*this.gravity;  
  //   // this.x = this.x - this.speed*this.gravity;  
  //   this.y = this.y - this.gravity;  
  //   this.x = this.x - this.gravity; 
    
    
  //   if (this.y < 0) {
  //     // this.y = random(height/5*4, height);
  //     this.y = height;
  //     this.gravity = 0;
  //   }

  //   if (this.x < 0) {
  //     this.x = width;
  //     this.gravity = 0;
  //   }
  // }

  // this.update = function() {
  //   this.speed = random(1, 3);
  //   this.gravity = 1.05;
  //   this.y = this.y - this.speed*this.gravity + random(-2,2);
  //   this.x = this.x - this.speed*this.gravity + random(-2,2);
    
  //   if (this.y < 0 || this.x < 0) {
  //     this.y = random(0, height);
  //     this.x = random(0, width);
  //     this.gravity = 0;
  //   }
  //   // if (this.y > height || this.x > width) {
  //   //     this.y = random(0, -height);
  //   //     this.x = random(0, -width);
  //   //     // this.gravity = 0;
  //   // }

  // }
}

function drawScene0() {
  background(0);
}

// opener
function drawScene1() {
  background(0);
  noStroke();
  fill(40, 30, 100);
  strokeWeight(5);
  image(imgShadow, 0, 0, windowWidth, windowHeight);
}

// black tran
function drawScene2() {
  background(0);
  if (frameCount>250) {
    scene = 3;
  }
}


// tran1
function drawScene3() {
  rain.setVolume(0.1);
  if (!rain.isPlaying() && !rainHasPlayed) {
    rain.loop();
    rainHasPlayed = true;
  }
  background(0);
  colorMode(HSB, 360, 100, 100);

  for(var i = 0; i < dropNum; i++) {
    drop[i].show();
    drop[i].update();
  }

  image(maze, 0, 0, windowWidth, windowHeight);

  strokeWeight(10);
  
  avatar1.display();

  noStroke();
  colorMode(RGB, 100);
  fill(0, 0, 0, transparentCount1);
  transparentCount1 -= 1;
  rect(0, 0, windowWidth, windowHeight);
}

// main scene1
function drawScene4() {
  background(250, 60, 80);
  
 
  colorMode(HSB, 360, 100, 100);
  if (colourFlag) {
    background(scene2Background, 60, 80);
  }

  image(nails1[0], 0, 0, windowWidth, windowHeight);

  for (let i = 0; i < loadedNails.length; i++) {
    image(loadedNails[i], 0, 0, windowWidth, windowHeight);
  }
  
  brush.display();
  
  noStroke();
  colorMode(RGB, 100);
  fill(0, 0, 0, transparentCount2);
  transparentCount2 -= 1;
  rect(0, 0, windowWidth, windowHeight);

}

// tran2
function drawScene5() {
  rain.setVolume(0.1);
  if (!rain.isPlaying() && !rainHasPlayed2) {
    rain.loop();
    rainHasPlayed2 = true;
  }

  background(0);
  colorMode(HSB, 360, 100, 100);

  for(var i = 0; i < dropNum; i++) {
    drop[i].show();
    drop[i].update();
  }

  image(maze2_1, 0, 0, windowWidth, windowHeight);

  strokeWeight(10);
  
  avatar2.display();

  stroke(10, 100, 100);

  image(maze2_2, 0, 0, windowWidth, windowHeight);

  noStroke();
  colorMode(RGB, 100);
  fill(0, 0, 0, transparentCountx2);
  transparentCountx2 -= 1;
  rect(0, 0, windowWidth, windowHeight);
  
}


class Donut {
  constructor(diameter) {
    this.diameter = diameter;
  }

  display() {
    colorMode(HSB, 360, 100, 100, 100);
    stroke(0, 0, 100);
    strokeWeight(4);
    fill(30, 80, 90);
    ellipse(windowWidth/2, windowHeight/2, this.diameter);

  
    fill(30,80,20);
    stroke(30,80,20);
    beginShape();
    curveVertex(windowWidth/100*30, windowHeight/100*30);
    curveVertex(windowWidth/100*30, windowHeight/100*30);
    curveVertex(windowWidth/100*40, windowHeight/100*20);
    curveVertex(windowWidth/100*50, windowHeight/100*5);
    curveVertex(windowWidth/100*63, windowHeight/100*25);
    curveVertex(windowWidth/100*73, windowHeight/100*35);
    curveVertex(windowWidth/100*68, windowHeight/100*60);
    curveVertex(windowWidth/100*68, windowHeight/100*80);

    curveVertex(windowWidth/100*53, windowHeight/100*83);
    curveVertex(windowWidth/100*40, windowHeight/100*90);
    curveVertex(windowWidth/100*34, windowHeight/100*72);
    curveVertex(windowWidth/100*27, windowHeight/100*65);
    curveVertex(windowWidth/100*30, windowHeight/100*50);
    curveVertex(windowWidth/100*30, windowHeight/100*30);
    curveVertex(windowWidth/100*42, windowHeight/100*22);
    curveVertex(windowWidth/100*50, windowHeight/100*5);
    curveVertex(windowWidth/100*60, windowHeight/100*27);
    curveVertex(windowWidth/100*60, windowHeight/100*27);
    endShape();

    stroke(0, 0, 100);
    if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < windowHeight/6) {
      fill(10, 40, 100);
    } else {
      fill(0, 0, 0);
    }
    
    ellipse(windowWidth/2, windowHeight/2, this.diameter/3);

    noStroke();
    fill(170, 20, 100);
    ellipse(windowWidth/100*32, windowHeight/100*27, windowHeight/20);
    fill(10, 20, 100);
    ellipse(windowWidth/100*50, windowHeight/100*25, windowHeight/20);
    fill(40, 20, 100);
    ellipse(windowWidth/100*30, windowHeight/100*60, windowHeight/20);
    fill(250, 20, 100);
    ellipse(windowWidth/100*70, windowHeight/100*32, windowHeight/20);
    fill(80, 20, 100);
    ellipse(windowWidth/100*66, windowHeight/100*70, windowHeight/20);
    fill(200, 20, 100);
    ellipse(windowWidth/100*50, windowHeight/100*80, windowHeight/20);
    fill(10, 20, 100);
    ellipse(windowWidth/100*40, windowHeight/100*70, windowHeight/20);
    fill(300, 20, 100);
    ellipse(windowWidth/100*38, windowHeight/100*45, windowHeight/20);
    fill(90, 20, 100);
    ellipse(windowWidth/100*60, windowHeight/100*40, windowHeight/20);
  }
}

function drawScene6() {
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  
  donut.display();

  noStroke();
  colorMode(RGB, 100);
  fill(0, 0, 0, transparentCount3);
  transparentCount3 -= 1;
  rect(0, 0, windowWidth, windowHeight);
}


class Elem {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);
    stroke(0, 0, 100);
    
    // if (dist(this.x, this.y, mouseX, mouseY)<windowHeight/2) {

    //   if (dist(this.x, this.y, mouseX, mouseY)<windowHeight/5) { 
    //     fill(sin(frameCount/1000+PI/10)*360, 90/(windowHeight/5)*dist(this.x, this.y, mouseX, mouseY), 100);
    //     rect(this.x, this.y, windowHeight/40);
    //   } else {
    //     fill(sin(frameCount/1000)*360, 100-90/(windowHeight/2)*dist(this.x, this.y, mouseX, mouseY), 100);
    //     rect(this.x, this.y, windowHeight/40);
    //   }
    
    // } else {
    //   fill(sin(frameCount/1000+PI/5)*360, (100-50/(windowHeight/5*4)*this.y)*(mouseY/windowHeight), 100);
    //   rect(this.x, this.y, windowHeight/40);
    // }   

    // if (dist(this.x, this.y, mouseX, mouseY)<windowHeight/2) {

    //   if (dist(this.x, this.y, mouseX, mouseY)<windowHeight/5) { 
    //     fill(sin((frameCount-50000)/1000+PI/10)*360, 90/(windowHeight/5)*dist(this.x, this.y, mouseX, mouseY), 100);
    //     rect(this.x, this.y, windowHeight/40);
    //   } else {
    //     fill(sin((frameCount-50000)/1000)*360, 100-90/(windowHeight/2)*dist(this.x, this.y, mouseX, mouseY), 100);
    //     rect(this.x, this.y, windowHeight/40);
    //   }
    
    // } else {
    //   fill(sin((frameCount-50000)/1000+PI/5)*360, (100-50/(windowHeight/5*4)*this.y)*(mouseY/windowHeight), 100);
    //   rect(this.x, this.y, windowHeight/40);
    // }  

    if (dist(this.x, this.y, mouseX, mouseY)<windowHeight/2) {

      if (dist(this.x, this.y, mouseX, mouseY)<windowHeight/5) { 
        fill(sin(frameCount/1000*clickAmount+PI/10)*360, 90/(windowHeight/5)*dist(this.x, this.y, mouseX, mouseY), 100);
        rect(this.x, this.y, windowHeight/40);
      } else {
        fill(sin(frameCount/1000*clickAmount)*360, 100-90/(windowHeight/2)*dist(this.x, this.y, mouseX, mouseY), 100);
        rect(this.x, this.y, windowHeight/40);
      }
    
    } else {
      fill(sin(frameCount/1000*clickAmount+PI/5)*360, (100-50/(windowHeight/5*4)*this.y)*(mouseY/windowHeight), 100);
      rect(this.x, this.y, windowHeight/40);
    }
    
    

  }

}

let flipList = [];

// main scene2
function drawScene7() {
  background(255);
  colorMode(HSB, 360, 100, 100, 100);

  for(var i = 0; i < elems.length; i++) {
    elems[i].display();
    
  }
  if (mouseIsPressed && clickAmount>0){
    image(closedEyeBackground, 0, 0, windowWidth, windowHeight);
  } else {
    image(eyeBackground, 0, 0, windowWidth, windowHeight);
  }
  
}

// // tran3
function drawScene8() {
  rain.setVolume(0.1);
  if (!rain.isPlaying() && !rainHasPlayed) {
    rain.loop();
    rainHasPlayed = true;
  }
  background(0);
  noStroke();
  fill(40, 30, 100);
  strokeWeight(5);
  image(imgShadow, 0, 0, width, height);

  // colorMode(HSB, 360, 100, 100);

  // for(var i = 0; i < dropNum; i++) {
  //   drop[i].show();
  //   drop[i].update();
  // }


  // image(maze, 0, 0, windowWidth, windowHeight);

  // strokeWeight(10);
  
  // avatar1.display();

  // noStroke();
  // colorMode(RGB, 100);
  // fill(0, 0, 0, transparentCount1);
  // transparentCount1 -= 1;
  // rect(0, 0, windowWidth, windowHeight);
  
}

// class Clay {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   display() {
//     colorMode(HSB, 360, 100, 100, 100);
//     fill(10, 20, 100);
//     ellipse(this.x, this.y, windowHeight/60);

//   }
// }

// main scene3
function drawScene9() { 
  background(0);
}

let nailsArr = []

function mousePressed() {
  if (scene == 7) {
    // console.log("test test")
    clickAmount++;
    console.log(clickAmount)
    if (clickAmount >= 10){
      scene = 8;
      // console.log(scene)
    }
    
  }

  if (scene == 8) {
    openDoor.play();
    // console.log(scene)
    clickAmount++;
    console.log(clickAmount)
    if (clickAmount>=12){
      
      scene = 9;
      closeDoor.play();
      // console.log(scene)
    }
    
  } 

  if (scene == 0) {
    scene = 1;
    openDoor.play();
  } else if (scene == 1) {
    scene = 2;
    closeDoor.play();
  } 

  if (scene == 4) {
    // main1
    if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/40, windowHeight/13*7) <= 25) {
      loadedNails.push(nails1[1]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("1")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*15.5, windowHeight/20*7) <= 25) {
      loadedNails.push(nails1[2]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("2")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*26.5, windowHeight/100*30) <= 25) {
      loadedNails.push(nails1[3]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("3")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/28*11, windowHeight/29*10) <= 25) {
      loadedNails.push(nails1[4]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("4")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/2, windowHeight/100*73) <= 25) {
      loadedNails.push(nails1[5]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("5")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*54, windowHeight/100*74) <= 25) {
      loadedNails.push(nails1[6]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("6")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*67.5, windowHeight/100*34) <= 25) {
      loadedNails.push(nails1[7]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("7")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*79, windowHeight/100*28) <= 25) {
      loadedNails.push(nails1[8]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("8")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*86.5, windowHeight/100*34.5) <= 25) {
      loadedNails.push(nails1[9]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("9")
    } else if (dist(mouseX, mouseY+brush.mainLength/2, windowWidth/100*96.5, windowHeight/100*51) <= 25) {
      loadedNails.push(nails1[10]);
      scene2Background = random(360);
      colourFlag = true;
      nail.play();
      nailsSet.add("10")
    } 
    // console.log(nailsSet)
    // console.log(nailsSet.size)
    
    setTimeout(function(){
      if (nailsSet.size==10){
        // console.log(nail.isPlaying())
        // console.log(nailHasPlayed)
        // if (!nail.isPlaying() && !nailHasPlayed) {
        //   nail.play();
        //   nailHasPlayed = true;
        //   console.log("Test Test Test")
        // }
        scene = 5
      }
    }, 7000)
    
  }

  if (scene == 6) {
    if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2) < windowHeight/6) {
      nail.play();
      scene = 7;
    }
  }

}


function keyPressed(){

  if (keyCode === BACKSPACE) {
    loadedNails.pop();
    scene2Background = 250;
  } 

  if (keyCode === ENTER) {
    loadedNails = [];
    scene2Background = 250;
  }

  
    // if (keyCode === RIGHT_ARROW && scene == 4) { 
      
      
    //   scene = 5;      
    // }
      
    // if (keyCode === RIGHT_ARROW && scene == 7) {
    //   scene = 8;
    // }
  

  

  
 }

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder.
// make sure you add and commit the image to the root folder of this repo.
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
