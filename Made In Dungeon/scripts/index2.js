var picturesDisabled = false;
var saveName;
var randNum;
var tempScene = "";
var activeWindow = "";

var data = {
	player: {
		name: "You",
		assistant: "???",
		currentScene: "start",
		version: 1,
		money: 20,
		flags: "",
		level: 1,
		dungeonSize: 1,
	},
	style: {
		dialogue: "basic",
		menu: "basic",
		choices: "basic",
		font: "basic",
		imageSize: 1,
		fontSize: 1,
	},
	dungeon: [
		{index: "pitfall"},
	],
	inventory: [],
	gallery: [],
}

var dungeonArray = [
	{index: "pitfall", type: "trap", effect: "damage",}
]

var menuArray = [
	{ID: "invButton", name:"INVENTORY", func: "generateWindow('inventory')", div: "buttonMenuPrimary"},
	{ID: "logButton", name:"LOGBOOK", func: "generateWindow('logbook')", div: "buttonMenuPrimary"},
	{ID: "saveButton", name:"SAVE/LOAD", func: "generateWindow('save')", div: "buttonMenuPrimary"},
	{ID: "setButton", name:"SETTINGS", func: "generateWindow('settings')", div: "buttonMenuPrimary"},
	{ID: "restartButton", name:"RESTART", func: "restartButton()", div: "buttonMenu"},
	{ID: "mobButton", name:"MOBILE VERSION", func: "mobileButton()", div: "buttonMenu"},
];

