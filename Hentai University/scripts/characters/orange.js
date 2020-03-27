var character = {index: "orange", fName: "Vanessa", lName: "Lions", trust: 0, encountered: false, textEvent: "", met: false, color: "#BA5B17", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas"};

var logbook = {
	index: "orange", 
	desc: "A new student on campus, and a rising star on the colleyball team.",
	body: "Stacked, is the first word that comes to mind. Despite her impressive figure, though, she tends to wear her hair in a way that emphasizes her youth.",
	clothes: "Usually wears a sporty hoody over her school uniform.",
	home: "eastHallway",
	tags: "",
	artist: "Himitsu Kessha Vanitas",
	author: "Slackersavior",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "placeholder", name: "", location: '', time: "", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "placeholder", name: "", location: '', time: "", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "orange1": {
			passTime();
			setTrust('orange', 40)
			addFlag("coach", "orangemet")
			writeText("You wait for orangeF. It's not long before she knocks on your door. What you weren't expecting was the yelling seconds after the knock.");
			writeSpeech("orange", "", "playerF! I'm supposed to come to you for a meeting! I'm coming in!");
			writeText("She doesn't even get to the end of her warning before she's halfway in the door.");
			writeSpeech("orange", "", "Oh! Hi, playerF!");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("This girl needs a volume dial.");
			writeSpeech("player", "", "Little loud, orangeF. Though I'm glad you're apparently excited to be here. Do you know why you're here today?");
			writeText("Her face frumples into a scowl.");
			writeSpeech("orange", "", "Yeah, I think I do. I've... Gotten into a few fights, and they're worried I might make it a habit.");
			writeSpeech("orange", "", "But I won't! I swear! I only got into fights when people were acting rude. And I've never hit anyone. It's not that big a deal.");
			writeText("She really does seem to have a hair trigger.");
			writeSpeech("player", "", "Hey. orangeF. Calm down. I didn't mean to accuse you of anything. I just want to help.");
			writeText("She seems to realize that she was yelling at you.");
			writeSpeech("orange", "", "Oh. Sorry, playerF. I didn't mean to... It's just... Uuugh.");
			writeText("orangeF seems to cool down a bit and takes a seat across from you.");
			writeSpeech("orange", "", "Just, the things I've gotten made fun of since I got here kinda... Kinda hit me hard.");
			writeText("She looks at you as if wondering how much more to say.");
			writeSpeech("player", "", "You don't have to share anything you don't want to, orangeF. I just want to be sure that our students are all okay. Don't worry too much, even sportsF had a lot of trouble talking to me about her problems at first. We can take as much time as you need, and if you feel uncomfortable at any point, you're not required to be here.");
			writeText("She looks down when you mention sportsF. From what you could figure out, orangeF really looks up to her as a role model. Hopefully her recommendation helps you out here.");
			writeSpeech("orange", "", "... Thanks, playerF. That does make me feel better. Sorry about being so twitchy. So... Uhm... What exactly...?");
			writeText("You give her a smile and a shrug.");
			writeSpeech("player", "", "There isn't any real formal procedure here, orangeF. For now we can just chat. Let me know how you're doing. If there's anything bothering you at school or at home. It doesn't have to be serious. For now, think of it as getting to know each other. You don't have to think about anything too hard.");
			writeText("She seems a little confused, but after a few seconds starts to nod and begins talking. It takes her a bit, but before long she's gotten up to speed and feeling comfortable around you.");
			writeSpeech("orange", "", "Well, lately, my classes have been...");
			writeSpeech("orange", "", "And I like coldF, she's fun to be around, but it always feels like she's working so hard to make things work...");
			writeSpeech("orange", "", "I've been having trouble in scarfF's class lately, honestly. But she always seems to be two steps ahead of me and usually makes a point to help when I'm having trouble. It'd be creepy if it wasn't so helpful. But apparently she's like that with everyone...");
			writeSpeech("orange", "", "Also, apparently there's a girl in my class who wants to be a pornstar! That's crazy! But... To be honest... If she did star in something I'd definitely want to see that one.");
			writeText("It's been about an hour now, and she's much more relaxed around you now. Honestly, that last one may have been a bit too much information, but you're not complaining. She still seems to be dancing around whatever the issue was that set her off, but progress is progress.");
			writeSpeech("orange", "", "Oh, my God! Did I just say that out loud?");
			writeSpeech("player", "", "Don't sweat it orangeF. Glad you're feeling more comfortable with this whole process now, though. You should probably get back to class now, but you're more than welcome to have another session with me anytime. My door is always open.");
			writeText("She lets out a sigh, sinking back in the chair before speaking.");
			writeSpeech("orange", "", "I may just take you up on that, playerF. This has actually been kind of nice.");
			writeFunction("changeLocation(data.player.location)", "You get up and help her pack her things before closing the door. Despite the short fuse, she's a nice girl.");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
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
	{index: "orangereward", trust: 40,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "orangereward": {
			writePhoneImage("images/orange/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","That's all for orangeF for now! I'll be expanding on the students soonish.");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
console.log(character.index+'.js loaded correctly. request type is '+requestType)

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
				if (encounterArray[i].altImage == undefined) {
					encounterArray[i].altImage == "";
				}
				if (encounterArray[i].altName == undefined) {
					encounterArray[i].altName == "";
				}
				if (encounterArray[i].location.includes(data.player.location)) { //check the location
					if (encounterArray[i].time.includes(data.player.time)) { //check the time
						if (encounterArray[i].trustMin <= checkTrust(character.index) && encounterArray[i].trustMax >= checkTrust(character.index)) { //check the trust requirements
							if (encounterArray[i].day == "even" && data.player.day%2 == 0) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].reqItem) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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