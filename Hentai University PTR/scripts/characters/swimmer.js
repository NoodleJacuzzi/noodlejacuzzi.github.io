var character = {index: "swimmer", fName: "Naomi", lName: "Greens", trust: 0, encountered: false, textEvent: "", met: false, color: "#8DB7D0", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas"};

var logbook = {
	index: "swimmer", 
	desc: "A student on the swimming team. She's also a backup for the volleyball team, though she tends to only fill in there if there's been an injury, or during practice.",
	body: "Sun kissed, with tan lines. Her body makes it clear that she spends much of her time in a swimsuit outdoors.",
	clothes: "Wears her school uniform relaxed, in a way that shows her tan lines off obviously.",
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
		case "swimmer1": {
			passTime();
			setTrust('swimmer', 30)
			addFlag("coach", "swimmermet")
			writeText("You've been waiting for quite a while for swimmerF to get to your office. It's been nearly a half an hour since coachF said she sent her...");
			writeText("You're picking up your phone to call coachF and ask if she's seen swimmerF, when you finally hear a knock at your door.");
			writeSpeech("player", "", "The door is open, come on in.");
			writeText("swimmerF strolls into your office, seemingly unaware of how late she is.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Hi, playerF! coachF told me something about... Uh.. 'a student goodness program' or something and she asked me to come see you!");
			writeSpeech("player", "", "'Student Wellness Program.' And you're a little late, swimmerF. Did something happen?");
			writeText("She looks a little embarassed and looks away from you.");
			writeSpeech("swimmer", "", "I'm not <i>that</i> late, am I?");
			writeSpeech("player", "", "Getting close to an hour late, actually.");
			writeSpeech("swimmer", "", "Oof. Sorry, playerH. I just... I got distracted on my way here. I got to talking with a friend I saw in the hallway, then I had to go to the bathroom, then I forgot my backpack in the gym, so I had to go back there, and then when I got there I got caught up talking to orangeF about...");
			writeText("You swear, she doesn't even stop to breathe. And this sentence never ends.");
			writeSpeech("player", "", "It's alright swimmerF. You were late, that's fine. And from the sound of it, it lines up pretty well with what I've heard from your teachers.");
			writeText("She looks down again, stopping her endless runon sentence as you continue.");
			writeSpeech("player", "", "That's part of the reason I asked to see you, swimmerF. It seems like... Well, I'm not trying to be rude, but do you have trouble focusing on things? In or out of class?");
			writeSpeech("swimmer", "", "I guess, playerH. I mean... I just tend to get distracted, you know? Like, I start doing or working on something, then something else comes up and I drop what I'm working on, then I never get back to it and suddenly I have three half finished assignments and it's time for class.");
			writeSpeech("player", "", "It's not an uncommon problem, swimmerF. I may have a way to help you with that. sportsF had a similar problem with her Organic class, and it helped her.");
			writeSpeech("swimmer", "", "I'll be honest, playerT playerF, if I got half the improvement sportsF saw in her class, I'd do just about anything. Like, I don't know what you did, but she really turned that class around. I have to take that class next semester and I'm actually pretty worried about it, and...");
			writeSpeech("player", "", "Breathe, swimmerF. Take a minute. I practice hypnosis. It's a pretty good tool for helping people focus. It's... It's basically guided meditation. It helped sportsF, it may help you if you want to give it a shot.");
			writeSpeech("swimmer", "", "Sure, I guess. I don't know how much it'll help me, but I'd be willing to give it a shot. So should I like, close my eyes? Lean back? Is it one of those pocket watch dealies? Or am I going to like, watch a spiral spinning? I had a friend once who went to a stage hypnotist and she ended up dancing on stage like a....");
			writeSpeech("player", "", "Like a chicken. Yeah, yeah. It's not really like that. And...");
			writeText("You look at the clock. With how late she got here, you don't really have much time to work with for a session.");
			writeSpeech("player", "", "We're kind of out of time today. But my door is always open, swing by anytime and I'll do my best to help you out.");
			writeSpeech("swimmer", "", "Sounds good, playerT playerF! Now, I've got to take off. I think I have a calc assignment to do. Or was it biology...? Either way, then I've got to...");
			writeFunction("changeLocation(data.player.location)", "You let her ramble as she leaves your office.");
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
	{index: "swimmerreward", trust: 30,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "swimmerreward": {
			writePhoneImage("images/swimmer/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","That's all for swimmerF for now! I'll be expanding on the students soonish.");
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