var locationArray = [
	{index: "homeFoyer", buttons: [
		{name: "Your Room", top: 55, left: 80, type: "location", target: "homePlayerRoom", time: "Evening",},
		{name: "sisterF's Room", top: 40, left: 3, type: "location", target: "homeSisterRoom", time: "Evening",},
		{name: "Head Out", top: 40, left: 70, type: "location", target: "alleyway", time: "Evening",},
	],},
	{index: "homePlayerRoom", buttons: [
		{name: "Leave the Room", top: 80, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
	],},
	{index: "homeGameRoom", buttons: [
		{name: "Leave the Room", top: 80, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
	],},
	{index: "homeSisterRoom", buttons: [
		{name: "Leave the Room", top: 80, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
	],},
	{index: "streets", buttons: [
		{name: "Alleyway Shortcut", top: 40, left: 38, type: "location", target: "alleyway", time: "Evening",},
		{name: "chefF's Cafe", top: 50, left: 10, type: "location", target: "restaurant", time: "Evening",},
		{name: "Head to School", top: 80, left: 40, type: "location", target: "school", time: "Evening",},
	],},
	{index: "alleyway", buttons: [
		{name: "Head Home", top: 40, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
		{name: "Back to the Streets", top: 80, left: 37, type: "location", target: "streets", time: "Evening",},
	],},
	{index: "restaurant", buttons: [
		{name: "Back to the Streets", top: 50, left: 50, type: "location", target: "streets", time: "Evening",},
	],},
	{index: "school", buttons: [
		{name: "Your Classroom", top: 80, left: 38, type: "location", target: "classroom", time: "Evening",},
		{name: "Leave School", top: 40, left: 40, type: "location", target: "streets", time: "Evening",},
	],},
	{index: "classroom", buttons: [
		{name: "Leave Class", top: 80, left: 40, type: "location", target: "school", time: "Evening",},
		{name: "Head Straight Home", top: 80, left: 5, type: "location", target: "homeFoyer", time: "Evening",},
	],},
];

var shopArray = [
	{type: "candy", price: 5, route: "domsub", index: "popRocks", name: "Pop Rocks", desc: "You'll be sputtering endlessly! Even the slightest breeze will have you cross-eyed and firing!<br>Warning: Induces premature ejaculation and excessive semen production."},
	{type: "candy", price: 5, route: "domsub", index: "caramelMelts", name: "Caramel Melts", desc: "These melt in your mouth, making everything you put in afterwards taste heavenly! Warning: Induces a strong desire for 'irrumatio' play. Remember: dick is not a healthy alternative for oxygen."},
	{type: "candy", price: 5, route: "domsub", index: "plugPop", name: "Plug Pops", desc: "These suckers will pucker and plump you up! Permanently cleans, slickens, and keeps clean the digestive tract, rectum, and sphincter. Not meant for oral use."},
	{type: "candy", price: 5, route: "domsub", index: "stretchTaffy", name: "Stretchy Taffy", desc: "Ever feel like you or your lover are just too wound up? Take a bit of these, and you'll have no problems fitting in anywhere! Warning: Side effects include preparing your body for anal sex."},
	{type: "candy", price: 5, route: "domsub", index: "fruitGushers", name: "Fruit Gushers", desc: "Let's be real here. Watersports can be tough to schedule. Not a problem here! Chew on one of these and you'll be a garden hose for a few minutes at a time. Feels and tastes great too!"},
	{type: "exotic", price: 5, route: "domsub", index: "vrMachine", name: "Virtual Reality Headset", desc: ""},
	{type: "exotic", price: 5, route: "domsub", index: "laptop", name: "Laptop", desc: "A portable computer (that you'll use to look up porn)."},
	{type: "exotic", price: 5, route: "dom", index: "creamer", name: "Coffee Creamer", desc: "An easily re-sealable cup of a generic white coffee creamer."},
	{type: "exotic", price: 5, route: "dom", index: "adultToy", name: "Adult Toy", desc: "You know what this is, and what it can do."},
	{type: "exotic", price: 5, route: "dom", index: "horseToy", name: "Horse Toy", desc: "This is the meat that can't be beat! Warning, not for the faint of heart / inflexible of body."},
	{type: "exotic", price: 5, route: "dom", index: "onahole", name: "Onahole Toy", desc: "You're an app user, so you shouldn't need this. Unless you're feeling creative, that is."},
	{type: "exotic", price: 5, route: "domsub", index: "candyTicket", name: "Candy Ticket", desc: "Unlocks additional exotic purchases at the Candy Shop."},
	{type: "exotic", price: 5, route: "dom", index: "clothingTicket", name: "Clothing Ticket", desc: "Unlocks additional exotic purchases at the Clothing Store."},
	{type: "exotic", price: 5, route: "sub", index: "beautyTicket", name: "Beauty Ticket", desc: "Unlocks additional exotic purchases at the Beauty Salon"},
	
	{type: "clothesMale", price: 5, route: "dom", index: "menShorts", name: "Button-up", desc: "a casual button-up shirt and a pair of shorts."},
	{type: "clothesMale", price: 5, route: "dom", index: "menBlack", name: "Black", desc: "an all-black outfit."},
	{type: "clothesMale", price: 5, route: "dom", index: "menDrawstring", name: "Drawstring", desc: "a casual white outfit with drawstring pants."},
	{type: "clothesMale", price: 5, route: "dom", index: "menJacket", name: "Jacket", desc: "an outdoorsy looking outfit."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "bikini", name: "Bikini", desc: "a yellow bikini, perfect for a trip to the beach."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "blue", name: "Blue Sweater", desc: "a blue sweater and jeans."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "bodypaint", name: "Bodypaint", desc: "a fake set of clothes made out of paint."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "bottomless", name: "Bottomless", desc: "a black sweater, but nothing to cover your ass or privates."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "coatCasual", name: "Red Coat", desc: "a comfy red coat, a black v-neck shirt and jeans."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "dressSkimpy", name: "Skimpy Dress", desc: "a blue dress which barely covers your nipples."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "exercise", name: "Exercise", desc: "a workout outfit."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "fishnet", name: "Fishnet", desc: "a fishnet shirt clearly displaying your breasts."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "latex", name: "Latex", desc: "a latex outfit."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "maid", name: "Maid Uniform", desc: "a maid uniform."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "microbikini", name: "Microbikini", desc: "a microbikini that hardly covers any skin."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "schoolCollege", name: "College Student", desc: "a sweater, leggings, and a large scarf."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "sissy", name: "Sissy", desc: "a pink skirt."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "superhero", name: "Superheroine", desc: "a superheroine outfit."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "sweater", name: "Sweater", desc: "a grey sweater."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "trailer", name: "Trailer-Park Whore", desc: "a top and shorts cut so short you could flash someone by shifting your weight."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "transparent", name: "Transparent Shirt", desc: "a transparent shirt."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "transparentbikini", name: "Transparent Bikini", desc: "a transparent bikini."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "transparentShort", name: "Transparent Dress", desc: "a transparent dress."},
	{type: "clothesSub", price: 5, route: "sub", index: "dress", name: "Black Dress", desc: "a thin black dress that barely goes down your thighs."},
	{type: "clothesSub", price: 5, route: "sub", index: "skirt", name: "Skirt", desc: "a thin black dress that barely goes down your thighs."},
	{type: "clothesSub", price: 5, route: "sub", index: "schoolgirl", name: "Schoolgirl", desc: "a thin black dress that barely goes down your thighs."},
	{type: "underwearMaleTransTrap", price: 0, route: "dom", index: "nothing", name: "Nothing", desc: "absolutely nothing beneath your clothes!"},
	{type: "underwearMale", price: 5, route: "dom", index: "boxers", name: "Boxers", desc: "a slightly-worn pair of boxers."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Black Panties", desc: "a pair of black panties."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Dong Hammock", desc: "a pair of panties that tries its best to smuggle your fruit."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Pink Panties", desc: "a pair of pink panties."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Skimpy Thong", desc: "a small thong."},
	{type: "underwearSub", price: 5, route: "dom", index: "panties", name: "Panties", desc: "a tight pair of white panties that have been altered to cradle your balls."},
	{type: "underwearSub", price: 5, route: "dom", index: "frilly", name: "Frilly Panties", desc: "a tight pair of frilly panties that have been altered to cradle your balls."},
	{type: "underwearSub", price: 5, route: "dom", index: "thong", name: "Packed Thong", desc: "an extremely tight thong that barely contains your flaccid dick."},
];

//Startup & Systems config

function startup() {
	generateHTML();
	saveSlot(11);
	wrapper.scrollTop = 0;
	if(localStorage.getItem('data10')) {
		loadSlot(10);
		//sceneTransition('start');
	}
	else{
		sceneTransition('start');
	}
}

function generateHTML() {
	//console.log("Now generating HTML foundation");
	document.getElementById('body').innerHTML = `
		<div id = "menu" class = "menu">
			<div id="titlePanel">
				<p id = "title" class = "title">Human Alteration App</p>
				<div id="closeButton" class="closeButton" onclick="closeButton()"><</div>
				<p id = "version" class = "version">V1.1</p>
				<p id = "author">
					<a href="https://noodlejacuzzi.github.io/index.html">Noodle Jacuzzi</a><br>
					<a href="https://www.patreon.com/noodlejacuzzi">Patreon</a>
				</p>
			</div>
			<div id="buttonMenu">
				<div id="buttonMenuPrimary" class="gridButtons">
				</div>
			</div>
			<div id="playerPanel" class="flexbox">
				<img id="playerImage" class="playerImage" src="scripts/gamefiles/none.png">
				<div id="playerStats">
					<h3 id = "playerName" class = "char_player version">???</h3>
					<p id = "playerMoney" class = "version">$0</p>
				</div>
				<div id="corruptionList">
				</div>
			</div>
		</div>
		<div id="openButton" class="openButton" onclick="openButton()">></div>
		<div id = "wrapper" class = "wrapper">
			<div id="wrapperBG"></div>
			<div id = "output" class = "output">
			<div class="loader"></div> 
			</div>
			<div id="footer" class="footer">
			</div>
		</div>
		<div id = "windowHolder" class = "windowHolder">
		</div>
	`;
	updateMenu();
}

function disablePictures() {
	if (picturesDisabled == false) {
		picturesDisabled = true;
		updateMenu();
		writeText("<i>Images disabled. No further images aside from navigation and dialogue profiles will appear.</i>");
	}
	else {
		location.reload();
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(11);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Character functions

function addFlag(character, flag) {
	console.log(character+flag);
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			console.log('adding the flag named '+flag+' to '+character);
			data.story[flagIndex].flags += flag;
		}
	}
}

function removeFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == true) {
				console.log('Removing flag '+flag+' from '+character);
				data.story[flagIndex].flags = data.story[flagIndex].flags.replace(flag, "");
			}
			else {
				console.log('error! flag '+flag+' not found!');
			}
		}
	}
}

function checkFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}

