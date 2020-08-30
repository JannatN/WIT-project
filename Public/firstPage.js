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
function input() {
	var name = document.getElementById('name').value,
		aboutName = document.getElementById('aboutName').value,
		edu = document.getElementById('edu').value,
		language = document.getElementById('languages').value,
		exp = document.getElementById('exp').value;

	sessionStorage.setItem('me', name);
	sessionStorage.setItem('about-me', aboutName);
	sessionStorage.setItem('language', language);
	sessionStorage.setItem('education', edu);
	sessionStorage.setItem('experienceJob', exp);

	var items = [];
	for (i = 1; i < 4; i++) {
		items.push(document.getElementById('input' + i).value);
		sessionStorage.setItem('contact', items);
	}
}




console.log("loaded");