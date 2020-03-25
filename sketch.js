/// <reference path="./bindings/p5.global-mode.d.ts" />

let HAUTEUR = 600;
let LARGEUR = 600;
let gouttes = [];
let rouge;
let vert;
let bleu;
let vitesseDeBase;

function setup() {
  createCanvas(LARGEUR, HAUTEUR);

  rouge = random(0, 255);
  vert = random(0, 255);
  bleu = random(0, 255);

  vitesseDeBase = 1.5;

  setBackground();
}

class Goutte {

  constructor(x, y) {
    this.taille = 0;
    this.vitesse = vitesseDeBase * random(.5, 1.5)
    this.opacity = 1;
    this.strokeWeight = 4;
    this.x = x;
    this.y = y;

    console.log("New goutte : ", this)
  }

  dessiner() {

    this.taille = this.taille + this.vitesse;
    this.opacity *= .99
    this.strokeWeight *= .99

    strokeWeight(this.strokeWeight);
    stroke(`rgba(0,0,0,${this.opacity})`); 

    ellipse(
      this.x,
      this.y,
      this.taille // diamètre, taille du rond
    );
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ajouterUneGoutte();
  } else if (keyCode === DOWN_ARROW) {
    enleverUneGoutte();
  } else if (keyCode === RIGHT_ARROW) {
    changerVitesse(1);
  } else if (keyCode === LEFT_ARROW) {
    changerVitesse(-1);
  } else if (keyCode === 32) {
    changerDeCouleur();
  }
}

function changerVitesse(offset) {
  if (vitesseDeBase > 0 || offset > 0) {
    vitesseDeBase += offset;
  }
}

function ajouterUneGoutte() {
  let x = random(0, LARGEUR);
  let y = random(0, HAUTEUR);

  gouttes.push(new Goutte(x, y));
}

function enleverUneGoutte() {
  gouttes.pop();
}

let throttled = _.throttle(ajouterUneGoutte, 1000);

function draw() {
  setBackground();

  noFill()

  gouttes
    .forEach(goutte => goutte.dessiner());

  throttled();       
}

function changerDeCouleur() {
  rouge = random(0, 255);
  vert = random(0, 255);
  bleu = random(0, 255);
}

function setBackground() {
  background(rouge, vert, bleu);
}