//Scene creation
function printFunctionButton(type, name, top, left, target) {
	switch (type) {
		case "location": {
			var func = `changeLocation("`;
			break;
		}
		case "encounter": {
			var func = `sceneTransition("`;
			break;
		}
	}
	switch (data.player.menu) {
		case "lobotomy": {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='`+func+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%; border: 3px solid; border-radius: 0px;">`+name+`</div>
			`;
			break;
		}
		case "persona": {
			var ransomStringStart = name;
			ransomStringStart = ransomStringStart.toLowerCase();
			ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
			console.log(ransomStringStart);
			var ransomStringEnd = "";
			if (ransomStringStart.charAt(2) == "g" || ransomStringStart.charAt(2) == "v") {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 1:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(5deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					console.log(ransomStringEnd);
					ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			else {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 1:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(-15deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					//console.log(ransomStringEnd);
						ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButtonPersona" onclick='`+func+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+ransomStringEnd+`</div>
			`;
			break;
		}
		default: {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='`+func+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+replaceCodenames(name)+`</div>
			`;
		}
	}
}

function printEncounterTab(character, scene, text, altName, altImage, altColor) {
	console.log("Now generating tab for " + character + ", linking to scene " + scene + " with the text " + text + " " +altImage);
	writeSpeech(character, altImage, `
	<p class="switch" onclick="sceneTransition('`+scene+`')">` + replaceCodenames(text) + `</p>`,
	altName, altColor);
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
		//Check for requirements
		var requirements = checkRequirements(lines[lineCounter]);
		//If the line is not empty (we don't want to print empty lines)
		if (lines[lineCounter] != "" && requirements != false) {
			//Grab the first word of the line to use as the command
			var command = lines[lineCounter].replace(/ .*/,"");
			//Depending on which command, execute different code. Convert the command to lowercase as well in case we used Sp instead of sp, as js is case-sensitive.
			switch (command.toLowerCase()) {
				//If the command is "t"
				case "t": {
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					//Execute the writeText command to print everything left to the screen.
					writeText(lines[lineCounter]);
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
					writeSpeech(name, image, lines[lineCounter], altName, altColor);
					break;
				}
				case "im": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; cap" is in our code we want to attach a caption to our image. Otherwise leave the caption blank.
					if (lines[lineCounter].includes("; cap")) {
						var caption = lines[lineCounter].split(`cap `).pop().split(`;`)[0];
					}
					else {
						var caption = "";
					}
					//Bring up the image on screen. Since we aren't printing the line itself we don't need to clean it by removing commands.
					writeBig(location, caption);
					break;
				}
				case "b": {
					//Get the label of our button
					var name = lines[lineCounter].split(`b `).pop().split(`;`)[0];
					//Get the function we want our button to perform
					var func = lines[lineCounter].split(`f `).pop().split(`;`)[0];
					//If "; arg" is in our code we want the function to have a special argument. Otherwise leave the argument section blank.
					if (lines[lineCounter].includes("; arg")) {
						var argument = lines[lineCounter].split(`arg `).pop().split(`;`)[0];
					}
					else {
						var argument = "";
					}
					//Write the button to the screen using the information we've collected.
					writeFunction(func+"('"+argument+"')", name)
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

function writeText(text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 20px 200px;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='rawText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeCenteredText(text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 20px 200px;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + replaceCodenames(text) + `</p>
	`;
}

function writeSpeech (name, img, text, altName, altColor) {
	var finalName = "";
	var finalImg = "";
	var finalColor = "";
	var checkForError = "";
	//If the player is using a shortcut...
	//Check for pervert mode
	if (data.player.pervert == true) {
		var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`P.jpg'"`;
		finalImg = finalImg.replace('.jpg', 'P.jpg');
	}
	//Check if a transparent shot should be used
	if (data.player.style == "persona" || data.player.style == "royalty") {
		var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`.jpg'"`;
		finalImg = finalImg.replace('P.jpg', '.jpg');
		finalImg = finalImg.replace('.jpg', 'T.png');
	}
	//Search the data variable for if a shortcut was used
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			finalName = data.story[i].name;
			if (img == "") {
				finalImg = "scripts/gamefiles/profiles/"+name+data.story[i].outfit+".jpg";
			}
			else {
				finalImg = img;
			}
		}
	}
	for (i = 0; i < logbookArray.length; i++) {
		if (logbookArray[i].index == name) {
			finalColor = logbookArray[i].color;
		}
	}
	//If the name is player, use the player's details
	if (name == "player") {
		finalImg = "scripts/gamefiles/profiles/" + data.player.body + data.player.image +".jpg";
		finalName = data.player.name;
		switch (data.player.color) {
			case null:
			case "":
			data.player.color = "#86b4dc"
			default:
			finalColor = data.player.color;
		}
	}
	if (img == "none") {
		finalImg = "images/none.png";
	}
	//HIDDEN shortcut for crypto to mask the name of the character
	if (text.includes("HIDDEN") == true) {
		finalName = "???";
		text = text.replace("HIDDEN", "");
	}
	//Check if an alternate final color should be used.
	if (altColor != null && altColor != "") {
		finalColor = altColor;
	}
	//Check if an alternate final name should be used.
	if (altName != null && altName != "") {
		finalName = altName;
	}
	console.log("Now printing speech. Character is "+finalName+", color is"+finalColor+", image is "+finalImg);
	//Output the speech in the assigned style.
	switch (data.style.dialogue) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxLobotomy" style="border-color: `+finalColor+`;
			background: linear-gradient(90deg, 
			#000000 10px, 
			`+finalColor+` 10px, 
			`+finalColor+` 210px, 
			#000000 210px);">
				<div class = "lobotomyThumb" style="background-color: `+finalColor+`">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ finalImg +`
						"`+checkForError+`>
					</div>
					<p class = "textNameLobotomy">`+ finalName + `</p>
				</div>
				<div class="textBoxContentLobotomy">
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxRoyalty">
				<div class = "royaltyThumb">
					<div class = "royaltyImageHolder">
						<img class = "textThumbRoyalty" style="
							position:absolute;
							-webkit-filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);
							filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);"
						src = "`+finalImg+`"`+checkForError+`>
						<img class = "textThumbRoyalty" src = "`+finalImg+`"`+checkForError+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+finalColor+`;">
						<p class = "textNameRoyalty" style = "color:`+finalColor+`;">`+finalName+`</p>
					</div>
				</div>
				<div class="textBoxContentRoyalty">
					<div class="dialogueBoxRoyalty" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxPersona">
				<div class = "personaThumb">
					<img class = "textThumbPersona" src = "`+finalImg+`"`+checkForError+`>
				</div>
				<div class="textBoxContentPersona">
					<div class="nameBoxPersona">
						<p class = "textNamePersona" style = "color:`+finalColor+`">`+ finalName + `</p>
						<div class="textNamePersonaWhite" style = "border-color:`+finalColor+`"></div>
						<div class="textNamePersonaBlack"></div>
						<div class="personaNameArrow"></div>
						<div class="personaNameArrowShadow" style = "border-right-color:`+finalColor+`"></div>
					</div>
					<div class="dialogueBoxPersona" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML +=`
			<div class="textBox" style="border-color: `+finalColor+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+finalColor+`" src = "
					`+ finalImg +`
				"`+checkForError+`>
				<div class="textBoxContent">
				<p class = "textName" style="color:`+finalColor+`">`+ finalName + `</p>
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
		}
	}
}

function writeBig (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			img = img.replace('profile', 'profileP');
			//console.log(img);
		}
	}
	if (picturesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="bigPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
			<br>
		`;
	}
}

function writeMed (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			img = img.replace('profile', 'profileP');
			//console.log(img);
		}
	}
	if (picturesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
			<br>
		`;
	}
}

