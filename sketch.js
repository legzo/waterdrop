/// <reference path="./bindings/p5.global-mode.d.ts" />

let HAUTEUR = 600;
let LARGEUR = 600;
let gouttes = [];
let rouge;
let vert;
let bleu;
let vitesse;

function setup() {
  createCanvas(LARGEUR, HAUTEUR);

  rouge = random(0, 255);
  vert = random(0, 255);
  bleu = random(0, 255);

  vitesse = 1;

  setBackground();
}

class Goutte {

  constructor(x, y) {
    this.taille = 0;
    this.x = x;
    this.y = y;
  }

  dessiner() {

    this.taille = this.taille + vitesse;

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
  if (vitesse > 0 || offset > 0) {
    vitesse += offset;
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

function draw() {
  setBackground();

  noFill()

  gouttes
    .forEach(goutte => goutte.dessiner());
}

function changerDeCouleur() {
  rouge = random(0, 255);
  vert = random(0, 255);
  bleu = random(0, 255);
}

function setBackground() {
  background(rouge, vert, bleu);
}
