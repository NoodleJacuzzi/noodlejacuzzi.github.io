var character = {index: "ribbon", fName: "Ella", lName: "Bell", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D528A", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

var logbook = {
	index: "ribbon", 
	desc: "A university student, although she seems like she belongs to a more prestigious university at first. Despite her popularity she doesn't seem to have many close friends, or anyone at all who could tell you how she spends her free time.",
	body: "She has a body to die for, and the way she moves and talks is almost like she's on the prowl for something. Or someone.",
	clothes: "Her clothes are made from the highest quality silk, she must have some seriously loaded parents. Or very rich friends.",
	home: "She belongs to Classroom A, but spends a lot of time hovering around a particular clubroom in the East Hallway.",
	tags: "Gangbang, Forced Blowjob",
	artist: "Artist: Oreteki18kin",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "ribbonIntro", name: "A wealthy-looking girl is here", requirements: "?trust ribbon 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "ribbonsLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin nurse 80; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonsLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin brown 80; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonsLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin president 80; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonsLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin purple 90; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonsLetter", name: "A mysterious letter has been slid under the door", requirements: "?trust ribbon 1; ?trustMin starlet 83; ?location playerOffice;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonClub", name: "You can wait for the set time here", requirements: "?trust ribbon 2; ?location eastHallway; ?time Evening;", altName: "Unknown", altImage: "images/none.png",},
	{index: "ribbonQuo", name: "You can wait for ribbon here", requirements: "?trust ribbon 80; ?location eastHallway; ?time Evening;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define ojou = sp ojou;
		define ribbon = sp ribbon;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "ribbonIntro": {
			writeHTML(`
				ribbon Excuse me!
				im ribbonIntro.jpg
				ribbon You're the new counselor, correct?
				player Yes, did you need something?
				ribbon Not at the moment...<br>I just wanted to look you over for a moment.
				t She does so, taking a moment to... Appraise you, is the only word that fits.
				ribbon Hmm... Above average!
				player Excuse me?
				ribbon Very well then, you're excused. I'll be keeping an eye on you!
				t With that she walks off, leaving you thoroughly confused.
			`);
			setTrust("ribbon", 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonsLetter": {
			writeHTML(`
				t You really should take better care not to be seen performing such deliciously vile acts upon women here. I'm not the type to snoop, but I already had my eye on one of your latest playtoys.
				t I'm not jealous of course. Come to my club after classes end for the day, it's just outside classroom A. 
				t A mask and outfit will be provided for you. You'll wear it unless you want your secret exposed to the entire school.
				t XOXOXO~
			`);
			unencounter("ribbon");
			setTrust("ribbon", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonClub": {
			writeHTML(`
				t Following the letter's instructions you find a small package with your intials on it. It's a mask large enough to cover your face, and what can only barely be called an outfit. The threadcount must be in the double digits...
				t Alongside them is a letter. As you unwrap it you realize you can hear voices from the classroom. Multiple male and female voices...
				t "Welcome, to our newest guest. If you choose to participate, of course.
				t I apologize for any fright my last letter gave you. I really don't have a way to actually check if you attend or not. Just know I have a good amount of leverage to ensure you never see the light of day again if you speak of this. That is my only rule. Oh, and of course you may not speak to me during ordinary hours, of course.
				t This club is my... Relief. I've judged you capable of satisfying my needs, especially given your... Little dalliances with some of the women I've grown fond of.
				t If you choose to enter and participate, know that you'll be completely anonymous. This club is for men and futanari to shed their identities and serve my every whim. Not for everyone of course, but all my other little pets would never dare to complain.
				t Do please join us if you feel up to the matter. If not, I wish you the best of luck with whatever it is you are managing to do with the other women here.
				t XOXOXO~~~"
				t There's no signature. What will you do? There are no reprecussions to walking away, and what's going on in there is far from your usual affair.
			`);
			writeFunction("writeEncounter('ribbonsLewd')", "Continue");
			writeFunction("changeLocation(data.player.location)", "Bow out");
			break;
		}
		case "ribbonsLewd": {
			writeHTML(`
			`);
			writeEvent(name);
			passTime();
			setTrust("ribbon", 80);
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('ribbonVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "ribbonRepeat": {
			writeHTML(`
				define ribbon = sp ojou; img images/ribbon/ribbonP.jpg;
				t With a few phonecalls the once empty room is filled with a half-dozen people, all in your same mask and "uniform".
				im ribbonLewd2.jpg
				t And, more to the point, all of you are ready to serve her.
				ribbon Mhmhm yes~! Come now little piggies, you can do better than that! You don't want your lovely mistress walking home <i>not</i> leaking, do you?
				t Everyone thrusts faster, trying their damdest to take control, yet...
				im ribbonLewd4.jpg
				ribbon Ara~<br>So much, very impressive~! Cum now, the lot of you!
				im ribbonLewd5.jpg
				ribbon Yes! More! I want to bathe in it!
				t In a battle of endurance, she has all the cards.
			`);
			writeEvent(name);
			passTime();
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('ribbonVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "ribbonInvite": {
			writeHTML(`
				
			`);
			writeFunction("writeEncounter('ribbonInviteLewd')", "Continue");
			break;
		}
		case "ribbonInviteLewd": {
			writeHTML(`
			`);
			setTrust("ojou", 21);
			addFlag("ojou", "ribbonInvite");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonInviteRepeat": {
			writeHTML(`
				im ribbonInvite2.jpg
				ribbon My my, I can't tell if this is more than last time. Clearly you were excited the moment I called you~
				oujo I... I don't...
				ribbon Quiet, please~<br>Save that voice, alright? Now, me first, of course. I think your *master will want to actually be satisfied for one. Kneel.
				im ribbonInvite4.jpg
				ribbon Ah~! So disgusting! I can feel myself being ruined by the stench!
				oujo Seeing it so close up...
				im ribbonInvite5.jpg
				ribbon Mmpph~
				ojou ribbonF... I looked up to you...
				im ribbonInvite6.jpg
				ojou You're... You're just as disgusting as he is...
				ribbon *gulp* *gulp*<br>Ara~<br>What a rude thing to say! Just for that...
				im ribbonInvite7.jpg
				ribbon No air for you~! Choke on his cock, the only breathing you'll do is between thrusts!
				im ribbonInvite8.jpg
				ribbon Ara~! Did you go easy on her? Nonono~! When a sow acts up, you need to punish her appropriately! Now, smack her in the face and try again. Slower this time.
				t The torment continues until ojouF finally passes out, only to be woken quite roughly by ribbonF.
				ribbon Mmm, I'll take her to my home again tonight. Not to worry, I'm only interested in training her mouth. Come along, whore.
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonVoyeur": {
			writeHTML(`
				t Peeking through a crack in the door, she doesn't know you've spotted her from the corner of your eye.
				ojou <i>Oooh... The crowd is bigger this time...<br>I know I can't keep spying on them like this, but...</i>
				t She knows it's risky. Anyone walking by could see her peeping, but she still spreads her legs anyways... The thought of a late guest arriving, seeing her, dragging her inside...
				t But as you approach the door she snaps free of her trance, and runs as fast as she can manage. Leaving no trace, except for a few drops of fluid on the floor.
				t You'll have her soon.
			`);
			setTrust("ojou", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ribbonQuo": {
			writeHTML(`
				define ribbon = sp ojou; img images/ribbon/ribbonP.jpg;
				t You wait for the usual time, slip on your mask and outfit, and once you know she's already inside you enter the room.
				im ribbonLewd1.jpg
				ribbon Oh, you're an early one. I suppose I am too, and-<br>Oh my, I know this is meant to be anonymous, but I think I recognize that shape and size. Should I call a meeting proper? It's no major crowd, but you and a few others might satisfy my, at least for tonight.
			`);
			writeFunction("writeEncounter('ribbonRepeat')", "Let's start a club meeting");
			if (checkFlag("ojou", "ribbonInvite") != true && checkTrust("ojou") == 2) {
				writeFunction("writeEncounter('ribbonInvite')", "Talk about ojouF");
			}
			if (checkFlag("ojou", "ribbonInvite") == true) {
				writeFunction("writeEncounter('ribbonInviteRepeat')", "Let's invite ojouF again");
			}
			writeFunction("writeEncounter('ribbonChat')", "Talk about monogamy");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "ribbonChat": {
			writeHTML(`
				define ribbon = sp ojou; img images/ribbon/ribbonP.jpg;
				ribbon Oh? Quite bold of you to ask. Perhaps I'm wrong to assume I recognize you, fresh meat.
				player You don't know for sure?
				ribbon Of course not~<br>I have blackmail on every member. Only to ensure they don't reveal my indulgences of course.<br>I couldn't care less if any guests decide to stay or leave, so long as there remain enough to play with. I honestly don't remember your name.
				player So, will you-
				ribbon Interested in keeping me all to yourself? Ara ara~<br>Absolutely not, I'm afraid~<br>I can't imagine a more disgustingly boring time than a monogamous relationship. I will never be a kept woman.
			`);
			writeFunction("writeEncounter('ribbonRepeat')", "Let's start a club meeting");
			writeFunction("writeEncounter('cancel')", "Maybe some other time");
			break;
		}
		case "ribbonSpecialOffer": {
			writeHTML(`
				
			`);
			break;
		}
		case "ribbonSpecialLewd": {
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
	{index: "ribbonsLewd", name: "Black Mask Club"},
	{index: "ribbonInviteLewd", name: "A proper mouthfucking"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "ribbonIntro": {
			writeHTML(`
				im ribbonIntro.jpg
			`);
			break;
		}
		case "ribbonsLewd": {
			writeHTML(`
				define ribbon = sp ojou; img images/ribbon/ribbonP.jpg;
				t You walk inside, keeping your head down. Everyone else, men and women of varying ages, are all wearing the same 'outfit'. Man or futa, nobody's here to chat. The tense atmosphere changes when the door opens again and shuts.
				im ribbonLewd1.jpg
				ribbon Welcome, everyone, to another gathering of the Black Mask club. I certainly hope you all had a lovely weekend. We have new members, so I'll make this simple. You're all here to indulge me. 
				t She's naked and very, very hungry for all the people in the room. Everyone together could take her down in a heartbeat, yet...
				ribbon You each had a decision to make. I'm glad you made the right one~<br>Of course you pigs all know better than to squeal to the principal, right? Good~! The only person you'll all be squealing for tonight is my lovely self.
				t Everyone cicles around her, it seems only the well-endowed have been invited, some young enough to be students while others look like they could be faculty, or maybe people from outside the school.
				ribbon Remember. While you're here you aren't human, you're meat. My meat, got it?
				...
				im ribbonLewd2.jpg
				ribbon Aha, that's it~! Grind the head against the little bump, harder!
				t Your estimations were way off... So many have already been defeated by ribbonF... Anyone who can't last long enough to please her is rotated out so she recieves a constant flow of pleasure from multiple penetrations.
				t So far you're the only one who's lasted more than one rotation, yet...
				ribbon Oh my, you must be the newest one~! You certainly have the technique... Amazing! Oh, I can feel you getting close! Go ahead! And you, beneath me too! Fill me!
				im ribbonLewd4.jpg
				ribbon Ahahah, yes! All of you worthless others now! Your mistress demands you cum! Try and match these stallions, pigs!
				im ribbonLewd5.jpg
				t As you pull out the rest of her "pigs" begin to finish onto her, all of them having edged for this moment. Her manical glee fades from her face, replaced with a pure look of thirst...
				t Somehow, despite leaking cum from her ass and pussy, despite being covered from head to toe in sperm...
				ribbon Mhmm~! More! You swine can do better than that!
				t She still has complete command over the room. Other fresh participants are ready, but t's very clear she may outlast the crowd.
				t Still, you have your own conquests. It'd be best not to get hooked on an unwinnable battle. If it were just you and her alone in here...
				t You shudder. The night will last a lot longer for her, but you should get going.
			`);
			break;
		}
		case "ribbonRepeat": {
			writeHTML(`
				im ribbonLewd1.jpg
				im ribbonLewd2.jpg
				im ribbonLewd4.jpg
				im ribbonLewd5.jpg
			`);
			break;
		}
		case "ribbonInvite": {
			writeHTML(`
				define ribbon = sp ojou; img images/ribbon/ribbonP.jpg;
				player I was wondering... Are you the only one this club who... Recieves?
				ribbon Ara? Last time was just me. But I make it a point to invite girls I know I can trust once every so often.<br>Why, are you unsatisfied with just moi?
				player I had my eye on someone. ojouF ojouL.
				t You explain your plan to ribbonF, who smiles in response.
				...
				ojou Oh my~<br>Well, I highly doubt whatever plan you have will convince principalF, but... Well, that sounds like paradise, and I am quite the idealist. I <i>suppose</i> I can help you... Educate, ojouF. Give me a moment.
				t She flips out her phone and starts getting dressed.
				ribbon ojouF? Ohoh no, this is about your little voyeuristic adventures. I-<br>Oh darling, of course I knew! And the rest of my friends will too, unless you come by to pay me and my latest catch a visit~!
				...
				im ribbonInvite1.jpg
				ojou S-stop this...
				ribbon Oh? But you're clearly so wet right now?
				ojou Th-that's because you've been messing with me! It's a normal response, I just get wet easily!<br>If you don't stop, I'll scream!
				ojou Ohoh? I hope you're prepared for quite the uphill struggle then. I have friends in very high places, and more than a few of them have your daddy's ear.
				ojou You're bluffing! Now stop, or I'll... I'll...
				ribbon You'll what? Squirt on my hand? <i>Again</i>?
				im ribbonInvite2.jpg
				ribbon Seriously. How can you be this wet and not give in? How often are you masturbating?
				ojou That's-
				ribbon You <i>need</i> to get fucked. I respect you aren't mine, but if *he allowed it, I'd honestly recommend you sell your body to the first boy you see. Being this pent up isn't healthy. 
				ojou I won't... It's not unhealthy! I'm a normal girl!
				ribbon I've never been as wet as you are, ojouF, and I often take hours to finish. Honestly, you might have the "I need to get my cunt pounded immediately or I'll die" disease.
				ojou That's... That's not a real thing!<br>... I'm sure!
				ojou Ara ara~<br>Calm down little piglet! Here, on your knees. I'll show you how to enjoy yourself more than just watching through the door.
				im ribbonInvite3.jpg
				ojou You're disgusting... *He's disgusting! You can't seriously be excited about... About licking...
				ribbon Sucking. Sucking his cock ojouF. <br>I mean, sperm isn't the greatest taste ever, sure. But it's more than just the taste. It's about thick jizz running down your face, about the feeling of cum going down your throat with every swallow, about knowing you did a good job and the creamy white goo is proof of that.<br>If you really think I'm lying or messing with you, watch closely, alright? You'll see for sure if I'm faking.
				im ribbonInvite4.jpg
				ribbon Ah~! It's here! 
				ojou G-gross...
				ribbon Okay, remember, watch closely. I'll keep it in my mouth and not deepthroat so that you can see me savor the stuff, alright?
				im ribbonInvite5.jpg
				ojou Ugh...
				ribbon Mmmph... Mwah~!<br>Oh little sow, don't pretend. I know the only reason you became my friend was because you were hoping I'd invite you in one day~<br>Mmmm~
				ojou N-no... We're...
				t But ribbonF isn't listening. Instead, she's completely enamoured with your cock. She was right, there's no faking enthusiasm like this. Not with every lick, every moan as she savors the taste and the depravity of it all.
				im ribbonInvite6.jpg
				t You cum powerfully, and true to her word she takes it all in her mouth. Each lance of cum spurting onto her tongue and puffing her cheeks.
				t Without missing a beat on the last spurt, she pulls her mouth free. Coated in jizz and her saliva, she looks at oujoF.
				ribbon Now.
				oujo N-
				im ribbonInvite7.jpg
				oujo Ghhhk!
				ribbon "Help me"? Is that what you're trying to say? How? Push your head deeper? *He's already on that.<br>Oh, do you mean you want me to lick your pussy?
				ojou Mmmgphh-!
				ribbon Hmm... But then you might lose focus on your your *master's cock...<br>How about after? I know you'll be really horny, so-
				ribbon Glllrk-! Hhhhhlrk-!
				ojou Jeez, I can see he's cumming. No need to announce it for me. Listen, relax and smile, otherwise-
				im ribbonInvite8.jpg
				ojou Kkkllrk-!
				ribbon Ooor that'll happen.<br>Oh ojouF, what a mess! It's even coming out of your nose! Okay, lemme help you clean it up, alright? I'll take whatever you can't swallow as my reward, okaaaay~?
				t You pull out of ojouF's mouth, leaving a massive pile of jizz to sit in her tongue, and ribbonF quickly moves in to press her mouth against her friend's.
				t ojouF's eyes lose their panic and just become unfocused as ribbonF's tongue dances around the inside of her mouth. By the time she's finished ojouF looks... Exausted. Hopeless. Done.
				ribbon *gulp*<br>Mmm, see what I mean? It tastes so bad, but it feels so good to drink, right?
				ojou I... *COUGH*!<br>I want to go home...
				ribbon Of course, you're still to shy to enjoy yourself around *him.<br>playerF, I'll take ojouF home, alright? I don't think she'll ever forget today, but just in case I can help make it just a little more memorable for her~
				player Just make sure she drops by my office later.
				ribbon Oh, I'll do more than that. I may prefer my partners to be very well endowed, but I know how to educate a woman.
			`);
			break;
		}
		case "ribbonInviteRepeat": {
			writeHTML(`
				im ribbonInvite1.jpg
				im ribbonInvite2.jpg
				im ribbonInvite3.jpg
				im ribbonInvite4.jpg
				im ribbonInvite5.jpg
				im ribbonInvite6.jpg
				im ribbonInvite7.jpg
				im ribbonInvite8.jpg
			`);
			break;
		}
		case "ribbonSpecialLewd": {
			writeHTML(`
				im ribbonSpecial1.jpg
				im ribbonSpecial2.jpg
				im ribbonSpecial3.jpg
				im ribbonSpecial4.jpg
				im ribbonSpecial5.jpg
				im ribbonSpecial6.jpg
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
	{index: "reward", requirements: "?trustMin ojou 20; ?flag ojou ribbonInvite;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/ribbon/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("ribbon", "", "You've finished all of ribbonF's content for this version, great work!");
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
					console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
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