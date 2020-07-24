var character = {index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "", color: "#da924b", author: "Noodle Jacuzzi", artist: "Enoshima Iki",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = {
	index: "neet", 
	desc: "A university student, supposedly. You've never seen her in a class in session, and nobody seems to know how long she's been attending.",
	body: "She's very well endowed despite being short, but she could really take some time to take care of herself. Notably, her hair is a mess.",
	clothes: "You aren't sure if she even owns anything aside from the school uniform, and it always looks perpetually wrinkled.",
	home: "According to her file, she lives in the computer lab.",
	tags: "Romance, Masturbation, Titjob, Condom Sex, Raw Sex",
	artist: "Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "neet1", name: "Someone's fluffing a pillow here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neet2", name: "It looks like neet is getting ready for bed again", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neet3", name: "It looks like neet is here again", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 2, trustMax: 2, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neet4", name: "neet is sitting in the dark room", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 3, trustMax: 3, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetDateSelection", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 60, trustMax: 80, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetDateFinish", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 80, trustMax: 99, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetA-1-1", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 101, trustMax: 101, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetA-2-1", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 102, trustMax: 102, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetA-3-1", name: "neet is here", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 103, trustMax: 110, type: "tab", top: 0, left: 0, day: "both",},
	{index: "neetBeach1", name: "neet is here", location: 'beach', time: "MorningEvening", itemReq: "", trustMin: 60, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "neet1": {
			writeSpeech("player", "", "Are you allowed to be here when class isn't in session?");
			writeBig("images/neet/profile.jpg", "Art by Enoshima Iki");
			writeText("The girl acknowledges you, barely, and sets her pillow and lays down. Within a moment she's become a blanketed lump on the floor.");
			writeText("You stare at the lump. It doesn't stare back.");
			writeSpeech("player", "", "Are you even a student here? I don't recognize you.");
			writeText("She sticks a hand out of her cover to point at one of the lab's monitors, displaying rapidly scrolling text.");
			writeSpeech("player", "", "That doesn't answer my questions...<br>What is this? It looks like one of those old computers where you type in commands, like from before they had mice.");
			writeText("You watch as lines of debug reports fly by. Several exe files are mentioned, the one named 'hack-the-NSA.exe' is probably a joke.");
			writeText("Curiously, beneath the monitor written in small text on the desk, reads 'neetF neetL is allowed to do whatever she wants'. ");
			writeText("Textbooks are expensive, and principalF might ask you to substitute for a computer aide if schedules are overbooked. So this seems like a perfect opportunity to have an idea.");
			writeSpeech("player", "", "Are you good at this kind of stuff? I could use a teacher actually. I'm a little behind on the times.");
			writeSpeech("neet", "", "Sure.");
			writeText("Her response is blunt and partially muffled.");
			writeSpeech("player", "", "... Won't you need to get up to teach me?");
			writeSpeech("neet", "", "Nope.");
			writeText("There's an awkward silence until she starts her 'lecture' from her makeshift bed.");
			writeSpeech("neet", "", "Basically, think of the computer as an old man trapped in a box with a paintbrush. Every few seconds a piece of paper with writing he doesn't understand slides in through a mail slot in the wall...");
			writeText("...");
			writeText("An hour and a half later, neetF finally finishes her metaphor.");
			writeText("It was beautiful. As she yawns, you reflect on what you've learned. Her metaphor completely broke your understanding of computers down to its foundations and built them back up again.");
			writeSpecial("You've got a grasp on hacking, your skill has improved!");
			data.player.hacking += 1;
			passTime();
			raiseTrust('neet', 1);
			updateMenu();
			writeSpeech("player", "", "Thank you, really. I'll look the other way on the napping.");
			writeSpeech("neet", "", "Really?");
			writeSpeech("player", "", "Yeah. You do me a favor, I do you one, you know?");
			writeSpeech("neet", "", "I see...");
			writeText("She looks contemplative, or maybe she's just sleepy. Either way she's out like a light soon enough.");
			writeText("Having some method to improve your computer skills is pretty valuable, you can always hypnotize her later when she isn't useful anymore.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neet2": {
			writeSpeech("player", "", "You really should get some sleep at home, not here. Again, do you even go to school here, Ms. neetL?");
			writeSpeech("neet", "", "Yeah.");
			writeText("Her half-hearted, single-word response isn't very convincing, but...");
			writeSpeech("player", "", "Good enough for me! Could you give me some pointers again?");
			writeSpeech("neet", "", "Sure.");
			writeText("This time she motions towards a computer with a file open in notepad.");
			writeSpeech("neet", "", "We'll start with hello world, and then array subindexing methods. After we cover openGL, I have some saltshakers I can use as an example of...");
			writeText("...");
			writeText("neetF puts down the saltshaker as you type in the last line of code.");
			writeSpeech("player", "", "And... Done. ");
			writeText("On the screen a 3-d model of the planet earth is obliterated by an exploding star.");
			writeSpeech("neet", "", "Nice.");
			writeSpecial("Due to that incredibly complex lesson, your hacking skills have improved!");
			writeSpeech("player", "", "Thanks again, good luck with your nap. See you around?");
			writeSpeech("neet", "", "Are we... friends?");
			writeSpeech("player", "", "Uh, no. We're just associates. We could be friends if you want, get to know each other.");
			writeSpeech("neet", "", "Get to know each other...");
			writeText("She's definitely an oddball, but she seems pretty harmless. You'll have a pretty easy avenue towards corrupting her once you're finished getting lessons.");
			writeSpeech("player", "", "Anyways, good night neetF.");
			data.player.hacking += 1;
			passTime();
			raiseTrust('neet', 1);
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neet3": {
			writeSpeech("player", "", "Hello neetF.");
			writeSpeech("neet", "", "Hello playerMister counselor.");
			writeText("This time she's at a computer instead of preparing for bed.");
			writeSpeech("player", "", "Have time for a lesson before the day is out?");
			writeSpeech("neet", "", "Yes playerSir.");
			writeText("She scoots her rolling chair out of the way to give you access to the computer.");
			writeSpeech("neet", "", "Get into this.");
			writeText("On the screen is a password menu for some unknown program. neetF's name is on the top, this must be something she wrote.");
			writeText("...");
			writeText("Over the next few hours you've been sent on numerous goose chases and cracked over fifteen layers of encryption, each more complex than the last.");
			writeText("Occasionally neetF will lean over and mumble advice like 'press the blue button', which helps you break through some blockades.");
			writeSpecial("Your hacking skill has improved!");
			writeText("She's been pretty quiet lately though. She's probably asleep but you're too focused to take a break.");
			writeText("And finally, you type in 'password1235' into the menu, gaining access to the system.");
			writeBig("images/locations/playerOfficeEvening.jpg", "Live Feed");
			writeSpeech("player", "", "Wait, what?");
			writeText("On the screen is a live feed of your office. Several video files display other rooms, some of the recordings are of you practicing hypnosis.");
			writeText("Other documents strewn about various folders show your documentation, complete with notations displaying which parts are fake.");
			writeSpeech("player", "", "What the hell is-?");
			writeText("neetF is nowhere to be seen.");
			writeSpeech("player", "", "Fuck.");
			writeText("She's got you now. She doesn't seem like the most social type, but she's too dangerous to be out of your control now. The problem is there's no clear answer on where to find her.");
			writeText("The last thing worth noting is there's a note inside the program saying 'I'll call you when I figure out what I want.'");
			data.player.hacking += 1;
			passTime();
			raiseTrust('neet', 1);
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neet4": {
			clearText('neet');
			writeText("You take a seat, Tia sitting across from you. There's a cold tension in the air. With how experienced she is with tech, she likely has some kind of master plan involving backups. You'll need to keep on your toes to stay out of prison.");
			writeSpeech("player", "", "So. What did you want?");
			writeSpeech("neet", "", "I would like you to hypnotize me.");
			writeSpeech("player", "", "... I see. <br>Actually no, I don't see at all. What?");
			writeSpeech("neet", "", "I want to be hypnotized. I've seen it work, you put people in trances and then they do what you tell them.");
			writeText("You're silent for a moment. Could this be a trap? Probably not, if she's got cameras in your office then she's already got incriminating evidence. She's probably got her reasons, and this is your get out of jail free card.");
			writeFunction("writeEncounter('neet5')", "Hypnotize her");
			writeFunction("changeLocation(data.player.location)", "Make an excuse and buy some time");
			break;
		}
		case "neet5": {
			writeSpeech("player", "", "Sure.");
			writeText("You get out your pendant. Part of you wants to see if she really understands what you'll be doing to her, but talking her out of this would probably be a bad idea for you.");
			writeText("Willing hypnosis can be a bit tricky. Her expression is unreadable, but she seems like she's calm enough.");
			writeSpeech("player", "", "Alright. Pay close attention, okay?");
			writeText("...");
			writeSpeech("player", "", "So, go ahead and make a noise. A dog, bark like a dog.");
			writeSpeech("neet", "", "I'd rather not, playerSir. Is that a requirement?");
			writeText("You sigh and lean back into your chair. This isn't working at all.");
			writeSpeech("player", "", "This isn't working, something isn't right.");
			writeText("She doesn't have a particularly strong will, and she seems pretty calm.");
			writeSpeech("player", "", "Hold on. neetF? How are you feeling right now?");
			writeSpeech("neet", "", "... I'm hungry? Tired. And nervous, I suppose, but that's to be expected. Should I have eaten?");
			writeSpeech("player", "", "How nervous?");
			writeText("She places her hand on her chest, the same general unfazed expression on her face as when you started.");
			writeSpeech("neet", "", "Hmm. If I had to put it into words...");
			writeText("She takes a moment to think, as if slowly piecing the appropriate words together bit by bit.");
			writeSpeech("neet", "", "I'd say I'm terrified. My heart rate is high and I can barely remain seated. If it were not for the bad news, I'd most certainly describe myself as 'jumping for joy'.<br>I've barely gotten any sleep as well. I was rehearsing how I would phrase my request last night for several hours.");
			writeText("Testing something, you place your hand on her forehead. Immediately she goes quiet as the faintest of blushes spreads across her cheeks.");
			writeText("You can't risk her snitching on you, but you have no idea what countermeasures she has in place. You need to regain control of the situation.");
			writeSpeech("player", "", "That's the problem, you're nervous around me.<br>We'll need to do something about that.");
			writeText("You withdraw your hand. The blush has spread farther across her face and she's begun to look dizzy.");
			writeSpeech("player", "", "You alright?");
			writeText("She nods. It's starting to get late.");
			writeSpeech("player", "", "We'll pick this up later, alright? Keep a lock on those recordings, and I'll have you ready for hypnosis in no time. Got it?");
			writeSpeech("neet", "", "Y-yes playerSir.");
			setTrust('neet', 60);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetDateSelection": {
			switch (checkTrust('neet')) {
				case 60: {
					writeSpeech("neet", "", "Ah, hello playerSir. I've had a chance to get ahold of myself, and I've taken some time to prepare for helping me overcome my nerves. I've bought scented candles and tea that were popular on the 'mystic yoga' forums.");
					writeSpeech("player", "", "No need. I've already got the perfect method.");
					writeSpeech("neet", "", "... Of course. You're the expert. Sorry for getting ahead of myself.");
					writeSpeech("player", "", "Now, put that stuff away, we're going on a date.");
					writeSpeech("neet", "", "... I'm sorry?");
					writeSpeech("player", "", "Don't be, you're quite cute. Candles and tea are overrated, honestly. They don't work unless the target already uses them, otherwise the scents and taste just set you more on edge.");
					writeSpeech("neet", "", "B-but, a date? I've never been-");
					writeText("You place your finger on her lips to shush her.");
					writeSpeech("player", "", "It'll be fun, trust me.");
					writeSpeech("neet", "", "... Th-that was my first-");
					writeSpeech("player", "", "In no world does that count as a kiss, neetF. Now come on...");
					raiseTrust('neet', 1);
					break;
				}
				default: {
					writeSpeech("player", "", "Hello, neetF. Are you free?");
					writeSpeech("neet", "", "Y-yes playerSir! Are we going to go on another, ah...");
					writeSpeech("player", "", "Date? Well, I was thinking... ");
				}
			}
			if (checkFlag('neet', 'date1') == false) {
				writeFunction("writeEncounter('neetDate1')", "Let's go somewhere and chat");
			}
			if (checkFlag('neet', 'date2') == false) {
				writeFunction("writeEncounter('neetDate2')", "Let me walk you home");
			}
			if (checkFlag('neet', 'date3') == false) {
				writeFunction("writeEncounter('neetDate3')", "Let's go for a run");
			}
			writeFunction("changeLocation(data.player.location)", "Actually, maybe tomorrow");
			break;
		}
		case "neetDate1": {
			addFlag('neet', 'date1');
			writeSpeech("player", "", "... and let's go hang out and chat. I've got a great cafe in mind.");
			writeText("The two of you leave the room and you make your way out into town.");
			writeText("...");
			writeText("The cafe has a calm atmosphere, it's quite relaxing and pretty empty.");
			writeSpeech("player", "", "So, anything on your mind? School? Life after your degree?");
			writeSpeech("neet", "", "I would like to talk about hypnosis. About why you use it.");
			writeSpeech("player", "", "Geez, a one-track mind, huh?");
			writeSpeech("neet", "", "I am only asking if it's an acceptable question to ask.");
			writeSpeech("player", "", "It's fine. Being able to speak your mind should help you. I use my power to get what I want, whenever I want. I feel like having sex, so that's what I use it for.");
			writeSpeech("neet", "", "I see... Is it really so pleasurable that you'd risk being caught?");
			writeSpeech("player", "", "Curious?");
			writeSpeech("neet", "", "I am. I can't imagine it being that much better than self pleasure. However I am aware that my holdups would impair the experience.");
			writeSpeech("player", "", "You really have thought this all out. You've basically broken down every piece of your thought process, haven't you? That takes quite some self-awareness.");
			writeSpeech("neet", "", "...");
			writeSpeech("player", "", "Well, all the more reason to relax. To start, you can chill out on the tone. You don't need to keep yourself so guarded around me, you already know my secrets.");
			writeSpeech("neet", "", "I am... I'm not good at being un-guarded. That's why I would like to change myself.");
			writeFunction("writeEncounter('neetDate1a')", "We have plenty of time");
			writeFunction("writeEncounter('neetDate1b')", "What's wrong with who you are?");
			break;
		}
		case "neetDate1a": {
			writeSpeech("player", "", "We'll have plenty of time, there's no rush. Relax and enjoy the scenery.");
			writeSpeech("neet", "", "I don't like the scenery.<br>... I apologize. I spoke rashly.");
			writeSpeech("player", "", "neetF, if that's your idea of rash, you haven nothing to apologize for.<br>It seems to be getting late. We'll pick this up again another day, alright?");
			writeSpeech("neet", "", "Yes please. Thank you for today, I'll see you at school.");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate1b": {
			writeSpeech("player", "", "What's wrong with who you are?");
			writeSpeech("neet", "", "I... I just want to be better. That's it, okay?");
			writeSpeech("player", "", "neetF. I know you well enough to know that you think things through. What's the matter? You can tell me.");
			writeSpeech("neet", "", "... Friends.<br>I want friends. I want someone to spend time with.");
			writeText("She leans back into the soft chair and sighs.");
			writeFunction("writeEncounter('neetDate1ba')", "You'll find someone eventually");
			writeFunction("writeEncounter('neetDate1bb')", "What about me?");
			break;
		}
		case "neetDate1ba": {
			writeSpeech("player", "", "You'll find someone eventually. There are plenty of people out there who feel just like you do, they'd be glad for your company.");
			writeSpeech("neet", "", "Really? You're not just saying that, right?");
			writeSpeech("player", "", "Absolutely, I've met some of them. Relax alright? There's no rush. If you put in the effort, things will change. That's how life works.<br>Listen, it's getting late. We'll pick this up again another day, alright?");
			writeSpeech("neet", "", "Yes please. Thank you for today, I'll see you at school.");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate1bb": {
			writeSpeech("player", "", "What about me? We are on a date after all.");
			writeSpeech("neet", "", "... Ah!");
			writeText("It takes her a moment to work through the situation in her head, but once she does she starts to blush and goes quiet.");
			writeSpeech("neet", "", "That means that... That we're...");
			writeSpeech("player", "", "I won't push you past your comfort zone for now. Feel free to think of us as having whatever relationship you like.<br>Ah, it's getting late. Shall we continue this another day?");
			writeSpeech("neet", "", "Relationship...");
			writeText("She's distracted, twiddling with her hair.");
			writeSpeech("player", "", "I'll see you at school, neetF. Take care.");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "neetDate2": {
			addFlag('neet', 'date2');
			writeSpeech("player", "", "... and let's go. I'll walk you home today.");
			writeSpeech("neet", "", "Home? I'm not sure-");
			writeSpeech("player", "", "There's no need to worry. We'll take this at a pace you're comfortable with.");
			writeText("The two of you leave the room and you make your way out into town.");
			writeText("...");
			writeText("The walk is pleasant, but reserved. Most people find it easier to talk when not directly facing each other, but it seems like neetF is still second-guessing herself.");
			writeText("You should probably say something...");
			writeFunction("writeEncounter('neetDate2a')", "Don't hold yourself back");
			writeFunction("writeEncounter('neetDate2b')", "What do you do for fun?");
			break;
		}
		case "neetDate2a": {
			writeSpeech("player", "", "Don't hold yourself back. There's no need to be reserved, we're just walking home.");
			writeSpeech("neet", "", "I... Yes, you're right. Interacting with others naturally increases my heart rate, and anxiety. Becoming open will improve the chances of your hypnosis.<br>That is your plan, correct?");
			writeSpeech("player", "", "Yeah, pretty much.");
			writeSpeech("neet", "", "Alright. I'll d-do as I see fit then.");
			writeBig("images/neet/date-c.jpg", "Art by Enoshima Iki");
			writeText("The two of you keep walking, neetF holding your arm tight.");
			writeSpeech("player", "", "Feeling more relaxed?");
			writeSpeech("neet", "", "It feels... Nice. I often take the time to daydream and plan on my way home. Now it feels a lot easier to just... Clear my mind.");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			writeText("Eventually you arrive at her house, and say your farewells.");
			passTime();
			writeFunction("changeLocation('street')", "Make your way home");
			break;
		}
		case "neetDate2b": {
			writeSpeech("player", "", "So, what do you do for fun?");
			writeSpeech("neet", "", "Hmm? I spend most of my time working with computers, learning languages.");
			writeSpeech("player", "", "Right, you're pretty good with those, but what else? How do you spend the rest of your time?");
			writeSpeech("neet", "", "Well, I've been trying to be healthier lately. And I've spent so much time just this year playing games and watching TV, I guess I must like those.");
			writeSpeech("player", "", "You guess? Do you feel passionate about them?");
			writeSpeech("neet", "", "Not really...");
			writeSpeech("player", "", "Is there anything you strongly like? It's fine if there isn't anything, I'm just asking.");
			writeSpeech("neet", "", "... I like this.");
			writeText("She goes mostly quiet for the rest of the walk home. At first you think it's nerves, but she seems like she has a good time as she waves you off at her doorstep.");
			writeSpecial("neetF's trust in you has increased!");
			raiseTrust('neet', 7);
			passTime();
			writeFunction("changeLocation('street')", "Make your way home");
			break;
		}
		case "neetDate3": {
			addFlag('neet', 'date3');
			writeSpeech("player", "", "... because we're going for a run!");
			writeSpeech("neet", "", "A run? But I'm wearing my uniform.");
			writeSpeech("player", "", "Not a problem. You've got a PE outfit here, right?");
			writeSpeech("neet", "", "Yeah, but I've never even worn it. I've been avoiding PE courses.");
			writeSpeech("player", "", "Now is as good of a time as any to break it in. Let's go.");
			writeText("The two of you leave the room and you make your way to the school's running track.");
			writeText("...");
			writeBig("images/neet/date-x.jpg", "Art by Enoshima Iki");
			writeSpeech("neet", "gym.jpg", "Okay, I'm ready.");
			writeSpeech("player", "", "Looks good on you, neetF.");
			writeSpeech("neet", "gym.jpg", "Thank you. This outfit might be new, but I've been exercising a lot lately. I'm confident in myself.");
			writeSpeech("player", "", "That's the spirit! Alright, how about three laps?");
			writeSpeech("neet", "gym.jpg", "Three...? Of laps around...");
			writeSpeech("player", "", "Around the track, neetF.");
			writeText("She looks along the long track, her confidence visibly deflating.");
			writeSpeech("player", "", "Feeling nervous?");
			writeSpeech("neet", "gym.jpg", "N-no, I'm not out of shape, I promise. I can handle three.");
			writeText("You start to stretch to loosen yourself up. She tries to match you, but her poor form means you need to coach her through a bit.");
			writeSpeech("player", "", "Alright, ready?");
			writeSpeech("neet", "gym.jpg", "Yes playerSir.");
			writeText("...");
			writeText("The two of you make it two laps before neetF begins to seriously flag. She needs to lean on your shoulder to finish, but she does make it. Afterwards you rest on a wall to take a breather.");
			writeSpeech("player", "", "Feeling alright? Heart pumping?");
			writeSpeech("neet", "gym.jpg", "To be frank... My chest is on fire, and my legs feel like metal bars. I was very interested... In what I heard was called a 'runner's high'... But all I feel is short of breath and sweaty...");
			writeFunction("writeEncounter('neetDate3a')", "Let's get changed");
			writeFunction("writeEncounter('neetDate3b')", "You look great");
			break;
		}
		case "neetDate3a": {
			writeSpeech("player", "", "Let's get changed then.");
			writeSpeech("neet", "gym.jpg", "Yes, please. It's after hours, can we use the showers?");
			writeSpeech("player", "", "I'm faculty, I'm sure principalF will give the okay.");
			writeText("The two of you make your way into the gym's shower room. neetF's jacket is a bit stuffy, so she takes it off here.");
			writeBig("images/neet/date-a.jpg", "Art by Enoshima Iki");
			writeText("It's clear she isn't wearing a bra through her sweat-matted shirt. She's got a pretty large pair of breasts.");
			writeText("Still, you're on a mission. There will be time for all that later.");
			writeText("...");
			writeText("The two of you finish cleaning up and say your goodbyes.");
			writeSpeech("neet", "gym.jpg", "This was pleasant, albeit a bit painful. Thank you for the time.");
			writeSpeech("player", "", "No problem, see you tomorrow.");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			passTime();
			writeFunction("changeLocation('gym')", "Finish");
			break;
		}
		case "neetDate3b": {
			writeSpeech("player", "", "You look great already, you managed three laps!");
			writeSpeech("neet", "gym.jpg", "Hah... Very funny... Look at this.");
			writeBig("images/neet/date-b.jpg", "Art by Enoshima Iki");
			writeSpeech("neet", "gym.jpg", "See? I'm sweating through two layers. You feel quite silly now, don't you playerSir?<br>Ah, I've gotten carried away. My apologies.");
			writeSpeech("player", "", "It's fine, it's a good sign that you're relaxed enough to play around like that, and that you were fine with resting on my shoulder for that last lap.");
			writeSpeech("neet", "gym.jpg", "I was not resting! I just... Tripped on a rock without my glasses...");
			writeSpeech("player", "", "Of course, sorry.");
			writeSpeech("neet", "gym.jpg", "... Sorry. I really was resting, there was no rock. I just-");
			writeSpeech("player", "", "It's completely fine, I promise. How about we get cleaned up and head home?");
			writeSpeech("neet", "gym.jpg", "Yes please. It's after hours, can we use the showers?");
			writeSpeech("player", "", "I'm faculty, I'm sure principalF will give the okay.");
			writeSpecial("neetF's trust in you has greatly increased!");
			raiseTrust('neet', 10);
			writeText("...");
			writeText("After getting cleaned up, the two of you head your separate ways.");
			passTime();
			writeFunction("changeLocation('gym')", "Finish");
			break;
		}
		case "neetDateFinish": {
			writeSpeech("player", "", "Hello, neetF. Are you free?");
			writeSpeech("neet", "", "Actually, playerSir, I was wondering if you'd like to come to my house.");
			writeSpeech("player", "", "Oh?");
			writeSpeech("neet", "", "Ah, it's just because the weather report said it was going to be cold, and since most of our... Our dates have been... Ah! And I'm sure to be more comfortable for hypnosis in my own home!");
			writeSpeech("player", "", "That sounds like a wonderful idea, let's go.");
			writeText("She hesitates for a moment.");
			writeSpeech("neet", "", "... I'm sorry playerSir, that wasn't true. I'd actually like you to come over because... Because...");
			writeText("You pat her head and ruffle her hair.");
			writeSpeech("player", "", "You can tell me all about it when we're there.");
			writeText("She nods, blushing heavily.");
			writeText("...");
			writeText("The two of you make your way to her house, and she invites you in.");
			writeSpeech("neet", "", "It... Um... Wasn't all untrue. I really am more comfortable here than outside. And we've gotten a lot closer... So...");
			writeText("She's still visibly nervous as she takes a seat on her bed and starts taking off her cardigan. The room is extremely tidy, although the trashcan is packed. It seems like someone was cleaning in a hurry.");
			writeText("This is the moment of decision, you have an important choice ahead of you. this is your opportunity to hypnotize her, even a half trance would help you get her to open up.");
			writeText("But on the opposite end, she's made a lot of progress without the hypnosis. She already has feelings for you, your relationship could go a lot farther naturally.");
			writeSpeech("neet", "", "Do you want to... To try again?");
			writeFunction("writeEncounter('neetDate4a')", "Let's go, let's give this another shot");
			writeFunction("writeEncounter('neetDate4b')", "You don't need hypnosis");
			passTime();
			break;
		}
		case "neetDate4a": {
			writeSpeech("player", "", "Alright, let's go. Let's give this another shot. You paying attention?");
			writeSpeech("neet", "", "Yes playerSir!");
			writeSpeech("player", "", "Keep in mind that this could all be a waste of time, and accomplish nothing.");
			writeSpeech("neet", "", "I have faith in you, playerSir!");
			writeSpeech("player", "", "<i>Fuck, tempering expectations didn't work. Her psyche probably can't handle a mindbreak either. Looks like we're doing things the hard way.</i><br>Alright, we're gonna keep things nice, simple, and easy. Watch the pendulum, and we're going to start counting. Visualize a texture with each number, and...");
			writeText("You get into the hypnosis process, slowly lulling her into a suggestible state.");
			writeText("...");
			writeText("After a few hours, her eyes have unfocused a little, like she's on the edge of sleep.");
			writeSpeech("player", "", "neetF? Can you hear me?");
			writeSpeech("neet", "", "... Yes playerSir.");
			writeText("She's far, far from a complete trance, but she's a lot closer than she was before.");
			writeSpeech("player", "", "Alright, listen closely. From now on, you won't hold back anymore. You and I are going to get a lot more intimate together.");
			writeSpeech("neet", "", "... What do you mean 'intimate'?");
			writeText("She responds, only half-awake. Her way of thinking is much different than yours, so this may take awhile.");
			writeText("...");
			writeText("Two hours of excruciatingly slow explanation after explanation later, neetF's psyche has been rebuilt.");
			writeText("The main slowdown is you basically need to rewire her general line of thinking.");
			writeSpeech("player", "", "No, see, there's nothing to be embarrassed about. When you're around me, everything will just feel natural.");
			writeSpeech("neet", "", "... What kind of 'natural'?");
			writeSpeech("player", "", "Fuck it. Whatever.");
			setTrust('neet', 101);
			writeFunction("writeEvent('neetA-1')", "Snap your fingers");
			break;
		}
		case "neetDate4b": {
			writeSpeech("player", "", "No. You don't need hypnosis.");
			writeSpeech("neet", "", "W-what? But you said-");
			writeSpeech("player", "", "I said I'd help you. neetF, it's time to stop this way of thinking. Hypnotism is a tool, it's something I use to take what I want. It isn't some magical fix-all that'll help you make friends.");
			writeSpeech("neet", "", "I see...");
			writeText("She looks away, trying to avoid eye contact. You place your hand on her shoulder.");
			writeSpeech("player", "", "Pushing yourself in ways your body isn't comfortable with builds resentment towards the people you're forcing yourself to be around. I understand you have issues holding you back; I'm not going to sugarcoat it. But hypnosis isn't the answer for you.");
			writeText("She looks downcast. Not in a 'verge of tears' way, but in more of a 'I'm used to this' sort of beaten down look to her.");
			writeSpeech("player", "", "I can help you though.");
			writeText("And she perks back up.");
			writeSpeech("player", "", "More of this is enough. You and I.");
			writeSpeech("neet", "", "... Okay. But-");
			writeSpeech("player", "", "And if it doesn't work out, then we can try.");
			writeSpeech("neet", "", "Thank you... I um... I could use a shower, I usually take one after getting home, sorry.");
			writeSpeech("player", "", "That's fine. We can talk more later.");
			writeSpeech("neet", "", "Yes, please. Thank you again.");
			writeText("She's got a lot to think through, so she quickly leaves the room.");
			writeSpeech("player", "", "I wonder if I should go...<br>Nah, she probably won't take that long. I'll just have a short nap.");
			writeText("...");
			writeText("You wake back up and stretch out just as someone walks back into the room.");
			writeSpeech("player", "", "Oh hey, you're-");
			writeBig("images/neet/b1-1.jpg", "Art by Enoshima Iki");
			writeSpeech("neet", "towel.jpg", "You're... You're still...<br>By 'later', you meant...");
			writeSpeech("player", "", "Ah, sorry.");
			writeText("You turn away to give her a little privacy. She looks good though, suprising she's the type to walk around naked, but she does live alone after all.");
			writeSpeech("neet", "towel.jpg", "Y-you can look now.");
			writeBig("images/neet/b1-2.jpg", "Art by Enoshima Iki");
			writeSpeech("neet", "towel.jpg", "S-sorry... I thought that by 'later'-");
			writeSpeech("player", "", "It's totally my fault, don't worry about it. I should have been more clear.");
			writeSpeech("neet", "towel.jpg", "Y-you're so calm...<br>S-sorry... I should be able to keep my cool, since we're... We're...");
			writeSpeech("player", "", "In a relationship?");
			writeBig("images/neet/b1-3.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "there's no need to worry, everyone has their own speed. You get nervous when touched, it's just something to work on, alright?");
			writeText("She remains silent, but nods.");
			writeSpeech("player", "", "Alright, I'll see you later then, okay? We'll have at our first attempt tomorrow here, alright?");
			writeText("She nods again.");
			setTrust('neet', 100);
			writeFunction("changeLocation('street')", "Make your way home");
			break;
		}
		case "neetA-1-1": {
			writeSpeech("player", "", "Morning Tia, how're you feeling?");
			writeSpeech("neet", "", "I'm very well, *sir.");
			writeText("She seems pretty relaxed, a good sign that she's still hypnotized.");
			writeSpeech("neet", "", "Do you think you and I could walk home together again today? I'd like you to watch me-<br>... Wait... Something feels off...");
			writeText("She hesitates, her inhibitions are suppressed but not gone entirely. There's a chance she could break free, sending you back to square one.");
			writeFunction("writeEncounter('neetA-1-2')", "Walk her home");
			writeFunction("changeLocation(data.player.location)", "Maybe tomorrow");
			break;
		}
		case "neetA-1-2": {
			writeEvent("neetA-1-2");
			passTime();
			raiseTrust('neet', 1);
			break;
		}
		case "neetA-2-1": {
			writeSpeech("player", "", "Morning neetF. How're you feeling?");
			writeSpeech("neet", "", "Hello *sir. Quite relaxed, thank you. Would you care to walk me home again today?");
			writeText("It seems like she isn't hung up on the hypnosis anymore, maybe it stuck?");
			writeFunction("writeEncounter('neetA-2-2')", "Walk her home");
			writeFunction("changeLocation(data.player.location)", "Maybe tomorrow");
			break;
		}
		case "neetA-2-2": {
			writeEvent("neetA-2-2");
			passTime();
			raiseTrust('neet', 1);
			break;
		}
		case "neetA-3-1": {
			writeSpeech("neet", "", "Good morning, *sir. Would you care to walk home with me today?");
			writeFunction("writeEncounter('neetA-3-2')", "Walk her home");
			writeFunction("changeLocation(data.player.location)", "Maybe tomorrow");
			break;
		}
		case "neetA-3-2": {
			writeText("The two of you walk to neetF's place together.");
			switch (checkTrust('neet')) {
				case 103:
					writeSpeech("neet", "", "I do make the effort to make myself appear presentable.");
					writeSpeech("player", "", "I can tell. As cute as you are, I wouldn't be walking home if you smelled like fish.");
					writeSpeech("neet", "", "Do you not like fish?");
					raiseTrust('neet', 1);
				break;
				case 104:
					writeSpeech("neet", "", "$500 is the very least you should budget yourself for a modern computer, it's the minimum of all the essential parts put together. Any further savings means hamstringing yourself on some important element, dooming your system to be obsolete or difficult to upgrade in a year, maybe three if you're careful.<br>Unless of course you temporarily used an integrated graphics card... Hmm...");
					raiseTrust('neet', 1);
				break;
				case 105:
					writeSpeech("neet", "", "It's important that hygiene is viewed as a priority, otherwise you won't feel clean after you bathe, and you won't appreciate the value of it. I make it a point to reward myself for the good behavior.");
					raiseTrust('neet', 1);
				break;
				case 106:
					writeSpeech("neet", "", "What do you think people pass the time talking about in tropical regions? The weather doesn't change there often, how do you break the ice in a country where ice is difficult to naturally form?");
					raiseTrust('neet', 1);
				break;
				case 108:
					writeSpeech("neet", "", "I'm not religious myself. I think it'd be nice if there were a god, but if I started believing because I wanted a reward, it wouldn't be genuine.");
					raiseTrust('neet', 1);
				break;
				case 109:
					writeSpeech("neet", "", "Have you noticed how many good-looking people attend our school? Where are all the disfigured or unattractive people? It isn't just chance, I've been in the system and I saw that students are manually approved by the principal, and sometimes the only part of their file viewed was the picture.");
					raiseTrust('neet', 1);
				break;
				default:
					writeSpeech("neet", "", "Ah, sorry, I'm rambling again. What about you? We always talk about me... Oh, actually I just remembered-");
			}
			writeText("The conversation continues on, neetF talking about whatever comes to mind.");
			writeText("...");
			writeSpeech("neet", "", "So, what shall we do today?");
			writeFunction("writeEncounter('neetProposal')", "Commit to a hypnotic relationship together");
			writeFunction("writeEncounter('neetSexRepeat')", "Bust out a condom");
			writeFunction("writeEncounter('neetTitjobRepeat')", "Ask for a titjob");
			writeFunction("changeLocation(data.player.location)", "Just head home for the day");
			break;
		}
		case "neetTitjobRepeat": {
			writeEvent("neetTitjobRepeat");
			passTime();
			break;
		}
		case "neetSexRepeat": {
			writeEvent("neetSexRepeat");
			passTime();
			break;
		}
		case "neetProposal": {
			writeSpeech("neet", "", "I was hoping to get more practice with my breasts today. I looked up some of the trending sexual acts of today, but I'm not sure Id like to try anal. With so much work, I'm not sure what the payoff-");
			writeSpeech("player", "", "neetF.");
			writeSpeech("neet", "", "Yes?");
			writeText("The air is a little serious as you consider what she told you before. Committing to her training through hypnosis is a pretty demanding task, it'd be tough to keep at being a counselor at the same time.");
			writeText("Still, she's eager to learn and pretty cute. Will you follow this path? Having her as a fuckbuddy isn't too bad of a deal, so you could choose to just head home for the day instead.");
			writeFunction("writeEncounter('neetEnding1')", "Commit to neetF");
			writeFunction("changeLocation(data.player.location)", "Head home and sleep on it");
			break;
		}
		case "neetEnding1": {
			writeSpeech("player", "", "Were you serious about what you said before? You're willing to let me hypnotize you, and we'll begin your training for real?");
			writeText("She puffs up her chest, doing her best to look serious.");
			writeSpeech("neet", "", "Absolutely.");
			writeSpeech("player", "", "Alright. This isn't a one-day process. Training your mind will be the easy part, training your body will be a lot more work. By the time I'm done with you-");
			writeSpeech("neet", "", "I'll be able to keep up with anything you desire. I'm ready.");
			writeText("You pull out your pendant.");
			writeSpeech("player", "", "Watch carefully, alright? Relax and just focus on counting down from twenty...");
			writeText("...");
			writeText("The daily routine is demanding for the both of you. It certainly isn't unpleasant though.");
			writeBig("images/neet/cumEating1.jpg");
			writeBig("images/neet/cumEating2.jpg");
			writeText("Transforming her from a quick-to-blow firecracker into a proper nymph is tough. Her body doesn't visually change to much, it's mostly a matter of her attitude, stamina, and perversion.");
			writeBig("images/neet/pOutfitBlowjob.jpg");
			writeText("You've got her consent every step of the way, although some parts of the training leave her pent up and wanting more, but letting her stew sometimes is part of the process.");
			writeBig("images/neet/clothedTitfuck.jpg");
			writeText("But in the end progress is progress.");
			writeFunction("writeEncounter('neetEnding2')", "Much later...");
			break;
		}
		case "neetEnding2": {
			writeSpeech("neet", "", "Okay, come in.");
			writeBig("images/neet/a4-1.jpg");
			writeSpeech("neet", "", "Do you like it? I was worried the saleswoman would...<br>Well, she was really nice and supportive. When she found out I was buying it for my special someone, she said you'd start drooling right away. I told her you didn't drool, but-");
			writeSpeech("player", "", "You look incredible, neetF.");
			writeSpeech("neet", "", "You know, you could use your hypnosis to help me out, remove the anxieties...");
			writeSpeech("player", "", "No way, your nervousness is part of your charm.");
			writeSpeech("neet", "", "... You can be quite illogical at times, playerF. I must be quite charming right now, then.");
			writeSpeech("player", "", "Absolutely beautiful.");
			writeBig("images/neet/a4-2.jpg");
			writeSpeech("neet", "", "Flattery will... Well, it's nice to hear, playerF. It took a while to make myself presentable, I'm glad the effort paid off.");
			writeSpeech("player", "", "So, you ready to get started?");
			writeSpeech("neet", "", "Ah, lemme get comfortable.");
			writeBig("images/neet/a4-3.jpg");
			writeText("You start undressing, making sure to enjoy neetF's hungry gaze on your body.");
			writeSpeech("player", "", "Oh, I think I know that look. Is it time for a test already?");
			writeSpeech("neet", "", "Yes~! I know I can do it this time!");
			writeText("The 'girlfriend' test is something she came up with as a little extra motivation. If she can fuck you unconscious while staying conscious herself, she's allowed to do 'lovey-dovey' stuff with you in public.");
			writeSpeech("player", "", "Honestly, it seems like sometimes you're hungrier for hand-holding then you are for fucking.");
			writeSpeech("neet", "", "I'm very sure I can be hungry for both at once~");
			writeSpeech("player", "", "Fine, hope you're ready. I didn't reshape you so I could be gentle, you know.");
			writeBig("images/neet/a4-4.jpg");
			writeSpeech("neet", "", "Ooouh~ Hurry~ I want it fast tonight~");
			writeSpeech("player", "", "Greedy girl.");
			writeSpeech("neet", "", "Ah~<br>Halfway, I feel my pussy spreading, and the walls are clenching around you~");
			writeText("Lately she's gotten in the habit of describing what's going on. It helps her brain focus, keeping her from burning out too quickly.");
			writeSpeech("neet", "", "It feels like my clit is buzzing, gonna cum soon...<br> F-faster, I can feel how fast you're breathing, you're close too.");
			writeBig("images/neet/a4-5.jpg");
			writeSpeech("neet", "", "Ghh~<br>It's so warm... Inside me... The *man I love is cumming inside me...");
			writeSpeech("player", "", "It feels better every day, you really do have a shot at overtaking me someday. Now, how about you get some rest, and-<br>Whoa!");
			writeSpeech("neet", "", "My turn...");
			writeBig("images/neet/a4-6.jpg");
			writeSpeech("neet", "", "I'm in control of the pace now, I'll milk every bit of sperm out of you. You'll be knocked out and I'll be fully pregnant by the time I'm done with you.");
			writeText("She starts bouncing while grinding her hips against you, a technique she took quite a while to master. Still, she gets a <i>lot</i> of use out of it, so it was all worth it in the end.");
			writeSpeech("neet", "", "Fifteen... Sixteen...");
			writeText("She never quit the habit of timing how long you last, how long your refractory period takes, how long you cum on your first shot versus your second, all to ensure there's not a single moment of wasted effort.");
			writeSpeech("neet", "", "Seventy-eight, hah~");
			writeText("She still has trouble keeping herself from cumming too quickly, but she's gotten better at riding through it and continuing on right away.");
			writeBig("images/neet/a4-7.jpg");
			writeSpeech("neet", "", "Ooh~<br>Cumming again already? Sixteen seconds early, Is the lingerie working?");
			writeSpeech("player", "", "It... It does look really good on you.");
			writeSpeech("neet", "", "At this rate you've got no chance. Now, less than two minutes for you to rest, then round three-");
			writeSpeech("player", "", "Nope, I'm flipping the schedule now.");
			writeSpeech("neet", "", "Ah~<br>How are you still hard? Quit making this difficult for me, I'm gonna win this time!");
			writeText("...");
			writeBig("images/neet/a4-8.jpg");
			writeSpeech("neet", "", "Hah... Is it... Are you... Huff...");
			writeSpeech("player", "", "Throwing in the towel already? I can still keep going.");
			writeSpeech("neet", "", "If... If you can keep going... Then I'm not done either...");
			writeText("She's still got a lot of work to go, but she's making progress. You've got plenty of time to keep going.");
			writeSpeech("player", "", "We've got all the time in the world, neetF.");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "neetBeach1": {
			writeBig("images/scarf/beachNeet1.jpg");
			writeSpeech("Playboy", "images/none.png", "Cmon girl, we just wanna be friends! You're so pale, you'll burn, so how about me and my friend get you into some shade.");
			writeBig("images/scarf/beachNeet2.jpg");
			writeSpeech("neet", "bikini.jpg", "Ah, *sir! Please, help!");
			writeSpeech("Playboy", "images/none.png", "Cmon glasses, don't be like that. *He's got places to be, so why don't we have some fun?");
			writeFunction("writeEncounter('neetBeach2')", "Save her");
			writeFunction("changeLocation(data.player.location)", "Ignore her, focus");
			break;
		}
		case "neetBeach2": {
			writeText("You grab neetF by the hand, more on instinct than anything else.");
			writeSpeech("player", "", "Fuck off, she's my cinnamon roll.");
			writeText("You pull neetF away from the crowd, not quite sure where you're heading. Eventually the crowds around you are gone, and you have no idea where you are.");
			writeSpeech("player", "", "Okay, gotta focus... neetF, you're holding me a bit tight.");
			writeSpeech("neet", "bikini.jpg", "Ah, sorry... Thank you again for helping me.");
			writeBig("images/scarf/beachNeetSex1.jpg");
			writeSpeech("player", "", "Wait... I should... What was I doing again?");
			writeSpeech("neet", "bikini.jpg", "We're enjoying the beach, sir.<br>I... I never know what to do in those sorts of situations.");
			writeSpeech("player", "", "It's fine, you gotta stand up for yourself...");
			writeText("The words are flowing out of your mouth like you're reading from a script as you rub the bridge of your nose.");
			writeSpeech("neet", "bikini.jpg", "Stand up for myself...");
			writeBig("images/scarf/beachNeetSex2.jpg");
			writeSpeech("neet", "bikini.jpg", "Like this?<br>I've been getting looks all day, but I like yours the most.");
			writeText("More confident than you've ever seen her, she gently pushes you down.");
			writeSpeech("player", "", "I should go, I need to find-");
			writeSpeech("neet", "bikini.jpg", "It's alright, sir, you don't need to be anywhere but here. Just relax...");
			writeBig("images/scarf/beachNeetSex3.jpg");
			writeText("Before you fall into an endless loop of pleasure, you can hear a voice whispering into your ear.");
			writeSpeech("scarf", "bikini.jpg", "You put up a good resistance, child. Just relax, enjoy.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "neetA-1", name: "Hypnotism Taking Hold",},
	{index: "neetA-1-2", name: "Frustration",},
	{index: "neetA-2-2", name: "Relaxation",},
	{index: "neetTitjobRepeat", name: "Titjob",},
	{index: "neetSexRepeat", name: "Sex",},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "neetA-1": {
			writeText("She gasps suddenly as you snap your fingers, like she'd been holding her breath. She starts unbuttoning her shirt and quickly starts taking her clothes off.");
			writeSpeech("player", "", "neetF? You alright?");
			writeText("You told her to drop her inhibitions, maybe this is what she's been wanting to do this whole time?");
			writeText("She throws her clothes aside in heaps and lays back on her bed before starting to stroke herself.");
			writeBig("images/neet/a1-1.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "No sense of self control, huh?");
			writeSpeech("neet", "", "Khh... Hot... Please, don't leave...");
			writeSpeech("player", "", "I'm not in a hurry.");
			writeBig("images/neet/a1-2.jpg", "Art by Enoshima Iki");
			writeSpeech("neet", "", "Hah... Hah... Watching...");
			writeText("She frantically rubs at her pussy, stopping only to pinch her clit between her fingers. Soon enough...");
			writeBig("images/neet/a1-3.jpg", "Art by Enoshima Iki");
			writeSpeech("neet", "", "Ah~! Hah~!");
			writeText("Breathing heavily, her body shakes in orgasm, and then she lays her head back like a doll with cut strings.");
			writeText("She's exhausted, and so are you from so many hours of hypnosis and attempting to rework her mind.");
			writeText("You'll need to continue this later.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetA-1-2": {
			writeText("The two of you leave the school together.");
			writeBig("images/neet/a2-1.jpg");
			writeSpeech("neet", "", "Maybe it's something in the air?");
			writeText("She pouts, frustrated at being confused by something, as she holds your arm tightly against her breasts.");
			writeSpeech("player", "", "Maybe your perfume smells different?");
			writeText("Telling her it's nothing would probably just make her more convinced something's off. Just one detail her brain latches onto could cascade out and break her trance.");
			writeSpeech("neet", "", "I don't wear any. Maybe it's you...");
			writeText("She leans in to smell your shirt, and her eyes unfocus.");
			writeSpeech("player", "", "You alright?");
			writeSpeech("neet", "", "You smell nice...");
			writeText("She leans in to breath deeply from your shirt, then starts walking on tiptoes so she can rub her nose on the bare skin of your neck. One hand begins to go lower, underneath her skirt, and you look around to make sure nobody's watching. The thought of somebody seeing you in this situation in public...");
			writeSpeech("player", "", "Maybe we should wait until we're at your place.");
			writeSpeech("neet", "", "Nff... R-right! <br>Right, I always wait until I get home, no matter how much I wanna do it... <br>Something's different about today.");
			writeText("...");
			writeBig("images/neet/a2-2.jpg");
			writeSpeech("neet", "", "I just can't place it, it's driving me crazy...");
			writeSpeech("player", "", "Is there something different about your routine today?");
			writeSpeech("neet", "", "No, I don't think so. I pleasure myself in the morning, go to school, meet you, come home, pleasure myself again...");
			writeSpeech("player", "", "I suppose I'll help you out this time while you try to think it through.");
			writeBig("images/neet/a2-3.jpg");
			writeSpeech("player", "", "Maybe it's how much you're leaking today? How does this normally go?");
			writeSpeech("neet", "", "I usually just rub between my labia, I'm always wet this late in the day, although not this much. I keep going until I feel bored... And then just go bottomless and rub myself throughout the rest of the... The day...");
			writeSpeech("player", "", "How many times do you usually cum?");
			writeSpeech("neet", "", "I think I might be more sensitive... Normally it... It takes me an hour... To...");
			writeBig("images/neet/a2-4.jpg");
			writeSpeech("neet", "", "...!");
			writeText("She goes quiet and bucks a little as she cums, her inquisitive train of thought completely derailed.");
			writeSpeech("player", "", "You alright?");
			writeSpeech("neet", "", "Mhmm...<br>M-more... I wanna go farther.");
			writeSpeech("player", "", "You realize what you're asking for, right? I think I've got some condoms in my wallet.");
			writeText("Eyes closed and chest heaving, she nods.");
			writeText("...");
			writeBig("images/neet/a2-5.jpg");
			writeSpeech("player", "", "You ready?");
			writeSpeech("neet", "", "You're quite... Quaint.");
			writeSpeech("player", "", "Quaint?");
			writeSpeech("neet", "", "Ah, apologies. I have trouble expressing myself when nervous... <br>My heart is beating quite loudly, let's start before I start rambling again.");
			writeBig("images/neet/a2-6.jpg");
			writeSpeech("neet", "", "...!");
			writeText("Slowly but surely you penetrate her. Her usual unreadable expression has shifted, showing her mind at a loss for words.");
			writeSpeech("player", "", "You okay?");
			writeSpeech("neet", "", "Y-yes...");
			writeText("Carefully you pull you, the only sound between you is the wet squish of flesh on flesh.");
			writeText("Her eyelids flutter and her cheeks grow redder. It's tough to hold back and not go full force, but at this point you're worried you'll break her.");
			writeSpeech("neet", "", "I-it's tingling!");
			writeBig("images/neet/a2-7.jpg");
			writeSpeech("neet", "", "...!");
			writeText("You can see it slowly creeping up her body, a tense shiver. You keep at your pace exactly to make sure she rides it out for as long as possible.");
			writeSpeech("neet", "", "*Sir, I love you-");
			writeText("Her hands shoot up to cover her mouth as she shocks herself out of her stupor. But you pull her hand away to relax her with a soft kiss, and her body untenses.");
			writeText("Her eyelids flutter again and she lowers her head onto her pillow, her breathing grows softer and she closes her eyes.");
			writeSpeech("player", "", "neetF?");
			writeSpeech("neet", "", "Mmm?");
			writeText("She looks barely conscious, the day must've been a lot for her already. You pull out, neetF letting out a soft sigh as you do.");
			writeSpeech("player", "", "You need some rest. Sleep tight, alright?");
			writeSpeech("neet", "", "Mhmm...");
			writeText("You draw a blanket over her and stretch out as you prepare to get dressed. You're a bit pent-up now, but you've pushed her limits as far as you can today.");
			writeText("By the time you're ready to leave, it's already really dark.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetA-2-2": {
			writeText("The two of you walk to neetF's place together.");
			writeSpeech("neet", "", "It can feel a lot colder when walking alone. Not cold, cold, but the chill that creeps up your face when you think about nothing. Perhaps it's a psychological effect of loneliness?");
			writeText("The conversation continues on, neetF talking about whatever comes to mind.");
			writeText("...");
			writeBig("images/neet/a3-1.jpg");
			writeSpeech("neet", "", "How is this? I'm afraid I'm not quite experienced, but with practice I'm sure to improve.");
			writeSpeech("player", "", "It... It feels great, but-");
			writeSpeech("neet", "", "This is your own fault, really. I wouldn't have minded being woken back up, and I certainly wouldn't have minded you stay the night. I understand this isn't quite the usual circumstances for new couples, but please accept your 'punishment boobs'.");
			writeText("She continues her practice, it's hard to hold on for much longer. She's shifted around at least five different positions and titjob styles before settling on one where she uses the weight of her breasts to massage your cock, while putting pressure from the sides with her arms.");
			writeSpeech("neet", "", "Ah, apologies, I've slipped into phrasing that might be a bit too casual for this setting. Despite our feelings for each other, we aren't yet a new couple. I'd like to ensure mutual satisfaction for-");
			writeSpeech("player", "", "I'm getting close!");
			writeSpeech("neet", "", "Close? Ah, you mean that this style is to your liking.<br>Oh, I've just remembered, I've been meaning to tell you I figured out what was distracting me last time. Once I realized what had happened and started down a proverbial rabbit hole-");
			writeBig("images/neet/a3-2.jpg");
			writeSpeech("neet", "", "-The hypnotic state you implanted upon me wore off.");
			writeText("She says it so nonchalantly as you start spurting from between her breasts.");
			writeSpeech("neet", "", "A mess. Luckily I've kept towels warmed since our last meeting. Please remain still and soak in the afterglow, I'll handle the mess. We'll continue to experiment, many of the forums I peruse suggest that making a mess of me would be more fun.<br>You know, right after I cum, I always try to-");
			writeSpeech("player", "", "H-hold on, back up. You aren't hypnotized anymore? Yet you're still fine with this?");
			writeText("She reaches down off the side of the bed to open a little plastic device made for towel warming.");
			writeSpeech("neet", "", "Indeed. My discomfort for skinship has been severely decreased, the effect is likely permanent, but I assume it's a result of the improvised shock therapy I underwent. I'm fully in control of my faculties again, and feel as though I'm better for the effort.");
			writeText("You've never had someone break through a trance and have a positive reaction to it, the situation is pretty flooring. You sit up as neetF wipes your abdomen clean.");
			writeSpeech("player", "", "So... What do we do now?");
			writeSpeech("neet", "", "I think it should be quite obvious.");
			writeBig("images/neet/a3-3.jpg");
			writeSpeech("neet", "", "I'd like to continue to enjoy your company, of course.");
			writeText("She takes hold of your arm and gives you a heart-melting smile.");
			writeSpeech("neet", "", "I understand I'm not quite the typical lover someone of your stature might take. Given your rate of sexual resistance and the files I kept on you, I understand you're quite voracious.<br>I cannot keep pace with you as a girlfriend, but I'm confident in my ability to improve.");
			writeSpeech("player", "", "Girlfriend? Like a serious one?");
			writeSpeech("neet", "", "For now this, what we have now, will be more than enough for me.<br>If you'll have me, of course. <br>I'm sure such will be a difficult challenge for me, although I do have a suggestion.");
			writeSpeech("player", "", "What's that?");
			writeSpeech("neet", "", "Regardless of whether my inability to remain conscious long enough to fully satisfy your insatiability is physical or mental, the clearest answer to me is another round of hypnosis. Now that I've already been under, and that we can remain together even if it fails, I'm sure I can remain calm enough for you to transform me into someone who can meet your appetite.<br>I know it'll be a great commitment, but-");
			writeSpeech("player", "", "You're asking me to turn you into my personal nymph?");
			writeSpeech("neet", "", "A rigorous, hypnosis-based training regimen over the course of months, yes. I understand it's a lot to decide on, even more to plan for. I won't ask you to answer now, I find a good night's rest is the best solution for a difficult problem.");
			writeSpeech("player", "", "I'll think about it. Good night, neetF.");
			writeText("You get dressed and neetF waves you off. The sky has grown dark already, a lot of time has passed since neetF decided to experiment with how to satisfy you.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetTitjobRepeat": {
			writeBig("images/neet/a3-1.jpg");
			writeSpeech("neet", "", "I certainly believe I'm improving, judging by how you sound. Of all the positions, is this one your favorite?<br>Ah, you don't need to focus on answering. Trying to gleam your arousal nonverbally is an important part of my training.");
			writeSpeech("player", "", "Mmmgh~");
			writeSpeech("neet", "", "Perhaps I should try coming up with some arousing dialogue? Perhaps an innuendo on the use of the word 'coming', or offering to lick up the mess from your abdomen afterwards?");
			writeBig("images/neet/a3-2.jpg");
			writeSpeech("neet", "", "Oh, good, you're cumming. Now, was that the result of my suggestion of sexually charged dialogue, or the natural result of my breastwork? Oh, what if I were to make a pun off the word 'breaststroke'? <br>We'll need to go another round, I'll be sure to log your times to climax in a spreadsheet. How long is your refractory period?<br>Actually, don't answer. The results will be more conclusive if I figure it out myself.");
			writeText("...");
			writeText("As focused as she's ever been, neetF waves you off as you get dressed, getting started filling out tables and generating charts based on her performance today.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetSexRepeat": {
			writeSpeech("player", "", "You're sure you can handle this? this?");
			writeSpeech("neet", "", "Indeed. Positioning is important. Not only to arouse you with other parts of my body, such as my butt, but also to ensure I thoroughly work out each muscle group individually.");
			writeSpeech("player", "", "Alright...");
			writeSpeech("neet", "", "Ah, I'd like to grow accustomed to your usual pace. It's important to grow used to what you fully desire, so that you are fully satisfied by the end of our sessions.<br>Yet... If you could perhaps err on the gentler side...");
			writeSpeech("player", "", "We have plenty of time to enjoy ourselves. Just relax.");
			writeSpeech("neet", "", "Relax... Like I'm sudsing in a lovely bubble bath...");
			writeBig("images/neet/sex2.jpg");
			writeSpeech("neet", "", "O-oh my. I'd planned to r-record data afterwards, but...");
			writeSpeech("player", "", "Don't worry about any of that. It's your body that needs training today, just focus on remembering as much of this feeling as you can.");
			writeSpeech("neet", "", "I don't think this will be difficult to remember...<br> We should try different angles too. I know you're the sort of person who enjoys inflicting pleasure, so experiment yourself to your heart's content...");
			writeText("...");
			writeBig("images/neet/sex3.jpg");
			writeSpeech("neet", "", "Hah... M-my goodness... I still need more practice, don't I?");
			writeSpeech("player", "", "You're still up and I already came, you're doing quite well.");
			writeSpeech("neet", "", "Y-you're sure?<br>The c-cum is quite sticky...");
			writeSpeech("player", "", "Want a towel?");
			writeSpeech("neet", "", "No... This afterglow is much better than my usual self-pleasure sessions...<br>Will I see you again tomorrow?");
			writeSpeech("player", "", "I'll be around. You make sure to get some rest, alright neetF?");
			writeSpeech("neet", "", "Goodnight, playerF.");
			writeFunction("changeLocation(data.player.location)", "Finish");
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
	{index: "neetNotification", trust: 3,},
	{index: "neetReward", trust: 100,},
	{index: "neetReward", trust: 301,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "neetNotification": {
			writePhoneSpeech("neet", "", "I have decided how to word what I would like you to do. Please come to the computer lab this evening if you have the time.");
			writePhoneSpeech("neet", "", "Please come to the computer lab this evening even if you do not have the time.");
			writePhoneSpeech("neet", "", "The computer lab is in the east hallway.");
			writePhoneSpeech("neet", "", "Please ignore that previous text, as I remembered that you have been in the lab before. I do not wish to insinuate you will get lost. Please come to the lab when it is convenient. Thank you.");
			break;
		}
		case "neetReward": {
			writePhoneImage("images/neet/reward2.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("neet", "", "You've finished all of neetF's content for this version, more is on the way!");
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