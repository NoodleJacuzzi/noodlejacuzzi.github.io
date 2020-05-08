var character = {index: "cold", fName: "Kelsey", lName: "Lowe", trust: 0, encountered: false, textEvent: "", met: false, color: "#FCFFFA", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};

var logbook = {
	index: "cold", 
	desc: "A senior student approaching graduation. Part of the volleyball team, though apparently not close to many students on campus.",
	body: "An older student, her maturity shows. Curvy in all the right places,.",
	clothes: "Tends towards practical clothing, a tight t-shirt and jeans are the usual fare.",
	home: "street",
	tags: "",
	artist: "Himitsu Kessha Vanitas",
	author: "Slackersavior",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "cold2", name: "The door slowly opens and you see a tuft of white hair poke its way in.", location: 'playerOffice', time: "MorningEvening", itemReq: "", trustMin: 30, trustMax: 35, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
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
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("cold", "", "Sorry to butt in kind of suddenly playerF, do you have some time?");
			writeSpeech("player", "", "Is there something wrong, coldF? Or did you just want to chat?");
			writeSpeech("cold", "", "No. Nothing is wrong. I was just thinking, maybe if you had time we could do what we talked about last time?");
			writeSpeech("player", "", "Are you sure? You seemed hesitant about it last time, and if you're uncomfortable we can just...");
			writeText("She holds up one hand to stop you, and holds one hand over her own mouth as mumbles her answer.");
			writeSpeech("cold", "", "I talked to sportsF about it, and she said it really did help her. And coachF heard us and told me that was also the reason she was able to stop smoking... Well, as much. And that's about as glowing a review as I can think of.");
			writeSpeech("cold", "", "I mean, it still seems silly, but...");
			writeSpeech("player", "", "I understand, coldF. I'd be more than willing to try it out with you...");
			writeFunction("loadEncounter('cold', 'cold2a')", "Just lean back and we can get started.");
			writeFunction("changeLocation(data.player.location)", "But I'll need some time to get something prepared. Come back later?");
			break;
		}
		case "cold2a": {
			passTime();
			setTrust('cold', 50)
			writeText("You take your time. It's nice to not be under the gun for once. And to have a willing participant.");
			writeSpeech("player", "", "We'll start easy, coldF. Start breathing deeper. Nice slow breaths. In through your nose, and out through your mouth. As you do, let everything around you fade away. Just leaving your body, and my voice...");
			writeText("It's a simple relaxation induction. Nothing fancy, but old standards are standard for a reason.");
			writeSpeech("player", "", "We're going to make sure you're stress free for all of this. Start at the top of your head, and when you breathe in I want you to tense up the muscles there and bundle <i>all</i> the stress you can together. Then slowly, as you breathe out, let it all leave your body with that breath.");
			writeSpeech("cold", "", "O...Okay. That seems... Nice.");
			writeText("Honestly, for all the ridiculous stuff you've been up to lately, you really did miss this sort of thing. Slowly watching your subject fall more and more under your influence as you spoke. Trusting and moldable right in your hands.");
			writeSpeech("player", "", "Down and down we'll go. From your neck, to your shoulders. Deep breath in... Hold it and gather the stress... Then <i>let it all out</i>. Until you're light and relaxed. Then we'll go deeper...");
			writeText("The change is subtle, at first, if you don't know what you're looking for. Her shoulders resting easier. Her breathing coming more slowly.");
			writeSpeech("player", "", "From your shoulders, down to your arms. In. Tense. Hold. Out. Further and further down. Slowly. Finding comfort with each movement, each shift of your body weight. Sinking further as we move down your body.");
			writeText("And you continue moving down. Slowly and steadily, you bring her fully into trance. And once she's there, you can start working in earnest.");
			writeSpeech("player", "", "And finally, your feet, coldF. We've cornered the last of the stress here. One last breath, nice and deep. Gather it all up. And let it out. How do you feel now?");
			writeSpeech("cold", "", "Relaxed. Calm. It's... Really nice.");
			writeSpeech("player", "", "Good. That's good. Now we can have a talk, okay?");
			writeSpeech("cold", "", "Of course playerF... I did come here to talk.");
			writeText("Time to get things going.");
			writeSpeech("player", "", "Now, coldF... Has all this felt good? We've been talking for quite a bit. Have you felt awkward or worried about any of this? No stress, right? And any that comes leaves on your breath nice and easy.");
			writeSpeech("cold", "", "It has felt good. And yeah, I'm not anxious. But that's with <i>you</i>. How do I know about everyone else? I don't know how swimmerF and sportsF do it.");
			writeSpeech("player", "", "What do you mean?");
			writeSpeech("cold", "", "Both of them are so confident. They always seem to know what to say and how to act. They're always sure that other people like them. And if they don't, they let it slide off of them.");
			writeSpeech("cold", "", "I just don't know how they trust people like that.");
			writeSpeech("player", "", "You have that confidence inside you. I'm sure of it. When we talk, you feel confident, right? No anxieties?");
			writeSpeech("cold", "", "Well, no.");
			writeSpeech("player", "", "See? And if you can feel like that with me, or with the other girls, you can feel that way all the time. Even if you need a little help.");
			writeSpeech("cold", "", "I... I guess I could? But how?");
			writeBig("images/cold/hypnohand1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You move your hand to her face, bringing it up over her head.");
			writeSpeech("player", "", "You see my hand, coldF? When I hold it up like this and say the word 'release' you'll feel all your stress, all your anxiety leave you. Like little strands, little threads. From your body to my fingers. Just like with your breathing earlier. Doing it again will bring you back to normal. You won't remember the details of what we did, but you will remember how good it felt. Each time, you'll get a little less tension back. A few less worries. Until eventually, I've taken them all away. Does that sound like something you'd like?");
			writeSpeech("cold", "", "It does. I actually... I really like the sound of that.");
			writeFunction("writeEvent('cold2b')", "Then, release.");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "cold2b", name: "Reinforcement"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cold2b": { //First Trigger
			writeBig("images/cold/hypnohand2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coldF's breath leaves her quickly, and you see her lean back, eyes going hazy for a moment before coming back to look at your hand again.");
			writeSpeech("cold", "", "I... Holy... sportsF said that hypnosis felt good, but I didn't really think...");
			writeText("She starts to shake herself a little, and you're afraid for a minute she may have come up before she speaks up again.");
			writeSpeech("cold", "", "This feels <b>really</b> good. What was I worried about in the first place?");
			writeText("She turns to face you and smiles. She's speaking a lot louder and without covering her face now.");
			writeSpeech("cold", "", "I think I could get used to this. Is this how sportsF feels all the time? Hang on... I want to try something...");
			writeText("She gets to her feet and moves to you, and quickly moves her head in for a kiss.");
			writeBig("images/cold/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The kiss starts shallow, her exploring your lips. It's all slow, tentative. It's clear she's learning as she goes. So you decide to take the initiative.");
			writeBig("images/cold/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You open your mouth and start probing your tongue into her mouth, as you move, she starts to try and emulate what you're doing. Tongues swirling and meeting, and with each move you can feel her moan lightly, causing vibrations along your own tongue.");
			writeBig("images/cold/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("But finally, you have to come up for air. As you pull back, she leaves her mouth still open, breathing heavy and trailing spit from the two of you down her chin, little droplets staining the top of her shirt.");
			writeText("She breathes deep one last time, then lets loose a tiny giggle.");
			writeSpeech("cold", "", "My first kiss... You're good at that, playerF.");
			writeText("As she sits there, you notice her shifting her legs. The <i>tiniest</> wet spot showing on her jeans as she shuffles.");
			writeSpeech("player", "", "Excited, coldF?");
			writeSpeech("cold", "", "Well, yeah. But I've never...");
			writeSpeech("player", "", "That's okay. We can take it slowly, no need for...");
			writeText("Another laugh.");
			writeSpeech("cold", "", "No, no. You don't get it. I've never even had someone else touch me. Every time I thought about it I'd get too scared to go any further...");
			writeText("She stops. Seemingly trying to find a thought.");
			writeSpeech("cold", "", "But... Not now. Now, all I want is for you to touch me.");
			writeSpeech("player", "", "Take your pants off, we don't want them ruined.");
			writeText("coldF stands and slowly takes off her jeans, and you shuffle yourself onto the chair she had been sitting before patting your lap. Slowly, she lowers herself down. You move your hands to her legs and spread them apart, leaving her pussy spread underneath her panties. Despite her lack of worrying thoughts, her body is tense and rigid.");
			writeSpeech("player", "", "Stay where I move you, coldF. Let me take over. Let me take control. When I'm in control, you've got nothing to worry about.");
			writeText("Her body almost immediately relaxes, leaving her putty in your hands. You pull her arms up over her head, giving you access to her breasts as well as her now wet slit.");
			writeBig("images/cold/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "See, coldF? When you let me take control. When you let me take all your worries away. Tell me how it feels.");
			writeText("You start to move your fingers, teasing the flash of her breasts, but avoiding her sensitive nipples for the moment. Doing the same with the other hand. Teasing the area around her cunt, fingers touching slightly around her lower lips briefly, before moving to the areas above and to the side. Fingers lightly brushing the sensitive area above, and along her thighs.");
			writeSpeech("cold", "", "Feels good. To give you control. No need to overthink. I can just... Enjoy it.");
			writeText("You let your fingers wander closer. Finally letting your fingers fix around her clit and her nipple. Giving the <i>slightest</i> pinch, eliciting a swift cry of pleasure from coldF's lips.");
			writeBig("images/cold/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("cold", "", "Fuu~! Too good. Don't stop!");
			writeText("It's time. You line your fingers up with her cunt. Prodding gently. Not entering.");
			writeSpeech("player", "", "Beg for it.");
			writeSpeech("cold", "", "Please! I need your fingers inside me! Don't~");
			writeSpeech("cold", "", "Aaa~!");
			writeText("Your fingers start slow. One moving in, pushing pash whatever resistance her body still had, and slowly prodding. It's not long before you feel her gushing faster and harder onto your hand. You get the feeling this girl was pent up before she came here. You keep up the movement, making sure she's ready before finger two enters, and she lets loose another cry.");
			writeSpeech("cold", "", "That's... Too much! Keep going! Feels too good!");
			writeText("Never one to disappoint, you double down. Fingers moving rapidly now that you've felt out her sensitive spots, each move of the wrist moving your fingers in and out, and each full entrance causing her to shake in pleasure. Each shake a mini orgasm, pre shocks for the main event, which is quick to come when you finally manage to find a spot that lets your pinky rest on her clit as you continue to finger fuck her.");
			writeBig("images/cold/2b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She screams as she cums, her panties soaked by the gush as you keep going. It takes a minute before she stops moaning, and you let your fingers slowly stop.");
			writeBig("images/cold/2b7.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("cold", "", "That was really intense... Can I move now, playerH?");
			writeSpeech("player", "", "Oh, yeah. Get your pants on. And while you get dressed, I need you to listen to me.");
			writeSpeech("player", "", "Remember, when you're released, you'll forget the details of what happened here. But you'll remember that it felt good. When I send you a text that starts with 'Release' you'll feel the same thing as when we're together and I use my hand. Got it?");
			writeSpeech("cold", "", "If it makes me feel like this? Whatever you say, playerT.");
			writeText("Easier than you thought. You'll have to make sure that works later.");
			writeSpeech("player", "", "Good, then now that you're dressed, sit down. And let's bring you back up.");
			writeSpeech("cold", "", "Do we have to?");
			writeSpeech("player", "", "Yep. Now, Release.");
			writeBig("images/cold/hypnohand2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Another few seconds of blank stare, before coldF looks up past your hand.");
			writeSpeech("cold", "", "Holy... That was weird. Almost like I could see little strands coming from your fingers... What exactly did we do?");
			writeSpeech("player", "", "Nothing much, mostly just talked and worked on some relaxation methods. Why, how much do you remember?");
			writeSpeech("cold", "", "I remember the relaxing stuff. Lying back and like, tensing and untensing. Breathing deep, and...");
			writeText("Her eyes go out of focus very briefly before moving back to look at you.");
			writeSpeech("cold", "", "I dunno, it's kind of fuzzy. But I think it worked. I feel a lot lighter now. And a little... Wet? Weird. Is it hot in here?");
			writeSpeech("player", "", "Sorry, I like it hot. But I'm glad to hear it worked. I'll give you my number, if you ever need anything, be sure to let me know.");
			writeFunction("changeLocation(data.player.location)", "She mumbles a thanks as you exchange numbers, then leaves. Here's hoping everything sticks.");
			updateMenu();
			break;
		}
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
	{index: "coldreward", trust: 50,},
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
//console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "load": {
		//data.story.push(character);
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
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map" && data.player.gps == true) { //check the location
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
					//console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var requirements = checkRequirements(encounterArray[number].requirements);
					//console.log(requirements);
					if (requirements != true) {
						finalResult = false;
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
		var finalResult = true;
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			//Start finding the data.story variable associated with the character
			for (phoneHistoryCheck = 0; phoneHistoryCheck < data.story.length; phoneHistoryCheck++) {
				if (data.story[phoneHistoryCheck].index == character.index) {
					//If the character has no unread texts
					//If the character does not have this text in their text history
					if (
					data.story[phoneHistoryCheck].unreadText != true &&
					data.story[phoneHistoryCheck].textHistory.includes(phoneArray[number].index) != true &&
					data.story[phoneHistoryCheck].textEvent != phoneArray[number].index
					) {
						//If the phone record is using the old system...
						if (phoneArray[number].trust != null) {
							var finalResult = false;
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
							if (phoneArray[number].requirements.includes("?time") == false) {
								phoneArray[number].requirements += "?time Morning;";
							}
							//Check the requirements
							var requirements = checkRequirements(phoneArray[number].requirements);
							console.log("Now examining encounter entry "+phoneArray[number].index+phoneArray[number].requirements+", result is "+requirements);
							if (requirements != false) {
								notification(character.index)
								data.story[phoneHistoryCheck].unreadText = true;
								data.story[phoneHistoryCheck].textEvent = phoneArray[number].index;
								data.story[phoneHistoryCheck].textHistory += phoneArray[number].index;
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