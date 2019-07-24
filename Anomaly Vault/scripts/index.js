var picturesDisabled = false;
var saveName;
var saveHidden = true;
var selfHidden = true;
var imagesDisabled = false;
var randNum;
var tempScene;
var data = {
	player: {
		fName: "You",
		lName: "",
		age: "25",
		color: "Blue",
		artifact1: "",
		artifact2: "",
		character: "red",
		currentScene: "start",
		time: "Morning",
		day: 0,
	},
	story: [
		{index: "roommate", image: "", met: false, fName: "Sophia", lName: "Leone", desc:"Your roommate, a lesbian schoolteacher.",},
		{index: "assistant", image: "", met: false, fName: "Veronica", lName: "Rodriguez", desc:"Your (secretly kinky) assistant at work.",},
		{index: "girlfriend", image: "", met: false, fName: "Asa", lName: "Akira", desc:"Your roommate's girlfriend.",},
		{index: "boss", image: "", met: false, fName: "Peta", lName: "Jensen", desc:"Your direct supervisor.",},
		{index: "librarian", image: "", met: false, fName: "Mia", lName: "Malkova", desc:"Sexually frustrated librarian.",},
		{index: "madame", image: "", met: false, fName: "Lovely Madame", lName: "Sunny Leone", desc:"Phantom who lives inside the perfume bottle.",},
		{index: "gym", image: "", met: false, fName: "Karlee", lName: "Grey", desc:"Owner of the local gym.",},
		{index: "lifeguard", image: "", met: false, fName: "Anissa", lName: "Kate", desc:"Lifeguard at the local beach.",},
		{index: "chair", image: "", met: false, fName: "Priya", lName: "Rai", desc:"Chairwoman of Anomaly Vault.",},
	],
	gallery: [
	],
	bodytypes: [
		{index: "basic", name: "Sissy"},
		{index: "red", name: "Featureless Red"},
	],
}

var galleryArray = [
	{index: "bracelet1", girl: "roommate", name: "Reprehensive Bracelet 1", hint: "Roommate event"},
	{index: "coin1", girl: "assistant", name: "Reprehensive Bracelet 2", hint: "Librarian event"},
]

var logbookArray = [
	{index: "roommate", 
		fName: "Pria", lName: "Rai",
		desc: "Your lesbian roommate. She works at some fancy university as a teacher.",
		body: "She's got a smoking body.",
		clothes: "Her preferred outfit is a v-neck shirt thin enough that you can faintly make out her black bra through it and a pair of jeans.",
		home: "She lives in the same apartment complex as you. She occasionally goes to buy groceries in the shopping district.",
	},
];

var artifactArray = [
	{index: "bracelet", equipable: false, title: "Reprehensive Bracelet", desc: "A partially tarnished silver bracelet.", desc2: "When worn, the wearer can become imperceivable and erase memories of themselves & their actions."},
	{index: "erotibox", equipable: false, title: "Erotibox", desc: "N/A", desc2: "N/A"},
	{index: "coin", equipable: true, title: "Midas Coin", desc: "An old gold coin from ancient Greece.", desc2: "When worn, the wearer can barter sexual acts as if they were currency."},
];

