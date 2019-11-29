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
	tags: "No scenes yet, sorry!",
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
			writeText("this time she's at a computer instead of preparing for bed.");
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
			writeText("You take a seat, Tia sitting across of you. There's a cold tension in the air. With how experienced she is with tech, she likely has some kind of master plan involving backups. You'll need to keep on your toes to stay out of prison.");
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
			writeText("This is the moment of decision, you have an important choice ahead of you. this is you opportunity to hypnotize her, even a half trance would help you get her to open up.");
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
			writeFunction("changeLocation('street')", "Go back");
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
	{index: "neetReward", trust: 101,},
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