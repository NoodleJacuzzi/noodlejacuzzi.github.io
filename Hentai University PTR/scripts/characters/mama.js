var character = {index: "mama", fName: "Sofia", lName: "Rossi", trust: 0, encountered: false, textEvent: "", met: false, color: "#A2DAF1", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false,};

var logbook = {
	index: "", 
	desc: "",
	body: "",
	clothes: "",
	home: "",
	tags: "",
	artist: "",
	author: "",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "Someone walking by catches your eye", requirements: "?trust mama 0; ?location streets;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "intro": {
			writeHTML(`
				t As you're walking down the street a woman wearing a pair of expensive-looking necklaces catches your eye.
				im imagebox/mama/108.jpg
				t Well, there are other features about her too. But it'd be impolite to stare. You do notice that she's noticed something about you as well.
				sp mama; Oh, I think I recognize you.
				sp player; Have you been around the local university lately? I'm a counselor there.
				sp mama; Ah, that's the school my son will be attending~!<br>*ahem* Right, I was sent the itinerary for the next PTSA meeting, I think you came up.
				sp player; You're attending the meetings before your son starts attending the school?
				t There's something odd about her, but more importantly if she'll be attending the meeting it's important to have her in your pocket. You can't exactly pass the "I want to enslave every woman in the school to serve as my sex slave" order with just a majority vote.
				sp player; Well, in any case would you like to talk for a moment? I was hoping to discuss some things with you, about the PTSA and maybe even about your son when he starts attending.
				im 110.jpg
				t She gives you a once over.
				sp mama; ... No thank you, I'm quite alright. I'm sure I'll be seeing enough of you at the meeting.<br>Plus, my son certainly won't be needing any... What did you say you did? Counseling? None of that, so I don't think we'll be seeing very much of each other.
				sp player; I... Wh-
				t With that she starts walking away, not even interested in pretending you're worth the time. She probably lives in a well-off neighborhood given how fancy her clothes, jewelry, and purse were, and she'd need to be close, so Vintage Street is most likely where you can find her.
				t But if she's well off you can't exactly barge in through the front door, and her curtness tells you she might not have a wide social circle you can take advantage of. You'll need some serious help to get close enough to hypnotize her. Maybe you should start with some of the other PTSA members?
				
				t You explain the situation to nurseF, and she's already mixing together some chemicals.
sp nurse; Brunette you said? I'll have to guestimate how sensitive her nose is, and... Alright. I've got a formula ready. A potion that'll allow you to transform yourself to disguise yourself as the object of her affection, or whatever she's really horny for at the moment.
				
				sp player; ... Okay, I guess I can do something with that. I could disguise myself and fake some scandalous shot of her coming on to me, blackmail her, the works. 
sp scarf; I suppose I could help you out in that regard by teaching you a small something. It's all in the posture after all. <br>But I'm surprised. I thought you'd go straight for dominating her, pounding her senseless as she believes she's being impregnated by her own son. 
sp player; Eeh... I mean... 
sp scarf; Plus, she's exactly the type for you to disguise yourself as a fat-cocked bull and pound her so hard she'd throw her child under a bus to snort a line of your jizz. I know the type.


			`);
			writeFunction("changeLocation('playerHouse')", "Go home");
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
		case "intro": {
			writeHTML(`
				t As you're walking down the street a woman wearing a pair of expensive-looking necklaces catches your eye.
				im 108.jpg
				t Well, there are other features about her too. But it'd be impolite to stare. You do notice that she's noticed something about you as well.
				sp mama; Oh, I think I recognize you.
				sp player; Have you been around the local university lately? I'm a counselor there.
				sp mama; Ah, that's the school my son will be attending~!<br>*ahem* Right, I was sent the itinerary for the next PTSA meeting, I think you came up.
				sp player; You're attending the meetings before your son starts attending the school?
				t There's something odd about her, but more importantly if she'll be attending the meeting it's important to have her in your pocket. You can't exactly pass the "I want to enslave every woman in the school to serve as my sex slave" order with just a majority vote.
				sp player; Well, in any case would you like to talk for a moment? I was hoping to discuss some things with you, about the PTSA and maybe even about your son when he starts attending.
				im 110.jpg
				t She gives you a once over.
				sp mama; ... No thank you, I'm quite alright. I'm sure I'll be seeing enough of you at the meeting.<br>Plus, my son certainly won't be needing any... What did you say you did? Counseling? None of that, so I don't think we'll be seeing very much of each other.
				sp player; I... Wh-
				t With that she starts walking away, not even interested in pretending you're worth the time. She probably lives in a well-off neighborhood given how fancy her clothes, jewelry, and purse were, and she'd need to be close, so Vintage Street is most likely where you can find her.
				t But if she's well off you can't exactly barge in through the front door, and her curtness tells you she might not have a wide social circle you can take advantage of. You'll need some serious help to get close enough to hypnotize her. Maybe you should start with some of the other PTSA members?
			`);
			writeFunction("changeLocation('playerHouse')", "Go home");
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