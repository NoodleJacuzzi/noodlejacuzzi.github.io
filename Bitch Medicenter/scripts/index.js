var picturesDisabled = false;
var saveName;
var saveHidden = true;
var selfHidden = true;
var imagesDisabled = false;
var randNum;
var tempScene;
var blockGame = false;
var caseStage = 0;
var target = 231;
var data = {
	player: {
		version: 0,
		currentScene: "start",
	},
	gallery: [
	],
}

var galleryArray = [
{index: "wifeA", name: "Wife Treatment Plan A - Hypnosis",},
]

var characterArray = [
	{index: "wife", fName: "Adrianna", lName: "Chechik", 
	desc: "Subject is a housewife of middle age who suffers from a near nonexistent libido, which has caused a great deal of marital stress.",},
	{index: "jock", fName: "Derrick", lName: "Pierce", 
	desc: "Subject states that he finds it difficult to become aroused when bedding women, citing a heavy reliance on viagra and other drugs. He claims it is a biological issue, but several in-depth screenings show signs of heavily repressed masochistic and homosexual leanings.",},
	{index: "milf", fName: "Lisa", lName: "Anne", 
	desc: "Subject's son is being bullied by schoolmates. Subject was not aware that this is a sexual satisfaction improvement services, and was under the impression, although she would not refer to her son as such, that this was a hospital for 'little bitches'.",},
	{index: "nagger", fName: "Dakota", lName: "Skye", 
	desc: "Subject is struggling to enjoy sexual relations without finding a healthy outlet for her dominant desires. While the subject's boyfriend is open to such play, she finds herself unable to engage properly.",},
	{index: "girlfriend", fName: "Girlfriend", lName: "???", 
	desc: "Subject is a housewife of middle age who suffers from a near nonexistent libido, which has caused a great deal of marital stress.",},
	{index: "shemale", fName: "Shemale", lName: "???", 
	desc: "Subject suffers from severe anxiety over her nature as trans, preventing her from forming meaningful connections over a perceived fear of others becoming aware of her body.",},
	{index: "camwhore", fName: "Camwhore", lName: "???", 
	desc: "Subject seeks an alternate career path based on her attractive body and seeks a referral or guidance on the matter. Subject leans towards becoming a 'camwhore' when pressed.",},
	{index: "schoolboy", fName: "Student", lName: "???", 
	desc: "Subject suffers from a hyperactive bladder and seeks medical assistance overcoming self-esteem issues as a result.",},
	{index: "otherkin", fName: "Otherkin", lName: "???", 
	desc: "Subject believes that on a spiritual level she is a horse, the four legged mammal. She seeks medical assistance here as no other clinic will offer treatment, and is willing to sign away her rights as a human.",},
];

var artifactArray = [
	{index: "bracelet", dark: false, equipable: false, title: "Reprehensive Bracelet", desc: "A partially tarnished silver bracelet.", desc2: "When worn, the wearer can become imperceivable and erase memories of themselves & their actions."},
];

//Startup & Systems config
function startup() {
	saveSlot(181);
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data180')) {
		loadSlot(180);
		console.log('startup load successful. Now loading autosave at position ' + data.player.currentScene);
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
	document.getElementById('picturesDisabled').innerHTML = `Gifs and some pictures disabled, refresh to restore`;
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(181);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function systemSettings() {
	document.getElementById('output').innerHTML = '';
	writeFunction("loadFile()", "Import gallery progress");
	writeFunction("saveFile()", "Export gallery progress");
	writeFunction("restartButton()", "Delete gallery progress");
	writeFunction("disablePictures()", "<span id = 'picturesDisabled'>Disable images<span>");
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter%20Mobile.html'">
			Play the mobile version
		</p>
	`;
	writeTransition("start", "Back to start");
}

//Blocks

//Layers

function layers(master, scene) {
	
}

//Triad

function triad(master, scene) {
	
}

//FourFour

function fourfour(master, scene) {
	
}

//Scene creation
function writeSpeech (name, img, text) {
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	if (name == "player") {
		name = data.player.fName;
		img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
	}
	for (i = 0; i < characterArray.length; i++) {
		if (characterArray[i].index == name) {
			name = characterArray[i].fName;
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			`+ img +`
		">
		<p class = "textName">`+ name + `</p>
		<p>` + text + `</p>
	</div>
	<br>
	`;
}

function writeBig (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeMed (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `">
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

function writeFunction (name, func) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `">
			` + func + `
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

function writeCase (name) {
	for (i = 0; i < characterArray.length; i++) {
		if (characterArray[i].index == name) {
			character = characterArray[i];
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			scripts/gamefiles/profiles/`+ character.index +`.jpg
		">
		<p class = "textName">`+ character.fName + `</p>
		<p class = "switch" onclick='sceneTransition("`+character.index+`File")'>Review treatment plans</p>
		<p>` + character.desc + `</p>
	</div>
	<br>
	`;
}
	
function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(180);
	console.log("scene transition end");
}

//Saving
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	sceneTransition(data.player.currentScene);
}

function saveFile(){
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	if (data != null) {
		saveSlot(180);
		loadSlot(180);
	}
	if (data.player.version == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(181);
	}
	else {
		saveSlot(180);
		loadSlot(180);
	}
}

//Gallery
function unlockScene(n) {
	var unlockedScene = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == n) {
			unlockedScene = galleryArray[i];
		}
	}
	if (unlockedScene != "") {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Unlocking error, no scene named "+n+" found.");
	}
}

function galleryCheck(n) {
	for (x = 0; x < data.gallery.length; x++) {
		if (data.gallery[x].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

//Cheating
function cheat() {
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "swallows999": {
			if (checkBody("swallows") != true) {
				var goof = {index: "swallows", name: "Anomaly Vault's Sponsor",};
				data.bodytypes.push(goof);
				var target = data.bodytypes.length - 1;
				changeBody(target);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "new name": {
			data.player.currentScene = "renamingRoom";
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	if (goof == "null") {
		writeText("You've already used this code before.");
	}
	else {
		writeText("Code accepted!");
	}
}