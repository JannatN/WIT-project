console.log("Reloaded");

// dom variables
var getFieldElements = document.getElementsByTagName("fieldset");

// declaring the active fieldset & the total fieldset count
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

console.log("loaded");