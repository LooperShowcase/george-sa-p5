function setup() {
  
  createCanvas(600, 600);
angleMode(DEGREES)
}
let i =0;
function draw() {
  let seconds = second();
  let minutes = minute();
  let hours = hour();
  
  background(3, 7, 30);
  textSize(30)
  
 noFill()
 stroke(208, 0, 0)
 strokeWeight(10)
 translate (width/2,height/2)
 rotate (-90)
 let secArc = map(seconds,0,60,0,360)


stroke (220, 47, 2)
strokeWeight(10)
let minArc = map (minutes,0,60,0,360)


stroke (232, 93, 4)
strokeWeight(10)
let houArc = map (hours %12,0,12,0,360)


push ()
rotate (secArc)
stroke(208, 0, 0)
line (0,0,150,0,seconds)
pop ()

push ()
rotate (minArc)
stroke (220, 47, 2)
line (0,0,125,0,minutes)
pop ()

push ()
rotate (houArc)
stroke (232, 93, 4)
line (0,0,100,0,hours)
pop ()
stroke (225)
circle(0, 0, 20)
circle (0,0,400)
textSize (30)
rotate (90)
strokeWeight(1)
text(12, -15, -150);
text (1,80, -130)
text (2,140,-70)
text (3,160,10)
text (4,140,90)
text (5, 80,160)
text (6,-10,180)
text (7,-95,160)
text (8,-160,90)
text (9,-180,10)
pop ()
text (10,-160,-70)
text (11,-95,-130)
i++;
  stroke ("white")
text("𝕲𝖊𝖔𝖗𝖌𝖊",-50,100)
}
