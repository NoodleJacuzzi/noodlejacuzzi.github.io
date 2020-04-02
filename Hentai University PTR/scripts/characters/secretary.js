var character = {index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "secretary", 
	desc: "The principal's personal secretary. She handles a great deal of general paperwork for the school, although a lot of it needs to be corrected.",
	body: "She has pretty much no confidence in herself at all. Supposedly she laments not having a boyfriend, but she never actually makes any effort to make new friends.",
	clothes: "Her clothes tend to look new or very well kept, and she dresses quite conservatively.",
	home: "She lives somewhere in town, probably close to the principal's home since they tend to arrive at the same time.",
	tags: "No scenes yet, sorry!",
	artist: "Artist: Oreteki18kin",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "test", name: "", location: 'schoolEntrance', time: "Evening", itemReq: "", trustMin: 200, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
]

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
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "test": {
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
	{index: "testPhone", trust: 200,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "testPhone": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage for images, and writePhoneChoices
			writePhoneSpeech("mom", "", "Hello. This is "+fName('mom')+".");
			writePhoneChoices("Sleep well?", "Who?");
			break;
		}
		case "momPhone1A": {
			writePhoneSpeech("player", "", "Sleep well?");
			writePhoneSpeech("mom", "", "Yes. I have not slept that well in years, thank you.");
			writePhoneSpeech("mom", "", "It was probably the booze though.");
			writePhoneSpeech("mom", "", "I will talk to you again later.");
			writePhoneSpeech("player", "", "Take care.");
			setTrust('mom', 81);
			break;
		}
		case "momPhone1B": {
			writePhoneSpeech("player", "", "Who?");
			writePhoneSpeech("mom", "", "Sorry. I must have the wrong number. Please have a nice day.");
			writePhoneSpeech("mom", "", "Wait");
			writePhoneSpeech("mom", "", "You jerk I can see your picture attached to the number");
			writePhoneSpeech("player", "", "Sorry, I couldn't resist. How're you doing?");
			writePhoneSpeech("mom", "", "I am doing well. Still hungover. Good night.");
			writePhoneSpeech("player", "", "Take care. Talk to you later.");
			setTrust('mom', 81);
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
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
					console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var finalResult = true;
					if (encounterArray[number].requirements.includes("loc") == true) {
						var loc = encounterArray[number].requirements.split(`location `).pop().split(`;`)[0];
						var finalLocation = loc;
						if (data.player.gps != true) {
							if (loc.includes(data.player.location) != true) {
								finalResult = false;
							}
						}
						else {
							if (loc.includes(data.player.location) != true && data.player.location != "map") {
								finalResult = false;
							}
						}
					}
					if (encounterArray[number].requirements.includes("item") == true) {
						var item = encounterArray[number].requirements.split(`item `).pop().split(`;`)[0];
						if (checkItem(item) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("time") == true) {
						var time = encounterArray[number].requirements.split(`time `).pop().split(`;`)[0];
						if (time.includes(data.player.time.toLowerCase()) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("parity") == true) {
						var time = encounterArray[number].requirements.split(`parity `).pop().split(`;`)[0];
						switch (parity) {
							case "even": {
								if (data.player.day%2 == 1) {
									finalResult = false;
								}
							}
							case "odd": {
								if (data.player.day%2 == 0) {
									finalResult = false;
								}
							}
							default: {
								//console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
							}
						}
					}
					for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
						var corruptionTarget = data.story[characterIndex].index;
						if (encounterArray[number].requirements.includes("trust " + corruptionTarget) == true) {
							var trust = encounterArray[number].requirements.split(`trust `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) != trust) {
								finalResult = false;
							}
							//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
							var trustMin = encounterArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) < trustMin) {
								finalResult = false;
							}
							//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
							var trustMax = encounterArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) > trustMax) {
								finalResult = false;
							}
							//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("flag " + corruptionTarget) == true) {
							var flag = encounterArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkFlag(corruptionTarget, flag) != true) {
								finalResult = false;
							}
							//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
						}
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
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			if (phoneArray[number].trust != null) {
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
				//console.log("Now examining phone entry "+phoneArray[number].index+phoneArray[number].requirements);
				var finalResult = true;
				if (phoneArray[number].requirements.includes("item") == true) {
					var item = phoneArray[number].requirements.split(`item `).pop().split(`;`)[0];
					if (checkItem(item) != true) {
						finalResult = false;
					}
				}
				for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
					var corruptionTarget = data.story[characterIndex].index;
					if (phoneArray[number].requirements.includes("trust " + corruptionTarget) == true) {
						var trust = phoneArray[number].requirements.split(`trust `+corruptionTarget+`: `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) != trust) {
							finalResult = false;
						}
						//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
						var trustMin = phoneArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) < trustMin) {
							finalResult = false;
						}
						//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
						var trustMax = phoneArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) > trustMax) {
							finalResult = false;
						}
						//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("flag " + corruptionTarget) == true) {
						var flag = phoneArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkFlag(corruptionTarget, flag) != true) {
							finalResult = false;
						}
						//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
					}
				}
				if (finalResult == true) {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
						if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
							if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
								finalMessage = phoneArray[number].index;
							}
						}
					}
				}
				if (finalMessage != "") {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) {
						if (data.story[phoneEventCheck].index == character.index) {
							if (
							data.story[phoneEventCheck].unreadText != true &&
							data.story[phoneEventCheck].textEvent.includes(finalMessage)==false &&
							data.story[phoneEventCheck].textHistory.includes(finalMessage)==false
							) {
								notification(character.index);
								data.story[phoneEventCheck].unreadText = true;
								data.story[phoneEventCheck].textEvent = finalMessage;
								data.story[phoneEventCheck].textHistory += finalMessage;
								console.log(data.story[phoneEventCheck].textEvent);
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