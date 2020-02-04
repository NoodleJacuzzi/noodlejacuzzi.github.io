//Establish variables
var saveName;
var invHidden = true;
var saveHidden = true;
var selfHidden = true;
var phoneHidden = true;
var imagesDisabled = false;
var ghostBoost = 0;
var requestType = "";
var eventName = "";
var eventCharacter = "";
var tabIndex;
var randNum;
var textStage = 0;
var galleryArray = [];
var itemArray = [];
var logbookArray = [];
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
		version: 6,
		location: "",
		pervert: false,
		color: "#86b4dc",
	},
	story: [
		{index: "mom", met: false, fName: "Emily", lName: "Smith", trust: 0, encountered: false, textEvent: "", color: "#CCCCCC",},
		{index: "kuro", met: false, fName: "Steph", lName: "Black", trust: 0, encountered: false, textEvent: "", color: "#fde1a5"},
		{index: "tomgirl", met: false, fName: "Sam", lName: "White", trust: 0, encountered: false, textEvent: "", color: "#a79e9a"},
		{index: "purple", met: false, fName: "Mary", lName: "Williams", trust: 0, encountered: false, textEvent: "", color: "#cb86ef"},
		{index: "chubby", met: false, fName: "Margaret", lName: "Williams", trust: 0, encountered: false, textEvent: "", color: "#da924b"},
		{index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "", color: "#CCCCCC"},
		{index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "", color: "#ed9082"},
		{index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "", color: "#7e52a3"},
		{index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "", color: "#e47311"},
		{index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "", color: "#888888"},
		{index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "", color: "#da924b"},
		{index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "", color: "#954655"},
		{index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "", color: "#677b4c"},
		{index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF"},
		{index: "nurse", fName: "Justine", lName: "Walton", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D756B"},
		{index: "housekeep", fName: "Anri", lName: "Ramona", trust: 0, encountered: false, textEvent: "", met: false, color: "#df5877", author: "CryptoGreek", artist: "Kinta no Mousou"},
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

var menuButtons = [
{ID: "invButton", name:"INVENTORY",},
{ID: "imgButton", name:"TOGGLE IMAGES",},
{ID: "phoneButton", name:"PHONE",},
{ID: "logButton", name:"LOGBOOK",},
{ID: "saveButton", name:"SAVE/LOAD",},
{ID: "restartButton", name:"RESTART",},
{ID: "mobButton", name:"MOBILE VERSION",},
{ID: "phoneButtonMobile", name:"PHONE",},
]

var ghostArray = [
	{name: "Ancient Chaplain", 		difficulty: 3, rarity: "01", time:"MorningEvening", top: 35, left: 20, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Ancient Titan Saturn", 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "beach", 
	description: ""},
	{name: "Antique Vision", 		difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "map", 
	description: ""},
	{name: "Anubis", 				difficulty: 1, rarity: "012", time:"MorningEvening", top: 10, left: 70, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Arbiter",			 	difficulty: 2, rarity: "012", time:"MorningEvening", top: 30, left: 90, requirement: 0, location: "apartmentOutside", 
	description: ""},
	{name: "Awoken Deus",		 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 5, location: "library", 
	description: ""},
	{name: "Awoken Cultist", 		difficulty: 4, rarity: "0", time:"MorningEvening", top: 40, left: 50, requirement: 0, location: "schoolEntrance", 
	description: ""},
	{name: "Bearington", 			difficulty: 10, rarity: "01234567", time:"MorningEvening", top: 40, left: 40, requirement: 0, location: "gym", 
	description: ""},
	{name: "Beetle", 				difficulty: 5, rarity: "0123", time:"MorningEvening", top: 60, left: 60, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Bloom", 				difficulty: 4, rarity: "45", time:"MorningEvening", top: 20, left: 0, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Blue Dahlia", 			difficulty: 4, rarity: "0123", time:"MorningEvening", top: 0, left: 10, requirement: 0, location: "schoolEntrance", 
	description: ""},
	{name: "Bronze Hound", 			difficulty: 3, rarity: "012", time:"MorningEvening", top: 30, left: 30, requirement: 0, location: "library", 
	description: ""},
	{name: "Cosmic Guide",		 	difficulty: 3, rarity: "345", time:"MorningEvening", top: 50, left: 50, requirement: 0, location: "library", 
	description: ""},
	{name: "Cupid", 				difficulty: 4, rarity: "67", time:"MorningEvening", top: 20, left: 50, requirement: 0, location: "playerHouse", 
	description: ""},
	{name: "Deus Ex Machina", 		difficulty: 2, rarity: "23", time:"MorningEvening", top: 20, left: 40, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Director",			 	difficulty: 1, rarity: "345", time:"MorningEvening", top: 6, left: 20, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Echo", 					difficulty: 5, rarity: "67", time:"MorningEvening", top: 20, left: 20, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Father", 				difficulty: 2, rarity: "0123", time:"MorningEvening", top: 45, left: 30, requirement: 0, location: "northHallway", 
	description: ""},
	{name: "Flarecatcher", 			difficulty: 3, rarity: "012", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "westHallway", 
	description: ""},
	{name: "Flower Man", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top: 52, left: 10, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Flying Spaghetti Monster", 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 55, requirement: 5, location: "playerOffice", 
	description: ""},
	{name: "Frontier Vision",	 	difficulty: 2, rarity: "01234567", time:"MorningEvening", top: 73, left: 20, requirement: 5, location: "schoolMap", 
	description: ""},
	{name: "Gehennas", 				difficulty: 1, rarity: "67", time:"MorningEvening", top: 25, left: 35, requirement: 0, location: "westHallway", 
	description: ""},
	{name: "Grey", 					difficulty: 5, rarity: "4567", time:"MorningEvening", top: 50, left: 70, requirement: 0, location: "roof", 
	description: ""},
	{name: "Hare", 					difficulty: 3, rarity: "67", time:"MorningEvening", top: 0, left: 40, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Hauntings", 			difficulty: 4, rarity: "345", time:"MorningEvening", top: 10, left: 90, requirement: 0, location: "playerHouse", 
	description: ""},
	{name: "IFO", 					difficulty: 2, rarity: "345", time:"MorningEvening", top: 25, left: 0, requirement: 0, location: "apartmentOutside", 
	description: "An Identified Flying Object. It's a saucer, from another world."},
	{name: "Investigator", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top:10, left: 65, requirement: 0, location: "schoolEntrance", 
	description: ""},
	{name: "Iron Fey", 				difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 30, left: 85, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Ivory Fey", 			difficulty: 4, rarity: "01", time:"MorningEvening", top: 20, left: 50, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Jester", 				difficulty: 2, rarity: "012", time:"MorningEvening", top: 100, left: 0, requirement: 0, location: "playerHouse", 
	description: ""},
	{name: "Kappa", 				difficulty: 4, rarity: "67", time:"MorningEvening", top: 30, left: 40, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Karma's Head", 			difficulty: 2, rarity: "67", time:"MorningEvening", top: 0, left: 30, requirement: 0, location: "street", 
	description: ""},
	{name: "Karma's Left Hand", 	difficulty: 2, rarity: "67", time:"MorningEvening", top: 0, left: 40, requirement: 0, location: "street", 
	description: ""},
	{name: "Karma's Right Hand", 	difficulty: 2, rarity: "67", time:"MorningEvening", top: 0, left: 20, requirement: 0, location: "street", 
	description: ""},
	{name: "Laid Foundation", 		difficulty: 4, rarity: "012345", time:"MorningEvening", top: 60, left: 60, requirement: 0, location: "street", 
	description: ""},
	{name: "Lime Man", 				difficulty: 4, rarity: "345", time:"MorningEvening", top: 33, left: 10, requirement: 0, location: "westHallway", 
	description: ""},
	{name: "Loyalty", 				difficulty: 2, rarity: "45", time:"MorningEvening", top: 60, left: 0, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Macabula", 				difficulty: 3, rarity: "4567", time:"MorningEvening", top: 20, left: 20, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Mad Clown", 			difficulty: 4, rarity: "012345", time:"MorningEvening", top: 10, left: 40, requirement: 0, location: "shoppingDistrict", 
	description: ""},
	{name: "Maiden in Black", 		difficulty: 1, rarity: "67", time:"MorningEvening", top: 40, left: 35, requirement: 0, location: "apartmentOutside", 
	description: ""},
	{name: "Maudlin", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 40, left: 20, requirement: 0, location: "shoppingDistrict", 
	description: "The archetypal ghost."},
	{name: "Maudlos", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 30, left: 40, requirement: 5, location: "", 
	description: "The archetypal ghost 2."},
	{name: "Megalodon", 			difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "pool", 
	description: ""},
	{name: "Moriarty", 				difficulty: 2, rarity: "23", time:"MorningEvening", top: 60, left: 60, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Myconid", 				difficulty: 4, rarity: "45", time:"MorningEvening", top: 43, left: 0, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Neptune Guardian", 	difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 100, left: 0, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Nyarlethotep", 			difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "ward", 
	description: ""},
	{name: "Offering of Valentine", difficulty: 5, rarity: "67", time:"MorningEvening", top: 50, left: 80, requirement: 0, location: "shoppingDistrict", 
	description: ""},
	{name: "Parasyte Apostle", 		difficulty: 2, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "ward", 
	description: ""},
	{name: "Parasyte Core", 		difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "ward", 
	description: ""},
	{name: "Phoenix", 				difficulty: 3, rarity: "0123", time:"MorningEvening", top: 10, left: 80, requirement: 0, location: "gym", 
	description: ""},
	{name: "Preacher", 				difficulty: 3, rarity: "45", time:"MorningEvening", top: 40, left: 80, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Priest of His Name", 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "", 
	description: "Give thanks to Him, uncaring, above! Don thy sacred headgear, strain thy heart to fight hypocrisy! Blessed thy be, touched by his noodly appendage!"},
	{name: "Psychic Grey", 			difficulty: 4, rarity: "67", time:"MorningEvening", top: 35, left: 0, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Radiance", 				difficulty: 0, rarity: "0123", time:"MorningEvening", top: 5, left: 40, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "Ramen Man", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top: 50, left: 20, requirement: 0, location: "vintageStreet", 
	description: "One of four men, guardians of virtues. Kindness is as valuable to him as accomplishment."},
	{name: "Reaper Cloth", 			difficulty: 2, rarity: "0123", time:"MorningEvening", top: 23, left: 80, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "Ruby Fey", 				difficulty: 4, rarity: "67", time:"MorningEvening", top: 40, left: 30, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Salvation", 			difficulty: 3, rarity: "0123", time:"MorningEvening", top: 20, left: 10, requirement: 0, location: "roof", 
	description: "When the core was taken from my body, a wonderful light embraced me. Empty as I was, I was finally free."},
	{name: "Saturn Guardian", 	difficulty: 2, rarity: "23", time:"MorningEvening", top: 15, left: 50, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Silverteeth", 			difficulty: 3, rarity: "67", time:"MorningEvening", top: 40, left: 66, requirement: 0, location: "library", 
	description: ""},
	{name: "Sonata", 				difficulty: 3, rarity: "4567", time:"MorningEvening", top: 20, left: 70, requirement: 0, location: "northHallway", 
	description: ""},
	{name: "Sphinx", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 30, left: 60, requirement: 0, location: "store", 
	description: ""},
	{name: "Stalker", 				difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "restaurant", 
	description: ""},
	{name: "Still Water", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top: 50, left: 0, requirement: 0, location: "gym", 
	description: ""},
	{name: "Suika", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 40, left: 80, requirement: 0, location: "teacherLounge", 
	description: "A being from another world, a place of shrines and fairies."},
	{name: "Sushi Man", 			difficulty: 4, rarity: "0123", time:"MorningEvening", top: 9, left: 50, requirement: 0, location: "teacherLounge", 
	description: "One of four men, guardians of virtue. It is his burden to smell strongly, he offers praise to the clean."},
	{name: "The Man in Yellow", 	difficulty: 2, rarity: "4567", time:"MorningEvening", top: 10, left: 30, requirement: 0, location: "teacherLounge", 
	description: ""},
	{name: "Titania", 				difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "shrine", 
	description: ""},
	{name: "Tortured Soul", 		difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "gym", 
	description: ""},
	{name: "Tsukomo", 				difficulty: 1, rarity: "23", time:"MorningEvening", top: 35, left:60, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "UFO", 					difficulty: 2, rarity: "4567", time:"MorningEvening", top: 0, left: 70, requirement: 0, location: "roof", 
	description: ""},
	{name: "Unawoken Cultist", 		difficulty: 4, rarity: "01", time:"MorningEvening", top: 40, left: 80, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Virtue", 				difficulty: 3, rarity: "0123", time:"MorningEvening", top: 70, left: 80, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "White Night", 			difficulty: 1, rarity: "01", time:"MorningEvening", top: 30, left: 30, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Woman in Black", 		difficulty: 1, rarity: "4567", time:"MorningEvening", top: 60, left: 55, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "Yatagarasu", 			difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "pool", 
	description: ""},
	{name: "Yorihime", 				difficulty: 1, rarity: "01", time:"MorningEvening", top: 70, left: 85, requirement: 0, location: "playerOffice", 
	description: "A being from another world, a place of shrines and fairies."},
];

//Startup & Systems config
function startup() {
	saveSlot(111);
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	preloadImages();
	if(localStorage.getItem('data110')) {
		loadSlot(110);
	}
	else{
		loadEvent('system', 'start');
	}
}

function preloadImages(){
	console.log("preloading start");
    var preloaded = new Image();
	for (i = 0; i < locationArray.length; i++) {
		var bg = "images/locations/"+locationArray[i].index+"Morning.jpg";
		document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
		var bg = "images/locations/"+locationArray[i].index+"Evening.jpg";
		document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
	}
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		var bg = "images/"+data.story[characterIndex].index+"/"+data.story[characterIndex].index+".jpg";
		document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
	}
	console.log("preloading finished");
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(111);
	}
}

function disablePictures() {
	if (imagesDisabled == false) {
		document.getElementById("playerImage").style.visibility = "hidden";		
		document.getElementById("playerImage").style.width = "0%";
		document.getElementById("playerImage").style.border = "none";
		imagesDisabled = true;
		changeLocation(data.player.location);
	}
	else {
		location.reload();
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
				//data.player.time = "Morning";
			}
		break;
	}
}

