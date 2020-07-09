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
	//The Facility's scenes
	{index: 'start', 	name: "Overwhelmed", 		scenario: "The Facility",	hint: 'Begin chapter 2.'},
	//index: 'licker', 	name: "Tongue Tied", 		scenario: "The Facility",	hint: 'Go back into the Weapons Testing Lab and interact with the pile of guns.'},
	{index: 'mindWorms',name: "Mind Worms", 		scenario: "The Facility",	hint: 'Masturbate in the Parasite Lab.'},
	{index: 'spider', 	name: "Spiders", 			scenario: "The Facility",	hint: 'Interact with the spider webs in the Parasite Lab after curing your infection.'},
	{index: 'whizzer', 	name: "Whizzer's Fluid", 	scenario: "The Facility",	hint: 'Drink the yellow fluid in the Chemical Lab.'},
	{index: 'alpha1', 	name: "Alpha's Bitch", 		scenario: "The Facility",	hint: 'Fail to escape from the alpha after curing your infection.'},
	{index: 'alpha2', 	name: "Failed Escape", 		scenario: "The Facility",	hint: 'Try to fit through the crawlspace in the Containment Lab after curing your infection.'},
	{index: 'alpha3', 	name: "Hypnotic Ass", 		scenario: "The Facility",	hint: 'Try to hide from the alpha in the weapon lab after opening the sealed door.'},
	{index: 'solo1', 	name: "Private Time", 		scenario: "The Facility",	hint: 'Masturbate in the Chemical Lab.'},
	{index: 'domination', 	name: "Domination", 		scenario: "The Facility",	hint: 'Relieve yourself with the subdued woman in the weapon lab after learning the passcode is 828.'},
	{index: 'solo2',	name: "Exposed Time", 		scenario: "The Facility",	hint: 'Masturbate in the Containment Lab.'},
	{index: 'releaseTheHorde',	name: "Release the Horde", 		scenario: "The Facility",	hint: 'Masturbate in the Containment Lab and release the horde.'},
	{index: 'cure', 	name: "Cured", 				scenario: "The Facility",	hint: 'Cure your infection by bringing 3 keycards to the Innoculation Lab.'},
	{index: 'mindBreak', 	name: "Purple Potion", 				scenario: "The Facility",	hint: 'Combine the "break" and "mind" ingredients at the chemistry table.'},
	{index: 'cockBreak', 	name: "Pink Potion", 				scenario: "The Facility",	hint: 'Combine the "break" and "penis" ingredients at the chemistry table.'},
	{index: 'cockMind', 	name: "Light Blue Potion", 				scenario: "The Facility",	hint: 'Combine the "penis" and "mind" ingredients at the chemistry table.'},
	{index: 'cockRock', 	name: "Light Yellow Potion", 		scenario: "The Facility",	hint: 'Combine the "rock" and "penis" ingredients at the chemistry table, then try to cure yourself of the infection.'},
	{index: 'failure', 	name: "Failure to Escape", 				scenario: "The Facility",	hint: 'Fail to escape from the Alpha because you are too pent up from not jerking off.'},
	{index: 'fireteam1', 	name: "Jones's Recording", 			scenario: "The Facility",	hint: 'Find the first memory card in the weapon lab and view it in the lobby.'},
	{index: 'fireteam2', 	name: "Carla's Recording", 			scenario: "The Facility",	hint: 'Find the second memory card in the parasite lab and view it in the lobby.'},
	{index: 'fireteam3', 	name: "Vasquez's Recording", 			scenario: "The Facility",	hint: 'Find the final memory card in the chemistry lab and view it in the lobby.'},
	//Spead Island
	{index: 'frozen', name: "Frozen in Place", scenario: "Spread Island",	hint: "Fail to save your wife at the start of Spread Island."},
	{index: 'hotelMainExit', name: "Shut the Front Door", scenario: "Spread Island",	hint: "Try to leave through the hotel's front door."},
	{index: 'hotelFreshSiren', name: "Newborn Siren", scenario: "Spread Island",	hint: "Comfort the newly-turned siren in room 202."},
	{index: 'hotelPleasureGas', name: "Pink Gas", scenario: "Spread Island",	hint: "Pull the plug on the mysterious gas in room 203."},
	{index: 'hotelWifePleasureGas', name: "Fun for the Family", scenario: "Spread Island",	hint: "Spray your wife with the pink gas you found in room 203. Because that's a great idea!"},
	{index: 'hotelAbandon', name: "Left 4 Bred", scenario: "Spread Island",	hint: "Leave the hotel without going back for your wife. Why is this a bad end? Because I'm lazy!"},
	{index: 'wifeHelp', name: "A Helping Hand", scenario: "Spread Island",	hint: "Offer your hand as a sexual relief tool in the king's villa. (You need to escape via the bedding rope to get to the villa section)"},
	{index: 'wifeDildo', name: "Self-Pleasure: Dildo", scenario: "Spread Island",	hint: "Offer a dildo as a sexual relief tool in the king's villa."},
	{index: 'wifeSacrifice', name: "The Sacrifice", scenario: "Spread Island",	hint: "Bludgeon the scrounger in the soldier's villa and use her to satisfy your wife."},
	{index: 'wifeOnahole', name: "Self-Pleasure: Onahole", scenario: "Spread Island",	hint: "Offer the fleshlight from room 204 as a sexual relief tool in the king's villa."},
	{index: 'wifeCage', name: "Caged", scenario: "Spread Island",	hint: "Force your wife into a chastity cage in the king's villa."},
	{index: 'compoundCaught', name: "Caught Escaping", scenario: "Spread Island",	hint: "Get caught by the guards in the compound by coming out of the vent when you shouldn't."},
	//index: 'compoundHounds', name: "", scenario: "Spread Island",	hint: "Hide right behind a hound's cage in the compound."},
	{index: 'compoundCage', name: "", scenario: "Spread Island",	hint: "Rescue your chastity-caged wife from the compound."},
	{index: 'compoundFailure', name: "", scenario: "Spread Island",	hint: "Don't set a timer on either the kennels or the gas room at the computer console before escaping the compound."},
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
	while (text.includes("wifeF")) {
		text = text.replace('wifeF', data.player.wife);
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
	if (name == "wife") {
		fullName = data.player.wife;
		cssColor = "#8c2e2e";
	}
	if (name == "Monica") {
		cssColor = "#8c4e4e";
		img = "scripts/gamefiles/profiles/monica.jpg";
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
	if (scene == "GAME OVER") {
		if (data.quicksave != null) {
			document.getElementById('output').innerHTML += `
			<p class="choiceText" onclick="quickLoad()" style="color:#91eba9; border-color:#91eba9;">
				QUICKLOAD
			</p>
			`;
		}
	}
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

function passcodeEntry() {
	var goof = document.getElementById('cheatSubmission').value;
	switch (goof) {
		case "828": {
			data.player.flags += "weaponLabDoor";
			sceneTransition("weaponLab");
			break;
		}
		default: {
			writeText("Passcode rejected.");
		}
	}
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
		case "Typhoid Mary": {
			document.getElementById('playerDesc').innerHTML = "A survivor of an infected world who's fallen prey to infection herself.";
			document.getElementById('scenarioDesc').innerHTML = "Find a means to hide your infection from others while using your command over the infected to topple the compound.";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/typhoidMary.jpg)";
			document.getElementById('scenarioTotal').innerHTML = "";
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
		data.player.currentScene == "rainyDayZ" || 
		data.player.currentScene == "theFacility" || 
		data.player.currentScene == "spreadIsland" || 
		data.player.currentScene == "unusedIdeas"
	) {
		document.getElementById("menu").style.width = "0px";	
		if (document.getElementById("closeButton") != null) {
			document.getElementById("closeButton").style.visibility = "hidden";	
		}	
		if (document.getElementById("openButton") != null) {
			document.getElementById("openButton").style.visibility = "hidden";	
		}
		document.getElementById("menu").style.borderRight = "0px";	
		document.getElementById("footer").style.visibility = "hidden";	
		document.getElementById("footer").style.height = "0px";	
		document.getElementById("footer").style.overflow = "hidden";	
	}
	else {	
		if (document.getElementById("closeButton") != null) {
			if (document.getElementById("closeButton").style.visibility == "hidden") {
				if (document.getElementById("openButton") != null) {
					document.getElementById("openButton").style.visibility = "visible";	
				}
				document.getElementById("footer").style.visibility = footerVisibility;	
				document.getElementById("footer").style.height = footerHeight;	
				document.getElementById("footer").style.overflow = footerOverflow;
			}
		}
	}
}

function writeHTML(text) {
	//Separate the text into lines
	var lines = text.split('\n');
	//For each of these lines
	for(var lineCounter = 0;lineCounter < lines.length;lineCounter++){
		//Remove all tabs from the line, in case we use tab spacing
		while (lines[lineCounter].includes('\t') == true) {
			lines[lineCounter] = lines[lineCounter].replace(`\t`, ``);
		}
		//If the line is not empty (we don't want to print empty lines)
		if (lines[lineCounter] != "" && checkRequirements(lines[lineCounter]) == true) {
			//Grab the first word of the line to use as the command
			var command = lines[lineCounter].replace(/ .*/,'');
			//Depending on which command, execute different code. Convert the command to lowercase as well in case we used Sp instead of sp, as js is case-sensitive.
			switch (command.toLowerCase()) {
				//If the command is "t"
				case "t": {
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					//Execute the writeText command to print everything left to the screen.
					writeText(cullRequirements(lines[lineCounter]));
					//Don't execute any of the below switch cases.
					break;
				}
				case "sp": {
					//Get the name of our speaker
					var name = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; im" is in our code we want to specify a specific profile image, so use that. Otherwise set the image variable blank so it can be automatically found.
					if (lines[lineCounter].includes("; im")) {
						var image = lines[lineCounter].split(`im `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`im `+image+`; `, ``);
					}
					else {
						var image = "";
					}
					//If "; altName" is in our code we want to use an alternate name for the character, so use that. Otherwise set the altName variable blank.
					if (lines[lineCounter].includes("; altName")) {
						var altName = lines[lineCounter].split(`altName `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altName `+altName+`; `, ``);
					}
					else {
						var altName = "";
					}
					//If "; altColor" is in our code we want to specify a specific color for the character, so use that. Otherwise set the altColor variable blank.
					if (lines[lineCounter].includes("; altColor")) {
						var altColor = lines[lineCounter].split(`altColor `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altColor `+altColor+`; `, ``);
					}
					else {
						var altColor = "";
					}
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `+name+`; `, ``);
					//Execute the writeSpeech command to print everything we have left.
					//TODO: Add custom colors and custom names
					writeSpeech(name, image, cullRequirements(lines[lineCounter]), altName, altColor);
					break;
				}
				case "im": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; cap" is in our code we want to attach a caption to our image. Otherwise leave the caption blank.
					//Bring up the image on screen. Since we aren't printing the line itself we don't need to clean it by removing commands.
					writeBig(location);
					break;
				}
				//This is for convenience. If the line is just an elipses, replace it with a horizontal line cutting across the screen.
				case "...": {
					writeText("<hr>");
					break;
				}
				//If the command isn't found in the list above then the code can't be parsed (understood), print an error code in red.
				default: {
					writeText("<span style='color:red'>Unknown command. The line '"+lines[lineCounter]+"' could not be parsed.");
				}
			}
		}
	}
}

function checkRequirements(string) {
	var finalResult = true;
	while (string.includes("?fetish ") == true) {
		var check = string.split(`?fetish `).pop().split(`;`)[0];
		switch(check) {
			case "beast": {
				if (data.player.beastDisabled == true) {
					finalResult = false;
				}
				break;
			}
			case "rim": {
				if (data.player.rimDisabled == true) {
					finalResult = false;
				}
				break;
			}
			case "worm": {
				if (data.player.wormDisabled == true) {
					finalResult = false;
				}
				break;
			}
			case "ws": {
				if (data.player.wsDisabled == true) {
					finalResult = false;
				}
				break;
			}
		}
		string = string.replace(`?fetish `+check+`;`, ``);
	}
	while (string.includes("?flag ") == true) {
		var check = string.split(`?flag `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?flag `+check+`;`, ``);
	}
	while (string.includes("!flag ") == true) {
		var check = string.split(`!flag `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!flag `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		if (checkItem(check) == false) {
			finalResult = false;
		}
		console.log(check);
		string = string.replace(`?item `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		if (checkItem(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!item `+check+`;`, ``);
	}
	if (finalResult == true) {
		return true;
	}
	else {
		return false;
	}
}

function cullRequirements(string) {
	while (string.includes("?fetish ") == true) {
		var check = string.split(`?fetish `).pop().split(`;`)[0];
		string = string.replace(`?fetish `+check+`;`, ``);
	}
	while (string.includes("?flag ") == true) {
		var check = string.split(`?flag `).pop().split(`;`)[0];
		string = string.replace(`?flag `+check+`;`, ``);
	}
	while (string.includes("!flag ") == true) {
		var check = string.split(`!flag `).pop().split(`;`)[0];
		string = string.replace(`!flag `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		string = string.replace(`?item `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		string = string.replace(`!item `+check+`;`, ``);
	}
	return string;
}

function addFlag(name) {
	if (data.player.flags.includes(name) == false) {
		data.player.flags += name;
	}
}

function removeFlag(name) {
	data.player.flags.replace(name, "");
}

function checkFlag(name) {
	if (data.player.flags.includes(name) == true) {
		return true;
	}
	else {
		return false;
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
	document.getElementById('output').innerHTML += JSON.stringify(data);
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

function saveTXT() {
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
    var textFileAsBlob = new Blob([JSON.stringify(data)], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = "Rainy "+date+".noodle";
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
	if (fakedata.player.flower == null) {
		alert("Whoa there! I don't think that's a Rainy DayZ save file! If it is, be sure to let me (Noodlejacuzzi) know and I'll help you out.");
	}
	else {
		data = fakedata;
		sceneTransition("settings");
	}
	document.getElementById('loadFile').value = '';
}


function quickSave() {
	data.quicksave = Object.assign({}, data.player)
	data.quickInv = [...data.items];
	writeText("Quicksaved. Starting a new campaign will erase quicksave data.");
}

function quickLoad() {
	if (data.quicksave == null) {
		alert('Error. No quicksave data detected!')
	}
	else {
		data.player = Object.assign({}, data.quicksave)
		data.items = [...data.quickInv];
		console.log(data.quicksave);
		sceneTransition(data.player.currentScene);
	}
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
		case "pool noodle": {
			for (unlockIndex = 0; unlockIndex < galleryArray.length; unlockIndex++) {
				if (galleryCheck(galleryArray[unlockIndex].index) != true) {
					writeText(galleryArray[unlockIndex].scenario + " - " + galleryArray[unlockIndex].hint);
				}
			}
			break;
		}
	}
	if (goof == "null") {
		writeText("You've already used this code before, or you entered a code that doesn't exist.");
	}
}