var character = {index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira"};

var logbook = {
	index: "succubus", 
	desc: "A succubus (male), the lowest rank of demons aside from imps. He's been trying to seduce humans to increase his rank.",
	body: "While disguised he looks entirely human, albeit incredibly feminine for a boy.",
	clothes: "One of his hobbies is collecting girl's clothes. He claims it's purely for seduction purposes.",
	home: "He comes over to your place every night, but you don't know if he actually needs to sleep.",
	tags: "Corruption, anal, tomgirl, trap, cosplay, prostitution, demon",
	artist: "Gujira",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introOffer", name: "Someone is leaning on the wall, they look like they're waiting for someone.", location: 'street', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "windowProposal", name: "Someone in cosplay is sitting in your windowsill", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "???", altImage: "demon.jpg",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introOffer": {
			writeText("Normally you'd just walk past someone passing time on their phone, but something about him just seems... Off. Not quite in a bad way.");
			writeText("Just looking at him makes your vision a little blurry, like your head is being filled with pink fuzz. After a second of focus it dissipates though, maybe he's wearing perfume?");
			writeSpeech("player", "", "Hi. Are you waiting for someone?");
			writeBig("images/succubus/profile.jpg", "Art by Gujira");
			writeText("Without looking you in the eye, he glances up from his phone to size up your body.");
			writeSpeech("succubus", "", "You'll do. Name's Gou, don't need yours<br>Fifty bucks for an hour, you won't need any longer.");
			writeText("He's pretty direct, and it doesn't seem like anyone's watching.");
			writeFunction("writeEncounter('introAcceptance')", "Accept");
			writeFunction("writeEncounter('introRejection')", "Refuse");
			break;
		}
		case "introAcceptance": {
			writeSpeech("player", "", "Sounds fair. I'll probably need more than an hour though.");
			writeSpeech("succubus", "",  "Sure you will buddy, sure you will.");
			writeText("Eyes still locked on his phone, he leads you to a nearby hotel.");
			writeSpeech("player", "", "Not getting the money up front? And you'll just do anyone who asks?");
			writeSpeech("succubus", "",  "I've got my standards and my methods.");
			writeText("The hotel is a actually a pretty nice looking place, but the receptionist doesn't even seem to notice as the two of you walk by.");
			writeText("The elevator ride up is pretty slow. He tends to answer your questions with single-word 'yup's.");
			writeSpeech("player", "", "Gotta say, not impressed so far. Not super interested in a boy going starfish under me.");
			writeSpeech("succubus", "",  "Heh. You don't need to worry, you're about to have the time of your life.");
			writeSpeech("player", "", "Sure. You got a name? A real name, I mean.");
			writeSpeech("succubus", "", "... succubusF.");
			writeText("Whoever he really is, he seems pretty keen on keeping this anonymous. Probably for the best, otherwise you'd need to hypnotize him afterwards. His uniform isn't familiar, he probably doesn't go to your university.");
			writeText("He fishes out a keycard and the two of you enter the room, the lighting and decorations being very direct about the room's purpose.");
			writeText("He takes off the outer layer of his clothes and takes a seat, before rolling his neck trying to work out a kink.");
			writeText("All he's wearing is an extremely lewd set of lingerie, but his bratty posture doesn't do a great job of showing off.");
			writeSpeech("succubus", "", "God I'm tired... This is my only catch this week, gotta hit up Vintage Street after this...<br>Dick out, hurry up.");
			writeFunction("writeEncounter('introWhoring')", "Get Undressed");
			break;
		}
		case "introWhoring": {
			setTrust('succubus', 1);
			passTime();
			writeEvent('succubusDisguise1');
			writeFunction("changeLocation('street')", "Leave");
			for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
				if (data.story[trustIndex].index == "succubus") {
					data.story[trustIndex].encountered = false;
					console.log(data.story[trustIndex]);
				}
			}
			break;
		}
		case "introRejection": {
			writeSpeech("player", "", "No thanks, I'm good.");
			writeSpeech("succubus", "",  "Huh.");
			writeText("He seems suprised that you'd disagree. ");
			writeSpeech("succubus", "",  "Well, you do you. <br>... I must be tired. I'll try again tomorrow.");
			writeText("He mutters to himself before leaving.");
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "maid": {
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "windowProposal": {
			writeBig("images/succubus/profileD.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Hehe, too easy. You really should lock your windows.<br>Hey, remember me? From in town? It's good to see you're already back to walking around.");
			writeText("It's that streetwalker from earlier, although his skin is darker and he's in a strange outfit.");
			writeSpeech("player", "", "I don't have any drugs, and Halloween was awhile ago. Scram, before somebody calls the cops and I need to explain why a sassy boi in cosplay is sitting in my windowsill.");
			writeSpeech("succubus", "demon.jpg", "Hah! Cosplay!");
			writeText("He hops down off the windowsill into your room, before turning around and showing off his little spade tail waving about.");
			writeSpeech("succubus", "demon.jpg", "Hehe. It's your lucky night too, human. I, the succubus (male), known as succubusF, have decided to make you an o-");
			writeSpeech("player", "", "Wait what? You're an incubus?");
			writeSpeech("succubus", "demon.jpg", "N-no, I'm a succubus (male). I'm here to-");
			writeSpeech("player", "", "You can't have my soul. I get that I'm mega-super fucking damned by now, but it's still-<br>Shit. Is all that stuff real? Am I going to hell?");
			writeSpeech("succubus", "demon.jpg", "Calm down. Listen. Don't worry about any of that.<br>This is going nowhere. I can see I'm going to need to be direct with you.");
			writeText("succubusF sighs, before in one fluid motion gets down on his knees in a begging position.");
			writeSpeech("succubus", "demon.jpg", "Please take me as your familiar, master!");
			writeSpeech("player", "", "... Excuse me?");
			writeSpeech("succubus", "demon.jpg", "Your heart is the darkest, most selfish I've ever seen! Like it's not tainted with lust, it's a big ball of lust with a little bit of humanity sprinkled inside. Just one fuck with you put me over the top and I had enough energy to meet my quotas and get promoted too. <br>Then I wasted it and dumped it onto the bedsheets, but I won't hold that against you. <br>My point is that not only are you some cream of the crop gourmet shit, but you're also a magnet for virgin energy, making you-");
			writeSpeech("player", "", "Now hold on a moment there-");
			writeSpeech("succubus", "demon.jpg", "Other virgins, you've got the potential to seduce virgins, I'm not saying you're one. Gimme a second dude. Lucy's sake, don't have a fucking crusade. <br>Anyways, I want it. You aren't using it all anyways, and I can help you out and... Give you some other incentives.");
			writeSpeech("player", "", "I don't understand. I thought incu- I mean succubi stole souls while you slept? I mean, I'm not super fresh with Christian mythology...");
			writeSpeech("succubus", "demon.jpg", "Well... It's a little complicated... But I'd never hurt anybody! I just siphon a little bit of corrupted soul off the top! You humans make more anyways, it isn't dangerous. ");
			writeText("You lean in to inspect the begging demon on your floor. His hair smells like the abstract concept of sinning, which is surprisingly close to chocolate.");
			writeSpeech("player", "", "So why would you need my help?");
			writeText("He looks up, his amber eyes meeting yours.");
			writeSpeech("succubus", "demon.jpg", "I'm just a succubus (male), one of the lowest ranks of demons. I'm barely making my dues to my superiors, I'm having a hard time staying afloat, let alone saving up to become a proper incubus!");
			writeText("He sits up to clasp your hands in his. He's very soft.");
			writeSpeech("succubus", "demon.jpg", "But with you, you're the most corruptive influence I've ever seen. Dark energy, the glorious essence that comes from corrupting humans... You're teeming with the stuff!");
			writeText("You lean back, deep in thought. On the one hand, he's cute. On the other, potential for eternal damnation. Well, you're probably damned anyways.");
			writeSpeech("player", "", "What's in it for me?");
			writeSpeech("succubus", "demon.jpg", "I'll reward you with my body! Well, that's a given, really, but more too! I haven't really been looking, but I'm sure I can find even more targets for you to corrupt, and with my help you can take them even farther!");
			writeFunction("writeEncounter('windowAcceptance')", "Accept");
			writeFunction("writeEncounter('windowRejection')", "Refuse, send this spawn of Satan packing");
			break;
		}
		case "windowAcceptance": {
			setTrust("succubus", 60);
			writeSpeech("player", "", "That sounds pretty tempting. So, I don't even need to do anything different?");
			writeSpeech("succubus", "demon.jpg", "Nope! Basically we demons feed off corrupted life force. We gather it ourselves or convert other people into demons and make them gather it for us.");
			writeSpeech("player", "", "Like a multi-level marketing scheme? I always knew those were from hell.");
			writeSpeech("succubus", "demon.jpg", "You don't know the half of it. Anyways, you're coated in the stuff already. I just gotta <i>extract</i> it.");
			writeSpeech("player", "", "Does it hurt?");
			writeSpeech("succubus", "demon.jpg", "Only if the demon sucks at giving a blowjob.");
			writeFunction("writeEncounter('windowFollowup')", "Let's get to it then");
			writeFunction("writeEncounter('windowRejection')", "Never mind, flock off hellspawn");
			break;
		}
		case "windowFollowup": {
			writeEvent('succubus1');
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "windowRejection": {
			writeSpeech("player", "", "No dice, spawn of Satan. This place is a home of purity, a bastion of chastity. No chocolate boi booty can tempt me.");
			writeSpeech("succubus", "demon.jpg", "... Are you serious?");
			writeSpeech("player", "", "About rejecting you, yes. Everything else was a cold lie.");
			writeSpeech("succubus", "demon.jpg", "Oh... Well, uh... I don't suppose you might change your mind?");
			writeSpeech("player", "", "Begone, demon. Out of this house!");
			writeText("You start drawing crosses in the air like you've seen on TV.");
			writeSpeech("succubus", "demon.jpg", "Gah! Stop, stop, I'm going!");
			writeText("He quickly hops out your window and begins flying away.");
			writeSpeech("succubus", "demon.jpg", "You 'deus vult' motherfuckers are all the same. Don't think I'll forgive you when you come crawling back, unless I <b>really</b> feel like accepting your apology!");
			writeText("You close the window and lock it shut.");
			setTrust('succubus', -1);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "caseSelect": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "tomgirlStart": {
			writeFunction("changeLocation('caseSelect')", "Back");
			break;
		}
		case "tomgirlEnd": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "tomgirlEarly": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "mejiStart": {
			writeFunction("changeLocation('caseSelect')", "Back");
			break;
		}
		case "mejiEnd": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "mejiEarly": {
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "succubusDisguise1", name: "Streetwalking"},
	{index: "succubusDisguise2", name: "Maid Whoring 1"},
	{index: "succubusDisguise3", name: "Maid Whoring 2"},
	{index: "succubus1", name: "Making Breakfast"},
	{index: "succubus2", name: "Succubus Milk"},
	{index: "succubus3", name: "Succubus Game"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "succubusDisguise1": {
			writeSpeech("player", "", "Not very good at setting the mood, are you?");
			writeSpeech("succubus", "", "Ugh, a talker.");
			writeText("He leans forwards and touches your hand. His skin is <i>soooof-</i>");
			writeText("You stumble, that was weird. The pink fuzz came back for a second. Now, with seemingly no warning, you've got a massive erection.");
			writeSpeech("succubus", "", "Damn, what the hell is going on? ");
			writeSpeech("player", "", "Alright, I'm getting some mixed signals here, this is getting fishy. What's-");
			writeText("Suddenly, he stands up and pulls you into a kiss, and the pink fuzz fills your brain again much more intensely this time.");
			writeText("Once he backs off you take a moment to focus and the fuzz fades. While you're fighting off whatever's going on, he pulls off his top and skirt, and relaxes on the bed.");
			if (data.player.gender == "Man") {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old man is resisting.");
			}
			else {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old hag is resisting.");
			}
			writeSpeech("player", "", "Excuse me?");
			writeSpeech("succubus", "", "God fucking Jes- what the hell!?");
			writeText("He falls forwards in surprise.");
			writeSpeech("player", "", "You know I can hear you right? Are you trying to drug me?");
			writeSpeech("succubus", "", "Uh... Fuck, uh, yeah! Yeah I was drugging you. Guess it didn't work, wow! You've got a really strong uh... Fuck, what's that thing you have?");
			writeSpeech("player", "", "What?");
			writeSpeech("succubus", "", "Stomach! Yeah, stomach! Wow, bet you really want to take your frustrations out on me now, haha!");
			writeSpeech("player", "", "Fuck, this was fishy after all.");
			writeText("You start to leave, this is almost definitely a trap. As you get moving, finally makes eye contact with you, shooting you his best bedroom eyes. If he seriously thinks that's going to be en-");
			writeBig("images/succubus/profileP.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aww, come on. Don't you want some of this? You know you <span style='color: #fc53f1'>can't resist</span>.");
			writeText("Something's wrong. Something's wrong. You need to keep repeating that to yourself because your body isn't listening. There's something in the air, it's relaxing and energizing you at the same time.");
			writeText("You half walk, half stumble over to the bed.");
			writeSpeech("player", "", "Can't... What's going-");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Shhhh.</span>");
			writeBig("images/succubus/1-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "eyes.jpg", "I'm <span style='color: #fc53f1'>really</span> sorry about how I've been acting. A real <span style='color: #fc53f1'>playerMan</span> like you deserves better, right?");
			writeText("You feel like the wind got knocked flat out of you as his tongue runs across you nipple.");
			writeBig("images/succubus/1-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Just close your eyes, I'll make you feel a lot better, okay? Don't worry about money, time, or even your life. Just sit tight and let me blow your mind.");
			writeBig("images/succubus/1-3.jpg", "Art by Gujira");
			writeText("He's got to have some kind off drugged lipstick or something, because the moment he wraps his lips around your nipple you feel like a live wire current is ripping through you.");
			writeBig("images/succubus/1-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aaaah~<br>You're really incredible playerMister.<br>And you're still hard too! I've changed my mind, I don't need anyone else, you're my new sex slave, okay?");
			writeSpeech("player", "", "Ghh...");
			writeSpeech("succubus", "", "And you're still resisting! I really stumbled onto a diamond, didn't I? Are you even human?<br>Ah, I'm really pent up, so this is risky... Fuck it, I'll take that gamble!");
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Come on, I can't wait any longer!");
			writeSpeech("player", "", "<i>Gotta fight... Can't let this little bitch... Beat me...</i>");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Fuck me!</span>");
			writeBig("images/succubus/1-6.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Ah, yes! God, I needed this!");
			writeSpeech("player", "", "<i>So... Good...</i>");
			writeSpeech("succubus", "", "Nghh, this is amazing~!<br>Fuck, ah! I can't keep going though, sorry! I'm going to need... Nfff... Need you to hurry up and...");
			writeSpeech("succubus", "eyes.jpg", "<b><span style='color: #fc53f1'>Cum!</span><b>");
			writeBig("images/succubus/1-7.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Yeessshh... That'sh the shtuff...");
			writeText("You feel the pink fuzz creeping into the corners of your mind again, as suddenly another sweeping wave of pleasure overtakes you.");
			writeSpeech("succubus", "", "More, give it all to me...");
			writeText("You cum again, even more powerfully than the last time, even though you've stopped thrusting.");
			writeText("He giggles gleefully as you start to feel woozy.");
			writeSpeech("player", "", "<i>Fuck... I'm starting to fade out... God damnit, this is not how I go!</i>");
			writeText("You fight through the haze and start thrusting again, fully intending to power through whatever's going on.");
			writeSpeech("succubus", "", "W-what? No, shtop, I-<br>Noooo~!");
			writeText("His ass suddenly tightens as his dicklette finally starts leaking small droplets of cum.");
			writeSpeech("succubus", "", "Nonono, please~! I can't... Aaaa~!");
			writeBig("images/succubus/1-8.jpg", "Art by Gujira");
			writeText("His eyes roll back in his head and his body starts shaking, suddenly his piddly droplets of cum turn into a constant leaking stream.");
			writeText("His grimace turns into a drunken smile and his tonge lolls out of his mouth as he defiles the sheets with his jizz.");
			writeBig("images/succubus/1-9.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Cumming~! I'm washting it all... But if feelsh sho gewd~!");
			writeText("Dimly, you're aware that your second orgasm never actually finished, you've been cumming non stop and your vision is starting to fade.");
			writeText("You collapse on top of him as he drunkenly giggles about how good he feels.");
			writeText("...");
			writeText("You surge awake, feeling awfully sore. After a quick check, you confirm you still have both kidneys, and it looks like he took the bedsheets with him.");
			writeSpeech("player", "", "What happened... What was I thinking? Did he have some kind of aphrodisiac perfume on him?");
			writeText("After a moment you feel back to normal, better than before in fact! It has gotten really late though.");
			break;
		}
		case "disguise2": {
			break;
		}
		case "disguise3": {
			break;
		}
		case "succubus1": {
			writeSpeech("player", "", "Let's get to it then.");
			writeSpeech("succubus", "demon.jpg", "That's the spirit! C'mon, dick out!");
			writeText("He cheers you on as you begin to disrobe.");
			writeSpeech("player", "", "You're a lot more enthusiastic than last time.");
			writeSpeech("succubus", "demon.jpg", "Well, let's just say most people take my street offer tend to be... Lowest common denominator types. Of course I'd be excited when I'm about to get some top-quality product waved in front of my face.<br>Ooh, speak of the devil...");
			writeBig("images/succubus/2-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Eheh... You sure you're all human?");
			writeSpeech("player", "", "You sure you aren't stalling? Is it too big for you?");
			writeSpeech("succubus", "demon.jpg", "Cocky bitch! <br>Alright, just try to stay conscious, alright?");
			writeBig("images/succubus/2-2.jpg", "Art by Gujira");
			writeSpeech("player", "", "Ggh~!");
			writeSpeech("succubus", "demon.jpg", "Mmm... *Mwah*!<br>My saliva is pretty strong, so we'll need to start slow for you to get used to it.");
			writeText("succubusF playfully kisses the tip before taking it into his mouth, soaking your cockhead in a potent aphrodisiac.");
			writeSpeech("succubus", "demon.jpg", "Mmm... Hurr hoing hreat! (You're doing great!)<br><i>Mmm, this really was worth it... I wanna tease him but...<br>Mmm! I can't hold back any longer!</i>");
			writeSpeech("player", "", "Cumming!");
			writeBig("images/succubus/2-3.jpg", "Art by Gujira");
			writeText("You sigh in relief as your needy cock finally pumps out it's pent up contents. You should be exhausted after your last marathon session, but your feeling of relief only feels more powerful.");
			writeBig("images/succubus/2-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Hah... Hah...");
			writeText("succubusF looks almost drunk as he catches your cum on his tongue.");
			writeSpeech("succubus", "demon.jpg", "How w... Was that?");
			writeSpeech("player", "", "It felt amazing. How many more loads do you need?");
			writeSpeech("succubus", "demon.jpg", "Y-you can go again?");
			writeSpeech("player", "", "Hell yeah I can. Hey, let's try going deeper this time...");
			writeText("...");
			writeText("The two of you go another few rounds, but surprisingly it's succubusF who stops you.");
			writeSpeech("succubus", "demon.jpg", "A-alright, we need to stop here!");
			writeSpeech("player", "", "Why? Oh, you mean move on? Yeah, you sucking just the tip is getting kinda boring.");
			writeSpeech("succubus", "demon.jpg", "Boring!? Why you...<br>No, this was to let you acclimate to my, uh, fluids. if we keep going your system might get overloaded. <br>So, does this mean you accept? Will you take me on as your familiar?");
			writeSpeech("player", "", "Sure. We can-");
			writeText("You try to stand, only for your legs to completely disobey you.");
			writeSpeech("succubus", "demon.jpg", "H-hey!<br>Ghh, heavy bastard... We should've stopped after the first round.");
			writeSpeech("player", "", "Uhuh... Why's the room spinning...?");
			writeSpeech("succubus", "demon.jpg", "Ugh, get some sleep. I'll come by tomorrow night, alright?");
			writeText("With some effort succubusF hauls you over to your bed and lays you down.");
			writeSpeech("succubus", "demon.jpg", "You did good tonight...<br>Good night, my new master.");
			break;
		}
		case "succubus2": {
			break;
		}
		case "succubus3": {
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
	{index: "placeholder", trust: 200,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
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
				if (encounterArray[i].altImage == undefined) {
					encounterArray[i].altImage == "";
				}
				if (encounterArray[i].altName == undefined) {
					encounterArray[i].altName == "";
				}
				if (encounterArray[i].location.includes(data.player.location)) { //check the location
					if (encounterArray[i].time.includes(data.player.time)) { //check the time
						if (encounterArray[i].trustMin <= checkTrust(character.index) && encounterArray[i].trustMax >= checkTrust(character.index)) { //check the trust requirements
							if (encounterArray[i].day == "even" && data.player.day%2 == 0) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].reqItem) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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