//Character functions
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

function addFlag(character, flag) {
	console.log(character+flag);
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].met == false) {
				data.story[flagIndex].met = "";
			}
			console.log('adding the flag named '+flag+' to '+character);
			data.story[flagIndex].met += flag;
		}
	}
}

function removeFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].met == false) {
				data.story[flagIndex].met = "";
			}
			if (data.story[flagIndex].met.includes(flag) == true) {
				console.log('Removing flag '+flag+' from '+character);
				data.story[flagIndex].met = data.story[flagIndex].met.replace(flag, "");
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
			if (data.story[flagIndex].met == false) {
				data.story[flagIndex].met = "";
			}
			if (data.story[flagIndex].met.includes(flag) == true) {
				return true;
			}
			else {
				return false;
			}
		}
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

function unencounter(name) {
	for (e = 0; e < data.story.length; e++) {
		if (data.story[e].index == name) {
			if (data.story[e].encountered == true) {
				data.story[e].encountered = false
				break;
			}
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

function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
		text = text.replace('playerF', data.player.name);
		text = text.replace('playerGender', data.player.gender);
		text = text.replace('playerG', data.player.gender);
		text = text.replace('playerMan', data.player.gender);
		text = text.replace('playerTitle', data.player.title);
		text = text.replace('playerT', data.player.title);
		text = text.replace('playerMister', data.player.title);
		text = text.replace('playerHonorific', data.player.honorific);
		text = text.replace('playerH', data.player.honorific);
		text = text.replace('playerSir', data.player.honorific);
		switch (data.player.gender) {
			case "man": {
				text = text.replace("*he", "he");
				text = text.replace("*He", "He");
				text = text.replace("*HE", "HE");
				text = text.replace("*his", "his");
				text = text.replace("*His", "His");
				text = text.replace("*HIS", "HIS");
				text = text.replace("*man", "man");
				text = text.replace("*Man", "Man");
				text = text.replace("*MAN", "MAN");
				text = text.replace("*him", "him");
				text = text.replace("*Him", "Him");
				text = text.replace("*HIM", "HIM");
				text = text.replace("*boy", "boy");
				text = text.replace("*Boy", "Boy");
				text = text.replace("*BOY", "BOY");
				text = text.replace("*guy", "guy");
				text = text.replace("*Guy", "Guy");
				text = text.replace("*GUY", "GUY");
				text = text.replace("*mister", "mister");
				text = text.replace("*Mister", "Mister");
				text = text.replace("*MISTER", "MISTER");
				text = text.replace("*sir", "sir");
				text = text.replace("*Sir", "Sir");
				text = text.replace("*SIR", "SIR");
				text = text.replace("*male", "male");
				text = text.replace("*Male", "Male");
				text = text.replace("*MALE", "MALE");
				text = text.replace("*geezer", "geezer");
				text = text.replace("*Geezer", "Geezer");
				text = text.replace("*GEEZER", "GEEZER");
				text = text.replace("*master", "master");
				text = text.replace("*Master", "Master");
				text = text.replace("*MASTER", "MASTER");
				break;
			}
			case "woman": {
				text = text.replace("*he", "she");
				text = text.replace("*He", "She");
				text = text.replace("*HE", "SHE");
				text = text.replace("*his", "her");
				text = text.replace("*His", "Her");
				text = text.replace("*HIS", "HER");
				text = text.replace("*man", "woman");
				text = text.replace("*Man", "Woman");
				text = text.replace("*MAN", "WOMAN");
				text = text.replace("*him", "her");
				text = text.replace("*Him", "Her");
				text = text.replace("*HIM", "HER");
				text = text.replace("*boy", "girl");
				text = text.replace("*Boy", "Girl");
				text = text.replace("*BOY", "GIRL");
				text = text.replace("*guy", "girl");
				text = text.replace("*Guy", "Girl");
				text = text.replace("*GUY", "GIRL");
				text = text.replace("*mister", "miss");
				text = text.replace("*Mister", "Miss");
				text = text.replace("*MISTER", "MISS");
				text = text.replace("*sir", "ma'am");
				text = text.replace("*Sir", "Ma'am");
				text = text.replace("*SIR", "MA'AM");
				text = text.replace("*male", "female");
				text = text.replace("*Male", "Female");
				text = text.replace("*MALE", "FEMALE");
				text = text.replace("*geezer", "hag");
				text = text.replace("*Geezer", "Hag");
				text = text.replace("*GEEZER", "HAG");
				text = text.replace("*master", "mistress");
				text = text.replace("*Master", "Mistress");
				text = text.replace("*MASTER", "Mistress");
				break;
			}
		}
		for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
			codenameCheck = data.story[codenameIndex].index + "F";
			text = text.replace(codenameCheck, data.story[codenameIndex].fName);
			codenameCheck = data.story[codenameIndex].index + "L";
			text = text.replace(codenameCheck, data.story[codenameIndex].lName);
		}
	}
	if (data.player.uwu == true) {
		for (uwuLoop = 0; uwuLoop < 30; uwuLoop++) {
			text = text.replace('<br>', "TESTTHING");
			text = text.replace('th', "d");
			text = text.replace('Th', "D");
			text = text.replace('what', "wat");
			text = text.replace('What', "Wat");
			text = text.replace('l', "w");
			text = text.replace('r', "w");
			text = text.replace('L', "W");
			text = text.replace('R', "W");
			text = text.replace('TESTTHING', "<br>");
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

function renamePlayer() {
	data.player.name = document.getElementById('nameSubmission').value;
	loadEncounter("system", "prologue2");
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	changeLocation("playerHouse");
}

//Scene creation
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

function checkForEncounters() {
	var targetFile = 'system';
	requestType = 'check';
	var filename = "scripts/characters/"+targetFile+".js";
	//console.log('Attempting to load '+targetFile+'.js to check for encounters');
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
		//console.log('Attempting to load '+targetFile+'.js to check for encounters');
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function printEncounterButton(character, scene, text, top, left, altName, altImage) {
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='loadEncounter("`+character+`", "`+scene+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%; border: 3px solid; border-radius: 0px;">`+text+`</div>
			`;
			break;
		}
		case "persona": {
			var ransomStringStart = text;
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
							if (ransomStringStart.length > 15) {
								//ransomStringEnd += "<br>"
							}
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
							if (ransomStringStart.length > 15) {
								//ransomStringEnd += "<br>"
							}
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
				<div class="pictureButtonPersona" onclick='loadEncounter("`+character+`", "`+scene+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 40%;">`+ransomStringEnd+`</div>
			`;
			break;
		}
		default: {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='loadEncounter("`+character+`", "`+scene+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+text+`</div>
			`;
		}
	}
}

function printEncounterTab(name, scene, text, altImage, altName) {
	if (character != "system") {
		var tabTrust;
		var cancelTab = false;
		var cssName = name;
		var img = name+".jpg";
		for (z = 0; z < data.story.length; z++) {
			if (data.story[z].index == name) {
				tabIndex = z;
				if (text.includes(name)) {
					text = text.replace(name, data.story[z].fName);
				}
				var cssColor = data.story[z].color;
				if (data.story[z].encounter == true) {
					cancelTab = true;
				}
			}
		}
		if (data.story[tabIndex].trust == 0) {
			//text += "HIDDEN";
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
		var checkForError = "";
		if (altImage == undefined) {
			altImage = "";
		}
		if (altName == undefined) {
			altName = "";
		}
		if (altImage != "") {
			img = altImage;
		}
		if (altName != "") {
			name = altName;
		}
		//console.log(tabIndex);
		console.log(cssColor);
		if (cancelTab != true) {
			console.log("Now generating tab for " + name + ", linking to scene " + scene + " with the text " + text + " " +altImage);
			writeSpeech(name, img, `
				<p class="status"> Status: ` + tabTrust + `</p>	
				<p class="switch" onclick="loadEncounter('`+data.story[tabIndex].index+`', '`+scene+`')">` + replaceCodenames(text) + `</p>
			`);
		}
	}
}

function writeText (text) {
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

function writeCenteredText (text) {
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
		default: {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpecial (text) {
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='specialText' style='
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class = "specialText">` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpeech (name, img, text) {
	var cssName = name;
	var fullName = name;
	console.log(img);
	var cssColor = "#CCCCCC";
	if (img == "" && img != 'none') {
		if (data.player.pervert != true) {
			var checkForError = "";
			img = "images/"+name+"/"+name+".jpg";
		}
		else {
			var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`.jpg'"`;
			img = "images/"+name+"/"+name+"P.jpg";
		}
	}
	else {
		if (img.includes("images") != true && img != 'none') {
			if (data.player.pervert != true) {
				var checkForError = "";
				img = "images/"+cssName+"/"+img;
			}
			else {
				var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+img+`'"`;
				img = "images/"+cssName+"/"+img+"P.jpg";
			}
		}
	}
	if (img.includes('.jpgP') == true) {
		img = img.replace('.jpgP', 'P');
	}
	if (name == "player") {
		img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		fullName = data.player.name;
		if (data.player.pervert != true) {
			cssColor = "#86b4dc";
		}
		else {
			cssColor = "#fc53f1";
		}
	}
	console.log(img);
	if (data.player.style == "persona" || data.player.style == "royalty") {
		var checkForError = `onerror ="javascript:this.src='`+img+`'"`;
		if (data.player.pervert == true) {
			if (name == "player") {
				img = img.replace('.jpg', 'T.png');
			}
			else {
				img = img.replace('P.jpg', 'T.png');
			}
		}
		else {
			img = img.replace('.jpg', 'T.png');
		}
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			fullName = data.story[i].fName + ' ' + data.story[i].lName;
			cssColor = data.story[i].color;
			
		}
	}
	if (img == "none") {
		var checkForError = "";
		img = "scripts/gamefiles/none.png";
	}
	if (text.includes("HIDDEN") == true) {
		fullName = "???";
		text = text.replace("HIDDEN", "");
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxLobotomy" style="border-color: `+cssColor+`;
			background: linear-gradient(90deg, 
			#000000 10px, 
			`+cssColor+` 10px, 
			`+cssColor+` 210px, 
			#000000 210px);">
				<div class = "lobotomyThumb" style="background-color: `+cssColor+`">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ img +`
						"`+checkForError+`>
					</div>
					<p class = "textNameLobotomy">`+ fullName + `</p>
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
							-webkit-filter: drop-shadow(2px 2px 0 `+cssColor+`)
							drop-shadow(-2px -2px 0 `+cssColor+`);
							filter: drop-shadow(2px 2px 0 `+cssColor+`)
							drop-shadow(-2px -2px 0 `+cssColor+`);"
						src = "`+img+`"`+checkForError+`>
						<img class = "textThumbRoyalty" src = "`+img+`"`+checkForError+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+cssColor+`;">
						<p class = "textNameRoyalty" style = "color:`+cssColor+`;">`+fullName+`</p>
					</div>
				</div>
				<div class="textBoxContentRoyalty">
					<div class="dialogueBoxRoyalty" style = "border-color:`+cssColor+`">
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
					<img class = "textThumbPersona" src = "`+img+`"`+checkForError+`>
				</div>
				<div class="textBoxContentPersona">
					<div class="nameBoxPersona">
						<p class = "textNamePersona" style = "color:`+cssColor+`">`+ fullName + `</p>
						<div class="textNamePersonaWhite" style = "border-color:`+cssColor+`"></div>
						<div class="textNamePersonaBlack"></div>
						<div class="personaNameArrow"></div>
						<div class="personaNameArrowShadow" style = "border-right-color:`+cssColor+`"></div>
					</div>
					<div class="dialogueBoxPersona" style = "border-color:`+cssColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML +=`
			<div class="textBox" style="border-color: `+cssColor+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "
					`+ img +`
				"`+checkForError+`>
				<div class="textBoxContent">
				<p class = "textName" style="color:`+cssColor+`">`+ fullName + `</p>
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
			console.log(img);
		}
	}
	if (imagesDisabled != true) {
		switch (data.player.style) {
			case "lobotomy": {
				var cssColor = "#CCCCCC";
				for (i = 0; i < data.story.length; i++) {
					if (img.includes(data.story[i].index) == true) {
						cssColor = data.story[i].color;
						break;
					}
				}
				document.getElementById('output').innerHTML += `
						<img class="bigPicture" style="border-color:`+cssColor+`; border-radius: 5px;" src="` + img + `"`+checkForError+` title="` + cap + `">
					<br>
				`;
				break;
			}
			case "persona": {
				var cssColor = "#CCCCCC";
				for (i = 0; i < data.story.length; i++) {
					if (img.includes(data.story[i].index) == true) {
						cssColor = data.story[i].color;
						break;
					}
				}
				document.getElementById('output').innerHTML += `
						<img class="bigPicture" style="border-color:`+cssColor+`; border-radius: 5px;" src="` + img + `"`+checkForError+` title="` + cap + `">
					<br>
				`;
				break;
			}
			default: {
				document.getElementById('output').innerHTML += `
					<img class="bigPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
					<br>
				`;
			}
		}
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
			console.log(img);
		}
	}
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
		<br>
	`;
	}
}

function writeFunction (name, func) {
	switch (data.player.style) {
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

function listArtists() {
	writeMed("images/mom/profile.jpg", "Art by Enoshima Iki");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/26267">Enoshima Iki's Pixiv</a>`;
	writeMed("images/tomgirl/profile.jpg", "Art by Nagi Ichi");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/4229818">Nagi Ichi's Pixiv</a>`;
	writeMed("images/purple/profile.jpg", "Art by Oreteki18kin");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/5893974">Oreteki18kin's Pixiv</a>`;
	writeMed("images/succubus/profile.jpg", "Art by Gujira");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/215082">Gujira 4 Gou's Pixiv</a>`;
	writeMed("images/housekeep/profile.jpg", "Art by Kinta no Mousou");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/13253890">Kinta no Mousou's Pixiv</a>`;
	
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

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "400px";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Menu
function updateMenu() {
	document.getElementById('playerName').innerHTML = data.player.name;
	if (data.player.pervert != true) {
		document.getElementById('playerName').style.color = "#86b4dc";
	}
	else {
		document.getElementById('playerName').style.color = "#fc53f1";
	}
	document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
	document.getElementById('playerImage').title = data.player.characterArtist;
	if (data.player.hypnosis == 0) {
		document.getElementById('playerHypnosis').innerHTML = "";
	}
	else {
		document.getElementById('playerHypnosis').innerHTML = "Hypnosis: " + data.player.hypnosis;
	}
	if (data.player.counseling == 0) {
		document.getElementById('playerCounseling').innerHTML = "";
	}
	else {
		document.getElementById('playerCounseling').innerHTML = "Counseling: " + data.player.counseling;
	}
	if (data.player.hacking == 0) {
		document.getElementById('playerHacking').innerHTML = "";
	}
	else {
		document.getElementById('playerHacking').innerHTML = "Hacking: " + data.player.hacking;
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('title').style.fontFamily = "norwester, times new roman, sans-serif";
			document.getElementById('menu').style.fontFamily = "railway, times new roman, sans-serif";
			for (i = 0; i < menuButtons.length; i++) {
				document.getElementById(menuButtons[i].ID).innerHTML = menuButtons[i].name;
				document.getElementById(menuButtons[i].ID).style.borderRadius = "0px";
				document.getElementById(menuButtons[i].ID).style.border = "3px solid";
			}
			document.getElementById('playerImage').style.borderRadius = "0px";
			if (data.player.pervert != true) {
				document.getElementById('playerImage').style.borderColor = "#86b4dc";
			}
			else {
				document.getElementById('playerImage').style.borderColor = "#fc53f1";
			}
			console.log(data.player.style);
			break;
		}
		case "persona": {
			if (data.player.gender == "man") {
				document.getElementById('playerImage').src = "scripts/gamefiles/characters/basicT.png";
			}
			else {
				document.getElementById('playerImage').src = "scripts/gamefiles/characters/basilT.png";
			}
			for (menuCounter = 0; menuCounter < menuButtons.length; menuCounter++) {
				document.getElementById(menuButtons[menuCounter].ID).style.borderRadius = "0px";
				document.getElementById(menuButtons[menuCounter].ID).style.border = "3px solid";
				document.getElementById(menuButtons[menuCounter].ID).classList.add('personaMenuButton');
				var ransomStringStart = menuButtons[menuCounter].name;
				ransomStringStart = ransomStringStart.toLowerCase();
				ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
				ransomStringStart = ransomStringStart.replace(" ", "Q");
				//console.log(ransomStringStart);
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
						//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
						//console.log(ransomStringEnd);
						if (ransomStringStart.charAt(ransomCounter) != "Q") {
							ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
						}
						else {
							ransomStringEnd += "<br>";
						}
					}
					document.getElementById(menuButtons[menuCounter].ID).innerHTML = ransomStringEnd;
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
							if (ransomStringStart.charAt(ransomCounter) != "Q") {
								ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
							}
							else {
								ransomStringEnd += "<br>";
							}
						}
						document.getElementById(menuButtons[menuCounter].ID).innerHTML = ransomStringEnd;
					}
				}
			document.getElementById('restartButton').style.color = "#ffffff";
			document.getElementById('title').style.fontFamily = "norwester, times new roman, sans-serif";
			document.getElementById('menu').style.fontFamily = "railway, times new roman, sans-serif";
			document.getElementById('playerImage').style.borderRadius = "0px";
			document.getElementById('playerImage').style.border = "0px";
			if (data.player.pervert != true) {
				document.getElementById('playerImage').style.borderColor = "#86b4dc";
			}
			else {
				document.getElementById('playerImage').style.borderColor = "#fc53f1";
			}
			console.log(data.player.style);
			break;
		}
		case "royalty": {
			if (data.player.gender == "man") {
				document.getElementById('playerImage').src = "scripts/gamefiles/characters/basicT.png";
			}
			else {
				document.getElementById('playerImage').src = "scripts/gamefiles/characters/basilT.png";
			}
			for (i = 0; i < menuButtons.length; i++) {
				document.getElementById(menuButtons[i].ID).innerHTML = menuButtons[i].name;
				document.getElementById(menuButtons[i].ID).style.borderRadius = "0px";
				document.getElementById(menuButtons[i].ID).style.border = "3px solid";
				document.getElementById(menuButtons[i].ID).classList.add('personaMenuButton');
			}
			document.getElementById('title').style.fontFamily = "norwester, times new roman, sans-serif";
			document.getElementById('menu').style.fontFamily = "railway, times new roman, sans-serif";
			document.getElementById('playerImage').style.borderRadius = "0px";
			document.getElementById('playerImage').style.border = "0px";
			if (data.player.pervert != true) {
				document.getElementById('playerImage').style.borderColor = "#86b4dc";
			}
			else {
				document.getElementById('playerImage').style.borderColor = "#fc53f1";
			}
			console.log(data.player.style);
			break;
		}
		default: {
			document.getElementById('title').style.fontFamily = "arial, sans-serif";
			document.getElementById('menu').style.fontFamily = "arial, sans-serif";
			console.log(document.getElementById('title').style.fontFamily);
			for (i = 0; i < menuButtons.length; i++) {
				document.getElementById(menuButtons[i].ID).innerHTML = menuButtons[i].name;
				document.getElementById(menuButtons[i].ID).style.borderRadius = "5px";
				document.getElementById(menuButtons[i].ID).style.border = "none";
				document.getElementById(menuButtons[i].ID).style.borderBottom = "3px solid";
				document.getElementById(menuButtons[i].ID).classList.remove('personaMenuButton');
			}
			document.getElementById('restartButton').style.color = "#FF0000";
			document.getElementById('playerImage').style.borderRadius = "3px";
			document.getElementById('playerImage').style.borderColor = "#FFFFFF";
		}
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

//Saving
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
		console.log('version 3 detected, updating save');
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
	if (data.player.version == 4) {
		console.log('version 4 detected, updating save');
		data.player.version = 5;
		var goof = {index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira"};
		data.story.push(goof);
		goof = {index: "nurse", fName: "Justine", lName: "Walton", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D756B", author: "NoodleJacuzzi", artist: "Oreteki18kin"};
		data.story.push(goof);
		console.log(data.story);
	}
	if (data.player.version == 5) {
		console.log('version 5 detected, updating save');
		data.player.version = 6;
		var goof = {index: "housekeep", fName: "Anri", lName: "Ramona", trust: 0, encountered: false, textEvent: "", met: false, color: "#df5877", author: "CryptoGreek", artist: "Kinta no Mousou"};
		data.story.push(goof);
		console.log(data.story);
	}
	saveSlot(110);
}

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

//Gallery
function generateGalleryNav() {
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].trust > 0) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGalleryPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "images/`+ data.story[i].index +`/`+ data.story[i].index +`.jpg">
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
			break;
		}
	}
	return false;
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
		if (data.player.pervert != true) {
			if (imagesDisabled != true) {
				document.getElementById('logbookRight').innerHTML = `
					<img id="selfImage" class="selfImage" src="images/`+data.story[characterCounter].index+`/profile.jpg">
				`;
			}
		}
		else {
			if (imagesDisabled != true) {
				document.getElementById('logbookRight').innerHTML = `
					<img id="selfImage" class="selfImage" src="images/`+data.story[characterCounter].index+`/profileP.jpg" onerror ="javascript:this.src='images/`+data.story[characterCounter].index+`/profile.jpg'">
				`;
			}
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc" style = "color: `+data.story[characterCounter].color+`">`+data.story[characterCounter].fName+` `+data.story[characterCounter].lName+`</h2>
			<p class = "selfDesc lb_trust ">Trust: <span class="`+tabTrust+`">`+tabTrust+`</p></span>
		</div><div class=" lb_secondary">
			<p class = "selfDesc lb_desc">`+logbookArray[logCounter].desc+`</p>
			<p class = "selfDesc lb_body">`+logbookArray[logCounter].body+`</p>
			<p class = "selfDesc lb_clothes">`+logbookArray[logCounter].clothes+`</p>
			<p class = "selfDesc lb_home">`+logbookArray[logCounter].home+`</p>
			<p class = "selfDesc lb_tags">`+logbookArray[logCounter].tags+`</p>
			<p class = "selfDesc lb_tags">Artist: `+logbookArray[logCounter].artist+`</p>
			<p class = "selfDesc lb_tags">Author: `+logbookArray[logCounter].author+`</p>
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

//Inventory & shopping
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
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
	for (i = 0; i < data.story.length; i++) {
		//console.log('test');
		targetFile = data.story[i].index;
		var filename = "scripts/characters/"+targetFile+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
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

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
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

function addItem(name, key, image) {
	var purchasedItem = {name: name, key: key, image: image};
	console.log(purchasedItem);
	data.items.push(purchasedItem);
}

function removeItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			data.items.splice(i, 1);
			break;
		}
	}
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
	writeEncounter('cheat');
	switch (goof) {
		case "human alteration app": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub", artist: "Art by Aya",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
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
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "princess quest": {
			if (checkBody("elizabeth") != true) {
				var goof = {index: "elizabeth", artist: "Art by Neromashin",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "rainy dayz": {
			if (checkBody("jill") != true) {
				var goof = {index: "jill", artist: "Unknown artist",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
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
		case "prude": {
			data.player.pervert = false;
			writeSpecial("Pervert mode deactivated!");
			break;
		}
		case "vegetarian": {
			setTrust('tomgirl', -1);
			setTrust('meji', -1);
			setTrust('succubus', -1);
			setTrust('housekeep', -1);
			writeSpecial("Trap / male characters have been deactivated. You might need to use this code again in the future when more traps are added.");
			break;
		}
		case "lobotomy": {
			data.player.style = "lobotomy";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Lobotomy visual style active!");
			break;
		}
		case "persona": {
			data.player.style = "persona";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Persona visual style active!");
			break;
		}
		case "royalty": {
			data.player.style = "royalty";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Royalty visual style active!");
			break;
		}
		case "stiggy752": {
			data.player.style = "basic";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Basic visual style active!");
			break;
		}
		case "baddy": {
			data.player.style = "basic";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Basic visual style active!");
			break;
		}
		case "cash money": {
			data.player.money += 100;
			updateMenu();
			writeSpecial("You got $100! This should be all you need, but you could always make more.");
			break;
		}
		case "nuclear option": {
			data.player.hypnosis = 3;
			data.player.hacking = 3;
			data.player.counseling = 3;
			updateMenu();
			writeSpecial("All of your stats have been set to 3. You can keep improving them past this point, but you shouldn't see any skill-related roadblocks from here on!");
			break;
		}
		case "new name": {
			loadEncounter('system', 'renamingRoom');
			break;
		}
		case "oowoo": {
			if (data.player.uwu != true) {
				data.player.uwu = true;
				writeSpecial("What's this? UwU cheat activated.");
			}
			else {
				data.player.uwu = false;
				writeSpecial("Oowoo cheat has been deactivated.");
			}
			break;
		}
		case "spookwave": {
			if (checkItem('Ghost AR') != true) {
				addItem('Ghost AR', true, 'scripts/gamefiles/items/ghostAR.jpg');
				writeSpecial("Happy Halloween! This is an in-progress version of a minigame, hopefully the first of many. Open your phone, click on 'Ghost AR', and ghosts will appear around town.");
			}
			else {
				writeText("You've already used this cheat, playerSir.");
			}
			break;
		}
		case "eyestrain": {
			if (checkItem('Ghost AR') != true) {
				writeSpecial("You need to use the 'spookwave' cheat before you can use this one.");
			}
			else {
				ghostBoost += .2;
				writeSpecial("Increased the visibility of ghosts! You can repeat this code if you need to. Refreshing the game will undo this code.");
			}
			break;
		}
	}
	if (goof == "null") {
		writeText("You've already used this code before.");
	}
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

function notification(name) {
	writeText("Bzzt! You got a text from "+fName(name)+"!");
	document.getElementById('phoneButton').innerHTML = "PHONE(*)";
	document.getElementById('phoneButtonMobile').innerHTML = "PHONE(*)";
}

function writePhoneSpeech (name, img, text) {
	var cssName;
	if (img == "") {
		if (data.player.pervert != true) {
			var checkForError = "";
			img = "images/"+name+"/"+name;
			console.log(img);
		}
		else {
			var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`.jpg'"`;
			img = "images/"+name+"/"+name+"P";
			console.log(img);
		}
	}
	if (name == "player") {
		img = "scripts/gamefiles/profiles/"+data.player.character;
		name = data.player.name;
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
			`+ img +`.jpg
		"`+checkForError+`>
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
	var savedImage = {name: img, src: img,};
	if (checkPhoneImages(img) == false) {
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
		`;
		if (typeof text2 != 'undefined') {
			choiceList += `
				<p class="choiceText" onclick="phoneChoice('B')">
					` + text2 + `
				</p>
		`;
		}
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

function phoneChoice(n) {
	document.getElementById('phoneRight').innerHTML = '';
	data.story[data.player.lastText].textEvent += n;
	writePhoneEvent(data.story[data.player.lastText].textEvent);
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
	if (checkItem('Ghost AR') == true) {
		document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "ghostAR()">Ghost AR</p>`;
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

function clearText(n) {
	for (textIndex = 0; textIndex < data.story.length; textIndex++) {
		if (data.story[textIndex].index == n) {
			console.log('deleting text log of '+n);
			data.story[textIndex].textEvent = "";
		}
	}
}

// Ghost AR game
function ghostAR() {
	if (data.player.ghost == undefined) {
		console.log('Installing Ghost AR');
		data.player.ghost = "";
		document.getElementById('phoneRight').innerHTML = ``;
		document.getElementById('phoneRight').innerHTML +=`
		<div class = "phoneTextBox">
			<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
			<div class="phoneTextBoxContent">
			<p class = "phoneTextName">System</p>
			<p class = "selfDesc">Ghost hunting is enabled! Good luck hunting!</p>
		</div></div>
		<br>
		`;
	}
	else {
		if (data.player.ghost.includes('REWARD')) {
			document.getElementById('phoneRight').innerHTML = ``;
			if (data.player.ghost.includes('REWARD1')) {
				data.player.ghost = data.player.ghost.replace('REWARD1', 'claimed');
				data.player.hypnosis += 1;
				updateMenu();
				document.getElementById('phoneRight').innerHTML +=`
				<div class = "phoneTextBox">
					<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
					<div class="phoneTextBoxContent">
					<p class = "phoneTextName">System</p>
					<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
				</div></div>
				<br>
				<p class="rawText">The reward is a link to some occult documents. Most are nonsense, but there's one on hypnosis that is actually pretty thorough.</p>
				<p class="specialText">Your hypnosis skill has improved!</p>
				`;
			}
			if (data.player.ghost.includes('REWARD2')) {
				data.player.ghost = data.player.ghost.replace('REWARD2', 'claimed');
				data.player.money += 10;
				updateMenu();
				document.getElementById('phoneRight').innerHTML +=`
				<div class = "phoneTextBox">
					<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
					<div class="phoneTextBoxContent">
					<p class = "phoneTextName">System</p>
					<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
				</div></div>
				<br>
				<p class="rawText">The reward is a link to a short survey. You're rewarded for your participation.</p>
				<p class="specialText">You earned $10!</p>
				`;
			}
			if (data.player.ghost.includes('REWARD3')) {
				data.player.ghost = data.player.ghost.replace('REWARD3', 'claimed');
				if (checkItem('Secret Shrine Location') != true) {
					addItem('Secret Shrine Location', true, 'scripts/gamefiles/items/shrine.jpg');
				}
				updateMenu();
				document.getElementById('phoneRight').innerHTML +=`
				<div class = "phoneTextBox">
					<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
					<div class="phoneTextBoxContent">
					<p class = "phoneTextName">System</p>
					<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
				</div></div>
				<br>
				<p class="rawText">The reward is a link to a to a historical page on the town, there's a neat shrine that isn't on most maps in the park district.</p>
				<p class="specialText">You gained the location of the secret shrine!</p>
				`;
			}
			if (data.player.ghost.includes('REWARD4')) {
				data.player.ghost = data.player.ghost.replace('REWARD4', 'claimed');
				var goof = {index: "hex", artist: "Art by Unknown Artist",};
				data.bodytypes.push(goof);
				document.getElementById('phoneRight').innerHTML +=`
				<div class = "phoneTextBox">
					<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
					<div class="phoneTextBoxContent">
					<p class = "phoneTextName">System</p>
					<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
				</div></div>
				<br>
				<p class="rawText">The reward is a link to a very, very detailed cosplay guide. You have most of these materials at home!</p>
				<p class="specialText">You gained a new profile image, head back home and use the wardrobe to change!</p>
				`;
			}
		}
		else {
			generateGhostCollection();
		}
	}
}

function generateGhostCollection() {
	document.getElementById('phoneRight').innerHTML +=`
	<div class = "phoneTextBox">
		<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
		<div class="phoneTextBoxContent">
		<p class = "phoneTextName">System</p>
		<p class = "selfDesc">You've caught `+countGhosts()+` ghosts!</p>
	</div></div>
	<br>
	`;
}

function checkForGhosts(location) {
	for (i = 0; i < ghostArray.length; i++) {
		if (ghostArray[i].rarity.includes(data.player.dayID) == true) {
			if (ghostArray[i].requirement <= countGhosts() && ghostArray[i].location.includes(location) == true) {
				if (!data.player.ghost.includes(ghostArray[i].name)) {
					var ghostOpacity = ghostArray[i].difficulty*7;
					ghostOpacity = ghostOpacity/100;
					ghostOpacity += ghostBoost;
					console.log(ghostOpacity);
					console.log('Ghost detected! ' +ghostArray[i].name);
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<img class = "ghost" src = "images/ghosts/`+ghostArray[i].name+`.png" style="width: 15%; top: `+ghostArray[i].top+`%; left: `+ghostArray[i].left+`%; opacity: `+ghostOpacity+`;" onclick='captureGhost("`+ghostArray[i].name+`")'>
					`;
				}
			}
		}
	}
}

function checkGhost(n) {
	if (data.player.ghost.includes(n)) {
		return true;
	}
	else {
		return false;
	}
}

function countGhosts() {
	var ghostNumber = 0;
	for (ghostIndex = 0; ghostIndex < ghostArray.length; ghostIndex++) {
		if (data.player.ghost.includes(ghostArray[ghostIndex].name)) {
			console.log('test');
			ghostNumber += 1;
		}
	}
	console.log(ghostNumber);
	return ghostNumber;
}

function captureGhost(n) {
	data.player.ghost += n;
	changeLocation(data.player.location);
	switch (n) {
		case "Maudlos": {
			writeSpecial("Special ghost caught! Open the app to claim your reward.");
			data.player.ghost += 'REWARD3';
			break;
		}
		case "UFO": {
			writeSpecial("Special ghost caught! Open the app to claim your reward.");
			data.player.ghost += 'REWARD2';
			break;
		}
		default: {
			if (countGhosts() == 30) {
				writeSpecial("You caught 30 ghosts! Open the app to claim your reward.");
				data.player.ghost += 'REWARD4';
			}
			else {
				if (countGhosts() == 10) {
					writeSpecial("You caught 10 ghosts! Open the app to claim your reward.");
					data.player.ghost += 'REWARD1';
				}
				else {
					writeText("You caught a ghost!");
				}
			}
			break;
		}
	}
}