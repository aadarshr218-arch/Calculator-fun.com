let Clr = document.getElementById("Clear")
let x = document.getElementById("1")
let y = document.getElementById("2")
let z = document.getElementById("3")
let a = document.getElementById("4")
let b = document.getElementById("5")
let c = document.getElementById("6")
let d = document.getElementById("7")
let e = document.getElementById("8")
let f = document.getElementById("9")
let g = document.getElementById("0")
let add= document.getElementById("add")
let subtract = document.getElementById("subtract")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let h = document.getElementById("equal")
const input = document.getElementById("in")
x.onclick = function(){
  input.value += "1";
}
y.onclick = function(){
  input.value += "2";
}
z.onclick = function(){
  input.value += "3";
}
a.onclick = function(){
  input.value += "4";
}
b.onclick = function(){
  input.value += "5";
}
c.onclick = function(){
  input.value += "6";
}
d.onclick = function(){
  input.value += "7";
}
e.onclick = function(){
  input.value += "8";
}
f.onclick = function(){
  input.value += "9";
}
g.onclick = function(){
  input.value += "0"
}
h.onclick = function(){
  input.value = eval(input.value)
  
}
add.onclick = function(){
  input.value += "+";
}
subtract.onclick= function(){
  input.value += "-";
}
multiply.onclick = function(){
  input.value += "*";
}
divide.onclick = function(){
  input.value += "/";
}
Clr.onclick = function(){
  input.value = ""
}