function writeFunction (name, func) {
	console.log("printing button labelled "+func+" that onclick triggers "+name);
	switch (data.style.choices) {
		case "lobotomy": {
			var skewNumber = getRandomInt(8);
			skewNumber -= 4;
			var borderNumber = getRandomInt(2) + 3;
			var rotationNumber = getRandomInt(2) -1;
			if (skewNumber >= 0) {
				skewNumber += getRandomInt(3);
			}
			if (skewNumber <= 0) {
				skewNumber -= getRandomInt(3);
			}
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			var rotationReverse = rotationNumber - rotationNumber - rotationNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFrameLobotomy" 
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
				border: solid `+borderNumber+`px;
			">
			<p class="choiceTextLobotomy" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			onclick="` + name + `">
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		case "persona": {
			var skewNumber = 5;
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFramePersona" onclick="` + name + `"
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
			">
			<p class="choiceTextPersona" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			>
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="` + name + `">
					` + replaceCodenames(func) + `
				</p>
			`;
		}
	}
}

function writeAddendum(n) {
	console.log(n);
	var paras = document.getElementsByClassName('choiceText');
	while(paras[0] != null) {
		paras[0].parentNode.removeChild(paras[0]);
	}
	writeScene(n);
}

function credits() {
	
}

function sceneTransition(scene) {
	wrapper.scrollTop = 0;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	saveSlot(10);
}

//Creating & Deleting windows

function deleteWindow() {
	activeWindow = "";
	document.getElementById('windowHolder').innerHTML = ``;
}

function generateWindow(type) {
	activeWindow = type;
	document.getElementById('windowHolder').innerHTML = `
	<div class = 'windowBackdrop' onclick = 'deleteWindow()'>
		<div id = 'window' class = 'popup' onclick="event.stopPropagation()"></div>
	</div>
	`;
	switch (type) {
		case "string": {
			document.getElementById('window').innerHTML += `
			<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
			<div id = "windowList" class="saveList">
			<p>Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.</p>
			<p>`+JSON.stringify(data)+`</p>
			<p class="choiceText" onclick="generateWindow('save')">
				Finished copying
			</p>
			</div>`;
			break;
		}
		case "save": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
				<div id = "windowList" class="saveList">
				</div>
			`;
			for (saveCounter = 1; saveCounter < 9; saveCounter++) {
				document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save`+saveCounter+`Name" class = "saveName">Slot `+saveCounter+`</p>
					<p id = "save`+saveCounter+`Date" class = "saveDate"></p>
					<p id = "load`+saveCounter+`Button" class = "loadButton button" onclick = "loadSlot(`+saveCounter+`)"></p>
					<p id = "delete`+saveCounter+`Button" class = "deleteButton button" onclick = "deleteSlot`+saveCounter+`)"></p>
					<p id = "save`+saveCounter+`Button" class = "saveButton button" onclick = "saveSlot(`+saveCounter+`)">SAVE</p>
				</div>
				`;
			}
			document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Manual</p>
					<!-- <p id = "load9Button" class = "loadFileButton button" onclick = "loadFile()">Load from text string</p>
					<!-- <p id = "delete9Button" class = "deleteButton button" onclick = "deleteSlot(9)"></p> -->
					<!-- <p id = "save9Button" class = "saveFileButton button" onclick = "saveFile()">Save to text string</p> -->
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveToFile()">Save to .txt file</p>
					<input type="file" id="loadFile" onload="fileLoaded()" class = "loadFileButton button" onchange = "loadSave()"></input>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">String</p>
					<p id = "load9Button" class = "loadFileButton button" onclick = "loadString()">Load from text string</p>
					<!-- <p id = "delete9Button" class = "deleteButton button" onclick = "deleteSlot(9)"></p> -->
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveString()">Save to text string</p>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Auto</p>
					<p class = "loadFileButton button" onClick="window.location.reload();">The game autosaves regularly. Refresh the page to load the autosave anytime.</p>
				</div>
			`;
			generateSave();
			break;
		}
		case "inventory": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">Inventory</h1>
				<div id = "gridInventory" class="gridInventory">
				</div>
			`;
			for (i = 0; i < data.inventory.length; i++) {
				if (data.inventory[i].type.includes("clothes") != true) {
					document.getElementById('gridInventory').innerHTML += `
					<div class = "item">
						<p class = "itemName">`+data.inventory[i].name+`</p>
						<img class ="itemImage" src="scripts/gamefiles/items/`+data.inventory[i].index+`.jpg">
					<div>
					`;
				}
			}
			break;
		}
		case "logbook": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">LOGBOOK</h1>
				<div class = "windowLeft" id = "windowLeft">
				</div>
				<div class = "windowRight" id = "windowRight">
				</div>
			`;
			generateNav();
			break;
		}
		case "settings": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SETTINGS</h1>
				<div class = "windowLeft" id = "windowLeft">
				</div>
				<div class = "windowRight" id = "windowRight">
				</div>
			`;
			break;
		}
		case "wardrobe": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">Inventory</h1>
				<div id = "gridInventory" class="gridInventory">
				</div>
			`;
			var playerBody = data.player.body.charAt(0).toUpperCase() + data.player.body.substring(1);
			for (i = 0; i < data.inventory.length; i++) {
				if (data.inventory[i].type.includes("clothes") && data.inventory[i].type.includes(playerBody)) {
					document.getElementById('gridInventory').innerHTML += `
					<div class = "item" onclick="changeClothes('`+data.inventory[i].index+`')">
						<p class = "itemName">`+data.inventory[i].name+`</p>
						<img class ="itemImage" src="`+data.inventory[i].image+`">
					<div>
					`;
				};
			};
			break;
		}
	}
}

//Menu

function updateMenu() {
	//Update player name, image, color, money
	document.getElementById('playerName').innerHTML = data.player.name;
	document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";
	//document.getElementById('playerClothes').src = "images/clothes/"+data.player.clothing+".jpg";
	//Update corruption listfor (i = 0; i < data.story.length; i++) {
	document.getElementById('corruptionList').innerHTML = `
		<h3 class = "char_player version">Corruption</h3>
	`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].name != "???" && data.story[i].trust != 0) {
			document.getElementById('corruptionList').innerHTML += `<p>`+data.story[i].name+`: `+data.story[i].trust+`</p>`;
		}
	}
	//Update menu buttons
	document.getElementById('buttonMenu').innerHTML = `<div id="buttonMenuPrimary" class="gridButtons"></div>`;
	switch (data.style.menu) {
		default: {
			for (i = 0; i < menuArray.length; i++) {
				document.getElementById(menuArray[i].div).innerHTML += `
					<h4 id="`+menuArray[i].ID+`" class="button" onclick="`+menuArray[i].func+`">`+menuArray[i].name+`</h4>
				`;
			}
		}
	}
}

