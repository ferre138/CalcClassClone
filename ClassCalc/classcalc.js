// ELEMENT VARIABLES
var keys = document.querySelectorAll(".btn-calc"),
	displayLeft = document.querySelector(".display-left"),
	deleteKey = document.querySelector("#backspace"),
	calculateKey = document.querySelector(".btn-equal"),
	historyDisplay = document.querySelector(".history"),
	historyRows = document.querySelectorAll(".hist-row"),
	historyLeft = document.querySelectorAll(".history-left"),
	historyRight = document.querySelectorAll(".history-right"),
	tempResult = document.querySelector(".temp-res-val"),
	angleType = document.querySelector(".angle"),
	calcIcon = document.querySelector(".fa-calculator"),
	navDropdown = document.querySelector(".calc-dropdown"),
	menuBtn = document.querySelectorAll(".menu-btn");

// variable to control number of rows to display
var rowCount = 0;

// add numbers to left current display
for(var i=0;i<keys.length;i++){
	keys[i].addEventListener("click", function(){
		var val = this.innerHTML;
		displayLeft.innerHTML += val;
	});
}

// backspace key
deleteKey.addEventListener("click", function(){
	var str = displayLeft.innerHTML;
	if(str.includes("<") || str.includes(">")){
		displayLeft.innerHTML = "";
	}
	else{
		displayLeft.innerHTML = str.substring(0, str.length-1);
	}
})

// return key - clear current display and show in temporaru result box as well as history display
calculateKey.addEventListener("click", function(){
	if(rowCount>4){
		rowCount = 0;
		for(var i = 0; i<5; i++){
			historyRows[i].classList.add("hide");
		}
	}

	if(displayLeft.innerHTML !== ""){
		historyRows[rowCount].classList.remove("hide");
		historyLeft[rowCount].innerHTML = displayLeft.innerHTML;
		tempResult.innerHTML = displayLeft.innerHTML;
		historyRight[rowCount].innerHTML = tempResult.innerHTML;
		displayLeft.innerHTML = "";
		rowCount++;
	}
})

// change from Rad to Deg and vice-versa
angleType.addEventListener("click", function(){
	if (this.textContent === "Deg") this.textContent = "Rad";
	else this.textContent = "Deg";
})

// show calculator type dropdown menu
calcIcon.addEventListener("click", function(){
	navDropdown.classList.toggle("hide");
	navDropdown.style.height = "100px";
})

// switch between keypad modes - TRIG, ALG, STAT, CLCS
for(var i=0; i<menuBtn.length; i++){
	menuBtn[i].addEventListener("click", function(){
		var mode = this.textContent;
		if(this.textContent === "TRIG"){
			document.querySelector("#keypad").classList.toggle("no-display");
			document.querySelector("#trig").classList.toggle("no-display");
		}
		// other buttons go here
		this.classList.toggle("active");
	})
}