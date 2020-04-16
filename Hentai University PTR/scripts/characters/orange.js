var character = {index: "orange", fName: "Vanessa", lName: "Lions", trust: 0, encountered: false, textEvent: "", met: false, color: "#BA5B17", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};

var logbook = {
	index: "orange", 
	desc: "A new student on campus, and a rising star on the colleyball team.",
	body: "Stacked, is the first word that comes to mind. Despite her impressive figure, though, she tends to wear her hair in a way that emphasizes her youth.",
	clothes: "Usually wears a sporty hoody over her school uniform.",
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
	{index: "orange2", name: "You hear a knock at you door, one loud knock before hearing a voice outside.", location: 'playerOffice', time: "MorningEvening", itemReq: "", trustMin: 40, trustMax: 50, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "placeholder", name: "", location: '', time: "", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "orange1": {
			passTime();
			setTrust('orange', 40)
			addFlag("coach", "orangemet")
			writeText("You wait for orangeF. It's not long before she knocks on your door. What you weren't expecting was the yelling seconds after the knock.");
			writeSpeech("orange", "", "playerF! I'm supposed to come to you for a meeting! I'm coming in!");
			writeText("She doesn't even get to the end of her warning before she's halfway in the door.");
			writeSpeech("orange", "", "Oh! Hi, playerF!");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("This girl needs a volume dial.");
			writeSpeech("player", "", "Little loud, orangeF. Though I'm glad you're apparently excited to be here. Do you know why you're here today?");
			writeText("Her face frumples into a scowl.");
			writeSpeech("orange", "", "Yeah, I think I do. I've... Gotten into a few fights, and they're worried I might make it a habit.");
			writeSpeech("orange", "", "But I won't! I swear! I only got into fights when people were acting rude. And I've never hit anyone. It's not that big a deal.");
			writeText("She really does seem to have a hair trigger.");
			writeSpeech("player", "", "Hey. orangeF. Calm down. I didn't mean to accuse you of anything. I just want to help.");
			writeText("She seems to realize that she was yelling at you.");
			writeSpeech("orange", "", "Oh. Sorry, playerF. I didn't mean to... It's just... Uuugh.");
			writeText("orangeF seems to cool down a bit and takes a seat across from you.");
			writeSpeech("orange", "", "Just, the things I've gotten made fun of since I got here kinda... Kinda hit me hard.");
			writeText("She looks at you as if wondering how much more to say.");
			writeSpeech("player", "", "You don't have to share anything you don't want to, orangeF. I just want to be sure that our students are all okay. Don't worry too much, even sportsF had a lot of trouble talking to me about her problems at first. We can take as much time as you need, and if you feel uncomfortable at any point, you're not required to be here.");
			writeText("She looks down when you mention sportsF. From what you could figure out, orangeF really looks up to her as a role model. Hopefully her recommendation helps you out here.");
			writeSpeech("orange", "", "... Thanks, playerF. That does make me feel better. Sorry about being so twitchy. So... Uhm... What exactly...?");
			writeText("You give her a smile and a shrug.");
			writeSpeech("player", "", "There isn't any real formal procedure here, orangeF. For now we can just chat. Let me know how you're doing. If there's anything bothering you at school or at home. It doesn't have to be serious. For now, think of it as getting to know each other. You don't have to think about anything too hard.");
			writeText("She seems a little confused, but after a few seconds starts to nod and begins talking. It takes her a bit, but before long she's gotten up to speed and feeling comfortable around you.");
			writeSpeech("orange", "", "Well, lately, my classes have been...");
			writeSpeech("orange", "", "And I like coldF, she's fun to be around, but it always feels like she's working so hard to make things work...");
			writeSpeech("orange", "", "I've been having trouble in scarfF's class lately, honestly. But she always seems to be two steps ahead of me and usually makes a point to help when I'm having trouble. It'd be creepy if it wasn't so helpful. But apparently she's like that with everyone...");
			writeSpeech("orange", "", "Also, apparently there's a girl in my class who wants to be a pornstar! That's crazy! But... To be honest... If she did star in something I'd definitely want to see that one.");
			writeText("It's been about an hour now, and she's much more relaxed around you now. Honestly, that last one may have been a bit too much information, but you're not complaining. She still seems to be dancing around whatever the issue was that set her off, but progress is progress.");
			writeSpeech("orange", "", "Oh, my God! Did I just say that out loud?");
			writeSpeech("player", "", "Don't sweat it orangeF. Glad you're feeling more comfortable with this whole process now, though. You should probably get back to class now, but you're more than welcome to have another session with me anytime. My door is always open.");
			writeText("She lets out a sigh, sinking back in the chair before speaking.");
			writeSpeech("orange", "", "I may just take you up on that, playerF. This has actually been kind of nice.");
			writeFunction("changeLocation(data.player.location)", "You get up and help her pack her things before closing the door. Despite the short fuse, she's a nice girl.");
			break;
		}
		case "orange2": {
			writeSpeech("orange", "", "playerF! Are you in? It's orangeF! I needed to talk with you about something!");
			writeText("You walk to the door and open it softly. Looking out, you see orangeF standing at your door with her hands down near her lap, looking sullen.");
			writeSpeech("player", "", "Come on in, orangeF. Is everything okay?");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She walks into your office and sits down, pouting a bit as she starts talking.");
			writeSpeech("orange", "", "No. I got made fun of again today. I just... Uggh. I wanted to punch those losers right in the head.");
			writeText("She looks down even more, fiddling with her hands and getting very quiet as she continues.");
			writeSpeech("orange", "", "They're lucky sportsF was there. She got me cooled down enough to walk away.");
			writeSpeech("orange", "", "... I'm also luck coachF was there. I didn't think I'd ever say it, but she chased those guys off and made sure I was okay afterwards.");
			writeText("She sighs heavily and takes a minute. You let her cool down. No hurry now.");
			writeSpeech("orange", "", "I still wanted to clock the guys, but coachF and sportsF talked me out of it and told me it'd be better if I came down here. They figured you could calm me down or something.");
			writeText("She finally looks up from her hands and looks at you.");
			writeSpeech("orange", "", "Soo... Uhh. Calm me down?");
			writeSpeech("player", "", "I mean, that's not quite how it works but...");
			writeFunction("loadEncounter('orange', 'orange2a')", "I've got some time. We can talk.");
			writeFunction("changeLocation(data.player.location)", "I don't have time today, sorry.");
			break;
		}
		case "orange2a": {
			passTime();
			setTrust('orange', 51)
			writeText("Time to settle in. You get yourself behind your desk and turn to face orangeF.");
			writeSpeech("player", "", "So what's up, orangeF? You ready to talk about what's been bothering you?");
			writeBig("images/orange/2a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("orange", "", "I... No. Not really. I mean... Sorry.");
			writeSpeech("player", "", "That's okay, orangeF. Take your time.");
			writeText("Does make you curious, though. Hmm. sportsF and coachF probably know what happened. Maybe you could ask them later.");
			writeSpeech("player", "", "Okay then. We'll just take it easy then. Tell you what, this is something that helped sportsF out a lot. Have you ever done any meditation?");
			writeText("She looks up at you skeptically.");
			writeSpeech("orange", "", "Ummm. I took a karate class when I was young. We did some meditation at the end of classes. I never really understood the point of it, though.");
			writeText("Fair.");
			writeSpeech("player", "", "That sounds about right. Meditation isn't super accessible to kids except as a cooldown.");
			writeText("She leans back for a minute and looks at you.");
			writeSpeech("orange", "", "I mean, I guess it's not like I have anything to lose. And sportsF did mention that you had helped her with meditation and hypnosis. I still think it sounds goofy, but... Fine. Is there anything I should do, or...?");
			writeSpeech("player", "", "Just sit back and relax a bit. There's not much to it honestly. I'll guide you along. I just need you to listen and follow along.");
			writeText("She wiggles a little in her chair, trying to get herself comfortable.");
			writeSpeech("orange", "", "Just to check, if I fall asleep it's okay, right? I did that a couple times in Karate, and I did just come from practice so I'm kinda tired and...");
			writeSpeech("player", "", "That's fine, orangeF. If you fall asleep, I guess we did get you calmed down and relaxed, right?");
			writeFunction("loadEncounter('orange', 'orange2b')", "I've got some time. We can talk.");
			break;
		}
		case "orange2b": {
			writeSpeech("player", "", "How are you feeling now, orangeF? Anything bothering you?");
			writeText("You've spent the last half an hour slowly working orangeF down into trance. Simple guided meditation stuff, but she was willing and ready, so it wasn't nearly as much of an issue as you had feared.");
			writeSpeech("orange", "", "I mean... Yes. Lots of things.");
			writeText("Huh. At this point you'd think that she'd be pretty past anything bugging her. Whatever the issues are must run pretty deep.");
			writeSpeech("player", "", "Alright then. Why don't you let me know what's up then. You can trust me. I'm here to help, right? Just like I helped sportsF.");
			writeSpeech("orange", "", "Yeah. You helped her. And coachF. I can trust you. I just...");
			writeText("She stops for a second. Not resisting. Just looking for the right words. You give her the time she needs.");
			writeSpeech("orange", "", "I grew up pretty sheltered, I guess. Since coming to this school I've seen a bunch of new things, and done a bunch of new things. And it's been a lot of fun. I just feel like...");
			writeText("Looking for the right words again.");
			writeSpeech("orange", "", "I feel like all of this has been happening super fast, and I don't know if I'm comfortable with it. My friends all have experience with so much, and I never even thought about any of it. And now that I do think about it, I just don't know...");
			writeSpeech("player", "", "That's all normal, orangeF. You're young and a lot of things are happening at this age. You're away from your family for the first time. A lot of people go through stuff like this. Is there anything in particular that's really bothering you?");
			writeText("She stops again. You see her shaking a litte. Maybe you're pushing a bit too hard.");
			writeSpeech("orange", "", "I mean... Yeah. Plenty of things.");
			writeSpeech("player", "", "Can you tell me what the boys were making fun of you for, or is that too much?");
			writeSpeech("orange", "", "That... That's too much.");
			writeSpeech("player", "", "Okay. That's perfectly fine, orangeF. Is there anything else in particular that you feel comfortable telling me about?");
			writeSpeech("orange", "", "Well... I don't know. I feel uncomfortable a lot of the time. It feels weird for boys to be looking at me the way they do. I never really had to deal with boys much at my old school. It was an all girl's school, and really religious. It's really different to be here now where the boys always seem to be either interested or angry at me.");
			writeText("Body image issues? You can help with that.");
			writeSpeech("player", "", "orangeF, trust me. You're a beautiful young lady. If the boys give you trouble, or make you feel uncomfortable, you can always come to me, coachF, or any of the other staff.");
			writeSpeech("orange", "", "Thanks, playerF. But... That's not... I mean, it's part of it, but also...");
			writeText("Another pause. Maybe there's more to this than you thought.");
			writeSpeech("orange", "", "I just, I don't know how to respond when people look at me like that. So I get angry because I don't know what to do. And... And it's not like I don't <i>like</i> sometimes when they look at me like that. But I just don't know what to do.");
			writeFunction("writeEvent('orange2c')", "You can work with that.");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "orange2c", name: "Cooling Down"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "orange2c": {
			writeSpeech("player", "", "Ah. I see. So, orangeF, if I were to look at you like that, how would that make you feel?");
			writeText("She shuffles a little in her chair.");
			writeSpeech("orange", "", "I mean... It would make me feel good. You're a good guy. And you've helped out a lot of people in the school.");
			writeText("For a certain value of 'help'.");
			writeSpeech("player", "", "Well, orangeF, I do see you that way. Like I said, you're a very beautiful girl. Does that make you feel like lashing out? Or does that make you feel good?");
			writeSpeech("orange", "", "It makes me feel good. But I don't know what to <i>do</i> about it. It feels like anything I should do is wrong.");
			writeSpeech("player", "", "Trust me, orangeF. There's nothing wrong going on here. Just run with what feels natural.");
			writeSpeech("orange", "", "Ookay. I... Thank you playerF. I appreciate you saying that about me. I... Do you want to see more?");
			writeText("Interesting. That's not what you expected.");
			writeSpeech("player", "", "If you're comfortable with it, orangeF, I would love to see more.");
			writeSpeech("orange", "", "Just... The other girls have told me that when you feel this way about a boy, and when he feels that way about you... You can... Uhmm.");
			writeText("She stands up slowly and takes off her hoodie, stripping down until her tits are free, and kneeling down in front of you.");
			writeSpeech("orange", "", "They said that you could do something like this...");
			writeText("You just let her go. No reason to rock the boat now. She quickly pulls down your pants and takes your cock out.");
			writeBig("images/orange/2c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("orange", "", "That feels...");
			writeSpeech("player", "", "This is something the other girls talked about?");
			writeSpeech("orange", "", "Y-yeah. sportsF and swimmerF talked about it. I've never... Uhh, I've never done something like this so... If you.. If I...");
			writeText("She moves slowly, definitely lost as to what she's supposed to be doing. But she's trying her best, and honestly it's very cute.");
			writeSpeech("player", "", "It's okay. Take your time. Enjoy yourself. It feels good for me. How does it feel for you?");
			writeSpeech("orange", "", "Really... Hot. Like, it feels really warm on my chest. And... And between my legs.");
			writeText("She starts to move faster, letting her hands wander a little more over her own breasts and gasping when she finds sensitive spots. Her fingers slowly running around her nipples and her whole body shuffling as you see her rubbing her thighs together beneath herself.");
			writeBig("images/orange/2c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("orange", "", "Ah! It's starting to leak. swimmerF said that I should...");
			writeText("She leans back, moving your cock from upright to straight into her chest. As she does, you feel your precum slick against her skin as she continues. Your pre lubricating her chest and breasts as she moves back to giving you pleasure.");
			writeSpeech("orange", "", "That feels weirdly good... I uhm. Am I doing good playerH?");
			writeText("You reach down and pat her head. She really is cute like this.");
			writeSpeech("player", "", "You're doing great, orangeF. You're being a very good girl. And you look adorable like this.");
			writeSpeech("orange", "", "Th-thank you, playerH. I uh- You look great too.");
			writeText("You didn't think she could get more red, but her blush expands even further when she says that.");
			writeSpeech("orange", "", "Are you going to- I mean- are you getting close to uhm...");
			writeText("You feel her start to move faster.");
			writeSpeech("player", "", "Am I close to cumming? It won't be long. Keep it up. And remember, just enjoy this, orangeF.");
			writeSpeech("orange", "", "Right. Enjoy it. It does feel really good. Just gotta keep it up and...");
			writeText("The next few minutes pass quickly as she continues. She may not have any experience with this sort of thing, but whatever tips swimmerF gave her do seem to be good ones. She makes sure to keep herself as lubricated as she can with your precum, and varies up her speed fairly regularly. You keep petting her head as she goes, each little movement of your fingers causing a small moan from her. When you get close you give her a quick tap, but she stops.");
			writeSpeech("orange", "", "Ah! Oh, sorry, is something wrong?");
			writeText("She doesn't know.");
			writeSpeech("player", "", "The opposite, orangeF. You're doing great. The tap was to let you know I'm close to cumming. Pick up the pace and be ready.");
			writeText("She nods up at you and gets to work. She's rougher now, squeezing your cock tight between her tits and really pumping. The rough pace makes her breathing heavier and every time she pushes down you can feel her gasping as she breathes heavily onto your cock. Little puffs of hot air pushing you even further towards the edge.");
			writeBig("images/orange/2c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("orange", "", "Ah!");
			writeText("orangeF jumps and twists her head back as you cum.");
			writeBig("images/orange/2c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("orange", "", "Ohh... That was... I uhm. That was fun. Did you- Did you have fun too, playerH?");
			writeSpeech("player", "", "I did. Doing something like this with a beautiful girl is always fun. But remember, this is something you should only do with someone you trust. You trust me, right orangeF?");
			writeSpeech("orange", "", "Of course, playerF. Otherwise I never would have...");
			writeSpeech("player", "", "That's good. Would you want to do more of this in the future, orangeF?");
			writeText("orangeF had been cleaning herself up, but when you say that you see her stop and shiver, her hand moving towards her own sex beneath her skirt before she catches herself..");
			writeSpeech("orange", "", "I would really like that. I had a lot of fun. And I have a lot of things to learn. And you seem like a really good teacher.");
			writeSpeech("player", "", "I'm glad to hear it, orangeF. Then we'll have some private lessons. I'll give you my number and my address. We'll work out a schedule later, okay.");
			writeSpeech("orange", "", "Thank you, playerF. I really appreciate it.");
			writeSpeech("player", "", "Just remember orangeF, this is private tutoring. I'm helping you to expand your horizons, working on your anger management, help you with all the changes going on in your life recently. Normal councilor stuff. If you need to talk to someone about these things, talk to coachF. She and I are working together to make sure you get all the help you need. Okay?");
			writeSpeech("orange", "", "Got it. Just helping me expand my horizons, anger problems, and helping me through life changes. Normal councilor stuff.");
			writeFunction("changeLocation(data.player.location)", "You help her get cleaned up before bringing her slowly up. She leaves happier and a little less pent up than she got there.");
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
	{index: "orangereward", trust: 51,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "orangereward": {
			writePhoneImage("images/orange/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","That's all for orangeF for now! I'll be expanding on the students soonish.");
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