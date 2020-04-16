function writeScene(scene) {
	console.log("Now writing scene "+scene);
	switch(scene) {
		case "start" : {
			writeHTML(`
			im scripts/gamefiles/logo.png
			t Salutations friends! Human Alteration App is an adult game created by me, NoodleJacuuzi. You can find and keep up with all of my work at my<a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a>
			`);
			writeText("I also have a <a href='https://www.patreon.com/noodlejacuzzi'>Patreon</a>");
			writeText("I post regular content previews and polls there, and all releases are open and visible to the public even if you aren't a patron. I don't intend to gate content with it, so it's easy to ignore, but I would appreciate any support. If you don't have a dollar to spare, leaving your thoughts in the game's discussion forums, writing a review or spreading the word about the game are all helpful as well.");
			writeText("Finally, before the relevant gameplay info, I also have a discord. I'm NoodleJacuzzi#4120, and if you'd like please feel free to join or just visit <a href='https://discord.gg/B3AszYM'>my discord server</a>.");
			writeText("This game features a branching point after the prologue. One path uses pictures of real porn actresses, while the other primarily uses drawn images. As a short tip, consider avoiding taking a break to bathe if you're more on the dominant side, and check the logbook if you can't figure out what to do.");
			writeText("The dominant path features scenes of questionable consent, dubious consent, mind control, male-on-female degradation, and optional watersports scenes.");
			writeText("The submissive path features scenes of sissification, sexual depictions of shemale characters, sounding, and other more extreme fetishes taken from the works of the artist Aya. Consider supporting out their work <a href='https://www.patreon.com/aya_shobon'>Aya Shobon's Patreon</a>");
			writeText("There is no depiction of minors or scatological content herein.");
			writeText("Finally, special thanks to Wild Bill / Master of Puppets for the save to / load from file code, and to stiggy752 for the framework this game's CSS is built upon!");
			writeFunction("sceneTransition('prologue')", "Start the game");
			writeFunction("sceneTransition('altStart')", "Alternate intro without actual incest");
			writeFunction("sceneTransition('prologueSkip')", "Skip the prologue, go straight to the dom/sub branching point");
			writeText("As of version 1.1 I've come back to polish the game's content, update the engine, and add content where I feel the earlier versions of the game could be improved. Please head on over to my patreon for more details on all that I ever intend to add to this game. Unlike my other works like Anomaly Vault and Hentai University, Human Alteration App is made to be finished.");
			break;
		}
		//Prologue
		case "prologue" : {
			writeText("Good morning / evening, and congratulations! Your internet usage over the course of the last three weeks have resulted in a change of designation, from 'Degenerate' to 'Porn Connoisseur'. In accordance with this designation change, you were entered into a raffle system, and have now won the right to beta test the Human Alteration App.");
			writeText("This ingenious invention will allow you to exaggerate and realize the desires of fellow humans, modifying their bodies and minds to your will. This is a one-time offer, and while you can't physically refuse, it should be noted that misuse of the app can potentially lead to an XK-class end of the world scenario. See the terms of service for more details.");
			writeText("While most of the app's features are unusable, some features have been enabled as per user review to encourage you to complete our terms of service. This includes a character creation mode, allowing you to change yourself to match one of our pre-designated bodytypes, and allowing you to rename non-administrator class individuals.");
			writeText("This app cannot be bought or sold, but can be transferred between devices. Once transferred between users, you will be forever blacklisted from the app's use. Illegal sale of this product, or an attempt to transfer the device to a previous user will result in immediate termination of both parties and all individuals either party have ever spoken to.");
			writeText("The download and installation process have already been completed in the time taken to read this email. Please proceed to character creation mode.");
			writeTransition("characterCreation", "You close the email, and the app opens");
			break;
		}
		case "altStart": {
			writeText("Good morning / evening, and congratulations! Your internet usage over the course of the last three weeks have resulted in a change of designation, from 'Degenerate' to 'Porn Connoisseur'. In accordance with this designation change, you were entered into a raffle system, and have now won the right to beta test the Human Alteration App.");
			writeText("This ingenious invention will allow you to exaggerate and realize the desires of fellow humans, modifying their bodies and minds to your will. This is a one-time offer, and while you can't physically refuse, it should be noted that misuse of the app can potentially lead to an XK-class end of the world scenario. See the terms of service for more details.");
			writeText("While most of the app's features are unusable, some features have been enabled as per user review to encourage you to complete our terms of service. This includes a character creation mode, allowing you to change yourself to match one of our pre-designated bodytypes, and allowing you to rename non-administrator class individuals.");
			writeText("This app cannot be bought or sold, but can be transferred between devices. Once transferred between users, you will be forever blacklisted from the app's use. Illegal sale of this product, or an attempt to transfer the device to a previous user will result in immediate termination of both parties and all individuals either party have ever spoken to.");
			writeText("The download and installation process have already been completed in the time taken to read this email. Please proceed to character creation mode.");
			writeTransition("characterCreation", "You close the email, and the app opens");
			data.player.flags += "noIncest,";
			break;
		}
		case "characterCreation" : {
			if (picturesDisabled != true) {
				document.getElementById('output').innerHTML += `
					<img id ="selfBig" class="bigPicture" src="images/none.png">
				`;
			}
			writeFunction("changeBody('male')", "Make me masculine!");
			writeFunction("changeBody('sissy')", "Make me cute!");
			writeFunction("changeBody('trans')", "Make me sexy!");
			writeText("Please keep in mind that none of these changes will result in a lower sexual potency. Even choosing a more 'cute' bodytype will not cause you to develop submissive tendencies.");
			writeText(`Feel free to enjoy your new form, further self-alteration is available to full users. Before finalization, care to change your name, <input type="text" id="nameSubmission" value="Jeffrey">?`);
			writeFunction("renameCharacter('player', 'lookInTheMirror')", "Look in the mirror");
			changeBody("male");
			break;
		}
		case "lookInTheMirror" : {
			writeText("A single button push on an app downloaded automatically from what looked like a spam email, and you are now standing in front of the mirror as a completely different person.");
			switch (data.player.body) {
				case "male":
				writeText("Whereas before, you would certainly describe yourself as average, now you look like a man straight out of Hollywood. You have the six pack and chest you could only dream of and your gaze could make a woman swoon from fifty paces.");
				writeText("Not to mention the app gave you some clothes too. It might look like a regular button-up shirt, the smooth fabric and name brand clearly show this shirt could go for a four-digit number on the market.");
				writeText("And to top it off, as you pull down your boxers a fat, manly, <b>dick</b> flops out of them.");
				break;
				case "sissy":
				writeText("Whereas before, you would certainly describe yourself as average, now you wouldn't look out of place as a pop star. Your hair now goes down to your shoulders, soft and blonde. A look at your own face has you blushing as the girl who looks back is way out of your league. Or at least she was.");
				writeText("The app changed your clothes too. You rub your hands along your body, actually jumping a little in place as your hands brush across your new breasts. You lift your pink skirt and pull aside a black thong, and are a little disappointed in what you see.");
				writeText("You were average in more ways than one before, but now you look downright pathetically small. Your penis is barely even three inches.");
				writeText("And yet you can't take your eyes off of it. It's <b>adorable</b>. You feel a tingling sensation building in your body, crawling up your spine as your hands go back up to your chest, massaging your tiny new funbags again as you turn around to check out the new junk in your trunk.");
				writeText("It's one hell of an ass. Your cheeks are plump, and they look like they're the sort a man could have a lot of fun playing with. You can feel your asshole winking as the tingling sensation continues to build, desperately wanting to be filled with a tongue or dick.");
				writeText("The tingling keeps building, mostly in your crotch. You focus on the sensation and relax yourself, only to fail to hold back a moan as you can see your cock growing erect before your eyes. It goes up and up, finally stopping at a full eight inches. It looks almost angry and pulses, completely unfitting on your new girly body.");
				break;
				case "trans":
				writeText("Whereas before, you would certainly describe yourself as average now you look like a walking wet dream. You have the face of a supermodel, the tits of a pornstar, and the massive <b>dick</b> of a male pornstar.");
				writeText("You pull off your new set of clothes to examine yourself. Your tits sway from side to side, your dick grows larger and more erect, and your egg-sized balls hand down several inches. You give your meaty ass a <b>SLAP!</b> And you barely hold back a powerful groan as your new dick pumps a what feels like a tablespoon of precum onto the floor. You have a body men would pay to abuse, and a masochistic streak large enough to want it.");
				break;
			}
			writeSpeech("player", "player", "Holy shit...");
			writeText("You stare into the mirror at the result of years of work and perfect genetics, and you got it all for free! As much as you want to keep fondling yourself, you hear a voice from downstairs calling you for breakfast. You slide your clothes back and head out the door.");
			writeText("If this is what the app can do to you, what can it do to everyone else?");
			writeTransition("goEatBreakfast", "Head downstairs");
			break;
		}
		case "goEatBreakfast" : {
			writeText("You stride down the stairs, an excited pep in your step you haven't felt in years. You're actually excited to start the day for once!");
			writeText("And with a grin on your face you walk into the kitchen. On the other side of the counter is your guardian, washing bits of food off of a cutting board.");
			if (data.player.flags.includes("noIncest") != false) {
			writeText("She adopted you and your 'sister' before you were old enough to remember. Despite the fact that none of you are actually related by blood, she still sees you two as her children.");
			}
			writeText("A ping from your phone calls your attention. On the screen is a prompt to change her name.");
			writeBig("images/real/lisa/oldfile1.jpg");
			writeText("Your mother's name is <input type='text' id='nameSubmission' value='Lisa'>");
			writeFunction("renameCharacter('mom', 'finishAndSitDown')", "Finish and sit down");
			break;
		}
		case "finishAndSitDown" : {
			writeSpeech("player", "", "Hey, momF? How are you feeling?");
			writeSpeech("mom", "", "Huh? I'm feeling fine, did something happen? You certainly look chipper today.");
			writeSpeech("player", "", "It's nothing, forget it.");
			writeText("She goes back to putting away dishes. She doesn't even seem to realize her own name has been changed, or that you look completely different. Your attention is quickly grabbed by a 'morning' you hear from the kitchen's entryway.");
			writeTransition("yourSisterArrives", "Your sister arrives");
			break;
		}
		case "yourSisterArrives" : {
			writeText("Your sister slumps sleepily onto her chair. Constant all-nighters have sapped her of her mortal coil.");
			writeText("She's more of a night owl because of her job as an IT consultant. She made a habit of snooping through your phone in the past to show you how lax your security was, so you should be careful not to leave your phone around her for now.");
			if (data.player.flags.includes("noIncest") != false) {
			writeText("She isn't actually related to you, but she's been in the 'big sister' role for your whole life.");
			}
			writeBig("images/real/jean/profile1.jpg");
			writeText("Your sister's name is <input type='text' id='nameSubmission' value='Jean'>");
			writeFunction("renameCharacter('sister', 'finishAndEatBreakfast')", "Try messing with them further");
			break;
		}
		case "finishAndEatBreakfast" : {
			writeText("You quickly try to start exploring the potential of this new app, only to stop when a message window appears on the screen.");
			writeText("<i>You cannot access all the features of this app until you complete the terms of service.</i>");
			writeText("And so you go through some menus and find the ToS, ready to scroll to the bottom. It takes a few solid seconds of scrolling, but you arrive and press the agree button, only to be met with a prompt asking you what the company policy is for dealing with terrorist negotiations.");
			writeText("This app makes it's message clear, and this explains why they let you change your body immediately. You'll need to work through pages and pages of legal text and be quizzed on it if you want to access the full potential of a reality re-writing app.");
			writeSpeech("sister", "", "You alright shithead? You look like you just had a foot run over.");
			writeText("Your sister snaps you out of it, and you put away your phone and start eating. Your mother chides sisterF for her language, but she mostly just ignores it. You follow suit, quickly eating breakfast. You mother wishes you both the best as the two of you get ready to leave.");
			writeTransition("headOutForSchool", "Head out for school");
			break;
		}
		case "headOutForSchool" : {
			writeText("You've been reviewing the ToS for the few minutes you have before the bus arrives to your college. This stuff is boring like nobody's business, but you're motivated like never before.");
			writeSpecial("You've finished 2% of the terms of service!");
			writeSpeech("sister", "", "What're you looking at? You're usually dead on your feet at this hour.");
			writeSpeech("player", "", "School stuff. Nothing. Why are you outside of the house anyways? I thought you worked from home.");
			writeText("Nailed it. She doesn't suspect a thing. She's always been a quick reader though. She could probably get through this thing in an hour.");
			writeSpeech("sister", "", "The dickweeds want me to add another router. Can't do that remotely, so now I've gotta bust my ass because they don't know how subnetting works.");
			writeText("The conversation ends shortly, and you go back to your studies until the bus arrives.");
			writeText("<i>Time passes...</i>");
			writeText("The bus ride was quiet and long, perfect for some more study.");
			writeSpecial("You've finished 10% of the terms of service!");
			writeText("You arrive at school and go through the motions towards class. You're caught off guard as random strangers attempt to introduce themselves and make small talk. None of these people had any interest in you before today, but their hungry stares quickly lead to the realization that some of these people, man and woman alike, want to get to know you.");
			writeTransition("letYourVisionWander", "Let your vision wander");
			break;
		}
		case "letYourVisionWander" : {
			writeText("A string of faces, familiar and unfamiliar pass you by. One of them, from across the hall, catches your eye. She gives you a smile and a wave this time instead of trying to avoid eye contact.");
			writeBig("images/real/riley/profile1.jpg");
			writeText("Her name is <input type='text' id='nameSubmission' value='Riley'>");
			writeFunction("renameCharacter('friend', 'theTeacherArrives')", "The teacher arrives");
			break;
		}
		case "theTeacherArrives" : {
			writeText("Your fantasies about marriage and the twelve children you'll have with her are interrupted as teacher moves through the crowd and opens the door to the class. The students file inside one by one, each taking their seat.");
			writeText("Her presence commands respect, and the classroom is quiet as the begins speaking.");
			writeBig("images/real/kendra/profile1.jpg");
			writeText("Your teacher's name is <input type='text' id='nameSubmission' value='Kendra'>");
			writeFunction("renameCharacter('teacher', 'classStarts')", "Class Starts");
			break;
		}
		case "classStarts" : {
			writeText("You have a renewed determination to succeed, not only because this app is the key to getting closer to the girl of your dreams, but also because...");
			writeSpeech("teacher", "", "playerF, would you care to grace us with an answer?");
			writeText("teacherF calls on you six different times to answer questions, taking every opportunity to embarrass you in front of the class. After every time your mind is flooded with the ways you'll get revenge on her.");
			writeSpecial("Studying harder than you ever have before, you finish 30% of the terms of service!");
			writeText("<i><br><br>Time passes...</i>");
			writeSpeech("teacher", "", "Alright everyone, make sure you finish assignment 21B and study for the upcoming test. Especially you, playerF.");
			writeText("Sooner than you'd like for once, class is over. Your eyes catch teacherF's as you leave, and she flashes you a cocky grin.");
			writeText("The bus ride is thankfully uneventful. You were even able to get some more reading in. If you're lucky the coffee shop on Main street is still open and you can get something to help you with this.");
			writeSpecial("You've finished 40% of the terms of service!");
			writeTransition("youLeave", "Arrive in town");
			break;
		}
		case "youLeave" : {
			if (data.player.flags.includes("exoticVisited") == false) {
				writeText("You walk onto the main street, and a small shop grabs your attention. You've never noticed it before, but something about it seems to be calling your name.");
				writeTransition("checkExoticShop", "Check out the strange shop");
			}
			if (data.player.flags.includes("restaurantVisited") == false) {
				writeText("Settled in a tiny space between two larger buildings is a worn, but warm-looking coffee shop. The perfect place to get some studying in.");
				writeTransition("checkRestaurant", "Enter the coffee shop");
			}
			if (data.player.flags.includes("restaurantVisited") == true && data.player.flags.includes("exoticVisited") == true) {
				writeText("It's starting to get dark, mom is always telling you that hoodlums start roaming the streets at this hour. While she's probably overreacting, risking getting mugged while on the verge of godhood is a bad idea.");
				writeTransition("headHome", "Head home");
			}
			break;
		}
		case "checkExoticShop" : {
			writeText("You push open the door and a cool breeze washes over you. The place almost seems bigger on the inside, and your vision is pulled between a number of objects contained in glass cases. A laptop, a virtual reality headset, a container of... coffee creamer?");
			writeBig("images/real/adriana/profile1.jpg");
			writeSpeech("exotic", "", "Hey kid, you must be playerF, yeah?");
			writeText("The shopkeep's name is <input type='text' id='nameSubmission' value='Adriana'>, according to your app.");
			writeSpeech("exotic", "", "This shop's for app users. You finished those terms yet?");
			writeText("You tell her you haven't.");
			writeSpeech("exotic", "", "Bummer dude. This place sells stuff people like you, whatever they need to get the most out of the app. I can't sell anything to you until you're done though.");
			data.player.flags += "exoticVisited";
			writeFunction("renameCharacter('exotic', 'youLeave')", "Nothing left to do here, you leave");
			break;
		}
		case "checkRestaurant" : {
			writeText("The cafe is warm and inviting, but almost completely empty. The owner has been a friend to you and your sister for the last few years, and confided in you once that since her husband passed away a year ago, she's been having a hard time paying rent.");
			writeText("You wouldn't go so far as to call her your second mother, but its nice to be welcomed to a cozy plaze to study with a smile. Speaking of which...");
			writeBig("images/real/ava/profile1.jpg");
			writeSpeech("chef", "", "Hey playerF. Your usual?");
			writeText("Aside from your mother, she's the only one you've seen today who hasn't treated you any differently now that you look a lot hotter. You feel like that's enough of a reason to use your new powers to help her and her business out.");
			writeText("She's also insanely hot, which helps. Her name is <input type='text' id='nameSubmission' value='Ava'>");
			data.player.flags += "restaurantVisited";
			writeFunction("renameCharacter('chef', 'grabABite')", "'Sure, the usual.'");
			break;
		}
		case "grabABite" : {
			writeText("A nice cup of coffee is exactly what you needed. You spend a few hours studying and drinking peacefully.");
			writeSpecial("You've finished 50% of the terms of service!");
			writeText("As you finish this latest quiz, a prompt pops up on your phone offering a quick reward in exchange for making it through the halfway point. You press accept, only for nothing to happen.");
			writeSpeech("chef", "", "Hey playerF. You need a refill?");
			writeSpeech("player", "", "No thanks chefF, I'm-");
			writeBig("images/real/ava/profile2.jpg");
			writeSpeech("chef", "", "Look at you, all grown up and calling me 'chefF'. I remember when you and your sister would call me Auntie. Let me know if you need anything then, okay sweetie?");
			writeText("She turns back around and walks away, having not noticed a thing. after a moment of stunned silence, you turn back to the phone in your hand.");
			writeText("...");
			writeSpecial("You've finished 60% of the terms of service!");
			writeTransition("youLeave", "Head back outside");
			break;
		}
		case "headHome" : {
			writeText("On your way home you take a quick shortcut, cutting through an alleyway between two buildings. Phone in hand, you don't notice as your shoulder collides with someone else's.");
			writeText("She quickly rights herself after stumbling, ready to call you out, but pauses as she gets a good look at your face.");
			writeSpeech("office", "", "What the hell, shithe- <br> I mean, watch where you're going.");
			writeText("She's back on her way in no time, having censored herself once she realized you weren't some gross hobo. You're used to getting called names, but the depth of how shallow she is stuns you for a second.");
			writeText("Walking home, checking your app, you can see her name, <input type='text' id='nameSubmission' value='Alexis'>, attached to a picture of her.");
			writeBig("images/real/alexis/profile1.jpg");
			writeText("With the power of this app, you could turn her into a human urinal if you wanted to.");
			writeFunction("renameCharacter('office', 'arriveAtHome')", "Arrive at home");
			break;
		}
		case "arriveAtHome" : {
			writeText("You finally arrive at home, the moment of truth is just ahead of you. Your mother's asleep, and your sister is lounging on the couch, but you don't have any more time for distractions.");
			writeText("You take a seat at your desk, door locked, and return to your studies. The questions get harder and reference more obscure details, so you've been keeping thorough notes.");
			writeText("After two hours of intense study, you lean back in your chair.");
			writeSpecial("You've finished 80% of the terms of service!");
			writeText("You plug in your phone as a low battery message pops up. You'd forgotten to charge it once you got home.");
			writeText("The caffeine isn't enough any more. You're four-fifths of the way through, but it feels like you're bashing your head against a brick wall. Your sister was always the better one at studying. Speaking of which, there's a knock at the door.");
			writeSpeech("sister", "", "The bathroom's open for your shower. You doing alright?");
			writeText("Maybe a bath would give you the energy you need to finish this. You'd need to leave your phone here to charge though. Of course, you could just keep going.");
			writeTransition("takeBreak", "Take a break to bathe");
			writeTransition("powerThrough", "Power through");
			break;
		}
		case "powerThrough" : {
			writeText("It's a struggle. Every moment that flies by leads you closer and closer to the sweet grasp of unconsciousness. Rationalizations fly through your head, telling you 'you can finish it in the morning' and 'you're too tired to keep going'. But you power through.");
			writeSpecial("You've finished 85% of the terms of service!");
			writeText("You continue to struggle and move forwards.");
			writeSpecial("You've finished 90% of the terms of service!");
			writeText("You pass through the exhaustion and feel new energy moving through you.");
			writeSpecial("You've finished 95% of the terms of service!");
			writeText("Until finally...");
			writeSpecial("You finish 100% of the terms of service.");
			writeText("And the complete functionality of the app opens itself to you. Hundreds of names appear sorted by their last interaction with you, from your own mother to the people you caught the eye of on the bus. A single tap leads to hundreds of menus of increasing complexity. A system this advanced could take years to master, with hundreds of different variables attached to each person, and hundreds more defining their relationships and defenitions of common sense.");
			writeText("You can't modify yourself too much, but you are at least able to remove the exhaustion creeping over you.");
			writeText("You'll need to start somewhere, so your time as the new god of this world starts with the first person you interacted with today. You raise factors like libido and perversion, and you spend the rest of the night transforming her mind and body.");
			writeSpecial("You've achieved a novice level of understanding of the Human Alteration App's use!");
			writeText("As an added bonus, you can crank that exhaustion value back up to fall back asleep.");
			writeTransition("mom1", "Drift off to sleep, and anticipate the morning");
			data.player.skill = 1;
			break;
		}
		case "takeBreak" : {
			var tempBody = data.player.body;
			changeOutfit('mom', 'Sub');
			changeOutfit('sister', 'Sub');
			changeOutfit('chef', 'Sub');
			changeOutfit('friend', 'Sub');
			changeOutfit('teacher', 'Sub');
			changeOutfit('office', 'Sub');
			changeOutfit('exotic', 'Sub');
			changeOutfit('candy', 'Sub');
			changeOutfit('bully', 'Sub');
			changeBody('sub');
			data.player.clothing = "dress";
			data.player.underwear = "panties";
			data.player.route = "sub";
			writeEvent("misc1S");
			writeTransition("firstCorruptionS", "Go to bed");
			break;
		}
		case "prologueSkip": {
			if (picturesDisabled != true) {
				document.getElementById('output').innerHTML += `
					<img id ="selfBig" class="bigPicture" src="images/none.png">
				`;
			}
			writeFunction("changeBody('male')", "Make me masculine!");
			writeFunction("changeBody('sissy')", "Make me cute!");
			writeFunction("changeBody('trans')", "Make me sexy!");
			writeText("Before reaching the branching point, please choose your character's bodytype and the cast's names.");
			writeText(`Your name is <input type="text" id="nameSubmission" value="Jeffery">`);
			writeText(`Your mother's name is <input type="text" id="nameSubmission0" value="Lisa">`);
			writeText(`Your sister's name is <input type="text" id="nameSubmission1" value="Jean">`);
			writeText(`Your classmate's name is <input type="text" id="nameSubmission2" value="Riley">`);
			writeText(`Your teacher's name is <input type="text" id="nameSubmission3" value="Kendra">`);
			writeText(`Your local coffee house owner's name is <input type="text" id="nameSubmission4" value="Ava">`);
			writeText(`Your officewoman you bumped into is named <input type="text" id="nameSubmission5" value="Alexis">`);
			writeText(`The saleswoman at the exotic shop is named <input type="text" id="nameSubmission6" value="Adriana">`);
			changeBody("male");
			writeFunction("renameCharacter('prologueSkip', 'arriveAtHome')", "Continue to route selection");
			break;
		}
		//System
		case "laptop": {
			break;
		}
		case "gallery": {
			break;
		}
		case "morning": {
			break;
		}
		case "sleep": {
			data.player.time = "Evening";
			if (data.player.route == "dom") {
				for (corruptionIndex = 0; corruptionIndex < data.story.length; corruptionIndex++) {
					if (data.story[corruptionIndex].name != "???") {
						writeSpeech(data.story[corruptionIndex].index, ``, `<p class="switch" onclick="sceneTransition('`+data.story[corruptionIndex].index+`CorruptionHub')">` + replaceCodenames(text) + `</p>`);
					}
				}
				writeTransition("morning", "Just go to sleep");
			}
			else {
				
			}
			break;
		}
		//Navigation
		case "homeFoyer": {
			break;
		}
		case "homePlayerRoom": {
			break;
		}
		case "homeGameRoom": {
			break;
		}
		case "homeSisterRoom": {
			break;
		}
		case "streets": {
			break;
		}
		case "alleyway": {
			break;
		}
		case "restaurant": {
			break;
		}
		case "school": {
			break;
		}
		case "classroom": {
			break;
		}
		//Dom route corruption scenes
		case "globalCorruption1": {
			setTrust('mom', 1);
			addFlag('mom', 'ready');
			setTrust('sister', 1);
			addFlag('sister', 'ready');
			setTrust('teacher', 1);
			addFlag('teacher', 'ready');
			writeText("You can't just crank up values as high as you can, as your mother has shown you today. Thus, you come up with a plan.");
			writeText("The first target is your mother. For her, you'll raise factors like loyalty and subservience to you. You increase sexual promiscuity and alter her common sense to make her less prudish. You'll instill a command to wake you herself, and make her think that sexual contact with you is completely natural. Other factors, like libido and sexual receptiveness, will need to wait for now.");
			writeText("Next up is your sister. You don't want her freaking out if she notices the changes to your mother's body, so you'll change her common sense as well. For a test, you'll set her obedience level to you to be 'worships'. Just in case this backfires, you'll make sure she isn't receptive to sex enough to do something you'll both regret in your sleep.");
			writeText("Finally, you'll need some more free time to study the app in the day, so you raise teacherF's trust in you to an absolute level. Now, whatever you say is what she believes with almost no exceptions. You can just tell her that she doesn't want to bother you while you're working on your phone, and she'll believe it.");
			writeSpecial("You can now trigger events with your sister or teacherF by interacting with them during the day. Just like working at the coffee shop however, this will take the entire day.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Mom corruption
		case "momCorruptionHub": {
			writeTransition("sleep", "Go back");
			break;
		}
		case "momCorruption1": {
			setTrust('mom', 2);
			addFlag('mom', 'ready');
			writeText("It was pretty clear just by the look in your mother's eyes that she was hungry for more, it's just that she was too reserved to go any further.");
			writeText("To fix that, you pump her initiative way up, and reduce her self control. You also increase the sensitivity of her mouth and change her perception of cock's taste. You'll take things one step at a time for now.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "momCorruption2": {
			setTrust('mom', 3);
			addFlag('mom', 'ready');
			writeText("She's progressing nicely, she'd probably be on your dick in a week at this point even if you left her unchanged. You don't want to wait any longer though. One thing is that you'll change how she refers to you. 'Master' has a nice ring to it.");
			writeText("You increase her sensitivity and libido, but not by too much. You'll also make it so that she can have an orgasm just from the feeling of someone cumming inside of her.");
			writeText("You put a little bit of that hesitancy back into her for now so that you can enjoy breaking through that flustered persona. The next time you and her are together, big things are going to happen.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "momCorruption3": {
			setTrust('mom', 4);
			addFlag('mom', 'ready');
			writeText("You start fiddling with statistics and percentages as usual, there isn't too much to change at this point. She already wants you to fuck a baby into her, what more can you do?");
			writeText("You notice she's got quite a bit of disgust built up at this point. Not from the sex, mind you, but from the deep cleaning she's been doing as your new personal maid. That gives you an idea...");
			writeText("You change her body to be super resistant to bacteria, and change her common sense to reduce that disgust factor. The candy ticket from the exotic store promises access to some seriously good stuff. With her new mindset, it seems like you could have a good time testing them out with her.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Sister corruption
		case "sisterCorruption1": {
			setTrust('sister', 2);
			addFlag('sister', 'ready');
			writeText("Alright so the last set of changes didn't exactly go according to plan. You'd intended to make her a lot more friendly to you without risking her trying to get sexy in your sleep, and that did work in a way. What you didn't plan for was her stealing your underwear and pleasuring herself anally while smelling them.");
			writeText("But you can work with this. Anal <b>is</b> pretty hot after all, having a dedicated buttslut around could be really interesting. You just need to turn up her sensitivity so that it's not an alternative to regular play, but so that it's her go-to form of sexual relief.");
			writeText("Obviously fingers aren't going to cut it, and making it so that she's open for you is another whole day's work. She also doesn't keep sex toys ever since mom found her stash last month. The exotic shop sells something that could help you out here.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "sisterCorruption2": {
			setTrust('sister', 3);
			addFlag('sister', 'ready');
			writeText("You lay in bed, phone in hand as you mentally replay the image of sisterF pleasuring herself with a dildo, and her screaming your name was pretty nice too.");
			writeText("She's pretty far along already, actually. It seemed like getting her to roll with letting you fuck her ass was a project that would take hours, but you should only need to implement a few changes. A few tweaks to sensitivity and a plan are all you really need. That, and a few alterations to yourself too.");
			writeText("Tomorrow should be fun.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "sisterCorruption3": {
			setTrust('sister', 4);
			addFlag('sister', 'ready');
			writeText("Anal sex is just as much fun as you imagined.");
			writeText("With that out of the way, it's time to think of a way to corrupt sisterF further. She's a buttslut at this point, no question, and she's hooked on your dick too.");
			writeText("At this point your next goal should be to open her, and your mother, up to the idea of a threesome. You can't just dive right in though, the first step should be making her desperate for release at any time. Obviously you can't be fucking her all day, and the dildo isn't tapered, so she can't use it as a buttplug. The candy advertised by the exotic shop's ticket might be just what you need.");
			writeText("After that, it's a matter of pushing her as far past her limits as she can go.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "sisterCorruption4": {
			setTrust('sister', 5);
			addFlag('sister', 'ready');
			writeText("You've pretty much got this in the bag at this point. sisterF is so hungry for anal at this point she'd ride mom wearing a strap-on.");
			writeText("That's not a bad idea, actually, but that's not the point right now. You stop patting yourself on the back and get to work.");
			writeText("Overwriting her common sense ought to do the trick. Family dinners should be a little more exciting now.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Friend corruption
		case "friendCorruption1": {
			setTrust('friend', 2);
			addFlag('friend', 'ready');
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption2": {
			setTrust('friend', 3);
			addFlag('friend', 'ready');
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption3": {
			setTrust('friend', 4);
			addFlag('friend', 'ready');
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption4": {
			setTrust('friend', 5);
			addFlag('friend', 'ready');
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Teacher corruption
		case "teacherCorruption1": {
			setTrust('teacher', 2);
			addFlag('teacher', 'ready');
			break;
		}
		case "teacherCorruption2": {
			setTrust('teacher', 3);
			addFlag('teacher', 'ready');
			break;
		}
		case "teacherCorruption3": {
			setTrust('teacher', 4);
			addFlag('teacher', 'ready');
			break;
		}
		case "teacherCorruption4": {
			setTrust('teacher', 5);
			addFlag('teacher', 'ready');
			break;
		}
		//Chef (Ava) corruption
		case "chefCorruption1": {
			setTrust('chef', 2);
			addFlag('chef', 'ready');
			break;
		}
		case "chefCorruption2": {
			setTrust('chef', 3);
			addFlag('chef', 'ready');
			break;
		}
		case "chefCorruption3": {
			setTrust('chef', 4);
			addFlag('chef', 'ready');
			break;
		}
		case "chefCorruption4": {
			setTrust('chef', 5);
			addFlag('chef', 'ready');
			break;
		}
		//Office corruption
		case "officeCorruption1": {
			setTrust('office', 2);
			addFlag('office', 'ready');
			break;
		}
		case "officeCorruption2": {
			setTrust('office', 3);
			addFlag('office', 'ready');
			break;
		}
		case "officeCorruption3": {
			setTrust('office', 4);
			addFlag('office', 'ready');
			break;
		}
		case "officeCorruption4": {
			setTrust('office', 5);
			addFlag('office', 'ready');
			break;
		}
		//Dom route encounters
		case "mom1": {
			writeEvent(scene);
			writeFunction("changeLocation('classroom')", "Finish up with school");
			break;
		}
		//Dom route nonerotic encounters
		//Sub route corruption
		//Mom corruption
		//Sister corruption
		//Friend corruption
		case "friendCorruption1S": {
			setTrust('friend', 2);
			addFlag('friend', 'ready');
			break;
		}
		case "friendCorruption2S": {
			setTrust('friend', 3);
			addFlag('friend', 'ready');
			break;
		}
		case "friendCorruption3S": {
			setTrust('friend', 4);
			addFlag('friend', 'ready');
			break;
		}
		case "friendCorruption4S": {
			setTrust('friend', 5);
			addFlag('friend', 'ready');
			break;
		}
		//Teacher corruption
		case "teacherCorruption1S": {
			setTrust('teacher', 2);
			addFlag('teacher', 'ready');
			break;
		}
		case "teacherCorruption2S": {
			setTrust('teacher', 3);
			addFlag('teacher', 'ready');
			break;
		}
		case "teacherCorruption3S": {
			setTrust('teacher', 4);
			addFlag('teacher', 'ready');
			break;
		}
		case "teacherCorruption4S": {
			setTrust('teacher', 5);
			addFlag('teacher', 'ready');
			break;
		}
		//Chef (Ava) corruption
		case "chefCorruption1S": {
			setTrust('chef', 2);
			addFlag('chef', 'ready');
			break;
		}
		case "chefCorruption2S": {
			setTrust('chef', 3);
			addFlag('chef', 'ready');
			break;
		}
		case "chefCorruption3S": {
			setTrust('chef', 4);
			addFlag('chef', 'ready');
			break;
		}
		case "chefCorruption4S": {
			setTrust('chef', 5);
			addFlag('chef', 'ready');
			break;
		}
		//Office corruption
		case "officeCorruption1S": {
			setTrust('office', 2);
			addFlag('office', 'ready');
			break;
		}
		case "officeCorruption2S": {
			setTrust('office', 3);
			addFlag('office', 'ready');
			break;
		}
		case "officeCorruption3S": {
			setTrust('office', 4);
			addFlag('office', 'ready');
			break;
		}
		case "officeCorruption4S": {
			setTrust('office', 5);
			addFlag('office', 'ready');
			break;
		}
		//Sub route encounters
		//Sub route nonerotic encounters
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Error code: writeSceneFailure "+scene);
			writeText("" + JSON.stringify(data) + "");
			writeFunction("changeLocation('homePlayerRoom')", "Return home");
		}
	}
	updateMenu();
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log("Now writing event "+scene);
	var addendum = false;
	switch (scene) {
		case "mom1": {
			writeText("You awaken in the morning, eager to appreciate the fruits of your labor. You walk out of your room, eager to see your mother transformed into the sex-fiend of your dreams, but you stop in your tracks as you walk past her room. Her door is cracked slightly open.");
			writeBig("images/real/general/solo2.gif");
			writeText("Still laying in bed well into the morning, your mother is rubbing at her pussy. The wet spot on her sheets leads you to believe she's been at it for quite a while now. Her moans have a tinge of panic to them as she rolls onto her side.");
			writeSpeech("mom", "", "God, oh god... What's happening to me? Got to get help... Got to...");
			writeText("Your mother slides out of bed, her hand still furiously jilling herself. She can't even make it halfway to the door before she leans back onto the wall.");
			writeBig("images/real/general/solo1.gif");
			writeText("Her rubbing reaches a crescendo and her body convulses, but even afther hand keeps rubbing. Her moans and whimpers are quick and panicked.");
			writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
			writeText("If you want to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
			writeText("...");
			writeText("You spend your free time studying the app and its nature.");
			writeSpecial("You've achieved a novice level of understanding of the Human Alteration App's use!");
			writeText("You have a plan now, and a few people you can use for guinea pigs. From now on you'll be able to corrupt individuals after going to bed, but for now you can explore the town freely. What you do from this point on is up to you, but it might be worth it to head to the coffee shop and help out for some pocket change.");
			break;
		}
		case "mom2": {
			writeText("You awaken a few moments before your alarm starts to ring. The app allows you to fall asleep immediately whenever you want, so you've been getting a lot more rest without the tossing and turning that normally entails.");
			writeText("You turn off your alarm and hear a soft, polite tapping on your door.");
			writeSpeech("player", "", "Yes?");
			writeText("The door opens, and your mother walks in wearing a completely new outfit.");
			writeBig("images/real/lisa/profile1.jpg");
			writeSpeech("mom", "", "Good morning sweetie! Breakfast is all ready downstairs.");
			writeText("Although you'd planned this, for it to go this well leaves you speechless for a moment. Meekly, your mother waits for you to sort your thoughts out.");
			writeSpeech("player", "", "Thanks mom, I'll be down in a second.");
			writeSpeech("mom", "", "Of course honey. Let me know if you need anything.");
			writeText("Your mother starts walking out of your room. Luckily your blankets hid your morning wood from view.");
			writeText("...But as you start to think about the situation, you realize this is your chance to live the life you could only dream of. Swallowing, you take the metaphorical dive and call your mother back in.");
			writeSpeech("mom", "", "Yes sweet- Oh!");
			writeText("You've pulled the covers off and have exposed yourself. Your mother stares for a moment, both hunger and shock visible in her eyes. She hesitates for a moment before she begins to walk over to you and gets down on her knees.");
			writeSpeech("player", "", "I can't go downstairs like this, obviously. Could you help me out?");
			writeText("There's a visible battle of wills in your mother's mind at this point. You can't turn her into an obedient slave in one night, but she clearly wants this just as much as you do.");
			writeSpeech("mom", "", "<i>Oh god, my son's... It's so big and hard... I shouldn't. I should storm out of this room. <br>But...</i>");
			writeBig("images/real/general/handjob1.gif");
			writeText("She takes your dick in hand and begins to stroke it. Your newly enhanced physiology means you start pumping out thick precum with each of the first strokes.");
			writeSpeech("mom", "", "<i>Jesus. This thing... I don't even know if I could take this...</i>");
			writeSpeech("mom", "", "<i>What am I thinking?! I should sto-... I should finish quickly.</i>");
			writeText("She's actually pretty skilled at this point, but you want more.");
			writeSpeech("player", "", "This isn't enough, mom. I'll take too long like this. <b>More</b>.");
			writeText("She looks frightened at this, almost enough to stop. You wonder where her mind went first.");
			writeSpeech("player", "", "Just showing off your tits should be enough right now.");
			writeBig("images/real/body/boobs8.gif");
			writeText("She looks relieved, but also a little disappointed at those words. Still, she quickly slides off her top and continues stroking..");
			writeText("With each stroke her breasts jiggle, and you feel yourself getting closer.");
			writeSpeech("mom", "", "<i>He's twitching. He's getting close. This massive dick is going to-!</i>");
			writeBig("images/real/general/handjob3.gif");
			writeText("A great deal of it gets onto her hand, but a lot of it lands on your chest as she reflexively points it away from herself. Room for improvement, you suppose. Even after you finish, she sits there holding your cock in a daze.");
			writeSpeech("player", "", "That should be enough for now, mom.");
			writeSpeech("mom", "", "Oh! Of course, sorry.");
			writeText("She straightens out her clothes, hesitating whenever her gaze falls over her cum-coated hand. After she's finished she leaves you to get dressed.");
			break;
		}
		case "mom3": {
			writeSpeech("player", "", "Hey mom, I'm gonna go catch a quick nap before dinner, okay?");
			writeSpeech("mom", "", "No problem honey. I'll wake you up once everything's ready. You get some rest.");
			writeText("That was the excuse you gave her for the sake of working on the app. Yet you actually ended up being more tired than you expected. After a few moments of app usage, you feel your eyelids growing heavier and heavier. Eventually you decide to go with the flow.");
			writeText("...");
			writeText("You awaken with a groan probably an hour or so later, sleep still on your eyes.");
			writeText("The first thing you notice is that your door is wide open.");
			writeText("The second thing you notice is the pleasant feeling coming from your lower half.");
			writeText("And the third thing you notice, as you lift up the covers is...");
			writeBig("images/real/general/deepthroatStart2.gif");
			writeText("Your mother is lovingly licking around the head of your shaft, savoring the taste. She looks up and her eyes meet yours for just a second.");
			writeBig("images/real/general/deepthroatStart3.gif");
			writeText("There'd been a mental battle from the moment she saw your erection raising your blanket. She'd had a million reasons to do anything except get under that blanket, but when her lips met your cock no words were needed.");
			writeText("She keeps bobbing her head up and down, one hand massaging your balls while the other is between her legs, all the while her eyes are on yours.");
			writeText("She's completely out of her head at the moment, every thought in her head revolving around cock. You roll over, dick still buried in her mouth and start <b>pounding</b>.");
			writeBig("images/real/general/deepthroatFinish2.gif");
			writeText("And before long you're finished. You can feel your balls tightening as you fire load after load of semen into your mother's mouth. She swallows every drop before you pull out.");
			writeSpeech("player", "", "Anything to say for yourself?");
			writeText("She responds first with a soft kiss on the head of your dick.");
			writeSpeech("mom", "", "Dinner's ready.");
			break;
		}
		case "mom4": { 
			writeText("You return home to a quiet house.");
			writeSpeech("player", "", "I'm hooome~");
			writeText("Nothing. Maybe mom and sisterF are out? You search around for a bit, and find the door to mom's room open.");
			writeText("She's asleep in her bed inside wearing close to nothing, a sign of how far her modesty has fallen.");
			writeText("You walk in, shutting the door behind you. This is just as good a situation as any to give her a taste of her own medicine.");
			writeText("Without hesitation, you grab onto her thong and start pulling it down her legs.");
			writeSpeech("mom", "", "...Hmm? Huh?<br>Master? What are you doing?");
			writeSpeech("player", "", "I'm getting even for the fun you had last time.");
			writeSpeech("mom", "", "What?<br>Hold on-");
			writeText("You press the head of your dick against her cuntlips. Despite her protests, she's starting to get pretty wet.");
			writeSpeech("mom", "", "Wait, please stop.");
			writeText("She places her hand on your cheek. You hesitate for a bit as she locks eyes with yours.");
			writeSpeech("mom", "", "playerF, listen. Things have been going crazy these last few days, and we've crossed more lines than we should have. But you don't really want this, do you? You don't want to fuck your own mother, right?");
			writeBig("images/real/general/mom4-1.gif");
			writeText("She's caught off guard as you thrust into her. She doesn't try to resist despite her spiel.");
			writeSpeech("mom", "", "Ooooh~<br><i>My... My own son...</i>");
			writeSpeech("player", "", "Oh? Done protesting? Are you sure you don't want me to stop?");
			writeSpeech("mom", "", "Ngh, no...");
			writeText("Her voice is hesitant, but she wraps her legs around to to keep you inside.");
			writeSpeech("player", "", "Hmm? Didn't catch that.");
			writeSpeech("mom", "", "Stay inside me! Treat me like your cocksock!");
			writeBig("images/real/general/mom4-2.gif");
			writeSpeech("mom", "", "Ouh god! Cumming! I'm cumming from my son's jizz!");
			writeText("You don't stop thrusting even as you cum, and you keep pumping into her.");
			writeSpeech("mom", "", "Ngh I'm gonna break! More!");
			writeText("You can feel a second orgasm coming on, you'll make sure to cum inside again just to make sure this sticks.");
			writeText("You start pumping jizz into her again, your refractory period much shorter thanks to the app.");
			writeText("You start to slow down as her arms, wrapped around you, go slack.");
			writeBig("images/real/general/mom4-3.gif");
			writeText("As you pull out, globs of cum start to leak out of her, but not even close to all of it is spilling out.");
			writeText("She's panting, but lowers a hand down to her snatch and starts fingering some of the spilt cum back inside her.");
			writeSpeech("player", "", "No need for that, there's plenty more where that came from.");
			break;
		}
		case "mom5": {
			writeText("You shoo her out for a moment and quickly use the bathroom. She's only just started anyways.");
			writeSpeech("player", "", "Hey, how long do you think you'll be at this?");
			writeSpeech("mom", "", "Awhile at least. I'll need to get the shower, the tiles underneath the sink, the-.");
			writeSpeech("player", "", "I'll let you get to that then. I'm feeling kind of out of it, so I'll be taking a nap.");
			writeSpeech("mom", "", "Alright, I hope you feel better master.");
			writeText("...");
			writeText("You unwrap the plug pop. For your fun, you'll need to have it inserted for about and hour.");
			if (data.story.bodytype == 1) {
				writeText("You do so, it leaves you feeling minty fresh on the inside, and you take a nap while it goes to work.");
				writeText("Once you wake up you remove the plug. Your asshole is clean, soft, and a lot puffier than before. ");
			}
			else {
				writeText("Taking a breath to steel yourself, you press the cool candy buttplug against your asshole.");
				writeText("You slowly push it in, it isn't painful at all. The candy's material is so smooth it glides in with hardly any friction.");
				writeText("There's a strange rush of feeling as the plug rests firmly in place. It feels like the cool sensation of a piece of mint gum, but in your rectum.");
				writeText("It's actually pretty relaxing. You prod at your flaccid dick and enjoy the sensation, but it distracts from the tingling inside of you.");
				writeText("You lay down on the bed, enjoying the friendly butterflies in your stomach.");
				writeText("...");
				writeText("You fell asleep, and by the time you wake up it's been well over an hour.");
				writeText("Groggily, you sit up. The plug is still inside you, but seems a lot smaller than before.");
				writeText("You turn over on the bed and go to pull it out, but just touching it sends a bolt of sensation along your spine.");
				writeText("Your dick is still completely soft, but a small bead of precum leaks out of the tip.");
				writeText("Going for broke, you grasp the handle and pull out the plug in a swift, but careful motion.");
				writeText("You need to grit your teeth as the plug pops out, and there's a strange, but not uncomfortable pressure at the base of your dick.");
				writeText("The plug is much smaller now, so you toss it over into the garbage can. The pressure in your groin is faded, and as you poke your dick it goes away completely. It's still the same as ever, the changes are localized elsewhere.");
				writeText("You position yourself near the mirror to get a good look at the change. Your asshole is now puffy and soft, and is completely clean.");
				writeText("You poke it, your finger barely depressing the soft donut-shaped hole. It feels incredible, like you could start rubbing it and cum harder than if you jerked off.");
				writeText("You start rubbing your finger around your butthole in circles, the pressure quickly building up.");
				writeText("You don't try to hold it back, and a very feminine moan comes out as you squirt a stream of clear precum out of your flaccid dick from rubbing your sensitive asshole.");
				writeText("It isn't even close to enough, you could do this all day, but you have something more fun in mind planned.");
			}
			writeText("...");
			writeText("You push open the door to the bathroom.");
			writeSpeech("mom", "", "Oh, good morning! I just finished actually, let me scoot out-");
			writeText("You place a hand on her shoulder to stop her.");
			writeSpeech("player", "", "No. I'm here for relief. On your knees, open your mouth.");
			writeText("She obeys without question. As you take of your clothes she gets down on her knees and opens her mouth, letting her tongue hang out as she closes her eyes.");
			writeSpeech("mom", "", "Aaaah-Aah!?");
			writeText("There's surprise in her voice as you press your asshole instead of your dick against her tongue.");
			writeSpeech("player", "", "Come on. You're here for my relief, right?");
			writeText("Once the surprise wears off, she gets with the program, slowly licking the puffy rim of your ass.");
			writeBig("images/real/general/mom5-1.gif");
			writeSpeech("mom", "", "<i>Oh god, I'm licking my own son's asshole, and it tastes good... I'm a fucking pervert!</i>");
			writeText("Her tongue feels incredible, she's hesitant at first but really starts getting enthusiastic as she realizes how much she loves this.");
			writeText("You let out a shuddering moan as your flaccid dick begins to start liberally leaking out clear precum onto the freshly-cleaned floor. You spread your legs to allow her better access to your asshole.");
			writeText("She pulls back from your ass for a second, sticking a hand into her soaked yoga pants.");
			writeSpeech("mom", "", "Fuck, master, you taste so good!");
			writeText("She takes a deep breath of your ass, and lets it out in a shuddering moan. Soon enough her tongue is back inside your ass, her free hand wrapping around your dick to start jerking you off.");
			writeText("The combined sensations cause your stream of precum to turn into spurts of actual cum.");
			writeSpeech("player", "", "F-fuuuck");
			writeText("Once she realizes your cum is leaking out, she stops fingering herself and starts letting the cum pool in her pussyjuice soaked hand, never missing a beat between tonging your asshole and stroking your dick.");
			writeText("Your cum just doesn't stop, your prostate working in overdrive as the cum overflows in her hand. She carefully lowers her cum-coated fingers back into her pants and starts fingering herself again, and it doesn't take to look before she's squirting herself silly in the middle of her rimjob.");
			writeSpeech("mom", "", "Fuck! I'm fingering my son's cum into my pussy while eating his ass! <br>Cumming~!");
			writeText("As you reach a full minute of nonstop cumming, you need to bend over onto the sink to support yourself.");
			writeText("Your vision is starting to blur, the pleasure is getting to be too much. You reach over and push her head away from your ass. She's panting like a bitch in heat, desperate to keep tasting your asshole.");
			writeText("You push her back and she starts coming to her senses, still audibly fingering your cum into her snatch.");
			writeText("You're more waddling than walking as you make your way back to your room. You need some rest as soon as possible.");
			break;
		}
		case "mom6": {
			writeText("You toss the fruit gushers into your mouth and chew. It tastes lemony.");
			writeSpeech("mom", "", "If you need to go, I can take a break.");
			writeSpeech("player", "", "Nah, it's fine. I'll just go right now, don't mind me.");
			writeSpeech("mom", "", "I... Of course sweetie. Go ahead.<br><i>Just make sure you save some for me.</i>");
			writeText("She shakes her head, having caught herself entertaining a strange thought. You ignore her, whip out your dick, and start pissing.");
			writeText("She watches intently, not even trying to hide it as one hand starts rubbing through her pants. The candy hasn't really kicked in yet, but your stream is powerful and messy. Little drops of piss hit the toilet's seat and bounce off, hitting the wall and at least some of them hitting her face, but her hypnotized face doesn't even flinch.");
			writeText("You finish much sooner than she'd like, and she's visibly disappointed until she snaps out of her daze.");
			writeSpeech("player", "", "Alright I'm out. I drank a lot though so I'll probably be back soon.");
			writeText("She doesn't know how to respond as you zip back up and flush.");
			writeText("As you walk out of the room, you can see her licking her lips out of the corner of your eye.");
			writeText("...");
			writeText("You open the bathroom door without bothering to knock, the candy's in full gear and its effects are starting to show.");
			writeText("Your mother is still here, on her knees in front of the toilet.");
			writeSpeech("mom", "", "Oh, does master need to pee? I'm not done yet, and we can't just let the toilet get all messy again...");
			writeText("She isn't even trying to hide it as she spreads her legs to show the dark wet spot, proof that she'd been jilling off waiting for you to come back.");
			writeSpeech("mom", "", "What ever will we do? I guess you'll just need to use a replacement for now~");
			writeText("You let out a chuckle as you unzip and walk forwards.");
			writeSpeech("player", "", "You are one hell of a filthy slut, aren't you? Well, you asked for it.");
			writeBig("images/real/general/mom6-1.gif");
			writeText("She lets out a half-moan half giggle as you start pissing on her face, soaking her top.");
			writeText("She's still got a hand in her pants even as you adjust your dick to start pissing into her hair.");
			writeSpeech("player", "", "Fuck. You like that?");
			writeText("She nods, eyes closed, before she opens her mouth to start trying to catch some of it on her tongue.");
			writeText("You pinch off the stream, you still have a lot more in the tank thanks to the candy, and walk forwards.");
			writeSpeech("mom", "", "Are you done? I can't se-");
			writeText("You press your dick against her lips, and she gets the message. Eyes still closed, face still soaked in piss, still fingering herself, she takes the head of your dick into her mouth.");
			writeText("You let out a groan as you start pissing again. She doesn't even gag, probably enjoying the taste of piss as she glugs it down.");
			writeText("By the time the stream starts weakening, she's already chugged probably a full pint of your piss.");
			writeSpeech("player", "", "I hope you're still thirsty, I still need to go.");
			writeText("She moans around your pissing dick, coughing as she breathes some in. Luckily for her, if she starts getting tired of drinking it there's another hole you can use. ");
			break;
		}
		case "mom7": {
			writeText("You give a few good thrusts to get your erection up. That myth about not being able to pee with a boner is bullshit.");
			writeSpeech("mom", "", "Mmm... Good morning.<br>Ah, why'd you stop?");
			writeSpeech("player", "", "Hold still.");
			writeSpeech("mom", "", "Of course, maste-Errrrr!");
			writeText("She does her best to hold back her squirming as you piss into her full force.");
			writeSpeech("mom", "", "Nnnngh!<br><i>Oh god, I can feel it in my <b>womb</b></i>!");
			writeText("Her eyes roll back as she starts cumming from you pissing inside of her.");
			writeText("Once you've finished, you start to pull out.");
			writeBig("images/real/general/mom7-1.gif");
			writeSpeech("player", "", "Make sure to clean this up. I need to get ready for school.");
			writeSpeech("mom", "", "Th... Thank you master...");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Your error code is writeEventFailure "+scene);
			writeFunction("changeLocation('homePlayerRoom')", "Return home");
		}
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
	if (data.player.currentScene == "gallery" && addendum == false) {
		writeFunction("sceneTransition('gallery')", "Finish");
	}
}