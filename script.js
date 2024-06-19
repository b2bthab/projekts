window.onload = function() {
  zimetuzcanva();
}
function zimetuzcanva() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(30, 30, 400, 350); 
}
function zimetuzcanva2() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "blue";
  ctx.strokeRect(0, 0, 300, 350); 
}
function aplis() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(120, 120, 80, 0, 2 * Math.PI);
  ctx.lineWidth = 5;
  ctx.fillStyle = "red"; //aizpildījuma krāsa
  ctx.strokeStyle = "blue"; //līnijas krāsa
  ctx.fill();
  ctx.stroke();
}
function linija() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(75, 57);
  ctx.lineTo(300, 350);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.stroke();
}
function teksts() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "purple";
  ctx.fillText("Sveiki, pasaule!", 190, 85); 
}
function aprekins() {
let vards = document.getElementById("vards").value;
let num1 = parseFloat(document.getElementById("a").value);
let num2 = parseInt(document.getElementById("b").value);
let sum = num1 * num2;
console.log("Tevi sauc " + vards + "Atbilde ir: " + sum);
document.getElementById("rezultats").innerHTML = "<br>Tevi sauc " + vards + "<br>Atbilde ir: " + sum;
}
function atjaunotIetvaru(which) {
document.getElementById("lapas_saturs").innerHTML = '<'+'object id="lapas" type="text/html" data="'+which.href+'"></'+'object>';
}
let age = 100;
if (age < 18) {
  console.log("Nepilngadīgs");
} else if (age >= 18 && age < 65) {
  console.log("Pilngadīgs");
}
else {
  console.log("Cits gadijums")
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i==5) {
  console.log(i);
}
}
let j = 0;
while (j<=10) {
  console.log(j);
  j++;
}
let skaitlis = 