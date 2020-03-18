/// <reference path="./bindings/p5.global-mode.d.ts" />

let HAUTEUR = 600;
let LARGEUR = 600;
let gouttes = [];
let rouge;
let vert;
let bleu;

function setup() {
  createCanvas(LARGEUR, HAUTEUR);

  rouge = random(0, 255);
  vert = random(0, 255);
  bleu = random(0, 255);

  setBackground();
}

class Goutte {

  constructor(x, y) {
    this.taille = 0;
    this.x = x;
    this.y = y;
  }

  dessiner() {

    this.taille = this.taille + 1;

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
  } else if (keyCode === 32) {
    changerDeCouleur();
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
