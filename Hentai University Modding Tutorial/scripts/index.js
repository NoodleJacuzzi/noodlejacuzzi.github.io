var picturesDisabled = false;
var saveName;
var invHidden = true;
var saveHidden = true;
var selfHidden = true;
var phoneHidden = true;
var imagesDisabled = false;
var requestType = "";
var eventName = "";
var eventCharacter = "";
var tabIndex;
var randNum;
var textStage = 0;
var tempScene;
var data = {
	player: {
		name: "You",
		character: "basic",
		gender: "man",
		title: "Mister",
		honorific: "sir",
		characterArtist: "Art by Ishimura",
		currentScene: "start",
		time: "Morning",
		day: 1,
		money: 30,
		hypnosis: 1,
		hacking: 0,
		counseling: 0,
		lastText: 100,
		dayID: 1,
		version: 4,
		location: "",
		codename: "CODENAME",
	},
	story: [
	],
	gallery: [
	],
	items: [
	],
	bodytypes: [
		{index: "basic", artist: "Art by Ishimura",}
	],
	phoneImages: [
	],
}

var galleryArray = [ //obsolete
]

var itemArray = [];

var logbookArray = [];

//Startup & Systems config
function startup() {
	saveSlot(111);
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data110')) {
		loadSlot(110);
	}
	else{
		loadEvent('system', 'start');
	}
}

function proceed() {
	var goof = document.getElementById('cheatSubmission').value;
	data.player.codename = goof;
	writeEncounter('profile');
}

function disablePictures() {
	document.getElementById("playerImage").style.visibility = "hidden";		
	document.getElementById("playerImage").style.width = "0%";
	document.getElementById("playerImage").style.border = "none";
	imagesDisabled = true;
	sceneTransition(data.player.currentScene);
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(111);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function passTime() {
	switch (data.player.time) {
		case "Morning":
			data.player.time = "Evening";
		break;
		case "Evening":
			data.player.time = "Night";
		break;
		case "Night":
			if (data.player.currentScene == "newDay") {
				data.player.time = "Morning";
			}
		break;
	}
}

function nap() { //Obsolete
	passTime();
	document.getElementById('output').innerHTML = '';
	writeText("You get a lovely nap in.");
	sceneTransition(data.player.currentScene);
}

function loadCharacter(name) {
	for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
		if (data.story[loadIndex].index == name) {
			alert(name+' found already in the data variable, aborting function');
			name = 'failed';
		}
	}
	if (name != 'failed') {
		requestType = "load";
		var filename = "scripts/characters/"+name+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function loadShop() {
	console.log('now importing shop data from character js files');
	itemArray = [];
	var targetFile = 'system';
	requestType = "shop";
	var filename = "scripts/characters/"+targetFile+".js";
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	console.log(targetFile+ ' import successful');
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
	for (i = 0; i < data.story.length; i++) {
		console.log('test');
		targetFile = data.story[i].index;
		var filename = "scripts/characters/"+targetFile+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		console.log(targetFile+ ' import successful');
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideInv();
	hideSave();
	hideSelf();
	hidePhone();
	//console.log("hideStuff end");
}

function invButton() {
	if (invHidden == true) {
		showInv();
	}
	else {
		hideInv();
	}
}

function hideInv() {
	invHidden = true;
	document.getElementById("inventory").style.visibility = "hidden";	
}

function showInv() {
	hideStuff();
	generateInv();
	invHidden = false;
	document.getElementById("inventory").style.visibility = "visible"; 
}

function saveButton() {
	if (saveHidden == true) {
		showSave();
	}
	else {
		hideSave();
	}
}

function hideSave() {
	saveHidden = true;
	document.getElementById("save").style.visibility = "hidden"; 
}

function showSave() {
	hideStuff();
	generateSave();
	saveHidden = false;
	document.getElementById("save").style.visibility = "visible"; 
}

function selfButton() {
	if (selfHidden == true) {
		showSelf();
	}
	else {
		hideSelf();
	}
}

function hideSelf() {
	selfHidden = true;
	document.getElementById("self").style.visibility = "hidden";	
}

function showSelf() {
	hideStuff();
	selfHidden = false;
	document.getElementById("self").style.visibility = "visible"; 
	generateNav();
}

function phoneButton() {
	document.getElementById('phoneButton').innerHTML = "PHONE";
	document.getElementById('phoneButtonMobile').innerHTML = "PHONE";
	if (phoneHidden == true) {
		showPhone();
	}
	else {
		hidePhone();
	}
}

function hidePhone() {
	phoneHidden = true;
	document.getElementById("phone").style.visibility = "hidden";	
	document.getElementById('phoneRight').innerHTML = '';
}

function showPhone() {
	hideStuff();
	phoneHidden = false;
	document.getElementById("phone").style.visibility = "visible"; 
	generateContacts();
}

function listTextbooks() {
		document.getElementById('output').innerHTML = '';
	if (checkItem("Hypnosis Textbook") == false && checkItem("Hacking Textbook") == false && checkItem("Counseling Textbook") == false) {
		writeText("<p class='centeredText'>You don't have any textbooks to read.<span>");
	}
	if (checkItem("Hypnosis Textbook") == true) {
		writeFunction("textbook('hypnosis')", "Read your hypnosis textbook");
	}
	if (checkItem("Hacking Textbook") == true) {
		writeFunction("textbook('hacking')", "Read your hacking textbook");
	}
	if (checkItem("Counseling Textbook") == true) {
		writeFunction("textbook('counseling')", "Read your counseling textbook");
	}
	writeFunction("changeLocation(data.player.location)", "Go back");
}

function textbook(n) {
		document.getElementById('output').innerHTML = '';
	switch (n) {
		case "hypnosis":
			data.player.hypnosis += 1;
			removeItem("Hypnosis Textbook");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, which is probably appropriate. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hypnosis has improved!");
		break;
		case "hacking":
			data.player.hacking += 1;
			removeItem("Hacking Textbook");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, but still interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hacking has improved!");
		break;
		case "counseling":
			data.player.counseling += 1;
			removeItem("Counseling Textbook");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, but the pictures are interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in counseling has improved!");
		break;
	}
	writeFunction("changeLocation(data.player.location)", "Finish");
}

function raiseTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('raising the trust of '+name+' by '+n);
			data.story[trustIndex].trust += n;
		}
	}
}

function setTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('setting the trust of '+name+' to '+n);
			data.story[trustIndex].trust = n;
		}
	}
}

function checkTrust(name) {
	for (y = 0; y < data.story.length; y++) {
		if (data.story[y].index == name) {
			return data.story[y].trust;
		}
	}
}

function fName(name) {
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		if (data.story[characterIndex].index == name) {
			return data.story[characterIndex].fName;
		}
	}
}

function lName(name) {
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		if (data.story[characterIndex].index == name) {
			return data.story[characterIndex].lName;
		}
	}
}

//Scene creation
function writeSpeech (name, img, text) {
	var cssName = name;
	var cssColor = "#CCCCCC";
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	if (name == "player") {
		img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		name = data.player.name;
		cssColor = "#86b4dc";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName + ' ' + data.story[i].lName;
			cssColor = data.story[i].color;
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class="textBox" style="border-color: `+cssColor+`">
		<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "
			`+ img +`
		">
		<div class="textBoxContent">
		<p class = "textName" style="color:`+cssColor+`">`+ name + `</p>
		<p>` + replaceCodenames(text) + `</p>
	</div>
	<br>
	`;
}

function writeTab (name, img, scene, text) {
	tabIndex;
	var tabTrust;
	var cssName = name;
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			tabIndex = i;
			name = data.story[i].fName + ' ' + data.story[i].lName;
		}
	}
	if (data.story[tabIndex].trust == 0) {
		name = "???";
	}
	switch (true) {
		case (data.story[tabIndex].trust > 99): {
			tabTrust = "<span class='love'>Love</span>";
			break;
		}
		case (data.story[tabIndex].trust > 79): {
			tabTrust = "<span class='trusting'>Trusting</span>";
			break;
		}
		case (data.story[tabIndex].trust > 59): {
			tabTrust = "<span class='friendly'>Friendly</span>";
			break;
		}
		case (data.story[tabIndex].trust > 39): {
			tabTrust = "<span class='relaxed'>Relaxed</span></span>";
			break;
		}
		case (data.story[tabIndex].trust > 19): {
			tabTrust = "<span class='wary'>Wary</span>";
			break;
		}
		default: {
			tabTrust = "<span class='unkown'>Unknown";
			break;
		}
	}
	console.log(tabIndex);
	console.log("Now generating tab for " + name + ", linking to scene " + scene + " with the text " + text);
	document.getElementById('output').innerHTML +=`
	<div class = "textBox char_`+cssName+`">
		<img class = "textThumb" src = "`+ img +`">
		<div class="textBoxContent">
		<p class = "textName">` + name + `</p>
		<p class="status"> Status: ` + tabTrust + `</p>
		<p class="switch" onclick="writeEncounter('`+data.story[tabIndex].index+`', '`+scene+`')">` + text + `</p>
	</div>	</div>
	<br>
	`;
}

function writeBig (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `" title="` + cap + `">
		<br>
	`;
	}
}

function writeMed (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `" title="` + cap + `">
		<br>
	`;
	}
}

function writeBG (scene) { //obsolete
	var bg = "images/locations/" + scene + data.player.time + ".jpg";
	console.log("hi1");
	if (imagesDisabled != true) {
		console.log("hi");
	document.getElementById('output').innerHTML += `
		<img class="backgroundPicture" src="` + bg + `">
		<br>
	`;
	document.getElementById('output').style.backgroundImage = "url("+bg+")";
	}
	checkForEvents();
}

function writeButton(name, func, top, left) {
	if (imagesDisabled == true) {
		writeFunction(func, name);
	}
	else {
		console.log(name + '' + func);
		document.getElementsByClassName('playerRoom')[0].innerHTML += `
			<div class="pictureButton" onclick='`+func+`'
			style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+name+`</div>
		`;
	}
}

