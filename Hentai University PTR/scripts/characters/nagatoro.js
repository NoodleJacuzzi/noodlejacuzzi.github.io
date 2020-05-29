var character = {index: "nagatoro", fName: "Ash", lName: "Martin", trust: 0, encountered: false, textEvent: "", met: false, color: "#6E6C94", author: "NoodleJacuzzi", artist: "Kinta no Mousou", textHistory: "", unreadText: false,};

var logbook = {
	index: "nagatoro", 
	desc: "",
	body: "",
	clothes: "",
	home: "",
	tags: "",
	artist: "",
	author: "",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro0", name: "A student still in class catches your eye through the window", requirements: "?trust nagatoro 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "setup1A", name: "nagatoro is here.", requirements: "?trust nagatoro 40; ?location eastHallway; ?time Evening;", altName: "", altImage: "",},
	{index: "setup2A", name: "nagatoro is here.", requirements: "?trust nagatoro 41; ?location eastHallway;", altName: "", altImage: "",},
	{index: "confrontation", name: "You can overhear nagatoro in the principal's office.", requirements: "?trust nagatoro 42; ?location northHallway;", altName: "", altImage: "",},
	{index: "nagatoroComfort1", name: "You think you see nagatoro out the window.", requirements: "?trust nagatoro 99; ?location eastHallway;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "intro0": {
			writeHTML(`
				im images/nagatoro/002.jpg
				t A few students are actively discussing something, all of them on the shorter, thinner side. Although it seems like most men in the school fall under that category sometimes.
				sp ???; im images/none.png; nagatoroF, are you really still going on about that club? There's no way you'll get permission.
				sp nagatoro; All I need is a room, the materials, and a faculty supervisor. And...
				t The boy's gaze turns to you, it seems you've been noticed. You could stick around and see what he wants.
			`);
			writeFunction("writeEncounter('intro1')", "Stick around");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "intro1": {
			writeHTML(`
				t The boy excuses himself from his group of friends and walks out of the classroom. But instead of chatting with you in the hallway he starts walking towards the school's entrance. He turns his head to look back at you, as if asking you to follow.
				...
				im images/nagatoro/profile.jpg
				t He comes to a stop in a mostly secluded location still on school grounds. There's a chance someone could walk by at any time though.
				sp nagatoro; Nice to meet you! My name is nagatoroF.
				sp player; playerF.
				sp nagatoro; You're the new school counselor, yeah? You're a member of the faculty?
				sp player; I am, yes. I overheard you earlier, you need an advisor for some club, right? What's it about?
				sp nagatoro; So direct! I'll be direct too. Crossdressing.<br>Specifically, for boys to talk about cute clothes, make them, and enjoy wearing them!
				t It doesn't seem like he's joking. Probably. But while the idea has some merit it's not the kind of thing you should champion until you have control of the school.
				sp player; Well, I hope you find a member of faculty to support you then. Best of luck.
				sp nagatoro; You know, it's pretty unfortunate that you bumped into me. Unfortunate for you, I mean.
				sp player; And why is that?
				sp nagatoro; Because...
				im images/nagatoro/032.jpg
				sp nagatoro; I can read minds. <br>Oooh~ You scared? And you're an easy one. I can tell...
				t He makes some strange gestures at you. Honestly, he's kinda cute. Getting a closer look, you can tell he's probably wearing at least a little makeup.
				im images/nagatoro/034.jpg
				sp nagatoro; You're thinking of something perverted! I'm right, aren't I?<br>Hehe, now you've got no choice. Unless you want me to blurt out what you've been thinking all day to everyone in school?
				sp player; You're fucking with me.
				im images/nagatoro/040.jpg
				sp nagatoro; Haha! You got me~<br>So, what do ya say?
				sp player; And why exactly should I say yes? I'm a new hire and championing a crossdressing club isn't exactly a good first step for my reputation.
				sp nagatoro; Aww, cmon. You'd get to spend as much time with me as you want after classes, and I have plenty of really cute outfits I bet you'd love to see me try out.<br>Plus, helping students to be honest with themselves? Your 'reputation' would be one of openness and compassion. And all the experienced faculty, minus the witch who teachers psychology of course, are advising a club already. It'd make you look pretty good in the principal's eyes I bet.<br>Pleeeeease?
			`);
			writeFunction("writeEncounter('intro2')", "You'll consider it");
			writeFunction("writeEncounter('cancel')", "Decline");
			break;
		}
		case "intro2": {
			writeHTML(`
				sp player; I'll consider it, what's invol-
				sp nagatoro; Yaaaay~!<br>Lucky day~! I got the pervert counselor on my side!
				sp player; Now hold on a moment-
				sp nagatoro; You know, I may not be psychic, but I've got a pretty good intuition.<br>I can tell you're the kinda *guy who'd love to be the adviser for a club full of cute boys like me.
				t His smug aura is overwhelming.
				sp nagatoro; Cmon, I can tell just by looking at you. Every time you move it's almost like I can hear you <i>wriggling</i>. I bet if you weren't at risk of getting caught, you'd be trying to do something <i>lewd</i> with me right now.
				t He leans in close to you to whisper.
				sp nagatoro; Do you wanna? Do you wanna do lewd things? Even if anybody could be watching?<br>Too bad! Haha!
				im images/nagatoro/040.jpg
				sp nagatoro; Pervert counselor!<br>Hehe, well, if you'll help me out then I guess you can't be all bad, right? You've really helped me out here, so maybe I'll end up falling for you?
				sp player; You're certainly having fun with this, aren't you?
				t Without any kind of evidence getting mad or standoff-ish would just make you look bad. And he's right, anyone could be watching. It's best to stay professional until you can get into a situation alone with him.
				im images/nagatoro/042.jpg
				sp nagatoro; Hehe, but really, thanks a ton! Don't worry, I'll handle every little bit of forming the club. Gimme you're number so I can keep you up to speed. <br>Setting up the room, finding members, getting permission from principalF-
				sp player; You don't already have any of that ready? What kind of club are you?
				sp nagatoro; A new one! You and I are the only ones involved for now, don't you feel special?<br>Anyways, don't worry about a thing. But if you see my poor little self running around the school, totally run ragged trying to get everything done, don't feel bad about stopping me to say hi, kay?
				t With that he doesn't wait for a response and runs off, shooting you a wink as he does.
				sp player; ... Well, that was certainly something.
			`);
			setTrust('nagatoro', 40);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "setup1A": {
			writeHTML(`
				sp nagatoro; Heeeey~! 
				t nagatoroF nearly tackles you in the hall, just barely spinning out of the way at the last second. He's pretty energetic.
				sp player; Hello, did you need something?
				sp nagatoro; Materials! I already have a trove of cute outfits, but we need thread, cloth. We aren't a sewing club, but we will need to do repairs. Plus those clothes are so far away! There're all the way at my place!
				sp player; I thought you said just yesterday that you'd handle everything?
				sp nagatoro; Aww, but then you wouldn't get to hang out with me! Cmon, I'm really fun!
				sp player; Where would we get the materials? Order them online? I'm not paying for you.
				sp nagatoro; Hehe, no money necessary. The sewing club room probably has them. Maybe you could bat your eyelashes and your bushy eyebrows at them. Really, we should go back to my place and grab the outfits now and I'll ask them really nicely later.
				t He says it so nonchalantly, but your suspicious he's got a trap planned. Still, his idea of a trap is probably just an excuse for more teasing.
			`);
			writeFunction("writeEncounter('setup1B')", "Go to his place");
			writeFunction("writeEncounter('cancel')", "Decline for today");
			break;
		}
		case "setup1B": {
			writeHTML(`
				t You head to nagatoroF's place, it's actually very close to the school. With such a prime location it seems like he must be decently well off, and it doesn't look like he lives with anyone.
				t An elderly neighbor waves to the two of you as you enter through a sturdy oaken door. There's not even an offer of a drink as he leads you straight into what appears to be his room.
				t The place is pretty sparsely decorated, but very clean.
				im images/nagatoro/112.jpg
				sp nagatoro; Welcome! Let's grab the stuff quick, before the school closes. 
				t But he hesitates after noticing you looking around.
				im images/nagatoro/120.jpg
				sp nagatoro; Huh? You seem pretty sketchy, you know. You're just helping out a student, aren't you? Or maybe you're thinking of doing something... Inappropriate? 
				im images/nagatoro/116.jpg
				t His worried expression is quickly revealed to be a fake as it's replaced with a smug look.
				sp nagatoro; I wouldn't though. Modern technology is pretty cool these days, you never know if somebody's watching you. Plus, I can scream <i>really</i> loud. The neighbors are close friends too.
				t You sigh, doing your very best to practice self control. Patience, playerF. Patience.
				t This could be a good situation to try some hypnosis, but nagatoroF quickly makes a beeline for his closet and starts pulling out fancy outfit after fancy outfit. He throws a bundle of soft clothes at you. Soon you're half-buried under silken duds and cosplay clothes.
				sp nagatoro; Hehe, you look good like this. Maybe you want to try some o-
				sp player; You're hilarious. Is this all of it?
				sp nagatoro; Hmm... Not quite~
				t You nearly fall over as a much heavier weight is upon you. 
				sp nagatoro; Now, my loyal steed, onwards!
				...
				t You carry the clothes back to the school, nagatoroF has to walk. He leads you to a small club room in the east hallway.
				sp nagatoro; Alright, this is the place, I can store them myself. Thanks a ton!<br>... Really, thank you. Sorry if I can be a little...
				t You wave your hand to let him know it's fine. The clothes were pretty light anyways. It's getting pretty late, you should probably get moving.
			`);
			setTrust('nagatoro', 41);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "setup1Unused": {
			writeHTML(`
				sp player; We should probably 
				sp nagatoro; ... Could you, um... Give me a minute?
				sp player; No problem.
				t You close the door, allowing nagatoroF a moment of privacy to finish getting dressed.
			`);
			break;
		}
		case "setup2A": {
			writeHTML(`
				t nagatoroF and another student are each rummaging around on different sides of what appears to be a club room. There're large windows letting you see inside, although they have curtains in case the people inside need some privacy.
				t The door is also partially open, and you can hear them talking inside.
				sp ???; im images/none.png; Honestly, I can't believe you got somebody to sign off on your weird fetish thing.
				sp nagatoro; Uh-huh...
				t nagatoroF Seems less energetic than he is with you. He seems reserved, like he just wants to get through the conversation as quickly as possible while he stores fabrics.
				sp ???; im images/none.png; Well, whatever, I'm out. Like I said, just clean up after yourself. I don't wanna be stepping on anything sticky. 
				t nagatoroF just sighs as the other student leaves. He looks sad. 
				t You could pop in to offer a hand. It might be best for your reputation not to associate with nagatoroF, but in the long run it might not really matter.
			`);
			writeFunction("writeEncounter('setup2B')", "Help nagatoroF out");
			writeFunction("writeEncounter('cancel')", "Don't");
			break;
		}
		case "setup2B": {
			writeHTML(`
				t As you walk up to the door nagatoroF notices you through the window and perks up. His previous expression is replaced with a smug one.
				t You walk into the club room, it's pretty plain, almost empty. Dozens of shelves line the walls along with a number of pieces of track and field equipment.
				sp nagatoro; Here to help me sort the clothes? Or did you just want to feel them on your hands before I wear them?
				sp player; Do you need help or not, nagatoroF?
				sp nagatoro; Yes please~!
				...
				t There isn't too much to do, but with nagatoroF taking frequent breaks to tease you it takes a while. Eventually you're just about finished. You fold the last pair of tights and cram them into a stuffed drawer.
				sp player; Done.<br>Hey, do you act differently around others than you do with me?
				sp nagatoro; Eh? Well, obviously. If they aren't weirdos like you they won't be as fun to tease. <br>... Did you think I meant something special by that? Perv! Pervert counselor! 
				t He bops your shoulder a few times before playfully running to the door. 
				sp nagatoro; Hey, hey! You as slow on your feet as you are in the head? Nyeeeeh! 
				t He sticks out his tongue before he leaves the room, leaving the door open for you to follow. 
				sp nagatoro; See you tomorrow! I'll be formally asking the principal about the club. We've got a faculty advisor, a dedicated space, everything we need to start attracting members. See you soon~!
			`);
			setTrust('nagatoro', 42);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "confrontation": {
			writeHTML(`
				t nagatoroF is inside Principal principalF's office, the door is left just very slightly ajar. While you can't see them, you can hear their conversation without looking too suspicious just by being near the door.
				sp principal; -may have convinced playerF to side with you on this matter, but you and I both know why I can't endorse the creation of a crossdressing club on a campus like this.
				sp nagatoro; But... But I have the room, the materials, and the advisor like you-
				sp principal; The best thing to do right now is to move on, and to pretend we never had this conversation. If you're dissatisfied I can recommend alternatives to this university. Otherwise, I expect you to continue towards graduation while wearing appropriate attire at all times on school grounds, <i>Mister</i> nagatoroL.
				sp nagatoro; ... Okay, ma'am. Take care.
				t Quietly nagatoroF stands up and walks out of the room. It isn't hard to avoid him seeing you since he's staring at the ground the whole way as he heads down the school's stairway.
			`);
			setTrust('nagatoro', 99);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			unencounter('nagatoro');
			break;
		}
		case "nagatoroComfort1": {
			writeHTML(`
				t You find nagatoroF near where you two first spoke. You're a lot more out of the way than before, directly behind a small wall.
				t As you seem him crouched against the wall he looks melancholic. It's a little weird how different he seems to act when he isn't around you. 
				sp player; You alright? Angry?
				sp nagatoro; ...? Oh, hey.<br>I'm fine. Frustrated I guess.
				t You take a seat on the ground.
				sp player; Wanna talk about it?		
				sp nagatoro; Eh, she's just an old fuddy duddy who doesn't understand that some boys look better when they're cute instead of looking tough. Maybe she's just jealous that I'd look better in a skirt than she does. <br>In fact, I bet she wears so much makeup that she <i>needs</i> to hoard it all to herself! No eyeshadow for anyone under 40, and definitely none for any boys! 
			`);
			if (checkTrust('president') > 80) {
				writeText("Still looking at the ground, he wrings his hands together.");
				writeSpeech("nagatoro", "", "There's a nude portrait in the entrance hall, how come I can't even wear something less stuffy?");
			}
			writeHTML(`
				t You sit up only to kneel down in front of nagatoroF. Despite him acting confident he doesn't seem to want to make eye contact right now. 
				sp player; Why not tell her that? 
				sp nagatoro; Eh? Sure, tell the principal she wears too. much makeup, great idea. <br>Also, uh, personal space? Ever heard of it? 
				sp player; I mean that you wanna just be cute. You didn't stand up for yourself in there at all. 
				sp nagatoro; Listen, teasing you is fun, but you're some nobody counselor. No offense, but I don't think you're sticking around. Male faculty never do here. Messing with you compared to messing with her or anybody else, it's a whole different thing. 
				sp player; What if I could help you with that? What if I could help you be your real self whenever you wanted? 
				t He seems genuinely interested for a moment as you reach into your pocket, until he's barely holding back laughter as you pull out your pendant. 
				sp nagatoro; Pfft... Is that like, a metronome thing? Like for hypnosis? You're gonna make me act like a chicken? <br>Oh, I think I get it. Big ol' pervert is gonna hypnotize me. Make me into his cute-as-a-button slave? 
			`);
			writeFunction("writeEncounter('nagatoroComfort2')", "Go for it");
			writeFunction("writeEncounter('cancel')", "Change your mind");
			break;
		}
		case "nagatoroComfort2": {
			writeHTML(`
				sp player; Why not? What do you have to lose?
				t He sighs, and for a moment it seems like despite how silly he thinks this all is, a lifetime of confidence issues and insecurities flash across his eyes. 
				sp nagatoro; Fiiiine. Fine. I'll make you a deal. If you hypnotize me I'll do whatever you say. I won't really have a choice, but whatever. You can do whatever gross stuff your pervert brain has been thinking this whole time. <br>But, when you don't, you're <i>my</i> slave, and I get to do whatever I want with you, okay? 
				t He flashes the smuggest grin you've ever seen. Overconfidence at its finest. 
				sp player; Alright, just focus on the pendant. We're going to count down from twenty, and with each number I want you to imagine... 
				... 
			`);
			writeEvent("nagatoroComfort");
			setTrust('nagatoro', 100);
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
	{index: "nagatoroComfort", name: "Nymph Unleashed"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			break;
		}
		case "nagatoroComfort": {
			writeHTML(`
				t nagatoroF sits slumped against the wall, barely concious as you work your magic. The concept of a crossdressing club actually isn't too bad, the idea is going nowhere fast at the moment. He needs confidence, less anxiety, and more to the point the ability to take what he wants. 
				t Of course loyalty is important too, and maybe a few more fun commands for down the line as well. Once you're done... 
				t *SNAP*! 
				t ... But he doesn't budge. Still as a stone, he just keeps laying there like a broken doll. His eyes do focus a little so you lean in for a closer look only to be flicked in the nose. 
				sp nagatoro; Gotcha! Hahaha~! 
				t You stand up and rub your nose. What happened? He couldn't have been faking the entire time, right? 
				t But as he has a laugh at your expense, you notice that there is actually something different about him. He seems more relaxed. While he could be faking, he's clearly more confident than he was before. 
				sp nagatoro; Hey, snap out of it! I know I'm cute, but did you forget our deal? Now, I'm really nice, and you really did try your best, so... 
				t He licks his lips, making sure they're nice and wet.
				sp nagatoro; Y'know, I bet you've been looking at these since we first met. How come you haven't told me I'm cute yet? I know it's what your thinking, do I need to <i>force</i> it out of you?
				t As he says "force" he reaches his hands out to your waist.
				sp player; Whoa, hold on a sec-
				sp nagatoro; No way~! Hey, quit pushing! I promised you...
				im images/nagatoro/046.jpg
				sp nagatoro; A reward!
				t You look around. Nobody's in sight and nobody should need to be in this area around this time, you should be fine.
				sp nagatoro; Heeey~! Quit ignoring me. You should feel lucky to get lips like these on you, so no complaining either! I make up for inexerience with...
				im images/nagatoro/048.jpg
				sp nagatoro; Mmm~
				t You're well past hard already. He isn't deepthroating your dick or anything, but his soft hands combined with his admittedly impressive lips, plus how much teasing this brat has put you through...
				im images/nagatoro/050.jpg
				t Not only that, but he looks absolutely in love with the taste of you, completely fading into the moment. He strokes his hands up and down while letting his lips stimulate the crown of your dick.
				im images/nagatoro/052.jpg
				t And all the while his tongue dancing along your head. All that boundless energy seems to be relaxing as you see him start to visibly mellow out before your eyes. You can feel a shudder travel up your spine as suddenly...
				im images/nagatoro/054.jpg
				sp nagatoro; Hfffph-
				t His cheeks puff out as you start to cum. His head stops its small bobs but his tongue still rubs just below your urethra. After a moment he stops completely, waiting to make sure you're fully spent, before pulling his head back and looking up at you with a familiar smug smile.
				im images/nagatoro/060.jpg
				t For a moment he does nothing but lock eyes with you, before without breaking eye contact you can see him slowly swallow.
				im images/nagatoro/058.jpg
				sp nagatoro; Aaaah~<br>Ta-da~! How's that for a reward, huh?
				t You quickly get dressed and stumble backwards a little. This nymph has to be hypnotized, right? Even if he isn't though, you'll surely have another chance to try again.
				sp player; Very impressive... What now?
				sp nagatoro; Isn't it obvious? Forget what the principal says. I've got the room, I've got the materials. Even if you and I are the only ones interested in the club, that's enough.<br>... You are interested, right?
				sp player; I probably wouldn't have come this far otherwise.
				t Like nothing happened at all, without even a single hair out of place, he stands up and starts walking back to the school entrance.
				im images/nagatoro/040.jpg
				sp nagatoro; Then I'll be seeing you around~!
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
	{index: "nagatoroReward", requirements: "?trust nagatoro 100;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "nagatoroReward": {
			writePhoneImage("images/nagatoro/reward.jpg", "Art by Kinta no Mousou");
			writePhoneSpeech("nagatoro", "", "You've finished all of nagatoroF's content for this version, what would you like to see next? I bet it's something lewd!");
			break;
		}
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
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