function changeBody(n) {
	data.player.body = n;
	changeImage("");
	switch (n) {
		case "man": 
			data.player.pronoun = "man";
		break;
		case "sissy": 
			data.player.pronoun = "woman";
		break;
		case "trans": 
			data.player.pronoun = "woman";
		break;
	}
}

function changeImage(n) {
	data.player.image = "";
	updateMenu();
	if(document.body.contains(document.getElementById('selfBig'))){
		document.getElementById('selfBig').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";
    }
}

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "35%";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Saving

function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	switch (data.player.route) {
		case "dom": {
			date = date.toDateString() + " " + date.toLocaleTimeString() + "<br>Dom Route";
			if (data.player.flags.includes("vegetarian") == true) {
				date += " (Vegetarian)";
			}
			break;
		}
		case "sub": {
			date = date.toDateString() + " " + date.toLocaleTimeString() + "<br>Sub Route";
			break;
		}
		default: {
			date = date.toDateString() + " " + date.toLocaleTimeString();
			break;
		}
	}
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	//deleteWindow();
	if (activeWindow == "save") {
		generateSave();
	}
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	if (data.player.location == "") {
		sceneTransition(data.player.currentScene);
	}
	else {
		changeLocation(data.player.location);
	}
	updateSave();
	deleteWindow();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function saveString() {
	deleteWindow();
	generateWindow("string");
}

function loadString() {
	var dataPlaceholder = prompt("Please paste the data", "");
	dataPlaceholder = JSON.parse(dataPlaceholder);
	if (dataPlaceholder == "") {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(111);
	}
	else {
		data = dataPlaceholder;
		updateSave();
		saveSlot(110);
		loadSlot(110);
	}
}

