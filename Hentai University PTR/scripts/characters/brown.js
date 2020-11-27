var character = {index: "brown", fName: "Daniela", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#F9D4B7", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

var logbook = {
	index: "brown", 
	desc: "An ordinary university student, if a bit on the shy side. She's got a rich step-sister, but aside from that and her purple hair she's as plain as they come.",
	body: "She's quite petite, underneath her clothes is the archetypal university student who can't find the time to eat properly.",
	clothes: "She doesn't wear the usual school uniform, instead going for something warmer with a puffy sweater and skirt.",
	home: "She's almost always found in Classroom B, studying and preparing for upcoming tests and getting in some light reading. She always seems to choose the back row, though.",
	tags: "Secretly perverse, step-sister incest, blowjob",
	artist: "Artist: Oreteki18kin",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "brownIntro", name: "A student is at her seat", requirements: "?trust brown 0; ?location classroomB;", altName: "", altImage: "",},
	{index: "brownHypnosis", name: "brown is sitting at her seat", requirements: "?trust brown 1; ?location classroomB;", altName: "", altImage: "",},
	{index: "brownQuo", name: "brown is at her seat", requirements: "?trust brown 80; ?location classroomB;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define ojou = sp ojou;
		define brown = sp brown;
		define player = sp player;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "brownIntro": {
			writeHTML(`
				im brownIntro.jpg
				t A schoolgirl, it seems she's noticed you.
				t If your records are right she's brownF brownL, a pretty ordinary girl. Maybe on the lower end of the confidence spectrum. Usually girls like her make good hypnosis targets.
				t Something about you has caught her attention, but you'll have to be the one to approach if you want to get to know her.
			`);
			writeFunction("writeEncounter('brownHypnosisA')", "Go for it");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "brownHypnosisA": {
			writeHTML(`
				player Glad you could join me, brownF. Now-<br>You're staring. Is there something on my face?
				brown ... Huh?<br>Oh! No, sorry *sir. No reason.
				t It seems you were mostly right on the money about her personality. And whatever fixation she has with you will only make this easier.
				player Alright. Well, since I have your undivided attention, I'd like you to take a look at something for me.
				...
				t As her eyes unfocus and her shoulders slump, you can't help but marvel at how quickly this has gone. She could probably be entranced by a set of windchimes if her resistance is this low.
				player Alright, where to start with you? I guess the most important place is...
			`);
			writeFunction("writeEncounter('brownHypnosisB')", "What's your fixation with me?");
			break;
		}
		case "brownHypnosisB": {
			writeHTML(`
				player brownF?
				brown Mhmm...
				player You're going to be honest with yourself and with me from now on. Why were you staring at me?
				brown You... You match the description of a character from stories I read. You're strong, confident...
				player Right, I-
				t Despite her trance her breathing starts to become unsteady.
				brown Whenever I look at you I start remembering pieces. I shouldn't be reading that sort of stuff, but-
				player I see-
				brown I want to be taken... Molested. Teased. Assaulted. Played with. Abused. Bro-
				player Okay. brownF, when I snap my fingers, you're going to wake up. and when you do you're going to remember in vivid detail everything you've just told me, and you'll believe you told it to me completely willingly.
				t You snap your fingers, and almost immediately you can see brownF's expression turn from an empty daze to shock, panic, and blind terror in a rollercoaster of emotion before her eyes start to water.
				t Dropping hypnosis without any commands is risky, but this pay off in a fun way.
				brown I... I didn't-
				player Stop.
				t Her will was already pretty shaky. Even without giving her a command, now is as good a time as any to...
			`);
			writeFunction("writeEncounter('brownsLewd')", "Take advantage of the situation");
			break;
		}
		case "brownsLewd": {
			writeEvent(name);
			passTime();
			setTrust("brown", 80);
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('brownVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "brownsLewdRepeat": {
			writeHTML(`
				brown S-so what are we going to do today?
				player Guess.
				brown ... W-will you use my mouth again?
				im brownLewd1.jpg
				player Any objections?
				brown ...
				im brownLewd2.jpg
				player I'll take that as a no. You're getting better, at this though.
				t While she is improving, she still can't take it down her throat. So...
				im brownLewd3.jpg
				brown Mmm... I learned this technique... From a story.<br>If it feels good, y-you can reward me... With...
				im brownLewd4.jpg
				brown Ah~!
				t The little slut she is, she eagerly triest to catch as much of the load as she can on her tongue, before scooping the rest of her face and hair to swallow down.
			`);
			passTime();
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('brownVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "brownInvite": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/casual.jpg;
				player Actually, I'd like to just talk this time.<br>Maybe more than that afterwards, if you behave.
				t she seemed dissapointed for a moment, but quickly perks back up.
				player ojouF, the name sound familiar?
				brown Sh-she's my sister...
				player brownL, right. 
				brown S-step sister actually... Y-you want her?
				t Rather than look disgusted or horrified, brownF just looks... Excited. Hesitant, but the way her hands twitch and she licks her lips...
				player I want a lot more than just her. I've got big plans for the whole school. And if you help me, I'll give you...
				t You lean in close to whisper, and she gasps.
				...
				ojou I'm hooome~! brownF? Mom?
				t ojouF closes and locks the door behind her. The house is quiet... Too quiet.
				ojou Hellooooo~?<br><i>Is she not home...? She left to go back to school earlier, but she wasn't in class, and *he wasn't around either...</i>
				t She'd waited more than half an hour, telling herself she wanted to catch you red handed. There's no way a refined lady would want to watch... <i>That</i>...
				ojou I guess not...<br>Wait, what if *he...
				t She hesitates for a moment before throwing her bag aside and sprinting up the stairs. She rushes into her sister's room, panting and panicked.
				brown ojouF?
				ojou brownF! Thank god, I though *he'd kid-<br>Nevermind, sorry.
				brown No, I'm sorry.
			`);
			writeFunction("writeEncounter('brownInviteLewd')", "Continue");
			break;
		}
		case "brownInviteLewd": {
			setTrust("ojou", 21);
			addFlag("ojou", "brownInvite");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownInviteRepeat": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/ojouP.jpg;
				im brownInvite1.jpg
				ojou St... No...
				player brownF, you're sure?
				brown Yes... Watching you defile her...
				im brownInvite2.jpg
				player Wow. You hear that? She's gotta hate you something fie-
				brown N-no! I love you, ojouF! You're my sister!
				im brownInvite3.jpg
				ojou Ghh... Why-hy-hy...?
				brown Because... I can't help it... Watching him...
				im brownInvite4.jpg
				brown Watching him defile someone so beautiful...
				im brownInvite5.jpg
				ojou Ghhh~!
				brown Mmm... C-can we... Again-
				player Yeah, hurry it up!
				im brownInvite6.jpg
				brown I really do love you ojouF... See?
				define brown = sp brown; im images/brown/brownP.jpg;
				im brownInvite9.jpg
				brown P-please, playerF... I can't feel that good again unless you...
				player Unless... Ghh... I what?
				brown Please, make me cum, by covering me in my sister's creampie!
				im brownInvite10.jpg
				brown Ghh~! Cumming~!
				player This family...
				t You drop ojouF onto the bed.
				brown Y-yes... I'll clean her up for you...<br>ojouF, spread your legs... Please...
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownVoyeur": {
			writeHTML(`
				t Peeking through a crack in the door, she doesn't know you've spotted her from the corner of your eye.
				ojou <i>brownF... What on earth are you...<br>My own sister! I have to tell someone...</i>
				t Yet as she gulps to try and keep her mouth from watering, she realizes she can't move an inch. Anyone walking by could see her peeping, but she still spreads her legs anyways...
				t But when you say farewell to brownF she snaps out of it, carefully running away as fast as she can.
				t You walk out of the classroom as brownF cleans herself up. No trace of her left but a few droplets on the floor.
				t You'll have her soon.
			`);
			setTrust("ojou", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownQuo": {
			writeHTML(`
				t You wait for the other students to file out...
				im brownIntro.jpg
				brown Ah, *sir... Did you need another... Some relief?
			`);
			writeFunction("writeEncounter('brownsLewdRepeat')", "Let's use your mouth again");
			if (checkFlag("ojou", "brownInvite") != true && checkTrust("ojou") == 2) {
				writeFunction("writeEncounter('brownInvite')", "Talk about ojouF");
			}
			if (checkFlag("ojou", "brownInvite") == true) {
				writeFunction("writeEncounter('brownInviteRepeat')", "Let's invite ojouF again");
			}
			writeFunction("writeEncounter('brownChat')", "Talk about her story");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "brownChat": {
			writeHTML(`
				player So what exactly does this character I resemble <i>do</i>?
				brown They... *He wakes up the protagonist, and the people around her.
				player Right, but how?
				brown It isn't physical as much as... They start to be aware of how they're seen. How people talk about their bodies, and how powerless they'd be to...<br>They start having fantasies, and exploring darker places on the internet... A-and then <i>*he</i> arrives.
				t She crosses her legs.
				brown They feel small and weak, and every time they do their bodies tingle from their feet up their spine and a voice inside their head says "you're right"...
				player Is that how you feel?
				brown ... A little. C-can I... Can I pleasure you again today?
			`);
			writeFunction("writeEncounter('brownsLewdRepeat')", "Let's use your mouth again");
			writeFunction("writeEncounter('cancel')", "Maybe another time");
			break;
		}
		case "brownSpecialOffer": {
			writeHTML(`
				im brownMother1.jpg
			`);
			break;
		}
		case "brownSpecialLewd": {
			writeHTML(`
				
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "brownsLewd", name: "Temptation"},
	{index: "brownInviteLewd", name: "Degeneracy"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "brownIntro": {
			writeHTML(`
				im brownIntro.jpg
			`);
			break;
		}
		case "brownsLewd": {
			writeHTML(`
				t Since you've already gone from zero to sixty in a single meeting, you may as well go all the way to one hundred, right?
				player brownF, I'm going to give you two options.<br>One; The two of us walk away and pretend this conversation never happened.
				brown I think I'd like-<br>*Sir, w-why are you taking off your clothes?
				player Option two: I give you everything you've ever wanted, and you become mine.
				im brownLewd1.jpg
				player What will it be?
				brown ...
				im brownLewd2.jpg
				t She gulps before immediately leaning forwards to take in your cock.
				t ... When you told her to be more honest, this wasn't <i>exactly</i> what you had in mind. But this works too. She must've been even more repressed than you'd assumed.
				t Despite her enthusiasm she lacks technique and can't get very far down, so instead...
				im brownLewd3.jpg
				brown Hah... Aaah~
				t Tongue out she strokes you with both hands while locking eyes with you. The pleading look is just unfair...
				im brownLewd4.jpg
				brown Ah~!
				t As you paint her face white she keeps letting out small gasps, shivering with each line of cum hitting her face.
				player Wow... You've really got some potential. 
				t She just closes her eyes and nods.
				player <i>Not much work to do on her... I guess I could visit her if I need relief. It might be worth it to have another student in my pocket at least.</i><br>Good work. I'll see you around.
				t She nods again.
			`);
			break;
		}
		case "brownsLewdRepeat": {
			writeHTML(`
				im brownLewd1.jpg
				im brownLewd2.jpg
				im brownLewd3.jpg
				im brownLewd4.jpg
			`);
			break;
		}
		case "brownInviteLewd": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/ojouP.jpg;
				im brownInvite1.jpg
				ojou Let me go! Let me go right now! brownF, help!
				brown *He told me... About how you were watching us...
				ojou N-no! No, *he's lying!
				brown So *he made me a deal... *He said if I gave you to *him...
				ojou Stop *him, please! It doesn't have to be you or me! Call the-
				brown *He said I could watch...
				im brownInvite2.jpg
				ojou AAAAAAH!
				brown Ah...
				t She is unbelievably wet. Her panties were soaked when you peeled them off of her, and it's very clear how they got that way.
				im brownInvite3.jpg
				ojou GHHHhhg!
				t She grunts as you let gravity aid your thrust, plunging as deep down her cunt as she can take.
				t All the while brownF watches, unable to avert her eyes. It's like she can't even more.
				im brownInvite4.jpg
				t After only a few thrusts her legs are quivering, she's having an orgasm while her sister watchings this brutal fucking.
				t As you begin to grunt yourself brownF's panting grows louder. She's clearly getting excited watching you get closer... Until...
				im brownInvite5.jpg
				ojou NOOOOO!
				t For all her desperate resistance, she knows down to her core what this hot sensation filling her is. Again, she can't help but shake and quiver from her treatment.
				player Ghh... brownF, stand up, lift your skirt.
				im brownInvite6.jpg
				brown O-okay...
				t Her panties are soaked through too.
				player Good... Strip! <b>Now</b>!
				t You start thrusting again.
				define brown = sp brown; im images/brown/brownP.jpg;
				im brownInvite8.jpg
				brown Okay... *Sir...
				ojou N-no... Shtop...
				player Gh... Hands away from you pussy! Get ready!
				t With one big motion you lift ojouF to give brownF a proper reward, pulling your cock out of ojouF's creampied pussy as she hits an orgasm. As a result...
				im brownInvite10.jpg
				t Cum and pussy juice splatter over brownF's lower body. Despite not touching herself...
				brown Aaahgggh~!
				t She shakes in what is obviously her own orgasm. Her cunt even starts leaking from the sensation.
				player How does it feel?
				brown It...<br>I'm not even touching... But it feels even better than when I...<br>ojouF... I'm sorry...
				player Don't be. She wanted this.<br>Now, wanna watch me work some magic?
				t You drop ojouF onto the bed and reach into your heap of clothes to fish out your pendant.
				brown Is... Is that...?<br> What are you going to do with her?
				player Nothing too big, for now. Just a command to keep quiet about this with anyone but you and me. And a command to drop by my office soon.<br>After that... I have a little more fun planned.
			`);
			break;
		}
		case "brownInviteRepeat": {
			writeHTML(`
				im brownInvite6.jpg
				im brownInvite1.jpg
				im brownInvite2.jpg
				im brownInvite3.jpg
				im brownInvite4.jpg
				im brownInvite5.jpg
			`);
			break;
		}
		case "brownSpecialLewd": {
			writeHTML(`
				im brownMother2.jpg
				im brownMother3.jpg
				im brownMother4.jpg
				im brownMother5.jpg
				im brownMother6.jpg
				im brownMother7.jpg
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
	{index: "reward", requirements: "?trustMin ojou 20; ?flag ojou brownInvite;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/brown/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("brown", "", "You've finished all of brownF's content for this version, great work!");
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