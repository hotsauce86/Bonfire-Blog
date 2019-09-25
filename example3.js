var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

console.log("hello");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " + 
	color1.value + 
	", " +
	color2.value + ")";

	css.textContent = body.style.background + ";";
}

//let setGradient = () => body.style.background = `"linear-gradient(to right, ${color1.value}, ${color2.value} )"`;


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


let obj  = {

	 a: 'a',
	 b: 'b', 
	 c: {
	 	deep: 'a new object, not a value'
	 }
}
let copyobj = obj;
let supercopy = JSON.parse(JSON.stringify(obj));

obj.c = "new value";
console.log(obj);

console.log(copyobj);

console.log(supercopy);


const adder = (a,b) => a + b;


console.log(adder(3,5));