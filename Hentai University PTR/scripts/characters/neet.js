var character = {index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "", color: "#da924b", author: "Noodle Jacuzzi", artist: "Enoshima Iki",};

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
	{index: "neet4", name: "neet is sitting in the dark room", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 3, trustMax: 3, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetDateSelection", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 60, trustMax: 90, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetDateFinish", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 90, trustMax: 99, type: "tab", top: 0, left: 0, day: "both",},
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
		case "neet4": {
			writeText("You take a seat, Tia sitting across of you. There's a cold tension in the air. With how experienced she is with tech, she likely has some kind of master plan involving backups. You'll need to keep on your toes to stay out of prison.");
			writeSpeech("player", "", "So. What did you want?");
			writeSpeech("neet", "", "I would like you to hypnotize me.");
			writeSpeech("player", "", "... I see. <br>Actually no, I don't see at all. What?");
			writeSpeech("neet", "", "I want to be hypnotized. I've seen it work, you put people in trances and then they do what you tell them.");
			writeText("You're silent for a moment. Could this be a trap? Probably not, if she's got cameras in your office then she's already got incriminating evidence. She's probably got her reasons, and this is your get out of jail free card.");
			writeFunction("writeEncounter('neet5')", "Hypnotize her");
			writeFunction("changeLocation(data.player.location)", "Make an excuse and buy some time");
			break;
		}
		case "neet5": {
			writeSpeech("player", "", "Sure.");
			writeText("You get out your pendant. Part of you wants to see if she really understands what you'll be doing to her, but talking her out of this would probably be a bad idea for you.");
			writeText("Willing hypnosis can be a bit tricky. Her expression is unreadable, but she seems like she's calm enough.");
			writeSpeech("player", "", "Alright. Pay close attention, okay?");
			writeText("...");
			writeSpeech("player", "", "So, go ahead and make a noise. A dog, bark like a dog.");
			writeSpeech("neet", "", "I'd rather not, playerSir. Is that a requirement?");
			writeText("You sigh and lean back into your chair. This isn't working at all.");
			writeSpeech("player", "", "This isn't working, something isn't right.");
			writeText("She doesn't have a particularly strong will, and she seems pretty calm.");
			writeSpeech("player", "", "Hold on. neetF? How are you feeling right now?");
			writeSpeech("neet", "", "... I'm hungry? Tired. And nervous, I suppose, but that's to be expected. Should I have eaten?");
			writeSpeech("player", "", "How nervous?");
			writeText("She places her hand on her chest, the same general unfazed expression on her face as when you started.");
			writeSpeech("neet", "", "Hmm. If I had to put it into words...");
			writeText("She takes a moment to think, as if slowly piecing the appropriate words together bit by bit.");
			writeSpeech("neet", "", "I'd say I'm terrified. My heart rate is high and I can barely remain seated. If it were not for the bad news, I'd most certainly describe myself as 'jumping for joy'.<br>I've barely gotten any sleep as well. I was rehearsing how I would phrase my request last night for several hours.");
			writeText("Testing something, you place your hand on her forehead. Immediately she goes quiet, the faintest of blushes spreads across her cheeks, .");
			writeText("You can't risk her snitching on you, but you have no idea what countermeasures she has in place. You need to regain control of the situation.");
			writeSpeech("player", "", "That's the problem, you're nervous around me.<br>We'll need to do something about that.");
			writeText("You withdraw your hand. The blush has spread farther across her face and she's begun to look dizzy.");
			writeSpeech("player", "", "You alright?");
			writeText("She nods. It's starting to get late.");
			writeSpeech("player", "", "We'll pick this up later, alright? Keep a lock on those recordings, and I'll have you ready for hypnosis in no time. Got it?");
			writeSpeech("neet", "", "Y-yes playerSir.");
			setTrust('neet', 60);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetDateSelection": {
			switch (checkTrust('neet')) {
				case 60: {
					writeSpeech("neet", "", "Ah, hello playerSir. I've had a chance to get ahold of myself, and I've taken some time to prepare for helping me overcome my nerves. I've bought scented candles and tea that were popular on the 'mystic yoga' forums.");
					writeSpeech("player", "", "No need. I've already got the perfect method.");
					writeSpeech("neet", "", "... Of course. You're the expert. Sorry for getting ahead of myself.");
					writeSpeech("player", "", "Now, put that stuff away, we're going on a date.");
					writeSpeech("neet", "", "... I'm sorry?");
					writeSpeech("player", "", "Don't be, you're quite cute. Candles and tea are overrated, honestly. They don't work unless the target already uses them, otherwise the scents and taste just set you more on edge.");
					writeSpeech("neet", "", "B-but, a date? I've never been-");
					writeText("You place your finger on her lips to shush her.");
					writeSpeech("player", "", "It'll be fun, trust me.");
					writeSpeech("neet", "", "... Th-that was my first-");
					writeSpeech("player", "", "In no world does that count as a kiss, neetF. Now come on...");
					raiseTrust('neet', 1);
					break;
				}
				default: {
					writeSpeech("player", "", "Hello, neetF. Are you free?");
					writeSpeech("neet", "", "Y-yes playerSir! Are we going to go on another, ah...");
					writeSpeech("player", "", "Date? Well, I was thinking... ");
				}
			}
			if (checkFlag('neet', 'date1') == false) {
				writeFunction("writeEncounter('neetDate1')", "Let's go somewhere and chat");
			}
			if (checkFlag('neet', 'date2') == false) {
				writeFunction("writeEncounter('neetDate1')", "Let me walk you home");
			}
			if (checkFlag('neet', 'date3') == false) {
				writeFunction("writeEncounter('neetDate1')", "Let's go for a run");
			}
			writeFunction("changeLocation(data.player.location)", "Actually, maybe tomorrow");
			break;
		}
		case "neetDate1": {
			addFlag('neet', 'date1');
			writeSpeech("player", "", "... and let's go hang out and chat. I've got a great cafe in mind.");
			writeText("The two of you leave the room and you make your way out into town.");
			writeText("...");
			writeText("The cafe has a calm atmosphere, it's quite relaxing and pretty empty.");
			writeSpeech("player", "", "So, anything on your mind? School? Life after your degree?");
			writeSpeech("neet", "", "I would like to talk about hypnosis. About why you use it.");
			writeSpeech("player", "", "Geez, a one-track mind, huh?");
			writeSpeech("neet", "", "I am only asking if it's an acceptable question to ask.");
			writeSpeech("player", "", "It's fine. Being able to speak your mind should help you. I use my power to get what I want, whenever I want. I feel like having sex, so that's what I use it for.");
			writeSpeech("neet", "", "I see... Is it really so pleasurable that you'd risk being caught?");
			writeSpeech("player", "", "Curious?");
			writeSpeech("neet", "", "I am. I can't imagine it being that much better than self pleasure. However I am aware that my holdups would impair the experience.");
			writeSpeech("player", "", "You really have thought this all out. You've basically broken down every piece of your thought process, haven't you? That takes qutie some self-awareness.");
			writeSpeech("neet", "", "...");
			writeSpeech("player", "", "Well, all the more reason to relax. To start, you can chill out on the tone. You don't need to keep yourself so guarded around me, you already know my secrets.");
			writeSpeech("neet", "", "I am... I'm not good at being un-guarded. That's why I would like to change myself.");
			writeFunction("writeEncounter('neetDate1a')", "We have plenty of time");
			writeFunction("writeEncounter('neetDate1b')", "What's wrong with who you are?");
			break;
		}
		case "neetDate1a": {
			writeSpeech("player", "", "We'll have plenty of time, there's no rush. Relax and enjoy the scenery.");
			writeSpeech("neet", "", "I don't like the scenery.<br>... I apologize. I spoke rashly.");
			writeSpeech("player", "", "neetF, if that's your idea of rash, you haven nothing to apologize for.<br>It seems to be getting late. We'll pick this up again another day, alright?");
			writeSpeech("neet", "", "Yes please. Thank you for today, I'll see you at school.");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate1b": {
			writeSpeech("player", "", "What's wrong with who you are?");
			writeSpeech("neet", "", "I... I just want to be better.");
			writeFunction("writeEncounter('neetDate1ba')", "You'll find someone eventually");
			writeFunction("writeEncounter('neetDate1bb')", "What about me?");
			break;
		}
		case "neetDate1ba": {
			writeSpeech("player", "", "You'll find someone eventually.");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate1bb": {
			writeSpeech("player", "", "What about me?");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate2": {
			addFlag('neet', 'date2');
			writeSpeech("player", "", "... and let's go. I'll walk you home today.");
			writeText("The two of you leave the room and you make your way out into town.");
			writeText("...");
			writeFunction("writeEncounter('neetDate2a')", "Don't hold yourself back");
			writeFunction("writeEncounter('neetDate2b')", "What do you do for fun?");
			break;
		}
		case "neetDate2a": {
			writeSpeech("player", "", "Don't hold yourself back. You can tell me anything.");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate2b": {
			writeSpeech("player", "", "What do you do for fun?");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate3": {
			addFlag('neet', 'date3');
			writeSpeech("player", "", "... because we're going for a run!");
			writeSpeech("neet", "", "A run? But I'm wearing my uniform.");
			writeSpeech("player", "", "Not a problem. You've got a PE outfit here, right?");
			writeSpeech("neet", "", "Yeah, but I've never even worn it. I've been avoiding PE courses.");
			writeSpeech("player", "", "Now is as good of a time as any to break it in. Let's go.");
			writeText("The two of you leave the room and you make your way to the school's running track.");
			writeText("...");
			writeFunction("writeEncounter('neetDate3a')", "Let's get changed");
			writeFunction("writeEncounter('neetDate3b')", "You look great");
			break;
		}
		case "neetDate3a": {
			writeSpeech("player", "", "Let's get changed.");
			writeBig("images/neet/date-a", "Art by Enoshima Iki");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate3b": {
			writeSpeech("player", "", "You look great as you are.");
			writeBig("images/neet/date-b", "Art by Enoshima Iki");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDateFinish": {
			setTrust('neet', 100);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
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
	{index: "neetNotification", trust: 3,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "neetNotification": {
			writePhoneSpeech("neet", "", "I have decided how to word what I would like you to do. Please come to the computer lab this evening if you have the time.");
			writePhoneSpeech("neet", "", "Please come to the computer lab this evening even if you do not have the time.");
			writePhoneSpeech("neet", "", "The computer lab is in the east hallway.");
			writePhoneSpeech("neet", "", "Please ignore that previous text, as I remembered that you have been in the lab before. I do not wish to insinuate you will get lost. Please come to the lab when it is convenient. Thank you.");
			break;
		}
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