function writeTransition (name, scene) { //obsolete
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
		<p class = "specialText">` + replaceCodenames(text) + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + replaceCodenames(text) + `</p>
	`;
}

function replaceCodenames(text) {
	text = text.replace('CODENAME', data.player.codename);
	text = text.replace('CODENAME', data.player.codename);
	text = text.replace('CODENAME', data.player.codename);
	return text;
}
	
function sceneTransition(scene) { //obsolete
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(110);
	console.log("scene transition end");
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEncounter('porn`+pornID+`A')" src="images/porn/` + pornID + `A.jpg">
			<br>
		`;
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEncounter('porn`+pornID+`B')" src="images/porn/` + pornID + `B.jpg">
			<br>
		`;
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEncounter('porn`+pornID+`C')" src="images/porn/` + pornID + `C.jpg">
			<br>
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

function loadEncounter(js, name) {
	var targetFile = 'system';
	requestType = 'encounter';
	eventName = name;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == js) {
			data.story[i].encountered = true;
			targetFile = data.story[i].index;
		}
	}
	var filename = "scripts/characters/"+targetFile+".js";
	console.log('Attempting to load '+targetFile+'.js for scene ID '+name);
	//Create slot for new scripts file
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	//console.log(fileref);
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	//console.log(document.getElementsByTagName("head")[0].children);
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
}

function loadEvent(js, name) {
	var targetFile = 'system';
	requestType = 'event';
	eventName = name;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == js) {
			targetFile = data.story[i].index;
		}
	}
	var filename = "scripts/characters/"+targetFile+".js";
	console.log('Attempting to load '+targetFile+'.js for scene ID '+name);
	//Create slot for new scripts file
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	//console.log(fileref);
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	//console.log(document.getElementsByTagName("head")[0].children);
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
}

function loadPhoneEvent(js, name) {
	var targetFile = 'system';
	requestType = 'phoneEvent';
	eventName = name;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == js) {
			targetFile = data.story[i].index;
		}
	}
	var filename = "scripts/characters/"+targetFile+".js";
	console.log('Attempting to load '+targetFile+'.js for scene ID '+name);
	//Create slot for new scripts file
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	//console.log(fileref);
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	//console.log(document.getElementsByTagName("head")[0].children);
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
}

function checkForEncounters() {
	var targetFile = 'system';
	requestType = 'check';
	var filename = "scripts/characters/"+targetFile+".js";
	console.log('Attempting to load '+targetFile+'.js to check for encounters');
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
	for (x = 0; x < data.story.length; x++) {
		targetFile = data.story[x].index;
		var filename = "scripts/characters/"+targetFile+".js";
		console.log('Attempting to load '+targetFile+'.js to check for encounters');
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function encounteredCheck(name) {
	for (e = 0; e < data.story.length; e++) {
		if (data.story[e].index == name) {
			if (data.story[e].encountered == true) {
				return true;
				break;
			}
			else {
				return false;
			}
		}
	}
}

function printEncounterButton(character, scene, text, top, left) {
	document.getElementsByClassName('playerRoom')[0].innerHTML += `
		<div class="pictureButton" onclick='loadEncounter("`+character+`", "`+scene+`")'
		style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+text+`</div>
	`;
}

