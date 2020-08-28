console.log("Reloaded");

var getFieldElements = document.getElementsByTagName("fieldset");

var count = 0;
var fieldset = getFieldElements[count];

// Validation loop & goes to the next step
function btn_next() {
	var isClicked = true;

	var fieldsetAction = document.querySelectorAll("fieldset")[count];
	var fieldCount = fieldsetAction.querySelectorAll("input").length;

	for (i = 0; i < fieldCount; ++i) {
		var fieldInput = fieldsetAction.querySelectorAll("input")[i];
		if (fieldInput.getAttribute("type") === "button") {
			// nothing happens
		} else {
			if (fieldInput.value === "") {
				fieldInput.style.backgroundColor = "pink";
				isClicked = false;
			} else {
				if (isClicked === false) { } else {
					isClicked = true;
					fieldInput.style.backgroundColor = "none";
				}
			}
		};
	};
	if (isClicked === true) {
		// goes to the next step
		var selection = getFieldElements[count];
		selection.className = "hide";
		count = count + 1;
		var selection = getFieldElements[count];
		selection.className = "Card";

	}
};

// goes one step back
function btn_backToForm1() {
	getFieldElements[count].className = "hide";
	count = count - 1;
	getFieldElements[count].className = "show";
};
function btn_backToForm2() {
	getFieldElements[count].className = "hide";
	count = count - 1;
	getFieldElements[count].className = "Card";
};
function submit() {
	location.href = "secondPage.html";
	input();

}

function page1Input() {
	var items = [];
	for (i = 1; i < 5; i++) {
		items.push(document.getElementById('input' + i).value);
		sessionStorage.setItem('someName', items);
	}
	console.log(sessionStorage.getItem('someName', items));
}

function page2Input() {
	var items = [];
	for (i = 1; i < 2; i++) {
		items.push(document.getElementById('txtarea' + i).value);
		sessionStorage.setItem('textAreaInput', items);
	}
	console.log(sessionStorage.getItem('textAreaInput', items));
}
function page3Input() {
	var items = [];
	items.push(document.getElementById('exp').value);
	sessionStorage.setItem('experienceJob', items);
	console.log(sessionStorage.getItem('experienceJob', items));
}
console.log("loaded");