function saveToFile() {
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
    var textFileAsBlob = new Blob([JSON.stringify(data)], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = "HAA "+date+".noodle";
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

//Load from .noodle
const fr = new FileReader();
fr.addEventListener("load", fileLoaded);

function loadSave(){
	console.log("test");
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
	if (fakedata.player.name == null) {
		alert("Whoa there! I don't think that's a Human Alteration App save file! If it is, be sure to let me (Noodlejacuzzi) know and I'll help you out.");
	}
	else {
		data = fakedata;
		console.log("success!");
		//changeLocation(data.player.location);
	}
}

function generateSave() {
	for (i = 1; i < 9; i++) {
		var searchName = 'data' + i;
		//console.log(localStorage.getItem(searchName));
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
	if (typeof data.story.version == 'undefined') {
		if (typeof data.player.version == 'undefined') {
			if (data.story.route == "sub") {
				data.galleryArray[2].name = "Loving Milk-Tank";
				data.galleryArray[5].name = "Punishment";
				data.galleryArray[6].name = "Tokyo Pop";
				data.galleryArray[6].hint = 'Talk to her after learning about the Tokyo Pop filming and after completing the event "Punishment".'
				data.galleryArray[10].name = "True Romance";
				data.galleryArray[14].hint = 'Corruption level 3. Talk to her during the day with a Plug Pop.'
				data.galleryArray[15].name = "Sounding";
				data.galleryArray[15].hint = 'Corruption level 3. Talk to her during the day with a Stretchy Taffy.'
				data.galleryArray[16].name = "Fisting";
				data.galleryArray[16].hint = 'Corruption level 4. Talk to her during the day.'
				data.galleryArray[24].hint = "Corruption level 3. Talk to her during the day with a Pop Rock.";
				data.galleryArray[25].hint = "Corruption level 4. Talk to her during the day.";
				data.galleryArray[3].name = "REMOVED";
				data.galleryArray.splice(3, 1);
				data.galleryArray.splice(10, 1);
				data.galleryArray.splice(15, 1);
				data.galleryArray.splice(18, 1);
				data.galleryArray.splice(22, 1);
			}
			else {
				data.galleryArray.splice(31, 1);
			}
			data.story.version = 0.7;
			console.log("Updating save to version 0.7");
		}
	}
	if (data.story.version == 0.7) {
		if (data.story.route == "sub") {
			var office4 = {index: 'office4S', name: "Public Punishment", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'};
			var sister4 = {index: 'sister4S', name: "New Toy", unlocked: false, hint: 'Talk to her after triggering the event "Student Teacher Dynamic".'};
			var sister5 = {index: 'sister5S', name: "Pushing Limits", unlocked: false, hint: 'Talk to her after triggering the event "New Toy".'};
			data.galleryArray.push(office4);
			data.galleryArray.push(sister4);
			data.galleryArray.push(sister5);
			data.story.freeSample = false;
			data.galleryArray[14].name = "Student Teacher Dynamic";
		}
		data.story.version = 0.75;
		console.log("Updating save to version 0.7.5");
	}
	if (data.story.version == 0.75) {
		if (data.story.route == "dom") {
			data.galleryArray.splice(41, 5);
		}
		if (data.story.route == "sub") {
			console.log(data.galleryArray[35].index);
			console.log(data.galleryArray[26].index);
			data.galleryArray.splice(35, 5);
			data.galleryArray.splice(26, 4);
		}
		data.story.version = 0.8;
		console.log("Updating save to version 0.8");
		alert("Older version save data detected. Your save data has been automatically updated for version 0.8");
	}
	if (data.story.version == 0.8) {
		console.log("ver 1.0 save detected, updating");
		var newSaveContainer = {
			player: {
				name: "You",
				body: "male",
				pronoun: "man",
				image: "",
				clothing: "menShorts",
				underwear: "boxers",
				version: 1,
				currentScene: "start",
				location: "",
				time: "Afternoon",
				money: 20,
				route: "dom",
				skill: 0,
				flags: "",
				color: "#86b4dc",
				pervert: false,
			},
			style: {
				dialogue: "basic",
				menu: "basic",
				choices: "basic",
				font: "basic",
				imageSize: 1,
				fontSize: 1,
			},
			story: [
				{index: "mother", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "sister", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "friend", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "teacher", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "chef", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "office", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "exotic", name: "Adriana", trust: 0, outfit: "", flags: "",},
				{index: "clothes", name: "Danny", trust: 0, outfit: "", flags: "",},
				{index: "candy", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "bully", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "evil", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "camboi", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "neighbor", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "doll", name: "???", trust: 0, outfit: "", flags: "",},
			],
			inventory: [],
			gallery: [],
		}
		newSaveContainer.player.name = data.story.name;
		newSaveContainer.player.version = 1.0;
		newSaveContainer.player.currentScene = data.story.currentScene;
		newSaveContainer.player.money = data.story.money;
		newSaveContainer.player.route = data.story.route;
		newSaveContainer.player.skill = data.story.skill;
		newSaveContainer.story[0].name = data.story.motherName;
		newSaveContainer.story[0].trust = data.story.motherScore;
		newSaveContainer.story[1].name = data.story.sisterName;
		newSaveContainer.story[1].trust = data.story.sisterScore;
		newSaveContainer.story[2].name = data.story.friendName;
		newSaveContainer.story[2].trust = data.story.friendScore;
		newSaveContainer.story[3].name = data.story.teacherName;
		newSaveContainer.story[3].trust = data.story.teacherScore;
		newSaveContainer.story[4].name = data.story.chefName;
		newSaveContainer.story[4].trust = data.story.chefScore;
		newSaveContainer.story[5].name = data.story.officeName;
		newSaveContainer.story[5].trust = data.story.officeScore;
		if (data.story.candyVisited == true) {
			newSaveContainer.story[7].name = "Gina";
			newSaveContainer.story[7].outfit = "Gina";
			setTrust('clothes', 1);
		}
		switch (data.story.bodytype) {
			case 0: 
				newSaveContainer.player.body = "";
			break;
			case 1: 
				newSaveContainer.player.body = "male";
				newSaveContainer.player.clothing = "menShorts";
				newSaveContainer.player.underwear = "boxers";
			break;
			case 2: 
				newSaveContainer.player.body = "boi";
				newSaveContainer.player.clothing = "sissy";
				newSaveContainer.player.underwear = "regular5";
			break;
			case 3: 
				newSaveContainer.player.body = "trans";
				newSaveContainer.player.pronoun = "woman";
				newSaveContainer.player.clothing = "blue";
				newSaveContainer.player.underwear = "regular7";
			break;
			case 4: 
				newSaveContainer.player.body = "sub";
				newSaveContainer.player.clothing = "dress";
				newSaveContainer.player.underwear = "panties";
			break;
		}
		if (data.story.popRocks > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "popRocks") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.caramelMelts > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "caramelMelts") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.plugPop > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "plugPop") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.stretchTaffy > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "stretchTaffy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.fruitGushers > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "fruitGushers") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.vrMachine == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "vrMachine") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.laptop == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "laptop") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.creamer == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "creamer") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.doll == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "doll") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.toy == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "adultToy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.horse == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "horseToy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.onahole == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "onahole") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.clothingTicket == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "clothingTicket") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.candyTicket == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "candyTicket") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.clothingArray.length; oldIndex++) {
			if (data.clothingArray[oldIndex].owned == true) {
				for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
					if (data.clothingArray[oldIndex].name == shopArray[itemIndex].name) {
						var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
						newSaveContainer.inventory.push(addedItem);
					}
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.underwearArray.length; oldIndex++) {
			if (data.underwearArray[oldIndex].owned == true) {
				for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
					if (data.underwearArray[oldIndex].name == shopArray[itemIndex].name) {
						var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
						newSaveContainer.inventory.push(addedItem);
					}
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.galleryArray.length; oldIndex++) {
			//console.log("Scene detected. Unlocked status is "+data.galleryArray[oldIndex].unlocked);
			if (data.galleryArray[oldIndex].unlocked == true) {
				for (newIndex = 0; newIndex < galleryArray.length; newIndex++) {
					if (galleryArray[newIndex].index == data.galleryArray[oldIndex].index) {
						var newScene = {index: galleryArray[newIndex].index, name: galleryArray[newIndex].name};
						newSaveContainer.gallery.push(newScene);
					}
				}
			}
		}
		if (data.story.exoticVisited == true) {
			newSaveContainer.player.flags += "exoticVisited";
		}
		if (data.story.clothingVisited == true) {
			newSaveContainer.player.flags += "clothingVisited";
		}
		if (data.story.laptopSetup == true) {
			newSaveContainer.player.flags += "laptopSetup";
		}
		data = newSaveContainer;
	}
}

//Gallery

function generateGallery() {
	//Go through the characters
	for (storyIndex = 0; storyIndex < data.story.length; storyIndex++) {
		//If the character has a name
		if (data.story[storyIndex].name != "???") {
			//Output their image for easier navigation
			writeBig("scripts/gamefiles/characters/"+data.story[storyIndex].index+data.story[storyIndex].outfit+".jpg");
			//Go through the gallery
			for (galleryIndex = 0; galleryIndex < galleryArray.length; galleryIndex++) {
				//If the relevant gallery scene is for the character
				if (galleryArray[galleryIndex].index.includes(data.story[storyIndex].index) == true) {
					if (galleryCheck(galleryArray[galleryIndex].index) == true) {
						console.log("scene found, now printing");
						writeFunction("writeEvent(galleryArray[galleryIndex].index)", galleryArray[galleryIndex].name);
					}
				}
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
	document.getElementById('windowLeft').innerHTML = ``;
	document.getElementById('windowLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('player')">` + data.player.name + `</h3>`;
	//Go through the characters
	for (storyIndex = 0; storyIndex < data.story.length; storyIndex++) {
		//If the character has a name
		if (data.story[storyIndex].name != "???") {
			document.getElementById('windowLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('`+data.story[storyIndex].index+`')">` + data.story[storyIndex].name + `</h3>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (picturesDisabled == true) {
		document.getElementById('windowRight').innerHTML =``;
	}
	else {
		document.getElementById('windowRight').innerHTML = `
			<img id="selfImage" class="selfImage" src="images/none.png">
			<br>
		`;
	}
	//console.log(n);
	if (n == "player") {
		document.getElementById('windowRight').innerHTML += `
			<p class = "selfDesc">
				<span id = "selfBody">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfLips">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfSkin">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "ifNaked">
				<span id = "selfClothes">BODY DESCRIPTION</span>
					<br> <br>
				<span id = "selfUnderwear">BODY DESCRIPTION</span>
				</span>
				<br> <br>
				<span id = "selfChest">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfButt">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfJunk">BODY DESCRIPTION</span>
			</p>
		`;
	}
	else {
		document.getElementById('windowRight').innerHTML += `
			<p class = "selfDesc">
				<span id = "otherName">Name: Kendra</span>
				<br> <br>
				<span id = "otherCorruption">Corruption: 0</span>
				<br> <br>
				<span id = "otherStatus">Status: Single Mother</span>
				<br> <br>
				<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
				<br> <br>
				<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
				<br> <br>
				<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
				<br> <br>
			</p>
		`;
	}
	generateSelf(n);
}

function generateSelf(n) {
	if (n != "player") {
		for (storyIndex = 0; storyIndex < data.story.length; storyIndex++) {
			//If the character has a name
			if (data.story[storyIndex].index == n) {
				var logbookDetailHolder = data.story[storyIndex];
			}
		}
		document.getElementById('otherName').innerHTML = "Name: " +logbookDetailHolder.name;
		document.getElementById('otherCorruption').innerHTML = "Corruption: " +  logbookDetailHolder.trust;
		if (data.player.route == "dom") {
			for (detailIndex = 0; detailIndex < detailDomArray.length; detailIndex++) {
				//If the character has a name
				if (detailDomArray[detailIndex].index == n) {
					var conditionsMet = true;
					if (detailDomArray[detailIndex].requirements.includes("?trust ")) {
						var check = detailDomArray[detailIndex].requirements.split(`?trust `+n+` `).pop().split(`;`)[0];
						//console.log(check);
						if (checkTrust(n) < check) {
							conditionsMet = false;
						}
					}
					if (detailDomArray[detailIndex].requirements.includes("?outfit ")) {
						var check = detailDomArray[detailIndex].requirements.split(`?outfit `).pop().split(`;`)[0];
						//console.log(check);
						if (logbookDetailHolder.outfit != check) {
							conditionsMet = false;
						}
					}
					if (detailDomArray[detailIndex].requirements.includes("?flag player ")) {
						var check = detailDomArray[detailIndex].requirements.split(`?flag player `).pop().split(`;`)[0];
						//console.log(check);
						if (data.player.flags.includes(check) != true) {
							conditionsMet = false;
						}
					}
					if (conditionsMet == true) {
						//console.log("conditions met for "+detailDomArray[detailIndex].desc);
						document.getElementById(detailDomArray[detailIndex].element).innerHTML = detailDomArray[detailIndex].desc;
					}
				}
			}
			document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+logbookDetailHolder.index+logbookDetailHolder.outfit+".jpg";
		}
		else {
			for (detailIndex = 0; detailIndex < detailSubArray.length; detailIndex++) {
				//If the character has a name
				if (detailSubArray[detailIndex].index == n) {
					var conditionsMet = true;
					if (detailSubArray[detailIndex].requirements.includes("?trust ")) {
						var check = detailSubArray[detailIndex].requirements.split(`?trust `+n+` `).pop().split(`;`)[0];
						//console.log(check);
						if (checkTrust(n) < check) {
							conditionsMet = false;
						}
					}
					if (detailSubArray[detailIndex].requirements.includes("?outfit ")) {
						var check = detailSubArray[detailIndex].requirements.split(`?outfit `).pop().split(`;`)[0];
						//console.log(check);
						if (logbookDetailHolder.outfit != check) {
							conditionsMet = false;
						}
					}
					if (detailSubArray[detailIndex].requirements.includes("?flag player ")) {
						//console.log("test");
						var check = detailSubArray[detailIndex].requirements.split(`?flag player `).pop().split(`;`)[0];
						//console.log(check);
						if (data.player.flags.includes(check) != true) {
							conditionsMet = false;
						}
					}
					if (conditionsMet == true) {
						//console.log("conditions met for "+detailSubArray[detailIndex].desc);
						document.getElementById(detailSubArray[detailIndex].element).innerHTML = detailSubArray[detailIndex].desc;
					}
				}
			}
			document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+logbookDetailHolder.index+"sub.jpg";
		}
	}
	switch (n) {
		case "player": {
			switch (data.player.body) {
				case "null":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body0.jpg`)'>regular looking guy</span> without any stand-out features.";
				break;
				case "male":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body1.jpg`)'>good-looking guy</span> with a strong jawline and a muscular figure.";
				break;
				case "sissy":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body2.jpg`)'>petite boy</span> who could effortlessly pass for a girl.";
				break;
				case "trans":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body3.jpg`)'>tall, leggy woman</span> in everything but what you keep in your pants.";
				break;
				case "sub":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/drawn/aya/player.jpg`)'>short, busty boy</span> who looks like a girl in <i>nearly</i> every aspect.";
				break;
			}
			switch (data.player.body) {
				case "sissy":
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips2.jpg`)'>kissable pink lips</span>";
				break;
				case "trans":
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips6.jpg`)'>pillowy lips</span> that have gotten you quite a few longing glances.";
				break;
				case 3:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips5.jpg`)'>fat, fuckable lips</span> which form an o-shape when you're not speaking.";
				break;
				default:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips1.jpg`)'>unassuming pink lips</span>";
			}
			if (data.story.route == "sub") {
					document.getElementById('selfLips').innerHTML = "You have a pair of soft, pink lips. Rubbing your finger over them feels nice and soothing.";
			}
			switch (data.player.body) {
				case "null":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin1.jpg`)'>pale</span> and occasionally itchy.";
				break;
				case "male":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin3.gif`)'>tough, but well-groomed and cared for.</span>";
				break;
				case "sissy":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin2.gif`)'>hairless and completely smooth.</span> You find yourself running your hands along it when you have a free moment.";
				break;
				case "trans":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin5.jpg`)'>hairless and completely smooth.</span> Women and men alike would love to run their tongue along it.";
				break;
				case "sub":
					document.getElementById('selfSkin').innerHTML = "Your skin is hairless and completely smooth. As you move the feeling of your clothes on your body makes you feel a little tingly. Maybe after getting used to it the sensations will fade into the background.";
				break;
			}
			switch (data.player.body) {
				case "male":
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM1.jpg`)'>tight butt</span>, the result of a good diet and regular exercise.";
				break;
				case "sissy":
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM4.jpg`)'>plump booty</span>, enough to turn heads on the street.";
				break;
				case "trans":
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/butt3.gif`)'>round ass</span>, which people (and you) need to consciously hold back from slapping.";
				break;
				case 4:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/butt8.gif`)'>fuckable ass</span>, the sort of which men would sell their daughter to taste.";
				break;
				case 5:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM5.jpg`)'>gigantic ass</span>, enough to make a man believe in god.";
				break;
				default:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM2.jpg`)'>decently tight butt</span>, the result of doing squats every other day.";
			}
			if (data.story.route == "sub") {
					document.getElementById('selfButt').innerHTML = "You have an admittedly impressive ass. Your sister clearly has a specific taste in women.";
			}
			switch (data.player.body) {
				case "null":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk1.jpg`)'>unassuming penis</span>, a little on the shorter side, isn't causing a commotion right now.";
				break;
				case "male":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk4.jpg`)'>imposing dick</span> is enough to dampen underwear on sight.";
				break;
				case "sissy":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk5.jpg`)'>adorable little penis</span> is flaccid at the moment. When your aroused though, it can grow up to 8 inches.";
				break;
				case "trans":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/skin5.jpg`)'>fat, bitch-breaking cock</span> is constantly trying to break free of your clothes.";
				break;
				case "sub":
					document.getElementById('selfJunk').innerHTML = "Your penis is snuggly tucked away. You can certainly get aroused and grow larger, but trying to get yourself off is a fruitless endeavor. It seems like anal might be your only option for awhile.";
				break;
			}
			switch (data.player.body) {
				case "sissy":
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs2.gif`)'>soft, a-cup breasts</span>.";
				break;
				case 2:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs3.gif`)'>perky, c-cup breasts</span>.";
				break;
				case "trans":
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs4.gif`)'>bouncy, D-cup breasts</span>.";
				break;
				case 4:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs7.gif`)'>fat, E-cup breasts</span>. With every movement they sway tantalisingly.";
				break;
				case 5:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs8.gif`)'>gigantic, F-cup breasts</span>. With every movement they threaten to burst from your shirt and expose you in public as a fat-titted whore.";
				break;
				default:
					document.getElementById('selfChest').innerHTML = "You have some <span class='selfSwitch' onclick='selfImage(`images/real/body/malebody.jpg`)'>decently strong pectoral muscles</span>.";
			}
			if (data.story.route == "sub") {
				document.getElementById('selfChest').innerHTML = "You have a surprisingly reserved bust. If you weren't quite so effeminate, your silhouette could probably pass for a boy's. That said, your nipples are incredibly sensitive. You might need to start wearing a bra to avoid them being visible through your clothes on a cold day.";
			}
			for (i = 0; i < shopArray.length; i++) {
				if (shopArray[i].index == data.player.clothing) {
					document.getElementById('selfClothes').innerHTML = `Right now you're wearing <span class='selfSwitch' onclick='selfImage("images/real/clothes/` + shopArray[i].index + `.jpg")'>` + shopArray[i].desc + `</span>`;
				}
			}
			for (i = 0; i < shopArray.length; i++) {
				if (shopArray[i].index == data.player.underwear) {
					document.getElementById('selfUnderwear').innerHTML = `Underneath that you're wearing <span class='selfSwitch' onclick='selfImage("images/real/clothes/` + shopArray[i].index + `.jpg")'>` + shopArray[i].desc + `</span>`;
				}
			}
			if (data.player.clothing == "nothing") {
				if (data.player.underwear == "nothing") {
					document.getElementById('ifNaked').innerHTML = "You're completely naked! Luckily the app has a clause protecting people from noticing."
				}
				else {
					document.getElementById('ifNaked').innerHTML = `All you're wearing right now is <span class='selfSwitch' onclick='selfImage("` + data.underwearArray[data.story.underwear].image + `")'>` + data.underwearArray[data.story.underwear].description + `</span>`;
				}
			}
			if (picturesDisabled != true) {document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";}
			if (data.story.route == "sub") {
				if (picturesDisabled != true) {document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";}
			}
			generateLogbookGallery('misc');
			//generateLogbookGallery('dream');
			break;
		}
	}
	generateLogbookGallery(n);
}

