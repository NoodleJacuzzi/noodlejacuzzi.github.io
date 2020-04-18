var character = {index: "starlet", fName: "Lana", lName: "Cummings", trust: 0, encountered: false, textEvent: "", met: false, color: "#FDDC95", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

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
	{index: "studioIntro", name: "The porn studio is here", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 83, trustMax: 83, type: "tab", top: 82, left: 82, day: "both",},
	{index: "studioQuo", name: "The porn studio is here", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 84, trustMax: 101, type: "tab", top: 82, left: 82, day: "both",},
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
			writeSpeech("starlet", "", "MOOOOOOM~!<br>Hey Bubbles, you seen mom?");
			writeText("A well-muscled man at least seven feet tall bends down a little to answer. He ruffles starletF's hair a little and points her to what looks like the head office.");
			writeText("Dozens of other men who could easily be bodybuilders are walking around here too. Any one of them could kill you with a clench of their triceps. But you aren't given a lot of time to think, and are pulled into the office.");
			writeBig("images/pornstar/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "starletF? What is it honey?");
			writeSpeech("player", "", "Hi, I'm-");
			writeSpeech("starlet", "", "Mom, this *guy's a producer, and I've already shot two scenes with *him!");
			writeSpeech("player", "", "I... If you could just look at th-");
			writeSpeech("starlet", "", "We've done a hard anal scene and an ass-to-pussy creampie! I want you to see the real me, this is who I am!");
			writeText("The room is starting to spin.");
			writeSpeech("pornstar", "", "On camera? Have they been published?");
			writeSpeech("starlet", "", "Yep and nope! Me and playerMister are the only ones with access to the videos.");
			writeSpeech("pornstar", "", "I see.");
			writeText("She walks up to you and looks you dead in the eye. Is it hot in here? Because you're melting. Everything you've built up to reach this point, everyone you've hypn-");
			writeSpeech("pornstar", "", "Fine. So long as *he's licensed, and you're willing to accept responsibility for your actions, I'll support you no matter what.");
			writeSpeech("starlet", "", "Yes! Thank you so much, I was so scared you'd say no.");
			writeText("You wipe the foam from your mouth and make sure you aren't dreaming before catching your balance. Are things actually working?");
			writeSpeech("pornstar", "", "So, *he's got a valid license? Who are *his actors? Why didn't you come to me for your first shoot? Honey, I'm proud you took things forwards, but what if *he's just some scum with a camcorder?");
			writeText("Aaaaand you're on the verge of death again. Man, today has been a rollercoaster.");
			writeSpeech("starlet", "", "*He's the actor and the cameraman too. I know, sketchy, but I checked *his credentials with all the tricks you taught me.");
			writeSpeech("pornstar", "", "I see. starletF, honey? Could I speak with *him alone?");
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
			writeSpeech("pornstar", "", "Hmm. I've never seen so many certifications... Well, this is more than enough. You said you used a Blackmagic Pro? Our cameras are a little bit below, but ours are a little more manageable.<br>Alright, strip.");
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
			writeFunction("writeEncounter('starlet5a')", "Okay, let's go");
			writeFunction("writeEncounter('starlet5c')", "You should give up");
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
		case "studioIntro": {
			raiseTrust('starlet', 1);
			clearText('starlet');
			passTime();
			data.player.studio = {
				film1Name: "Back-Alley Bitches", film1Fetish1: false, film1Fetish2: false, 
				film2Name: "Mom, He's My Boyfriend!", film2Fetish1: false, 
				film3Name: "Daily Life In A Bizzard House", film3Fetish1: false, film3Fetish2: false,
			}
			writeSpeech("starlet", "", "playerF! You made it!");
			writeSpeech("player", "", "Yep. You been waiting long?");
			writeSpeech("starlet", "", "I got here early, wanted to do a research refresher before we got st-");
			writeText("The sound of a loud, drawn out whorish moan coming from her pocket cuts her off.");
			writeSpeech("starlet", "", "Whoops! Didn't turn it off properly... There.");
			writeSpeech("player", "", "You're watching-<br>Nevermind, it's pretty normal for you I guess.");
			writeSpeech("starlet", "", "Yep! It's mom's debut, still one of her most popular vids. Hard to believe she popped all four of her cherries on screen in one scene.");
			writeSpeech("player", "", "All fou-<br>No. Don't tell me, I don't want to know. Should we head inside?");
			writeSpeech("starlet", "", "Sure!");
			writeText("...");
			writeText("The massive receptionist Bubbles leads you through the building until you reach pornstarF's office. Today is dedicated to paperwork and such, followed by an orientation. But first...");
			writeSpeech("pornstar", "", "You're sure you want to remain anonymous? Legally I can only safely pay you a tenth of a percent if you're not officially on the payroll.");
			writeSpeech("player", "", "I'm sure. My position at the university is more important than a high wage.");
			writeSpeech("pornstar", "", "Right then. That's decided on. Lemme run you through the filming process, we do think differently here.");
			writeText("You're escorted a series of filming sets, most of them empty at the moment.");
			writeBig("images/starlet/intro1.jpg", "Art by Oreteki18kin");
			writeSpeech("???", "images/starlet/weird.jpg", "Ggguoh~! Fucking destroy me~!");
			writeText("But not all of them.");
			writeSpeech("pornstar", "", "As you can see we use hidden cameras for immersion purposes. Actors also wear special glasses in case we need a POV cut. It's a matter of having as little in the way of the actors as possible.");
			writeBig("images/starlet/intro2.jpg", "Art by Oreteki18kin");
			writeSpeech("???", "images/starlet/weird.jpg", "Cumming~!");
			writeSpeech("starlet", "", "That's my auntie! She can seem a bit weird, but she's super nice!");
			writeSpeech("pornstar", "", "As you can see, this leads to better performance. Our studio has a solid following by providing a meta narrative. The most important lesson to learn in porn is that the world on the screen is nothing like the world on the other side of the camera. Every aspect of this studio is built in defiance of that, to create an environment to live up from what people expect from an exxxtra behind the scene environment.");
			writeSpeech("player", "", "But... Why?");
			writeText("pornstarF grins smugly, and proudly beams.");
			writeSpeech("pornstar", "", "Because I love porn!");
			writeText("Lana is clearly invested, she's got a notebook and is attentively jotting notes as her mother delivers a passionate speech about the wonders of immersive method acting and how it impacts filming porn.");
			writeSpeech("player", "", "... Okay. When can I start?");
			writeSpeech("pornstar", "", "Tomorrow. Show up bright and early, it's a good habit. Filming usually takes all day.");
			writeSpeech("player", "", "Sure. And my identity?");
			writeSpeech("pornstar", "", "Will be kept secret. You aren't working in the division that focuses on facial closeups. Be sure to come relaxed.");
			writeSpeech("starlet", "", "Bright-eyed, bushy tailed!");
			writeSpeech("pornstar", "", "Now young lady, let's review that debut of yours. Keep that notebook ready.");
			writeSpeech("starlet", "", "Again? Sure thing mom, I'll grab the vibes too. See you tomorrow playerMister Producer!");
			writeFunction("changeLocation(data.player.location)", "Leave");
			break;
		}
		case "studioQuo": {
			writeText("You, starletF, and pornstarF all meet up and take seats in the comfy lobby");
			switch (checkTrust('starlet')) {
				case 84: {
					writeSpeech("starlet", "", "Urgh, I had a math final today. I wonder if I was the only girl in class daydreaming about porn?");
					break;
				}
				case 85: {
					writeSpeech("starlet", "", "I've been playing this new early access ghost hunting game, it's pretty neat! I got a big guy made out of clouds.");
					break;
				}
				case 86: {
					writeSpeech("starlet", "", "You hear about that politician scandal? He got caught on the job watching one of mom's videos! I hope one of mine gets a publicity boost like that someday.");
					break;
				}
				case 87: {
					writeSpeech("starlet", "", "I wonder if getting glasses would hurt my youthful image?");
					writeSpeech("pornstar", "", "Probably not, and it might help sell that we're related in scenes better.");
					break;
				}
				case 88: {
					writeSpeech("pornstar", "", "We'll need to keep on schedule today. Bubbles is doing his first anal scene, I'm picking up a cake to celebrate after work.");
					break;
				}
				case 89: {
					writeSpeech("pornstar", "", "There really should be some sort of Oscars event for porn. I tried to establish one a few years back, but everyone involved completely misunderstood what I wanted.");
					writeSpeech("starlet", "", "I remember that! Everyone was so confused that you were taking things seriously, they were waiting for you to get naked.");
					writeSpeech("pornstar", "", "I mean, I did, but that was unrelated.");
					break;
				}
				case 90: {
					writeSpeech("pornstar", "", "starletF, I found a great pair of stockings the other day. They look good, high transparency, and they have a wonderful tearing sound.");
					writeSpeech("starlet", "", "Nice! All of my favorites barely make a sound when you rip them. I feel bad for our audio editor sometimes.");
					break;
				}
				case 91: {
					writeSpeech("starlet", "", "Have we thought about trying to reach into the gaming market? I think there's a pretty good market now, we could do something text-based with lots of pictures.");
					break;
				}
				case 92: {
					writeSpeech("starlet", "", "How's auntie? I saw her leaving early the other day.");
					writeSpeech("pornstar", "", "She's fine. She had to show up early for the forty-woman lezdom compilation, we needed the bags under her eyes extra pronounced for her scene.");
					break;
				}
				case 93: {
					writeSpeech("starlet", "", "There's a new gaming console on the market, but between classes and shooting porn, I just don't have a lot of free time these days.");
					break;
				}
				case 94: {
					writeSpeech("starlet", "", "I saw this really cute doggy the other day! It really sucks that I'm allergic, I wanted to rub my face in his floof.");
					writeSpeech("pornstar", "", "Don't say that around Seaweed, he'll get jealous. You know how cats get.");
					break;
				}
				case 95: {
					writeSpeech("starlet", "", "Mom, one of your videos passed the ten-million views mark! Everyone in the comments was celebrating, porn has some surprisingly civil comment sections.");
					writeSpeech("pornstar", "", "Some do, others are filled with weirdos talking about FEMA camps.  But yes, ten-million is quite the achievement. I brought champagne for after work. I brought some cider for you too starletF.");
					writeSpeech("starlet", "", "I still can't believe I can get plowed on camera, but I can't legally drink.");
					break;
				}
				case 96: {
					writeSpeech("starlet", "", "Alright, caffinated up and ready to go!");
					writeSpeech("pornstar", "", "You're so sensitive, you only had a sip. How do you get so energized with so little? At some point you'll be bouncing off the walls after just smelling the stuff.");
					break;
				}
				case 97: {
					writeSpeech("starlet", "", "It was someone's birthday a while ago, yeah? I think we missed it.");
					writeSpeech("pornstar", "", "It was the architect I think, the person who built the studio. I sent him a fruit basket.");
					break;
				}
				case 98: {
					writeSpeech("starlet", "", "I was thinking, maybe we should do a shameless plug? They're pretty popular these days.");
					writeSpeech("pornstar", "", "What, like for funding? I suppose the studio could use some extra funds.");
					writeSpeech("starlet", "", "No, silly! A scene where I shamelessly plug myself with a dildo!");
					break;
				}
				case 99: {
					writeSpeech("starlet", "", "Man, it feels like we've been shooting for months! How do we have so few films done?");
					writeSpeech("pornstar", "", "These things take time, dear. Have patience.");
					break;
				}
				default: {
					writeSpeech("starlet", "", "Mmm... Tired. The days I'm not shooting porn are starting to blend together.");
					break;
				}
			}
			if (checkTrust('starlet') < 100) {
				raiseTrust("starlet", 1);
			}
			writeText("With starletF and pornstarF chatting, it looks like it's up to you guide the conversation.");
			if (checkFlag('starlet', 'chat1') != true) {
				writeFunction("writeEncounter('starletChat1')", "Chat with the pair");
			}
			else {
				if (checkFlag('starlet', 'chat2') != true) {
					writeFunction("writeEncounter('starletChat2')", "Relax and lean back");
				}
				else {
					if (checkFlag('starlet', 'chat3') != true && checkFlag('starlet', 'porno') == true) {
						writeFunction("writeEncounter('starletChat3')", "starletF seems distracted");
					}
				}
			}
			if (checkFlag('starlet', 'brainstorming1') != true) {
				writeFunction("writeEncounter('starletAlleySetup')", "Brainstorm ideas");
			}
			else {
				if (checkFlag('starlet', 'brainstorming2') != true) {
					writeFunction("writeEncounter('starletBoyfriendSetup')", "Brainstorm ideas");
				}
				else {
					if (checkFlag('starlet', 'brainstorming3') != true) {
						writeFunction("writeEncounter('starletMaskSetup')", "Brainstorm ideas");
					}
					else {
						if (checkFlag('starlet', 'chat3') == true) {
							writeFunction("writeEncounter('starletProposal')", "starletF and pornstarF seem oddly excited about something today");
						}
					}
				}
			}
			if (data.player.time != "Morning") {
				writeSpeech("pornstar", "", "Scenes can take quite a while to film usually all day. You'll need to get here earlier if you want to do any filming.");
			}
			else {
				if (checkFlag('starlet', 'porno1') != true && checkFlag('starlet', 'brainstorming1') == true) {
					writeFunction("writeEncounter('starletAlley1')", "Film '"+data.player.studio.film1Name+"' today");
				}
				if (checkFlag('starlet', 'porno2') != true && checkFlag('starlet', 'brainstorming2') == true) {
					writeFunction("writeEncounter('starletBoyfriend1')", "Film '"+data.player.studio.film2Name+"' today");
				}
				if (checkFlag('starlet', 'porno3') != true && checkFlag('starlet', 'brainstorming3') == true) {
					writeFunction("writeEncounter('starletMask1')", "Film '"+data.player.studio.film3Name+"' today");
				}
				if (checkFlag('starlet', 'porno') == true) {
					writeFunction("writeEncounter('starletReshoot')", "Reshoot a finished porno");
				}
			}
			writeFunction("changeLocation(data.player.location)", "Leave early");
			break;
		}
		case "starletChat1": {
			addFlag('starlet', 'chat1');
			passTime();
			writeSpeech("player", "", "So, why exactly did you decide to do porn, Mrs pornstarL?");
			writeText("starletF looks at you confused, like she can't fathom why her mother would choose any other lifestyle.");
			writeSpeech("pornstar", "", "Good question. Don't judge, starletF, you've only seen porn creation from this, admittedly unusual studio. In reality shooting porn is nothing like watching it. It's sticky, it's uncomfortable, and more than anything else it's hilarious. I've been on Broadway, and I've never had my skills tested harder than when a co-star pumped out two tiddlywinks of cum for a money shot and I had to keep a straight face");
			writeSpeech("player", "", "So then, why-");
			writeSpeech("pornstar", "", "I met my husband on a set like no other. As I was being railed, I saw something real in his eyes. The lines flowed, every part of my body felt <b>real</b>. Tears running down his face, I felt a real orgasm run through me as I cucked him. I could see it then. A chance to live the fantasy, to create a studio that not only produced porn, but <b>is</b> porn. Improved and smaller cameras, method actors, real, passionate, <b>FUCKING! </b>");
			writeText("You start mentally tuning out as she keeps going on about how selling the studio is as important as selling a scene. You look over to starletF, she's completely enraptured. Years of studying through university flash by, struggling through difficult and tedious work to guarantee a future of soul-crushing and tedious work just to have a home. But here she is, face to face with someone with a true passion for their life.");
			writeText("She puts her notebook down for a moment to wipe the tears forming in her eyes.");
			writeSpeech("player", "", "<i>They're both crazy. <br>I guess they're happy though, that's good. </i>");
			writeText("...");
			writeText("pornstarF's lecture goes on for another half hour. You aren't getting any work done here like this, so eventually you leave.");
			writeFunction("changeLocation(data.player.location)", "Finish and leave");
			break;
		}
		case "starletChat2": {
			addFlag('starlet', 'chat2');
			passTime();
			writeText("As the two of them go on about how their day went and how how their nights will go, you sit back on a sofa and relax. It's strange, you feel clear headed. At peace.");
			writeSpeech("starlet", "", "Hey, you alright?");
			writeSpeech("player", "", "Yeah, just zoning out.");
			writeSpeech("starlet", "", "Whoooa, you look different. Hey, mom, doesn't it kinda look like *he has <i><b>the rut</b></i>?");
			writeSpeech("pornstar", "", "That's just a story, starletF.");
			writeSpeech("player", "", "The what? <br>Fuck, is it an ST-");
			writeSpeech("pornstar", "", "Stop. Don't incite a panic by finishing that sentence.");
			writeSpeech("starlet", "", "Yeah, and don't worry, I took a blood sample when we first met in your office. You're clean.");
			writeSpeech("player", "", "What!? When?");
			writeSpeech("starlet", "", "... <br>Anyways, I know it isn't real, but just look at *him!");
			writeSpeech("pornstar", "", "Maybe.");
			writeSpeech("player", "", "Don't change the subject! Wait, what is the rut anyways?");
			writeSpeech("pornstar", "", "Back... I don't know, seven ye-");
			writeSpeech("starlet", "", "Eight.");
			writeSpeech("pornstar", "", "Eight years ago I did a flick called 'Dong Quest', about a brave young hero on a quest to cuck the demon lord by fucking the queen, and ending his reign of tyranny by showing the world how pathetic the demon lord truly was.");
			writeSpeech("player", "", "Was the demon lord pl-");
			writeSpeech("starlet", "", "The demon lord was played by my dad!");
			writeSpeech("pornstar", "", "Right. Anyways when the hero was beset by two sexually-charged and insatiable harpies, he needed to cast off all worldly desires besides sex. He entered into a mystical state known only to the studliest of men of legend, known as <i><b>the rut</i></b>. <br>After filming I cut out the hardcore stuff and let starletF watch it as a kid's film, so she kinda took the mysticism to heart.");
			writeSpeech("starlet", "", "Daddy would watch it with me all the time. I always loved teasing him, whenever we got to his scenes. I'd pretend was one of the harpies and kick him over and over again. Oh, and I got the uncensored version for my eighteenth birthday!");
			writeSpeech("pornstar", "", "Anyways, it isn't real. It's like magic, or hypnosis. Although I based it on a real event when a coworker of mine had to do a ten-person reverse gangbang by himself. He tapped into something incredible that day, it's a shame he had a heart attack afterwards.");
			writeSpeech("player", "", "What!?");
			writeSpeech("pornstar", "", "Don't be a baby, he was fine. He sued the company for enough to retire, and I even made a film based on it. 'Reckless sex-dangerment'.");
			writeSpeech("starlet", "", "Oh, oh, and there was this one scene where the hero meets a pair of fembois who collect womens clothes, and...");
			writeText("...");
			writeText("starletF ignores any attempts to redirect the conversation and spends the next hour and a half talking about the fantasy porno. By the time she finishes talking about the milf with a rimjob fetish who was secretly the demon queen the whole time it's started to get quite late.");
			writeSpeech("starlet", "", "Aww man, I gotta get home. If I can't figure out my chemistry assignment tonight I'll get a D...");
			writeSpeech("player", "", "Heh.");
			writeSpeech("pornstar", "", "That is no laughing matter!");
			writeSpeech("starlet", "", "Yeah, I'll fail the class you meanie!");
			writeText("You apologize. It's time for you to get going anyway, so you leave.");
			writeFunction("changeLocation(data.player.location)", "Finish and leave");
			break;
		}
		case "starletChat3": {
			addFlag('starlet', 'chat3');
			passTime();
			writeText("pornstarF needs to excuse herself for a moment, so starletF takes a seat next to you.");
			writeSpeech("player", "", "So, excited for today?");
			writeSpeech("starlet", "", "Huh? Oh, yeah.");
			writeSpeech("player", "", "You alright? You seem distracted.");
			writeSpeech("starlet", "", "I'm okay. It's just... My mom offered to let me do another scene, with another guy...");
			writeSpeech("player", "", "Oh. I guess that makes sense-");
			writeSpeech("starlet", "", "I said no. I dunno, it just felt... Gross. Maybe I'm sick?");
			writeSpeech("player", "", "I dunno, you getting with another guy... I guess I kinda feel the same? Whoa, is this like an actual serious topic between us?");
			writeSpeech("starlet", "", "It is serious! How am I gonna film the bicentennial mega orgy?");
			writeSpeech("player", "", "And there it goes. Listen, you're here because you followed you heart, yeah? Keep following it. If it ever gets you into trouble I'll help you out, okay?");
			writeSpeech("starlet", "", "Okay... Thanks.");
			writeSpeech("pornstar", "", "God damn sons of bitches!");
			writeText("pornstarF storms out of her office.");
			writeSpeech("pornstar", "", "Those motherfuckers called an actual plumber to the set, and he called the fucking cops on them! Mother fuckers!");
			writeText("She storms her way all the way out the front door, angrily gets into her car, and drives off.");
			writeSpeech("starlet", "", "Well, I guess filming is off the table for today. Do you just wanna... Hang out?");
			writeSpeech("player", "", "Sure, what did you have in mind?");
			writeText("...");
			writeText("You spend the day alternating between shows she's never seen and pornos you never knew could exist.");
			writeSpeech("player", "", "You don't get out much, do you?");
			writeSpeech("starlet", "", "Look who's talking, mister 'I've never seen Snow White'!");
			writeSpeech("player", "", "That was not Snow White. It may have been done by D!sney animators, but that was not what was released by D!sney.");
			writeSpeech("starlet", "", "Hehe. Anyways, today was fun. I got a text from mom earlier saying the situation nosedived after she got there, and that she'd be taking her frustrations out on dad. She's probably at home breaking out the ball paddle.");
			writeSpeech("player", "", "I... Do you need a place to stay?");
			writeSpeech("starlet", "", "What? No, I'm headed home, why?");
			writeSpeech("player", "", "Nevermind. Stay safe on-<br>How did the situation nosedive after she arrived? What could a bunch of porn actors have done to escalate the situation after the cops arrived?");
			writeSpeech("starlet", "", "She said I can't tell anyone for legal reasons. Don't go digging anything up in the forest for a while, okay?");
			writeSpeech("player", "", "I... Goodbye, starletF.");
			writeSpeech("starlet", "", "Bye!");
			writeFunction("changeLocation(data.player.location)", "Finish and leave");
			break;
		}
		case "starletProposal": {
			writeSpeech("player", "", "Okay, we should start brainstorming on what kind of shoot to do next.");
			writeSpeech("pornstar", "", "*He's right. Go ahead starletF, you have my blessing.");
			writeText("pornstarF shoots starletF a look of motherly pride before she leaves to give the two of you some privacy.");
			writeSpeech("player", "", "What's going on?");
			writeSpeech("starlet", "", "playerF, I wanna thank you for... Well, for believing in me. I'm still struggling with school, I really think I'd be in a bad place if you hadn't helped me out.");
			writeText("starletF gets on one knee and takes your hand.");
			writeSpeech("starlet", "", "playerF, will you make me the happiest girl in the world, and impregnate me?");
			writeSpeech("player", "", "... Excuse me?");
			writeSpeech("starlet", "", "Will you impregnate me, and fuck me every day on camera until we need to do blowjobs and anal instead, and fuck my mother too? And stay with me afterwards, forever? I know you really love your job at the university, but I... But I...");
			writeText("She takes her hands and covers her bright red cheeks.");
			writeSpeech("starlet", "", "Oh, this is so embarrassing... I... <br>I like you! I wanna hold hands, I wanna have a kid, I wanna show them all the wonderful things I grew up with, and I wanna do it all with you by my side!");
			writeSpeech("player", "", "But... But I'm just someone with a dick you-");
			writeSpeech("starlet", "", "You're not just someone with a dick! You believed in me when no one else would, you gave me the courage to tell my mom about my dreams, and we're very, <b>VERY</b> sexually compatible!");
			writeSpeech("player", "", "I...");
			writeText("For all your life you've never met someone quite as voracious as you. Honestly, you might not be able to keep up with her and her mother, you've never really been challenged like this before.");
			writeSpeech("starlet", "", "If it's too much, then, then you don't need to say anything. I'll be here so that you do what you need to so that you don't have any regrets. I just... I hope you'll say yes...");
			writeFunction("writeEncounter('starletEnding1')", "Accept her confession");
			writeFunction("writeEncounter('starletRejection')", "Gently reject her confession");
			break;
		}
		case "starletRejection": {
			writeSpeech("player", "", "I... I can't say yes right now, I'm sorry.");
			writeSpeech("starlet", "", "Oh... Oh, well of course you can't, haha! I'm gonna go watch porn! Porny porny... Porn...");
			writeSpeech("player", "", "Hey, hey, it's okay, don't cry. I... Jeez... I'm sorry.");
			writeText("You aren't much for these sorts of sappy situations, so you let her run off.");
			writeText("...");
			writeText("Not really knowing what to do, you pace around a bit and try to think of a plan until you can hear starletF and pornstarF in another room.");
			writeSpeech("pornstar", "", "And so what, you're going to just give up?");
			writeSpeech("starlet", "", "I just... I didn't... *He didn't say...");
			writeSpeech("pornstar", "", "Did I give up when your father turned me down?");
			writeSpeech("starlet", "", "He... What?");
			writeSpeech("pornstar", "", "'It was just a job!' 'I'm flattered, really, but I'm sorry.' It took a year to hook him, and I couldn't just use my body for obvious reasons. Eventually I convinced him that I loved him for who he was, not just for his femmy body.<br>Listen to me, if you like this *boy, you know what you need to do? You need to sink your teeth into *him, drag *him under, and do a death spiral.");
			writeSpeech("starlet", "", "I don't... I don't know if I can put myself out there again.");
			writeSpeech("pornstar", "", "You can, and you will. You'll find the strength the very next time you look into *his eyes, that's what happened with me. Think, what would your father say?");
			writeSpeech("starlet", "", "'I love you darling, believe in yourself'?");
			writeSpeech("pornstar", "", "Exactly. Let's go have a half day, get some ice cream, and... Mmm, I'm feeling in a dom mood. Would you like to watch me torment your father?");
			writeSpeech("starlet", "", "*sniff*... Yes please.");
			writeText("Confident that starletF will be alright, you leave.");
			writeFunction("changeLocation(data.player.location)", "Head outside");
			break;
		}
		case "starletEnding1": {
			writeSpeech("player", "", "Yes. Yes I will. We can even shoot a marriage scene if you'd like.");
			writeText("She gives you a big smile, tears of joy in her eyes, as she snickers.");
			writeSpeech("starlet", "", "You... *sniff*<br>You dummy! Marriage scenes are super unpopular! Don't worry though, me and mom are gonna have a lot of time to teach you everything you need to know.");
			writeSpeech("pornstar", "", "Exactly!");
			writeText("pornstarF jumps up from behind the couch, cutting a few years off your lifespan.");
			writeSpeech("pornstar", "", "We've got a crash course to do, I'm gonna whip you into shape! You're going to be the top porn connoisseur in the city! Well, aside from my husband of course.");
			writeText("...");
			writeBig("images/starlet/D-1-1.jpg", "Art by Oreteki18kin");
			writeText("And so preparations started for the most important scene of starletF's life.");
			writeBig("images/starlet/D-1-3.jpg", "Art by Oreteki18kin");
			writeText("Eight months of pornographic tutoring, rigorous exercise, leaving your job as a counselor due to exhaustion, and many, many nights of ball-draining sex both on and off (but mostly on) camera.");
			writeBig("images/starlet/D-1-4.jpg", "Art by Oreteki18kin");
			writeText("starletF achieved her dream. Although her total numbers aren't high, her popularity growth is skyrocketing even faster than her mother's did. She hopes to break past her mother's viewership numbers, but that might be a little tough since...");
			writeBig("images/starlet/D-1-5.jpg", "Art by Oreteki18kin");
			writeText("Well, that's jumping ahead a bit. What's most important is that you got hitched! Apparently lewd weddings started a trend, and because pornstarF hired an actual liscensed priest, the ceremony counted!");
			writeBig("images/starlet/D-1-6.jpg", "Art by Oreteki18kin");
			writeText("Even if you didn't 'kiss the bride' with your lips, and her wedding vows were just her screaming the lord's name in vain during a closeup.");
			writeBig("images/starlet/D-1-7.jpg", "Art by Oreteki18kin");
			writeText("But still, your story isn't over yet. There's still one more scene left to shoot before the two of you take a vacation fron the business. It's a niche film, it certainly won't be her most popular, but you've got the feeling it'll be the most important scene in the world to her.");
			writeFunction("writeEncounter('starletEnding2')", "Continue");
			break;
		}
		case "starletEnding2": {
			writeBig("images/starlet/D-2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Honey~! Stop fiddling with the camera, I can feel her kicking~!");
			writeSpeech("pornstar", "", "Mmm, oh dear, I think your sister is kicking too...");
			writeSpeech("starlet", "", "Hehe, I still can't believe you 'forgot' to take your pill for three months straight. Dad was so happy when he found out...");
			writeSpeech("pornstar", "", "That's because he knew how I'd make it up to him that I was impregnated by another man. It was the same way I made it up to him when you were-<br>Oooh, *he's finished~! Dick, dick, dick~!");
			writeSpeech("starlet", "", "Mom, you're insatiable. Normal women just get hunger cravings... Well, I guess I'm not one to talk. You'd better give her what she wants, honey, or she might start sucking your balls to rush you and me.");
			writeText("...");
			writeBig("images/starlet/D-2-4.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "More~! More~!");
			writeSpeech("starlet", "", "Mmm~ C'mon honey, another round, please? I'll get a good night's sleep if I just cum seven more times, promise! Well, maybe.");
			writeSpeech("pornstar", "", "Me next! I hardly get fucked at all now that you're spending all your yummy jizz on my daughter, fuck me again and I'll suck your balls you while you fuck my daughter~!");
			writeSpeech("starlet", "", "Nasty slut! Fuck me next and I'll rim you while you fuck my mom!");
			writeText("And so it goes, a tale as old as time. A tale of two bitches and an exhausted, but satisfied stud.");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "starletAlleySetup": {
			addFlag('starlet', 'brainstorming1');
			passTime();
			writeSpeech("player", "", "So, let's get focused here. What are we shooting?");
			writeSpeech("starlet", "", "Okay, ideas! Old timey-western train robbery, a parody of the fighting game with the girls and the skull-");
			writeSpeech("pornstar", "", "Something simpler, lets save the movies that need complex props for another time. We've still got an offer on clearing out Pundit Street, we could do a 'public' scene.");
			writeSpeech("starlet", "", "Ooh, ooh! What if I got out my jacket, and...");
			writeText("...");
			writeText("The two of them have a long back-and forth as they discuss ideas, writing down enough to completely cover a large whiteboard. Eventually they find a few ideas they clash on, so you'll need to weigh in.");
			writeSpeech("starlet", "", "And I'm saying it'll boost those numbers! It's not like it'd be a hard watersports scene, just something to cap off with. Spray the street at the end. Don't you think it'd be hot?");
			writeSpeech("pornstar", "", "Listen, I'm one-hundred percent sure you can pull it off, but the market is in a volatile place right now...");
			writeSpeech("starlet", "", "What do you think, playerF? Include a urination scene or no?");
			writeFunction("writeEncounter('starletAlleyFetish1Y')", "Yes");
			writeFunction("writeEncounter('starletAlleyFetish1N')", "No");
			break;
		}
		case "starletAlleyFetish1Y": {
			data.player.studio.film1Fetish1 = true;
			writeSpeech("player", "", "I'm fine with it.");
			writeSpeech("starlet", "", "Yes! And he's pretty vanilla, pretty much our target demographic.");
			writeSpeech("pornstar", "", "... Fine. We can fit it in towards the end of a scene.");
			writeSpeech("starlet", "", "Okay, okay, so what's my character going to be? I feel like we'll be pretty limited if I'm unwilling.");
			writeSpeech("pornstar", "", "I agree, it's hard to make a public scene believable without enthusiasm. Let's stick close to reality, a mother and a daughter enjoying a public fuck on camera. I'll go for a more reluctant role since we want to put emphasis on your pep.");
			writeSpeech("starlet", "", "Yeah! Okay, next, anal? We gotta have anal if we're in public, obviously.");
			writeSpeech("pornstar", "", "Obviously.");
			writeSpeech("starlet", "", "But people'll be disappointed if anal and creampie are in the tags and our wombs aren't getting stuffed. Still, that's four shots at least. Can you handle that, playerF? You wanna go cunt-to-cunt or go strictly anal?");
			writeFunction("writeEncounter('starletAlleyFetish2Y')", "Vaginal");
			writeFunction("writeEncounter('starletAlleyFetish2N')", "Anal");
			break;
		}
		case "starletAlleyFetish1N": {
			data.player.studio.film1Fetish1 = false;
			writeSpeech("player", "", "I think it might be a bit much.");
			writeSpeech("starlet", "", "Really? Aw...");
			writeSpeech("pornstar", "", "It's for the best. We'll transition off quickly into the next position.");
			writeSpeech("starlet", "", "Okay, okay, so what's my character going to be? I feel like we'll be pretty limited if I'm unwilling.");
			writeSpeech("pornstar", "", "I agree, it's hard to make a public scene believable without enthusiasm. Let's stick close to reality, a mother and a daughter enjoying a public fuck on camera. I'll go for a more reluctant role since we want to put emphasis on your pep.");
			writeSpeech("starlet", "", "Yeah! Okay, next, anal? We gotta have anal if we're in public, obviously.");
			writeSpeech("pornstar", "", "Obviously.");
			writeSpeech("starlet", "", "But people'll be disappointed if anal and creampie are in the tags and our wombs aren't getting stuffed. Still, that's four shots at least. Can you handle that, playerF? You wanna go cunt-to-cunt or go strictly anal?");
			writeFunction("writeEncounter('starletAlleyFetish2Y')", "Vaginal");
			writeFunction("writeEncounter('starletAlleyFetish2N')", "Anal");
			break;
		}
		case "starletAlleyFetish2Y": {
			data.player.studio.film1Fetish2 = true;
			writeSpeech("player", "", "Let's go vaginal.");
			writeSpeech("pornstar", "", "A good choice, if a bit vanilla.");
			writeSpeech("starlet", "", "That's my producer for you!");
			writeSpeech("pornstar", "", "I think that's everything. It'll be a straightforwards scene. How about 'Back-Alley Bitches, Starring starletF starletL & pornstarF pornstarL'?");
			writeSpeech("starlet", "", "Strong, attention grabbing, I like it! What do you think playerF? Don't feel pidgeonholed, you're in on this too so you can suggest a title yourself.");
			writeText("The title of the film is <input type='text' id='nameSubmission' value='Back-Alley Bitches'>.");
			writeFunction("nameFilm1()", "Continue");
			break;
		}
		case "starletAlleyFetish2N": {
			data.player.studio.film1Fetish2 = false;
			writeSpeech("player", "", "Anal. I can handle it no problem.");
			writeSpeech("pornstar", "", "Confident, aren't you?");
			writeSpeech("starlet", "", "That's my producer for you!");
			writeSpeech("pornstar", "", "I think that's everything. It'll be a straightforwards scene. How about 'Back-Alley Bitches, Starring starletF starletL & pornstarF pornstarL'?");
			writeSpeech("starlet", "", "Strong, attention grabbing, I like it! What do you think playerF? Don't feel pidgeonholed, you're in on this too so you can suggest a title yourself.");
			writeText("The title of the film is <input type='text' id='nameSubmission' value='Back-Alley Bitches'>.");
			writeFunction("nameFilm1()", "Continue");
			break;
		}
		case "starletAlleyName": {
			if (data.player.studio.film1Name == "Back-Alley Bitches") {
				writeSpeech("player", "", "I like it. So long as I'm kept off the credits I think this will work.");
			}
			else {
				writeSpeech("player", "", "How about "+data.player.studio.film1Name+" instead?");
				writeSpeech("starlet", "", "... Are you serious?");
				writeSpeech("pornstar", "", data.player.studio.film1Name+"... It doesn't roll of the tongue at all.");
				writeSpeech("starlet", "", "Still, it might catch some eyes. Let's go with it.");
			}
			writeSpeech("pornstar", "", "Great. There's still plenty to plan and ads to make. We'll start filming when we're all here and ready to shoot. We could even start tomorrow if that works out. Scenes do take all day though, so be sure to arrive early."); 
			writeSpeech("starlet", "", "I'm free whenever. Don't keep a girl waiting too long, okay playerF?");
			writeSpeech("pornstar", "", "Don't be a brat about schedules starletF, if he's needed at the school that takes priority. Same with you, how did your last test go?");
			writeSpeech("starlet", "", "Well, this has been productive butI'vegottagobyeloveyoumom!");
			writeText("starletF quickly rushes away. You give a polite goodbye and leave as well.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletAlley1": {
			writeEvent("starletAlley1");
			writeFunction("writeEncounter('starletAlley2')", "Continue");
			break;
		}
		case "starletAlley2": {
			writeEvent("starletAlley2");
			writeFunction("writeEncounter('starletAlley3')", "That's a wrap!");
			break;
		}
		case "starletAlley3": {
			addFlag('starlet', 'porno1');
			passTime();
			passTime();
			if (data.player.studio.film1Fetish2 == true) {
				writeText("After a snack break and a lot metric fuckton of rehydrating you're back on your feet and chatting with the pair as the sky darkens.");
				writeSpeech("starlet", "", "'A couple of bitches hungry for a bone'? That's great! You should've said that for the camera, it'd really get the motor running for our female fans.");
				writeSpeech("player", "", "Maybe. So hey, what actually was in that candy?");
				writeSpeech("pornstar", "", "Would you believe it was a placebo?");
				writeSpeech("player", "", "I would absolutely not.");
				writeSpeech("pornstar", "", "Then I don't have an answer for you.");
				writeSpeech("player", "", "... Hey starletF, was that stuff about your first boyfriend true?");
				writeSpeech("starlet", "", "Well, he was actually just a friend I invited over to study. She really did start sucking him off right away, and at the time I was only-");
				writeSpeech("pornstar", "", "starletF.");
				writeSpeech("starlet", "", "Eighteen. I was eighteen at the time. So was he. <br>Mmm, I'm sore. Mommy, could you call the car?");
				writeSpeech("pornstar", "", "Yes darling. I can have for transportation arranged for you too, playerF, we've been prepping and shooting all day now.");
				writeSpeech("player", "", "It's no big deal, I live down the ways from here. I'll get changed and head home, maybe take a shower.");
				writeSpeech("starlet", "", "Casual! I'll hit the bed right away and jill off until morning!");
				writeSpeech("pornstar", "", "You will not, you will bathe and retire like a good girl. I'll have your father clean me out... Off. Anyways, goodnight playerF.");
				writeSpeech("player", "", "Good night you two, stay safe.");
				writeSpeech("starlet", "", "Bye!");
			}
			else {
				writeText("After a snack break and a lot metric fuckton of rehydrating you're back on your feet and chatting with the pair as the sky darkens.");
				writeSpeech("starlet", "", "'A couple of bitches hungry for a bone'? That's great! You should've said that for the camera, it'd really get the motor running for our female fans.");
				writeSpeech("player", "", "Maybe. So hey, what actually was in that candy?");
				writeSpeech("pornstar", "", "Would you believe it was a placebo?");
				writeSpeech("player", "", "I would absolutely not.");
				writeSpeech("pornstar", "", "Then I don't have an answer for you.");
				writeSpeech("player", "", "... Hey so, how much of that was acting?");
				writeSpeech("pornstar", "", "It's bad luck to answer that directly, but when it comes to how much I'm faking the answer is always 'less than you'd expect'.");
				writeSpeech("starlet", "", "Mmm~<br>I really need a nap after that assfuck. Are we headed home soon?");
				writeSpeech("pornstar", "", "Yes darling. I can have for transportation arranged for you too, playerF, we've been prepping and shooting all day now.");
				writeSpeech("player", "", "It's no big deal, I live down the ways from here. I'll get changed and head home, maybe take a shower.");
				writeSpeech("starlet", "", "Casual! I'll hit the bed right away and jill off until morning!");
				writeSpeech("pornstar", "", "You will not, you will bathe and retire like a good girl. I'll have your father clean me out... Off. Anyways, goodnight playerF.");
				writeSpeech("player", "", "Good night you two, stay safe.");
				writeSpeech("starlet", "", "Bye!");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletBoyfriendSetup": {
			addFlag('starlet', 'brainstorming2');
			passTime();
			writeSpeech("player", "", "Let's start planning out a shoot.");
			writeSpeech("starlet", "", "Yeah, yeah, more brainstorming! Honestly, if I were getting fucked this'd be my favorite part of doing porn. <br>Actually...");
			writeSpeech("pornstar", "", "No, it's too distracting, I've tried.");
			writeSpeech("starlet", "", "Aww.");
			writeSpeech("pornstar", "", "Taking things seriously, there's an essential theme we haven't covered yet. I already know what we're doing with our next shoot.");
			writeSpeech("player", "", "And what would that be?");
			writeText("pornstarF stands up and walks over to you, pulls you up by the collar and looks you dead in the eye.");
			writeSpeech("pornstar", "", "My daughter isn't good enough for you, plain and simple. Let me show you how a real woman takes what she wants.");
			writeText("She pulls you in for a deep kiss, her tongue immediately going in for the kill and wrestling with yours.");
			writeText("starletF gasps and jumps up, before bouncing up and down.");
			writeSpeech("starlet", "", "Ooh ooh, uh... Fuckbunnies! No, Cougar Queen Milfs Volume 2!");
			writeText("pornstarF breaks off the kiss with a completely baffled look on her face as she turns to starletF.");
			writeSpeech("pornstar", "", "Fuckbunnies? Well, you got it on the second. More specifically?");
			writeSpeech("starlet", "", "Scene 3, 'I Want to be your Songbird'. Sorry, I was watching fuckbunnies last night.");
			writeSpeech("player", "", "Umm...");
			writeText("Without looking, pornstarF releases your collar and you plop back down.");
			writeSpeech("starlet", "", "Okay, so boyfriend theft, of course! If you've got a mother daughter duo, you gotta do either milfy boyfriend theft or daughter cucks mom with a daddy fuck.");
			writeSpeech("pornstar", "", "Right on the money, and I don't think your father is up to the task on the second one.");
			writeSpeech("starlet", "", "Can you pull if off? I know boyfriend theft is probably one of the tougher concepts to deliver on. You'd need to really sell that you wanna jump my lover's bones.");
			writeText("pornstarF turns to you, specifically focusing on your crotch, then spending about half that time focusing on your face.");
			writeSpeech("pornstar", "", "Not a problem.");
			if (data.player.gender != "man") {
				writeSpeech("starlet", "", "Oh, hold up, does 'boyfriend' apply here? 'Girlfriend' is more accurate, but doesn't exactly imply dick.");
				writeSpeech("pornstar", "", "The camera won't be able to see her tits. Porno audiences tend not to be discerning, if we need to we'll say she identifies as male.");
				writeSpeech("player", "", "Do I get a say in this?");
				writeSpeech("pornstar", "", "No. I've fantasized for years of stealing my daughter's boyfriend. Don't fuck me on this.<br>Also, 'boyfriend' grabs views better, we've got the numbers to prove it.");
			}
			writeSpeech("starlet", "", "Alright! Okay, first major decision. Cuckqueen or no?");
			writeSpeech("pornstar", "", "No, and that's non-negotiable. The daughter needs to be into it.");
			writeSpeech("starlet", "", "Aww, but cuckquean is trending!");
			writeSpeech("pornstar", "", "It doesn't matter, it's too divisive a niche. starletF, take notes. There's nothing wrong with appealing to a niche audience, appealing to the niche builds up an audience for that niche topic. The problem is if you continue to appeal to them you create a separate audience; you aren't growing your primary one. Then you either choose to keep appealing to that niche audience or you alienate them by returning to usual topics. We don't have other cuckquean projects planned, it's best not to throw just a bone then ignore them.");
			writeSpeech("starlet", "", "Okay, but what if we pivoted instead? We go the classic route, daughter so desperate to win her boyfriend back that she's-");
			writeSpeech("pornstar", "", "Mmmph...");
			writeText("pornstarF bites her knuckle to pull herself out of a fantasy.");
			writeSpeech("pornstar", "", "It could work. But it's important to appeal to the audience hoping for enthusiasm.");
			writeSpeech("starlet", "", "They've both got promise. What do you think, playerF? Daughter tries to win the boyfriend back or she's the instigator of threesome land forever? Honestly we get almost completely different scenes by the end of it.");
			writeFunction("writeEncounter('starletBoyfriendFetish1Y')", "Mom steals the boyfriend");
			writeFunction("writeEncounter('starletBoyfriendFetish1N')", "Daughter is in control");
			break;
		}
		case "starletBoyfriendFetish1Y": {
			data.player.studio.film2Fetish1 = true;
			writeSpeech("player", "", "I think we should go with the mom stealing the boyfriend angle.");
			writeSpeech("starlet", "", "Right, I gotcha. We could have a nice heartbreak scene... I gotta write this down...");
			writeSpeech("pornstar", "", "These scenes are tough to end, let's focus on that and work backwards.");
			writeSpeech("player", "", "Like who I actually end up with?");
			writeSpeech("pornstar", "", "No, I mean what happens immediately after I get creamed?");
			writeSpeech("starlet", "", "I got a lot of ideas, honestly the scene writes itself after we know how I feel about seeing you fuck my boyfriend. So, we go here... And here...");
			writeText("...");
			writeText("The next few hours are spent as pornstarF proudly watches her daughter go through a total of twenty-seven different pornos, going through and analyzing what works and what doesn't. In the end she's practically talking in a language of video titles and you can't follow, but it seems like the pair have settled on a scene outline.");
			writeSpeech("player", "", "Right, I should be headed out.");
			writeSpeech("starlet", "", "Sounds good! Mom and I will hash out the last bits at home. Ooh, maybe daddy has some notes!");
			writeSpeech("pornstar", "", "He might, his cuck folder got bigger over the weekend since he got that cage, hmm...");
			writeSpeech("starlet", "", "Oh, before we forget, the name! I was thinking 'Mom, he's my Boyfriend!'");
			writeSpeech("pornstar", "", "I like it. playerF, what do you think?");
			writeText(`The title of the film is <input type="text" id="nameSubmission" value="Mom! He's My Boyfriend!">.`);
			writeFunction("nameFilm2()", "Continue");
			break;
		}
		case "starletBoyfriendFetish1N": {
			data.player.studio.film2Fetish1 = false;
			writeSpeech("player", "", "Fuck it, follow your heart.");
			writeSpeech("starlet", "", "Threesome land it is!");
			writeSpeech("pornstar", "", "These scenes are tough to end, let's focus on that and work backwards.");
			writeSpeech("player", "", "Like who I actually end up with?");
			writeSpeech("pornstar", "", "No, I mean what happens immediately after I get creamed?");
			writeSpeech("starlet", "", "I got a lot of ideas, honestly the scene writes itself after we know how I feel about seeing you fuck my boyfriend. So, we go here... And here...");
			writeText("...");
			writeText("The next few hours are spent as pornstarF proudly watches her daughter go through a total of twenty-seven different pornos, going through and analyzing what works and what doesn't. In the end she's practically talking in a language of video titles and you can't follow, but it seems like the pair have settled on a scene outline.");
			writeSpeech("player", "", "Right, I should be headed out.");
			writeSpeech("starlet", "", "Sounds good! Mom and I will hash out the last bits at home. Ooh, maybe daddy has some notes!");
			writeSpeech("pornstar", "", "He might, his cuck folder got bigger over the weekend since he got that cage, hmm...");
			writeSpeech("starlet", "", "Oh, before we forget, the name! I was thinking 'Mom, he's my Boyfriend!'");
			writeSpeech("pornstar", "", "I like it. playerF, what do you think?");
			writeText(`The title of the film is <input type="text" id="nameSubmission" value="Mom! He's My Boyfriend!">.`);
			writeFunction("nameFilm2()", "Continue");
			break;
		}
		case "starletBoyfriendName": {
			if (data.player.studio.film2Name == "Mom! He's My Boyfriend!") {
				writeSpeech("player", "", "It's good, let's go with it.");
				writeSpeech("starlet", "", "Woohoo! I'm gonna get my boyfriend stolen by my mom, and she's gonna get stuffed with his jizz! Aw man, I'm gonna watch so many reference videos tonight.");
			}
			else {
				writeSpeech("player", "", "How about "+data.player.studio.film2Name+"?");
				writeSpeech("pornstar", "", "... Is that a reference or something? I don't get it.");
				writeSpeech("starlet", "", "It might not be porn. Maybe it'll pull in the normie crowd? Whatever, I'm gonna get my boyfriend stolen by my mom, and she's gonna get stuffed with his jizz! Aw man, I'm gonna watch so many reference videos tonight.");
			}
			writeSpeech("pornstar", "", "Great. There's still plenty to plan and ads to make. Meet us here tomorrow and I'll drive us to the set."); 
			writeSpeech("starlet", "", "Don't keep a pair of ladies waiting too long, okay playerF?");
			writeSpeech("pornstar", "", "Now, about your recent performance. Where were we again?");
			writeSpeech("starlet", "", "Fourteen inches and twelve inches, you said you wanted to focus on depth though this time.");
			writeSpeech("pornstar", "", "Right. Grab me the lube, the belt, and... Hmm. Maybe fourteen baseballs?");
			writeSpeech("starlet", "", "I'll just grab them all and we'll sort it out later.");
			writeText("starletF quickly rushes away. You give a polite goodbye and leave as well.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletBoyfriend1": {
			writeText("Preparations are made, the three of you are quickly driving off. It's a pretty peaceful drive, they even turned on some normal music. It seems like even they-");
			writeSpeech("player", "", "Did that violin... Just moan?");
			writeSpeech("starlet", "", "Aww man, one minute, twenty-seven seconds. A little bit longer and...");
			writeText("A new instrument joins what you thought was a lovely string industry. It's almost a tuba, but it's very clearly actually a base-shifted moan.");
			writeSpeech("starlet", "", "This whole song uses sampled voiceclips from the studio's flicks. It's made to sound like classical music.");
			writeSpeech("pornstar", "", "It <i>is</i> classical music. That's Bach, dear, just played on different instruments.");
			writeText("You decide to roll with it, and accept the next forty minutes of this odd, slightly arousing music.");
			writeText("...");
			writeText("You arrive at a quaint little house in the middle of a suburb. pornstarF and starletF make their way around the house quickly memorizing the layout.");
			writeSpeech("pornstar", "", "We're supposed to have lived here all our lives. It wouldn't do to get lost on our way to the bathroom. Alright, I'll get started on dinner, the two of you go entertain yourself. playerF, take this candy and no jerking off.");
			writeText("The next half an hour is spent toiling away while starletF checks angles and devices to make sure all the cameras have a clear line of sight. She has you stand in different positions and move around while singing to test the microphones.");
			writeSpeech("player", "", "Geez. There's a lot of work on your end.");
			writeSpeech("starlet", "", "I do this prep so you can do what comes naturally. This isn't a chain; there are no weak links. We're a painting, you and I, and our audience will feel the passion we put into our art.");
			writeSpeech("player", "", "That's pretty deep.");
			writeSpeech("starlet", "", "Thanks! My mom would say that to cheer me up when I failed a subject. Now, out. Dinner is soon and I've got a new app that'll let me stream three porn videos at once.");
			writeText("You leave to go take a nap. Overall the household seems pretty normal. If starletF and pornstarF weren't taking this so seriously, you could absolutely believe you're in the house of a regular mother and daughter pair.");
			writeText("...");
			writeText("You wake up for a lovely dinner, the pair remaining professional as they set the table.");
			writeText("The food looks good, but before you can all start eating starletF and pornstarF close their eyes and start... Praying? Are they saying grace?");
			writeSpeech("pornstar", "", "... And... Action.");
			writeText("Their body languages immediately shift as they slide deep into character.");
			writeSpeech("starlet", "", "Thanks for inviting us over for Christmas mom, we really appreciate it.");
			writeSpeech("pornstar", "", "It's no problem at all dear, it's gotten... Quiet, lately over here. It's lovely to have a man in the house again.");
			writeText("pornstarF flashes you a kind smile with just a tinge of darker intentions. You go with the flow and start eating.");
			writeSpeech("pornstar", "", "Oh my! Such a voracious appetite~");
			writeSpeech("player", "", "Ah, sorry.");
			writeSpeech("pornstar", "", "No, no! Please, eat. I'm sure a <i>big</i> boy like you needs his fill.");
			writeSpeech("starlet", "", "It's really good, mom!");
			writeSpeech("pornstar", "", "Yes dear. Now, what do <i>you</i> think?");
			writeSpeech("player", "", "I, uh...");
			writeText("pornstarF sets her hand on yours and gazes deeply into your eyes.");
			writeSpeech("starlet", "", "So, where are we sleeping? I think my old room had a bed a bit too small-");
			writeSpeech("pornstar", "", "You'll be sleeping in different rooms, of course. It's not that I don't trust you, sweetie, I just can't have <i>you</i> doing anything untoward under my roof.");
			writeSpeech("starlet", "", "Uh, alright, I guess.");
			writeText("starletF seems completely oblivious to where her mother is putting her emphasis. As starletF turns to face you pornstarF quickly pulls her hand away, making it look like she was reaching for a napkin.");
			writeSpeech("starlet", "", "Are you alright with that?");
			writeSpeech("player", "", "Uh, sure. Her house, her rules, right?");
			writeSpeech("pornstar", "", "So, tell me. I made a lot of food tonight, which one would be your favorite?");
			writeSpeech("starlet", "", "I dunno. Why'd you make the small sausages and the big ones too?");
			writeSpeech("pornstar", "", "Some people have different preferences. I, for example, like them <b>big</b>. Say, did you know I can swallow them whole? A full eight inches without gagging back in college, I really should get back into practice. Then again, I do enjoy the struggle.");
			writeText("...");
			writeText("The rest of dinner follows a pretty similar line, full of very direct 'fuck me' lines that go right over starletF's head. pornstarF never shows you the trick, but you're pretty confident she can pull it off.");
			writeText("Eventually dinner ends. pornstarF didn't eat much, saying she'd 'get her fill later'. You all finish eating, starletF gives you a nice peck on the cheek as she wishes you good night.");
			writeText("You head off for bed, but at some point you ended up in a scenario where the only thing bouncing through your head was 'oh right, this is porn'.");
			writeFunction("writeEncounter('starletBoyfriend2')", "Continue");
			break;
		}
		case "starletBoyfriend2": {
			writeEvent("starletBoyfriend");
			writeFunction("writeEncounter('starletBoyfriend3')", "That's a Wrap!");
			break;
		}
		case "starletBoyfriend3": {
			addFlag('starlet', 'porno2');
			passTime();
			passTime();
			if (data.player.studio.film2Fetish1 == true) {
				writeSpeech("player", "", "Ugh... Fuck, my head...");
				writeSpeech("pornstar", "", "It'll pass. You might have a zinc deficiency though, be sure to take a vitamin or something.");
				writeSpeech("starlet", "", "You did great though, good job!");
				writeSpeech("pornstar", "", "Indeed, you performed wonderfully. I was immersed in the role from second one but even I was having trouble keeping myself in character towards the end.");
				writeSpeech("starlet", "", "Yeah, she was supposed to stop after two rounds and fake fainting. I had to sit at the door fingerbanging myself for what felt like forever before you two finished!");
				writeSpeech("pornstar", "", "*AHEM* Well I suppose I did get a bit carried away. And dear, if I might add, you gave that incompetent suckjob a little <i>too</i> convincingly.");
				writeSpeech("starlet", "", "Blegh, I can't help it! Dildos are soft and malleable, I can take eight inches on Freddy and only cry a little! But an actual hard cock... I'll practice more later, will you help me out playerF?");
				writeSpeech("player", "", "Don't... Don't ask me shit like that after eight rounds of sex.");
				writeSpeech("pornstar", "", "Don't worry you two. We'll get you both ready for more intense scenes later. For now you two relax. Ah, here we are. This is your stop, yes?");
				writeSpeech("player", "", "Yeah, thanks. See you two later.");
				writeSpeech("pornstar", "", "Good night, playerF.");
				writeSpeech("starlet", "", "Bye!");
			}
			else {
				writeSpeech("player", "", "Ugh... Fuck, my head...");
				writeSpeech("pornstar", "", "It'll pass. You might have a zinc deficiency though, be sure to take a vitamin or something.");
				writeSpeech("starlet", "", "You did great though, good job!");
				writeSpeech("pornstar", "", "Indeed, you performed wonderfully. I was immersed in the role from second one but even I was having trouble keeping myself in character towards the end.");
				writeSpeech("starlet", "", "Yeah, her passing out wasn't scripted.");
				writeSpeech("pornstar", "", "*AHEM* Well, I lasted longer than you did. At least we all got a lovely nap out of it.");
				writeSpeech("starlet", "", "Mmm~ Mom, you didn't get all of it. I can still feel *his cum inside me.");
				writeSpeech("pornstar", "", "Take this time to practice your kegels dear, with practice you can hold *his entire load in all day.");
				writeSpeech("starlet", "", "Aaah~ I wanna masturbate~! Hurry hoooome~! playerF, will you jerk off thinking of me?");
				writeSpeech("player", "", "Don't... Don't ask me shit like that after eight rounds of sex.");
				writeSpeech("pornstar", "", "Don't worry dear, we'll be home soon and I'll help clean you out more thoroughly. For now just relax and enjoy the buzz. Ah, here we are. This is your stop, yes?");
				writeSpeech("player", "", "Yeah, thanks. See you two later.");
				writeSpeech("pornstar", "", "Good night, playerF.");
				writeSpeech("starlet", "", "Bye!");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletMaskSetup": {
			addFlag('starlet', 'brainstorming3');
			writeText("It's a surprisingly slow day today. pornstarF is doing some calculations for the company's books, and starletF has her nose buried in her phone like a normal teenager for once.");
			writeSpeech("player", "", "This is honestly pretty relaxing, brainstorming with you two is actually pretty fun.");
			writeSpeech("starlet", "", "Aaand done. We've got a hypergeometric distribution of the latest trends in underground porn. It seems like the ones most likely to rise up in popularity are surgical masks, glove presentation, and risky sex. Plus, with the state's new stance on ID laws, barely-legal shoots are less common but also in higher demand.<br>Sorry, did you say something playerF?");
			writeSpeech("player", "", "It's not important. Surgical masks? That's a fetish?");
			writeSpeech("pornstar", "", "I'll admit I'm unaware of the trend myself.");
			writeSpeech("starlet", "", "Are you two serious? You get the global appeal factor, but you also get to have the girl get high off huffing from a jizz mask!");
			writeSpeech("player", "", "There's no way that's real. That's one-hundred percent fake.");
			writeSpeech("starlet", "", "Shows what you know, I could absolutely cum from a sperm waterboarding. Asphyxiation mixed with the scent of cum? Sounds like a fun night to me.");
			writeSpeech("pornstar", "", "I'm more interested that risky sex is trending. We could do another shoot on Pundit.");
			writeSpeech("starlet", "", "Nope, research shows that a lot of people aren't buying it. If we did another scene on that street it'd feel fake. Plus, as fun as getting fucked in public is, it lacks that sense of spine-tingling danger we seriously need. ");
			writeSpeech("pornstar", "", "It sounds like you have an idea.");
			writeSpeech("starlet", "", "Yep. We include a mask for disguise purposes and do a nighttime shoot at my school! The numbers would be-");
			writeSpeech("pornstar", "", "No chance.");
			writeSpeech("player", "", "Absolutely not.");
			writeSpeech("starlet", "", "Aww, you guys are a pair of scaredy cats!");
			writeSpeech("player", "", "The principal already knows you aim to be a pornstar. A blonde teenager shooting professional, high resolution porn on school grounds? Even if we aren't caught during the shoot you'll be expelled by the morning.");
			writeSpeech("starlet", "", "Okay, okay, jeez.<br>... Oh, I know! We can play the youth card and do a nighttime shoot outside the local highschool!");
			writeSpeech("pornstar", "", "Now that's critical thinking, dear. Highschool sex is always trending. We...<br>Ah, there's not much of a way to work me into the scene, is there?");
			writeSpeech("starlet", "", "Aww, don't worry mom, you can have *him to yourself next time. Okay! Mask, street sex, we've got it made already! I'm thinking we do a full set of six loads, and-");
			writeSpeech("player", "", "In public, while we're at risk of getting caught?");
			writeSpeech("starlet", "", "... Ah, yeah. Okay, only time for one of my deepest fantasies then. We either go full-on ball-draining creampie sex on the street or we go for the kinkier option and go for the ol' sperm mask.");
			passTime();
			writeFunction("writeEncounter('starletMaskFetish1Y')", "Vaginal sex");
			writeFunction("writeEncounter('starletMaskFetish1N')", "Oral sex with the mask");
			break;
		}
		case "starletMaskFetish1Y": {
			data.player.studio.film3Fetish1 = true;
			writeSpeech("player", "", "Honestly I think you'll have a better time getting your cunt pounded, being unable to breath...");
			writeSpeech("starlet", "", "Hey, no kinkshaming here. Asphyxiation is a super popular fetish.");
			writeSpeech("pornstar", "", "He's probably right. Plus, if I've got the next scene then you'll want to be fucked thoroughly. I can make it through this time with just your father and several dildos.");
			writeSpeech("starlet", "", "Okay, title! What's the title gonna be? I say we do some wordplay and go with Luvlic Indecency.");
			writeSpeech("pornstar", "", "That might be one of your more questionable title choices. What do you think playerF?");
			writeText(`The title of the film is <input type="text" id="nameSubmission" value="Luvlic Indecency">.`);
			writeFunction("nameFilm3()", "Continue");
			break;
		}
		case "starletMaskFetish1N": {
			data.player.studio.film3Fetish1 = false;
			writeSpeech("player", "", "Honestly, if you think you'll be alright, we can do a blowjob scene and you can waterboard yourself with the mask.");
			writeSpeech("starlet", "", "Yes~! Honestly regular waterboarding is only fun right when you're on the edge of an orgasm already. I'm super hyped~!");
			writeSpeech("pornstar", "", "Make sure you get a good shot of her face the whole time, I won't be there for the scene and I'll be peeved if I can't hear her struggling to breath.");
			writeSpeech("starlet", "", "Okay, title! What's the title gonna be? I say we do some wordplay and go with Luvlic Indecency.");
			writeSpeech("pornstar", "", "That might be one of your more questionable title choices. What do you think playerF?");
			writeText(`The title of the film is <input type="text" id="nameSubmission" value="Luvlic Indecency">.`);
			writeFunction("nameFilm3()", "Continue");
			break;
		}
		case "starletMaskName": {
			if (data.player.studio.film3Name == "Luvlic Indecency") {
				writeSpeech("player", "", "It works, it's a play on words and it gets across the message. I like it.");
				writeSpeech("pornstar", "", "I suppose it'll grow on me. ");
				writeSpeech("starlet", "", "Alright, it's all in motion then?");
			}
			else {
				writeSpeech("player", "", "How about "+data.player.studio.film3Name+"?");
				writeSpeech("pornstar", "", "... I feel just as bad about that one. I suppose it works though.");
				writeSpeech("starlet", "", "Eh, yeah, I've already fallen out of love with Luvlic Indecency. We can go with your idea.");
			}
			writeSpeech("pornstar", "", "I'll get to work on an outfit for playerF. The camera won't show much of it, but it's important that you feel immersed in the role.");
			writeSpeech("starlet", "", "Alrighty! My old uniform won't be nearly warm enough, it's supposed to get really cold tonight. I'll clean my old hoodie.");
			writeSpeech("pornstar", "", "Oh, the red one? That brings back memories. I was so sad when you stopped wearing it, you wore it so often it was the one you had in most of my fantasies of you.");
			writeSpeech("starlet", "", "I stopped cause you stretched it out, mom. I get that you wanted to go the authentic route and wear your real daughter's clothes, but you could have taken it off before getting pounded.");
			writeSpeech("pornstar", "", "No, I stretched out your catholic school outfit. You wore that hoodie to contortionist practice when we had that yoga specialist over. That's how it got stretched.");
			writeSpeech("starlet", "", "Nu-uh! I didn't wear anything for contortionist practice! I remember 'cause you wouldn't stop drooling!");
			writeText("The two of them argue about clothes for a while before they come to the conclusion that familial love is more important than clothes. With numerous preparations needed for the next shoot, you won't be able to film until tomorrow, so you bid the pair goodbye.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletMask1": {
			writeText("After hours upon hours of preparation you and starletF are being driven to the location. It's seriously late, but that means no one else is around.");
			writeSpeech("pornstar", "", "Now I'll be down the block, run towards me if anyone spots you two, alright? I know risk leads to better performance, but...");
			writeSpeech("player", "", "Don't worry, we'll be fine.");
			writeText("You say that, but starletF is fidgeting in the seat next to you. She must be nervous.");
			writeSpeech("player", "", "Hey, relax, there's nothing to-");
			writeSpeech("starlet", "", "Mmm~");
			writeText("She shudders, you hadn't realized she was actually stroking herself during the ride.");
			writeSpeech("player", "", "Should've known. Alright, let's get this over with before anyone comes around. ");
			writeSpeech("starlet", "", "The streetlight~ That's where we'll be most visible~");
			writeSpeech("player", "", "You're asking to get caught, aren't you?");
			writeSpeech("starlet", "", "The faster your heart is pounding, the faster I'll get pounded~");
			writeText("The two of you exit the car and watch it drive off.");
			writeSpeech("player", "", "Alright you little nymph. You ready?");
			writeSpeech("starlet", "", "Fuck yeah I am. Just gimme the word~");
			writeFunction("writeEncounter('starletMask2')", "And... Action");
			break;
		}
		case "starletMask2": {
			writeEvent('starletMask');
			addFlag('starlet', 'porno3');
			passTime();
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletReshoot": {
			writeMed("images/starlet/profile.jpg", "Art by Oreteki18kin");
			writeFunction("writeEncounter('starletIntroReshoot1')", "Reshoot starletF's debut");
			if (checkFlag('starlet', 'porno1') == true) {
				writeMed("images/starlet/A-1-1.jpg", "Art by Oreteki18kin");
				writeFunction("writeEncounter('starletAlleyReshoot1')", "Reshoot "+data.player.studio.film1Name);
			}
			if (checkFlag('starlet', 'porno2') == true) {
				writeMed("images/starlet/B-1-2.jpg", "Art by Oreteki18kin");
				writeFunction("writeEncounter('starletBoyfriendReshoot1')", "Reshoot "+data.player.studio.film2Name);
			}
			if (checkFlag('starlet', 'porno3') == true) {
				writeMed("images/starlet/public1.jpg", "Art by Oreteki18kin");
				writeFunction("writeEncounter('starletMaskReshoot1')", "Reshoot "+data.player.studio.film3Name);
			}
			writeFunction("changeLocation(data.player.location)", "Change your mind and leave early");
			break;
		}
		case "starletIntroReshoot1": {
			writeText("Have starletF play the role of newly awoken buttslut or masochistic painal addict?");
			writeFunction("writeEvent('starlet1a')", "Newly Awoken Buttslut");
			writeFunction("writeEvent('starlet1b')", "Masochistic Painal Addict");
			writeFunction("changeLocation(data.player.location)", "Change your mind and leave early");
			break;
		}
		case "starletAlleyReshoot1": {
			if (data.player.studio.film1Fetish1 == true) {
				writeText("Include a urination scene? Currently: Yes, include a urination scene.");
			}
			else {
				writeText("Include a urination scene? Currently: No, do not include a urination scene.");
			}
			document.getElementById('output').innerHTML += `<button type="button" onclick="fetishToggle('alley1')">Change</button>`;
			if (data.player.studio.film1Fetish2 == true) {
				writeText("Vaginal or anal focus? Currently: Vaginal.");
			}
			else {
				writeText("Vaginal or anal focus? Currently: Anal.");
			}
			document.getElementById('output').innerHTML += `<button type="button" onclick="fetishToggle('alley2')">Change</button>`;
			writeText(`Rename the film: <input type="text" id="nameSubmission" value="Back-Alley Bitches">.`);
			writeFunction("reshootFilm1()", "Continue");
			break;
		}
		case "starletBoyfriendReshoot1": {
			if (data.player.studio.film2Fetish1 == true) {
				writeText("Is mother stealing the boyfriend, or is the daughter in control of the situation? Currently: Mother is stealing the boyfriend");
			}
			else {
				writeText("Is mother stealing the boyfriend, or is the daughter in control of the situation? Currently: Daughter is in control.");
			}
			document.getElementById('output').innerHTML += `<button type="button" onclick="fetishToggle('boyfriend')">Change</button>`;
			writeText(`Rename the film: <input type="text" id="nameSubmission" value="Mom! He's My Boyfriend!">.`);
			writeFunction("reshootFilm2()", "Continue");
			break;
		}
		case "starletMaskReshoot1": {
			if (data.player.studio.film3Fetish1 == true) {
				writeText("Go for public sex or focus purely on oral? Currently: Public sex.");
			}
			else {
				writeText("Go for public sex or focus purely on oral? Currently: Oral focus.");
			}
			document.getElementById('output').innerHTML += `<button type="button" onclick="fetishToggle('mask')">Change</button>`;
			writeText(`Rename the film: <input type="text" id="nameSubmission" value="Luvlic Indecency">.`);
			writeFunction("reshootFilm3()", "Continue");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

function fetishToggle(n) {
	switch (n) {
		case "alley1":
			if (data.player.studio.film1Fetish1 == true) {
				data.player.studio.film1Fetish1 = false;
			}
			else {
				data.player.studio.film1Fetish1 = true;
			}
			writeEncounter('starletAlleyReshoot1');
		break;
		case "alley2":
			if (data.player.studio.film1Fetish2 == true) {
				data.player.studio.film1Fetish2 = false;
			}
			else {
				data.player.studio.film1Fetish2 = true;
			}
			writeEncounter('starletAlleyReshoot1');
		break;
		case "boyfriend":
			if (data.player.studio.film2Fetish1 == true) {
				data.player.studio.film2Fetish1 = false;
			}
			else {
				data.player.studio.film2Fetish1 = true;
			}
			writeEncounter('starletBoyfriendReshoot1');
		break;
		case "mask":
			if (data.player.studio.film3Fetish1 == true) {
				data.player.studio.film3Fetish1 = false;
			}
			else {
				data.player.studio.film3Fetish1 = true;
			}
			writeEncounter('starletMaskReshoot1');
		break;
	}
}

function nameFilm1() {
	data.player.studio.film1Name = document.getElementById('nameSubmission').value;
	writeEncounter("starletAlleyName");
}

function nameFilm2() {
	data.player.studio.film2Name = document.getElementById('nameSubmission').value;
	writeEncounter("starletBoyfriendName");
}

function reshootFilm1() {
	data.player.studio.film1Name = document.getElementById('nameSubmission').value;
	writeEncounter("starletAlley1");
}

function reshootFilm2() {
	data.player.studio.film2Name = document.getElementById('nameSubmission').value;
	writeEncounter("starletBoyfriend1");
}

function nameFilm3() {
	data.player.studio.film3Name = document.getElementById('nameSubmission').value;
	writeEncounter("starletMaskName");
}

function reshootFilm3() {
	data.player.studio.film3Name = document.getElementById('nameSubmission').value;
	writeEncounter("starletMask1");
}

var eventArray = [
	{index: "starlet1a", name: "Newly Awoken Buttslut"},
	{index: "starlet1b", name: "Masochistic Painal Virgin"},
	{index: "starlet2", name: "Fresh Idea"},
	{index: "starletAlley1", name: "Back-Alley Bitches Part 1"},
	{index: "starletAlley2", name: "Back-Alley Bitches Part 2"},
	{index: "starletBoyfriend", name: "Mom! That's My Boyfriend!"},
	{index: "starletMask", name: "Luvlic Indecency"},
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
		case 'starletAlley1': {
			writeText("You've arrived at the shoot, the studio gave you some new clothes to match the scenery, a piece of candy, and a pair of expensive-looking glasses to wear. They're supposed to have a camera in them, but you don't see a lense.");
			writeSpeech("starlet", "", "Heeeey! playerMister Producer! You look great!");
			writeSpeech("pornstar", "", "Indeed, you pull off the look nicely. Make sure you eat the candy.");
			writeText("The pair of them are wearing casual exercise wear, and not much else. The way their clothes move on their bodies, it's pretty clear they aren't wearing bras at least. You eat the confection, it's pretty bland. Maybe it's a breathmint?");
			writeSpeech("starlet", "", "Okay before we start, mom's a pretty serious method actor. She doesn't break character because she <b>is</b> the character. Don't freak out when we start rolling, just do what comes naturally, okay? And don't say 'what was in that candy', it'll ruin the shot.");
			writeSpeech("pornstar", "", "You're overselling me dear, all I do is fit into whatever roll I enjoy the most. The goal of this whole shooting environment is as little acting as possible. No cameramen, and no script for you playerF. And remember, this is the scene we're airing first.");
			writeSpeech("starlet", "", "*He seems a little nervous.");
			writeSpeech("pornstar", "", "There's no need to worry. Let's go vlog style until *he wants to weigh in.");
			writeSpeech("starlet", "", "Got it! Just say when, okay playerF?");
			writeText("The pair of them crouch down in front of you and look up at you expectantly.");
			writeSpeech("player", "", "Uh, action?");
			writeBig("images/starlet/A-1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Hiya! My name's starletF starletL, and this is my mom!");
			writeSpeech("pornstar", "", "H-hello. My n-name is pornstarF pornstarL. I'm here to... To...");
			writeSpeech("starlet", "", "We're here out in public for something very, very special!");
			writeText("starletF gestures to the street around you.");
			writeSpeech("pornstar", "", "Darling... Maybe we shouldn't...");
			writeSpeech("starlet", "", "I'm gonna get fucked right here on the streets, right along with my mommy! Mmm~, I can't wait any longer!");
			writeSpeech("pornstar", "", "Please, dear, this is wro-");
			writeBig("images/starlet/A-1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "Oh my~");
			writeSpeech("starlet", "", "Gawd~! <br>Fuck, it's so incredible! Can you believe I lost my anal virginity to this monster?");
			writeSpeech("pornstar", "", "My daughter's...");
			writeBig("images/starlet/A-1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "Mmph~!");
			writeSpeech("starlet", "", "Ah, fuck, you greedy bitch!<br><i>Fuck, she was supposed to wait for me to go first! </i> <br>Damnit, this is just like with my first boyfriend!");
			writeSpeech("pornstar", "", "Mmph~ *MWAH*! <br> I'm sorry honey, mommy can't control herself...");
			writeText("And immediately she resumes sucking the cock that creampied her daughter.");
			writeSpeech("starlet", "", "I went away for five minutes and came back to find you sucking him off under the table while you fingered yourself. You fucking <b>SLUT</b>!");
			writeBig("images/starlet/A-1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Holy shit, what a massive load! It's coming out of her nose and she's still sucking... Gawd, did you cum in her brain? Do you expect her to kiss me goodnight... With her breath like... Fuck it! Gimme gimme~!");
			writeBig("images/starlet/A-1-5.jpg", "Art by Oreteki18kin");
			writeText("starletF manicly fishes your cock out of her mother's mouth and starts sucking on it. Somehow, you're still completely hard despite cumming enough to coat pornstarF's airways in jizz.");
			writeSpeech("pornstar", "", "Now who's... The greedy one?");
			writeText("pornstarF coughs, and weakly sputters out each word.");
			writeSpeech("pornstar", "", "Mmm~<br>I'll still be getting off on the taste of this all night. Please, playerSir, can my daughter have some too?");
			writeText("pornstarF reaches a hand down her daughter's pants to start rubbing her clit.");
			writeBig("images/starlet/A-1-6.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "*GLRK*");
			writeText("Despite her enthusiasm starletF chokes and gags as you pump ropes of jizz down her throat.");
			writeSpeech("pornstar", "", "Yes~ Take deep breaths and it'll choke you, and you'll cum even harder~...");
			writeSpeech("starlet", "", "*GLRK*");
			writeText("starletF's body spasm as semen leaks from her mouth and nose, her body going into panic mode from the sudden torrent of your cum in her airways.");
			writeText("Finally starletF is able to take a sputtery breath as she pulls her mouth away from your dick and clears her throat with more than a few very wet coughs.");
			writeText("You take a step back before pornstarF can sink her hungry lips onto your shaft again.");
			writeBig("images/starlet/A-1-7.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "Mmm~! Thank you so much, my daughter came so hard from huffing your jizz~");
			writeSpeech("starlet", "", "Khh... Mom, my pants...");
			writeSpeech("pornstar", "", "My, they're soaked... Don't worry, we'll be walking home without them. Let's get cleaned up and then have some fun while this lovely playerMan churns up another load for us, okay?");
			writeSpeech("starlet", "", "Yes mommy...");
			writeText("The two of them pull their pants off to use as rags to clean off their faces, they weren't wearing panties either.");
			break;
		}
		case 'starletAlley2': {
			writeSpeech("starlet", "", "Alrigh... *AHEM* Sorry, still had some jizz stuck in there. My mom's really gotten into the mood, but you still need some time to recharge.");
			writeBig("images/starlet/A-2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("pornstar", "", "Nnngh... I'm exposing my cunt in public~");
			writeSpeech("starlet", "", "You horny slut, and you wanted to chicken out. Okay darling, why don't you pay us back for earlier?");
			writeText("You kneel down onto the level of these bitches and start to work your magic. You plunge your fingers into their pussies and start prepping them for some real fun.");
			writeSpeech("starlet", "", "Ah, my pussy~!");
			writeSpeech("pornstar", "", "Mmm, my pussy is being fingered at the... Nnngh... At the same time as my daughter's... Cuming~!");
			writeBig("images/starlet/A-2-2.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Gghh~! I'm cumming mom! Fuuuck I'm squirting on the street~!");
			if (data.player.studio.film1Fetish1 == true) {
				writeSpeech("pornstar", "", "Hold onto that, and let everything else go~!");
				writeText("You step back to watch the fireworks as the pair shake their hips.");
				writeBig("images/starlet/A-2-3.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Fuuuck~");
				writeSpeech("starlet", "", "Yessss~!");
			}
			writeText("The pair squirt violently across the pavement, each getting off on the public humiliation show being put on by the other. After a moment they collapse in a twitching, heaping mess.");
			writeText("But once you walk up to them, erection out, they suddenly find the energy to get back up. It's like you're waving meat in front of dogs, a fitting metaphor for a couple of bitches hungry for a bone.");
			writeText("...");
			if (data.player.studio.film1Fetish2 == true) {
				writeBig("images/starlet/A-3-1.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Please, I want it so bad~");
				writeSpeech("pornstar", "", "I need it! Gimme your cock, please, I can't wait anymore!");
				writeSpeech("starlet", "", "Mommy, you got to go first last t-");
				writeSpeech("pornstar", "", "Fuck me~! Fuck me until my legs give out~!");
				writeBig("images/starlet/A-3-2.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Nnngh~!");
				writeSpeech("starlet", "", "Aww, why does mommy get to go first again? That's not fair, I wanna get fucked up by his fuckstick!");
				writeSpeech("pornstar", "", "Sh-shut up, slut, and let mommy get the dicking she needs. Fuck, ye-e-e-sss~");
				writeSpeech("starlet", "", "Aww, she looks like she's having so much fun! Hurry up and pound her snatch into putty so that I can have my turn, okay? If mommy won't share turn her womb into a jizz balloon!");
				writeSpeech("pornstar", "", "Yesss~! Fuck fuck fuck fuck FUCK ME~! CUMMING~!");
				writeText("You follow suit, pumping an obscenely large load of cum against, and then past her cervix.");
				writeBig("images/starlet/A-3-5.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Hah... Hah... God, I'm sweating like a whore in church...");
				writeSpeech("starlet", "", "Yay, you finished caking mom's twat in jizz! Now me, now me, it's my turn! Pretty please, I've been so patient waiting for yo-");
				writeBig("images/starlet/A-3-7.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Oh~! Oh fuck, you're so big~! The cock I was choking on is splitting my pussy~!");
				writeSpeech("pornstar", "", "Ooh god, you look so hot like that honey. Unf...");
				writeSpeech("starlet", "", "Cumming~! I'm cumming already~!");
				writeSpeech("pornstar", "", "G-good job, dear. Keep going, roll your hips just like I taught you, nnngh...");
				writeText("pornstarF slides her fingers around her gaping, cum-stuffed cunt, pushing in every so often to make sure that nothing escapes.");
				writeSpeech("starlet", "", "Oh gawd~, it won't stop~! It's still going~!");
				writeSpeech("pornstar", "", "Yes! Keep focused dear, keep riding that orgasm all the way~!");
				writeSpeech("player", "", "Fuck, cumming!");
				writeSpeech("starlet", "", "Yes~! God, I'm gonna fuck up my brain by cumming so much~!");
				writeSpeech("pornstar", "", "Yes, yes! Cum with mommy, cumming~!");
				writeBig("images/starlet/A-3-10.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Fuuuck, my pussy is completely stuffed... *He came so much...");
				writeText("You stumble back, and fall over onto the ground, spent. Your vision swimming, you see starletF and pornstarF standing over you.");
				writeSpeech("starlet", "", "Hope you'll join us again so that you can see my mom-");
				writeSpeech("pornstar", "", "And my daughter!");
				writeSpeech("starlet", "", "Get fucked on camera again! Bye~!");
			}
			else {
				writeBig("images/starlet/A-3-1.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Please, I want it so bad~");
				writeSpeech("pornstar", "", "I need it! Gimme your cock, please, I can't wait anymore!");
				writeSpeech("starlet", "", "Mommy, you got to go first last t-");
				writeSpeech("pornstar", "", "Fuck me~! Fuck me until my legs give out~!");
				writeBig("images/starlet/A-3-3.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Guooh~! My ass~!");
				writeSpeech("starlet", "", "What are you doing!? Stop, that's the wrong-");
				writeSpeech("pornstar", "", "Sh-shut the fuck up slut, and let mommy get her shithole pounded into the dirt!");
				writeSpeech("starlet", "", "Mom, I had no idea-");
				writeSpeech("pornstar", "", "That I fucking love anal? Bitch, you weren't even old enough to walk when I was getting bent over the counter and cumming from having my ass destroyed!");
				writeSpeech("starlet", "", "<i>I don't remember this in the script... I thought she was supposed to be the reluctant one... </i><br>Mom, please, maybe this was a-");
				writeSpeech("pornstar", "", "Fuck, CUMMING~!");
				writeText("She screams at the top of her lungs as her pussy sprays onto the ground and you start punping jizz into her intestines. You pull out slowly, every inch a battle against her greedy asshole. Finally you're at the end, and you tug. <br>And tug. <br>And tug.");
				writeText("Until, with a *POP* you pull your cockout and sperm starts leaking out of her her ass.");
				writeBig("images/starlet/A-3-6.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Hah... Hah... Fuck... Fuck I haven't cum like that in years. Nothing like a good hard assfuck to take off years of frustration. <br>Well, nothing except playing with my clit while watching my daughter get pounded by a cock that was just balls deep in my rectum.");
				writeSpeech("starlet", "", "Mom, please, you're scaring me! You were so nervous a second ago, I don't wanna-");
				writeBig("images/starlet/A-3-8.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "KKKHG~");
				writeSpeech("pornstar", "", "Oh fuck yeah, put on a show for mommy. All that fear fades away when you feel it right? You've been using mommy's toys, and I know those screams aren't from stuffing your twat.");
				writeSpeech("starlet", "", "Fuck! Mommy, it hurts~! I'm gonna cum~!");
				writeSpeech("pornstar", "", "Let it all out, honey, give in. Cum from knowing you're a street tramp getting her ass fucked in public, I'll eat you out later okay?");
				writeSpeech("starlet", "", "Ghhh~!");
				writeText("Squirt sprays from starletF's pussy onto the ground as her legs shake and almost give out.");
				writeSpeech("starlet", "", "Fuuuuck~!");
				writeText("You cum, pumping rope after rope into her quivering ass. Her stream of squirt finally comes to an end as you pull out.");
				writeSpeech("starlet", "", "Nngh, fuck, he came so much...");
				writeText("You stuble back, and fall over onto the ground, spent. Your vision swimming, you see starletF and pornstarF standing over you.");
				writeSpeech("starlet", "", "Guh... H-hope you'll join us again so that you can see my mom-");
				writeSpeech("pornstar", "", "And my daughter!");
				writeSpeech("starlet", "", "Get fucked on camera again...");
				writeSpeech("pornstar", "", "Goodbye~!");
			}
			break;
		}
		case "starletBoyfriend": {
			if (data.player.studio.film2Fetish1 == true) {
				writeBig("images/starlet/B-1-1.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Oh my, you're up late. I suppose you've got a lot more stamina than my daughter, she tends to give up a lot earlier than I do.");
				writeSpeech("player", "", "I, uh-");
				writeSpeech("pornstar", "", "Oh don't worry. I just needed to do something around the house, and I tend not to bother with clothes anymore unless my daughter is around. Now, let me show you to your room.");
				writeText("She leads you by the hand, her ass jiggling with every step. Eventually you manage to look back up as she licks her lips watching you staring.");
				writeSpeech("pornstar", "", "Tell me. Have you and my daughter fucked yet?");
				writeSpeech("player", "", "Excuse me?");
				writeSpeech("pornstar", "", "Aww, really? What, saving yourself for marriage? Maybe my daughter's just a prude. At this rate she'll need to settle for some pin-dick I'm not interested in.");
				writeSpeech("player", "", "I... You shouldn't talk about her that way!");
				writeText("She's turning the knob on your door as you say that. When you raise your voice she visibly shivers, but doesn't turn to face you.");
				writeSpeech("pornstar", "", "A backbone? Pretty rare for one of her men. I hope you're special in other areas too, otherwise I'll give you the night of your life and throw you away like all the rest.");
				writeText("She sashays into your room, lays down on the only bed, and spreads her legs.");
				writeBig("images/starlet/B-1-2.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Now look what you've done to me, you big brute. Did you know not one of my daughter's boytoys ever went back to her? I guess she couldn't compare.");
				writeSpeech("player", "", "Shut up, slut.");
				writeSpeech("pornstar", "", "Make me.");
				writeBig("images/starlet/B-1-3.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Ah~! My, you certainly are special~! Mmm, if she weren't such a prude she'd have cum on this cock right away~!");
				writeSpeech("player", "", "Shut... Up! Don't you fucking talk about her like that!");
				writeSpeech("pornstar", "", "Ah~! Yes~! Punish this bad mommy for stealing from her daughter~!");
				writeText("After so much teasing you find yourself on the edge already.");
				writeSpeech("pornstar", "", "Yes~! Cum inside me~!");
				writeText("You pump a load of cum into her cunt, and she giggles.");
				writeSpeech("pornstar", "", "Mmm~ That feels nice, but I'm a little disappointed. All bark and no bite, hmm? You can clean up now, hopefully you can be satisfied with my-");
				writeSpeech("player", "", "Shut UP!");
				writeSpeech("pornstar", "", "Ah~, another round already? My, you certainly have something to prove, but if this is as disappointing as the last...");
				writeText("...");
				writeBig("images/starlet/B-1-4.jpg", "Art by Oreteki18kin");
				writeText("She was not disappointed. Six rounds later, each one ending in an inhuman torrent of cum, she's out cold and her cunt is stuffed to the brim. Whatever was in the candy, maybe even the food, is pushing you past your limits.");
				writeText("The bitch stuffed, you collapse at her side and feel your eyes grow heavy. You feel yourself falling over, and passing out.");
				writeText("...");
				writeBig("images/starlet/B-1-5.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Ah~! Ah~!");
				writeSpeech("player", "", "What... What's going-");
				writeSpeech("starlet", "", "Yes~! Ah, good mooOOORNIng honey~! I'm really sorry, I was... Wasn't being honest about why I wanted to spend our chrismaaAAH Fuck cumming~!");
				writeBig("images/starlet/B-1-6.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Nnngh~! I found out last time that... That I really fucking love watching my mom steal men from me... So I started stroking my pussy while listening to you two fuck~! I know you're tired from fucking mommy, but I just couldn't help myself! I... I'm cumming again~!");
				writeBig("images/starlet/B-1-7.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Guuuuhd~<br>Mommy's sloppy seconds feel soo goood~");
				writeBig("images/starlet/B-1-8.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Hah... Haha... I did it... I managed to... Wh- how are you s-still hard? I... I can't take any more... My mouth! I'll make you cum again with my mouth!");
				writeSpeech("pornstar", "", "My poor, poor little girl.");
				writeSpeech("starlet", "", "Mom! You're awake?");
				writeSpeech("pornstar", "", "She cums like a firecracker, but lasts about as long as one too.");
				writeSpeech("starlet", "", "No! Please, I swear I can be just as good as her, I promise!");
				writeSpeech("pornstar", "", "Mmm, I've never been satisfied like that before, I think I'll keep you around. How about I show you what I can do with <i>my</i> mouth?");
				writeBig("images/starlet/B-1-9.jpg", "Art by Oreteki18kin");
				writeText("starletF tries awkwardly to take your dick, but can't get it down her throat. She jerks what she can't fit while glancing up with rapt attention as you lock lips with your mother");
				writeText("On the opposite end of the spectrum pornstarF's tongue dances around yours, wrapping around the tip and stroking it up and down. It only takes a second of imagining what it could do to your cock before-");
				writeBig("images/starlet/B-1-10.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "*GLCK*");
				writeText("starletF gags and sputters on your dick. Her eyes start to water as she struggles to breathe");
				writeBig("images/starlet/B-1-11.jpg", "Art by Oreteki18kin");
				writeText("Her eyelids start to flutter and her free hand reaches down to stroke herself as she devotedly nurses on your cockhead.");
			}
			else {
				writeBig("images/starlet/B-2-6.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Surprise!");
				writeText("You flipped on the lights to the guest room only to find starletF presenting her mother's bare cunt to you.");
				writeSpeech("starlet", "", "You didn't think I was that oblivious, did you? My bitch of a mother is so thirsty I'm surprised she wasn't trying to suck you off at the table!");
				writeSpeech("pornstar", "", "Ah~! I really wanted to, I was hoping you'd pick up on all the-");
				writeBig("images/starlet/B-2-7.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "S-stop~! Don't spread my pussy like that~!");
				writeSpeech("starlet", "", "So, you want my boyfriend? You want his cum?");
				writeSpeech("pornstar", "", "Yes! Yes I want it, I need-");
				writeSpeech("starlet", "", "Cmon then, you heard her! What are you waiting for, get down here and start jerking off!");
				writeSpeech("pornstar", "", "W-what? No!");
				writeText("You kneel down and free your hard cock, and start stroking it in front of pornstarF's pussy.");
				writeSpeech("pornstar", "", "Hey, no! starletF, tell him to fuck me already, don't tease me!");
				writeSpeech("starlet", "", "Great job honey. She's leaking, go ahead and plug her up a little. Not too deep though, I wanna see her squirm.");
				writeBig("images/starlet/B-2-8.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Aaah~! Please, a cock like that... Mommy needs it~!");
				writeSpeech("starlet", "", "That's obvious, slut. A bitch like you loves 'thick sausages'. You're leaking so much, how many times did you jill off thinking about how tonight would go?");
				writeSpeech("pornstar", "", "Noooo~");
				writeSpeech("starlet", "", "How many times!?");
				writeSpeech("pornstar", "", "I don't know! I couldn't stop, I only put something on when you knocked at the door! I couldn't stop thinking about how thick he might be during dinner! Please, please, <b>PLEASE</b>!");
				writeSpeech("starlet", "", "Go ahead honey.");
				writeBig("images/starlet/B-2-9.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Aaaa-oh fuuck~! I'm cumming already~! I'm squirting on the cock of my daughter's boyfriend!");
				writeSpeech("starlet", "", "Cmon mom, you're supposed to be a positive role model! What happened to the strong, independent woman who raised me?");
				writeSpeech("pornstar", "", "I'm sorry~! Your mommy is a desperate cockslut~! I can't hide it anymore, I need more of this dick in my life~!");
				writeSpeech("starlet", "", "Tsk. So pathetic. Hey honey? <b>Cum</b>.");
				writeBig("images/starlet/B-2-10.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "OH GOD~! FUCK, YES~!");
				writeSpeech("starlet", "", "God, both you and he are cumming your brains out! You two are made for each other. Well too bad, he's mine~");
				writeSpeech("pornstar", "", "More~! More~!");
				writeSpeech("starlet", "", "Mmm~ Honey, pull out so I can see what a mess you've made.");
				writeBig("images/starlet/B-2-11.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Holy shit, you fucking stuffed that cunt... Ooh, I'm really wet. How about this, you two have another round while I get a little more comfortable, okay?");
				writeSpeech("pornstar", "", "Cock! Cock, please!");
				writeText("...");
				writeSpeech("starlet", "", "Hey honey, I'm ready.<br>Honey?");
				writeBig("images/starlet/B-2-12.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Guh-huh-huuuud~! You're destroying my cunt, harder~!");
				writeSpeech("starlet", "", "Geez honey, a girl'll get jealous like this. You've already stuffed her so much your jizz is spraying out with every thrust!");
				writeBig("images/starlet/B-2-13.jpg", "Art by Oreteki18kin");
				writeSpeech("pornstar", "", "Guh... Huh... hdd... M... Mor...");
				writeSpeech("starlet", "", "She's out. You fucked my mom's lights out... You still have more for me, right? That greedy bitch didn't hog all of it for herself?");
				writeSpeech("player", "", "C-cum...");
				writeSpeech("starlet", "", "Honey? Oh my, you aren't thinking straight. Maybe we should just go straight to bed, and skip the sex?");
				writeSpeech("player", "", "Cum!");
				writeSpeech("starlet", "", "Mmm~, I guess a quickie won't hurt.");
				writeText("...");
				writeText("An hour has passed.");
				writeBig("images/starlet/B-2-14.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Yes~! Yes~! Break me, I don't wanna even remember that Bitch's name in the morning~!");
				writeText("pornstarF is out cold, every so often her legs twitch and another glob of jizz escapes her pussy.");
				writeSpeech("starlet", "", "Break me! Break me! <b>BREAK ME</b>!");
				writeBig("images/starlet/B-2-15.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "GGGGHG~!!!");
				writeText("Her body shakes and seizes like she's on the electric chair. Her cunt is stuffed with so much cum it has nowhere else to go but out as it squirts from her pussy onto the floor.");
				writeText("She goes silent for once, her voice giving out as her eyes roll back in her head. Your own eyes start to feel heavy as the room is spinning. Soon everything goes dark.");
			}
			break;
		}
		case "starletMask": {
			writeBig("images/starlet/public1.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "Hey everybody, it's starletF starletL again. We're here at my old school, I'm really excited to...<br> I can't wait anymore~");
			writeBig("images/starlet/public2.jpg", "Art by Oreteki18kin");
			writeSpeech("starlet", "", "I'm so wet... I really need to cum~");
			writeText("Her voice is lacking its usual fervor, it's like she's being kept on the edge of an orgasm by the tension in the air alone.");
			if (data.player.studio.film3Fetish1 == true) {
				writeSpeech("starlet", "", "Sorry if my voice is a bit muffled, hopefully the camera picks up my moaning. I need to be quiet though, I'll be in big trouble if we get caught. I really wanna get my mouth fucked, that'd keep me quiet, but...<br>I can't keep this up, I need you inside me, right now.");
				writeText("She turns around and bends over, presenting her bare ass and pussy to you.");
				writeSpeech("starlet", "", "I can't hold back anymore~");
				writeSpeech("player", "", "Neither can I.");
				writeBig("images/starlet/publicA1.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "AAAAH~!");
				writeSpeech("player", "", "Quiet! Do you want to get caught?");
				writeSpeech("starlet", "", "S-sorry~<br>I'm really on edge already, I'm not going to laaAAast long~");
				writeSpeech("player", "", "Neither... Ghh... Am I...");
				writeBig("images/starlet/publicA2.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Fffuck~!<br>Ah~! This was a b... A bad idea~! We're gonna get seen~!");
				writeSpeech("player", "", "God damnit, why do you sound like you're getting off on the danger?");
				writeSpeech("starlet", "", "Because I am~!");
				writeBig("images/starlet/publicA3.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Aaah~! Cumming~<br>Pull... Pull my hair harder...");
				writeSpeech("player", "", "God damn... Crazy nympho...");
				writeBig("images/starlet/publicA4.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "You know you love it~");
				writeText("You pull out of her sopping cunt, she stumbles forwards, barely catching herself before she faceplants onto the ground.");
				writeText("On shaky legs, she stands back up and turns to you. You aren't sure exactly what she's planning, and it catches you off guard when she takes you by the hand and starts walking down the street.");
				writeText("With her free hand she rubs at her creampied snatch, visible for the world to see, and she does her best to keep it from leaking out too much as she guides you bottomless around the corner until you see pornstarF's car.");
				writeSpeech("player", "", "Are we done?");
				writeText("She shakes her head no, before guiding you to a bench on the sidewalk where she'll be in full view of her mother.");
				writeText("She takes a seat and spreads her legs.");
				writeBig("images/starlet/publicA5.jpg", "Art by Oreteki18kin");
				writeSpeech("player", "", "You really are insane...");
				writeSpeech("starlet", "", "Let's go for as long as we can, darling~<br>I'm not going home until you've fully broken me, so you'd better hurry if you don't wanna get caught. Put on a good show for mommy to get off to, okay~?");
				writeText("...");
				writeBig("images/starlet/publicA6.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Gggh~!");
				writeSpeech("player", "", "God damn slut, just break already... How much more can you take?");
				writeSpeech("starlet", "", "Gh... So gewd~");
				writeText("Finally seeing an opening you grab her by the arm and pull her off the bench, quickly guiding the dazed nymph to the car.");
				writeText("pornstarF notices your approach and quickly takes her legs off the dashboard, licks her fingers clean, and gets the engine started as you get starletF inside.");
				writeText("Just in time too, as the porchlight of a nearby house comes on.");
				writeSpeech("player", "", "Go, go, go!");
				writeText("...");
				writeText("The drive is mostly quiet, starletF alternates between pushing globs of your cum into her twat and scooping globs out to taste, and while pornstarF is keeping both hands on the wheel, the sounds her thighs are making as they rub together suggest she's multitasking.");
				writeText("Eventually you arrive at your stop.");
				writeSpeech("pornstar", "", "G-good night, playerF.");
				writeText("One of her hands dives down as the car comes to a stop, giving you an idea of how she'll be spending her time until morning.");
				writeSpeech("starlet", "", "Good... Good niiiight~!");
				writeText("Meanwhile starletF has lifted both legs into the air and is openly fingerfucking her messy snatch.");
				writeText("You need some sleep.");
			}
			else {
				writeSpeech("starlet", "", "Today, on camera, I'm gonna have several hands-free orgasms from huffing jizz. Sorry if my voice is muffled, but it won't matter today because I won't be doing a lot of talking~<br>Closer, closer, mom wanted to see this in detail, remember?");
				writeSpeech("player", "", "She's probably fingering herself right now to the thought of what her beautiful daughter is about to do.");
				writeBig("images/starlet/publicB1.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "She can squirt all over her hand all she wants, I've gone too long without having a real dick all to myself. I'm the one having fun tonight.<br>Ah, cmon. We could be seen at any moment, get your dick out~<br>Hurryhurryhu-");
				writeBig("images/starlet/publicB2.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "So big~<br>Ah, the mask is blocking your scent... Could you...?");
				writeSpeech("player", "", "No problem at all.");
				writeBig("images/starlet/publicB3.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Oooh~*huff*<br>It's got such a powerful scent... The smell of precum, it's making my eyes water...<br>I wanna touch myself so bad~");
				writeSpeech("player", "", "A good girl like you doesn't need to, though, right?");
				writeSpeech("starlet", "", "Yes sir~*huff*<br>Keeping my hands where you can see them... It'll make me squirt even harder~");
				writeSpeech("player", "", "Go ahead and take one last deep breath before we get started.");
				writeSpeech("starlet", "", "Y-yes please~");
				writeText("The takes a long, drawn out huffing breath and holds the scent of your cock in her longs for as long as she can, her legs give a cute little twitch and you can hear a drop or two of fluid hitting the sidewalk underneath her.");
				writeSpeech("starlet", "", "N-need~*huff*<br>Please~*huff*");
				writeText("Of her own accord, hands still flashing peace signs for the camera, she pulls her head back for a moment to align the head of your cock to her lips, sloppily making out with it before she pushes forwards and bobs back again.");
				writeBig("images/starlet/publicB4.jpg", "Art by Oreteki18kin");
				writeText("And all the while she's still staring into your eyes. She slowly blinks once and comes to a stop, signalling you to begin.");
				writeText("And although it's a shame to completely ruin such a pretty face, you take the invitation and begin making a mess of her. You push into her mouth hitting her throat causing her to give out a *GLURK*, but still she treats your thrusts with a religious reverence.");
				writeSpeech("starlet", "", "Mmmgkk~<br><i>God, I fucking love this job...</i>");
				writeText("The cold air that tingles your skin whenever you pull back before a thrust, the danger of the situation, and the sounds of more drops of fluid hitting the sidewalk, all of them combined push you over the edge.");
				writeBig("images/starlet/publicB5.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Ggglck~!");
				writeText("You know she's capable of swallowing it all down easily, but she lets the torrent of sperm back up for the sake of soaking the head of your cock and her mask in jizz. Soon enough she looks drunk, like her head is swimming in the stuff.");
				writeText("You pull out and wipe yourself off, a few stray shots landing on her face and hair.");
				writeBig("images/starlet/publicB6.jpg", "Art by Oreteki18kin");
				writeSpeech("starlet", "", "Kkhhh *huff*");
				writeText("She sounds like she's holding in a cough, but she keeps taking shallow breaths through the mask. Bubbles and globs of sperm slide down her face, but the majority of it is soaking her facemask.");
				writeSpeech("starlet", "", "*huff*<br>*huff*");
				writeText("Soon enough her legs are shaking and her uncovered eye is fluttering, you hear a stream of fluid splash against the sidewalk, she's dancing on the edge of consciousness and having what is probably a soul-rocking orgasm because of it.");
				writeSpeech("starlet", "", "*huff* *huff*<br>*huff* *huff*");
				writeText("You hear a noise from down the street. It could be the wind or a stray animal, but you decide not to take any chances. You grab starletF by the shoulder and support her as you make your way to the car. Her breathing grows faster and more chaotic with every step.");
				writeText("You get into the car, pornstarF not saying anything but her gaze lingers on starletF's jizz-huffing form.");
				writeSpeech("player", "", "Will she be alright?");
				writeText("Your question is answered for you as starletF, no longer thinking rationally, pulls up her hoodie and starts stroking her cunt as quickly as her hand can move.");
				writeSpeech("starlet", "", "*huff* *huff*<br>*huff* *huff*");
				writeText("A pair of fingers pinching her clit and three more on her other hand thrusting into her pussy, her legs shake as her labored breathing speeds up even more. She lifts her twitching legs up, and sprays the seat in front of her with her squirting pussy.");
				writeText("There's a barely noticable swerve in the car, you look up and pornstarF has pried her eyes away from her daughter to focus on the road, she's also breathing heavily.");
				writeText("Worried about potential brain damage, you pull the mask off starletF's face. She gives a small cough, then a larger one as her eyes shoot open like she's coming out of a drug-induced haze.");
				writeSpeech("starlet", "", "H-*cough*<br>H-holy fuck...<br> Holy fuck that was incredible...");
				writeText("pornstarF dryly swallows, audible even in the back seat.");
				writeText("It seems like you'll have a popular film on your hands once this goes online, and it  also seems like pornstarF is pretty excited to try out the fetish herself sometime. The ride home is quiet as everyone tries to wrap their heads around the scope of exactly what happened.");
				writeText("Eventually you arrive at your stop. You hand over the camera glasses and step out.");
				writeSpeech("pornstar", "", "G-good night, playerF.");
				writeText("The wet sounds coming from her thighs rubbing together give you an idea of how she'll be spending her time until morning.");
				writeSpeech("starlet", "", "Good... Good niiiight~!");
				writeText("Meanwhile starletF has picked her mask back up. She presses it against her face as she goes back to playing with herself.");
				writeText("It's going to be tough to get any sleep tonight.");
			}
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
	if (data.player.location == "gallery") {
		writeFunction("changeLocation(data.player.location)", "Finish");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "starletReminder", trust: 80,},
	{index: "starletSecondReminder", trust: 83,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "starletReminder": {
			writePhoneSpeech("starlet", "", "Hey! I'll be at the shoot location later this evening, alright? If nobody's home I'll just head back and try again tomorrow.");
			break;
		}
		case "starletSecondReminder": {
			writePhoneSpeech("starlet", "", "Heeeeey so I'm gonna head over to mom's studio again today, it's in the shopping district. You should come over too, she probably wants to give you an orientation. Sys!");
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