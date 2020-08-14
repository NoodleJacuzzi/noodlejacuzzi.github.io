var character = {index: "nagatoro", fName: "Ash", lName: "Martin", trust: 0, encountered: false, textEvent: "", met: false, color: "#6E6C94", author: "NoodleJacuzzi", artist: "Kinta no Mousou", textHistory: "", unreadText: false,};

var logbook = {
	index: "nagatoro", 
	desc: "A freshman student of the university you work at, he's a pretty sly young man with a penchant for teasing. He wants to establish a crossdressing club with you as the faculty advisor.",
	body: "He has a very slim build with wider hips than most boys would want to be gifted with. However they wouldn't stand out too much if it weren't for his effeminate body language and passion for makeup.",
	clothes: "During school hours he sticks to a regulation school uniform, but he prefers softer, prettier clothes whenever he can wear them. His collection of fetishwear and cosplay outfits suggest he's related to some serious money.",
	home: "While he lives close to the school he prefers to spend his time with you in the clubroom he found outside his class in the university's East Hallway.",
	tags: "Crossdressing, bratty sub, teasing, anal",
	artist: "Artist: Kinta no Mousou",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro0", name: "A student still in class catches your eye through the window", requirements: "?trust nagatoro 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "setup1A", name: "nagatoro is here.", requirements: "?trust nagatoro 40; ?location eastHallway; ?time Evening;", altName: "", altImage: "",},
	{index: "setup2A", name: "nagatoro is here.", requirements: "?trust nagatoro 41; ?location eastHallway;", altName: "", altImage: "",},
	{index: "confrontation", name: "You can overhear nagatoro in the principal's office", requirements: "?trust nagatoro 42; ?location northHallway;", altName: "", altImage: "",},
	{index: "nagatoroComfort1", name: "You think you see nagatoro out the window", requirements: "?trust nagatoro 99; ?location eastHallway;", altName: "", altImage: "",},
	{index: "clubEntrance", name: "The clubroom is here", requirements: "?trust nagatoro 100; ?location eastHallway;", altName: "", altImage: "",},
	{index: "clubQuo", name: "The clubroom is here", requirements: "?trustMin nagatoro 101; ?location eastHallway;", altName: "", altImage: "",},
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
				sp nagatoro; Aww, cmon. You'd get to spend as much time with me as you want after classes, and I have plenty of really cute outfits I bet you'd love to see me try out.<br>Plus, helping students to be honest with themselves? Your 'reputation' would be one of openness and compassion. And all the experienced faculty, minus the witch who teacher psychology of course, are advising a club already. It'd make you look pretty good in the principal's eyes I bet.<br>Pleeeeease?
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
				sp nagatoro; Hehe, but really, thanks a ton! Don't worry, I'll handle every little bit of forming the club. Gimme your number so I can keep you up to speed. <br>Setting up the room, finding members, getting permission from principalF-
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
				t As you see him crouched against the wall he looks melancholic. It's a little weird how different he seems to act when he isn't around you. 
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
				sp nagatoro; Eh? Sure, tell the principal she wears too much makeup, great idea. <br>Also, uh, personal space? Ever heard of it? 
				sp player; I mean that you wanna just be cute. You didn't stand up for yourself in there at all. 
				sp nagatoro; ?gender man; Listen, teasing you is fun, but you're some nobody counselor. No offense, but I don't think you're sticking around. Male faculty never do here. Messing with you compared to messing with her or anybody else, it's a whole different thing. 
				sp player; What if I could help you with that? What if I could help you be your real self whenever you wanted? 
				sp nagatoro; ?gender woman; Listen, teasing you is fun, but you're some nobody counselor. No offense, but I don't think you're sticking around. Messing with you compared to messing with her or anybody else, it's a whole different thing. 
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
		case "clubEntrance": {
			writeHTML(`
				t The clubroom door is closed, and when you try the knob it's locked. You're about to leave until you can hear someone whispering behind the door.
				sp nagatoro; im images/none.png; HIDDENWhat's the password?
			`);
			writeCenteredText("<input type='text' id='cheatSubmission' value='Butterscotch'>");
			writeFunction("writeEncounter('nagatoroClubSetup')", "Say the password");
			break;
		}
		case "nagatoroClubSetup": {
			writeEvent(name);
			setTrust('nagatoro', 101);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "clubQuo": {
			switch(checkTrust("nagatoro")) {
				case 101: {
					writeHTML(`
						sp nagatoro; Oh, *mister perv~! Wow, you look out of breath. A little too excited for today, huh? Guess you aren't a young *man anymore. 
						sp player; I'm not that old... 
						sp nagatoro; Hehe, I'm just kidding around. I know you're young where it counts. How about I get dressed? I know there was an outfit you couldn't take your eyes off of~
					`);
					break;
				}
				case 102: {
					writeHTML(`
						sp nagatoro; *Mister messy is back~! I spent a while cleaning the bunny-boi outfit off. I bet you'd want to see me do it with my mouth next time, huh? Pervert~! Or maybe I should get out an outfit fitting for dealing with someone as dirty as you? 
					`);
					break;
				}
				case 103: {
					writeHTML(`
						sp nagatoro; Hehe, welcome back. <br>Eeegh, you've got a dirty look in your eye today. Like, a <i>seriously</i> depraved one. If you can't help yourself, at least gimme the chance to prepare... Down there. 
					`);
					break;
				}
				case 104: {
					if (checkFlag("nagatoro", "princess") == true) {
						writeHTML(`
							sp nagatoro; Hmhm~<br>You've been around a lot lately. Such a devoted club advisor, always around to lend a hand. Or maybe you've been charmed by my cute body?
						`);
					}
					else {
						writeHTML(`
							sp nagatoro; Man, prepwork for being a bottom is such a pain! Seriously, all you need to do is stuck your dick in and thrust. I've gotta clean myself, practice insertions, shave, keep myself in shape... <br>Geez, if it didn't feel so good I'd probably have time to be a model student. 
						`);
					}
					break;
				}
				case 105: {
					writeHTML(`
						sp nagatoro; Hmhm~<br>You've been around a lot lately. Such a devoted club advisor, always around to lend a hand. Or maybe you've been charmed by my cute body?
					`);
					break;
				}
				case 666: {
					writeHTML(`
						sp nagatoro; Mmmgh... I feel restless. Lately my body's been a lot more sensitive, and I can't seem to get, uh... <br>It's a little embarassing, it's not a big deal. Oh, I found an outfit I didn't know I had, how about you distract me from all this weirdness?
					`);
					break;
				}
				default: {
					
				}
			}
			openWardrobe();
			if (checkFlag('succubus', 'newCorruption')==true && checkTrust("nagatoro") == 104) {
				writeFunction("writeEncounter('nagatoroCorruptionPrompt')", "Talk about corruption");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "nagatoroBunny1-1": {
			writeEvent(name);
			raiseTrust("nagatoro", 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroBunny2-1": {
			writeEvent(name);
			raiseTrust("nagatoro", 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroBunny3-1": {
			writeEvent(name);
			if (checkTrust("nagatoro") == 103) {
				raiseTrust("nagatoro", 1);
			}
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroPrincess1-1": {
			writeEvent(name);
			addFlag("nagatoro", "princess");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroSchoolgirl1-1": {
			writeEvent(name);
			addFlag("nagatoro", "schoolgirl");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroSwimsuit1-1": {
			writeEvent(name);
			addFlag("nagatoro", "swimsuit");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroSuccubus1-1": {
			writeEvent(name);
			addFlag("nagatoro", "succubus");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nagatoroCorruptionPrompt": {
			writeSpeech("player", "", "Before we get started I actually have something to talk to you about.");
			writeSpeech("nagatoro", "", "Listen, if you wanna join in on this that's cool. Step out of that stuffy outfit and-");
			writeSpeech("player", "", "No, that's not it. I was thinking about you, and-");
			writeSpeech("nagatoro", "", "Hah! In the shower I bet!");
			writeSpeech("player", "", "I want to know how you feel about getting older. If I had a way around that, would you be interested?");
			writeHTML(`
				sp nagatoro; Eh? You're acting weirder than normal. Listen, I'm not a girl, alright? I don't wanna be, so... <br>Ooh, I get it. You wanna do some more hypnosis play? Fine, fine. I'll indulge your perversion, I'm all yours. 
				t It doesn't seem like he's taking this too seriously, but the intent is clear. If you want to go through with the corruption there's nothing stopping you. 
			`);
			writeFunction("writeEncounter('nagatoroCorruption')", "Corrupt nagatoroF");
			writeFunction("writeEncounter('cancel')", "Change your mind");
			break;
		}
		case "nagatoroCorruption": {
			writeEvent(name);
			setTrust("nagatoro", 666);
			passTime();
			writeFunction("loadEncounter('succubus', 'nagatoroCorruption')", "Continue");
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
	{index: "nagatoroClubSetup", name: "Club Establishment"},
	{index: "nagatoroCorruption", name: "Cosplayer's Corruption"},
	{index: "nagatoroBunny1-1", name: "Bunnyboi Outfit 1"},
	{index: "nagatoroBunny2-1", name: "Bunnyboi Outfit 2"},
	{index: "nagatoroBunny3-1", name: "Bunnyboi Outfit 3"},
	{index: "nagatoroSchoolgirl1-1", name: "Schoolgirl Outfit"},
	{index: "nagatoroSwimsuit1-1", name: "Swimsuit Outfit"},
	{index: "nagatoroPrincess1-1", name: "Princess Outfit"},
	{index: "nagatoroSuccubus1-1", name: "Succubus Outfit"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "nagatoroComfort": {
			writeHTML(`
				t nagatoroF sits slumped against the wall, barely concious as you work your magic. The concept of a crossdressing club actually isn't too bad, the idea is going nowhere fast at the moment. He needs confidence, less anxiety, and more to the point he needs the ability to take what he wants. 
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
		case "nagatoroClubSetup": {
			writeHTML(`
				t The door opens, revealing a snickering nagatoroF.
				sp nagatoro; Pfft...<br>What kinda password was that? Eheh...
				sp player; So, what's actually on the agenda now that the club is started?
				sp nagatoro; Prepwork, of course! Think about it, what if you want to have some fun in a schoolgirl outfit? You'd wanna dive right in, now spend a half hour with some blue balls searching. And what if the outfits don't fit? And I wanna try out the makeup too, see what's good and what sucks dick harder than I can.
				t nagatoroF scurries over to a closet and pulls out a small box.
				sp nagatoro; Plus, since we aren't an official club or anything, I can wear whatever I want. I was hoping somebody like tomgirlF or mejiF would join in, but the last time I asked them about it...<br>Oh, check out this shade! With lipstick you want to be subtle, I've got great lips already. But my eyes are kinda plain, so...
				t nagatoroF is quickly lost in explaining his extensive collection of makeup. He seems excited to have someone to talk about it with.
				...
				im images/nagatoro/121.jpg
				im images/nagatoro/130.jpg
				t Over the course of a half hour nagatoroF dolls himself up, meticulously trying out each brand. In the end he's settled on a few dozen sets and the rest take up more than a few trash bags.
				sp nagatoro; Bored yet? Or are you so lost in my eyes-
				sp player; Nah, it's actually pretty relaxing to watch. You do this with your friends? I can get why other guys might not be interested in trading tips, but you could always make friends with a girl. I saw a tanned girl the other day who looks like an expert at this kinda stuff.
				sp nagatoro; Are you kidding? The girls here are way more judgy than the guys.<br>... I may have been laughed off a few times when I asked for advice, so I kinda just went along pretending I was joking.<br>I thought about doing this online, but it's hard to be anonymous when the whole act of putting on makeup puts your face in the spotlight.
				t He snaps a makeup lid closed to emphasize his point before he carefully starts slipping off his shirt.
				sp nagatoro; Now for the fun part~!
				im images/nagatoro/138.jpg
				t nagatoroF spends another good chunk of time trying out clothes, never shying away from letting you see every bit of his body. In fact he seems to be enjoying putting on a show for you.
				im images/nagatoro/140.jpg
				sp nagatoro; Ah, this one's great~! Good quality, and it feels nice too. It'll go great with my playboy...
				im images/nagatoro/142.jpg
				sp nagatoro; Hey, you're staring pretty hard. A boy will feel self conscious you know. You aren't planning anything lewd with little old me, are you?
				sp player; You've put on a dozen strip shows at this point, don't pretend you aren't into this.
				sp nagatoro; Hehe~<br>Well, keep it in your pants, alright? I wanna at least pretend we're a club instead of a pair of fuckbuddies, okay? You'll get your reward later if you behave.
				...
				im images/nagatoro/108.jpg
				sp nagatoro; Haaah... We spent so long unpacking, we should really be leaving about now, huh?
				t As the prepwork continues nagatoroF's teasing becomes more and more obvious. Despite his insistence that the lewd stuff can wait the amount of sextoys, lingerie, and fetishwear the two of you have unwrapped and organized is frankly ridiculous.
				sp player; Some of this stuff is really obviously erotic, how were you expecting new club members to act when they find a stash of sex toys?
				sp nagatoro; ... With excitement? I figure there's got to be a couple of other fans of buttstuff here. <br>I bet if you were cute like me you'd see the appeal.
				im images/nagatoro/110.jpg
				sp nagatoro; Hey, hey, you'll be coming by tomorrow, yeah? It'll be a lot more exciting now that everything's ready. Plus if we are gonna keep this hidden from principalF we might as well revel in the kind of things you like the most.
				sp player; I wouldn't miss it.
				sp nagatoro; Hehe, I thought so! Perv~!
			`);
			break;
		}
		case "nagatoroBunny1-1": {
			writeHTML(`
				im images/nagatoro/148.jpg
				t You're treated to quite the show today as nagatoroF slowly puts on his favorite outfit. The leotard, the ears, the whole ensemble hugging his curves and presenting a proper bunnyboi package.
				im images/nagatoro/nagatoroBunny1-1.jpg
				t The smooth outfit must feel great on his skin, which he intends to show you first hand as he pushes you onto the bed. 
				im images/nagatoro/nagatoroBunny1-2.jpg
				sp nagatoro; Seriously, aren't you <i>too</i> big? I bet even girls would have a hard time taking you, let alone a boy... And don't you feel bad emasculating other guys? You're crushing my self-esteem as a man, you know. Just for that all you get is rubbing, no cumming for you yet! 
				sp player; Your self-esteem as a man was probably already gone when you got hot and bothered thinking about how you wanted my dick, nagatoroF. 
				im images/nagatoro/nagatoroBunny1-3.jpg
				sp nagatoro; You think I'm crazy? Why in the world would I want something this massive inside me? I like being able to sit down, you know! <br>Besides, not every boy can get off from anal you know. Some people try and try training themselves almost every day, and can't get off that way no matter how long they hold off from jerking themselves. 
				t But quickly his mock anger fades. 
				sp nagatoro; Oh, hehe, I get it. You're projecting, huh? You think it's <i>my</i> heart beating quickly at our dicks rubbing together? You think <i>I'm</i> the one breathing harder feeling the difference in our sizes? 
				im images/nagatoro/nagatoroBunny1-4.jpg
				sp nagatoro; Ah, eh...? Did I... Get a little carried away there and start going faster? <br>W-whatever, I meant to do that. A pervert like you is probably pent up after just a few hours, I was just being nice. Teasing you any longer could've hurt you, probably. You should be grateful. 
				t You gently rub nagatoroF's head, but that just makes him pout harder. 
				sp nagatoro; Geez! Now I've gotta clean this up... This fabric tears easily you know, I've gotta wash it carefully.<br>My favorite pantyhose is gonna smell like your sticky cum now, I hope you're happy! Pervert! 
				t It's cute to see him get flustered. 
			`);
			break;
		}
		case "nagatoroBunny2-1": {
			writeHTML(`
				im images/nagatoro/nagatoroBunny2-1.jpg
				t The sound of tearing fabric fills the air as nagatoroF presents himself. 
				sp nagatoro; Alright, these ones were made to tear. The designer probably had your kind of libido in mind. Lemme grab some lube and... <br>Hoo... Alright, I'm ready.
				im images/nagatoro/nagatoroBunny2-2.jpg
				sp nagatoro; Whoa whoa, what're you doing?!
				sp player; You said-
				sp nagatoro; I know, but geez! You're a real brute, you know that? And what's with this position? It's totally-
				im images/nagatoro/nagatoroBunny2-4.jpg
				sp nagatoro; Ah~! Stu... This was supposed to be romantiiiIC~! 
				t Despite his protests at least one part of his body is honest. 
				im images/nagatoro/nagatoroBunny2-5.jpg
				sp nagatoro; Oooh~! 
				sp player; It's about time I got a little payback for all that teasing. I'm not stopping until you admit defeat. 
				sp nagatoro; Ah, I'm sorry! I was just having a little fun! 
				sp player; I had a different kind of defeat in mind...<br>I'll bet this feels a lot better than your toys, right? 
				t You pull back and grip nagatoroF by the arms, bouncing him up and down on your lap until...
				im images/nagatoro/nagatoroBunny2-6.jpg
				sp nagatoro; Cumming~!
				t He lets out a girlish shriek as your 'punishment' becomes too much for him, and he unloads through the air at the same time as you fill him up.
				im images/nagatoro/nagatoroBunny2-7.jpg
				sp nagatoro; H-holy... Wow, I actually came from just my... <br>Ah, what a mess... Are you gonna make me do this to all my clothes?<br>... You're lucky you're cute.
			`);
			break;
		}
		case "nagatoroBunny3-1": {
			writeHTML(`
				im images/nagatoro/nagatoroBunny3-1.jpg
				sp nagatoro; Honestly, you're insatiable.
				sp player; You're the one still wearing those torn tights.
				sp nagatoro; What can I say? These are already broken in, and...<i>I like matching clothes.</i>
				im images/nagatoro/nagatoroBunny3-2.jpg
				sp nagatoro; Mgh...
				im images/nagatoro/nagatoroBunny3-3.jpg
				sp nagatoro; Ah, it's so deep~<br>You can... You can go a little faster this time.
				im images/nagatoro/nagatoroBunny3-4.jpg
				sp nagatoro; Ah~!
				sp player; You alright?
				sp nagatoro; Y-yeah, I can take it~
				im images/nagatoro/nagatoroBunny3-5.jpg
				sp nagatoro; H-harder, just a little bit... Ghhhh~!
				t He pushes his legs against you, wrapping you tight between them and forcing you as deep as you can go.
				t And holding you there, until he sucks in a breath and lets out a lilting moan as thin splurts of cum begin to soak into his outfit.
				im images/nagatoro/nagatoroBunny3-6.jpg
				sp nagatoro; Ha~<br>It feels nice today, to...
				sp player; You're not worried about it never coming out of your clothes?
				sp nagatoro; Nah, not today. Just... Hey.
				im images/nagatoro/nagatoroBunny3-7.jpg
				sp nagatoro; Thanks for hanging out with me.
			`);
			break;
		}
		case "nagatoroSchoolgirl1-1": {
			writeHTML(`
				im images/nagatoro/nagatoroSchoolgirl1-1.jpg
				sp nagatoro; Ah, dang. Gimme a sec, I won't fit like this. 
				sp player; Got an erection, huh? Looks like the shoe's on the other foot, perv. 
				sp nagatoro; It's a reflexive thing! Unlike you I don't spend my time jerking off. 
				sp player; You don't, huh? 
				im images/nagatoro/nagatoroSchoolgirl1-2.jpg
				sp nagatoro; H-hey, what're you doing? 
				sp player; Watching you squirm. You don't get off much, do you? Feeling pent up? 
				sp nagatoro; N-no... I get off once a week like a normal... Ghh, maybe I've been a little more active since I met you, but...<br>I'm not a degenerate like you! 
				im images/nagatoro/nagatoroSchoolgirl1-3.jpg
				sp player; Your body is telling a different story, pervert. 
				t Each time you call him that he quivers, the idea that he's <i>just</i> as lustful as you clearly setting him off. 
				sp nagatoro; S-stop~! I'm gonna~
				im images/nagatoro/nagatoroSchoolgirl1-4.jpg
				sp nagatoro; Oohh~! 
				im images/nagatoro/nagatoroSchoolgirl1-5.jpg
				sp nagatoro; Hah... Hah... H-happy now weirdo? You've got a cutie like me with a perfect mouth and a fantastic rear, and you're playing with my dick...
				sp player; Sounds like you need some more punishment. 
				sp nagatoro; N-no wait, I'm sorry! <br>Stop, it's still really sensitive~! 
				... 
				t His eyes are glazed over as he tries to catch his breath. He's not very resistant to stimulation to his little dicklette. 
				t Still, he's careful on instinct to try and keep the clothes clean. You should look forward to what outfits he has prepared tomorrow. 
			`);
			break;
		}
		case "nagatoroSwimsuit1-1": {
			writeHTML(`
				im images/nagatoro/nagatoroSwimsuit1-1.jpg
				sp nagatoro; Pretty cute, huh? Hey, how about a game this time? I'm wearing two pieces of clothing, if you can guess what they both are I'll take them off! 
				sp player; The swimsuit, obviously. 
				sp nagatoro; Correct! It's one piece, so what's the other? 
				sp player; The wig? 
				sp nagatoro; Bzzt, wrong! I don't count the wig as clothing, you give up? 
				t You carefully look over the boy in the swimsuit before you, but there's no sign of any other bits of clothes. 
				sp nagatoro; Geez, I can feel your leering through the suit. Fine, you got one right. I guess I can take off just one. 
				im images/nagatoro/nagatoroSwimsuit1-2.jpg
				sp nagatoro; You'd think with a brain like yours you would've guess it. 
				sp player; That you're a buttslut? The thought never would have crossed my mind. 
				sp nagatoro; Hey, I'm not a-
				im images/nagatoro/nagatoroSwimsuit1-3.jpg
				sp nagatoro; Aah~<br>W-wait, I wasn't ready yet! 
				sp player; I think you've been ready from the moment you put these in. Now, let's see...
				im images/nagatoro/nagatoroSwimsuit1-4.jpg
				sp nagatoro; Oooh~! 
				t His cock twitches as you pull the beads out of his ass. 
				sp player; You seem ready to cum already. You really can't take pleasure as well as you give out sass, huh? 
				im images/nagatoro/nagatoroSwimsuit1-5.jpg
				sp nagatoro; Sh-shut up, I can take anything you dish out! 
				t You just smile and press the first bead against his well-lubed asshole. He gulps, it's clear how you two are about to spend the day. 
			`);
			break;
		}
		case "nagatoroPrincess1-1": {
			writeHTML(`
				im images/nagatoro/nagatoroPrincess1-1.jpg
				sp nagatoro; Eheh, like the outfit? Soft pink with a design that shows off my body, a skirt the perfect length to show my naughty bits, stockings that feel <i>heavenly</i> on the skin... It's the perfect outfit for dealing with a pervert like you. Aren't you lucky? 
				im images/nagatoro/nagatoroPrincess1-2.jpg
				sp nagatoro; Geez, I can feel your heartbeat through my soles. Aren't you a little <i>too</i> excited? Shouldn't you be getting this hard at the thought of impregnating a girl, not at rubbing your cock between my feet? 
				im images/nagatoro/nagatoroPrincess1-3.jpg
				sp nagatoro; Honestly, you're... Mmmh, hopeless. If you make a mess on these socks... I'll throw them away, you know. I <i>am</i> flexible enough I could lick them clean, but why would I want to taste your gross, sticky load? <br>Just... Just smelling it would totally fog up my head, imagine how gross... It'd be if, ah, if I couldn't get the taste out of my mouth for hours...
				im images/nagatoro/nagatoroPrincess1-4.jpg
				sp nagatoro; Ah, ahah~<br>That really set you off, huh~? Are you gonna cum?<br>I'll take... Take pity on you and cuuum too, so you don't feel bad about... About my cute feet being enough to get you off... P-pervert~! 
				im images/nagatoro/nagatoroPrincess1-5.jpg
				sp nagatoro; Cumming~! 
				im images/nagatoro/nagatoroPrincess1-6.jpg
				sp nagatoro; Haah~<br>I can feel it soaking through the fabric, it's so slimy... <br>Hehe, a proper degenerate like you isn't satisfied yet, right? <br>Well, these are totally ruined now, no way your scent is coming out of these. Cmon, let's go again. If I'm tossing these we may as well paint them totally white first~
			`);
			break;
		}
		case "nagatoroCorruption": {
			writeHTML(`
				t You take a deep breath and focus on the back of your hand as nagatoroF finishes getting dolled up in his bunny outfit. It really must be his favorite. 
				t The back of your hand glows red for just a moment before fading. nagatoroF is getting dressed so he doesn't notice, but almost immediately his brow furrows and he licks his lips. He shakes it off though, the strange feeling is probably nothing. 
				... 
				im images/nagatoro/corruption1.jpg
				sp nagatoro; G-geez, are you just gonna stare at me the whole time? Keep this up and I won't be joking when I call you a p... Perv...
				t Cracks of nervousness form in his voice as he tries to relieve the tension by teasing you. His dick is surging to life, bulging out through his bunnyboi outfit harder than it ever has before. 
				im images/nagatoro/corruption2.jpg
				sp nagatoro; W-why am I feeling so hot? Did you mess with the thermo... Ghh... <br>I can't... It's building...
				t There's a strange tint in his eyes as the energy from his body travels away from his muscles to one singular point.
				sp player; Give in, let go nagatoroF.
				t His knees buckle as he wordlessly answers your command.
				im images/nagatoro/corruption3.jpg
				t He squeals as his already small cock begins to leak what little masculinity he had away. His normal orgasms are usually just a few spurts, but this time is enough to soak the inside of his clothes.
				im images/nagatoro/corruption4.jpg
				sp nagatoro; Ah... Ah can't... Not hard, but still...
				t You support him by the shoulder as he continues to splurt. The toll of the inhuman orgasm is affecting his mind and body.
				t Still leaning on you for support his eyes cross as one last splurt soaks his clothes thoroughly enough that his last load as a man splatters on the ground in a puddle. He collapses in your arms as his eyes roll back and close.
			`);
			break;
		}
		case "nagatoroSuccubus1-1": {
			writeHTML(`
				im images/nagatoro/nagatoroSuccubus1-1.jpg
				sp player; Huh, that's a little... On the nose. 
				sp nagatoro; What's that supposed to mean? <br>Actually, is this yours? I don't remember buying it. It's just my size though, so I thought I'd give it a shot.<br>Man this is comfy, I can't even tell what kind of fabric it is...
				im images/nagatoro/nagatoroSuccubus1-2.jpg
				sp nagatoro; Honestly, it does look really good on me. 
				sp player; It seems a little tight in the crotch though. 
				sp nagatoro; Yeah, the way it rubs against me makes it hard to focus. If I had an erection it'd be really obvious in this thing.<br>Actually that hasn't been a problem for... For... 
				t His words trail off as he stares into his own reflection. There's an odd glimmer in his eyes. 
				sp nagatoro; I don't know why... This outfit just seems really... Special... 
				t As you look at his reflection as well, you can't help but agree. Something succubusF said before is quietly echoing in the back of your mind, but you can't place exactly what... 
				... 
				im images/nagatoro/nagatoroSuccubus1-3.jpg
				sp nagatoro; Ah, fuck~! It feels so good today, harder~! 
				t His usual demeanor has fallen away today, replaced with the total pervert beneath you. His flaccid dick wiggles with every thrust, it isn't hard yet every part of his body is clearly showing an absolute devotion to this pleasure. 
				t The little buttslut just moans, pushing his ass back against you with each thrust to ensure you're hilting yourself as deep as possible. 
				sp nagatoro; Come on, come on and <span style="color:pink">CUM~!</span>
				im images/nagatoro/nagatoroSuccubus1-4.jpg
				sp nagatoro; Yes~! Fuhhhk... Yeah...
				t His eyes flutter as his flaccid cock splurts into his thin leggings, then slowly starts to leak out the rest of his load at the sensation of being creamed. All the while his ass clenches around you to the rhythm of his heartbeat to thoroughly milk you.
				t You pull out with a *plop*, and take a step backwards to watch the semi-aware buttslut giggle vapidly as the rest of his water cum leaks from the flaccid member between his legs. 
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
	{index: "nagatoroCorrupted", requirements: "?trust nagatoro 666;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "nagatoroReward": {
			writePhoneImage("images/nagatoro/reward.jpg", "Art by Kinta no Mousou");
			writePhoneSpeech("nagatoro", "", "You've finished all of nagatoroF's content for this version, what would you like to see next? I bet it's something lewd!");
			break;
		}
		case "nagatoroCorrupted": {
			writePhoneImage("images/nagatoro/succubusPic.jpg", "Art by Kinta no Mousou");
			writePhoneSpeech("nagatoro", "", "You've primed nagatoroF for transformation into a succubus (male)! More content will come along soon!");
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

function openWardrobe() {
	document.getElementById('output').innerHTML += `
	<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto auto;">
	</div>
	`;
	switch(checkTrust("nagatoro")) {
		case 101:
			writeWardrobeOption("nagatoroBunny1-1");
			writeWardrobeOption("nagatoroSchoolgirlLocked");
			writeWardrobeOption("nagatoroSwimsuitLocked");
			writeWardrobeOption("nagatoroPrincessLocked");
		break;
		case 102:
			writeWardrobeOption("nagatoroBunny2-1");
			writeWardrobeOption("nagatoroSchoolgirl1-1");
			writeWardrobeOption("nagatoroSwimsuitLocked");
			writeWardrobeOption("nagatoroPrincessLocked");
		break;
		case 103:
			writeWardrobeOption("nagatoroBunny3-1");
			writeWardrobeOption("nagatoroSchoolgirl1-1");
			writeWardrobeOption("nagatoroSwimsuit1-1");
			writeWardrobeOption("nagatoroPrincessLocked");
		break;
		case 104:
			writeWardrobeOption("nagatoroBunny3-1");
			writeWardrobeOption("nagatoroSchoolgirl1-1");
			writeWardrobeOption("nagatoroSwimsuit1-1");
			writeWardrobeOption("nagatoroPrincess1-1");
		break;
		case 666:
			writeWardrobeOption("nagatoroBunny3-1");
			writeWardrobeOption("nagatoroSuccubus1-1");
			writeWardrobeOption("nagatoroSwimsuit1-1");
			writeWardrobeOption("nagatoroPrincess1-1");
		break;
		default:
			//writeWardrobeOption("002");
			//writeWardrobeOption("032");
			//writeWardrobeOption("112");
			//writeWardrobeOption("nagatoroPrincessLocked");
	}
}

function writeWardrobeOption(wardrobeImage) {
	if (wardrobeImage.includes("Locked")==false) {
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="`+wardrobeImage+`" src="images/nagatoro/`+wardrobeImage+`.jpg" title="Art by Kinta no Mousou"
			onclick="writeEncounter('`+wardrobeImage+`')",
			onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
			onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
			style="filter:brightness(50%);">
		`;
	}
	else {
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="`+wardrobeImage+`" src="images/nagatoro/unknown.png" title="Tsk tsk, play with the outfits we have before you get greedy for more!"
			onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
			onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
			style="filter:brightness(50%);">
		`;
	}
}

function wardrobeMouseOver(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(100%)"
}

function wardrobeMouseOut(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(50%)"
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