function printEncounterTab(name, scene, text) {
	if (character != "system") {
		var tabTrust;
		var cancelTab = false;
		var cssName = name;
		var img = "scripts/gamefiles/profiles/"+name+".jpg";
		for (z = 0; z < data.story.length; z++) {
			if (data.story[z].index == name) {
				tabIndex = z;
				if (text.includes(name)) {
					text = text.replace(name, data.story[z].fName);
				}
				name = data.story[z].fName + ' ' + data.story[z].lName;
				var cssColor = data.story[z].color;
				if (data.story[z].encounter == true) {
					cancelTab = true;
				}
			}
		}
		if (data.story[tabIndex].trust == 0) {
			name = "???";
		}
		switch (true) {
			case (data.story[tabIndex].trust > 99): {
				tabTrust = "<span class='love'>Love</span>";
				break;
			}
			case (data.story[tabIndex].trust > 79): {
				tabTrust = "<span class='trusting'>Trusting</span>";
				break;
			}
			case (data.story[tabIndex].trust > 59): {
				tabTrust = "<span class='friendly'>Friendly</span>";
				break;
			}
			case (data.story[tabIndex].trust > 39): {
				tabTrust = "<span class='relaxed'>Relaxed</span></span>";
				break;
			}
			case (data.story[tabIndex].trust > 19): {
				tabTrust = "<span class='wary'>Wary</span>";
				break;
			}
			default: {
				tabTrust = "<span class='unkown'>Unknown";
				break;
			}
		}
		//console.log(tabIndex);
		console.log(cssColor);
		if (cancelTab != true) {
			console.log("Now generating tab for " + name + ", linking to scene " + scene + " with the text " + text);
			document.getElementById('output').innerHTML +=`
			<div class = "textBox" style="border-color: `+cssColor+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "`+ img +`">
				<div class="textBoxContent">
				<p class = "textName" style="color:`+cssColor+`">` + name + `</p>
				<p class="status"> Status: ` + tabTrust + `</p>
				<p class="switch" onclick="loadEncounter('`+data.story[tabIndex].index+`', '`+scene+`')">` + text + `</p>
			</div>	</div>
			<br>
			`;
		}
	}
}

//Menu
function updateMenu() {
	//document.getElementById('playerName').innerHTML = data.player.name;
	//document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	//document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	//document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
	//document.getElementById('playerImage').title = data.player.characterArtist;
	if (data.player.hypnosis == 0) {
		//document.getElementById('playerHypnosis').innerHTML = "";
	}
	else {
		//document.getElementById('playerHypnosis').innerHTML = "Hypnosis: " + data.player.hypnosis;
	}
	if (data.player.counseling == 0) {
		//document.getElementById('playerCounseling').innerHTML = "";
	}
	else {
		//document.getElementById('playerCounseling').innerHTML = "Counseling: " + data.player.counseling;
	}
	if (data.player.hacking == 0) {
		//document.getElementById('playerHacking').innerHTML = "";
	}
	else {
		//document.getElementById('playerHacking').innerHTML = "Hacking: " + data.player.hacking;
	}
}

function changeName() {
	data.player.name = document.getElementById('nameSubmission').value;
	updateMenu();
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	sceneTransition("playerHouse");
}

function renamePlayer() {
	data.player.name = document.getElementById('nameSubmission').value;
	loadEncounter("system", "prologue2");
}

//Saving
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	generateSave();
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
	if (data.player.location != "") {
		changeLocation(data.player.location);
	}
	else {
		loadEncounter('system', 'start');
	}
	//sceneTransition(data.player.currentScene);
	updateSave();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeFunction("changeLocation(data.player.location)", "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(110);
	loadSlot(110);
	if (data.player.name == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(111);
	}
	else {
		saveSlot(110);
		loadSlot(110);
	}
	updateSave();
}

function generateSave() {
	for (i = 101; i < 109; i++) {
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

function updateSave() {
	if (data.player.version == undefined) {
		console.log('version 1 detected, updating save');
		data.player.version = 2;
		data.story[5] = {index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "",};
		data.story[6] = {index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "",};
		data.story[7] = {index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "",};
		data.story[8] = {index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "",};
		data.story[9] = {index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "",};
		data.story[10] = {index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "",};
		data.story[11] = {index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",};
		data.story[12] = {index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",};
	}
	if (data.player.version == 2) {
		console.log('version 2 detected, updating save');
		data.player.version = 3;
		data.player.title = "man";
		data.player.title = "Mister";
		data.player.honorific = "sir";
	}
	if (data.player.version == 3) {
		console.log('version 2.5 detected, updating save');
		data.player.version = 4;
		alert('older save version detected! Moving you to back to your house. Feel free to restart if needed.');
		data.player.location = 'playerHouse';
		data.story[0].color = "#CCCCCC";
		data.story[1].color = "#fde1a5";
		data.story[2].color = "#a79e9a";
		data.story[3].color = "#cb86ef";
		data.story[4].color = "#da924b";
		data.story[5].color = "#CCCCCC";
		data.story[6].color = "#ed9082";
		data.story[7].color = "#7e52a3";
		data.story[8].color = "#e47311";
		data.story[9].color = "#888888";
		data.story[10].color = "#da924b";
		data.story[11].color = "#954655";
		data.story[12].color = "#677b4c";
	}
	saveSlot(110);
}

//Gallery
function unlockScene(n) {
	//Obsolete function
}

function generateGalleryNav() {
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].trust > 0) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGalleryPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
				<div class="textBoxContent">
				<span class = "choiceText" onclick="generateGalleryPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div></div>
			<br>
			`;
		}
	}
}

function generateGalleryPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("images/"+n+"/profile.jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			if (galleryCheck(data.gallery[i].index) == true) {
				writeFunction("loadEvent('"+n+"','"+data.gallery[i].index+"')", data.gallery[i].name)
			}
		}
	}
	writeFunction("changeLocation('playerHouse')", "Go back");
}

function galleryCheck(n) {
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			return true;
		}
	}
}

//Logbook
function generateNav() {
	document.getElementById('logbookLeft').innerHTML = '';
	requestType = "logbook";
	logbookArray = [];
	for (i = 0; i < data.story.length; i++) {
		targetFile = data.story[i].index;
		var filename = "scripts/characters/"+targetFile+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		console.log(targetFile+ ' import successful');
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].trust > 0) {
			document.getElementById('logbookLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('`+data.story[i].index+`')">` + data.story[i].fName + `</h3>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		var scenesUnlocked = 0;
		var scenesTotal = 0;
		for (logbookIndex = 0; logbookIndex < logbookArray.length; logbookIndex++) {
			if (logbookArray[logbookIndex].index == n) {
				var logCounter = logbookIndex
			}
		}
		for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
			if (data.story[characterIndex].index == n) {
				var characterCounter = characterIndex
			}
		}
		console.log("searching for " + n + " in gallery");
		for (x = 0; x < galleryArray.length; x++) {
			console.log(galleryArray[x].index);
			if (galleryArray[x].index.includes(n)) {
				console.log("Index does include " + n);
				scenesTotal += 1;
				if (galleryCheck(galleryArray[x].index) == true) {
					scenesUnlocked += 1;
				}
			}
		}
		console.log("Displaying logbook page for character "+data.story[characterCounter].fName+".");
		var tabTrust;
		switch (true) {
			case (data.story[characterCounter].trust > 99): {
				tabTrust = "Devoted";
				break;
			}
			case (data.story[characterCounter].trust > 79): {
				tabTrust = "Trusting";
				break;
			}
			case (data.story[characterCounter].trust > 59): {
				tabTrust = "Friendly";
				break;
			}
			case (data.story[characterCounter].trust > 39): {
				tabTrust = "Relaxed";
				break;
			}
			case (data.story[characterCounter].trust > 19): {
				tabTrust = "Wary";
				break;
			}
			default: {
				tabTrust = "Unknown";
				break;
			}
		}
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="images/`+data.story[characterCounter].index+`/profile.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc" style = "color: `+data.story[characterCounter].color+`">`+data.story[characterCounter].fName+` `+data.story[characterCounter].lName+`</h2>
			<p class = "selfDesc lb_trust ">Trust: <span class="`+tabTrust+`">`+tabTrust+`</p></span>
			<p class = "selfDesc lb_scenes">Scenes Unlocked: `+scenesUnlocked+`/`+scenesTotal+`</p>
		</div><div class=" lb_secondary">
			<p class = "selfDesc lb_desc">`+logbookArray[logCounter].desc+`</p>
			<p class = "selfDesc lb_body">`+logbookArray[logCounter].body+`</p>
			<p class = "selfDesc lb_clothes">`+logbookArray[logCounter].clothes+`</p>
			<p class = "selfDesc lb_home">`+logbookArray[logCounter].home+`</p>
			<p class = "selfDesc lb_tags">`+logbookArray[logCounter].tags+`</p>
			<p class = "selfDesc">   </p>
		</div>
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<h2 class = "selfDesc lb_Name char_player">`+data.player.name+`</h2>
			<p class = "selfDesc">Day: `+data.player.day+`</p>
			<p class = "selfDesc">Time: `+data.player.time+`</p>
			<p class = "selfDesc">Money: $`+data.player.money+`</p>
			<p class = "selfDesc">Skills: </p>
		`;
		if (data.player.hypnosis > 0) {
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">Hypnosis: `+data.player.hypnosis+`</p>
			`;
		}
		if (data.player.hacking > 0) {
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">Hacking: `+data.player.hacking+`</p>
			`;
		}
		if (data.player.counseling > 0) {
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">Conseling: `+data.player.counseling+`</p>
			`;
		}
	}
}

