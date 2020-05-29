var character = {index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "", color: "#677b4c",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "green", 
	desc: "A fellow university teacher. Her sister works here too. Her personality flips when around her sister, acting almost like she's in a trance.",
	body: "She's the younger sister, and keeps herself more in shape.",
	clothes: "She prefers to wear green over any other color, it goes well with her sister's outfits.",
	home: "She lives somewhere south of the shopping district, but spends most of her time at the school. ",
	tags: "Drunken Sex, Morning Blowjob",
	artist: "Artist: Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introduction", name: "A teacher is doing paperwork here", location: 'teacherLounge', time: "MorningEvening", itemReq: "File T-1", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "greenQuo", name: "green is hanging out in her sister's office", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 41, trustMax: 41, type: "tab", top: 0, left: 0, day: "both",},
	{index: "filler", name: "green's office is here", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 43, trustMax: 43, type: "tab", top: 0, left: 0, day: "both",},
	{index: "greenBeachReturn", name: "green is here, being hit on by some men", location: 'beach', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
	//index: "greenNewQuo", name: "green's office is here", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
	{index: "greenNewQuo", name: "green's office is here", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introduction": {
			writeBig("images/green/profile.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Hi there, is Ms. "+lName('scarf')+" here?");
			writeSpeech("green", "", "That's me, hello! Or did you mean my sister?");
			writeSpeech("player", "", "Oh, you're related? That's interesting. Could you...");
			writeText("...");
			writeText("You explained the situation to "+fName('green')+".");
			writeSpeech("green", "", "That certainly sounds like her. I'll give her the message, but I don't think she'll listen.");
			writeSpeech("player", "", "Alright, plan B then.");
			writeText("You look around to make sure you and "+fName('green')+" are alone. This is probably overkill for making sure the room gets cleaned, but you were probably going to hypnotize all the teachers at some point.");
			writeSpeech("player", "", "Alright, could you just look at this coin here? Watch it swing back and forth, back and- Wait what?");
			writeText(fName('green')+" suddenly stands up with a angry glare in her eyes.");
			writeSpeech("green", "", "So you're the piece of shit that's been doing all this...");
			writeSpeech("player", "", "Fuck, wait.");
			writeText("She starts charging towards you. You've never actually fought anybody, and your hypnosis has never backfired this hard before. It looks like you have no choice but to fight.");
			writeText("... Or that's what you thought. You hear someone snapping their fingers and "+fName('green')+" goes slump on the ground.");
			writeSpeech("scarf", "", "You shouldn't play with other people's toys, you know.");
			writeBig("images/scarf/profile.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "", "Well I suppose it can't be helped. Two artists like us, we're bound to bump into each other.");
			writeText("Her words are slow and measured, just looking at her makes your brain fuzz over a little.");
			writeSpeech("player", "", "Are you a hypnotist, like me?");
			writeSpeech("scarf", "", "Like you? Well, maybe in some ways. I'm someone who's already had my fun, so to speak. I became bored of the power some time ago, like you will someday.");
			writeSpeech("player", "", "Not going to happen. Not while I have a working dick.");
			writeSpeech("scarf", "", "Oho~. So passionate. I'll take your word for it, I suppose. Was there a reason you tried to hypnotize my sister, perchance? She was moments from killing you, I was very thorough planting traps in her mind in case anyone tried to steal my toy.");
			writeText("...");
			writeSpeech("scarf", "", "Cleaning? You wanted the room to be... Ah, you must be trying to appeal to the principal. Fine. I'll have her clean up after me. I'll be keeping an eye on you. You wanted my sister yes? I could be entreated to... share, her. If you can entertain me.");
			writeSpeech("player", "", "I take it that dicking you here wouldn't be enough?");
			writeSpeech("scarf", "", "Such confidence~! But you are correct. I have a... refined, pallete. Bring me your conquests, and I might teach you some of the spells I've learned over the years.");
			writeSpecial("You've earned "+fName('scarf')+"'s attention! She can improve your hypnosis skills. Someday, you might be able to bring characters you've hypnotized to unlock new scenes!");
			setTrust('scarf', 40);
			setTrust('green', 40);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "greenQuo": {
			writeSpeech("green", "", "Hi, what's up?");
			writeSpeech("player", "", "Hey, I was wondering...");
			if (checkFlag('green', 'bar') != true) {
				writeFunction("writeEncounter('greenBar1')", "'Wanna go out after work?'");
			}
			if (checkFlag('green', 'home') != true) {
				writeFunction("writeEncounter('greenHome1')", "'Can I walk you home after work?'");
			}
			else {
				if (data.player.hypnosis > 3) {
					writeFunction("writeEncounter('greenVictory')", "Snap your fingers");
				}
			}
			if (checkFlag('green', 'work') != true) {
				writeFunction("writeEncounter('greenWork1')", "'Need any help?'");
			}
			else {
				writeFunction("writeEncounter('greenCheat')", "'Could you tell me about tomgirlF's test results again?'");
			}
			writeFunction("writeEncounter('greenCancel')", "Go back");
			break;
		}
		case "greenCancel": {
			unencounter('green');
			changeLocation(data.player.location);
			break;
		}
		case "filler": {
			writeSpeech("green", "", "Hi, what's up?");
			writeText("With scarfF's challenge afoot, the most pressing matter seems to be proving yourself as the top-dog of hypnosis.");
			writeText("Plus, with how scarfF's hypnosis of her sister works, you're not likely to get any helpful tidbits from your green-sweater wearing coworker.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "greenBar1": {
			writeSpeech("player", "", "Hey, greenF, wanna grab a drink with me? My treat.");
			writeSpeech("green", "", "You had me at 'drink', dude. Sure!");
			writeText("...");
			writeText("Alcohol, the great social lubricant. An inebriated greenF ought to be way more relaxed than normal, perfect for hypnosis.");
			writeSpeech("green", "", "Haha! It feels like she's always looking down on you through those thin glasses of hers. It's like, great! You got mom's body, I got dad's. You didn't get those boobs by exercising, so get off my case!");
			writeSpeech("player", "", "I can see how that'd be a handful. <br> So does she wear glasses at home? I don't think I've ever seen her wear any at work.");
			writeSpeech("green", "", "Whaaat? She was wearing them when we... <br>Huh. I don't actually remember her wearing... I don't remember...");
			writeText("greenF looks dazed.");
			writeSpeech("green", "", "I don't... Where... Are we, actually? Where's scarfF? Where's all the people who were chasing us? Where's mom, and who are... Ah, fuck. My head...");
			writeText("greenF looks around for a moment as if she doesn't recognize the bar you're in, before clutching her head.");
			writeSpeech("player", "", "You alright?");
			writeSpeech("green", "", "Yeah... Yeah sorry, just a headache. <br>How about we talk about something else? Or hell, let's just drink before the booze gets warm.");
			writeSpeech("player", "", "Sure. Cheers.");
			writeSpeech("green", "", "Cheers!");
			writeText("...");
			writeText("Soon enough, greenF's headache is gone. And with it went her sense of caution.");
			writeSpeech("green", "", "Woooo~ Y'know, playerF, yer not sho bad. I'm shure if a lady jusht got to know you, they'd shee yer actually a really nishe pershon behind the boring pershonality~");
			writeSpeech("player", "", "You really don't hold your punches while drunk, do you?");
			writeSpeech("green", "", "Nope!");
			writeText("greenF giggles, before yawning.");
			writeText("This is as good a time as any to try to win the contest.");
			writeFunction("writeEncounter('greenBar2')", "Continue");
			break;
		}
		case "greenBar2": {
			writeEvent("greenBar");
			if (checkTrust('scarf') > 99) {
				writeSpeech("scarf", "casual.jpg", "Not a bad plan-");
				writeBig("images/scarf/scarfCasual.jpg", "Art by Enoshima Iki");
				writeSpeech("player", "", "Oh, hey scarfF.");
				writeSpeech("scarf", "casual.jpg", "Hello. As I was saying, not a terrible idea. The problem is that greenF isn't receptive at all while she's sleepy. We share the trait.");
				writeSpeech("player", "", "Well, failures could go worse, I suppose.");
				writeSpeech("scarf", "casual.jpg", "Care for a nightcap?");
				writeSpeech("player", "", "I don't drink, sorry. I'll let you know when I've got the plan figured out.");
				writeSpeech("scarf", "casual.jpg", "Take your time~");
			}
			else {
				writeSpeech("scarf", "casual.jpg", "Not a bad plan-");
				writeBig("images/scarf/scarfCasual.jpg", "Art by Enoshima Iki");
				writeSpeech("player", "", "Jesus!");
				writeSpeech("scarf", "casual.jpg", "Oh, is that what I look like to you? Well, she's out. There's pretty much no chance that she'll remember any of this in the morning you know.");
				writeSpeech("player", "", "Well, failures could go worse, I suppose.");
				writeSpeech("scarf", "casual.jpg", "Care for a nightcap?");
				writeSpeech("player", "", "I'm not enough of an idiot to get drunk around you. I'm headed home, I'll give greenF another shot in the morning.");
				writeSpeech("scarf", "casual.jpg", "Take your time~");
			}
			data.player.time = "Night";
			if (checkFlag('green', 'bar') != true) {
				addFlag('green', 'bar');
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "greenHome1": {
			writeSpeech("player", "", "Hey, greenF, mind if I walk you home today? There's something I wanted to ask you about.");
			writeSpeech("green", "", "Yeah, sure. Heh, hey scarfF, looks like I'll be home before you this time!");
			writeSpeech("scarf", "", "Oh, should I find somewhere else to be tonight?");
			writeSpeech("green", "", "Yeah! Maybe you'll go hit on the neighbor kid again. I got a real man tonight!");
			writeText("...");
			writeText("Hopefully a more casual environment will let you bypass scarfF's protection.");
			writeSpeech("green", "", "Ah, don't mind any of her stuff. She's into those Chinese cartoons.");
			writeText("The place is pretty tidy on first pass, but a lot of the stuff all around is pretty weirdly organized. Like somebody told a robot 'clean this place up' without explaining any of the nuance.");
			writeBig("images/scarf/scarfApron.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "", "So, what're ya hungry for?");
			writeSpeech("player", "", "Oh, uh, anything's fine. You don't really need to make anything.");
			writeSpeech("green", "", "Cmon ya scaredy cat! I'm a pretty good cook. Besides, this is my usual routine. I always start cooking when me and scarfF get home anyways.");
			writeSpeech("player", "", "Anything's fine, something quick would be best. Lemme freshen up first though.");
			writeSpeech("green", "", "First on the left.<br>Ba-ba-dum~<br>Ba-badum~");
			writeText("...");
			writeText("No telling what'll happen if you sneak around too much, or how long you've got, but you do find something kinda interesting.");
			writeText("'Perfecting Finger Technique: Snapping for Masters'");
			writeText("Aside from that, the only really notable things were a ton of anime stuff and surprisingly no scarves. You kinda thought she'd be more fashionable.");
			writeSpeech("green", "casual.jpg", "Yo! Food's ready. Hope you don't mind I got a little more comfortable.");
			writeBig("images/scarf/greenCasual.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Thanks. This yours?");
			writeSpeech("green", "casual.jpg", "Nope! scarfF's.");
			writeSpeech("player", "", "Why would she need a book on snapping? She sounded fine before.");
			writeSpeech("green", "casual.jpg", "Dunno why, but she said she needed to sound consistent. Honestly, she practiced so much I can still hear it when I go to sleep.<br>Helpful tip, I fuckin' hate the sound. No faster way for your ass to hit the street.");
			writeSpeech("player", "", "I'll keep it to myself then.");
			writeSpeech("green", "casual.jpg", "Ah, you're fine, yours don't hit those notes that fuck me right up. You don't got that echo-y sound afterwards. Now stop snoopin' through boring shit and come eat.");
			writeFunction("writeEncounter('greenHome2')", "Continue");
			break;
		}
		case "greenHome2": {
			writeEvent("greenHome");
			writeSpeech("green", "casual.jpg", "Hehe, maybe for an appetizer, I got at-");
			writeSpeech("scarf", "", "I'm hooooome~");
			writeSpeech("green", "casual.jpg", "Ah, she's back.<br>Fuck off sis, I'm havin' some me time! Go back with your little boytoy!<br> How the hell is he convinced you're a teenager too, anyw-");
			writeText("*SNAP*");
			writeText("greenF's eyes unfocus and her attitude vanishes. Even from the other room the snap took effect, scarfF confidently walks into the room.");
			if (checkTrust('scarf') > 99) {
				writeSpeech("scarf", "alt.jpg", "Enjoying yourself, playerF? Sorry about interrupting your fun, but I'm hungry. greenF, food please.");
				writeText("Like a puppet with strings pulled taut, greenF obeys. Cum still leaking she walks towards the kitchen.");
				writeSpeech("player", "", "As much as I please. You have any fun yourself?");
				writeSpeech("scarf", "alt.jpg", "I got bored and left early, as usual. Any progress on your plan to dominate the school?");
				writeSpeech("player", "", "Eh, not yet. I figure it'll shake up the status quo a lot, might as well have fun while I can. See you around, scarfF.");
				writeSpeech("scarf", "alt.jpg", "Of course, child. Good night~");
			}
			else {
				writeSpeech("scarf", "", "Any luck, playerF? Sorry about interrupting your fun, but I'm hungry. greenF, food please.");
				writeText("Like a puppet with strings pulled taut, greenF obeys. Cum still leaking she walks towards the kitchen.");
				writeSpeech("player", "", "No luck yet, I've got a plan in the works though. Next time, for sure. How was your night?");
				writeSpeech("scarf", "", "I got bored and left early, as usual. I need a challenge these days to make waking up in the morning worth it. I suppose I shouldn't get my hopes up too much though.");
				writeSpeech("player", "", "You're in for one. I'll see you and greenF soon, good night.");
				writeSpeech("scarf", "", "Of course, child. Good night~");
			}
			data.player.time = "Night";
			if (checkFlag('green', 'home') != true) {
				addFlag('green', 'home');
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "greenWork1": {
			writeSpeech("player", "", "Hey, greenF, I've got a bit of time extra. Need a teaching aide?");
			writeSpeech("green", "", "Oh, could you? That'd be a huge help. scarfF usually piles a lot of her work onto me, so I've been a bit swamped lately.");
			writeText("She's not super vulnerable to hypnosis, so getting her comfortable around you, or at least seriously tired, could be the answer here.");
			writeText("...");
			writeText("Of course, it backfires a little. You hadn't realized exactly how tedious this all is.");
			writeBig("images/scarf/greenWork1.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "", "Hah, yeah. The school really ought to get some new testing machines. But those don't do too well on short answer quizzes.");
			writeSpeech("player", "", "And why are there a bunch of psychology exams in here? Isn't that scarfF's field?");
			writeSpeech("green", "", "Eh, it's no big deal. If you don't wanna, I'll deal with 'em.");
			writeSpeech("player", "", "... You let yourself get pushed around too much, greenF.");
			writeSpeech("green", "", "Maybe... But without me helpin' her out, she'd be a mess. I take care of her, she takes care of me when the chips are down.");
			writeSpeech("player", "", "You sure that isn't just your brain making excuses?");
			writeSpeech("green", "", "Oh? And why would I be doing that?");
			writeSpeech("player", "", "... No reason. Nothing. Hey, this kid did pretty well. tomgirlF seems like he got full marks.");
			writeSpeech("green", "", "Yeah, he passed the test.");
			writeSpeech("player", "", "What was that?<i><br>No way this'll be that easy...</i>");
			writeSpeech("green", "", "I said he passed. Why?");
			writeSpeech("player", "", "Sorry, got distracted for a sec. Anyways, let's just focus. If we figure this all out we should be done before it gets dark.");
			writeText("...");
			writeSpeech("player", "", "Aaand... Done. How about-");
			writeBig("images/scarf/greenWork2.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Ah. Well, tired works too. greenF? greenF, wake up.");
			writeSpeech("green", "", "Mmm...");
			writeSpeech("player", "", "It's fine, you can go right back to sleep. Just stare at this for a second...");
			writeText("You take out your pendant and get into a quick rhythm. Not your best work, but...");
			writeBig("images/scarf/greenWork3.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "Now, when I say 'glorious victory', you'll say...?");
			writeSpeech("green", "", "... No.");
			writeText("You sigh, it was worth a shot. She's pretty sleepy, but the mental protections on greenF are too thorough and ingrained in her psyche.");
			writeText("Still, there's some potential to try and cheat your way through the test, so this wasn't a total loss.");
			writeSpeech("player", "", "Oh well. Feel free to fall back asleep.<br>I should probably get home...");
			writeText("It's not quite dark yet. You make it a policy to be home at a punctual time every day, but... Maybe a quick nap wouldn't hurt. You drape a small quilted blanket over greenF and sit on down for a quick rest yourself on a second, less comfy couch.");
			writeFunction("writeEncounter('greenWork2')", "Continue");
			break;
		}
		case "greenWork2": {
			writeEvent("greenWork");
			data.player.time = "Night";
			addFlag('green', 'work');
			if (checkFlag('green', 'work') != true) {
				addFlag('green', 'work');
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "greenCheat": {
			writeSpeech("player", "", "Alright scarfF, hope you're ready. Hey, greenF?");
			writeText("scarfF watches with a bemused expression as you call greenF over.");
			writeSpeech("green", "", "Yeah? What's up?");
			writeText("Really quick, that psychology exam, how did tomgirlF do again?");
			writeSpeech("green", "", "He passed.");
			writeSpeech("player", "", "What did he pass, exactly?");
			writeSpeech("green", "", "He passed the test, why? What's up?");
			writeText("*SNAP*");
			writeText("greenF goes slack as scarfF cuts her out of the conversation.");
			writeSpeech("scarf", "", "Not bad. A creative decision, a very bold one in fact.");
			writeSpeech("player", "", "And what's so bold about it?");
			writeSpeech("scarf", "", "Well, had you just failed, we would have stopped here. Now you're challenging an experienced hypnotist to a mental duel without actually making sure you've got a firm grasp on the basics. Truly a courageous decision.");
			writeSpeech("player", "", "Uh, could I maybe take that-");
			if (data.player.counseling > 0) {
				data.player.counseling -= 1;
			}
			setTrust('scarf', 60);
			setTrust('green', 43);
			passTime();
			writeFunction("loadEncounter('scarf', 'scarfCheat')", "Nope");
			break;
		}
		case "greenVictory": {
			writeSpeech("player", "", "Could you watch my hand, please?");
			writeSpeech("green", "", "Uh, sure? I-");
			writeText("*SNAP*");
			writeText("There's a specific technique to how scarfF snaps her fingers to give it a slightly different sound, not just any snapping noise would work. Luckily you're observant and a skilled hypnotist.");
			writeText("And it works! greenF's eyes unfocus and her body slumps a little. You tell greenF what to say, and she repeats.");
			writeSpeech("green", "", "He passed the test.");
			writeText("scarfF breaks greenF's daze with applause. As she snaps out of it, she starts clapping too with a tired, confused look.");
			writeSpeech("green", "", "Wha? Huh? Woohoo! Why are we clapping?");
			writeSpeech("scarf", "", "playerF here has done a marvelous job. Well done.");
			writeSpeech("green", "", "Oh, nice! Great job playerF!<br>... What'd you do?");
			writeSpeech("player", "", "More to the point, what do I win?");
			writeText("The room feels you a little warmer as scarfF gives you a familiar wistful smile.");
			writeSpeech("scarf", "", "Greedy boy. You want a reward just for snapping your fingers?");
			writeSpeech("player", "", "You gave me a challenge, I won. I entertained you, don't I deserve something?");
			setTrust('scarf', 60);
			setTrust('green', 43);
			passTime();
			writeFunction("loadEncounter('scarf', 'scarfVictory')", "Yes, you do");
			break;
		}
		case "greenBeach": {
			writeText("You grab greenF by the hand, more on instinct than anything else.");
			writeSpeech("player", "", "Fuck off, she's mi-");
			writeText("You stop, they're gone. The beach is still active and lively around you as greenF leads you by the hand.");
			writeSpeech("player", "", "Wait... I should... What was I doing again?");
			writeBig("images/scarf/greenBeachSex1.jpg");
			writeSpeech("green", "bikini.jpg", "Enjoying the sun? How about you and I get some privacy in the changing room?");
			writeText("Events are happening and passing by, disconnected from any kind of rational order or logic.");
			writeText("...");
			writeBig("images/scarf/greenBeachSex2.jpg");
			writeSpeech("green", "bikini.jpg", "Y'know, you really seemed like you had somewhere to be. Do you really wanna leave now?");
			writeSpeech("player", "", "I had... Somewhere to be?");
			writeSpeech("green", "bikini.jpg", "It must not have been that important if you can't remember it. Just relax!");
			writeSpeech("player", "", "I... Yeah...");
			writeBig("images/scarf/greenBeachSex3.jpg");
			writeText("Before you fall into an endless loop of pleasure, you can hear a voice whispering into your ear.");
			writeSpeech("scarf", "bikini.jpg", "You put up a good resistance, child. Just relax, enjoy.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
		case "greenBeachReturn": {
			writeSpeech("green", "bikini.jpg", "Yo!");
			writeBig("images/scarf/greenBeach1.jpg");
			writeSpeech("green", "bikini.jpg", "Fancy seeing you in my dream like this.");
			writeSpeech("player", "", "No time, got a competition to win. Talk to you-");
			writeText("Letting yourself engage with the fake reality is a bad idea, you could get distracted for longer than you realize.");
			writeSpeech("Playboy", "images/none.png", "Hey hot stuff, you're lookin pretty good!");
			writeBig("images/scarf/greenBeach2.jpg");
			writeText("A pair of tanned beachgoers have come up to start hitting on greenF");
			writeSpeech("green", "bikini.jpg", "Oh, stop. I'm old enough to be your-");
			writeSpeech("Playboy", "images/none.png", "One second. Hey, bro. She yours?");
			writeFunction("writeEncounter('greenBeach')", "Yeah, she's with me");
			writeFunction("changeLocation(data.player.location)", "Ignore them, focus");
			break;
		}
		case "greenNewQuo": {
			writeSpeech("green", "", "Hi, what's up?");
			writeSpeech("player", "", "Hey, I was wondering...");
			writeText("With scarfF under your control you can enjoy greenF's company at your leisure. One interesting way to pass the time would be to retry your initial challenge, and find ways to make her repeat the phrase for your victory again. Plus, with hypnosis, memory is more of a guideline than a rule.");
			writeFunction("writeEncounter('greenBar1')", "'Wanna go out after work?'");
			writeFunction("writeEncounter('greenHome1')", "'Can I walk you home after work?'");
			writeFunction("writeEncounter('greenWork1')", "'Need any help?'");
			writeFunction("writeEncounter('greenCancel')", "Go back");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "greenBar", name: "Drunken Hypnotism",},
	{index: "greenHome", name: "Relaxed Hypnotism",},
	{index: "greenWork", name: "Tired Hypnotism",},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "greenBar": {
			writeText("With greenF turned into a lump on a barstool, you take your opportunity to walk her a block to her place, and to attack.");
			writeText("Hey, check this out.");
			writeText("Her place is pretty dark, so you set her down and turn on the lights. Strange that scarfF isn't home. Her drunken mind is a lot less guarded than when she's fully alert, so she doesn't try to punch you in the face this time as she quickly falls into a hypnotic trance.");
			writeSpeech("player", "", "Alright. You're going to listen carefully. The next time you hear me say the phrase 'glorious victory', you're going to respond with 'he passed the test'. Got it?");
			writeSpeech("green", "", "He pashed the tesht...");
			writeText("...");
			writeText("After some practice, you've managed to get her to repeat the phrase on command, although she's still very out of sorts.");
			writeSpeech("green", "", "Sho, we gonna fuck or what?");
			writeSpeech("player", "", "Don't think I caught that right, what'd-");
			writeSpeech("green", "", "Fucking! Hot, ballsh deep fucking! Pantsh off, dick out!");
			writeSpeech("player", "", "Are you sure? You're pretty drunk, and scarfF-");
			writeSpeech("green", "", "Fuck 'er! She's not the bossh of me!<br>Dick! C'mon!");
			writeText("Her pants are off faster than any sober person could unzip theirs.");
			writeSpeech("green", "", "Cmon! Don't washte time knocking after a girl givesh you her key!");
			writeSpeech("player", "", "... Well, I did read somewhere that physical contact makes things easier to re-");
			writeSpeech("green", "", "Neeeeerd~!");
			writeSpeech("player", "", "Fine. You asked for it.");
			writeBig("images/scarf/scarfBar1.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "", "Nnn~! Hell yeah I did~ <br>That hitsh the...");
			writeSpeech("player", "", "Quiet, you'll wake the neighbors.");
			writeSpeech("green", "", "Ooh~<br>Kinky fucker, aren't you? Bet you want scarfF to watch too~");
			writeSpeech("player", "", "Shut... Up!");
			writeBig("images/scarf/scarfBar2.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "", "Fffuck~<br>Shit dude, you got anger problems...");
			writeSpeech("player", "", "You're pretty impossible to deal with yourself. I guess-");
			writeSpeech("green", "", "Hey, I washn't complainin'<br>Cmon! Again!");
			writeText("...");
			writeBig("images/scarf/scarfBar3.jpg", "Art by Enoshima Iki");
			writeText("You don't know if you did really well or really poorly, either way after you're finished greenF is loudly snoring the night away. You start getting dressed and ready to head home, but you decide to check something first.");
			writeSpeech("player", "", "So, real quick, 'glorious victory'.");
			writeSpeech("green", "", "Zzz...");
			break;
		}
		case "greenHome": {
			writeText("The meal is nice, but uneventful. She is a pretty good cook overall.");
			writeText("Honestly, trying to relax her didn't pan out. Entertaining a guest usually isn't too relaxing an ordeal.");
			writeSpeech("player", "", "So, I was hoping I could find some time to-");
			writeSpeech("green", "casual.jpg", "Fuck? That's the plan, lemme finish first though.");
			writeSpeech("player", "", "... To talk. But, uh, that works too I guess. Won't scarfF be h-");
			writeBig("images/scarf/scarfBackside.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "casual.jpg", "Sorry, couldn't hear you over the massive erection you're popping right now.<br>And if she does come home, who cares? She's pretty freaky anyways, honestly. We've lived together for years, we've seen it all at this point.");
			writeText("You just shrug your shoulders and decide to roll with it all.");
			writeSpeech("green", "casual.jpg", "Now, you gonna stand there, or-");
			writeBig("images/scarf/scarfHome1.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "casual.jpg", "Ohoh, you take what you like, don't you?");
			writeSpeech("player", "", "I take what I want.");
			writeSpeech("green", "casual.jpg", "You got the swagger of a much bigger *man, playerF. Hope you got the technique to back that up.");
			writeBig("images/scarf/scarfHome2.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "casual.jpg", "Nnngh-!");
			writeSpeech("player", "", "Not so cocky now, are you?");
			writeSpeech("green", "casual.jpg", "Any... Any bozo off the street can thrust, jackass. Gimme a good time or I'll wipe that smirk off that pretty face.");
			writeSpeech("player", "", "You can't even see my face, how do you know I'm grinning?");
			writeSpeech("green", "casual.jpg", "I can hear it, now HARDER~!");
			writeText("...");
			writeBig("images/scarf/scarfHome3.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "casual.jpg", "Ooough~!");
			writeSpeech("player", "", "Hah... Hah... That good enough for ya?");
			break;
		}
		case "greenWork": {
			writeText("A lovely dream overtakes you, but you can't quite get comfortable in the chair. You hear a pretty familiar sound, so you open your eyes juuuust a bit.");
			writeBig("images/scarf/greenBlow1.jpg", "Art by Enoshima Iki");
			writeText("There's no sign as to how long greenF's been sucking you off. She's mostly focused on the head, jerking the shaft with one hand as she does. She seems more like she's trying to enjoy herself than put on a show.");
			writeText("Out of politeness? Awkwardness? Maybe you're more tired than you thought. Whatever it is, you opt to just keep resting until...");
			writeBig("images/scarf/greenBlow2.jpg", "Art by Enoshima Iki");
			writeSpeech("green", "", "Hmm~");
			writeText("She swallows like it's no big deal, like she's having a nice drink. You feel a bit sore, actually, like this isn't your first orgasm of the day.");
			writeSpeech("green", "", "Ah~<br>Not bad. I should remind you to vary your diet tomorrow.");
			writeBig("images/scarf/greenBlow3.jpg", "Art by Enoshima Iki");
			writeText("She gives your dick a soft kiss, then starts getting dressed herself.");
			writeSpeech("green", "", "Deep sleeper, huh?<br>Alright, sleep tight playerF.");
			writeText("After a bit you realize you've dozed off again, and it's starting to get late.");
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
	if (data.player.location == "gallery") {
		writeFunction("changeLocation(data.player.location)", "Finish");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "greenReward", trust: 100,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "greenReward": {
			writePhoneImage("images/green/reward.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("green", "", "You've finished all of greenF's content for this version, great work!");
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