//Index.js
//Create variables
//When adding a new scene, update generateSelf for unlocking the scene
var route = "dom";

//Start & System Config Stuff
function startup() {
	sceneTransition("start");
}
//Scene creation
function writeSpeech (name, img, text) {
	if (route == "dom") {
		switch (img) {
			case "player":
				img = "scripts/gamefiles/real/profile1.jpg";
			break;
			case "lisa":
				img = "scripts/gamefiles/real/lisa.jpg";
			break;
			case "jean":
				img = "scripts/gamefiles/real/jean.jpg";
			break;
			case "riley":
				img = "scripts/gamefiles/real/riley.jpg";
			break;
			case "kendra":
				img = "scripts/gamefiles/real/kendra.jpg";
			break;
			case "ava":
				img = "scripts/gamefiles/real/ava.jpg";
			break;
			case "alexis":
				img = "scripts/gamefiles/real/alexis.jpg";
			break;
			case "adriana":
				img = "scripts/gamefiles/real/adriana.jpg";
			break;
			case "gina":
				img = "scripts/gamefiles/real/gina.jpg";
			break;
			case "danny":
				img = "scripts/gamefiles/real/danny.jpg";
			break;
			case "zombie":
				img = "scripts/gamefiles/real/zombie.jpg";
			break;
			case "vr":
				img = "scripts/gamefiles/drawn/elizabeth.jpg";
			break;
			case "knight":
				img = "scripts/gamefiles/drawn/knight.jpg";
			break;
			case "drawn/vr/profile4.jpg":
				img = "scripts/gamefiles/drawn/warlock.jpg";
			break;
			case "doll":
				img = "scripts/gamefiles/drawn/doll.jpg";
			break;
		}
	}
	else {
		switch (img) {
			case "player":
				img = "scripts/gamefiles/drawn/player.jpg";
			break;
			case "lisa":
				img = "scripts/gamefiles/drawn/lisa.jpg";
			break;
			case "jean":
				img = "scripts/gamefiles/drawn/jean.jpg";
			break;
			case "riley":
				img = "scripts/gamefiles/drawn/riley.jpg";
			break;
			case "kendra":
				img = "scripts/gamefiles/drawn/kendra.jpg";
			break;
			case "ava":
				img = "scripts/gamefiles/drawn/ava.jpg";
			break;
			case "alexis":
				img = "scripts/gamefiles/drawn/alexis.jpg";
			break;
			case "adriana":
				img = "scripts/gamefiles/real/adriana.jpg";
			break;
			case "gina":
				img = "scripts/gamefiles/real/gina.jpg";
			break;
			case "zombie":
				img = "scripts/gamefiles/real/zombie.jpg";
			break;
			case "vr":
				img = "scripts/gamefiles/drawn/elizabeth.jpg";
			break;
			case "knight":
				img = "scripts/gamefiles/drawn/knight.jpg";
			break;
			case "drawn/vr/profile4.jpg":
				img = "scripts/gamefiles/drawn/warlock.jpg";
			break;
			case "doll":
				img = "scripts/gamefiles/drawn/doll.jpg";
			break;
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "`
			+ img +
		`">
		<p class = "textName">`+ name + `</p>
		<p>` + text + `</p>
	</div>
	<br>
	`
}

function writeBig (img) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
}

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + scene + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + text + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + text + `</p>
	`;
}

function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
}