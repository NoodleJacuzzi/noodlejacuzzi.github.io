var character = {index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "", color: "#954655",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "scarf", 
	desc: "A fellow university teacher. Her sister works here too. She's an expert hypnotist suffering from a 'artist's block'.",
	body: "It's not clear how old she is. When you really focus, there's a slight blur around her body whenever you look at her.",
	clothes: "Her preferred outfit is a v-neck shirt and a yellow scarf. She must be wearing some sort of herbal perfume because your head feels fuzzy around her.",
	home: "She lives somewhere south of the shopping district, but spends most of her time at the school. ",
	tags: "No scenes yet, sorry! In the future her content will be dependent on increasing your Hypnosis skill.",
	artist: "Artist: Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introduction1", name: "A teacher is walking down the hall.", location: 'eastHallway', time: "MorningEvening", itemReq: "File T-1", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "caseSelect", name: "scarf is here in her office.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 40, trustMax: 41, type: "tab", top: 0, left: 0, day: "both",},
	{index: "challengeStart", name: "scarf is here in her office, if you're ready to start.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 42, trustMax: 42, type: "tab", top: 0, left: 0, day: "both",},
	{index: "challengeFiller", name: "scarf is here in her office.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 43, trustMax: 43, type: "tab", top: 0, left: 0, day: "both",},
	{index: "casinoPrompt", name: "scarf is here in her office, if you're ready to start.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "casino1", name: "Chase the bunny.", location: 'casino', time: "MorningEvening", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "casino2", name: "Chase the bunny.", location: 'casino', time: "MorningEvening", itemReq: "", trustMin: 61, trustMax: 61, type: "tab", top: 0, left: 0, day: "both",},
	{index: "beachPrompt", name: "scarf is here in her office, if you're ready to start.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 62, trustMax: 62, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introduction1": {
			writeText("You wave to her as she walks down the hallway.");
			writeBig("images/scarf/profile.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Excuse me, could I have-");
			writeText("But she just keeps walking, uninterested in conversation. It's like you're not even there.");
			writeSpeech("player", "", "Could I just have a second please?");
			writeText("... And she's gone, what a pain. This really isn't your job, but it'll help you get closer to "+fName('principal')+".");
			writeText("In any case if she isn't interested in chatting in the halls, maybe you'll find her in the teacher's lounge?");
			raiseTrust('scarf', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "caseSelect": {
			writeSpeech("scarf", "", "Yes? Did you need something? I loathe having my time wasted.");
			writeSpeech("player", "", "Oh, sorry. Were you doing something?");
			writeSpeech("scarf", "", "No, and I'd like to keep it that way.");
			switch (checkTrust('scarf')) {
				case 40: 
					writeFunction("writeEncounter('scarf1')", "I was hoping to learn something");
				break;
				case 41:
					writeFunction("writeEncounter('scarf2')", "I'd like another lesson");
				break;
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "scarf1": {
			writeSpeech("player", "", "Techniques. Skills. You're a confident woman, what do your know that I don't?");
			writeSpeech("scarf", "", "Hmhm. When I was in your shoes, I had nearly an entire town at my beck and call. I did a little more than seduce students.");
			writeSpeech("player", "", "Oh? And where's your town now?");
			writeSpeech("scarf", "", "...<br>I'll let you in on a little tip, child. You might feel the urge to torment others. Watch as the only one who isn't mind-broken to your will sees what's become of his family and lover. Don't. Instead of reveling in madness, he'll just go to the police.");
			writeSpeech("player", "", "I was maybe hoping for some more... Practical advice.");
			writeSpeech("scarf", "", "Fine, fine. I am a teacher after all.");
			writeSpeech("player", "", "I want to learn a technique to increase sensitivity. By a lot.");
			writeSpeech("scarf", "", "Oho~? And how exactly will you use something like that?");
			writeSpeech("player", "", "Well, to start...");
			writeText("...");
			writeSpeech("scarf", "", "I'm quite convinced. Very well then.");
			writeText(fName('scarf')+" teaches you a sensitivity increase technique.");
			data.player.hypnosis += 1;
			raiseTrust('scarf', 1);
			passTime();
			updateMenu();
			writeSpecial("Your skill in hypnosis has improved!");
			writeSpeech("scarf", "", "Try not to get killed. Or caught. Or bored.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "scarf2": {
			writeSpeech("player", "", "Surely a woman of your talents has discovered a more effective way to break minds.");
			writeSpeech("scarf", "", "Oho~ I can tell your flattery is empty, child, but honestly I don't care. Very well, I can teach you something.");
			writeText("...");
			writeSpecial("Your skill in hypnosis has improved!");
			writeSpeech("player", "", "Perfect. By the way, what's with the fuzz?");
			writeSpeech("scarf", "", "Excuse me?");
			writeSpeech("player", "", "Whenever I look at you, you've got some kind of glow about you. It makes you look out of focus.");
			writeSpeech("scarf", "", "My, you really are something. I'll admit, you have some talent. Maybe it's time for you to prove yourself?");
			writeSpeech("player", "", "What did you have in mind?");
			writeSpeech("scarf", "", "When I was your age, I didn't quite have a lovely school like this to run around in. I was seducing men into my service as playthings, and as protectors.<br>Come back some other time. I'll prepare a real challenge for you.");
			data.player.hypnosis += 1;
			raiseTrust('scarf', 1);
			passTime();
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "challengeStart": {
			writeSpeech("scarf", "", "You came back.<br>So, you're prepared?");
			writeSpeech("player", "", "For anything.");
			writeSpeech("scarf", "", "Your tenacity is almost contagious. I'll make things quite simple, give me a moment.");
			writeSpeech("green", "", "playerF! Hey, what'cha d-");
			writeText("scarfF snaps her fingers and greenF freezes on the spot, her body relaxes and her eyes unfocus.");
			writeSpeech("scarf", "", "Once I wake her back up all you'll need to do is to make greenF say the line 'he passed the test'.<br>I'm sure you'd like to start right away, but do remember what happened last time.");
			writeSpeech("player", "", "I probably could've taken her, I'm no pushover.");
			writeSpeech("scarf", "", "Child, her hypnotic state is strong enough to power her through broken bones.");
			writeSpeech("player", "", "Damn, how deep did you put her?");
			writeText("scarfF smiles wistfully and snaps her fingers again.");
			writeSpeech("green", "", "-oing here? Is scarfF in trooouble~?");
			setTrust('scarf', 43);
			setTrust('green', 41);
			writeFunction("changeLocation(data.player.location)", "The challenge begins!");
			break;
		}
		case "scarfCheat": {
			writeText("The room feels you a little warmer as scarfF gives you a familiar whistful smile.");
			writeText("The air conditioner is pretty strong in this room, you can almost feel a breeze as scarfF grabs the bottom of her sweater. You were expecting some new hypnosis technique, but this works too.");
			writeText("scarfF gives a playful sigh as she pulls up her sweater. The soft sound of the nearby waves aren't enough to distract you as she flashes you her-<br>Wait.");
			writeBig("imagebox/scarf/scarfBeach1.jpg", "Art by Enoshima Iki");
			writeText("You're on the beach. She's in a bikini. There's sand beneath your feet. Did you teleport? More likely, you're hallucinating. Everything around you has that same fuzz scarfF does, but when did she put you in a trance?");
			writeSpeech("scarf", "", "Just now noticing? I'm flattered my body has your attention.<br>You know, daydreaming isn't a very accurate phrase. Actually making the brain dream in the middle of the day is actually quite hard, but the advantages are wonderful.");
			writeSpeech("player", "", "How long have I been dreaming? Was any of that real? How do I do this?");
			writeSpeech("scarf", "", "Only a few moments, all of that was quite real up until now, and many, many years of practice and learning.");
			writeText("As she speaks you can dimly hear words floating through the back of your mind. Another conversation, you can hear your own voice and someone else's.<br>Scarf gives you a wry smile as you focus on the conversation, and the blue sky above you fades into a grey ceiling.");
			writeSpeech("principal", "", "playerF?");
			writeSpeech("player", "", "Huh?");
			writeText("You snap out of it, now sitting in principalF's office.");
			writeSpeech("principal", "", "Are you alright? You came in here, eyes all glazed over and said you had something to confess.<br>You are not taking drugs, are you?");
			writeSpeech("player", "", "No, of course not! I just... uh... Wanted to confess that...<br>My office! Has gotten very, uh, messy. I wanted to know if you had any advice. Since yours is so well kept.");
			writeText("The air is heavy for a moment, but it seems like principalF took the bait. She gives you some advice and asks you to leave.");
			writeText("<b>scarfF almost had you confess your true nature, principalF is less trusting of you now!</b>");
			writeText("You return to the lounge afterwards, but neither scarfF or greenF are here. They must have headed home for the day, you probably should too to prepare mentally.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			updateMenu();
			break;
		}
		case "scarfVictory": {
			writeText("The air conditioner is pretty strong in this room, you can almost feel a breeze as scarfF grabs the bottom of her sweater. You were expecting some new hypnosis technique, but this works too.");
			writeText("scarfF gives a playful sigh as she pulls up her sweater. The soft sound of the nearby waves aren't enough to distract you as she flashes you her-<br>Wait.");
			writeBig("imagebox/scarf/scarfBeach1.jpg", "Art by Enoshima Iki");
			writeText("You're on the beach. She's in a bikini. There's sand beneath your feet. Did you teleport? More likely, you're hallucinating. Everything around you has that same fuzz scarfF does, but when did she put you in a trance?");
			writeSpeech("scarf", "", "Just now noticing? I'm flattered my body has your attention.<br>You know, daydreaming isn't a very accurate phrase. Actually making the brain dream in the middle of the day is actually quite hard, but the advantages are wonderful.");
			writeSpeech("player", "", "How long have I been dreaming? Was any of that real? How do I do this?");
			writeSpeech("scarf", "", "Only a few moments, all of that was quite real up until now, and many, many years of practice and learning.");
			writeText("As she speaks you can dimly hear words floating through the back of your mind. Another conversation, you can hear your own voice and someone else's.<br>Scarf gives you a wry smile as you focus on the conversation, and the blue sky above you fades into a grey ceiling.");
			writeSpeech("principal", "", "playerF?");
			writeSpeech("player", "", "Huh?");
			writeText("You snap out of it, now sitting in principalF's office.");
			writeSpeech("principal", "", "Are you alright? You came in here, eyes all glazed over.<br>You are not taking drugs, are you?");
			writeSpeech("player", "", "No, of course not! I just... Am feeling a little tired. Keeping up with the workload is taxing.");
			writeSpeech("principal", "", "Ah. You can't keep up with the workload and need a break.");
			writeText("She looks disappointed, even annoyed, this must be something she hears a lot.");
			writeSpeech("player", "", "Not at all, I wouldn't trade a second of it for anything. I was just wondering if you had any tips for managing it all.");
			writeText("The air is heavy for a moment, but it seems like principalF took the bait. She gives you some advice and asks you to leave.");
			writeSpecial("You broke out of the trance before you hurt your reputation with principalF!");
			writeText("You return to the lounge afterwards, but neither scarfF or greenF are here. They must have headed home for the day, you probably should too to prepare mentally.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "challengeFiller": {
			writeText("scarfF looks up from a leather book.");
			writeSpeech("scarf", "", "Oh? Giving up? I suppose I expected a little much from you.");
			writeSpeech("player", "", "I'll make you eat those words.");
			writeSpeech("scarf", "", "Hmhm~<br>I look forwards to it.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			unencounter("scarf");
			break;
		}
		case "failure": {
			if (checkTrust('scarf') == 61) {
				setTrust('scarf', 60);
			}
			if (checkTrust('scarf') == 63) {
				setTrust('scarf', 62);
			}
			if (checkTrust('scarf') > 99) {
				writeSpeech("scarf", "alt.jpg", "Just kidding!");
				writeText("The world around you shifts and shimmers, befitting its dreamlike nature, until you're back in scarfF's office.");
				writeSpeech("scarf", "alt.jpg", "Sorry, I got a bit too into it. This is just for fun of course. Just relax, and I'll send you back.");
				writeFunction("changeLocation(data.player.location)", "Return to the dream");
				writeFunction("changeLocation('teacherLounge')", "Return to the waking world");
			}
			else {
				if (checkTrust("succubus") > 60) {
					writeText("But suddenly you feel a hand grasp yours, the scent of sinning (which smells suspiciously close to chocolate) fills the air. You don't get a chance to see your savior as you turn towards them, but suddenly you find that the environment around you has shifted. You recognize where you are!");
					writeFunction("changeLocation(data.player.location)", "Continue the search");
				}
				else {
					writeText("You've met with a terrible fate. Destiny has been taken out of your hands; no longer under your control.");
					writeText("However the universe does not play on for lapdogs. Rejecting your fate is the only path forwards, so close your eyes and realize it was all just a dream. A nightmare perhaps, but nevertheless...");
					data.player.time = "Morning";
					writeFunction("changeLocation('playerHouse')", "Awaken!");
				}
			}
			unencounter('scarf');
			break;
		}
		case "casinoPrompt": {
			writeText("scarfF looks up from a leather book. She seems to spend a lot of time avoiding work as much as possible.");
			writeSpeech("scarf", "", "Ah, already?");
			writeText("Whatever she has planned could be pretty taxing. Are you prepared?");
			writeFunction("writeEncounter('casinoStart')", "You're ready");
			writeFunction("writeEncounter('casinoRefusal')", "You need more time");
			break;
		}
		case "casinoRefusal": {
			writeSpeech("player", "", "Actually, I could use some time to prepare myself, mentally. I'll come see you when I'm ready.");
			writeSpeech("scarf", "", "Oh... How droll, you seemed so gung-ho a before. If you think you can catch me off guard you're sorely mistaken.");
			unencounter("scarf");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "casinoStart": {
			writeSpeech("player", "", "I'm good. You ready for this?");
			writeSpeech("scarf", "", "Absolutely. I'll give you one last chance to-");
			writeSpeech("player", "", "Don't need it. So, what's this gonna be? We take turns swinging a pendant?");
			writeSpeech("scarf", "", "I don't intend to mislead you, to unravel your mind with impossible geometry. You're a simple *man, playerF. I intend to find what you truly desire, and offer it to you. <i>Forever</i>.<br>Your consciousness will be satisfied in a never-ending loop of fantasy, while your body is mine to play with.");
			writeText("This isn't a game you'll win or lose, it's a dance where you take the lead or enjoy following.");
			writeBig("imagebox/scarf/scarfCasinoStart1.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "", "I'll go easy on you, just this once. An incredulous setting, bizarre outfits, outlandish personalities. You should be able to keep your head together for a practice run, right?");
			writeSpeech("player", "", "You'll regret taking it easy on me, scarfF.");
			writeBig("imagebox/scarf/scarfCasinoStart2.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "", "No, I don't think I will.");
			writeText("She pulls up her shirt, exposing her huge tits to open air. But as she does, you notice lights swirling in your peripheral vision and your sight grows haze. As you blink and rub your eyes, everything changes in less than a heartbeat.");
			writeBig("imagebox/scarf/scarfCasinoStart3.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Fucking with reality around me, huh? You gonna titfuck me into submission?");
			writeSpeech("scarf", "", "Ooh, not a bad idea~<br>But first, you'll need to catch me. Try not to get too distracted by everyone else, alright?");
			writeSpeech("player", "", "Huh?");
			writeText("She turns around and starts walking away, her ass swaying with every step. A flash of light attracts your attention and you realize you're standing in the middle of a massive casino. Everywhere around you men and women are dressed in bizarre outfits, strange even for the setting. A woman in a too-small shirt and a loincloth, a blonde in wrestler cosplay, bunnies as far as the eye can see...");
			writeSpeech("player", "", "Where the hell...?");
			writeText("It's all a distraction, of course. All meant to suck you down a rabbit hole, if she can convince your mind that it wants to stay here, she'll have you as a puppet for the rest of your life. You'll need to find her, to focus on her and anchor yourself to reality.");
			writeFunction("changeLocation('casino')", "The challenge begins");
			unencounter('scarf');
			break;
		}
		case "casino1": {
			writeText("You manage to spot her in the crowd and push your way through towards her. Though they certainly look solid they part like water as you force your way through. They feel not-quite-there to the touch, actually.");
			writeSpeech("scarf", "", "My my~<br>Such ironclad dedication. A normal girl would be frightened to see someone approach her so resolved.");
			writeText("You can hear her voice clearly despite the people talking and bustling around you, like she's speaking directly into your ear.");
			writeText("But as you make a final push past an overweight man, she's nowhere to be seen.");
			writeSpeech("scarf", "", "Why not take it slowly, enjoy the sights?");
			writeSpeech("player", "", "I'm not getting distracted, scarfF. I intend to win this.");
			unencounter("scarf");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "casino2": {
			writeText("You spot her again and make sure to keep a close eye on her bunny ears as you force your way through the crowd. Focusing on the image of her in your mind, the crowd seems to grow thinner, almost vanish.");
			writeSpeech("scarf", "", "I can see the locale isn't to your liking.");
			writeSpeech("player", "", "I'm not a gambling *man, scarfF. The game is ending here in my win.");
			writeText("The crowd is gone now, scarfF isn't running anymore. She walks towards you, placing a single finger on your chest, and before you know it you're flat on your back.");
			writeBig("imagebox/scarf/scarfCasinoEnd1.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "", "You'll buckle under the pressure, you know. You don't get to waltz through my playhouse and walk away, no one ever leaves here.");
			writeText("It feels really, way too real. Pushing past the people of the crowd felt like trying to bat away smoke, but this really feels like you're fucking her tits.");
			writeBig("imagebox/scarf/scarfCasinoEnd2.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "", "Aaaah~<br>Why continue to resist? Is it spite, or simply the urge to remain dominant?");
			writeText("You remain focused even under a barrage of sexual pleasure.");
			writeSpeech("scarf", "", "Can you hold out much lo...");
			writeText("Her voice has a strange echo to it, so you try to tune it out and focus on a smaller voice, it feels distant.");
			writeSpeech("scarf", "normal.jpg", "God, he's huge, I should take this off... I hope he didn't break greenF...");
			writeText("As you feel yourself rapidly approaching orgasm you hold tight to whatever reality you can latch onto.");
			writeBig("imagebox/scarf/scarfCasinoEnd3.jpg", "Art by Enoshima Iki");
			writeBig("imagebox/scarf/scarfCasinoEnd4.jpg", "Art by Enoshima Iki");
			writeText("For a moment you can see with perfect clarity, until a familiar fuzz overtakes your vision.");
			writeSpeech("scarf", "", "Oh my, you're awake~<br>Perhaps you were right, I would've so loved to have taken you as a permanent pet though.");
			writeSpeech("player", "", "I won... I beat you at your own game, scarfF... What's my reward?");
			writeSpeech("scarf", "", "Silly child, you've earned it. Or did you expect you'd crush my spirit after a quick game like that?");
			writeText("Her voice has that same mysterious echo it usually does, something's seriously fishy about her. She seems pretty calm and collected, but you swear she looked a lot more off-balance right after you broke free of your trance.");
			writeSpeech("player", "", "You must give a lot of headaches. What exactly about you is real, and what's just hypnosis?<br>Fine, I guess I could go another round. No holding back this time, alright?");
			writeSpeech("scarf", "", "Patience. I need some time to prepare.");
			writeSpeech("scarf", "normal.jpg", "God it's thick, I wonder if I could get greenF to lick it off of me...<br>Where're my glasses?");
			writeText("You blink in surprise as the weird quick of vision happens again, like reality having a hiccup. You saw a more modest looking scarfF saying something about her glasses. They overlap like she's two people at once.");
			writeSpeech("player", "", "Fine, fine, I'll head out then. Gotta get a break from your mind-fuckery myself, I suppose.");
			writeSpeech("scarf", "", "Take care, playerF. I look forwards to round two.");
			passTime();
			writeFunction("changeLocation('teacherLounge')", "Finish");
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
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "scarfReward": {
			writePhoneImage("images/scarf/reward.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("scarf", "", "You've finished all of scarfF's content for this version, more is coming soon!");
			break;
		}
		case "scarfChallenge": {
			writePhoneSpeech("scarf", "", "I certainly hope my little prank didn't leave you too out of sorts. I'd certainly hate for my latest source of excitement to end up in jail.");
			writePhoneSpeech("scarf", "", "Although I'm sure a sly little boy like you could talk his way out even if you did finish your confession.");
			writePhoneSpeech("scarf", "", "I look forward to your next visit. I'll take you somewhere fun next time.");
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