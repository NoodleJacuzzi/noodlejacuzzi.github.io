var character = {index: "purple", met: false, fName: "Mary", lName: "Williams", trust: 0, encountered: false, textEvent: "", color: "#cb86ef",};

var logbook = { //Logbook details for each character.
	index: "purple", 
	desc: "A university student who's been having trouble making the grade. If she doesn't pick up the slack, she could face being expelled.",
	body: "Still, she doesn't have any intention of using her body to make the grade, at least for now.",
	clothes: "She's pretty hot and she knows it, preferring to wear her jacket open and with a shorter skirt than is regulation.",
	home: "Her designated classroom is class B. Sometimes she heads to the hallway outside your office in the mornings.",
	tags: "Mom-Daughter Threesome, Corruption",
	artist: "Artist: Oreteki18kin",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
	{name: "Petunia", 			key: true, 		price: 10, 	image: "scripts/gamefiles/items/petunia.jpg", description: "A beautiful purple flower."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "purple1A", name: "A student is rummaging through her bag.", location: 'classroomB', time: "MorningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple1B", name: "You can read purple's file here.", location: 'playerOffice', time: "MorningEvening", itemReq: "File B-1", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple2A", name: "purple is leaving for school.", location: 'vintageStreet', time: "Morning", itemReq: "", trustMin: 20, trustMax: 20, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple2B", name: "purple is getting ready to head home.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 20, trustMax: 20, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple3", name: "purple is waiting for class to begin.", location: 'classroomB', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple3", name: "purple is standing outside your office.", location: 'northHallway', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple6", name: "purple is standing outside your office.", location: 'northHallway', time: "Evening", itemReq: "", trustMin: 50, trustMax: 50, type: "tab", top: 0, left: 0, day: "both",},
	{index: "chubby1", name: "purple's house is here.", location: 'vintageStreet', time: "MorningEvening", itemReq: "Petunia", trustMin: 50, trustMax: 50, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple5", name: "purple is standing outside your office.", location: 'northHallway', time: "MorningEvening", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple4", name: "purple is standing outside your office.", location: 'northHallway', time: "MorningEvening", itemReq: "", trustMin: 80, trustMax: 80, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple7A", name: "purple is standing outside your office.", location: 'northHallway', time: "MorningEvening", itemReq: "", trustMin: 90, trustMax: 90, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple8", name: "purple is standing outside your office.", location: 'northHallway', time: "MorningEvening", itemReq: "", trustMin: 95, trustMax: 95, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purple9", name: "purple's house is here.", location: 'vintageStreet', time: "MorningEvening", itemReq: "", trustMin: 99, trustMax: 99, type: "tab", top: 0, left: 0, day: "both",},
	{index: "branchingPoint", name: "purple's house is here.", location: 'vintageStreet', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
	{index: "routeAQuo", name: "purple's house is here.", location: 'vintageStreet', time: "MorningEvening", itemReq: "", trustMin: 101, trustMax: 101, type: "tab", top: 0, left: 0, day: "both",},
	{index: "purpleCasino1", name: "purple and her mother are here putting on a public show with faceless dudes.", location: 'casino', time: "MorningEvening", itemReq: "", trustMin: 90, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
]

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "purple1A": {
			writeBig("images/purple/profile.jpg", "Art by Oreteki18kin");
			writeText("She's a purple haired schoolgirl, she looks familiar...");
			writeText("Ah, yes. You saw her file earlier. Her name is "+fName('purple')+" "+lName('purple')+".");
			writeText("She's had trouble with her grades since her father passed away, despite still keeping up attendance.");
			writeText("She seems cute enough, if you wanted to you could call her to your office for some 'counseling'.");
			writeFunction("writeEncounter('purple1C')", "Call her to your office.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "purple1B": {
			writeText("The file is from the principal, so it's worth even just a glance.");
			writeText("It's on someone named "+fName('purple')+" "+lName('purple')+".");
			writeBig("images/purple/profile.jpg", "Art by Oreteki18kin");
			writeText("She's had trouble with her grades since her father passed away, despite still keeping up attendance.");
			writeText("She seems cute enough, if you wanted to you could call her over for some 'counseling'.");
			writeFunction("writeEncounter('purple1C')", "Call her to your office.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "purple1C": {
			writeSpeech("player", "", "Thank you again for joining me, Ms. "+lName('purple')+".");
			writeSpeech("purple", "", "You can call me "+fName('purple')+". Was there something you needed?");
			writeSpeech("player", "", "Yes, I was just wondering how you've been holding up lately.");
			writeText("...");
			writeText("After some time it's clear she's got a lot of repressed emotions, but she isn't relaxed enough for hypnosis to work right now.");
			writeText("Given enough time you could build up a relationship of trust with her and get through her walls. For now, the two of you just talk aimlessly for awhile.");
			writeSpeech("purple", "", "So was that everything you needed?");
			writeSpeech("player", "", "Yes, thank you. I'd like to speak with you again like this sometime, if that's alright.");
			writeSpeech("purple", "", "Sure. Bye.");
			data.player.location = 'playerOffice';
			setTrust('purple', 20);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purple2A": {
			writeSpeech("chubby", "", "Good luck at school honey, see you later!");
			writeSpeech("purple", "", "See you later mom! Oh, uh, hi "+data.player.honorific+".");
			writeSpeech("player", "", "Good morning "+fName('purple')+". On your way to school?");
			writeSpeech("purple", "", "Yes "+data.player.honorific+". You?");
			writeFunction("writeEncounter('purple2C')", "'No, I was actually hoping to speak with your mother.'");
			writeFunction("changeLocation(data.player.location)", "'Yes, I'll meet you there.");
			break;
		}
		case "purple2B": {
			writeSpeech("player", "", "Hello "+fName('purple')+". On your way home?");
			writeSpeech("purple", "", "Yes I am. Sorry I can't stay and talk.");
			writeSpeech("player", "", "It's completely fine. Is your mother waiting for you?");
			writeText("She nods.");
			writeFunction("writeEncounter('purple2C')", "'I'd like to meet her, if possible.'");
			writeFunction("changeLocation(data.player.location)", "'Stay safe getting home then.");
			break;
		}
		case "purple2C": {
			writeSpeech("purple", "", "Mom? We've got a guest. *He's a counselor from school.");
			writeSpeech("chubby", "", "I'll be right there!");
			writeSpeech("purple", "", "Alright, uh, make yourself at home I guess. I've gotta go.");
			writeText("She heads off, leaving you in the hall. You look around for a moment, admiring the photos on the wall.");
			writeSpeech("chubby", "", "Hello!");
			writeBig("images/chubby/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "I'm "+fName('chubby')+", "+fName('purple')+"'s mom. You're the new counselor at school?");
			writeSpeech("player", "", "Yes ma'am. I was hoping to get to know a little more about your daughter.");
			writeText("She takes your hand in a gentle handshake and the two of you start talking after she leads you to a couch.");
			writeText("...");
			writeText("The two of you end up talking for a few hours. She's got a very kind tone, but she seems too pensive to be open to hypnosis.");
			writeText("Still, she could present an opening in "+fName('purple')+"'s defenses.");
			writeSpeech("player", "", "So, in short, your daughter might be a little slow in getting home some days.");
			writeSpeech("chubby", "", "Of course! I'm away in the evenings most days, but you're welcome to speak with me or my daughter whenever you need to.");
			data.player.location = 'vintageStreet';
			setTrust('purple', 40);
			setTrust('chubby', 40);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purple3": {
			writeSpeech("player", "", "It's good to talk to you again "+fName('purple')+".");
			writeSpeech("purple", "", "Uh huh. Listen, I'm not really sure this is necessary.");
			writeSpeech("player", "", "If it can help, I think it's worth the time. You wouldn't walk home on a broken leg would you? There's nothing wrong with needing help.");
			writeText("She thinks about this for a moment, then sighs.");
			writeSpeech("purple", "", "This'll help mom, right? She won't need to be worried?");
			writeSpeech("player", "", "Absolutely. You'll be living a whole new life once you let me in.");
			writeSpeech("purple", "", "Strange way to phrase that, but okay. Where do we start?");
			writeSpeech("player", "", "Well...");
			writeFunction("writeEncounter('purple3A')", "Help her with schoolwork");
			writeFunction("writeEncounter('purple3B')", "Talk about her feelings");
			break;
		}
		case "purple3A": {
			writeSpeech("player", "", "Let's talk about your schoolwork. Letting things pile up can leave you feeling overwhelmed, so let's try to shrink that backlog a bit. Do you have any assignments on you?");
			writeSpeech("purple", "", "Yeah. I keep them in my backpack. They're a bit crumpled at this point.");
			writeSpeech("player", "", "No problem. Let's get started.");
			writeText("...");
			writeText("The backlog shrinks quickly. For as worried as you might have been about having no formal tutoring training, it seems like most of the work is stuff she already understands. She just needed some time and focus to deal with them.");
			writeSpecial("You feel like "+fName('purple')+"'s trust in your has improved!");
			writeText("As time passes she gets stuck on a certain problem. She should already understand how to solve it, but she's still having trouble.");
			writeFunction("writeEncounter('purple3AA')", "Solve it for her");
			writeFunction("writeEncounter('purple3AB')", "Walk her through the problem");
			break;
		}
		case "purple3AA": {
			writeSpeech("player", "", "Alright, so for this one you need to use this method, which gives you this total...");
			writeSpeech("purple", "", "Aaaah right. Sorry, this subject is a pain for me.");
			writeText("While it wasn't ideal for encouraging growth, solving the problem for her improved her view of you.");
			writeSpecial("You feel like "+fName('purple')+"'s trust in your has improved!");
			writeText("Within the next few hours you've exhausted all of her backlog of schoolwork. Once the last page is finished the two of you relax against your chairs.");
			writeSpeech("purple", "", "Finished... I haven't had a clear schedule for weeks now.");
			writeSpeech("player", "", "You've done very well. This might be a good time to reconnect to old friends and enjoy the free time. You've earned a break at least.");
			writeSpeech("purple", "", "Yeah. I should really get going now.");
			writeSpeech("player", "", "Of course. You're welcome back any time.");
			writeText("The two of you shake hands and she stands to leave, but after a moment of contemplation she sits back down.");
			writeSpeech("purple", "", "Could, uh, could I ask you something?");
			writeSpeech("player", "", "Absolutely. What's up?");
			writeSpeech("purple", "", "I've been having trouble sleeping, and it's been tough to actually get motivated to, you know... Talk to people. I'm not really sure how to 'reconnect', basically.");
			writeSpeech("player", "", "Hmm. I actually might have the solution to that.");
			writeFunction("writeEncounter('purple3BA')", "Suggest meditation");
			writeFunction("writeEncounter('purple3BB')", "Suggest hypnotism");
			break;
		}
		case "purple3AB": {
			writeSpeech("player", "", "Alright, so for this one you remember the method here, right?");
			writeSpeech("purple", "", "Uh, I think so. This is the total, right?");
			writeSpeech("player", "", "Close. If you look here...");
			writeText("The two of you work through a great deal of her schoolwork, but by the time a few hours have passed there's still quite a bit left to do.");
			writeSpeech("player", "", "You've done very well. There's still more left but I think this is a good stopping point for today.");
			writeSpeech("purple", "", "Sure. I think I can finish the rest later.");
			writeText("She starts putting away her books, and you notice there's a pressed flower hanging on her backpack. IT looks like a real flower, not a plastic one.");
			writeFunction("writeEncounter('purple3BC')", "Ask about the flower");
			break;
		}
		case "purple3B": {
			writeSpeech("player", "", "I was hoping to talk more about you and how you're doing.");
			writeText("She sighs, she seems like more of the tomboyish type and might have some trouble talking about her feelings.");
			writeText("Still, you're a professional. Or at least you're professionally faking it.");
			writeSpeech("player", "", "Bear with me, please. I'm more than experienced here, and I can help.");
			writeSpeech("purple", "", "Alright, alright. What do you want to know?");
			writeText("...");
			writeText("Your discussion goes on for a few hours slowly breaking down her barriers. She's still a bit uncomfortable, but once you get her going about herself she carries most of the conversation herself.");
			writeText("She's a sporty sort who tends to tackle problems head on, but this problem is out of her wheelhouse.");
			writeSpeech("purple", "", "I've been having trouble sleeping, and it's been tough to actually get motivated to, you know... Talk to people. I just spend most of my time in bed.");
			writeSpeech("player", "", "Well, there are a few things I know of to help.");
			writeText("As you're about to give a suggestion you notice a strange purple flower dangling on her keychain. It seems like it's a real flower, not a plastic one. It might be an interesting topic to delve into, although it might not be a great idea to get distracted right now.");
			writeFunction("writeEncounter('purple3BA')", "Suggest meditation");
			writeFunction("writeEncounter('purple3BB')", "Suggest hypnotism");
			writeFunction("writeEncounter('purple3BC')", "Ask about the flower");
			break;
		}
		case "purple3BA": {
			writeSpeech("player", "", "Have you ever tried meditation?");
			writeSpeech("purple", "", "Sitting around all day? I feel like I've been doing a lot of that lately.");
			writeSpeech("player", "", "Not quite. It's about clearing your mind and accepting whatever enters your thoughts, before letting it go. Why don't we give it a try?");
			writeSpeech("purple", "", "Alright. Do I need to do that 'ooooohm' thing?");
			writeSpeech("player", "", "You can do, or not do, whatever makes you comfortable.");
			writeText("...");
			writeText("The two of you practice meditation for awhile. The clear-mind state it puts her into is slowly decreasing her mental fortitude, but she isn't quite ready yet.");
			writeSpeech("player", "", "How do you feel?");
			writeSpeech("purple", "", "Better, actually. Thank you.");
			writeSpeech("player", "", "It's no problem at all. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
			writeSpeech("purple", "", "Yeah. See you later.");
			writeText("She packs up her bags, now much more trusting of you.");
			setTrust('purple', 80);
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "purple3BB": {
			writeSpeech("player", "", "Have you ever thought about, and hear me out here, hypnosis?");
			writeSpeech("purple", "", "... Excuse me? Like that whole 'you are feeling like a sleepy chicken' thing?");
			writeSpeech("player", "", "It's not like how it's presented on tv. It puts you into a relaxed state, you'll be able to speak without inhibition or anxiety.");
			writeSpeech("purple", "", "Huh.");
			writeText("She seems interested, but still hesitant. Maybe it was a bit too early to suggest something like hypnosis.");
			writeText("Still, the seed is sown.");
			writeSpeech("player", "", "You should think about it on your own, and come to your own conclusions on the matter. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
			writeSpeech("purple", "", "Yeah. See you later.");
			writeText("She packs up her bags, the idea of hypnosis still floating around in her mind.");
			setTrust('purple', 60);
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "purple3BC": {
			writeSpeech("player", "", "Could you tell me about that flower on your backpack?");
			writeSpeech("purple", "", "Oh, uh...");
			writeText("She unclips the flower from her bag.");
			writeSpeech("purple", "", "This is a petunia, it was a gift from dad. *He'd give me fresh ones I'd clip onto my bag. This one's getting a bit old, but...");
			writeText("...");
			writeText("She seems lost in thought. Trying to talk her out of this funk isn't working, this might be all you can do for today.");
			writeSpeech("player", "", "Thank you for your time. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
			writeSpeech("purple", "", "Yeah... Later.");
			writeText("She packs up her bags and leaves. this session wasn't too productive, but the info about the flower could prove useful. They probably sell them in the shopping district, but you obviously can't give one to her directly.");
			writeText("If you want to break down her barriers, it might be worth talking to her mother again.");
			setTrust('purple', 50);
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "purple4": {
			writeSpeech("player", "", "So, how have you been? Has meditation paid off at all for you?");
			writeText("She responds with a smile. She really seems like she's in a better place than when you saw her last.");
			writeSpeech("purple", "", "Yep! Taking some time to relax was nice. I guess I'd been letting things pile up, you know?");
			writeSpeech("player", "", "Absolutely. Just remember that it's an iterative process. Taking some time for self care should be a regular sort of deal.");
			writeSpeech("purple", "", "Yeah. I slept really well last night, so I'll try to make it a daily occurrence.");
			writeSpeech("player", "", "Actually, I have a method that can also work, if you're interested.");
			writeSpeech("purple", "", "Sure. If it helps I'll take it. What's the method?");
			writeSpeech("player", "", "Just take a look at this pendant right here. Keep your eyes on it, alright?");
			writeSpeech("purple", "", "Right. I'm gonna... Gonna keep an eye... My eyes... On...");
			writeSpeech("player", "", "Just relax. Everything is under control. This is all normal. Everything is normal.");
			writeText("...");
			writeText("*SNAP*");
			writeSpeech("purple", "", "Gah! Uh... Oh, sorry. I got distracted. I don't think your method works, "+data.player.honorific+".");
			writeSpeech("player", "", "You might want to check your clock.");
			writeSpeech("purple", "", "Hmm? Oh my god! It's been hours? Whoa!");
			writeSpeech("player", "", "And you can call me *Master from now on. It's just what's <b>normal</b>.");
			writeSpeech("purple", "", "Yeah sure, *Master. Listen I gotta get home. I told my mom I'd be home already, she's probably already caling the police.");
			writeSpeech("player", "", "That'd be a problem. I'll see you later then. And for our next session, it'll be at your house? Just like <b>normal</b>?");
			writeSpeech("purple", "", "Of course *Master! I'll catch you later!");
			data.player.location = 'playerOffice';
			setTrust('purple', 90);
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "purple5": {
			writeSpeech("player", "", "So, how have you been? Have you given any more thought to hypnosis?");
			writeSpeech("purple", "", "I uh, I've given it some thought and uh...");
			writeText("You hold up your hand to interrupt her stumbling.");
			writeSpeech("player", "", "Don't worry too much. If you aren't 100% accepting of the process, it won't work anyway. How about we try some other methods first?");
			writeText("This relaxes her. You'll need to get her to open up to the idea first. Luckily by the end of the day she should be more accomodating.");
			writeSpeech("purple", "", "What did you have in mind?");
			writeSpeech("player", "", "Have you ever tried meditation?");
			writeSpeech("purple", "", "Sitting around all day? I feel like I've been doing a lot of that lately.");
			writeSpeech("player", "", "Not quite. It's about clearing your mind and accepting whatever enters your thoughts, before letting it go. Why don't we give it a try?");
			writeSpeech("purple", "", "Alright. Do I need to do that 'ooooohm' thing?");
			writeSpeech("player", "", "You can do, or not do, whatever makes you comfortable.");
			writeText("...");
			writeText("The two of you practice meditation for awhile. The clear-mind state it puts her into is slowly decreasing her mental fortitude, but she isn't quite ready yet.");
			writeSpeech("player", "", "How do you feel?");
			writeSpeech("purple", "", "Better, actually. Thank you.");
			writeSpeech("player", "", "It's no problem at all. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
			writeSpeech("purple", "", "Yeah. See you later.");
			writeText("She packs up her bags, now much more trusting of you.");
			setTrust('purple', 80);
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "purple6": {
			writeSpeech("player", "", "So, how have you been?");
			writeSpeech("purple", "", "I've been managing.");
			writeText("...");
			writeText("The conversation is short and terse, you can't find a way to connect with her.");
			writeText("Before too long she decides that it'd be best to go, she's got schoolwork to deal with after all.");
			writeText("She spoke of the petunia last time, it seems like she has a great deal of emotional attachment to the flower.");
			writeText("A gift might get her out of the funk, but you can't give it too her directly. You're just the school counselor after all.");
			writeText("The best course of action would be to speak to "+fName('chubby')+".");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purple6": {
			writeSpeech("player", "", "So, how have you been?");
			writeSpeech("purple", "", "I've been managing.");
			writeText("...");
			writeText("The conversation is short and terse, you can't find a way to connect with her.");
			writeText("Before too long she decides that it'd be best to go, she's got schoolwork to deal with after all.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purple7A": {
			writeSpeech("purple", "", "Ah! *Master! I've been waiting for-");
			writeSpeech("player", "", "Shh! Calling me *Master in public isn't <b>normal</b>.");
			writeText("Her enthusiasm is instantly halted as she looks around.");
			writeSpeech("purple", "", "Sorry "+data.player.honorific+". Would you like to head home with me now?");
			writeFunction("writeEncounter('purple7B')", "Of course. Let's go");
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Not right now");
			break;
		}
		case "purple7B": {
			writeEvent('purple1');
			writeText("As you walk downstairs, a happy voice greets you.");
			writeSpeech("chubby", "", "Oh! How did it go?");
			writeSpeech("player", "", "I really got through to her. She said to let you know she'd be up there for a while. Working through feelings and all that.");
			writeSpeech("chubby", "", "No problem. Thank you again. If you ever need anything, just let me know.");
			data.player.location = 'vintageStreet';
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust('purple', 95);
			passTime();
			break;
		}
		case "purple8": {
			writeEvent('purple2');
			setTrust('purple', 99);
			passTime();
			data.player.location = 'vintageStreet';
			writeFunction("writeEncounter('purple8a')", "Head Downstairs");
			break;
		}
		case "purple8a": {
			writeEvent('purple3');
			writeText("...");
			writeSpeech("player", "", "Well, I'll be going now.");
			writeSpeech("chubby", "", "Come back anytime!");
			writeSpeech("purple", "", "Come back and fuck me whenever you want some of this schoolgirl pussy, *Master!");
			writeText("You leave with a chuckle "+fName('chubby')+" scolds her daughter for her vulgar language.");
			writeSpeech("chubby", "", "Language like that is for in private young lady, or you'll get *Master in trouble!");
			writeText("She'll need some time and some direction from her daughter, but "+fName('chubby')+" is well under your control now. You'll come back later to enjoy her, and her daughter too.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purple9": {
			data.player.location = "vintageStreet";
			loadEvent('chubby', 'chubby1');
			setTrust('purple', 100);
			setTrust('chubby', 100);
			passTime();
			break;
		}
		case "chubby1": {
			writeSpeech("chubby", "", "Yeees~? Oh, hello! "+fName('purple')+" is still-");
			writeSpeech("player", "", "At school, yes, but she's on her way back right now. Listen, take this.");
			writeText("You hand her the petunia.");
			writeSpeech("chubby", "", "Oh, how lovely. Oh, um...<br>I'm flattered, but-");
			writeSpeech("player", "", "I need to be direct, she'll probably be home soon. "+fName('purple')+"'s having a bit of trouble connecting. I was hoping you could give her this as a gift.");
			writeSpeech("chubby", "", "I'm not sure that...<br>Oh, this is the same one she has on her bag.");
			writeSpeech("player", "", "I believe that meditation is the way to go for your daughter, but it's important that this gift comes from you.");
			writeSpeech("chubby", "", "I see, of course. Thank you. I'll let her know about the um...");
			writeSpeech("player", "", "Meditation.");
			writeSpeech("chubby", "", "Thank you. You really have gone above and beyond, the university is lucky to have you.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			removeItem('petunia');
			setTrust('purple', 80);
			passTime();
			break;
		}
		case "branchingPoint": {
			writeEvent("purpleBranching");
			writeText("Still, she asks a good question. Having her turned into more of a free use whore could be neat to watch, and you've got plenty of prey in town to focus on yourself. Of course, having the pair devote themselves entirely to you could be plenty fun too. For now there's just one thing to do.");
			//writeFunction("writeEncounter('branchingB')", "Go ahead and post it");
			writeFunction("writeEncounter('branchingA')", "No, you're mine");
			break;
		}
		case "branchingA": {
			writeSpeech("player", "", "Keep it private, you and your mother are mine.");
			writeSpeech("purple", "", "'Kay. Oh, she responded quick. She's wondering why I'm so flushed, shame I couldn't get anything good in the frame.<br>Oh, could you give a couple more thrusts? I wanna keep as much of you in my cunt until dinner.");
			writeSpeech("chubby", "", "playerF~! purpleF~! Food's ready~!");
			writeSpeech("purple", "", "Cumming, mom~!");
			writeText("...");
			writeText("You've decided to keep purpleF and chubbyF to yourself. After a lovely meal and a bit more fun,it's best to get going for now.");
			writeSpeech("purple", "", "Come back soon, okay~?");
			raiseTrust('purple', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "branchingB": {
			break;
		}
		case "routeAQuo": {
			writeSpeech("purple", "", "Welcome back, *master! Mom's in the kitchen. Could I ask her to make you something, or are you here to relief yourself?");
			writeSpeech("player", "", "You don't need to hold yourself back today, I came here to...");
			writeFunction("writeEncounter('routeAQuickieSetup1')", "Get off");
			writeSpeech("player", "", "<i>The normalization has progressed pretty far. I'm not likely to stumble onto a pair that fall this deep again. Maybe I should take a few months and explore this?</i>");
			writeFunction("writeEncounter('routeAEnding1')", "Consider the possibilities");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "routeAQuickieSetup1": {
			passTime();
			writeSpeech("player", "", "Fuck, plain and simple.");
			writeSpeech("purple", "", "Ooh, okay. How do you want us today? I know mom's been really horny lately, I think she's got an even needier sex drive than me. I think she still has some reservations left though, wanna fuck those out of her?");
			writeFunction("writeEncounter('routeAQuickieSetup2')", "Let's give your mother some love today");
			writeFunction("writeEncounter('routeAQuickieSetup3')", "I intend to fuck the both of you today");
			break;
		}
		case "routeAQuickieSetup2": {
			passTime();
			writeSpeech("player", "", "Sounds like a plan.");
			writeSpeech("purple", "", "What about me? I could hold her down for you and maybe you could enjoy her tits today...<br>Ooh, maybe you wanna give her a good pounding? Honestly I feel a little down whenever I come by to see you're already finished with her.");
			writeFunction("writeEncounter('routeAQuickieAA')", "You'll be holding her down. ");
			writeFunction("writeEncounter('routeAQuickieAB')", "You'll be getting a good view of the action. ");
			break;
		}
		case "routeAQuickieAA": {
			writeEvent("purplerouteAQuickieAA");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "routeAQuickieAB": {
			writeEvent("purplerouteAQuickieAB");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "routeAQuickieSetup3": {
			writeSpeech("player", "", "I intend to fuck the both of you, don't worry. Go get your mother and get ready.");
			writeSpeech("purple", "", "Ooooh~<br>Okay *master, be ready in just a second.<br>Mom~! Mommy~! Fucking time~!");
			writeText("You stretch out a little, get undressed and make sure you're suitably hard as you hear the sounds of the two women excitedly getting ready in the other room.");
			writeSpeech("purple", "", "*Master~! We's ready~!");
			writeText("You walk into the room, ready to enjoy yourself.");
			writeBig("images/purple/B.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Mmm~<br>I'm ready, it feels like it's been forever...");
			writeText("purpleF is rubbing the folds of her pussy to get ready for you, while chubbyF seems a bit more distracted watching her daughter rub her teen snatch.");
			writeSpeech("purple", "", "You're gonna fuck me first, right?");
			writeSpeech("chubby", "", "Ah, no~! I'll go crazy if I need to watch my daughter get fucked first~!");
			writeFunction("writeEncounter('routeAQuickieBA')", "Fuck purpleF first");
			writeFunction("writeEncounter('routeAQuickieBB')", "Fuck chubbyF first");
			break;
		}
		case "routeAQuickieBA": {
			writeEvent("purplerouteAQuickieBA");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "routeAQuickieBB": {
			writeEvent("purplerouteAQuickieBB");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "routeAEnding1": {
			writeSpeech("player", "", "<i>There's a lot to consider, I wonder how far I can really push this...</i>");
			writeSpeech("purple", "", "What's up? You seem distracted, want me to suck you off?");
			writeSpeech("player", "", "Hey, purpleF. Focus, I wanna check something out.<br>When I snap my fingers, all of the hypnosis will fade away, you'll be right back to your normal self aware of everything that's happened thus far.");
			writeSpeech("purple", "", "Hypnosis? I'm not under anything, but oka-");
			writeText("As you raise your arms pretending you're about to snap your fingers, purpleF looks manic for a moment as she lunges forwards to try and keep your fist closed to prevent you from breaking her trance.");
			writeText("Quickly though, a look of realization flashes on her face and she backs off.");
			writeSpeech("purple", "", "Ah, I'm sorry! I don't know why I did that...");
			writeSpeech("player", "", "It's no problem, don't worry.");
			writeText("It seems like some part of her is still aware under her conditioning, proving that she really does want to stay like this on some instinctive level.");
			writeSpeech("player", "", "Anyways, that's pretty interesting. Honestly, as fun as it is to fuck with people for my own gain, you really are something special.");
			writeSpeech("purple", "", "Really? I don't get it, but cool! Hey, if you don't wanna fuck, is it cool if I start stroking myself? Being around you already gets me pretty wet, and getting praised is pretty nice too.");
			writeSpeech("player", "", "Go ahead. So I was thinking, maybe I should live here for a while, see how far I can push you and your mother.");
			writeSpeech("purple", "", "Ah~<br>Ooh, so you'd always be around? I know mom would gush at the thought.");
			writeSpeech("player", "", "Well...");
			writeFunction("writeEncounter('routeAEnding2')", "Sure, I'll go for it");
			writeFunction("writeEncounter('routeAEndingRejection')", "Actually, maybe some other time");
			break;
		}
		case "routeAEnding2": {
			writeText("And thus begins a long journey of exploration with a broken daughter and her fucked up mother.");
			writeText("You start living with the two, quickly fitting into a dominant role while they focus on pleasing your dick. You spend a while exploring exactly what's keeping them so entranced, what triggers can cause the hypnosis to crack, everything you can.");
			writeText("At first it was an almost non-stop romp. You'd bow out of the sex every so often to go back to fucking around as the university's counselor, but slowly things started to change.");
			writeText("It started small at first. Making sure purpleF was keeping up with her schoolwork, to avoid suspicion around you counseling her so often of course. chubbyF started reconnecting with old friends, with you playing the role of her new boyfriend to avoid anyone prying into why you moved in.");
			writeText("But then something strange started to happen. The hypnosis cracked less frequently, purpleF wouldn't go into hysterics when it did either, she'd just close up and you'd console her. chubbyF started seeing you as more than just a man using her for sexual relief.");
			writeText("And you could swear they started acting in ways that went against their hypnosis. Even ignoring direct commands to plan you a surprise party one day. Something would always come up whenever you tried to recondition them back into a trance too.");
			writeFunction("writeEncounter('routeAEnding3')", "Now, a few months later...");
			break;
		}
		case "routeAEnding3": {
			writeEvent("purpleEndingA");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "routeAEndingRejection": {
			writeSpeech("player", "", "Actually, maybe some other time.");
			writeSpeech("purple", "", "Aww. Well, soon then, okay? Mom's really lonely sometimes when you aren't around, and I...");
			writeSpeech("player", "", "What's up?");
			writeSpeech("purple", "", "It's nothing. Nothing! ");
			writeFunction("writeEncounter('routeAQuo')", "Go back");
			break;
		}
		case "purpleCasino1": {
			writeBig("images/scarf/casinoPurple1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Oooh~!<br>M-mom, look~!");
			writeSpeech("chubby", "", "Nnngh~! Oh, it's *mister playerF~! Would... Would you care to join us?");
			writeSpeech("player", "", "purpleF? chubbyF?");
			writeText("You're awash with jealousy for a moment before you cool your head. It's just another mindgame, one that's pretty easy to push through. scarfF really must be going easy on you.");
			writeSpeech("purple", "", "Pleeease~! I need you~! Mommy needs you too~!");
			writeSpeech("chubby", "", "Gimme~!");
			writeBig("images/scarf/casinoPurple2.jpg", "Art by Oreteki18kin");
			writeFunction("writeEncounter('purpleCasino2')", "Join the pair");
			writeFunction("changeLocation(data.player.location)", "Resist, keep on track");
			break;
		}
		case "purpleCasino2": {
			writeBig("images/scarf/casinoPurple3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "*Mwah*! So messy~!");
			writeSpeech("chubby", "", "Mmmph~! Mmmm~!");
			writeSpeech("purple", "", "I think she wants your cock in her ass, mister playerF~! I think I want it too, who will you...");
			writeText("Her voice fades out as a pleasant haze fills your mind.");
			writeBig("images/scarf/casinoPurple4.jpg", "Art by Oreteki18kin");
			writeSpeech("scarf", "bunny.jpg", "Just relax, enjoy. There's nothing left to worry about, I'll do all the thinking for you.");
			writeBig("images/scarf/casinoPurple5.jpg", "Art by Oreteki18kin");
			writeSpeech("scarf", "bunny.jpg", "Your body will follow my instructions, while your mind enjoys a little slice of heaven on repeat.");
			writeBig("images/scarf/casinoPurple6.jpg", "Art by Oreteki18kin");
			writeSpeech("scarf", "bunny.jpg", "Forever and ever. Goodnight, child.");
			writeText("Her voice is like waves against brittle rocks. Each splash takes a little more of you away, until you're broken apart and spread throughout the ocean.");
			writeText("Some small, last part of you recognizes her soft hand on your cheek before it fades away, leaving you with nothing but the pleasure of an endless night in the casino with purpleF and chubbyF.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "purple1", name: "Daughter's Payment 1"},
	{index: "purple2", name: "Daughter's Payment 2"},
	{index: "purple3", name: "Family Bonding"},
	{index: "purpleBranching", name: "Text Chat"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "purple1": {
			writeText("The two of you enter "+fName('purple')+"'s house together.");
			writeSpeech("chubby", "", "Welcome home! Oh, hello "+data.player.name+"!");
			writeSpeech("player", "", "Good to see you again "+fName('chubby')+". I'm here to help your daughter in a more relaxed environment. We'll be heading up to her room, if that's fine.");
			writeSpeech("chubby", "", "Oh, well I don't-");
			writeSpeech("purple", "", "It's fine, mom! I'll see you up there, alright "+data.player.honorific+"?");
			writeText(""+fName('purple')+" runs upstairs. "+fName('chubby')+" is left shocked and turns to you.");
			writeSpeech("chubby", "", "My goodness, she's just like her old self! I...");
			writeText("Tears are starting to form in "+fName('chubby')+"'s eyes.");
			writeSpeech("chubby", "", "Thank you! Thank you so much! Whatever you need, go ahead. Can I make something for you for after?");
			writeSpeech("player", "", "No thank you. I'll be out of your hair before too long.");
			writeSpeech("chubby", "", "Take as long as you need!");
			writeText("You can hear "+fName('purple')+" calling for you from upstairs, so you get moving.");
			writeSpeech("chubby", "", "It's incredible... She's exactly like before...");
			writeText("...");
			writeSpeech("player", "", "You sure took my advice to heart.");
			writeBig("images/purple/1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hmm? I'm just acting like I normally do.");
			writeText("Her personality no longer held back, she actually comes across as very strong willed.");
			writeSpeech("player", "", "Yes yes, just act <b>normal</b>. Speaking of which, you'll be sucking my dick like <b>normal</b>, right?");
			writeText("She scoffs at the question, looking more than a little confused.");
			writeSpeech("purple", "", "Of course! Why are you even bothering to ask instead of fishing it out?");
			writeBig("images/purple/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Eheh, it's excited.");
			writeText("She grasps your hefty dick in her hand, admiring it's weight and musk.");
			writeSpeech("purple", "", "God, it's huge. You'll completely wreck me, you know that, right? You'll really fuck me up with this thing, you know?");
			writeSpeech("player", "", "Yeah, I will. Open up, I need some relief. You come into my office with a body like yours, you really had this coming, you know?");
			writeSpeech("purple", "", "Of course! And it's totally normal that I pay you back for all that");
			writeText("She plants a fat kiss on the head of your cock.");
			writeSpeech("purple", "", "hard");
			writeText("She runs her tongue up your length.");
			writeSpeech("purple", "", "work you did helping a little tease like me!");
			writeText("You grab her by the hair and press the head of your dick against her lips. She lets out an appreciative giggle before she opens up.");
			writeSpeech("player", "", "I'm gonna have fun with you. And just remember, having an orgasm while choking on your counselor's fat dick is totally <b>normal</b>, okay?");
			writeText("...");
			writeBig("images/purple/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Mmmpph!");
			writeText("She cums for the third time from the taste of your cock, rocking her brain with an orgasm as your cum backs up out her nose.");
			writeText("Her underwear is soaked clean through, and there's a growing wet spot on the floor.");
			writeText("She's taken the initiative though, she's in control and she wants to keep choking on your length.");
			writeText("Even as you can hear her gagging and unable to breath, she grinds her pussy against the floor and pushes herself deeper.");
			writeText("Finally you pull her by the hair off of you. She's barely able, but she gives out a whine as your cock slides out of her mouth.");
			writeText("After some time coughing the massive amount of jizz out of her lungs, she looks up at you.");
			writeBig("images/purple/1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Th-thank-*COUGH*<br>Thank you... *ahem*... Very much *Master. Can we do it again?");
			writeSpeech("player", "", "Next time. We don't want your mother getting too suspicious. Clean yourself up, I'll see you later.");
			writeSpeech("purple", "", "I will *Master!");
			break;
		}
		case "purple2": {
			writeSpeech("player", "", "Hello "+fName('purple')+", here for another-");
			writeText("She pulls you into your office and closes the door behind you before pulling you into a deep kiss.");
			writeText("It's desperate and hungry, she's forcing her tongue into your mouth but starts shuddering when you push back.");
			writeSpeech("purple", "", "*mwah*! *Master... I need more. I haven't been able to stop playing with myself. Even in class, I...");
			writeSpeech("player", "", "Say no more. It's not safe here, let's head to your place.");
			writeText("...");
			writeSpeech("purple", "", "Mom, I'm home! And I brought the counselor with me! We're gonna go in my room, okay?");
			writeSpeech("chubby", "", "Alright honey! Dinner's in an hour!");
			writeText("The two of you head upstairs before "+fName('chubby')+" can get another word out.");
			writeSpeech("chubby", "", "<i>I wonder what they're doing up there...</i>");
			writeText("...");
			writeBig("images/purple/2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Ehehe... I'm ready for you. Fish it out! Please!");
			writeText("You pull down your pants and "+fName('purple')+" squirms in appreciation.");
			writeSpeech("purple", "", "Yes! That's what I want! Take me, own me!");
			writeSpeech("player", "", "Damn, you're really broken, aren't you? You dove headfirst into the hypnosis instead of trying to fight it at all.");
			writeSpeech("purple", "", "Please... I want to feel good...");
			writeSpeech("player", "", "And you will. But you understand what I'm about to do, right?");
			writeText("You slap your cock against her snatch teasingly.");
			writeSpeech("purple", "", "Yessss...~!");
			writeBig("images/purple/2-4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "YEEEeeeSS~!!!");
			writeText("She's squealing like a firecracker went off inside her brain. You grab her by the mouth to keep her quiet.");
			writeSpeech("player", "", "Shut up. Your mother isn't ready to find us yet.");
			writeSpeech("purple", "", "Mmmm~!<br><i>More! More!</i>");
			writeText("You push your dick inside her, stirring up her insides as she squeezes your length.");
			writeText("Tears have started to form in her eyes as her brain tries to process the sensations.");
			writeSpeech("player", "", "Breaking down already, huh? I-");
			writeText("You're interrupted while you pull out when she wraps her legs around you.");
			writeSpeech("player", "", "Fine. I see what you want. One more scream out of you though and we stop here.");
			writeText("...");
			writeBig("images/purple/2-5.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hah... Hah...<br><i>Can't think... More...</i>");
			writeText("Her cunt thoroughly filled with cum, you pull out only to hear a sound from behind you.");
			writeSpeech("player", "", "We've got a voyeur. Come with me, "+fName('purple')+".");
			writeSpeech("purple", "", "Mhm...");
			break;
		}
		case "purple3": {
			document.getElementById('output').innerHTML = '';
			writeText(""+fName('chubby')+" is breathing rapidly as she holds her phone.");
			writeSpeech("chubby", "", "Oh god, oh god... Who do I even call? What is happening?");
			writeText("The images of what she saw are burnt into her brain. Images of her own daughter having... Having SEX right in front of her!");
			writeText("Through a doorway. And obviously consensually.");
			writeSpeech("chubby", "", "What do I do? The police won-");
			writeText("And just like that, everything goes black for her.");
			writeText("...");
			writeSpeech("purple", "", "Yes! Yes! Yes!");
			writeSpeech("chubby", "", "Ghg... Huh? Where- W-WHAT?!");
			writeBig("images/purple/3-1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Harder! Make me your bitch!<br>Ah! M-morning mom!");
			writeSpeech("chubby", "", "W... What's...");
			writeSpeech("player", "", "Sorry about this ma'am. I really wish you hadn't been so nosey. If I had more time, this could've been a simple and clean process. But I obviously can't get you relaxed, so I need to get you mentally broken.");
			writeSpeech("chubby", "", "I don't understand...");
			writeSpeech("purple", "", "Nggh... Cmon mom! Stop distracting *him! Fuck, I'm cumming again!");
			writeText("You lift "+fName('purple')+" up so that when she squirts on your cock a little of it gets onto "+fName('chubby')+"'s face.");
			writeSpeech("chubby", "", "W-why? Why? Why!?");
			writeSpeech("player", "", "I need to break you. What better way to do that...");
			writeText("You start rapidly thrusting into "+fName('purple')+", making sure "+fName('chubby')+" has a good view of your cock slamming into her daughter's cunt.");
			writeSpeech("player", "", "Than to fill your daughter's cunt with my cum right in front of you?");
			writeBig("images/purple/3-2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Yesssss~! Fuck, you're filling my womb with your cockmilk!");
			writeSpeech("player", "", "And am I forcing you to do this?");
			writeSpeech("purple", "", "No! I want this! I wanna wake up every day rubbing my pussy thinking about you! I wanna sneak into your office so I can suck your cock while you work! I want you to walk in and start fucking me in front of everyone right in the middle of class!");
			writeSpeech("chubby", "", "...");
			writeText("Once you're finished with "+fName('purple')+" you grab your pendant and hold it in front of "+fName('chubby')+"'s face.");
			writeSpeech("player", "", "Don't worry, this has all been a bad dream. Don't you want to wake up?");
			writeSpeech("chubby", "", "... Yes please...");
			writeSpeech("player", "", "Then watch this pendant closely. This pendant is your salvation. Watch it swing from side to side, and everything will be <b>normal</b>.");
			writeSpeech("chubby", "", "Everything... Normal...");
			break;
		}
		case "purpleBranching": {
			writeText("A key has been left for you at the front door hidden underneath a rock. As you unlock the door with the small piece of brass, questions start to float around your mind about exactly where you'll take purpleF and chubbyF from here.");
			writeSpeech("chubby", "", "Ah, welcome back *master!");
			writeText("chubbyF calls out to you from the kitchen. ");
			writeSpeech("chubby", "", "I'm a bit tied up with cooking at the moment. purpleF is upstairs if you'd like to relieve yourself, and I can do it myself later if you'd like.");
			writeText("At this point you're at a crossroads. purpleF and chubbyF are happier than before, hypnosis is funny like that. Of course you could go the classic route and keep them loyal fuckpuppets, but if you have your way with the whole town you could get stretched pretty thin.");
			writeText("You could always keep pushing them deeper into depravity for something interesting to watch, that's a given. But should they be yours exclusively? ");
			writeSpeech("player", "", "<i>These sorts of decisions are best made while having fun. </i>");
			writeText("...");
			writeBig("images/purple/branching1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "And so I was thinking I might get back into soccer. I know I'm not going to make one of the private teams, but still.");
			writeText("One extremely neat facet of hypnosis comes when someone actually builds a dependence on the hypnotic state. If they want to stay in the happy mindset the hypnosis allows and they can't get into a positive headspace any other way, they fall so deep into suggestibility that it's almost like you can rewire their brains. At this point purpleF probably wouldn't reject the hypnosis even if she could. ");
			writeSpeech("purple", "", "So tryouts are in a few days, and-<br>Oh, could you keep hitting that spot? I'll cum super fast if you keep this pace.");
			writeSpeech("player", "", "No problem.");
			writeSpeech("purple", "", "Thanks. Cumming.");
			writeText("Her sense of normality is so warped at this point that the only sign on her face of her latest orgasm is a very slight curl at the edge of her lips, even as her cunt squeezes and squirts.");
			writeBig("images/purple/branching2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hey, this one is lasting longer than the last. I think rougher sex is probably the key to the squirting, if that's what you're going for. <br>Oh, she responded. Man, she won't stop worrying about me.");
			writeSpeech("player", "", "How about you send her a selfie? I'm about to cum anyways. ");
			writeSpeech("purple", "", "Ooh, great idea. I'll keep you out of the frame of course. <br>Alright, your balls are tighening, don't feel them slapping against my clit as much. One, two, three.");
			writeBig("images/purple/branching3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Nice, caught the shot. Okay, caption... <br>I'll go with 'cumming around to the feeling'. Want me to post it online too for everyone to see?");
			writeText("You lean back a little to think. Despite how her body clearly wants to go another round, she doesn't push her ass back to fill herself up again, that wouldn't be <i>normal</i>. Instead she keeps checking out filters while her pussy rhythmically squeezes and relaxes to try and push her to yet another orgasm. Her face would probably look pretty different if she weren't suppressing her reactions.");
			break;
		}
		case "purplerouteAQuickieAA": {
			writeSpeech("purple", "", "Gotcha. Lemme get her ready for you, okay?");
			writeSpeech("player", "", "Sure. We need to get her to sink deeper anyway, so feel free to be a little looser with your language.");
			writeText("You stretch out a little, get undressed and make sure you're suitably hard as you hear the sounds of the two women talking and grunting from the other room, peppered with a few soft gasps.");
			writeSpeech("purple", "", "*Master~! She's ready~!");
			writeText("You walk into the room, ready to enjoy yourself.");
			writeBig("images/purple/AA1.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "H-honey, there's no need to-");
			writeSpeech("purple", "", "God, mom, your tits are fucking huge. You're like a cow!");
			writeSpeech("chubby", "", "Th-that's not right, honey, please...  Having s-sex with my daughter watching...");
			writeSpeech("player", "", "Having second thoughts?");
			writeText("She bites her lips apprehensively. She isn't in nearly as deep as purpleF is.");
			writeSpeech("purple", "", "Too bad, cowtits~<br>*Master isn't going to be fucking your snatch today, *he'll be having *his way with these fat fuckbags~");
			writeSpeech("chubby", "", "My... Breasts?");
			writeSpeech("purple", "", "Yep! All this moaning about how sensitive they've gotten lately, should be perfect for a titfuck, right?");
			writeSpeech("chubby", "", "I...");
			writeBig("images/purple/AA2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Whoa~<br>You were so nervous a second ago! You really want *his dick between your tits that badly?");
			writeSpeech("chubby", "", "I w-want it~<br>Please~");
			writeText("You rub your dick against her sopping cunt to get yourself all lubed up.");
			writeSpeech("chubby", "", "Hurry~!");
			writeBig("images/purple/AA3.jpg", "Art by Oreteki18kin");
			writeText("Both women remain silent for just a moment as your cock slides between chubbyF's fat breasts, sandwiched by soft titflesh.");
			writeText("purpleF grins harder at her mother's abuse when you slide balls deep between the pair, getting off on the perversion of the situation of seeing her mother debased like this.");
			writeText("chubbyF is cracking underneath the degeneracy, letting out a shuddering sigh as she watches each inch of cock disappear between her tits. If her leaking pussy is any indication, she's getting off on this too.");
			writeText("Every few thrusts the head of your cock becomes visible for a moment, causing purpleF to giggle as chubbyF licks her lips.");
			writeSpeech("purple", "", "You want it, right? You're gonna get off from *him using your funbags for what they were made for, right?");
			writeSpeech("chubby", "", "Yes~! Please, I'll be your good little slut~! My daughter might be tighter, but I promise I'll let you use my breasts however you like~!");
			writeBig("images/purple/AA4.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Aaah~!");
			writeSpeech("purple", "", "Fuck, *he's cumming~! You'd better swallow fast, bitch, or I'll suck that load right out of your mouth!");
			writeText("chubbyF does her best to swallow your load, whatever strands of jizz actually land in her open mouth that is. All of the cum that goes astray, landing in her hair or on her face, is quickly lapped up by her daughter's agile tongue.");
			writeText("As you step back purpleF is true to her word, leaning into a deep kiss with her mother to try and fish out any unswallowed ropes of jizz. Thoroughly cock-drunk, chubbyF dazedly lets her daughter eat the jizz from her mouth before she begins fighting back. The two of them wrestle tongues for a moment, until they realize the only free drops of cum left are dripping from your cock onto the carpet.");
			writeSpeech("chubby", "", "Ah, more~! Mo-");
			writeSpeech("purple", "", "Mine~! Fuck off bitch, you already came~!");
			writeText("...");
			writeText("The two playfully fight over you until they realize what's really important; enjoying a fat dick together, as a family.");
			break;
		}
		case "purplerouteAQuickieAB": {
			writeSpeech("purple", "", "Gotcha. Lemme get her ready for you, okay?");
			writeSpeech("player", "", "Sure. Oh, feel free to let loose, alright? No need to hold yourself back, enjoy the show today.");
			writeText("You stretch out a little, get undressed and make sure you're suitably hard as you hear the sounds of the two women talking and grunting from the other room, peppered with a few soft gasps.");
			writeSpeech("purple", "", "*Master~! She's ready~!");
			writeText("You walk into the room, ready to enjoy yourself.");
			writeBig("images/purple/AB1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hey, hey *master! You want her ass, or her cunt?");
			writeSpeech("chubby", "", "T-they're yours... Yours for the taking...");
			writeSpeech("player", "", "I think I'll take... Both.");
			writeBig("images/purple/AB2.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Ah~!");
			writeSpeech("purple", "", "Whoa...");
			writeText("chubbyF is at a loss for words as her cunt is penetrated, shuddering with pleasure at the feeling of being spread apart, but also with shame at the feeling of her daughter's gaze just inches away from her pussy getting stuffed.");
			writeText("purpleF on the other hand is starstruck, completely enraptured with the up-close view.");
			writeSpeech("purple", "", "... She's quivering, I can feel her pussylips move whenever you thrust...<br>Hey, hey, does my pussy do this too?");
			writeSpeech("chubby", "", "Suh... Stop... She's watching... Watching me...");
			writeSpeech("purple", "", "And your swinging balls... So hypnotizing...");
			writeText("purpleF lifts her head a little so that she can give a soft kiss to your balls at the end of each thrust, before you feel them start to tighten.");
			writeSpeech("purple", "", "Uooh~! So cool~! Hey, *master, are you gonna cum? I'm gonna get messy anyways when she starts squirting, so don't hold back~!");
			writeSpeech("chubby", "", "Guh... No~! Stu... Nnngh~!");
			writeText("chubbyF's breathing grows erratic, for a second you think she might be breaking free from the hypnosis, until...");
			writeSpeech("chubby", "", "Cumming~!");
			writeText("In one swift motion, you pull out and thrust into her ass as she's mid-climax.");
			writeBig("images/purple/AB3.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Ggguuhd~!");
			writeSpeech("purple", "", "Whoooa! It's everywhere~!");
			writeSpeech("chubby", "", "Nnngh... purpleF...");
			writeSpeech("purple", "", "Mmm, it's really warm...");
			writeSpeech("chubby", "", "My daughter... My daughter is...");
			writeText("You slam your hips against her asscheeks an orgasm sweeps through her body just from the realization of how fucked-up the situation she's in is.");
			writeSpeech("purple", "", "Aah~! Mom, you pervert~<br>Oh, oh, you're cumming, right? Right?");
			writeSpeech("chubby", "", "Noo~! I'm still... Ghhhg~");
			writeSpeech("purple", "", "Can you feel it? Hey, hey, pull out! She needs a creampie too, you know?");
			writeText("The room spins as you keep cumming, chubbyF letting out giggles as it's clear she's gone over the edge and then some already.");
			writeText("Finally, you take a step back.");
			writeBig("images/purple/AB4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Gah~! She keeps squirting out your cum, you're fucking it all out of her!");
			writeSpeech("chubby", "", "Guh... You'll fill me up again, right~?");
			writeSpeech("purple", "", "Fuck that! I'm next, you whore!");
			writeSpeech("chubby", "", "Can't... Can't last much longer... C-... Cumming~!");
			writeSpeech("purple", "", "Whoa... You always cum so much, *master.<br>Mmm, I think I'll have some more!");
			writeSpeech("chubby", "", "Ehe... Ehehe... purpleF... My little baby is... Ehehe... Ahaha~!<br>Drink it! Suck *his creampie out of my ass~!");
			writeText("...");
			writeText("chubbyF continues to crack farther and farther. Where purpleF seems to be sinking in as a defense mechanism, chubbyF is starting to awaken to some seriously fucked up fetishes.");
			writeText("You watch chubbyF take the lead for once, and once you're finished having your fun you bid them farewell.");
			writeSpeech("purple", "", "Come back soon, okay m-phhh~");
			writeSpeech("chubby", "", "Shhh! Lick~! Lick more~! Cumming~!");
			break;
		}
		case "purplerouteAQuickieBA": {
			writeBig("images/purple/BP1.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Get ready purpleF, I'm having you first.");
			writeSpeech("purple", "", "Please~! I can't hold back any longer~! I need it so bad it hurts~!");
			writeSpeech("chubby", "", "Nnngh... You're gonna fuck my little girl right in front of me again, just like when you broke me...");
			writeBig("images/purple/BP2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Cock~! Dick~! ");
			writeSpeech("chubby", "", "Now honey... Is that any way to ask for-");
			writeSpeech("purple", "", "Sh-shut up, bitch~! I can't hold on any longer, please! Give me <b>what I need</b>!");
			writeBig("images/purple/BP3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "AAAAH~!");
			writeSpeech("chubby", "", "She's cumming so quickly...<br>Darling? Can you even hear me?");
			writeSpeech("purple", "", "CUMMING~! HARDER~!");
			writeSpeech("chubby", "", "You were such a sweet girl, once... I'm glad you can be happy again. I love you, dear.");
			writeSpeech("purple", "", "FUUUCK~! God, I'm gonna fucking <b>SQUIRT</b> all over this HUGE~! FUCKING~! DICK~!");
			writeBig("images/purple/BP4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Cu... Cumm...");
			writeText("Her voice starts to crack as her legs shake, her cunt gushing as you begin to fill her womb.");
			writeBig("images/purple/BP5.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Ah~... So full~<br>... Mommy... I'm really sleepy...");
			writeSpeech("chubby", "", "It's okay, dear, just let go. Don't worry, mommy's here...");
			writeText("Her womb stuffed, purpleF's eyes flutter and close.");
			writeSpeech("chubby", "", "... She really is happy like this... No nightmares, no worries...<br>Thank you...");
			writeSpeech("player", "", "Did the hypnosis break?");
			writeSpeech("chubby", "", "It doesn't matter anymore, does it?");
			writeBig("images/purple/BC2.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "I suppose it doesn't, really. You ready?");
			writeSpeech("chubby", "", "Yes... Fuck me up, just like my daughter... I want to be broken too...");
			writeBig("images/purple/BC3.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Aaah~! This is it~! This is the pleasure that makes me stop thinking, stop worrying~!");
			writeSpeech("player", "", "You'll wake her if you scream too loud.");
			writeSpeech("chubby", "", "I don't care~! She's broken, shattered, I'm sure she'd suck your balls between each thrust so you'd fuck her back asleep faster~!");
			writeBig("images/purple/BC4.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Ghhhg~! Cumming~!");
			writeSpeech("player", "", "Think your next daughter will be like purpleF?");
			writeSpeech("chubby", "", "Guh... I...");
			writeBig("images/purple/BC5.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "I hope so... ");
			break;
		}
		case "purplerouteAQuickieBB": {
			writeBig("images/purple/BC1.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Get ready chubbyF, I'm having you first.");
			writeSpeech("chubby", "", "Ghh... Okay... Please, don't tease me...");
			writeBig("images/purple/BC2.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "So big...");
			writeSpeech("purple", "", "Nooo~! It's not fair, you stole him from me! If you hadn't seen us that day, he'd be all mine! How come you wanna fuck <i>her</i>, instead of this teen ass? I'm way ti-");
			writeSpeech("chubby", "", "QUIET!");
			writeSpeech("purple", "", "...");
			writeSpeech("chubby", "", "I'm tired of your attitude! Mommy needs breaking too, so shut up and wait for your turn to get your womb ballooned!");
			writeSpeech("purple", "", "Okay...");
			writeSpeech("chubby", "", "And you! Take some responsibility for ruining my sweet little girl, for breaking my psyche by making me watch as you stuffed her, and <b>fuck</b>! <b>My</b>! <b>CUNT</b>!");
			writeBig("images/purple/BC3.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Aaah~! YES~!");
			writeSpeech("player", "", "So, you think you're giving the orders now, huh?");
			writeSpeech("purple", "", "Oooh, mom's in <i>trouble</i>~");
			writeSpeech("chubby", "", "HARDER~! PUMP MY WOMB, GIVE ME A SECOND CHANCE~!");
			writeSpeech("purple", "", "M-mom?");
			writeSpeech("chubby", "", "I-I'm s-sorry dear~! I screwed up~! You were supposed to have a bright future~!");
			writeSpeech("player", "", "So held back at first, the quiet ones really do end up the most fucked up when you see what's inside. Don't feel too bad, purpleF, she's cracked.");
			writeSpeech("chubby", "", "GHHHGH~! CUMMING~!");
			writeBig("images/purple/BC4.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Ghh... I can feel it... I wanna get pregnant... Gimme... back... my little... girl...");
			writeBig("images/purple/BC5.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Good...");
			writeText("After getting a good look at her jizz-leaking cunt, chubbyF lets her head rest against the floor. Her eyes flutter, then shut as she falls asleep, content.");
			writeSpeech("purple", "", "Mom? Mom, are you okay?");
			writeSpeech("player", "", "She's fine, just fucked her lights out. You're next. Spread.");
			writeBig("images/purple/BP1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "O-okay...<br>Did I... Am I messed up? Am I-");
			writeSpeech("player", "", "You're a good girl, purpleF. Don't worry about any of that, okay? Just relax, let the heat inside you take over, just like <i>normal</i>.");
			writeBig("images/purple/BP2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Normal... Normal...");
			writeSpeech("player", "", "Relax, let yourself sink deeper. Everything will be okay, chubbyF and I are here.");
			writeSpeech("purple", "", "Normal... Wanting cock is normal... Watching my mom cum is normal...");
			writeBig("images/purple/BP3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Ah~! Getting f-fucked~! Is normal~! Cumming~! Is normal~!");
			writeSpeech("player", "", "No fears, no anxiety, nothing but here and now, and how long until you get fucked again...<br>Ghh... Cumming...");
			writeBig("images/purple/BP4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Ggghh~! Getting... Getting creampied... With my fucked-out mom next to me... Cumming... Is normal~...");
			writeBig("images/purple/BP5.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "You get some rest, alright? When you open your eyes again, you'll be with your loving mother, waiting for your *master to arrive again. You'll carry on, enjoying the little things, and not let yourself get pulled under thinking negative thoughts. Everything will go on, just like...?");
			writeSpeech("purple", "", "Normal... Thank you... *Master...");
			break;
		}
		case "purpleEndingA": {
			writeBig("images/purple/ending1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Cheese~!");
			writeText("*CLICK*");
			writeSpeech("purple", "", "Mom, you didn't say it!");
			writeSpeech("chubby", "", "I was still smiling though, right playerF?");
			writeText("purpleF gently elbows her in the side.");
			writeSpeech("chubby", "", "Ah, *master, sorry.");
			writeSpeech("player", "", "The picture came out good. You two look great. You two sure are sending a lot of cards out this year, what's the occasion?");
			writeSpeech("chubby", "", "The marriage, silly~!");
			writeSpeech("player", "", "Ah, right. Gotta keep up appearances. You two are really into this, almost like it isn't a front. Maybe I should re-hypnotize you tw-");
			writeBig("images/purple/ending2.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Ah... Are you two trying to distract me again?");
			writeSpeech("chubby", "", "My, I'm not sure what you're talking about.");
			writeSpeech("purple", "", "Yeah. You're the one acting weird today da-*ahem*. *Master.");
			writeSpeech("player", "", "It feels like you two just happen to get into the mood whenever hypnosis comes up.");
			writeSpeech("purple", "", "You're so weird! Everyone knows hypnosis isn't real, silly~!<br>And you should know by now we're <i>always</i> in the mood. Speaking of which...");
			writeBig("images/purple/ending3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Which one of us do you wanna fuck first?");
			writeText("You sigh as the two of them present their bare asses to you. Sometimes you wonder if they're actually still in a trance. They must be, right? Even if they wanted to keep your around they'd never be begging for public fucks like this if they weren't, they'd need to be total sluts to the core.");
			writeSpeech("player", "", "<i>Not to mention how excited they are for the wedding.<br>I guess the tone was pretty romantic when I proposed, but it's just to keep up appearances, right?</i>");
			writeBig("images/purple/ending4.jpg", "Art by Oreteki18kin");
			writeText("The pair found a bench to get comfortable on, and spread their legs.");
			writeSpeech("chubby", "", "Fuck purpleF first, seeing her squirt really gets me ready for a fuck.");
			writeSpeech("purple", "", "Aww, thanks mom...<br>But we kept you up really late last night when my voice gave out, from the anal marathon? I think you deserve first dibs today.");
			writeSpeech("player", "", "Seriously... What am I gonna do with you two?");
			writeSpeech("purple", "", "Fuck us, duh!");
			writeText("The pair of them finally learned how to share you, inside and outside the bedroom. They really seem to enjoy daily life nowadays, even the days where you aren't spending all your time dicking them. You still do 'counseling' at the university, but these two are getting to be a serious handful.");
			writeBig("images/purple/ending5.jpg", "Art by Oreteki18kin");
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
		case "purpleReward": {
			writeSpeech("purple", "", "Hey *master! Me and mom agreed you should be able to get into our place whenever you want, so we left a key under a rock near the front door. Feel free to drop in anytime <3");
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