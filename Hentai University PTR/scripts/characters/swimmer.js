var character = {index: "swimmer", fName: "Naomi", lName: "Greens", trust: 0, encountered: false, textEvent: "", met: false, color: "#8DB7D0", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};

var logbook = {
	index: "swimmer", 
	desc: "A student on the swimming team. She's also a backup for the volleyball team, though she tends to only fill in there if there's been an injury, or during practice.",
	body: "Sun kissed, with tan lines. Her body makes it clear that she spends much of her time in a swimsuit outdoors.",
	clothes: "Wears her school uniform relaxed, in a way that shows her tan lines off obviously.",
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
	{index: "swimmer2", name: "Your door suddenly explodes into a rapid series of knocks.", location: 'playerOffice', time: "MorningEvening", itemReq: "", trustMin: 20, trustMax: 35, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "placeholder", name: "", location: '', time: "", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "swimmer1": {
			passTime();
			setTrust('swimmer', 30)
			addFlag("coach", "swimmermet")
			writeText("You've been waiting for quite a while for swimmerF to get to your office. It's been nearly a half an hour since coachF said she sent her...");
			writeText("You're picking up your phone to call coachF and ask if she's seen swimmerF, when you finally hear a knock at your door.");
			writeSpeech("player", "", "The door is open, come on in.");
			writeText("swimmerF strolls into your office, seemingly unaware of how late she is.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Hi, playerF! coachF told me something about... Uh.. 'a student goodness program' or something and she asked me to come see you!");
			writeSpeech("player", "", "'Student Wellness Program.' And you're a little late, swimmerF. Did something happen?");
			writeText("She looks a little embarassed and looks away from you.");
			writeSpeech("swimmer", "", "I'm not <i>that</i> late, am I?");
			writeSpeech("player", "", "Getting close to an hour late, actually.");
			writeSpeech("swimmer", "", "Oof. Sorry, playerH. I just... I got distracted on my way here. I got to talking with a friend I saw in the hallway, then I had to go to the bathroom, then I forgot my backpack in the gym, so I had to go back there, and then when I got there I got caught up talking to orangeF about...");
			writeText("You swear, she doesn't even stop to breathe. And this sentence never ends.");
			writeSpeech("player", "", "It's alright swimmerF. You were late, that's fine. And from the sound of it, it lines up pretty well with what I've heard from your teachers.");
			writeText("She looks down again, stopping her endless runon sentence as you continue.");
			writeSpeech("player", "", "That's part of the reason I asked to see you, swimmerF. It seems like... Well, I'm not trying to be rude, but do you have trouble focusing on things? In or out of class?");
			writeSpeech("swimmer", "", "I guess, playerH. I mean... I just tend to get distracted, you know? Like, I start doing or working on something, then something else comes up and I drop what I'm working on, then I never get back to it and suddenly I have three half finished assignments and it's time for class.");
			writeSpeech("player", "", "It's not an uncommon problem, swimmerF. I may have a way to help you with that. sportsF had a similar problem with her Organic class, and it helped her.");
			writeSpeech("swimmer", "", "I'll be honest, playerT playerF, if I got half the improvement sportsF saw in her class, I'd do just about anything. Like, I don't know what you did, but she really turned that class around. I have to take that class next semester and I'm actually pretty worried about it, and...");
			writeSpeech("player", "", "Breathe, swimmerF. Take a minute. I practice hypnosis. It's a pretty good tool for helping people focus. It's... It's basically guided meditation. It helped sportsF, it may help you if you want to give it a shot.");
			writeSpeech("swimmer", "", "Sure, I guess. I don't know how much it'll help me, but I'd be willing to give it a shot. So should I like, close my eyes? Lean back? Is it one of those pocket watch dealies? Or am I going to like, watch a spiral spinning? I had a friend once who went to a stage hypnotist and she ended up dancing on stage like a....");
			writeSpeech("player", "", "Like a chicken. Yeah, yeah. It's not really like that. And...");
			writeText("You look at the clock. With how late she got here, you don't really have much time to work with for a session.");
			writeSpeech("player", "", "We're kind of out of time today. But my door is always open, swing by anytime and I'll do my best to help you out.");
			writeSpeech("swimmer", "", "Sounds good, playerT playerF! Now, I've got to take off. I think I have a calc assignment to do. Or was it biology...? Either way, then I've got to...");
			writeFunction("changeLocation(data.player.location)", "You let her ramble as she leaves your office.");
			break;
		}
		case "swimmer2": {
			writeText("You didn't have any meetings set up today...");
			writeSpeech("player", "", "The door is open. Come on in.");
			writeText("swimmerF quickly pushes the door open and closes it behind her. Speaking quickly as she rushes to the seat across from your desk.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Hi, playerF! I'm here to uhh...");
			writeText("She stumbles as she speaks, trailing off as she tries to remember what she came here for.");
			writeSpeech("player", "", "The Student Wellness Program? Well, we didn't have anything scheduled, but if you want to...");
			writeSpeech("swimmer", "", "Kind of? Do you have some time? I have some things I <i>really</i> need to talk to you about.");
			writeFunction("loadEncounter('swimmer', 'swimmer2a')", "Of course, swimmerF.");
			writeFunction("changeLocation(data.player.location)", "Sorry, I'm a bit busy today?");
			break;
		}
		case "swimmer2a": {
			passTime();
			setTrust('swimmer', 40)
			writeText("swimmerF visibly lights up as you say yes.");
			writeSpeech("swimmer", "", "Yeees! See, I need to talk to you about something kinda...");
			writeText("She truns around and looks at the door leerily, before getting up and checking the handle.");
			writeSpeech("swimmer", "", "Whew. Okay, I did lock it. Is this room private?");
			writeText("Well, you did do some soundproofing, and... Wait, hang on.");
			writeSpeech("player", "", "It is. It wouldn't really be good if the counsellor's office wasn't private. We can talk about whatever you need and you don't have to worry about it.");
			writeSpeech("swimmer", "", "Nonono, I mean... Is this room <i>private</i>? Like, do other people know what happens here?");
			writeText("Don't like the sound of that...");
			writeSpeech("player", "", "Whatever happens in this room is private, yes. Whatever goes on is just between us, barring something I'd be legally obligated to tell to the authorities or the staff. So... As long as you didn't kill anyone.");
			writeText("She laughs and gives you a huge smile.");
			writeSpeech("swimmer", "", "Nonono, I just... Aaagh! I thought this would be easier!");
			writeSpeech("player", "", "You thought what would be easier?");
			writeSpeech("swimmer", "", "I want you to fuck me!");
			writeText("The smile never leaves her face as she yells that out, throwing her arms into the air in... Celebration?");
			writeSpeech("player", "", "You want... That doesn't seem...");
			writeText("Floundering, you try to find some way to spin this, but you're coming up short as she starts talking again.");
			writeSpeech("swimmer", "", "Come on, playerF! I saw you with sportsF in the locker room! That day you came by and talked to all of us, and she hurt herself during practice? I forgot some stuff in my locker and when I came back you were balls deep in her and she was calling you 'Master'! It was so fucking hot!");
			writeSpeech("player", "", "You... What?");
			writeSpeech("swimmer", "", "Yeah! She <i>begged</i> you to fuck her stupid! And you made her walk home full of your cum! It was soooo fucking good! I came twice watching you and I came two more times when I got home!");
			writeSpeech("player", "", "I...");
			writeSpeech("swimmer", "", "Come on! Get your pants off!");
			writeFunction("writeEvent('swimmer2b')", "swimmerF quickly falls to her knees in front of you and unzips your pants.");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "swimmer2b", name: "Surprise!"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "swimmer2b": { //Surprise blowjob
			writeBig("images/swimmer/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Fuuck. Looks even better up close.");
			writeText("swimmerF starts to rub her hand over your cock, slowly from top to bottom as it quickly hardens.");
			writeSpeech("player", "", "Would you st-");
			writeText("Before you can finish that sentence, swimmerF rubs her cheek against your now full length, you can feel the slightest touch of her tongue on the underside of your cock and feel her take a deep breath in through her nose, shivering with anticipation as she takes in your smell.");
			writeSpeech("swimmer", "", "Holy shit, that smell is great too.");
			writeBig("images/swimmer/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "You really were blessed with a gift here.");
			writeSpeech("player", "", "Goddamn it! Listen to me. This is all kinds of inappropriate, so please-");
			writeSpeech("swimmer", "", "Oh come <i>oooonn</i> playerT playerL! You fucked sportsF! I saw it. I could go and tell the principal... Or... Well, this sounds way more fun, right?");
			writeText("She starts to lick as you try to keep your voice level. You can make this work. Just gotta think on your feet.");
			writeSpeech("player", "", "Fuck it! Fine!");
			writeSpeech("swimmer", "", "Fuck yes!");
			writeText("swimmerF takes one more deep inhale, taking in your smell before she stops teasing you with her tongue and puts the head of your cock in her mouth.");
			writeBig("images/swimmer/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Gck!~ Mmk!~");
			writeText("As excited as she was to start, she's barely got your cock in her mouth before she's started gagging and struggling to get deeper. She's gripping your legs as hard as she can, you don't think on purpose. A thought crosses your mind...");
			writeSpeech("player", "", "You've never done this before, have you?");
			writeSpeech("swimmer", "", "Mmgooo!~ <b>cough</b>");
			writeSpeech("player", "", "... Don't talk with your mouth full, swimmerF.");
			writeText("swimmerF quickly pulls herself off your cock, smiling like a goofball as she looks up and answers you around light coughs.");
			writeBig("images/swimmer/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "I... Uh... Well. Was it that obvious playerT?");
			writeText("Seriously? You got blackmailed into sex by a horny virgin? You're losing your touch.");
			writeSpeech("swimmer", "", "I always wanted to do something like this, but I never really had a chance, you know?");
			writeSpeech("player", "", "You always wanted to blackmail a teacher, or you always wanted to have sex?");
			writeText("swimmerF starts to slowly suck and lick at your tip as she answers.");
			writeSpeech("swimmer", "", "I mean, mostly the sex. I just knew after I saw you and sportsF I needed to get in on that action, though.");
			writeBig("images/swimmer/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She starts to pick up the pace as she continues.");
			writeSpeech("swimmer", "", "Seeing sportsF turned to a pile of jelly was... Fuuuck, playerT playerL, it was the fucking hottest thing I've ever seen. And I watch a <i>lot</i> of porn.");
			writeText("swimmerF gets back to licking your cock. You're pretty sure she's stopped the actual blowjob because her jaw is too tired. She really isn't very good at this. Tons of enthusiasm and plenty of energy, but she keeps catching you against her teeth and obviously can't get you very deep. But hey, a blowjob is a blowjob.");
			writeSpeech("swimmer", "", "Gotta say though, this is a lot more work than I thought.");
			writeText("swimmerF starts to try and go deeper, every time causing her to gag more and more. On the positive side, the gagging and sweezing around your cock feels much better than her ameteurish tongue work.");
			writeText("And you still need to figure out how to turn this around... Maybe time for a hail Mary.");
			writeSpeech("player", "", "For the love of... Look, swimmerF, tell you what. Fine. You don't tell anyone about what I'm doing on the side, and I'll fuck you. But for the love of all that is holy, <i>watch your teeth</i>.");
			writeText("swimmer pops herself off of you, rubbing her jaw with one hand and idly rubbing your cock with the other.");
			writeSpeech("swimmer", "", "<b>Seriously?!</b> Hell yes! That's what I'm talking about!");
			writeSpeech("swimmer", "", "So how are we gonna... I mean, how should I... I mean, you should... I...");
			writeText("She's flailing. It's pretty obvious she didn't think this far ahead.");
			writeSpeech("player", "", "Look, we'll just keep it to the blowjob today, okay? I'm gonna need some time to make sure none of this comes back to bite me in the ass.");
			writeText("swimmerF looks up at you and pouts.");
			writeSpeech("swimmer", "", "But I wanted to...");
			writeText("You reach down and pat her head as you speak.");
			writeSpeech("player", "", "Look, swimmerF. I won't deny fucking you is going to be a blast, but I have an appointment in a bit, and if we get caught, we're <i>both</i> in a lot of trouble.");
			writeText("Possibly true, but mostly you just need time to think and you don't think she'll be able to come up with a way to...");
			writeSpeech("swimmer", "", "No way, playerT! I came here to lose my virginity and you're going to take it, damnit!");
			writeText("swimmerF leaps to her feet throws her skirt to the floor, laying across the top of your desk and knocking some of your clutter to the ground.");
			writeFunction("writeEvent('swimmer2c')", "This would be nice if it didn't feel like your life was rapidly spinning out of control.");
			updateMenu();
			break;
		}
		case "swimmer2c": { //Not taking no for an answer
			writeBig("images/swimmer/2c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "I was really hoping this would work, so I didn't wear panties...");
			writeText("She takes a minute to line up your cock with her slit and take in the sight before she finishes.");
			writeSpeech("swimmer", "", "Plus anytime I thought about having this thing inside me my panties would get soaked and ruined...");
			writeText("For all her bravado, now that she's here swimmerF seems to be having the same second thoughts that a lot of girls have when they're about to lose their virginity.");
			writeSpeech("swimmer", "", "It's so <i>big</i>. It's seriously going to fit inside me?");
			writeSpeech("player", "", "You could always back out. It's not too late.");
			writeSpeech("swimmer", "", "playerT, I  don't think you understand. I'm not scared. I'm <i>pumped</i>. I can't <i>wait</i>.");
			writeText("You may have underestimated this one.");
			writeSpeech("swimmer", "", "Make me a woman, teach!");
			writeText("Definitely underestimated her. But hey, here's a chance. Time to take it. If you can't win by being clever, there's always brute force.");
			writeSpeech("player", "", "Fine. Tell me, swimmerF. You remember what I did to sportsF? How I made her my bitch?");
			writeText("You start to rub your cock along her cunt as you speak, and she nods slowly and gasps as your head brushes against her clit. She's soaked, you hadn't realized until now. You pass yourself once, twice, along every bit of her cunt and line yourself up to take her.");
			writeSpeech("player", "", "I hope you're looking forward to being my bitch too.");
			writeBig("images/swimmer/2c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Yeee!~");
			writeText("A high pitched squeal escapes her lips as you thrust in. If you had any mercy, or time, or <i>any</i> control over this situation, you'd have taken it slow. Worked your way in bit by bit to make sure she enjoyed it. That would have been ideal.");
			writeBig("images/swimmer/2c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "<b>Fuuuck!~</b> That hurts! I don't... So <i>full</i>!");
			writeSpeech("player", "", "What did you think would happen here, swimmerF? Did you expect something romantic? Something nice and gentle? <i>No.</i> You saw what I did to sportsF. And you wanted it to happen to <i>you</i>. Isn't that right?");
			writeText("Your words come out practiced. Thank god for your hypnotic techniques. This isn't ideal, but if you're right, she was already halfway there. May as well just give her a push and pray.");
			writeSpeech("swimmer", "", "I... I... <b>Fuck!~</b>");
			writeBig("images/swimmer/2c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You feel her convulse under you, cumming wildly from the thought of you fucking sportsF, and the realization that the same thing is now happening to her.");
			writeSpeech("swimmer", "", "Of fucking <b>course</b> it was playerT! Now <b>KEEP GOING</b>");
			writeText("Sounds good to you. You continue wildly thrusting. Trying your best to find any spots to set her off, but mostly just looking to overload her body.");
			writeSpeech("swimmer", "", "<b>This feels! So much better! Than my fingers! <b>Yes!</b>");
			writeSpeech("player", "", "Of course it does. You saw sportsF ruined by this cock. What made you think you'd end up any different?");
			writeText("You keep pumping. You've got to hold it in as long as possible. The longer you last, the more of a chance at least some of this sinks in.");
			writeSpeech("swimmer", "", "I... I didn't want to be different! I wanted <i>this</i>. I wanted to feel like sportsF did!");
			writeText("Hope this works.");
			writeSpeech("player", "", "Then you remember what sportsF called me, swimmerF? Of course you do. That's burned into your mind, isn't it? What am I to sportsF? What am I to <i>you</i>>?");
			writeSpeech("swimmer", "", "But... But I was... You're...");
			writeText("She's too lost in the feeling of your cock inside her, and your words are full of enough half-truths to confuse her addled mind. Her lack of focus may have bitten you in the ass, but it also seems like...");
			writeSpeech("swimmer", "", "You're... swimmerF's... My? <i>mmm-maa...</i>");
			writeText("You've got to finish this now. You can't hold on any longer, and she's right on the cusp. You let go, cumming as deep inside swimmerF as you can push, and you feel her own body cum in response. You keep up the thrusting as much as you can, feeling your legs and core <i>screaming</i> for respite.");
			writeBig("images/swimmer/2c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "<b>MAAASTER! YOU'RE OUR MASTER!</b>");
			writeText("swimmerF screams as you keep moving. Keeping the assault up as long as possible, to try and make this stick.");
			writeText("Finally, you can't keep it up any longer and you have to stop. You pull out slowly. swimmerF is a limp pile on your desk as you get your pants back on.");
			writeSpeech("swimmer", "", "I can't believe that...");
			writeText("Can't help but feel a little bad for the girl, honestly. She deserved her first time to be something more...");
			writeSpeech("swimmer", "", "I can't believe that was everything I ever wanted.");
			writeText("Why is this school so full of weirdos?");
			writeText("Not that you should complain. Or you really have room to talk.");
			writeSpeech("swimmer", "", "Fuuuck, playerT, that was the best! Can we do that again? Wait, should I be calling you Master? Sorry, I'm not really used to that yet. Did you see where my skirt went?");
			writeText("swimmerF is back on her feet and moving around your office. Grabbing... a few of her things, and seemingly not seeing the rest.");
			writeSpeech("player", "", "I... Okay, look. swimmerF. Focus on me for a second.");
			writeText("The response is almost immediate. swimmerF turns and snaps to attention, looking you right in the eye.");
			writeSpeech("swimmer", "", "What do you need, Master?");
			writeText("Okay. That's good. She can and will give you full attention. You just have to hop now that the commands sink in instead of going in one ear and out the other.");
			writeSpeech("player", "", "I need you to not tell anyone about this. In private, you may talk to sportsF and coachF-");
			writeText("She lights up and butts in, losing that focus she had momentarily.");
			writeSpeech("swimmer", "", "<i>coachF too?!</i> That explains sooo much! Also, holy shit, she's got to be a <i>monster</i> in bed! Can I-");
			writeSpeech("player", "", "<b>Focus. On. Me. swimmerF.</b> Don't interrupt. This is important.");
			writeText("She snaps back to attention and stops talking. Good Lord, this girl is going to be a handful.");
			writeSpeech("player", "", "In private, you may talk to sportsF and coachF about what we do. I get the feeling you'll like that. Call me Master in private. If someone asks what we do together, tell them that I am helping you with your focusing problems. Remember, if we get caught doing this, we don't get to do this anymore. So you have to be sure to follow my directions and orders <i>very</i> carefully.");
			writeText("Feels a little bad to put that pressure on her, but that will probably be threat enough for her to take this seriously.");
			writeSpeech("player", "", "Got all that, swimmerF? Repeat it back to me.");
			writeSpeech("swimmer", "", "Of course I've got it, Master! Uhhmm... You're fucking coachF. I can call you Master in private. And talk to coachF and sportsF about fucking you. And... Uhh...");
			writeText("Lord help you.");
			writeFunction("changeLocation(data.player.location)", "You spend the next hour trying to get her to actually remember everything you just said. This is a possible nightmare, but there's nothing to be done for it now.");
			updateMenu();
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
	{index: "swimmerreward", trust: 40,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "swimmerreward": {
			writePhoneImage("images/swimmer/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","That's all for swimmerF for now! I'll be expanding on the students soonish.");
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
					console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var finalResult = true;
					if (encounterArray[number].requirements.includes("loc") == true) {
						var loc = encounterArray[number].requirements.split(`location `).pop().split(`;`)[0];
						var finalLocation = loc;
						if (data.player.gps != true) {
							if (loc.includes(data.player.location) != true) {
								finalResult = false;
							}
						}
						else {
							if (loc.includes(data.player.location) != true && data.player.location != "map") {
								finalResult = false;
							}
						}
					}
					if (encounterArray[number].requirements.includes("item") == true) {
						var item = encounterArray[number].requirements.split(`item `).pop().split(`;`)[0];
						if (checkItem(item) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("time") == true) {
						var time = encounterArray[number].requirements.split(`time `).pop().split(`;`)[0];
						if (time.includes(data.player.time.toLowerCase()) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("parity") == true) {
						var time = encounterArray[number].requirements.split(`parity `).pop().split(`;`)[0];
						switch (parity) {
							case "even": {
								if (data.player.day%2 == 1) {
									finalResult = false;
								}
							}
							case "odd": {
								if (data.player.day%2 == 0) {
									finalResult = false;
								}
							}
							default: {
								//console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
							}
						}
					}
					for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
						var corruptionTarget = data.story[characterIndex].index;
						if (encounterArray[number].requirements.includes("trust " + corruptionTarget) == true) {
							var trust = encounterArray[number].requirements.split(`trust `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) != trust) {
								finalResult = false;
							}
							//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
							var trustMin = encounterArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) < trustMin) {
								finalResult = false;
							}
							//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
							var trustMax = encounterArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) > trustMax) {
								finalResult = false;
							}
							//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("flag " + corruptionTarget) == true) {
							var flag = encounterArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkFlag(corruptionTarget, flag) != true) {
								finalResult = false;
							}
							//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
						}
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
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			if (phoneArray[number].trust != null) {
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
				//console.log("Now examining phone entry "+phoneArray[number].index+phoneArray[number].requirements);
				var finalResult = true;
				if (phoneArray[number].requirements.includes("item") == true) {
					var item = phoneArray[number].requirements.split(`item `).pop().split(`;`)[0];
					if (checkItem(item) != true) {
						finalResult = false;
					}
				}
				for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
					var corruptionTarget = data.story[characterIndex].index;
					if (phoneArray[number].requirements.includes("trust " + corruptionTarget) == true) {
						var trust = phoneArray[number].requirements.split(`trust `+corruptionTarget+`: `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) != trust) {
							finalResult = false;
						}
						//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
						var trustMin = phoneArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) < trustMin) {
							finalResult = false;
						}
						//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
						var trustMax = phoneArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) > trustMax) {
							finalResult = false;
						}
						//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("flag " + corruptionTarget) == true) {
						var flag = phoneArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkFlag(corruptionTarget, flag) != true) {
							finalResult = false;
						}
						//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
					}
				}
				if (finalResult == true) {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
						if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
							if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
								finalMessage = phoneArray[number].index;
							}
						}
					}
				}
				if (finalMessage != "") {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) {
						if (data.story[phoneEventCheck].index == character.index) {
							if (
							data.story[phoneEventCheck].unreadText != true &&
							data.story[phoneEventCheck].textEvent.includes(finalMessage)==false &&
							data.story[phoneEventCheck].textHistory.includes(finalMessage)==false
							) {
								notification(character.index);
								data.story[phoneEventCheck].unreadText = true;
								data.story[phoneEventCheck].textEvent = finalMessage;
								data.story[phoneEventCheck].textHistory += finalMessage;
								console.log(data.story[phoneEventCheck].textEvent);
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