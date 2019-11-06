var character = {index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "", color: "#677b4c",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "green", 
	desc: "A fellow university teacher. Her sister works here too. Her personality flips when around her sister, acting almost like she's in a trance.",
	body: "She's the younger sister, and keeps herself more in shape.",
	clothes: "She prefers to wear green over any other color, it goes well with her sister's outfits.",
	home: "She lives somewhere south of the shopping district, but spends most of her time at the school. ",
	tags: "No scenes yet, sorry!",
	artist: "Artist: Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introduction", name: "A teacher is doing paperwork here", location: 'teacherLounge', time: "MorningEvening", itemReq: "File T-1", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introduction": {
			writeBig("images/green/profile.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Hi there, is Ms. "+lName('scarf')+" here?");
			writeSpeech("green", "", "That's me, hello! Or did you mean my sister?");
			writeSpeech("player", "", "Oh, you're related? That's interesting. Could you...");
			writeText("...");
			writeText("You explained the situation to "+fName('green')+".");
			writeSpeech("green", "", "That certainly sounds like her. I'll give her the message, but I don't think she'll listen.");
			writeSpeech("player", "", "Alright, plan B then.");
			writeText("You look around to make sure you and "+fName('green')+" are alone. This is probably overkill for making sure the room gets cleaned, but you were probably going to hypnotize all the teachers at some point.");
			writeSpeech("player", "", "Alright, could you just look at this coin here? Watch it swing back and forth, back and- Wait what?");
			writeText(fName('green')+" suddenly stands up with a angry glare in her eyes.");
			writeSpeech("green", "", "So you're the piece of shit that's been doing all this...");
			writeSpeech("player", "", "Fuck, wait.");
			writeText("She starts charging towards you. You've never actually fought anybody, and your hypnosis has never backfired this hard before. It likes like you have no choice but to fight.");
			writeText("... Or that's what you thought. You hear someone snapping their fingers and "+fName('green')+" goes slump on the ground.");
			writeSpeech("scarf", "", "You shouldn't play with other people's toys, you know.");
			writeBig("images/scarf/profile.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "", "Well I suppose it can't be helped. Two artists like us, we're bound to bump into each other.");
			writeText("Her words are slow and measured, just looking at her makes your brain fuzz over a little.");
			writeSpeech("player", "", "Are you a hypnotist, like me?");
			writeSpeech("scarf", "", "Like you? Well, maybe in some ways. I'm someone who's already had my fun, so to speak. I became bored of the power some time ago, like you will someday.");
			writeSpeech("player", "", "Not going to happen. Not while I have a working dick.");
			writeSpeech("scarf", "", "Oho~. So passionate. I'll take your word for it, I suppose. Was there a reason you tried to hypnotize my sister, perchance? She was moments from killing you, I was very thorough planting traps in her mind in case anyone tried to steal my toy.");
			writeText("...");
			writeSpeech("scarf", "", "Cleaning? You wanted the room to be... Ah, you must be trying to appeal to the principal. Fine. I'll have her clean up after me. I'll be keeping an eye on you. You wanted my sister yes? I could be entreated to... share, her. If you can entertain me.");
			writeSpeech("player", "", "I take it that dicking you here wouldn't be enough?");
			writeSpeech("scarf", "", "Such confidence~! But you are correct. I have a... refined, pallete. Bring me your conquests, and I might teach you some of the spells I've learned over the years.");
			writeSpecial("You've earned "+fName('scarf')+"'s attention! She can improve your hypnosis skills. Someday, you might be able to bring characters you've hypnotized to unlock new scenes!");
			setTrust('scarf', 40);
			setTrust('green', 40);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
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
		case "placeholder": {
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
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
	{index: "placeholder", trust: 200,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
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
			for (i = 0; i < encounterArray.length; i++) {
				if (encounterArray[i].location.includes(data.player.location)) { //check the location
					if (encounterArray[i].time.includes(data.player.time)) { //check the time
						if (encounterArray[i].trustMin <= checkTrust(character.index) && encounterArray[i].trustMax >= checkTrust(character.index)) { //check the trust requirements
							if (encounterArray[i].day == "even" && data.player.day%2 == 0) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].reqItem) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
							if (encounterArray[i].day == "odd" && data.player.day%2 == 1) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].itemReq) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
							if (encounterArray[i].day == "both") {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].itemReq) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
						}
					}
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
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
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
		break;
	}
	case "phoneEvent": {
		writePhoneEvent(eventName);
		break;
	}
}