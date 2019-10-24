var character = {index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "", textColor: "#954655",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "scarf", 
	desc: "A fellow university teacher. Her sister works here too. She's an expert hypnotist suffering from a 'artist's block'.",
	body: "It's not clear how old she is. When you really focus, there's a slight blur around her body whenever you look at her.",
	clothes: "Her preferred outfit is a v-neck shirt and a yellow scarf. She must be wearing some sort of herbal perfume because your head feels fuzzy around her.",
	home: "She lives somewhere south of the shopping district, but spends most of her time at the school. ",
	tags: "No scenes yet, sorry! In the future her content will be dependent on increasing your Hypnosis skill.",
	artist: "Artist: Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introduction1", name: "A teacher is walking down the hall.", location: 'eastHallway', time: "MorningEvening", itemReq: "File T-1", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "caseSelect", name: "scarf is here.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 40, trustMax: 42, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introduction1": {
			writeText("You wave to her as she walks down the hallway.");
			writeBig("images/scarf/profile.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Excuse me, could I have-");
			writeText("But she just keeps walking, uninterested in conversation. It's like you're not even there.");
			writeSpeech("player", "", "Could I just have a second please?");
			writeText("... And she's gone, what a pain. This really isn't your job, but it'll help you get closer to "+fName('principal')+".");
			writeText("In any case if she isn't interested in chatting in the halls, maybe you'll find her in the teacher's lounge?");
			raiseTrust('scarf', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "caseSelect": {
			writeSpeech("scarf", "", "Yes? Did you need something? I loathe having my time wasted.");
			writeSpeech("player", "", "Oh, sorry. Were you doing something?");
			writeSpeech("scarf", "", "No, and I'd like to keep it that way.");
			switch (checkTrust('scarf')) {
				case 40: 
					writeFunction("writeEncounter('scarf1')", "I was hoping to learn something");
				break;
				case 41:
					writeFunction("writeEncounter('scarf2')", "I'd like another lesson");
				break;
				case 42:
					writeSpeech("scarf", "", "I'm still preparing your lesson. Have some patience, child.");
					writeSpeech("player", "", "I'll make you eat those words.");
					writeSpeech("scarf", "", "I'd absolutely love to see you try.");
				break;
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "scarf1": {
			writeSpeech("player", "", "Techniques. Skills. You're a confident woman, what do your know that I don't?");
			writeSpeech("scarf", "", "Hmhm. When I was in your shoes, I had nearly an entire town at my beck and call. I did a little more than seduce students.");
			writeSpeech("player", "", "Oh? And where's your town now?");
			writeSpeech("scarf", "", "...<br>I'll let you in on a little tip, child. You might feel the urge to torment others. Watch as the only one who isn't mind-broken to your will sees what's become of his family and lover. Don't. Instead of reveling in madness, he'll just go to the police.");
			writeSpeech("player", "", "I was maybe hoping for some more... Practical advice.");
			writeSpeech("scarf", "", "Fine, fine. I am a teacher after all.");
			writeSpeech("player", "", "I want to learn a technique to increase sensitivity. By a lot.");
			writeSpeech("scarf", "", "Oho~? And how exactly will you use something like that?");
			writeSpeech("player", "", "Well, to start...");
			writeText("...");
			writeSpeech("scarf", "", "I'm quite convinced. Very well then.");
			writeText(fName('scarf')+" teaches you a sensitivity increase technique.");
			data.player.hypnosis += 1;
			raiseTrust('scarf', 1);
			passTime();
			updateMenu();
			writeSpecial("Your skill in hypnosis has improved!");
			writeSpeech("scarf", "", "Try not to get killed. Or caught. Or bored.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "scarf2": {
			writeSpeech("player", "", "Surely a woman of your talents has discovered a more effective way to break minds.");
			writeSpeech("scarf", "", "Oho~ I can tell your flattery is empty, child, but honestly I don't care. Very well, I can teach you something.");
			writeText("...");
			writeSpecial("Your skill in hypnosis has improved!");
			writeSpeech("player", "", "Perfect. By the way, what's with the fuzz?");
			writeSpeech("scarf", "", "Excuse me?");
			writeSpeech("player", "", "Whenever I look at you, you've got some kind of glow about you. It makes you look out of focus.");
			writeSpeech("scarf", "", "My, you really are something. I'll admit, you have some talent. Maybe it's time for you to prove yourself?");
			writeSpeech("player", "", "What did you have in mind?");
			writeSpeech("scarf", "", "When I was your age, I didn't quite have a lovely school like this to run around in. I was seducing men into my service as playthings, and as protectors.<br>Come back some other time. I'll prepare a real challenge for you.");
			data.player.hypnosis += 1;
			raiseTrust('scarf', 1);
			passTime();
			updateMenu();
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