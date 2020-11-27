var character = {index: "ojou", fName: "Olivia", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#4EAAB5", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

var logbook = {
	index: "ojou", 
	desc: "The daughter of a major donor to the university, she attends Parent Teacher Student Association meetings in his stead. She actually has a small circle of friends as her haughty, bratty attitude only seems to extend to members of the faculty and authority figures.",
	body: "She's quite petite, a little skinnier than your usual targets. She doesn't seem to sexually confident either, just a normal girl attending university, albeit one with a very refined air about her.",
	clothes: "There's no chance that her outfit could even be considered close to what's assigned to students, most of the time she's at the university she's either wearing expensive-looking clothes. Probably not the sort of thing she'd wear at home.",
	home: "If her outfit is anything to go by, her home might even be a rug above the higher-end houses on Vintage Street.",
	tags: "Betrayal, mind break, corruption",
	artist: "Artist: Oreteki18kin",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "ojouIntro", name: "Someone in a fancy set of clothes is approaching you", requirements: "?trust ojou 0; ?flag principal council; ?location eastHallway;", altName: "", altImage: "",},
	{index: "ojouQuoLevel1", name: "ojou has come to pay you a visit as you requested", requirements: "?trust ojou 21; ?location playerOffice;", altName: "", altImage: "",},
	{index: "ojouQuoLevel2", name: "ojou has come to pay you a visit as you requested", requirements: "?trust ojou 22; ?location playerOffice;", altName: "", altImage: "",},
	{index: "ojouQuoLevel3", name: "ojou isn't here today, it seems like you'll have to pay her a visit instead", requirements: "?trust ojou 23; ?location playerOffice;", altName: "", altImage: "",},
	{index: "ojouQuoLevel4", name: "ojou has come to pay you a visit", requirements: "?trust ojou 80; ?location playerOffice;", altName: "", altImage: "",},
	{index: "brownHangout", name: "brownF and ojou are walking together", requirements: "?trustMin brown 1; ?trust ojou 1; !flag ojou brownHangout; ?location street;", altName: "", altImage: "",},
	{index: "ribbonHangout", name: "ribbonF and ojou are walking together", requirements: "?trustMin ribbon 1; ?trust ojou 1; !flag ojou ribbonHangout; ?location eastHallway;", altName: "", altImage: "",},
	{index: "ribbonHangout", name: "ribbonF and ojou are walking together", requirements: "?trustMin ribbon 1; ?trust ojou 1; !flag ojou ribbonHangout; ?location eastHallway;", altName: "", altImage: "",},
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
		case "ojouIntro": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust("ojou", 1);
			break;
		}
		case "ojouSolo1": {
			writeHTML(`
			`);
			raiseTrust("ojou", 1);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo2": {
			writeHTML(`
			`);
			raiseTrust("ojou", 1);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo3": {
			writeHTML(`
			`);
			setTrust("ojou", 80);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownHangout": {
			writeHTML(`
			`);
			addFlag("ojou", "brownHangout");
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
		case "ojouSolo1Repeat": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo2Repeat": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouQuoLevel1": {
			writeHTML(`
			`);
			writeFunction("writeEncounter('ojouSolo1')", "Let's go home for a quickie");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "ojouQuoLevel2": {
			writeHTML(`
			`);
			writeFunction("writeEncounter('ojouSolo2')", "No, we're doing it here today");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "ojouQuoLevel3": {
			writeHTML(`
			`);
			writeFunction("writeEncounter('ojouSolo3')", "Wake her up with a bang");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "ojouQuoLevel4": {
			writeHTML(`
				
			`);
			writeFunction("writeEncounter('ojouSolo1Repeat')", "Let's go home");
			writeFunction("writeEncounter('ojouSolo2Repeat')", "Use your mouth here again");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "ojouSolo1", name: "Homebound blowing"},
	{index: "ojouSolo2", name: "Risky gobjob"},
	{index: "ojouSolo3", name: "Good morning world"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "ojouIntro": {
			writeHTML(`
				im ojouIntro.jpg
			`);
			break;
		}
		case "ojouSolo1": {
			writeHTML(`
				im ojouSolo1-1.jpg
				im ojouSolo1-2.jpg
				im ojouSolo1-3.jpg
				im ojouSolo1-4.jpg
				im ojouSolo1-5.jpg
			`);
			break;
		}
		case "ojouSolo2": {
			writeHTML(`
				im ojouSolo2-1.jpg
				im ojouSolo2-2.jpg
				im ojouSolo2-3.jpg
				im ojouSolo2-4.jpg
			`);
			break;
		}
		case "ojouSolo3": {
			writeHTML(`
				im ojouSolo3-1.jpg
				im ojouSolo3-2.jpg
				im ojouSolo3-3.jpg
				im ojouSolo3-4.jpg
				im ojouSolo3-5.jpg
				im ojouSolo3-6.jpg
				im ojouSolo3-7.jpg
				im ojouSolo3-8.jpg
				im ojouSolo3-9.jpg
			`);
			break;
		}
		case "ojouSolo1Repeat": {
			writeHTML(`
				im ojouSolo1-1.jpg
				im ojouSolo1-2.jpg
				im ojouSolo1-3.jpg
				im ojouSolo1-4.jpg
				im ojouSolo1-5.jpg
			`);
			break;
		}
		case "ojouSolo2Repeat": {
			writeHTML(`
				im ojouSolo2-1.jpg
				im ojouSolo2-2.jpg
				im ojouSolo2-3.jpg
				im ojouSolo2-4.jpg
			`);
			break;
		}
		case "ojouSolo3Repeat": {
			writeHTML(`
				im ojouSolo3-1.jpg
				im ojouSolo3-2.jpg
				im ojouSolo3-3.jpg
				im ojouSolo3-4.jpg
				im ojouSolo3-5.jpg
				im ojouSolo3-6.jpg
				im ojouSolo3-7.jpg
				im ojouSolo3-8.jpg
				im ojouSolo3-9.jpg
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
	{index: "reward", requirements: "?trust ojou 80;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/ojou/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("ojou", "", "You've finished all of ojouF's content for this version, great work!");
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