//Startup & Systems config
function startup() {
	saveSlot(161);
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data160')) {
		loadSlot(160);
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
	sceneTransition(data.player.currentScene);
	document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(161);
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

function nap() {
	passTime();
	sceneTransition(data.player.currentScene);
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideSave();
	hideSelf();
	//console.log("hideStuff end");
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
	if (name == "notes") {
		name = "Research Notes";
		img = "scripts/gamefiles/profiles/notes.png";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName;
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

function writeArtifact (name) {
	console.log("Now writing artifact tab id " + name);
	var researchStatus = 0;
	var researchTotal = 0;
	var desc2 = "";
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == name) {
			var jam = i;
			var title = artifactArray[i].title;
			var desc = artifactArray[i].desc;
			var artifactResearchCheck = name + "1";
			if (artifactArray[i].equipable == true) {
				console.log("artifact is equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					var equip = "Equip";
					desc2 = artifactArray[jam].desc2;
				}
				else {
					console.log("artifact has not been researched");
					var equip = "";
					desc2 = "";
				}
			}
			else {
				console.log("artifact is not equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					desc2 = artifactArray[jam].desc2;
				}
				else {
					console.log("artifact has not been researched");
					desc2 = "";
				}
				var equip = "";
			}
		}
	}
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(name)) {
			researchTotal += 1;
			if (galleryCheck(galleryArray[i].index) == true) {
				researchStatus += 1;
			}
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
		<p class = "textName">`+ title + `</p>
		<p class = "textName">Research Status:`+researchStatus+` of `+researchTotal+` scenes unlocked</p>
		<p>
			<span class = "choiceText" onclick = "sceneTransition('`+name+`')">Research</span>   
			<span class = "choiceText" onclick = "equip('`+name+`')">`+equip+`</span>
		</p>
		<p class = "textName">`+ desc + `</p>
		<p class = "textName">`+ desc2 + `</p>
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
	
function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(160);
	console.log("scene transition end");
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`A')" src="images/porn/` + pornID + `A.jpg">
			<br>
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

function checkForEvents() {
	switch (true) {
		case (checkArtifact("bracelet") == true): {
			console.log("Now searching for events for bracelet");
			switch (tempScene) {
				case "work": {
					break;
				}
				case "home": {
					break;
				}
			}
			break;
		}
	}
}

//Menu
function updateMenu() {
	document.getElementById('playerName').innerHTML = data.player.fName + ' ' + data.player.lName;
	document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
	if (data.player.artifact1 != "") {
		document.getElementById("playerArtifact1").style.width = "95%";
		document.getElementById("playerArtifact1").style.border = "3px solid white";
		document.getElementById('playerArtifact1').src = "scripts/gamefiles/items/"+data.player.artifact1+".jpg";
	}
	else {
		document.getElementById("playerArtifact1").style.width = "0%";
		document.getElementById("playerArtifact1").style.border = "none";
	}
	if (data.player.artifact2 != "") {
		document.getElementById("playerArtifact2").style.width = "95%";
		document.getElementById("playerArtifact2").style.border = "3px solid white";
		document.getElementById('playerArtifact2').src = "scripts/gamefiles/items/"+data.player.artifact2+".jpg";
	}
	else {
		document.getElementById("playerArtifact2").style.width = "0%";
		document.getElementById("playerArtifact2").style.border = "none";
	}
}

function changeName() {
	data.player.fName = document.getElementById('nameSubmission').value;
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
	data.player.fName = document.getElementById('nameSubmission').value;
	data.player.lName = document.getElementById('lastSubmission').value;
	data.player.age = document.getElementById('ageSubmission').value;
	data.player.color = document.getElementById('colorSubmission').value;
	sceneTransition("prologue3");
}

function equip(n) {
	data.player.artifact2 = n;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == n) {
			var title = artifactArray[i].title;
		}
	}
	writeText("You've equipped the " + title);
	writeTransition(data.player.currentScene, "Go back");
}

function checkArtifact(n) {
	if (n == data.player.artifact1 || n == data.player.artifact2) {
		return true;
	}
	else {
		return false;
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
	sceneTransition(data.player.currentScene);
	updateSave();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(160);
	loadSlot(160);
	if (data.player.fName == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(161);
	}
	else {
		saveSlot(160);
		loadSlot(160);
	}
	updateSave();
}

function generateSave() {
	for (i = 151; i < 159; i++) {
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
	saveSlot(160);
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
		console.log("Error, no scene named "+n+" found.");
	}
}

function generateGalleryNav() {
	for (i = 0; i < artifactArray.length; i++) {
		document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
				<br>
				<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
			</div>
			<br>
		`;
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGirlPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
				<br>
				<span class = "choiceText" onclick="generateGirlPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div>
			<br>
			`;
		}
	}
}

function generateArtifactPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/items/"+n+".jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateGirlPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/characters/"+ n +".jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes(n)) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
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

//Logbook
function generateNav() {
	console.log('now generating logbook navigation');
	document.getElementById('logbookLeft').innerHTML = ``;
	document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('player')">` + data.player.fName + `</p>`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('`+i+`')">` + data.story[i].fName + `</p>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		console.log("now loading logbook for character ID " + n + " aka " + data.story[n].index);
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.story[n].index+data.story[n].image+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].desc+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].body+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].clothes+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].home+`</p><br><br>
			<p class = "selfDesc">   </p>br><br>
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Name: `+data.player.fName+` `+data.player.lName+`</p><br><br>
			<p class = "selfDesc">Day: `+data.player.day+`</p><br><br>
			<p class = "selfDesc">Time: `+data.player.time+`</p><br><br>
			<p class = "selfDesc">Not super sure what to put here. Obviously the logbook entries for the girls, and probably a list of what artifacts you've got equipped.</p><br><br>
		`;
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

//Cheating
function cheat() {
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	console.log("Testing cheat code " + goof);
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
		case "new name": {
			data.player.currentScene = "renamingRoom";
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	if (goof == "null") {
		writeText("You've already used this code before.");
	}
}

function writeWardrobe() {
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
