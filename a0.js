let h, m, s;
let hc, mc, sc, rc;
let hd, md, sd;
let hMax, hMin, mMax, mMin;

function setup() {
  createCanvas(500, 500); // make an HTML canvas element width x height pixels
  // setting starting colors 
  hc = color(random(255), random(255), random(255));
  mc = color(random(255), random(255), random(255));
  sc = color(random(255), random(255), random(255));
  frameRate(1);
  
  h = 0;
  m = 30;
  s = 15;

  /* unfortunately, I made a super amateur design mistake and made the diameters of each ellipse dependent on each other! so these variables ensure that hour 0 never causes nothing to show. */
  
  hMax = height * 2;
  hMin = height/4;

}

function draw() {
  background(225);
  
  textSize(32);
  fill(180);
  text(hour(), 10, 30);
  fill(100);
  text(minute(), 10, 60);
  fill(0);
  text(second(), 10, 90);

  rc = color(random(255), random(255), random(255));

  h = hour();
  m = minute();
  s = second();

  // circle diameter
  hd = map(h, 0, 24, hMin, hMax);
  md = map(m, 0, 60, hd/10, hd);
  sd = map(s, 0, 60, md/10, md);
  text(hd, width/2, 30);
  text(md, width/2, 60);
  text(sd, width/2, 90);

  noStroke();
  // hour
  if (m == 0) {
    hc = mc;
    mc = rc;
  }
  fill(hc);
  ellipse(width/2, height, hd, hd);

  // minute
  if (s == 0) {
    mc = sc;
    sc = rc;
  }
  fill(mc);
  ellipse(width/2, height, md, md);

  // seconds
  fill(sc);
  ellipse(width/2, height, sd, sd);
  
  if (mouseIsPressed) {
    showGrid();
  }
}

function showGrid() {
  for (i = 0; i < 24; i++) {
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(width/2, height, map(i, 0, 24, hMin, hMax));
  }
}