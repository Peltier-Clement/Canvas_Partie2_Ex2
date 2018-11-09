var c = document.getElementById('canvas');
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth="2"
//le ctx.lineWidth va permettre de régler l'épaisseur du trait
ctx.strokeStyle="black"
//ctx.strokeStyle va permettre de choisir la couleur du trait
//mais attention il ne va pas remplir notre forme tracé
ctx.fillStyle="ligth"
ctx.moveTo(160,95);
ctx.quadraticCurveTo(205,10,250,96)
ctx.stroke();
ctx.fill();
//ctx.stroke(); va servir a ne plus apporté de modification sur notre épaisseur de trait
//si jamais il y a d'autres tracages de prévue
ctx.beginPath();
ctx.lineWidth="2"
ctx.strokeStyle="black"
ctx.fillStyle="grey"
ctx.moveTo(50,150);
ctx.quadraticCurveTo(200,30,350,150);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.lineWidth="2"
ctx.strokeStyle="black"
ctx.fillStyle="grey"
ctx.moveTo(50,150);
ctx.quadraticCurveTo(200,300,350,150);
ctx.stroke();
ctx.fill();
