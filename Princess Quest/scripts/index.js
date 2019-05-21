//Index.js
//Create variables
//When adding a new scene, update generateSelf for unlocking the scene
var picturesDisabled = false;
var saveName;
var imagesDisabled = false;
var dataTemp;
var data = {
	story: {
		currentScene: "start", playingGame: false,
		vrName: "Elizabeth", vrScore: 0, vrReady: false, vr1: false, vr2: false, vr3: false, vr4: false,
	},
	galleryArray: [
		{index: 'vr1', name: "Chapter 1", unlocked: false, hint: 'Complete chapter 1 of princess quest.'},
		{index: 'vr2', name: "Chapter 2", unlocked: false, hint: 'Complete chapter 2 of princess quest.'},
		{index: 'vr3', name: "Chapter 3", unlocked: false, hint: 'Complete chapter 3 of princess quest.'},
		{index: 'vr4', name: "Chapter 4", unlocked: false, hint: 'Complete chapter 4 of princess quest.'},
		{index: 'vr5', name: "Epilogue", unlocked: false, hint: 'Watch the ending of princess quest.'},
		{index: 'vr6', name: "Bonus Scene 1", unlocked: false, hint: 'Collect all of the secret items in princess quest.'},
		{index: 'vr7', name: "Bonus Scene 2", unlocked: false, hint: 'This one is a secret!'},
	],
}

//Start & System Config Stuff
function startup() {
	saveSlot(16);
	gameMode = "dialogue";
	hidePrincess();
	init();
	//alert(data.story.currentScene);
	//console.log(data);
	if(localStorage.getItem('data15')) {
		loadSlot(15);
	}
	else{
		sceneTransition('start');
	}
}

function disablePictures() {
	document.getElementById("playerImage").style.visibility = "hidden";		
	document.getElementById("playerImage").style.width = "0%";
	document.getElementById("playerImage").style.border = "none";
	imagesDisabled = true;
	sceneTransition(data.story.currentScene);
	document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(16);
	}
}

//Showing / Hiding Windows
function showPrincess() {
	document.getElementById("screen").style.visibility = "visible";	
	document.getElementById("floor").style.visibility = "visible";	
	document.getElementById("ceiling").style.visibility = "visible";	
	document.getElementById("demo").style.visibility = "visible";	
	document.getElementById("screenBox").style.height = "400px";	
	document.getElementById("screenButtons").style.visibility = "visible";	
	document.getElementById("screenButtons").style.height = "100px";	
}

function hidePrincess() {
	document.getElementById("screen").style.visibility = "hidden";	
	document.getElementById("floor").style.visibility = "hidden";	
	document.getElementById("ceiling").style.visibility = "hidden";	
	document.getElementById("demo").style.visibility = "hidden";		
	document.getElementById("screenBox").style.height = "0px";	
	document.getElementById("screenButtons").style.visibility = "hidden";	
	document.getElementById("screenButtons").style.height = "0px";	
}

//Scene creation
function writeSpeech (name, img, text) {
	if (data.story.route == "dom") {
		switch (img) {
			case "player":
				img = "scripts/gamefiles/real/profile" + data.story.bodytype + ".jpg";
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
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="bigPicture" src="` + img + `">
			<br>
		`;
	}
}

function writeDrawn (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<p class = 'tinyText'>`+ cap + `</p>
		<br>
	`;
	}
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
	updateMenu();
	console.log("menu updated");
	data.story.currentScene = scene;
	console.log(data.story.currentScene);
	//alert(data.story.currentScene);
	//beforeCheck();
	//afterCheck();
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
	saveSlot(15);
	console.log("autosaved");
}

//Menu updating
function updateMenu() {
	if (data.story.vrScore > 0) {
		document.getElementById('orbs').innerHTML = data.story.vrScore + " of 4 secret orbs found.";
	}
	if (data.story.vrName == "Elizabeth") {
		document.getElementById('playerImage').src = "images/drawn/vr/profile1.jpg";
	}
	else {
		if (data.story.vrName == "Rose") {
			document.getElementById('playerImage').src = "images/drawn/vr/profile3.jpg";
		}
		else {
			document.getElementById('playerImage').src = "scripts/gamefiles/none.png";
		}
	}
}

function updateBody(n) {
	n = parseInt(n);
	data.story.bodytype = n;
	switch(n) {
		case 0:
			document.getElementById('playerImage').src = "images/real/body/body0.jpg";
			data.story.underwear = 1;
		break;
		case 1:
			document.getElementById('playerImage').src = "images/real/body/body1.jpg";
				data.story.clothing = 1;
				data.story.underwear = 1;
		break;
		case 2:
			document.getElementById('playerImage').src = "images/real/body/body2.jpg";
				data.story.clothing = 17;
				data.story.underwear = 2;
		break;
		case 3:
			document.getElementById('playerImage').src = "images/real/body/body3.jpg";
				data.story.clothing = 6;
				data.story.underwear = 3;
		break;
		case 4:
			document.getElementById('playerImage').src = "images/drawn/aya/player.jpg";
			data.story.clothing = 1;
			data.story.underwear = 1;
		break;
	}
	wear('clothing', data.story.clothing);
	wear('underwear', data.story.underwear);
}

//Saving & Loading
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	sceneTransition(data.story.currentScene);
	updateMenu();
}

function saveFile(){
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.story.currentScene, "Finished copying");
}

function loadFile(){
	dataTemp = prompt("Please paste the data", "");
	dataTemp = JSON.parse(dataTemp);
	if (dataTemp.galleryArray[5].index == "vr6") {
		data = dataTemp;
		saveSlot(15);
		loadSlot(15);
	}
	else {
		if (galleryTempCheck("vr1") == true) {
			unlockScene("vr1");
		}
		if (galleryTempCheck("vr2") == true) {
			unlockScene("vr2");
		}
		if (galleryTempCheck("vr3") == true) {
			unlockScene("vr3");
		}
		if (galleryTempCheck("vr4") == true) {
			unlockScene("vr4");
		}
		alert("Foreign data detected, your gallery progress has been transferred.")
		saveSlot(15);
		loadSlot(15);
	}
}

function generateSave() {
	for (i = 1; i < 9; i++) {
		var searchName = 'data' + i;
		if(localStorage.getItem(searchName)) {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "LOAD";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "DELETE";
			var buttonName = 'save' + i + 'Date';
			var dateName = 'date' + i;
			document.getElementById(buttonName).innerHTML = localStorage.getItem(dateName);
		}
		else {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'save' + i + 'Date';
			document.getElementById(buttonName).innerHTML = "";
		}
	}
}

//Gallery
function unlockScene(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == false) {
				 document.getElementById('output').innerHTML += `<p class = "specialText">You've unlocked a new scene in the gallery!</p>`;
			}
			data.galleryArray[i].unlocked = true
		}
	}
}

function generateGallery(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == true) {
				document.getElementById('output').innerHTML += `
				<p class = "choiceText" onclick="galleryView('` + data.galleryArray[i].index + `')">` + data.galleryArray[i].name + `</p>
				`;
			}
		}
	}
}

function galleryCheck(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}

function galleryTempCheck(n) {
	for (i = 0; i < dataTemp.galleryArray.length; i++) {
		if (dataTemp.galleryArray[i].index.includes(n)) {
			if (dataTemp.galleryArray[i].unlocked == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}

function galleryView(scene) {
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	writeEvent(scene);
	if (data.story.currentScene == "gallery") {
		//writeTransition("gallery", "Go back");
	}
	else {
		//writeTransition("princessGallery", "Go back");
	}
}