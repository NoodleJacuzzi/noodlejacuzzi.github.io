//Establish variables
var saveName;
var invHidden = true;
var imagesDisabled = false;
var footerVisibility = "";
var footerHeight = "";	
var footerOverflow = "";	

var data = {
	player: {
		currentScene: "",
		name: "",
		scenario: "",
		flags: "",
		beastDisabled: false,
		rimDisabled: false,
		wormDisabled: false,
		wsDisabled: false,
		wounded: false,
		infected: false,
		townZombie: true,
		cityZombie: true,
		factoryZombie: true,
		flower: false,
	},
	gallery: [
	],
	items: [
	],
}

var galleryArray = [
	{index: 'basic1', 	name: "Zombie Assault 1", 	scenario: "Rainy DayZ",		hint: 'Fight the zombie in the town with no stamina while not infected.'},
	{index: 'basic2', 	name: "Zombie Assault 2", 	scenario: "Rainy DayZ",		hint: 'Fight the zombie in the apartment basement with no stamina.'},
	{index: 'basic3', 	name: "Zombie Assault 3", 	scenario: "Rainy DayZ",		hint: 'Fight the zombie in the factory with no weapon while infected.'},
	{index: 'siren1', 	name: "Siren's Voice 1", 	scenario: "Rainy DayZ",		hint: 'While infected, use the flashlight in the factory.'},
	{index: 'siren2', 	name: "Siren's Voice 2", 	scenario: "Rainy DayZ",		hint: 'While infected, use the rope in the factory.'},
	{index: 'hunter1', 	name: "Hunter's Chase 1",	scenario: "Rainy DayZ",		hint: 'While wounded and at no stamina, try to travel through the forest with a weapon.'},
	{index: 'hunter2', 	name: "Hunter's Chase 2", 	scenario: "Rainy DayZ",		hint: 'While wounded and without a weapon, try to travel through the forest.'},
	{index: 'horde1', 	name: "Horde Gangbang 1", 	scenario: "Rainy DayZ",		hint: 'Use the bag of marbles at the highway.'},
	{index: 'horde2', 	name: "Horde Gangbang 2", 	scenario: "Rainy DayZ",		hint: 'While infected and at full stamina, return to the highway after obtaining the food and water supplies.'},
	{index: 'worms1', 	name: "Infestation 1", 		scenario: "Rainy DayZ",		hint: 'Rest at the blue house with the air freshener in your inventory.'},
	{index: 'worms2', 	name: "Infestation 2", 		scenario: "Rainy DayZ",		hint: 'While infected, rest at the blue house with the air freshener in your inventory.'},
	{index: 'flower1', 	name: "Exhibition 1",		scenario: "Rainy DayZ",		hint: 'While not infected, smell the flower in the city, then try to fight the zombie in town.'},
	{index: 'flower2', 	name: "Exhibition 2",		scenario: "Rainy DayZ",		hint: 'While infected, smell the flower in the city, then try to fight the zombie in town.'},
	{index: 'survivor1', name: "Vaccination", 		scenario: "Rainy DayZ",		hint: 'While infected, talk to the fellow survivor in the red house.'},
	{index: 'survivor2', name: "Succumb to Greed", 	scenario: "Rainy DayZ",		hint: 'While not infected, find the fellow survivor in the red house on your way back to the safehouse.'},
	{index: 'tainted', 	name: "Tainted", 			scenario: "Rainy DayZ",		hint: 'Eat the infected food in the convenience store.'},
	{index: 'infected', name: "Infected Ending", 	scenario: "Rainy DayZ",		hint: 'Eat the infected food in the convenience store, then beat the game.'},
	{index: 'start', 	name: "Overwhelmed", 		scenario: "The Facility",	hint: 'Begin chapter 2.'},
	{index: 'licker', 	name: "Tongue Tied", 		scenario: "The Facility",	hint: 'Go back into the Weapons Testing Lab and interact with the pile of guns.'},
	{index: 'mindWorms',name: "Mind Worms", 		scenario: "The Facility",	hint: 'Masturbate in the Parasite Lab.'},
	{index: 'spider', 	name: "Spiders", 			scenario: "The Facility",	hint: 'Interact with the spider webs in the Parasite Lab after curing your infection.'},
	{index: 'whizzer', 	name: "Whizzer's Fluid", 	scenario: "The Facility",	hint: 'Drink the yellow fluid in the Chemical Lab.'},
	{index: 'alpha1', 	name: "Alpha's Bitch", 		scenario: "The Facility",	hint: 'Fail to escape from the alpha after curing your infection.'},
	{index: 'alpha2', 	name: "Failed Escape", 		scenario: "The Facility",	hint: 'Try to fit through the crawlspace in the Containment Lab after curing your infection.'},
	{index: 'solo1', 	name: "Private Time", 		scenario: "The Facility",	hint: 'Masturbate in the Chemical Lab.'},
	{index: 'solo2',	name: "Exposed Time", 		scenario: "The Facility",	hint: 'Masturbate in the Containment Lab.'},
	{index: 'releaseTheHorde',	name: "Exposed Time", 		scenario: "The Facility",	hint: 'Masturbate in the Containment Lab and release the horde.'},
	{index: 'cure', 	name: "Cured", 				scenario: "The Facility",	hint: 'Cure your infection by bringing 3 keycards to the Innoculation Lab.'},
];

