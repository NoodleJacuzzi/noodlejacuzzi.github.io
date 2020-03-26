var character = {index: "cold", fName: "Kelsey", lName: "Lowe", trust: 0, encountered: false, textEvent: "", met: false, color: "#FCFFFA", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas"};

var logbook = {
	index: "cold", 
	desc: "A seniro student approaching graduation. Part of the volleyball team, though apparently not close to many students on campus.",
	body: "An older student, her maturity shows. Curvy in all the right places,.",
	clothes: "Tends towards practical clothing, a tight t-shirt and jeans are the usual fare.",
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
	{index: "cold2", name: "", location: '', time: "", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "placeholder", name: "", location: '', time: "", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cold1": {
			passTime();
			setTrust('cold', 30)
			addFlag("coach", "coldmet")
			writeText("It's not long before coldF knocks on your office door.");
			writeSpeech("player", "", "It's open, please, come in!");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coldF slowly opens the door and sits down across from you.");
			writeSpeech("cold", "", "Hello, playerF. I was told I should meet you today?");
			writeText("Her voice is very quiet. She looks nervous.");
			writeSpeech("player", "", "It's alright, coldF. No need to worry, you're not in trouble. The staff has just been trying to touch base with more students lately and make sure that they're doing well.");
			writeText("You can see her visibly loosen up. Maybe she thought she was in trouble for something?");
			writeSpeech("cold", "", "That's a relief at least. Sorry, playerF, I'm just not really used to the staff actually being helpful here, you know?");
			writeSpeech("player", "", "Fair enough. I've been trying to work on that lately. I know you know sportsF, and I've been trying to mentor coachF to behave herself a little more...");
			writeSpeech("cold", "", "Like a human being?");
			writeSpeech("player", "", "I was going to say 'empathetically', but pretty much, yeah.");
			writeText("She laughs, genuine and clear.");
			writeSpeech("cold", "", "Well, I don't know what you're doing, but keep it up. The last couple of weeks have been a lot better.");
			writeSpeech("player", "", "That's what I'm here for.");
			writeSpeech("cold", "", "The team appreciates it.");
			writeSpeech("player", "", "Well, today isn't all supposed to be complaining about coachF, though if you have more to say on that that's fine. Is there anything else you'd like to talk about, coldF? Anything about the school bothering you, or anything positive? This isn't a particularly formal thing, I'm just trying to feel things out and get a read on ways to make students' lives better. No matter how small.");
			writeSpeech("cold", "", "I... Hmm. No nothing about the school really comes to mind. I like the school fine, and aside from coachF's harshness things have been fine.");
			writeText("Hmm. Doesn't seem like you'll get much here.");
			writeSpeech("player", "", "That's a relief. Anything else on your mind lately? Having talked to some of your teachers and classmates, I have to say, I still don't know a lot about you. You seem to be a bit of a mystery.");
			writeText("Another laugh. It's a good laugh.");
			writeSpeech("cold", "", "I'm not a mystery, playerT playerF. I just... I don't get out much. Meeting new people tends to make me nervous, and... I dunno, I've always felt like it was hard to get myself out there, you know?");
			writeSpeech("cold", "", "So, I tend to keep to myself. Go to class, go to practice, go home. The times I do go out it feels like I'm... I dunno, not really making the most of it? I guess that's something that's kind of bothering me?");
			writeText("She looks surprised by what comes out of her mouth.");
			writeSpeech("cold", "", "Huh. Now that I say it out loud, it seems kinda silly.");
			writeSpeech("player", "", "It's not silly at all, coldF.");
			writeSpeech("cold", "", "I guess. I just... I don't really know of a way to make it better, you know?");
			writeText("Huh. This may be easier than you thought.");
			writeSpeech("player", "", "I may have something for you, coldF. I have a hobby that could help out.");
			writeSpeech("cold", "", "A hobby? What, like, you want me to pick up stamp collecting to go and meet people?");
			writeText("Your turn to laugh.");
			writeSpeech("player", "", "No, no. I practice hypnosis. It's not really what people think, but it can be a good tool for helping relax people and get them more comfortable. I may be able to help you with your confidence problem if you want to give it a shot.");
			writeText("She looks skeptical. Reasonably so, but you are a little offended.");
			writeSpeech("cold", "", "I don't know about that one, playerF. That seems... Weirdly new age-y for what I expected today.");
			writeSpeech("player", "", "It's fine if you're not on board right now. Tell you what, ask sportsF about it. I helped her study using hypnosis. Helped her ingrain little tricks for maintaining focus when she's studying. You're not wrong that it's kind of silly, but results are results. Even if it's just placebo effect, anything that helps is a tool, right?");
			writeText("She still doesn't look entirely convinced, but she's coming around to the idea. She makes a show of sighing loudly as she speaks up again.");
			writeSpeech("cold", "", "Fine. I'll ask sportsF. Her grades did really improve, but I honestly thought maybe that was just the fact that you were her tutor and she wanted to impress you.");
			writeSpeech("cold", "", "And I mean, the worst that happens is probably just you end up looking like an idiot... Uhh, no offense.");
			writeSpeech("player", "", "None taken. We don't have time today, but my door is always open. If you decide that you want to try, just let me know.");
			writeSpeech("cold", "", "I'll think it over. Now, if you'll excuse me, I should probably get to class.");
			writeFunction("changeLocation(data.player.location)", "coldF gathers her things and leaves.");
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
	{index: "coldreward", trust: 30,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "coldreward": {
			writePhoneImage("images/cold/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","That's all for coldF for now! I'll be expanding on the students soonish.");
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