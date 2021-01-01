var character = {index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "secretary", 
	desc: "The principal's personal secretary. She handles a great deal of general paperwork for the school, although a lot of it needs to be corrected.",
	body: "She has pretty much no confidence in herself at all. Supposedly she laments not having a boyfriend, but she never actually makes any effort to make new friends.",
	clothes: "Her clothes tend to look new or very well kept, and she dresses quite conservatively.",
	home: "She lives somewhere in town, probably close to the principal's home since they tend to arrive at the same time.",
	tags: "No scenes yet, sorry!",
	artist: "Artist: Oreteki18kin",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "secretaryQuo", name: "secretary is here", requirements: "?location northHallway; ?flag secretary help;",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define principal = sp principal;
		define secretary = sp secretary;
		define player = sp player;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "secretaryQuo": {
			writeHTML(`
				player Hey secretaryF, how's it going? Need any help?
				secretary N-no, I've got everything under control.
			`);
			switch (checkTrust("secretary")) {
				case 20:
					writeHTML(`
						t As she says this, a small puff of smoke comes out from a machine behind her.
						secretary ... Please let that have been the coffee maker...
					`);
					raiseTrust("secretary", 1);
				break;
				case 21:
					writeHTML(`
						t As she says this, a single slip of paper falls off her desk, perfectly angled to plunge into the running paper shredder.
						secretary ... Please let that have been my paycheck, and not the... Oh no...
					`);
					raiseTrust("secretary", 1);
				break;
				case 22:
					writeHTML(`
						t As she says this, a shrill shrieking comes from her computer.
						secretary Oh no, oh no... Oh, at least I have a backup...
					`);
					raiseTrust("secretary", 1);
				break;
				case 23:
					writeHTML(`
						t As she says this, a tape recorder on her desk suddenly shoots out multiple feet of black ribbon.
						secretary No! The backup!
					`);
					raiseTrust("secretary", 1);
				break;
				case 24:
					writeHTML(`
						t As she says this, there's a loud crashing sound from outside, quickly the sounds of an ambulance too.
						secretary ... Please, just give me this one thing. Please tell me that wasn't the deliveryman.
					`);
					raiseTrust("secretary", 1);
				break;
				case 25:
					writeHTML(`
						t As she says this, a bird flies in through the open window, knocking over a coffee cup onto secretaryF's hand. Startled, she jumps back, shaking free a picture frame on the wall. It falls, shattering a glass object.
						t And in the confusion a stack of papers falls over.
						secretary ... And I spent so long reorganizing those! Shoo! Get lost, crow!
					`);
					raiseTrust("secretary", 1);
				break;
				case 26:
					writeHTML(`
						t As she says this, there's a furious shouting coming from beneath the pile of papers on her desk. She quickly rummages through the pile, only to find the phone just as the other person hangs up.
						secretary Hello? Hello?! Mr. Mayor?!
					`);
					raiseTrust("secretary", 1);
				break;
				case 27:
					writeHTML(`
						t As she says this, something very distressing happens to something important.
						secretary No, not the important thing! I don't even know what this did!
					`);
					raiseTrust("secretary", 1);
				break;
				case 28:
					writeHTML(`
						t As she says this, nothing happens. Then, for a prolonged period of time, nothing continues to happen.
						secretary ... Oh no, her appointment!
					`);
					raiseTrust("secretary", 1);
				break;
				case 29:
					writeHTML(`
						t As she says this, the neat stack of papers on her desk suddenly catch fire.
						secretary No, not the papers!
					`);
					raiseTrust("secretary", 1);
				break;
				case 30:
					writeHTML(`
						t As she says this, the coffee machine behind her suddenly catches fire.
						secretary No, not the coffee machine!
					`);
					raiseTrust("secretary", 1);
				break;
				case 31:
					writeHTML(`
						t As she says this, the fire extinguisher on her desk suddenly catches fire.
						secretary No, not the fire extinguisher!
					`);
					raiseTrust("secretary", 1);
				break;
				case 32:
					writeHTML(`
						t As she says this, a small candle on her desk catches fire.
						secretary How does this keep happening?! The wick is the only part not burning!
					`);
					raiseTrust("secretary", 1);
				break;
				case 33:
					writeHTML(`
						t As she says this-
						secretary No! No more! I'm lying through my teeth. Please, anything you can do would help!
					`);
				break;
			}
			writeFunction("writeEncounter('secretaryWork')", "Help secretaryF out");
			if (checkFlag("secretary", "blackmail") != true && checkFlag("president", "inspect") == true) {
				writeFunction("writeEncounter('secretaryBlackmail')", "Call in presidentF and confront secretaryF");
			}
			writeFunction("writeEncounter('cancel')", "Go Back");
			break;
		}
		case "secretaryWork": {
			writeHTML(`
				t You and secretaryF do some unimportant work. By the end, she's shocked to have finished stapling a set of papers on the first try, in less than an hour.
				t Among the work you do, you're chatting with contractors, scheduling principalF's appointments with school donors, and ensuring everything within secretaryF's reach is adequately insured.
				secretary Thank you so much! Oh, my whole day is cleared!
				player No problem. Honestly, if it weren't for these freak accidents you'd be working more effectively than ten secretaries.
				secretary Hehe, I guess... Only so many times you can use the 'act of god' excuse in a week though. Anything else that needs doing?
			`);
			if (data.player.hypnosis < 3) {
				writeText("Naturally you're in close contact with secretaryF a lot. However, without more skill in the craft you don't have a chance to actually work your magic on her.");
			}
			if (data.player.hypnosis > 2 && checkFlag("secretary", "hypnosis") == false) {
				writeText("Naturally you're in close contact with secretaryF a lot. Despite the people coming in and out, a master hypnotist like you should be able to plant a simple suggestion in her mind.");
				writeFunction("writeEncounter('secretaryHypnosis')", "Hypnotize secretaryF");
			}
			if (data.player.hacking < 3) {
				writeText("While you have ample opportunity to use her workstation, you don't have the time or skill to make any kind of backdoor for yourself.");
			}
			if (data.player.hacking > 2 && checkFlag("secretary", "hacking") == false) {
				writeText("While working, you occasionally have access to secretaryF's workstation. With some serious computer skills you could make a backdoor to access later.");
				writeFunction("writeEncounter('secretaryHacking')", "Install a backdoor in the system");
			}
			if (checkFlag("secretary", "manipulation") == false && checkTrust("instructor") > 1) {
				writeText("This could be the perfect opportunity to use common sense manipulation on secretaryF, just like you did to instructorF.");
				writeFunction("writeEncounter('secretaryManipulation')", "Use common sense manipulation on secretaryF");
			}
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "secretaryHypnosis": {
			writeHTML(`
				player Hey, secretaryF, could you look at this real quick?
				secretary Huh? Sure.
				...
				t Despite the people your skill means you know how to slowly work her into a trance, despite the numerous interruptions.
				player When I snap my fingers it'll be ingrained within you, alright? Perversion, lewdness, these things just seem normal to you. Now... Wake up.
				t While it isn't much, you are at least able to normalize perverted situations. It could be useful in the future.
				t And with that, your work here is done. For now.
			`);
			addFlag("secretary", "hypnosis");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "secretaryHacking": {
			writeHTML(`
				player And... Alright.
				secretary No more viruses?
				player The paperclip was never a...<br>Yeah, actually. No more for now at least. Try to keep this thing safe, alright?
				secretary Gotcha!
				...
				t And with a simple connection you have access to exclusive school files, all in anonymous comfort.
				t Looking through the records, nothing seems untowards. Maybe something will pop out at you with some help?
			`);
			addFlag("secretary", "hacking");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "secretaryManipulation": {
			writeEvent(name);
			addFlag("secretary", "manipulation");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "secretaryBlackmail": {
			writeEvent(name);
			passTime();
			addFlag("secretary", "blackmail");
			writeFunction("writeEncounter('secretaryBlackmailFollowup')", "Continue");
			break;
		}
		case "secretaryBlackmailFollowup": {
			writeHTML(`
				t After some cleanup, and a few hypnotic commands given to her fuck-addled mind, presidentF happily watches as you get dressed.
				president Hmm... She's asleep now.
				player At least the suggestions should take hold, just in case.
				president Still, even if we had her swear the story is true, I don't think enough people would care that we have circumstantial evidence that principalF prefers to enroll attractive students.
				player There's always a chance. If it's a particular weak point for her I can use it against her. Break her will down.
				president Mmm... I hope I'll have a front-row seat to that show as well.<br>Still, be careful. If I know principalF, something like this will hardly phase her.
				t You have everything you should need to blackmail principalF. Exposing your hand could be a risky move though...
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "secretaryManipulation", name: "Common Sense Manipulation"},
	{index: "secretaryBlackmail", name: "Doing a Little Sleuthing"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define player = sp player;
		define secretary = sp secretary;
		define president = sp president;
	`);
	switch (name) {
		case "secretaryManipulation": {
			writeHTML(`
				player Oof, this is looking to be a bigger job than I thought. Lemme call in some help.
				secretary Ah, sure? Can we really trust them?
				...
				t Quite a while passes as you wait for the common sense manipulation to kick in. Your support is keeping a lookout to make sure nobody sees the two of you.
				player So, quite the workload, huh?
				secretary Ah, no. This is all because of my own incompetence. Thanks again for helping me out.
				player No problem.<i>No changes yet. I really expected her to secretly hate principalF or something. Or at least hate her job. Maybe it's not affecting her?</i><br>Say, about principalF-
				t You turn to face her, and stop dead in your tracks.
				im 200.jpg
				secretary Ah, principalF~<br>I feel like such a bad girl... I keep messing up...
				t Her breathing is rapidly picking up the pace. She probably harbors some deep-seated affection for principalF.
				im 201.jpg
				t She pulls aside her sheer panties, brazenly exposing her cunt, all the while paying you no mind.
				secretary Ah, I'm burning up... I'll do even worse like this. Is she still here?
				player She's-
				im 202.jpg
				secretary Hah~! Punish me~! I've been a bad girl principalF~! Notice me, just once~!<br>You could bend me over your knee, or tie me up, or put a special belt on this disgusting, incompetent, fuck-up!
				t To her it's like you don't exist.
				...
				t Barely conciousness she continues to rub at herself. It's been at least an hour now, at first you were curious as to how long this'd go on, but when she stopped before her first orgasm you decided to see how strong her resolve is.
				secretary principalF...
				t She's just been edging herself, over and over, completely unaware, or uncaring, of her surroundings.
				t There's not much you could actually do with this information though, it doesn't actually get you closer to corrupting principalF, and the common sense manipulation probably won't stick.
				t Still, it's a good view.
			`);
			break;
		}
		case "secretaryBlackmail": {
			writeHTML(`
				secretary Thank you again for offering to help, I could really-<br>presidentF? Come in. Oh, if this is about the club reports, I don't have them yet.
				president That's not important today. We-
				secretary Oh no! Did I miss the deadline? Hold on, I can call-
				t secretaryF is interrupted as presidentF slams her hands on the table.
				president Listen. Quietly. We were looking through admissions, and we've noticed a trend. We'd like a little insight into how exactly principalF decides who enrolls her.
				secretary What?! I don't know anything, I swear! presidentF, you're scaring me!
				president Oh, auntie... That's really not the answer we wanted to hear. I see we'll need to do things the hard way. Come with me. <b>Now</b>.
				secretary Eep! W-why, where are we going?
				...
				secretary It doesn't have to be this way... I won't tell anyone, we can all just walk away from this...
				president Oh, aunty... Stupid, stupid aunty... Why would anyone walk away from this?
				im 044.jpg
				secretary Just... No, why can't I move?!
				president Because you have a will so weak that even an amateur like me can bend it~<br>Tell me, aunty, do you know what's about to happen?
				secretary You're going to let me go, right now! Young lady, if your mother hears about this-
				president Then I'd glady offer her to my new *master too. The time for talk is over. This is your last chance, relax and let go quietly, and we'll take what we want from you, or we break you, and bend you to *his whim anyways.
				secretary No! Please, I'll tell you what you want to know!
				president That's not good enough anymore.
				im 046.jpg
				secretary Aaaah~! N-no, I'll scream! 
				president No, you won't~! You can't move, and you can't call for help~!<br>Don't worry, even you can't screw this up. Just lay back and get your cunt pumped, until your cracked will completely shatters.
				secretary Ghh!
				president Aha, it's incredible! I can't get enough of this feeling of betrayal, of power! Aunty, ooh, it must be feeling even better for you!
				im 048.jpg
				president Ehe, I remember this sensation... It's unlike anything else, right? *He awoke feelings I've never felt before inside for me, and I know it's happening to you too~
				secretary Nnnnhh~!
				president Go ahead, tell *him how you feel.
				im 050.jpg
				secretary Cumming~<br>N-not... In control...
				president Relax... Let your eyes feel heavy, let your breathing slow...
				secretary presidentF... Why...
				president For the same reason you follow principalF, I'd imagine.<br>We're making this school... <i>Perfect</i>
			`);
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
	{index: "reward", requirements: "?flag secretary manipulation; ?flag secretary blackmail;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "reward": {
			writePhoneImage("images/secretary/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("secretary", "", "Not all characters have dedicated endings, secretaryF is one of them. Still, you've completed as much of secretaryF as possible. Good work!");
			break;
		}
		case "momPhone1A": {
			writePhoneSpeech("player", "", "Sleep well?");
			writePhoneSpeech("mom", "", "Yes. I have not slept that well in years, thank you.");
			writePhoneSpeech("mom", "", "It was probably the booze though.");
			writePhoneSpeech("mom", "", "I will talk to you again later.");
			writePhoneSpeech("player", "", "Take care.");
			setTrust('mom', 81);
			break;
		}
		case "momPhone1B": {
			writePhoneSpeech("player", "", "Who?");
			writePhoneSpeech("mom", "", "Sorry. I must have the wrong number. Please have a nice day.");
			writePhoneSpeech("mom", "", "Wait");
			writePhoneSpeech("mom", "", "You jerk I can see your picture attached to the number");
			writePhoneSpeech("player", "", "Sorry, I couldn't resist. How're you doing?");
			writePhoneSpeech("mom", "", "I am doing well. Still hungover. Good night.");
			writePhoneSpeech("player", "", "Take care. Talk to you later.");
			setTrust('mom', 81);
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