//Startup & Systems config
function startup() {
	saveSlot('rainyDayZRestart');
	footerVisibility = document.getElementById("footer").style.visibility;
	footerHeight = document.getElementById("footer").style.height;	
	footerOverflow = document.getElementById("footer").style.overflow;	
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	if(localStorage.getItem('rainyDayZAuto')) {
		loadSlot('rainyDayZAuto');
	}
	else{
		sceneTransition('start');
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot('rainyDayZRestart');
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
		for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
			if (data.player.scenario == "Rainy DayZ" ) {
				if (text.includes('item[') == true) {
					var locationTarget = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					var locationName = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					text = text.replace("item["+locationFull+"]", "<span class='blueText' onclick='grabItem(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
				if (text.includes('event[') == true) {
					var locationTarget = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					var locationName = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					text = text.replace("event["+locationFull+"]", "<span class='blueText' onclick='writeEvent(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
				if (text.includes('drop[') == true) {
					var locationTarget = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					var locationName = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					text = text.replace("drop["+locationFull+"]", "<span class='blueText' onclick='dropItem(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
				if (text.includes('[') == true) {
					var locationTarget = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					var locationName = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					text = text.replace("["+locationFull+"]", "<span class='blueText' onclick='sceneTransition(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
			}
			else {
				if (text.includes('item[') == true) {
					var locationName = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					console.log(locationName);
					var locationTarget = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					console.log(locationTarget);
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					console.log(locationFull);
					text = text.replace("item["+locationFull+"]", "<span class='blueText' onclick='grabItem(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
				if (text.includes('event[') == true) {
					var locationName = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					console.log(locationName);
					var locationTarget = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					console.log(locationTarget);
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					console.log(locationFull);
					text = text.replace("event["+locationFull+"]", "<span class='blueText' onclick='writeEvent(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
				if (text.includes('drop[') == true) {
					var locationName = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					console.log(locationName);
					var locationTarget = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					console.log(locationTarget);
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					console.log(locationFull);
					text = text.replace("drop["+locationFull+"]", "<span class='blueText' onclick='dropItem(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
				if (text.includes('[') == true) {
					var locationName = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("|"));
					console.log(locationName);
					var locationTarget = text.substring(text.lastIndexOf("|") + 1, text.lastIndexOf("]"));
					console.log(locationTarget);
					var locationFull = text.substring(text.lastIndexOf("[") + 1, text.lastIndexOf("]"));
					console.log(locationFull);
					text = text.replace("["+locationFull+"]", "<span class='blueText' onclick='sceneTransition(`"+locationTarget+"`)'>"+locationName+"</span>")
				}
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
	var cssName = name;
	var fullName = name;
	var cssColor = "#CCCCCC";
	if (img == "" && img != 'none') {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (name == "player") {
		img = "scripts/gamefiles/profiles/"+data.player.scenario+".jpg";
		fullName = "You";
		cssColor = "#8c2e2e";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	document.getElementById('output').innerHTML +=`
	<div class="textBox" style="border-color: `+cssColor+`">
		<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "`+ img +`">
		<div class="textBoxContent">
		<p class = "textName" style="color:`+cssColor+`">`+ fullName + `</p>
		<p>` + replaceCodenames(text) + `</p>
	</div>
	<br>
	`;
}

function writeBig (img) {
	if (img.includes("images") != true) {
		img = "images/"+data.player.scenario+"/"+img;
	}
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
	console.log("menu updated");
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
	saveSlot('rainyDayZAuto');
	console.log("autosaved");
	zombieInvShowing = false;
	checkMenu();
	updateMenu();
	console.log(data);
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
	document.getElementById('playerImage').src = "scripts/gamefiles/profiles/"+data.player.scenario+".jpg";
	switch(data.player.scenario) {
		case "Rainy DayZ": {
			document.getElementById('playerDesc').innerHTML = "A young woman searching for supplies on the eve of a hurricane.";
			document.getElementById('scenarioDesc').innerHTML = "You'll need to find enough food and water to wait out the storm, then head back to your safehouse.";
			document.getElementById('scenarioTotal').innerHTML = scenesCollected+" of "+totalScenes+" scenes unlocked.";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/rainy.jpg)";
			break;
		}
		case "The Facility": {
			document.getElementById('playerDesc').innerHTML = "A scientist trapped inside a locked-down facility.";
			document.getElementById('scenarioDesc').innerHTML = "Find the credentials to escape the labs while avoiding the escaped infected.";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/facility.jpg)";
			document.getElementById('scenarioTotal').innerHTML = scenesCollected+" of "+totalScenes+" scenes unlocked.";
			break;
		}
		case "Scarlet Mansion": {
			document.getElementById('playerDesc').innerHTML = "A man defying military blockades to search for his MIA sister.";
			document.getElementById('scenarioDesc').innerHTML = "You'll need to explore the mansion to find out where your sister is, or what happened to her.";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/scarletMansion.jpg)";
			document.getElementById('scenarioTotal').innerHTML = scenesCollected+" of "+totalScenes+" scenes unlocked.";
			break;
		}
		case "Spread Island": {
			document.getElementById('playerDesc').innerHTML = "A husband trying to escape an island resort with his infected wife in tow.";
			document.getElementById('scenarioDesc').innerHTML = "Find a way off the island, make sure your wife stays in control of her infection, and make sure you aren't infected yourself.";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/spreadIsland.jpg)";
			document.getElementById('scenarioTotal').innerHTML = scenesCollected+" of "+totalScenes+" scenes unlocked.";
			break;
		}
		case "On the Record": {
			document.getElementById('playerDesc').innerHTML = "A reporter in the fray during one of the first major outbreaks of the infection.";
			document.getElementById('scenarioDesc').innerHTML = "Your role is to collect evidence of what's going on, so gather intel. Helping folks is optional, just make sure you get good pictures!";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/forTheRecord.jpg)";
			document.getElementById('scenarioTotal').innerHTML = scenesCollected+" of "+totalScenes+" scenes unlocked.";
			break;
		}
		default: {
			document.getElementById('playerDesc').innerHTML = "";
			document.getElementById('scenarioDesc').innerHTML = "";
			document.getElementById('scenarioTotal').innerHTML = "";
		}
	}
}

function checkMenu() {
	if (
		data.player.currentScene == "start" || 
		data.player.currentScene == "scenarioSelect" || 
		data.player.currentScene == "settings" || 
		data.player.currentScene == "author" || 
		data.player.currentScene == "gallery" || 
		data.player.currentScene == "cheat" || 
		data.player.currentScene == "unusedIdeas"
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
	localStorage.setItem(slot,JSON.stringify(data));
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
	data = localStorage.getItem(slot);
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
	saveSlot('rainyDayZ10');
	loadSlot('rainyDayZ10');
	if (data.player.name == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot('rainyDayZAuto');
	}
	else {
		saveSlot('rainyDayZ10');
		loadSlot('rainyDayZ10');
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