var character = {index: "chubby", met: false, fName: "Margaret", lName: "Williams", trust: 0, encountered: false, textEvent: "", color: "#da924b",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "chubby", 
	desc: "The mother of a university student, she's struggling to help her daughter improve her grades.",
	body: "She's a bit out of shape, but has a pretty good looking mom-bod with huge breasts. You've never seen her without a smile on her face.",
	clothes: "She prefers softer colors, her baggy clothes actually make her look larger than she is.",
	home: "She lives on Vintage Street with her daughter. She tends to sleep through the evenings.",
	tags: "Mom-Daughter Threesome",
	artist: "Artist: Oreteki18kin",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "test": {
			writeBig("images/tomgirl/1-2.jpg", "Art by Nagi Ichi");
			writeSpeech("???", "none", "Bro, it's not just the fact that they're missing! The whole thing just screams lazy!");
			writeSpeech("tomgirl", "", "Dude, I don't care about your virtual animals. I-");
			writeText("Two students are having a heated discussion about something, and one of them turns towards you as you walk up the stairs.");
			writeText("The one looking at you has an effeminate look to him, but gives off a pretty disrespectful vibe. His name is "+fName('tomgirl')+" "+lName('tomgirl')+" if you remember your files right.");
			writeText("He's staring at you, so you decide to...");
			writeBig("images/tomgirl/1-3.jpg", "Art by Nagi Ichi");
			writeFunction("loadEncounter('tomgirl', 'tomgirl2')", "Invite "+fName('tomgirl')+" to your office");
			writeFunction("changeLocation(data.player.location)", "Walk on by");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "chubby1", name: "Mother's Payment"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "chubby1": {
			writeSpeech("chubby", "", "Ah, hello!");
			writeText("chubbyF ushers you in quickly and closes the door.");
			writeSpeech("chubby", "", "Welcome back, *Master. I'm afraid purpleF is out right now. She's meeting with some friends. She's been doing so well lately, thank you again for all you've done.");
			writeSpeech("player", "", "No problem. I'm actually here for you.");
			writeSpeech("chubby", "", "Oh? Ah, I see.");
			writeText("One look at the bulge in your pants is all she needs to see.");
			writeText("...");
			writeBig("images/chubby/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Hmmhmm~ It's so warm and wet inside me, isn't it? Is it to your liking? I haven't had a "+data.player.gender+" in years, never someone like you, *Master.");
			writeSpeech("player", "", "You feel amazing, almost as tight as your daughter's pussy.");
			writeSpeech("chubby", "", "So polite! But, you know how a "+data.player.gender+" like you shows their honesty, right? <br>Not~<br>With~<br>Words~");
			writeText("Each word is punctuated with a gyration of her hips and a rhythmic clench of her pussy.");
			writeSpeech("chubby", "", "You're so cute *Master, you've got such a dreamy look on your face. Will you cum inside me? Will you pump enough sperm inside me to make me cumdrunk?");
			writeText("You can feel your balls clenching as you hear the front door opening and shutting after.");
			writeBig("images/chubby/1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Cumming~<br>Welcome home honey! *Master is here!");
			writeSpeech("purple", "", "*Master?!");
			writeText("purpleF runs into the room as your cock flops out of her mother.");
			writeBig("images/chubby/1-2.jpg", "Art by Oreteki18kin");
			if (data.player.gender == "man") {
				writeSpeech("chubby", "", "Don't worry honey, I saved you some. I'm sure *he'll be ready for another round after *he watches you suck his cum out of my pussy.");
			}
			else {
				writeSpeech("chubby", "", "Don't worry honey, I saved you some. I'm sure she'll be ready for another round after she watches you suck her cum out of my pussy.");
			}
			writeText("...");
			writeBig("images/purple/3-3.jpg", "Art by Oreteki18kin");
			writeText("You collapse backwards onto the bedspread, totally spent.");
			writeSpeech("chubby", "", "Now now purpleF, no need to be greedy.");
			writeText("The daughter doesn't have the stamina of the mother. After only two rounds purpleF couldn't take any more, and now she grimaces as she sucks the results of your fourth and fifth round off her mother's tits.");
			writeSpeech("chubby", "", "Now, what do we say for *Master?");
			writeSpeech("purple", "", "*Mwah*!<br>Thank you for filling us up *Master!");
			writeText("After a short break, you opt to get a move on as they fall asleep coated in your pungent cum.");
			if (data.player.location == "vintageStreet") {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
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
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			clearText('chubby');
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
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map") { //check the location
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