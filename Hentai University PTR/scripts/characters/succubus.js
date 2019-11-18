var character = {index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira"};

var logbook = {
	index: "succubus", 
	desc: "A succubus (male), the lowest rank of demons aside from imps. He's been trying to seduce humans to increase his rank.",
	body: "While disguised he looks entirely human, albeit incredibly feminine for a boy.",
	clothes: "One of his hobbies is collecting girl's clothes. He claims it's purely for seduction purposes.",
	home: "He comes over to your place every night, but you don't know if he actually needs to sleep.",
	tags: "Corruption, anal, tomgirl, trap, cosplay, prostitution, demon",
	artist: "Gujira",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introOffer", name: "Someone is leaning on the wall, they look like they're waiting for someone.", location: 'street', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "windowProposal", name: "Someone in cosplay is sitting in your windowsill", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "???", altImage: "succubus.jpg",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introOffer": {
			writeText("Normally you'd just walk past someone passing time on their phone, but something about him just seems... Off. Not quite in a bad way.");
			writeText("Just looking at him makes your vision a little blurry, like your head is being filled with pink fuzz. After a second of focus it dissipates though, maybe he's wearing perfume?");
			writeSpeech("player", "", "Hi. Are you waiting for someone?");
			writeBig("images/succubus/profile.jpg", "Art by Gujira");
			writeText("Without looking you in the eye, he glances up from his phone to size up your body.");
			writeSpeech("succubus", "", "You'll do. Name's Gou, don't need yours<br>Fifty bucks for an hour, you won't need any longer.");
			writeText("He's pretty direct, and it doesn't seem like anyone's watching.");
			writeFunction("writeEncounter('introAcceptance')", "Accept");
			writeFunction("writeEncounter('introRejection')", "Refuse");
			break;
		}
		case "introAcceptance": {
			writeSpeech("player", "", "Sounds fair. I'll probably need more than an hour though.");
			writeSpeech("succubus", "",  "Sure you will buddy, sure you will.");
			writeText("Eyes still locked on his phone, he leads you to a nearby hotel.");
			writeSpeech("player", "", "Not getting the money up front? And you'll just do anyone who asks?");
			writeSpeech("succubus", "",  "I've got my standards and my methods.");
			writeText("The hotel is a actually a pretty nice looking place, but the receptionist doesn't even seem to notice as the two of you walk by.");
			writeText("The elevator ride up is pretty slow. He tends to answer your questions with single-word 'yup's.");
			writeSpeech("player", "", "Gotta say, not impressed so far. Not super interested in a boy going starfish under me.");
			writeSpeech("succubus", "",  "Heh. You don't need to worry, you're about to have the time of your life.");
			writeSpeech("player", "", "Sure. You got a name? A real name, I mean.");
			writeSpeech("succubus", "", "... succubusF.");
			writeText("Whoever he really is, he seems pretty keen on keeping this anonymous. Probably for the best, otherwise you'd need to hypnotize him afterwards. His uniform isn't familiar, he probably doesn't go to your university.");
			writeText("He fishes out a keycard and the two of you enter the room, the lighting and decorations being very direct about the room's purpose.");
			writeText("He takes off the outer layer of his clothes and takes a seat, before rolling his neck trying to work out a kink.");
			writeText("All he's wearing is an extremely lewd set of lingerie, but his bratty posture doesn't do a great job of showing off.");
			writeSpeech("succubus", "", "God I'm tired... This is my only catch this week, gotta hit up Vintage Street after this...<br>Dick out, hurry up.");
			writeFunction("writeEncounter('introWhoring')", "Get Undressed");
			break;
		}
		case "introWhoring": {
			setTrust('succubus', 1);
			writeEvent('disguise1');
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "introRejection": {
			writeSpeech("player", "", "No thanks, I'm good.");
			writeSpeech("succubus", "",  "Huh.");
			writeText("He seems suprised that you'd disagree. ");
			writeSpeech("succubus", "",  "Well, you do you. <br>... I must be tired. I'll try again tomorrow.");
			writeText("He mutters to himself before leaving.");
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "maid": {
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "windowProposal": {
			writeFunction("writeEncounter('windowAcceptance')", "Accept");
			writeFunction("writeEncounter('windowRejection')", "Refuse");
			break;
		}
		case "windowAcceptance": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "windowRefusal": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "caseSelect": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "tomgirlStart": {
			writeFunction("changeLocation('caseSelect')", "Back");
			break;
		}
		case "tomgirlEnd": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "tomgirlEarly": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "mejiStart": {
			writeFunction("changeLocation('caseSelect')", "Back");
			break;
		}
		case "mejiEnd": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "mejiEarly": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "disguise1", name: "Streetwalking"},
	{index: "disguise2", name: "Maid Whoring 1"},
	{index: "disguise3", name: "Maid Whoring 2"},
	{index: "succubus1", name: "Making Breakfast"},
	{index: "succubus2", name: "Succubus Milk"},
	{index: "succubus3", name: "Succubus Game"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "disguise1": {
			writeSpeech("player", "", "Not very good at setting the mood, are you?");
			writeSpeech("succubus", "", "Ugh, a talker.");
			writeText("He leans forwards and touches your hand. His skin is <i>soooof-</i>");
			writeText("You stumble, that was weird. The pink fuzz came back for a second. Now, with seemingly no warning, you've got a massive erection.");
			writeSpeech("succubus", "", "Damn, what the hell is going on? ");
			writeSpeech("player", "", "Alright, I'm getting some mixed signals here, this is getting fishy. What's-");
			writeText("Suddenly, he stands up and pulls you into a kiss, and the pink fuzz fills your brain again much more intensely this time.");
			writeText("Once he backs off you take a moment to focus and the fuzz fades. While you're fighting off whatever's going on, he pulls off his top and skirt, and relaxes on the bed.");
			if (data.player.gender == "Man") {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old man is resisting.");
			}
			else {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old hag is resisting.");
			}
			writeSpeech("player", "", "Excuse me?");
			writeSpeech("succubus", "", "God fucking Jes- what the hell!?");
			writeText("He falls forwards in surprise.");
			writeSpeech("player", "", "You know I can hear you right? Are you trying to drug me?");
			writeSpeech("succubus", "", "Uh... Fuck, uh, yeah! Yeah I was drugging you. Guess it didn't work, wow! You've got a really strong uh... Fuck, what's that thing you have?");
			writeSpeech("player", "", "What?");
			writeSpeech("succubus", "", "Stomach! Yeah, stomach! Wow, bet you really want to take your frustrations out on me now, haha!");
			writeSpeech("player", "", "Fuck, this was fishy after all.");
			writeText("You start to leave, this is almost definitely a trap. As you get moving, finally makes eye contact with you, shooting you his best bedroom eyes. If he seriously thinks that's going to be en-");
			writeBig("images/succubus/profileP.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aww, come on. Don't you want some of this? You know you <span style='color: #fc53f1'>can't resist</span>.");
			writeText("Something's wrong. Something's wrong. You need to keep repeating that to yourself because your body isn't listening. There's something in the air, it's relaxing and energizing you at the same time.");
			writeText("You half walk, half stumble over to the bed.");
			writeSpeech("player", "", "Can't... What's going-");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Shhhh.</span>");
			writeBig("images/succubus/1-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "eyes.jpg", "I'm <span style='color: #fc53f1'>really</span> sorry about how I've been acting. A real <span style='color: #fc53f1'>playerMan</span> like you deserves better, right?");
			writeText("You feel like the wind got knocked flat out of you as his tongue runs across you nipple.");
			writeBig("images/succubus/1-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Just close your eyes, I'll make you feel a lot better, okay? Don't worry about money, time, or even your life. Just sit tight and let me blow your mind.");
			writeBig("images/succubus/1-3.jpg", "Art by Gujira");
			writeText("He's got to have some kind off drugged lipstick or something, because the moment he wraps his lips around your nipple you feel like a live wire current is ripping through you.");
			writeBig("images/succubus/1-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aaaah~<br>You're really incredible playerMister.<br>And you're still hard too! I've changed my mind, I don't need anyone else, you're my new sex slave, okay?");
			writeSpeech("player", "", "Ghh...");
			writeSpeech("succubus", "", "And you're still resisting! I really stumbled onto a diamond, didn't I? Are you even human?<br>Ah, I'm really pent up, so this is risky... Fuck it, I'll take that gamble!");
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Come on, I can't wait any longer!");
			writeSpeech("player", "", "<i>Gotta fight... Can't let this little bitch... Beat me...</i>");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Fuck me!</span>");
			writeBig("images/succubus/1-6.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Ah, yes! God, I needed this!");
			writeSpeech("player", "", "<i>So... Good...</i>");
			writeSpeech("succubus", "", "Nghh, this is amazing~!<br>Fuck, ah! I can't keep going though, sorry! I'm going to need... Nfff... Need you to hurry up and...");
			writeSpeech("succubus", "eyes.jpg", "<b><span style='color: #fc53f1'>Cum!</span><b>");
			writeBig("images/succubus/1-7.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Yeessshh... That'sh the shtuff...");
			writeText("You feel the pink fuzz creeping into the corners of your mind again, as suddenly another sweeping wave of pleasure overtakes you.");
			writeSpeech("succubus", "", "More, give it all to me...");
			writeText("You cum again, even more powerfully than the last time, even though you've stopped thrusting.");
			writeText("He giggles gleefully as you start to feel woozy.");
			writeSpeech("player", "", "<i>Fuck... I'm starting to fade out... God damnit, this is not how I go!</i>");
			writeText("You fight through the haze and start thrusting again, fully intending to power through whatever's going on.");
			writeSpeech("succubus", "", "W-what? No, shtop, I-<br>Noooo~!");
			writeText("His ass suddenly tightens as his dicklette finally starts leaking small droplets of cum.");
			writeSpeech("succubus", "", "Nonono, please~! I can't... Aaaa~!");
			writeBig("images/succubus/1-8.jpg", "Art by Gujira");
			writeText("His eyes roll back in his head and his body starts shaking, suddenly his piddly droplets of cum turn into a constant leaking stream.");
			writeText("His grimace turns into a drunken smile and his tonge lolls out of his mouth as he defiles the sheets with his jizz.");
			writeBig("images/succubus/1-9.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Cumming~! I'm washting it all... But if feelsh sho gewd~!");
			writeText("Dimly, you're aware that your second orgasm never actually finished, you've been cumming non stop and your vision is starting to fade.");
			writeText("You collapse on top of him as he drunkenly giggles about how good he feels.");
			writeText("...");
			writeText("You surge awake, feeling awfully sore. After a quick check, you confirm you still have both kidneys, and it looks like he took the bedsheets with him.");
			writeSpeech("player", "", "What happened... What was I thinking? Did he have some kind of aphrodisiac perfume on him?");
			writeText("After a moment you feel back to normal, better than before in fact! It has gotten really late though.");
			break;
		}
		case "disguise2": {
			break;
		}
		case "disguise3": {
			break;
		}
		case "succubus1": {
			break;
		}
		case "succubus2": {
			break;
		}
		case "succubus3": {
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
	phoneRight.scrollTop = 0;
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