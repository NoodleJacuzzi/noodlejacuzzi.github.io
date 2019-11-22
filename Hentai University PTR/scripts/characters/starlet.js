var character = {index: "starlet", fName: "Lana", lName: "Cummings", trust: 0, encountered: false, textEvent: "", met: false, color: "#FDDC95", author: "NoodleJacuzzi", artist: "Oreteki18kin"};

var logbook = {
	index: "starlet", 
	desc: "A young woman with dreams of becoming a hardcore pornstar, following in the footsteps of her mother and her grandmother before her.",
	body: "Despite being 'barely legal', she's got an incredible rack and has A+ thiccness. Apparently her diet and exercise routine have been specialized from birth.",
	clothes: "She mostly wears the normal school uniform, careful not to break any rules. By all accounts she's polite and very well disciplined. She does wear a gold band on her ring finger, but that's just one of her 'hooks' to help her sell better.",
	home: "If you used her pornstar name, she'd probably live on Cummings street.",
	tags: "Porn, hardcore, anal, creampie, mother-daughter threesome",
	artist: "Oreteki18kin",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "starlet1", name: "Call starlet to your office", location: 'playerOffice', time: "MorningEvening", itemReq: "File A-3", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "starlet3", name: "starlet is here for the shoot", location: 'playerHouse', time: "Evening", itemReq: "", trustMin: 80, trustMax: 80, type: "tab", top: 0, left: 0, day: "both",},
	{index: "starlet4", name: "starlet is here for another shoot", location: 'playerHouse', time: "Evening", itemReq: "", trustMin: 81, trustMax: 81, type: "tab", top: 0, left: 0, day: "both",},
	{index: "starlet5", name: "starlet is here", location: 'playerHouse', time: "Evening", itemReq: "", trustMin: 82, trustMax: 82, type: "tab", top: 82, left: 82, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "starlet1": {
			writeSpeech("starlet", "", "Hiya~!");
			writeBig("images/starlet/profile.jpg", "Art by Oreteki18kin");
			writeText("starletF walks into your office and takes a seat.");
			writeSpeech("player", "", "So, Ms. starletL. principalF gave me your file and said you weren't taking career planning seriously. She didn't tell me-");
			writeSpeech("starlet", "", "I am taking this seriously! playerSir, please. I have never been more serious about anything in my life. I've done the planning, I've made connections. I want to enter this industry, I want to follow in my family's footsteps!");
			writeSpeech("player", "", "Calm down. If you really are that passionate, I'm sure you can do whatever you set your mind to. I haven't read your papers yet, what industry was this?");
			writeSpeech("starlet", "", "I want to be a pornstar!");
			writeText("A long silence does a dance through your office.");
			writeSpeech("player", "", "Excuse me?");
			writeSpeech("starlet", "", "A pornstar! Taking dicks on camera for money!");
			writeText("Instinctively you reach for a mug or a bottle so that you have something to spit out. But alas, you don't drink.");
			writeSpeech("starlet", "", "My mother was a pornstar, and my grandmother before her. My parents met on a shoot, and I was conceived on-camera. This is in my blood, it's what I need to do!");
			writeSpeech("player", "", "... Alright.<br><i>... How the fuck do I respond to that?</i>");
			writeSpeech("starlet", "", "Please! You're a counselor right? What more can I do? I spend every waking moment studying, and the highest grade I've ever gotten was a B-! I'm in my prime, the key age for barely legal shoots! I hate every second of every subject, but I know I have what it takes to be the best pornstar of my demographic!");
			writeFunction("writeEncounter('starlet2')", "Fuck it, fine. I'll help you.");
			writeFunction("changeLocation(data.player.location)", "I wish you luck. Goodbye. Please Leave.");
			break;
		}
		case "starlet2": {
			writeSpeech("starlet", "", "You... You will? You aren't just treating this like a joke, just like everyone else, right?");
			writeSpeech("player", "", "I'm dead serious. I'll help you achieve your dream.");
			writeSpeech("starlet", "", "You're kidding me... Listen, I'm not having sex off camera, so if you're just trying to-");
			writeSpeech("player", "", "I said I'll help. Listen.");
			writeText("You take her by the hands and look her dead in the eye.");
			writeSpeech("player", "", "When I'm done with you, everyone in the city will know your name. Every straight man and lesbian woman you've ever made eye contact with will have gotten off to you.");
			writeText("Her hands start shivering, and you can see tears form in her eyes.");
			writeSpeech("starlet", "", "I... *sniff*...<br>Thank you... Nobody believed in me before today...<br>I pr-promise I won't let you down!");
			writeSpeech("player", "", "I know you won't. Here, look at this pendant. This is a good luck charm, keep your eyes on it okay?");
			writeText("...");
			writeSpeech("player", "", "This is insane... This'll get back to me in no time at all...");
			writeSpeech("starlet", "", "...");
			writeText("starletF sits on her chair like a dazed lump. She's in a hypnotized state, ready for instruction. However with how passionate she is, there's no chance you can just hypnotize her into being a normal person.");
			writeText("But soon enough an idea strikes you. You pull out your phone and bring up a picture of your apartment.");
			writeSpeech("player", "", "Hmm... How about...<br>Alright. You listening? Of course you are. My name is playerF, and I'm your producer. This right here is a glamorous studio. You see this plant? That's a camera, and...");
			writeText("You spend the next hour planting ideas in starletF's head and rewriting her sense of reality. Luckily she isn't exactly the most willful.");
			writeText("Once you're finished, you wrap things up.");
			writeText("*SNAP*");
			writeSpeech("starlet", "", "Gah!<br>Ohmigosh, I'm so sorry! I completely zoned out, I have no excuse, I'm-");
			writeSpeech("player", "", "It's fine. Listen. Your first shoot is tomorrow. Here's the address.");
			writeText("You hand her a scrap of paper, and she accepts it with the most joyful look in her eyes you've ever seen. She looks like you just offered to cover her cancer treatment or something.");
			writeSpeech("player", "", "Oh, and starletF?");
			writeSpeech("starlet", "", "Yes playerSir?");
			writeSpeech("player", "", "Keep this quiet. On my end, I mean. No advertising yourself at school, or sleeping around.");
			writeSpeech("starlet", "", "Ew, have sex without getting paid? What am I, a slut? No worries playerMister Producer, your double life is safe with me!");
			writeText("With that she bounds out of your office.");
			writeSpeech("player", "", "... I'm completely boned. <br>Whelp, life isn't fun if you only think with your head.");
			setTrust('starlet', 80);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starlet3": {
			writeSpeech("starlet", "", "Hello playerSir, I'm here for the papers?");
			writeSpeech("player", "", "Uh, sure. Come on in.");
			writeText("starletF politely walks in as you step aside. She's got a clipboard and has an extremely professional air to her right now.");
			writeText("But the moment you shut the door, she tosses the papers onto your bed and takes a seat.");
			writeSpeech("starlet", "", "So professional! I'm very glad to be working with you playerMister producer. Are the walls soundproofed?");
			writeSpeech("player", "", "This place is safe, no need to worry.");
			writeSpeech("starlet", "", "Fantastic! So what's the schedule? I came here going commando, you want to go with the classic after-school slut intro? Introduce starletF starletL to the world?");
			writeSpeech("player", "", "Let's take things a little more slowly, we should-<br>Wait, are you really using your real name?");
			writeSpeech("starlet", "", "Yep! My mom started her weed binge pretty early after I was born, so no need for a fake porn name.");
			writeSpeech("player", "", "That's not... You know what? I'm just going to roll with it. What should we start with? Masturbation solo, blowj-");
			writeSpeech("starlet", "", "Hard Anal!<br>Virginity loss really rakes in those introduction numbers, and I lost my 'real' virginity a few years ago to my mom's XXL BBC Womb-Puncher. Most men don't get how the hymen works, so they won't buy it when I don't bleed.<br>Plus, and this is a little embarrassing, but I can't do a deepthroat. Yet! I'm still practicing every day!");
			writeText("This woman is certifiably insane, but at this point your higher brain functions have started to shut down out of disbelief.");
			writeSpeech("starlet", "", "I seriously dig the camera by the way. Is that a new Blackmagic Pro?");
			writeText("You look over to the cheap camcorder you pulled out of a box.");
			writeSpeech("player", "", "Yes.");
			writeSpeech("starlet", "", "Amazing! You really didn't hold back! I heard this model is totally the latest in the business! So, where's the actor I'll be filming with? Is he cute? I ever tell you how my parents-");
			writeSpeech("player", "", "Met during a porn shoot, yeah. I'm the actor.");
			writeSpeech("starlet", "", "Oh. Uh... Listen, I trust you, and I'm really glad you have faith in my dream, but...");
			writeSpeech("player", "", "<i>Finally a normal response?</i><br>Listen, if you're having doubts, we can slow-");
			writeSpeech("starlet", "", "Can I see your license?");
			writeSpeech("player", "", "... My driver's license?");
			writeSpeech("starlet", "", "No silly! Your porn producer's license! For distribution and sale of erotic material?");
			writeSpeech("player", "", "Right. That license. Uh... Here.");
			writeText("You grab a post-it note from the wall, and hope you've altered her perception enough for this to work.");
			writeText("She carefully inspects the note, bends it, and even looks at it through the light to see how transparent parts are.");
			writeSpeech("starlet", "", "It's legit! Alright, so real quick before we start. You wanna go with 'newly awoken buttslut' or 'masochistic painal virgin'? I couldn't decide last night so I practiced both, I can slide into either super easily.");
			setTrust('starlet', 81);
			passTime();
			clearText('starlet');
			writeFunction("writeEvent('starlet1a')", "Buttslut");
			writeFunction("writeEvent('starlet1b')", "Painal");
			break;
		}
		case "starlet4": {
			writeEvent('starlet2');
			writeText("...");
			writeSpeech("starlet", "", "Oh man, that was awesome! You really sunk into the role!");
			writeSpeech("player", "", "So did you, that was very convincing. Were you really cumming?");
			writeSpeech("starlet", "", "Hell yeah I was! No matter how good you are, fakes are pretty obvious on your third viewing, and I want people to be able to re-watch.<br>My mom taught me the trick. You gotta really get into the dirty talk and rock your hips ~juuust~ right.");
			writeSpeech("player", "", "Right. See you again later?");
			writeSpeech("starlet", "", "Actually, I have something pretty important I want to prepare for. I'll be here same time tomorrow. I'll give you the deets then, okay?");
			writeSpeech("player", "", "Sounds good, stay safe.");
			writeBig("images/starlet/1-5.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "I will, see you soon!");
			setTrust('starlet', 82);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starlet5": {
			writeSpeech("player", "", "So, what did you have in mind this time? Not exactly many ways to go after anal virginity and a creampie.");
			writeSpeech("starlet", "", "Exactly, that's why I want to do something big. Something that'll really get all eyes on me.");
			writeSpeech("player", "", "Listen, I have lines. I'm-");
			writeSpeech("starlet", "", "I want to do shoots with my mom.");
			writeSpeech("player", "", "- completely okay with that.<br>Fuck wait, no. You want us to get busted?");
			writeSpeech("starlet", "", "Please! I know that I can get her blessing. Come to my mom's place with me, show her your credentials and she'll see I really have a shot at the pornstar life!");
			writeSpeech("player", "", "<i>This is a really bad idea, at least according to my brain. But according to my dick... <br>I might be able to hypnotize her too, and get both of them at once.</i>");
			writeFunction("writeEncounter('starlet5a')", "Okay, let's go");
			writeFunction("writeEncounter('starlet5b')", "This is a bad idea");
			break;
		}
		case "starlet5a": {
			writeSpeech("player", "", "Fine. But no surprises, okay? It'll be a professional meeting, and if she says no, we're done, okay?");
			writeSpeech("starlet", "", "Yes! No problem playerSir, I know me and my mom won't let you down.");
			writeText("...");
			writeText("The two of you arrive at a pretty professional looking building, this doesn't bode well. You aren't likely to get a chance alone with starletF's mother.");
			writeText("But starletF isn't letting you back out now. She drags you into the building and into the elevator.");
			writeSpeech("starlet", "", "Alright, just let me do all the talking. I need to be direct, and smooth.");
			writeSpeech("player", "", "But not too direct. How about I do-");
			writeText("The elevator doors open, and starletF pulls you out.");
			writeSpeech("starlet", "", "MOOOOOOM~!<br>Hey Frank, you seen mom?");
			writeText("A well-muscled man at least seven feet tall bends down a little to answer. He ruffles starletF's hair a little and points her to what looks like the head office.");
			writeText("Dozens of other men who could easily be bodybuilders are walking around here too. Any one of them could kill you with a clench of their triceps. But you aren't given a lot of time to think, and are pulled into the office.");
			writeBig("images/pornstar/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "starletF? What is it honey?");
			writeSpeech("player", "", "Hi, I'm-");
			writeSpeech("starlet", "", "Mom, this guy's a producer, and I've already shot two scenes with him!");
			writeSpeech("player", "", "I... If you could just look at th-");
			writeSpeech("starlet", "", "We've done a hard anal scene and a ass-to-pussy creampie! I want you to see the real me, this is who I am!");
			writeText("The room is starting to spin.");
			writeSpeech("pornstar", "", "On camera? Have they been published?");
			writeSpeech("starlet", "", "Yep and nope! Me and playerMister are the only ones with access to the videos.");
			writeSpeech("pornstar", "", "I see.");
			writeText("She walks up to you and looks you dead in the eye. Is it hot in here? Because you're melting. Everything you've built up to reach this point, everyone you've hypn-");
			writeSpeech("pornstar", "", "Fine. So long as he's licensed, and you're willing to accept responsibility for your actions, I'll support you no matter what.");
			writeSpeech("starlet", "", "Yes! Thank you so much, I was so scared you'd say no.");
			writeText("You wipe the foam from your mouth and make sure you aren't dreaming before catching your balance. Are things actually working?");
			writeSpeech("pornstar", "", "So, he's got a valid license? Who are his actors? Why didn't you come to me for your first shoot? Honey, I'm proud you took things forwards, but what if he's just some scum with a camcorder?");
			writeText("Aaaaand you're on the verge of death again. Man, today has been a rollercoaster.");
			writeSpeech("starlet", "", "He's the actor and the cameraman too. I know, sketchy, but I checked his credentials with all the tricks you taught me.");
			writeSpeech("pornstar", "", "I see. starletF, honey? Could I speak with him alone?");
			writeSpeech("starlet", "", "Of course mom! Thank you, really. I promise not to just give up on college too. I really have been doing my best, it just felt like it was never enough.<br>I'll let you two talk.");
			writeText("She saunters off out of the room, leaving you alone with her mother.");
			writeSpeech("player", "", "<i>Thank goodness, she bought it.</i><br>Don't worry Ma-");
			writeSpeech("pornstar", "", "Quiet. Do you know what I had to do to get where I am today?");
			writeSpeech("player", "", "... Cuck porn?");
			writeSpeech("pornstar", "", "That's not even close to all of it. I've done creampie, anal creampie, irrumatio, wax play-");
			writeSpeech("player", "", "Please stop.");
			writeSpeech("pornstar", "", "Double anal. <b>Triple</b> anal. Public orgies. Hobo gangbangs.");
			writeSpeech("player", "", "PLEASE STOP.");
			writeSpeech("pornstar", "", "My point is, I don't want my daughter to go through everything I did. Her life has been incredibly sex positive, but even she will have limits she'll be pushed across. I want her to have every advantage. I want her to have something I never did.");
			writeText("You reach into your pocket for your pendant.");
			writeSpeech("player", "", "I completely agree. I'll make sure she stays in-");
			writeSpeech("pornstar", "", "I want her to have mother-daughter scenes under her belt. There's no topic that trends as hard or consistently as that one. If she's going to be a star, she'll be the best damn star in the city.<br>She seems comfortable around you. You'll work here from now on, in secret to keep her reputation intact.");
			writeText("You slide your pendant back into your pocket.");
			writeSpeech("pornstar", "", "We have pretty strict requirements here. Have you ever done any hard drugs? Heroin, meth, angel dust, bohemian flapjacks?");
			writeSpeech("player", "", "Not even once.");
			writeSpeech("pornstar", "", "Good, you're hired. I'll need to see those credentials though.");
			writeText("You reach back into your pocket and pull out your pendant.");
			writeText("...");
			writeSpeech("pornstar", "", "Hmm. I've never seen so many certifications... Well, this is more than enough. You said you used a Blackmagic Pro? Our cameras are a little bit below, but we'll have actual cameramen working with you.<br>Alright, strip.");
			writeSpeech("player", "", "<i>I didn't hypnotize her to say that... All I did was make her believe my punchcard was a business card.<br>Fuck it. Fuck this whole family! FUCK EVERYTHING!</i>");
			setTrust('starlet', 83);
			setTrust('pornstar', 83);
			passTime();
			writeFunction("loadEvent('pornstar', 'pornstar1')", "Strip, but angrily");
			break;
		}
		case "starlet5b": {
			writeSpeech("player", "", "That's a bad idea. What if she doesn't give us her blessing?");
			writeSpeech("starlet", "", "But...");
			writeSpeech("player", "", "Let's just keep carving a niche for you on your own, make a stronger fou-");
			writeSpeech("starlet", "", "No! There's no way I'll go through with this without my mother's blessing. I know she'll accept who I really am, and if she doesn't...");
			writeText("She stamps her foot.");
			writeSpeech("starlet", "", "Then I'm retiring. If she really thinks I can't handle it, then maybe she's right. Maybe I should be a mathematician, or a fry cook.");
			writeText("Well, that also solves your problem. Her giving up on her dreams of porn would make you look good with Victoria.");
			writeText("She really does look conflicted though. She can't do this without you. Will she really toss aside her dreams?");
			writeFunction("writeEncounter('starlet4a')", "Okay, let's go");
			writeFunction("writeEncounter('starlet4c')", "You should give up");
			break;
		}
		case "starlet5c": {
			writeSpeech("starlet", "", "I should... Give up...");
			writeSpeech("player", "", "Dont take it too badly. Get a college degree as a fallback, maybe get back into porn when you're older. You've got videos of you as a teen, you aren't missing out anymore.");
			writeSpeech("starlet", "", "Yeah, maybe you're right...");
			writeText("She looks downcast, but this really is for the best. For you, and for her.");
			writeSpeech("starlet", "", "I'll do my best then. I'll get a bachelor's degree, at least, and then I'll convince my mom to star in porn with me!");
			writeText("And her energy is back.");
			writeSpeech("starlet", "", "Thank you playerMister Producer! I'll do my best, I promise! Please, don't post those videos yet. I'll become famous and auction them off for millions, and split the payout with you of course. My loans will be toast, and I'll be on top of the world! Oh, and I can do a cuck shoot with daddy too! Man, I gotta write these ideas down!");
			writeText("She grabs her stuff and runs out the door.");
			writeSpeech("starlet", "", "Thank you again, I'll never forget how much you've done for me!");
			writeText("She yells it loud enough for the whole building to hear, but is careful not to paint you in a negative light.");
			writeSpeech("player", "", "Jeez, thinking ahead that far. She really is something.");
			data.player.counseling += 1;
			setTrust('starlet', 1);
			updateMenu();
			writeSpecial("Thanks to her positivity and future energy, starletF has cause your public image to improve! Your counseling skill and Victoria's trust in you has gone up!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "starlet1a", name: "Newly Awoken Buttslut"},
	{index: "starlet1b", name: "Masochistic Painal Virgin"},
	{index: "starlet2", name: "Fresh Idea"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "starlet1a": {
			writeSpeech("player", "", "Buttslut is probably better, it should come pretty natural to you, right?");
			writeSpeech("starlet", "", "Hehe, you have no idea boss.");
			writeText("...");
			writeSpeech("player", "", "And... Action.");
			writeBig("images/starlet/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Hi everyone! My name is starletF starletL! Thanks for having me here.");
			writeSpeech("player", "", "Nice to meet you. You look really young, miss.");
			writeSpeech("starlet", "", "I am! I'm 18 years old, and I'm in my first year of college. Here!");
			writeText("She digs out a folder-up birth certificate and her photo ID from her pocket. Pink tape masks her address.");
			writeSpeech("player", "", "You really are... Well, pretty impressive you've got a rack like that.");
			writeSpeech("starlet", "", "Thanks! They were a gift from my mom, but I grew them myself. I'm a little nervous, but I'm also really excited!<br><i>Aaah it's really happening~! I'm gonna have sex on camera!</i>");
			writeSpeech("player", "", "Well there's no need to be worried, just go ahead and bend over, and-");
			writeBig("images/starlet/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Holy fuck...");
			writeSpeech("starlet", "", "I prepped myself really well just for you, you know. I've been aching sooo bad.<br>I'm dripping wet! I really want your big, <b> fat, co-<b>");
			writeBig("images/starlet/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Aaah~! Cock~!");
			writeSpeech("player", "", "God damn, you're squeezing so well, are you seriously a virgin?");
			writeSpeech("starlet", "", "Ah~! Ah~! Yess~! I play with myself using my mom's dildos every day, but I've never had a real cock before~!");
			writeSpeech("player", "", "You little, ugh~! Whore! You thought you'd ever be anything but a whore? This ass was made for taking dicks!");
			writeSpeech("starlet", "", "Yes~! Please, fuck me harder~! Nnnngh~! You're so <b>DEEP!</b>");
			writeText("Faster than you expected, you're balls deep pinning yourself against her asscheeks pumping cum into her spasming asshole.");
			writeSpeech("starlet", "", "Nnnngh~! Fill my ass up! I wanna taste it! <b>CUMMING~!</b>");
			writeBig("images/starlet/1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Hah... Hah... It's not enough... I hope you'll all enjoy me again...");
			writeText("After you pull out starletF waves her cum-leaking ass in front of the camera before you stop recording, the cum dripping down across her pussy lips.");
			writeText("...");
			writeSpeech("starlet", "", "Aaah, that was really nice. I can see why mom still does it recreationally.");
			writeSpeech("player", "", "Your mom still does porn? Wouldn't her husband be upset by that?");
			writeSpeech("starlet", "", "Nope, dad's sterile! The set they met on was 'pathetic cuck watches his wife get impregnated'. After the shoot they realized they had a lot in common and got hitched! But she doesn't do scenes anymore.");
			writeSpeech("player", "", "You have a seriously messed up family.");
			writeSpeech("starlet", "", "Really? How so?");
			writeSpeech("player", "", "... Nevermind. We'll shoot again another day, I'll see you later.");
			writeBig("images/starlet/1-5.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "See you later playerMister Producer! Thanks again!");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "starlet1b": {
			writeSpeech("player", "", "We're diving right in, you won't be acting too much if you go the painal route.");
			writeSpeech("starlet", "", "Hehe, you got it boss. Masochistic painal addict it is.");
			writeText("...");
			writeSpeech("player", "", "And... Action.");
			writeBig("images/starlet/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Hi everyone! My name is starletF starletL! Thanks for having me here.");
			writeSpeech("player", "", "Nice to meet you. You look really young, miss.");
			writeSpeech("starlet", "", "I am! I'm 18 years old, and I'm in my first year of college. Here!");
			writeText("She digs out a folder-up birth certificate and her photo ID from her pocket. Pink tape masks her address.");
			writeSpeech("player", "", "You really are... Well, pretty impressive you've got a rack like that.");
			writeSpeech("starlet", "", "Thanks! They were a gift from my mom, but I grew them myself. I'm a little nervous, but I'm also really excited!<br><i>Aaah it's really happening~! I'm gonna have sex on camera!</i>");
			writeSpeech("player", "", "Don't worry, there's nothing to be nervous about. Go ahead and bend over.");
			writeSpeech("starlet", "", "Okay...");
			writeBig("images/starlet/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "You'll be gentle right? This is my first ti-");
			writeSpeech("player", "", "Nope.");
			writeText("You press the head of your cock against her asshole, pushing against her resistance.");
			writeSpeech("starlet", "", "Ah, fuck~! Wait, please! You said we'd be doing regular sex, stop!<br>You're too big! You'll split my poor little teen ass in half!<br>Please! I'll do anything, I'll suck your cock, I'll let you fuck me bareback, I'll lick your a-");
			writeBig("images/starlet/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "aaaAAAHH~!");
			writeText("She does her best to try and keep her asscheeks clenched, one last bit of defiance, her last line of defense.");
			writeText("Broken.");
			writeSpeech("starlet", "", "Aaah fuck~! I can feel it reshaping my ass! Please slow down, ggghg~!<br>F-fuck, it hurts!");
			writeSpeech("player", "", "You want me to stop?");
			writeSpeech("starlet", "", "N-no! It hurts, it hurts but-");
			writeText("Another thrust and her spine goes rigid.");
			writeSpeech("starlet", "", "A-aaagh! It hurts but it feels really <b>GOOD!</b>");
			writeText("Her grimacy turns into a sloppy smile, drool forming on her lower lip. She shudders in an anal orgasm as you feel yourself reaching your limit sooner than you expected.");
			writeSpeech("starlet", "", "Nnnngh~! Fill my ass up! Ruin my ass, I want to get off as my daddy kisses me goodnight knowing I spent the day with a stranger's cum inside me! I'm <b>CUMMING~!</b>");
			writeBig("images/starlet/1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Hah... Hah... It's not enough, I want to be hurt more... I hope you'll all enjoy me again...");
			writeText("After you pull out starletF waves her cum-leaking ass in front of the camera before you stop recording, the cum dripping down across her pussy lips.");
			writeText("...");
			writeSpeech("starlet", "", "Aaah, that was really nice. I can see why mom still does it recreationally.");
			writeSpeech("player", "", "Your mom still does porn? Wouldn't her husband be upset by that?");
			writeSpeech("starlet", "", "Nope, dad's sterile! The set they met on was 'pathetic cuck watches his wife get impregnated'. After the shoot they realized they had a lot in common and got hitched! But she doesn't do scenes anymore.");
			writeSpeech("player", "", "You have a seriously messed up family.");
			writeSpeech("starlet", "", "Really? How so?");
			writeSpeech("player", "", "... Nevermind. We'll shoot again another day, I'll see you later.");
			writeBig("images/starlet/1-5.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "See you later playerMister Producer! Thanks again!");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case 'starlet2': {
			writeSpeech("starlet", "", "Hello again playerSir, I'm here for the documents again?");
			writeSpeech("player", "", "Of course Ms. starletL, come on in.");
			writeText("Once you've shut the door her polite act is dropped.");
			writeSpeech("starlet", "", "playerMister Producer, I've got a great idea for another shoot! Quick, can you set up a shoot?");
			writeSpeech("player", "", "Yeah, what's up?");
			writeSpeech("starlet", "", "Well, I was thinking we could start with...");
			writeText("...");
			writeBig("images/starlet/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Ah~! Ah~! Yes, fuck my teen ass harder~!");
			writeSpeech("player", "", "Shut up, slut. I'll do what I want. In fact...");
			writeSpeech("starlet", "", "Wait, why are you<br>Wait! Stop, you can't-");
			writeBig("images/starlet/2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Ngh, fuck. So tight.");
			writeSpeech("starlet", "", "St-uugh~!<br>Stop! It's not safe, You need a condom!");
			writeSpeech("player", "", "Bitch, the lube we used for your ass is the only protection I need.");
			writeSpeech("starlet", "", "Ghhgh~! St-stooooop~ I'll get addicted to this~!<br>If you cum inside me today, I'll get pregnant!");
			writeSpeech("player", "", "Sounds good, you'd probably get off on having a baby fucked into you. Ngh, move.");
			writeText("You pull out and shove her to the ground, but get right back into fucking her right away.");
			writeBig("images/starlet/2-2.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Still want me to stop?");
			writeSpeech("starlet", "", "Nnn-hgg~! So big~!");
			writeSpeech("player", "", "Well!? Still want me to stop!?");
			writeSpeech("starlet", "", "No, please! Harder! I don't care anymore, I just want your cum! Make me walk home with a jizz-pumped womb!");
			writeBig("images/starlet/2-3.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Yeessss~! Pump your cum into me~! I want to wake up everyday sucking this fat dick~! NNNGH~!");
			writeText("Her eyes roll back as she has another orgasm on your cock. Once you start pulling out, she looks like she's near comatose.");
			writeSpeech("player", "", "What do you say?");
			writeSpeech("starlet", "", "Th... Thank you...");
			writeText("Weakly, she gives a peace sign before you stop recording.");
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
	{index: "starletReminder", trust: 80,},
	{index: "starletReward", trust: 83,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "starletReminder": {
			writePhoneSpeech("starlet", "", "Hey! I'll be at the shoot location later this evening, alright? If nobody's home I'll just head back and try again tomorrow.");
			break;
		}
		case "starletReward": {
			writePhoneImage("images/starlet/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("starlet", "", "You've finished all of starletF's content for this version, more is coming soon!");
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