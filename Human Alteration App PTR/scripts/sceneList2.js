function writeScene(scene) {
	console.log("Now writing scene "+scene);
	switch(scene) {
		case "start" : {
			writeFunction("sceneTransition('alexisTest')", "Test Alexis's ownership");
			writeHTML(`
			im scripts/gamefiles/logo.png
			t Salutations friends! Human Alteration App is an adult game created by me, NoodleJacuuzi. You can find and keep up with all of my work at my <a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a>
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
			writeText("As of version 1.1 I've come back to polish the game's content, update the engine, and add content where I feel the earlier versions of the game could be improved. Please head on over to my patreon for more details on all that I ever intend to add to this game. Unlike my other works like Anomaly Vault and Hentai University, Human Alteration App is made to be finished. I hope you'll be impressed with the complete product!");
			break;
		}
		case "averyTest": {
			writeText("What will Avery's next episode be?");
			writeTransition("camboiTest1", "Have him film his now feminized body jerking off.");
			writeTransition("camboiTest2", "Have him film himself getting off in a chastity cage with a vibrator.");
			writeTransition("camboiTest3", "Have him film himself getting off with a buttplug and a fleshlight.");
			writeTransition("camboiTest3", "Have him do a reaction video to a BBC compilation.");
			writeText("...");
			writeText("What will Avery's next episode be?");
			writeTransition("camboiTest1", "Have her use a special camera dildo to show off her womb.");
			writeTransition("camboiTest1", "Have her get off in an anal-only special.");
			writeTransition("camboiTest1", "Have her do a public show and record it.");
			writeSpecial("The vegetarian cheat is now active! Many scenes in the dom route have been changed to replace content involving dicks, and certain characters such as Riley and clothesF have been dramatically altered!");
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
			writeSpeech("sister", "", "The bathroom's open for your shower. You doing alright *bro?");
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
			writeTransition("mom0", "Drift off to sleep, and anticipate the morning");
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
		
		//System encounters
		case "morning": {
			data.player.time = "Evening";
				if (data.player.route == "dom") {
					switch (checkTrust('mom')) {
						case 1: {
							writeText("You wake up to the scent of coffee, and see your mother patiently waiting beside your bed to wake you up.");
							writeSpeech("mom", "", "Good morning sweetie!");
							writeText("...");
							break;
						}
						case 2: {
							writeBig("images/real/general/handjob1.gif");
							writeText("You awaken to the lovely feeling of your mother gently coaxing the sperm from your balls.");
							writeSpeech("mom", "", "Good morning sweetie!");
							writeText("...");
							break;
						}
						case 3: {
							writeBig("images/real/general/deepthroat4.gif");
							writeText("You awaken to the lovely feeling of your mother's throat. She gives you an eager look once she realizes you're awaken and quickly brings you to orgasm so that she can greet you with a smile.");
							writeSpeech("mom", "", "Good morning master!");
							writeText("...");
							break;
						}
						case 4: {
							writeBig("images/real/general/vaginal6.gif");
							writeText("You awaken to the lovely feeling of your mother riding atop you, your dick deep inside her.");
							writeSpeech("mom", "", "Good mo... Good mooOOOOHH!");
							writeText("...");
							break;
						}
					}
					switch (checkTrust('teacher')) {
						case 1:
							writeText("School passes quickly, teacherF takes great care not to disturb you.");
						break;
						case 2:
							writeText("School passes quickly, teacherF takes great care not to disturb you. Her skin is looking quite nice today.");
						break;
						case 3:
							writeBig("images/real/general/titfuck3.gif");
							writeText("You arrive at school early, teacherF is waiting and ready to take care of you.");
						break;
						case 4:
							writeBig("images/real/general/deepthroat5.gif");
							writeText("You arrive at school early, teacherF is waiting and ready to take care of you.");
						break;
						case 5:
							writeBig("images/real/general/vaginal4.gif");
							writeText("School passes the time, as usual. After a short nap you walk up behind teacherF and slide into her to relieve yourself of some lingering tension.");
						break;
						case 6:
							writeBig("images/real/general/vaginal4.gif");
							writeText("School passes the time, as usual. After a short nap you walk up behind teacherF and slide into her to relieve yourself of some lingering tension.");
						break;
					}
					if (checkTrust('mom') == 1 && checkFlag('player', 'mom1') != true) {
						document.getElementById('output').innerHTML = '';
						writeEvent("mom1");
						writeText("...");
						writeText("You arrive at school as normal. Just before class starts you approach teacherF. You lean over to whisper to her, telling her that she didn't want to disturb you today, since you're a busy man.");
						writeSpeech("teacher", "", "Of course I remember that, obviously. Now take your seat.");
						writeText("And just like that, she ignores you even when you prop your feet onto the table.");
					}
					writeFunction("changeLocation('classroom')", "Finish classes for the day");
					if (checkTrust('mom') == 4 && checkFlag('player', 'mom4C') != true) {
						document.getElementById('output').innerHTML = '';
						writeText("You awaken laying on top of your sleeping mother, it seems you had more than just a wet dream last night. While her pussy is certainly inviting, you do need to use the bathroom.");
						writeTransition("mom4C", "You could always just stay inside.");
						writeTransition("4CSkip", "Or pull out and go about your day");
					}
				}
			break;
		}
		case "sleep": {
			if (data.player.route == "dom") {
				if (checkTrust('mom') == 0) {
					writeTransition("momCorruption0", "Start implementing your plant with the app");
				}
				else {
					writeCenteredText("Who will you alter tonight?");
					buttonGrid();
					for (corruptionIndex = 0; corruptionIndex < data.story.length; corruptionIndex++) {
						if (data.story[corruptionIndex].name != "???") {
							addButtonToGrid(data.story[corruptionIndex].index, data.story[corruptionIndex].index+"CorruptionHub");
						}
					}
					if (checkTrust('mom') > 1 && checkTrust('sister') > 1 && checkTrust('friend') > 1 && checkTrust('teacher') > 1 && checkTrust('chef') > 1 && checkTrust('office') > 0) {
						writeTransition("ending", "It's time to end this");
					}
					writeTransition("morning", "Just go to sleep");
				}
			}
			break;
		}
		case "laptop": {
			break;
		}
		case "gallery": {
			break;
		}
		case "credits": {
			writeText("This has been a game by Noodle Jacuzzi, congratulations on reaching one of the endings!");
			writeText("Hopefully, you had a good time. Feel free to drop by my Master Index to see my other work, or check out my Patreon if you'd like to support future content and keep totally up to date.");
			writeText("As I said in the intro, I appreciate comments and criticisms. If you have any, or have some suggestions for HAA or future titles, please let me know by messaging me on Patreon, Discord, TFgames, or on F95Zone.");
			writeText("Thank you to Brandon, Chronos Edge, and Lasse Bannow who've supported me on Patreon up to the release of version 1.0");
			writeSpecial("And thank you for playing!");
			writeTransition("morning", "Awaken, and pursue a different outcome");
			break;
		}
		////----****DOM ROUTE****----\\\\
		//Lisa Corruption
		case "momCorruptionHub": {
			checkForCorruptions("mom");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "momCorruption0": {
			changeOutfit('mom', '');
			raiseTrust("mom", 1);
			raiseTrust('sister', 1);
			raiseTrust('teacher', 1);
			writeText("You can't just crank up values as high as you can, as your mother has shown you today. Thus, you come up with a plan.");
			writeText("The first target is your mother. For her, you'll raise factors like loyalty and subservience to you. You increase sexual promiscuity and alter her common sense to make her less prudish. You'll instill a command to wake you herself, and make her think that sexual contact with you is completely natural. Other factors, like libido and sexual receptiveness, will need to wait for now.");
			writeText("Next up is your sister. You don't want her freaking out if she notices the changes to your mother's body, so you'll change her common sense as well. For a test, you'll set her obedience level to you to be 'worships'. Just in case this backfires, you'll make sure she isn't receptive to sex enough to do something you'll both regret in your sleep.");
			writeText("Finally, you'll need some more free time to study the app in the day, so you raise teacherF's trust in you to an absolute level. Now, whatever you say is what she believes with almost no exceptions. You can just tell her that she doesn't want to bother you while you're working on your phone, and she'll believe it.");
			writeSpecial("You can now trigger events with your sister or teacherF by interacting with them during the day. Just like working at the coffee shop however, this will take the entire day.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "momCorruption1": {
			raiseTrust("mom", 1);
			writeText("It was pretty clear just by the look in your mother's eyes that she was hungry for more, it's just that she was too reserved to go any further.");
			writeText("To fix that, you pump her initiative way up, and reduce her self control. You also increase the sensitivity of her mouth and change her perception of cock's taste. You'll take things one step at a time for now.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "momCorruption2": {
			writeText("She's progressing nicely, she'd probably be on your dick in a week at this point even if you left her unchanged. You don't want to wait any longer though. One thing is that you'll change how she refers to you. 'Master' has a nice ring to it.");
			writeText("You increase her sensitivity and libido, but not by too much. You'll also make it so that she can have an orgasm just from the feeling of someone cumming inside of her.");
			writeText("You put a little bit of that hesitancy back into her for now so that you can enjoy breaking through that flustered persona. The next time you and her are together, big things are going to happen.");
			raiseTrust("mom", 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "momCorruption3": {
			raiseTrust("mom", 1);
			writeText("You start fiddling with statistics and percentages as usual, there isn't too much to change at this point. She already wants you to fuck a baby into her, what more can you do?");
			writeText("You notice she's got quite a bit of disgust built up at this point. Not from the sex, mind you, but from the deep cleaning she's been doing as your new personal maid. That gives you an idea...");
			writeText("You change her body to be super resistant to bacteria, and change her common sense to reduce that disgust factor. The candy ticket from the exotic store promises access to some seriously good stuff. With her new mindset, it seems like you could have a good time testing them out with her.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Lisa Encounters
		case "mom0": {
			writeEvent(scene);
			writeFunction("changeLocation('classroom')", "Finish up with school");
			break;
		}
		case "mom0Fail": {
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom1": {
			writeEvent(scene);
			writeFunction("changeLocation('classroom')", "Finish up with school");
			break;
		}
		case "mom1Fail": {
			writeSpeech("player", "", "Hey mom!");
			writeText("She jumps in surprise at your greeting, it's clear she was deep in thought about something.");
			writeSpeech("mom", "", "Hello dear. Dinner is... Dinner will be ready soon.");
			writeText("There's a lot of hesitation and confliction in her voice. If you want this to progress further, you'll need to use the app tonight to make it happen.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "mom2Fail": {
			writeText("You walk in through the door, tossing your bag onto the couch and taking a moment to relax.");
			writeSpeech("mom", "", "Welcome back, master.");
			writeText("Her voice drops in volume at that last word, careful not to be heard by your sister. She places a small plate of food on the coffee table for you.");
			writeSpeech("mom", "", "This should give you some energy to make it to dinner.");
			writeText("She's serving you much more faithfully lately, but you can tell she's still a little confused as to exactly why. If you want to push this further, you'll need to use the app on her tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom3": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "mom3Fail": {
			writeText("You walk in through the front door, and in moments your mother has rushed into the living room to greet you.");
			writeText("She sets down a bucket full of cleaning supplies and gives you a little curtsy in her sterile-looking cleaning uniform.");
			writeSpeech("mom", "", "Master! Welcome home. I was just about to clean up before dinner. Are you feeling... pent up?");
			writeText("There's a sly hunger in her eyes as she licks her lips.");
			writeText("It seems like this is how life will be from now on, unless you decide you want to push her a bit further tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom4": {//Quo
			writeText("You relax onto the living room couch. Simply calling 'Mom' is enough to have her quickly running to respond to you.");
			writeSpeech("mom", "", "Master! You called?");
			writeText("It's clear that she was just in the middle of deep-cleaning the bathroom. It's probably spotless by now, but she's nothing if not thorough these days.");
			if (checkFlag("player", "mom4A") == true && checkFlag("player", "mom4B") == true) {
				writeText("With how much your relationship has changed over these last few days, it seems like she's a totally different person. Thanks to the app, it seems like this is how daily life is going to be from now on.");
				writeText("She's swallowing dryly as she eyes your crotch. At this point, you can't think of any way you could corrupt her farther.");
			}
			if (checkItem("plugPop") == true) {
				if (checkFlag("player", "mom4A") != true) {
					writeText("A plug pop is sitting in your pocket, but there's no real reason to use it on mom. You can get anal elsewhere.");
					writeText("The idea of keeping yourself clean at all times is an appealing one though. And with her latest changes, you can imaging mom would get a kick out of pleasing you in a new way.");
					writeTransition("mom4A", "Use a Plug Pop");
				}							
			}
			if (checkItem("fruitGushers") == true) {
				if (checkFlag("player", "mom4B") != true) {
					writeText("But you kinda do need to take a piss. You're about to tell her to wait outside, before an idea strikes you.");
					writeTransition("mom4B", "Eat your Fruit Gushers");
				}
			}
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom4A": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "mom4B": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "mom4C": {
			writeEvent(scene);
			switch (checkTrust('teacher')) {
				case 1:
					writeText("School passes quickly, teacherF takes great care not to disturb you.");
				break;
				case 2:
					writeText("School passes quickly, teacherF takes great care not to disturb you. Her skin is looking quite nice today.");
				break;
				case 3:
					writeBig("images/real/general/titfuck3.gif");
					writeText("You arrive at school early, teacherF is waiting and ready to take care of you.");
				break;
				case 4:
					writeBig("images/real/general/deepthroat5.gif");
					writeText("You arrive at school early, teacherF is waiting and ready to take care of you.");
				break;
				case 5:
					writeBig("images/real/general/vaginal4.gif");
					writeText("School passes the time, as usual. After a short nap you walk up behind teacherF and slide into her to relieve yourself of some lingering tension.");
				break;
				case 6:
					writeBig("images/real/general/vaginal4.gif");
					writeText("School passes the time, as usual. After a short nap you walk up behind teacherF and slide into her to relieve yourself of some lingering tension.");
				break;
			}
			writeFunction("changeLocation('classroom')", "Finish classes for the day");
			break;
		}
		case "4CSkip": {
			addFlag("player", "mom4c");
			switch (checkTrust('teacher')) {
				case 1:
					writeText("School passes quickly, teacherF takes great care not to disturb you.");
				break;
				case 2:
					writeText("School passes quickly, teacherF takes great care not to disturb you. Her skin is looking quite nice today.");
				break;
				case 3:
					writeBig("images/real/general/titfuck3.gif");
					writeText("You arrive at school early, teacherF is waiting and ready to take care of you.");
				break;
				case 4:
					writeBig("images/real/general/deepthroat5.gif");
					writeText("You arrive at school early, teacherF is waiting and ready to take care of you.");
				break;
				case 5:
					writeBig("images/real/general/vaginal4.gif");
					writeText("School passes the time, as usual. After a short nap you walk up behind teacherF and slide into her to relieve yourself of some lingering tension.");
				break;
				case 6:
					writeBig("images/real/general/vaginal4.gif");
					writeText("School passes the time, as usual. After a short nap you walk up behind teacherF and slide into her to relieve yourself of some lingering tension.");
				break;
			}
			writeFunction("changeLocation('classroom')", "Finish classes for the day");
		}

		//Jean Corruption
		case "sisterCorruptionHub": {
			checkForCorruptions("sister");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "sisterCorruption1": {
			writeText("Alright so the last set of changes didn't exactly go according to plan. You'd intended to make her a lot more friendly to you without risking her trying to get sexy in your sleep, and that did work in a way. What you didn't plan for was her stealing your underwear and pleasuring herself anally while smelling them.");
			writeText("But you can work with this. Anal <b>is</b> pretty hot after all, having a dedicated buttslut around could be really interesting. You just need to turn up her sensitivity so that it's not an alternative to regular play, but so that it's her go-to form of sexual relief.");
			writeText("Obviously fingers aren't going to cut it, and making it so that she's open for you is another whole day's work. She also doesn't keep sex toys ever since mom found her stash last month. The exotic shop sells something that could help you out here.");
			raiseTrust('sister', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "sisterCorruption2": {
			writeText("You lay in bed, phone in hand as you mentally replay the image of sisterF pleasuring herself with a dildo, and her screaming your name was pretty nice too.");
			writeText("She's pretty far along already, actually. It seemed like getting her to roll with letting you fuck her ass was a project that would take hours, but you should only need to implement a few changes. A few tweaks to sensitivity and a plan are all you really need. That, and a few alterations to yourself too.");
			writeText("Tomorrow should be fun.");
			raiseTrust('sister', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "sisterCorruption3": {
			writeText("Anal sex is just as much fun as you imagined.");
			writeText("With that out of the way, it's time to think of a way to corrupt sisterF further. She's a buttslut at this point, no question, and she's hooked on your dick too.");
			writeText("At this point your next goal should be to open her, and your mother, up to the idea of a threesome. You can't just dive right in though, the first step should be making her desperate for release at any time. Obviously you can't be fucking her all day, and the dildo isn't tapered, so she can't use it as a buttplug. The candy advertised by the exotic shop's ticket might be just what you need.");
			writeText("After that, it's a matter of pushing her as far past her limits as she can go.");
			raiseTrust('sister', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "sisterCorruption4": {
			writeText("You've pretty much got this in the bag at this point. sisterF is so hungry for anal at this point she'd ride mom wearing a strap-on.");
			writeText("That's not a bad idea, actually, but that's not the point right now. You stop patting yourself on the back and get to work.");
			writeText("Overwriting her common sense ought to do the trick. Family dinners should be a little more exciting now.");
			raiseTrust('sister', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Jean Encounters
		case "sister0Fail": {
			writeSpeech("sister", "", "Fuck off  dweeb, I'm working. <br>... Nah, just messing with you bro. Hey, have you noticed what's up with mom?");
			writeText("You can't trigger an event right now. You'll need to put your plan into action by going to sleep if you want to do anything with sisterF.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "sister1": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "sister1Fail": {
			writeSpeech("sister", "", "Fuck off. Working.");
			writeText("She's obviously still sexually frustrated. You'll need to fine-tune her with the app to fix that. A purchase from the exotic shop should also help.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "sister2": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "sister2Fail": {
			writeSpeech("sister", "", "Oh, hey bro. Listen, you haven't been hearing anything weird, have you?");
			writeSpeech("player", "", "Nope. Why, you looking at weird anime porn?");
			writeText("She's still way too reserved for you to pull anything directly. You'll need to fix that the with the app tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "sister3": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "sister3Fail": {
			writeText("Once your sister notices you, she closes her eyes and opens her mouth invitingly.");
			writeSpeech("player", "", "Good girl.");
			writeText("You have some fun with her, but if you want to trigger another event you'll need to use the app.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "sister4A": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "sister4B": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "sister4Fail": {
			writeSpeech("player", "", "Hey, I was thinking-");
			writeText("You walk into her room expecting to find her playing with herself, maybe while also getting some work done, but instead you find herself laying face-down in her bed. Not even in a hot way, but in a 'I messed up' kind of way.");
			writeSpeech("player", "", "Bad day?");
			writeText("She goans something at you, muffled by her pillows.");
			writeSpeech("player", "", "I see, your favorite anime character died. Well, sometimes-");
			writeSpeech("sister", "", "Nooo! And he's already dead. I bent over to pick something up, and mom got a clear look at my asshole!");
			writeSpeech("player", "", "Ah. Well, that's the cost of foregoing underwear.");
			writeSpeech("sister", "", "I thought it would be hot. I didn't think of what would happen if my own mother saw me!");
			writeSpeech("player", "", "Did she say anything?");
			switch (checkTrust('mom')) {
				case 1:
					writeSpeech("sister", "", "Yeah. She tried to act like she couldn't see it, but she was blushing like a nun.");
				break;
				case 2:
					writeSpeech("sister", "", "Yeah, and she slapped my ass right in the living room! She said that I shouldn't embarrass myself like that, even in the house.");
				break;
				case 3:
					writeSpeech("sister", "", "Yeah, and she started groping me right in the living room! She said that she 'liked my new look'.");
				break;
				case 4:
					writeSpeech("sister", "", "No, she just got on her knees right behind me. It looked like she was about to start rimming me right in the living room!");
				break;
			}
			writeSpeech("player", "", "That doesn't sound all that bad.");
			writeSpeech("sister", "", "It was embarrassing! She's my mother!");
			writeText("It seems like sisterF is too embarrassed to enjoy the new family dynamic. You should solve this problem tonight with the app.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "sister5": {//Quo
			writeText("After a single knock you push open the door to your sister's room.");
			writeSpeech("player", "", "Hey, you got a second?");
			writeSpeech("sister", "", "Heeey bro~");
			writeText("As she responds, she rubs a small bulge in her abdomen.");
			writeSpeech("sister", "", "Just testin' out one of mom's new toys~<br>What's up?");
			if (checkTrust('mom') > 3) {
				if (checkItem("popRocks") == true) {
					if (checkFlag("player", "sister5A") == false) {
						writeText("She and mom have both been reveling in being your fuckpuppets, but the pop rocks in your pocket are giving you an idea for a new kind of playtime.");
						writeTransition("sister5A", "I got some neat candy~");
					}
				}
				if (checkFlag("player", "sister5B") == false) {
					writeTransition("familyDinner", "It's dinner time~");
				}
				if (checkFlag("player", "sister5A") == true && checkFlag("player", "sister5B") == true) {
					writeSpeech("player", "", "Nothing, just enjoying the view.");
					writeSpeech("sister", "", "Hehe. Well, let me give you a better one.");
					writeText("She pulls her legs into a squatting position, and starts to slowly stand off the foot-long horsecock dildo buried deep inside her ass.");
					writeSpeech("sister", "", "Nggh~!");
					writeText("And just as she reaches the top, with just the flared tip inside of her, she sits back down to let the toy stretch her back out.");
				}
			}
			else {
				writeText("You have some fun ideas, but you'll need your mother to be on the same page as sisterF for them to work.");
			}
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}

		//Riley Corruption
		case "friendCorruptionHub": {
			checkForCorruptions("friend");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "friendCorruption0": {
			writeText("Here's your opportunity. The girl you've crushed on for years is finally in your grasp. Meddling with some statistics is all it should...");
			writeText("Wait, this can't be right. 'Affection 40 / 51'? 'Impression: Good'? These are some really high numbers. Higher than you own mother's even.");
			writeText("She already likes you.");
			writeText("You lay the phone down at your side, letting the good feelings roll up your spine.");
			writeText("The next chance you get you'll talk to her, but for now you should...");
			raiseTrust('friend', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption1": {
			writeText("There's a smile on your face as you hit the pillow, this is the good life.");
			writeText("But the thought of using the app on friendF floats through your mind. She'd still be with you without the app, is it right to mess with her? Isn't that an invasion of privacy, or even worse an act of overwriting her very identity? Have you become a monster, using the app for your own gain and hurting everyone around you?");
			writeText("Nah. Life's been better for everyone, but the thought of using it on friendF still leaves you with doubts.");
			writeText("You resolve to tell her about it the next chance you get, but first you'll need to engineer some proof to show her.");
			writeText("You work well into the night, but at some point you will need to...");
			raiseTrust('friend', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption2": {
			writeText("The knowledge of friendF's secret is still on your mind. If she wanted you to, she could ask you to change her in any way she wanted. But she didn't. Maybe you should accept her for who she really is.");
			writeText("You decide to shoot her a text, asking her about what she'd change about herself.");
			writeSpeech("friend", "", "Oh boy do I have some ideas. 1st we could...");
			writeText("A lot of them are impossible to do with your skillset, unfortunately. You change what you can, but it seems like you'll need something extra to really have a fun weekend with her. Maybe some exotic candy could do the trick?");
			raiseTrust('friend', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption3": {
			writeText("At some point you closed the app and have been started texting friendF. Dozens of subjects have flown by, but one in particular is sticking around.");
			writeSpeech("friend", "", "IDK. Tryed anal b4, but just hurts mst of the time. Lots of guides on the internet take a rly long time to follow. Candy from lst time was fun tho.");
			writeSpeech("player", "", "You know I could change that with the app right? I've been getting way better at using it.");
			writeSpeech("friend", "", "o shit. Good point. I have some ideas thn.");
			writeText("And she certainly does. You work for almost an hour while she brainstorms over the phone, but eventually you wish her a good night and...");
			raiseTrust('friend', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "friendCorruption4": {
			writeSpeech("player", "", "You seem quiet tonight. You ok?.");
			writeSpeech("friend", "", "Yea just frustrated. I had a good time w/ you, but this btch brittny was messing w/ me all day.");
			writeSpeech("player", "", "That sucks. What's her name? I can give her A-cups and a flat butt if it'll make you feel better.");
			writeSpeech("friend", "", "Lol ty but no. Waking up as a wshboard would suck, but it wouldnt really help me out.");
			writeSpeech("friend", "", "Actually. U have any more of those wierd candys?");
			writeSpeech("player", "", "I can get more. Why?");
			writeSpeech("friend", "", "I have a pln. It gets me revenge and you get a hot show. Heres what we do.");
			writeText("You work to implement her plan, but soon you are getting ready to...");
			raiseTrust('friend', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Riley Encounters
		case "friend0Fail": {
			writeSpeech("friend", "", "And so then he said that he'd rather eat the pit of a plum. I don't really...");
			writeText("She doesn't seem to notice you right now.");
			writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with friendF.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "friend1": {
			writeText("Here you are, it's the moment of truth. If what you read on the app is true, then you just need to be confident enough to go through with this and it'll work. friendF is standing alone next against the wall. Humans worse off than you have had relationships even without an all-powerful app to guide them, so you should be fine. Right?");
			writeText("The fact that you look really good also helps your confidence as you walk up to her and catch her attention with a quick 'hey.'");
			writeSpeech("friend", "", "Hey. playerF, right? We did that group project thing together.");
			writeSpeech("player", "", "Yeah! Since class was over I was wondering if we could grab a coffee or something. I know this place in town.");
			writeSpeech("friend", "", "Sure, that sounds great! What's it called?");
			writeText("And with that the two of you are hitting it off. That was easy! It looks like confidence, a friendly attitude, and a positive self image were all it took.");
			writeText("...");
			writeText("The two of you arrived and have had a lovely chat over coffee. chefF flashed a big smile at you once she saw you were here with a girl, but she hasn't embarassed you about it.");
			writeSpeech("friend", "", "And so then he says 'That was a great story! I loved the character development, and the twist at the end was totes insane!'");
			writeText("She's been the one doing most of the talking, although you can't help but feel like she's hiding something. To be fair, you're hiding something as well. The hours go by quickly, after drinking the two of you took a walk around town.");
			writeSpeech("friend", "", "This has been great! Let's do this again sometime?");
			writeSpeech("player", "", "Absolutely. I'll see you at school again tomorrow?");
			writeSpeech("friend", "", "See you then!");
			writeSpecial("You've become much closer with friendF!");
			writeText("You really feel like you have a shot with her, but if you want to seriously get any closer and form a real relationship you'll need to introduce her to the app. You'll need to be skilled enough to stop her from being physically able to take it from you, but otherwise you want to leave her unaltered.");
			addFlag("player", "friend1");
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend1Fail": {
			writeSpeech("friend", "", "Hey playerF! Wanna go grab something?");
			writeSpeech("player", "", "Not today, sorry. I've actually got something cool to show you for next time though.");
			writeSpeech("friend", "", "Ooh, now I'm hyped. You'd better deliver.");
			writeText("You'll need better control of the app and to go to sleep to put your plan into action.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "friend2A": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend2B": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend2Fail": {
			writeSpeech("friend", "", "Hey playerF, How's it going?");
			writeSpeech("player", "", "Pretty good, you?");
			writeSpeech("friend", "", "Fine, fuckin' Chadsworth was talking about me behind my back though. He told...");
			writeText("You have a short conversation in the hall. If you want to trigger another event, you'll need to use the app tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "friend3": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend3Fail": {
			writeSpeech("friend", "", "Heeey! The other night was really fun, I'd love to do that again sometimes.");
			writeSpeech("player", "", "Actually, I've been working on using the app, and I have something neat planned for later.");
			writeSpeech("friend", "", "Ooh, building the anticipation. I was shaking just eating my breakfast after we finished last time, I hope this one will be fun too.");
			writeSpeech("player", "", "Yeah, you'll know it when it happens.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "friend4": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend4Fail": {
			writeSpeech("friend", "", "Morning.");
			writeSpeech("player", "", "Hey, good morning. How's it going?");
			writeSpeech("friend", "", "Eeh. Not enough sleep. Could you turn down the sensitivity? I couldn't get off my dildo last night.");
			writeSpeech("player", "", "Oh, sorry. The numbers for having a really good time aren't the same as the ones good for regular life.");
			writeSpeech("friend", "", "Hey. 'You make me cum too much' is not a deal breaker for me.");
			writeText("You both have a laugh and talk for awhile. Some guy has been bugging her lately, but she says it's no big deal. You should talk to her tonight about some more uses of the app, if you have an idea that could help her out.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "friend5": {
			writeEvent(scene);
			break;
		}
		case "friend5A": {
			writeSpeech("player", "", "You go ahead and enjoy yourself.");
			writeText("friendF smiles and licks her lips as she starts disrobing. Sean wants to start shouting questions, but stops mid-word as he sees friendF's dick.");
			writeSpeech("Sean", "none", "<i>W-what the hell? Why does she have a dick? And why it so... Whoa, back up. I'm not gay or any shit like that...</i>");
			writeSpeech("friend", "", "Turn around, lemme see the goods.");
			writeText("He wants to argue, to storm out, or even to start throwing punches to try and salvage some pride. But he can't bring himself to disobey for some reason, and the thought of breaking one of his nails punching somebody just sounds awful.");
			writeText("He turns around, showing off his huge new bubble butt, a result of the app in the hands of a master.");
			writeSpeech("Sean", "none", "<i>Fucking...why the fuck am I showing them my asshole? Why do I want them to see it? Am I getting off on this?</i>");
			writeText("His conflicted thoughts are sent flying as friendF slaps his ass, causing his booty to jiggle and leaving a bright red handprint.");
			writeSpeech("Sean", "none", "Ngh...");
			writeText("friendF was close to all the cheerleaders at school, there's no way she wouldn't blab about this. The rumor would spread like wildfire about his now puny dick, how he bent over and lost his anal virginity without any resistance.");
			writeText("He can feel a bead of precum form at the tip of his clitty as he imagines being known as the school's new buttslut.");
			writeText("...");
			writeBig("images/real/general/friend5-1.gif");
			writeSpeech("Shannon", "none", "More! Fuck me harder! God, being a girl is so much better!");
			writeText("There's no resistance, no crying out in pain. Sean, now Shannon, took to the first minutes of the rest of her life with glee.");
			writeText("A hyper sensitive prostate probably helped smooth things along, especially since she started spurting like a bitch from the very first moment she had friendF's cock inside her.");
			writeText("You grunt as you fire off rope of semen onto Shanon's face. Shanon worshipfully takes it, trying to catch whatever she can on her tongue.");
			writeText("Grabbing onto Shanon's hips, friendF pulls them back and slams herself into Shannon as they both start moaning. ");
			writeText("With every clench of friendF's balls, Shannon is following suit with a much smaller, more pathetic spurt of her own onto the bedsheets.");
			writeText("...");
			writeText("Shannon is unconscious on the bed, her cute little dicklette resting in a pool of her wasted cum. Her gaping, cum-coated ass twitches, but can't close fully.");
			writeSpeech("player", "", "So what will you do with her?");
			writeSpeech("friend", "", "Well, everyone in the crew hated Sean, but I think they'll have a change of heart once they see the new him. Throwing in a dedicated fucksleeve and pussylicker could get me some brownie points with the captain. <br>And if things don't work out, I can always use him to motivate the football team.");
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend5B": {
			writeSpeech("player", "", "I'll take you up on that.");
			writeText("You start taking of your clothes. Sean wants to keep arguing, but stops mid-word once he sees you dick.");
			writeSpeech("Sean", "none", "W-what the hell? Why is it so... Whoa, back up. I'm not gay or any shit like that...");
			writeSpeech("friend", "", "Turn around Sean, show him the goods.");
			writeText("He wants to argue, to storm out, or even to start throwing punches to try and salvage some pride. But he can't bring himself to disobey for some reason, and the thought of breaking one of his nails throwing a punch just sounds awful.");
			writeText("He turns around, showing off his huge new bubble butt, a result of the app in the hands of a master.");
			writeSpeech("Sean", "none", "Fucking...why the fuck am I showing them my asshole? Why do I want them to see it? Am I getting off on this?");
			writeText("His conflicted thoughts are sent flying as friendF slaps his ass, causing his booty to jiggle and leaving a bright red handprint.");
			writeSpeech("Sean", "none", "Ngh...");
			writeText("friendF was close to all the cheerleaders at school, there's no way she wouldn't blab about this. The rumor would spread like wildfire about his now puny dick, how he bent over and lost his anal virginity without any resistance.");
			writeText("He can feel a bead of precum form at the tip of his clitty as he imagines being known as the school's new buttslut.");
			writeText("...");
			writeBig("images/real/general/friend5-1.gif");
			writeSpeech("Shannon", "none", "More! Fuck me harder! God, being a girl is so much better!");
			writeText("There's no resistance, no crying out in pain. Sean, now Shannon, took to the first minutes of the rest of her life with glee.");
			writeText("A hyper sensitive prostate probably helped smooth things along, especially since she started spurting like a bitch from the very first moment she had your cock inside her.");
			writeText("friendF grunts as she fires a rope of semen onto Shanon's face. Shanon worshipfully takes it, trying to catch whatever she can on her tongue.");
			writeText("Grabbing onto Shanon's hips, you pull them back and slam yourself into her as you start to fill her ass.");
			writeText("With every rope of jizz you fire off, she's following suit with a much smaller, more pathetic spurt of her own onto the bedsheets.");
			writeText("...");
			writeText("Shannon is unconscious on the bed, her cute little dicklette resting in a pool of her wasted cum. Her gaping, cum-coated ass twitches, but can't close fully.");
			writeSpeech("player", "", "So what will you do with her?");
			writeSpeech("friend", "", "Well, everyone in the crew hated Sean, but I think they'll have a change of heart once they see the new him. Throwing in a dedicated fucksleeve and pussylicker could get me some brownie points with the captain. <br>And if things don't work out, I can always use him to motivate the football team.");
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "friend5Fail": {
			writeSpeech("friend", "", "Morning dude! How's it going?");
			writeSpeech("player", "", "Hey, you seem chipper. You have fun with, uh.");
			writeSpeech("friend", "", "Chelsey? Nah, I loaned her out to the cheerleading squad, got some mad friendship points from it too.");
			writeSpeech("player", "", "'Friendship points'?");
			writeSpeech("friend", "", "Yeah, you know. Carry needs a ride to the laundromat, Charlie needs a cock to torment sometimes. Friends help friends. Hey, you should meet them. I won't tell them about the app, you could just make some more friends.");
			writeText("The two of you chat for awhile, it's nice. It doesn't seem like you or friendF need the app anymore to help your relationship.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "friend5MissingItems": {
			writeSpeech("friend", "", "Hey, you got the...<br>the goods?");
			writeSpeech("player", "", "The taffy? No. You make it sound like a drug deal by the way.");
			writeSpeech("friend", "", "If it's as good as that caramel, then it might as well be.");
			writeSpeech("player", "", "Well anyways I haven't picked it up yet. You sure about this plan?");
			writeSpeech("friend", "", "Yeah. You bring the taffy, you get to watch me turn Chadsworth into a harem member.");
			writeSpeech("player", "", "I dunno...");
			writeSpeech("friend", "", "Hey, you don't wanna ruin his life, then we don't have to. But don't you already have like, five other side chicks?");
			writeSpeech("player", "", "No no, it isn't that. It's just that... He's a dude. I feel conflicted about being part of a lewd dude plan.");
			writeSpeech("friend", "", "Well, if you change your mind just bring the taffy. Oh, hey, did you get the new Smash?");
			writeText("You don't have what you need right now, but the two of you talk about video games for awhile.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}

		//Kendra Corruption
		case "teacherCorruptionHub": {
			checkForCorruptions("teacher");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "teacherCorruption1": {
			writeText("Plastering teacherF's face with your sperm is probably going to be the highlight of your life. Her attitude while you were doing it left some room for improvement though.");
			writeText("That's easy enough to fix! Probably. You'll need to increase her trust in you a lot more, but also increase her suggestibility. A night of tweaking should make her a lot more open to the idea of continuing your experiments.");
			raiseTrust('teacher', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "teacherCorruption2": {
			writeText("Alright, you've had your fun. teacherF's mouth felt pretty nice, but if you wanted more you could get it from anywhere, and from someone you like more. You want a challenge more than you want another blowjob.");
			writeText("At this point you set your sights on a lofty goal, one that involves reprogramming your entire class's sense of common sense.");
			writeText("The work is hard, but engaging. After several hours you lay your phone on the table and you decide to get some rest.");
			raiseTrust('teacher', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "teacherCorruption3": {
			writeText("A great success! The entire class watching you bust a nut in the teacher was a huge turn-on. At this point you don't know what else you could really do.");
			writeText("You have some photos that you scroll through, admiring your work. One thing that stands out is teacherF's wedding ring. She only ever brings up her husband when she's in a really bad mood.");
			writeText("Then again, she did seem to enjoy tormenting you in the past. Maybe he's actually a pretty cool guy? You find him in the app and mess with his common sense like you did with the class. The next time you feel like 'experimenting', you'll be doing it at teacherF's house.");
			raiseTrust('teacher', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "teacherCorruption4": {
			writeText("teacherF has been pretty mellow lately. She's probably been enjoying a life free from her abusive husband, and she deserves it!");
			writeText("The class has been pretty cool with you too. You decide that this next change is gonna be more of a selfless sort of thing. The school bathrooms have been kind of dirty lately, you might as well fix the problem yourself.");
			writeText("<i>The next event involves watersports content. It's optional to complete, so only talk to teacherF again if you're interested in that sort of thing.</i>");
			raiseTrust('teacher', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Kendra Encounters
		case "teacher0Fail": {
			writeSpeech("teacher", "", "Oh? playerF? Here to take up my offer on those take-home assignments? I can't imagine you'll be passing if you don't.");
			writeText("You can't trigger an event right now. You'll need to put your plan into action by going to sleep if you want to do anything with teacherF.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "teacher1": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "teacher1Fail": {
			writeSpeech("teacher", "", "Ah, playerF. Is it time for another... experiment?");
			writeSpeech("player", "", "Not today, I'm not really feeling up to it.");
			writeSpeech("teacher", "", "I see... Well, do you have any time? You fell asleep during the section on the morality associated with godhood. I could give you a refresher.");
			writeText("If you want to trigger another event, you'll need to corrupt teacherF further tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "teacher2": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "teacher2Fail": {
			writeSpeech("teacher", "", "Ah, playerF. Is it time for another... experiment?");
			writeSpeech("player", "", "Not today, I'm not really feeling up to it.");
			writeText("She nods, understandingly.");
			writeSpeech("teacher", "", "I was wondering actually, about what I should call you.");
			writeSpeech("player", "", "Oh yeah, you called me 'Master' after our last session.");
			writeSpeech("teacher", "", "Yes, you see, I was-");
			writeSpeech("player", "", "I like it. Keep using it.");
			writeSpeech("teacher", "", "But during class?");
			writeSpeech("player", "", "Oh yeah, I guess I'd get some undue attention. Keep it a private sort of thing.");
			writeSpeech("teacher", "", "Of course, master.");
			writeText("If you want to trigger another event, you'll need to corrupt teacherF further tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "teacher3": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "teacher3Fail": {
			writeText("The sound of teacherF's ass being slapped resounds through the now-empty room.");
			writeSpeech("player", "", "Good session today, teach. I feel very educated.");
			writeSpeech("teacher", "", "Ngh... That is it, young man, I am putting my foot down!");
			writeSpeech("player", "", "Excuse me?");
			writeSpeech("teacher", "", "Yes. Fucking me in the middle of class? Broadcasting my voice over the intercome? All of that is completely fine, but the way you're holding that phone is weakening your wrist strength. That slap was not even half the strength of yesterday's. Here, studies have shown that holding it with your fingers...");
			writeText("...");
			writeSpeech("player", "", "Oh hey, that is more comfortable, thanks.");
			writeSpeech("teacher", "", "Not a problem. Now, I still have homework to g-");
			writeText("You push her down onto the floor and grab onto her hair.");
			writeSpeech("player", "", "Here, a reward.");
			writeText("She's certainly fun to play with, but if you want to trigger another event, you'll need to corrupt teacherF further tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "teacher4": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "teacher4Fail": {
			writeText("You pull out of teacherF and begin to clean yourself off with a towel she brought in her bag especially for you.");
			writeSpeech("player", "", "Hey. No ring today?");
			writeSpeech("teacher", "", "Ngf... So full...~");
			writeText("A good slap snaps her out of it.");
			writeSpeech("teacher", "", "Nnn! More!");
			writeText("Mostly.");
			writeSpeech("player", "", "Your ring?");
			writeSpeech("teacher", "", "Ah, I'm divorcing that piece of sissy trash. It turns out he'd been cheating on me. That, and his new impotence, both leave me with no other choice really.");
			writeSpeech("player", "", "Ah, that makes sense.");
			writeSpeech("teacher", "", "Master, I know this might sound sudden, but-");
			writeSpeech("player", "", "No. You're a used-cumrag right now, and even if you cleaned yourself off you'd be a cumrag on the inside too. I won't take his place.");
			writeSpeech("teacher", "", "Ah, no, I wasn't talking about marriage. Doing such a thing with a student, disgraceful. No, I was hoping you could get me pregnant. My husband and I last had sex only two weeks ago. If I became pregnant now, I could claim it as his.");
			writeSpeech("player", "", "Jesus, I forget how fucked up you are sometimes. Go ahead and beg like a dog and I'll consider it.");
			writeText("She slides off the desk and begins to bark like a dog for you to impregnate her. While it's certainly hilarious, you won't be able to trigger another scene unless you corrupt her further tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "teacher5": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "teacher5Fail": {
			writeSpeech("player", "", "God, it stinks in here.");
			writeSpeech("teacher", "", "Master! Oh master, welcome to the toilets! Would you like to use me? None of the other students can match up to you.");
			writeSpeech("player", "", "No thanks, you smell like piss.");
			writeSpeech("teacher", "", "Oh, my ex husband is in the next room over! I don't think he's been used for pissing yet. If you fuck him, I could imagine that you're having sex with me!");
			writeSpeech("player", "", "Wow, you really are broken.");
			writeSpeech("teacher", "", "Yes, yes I am! Please, I know you've been drinking a lot of water today. You don't need to fuck me, just using me as your urinal would be enough.");
			writeSpeech("player", "", "Yeah, I don't know about that. You are pretty soaked. I should probably just go to the actual restroo-");
			writeSpeech("teacher", "", "NO! No please! They don't want it like I do, they can't even beg you for it!");
			writeSpeech("player", "", "... The toilets?");
			writeSpeech("teacher", "", "They're awful! They're a breeding ground for disease, and they just dump all that precious p-");
			writeSpeech("player", "", "Yeah I think I get the picture. Hey, you aren't going to die if I just leave you here, are you?");
			writeSpeech("teacher", "", "Oh no, Willie the janitor comes by to unshackle me in an hour. I've been paying him for food too, since I'm always starving by the end of my shift.");
			writeSpeech("player", "", "And you pay him with?");
			writeSpeech("teacher", "", "With money. I'm a student urinal. Paying with my body? To a school janitor? That'd be disgusting. So, will you please use me?");
			writeText("With a sigh you realize you could go for a piss, and unzip yourself.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}

		//Ava Corruption
		case "chefCorruptionHub": {
			checkForCorruptions("chef");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "chefCorruption0": {
			writeText("chefF has always been there for you, and yet she's struggling right now. She's making payments, but her stress levels are through the roof. Even if you lower them, you'll need to help her find some way of dealing with them in the future.");
			writeText("And you have the perfect thing to do that. Some changes to yourself, and changes to her biology later, and you've got the perfect solution.");
			writeText("Jizz!");
			writeText("Obviously she isn't going to roll with that though. You'll need some way to disguise it. Maybe this is why the exotic shop was selling regular coffee creamer?");
			raiseTrust('chef', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "chefCorruption1": {
			writeText("You spend some time browsing through chefF's statistics and find that your efforts were successful. Her stress levels have gone down and she's overall happier. You might as well spend some more time making sure her business can stay afloat in the future. Maybe you'll tell her about all this one day and she'll thank you?");
			writeText("Well, maybe you'll keep her in the dark on this one.");
			raiseTrust('chef', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "chefCorruption2": {
			writeText("You hadn't expected chefF to be so much of a mouth maniac. She was on you the whole time you were at the shop. You didn't mess with her mind too much aside from sprouting a taste for your dilkmilk, maybe she's just naturally orally fixated?");
			writeText("For now, she's hot and she wants more, so you might as well make it so that she gets more. And her business is already doing pretty well too. Next time you see her, you'll take advantage of that.");
			raiseTrust('chef', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "chef0Fail": {
			writeSpeech("chef", "", "playerF! Perfect timing. A group of college students came in a moment ago, and I could use an extra set of hands. Can you help me out?");
			writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with chefF.");
			writeTransition("volunteering", "Help chefF out");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "chef1": {
			data.story.money += 15;
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "chef1Fail": {
			writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with chefF.");
			writeTransition("volunteering", "Help chefF out");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "chef1MissingItems": {
			writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with chefF.");
			writeTransition("volunteering", "Help chefF out");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "chef2": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "chef2Fail": {
			writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with chefF.");
			writeTransition("volunteering", "Help chefF out");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "chef3": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "chef3Fail": {
			writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with chefF.");
			writeTransition("volunteering", "Help chefF out");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "volunteering": {
			switch (checkTrust('chef')) {
				case 0:
					writeText("You help out at the coffee shop for a little bit, and are given $20 for your troubles.");
					writeSpeech("chef", "", "Thank you so much for your help, playerF. I wish I could give you more, but I still need to pay this month's electric bills.");
					data.player.money +=20;
					updateMenu();
					data.player.time = "Night";
					writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
				break;
				case 1:
					writeText("You help out at the coffee shop for a little bit, and are given $20 for your troubles.");
					writeSpeech("chef", "", "Thank you so much for your help, playerF. I wish I could give you more, but I still need to pay this month's electric bills.");
					data.player.money +=20;
					updateMenu();
					data.player.time = "Night";
					writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
				break;
				case 2:
					writeText("You help out at the coffee shop for a little bit, and are given $20 for your troubles. The air within the cafe is tense, however.");
					writeSpeech("chef", "", "Thank you for your help playerF.");
					data.player.money +=20;
					updateMenu();
					data.player.time = "Night";
					writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
				break;
				case 3:
					writeBig("images/real/general/handjob5.gif");
					writeText("You 'help' out at the coffee shop by providing flavor for the customers. You earn $40.");
					writeSpeech("chef", "", "Thank you for your help playerF.");
					data.player.money +=40;
					updateMenu();
					data.player.time = "Night";
					writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
				break;
				case 4:
					writeBig("images/real/general/handjob5.gif");
					writeText("You 'help' out at the coffee shop by providing flavor for the customers. You earn $40.");
					writeSpeech("chef", "", "Thank you for your help playerF.");
					data.player.money +=40;
					updateMenu();
					data.player.time = "Night";
					writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
				break;
			}
			break;
		}

		//Alexis Corruption
		case "officeCorruptionHub": {
			checkForCorruptions("office");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "officeCorruption0": {
			writeText("Thinking about what to do here is tougher than you'd thought it would be. You really want to push your limits with her, no being gentle like with your mother or sister. But at the same time you aren't interested in some brain-dead fuck-puppet.");
			writeText("Maybe what you need is a push to her already bitchy personality. To really have some fun with her traits and statistics, and make her walk the path to being a cum-dumpster herself.");
			writeText("Inspiration abound, you work well into the night. You'll have a lot of fun the next time you bump into her.");
			raiseTrust('office', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "officeCorruption1": {
			writeText("officeF is certainly facing some tough decisions right now. Obviously she still wants to be a strong independent woman, or at least to pretend to be one, but your interference is having none of that.");
			writeText("She's going to walk the path of a total whore, and she'll walk it with a smile.");
			writeText("You have a plan, and a few alterations to her body and immune system later, you're ready for the next time you two meet.");
			raiseTrust('office', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "officeCorruption2": {
			writeText("officeF has been doing quite well recently. Leaving her overnight was exactly what she needed.");
			writeText("She even intends to go back to that alley later and try to bump into you again, perfect.");
			writeText("But unfortunately she isn't completely ready yet. Her location log says she went back into work twice since you fished her out of the gutter. Maybe she intends to only be a part-time meat toilet? Unacceptable! Obviously you need to change her lifelong dream from 'Fortune 500 CEO' to 'STD-immune gutter whore'!");
			writeText("Playing the villain sometimes is actually pretty fun. Once you get it out of your system, you should...");
			raiseTrust('office', 1);
			writeTransition("morning", "Go to sleep");
			break;
		}
		//Alexis Encounters
		case "office0Fail": {
			writeText("She walks by, visibly uninterested in having a conversation with you.");
			writeText("You can't trigger an event right now. You'll need to put your plan into action by going to sleep if you want to do anything with " + "officeF.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "office1": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "office1Fail": {
			writeSpeech("office", "", "You!");
			writeText("She quickly drags you off into a smaller alleyway.");
			writeSpeech("player", "", "Oh, hey. Needed another dick in you?");
			writeSpeech("office", "", "Yes. No! Shit. Listen you punk, I don't know what you did to me, but you are going to pay for it. I will sue the crap out of you, and-");
			writeText("You grab her by the mouth and look her in the eyes. She swoons at the rough treatment even though you aren't really hurting her, before you toss her aside onto the ground.");
			writeSpeech("player", "", "I'm not interested right now.");
			writeText("You start to walk away.");
			writeSpeech("office", "", "I will destroy you, you hear me? Your life is over, you trash!");
			writeText("If you leave her alone she could cause some problems. You might want to use the app on her tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "office2A": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "office2B": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "office2Fail": {
			writeText("You see officeF on the street, her outfit is disheveled and stained in a few places, but she still carries herself with an air of professionalism. She must have just finished a shift as a public use toy.");
			writeText("She pretends not to notice you as you walk by, but she bumps into your shoulder before continuing on without missing a beat.");
			writeText("Before you can stop her, you notice that there's something in your pocket.");
			writeText("It's a small business card, almost blank except for a location and a list of services being advertised, all for incredibly low prices. 'Blowjob: $1 for 3, Kissing: $10, Anal: $1, Raw Anal: Free'.");
			writeText("As you turn to look at her, she's already looking back at you and gives you a wink.");
			writeText("She's really moving up in the world, already having her own business plan. Still, charging for this stuff? It might be worth it to give her one last tweak with the app tonight.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "office3": {
			writeEvent(scene);
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		case "office3Fail": {
			writeText("You push open the door to a condemned looking building, the address matching the one on the new card you got in the mail.");
			writeText("'World-class whore officeF invites you to have some rough, raw fun with no strings attached. $200 gets you an hour of fun, with your money back if you can satisfy me. Anything is on the table, you can even beat the shit out of me if you don't want to pay!'");
			writeText("On the back is the location, and a list of sex acts she allows. The list is pretty extensive, hundreds of terms all writen in small lettering.");
			writeText("She's leaning against the wall, rubbing a black eye while also fingering herself.");
			writeSpeech("office", "", "I'll be with you in just a second, I wanna enjoy this for a-<br>Oh hey, it's you! What's-your-face!");
			writeSpeech("player", "", "It's playerF.");
			writeSpeech("office", "", "Yeeeah, I'm not gonna remember that. I can't even remember my last name. I remember what you did though, you helped me find my purpose! Without you, I'd still be trying to break that old glass ceiling. Wanna fuck?");
			writeSpeech("player", "", "No, I can do better than a hobo's sloppy seconds. I was just curious about how you turned out.");
			writeSpeech("office", "", "Well here I am. You'll tell your friends about me, right? I was a real bitch before, but I'm a grade-A meat hole now, best in the city.");
			writeSpeech("player", "", "Yeah, I read the card.");
			writeSpeech("office", "", "Oh man, that was a great idea. Sent it to everyone I knew, my old boss was actually here yesterday. Man, did he have a lot of frustration to take out.");
			writeText("She recounts a few other choice encounters in her new position, she really is taking this new life seriously. She's as far gone as you can push her now, there's nothing more to do here. You decide to leave, a greasy-looking man shuffling in after you walk out the door.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		//Office Bodymodding
		case "alexisTest": {
			data.story[5].name = "Alexis";
			addFlag('office', 'sparse');
			addFlag('office', 'bitch');
			addFlag('office', 'mouthNormal');
			addFlag('office', 'large');
			addFlag('office', 'pussy1');
			addFlag('office', 'ass1');
			writeTransition("alexisQuo", "Alexis Quo");
			break;
		}
		case "alexisQuo": {
			writeHTML(`
				t ?flag office fine; Your prisoner in here, officeF looks up at you. Despite this being your basement the accommodations are fine. 
				t ?flag office sparse; Your prisoner in here, officeF looks up at you. Despite this being your basement this place is basically your dungeon. She's shackled to the wall by both her arms and legs, so you'll free her before any fun begins.
				t ?flag office nice; Your prisoner in here, officeF looks up at you. Despite this being your basement the accommodations are pretty nice. She has a soft bed to sleep on and eats as well as your mom and sister. 
				t ?flag office lavish; Your prisoner in here, officeF looks up at you. Despite this being your basement the accommodations are amazing. She has a wonderful and soft bed, entertainment, and she eats just as well as you do. 
				sp office; ?flag office bitch; !flag office nice;  !flag office lavish; Here to use me again? If you think you'll get away with treating me like trash... 
				sp office; ?flag office bitch; !flag office sparse; !flag office fine; Here to use me again? Listen, I don't want this pampering, I want to be able to leave and not be stuck here as a sex slave! 
				sp office; ?flag office slave; ?flag office sparse; M-master! Have you come to use me again? Please use me, and if you could perhaps unchain me too...
				sp office; ?flag office slave; !flag office sparse; !flag office lavish; Master! officeF has been a good girl, won't you use her tonight? My mouth, my pussy... Please? 
				sp office; ?flag office slave; ?flag office lavish; Welcome back master! Good... Evening? It's hard to tell anymore. I don't mean to question you, but is this room really fit for someone like me? 
				sp office; ?flag office broken; ?flag office sparse; You're back! Please, please let me go, I can't stroke myself like this. I need to cum, please! 
				sp office; ?flag office broken; !flag office sparse; Ghh... You? You're back! Please, fuck me! I've squirted from my fingers so many times the bed is soaked, but nothing satisfies me like your dick! 
				sp office; ?flag office silent; ...? 
				t ?flag office mouthNormal; Her mouth is normal, although her lips are pretty plump by default and she's quite skilled with her tongue. 
				t ?flag office mouthFiend; As she opens her mouth and licks her lips, a faint line of drool goes down the sife of her mouth. She just can't help herself around you. 
				t ?flag office mouthBimbo; !flag office silent; ... Is what you assumed she said. Her lips as so thick that it's hard for her to speak, but they're made for sucking dick anyways. You'll fill in the blanks on what you think she's saying, if you wanted her quiet you could just make her never speak.
				t ?flag office mouthBimbo; ?flag office silent; She doesn't say anything, not that she really can. Her lips as so thick that it's hard for her to speak, but they're made for sucking dick anyways. 
				t ?flag office flat; She is as flat as a board. 
				t ?flag office perky; !flag office sparse; Her tits are perky and youthful, like she's a freshly-18 teenager. Before she noticed you she was massaging them, she must like the feeling. 
				t ?flag office perky; ?flag office sparse; Her tits are perky and youthful, like she's a freshly-18 teenager.
				t ?flag office large; Her breasts are large. 
				t ?flag office massive; Her breasts are so large they'd get a double take from anyone who saw them. She could titfuck a horse, and they're so sensitive she could get off from it. 
				t ?flag office fuckable; Her breasts are massive and jiggle with every breath she takes. Her nipples are inverted, and you know they're deep enough you could fuck them like a pair of cunts.
				t ?flag office pussy0; !flag office masochism; As you look at her crotch she cringes a little reflexively. Because of your changes traditional sex is downright painful. 
				t ?flag office pussy0; ?flag office masochism; As you look at her crotch she cringes a little reflexively. Because of your changes traditional sex is downright painful. And because of her masochism fetish, just the thought of that is enough to get her wet. 
				t ?flag office pussy1; Her pussy is normal, traditional sex should be enjoyable for the both of you. 
				t ?flag office pussy2; Her pussy is extra sensitive, you can alread see a trickle of wetness on her thigh. She doesn't need words to tell you how much she wants your dick in her twat. 
				t ?flag office pussy3; She whimpers a little as you can see the faintest outline of her womb beneath her abdomen. The knowledge that a dick capable of creaming her is in the room is enough for her body to go into breeding mode. 
				t ?flag office ass0; !flag office masochism; You can actually see when the idea that you'll fuck her ass crosses her mind, because she suddenly  cringes. 
				t ?flag office ass0; ?flag office masochism; You can actually see when the idea that you'll fuck her ass crosses her mind, because she suddenly  cringes. Because of the fetish you implanted in her though, her pussy gets even wetter at the idea. 
				t ?flag office ass1; Her ass is it's normal tightness, it's only natural that she'd be an anal freak by default since she's had a stick up her ass since your first meeting. 
				t ?flag office ass2; She wiggles at you seductively, and you can see that her puffy asshole throbs in tandem with her pussy. If she could get off on just the thought of anal sex she would have squirted just now, but no. She needs the real deal, and she needs it now. 
				t ?flag office impregnation; She has a powerful impregnation fetish. Cumming inside her will trigger an orgasm regardless of her feelings on the matter. 
				t ?flag office worship; She has a powerful cock worship fetish. Waving your cock in front of her face will awaken her inner devotion to your dick. 
				t ?flag office rimming; She has a powerful rimming fetish. When her eye glance down at your crotch, you can tell your dick isn't the only thing on her mind. 
				t ?flag office masochism; She has a powerful masochism fetish. Even if her body experiences pain, pleasure will overshadow it by a mile. 
				t ?flag office watersports; She has a powerful watersports fetish. She licks her lips and seems thirsty, but not for water. 
			`);
			writeTransition("officePussy", "Fuck her pussy");
			writeTransition("officeAnal", "Fuck her ass");
			writeTransition("officeModConditions", "Change her living conditions");
			writeTransition("officeModPersonality", "Alter her personality");
			writeTransition("officeModFetishes", "Alter her fetishes");
			writeTransition("officeModMouth", "Alter her mouth & lips");
			writeTransition("officeModTits", "Alter her tits");
			writeTransition("officeModPussy", "Alter her pussy");
			writeTransition("officeModAss", "Alter her ass");
			break;
		}
		case "officeModAss": {
			writeTransition("officeModAss0", "Anal sex will be unpleasant, even painful, for her");
			writeTransition("officeModAss1", "Anal sex will be very pleasurable for her");
			writeTransition("officeModAss2", "She'll be a complete buttslut through-and-through.");
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModAss0": {
			addFlag("office", "ass0");
			removeFlag("office", "ass1");
			removeFlag("office", "ass2");
			writeHTML(`
				t You've finished altering officeF's ass. A sadistic grin flashes on your face as you imagine the possibilities.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModAss1": {
			addFlag("office", "ass1");
			removeFlag("office", "ass0");
			removeFlag("office", "ass2");
			writeHTML(`
				t You've finished altering officeF's ass. Pleasure, tightness, most importantly you'll have no problem keeping clean.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModAss2": {
			addFlag("office", "ass2");
			removeFlag("office", "ass0");
			removeFlag("office", "ass1");
			writeHTML(`
				t You've finished altering officeF's ass. You won't need to worry for a second about prep time, every single aspect of her asshole is for your pleasure now.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPussy": {
			writeTransition("officeModPussy0", "Traditional sex will be unpleasant, even painful, for her");
			writeTransition("officeModPussy1", "Traditional sex will feel good");
			writeTransition("officeModPussy2", "Traditional sex with you will be heightened by a factor of ten");
			writeTransition("officeModPussy3", "Traditional sex will be almost inhuman; her pussy and womb will actively seek impregnation");
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModPussy0": {
			addFlag("office", "pussy0");
			removeFlag("office", "pussy1");
			removeFlag("office", "pussy2");
			removeFlag("office", "pussy3");
			writeHTML(`
				t You've finished altering officeF's twat. A sadistic grin flashes on your face as you imagine the possibilities.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPussy1": {
			addFlag("office", "pussy1");
			removeFlag("office", "pussy0");
			removeFlag("office", "pussy2");
			removeFlag("office", "pussy3");
			writeHTML(`
				t You've finished altering officeF's twat. It's back to its usual levels from when you first started using the app to fuck with her.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPussy2": {
			addFlag("office", "pussy2");
			removeFlag("office", "pussy0");
			removeFlag("office", "pussy1");
			removeFlag("office", "pussy3");
			writeHTML(`
				t You've finished altering officeF's twat. With the sensitivity tuned up, wetness increased, and tightness raised as well, sex with her should be fun.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPussy3": {
			addFlag("office", "pussy3");
			removeFlag("office", "pussy0");
			removeFlag("office", "pussy1");
			removeFlag("office", "pussy2");
			writeHTML(`
				t You've finished altering officeF's twat. There's an ever-so-slight twitch of her womb as the changes are finalized.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModConditions": {
			writeTransition("officeModConditionsSparse", "Have her live in poor, sparse conditions");
			writeTransition("officeModConditionsFine", "Give her a decent bed to sleep on");
			writeTransition("officeModConditionsNice", "Make the basement into a proper bedroom");
			writeTransition("officeModConditionsLavish", "Make the room into a lavish bedroom, fitting for a member of your harem");
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModConditionsSparse": {
			addFlag("office", "sparse");
			removeFlag("office", "fine");
			removeFlag("office", "nice");
			removeFlag("office", "lavish");
			writeHTML(`
				t You've finished changing officeF's conditions. Your basement will now be very sparse, she's practically living in a dungeon complete with shackles.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModConditionsFine": {
			addFlag("office", "fine");
			removeFlag("office", "sparse");
			removeFlag("office", "nice");
			removeFlag("office", "lavish");
			writeHTML(`
				t You've finished changing officeF's conditions. Your basement now has a single, neatly made bed for her to sleep on.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModConditionsNice": {
			addFlag("office", "nice");
			removeFlag("office", "sparse");
			removeFlag("office", "fine");
			removeFlag("office", "lavish");
			writeHTML(`
				t You've finished changing officeF's conditions. The basement actually looks pretty nice, like an ordinary bedroom, not the kind of place prisoners are usually kept.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModConditionsLavish": {
			addFlag("office", "lavish");
			removeFlag("office", "sparse");
			removeFlag("office", "nice");
			removeFlag("office", "fine");
			writeHTML(`
				t You've finished changing officeF's conditions. With the help of the app the room now looks incredible, the living conditions you or a member of your harem deserve. Maybe you should change your room someday.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPersonality": {
			writeTransition("officeModPersonalityBitch", "Return her original personality");
			writeTransition("officeModPersonalitySlave", "Have her act in a way befitting of a slave");
			writeTransition("officeModPersonalityBroken", "Break her mind, have her act like a pleasure junkie");
			writeTransition("officeModPersonalitySilent", "Remove her capacity for speech");
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModPersonalityBitch": {
			addFlag("office", "bitch");
			removeFlag("office", "slave");
			removeFlag("office", "broken");
			removeFlag("office", "silent");
			writeHTML(`
				t You've finished messing with officeF's head, and finalize the changes. Expectantly, you look into her eyes.
				sp office; The fuck are you staring... Just let me go already!
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPersonalitySlave": {
			addFlag("office", "slave");
			removeFlag("office", "bitch");
			removeFlag("office", "broken");
			removeFlag("office", "silent");
			writeHTML(`
				t You've finished messing with officeF's head, and finalize the changes. Expectantly, you look into her eyes.
				sp office; M-master! I'm so sorry, I don't know what I was thinking acting like that!
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPersonalityBroken": {
			addFlag("office", "broken");
			removeFlag("office", "slave");
			removeFlag("office", "bitch");
			removeFlag("office", "silent");
			writeHTML(`
				t You've finished messing with officeF's head, and finalize the changes. Expectantly, you look into her eyes.
				t ... And she doesn't even seem to notice. Instead she's more interested in playing with her cunt
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModPersonalitySilent": {
			addFlag("office", "silent");
			removeFlag("office", "slave");
			removeFlag("office", "broken");
			removeFlag("office", "bitch");
			writeHTML(`
				t You've finished messing with officeF's head, and finalize the changes. Expectantly, you look into her eyes.
				sp office; ...?
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes": {
			if (checkFlag("office", "impregnation") == false) {
				writeTransition("officeModFetishes-impregnationAdd", "Give her an impregnation fetish");
			}
			else {
				writeTransition("officeModFetishes-impregnationRemove", "Remove her impregnation fetish");
			}
			if (checkFlag("office", "worship") == false) {
				writeTransition("officeModFetishes-worshipAdd", "Give her an worship fetish");
			}
			else {
				writeTransition("officeModFetishes-worshipRemove", "Remove her worship fetish");
			}
			if (checkFlag("office", "rimming") == false) {
				writeTransition("officeModFetishes-rimmingAdd", "Give her a rimming fetish");
			}
			else {
				writeTransition("officeModFetishes-rimmingRemove", "Remove her rimming fetish");
			}
			if (checkFlag("office", "masochism") == false) {
				writeTransition("officeModFetishes-masochismAdd", "Give her an masochism fetish");
			}
			else {
				writeTransition("officeModFetishes-masochismRemove", "Remove her masochism fetish");
			}
			if (checkFlag("office", "watersports") == false) {
				writeTransition("officeModFetishes-watersportsAdd", "Give her an watersports fetish");
			}
			else {
				writeTransition("officeModFetishes-watersportsRemove", "Remove her watersports fetish");
			}
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModFetishes-impregnationAdd": {
			addFlag("office", "impregnation");
			writeHTML(`
				t You've given officeF a powerful impregnation fetish, now she'll be able to cum just from the feeling of you creampieing her cunt.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-impregnationRemove": {
			removeFlag("office", "impregnation");
			writeHTML(`
				t You've removed officeF's impregnation fetish.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-worshipAdd": {
			addFlag("office", "worship");
			writeHTML(`
				t You've given officeF a powerful cock worship fetish. Your cock is like a religious experience, she'll treat it as divine if it's in front of her face. 
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-worshipRemove": {
			removeFlag("office", "worship");
			writeHTML(`
				t You've removed officeF's worship fetish.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-rimmingAdd": {
			addFlag("office", "rimming");
			writeHTML(`
				t You've given officeF a powerful rimming fetish, now she'll be able to get off from frenching your asshole.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-rimmingRemove": {
			removeFlag("office", "rimming");
			writeHTML(`
				t You've removed officeF's rimming fetish.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-masochismAdd": {
			addFlag("office", "masochism");
			writeHTML(`
				t You've given officeF a powerful masochism fetish, rough play will seriously flip her switch.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-masochismRemove": {
			removeFlag("office", "masochism");
			writeHTML(`
				t You've removed officeF's masochism fetish.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-watersportsAdd": {
			addFlag("office", "watersports");
			writeHTML(`
				t You've given officeF a powerful watersports fetish, now she'll happily take <i>all</i> your fluids.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModFetishes-watersportsRemove": {
			removeFlag("office", "watersports");
			writeHTML(`
				t You've removed officeF's watersports fetish.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModMouth": {
			writeTransition("officeModMouthNormal", "Return her mouth to normal");
			writeTransition("officeModMouthFiend", "Increase her mouth sensitivity so she can get off from giving oral");
			writeTransition("officeModMouthBimbo", "Give her a pair of bimbo dick sucking lips");
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModMouthNormal": {
			addFlag("office", "mouthNormal");
			removeFlag("office", "mouthFiend");
			removeFlag("office", "mouthBimbo");
			writeHTML(`
				t You've finished altering officeF's mouth. Her mouth, lips, and tongue are all exactly how they used to be.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModMouthFiend": {
			addFlag("office", "mouthFiend");
			removeFlag("office", "mouthNormal");
			removeFlag("office", "mouthBimbo");
			writeHTML(`
				t You've finished altering officeF's mouth. You finalize the changes and suddenly she jumps on the spot; just the feeling of her tongue in her mouth is enough to get her aroused.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModMouthBimbo": {
			addFlag("office", "mouthBimbo");
			removeFlag("office", "mouthFiend");
			removeFlag("office", "mouthNormal");
			writeHTML(`
				t You've finished altering officeF's mouth. You finalize the changes and suddenly officeF's lips are much, much larger. To the point where she actively needs to push her tongue through her lips to stick it out. The sensitivity has also skyrocketed as well.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModTits": {
			writeTransition("officeModTitsFlat", "A-cup breasts, as flat as a cutting board");
			writeTransition("officeModTitsPerky", "Smaller breaststhat look like they belong to a freshly 18 girl.");
			writeTransition("officeModTitsLarge", "Her normal, large size.");
			writeTransition("officeModTitsHuge", "Heaving sensitive breasts, you'll solve the back issues they might cause.");
			writeTransition("officeModTitsFuckable", "Larger than her head, you can fuck the nipples (and they're sensitive too!)");
			writeTransition("alexisQuo", "Change your mind");
			break;
		}
		case "officeModTitsFlat": {
			addFlag("office", "flat");
			removeFlag("office", "perky");
			removeFlag("office", "large");
			removeFlag("office", "huge");
			removeFlag("office", "fuckable");
			writeHTML(`
				t You've finished altering officeF's tits. Her chest is flat, barely a pair of mosquito bites on her.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModTitsPerky": {
			addFlag("office", "perky");
			removeFlag("office", "flat");
			removeFlag("office", "large");
			removeFlag("office", "huge");
			removeFlag("office", "fuckable");
			writeHTML(`
				t You've finished altering officeF's tits. She has a pair of perky breasts, maybe C-cup at most.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModTitsLarge": {
			addFlag("office", "large");
			removeFlag("office", "flat");
			removeFlag("office", "perky");
			removeFlag("office", "huge");
			removeFlag("office", "fuckable");
			writeHTML(`
				t You've finished altering officeF's tits. They're back to her normal size. Though she shouldn't notice the app's changes directly, she does seem a little relieved.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModTitsLarge": {
			addFlag("office", "huge");
			removeFlag("office", "flat");
			removeFlag("office", "perky");
			removeFlag("office", "large");
			removeFlag("office", "fuckable");
			writeHTML(`
				t You've finished altering officeF's tits. Her face blushes a little as the feeling of the air on her bare, sensitive chest is enough to set her off.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officeModTitsFuckable": {
			addFlag("office", "fuckable");
			removeFlag("office", "flat");
			removeFlag("office", "perky");
			removeFlag("office", "large");
			removeFlag("office", "huge");
			writeHTML(`
				t You've finished altering officeF's tits. They're now absolutely massive, each tit larger than her head. Best of all you can see her inverted nipples, easily a perfect size for your dick.
				...
			`);
			writeScene("alexisQuo");
			break;
		}
		case "officePussy": {
			writeHTML(`
				sp player; Your pussy, now.
				sp office; ?flag office bitch; ?flag office pussy0; Y-you can't be serious. A dick like that... I'll be torn in half. Please, my mouth, my chest... Anything, j-just-
				sp office; ?flag office slave; ?flag office pussy0; M-master, I would never tell you no, of course... B-but, my pussy... Won't you consider using my mouth instead?
				t ?flag office broken; ?flag office pussy0; She lets out a hesitant giggle. Her brain isn't capable of rejecting any kind of sexual act, she's just a beast of pleasure. Still, her body shivers in fear as you approach.
				t ?flag office silent; ?flag office pussy0; She spreads her legs as you approach, a tear falling from her eye and she starts rubbing her cunt trying to make herself as wet as possible for you.
				sp office; ?flag office bitch; ?flag office pussy1; Ghh... Fine, do what you want.
				sp office; ?flag office slave; ?flag office pussy1; Right away master!
				t ?flag office broken; ?flag office pussy1; Sex? Finally!
				t ?flag office silent; ?flag office pussy1; Her eyes dilate slightly.

				t ?flag office pussy1; She spreads her legs for you, already a little wet. Well, you know how she's been passing the time.

				t ?flag office pussy2; ?flag office bitch; She spreads her legs for you almost reflexively. She has a dirty scowl on her face, but her cunt is absolutely drooling at the thought of being stuffed.

				t ?flag office pussy2; !flag office bitch; She spreads her legs for you almost reflexively. She has an eager smile on her face at the thought of getting fucked, and her cunt is absolutely drooling at the thought of being stuffed.

				t ?flag office pussy3; She spreads her legs for you almost reflexively, and you can actually see her cunt gaping the slightest bit as it winks open and shut. Her body is in heat now, and there's only one thing that'll satisfy it.

				im images/real/officePussy0.gif ?flag office pussy0;
				im images/real/officePussy1.gif ?flag office pussy1;
				im images/real/officePussy2.gif ?flag office pussy2;
				im images/real/officePussy3.gif ?flag office pussy3;

				t ?flag office pussy0; !flag office masochism; As you thrust in tears start falling down her cheeks as she barely holds in sobs. She bites her lips, just trying to make it through this.
				t ?flag office pussy0; ?flag office masochism; As you thrust in she bites her lower lip hard. The pain hits her first, but is quickly washed out by a growing pleasure at being used, fucked, <b>dominated</b>.
				t ?flag office pussy1; ?flag office bitch; As you thrust in she bites her lip and lets out a small gasp. She closes her eyes, trying to focus on the sensation of being filled, and not on who's filling her.
				t ?flag office pussy1; !flag office bitch; As you thrust in she bites her lip and lets out a small gasp. She looks you right in the eye, the knowledge of who's filling her giving her even more pleasure than the insertion..
				t !flag office pussy1; !flag office pussy0; ?flag office bitch; As you thrust in she lets out a long, drawn out moan. She tries to bite her lip to hold back, to save at least some face in front of you, but it's clear that her pride is being shattered into pieces by the arcing pleasure spiking through her body.
				t !flag office pussy1; !flag office pussy0; ?flag office silent; As you thrust in her mouth goes slack. The smallest of squeaks can be heard. Her voice may be well past the point of broken, but her body is actively relishing in every second of the insertion.
				t !flag office pussy1; !flag office pussy0; !flag office bitch; !flag office silent; As you thrust in she lets out a long, drawn out moan. Still, even as her mind is going haywire because of the arcing pleasure spiking through her body, she grinds against you hoping that you're feeling just as good as she is.

				t ?flag office pussy0; Your inner sadist delights as you take a moment to lick a tear off her face, her body shuddering at the touch of your tongue but even more tears fall as you get into a rhythm of thrusting.
				t !flag office pussy0; !flag office mouthBimbo; Your inner dominant urges delight as you take a moment to kiss her, her body shuddering at the touch of your lips and the rhythm of your powerful thrusting.
				t !flag office pussy0; ?flag office mouthBimbo; Your inner dominant urges delight as you take a moment to kiss her, your tongue needs to actively penetrate her fat lips, and the pleasure caused by this is almost enough to distract her for a moment from the rhythm of your powerful thrusting.

				t For the first round of the night you can already feel your balls clenching. Your enhanced body enough that instead of a piddly stream of cum, you're flooding her insides with thick, sticky jizz.

				t ?flag office pussy0; !flag office masochism; She just clenches her body as she can't hold back her sobbing anymore. The act of being completely defiled starts to shave away at any fragments of will or dignity she had left. As you pull out of her cunt she even gets a little hysterical, rolling over to face away from you and not wanting to look at her leaking, sore snatch.
				t ?flag office pussy0; ?flag office masochism; Despite the pain, despite the indignity of being defiled, despite the last vestiges of any will or dignity she has left being shaved away, the moment she feels your sperm inside her cunt she squirts. Knowing that she hates this, that she's so broken she'll be able to cum tonight every time she even thinks about her sore cunt, knowing that her pathetic slut body has completely betrayed her and is enjoying every second of this... 
				t ?flag office pussy0; ?flag office masochism; It only makes her squirt harder.

				t ?flag office pussy1; ?flag office bitch; She grimaces as she feels you cum inside, knowing that the first round is nearly over keeping her just on the edge of finally squirting hard enough to forget her place here. She shoots you a powerful glare, hating you for her captivity, for defiling her, and for taking away her chance to finally cum.
				t ?flag office pussy1; !flag office bitch; She grins as she feels you cum inside, knowing that the first round is nearly over means that she shoots her hand between her legs and starts roughly playing with her clit. The idea of cumming with you is more important than any grace or dignity she could ever have.
				t ?flag office pussy1; !flag office bitch; And it's enough. As the last jet of sperm fills her stuffed cunt, her body quivers as she pushes herself over the edge with the help of your dick.
				sp office; !flag office pussy1; !flag office pussy0; !flag office silent; Cumming~!
				sp office; !flag office pussy1; !flag office pussy0; ?flag office silent; ...~!
				t !flag office pussy1; !flag office pussy0; She loses control of herself completely in those last, final thrusts. Her back arches and a full body quiver starts at her toes and ends at her head. A grin is spread across her face, knowing she'll cum even harder on the second round.

				t ?flag office pussy3; Suddenly her body goes rigid again. You can feel the walls of her pussy clenching around you rhythmically, as if trying to milk your cock.

				sp office; ?flag office pussy3; ?flag office bitch; !flag office impregnation; N-no! I don't... My body is acting on it's own!
				t ?flag office pussy3; ?flag office bitch; !flag office impregnation; A tear leaks down the front of her face. Realizing that her body intends on getting stuffed with your cum without her mind's consent. You feel something soft pressing against the head of your cock, almost like it's smooching against the head of your dick.
				sp office; ?flag office pussy3; ?flag office bitch; !flag office impregnation; M-my cervix... My womb, is...
				t ?flag office pussy3; ?flag office bitch; !flag office impregnation; It suddenly clicks in her mind the full extent of what's happening and her eyes flutter.
				t ?flag office pussy3; ?flag office bitch; !flag office impregnation; Her body wracked, her mind fried with shame and pleasure, her brain shuts down and she faints. <b>She is now broken.</b>

				sp office; ?flag office pussy3; ?flag office bitch; ?flag office impregnation; N-no! I don't... My body is acting on it's own!
				t ?flag office pussy3; ?flag office bitch; ?flag office impregnation; Her legs start to quake, regardless of her conscious will her body intends on getting stuffed with your cum, and her powerful fetish for being bred is cracking her sense of reason in half. You feel something soft pressing against the head of your cock, almost like it's smooching against the head of your dick.
				sp office; ?flag office pussy3; ?flag office bitch; ?flag office impregnation; M-my cervix... My womb, is...
				t ?flag office pussy3; ?flag office bitch; ?flag office impregnation; It suddenly clicks in her mind the full extent of what's happening and her eyes flutter. The quaking of her legs grows more rapid, more frantic, until...
				sp office; ?flag office pussy3; ?flag office bitch; ?flag office impregnation; CUMMING~! FUUHHH CUMM~!
				t ?flag office pussy3; ?flag office bitch; ?flag office impregnation;  Her mind admits complete defeat as her brain is rocked with an explosive orgasm hard enough to rewire her very way of thinking. You can see as her eyes roll back she's clearly realizing your dominance, imagining her gut swelling with your child, and understanding your cock is the only way she'll ever feel this good again. As her eyes flutter, she begins to faint, but it's clear that <b>she has been broken into a bitch in heat</b>.

				sp office; ?flag office pussy3; ?flag office slave; M-master's cumming! He's cumming in my... In his sex-toy's cunt!
				sp office; ?flag office pussy3; ?flag office broken; Y-yes! Cream my filthy cumslut cunt!
				sp office; ?flag office pussy3; ?flag office silent; ...!
				t You feel something soft pressing against the head of your cock, almost like it's smooching against the head of your dick.
				t ?flag office pussy3; !flag office bitch; !flag office impregnation; Her eyes roll back as she can feel her cervix actually <i>consuming</i> your sperm. The idea that her body is so broken for you causes an actual tear of joy to slide down the side of her face. The pleasure of her altered body is too much, and she faints. That doesn't stop her cervix from bumping against the head of your cock a few more times, winking just a little so that your final jet of cum splatters directly into her womb.
				t ?flag office pussy3; !flag office bitch ?flag office impregnation; Her eyes roll back as she can feel her cervix actually <i>consuming</i> your sperm. The idea that her body is so broken for you causes an actual tear of joy to slide down the side of her face. Her powerful fetish for being bred. The impregnation fetish you programmed into her body hits her hard, shattering her mind. She lets out a shrill scream and a jet of squirt from her cunt that quickly dies out as her brain overloads, and she goes slack.
			`);
			writeTransition("alexisQuo", "Go back");
			break;
		}
		case "officeAnal": {
			writeHTML(`
				sp player; I think tonight we'll play with your asshole. Bend over, ass in the air.
				sp office; ?flag office bitch; ?flag office ass0; ... No. No fucking way, you son of a bitch. Let me out, let me go right now!
				sp office; ?flag office slave; ?flag office ass0; M-master... My pussy, or my mouth... I...
				sp office; ?flag office broken; ?flag office ass0; M-my ass... Anal sex...
				sp office; ?flag office silent; ?flag office ass0; ...
				t ?flag office bitch; ?flag office ass0; Yet even as she rebels, she can't help but turn around and present herself to you. It isn't chains or a locked door that keep her here, it's the app making sure her loyalty to your word overpowers whatever will she can muster.
				sp office; ?flag office bitch; ?flag office ass0; Please, please just let me go. I'm sorry, okay? I'm sorry for whatever I did to deserve this, please forgive me...
				t ?flag office bitch; ?flag office ass0; !flag office masochism; As you step forwards she realizes you have no intention of listening. Tears welling up in her eyes she buries her head in the sheets and bites down on them hard.
				t ?flag office bitch; ?flag office ass0; ?flag office masochism; As you step forwards she realizes you have no intention of listening. Her breathing starts to pick up and you can see a trickle of wetness drip down her leg. She buries her head in the sheets and bites down on them hard.
				t !flag office bitch; ?flag office ass0; !flag office masochism; As you step forwards she realizes you have no intention of changing your mind. She takes a few deep breaths to try and control her breathing, before she buries her head in the sheets and bites down on them hard.
				t !flag office bitch; ?flag office ass0; ?flag office masochism; As you step forwards she realizes you have no intention of changing your mind. She takes a few deep breaths to try and control her breathing, before she buries her head in the sheets and bites down on them hard. Yet despite her trepidation you can see a trickle of wetness drip down her leg. 

				sp office; ?flag office bitch; ?flag office ass1; Ghh... This is all a sick game to you, isn't it?
				t ?flag office bitch; ?flag office ass1; Despite her tone, she turns around and wiggles her fat ass at you, tempting you to fuck it.
				sp office; ?flag office slave; ?flag office ass1; Of course!<br>If... If I could make a request, could you be extra rough with me today?
				sp office; ?flag office broken; ?flag office ass1; Ass?<br>Y-yes please!
				sp office; ?flag office silent; ?flag office ass1; ...
				t !flag office bitch; ?flag office ass1; She turns around and wiggles her fat ass at you, tempting you to fuck it.

				sp office; ?flag office bitch; ?flag office ass2; My... Ass...
				t ?flag office bitch; ?flag office ass2; She seems hesitant for a moment, but only for a moment. She turns around and waves her ass at you, tempting you to fuck it.
				sp office; ?flag office slave; ?flag office ass2; Yes!<br>Ah, sorry, I got a bit... Please, this fuckhole is yours, master. <i>Ream</i> it until I can't sit anymore and I'm sure my devotion to you will somehow grow even stronger~
				sp office; ?flag office broken; ?flag office ass2; Asshole... You'll fuck my asshole~
				sp office; ?flag office silent; ?flag office ass2; ...
				t !flag office bitch; ?flag office ass2; She turns around and wiggles her fat ass at you before grabbing it by the cheeks and spreading it out. She makes sure you have a good look at her puckered fuckhole before she lets go and <i>spanks</i> herself hard enough for it to ripple.

				im images/real/officeAss0.gif ?flag office ass0;
				t ?flag office ass0; !flag office masochism; You can hear her let out a muffled scream as you thrust into her ass, followed by a choked-back sob. With no lube it's clear that this is hurting.
				t ?flag office ass0; ?flag office masochism; You can hear her let out a muffled scream as you thrust into her ass, followed by a guttural moan. With no lube it's clear that this is hurting, but officeF's broken mind is getting off on the sensation.

				im images/real/officeAss1.gif ?flag office ass1;
				t ?flag office ass1; You can feel her tight hole wrap around you, you were kind enough to lube yourself up, which she clearly appreciates.

				im images/real/officeAss2.gif ?flag office ass2;
				t ?flag office ass2; You can feel the walls of her ass flexing around you, her altered body changed to the point where she doesn't need even a drop of lube to enjoy a good assfucking.

				t You grab her by the hair and pull her close.

				sp player; ?flag office ass0; Listen, whore. I decide how you feel, when you get off and how hard. Carve this into your soul, and never, <b>ever</b> forget who owns you.
				sp office; ?flag office ass0; !flag office masochism; Y-yes... Sir...!
				t ?flag office ass0; !flag office masochism; As you slam your hips against hers she chokes out the words between brutal sobs. Rather than let her battered soul keep being abused by continuing to resist, she finally relents. Her brain, desperate for any kind of out from the relentless pain finally cracks.
				t ?flag office ass0; !flag office masochism; She's broken.
				sp office; ?flag office ass0; ?flag office masochism; Y-yes... GHHH...!
				t ?flag office ass0; ?flag office masochism; As you slam your hips against hers she grits her teeth so hard they might crack. The sheets in front of her are absolutely soaked as a squirting orgasm hits her like a truck.
				sp player; ?flag office ass0; ?flag office masochism; Bad... GIRL!
				t ?flag office ass0; ?flag office masochism; You adjust yourself so that you can continue to thrust into her as you slam her face down onto the spot soaked with her cunt juices. This of course only makes her ass convulse around you again.

				sp player; !flag office ass0; You're mine, you understand? You're <b>my</b> slut, and you'll happily beg to get fucked in the ass any day of the week!
				sp office; ?flag office ass1; ?flag office bitch; No...! N-no, I won't... I'm not... CUMMING~!
				sp office; ?flag office ass1; ?flag office slave; Yesss~! Your slave is cumming~!
				sp office; ?flag office ass1; ?flag office broken; Yesss~! Fuck my ass harder, ruin me~!
				sp office; ?flag office ass1; ?flag office silent; ...~!
				sp office; ?flag office ass2; ?flag office bitch; YES~! HARDERRRR~! POUND YOUR LITTLE BUTTSLUT~!
				t ?flag office ass2; ?flag office bitch; You see something in officeF's eyes as her body shakes and convulses on your dick. It's clear from how she looks back at you that she's cumming so hard her resistance has crumbled. <b>She has broken into your slave!</b>
				sp office; ?flag office ass2; ?flag office slave; YES~! HARDERRRR~! POUND YOUR LITTLE BUTTSLUT SLAVE~!
				sp office; ?flag office ass2; ?flag office broken; YES~! HARDERRRR~! I'M CUMMING FROM MY FUCKING ASSHOLE~!!!
				sp office; ?flag office ass2; ?flag office silent; ...~!!!

				t With one more powerful thrust you can feel yourself start to cum inside her as your hips clap against her cheeks.

				t ?flag office watersports; But before you're done, there's one more step of self relief. You sigh and relax as you start filling her creampied rectum with a blast of piss.
				im images/real/assPiss.gif; ?flag office watersports;

				t ?flag office ass0; You pull out, letting your cock rub against her untouched pussy as it flops free of her asshole. You let go of her hair and she similarly flops slack onto the bed, she must've fainted from the pain.
				t ?flag office ass1; You pull out, letting your cock rub against her untouched pussy as it flops free of her asshole. You let go of her hair, letting her try to catch her breath.
				sp player; ?flag office ass1; You'll be cleaning me off, right?
				sp office; ?flag office ass1; ?flag office bitch; Ghh... Fine, you fucking pig, bring your filthy dick over here and get this over with...
				sp office; ?flag office ass1; ?flag office slave; Y-yes... Please, I want to taste master's dick more...
				sp office; ?flag office ass1; ?flag office broken; Y-yes... If you'll fuck me like that again, I'll do anything...
				t ?flag office ass1; ?flag office silent; She says nothing, she just rolls over and opens her mouth.
				t ?flag office ass2; You pull out, letting your cock rub against her untouched pussy as it flops free of her asshole. You let go of her hair and she similarly flops slack onto the bed, she must've blacked out from that orgasm. Even though she's resting in a pool of her own fluids while yours leak from her ass, she's out like a light.
			`);
			writeTransition("alexisQuo", "Go back");
			break;
		}
		//Dom route exotic shop stuff
		case "exoticCorruptionHub": {
			checkForCorruptions("exotic");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "exoticShop0": {
			writeBig("images/real/adriana/profile1.jpg");
			writeSpeech("exotic", "", "Hey, welcome back. Gonna buy something this time?.");
			loadShop("exotic");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "exoticShop1": {
			writeBig("images/real/adriana/profile2.jpg");
			writeSpeech("exotic", "", "Yo, buy something so we have an excuse to fuck.");
			loadShop("exotic");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "exoticShop2": {
			writeBig("images/real/adriana/profile3.jpg");
			writeSpeech("exotic", "", "Yo. You even have anything left you can buy?");
			loadShop("exotic");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "exotic1": {
			writeEvent(scene);
			data.player.skill = 2;
			writeSpecial("You've gained an advanced level of understanding of the Human Alteration App!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "exotic2": {
			writeEvent(scene);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "clothingTicket": {
			writeHTML(`
				player Having a better selection of outfits should be nice.
				exotic Yeah, better service too. Make sure to read the back when you get into the store.
				player ... Cryptic. Alright, I guess.
				exotic There's a space for a new name too. I was thinking "Gina".
				player Who's it for?
				exotic Oh, you'll see. Trust me.
				t The name on the ticket is <input type="text" id="nameSubmission" value="Gina">
			`);
			data.player.money += 5;
			buyItem("clothingTicket");
			writeFunction("renameCharacter('clothes', 'clothingShopSpecial')", "Continue");
			break;
		}
		//Dom route clothing store stuff
		case "clothesCorruptionHub": {
			checkForCorruptions("clothing");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "clothingShopIntro": {
			writeBig("images/real/general/danny.jpg");
			addFlag("player", scene);
			if (checkFlag("player", "femalePronouns") == true) {
				writeSpeech("clothes", "", "Hey honey! Lemme know if you find anything you need.");
			}
			else {
				writeSpeech("clothes", "", "Hey brah! Lemme know if you find anything you need.");
			}
			loadShop("clothes");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "clothingShopBasic": {
			writeBig("images/real/general/danny.jpg");
			if (checkFlag("player", "femalePronouns") == true) {
				writeSpeech("clothes", "", "You comin' back here just to see me? Heh, lemme know if you need any help.");
			}
			else {
				writeSpeech("clothes", "", "Yo, welcome back brah! Lemme know if you find anything you need.");
			}
			loadShop("clothes");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "clothingShopSpecial": {
			changeOutfit("clothes", "Gina");
			writeEvent("clothes1");
			setTrust("clothes", 1);
			writeSpecial("You can now buy exotic clothes!");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "clothingShopAdvanced": {
			writeBig("images/real/gina/profile2.jpg");
			writeSpeech("clothes", "", "Hey, welcome back. Lemme know if you need anything, or anyone, at all.");
			loadShop("clothes");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		case "clothes2": {
			writeEvent(scene);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		//Dom route candy shop stuff
		case "candyCorruptionHub": {
			checkForCorruptions("candy");
			writeTransition("morning", "Just go to sleep");
			writeTransition("sleep", "Alter someone else");
			break;
		}
		case "candyShopIntro": {
			addFlag("player", scene);
			writeText("Ticket in hand you walk through the candy shop's door, a little bell jingling as you do. The cashier looks over towards you with a forced smile, which quickly turns into a genuine one as she spies the bit of gold paper in your hand.");
			writeSpeech("candy", "", "My my my, we've got a VIP in the house~! Selling treats is nice and all, but it'll be nice to sell something a little more... Well...");
			writeText("Checking your app, you can see her name, <input type='text' id='nameSubmission' value='Candi'>.");
			writeText("She reaches below the counter and you hear a few clicks of locks and chains, before she lifts an old-looking wooden chest onto the countertop. She opens it, and you can see an assortment of brightly-colored candies for sale inside.");
			writeSpecial("You can now buy exotic candies!");
			raiseTrust("candy", 1);
			writeFunction("renameCharacter('candy', 'candyShopBasic')", "Continue");
			break;
		}
		case "candyShopBasic": {
			writeBig("scripts/gamefiles/characters/candy.jpg");
			writeSpeech("candy", "", "Hehe, I can tell you'll be nursing a sweet tooth today. Interested in anything?");
			loadShop("candy");
			writeFunction("changeLocation(data.player.location)", "Go back outside");
			break;
		}
		//Skill improvements
		case "skill1": {
			writeEvent(scene);
			data.player.skill += 1;
			data.player.time = "Night";
			writeFunction("changeLocation('homePlayerRoom')", "Finish for the day");
			break;
		}
		
		//Ending
		case "ending": {
			if (data.player.route == "dom") {
				endingChoices = {family: 1, friend: 1, teacher: 1, chef: 1, office: 1, sub: 0,}
				writeMed("images/real/lisa/profile1.jpg");
				document.getElementById('output').innerHTML += `
					<button type="button" id="familyButton1" onclick="changeEnding('family', 1)">Loving Family</button>
					<button type="button" id="familyButton2" onclick="changeEnding('family', 2)">LOCKED</button>
					<button type="button" id="familyButton3" onclick="changeEnding('family', 3)">LOCKED</button>
				`;
				if (checkTrust('mom') > 2 && checkTrust('sister') > 2) {
					document.getElementById('familyButton2').innerHTML = 'Stress Relief Sister';
					endingsLocked.family2 = false;
					if (checkTrust('mom') > 3 && checkTrust('sister') > 3) {
						document.getElementById('familyButton3').innerHTML = 'Camwhore Mother';
						endingsLocked.family3 = false;
					}
					else {
						endingsLocked.family3 = true;
					}
				}
				else {
					endingsLocked.family2 = true;
					endingsLocked.family3 = true;
				}
				writeText("<b>momF & sisterF: <span id='familyEnd'>Loving Family</span></b>");
				writeMed("images/real/riley/profile1.jpg");
				writeText("<b>friendF: <span id='friendEnd'>App Companion</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="friendButton1" onclick="changeEnding('friend', 1)">App Companion</button>
					<button type="button" id="friendButton2" onclick="changeEnding('friend', 2)">LOCKED</button>
					<button type="button" id="friendButton3" onclick="changeEnding('friend', 3)">LOCKED</button>
				`;
				if (galleryCheck("friend4") == true) {
					document.getElementById('friendButton2').innerHTML = "Honey, I'm Home!";
					endingsLocked.friend2 = false;
					if (galleryCheck("friend5") == true) {
						document.getElementById('friendButton3').innerHTML = 'App Companion';
						endingsLocked.friend3 = false;
					}
					else {
						endingsLocked.friend3 = true;
					}
				}
				else {
					endingsLocked.friend2 = true;
					endingsLocked.friend3 = true;
				}
				writeMed("images/real/kendra/profile1.jpg");
				writeText("<b>teacherF: <span id='teacherEnd'>Kinder Teacher</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="teacherButton1" onclick="changeEnding('teacher', 1)">Kinder Teacher</button>
					<button type="button" id="teacherButton2" onclick="changeEnding('teacher', 2)">LOCKED</button>
					<button type="button" id="teacherButton3" onclick="changeEnding('teacher', 3)">LOCKED</button>
				`;
				if (galleryCheck("teacher3") == true) {
					document.getElementById('teacherButton2').innerHTML = 'Personal Pet';
					endingsLocked.teacher2 = false;
					if (galleryCheck("friend5") == true) {
						document.getElementById('teacherButton3').innerHTML = 'Donated Urinal';
						endingsLocked.teacher3 = false;
					}
					else {
						endingsLocked.teacher3 = true;
					}
				}
				else {
					endingsLocked.teacher2 = true;
					endingsLocked.teacher3 = true;
				}
				writeMed("images/real/ava/profile1.jpg");
				writeText("<b>chefF: <span id='chefEnd'>Entrepreneur</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="chefButton1" onclick="changeEnding('chef', 1)">Entrepreneur</button>
					<button type="button" id="chefButton2" onclick="changeEnding('chef', 2)">LOCKED</button>
					<button type="button" id="chefButton3" onclick="changeEnding('chef', 3)">LOCKED</button>
				`;
				if (galleryCheck("chef2") == true) {
					document.getElementById('chefButton2').innerHTML = 'Volunteer Work';
					endingsLocked.chef2 = false;
					if (galleryCheck("chef3") == true) {
						document.getElementById('chefButton3').innerHTML = 'Cumguzzler Cafe';
						endingsLocked.chef3 = false;
					}
					else {
						endingsLocked.chef3 = true;
					}
				}
				else {
					endingsLocked.chef2 = true;
					endingsLocked.chef3 = true;
				}
				writeMed("images/real/alexis/profile1.jpg");
				writeText("<b>officeF: <span id='officeEnd'>Secretive CEO</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="officeButton1" onclick="changeEnding('office', 1)">Secretive CEO</button>
					<button type="button" id="officeButton2" onclick="changeEnding('office', 2)">LOCKED</button>
					<button type="button" id="officeButton3" onclick="changeEnding('office', 3)">LOCKED</button>
				`;
				if (galleryCheck("office3") == true) {
					document.getElementById('officeButton2').innerHTML = 'Public Fixture';
					endingsLocked.office2 = false;
					if (galleryCheck("office4") == true) {
						document.getElementById('officeButton3').innerHTML = 'Fruits of Progress';
						endingsLocked.office3 = false;
					}
					else {
						endingsLocked.office3 = true;
					}
				}
				else {
					endingsLocked.office2 = true;
					endingsLocked.office3 = true;
				}
				writeTransition("endingDom", "Proceed");
			}
			else {
				sceneTransition("endingSub1");
			}
			break;
		}
		case "endingDom": {
			switch (endingChoices.family) {
				case 1:
				writeBig("images/real/general/family1.gif");
				writeSpeech("mom", "", "Glrk, glrk, glrk~!");
				writeSpeech("sister", "", "Mwah~!<br>Master, you taste delicious! But you've been fucking mom's mouth for forever! Will you fuck my ass again soon?");
				writeText("You grab her by the hair and shove her face back against your ass. She gets the message and obediently goes back to rimming you.");
				writeText("Life is stress free now that you've got two loyal sex slaves willing to work to provide for you while you freely laze about. With the app, you can take up any hobby at will in moments, maybe you'll use your new skills to make a game?");
				writeText("Regardless, nowadays you pass the time by getting your rocks off. You grab "+data.story.motherName+" by the hair and start jackhammering your shaft down her throat.");
				writeText("She's gotten a lot better at managing her breath, as shown by how she's still consciously licking while you're balls deep and cumming inside of her.");
				writeText("sisterF's tongue inside you also helps drag out the orgasm, this really is the life.");
				if (galleryCheck("mom6") == true) {
					writeSpeech("player", "", "Nnnngh... Fuck, need to piss now.");
					writeText(""+data.story.motherName+" was just about ready to try sliding off your cock to take a breath, but that idea is thrown right out the window.");
					writeText("Her body is begging for breath, but she isn't budging as you start relieving yourself down her throat. She starts shaking a little, either having a hands free orgasm from drinking your piss, or she's starting to lose consciousness.");
					writeSpeech("sister", "", "Aww...");
					writeText("sisterF sighs with equal parts hunger and disappointment.");
					writeSpeech("player", "", "Don't worry, I'll save some for your ass too.");
				}
				break;
				case 2:
					writeSpeech("player", "", "I'm home!");
					writeText("You're welcomed by the sounds of muffled moans coming from the living room.");
					writeSpeech("mom", "", "Welcome... Ngh... <br> Welcome back~!");
					writeBig("images/real/general/family2.gif");
					writeSpeech("player", "", "Having fun?");
					writeSpeech("mom", "", "Nngh... I was, until she got distracted. Stupid fucking bitch can't even eat pussy properly!");
					writeText(""+data.story.motherName+" decides to motivate sisterF by slapping her palm against sisterF's cunt, hard.");
					writeSpeech("sister", "", "MMMM!");
					writeText("sisterF arches her back and her legs shake as the 'punishment' is enough to get her squirting on the floor. You can see her asshole clench around the fat dildo currently packed inside her.");
					writeSpeech("mom", "", "Nnn... That's more like it, she's focused again.");
					writeText("While "+data.story.motherName+" is grinding against your sister's face, you start to slip out of your clothes. You've had a long day too, time for you to get some fun with your toy.");
				break;
				case 3:
					writeSpeech("mom", "", "Hey everyone, welcome back to my stream!");
					writeText("The chatbox comes alive with more than a few excited commentors ready for the show to begin.");
					writeSpeech("mom", "", "We had a little bit of trouble getting all this to work, but I'm really glad the administrators had a change of heart. <br> The site has a very strict no-adult-content policy, but my son was able to change their minds so that we can bring you this special show today!");
					writeText("A few *bing* noises play.");
					writeSpeech("mom", "", "Oh my, so many donations already! The first is by BabeWizz63, he says 'shut your whore mouth and take off that top already'.");
					writeText("Almost as if programmed, "+data.story.motherName+" is already taking off her thin tanktop. She isn't wearing a bra, so her massive pair of breasts bounce unimpeded once free.");
					writeSpeech("mom", "", "Now boys, you already know the rules, right?");
					writeText("From beneath the desk "+data.story.motherName+" pulls out an absolute monster of a dildo, complete with a head lined with rough-looking bumps designed to turn a cunt into a gaping well-fucked hole.");
					writeSpeech("mom", "", "Any donation over $50 and I need to do everything you tell me, down to the letter. Try not to ruin me, okay?");
					writeText("The chat log starts flying at a blazing speed. "+data.story.motherName+" licks her lips and her pussy throbs as she starts reading through the list of commands to follow.");
					writeText("With her new job as a streaming-site camwhore, you haven't been short on cash for years. She's happy to offer her body for you, of course. But she's also getting off on the thought of all these men watching her.");
					writeText("From fat slobs who want nothing more than to turn her into a wreck, to newly-made men busting their first nut to her ruining herself, nothing quite gets her off like seeing that view count go into the hundreds of thousands while she's kissing her toy with her cervix.");
				break;
			}
			writeText("...");
			switch (endingChoices.friend) {
				case 1:
					writeBig("images/real/general/solo3.gif");
					writeSpeech("friend", "", "It's so sensitive... So this is what's it's like... <br>You're sure I'll be able to go back?");
					writeSpeech("player", "", "Positive. Now that I've gotten the hang of it, you can go back and forth whenever you want.");
					writeText("friendF spreads her legs, showing off her new womanhood.");
					writeSpeech("friend", "", "I always thought they were overrated, but I gotta admit... <br>It's definitely awakening something inside me.");
					writeSpeech("player", "", "You ready for this?");
					writeSpeech("friend", "", "Absolutely.");
					writeText("You press your head against her entrance, and push in.");
					writeSpeech("friend", "", "Nnnngh~");
					writeText("You might have exaggerated a few aspects, like the sensitivity, and dulled the pain a little to make her first time feel special.");
					writeSpeech("friend", "", "Guuuh... Fuck, how does anyone get anything done?");
					writeText("she traces lines along her abdomen, enjoying the tingling sensation of her new womb.");
					writeSpeech("friend", "", "Cmon then, what are you waiting for?");
					writeText("She gives you a cheeky smile before pulling you into a kiss. This is the first day of the rest of a long, happy life.");
				break;
				case 2:
					writeSpeech("player", "", "friendF? I'm back!");
					writeSpeech("friend", "", "In the kitchen, honey!");
					writeText("You close the door and walk in. This is the third dinner date she's invited you on, and you're always excited to see what she's prepared.");
					writeText("And you aren't just talking about the food.");
					writeText("You turn the corner into the kitchen as she places a wooden spoon into a drying rack.");
					writeSpeech("friend", "", "You're early.");
					writeText("She's naked except for her cooking apron, and she makes sure to take an extra bit of time shaking her full ass at you as she undoes the knot.");
					writeSpeech("player", "", "I think I'm right on time for the best part.");
					writeText("You don't tend to use the app all that much these days, enjoying a peaceful life with your girlfriend is all you really need.");
					writeSpeech("friend", "", "It won't be ready for at least an hour. How do you expect to pass the time?");
					writeText("It helps that she's gorgeous, and has an ass that could milk your dick to an orgasm in seconds.");
					writeText("Life these days is nice and peaceful, and you're glad you have someone to share it with.");
				break;
				case 3:
					writeSpeech("friend", "", "You're quite the repeat offender, aren't you? So desperate for your punishment, little pervert?");
					writeSpeech("???", "none", "N-no ma'am! I'm a g-good boy!");
					writeSpeech("friend", "", "Oh really? Because Sasha said she caught you with an erection while she was eating, and you couldn't take your eyes off her cock. Was she lying?");
					writeSpeech("???", "none", "B-but miss! She pinned me down, and was rubbing herself against my face!");
					writeSpeech("friend", "", "And so what? She was rubbing her fat cock against your face, and you were completely soft?");
					writeText("The boy remains silent. He's shivering a little, his flaccid dicklette hanging out for the world to see.");
					writeSpeech("friend", "", "I'll make you a deal. If you really aren't some pathetic little pervert, you'll have no problem staying soft, yeah? If you can stay soft until I'm done with you, you can go right home. You'll even get some of your inches back for good behavior.");
					writeText("The boy perks up at this, eager to reclaim some of his lost manhood. friendF slides her underwear out of the way to let her fat cock dangle free, and rubs it against the boi's penis.");
					writeSpeech("friend", "", "You're doing well, try not to imaging what'll happen if you fail though. Your prick is too small for more shrinking, I'll just have you turned into a total buttslut instead. <br>You'd like that, wouldn't you? Being turned into a total slut for fat cock?");
					writeText("The boi bites his lip, sweat forming on his forehead as he desperately tries to think of something, anything else.");
					writeText("It's been over two weeks since his last orgasm since he just can't seem to get the technique right to reach a hands free one. He's pent up, but his shaft is still flaccid by the end of the teasing.");
					writeSpeech("friend", "", "Oh my, you have quite the will, don't you? Alright then, you can go.");
					writeSpeech("???", "none", "R-really? And my d-dick?");
					writeSpeech("friend", "", "Of course! Just one last thing though, need to talk to the principal. Honey?");
					writeText("You hear her voice and walk over to the 'discipline' room. You don't bother wearing pants on the job, so your massive shaft is hanging freely.");
					writeText("When you walk into the room, the boi doesn't even look you in the eye. His gaze is locked on your shaft, ten times as large as his, and you're completely soft.");
					writeSpeech("friend", "", "Oh no! And you were so close too.");
					writeText("His little dicklette is standing at attention, leaking a streak of precum as his eyes glaze over staring at your cock.");
					writeSpeech("friend", "", "Hello? Are you even listening? Well, whatever. Honey, we've got another that needs buttslut training.");
					writeText("Some days are harder than others as the new principal, but you've never given anything less than 100% to students needing your 'guidance'.");
				break;
			}
			writeText("...");
			switch (endingChoices.teacher) {
				case 1:
					writeSpeech("teacher", "", "And who can tell me the name of this conquistador?");
					writeText("A dozen hands excitedly shoot up.");
					writeSpeech("teacher", "", "Thomas?");
					writeSpeech("Thomas", "none", "Cortez, ma'am!");
					writeSpeech("teacher", "", "Very good, you've been reading ahead! Alright, go ahead.");
					writeText("In the last few months teacherF has had a complete change of heart. Where once she was a cynical, naggy stick in the mud, now she's patient and beloved by her students.");
					writeText("Male students, specifically. teacherF's classes have become predominantly male by a wide margin, the reasons for that become clear when teacherF bends over to present her reward.");
					writeText("And the student doesn't hesitate. She isn't wearing underwear, and he's already hard.");
					writeBig("images/real/general/teacher3-1.gif");
					writeText("For as effective as she is at getting them to do the research, more and more of class time is being spend on fuck-frenzy orgies lately.");
				break;
				case 2:
					writeSpeech("player", "", "I'm heading out!");
					writeSpeech("mom", "", "Okay, have a good time sweetie! <br>Oh, I think teacherF needs a walk before you go!");
					writeText("As you approach the door, teacherF excitedly perks up and comes over to you with her tongue hanging out.");
					writeSpeech("player", "", "Aww, you wanna play, girl?");
					writeText("You roll her over and start fingering her snatch. Her personality is a lot better now that she's so stupidly obedient.");
					writeSpeech("player", "", "Good girl! Cum for me, go ahead! And after that I'll take you out to the park to play with everyone again.");
					writeText("She grits her teeth and starts shaking like she's having a seizure while squirting all down the hallway. Her pussylips clench around your fingers before her body goes slack.");
					writeSpeech("player", "", "Good doggie.");
				break;
				case 3:
					writeSpeech("player", "", "Oh hey, an email from school.");
					writeText("Dear playerF,");
					writeText("I'd like to thank you once again for your generous donation. We weren't sure at first how to respond to your gift, we don't often receive donations in the form of urinals, but they've proven themselves thus far to be of an exceptionally high-quality.");
					writeText("Normally I'd hesitate to describe natters as obscene as this topic, but I'll hope you'll forgive my rambling. We receive feedback almost every week from students, it's almost as if we're being coerced to talk about how wonderful they are, and how often they're used."); 
					writeText("I'm not quite sure where to start. Hygiene in our male students has gone mostly up, due to how thoroughly they clean their dicks after pissing. Some have made a game about going days without washing though, but boys will be boys. Aggression and bullying have gone down as well, and even some faculty have spoken about how refreshed they feel about abusing the pair.");
					writeText("In addition, we've also enacted a policy to post videos of the use to several pornography-distribution websites as an additional source of income. Your generous donation has earned over several thousand dollars of income for the school!");
					writeText("Obviously they're just inanimate objects, but sometimes it almost feels like they enjoy the treatment. My husband is relieving himself right now, and I know he'd tell you how grateful he is if he had the chance.");
					writeText("If you have the opportunity, I was wondering if you were interested in selling more? I know the PTA wouldn't hesitate to approve funding for every bathroom in the school to be equipped like this.");
					writeText("Thank you for your time, and for the lovely set of 'Piss Drunk Whore' and 'Bitch Sissy' model urinals.");
				break;
			}
			writeText("...");
			switch (endingChoices.chef) {
				case 1:
					writeSpeech("chef", "", "T-that'll be $2.95 sir.");
					writeSpeech("???", "none", "Here.");
					writeText("He drops the cash on the counter, and chefF slowly picks it up with shaking hands.");
					writeText("She hears the bell jingle as you open the door.");
					writeSpeech("chef", "", "C-closing time soon, what can I-");
					writeSpeech("player", "", "You're not looking to great. You alright?");
					writeText("She shoots straight up as she hears your voice.");
					writeSpeech("chef", "", "playerF! Thank god, please, I need it....");
					writeSpeech("player", "", "Oh? What exactly do you need?");
					writeText("She leans in, taking in a shuddering breath.");
					writeSpeech("chef", "", "C-cum... I need your cum, please.");
					writeSpeech("player", "", "And how much do you need it, exactly?");
					writeText("She looks from side to side before leaning back. The cafe is still busy, but nobody's looking at her.");
					writeText("She spreads her legs, showing the large patch of wetness soaked into her leggings.");
					writeSpeech("player", "", "Oh my, you're quite needy. Still, you were the one who decided on our agreement. No cum while you're working. You know how you get when you drink it.");
					writeSpeech("chef", "", "P-please! I can't wait any more!");
					writeText("That attracted some attention, several patrons are staring now.");
					writeSpeech("player", "", "Fine, fine. I thought you'd be like this. I brought a cup with me, just take small sips and-");
					writeText("She snatches the cup out of your hands and starts drinking from it. The effects are immediate, her shaking stops and her body relaxes.");
					writeText("But the most obvious effect shows itself when she takes her first gulp. Her body is so twisted, so built around guzzling your cum, that she starts cumming in the spot.");
					writeText("At first she's just rubbing herself and taking moans between swallows, but when she starts squirting through her pants is when she has the attention of everyone in the cafe.");
					writeText("She winces in embarrassment when she realizes what's happening, but doesn't even think to stop. You start to leave to avoid any awkward questions, but you do hear a tearing sound behind you as chefF rips open her leggings to better play with herself."); 
					writeText("It seems like she's broken at this point, probably for the best. She could make a lot more money and get her fix at the same time if she just relaxed and went with the flow.");
				break;
				case 2:
					writeSpeech("player", "", "Thank you, come again! Don't miss out on our deal on Tuesday!");
					writeText("The woman waves goodbye, eager to return later.");
					writeSpeech("chef", "", "Thanks again so much, playerF. I don't know what I'd do-");
					writeText("You don't wait for her to finish before you grab her and tear open her top.");
					writeSpeech("chef", "", "O-oh my, you can't wait even one minute for me to close the blinds?");
					writeSpeech("player", "", "Let them watch.");
					writeBig("images/real/general/chef2.gif");
					writeSpeech("chef", "", "O-oough!");
					writeText("You don't volunteer too often anymore, you don't really need to, but chefF always finds a way to make it worth your while.");
					writeSpeech("chef", "", "H-harder! Fuck me up and use me like a comdom!");
					writeText("And she's been rewarding you extra well ever since you agreed to her plan for Tuesday, the special 'get one brutal cunt-busting fuck with every drink' event.");
					writeSpeech("chef", "", "Nnnngh more! Yes!");
					writeText("She's already squirting, but you aren't anywhere near done yet. You'll need to up your stamina for Tuesday, anyways. Sixteen rounds should be enough prep for the day.");
				break;
				case 3:
					writeBig("images/real/general/cumshot1.gif");
					writeSpeech("chef", "", "And that's one mocha sperm-latte and one pure-sperm expresso. Enjoy!");
					writeText("The woman nodded and carefully took the mugs over to her seat. Her 'expresso' was just a cup with jizz in it, but it was as precious as gold to her.");
					writeSpeech("???", "none", "Mmmph, fuck. How did I go so long without this place?");
					writeText("You've been working as a supplier here for weeks now in your spare time. Take a pop rock, pump out enough jizz to fill a bathtub, and enjoy the sounds of women fingering themselves while they chug your dickmilk.");
					writeText("But it isn't enough for her. This latest customer is a lot thirstier than the rest.");
					writeText("Slowly, she lifts her skirt to reveal her bare pussy beneath, and takes the mug of jizz. She tips it, pouring your cum onto her bare pussy and fingerfucks herself with her other hand.");
					writeText("She's cumming in seconds, and she isn't alone. Other girls catch sight of it, and excitedly lick their lips as they imagine what that must feel like.");
					writeText("Looks like you're gonna be busy today.");
				break;
			}
			writeText("...");
			switch (endingChoices.office) {
				case 1:
					writeSpeech("???", "none", "And so that's how we can increase efficiency in marketing by 20%.<br>... officeF?");
					writeSpeech("office", "", "Glurk... Glurk... *pop*!<br>Mmm, sorry stud, what was that?");
					writeText("officeF had shattered her glass ceiling weeks ago and became the CEO of a major company. With her very 'hands-on' reward structure for efficient employees, she had achieved a remarkably low turnover ratio.");
					writeText("Nothing got her hotter than seeing her company hang just at the edge of making it into the Fortune 500. Nothing except for a fat dick, of course.");
					writeText("At first it was a secret. An office fling here and there, but soon enough officeF was the one offering blowjobs around the water cooler. Walking into the men's bathrooms naked. Heading into the conference room early and having an employee blindfold her and tie her to the ceiling to hang naked like the sex toy she is."); 
					writeText("Honestly, if it weren't for the fact that seeing profit graphs make her squirt like a firehose, she'd be tempted to just make herself a permanent office sextoy to be passed around and abused.");
				break;
				case 2:
					writeText("Somewhere in the shadier parts of town, a rumor is circulating.");
					writeBig("images/real/general/analSquirt1.gif");
					writeText("Rumors of a woman who would do absolutely anything in exchange for even the nastiest fuck.");
					writeBig("images/real/general/office1.gif");
					writeText("She's already given up the keys to her house and car, and burned her clothes to show how willing she is.");
					writeBig("images/real/general/office2.gif");
					writeText("They say if you head down the dark alleyway at night and let your dick out, she'll be able to smell it wherever you are. No matter how clean, although the rumors say she prefers them unwashed.");
					writeText("They say she's too voracious for any one man, that you'll need at least five grown men to fuck her into unconsciousness. God help you if she finds you alone.");
				break;
				case 3:
					writeSpeech("office", "", "Here they are, sir. The latest batch.");
					writeText("officeF opens up a briefcase. Since she reached the top of the corporate ladder under your supervision, she's devoted the entire company towards understanding and replicating the app's body-modifying effects.");
					writeSpeech("player", "", "It looks... Goopy. Have you tested it?");
					writeSpeech("office", "", "Plenty of tests, it's been shown to reduce a woman to a squirting mess in seconds with just one taste.");
					writeSpeech("player", "", "No, I mean have <b>you</b> tested it.");
					writeSpeech("office", "", "I... I couldn't just use myself as a test subject sir, I'm much too valuable for that, righ-");
					writeText("You shut her up by forcing the mixture into her mouth, and she meekly swallows.");
					writeText("The effects are immediate. Her eyes glaze over, and she's standing bow-legged as juice drips from between her legs.");
					writeSpeech("office", "", "C-cock! Fuck! Pusshy wants cawk!");
					writeSpeech("player", "", "Huh, should've asked if it was permanent. Oh well. Alright, bend over.");
				break;
			}
			writeTransition("credits", "The End");
			break;
		}
		
		
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
		case "mom0": {
			writeText("You awaken in the morning, eager to appreciate the fruits of your labor. You walk out of your room, eager to see your mother transformed into the sex-fiend of your dreams, but you stop in your tracks as you walk past her room. Her door is cracked slightly open.");
			writeBig("images/real/general/solo2.gif");
			writeText("Still laying in bed well into the morning, your mother is rubbing at her pussy. The wet spot on her sheets leads you to believe she's been at it for quite a while now. Her moans have a tinge of panic to them as she rolls onto her side.");
			writeSpeech("mom", "", "God, oh god... What's happening to me? Got to get help... Got to...");
			writeText("Your mother slides out of bed, her hand still furiously jilling herself. She can't even make it halfway to the door before she leans back onto the wall.");
			writeBig("images/real/general/solo1.gif");
			writeText("Her rubbing reaches a crescendo and her body convulses, but even afther hand keeps rubbing. Her moans and whimpers are quick and panicked.");
			writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
			writeText("If you wan't to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
			writeText("...");
			writeText("You spend your free time studying the app and its nature.");
			writeSpecial("You've achieved a novice level of understanding of the Human Alteration App's use!");
			writeText("You have a plan now, and a few people you can use for guinea pigs. From now on you'll be able to corrupt individuals after going to bed, but for now you can explore the town freely. What you do from this point on is up to you, but it might be worth it to head to the coffee shop and help out for some pocket change.");
			break;
		}
		case "mom1": {
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
		case "mom2": {
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
		case "mom3": { 
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
		case "mom4A": {
			writeText("You shoo her out for a moment and quickly use the bathroom. She's only just started anyways.");
			writeSpeech("player", "", "Hey, how long do you think you'll be at this?");
			writeSpeech("mom", "", "Awhile at least. I'll need to get the shower, the tiles underneath the sink, the-.");
			writeSpeech("player", "", "I'll let you get to that then. I'm feeling kind of out of it, so I'll be taking a nap.");
			writeSpeech("mom", "", "Alright, I hope you feel better master.");
			writeText("...");
			writeText("You unwrap the plug pop. For your fun, you'll need to have it inserted for about and hour.");
			if (checkFlag("player", "vegetarian") == true) {
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
			writeText("There's suprise in her voice as you press your asshole instead of your dick against her tongue.");
			writeSpeech("player", "", "Come on. You're here for my relief, right?");
			writeText("Once the suprise wears off, she gets with the program, slowly licking the puffy rim of your ass.");
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
		case "mom4B": {
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
		case "mom4C": {
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
		case "sister1": {
			writeSpeech("sister", "", "Different? Nah, I feel fine. Is your head screwed on right?");
			writeText("You'd been eager to see how your sister had changed as a result of the app, but when you'd seen her earlier she looked fine. Even now she doesn't seem any different. It looks like you'll need to try again.");
			writeText("After a nice shower, you notice her door is still cracked open and you can hear sounds from inside. You skulk over to the doorway and peek inside...");
			writeBig("images/real/general/solo3.gif");
			writeText("Your sister is rubbing at herself, but what catches your attention even more is the fact that she has a pair of your underwear pressed against her face.");
			writeText("Every breath she takes in reinvigorates her rubbing, until she lets out a low whimper and stops. You're worried that she saw you until she rolls onto her side.");
			writeSpeech("sister", "", "<i>What the hell is wrong with me? I can't seem to finish. Maybe if I...");
			writeBig("images/real/general/analFinger.gif");
			writeText("She thrusts her fingers into her asshole, and holds back her moan by biting into the fabric she keeps against her face. It's a used, unwashed pair.");
			writeText("You stay and watch her play with herself until she gives up, unable to achieve an orgasm. She hides your underwear beneath her mattress and you escape to your room. If you want to push her further this way, you'll need to increase some sensitivities. You'll also need to find something for her to use. Maybe the exotic store has something in stock?");
			break;
		}
		case "sister2": {
			writeSpeech("player", "", "Package came in for ya!");
			writeSpeech("sister", "", "Oh? I'm working right now, so leave it on the bed.");
			writeText("You toss the box containing the dildo you bought onto the bed, but instead of leaving you decide to hide inside her closet. She's completely focused on her work right now, so she doesn't notice as the closet closes and you peek through the blinds.");
			writeText("While you could mess with her to pump up the curiosity factor, soon enough she's slumped over in frustration at another failed software upgrade. S sits still for a moment, letting out a deep, exhausted sigh. She stands up, grabs a pair of scissors, and goes to investigate the box on her bed.");
			writeSpeech("sister", "", "Weird. I didn't order anything. Are there spam packages now? I'd hate-<br>...The fuck?");
			writeText("The exotic store's dildo has some heft to it. It's clearly made from high-quality material, not the sort of thing someone would send as a joke.");
			writeSpeech("sister", "", "playerF? You still there?");
			writeText("She calls out and you don't respond for obvious reasons. After a moment of silence she walks over to and closes her door before taking a closer look at the toy.");
			writeText("It doesn't take too long before she starts to take her clothes off. You have no doubt that she'd be a lot more cautious if she weren't frustrated beyond belief right now. As it stands though, there's an almost irreverent look in her eyes.");
			writeSpeech("sister", "", "<i>No lube, so...</i>");
			writeBig("images/real/general/deepthroatDildo.gif");
			writeText("With a single thrust she's almost hilted it into her throat, clearly trying to get herself to salivate. She's way more skilled in this than you thought she'd be. The room is quickly filled with 'glurk's and gagging sounds until she finally pulls the dildo free.");
			writeSpeech("sister", "", "<i>Holy shit this is good. It doesn't even taste like plastic.</i>");
			writeText("She sets the dildo on the wall and presses it against the lips of her pussy, but hesitates for a moment. Changing her mind, she arches her back a little more and...");
			writeBig("images/real/general/analDildo1.gif");
			writeSpeech("sister", "", "Ooooooh shit, oh fuck, oh fuck fuck fuck~!");
			writeText("Her raised sensitivity is clear already, and after only a few thrusts her legs are quivering. With every thrust she slides on and off the shaft as if milking it.");
			writeText("You learn forward to get a better view before the dildo pops off the wall and sisterF slumps against the floor, shivering.");
			writeText("But it isn't enough. She props herself up against the bed, presenting a perfect show of her spread-open ass wrapped around the dildo and resumes thrusting.");
			writeBig("images/real/general/analDildo2.gif");
			writeSpeech("sister", "", "<i>Oh god, if someone walked in right now, they'd see everything~!</i>");
			writeText("The thought sets her off like a firecracker, her whole body shaking. She rides through the orgasms, switching between dildo and her fingers to enjoy how gaped her hole is.");
			writeText("Soon she starts picking up the pace, vigorously ramming the pole into her asshole and she's unable to hold her voice back.");
			writeSpeech("sister", "", "Fuck fuck fuck~! " +data.story.name+ "! Fuck my ass harder!");
			writeText("Unable to keep thrusting, she shakes like she's having a seizure and she slumps off the side of the bed. Slowly, the toy slides out of her anal ring, leaving it open and gaping for a moment before it puckers closed.");
			writeText("She realizes her mistake quickly though and moves over to the door, listening for if you had heard her screams. she re-clothes, stumbling as she walks, and leaves the room. You, having thoroughly enjoyed the show, decide to leave as well. She's well on the way to becoming a complete buttslut, but if you want to take her for yourself you'll need to push her even farther.");
			break;
		}
		case "sister3": {
			writeBig("images/real/general/analFinger.gif");
			writeText("Jean is lying down on her bed, her fingers slowly teasing her sensitive asshole while she enjoys her latest guilty pleasure.");
			writeSpeech("sister", "", "I know I shouldn't feel this way. This is so wrong...");
			writeText("She couldn't believe her luck when she'd found them. A pair of your underwear with a big, fat, fresh load sitting on top of them. With every breath she felt more and more drunk.");
			writeSpeech("sister", "", "Oooooh god I'm so fucked up. I'm snorting my brother's sperm while getting off with my ass~.");
			writeText("Any normal sister would be disgusted at the mere thought, so why did it make her so... Hungry?");
			writeText("She lifted the cloth closer to her face, careful not to spill the still-wet load. She held her nose inches from her brother's sperm and took a deep breath.");
			writeSpeech("sister", "", "OOOOOhhhhh fuck...");
			writeText("She could feel her ass clench and unclench around her fingers. She let out a pitiful whimper as she raised the cloth, ready to start slurping the semen off of it, but you took this moment to interrupt.");
			writeSpeech("player", "", "sisterF? What the fuck are you doing?");
			writeText("Her body jumps on the spot in surprise as her eyes meet yours. She could react with shock and anger, but that wouldn't work with your underwear still in her hand.");
			writeText("So instead she starts to panic.");
			writeSpeech("sister", "", "It's not- I didn't-!");
			writeSpeech("player", "", "Are those mine?");
			writeText("Tears are starting to form in her eyes as she desperately searches for a way to explain this. Of course this is all an act on your part. You'd been messing with her head all day. That didn't mean you couldn't have fun with this though.");
			writeSpeech("sister", "", "I, I'm so sorry! I didn't-");
			writeText("You start to walk towards her and take the underwear from her hand.");
			writeSpeech("player", "", "You point your ass towards the door and leave it unlocked while you suck on this. You want this, don't you?");
			writeText("She tries to respond before you put the underwear over her face, smearing the jizz onto her. In her panic she takes a deep breath. Her body arches as your spunk fills her nostrils and lungs. Her body shakes in a hands-free orgasm just from snorting your jizz.");
			writeText("Once she's finished her little bitch-gasm, you roll her over and position yourself over her already-lubed ass.");
			writeSpeech("sister", "", "Wha-*cough* What are you doing?");
			writeSpeech("player", "", "Giving you what you wanted. What, do you want me to stop?");
			writeText("Her silence is all you need.");
			writeBig("images/real/general/anal9.gif");
			writeSpeech("sister", "", "OH GOD! FUCK~!");
			writeText("You stuff the underwear into her mouth to shut her up and you start viciously pounding her ass.");
			writeSpeech("player", "", "Walking around in those pants all day is one thing. Stealing my jizz rags, though? I thought you had at least some self respect.");
			writeText("She responds with a deep groan as she pushes back into you.");
			writeText("And after only a few minutes of pounding a particularly powerful thrust pushes her over the limit.");
			writeBig("images/real/general/anal8.gif");
			writeSpeech("player", "", "Is this what you wanted? You want me to stop using my underwear as jizz-rags and just start using your ass instead?");
			writeBig("images/real/general/analSquirt1.gif");
			writeText("She nods her head up and down as you start pumping jizz into her colon while she squirts all over her bed.");
			writeText("Once you finish, you pull out and rub yourself clearn with her face and start walking out.");
			writeSpeech("player", "", "Clean yourself up, it's almost dinner. I might need to use you again later, jizz-mop.");
			break;
		}
		case "sister4A": {
			writeText("You leave out the plug for her to find. It takes a while to work, so you'll find some way to pass the time.");
			writeText("...");
			writeSpeech("player", "", "Hey, have you seen sisterF anywhere?");
			writeSpeech("mom", "", "I think she took her bike out for a ride. She seemed excited to get outside for once.");
			writeSpeech("player", "", "Huh, that's kind of weird. Thanks.");
			writeText("She usually doesn't go outside unless she needs to these days. You go back up to her room and find that the plug is gone, so she definitely saw and took it.");
			writeText("Out of the window you can see her arriving, so you head out to greet her.");
			writeText("She's flush and beaming, even though she hasn't even worked up a sweat.");
			writeSpeech("player", "", "You have a nice ride?");
			writeText("Instead of answering she looks from side to side to make sure no one else is watching, then turns around and bends over.");
			writeBig("images/real/general/sister4-1.gif");
			writeSpeech("sister", "", "I didn't want to just sit in my room all day~<br>At first it was big enough to give me a little bump on my belly, but I think it's shrunk now.");
			writeText("The sight of the plug in her asshole is open for all to see.");
			writeText("You aren't interested in sharing it though, or in fucking on the sidewalk, so the two of you head back inside.");
			writeText("Your mom asks how sisterF's ride went, but a slap on sisterF's ass gets her back to hurrying into her room instead of answering.");
			writeText("...");
			writeSpeech("player", "", "Take it out and lift your ass up.");
			writeText("You shut the door behind you as you give the order.");
			writeBig("images/real/general/sister4-2.gif");
			writeSpeech("sister", "", "Oooh god, it's so sensitive now...");
			writeText("She starts teasing herself with the plug, drawing little circles on her rim before she thrusts the tip in and out.");
			writeSpeech("sister", "", "Hoooly shit... I bet my brain would break if you fucked my ass right now...<br>Ah! So rou-Mphh!");
			writeText("You push her down and grab the plug from her hand and shove it into her mouth. It isn't meant for oral use, but you don't give a fuck right now.");
			writeBig("images/real/general/sister4-3.gif");
			writeSpeech("sister", "", "MMPPH!");
			writeText("Her asshole is plump and smooth now thanks to the toy, enough that you can thrust in and out without any lube. She's enjoying this too, probably a lot more than she should as she sucks on the plug.");
			writeText("At this point her ass has been remodeled into a hole made for your pleasure, you can feel every squeeze as you slam your hips against her cheeks.");
			writeSpeech("player", "", "Fucking tease, take it!");
			writeText("With one more big slam you start to cum, still roughly fucking her as you do.");
			writeText("You pull the plug out of her mouth with a *POP!*");
			writeText("It really wasn't meant for this sort of use. Her lips have been plumped up and she's drooling, her mind probably gone from the brutal assfuck she just got.");
			writeText("You toss the plug into the trash, ready for round two even if she isn't.");
			break;
		}
		case "sister4B": {
			writeText("You hum loudly as you enter the room as though you were a king's procession, and drop the massive horsecock dildo onto the foot of sisterF's bed.");
			writeSpeech("player", "", "Sis, meet your new best friend.");
			writeText("She pulls her ass off the dildo stuck to the wall. At this point she probably either sleeps with the dildo inside of her, or she keeps it stuck to the bedframe a few inches above where her head would be at night.");
			writeText("She hefts up the horsecock, unable to wrap her fingers around it, and swallows dryly.");
			writeSpeech("sister", "", "I... Uh...");
			writeText("You toss her the taffy packet.");
			writeSpeech("player", "", "This'll help you stretch to fit it, no risk of tearing.");
			writeText("She takes a moment to comprehend, but quickly puts down the dildo and tears open the packaging.");
			writeText("At this point her ass is so hungry she was considering impaling herself on the dildo even though it was thicker than her calf.");
			writeSpeech("sister", "", "How long does it take to kick in?");
			writeSpeech("player", "", "Dunno. Give it a minute at least.");
			writeText("...");
			writeText("The credits roll on an episode of Tokyo Pop, twenty minutes have passed. sisterF straightens out, noting that her body is a lot more flexible than before.");
			writeText("With a thud you plant the horsecock onto the floor, content to just watch this time.");
			writeSpeech("player", "", "Y'know, there's something pretty satisfying about just watching. It's hot in a different way when I'm seeing things without my dick in something.");
			writeSpeech("sister", "", "Weirdo.");
			writeText("She giggles, then straddles the over-a-foot-long horsecock.");
			writeSpeech("sister", "", "Nnnngh~");
			writeText("You can see the deformation of her abdoment before the dildo is even halfway inside of her. At this point, she might as well be fucking herself on a baseball bat.");
			writeSpeech("sister", "", "Gghhh, fuck this is huge.");
			writeText("You reach out and rub the distension, enjoying her quivering as you massage the bulge of the horsecock.");
			writeText("She's panting now, barely adjusted to the massive intrusion remodeling her asshole and rectum.");
			writeText("Slowly sliding down, she bottoms out. The dick is so long it needs to bend near the top to conform to her intestines.");
			writeSpeech("sister", "", "Fuck... I can fucking taste it, holy shit.");
			writeText("She sounds like she's already on the edge as she rubs the bulge only a few inches below her ribcage, before she starts standing back up off of it.");
			writeSpeech("sister", "", "Nnnnngh~!");
			writeText("You can see her pussy clench as she has her first of many orgasm of the day, all of which will be caused by a massive piece of plastic horse dick ruining her asshole.");
			writeText("...");
			writeBig("images/real/general/sister5-1.gif");
			writeSpeech("sister", "", "Fuck, fuck, fuck~!");
			writeText("You're intently watching as her pussy begins to spasm for the twelfth time in the last hour. It's a slow burn of pleasure, not the quick pounding she's used to.");
			writeText("She'll have time to adjust soon enough. Once her legs give out, you'll be helping her learn to adjust to a faster pace. She won't be walking for the rest of the day, that's for sure. ");
			break;
		}
		case "sister5A": {
			writeText("You set down your fork as you finish your meal.");
			writeSpeech("player", "", "Ah, damn mom, that was fantastic.");
			writeText("You lean back in your chair to peek under the table as you say this.");
			writeBig("images/real/general/sister6-1.gif");
			writeText("There's a soft smooching sound as your sister kisses the ridge of your dick. She lets out a small whine as mom tries to push her away to take the head for herself.");
			writeText("...");
			writeText("After dinner the three of you began fucking like rabbits all over the house. Moving between rooms, switching between who got the dick and who had to settle for tongues and fingers.");
			writeSpeech("player", "", "Fuck, I'm cumming again! Take it, slut!");
			writeText("You give a big thrust and slam against mom's asscheeks while she and sisterF sixty-nine.");
			writeText("Once you're finished cumming, you pull out and let your jizz drip down into sisterF's waiting mouth.");
			writeBig("images/real/general/sister6-2.gif");
			writeText("Today has been a good day.");
			break;
		}
		case "sister5B": {
			writeText("You take a seat on her bed and pull out a pop rock.");
			writeSpeech("player", "", "This is a very special candy. I'm going to eat this, and then you, me, and mom are going to be playing a little game.");
			writeText("...");
			writeBig("images/real/general/handjob6.gif");
			writeText("You pump our your third spurt of cum since you started, it jumps up before falling back down into sisterF's hand.");
			writeSpeech("sister", "", "You like that, you p-pathetic quickshot?");
			writeText("She's garbage at this, but she's certainly trying. With a candy that induces a hair trigger, you thought this would be the perfect opportunity to have them turn the tables for once.");
			writeText("But Jean is barely keeping the act together, and mom has been in a daze since your first orgasm. She's doing everything she can not to lick it up off sisterF's hand, or even lick up the cum that landed on the floor.");
			writeSpeech("player", "", "I'm getting close again.");
			writeSpeech("sister", "", "O-oh yeah? My hand is all it takes for you to... For you to start spurting cum out of your fat dick? You really are-");
			writeText("Interrupting her, mom pushes jean aside.");
			writeBig("images/real/general/sister7-2.gif");
			writeSpeech("sister", "", "Wha- Mom, what the fuck? I wanted that!");
			writeText("sisterF's too slow, and can only watch as you pump a load into your mom's mouth. Jean grabs mom by the hair and pulls her off, before locking lips to try and get some of the jizz she hasn't swallowed yet.");
			writeBig("images/real/general/sister7-3.gif");
			writeText("The sight of them mashing their lips together is almost enough to push you over the edge again.");
			break;
		}
		case "friend2A": {
			writeText("The two of you met at an outdoor cafe this time, you didn't want chefF getting pulled into any shenanigans for now.");
			writeSpeech("friend", "", "Alright, enough with the funny biz. What's the 'cool thing' you wanted to show me.");
			writeSpeech("player", "", "Alright, check it out.");
			writeText("You bring up the phone with the app loaded and show it to her.");
			writeSpeech("player", "", "This is the Human Alteration App. I won it in a thing, it lets me mess with people's heads and bodies.");
			writeSpeech("friend", "", "Like one of those hypnosis things? I call bullshit, it does look kinda cool though.");
			writeSpeech("player", "", "I actually spent a couple of hours working on it last night. I didn't want to mess with you, so you can see its history, but I made it so that you can't physically use the app to prove it. Try touching it.");
			writeText("friendF is skeptical, but reaches out to touch it before stopping.");
			writeSpeech("friend", "", "Actually, I don't want to...");
			writeText("It seems like people altered by the app actually rationalize it in their heads. You'll need to bust out some bigger guns.");
			writeSpeech("player", "", "No worries. Check this out then.");
			writeText("You look around and see a woman with a large sunhat sitting at another table. One quick change of her 'love of hats' variable from 63 to 0, and she's violently thrown her expensive looking headwear to the ground. After looking around sheepishly for a second, she picks up her hat gingerly and places it into a trashcan like it was a dead animal.");
			writeSpeech("friend", "", "Holy shit... That wasn't like an actress? Or like a flash mob?");
			writeSpeech("player", "", "Nope. All me.");
			writeText("She seems genuinely impressed for a second before the color drains from her face as she seems to be contemplating something.");
			writeSpeech("friend", "", "The app doesn't have like a 'details' section, does it? Like where it tells you things about a person? Like their name and stuff?");
			writeSpeech("player", "", "It can. It's a command line kinda thing, I type in 'print name' and I could learn their name if I wanted. I haven't done that with you or anything like that.");
			writeText("She visibly calms down at this.");
			writeSpeech("friend", "", "Thanks. Listen, tomorrow, or whenever, I wanna meet up again to tell you something. I figure fair's fair, you know? Don't look it up before then, okay? Please?");
			writeText("You agree, and she seems happy about this. You go to pay for the drinks when she stops you.");
			writeSpeech("friend", "", "Before we stop, I was wondering if you could do <i>other</i> sorts of things with the app, actually.");
			writeSpeech("player", "", "Did you have something in mind.");
			writeText("She subtly points over to the woman who'd thrown away her hat, and the man sitting a table over.");
			writeText("...");
			writeBig("images/real/general/anal10.gif");
			writeSpeech("player", "", "Anal, huh?");
			writeSpeech("friend", "", "Not a fan?");
			writeSpeech("player", "", "Big fan, actually. I just didn't think she'd go straight for the ass. I didn't think you'd be into this sort of thing either.");
			writeSpeech("friend", "", "There are a lot of things you don't know about me yet.");
			writeText("The two of you have gotten a lot closer watching these two newly-made exhibitionists maul each other. Pumping up their libidos was enough to get them to agree to letting you two watch, but anal was the woman's idea.");
			writeText("The woman is screaming obscenities about how hot it is that she's exposing herself as her asshole gets plowed. Although the race element makes it a little weird to watch as she swears her devotion to this big black cock.");
			writeSpeech("player", "", "I can actually change her sensitivities too. Check it out.");
			writeText("A single command later and...");
			writeBig("images/real/general/analSquirt3.gif");
			writeText("friendF watches intently, stroking herself through her skirt as the woman starts quivering from the massive dick remodeling her shitpipe.");
			writeSpeech("friend", "", "I- We should leave. I need to get home.");
			writeSpeech("player", "", "Yeah we should probably leave before the cops pick these two up for indecent exposure.");
			writeText("...");
			writeSpeech("friend", "", "Okay, I'll see you again soon. Remember what you promised, okay?");
			writeSpeech("player", "", "No problem. I'll see you at school.");
			break;
		}
		case "friend2B": {
			writeSpeech("friend", "", "playerF! Hi! Hey, cmon. I wanna take you to my place.");
			writeText("...");
			writeText("You thought there'd be more build up to this sort of situation, but no. Here you are, in your crush's room. You take a seat on the soft pink comforter resting atop her bed. She's gone to the bathroom for the moment.");
			if (data.story.currentScene != "gallery") {
				writeTransition("school", "If you wanted to, you could bail out right now.");
			}
			writeText("Before you even have time to snoop around her room though, she's back.");
			writeSpeech("friend", "", "Hey. Thanks for waiting.");
			writeText("She's clearly nervous.");
			writeSpeech("player", "", "It's no problem. So what's up? What did you want to show me?");
			writeText("She takes a deep breath and slides down her skirt.");
			writeSpeech("friend", "", "The truth is that I have...");
			writeBig("images/real/general/sissy10.gif");
			writeSpeech("friend", "", "A penis.");
			writeText("There's a moment of silence, you can see that her eyes are a little watery.");
			writeSpeech("player", "", "Okay.");
			writeText("The painful tension disperses in a moment, replaced by an awkward silence.");
			writeSpeech("friend", "", "Okay? That's it? No freaking out?");
			writeSpeech("player", "", "Nope. I think you're beautiful. You having junk doesn't change that.");
			writeText("She sniffles as she rubs a small tear away.");
			writeSpeech("friend", "", "Of course! Right. Of course it doesn't change that.");
			writeSpeech("player", "", "Are you alright?");
			writeSpeech("friend", "", "Yeah. It's just that last time I did this... It didn't go as well.");
			writeText("You take her by the hand to comfort her.");
			writeSpeech("friend", "", "Okay, you next.");
			writeSpeech("player", "", "What?");
			writeSpeech("friend", "", "I've shown you mine, now you show me yours. Don't start acting like a prude now after what you did with that woman at the cafe.");
			writeText("She slides down your clothes and takes a moment to admire whats underneath.");
			if (data.story.bodytype == 2) {
				writeSpeech("friend", "", "Oh my god, this is the cutest thing I've ever seen in my life!");
				writeText("She leans in and nuzzles against it lovingly.");
				writeSpeech("friend", "", "And your skin is so smooth too... God, I like it even more than mine.");
				writeSpeech("player", "", "You like it now? Check this out.");
				writeText("She watches with awe as you relax, allowing your cock to grow eight times its previous size.");
			}
			writeSpeech("friend", "", "Holy crap... It's amazing.");
			writeBig("images/real/general/deepthroatStart.gif");
			writeText("Her hands and lips massage and kiss your penis. Her technique is incredible, and you're putty in her hands right away. She leans away from it, drawing you closer to a quick edge with her handjob.");
			writeSpeech("friend", "", "You and I are gonna have a lot of fun with this big boy. But for now, I want you to cum.");
			writeText("One last kiss on the head of your dick has your legs quivering.");
			writeBig("images/real/general/facial1.gif");
			writeText("You ride the orgasmic high as it comes, but it's over sooner than you'd like. After it finishes friendF starts wiping herself off.");
			writeSpeech("friend", "", "You have a good time? I'm gonna go clean myself off. Thanks for not being... Judgy.");
			writeSpeech("player", "", "It's no problem. Can I hang around? I'd like to get the chance to know you better.");
			writeSpeech("friend", "", "Sure, that sounds great.");
			break;
		}
		case "friend3": {
			writeText("The two of you chat for a bit, but the real goal of the day for both of you is to head off to her place right away.");
			writeText("...");
			writeSpeech("player", "", "So, you ready?");
			writeSpeech("friend", "", "Yeah. I've just never been super into anal, y'know?");
			writeSpeech("player", "", "Hey don't worry. At the very least this'll make sure you have a great time.");
			writeText("She nods as she unwraps the caramel melt, before popping it into her mouth and munching.");
			writeSpeech("friend", "", "...I's hoowey.");
			writeSpeech("player", "", "It says it should kick in immediately.");
			writeText("She swallows, and lifts a hand to her throat before swallowing again.");
			writeSpeech("friend", "", "Ho-ho boy.");
			writeText("She's taking slow, deep breaths through mouth and squirming, rubbing her legs together.");
			writeSpeech("player", "", "Here, lemme see.");
			writeText("You hold up a finger and she takes it into her mouth. You start rubbing it against against the back of her throat, but instead of gagging, she starts moaning, and you can see her erection tent her skirt as she begins to suck on your digit.");
			writeSpeech("player", "", "Alright, time for training to begin.");
			writeText("...");
			writeBig("images/real/general/friend3-1.gif");
			writeText("Fifteen minutes in and there's no trace of a dislike of anal. If anything, there's a strong hatred of breathing as she starts taking down your cock again.");
			writeText("You've had to grab her by the hair a few times now, not to thrust, but to keep her from choking herself on your dick. Each time you push her back, she slides down onto her dildo.");
			writeText("There aren't any tears or running mascara, but she'll probably still be tasting dick on her tongue tomorrow morning. You let go once she's taken another breath and she resumes fucking her face on your cock.");
			writeBig("images/real/general/friend3-2.gif");
			writeText("The dildo isn't even necessary. She's squirting out another load from her untouched dick almost completely from the feeling of the throatfucking.");
			writeText("The candy is supposed to have a mild residual effect after it wears off, so you can probably mark this down as a success.");
			break;
		}
		case "friend4": {
			writeText("The two of you chat for a while before you head to her place for the evening.");
			writeText("...");
			writeText("*CLINK*");
			writeText("The two glasses tap against eachother, and you each take a drink of the dark red fluid.");
			writeText("A lovely day has come to a close, and you've enjoyed a lovely meal friendF prepared. She downs her glass, giving a little shiver of pleasure as she swallows thanks to the candy from last time.");
			writeSpeech("player", "", "So, is that really wine you're drinking? You said you were going to chicken out of drinking real stuff.");
			writeSpeech("friend", "", "Ehehe, that's a secret, butt buddy.");
			writeText("It isn't even a bit funny, but you still choke a little on your drink anyways.");
			writeSpeech("player", "", "That's ridiculous. <br>You're like a totally different person outside if class.");
			writeSpeech("friend", "", "You are too. You should speak up more, you could probably make friends with everybody in class if you just said hi. <br>Alright, dinner done, drinks finished. Come on.");
			writeText("She pulls you away from the table into her room and plops down onto the bed.");
			writeSpeech("friend", "", "Alright, work your magic. Show me the life of a buttslut!");
			writeText("It isn't as quick as she hopes, luckily you did most if the heavy lifting last night. She relaxes patiently on the bed as you make dozens of tweaks. A few of them are more to test your limits, and she squeaks when you push the sensitivity of her rim to 100 for a second.");
			writeText("You set the phone aside, finished, and grab a handful off her asscheek.");
			writeSpeech("friend", "", "Ah! Oh wow, you really did a thorough job, huh?");
			writeSpeech("player", "", "Told you I was a fan of anal.");
			writeText("You press the head of your dick against her now slick, permanently-lubed butthole.");
			writeSpeech("player", "", "You ready?");
			writeText("She wiggles invitingly in response.");
			writeSpeech("friend", "", "Fuck me.");
			writeText("...");
			writeBig("images/real/general/sissy9.gif");
			writeBig("images/real/general/friend4-2.gif");
			writeText("The changes have impressive results, and will be as permanent as you want them to be. As the two of you have fun into the evening, you feel like a new chapter of your life has begun.");
			break;
		}
		case "friend5": {
			writeText("The two of you talk for a moment, not your usual afternoon chats. This time a plan is being put into motion.");
			writeText("...");
			writeText("Riley guides Sean into the room and takes a seat on the bed.");
			writeSpeech("friend", "", "So, you gonna take your pants off or what?");
			writeSpeech("Sean", "none", "Damn, you are forward today. Ready for some real... Ugh.");
			writeText("He stumbles, he's been off balance since friendF suddenly started picking up on his texts a few hours ago.");
			writeText("Dizzy? Here, try this.");
			writeText("Riley passes him a piece of taffy, and Sean eats it without thinking.");
			writeSpeech("Sean", "none", "<i>Whoa, everything's feeling... Taller? And when did my skin get so smooth?</i>");
			writeText("He's mostly on autopilot through whatever is fogging up his brain, not even registering friendF tapping on the wall.");
			writeText("Sean struggles, he's having a much harder time getting his pants down past his ass than usual, and his hips seem almost... Wider? ");
			writeSpeech("Sean", "none", "Hey uh, can you give me a hand real quick?");
			writeText("His attention is quickly drawn away as you open the door and enter the room.");
			if (data.story.bodytype == 1) {
				writeSpeech("Sean", "none", "Wha- What the fuck? Is this your boyfriend?");
				writeSpeech("friend", "", "God damnit, hurry your ass up.");
				writeText("friendF grabs Seans pants and pulls them down past his feminine curves, you can hear something tear as she does. ");
			}
			else {
				writeSpeech("Sean", "none", "Oh, uh... Hey. You here to join in? Well, I hope you two think you're ready for some of <b>this</b>!");
				writeText("With a hard pull, he manages to force his pants down, you can hear them tearing as he does.");
			}
			writeText("His tiny dick hangs exposed to the three of you, him with a look of shock, friendF having a giggle, and you give a look of satisfaction at a job well done.");
			writeSpeech("Sean", "none", "Wha... What the fuck is going on? What kind of games are the two of you playing?");
			writeSpeech("friend", "", "So what's the plan playerF? You wanna take him, or can I?");
			addendum = true;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="writeAddendum('friend5A')">
					You go ahead
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="writeAddendum('friend5B')">
					I'll take him
				</p>
			`;
			break;
		}
		case "teacher1": {
			writeText("You walk up to teacherF's desk after everyone else has left. She pretends like she doesn't notice you, trying not to bother you in any way.");
			writeSpeech("player", "", "It's fine, I'm not busy right now.");
			writeText("And just like that her switch flips.");
			writeSpeech("teacher", "", "Very good then, young man. Now, we need to take a moment to discuss your grades. I'm afraid that-");
			writeSpeech("player", "", "No, we don't. You decided that because of that extra credit assignment I did last week, that I'd be getting an 100% on this class even if I don't do any other work.");
			writeText("She pauses in shock for a moment, obviously not remembering this.");
			writeSpeech("teacher", "", "I... I may have said that. But maybe we should reconsider. Passing without-");
			writeSpeech("player", "", "You aren't going back on your word, are you? That could seriously damage my trust in you as a teacher.");
			writeSpeech("teacher", "", "No, no, of course not. <br>Alright, so what was the extra credit work again? I can't find it in my folders.");
			writeSpeech("player", "", "It was a health class thing. You wanted proof that sperm improved the softness and youthfulness of skin, so we agreed that we'd test it here in class.");
			writeText("You're obviously pushing your limits with this one, but her reaction clearly makes it worth it. She believes she remembers everything you're saying, but it isn't changing her mind about things now. The idea of that is just as revolting as it would be on any other day.");
			writeSpeech("teacher", "", "Now I- I don't- I'm having some second thoughts about that actually. Maybe instead we could-");
			writeSpeech("player", "", "No. You said we'd go through with this or I'd tell the principle about how you came up with the idea to turn class into a bukkake hour.");
			writeText("That shuts her up. She obviously feels like she's in deep water now.");
			writeSpeech("teacher", "", "Fine. Fine. Okay. Alright so how did we plan to do this? Look in the library for research papers? Did you bring a container?");
			writeSpeech("player", "", "No, you said we should try it directly, so that the semen didn't dry up before it went on your skin. You even said you'd give me a titjob! I think I should just go tell the-");
			writeSpeech("teacher", "", "No! No, of course I remember now. Just... Just come over here.");
			writeText("She quickly pulls down her dress, a pained expression on her face as she realizes she's exposing herself to a student. You take advantage of the opportunity and slide your length free and put it between her tits.");
			writeSpeech("player", "", "Well? Go ahead then.");
			writeBig("images/real/general/titfuck3.gif");
			writeText("She wraps her breasts around your length and starts massaging your dick.");
			writeText("Despite her earlier feelings, she's actually not completely hating this as she'd expected to. With each deep thrust your cock presses against her mouth or nose, filling her brain with your scent.");
			writeSpeech("player", "", "Hot damn, that feels great. It feels good for you too, right?");
			writeSpeech("teacher", "", "It isn't all that... Nevermind, are you almost finished?");
			writeSpeech("player", "", "Come on, with that attitude? I'll never finish with you acting so grouchy.");
			writeText("That's completely a lie, her breasts feel absolutely fantastic. But having her get more into it wouldn't hurt.");
			writeSpeech("teacher", "", "I... I see. Alright, what should I do?");
			writeSpeech("player", "", "Put some heart into it! Tell me what you want, and show me how much you want it.");
			writeSpeech("teacher", "", "Okay. Please cum on my breasts, playerF.");
			writeBig("images/real/general/titfuck5.gif");
			writeSpeech("teacher", "", "Was that it?");
			writeSpeech("player", "", "Hell no, that was just precum. I know you can do better than that. You really need to reach into your inner slut and-");
			writeSpeech("teacher", "", "Please! I want you to paint my tits white! Pump your ball jelly onto my fat tits and my face until I can't see straight!");
			writeBig("images/real/general/titfuck6.gif");
			writeText("One, two, then a dozen more spurts onto her chest. She keeps pumping up and down through every blast until your ejaculation slows and you pull away from her. She's dazed as she collects herself, it seems your words had a real impact.");
			writeText("Once she snaps out of it, she starts rubbing it into her skin. She even takes a clump and starts massaging it into her face.");
			writeSpeech("teacher", "", "And the effects of this are what we need to record?");
			writeSpeech("player", "", "Yeah. Keep it on your face for the rest of the day, and you'll look younger by the morning.");
			writeSpeech("teacher", "", "All day? But my husband will-");
			writeSpeech("player", "", "Just tell him it's a new kind of sunscreen. Besides, I've been helping you with all this, and this is how you react?");
			writeSpeech("teacher", "", "Of course, I'm sorry. Thank you for your sperm, playerF.");
			writeSpeech("player", "", "No problem. I'll talk to you another day for the next part of the project.");
			writeText("And with that you slide your clothes back into place and leave for home.");
			break;
		}
		case "teacher2": {
			writeText("The other students have left already and teacherF notices you've stayed. She takes this to mean that you'll be experimenting with her again and drops to her knees before you without words. She even set a journal and pen aside to document the results this time.");
			writeText("While the idea of plastering her with a cum facemask again sounds fun, you'd actually like to keep pushing things farther.");
			writeSpeech("player", "", "I was reading this study the other day on health stuff, actually. They were talking about how semen is even healthier when swallowed than absorbed through the skin.");
			writeSpeech("teacher", "", "I... That's very interesting playerF. But I don't see how that's relevant to our research project.");
			writeSpeech("player", "", "Come on, I know you've wanted to try drinking it since our last experiment.");
			writeSpeech("teacher", "", "... How did you know that?");
			writeText("The most amazing part of bluffing in a situation like this is that even when you're wrong, you're totally on the money.");
			writeSpeech("player", "", "The look on your face even before I came. Even right now, before we've even started, you can't get your mind off of that scent. What it would taste like. How it would make you feel.");
			writeText("As you slide out of your clothes your erection bobs in the air. With every word her memories are being rewritten, and her mind unfocuses as you move it closer to her face.");
			writeSpeech("teacher", "", "We may be taking this too far... I'm your teacher, and...");
			writeSpeech("player", "", "There's no need to worry about that. You're just a junkie who needs her next fix. You can smell it already. You need it.");
			writeBig("images/real/general/balls2.gif");
			writeText("Something inside of her snaps. The wave of guilt weighing her down melted away as leaned forward and took a deep breath, inhaling a lungful of ball musk. Her hunger had taken her, and every inhale was enough to send electric shivers down her spine. She takes one of your balls in her mouth and sucks on it.");
			writeSpeech("teacher", "", "<i>Ooooh fuck yeah this is good... I could be fired for this... I don't care!</i>");
			writeBig("images/real/general/balls3.gif");
			writeText("You let her continue the worshipful tongue bath for a few moments before pulling away.");
			writeSpeech("teacher", "", "Wait, I wasn't do- *HRGL*");
			writeBig("images/real/general/deepthroat3.gif");
			writeSpeech("player", "", "Shut up. You're enough of a slut to get off on getting your throat pounded, so sit back and enjoy while I get myself off.");
			writeText("Her strained gagging and groans quickly fill the room as you fill her throat. You punch through the resistance and hammer away, enjoying the feeling of her throat clenching around your dickmeat.");
			writeText("Grabbing her by the throat, you massage your length with your hands as you continue to pound into her. Her eyes have lost their pleading look as they start to roll back.");
			writeSpeech("player", "", "Well? How does it feel? A cock-snorting whore like you gets off on this kind of thing right? Tell me how you feel, you don't need words to do that.");
			writeText("In response you hear a splash. A small trickle of her juices is quickly followed by teacherF squirting through her panties onto the floor.");
			writeSpeech("player", "", "Good girl.");
			writeText("You feel yourself getting close so you come to a stop while hilted inside her. While staring into her eyes you pull out your length with a slow *schloooooorp*. She coughs as she leans back against her desk trying to clear her lungs and desperately trying to breath.");
			writeSpeech("player", "", "Focus. I want you awake and ready to taste this.");
			writeText("You give her a slap before she wipes off her face with her shirt. You rub your hand along your dick pushing yourself over the edge above her open, cum-hungry mouth.");
			writeBig("images/real/general/deepthroatFinish3.gif");
			writeText("She keeps her mouth open as you dump your semen into it. When the first drop hits her tongue her body can't hold back a shake and she moans in pleasure.");
			writeText("You pour jet after jet of cum into her mouth. Once you finish her eyes are half lidded as she closes her mouth and swishes it around. She takes her first big swallow and squirts onto the floor again.");
			writeText("Once she's finished swallowing and ruining her panties, she opens her mouth to present it to you.");
			writeSpeech("player", "", "Very good, whore. You're gonna be a lot more accommodating next time, right? No more bitching and moaning about taking my jizz?");
			writeSpeech("teacher", "", "No master. I'll be good.");
			writeText("Her voice is weak and scratchy, but loyal. That should be enough for today.");
			break;
		}
		case "teacher3": {
			writeSpeech("teacher", "", "Alright. D-gngh... Daniel, do you have an answer?");
			writeText("The student needs to speak up to be heard over the sound of flesh slapping flesh.");
			writeSpeech("teacher", "", "Nngh... Very... Very good.");
			writeBig("images/real/general/teacher3-1.gif");
			writeSpeech("teacher", "", "Gnngh~...");
			writeText("A few of the students seem worried, one even asks if she's okay.");
			writeSpeech("teacher", "", "Cumming~!<br>...C-coming to to my senses, I mean. I'm fine.");
			writeText("She's barely able to stand, and needs to support herself on her desk as you rail her from behind.");
			writeText("Having had their perception changed by the app, not one realizes what's actually happening as you're fucking the teacher right in front of them.");
			writeText("From their perspective, teacherF is writhing on the spot, her clothes are disheveled, and she's grunting suggestively giving them all mixed feelings. ");
			writeSpeech("player", "", "How does it feel? Is being made into a bitch in front of your class making you cum?");
			writeBig("images/real/general/teacher3-3.gif");
			writeText("Her perception has been altered too, she can't hear or see you. Her clenching pussy is enough of an answer though.");
			writeText("One student comes up to the desk, asking if she spilt a water bottle.");
			writeSpeech("player", "", "Nope! She's squirting in front of all of you right onto the carpet!");
			writeSpeech("teacher", "", "Yes, my apologies Tommy. I think we'll need to dismiss class early today.");
			writeText("This sort of freedom is intoxicating. You can say or do anything you want, and nobody notices!");
			writeText("You slam teacherF down onto the desk tits-first and get back to getting off. The class awkwardly shambles out of the room as she starts to lose control of her voice.");
			writeText("You figure you can get a full day of fun out of this bit before you get bored.");
			writeText("...");
			writeBig("images/real/general/teacher3-2.gif");
			writeSpeech("teacher", "", "Oh god, I'm cumming again~!");
			writeText("There's a bang at the door before the principle forces his way in. He's confused at the situation, unable to see or hear you, but he's pretty pissed that teacherF has been broadcasting her moans over the intercom.");
			writeSpeech("teacher", "", "I'm sorry! I don't know what's happening!");
			writeText("Alright, this is more trouble than it's worth. Once you're finished, you pull out of teacherF and leave her lying on the desk. You easily walk past the principle, who is screaming bloody murder about firing her.");
			writeText("She's been a bitch to you, but you actually feel bad for a moment. She's facing joblessness, maybe even homelessness. She could use at least one break.");
			writeText("So you turn the app on the principle, crank up his lust and infidelity, and walk out the door.");
			break;
		}
		case "teacher4": {
			writeText("The car comes to a stop, and teacherF steps out. With her perception fucked up by the app again, she doesn't notice you as you exit the car with her.");
			writeText("Her house is pretty nice, decent lighting and the choice of color, while boring, isn't too bad.");
			writeText("You grab a quick snack from her fridge and start taking your clothes off. You're invisible to her and her husband, so no real downside to being naked.");
			writeText("Your dick is starting to harden. The cool air combined with the fact that you didn't use her during the car ride means that you haven't emptied your balls in at least half an hour.");
			writeText("...");
			writeBig("images/real/general/teacher4-1.gif");
			writeText("Fucking her all over her house proves to be a nice distraction as you wait for her husband to arrive. You've fucked her on all her couches, on the beds, and stuffed a dildo into her cunt like she was some erotic pincushion.");
			writeText("You hear the front door opening, and a disgruntled voice yell out 'I'm home!'");
			writeText("He walks into the living room smelling strongly of booze. teacherF isn't naked or covered with cum or anything, so he doesn't she's been having sex for the last hour, despite her disheveled clothes and unkempt hair.");
			writeSpeech("teacherF's Husband", "none", "Hey, I need another fifty to pay off my tab.");
			writeText("teacherF is slowly coming back to her senses. Her previously dreamy and relaxed expression is fading into a bitter, cynical one.");
			writeSpeech("teacher", "", "Get a job already and get paid a fifty. Or more. Spend it on booze all you want, but I'm not burning any more of my money on you.");
			writeSpeech("teacherF's Husband", "none", "Bitch! I asked nicely, and this is the thanks I get?");
			writeText("Oookay, this is awkward. You'd wanted to fuck teacherF in front of her husband, but they pretty clearly want eachother to go fuck themselves.");
			writeSpeech("teacher", "", "Nicely means please, thank you, or showing event the tiniest amount of respect for onc-");
			writeText("He slaps her, hard. Hard enough to knock her over, and then hits her again when she looks back up at him.");
			writeText("Welp, your boner is gone. teacherF is choking back sobs and her husband is off to rummage through the fridge, this really has been a mood killer.");
			writeText("You know, if you really think about it, maybe teacherF was such a bitch to you is because of her piece of shit husband treating her like trash.");
			writeText("It doesn't justify her behavior, but if that's the case then he's at fault too, so you're totally justified in fucking him up!");
			writeText("...");
			writeBig("images/real/general/teacher4-2.gif");
			writeText("His, or her tiny little dick spurts its load onto the floor. You'll probably give the order to lick it up later.");
			writeText("teacherF's 'husband' is now a perfect little dick pleaser, no longer even capable of lifting a finger against someone unless it's for their pleasure. You may have gone a little overboard, but hey, what cop is gonna charge you?");
			writeText("teacherF hasn't taken her eyes off the dildo show, even rubbing her clit as she watches the sissy she used to call her husband fuck himself on her dildo.");
			writeText("Yep, this is justice.");
			break;
		}
		case "teacher5": {
			writeText("The men's bathroom is empty at the moment, except for you and the schoolteacher currently sucking your cock. Her underwear and jewelry have been tossed into a small puddle of piss off in the corner.");
			writeBig("images/real/general/teacher5-1.gif");
			writeSpeech("player", "", "Ah, you're actually getting a lot better at this. Shame this is the last time I'll be fucking your mouth.");
			writeSpeech("teacher", "", "Mmph?!");
			writeText("There's an audible panic in the cock-garbled grunt.");
			writeSpeech("player", "", "Yep. From today on, I've decided you're a part time urinal. I'll still be fucking you during morning class, so don't skimp out on cleaning in the morning, but once I finish up you'll be reporting here every day as a piss drain for students.<br>Don't feel to bad. You've always wanted to be a student urinal! You've got the body of a meat toilet, at least.");
			writeText("She's started playing with herself as you speak, fantasies running through her mind of being treated as worse than trash.");
			writeSpeech("player", "", "Plus, you can get your sissy husband to work here as a urinal too.");
			writeText("The thought sends her over the edge on the spot. The idea of her little trap gargling piss while being fucked in the ass is just too much for her.");
			writeText("You grab her by the hair and hilt yourself as you begin to cum. She sputters and gags, but you don't let up until you're finished and she would never even think about pushing you away.");
			writeText("You unsheathe yourself from her throat, she swallows your load and opens her mouth to show you.");
			writeSpeech("player", "", "Good, now don't move.");
			writeBig("images/real/general/teacher5-2.gif");
			writeSpeech("player", "", "Consider this your first donation of the day.");
			writeText("She moans as she twiddles her clit while you piss into her mouth. Once her mouth is full she leans her head back so she can swallow while you coat her tits.");
			writeText("Once you've had your fun you use the app to make sure she'll be staying here until someone tells her the school is closing. She'll have a long day ahead of her, hopefully the janitor will let her out.");
			break;
		}
		case "chef1": {
			writeText("You wave over to chefF once you've taken a seat. The cafe is pretty busy today, but she still comes straight over to you");
			writeSpeech("chef", "", "playerF! Thank goodness. I'm really sorry to ask this, but-");
			writeSpeech("player", "", "Not enough hands, and you need help. Got it. You should really hire some help.");
			writeSpeech("chef", "", "I know. Thank you so much, I really need it this time.");
			writeText("...");
			writeText("The work day was long and exhausting, and by that you mean it was a busy hour and a half. The cafe has cleared out now since its almost closing time. chefF leans against a table for a second.");
			writeSpeech("chef", "", "Thank you again, playerF. Here, take this for your troubles.");
			writeSpecial("You earned $15!");
			writeSpeech("player", "", "It really was no problem. Hey, you look exhausted. How about I make you a cup before we close up?");
			writeSpeech("chef", "", "That really would be lovely, thank you.");
			writeText("You walk into the kitchen. As much as you really would love to make her a nice cup of coffee, you have plans to add something extra.");
			writeText("Getting out a cup you fill it with some coffee and take the package of creamer out of your bag. You dump half of it and add the other to the coffee to mask the taste you'll soon be adding.");
			writeBig("images/real/general/sissy11.gif");
			writeBig("images/real/general/deepthroatFinish1.gif");
			writeText("You start to rub yourself over the cup, your mind filled with visions of chefF eagerly drinking down your cum.");
			writeBig("images/real/general/cumshot1.gif");
			writeText("With the app's help, you're able to push yourself over the edge quickly and fire yourself off into the cup.");
			writeSpeech("chef", "", "playerF? Is everything okay in there?");
			writeSpeech("player", "", "Absolutely, be out in a second!");
			writeText("...");
			writeSpeech("chef", "", "Mmm, this is delicious! This might be the best I've ever had.");
			writeSpeech("player", "", "Really? I just added some homemade creamer. It shouldn't taste all that different.");
			writeSpeech("chef", "", "It tastes great, playerF. And I think I know what the real secret ingredient is.");
			writeSpeech("player", "", "Oh really? What is it?");
			writeSpeech("chef", "", "Love, of course!");
			writeText("She gives you a kiss on the cheek as she says this before she goes back to drinking.");
			writeSpeech("player", "", "Yeah, you're right. I added a lot of love to it.");
			break;
		}
		case "chef2": {
			writeText("You walk into the cafe, business as usual. The sign says 'closed' but the lights are still on, its a sign that chefF needs some time to relax from serving crowds. She's always made an exception for you and your sister though.");
			writeText("This time, however, things are different. The whole place is cluttered, far from the usual cozy atmosphere of the place. Chairs are misplaced, tables are dirty, it almost looks like the place hasn't been cleaned since yesterday. You see supplies piled on the kitchen counter through a window and move to check if someone's robbed the place.");
			writeText("What you find instead is chefF frantically searching cabinets and shelves, her hair a mess. She has a frantic expression that disappears the moment she sees you.");
			writeSpeech("chef", "", "playerF! Thank goodness. I don't know why, but I really need some more of that coffee you made the other day. I haven't been able to relax since then.");
			writeText("You're struck with a pang of guilt. She's so trusting of you that she doesn't suspect a thing. You may have set the dependency too high.");
			writeSpeech("player", "", "Of course, go take a seat and try to calm down, okay?");
			writeText("...");
			writeText("chefF takes the last sip of coffee. She's mellowed out now that she's gotten her 'fix'.");
			writeSpeech("chef", "", "Thank you again, I haven't been able to relax all day. I'm sure its all in my head, but this helps.");
			writeSpeech("player", "", "Look, chefF. I need to tell you something.");
			writeSpeech("chef", "", "Of course sweetie. You can tell me anything.");
			writeSpeech("player", "", "The secret ingredient is semen. I came in the coffee.");
			writeText("A cold silence blows over the both of you.");
			writeSpeech("chef", "", "That isn't funny, playerF");
			writeSpeech("player", "", "I'm not trying to tell a joke. I couldn't use creamer this time, so that was straight black coffee and cum.");
			writeText("Her face is tinged with worry as she realizes that she recognizes the salty taste in this batch.");
			writeSpeech("chef", "", "You're being disgusting. I think you should leave now.");
			writeSpeech("player", "", "Alright. I'm sorry.");
			writeText("You start to leave, but as you do you notice that chefF is staring at her empty cup.");
			writeSpeech("chef", "", "You... You weren't serious, were you?");
			writeSpeech("player", "", "I was, and I can prove it too.");
			writeText("...");
			writeText("Her eyes are lidded as she takes another breath. One whiff was all it took to convince her you were telling the truth.");
			writeSpeech("chef", "", "You won't... *sniff* <br> You won't tell anyone about this, will you?");
			writeSpeech("player", "", "I swear I'll take this to my grave.");
			writeSpeech("chef", "", "<i>He smells so good... I'm not some whore who just fucks men half her age, but... I really want more of that. If it could make me feel good when mixed with coffee, I wonder what it'll taste like undiluted.");
			writeText("She plants kiss after loving kiss on your smooth ballsack, before she moves up to the head. There's hesitation about sucking your cock, but all that disappears once she tastes that first drop of precum. She becomes ravenous, greedily sucking down your entire length in a moment.");
			writeBig("images/real/general/deepthroat2.gif");
			writeSpeech("player", "", "You can already taste it can't you? Just a little more and you'll have some more to drink.");
			writeText("You hammer away at her throat, every time you spurt more precum she moans causing vibrations down your shaft.");
			writeSpeech("player", "", "God, you are amazing at this!");
			writeText("It's clear from her eyes though that she has no response. At this point all that's on her mind is pleasuring your cock so that she can get a hit of jizz down her throat.");
			writeBig("images/real/general/deepthroat5.gif");
			writeSpeech("player", "", "Holy shit!");
			writeText("Spittle and drool leak from her mouth with every thrust, and soon you're ready to burst. You plunge balls-deep into her and start firing that precious drug into her stomach.");
			writeText("She isn't quiet about it either, her screams of pleasure muffled by the cock in her mouth.");
			writeText("Once you finish you pull out, the meaty *schlorp* sound tells you that she doesn't want to let go. You tug as she suckles on the head, and the tip comes out with a *pop!*");
			writeBig("images/real/general/deepthroatFinish4.gif");
			writeSpeech("player", "", "So, you believe me now?");
			writeText("She doesn't respond with words. Instead, she licks her lips and moves back in for round 2.");
			break;
		}
		case "chef3": {
			writeSpeech("Tired College Student", "none", "What the hell? Closed? In the middle of the day?<br>Man, come on, I need my coffee!");
			writeText("The man knocks on the glass door a few time, but no one answers.");
			writeSpeech("Tired College Student", "none", "Fuck... Guess nobody's here.");
			writeText("...");
			writeBig("images/real/general/chef3-1.gif");
			writeText("Meanwhile, inside the store chefF is a little distracted.");
			writeSpeech("player", "", "We've run through your entire supply of condoms, isn't it about time to stop?");
			writeSpeech("chef", "", "No! More~!");
			writeSpeech("player", "", "I'm going to cum inside of you unprotected, is that what you want?");
			writeSpeech("chef", "", "Yes! Pump me full of jizz until it starts squirting out of me!");
			writeSpeech("player", "", "Fine, take it then, slut!");
			writeSpeech("chef", "", "Nggh~! Yes yes yes!");
			writeText("...");
			writeBig("images/real/general/chef3-2.gif");
			writeSpeech("chef", "", "*Mwah*<br>Come on, just one more time?");
			writeSpeech("player", "", "Nnn, no, I can't...");
			writeSpeech("chef", "", "Please? It tastes so good, I just want one more.");
			writeSpeech("player", "", "Alright FINE!");
			writeText("You grab her by the hair and start jackhammering into her. Her eyes roll back into her head as glurking sounds fill the shop.");
			writeText("On the tables are the numerous used condoms, snacks for her to enjoy later. You really do spoil her too much.");
			break;
		}
		case "office1": {
			writeText("After a few minutes of waiting you see her enter the alleyway and quickly follow. Her pace is pretty quick so instead of chasing her down you call out to her.");
			writeSpeech("player", "", "Hey! " + "officeF! Come over here, I wanna fuck you!");
			writeSpeech("office", "", "Wha-... Excuse me?");
			writeText("She isn't shocked for very long. She quickly turns around and starts marching towards you, fire in her eyes.");
			writeSpeech("office", "", "The fuck did you just say to me?");
			writeSpeech("player", "", "I said that I wanted to fuck you. Ass or pussy?");
			writeSpeech("office", "", "You little shithead... Listen, kid. If I wanted a fuck, I'd find a real man, one with a real di-");
			writeText("She grabs at your junk as if trying to intimidate you, but stops mid-word as she feels what you're packing. Her hand rubs along it, trailing down its length.");
			writeSpeech("office", "", "A fucking huge dick... <br>I- I mean, I'd find a real man. Not some pervert who walks up to random women with an erection.");
			writeSpeech("player", "", "You aren't a random woman, you're a whore. It's pretty normal to approach fat-titted whores with an erection, isn't it?");
			writeSpeech("office", "", "Shut up!");
			writeText("She pushes you back and you stumble a little. You're about to respond when you realize she's gotten to her knees.");
			writeSpeech("office", "", "You little idiot, you think you can fool me with this? I know you've just got a banana stuffed in... Here.");
			writeSpeech("office", "", "Holy shit, it's huge... It's as big as my forearm... <br>I, I mean whatever! I know a trick when I see one. Put on some prosthetic, trick " +"officeF into thinking you have a huge, bitch-breaking cock in your pants.<br>But if you think I'm stupid enough to fall for this, you've got another thing cumming.");
			writeBig("images/real/general/deepthroatStart2.gif");
			writeSpeech("office", "", "<i>Mmmm...<br>Mmmmm... Mwah</i><br>This is a really good fake... It tastes just like a real dick. I need... I need to test it more! That's it. Any fake would hold up to some licking, let's see how it handles this!");
			writeBig("images/real/general/deepthroat7.gif");
			writeSpeech("office", "", "<i>Glurck glurck glurck<br>Hggh-HAAAAGH *COUGH* *COUGH*</i><br>You fucking asshole! You could've choked me! Why didn't you pull out?!");
			writeSpeech("player", "", "Do you believe it's real yet?");
			writeSpeech("office", "", "Fine, maybe it's a little real! Oh, I get it. A pervert like you just can't hold back, can he? You didn't pull out because a loser like you is a quick shot too, right? That's why you don't have women worshipping this fucking monster twenty-four seven, right?");
			writeText("She lays back on the dirty ground and spreads her legs, revealing she didn't bother with underwear today.");
			writeSpeech("office", "", "This is some grade-A pussy right here, a hundred times better than you're wimpy bitch hand. A single thrust in here, and a loser like you will-");
			writeBig("images/real/general/vaginal2.gif");
			writeSpeech("office", "", "NNNNNffff oh god, you're so big!");
			writeSpeech("player", "", "God damn, you talk a lot! How about I shut you up?");
			writeSpeech("office", "", "Ah, hah, hah... God this thing is amazing... How'd such an amazing dick get stuck on a twerp like yo-oooOOOUU~~~!");
			writeBig("images/real/general/vaginal1.gif");
			writeSpeech("player", "", "Is this what you wanted? Huh?");
			writeText("Her moans fill the alleyway. She looks up and tries to respond, but swoons the moment she sees the bump that appears every time you thrust into her.");
			writeSpeech("player", "", "I'm gonna come inside of you, are you ready?");
			writeSpeech("office", "", "Yes! Come inside me!");
			writeSpeech("player", "", "Scream for it whore!");
			writeSpeech("office", "", "AAAAH! God, yes! More! Fuck a baby into me!");
			writeBig("images/real/general/creampie2.gif");
			writeText("You make sure to pause between thrusts so that she can <b>feel</b> your cum filling her hole. Once you're finished, you pull out and let her leak onto the ground. Her eyes are lidded, and she doesn't seem as talkative as she did before.");
			writeSpeech("player", "", "I'll see you around here again, be ready.");
			break;
		}
		case "office2A": {
			writeText("You walk through the usual alleyway and see a familiar face trying to look like she wasn't waiting here for the last few minutes.");
			writeSpeech("office", "", "There you are! I'm going to make you pay for what you did to me!");
			writeText("She tries to get all up in your face to intimidate you.");
			writeSpeech("player", "", "Oh? And how are you going to do that?");
			writeText("She gives you a sly grin and backs off, before she starts stripping off her clothes.");
			writeSpeech("office", "", "I've been training myself for weeks, preparing myself for this. You aren't going to make a bitch out of me like last time.");
			writeText("...");
			writeSpeech("office", "", "Fuuuuuck yes~!");
			writeSpeech("player", "", "Isn't that the third time? What kind of hair trigger do you have?");
			writeSpeech("office", "", "Fuck, ngh. I don't get it. I practiced for weeks with my biggest toys, so why?");
			writeSpeech("player", "", "Ah, I get it now. You'd think as a modern business woman, you'd realize.");
			writeBig("images/real/general/office3-3.gif");
			writeSpeech("office", "", "NNNGH! YES!");
			writeSpeech("player", "", "Practical experience is the most important factor these days.");
			writeText("You give her a minute to soak in the afterglow before you start thrusting again.");
			writeText("...");
			writeText("By the time you're finished, she's a wreck. She's laying on the dirty ground, and after a few seconds of searching you grab a bit of cord from a small pile and tie her hand to a nearby bar.");
			writeSpeech("office", "", "Wh...Huh? Whazat?");
			writeSpeech("player", "", "You heard me. If you want to get me back, you need experience.");
			writeSpeech("office", "", "F-Fuck you! I'm gonna make it through this easy! And then I'm gonna get you and get my revenge!");
			writeText("You're already walking out of the alley as she yells to you, attracting a lot of attention to herself.");
			writeSpeech("office", "", "I'll turn the tables! You'll beg to be my bitch!");
			break;
		}
		case "office2B": {
			writeText("You walk through the alleyway, and officeF is right where you left her. You need to peer around to get a good look at her through the 'guests' she's entertaining.");
			writeBig("images/real/general/office3-1.gif");
			writeSpeech("office", "", "Nggh! Yes! Fuck me more until I break!");
			writeText("You decide to bow out until she's finished before you free her. It's a good thing she's immune to disease now, thanks to the app.");
			writeText("...");
			writeText("Once the crowd of rowdy men walk out of the alley, you walk back in.");
			writeBig("images/real/general/office3-2.gif");
			writeSpeech("office", "", "Nggggh...");
			writeText("Wordlessly, you free her from her bindings as she has another orgasm from the feeling of how gaped she is. Two dicks at once will do that to a whore.");
			writeText("She's babbling, maybe in a dream right now talking about how she'll be the one to run this town.");
			writeText("She's clearly lost her mind at this point. What she does from now on is her prerogative.");
			break;
		}
		case "office3": {
			writeText("You're walking through the alleyway when something neat catches your eye, and you stop to check it out.");
			writeSpeech("player", "", "Whoa, a gloryhole!");
			writeBig("images/real/general/office2-1.gif");
			writeText("There's several holes of varying sizes lined up side by side, with a familiar set of lips being visible through one.");
			writeText("This is the first time you've ever seen a real one, you almost want to use it.");
			writeText("That said, you can get head whenever you want. The idea of sticking your dick in a public cocksucker's mouth also doesn't seem very sanitary. You hear someone coming down the alleyway behind you, so you turn a corner and head to the other side of the hole for a better view.");
			writeText("...");
			writeBig("images/real/general/office4-2.gif");
			writeSpeech("office", "", "Glrk, glrk, glrk");
			writeText("officeF is taking these dicks like a champ, you knew it'd be a lot hotter watch from this side. Even while she's sucking on one, she's aligning another with her ass to pleasure both at once.");
			writeText("This must've taken actual construction work to make. Maybe she's been funneling her paycheck into installing a gloryhole fixture?");
			writeText("She doesn't even check to see if anyone's paying her before she starts taking stranger dick in her ass. Speaking of which...");
			writeSpeech("player", "", "Hey, you don't mind if you take a some cash from your donation box, yeah?");
			writeText("She lifts a middle finger at you, but is too occupied taking dick to stop you.");
			writeSpeech("player", "", "Hey, just keep fucking if it's fine.");
			writeText("You can actually see the look of indecisiveness in her eyes as she weighs going without a cock in her mouth for five seconds versus losing revenue. But once the dick she's sucking starts cumming, she's made her choice. She deepthroats the entire length while still making sure to please the cock in her ass with a nice assfuck rhythm.");
			writeText("You grab some bills and, after taking a few moments more to enjoy the show, decide to leave.");
			writeSpecial("You 'earned' $20!");
			if (data.story.currentScene != "gallery") {
				data.story.money +=20;
			}
			break;
		}
		case "exotic1": {
			writeSpeech("player", "", "Alright, so here's the money. What exactly is this special service?");
			writeSpeech("exotic", "", "Pants off, sit down. Now.");
			writeText("You inwardly shrug and follow her directions, removing your pants and taking a seat on a nearby couch.");
			writeSpeech("exotic", "", "Here. Read.");
			writeText("She passes you a small passport-sized notebook, inside is a scrawling mess of notes that appear to be on the human alteration app. It covers a variety of complicated subjects with dozens of examples. With this, your understanding of how to use the app should improve!");
			writeText("This is amazing, but why did you want me to-");
			writeBig("images/real/general/balls2.gif");
			writeText("exoticF's tongue runs along one of your balls before she takes it into her mouth, clearly savoring the flavor of it before she lets it out of her mouth with a *mwah!*");
			writeSpeech("exotic", "", "You have a fantastic set of balls. The app really helped you out, didn't it?");
			writeText("Wherever she touches you is left tingling like with electricity, and it is spreading throughout your cock.");
			writeSpeech("exotic", "", "But you aren't the only one who got some benefits from them.");
			writeBig("images/real/general/handjob7.gif");
			writeText("You don't think. You aren't capable of rational thought anymore as she starts slapping your cock against her hand. The sensations you're feeling are far from normal as you can feel your whole body quivering from just her touch.");
			writeSpeech("exotic", "", "You can mess with people's heads, even control them. But in here, I'm in control. Wanna see what else I can do?");
			writeText("You answer as best you can with a choked moan.");
			writeSpeech("exotic", "", "Good answer. Cum.");
			writeBig("images/real/general/handjob6.gif");
			writeText("She watches intently as she milks your cock. The sensations have reached their peak as your entire body feels like it's being electrocuted.");
			writeText("Once you're finished, she stands back up and licks the mess of her hands.");
			writeSpeech("exotic", "", "You don't taste too bad either. Maybe next time I'll let you be the one in control.");
			writeText("And just like that she's back on her chair as if nothing had even happen,");
			writeSpeech("exotic", "", "You gonna buy something else? This isn't a hotel.");
			break;
		}
		case "exotic2": {
			writeSpeech("player", "", "Alright, time for some revenge.");
			writeText("You slam the bills down on to the counter, and exoticF looks up from filing her nails. A smile quickly forms on her face.");
			writeText("...");
			writeSpeech("player", "", "O-ooouh!");
			writeBig("images/real/adriana/service1.gif");
			writeText("You certainly did your best, but after the third time you came your resolve began to waver.");
			writeText("Once you couldn't bring yourself to use her face anymore, she decided to start using you.");
			writeText("You feel a familiar, almost painful sensation as you spray another load onto your chest.");
			writeBig("images/real/general/adriana2-2.gif");
			writeSpeech("exotic", "", "Mmm. So, you give up yet?");
			writeText("It's time to admit your defeat. Some obstacles just aren't mean to be overcome.");
			break;
		}
		case "exotic3": {
			break;
		}
		case "clothes1": {
			writeHTML(`
				define danny = sp clothes; altName Danny; img scripts/gamefiles/profiles/clothes.jpg;
				t At exoticF's insistence, you decide to head straight to the neighboring store.
				t Checking the back of the clothing ticket, you find a QR code and a set of instructions. The basic gist of it is 'use this with the app and you'll get a much better shopping experience.' It's strange to say the least.
				player Hey, Danny? You know of anybody named exoticF?
				danny exoticF? Oh, that brunette? I see her around the shops when I'm opening, can't find out where she works though. She likes to play hard to get, ya know? Like she doesn't want some of Danny's D, if you know what I'm saying.
				player Ah, I think I understand now.
				t Before he has a chance to say anything, you scan the QR code and Danny nearly topples over where he stands.
				danny Whoooa, bro! Something's, ugh, something's happening to me! Not pain, but like, something! Call like, the fire brigade or someth-UUUeah-!
				t You've never actually seen the transformations happen directly. The transformation might get a little messy, so if you don't want to see it, you should probably <i><span class='color: red;' onclick='changeLocation(data.player.location)'>BAIL</span></i>.
				danny Bro! The hell are you standing there for? I-HRRRGH!
			`);
			writeText("He curls up into a ball on the spot. It's hard to make sense of his expression as he flops about on his seat.");
			writeText("Before your eyes, his body begins to change. His muscles become softer and his clothes twist atop them. His hair grows out, his entire facial structure changes, and all of this happens in the span of seconds.");
			writeText("After he... Or she, now, is finished with her transformation she slumps on the couch while breathing raggedly.");
			writeSpeech("clothes", "", "Whoa... God, I just had the weirdest-aaaaAAH!");
			writeText("She grasps at her crotch like it's burning, trying to rub out some strange sensation until she pulls down her underwear bottoms and exposes her angry-looking shaft. You can see her balls pulsating quickly, probably mirroring her heartbeat.");
			writeText("Before she can even touch it, the head of her cock explodes a thick mass of jizz out, way larger than any normal human could match.");
			writeText("And it doesn't stop there. It isn't so much firing loads as it is leaking a solid stream out of her length, and as she bucks her hips and groans, you can see her dick getting smaller and smaller before your eyes.");
			writeText("She'd started out pretty impressive, probably about eight inches, but now she's at less than half that. Her cum is getting clearer and thinner as this goes on.");
			writeSpeech("clothes", "", "Uuuugh! More! More! Guuuuuhd!");
			writeText("Her body's strength starts to give out as the stream starts to die out. She looks half conscious at best draped over the arm of her seat as her dick keeps leaking onto the floor.");
			writeText("It looks like her transformation is complete as her dicklette hangs barely two-inches down, her balls the size of small grapes. She'll have no problem passing for a woman now.");
			writeText("She lets out a little giggle as the last drop of cum sputters out of her dick, and seems content to soak in the afterglow.");
			writeText("...");
			writeText("After some time she came back to her senses and stood on shaky legs. She reintroduces herself as clothesF, for some reason.");
			writeSpeech("clothes", "", "Sorry mister, I got a bit distracted there. You know, I dunno why, but you seem like a trustworthy guy. Don't tell anybody about this, but we actually have a special catalog for special customers.");
			writeText("She leans into you and whispers into your ear.");
			writeSpeech("clothes", "", "And there are special benefits for good customers, if you know what I mean.");
			break;
		}
		case "clothes2": {
			writeText("She perks up as you hand her the bills and leafs through them for a moment.");
			writeSpeech("player", "", "So, how are we going to-");
			writeText("Before you can finish the second, she's stripping down.");
			writeSpeech("player", "", "Ah, just getting right to it.");
			writeSpeech("clothes", "", "Yes sir! Gotta give Mr. Customer his reward. Come on, get your pants off!");
			writeText("She's already on her knees, very enthusiastic about making sure you're satisfied.");
			if (data.player.body == "boi") {
				writeSpeech("clothes", "", "Oh wow! You're just like me!");
				writeText("She stands back up and presses her small length against yours.");
				writeSpeech("clothes", "", "Ah! This is really nice, but we'll need something more. Maybe I should call miss Adr-");
				writeText("You rub against her to shut her up, and before her eyes your length begins to grow to its erect size.");
				writeSpeech("clothes", "", "O-oh golly...");
				writeText("The feeling of your much larger shaft against hers has her fully erect and leaking. She licks her lips and you can see the hunger in her eyes as she looks up into yours.");
				writeText("She gets ready to kneel back down to get a taste, but you grab her by the hair and push her down onto a nearby table covered in cloth.");
				writeSpeech("player", "", "You're gonna regret underestimating me.");
				writeSpeech("clothes", "", "Oooh, I know I'm not supposed to go this far, but...");
				writeBig("images/real/general/gina2-1.gif");
				writeText("She bites her lips, before lifting her ass to present it to you.");
				writeText("You take a moment to appreciate her heart-shaped ass as she wiggles it invitingly, causing her tiny shaft to jiggle freely.");
				writeSpeech("clothes", "", "You'll play nice with me, right mister? Make it worth my while to bend the rules?");
				writeText("Her skin is unbelievably smooth and soft, especially her asshole. You might even be able to do this without lube. You get up behind her and decide to put this to the test.");
				writeBig("images/real/general/gina2-2.gif");
				writeSpeech("clothes", "", "A-aaah!");
				writeText("Her ass feels absolutely perfect around you as you thrust into her.");
				writeText("A few inches in, you can feel yourself bump into something soft.");
				writeSpeech("clothes", "", "NNFFF!");
				writeText("Every time you feel your cockhead touch it, she shivers and jerks in your grasp.");
				writeText("Realizing this must be her prostate, you decide to break in her welcoming bitch-button. As you push past it, smooshing it with your dick, her moans go high enough that her voice gives out.");
				writeText("You pull back as she quivers, and thrust back in hard. Her dangling dicklette squirts onto the sheet as she enjoys you slamming onto her 'ejaculate' button.");
				writeSpeech("player", "", "You and I are gonna have a lot of fun.");
				writeText("...");
				writeBig("images/real/general/sissy9.gif");
				writeText("The two of you fuck as the hours go by, even through several phonecalls she had to take.");
				writeText("After your second load, she got a call from someone you assume is important. She runs off to go fufil an order, her little 'clitty' still leaking as she makes her way to the other side of the store.");
			}
			else {
				writeSpeech("clothes", "", "Oh my gosh...");
				writeText("There's a look of 'Holy shit, look at this dick' in her eyes as you wave it in front of her face, before giving her a playful cockslap.");
				writeSpeech("clothes", "", "How big is this thing?");
				writeText("She lifts up her forearm to compare it to your shaft, giving it a few worshipful licks too for good measure.");
				writeSpeech("player", "", "You're a size queen, huh?");
				writeBig("images/real/general/gina2-3.gif");
				writeSpeech("clothes", "", "Mwah! Very much, sir! Miss exoticF got in touch with me after that weird thing from before. She promised to help stretch me out!");
				writeSpeech("player", "", "I think I'd like to see that.");
				writeSpeech("clothes", "", "Of course! Loyal cust-Hrrrm!");
				writeBig("images/real/general/gina2-4.gif");
				writeText("There's no gagging or hesitation as you push into her mouth. Her tongue goes to work as she's forced to swallow more of your massive shaft with every thrust.");
				writeText("With an expert level of skill, she manages to take in quick breaths between each thrust, but it isn't until she starts humming that you really feel yourself being pushed over the edge.");
				writeText("You grip her head with both hands and start slamming into her hard enough to mash her nose against your pelvis. She looks up and locks eyes with you as you start pumping jizz down her throat.");
				writeText("Teasing you with her tongue, she slides back pulling her length out from her throat.");
				writeBig("images/real/general/gina2-5.gif");
				writeText("There isn't even so much as a cough as she unsheathes herself. She swallows you cum like it's a glass of juice and starts cleaning you off with her tongue.");
				writeText("She doesn't answer, lowering a dollop of jizz on her fingers into her mouth while straightening out her clothes with her other hand.");
				writeText("She shoots you a wink, and once she's cleaned off her hand something catches her eye.");
				writeSpeech("clothes", "", "Oooh, this one would look great on you!");
				writeText("And just like that, she's switched gears.");
			}
			break;
		}
		case "skill1": {
			writeText("The exact nature of how to master the app is something that's been escaping you. Usage for even basic functions is actually pretty difficult.");
			writeText("It's time for a practical test where you can just focus on exploring possibilities. You have a sit down in a secluded spot where you can still see the area with foot traffic. No cameras, and no pedestrians to see you, you're free to start experimenting.");
			writeText("The best way to learn once you're already at an advanced level is to set a goal that seems out of reach to learn your limitations, so that's what you'll do.");
			writeText("...");
			writeText("Four hours later you've gone over every command the app can perform and you must have altered over sixty people by now. You've become faster and more efficient.");
			writeSpecial("Your skill with the app has improved to the level of 'master'!");
			writeText("And now, to enjoy the fruits of your research.");
			writeText("There's a young woman sitting atop a brick wall across the street from you. She's completely unaware that that her friend grew six cup sizes during their conversation.");
			writeText("It's time to get started. You pull a silicone sex toy out of your bag, and start working with the app.");
			writeText("After a long series of commands and calculations you press the head of your dick against the opening if the toy, and the woman across the street yelps in surprise.");
			writeBig("images/real/general/misc5-1.gif");
			writeText("She spreads her legs as her cunt is spread open by an invisible force, and soon a bulge is visible on her midsection as you hilt yourself in the toy.");
			writeText("She can't hide what's going on anymore, and you can hear her panicked, desperate moans over the murmurs of the confused crowd growing around her.");
			writeText("Some are just gawking, others are pretending not to notice. A police officer walks by as you begin fucking the toy with a fervor.");
			writeBig("images/real/general/misc5-2.gif");
			writeText("She loses control of herself and squirts hard enough to soak her pants in the throes of an orgasm.");
			writeText("You begin to cum into the toy, enjoying the knowledge that she can feel every spurt.");
			writeText("You aren't too cruel though. As you clean up and leave the scene you mess with the cop's mind and libido, making sure that the girl will get a chance to get out of this situation without a record.");
			writeText("...");
			writeText("That was a huge amount of work, you don't think you'll ever take on a task like that again.");
			writeText("Still, your abilities have improved astronomically. Options for corruption that were previously out of reach are now available to you.");
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