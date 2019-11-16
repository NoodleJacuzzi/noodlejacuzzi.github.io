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
			writeSpeech("purple", "", "Mom? We've got a guest. He's a counselor from school.");
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
			writeSpeech("purple", "", "This is a petunia, it was a gift from dad. He'd give me fresh ones I'd clip onto my bag. This one's getting a bit old, but...");
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
			writeSpeech("player", "", "And you can call me master from now on. It's just what's <b>normal</b>.");
			writeSpeech("purple", "", "Yeah sure, master. Listen I gotta get home. I told my mom I'd be home already, she's probably already caling the police.");
			writeSpeech("player", "", "That'd be a problem. I'll see you later then. And for our next session, it'll be at your house? Just like <b>normal</b>?");
			writeSpeech("purple", "", "Of course master! I'll catch you later!");
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
			writeSpeech("purple", "", "Ah! Master! I've been waiting for-");
			writeSpeech("player", "", "Shh! Calling me master in public isn't <b>normal</b>.");
			writeText("She enthusiasm is instantly halted as she looks around.");
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
			writeText("...");
			writeSpeech("player", "", "Well, I'll be going now.");
			writeSpeech("chubby", "", "Come back anytime!");
			writeSpeech("purple", "", "Come back and fuck me whenever you want some of this schoolgirl pussy, master!");
			writeText("You leave with a chuckle "+fName('chubby')+" scolds her daughter for her vulgar language.");
			writeSpeech("chubby", "", "Language like that is for in private young lady, or you'll get master in trouble!");
			writeText("She'll need some time and some direction from her daughter, but "+fName('chubby')+" is well under your control now. You'll come back later to enjoy her, and her daughter too.");
			data.player.location = 'vintageStreet';
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust('purple', 99);
			passTime();
			break;
		}
		case "purple9": {
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
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "purple1", name: "Daughter's Payment 1"},
	{index: "purple2", name: "Daughter's Payment 2"},
	{index: "purple3", name: "Family Bonding"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "purple1": {
			writeText("The two of enter "+fName('purple')+"'s house together.");
			writeSpeech("chubby", "", "Welcome home! Oh, hello "+data.player.name+"!");
			writeSpeech("player", "", "Good to see you again "+fName('chubby')+". I'm here to help your daughter in a more relaxed environment. We'll be heading up to her room, if that's fine.");
			writeSpeech("chubby", "", "Oh, well I don't-");
			writeSpeech("purple", "", "It's fine, mom! I'll see you up there, alright "+data.player.honorific+"?");
			writeText(""+fName('purple')+" runs upstairs. "+fName('chubby')+" is left shocked and turns to you.");
			writeSpeech("chubby", "", "My goodness, she's just like her old self! I...");
			writeText("Tears are starting to form in "+fName('purple')+"'s eyes.");
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
			writeSpeech("purple", "", "Th-thank-*COUGH*<br>Thank you... *ahem*... Very much master. Can we do it again?");
			writeSpeech("player", "", "Next time. We don't want your mother getting too suspicious. Clean yourself up, I'll see you later.");
			writeSpeech("purple", "", "I will master!");
			break;
		}
		case "purple2": {
			writeSpeech("player", "", "Hello "+fName('purple')+", here for another-");
			writeText("She pulls you into your office and closes the door behind you before pulling you into a deep kiss.");
			writeText("It's desperate and hungry, she's forcing her tongue into your mouth but starts shuddering when you push back.");
			writeSpeech("purple", "", "*mwah*! Master... I need more. I haven't been able to stop playing with myself. Even in class, I...");
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
			writeText("Tears have started to form in he eyes as her brain tries to process the sensations.");
			writeSpeech("player", "", "Breaking down already, huh? I-");
			writeText("You're interrupted while you pull out when she wraps her legs around you.");
			writeSpeech("player", "", "Fine. I see what you want. One more scream out of you though and we stop here.");
			writeText("...");
			writeBig("images/purple/2-5.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hah... Hah...<br><i>Can't think... More...</i>");
			writeText("Her cunt thoroughly filled with cum, you pull out only to hear a sound from behind you.");
			writeSpeech("player", "", "We've got a voyeur. Come with me, "+fName('purple')+".");
			writeSpeech("purple", "", "Mhm...");
			writeFunction("writeEvent('purple3')", "Head downstairs");
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
			writeSpeech("purple", "", "Nggh... Cmon mom! Stop distracting him! Fuck, I'm cumming again!");
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
	{index: "purpleReward", trust: 100,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "purpleReward": {
			writePhoneImage("images/purple/4-2.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("purple", "", "You've finished all of "+fName('purple')+"'s & "+fName('chubby')+"'s content for this version, congratulations!");
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