function selfImage(n) {
	document.getElementById('selfImage').src = n;
}

function generateLogbookGallery(n) {
	
}

//Inventory & shopping

function loadShop(n) {
	for (item = 0; item < shopArray.length; item++) {
		var finalResult = true;
		if (shopArray[item].type.includes("clothes") == true) {
			var playerBody = data.player.body.charAt(0).toUpperCase() + data.player.body.substring(1);
			if (shopArray[item].type.includes(playerBody) != true) {
				console.log(playerBody);
				finalResult = false;
			}
		}
		if (shopArray[item].type.includes("Lewd") == true) {
			if (checkTrust('clothes') < 1) {
				finalResult = false;
			}
		}
		if (finalResult == true) {
			if (shopArray[item].type.includes(n) == true) {
				if (checkItem(shopArray[item].name) != true) {
					console.log("generating item "+ item + ": " + shopArray[item].name + shopArray[item].index + shopArray[item].desc +  shopArray[item].price);
					if (n.includes("clothes") != true) {
						var imageLocation = "scripts/gamefiles/items/";
					}
					else {
						var imageLocation = "images/real/clothes/";
					}
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+shopArray[item].index+`', `+shopArray[item].price+`)">
							<p class = "shopName">`+shopArray[item].name+`</p>
							<p class = "shopDesc">`+shopArray[item].desc+`</p>
							<p class = "shopPrice">$`+shopArray[item].price+`</p>
							<img class ="shopImage" src="`+imageLocation+shopArray[item].index+`.jpg">
						</div>
						<br>
					`;
				}
			}
		}
	}
}

