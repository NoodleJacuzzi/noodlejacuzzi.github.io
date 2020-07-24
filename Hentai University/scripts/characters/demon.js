var character = {index: "demon", fName: "Meph", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#9D5C3E", author: "NoodleJacuzzi", artist: "Gujira", textHistory: "", unreadText: false};

var logbook = {
	index: "demon", 
	desc: "A demon more than a few positions of authority above your familiar, he owns a seedy hotel in a bad part of the city where they whore out succubi (males) who have fallen into debt.",
	body: "He purposefully disguises himself as a girlish human, it's probably some kind of power play thing. Apparently his true form is pretty terrifying, so he hasn't stepped out of his human form for decades.",
	clothes: "After your little adventure helping your familiar make his monthly dues, he's developed what's known as a 'splurting' fetish in the demon community. Basically it means jerking off and wasting gathered energy for the sake of pleasure, the more you waste the better it feels.",
	home: "Your familiar has begun tormenting him by forcing him to become an exhibitionist in exchange for seeing you again.",
	tags: "Anal, tomgirl, boi-dom, mind-break, exhibitionism, public masturbation",
	artist: "Artist: Gujira",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "demon1", name: "demon is waiting for you tonight", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 2, trustMax: 2, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "demonShopping", name: "A familiar face is here", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "demonPaint", name: "A familiar face is here again", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 101, trustMax: 101, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "demonStart", name: "You should be able to find your way to demon's hotel from here.", location: 'streets', time: "MorningEvening", itemReq: "", trustMin: 102, trustMax: 102, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "demonQuo", name: "You should be able to find your way to demon's hotel from here.", location: 'streets', time: "MorningEvening", itemReq: "", trustMin: 103, trustMax: 104, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "intro1": {
			writeSpeech("player", "", "Alright, so I just need to play along and fuck some cute demon girl-");
			writeSpeech("succubus", "demon.jpg", "(male) ");
			writeSpeech("player", "", "-While you nab the stuff? ");
			writeSpeech("succubus", "demon.jpg", "Eeeeh yeah close enough. ");
			writeSpeech("player", "", "What about them? Won't they get punished? ");
			writeSpeech("succubus", "demon.jpg", "Listen to me. If there were anyone out there that deserved this, it'd be them. I may be 'cute chocolate booty' the personality but this is an actual 'sell my mother cause I get off on human suffering' demon.");
			writeSpeech("player", "", "I'll trust you on this one then. ");
			writeSpeech("succubus", "demon.jpg", "Thanks. We'll make it through this quick. And if you could keep up the lovable doofus thing, it'd really help. Okay, so lemme get out a map...");
			writeText("...");
			writeText("About an hour of walking later...");
			writeSpeech("player", "", "This is a crack den.");
			writeSpeech("succubus", "", "I fucking wish this was a crack den. The stuff they peddle here...<br>This is the place.");
			writeText("You come to a stop at a surprisingly well maintained hotel in the middle of a very bad neighborhood. The surrounding buildings are practically falling apart, but the hotel looks brand new.");
			writeSpeech("succubus", "", "Hey, believe in yourself. You got this, alright? I'll undersell you, you just need to deliver like you did with me.");
			writeSpeech("player", "", "Alright, now I'm starting to get worried.");
			writeSpeech("succubus", "", "Just go in and they'll give you a key. Wait in there and I'll do the talking in the lobby.");
			writeText("The two of you walk in to the hotel. succubusF and you part ways, and he heads into a room filled with the sounds of feminine giggles and... Growling?");
			writeText("You're given a room key by a pretty normal looking receptionist, it's up six floors and the elevator isn't working.");
			writeSpeech("player", "", "Fucking... Fucking demons.");
			writeText("...");
			writeText("You make it into the room, it's empty. Of course they'd make you wait. You take a seat on the bed and-");
			writeBig("images/demon/meph1.jpg");
			writeSpeech("demon", "", "Surprise fucker! ");
			writeSpeech("player", "", "JESUS!");
			writeSpeech("demon", "", "Is not here and cannot help you. So, you're the bigshot succubusF found? Kinda impressive, not too many good targets in the district near the university. Mostly just fembois and sluts.");
			writeSpeech("player", "", "Who the hell-<span style='color: pink'>Hello demonF, you look very cute today</span>.");
			writeSpeech("demon", "", "Thank you! My, you have a strong will. How did succubusF bag you? <br>Did he... Hah! Is he still forced to beg on the streets? I guess we don't let him keep enough energy to do anything cool.<br>Enough pussyfooting. Pants off.");
			writeSpeech("player", "", "If you think you can-<span style='color: pink'>Gladly</span>.");
			writeFunction("writeEncounter('intro2')", "Get undressed");
			break;
		}
		case "intro2": {
			writeEvent('demonIntro1');
			writeFunction("writeEncounter('intro3')", "Resist");
			break;
		}
		case "intro3": {
			writeEvent('demonIntro2');
			setTrust('demon', 1);
			writeFunction("writeEncounter('intro4')", "Sleep");
			break;
		}
		case "intro4": {
			writeText("You awaken to the sound of your phone buzzing. Some spam email, not important. You're back home in bed, and there's a little notecard on your head.");
			writeSpeech("succubus", "demon.jpg", "Get well soon! I maybe used some energy to speed up the process, try not to get into any more trouble, see you soon~ XOXOXO");
			writeText("There's a lipstick stain on the card. It'd probably be best to get on with your day now.");
			passTime();
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "demon1": {
			writeEvent('demon1');
			setTrust('demon', 100);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "demonShopping": {
			writeEvent("demonShopping");
			setTrust('demon', 101);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			
			break;
		}
		case "demonPaint": {
			writeEvent("demonPaint");
			setTrust('demon', 102);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "demonStart": {
			writeHTML(`
				t With how you last saw demonF, you wouldn't be surprised if he ended up in a jail cell since the last time you saw him. You decide to go check up on his hotel, and see how it's changed since your last visit.
				...
				t Not very much. The place looks almost identical, although there's a different demon boi here in the lobby.
				im images/demon/darkProfile.jpg
				sp Black-Haired Succubus; im images/demon/dark.jpg; Oh, why hello there. Are you here for business, or for pleasure? We aren't taking new customers at the moment, but if you're just browsing I can introduce you to some very antsy-
				sp player; I'm here to speak with demonF, is he here?
				t His seductive gaze completely falters.
				sp Black-Haired Succubus; im images/demon/dark.jpg; The master? Oh my, I'm terribly sorry to waste your time.
				t He steps out from behind the desk, his sandals clacking against the floor. 
				sp Black-Haired Succubus; im images/demon/dark.jpg; The master is in his suite. Here, I'll guide you.
				t He leads you to the elevator. With a wave of his hand the doors slide open.
				...
				t The ride is silent and awkward. In such a cramped space you can clearly smell something like perfume, your guide smells kinda like raw, concentrated desperation, which happens to smell like citrus.
				t The elevator comes to a stop at the top floor before you can break the ice.
				sp Black-Haired Succubus; im images/demon/dark.jpg; He's just a few doors down, it's the one with the golden marker.
				sp player; Thanks, take care.
				t He bows, despite his best efforts he seems nervous about something.
				t Pressing on, you head into demonF's room.
				...
				t You give a knock on the large, gaudy door. It's opened almost immediately. The smell of sex flows over you like a wave, it's enough to make your head spin.
				sp demon; Ooh~! I knew it was you! I've been waiting for days! You must've been really excited by my little text, hmm? I've got the perfect thing right in here... Somewhere... Don't mind the mess.
				t He walks back into his room. The place is a wreck, the room is coated in the familiar scent of demon jizz and saliva. 
				sp player; I didn't get any, I was coming to see if you'd been arrested yet.
				sp demon; Wha? Did your little bat not pass it along to you? I must've sent you hundreds of... Here!
				t He throws aside a wooden paddle and pulls out a wig of red hair, thankfully saved from being coated like other areas of the room.
				sp player; Christ, what happened here?
				sp demon; Do you like it? Before I got bored and started cumming in public, I had some fun with just about anything I could find. Buttplugs, dildos, my bedpost, chastity cages weren't any fun though since I don't care about cumming with my dick. Here!
				t He tosses you the wig.
				sp demon; You didn't play with me before since you were scared of being arrested, yeah? This is really strong. A cop could be slapping cuffs on you and they'd forget you before the locks even go click. We could do anything, anywhere, and there wouldn't be a single consequence in the world for you. Now we can play all we want!
				t You put on the wig, nothing happens. Out of the corner of your eye you see a standing mirror. In the areas not coated with demonF's wasted jizz, you see an unfamiliar face staring back at you.
				sp player; And what about you? 
				sp demon; Well, that's up to you, isn't it? Knowing you could just leave me anywhere...
				t His eyes go manic for a second and he actually shivers as his imagination runs wild. Clearly exerting some self control he does his best to keep trying to keep focused on the negotiation. 
				sp demon; You can take it with you. Lately I've been having some security issues with some of the fun toys I've collected over the years. Your familiar wouldn't happen to know anything about that, would he? <br>Well, whatever. The point is it needs a demon's touch to work. So, what do you say? Take a cute girl out on the town, we could have some f... Fun... We'd feel really good together... 
				t It's clear at this point his cracks are starting to show as he takes a few steps forward towards you. He's no longer able to conceal the manic greed in his eyes. His negotiation skills are seriously deteriorating like your presence is like you're waving a hit in front of an addict. 
				t As he gets closer you push him down like you would a dog to get some breathing room, he rubs his face against your palm and with his bow-legged sitting position her's humping the ground as he breaths in your scent. 
				sp demon; Ngggh~! Cmon~! I haven't cum yet today~! Well, aside from when I thought about where you'd take me~!
				sp player; Come on, get a hold of yourself. What would your employees think if they saw you right now?
				t His breathing and thrusting grow more erratic, until you hear him whimper into your hand. He's off in his own little world as his thrusts start to slow down and he's more slowly grinding his crotch into the floor than humping. There's a subtle smell about him now.
				sp player; Did... Did you just cum from that? 
				sp demon; Ehe... Ehehe... 
				t He gently lays backwards, content to lie on the floor with a starstruck expression on his face. No longer able to keep up with you in conversation.
				t With an extra hit of demon jizz fueling the smell of many, many shamegasms in the room, you stumble out. Dating a fap-junkie femboi could be fun, although you get the impression that demonF isn't really after capturing a romantic relationship. 
				t If you want to, you could come back sometime and see what kind of events demonF has planned for the two of you.
			`);
			passTime();
			raiseTrust('demon', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "demonQuo": {
			switch (checkTrust('demon')) {
				case 103:
					writeHTML(`
						t You arrive at the hotel. At the receptionist's desk is the same black-haired girl as before, but this time his hair is matted down in a thin layer of sweat.
						sp player; I'm here to see demonF.<br>... You alright? It's not that hot.
						sp Black-Haired Succubus; im images/demon/dark.jpg; Of course sir, I'm fine. Lately the master hasn't requested us to bring in any customers. We have a lot of girls who are free right now, but I need to keep up my duties.
						t She sighs whistfully at the word "free".
						sp player; <i>That's probably from when I first broke demonF... </i><br>Can't you just leave? 
						sp Black-Haired Succubus; im images/demon/dark.jpg; Err, I'm afraid we're on different pages here, *sir. That's not the sort of freedom I'm talking about... 
						t She guides you into the elevator, and presses the button.
						sp Black-Haired Succubus; im images/demon/dark.jpg; A-aplogies *sir, but I'm not quite in the best state to ride up with you.. Please be careful not to wander. Since the master hasn't seemed interested in hosting customers for the hotel lately. Most of the girls here are feeling... Antsy. 
						t You just nod and step in. As the elevator doors close behind you, you catch a glimpse of the facade fading from your guide. Their expression transforming into one of lustful desperation as their hands go to their crotch to move their kimono out of the way. Just before the doors shut completely, you see something pink and plastic between your guide's legs. 
						...
						t Before you even make it to demonF's room, he opens the door and rushes out to greet you already fully dressed for a night out.
						sp demon; You have the wig, right? Cmon~! I've got some ideas for our date!
						t He's pretty presumptive. Still, he has a few suggestions that actually seem pretty appealing.
					`);
					raiseTrust('demon', 1);
				break;
				case 104:
					writeHTML(`
						t You arrive at the hotel. At the receptionist's desk is the same black-haired girl as before. She's laying down, sleeping. The elevator door is already open so you head inside.
						...
						t Before you even make it to demonF's room, he opens the door and rushes out to greet you already fully dressed for a night out.
						sp demon; You have the wig, right? Cmon~! I've got some ideas for our date!
						t He's pretty presumptive. Still, he has a few suggestions that actually seem pretty appealing.
					`);
				break;
				case 105:
					writeHTML(`
						t You arrive at the hotel. The receptionist isn't at her desk, the entire lobby is empty. There's a strange sound coming from nearly every wall, but it'd be a bad idea to wander around right now.
						...
						t Before you even make it to demonF's room, he opens the door and rushes out to greet you already fully dressed for a night out.
						sp demon; You have the wig, right? Cmon~! I've got some ideas for our date!
						t He's pretty presumptive. Still, he has a few suggestions that actually seem pretty appealing.
					`);
				break;
			}
			writeFunction("writeEncounter('dateAqua')", "Go on a date to the local aquarium");
			writeFunction("writeEncounter('dateForest')", "Go for a walk in the forest");
			break;
		}
		case "dateAqua": {
			writeEvent("demonAqua");
			passTime();
			if (checkFlag('demon', 'aqua') != true) {
				addFlag('demon', 'aqua');
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "dateForest": {
			writeEvent("demonForest");
			passTime();
			if (checkFlag('demon', 'forest') != true) {
				addFlag('demon', 'forest');
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "dateReceptionist": {
			writeHtml(`
				sp player; Actually, we need to talk. What's going on around here? Your receptionist looked like she was wearing a chastity cage.
				sp demon; Hmm? Oh, him? Why, are you worried?
				sp player; You said you'd be treating your staff better, right?
				sp demon; Aww, cmon. You didn't really mean that, right? You shouldn't assume all succubi are like your familiar.
			`);
			setTrust('demon', 104);
			addFlag('demon', 'receptionist');
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "demonIntro1", name: "Inferno Part 1"},
	{index: "demonIntro2", name: "Inferno Part 2"},
	{index: "demon1", name: "First Circle - Limbo"},
	{index: "demonShopping", name: "Second Circle - Lust"},
	{index: "demonPaint", name: "Third Circle - Gluttony"},
	{index: "demonAqua", name: "Fourth Circle - Greed"},
	{index: "demonForest", name: "Fifth Circle - Pride"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "demonIntro1": {
			writeBig("images/demon/meph2.jpg");
			writeSpeech("demon", "", "Aaah~ He wasn't exaggerating, it does have quite a manly scent. Tell me, how does it feel being whored out?");
			writeSpeech("player", "", "If you think I'm gonna-");
			writeBig("images/demon/meph3.jpg");
			writeSpeech("player", "", "Aaaah~!");
			writeSpeech("demon", "", "Mmmph...");
			writeText("Your heartbeat skyrockets as demonF's mouth envelops your cockhead, the usual effects of demon saliva at work.");
			writeBig("images/demon/meph4.jpg");
			writeSpeech("demon", "", "*Mwah*! Oh my, no cum yet? Oh, succubusF must have conditioned you. How fun, I get to break his toy~!");
			writeSpeech("player", "", "Can't... Can-");
			writeSpeech("demon", "", "Onto the bed, maggot. ");
			writeSpeech("player", "", "<span style='color: pink'>Gladly</span>.");
			writeSpeech("demon", "", "You know, I quite enjoy this body. I don't understand why all the bottom rungs despise it so. I mean, I do have godlike power, maybe that helps?");
			writeBig("images/demon/meph5.jpg");
			writeSpeech("demon", "", "Aah~ It feels good to topple someone larger than me. It's addictive, honestly. All those broken succubi at my feet, I can certainly see why lesser beings like them might become addicted to wasting their futures away.");
			writeSpeech("player", "", "You'll eat those words... Just you wait, I'll break-");
			writeSpeech("demon", "", "Enough talkies. Thrust please!");
			writeBig("images/demon/meph6.jpg");
			writeSpeech("player", "", "Fuuuck~!");
			writeSpeech("demon", "", "Glorious! You're a rare specimen, for a human I mean. I wanted you to cum straight away, I can see why succubusF spoke so highly of you. Still, even a rare bug is just a bug.");
			writeSpeech("player", "", "I'll... I'll...");
			writeSpeech("demon", "", "You'll what, bug?");
			writeBig("images/demon/meph7.jpg");
			writeSpeech("demon", "", "Aww, how precious. I'll admit it feels good though, I'll give you a gold star for effort. Go on then, cum!");
			writeBig("images/demon/meph8.jpg");
			writeSpeech("player", "", "Fuck... You!");
			writeSpeech("demon", "", "Hah~ I said... Mmm~ I said <span style='color: pink'>CUM</span>!");
			writeBig("images/demon/meph9.jpg");
			writeSpeech("demon", "", "See? Aren't things so much-<br>...!");
			writeText("He freezes up for a moment, his smug smile stuck like he's become a statue.");
			writeSpeech("demon", "", "I... Oooh~");
			writeText("At a loss for words for a moment, he just basks in a pleasant fuzz for a moment. But he comes out of it all too soon.");
			writeText("He slides himself off your dick.");
			writeBig("images/demon/meph11.jpg");
			writeSpeech("demon", "", "What was... I see...");
			writeBig("images/demon/meph12.jpg");
			writeSpeech("demon", "", "You really are something beautiful. I can't understand why succubusF kept you to himself. Turning you in could have easily earned him the rank of Incubus or above, unless...<br>No, did that sappy, pathetic little ball of sunburnt scum actually fall in love? With <i>you</i>? Oh, that's pure gold~! I'll give him some energy alright, but I don't think I'll be letting you leave. You're a diamond, you deserve a ring. A lovely unbreakable cockring.");
			writeSpeech("player", "", "Ghh... Fuc... k... You...");
			writeSpeech("demon", "", "Ah, hey. Down, *boy. I'm in control here, you and I will have plenty of time to play later.");
			break;
		}
		case "demonIntro2": {
			writeSpeech("player", "", "I'll... I'LL-<span style='color: pink'>gladly obey</span>.");
			writeSpeech("demon", "", "Hmph, good. I thought you were overpowering the control for a second. Now, carry me out, I don't feel like walking. Good, good.<br>Stop. Why are you putting me back down? ");
			writeSpeech("player", "", "<span style='color: pink'>Surprise, fucker.</span>.");
			writeText("...");
			writeBig("images/demon/meph13.jpg");
			writeSpeech("demon", "", "Khh... Khh~");
			writeSpeech("player", "", "No more bitchy screeching, no more taunts, not even words. Cock got your tongue?");
			writeBig("images/demon/meph14.jpg");
			writeSpeech("demon", "", "Guuh~ Stop~! No more~! I can't... Can't hold on~!");
			writeSpeech("player", "", "Then cum! Admit you've been defeated and spray your bitch-jizz onto the sheets!");
			writeSpeech("demon", "", "Nooo~! Do... Ghfffuuck~ Do you have any idea what you're doing? I'm not some pathetic succubus like-");
			writeText("You interrupt him with a good hard round of pounding. He tightens around you when your hips smack against his asscheeks, another of his weak points. Not quite as weak as is prostate is at this point. You can feel it twitching along with the rest of his body whenever you bump into the bitch-button.");
			writeBig("images/demon/meph16.jpg");
			writeSpeech("demon", "", "Shho... Shooo good~");
			writeSpeech("player", "", "Finally! Make like the slut you are... And... <b>CUM!</b>");
			writeBig("images/demon/meph17.jpg");
			writeText("Tears run down his face as his body quakes. It starts small, about as much as you would expect a boi like him to cum. A few drops, then a small stream, but it doesn't stop.");
			writeText("The things coming out of his mouth don't make sense as words anymore. Partially muffled by the pillow his eyes roll back as he keeps cumming. Each extra thrust into him causes his dicklette to swing and the stream to grow a little stronger.");
			writeSpeech("player", "", "Ten seconds, holy fuck.");
			writeText("Pink electricity sparks around his head before it grows stronger. Lightning arcs about on the ceiling above you, and the lights flicker.");
			writeText("Still cumming.");
			writeSpeech("player", "", "How much-");
			writeSpeech("succubus", "demon.jpg", "Who knows, years? Decades?");
			writeText("Still cumming.");
			writeSpeech("player", "", "succubusF!");
			writeSpeech("succubus", "demon.jpg", "It's a big downside that we still have human brain chemistry. It really wasn't designed for this. There's no way he won't end up with a splurting fetish after this, if he can even manage not to wind up a vegetable.");
			writeText("succubusF leans down to try and lock eyes with demonF. Not too easy when they're rolled so far back.");
			writeText("Still cumming. A lightbulb explodes in a nearby lamp. A little zap hits you, it's surprisingly pleasant. ");
			writeSpeech("succubus", "demon.jpg", "Who's useless garbage now? Surprise, fucker.");
			writeSpeech("player", "", "I already said that. I turned the tide on him and dropped that bomb.");
			writeText("Still cumming.");
			writeSpeech("succubus", "demon.jpg", "What? Aww man, you stole the best line.");
			writeText("You give one last thrust for good measure into demonF's boyhole. It seems like that triggers something, because he begins flailing and squealing again all over.");
			writeSpeech("demon", "", "Gheee~~!!!");
			writeText("succubusF takes out a small vial to collect a bit of fluid from the demon cum-fountain.");
			writeSpeech("succubus", "demon.jpg", "This should be enough. Sicko likes the feeling of staying near full, of <i>fermenting</i>, so no idea what this stuff would do to a low level demon like me.");
			writeSpeech("player", "", "Will he be alright?");
			writeSpeech("succubus", "demon.jpg", "Nope! Absolutely zero percent chance of him being able to maintain any respect. Plus I'd imagine he'll spend the rest of eternity chasing this high again. Demons don't tend to rise up the ranks anymore when all they wanna do is cum away whatever they steal. Oh! I nabbed some sweet demon artifacts too, let's get going.");
			writeText("...");
			writeText("The two of you leave. There's a frenzy of fembois rushing past towards the room you left. You can hear demonF start squealing again.");
			writeSpeech("succubus", "demon.jpg", "Head down, don't draw attention. They're whorehouse piranhas, kept in demonF's debt forever. Now it's a feeding frenzy, everyone wants to make the next rank, even if they need to suck it out of the bedsheets. And best-");
			writeText("You stumble and nearly fall over, the chemical effect of demonF's fluids wearing off.");
			writeSpeech("player", "", "Fuck, I can't...");
			writeSpeech("succubus", "demon.jpg", "Hey, hey, it's cool. I'll get you home and tuck you in, collection's still a ways away. You did good, *Master. You did really really good today.");
			writeSpeech("player", "", "He... Said...");
			writeSpeech("succubus", "demon.jpg", "Ignore whatever demonF said, he's a psycho. More importantly he's not a problem anymore. Twenty succubi (male) on his tiny dick? He'll regret making himself trappy and frail to lord himself over all the rest of us here at the bottom of the ladder. You sleep, okay? Sleeeep.");
			writeText("...");
			break;
		}
		case "demon1": {
			writeText("You wander outside your apartment complex for a few minutes searching for where succubusF told demonF to wait. Eventually you can hear a domineering voice talking on the phone from behind a nearby vending machine.");
			writeSpeech("demon", "", "Now you listen here, bitch, I don't need to ask a hellbound receptionist permission before I take out whatever I want from my vault. If I wanna take out a year's worth of energy to use it as I please, I'll do it as I please. <br>And if I wanted to take out a decade's worth, you still wouldn't have a god damn leg to stand on. Track what I take, that's your fucking j-");
			writeText("It certainly sounds like an important conversation, but more importantly it's a very familiar voice.");
			writeSpeech("player", "", "You certainly sound busy.");
			writeText("You hear demonF give a yelp, before he hangs up and uncaringly throws his phone across the pavement as you walk forwards to get a good look at him.");
			writeSpeech("player", "", "Oh my.");
			writeBig("images/demon/1-1.jpg");
			writeSpeech("demon", "", "You're here~! You're here, you're here~! I'm not busy, promise, I'll throw my phone farther if you like to prove it~!");
			writeText("He's beaming excitedly, tiny dick standing fully erect and ready.");
			writeSpeech("player", "", "How the mighty have fallen. From running a demon empire to being huddled naked on the street begging for dick. How come you don't just use your powers to get what you want?");
			writeSpeech("demon", "", "Ah~! Fuck, you'll make me splurt just like that, you're so mean~! I need a lot of energy to do stuff like that, but I can't hold onto that much anymore. Anytime I build up a lot...");
			writeSpeech("player", "", "You can't hold back from jerking off?");
			writeSpeech("demon", "", "Yes~! I even tried to wear a chastity cage, but the thought of my worthless self contained in a tiny shell of plastic, I started splurting totally hands-free~!");
			writeBig("images/demon/1-2.jpg");
			writeSpeech("demon", "", "Ah~! Pictures, pictures~! Will you use them to jerk off? Will you send me pictures of your cock as you jerk off with them? I'll cum just from looking at them, I promise~!");
			writeSpeech("player", "", "I didn't come here just to get some jerk off fuel.");
			writeSpeech("demon", "", "Yes~! Of course, please, would you like to use my mouth? I'd sure I could have a hands-free bitchgasm from sucking your cock. Oh, or maybe I could rub my pathetic member against yours, and-");
			writeSpeech("player", "", "Hands on the machine and present yourself.");
			writeSpeech("demon", "", "Yes *sir~! C-can I call you *Master like your little bitch does?");
			writeSpeech("player", "", "You don't get to talk about someone better than you that way!");
			writeBig("images/demon/1-3.jpg");
			writeSpeech("demon", "", "Ooough~! It's here~! The cock I need is here~! I'm sorry, please punish me~!");
			writeText("With just the tip inserted into his needy asshole, he's already gleefully purring. You'll need to enjoy yourself quickly or else the whole neighborhood will wake up.");
			writeSpeech("player", "", "How in the hell is this punishment? This is exactly what you wanted, you're getting pounded like the bitch you are.");
			writeSpeech("demon", "", "Yes~! Please, I haven't cum since this morning~! I jerked myself off onto the floor, I had to lick it up otherwise one of my cleaners would get suspicious~!");
			writeSpeech("player", "", "Shut up, or I'll stop fucking you.");
			writeBig("images/demon/1-4.jpg");
			writeText("He goes silent, a look of fear across his face at the thought of losing out on the dick he so desperately needs.");
			writeSpeech("player", "", "You're subhuman trash that preys upon other demons, how low can you get? Your high and mighty position is a thing of the past, by the time I'm done with you you'll be gutter trash, inside and out, a sleeve for my dick.");
			writeText("He nods emphatically as his cock flops back and forth with each of your thrusts.");
			writeBig("images/demon/1-5.jpg");
			writeText("You cum powerfully, hosing his rectum with jizz. He holds back a screech through gritted teeth as his dicklette wobbles and jerks, spraying out his now-worthless cum onto the ground and the machine.");
			writeText("He's still doing his best to be silent, hoping you'll pound his ass again, but once you pull out he's back to his bratty yet masochistic attitude.");
			writeBig("images/demon/1-6.jpg");
			writeSpeech("demon", "", "More~<br>This is all I'm good for, more~!");
			writeSpeech("player", "", "You don't get to decide when you get fucked. You made a mess on the machine, clean it up.");
			writeText("He bends further down while purring at your abusive treatment. He grasps his tiny cock between his thumb and index finger and starts trying to jerk himself off while slowly licking his mess off the vending machine.");
			writeSpeech("player", "", "Trash.");
			writeSpeech("demon", "", "Oh, but I'm a thousand times worse, I'm lower than garbage! I'd shove one of these cans of disgusting human drink up my ass if it'd please you~!");
			writeSpeech("player", "", "If you wanna get fucked like this again, I expect to hear that the conditions of the demons working under you has improved. Maybe you should be the one cleaning them off after a hard day's work?");
			writeSpeech("demon", "", "Ooh~ I'd have a line of them, freshly creampied, each ready to have me rim them clean... I'd cum from the humiliation, and they'd all see it plain and clear...");
			writeText("He's lost in his fantasy, mumbling to himself between licks of the machine's surface while erratically jerking his tiny cock until he starts squirting onto the street again.");
			writeText("With how far gone he is, he'll probably be at your beck and call from now on.");
			break;
		}
		case "demonShopping": {
			writeText("Across an isle you spot a familiar face. Demons don't need food, so you're confused for a second as to why he's here...");
			writeBig("images/demon/demonShopping1.jpg", "Art by Gujira 4 Gou");
			writeSpeech("player", "", "<i>There's no way... I'll approach him, he shouldn't be doing anything too crazy. </i><br>Well, fancy seeing you around town.");
			writeSpeech("demon", "", "Oh! Nnn, hey~!");
			writeText("His face is flush and his breathing is labored.");
			writeSpeech("player", "", "Developed an exhibitionism fetish, huh? Careful it doesn't get you into trouble. Got anything on at all under there?");
			writeBig("images/demon/demonShopping2.jpg", "Art by Gujira 4 Gou");
			writeSpeech("demon", "", "Nnnothing at all~!");
			writeText("You do your best not to stumble back in surprise, trying not to draw attention to yourself or to demonF.");
			writeSpeech("player", "", "What the hell are you thinking?");
			writeSpeech("demon", "", "Hehe, what's the matter? Too... Too much of a show for you? How about if I... Ghhff, I can't take it anymore~!");
			writeText("You hear a click and purple electricity sparks in the air. After a moment you can see a purple bead vibrator begin to shake between his legs.");
			writeBig("images/demon/demonShopping3.jpg", "Art by Gujira 4 Gou");
			writeSpeech("demon", "", "Ghhhhg~!");
			writeText("He grits his teeth as his eyes roll back in his head. You take a few steps back, not wanting to been seen in public with-");
			writeBig("images/demon/demonShopping4.jpg", "Art by Gujira 4 Gou");
			writeSpeech("demon", "", "Aaaah fuck~! Cumming~! My little wimp-stick is leaking onto the floor~!");
			writeText("You don't stick around for the fallout. You'll have to catch up with demonF another time.");
			writeText("...");
			writeText("You didn't see him leave the store, although more than a few people saw him. One of them even called the police.");
			writeText("He'd need to be pretty fucked up in the head to show his face in public again, especially around here.");
			break;
		}
		case "demonPaint": {
			writeBig("images/demon/demonPaint1.jpg", "Art by Gujira 4 Gou");
			writeSpeech("player", "", "No way... No fucking way...");
			writeText("You aren't stupid enough to approach him again, especially given what he's wearing. Or what he isn't wearing. You pick a spot to watch him through the store's window.");
			writeBig("images/demon/demonPaint2.jpg", "Art by Gujira 4 Gou");
			writeText("He's here again, and he's taken his fetish even farther. His clothes are painted on this time, and are badly streaking.");
			writeSpeech("player", "", "How the hell is nobody notici-");
			writeBig("images/demon/demonPaint3.jpg", "Art by Gujira 4 Gou");
			writeSpeech("player", "", "Ah. That makes sense.");
			writeText("The cashier continues like nothing's unusual, even as demonF is noticed by other people in the store. With so many eyes watching him, he starts to shake.");
			writeBig("images/demon/demonPaint4.jpg", "Art by Gujira 4 Gou");
			writeText("Unfortunately if he cums he'll be out of luck. No demonic powers to hide his nudity.");
			writeBig("images/demon/demonPaint5.jpg", "Art by Gujira 4 Gou");
			writeText("Not that it matters. A thin line of cum drips down his painted thigh. You can't hear what the cashier is saying, but it's clear that she's confused. demonF just starts drunkenly laughing before he turns around and starts walking away from the counter, still spurting onto the floor all the while.");
			writeBig("images/demon/demonPaint6.jpg", "Art by Gujira 4 Gou");
			writeText("Nearly everyone in the store has noticed at this point. He looks around as his cum haze ends, probably reveling in the depravity.");
			writeBig("images/demon/demonPaint7.jpg", "Art by Gujira 4 Gou");
			writeText("Then he spots you.");
			writeText("He looks about ready to call you out by name, you need to get out of here. He's a powerful demon, he should be able to get himself out of this mess.");
			break;
		}
		case "demonAqua": {
			writeHTML(`
				t You decided to go on a date to the local aquarium.
				...
				t The cute fish swimming by actually do give the place a relaxing atmosphere. The feeling is almost nostalgic. The only thing ruining it is every few minutes you spend admiring the fish, you're interrupted.
				im images/demon/aqua1.jpg
				sp demon; So many people around, wouldn't it be hot if we just started fucking right here?
				sp player; And what exactly do we do about the crowd?
				sp demon; They all get a free show to you pounding the shit out of my bitch-button. Maybe it awakens something in them, I don't give a fuck and you shouldn't either. <br>Your mother could stare you right in the face and she wouldn't recognize you, so stop thinking like a pussy and make with the dicking.
				t His tone is gradually rising, it's clear only one thing will satisfy him. Still, even with a magic wig, years of paranoia about getting caught hypnotizing people don't just vanish because some boi is being sassy at you. Not quite willing to traumatize the crowd here, you think quickly about how to shut him up for a minute.
				im images/demon/aqua2.jpg
				t You push your hand down his shorts, groping and feeling around.
				sp demon; Eh? Finally starting to-
				sp player; Quiet, or this is all you're ever getting.
				sp demon; So mean~<br>Fine, I'll whisper, just thrust deeper.<br>Fuck's sake, anal is so much more fun than cumming with my dick, it's really not fair...
				t Despite his earlier sass he does start to quiet down, his taunting stops and the most he pipes up is a deep satisfied sigh when your fingers bump into a small spongey mass a few inches into his ass.
				t As you keep rubbing his prostate, his sighs grow louder and closer together. Luckily a friendly dolphin swims by, so that his "Aaaah~" is mixed in with a chorus of "Ooooh"s.
				im images/demon/aqua3.jpg
				t Out of the corner of your eye you can see a dark spot form on the front of his short shorts, but from the look in his eye it's clear he isn't satisfied yet.
				t Soon the crowd around you is moving to follow the excited sea life, while you and demonF are staying behind.
				...
				im images/demon/aqua5.jpg
				sp demon; Come on, hurry up~! You're just gonna tease your date? Fuck that~!
				sp player; God damn you are insatiable.
				sp demon; Yeah yeah, life's a sassy, fat-bottomed bitch. Fuck me. Right. Now.
				t You have no idea how this boi, bent over against the glass wagging his ass like a bitch in heat has taken a dominant position here, but you don't intend to let him keep it. 
				im images/demon/aqua6.jpg
				sp demon; Oooh~<br>That's it, that's what the dildo can't match...
				t Just sliding your cock into the little brat has your vision start to swim a little. Little Ms. Anal Whore here might have shattered his bravado on your cock, but he's still got an ass that won't quit.
				sp demon; G-good *boy, thrust deeper...<br>Give my greedy hole the relief it needs, make me spurt like one of your common bitches~
				sp player; You... Hrg... Are a common bitch, demonF...
				sp demon; Some bite~! But I can hear from your voice you're barely holding on~!<br>Stop thinking, just turn off your brain and beat my ass into the ground, show my whimpy little nutsack how a <i>real</i> cock-
				im images/demon/aqua7.jpg
				t His voice and attitude are smashed flat as you become a primal, thrusting mess, but more importantly is when he can feel the first shot of the cum you intend to paint his asshole white with.
				im images/demon/aqua8.jpg
				sp demon; GHHH~! GHHHHHUMMMIN'~!
				t If he were still wearing shorts they'd be soaked through right now. The only thing on his mind is total bliss. If he's still aware of where the two of you are, it's only making him cum harder. His volume control has shut off completely.
				t As you fire off your last shot of cum you pull out, lest his incredible ass milk you completely dry.
				im images/demon/aqua9.jpg
				t Even as you can hear shouts and realize you've been noticed, he's still panting like a bitch in heat and leaking from his cocklette.
				t While you're safe from consequences thanks to your wig, he isn't. Thinking quickly, you zip up and pick up the barely lucid boi like you would a big bag of flour.
				...
				sp player; Jesus, you're still out of it?
				sp demon; Ehehe, cumming feelsh gewd~
				t Even as you were carrying him to safety once his post-orgasmic haze mostly wore off, he just used the opportunity to start jerking off while rubbing against you however he could.
				sp player; Honestly demonF, you're gonna get into serious trouble one of these days. What'll you do then?
				sp demon; Cum~! I'll cum lotsh and lotsh~!
				t You just sigh. Now that you're out of trouble you can just set him down somewhere secluded. 
			`);
			break;
		}
		case "demonForest": {
			writeHTML(`
				t You decided to for a walk in the forest. It seems a bit tame for his usual antics, but demonF is excited nonetheless.
				...
				sp demon; I-it's quite dark this deep in the forest, quite cold too.
				sp player; Really? Feels fine to me.
				im images/demon/forest1.jpg
				sp demon; W-well maybe that's because you have more clothes than me. Maybe we should huddle together to war-
				sp player; demonF, you're drenched in sweat.
				im images/demon/forest2.jpg
				sp demon; Fiiiine. Honestly, how are your predator instincts not kicking in? A cutie like me, so defenseless. 
				t He pouts, but his true intentions are clear from his body language. At this point he's broken enough that he treats his dick like a tail to be wagged when happy.
				t You're enjoying stringing him along, but each time you inhale you catch a whiff of the smell of his sweat. It's... Sweet. Not chocolate sin like succubusF, more like honey. Just focusing on the smell makes your legs feel wobbly.
				sp demon; You're sweating yourself you know. The walk too much for little old you?
				sp player; Please... I could do this all night...
				t But he's actually pretty on the mark. You can't keep walking much longer. Not from exhaustion, but because of the opposite instead.
				...
				im images/demon/forest3.jpg
				sp demon; Raaape~! The b-ggggh~! The big scary man's pounding my bitch button~!
				sp player; Shut up!
				sp demon; Ooough~! If you want me quiet, stop rewarding me for screaming~! Balls deep, that's what it'll take!
				t He announces every word loud enough it feels like the entire forest can hear him. He must've chosen this location so he could scream his lungs out without holding back.
				t So you pick up the pace and force his voice to go up an octave or two. Being exposed to the scent of raw, concentrated sexual perfection for so long, it's no wonder you're turning into a sexual beast right now.
				sp demon; Give up! Pump that wonderful jizz into me, and do it fast or I'll make your precious succubusF suck it out of me while I suck-<br>OOOOUGH~!
				im images/demon/forest4.jpg
				t You're a primal mess of a blur right now, taking out your frustrations on what is essential a stress toy and an onahole in the shape of a squealing brat.
				im images/demon/forest5.jpg
				sp demon; Oh, oh I feel it~ It's cumming~!
				im images/demon/forest6.jpg
				t As you start to come back to reality he's already leaving it. Cum drools down his thighs and wasted jizz leaks from his cock. His eyes squint shut and open again as his pupils dilate, and any attempts at further screaming are just soundless gasps of a bitch drowning in pleasure.
				t You stumble back as his body is still being wracked with aftershocks, cum is leaking from his less-than-modest dick in a solid clear stream. He twitches and breathes erratically, only able to communicate one thing; You'll need to carry him out of the woods.
				...
				t Luckily the forest is surrounded on all sides by civilization. As your reputation is protected by the wig and his reputation isn't worth shit, you make your way back to his hotel without incident, even if you get a lot of shocked looks along the way.
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
	if (data.player.location == "gallery") {
		writeFunction("changeLocation(data.player.location)", "Finish");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	//{index: "demonNewReward", trust: 102,},
	{index: "demonReward", requirements: "?flag demon aqua; ?flag demon forest;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "demonReward": {
			writePhoneImage("images/demon/reward.jpg", "Art by Gujira");
			writePhoneSpeech("demon", "", "You've finished all of demonF's content for this version, more is on the way!");
			break;
		}
		case "demonNewReward": {
			writePhoneImage("images/demon/reward.jpg", "Art by Gujira");
			writePhoneSpeech("demon", "", "You've finished all of demonF's content for this version, more is on the way!");
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
		//writeSpecial(character.fName+" has been added to the game!");
		//writeSpeech(character.index, "", character.fName+ " " + character.lName + ", written by "+ logbook.author + ", art by "+ logbook.artist+".");
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