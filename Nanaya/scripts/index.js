//This is a repository for all core game functions

var picturesDisabled = false;
var saveName;
var saveHidden = true;
var selfHidden = true;
var randNum;
var tempScene;
var data = {
	player: {
		fName: "You",
		lName: "",
		weapon: "",
		style: "lobotomy",
		currentScene: "start",
		character: "player",
		currentMission: "",
	},
	upgrades: [
	],
	research: [
	],
	captives: [
	],
	gallery: [
	],
}

var galleryArray = [
	{index: "parasite1", name: "",},
];

var upgradeArray = [
	{index: "", name: "",},
];

var researchArray = [
	{index: "parasite1", name: "", requirements: "",},
];

var missonArraySub = [
	{index: "", name: "", requirements: "",},
];

var missonArrayMain = [
	{index: "", name: "", requirements: "",},
];

var characterArray = [
	{
		index: "player",
		img: "scripts/gamefiles/profiles/player.jpg",
		desc: "The main character",
		color: "#3dd4d5",
	}
];

//Startup & Systems config
function startup() {
	saveSlot(261);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data260')) {
		console.log('startup autosave load successful. Now loading autosave at position ' + data.player.currentScene);
		loadSlot(260);
	}
	else{
		sceneTransition('start');
	}
}

function disablePictures() {
	if (picturesDisabled == false) {
		document.getElementById("playerImage").style.visibility = "hidden";		
		document.getElementById("playerImage").style.width = "0%";
		document.getElementById("playerImage").style.border = "none";
		picturesDisabled = true;
		sceneTransition(data.player.currentScene);
		document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
	}
	else {
		location.reload();
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(261);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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
	saveSlot(260);
	console.log("scene transition end");
}

//Menu
function updateMenu() {
	document.getElementById('playerName').innerHTML = data.player.fName + ' ' + data.player.lName;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
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
	if (data.player.currentScene.includes("scenario") != true) {
		sceneTransition(data.player.currentScene);
	}
	else {
		console.log("scenario save data detected for scenario " +data.player.currentScenario +", now loading");
		console.log(data);
		requestType = "refreshed";
		var filename = "scenarios/"+data.player.currentScenario+"/sceneList.js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
	updateSave();
	nameUpdate();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML += `<textArea id = "copyData">`+JSON.stringify(data)+`</textAread>`;
	var copyText = document.getElementById("copyData");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	//alert("Copied the text: " + copyText.value);
	
	document.getElementById('output').innerHTML = '';
	writeText("Save data copied! It's been added to your clipboard, or you can manually copy the information below.");
	document.getElementById('output').innerHTML += JSON.stringify(data);
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(260);
	loadSlot(260);
	if (data.player.fName == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(261);
	}
	else {
		saveSlot(260);
		loadSlot(260);
	}
	updateSave();
	nameUpdate();
}

function saveTXT() {
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
    var textFileAsBlob = new Blob([JSON.stringify(data)], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = "AV "+date+".noodle";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

const fr = new FileReader();
fr.addEventListener("load", fileLoaded);

function loadSave(){
    files = document.getElementById('loadFile').files;
    if(files.length == 0)
        return;
    file = files[0];
    fr.readAsText(file);
}
function fileLoaded(){
    console.log(fr.result);
	var fakedata = fr.result;
	fakedata = JSON.parse(fakedata);
	if (fakedata.player.fName == null) {
		alert("Whoa there! I don't think that's an Anomaly Vault save file! If it is, be sure to let me (Noodlejacuzzi) know and I'll help you out.");
	}
	else {
		data = fakedata;
		sceneTransition(data.player.currentScene);
	}
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
	saveSlot(260);
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

//Logbook
function generateNav() {
	console.log('now generating logbook navigation');
	document.getElementById('logbookLeft').innerHTML = ``;
	document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('player')">` + data.player.fName + `</p>`;
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		console.log("now loading logbook for character ID " + n + " aka " + data.story[n].index);
		if (picturesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.story[n].index+data.story[n].image+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">`+logbookArray[n].desc+`</p>
			<p class = "selfDesc">`+logbookArray[n].body+`</p>
			<p class = "selfDesc">`+logbookArray[n].clothes+`</p>
			<p class = "selfDesc">   </p>
		</div
		`;
	}
	else {
		if (picturesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		var researchStatus = 0;
		var researchTotal = 0;
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].dark != true) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: `+data.player.fName+` `+data.player.lName+`</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">Day: `+data.player.day+`</p>
			<p class = "selfDesc">Time: `+data.player.time+`</p>
			<p class = "selfDesc">Total scenes unlocked: `+researchStatus+` of `+researchTotal+`</p>
		</div>
		`;
		if (data.player.artifact1 != "") {
			for (i = 0; i < artifactArray.length; i++) {
				if (artifactArray[i].index == data.player.artifact1) {
					name1 = artifactArray[i].index;
					title1 = artifactArray[i].title;
				}
			}
			var research1Status = 0;
			var research1Total = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes(name1)) {
					research1Total += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						research1Status += 1;
					}
				}
			}
			document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">First equipped artifact: `+title1+`<br>`+research1Status+` of `+research1Total+` scenes unlocked</p>
			`;
		}
		if (data.player.artifact2 != "") {
			for (i = 0; i < artifactArray.length; i++) {
				if (artifactArray[i].index == data.player.artifact2) {
					name2 = artifactArray[i].index;
					title2 = artifactArray[i].title;
				}
			}
			var research2Status = 0;
			var research2Total = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes(name2)) {
					research2Total += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						research2Status += 1;
					}
				}
			}
			document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Second equipped artifact: `+title2+`<br>`+research2Status+` of `+research2Total+` scenes unlocked</p>
			`;
		}
	}
}

function generateLogbookGallery(n) {
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(n)) {
			if (galleryCheck(galleryArray[i].index) == true) {
				document.getElementById('logbookRight').innerHTML += '<p class = "selfDesc">' + galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</p>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<p class = "selfDesc">' + galleryArray[i].name + '<br>' + galleryArray[i].hint + '</p>';
				break;
			}
		}
	}
}

//Cheating
function cheat() {
	//If you're reading this, then please link to my patreon post instead of posting the cheats. The release post of v2 already has a list of cheat codes, and is visible to non-patrons
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	var goofMessage = "Code does not exist";
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "swallows999": {
			goofMessage = "Welcome, Swallows."
			changeBody("swallows");
			break;
		}
		case "cryptogreek": {
			goofMessage = "Welcome, Cryptogreek."
			changeBody("crypto");
			break;
		}
		case "cute boi": {
			goofMessage = "Bodytype changed. Stay cute!"
			changeBody("basic");
			break;
		}
		case "cute girl": {
			goofMessage = "Bodytype changed. Stay cute!"
			changeBody("shemale");
			break;
		}
		case "noodlemaster": {
			for (noodle = 0; noodle < galleryArray.length; noodle++) {
				if (galleryCheck(galleryArray[noodle].index)== false) {
					unlockScene(galleryArray[noodle].index);
				}
			}
			goofMessage = "Master code accepted. All scenes unlocked."
			break;
		}
		case "anomaly hunter": {
			data.player.currentScene = "hunterDemo";
			goofMessage = ""
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	writeText(goofMessage);
}