function purchaseEventTab(name, img, price, desc) {
	document.getElementById('output').innerHTML += `
		<div class = "shopItem" onclick = "sceneTransition('`+name+`')">
			<p class = "shopName">`+name+`</p>
			<p class = "shopDesc">`+desc+`</p>
			<p class = "shopPrice">$`+price+`</p>
			<img class ="shopImage" src="`+img+`.jpg">
		</div>
		<br>
	`;
}

function purchase(index, price) {
	if (data.player.money >= price) {
		data.player.money -= price;
		flashMoney();
		updateMenu();
		buyItem(index);
	}
	changeLocation(data.player.location);
}

function buyItem(index) {
	for (buyItemIndex = 0; buyItemIndex < shopArray.length; buyItemIndex++) {
		if (shopArray[buyItemIndex].index == index) {
			var addedItem = {type: shopArray[buyItemIndex].type, index: shopArray[buyItemIndex].index, name: shopArray[buyItemIndex].name, desc: shopArray[buyItemIndex].desc};
			data.inventory.push(addedItem);
		}
	}
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function addItem(type, index, name) {
	var purchasedItem = {type: type, index: index, name: name};
	console.log(purchasedItem);
	data.inventory.push(purchasedItem);
}

function removeItem(n) {
	for (i = 0; i < data.inventory.length; i++) {
		if (data.inventory[i].name.includes(n)) {
			data.inventory.splice(i, 1);
			break;
		}
	}
}

function checkItem(n) {
	console.log("Checking for item ID " + n);
	for (x = 0; x < data.inventory.length; x++) {
		if (data.inventory[x].name.includes(n)) {
			console.log("Item id " + data.inventory[0].name + " is owned");
			return true;
			break;
		}
	}
	return false;
}

function generateInv() {
	clearInv();
	for (i = 0; i < data.inventory.length; i++) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">`+data.inventory[i].name+`</p>
			<img class ="itemImage" src="`+data.inventory[i].image+`">
		<div>
		`;
	}
}

function clearInv() {
	document.getElementById('windowLeft').innerHTML = ""
	document.getElementById('windowRight').innerHTML = ""
}

//Dungeon generation & calculations
function generateDungeonShop() {
	for (dungeonCounter = 0; dungeonCounter < data.dungeon.length; dungeonCounter++) {
		for (dungeonInnerCounter = 0; dungeonInnerCounter < dungeonArray.length; dungeonInnerCounter++) {
			if (data.dungeon[dungeonCounter].index == dungeonArray[i].index (
				var targetRoom = dungeonArray[i];
			)
		}
		writeHTML(`
			Room ID: `+targetRoom.index+`
		`);
	}
}