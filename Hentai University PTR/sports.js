var character = {index: "sports", fName: "Zoe", lName: "Parker", trust: 0, encountered: false, textEvent: "", met: false, textColor: "#42f5dd", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas"};

var logbook = {
	index: "sports", 
	desc: "A volleyball player at the university. A star of the school, between her record on the court and grades that are nothing to scoff at.",
	body: "You're not sure how she manages to move on the court given her natural endowments. Not that any of the boys are complaining.",
	clothes: "When training, she wears the school's volleyball uniform. In class, she wears a smart skirt and blouse. Though, her skirt does seem somewhat short for regulations.",
	home: "She spends alternating afternoons either studying in Class B, or practicing her skills on the court.",
	tags: "forced, sweat, oppai",
	artist: "Himitsu Kessha Vanitas",
	author: "SlackerSavior",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "sports1", name: "The volleyball team is practicing this afternoon. One of the girls catches your eye.", location: 'gym', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "odd", altName: "", altImage: "",},
	{index: "sports2", name: "sports is working on some homework in the classroom.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 1, trustMax: 10, type: "tab", top: 0, left: 0, day: "even", altName: "Potato", altImage: "class.jpg",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "sports1": {
			//Meeting her in the gym for the first time
			writeText("You sit around watching the volleyball team practice. One of the students in particular catches your eye.");
			writeBig("images/sports/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As she takes a break you decide that it may be a good time to introduce yourself.");
			writeFunction("loadEncounter('sports', 'sports1a')", "Introctuce yourself to the team captain");
			writeFunction("changeLocation(data.player.location)", "Come back another day");
			break;
		}
		case "sports1a": {
			//Introducing yourself in the gym
			writeSpeech("player", "", "Hello. I'm the new school councelor, playerF. Practice seems to be going well, are you doing alright?");
			writeText("She seems to have only half heard you, as she scans her teammates ");
			writeSpeech("sports", "", "Oh, uhm. Hi, then. Is there a reason you're here in the gym? You're a little in the way here, and I need to get back to practice.");
			writeSpeech("player", "", "No real reason aside from introdutions.");
			writeBig("images/sports/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "Introductions made then. I'm sportsF sportsL. Now, if you'd excuse me, I really do need to get back.");
			writeSpeech("player", "", "Of course, sportsF, sorry to get in your way. If you or anyone on the team needs anything, my office doors are always open.");
			writeSpeech("sports", "", "Oookay, then.");
			writeText("She rolls her eyes as she gets back to the court. Maybe it would be better to catch her while she isn't busy with practice...");
			passTime();
			setTrust('sports', 5);
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "sports2": {
			//Meeting in classroomB, with some privacy and time
			writeText("sports is staring at some classwork, obviously frustrated. As you get close, you can hear her muttering to herself.");
			writeSpeech("sports", "class.jpg", "Goddamned lousy chemisty. Never should have taken this course...");
			writeText("Now may be a good time to try and get on her good side...");
			writeFunction("loadEncounter('sports', 'sports2a')", "Can I help you with something sportsF?");
			writeFunction("changeLocation(data.player.location)", "She'll probably work it out.");
			break;
		}
		case "sports2a": {
			//Continuation of above
			writeText("She jumps up as you speak. Apparently she didn't hear you get close.");
			writeSpeech("sports", "class.jpg", "Ahh!");
			writeBig("images/sports/2a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Oh! Uhh.... playerT... playerL? You're lucky I didn't hit you with my bag, you scared the... Crap out of me.");
			writeSpeech("player", "", "Sorry about that sportsF, you just looked like you were having some problems with your assignment.");
			writeText("She looks from you, down to the paper on the desk, then back up. She still looks pissed, but it looks like you managed to make her angrier at the chemistry than at you.");
			writeSpeech("sports", "class.jpg", "I... Yeah. Chemistry isn't my strong suit.");
			writeSpeech("player", "", "Do you want some help? It's been a while, but I think I still remember most of what came up in O. Chem back the day.");
			writeText("She takes a moment after you ask, apparently weighing how much you could possibly help before realizing that the worst that happens is she just asks you to leave.");
			writeText("She's wrong, but how could she know about your hypnosis hobby?");
			writeSpeech("sports", "class.jpg", "Alright playerT playerF, but if we hit any more walls, I'm going home for the night.");
			writeFunction("loadEncounter('sports', 'sports2b')", "That sounds reasonable sportsF. Afterall, we wouldn't want you getting too stressed. It's my job to make sure the student body is as <i>relaxed</i> as possible.");
			break;
		}
		case "sports2b": {
			//She was wrong
			writeSpeech("player", "", "And that's how a chair conformation works.");
			writeText("A few hours have passed, and you've given a small lecture on some of the trouble spots she had been having. She really is a good student. She absorbed everything you said very readily.");
			writeSpeech("player", "", "You feeling more <i>relaxed</i> about that test coming up now?");
			writeSpeech("sports", "class.jpg", "I actually am. A lot. This class has really been stressing me out lately.");
			writeText("She stands up and starts packing to leave for home.");
			writeBig("images/sports/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Thanks. Thanks a lot, actually, playerT playerF. You're a lot nicer than I thought at first.");
			writeSpeech("sports", "class.jpg", "To be honest, the first time I saw you in the Gym, I thought you were a bit of a pervert, staring at the volleyball team like that.");
			writeSpeech("sports", "class.jpg", "I... Uhh... Sorry about that.");
			writeText("You laugh a little.");
			writeSpeech("player", "", "That's perfectly fine, sportsF. I understand. And I can't say I wasn't at least acting like a bit of a pervert, but you are very sexy.");
			writeSpeech("sports", "class.jpg", "I'm.. What? playerT, that's not...");
			writeSpeech("player", "", "<i>Relax</i> sportsF. But you know it's bad to judge a book by it's cover. I think you should make it up to me.");
			writeSpeech("sports", "class.jpg", "I... I already apologized, playerT. What...");
			writeSpeech("player", "", "Well, if I'm a pervert, why don't you apologize by doing something perverted for me? Lift up your shirt. So that next time you're on the court I don't have to sneak glances.");
			writeSpeech("sports", "class.jpg", "That... doesn't...");
			writeText("For a moment you're you may have overdone it, before her hands start to move. It seems like for all her mind struggles, her body seems to enjoy this treatment.");
			writeBig("images/sports/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "I was... Right about... You.");
			writeSpeech("player", "", "<i>Relax</i> sportsF. You were right. But I was right about you too. You like this, don't you?");
			writeSpeech("sports", "class.jpg", "I... Don't...");
			writeFunction("loadEncounter('sports', 'sports2c')", "Time to take a risk.")
			break;
		}
		case "sports2c": {
			//She was really right, though
			writeBig("images/sports/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Quiet, sportsF. Just <i>relax</i>.");
			writeSpeech("sports", "class.jpg", "You... Ahh... playerF");
			writeText("She quirms under your fingers. Whatever fight she had left in her giving way to pleasure as you fondle her breasts.");
			writeSpeech("player", "", "See, that's more like it. Doesn't that feel good?");
			writeSpeech("sports", "class.jpg", "Please... I can't...");
			writeText("The right reaction, but not enough... Maybe...");
			writeBig("images/sports/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "playerF! Ah! That hurts!");
			writeText("She keeps squirming as you suck on her breats, but despite her protests, when you put a hand under her skirt to check, she's already soaked through her panties.");
			writeSpeech("player", "", "See, I was right. I wasn't the only pervert on that court.");
			writeSpeech("sports", "class.jpg", "I'm... Not...");
			writeBig("images/sports/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "AAH!");
			writeText("Your hands move, rougher and faster, as she finally cracks. You feel her body shake in your hands, as she cums, before she stops fighting and leans into you, knees weak from her orgasm.");
			writeSpeech("player", "", "See. Just two perverts. It's okay, I'll be sure to teach you how to get those urges out healthily.");
			writeText("Still unsteady, she looks up to you, unsure, as you continue.");
			writeSpeech("player", "", "<i>Relax</i> we'll continue these tutoring sessions in the future. Here and after your volleyball practice.");
			writeSpeech("player", "", "Don't tell anyone about this. If anyone asks, tell them the truth. That playerT playerF is helping you relax considering your busy schedule. Helping you learn, and making sure you aren't getting too stressed given all the pressures you have on you.");
			writeText("The fire in her eyes lights up again. Not as strong as before, but still there.");
			writeSpeech("sports", "class.jpg", "You won't get away with this, pervert.");
			writeSpeech("player", "", "But you won't tell anyone.");
			writeText("She opens her mouth, as if to scream at you, before freezing in place. It sunk in. You don't have to worry. Dejected, she looks away.");
			writeSpeech("sports", "class.jpg", "... no playerH");
			writeSpeech("sports", "class.jpg", "I... Don't...");
			writeSpeech("player", "", "Good. Now get yourself cleaned up. The school is closing soon. You wouldn't want anyone to catch you here like this.");
			passTime();
			setTrust('sports', 15);
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "As you leave, smile on your face, you hear her cleaning up behind you.");
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