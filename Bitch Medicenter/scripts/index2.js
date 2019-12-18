//Establish variables
var saveName;
var invHidden = true;
var imagesDisabled = false;
var footerVisibility = "";
var footerHeight = "";	
var footerOverflow = "";	
var tempScene;
var blockGame = false;
var caseStage = 0;
var target = 231;

var data = {
	player: {
		version: 0,
		currentScene: "start",
		fName: "You",
		lName: "",
		swipeStrength: 50,
		image: "basic",
	},
	characters: [
		{index: "assistant", fName: "???", lName: "???", },
		{index: "wife", fName: "Adrianna", lName: "Chechik", },
		{index: "jock", fName: "Derrick", lName: "Pierce", },
		{index: "milf", fName: "Lisa", lName: "Anne",},
		{index: "nagger", fName: "???", lName: "Skye",},
		{index: "girlfriend", fName: "???", lName: "???",},
		{index: "shemale", fName: "???", lName: "???", },
		{index: "camwhore", fName: "???", lName: "???", },
		{index: "schoolboy", fName: "???", lName: "???", },
		{index: "otherkin", fName: "???", lName: "???", },
	],
	gallery: [
	],
}

var galleryArray = [
	{index: "wifeA", name: "Wife Treatment Plan A - Modification",},
	{index: "girlfriendA", name: "Girlfriend Treatment Plan A - Modification",},
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
	{index: "girlfriend", fName: "Kylie", lName: "Quinn", 
	desc: "Subject is struggling to enjoy sexual relations without finding a healthy outlet for her dominant desires. While the subject's boyfriend is open to such play, she finds herself unable to engage properly.",},
	{index: "girlfriendPost", fName: "Kylie", lName: "Quinn", 
	desc: "Subject is a housewife of middle age who suffers from a near nonexistent libido, which has caused a great deal of marital stress.",},
	{index: "boyfriend", fName: "Michael", lName: "Vegas", 
	desc: "Subject is a housewife of middle age who suffers from a near nonexistent libido, which has caused a great deal of marital stress.",},
	{index: "boyfriendPost", fName: "Michelle", lName: "Vegas", 
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

//Startup & Systems config
function startup() {
	saveSlot(181);
	footerVisibility = document.getElementById("footer").style.visibility;
	footerHeight = document.getElementById("footer").style.height;	
	footerOverflow = document.getElementById("footer").style.overflow;	
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	if(localStorage.getItem('data180')) {
		loadSlot(180);
	}
	else{
		sceneTransition('start');
	}
	if (data.player.version == 0) {
		data.player.swipeStrength = 50;
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(181);
	}
}

function disablePictures() {
	if (imagesDisabled == false) {
		imagesDisabled = true;
		sceneTransition(data.player.currentScene);
	}
	else {
		location.reload();
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
		text = text.replace('playerF', data.player.name);
	}
	if (data.player.oowoo == true) {
		for (uwuLoop = 0; uwuLoop < 30; uwuLoop++) {
			text = text.replace('<br>', "**");
			var locationStorage1 = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
			console.log(locationStorage1);
			text = text.replace("["+locationStorage1+"]", "*1");
			var locationStorage2 = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
			text = text.replace("["+locationStorage2+"]", "*2");
			var locationStorage3 = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
			text = text.replace("["+locationStorage3+"]", "*3");
			var locationStorage4 = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
			text = text.replace("["+locationStorage4+"]", "*4");
			text = text.replace('th', "d");
			text = text.replace('Th', "D");
			text = text.replace('what', "wat");
			text = text.replace('What', "Wat");
			text = text.replace('l', "w");
			text = text.replace('r', "w");
			text = text.replace('L', "W");
			text = text.replace('R', "W");
			text = text.replace('**', "<br>");
			text = text.replace('*1', "["+locationStorage1+"]");
			text = text.replace('*2', "["+locationStorage2+"]");
			text = text.replace('*3', "["+locationStorage3+"]");
			text = text.replace('*4', "["+locationStorage4+"]");
		}
		switch (getRandomInt(15)) {
			case 0:
				text = text + " ♥w♥";
			break;
			case 1:
				text = text + " (˘ω˘)";
			break;
			case 2:
				text = text + " (U ᵕ U❁)";
			break;
			case 3:
				text = text + " ( ˊ.ᴗˋ )";
			break;
			case 4:
				text = text + " ( ͡o ꒳ ͡o )";
			break;
			case 5:
				text = text + " ( ´ω` )۶";
			break;
			case 6:
				text = text + " OwO";
			break;
			case 7:
				text = text + " (*ฅ́˘ฅ̀*)";
			break;
			case 8:
				text = text + " ( ͡o ᵕ ͡o )";
			break;
			case 9:
				text = text + " ✧･ﾟ: *✧･ﾟ♡*(ᵘʷᵘ)*♡･ﾟ✧*:･ﾟ✧";
			break;
			case 10:
				text = text + " ★⌒ヽ(˘꒳˘ *)";
			break;
			case 11:
				text = text + " (◕ ˬ ◕✿)";
			break;
			case 12:
				text = text + " (◕∇◕✿)";
			break;
			case 13:
				text = text + " (ꈍ ᴗ ꈍ✿)";
			break;
			case 14:
				text = text + " (◕‸ ◕✿) *pout*";
			break;
			case 15:
				text = text + " (≖ ︿ ≖ ✿)";
			break;
		}
	}
	return text;
}

function toggle(fetish) {
	switch (fetish) {
		case "beast":
			if (data.player.beastDisabled == false) {
				data.player.beastDisabled = true;
			}
			else {
				data.player.beastDisabled = false;
			}
		break;
		case "rim":
			if (data.player.rimDisabled == false) {
				data.player.rimDisabled = true;
			}
			else {
				data.player.rimDisabled = false;
			}
		break;
		case "worm":
			if (data.player.wormDisabled == false) {
				data.player.wormDisabled = true;
			}
			else {
				data.player.wormDisabled = false;
			}
		break;
		case "ws":
			if (data.player.wsDisabled != true) {
				data.player.wsDisabled = true;
			}
			else {
				data.player.wsDisabled = false;
			}
		break;
	}
		sceneTransition(data.player.currentScene);
}

function zombieFooter() {
	switch (data.player.stamina) {
		case 0:
			writeText("You have no energy left to fight. If you encountered a zombie right now, you'd definitely lose.");
			if (checkItem("Snack") == true) {
				writeText("There isn't anyone around. You could take a break to eat a <span class='blueText' onclick='eatSnack()'>snack</span> to regain some stamina.");
			}
		break;
		case 1:
			writeText("You have some stamina left. You could fight off a zombie right now if you had to.");
			if (checkItem("Snack") == true) {
				writeText("There isn't anyone around. You could take a break to eat a <span class='blueText' onclick='eatSnack()'>snack</span> to regain some stamina.");
			}
		break;
		case 2:
			writeText("You have a lot of energy left.");
		break;
	}
	if (data.player.wounded == true) {
		writeText("You are bleeding a little, you should avoid dangerous situations. Anything that hunts via scent will have an easier time tracking you.");
	}
	if (data.player.length > 5) {
		writeText("You're carrying a lot of weight, you don't think you can carry anything more.");
	}
}

function eatSnack() {
	data.player.stamina += 1;
	dropItem("Snack");
}

//Scene creation
function writeText (text) {
	if (text == "...") {
		text = "<hr>";
	}
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + replaceCodenames(text) + `</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + replaceCodenames(text) + `</p>
	`;
}

function writeSpeech (name, img, text) {
	var cssColor = "#CCCCCC";
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
	<div class="textBox" style="border-color: `+cssColor+`">
		<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "`+ img +`">
		<div class="textBoxContent">
		<p class = "textName" style="color:`+cssColor+`">`+ name + `</p>
		<p>` + replaceCodenames(text) + `</p>
	</div>
	<br>
	`;
}

function writeBig (img) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeMed (img) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeFunction (name, func, special) {
	var color = "#FFFFFF";
	var borderColor = "#FFFFFF";
	if (special !== undefined) {
			var color = special;
			var borderColor = special;
	}
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `" style="color:`+color+`; border-color:`+borderColor+`;">
			` + replaceCodenames(func) + `
		</p>
	`;
}

function writeTransition (name, scene, special) {
	var color = "#FFFFFF";
	var borderColor = "#FFFFFF";
	if (special !== undefined) {
			var color = special;
			var borderColor = special;
	}
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')" style="color:`+color+`; border-color:`+borderColor+`;">
			` + scene + `
		</p>
	`;
}

function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log("scene written");
	saveSlot(180);
	console.log("autosaved");
	checkMenu();
	updateMenu();
	console.log(data);
}

function writeCase (name) {
	for (i = 0; i < characterArray.length; i++) {
		if (characterArray[i].index == name) {
			character = characterArray[i];
		}
	}
	var cssColor = "#CCCCCC";
	document.getElementById('output').innerHTML +=`
	<div class="textBox" style="border-color: `+cssColor+`">
		<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "
			scripts/gamefiles/profiles/`+ character.index +`.jpg
		">
		<div class="textBoxContent">
		<p class = "textName" style="color:`+cssColor+`">`+ character.fName + `</p>
		<p class = "switch"  onclick='sceneTransition("`+character.index+`File")'>Review treatment plans</p>
		<p>` + character.desc + `</p>
		</div>
	</div>
	<br>
	`;
}

//Showing & hiding windows
function hideStuff() {
	hideInv();
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

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("menu").style.borderRight = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "400px";	
	document.getElementById("menu").style.borderRight = "5px solid";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Menu
function updateMenu() {
	document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/city.jpg)";
}

function checkMenu() {
	if (
		data.player.currentScene == "start" || 
		data.player.currentScene == "mainMenu" || 
		data.player.currentScene == "settings" || 
		data.player.currentScene == "author" || 
		data.player.currentScene == "caseSelect" || 
		data.player.currentScene == "cheat" || 
		data.player.currentScene.includes('File') == true ||
		data.player.currentScene == "potentialCases"
	) {
		document.getElementById("menu").style.width = "0px";	
		document.getElementById("closeButton").style.visibility = "hidden";	
		document.getElementById("openButton").style.visibility = "hidden";	
		document.getElementById("menu").style.borderRight = "0px";	
		document.getElementById("footer").style.visibility = "hidden";	
		document.getElementById("footer").style.height = "0px";	
		document.getElementById("footer").style.overflow = "hidden";	
	}
	else {
		if (document.getElementById("closeButton").style.visibility == "hidden") {
			document.getElementById("openButton").style.visibility = "visible";	
			document.getElementById("footer").style.visibility = footerVisibility;	
			document.getElementById("footer").style.height = footerHeight;	
			document.getElementById("footer").style.overflow = footerOverflow;
		}
	}
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

function deleteSlot(slot) {
	localStorage.removeItem(slot);
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
	if (data.player.currentScene != "") {
		sceneTransition(data.player.currentScene);
	}
	else {
		sceneTransition('start');
	}
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeFunction("sceneTransition(data.player.currentScene)", "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	if (data == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(181);
	}
	else {
		saveSlot(180);
		loadSlot(180);
	}
	updateSave();
}

//Gallery
function generateGalleryNav() {
	writeFunction("generateGalleryPage('Rainy DayZ')", "Rainy DayZ");
	writeFunction("generateGalleryPage('The Facility')", "The Facility");
	data.player.scenario = "";
}

function generateGalleryPage(n) {
	data.player.scenario = n;
	document.getElementById('output').innerHTML = '';
	writeMed("scripts/gamefiles/characters/"+n+".jpg");
	for (galleryIndex = 0; galleryIndex < galleryArray.length; galleryIndex++) {
		if (galleryArray[galleryIndex].scenario.includes(n)) {
			if (galleryCheck(galleryArray[galleryIndex].index) == true) {
				writeFunction("writeEvent('"+galleryArray[galleryIndex].index+"')", galleryArray[galleryIndex].name)
			}
		}
	}
	writeFunction("sceneTransition(data.player.currentScene)", "Go back");
}

function galleryCheck(n) {
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function countScenes() {
	var totalScenes = 0;
	var scenesCollected = 0;
	for (galleryIndex = 0; galleryIndex < galleryArray.length; galleryIndex++) {
		if (galleryArray[galleryIndex].scenario.includes(data.player.scenario)) {
			totalScenes += 1;
			if (galleryCheck(galleryArray[galleryIndex].index) == true) {
				scenesCollected += 1;
			}
		}
	}
	writeText(scenesCollected+" of "+totalScenes+" scenes unlocked.");
	if (scenesCollected == totalScenes) {
		switch (data.player.scenario){
			case "Rainy DayZ": {
				writeSpecial("You've collected every scene in the game, congratulations! Thanks so much for playing, as a reward have a cheat code: <b>hard rain</b>");
				writeText("This code will unlock all of the scenes for the Rainy DayZ scenario, so you don't need to copy a save file if you want to view the game's scenes on another device. I hope you enjoyed the game, if you have any suggestions or criticisms please let me know about them in the <a href='https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12575'>TFgames thread</a>, on my patreon, or in the Noodle Jacuzzi <a href='https://discord.gg/pDht5BZ'>Discord</a>.");
				writeText("This is all the game has to offer for now, I hope you'll check out my other works at my <a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a> or support me on <a href='https://www.patreon.com/noodlejacuzzi'>Patreon</a>");
				break;
			}
			case "The Facility": {
				break;
			}
		}
	}
}

function unlockScene(n) {
	var unlockedScene = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == n) {
			unlockedScene = galleryArray[i];
		}
	}
	if (unlockedScene != "") {
		if (galleryCheck(unlockedScene.index) != true) {
			data.gallery.push(unlockedScene);
			writeSpecial("You unlocked a new scene in the gallery!");
		}
	}
	else {
		console.log("Unlocking error, no scene named "+n+" found.");
	}
}

//Inventory
function addItem(name) {
	if (data.items.length > 5 && data.player.scenario == "Rainy DayZ") {
		writeText("You can't carry any more.");
	}
	else {
		var purchasedItem = {name: name, image: "scripts/gamefiles/items/"+name+".jpg"};
		console.log(purchasedItem);
		data.items.push(purchasedItem);
	}
}

function grabItem(name) {
	if (data.items.length > 5 && data.player.scenario == "Rainy DayZ") {
		writeText("You can't carry any more.");
	}
	else {
		var purchasedItem = {name: name, image: "scripts/gamefiles/items/"+name+".jpg"};
		console.log(purchasedItem);
		data.items.push(purchasedItem);
		sceneTransition(data.player.currentScene);
	}
}

function removeItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			data.items.splice(i, 1);
			break;
		}
	}
}

function dropItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			data.items.splice(i, 1);
			sceneTransition(data.player.currentScene);
			break;
		}
	}
}

function checkItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

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

function diagnostic() {
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	console.log("Testing code " + goof);
	sceneTransition('cheat');
	switch (goof) {
		case "pervert": {
			if (data.player.pervert != true) {
				data.player.pervert = true;
				writeSpecial("Pervert mode activated!");
				updateMenu();
			}
			else {
				data.player.pervert = false;
				writeSpecial("Pervert mode deactivated!");
				updateMenu();
			}
			break;
		}
		case "oowoo": {
			if (data.player.oowoo != true) {
				data.player.oowoo = true;
				writeSpecial("OWO What's this?");
			}
			else {
				data.player.oowoo = false;
				writeText("Degenerate mode disabled.");
			}
			break;
		}
		case "hard rain": {
			for (unlockIndex = 0; unlockIndex < galleryArray.length; unlockIndex++) {
				if(galleryArray[unlockIndex].scenario == "Rainy DayZ") {
					unlockScene(galleryArray[unlockIndex].index);
				}
			}
			break;
		}
		case "cold mile": {
			writeSpecial("You unlocked all that were in version 1.0, thanks for playing the original! Check below for hints on how to get the 3 new scenes.");
			for (unlockIndex = 0; unlockIndex < galleryArray.length; unlockIndex++) {
				if(galleryArray[unlockIndex].scenario == "Rainy DayZ") {
					if(galleryArray[unlockIndex].index == 'flower1' 
					|| galleryArray[unlockIndex].index == 'flower2' 
					|| galleryArray[unlockIndex].index == 'survivor2' ) {
						writeText(galleryArray[unlockIndex].hint);
					}
					else {
						unlockScene(galleryArray[unlockIndex].index);
					}
				}
			}
			break;
		}
	}
	if (goof == "null") {
		writeText("You've already used this code before, or you entered a code that doesn't exist.");
	}
}