function generateLogbookGallery(n) {
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(n)) {
			if (galleryCheck(galleryArray[i].index) == true) {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</p>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + galleryArray[i].name + '<br>' + galleryArray[i].hint + '</p>';
				break;
			}
		}
	}
}

//Inventory & shopping
function generateInv() {
	clearInv();
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].key == false) {
			document.getElementById('windowLeft').innerHTML += `
			<div class = "item">
				<p class = "itemName">`+data.items[i].name+`</p>
				<img class ="itemImage" src="`+data.items[i].image+`">
			<div>
			`;
		}
		else {
			document.getElementById('windowRight').innerHTML += `
			<div class = "item">
				<p class = "itemName">`+data.items[i].name+`</p>
				<img class ="itemImage" src="`+data.items[i].image+`">
			</div>
			`;
		}
	}
}

function clearInv() {
	document.getElementById('windowLeft').innerHTML = ""
	document.getElementById('windowRight').innerHTML = ""
}

function generateShop() { //obsolete
	console.log("Now generating shop");
	for (i = 0; i < itemArray.length; i++) {
		console.log("generating item "+ i + ": " + itemArray[i].name);
		if (itemArray[i].price != 0) {
			if (itemArray[i].key == false) {
				document.getElementById('output').innerHTML += `
					<div class = "shopItem" onclick = "purchase(`+i+`)">
						<p class = "shopName">`+itemArray[i].name+`</p>
						<p class = "shopDesc">`+itemArray[i].description+`</p>
						<p class = "shopPrice">$`+itemArray[i].price+`</p>
						<img class ="shopImage" src="`+itemArray[i].image+`">
					</div>
					<br>
				`;
			}
			else {
				if (checkItem(itemArray[i].name) == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase(`+i+`)">
							<p class = "shopName">`+itemArray[i].name+`</p>
							<p class = "shopDesc">`+itemArray[i].description+`</p>
							<p class = "shopPrice">$`+itemArray[i].price+`</p>
							<img class ="shopImage" src="`+itemArray[i].image+`">
						</div>
					<br>
					`;
				}
			}
		}
	}
	if (data.player.time == "Night") {
		document.getElementById('output').innerHTML = '';
		writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
		writeTransition("playerHouse", "Head home");
	}
}

function purchase(name, image, price, key) {
	console.log("purchasing " + name);
	if (data.player.money >= price) {
		data.player.money -= price;
		flashMoney();
		updateMenu();
		var purchasedItem = {name: name, key: key, price: price, image: image};
		console.log(purchasedItem);
		data.items.push(purchasedItem);
	}
	loadEncounter("system", "shop");
}

function checkItem(n) {
	console.log("Checking for item ID " + n);
	for (x = 0; x < data.items.length; x++) {
		if (data.items[x].name.includes(n)) {
			console.log("Item id " + data.items[0].name + " is owned");
			return true;
			break;
		}
	}
	return false;
}

function removeItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			data.items.splice(i, 1);
			break;
		}
	}
}

function addItem(name, key, image) {
	var purchasedItem = {name: name, key: key, image: image};
	console.log(purchasedItem);
	data.items.push(purchasedItem);
}

//Cheating
function cheat() {
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	console.log("Testing cheat code " + goof);
	loadEncounter('system', 'cheat');
	switch (goof) {
		case "human alteration app": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub"};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "haa": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub", artist: "Art by Aya",};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "princess quest": {
			if (checkBody("sub") != true) {
				var goof = {index: "elizabeth", artist: "Art by Neromashin",};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "rainy dayz": {
			if (checkBody("sub") != true) {
				var goof = {index: "jill", artist: "Unknown artist",};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "thomas": {
			data.player.gender = "man";
			data.player.title = "Mister";
			data.player.honorific = "sir";
			if (checkBody("basic") != true) {
				var goof = {index: "basic", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			for (i = 0; i < data.bodytypes.length; i++) {
				if (data.bodytypes[i].index.includes('basic')) {
					changeBody(i);
					break;
				}
			}
			loadEncounter('system', 'prologue');
			break;
		}
		case "tomara": {
			data.player.gender = "woman";
			data.player.title = "Miss";
			data.player.honorific = "ma'am";
			if (checkBody("basil") != true) {
				var goof = {index: "basil", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			for (i = 0; i < data.bodytypes.length; i++) {
				if (data.bodytypes[i].index.includes('basil')) {
					changeBody(i);
					break;
				}
			}
			loadEncounter('system', 'prologue');
			break;
		}
		case "new name": {
			loadEncounter('system', 'renamingRoom');
			break;
		}
	}
	if (goof == "null") {
		writeText("You've already used this code before.");
	}
}

function modCharacter() {
	var goof = document.getElementById('indexSubmission').value;
	goof = goof.toLowerCase();
	console.log("Loading character " + goof);
	loadCharacter(goof);
	document.getElementById('output').innerHTML = '';
	writeBig("images/"+goof+"/profile.jpg", "New character");
	writeText("Loaded the index file, has been added to the game! If the above image is broken, one of the following has happened:");
	writeText("The character you added does not have a profile.jpg image in their images folder.");
	writeText("The images folder isn't named appropriately, or is in the wrong place. It should be in Hentai University/images");
	writeText("You mistyped the index. If this is the case, load an older save immediately and try again.");
	if (data.player.location == "") {
		writeFunction("writeEncounter('system', 'start')", "Back to the start menu");
	}
	else {
		writeFunction("loadEncounter('system', 'gameConsole')", "Back to the console");
	}
}

function writeWardrobe() {
	if (checkItem("Lady") == true) {
		if (checkBody("lady") == false) {
			var goof = {index: "lady", artist: "Art by Nusumenaihxseki",};
			data.bodytypes.push(goof);
		}
	}
	for (i = 0; i < data.bodytypes.length; i++) {
		writeMed("scripts/gamefiles/characters/"+data.bodytypes[i].index+".jpg", data.bodytypes[i].artist);
		writeFunction("changeBody('"+i+"')", data.bodytypes[i].index);
	}
}

function checkBody(n) {
	console.log("Now checking for bodytype " + n);
	for (i = 0; i < data.bodytypes.length; i++) {
		if (data.bodytypes[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function changeBody(n) {
	data.player.character = data.bodytypes[n].index;
	data.player.characterArtist = data.bodytypes[n].artist;
	updateMenu();
}

//Phone

function checkForPhone() { 
	requestType = "phoneCheck";
	for (i = 0; i < data.story.length; i++) {
		targetFile = data.story[i].index;
		var filename = "scripts/characters/"+targetFile+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		console.log(targetFile+ ' import successful');
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function notification(name) {
	writeText("Bzzt! You got a text from "+fName(name)+"!");
	document.getElementById('phoneButton').innerHTML = "PHONE(*)";
	document.getElementById('phoneButtonMobile').innerHTML = "PHONE(*)";
}

function writePhoneSpeech (name, img, text) {
	var cssName;
	if (img == "") {
		img = name;
	}
	if (name == "player") {
		img = data.player.character;
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName + ' ' + data.story[i].lName
			cssName = data.story[i].index;
		}
	}
	document.getElementById('phoneRight').innerHTML +=`
	<div class = "phoneTextBox">
		<img class = "phoneTextThumb" src = "
			scripts/gamefiles/profiles/`+ img +`.jpg
		">
		<div class="phoneTextBoxContent">
		<p class = "phoneTextName">`+ name + `</p>
		<p class = "selfDesc">` + replaceCodenames(text) + `</p>
	</div></div>
	<br>
	`
}

function writePhoneImage (img, cap) {
	console.log("writing phone image "+cap);
	if (imagesDisabled != true) {
		document.getElementById('phoneRight').innerHTML += `
			<img class="phonePicture" src="` + img + `" title="` + cap + `">
			<br>
		`;
	}
	var savedImage = {name: cap, src: img,};
	if (checkPhoneImages(cap) == false) {
		data.phoneImages.push(savedImage);
		console.log("Unlocked image "+savedImage.name);
	}
}

function writePhoneChoices (text1, text2, text3) {
	if (textStage == 0) {
		var choiceList = `
				<div id = "phoneChoice">
				<p class="choiceText" onclick="phoneChoice('A')">
					` + text1 + `
				</p>
				<p class="choiceText" onclick="phoneChoice('B')">
					` + text2 + `
				</p>
		`;
		if (typeof text3 != 'undefined') {
			choiceList += `
				<p class="choiceText" onclick="phoneChoice('C')">
					` + text3 + `
				</p>
		`;
		}
		choiceList += `
			</div>
		`;
		document.getElementById('phoneRight').innerHTML += choiceList;
	}
}

function generateContacts() {
	console.log("contacts generated");
	data.player.lastText = 100;
	document.getElementById('phoneLeft').innerHTML = ``;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].textEvent!= "") {
			document.getElementById('phoneLeft').innerHTML += `<h3 class = "button char_` + data.story[i].index + `" style = "color: `+data.story[i].color+`" onclick = "switchContact('`+i+`')">` + data.story[i].fName + `</h3 >`;
			data.player.lastText = i;
		}
	}
	if (data.player.lastText != 100) {
		switchContact(data.player.lastText);
	}
	else {
		document.getElementById('phoneWindow').innerHTML = "PHONE";
	}
	if (imagesDisabled != true) {
		document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "phoneImages()">Saved Images</p>`;
	}
}

function switchContact(n) {
	phoneRight.scrollTop = 0;
	console.log("contact switched");
	document.getElementById('phoneRight').innerHTML = '';
	document.getElementById('phoneWindow').innerHTML = data.story[n].fName;
	data.player.lastText = n;
	loadPhoneEvent(data.story[data.player.lastText].index, data.story[data.player.lastText].textEvent);
}

function phoneImages() {
	phoneRight.scrollTop = 0;
	data.phoneImages.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
	console.log("viewing phone images");
	document.getElementById('phoneWindow').innerHTML = "SAVED IMAGES";
	document.getElementById('phoneRight').innerHTML = '';
	for (i = 0; i < data.phoneImages.length; i++) {
		writePhoneImage(data.phoneImages[i].src, data.phoneImages[i].name);
		document.getElementById('phoneRight').innerHTML += '<p class="choiceText" onclick="deleteImage('+i+')">DELETE</p>';
	}
}

function checkPhoneImages(n) {
	console.log("checking phone images for "+n);
	for (i = 0; i < data.phoneImages.length; i++) {
		if (data.phoneImages[i].name.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function deleteImage(n) {
	data.phoneImages.splice(n, 1);
	phoneImages();
}

function phoneChoice(n) {
	document.getElementById('phoneRight').innerHTML = '';
	data.story[data.player.lastText].textEvent += n;
	writePhoneEvent(data.story[data.player.lastText].textEvent);
}
