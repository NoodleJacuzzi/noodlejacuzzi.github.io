var character = {index: "ojou", fName: "Olivia", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#4EAAB5", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

var logbook = {
	index: "ojou", 
	desc: "The daughter of a major donor to the university, she attends Parent Teacher Student Association meetings in his stead. She actually has a small circle of friends as her haughty, bratty attitude only seems to extend to members of the faculty and authority figures.",
	body: "She's quite petite, a little skinnier than your usual targets. She doesn't seem to sexually confident either, just a normal girl attending university, albeit one with a very refined air about her.",
	clothes: "There's no chance that her outfit could even be considered close to what's assigned to students, most of the time she's at the university she's either wearing expensive-looking clothes. Probably not the sort of thing she'd wear at home.",
	home: "If her outfit is anything to go by, her home might even be a rug above the higher-end houses on Vintage Street.",
	tags: "Betrayal, mind break, corruption",
	artist: "Artist: Oreteki18kin",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "ojouIntro", name: "Someone in a fancy set of clothes is approaching you", requirements: "?trust ojou 0; ?flag principal council; ?location eastHallway;", altName: "", altImage: "",},
	{index: "ojouQuoLevel1", name: "ojou has come to pay you a visit as you requested", requirements: "?trust ojou 21; ?location playerOffice;", altName: "", altImage: "",},
	{index: "ojouQuoLevel2", name: "ojou has come to pay you a visit as you requested", requirements: "?trust ojou 22; ?location playerOffice;", altName: "", altImage: "",},
	{index: "ojouQuoLevel3", name: "ojou isn't here today, it seems like you'll have to pay her a visit instead", requirements: "?trust ojou 23; ?location playerOffice;", altName: "", altImage: "",},
	{index: "ojouQuoLevel4", name: "ojou has come to pay you a visit", requirements: "?trust ojou 80; ?location playerOffice;", altName: "", altImage: "",},
	{index: "brownHangout", name: "brownF and ojou are walking together", requirements: "?trustMin brown 1; ?trust ojou 1; !flag ojou brownHangout; ?location street;", altName: "", altImage: "",},
	{index: "ribbonHangout", name: "ribbonF and ojou are walking together", requirements: "?trustMin ribbon 1; ?trust ojou 1; !flag ojou ribbonHangout; ?location eastHallway;", altName: "", altImage: "",},
	{index: "ribbonHangout", name: "ribbonF and ojou are walking together", requirements: "?trustMin ribbon 1; ?trust ojou 1; !flag ojou ribbonHangout; ?location eastHallway;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define ojou = sp ojou;
		define player = sp player;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "ojouIntro": {
			writeHTML(`
				im ojouIntro.jpg
				t ojouF ojouL. Your records had her name too.
				ojou Hey! Hey you!
				player Yes?
				ojou You're faculty, right? You aren't a teacher, what are you doing down here?
				player ... Is it against the rules?
				ojou It should be to skulk around like you're doing!
				player ... Nice chat. I'll be seeing you around then.
				ojou Hmph! Hopefully somewhere you're supposed to be!<br>Stupid meetings, stupid council, stupid school, stupid...
				t She strides off muttering to herself, still glancing back at you with a mean look in her eye.
				t Her father is a major donor to the school, although he's out of the country, so the notes principalF had for you were requests to see if you could adjust her attitude without her crying foul and upsetting him.
				t ... That doesn't seem too likely. There's no way she'll trust you enough for you to hypnotize her, and with her attitude it doesn't seem like any other faculty could help.
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust("ojou", 1);
			break;
		}
		case "ojouSolo1": {
			writeHTML(`
			`);
			raiseTrust("ojou", 1);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo2": {
			writeHTML(`
			`);
			raiseTrust("ojou", 1);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo3": {
			writeHTML(`
			`);
			setTrust("ojou", 80);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownHangout": {
			writeHTML(`
				im brownHangout.jpg;
				ojou I think you should let me explore those worlds! Why, I'd love to read anything you've read recently.
				brown N-no, some of the stuff-
				ojou Nonsense! We're sisters... In a way. I'll support you even if you were reading propaganda. Give me a title at least?
				brown Uh... Oh, sh-shouldn't you be preparing for the next psa meeting?
				ojou PTSA, and no. There isn't even a set date for it yet. And don't change the subject!
				t The two are busy talking amongst themselves, but they seem quite close.<br>If you can manage to get closer to brownF, you might have an in on ojouF...
			`);
			addFlag("ojou", "brownHangout");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonHangout": {
			writeHTML(`
				t ribbonF and ojouF are walking together down the hall.
				ojou What do you even do after classes? When I stayed behind for a PTSA meeting you were still here when I got out.
				ribbon Oh, I find ways to entertain myself during school hours~
				t The two are busy talking amongst themselves, but they seem quite close.<br>If you can manage to get closer to ribbonF, somehow, you might have an in on ojouF...
			`);
			addFlag("ojou", "ribbonHangout");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo1Repeat": {
			writeHTML(`
				define ojou = sp ojou; img images/ojou/casual.jpg;
				im ojouSolo1-3.jpg
				ojou Mph...
				player Honestly, your place is great. Maybe I should live here after taking over town.
				ojou Mmm... Phuck 'ou... Mmmph...
				t Despite her 'punishment' of only being able to suckle the head, thus ensuring she tastes every drop of your jizz, she's still as defiant as every. At the very least...
				im ojouSolo1-4.jpg
				t She still puts on a good show at the climax.
				im ojouSolo1-5.jpg
				ojou ... Again?
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouSolo2Repeat": {
			writeHTML(`
				im ojouSolo2-2.jpg
				t Despite her protests, when she realizes it's the only hope she has of getting off, suddenly the fact that you're still in school isn't an obstacle for her anymore.
				im ojouSolo2-3.jpg
				ojou Khhhph-!
				t And she still can't make it any deeper. Oh well!
				im ojouSolo2-4.jpg
				t This way leaves a prettier finish.
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ojouQuoLevel1": {
			writeHTML(`
				im ojouIntro.jpg
				oujo Y-you... You little...
				player Ah, ojouF. Take a seat.
				oujo What exactly are you planning, scum?
				player I'm planning a lot of things. Mainly a way to break down that bitchy attitude of yours. Maybe an "every time I cum on or in you, you lose a little more of your fighting spirit"? A memory thing? Sky's the limit, really.
				ojou If you think I'll break, then you-
				play I <b>know</b> you'll break. The only question is what hole of yours I'm fucking when you do. Speaking of...
			`);
			writeFunction("writeEncounter('ojouSolo1')", "Let's go home for a quickie");
			writeFunction("writeEncounter('cancel')", "You're off the hook for today");
			break;
		}
		case "ojouQuoLevel2": {
			writeHTML(`
				im ojouHorny.jpg 
				ojou Y-you... What did you...
				player ojouF, come on in. Can I get you a drink? A facial?
				t She jumps a little when you say that, her cheeks suddenly flushing.
				player Well, I'm very busy today. Plenty to do, you understand, so...
			`);
			writeFunction("writeEncounter('ojouSolo2')", "I'll need to do it here, maybe in your classroom?");
			writeFunction("writeEncounter('cancel')", "You'll must have to imagine for tonght. No cumming for you");
			break;
		}
		case "ojouQuoLevel3": {
			writeHTML(`
				player Huh... Did she?<br>... No.
				t There's no way she overcame the hypnosis. There's got to be another reason she's not here.
				t You look over and see you still have her housekey. You can make plenty of excuses as to what you're doing there...
			`);
			writeFunction("writeEncounter('ojouSolo3')", "Go to her house");
			writeFunction("writeEncounter('cancel')", "Maybe another day");
			break;
		}
		case "ojouQuoLevel4": {
			writeHTML(`
				im ojouHorny.jpg
				ojou I'm here! Now... Hurry up!
				t You sigh. Right back to her usual attitude. Of course her leaking pussy tells a different story. You could go for a quick blowie, where will you go for it?
			`);
			writeFunction("writeEncounter('ojouSolo1Repeat')", "Let's go home");
			writeFunction("writeEncounter('ojouSolo2Repeat')", "Use your mouth here again");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "ojouSolo1", name: "Homebound blowing"},
	{index: "ojouSolo2", name: "Risky gobjob"},
	{index: "ojouSolo3", name: "Good morning world"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "ojouIntro": {
			writeHTML(`
				im ojouIntro.jpg
			`);
			break;
		}
		case "ojouSolo1": {
			writeHTML(`
				define ojou = sp ojou; img images/ojou/casual.jpg;
				ojou Listen... You don't need to do this. 
				player Oh, I think I do.
				ojou P-please... My sister's next door, and if my mom finds us...
				player I like the sound of that. If you don't want me getting any ideas...
				im ojouSolo1-2.jpg
				ojou Oh...
				player I think you know what to do.
				t She takes a deep breath to steel herself.
				ojou Oh god...
				im ojouSolo1-3.jpg
				t Despite her protests she doesn't cringe as her lips part around your cock. But you don't want her getting used to this, you need to give her a little shock to the system to get her off her guard for your hypnosis.
				t So you may have been edging for a while before she dropped by...
				im ojouSolo1-4.jpg
				t To incredible results.
				t She's completely thrown off, figuratively speaking, as suddenly a massive flood of jizz is pumped into her mouth. Way more than she can hope to spit out, so you can hear the delicious sound of swallowing. You pull out to look at your handiwork.
				im ojouSolo1-5.jpg
				player I hope you weren't expecting that was it. You and I have a couple of hours to kill.
				t She says nothing in response.
				...
				t Her face completely caked in jizz, her eyes have been unfocused for a while now. She's so deep in a trance a bomb couldn't wake her out of it.
				player How to do this... I guess I'll go with a classic.<br>ojouF, can you hear me?
				t She gives the faintest of robotic nods in response.
				player Good. Now listen close. From now on, you can't help but be <b>uncontrollably aroused by cum</b>. Jizz, sperm, whatever my cock lets out is your new addiction. Got it?
				t She gives another nod. The mind, the willpower she had that once resisted you is shattered and defiled.
				player Just thinking about it <b>arouses you</b>. You'll want to play with yourself, but <b>the only time you can actually cum is when you feel it on or inside you, fresh</b>. Got it.
				t She gves one last nod and the faintest of squeaks. Her cheeks, as much as you can see them anyway, start to go flush.
				player Very, very good. I'll let you enjoy your little facemask. But you and I aren't done playing yet.
				t You leave ojouF to wallow, taking one of her housekeys as you leave. She certainly won't mind.
			`);
			break;
		}
		case "ojouSolo2": {
			writeHTML(`
				im ojouSolo2-1.jpg
				player My my, quite eager, aren't you?
				ojou You...!<br>That's because you-
				player You really need to get off, don't you? With how wet you were last time, I'd say this must be torture for you!<br>Suck.
				im ojouSolo2-2.jpg
				ojou Mphh~!
				player Better take it as deep as you can. Unless you're interested in savoring the flavor, that is.
				t Despite her best efforts, she can't take it down her throat, or even shoot you a glare for good measure.
				player Honestly, you're a regular nymphomaniac in the making. You'd better hurry, or I might get bored and leave you thirsty.
				t That gets her to speed up, valuing her ability to cum more than breathe.
				t Of course you were bluffing. She might lack technique, but her enthusiasm is enough...
				im ojouSolo2-3.jpg
				t The first shot catches her off guard. There's a moment of shock before her body goes rigid and you can hear something wet beneath her.
				ojou Glllrk-!
				player That's no good, if you drink it down you can't wear any! Well, you're spilling anyways. Here.
				im ojouSolo2-4.jpg
				ojou Ghhhklaaah...
				player How's it feel? Let the shame sink in, this is the only way you get to cum. Better enjoy it while you can, unless you want it in your cunt instead.
				t She still can't manage a glare, or even to look you in the eye. Instead she just continues to ride out her orgasm, rolling your load on her tongue and giving it her undivided attention.
				t It'll be enough to energize her long after it stops being "fresh" though, so really she's no closer to relief than before.
				player Still thirsty? Good luck with that. I'll see you tomorrow.
			`);
			break;
		}
		case "ojouSolo3": {
			writeHTML(`
				define ojou = sp ojou; img images/ojou/ojouP.jpg;
				t You have yourself a little walk, and before you know it you're back at her house.
				t The place is empty, it seems. Might as well do some snooping.
				...
				im ojouSolo3-1.jpg
				player Well well well.
				t She's out like a log, and given her nudity and the stains on her sheets...
				t It's pretty clear what got her so tired out last night. A closer look can't hurt though.
				im ojouSolo3-2.jpg
				t She's a grade-A nympho at this point. But who hasn't missed classes because they were too busy masturbating at least once?
				t ... Not you, of course. In any case you know exactly how to wake her up.
				im ojouSolo3-3.jpg
				t Through grit teeth she lets out a wordless gasp.
				player Good morning!
				ojou Fuuh-<br>What are you-
				player Waking you up of course! Honestly, I'm getting real tired of your attitude. I thought I'd drop by and finally put you in your place!
				ojou I'll... Gh!<br>I'll never...
				player That's not what I expected to hear from someone who stroked her cunt by herself for so long she missed school!
				ojou Fuck you!
				player That's the spirit!
				...
				im ojouSolo3-4.jpg
				ojou Mmmm...<br<You... You're depraved... Mphh...
				im ojouSolo3-5.jpg
				player You're the one so wet you're outperforming the shower. Is talking really what you should be using your tongue for?
				ojou Just... Mnm... Just cum already...
				player Hmm... No.
				...
				im ojouSolo3-8.jpg
				ojou Stuh... Stop it...
				t The hours of the day pass by as you keep interupting her daily routine, always getting close but never giving her enough to go over the edge.
				ojou Why...?
				player You know why, now show me what I want to see before I get bored. Maybe your sister?
				t She tightens up, either because she's desperate for you to finish and grant her sweet relief, or because the thought gets her mind racing.
				ojou Ffff... Fuck you...
				player Still got the spirit, huh? You really are something. Maybe you're special! Maybe you don't need my cum after all.
				ojou N-no...
				player What's that?
				ojou Just... Just...<br>I can't take it! Please, just cum inside me already!
				t She's finally breaking down, just in time too...
				im ojouSolo3-9.jpg
				t Her mouth starts leaking drool as she feels you release inside her. The plate in her hand cracks as she lets out a wordless, babbling scream.
				t Finally set free after hours of sexual torture, finally able to hit her climax from being creampied.
				player So... You've given in?
				ojou Ghhhuu... Ffffuck yoooou...
				t Wobbling, she almost falls over as her legs can't support her anymore. She's feisty to the end.
				player Oh well, maybe another time then. I look forwards to your support at the next PTSA meeting by the way, good luck defying your only means of orgasm.
				ojou ...
				t She's unresponsive. Nothing a good night's rest can't fix though. It really seems like she'll never crack, of course that's just a facade. You have better targets than this little brick wall.
				t You take her to her bed and set off, feeling like a load's off your shoulders.
			`);
			break;
		}
		case "ojouSolo1Repeat": {
			writeHTML(`
				im ojouSolo1-1.jpg
				im ojouSolo1-2.jpg
				im ojouSolo1-3.jpg
				im ojouSolo1-4.jpg
				im ojouSolo1-5.jpg
			`);
			break;
		}
		case "ojouSolo2Repeat": {
			writeHTML(`
				im ojouSolo2-1.jpg
				im ojouSolo2-2.jpg
				im ojouSolo2-3.jpg
				im ojouSolo2-4.jpg
			`);
			break;
		}
		case "ojouSolo3Repeat": {
			writeHTML(`
				im ojouSolo3-1.jpg
				im ojouSolo3-2.jpg
				im ojouSolo3-3.jpg
				im ojouSolo3-4.jpg
				im ojouSolo3-5.jpg
				im ojouSolo3-6.jpg
				im ojouSolo3-7.jpg
				im ojouSolo3-8.jpg
				im ojouSolo3-9.jpg
			`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
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
	{index: "reward", requirements: "?trust ojou 80;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/ojou/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("ojou", "", "You've finished all of ojouF's content for this version, great work!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			clearText(character.index);
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