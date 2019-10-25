var character = {index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "", textColor: "#da924b", author: "Noodle Jacuzzi", artist: "Enoshima Iki",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = {
	index: "neet", 
	desc: "A university student, supposedly. You've never seen her in a class in session, and nobody seems to know how long she's been attending.",
	body: "She's very well endowed despite being short, but she could really take some time to take care of herself. Notably, her hair is a mess.",
	clothes: "You aren't sure if she even owns anything aside from the school uniform, and it always looks perpetually wrinkled.",
	home: "According to her file, she lives in the computer lab.",
	tags: "No scenes yet, sorry!",
	artist: "Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "neet1", name: "Someone's fluffing a pillow here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neet2", name: "It looks like neet is getting ready for bed again", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neet3", name: "It looks like neet is here again", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 2, trustMax: 2, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "neet1": {
			writeSpeech("player", "", "Are you allowed to be here when class isn't in session?");
			writeBig("images/neet/profile.jpg", "Art by Enoshima Iki");
			writeText("The girl acknowledges you, barely, and sets her pillow and lays down. Within a moment she's become a blanketed lump on the floor.");
			writeText("You stare at the lump. It doesn't stare back.");
			writeSpeech("player", "", "Are you even a student here? I don't recognize you.");
			writeText("She sticks a hand out of her cover to point at one of the lab's monitors, displaying rapidly scrolling text.");
			writeSpeech("player", "", "That doesn't answer my questions...<br>What is this? It looks like one of those old computers where you type in commands, like from before they had mice.");
			writeText("You watch as lines of debug reports fly by. Several exe files are mentioned, the one named 'hack-the-NSA.exe' is probably a joke.");
			writeText("Curiously, beneath the monitor written in small text on the desk, reads 'neetF neetL is allowed to do whatever she wants'. ");
			writeText("Textbooks are expensive, and principalF might ask you to substitute for a computer aide if schedules are overbooked. So this seems like a perfect opportunity to have an idea.");
			writeSpeech("player", "", "Are you good at this kind of stuff? I could use a teacher actually. I'm a little behind on the times.");
			writeSpeech("neet", "", "Sure.");
			writeText("Her response is blunt and partially muffled.");
			writeSpeech("player", "", "... Won't you need to get up to teach me?");
			writeSpeech("neet", "", "Nope.");
			writeText("There's an awkward silence until she starts her 'lecture' from her makeshift bed.");
			writeSpeech("neet", "", "Basically, think of the computer as an old man trapped in a box with a paintbrush. Every few seconds a piece of paper with writing he doesn't understand slides in through a mail slot in the wall...");
			writeText("...");
			writeText("An hour and a half later, neetF finally finishes her metaphor.");
			writeText("It was beautiful. As she yawns, you reflect on what you've learned. Her metaphor completely broke your understanding of computers down to its foundations and built them back up again.");
			writeSpecial("You've got a grasp on hacking, your skill has improved!");
			data.player.hacking += 1;
			passTime();
			raiseTrust('neet', 1);
			updateMenu();
			writeSpeech("player", "", "Thank you, really. I'll look the other way on the napping.");
			writeSpeech("neet", "", "Really?");
			writeSpeech("player", "", "Yeah. You do me a favor, I do you one, you know?");
			writeSpeech("neet", "", "I see...");
			writeText("She looks contemplative, or maybe she's just sleepy. Either way she's out like a light soon enough.");
			writeText("Having some method to improve your computer skills is pretty valuable, you can always hypnotize her later when she isn't useful anymore.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neet2": {
			writeSpeech("player", "", "You really should get some sleep at home, not here. Again, do you even go to school here, Ms. neetL?");
			writeSpeech("neet", "", "Yeah.");
			writeText("Her half-hearted, single-word response isn't very convincing, but...");
			writeSpeech("player", "", "Good enough for me! Could you give me some pointers again?");
			writeSpeech("neet", "", "Sure.");
			writeText("This time she motions towards a computer with a file open in notepad.");
			writeSpeech("neet", "", "We'll start with hello world, and then array subindexing methods. After we cover openGL, I have some saltshakers I can use as an example of...");
			writeText("...");
			writeText("neetF puts down the saltshaker as you type in the last line of code.");
			writeSpeech("player", "", "And... Done. ");
			writeText("On the screen a 3-d model of the planet earth is obliterated by an exploding star.");
			writeSpeech("neet", "", "Nice.");
			writeSpecial("Due to that incredibly complex lesson, your hacking skills have improved!");
			writeSpeech("player", "", "Thanks again, good luck with your nap. See you around?");
			writeSpeech("neet", "", "Are we... friends?");
			writeSpeech("player", "", "Uh, no. We're just associates. We could be friends if you want, get to know each other.");
			writeSpeech("neet", "", "Get to know each other...");
			writeText("She's definitely an oddball, but she seems pretty harmless. You'll have a pretty easy avenue towards corrupting her once you're finished getting lessons.");
			writeSpeech("player", "", "Anyways, good night neetF.");
			data.player.hacking += 1;
			passTime();
			raiseTrust('neet', 1);
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neet3": {
			writeSpeech("player", "", "Hello neetF.");
			writeSpeech("neet", "", "Hello playerMister counselor.");
			writeText("this time she's at a computer instead of preparing for bed.");
			writeSpeech("player", "", "Have time for a lesson before the day is out?");
			writeSpeech("neet", "", "Yes playerSir.");
			writeText("She scoots her rolling chair out of the way to give you access to the computer.");
			writeSpeech("neet", "", "Get into this.");
			writeText("On the screen is a password menu for some unknown program. neetF's name is on the top, this must be something she wrote.");
			writeText("...");
			writeText("Over the next few hours you've been sent on numerous goose chases and cracked over fifteen layers of encryption, each more complex than the last.");
			writeText("Occasionally neetF will lean over and mumble advice like 'press the blue button', which helps you break through some blockades.");
			writeSpecial("Your hacking skill has improved!");
			writeText("She's been pretty quiet lately though. She's probably asleep but you're too focused to take a break.");
			writeText("And finally, you type in 'password1235' into the menu, gaining access to the system.");
			writeBig("images/locations/playerOfficeEvening.jpg", "Live Feed");
			writeSpeech("player", "", "Wait, what?");
			writeText("On the screen is a live feed of your office. Several video files display other rooms, some of the recordings are of you practicing hypnosis.");
			writeText("Other documents strewn about various folders show your documentation, complete with notations displaying which parts are fake.");
			writeSpeech("player", "", "What the hell is-?");
			writeText("neetF is nowhere to be seen.");
			writeSpeech("player", "", "Fuck.");
			writeText("She's got you now. She doesn't seem like the most social type, but she's too dangerous to be out of your control now. The problem is there's no clear answer on where to find her.");
			writeText("The last thing worth noting is there's a note inside the program saying 'I'll call you when I figure out what I want.'");
			data.player.hacking += 1;
			passTime();
			raiseTrust('neet', 1);
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
	{index: "neetReward", trust: 3,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "neetReward": {
			writePhoneImage("images/neet/reward.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("neet", "", "You've finished all of neetF's content for this version, more is coming soon!");
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