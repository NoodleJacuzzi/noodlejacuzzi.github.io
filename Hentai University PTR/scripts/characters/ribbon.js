var character = {index: "ribbon", fName: "Ella", lName: "Bell", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D528A", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

var logbook = {
	index: "ribbon", 
	desc: "",
	body: "",
	clothes: "",
	home: "",
	tags: "",
	artist: "Artist: Oreteki18kin",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "ribbonIntro", name: "A wealthy-looking girl is here", requirements: "?trust ribbon 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "ribbonLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin nurse 80; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin brown 80; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin president 80; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin purple 90; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin starlet 83; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonClub", name: "You can wait for the set time here", requirements: "?trust ribbon 2; ?location eastHallway;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonQuo", name: "You can wait for ribbon here", requirements: "?trust ribbon 80; ?location eastHallway;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "ribbonIntro": {
			writeHTML(`
			`);
			setTrust("ribbon", 1);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonLetter": {
			writeHTML(`
				t You really should take better care not to be seen performing such deliciously vile acts upon women here. I'm not the type to snoop, but I already had my eye on one of your latest playtoys.
				t I'm not jealous of course. Come to my club after classes end for the day, it's just outside classroom A. 
				t A mask and outfit will be provided for you. You'll wear it unless you want your secret exposed to the entire school.
				t XOXOXO~
			`);
			setTrust("ribbon", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonClub": {
			writeHTML(`
			`);
			writeFunction("writeEncounter('brownLewd')", "Continue");
			writeFunction("changeLocation(data.player.location)", "Bow out");
			break;
		}
		case "ribbonLewd": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			setTrust("ribbon", 80);
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('ribbonVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "ribbonRepeat": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('ribbonVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "ribbonInvite": {
			writeHTML(`
			`);
			setTrust("ojou", 21);
			addFlag("ojou", "ribbonInvite");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonInviteRepeat": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonVoyeur": {
			writeHTML(`
			`);
			setTrust("ojou", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonHangout": {
			writeHTML(`
			`);
			addFlag("ojou", "ribbonHangout");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonQuo": {
			writeHTML(`
			`);
			writeFunction("writeEncounter('ribbonRepeat')", "Let's start a meeting");
			if (checkFlag("ojou", "ribbonInvite") == true) {
				writeFunction("writeEncounter('ribbonInviteRepeat')", "Let's invite ojouF again");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "ribbonSpecialOffer": {
			writeHTML(`
				
			`);
			break;
		}
		case "ribbonSpecialLewd": {
			writeHTML(`
				
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "placeholder", name: "Event Name"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "ribbonIntro": {
			writeHTML(`
				im ribbonIntro.jpg
			`);
			break;
		}
		case "ribbonLewd": {
			writeHTML(`
				im ribbonLewd1.jpg
				im ribbonLewd2.jpg
				im ribbonLewd4.jpg
				im ribbonLewd5.jpg
			`);
			break;
		}
		case "ribbonRepeat": {
			writeHTML(`
				im ribbonLewd1.jpg
				im ribbonLewd2.jpg
				im ribbonLewd4.jpg
				im ribbonLewd5.jpg
			`);
			break;
		}
		case "ribbonInvite": {
			writeHTML(`
				im ribbonInvite1.jpg
				im ribbonInvite2.jpg
				im ribbonInvite3.jpg
				im ribbonInvite4.jpg
				im ribbonInvite5.jpg
				im ribbonInvite6.jpg
				im ribbonInvite7.jpg
				im ribbonInvite8.jpg
			`);
			break;
		}
		case "ribbonInviteRepeat": {
			writeHTML(`
				im ribbonInvite1.jpg
				im ribbonInvite2.jpg
				im ribbonInvite3.jpg
				im ribbonInvite4.jpg
				im ribbonInvite5.jpg
				im ribbonInvite6.jpg
				im ribbonInvite7.jpg
				im ribbonInvite8.jpg
			`);
			break;
		}
		case "ribbonSpecialLewd": {
			writeHTML(`
				im ribbonSpecial1.jpg
				im ribbonSpecial2.jpg
				im ribbonSpecial3.jpg
				im ribbonSpecial4.jpg
				im ribbonSpecial5.jpg
				im ribbonSpecial6.jpg
			`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
			break;
		}
	}
	//Don't touch the rest of this stuff, it has to do with unlocking scenes.
	var unlockedScene = "";
	for (i = 0; i < eventArray.length; i++) {
		if (eventArray[i].index == name) {
			unlockedScene = eventArray[i];
		}
	}
	if (unlockedScene != "" && galleryCheck(name) != true) {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "empty", requirements: "?trust principal 10000;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			clearText(character.index);
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "load": {
		data.story.push(character);
		console.log(character);
		console.log(data.story);
		writeSpecial(character.fName+" has been added to the game!");
		writeSpeech(character.index, "", character.fName+ " " + character.lName + ", written by "+ logbook.author + ", art by "+ logbook.artist+".");
		break;
	}
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEvent(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			writeFunction("loadEncounter('system', 'gallery')", "Finish");
		}
		break;
	}
	case "unlock": {
		var unlockedScene = "";
		for (i = 0; i < eventArray.length; i++) {
			if (eventArray[i].index == n) {
				unlockedScene = eventArray[i];
			}
		}
		if (unlockedScene != "") {
			data.gallery.push(unlockedScene);
			writeSpecial("You unlocked a new scene in the gallery!");
		}
		else {
			console.log("Error, no scene named "+n+" found to unlock.");
		}
		break;
	}
	case "check": {
		if (encounteredCheck(character.index) != true) {
			for (number = 0; number < encounterArray.length; number++) { //start going through encounter array
				var finalLocation = "";
				var finalResult = true;
				if (encounterArray[number].location != null) {
					var finalLocation = encounterArray[number].location;
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map" && data.player.gps == true) { //check the location
						if (encounterArray[number].time.includes(data.player.time)) { //check the time
							if (encounterArray[number].trustMin <= checkTrust(character.index) && encounterArray[number].trustMax >= checkTrust(character.index)) { //check the trust requirements
								if (encounterArray[number].day == "even" && data.player.day%2 == 1) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].day == "odd" && data.player.day%2 == 0) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].itemReq != "" && checkItem(encounterArray[number].itemReq) != true) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect item");
								}
							}
							else {
								//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect trust at "+checkTrust(character.index)+". Trustmin: "+encounterArray[number].trustMin);
								finalResult = false;
							}
						}
						else {
							//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect time");
							finalResult = false;
						}
					}
					else {
						//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect location");
						finalResult = false;
					}
				}
				else {
					//console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var requirements = checkRequirements(encounterArray[number].requirements);
					//console.log(requirements);
					if (requirements != true) {
						finalResult = false;
					}
				}
				if (finalResult == true) {
					//console.log("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
					if (data.player.location == "map" && finalLocation != "beach" && finalLocation != "casino") {
						var textString = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) { //find the location target
							if (locationArray[locationIndex].index == finalLocation) {
								var textString = locationArray[locationIndex].name + " - ";
							}
						}
						if (textString != "") {
							printEncounterTab(character.index, encounterArray[number].index, textString + encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
						else {
							printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
					}
					else {
						//console.log(number);
						printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
					}
				}
				else {
					//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!final result for "+encounterArray[number].index+" false, location is "+finalLocation);
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
	case "logbook": {
		logbookArray.push(logbook);
		break;
	}
	case "phoneCheck": {
		var finalMessage = "";
		var finalResult = true;
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			//Start finding the data.story variable associated with the character
			for (phoneHistoryCheck = 0; phoneHistoryCheck < data.story.length; phoneHistoryCheck++) {
				if (data.story[phoneHistoryCheck].index == character.index) {
					//If the character has no unread texts
					//If the character does not have this text in their text history
					if (
					data.story[phoneHistoryCheck].unreadText != true &&
					data.story[phoneHistoryCheck].textHistory.includes(phoneArray[number].index) != true &&
					data.story[phoneHistoryCheck].textEvent != phoneArray[number].index
					) {
						//If the phone record is using the old system...
						if (phoneArray[number].trust != null) {
							var finalResult = false;
							if (checkTrust(character.index) == phoneArray[number].trust) { //if the player's trust with the character meets the text requirement
								for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
									if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
										if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
											notification(character.index)
											data.story[phoneEventCheck].textEvent = phoneArray[number].index;
											console.log(data.story[phoneEventCheck].textEvent);
										}
									}
								}
							}
						}
						else {
							if (phoneArray[number].requirements.includes("?time") == false) {
								phoneArray[number].requirements += "?time Morning;";
							}
							//Check the requirements
							var requirements = checkRequirements(phoneArray[number].requirements);
							console.log("Now examining encounter entry "+phoneArray[number].index+phoneArray[number].requirements+", result is "+requirements);
							if (requirements != false) {
								notification(character.index)
								data.story[phoneHistoryCheck].unreadText = true;
								data.story[phoneHistoryCheck].textEvent = phoneArray[number].index;
								data.story[phoneHistoryCheck].textHistory += phoneArray[number].index;
							}
						}
					}
				}
			}
		}
		break;
	}
	case "phoneEvent": {
		writePhoneEvent(eventName);
		break;
	}
}