var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

for(var i =0; i < list.length; i++){
	list[i].addEventListener("click", liClick);
}
function liClick(){
	this.classList.toggle("done");
}



function inputlength(){
	return input.value.length;
}
function addingtolist(){
		console.log(input.value);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if(inputlength() >0){
		addingtolist();
	}
}

function addListAfterKeypress(event){
	if(inputlength() > 0 && event.keyCode === 13){
		addingtolist();
	}
}

button.addEventListener("click", addListAfterClick);



input.addEventListener("keypress", addListAfterKeypress);



