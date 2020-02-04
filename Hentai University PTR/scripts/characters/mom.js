var character = {index: "mom", met: false, fName: "Emily", lName: "Smith", trust: 0, encountered: false, textEvent: "", color: "#CCCCCC",};

var logbook = { //Logbook details for each character.
	index: "mom", 
	desc: "A widowed woman, she's older than you. She honestly seems lonely sometimes, even though she can be a bit blunt.",
	body: "She's probably into her fourties, but she'd never tell. She has light hair and a very curvaceous body.",
	clothes: "Her preferred outfit is a v-neck shirt thin enough that you can faintly make out her black bra through it and a pair of jeans.",
	home: "She lives in the same apartment complex as you. She occasionally goes to buy groceries in the shopping district.",
	tags: "Unshaven, Drunken Sex, Vanilla, Pregnancy (Ending)",
	artist: "Enoshima Iki",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
	{name: "Beer", 				key: true, 		price: 5, 	image: "scripts/gamefiles/items/beer.jpg", description: "A can of beer. You don't drink it, but some people do."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "mom1A", name: "Someone is at the door", location: 'playerHouse', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mom1B", name: "A woman is struggling with some bags", location: 'apartmentOutside', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "mom2A", name: "mom is bringing in groceries", location: 'apartmentOutside', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "mom2B", name: "mom is shopping around", location: 'shoppingDistrict', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mom3", name: "mom is drunkenly stumbling home", location: 'apartmentOutside', time: "Evening", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "mom4", name: "mom is walking down the street", location: 'vintageStreet', time: "Evening", itemReq: "Beer", trustMin: 79, trustMax: 89, type: "tab", top: 0, left: 0, day: "both",},
	{index: "mom5", name: "Knock on mom's door", location: 'apartmentOutside', time: "MorningEvening", itemReq: "", trustMin: 90, trustMax: 90, type: "tab", top: 0, left: 0, day: "both",},
]

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "mom1A": {
			//Write the event's text here using writeText, writeSpeech, and writeBig for images.
			writeText("*KNOCK* *KNOCK* *KNOCK*");
			writeSpeech('player', '', 'Coming, hold on a second.');
			writeText("You crack your neck and walk over to open the door.");
			writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeSpeech('mom', '', 'Hiya!');
			writeText("A woman is at the door, probably in her early fourties but still quite beautiful. She has faint wrinkles beside her eyes, but what catch your attention right away are her nipples, large enough to make visible bumps through her bra and shirt.");
			writeText("You manage to play it off as a wandering glance though, totally smooth.");
			writeSpeech('mom', '', "The name's " + fName('mom') + " " + lName('mom') + ", I'm your neighbor a few doors down.");
			writeSpeech('player', '', "Nice to meet you, I'm " +data.player.name + ".");
			writeText("She shakes your hand with a firm, energetic grip.");
			writeSpeech('mom', '', "I've seen you walk by a few times. If you're ever lost I can't help, but I can point you in the direction of the market if you need it.");
			writeSpeech('player', '', "I might take you up on that some time, I'm new in town.");
			writeSpeech('mom', '', "No problem, it's that way!");
			writeText("She points off in a vaguely westward direction before laughing at her joke.");
			writeText("She quickly takes the reigns of the conversation, bouncing between subjects like the weather, the state of the building, and at some point she glides right past the fact that she's a widow.");
			writeText("Her incredibly strong personality makes itself clear right away. Even a *Master hypnotist would have trouble getting through her will with months of preparation.");
			writeText("Still, she seems eager enough for some company that you could quickly make friends with her. Spending some time listening to her go on about nothing in particular and not completely sperging out will probably be enough.");
			writeText("Eventually the conversation slows back down.");
			writeSpeech('mom', '', "Aw damnit, is it that late already? I gotta get back in and quit wasting your time.");
			writeSpeech('player', '', "Only if you promise to waste it again, it's been lovely to get to know you.");
			writeSpeech('mom', '', "Ha! Little flirt, I'm old enough to be your mother.");
			writeSpeech('player', '', "Talk you later, " + fName('mom') + ".");
			writeSpeech('mom', '', "Bye!");
			passTime();
			setTrust('mom', 40);
			writeFunction("changeLocation(data.player.location)", "Go back inside");
			break;
		}
		case "mom1B": {
			writeText("The woman brings her bag through the doorway, but one breaks open at the bottom spilling out onto the floor.");
			writeSpeech('mom', '', "God...! Damn little...");
			writeSpeech('player', '', "Need some help?");
			writeSpeech('mom', '', "Yes please, one second...");
			writeText("You pick up the small bags of dried fruit that fell out.");
			writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeSpeech('mom', '', "Thanks. Lucky it wasn't the wine, right?");
			writeText("The woman in the doorway is probably in her early fourties but is still quite beautiful. She has faint wrinkles beside her eyes, but what catch your attention right away are her nipples, large enough to make visible bumps through her bra and shirt.");
			writeText("You manage to play it off as a wandering glance though, totally smooth.");
			writeSpeech('mom', '', "Oh hey, you new in town?");
			writeSpeech('player', '', "Yes actually, I just moved in. The name's " +data.player.name + ".");
			writeSpeech('mom', '', "The name's " + fName('mom') + " " + lName('mom') + ", I'm your neighbor a few doors down. If you're ever lost I can't help, but I can point you in the direction of the market if you need it.");
			writeSpeech('player', '', "I might take you up on that some time, I'm not great at navigation.");
			writeSpeech('mom', '', "No problem, it's that way!");
			writeText("She points off in a vaguely westward direction before laughing at her joke.");
			writeText("She quickly takes the reigns of the conversation, bouncing between subjects like the weather, the state of the building, and at some point she glides right past the fact that she's a widow.");
			writeText("Her incredibly strong personality makes itself clear right away. Even a *Master hypnotist would have trouble getting through her will with months of preparation.");
			writeText("Still, she seems eager enough for some company that you could quickly make friends with her. Spending some time listening to her go on about nothing in particular and not completely sperging out will probably be enough.");
			writeText("Eventually the conversation slows back down.");
			writeSpeech('mom', '', "Aw damnit, is it that late already? I gotta get back in and quit wasting your time.");
			writeSpeech('player', '', "Only if you promise to waste it again, it's been lovely to get to know you.");
			writeSpeech('mom', '', "Ha! Little flirt, I'm old enough to be your mother.");
			writeSpeech('player', '', "Talk you later, " + fName('mom') + ".");
			writeSpeech('mom', '', "Bye!");
			passTime();
			setTrust('mom', 40);
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2A": {
			writeText("As you're walking down the hall you see " + fName('mom') + " walking towards her apartment. She's got an emotionally drained look in her eyes, so you call out to her and her expression brightens.");
			writeSpeech('mom', '', "" +data.player.name + "! Hey how've you been? Help me carry these in?");
			writeSpeech('player', '', "Sure, no problem.");
			writeText("You help her get her bags inside. She offers you to sit down at the table and hands you a glass of water.");
			writeText("...");
			writeText("As you get comfortable in your seat, you notice " + fName('mom') + " preparing some tea with a soft smile on her face.");
			writeFunction("loadEncounter('mom','mom2AA')", "Strike up a conversation");
			writeFunction("loadEncounter('mom','mom2AB')", "Enjoy the silence");
			passTime();
			setTrust('mom', 60);
			break;
		}
		case "mom2AA": {
			writeSpeech("player", "", "So do you always walk to and back from the shopping district? It's a pretty long road from the store back home.");
			writeSpeech("mom", "", "Yeah. The road is usually deserted by now. It's usually quiet, but today it felt pretty nice. What about you?");
			writeSpeech("player", "", "Oh I was just in the neighborhood, not really looking for anything in particular.");
			writeSpeech("mom", "", "Well you found it. Got the lay of the land yet?");
			writeSpeech("player", "", "Yeah I think I've got a pretty good grasp of the town by now. It's a nice place. I could definitely see myself staying here.");
			writeSpeech("mom", "", "That's great! It's always nice to know you can set your roots somewhere.");
			writeText("...");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2AB": {
			writeText("You decide to remain quiet and enjoy the silence.");
			writeText("...");
			writeText("Eventually, " + fName('mom') + " brings up something about the weather and the two of you are wrapped up in smalltalk.");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways. ");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2B": {
			writeText("As you're walking down the road you see " + fName('mom') + " walking towards her apartment. She's got an emotionally drained look in her eyes, so you call out to her and her expression brightens.");
			writeSpeech('mom', '', "" +data.player.name + "! Hey how've you been? Help me carry these home?");
			writeSpeech('player', '', "Sure, no problem.");
			writeText("You take half her bags and start walking down the street alongside her.");
			writeText("...");
			writeText("The two of you walk in silence for a moment. It isn't an awkward one, and " + fName('mom') + " has a soft smile on her face.");
			writeFunction("loadEncounter('mom','mom2BA')", "Strike up a conversation");
			writeFunction("loadEncounter('mom','mom2BB')", "Enjoy the silence");
			passTime();
			setTrust('mom', 60);
			data.player.location = "apartmentOutside";
			break;
		}
		case "mom2BA": {
			writeSpeech("player", "", "Do you always walk this way? It's a pretty long road from the store back home.");
			writeSpeech("mom", "", "Yeah. This road is usually deserted by now. It's usually quiet, but today it feels pretty nice. What about you?");
			writeSpeech("player", "", "Oh I was just in the neighborhood, not really looking for anything in particular.");
			writeSpeech("mom", "", "Well you found it. Got the lay of the land yet?");
			writeSpeech("player", "", "Yeah I think I've got a pretty good grasp of the town by now. It's a nice place. I could definitely see myself staying here.");
			writeSpeech("mom", "", "That's great! It's always nice to know you can set your roots somewhere.");
			writeText("...");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2BB": {
			writeText("You decide to remain quiet and enjoy the silence.");
			writeText("...");
			writeText("Eventually, " + fName('mom') + " brings up something about the weather and the two of you are wrapped up in smalltalk.");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways. ");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom3": {
			writeText("It'd be hard to miss her, as she's drunkenly mumbling half the words to some old pop song while fumbling with her keys.");
			writeSpeech('player', '', "Have a fun afternoon?");
			writeText("She jumps on the spot, scard for just a second before she gives you a smile that says 'glad to see you'.");
			writeSpeech('mom', '', "" +data.player.name + "! Heyyyyyy! Cmon in!");
			writeText("You'd intended just to say hi, but what the hell.");
			writeText("...");
			writeSpeech('mom', '', "Fuggin sweet... Got a phone number...");
			writeSpeech('player', '', "Don't give it out like candy, I only give my number to people I like.");
			writeSpeech('mom', '', "Fu... Who the fuck am I gonna give it out to, huh?");
			writeText("She waves her phone in your face, showing off her empty contacts list. You see a few numbers she hasn't spoken to in years, and there isn't even a 'mom' or a 'dad' entry.");
			writeSpeech('mom', '', "Hehe... Eheh... Ha! I've got your nuuuumber. You'd better reshpond if I send you something...");
			writeText("Eventually she starts heavily slurring her words, she's walking the edge of conciousness.");
			writeSpeech('player', '', "You alright? Maybe I should get going.");
			writeSpeech('mom', '', "Nooooo! Hey we've got all day left, don't leave me alone! You don't talk much, but beeee-lieve me, it gets quiet when I'm alone in here buddyyy...");
			writeText("She lazily grabs onto your arm, holding it tightly. You can feel her soft hands, but also her breasts through her shirt against your skin.");
			writeText("You weigh the options, but one thing tips the scales. Having your way with her here would feel nice, but it'd also be temporary at best.");
			writeText("She's a nice friend, and maybe that could go somewhere in the future. You'll be a gentleman here, especially since she's an awful pick for hypnotizing. Getting away with it would be more trouble than it's worth.");
			writeSpeech('player', '', "Alright " + fName('mom') + ", time to get you into bed.");
			writeSpeech('mom', '', "Fuggin... Not even fuggin tired you little bitch...");
			writeText("You get her into bed without much trouble despite her protests. Before you leave she grabs onto your hand for a few moments before she's out like a light.");
			passTime();
			setTrust('mom', 80);
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom4": {
			writeEvent('mom1');
			removeItem('Beer');
			writeText("...");
			writeSpeech("mom", "", "You should go, I've already sobered up. I'm sorry.");
			writeSpeech("player", "", "We can talk tomorrow, alright? I'm still here for you if you need me.");
			passTime();
			setTrust('mom', 90);
			data.story[0].textEvent = '';
			data.player.location = "apartmentOutside";
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom5": {
			writeEvent('mom2');
			writeText("...");
			writeText("You two spend the next few hours enjoying each other's company, before finally the two of you begin to get dressed.");
			writeSpeech("player", "", "This was nice. Wanna do it again sometime?");
			writeSpeech("mom", "", "Sure. I'll be out of town for a few days, but I'll be back soon. We can, well, have some fun once I'm back.");
			writeSpeech("player", "", "It's a date.");
			passTime();
			setTrust('mom', 100);
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "mom1", name: "Drinking Buddy",},
	{index: "mom2", name: "Breaking Tensions",},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "mom1": {
			writeSpeech("player", "", ""+fName('mom')+"! Hey!");
				writeText("She has a familiar despondent look in her eyes, but it softens as she sees you waving from across the street.");
				writeText("She gives you a small wave back and you walk over to her.");
				writeSpeech("player", "", "Care for some company?");
				writeSpeech("mom", "", "I would. Thank you.");
				writeText("Her voice is quiet, she seems down. The two of you walk in an unusual silence.");
				writeBig("images/mom/1-1.jpg", "Art by Enoshima Iki");
				writeText("She really is gorgeous, it's a shame she's not very open to hypnosis.");
				writeBig("images/mom/1-2.jpg", "Art by Enoshima Iki");
				writeSpeech("player", "", "Ah, sorry.");
				writeSpeech("mom", "", "It's fine.");
				writeText("She seems like she noticed you staring, but doesn't say anything else.");
				writeText("The two of you make your way back to the apartment complex, but when you reach your door "+fName('mom')+" grasps your hand and pulls you towards her apartment.");
				writeSpeech("mom", "", "You have booze right? I need a drink, and I'm almost dry.");
				writeSpeech("player", "", "Yeah, I have some.");
				writeText("...");
				writeBig("images/mom/2-1.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "And so then what happened next? Nothing! Nothing at all!");
				writeText("She got changed into her pajamas before she started downing the booze. Her massive breasts are just barely visible through the near-transparent top.");
				writeSpeech("player", "", "Uhuh. Yeah.");
				writeText("After only a few cans she seems well past buzzed and is now droning on about nothing at all. It'd be fine if you had something to drink too, but she isn't sharing.");
				writeSpeech("player", "", "Well, I should probably get going. Early day tomorrow.");
				writeBig("images/mom/2-2.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Hey.");
				writeText("She sits up, slightly wobbly.");
				writeSpeech("mom", "", "Fuck you.");
				writeSpeech("player", "", "Excuse me?");
				writeSpeech("mom", "", "I'm hot, right? Why did you just leave the other night?");
				writeSpeech("player", "", "I'm sorry? Did you want me to do something? Like, sexual, to you while you were drunk?");
				writeSpeech("mom", "", "Hell no, I would've punched the shit out of you.");
				writeSpeech("player", "", "I don't understand. What do you want then?");
				writeText("She looks frustrated, more at herself than you.");
				writeSpeech("mom", "", "I just... I want something, you know? I wanna speak my mind without drinking. I don't want to spend all day waiting for the day to end. I don't want to hear about community events and then chicken out at the last moment, telling myself 'I bet I'll have an awful time anyways!'<br>I just...");
				writeBig("images/mom/2-3.jpg", "Art by Enoshima Iki");
				writeText("She lifts her top, letting her tits flop out.");
				writeSpeech("mom", "", "Here! Stare at them all you want. I could feel you looking at them while we were walking.");
				writeSpeech("player", "", "You're my friend "+fName('mom')+", but I'm getting tired of this. You look gorgeous, what's wrong?");
				writeSpeech("mom", "", "I just... I don't want to be alone right now. Please stay.");
				writeSpeech("player", "", "And if I do?");
				writeSpeech("mom", "", "T-then I'll do whatever you-");
				writeBig("images/mom/2-4.jpg", "Art by Enoshima Iki");
				writeText("You grab her by the waist and take her nipple into your mouth.");
				writeSpeech("mom", "", "Mmmnn...");
				writeText("You suck hungrily on her nipple, and she's squirming in your grasp.");
				writeText("Within moments, a full-body shiver makes its way up her body and she gasps.");
				writeText("Wordlessly, she pants. She must've been on a pretty long dry spell.");
				writeSpeech("mom", "", "... You're next. Take off your pants. I'm not going to go far, but I can at least help you out too.");
				writeText("...");
				writeBig("images/mom/2-5.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Just leave everything to me. Don't think about anything else, okay?<br><i>Just keep your mind clear. No backing out now.</i>");
				writeText("Her gentle hand slides up and down your shaft.");
				writeSpeech("mom", "", "Don't hold it in. Just focus on my hand. Let it all out.");
				writeBig("images/mom/2-6.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Ah, it shot pretty high.");
				writeText("There's an almost relaxed admiration in your voice as she watches sperm ooze out from your cockhead.");
			break;
		}
		case "mom2": {
			writeSpeech("player", "", "Hello?");
			writeSpeech("mom", "", "Good morning!");
			writeBig("images/mom/3-1.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "I was just on my way to pick up a few things, wanna come?");
			writeSpeech("player", "", "Yeah, sure.");
			writeText("...");
			writeBig("images/mom/3-2.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "So, about last night.");
			writeBig("images/mom/3-3.jpg", "Art by Enoshima Iki");
			writeText("She sighs, trying to collect herself.");
			writeSpeech("mom", "", "Yes. Listen. I like you, you like me, right?");
			writeSpeech("player", "", "Yep. Wouldn't have spent as much time with you if I didn't enjoy hanging out with you.");
			writeBig("images/mom/3-4.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Ugh. This really wasn't worth all the worrying, was it?");
			writeSpeech("player", "", "Cmon. Let's head home.");
			writeText("...");
			writeBig("images/mom/3-5.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Ohhh... I don't get why you like them so much.");
			writeText("You knead her breasts, enjoying her wrthing as you run your fingers over her nipples.");
			writeBig("images/mom/3-6.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "A-ahhh...<br>How... Long are you going to spend teasing me?");
			writeSpeech("player", "", "As long as I like.");
			writeSpeech("mom", "", "Well, I can't wait anymore");
			writeText("She pulls you by the arm over to her bed, and tosses you a string of condoms.");
			writeSpeech("mom", "", "You know how to use them, right?<br>... Sorry, of course you do. I'm just-");
			writeSpeech("player", "", "Shh.");
			writeBig("images/mom/3-7.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "You're really wet.");
			writeSpeech("mom", "", "Don't say stuff like that out loud, I'll get self-conscious.<br>And I don't want to see any of that 'pump and dump' stuff I hear about, alright? IF you feel like you're going to pop early, sto-");
			writeBig("images/mom/3-8.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Aaaaa~!!<br>S-stop~! I wasn't... Nnn...");
			writeSpeech("player", "", "You're more than ready. Don't hold back. A beautiful woman like you deserves to get lost in the sensation.");
			writeSpeech("mom", "", "S-stop... Aaah~<br>Quit it with the corny... With the corny smooth talking.");
			writeSpeech("player", "", "You're right. No more words.");
			writeBig("images/mom/3-9.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Aaaah~!");
			writeText("Her legs shaking, you ride through an orgasm, filling the first condom of many tonight.");
			break;
		}
	}
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
	{index: "momPhone1", trust: 80,},
	{index: "momPhone2", trust: 81,},
	{index: "momPhone3", trust: 82,},
	{index: "momPhone4", trust: 83,},
	{index: "momPhone5", trust: 84,},
	{index: "momReward", trust: 100,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "momPhone1": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage for images, and writePhoneChoices
			writePhoneSpeech("mom", "", "Hello. This is "+fName('mom')+".");
			writePhoneChoices("Sleep well?", "Who?");
			break;
		}
		case "momPhone1A": {
			writePhoneSpeech("player", "", "Sleep well?");
			writePhoneSpeech("mom", "", "Yes. I have not slept that well in years, thank you.");
			writePhoneSpeech("mom", "", "It was probably the booze though.");
			writePhoneSpeech("mom", "", "I will talk to you again later.");
			writePhoneSpeech("player", "", "Take care.");
			setTrust('mom', 81);
			break;
		}
		case "momPhone1B": {
			writePhoneSpeech("player", "", "Who?");
			writePhoneSpeech("mom", "", "Sorry. I must have the wrong number. Please have a nice day.");
			writePhoneSpeech("mom", "", "Wait");
			writePhoneSpeech("mom", "", "You jerk I can see your picture attached to the number");
			writePhoneSpeech("player", "", "Sorry, I couldn't resist. How're you doing?");
			writePhoneSpeech("mom", "", "I am doing well. Still hungover. Good night.");
			writePhoneSpeech("player", "", "Take care. Talk to you later.");
			setTrust('mom', 81);
			break;
		}
		case "momPhone2": {
			writePhoneSpeech("mom", "", "Good morning. I have been thinking about going to the beach sometime.");
			writePhoneSpeech("mom", "", "Have you been to the beach before?");
			writePhoneChoices("Yep. I had a good time.", "Not recently, no.");
			break;
		}
		case "momPhone2A": {
			writePhoneSpeech("player", "", "Yep. I had a good time. I'd go again with you, though.");
			writePhoneSpeech("mom", "", "Flirt!");
			writePhoneSpeech("mom", "", "I still have my old bikini though.");
			writePhoneSpeech("player", "", "I must see it. You cannot tease me like this.");
			writePhoneImage("images/mom/7-2.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("mom", "", "Do not go sharing it around.");
			writePhoneSpeech("player", "", "Whoaaaaa!");
			writePhoneSpeech("player", "", "Gorgeous.");
			writePhoneSpeech("player", "", "Wait, who took the picture?");
			writePhoneSpeech("player", "", "Hello?");
			setTrust('mom', 82);
			break;
		}
		case "momPhone2B": {
			writePhoneSpeech("player", "", "Not recently, no. I'd go if you came in a bikini though.");
			writePhoneSpeech("mom", "", "Flirt! I don't even know if my old one still fits.");
			writePhoneSpeech("player", "", "I'll buy you a new one. What did the old one look like?");
			writePhoneSpeech("mom", "", "Horndog! I know what you are planning.");
			writePhoneSpeech("player", "", "You can't blame me for trying.");
			writePhoneImage("images/mom/7-2.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("mom", "", "Do not go sharing it around.");
			writePhoneSpeech("player", "", "Whoaaaaa!");
			writePhoneSpeech("player", "", "Gorgeous.");
			writePhoneSpeech("player", "", "Wait, who took the picture?");
			writePhoneSpeech("player", "", "Hello?");
			setTrust('mom', 82);
			break;
		}
		case "momPhone3": {
			writePhoneSpeech("mom", "", "Good morning. I am sorry about missing your texts.");
			writePhoneSpeech("mom", "", "I went to bed after sending the picture.");
			writePhoneChoices("It's fine. What's up?", "I won't pry");
			break;
		}
		case "momPhone3A": {
			writePhoneSpeech("player", "", "It's fine. What's up with you?");
			writePhoneSpeech("mom", "", "Nothing very different. A TV show I like is on a marathon today.");
			writePhoneSpeech("mom", "", "It is about housewives.");
			writePhoneSpeech("player", "", "Sounds neat. Enjoy yourself, alright?");
			writePhoneSpeech("mom", "", "I will!");
			setTrust('mom', 83);
			break;
		}
		case "momPhone3B": {
			writePhoneSpeech("player", "", "I won't pry. If you need someone to talk to, I'm here.");
			writePhoneSpeech("mom", "", "I appreciate it, but I really am alright.");
			writePhoneSpeech("mom", "", "I will talk to you later.");
			writePhoneSpeech("mom", "", "Thank you.");
			writePhoneSpeech("player", "", "No problem.");
			setTrust('mom', 83);
			break;
		}
		case "momPhone4": {
			writePhoneSpeech("mom", "", "Good morning again.");
			writePhoneSpeech("mom", "", "I was wondering what you do.");
			writePhoneSpeech("player", "", "To pass the time?");
			writePhoneSpeech("mom", "", "No. For your job. What do you do for a -living-.");
			writePhoneChoices("I'm a school counselor", "I's a federal agent", "I'm a hypnotist");
			break;
		}
		case "momPhone4A": {
			writePhoneSpeech("player", "", "Ah, gotcha. I'm a school counselor.");
			writePhoneSpeech("mom", "", "Ooh. Like helping kids? Do you work at that highschool down the road?");
			writePhoneSpeech("player", "", "No. That's been under construction for years. Pretty sure it's condemned by now.");
			writePhoneSpeech("player", "", "I'm at the university across town.");
			writePhoneSpeech("mom", "", "They have counselors there?.");
			writePhoneSpeech("player", "", "Not usually, I'm worth it tho ;)");
			writePhoneSpeech("mom", "", "Haha! You are smooth. Talk to you later.");
			writePhoneSpeech("player", "", "Later");
			setTrust('mom', 84);
			break;
		}
		case "momPhone4B": {
			writePhoneSpeech("player", "", "I'm a federal agent, I'm here on a sting operation drug bust.");
			writePhoneSpeech("mom", "", "Oh no!");
			writePhoneSpeech("mom", "", "Will you be leaving after?");
			writePhoneSpeech("mom", "", "Have you already caught them?");
			writePhoneSpeech("player", "", "That was a joke.");
			writePhoneSpeech("mom", "", "I knew that");
			writePhoneSpeech("mom", "", "You cannot fool me");
			writePhoneSpeech("mom", "", "Got to go");
			writePhoneSpeech("player", "", "No problem. Talk to you later.");
			setTrust('mom', 84);
			break;
		}
		case "momPhone4C": {
			writePhoneSpeech("player", "", "I'm a hypnotist. I bend people's will to live like a king here.");
			writePhoneSpeech("mom", "", "haha");
			writePhoneSpeech("mom", "", "Can you hypnotize the landlord to reduce my rent?");
			writePhoneSpeech("player", "", "Sure.");
			writePhoneSpeech("mom", "", "Thank you haha.");
			writePhoneSpeech("player", "", "No problem.");
			writePhoneSpeech("mom", "", "Got to go");
			writePhoneSpeech("player", "", "No problem. Talk to you later.");
			setTrust('mom', 85);
			break;
		}
		case "momPhone5": {
			writePhoneSpeech("mom", "", "I will be out of the house soon. Going to visit a friend on Vintage Street.");
			writePhoneSpeech("player", "", "Want some company?");
			writePhoneSpeech("mom", "", "Only if you bring beer.");
			writePhoneSpeech("mom", "", "But it is a long way back. I might see you on my way home.");
			writePhoneSpeech("player", "", "I'll be sure to say hi.");
			writePhoneSpeech("mom", "", "And booze?");
			writePhoneSpeech("player", "", "I'll see if I can grab some.");
			writePhoneSpeech("mom", "", "Thank you");
			writePhoneSpeech("mom", "", "I saw a thing in a magazine the other day. Watch");
			writePhoneSpeech("mom", "", "<3");
			writePhoneSpeech("mom", "", "It is a heart.");
			writePhoneSpeech("player", "", "<3 You too.");
			setTrust('mom', 85);
			break;
		}
		case "momReward": {
			writePhoneImage("images/mom/7-4.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("mom", "", "You've finished all of "+fName('mom')+"'s content for this version, congratulations!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log('mom.js loaded correctly. request type is '+requestType)

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
						if (encounterArray[i].trustMin <= checkTrust('mom') && encounterArray[i].trustMax >= checkTrust('mom')) { //check the trust requirements
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