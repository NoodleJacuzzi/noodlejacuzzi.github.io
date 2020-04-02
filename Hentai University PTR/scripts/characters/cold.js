var character = {index: "cold", fName: "Kelsey", lName: "Lowe", trust: 0, encountered: false, textEvent: "", met: false, color: "#FCFFFA", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};

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
	{index: "cold2", name: "coldF arranged a meeting, and she comes ", location: '', time: "", itemReq: "", trustMin: 30, trustMax: 40, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
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
		case "cold2": {
			passTime();
			setTrust('cold', 41)
			writeText("coldF walks quietly into your office, sitting across from you.");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Ah, coldF, good to see you back. So, how have you been lately?");
			writeText("coldF fiddles with her hands as she sits, looking a little nervous before she speaks.");
			writeSpeech("cold", "", "I've been... Okay, I guess? I thought about your offer some. And talked to sportsF about it.");
			writeText("She quiets down again, taking a minute before she speaks. You give her a small nod and smile when she looks up. Easier to work at her pace.");
			writeSpeech("cold", "", "I umm... Hmm. I'm not really sure how to put this. sportsF told me about the whole hypnosis thing. She said it really helped her study. Even she thinks it's still goofy, but...");
			writeSpeech("player", "", "I won't argue that. If you don't want to do it, that's fine, coldF. We can work without it. It's just another tool in my belt.");
			writeText("It'll make things a little harder, but you've found ways around these things before.");
			writeSpeech("cold", "", "No, I... I think it could help. sportsF was pretty insistent that even if it is goofy it did help a lot. And even coachF gave a recommendation when she heard us talking about it. She says it's how she stopped smoking... Well, as much.");
			writeSpeech("cold", "", "And I figure if you could help coachF cut back on smoking, you can do most anything.");
			writeSpeech("player", "", "If you're sure. But first, let's just talk for a bit. This all works better when you're comfortable, and when I know how to work with you. No need to rush into things. The goofy bits can come later.");
			writeText("coldF almost looks a little disappointed before speaking again.");
			writeSpeech("cold", "", "Oh, okay. I just... Sorry, I'm a little nervous.");
			writeSpeech("player", "", "That's fine, coldF. Just try to relax a bit. We're just going to have a talk. How's the University treating you? Are your classes going well?");
			writeSpeech("cold", "", "Well enough I guess...");
			writeFunction("loadEncounter('cold2a')", "It takes a bit before coldF starts to open up again, but eventually you manage to get her a little more relaxed.");
			break;
		}
		case "cold2a": {
			writeText("coldF laughs quietly as she continues.");
			writeBig("images/cold/2c.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("cold", "", "... and then swimmerF came in <i>two hours</i> late for her own class, apparently she didn't realize that the Calc being taught had nothing to do with art history.");
			writeSpeech("player", "", "She really is something huh?");
			writeSpeech("cold", "", "Yeah... I guess all of them are. So... I don't want to rush things, but are we going to...");
			writeText("coldF looks down and... Blushes? As she trails off. She looks a little nervous, but she seems much more relaxed than at the start of things. Now's as good a time as any, really.");
			writeSpeech("player", "", "You want to try out hypnosis?");
			writeSpeech("cold", "", "Uhhm. Yeah. It's a big reason why I'm here, after all.");
			writeSpeech("player", "", "Alright then, coldF. Take a few deep breaths for me then. Close your eyes and wiggle around in your chair. Find a comfortable spot you can sit at for a long time.");
			writeSpeech("cold", "", "Just how long do you expect me to be here?");
			writeText("coldF grumbles while she moves, but she relaxes back into the chair, and you can see her chest rise and fall slowly as she breathes deep.");
			writeSpeech("cold", "", "So, just lay back and relax? Nothing special? That seems-");
			writeSpeech("player", "", "Shh. You're right, there's nothing special to it. You just lie back, relax, and listen to me. I'll guide you down and help you where you need it.");
			writeText("coldF grunts as she adjusts herself in the chair. Big movements, but as you speak and as she settles in and gets more and more comfortable, the movements slow down and stop.");
			writeSpeech("player", "", "Take it easy, coldF. We're here to make you comfortable. We're here to help you. Once you're settled in completely, let me know, and I'll start taking you down into trance, okay?");
			writeText("To be honest, this is kind of nice, not having to work at a frantic pace, being able to take your time, and having a willing subject. No crazy plans, no panicked moves. You could get used to this, but then again, if you did, you wouldn't get to have half the fun you usually do. You take your time with her, running her through a basic relaxation induction, from the top of her head to the tip of her toes, let all the tension ou with your breath, deeper and deeper. Basic stuff, but it works like a charm. Hell, it worked better than you expected, considering her apparent tension with relaxing around people.");
			writeSpeech("player", "", "One last deep breath, coldF. Gather up whatever tension managed to escape you so far and hold it there for a second. Take your time making sure you get every little bit before you let it all out, emptying your lungs and your mind. Nothing left but my words.");
			writeText("One last gasp, and she's putty in your hands.");
			writeSpeech("player", "", "Now, open up your eyes and telll me how you feel, coldF?");
			writeBig("images/cold/2c.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("cold", "", "Feels really good, playerH. Even better than sportsF said...");
			writeText("That's... Interesting.");
			writeSpeech("player", "", "Oh, so sportsF told you how it felt? How did she describe the feeling of being under?");
			writeText("coldF rubs her thighs together as she speaks, and you can see the faintest wet spot in the crotch of her jeans. Huh. You think you may have hit the jackpot here.");
			writeSpeech("cold", "", "She said... She said it felt kind of like an out of body experience. Like everything else faded away and all that was left was whatever you were focusing on. And that you were a great thing to focus on.");
			writeText("Well that answers that.");
			writeSpeech("player", "", "And how does being under feel to you, coldF?");
			writeText("She takes a moment before answering, her expression, which was easy and relaxed, twists for a moment as she tries to gather up her thoughts.");
			writeSpeech("cold", "", "Hard to describe. Feels nice. No worries. No thoughts. Just floating. And...");
			writeText("She stops herself, thighs rubbing together again.");
			writeSpeech("player", "", "It's okay, coldF. Tell me how it feels. The more I know, the more I can guide you to what feels good.");
			writeText("Another moment of silence, before the slightest nod as coldF starts to speak again. Slowly, but that seems to be a side effect of just how deep she went, not a sign of struggle.");
			writeSpeech("cold", "", "It feels really good to have you guide me. I... I always feel lost when I'm out, or dealing with people. Worried that I'm going to do something wrong. That I'll say something that makes people upset. That people won't like me if I screw up...");
			writeText("Her breathing picks up, and you step in.");
			writeSpeech("player", "", "Hey. I'm right here with you. Take a breath. Let all that tension go. Take it as slow as you need to.");
			writeText("coldF stops and breathes for a few minutes.");
			writeSpeech("cold", "", "It just feels so nice to not have to worry about that stuff, playerH. I don't want to screw anything up again.");
			writeText("More or less what you thought then. The girl's just anxious. Luckily, you can help with that.");
			writeSpeech("player", "", "Listen, coldF. You're doing great. Trust me. There's nothing to worry about.");
			writeText("You bring yourself behind her and start to rub her shoulders.");
			writeSpeech("player", "", "I'm right here and you've got nothing to worry about, right? I'll guide you all the way through.");
			writeText("You let your hands wander slowly. down her arms before letting them pass over her breasts. As soon as you make contact, you hear coldF gasp in pleasure, and her hands shoot towards her crotch.");
			writeText("You pull yourself out slowly, letting your cum spread and run on her.");
			writeBig("images/coach/2b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Holy shit, playerH. That's quite a load. Maybe someone needs to get out and get active more often if you're pent up like that.");
			writeText("You resist the urge to laugh. If she knew just how much you were getting around the school, she'd probably have reported you, even with the blackmail you've got on her.");
			writeSpeech("player", "", "Quiet, slut. Or did you forget the pictures I could still send out? See you soon for your next orientation video. I'm sure you'll find it much more exciting than this last one.");
			writeText("coachF stops her teasing quickly at the mention of the picture. She quickly starts to clean herself up, though the tissue in your office only gets so much cum off of her chest and you can see faint cum stains on her jacket as she moves to the door.");
			writeSpeech("coach", "", "Yeah, yeah. I hope for your sake that's true.");
			writeFunction("changeLocation(data.player.location)", "As she leaves, you get to work cleaning your office.");
			updateMenu();
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "cold2a", name: "Getting comfortable"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cold2a": {
			
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
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map") { //check the location
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
					console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var finalResult = true;
					if (encounterArray[number].requirements.includes("loc") == true) {
						var loc = encounterArray[number].requirements.split(`location `).pop().split(`;`)[0];
						var finalLocation = loc;
						if (data.player.gps != true) {
							if (loc.includes(data.player.location) != true) {
								finalResult = false;
							}
						}
						else {
							if (loc.includes(data.player.location) != true && data.player.location != "map") {
								finalResult = false;
							}
						}
					}
					if (encounterArray[number].requirements.includes("item") == true) {
						var item = encounterArray[number].requirements.split(`item `).pop().split(`;`)[0];
						if (checkItem(item) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("time") == true) {
						var time = encounterArray[number].requirements.split(`time `).pop().split(`;`)[0];
						if (time.includes(data.player.time.toLowerCase()) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("parity") == true) {
						var time = encounterArray[number].requirements.split(`parity `).pop().split(`;`)[0];
						switch (parity) {
							case "even": {
								if (data.player.day%2 == 1) {
									finalResult = false;
								}
							}
							case "odd": {
								if (data.player.day%2 == 0) {
									finalResult = false;
								}
							}
							default: {
								//console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
							}
						}
					}
					for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
						var corruptionTarget = data.story[characterIndex].index;
						if (encounterArray[number].requirements.includes("trust " + corruptionTarget) == true) {
							var trust = encounterArray[number].requirements.split(`trust `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) != trust) {
								finalResult = false;
							}
							//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
							var trustMin = encounterArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) < trustMin) {
								finalResult = false;
							}
							//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
							var trustMax = encounterArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) > trustMax) {
								finalResult = false;
							}
							//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("flag " + corruptionTarget) == true) {
							var flag = encounterArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkFlag(corruptionTarget, flag) != true) {
								finalResult = false;
							}
							//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
						}
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
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			if (phoneArray[number].trust != null) {
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
				//console.log("Now examining phone entry "+phoneArray[number].index+phoneArray[number].requirements);
				var finalResult = true;
				if (phoneArray[number].requirements.includes("item") == true) {
					var item = phoneArray[number].requirements.split(`item `).pop().split(`;`)[0];
					if (checkItem(item) != true) {
						finalResult = false;
					}
				}
				for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
					var corruptionTarget = data.story[characterIndex].index;
					if (phoneArray[number].requirements.includes("trust " + corruptionTarget) == true) {
						var trust = phoneArray[number].requirements.split(`trust `+corruptionTarget+`: `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) != trust) {
							finalResult = false;
						}
						//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
						var trustMin = phoneArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) < trustMin) {
							finalResult = false;
						}
						//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
						var trustMax = phoneArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) > trustMax) {
							finalResult = false;
						}
						//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("flag " + corruptionTarget) == true) {
						var flag = phoneArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkFlag(corruptionTarget, flag) != true) {
							finalResult = false;
						}
						//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
					}
				}
				if (finalResult == true) {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
						if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
							if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
								finalMessage = phoneArray[number].index;
							}
						}
					}
				}
				if (finalMessage != "") {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) {
						if (data.story[phoneEventCheck].index == character.index) {
							if (
							data.story[phoneEventCheck].unreadText != true &&
							data.story[phoneEventCheck].textEvent.includes(finalMessage)==false &&
							data.story[phoneEventCheck].textHistory.includes(finalMessage)==false
							) {
								notification(character.index);
								data.story[phoneEventCheck].unreadText = true;
								data.story[phoneEventCheck].textEvent = finalMessage;
								data.story[phoneEventCheck].textHistory += finalMessage;
								console.log(data.story[phoneEventCheck].textEvent);
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