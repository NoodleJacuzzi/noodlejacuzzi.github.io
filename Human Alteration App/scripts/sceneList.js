function writeScene(scene) {
	switch(scene) {
		case "start" : {
			hidePrincess();
			updateBody(0);
			writeBig("scripts/gamefiles/logo.png");
			writeText("Human Alteration App is an adult game created by NoodleJacuuzi. You can find and keep up with all of my work at my master index here:<br>https://noodlejacuzzi.github.io/index.html");
			writeText("This game features a branching point after the prologue. One path uses pictures of real porn actresses, while the other primarily uses drawn images.");
			document.getElementById('output').innerHTML += `<p id="picturesDisabled" class="switch" onclick="disablePictures()">Pictures are currently enabled. Click here to disable them. Disabling pictures will only stop new pictures from appearing, it won't deleted the above picture, for example. As a warning, scenes will read quite strangely without images.</p>`;
			writeText("The dominant path features scenes of questionable consent, mind control, and hand-holding.");
			writeText("The submissive path features scenes of sissification, sexual depictions of shemale characters, sounding, and other more extreme fetishes.");
			writeText("Both routes feature optional watersports content, but there is no depiction of minors or scatological content.");
			writeText("As of version 0.6.5, Rainy DayZ and Princess Quest have been removed from the game. You can find them via my master index at https://noodlejacuzzi.github.io/index.html");
			writeText("As an additional note, you can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left there, you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("I've opened a patreon at https://www.patreon.com/noodlejacuzzi");
			writeText("I don't intend to gate content with it, so it's easy to ignore, but I would appreciate any support. If you don't have a dollar to spare, leaving your thoughts in the game's discussion forum, or spreading the word about the game are both helpful as well.");
			writeText("I'd love to hear your thoughts. If you don't want to bother with that, just leaving a like if you enjoyed the game is helpful enough.");
			writeTransition("prologue", "Start the game");
			writeTransition("altStart", "Alternate intro without actual incest");
			writeTransition("prologueSkip", "Skip the prologue, go straight to the dom/sub branching point");
			writeText("Here's a list of currently finished content:");
			writeBig("scripts/gamefiles/progress.jpg");
			writeText("As a final side note, I'd like to take a moment to gush about how fan-fucking-tastic the artist who's work I'm using for this game is. Their name is Aya, and you can find their patreon at https://www.patreon.com/aya_shobon");
			writeText("I'd intended to use many different 2d artists for this game, buy Aya's work is as incredible as it is diverse. I'd love to be able to financially support myself by making games like this some day, but until I can really deliver and prove myself, I'll keep doing this as a hobby. If you find yourself with some spare time though, I highly recommend checking them out and supporting them if you like their work.");
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
			incest = false;
			break;
		}
		case "characterCreation" : {
			if (imagesDisabled != true) {
				document.getElementById('output').innerHTML += `
					<img id ="selfBig" class="bigPicture" src="images/none.png">
					<br>
					<button type="button" onclick="changeBody(1)">Body Type 1</button>
					<button type="button" onclick="changeBody(2)">Body Type 2</button>
					<button type="button" onclick="changeBody(3)">Body Type 3</button>
					<p>Current bodytype: <span id = 'bodytype'>Macho Man.</span></p>
				`;
			}
			document.getElementById('output').innerHTML += `
				<p>Please keep in mind that none of these changes will result in a lower sexual potency. Even choosing a more 'cute' bodytype will not cause you to develope submissive tendencies.</p>
				<p>Care to change your name, <input type="text" id="nameSubmission" value="Jeffrey">?</p>
				<p class="choiceText" onclick="changeName('player')">
					Look in the mirror
				</p>
			`;
			changeBody(1);
			break;
		}
		case "lookInTheMirror" : {
			writeText("A single button push on an app downloaded automatically from what looked like a spam email, and you are now standing in front of the mirror as a completely different person.");
			switch (data.story.bodytype) {
				case 1:
				writeText("Whereas before, you would certainly describe yourself as average, now you look like a man straight out of Hollywood. You have the six pack and chest you could only dream of and your gaze could make a woman swoon from fifty paces.");
				writeText("Not to mention the app gave you some clothes too. It might look like a regular button-up shirt, the smooth fabric and name brand clearly show this shirt could go for a four-digit number on the market.");
				writeText("And to top it off, as you pull down your boxers a fat, manly, <b>dick</b> flops out of them.");
				break;
				case 2:
				writeText("Whereas before, you would certainly describe yourself as average, now you wouldn't look out of place as a pop star. Your hair now goes down to your shoulders, soft and blonde. A look at your own face has you blushing as the girl who looks back is way out of your league. Or at least she was.");
				writeText("The app changed your clothes too. You rub your hands along your body, actually jumping a little in place as your hands brush across your new breasts. You lift your pink skirt and pull aside a black thong, and are a little disappointed in what you see.");
				writeText("You were average in more ways than one before, but now you look downright pathetically small. Your penis is barely even three inches.");
				writeText("And yet you can't take your eyes off of it. It's <b>adorable</b>. You feel a tingling sensation building in your body, crawling up your spine as your hands go back up to your chest, massaging your tiny new funbags again as you turn around to check out the new junk in your trunk.");
				writeText("It's one hell of an ass. Your cheeks are plump, and they look like they're the sort a man could have a lot of fun playing with. You can feel your asshole winking as the tingling sensation continues to build, desperately wanting to be filled with a tongue or dick.");
				writeText("The tingling keeps building, mostly in your crotch. You focus on the sensation and relax yourself, only to fail to hold back a moan as you can see your cock growing erect before your eyes. It goes up and up, finally stopping at a full eight inches. It looks almost angry and pulses, completely unfitting on your new girly body.");
				break;
				case 3:
				writeText("Whereas before, you would certainly describe yourself as average now you look like a walking wet dream. You have the face of a supermodel, the tits of a pornstar, and the massive <b>dick</b> of a male pornstar.");
				writeText("You pull off your new set of clothes to examine yourself. Your tits sway from side to side, your dick grows larger and more erect, and your egg-sized balls hand down several inches. You give your meaty ass a <b>SLAP!</b> And you barely hold back a powerful groan as your new dick pumps a what feels like a tablespoon of precum onto the floor. You have a body men would pay to abuse, and a masochistic streak large enough to want it.");
				break;
			}
			writeSpeech(data.story.name, "player", "Holy shit...");
			writeText("You stare into the mirror at the result of years of work and perfect genetics, and you got it all for free! As much as you want to keep fondling yourself, you hear a voice from downstairs calling you for breakfast. You slide your clothes back and head out the door.");
			writeText("If this is what the app can do to you, what can it do to everyone else?");
			writeTransition("goEatBreakfast", "Head downstairs");
			break;
		}
		case "goEatBreakfast" : {
			writeText("You stride down the stairs, an excited pep in your step you haven't felt in years. You're actually excited to start the day for once!");
			writeText("And with a grin on your face you walk into the kitchen. On the other side of the counter is your guardian, washing bits of food off of a cutting board.");
			if (incest == false) {
			writeText("She adopted you and your 'sister' before you were old enough to remember. Despite the fact that none of you are actually related by blood, she still sees you two as her children.");
			}
			writeText("A ping from your phone calls your attention. On the screen is a prompt to change her name.");
			writeBig("images/real/lisa/oldfile1.jpg");
			writeText("Your mother's name is <input type='text' id='nameSubmission' value='Lisa'>");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('mother')">
					Finish and sit down
				</p>
			`;
			break;
		}
		case "finishAndSitDown" : {
			writeSpeech(data.story.name, "player", "Hey, " + data.story.motherName + "? How are you feeling?");
			writeSpeech(data.story.motherName, "scripts/gamefiles/real/oldfile0.jpg", "Huh? I'm feeling fine, did something happen? You certainly look chipper today.");
			writeSpeech(data.story.name, "player", "It's nothing, forget it.");
			writeText("She goes back to putting away dishes. She doesn't even seem to realize her own name has been changed, or that you look completely different. Your attention is quickly grabbed by a 'morning' you hear from the kitchen's entryway.");
			writeTransition("yourSisterArrives", "Your sister arrives");
			break;
		}
		case "yourSisterArrives" : {
			writeText("Your sister slumps sleepily onto her chair. Constant all-nighters have sapped her of her mortal coil.");
			writeText("She's more of a night owl because of her job as an IT consultant. She made a habit of snooping through your phone in the past to show you how lax your security was, so you should be careful not to leave your phone around her for now.");
			if (incest == false) {
			writeText("She isn't actually related to you, but she's been in the 'big sister' role for your whole life.");
			}
			writeBig("images/real/jean/profile1.jpg");
			writeText("Your sister's name is <input type='text' id='nameSubmission' value='Jean'>");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('sister')">
					Try messing with them further
				</p>
			`;
			break;
		}
		case "finishAndEatBreakfast" : {
			writeText("You quickly try to start exploring the potential of this new app, only to stop when a message window appears on the screen.");
			writeText("<i>You cannot access all the features of this app until you complete the terms of service.</i>");
			writeText("And so you go through some menus and find the ToS, ready to scroll to the bottom. It takes a few solid seconds of scrolling, but you arrive and press the agree button, only to be met with a prompt asking you what the company policy is for dealing with terrorist negotiations.");
			writeText("This app makes its message clear, and this explains why they let you change your body immediately. You'll need to work through pages and pages of legal text and be quizzed on it if you want to access the full potential of a reality re-writing app.");
			writeSpeech(data.story.sisterName, "jean", "You alright shithead? You look like you just had a foot run over.");
			writeText("Your sister snaps you out of it, and you put away your phone and start eating. Your mother chides " + data.story.sisterName + " for her language, but she mostly just ignores it. You follow suit, quickly eating breakfast. You mother wishes you both the best as the two of you get ready to leave.");
			writeTransition("headOutForSchool", "Head out for school");
			break;
		}
		case "headOutForSchool" : {
			writeText("You've been reviewing the ToS for the few minutes you have before the bus arrives to your college. This stuff is boring like nobody's business, but you're motivated like never before.");
			writeSpecial("You've finished 2% of the terms of service!");
			writeSpeech(data.story.sisterName, "jean", "What're you looking at? You're usually dead on your feet at this hour.");
			writeSpeech(data.story.name, "player", "School stuff. Nothing. Why are you outside of the house anyways? I thought you worked from home.");
			writeText("Nailed it. She doesn't suspect a thing. She's always been a quick reader though. She could probably get through this thing in an hour.");
			writeSpeech(data.story.sisterName, "jean", "The dickweeds want me to add another router. Can't do that remotely, so now I've gotta bust my ass because they don't know how subnetting works.");
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
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('friend')">
					The teacher arrives
				</p>
			`;
			break;
		}
		case "theTeacherArrives" : {
			writeText("Your fantasies about marriage and the twelve children you'll have with her are interrupted as teacher moves through the crowd and opens the door to the class. The students file inside one by one, each taking their seat.");
			writeText("Her presence commands respect, and the classroom is quiet as the begins speaking.");
			writeBig("images/real/kendra/profile1.jpg");
			writeText("Your teacher's name is <input type='text' id='nameSubmission' value='Kendra'>");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('teacher')">
					Class starts
				</p>
			`;
			break;
		}
		case "classStarts" : {
			writeText("You have a renewed determination to succeed, not only because this app is the key to getting closer to the girl of your dreams, but also because...");
			writeSpeech(data.story.teacherName, "kendra", data.story.name + ", would you care to grace us with an answer?");
			writeText(data.story.teacherName + " calls on you six different times to answer questions, taking every opportunity to embarrass you in front of the class. After every time your mind is flooded with the ways you'll get revenge on her.");
			writeSpecial("Studying harder than you ever have before, you finish 30% of the terms of service!");
			writeText("<i><br><br>Time passes...</i>");
			writeSpeech(data.story.teacherName, "kendra", "Alright everyone, make sure you finish assignment 21B and study for the upcoming test. Especially you, " + data.story.name + ".");
			writeText("Sooner than you'd like for once, class is over. Your eyes catch " + data.story.teacherName + "'s as you leave, and she flashes you a cocky grin.");
			writeText("The bus ride is thankfully uneventful. You were even able to get some more reading in. If you're lucky the coffee shop on Main street is still open and you can get something to help you with this.");
			writeSpecial("You've finished 40% of the terms of service!");
			writeTransition("youLeave", "Arrive in town");
			break;
		}
		case "youLeave" : {
			if (data.story.exoticVisited == false) {
				writeText("You walk onto the main street, and a small shop grabs your attention. You've never noticed it before, but something about it seems to be calling your name.");
				writeTransition("checkExoticShop", "Check out the strange shop");
			}
			if (data.story.chefName == "???") {
				writeText("Settled in a tiny space between two larger buildings is a worn, but warm-looking coffee shop. The perfect place to get some studying in.");
				writeTransition("checkRestaurant", "Enter the coffee shop");
			}
			if (data.story.chefName != "???" && data.story.exoticVisited == true) {
				writeText("It's starting to get dark, mom is always telling you that hoodlums start roaming the streets at this hour. While she's probably overeacting, risking getting mugged while on the verge of godhood is a bad idea.");
				writeTransition("headHome", "Head home");
			}
			break;
		}
		case "checkExoticShop" : {
			writeText("You push open the door and a cool breeze washes over you. The place almost seems bigger on the inside, and your vision is pulled between a number of objects contained in glass cases. A laptop, a virtual reality headset, a container of... coffee creamer?");
			writeBig("images/real/adriana/profile1.jpg");
			writeSpeech("Adrianna", "adriana", "Hey kid, you must be " + data.story.name + ", yeah?");
			writeText("The shopkeep's name is Adrianna. Your app doesn't allow you to rename her, so she must be...");
			writeSpeech("Adrianna", "adriana", "Nope. I'm just one of the admin's hired help. You finished those terms yet?");
			writeText("You tell her you haven't.");
			writeSpeech("Adrianna", "adriana", "Bummer dude. this place sells stuff to app users, whatever they need to get the most out of the app. I can't sell anything to you until you're done.");
			writeTransition("youLeave", "Nothing left to do here, you leave.");
			data.story.exoticVisited = true;
			break;
		}
		case "checkRestaurant" : {
			writeText("The cafe is warm and inviting, but almost completely empty. The owner has been a friend to you and your sister for the last few years, and confided in you once that since her husband passed away a year ago, she's been having a hard time paying rent.");
			writeText("You wouldn't go so far as to call her your second mother, but its nice to be welcomed to a cozy plaze to study with a smile. Speaking of which...");
			writeBig("images/real/ava/profile1.jpg");
			writeSpeech("<input type='text' id='nameSubmission' value='Ava'>", "ava", "Hey " + data.story.name + ". Your usual?");
			writeText("Aside from your mother, she's the only one you've seen today who hasn't treated you any differently now that you look a lot hotter. You feel like that's enough of a reason to use your new powers to help her and her business out.");
			writeText("She's also insanely hot, which helps.");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('chef')">
					'Sure, the usual.'
				</p>
			`;
			break;
		}
		case "grabABite" : {
			writeText("A nice cup of coffee is exactly what you needed. You spend a few hours studying and drinking peacefully.");
			writeSpecial("You've finished 50% of the terms of service!");
			writeText("As you finish this latest quiz, a prompt pops up on your phone offering a quick reward in exchange for making it through the halfway point. You press accept, only for nothing to happen.");
			writeSpeech(data.story.chefName, "ava", "Hey " + data.story.name + ". You need a refill?");
			writeSpeech(data.story.name, "player", "No thanks " + data.story.chefName + ", I'm-");
			writeBig("images/real/ava/profile2.jpg");
			writeSpeech(data.story.chefName, "ava", "Look at you, all grown up and calling me '" + data.story.chefName + "'. I remember when you and your sister would call me Auntie. Let me know if you need anything then, okay sweetie?");
			writeText("She turns back around and walks away, having not noticed a thing. after a moment of stunned silence, you turn back to the phone in your hand.");
			writeText("...");
			writeSpecial("You've finished 60% of the terms of service!");
			writeTransition("youLeave", "Head back outside");
			break;
		}
		case "headHome" : {
			writeText("On your way home you take a quick shortcut, cutting through an alleyway between two buildings. Phone in hand, you don't notice as your shoulder collides with someone else's.");
			writeText("She quickly rights herself after stumbling, ready to call you out, but pauses as she gets a good look at your face.");
			writeSpeech("<input type='text' id='nameSubmission' value='Alexis'>", "alexis", "What the hell, shithe- <br> I mean, watch where you're going.");
			writeText("She's back on her way in no time, having censored herself once she realized you weren't some gross hobo. You're used to getting called names, but the depth of how shallow she is stuns you for a second.");
			writeText("Walking home, checking your app, you can see her name attached to a picture of her.");
			writeBig("images/real/alexis/profile1.jpg");
			writeText("With the power of this app, you could turn her into a human urinal if you wanted to.");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('office')">
					Arrive at home
				</p>
			`;
			break;
		}
		case "arriveAtHome" : {
			writeText("You finally arrive at home, the moment of truth is just ahead of you. Your mother's asleep, and your sister is lounging on the couch, but you don't have any more time for distractions.");
			writeText("You take a seat at your desk, door locked, and return to your studies. The questions get harder and reference more obscure details, so you've been keeping thorough notes.");
			writeText("After two hours of intense study, you lean back in your chair.");
			writeSpecial("You've finished 80% of the terms of service!");
			writeText("You plug in your phone as a low battery message pops up. You'd forgotten to charge it once you got home.");
			writeText("The caffeine isn't enough any more. You're four-fifths of the way through, but it feels like you're bashing your head against a brick wall. Your sister was always the better one at studying. Speaking of which, there's a knock at the door.");
			writeSpeech(data.story.sisterName, "jean", "The bathroom's open for your shower. You doing alright?");
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
			writeTransition("mother", "Drift off to sleep, and anticipate the morning");
			data.story.motherReady = true;
			data.story.skill = 1;
			break;
		}
		case "takeBreak" : {
			data.galleryArray = gallerySubArray;
			data.clothingArray = clothingSubArray;
			data.underwearArray = underwearSubArray;
			data.story.route = "sub";
			updateBody(4);
			writeEvent("misc1S");
			unlockScene("misc1S");
			writeText("<p class ='choiceText' onclick = 'corrupt(`everyone`)'>Go to bed.</p>");
			break;
		}
		case "prologueSkip": {
			if (imagesDisabled != true) {
			document.getElementById('output').innerHTML += `
				<img id ="selfBig" class="bigPicture" src="images/none.png">
				<br>
				<button type="button" onclick="changeBody(1)">Body Type 1</button>
				<button type="button" onclick="changeBody(2)">Body Type 2</button>
				<button type="button" onclick="changeBody(3)">Body Type 3</button>
				<p>Current bodytype: <span id = 'bodytype'>Macho Man.</span></p>
			`;
			}
			document.getElementById('output').innerHTML += `
				<p>Your name is <input type="text" id="nameSubmission" value="Jeffrey"></p>
				<p>Your mother's name is <input type="text" id="nameSubmission1" value="Lisa"></p>
				<p>Your sister's name is <input type="text" id="nameSubmission2" value="Jean"></p>
				<p>Your classmate's name is <input type="text" id="nameSubmission3" value="Riley"></p>
				<p>Your teacher's name is <input type="text" id="nameSubmission4" value="Kendra"></p>
				<p>The local coffee house owner's name is <input type="text" id="nameSubmission5" value="Ava"></p>
				<p>The officewoman you bumped into is named <input type="text" id="nameSubmission6" value="Alexis"></p>
				<p class="choiceText" onclick="changeName('all')">
					Start the game
				</p>
			`;
			changeBody(1);
			updateBody(1);
			break;
		}
		//Sandbox
		case "home": {
			writeBig("images/real/locations/home.jpg");
			writeTransition("homePlayerRoom", "Your room");
			writeTransition("mother", data.story.motherName + " is here");
			if (tokyo == "soon") {
				document.getElementById('output').innerHTML += `
					<p class="choiceText">
						`+data.story.sisterName+`'s door is still closed.
					</p>
				`;
			}
			else {
				writeTransition("homeSisterRoom", data.story.sisterName + "'s room");
			}
			if (data.story.vrMachine == true) {
				writeTransition("homeGameRoom", "Game room");
			}
			writeTransition("streets", "Go outside");
			writeTransition("adasfga", "Break the game");
			break;
		}
		case "homePlayerRoom": {
			writeBig("images/real/locations/homePlayerRoom.jpg");
			writeTransition("sleep", "Go to sleep");
			if (data.story.laptop == true) {
				writeTransition("laptop", "Use your laptop");
			}
			if (data.story.doll == true) {
				writeTransition("doll", data.story.dollName + " is here");
			}
			if (data.story.time == "day") {
				writeTransition("home", "Leave the room");
			}
			break;
		}
		case "homeGameRoom": {
			writeBig("images/real/locations/homeGameRoom.jpg");
			writeTransition("vr", "Your virtual reality machine is here.");
			writeTransition("home", "Leave the room");
			break;
		}
		case "homeSisterRoom": {
			writeBig("images/real/locations/homeSisterBedroom.jpg");
			writeTransition("sister", data.story.sisterName + " is here");
			writeTransition("home", "Leave the room");
			break;
		}
		case "streets": {
			writeBig("images/real/locations/street.jpg");
			if (data.story.onahole == true && data.story.skill == 2) {
				writeTransition("publicToy", "Practice your skills with the app");
			}
			if (data.story.motherScore > 1 && data.story.friendScore > 1 && data.story.teacherScore > 1 && data.story.officeScore > 1 && data.story.chefScore > 1) {
				if (data.story.freeSample != true) {
					if (data.story.route == "sub") {
						if (data.story.candyTicket == false) {
							writeTransition("freeSample", "Someone is waving you down");
						}
					}
				}
			}
			if (data.story.route == "sub") {
				if (galleryCheck("sister2") == true) {
					if (galleryCheck("sister3") == false) {
						writeText("The streets are a little busier than usual, and you overhear two people talking about some filming going on in the area. They're filming the live action adaptation of Tokyo Pop Reee Black Medallion // XX.<br>You're sister isn't exactly a fan of the adaptation, but it'd be a fun fact to tell her about once you get home.");
					}
				}
			}
			writeTransition("streetsRestaurant", data.story.chefName + "'s Coffee Shop");
			writeTransition("streetsExoticShop", "Exotic Shop");
			writeTransition("streetsClothingShop", "Clothing Store");
			if (data.story.candyTicket == true) {
				writeTransition("streetsCandyShop", "Candy Shop");
			}
			else {
				document.getElementById('output').innerHTML += `
					<p class="choiceText">
						There's a candy shop on this street, but you don't feel like sweets right now.
					</p>
				`;
			}
			if (data.story.beautyTicket == true) {
				writeTransition("streetsBeautyShop", "Beauty Salon");
			}
			else {
				if (data.story.route != "sub") {
					document.getElementById('output').innerHTML += `
						<p class="choiceText">
							There's a beauty salon down the road, but they can't improve you more than the app has.
						</p>
					`;
				}
			}
			writeTransition("office", data.story.officeName + " usually walks by this way");
			writeTransition("school", "Head to school");
			writeTransition("home", "Head home");
			break;
		}
		case "streetsRestaurant": {
			writeBig("images/real/locations/streetRestaurant.jpg");
			writeTransition("chef", data.story.chefName + " works here.");
			writeTransition("streets", "Head back outside");
			break;
		}
		case "school": {
			writeBig("images/real/locations/school.jpg");
			writeTransition("schoolClassroom", "Enter your classroom");
			writeTransition("friend", "It looks like " + data.story.friendName + " is waiting outside of the classroom.");
			writeTransition("streets", "Leave school");
			break;
		}
		case "schoolClassroom": {
			writeBig("images/real/locations/schoolClassroom.jpg");
			if (data.story.route == "sub") {
				if (galleryCheck("teacher5S") == true) {
					console.log("true");
					if (galleryCheck("sister4S") == true) {
						if (galleryCheck("sister5S") == true) {
							writeTransition("teacher", data.story.teacherName + " is at her desk");
						}
					}
					else {
						writeText(data.story.teacherName+" left just after class began, you've never seen her in such a rush before. Something seems suspicious.");
					}
				}
				else {
					writeTransition("teacher", data.story.teacherName + " is at her desk");
				}
			}
			else {
				writeTransition("teacher", data.story.teacherName + " is at her desk");
			}
			writeTransition("school", "Leave the classroom");
			break;
		}
		case "morning": {
			if (data.story.route == "dom") {
				if (data.story.motherScore == 1 && data.story.motherReady == true) {
					writeEvent("mom2");
					unlockScene("mom2");
					writeText("...");
					writeText("You arrive at school as normal. Just before class starts you approach " + data.story.teacherName + ". You lean over to whisper to her, telling her that she didn't want to disturb you today, since you're a busy man.");
					writeSpeech(data.story.teacherName, "kendra", "Of course I remember that, obviously. Now take your seat.");
					writeText("And just like that, she ignores you even when you prop your feet onto the table.");
					writeTransition("schoolClassroom", "Finish classes for the day");
					data.story.motherReady = false;
				}
				else {
					switch (data.story.motherScore) {
						case 1: {
							writeText("You wake up to the scent of coffee, and see your mother patiently waiting beside your bed to wake you up.");
							writeSpeech(data.story.motherName, "lisa", "Good morning sweetie!");
							writeText("...");
							break;
						}
						case 2: {
							writeBig("images/real/general/handjob1.gif");
							writeText("You awaken to the lovely feeling of your mother gently coaxing the sperm from your balls.");
							writeSpeech(data.story.motherName, "lisa", "Good morning sweetie!");
							writeText("...");
							break;
						}
						case 3: {
							writeBig("images/real/general/deepthroat4.gif");
							writeText("You awaken to the lovely feeling of your mother's throat. She gives you an eager look once she realizes you're awaken and quickly brings you to orgasm so that she can greet you with a smile.");
							writeSpeech(data.story.motherName, "lisa", "Good morning master!");
							writeText("...");
							break;
						}
						case 4: {
							if (galleryCheck("mom6") == true) {
								if (galleryCheck("mom7") == false) {
									writeText("You awaken laying on top of your sleeping mother, it seems you had more than just a wet dream last night. While her pussy is certainly inviting, you do need to use the bathroom.");
									writeTransition("morningPiss", "You could always just stay inside.");
								}
								else {
									writeBig("images/real/general/vaginal6.gif");
									writeText("You awaken to the lovely feeling of your mother riding atop you, your dick deep inside her.");
									writeSpeech(data.story.motherName, "lisa", "Good mo... Good mooOOOOHH!");
									writeText("...");
								}
							}
							else {
								writeBig("images/real/general/vaginal6.gif");
								writeText("You awaken to the lovely feeling of your mother riding atop you, your dick deep inside her.");
								writeSpeech(data.story.motherName, "lisa", "Good mo... Good mooOOOOHH!");
								writeText("...");
							}
							break;
						}
					}
					if (galleryCheck("mom6") == false || galleryCheck("mom7") == true) {
						switch (data.story.teacherScore) {
							case 1:
								writeText("School passes quickly, " + data.story.teacherName + " takes great care not to disturb you.");
							break;
							case 2:
								writeText("School passes quickly, " + data.story.teacherName + " takes great care not to disturb you. Her skin is looking quite nice today.");
							break;
							case 3:
								writeBig("images/real/general/titfuck3.gif");
								writeText("You arrive at school early, " + data.story.teacherName + " is waiting and ready to take care of you.");
							break;
							case 4:
								writeBig("images/real/general/deepthroat5.gif");
								writeText("You arrive at school early, " + data.story.teacherName + " is waiting and ready to take care of you.");
							break;
							case 5:
								writeBig("images/real/general/vaginal4.gif");
								writeText("School passes the time, as usual. After a short nap you walk up behind " + data.story.teacherName + " and slide into her to relieve yourself of some lingering tension.");
							break;
							case 6:
								writeBig("images/real/general/vaginal4.gif");
								writeText("School passes the time, as usual. After a short nap you walk up behind " + data.story.teacherName + " and slide into her to relieve yourself of some lingering tension.");
							break;
						}
						writeTransition("schoolClassroom", "Finish classes for the day");
					}
					else {
						writeTransition("schoolClassroom", "Or pull out and go about your day");
					}
				}
			}
			else {
				if (data.story.motherScore == 1 && data.story.motherReady == true) {
					writeEvent("mom1S");
					unlockScene("mom1S");
					writeText("...");
					writeText("School is... Strange. " + data.story.teacherName + ". Came into class today wearing a bikini and a pair of shorts. You can't help but visualize the beach whenever you look at her.");
					writeText("Whenever her vision passes over you, she has a weird look in her eyes.");
					writeTransition("schoolClassroom", "Finish classes for the day");
					data.story.motherReady = false;
				}
				else {
					switch (data.story.motherScore) {
						case 1: {
							writeText("You wake up to see your mother standing at the side of your bed, gently shaking you awake.");
							writeSpeech(data.story.motherName, "lisa", "It is time to wake up. Breakfast is already prepared.");
							writeText("...");
							break;
						}
						case 2: {
							writeText("You wake up to see your mother standing at the side of your bed, gently shaking you awake.");
							writeSpeech(data.story.motherName, "lisa", "It is time to wake up. Breakfast is already prepared.");
							writeText("...");
							break;
						}
						case 3: {
							if (galleryCheck('mom3s') == false) {
								writeText("You wake up on your own, a little later than usual.");
								writeText("It seems mom isn't here to wake you up, strange.");
								writeText("She must be out, because you can't find her. Oh well.");
								writeText("...");
							}
							else {
								writeText("You wake up to see your mother standing at the side of your bed, gently shaking you awake.");
								writeSpeech(data.story.motherName, "lisa", "It is time to wake up. Breakfast is already prepared.");
								writeText("...");
							}
							break;
						}
						case 4: {
							writeText("You wake up to a gentle nudging.");
							writeSpeech(data.story.motherName, "lisa", "Good morning, dear. Would you care for a morning drink?");
							writeText("...");
							break;
						}
					}
					switch (data.story.teacherScore) {
						case 1:
							writeText("School passes quickly. " + data.story.teacherName + " glances at you once or twice with a strange look in her eyes, but aside from that classes pass as normal.");
						break;
						case 2:
							writeText("School passes quickly. " + data.story.teacherName + " glances at you once or twice with a strange look in her eyes, but aside from that classes pass as normal.");
						break;
						case 3:
							writeText("School passes quickly. " + data.story.teacherName + " tries not to make eye contact with you. She even almost skipped you name when taking attendance.");
						break;
						case 4:
							if (galleryCheck("sister4S") == true) {
								if (galleryCheck("sister5S") == true) {
									writeText("School passes quickly. " + data.story.teacherName + " seems fidgety, but aside from that classes pass as normal.");
								}
								else {
									writeText("Today's class is taught by a substitute, it seems like "+data.story.teacherName+" is still at your place in the basement.");
								}
							}
							else {
								writeText("After class finishes, "+data.story.teacherName+" suddenly packs up and leaves without a word. Where could she be going?");
							}
						break;
					}
					writeTransition("schoolClassroom", "Finish classes for the day");
				}
			}
			break;
		}
		//Corruption
		case "sleep": {
			//During sleep, check who isn't ready, and offer a choice to corrupt them. Can't skip this unless mom's corruption is above 0. Doll and VR are auto-readied.
			data.story.time = "day";
			data.story.dollReady = true;
			if (data.story.route == "dom") {
				if (data.story.motherScore == 0) {
					document.getElementById('output').innerHTML += `
						<p class="choiceText" onclick="corrupt('many')">
							Start implementing your plan with the app
						</p>
					`;
				}
				else {
					data.story.dollReady = true;
					data.story.vrReady = true;
					if (data.story.motherReady == false) {
						switch (data.story.motherScore) {
							case 1:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('mother')">
										Reduce your mother's self control
									</p>
								`;
							break;
							case 2:
								if (data.story.skill > 1) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('mother')">
											Turn up your mother's libido
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt your mother further right now.
										</p>
									`;
								}
							break;
							case 3:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('mother')">
										Transform your mother into more of a proper maid
									</p>
								`;
							break;
						}
					}
					if (data.story.sisterReady == false) {
						switch (data.story.sisterScore) {
							case 1:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('sister')">
										Turn up ` + data.story.sisterName + `'s anal fixation
									</p>
								`;
							break;
							case 2:
								if (data.story.skill > 1) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('sister')">
											Make ` + data.story.sisterName + ` more open to your advances
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt ` + data.story.sisterName + ` further right now.
										</p>
									`;
								}
							break;
							case 3:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('sister')">
										Prepare ` + data.story.sisterName + ` for more fun
									</p>
								`;
							break;
							case 4:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('sister')">
										Open up ` + data.story.sisterName + ` to the idea of family play
									</p>
								`;
							break;
						}
					}
					if (data.story.friendReady == false) {
						switch (data.story.friendScore) {
							case 0:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('friend')">
										Check ` + data.story.friendName + `'s statistics
									</p>
								`;
							break;
							case 1:
								if (data.story.skill > 1) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('friend')">
											Make proof of the app to show ` + data.story.friendName + `
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to safely prove the app's power to ` + data.story.friendName + ` right now.
										</p>
									`;
								}
							break;
							case 2:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('friend')">
										Ask ` + data.story.friendName + ` what she'd do with the app
									</p>
								`;
							break;
							case 3:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('friend')">
										Chat with ` + data.story.friendName + ` and brainstorm ideas
									</p>
								`;
							break;
							case 4:
								if (data.story.skill > 2) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('friend')">
											Check up on ` + data.story.friendName + `
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt ` + data.story.friendName + ` further right now.
										</p>
									`;
								}
							break;
						}
					}
					if (data.story.teacherReady == false) {
						switch (data.story.teacherScore) {
							case 1:
								if (data.story.skill > 1) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('teacher')">
											Tweak ` + data.story.teacherName + `'s suggestibility
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt ` + data.story.teacherName + ` further right now.
										</p>
									`;
								}
							break;
							case 2:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('teacher')">
										Mess with the class's common sense
									</p>
								`;
							break;
							case 3:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('teacher')">
										Check out ` + data.story.teacherName + `'s private life
									</p>
								`;
							break;
							case 4:
								if (data.story.skill > 2) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('teacher')">
											Let the whole class use ` + data.story.teacherName + ` (Watersports warning, optional content!)
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt ` + data.story.teacherName + ` further right now.
										</p>
									`;
								}
							break;
						}
					}
					if (data.story.chefReady == false) {
						switch (data.story.chefScore) {
							case 0:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('chef')">
										Help ` + data.story.chefName + ` de-stress
									</p>
								`;
							break;
							case 1:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('chef')">
										Check up on ` + data.story.chefName + `
									</p>
								`;
							break;
							case 2:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('chef')">
										Make ` + data.story.chefName + ` a little less dependent
									</p>
								`;
							break;
						}
					}
					if (data.story.officeReady == false) {
						switch (data.story.officeScore) {
							case 0:
								if (data.story.skill > 1) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('office')">
											Brainstorm ideas for what to do to ` + data.story.officeName + `
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt ` + data.story.officeName + ` further right now.
										</p>
									`;
								}
							break;
							case 1:
								document.getElementById('output').innerHTML += `
									<p class="choiceText" onclick="corrupt('office')">
										Sluttify ` + data.story.officeName + ` further
									</p>
								`;
							break;
							case 2:
								if (data.story.skill > 2) {
									document.getElementById('output').innerHTML += `
										<p class="choiceText" onclick="corrupt('office')">
											Change ` + data.story.officeName + `'s goals in life
										</p>
									`;
								}
								else {
									document.getElementById('output').innerHTML += `
										<p class="choiceText">
											You don't have the skill to corrupt ` + data.story.officeName + ` further right now.
										</p>
									`;
								}
							break;
						}
					}
				}
				if (data.story.motherScore > 1 && data.story.sisterScore > 1 && data.story.friendScore > 1 && data.story.teacherScore > 1 && data.story.chefScore > 1 && data.story.officeScore > 0) {
					writeTransition("ending", "Test the ending");
				}
				document.getElementById('output').innerHTML += `
					<p class="choiceText" onclick="sceneTransition('dreaming')">
						Just go to sleep
					</p>
				`;
			}
			else {
				writeText("You lay your head down to rest after a long day, but as you do your phone buzzes. It's your sister texting you.");
				writeSpeech(data.story.sisterName, "jean", "Heeeey bro. How was school? Have any fun today?");
				if (data.story.motherScore < 3 && data.story.motherReady == false) {
					document.getElementById('output').innerHTML += `
						<p class="choiceText" onclick="corrupt('mother')">
							Talk about mom
						</p>
					`;
				}
				if (data.story.friendScore < 4 && data.story.friendReady == false) {
					document.getElementById('output').innerHTML += `
						<p class="choiceText" onclick="corrupt('friend')">
							Talk about ` + data.story.friendName + `
						</p>
					`;
				}
				if (data.story.teacherScore < 4 && data.story.teacherReady == false) {
					document.getElementById('output').innerHTML += `
						<p class="choiceText" onclick="corrupt('teacher')">
							Talk about ` + data.story.teacherName + `
						</p>
					`;
				}
				if (data.story.chefScore < 4 && data.story.chefReady == false) {
					document.getElementById('output').innerHTML += `
						<p class="choiceText" onclick="corrupt('chef')">
							Talk about ` + data.story.chefName + `
						</p>
					`;
				}
				if (data.story.officeScore < 4 && data.story.officeReady == false) {
					document.getElementById('output').innerHTML += `
						<p class="choiceText" onclick="corrupt('office')">
							Talk about ` + data.story.officeName + `
						</p>
					`;
				}
				if (galleryCheck('sister1S') == true) {
					writeTransition("ending", "Test the ending");
				}
				data.story.dollReady = true;
				data.story.vrReady = true;
				document.getElementById('output').innerHTML += `
					<p class="choiceText" onclick="sceneTransition('dreaming')">
						Go to bed without answering
					</p>
				`;
			}
			break;
		}
		case "motherCorruption": {
			if (data.story.route == "dom") {
				switch (data.story.motherScore) {
					case 0: {
						writeText("You can't just crank up values as high as you can, as your mother has shown you today. Thus, you come up with a plan.");
						writeText("The first target is your mother. For her, you'll raise factors like loyalty and subservience to you. You increase sexual promiscuity and alter her common sense to make her less prudish. You'll instill a command to wake you herself, and make her think that sexual contact with you is completely natural. Other factors, like libido and sexual receptiveness, will need to wait for now.");
						writeText("Next up is your sister. You don't want her freaking out if she notices the changes to your mother's body, so you'll change her common sense as well. For a test, you'll set her obedience level to you to be 'worships'. Just in case this backfires, you'll make sure she isn't receptive to sex enough to do something you'll both regret in your sleep.");
						writeText("Finally, you'll need some more free time to study the app in the day, so you raise " + data.story.teacherName + "'s trust in you to an absolute level. Now, whatever you say is what she believes with almost no exceptions. You can just tell her that she doesn't want to bother you while you're working on your phone, and she'll believe it.");
						writeSpecial("You can now trigger events with your sister or " + data.story.teacherName + " by interacting with them during the day. Just like working at the coffee shop however, this will take the entire day.");
						break;
					}
					case 1: {
						writeText("It was pretty clear just by the look in your mother's eyes that she was hungry for more, it's just that she was too reserved to go any further.");
						writeText("To fix that, you pump her initiative way up, and reduce her self control. You also increase the sensitivity of her mouth and change her perception of cock's taste. You'll take things one step at a time for now.");
						break;
					}
					case 2: {
						writeText("She's progressing nicely, she'd probably be on your dick in a week at this point even if you left her unchanged. You don't want to wait any longer though. One thing is that you'll change how she refers to you. 'Master' has a nice ring to it.");
						writeText("You increase her sensitivity and libido, but not by too much. You'll also make it so that she can have an orgasm just from the feeling of someone cumming inside of her.");
						writeText("You put a little bit of that hesitancy back into her for now so that you can enjoy breaking through that flustered persona. The next time you and her are together, big things are going to happen.");
						break;
					}
					case 3: {
						writeText("You start fiddling with statistics and percentages as usual, there isn't too much to change at this point. She already wants you to fuck a baby into her, what more can you do?");
						writeText("You notice she's got quite a bit of disgust built up at this point. Not from the sex, mind you, but from the deep cleaning she's been doing as your new personal maid. That gives you an idea...");
						writeText("You change her body to be super resistant to bacteria, and change her common sense to reduce that disgust factor. The candy ticket from the exotic store promises access to some seriously good stuff. With her new mindset, it seems like you could have a good time testing them out with her.");
						break;
					}
				}
			}
			else {
				switch (data.story.motherScore) {
					case 0: {
						writeText("Sleep comes easily to you. Before you'd had trouble getting to sleep with any consistency, but now the moment you close your eyes...");
						writeText("...");
						writeText("Meanwhile, in the adjacent room a girl works tirelessly putting her programming experience to some real use.");
						writeText(data.story.motherName + " is the first of her prey. Her mind and body are twisted to fit " + data.story.sisterName + "'s bizarre whims and enjoy every moment of it. She's allowed to keep her identity as a woman for now.");
						writeSpeech(data.story.sisterName, "jean", "<i>I can't have everyone in the city grow a dick overnight. I'll enjoy her as she is for awhile.</i>");
						writeText(data.story.teacherName + " is the second target. She's given a large tool to fit her domineering attitude towards students, but is also given a tragic inability to use that tool as well.");
						writeSpeech(data.story.sisterName, "jean", "<i>That'll show her for being a bitch. Bullying my friends, and now my brother? Let's see how you high any mighty you are with shorts too small to fit your floppy dick in.</i>");
						writeText(data.story.friendName + " is the third. Her features are exaggerated in every way possible. She'll make a good guinea pig for any changes that " + data.story.sisterName + " would want to make on herself later.");
						writeSpeech(data.story.sisterName, "jean", "<i>Oh hey, she's already got a dick. And a crush on " + data.story.name + "? Sorry, he's taken, but I'll make it up to you. Maybe I'll still let you have some fun one day.</i>");
						writeText(data.story.chefName + " is next. She's given a body to keep up with her exhausting work, and given the figure to drive up sales like crazy.");
						writeSpeech(data.story.sisterName, "jean", "<i>" + data.story.chefName + "... If I'd gotten this app a few years ago, my crush wouldn't have been as one sided... I'll give you something nice to make up for all those years of free coffee you gave me.</i>");
						writeSpeech(data.story.sisterName, "jean", "<i>Man, this is awesome. But there's still so much I can do left. I can give people fetishes too? Sweet! And I can see everybody the app has been used on too!<br>...Who the hell is "+data.story.officeName+"? Oh, she bumped into bro earlier today. Well, might as well break her to see how far this thing can go.</i>");
						writeSpecial("The women of the city have been changed!");
						break;
					}
					case 1: {
						writeSpeech(data.story.name, "player", "I don't think fun is the word. How far exactly did you go with mom? She's giving me weird looks in the morning too.");
						writeSpeech(data.story.sisterName, "jean", "Yeah she's a work in progress. More time on that before you critique plz.");
						writeSpeech(data.story.name, "player", "Work in progress? How much more are you going to do to her head?");
						writeSpeech(data.story.sisterName, "jean", "Patience bro.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Man, that was fun. Seeing mom like that was pretty hot. I wish she'd enjoyed it a little bit more though.<br>Alright, I'll tweak this, and maybe that...</i>");
						writeText("You sister changes and changes your mother's body and mind, increasing her desire while also holding back her ability to achieve release.");
						writeSpeech(data.story.sisterName, "jean", "<i>I bet tomorrow is going to be even better! Thanks for the app, bro!</i>");
						break;
					}
					case 2: {
						writeSpeech(data.story.sisterName, "jean", "I just wanna know if you're okay.");
						writeSpeech(data.story.sisterName, "jean", "You there?");
						writeSpeech(data.story.sisterName, "jean", "Hello?");
						writeSpeech(data.story.sisterName, "jean", "Good night bro.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeText("Ropes of white jizz fly through the air and land with a splatter on the ground.");
						writeSpeech(data.story.sisterName, "jean", "<i>Ah, fuck... Jacking off is really nice. Plus I get a better view of the action too. <br>... But what about "+data.story.name+"? He seemed pretty down, I guess mom is being pretty cold to him.</i>");
						writeText("She stretches out on her sheets as she does her best to brainstorm ideas. There's a knock on her door before "+data.story.motherName+" walks in.");
						writeSpeech(data.story.motherName, "lisa", "You c-call...");
						writeText("She pauses mid word when she sees the mess on the floor. She obviously wants it, but feels a compulsion to wait for permission first.");
						writeSpeech(data.story.sisterName, "jean", "Go ahead.<br><i>Now, what to do? It's no fun if-<br>God, could she eat any more noisily? How am I supposed to think if you're hungry for my dick twenty-four seven? I might as well give you-</i>");
						writeText("A smile creeps across "+data.story.sisterName+"'s face as she gets off the bed.");
						writeSpeech(data.story.motherName, "lisa", "Mistress?");
						writeSpeech(data.story.sisterName, "jean", "I should've done this right away. He can't really appreciate you like this, and I'm getting bored of your body. Stay there, do not move, and don't touch yourself.");
						writeText("Throughout the rest of the night, the halls of the house are filled with a fishy scent, spluttering sounds, and moans caught between clenched teeth.");
						break;
					}
					case 3: {
						//writeSpeech(data.story.sisterName, "jean", "I just wanna know if you're okay.");
						//writeSpeech(data.story.sisterName, "jean", "You there?");
						//writeSpeech(data.story.sisterName, "jean", "Hello?");
						//writeSpeech(data.story.sisterName, "jean", "Good night bro.");
						//writeText("...");
						//writeText("A bit later, in the adjacent room...");
						//writeSpeech(data.story.sisterName, "jean", "That was unacceptable! Fucking bitch, what did you think you were doing?");
						//writeSpeech(data.story.motherName, "lisa", "Y-you found out? I'm sorry, I know I'm yours-");
						//writeSpeech(data.story.sisterName, "jean", "Not that, idiot! I don't care about you sleeping around, piggy. I'm talking about with "+data.story.name+"!");
						//writeSpeech(data.story.motherName, "lisa", "I'm sorry, mistress. I just couldn't help it anymore. My mind isn't as foggy, I understand that I shouldn't take my frustrations out on "+data.story.name+". Taking advantage of him-");
						//writeSpeech(data.story.sisterName, "jean", "Is something only I'm allowed to do! He's perfect as he is. Someone like you should... Should...");
						//writeText("A smile creeps across "+data.story.sisterName+"'s face.");
						//writeSpeech(data.story.motherName, "lisa", "Mistress?");
						//writeSpeech(data.story.sisterName, "jean", "I should've done this right away. He can't really appreciate you like this, and I'm getting bored of your body. Stay there, do not move, and don't touch yourself.");
						//writeText("Throughout the rest of the night, the halls of the house are filled with a fishy scent, spluttering sounds, and moans caught between clenched teeth.");
						break;
					}
				}
			}
			data.story.motherReady = true;
			updateMenu;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="sceneTransition('dreaming')">
					Go to sleep
				</p>
			`;
			break;
		}
		case "sisterCorruption": {
			switch (data.story.sisterScore) {
				case 0: {
					document.getElementById('output').innerHTML += `
						You start corrupting her.
					`;
					break;
				}
				case 1: {
					writeText("Alright so the last set of changes didn't exactly go according to plan. You'd intended to make her a lot more friendly to you without risking her trying to get sexy in your sleep, and that did work in a way. What you didn't plan for was her stealing your underwear and pleasuring herself anally while smelling them.");
					writeText("But you can work with this. Anal <b>is</b> pretty hot after all, having a dedicated buttslut around could be really interesting. You just need to turn up her sensitivity so that it's not an alternative to regular play, but so that it's her go-to form of sexual relief.");
					writeText("Obviously fingers aren't going to cut it, and making it so that she's open for you is another whole day's work. She also doesn't keep sex toys ever since mom found her stash last month. The exotic shop sells something that could help you out here.");
					break;
				}
				case 2: {
					writeText("You lay in bed, phone in hand as you mentally replay the image of " + data.story.sisterName + " pleasuring herself with a dildo, and her screaming your name was pretty nice too.");
					writeText("She's pretty far along already, actually. It seemed like getting her to roll with letting you fuck her ass was a project that would take hours, but you should only need to implement a few changes. A few tweaks to sensitivity and a plan are all you really need. That, and a few alterations to yourself too.");
					writeText("Tomorrow should be fun.");
					break;
				}
				case 3: {
					writeText("Anal sex is just as much fun as you imagined.");
					writeText("With that out of the way, it's time to think of a way to corrupt " + data.story.sisterName + " further. She's a buttslut at this point, no question, and she's hooked on your dick too.");
					writeText("At this point your next goal should be to open her, and your mother, up to the idea of a threesome. You can't just dive right in though, the first step should be making her desperate for release at any time. Obviously you can't be fucking her all day, and the dildo isn't tapered, so she can't use it as a buttplug. The candy advertised by the exotic shop's ticket might be just what you need.");
					writeText("After that, it's a matter of pushing her as far past her limits as she can go.");
					break;
				}
				case 4: {
					writeText("You've pretty much got this in the bag at this point. " + data.story.sisterName + " is so hungry for anal at this point she'd ride mom wearing a strap-on.");
					writeText("That's not a bad idea, actually, but that's not the point right now. You stop patting yourself on the back and get to work.");
					writeText("Overwritting her common sense ought to do the trick. Family dinners should be a little more exciting now.");
					break;
				}
			}
			data.story.sisterReady = true;
			updateMenu;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="sceneTransition('dreaming')">
					Go to sleep
				</p>
			`;
			break;
		}
		case "friendCorruption": {
			if (data.story.route == "dom") {
				switch (data.story.friendScore) {
					case 0: {
						writeText("Here's your opportunity. The girl you've crushed on for years is finally in your grasp. Meddling with some statistics is all it should...");
						writeText("Wait, this can't be right. 'Affection 40 / 51'? 'Impression: Good'? These are some really high numbers. Higher than you own mother's even.");
						writeText("She already likes you.");
						writeText("You lay the phone down at your side, letting the good feelings roll up your spine.");
						writeText("The next chance you get you'll talk to her, but for now you should...");
						break;
					}
					case 1: {
						writeText("There's a smile on your face as you hit the pillow, this is the good life.");
						writeText("But the thought of using the app on " + data.story.friendName + " floats through your mind. She'd still be with you without the app, is it right to mess with her? Isn't that an invasion of privacy, or even worse an act of overwriting her very identity? Have you become a monster, using the app for your own gain and hurting everyone around you?");
						writeText("Nah. Life's been better for everyone, but the thought of using it on " + data.story.friendName + " still leaves you with doubts.");
						writeText("You resolve to tell her about it the next chance you get, but first you'll need to engineer some proof to show her.");
						writeText("You work well into the night, but at some point you will need to...");
						break;
					}
					case 2: {
						writeText("The knowledge of " + data.story.friendName + "'s secret is still on your mind. If she wanted you to, she could ask you to change her in any way she wanted. But she didn't. Maybe you should accept her for who she really is.");
						writeText("You decide to shoot her a text, asking her about what she'd change about herself.");
						writeSpeech(data.story.friendName, "riley", "Oh boy do I have some ideas. 1st we could...");
						writeText("A lot of them are impossible to do with your skillset, unfortunately. You change what you can, but it seems like you'll need something extra to really have a fun weekend with her. Maybe some exotic candy could do the trick?");
						break;
					}
					case 3: {
						writeText("At some point you closed the app and have been started texting " + data.story.friendName + ". Dozens of subjects have flown by, but one in particular is sticking around.");
						writeSpeech(data.story.friendName, "riley", "IDK. Tryed anal b4, but just hurts mst of the time. Lots of guides on the internet take a rly long time to follow. Candy from lst time was fun tho.");
						writeSpeech(data.story.name, "player", "You know I could change that with the app right? I've been getting way better at using it.");
						writeSpeech(data.story.friendName, "riley", "o shit. Good point. I have some ideas thn.");
						writeText("And she certainly does. You work for almost an hour while she brainstorms over the phone, but eventually you wish her a good night and...");
						break;
					}
					case 4: {
						writeSpeech(data.story.name, "player", "You seem quiet tonight. You ok?.");
						writeSpeech(data.story.friendName, "riley", "Yea just frustrated. I had a good time w/ you, but this btch brittny was messing w/ me all day.");
						writeSpeech(data.story.name, "player", "That sucks. What's her name? I can give her A-cups and a flat butt if it'll make you feel better.");
						writeSpeech(data.story.friendName, "riley", "Lol ty but no. Waking up as a wshboard would suck, but it wouldnt really help me out.");
						writeSpeech(data.story.friendName, "riley", "Actually. U have any more of those wierd candys?");
						writeSpeech(data.story.name, "player", "I can get more. Why?");
						writeSpeech(data.story.friendName, "riley", "I have a pln. It gets me revenge and you get a hot show. Heres what we do.");
						writeText("You work to implement her plan, but soon you are getting ready to...");
						break;
					}
				}
			}
			else {
				switch (data.story.friendScore) {
					case 1: {
						writeSpeech(data.story.name, "player", "Not really.");
						writeSpeech(data.story.sisterName, "jean", "Cmon you were so late in getting home today. Something must have happened.");
						writeSpeech(data.story.name, "player", data.story.friendName + " asked me to stay behind to tell me something, but she never showed up afterwards.");
						writeSpeech(data.story.sisterName, "jean", "Sounds like she stood you up.");
						writeSpeech(data.story.name, "player", "I'll just ask her about it later. I'm going to bed.");
						writeSpeech(data.story.sisterName, "jean", "Good niiiiight.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Oh wow, she really couldn't hold back, could she?</i>");
						writeText(data.story.sisterName + " slowly strokes her length as she reviews " + data.story.friendName + "'s day.");
						writeSpeech(data.story.sisterName, "jean", "Unf... <br><i>She's even worse and controlling her dick than I am. I bet if I turned her libido even further up...<br>I bet I'd get a really good show out of it...</i>");
						break;
					}
					case 2: {
						writeSpeech(data.story.sisterName, "jean", " Oh hey, how did it go with that girl?");
						writeSpeech(data.story.name, "player", data.story.friendName + "? She's been busy lately, I haven't had a chance to talk to her.");
						writeSpeech(data.story.sisterName, "jean", "Oof.");
						writeSpeech(data.story.name, "player", "You could solve this at any time with the app if you wanted to, you know.");
						writeSpeech(data.story.sisterName, "jean", " Cmon bro, you don't need it. Just go up to her, put your foot down, and show her how good your ass looks. No girl can resist it.");
						writeSpeech(data.story.name, "player", "Fine, I'll do it myself. Good night.");
						writeSpeech(data.story.sisterName, "jean", "<3");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "Fuck! Yes!");
						writeText(data.story.sisterName + "'s dick has torn through the top of an onahole, her shaft completely ruining it as her balls tighten.");
						writeSpeech(data.story.sisterName, "jean", "Ah!<br><i>God, she couldn't even make it through class! I bet the school will be in a frenzy if the janitor finds her mess.<br>But if a girl found it instead...</i>");
						writeText("The thought pushes her over the edge, and she starts unloading her balls onto the floor.");
						writeSpeech(data.story.sisterName, "jean", "<i>She isn't giving up though. She thinks she can still be a productive member of society with a dick that huge? Girl, if you can make it through another class, you really are something special.</i>");
						break;
					}
					case 3: {
						writeSpeech(data.story.name, "player", "I saw "+data.story.friendName+" today. I found out what you did.");
						writeSpeech(data.story.sisterName, "jean", "Oh yeah? What did you think?");
						writeSpeech(data.story.sisterName, "jean", "... Hello?");
						writeSpeech(data.story.name, "player", "I don't know what I think. The situation is complicated, but at least I'm getting to know her now.");
						writeSpeech(data.story.sisterName, "jean", "No worries, you don't need to thank me yet. Enjoy the (dick)girlfriend experience and get back to me.");
						writeSpeech(data.story.name, "player", "I'm going to sleep. Good night.");
						writeSpeech(data.story.sisterName, "jean", "Good night <3");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Oh wow, she did a number on that card. And she even thought about giving it to "+data.story.name+" afterwards. Maybe I should give her a chance. Maybe she'll appreciate him in the same way I do? I could always use another toy around the house...<br>Oh alright fine. But I'll play with her one more time at least.</i>");
						break;
					}
					case 4: {
						document.getElementById('output').innerHTML += `
							If you're reading this, you found a bug. The error code is BEEP-BOOP RILEY. DM me that and I'll fix it asap.
						`;
						break;
					}
				}
			}
			data.story.friendReady = true;
			updateMenu;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="sceneTransition('dreaming')">
					Go to sleep
				</p>
			`;
			break;
		}
		case "teacherCorruption": {
			if (data.story.route == "dom") {
				switch (data.story.teacherScore) {
					case 0: {
						break;
					}
					case 1: {
						writeText("Plastering "+data.story.teacherName+"'s face with your sperm is probably going to be the highlight of your life. Her attitude while you were doing it left some room for improvement though.");
						writeText("That's easy enough to fix! Probably. You'll need to increase her trust in you a lot more, but also increase her suggestibility. A night of tweaking should make her a lot more open to the idea of continuing your experiments.");
						break;
					}
					case 2: {
						writeText("Alright, you've had your fun. "+data.story.teacherName+"'s mouth felt pretty nice, but if you wanted more you could get it from anywhere, and from someone you like more. You want a challenge more than you want another blowjob.");
						writeText("At this point you set your sights on a lofty goal, one that involves reprogramming your entire class's sense of common sense.");
						writeText("The work is hard, but engaging. After several hours you lay your phone on the table and you decide to get some rest.");
						break;
					}
					case 3: {
						writeText("A great success! The entire class watching you bust a nut in the teacher was a huge turn-on. AT this point you don't know what else you could really do.");
						writeText("You have some photos that you scroll through, admiring your work. One thing that stands out is "+data.story.teacherName+"'s wedding ring. She only ever brings up her husband when she's in a really bad mood.");
						writeText("Then again, she did seem to enjoy tormenting you in the past. Maybe he's actually a pretty cool guy? You find him in the app and mess with his common sense like you did with the class. The next time you feel like 'experimenting', you'll be doing it at "+data.story.teacherName+"'s house.");
						break;
					}
					case 4: {
						writeText(data.story.teacherName+" has been pretty mellow lately. She's probably been enjoying a life free from her abusive husband, and she deserves it!");
						writeText("The class has been pretty cool with you too. You decide that this next change is gonna be more of a selfless sort of thing. The school bathrooms have been kind of dirty lately, you might as well fix the problem yourself.");
						writeText("<i>The next event involves watersports content. It's optional to complete, so only talk to "+data.story.teacherName+" again if you're interested in that sort of thing.</i>");
						break;
					}
				}
			}
			else {
				switch (data.story.teacherScore) {
					case 1: {
						writeSpeech(data.story.name, "player", data.story.teacherName+" was teaching today.");
						writeSpeech(data.story.sisterName, "jean", "Ooh did you see her new outfit?");
						writeSpeech(data.story.name, "player", "Yeah, I got a real close look at it and her dick too.");
						writeSpeech(data.story.sisterName, "jean", "Lol yeah she can't even hide it.");
						writeSpeech(data.story.name, "player", "What the hell is your plan here?");
						writeSpeech(data.story.sisterName, "jean", "???");
						writeSpeech(data.story.name, "player", "She had me trapped against the wall. If she hadn't stopped I think she would have attacked me right there. So again, what exactly is your plan here?");
						writeSpeech(data.story.name, "player", "Hello???");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Fuck, I fucked up. Shit. I sicced a sex predator on my brother. Undo, undo, undo!<br>God, of course she'd be into him! Why didn't I check this stuff earlier? Fine, I'll get rid of the dick, and...</i>");
						writeText("But ideas begin to fly through "+data.story.sisterName+"'s mind.");
						writeSpeech(data.story.sisterName, "jean", "<i>I wonder. If I could just give her a little less self-confidence, and maybe tune up some other variables...<br>If this goes down like I think it will, it'll be hilarious.</i>");
						break;
					}
					case 2: {
						writeSpeech(data.story.sisterName, "jean", "Maybe with a certain teacher we both know?");
						writeSpeech(data.story.name, "player", "It was really weird. I don't know how to feel about it.");
						writeSpeech(data.story.sisterName, "jean", "Cmon wasn't it great seeing her get taken down a peg? Or at least a little hot? Those tears weren't the only salty fluid she was leaking if you know what I mean.");
						writeSpeech(data.story.name, "player", "Hold on are you spying on me? Can the app even do that?");
						writeSpeech(data.story.sisterName, "jean", "Whaaaaat? Nooooo. You're going crazy from no sleep. Go to bed.");
						writeSpeech(data.story.name, "player", "Wait");
						writeSpeech(data.story.sisterName, "jean", "???");
						writeSpeech(data.story.name, "player", "If you really are into humiliating her, you could at least give back my old dick size.");
						writeSpeech(data.story.sisterName, "jean", "No.");
						writeSpeech(data.story.name, "player", "Cmon, this is embarassing!");
						writeSpeech(data.story.name, "player", "Hello?");
						writeSpeech(data.story.name, "player", "Sis I know you're still awake! I can hear you over there!");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeText("Though she is stroking herself, "+data.story.sisterName+" can't keep herself erect between fits of laughter.");
						writeSpeech(data.story.sisterName, "jean", "Haha! Holy shit, that was great. 'It isn't normally like this!' God, that was good. Ahhh, I hate you so much.<br><i>But that was actually pretty nice. Seeing her get emasculated like that in front of my cute little bro... Ah, I'm hard again.</i>");
						writeText("She starts jerking off again, but eventually your last few texts return to her mind.");
						writeSpeech(data.story.sisterName, "jean", "<i>He's way cuter than before, but he does have a point. I wonder if I can do conditionals with this thing? I can... Oh, no. That's at least five hours of codewriting, fuck! Wait, hold on. Those candies could do the trick. I'll make her more open to the idea while I try to figure this shit out.</i>");
						break;
					}
					case 3: {
						writeSpeech(data.story.name, "player", "I'm going to bed. I'm tired.");
						writeSpeech(data.story.sisterName, "jean", "Alright alright, if you don't want to tell I won't smother you.");
						writeSpeech(data.story.name, "player", "...What's that supposed to mean?");
						writeSpeech(data.story.sisterName, "jean", "Nothing at all! What did it Sound like?");
						writeSpeech(data.story.name, "player", "Alright, now I know you're messing with me.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Shit... Ow... Ah, fuck. It hurts, but...</i>");
						writeText("Eventually she stops her experimenting and pulls her finger from her urethra.");
						writeSpeech(data.story.sisterName, "jean", "<i>This is bullshit. This isn't anywhere near as fun as he made it look. Maybe I need more lube. Or keep trying to mess with the sensitivity. It was so much easier last time.<br>Fuck it, I want a new toy. I'll give him one last time with her, then she's mine.</i>");
						break;
					}
					case 4: {
						writeSpeech(data.story.name, "player", "Yeah actually, I had a pretty good time today.");
						writeSpeech(data.story.sisterName, "jean", "Heeeeell yeah you showed that bitch what's WHAT.");
						writeSpeech(data.story.name, "player", "Couldn't you just give me my old dick size back? Using a strapon is embarrassing.");
						writeSpeech(data.story.sisterName, "jean", "No.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeText("There's a soft 'schlick' sound every few moments.");
						writeSpeech(data.story.sisterName, "jean", "<i>Shit... Ow... Ah, fuck. It hurts, but...</i>");
						writeText("Eventually she stops her experimenting and pulls her finger from her urethra.");
						writeSpeech(data.story.sisterName, "jean", "<i>This is bullshit. This isn't anywhere near as fun as he made it look. Maybe I need more lube. Or keep trying to mess with the sensitivity. It was so much easier last time.<br>Ah, I know! That fat ass schoolteacher, that's what I can do. I can... Oh, no. That's at least five hours of codewriting, fuck! Wait, hold on. Those candies could do the trick. I'll make her more open to the idea while I try to figure this shit out.</i>");
						break;
					}
				}
			}
			data.story.teacherReady = true;
			updateMenu;
			document.getElementById('output').innerHTML += `<p class="choiceText" onclick="sceneTransition('dreaming')">Go to sleep</p>`;
			break;
		}
		case "chefCorruption": {
			if (data.story.route == "dom") {
				switch (data.story.chefScore) {
					case 0: {
						writeText(data.story.chefName + " has always been there for you, and yet she's struggling right now. She's making payments, but her stress levels are through the roof. Even if you lower them, you'll need to help her find some way of dealing with them in the future.");
						writeText("And you have the perfect thing to do that. Some changes to yourself, and changes to her biology later, and you've got the perfect solution.");
						writeText("Jizz!");
						writeText("Obviously she isn't going to roll with that though. You'll need some way to disguise it. Maybe this is why the exotic shop was selling regular coffee creamer?");
						break;
					}
					case 1: {
						writeText("You spend some time browsing through " + data.story.chefName + "'s statistics and find that your efforts were successful. Her stress levels have gone down and she's overall happier. You might as well spend some more time making sure her business can stay afloat in the future. Maybe you'll tell her about all this one day and she'll thank you?");
						writeText("Well, maybe you'll keep her in the dark on this one.");
						break;
					}
					case 2: {
						writeText("You hadn't expected " + data.story.chefName + " to be so much of a mouth maniac. She was on you the whole time you were at the shop. You didn't mess with her mind too much aside from sprouting a taste for your dilkmilk, maybe she's just naturally orally fixated?");
						writeText("For now, she's hot and she wants more, so you might as well make it so that she gets more. And her business is already doing pretty well too. Next time you see her, you'll take advantage of that.");
						break;
					}
					case 3: {
						writeText("Your days working with " + data.story.chefName + " have been fun, but you'd like to help her out with her business directly.");
						writeText("Mostly so you can get paid, of course.");
						writeText("The cool stuff on sale at the exotic shop and everywhere else cost money, and you'd like to take the opportunity to earn it.");
						writeText("The old saying goes that 'you need to spend money to make money', and you take that to heart. Once of the candies advertised on the ticket at the exotic shop can help you out here.");
						break;
					}
				}
			}
			else {
				switch (data.story.chefScore) {
					case 1: {
						writeSpeech(data.story.name, "player", "I helped out at "+data.story.chefName+"'s today.");
						writeSpeech(data.story.sisterName, "jean", "Oh cool, how'd that go?");
						writeSpeech(data.story.name, "player", "Nothing really happened. I helped out and got an omelet.");
						writeSpeech(data.story.sisterName, "jean", "Aww that's nice of her. I wish she'd make me one.");
						writeSpeech(data.story.name, "player", "You'd need to go outside for that.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Ah, the beauty of perverts. I should rent out my friends more often.<br>Ah, shit! I forgot to check on "+data.story.chefName+"!</i>");
						writeText("Furious tapping ensues.");
						writeSpeech(data.story.sisterName, "jean", "<i>I don't think I changed her mind all that much. She still needs volunteers?<br>Oh, oh wow. She even got him to eat it... That's pretty hot. Letting her toy with my little brother like that...<br>Ooh, I think this is awakening something in me! Time to make a plan.</i>");
						break;
					}
					case 2: {
						writeSpeech(data.story.name, "player", "I helped out at "+data.story.chefName+"'s again.");
						writeSpeech(data.story.sisterName, "jean", "Spill the deets plz.");
						writeSpeech(data.story.name, "player", "Nothing happened. I'm going to bed.");
						writeSpeech(data.story.sisterName, "jean", "Going with the flow is fun bro. You can keep denying how you feel, but you'll crack and have a good time for it someday.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Hell yeah, you go girl! Make him choke on it! Oh shit, wait, he's actually choking!<br>Ah, he's okay. I'll fix up his throat to make sure that doesn't happen next time.</i>");
						writeText("Furious tapping ensues.");
						writeSpeech(data.story.sisterName, "jean", "<i>Cmon, you two are my favorite people, can't you get along? Alright "+data.story.chefName+", time to get your head together. You're a strong independent woman who don't need no cocksleeve! Well, maybe a little...</i>");
						writeText("...");
						writeSpeech(data.story.sisterName, "jean", "Zzzz");
						writeText("She's already fallen asleep. She got a sweet tooth, and made "+data.story.chefName+" crave candies too.");
						writeSpeech(data.story.sisterName, "jean", "Zzzz... Bro... Suck her dick... Zzzz");
						break;
					}
					case 3: {
						writeSpeech(data.story.name, "player", "I helped out at "+data.story.chefName+"'s again, I helped prepare the food.");
						writeSpeech(data.story.sisterName, "jean", "Rad.");
						writeSpeech(data.story.name, "player", "You okay? Normally you're a lot more interested in this kind of stuff.");
						writeSpeech(data.story.sisterName, "jean", "Sorry bro. Sleepy.");
						writeSpeech(data.story.name, "player", "Get some sleep then. Good night.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "Zzzz");
						writeText("She's already fallen asleep.");
						writeSpeech(data.story.sisterName, "jean", "Zzzz... Bro... Take it deeper... Zzzz");
						break;
					}
				}
			}
			data.story.chefReady = true;
			updateMenu;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="sceneTransition('dreaming')">
					Go to sleep
				</p>
			`;
			break;
		}
		case "officeCorruption": {
			if (data.story.route == "dom") {
				switch (data.story.officeScore) {
					case 0: {
						writeText("Thinking about what to do here is tougher than you'd thought it would be. You really want to push your limits with her, no being gentle like with your mother or sister. But at the same time you aren't interested in some brain-dead fuck-puppet.");
						writeText("Maybe what you need is a push to her already bitchy personality. To really have some fun with her traits and statistics, and make her walk the path to being a cum-dumpster herself.");
						writeText("Inspiration abound, you work well into the night. You'll have a lot of fun the next time you bump into her.");
						break;
					}
					case 1: {
						writeText(data.story.officeName + " is certainly facing some tough decisions right now. Obviously she still wants to be a strong independent woman, or at least to pretend to be one, but your interference is having none of that.");
						writeText("She's going to walk the path of a total whore, and she'll walk it with a smile.");
						writeText("You have a plan, and a few alterations to her body and immune system later, you're ready for the next time you two meet.");
						break;
					}
					case 2: {
						writeText(data.story.officeName + " has been doing quite well recently. Leaving her overnight was exactly what she needed.");
						writeText("She even intends to go back to that alley later and try to bump into you again, perfect.");
						writeText("But unfortunately she isn't completely ready yet. Her location log says she went back into work twice since you fished her out of the gutter. Maybe she intends to only be a part-time meat toilet? Unacceptable! Obviously you need to change her lifelong dream from 'Fortune 500 CEO' to 'STD-immune gutter whore'!");
						writeText("Playing the villain sometimes is actually pretty fun. Once you get it out of your system, you should...");
						break;
					}
				}
			}
			else {
				switch (data.story.officeScore) {
					case 1: {
						writeSpeech(data.story.name, "player", "I saw somebody jerking off in an alleyway if that counts.");
						writeSpeech(data.story.sisterName, "jean", "Was it a hobo? I thought I got rid of those.");
						writeSpeech(data.story.name, "player", "No it was some officewoman.");
						writeSpeech(data.story.sisterName, "jean", "Then yes, it counts. Details plz.");
						writeSpeech(data.story.name, "player", "It was weird. Wait, what do you mean you 'got rid' of the hobos?");
						writeSpeech(data.story.name, "player", data.story.sisterName+"?");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.sisterName, "jean", "<i>Ah cmon, this is bullshit. She runs away just when things are about to get good! Fuck that...</i>");
						writeText("Furious tapping ensues.");
						writeSpeech(data.story.sisterName, "jean", "Breathplay... Ugh, deathplay... Ooh, there it is, exhibitionism! Let's turn you waaaaay up. And maybe your wardrobe could do with some updating too...");
						break;
					}
					case 2: {
						writeSpeech(data.story.name, "player", "A flasher came up to me on the street and started rubbing herself against me.");
						writeSpeech(data.story.sisterName, "jean", "Ooh kinky.");
						writeSpeech(data.story.name, "player", "She came on me, it smelled gross.");
						writeSpeech(data.story.sisterName, "jean", "Oh whoops, I can fix that.");
						writeSpeech(data.story.name, "player", "You can't rewrite time. How are you going to 'fix' it?");
						writeSpeech(data.story.name, "player", "What the fuck did you just do to me?");
						writeSpeech(data.story.sisterName, "jean", "I fixed your sense of smell. Listen, I'll make sure she doesn't go out of her way to approach you again. Just avoid the alleyway if you really feel strongly about it. I'm reading up on some ideas for her anyway.");
						writeSpeech(data.story.name, "player", "Fine, just please don't 'fix' my senses without my permission again.");
						writeSpeech(data.story.sisterName, "jean", "Scout's honor. Good night.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeText("You mother greedily laps up the contents of a small dog bowl in the corner of the room, while your sister sits on her bed typing in code.");
						writeSpeech(data.story.sisterName, "jean", "<i>Boring... Boring... Give her a bigger head? The fuck? Boring... Ooh, this one sounds good. A super hero huh?.</i><br>Hey, there's no rush. You aren't getting another bowl.");
						writeText("There's a small whine from your mother as she forces herself to slow down. Tonight will last quite a while for her.");
						break;
					}
					case 3: {
						writeSpeech(data.story.name, "player", "No, nothing happened.");
						writeSpeech(data.story.sisterName, "jean", "You sure? You avoided that alleyway like you said you wanted to?");
						writeSpeech(data.story.name, "player", "Just go jerk off or something.");
						writeSpeech(data.story.sisterName, "jean", "One step ahead of you bro. Glad you had a good time.");
						writeText("...");
						writeText("A bit later, in the adjacent room...");
						writeSpeech(data.story.motherName, "lisa", "Please... Please I need it...");
						writeSpeech(data.story.sisterName, "jean", "Quiet. This is what you get. You aren't an animal, what makes you think you can act like one? One more word and you'll spend all night just like this.");
						writeText("Your mother is laying pinned underneath your sister, your sister's dick laying atop her lips. Quietly, she complies.");
						writeSpeech(data.story.sisterName, "jean", "<i>Now, where was I...<br>Right. So she's dressed up as a superhero now. That's pretty hot. She can't really get a tighter outfit though. Man, if "+data.story.name+" were to wear something like that...</i>");
						writeText("A glob of precum spurts out of "+data.story.sisterName+"'s cockhead onto your mother's face. A small amount of it gets into her nose, and she isn't unpleased about that.");
						writeSpeech(data.story.sisterName, "jean", "God, you're such a pig. If you want to snort my cum, fine! I'll fill your lungs up myself!");
						break;
					}
				}
			}
			data.story.officeReady = true;
			updateMenu;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="sceneTransition('dreaming')">
					Go to sleep
				</p>
			`;
			break;
		}
		case "dreaming": {
			if (tokyo == "soon") {
				writeScene("tokyoRe");
			}
			else {
				document.getElementById('output').innerHTML += `
					<p>You sleep dreamlessly.</p>
					<p class="choiceText" onclick="sceneTransition('morning')">
						Wake up
					</p>
				`;
			}
			break;
		}
		case "volunteering": {
			switch (data.story.chefScore) {
				case 0:
					writeText("You help out at the coffee shop for a little bit, and are given $10 for your troubles.");
					writeSpeech(data.story.chefName, "ava", "Thank you so much for your help, " + data.story.name + ". I wish I could give you more, but I still need to pay this month's electric bills.");
					data.story.time = "night";
					data.story.money +=10;
					updateMenu();
					writeTransition("homePlayerRoom", "Finish for the day");
				break;
				case 1:
					writeText("You help out at the coffee shop for a little bit, and are given $10 for your troubles.");
					writeSpeech(data.story.chefName, "ava", "Thank you so much for your help, " + data.story.name + ". I wish I could give you more, but I still need to pay this month's electric bills.");
					data.story.time = "night";
					data.story.money +=10;
					updateMenu();
					writeTransition("homePlayerRoom", "Finish for the day");
				break;
				case 2:
					writeText("You help out at the coffee shop for a little bit, and are given $10 for your troubles. The air within the cafe is tense, however.");
					writeSpeech(data.story.chefName, "ava", "Thank you for your help " + data.story.name + ".");
					data.story.time = "night";
					data.story.money +=10;
					updateMenu();
					writeTransition("homePlayerRoom", "Finish for the day");
				break;
				case 3:
					writeBig("images/real/general/handjob5.gif");
					writeText("You 'help' out at the coffee shop by providing flavor for the customers. You earn $15.");
					writeSpeech(data.story.chefName, "ava", "Thank you for your help " + data.story.name + ".");
					data.story.time = "night";
					data.story.money +=15;
					updateMenu();
					writeTransition("homePlayerRoom", "Finish for the day");
				break;
				case 4:
					writeBig("images/real/general/handjob5.gif");
					writeText("You 'help' out at the coffee shop by providing flavor for the customers. You earn $15.");
					writeSpeech(data.story.chefName, "ava", "Thank you for your help " + data.story.name + ".");
					data.story.time = "night";
					data.story.money +=15;
					updateMenu();
					writeTransition("homePlayerRoom", "Finish for the day");
				break;
			}
			break;
		}
		//Characters
		case "mother": {
			if (data.story.route == "dom") {
				switch (data.story.motherScore) {
					case 0: {
						if (data.story.motherReady == true) {
							writeEvent("mom1");
							unlockScene("mom1");
							writeTransition("schoolClassroom", "Finish up with school");
							data.story.motherReady = false;
						}
						else {
							writeText("You can still hear your mother in her room, schlicking sounds and wanton moans easily audible through her door. You should head to bed and fix this soon.");
							writeTransition("home", "Move away from her door.");
						}
						break;
					}
					case 1: {
						if (data.story.motherReady == true) {
							writeText("You really shouldn't be reading this. The second mother event was supposed to trigger in the morning. Here, I'll unlock it for you, go watch it with the laptop.");
							unlockScene("mom2");
							data.story.motherReady = false;
							writeTransition("homePlayerRoom", "Player's room");
						}
						else {
							writeSpeech(data.story.name, "player", "Hey mom!");
							writeText("She jumps in surprise at your greeting, it's clear she was deep in thought about something.");
							writeSpeech(data.story.motherName, "lisa", "Hello dear. Dinner is... Dinner will be ready soon.");
							writeText("There's a lot of hesitation and confliction in her voice. If you want this to progress further, you'll need to use the app tonight to make it happen.");
							writeTransition("home", "Go back");
						}
						break;
					}
					case 2: {
						if (data.story.motherReady == true) {
							writeEvent("mom3");
							unlockScene("mom3");
							data.story.motherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
						}
						else {
							writeText("You walk in through the door, tossing your bag onto the couch and taking a moment to relax.");
							writeSpeech(data.story.motherName, "lisa", "Welcome back, master.");
							writeText("Her voice drops in volume at that last word, careful not to be heard by your sister. She places a small plate of food on the coffee table for you.");
							writeSpeech(data.story.motherName, "lisa", "This should give you some energy to make it to dinner.");
							writeText("She's serving you much more faithfully lately, but you can tell she's still a little confused as to exactly why. If you want to push this further, you'll need to use the app on her tonight.");
							writeTransition("home", "Go back");
						}
						break;
					}
					case 3: {
						if (data.story.motherReady == true) {
							writeEvent("mom4");
							unlockScene("mom4");
							data.story.motherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
						}
						else {
							writeText("You walk in through the front door, and in moments your mother has rushed into the living room to greet you.");
							writeText("She sets down a bucket full of cleaning supplies and gives you a little curtsy in her sterile-looking cleaning uniform.");
							writeSpeech(data.story.motherName, "lisa", "Master! Welcome home. I was just about to clean up before dinner. Are you feeling... pent up?");
							writeText("There's a sly hunger in her eyes as she licks her lips.");
							writeText("It seems like this is how life will be from now on, unless you decide you want to push her a bit further tonight.");
							writeTransition("home", "Go back");
						}
						break;
					}
					case 4: {
						writeText("You relax onto the living room couch. Simply calling 'Mom' is enough to have her quickly running to respond to you.");
						writeSpeech(data.story.motherName, "lisa", "Master! You called?");
						writeText("It's clear that she was just in the middle of deep-cleaning the bathroom. It's probably spotless by now, but she's nothing if not thorough these days.");
						if (galleryCheck("mom5") == true && galleryCheck("mom6") == true) {
							writeText("With how much your relationship has changed over these last few days, it seems like she's a totally different person. Thanks to the app, it seems like this is how daily life is going to be from now on.");
							writeText("She's swallowing dryly as she eyes your crotch. At this point, you can't think of any way you could corrupt her farther.");
						}
						if (data.story.plugPops > 0) {
							if (galleryCheck("mom5") != true) {
								writeText("A plug pop is sitting in your pocket, but there's no real reason to use it on mom. You can get anal elsewhere.");
								writeText("The idea of keeping yourself clean at all times is an appealing one though. And with her latest changes, you can imaging mom would get a kick out of pleasing you in a new way.");
								writeTransition("deepCleaning", "Use a Plug Pop");
							}							
						}
						if (data.story.fruitGushers > 0) {
							if (galleryCheck("mom6") != true) {
								writeText("But you kinda do need to take a piss. You're about to tell her to wait outside, before an idea strikes you.");
								writeTransition("bathroomBreak", "Eat your Fruit Gushers");
							}
						}
						writeTransition("home", "Go back");
						break;
					}
				}
			}
			else {
				switch (data.story.motherScore) {
					case 1: {
						if (data.story.motherReady == true) {
							writeEvent("mom1S");
							unlockScene("mom1S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.motherReady = false;
						}
						else {
							writeSpeech(data.story.motherName, "lisa", "Was there something you needed?");
							writeText("It seems like mom's been changed in more than a few ways already. Her responses are short and to the point, and her daily routine seems to revolve around providing for you and "+data.story.sisterName+" without any fuss.");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.motherName + " any further yet.");
							writeText("You don't really have anything to ask her, so you just shake your head 'no' and she goes back to toweling off dishes.");
							writeTransition("home", "Go back.");
						}
						break;
					}
					case 2: {
						if (data.story.motherReady == true) {
							writeEvent("mom2S");
							unlockScene("mom2S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.motherReady = false;
						}
						else {
							writeSpeech(data.story.name, "player", "Hey mom, I'm home!");
							writeText("She's sitting on the couch reading a cookbook. She had a few recipes, but she was never much of a cook before. Her face is flushed, and there's a small teacup filled with white fluid sitting next to a used condom.");
							writeSpeech(data.story.motherName, "lisa", "Welcome back.");
							writeText("She answers without looking at you before taking another sip. Her body quivers as she drinks, and it really seems like she'd rather be masturbating right now.");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.motherName + " any further yet.");
							writeSpeech(data.story.motherName, "lisa", "Did you need something?");
							writeSpeech(data.story.name, "player", "No, not really.");
							writeText("She seems pretty repressed when your sister isn't around. Does "+data.story.sisterName+" not know about this, or does she just not care?");
							writeTransition("home", "Go back.");
						}
						break;
					}
					case 3: {
						if (data.story.motherReady == true) {
							writeEvent("mom3S");
							unlockScene("mom3S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.motherReady = false;
						}
						else {
							writeSpeech(data.story.name, "player", "Hey mom, I'm home!");
							writeSpeech(data.story.motherName, "lisa", "Welcome back! I'm in the kitchen!");
							writeText("You follow the sound of her voice and find her jacking off over a plate of food.");
							writeSpeech(data.story.motherName, "lisa", "Ah, I was just finishing your sister's meal. Did you want some milk with yours too, or maybe on your food?");
							writeText("She thrusts into her fist's grip, and before long her massive pair of swinging balls tighten and spots on her apron begin to darken. There's an audible sound as the head of her dick starts pushing out a long jelly-like rope of cum onto the food.");
							writeSpeech(data.story.motherName, "lisa", "Hah, hah... I still have more if you'd like some.");
							writeSpeech(data.story.name, "player", "No thanks, not today. I'll just take the food dry for now.");
							writeText("She nods with a sweet smile on her face as she picks up a sticky cord of cum that missed the plate and slurps it into her mouth.");
							writeText("It seems like mom's been pushed as far as she ever will be. She seems content with her new lot in life.");
							writeTransition("home", "Go back.");
						}
						break;
					}
					case 4: {
						if (data.story.motherReady == true) {
							writeEvent("mom4S");
							unlockScene("mom4S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.motherReady = false;
						}
						else {
							writeSpeech(data.story.name, "player", "Hey mom, I'm home!");
							writeSpeech(data.story.motherName, "lisa", "Welcome back! I'm in the kitchen!");
							writeText("You follow the sound of her voice and find her jacking off over a plate of food.");
							writeSpeech(data.story.motherName, "lisa", "Ah, I was just finishing your sister's meal. Did you want some milk with yours too, or maybe on your food?");
							writeText("She thrusts into her fist's grip, and before long her massive pair of swinging balls tighten and spots on her apron begin to darken. There's an audible sound as the head of her dick starts pushing out a long jelly-like rope of cum onto the food.");
							writeSpeech(data.story.motherName, "lisa", "Hah, hah... I still have more if you'd like some.");
							writeSpeech(data.story.name, "player", "No thanks, not today. I'll just take the food dry for now.");
							writeText("She nods with a sweet smile on her face as she picks up a sticky cord of cum that missed the plate and slurps it into her mouth.");
							writeText("It seems like mom's been pushed as far as she ever will be. She seems content with her new lot in life.");
							writeTransition("home", "Go back.");
						}
						break;
					}
				}
			}
			break;
		}
		case "sister": {
			if (data.story.route == "dom") {
				switch (data.story.sisterScore) {
					case 0: {
						writeSpeech(data.story.sisterName, "jean", "Fuck off  dweeb, I'm working. <br>... Nah, just messing with you bro. Hey, have you noticed what's up with mom?");
						writeText("You can't trigger an event right now. You'll need to put your plan into action by going to sleep if you want to do anything with " + data.story.sisterName + ".");
						writeTransition("homeSisterRoom", "Go back");
						break;
					}
					case 1: {
						if (data.story.sisterReady == true) {
							writeEvent("sister1");
							unlockScene("sister1");
							data.story.sisterReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.sisterName, "jean", "Fuck off. Working.");
							writeText("She's obviously still sexually frustrated. You'll need to fine-tune her with the app to fix that. A purchase from the exotic shop should also help.");
							writeTransition("homeSisterRoom", "Go back");
						}
						break;
					}
					case 2: {
						if (data.story.sisterReady == true) {
							if (data.story.toy == true) {
								writeEvent("sister2");
								unlockScene("sister2");
								data.story.sisterReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeText("You don't have what you need right now.");
								writeTransition("homeSisterRoom", "Go back");
							}
						}
						else {
							writeSpeech(data.story.sisterName, "jean", "Oh, hey bro. Listen, you haven't been hearing anything weird, have you?");
							writeSpeech(data.story.name, "player", "Nope. Why, you looking at weird anime porn?");
							writeText("She's still way too reserved for you to pull anything directly. You'll need to fix that the with the app tonight.");
							writeTransition("homeSisterRoom", "Go back");
						}
						break;
					}
					case 3: {
						if (data.story.sisterReady == true) {
							writeEvent("sister3");
							unlockScene("sister3");
							data.story.sisterReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("Once your sister notices you, she closes her eyes and opens her mouth invitingly.");
							writeSpeech(data.story.name, "player", "Good girl.");
							writeText("You have some fun with her, but if you want to trigger another event you'll need to use the app.");
							writeTransition("homeSisterRoom", "Go back");
						}
						break;
					}
					case 4: {
						if (data.story.sisterReady == true) {
							if (galleryCheck("sister4") == false) {
								if (data.story.plugPops > 0) {
									data.story.plugPops -= 1;
									writeEvent("sister4");
									unlockScene("sister4");
									data.story.time = "night";
									writeTransition("homePlayerRoom", "Finish for the day");
								}
								else {
									writeText("You have some plans for a way to break through "+data.story.sisterName+"'s hesitancy, but what you want requires a special something.");
									writeText("You don't have what you need right now, but the candy shop might.");
									writeTransition("homeSisterRoom", "Go back");
								}
							}
							else {
								if (data.story.horse == true && data.story.stretchyTaffy > 0) {
									data.story.stretchyTaffy -= 1;
									writeEvent("sister5");
									unlockScene("sister5");
									data.story.sisterReady = false;
									data.story.time = "night";
									writeTransition("homePlayerRoom", "Finish for the day");
								}
								else {
									writeBig("images/real/general/analDildo1.gif");
									writeSpeech(data.story.sisterName, "jean", "H-hey bro. Did you want to use me?");
									writeSpeech(data.story.name, "player", "Not right now.");
									writeText("She's been keeping herself ready for you, and thanks to the plug pop she stays tight. That said, it doesn't seem like she's getting a lot out of her toy these days.");
									writeText("It might be time to graduate her to the next level, but you'll need something from the exotic store to do that.");
									writeText("Not only that, but what you have planned is a little extreme for a normal human body. You'll probably want to grab some taffy from the candy shop too.");
									writeTransition("homeSisterRoom", "Go back");
								}
							}
						}
						else {
							writeSpeech(data.story.name, "player", "Hey, I was thinking-");
							writeText("You walk into her room expecting to find her playing with herself, maybe while also getting some work done, but instead you find herself laying face-down in her bed. Not even in a hot way, but in a 'I messed up' kind of way.");
							writeSpeech(data.story.name, "player", "Bad day?");
							writeText("She goans something at you, muffled by her pillows.");
							writeSpeech(data.story.name, "player", "I see, your favorite anime character died. Well, sometimes-");
							writeSpeech(data.story.sisterName, "jean", "Nooo! And he's already dead. I bent over to pick something up, and mom got a clear look at my asshole!");
							writeSpeech(data.story.name, "player", "Ah. Well, that's the cost of foregoing underwear.");
							writeSpeech(data.story.sisterName, "jean", "I thought it would be hot. I didn't think of what would happen if my own mother saw me!");
							writeSpeech(data.story.name, "player", "Did she say anything?");
							switch (data.story.motherScore) {
								case 1:
									writeSpeech(data.story.sisterName, "jean", "Yeah. She tried to act like she couldn't see it, but she was blushing like a nun.");
								break;
								case 2:
									writeSpeech(data.story.sisterName, "jean", "Yeah, and she slapped my ass right in the living room! She said that I shouldn't embarrass myself like that, even in the house.");
								break;
								case 3:
									writeSpeech(data.story.sisterName, "jean", "Yeah, and she started groping me right in the living room! She said that she 'liked my new look'.");
								break;
								case 4:
									writeSpeech(data.story.sisterName, "jean", "No, she just got on her knees right behind me. It looked like she was about to start rimming me right in the living room!");
								break;
							}
							writeSpeech(data.story.name, "player", "That doesn't sound all that bad.");
							writeSpeech(data.story.sisterName, "jean", "It was embarrassing! She's my mother!");
							writeText("It seems like "+data.story.sisterName+" is too embarrassed to enjoy the new family dynamic. You should solve this problem tonight with the app.");
							writeTransition("homeSisterRoom", "Go back");
						}
						break;
					}
					case 5: {
						writeText("After a single knock you push open the door to your sister's room.");
						writeSpeech(data.story.name, "player", "Hey, you got a second?");
						writeSpeech(data.story.sisterName, "jean", "Heeey bro~");
						writeText("As she responds, she rubs a small bulge in her abdomen.");
						writeSpeech(data.story.sisterName, "jean", "Just testin' out one of mom's new toys~<br>What's up?");
						if (data.story.motherScore > 3) {
							if (data.story.popRocks > 0) {
								if (galleryCheck("sister5") == false) {
									writeText("She and mom have both been reveling in being your fuckpuppets, but the pop rocks in your pocket are giving you an idea for a new kind of playtime.");
									writeTransition("familyFun", "I got some neat candy");
								}
							}
							if (galleryCheck("sister6") == false) {
								writeTransition("familyDinner", "It's dinner time");
							}
							if (galleryCheck("sister6") == true && galleryCheck("sister7") == true) {
								writeSpeech(data.story.name, "player", "Nothing, just enjoying the view.");
								writeSpeech(data.story.sisterName, "jean", "Hehe. Well, let me give you a better one.");
								writeText("She pulls her legs into a squatting position, and starts to slowly stand off the foot-long horsecock dildo buried deep inside her ass.");
								writeSpeech(data.story.sisterName, "jean", "Nggh~!");
								writeText("And just as she reaches the top, with just the flared tip inside of her, she sits back down to let the toy stretch her back out.");
							}
							writeTransition("homeSisterRoom", "Go back");
						}
						else {
							writeText("You have some fun ideas, but you'll need your mother to be on the same page as " + data.story.sisterName + " for them to work.");
							writeTransition("homeSisterRoom", "Go back");
						}
						break;
					}
				}
			}
			else {
				if (galleryCheck("sister1S") == false) {
					if (data.story.motherScore > 1 && data.story.friendScore > 1 && data.story.teacherScore > 1 && data.story.officeScore > 1 && data.story.chefScore > 1) {
						if (data.story.popRocks > 0) {
							writeSpeech(data.story.sisterName, "jean", "Hey. Was there something you needed little bro?");
							writeTransition("tasteOfRevenge", "'Yeah, I picked up some candy in town today...'");
						}
						else {
							writeSpeech(data.story.sisterName, "jean", "Hey. Was there something you needed little bro?");
							writeSpeech(data.story.name, "player", "No, but I don't suppose you could stop turning everyone we know into sex fiends?");
							writeSpeech(data.story.sisterName, "jean", "Nope!");
							writeText("It's not like she's an awful person, but she could be taken down a peg. You don't have what you need to make that happen though.");
						}
					}
					else {
						writeSpeech(data.story.sisterName, "jean", "Hey. Was there something you needed little bro?");
						writeSpeech(data.story.name, "player", "I don't suppose you could stop turning everyone we know into sex fiends?");
						writeSpeech(data.story.sisterName, "jean", "Nope!");
					}
				}
				else {
					if (galleryCheck("sister2S") == false) {
						if (data.story.popRocks > 0) {
							writeSpeech(data.story.sisterName, "jean", "Little brother, just the girl I wanted to see!");
							writeTransition("holeInWall1", "'Did you need something?'");
						}
						else {
							writeSpeech(data.story.sisterName, "jean", "Oh, hey. Here to play another prank?");
							writeSpeech(data.story.name, "player", "Nah, I don't have any more candy. <br>I-I mean, I would never!");
						}
					}
					else {
						if (galleryCheck("sister3S") == false) {
							writeSpeech(data.story.sisterName, "jean", "Ooh, there you are. Come here. Is that candy I smell?");
							writeTransition("tokyoPop", "Tell her about the Tokyo Pop filming");
						}
						else {
							if (galleryCheck("teacher5S") == true) {
								if (galleryCheck("sister4S") == true) {
									if (galleryCheck("sister5S") == true) {
										writeSpeech(data.story.sisterName, "jean", "Oh? Interested in another show?");
										writeSpeech(data.story.name, "player", "No! No more! Never again!");
									}
									else {
										writeSpeech(data.story.sisterName, "jean", "There you are! She's been stewing for a while now, wanna go see?");
										writeTransition("sister5S", "Go with her");
									}
								}
								else {
									writeText("Or, at least you thought she was. Something seems suspicious about all this.");
									writeTransition("sister4S", "Search around for her");
								}
							}
							else {
								writeSpeech(data.story.sisterName, "jean", "Oh? Interested in another show?");
								writeSpeech(data.story.name, "player", "No! No more! Never again!");
							}
						}
					}
				}
				writeTransition("homeSisterRoom", "Go back");
			}
			break;
		}
		case "friend": {
			if (data.story.route == "dom") {
				switch (data.story.friendScore) {
					case 0: {
						writeSpeech(data.story.friendName, "riley", "And so then he said that he'd rather eat the pit of a plum. I don't really...");
						writeText("She doesn't seem to notice you right now.");
						writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.friendName + ".");
						writeTransition("school", "Go back");
						break;
					}
					case 1: {
						if (data.story.friendReady == true) {
							writeText("Here you are, it's the moment of truth. If what you read on the app is true, then you just need to be confident enough to go through with this and it'll work. " + data.story.friendName + " is standing alone next against the wall. Humans worse off than you have had relationships even without an all-powerful app to guide them, so you should be fine. Right?");
							writeText("The fact that you look really good also helps your confidence as you walk up to her and catch her attention with a quick 'hey.'");
							writeSpeech(data.story.friendName, "riley", "Hey. " + data.story.name + ", right? We did that group project thing together.");
							writeSpeech(data.story.name, "player", "Yeah! Since class was over I was wondering if we could grab a coffee or something. I know this place in town.");
							writeSpeech(data.story.friendName, "riley", "Sure, that sounds great! What's it called?");
							writeText("And with that the two of you are hitting it off. That was easy! It looks like confidence, a friendly attitude, and a positive self image were all it took.");
							writeText("...");
							writeText("The two of you arrived and have had a lovely chat over coffee. " + data.story.chefName + " flashed a big smile at you once she saw you were here with a girl, but she hasn't embarassed you about it.");
							writeSpeech(data.story.friendName, "riley", "And so then he says 'That was a great story! I loved the character development, and the twist at the end was totes insane!'");
							writeText("She's been the one doing most of the talking, although you can't help but feel like she's hiding something. To be fair, you're hiding something as well. The hours go by quickly, after drinking the two of you took a walk around town.");
							writeSpeech(data.story.friendName, "riley", "This has been great! Let's do this again sometime?");
							writeSpeech(data.story.name, "player", "Absolutely. I'll see you at school again tomorrow?");
							writeSpeech(data.story.friendName, "riley", "See you then!");
							writeSpecial("You've become much closer with " + data.story.friendName + "!");
							writeText("You really feel like you have a shot with her, but if you wan't to seriously get any closer and form a real relationship you'll need to introduce her to the app. You'll need to be skilled enough to stop her from being physically able to take it from you, but otherwise you want to leave her unaltered.");
							data.story.friendReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.friendName, "riley", "Hey " + data.story.name + "! Wanna go grab something?");
							writeSpeech(data.story.name, "player", "Not today, sorry. I've actually got something cool to show you for next time though.");
							writeSpeech(data.story.friendName, "riley", "Ooh, now I'm hyped. You'd better deliver.");
							writeText("You'll need better control of the app and to go to sleep to put your plan into action.");
							writeTransition("school", "Go back");
						}
						break;
					}
					case 2: {
						if (galleryCheck("friend1") == false) {
							if (data.story.friendReady == true) {
								writeEvent("friend1");
								unlockScene("friend1");
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeText("Test for friend's non-ready scene at corruption level 2.");
								writeTransition("school", "Go back");
							}
							break;
						}
						else {
							if (data.story.friendReady == true) {
								writeEvent("friend2");
								unlockScene("friend2");
								data.story.friendReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeSpeech(data.story.friendName, "riley", "Hey " + data.story.name + ", How's it going?");
								writeSpeech(data.story.name, "player", "Pretty good, you?");
								writeSpeech(data.story.friendName, "riley", "Fine, fuckin' Chadsworth was talking about me behind my back though. He told...");
								writeText("You have a short conversation in the hall. If you want to trigger another event, you'll need to use the app tonight.");
								writeTransition("school", "Go back");
							}
							break;
						}
					}
					case 3: {
						if (data.story.friendReady == true) {
							if (data.story.caramelMelts > 0) {
								writeEvent("friend3");
								data.story.caramelMelts -= 1;
								unlockScene("friend3");
								data.story.friendReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeSpeech(data.story.friendName, "riley", "Morning! You grab the thing?");
								writeSpeech(data.story.name, "player", "Not yet, I was gonna head out an buy it in a bit.");
								writeText("You don't have what you need right now. There's a lot you can do with the app, but if you want this all to run smoothly, you should probably grab something from the candy shop.");
								writeTransition("school", "Go back");
							}
						}
						else {
							writeSpeech(data.story.friendName, "riley", "Heeey! The other night was really fun, I'd love to do that again sometimes.");
							writeSpeech(data.story.name, "player", "Actually, I've been working on using the app, and I have something neat planned for later.");
							writeSpeech(data.story.friendName, "riley", "Ooh, building the anticipation. I was shaking just eating my breakfast after we finished last time, I hope this one will be fun too.");
							writeSpeech(data.story.name, "player", "Yeah, you'll know it when it happens.");
							writeTransition("school", "Go back");
						}
						break;
					}
					case 4: {
						if (data.story.friendReady == true) {
							writeEvent("friend4");
							unlockScene("friend4");
							data.story.friendReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.friendName, "riley", "Morning.");
							writeSpeech(data.story.name, "player", "Hey, good morning. How's it going?");
							writeSpeech(data.story.friendName, "riley", "Eeh. Not enough sleep. Could you turn down the sensitivity? I couldn't get off my dildo last night.");
							writeSpeech(data.story.name, "player", "Oh, sorry. The numbers for having a really good time aren't the same as the ones good for regular life.");
							writeSpeech(data.story.friendName, "riley", "Hey. 'You make me cum too much' is not a deal breaker for me.");
							writeText("You both have a laugh and talk for awhile. Some guy has been bugging her lately, but she says it's no big deal. You should talk to her tonight about some more uses of the app, if you have an idea that could help her out.");
							writeTransition("school", "Go back");
						}
						break;
					}
					case 5: {
						if (data.story.friendReady == true) {
							if (data.story.stretchyTaffy > 0) {
								data.story.stretchyTaffy -= 1;
								writeEvent("friend5");
								unlockScene("friend5");
								data.story.friendReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeSpeech(data.story.friendName, "riley", "Hey, you got the...<br>the goods?");
								writeSpeech(data.story.name, "player", "The taffy? No. You make it sound like a drug deal by the way.");
								writeSpeech(data.story.friendName, "riley", "If it's as good as that caramel, then it might as well be.");
								writeSpeech(data.story.name, "player", "Well anyways I haven't picked it up yet. You sure about this plan?");
								writeSpeech(data.story.friendName, "riley", "Yeah. You bring the taffy, you get to watch me turn Chadsworth into a harem member.");
								writeSpeech(data.story.name, "player", "I dunno...");
								writeSpeech(data.story.friendName, "riley", "Hey, you don't wanna ruin his life, then we don't have to. But don't you already have like, five other side chicks?");
								writeSpeech(data.story.name, "player", "No no, it isn't that. It's just that... He's a dude. I feel conflicted about being part of a lewd dude plan.");
								writeSpeech(data.story.friendName, "riley", "Well, if you change your mind just bring the taffy. Oh, hey, did you get the new Smash?");
								writeText("You don't have what you need right now, but the two of you talk about video games for awhile.");
								writeTransition("school", "Go back");
							}
						}
						else {
							writeSpeech(data.story.friendName, "riley", "Morning dude! How's it going?");
							writeSpeech(data.story.name, "player", "Hey, you seem chipper. You have fun with, uh.");
							writeSpeech(data.story.friendName, "riley", "Chelsey? Nah, I loaned her out to the cheerleading squad, got some mad friendship points from it too.");
							writeSpeech(data.story.name, "player", "'Friendship points'?");
							writeSpeech(data.story.friendName, "riley", "Yeah, you know. Carry needs a ride to the laundromat, Charlie needs a cock to torment soemtimes. Friends help friends. Hey, you should meet them. I won't tell them about the app, you could just make some more friends.");
							writeText("The two of you chat for awhile, it's nice. It doesn't seem like you or "+data.story.friendName+" need the app anymore to help your relationship.");
							writeTransition("school", "Go back");
						}
						break;
					}
				}
			}
			else {
				switch (data.story.friendScore) {
					case 1: {
						if (data.story.friendReady == true) {
							writeEvent("friend1S");
							unlockScene("friend1S");
							writeTransition("streets", "Head into town");
							data.story.friendReady = false;
						}
						else {
							writeSpeech(data.story.friendName, "riley", "Ah, "+data.story.name+"! Hey, I'm really sorry I ditched you the other day.");
							writeSpeech(data.story.name, "player", "Hey, it wasn't a big deal. What did you need to tell me?");
							writeSpeech(data.story.friendName, "riley", "Um... I'm sorry. It's something big, but I need to do something. Another time?");
							writeSpeech(data.story.name, "player", "I guess. I'll see you around then?");
							writeSpeech(data.story.friendName, "riley", "Yeah, sorry.");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.friendName + " any further yet.");
							writeText("...");
							writeSpeech(data.story.friendName, "riley", "<i>Damnit, come on " + data.story.friendName + "! Just do it already! Alright, tomorrow for sure.</i>");
							writeTransition("school", "Go back");
						}
						break;
					}
					case 2: {
						if (data.story.friendReady == true) {
							writeEvent("friend2S");
							unlockScene("friend2S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.friendReady = false;
						}
						else {
							writeText("By the time you start walking over to " + data.story.friendName + ", she's already leaving again.");
							writeSpeech(data.story.name, "player", "Hey, " + data.story.friendName + "?");
							writeSpeech(data.story.friendName, "riley", "Ngh... "+data.story.name+"! I'm sorry, I was just on my way to the bathroom.");
							writeSpeech(data.story.name, "player", "Okay... Are you avoiding me? If you are, I'll back off.");
							writeSpeech(data.story.friendName, "riley", "NO! No, sorry. Things are just... Hard, right now. Complicated. I need to go.");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.friendName + " any further yet.");
							writeText("...");
							writeSpeech(data.story.friendName, "riley", "<i>Why!? Why can't I stop getting hard long enough to talk to him? He probably thinks I hate him... Or that I have some gross health problem. Maybe I do...</i>");
							writeSpeech(data.story.friendName, "riley", "<i>Wait, I've got it. If I can't find the time, I'll leave him a letter! I'll just fap one more time, and then I can get home and get started on it. Just one more time...</i>");
							writeTransition("school", "Go back.");
						}
						break;
					}
					case 3: {
						if (data.story.friendReady == true) {
							writeEvent("friend3S");
							unlockScene("friend3S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.friendReady = false;
						}
						else {
							writeSpeech(data.story.name, "player", "Hey, " + data.story.friendName + "?");
							writeSpeech(data.story.friendName, "riley", data.story.name+", hi! How have you been?");
							writeSpeech(data.story.name, "player", "I've been doing alright, "+data.story.teacherName+"'s classes have been going well so far.<br>You seem a little on edge, you okay?");
							writeSpeech(data.story.friendName, "riley", "Mhmm! I just, uh...");
							writeSpeech(data.story.name, "player", "Need to go relieve yourself again?");
							writeText("She holds down the hem of her skirt as she awkwardly sways from side to side, looking at the floor.");
							writeSpeech(data.story.name, "player", "It's okay. Hey, we should hang out sometime. I want a chance to really get to know you.");
							writeSpeech(data.story.friendName, "riley", "Get to know me?");
							writeSpeech(data.story.name, "player", "Yeah. Just spend some time together and relax.<br>You're uh... Leaking.");
							writeText("Her face goes bright red as she realizes a splotch of precum has left a dark spot on the front of her skirt. She runs off down the hall.");
							writeSpeech(data.story.name, "player", "See you around!");
							writeText("She stops her run to turn back to you, and waves in your direction before taking off again.");
							writeSpeech(data.story.name, "player", "<i>I wonder how I can get her to relax more around me?</i>");
							writeTransition("school", "Go back");
						}
						break;
					}
					case 4: {
						if (data.story.friendReady == true) {
							writeEvent("friend4S");
							unlockScene("friend4S");
							data.story.friendReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
						}
						else {
							writeSpeech(data.story.friendName, "riley", ""+data.story.name+"! Hey, "+data.story.name+"!");
							writeSpeech(data.story.name, "player", "That is the loudest whisper I've ever heard. What's up, did you need relief again?");
							writeText("She nods hesitantly.");
							writeSpeech(data.story.name, "player", "No worries. You know, if you'd let me know before we could have been doing this a lot sooner. You wanna go grab a coffee after this?");
							writeText("She nods excitedly.");
							writeText("It seems like she's been pushed as far as she ever will be. At least she's happy with her new body now that you're around to help her.");
							writeTransition("school", "Go back.");
						}
						break;
					}
				}
			}
			break;
		}
		case "teacher": {
			if (data.story.route == "dom") {
				switch (data.story.teacherScore) {
					case 0: {
						writeSpeech(data.story.teacherName, "kendra", "Oh? " + data.story.name + "? Here to take up my offer on those take-home assignments? I can't imagine you'll be passing if you don't.");
						writeText("You can't trigger an event right now. You'll need to put your plan into action by going to sleep if you want to do anything with " + data.story.teacherName + ".");
						writeTransition("schoolClassroom", "Go back");
						break;
					}
					case 1: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher1");
							unlockScene("teacher1");
							data.story.teacherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.teacherName, "kendra", "Ah, " + data.story.name + ". Is it time for another... experiment?");
							writeSpeech(data.story.name, "player", "Not today, I'm not really feeling up to it.");
							writeSpeech(data.story.teacherName, "kendra", "I see... Well, do you have any time? You fell asleep during the section on the morality associated with godhood. I could give you a refresher.");
							writeText("If you want to trigger another event, you'll need to corrupt " + data.story.teacherName + " further tonight.");
							writeTransition("schoolClassroom", "Go back");
						}
						break;
					}
					case 2: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher2");
							unlockScene("teacher2");
							data.story.teacherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.teacherName, "kendra", "Ah, " + data.story.name + ". Is it time for another... experiment?");
							writeSpeech(data.story.name, "player", "Not today, I'm not really feeling up to it.");
							writeText("She nods, understandingly.");
							writeSpeech(data.story.teacherName, "kendra", "I was wondering actually, about what I should call you.");
							writeSpeech(data.story.name, "player", "Oh yeah, you called me 'Master' after our last session.");
							writeSpeech(data.story.teacherName, "kendra", "Yes, you see, I was-");
							writeSpeech(data.story.name, "player", "I like it. Keep using it.");
							writeSpeech(data.story.teacherName, "kendra", "But during class?");
							writeSpeech(data.story.name, "player", "Oh yeah, I guess I'd get some undue attention. Keep it a private sort of thing.");
							writeSpeech(data.story.teacherName, "kendra", "Of course, master.");
							writeText("If you want to trigger another event, you'll need to corrupt " + data.story.teacherName + " further tonight.");
							writeTransition("schoolClassroom", "Go back");
						}
						break;
					}
					case 3: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher3");
							unlockScene("teacher3");
							data.story.teacherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("The sound of "+data.story.teacherName+"'s ass being slapped resounds through the now-empty room.");
							writeSpeech(data.story.name, "player", "Good session today, teach. I feel very educated.");
							writeSpeech(data.story.teacherName, "kendra", "Ngh... That is it, young man, I am putting my foot down!");
							writeSpeech(data.story.name, "player", "Excuse me?");
							writeSpeech(data.story.teacherName, "kendra", "Yes. Fucking me in the middle of class? Broadcasting my voice over the intercome? All of that is completely fine, but the way you're holding that phone is weakening your wrist strength. That slap was not even half the strength of yesterday's. Here, studies have shown that holding it with your fingers...");
							writeText("...");
							writeSpeech(data.story.name, "player", "Oh hey, that is more comfortable, thanks.");
							writeSpeech(data.story.teacherName, "kendra", "Not a problem. Now, I still have homework to g-");
							writeText("You push her down onto the floor and grab onto her hair.");
							writeSpeech(data.story.name, "player", "Here, a reward.");
							writeText("She's certainly fun to play with, but if you want to trigger another event, you'll need to corrupt " + data.story.teacherName + " further tonight.");
							writeTransition("schoolClassroom", "Go back");
						}
						break;
					}
					case 4: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher4");
							unlockScene("teacher4");
							data.story.teacherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("You pull out of " + data.story.teacherName + " and begin to clean yourself off with a towel she brought in her bag especially for you.");
							writeSpeech(data.story.name, "player", "Hey. No ring today?");
							writeSpeech(data.story.teacherName, "kendra", "Ngf... So full...~");
							writeText("A good slap snaps her out of it.");
							writeSpeech(data.story.teacherName, "kendra", "Nnn! More!");
							writeText("Mostly.");
							writeSpeech(data.story.name, "player", "Your ring?");
							writeSpeech(data.story.teacherName, "kendra", "Ah, I'm divorcing that piece of sissy trash. It turns out he'd been cheating on me. That, and his new impotence, both leave me with no other choice really.");
							writeSpeech(data.story.name, "player", "Ah, that makes sense.");
							writeSpeech(data.story.teacherName, "kendra", "Master, I know this might sound sudden, but-");
							writeSpeech(data.story.name, "player", "No. You're a used-cumrag right now, and even if you cleaned yourself off you'd be a cumrag on the inside too. I won't take his place.");
							writeSpeech(data.story.teacherName, "kendra", "Ah, no, I wasn't talking about marriage. Doing such a thing with a student, disgraceful. No, I was hoping you could get me pregnant. My husband and I last had sex only two weeks ago. If I became pregnant now, I could claim it as his.");
							writeSpeech(data.story.name, "player", "Jesus, I forget how fucked up you are sometimes. Go ahead and beg like a dog and I'll consider it.");
							writeText("She slides off the desk and begins to bark like a dog for you to impregnate her. While it's certainly hilarious, you won't be able to trigger another scene unless you corrupt her further tonight.");
							writeTransition("schoolClassroom", "Go back");
						}
						break;
					}
					case 5: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher5");
							unlockScene("teacher5");
							data.story.teacherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.name, "player", "God, it stinks in here.");
							writeSpeech(data.story.teacherName, "kendra", "Master! Oh master, welcome to the toilets! Would you like to use me? None of the other students can match up to you.");
							writeSpeech(data.story.name, "player", "No thanks, you smell like piss.");
							writeSpeech(data.story.teacherName, "kendra", "Oh, my ex husband is in the next room over! I don't think he's been used for pissing yet. If you fuck him, I could imagine that you're having sex with me!");
							writeSpeech(data.story.name, "player", "Wow, you really are broken.");
							writeSpeech(data.story.teacherName, "kendra", "Yes, yes I am! Please, I know you've been drinking a lot of water today. You don't need to fuck me, just using me as your urinal would be enough.");
							writeSpeech(data.story.name, "player", "Yeah, I don't know about that. You are pretty soaked. I should probably just go to the actual restroo-");
							writeSpeech(data.story.teacherName, "kendra", "NO! No please! They don't want it like I do, they can't even beg you for it!");
							writeSpeech(data.story.name, "player", "... The toilets?");
							writeSpeech(data.story.teacherName, "kendra", "They're awful! They're a breeding ground for disease, and they just dump all that precious p-");
							writeSpeech(data.story.name, "player", "Yeah I think I get the picture. Hey, you aren't going to die if I just leave you here, are you?");
							writeSpeech(data.story.teacherName, "kendra", "Oh no, Willie the janitor comes by to unshackle me in an hour. I've been paying him for food too, since I'm always starving by the end of my shift.");
							writeSpeech(data.story.name, "player", "And you pay him with?");
							writeSpeech(data.story.teacherName, "kendra", "With money. I'm a student urinal. Paying with my body? To a school janitor? That'd be disgusting. So, will you please use me?");
							writeText("With a sigh you realize you could go for a piss, and unzip yourself.");
							writeTransition("schoolClassroom", "Go back");
						}
						break;
					}
					case 6: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher6");
							unlockScene("teacher6");
							data.story.teacherReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("Test for teacher's non-ready scene at corruption level 6.");
							writeTransition("schoolClassroom", "Go back");
						}
						break;
					}
				}
			}
			else {
				switch (data.story.teacherScore) {
					case 1: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher1S");
							unlockScene("teacher1S");
							writeTransition("school", "Head out into the hallway");
							data.story.teacherReady = false;
						}
						else {
							writeText("The classroom is full of an awkward silence once you and " + data.story.teacherName + " are the only ones inside.");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.teacherName + " any further yet.");
							writeSpeech(data.story.teacherName, "kendra", "Was there something you needed? I'm just grading papers.");
							writeSpeech(data.story.name, "player", "No, sorry. I was just leaving.");
							writeText("She looks like she wants to stop you, but is obviously feeling very conflicted right now. It's strange to see her acting so normal in what is basically too-small swimwear.");
							writeTransition("schoolClassroom", "Go back.");
						}
						break;
					}
					case 2: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher2S");
							unlockScene("teacher2S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.teacherReady = false;
						}
						else {
							writeSpeech(data.story.teacherName, "kendra", "Come here for a moment. I want to talk about your Kant assignment.");
							writeSpeech(data.story.name, "player", "I... Sure. Do you not want to talk about-");
							writeSpeech(data.story.teacherName, "kendra", "There is nothing else to talk about right now.");
							writeText("She seems frustrated and very pent up. It seems like she's taking those frustrations out on you through schoolwork.");
							writeSpeech(data.story.teacherName, "kendra", "In short, there's nothing on the subject of relativism, and yet you decide it's his main focus? There's no evidence in your whole paper...");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.teacherName + " any further yet. still, if she doesn't do anything, you might end up needing to do a 100+ paper by sunday.");
							writeTransition("schoolClassroom", "Go back.");
						}
						break;
					}
					case 3: {
						if (data.story.teacherReady == true) {
							writeText("She's grading papers like a real teacher would. When she notices you're staying as everyone else leaves, she locks eyes with you.");
							writeSpeech(data.story.teacherName, "kendra", "Something you need, " + data.story.name + "?");
							if (galleryCheck("teacher3S") == false) {
								if (data.story.plugPops > 0) {
									writeText("With how desperate she must be to get off at this point, she's pretty likely to think of anal as a viable strategy. A Plug Pop would make that a lot easier for the both of you.");
									writeTransition("smothering", "Give her a Plug Pop");
								}
								else {
									writeText("With how desperate she must be to get off at this point, she's pretty likely to think of anal as a viable strategy. A Plug Pop would make that a lot easier for the both of you, but you don't have one right now.");
								}
							}
							else {
								writeText("You've already tried a Plug Pop, but it wasn't quite enough.");
							}
							if (galleryCheck("teacher4S") == false) {
								if (data.story.stretchyTaffy > 0) {
									writeText("You've got some stretchy taffy in your bag. If the plug could open doors, the taffy could smash them wide open.");
									writeTransition("sounding", "Give her some Stretchy Taffy");
								}
								else {
									writeText("You could also use some stretchy taffy if you put your creativity to it, but you don't have any right now.");
								}
							}
							writeTransition("schoolClassroom", "Go back.");
						}
						else {
							writeSpeech(data.story.teacherName, "kendra", "And so that's why your claim is completely baseless! Did you even read the quotations in the text?");
							writeSpeech(data.story.name, "player", "I might have just missed that part...");
							writeSpeech("???", "scripts/gamefiles/none.png", "Jeez, " + data.story.teacherName + " sure does get on " + data.story.name + "'s case a lot.");
							writeSpeech("???", "scripts/gamefiles/none.png", "Charlie says they've been spending a lot of time after class together. Do you think-");
							writeSpeech("???", "scripts/gamefiles/none.png", "" + data.story.teacherName + "? With someone like " + data.story.name + "? You've got to be kidding.");
							writeText("As the last student files out of the classroom, the two of you are alone.");
							writeSpeech(data.story.teacherName, "kendra", "Ah, finally, we're alone...");
							writeText("She starts grinding herself against you, rubbing the bulge in her shorts against your soft cheeks.");
							writeSpeech(data.story.name, "player", "Do you really need to be such a bitch in class?");
							writeSpeech(data.story.teacherName, "kendra", "We need to keep up appearances, and you really did flunk that paper. What sort of useless teacher would I be if I just let you pass because I can't get enough of how you make me feel?");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.teacherName + " any further yet. While the two of you don't have enough time to get serious with each other, riling her up is enough to convincer her to bump up your grade slightly.");
							writeText("...");
							writeSpeech(data.story.teacherName, "kendra", "Have you given any thought to your career lately?");
							writeText("The seriousness of the topic catches you off guard. You and her had been fooling around a little, mostly you calling her names while she tried to make it seem like you were failing the class.");
							writeSpeech(data.story.name, "player", "Not... really?");
							writeText("With the powers your sister has, finding a job wasn't a very high priority.");
							writeSpeech(data.story.teacherName, "kendra", "You know, that's the same answer " + data.story.sisterName + " gave.");
							writeSpeech(data.story.name, "player", "I thought it was against the rules to talk about other students.");
							writeSpeech(data.story.teacherName, "kendra", "Oh, don't be like that. Breaking one more rule between us won't hurt.");
							writeSpeech(data.story.name, "player", "She isn't very fond of you.");
							writeSpeech(data.story.teacherName, "kendra", "Of course she isn't. She always wanted to put in the bare minimum, thinking she'd apply herself for real once she got out into the real world. The fact that she still lives here in the city is quite telling of how that turned out.");
							writeSpeech(data.story.name, "player", "Shut up, she's doing fine.");
							writeSpeech(data.story.teacherName, "kendra", "Oh? Hit a nerve? Well, fine is exactly my point. She was a gifted student in everything but discipline. A lot like you. I think you could do better than staying in this city.");
							writeSpeech(data.story.name, "player", "...");
							writeSpeech(data.story.teacherName, "kendra", "Haaah... Fuck, the mood is gone. You should be getting home now.");
							writeTransition("schoolClassroom", "Go back.");
						}
						break;
					}
					case 4: {
						if (data.story.teacherReady == true) {
							writeEvent("teacher5S");
							unlockScene("teacher5S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.teacherReady = false;
						}
						else {
							writeSpeech(data.story.teacherName, "kendra", "By temporary, I was expecting more 'two hours' and not 'two months'.");
							writeText("You're holding her overstretched dick in both hands. Hours of play with dildos and taffy have left her urethra gaping wide enough you could fist her down to the prostate.");
							writeSpeech(data.story.name, "player", "It'll go back to normal once you stop playing with it.");
							writeSpeech(data.story.teacherName, "kendra", "But I caaan't... I finally find a way to cum on my own, and you want me to just stop?");
							writeText("As a response, you drop her dick onto the desk. As it hits, she lets out a gutteral moan and her dick oozes precum onto some papers.");
							writeSpeech(data.story.teacherName, "kendra", "Fuck! Shit, I'll need an excuse for these.");
							writeText("You respond with a knowing smile, she'll figure something out.");
							writeSpeech(data.story.name, "player", "Listen, if you want to fix it, you know how. Otherwise, you're already worthless dick will be even more useless.");
							writeSpeech(data.story.teacherName, "kendra", "I might be a masochist, but this is too far. Just ask the sellers of the candy if there's another way!");
							writeSpeech(data.story.name, "player", "Wah wah, you big baby. I'm going home. Try not to accidentally fuck your dick with a horse dildo while I'm gone!");
							writeText("...");
							writeSpeech(data.story.teacherName, "kendra", "<i>Did he actually notice the imprint of the tip? Is it that obvious?<br>... No, you can't see it. He was just fucking with me.</i>");
							writeText("It seems like " + data.story.teacherName + " has been pushed as far as she ever will be. So long as she's careful, she should have a fun life ahead of her.");
							
							writeTransition("schoolClassroom", "Go back.");
						}
						break;
					}
					case 5: {
						if (data.story.teacherReady == true) {
							writeText("She's grading papers like a real teacher would. When she notices you're staying as everyone else leaves, she shoots you a wink and sticks her tongue out.");
							writeText("It seems like all that's in her bag are bundles and bundles of papers, probably a big test from another class.");
							if (data.story.plugPops > 0) {
								writeText("It doesn't seem like she brought the strap-on today. Anal actually takes a fair amount of prep time.");
								writeText("But it doesn't have to. The plug pop in your bag could open quite a few new doors. She'd probably be pretty receptive to the idea too, since she's still searching for a way to get off with her dick being as useless as it is.");
								writeTransition("smothering", "Give her a Plug Pop");
							}
							if (data.story.stretchyTaffy > 0) {
								writeText("On the other hand you've got some stretchy taffy in your bag. If the plug could open doors, the taffy could smash them wide open.");
								writeText("You can actually feel your dicklette harden a little at the idea. If you play your cards right, you could be the one doing the fucking, and not with a plastic pole.");
								writeTransition("sounding", "Give her some Stretchy Taffy");
							}
							writeTransition("schoolClassroom", "Go back.");
						}
						else {
							writeTransition("schoolClassroom", "Go back.");
						}
						break;
					}
				}
			}
			break;
		}
		case "chef": {
			if (data.story.route == "dom") {
				switch (data.story.chefScore) {
					case 0: {
						writeSpeech(data.story.chefName, "ava", data.story.name + "! Perfect timing. A group of college students came in a moment ago, and I could use an extra set of hands. Can you help me out?");
						writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.chefName + ".");
						writeTransition("volunteering", "Help " + data.story.chefName + " out");
						writeTransition("streetsRestaurant", "Go back");
						break;
					}
					case 1: {
						if (data.story.chefReady == true) {
							if (data.story.creamer == false) {
								writeText(data.story.chefName + " doesn't realize it, but subtle clues are showing that your changes have taken effect. You have a plan, but you don't have what you need right now to pull it off. You'll need something to sneak the taste of semen into her drink. The exotic shop will have what you need.");
								writeSpeech(data.story.chefName, "ava", data.story.name + "! Perfect timing. A group of college students came in a moment ago, and I could use an extra set of hands. Can you help me out?");
								writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.chefName + ".");
								writeTransition("volunteering", "Help " + data.story.chefName + " out");
								writeTransition("streetsRestaurant", "Go back");
							}
							else {
								data.story.money += 15;
								writeEvent("chef1");
								unlockScene("chef1");
								data.story.chefReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
						}
						else {
							writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.chefName + ".");
							writeTransition("volunteering", "Help " + data.story.chefName + " out");
							writeTransition("streetsRestaurant", "Go back");
						}
						break;
					}
					case 2: {
						if (data.story.chefReady == true) {
							writeEvent("chef2");
							unlockScene("chef2");
							data.story.chefReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.chefName + ".");
							writeTransition("volunteering", "Help " + data.story.chefName + " out");
							writeTransition("streetsRestaurant", "Go back");
						}
						break;
					}
					case 3: {
						if (data.story.chefReady == true) {
							writeEvent("chef3");
							unlockScene("chef3");
							data.story.chefReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.chefName + ".");
							writeTransition("volunteering", "Help " + data.story.chefName + " out");
							writeTransition("streetsRestaurant", "Go back");
						}
						break;
					}
					case 4: {
						if (data.story.chefReady == true) {
							if (data.story.popRocks > 0) {
								data.story.popRocks -= 1;
								writeEvent("chef4");
								unlockScene("chef4");
								data.story.chefReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeText("You don't have what you need right now. Some exotic candy is just what you need to help " + data.story.chefName + "'s business out.");
								writeTransition("volunteering", "Help " + data.story.chefName + " out");
								writeTransition("streetsRestaurant", "Go back");
							}
						}
						else {
							writeText("You can't trigger an event right now. You'll need to corrupt her with the app by going to sleep if you want to do anything with " + data.story.chefName + ".");
							writeTransition("volunteering", "Help " + data.story.chefName + " out");
							writeTransition("streetsRestaurant", "Go back");
						}
						break;
					}
				}
			}
			else {
				switch (data.story.chefScore) {
					case 1: {
						if (data.story.chefReady == true) {
							writeEvent("chef1S");
							unlockScene("chef1S");
							writeTransition("streets", "Head back onto the streets");
							data.story.chefReady = false;
						}
						else {
							writeSpeech(data.story.chefName, "ava", data.story.name + "! It's so good to see you. I don't need any help right now actually, what can I do for you?");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.chefName + " any further yet.");
							writeTransition("streetsRestaurant", "Have the usual and leave.");
						}
						break;
					}
					case 2: {
						if (data.story.chefReady == true) {
							writeEvent("chef2S");
							unlockScene("chef2S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.chefReady = false;
						}
						else {
							writeSpeech(data.story.chefName, "ava", data.story.name + "! It's so good to see you. I don't need any help right now actually, what can I do for you?");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.chefName + " any further yet.");
							writeTransition("streetsRestaurant", "Have the usual and leave.");
						}
						break;
					}
					case 3: {
						if (data.story.chefReady == true) {
							if (data.story.popRocks > 0) {
								data.story.popRocks -= 1;
								writeEvent("chef3S");
								unlockScene("chef3S");
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish up for the day");
								data.story.chefReady = false;
							}
							else {
								writeSpeech(data.story.chefName, "ava", data.story.name + "! It's so good to see you. What would you like?");
								writeSpeech(data.story.name, "player", "I wouldn't mind pitching in again today, do you need any help?");
								writeSpeech(data.story.chefName, "ava", "No, sorry. I have a huge backup on orders, so nothing left to spare.");
								writeSpeech(data.story.name, "player", "Actually, I might know something that can help with that. I'll see you later, alright?");
								writeSpeech(data.story.chefName, "ava", "Come by again soon!");
								writeText("You'd like to help out "+data.story.chefName+" with her business, but you don't have what you need for your plan. You'll need to get some exotic candies first.");
								writeTransition("streetsRestaurant", "Have the usual and leave.");
							}
						}
						else {
							writeSpeech(data.story.chefName, "ava", data.story.name + "! It's so good to see you. I don't need any help right now actually, what can I do for you?");
							writeText("Luckily, it seems like your sister hasn't corrupted " + data.story.chefName + " any further yet.");
							writeSpeech(data.story.name, "player", "How have sales been lately?");
							writeSpeech(data.story.chefName, "ava", "Oh they've been through the roof lately. That candy you gave me last time is still having a bit of effect, I've needed more breaks than usual to jerk off. I even came on one of the patrons, it was so embarrassing but we had a laugh about it before his wife cleaned him off.<br>Now, what can I get for my special little helper?");
							writeTransition("streetsRestaurant", "Have the usual and leave.");
						}
						break;
					}
					case 4: {
						if (data.story.chefReady == true) {
							writeEvent("chef4S");
							unlockScene("chef4S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.chefReady = false;
						}
						else {
							writeSpeech(data.story.chefName, "ava", data.story.name + "! It's so good to see you. I don't need any help right now actually, what can I do for you?<br>Sales volumes have been keeping pretty steady lately, and I'm able to keep up with demand now thanks to your help!");
							writeText("You catch her staring at your mouth as she speaks, but she at least tries to act professionally.");
							writeText("It seems like she's been pushed as far as she ever will be.");
							writeTransition("streetsRestaurant", "Have the usual and leave.");
						}
						break;
					}
				}
			}
			break;
		}
		case "office": {
			if (data.story.route == "dom") {
				switch (data.story.officeScore) {
					case 0: {
						writeText("She walks by, visibly uninterested in having a conversation with you.");
						writeText("You can't trigger an event right now. You'll need to put your plan into action by going to sleep if you want to do anything with " + data.story.officeName + ".");
						writeTransition("streets", "Go back");
						break;
					}
					case 1: {
						if (data.story.officeReady == true) {
							writeEvent("office1");
							unlockScene("office1");
							data.story.officeReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeSpeech(data.story.officeName, "alexis", "You!");
							writeText("She quickly drags you off into a smaller alleyway.");
							writeSpeech(data.story.name, "player", "Oh, hey. Needed another dick in you?");
							writeSpeech(data.story.officeName, "alexis", "Yes. No! Shit. Listen you punk, I don't know what you did to me, but you are going to pay for it. I will sue the crap out of you, and-");
							writeText("You grab her by the mouth and look her in the eyes. She swoons at the rough treatment even though you aren't really hurting her, before you toss her aside onto the ground.");
							writeSpeech(data.story.name, "player", "I'm not interested right now.");
							writeText("You start to walk away.");
							writeSpeech(data.story.officeName, "alexis", "I will destroy you, you hear me? Your life is over, you trash!");
							writeText("If you leave her alone she could cause some problems. You might want to use the app on her tonight.");
							writeTransition("streets", "Go back");
						}
						break;
					}
					case 2: {
						if (galleryCheck("office2") == false) {
							writeEvent("office2");
							unlockScene("office2");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							if (data.story.officeReady == true) {
								writeEvent("office3");
								unlockScene("office3");
								data.story.officeReady = false;
								data.story.time = "night";
								writeTransition("homePlayerRoom", "Finish for the day");
							}
							else {
								writeText("You see "+data.story.officeName+" on the street, her outfit is disheveled and stained in a few places, but she still carries herself with an air of professionalism. She must have just finished a shift as a public use toy.");
								writeText("She pretends not to notice you as you walk by, but she bumps into your shoulder before continuing on without missing a beat.");
								writeText("Before you can stop her, you notice that there's something in your pocket.");
								writeText("It's a small business card, almost blank except for a location and a list of services being advertised, all for incredibly low prices. 'Blowjob: $1 for 3, Kissing: $10, Anal: $1, Raw Anal: Free'.");
								writeText("As you turn to look at her, she's already looking back at you and gives you a wink.");
								writeText("She's really moving up in the world, already having her own business plan. Still, charging for this stuff? It might be worth it to give her one last tweak with the app tonight.");
								writeTransition("streets", "Go back");
							}
						}
						break;
					}
					case 3: {
						if (data.story.officeReady == true) {
							writeEvent("office4");
							unlockScene("office4");
							data.story.officeReady = false;
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish for the day");
						}
						else {
							writeText("You push open the door to a condemned looking building, the address matching the one on the new card you got in the mail.");
							writeText("'World-class whore "+data.story.officeName+" invites you to have some rough, raw fun with no strings attached. $200 gets you an hour of fun, with your money back if you can satisfy me. Anything is on the table, you can even beat the shit out of me if you don't want to pay!'");
							writeText("On the back is the location, and a list of sex acts she allows. The list is pretty extensive, hundreds of terms all writen in small lettering.");
							writeText("She's leaning against the wall, rubbing a black eye while also fingering herself.");
							writeSpeech(data.story.officeName, "alexis", "I'll be with you in just a second, I wanna enjoy this for a-<br>Oh hey, it's you! What's-your-face!");
							writeSpeech(data.story.name, "player", "It's "+data.story.name+".");
							writeSpeech(data.story.officeName, "alexis", "Yeeeah, I'm not gonna remember that. I can't even remember my last name. I remember what you did though, you helped me find my purpose! Without you, I'd still be trying to break that old glass ceiling. Wanna fuck?");
							writeSpeech(data.story.name, "player", "No, I can do better than a hobo's sloppy seconds. I was just curious about how you turned out.");
							writeSpeech(data.story.officeName, "alexis", "Well here I am. You'll tell your friends about me, right? I was a real bitch before, but I'm a grade-A meat hole now, best in the city.");
							writeSpeech(data.story.name, "player", "Yeah, I read the card.");
							writeSpeech(data.story.officeName, "alexis", "Oh man, that was a great idea. Sent it to everyone I knew, my old boss was actually here yesterday. Man, did he have a lot of frustration to take out.");
							writeText("She recounts a few other choice encounters in her new position, she really is taking this new life seriously. She's as far gone as you can push her now, there's nothing more to do here. You decide to leave, a greasy-looking man shuffling in after you walk out the door.");
							writeTransition("streets", "Go back");
						}
						break;
					}
				}
			}
			else {
				switch (data.story.officeScore) {
					case 1: {
						if (data.story.officeReady == true) {
							writeEvent("office1S");
							unlockScene("office1S");
							data.story.time = "night";
							writeTransition("streets", "Back out of the alleyway");
							data.story.officeReady = false;
						}
						else {
							writeText(data.story.officeName+" walks by on the street. She looks quite composed, a far cry from how she looked when you saw her last.");
							writeText("There isn't anything to say between the two of you. It seems like your sister hasn't corrupted " + data.story.officeName + " any further yet.");
							writeTransition("streets", "Go back");
						}
						break;
					}
					case 2: {
						if (data.story.officeReady == true) {
							writeEvent("office2S");
							unlockScene("office2S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.officeReady = false;
						}
						else {
							writeText(data.story.officeName+" walks by on the street, pretending she doesn't recognize you.");
							writeText("The two of you don't have anything to say to each other, so you both keep walking.");
							writeText("It seems like your sister hasn't corrupted " + data.story.officeName + " any further yet.");
							writeTransition("streets", "Go back");
						}
						break;
					}
					case 3: {
						if (data.story.officeReady == true) {
							writeEvent("office3S");
							unlockScene("office3S");
							data.story.officeReady = false;
						}
						else {
							writeText("On the walk home, a familiar feeling of being watched comes over you. Four left turns later, you determine that the woman in a coat a few dozen feet behind you has been tailing you. You slip into a side-alley and hide behind a garbage can.");
							writeText("When she enters the alley to follow you, you jump out from behind the can to corner her.");
							writeSpeech(data.story.name, "player", "Alright, who are-<br>Oh, you're that streaker.");
							writeText("She takes off her hat and unclasps her coat to prove her identity.");
							writeSpeech(data.story.name, "player", "Showing your face would have been enough.");
							writeSpeech(data.story.officeName, "alexis", "I'm far from just a streaker, I'm actually the masked hero, checking up on you to make sure you've reformed from your life of crime.");
							writeSpeech(data.story.name, "player", "Life of- What? You assaulted me! You're the criminal!");
							writeSpeech(data.story.officeName, "alexis", "It goes to show how misguided you are. I turned you away from the path of evil with my Dick of Justice! Now, I'm just making sure you aren't using your body to seduce any more innocent dickgirls.");
							writeSpeech(data.story.name, "player", "... I'm leaving.");
							writeSpeech(data.story.officeName, "alexis", "Don't think this is the end! I may have exhausted my power by cumming on a fire hydrant on my way here, but if I find out you're reverting to your old ways, no amount of sore dick will stop me from painting your black heart white!");
							writeText("It seems like your sister hasn't corrupted " + data.story.officeName + " any further yet, but she's still acting like a loon.");
							writeTransition("streets", "Go back");
						}
						break;
					}
					case 4: {
						if (data.story.officeReady == true) {
							writeEvent("office4S");
							unlockScene("office4S");
							data.story.time = "night";
							writeTransition("homePlayerRoom", "Finish up for the day");
							data.story.officeReady = false;
						}
						else {
							writeText("Holding a box you found on the sidewalk, you head into the alleyway with the inconspicuous sign labeled 'Alley of Justice'. Waiting on a wooden box is the 'champion of justice' in her lackluster disguise.");
							writeText("When she sees you, she looks around to make sure the deserted alleyway is empty, before she takes off her hat and pulls open her coat to expose herself.");
							writeSpeech(data.story.name, "player", "That's not how secret disguises work.");
							writeSpeech(data.story.officeName, "alexis", "Not to worry, I've tested this method. No evil doer can resist staring at my mighty dick, and they'll never remember my face. Enough of that, did you bring the P-spot punisher?");
							writeSpeech(data.story.name, "player", "The buttplug? The sitting on the street in a package that said 'BIG BUTT PLUG, PLEASE DELIVER TO HERO OF JUSTICE IF FOUND'?");
							writeSpeech(data.story.officeName, "alexis", "That's the one. Evil abounds, and I couldn't risk carrying it with me, or I'd waste all of my precious justice goo.");
							writeSpeech(data.story.name, "player", "Whatever. And how did you get my number? More importantly, stop texting me with pictures of your dick, it'll get me in trouble at school.");
							writeSpeech(data.story.officeName, "alexis", "Not to worry, chum. You can just tell your teachers it's part of your redemption via a superhero!");
							writeSpeech(data.story.name, "player", "I cannot tell them that. That would literally be worse than telling them that I'm talking with a pervert who rapes people who jaywalk.");
							writeSpeech(data.story.officeName, "alexis", "You'll learn the truth of these struggles someday. For now, I'll be going on patrol alone. The Diddler is out on the town, and she's too dangerous to risk a newbie like you meeting the end of her shaft.");
							writeText("You give her the buttplug and she runs off, taunting the evil underbelly of the city to face her. At this point, there's not much left for " + data.story.officeName + " to do. " + data.story.officeName + " has been pushed as far as she ever will be.");
							writeTransition("streets", "Go back");
						}
						break;
					}
				}
			}
			break;
		}
		case "doll": {
			switch (data.story.dollScore) {
				case 0: {
					writeText("One enchanted doll. Instruction booklet too. Take good card of her, keep her clean, and she'll love you forever. You can change her name with the app if you want. Just take her home and pull the little string in the back.");
					data.story.dollReady = true;
					document.getElementById('output').innerHTML += `
						<p>Her name is <input type="text" id="nameSubmission" value="Rubilocks"></p>
						<p class="choiceText" onclick="changeName('doll')">
							Keep shopping
						</p>
					`;
					break;
				}
				case 1: {
					if (data.story.dollReady == true) {
						writeEvent("doll1");
						unlockScene("doll1");
						data.story.dollScore +=1;
						data.story.dollReady = false;
					}
					else {
					}
					writeTransition("homePlayerRoom", "Go back");
					break;
				}
				case 2: {
					if (data.story.dollReady == true) {
						writeEvent("doll2");
						unlockScene("doll2");
						data.story.dollScore +=1;
						data.story.dollReady = false;
					}
					else {
						writeSpeech(data.story.dollName, "doll", "You look tired, you should go to bed! Nine hours will help give you energy to deal with tomorrow's problems. Then you'll have more time to sleep! A perfect cycle!");
					}
					writeTransition("homePlayerRoom", "Go back");
					break;
				}
				case 3: {
					if (data.story.dollReady == true) {
						writeEvent("doll3");
						unlockScene("doll3");
						data.story.dollScore +=1;
						data.story.dollReady = false;
					}
					else {
						writeSpeech(data.story.dollName, "doll", "You know, I'm sure she means well. If she were really all that mean, then everything would be a lot worse for you, right? I'm sure all you need to do is talk things out! Maybe sometime I could talk to her, and we can sort this all out?");
					}
					writeTransition("homePlayerRoom", "Go back");
					break;
				}
				case 4: {
					writeSpeech(data.story.dollName, "doll", "Woooo~ cumcumcum!");
					writeText("She'll probably be babbling until the effects of the cum wear off.");
					writeText("There's no content here, all of the doll's events have been unlocked.");
					writeTransition("homePlayerRoom", "Go back");
				}
			}
			break;
		}
		case "vr": {
			if (data.story.princessGame > 0) {
				writeTransition("princessSelect", "Play Princess Quest");
			}
			if (data.story.zombieGame > 0) {
				writeTransition("zombieGame", "Play Rainy DayZ");
			}
			writeTransition("homeGameRoom", "Go back");
			break;
		}
		//Store
		case "streetsExoticShop": {
			if (data.story.route == "dom") {
				if (galleryCheck("misc1") == true) {
					if (galleryCheck("misc2") == true) {
						writeBig("images/real/adriana/profile3.jpg");
						writeSpeech("Adriana", "adriana", "Yo. You even have anything left you can buy?");
					}
					else {
						writeBig("images/real/adriana/profile2.jpg");
						writeSpeech("Adriana", "adriana", "Yo, buy something so we have an excuse to fuck.");
					}
				}
				else {
					writeBig("images/real/adriana/profile1.jpg");
						writeSpeech("Adriana", "adriana", "Hey, welcome back. Gonna buy something this time?.");
				}
			}
			else {
				writeText("You walk into the store, and a sign greets you.");
				writeText("'Due to recent universal changes, this shop will be automated. Please have a nice day.'");
			}
			generateExoticShop();
			writeTransition("streets", "Head back outside");
			break;
		}
		case "streetsClothingShop": {
			if (imagesDisabled != true) {
				if (data.story.route == "dom") {
					if (data.story.clothingVisited == false && data.story.clothingTicket == true) {
						writeEvent("misc3");
						unlockScene("misc3");
						writeSpecial("You can now buy exotic clothes!");
						data.story.clothingVisited = true;
					}
					else {
						if (data.story.clothingVisited == false) {
							//writeBig("images/real/gina/profile1.jpg");
							writeBig("images/real/general/danny.jpg");
							//writeSpeech("Gina", "gina", "Hey, let me know if you need anything.");
							if (data.story.bodytype == 1) {
								writeSpeech("Danny", "danny", "Hey brah! Lemme know if you find anything you need.");
							}
							else {
								writeSpeech("Danny", "danny", "Hello miss. Lemme know if you find anything you need.");
							}
						}
						else {
							writeBig("images/real/gina/profile2.jpg");
							writeSpeech("Gina", "gina", "Hey, welcome back. Lemme know if you need anything, or anyone, at all.");
							generateClothingShop("lewd");
						}
						if (data.story.bodytype == 1) {
							generateClothingShop("men");
						}
						else {
							generateClothingShop("women");
						}
						generateClothingShop("special");
					}
				}
				else {
					writeText("You walk into the store, and a sign greets you.");
					writeText("'Due to recent universal changes, this shop will be automated. Please have a nice day.'");
					generateClothingShop("drawn");
				}
			}
			else {
				writeText("There's a little message, saying 'Closed until images return'.");
			}
			writeTransition("streets", "Head back outside");
			break;
		}
		case "streetsCandyShop": {
			if (data.story.candyVisited == false) {
				writeText("Ticket in hand you walk through the candy shop's door, a little bell jingling as you do. The cashier looks over towards you with a forced smile, which quickly turns into a genuine one as she spies the bit of gold paper in your hand.");
				writeText("Without a word she reaches below the counter and you hear a few clicks of locks and chains, before she lifts an old-looking wooden chest onto the countertop. She opens it, and you can see an assortment of brightly-colored candies for sale inside.");
				writeSpecial("You can now buy exotic candies!");
				data.story.candyVisited = true;
			}
			writeBig("images/real/items/candy.jpg");
			generateCandyShop();
			writeTransition("streets", "Head back outside");
			break;
		}
		case "streetsBeautyShop": {
			if (data.story.salonVisited == false) {
				writeText("You walk into the beauty salon, catching the attention of a view women, probably regulars, as you do. Following the instructions on the back of the ticket, you enter a closet near the back, and descend down a hidden staircase.");
				writeText("Out of another door a gorgeous woman wearing what you would only jokingly call a nurse's uniform appears, a syringe in her hand. Seeing your ticket, she gestures towards a sign with various services and prices on it.");
				writeSpecial("You can now purchase exotic injections!");
				data.story.salonVisited = true;
			}
			writeBig("images/real/clothes/nurse.jpg");
			generateBeautyShop();
			writeTransition("streets", "Head back outside");
			break;
		}
		case "chestUp": {
			data.story.chestSize += 1;
			switch (data.story.chestSize) {
				case 1:
					writeBig("images/real/body/boobs2.gif");
					writeText("Your chest is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 2:
					writeBig("images/real/body/boobs3.gif");
					writeText("Your chest is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 3:
					writeBig("images/real/body/boobs5.gif");
					writeText("Your chest is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 4:
					writeBig("images/real/body/boobs7.gif");
					writeText("Your chest is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 5:
					writeBig("images/real/body/boobs10.gif");
					writeText("Your chest is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
			}
			break;
		}
		case "buttUp": {
			data.story.buttSize += 1;
			switch (data.story.buttSize) {
				case 1:
					writeBig("images/real/body/buttM1.jpg");
					writeText("Your butt is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 2:
					writeBig("images/real/body/buttM4.jpg");
					writeText("Your butt is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 3:
					writeBig("images/real/body/butt3.gif");
					writeText("Your butt is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 4:
					writeBig("images/real/body/butt6.gif");
					writeText("Your butt is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 5:
					writeBig("images/real/body/buttM5.jpg");
					writeText("Your butt is now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
			}
			break;
		}
		case "lipsUp": {
			data.story.lipSize += 1;
			switch (data.story.lipSize) {
				case 1:
					writeBig("images/real/body/lips2.jpg");
					writeText("Your lips are now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 2:
					writeBig("images/real/body/lips6.jpg");
					writeText("Your lips are now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 3:
					writeBig("images/real/body/lips5.jpg");
					writeText("Your lips are now larger!");
					writeTransition("streetsBeautyShop", "Go back");
				break;
			}
			break;
		}
		case "bodyChange": {
			switch (data.story.bodytype) {
				case 1:
					writeBig("images/real/body/body1.jpg");
					writeText("You now look like a macho man.");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 2:
					writeBig("images/real/body/body2.jpg");
					writeText("You now look like a trap.");
					writeTransition("streetsBeautyShop", "Go back");
				break;
				case 3:
					writeBig("images/real/body/body3.jpg");
					writeText("You now look like a shemale.");
					writeTransition("streetsBeautyShop", "Go back");
				break;
			}
			break;
		}
		case "exoticSpecial1": {
			writeEvent("misc1");
			unlockScene("misc1");
			data.story.skill = 2;
			writeSpecial("You've gained an advanced level of understanding of the Human Alteration App!");
			writeTransition("streetsExoticShop", "Go back");
			break;
		}
		case "exoticSpecial2": {
			writeEvent("misc2");
			unlockScene("misc2");
			writeTransition("streetsExoticShop", "Go back");
			break;
		}
		case "clothingSpecial": {
			writeEvent("misc4");
			unlockScene("misc4");
			writeTransition("streetsClothingShop", "Go back");
			break;
		}
		//Misc Scenes
		case "publicToy": {
			writeEvent("misc5");
			unlockScene("misc5");
			data.story.skill = 3;
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "deepCleaning": {
			data.story.plugPops -= 1;
			writeEvent("mom5");
			unlockScene("mom5");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "bathroomBreak": {
			data.story.fruitGushers -= 1;
			writeEvent("mom6");
			unlockScene("mom6");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "morningPiss": {
			writeEvent("mom7");
			unlockScene("mom7");
			writeText("...");
			switch (data.story.teacherScore) {
				case 1:
					writeText("School passes quickly, " + data.story.teacherName + " takes great care not to disturb you.");
				break;
				case 2:
					writeText("School passes quickly, " + data.story.teacherName + " takes great care not to disturb you. Her skin is looking quite nice today.");
				break;
				case 3:
					writeBig("images/real/general/titfuck3.gif");
					writeText("You arrive at school early, " + data.story.teacherName + " is waiting and ready to take care of you.");
				break;
				case 4:
					writeBig("images/real/general/deepthroat5.gif");
					writeText("You arrive at school early, " + data.story.teacherName + " is waiting and ready to take care of you.");
				break;
				case 5:
					writeBig("images/real/general/vaginal4.gif");
					writeText("School passes the time, as usual. After a short nap you walk up behind " + data.story.teacherName + " and slide into her to relieve yourself of some lingering tension.");
				break;
				case 6:
					writeBig("images/real/general/vaginal4.gif");
					writeText("School passes the time, as usual. After a short nap you walk up behind " + data.story.teacherName + " and slide into her to relieve yourself of some lingering tension.");
				break;
			}
			writeTransition("schoolClassroom", "Finish classes for the day");
			break;
		}
		case "familyDinner": {
			writeEvent("sister6");
			unlockScene("sister6");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "familyFun": {
			data.story.popRocks -= 1;
			writeEvent("sister7");
			unlockScene("sister7");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "tasteOfRevenge": {
			data.story.popRocks -= 1;
			writeEvent("sister1S");
			unlockScene("sister1S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "sister4S": {
			writeEvent("sister4S");
			unlockScene("sister4S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "sister5S": {
			writeEvent("sister5S");
			unlockScene("sister5S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "holeInWall1": {
			data.story.popRocks -= 1;
			writeEvent("sister2S");
			unlockScene("sister2S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "holeInWall2": {
			data.story.stretchyTaffy -= 1;
			writeEvent("sister3S");
			unlockScene("sister3S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "smothering": {
			if (galleryCheck("teacher4S") == true) {
				data.story.teacherReady = false;
			}
			data.story.plugPops -= 1;
			writeEvent("teacher3S");
			unlockScene("teacher3S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "sounding": {
			if (galleryCheck("teacher3S") == true) {
				data.story.teacherReady = false;
			}
			data.story.stretchyTaffy -= 1;
			writeEvent("teacher4S");
			unlockScene("teacher4S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "enjoyingTheWork": {
			if (galleryCheck("chefSpecial") == true) {
				data.story.teacherReady == false;
			}
			data.story.caramelMelts -= 1;
			data.story.money +=50;
			writeEvent("chef4S");
			unlockScene("chef4S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "chefSpecial": {
			if (galleryCheck("enjoyingTheWork") == true) {
				data.story.teacherReady == false;
			}
			data.story.fruitGushers -= 1;
			data.story.money +=50;
			writeEvent("chef5S");
			unlockScene("chef5S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "tokyoPop": {
			writeSpeech(data.story.name, "player", "You remember that live action Tokyo Pop thing?");
			writeSpeech(data.story.sisterName, "jean", "Don't you fucking talk about that. That's a god damn travesty.");
			writeSpeech(data.story.name, "player", "They're filming it here in the city. You could probably use the app to steal a prop or something.");
			writeSpeech(data.story.sisterName, "jean", "What? Where? When?");
			writeSpeech(data.story.name, "player", "It's somewhere in the city, dunno exactly where. Part of the streets were blocked off. Maybe you could come out of the house with me and we could check it out?");
			writeSpeech(data.story.sisterName, "jean", "Out. Now.");
			writeText("She quickly shoos you out of the room and closes the door. For a moment you can hear typing on her keyboard.");
			writeSpeech(data.story.name, "player", "Sis?<br>I know you hate that it isn't going to be faithful to the anime, but I could still get into it with you. Maybe we could hang out like normal siblings do?");
			writeText("There's no reply.");
			writeSpeech(data.story.name, "player", "I guess not, talk to you later.");
			writeTransition("tokyoPop2", "Head to bed early");
			break;
		}
		case "tokyoPop2": {
			writeEvent("sister3S");
			unlockScene("sister3S");
			data.story.time = "night";
			writeTransition("homePlayerRoom", "Finish for the day.");
			break;
		}
		case "freeSample": {
			writeText("You start crossing the street to where the stranger is waving you down, but before you can make it they chuck something at you and leave.");
			writeText("You catch it, it appears to be a bag of candy called Pop Rocks with a note on it.");
			writeText("'Consider this a free sample from the exotic candy shop. All you need is a ticket and you can come on over for some unearthly delights.'");
			writeSpecial("You got a free bag of Pop Rocks!");
			data.story.popRocks += 1;
			data.story.freeSample = true;
			writeTransition("streets", "Finish crossing");
			break;
		}
		//Gallery & Ending
		case "laptop": {
			if (data.story.laptopSetup == false) {
				document.getElementById('output').innerHTML += `
					<p>You take some time to get your laptop set up. Once everything is working, you feel a buzz from your phone notifying you that it's connecting to a new device. After a few command prompt windows appear and dissapear, a new icon labeled 'Gallery' appears on your desktop.</p>
					<p>A few inquisitve clicks later, and you find that <span class ='specialText'>you can now view memories in the gallery!</span>.
					<p>Aside from that, you can also browse some porn if you want to.</p>
				`;
				data.story.laptopSetup = true;
			}
			if (data.story.route == "dom") {
				document.getElementById('output').innerHTML += `
					<p class="choiceText" onclick="sceneTransition('gallery')">
						View the gallery
					</p>
					<p class="choiceText" onclick="laptop('straight')">
						Straight porn
					</p>
					<p class="choiceText" onclick="laptop('throat')">
						Deepthroat porn
					</p>
					<p class="choiceText" onclick="laptop('anal')">
						Anal porn
					</p>
					<p class="choiceText" onclick="laptop('gay')">
						Gay porn
					</p>
					<p class="choiceText" onclick="sceneTransition('homePlayerRoom')">
						Back to your room
					</p>
				`;
			}
			else {
				document.getElementById('output').innerHTML += `
					<p class="choiceText" onclick="sceneTransition('gallery')">
						View the gallery
					</p>
					<p class="choiceText" onclick="laptop('sub')">
						Try to watch porn
					</p>
					<p class="choiceText" onclick="sceneTransition('homePlayerRoom')">
						Back to your room
					</p>
				`;
			}
			break;
		}
		case "gallery" : {
			if (data.galleryArray[33].index == "sister4S") {
				data.galleryArray[33].index = "sister5S";
			}
			//List player's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/body/body" + data.story.bodytype + ".jpg");
			}
			else {
				writeMed("images/drawn/aya/player.jpg");
			}
			generateGallery('misc');
			//generateGallery('dream');
			//List mom's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/lisa/profile1.jpg");
			}
			else {
				writeMed("images/drawn/aya/lisa.jpg");
			}
			generateGallery('mom');
			//List sister's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/jean/profile1.jpg");
			}
			else {
				writeMed("images/drawn/aya/jean.jpg");
			}
			generateGallery('sister');
			//List friend's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/riley/profile1.jpg");
			}
			else {
				writeMed("images/drawn/aya/riley.jpg");
			}
			generateGallery('friend');
			//List teacher's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/kendra/profile1.jpg");
			}
			else {
				writeMed("images/drawn/aya/kendra.jpg");
			}
			generateGallery('teacher');
			//List chef's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/ava/profile1.jpg");
			}
			else {
				writeMed("images/drawn/aya/ava.jpg");
			}
			generateGallery('chef');
			//List office's scenes
			if (data.story.route == "dom") {
				writeMed("images/real/alexis/profile1.jpg");
			}
			else {
				writeMed("images/drawn/aya/alexis.jpg");
			}
			generateGallery('office');
			if (data.story.dollName != "???") {
				//List doll's scenes
				writeMed("images/drawn/doll/profile1.png");
				generateGallery('doll');
			}
			writeTransition("laptop", "<b>Back to the laptop</b>");
			break;
		}
		case "ending": {
			if (data.story.route == "dom") {
				endingChoices = {family: 1, friend: 1, teacher: 1, chef: 1, office: 1, sub: 0,}
				writeMed("images/real/lisa/profile1.jpg");
				document.getElementById('output').innerHTML += `
					<button type="button" id="familyButton1" onclick="changeEnding('family', 1)">Loving Family</button>
					<button type="button" id="familyButton2" onclick="changeEnding('family', 2)">LOCKED</button>
					<button type="button" id="familyButton3" onclick="changeEnding('family', 3)">LOCKED</button>
				`;
				if (data.story.motherScore > 2 && data.story.sisterScore > 2) {
					document.getElementById('familyButton2').innerHTML = 'familyEnd2';
					endingsLocked.family2 = false;
					if (data.story.motherScore > 3 && data.story.sisterScore > 3) {
						document.getElementById('familyButton3').innerHTML = 'familyEnd3';
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
				writeText("<b>"+data.story.motherName+" & "+data.story.sisterName+": <span id='familyEnd'>Loving Family</span></b>");
				writeMed("images/real/riley/profile1.jpg");
				writeText("<b>"+data.story.friendName+": <span id='friendEnd'>App Companion</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="friendButton1" onclick="changeEnding('friend', 1)">App Companion</button>
					<button type="button" id="friendButton2" onclick="changeEnding('friend', 2)">LOCKED</button>
					<button type="button" id="friendButton3" onclick="changeEnding('friend', 3)">LOCKED</button>
				`;
				if (data.story.friendScore > 2) {
					document.getElementById('friendButton2').innerHTML = 'friendEnd2';
					endingsLocked.friend2 = false;
					if (data.story.friendScore > 3) {
						document.getElementById('friendButton3').innerHTML = 'friendEnd3';
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
				writeText("<b>"+data.story.teacherName+": <span id='teacherEnd'>Kinder Teacher</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="teacherButton1" onclick="changeEnding('teacher', 1)">Kinder Teacher</button>
					<button type="button" id="teacherButton2" onclick="changeEnding('teacher', 2)">LOCKED</button>
					<button type="button" id="teacherButton3" onclick="changeEnding('teacher', 3)">LOCKED</button>
				`;
				if (data.story.teacherScore > 2) {
					document.getElementById('teacherButton2').innerHTML = 'teacherEnd2';
					endingsLocked.teacher2 = false;
					if (data.story.teacherScore > 3) {
						document.getElementById('teacherButton3').innerHTML = 'teacherEnd3';
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
				writeText("<b>"+data.story.chefName+": <span id='chefEnd'>Entrepreneur</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="chefButton1" onclick="changeEnding('chef', 1)">Entrepreneur</button>
					<button type="button" id="chefButton2" onclick="changeEnding('chef', 2)">LOCKED</button>
					<button type="button" id="chefButton3" onclick="changeEnding('chef', 3)">LOCKED</button>
				`;
				if (data.story.chefScore > 2) {
					document.getElementById('chefButton2').innerHTML = 'chefEnd2';
					endingsLocked.chef2 = false;
					if (data.story.chefScore > 3) {
						document.getElementById('chefButton3').innerHTML = 'chefEnd3';
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
				writeText("<b>"+data.story.officeName+": <span id='officeEnd'>Secretive CEO</span></b>");
				document.getElementById('output').innerHTML += `
					<button type="button" id="officeButton1" onclick="changeEnding('office', 1)">Secretive CEO</button>
					<button type="button" id="officeButton2" onclick="changeEnding('office', 2)">LOCKED</button>
					<button type="button" id="officeButton3" onclick="changeEnding('office', 3)">LOCKED</button>
				`;
				if (data.story.officeScore > 2) {
					document.getElementById('officeButton2').innerHTML = 'officeEnd2';
					endingsLocked.office2 = false;
					if (data.story.officeScore > 3) {
						document.getElementById('officeButton3').innerHTML = 'officeEnd3';
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
					writeText("Test for Family Ending 1");
				break;
				case 2:
					writeText("Test for Family Ending 2");
				break;
				case 3:
					writeText("Test for Family Ending 3");
				break;
			}
			switch (endingChoices.friend) {
				case 1:
					writeText("Test for Friend Ending 1");
				break;
				case 2:
					writeText("Test for Friend Ending 2");
				break;
				case 3:
					writeText("Test for Friend Ending 3");
				break;
			}
			switch (endingChoices.teacher) {
				case 1:
					writeText("Test for Teacher Ending 1");
				break;
				case 2:
					writeText("Test for Teacher Ending 2");
				break;
				case 3:
					writeText("Test for Teacher Ending 3");
				break;
			}
			switch (endingChoices.chef) {
				case 1:
					writeText("Test for Cafe Owner Ending 1");
				break;
				case 2:
					writeText("Test for Cafe Owner Ending 2");
				break;
				case 3:
					writeText("Test for Cafe Owner Ending 3");
				break;
			}
			switch (endingChoices.office) {
				case 1:
					writeText("Test for Officewoman Ending 1");
				break;
				case 2:
					writeText("Test for Officewoman Ending 2");
				break;
				case 3:
					writeText("Test for Officewoman Ending 3");
				break;
			}
			writeTransition("home", "Finished testing");
			break;
		}
		case "endingSub1": {
			writeSpeech(data.story.name, "player", "Listen, "+data.story.sisterName+", maybe it's time to stop this.");
			writeSpeech(data.story.sisterName, "jean", "What do you mean?");
			writeSpeech(data.story.name, "player", "You have what is essentially the power of a god in your hands. Maybe...");
			writeTransition("endingSub3", "It's time to stop wasting it on porn");
			if (galleryCheck("sister2S") == true) {
				writeTransition("endingSub4", "It's time to start living a life with the app");
			}
			writeTransition("endingSub2", "Nevermind");
			break;
		}
		case "endingSub2": {
			writeSpeech(data.story.name, "player", "Actually, nevermind. I'm just tired, good night.");
			writeSpeech(data.story.sisterName, "jean", "Alright, good night bro.");
			writeTransition("morning", "Go to sleep");
			break;
		}
		case "endingSub3": {
			writeSpeech(data.story.name, "player", "You could solve world hunger, end wars, eradicate disease. You could make life a utopia.");
			writeSpeech(data.story.sisterName, "jean", "Wasting? Who cares about all that stuff?");
			writeSpeech(data.story.name, "player", "What's your plan then, "+data.story.sisterName+"? keep using the app to give everybody besides me a giant dick?");
			writeSpeech(data.story.name, "player", "Hello?");
			writeText("...");
			writeText("Meanwhile, in the adjacent room.");
			writeText(""+data.story.sisterName+" is laying on her bed, a feeling of disappointment floating around in her head.");
			writeSpeech(data.story.sisterName, "jean", "Fuck, he killed the mood.<br>Why the hell would he even care about stuff like that? It's not like he'd use the app for world peace if he had it.");
			writeText("She holds the phone back up and opens the app.");
			writeSpeech(data.story.sisterName, "jean", "Maybe it's time to stop. Maybe he really isn't worth this kind of focus. I can make a better world all for myself. <br>Alright, terms of service be damned. If I'm going to fix this stupid planet, I'm going to need to jailbreak this app.");
			writeTransition("endingSubA", "Six months later");
			break;
		}
		case "endingSub4": {
			writeSpeech(data.story.name, "player", "You have more power than anyone could fathom what to do with, and you're essentially using it for porn. What happens when you get bored?");
			writeSpeech(data.story.sisterName, "jean", "I dunno, there's a lot I can do.");
			writeSpeech(data.story.name, "player", "That exactly it, you can do anything. I don't want to wake up one day to find that you've fried your brain in pursuit of the latest orgasm.");
			writeSpeech(data.story.sisterName, "jean", "So what do you suggest?");
			writeSpeech(data.story.name, "player", "Go out and live your life in the world you've built. Connect with someone, and use the app for your heart's fetishes, not your dick's.");
			writeSpeech(data.story.sisterName, "jean", "And who did you have in mind?");
			writeTransition("endingSub5", "I don't know");
			if (galleryCheck("sister3S") == true) {
				writeTransition("endingSub6", "Me");
			}
			break;
		}
		case "endingSub5": {
			writeSpeech(data.story.name, "player", "That's up to you. I'll support you no matter what you choose, but staying in all the time and jerking off into mom's mouth isn't sustainable.");
			writeSpeech(data.story.sisterName, "jean", "I'll think about it. Good night little bro.");
			writeSpeech(data.story.name, "player", "Good night.");
			writeText("...");
			writeText("Meanwhile, in the adjacent room.");
			writeText(""+data.story.sisterName+" is leaning on her shelf looking out her window at the stars.");
			writeSpeech(data.story.sisterName, "jean", "<i>Maybe he's right. I need a life, I need goals. If I don't learn to enjoy what I have, nothing will ever be enough for me.</i>");
			writeText("Fantasies begin to run though her mind of the sort of future she wants to create. A quick sketch of a waitress's uniform and some planning later, and she opens up the app with a plan in mind.");
			writeTransition("endingSubB", "Six months later");
			break;
		}
		case "endingSub6": {
			writeSpeech(data.story.name, "player", "I get why you do a lot of the things you do, but I just want my sister back. I want to be able to hang out and talk, I want to go places with you and mom.");
			writeSpeech(data.story.sisterName, "jean", "Do you want things to be like they used to?");
			writeSpeech(data.story.name, "player", "No. The app has changed things, probably for the better. There's no need to throw that away.");
			writeSpeech(data.story.sisterName, "jean", "So then what?");
			writeSpeech(data.story.name, "player", "How about we go out and have a drink at "+data.story.chefName+"'s tomorrow?");
			writeSpeech(data.story.sisterName, "jean", "... I have a reality-warping app, and you want to spend the day chatting over coffee?");
			writeSpeech(data.story.name, "player", "Yeah. We can hang out in the world you've created together.");
			writeSpeech(data.story.sisterName, "jean", "I'll think about it. Good night, ya softie.");
			writeSpeech(data.story.name, "player", "Good night.");
			writeText("...");
			writeText("Meanwhile, in the adjacent room.");
			writeText(""+data.story.sisterName+" sets her phone down, her mind racing with fantasies of the future.");
			writeText("Her daydreaming is interrupted as "+data.story.motherName+" walks in, the look in her eyes both submissive and hungry.");
			writeText(""+data.story.sisterName+" picks her phone back up and with a tap of the button "+data.story.motherName+"'s dim eyes suddenly sparkle with intelligence.");
			writeSpeech(data.story.motherName, "lisa", "W-what? What was I about to-");
			writeSpeech(data.story.sisterName, "jean", "Mom? Can I ask you a question?");
			writeText("...");
			writeTransition("endingSubC", "Six months later");
			break;
		}
		case "endingSubA": {
			writeText("The bell rings signaling the end of school, but the rest of the students have already filed out of the classroom.");
			writeSpeech(data.story.name, "player", "Glurk, glurk, glurk");
			writeSpeech(data.story.teacherName, "kendra", "Ah, just like that! You make a much better cocksleeve than a student!");
			writeText(data.story.teacherName+" hilts herself down your throat and starts cumming for the fourth time today. Her dick could be set off by a light breeze, but she recovers so fast it doesn't matter.");
			writeText("...");
			writeText("Six orgasms later "+data.story.teacherName+" finally heads home. She wipes her cum and spit-soaked dick off in your hair before she leaves, and you're left to sit alone with a bloated belly of jizz as the evening light fills the classroom.");
			writeText("You stand up on shaky legs, not exactly eager to head home.");
			writeText("...");
			writeText("You step off the bus, barely able to take slow steps.");
			writeSpeech("???", "", "Catch you next time! Keep that ass tight for me, would you?");
			writeText("It seems like she knows you, but you've never seen her face. This is the third day in a row you've been attacked on the bus, but nobody seems to care. This time she was nice enough to let you off at your stop.");
			writeText("You accidentally lock eyes with a woman standing in an alley, a big mistake. An even bigger mistake is running after you see the bulge in her pants throb.");
			writeText("You manage to find a police officer, the only sign that he's male is his flat chest. Other than that, he looks like a cute girl. He has a massive bubble butt wrapped in tight jeans, and is wearing a lot of makeup. You explain the situation as quickly as you can, and he nods as the woman chasing you arrives with her friends.");
			writeSpeech("???", "", "Freeze! Put your fat dicks where I can see 'em!");
			writeText("...");
			writeText("You open the door to your lonely home, still dripping with cum. The officer was no help, he was bending over for the women once their pants were off.");
			writeText("Mom left a while ago to be some businesswoman's cocksleeve. Even though you live alone now, sometimes you could swear you used to have a sister.");
			writeText("...");
			writeText("Meanwhile, in a facility somewhere far away.");
			writeText("As the elevator door smoothly slid open, a researcher in a white coat walks into the room. There's a desperate whining sound coming from the corner.");
			writeSpeech(data.story.sisterName, "jean", "Ggghg...");
			writeSpeech("???", "", "Ah, subject 13. Ready so soon for the latest experiment?");
			writeText(data.story.sisterName+" is bound to a shelf-like structure, a titanic, seven foot cock hanging below her partially inserted and strapped into a machine.");
			writeText("A tube is inserted into her ass, regularly pumping her full of nutrients and god knows what sort of chemical supplements to increase her cum production.");
			writeSpeech(data.story.sisterName, "jean", "N-need to cum... Please...");
			writeSpeech("???", "", "Oh my, speech has already returned? In record time too, usually subjects are mute by this stage. Some of them even go comatose by now, but you pushed out app a lot farther than they did, didn't you, 13?");
			writeText("The scientist flips a switch, and the machine starts to rumble.");
			writeDrawn("images/drawn/aya/endingA-1.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Ooooh! It's here! Cum machine is here!");
			writeSpeech("???", "", "Yes yes, no need to worry. You'll be cumming again soon. But this time we're testing a new prostate enhancer first. Do you have a favorite flavor?");
			writeSpeech(data.story.sisterName, "jean", "Cum! Need to cum!");
			writeSpeech("???", "", "Strawberry? A wonderful choice.");
			writeText("The scientist flips another switch and a pink fluid begins to travel down the long tube, pumping a powerful chemical alterant into "+data.story.sisterName+"'s ass.");
			writeText("It's quickly absorbed into her body, and the sudden growth of her prostate gland creates a visible bulge on her midsection.");
			writeSpeech("???", "", "Now, this should triple output at the very least. The downside is that we're still working out a kink that can result in permanent sensory overload. Basically, try not to cum too hard, or you might end up with brain damage.");
			writeDrawn("images/drawn/aya/endingA-2.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Cum! Cum! Cuuuuuuum!");
			writeText(data.story.sisterName+" bucks and thrusts as much as she can in her restraints, not that it matters. The machine's vibrations and the sleeve that massages her cock has been tuned by inhuman precision to be the most effective spunk-sucker on the planet.");
			writeText("Within seconds "+data.story.sisterName+" is pumping jizz into the machine. Her massive dick has reached the point where it's constantly leaking cum at all hours, but the faucet has reached a point of full blast.");
			writeText("...");
			writeSpeech("???", "", "There's still more testing to do. We need to determine the serum's effect when injected via the urethra.");
			writeText("The metal casing of the machine slowly opens with a pressurized his, revealing "+data.story.sisterName+"'s titanic girlcock.");
			writeDrawn("images/drawn/aya/endingA-3.jpg", "Art by Aya");
			writeSpeech("???", "", "Are you ready number 13?");
			writeText(data.story.sisterName+" doesn't respond, leaking drool from her open mouth, and tears from her eyes are her brain fails to comprehend the signals it's receiving.");
			writeTransition("credits", "The End");
			break;
		}
		case "endingSubB": {
			writeDrawn("images/drawn/aya/endingB-1.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/endingB-2.jpg", "Art by Aya");
			writeText("You walk down the street towards a familiar cafe, admiring how different the new flier is from the old one.");
			writeText("At first the place barely held itself back from advertising itself as a dickgirl whorehouse, but it's mellowed out like crazy since then. The girls used to always seem on edge, but now they're a lot more comfortable and enjoy their new bodies.");
			writeText("You aren't completely sure how the place is legally staying open, but any politician or policeman who speaks out about the place suddenly finds themselves very eager to indulge themselves here.");
			writeText("There's a decently sized line outside the building, but the atmosphere is very calm and polite. You flash your VIP ticket and are ushered inside to your seat.");
			writeDrawn("images/drawn/aya/endingB-3.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Welcome back "+data.story.name+", would you like your usual?");
			writeText("It's no mystery as to why the place is so popular, the waitresses are gorgeous. But the real selling point of the place...");
			writeDrawn("images/drawn/aya/endingB-4.jpg", "Art by Aya");
			writeText("... Is the fact that everyone who works here is a dickgirl.");
			writeSpeech(data.story.name, "player", "Yes please, thank you. I'll try not to hold you up for too long.");
			writeDrawn("images/drawn/aya/endingB-5.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Nonsense! No one would mind if the owner's brother takes a little longer than normal to savor his drink.");
			writeText("Some of the other waiters here are people in the same class as you, the place rotates its staff almost every week. Everyone can apply, man or woman, and you're almost certain to be hired on the spot.");
			writeText("The transformation is a well kept secret, but everyone considers it a perk of the job. Birth defects, disease, anxiety, all of those things dissapear for the 'price' of working here as a cum-leaking waitress.");
			writeDrawn("images/drawn/aya/endingB-6.jpg", "Art by Aya");
			writeText("Each waitress wears a small plug to keep themselves from wasting the merchandise. It doesn't take much to set a waitress off, no matter how many times they've cum already.");
			writeDrawn("images/drawn/aya/endingB-7.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Ahh... You always have such a nice look on your face, like you're in love with my cock.");
			writeDrawn("images/drawn/aya/endingB-8.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/endingB-9.jpg", "Art by Aya");
			writeText(""+data.story.chefName+" pops the plug out of her urethra as her cock stands at full attention.");
			writeDrawn("images/drawn/aya/endingB-10.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "This'll be my first load of the day, I hope you like it~");
			writeSpeech(data.story.name, "player", "I'll look you right in the eyes as I drink it all up.");
			writeSpeech(data.story.chefName, "ava", "Nnngh, no fair! I'm gonna...");
			writeDrawn("images/drawn/aya/endingB-11.jpg", "Art by Aya");
			writeText("You quickly get your cup ready.");
			writeDrawn("images/drawn/aya/endingB-12.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Cumming~~~!");
			writeText("She quickly fills the cup to the brim, careful to waste as little as possible. It's frowned upon, at least this early in the day, to drink directly from the 'tap'.");
			writeText("The flow slows down as "+data.story.chefName+" languidly strokes herself, finishing her first orgasm of the day. She wobbles, but remains standing as she steps away from the table.");
			writeSpeech(data.story.chefName, "ava", "Just... Just let me know if you'd like a refill, okay sweetie?");
			writeText("You nod, and down your drink.");
			writeText("...");
			writeSpeech(data.story.sisterName, "jean", "Oh? You're still here little bro?");
			writeDrawn("images/drawn/aya/endingB-14.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "That's a weird way to greet a customer.");
			writeSpeech(data.story.sisterName, "jean", "Ah shut up, it's not like I'll fire myself. Having a good time?");
			writeSpeech(data.story.name, "player", "Yeah, I was just about to finish actually.");
			writeSpeech(data.story.sisterName, "jean", "Fuck that, keep the seat. I sent some girls outside to entertain the people waiting in line. You think I'm gonna let my little brother leave without some special service?");
			writeDrawn("images/drawn/aya/endingB-15.jpg", "Art by Aya");
			writeText("She slides her underwear down. Unlike the rest of the staff instead of a plug she wears a band tied around her foreskin to keep herself from leaking.");
			writeText("She hops up on the table, and with a *PLUNK* she sticks a bright blue dildo to the tabletop.");
			writeText("Other patrons and some waitresses stop to watch, it isn't every day the owner services a customer directly.");
			writeDrawn("images/drawn/aya/endingB-17.jpg", "Art by Aya");
			writeText("It doesn't take long for the dildo to hit her engorged prostate, sending signals to cum up to her brain almost instantly.");
			writeDrawn("images/drawn/aya/endingB-18.jpg", "Art by Aya");
			writeText("But she isn't done yet, she won't be ready to serve until the cum balloon is full.");
			writeDrawn("images/drawn/aya/endingB-19.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Cumming~! I can't stop~!");
			writeText("This is how life is these days, the effects of the cafe opening have started to bleed out all over town.");
			writeText("Everywhere, former workers of the cafe can sell their bodies for high prices, or they get a taste for public use and give themselves out freely.");
			writeText("The world is changing a little bit more every day, moving closer to a paradise full of beautiful women ready to cover each other with cum.");
			writeTransition("credits", "The End");
			break;
		}
		case "endingSubC": {
			writeSpeech(data.story.sisterName, "lisa", "Alright you two, play safe alright?");
			writeSpeech(data.story.name, "player", "We're adults, mom. We'll be fine.");
			writeSpeech(data.story.motherName, "lisa", "Fine, fine. Just make sure you don't burn. Mommy's going to sunbathe. ");
			writeText(""+data.story.motherName+" tosses you a bottle of sunscreen and walks off.");
			writeSpeech(data.story.name, "player", "Jeez. Can't you just make it so that we don't need this stuff?");
			writeSpeech(data.story.sisterName, "jean", "Making your skin sun-proof is a lot harder than it sounds bro.");
			writeSpeech(data.story.name, "player", "I guess. Anyways I'm done. You ready yet?");
			writeSpeech(data.story.sisterName, "jean", "Eeh, well...");
			writeDrawn("images/drawn/aya/ending3-1.jpg", "Art by Aya");
			writeText(""+data.story.sisterName+" steps out from behind the car, a massive bulge visible through her swimsuit.");
			writeSpeech(data.story.name, "player", "Jesus, it might as well be painted on.");
			writeSpeech(data.story.sisterName, "jean", "Ehehe, could you help me out?");
			writeSpeech(data.story.name, "player", "Fine, but not here.");
			writeText("...");
			writeDrawn("images/drawn/aya/ending3-2.jpg", "Art by Aya"); 
			writeSpeech(data.story.sisterName, "jean", "Nggh, I can't hold it in!");
			writeSpeech(data.story.name, "player", "Just one second, we're almost at the rest area.");
			writeDrawn("images/drawn/aya/ending3-3.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Cumming~!");
			writeText(""+data.story.sisterName+" paints the ground with her sperm. Her jaw goes slack as a day's worth of backed up cum is squeezed out of her.");
			writeDrawn("images/drawn/aya/ending3-4.jpg", "Art by Aya"); 
			writeSpeech(data.story.sisterName, "jean", "Aaah... Sorry bro, I wasted it.");
			writeSpeech(data.story.name, "player", "It's fine, it's not like we can make changes with your phone at home. Now hold still and I'll get you cleaned up.");
			writeText("The vacation has been a nice one so far, leaving the electronics behind creates an entirely new atmosphere now that "+data.story.sisterName+" is without the app.");
			writeSpeech(data.story.name, "player", "Did you really need to pump up your cum production right before we left?");
			writeSpeech(data.story.sisterName, "jean", "Ehehe, you know you love it.");
			writeSpeech(data.story.name, "player", "... Maybe. Anyways, I'm almost finished.");
			writeSpeech(data.story.sisterName, "jean", "Actually, the place looks pretty empty. Maybe we could enjoy ourselves a little first?");
			writeSpeech(data.story.name, "player", "In public? I don't know.");
			writeSpeech(data.story.sisterName, "jean", "Cmon, you can go first if you want.");
			writeSpeech(data.story.name, "player", "... Alright fine, but just a quickie. ");
			writeText("...");
			writeDrawn("images/drawn/aya/ending3-5.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Alright, I'm ready.");
			writeText("You gulp as she exposes her ass, ready and waiting for your dick.");
			writeSpeech(data.story.sisterName, "jean", "So, you ready to graduate from your virginity, little bro?");
			writeDrawn("images/drawn/aya/ending3-6.jpg", "Art by Aya");
			writeText("You answer wordlessly, pressing the head of your dick against the squishy ring of her asshole. "+data.story.sisterName+" squirms as a thick line of cum runs down her skin.");
			writeDrawn("images/drawn/aya/ending3-7.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Gggh... I'm inside!");
			writeSpeech(data.story.sisterName, "jean", "Push! Deeper!");
			writeSpeech(data.story.name, "player", "Nggh... It feels so good, I...");
			writeDrawn("images/drawn/aya/ending3-8.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/ending3-9.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "I'm cumming!");
			writeSpeech(data.story.sisterName, "jean", "Do it inside, deeper!");
			writeText("You might be cumming early, but she's on a hair trigger too.");
			writeDrawn("images/drawn/aya/ending3-11.jpg", "Art by Aya");
			writeText("The two of you scream out in unison as your fucked-up brains light up with pleasure.");
			writeText("Not even a single thrust in and you've found you limit, yet something about this seems... Dissatisfying.");
			writeDrawn("images/drawn/aya/ending3-12.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "That might've been pushing the idea of a quickie too far, but we should probab-whoa!");
			writeDrawn("images/drawn/aya/ending3-13.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "W-what are you-");
			writeSpeech(data.story.sisterName, "jean", "You've had your turn. It's mine now, little bro.");
			writeSpeech(data.story.name, "player", "H-hold on, I'm not sure abou-");
			writeDrawn("images/drawn/aya/ending3-15.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Mmmph~");
			writeDrawn("images/drawn/aya/ending3-16.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Mwah! ");
			writeDrawn("images/drawn/aya/ending3-14.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "I want this, I'm ready. I know you want this too. ");
			writeDrawn("images/drawn/aya/ending3-17.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "I...");
			writeDrawn("images/drawn/aya/ending3-18.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Go on, you want it, right? I'm not moving an inch until you get out of your own head and decide.");
			writeSpeech(data.story.name, "player", "I... I want it... I want you to f-");
			writeDrawn("images/drawn/aya/ending3-19.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/ending3-20.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "-fffuuuuuck me~!");
			writeSpeech(data.story.sisterName, "jean", "I-I'm inside! I'm fucking "+data.story.name+"~! ");
			writeText("There's a strange glimmer in her look as her eyes are locked with yours.");
			writeDrawn("images/drawn/aya/ending3-21.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/ending3-22.jpg", "Art by Aya");
			writeText("She barely lasts as long as you do, filling your insides with her cream as the two of you gaze into each other's eyes.");
			writeText("But unlike you, she doesn't stop there.");
			writeDrawn("images/drawn/aya/ending3-23.jpg", "Art by Aya");
			writeText("You hold back a moan as she pushes herself inside of you, slamming right past your bitch-button of a prostate. She isn't as reserved, and is moaning wantonly as she plunges herself inside of you.");
			writeDrawn("images/drawn/aya/ending3-25.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Nnngh~! I'm fucking you! <br>H-how is it? How does my cock feel?");
			writeSpeech(data.story.name, "player", "I-it feels-");
			writeDrawn("images/drawn/aya/ending3-26.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Oooough!");
			writeText("The sight of your face twisted in pleasure sets her off like nothing else, and she rapidly saws her cock in and out, enjoying the sensation of your asshole desperately trying to grip her length.");
			writeSpeech(data.story.sisterName, "jean", "You're mine! Mine! This is where you belong! I want to spend the rest of my life like this!");
			writeSpeech(data.story.name, "player", "I love you!");
			writeDrawn("images/drawn/aya/ending3-27.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/ending3-28.jpg", "Art by Aya");
			writeText("Those words push her past her limit, and her eyes roll back. The rapid massaging of your prostate, and the feeling of cum being pumped into you push you over that same limit as well.");
			writeDrawn("images/drawn/aya/ending3-29.jpg", "Art by Aya");
			writeText("She's moaning, jaw slack, and your eyes begin to flutter as your brain fails to keep up with the sensations. You feel yourself drifting away, only distantly feeling your cum splattering on your chest.");
			writeDrawn("images/drawn/aya/ending3-30.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/ending3-31.jpg", "Art by Aya");
			writeText("You feel her pull out and collapse on top of you. You can hear her mumbling your name as you start to fall asleep.");
			writeText("You're safe, right here, and you always will be.");
			writeTransition("credits", "The End");
			break;
		}
		case "credits": {
			writeText("This has been a game by Noodle Jacuzzi, congratulations on reaching one of the endings!");
			writeText("Hopefully, you had a good time. Feel free to drop by my Master Index to see my other work, or check out my Patreon if you'd like to support future content and keep totally up to date.");
			writeText("As I said in the intro, I appreciate comments and criticisms. If you have any, or have some suggestions for HAA or future titles, please let me know by messaging me on Patreon, TFgames, or on F95Zone.");
			writeSpecial("Thanks for playing!");
			writeTransition("morning", "Awaken, and pursue a different outcome");
			break;
		}
		case "endMorning": {
			writeBig("images/real/locations/schoolClassroom.jpg");
			writeText("...");
			writeTransition("endKendra", "Speak with Kendra");
			writeTransition("endSchool", "Finish classes");
			break;
		}
		case "endSchool": {
			writeBig("images/real/locations/school.jpg");
			writeText("...");
			writeTransition("endRiley", "Speak with Riley");
			writeTransition("endStreets", "Leave school");
			break;
		}
		case "endStreets": {
			writeBig("images/real/locations/street.jpg");
			writeText("...");
			writeTransition("endAva", "Get a drink");
			writeTransition("endAlley", "Head home");
			break;
		}
		case "endAlley": {
			writeBig("images/real/locations/alley.jpg");
			writeText("...");
			writeTransition("endAlexis", "Check it out");
			writeTransition("endHome", "Hurry home");
			break;
		}
		case "endHome": {
			writeBig("images/real/locations/home.jpg");
			writeText("...");
			writeTransition("endMom", "Check on mom");
			writeTransition("endSleep", "Go to bed");
			break;
		}
		case "endSleep": {
			writeText("Thank you for playing");
			break;
		}
		case "endKendra": {
			writeText("Kendra");
			switch (endingChoices.sub) {
				case 1: {
					break;
				}
				case 2: {
					break;
				}
				case 3: {
					break;
				}
			}
			writeTransition("endSchool", "Finish classes");
			break;
		}
		case "endRiley": {
			writeText("Riley");
			switch (endingChoices.sub) {
				case 1: {
					break;
				}
				case 2: {
					break;
				}
				case 3: {
					break;
				}
			}
			writeTransition("endStreets", "Leave school");
			break;
		}
		case "endAva": {
			writeText("Ava");
			switch (endingChoices.sub) {
				case 1: {
					break;
				}
				case 2: {
					break;
				}
				case 3: {
					break;
				}
			}
			writeTransition("endAlley", "Head home");
			break;
		}
		case "endAlexis": {
			writeText("Alexis");
			switch (endingChoices.sub) {
				case 1: {
					break;
				}
				case 2: {
					break;
				}
				case 3: {
					break;
				}
			}
			writeTransition("endHome", "Hurry home");
			break;
		}
		case "endMom": {
			writeText("Lisa");
			switch (endingChoices.sub) {
				case 1: {
					break;
				}
				case 2: {
					break;
				}
				case 3: {
					break;
				}
			}
			writeTransition("endSleep", "Go to bed");
			break;
		}
		//VR
		case "princessSelect": {
			if (data.story.vr1 == false && data.story.vr2 == false && data.story.vr3 == false && data.story.vr4 == false) { 
				data.story.vrScore = 0;
			}
			writeText("Princess Quest is a game created by Noodle Jacuzzi. You play as a young princess named Elizabeth, who seeks to free her people from the presence of a demon terrorizing the kingdom.");
			writeText("All art contained here within is done by Neromashin. It's all from a game named 'Oujo & Onna Kishi W Do Gehin Roshutsu ~Chijoku no Misemono Dorei~' published by PinPoint. You can find the official website of the game at http://www.pin-point.biz/27_wdgr/index.html, but it's in Japanese. There is an English version coming to steam, but I've heard negative things about the translation's quality.");
			writeText("The game itself is pretty messed up. This game however is much tamer. This game contains graphic content depicting exhibitionism, tentacle penetration, and princess-on-orc action in the finale. There's no option to disable specific fetishes here, since it's all a linear set of levels.");
			writeText("<p class = 'choiceText' onclick = 'levelSelect(1)'>Level 1 - Demonic Bargain</p>");
			if (galleryCheck('vr1') == true) {
				writeText("<p class = 'choiceText' onclick = 'levelSelect(2)'>Level 2 - Castle Escapades</p>");
			}
			if (galleryCheck('vr2') == true) {
				writeText("<p class = 'choiceText' onclick = 'levelSelect(3)'>Level 3 - Evil Seed</p>");
			}
			if (galleryCheck('vr3') == true) {
				//writeText("<p class = 'choiceText' onclick = 'levelSelect(4)'>Level 4 - Attempted Rescue</p>");
			}
			if (data.story.vrScore == 4) {
				//writeText("<p class = 'choiceText' onclick = 'levelSelect(5)'>Epilogue</p>");
			}
			writeTransition("princessGallery", "View the gallery");
			if (data.story.princessGame > 1) {
				writeTransition("princessGuide", "View the strategy guide");
			}
			writeTransition("vr", "Turn off the game");
			if (data.story.vrScore > 0 && data.story.vrScore < 4) {
				writeText("You've found " + data.story.vrScore + " of 4 secret orbs needed to unlock the epilogue.");
			}
			writeSpecial("Here's an extra meesage added in version 0.6.5:");
			writeText("Both Rainy DayZ and Princess Quest are on hiatus for the sake of continuing work on the main game. I've gotten a lot of feedback letting me know my priorities have been a bit messy.");
			writeText("Have no fear. Once the scenes for the dom/sub routes have been finished I have plans release both Princess Quest and Rainy DayZ as their own standalone games.");
			writeText("My question, which I'd appreciate you answering in the discussion thread for the game, is thus:");
			writeText("In these full releases all of each game's content will be finished. This means every level and every gallery scene. I also have planned additional content that doesn't fit with other stuff narratively, think of them as expansion packs.");
			writeText("Would you want these to be expansion packs for the games, or for them to be independent sequels? It would be the same amount of content, just one single download instead of two/three seperate ones. If they are presented in just one package, what would those packages be named?");
			writeText("Also, what kind of content would you like to see? Zombie ideas? Other games to take images from like Princess Quest? Very few people have had anything to say about the VR games thus far, so your input would be appreciated.");
			break;
			break;
		}
		case "princessGuide": {
			writeText("It is recommended you copy this info so that you can view it while playing.");
			writeSpecial("Chapter 1:");
			writeText("Victory: Enter the demon's lair at x12 y12");
			writeText("Secret item: Investigate the secret wall at x8 y4");
			writeSpecial("Chapter 2:");
			writeText("Victory: Press one of the switches, then escape through the door at x26 y3");
			writeText("Secret item: Flip all three switches, then go through the now-open path at x28 y3");
			writeText("Switch 1: x21 y13");
			writeText("Switch 2: x18 y3");
			writeText("Switch 3: x22 y9");
			writeTransition("princessSelect", "Go back");
			writeSpecial("Chapter 3:");
			writeText("Victory: Find three of the switches hidden in books, then use the book in the dungeon at x18 y14");
			writeText("Secret item: Find all four of the switches hidden in books, find the last switch at x12 y21, and then grab the item at x15 y12");
			writeText("Book 1: x9 y2"); //(this and the final one are broken atm)
			writeText("Book 2: x3 y4");
			writeText("Book 3: x9 y7");
			writeText("Book 4: x4 y10");
			writeSpecial("Chapter 4:");
			writeText("Not yet finished!");
			writeSpecial("Epilogue:");
			writeText("Not yet finished!");
			writeText("To unlock the epilogue, collect all of the secret items throughout the game");
			break;
		}
		case "princessGame": {
			gameMode = "roaming";
			eventCheck();
			if (level == 0) {
				sceneTransition("vr");
			}
			else {
				showPrincess();
			}
			break;
		}
		case "princessExit": {
			princess.x = 0;
			princess.y = 0;
			gameMode = "dialogue";
			hidePrincess();
			sceneTransition("vr");
			break;
		}
		case "princessGallery": {
			writeDrawn("images/drawn/vr/title.jpg", "Art by Neromashin");
			generateGallery('vr');
			writeTransition("princessSelect", "Go back");
			break;
		}
		case "zombieGame": {
			//alert(data.zombieData.scene);
			writeText("Rainy DayZ is a game created by Noodle Jacuzzi. In a world where a zombie virus has spread, transforming people into voracious sex-hungry shemales, you play as a young woman searching for supplies to survive.");
			writeText("Exploration is encouraged since there's no reward for returning to the safehouse with the supplies. Try to get all of the events if you can.");
			writeText("Successful survival in this game is easy, and also not the point. The goal here is to sabotage this woman's efforts, and leave her to be assaulted by zombies of varying shapes and sizes. This game features a heavy emphasis on shemale content, and includes some rimming content.");
			writeText("In addition, this game also features a dog zombie. To view his scenes (which are not yet finished) you must deliberately wound yourself, go to the forest, and either leave your weapon behind or have 0 stamina when you encounter him. If you dislike this sort of content, you can avoid it easily by doing anything other than what I've just described. To avoid any potential legal troubles, this dog is actually a woman in a very, very convincing dog suit. If you want absolutely no part in this at all, you can click the buttons below to disable some of the more contentious content.");
			if (data.zombieData.beastDisabled == false) {
				writeText("<span id = 'beastButton' class = 'choiceText' onclick = 'toggle(`beast`)'>Disable 'bestiality' content</i>");
				writeText("<span id = 'beastContent'></span>");
			}
			else {
				writeText("<span id = 'beastButton' class = 'choiceText' onclick = 'toggle(`beast`)'>Enable 'bestiality' content</i>");
				writeText("<span id = 'beastContent'>Scene 'Hunter 1' disabled. <br>Scene 'Hunter 2' disabled.</span>");
			}
			if (data.zombieData.rimDisabled == false) {
				writeText("<span id = 'rimButton' class = 'choiceText' onclick = 'toggle(`rim`)'>Disable rimjob content</i>");
				writeText("<span id = 'rimContent'></span>");
			}
			else {
				writeText("<span id = 'rimButton' class = 'choiceText' onclick = 'toggle(`rim`)'>Enable rimjob content</i>");
				writeText("<span id = 'rimContent'>Scene 'Siren 2' disabled. <br>Scene 'Hunter 2' disabled.</span>");
			}
			if (data.zombieData.wormDisabled == false) {
				writeText("<span id = 'wormButton' class = 'choiceText' onclick = 'toggle(`worm`)'>Disable sounding (urethral insertion) content</i>");
				writeText("<span id = 'wormContent'></span>");
			}
			else {
				writeText("<span id = 'wormButton' class = 'choiceText' onclick = 'toggle(`worm`)'>Enable sounding (urethral insertion) content</i>");
				writeText("<span id = 'wormContent'>Scene 'Worms 1' disabled. <br>Scene 'Worms 2' disabled.</span>");
			}
			if (data.zombieData.scene != "") {
				writeTransition("zombieResume", "Resume playing");
			}
			writeTransition("zombieStart", "Start a new game");
			writeTransition("zombieGallery", "View the gallery");
			if (data.story.zombieGame > 1) {
				writeTransition("zombieGuide", "Read the strategy guide");
			}
			writeTransition("vr", "Turn off the game");
			writeSpecial("Here's an extra meesage added in version 0.6.5:");
			writeText("Both Rainy DayZ and Princess Quest are on hiatus for the sake of continuing work on the main game. I've gotten a lot of feedback letting me know my priorities have been a bit messy.");
			writeText("Have no fear. Once the scenes for the dom/sub routes have been finished I have plans release both Princess Quest and Rainy DayZ as their own standalone games.");
			writeText("My question, which I'd appreciate you answering in the discussion thread for the game, is thus:");
			writeText("In these full releases all of each game's content will be finished. This means every level and every gallery scene. I also have planned additional content that doesn't fit with other stuff narratively, think of them as expansion packs.");
			writeText("Would you want these to be expansion packs for the games, or for them to be independent sequels? It would be the same amount of content, just one single download instead of two/three seperate ones. If they are presented in just one package, what would those packages be named?");
			writeText("Also, what kind of content would you like to see? Zombie ideas? Other games to take images from like Princess Quest? Very few people have had anything to say about the VR games thus far, so your input would be appreciated.");
			break;
		}
		case "zombieGuide": {
			writeText("It is recommended you copy this info so that you can view it while playing.");
			for (i = 0; i < data.zombieGallery.length; i++) {
				document.getElementById('output').innerHTML += `<p>`+data.zombieGallery[i].name+`: `+data.zombieGallery[i].hint+`</p>`;
			}
			writeText("<br>");
			writeText("Additional notes:");
			writeText("Siren's Voice, Hunter's Chase, Vaccination, and Infected ending are unfinished at the moment.");
			writeText("The food in the convenience store infects you.");
			writeText("To wound yourself, use the sharp objects in the green house, then the other sharp object in the apartment basement.");
			writeText("Reading the final entry in the journal in the apartment basement triggers the second zombie to attack.");
			writeText("Fighting a zombie or using the highway decreases stamina. Eating snacks restores it.");
			writeText("You can leave your weapon behind by grabbing too much stuff before you get to the convenience store.");
			writeTransition("zombieGame", "Back to the main menu");
			break;
		}
		case "zombieGallery": {
			generateZombieGallery();
			writeTransition("zombieGame", "Back to the main menu");
			break;
		}
		case "zombieStart": {
			clearData();
			data.story.playingGame = true;
			sceneTransition("safehouse");
			break;
		}
		case "zombieResume": {
			data.story.playingGame = true;
			sceneTransition(data.zombieData.scene);
			break;
		}
		case "safehouse": {
			if (itemCheck("Food Supply") == false) {
				writeBig("images/zombie/player.jpg");
				writeText("It's cloudy and overcast today, just like it's been for months now. Your stockpile of food has run dry, so you need to find some more before you get hungry. Not only that, but with the weather getting worse you'll need to find enough to keep you fed for at least a few days.");
				writeText("You remember there was a convenience store in the city. At this point it's your only hope. You have a medical kit strapped to your side in case of emergencies, and a large wooden bat in your hands in case you see one of <b>them</b>.");
				writeSpeech("You", "zombie", "<i>It's time to get moving.</i>");
				writeText("You can get to the city via the highway, it isn't too long of a trek. For now, you'll need to <span class='choiceText' onclick='sceneTransition(`townStreets`)'>open the door</span> and head out into town.");
				zombieFooter();
			}
			else {
				writeText("You've done it! This young woman will survive another month with the supplies you've gathered, and all without being viciously molested by sex-hungry shemale zombies too! If this was the goal you've been shooting for, then great job!");
				if (data.zombieData.infected == true) {
					writeZombieEvent('infected');
				}
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "townStreets": {
			writeText("Worn and partially broken, a <span class='choiceText' onclick='sceneTransition(`greenHouse`)'>house painted green</span> stands strong against the wind. If you recall right, it was the home of a handyman. While there's probably no food, there might be something inside that could help you.");
			writeText("More out of the way, a <span class='choiceText' onclick='sceneTransition(`redHouse`)'>red house</span> actually has some fortifications intact. If you take the time to break in you might find something useful.");
			if (itemCheck("House Key") == true) {
				writeText("On the main street surrounded by an iron fence, a <span class='choiceText' onclick='sceneTransition(`blueHouse`)'>blue house</span> is practically calling your name. You've tried to break in before, but this time you have a key.");
			}
			else {
				writeText("On the main street surrounded by an iron fence, a lone blue house stands tall, taunting you. You've tried to break in before, but the entire house is locked down. Every window and back door are barricaded closed, and the front door is deadbolted shut.");
			}
			if (data.zombieData.townZombie == true) {
				writeText("You think you hear a <span class='choiceText' onclick='sceneTransition(`townZombie`)'>zombie</span> skulking around. Taking it out now might make moving around easier.");
			}
			if (itemCheck("Food Supply") == false) {
				writeText("You can see a path to the <span class='choiceText' onclick='sceneTransition(`highway`)'>highway</span> from here. You'll need to be careful though, since it's probably crawling with infected.");
			}
			else {
				writeText("You're almost there. A fifteen minute walk is (hopefully) all that's between you and your <span class='choiceText' onclick='sceneTransition(`safehouse`)'>safehouse</span>. With exhaustion creeping over you, you wonder if you can make it. Maybe it would be best to find a place to rest for now.");
			}
			zombieFooter();
			break;
		}
		case "townZombie": {
			if (data.zombieData.infected == true) {
				writeText("After making sure there isn't another one around, you approach the zombie from behind. Even despite the weather though she still notices you and turns around, but after starting at you for a moment she just starts walking away.");
				data.zombieData.townZombie = false;
				writeText("The zombie wasn't interested and left. Now you can move around the <span class='choiceText' onclick='sceneTransition(`townStreets`)'>streets</span> without worry.");
			}
			else {
				if (data.zombieData.stamina > 0) {
					if (itemCheck("Baseball Bat") == true) {
						writeText("After making sure there isn't another one around, you approach the zombie from behind. Even despite the weather though she still notices you and turns around. Time to fight.");
						writeSpecial("You're slightly more tired now, but you've defeated the zombie!");
						data.zombieData.stamina -= 1;
						data.zombieData.townZombie = false;
						writeText("You've defeated the zombie. Now you can move around the <span class='choiceText' onclick='sceneTransition(`townStreets`)'>streets</span> without worry.");
					}
					else {
						clearData();
						writeZombieEvent("basic1");
					}
				}
				else {
					clearData();
					writeZombieEvent("basic1");
				}
			}
			break;
		}
		case "blueHouse": {
			writeText("Success! The key works and you're able to break into the home. Unfortunately, the owners are already gone, and they took everything they owned with them. You navigate the rooms one by one but there's barely anything here.");
			writeText("On a large table there's a bowl full of old, moldy fruit. Curiously, only the lemons have been eaten. It almost looks like something tore into each of them and left the rinds in the bowl, ignoring the other fruit.");
			writeText("The place is pretty well secured though. If it weren't for the occasional sound in the walls, probably a rat, you'd be tempted to make this into your new safehouse.");
			if (itemCheck("Air Freshener") == true) {
				if (data.zombieData.infected == false) {
					writeText("The master bedroom isn't even all that dusty. The whole room is cozy, and still warm despite the weather. The large, queen-sized bed sits at the west side of the room. You're exhausted from the journey and you still have a ways to go, maybe you should take a <span class='choiceText' onclick='writeZombieEvent(`worms1`)'>rest?</span>");
				}
				else {
					writeText("The master bedroom isn't even all that dusty. The whole room is cozy, and still warm despite the weather. The large, queen-sized bed sits at the west side of the room. You're exhausted from the journey and you still have a ways to go, maybe you should take a <span class='choiceText' onclick='writeZombieEvent(`worms2`)'>rest?</span>");
				}
			}
			else {
				writeText("You go to investigate the master bedroom, but your hand stops on the knob as you hear a slithering sound. After a moment of silence, you hear it again. Something's in the walls, and you don't think its a natural animal. You decide that this isn't the best place for a nap.");
			}
			writeText("You can <span class='choiceText' onclick='sceneTransition(`townStreets`)'>leave</span> through the front door at any time.");
			zombieFooter();
			break;
		}
		case "greenHouse": {
			writeText("The place is a mess and water is leaking through the ceiling. You've been here a few times before, so you can find your way around here pretty easily. Every room has been picked clean at this point except the owner's studio.");
			writeText("You walk into the studio, the table and equipment covered with dust. A minute of searching is all it should take to be done with this place.");
			if (itemCheck("Flashlight") == false) {
				writeText("On the desk underneath a thin layer of dust is a large <span class='choiceText' onclick='addItem(`Flashlight`)'>flashlight</span>. It might still work if it uses long-lasting batteries. It's pretty large though, you should be careful not to take anything you don't need.");
			}
			else {
				writeText("There's an empty spot on the table where you took the flashlight from.");
			}
			writeText("There's also a large empty box on the table. At first you think you might be able to store a snack in there for later, but you can't really think of a good reason to do that.");
			if (itemCheck("Medical Kit") == true) {
				writeText("Over the side of the table you think you can see <span class='choiceText' onclick='sceneTransition(`greenInjury`)'>something metal</span>. A spike of sharp metal is in the way and is too heavy to move, but you can probably just grab the thing around it.");
			}
			else {
				writeText("On closer inspection, the object you injured yourself for is a broken screwdriver. The spike blocking the way is still wet with some of your blood. It isn't rusty though, so no chance of tetanus.");
			}
			writeText("You can <span class='choiceText' onclick='sceneTransition(`townStreets`)'>leave</span> through the front door at any time.");
			zombieFooter();
			break;
		}
		case "greenInjury": {
			removeItem("Medical Kit");
			writeText("You lean on the table and reach for the object, but your arm isn't long enough. You stretch as far as you can, and your fingertips rub against the object.");
			writeText("The push is enough to knock the object over, farther than you could hope to reach. To make matters worse you lose your balance, causing the spike to slash against your arm. 'Fuck!' You exclaim. It really hurts.");
			writeText("The next few moments are spent cleaning the wound and patching yourself up. You've emptied your medical kit.");
			writeText("There's no point in whining about it. You should <span class='choiceText' onclick='sceneTransition(`greenHouse`)'>move on</span> and keep searching.");
			break;
		}
		case "redHouse": {
			if (itemCheck("Food Supply") == false) {
				writeText("You enter the red house after bypassing some barricades and sliding open a window. There are some footprints in the dust here, and they're recent too. You skulk around for a moment to confirm that the house is empty. Whoever lives here must be out right now.");
				if (itemCheck("Snack") == false) {
					writeText("After some quick searching you find a small cache of food. It probably belongs to another survivor, and you don't want to make enemies. That said, taking just one <span class='choiceText' onclick='addItem(`Snack`)'>snack</span> shouldn't hurt.");
				}
				else {
					writeText("More searching reveals a small cache of food. It probably belongs to another survivor. You don't want to make enemies, and you already have something to eat.");
				}
				if (itemCheck("Rope") == false) {
					writeText("Hanging on the wall is a length of <span class='choiceText' onclick='addItem(`Rope`)'>rope</span>. Food is precious, but supplies like this are a lot less important. It should be fine to take if you think you need it.");
				}
				else {
					writeText("On the wall is a hook where some rope used to hang.");
				}
				if (itemCheck("Bag of Marbles") == false) {
					writeText("Aside from those, you find a <span class='choiceText' onclick='addItem(`Bag of Marbles`)'>bag of marbles</span> sitting on the floor. These are clearly more important than food, and you should definitely take them.");
					writeText("That was a joke, a little bit of post-apocalypse humor for you.");
				}
				else {
					writeText("It doesn't seem like there is anything else here worth taking.");
				}
			}
			else {
				writeText("You sneak into the house very quietly. The window is already open, so you don't think you're alone here. Soon enough you're proven right, and you peer around the corner to find a <span class='choiceText' onclick='sceneTransition(`fellowSurvivor`)'>fellow survivor</span> huddled against a fireplace for warmth.");
			}
			writeText("You can <span class='choiceText' onclick='sceneTransition(`townStreets`)'>leave</span> through the front door at any time.");
			zombieFooter();
			break;
		}
		case "fellowSurvivor": {
			if (data.zombieData.infected == true) {
				writeZombieEvent("survivor");
				writeText("You should <span class='choiceText' onclick='sceneTransition(`townStreets`)'>leave</span> before she gets back up.");
			}
			else {
				writeText("You should <span class='choiceText' onclick='sceneTransition(`townStreets`)'>leave</span>. This scene isn't finished.");
			}
			break;
		}
		case "highway": {
			writeText("Your journey is exhausting and a half hour of walking leaves you weary, especially since you need to be on high alert.");
			data.zombieData.stamina -= 1;
			writeSpecial("You're slightly more tired now, but you've almost made it to the city!");
			writeText("The trip along the highway is slow and tense, but your stealth pays off once you catch wiff of a scent powerful enough to be smelt through the rain. It's the smell of infected cum.");
			writeText("The deed is already done, the crowd of shambling, purposeless zombies is slowly dispersing. Their former target is laying in the middle of the road, their body caked with semen so thick the rain isn't enough to wash it off.");
			writeText("You don't want to wait around to see them wake up, and you certainly don't want any of the crowd to notice you. It would be best to just try and <span class='choiceText' onclick='sceneTransition(`cityStreets`)'>sneak past</span> the horde and make your way into the city. With the rain masking your steps and scent, you should have no problem making it through with your clothes still on.");
			if (itemCheck("Bag of Marbles") == true) {
				writeText("But an idea strikes you as you get ready to start sneaking. Your <span class='choiceText' onclick='writeZombieEvent(`horde1`)'>bag of marbles</span> makes a small click as you hold it in your hand. You could use it as a distraction to make your way through more safely.");
				writeText("Although it doesn't seem like it's necessary, since they have no idea you're here anyway.");
			}
			zombieFooter();
			if (itemCheck("Food Supply") == true) {
				writeZombieEvent("horde2");
			}
			break;
		}
		case "cityStreets": {
			writeText("You've reached the outskirts of the city, cars line the road even out here. The rain is getting pretty heavy, so it might be fore the best and hurry on your way.");
			writeText("As you walk down the street, you see an open window on the second story of an apartment building. The place looks closed off, so there aren't any other entrances. If you wanted to, you could scale the wall and <span class='choiceText' onclick='sceneTransition(`studioApartment`)'>enter the building</span>.");
			if (itemCheck("Food Supply") == false) {
				writeText("But at the end of the block is your real goal, the <span class='choiceText' onclick='sceneTransition(`convenienceStore`)'>convenience store</span>. The entrance is covered in wooden planks, but you spy a way you could sneak in.");
			}
			else {
				writeText("The rain is getting harder and harder, and your bag isn't getting any lighter. You need to may your way back to the safehouse as soon as you can. The clearest way back you can think of would be to take the highway again, but with the storm going on you'll need to take the road directly instead of walking on the outskirts.");
				if (data.zombieData.stamina > 1) {
					writeText("You're well fed and prepared for a journey, you feel like you could head through the <span class='choiceText' onclick='sceneTransition(`highway`)'>highway</span> even considering the danger.");
				}
				else {
					writeText("You don't feel like you have enough energy to risk the highway.");
				}
				if (itemCheck("Factory Key") == true) {
					writeText("The factory's gate key is sitting in your pocket. The path to the <span class='choiceText' onclick='sceneTransition(`factoryGate`)'>factory</span> should be relatively high and dry, especially compared to the highway.");
				}
				writeText("You could cut directly through the <span class='choiceText' onclick='sceneTransition(`forest`)'>forest</span>. You'll be cutting down on distance, and there should be far fewer zombies.");
			}
			zombieFooter();
			break;
		}
		case "studioApartment": {
			writeText("You climb through the windowsill and enter the apartment silent as a mouse. The open window has left the room looking pretty damp, but is otherwise in pretty good shape.");
			if (itemCheck("Snack") == false) {
				writeText("On the table, amid a pile of trash looks like a sealed can of food you can take as a <span class='choiceText' onclick='addItem(`Snack`)'>snack</span>.");
			}
			if (itemCheck("Factory Key") == false) {
				writeText("Hanging from the wall is a small silver <span class='choiceText' onclick='addItem(`Factory Key`)'>key</span> with the words 'Ridgewood Factory' engraved on it.");
			}
			writeText("The halls are claustrophobic and dark, each door you pass by has been smashed open, not a good sign. An even worse sign is the smell coming from some of the rooms, the smell of infected semen. Down two flights of stairs is a much heavier door held closed by a simple latch. Inside is some sort of <span class='choiceText' onclick='sceneTransition(`apartmentBasement`)'>basement room</span>.");
			writeText("Despite how dangerous the situation seems, you still have a way out by heading back out <span class='choiceText' onclick='sceneTransition(`cityStreets`)'>through the window</span>.");
			zombieFooter();
			break;
		}
		case "apartmentBasement": {
			writeText("The room is small, and there's an odd smell to the room. You think you hear something for a moment, but there isn't a second sound.");
			if (itemCheck("Air Freshener") == false) {
				writeText("Resting on a desk are a few objects, the first one you notice is a neon green <span class='choiceText' onclick='addItem(`Air Freshener`)'>lemon-scented air freshener</span>. You could use this to mask your scent, although the rain is already doing a pretty good job of that.");
			}
			else {
				writeText("Resting on a desk are a few objects, but you already took the air freshener. You notice that the smell of the room seems a little more powerful now.");
			}
			if (itemCheck("Medical Kit") == false && data.zombieData.wounded == false) {
				writeText("In the corner of the room is a wastebasket filled with a variety of objects. If you really feel like you need to, you could <span class='choiceText' onclick='sceneTransition(`apartmentInjury`)'>reach inside</span> to search for anything useful.");
			}
			else {
				writeText("In the corner of the room is a wastebasket filled with a variety of objects. You don't really feel like you need to search through it right now.");
			}
			if (itemCheck("House Key") == false) {
				writeText("There's a pile of clothes in the corner. A quick look through them reveals a single <span class='choiceText' onclick='addItem(`House Key`)'>blue key</span>.");
			}
			else {
				writeText("There's a pile of clothes in the corner.");
			}
			writeText("Finally, resting on the desk is an <span class='choiceText' onclick='sceneTransition(`journal`)'>old journal</span>, probably owned by the previous resident of this place.");
			writeText("If you feel you've had enough, you can leave through the <span class='choiceText' onclick='sceneTransition(`studioApartment`)'>door</span>.");
			zombieFooter();
			break;
		}
		case "apartmentInjury": {
			writeText("You start rummaging through the wastebasket but quickly pull your hand out. You need to hold back your voice as you stem the small flow of blood. <b>You're bleeding!</b> A small knife was left inside the basket.");
			writeText("You already used your medical kit, so there's nothing to do now but wait. You can clean yourself up a bit more later, but once the bleeding stops you can go back to <span class='choiceText' onclick='sceneTransition(`apartmentBasement`)'>searching the room</span>.");
			data.zombieData.wounded = true;
			break;
		}
		case "journal": {
			writeText("The journal appears normal until a month ago, when the infections started. Everything after that is a scrawl of notes of varying usefulness. One pretty clean section is devoted to the zombies, and the different types of them.");
			writeText("Read the entry on <span class='choiceText' onclick='writeZombieEvent(`journalBasic`)'>basic zombies</span>.");
			writeText("Read the entry on <span class='choiceText' onclick='writeZombieEvent(`journalHunter`)'>hunter zombies</span>.");
			writeText("Read the entry on <span class='choiceText' onclick='writeZombieEvent(`journalSiren`)'>siren zombies</span>.");
			writeText("Read the entry on <span class='choiceText' onclick='writeZombieEvent(`journalWorms`)'>zombie worms</span>.");
			writeText("If you're finished reading, you can <span class='choiceText' onclick='sceneTransition(`apartmentBasement`)'>close the book</span>.");
			break;
		}
		case "cityZombie": {
			if (data.zombieData.stamina > 0) {
				if (itemCheck("Baseball Bat") == true) {
					writeText("You shove the zombie away from you and ready your weapon. Time to fight.");
					writeSpecial("You're slightly more tired now, but you've defeated the zombie!");
					data.zombieData.stamina -= 1;
					data.zombieData.cityZombie = false;
					writeText("You've defeated the zombie. Now you can move around the <span class='choiceText' onclick='sceneTransition(`apartmentBasement`)'>room</span> without worry.");
				}
				else {
					clearData();
					writeZombieEvent("basic2");
				}
			}
			else {
				clearData();
				writeZombieEvent("basic2");
			}
			break;
		}
		case "convenienceStore": {
			data.zombieData.townZombie = true;
			writeText("It takes some work to get inside the convenience store, which is a good sign. The place is still intact and dry, but the glass windows leave you worried about this place's safety. It probably won't hold up against the building storm.");
			writeText("But aside from that the place is everything you had hoped it would be. Some of the shelves have been picked clean, but others are still lined with sealed food. It only takes you a few moments to fill your backpack with a month's worth of food and water. Now you need to carry them back.");
			if (itemCheck("Food Supply") == false || itemCheck("Water Supply") == false) {
				if (data.zombieInventory.length > 4 && itemCheck("Food Supply") == false && itemCheck("Water Supply") == false) {
					writeText("You're carrying too much to take the food and water supply. You'll need to drop some things.");
					writeText("Drop your <span class = 'choiceText' onclick = 'removeItem(`" + data.zombieInventory[0].name + "`)'>"+data.zombieInventory[0].name+".");
					writeText("Drop your <span class = 'choiceText' onclick = 'removeItem(`" + data.zombieInventory[1].name + "`)'>"+data.zombieInventory[1].name+".");
					writeText("Drop your <span class = 'choiceText' onclick = 'removeItem(`" + data.zombieInventory[2].name + "`)'>"+data.zombieInventory[2].name+".");
					writeText("Drop your <span class = 'choiceText' onclick = 'removeItem(`" + data.zombieInventory[3].name + "`)'>"+data.zombieInventory[3].name+".");
					writeText("Drop your <span class = 'choiceText' onclick = 'removeItem(`" + data.zombieInventory[4].name + "`)'>"+data.zombieInventory[4].name+".");
					if (data.zombieInventory.length > 5) {
						writeText("Drop your <span class = 'choiceText' onclick = 'removeItem(" + data.zombieInventory[5].name + ")'>"+data.zombieInventory[5].name+".");
					}
				}
				else {
					if (itemCheck("Food Supply") == false) {
						writeText("Take the <span class='choiceText' onclick='addItem(`Food Supply`)'>food supply</span>.");
					}
					if (itemCheck("Water Supply") == false) {
						writeText("Take the <span class='choiceText' onclick='addItem(`Water Supply`)'>water supply</span>.");
					}
				}
			}
			else {
				if (itemCheck("Food Supply") == false) {
					writeText("Take the <span class='choiceText' onclick='addItem(`Food Supply`)'>food supply</span>.");
				}
				if (itemCheck("Water Supply") == false) {
					writeText("Take the <span class='choiceText' onclick='addItem(`Water Supply`)'>water supply</span>.");
				}
			}
			if (data.zombieData.infected == false) {
				writeText("The golden rule is to not snack on scavenged stuff, so you spend a little bit longer looking around for something you can eat right now. Behind the counter and inside a sealed container is a single glazed donut. It has a bit of a smell, and is probably stale right now, but in this moment you could be the last person on earth to <span class='choiceText' onclick='writeZombieEvent(`tainted`)'>eat a donut</span>.");
			}
			if (itemCheck("Food Supply") == true && itemCheck("Water Supply") == true) {
				writeText("The wind outside is howling and shaking the windows, it might be time to <span class='choiceText' onclick='sceneTransition(`cityStreets`)'>leave</span> soon.");
			}
			zombieFooter();
			break;
		}
		case "factoryGate": {
			writeText("This path is much shorter than the highway, all you'll need to do is cut through the factory itself to get to the back road. From there it's a straight, mostly dry way back to town.");
			writeText("You slide the key into the large lock at the front door and turn it, and are met with a crunching sound. The gate opens, but won't close.");
			writeText("The factory itself is wide and spacious, but is near entirely empty. All that's left are construction materials. From what you can gather, this place wasn't finished yet. You can navigate the place pretty easily and are soon on the second floor.");
			if (itemCheck("Baseball Bat") == true) {
				writeText("A large door you walk through strikes you as a risk. If you've been followed here then you could end up getting caught in a dead end. You could <span class = 'choiceText' onclick = 'removeItem(`Baseball Bat`)'>leave your weapon behind</span> to bar the door.");
			}
			else {
				writeText("Laying against a door as a makeshift lock is your baseball bat. It's so tightly set in place that you couldn't move it if you wanted to.");
			}
			if (data.zombieData.factoryZombie == true) {
				writeText("You think you hear a noise and dart for cover. Slowly, a zombie walks across a length of scaffolding above you. If you wanted to you could try to <span class='choiceText' onclick='sceneTransition(`factoryZombie`)'>take it out</span>, or you could just <span class='choiceText' onclick='sceneTransition(`upperFactory`)'>sneak past it</span> and go further into the factory.");
			}
			else {
				writeText("With the zombie out of the way, you are free to go <span class='choiceText' onclick='sceneTransition(`upperFactory`)'>further into the factory</span>.");
			}
			zombieFooter();
			break;
		}
		case "factoryZombie": {
			if (data.zombieData.infected == false) {
				data.zombieData.factoryZombie = false;
				writeText("For whatever reason, the zombie seems to be distracted by something and runs off. Looks like you're safe to <span class='choiceText' onclick='sceneTransition(`factoryGate`)'>wander the factory</span> for now.");
			}
			else {
				if (itemCheck("Baseball Bat") == true) {
					writeText("After making sure there isn't another one around, you climb up and swing at the zombie from behind. A single swing and she's down for the count.");
					data.zombieData.factoryZombie = false;
					writeText("You've defeated the zombie. Now you can move around the <span class='choiceText' onclick='sceneTransition(`factoryGate`)'>factory</span> without worry.");
				}
				else {
					clearData();
					writeZombieEvent("basic3");
				}
			}
			break;
		}
		case "upperFactory": {
			writeText("The inner chambers of the factory seem almost like a maze. Winding pathways lead back and forth in circles a few times before you get your bearings together. Not only that, but it's pretty dark in here. It isn't pitch black, but if you aren't careful you could hurt yourself.");
			writeText("A small noise and something moving in the corner of your vision set you on high alert. You crouch and wait patiently, and after a few minutes you can hear a sound that almost sounds like soft snoring. Whatever it is, you're in the home stretch now, you shouldn't take a risk by calling out to it.");
			if (data.zombieData.infected == true) {
				if (itemCheck("Flashlight") == true) {
					writeText("Navigating in the darkness with something in the room could be risky. You could use your <span class='choiceText' onclick='writeZombieEvent(`siren1`)'>flashlight</span> to find your way out of the building.");
				}
				if (itemCheck("Rope") == true) {
					writeText("You could <span class='choiceText' onclick='writeZombieEvent(`siren2`)'>set a trap with your rope</span> and make some noise to lure whatever's in the area to it. It probably can't chase you down if it's tied down.");
				}
			}
			writeText("If you aren't too worried about the snoring sound, you could just quietly <span class='choiceText' onclick='sceneTransition(`townStreets`)'>sneak out of the factory</span>. It should be a straight and simple shot back to town.");
			zombieFooter();
			break;
		}
		case "forest": {
			writeText("Hiking through the forest ends up being a lot more exhausting than you thought.");
			if (data.zombieData.stamina > 0) {
				data.zombieData.stamina -= 1;
				writeSpecial("You feel exhausted, but you've almost made it through the forest.");
			}
			writeText("The foliage grows thinner and the wind grows stronger, it should only be another few minutes before you arrive in town. Your elation is put to a quick end when the snap of a twig tells you you're being followed from a good distance away.");
			if (data.zombieData.wounded == true) {
				if (itemCheck("Baseball Bat") == false) {
					writeText("Wounded and without a weapon, all you can hope to do is <span class='choiceText' onclick='writeZombieEvent(`hunter2`)'>make this easier on yourself and give up</span>.");
				}
				else {
					if (data.zombieData.stamina < 1) {
						writeText("Wounded and completely exhausted, all you can hope to do is <span class='choiceText' onclick='writeZombieEvent(`hunter1`)'>go down fighting</span>.");
					}
					else {
						writeText("You wait for a moment, cautious and ready. Your wounds keep you from sprinting away from danger. Luckily you have your trusty bat and you have enough energy left to fight. When the zombified dog leaps out from the brush, your quick reaction lets you slam it away with your bat.");
						writeText("Your pursuer defeated you keep moving through the forest. Soon enough you break through the treeline and <span class='choiceText' onclick='sceneTransition(`townStreets`)'>arrive in town</span>.");
					}
				}
			}
			else {
				writeText("You break out into a sprint, trees rushing past you as you desperately try to outpace whatever's following you. Soon enough you break through the treeline and <span class='choiceText' onclick='sceneTransition(`townStreets`)'>arrive in town</span>.");
			}
			zombieFooter();
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("" + JSON.stringify(data) + "");
			writeText("Inventory window:" + invHidden + "");
			writeText("Wardrobe window:" + warHidden + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("home", "Go back home.");
		}
	}
}

function writeEvent(scene) {
	console.log(scene);
	switch (scene) {
		//Dom route
		case "mom1": {
			if (data.story.route == "dom") {
				writeText("You awaken in the morning, eager to appreciate the fruits of your labor. You walk out of your room, eager to see your mother transformed into the sex-fiend of your dreams, but you stop in your tracks as you walk past her room. Her door is cracked slightly open.");
				writeBig("images/real/general/solo2.gif");
				writeText("Still laying in bed well into the morning, your mother is rubbing at her pussy. The wet spot on her sheets leads you to believe she's been at it for quite a while now. Her moans have a tinge of panic to them as she rolls onto her side.");
				writeSpeech(data.story.motherName, "scripts/gamefiles/real/oldfile0.jpg", "God, oh god... What's happening to me? Got to get help... Got to...");
				writeText("Your mother slides out of bed, her hand still furiously jilling herself. She can't even make it halfway to the door before she leans back onto the wall.");
				writeBig("images/real/general/solo1.gif");
				writeText("Her rubbing reaches a crescendo and her body convulses, but even afther hand keeps rubbing. Her moans and whimpers are quick and panicked.");
				writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
				writeText("If you wan't to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
				writeText("...");
				writeText("You spend your free time studying the app and its nature.");
				writeSpecial("You've achieved a novice level of understanding of the Human Alteration App's use!");
				writeText("You have a plan now, and a few people you can use for guinea pigs. From now on you'll be able to corrupt individuals after going to bed, but for now you can explore the town freely. What you do from this point on is up to you, but it might be worth it to head to the coffee shop and help out for some pocket change.");
			}
			else {
				writeBig("images/real/lisa/profile2.jpg");
				writeText("Test for player sub scene mom1");
			}
			break;
		}
		case "mom2": {
			writeText("You awaken a few moments before your alarm starts to ring. The app allows you to fall asleep immediately whenever you want, so you've been getting a lot more rest without the tossing and turning that normally entails.");
			writeText("You turn off your alarm and hear a soft, polite tapping on your door.");
			writeSpeech(data.story.name, "player", "Yes?");
			writeText("The door opens, and your mother walks in wearing a completely new outfit.");
			writeBig("images/real/lisa/profile1.jpg");
			writeSpeech(data.story.motherName, "lisa", "Good morning sweetie! Breakfast is all ready downstairs.");
			writeText("Although you'd planned this, for it to go this well leaves you speechless for a moment. Meekly, your mother waits for you to sort your thoughts out.");
			writeSpeech(data.story.name, "player", "Thanks mom, I'll be down in a second.");
			writeSpeech(data.story.motherName, "lisa", "Of course honey. Let me know if you need anything.");
			writeText("Your mother starts walking out of your room. Luckily your blankets hid your morning wood from view.");
			writeText("...But as you start to think about the situation, you realize this is your chance to live the life you could only dream of. Swallowing, you take the metaphorical dive and call your mother back in.");
			writeSpeech(data.story.motherName, "lisa", "Yes sweet- Oh!");
			writeText("You've pulled the covers off and have exposed yourself. Your mother stares for a moment, both hunger and shock visible in her eyes. She hesitates for a moment before she begins to walk over to you and gets down on her knees.");
			writeSpeech(data.story.name, "player", "I can't go downstairs like this, obviously. Could you help me out?");
			writeText("There's a visible battle of wills in your mother's mind at this point. You can't turn her into an obedient slave in one night, but she clearly wants this just as much as you do.");
			writeSpeech(data.story.motherName, "lisa", "<i>Oh god, my son's... It's so big and hard... I shouldn't. I should storm out of this room. <br>But...</i>");
			writeBig("images/real/general/handjob1.gif");
			writeText("She takes your dick in hand and begins to stroke it. Your newly enhanced physiology means you start pumping out thick precum with each of the first strokes.");
			writeSpeech(data.story.motherName, "lisa", "<i>Jesus. This thing... I don't even know if I could take this...</i>");
			writeSpeech(data.story.motherName, "lisa", "<i>What am I thinking?! I should sto-... I should finish quickly.</i>");
			writeText("She's actually pretty skilled at this point, but you want more.");
			writeSpeech(data.story.name, "player", "This isn't enough, mom. I'll take too long like this. <b>More</b>.");
			writeText("She looks frightened at this, almost enough to stop. You wonder where her mind went first.");
			writeSpeech(data.story.name, "player", "Just showing off your tits should be enough right now.");
			writeBig("images/real/body/boobs8.gif");
			writeText("She looks relieved, but also a little disappointed at those words. Still, she quickly slides off her top and continues stroking..");
			writeText("With each stroke her breasts jiggle, and you feel yourself getting closer.");
			writeSpeech(data.story.motherName, "lisa", "<i>He's twitching. He's getting close. This massive dick is going to-!</i>");
			writeBig("images/real/general/handjob3.gif");
			writeText("A great deal of it gets onto her hand, but a lot of it lands on your chest as she reflexively points it away from herself. Room for improvement, you suppose. Even after you finish, she sits there holding your cock in a daze.");
			writeSpeech(data.story.name, "player", "That should be enough for now, mom.");
			writeSpeech(data.story.motherName, "lisa", "Oh! Of course, sorry.");
			writeText("She straightens out her clothes, hesitating whenever her gaze falls over her cum-coated hand. After she's finished she leaves you to get dressed.");
			break;
		}
		case "mom3": {
			writeSpeech(data.story.name, "player", "Hey mom, I'm gonna go catch a quick nap before dinner, okay?");
			writeSpeech(data.story.motherName, "lisa", "No problem honey. I'll wake you up once everything's ready. You get some rest.");
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
			writeSpeech(data.story.name, "player", "Anything to say for yourself?");
			writeText("She responds first with a soft kiss on the head of your dick.");
			writeSpeech(data.story.motherName, "lisa", "Dinner's ready.");
			break;
		}
		case "mom4": { 
			writeText("You return home to a quiet house.");
			writeSpeech(data.story.name, "player", "I'm hooome~");
			writeText("Nothing. Maybe mom and "+data.story.sisterName+" are out? You search around for a bit, and find the door to mom's room open.");
			writeText("She's asleep in her bed inside wearing close to nothing, a sign of how far her modesty has fallen.");
			writeText("You walk in, shutting the door behind you. This is just as good a situation as any to give her a taste of her own medicine.");
			writeText("Without hesitation, you grab onto her thong and start pulling it down her legs.");
			writeSpeech(data.story.motherName, "lisa", "...Hmm? Huh?<br>Master? What are you doing?");
			writeSpeech(data.story.name, "player", "I'm getting even for the fun you had last time.");
			writeSpeech(data.story.motherName, "lisa", "What?<br>Hold on-");
			writeText("You press the head of your dick against her cuntlips. Despite her protests, she's starting to get pretty wet.");
			writeSpeech(data.story.motherName, "lisa", "Wait, please stop.");
			writeText("She places her hand on your cheek. You hesitate for a bit as she locks eyes with yours.");
			writeSpeech(data.story.motherName, "lisa", data.story.name+", listen. Things have been going crazy these last few days, and we've crossed more lines than we should have. But you don't really want this, do you? You don't want to fuck your own mother, right?");
			writeBig("images/real/general/mom4-1.gif");
			writeText("She's caught off guard as you thrust into her. She doesn't try to resist despite her spiel.");
			writeSpeech(data.story.motherName, "lisa", "Ooooh~<br><i>My... My own son...</i>");
			writeSpeech(data.story.name, "player", "Oh? Done protesting? Are you sure you don't want me to stop?");
			writeSpeech(data.story.motherName, "lisa", "Ngh, no...");
			writeText("Her voice is hesitant, but she wraps her legs around to to keep you inside.");
			writeSpeech(data.story.name, "player", "Hmm? Didn't catch that.");
			writeSpeech(data.story.motherName, "lisa", "Stay inside me! Treat me like your cocksock!");
			writeBig("images/real/general/mom4-2.gif");
			writeSpeech(data.story.motherName, "lisa", "Ouh god! Cumming! I'm cumming from my son's jizz!");
			writeText("You don't stop thrusting even as you cum, and you keep pumping into her.");
			writeSpeech(data.story.motherName, "lisa", "Ngh I'm gonna break! More!");
			writeText("You can feel a second orgasm coming on, you'll make sure to cum inside again just to make sure this sticks.");
			writeText("You start pumping jizz into her again, your refractory period much shorter thanks to the app.");
			writeText("You start to slow down as her arms, wrapped around you, go slack.");
			writeBig("images/real/general/mom4-3.gif");
			writeText("As you pull out, globs of cum start to leak out of her, but not even close to all of it is spilling out.");
			writeText("She's panting, but lowers a hand down to her snatch and starts fingering some of the spilt cum back inside her.");
			writeSpeech(data.story.name, "player", "No need for that, there's plenty more where that came from.");
			break;
		}
		case "mom5": {
			writeText("You shoo her out for a moment and quickly use the bathroom. She's only just started anyways.");
			writeSpeech(data.story.name, "player", "Hey, how long do you think you'll be at this?");
			writeSpeech(data.story.motherName, "lisa", "Awhile at least. I'll need to get the shower, the tiles underneath the sink, the-.");
			writeSpeech(data.story.name, "player", "I'll let you get to that then. I'm feeling kind of out of it, so I'll be taking a nap.");
			writeSpeech(data.story.motherName, "lisa", "Alright, I hope you feel better master.");
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
			writeSpeech(data.story.motherName, "lisa", "Oh, good morning! I just finished actually, let me scoot out-");
			writeText("You place a hand on her shoulder to stop her.");
			writeSpeech(data.story.name, "player", "No. I'm here for relief. On your knees, open your mouth.");
			writeText("She obeys without question. As you take of your clothes she gets down on her knees and opens her mouth, letting her tongue hang out as she closes her eyes.");
			writeSpeech(data.story.motherName, "lisa", "Aaaah-Aah!?");
			writeText("There's suprise in her voice as you press your asshole instead of your dick against her tongue.");
			writeSpeech(data.story.name, "player", "Come on. You're here for my relief, right?");
			writeText("Once the suprise wears off, she gets with the program, slowly licking the puffy rim of your ass.");
			writeBig("images/real/general/mom5-1.gif");
			writeSpeech(data.story.motherName, "lisa", "<i>Oh god, I'm licking my own son's asshole, and it tastes good... I'm a fucking pervert!</i>");
			writeText("Her tongue feels incredible, she's hesitant at first but really starts getting enthusiastic as she realizes how much she loves this.");
			writeText("You let out a shuddering moan as your flaccid dick begins to start liberally leaking out clear precum onto the freshly-cleaned floor. You spread your legs to allow her better access to your asshole.");
			writeText("She pulls back from your ass for a second, sticking a hand into her soaked yoga pants.");
			writeSpeech(data.story.motherName, "lisa", "Fuck, master, you taste so good!");
			writeText("She takes a deep breath of your ass, and lets it out in a shuddering moan. Soon enough her tongue is back inside your ass, her free hand wrapping around your dick to start jerking you off.");
			writeText("The combined sensations cause your stream of precum to turn into spurts of actual cum.");
			writeSpeech(data.story.name, "player", "F-fuuuck");
			writeText("Once she realizes your cum is leaking out, she stops fingering herself and starts letting the cum pool in her pussyjuice soaked hand, never missing a beat between tonging your asshole and stroking your dick.");
			writeText("Your cum just doesn't stop, your prostate working in overdrive as the cum overflows in her hand. She carefully lowers her cum-coated fingers back into her pants and starts fingering herself again, and it doesn't take to look before she's squirting herself silly in the middle of her rimjob.");
			writeSpeech(data.story.motherName, "lisa", "Fuck! I'm fingering my son's cum into my pussy while eating his ass! <br>Cumming~!");
			writeText("As you reach a full minute of nonstop cumming, you need to bend over onto the sink to support yourself.");
			writeText("Your vision is starting to blur, the pleasure is getting to be too much. You reach over and push her head away from your ass. She's panting like a bitch in heat, desperate to keep tasting your asshole.");
			writeText("You push her back and she starts coming to her senses, still audibly fingering your cum into her snatch.");
			writeText("You're more waddling than walking as you make your way back to your room. You need some rest as soon as possible.");
			break;
		}
		case "mom6": {
			writeText("You toss the fruit gushers into your mouth and chew. It tastes lemony.");
			writeSpeech(data.story.motherName, "lisa", "If you need to go, I can take a break.");
			writeSpeech(data.story.name, "player", "Nah, it's fine. I'll just go right now, don't mind me.");
			writeSpeech(data.story.motherName, "lisa", "I... Of course sweetie. Go ahead.<br><i>Just make sure you save some for me.</i>");
			writeText("She shakes her head, having caught herself entertaining a strange thought. You ignore her, whip out your dick, and start pissing.");
			writeText("She watches intently, not even trying to hide it as one hand starts rubbing through her pants. The candy hasn't really kicked in yet, but your stream is powerful and messy. Little drops of piss hit the toilet's seat and bounce off, hitting the wall and at least some of them hitting her face, but her hypnotized face doesn't even flinch.");
			writeText("You finish much sooner than she'd like, and she's visibly disappointed until she snaps out of her daze.");
			writeSpeech(data.story.name, "player", "Alright I'm out. I drank a lot though so I'll probably be back soon.");
			writeText("She doesn't know how to respond as you zip back up and flush.");
			writeText("As you walk out of the room, you can see her licking her lips out of the corner of your eye.");
			writeText("...");
			writeText("You open the bathroom door without bothering to knock, the candy's in full gear and its effects are starting to show.");
			writeText("Your mother is still here, on her knees in front of the toilet.");
			writeSpeech(data.story.motherName, "lisa", "Oh, does master need to pee? I'm not done yet, and we can't just let the toilet get all messy again...");
			writeText("She isn't even trying to hide it as she spreads her legs to show the dark wet spot, proof that she'd been jilling off waiting for you to come back.");
			writeSpeech(data.story.motherName, "lisa", "What ever will we do? I guess you'll just need to use a replacement for now~");
			writeText("You let out a chuckle as you unzip and walk forwards.");
			writeSpeech(data.story.name, "player", "You are one hell of a filthy slut, aren't you? Well, you asked for it.");
			writeBig("images/real/general/mom6-1.gif");
			writeText("She lets out a half-moan half giggle as you start pissing on her face, soaking her top.");
			writeText("She's still got a hand in her pants even as you adjust your dick to start pissing into her hair.");
			writeSpeech(data.story.name, "player", "Fuck. You like that?");
			writeText("She nods, eyes closed, before she opens her mouth to start trying to catch some of it on her tongue.");
			writeText("You pinch off the stream, you still have a lot more in the tank thanks to the candy, and walk forwards.");
			writeSpeech(data.story.motherName, "lisa", "Are you done? I can't se-");
			writeText("You press your dick against her lips, and she gets the message. Eyes still closed, face still soaked in piss, still fingering herself, she takes the head of your dick into her mouth.");
			writeText("You let out a groan as you start pissing again. She doesn't even gag, probably enjoying the taste of piss as she glugs it down.");
			writeText("By the time the stream starts weakening, she's already chugged probably a full pint of your piss.");
			writeSpeech(data.story.name, "player", "I hope you're still thirsty, I still need to go.");
			writeText("She moans around your pissing dick, coughing as she breathes some in. Luckily for her, if she starts getting tired of drinking it there's another hole you can use. ");
			break;
		}
		case "mom7": {
			writeText("You give a few good thrusts to get your erection up. That myth about not being able to pee with a boner is bullshit.");
			writeSpeech(data.story.motherName, "lisa", "Mmm... Good morning.<br>Ah, why'd you stop?");
			writeSpeech(data.story.name, "player", "Hold still.");
			writeSpeech(data.story.motherName, "lisa", "Of course, maste-Errrrr!");
			writeText("She does her best to hold back her squirming as you piss into her full force.");
			writeSpeech(data.story.motherName, "lisa", "Nnnngh!<br><i>Oh god, I can feel it in my <b>womb</b></i>!");
			writeText("Her eyes roll back as she starts cumming from you pissing inside of her.");
			writeText("Once you've finished, you start to pull out.");
			writeBig("images/real/general/mom7-1.gif");
			writeSpeech(data.story.name, "player", "Make sure to clean this up. I need to get ready for school.");
			writeSpeech(data.story.motherName, "lisa", "Th... Thank you master...");
			break;
		}
		case "sister1": {
			writeSpeech(data.story.sisterName, "jean", "Different? Nah, I feel fine. Is your head screwed on right?");
			writeText("You'd been eager to see how your sister had changed as a result of the app, but when you'd seen her earlier she looked fine. Even now she doesn't seem any different. It looks like you'll need to try again.");
			writeText("After a nice shower, you notice her door is still cracked open and you can hear sounds from inside. You skulk over to the doorway and peek inside...");
			writeBig("images/real/general/solo3.gif");
			writeText("Your sister is rubbing at herself, but what catches your attention even more is the fact that she has a pair of your underwear pressed against her face.");
			writeText("Every breath she takes in reinvigorates her rubbing, until she lets out a low whimper and stops. You're worried that she saw you until she rolls onto her side.");
			writeSpeech(data.story.sisterName, "jean", "<i>What the hell is wrong with me? I can't seem to finish. Maybe if I...");
			writeBig("images/real/general/analFinger.gif");
			writeText("She thrusts her fingers into her asshole, and holds back her moan by biting into the fabric she keeps against her face. It's a used, unwashed pair.");
			writeText("You stay and watch her play with herself until she gives up, unable to achieve an orgasm. She hides your underwear beneath her mattress and you escape to your room. If you want to push her further this way, you'll need to increase some sensitivities. You'll also need to find something for her to use. Maybe the exotic store has something in stock?");
			break;
		}
		case "sister2": {
			writeSpeech(data.story.name, "player", "Package came in for ya!");
			writeSpeech(data.story.sisterName, "jean", "Oh? I'm working right now, so leave it on the bed.");
			writeText("You toss the box containing the dildo you bought onto the bed, but instead of leaving you decide to hide inside her closet. She's completely focused on her work right now, so she doesn't notice as the closet closes and you peek through the blinds.");
			writeText("While you could mess with her to pump up the curiosity factor, soon enough she's slumped over in frustration at another failed software upgrade. S sits still for a moment, letting out a deep, exhausted sigh. She stands up, grabs a pair of scissors, and goes to investigate the box on her bed.");
			writeSpeech(data.story.sisterName, "jean", "Weird. I didn't order anything. Are there spam packages now? I'd hate-<br>...The fuck?");
			writeText("The exotic store's dildo has some heft to it. It's clearly made from high-quality material, not the sort of thing someone would send as a joke.");
			writeSpeech(data.story.sisterName, "jean", data.story.name + "? You still there?");
			writeText("She calls out and you don't respond for obvious reasons. After a moment of silence she walks over to and closes her door before taking a closer look at the toy.");
			writeText("It doesn't take too long before she starts to take her clothes off. You have no doubt that she'd be a lot more cautious if she weren't frustrated beyond belief right now. As it stands though, there's an almost irreverent look in her eyes.");
			writeSpeech(data.story.sisterName, "jean", "<i>No lube, so...</i>");
			writeBig("images/real/general/deepthroatDildo.gif");
			writeText("With a single thrust she's almost hilted it into her throat, clearly trying to get herself to salivate. She's way more skilled in this than you thought she'd be. The room is quickly filled with 'glurk's and gagging sounds until she finally pulls the dildo free.");
			writeSpeech(data.story.sisterName, "jean", "<i>Holy shit this is good. It doesn't even taste like plastic.</i>");
			writeText("She sets the dildo on the wall and presses it against the lips of her pussy, but hesitates for a moment. Changing her mind, she arches her back a little more and...");
			writeBig("images/real/general/analDildo1.gif");
			writeSpeech(data.story.sisterName, "jean", "Ooooooh shit, oh fuck, oh fuck fuck fuck~!");
			writeText("Her raised sensitivity is clear already, and after only a few thrusts her legs are quivering. With every thrust she slides on and off the shaft as if milking it.");
			writeText("You learn forward to get a better view before the dildo pops off the wall and " + data.story.sisterName + " slumps against the floor, shivering.");
			writeText("But it isn't enough. She props herself up against the bed, presenting a perfect show of her spread-open ass wrapped around the dildo and resumes thrusting.");
			writeBig("images/real/general/analDildo2.gif");
			writeSpeech(data.story.sisterName, "jean", "<i>Oh god, if someone walked in right now, they'd see everything~!</i>");
			writeText("The thought sets her off like a firecracker, her whole body shaking. She rides through the orgasms, switching between dildo and her fingers to enjoy how gaped her hole is.");
			writeText("Soon she starts picking up the pace, vigorously ramming the pole into her asshole and she's unable to hold her voice back.");
			writeSpeech(data.story.sisterName, "jean", "Fuck fuck fuck~! " +data.story.name+ "! Fuck my ass harder!");
			writeText("Unable to keep thrusting, she shakes like she's having a seizure and she slumps off the side of the bed. Slowly, the toy slides out of her anal ring, leaving it open and gaping for a moment before it puckers closed.");
			writeText("She realizes her mistake quickly though and moves over to the door, listening for if you had heard her screams. she re-clothes, stumbling as she walks, and leaves the room. You, having thoroughly enjoyed the show, decide to leave as well. She's well on the way to becoming a complete buttslut, but if you want to take her for yourself you'll need to push her even farther.");
			break;
		}
		case "sister3": {
			writeBig("images/real/general/analFinger.gif");
			writeText("Jean is lying down on her bed, her fingers slowly teasing her sensitive asshole while she enjoys her latest guilty pleasure.");
			writeSpeech(data.story.sisterName, "jean", "I know I shouldn't feel this way. This is so wrong...");
			writeText("She couldn't believe her luck when she'd found them. A pair of your underwear with a big, fat, fresh load sitting on top of them. With every breath she felt more and more drunk.");
			writeSpeech(data.story.sisterName, "jean", "Oooooh god I'm so fucked up. I'm snorting my brother's sperm while getting off with my ass~.");
			writeText("Any normal sister would be disgusted at the mere thought, so why did it make her so... Hungry?");
			writeText("She lifted the cloth closer to her face, careful not to spill the still-wet load. She held her nose inches from her brother's sperm and took a deep breath.");
			writeSpeech(data.story.sisterName, "jean", "OOOOOhhhhh fuck...");
			writeText("She could feel her ass clench and unclench around her fingers. She let out a pitiful whimper as she raised the cloth, ready to start slurping the semen off of it, but you took this moment to interrupt.");
			writeSpeech(data.story.name, "player", data.story.sisterName + "? What the fuck are you doing?");
			writeText("Her body jumps on the spot in surprise as her eyes meet yours. She could react with shock and anger, but that wouldn't work with your underwear still in her hand.");
			writeText("So instead she starts to panic.");
			writeSpeech(data.story.sisterName, "jean", "It's not- I didn't-!");
			writeSpeech(data.story.name, "player", "Are those mine?");
			writeText("Tears are starting to form in her eyes as she desperately searches for a way to explain this. Of course this is all an act on your part. You'd been messing with her head all day. That didn't mean you couldn't have fun with this though.");
			writeSpeech(data.story.sisterName, "jean", "I, I'm so sorry! I didn't-");
			writeText("You start to walk towards her and take the underwear from her hand.");
			writeSpeech(data.story.name, "player", "You point your ass towards the door and leave it unlocked while you suck on this. You want this, don't you?");
			writeText("She tries to respond before you put the underwear over her face, smearing the jizz onto her. In her panic she takes a deep breath. Her body arches as your spunk fills her nostrils and lungs. Her body shakes in a hands-free orgasm just from snorting your jizz.");
			writeText("Once she's finished her little bitch-gasm, you roll her over and position yourself over her already-lubed ass.");
			writeSpeech(data.story.sisterName, "jean", "Wha-*cough* What are you doing?");
			writeSpeech(data.story.name, "player", "Giving you what you wanted. What, do you want me to stop?");
			writeText("Her silence is all you need.");
			writeBig("images/real/general/anal9.gif");
			writeSpeech(data.story.sisterName, "jean", "OH GOD! FUCK~!");
			writeText("You stuff the underwear into her mouth to shut her up and you start viciously pounding her ass.");
			writeSpeech(data.story.name, "player", "Walking around in those pants all day is one thing. Stealing my jizz rags, though? I thought you had at least some self respect.");
			writeText("She responds with a deep groan as she pushes back into you.");
			writeText("And after only a few minutes of pounding a particularly powerful thrust pushes her over the limit.");
			writeBig("images/real/general/anal8.gif");
			writeSpeech(data.story.name, "player", "Is this what you wanted? You want me to stop using my underwear as jizz-rags and just start using your ass instead?");
			writeBig("images/real/general/analSquirt1.gif");
			writeText("She nods her head up and down as you start pumping jizz into her colon while she squirts all over her bed.");
			writeText("Once you finish, you pull out and rub yourself clearn with her face and start walking out.");
			writeSpeech(data.story.name, "player", "Clean yourself up, it's almost dinner. I might need to use you again later, jizz-mop.");
			break;
		}
		case "sister4": {
			writeText("You leave out the plug for her to find. It takes a while to work, so you'll find some way to pass the time.");
			writeText("...");
			writeSpeech(data.story.name, "player", "Hey, have you seen "+data.story.sisterName+" anywhere?");
			writeSpeech(data.story.motherName, "lisa", "I think she took her bike out for a ride. She seemed excited to get outside for once.");
			writeSpeech(data.story.name, "player", "Huh, that's kind of weird. Thanks.");
			writeText("She usually doesn't go outside unless she needs to these days. You go back up to her room and find that the plug is gone, so she definitely saw and took it.");
			writeText("Out of the window you can see her arriving, so you head out to greet her.");
			writeText("She's flush and beaming, even though she hasn't even worked up a sweat.");
			writeSpeech(data.story.name, "player", "You have a nice ride?");
			writeText("Instead of answering she looks from side to side to make sure no one else is watching, then turns around and bends over.");
			writeBig("images/real/general/sister4-1.gif");
			writeSpeech(data.story.sisterName, "jean", "I didn't want to just sit in my room all day~<br>At first it was big enough to give me a little bump on my belly, but I think it's shrunk now.");
			writeText("The sight of the plug in her asshole is open for all to see.");
			writeText("You aren't interested in sharing it though, or in fucking on the sidewalk, so the two of you head back inside.");
			writeText("Your mom asks how "+data.story.sisterName+"'s ride went, but a slap on "+data.story.sisterName+"'s ass gets her back to hurrying into her room instead of answering.");
			writeText("...");
			writeSpeech(data.story.name, "player", "Take it out and lift your ass up.");
			writeText("You shut the door behind you as you give the order.");
			writeBig("images/real/general/sister4-2.gif");
			writeSpeech(data.story.sisterName, "jean", "Oooh god, it's so sensitive now...");
			writeText("She starts teasing herself with the plug, drawing little circles on her rim before she thrusts the tip in and out.");
			writeSpeech(data.story.sisterName, "jean", "Hoooly shit... I bet my brain would break if you fucked my ass right now...<br>Ah! So rou-Mphh!");
			writeText("You push her down and grab the plug from her hand and shove it into her mouth. It isn't meant for oral use, but you don't give a fuck right now.");
			writeBig("images/real/general/sister4-3.gif");
			writeSpeech(data.story.sisterName, "jean", "MMPPH!");
			writeText("Her asshole is plump and smooth now thanks to the toy, enough that you can thrust in and out without any lube. She's enjoying this too, probably a lot more than she should as she sucks on the plug.");
			writeText("At this point her ass has been remodeled into a hole made for your pleasure, you can feel every squeeze as you slam your hips against her cheeks.");
			writeSpeech(data.story.name, "player", "Fucking tease, take it!");
			writeText("With one more big slam you start to cum, still roughly fucking her as you do.");
			writeText("You pull the plug out of her mouth with a *POP!*");
			writeText("It really wasn't meant for this sort of use. Her lips have been plumped up and she's drooling, her mind probably gone from the brutal assfuck she just got.");
			writeText("You toss the plug into the trash, ready for round two even if she isn't.");
			break;
		}
		case "sister5": {
			writeText("You hum loudly as you enter the room as though you were a king's procession, and drop the massive horsecock dildo onto the foot of "+data.story.sisterName+"'s bed.");
			writeSpeech(data.story.name, "player", "Sis, meet your new best friend.");
			writeText("She pulls her ass off the dildo stuck to the wall. At this point she probably either sleeps with the dildo inside of her, or she keeps it stuck to the bedframe a few inches above where her head would be at night.");
			writeText("She hefts up the horsecock, unable to wrap her fingers around it, and swallows dryly.");
			writeSpeech(data.story.sisterName, "jean", "I... Uh...");
			writeText("You toss her the taffy packet.");
			writeSpeech(data.story.name, "player", "This'll help you stretch to fit it, no risk of tearing.");
			writeText("She takes a moment to comprehend, but quickly puts down the dildo and tears open the packaging.");
			writeText("At this point her ass is so hungry she was considering impaling herself on the dildo even though it was thicker than her calf.");
			writeSpeech(data.story.sisterName, "jean", "How long does it take to kick in?");
			writeSpeech(data.story.name, "player", "Dunno. Give it a minute at least.");
			writeText("...");
			writeText("The credits roll on an episode of Tokyo Pop, twenty minutes have passed. "+data.story.sisterName+" straightens out, noting that her body is a lot more flexible than before.");
			writeText("With a thud you plant the horsecock onto the floor, content to just watch this time.");
			writeSpeech(data.story.name, "player", "Y'know, there's something pretty satisfying about just watching. It's hot in a different way when I'm seeing things without my dick in something.");
			writeSpeech(data.story.sisterName, "jean", "Weirdo.");
			writeText("She giggles, then straddles the over-a-foot-long horsecock.");
			writeSpeech(data.story.sisterName, "jean", "Nnnngh~");
			writeText("You can see the deformation of her abdoment before the dildo is even halfway inside of her. At this point, she might as well be fucking herself on a baseball bat.");
			writeSpeech(data.story.sisterName, "jean", "Gghhh, fuck this is huge.");
			writeText("You reach out and rub the distension, enjoying her quivering as you massage the bulge of the horsecock.");
			writeText("She's panting now, barely adjusted to the massive intrusion remodeling her asshole and rectum.");
			writeText("Slowly sliding down, she bottoms out. The dick is so long it needs to bend near the top to conform to her intestines.");
			writeSpeech(data.story.sisterName, "jean", "Fuck... I can fucking taste it, holy shit.");
			writeText("She sounds like she's already on the edge as she rubs the bulge only a few inches below her ribcage, before she starts standing back up off of it.");
			writeSpeech(data.story.sisterName, "jean", "Nnnnngh~!");
			writeText("You can see her pussy clench as she has her first of many orgasm of the day, all of which will be caused by a massive piece of plastic horse dick ruining her asshole.");
			writeText("...");
			writeBig("images/real/general/sister5-1.gif");
			writeSpeech(data.story.sisterName, "jean", "Fuck, fuck, fuck~!");
			writeText("You're intently watching as her pussy begins to spasm for the twelfth time in the last hour. It's a slow burn of pleasure, not the quick pounding she's used to.");
			writeText("She'll have time to adjust soon enough. Once her legs give out, you'll be helping her learn to adjust to a faster pace. She won't be walking for the rest of the day, that's for sure. ");
			break;
		}
		case "sister6": {
			writeText("You set down your fork as you finish your meal.");
			writeSpeech(data.story.name, "player", "Ah, damn mom, that was fantastic.");
			writeText("You lean back in your chair to peek under the table as you say this.");
			writeBig("images/real/general/sister6-1.gif");
			writeText("There's a soft smooching sound as your sister kisses the ridge of your dick. She lets out a small whine as mom tries to push her away to take the head for herself.");
			writeText("...");
			writeText("After dinner the three of you began fucking like rabbits all over the house. Moving between rooms, switching between who got the dick and who had to settle for tongues and fingers.");
			writeSpeech(data.story.name, "player", "Fuck, I'm cumming again! Take it, slut!");
			writeText("You give a big thrust and slam against mom's asscheeks while she and "+data.story.sisterName+" sixty-nine.");
			writeText("Once you're finished cumming, you pull out and let your jizz drip down into "+data.story.sisterName+"'s waiting mouth.");
			writeBig("images/real/general/sister6-2.gif");
			writeText("Today has been a good day.");
			break;
		}
		case "sister7": {
			writeText("You take a seat on her bed and pull out a pop rock.");
			writeSpeech(data.story.name, "player", "This is a very special candy. I'm going to eat this, and then you, me, and mom are going to be playing a little game.");
			writeText("...");
			writeBig("images/real/general/handjob6.gif");
			writeText("You pump our your third spurt of cum since you started, it jumps up before falling back down into "+data.story.sisterName+"'s hand.");
			writeSpeech(data.story.sisterName, "jean", "You like that, you p-pathetic quickshot?");
			writeText("She's garbage at this, but she's certainly trying. With a candy that induces a hair trigger, you thought this would be the perfect opportunity to have them turn the tables for once.");
			writeText("But Jean is barely keeping the act together, and mom has been in a daze since your first orgasm. She's doing everything she can not to lick it up off "+data.story.sisterName+"'s hand, or even lick up the cum that landed on the floor.");
			writeSpeech(data.story.name, "player", "I'm getting close again.");
			writeSpeech(data.story.sisterName, "jean", "O-oh yeah? My hand is all it takes for you to... For you to start spurting cum out of your fat dick? You really are-");
			writeText("Interrupting her, mom pushes jean aside.");
			writeBig("images/real/general/sister7-2.gif");
			writeSpeech(data.story.sisterName, "jean", "Wha- Mom, what the fuck? I wanted that!");
			writeText(data.story.sisterName+"'s too slow, and can only watch as you pump a load into your mom's mouth. Jean grabs mom by the hair and pulls her off, before locking lips to try and get some of the jizz she hasn't swallowed yet.");
			writeBig("images/real/general/sister7-3.gif");
			writeText("The sight of them mashing their lips together is almost enough to push you over the edge again.");
			break;
		}
		case "friend1": {
			writeText("The two of you met at an outdoor cafe this time, you didn't want " +data.story.chefName+ " getting pulled into any shenanigans for now.");
			writeSpeech(data.story.friendName, "riley", "Alright, enough with the funny biz. What's the 'cool thing' you wanted to show me.");
			writeSpeech(data.story.name, "player", "Alright, check it out.");
			writeText("You bring up the phone with the app loaded and show it to her.");
			writeSpeech(data.story.name, "player", "This is the Human Alteration App. I won it in a thing, it lets me mess with people's heads and bodies.");
			writeSpeech(data.story.friendName, "riley", "Like one of those hypnosis things? I call bullshit, it does look kinda cool though.");
			writeSpeech(data.story.name, "player", "I actually spent a couple of hours working on it last night. I didn't want to mess with you, so you can see its history, but I made it so that you can't physically use the app to prove it. Try touching it.");
			writeText(data.story.friendName + " is skeptical, but reaches out to touch it before stopping.");
			writeSpeech(data.story.friendName, "riley", "Actually, I don't want to...");
			writeText("It seems like people altered by the app actually rationalize it in their heads. You'll need to bust out some bigger guns.");
			writeSpeech(data.story.name, "player", "No worries. Check this out then.");
			writeText("You look around and see a woman with a large sunhat sitting at another table. One quick change of her 'love of hats' variable from 63 to 0, and she's violently thrown her expensive looking headwear to the ground. After looking around sheepishly for a second, she picks up her hat gingerly and places it into a trashcan like it was a dead animal.");
			writeSpeech(data.story.friendName, "riley", "Holy shit... That wasn't like an actress? Or like a flash mob?");
			writeSpeech(data.story.name, "player", "Nope. All me.");
			writeText("She seems genuinely impressed for a second before the color drains from her face as she seems to be contemplating something.");
			writeSpeech(data.story.friendName, "riley", "The app doesn't have like a 'details' section, does it? Like where it tells you things about a person? Like their name and stuff?");
			writeSpeech(data.story.name, "player", "It can. It's a command line kinda thing, I type in 'print name' and I could learn their name if I wanted. I haven't done that with you or anything like that.");
			writeText("She visibly calms down at this.");
			writeSpeech(data.story.friendName, "riley", "Thanks. Listen, tomorrow, or whenever, I wanna meet up again to tell you something. I figure fair's fair, you know? Don't look it up before then, okay? Please?");
			writeText("You agree, and she seems happy about this. You go to pay for the drinks when she stops you.");
			writeSpeech(data.story.friendName, "riley", "Before we stop, I was wondering if you could do <i>other</i> sorts of things with the app, actually.");
			writeSpeech(data.story.name, "player", "Did you have something in mind.");
			writeText("She subtly points over to the woman who'd thrown away her hat, and the man sitting a table over.");
			writeText("...");
			writeBig("images/real/general/anal10.gif");
			writeSpeech(data.story.name, "player", "Anal, huh?");
			writeSpeech(data.story.friendName, "riley", "Not a fan?");
			writeSpeech(data.story.name, "player", "Big fan, actually. I just didn't think she'd go straight for the ass. I didn't think you'd be into this sort of thing either.");
			writeSpeech(data.story.friendName, "riley", "There are a lot of things you don't know about me yet.");
			writeText("The two of you have gotten a lot closer watching these two newly-made exhibitionists maul each other. Pumping up their libidos was enough to get them to agree to letting you two watch, but anal was the woman's idea.");
			writeText("The woman is screaming obscenities about how hot it is that she's exposing herself as her asshole gets plowed. Although the race element makes it a little weird to watch as she swears her devotion to this big black cock.");
			writeSpeech(data.story.name, "player", "I can actually change her sensitivities too. Check it out.");
			writeText("A single command later and...");
			writeBig("images/real/general/analSquirt3.gif");
			writeText(data.story.friendName + " watches intently, stroking herself through her skirt as the woman starts quivering from the massive dick remodeling her shitpipe.");
			writeSpeech(data.story.friendName, "riley", "I- We should leave. I need to get home.");
			writeSpeech(data.story.name, "player", "Yeah we should probably leave before the cops pick these two up for indecent exposure.");
			writeText("...");
			writeSpeech(data.story.friendName, "riley", "Okay, I'll see you again soon. Remember what you promised, okay?");
			writeSpeech(data.story.name, "player", "No problem. I'll see you at school.");
			break;
		}
		case "friend2": {
			writeSpeech(data.story.friendName, "riley", data.story.name + "! Hi! Hey, cmon. I wanna take you to my place.");
			writeText("...");
			writeText("You thought there'd be more build up to this sort of situation, but no. Here you are, in your crush's room. You take a seat on the soft pink comforter resting atop her bed. She's gone to the bathroom for the moment.");
			if (data.story.currentScene != "gallery") {
				writeTransition("school", "If you wanted to, you could bail out right now.");
			}
			writeText("Before you even have time to snoop around her room though, she's back.");
			writeSpeech(data.story.friendName, "riley", "Hey. Thanks for waiting.");
			writeText("She's clearly nervous.");
			writeSpeech(data.story.name, "player", "It's no problem. So what's up? What did you want to show me?");
			writeText("She takes a deep breath and slides down her skirt.");
			writeSpeech(data.story.friendName, "riley", "The truth is that I have...");
			writeBig("images/real/general/sissy10.gif");
			writeSpeech(data.story.friendName, "riley", "A penis.");
			writeText("There's a moment of silence, you can see that her eyes are a little watery.");
			writeSpeech(data.story.name, "player", "Okay.");
			writeText("The painful tension disperses in a moment, replaced by an awkward silence.");
			writeSpeech(data.story.friendName, "riley", "Okay? That's it? No freaking out?");
			writeSpeech(data.story.name, "player", "Nope. I think you're beautiful. You having junk doesn't change that.");
			writeText("She sniffles as she rubs a small tear away.");
			writeSpeech(data.story.friendName, "riley", "Of course! Right. Of course it doesn't change that.");
			writeSpeech(data.story.name, "player", "Are you alright?");
			writeSpeech(data.story.friendName, "riley", "Yeah. It's just that last time I did this... It didn't go as well.");
			writeText("You take her by the hand to comfort her.");
			writeSpeech(data.story.friendName, "riley", "Okay, you next.");
			writeSpeech(data.story.name, "player", "What?");
			writeSpeech(data.story.friendName, "riley", "I've shown you mine, now you show me yours. Don't start acting like a prude now after what you did with that woman at the cafe.");
			writeText("She slides down your clothes and takes a moment to admire whats underneath.");
			if (data.story.bodytype == 2) {
				writeSpeech(data.story.friendName, "riley", "Oh my god, this is the cutest thing I've ever seen in my life!");
				writeText("She leans in and nuzzles against it lovingly.");
				writeSpeech(data.story.friendName, "riley", "And your skin is so smooth too... God, I like it even more than mine.");
				writeSpeech(data.story.name, "player", "You like it now? Check this out.");
				writeText("She watches with awe as you relax, allowing your cock to grow eight times its previous size.");
			}
			writeSpeech(data.story.friendName, "riley", "Holy crap... It's amazing.");
			writeBig("images/real/general/deepthroatStart.gif");
			writeText("Her hands and lips massage and kiss your penis. Her technique is incredible, and you're putty in her hands right away. She leans away from it, drawing you closer to a quick edge with her handjob.");
			writeSpeech(data.story.friendName, "riley", "You and I are gonna have a lot of fun with this big boy. But for now, I want you to cum.");
			writeText("One last kiss on the head of your dick has your legs quivering.");
			writeBig("images/real/general/facial1.gif");
			writeText("You ride the orgasmic high as it comes, but it's over sooner than you'd like. After it finishes " + data.story.friendName + " starts wiping herself off.");
			writeSpeech(data.story.friendName, "riley", "You have a good time? I'm gonna go clean myself off. Thanks for not being... Judgy.");
			writeSpeech(data.story.name, "player", "It's no problem. Can I hang around? I'd like to get the chance to know you better.");
			writeSpeech(data.story.friendName, "riley", "Sure, that sounds great.");
			break;
		}
		case "friend3": {
			writeText("The two of you chat for a bit, but the real goal of the day for both of you is to head off to her place right away.");
			writeText("...");
			writeSpeech(data.story.name, "player", "So, you ready?");
			writeSpeech(data.story.friendName, "riley", "Yeah. I've just never been super into anal, y'know?");
			writeSpeech(data.story.name, "player", "Hey don't worry. At the very least this'll make sure you have a great time.");
			writeText("She nods as she unwraps the caramel melt, before popping it into her mouth and munching.");
			writeSpeech(data.story.friendName, "riley", "...I's hoowey.");
			writeSpeech(data.story.name, "player", "It says it should kick in immediately.");
			writeText("She swallows, and lifts a hand to her throat before swallowing again.");
			writeSpeech(data.story.friendName, "riley", "Ho-ho boy.");
			writeText("She's taking slow, deep breaths through mouth and squirming, rubbing her legs together.");
			writeSpeech(data.story.name, "player", "Here, lemme see.");
			writeText("You hold up a finger and she takes it into her mouth. You start rubbing it against against the back of her throat, but instead of gagging, she starts moaning, and you can see her erection tent her skirt as she begins to suck on your digit.");
			writeSpeech(data.story.name, "player", "Alright, time for training to begin.");
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
			writeText("The two of you chat for a while efore you head to her place for the evening.");
			writeText("...");
			writeText("*CLINK*");
			writeText("The two glasses tap against eachother, and you each take a drink of the dark red fluid.");
			writeText("A lovely day has come to a close, and you've enjoyed a lovely meal "+data.story.friendName+" prepared. She downs her glass, giving a little shiver of pleasure as she swallows thanks to the candy from last time.");
			writeSpeech(data.story.name, "player", "So, is that really wine you're drinking? You said you were going to chicken out of drinking real stuff.");
			writeSpeech(data.story.friendName, "riley", "Ehehe, that's a secret, butt buddy.");
			writeText("It isn't even a bit funny, but you still choke a little on your drink anyways.");
			writeSpeech(data.story.name, "player", "That's rediculous. <br>You're like a totally different person outside if class.");
			writeSpeech(data.story.friendName, "riley", "You are too. You should speak up more, you could probably make friends with everybody in class if you just said hi. <br>Alright, dinner done, drinks finished. Come on.");
			writeText("She pulls you away from the table into her room and plops down onto the bed.");
			writeSpeech(data.story.friendName, "riley", "Alright, work your magic. Show me the life of a buttslut!");
			writeText("It isn't as quick as she hopes, luckily you did most if the heavy lifting last night. She relaxes patiently on the bed as you make dozens of tweaks. A few of them are more to test your limits, and she squeaks when you push the sensitivity of her rim to 100 for a second.");
			writeText("You set the phone aside, finished, and grab a handful off her asscheek.");
			writeSpeech(data.story.friendName, "riley", "Ah! Oh wow, you really did a thorough job, huh?");
			writeSpeech(data.story.name, "player", "Told you I was a fan of anal.");
			writeText("You press the head of your dick against her now slick, permanently-lubed butthole.");
			writeSpeech(data.story.name, "player", "You ready?");
			writeText("She wiggles invitingly in response.");
			writeSpeech(data.story.friendName, "riley", "Fuck me.");
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
			writeSpeech(data.story.friendName, "riley", "So, you gonna take your pants off or what?");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "Damn, you are forward today. Ready for some real... Ugh.");
			writeText("He stumbles, he's been off balance since "+data.story.friendName+" suddenly started picking up on his texts a few hours ago.");
			writeText("Dizzy? Here, try this.");
			writeText("Riley passes him a piece of taffy, and Sean eats it without thinking.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "<i>Whoa, everything's feeling... Taller? And when did my skin get so smooth?</i>");
			writeText("He's mostly on autopilot through whatever is fogging up his brain, not even registering "+data.story.friendName+" tapping on the wall.");
			writeText("Sean struggles, he's having a much harder time getting his pants down past his ass than usual, and his hips seem almost... Wider? ");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "Hey uh, can you give me a hand real quick?");
			writeText("His attention is quickly drawn away as you open the door and enter the room.");
			if (data.story.bodytype == 1) {
				writeSpeech("Sean", "scripts/gamefiles/none.png", "Wha- What the fuck? Is this your boyfriend?");
				writeSpeech(data.story.friendName, "riley", "God damnit, hurry your ass up.");
				writeText(""+data.story.friendName+" grabs Seans pants and pulls them down past his feminine curves, you can hear something tear as she does. ");
			}
			else {
				writeSpeech("Sean", "scripts/gamefiles/none.png", "Oh, uh... Hey. You here to join in? Well, I hope you two think you're ready for some of <b>this</b>!");
				writeText("With a hard pull, he manages to force his pants down, you can hear them tearing as he does.");
			}
			writeText("His tiny dick hangs exposed to the three of you, him with a look of shock, "+data.story.friendName+" having a giggle, and you give a look of satisfaction at a job well done.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "Wha... What the fuck is going on? What kind of games are the two of you playing?");
			writeSpeech(data.story.friendName, "riley", "So what's the plan "+data.story.name+"? You wanna take him, or can I?");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="addendum('riley1')">
					You go ahead
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="addendum('riley2')">
					I'll take him
				</p>
			`;
			break;
		}
		case "teacher1": {
			writeText("You walk up to " + data.story.teacherName + "'s desk after everyone else has left. She pretends like she doesn't notice you, trying not to bother you in any way.");
			writeSpeech(data.story.name, "player", "It's fine, I'm not busy right now.");
			writeText("And just like that her switch flips.");
			writeSpeech(data.story.teacherName, "kendra", "Very good then, young man. Now, we need to take a moment to discuss your grades. I'm afraid that-");
			writeSpeech(data.story.name, "player", "No, we don't. You decided that because of that extra credit assignment I did last week, that I'd be getting an 100% on this class even if I don't do any other work.");
			writeText("She pauses in shock for a moment, obviously not remembering this.");
			writeSpeech(data.story.teacherName, "kendra", "I... I may have said that. But maybe we should reconsider. Passing without-");
			writeSpeech(data.story.name, "player", "You aren't going back on your word, are you? That could seriously damage my trust in you as a teacher.");
			writeSpeech(data.story.teacherName, "kendra", "No, no, of course not. <br>Alright, so what was the extra credit work again? I can't find it in my folders.");
			writeSpeech(data.story.name, "player", "It was a health class thing. You wanted proof that sperm improved the softness and youthfulness of skin, so we agreed that we'd test it here in class.");
			writeText("You're obviously pushing your limits with this one, but her reaction clearly makes it worth it. She believes she remembers everything you're saying, but it isn't changing her mind about things now. The idea of that is just as revolting as it would be on any other day.");
			writeSpeech(data.story.teacherName, "kendra", "Now I- I don't- I'm having some second thoughts about that actually. Maybe instead we could-");
			writeSpeech(data.story.name, "player", "No. You said we'd go through with this or I'd tell the principle about how you came up with the idea to turn class into a bukkake hour.");
			writeText("That shuts her up. She obviously feels like she's in deep water now.");
			writeSpeech(data.story.teacherName, "kendra", "Fine. Fine. Okay. Alright so how did we plan to do this? Look in the library for research papers? Did you bring a container?");
			writeSpeech(data.story.name, "player", "No, you said we should try it directly, so that the semen didn't dry up before it went on your skin. You even said you'd give me a titjob! I think I should just go tell the-");
			writeSpeech(data.story.teacherName, "kendra", "No! No, of course I remember now. Just... Just come over here.");
			writeText("She quickly pulls down her dress, a pained expression on her face as she realizes she's exposing herself to a student. You take advantage of the opportunity and slide your length free and put it between her tits.");
			writeSpeech(data.story.name, "player", "Well? Go ahead then.");
			writeBig("images/real/general/titfuck3.gif");
			writeText("She wraps her breasts around your length and starts massaging your dick.");
			writeText("Despite her earlier feelings, she's actually not completely hating this as she'd expected to. With each deep thrust your cock presses against her mouth or nose, filling her brain with your scent.");
			writeSpeech(data.story.name, "player", "Hot damn, that feels great. It feels good for you too, right?");
			writeSpeech(data.story.teacherName, "kendra", "It isn't all that... Nevermind, are you almost finished?");
			writeSpeech(data.story.name, "player", "Come on, with that attitude? I'll never finish with you acting so grouchy.");
			writeText("That's completely a lie, her breasts feel absolutely fantastic. But having her get more into it wouldn't hurt.");
			writeSpeech(data.story.teacherName, "kendra", "I... I see. Alright, what should I do?");
			writeSpeech(data.story.name, "player", "Put some heart into it! Tell me what you want, and show me how much you want it.");
			writeSpeech(data.story.teacherName, "kendra", "Okay. Please cum on my breasts, " + data.story.name + ".");
			writeBig("images/real/general/titfuck5.gif");
			writeSpeech(data.story.teacherName, "kendra", "Was that it?");
			writeSpeech(data.story.name, "player", "Hell no, that was just precum. I know you can do better than that. You really need to reach into your inner slut and-");
			writeSpeech(data.story.teacherName, "kendra", "Please! I want you to paint my tits white! Pump your ball jelly onto my fat tits and my face until I can't see straight!");
			writeBig("images/real/general/titfuck6.gif");
			writeText("One, two, then a dozen more spurts onto her chest. She keeps pumping up and down through every blast until your ejaculation slows and you pull away from her. She's dazed as she collects herself, it seems your words had a real impact.");
			writeText("Once she snaps out of it, she starts rubbing it into her skin. She even takes a clump and starts massaging it into her face.");
			writeSpeech(data.story.teacherName, "kendra", "And the effects of this are what we need to record?");
			writeSpeech(data.story.name, "player", "Yeah. Keep it on your face for the rest of the day, and you'll look younger by the morning.");
			writeSpeech(data.story.teacherName, "kendra", "All day? But my husband will-");
			writeSpeech(data.story.name, "player", "Just tell him it's a new kind of sunscreen. Besides, I've been helping you with all this, and this is how you react?");
			writeSpeech(data.story.teacherName, "kendra", "Of course, I'm sorry. Thank you for your sperm, " + data.story.name + ".");
			writeSpeech(data.story.name, "player", "No problem. I'll talk to you another day for the next part of the project.");
			writeText("And with that you slide your clothes back into place and leave for home.");
			break;
		}
		case "teacher2": {
			writeText("The other students have left already and " + data.story.teacherName + " notices you've stayed. She takes this to mean that you'll be experimenting with her again and drops to her knees before you without words. She even set a journal and pen aside to document the results this time.");
			writeText("While the idea of plastering her with a cum facemask again sounds fun, you'd actually like to keep pushing things farther.");
			writeSpeech(data.story.name, "player", "I was reading this study the other day on health stuff, actually. They were talking about how semen is even healthier when swallowed than absorbed through the skin.");
			writeSpeech(data.story.teacherName, "kendra", "I... That's very interesting " + data.story.name + ". But I don't see how that's relevant to our research project.");
			writeSpeech(data.story.name, "player", "Come on, I know you've wanted to try drinking it since our last experiment.");
			writeSpeech(data.story.teacherName, "kendra", "... How did you know that?");
			writeText("The most amazing part of bluffing in a situation like this is that even when you're wrong, you're totally on the money.");
			writeSpeech(data.story.name, "player", "The look on your face even before I came. Even right now, before we've even started, you can't get your mind off of that scent. What it would taste like. How it would make you feel.");
			writeText("As you slide out of your clothes your erection bobs in the air. With every word her memories are being rewritten, and her mind unfocuses as you move it closer to her face.");
			writeSpeech(data.story.teacherName, "kendra", "We may be taking this too far... I'm your teacher, and...");
			writeSpeech(data.story.name, "player", "There's no need to worry about that. You're just a junkie who needs her next fix. You can smell it already. You need it.");
			writeBig("images/real/general/balls2.gif");
			writeText("Something inside of her snaps. The wave of guilt weighing her down melted away as leaned forward and took a deep breath, inhaling a lungful of ball musk. Her hunger had taken her, and every inhale was enough to send electric shivers down her spine. She takes one of your balls in her mouth and sucks on it.");
			writeSpeech(data.story.teacherName, "kendra", "<i>Ooooh fuck yeah this is good... I could be fired for this... I don't care!</i>");
			writeBig("images/real/general/balls3.gif");
			writeText("You let her continue the worshipful tongue bath for a few moments before pulling away.");
			writeSpeech(data.story.teacherName, "kendra", "Wait, I wasn't do- *HRGL*");
			writeBig("images/real/general/deepthroat3.gif");
			writeSpeech(data.story.name, "player", "Shut up. You're enough of a slut to get off on getting your throat pounded, so sit back and enjoy while I get myself off.");
			writeText("Her strained gagging and groans quickly fill the room as you fill her throat. You punch through the resistance and hammer away, enjoying the feeling of her throat clenching around your dickmeat.");
			writeText("Grabbing her by the throat, you massage your length with your hands as you continue to pound into her. Her eyes have lost their pleading look as they start to roll back.");
			writeSpeech(data.story.name, "player", "Well? How does it feel? A cock-snorting whore like you gets off on this kind of thing right? Tell me how you feel, you don't need words to do that.");
			writeText("In response you hear a splash. A small trickle of her juices is quickly followed by " + data.story.teacherName + " squirting through her panties onto the floor.");
			writeSpeech(data.story.name, "player", "Good girl.");
			writeText("You feel yourself getting close so you come to a stop while hilted inside her. While staring into her eyes you pull out your length with a slow *schloooooorp*. She coughs as she leans back against her desk trying to clear her lungs and desperately trying to breath.");
			writeSpeech(data.story.name, "player", "Focus. I want you awake and ready to taste this.");
			writeText("You give her a slap before she wipes off her face with her shirt. You rub your hand along your dick pushing yourself over the edge above her open, cum-hungry mouth.");
			writeBig("images/real/general/deepthroatFinish3.gif");
			writeText("She keeps her mouth open as you dump your semen into it. When the first drop hits her tongue her body can't hold back a shake and she moans in pleasure.");
			writeText("You pour jet after jet of cum into her mouth. Once you finish her eyes are half lidded as she closes her mouth and swishes it around. She takes her first big swallow and squirts onto the floor again.");
			writeText("Once she's finished swallowing and ruining her panties, she opens her mouth to present it to you.");
			writeSpeech(data.story.name, "player", "Very good, whore. You're gonna be a lot more accommodating next time, right? No more bitching and moaning about taking my jizz?");
			writeSpeech(data.story.teacherName, "kendra", "No master. I'll be good.");
			writeText("Her voice is weak and scratchy, but loyal. That should be enough for today.");
			break;
		}
		case "teacher3": {
			writeSpeech(data.story.teacherName, "kendra", "Alright. D-gngh... Daniel, do you have an answer?");
			writeText("The student needs to speak up to be heard over the sound of flesh slapping flesh.");
			writeSpeech(data.story.teacherName, "kendra", "Nngh... Very... Very good.");
			writeBig("images/real/general/teacher3-1.gif");
			writeSpeech(data.story.teacherName, "kendra", "Gnngh~...");
			writeText("A few of the students seem worried, one even asks if she's okay.");
			writeSpeech(data.story.teacherName, "kendra", "Cumming~!<br>...C-coming to to my senses, I mean. I'm fine.");
			writeText("She's barely able to stand, and needs to support herself on her desk as you rail her from behind.");
			writeText("Having had their perception changed by the app, not one realizes what's actually happening as you're fucking the teacher right in front of them.");
			writeText("From their perspective, "+data.story.teacherName+" is writhing on the spot, her clothes are disheveled, and she's grunting suggestively giving them all mixed feelings. ");
			writeSpeech(data.story.name, "player", "How does it feel? Is being made into a bitch in front of your class making you cum?");
			writeBig("images/real/general/teacher3-3.gif");
			writeText("Her perception has been altered too, she can't hear or see you. Her clenching pussy is enough of an answer though.");
			writeText("One student comes up to the desk, asking if she spilt a water bottle.");
			writeSpeech(data.story.name, "player", "Nope! She's squirting in front of all of you right onto the carpet!");
			writeSpeech(data.story.teacherName, "kendra", "Yes, my apologies Tommy. I think we'll need to dismiss class early today.");
			writeText("This sort of freedom is intoxicating. You can say or do anything you want, and nobody notices!");
			writeText("You slam "+data.story.teacherName+" down onto the desk tits-first and get back to getting off. The class awkwardly shambles out of the room as she starts to lose control of her voice.");
			writeText("You figure you can get a full day of fun out of this bit before you get bored.");
			writeText("...");
			writeBig("images/real/general/teacher3-2.gif");
			writeSpeech(data.story.teacherName, "kendra", "Oh god, I'm cumming again~!");
			writeText("There's a bang at the door before the principle forces his way in. He's confused at the situation, unable to see or hear you, but he's pretty pissed that "+data.story.teacherName+" has been broadcasting her moans over the intercom.");
			writeSpeech(data.story.teacherName, "kendra", "I'm sorry! I don't know what's happening!");
			writeText("Alright, this is more trouble than it's worth. Once you're finished, you pull out of "+data.story.teacherName+" and leave her lying on the desk. You easily walk past the principle, who is screaming bloody murder about firing her.");
			writeText("She's been a bitch to you, but you actually feel bad for a moment. She's facing joblessness, maybe even homelessness. She could use at least one break.");
			writeText("So you turn the app on the principle, crank up his lust and infidelity, and walk out the door.");
			break;
		}
		case "teacher4": {
			writeText("The car comes to a stop, and "+data.story.teacherName+" steps out. With her perception fucked up by the app again, she doesn't notice you as you exit the car with her.");
			writeText("Her house is pretty nice, decent lighting and the choice of color, while boring, isn't too bad.");
			writeText("You grab a quick snack from her fridge and start taking your clothes off. You're invisible to her and her husband, so no real downside to being naked.");
			writeText("Your dick is starting to harden. The cool air combined with the fact that you didn't use her during the car ride means that you haven't emptied your balls in at least half an hour.");
			writeText("...");
			writeBig("images/real/general/teacher4-1.gif");
			writeText("Fucking her all over her house proves to be a nice distraction as you wait for her husband to arrive. You've fucked her on all her couches, on the beds, and stuffed a dildo into her cunt like she was some erotic pincushion.");
			writeText("You hear the front door opening, and a disgruntled voice yell out 'I'm home!'");
			writeText("He walks into the living room smelling strongly of booze. "+data.story.teacherName+" isn't naked or covered with cum or anything, so he doesn't she's been having sex for the last hour, despite her disheveled clothes and unkempt hair.");
			writeSpeech(""+data.story.teacherName+"'s Husband", "scripts/gamefiles/none.png", "Hey, I need another fifty to pay off my tab.");
			writeText(""+data.story.teacherName+" is slowly coming back to her senses. Her previously dreamy and relaxed expression is fading into a bitter, cynical one.");
			writeSpeech(data.story.teacherName, "kendra", "Get a job already and get paid a fifty. Or more. Spend it on booze all you want, but I'm not burning any more of my money on you.");
			writeSpeech(""+data.story.teacherName+"'s Husband", "scripts/gamefiles/none.png", "Bitch! I asked nicely, and this is the thanks I get?");
			writeText("Oookay, this is awkward. You'd wanted to fuck "+data.story.teacherName+" in front of her husband, but they pretty clearly want eachother to go fuck themselves.");
			writeSpeech(data.story.teacherName, "kendra", "Nicely means please, thank you, or showing event the tiniest amount of respect for onc-");
			writeText("He slaps her, hard. Hard enough to knock her over, and then hits her again when she looks back up at him.");
			writeText("Welp, your boner is gone. "+data.story.teacherName+" is choking back sobs and her husband is off to rummage through the fridge, this really has been a mood killer.");
			writeText("You know, if you really think about it, maybe "+data.story.teacherName+" was such a bitch to you is because of her piece of shit husband treating her like trash.");
			writeText("It doesn't justify her behavior, but if that's the case then he's at fault too, so you're totally justified in fucking him up!");
			writeText("...");
			writeBig("images/real/general/teacher4-2.gif");
			writeText("His, or her tiny little dick spurts its load onto the floor. You'll probably give the order to lick it up later.");
			writeText(data.story.teacherName+"'s 'husband' is now a perfect little dick pleaser, no longer even capable of lifting a finger against someone unless it's for their pleasure. You may have gone a little overboard, but hey, what cop is gonna charge you?");
			writeText(data.story.teacherName+" hasn't taken her eyes off the dildo show, even rubbing her clit as she watches the sissy she used to call her husband fuck himself on her dildo.");
			writeText("Yep, this is justice.");
			break;
		}
		case "teacher5": {
			writeText("The men's bathroom is empty at the moment, except for you and the schoolteacher currently sucking your cock. Her underwear and jewelry have been tossed into a small puddle of piss off in the corner.");
			writeBig("images/real/general/teacher5-1.gif");
			writeSpeech(data.story.name, "player", "Ah, you're actually getting a lot better at this. Shame this is the last time I'll be fucking your mouth.");
			writeSpeech(data.story.teacherName, "kendra", "Mmph?!");
			writeText("There's an audible panic in the cock-garbled grunt.");
			writeSpeech(data.story.name, "player", "Yep. From today on, I've decided you're a part time urinal. I'll still be fucking you during morning class, so don't skimp out on cleaning in the morning, but once I finish up you'll be reporting here every day as a piss drain for students.<br>Don't feel to bad. You've always wanted to be a student urinal! You've got the body of a meat toilet, at least.");
			writeText("She's started playing with herself as you speak, fantasies running through her mind of being treated as worse than trash.");
			writeSpeech(data.story.name, "player", "Plus, you can get your sissy husband to work here as a urinal too.");
			writeText("The thought sends her over the edge on the spot. The idea of her little trap gargling piss while being fucked in the ass is just too much for her.");
			writeText("You grab her by the hair and hilt yourself as you begin to cum. She sputters and gags, but you don't let up until you're finished and she would never even think about pushing you away.");
			writeText("You unsheathe yourself from her throat, she swallows your load and opens her mouth to show you.");
			writeSpeech(data.story.name, "player", "Good, now don't move.");
			writeBig("images/real/general/teacher5-2.gif");
			writeSpeech(data.story.name, "player", "Consider this your first donation of the day.");
			writeText("She moans as she twiddles her clit while you piss into her mouth. Once her mouth is full she leans her head back so she can swallow while you coat her tits.");
			writeText("Once you've had your fun you use the app to make sure she'll be staying here until someone tells her the school is closing. She'll have a long day ahead of her, hopefully the janitor will let her out.");
			break;
		}
		case "chef1": {
			writeText("You wave over to " + data.story.chefName + " once you've taken a seat. The cafe is pretty busy today, but she still comes straight over to you");
			writeSpeech(data.story.chefName, "ava", data.story.name + "! Thank goodness. I'm really sorry to ask this, but-");
			writeSpeech(data.story.name, "player", "Not enough hands, and you need help. Got it. You should really hire some help.");
			writeSpeech(data.story.chefName, "ava", "I know. Thank you so much, I really need it this time.");
			writeText("...");
			writeText("The work day was long and exhausting, and by that you mean it was a busy hour and a half. The cafe has cleared out now since its almost closing time. " + data.story.chefName + " leans against a table for a second.");
			writeSpeech(data.story.chefName, "ava", "Thank you again, " + data.story.name + ". Here, take this for your troubles.");
			writeSpecial("You earned $15!");
			writeSpeech(data.story.name, "player", "It really was no problem. Hey, you look exhausted. How about I make you a cup before we close up?");
			writeSpeech(data.story.chefName, "ava", "That really would be lovely, thank you.");
			writeText("You walk into the kitchen. As much as you really would love to make her a nice cup of coffee, you have plans to add something extra.");
			writeText("Getting out a cup you fill it with some coffee and take the package of creamer out of your bag. You dump half of it and add the other to the coffee to mask the taste you'll soon be adding.");
			writeBig("images/real/general/sissy11.gif");
			writeBig("images/real/general/deepthroatFinish1.gif");
			writeText("You start to rub yourself over the cup, your mind filled with visions of " + data.story.chefName + " eagerly drinking down your cum.");
			writeBig("images/real/general/cumshot1.gif");
			writeText("With the app's help, you're able to push yourself over the edge quickly and fire yourself off into the cup.");
			writeSpeech(data.story.chefName, "ava", data.story.name + "? Is everything okay in there?");
			writeSpeech(data.story.name, "player", "Absolutely, be out in a second!");
			writeText("...");
			writeSpeech(data.story.chefName, "ava", "Mmm, this is delicious! This might be the best I've ever had.");
			writeSpeech(data.story.name, "player", "Really? I just added some homemade creamer. It shouldn't taste all that different.");
			writeSpeech(data.story.chefName, "ava", "It tastes great, " + data.story.name + ". And I think I know what the real secret ingredient is.");
			writeSpeech(data.story.name, "player", "Oh really? What is it?");
			writeSpeech(data.story.chefName, "ava", "Love, of course!");
			writeText("She gives you a kiss on the cheek as she says this before she goes back to drinking.");
			writeSpeech(data.story.name, "player", "Yeah, you're right. I added a lot of love to it.");
			break;
		}
		case "chef2": {
			writeText("You walk into the cafe, business as usual. The sign says 'closed' but the lights are still on, its a sign that " + data.story.chefName + " needs some time to relax from serving crowds. She's always made an exception for you and your sister though.");
			writeText("This time, however, things are different. The whole place is cluttered, far from the usual cozy atmosphere of the place. Chairs are misplaced, tables are dirty, it almost looks like the place hasn't been cleaned since yesterday. You see supplies piled on the kitchen counter through a window and move to check if someone's robbed the place.");
			writeText("What you find instead is " +data.story.chefName+ " frantically searching cabinets and shelves, her hair a mess. She has a frantic expression that disappears the moment she sees you.");
			writeSpeech(data.story.chefName, "ava", data.story.name + "! Thank goodness. I don't know why, but I really need some more of that coffee you made the other day. I haven't been able to relax since then.");
			writeText("You're struck with a pang of guilt. She's so trusting of you that she doesn't suspect a thing. You may have set the dependency too high.");
			writeSpeech(data.story.name, "player", "Of course, go take a seat and try to calm down, okay?");
			writeText("...");
			writeText(data.story.chefName + " takes the last sip of coffee. She's mellowed out now that she's gotten her 'fix'.");
			writeSpeech(data.story.chefName, "ava", "Thank you again, I haven't been able to relax all day. I'm sure its all in my head, but this helps.");
			writeSpeech(data.story.name, "player", "Look, " + data.story.chefName + ". I need to tell you something.");
			writeSpeech(data.story.chefName, "ava", "Of course sweetie. You can tell me anything.");
			writeSpeech(data.story.name, "player", "The secret ingredient is semen. I came in the coffee.");
			writeText("A cold silence blows over the both of you.");
			writeSpeech(data.story.chefName, "ava", "That isn't funny, " + data.story.name);
			writeSpeech(data.story.name, "player", "I'm not trying to tell a joke. I couldn't use creamer this time, so that was straight black coffee and cum.");
			writeText("Her face is tinged with worry as she realizes that she recognizes the salty taste in this batch.");
			writeSpeech(data.story.chefName, "ava", "You're being disgusting. I think you should leave now.");
			writeSpeech(data.story.name, "player", "Alright. I'm sorry.");
			writeText("You start to leave, but as you do you notice that " + data.story.chefName + " is staring at her empty cup.");
			writeSpeech(data.story.chefName, "ava", "You... You weren't serious, were you?");
			writeSpeech(data.story.name, "player", "I was, and I can prove it too.");
			writeText("...");
			writeText("Her eyes are lidded as she takes another breath. One whiff was all it took to convince her you were telling the truth.");
			writeSpeech(data.story.chefName, "ava", "You won't... *sniff* <br> You won't tell anyone about this, will you?");
			writeSpeech(data.story.name, "player", "I swear I'll take this to my grave.");
			writeSpeech(data.story.chefName, "ava", "<i>He smells so good... I'm not some whore who just fucks men half her age, but... I really want more of that. If it could make me feel good when mixed with coffee, I wonder what it'll taste like undiluted.");
			writeText("She plants kiss after loving kiss on your smooth ballsack, before she moves up to the head. There's hesitation about sucking your cock, but all that disappears once she tastes that first drop of precum. She becomes ravenous, greedily sucking down your entire length in a moment.");
			writeBig("images/real/general/deepthroat2.gif");
			writeSpeech(data.story.name, "player", "You can already taste it can't you? Just a little more and you'll have some more to drink.");
			writeText("You hammer away at her throat, every time you spurt more precum she moans causing vibrations down your shaft.");
			writeSpeech(data.story.name, "player", "God, you are amazing at this!");
			writeText("It's clear from her eyes though that she has no response. At this point all that's on her mind is pleasuring your cock so that she can get a hit of jizz down her throat.");
			writeBig("images/real/general/deepthroat5.gif");
			writeSpeech(data.story.name, "player", "Holy shit!");
			writeText("Spittle and drool leak from her mouth with every thrust, and soon you're ready to burst. You plunge balls-deep into her and start firing that precious drug into her stomach.");
			writeText("She isn't quiet about it either, her screams of pleasure muffled by the cock in her mouth.");
			writeText("Once you finish you pull out, the meaty *schlorp* sound tells you that she doesn't want to let go. You tug as she suckles on the head, and the tip comes out with a *pop!*");
			writeBig("images/real/general/deepthroatFinish4.gif");
			writeSpeech(data.story.name, "player", "So, you believe me now?");
			writeText("She doesn't respond with words. Instead, she licks her lips and moves back in for round 2.");
			break;
		}
		case "chef3": {
			writeSpeech("Tired College Student", "scripts/gamefiles/none.png", "What the hell? Closed? In the middle of the day?<br>Man, come on, I need my coffee!");
			writeText("The man knocks on the glass door a few time, but no one answers.");
			writeSpeech("Tired College Student", "scripts/gamefiles/none.png", "Fuck... Guess nobody's here.");
			writeText("...");
			writeBig("images/real/general/chef3-1.gif");
			writeText("Meanwhile, inside the store " +data.story.chefName+ " is a little distracted.");
			writeSpeech(data.story.name, "player", "We've run through your entire supply of condoms, isn't it about time to stop?");
			writeSpeech(data.story.chefName, "ava", "No! More~!");
			writeSpeech(data.story.name, "player", "I'm going to cum inside of you unprotected, is that what you want?");
			writeSpeech(data.story.chefName, "ava", "Yes! Pump me full of jizz until it starts squirting out of me!");
			writeSpeech(data.story.name, "player", "Fine, take it then, slut!");
			writeSpeech(data.story.chefName, "ava", "Nggh~! Yes yes yes!");
			writeText("...");
			writeBig("images/real/general/chef3-2.gif");
			writeSpeech(data.story.chefName, "ava", "*Mwah*<br>Come on, just one more time?");
			writeSpeech(data.story.name, "player", "Nnn, no, I can't...");
			writeSpeech(data.story.chefName, "ava", "Please? It tastes so good, I just want one more.");
			writeSpeech(data.story.name, "player", "Alright FINE!");
			writeText("You grab her by the hair and start jackhammering into her. Her eyes roll back into her head as glurking sounds fill the shop.");
			writeText("On the tables are the numerous used condoms, snacks for her to enjoy later. You really do spoil her too much.");
			break;
		}
		case "office1": {
			writeText("After a few minutes of waiting you see her enter the alleyway and quickly follow. Her pace is pretty quick so instead of chasing her down you call out to her.");
			writeSpeech(data.story.name, "player", "Hey! " + data.story.officeName + "! Come over here, I wanna fuck you!");
			writeSpeech(data.story.officeName, "alexis", "Wha-... Excuse me?");
			writeText("She isn't shocked for very long. She quickly turns around and starts marching towards you, fire in her eyes.");
			writeSpeech(data.story.officeName, "alexis", "The fuck did you just say to me?");
			writeSpeech(data.story.name, "player", "I said that I wanted to fuck you. Ass or pussy?");
			writeSpeech(data.story.officeName, "alexis", "You little shithead... Listen, kid. If I wanted a fuck, I'd find a real man, one with a real di-");
			writeText("She grabs at your junk as if trying to intimidate you, but stops mid-word as she feels what you're packing. Her hand rubs along it, trailing down its length.");
			writeSpeech(data.story.officeName, "alexis", "A fucking huge dick... <br>I- I mean, I'd find a real man. Not some pervert who walks up to random women with an erection.");
			writeSpeech(data.story.name, "player", "You aren't a random woman, you're a whore. It's pretty normal to approach fat-titted whores with an erection, isn't it?");
			writeSpeech(data.story.officeName, "alexis", "Shut up!");
			writeText("She pushes you back and you stumble a little. You're about to respond when you realize she's gotten to her knees.");
			writeSpeech(data.story.officeName, "alexis", "You little idiot, you think you can fool me with this? I know you've just got a banana stuffed in... Here.");
			writeSpeech(data.story.officeName, "alexis", "Holy shit, it's huge... It's as big as my forearm... <br>I, I mean whatever! I know a trick when I see one. Put on some prosthetic, trick " +data.story.officeName + " into thinking you have a huge, bitch-breaking cock in your pants.<br>But if you think I'm stupid enough to fall for this, you've got another thing cumming.");
			writeBig("images/real/general/deepthroatStart2.gif");
			writeSpeech(data.story.officeName, "alexis", "<i>Mmmm...<br>Mmmmm... Mwah</i><br>This is a really good fake... It tastes just like a real dick. I need... I need to test it more! That's it. Any fake would hold up to some licking, let's see how it handles this!");
			writeBig("images/real/general/deepthroat7.gif");
			writeSpeech(data.story.officeName, "alexis", "<i>Glurck glurck glurck<br>Hggh-HAAAAGH *COUGH* *COUGH*</i><br>You fucking asshole! You could've choked me! Why didn't you pull out?!");
			writeSpeech(data.story.name, "player", "Do you believe it's real yet?");
			writeSpeech(data.story.officeName, "alexis", "Fine, maybe it's a little real! Oh, I get it. A pervert like you just can't hold back, can he? You didn't pull out because a loser like you is a quick shot too, right? That's why you don't have women worshipping this fucking monster twenty-four seven, right?");
			writeText("She lays back on the dirty ground and spreads her legs, revealing she didn't bother with underwear today.");
			writeSpeech(data.story.officeName, "alexis", "This is some grade-A pussy right here, a hundred times better than you're wimpy bitch hand. A single thrust in here, and a loser like you will-");
			writeBig("images/real/general/vaginal2.gif");
			writeSpeech(data.story.officeName, "alexis", "NNNNNffff oh god, you're so big!");
			writeSpeech(data.story.name, "player", "God damn, you talk a lot! How about I shut you up?");
			writeSpeech(data.story.officeName, "alexis", "Ah, hah, hah... God this thing is amazing... How'd such an amazing dick get stuck on a twerp like yo-oooOOOUU~~~!");
			writeBig("images/real/general/vaginal1.gif");
			writeSpeech(data.story.name, "player", "Is this what you wanted? Huh?");
			writeText("Her moans fill the alleyway. She looks up and tries to respond, but swoons the moment she sees the bump that appears every time you thrust into her.");
			writeSpeech(data.story.name, "player", "I'm gonna come inside of you, are you ready?");
			writeSpeech(data.story.officeName, "alexis", "Yes! Come inside me!");
			writeSpeech(data.story.name, "player", "Scream for it whore!");
			writeSpeech(data.story.officeName, "alexis", "AAAAH! God, yes! More! Fuck a baby into me!");
			writeBig("images/real/general/creampie2.gif");
			writeText("You make sure to pause between thrusts so that she can <b>feel</b> your cum filling her hole. Once you're finished, you pull out and let her leak onto the ground. Her eyes are lidded, and she doesn't seem as talkative as she did before.");
			writeSpeech(data.story.name, "player", "I'll see you around here again, be ready.");
			break;
		}
		case "office2": {
			writeText("You walk through the usual alleyway and see a familiar face trying to look like she wasn't waiting here for the last few minutes.");
			writeSpeech(data.story.officeName, "alexis", "There you are! I'm going to make you pay for what you did to me!");
			writeText("She tries to get all up in your face to intimidate you.");
			writeSpeech(data.story.name, "player", "Oh? And how are you going to do that?");
			writeText("She gives you a sly grin and backs off, before she starts stripping off her clothes.");
			writeSpeech(data.story.officeName, "alexis", "I've been training myself for weeks, preparing myself for this. You aren't going to make a bitch out of me like last time.");
			writeText("...");
			writeSpeech(data.story.officeName, "alexis", "Fuuuuuck yes~!");
			writeSpeech(data.story.name, "player", "Isn't that the third time? What kind of hair trigger do you have?");
			writeSpeech(data.story.officeName, "alexis", "Fuck, ngh. I don't get it. I practiced for weeks with my biggest toys, so why?");
			writeSpeech(data.story.name, "player", "Ah, I get it now. You'd think as a modern business woman, you'd realize.");
			writeBig("images/real/general/office3-3.gif");
			writeSpeech(data.story.officeName, "alexis", "NNNGH! YES!");
			writeSpeech(data.story.name, "player", "Practical experience is the most important factor these days.");
			writeText("You give her a minute to soak in the afterglow before you start thrusting again.");
			writeText("...");
			writeText("By the time you're finished, she's a wreck. She's laying on the dirty ground, and after a few seconds of searching you grab a bit of cord from a small pile and tie her hand to a nearby bar.");
			writeSpeech(data.story.officeName, "alexis", "Wh...Huh? Whazat?");
			writeSpeech(data.story.name, "player", "You heard me. If you want to get me back, you need experience.");
			writeSpeech(data.story.officeName, "alexis", "F-Fuck you! I'm gonna make it through this easy! And then I'm gonna get you and get my revenge!");
			writeText("You're already walking out of the alley as she yells to you, attracting a lot of attention to herself.");
			writeSpeech(data.story.officeName, "alexis", "I'll turn the tables! You'll beg to be my bitch!");
			break;
		}
		case "office3": {
			writeText("You walk through the alleyway, and "+data.story.officeName+" is right where you left her. You need to peer around to get a good look at her through the 'guests' she's entertaining.");
			writeBig("images/real/general/office3-1.gif");
			writeSpeech(data.story.officeName, "alexis", "Nggh! Yes! Fuck me more until I break!");
			writeText("You decide to bow out until she's finished before you free her. It's a good thing she's immune to disease now, thanks to the app.");
			writeText("...");
			writeText("Once the crowd of rowdy men walk out of the alley, you walk back in.");
			writeBig("images/real/general/office3-2.gif");
			writeSpeech(data.story.officeName, "alexis", "Nggggh...");
			writeText("Wordlessly, you free her from her bindings as she has another orgasm from the feeling of how gaped she is. Two dicks at once will do that to a whore.");
			writeText("She's babbling, maybe in a dream right now talking about how she'll be the one to run this town.");
			writeText("She's clearly lost her mind at this point. What she does from now on is her prerogative.");
			break;
		}
		case "office4": {
			writeText("You're walking through the alleyway when something neat catches your eye, and you stop to check it out.");
			writeSpeech(data.story.name, "player", "Whoa, a gloryhole!");
			writeBig("images/real/general/office2-1.gif");
			writeText("There's several holes of varying sizes lined up side by side, with a familiar set of lips being visible through one.");
			writeText("This is the first time you've ever seen a real one, you almost want to use it.");
			writeText("That said, you can get head whenever you want. The idea of sticking your dick in a public cocksucker's mouth also doesn't seem very sanitary. You hear someone coming down the alleyway behind you, so you turn a corner and head to the other side of the hole for a better view.");
			writeText("...");
			writeBig("images/real/general/office4-2.gif");
			writeSpeech(data.story.officeName, "alexis", "Glrk, glrk, glrk");
			writeText(data.story.officeName+" is taking these dicks like a champ, you knew it'd be a lot hotter watch from this side. Even while she's sucking on one, she's aligning another with her ass to pleasure both at once.");
			writeText("This must've taken actual construction work to make. Maybe she's been funneling her paycheck into installing a gloryhole fixture?");
			writeText("She doesn't even check to see if anyone's paying her before she starts taking stranger dick in her ass. Speaking of which...");
			writeSpeech(data.story.name, "player", "Hey, you don't mind if you take a some cash from your donation box, yeah?");
			writeText("She lifts a middle finger at you, but is too occupied taking dick to stop you.");
			writeSpeech(data.story.name, "player", "Hey, just keep fucking if it's fine.");
			writeText("You can actually see the look of indecisiveness in her eyes as she weighs going without a cock in her mouth for five seconds versus losing revenue. But once the dick she's sucking starts cumming, she's made her choice. She deepthroats the entire length while still making sure to please the cock in her ass with a nice assfuck rhythm.");
			writeText("You grab some bills and, after taking a few moments more to enjoy the show, decide to leave.");
			writeSpecial("You 'earned' $20!");
			if (data.story.currentScene != "gallery") {
				data.story.money +=20;
			}
			break;
		}
		case "misc1": {
			writeSpeech(data.story.name, "player", "Alright, so here's the money. What exactly is this special service?");
			writeSpeech("Adriana", "adriana", "Pants off, sit down. Now.");
			writeText("You inwardly shrug and follow her directions, removing your pants and taking a seat on a nearby couch.");
			writeSpeech("Adriana", "adriana", "Here. Read.");
			writeText("She passes you a small passport-sized notebook, inside is a scrawling mess of notes that appear to be on the human alteration app. It covers a variety of complicated subjects with dozens of examples. With this, your understanding of how to use the app should improve!");
			writeText("This is amazing, but why did you want me to-");
			writeBig("images/real/general/balls2.gif");
			writeText("Adriana's tongue runs along one of your balls before she takes it into her mouth, clearly savoring the flavor of it before she lets it out of her mouth with a *mwah!*");
			writeSpeech("Adriana", "adriana", "You have a fantastic set of balls. The app really helped you out, didn't it?");
			writeText("Wherever she touches you is left tingling like with electricity, and it is spreading throughout your cock.");
			writeSpeech("Adriana", "adriana", "But you aren't the only one who got some benefits from them.");
			writeBig("images/real/general/handjob7.gif");
			writeText("You don't think. You aren't capable of rational thought anymore as she starts slapping your cock against her hand. The sensations you're feeling are far from normal as you can feel your whole body quivering from just her touch.");
			writeSpeech("Adriana", "adriana", "You can mess with people's heads, even control them. But in here, I'm in control. Wanna see what else I can do?");
			writeText("You answer as best you can with a choked moan.");
			writeSpeech("Adriana", "adriana", "Good answer. Cum.");
			writeBig("images/real/general/handjob6.gif");
			writeText("She watches intently as she milks your cock. The sensations have reached their peak as your entire body feels like it's being electrocuted.");
			writeText("Once you're finished, she stands back up and licks the mess of her hands.");
			writeSpeech("Adriana", "adriana", "You don't taste too bad either. Maybe next time I'll let you be the one in control.");
			writeText("And just like that she's back on her chair as if nothing had even happen,");
			writeSpeech("Adriana", "adriana", "You gonna buy something else? This isn't a hotel.");
			break;
		}
		case "misc2": { 
			writeSpeech(data.story.name, "player", "Alright, time for some revenge.");
			writeText("You slam the bills down on to the counter, and Adriana looks up from filing her nails. A smile quickly forms on her face.");
			writeText("...");
			writeSpeech(data.story.name, "player", "O-ooouh!");
			writeBig("images/real/adriana/service1.gif");
			writeText("You certainly did your best, but after the third time you came your resolve began to waver.");
			writeText("Once you couldn't bring yourself to use her face anymore, she decided to start using you.");
			writeText("You feel a familiar, almost painful sensation as you spray another load onto your chest.");
			writeBig("images/real/general/adriana2-2.gif");
			writeSpeech("Adriana", "adriana", "Mmm. So, you give up yet?");
			writeText("It's time to admit your defeat. Some obstacles just aren't mean to be overcome.");
			break;
		}
		case "misc3": { 
			writeText("Checking the back of the clothing ticket, you find a QR code and a set of instructions. The basic gist of it is 'use this with the app and you'll get a much better shopping experience.' It's strange to say the least.");
			writeSpeech(data.story.name, "player", "Hey, Danny? You know of anybody named Adriana?");
			writeSpeech("Danny", "danny", "Adriana? Oh, that brunette? I see her around the shops when I'm opening, can't find out where she works though. She likes to play hard to get, ya know? Like she doesn't want some of Danny's D, if you know what I'm saying.");
			writeSpeech(data.story.name, "player", "Ah, I think I understand now.");
			writeText("Before he has a chance to say anything, you scan the QR code and Danny nearly topples over where he stands.");
			writeSpeech("Danny", "danny", "Whoooa, bro! Something's, ugh, something's happening to me! Not pain, but like, something! Call like, the fire brigade or someth-UUUeah-!");
			if (data.story.currentScene != "gallery") {
				writeText("You've never actually seen the transformations happen directly. The transformation might get a little messy, so if you don't want to see it, you should probably <span class='choiceText' onclick='sceneTransition(`streets`)'>bail</span>.");
			}
			else {
				writeText("You've never actually seen the transformations happen directly. The transformation might get a little messy, so if you don't want to see it, you should probably <span class='choiceText' onclick='sceneTransition(`gallery`)'>bail</span>.");
			}
			writeSpeech("Danny", "danny", "Bro! The hell are you standing there for? I-HRRRGH!");
			writeText("He curls up into a ball on the spot. It's hard to make sense of his expression as he flops about on his seat.");
			writeText("Before your eyes, his body begins to change. His muscles become softer and his clothes twist atop them. His hair grows out, his entire facial structure changes, and all of this happens in the span of seconds.");
			writeText("After he... Or she, now, is finished with her transformation she slumps on the couch while breathing raggedly.");
			writeSpeech("Danny", "gina", "Whoa... God, I just had the weirdest-aaaaAAH!");
			writeText("She grasps at her crotch like it's burning, trying to rub out some strange sensation until she pulls down her underwear bottoms and exposes her angry-looking shaft. You can see her balls pulsating quickly, probably mirroring her heartbeat.");
			writeText("Before she can even touch it, the head of her cock explodes a thick mass of jizz out, way larger than any normal human could match.");
			writeText("And it doesn't stop there. It isn't so much firing loads as it is leaking a solid stream out of her length, and as she bucks her hips and groans, you can see her dick getting smaller and smaller before your eyes.");
			writeText("She'd started out pretty impressive, probably about eight inches, but now she's at less than half that. Her cum is getting clearer and thinner as this goes on.");
			writeSpeech("Danny", "gina", "Uuuugh! More! More! Guuuuuhd!");
			writeText("Her body's strength starts to give out as the stream starts to die out. She looks half conscious at best draped over the arm of her seat as her dick keeps leaking onto the floor.");
			writeText("It looks like her transformation is complete as her dicklette hangs barely two-inches down, her balls the size of small grapes. She'll have no problem passing for a woman now.");
			writeText("She lets out a little giggle as the last drop of cum sputters out of her dick, and seems content to soak in the afterglow.");
			writeText("...");
			writeText("After some time she came back to her senses and stood on shaky legs. She reintroduces herself as Gina, for some reason.");
			writeSpeech("Gina", "gina", "Sorry mister, I got a bit distracted there. You know, I dunno why, but you seem like a trustworthy guy. Don't tell anybody about this, but we actually have a special catalog for special customers.");
			writeText("She leans into you and whispers into your ear.");
			writeSpeech("Gina", "gina", "And there are special benefits for good customers, if you know what I mean.");
			break;
		}
		case "misc4": { 
			writeText("She perks up as you hand her the bills and leafs through them for a moment.");
			writeSpeech(data.story.name, "player", "So, how are we going to-");
			writeText("Before you can finish the second, she's stripping down.");
			writeSpeech(data.story.name, "player", "Ah, just getting right to it.");
			writeSpeech("Gina", "gina", "Yes sir! Gotta give Mr. Customer his reward. Come on, get your pants off!");
			writeText("She's already on her knees, very enthusiastic about making sure you're satisfied.");
			if (data.story.bodytype == 2) {
				writeSpeech("Gina", "gina", "Oh wow! You're just like me!");
				writeText("She stands back up and presses her small length against yours.");
				writeSpeech("Gina", "gina", "Ah! This is really nice, but we'll need something more. Maybe I should call miss Adr-");
				writeText("You rub against her to shut her up, and before her eyes your length begins to grow to its erect size.");
				writeSpeech("Gina", "gina", "O-oh golly...");
				writeText("The feeling of your much larger shaft against hers has her fully erect and leaking. She licks her lips and you can see the hunger in her eyes as she looks up into yours.");
				writeText("She gets ready to kneel back down to get a taste, but you grab her by the hair and push her down onto a nearby table covered in cloth.");
				writeSpeech(data.story.name, "player", "You're gonna regret underestimating me.");
				writeSpeech("Gina", "gina", "Oooh, I know I'm not supposed to go this far, but...");
				writeBig("images/real/general/gina2-1.gif");
				writeText("She bites her lips, before lifting her ass to present it to you.");
				writeText("You take a moment to appreciate her heart-shaped ass as she wiggles it invitingly, causing her tiny shaft to jiggle freely.");
				writeSpeech("Gina", "gina", "You'll play nice with me, right mister? Make it worth my while to bend the rules?");
				writeText("Her skin is unbelievably smooth and soft, especially her asshole. You might even be able to do this without lube. You get up behind her and decide to put this to the test.");
				writeBig("images/real/general/gina2-2.gif");
				writeSpeech("Gina", "gina", "A-aaah!");
				writeText("Her ass feels absolutely perfect around you as you thrust into her.");
				writeText("A few inches in, you can feel yourself bump into something soft.");
				writeSpeech("Gina", "gina", "NNFFF!");
				writeText("Every time you feel your cockhead touch it, she shivers and jerks in your grasp.");
				writeText("Realizing this must be her prostate, you decide to break in her welcoming bitch-button. As you push past it, smooshing it with your dick, her moans go high enough that her voice gives out.");
				writeText("You pull back as she quivers, and thrust back in hard. Her dangling dicklette squirts onto the sheet as she enjoys you slamming onto her 'ejaculate' button.");
				writeSpeech(data.story.name, "player", "You and I are gonna have a lot of fun.");
				writeText("...");
				writeBig("images/real/general/sissy9.gif");
				writeText("The two of you fuck as the hours go by, even through several phonecalls she had to take.");
				writeText("After your second load, she got a call from someone you assume is important. She runs off to go fufil an order, her little 'clitty' still leaking as she makes her way to the other side of the store.");
			}
			else {
				writeSpeech("Gina", "gina", "Oh my gosh...");
				writeText("There's a look of 'Holy shit, look at this dick' in her eyes as you wave it in front of her face, before giving her a playful cockslap.");
				writeSpeech("Gina", "gina", "How big is this thing?");
				writeText("She lifts up her forearm to compare it to your shaft, giving it a few worshipful licks too for good measure.");
				writeSpeech(data.story.name, "player", "You're a size queen, huh?");
				writeBig("images/real/general/gina2-3.gif");
				writeSpeech("Gina", "gina", "Mwah! Very much, sir! Miss Adriana got in touch with me after that weird thing from before. She promised to help stretch me out!");
				writeSpeech(data.story.name, "player", "I think I'd like to see that.");
				writeSpeech("Gina", "gina", "Of course! Loyal cust-Hrrrm!");
				writeBig("images/real/general/gina2-4.gif");
				writeText("There's no gagging or hesitation as you push into her mouth. Her tongue goes to work as she's forced to swallow more of your massive shaft with every thrust.");
				writeText("With an expert level of skill, she manages to take in quick breaths between each thrust, but it isn't until she starts humming that you really feel yourself being pushed over the edge.");
				writeText("You grip her head with both hands and start slamming into her hard enough to mash her nose against your pelvis. She looks up and locks eyes with you as you start pumping jizz down her throat.");
				writeText("Teasing you with her tongue, she slides back pulling her length out from her throat.");
				writeBig("images/real/general/gina2-5.gif");
				writeText("There isn't even so much as a cough as she unsheathes herself. She swallows you cum like it's a glass of juice and starts cleaning you off with her tongue.");
				writeSpeech("Gina", "gina", "She doesn't answer, lowering a dollop of jizz on her fingers into her mouth while straightening out her clothes with her other hand.");
				writeText("She shoots you a wink, and once she's cleaned off her hand something catches her eye.");
				writeSpeech("Gina", "gina", "Oooh, this one would look great on you!");
				writeText("And just like that, she's switched gears.");
			}
			break;
		}
		case "misc5": { //To-do for next update
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
		//Sub route
		case "misc1S": {
			writeText("The soothing water of the bath is exactly what you needed, and after only a few minutes soaking your fatigue has floated away. As you soak you can feel the thought of the terms of service drift farther and father from the front of your mind.");
			writeText("Eventually your eyelids begin to grow heavy. Instead of fighting it, you let yourself fall into a short nap.");
			writeText("...");
			writeText("You aren't sure how long you were asleep. The water is still warm, but you manage to pull yourself out of the tub. You pull the plug and grab a towel to start drying yourself off, but stop suddenly as the towel rubs against your sudden much more sensitive skin.");
			writeText("Dark, wet hair obscures your vision slightly until you brush it aside.");
			writeSpeech(data.story.name, "player", "What the hell?");
			writeText("A good look in the bathroom mirror reveals you have a completely different figure than you had before the bath. You're gorgeous, but undeniably effeminate in a strange way. You look like a highschool girl out of an anime.");
			writeText("You dry off your hair and find that the clothes you left have changed too. Sitting on the dresser is a black dress and a pair of white panties. You slide the clothes on for now and walk out of the bathroom.");
			writeText("You walk back into your room, since you'd left your phone to charge. Inside on your bed you see a girl sitting up rapidly tapping buttons on her phone. Despite having never seen her before, you now instinctively that this is your sister.");
			writeSpeech(data.story.sisterName, "jean", "Hey. You were in there awhile. Asleep? I guess that's kinda my fault, I might have messed with you as my guinea pig to get a handle on this app.");
			writeSpeech(data.story.name, "player", "What did you do?");
			writeSpeech(data.story.sisterName, "jean", "I wanted to see what had you so glued to your phone today. I knew it wasn't porn, and I was right to be suspicious.");
			writeSpeech(data.story.name, "player", "You found the app?");
			writeSpeech(data.story.sisterName, "jean", "Yep. Sorry, but an app that can rewrite reality? No way I'm gonna pass that up. I'll help you out too, since I did steal it after all.");
			writeSpeech(data.story.name, "player", "But how!?");
			writeSpeech(data.story.sisterName, "jean", "Master's degree in computer science, bro. Plus, this thing uses a Unix command line. Not something I think you have a lot of experience with.");
			writeSpeech(data.story.name, "player", "Stop! Give it back! I don't want to-");
			writeSpeech(data.story.sisterName, "jean", "Boop.");
			writeText("You feel something strange, almost like a pleasant headache that's gone before you can focus on it.");
			writeSpeech(data.story.name, "player", "Whoa, that was weird. Anyways, I'm fine with the new body, but I want the app back!");
			writeSpeech(data.story.sisterName, "jean", "Wow, it works quick. Anyways, even if I wanted to, I can't. The TOS says that if I try to give it back to a previous user, it causes some shit to go down.");
			writeSpeech(data.story.name, "player", "But... So then...");
			writeSpeech(data.story.sisterName, "jean", "So then it's mine now. Period. Don't worry! I'm not gonna be a bitch about it. You are gonna have just as much fun as I will in this new world.");
			writeText("You go quiet as you try to think a way out of this situation, but nothing comes to you. The reality starts to hit you as your opportunity to use the app has been lost before you ever got to use it.");
			writeSpeech(data.story.sisterName, "jean", "Alright, there we go. There's no built in way to genderswap yourself, so I had to do it manually. Neat how the app uses linux though.");
			writeSpeech(data.story.name, "player", "What are you planning to do?");
			writeSpeech(data.story.sisterName, "jean", "You might have had a few fetishes, bro, but don't get me wrong. I've got plenty of things I'd like to see in the world, and now I can make aaaall that come true. I already changed you and me, and soon I'll remodel everyone in the city. But for now, just watch.");
			writeText("She slides her legs apart and pulls her thong to the side, exposing herself without a second thought. With her free hand she starts rubbing her abdomen.");
			writeSpeech(data.story.sisterName, "jean", "Oooh god, I can feel it happening!");
			writeText("Before your eys you can see her clitoris perk up and start to grow, changing shape as it does. Her pussy lips part and start to open slowly, clenching back closed as your sister tightens her core.");
			writeSpeech(data.story.sisterName, "jean", "Oh fuck, it already feels really good! This is gonna be way better than before!");
			writeText("Her clit has reached four inches and has thickened dramatically, the head looking like the tip of a penis. After one final clench she lets out a deep groan as her vagina turns inside out, pushing out a pair of balls.");
			writeSpeech(data.story.sisterName, "jean", "Hah... Hah... Good it tingles so good. This is how you feel? How doo you not just want to spend all day inside jacking off?");
			writeSpeech(data.story.name, "player", "Did you... Did you just give yourself a dick?");
			writeSpeech(data.story.sisterName, "jean", "Hell yeah I did. After I finagled with it a little the app opened up. I gave myself bigger bobs too, see?");
			writeText("She stands up, letting out a little squeak as she gently pokes at her new genetalia.");
			writeDrawn("images/drawn/aya/blondeMaid3.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/blondeMaid4.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Ah, holy shit, they're so sensitive! And this bunch of skin on my dick, that's the foreskin right?");
			writeSpeech(data.story.name, "player", "Yeah.");
			writeSpeech(data.story.sisterName, "jean", "Fucking awesome! This thing is so cool. You were gonna hog it all to yourself, weren't you? Keep me away from... From this... Fuck!");
			writeDrawn("images/drawn/aya/blondeMaid5.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Cumming!");
			writeDrawn("images/drawn/aya/blondeMaid6.jpg", "Art by Aya");
			writeText("Her legs shake as her brand-new dick starts pumping out cum rope by rope onto the floor!");
			writeSpeech(data.story.sisterName, "jean", "Ngh! Yesyesyes!");
			writeText("Her first time doesn't last long, but her cock doesn't back down. It softens a bit but is still standing at attention as she turns to you.");
			writeSpeech(data.story.name, "player", "So what now?");
			writeSpeech(data.story.sisterName, "jean", "Now I improve everyone we've ever met. I promise, you and I are going to have a lot of fun with this new world. Try to get some sleep, okay? Tomorrow is a big day.");
			writeText("She walks out of the room still fondling her new dick, leaving her clothes and her mess behind. Thoughts and emotions run through your head, but it isn't clear how many of them are truly yours. You clean up the mess, the smell of her jizz is... overpowering, to say the least, but you throw out some paper towels, toss her clothes off your bed, and lay your head down on the pillow.");
			break;
		}
		case "mom1S": {
			writeText("You awaken suddenly to the sound of a strained yell. You jump out of bed with a lot more energy you thought you'd have with this new body.");
			writeText("You're out of the room in a flash, not bothering to change out of the underwear you'd slept in.");
			writeText("You hear another sound, this time a choked groan, coming from your mother's room. The door hangs half open.");
			writeSpeech(data.story.sisterName, "jean", "Oooh! Fuck!");
			writeDrawn("images/drawn/aya/mom1-1.jpg", "Art by Aya");
			writeText("Your sister sits atop your mother's bed, cumming a fresh load of jizz into a set of panties that were obviously built for a woman. You're pretty sure they aren't hers.");
			writeText("Your mother lays on her back on the floor, her face caked with a slowly-drying layer of semen. One of her hands is at her face, trying to push more sperm into her mouth. The other is between her legs, hungrily thrusting her fingers into her snatch.");
			writeSpeech(data.story.sisterName, "jean", "Oh hey bro, good morning!");
			writeSpeech(data.story.name, "player", "Wh... What is going on in here?");
			writeSpeech(data.story.sisterName, "jean", "Well, I spent all night transforming people and myself. I just needed a break, so I've been having fun with mom all morning since I don't need to work anymore.");
			writeText("As she speaks, she slides the soiled underwear off her legs, and tosses it over to your mother. " + data.story.motherName + " catches it and pulls it to her mouth, never stopping her self-pleasure.");
			writeDrawn("images/drawn/aya/mom1-2.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Sorry for the noise, I think I tweaked mom too far. Still need to learn my limits, I guess.");
			writeText("She stands up off the bed and begins to make her way past you to the door.");
			writeSpeech(data.story.sisterName, "jean", "By the way, I didn't have a chance to say it last night, but you are looking good little bro.");
			writeText("She walks out, leaving you in a stunned silence.");
			writeText("Your mother seems to come to her senses, and pulls the slimy jizzrag away from her face. Before you think she's snapped out of it, she takes the underwear, still covered in jizz, and slides it on. There's a squelching sound as she makes sure the sperm-covered surgace is being tightly pressed against her pussy.");
			writeText("She looks to you, a hungry expression in her eyes, until she sees the small bulge in your nightwear. Her lusty look fades, and you take the opportunity to run from the room to get changed.");
			writeText("...");
			writeSpeech(data.story.sisterName, "jean", "Make sure you have fun at school! I'm sure you'll have a great day with all your friends, little bro.");
			break;
		}
		case "mom2S": {
			writeText("You notice a familiar scent as you walk into the living room.");
			writeText("Inside, you see your mother on her knees facing you. Her legs are spread in such a way that it's very clear she isn't wearing any underwear. Despite that she can probably see you, her attention is very much on your sister.");
			writeSpeech(data.story.motherName, "lisa", "Please, mistress! I've been a good girl, right?");
			writeSpeech(data.story.sisterName, "jean", "Eeeh. But you don't have a choice. I 'm not really-<br>Oh! Hey bro, back already?");
			writeText("Your sister turns to face you, ignoring the whines of your mother as she does.");
			writeSpeech(data.story.sisterName, "jean", "Hey, I was gonna reward mom, if you want to watch.");
			writeSpeech(data.story.name, "player", "I'd... I'd rather not. I was just headed for bed early today.");
			writeText("Your sister pouts.");
			writeSpeech(data.story.sisterName, "jean", "Aww cmon. It won't be as fun without you watching. I can't get off if I'm bored, bro. I mean, I can, but it isn't as good. I'll cum like a few drops at most!");
			writeText("At this, your mother finally seems to notice your presence.");
			writeSpeech(data.story.motherName, "lisa", "Yes, please! " + data.story.name + ", please stay!");
			writeText("Her desparation is clear, this is obviously emotional blackmail. You don't even really see why " + data.story.sisterName + " is doing this. She could just make you super cock hungry and you'd want to watch.");
			writeText("But your mother looks like she's on the verge of tears...");
			writeSpeech(data.story.name, "player", "I won't need to do anything?");
			writeSpeech(data.story.sisterName, "jean", "Not a thing. I'll do all the work, and mom will clean up the mess. You just stay and watch.");
			writeText("...");
			writeDrawn("images/drawn/aya/mom2-1.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Isn't it awesome?");
			writeSpeech(data.story.motherName, "lisa", "Yes mistress, it's perfect.");
			writeSpeech(data.story.sisterName, "jean", "Shush, I wasn't asking you. What do you think, "+data.story.name+"?");
			writeText("You don't answer, at least not with words. You're trying not to make eye contact with her, but you can't bring yourself to look away from her.");
			writeDrawn("images/drawn/aya/mom2-2.jpg", "Art by Aya");
			writeText(data.story.sisterName + " lets out a little squeak as she grasps her massive dick near the head. Even through the condom, it's still extremely sensitive.");
			writeSpeech(data.story.sisterName, "jean", "Ah, you're fun to tease, but I can't wait any longer.");
			writeText("Your mother has lost interest in you, and is completely focused on your sister's member. One hand is underneath her maid-themed miniskirt, and she's sucking on the index finger of the other, trying to pretend it's your sister's dick.");
			writeSpeech(data.story.sisterName, "jean", "Now, I wanna get to the fun part quickly, so...");
			writeText("With her free hand, your sister brings up the app again and taps a few times on the screen.");
			writeSpeech(data.story.sisterName, "jean", "Ah! God, this thing is amazing! I'm already...~!");
			writeDrawn("images/drawn/aya/mom2-3.jpg", "Art by Aya");
			writeText("You can actually see the distortion of her urethra as bulges of cum slide up the length of her shaft.");
			writeSpeech(data.story.sisterName, "jean", "Gonna cum! Gonna cum!");
			writeDrawn("images/drawn/aya/mom2-4.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Cumming!");
			writeText("You mother cums along with her, squirting onto the floor, all attention on the divine symbol of your sister's massive dick. The cum quickly begins to fill the condom, causing it to balloon outwards.");
			writeDrawn("images/drawn/aya/mom2-5.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Ahhh... That was great. Did you want the condom as a snack, bro?");
			writeText("Your mother pitifully whines, not willful enough to defy your sister, but its clear she's on the verge of tears.");
			writeSpeech(data.story.sisterName, "jean", "Just kidding! God piggy, learn some self-respect. Sorry bro, I already promised this load to her.");
			writeDrawn("images/drawn/aya/mom2-6.jpg", "Art by Aya");
			writeText("She pulls the sides of the condom up until it slides off, and holds the cum balloon between two pinched fingers.");
			writeSpeech(data.story.sisterName, "jean", "Here's your reward, piggy.");
			writeText("She drops the filled condom into your mother's waiting hands, and you take the opportunity to leave, feeling sticky in your clothes. As you leave, you can hear the sounds of loud, shameless slurping behind you.");
			writeSpeech(data.story.sisterName, "jean", "Bro? Where are you going?");
			writeText("...");
			writeText("There are a few knocks on your door afterwards, but you aren't insterested in talking right now.");
			break;
		}
		case "mom3S": {
			writeSpeech(data.story.motherName, "lisa", ""+data.story.name+"? I'm upstairs!");
			writeText("Well, she certainly sounds a lot more chipper than she did yesterday. She almost actually sounds excited you're home.");
			writeSpeech(data.story.name, "player", "Hey mom, what's u-");
			writeDrawn("images/drawn/aya/mom3-1.jpg", "Art by Aya");
			writeSpeech(data.story.motherName, "lisa", "Welcome home! How was school?");
			writeText("She's sitting in just a pair of jeans and a bra, letting a massive cock and dangling pair of balls hang out.");
			writeSpeech(data.story.name, "player", "M-mom?");
			writeSpeech(data.story.motherName, "lisa", "Hmm? Is something wrong? Did something happen at sch-oooOol!?");
			writeDrawn("images/drawn/aya/mom3-2.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/mom3-3.jpg", "Art by Aya");
			writeSpeech(data.story.motherName, "lisa", "Mmm... Sorry honey, I'm trying to keep it in check. Your sister doesn't want me to waste too much, but I'm not sure how much longer I can keep it in.");
			writeSpeech(data.story.name, "player", "I, I don't...");
			writeSpeech(data.story.motherName, "lisa", "Oh sweetie, I understand. You want some too? <br>Nngh... Well come over here, I can't hold back much longer.");
			writeDrawn("images/drawn/aya/mom3-5.jpg", "Art by Aya");
			writeText("You can hear a gurgling from her cock as her balls do their best to push out the plug in her cock.");
			writeText("Bead after bead of the plug are slowly pushed out as your mother groans, some cum coming out around the plug.");
			writeSpeech(data.story.motherName, "lisa", "It's happening, it's here!");
			writeDrawn("images/drawn/aya/mom3-6.jpg", "Art by Aya");
			writeSpeech(data.story.motherName, "lisa", "Cumming~!");
			writeText("The plug pops out and drops to the carpet as your mother sprays the room with her cum.");
			writeSpeech(data.story.motherName, "lisa", "Nnnngh! I can feel my balls throbbing!");
			writeText("She just keeps cumming. You feel like reason has started to fade from your mind.");
			writeText("...");
			writeDrawn("images/drawn/aya/mom3-7.jpg", "Art by Aya");
			writeSpeech(data.story.motherName, "lisa", "Oh my, it's that late already? Goodness, I'll need to hurry for dinner! Will you want anything?");
			writeText("You shake your head no, your cheeks still puffed out with your mother's dickmilk.");
			writeText("You swallow the slimy, sticky mess one gulp after the other. You'll be skipping dinner, but you're going to bed with a full stomach tonight.");
			break;
		}
		case "sister1S": { 
			writeText("It's close to the evening, but still an hour before dinner. Your sister has been a little groggy today, which means she'll be taking a nap to rest her screen-weary eyes as per her usual routine.");
			writeText("After a few knocks you push her door open.");
			writeSpeech(data.story.name, "player", "Hey can we talk for- Are you a brunette now?");
			writeText("With a button tap her hair changes back and forth in color before her eyes.");
			writeSpeech(data.story.sisterName, "jean", "Yep. Cosplaying as Sekuna from Tokyo Pop Reee Black Medallion Slash Slash Cross Cross.");
			writeSpeech(data.story.name, "player", "...I thought she had blue hair though?");
			writeSpeech(data.story.sisterName, "jean", "Only when in her digital dimension form, dipstick. What's up?");
			writeSpeech(data.story.name, "player", "Oh uh... I bought some candy, and-");
			writeSpeech(data.story.sisterName, "jean", "Fuckin sweets? gimme!");
			writeText("She takes them in a heartbeat. But as soon as it looks like this'll go easily, she stops just before eating the pop rocks.");
			writeSpeech(data.story.sisterName, "jean", "What's the deal, bro?");
			writeSpeech(data.story.name, "player", "Whaaat? I don't-");
			writeSpeech(data.story.sisterName, "jean", "Is it that teacher again?");
			writeSpeech(data.story.name, "player", "...Yeah. Actually, there's a math test coming up. If you could change her-");
			writeSpeech(data.story.sisterName, "jean", "Change you into a math god so you can breeze through the test? Sure.");
			writeText("She noms down on the handful of rock candies.");
			writeSpeech(data.story.sisterName, "jean", "After my nap. Fuck off now.");
			writeSpeech(data.story.name, "player", "Have a nice nap sis. You gonna cosplay in your sleep?");
			writeSpeech(data.story.sisterName, "jean", "Fuck oooooooff~");
			writeText("...");
			writeText("You walk back into her room. The only light indirect, coming from the evening sun through the window.");
			writeText("She's out cold. Maybe the app tuned up how quickly she can fall asleep. It's surprisingly difficult to get the straps to work, but you eventually have her hands tied to the bedpost without waking her.");
			writeDrawn("images/drawn/aya/sister1-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "You still sleep in the buff, huh?");
			writeText("By now the effects of the candy should be kicking in. She'll be in overdrive, and in less than an hour even a light breeze could trigger an orgasm. You lift the sheets to admire your handiwork.");
			writeDrawn("images/drawn/aya/sister1-2.jpg", "Art by Aya");
			writeText("She has a powerful, but not unappealing scent to her. She could probably use the app to stop herself from sweating, but it's probably another of her bevy of fetishes.");
			writeText("Right now you need to focus on reclaiming some of that embarrassed masculinity.");
			writeText("You'd never hurt her. Firstly because there's no reason to since the app is out of your hands forever, but also because despite how much she's dicked up everyone you know, you pretty sure she'd never want to make you miserable.");
			writeText("She could also have brainwashed you. But if she did, you'd never think that she did, so by thinking that-");
			writeText("Stuff like that is too complicated. You have a much less complicated scheme in mind.");
			writeDrawn("images/drawn/aya/sister1-3.jpg", "Art by Aya");
			writeText("She's already at a full erection just by being exposed to the air. Her forskin is long and reaches over the head of her dick, perfect for your plan.");
			writeText("Wrapping the band in place, you rub your finger along the outline of her head.");
			writeDrawn("images/drawn/aya/sister1-4.jpg", "Art by Aya");
			writeText("You can <b>hear</b> the sound of her balls pumping out a small load, maybe just precum. All according to plan.");
			writeSpeech(data.story.sisterName, "jean", "The fuck are you doing?");
			writeDrawn("images/drawn/aya/sister1-5.jpg", "Art by Aya");
			writeText("There's a pause as you make eye contact. You almost want to hide behind the growing balloon of cum-filled foreskin and pretend she won't notice you, but you're in control right now, right?");
			writeSpeech(data.story.name, "player", "I-I'm getting some revenge with a prank! I'll s-show you how it feels to get teased!");
			writeSpeech(data.story.sisterName, "jean", "Oh yeah? And how are- Oooh!");
			writeDrawn("images/drawn/aya/sister1-6.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "That candy was special. You're on a hair trigger now, and you're all tied up!");
			writeSpeech(data.story.sisterName, "jean", "Okay then, bro. What's next?");
			writeSpeech(data.story.name, "player", "...What?");
			writeSpeech(data.story.sisterName, "jean", "What's next? I'm tied up and ready to cum.");
			writeSpeech(data.story.name, "player", "...I didn't really have an afterwards. Just tie you up and let you make a cum balloon.");
			writeSpeech(data.story.sisterName, "jean", "No. Being in a dominant position doesn't make you in control, little bro. I'm going to tell you what you're going to do next.");
			writeSpeech(data.story.name, "player", "But-");
			writeSpeech(data.story.sisterName, "jean", "Put your mouth up to it and drink it, or I turn you into the family dog. And I don't mean in a sex way.");
			writeSpeech(data.story.name, "player", "I... That's a bit much. I only tied you up, and it's just a-");
			writeSpeech(data.story.sisterName, "jean", "And you're going to make it up. Do I make myself clear? Drink.");
			writeText("You try to scowl, but end up giving a cute pout as you try to pretend like this was your plan all along.");
			writeText("Grasping at your last straws of being in a dominant position, and holding your sister's ball of cum-filled foreskin to your lips, you close your eyes and lean in.");
			writeText("There's a squelch sound as your lips meet the foreskin, and you wonder if this counts as your first kiss.");
			writeText("You undo the band to allow some of the jizz to start flowing, and it comes out in a gush onto your face and into your lapping mouth.");
			writeText("The taste is ecstasy in liquid form, and you feel your mind go as white as your throat with every swallow.");
			writeText("There's a dim tingling in your groin as you lick around in the foreskin to try and catch any more globs.");
			writeSpeech(data.story.sisterName, "jean", "You came from just that?");
			writeSpeech(data.story.name, "player", "W-wh-*cough* what? How'd you know?");
			writeSpeech(data.story.sisterName, "jean", "I guessed, then you confirmed it dipstick. Now, you have a choice. Untie me and I cum all over your bed for you to sleep in, or start jerking me off until the effect of the candy wears off. Either way, I'll forgive you for drugging me.<br>Or, you do neither. I get out of these bindings, and you're living in a much smaller house in the yard.");
			writeDrawn("images/drawn/aya/sister1-7.jpg", "Art by Aya");
			writeText("The choice was clear, although you wish you looked a bit more reluctant as you tried to wrap your fingers around your sister's massive shaft.");
			break;
		}
		case "sister2S": { 
			writeText("Instead of responding when you greet her, she just gestures for you to take a seat on the bed.");
			writeText("After you do, she spins around in her chair. She's in cosplay again as a succubus from some anime.");
			writeSpeech(data.story.sisterName, "jean", "Just who I wanted to see. I was thinking about what you did the other day.");
			writeSpeech(data.story.name, "player", "I thought you said you'd forgive me.");
			writeSpeech(data.story.sisterName, "jean", "And I did, but this is a learning experience little bro. Are you ready for your punishment?");
			writeText("You nod and close your eyes, ready to accept your fate. It's better than resisting and risking some kind of mind control.");
			writeSpeech(data.story.sisterName, "jean", "Alright, done.");
			writeText("You open your eyes again, expecting something... different.");
			writeSpeech(data.story.name, "player", "I have cat ears now? And a tail?");
			writeSpeech(data.story.sisterName, "jean", "Yep. Take that as a lesson: Don't interrupt my naps. Oh, I guess there was one other thing to do.");
			writeText("You're about to ask what before she taps on her phone's screen and everything goes black.");
			writeText("...");
			writeText("You awaken to more blackness. You have some tight leather on, but it's still a bit breezy. What most captures your attention though is the feeling that you're a lot more bottom-heavy in a way you weren't before.");
			writeDrawn("images/drawn/aya/sister2-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Mmmf? MMF!?");
			writeText("You can hear the sound of tapping, before you hear someone set something down on a table.");
			writeDrawn("images/drawn/aya/sister2-2.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Good morning~!<br>I found some more of that candy in your bag. I'd planned something different, but if you're gonna be a repeat offender, you need a proper lesson.");
			writeText("She sets her hand on your titanic cock and gives it a little squeeze. You can feel something long and plastic inside of you.");
			writeSpeech(data.story.name, "player", "MMMF!");
			writeSpeech(data.story.sisterName, "jean", "You feel that? I made a few changes to your body to make this feel as wonderful as can be. You seemed a little disappointed when you saw your baby brother-sized equipment, so I thought I'd let you see what's on the other side. You don't mind, do you?");
			writeSpeech(data.story.name, "player", "MMM!");
			writeSpeech(data.story.sisterName, "jean", "What? You don't want this inside of you? You want it out?");
			writeSpeech(data.story.name, "player", "Mmmhmm!");
			writeDrawn("images/drawn/aya/sister2-3.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "HHHMMM!!!");
			writeSpeech(data.story.sisterName, "jean", "So loud~! I guess you like it more than you let on, huh? I gave you those candies earlier while I was ramping up the sensitivity of the inside of your dick. It probably feels so much better than you thought it would, huh?");
			writeText("To emphasis her words, she starts to push the textured rod back into your dickhole. There's no pain, only your nerves lighting up like a Christmas tree in pleasure. You want to <b>cum</b>, but a weight on your balls and the tight leather on your dick are holding you back.");
			writeSpeech(data.story.sisterName, "jean", "I'm going to leave you plugged for just a little while longer. You only made me cum eight times after I ate those little rocks, now you'll know what it feels like to be so pent up.");
			writeText("You desperately try to struggle, but only succeed in waving your massive piece of fuckmeat through the air.");
			writeSpeech(data.story.sisterName, "jean", "Ah! So wiggly~! I thought you'd look gross with something this big on your cute little body, but it really has it's own charm. Here, let me...");
			writeText("You can feel her undoing the straps on your blindfold, but more importantly undoing the straps on your dick.");
			writeDrawn("images/drawn/aya/sister2-4.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "See? I don't know why you'd want something like this. It really isn't cute at all, you know? The tiny package fits on your girlie body a lot better.");
			writeText("You try to answer with anything defiant, but all you can muster is a desperate groan.");
			writeSpeech(data.story.sisterName, "jean", "Aww, does my little sweetie want to cum? That's a two pound weight, so if you just try really, really <b>hard</b>, then you'll have a chance to cover the floor in your sticky jizz. Wouldn't you like that?");
			writeSpeech(data.story.name, "player", "Mhhmm! Mhhhmmm!!");
			writeSpeech(data.story.sisterName, "jean", "Good puppy. Here, I'll help.");
			writeText("She runs her tongue along your nipple while playing with the other, but it isn't enough until she grabs on to the end of the urethral wand and puuuuuuulls it out in one smooth motion. She throws it across the room and grabs a glass from the table as you feel yourself coming.");
			writeDrawn("images/drawn/aya/sister2-5.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/sister2-6.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "MMMMMM!");
			writeText("You almost crunch right through the gag as you feel your balls tighten enough to lift the weight. Your body and mind go white in a single glorious moment that just keeps going on, and on, and on.");
			writeDrawn("images/drawn/aya/sister2-7.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Ah, you meanie! I only brought one glass, and you're still leaking!");
			writeText("You barely mumble something back through the gag. You feel like a heroin addict who just got their fix. The floodgates are open, you feel like you're just pissing a solid stream of jizz now.");
			writeSpeech(data.story.sisterName, "jean", "Only one thing for this then.");
			writeDrawn("images/drawn/aya/sister2-8.jpg", "Art by Aya");
			writeText("She leans down in front of the head of your dick and holds the glass up to her lips. She makes sure you're watching as she chugs the glass of dickmilk while strings of jizz cover her breasts.");
			writeDrawn("images/drawn/aya/sister2-9.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Aaaah, tasty~.");
			writeText("She languidly strokes your shaft to pump out anything that's left. The candies are showing their effect, even this soft stroking is pushing you over the edge again.");
			writeSpeech(data.story.sisterName, "jean", "You and I are going to have a lot of fun tonight, little bro. You ready? Just blink whenever you want to cum.");
			writeText("...");
			writeSpeech(data.story.sisterName, "jean", "Oh? Going limp already? Is that all you have?");
			writeText("You can feel yourself slowly falling under as darkness is taking over your vision.");
			writeSpeech(data.story.sisterName, "jean", "...Huh, I guess he's actually passed out. <br>..."+data.story.name+"?");
			writeText("You can faintly feel her fingers on your cheek.");
			writeSpeech(data.story.sisterName, "jean", "To be honest, I've been feeling really confused lately. I knew I couldn't pass up on the app but... <br> Now that I can feel however I want it's... Not what I thought it would be. I could just fuck up my brain whenever and feel however I want to feel, what's the point?");
			writeText("Her fingers move away, and you feel her head nuzzle against your chest.");
			writeSpeech(data.story.sisterName, "jean", "Knowing you were enjoying the new world, enjoying me, even if it was for a stupid prank was...<br>It was nice.");
			writeText("...");
			writeText("You awaken tucked snuggly into bed, you penis now back to it's usual small size. It feels really sore, letting you know that what just happened was real.");
			writeText("You still have a least a few hours left before daylight.");
			break;
		}
		case "sister3S": {
			writeText("You're rudely awoken by loud knocking.");
			writeSpeech(data.story.sisterName, "jean", "Wakey wakey little bro, we're going out! I canceled school, so hurry up and get dressed!");
			writeText("...");
			writeSpeech(data.story.sisterName, "jean", "It's cold today.");
			writeSpeech(data.story.name, "player", "You're the one who wanted to go out at 8 am.");
			writeSpeech(data.story.sisterName, "jean", "You should be encouraging, I'm outside, like you wanted, right?");
			writeSpeech(data.story.name, "player", "Yeah yeah, good job. So we're headed for the filming area right? You gonna grab a souvenir?");
			writeSpeech(data.story.sisterName, "jean", "Not exactly.");
			writeText("...");
			writeText("You walk in without incident, only "+data.story.sisterName+" knows what he left his post to do.");
			writeSpeech(data.story.name, "player", "So what exactly is the plan here?");
			writeSpeech(data.story.sisterName, "jean", "You'll see. Check it out.");
			writeSpeech("Director", "scripts/gamefiles/none.png", "Alright everybody, positions.");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "Um, Shawn? I'm having some second thoughts about these script changes.");
			writeText("On a blue set with a dozen cameras recording her is the lead actress. She's completely naked with a flaccid dick between her spread legs.");
			writeSpeech("Director", "scripts/gamefiles/none.png", "No time like the present babe, roll cameras!");
			writeText("A monitor comes up on the other side of the room.");
			writeSpeech("???", "scripts/gamefiles/none.png", "Foolish Pop Champion, you thought you could stand against my digital armies and survive? I hope you're ready to be transformed into a jizz-spewing food source for my minions!");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "You'll never get away with this you villain! I'll-<br>Oh shit that looks sharp. Cut?");
			writeDrawn("images/drawn/aya/sister3-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "What did you do?");
			writeSpeech(data.story.sisterName, "jean", "I thought to myself that porn parodies are more faithful than this movie has been, so why not take it all the way?");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "Cut? Guys? Where's my stunt double? That's a fake right?");
			writeSpeech(data.story.name, "player", "This is pretty messed up "+data.story.sisterName+", is that a real syringe?");
			writeSpeech(data.story.sisterName, "jean", "Don't worry, I switched her pain response to pleasure, so she-");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "AH FUCK! AAAAAH!");
			writeSpeech(data.story.sisterName, "jean", "Aw man, I missed it! Shush! I wanna enjoy this live before it gets posted online.");
			writeDrawn("images/drawn/aya/sister3-2.jpg", "Art by Aya");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "What... What's going on? That was real, what was in that?");
			writeText("Her foreskin begins to grow, covering the head of her dick. The serum begins coursing through her body, changing her physically and mentally.");
			writeDrawn("images/drawn/aya/sister3-3.jpg", "Art by Aya");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "What the hell is going on? Are we still rolling? Cut the cameras, I-<br>Uuugh...");
			writeDrawn("images/drawn/aya/sister3-4.jpg", "Art by Aya");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "O-oh my...");
			writeText("Her now massive cock stands at what must be a proud three feet of dickmeat.");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "It's burning... I need to...");
			writeText("She struggles against her bonds, the thought of the cameras watching is gone. All she wants to do now is jerk off so that she can get the itch to stop.");
			writeDrawn("images/drawn/aya/sister3-6.jpg", "Art by Aya");
			writeText("The director himself comes onto the set and pulls down her massive foreskin to expose her throbbing cockhead.");
			writeText("The serum is still taking effect, or maybe it's just "+data.story.sisterName+" on the app. Her cock starts to quiver and her balls tighten.");
			writeDrawn("images/drawn/aya/sister3-8.jpg", "Art by Aya");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "Aaah cumming~! My massive dick is cumming~!");
			writeText("She sprays her dickmilk all over the director, who takes it all without flinching as if he was in a trance.");
			writeText("Someone calls out that it's time to move on to the next scene.");
			writeText("...");
			writeDrawn("images/drawn/aya/sister3-9.jpg", "Art by Aya");
			writeSpeech("Actress", "scripts/gamefiles/drawn/actress.jpg", "Cock! Dick! Cum! I'm a worthless dickmilk machine!");
			writeText("Messages flash in her headset while voices sing into her ears. All the while her dick is being drained by a vibrating cocksleeve into a set of containers marked as 'breakfast topping'. ");
			writeText("As her mind is broken with very real hypnosis, the director steps in view of the camera.");
			writeSpeech("Director", "scripts/gamefiles/none.png", "I'm a total hack fraud! I should never have been given the Tokyo Pop rights! Fuck the board of directors who gave this project the green light on this piece of shit script!");
			writeText(""+data.story.sisterName+" turns to you, the biggest shit-eating grin you've ever seen on a human plastered on her face.");
			writeText("To be fair, it was a pretty shit adaptation.");
			writeText("...");
			writeText("Later that day.");
			writeSpeech(data.story.sisterName, "jean", "Hey bro, catch!");
			writeText("She tosses you thirty bucks.");
			writeSpeech(data.story.sisterName, "jean", "Just sold the rights to the movie on SpermHub, that's your share.");
			writeSpecial("You 'earned' $30!");
			data.story.money +=30;
			break;
		}
		case "sister4S": {
			writeText("You search around the house to no avail until a sound from below tips you off.");
			writeText("The basement is unused except for storage, so nobody should have any reason to be down there.");
			writeText("You carefully make your way down the creaky old staircase and see two figures. "+data.story.teacherName+" and "+data.story.sisterName+", both changed by the app as easily as they could change hairstyles.");
			writeDrawn("images/drawn/aya/sister4-0.jpg", "Art by Aya");
			writeText(""+data.story.sisterName+" is humming to herself as "+data.story.teacherName+" is strung up, her mouth and limbs bound.");
			writeSpeech(data.story.teacherName, "kendra", "Mmm-mmm!");
			writeSpeech(data.story.sisterName, "jean", "Shhhh, quiet for now. There's no rush, you'll get what's coming to you.<br>I wanna enjoy this first.");
			writeDrawn("images/drawn/aya/sister4-1.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Fuck this is awesome... You used to act so high and mighty, and now here you are. You're about to have your dick fucked, are you ready?");
			writeDrawn("images/drawn/aya/sister4-2.jpg", "Art by Aya");
			writeText(""+data.story.teacherName+" struggles and moans as "+data.story.sisterName+"'s dick penetrates, you aren't sure if she's in pain or her brain is being overloaded in pleasure.");
			writeSpeech(data.story.sisterName, "jean", "God you're tight...<br>You'll never be able to go back to normal after this. You're going to be my dicksleeve until I get bored and throw you out like the trash you are. <br>But for now...");
			writeDrawn("images/drawn/aya/sister4-3.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/sister4-4.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Mmmm! <br>The inside of your dick feels so good! How does it feel to finally find your purpose in life, dicksleeve?");
			writeText(""+data.story.teacherName+" can't collect her thoughts to answer even with a muffled grunt. She twitches, eagerly wanting to cum but it's blocked by a tight leather belt on her sack.");
			writeText(""+data.story.sisterName+" kneels down and wraps her pillowy breasts around the pair of joined cocks.");
			writeDrawn("images/drawn/aya/sister4-5.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "You're not going to get a chance to cum. The closest you'll get is when you try to squeeze your gaping cockhole closed after I'm done, and you squirt out a load of my backed-up jizz.");
			writeDrawn("images/drawn/aya/sister4-6.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Fuck... I'm gonna pump my cum into this fat slab of useless fuckmeat!");
			writeDrawn("images/drawn/aya/sister4-7.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Cumming~!");
			writeText("You can see "+data.story.teacherName+"'s cock bulge between "+data.story.sisterName+"'s breasts as cockmilk is spurted inside. "+data.story.teacherName+" moans and squirms helplessly as she tries to break free so she can cum herself.");
			writeDrawn("images/drawn/aya/sister4-8.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "Ehehe... I can almost hear your balls gurgling. I know how much you want to cum, but you're <b>my</b> toy. You don't get to cum unless I let you. <br>And I'm not going to.");
			writeText("At this last remark, "+data.story.teacherName+" begins squirming with renewed vigor. She must have been on the edge of an orgasm the entire time, but "+data.story.sisterName+" is merciless.");
			writeText(""+data.story.sisterName+" grabs a floppy pink dildo and thrusts it into "+data.story.teacherName+"'S urethra, before grabbing a set of leather and straps.");
			writeSpeech(data.story.sisterName, "jean", "I'm finished for today, little bro. Try not to squeak so much if you want to watch again tomorrow.");
			writeText("You decide it's a good time to leave.");
			break;
		}
		case "sister5S": {
			writeSpeech(data.story.sisterName, "jean", "Wakey wakey! Is my dicksleeve ready? Don't bother answering, I don't care!");
			writeText(data.story.teacherName+" squirms groggily as she wakes up. Every inch of her is extra sensitive since she's been without sight for so long, and because of how backed up she is.");
			writeDrawn("images/drawn/aya/sister5-1.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "And you didn't spill a single drop of my cum! Not that you could have, anyway.");
			writeText("The bondage setup has held the dildo in place overnight, keeping "+data.story.teacherName+"'s urethra packed with "+data.story.sisterName+"'s cum.");
			writeDrawn("images/drawn/aya/sister5-2.jpg", "Art by Aya");
			writeSpeech(data.story.sisterName, "jean", "You should really make sure to wash yourself after I throw you away. At this point, anybody who walks near you could pick you out as a jizz-mop right away! <br>Now, do you want to cum?");
			writeSpeech(data.story.teacherName, "kendra", "Mhhmm! Mhhmmm!");
			writeSpeech(data.story.sisterName, "jean", "Then go ahead and show me! Entertain me, or the belt is never coming off.");
			writeDrawn("images/drawn/aya/sister5-3.jpg", "Art by Aya");
			writeText(""+data.story.teacherName+" struggles and grunts as she attempts to push the dildo out of her cock, each inch that slides out feeling like she's pushing out a load of fat, sticky cum.");
			writeSpeech(data.story.teacherName, "kendra", "Mmm!");
			writeDrawn("images/drawn/aya/sister5-4.jpg", "Art by Aya");
			writeText("With a *PLOP*, the dildo is pushed out and flops against the floor. "+data.story.teacherName+" is panting heavily through the gag, but she thrusts against the air a few times to try and stretch out the pleasurable feeling in her dick.");
			writeText("True to her word, "+data.story.sisterName+" unclasps the belt around "+data.story.teacherName+"'s balls.");
			writeSpeech(data.story.sisterName, "jean", "Watch closely, little bro. I got a self cleaning model.");
			writeText(""+data.story.teacherName+"'s sack tightens as she's finally given a chance to start pouring out what must be at least a pound of backed-up sperm, both hers and "+data.story.sisterName+"'s, but after a second nothing comes out.");
			writeText("Impatient, "+data.story.sisterName+" gives a good slap to "+data.story.teacherName+"'s nuts, and they tighten again. She's clearly having an orgasm, but nothing's coming out.");
			writeSpeech(data.story.sisterName, "jean", "Oops, it looks like my jizz made a clog. Don't worry, I know what to do.");
			writeDrawn("images/drawn/aya/sister5-5.jpg", "Art by Aya");
			writeText(""+data.story.sisterName+" thrusts her first into "+data.story.teacherName+"'s modified asshole, pressing her fingertips against "+data.story.teacherName+"'s mammoth prostate gland.");
			writeText(""+data.story.teacherName+"'s untouched dick twitches, and a slow stream of "+data.story.sisterName+"'s dried jizz starts getting pushed out.");
			writeSpeech(data.story.sisterName, "jean", "You call that cumming?! You're only good for one thing, dicksleeve, and that's my entertainment! Now <b>CUM</b>!");
			writeDrawn("images/drawn/aya/sister5-6.jpg", "Art by Aya");
			writeText(""+data.story.sisterName+" pushes deeper, flattening "+data.story.teacherName+"'s prostate gland with her fist. "+data.story.teacherName+"'s knees shake as the massive stream of cum is pissed out of her huge cock.");
			writeText("The cum makes a splattering noise loud enough to be audible over "+data.story.teacherName+"'s muffled orgasmic screaming.");
			writeSpeech(data.story.sisterName, "jean", "More! More!");
			writeText(""+data.story.sisterName+" rhythmically pulls and pushes her arm back and forth, punching "+data.story.teacherName+"'s prostate to turn "+data.story.teacherName+"'s flow into an unending orgasm.");
			writeText("As "+data.story.teacherName+"'s voice begins to give out, it isn't clear if her psyche will survive through the night. One thing is clear though, she will never be the same.");
			break;
		}
		case "friend1S": {
			writeText("She certainly looks different, but the girl walking down the hall is still the "+data.story.friendName+" you remember. When she sees you, she actually looks excited and walks over to you with a brightly-colored binder in her hand.");
			writeSpeech(data.story.friendName, "riley", data.story.name + "! Hey, how have you been?");
			writeSpeech(data.story.name, "player", "I... I'm fine? Did you need me for something?");
			writeText("Her expression relaxes as you talk. A pleasant, if a little distracted expression on her face.");
			writeSpeech(data.story.name, "player", data.story.friendName + "? Are you-");
			writeText("She snaps out of it and looks a little panicked for a second. She holds her binder with both hands, the way she's holding it covering her skirt.");
			writeSpeech(data.story.friendName, "riley", "Sorry, sorry. Something came up.");
			writeSpeech(data.story.name, "player", "Did you have something you needed to tell me?");
			writeSpeech(data.story.friendName, "riley", "Yeah, but I have a thing coming up. Could you stay until it finishes? It's only like fifteen minutes.");
			writeText("The school is almost emptied, but there's nowhere you need to be right now.");
			writeSpeech(data.story.name, "player", "Yeah sure. I'll hang out near the entrance-");
			writeSpeech(data.story.friendName, "riley", "Thanks, see you soon!");
			writeText("She rushes off before you can finish, careful to keep her binder in place.");
			writeText("What could she want to say to you? You aren't friends, or even really acquaintances.");
			writeText("Maybe... No, you shouldn't jump to conclusions.");
			writeText("...");
			writeText("You lean against the entrance's wall patiently.");
			writeText("Meanwhile, just down the hall, " + data.story.friendName + " is hiding behind the corner.");
			writeSpeech(data.story.friendName, "riley", "<i>Okay, okay, calm down " + data.story.friendName + ".<br>Today is the day. Everything is going to go fine. Just calm down!</i>");
			writeText("Mentally, she berates herself and the half-chub lifting her skirt.");
			writeDrawn("images/drawn/aya/friend1-1.jpg", "Art by Aya");
			writeText("Since her unusual growth spurt, she's had to forgo her normal tape this morning to keep her erections from poking out. Not only that, she had to forgo panties today as well. Still, despite how strange it was, she couldn't bring herself to find it weird for some reason.");
			writeSpeech(data.story.friendName, "riley", "<i>God, what is up with me today? I even accidentally flashed a guy on the way here. If it'd been "+data.story.name+"...</i>");
			writeSpeech(data.story.friendName, "riley", "<i>Ah! No! Come on, calm down. Don't think about him. Don't think about his face. About his lips around my...</i>");
			writeText("Mental images flood " + data.story.friendName + "'s mind. Her newly enhanced libido barely able to keep up with her fantasies..");
			writeSpeech(data.story.friendName, "riley", "<i>I could pin him down. He's smaller than I am, I could just... No! I need to stop!</i>");
			writeDrawn("images/drawn/aya/friend1-2.jpg", "Art by Aya");
			writeText(data.story.friendName + " pulls her hand away from her member.");
			writeSpeech(data.story.friendName, "riley", "<i>What the hell am I doing, jerking off in public? What would people think if they saw me? What would "+data.story.friendName+" think?<br>That I'm some pervert who can't control her dick?</i>");
			writeText("Despite not touching herself, she can't help but feel herself moving towards an edge.");
			writeSpeech(data.story.friendName, "riley", "<i>He might even try to run away, and I'd need to chase him... I'd catch him, and-</i>");
			writeDrawn("images/drawn/aya/friend1-3.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "<i>Ah, no! Nooo! Cumming~!</i>");
			writeDrawn("images/drawn/aya/friend1-4.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "<i>Hah... Hah... I came all over the floor... Shit! He's coming!</i>");
			writeText("It's been more than fifteen minutes already. You walked over to see if she was finished yet, only to find a puddle of white fluid on the floor, and no trace of " + data.story.friendName + ".");
			writeText("You wait for another five minutes, but there's no sign of her. Eventually, you decide to leave. You'll need to ask her what she wanted to tell you some other day.");
			break;
		}
		case "friend2S": {
			writeSpeech(data.story.name, "player", data.story.friendName + "! Hey, " + data.story.friendName + "!");
			writeText("You call out to her, but she doesn't seem to hear you. She's already in a rush as she turns the corner.");
			writeSpeech("???", "scripts/gamefiles/none.png", "You know her? She's been acting weird all day, put off all her after class stuff cleaning too.");
			writeSpeech(data.story.name, "player", "No, not really. She said she had something she needed to tell me.");
			writeText("...");
			writeText("Inside of a cramped bathroom, " + data.story.friendName + " is perched over a toilet, but not for the usual reason.");
			writeSpeech(data.story.friendName, "riley", "<i>God, what is wrong with me? The moment I saw him I had to get away...</i>");
			writeDrawn("images/drawn/aya/friend2-2.jpg", "Art by Aya");
			writeText("Another growth spurt had struck her overnight. She'd needed to use her mother's clothes as her once AA-cups had grown yet again.");
			writeSpeech(data.story.friendName, "riley", "<i>I can't be doing this. Last time was dangerous enough, but at least school was empty. There are still people here, so why...</i>");
			writeDrawn("images/drawn/aya/friend2-3.jpg", "Art by Aya");
			writeText("She pulls back her drooping foreskin, and shivers as the head is exposed to air.");
			writeSpeech(data.story.friendName, "riley", "<i>Why can't I stop?</i>");
			writeText("Within seconds precum has begun to pour out of her. Were someone in another stall, it would sound like a weak stream of piss as the precum splashed upon meeting the surface of the water.");
			writeText("Suddenly, the door to the bathroom opens, and two chatty schoolgirls walk in.");
			writeSpeech(data.story.friendName, "riley", "<i>Noooo... Go away!</i>");
			writeText("Though she panics internally, " + data.story.friendName + " does not stop stroking herself.");
			writeText("The two stop chatting once they've used the facilities, choosing to ignore the faint splashing sound from their adjacent stalls, unaware of what the stall was being used for.");
			writeSpeech(data.story.friendName, "riley", "Ngggh-!");
			writeDrawn("images/drawn/aya/friend2-4.jpg", "Art by Aya");
			writeText(data.story.friendName + " desperately tries to hold back the flood of cum, and she manages to slow the flow of her massive pump.");
			writeDrawn("images/drawn/aya/friend2-5.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "<i>Haah... Hah... More. That wasn't enough...</i>");
			writeText("The pair of schoolgirls leave, a strange feeling awoken within them by the sounds and smells of the room.");
			writeText("Soon, " + data.story.friendName + " has returned to her stroking, now completely shamelessly. She doesn't bother trying to hide the sound anymore.");
			writeSpeech(data.story.friendName, "riley", "Yes... Yes... Yes, yes, yes!");
			writeDrawn("images/drawn/aya/friend2-6.jpg", "Art by Aya");
			writeText(data.story.friendName + " fucks her fist full force. No longer holding herself back, she fires rope after rope of cum with enough force to damage the porcelain.");
			writeText("The seconds fly by as " + data.story.friendName + " keeps cumming. The flow doesn't stop even after a full minute.");
			writeDrawn("images/drawn/aya/friend2-7.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "NNGGGGH~~~");
			writeText("Her brain has begun to go haywire after the first minute. The human mind was not built to handle an orgasm lasting this long. Her vision begins to waver and her tongue lolls out of her mouth.");
			writeDrawn("images/drawn/aya/friend2-8.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "...");
			writeText("She can't form thoughts anymore, and her stare is blankly set upon nothing in particular as she fills the toilet's bowl.");
			writeText("With one splurt after another, the toilet begins to overflow as her balls rhythmically tighten and relax like clockwork.");
			writeText("...");
			writeText("Back in the classroom, you volunteered to take over " + data.story.friendName + "'s cleaning she'd shirked. Hopefully she'll pay you back another day by telling you what she'd meant to say before.");
			break;
		}
		case "friend3S": {
			writeText("Or at least she was. Just like always, she's gone before you can get a chance to speak with her.");
			writeSpeech("???", "scripts/gamefiles/none.png", "Oh hey, "+data.story.name+", right? Could you help us out again today?");
			writeText("There's at least a chance that you could get to talk to "+data.story.friendName+" afterwards, so you agree.");
			writeText("...");
			writeText("Meanwhile, in another classroom.");
			writeText("A teacher is droning on about nothing in particular during a digression about mathematical history.");
			writeSpeech(data.story.friendName, "riley", "<i>This is so boring... <br>I wonder how club's going. Maybe I should have skipped.</i>");
			writeText("Inside her bag was a white envelope held closed by a red heart sticker. She hasn't been able to make it through a conversation with you, so she's hatched a plan to leave a note in your bag. ");
			writeSpeech(data.story.friendName, "riley", "<i>I wonder if "+data.story.name+"'s already gone home... Mayne he's still here, and I can slip him the letter while he's in the bathroom.</i>");
			writeText("Fantasies play out in her head as she doodles on the paper in front of her.");
			writeSpeech(data.story.friendName, "riley", "<i>I wonder what he'll think... <br>Shit! No!</i>");
			writeDrawn("images/drawn/aya/friend1-1.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "<i>Oh no, oh no, what do I do?</i>");
			writeText("She contemplates asking to be excused, but she can't hide her erection. The teacher is facing the class, so she can't sneak out.");
			writeSpeech(data.story.friendName, "riley", "<i>Okay okay, gotta calm down...</i>");
			writeDrawn("images/drawn/aya/friend1-2.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "<i>Why? Why am I so... So...</i>");
			writeDrawn("images/drawn/aya/friend1-3.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "<i>Nnngh... No! Gotta... Gotta cum somewhere...</i>");
			writeText("Out of options, she opens her bag and starts jerking herself off as quietly as she can.");
			writeSpeech(data.story.friendName, "riley", "<i>Cumming~!</i>");
			writeText("No one notices the light splortching sound as "+data.story.friendName+" coats the inside of her bag, and its contents, with a day's worth of backed-up jizz.");
			writeSpeech(data.story.friendName, "riley", "<i>So... Good... </i>");
			writeSpeech("???", "scripts/gamefiles/none.png", "Does anyone smell something?");
			writeText("The class bell rings, interrupting the teacher's question. People way past done with the lesson begin quickly bailing, but "+data.story.friendName+" remains still trying to calm down.");
			writeText("Once she can hide her dick underneath her skirt, she quickly runs iut of the classroom and ducks into an alcove behind the stairs.");
			writeSpeech(data.story.friendName, "riley", "Please... Please no!");
			writeText("She opens up her back and right at the top of her stuff is the ruined love letter, completely caked with jizz.");
			writeSpeech(data.story.friendName, "riley", "<i>No! Why!?<br>God, why can't I stop myself from jerking off for just one day?</i>");
			writeText("Her plan is ruined. She takes the envelope in her hands, the semen has soaked it completely through.");
			writeSpeech(data.story.friendName, "riley", "<i>Why? Why did I ever think this would work?<br>I don't belong with anyone... I'm better off jerking my disgusting cock to him from afar...</i>");
			writeDrawn("images/drawn/aya/friend1-2.jpg", "Art by Aya");
			writeText("She clutches the ruined letter as her dick begins to harden. Fantasies of cumming into your food, sneaking into your room at night, all better than facing an inevitable rejection.");
			writeSpeech(data.story.name, "player", ""+data.story.friendName+"?");
			writeText("And it all comes crashing down as you come around the corner to see her, her cock erect and an envelope covered in semen in her hands.");
			writeText("There's a deafening silence in the air.");
			writeSpeech(data.story.name, "player", "I... I'll just let you-");
			writeSpeech(data.story.friendName, "riley", "I... I don't... This isn't...");
			writeText("Her world comes crashing down around her, tears begin to form in her eyes.");
			writeSpeech(data.story.name, "player", "Whoa hey! It's okay! I'm sorry, I shouldn't have, uh...");
			writeText("She collapses to her knees, tears streaking down her face, and sit down with her and put your arm on her shoulder.");
			writeSpeech(data.story.name, "player", "Hey, listen, it's okay.");
			writeSpeech(data.story.friendName, "riley", "I... I just...");
			writeText("She tries to explain herself inbetween sobs.");
			writeSpeech(data.story.name, "player", "It's okay, listen. This isn't your fault, it's okay. I'm not freaked out or anything, see?");
			writeText("You place a finger on the sperm-soaked letter. It's squishy, but you've done much worse over the last week.");
			writeText("And it works, her crying and her breathing slow down.");
			writeText("...");
			writeText("The two of you spend a while chatting underneath the stairs. Well, you spend a while chatting, she mostly just focuses on calming down.");
			writeSpeech(data.story.name, "player", "It's okay, I'm flattered, really. And, if you want to give it another shot, I'd love to read that letter sometime.");
			writeSpeech(data.story.friendName, "riley", "I... I'll write another.");
			writeSpeech(data.story.name, "player", "That's probably for the best. Do you want to go grab a coffee or something?");
			writeText("She nods.");
			writeSpeech(data.story.name, "player", "Sounds great, I know this awesome place out by the station, a really nice lady runs it.");
			writeText("...");
			break;
		}
		case "friend4S": {
			writeText("The two of you have a chat as the halls empty, trying to get to know eachother better.");
			writeSpeech(data.story.name, "player", "So, as I was saying, it's pretty clear that season 2 really dropped the ball. But "+data.story.sisterName+" keeps arguing like it's the-<br>Oh, hey, heads up.");
			writeText("She looks down to see her erection flipping up her skirt. Face red, she tugs her skirt down to hide it and checks to see if anyone was watching.");
			writeSpeech(data.story.name, "player", "If you need to take a moment, I'm cool with waiting up.");
			writeText("She looks around again before taking a deep breath and grabbing your hand and pulling you into an empty classroom.");
			writeSpeech(data.story.name, "player", "Whoa, what's going on?");
			writeText("She takes another deep breath. ");
			writeSpeech(data.story.friendName, "riley", "I... I don't want to keep hiding it. I want you to see the real me. Will you stay?");
			writeSpeech(data.story.name, "player", "... Yeah, yeah I'll stay.");
			writeText("She flashes you the most wonderful smile you've even seen, before she starts unbuttoning her shirt.");
			writeSpeech(data.story.name, "player", "Wait, have you always had piercings?");
			writeSpeech(data.story.friendName, "riley", "What? Oh, uh, yeah. I've had them for... Um...");
			writeSpeech(data.story.name, "player", "Don't worry about it, it's fine.<br><i>Really, "+data.story.sisterName+"? Unconsensually piercing people now?</i>");
			writeText("She nods her head, eager to avoid the headache that comes with questioning the app's changes.");
			writeSpeech(data.story.friendName, "riley", "Okay.");
			writeDrawn("images/drawn/aya/friend4-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Oh, wow.");
			writeText("She's scooted forwards on the desk so that her balls are dangling off of it, and you have to admit the ring piercings in her nipples and cock suit her. ");
			writeSpeech(data.story.friendName, "riley", "How do I look?");
			writeSpeech(data.story.name, "player", "You look incredible.");
			writeDrawn("images/drawn/aya/friend4-2.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "Mmm... It's tough to resist when it gets hard. I feel like it's in control of me sometimes. Hehe... ");
			writeSpeech(data.story.name, "player", "It's okay, keep going.");
			writeSpeech(data.story.friendName, "riley", "I never thought it'd be like this, with you watching. I always thought you'd think I was gross.");
			writeSpeech(data.story.name, "player", "I think you're beautiful.");
			writeDrawn("images/drawn/aya/friend4-3.jpg", "Art by Aya");
			writeText("She forces her hand off to try and hold off on cumming, probably to enjoy it longer, but her throbbing cock is the one making decisions for her and she's stroking herself again to rude out the orgasm.");
			writeDrawn("images/drawn/aya/friend4-4.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "Cumming~! I'm cumming while "+data.story.name+" is watching!");
			writeDrawn("images/drawn/aya/friend4-5.jpg", "Art by Aya");
			writeText("Her cum arcs through the air. It splatters on the desk in front of you, some of it getting on your shirt.");
			writeDrawn("images/drawn/aya/friend4-6.jpg", "Art by Aya");
			writeSpeech(data.story.friendName, "riley", "S-sorry, I can clean that up. <br>Can we do it again? I'm not finished yet.");
			writeSpeech(data.story.name, "player", "We can do this as many times as you need.");
			writeText("...");
			break;
		}
		case "teacher1S": {
			writeSpeech(data.story.teacherName, "kendra", "Ah, "+data.story.name+". Stay there please. I need to speak with you, alone.");
			writeText("You take a seat and wait as the rest of the students file out of the classroom.");
			writeText("...");
			writeSpeech(data.story.name, "player", "So why am I here? Did I do something wrong?");
			writeText("You stand up once the class is empty. She walks towards you, and you back up instinctively. Within a moment, you're cornered against a wall.");
			writeText("The clothes your sister has forced her to wear are tight and inappropriate for a learning environment.");
			writeDrawn("images/drawn/aya/teacher1-1.jpg", "Art by Aya");
			writeText("They don't even fit, either. The too-tight shorts make her bulge visible when when she manages to zip them up, and her swimsuit bottom doesn't even hide the outline of her dick.");
			writeSpeech(data.story.teacherName, "kendra", "You think I couldn't see you staring?");
			writeText("She places her hands against the wall to either side of you.");
			writeSpeech(data.story.teacherName, "kendra", "You've been very naughty. Do you know what I do to naughty boys?");
			writeDrawn("images/drawn/aya/kendra.jpg", "Art by Aya");
			writeText("Now that she's half-hard, only the head and the base of her dick are covered. She runs her hand through your soft hair, gently grasping a lock of it.");
			writeSpeech(data.story.teacherName, "kendra", "They need to... They need to be punished.");
			writeText("Her tone becomes unfocused and her voice begins to waver. There's an odd look in her eyes as she leans forwards and takes a deep breath of your hair.");
			writeSpeech(data.story.teacherName, "kendra", "Ah, nnn~!");
			writeText("She pulls back suddenly, biting her knuckle with one hand keeping her dick down. A dark spot begins to form on her underwear, before...");
			writeDrawn("images/drawn/aya/teacher1-2.jpg", "Art by Aya");
			writeText("A white fluid begins leaking through the front of her outfit, before it begins to leak down the side of her legs in spurts.");
			writeText("Before you can even begin to understand what is happening, she darts out of the classroom.");
			break;
		}
		case "teacher2S": {
			writeSpeech(data.story.teacherName, "kendra", data.story.name+", take a seat. I need to speak with you.");
			writeText("You don't want to know what she has planned, but combined worry and curiosity compels you to take a seat. Besides, the principle would side with her in a heartbeat.");
			writeText("...");
			writeText("As the last person leaves "+data.story.teacherName+" follows just behind them. As they walk out she closes the door and you can hear the sound of it locking.");
			writeSpeech(data.story.name, "player", "Hey, what's going on?");
			writeText(data.story.teacherName+" tosses the set of keys onto her desk and drops her shorts.");
			writeSpeech(data.story.teacherName, "kendra", "I had to... Leave. Leave early, last time.");
			writeDrawn("images/drawn/aya/teacher2-1.jpg", "Art by Aya");
			writeText("You can see her exposed dick twitch and begin to grow as she says this.");
			writeSpeech(data.story.teacherName, "kendra", "But I intend to finish what I started. You need to learn how to show a lady respect, and I'm going to teach you.");
			writeText("You stand up from your chair, but she pushes you to the ground.");
			writeText("Despite being only half hard, at more than half a foot she's a lot larger than you. She's a lot stronger too, she shows as she pins you with one hand and strips you with the other.");
			writeSpeech(data.story.teacherName, "kendra", "That's it. Play along quietly, and this will even be fun for you.");
			writeText("The world is different now, you're not in control. You close your eyes and brace yourself for the painful dry insertion, but it doesn't come. She's stopped talking, too. All you hear is the sound of skin rubbing skin.");
			writeText("You open your eyes to see her jerking off over you. The way her cock is still flopping, it's obvious she's not erect. Not only that, but she actually looks smaller than before.");
			writeSpeech(data.story.name, "player", "What are you doing?");
			writeText("She looks up at you surprised.");
			writeSpeech(data.story.teacherName, "kendra", "Sh-shut up! Give me a second...");
			writeText("After a few seconds of jerking she stops and stands up. She rubs herself a few times trying to get an erection, but it isn't working. She stops and stares at her dick, almost completely flaccid now.");
			writeSpeech(data.story.name, "player", "Can... Can you not get it up?");
			writeText("As you say this, she jolts on the spot and her cock perks up.");
			writeSpeech(data.story.teacherName, "kendra", "I said shut up! I'm just... This doesn't happen! It isn't normally like this!");
			writeSpeech(data.story.name, "player", "Like what? Were you about to rape me, but stopped because you couldn't get an erection?");
			writeText("Her cock jerks again, almost as hard as it was when she'd approached you.");
			writeSpeech(data.story.name, "player", "And are you getting off on this?");
			writeSpeech(data.story.teacherName, "kendra", "S-stop it!");
			writeDrawn("images/drawn/aya/teacher2-2.jpg", "Art by Aya");
			writeText("Her eyes look a little watery. She lifts her hands to cover her ashamed face.");
			writeText("There's an awkward moment of silent realization as you watch her dick jerk again, this time spurting out a small glob of clear precum.");
			writeSpeech(data.story.name, "player", "That's... Pretty pathetic.");
			writeText("On her knees, her balls begin to tighten.");
			writeDrawn("images/drawn/aya/teacher2-3.jpg", "Art by Aya");
			writeText("Without even touching it, her dick begins to spray its load onto the hardwood classrom floor.");
			writeText("Without dignity or pride, her dick pumps out two more thin ropes before it comes to a stop, still standing at full erection.");
			writeText("You think you can hear her try to mask a sniffle.");
			writeText("Many thoughts run through your mind before you decide to just take the keys and head home.");
			writeText("Before you leave, through the open door you can see her staring at her erection with tears in her eyes. As she looks at the mess she's made, another glob of sticky jizz shoots out of her as she tries to hold back a sob.");
			writeDrawn("images/drawn/aya/teacher2-4.jpg", "Art by Aya");
			writeText("Erection in hand, she looks ready to jerk off to her shame, but the moment she touches her dick it begins to soften.");
			writeText("This is some messed up shit. You should probably go.");
			break;
		}
		case "teacher3S": {
			writeSpeech(data.story.teacherName, "kendra", "So... What is this again? It's a bit big for me to suck on.");writeSpeech(data.story.name, "player", "You're so desperate to get off, I figured I'd prepare in advance for when you start getting ideas for ways to cum without using your dick.<br>You use that like a buttplug, and it cleans you out forever."); 
			writeSpeech(data.story.teacherName, "kendra", "Oh? Sounds useful. Well, don't mind if I do.");
			writeText("She fiddles around, your vision blocked by her desk. You can imaging what's happening as she slowly lowers herself down while cooing. She pulls her shorts back up afterwards.");
			writeSpeech(data.story.teacherName, "kendra", "Stick around, I have another class after this one, but I'll see you soon.");
			writeText("...");
			writeText("Much later after school has ended, on a bed in the nurse's office.");
			writeDrawn("images/drawn/aya/teacher3-1.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "To think that my little slacker would be such a pervert.");
			writeSpeech(data.story.name, "player", "I'm not a pervert! You were going to think of this eventually, this just makes it sanitary.");
			writeSpeech(data.story.teacherName, "kendra", "Oh, that's all? Then why do you look so hungry for it, "+data.story.name+"? It only looks like a donut, it isn't actually one. ");
			writeSpeech(data.story.name, "player", "Shut up, or I'll report you for-Mmmph!");
			writeText("She grabs your hair and pulls you forwards, before wrapping her legs around your head to block any escape.");
			writeText("Now you're left with no choice. <i>That makes giving in a lot easier.</i>");
			writeDrawn("images/drawn/aya/teacher3-2.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/teacher3-3.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "Mmm, you're quite gifted at this.");
			writeSpeech(data.story.name, "player", "<i>Shut up! <br>Fuck, why does this taste so good? What the hell did I get myself into?</i>");
			writeText("The taste is exquisite, all sweet like fruits and sugar, not bitter like you expected.");
			writeText("Her asshole is tender and soft, all puffy and enhanced by the plug.");
			writeSpeech(data.story.teacherName, "kendra", "Oooh, that feels amazing... Deeper!");
			writeText("She squeezes your head with her thighs like you're some abuse-powered sex slave.");
			writeDrawn("images/drawn/aya/teacher3-4.jpg", "Art by Aya");
			writeText("And unfortunately for you, it works.");
			writeText("She squirms in the bed as precum starts leaking down her dick in an endless stream. You can feel some of it leaking down onto your hair as you tonguefuck your shemale teacher's asshole.");
			writeText("And to make matters worse, you're enjoying this way more than you should. There must be some kind of chemical in the plug, that's it.");
			writeSpeech(data.story.teacherName, "kendra", "Nnngh, just like that! Keep going!");
			writeDrawn("images/drawn/aya/teacher3-5.jpg", "Art by Aya");
			writeText("Her leglock loosens as you feel her balls, pressed against your nose, begin to throb and her sack tightens.");
			writeText("You could pull away, stop making out with her asshole, but she's probably just pull you back in. That's what you tell yourself as globs of sticky cum leak out of her and begin to soak into your hair.");
			writeText("She's shaking as you continue assaulting her butthole with your tongue, and her orgasm seems to go on forever until at some point she actively kicks you away so she can stop cumming.");
			writeText("You just sit there, unable to form thoughts, as she starts to finally wind down.");
			writeSpeech(data.story.teacherName, "kendra", "Holy... My goodness, that was... Intense.");
			writeText("She's taking deep breaths as she tries to calm herself down.");
			writeSpeech(data.story.teacherName, "kendra", "Mmm, now what to do with my little pervert. We can't just have you go home with so much cum in your hair, can we?");
			writeText("This is going to be a long day.");
			break;
		}
		case "teacher4S": {
			writeSpeech(data.story.teacherName, "kendra", "Holy mother of God, this is amazing...");
			writeDrawn("images/drawn/aya/teacher4-1.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "All of them are inside my dick... I can feel them, and I'm still hard too.");
			writeText("She gives a few tugs on the string of beads currently stuffed into her urethra.");
			writeSpeech(data.story.teacherName, "kendra", "Nggh, my dick won't let go!");
			writeSpeech(data.story.name, "player", "Here, let me.");
			writeDrawn("images/drawn/aya/teacher4-2.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "Mmm~!");
			writeText("She lets out a high pitch hum as several beads are pulled out, each coated in a layer of clear precum.");
			writeDrawn("images/drawn/aya/teacher4-3.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "Ah! If you pull them that hard-!");
			writeDrawn("images/drawn/aya/teacher4-4.jpg", "Art by Aya");
			writeText("The head of her dick pops out of her foreskin. The taffy is in full effect, so you aren't worried when you decide to pull out all the rest at once.");
			writeDrawn("images/drawn/aya/teacher4-5.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/teacher4-6.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "Nnnnngh, I can feel it bubbling up!");
			writeText("Her dick starts erupting like a volcano of jizz, before she instinctively grabs onto the shaft to support it.");
			writeDrawn("images/drawn/aya/teacher4-7.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "Oh no, no no!");
			writeText("Her shaft starts softening even as her orgasm goes on, her bloated dick distending as globs of cum travel up it.");
			writeSpeech(data.story.name, "player", "Hands off, let me fix this.");
			writeText("You grab onto her softening shaft with both hands and squeeze like you're trying to twist water out of a sponge. On any normal person this might hurt, but for a humiliation-obsessed masochist like "+data.story.teacherName+"..."); 
			writeDrawn("images/drawn/aya/teacher4-8.jpg", "Art by Aya");
			writeText("She starts cumming like a bitch in a rut, each squeeze milking another load of cum out of her.");
			writeText("Her cock is in a limbo between being rock hard and being a floppy bitchstick. ");
			writeText("Seizing the opportunity, you pull her dick towards you and let it go.");
			writeDrawn("images/drawn/aya/teacher4-9.jpg", "Art by Aya");
			writeText("With a loud, meaty *THWACK*, she's smacked in the face with her own dick.");
			writeDrawn("images/drawn/aya/teacher4-10.jpg", "Art by Aya");
			writeText("But instead of getting embarrassed, she's harder than ever.");
			writeSpeech(data.story.teacherName, "kendra", "It's so big... I'm so big...");
			writeText("There's a worshipful love in her eyes as she stares at her own dick. Without thinking, she reaches lut and glides her finger along its side.");
			writeText("And her massive length begins to shrink before her eyes.");
			writeSpeech(data.story.teacherName, "kendra", "No, no, no!");
			writeText("And within moments what once was a massive 2-foot python is back to it's floppy, flaccid state.");
			writeSpeech(data.story.teacherName, "kendra", "Fuck! Why!? No!");
			writeText("She tries to start jerking herself off to an erection to no avail. Her eyes watering, she gives up.");
			writeSpeech(data.story.teacherName, "kendra", "Fuck this! God damn worthless piece of shit dick!");
			writeText("The mood is gone, along with whatever dignity she had left. You decide to leave her there to stew. ");
			break;
		}
		case "teacher5S": {
			writeText("All throughout class she's been squirming, and at some point she stopped getting up from her desk altogether. Now that the classroom is empty, you take the opportunity to talk to her.");
			writeSpeech(data.story.name, "player", "Everything okay? You looked like you had a vibe in your dick or something.");
			writeSpeech(data.story.teacherName, "kendra", "Very funny, talking to a teacher like that could get you detention. ");
			writeText("She sighs and pulls back her chair to reveal that she's been completely bottomless for awhile now, and her cock is standing at full mast.");
			writeSpeech(data.story.teacherName, "kendra", "That candy you gave me, it isn't wearing off like you said it would. I keep fucking feeling like I'm about to have an orgasm whenever my cockhead touches something. <br>Fix it.");
			writeText("She takes off her top, but what really grabs your attention is the state of her dick.");
			writeDrawn("images/drawn/aya/teacher5-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Holy shit, it looks like someone's been fucking this thing. Have you been masturbating with it?");
			writeSpeech(data.story.teacherName, "kendra", "Maybe once, or twice, but that's because it won't go down!");
			writeDrawn("images/drawn/aya/teacher5-2.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "God, this is torture. I can't jerk off like a normal dickgirl, but my cock keeps getting hard...");
			writeText("There's a strong smell of sperm coming from the slight gape of her urethra.");
			writeSpeech(data.story.name, "player", "I think I have a solution.");
			writeDrawn("images/drawn/aya/teacher5-3.jpg", "Art by Aya");
			writeText("She tries to pull back as you push her cock against her face. ");
			writeSpeech(data.story.teacherName, "kendra", "Nnn... What the hell are you doing? It... It fucking stinks...");
			writeText("Far from a complaint, it sounds more like she's getting off on the scent.");
			writeSpeech(data.story.name, "player", "You want to cum, right? You want to finally let off all that pressure building up in those huge balls of yours?");
			writeSpeech(data.story.teacherName, "kendra", "Yes, but-");
			writeSpeech(data.story.name, "player", "Then open up.");
			writeDrawn("images/drawn/aya/teacher5-4.jpg", "Art by Aya");
			writeText("She seems like she wants to argue, but the intoxicating scent combined with how much she wants to cum keeps her quiet.");
			writeSpeech(data.story.name, "player", "Good, now you just need to-");
			writeDrawn("images/drawn/aya/teacher5-5.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/teacher5-6.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Really? Shoving your tongue right down your dickhole? God, your dick is like two feet long but you're a thousand times more pathetic than I am.");
			writeText("She whines in response, but you can actually watch as a glob of precum travels up from the base of her dick.");
			writeSpeech(data.story.name, "player", "Go on then, take it!");
			writeDrawn("images/drawn/aya/teacher5-7.jpg", "Art by Aya");
			writeText("She chokes a little as the gout of precum is strong enough to come out her nose, but you keep her head pressed down. For extra effect, you reach down and give her balls a good <b>squeeze</b>.");
			writeSpeech(data.story.teacherName, "kendra", "Mmmmph!");
			writeDrawn("images/drawn/aya/teacher5-8.jpg", "Art by Aya");
			writeDrawn("images/drawn/aya/teacher5-10.jpg", "Art by Aya");
			writeText("You keep her head in place as she starts squrting cum down her own throat, sending her jizz down into her stomach with every swallow.");
			writeDrawn("images/drawn/aya/teacher5-11.jpg", "Art by Aya");
			writeText("Her dick starts to soften as it flops out of her mouth. She coughs, but still catches the strand of jizz on her lips with her tongue, pulling it back into her mouth to eat.");
			writeSpeech(data.story.name, "player", "That's not enough for you, is it?");
			writeSpeech(data.story.teacherName, "kendra", "No, more. I want to cum more...");
			writeDrawn("images/drawn/aya/teacher5-12.jpg", "Art by Aya");
			writeSpeech(data.story.teacherName, "kendra", "Ooh~!");
			writeText("The two of you keep up your play for what feels like hours. By the end of it, you aren't sure who's in charge anymore.");
			writeText("... ");
			writeText("Evening sunlight colors the room, she's cum more than a dozen times, most of them she cleaned, but you helped yourself more than a few times.");
			writeText("After you finish wiping off any spots on your uniform and make sure you're presentable, you turn back to "+data.story.teacherName+".");
			writeDrawn("images/drawn/aya/teacher5-13.jpg", "Art by Aya");
			writeText("She's gone through a lot lately, most of it could be defined as sexual torture to put it bluntly. For as awful of a person to be around as she was, does she really deserve this?");
			writeText("Well, it doesn't really matter, does it? ");
			break;
		}
		case "office1S": {
			writeText("You're walking through the alley on your way home when you hear a sound around a nearby corner. Following it, you stumble upon someone you almost recognize.");
			writeDrawn("images/drawn/aya/office1-1.jpg", "Art by Aya");
			writeText("Leaning against a brick wall is "+data.story.officeName+", completely unrecognizable, but you know it's her all the same.");
			writeText("She looks troubled as she looks from side to side to see if anyone is watching. You stay hidden and aren't spotted.");
			writeSpeech(data.story.officeName, "alexis", "Jesus, this is so dangerous...");
			writeDrawn("images/drawn/aya/office1-2.jpg", "Art by Aya");
			writeText("Ignoring herself, she grasps her length with her hand. One hand doesn't even cover half of its girth though.");
			writeSpeech(data.story.officeName, "alexis", "Someone could see... A kid could walk by...");
			writeText("Her stroking grows faster.");
			writeSpeech(data.story.officeName, "alexis", "I could get arrested...");
			writeText("Precum spurts from her dick's tip.");
			writeSpeech(data.story.officeName, "alexis", "Some dirty hobo could walk right up to me and grab me by the waist, then~!");
			writeDrawn("images/drawn/aya/office1-3.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "NNNGHFFF-Fuck!");
			writeText("She remains still for a moment as her dick softens.");
			writeSpeech(data.story.officeName, "alexis", "I... I don't...");
			writeDrawn("images/drawn/aya/office1-4.jpg", "Art by Aya");
			writeText("Once she's soft she stands back up, wobbling a little. She looks around again, and you dart back behind cover. After a moment of silence, you peek you head back out and she's gone, but her skirt and panties are laying in the puddle of cum at the base of the wall.");
			break;
		}
		case "office2S": {
			writeText("You're walking through the alleyway on your way home as usual, but this time you're keeping an eye out for "+data.story.officeName+".");
			writeText("You're a little disappointed when you don't find her, but someone's taken the soiled underwear from the spot with the dried cumstain.");
			writeText("Suddenly, you feel like you're being watched.");
			writeText("You start walking, but the feeling doesn't go away. You turn around and see someone in a coat dart back behind a wall, and you decide to run.");
			writeText("In your haste you just try to get away, not caring where you're going.");
			writeText("You get lost for a moment, and before you can follow a mental map, you see the figure again.");
			writeText("You back up, but you're cornered in the alleyway.");
			writeText("As the get closer, you can see that it's... "+data.story.officeName+"? She's wearing a trenchcoat. Undoing some buttons, she opens it throws it to the side.");
			writeDrawn("images/drawn/aya/office2-1.jpg", "Art by Aya");
			writeText("Both of you are silent as she approaches you, stroking herself towards an erection.");
			writeText("She gets closer, you can smell her already.");
			writeDrawn("images/drawn/aya/office2-2.jpg", "Art by Aya");
			writeText("As she approaches you, she presses her member against your skin.");
			writeDrawn("images/drawn/aya/office2-3.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "I've been edging all day...");
			writeText("She rubs herself against you, humping your body. Precum splashes out onto your clothes and skin.");
			writeText("She starts thrusting, hard. You feel like your whole body is being used as a sex toy.");
			writeText("Finally she pulls back and strokes herself a few times, before...");
			writeDrawn("images/drawn/aya/office2-4.jpg", "Art by Aya");
			writeText("Once she's finished, without a word she runs off. Her half-erect length bobbing with her stride.");
			writeText("You need a shower.");
			break;
		}
		case "office3S": {
			writeText("You're walking through the familiar alleyway again, you aren't sure why. Maybe it's just out of habit, or maybe...");
			writeText("<i>You want it to happen.</i>");
			writeText("You shake your head to get rid of the stray thought. Nothing has even happened, and it's unlikely that-");
			writeSpeech(data.story.officeName, "alexis", "Stop right there, criminal scum!");
			writeText("You jump when the figure across the alleyway shouts at you. She strides forwards into the light, and you can see her clearly.");
			writeSpeech(data.story.name, "player", "... "+data.story.officeName+"?");
			writeSpeech(data.story.officeName, "alexis", "That's the prostate punisher to you, criminal! Did you think you'd get away with it so easily?");
			writeSpeech(data.story.name, "player", "What? I'm just going home.");
			writeSpeech(data.story.officeName, "alexis", "Don't you move a muscle! I'm detaining you on charges of seducing innocent dickgirls!");
			writeSpeech(data.story.name, "player", "You've got to be kidding.");
			writeText("She isn't, and she grabs your arm with a surprisingly strong grip and pulls you aside before you know what's happening.");
			writeText("She licks her lips as set gets you to your knees in front of a stone block.");
			writeSpeech(data.story.officeName, "alexis", "Now, if you'll play nice, since you're a first offender you can get off on a light sentence.");
			writeSpeech(data.story.name, "player", "Hold on, this is redic...");
			writeDrawn("images/drawn/aya/office3-2.jpg", "Art by Aya");
			writeText("She slides down her pink latex thong to show off her cock.");
			writeSpeech(data.story.officeName, "alexis", "N-now you can put your criminal mouth to use, or you can keep trying to argue against the inevitable and I'll have to cleans you with my White Justice.");
			writeSpeech(data.story.name, "player", "I... ");
			writeText("She looks embarrassed as she exposes her fat dick, but she isn't letting you off the hook. She could probably catch you if you tried running anyways. She waves her dick in front of her face. You...");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="addendum('alexis1')">
					Be defiant
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="addendum('alexis2')">
					Oblige
				</p>
			`;
			break;
		}
		case "office4S": {
			writeText("A crowd has gathered in your usual path home. It isn't exactly roomy, so you stick around to see what could be attracting so mych attention.");
			writeSpeech(data.story.officeName, "alexis", "Let me go you ruffians! Thugs! Evil will never prevail!");
			writeText("You inwardly sigh as you recognize the voice. She's got a new look now though.");
			writeDrawn("images/drawn/aya/office4-1.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "Nnngh... <br>Cowards, untie me, and face a real champion of justice on an even battleground!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Shut up! My daughter was a valedictorian, but ever since she met you she's become a masturbation junkie who would fuck a dog if it had a big enough dick!");
			writeSpeech("???", "scripts/gamefiles/none.png", "And my husband divorced me, saying a psycho rapist in an alleyway taught him how good being a buttslut was! ");
			writeSpeech(data.story.officeName, "alexis", "She was guilty of forcing unwanted erections, and he was guilty of wearing tight jeans with a fuckable butt! They were both criminals, and payed the price!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Shut up!");
			writeDrawn("images/drawn/aya/office4-2.jpg", "Art by Aya");
			writeText("Holy shit, "+data.story.sisterName+"'s alterations have seriously fucked up the town. What the hell is even going on? What kind of mob trial involves public dick exposure?");
			writeSpeech(data.story.officeName, "alexis", "If you think exposing my dick to an entire crowd is enough to defeat me, you've... You've got another...");
			writeDrawn("images/drawn/aya/office4-4.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "Ah... Nnn...");
			writeSpeech("???", "scripts/gamefiles/none.png", "Look at her, she's already got an erection!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Some hero of justice she is!");
			writeSpeech("???", "scripts/gamefiles/none.png", "What a pathetic exhibitionist!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Is she seriously going to cum from this?");
			writeSpeech("???", "scripts/gamefiles/none.png", "Pug slut! Cum from having your fetish exposed!");
			writeDrawn("images/drawn/aya/office4-5.jpg", "Art by Aya");
			writeSpeech("???", "scripts/gamefiles/none.png", "She's cumming! She's spilling her pathetic dickmilk on the ground!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Pig slut is cumming! Pathetic pig slut is a premature quickshot! ");
			writeSpeech("???", "scripts/gamefiles/none.png", "God damn her nipples are hard!");
			writeText("Once her stream of jizz start to die down, you notice that as her cock starts to soften it looks a lot puffier than before.");
			writeDrawn("images/drawn/aya/office4-6.jpg", "Art by Aya");
			writeText("Even though her dick is growing softer, it's growing fatter at the same time.");
			writeText("Holy shit, is "+data.story.sisterName+" watching this right now? Is she doing this?");
			writeSpeech("???", "scripts/gamefiles/none.png", "What the hell is going on? Is her dick bigger than before, even while soft?");
			writeSpeech(data.story.officeName, "alexis", "W-wha?");
			writeDrawn("images/drawn/aya/office4-7.jpg", "Art by Aya");
			writeText("The gaze of the crowd and alterations of her body cause her to grow hard again, this time she's towering over her previous length.");
			writeSpeech(data.story.officeName, "alexis", "I... I'm so big now... <br>O-of course, this is my true power! All of you don't stand a chance, I was only using half of my full erection up until now.");
			writeSpeech("???", "scripts/gamefiles/none.png", "I-is she going to cum again already?");
			writeSpeech("???", "scripts/gamefiles/none.png", "But how? She just came, and nothing's even touched her dick!");
			writeSpeech("???", "scripts/gamefiles/none.png", "It's so huge, I wanna touch it...");
			writeSpeech(data.story.officeName, "alexis", "B-behold, my final attack! Pearly white stream of justice!");
			writeDrawn("images/drawn/aya/office4-8.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "Cumming~!");
			writeText("Her 'attack' sprays the crowd in semen. You have the sense to get out of the way once she started spouting off though.");
			writeSpeech("???", "scripts/gamefiles/none.png", "Aaah! She came on me, what the fuck?!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Mmmph, I can't hold back, I wanna be <b>your</b> piggy slut!");
			writeSpeech("???", "scripts/gamefiles/none.png", "I'm cumming too! I want her jizz inside me!");
			writeSpeech("???", "scripts/gamefiles/none.png", "God, this is what my daughter got? Fucking hell, I don't blame her!");
			writeText("The crowd devolves into a frenzy of masturbation and cum-eating.");
			writeDrawn("images/drawn/aya/office4-9.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "More... I wanna cum more... Somebody untie me so I can fuck somebody. Ass, pussy, mouth, nose, I don't care...");
			writeText("...");
			writeText("You make it home safely. "+data.story.sisterName+" has a smug look when she next sees you, but you're not going to bring any of this up. Today has been weird enough, you aren't going to give her the opportunity to brag about her latest 'show'."); 
			break;
		}
		case "chef1S": {
			writeSpeech(data.story.chefName, "ava", "Good morning! Your usual?");
			writeSpeech(data.story.name, "player", "Yeah, thanks.");
			writeText("...");
			writeText(data.story.chefName + " certainly looks different, but on the inside she's still the same person. You'd thought that "+data.story.sisterName+" would have turned the city into a weeb's sex paradise before the day ends. While "+data.story.chefName+"'s new outfit is a bit on the short side, her newfound energy and the recent sales have left her a much happier person.");
			writeSpeech(data.story.chefName, "ava", ""+data.story.name+". If you're finished, I was wondering if you could help me out for a bit before closing. I could make it worth your while, of course.");
			writeText("...");
			writeText("You help out, it's a pretty easy job. You need to take coffees to a table every so often since she needs to dart to the bathroom.");
			writeText("Within less than half an hour the place is closing up, and she asks you to take a seat.");
			writeSpeech(data.story.chefName, "ava", "I'll be back in one second~!");
			writeText("A quiet moment passes as you take a breather. The day has been... Strange. It isn't like things are bad. With more time you could come to enjoy this new daily life.");
			writeText("Lost in philosophical thought even more time passes, and you can hear a strange sound coming from the kitchen.");
			writeSpeech(data.story.name, "player", "Is everything alright in there?");
			writeText("Her voice comes back after a pause, sounding slightly strained.");
			writeSpeech(data.story.chefName, "ava", "Everything is fine. I just need to, ah, finish frosting your reward~!");
			writeText("You swear you could hear the sound of jelly being squeeze out of a tube, and a moment later "+data.story.chefName+" walks out of the kitchen with a plate in her hands.");
			writeDrawn("images/drawn/aya/ava1-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "Um...");
			writeSpeech(data.story.chefName, "ava", "A creamed omelet, just for you.");
			writeText("It doesn't look very appetizing, but the alluring smell and her excited enough to make you want to have a taste.");
			writeText("...");
			writeText("You take another big bite, a little of the cream filling spilling down the side of your mouth The taste is indescribably wonderful. Every bite tastes like a warm hug.");
			writeText(""+data.story.chefName+" is staring intently at you as you eat. As the droplet of cream run down the side of your cheek you can hear a *thump* from beneath the table.");
			writeSpeech(data.story.chefName, "ava", "Sorry, sorry. restless leg.");
			writeText("You take a swallow to down the food in your mouth and she licks her lips.");
			writeSpeech(data.story.name, "player", "Is it alright for me to eat this all myself? Do you want any?");
			writeSpeech(data.story.chefName, "ava", "No thank you, sweetie. Watching you eat is my reward.");
			writeText("...");
			writeText("With your meal finished, you start to leave. Before you go, "+data.story.chefName+" places a small bundle of bills in your hand.");
			writeSpeech(data.story.chefName, "ava", "No refusing. I've come into some money lately, and I want to thank you for all your help with this place over the years. Use it for school, or anything else you need.");
			writeText("You nod and thank her. As you leave, she heads back into the kitchen.");
			writeSpecial("You earned $20!");
			data.story.money +=20;
			updateMenu();
			writeText("...");
			writeText("Meanwhile, in the kitchen.");
			writeText("There's a wobble in "+data.story.chefName+"'s step before she leans against a counter. A low grumble reminds her she hasn't eaten in a while.");
			writeSpeech(data.story.chefName, "ava", "Ah... Seeing him eat like that. I guess I'd like some too.");
			writeText("She lifts a glass cover and pulls a plate out. On it is a plain omelet.");
			writeSpeech(data.story.chefName, "ava", "It's a good thing he didn't look under the table. And if he'd stayed any longer, the seal might have broken.");
			writeText("She reaches under her skirt and pulls out a thick dick covered in a bloated foreskin, all topped with a green band to preserve her secret ingredient.");
			writeDrawn("images/drawn/aya/ava1-2.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Hehe, bottom's up!");
			break;
		}
		case "chef2S": {
			writeSpeech(data.story.name, "player", "The usual, please.");
			writeSpeech(data.story.chefName, "ava", "No problem, sweetie. Coming right up!");
			writeText("...");
			writeText("The place is bustling, so you try to finish your drink quickly. As you stand up, "+data.story.chefName+" comes over to you with a conflicted emotion on her face.");
			writeSpeech(data.story.name, "player", "You need help again?");
			writeSpeech(data.story.chefName, "ava", "Yes please. Someone booked a birthday party, and I just couldn't say no.");
			writeSpeech(data.story.name, "player", "No problem. I don't suppose I could get a food reward again this time? The last one was really good.");
			writeText("...");
			writeText("Despite how long it lasts, the shift is almost insultingly easy. The only caveat is when a customer asks for an extra-creamy coffee, which isn't on the menu.");
			writeText("When that happens Ava needs to work in the back for awhile, and you run the shop.");
			writeText("By the end of it the cafe is cleared out and she hands you another bundle of bills, probably too much for how little effort was involved, but she won't take no for an answer.");
			writeSpecial("You earned $20!");
			data.story.money +=20;
			updateMenu();
			writeText("This time she takes you into the back of the shop instead of making you wait out in the front.");
			writeSpeech(data.story.chefName, "ava", "Did you enjoy your reward from last time, "+data.story.name+"?");
			writeSpeech(data.story.name, "player", "Yeah, I really liked it.");
			writeSpeech(data.story.chefName, "ava", "Ooh, very good. You see, your reward for this time is even better, but it's not done yet.");
			writeText("Before you is a large cube-shaped parfait. It looks delicious, but something about it seems... Disappointing to you.");
			writeText("She undoes the tie on the side of her apron, then another in the back of her dress, and the outfit comes off in one piece. She takes a step up a stool and stands atop the study counter above the parfait.");
			writeDrawn("images/drawn/aya/ava2-1.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "I think you know by now what my secret ingredient is. Do you still want it?");
			writeText("You nod, your gaze locked on her exposed cock. You take it all in, inch by hardening inch.");
			writeDrawn("images/drawn/aya/ava2-2.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Good answer. Watch closely, okay sweetie?");
			writeSpeech(data.story.name, "player", "Okay...");
			writeText("She turns and presses the head of her dick into the parfait, letting out a coo as her sensitive flesh bumps against the cool desert.");
			writeDrawn("images/drawn/aya/ava2-3.jpg", "Art by Aya");
			writeText("She gently thrusts in until her head hits the bottom of the desert.");
			writeSpeech(data.story.chefName, "ava", "Aaah... I'm sorry sweetie, that last lady wanted the special, so I came just a while ago. You can wait a little while, right?");
			writeText("You don't mind, staring intently at her dick. Her balls are sinking into the desert's soft jelly.");
			writeSpeech(data.story.chefName, "ava", "Such a good boy, so patient.");
			writeDrawn("images/drawn/aya/ava2-4.jpg", "Art by Aya");
			writeText("Despite her thrusts, the desert manages to maintain its shape.");
			writeSpeech(data.story.chefName, "ava", "So nice and cool. You're still watching closely?");
			writeText("You nod, and even though she can't see you she already knows what your answer is.");
			writeSpeech(data.story.chefName, "ava", "Nggh... This is the eighth time today, but it feels like this will be the largest one yet!");
			writeDrawn("images/drawn/aya/ava2-5.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "NNNH~!");
			writeText("She thrusts in a few more times as the cake begins to deform and bloat. She lets her dick stay inside as she continues to pump more and more dickmilk filling into it.");
			writeDrawn("images/drawn/aya/ava2-6.jpg", "Art by Aya");
			writeText("Several pieces of it have begun to fall off, and you can see the thick milk pooling inside the parfait.");
			writeSpeech(data.story.chefName, "ava", "I... I can still feel like there's some left inside. Be a dear and help me out?");
			writeText("You lean forwards and lick one of the smaller ropes of cum that spilt off the side, trailing up until you lick the desert coating off the front of her balls.");
			writeSpeech(data.story.chefName, "ava", "OOh, good boy~");
			writeText("She starts to unsheath herself from the cake, pulling herself out with a *splorch* as she fires one last small spurt of cum onto the mess she's made.");
			writeText("...");
			writeSpeech(data.story.chefName, "ava", "Say aaaah~");
			writeDrawn("images/drawn/aya/ava2-7.jpg", "Art by Aya");
			writeText("She holds another forkful of the desert out, intent on feeding you the whole meal by hand.");
			writeText("You comply, taking the bite into your mouth and savoring the taste.");
			writeText("The taste is divine, but it isn't perfect.");
			writeText("The conflicting nature of the two flavors clash, which is pretty distracting from the more delicious part of the meal. Hopefully she'll run out of cake soon and just feed you spoonfuls of the jizz instead.");
			break;
		}
		case "chef3S": { 
			writeText("You roll around the Pop Rock in your hand as you call "+data.story.chefName+" over.");
			writeSpeech(data.story.chefName, "ava", "Good morning "+data.story.name+", what can I get you? I've got a huge backlog of orders right now, so I don't have any time to spare.");
			writeSpeech(data.story.name, "player", "Actually, I have something to help you out with that.");
			writeText("...");
			writeDrawn("images/drawn/aya/chef3-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "So, do you really need to restrained for this?");
			writeText("You slide the gloves on and snap them into place to make sure they're on tight. ");
			writeSpeech(data.story.chefName, "ava", "Yes, absolutely. I keep snacking on the product, so you just being here to collect it really helps. <br>Now, are you sure this-");
			writeDrawn("images/drawn/aya/chef3-2.jpg", "Art by Aya");
			writeText("Her apron darkens when a thick glob of precum soaks into it.");
			writeSpeech(data.story.chefName, "ava", "Nggh... Nothing's even touching my dick, but...");
			writeDrawn("images/drawn/aya/chef3-3.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Oooh, cumming...");
			writeText("You can see her balls throb as she soaks through the hem of her apron.");
			writeDrawn("images/drawn/aya/chef3-4.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Oh my, you were right. <br>But that was such a small load. <br>"+data.story.name+", grab the tray and the sleeves please, and put away this apron too if you could.");
			writeText("Considering how quickly she came, it's impressive that she's still rational enough to be giving orders. You take off her apron, giving it a quick lick to enjoy the taste despite yourself. ");
			writeSpeech(data.story.chefName, "ava", "Now, no sampling the merchandise, alright? If this works as well as you say it will, I'll have plenty left to reward you with. Okay sweetie?");
			writeSpeech(data.story.name, "player", "Yes ma'am.");
			writeText("You set the tray down in front of her, and grab one of the pink transparent sleeves.");
			writeDrawn("images/drawn/aya/chef3-5.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Go ahead sweetie.");
			writeText("Her eyes look glazed over as you hold the sleeve above the head of her dick. Droplets of cum are still running down the side of her dick, is she really already ready?");
			writeDrawn("images/drawn/aya/chef3-6.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "It's so tight...");
			writeText("It's hard to slide the sleeve down. The head penetrates easily, but there's a lot of resistance.");
			writeSpeech(data.story.chefName, "ava", "Harder, "+data.story.name+". These are modeled after virgin assholes, so you'll need to-");
			writeDrawn("images/drawn/aya/chef3-7.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Mmmmmgh!");
			writeText("With some force you push down down the fucksleeve, spreading it open with "+data.story.chefName+"'s cock. Her sack tightens, a sign she's already cumming again.");
			writeDrawn("images/drawn/aya/chef3-8.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Hmmm...~! ");
			writeText("The top of the sleeve inflates as "+data.story.chefName+" pumps a load of cum into it.");
			writeSpeech(data.story.chefName, "ava", "N-now pull it off!");
			writeDrawn("images/drawn/aya/chef3-9.jpg", "Art by Aya");
			writeText("There's a loud *SCHLORP*ing sound as you force the sleeve off her cock. The suction and the tight grip must make it feel like the cum is actually being sucked out of her balls.");
			writeSpeech(data.story.chefName, "ava", "Oooough~!");
			writeText("You hold the sleeve carefully so as not to let any of the precious product spill out, and grab another sleeve off the shelf. ");
			writeText("...");
			writeDrawn("images/drawn/aya/chef3-10.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Ah, fuck~!");
			writeText("You slide off the sleeve, enjoying the wet suction sound as the sleeve tries to cling to her cock.");
			writeSpeech(data.story.name, "player", "That's the fifth one ma'am. Should we keep going?");
			writeSpeech(data.story.chefName, "ava", "Another! Another!");
			writeText("...");
			writeDrawn("images/drawn/aya/chef3-11.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Oooh...");
			writeText("The last sleeve comes off with a *POP*, a line of sperm leaks down the side of the sleeve despite your best efforts. ");
			writeText("The room has been completely soaked in the scent of dickmilk, you can already feel yourself standing at a full direction.");
			writeText("The repetitive act of impaling dicksleeves and seeing them balloon out with cum is hypnotic. As if in a trance, you hold the sleeve avove you so the stray glob runs down the side and falls onto your waiting tongue.");
			writeText("You pull the strand into your mouth, you need to chew it because of how thick it is.");
			writeText("It's an explosion of a wonderful flavor, and even better, as "+data.story.chefName+" sees you chewing on her sperm, her dick spits out another load that runs down the length of her dick.");
			writeText("Every sleeve in the shop is full of milk already, so you lick your lips as you lean forwards for your reward.");
			writeText("...");
			writeSpeech(data.story.chefName, "ava", "Thank you so much sweetie!");
			writeText("She leans down to give you a kiss, surprising you when her tongue slips into your mouth. Her tongue mashes against yours, despite how it must still taste like jizz. In the back of your kind you register your skirt being lifted, and something being stuffed into your underwear."); 
			writeText("She breaks the kiss, and turns you around to the door before giving you a loving slap on the ass.");
			writeSpeech(data.story.chefName, "ava", "You need to get home now sweetie, it's getting late. Come by anytime, okay? I'll prepare a bigger container for next time if you want to help again.");
			writeText("You stumble out the door. Darting behind a corner for a second, you reach into your underwear to see what she gave you.");
			writeText("Inside are some dollar bills, and a fucksleeve stuffed with cum. Being roughly shoved in, some of it squirted out of the sleeve and you feel some of "+data.story.chefName+"'s cum on your little dicklette.");
			writeSpecial("You earned $20!");
			data.story.money +=20;
			break;
		}
		case "chef4S": {
			writeText("As the evening crowd shuffles out, "+data.story.chefName+" gives you a smile as you awkwardly stand near the entrance of the kitchen.");
			writeSpeech(data.story.chefName, "ava", "Would you like to help me prepare some product again, "+data.story.name+"?");
			writeSpeech(data.story.name, "player", "Yes ma'am.");
			writeText("...");
			writeDrawn("images/drawn/aya/chef4-1.jpg", "Art by Aya");
			writeSpeech(data.story.name, "player", "*Gulp*");
			writeSpeech(data.story.chefName, "ava", "Mmm... Are you satisfied now, "+data.story.name+"?");
			writeText("You nod, your throat still sticky with cum. Since she's got bigger containers this time, you got your reward before you actually started.");
			writeSpeech(data.story.chefName, "ava", "Good boy, now grab the wand.");
			writeText("Gloves in place, you grab the flexible ribbed wand attached to a long tube leading to a large plastic sperm container.");
			writeSpeech(data.story.name, "player", "B-*ahem*<br>But how do I...?");
			writeSpeech(data.story.chefName, "ava", "Put the end of the wand at the entrance of my penis, and push, "+data.story.name+".");
			writeSpeech(data.story.name, "player", "I... Like this?");
			writeSpeech(data.story.chefName, "ava", "Good, just li-");
			writeDrawn("images/drawn/aya/chef4-2.jpg", "Art by Aya");
			writeText("She squirms as the soft wand is pushed into her urethra. The dopey grin on her face tells you it feels a lot better than you might think.");
			writeText("It slides in without much resistance, she probably planned on cumming at least once before you two started.");
			writeText("The wand sinks down, you can see the outline of its bumps distending her dick.");
			writeSpeech(data.story.chefName, "ava", "G-good boy. Now just turn that dial until you hear a click.");
			writeDrawn("images/drawn/aya/chef4-3.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Ooooh-oh-oh~!");
			writeText("The wand comes alive and she's pushed over the edge as her dick feels the vibrations from the inside out. The hose attached to the wand inflates a little as "+data.story.chefName+"'s cum is pumped through.");
			writeDrawn("images/drawn/aya/chef4-4.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Y-y-yeeees~!");
			writeText("Inside the plastic container it almost look like a firehose of cum has been turned to full blast. In mere moments, the first container is almost filled.");
			writeText("As the stream starts to weaken, "+data.story.chefName+" wiggles her cock from side to side.");
			writeSpeech(data.story.chefName, "ava", "N-now "+data.story.name+", open the d-drawer and grab the vibrator on top.<br>G-good, now set it to low, and-");
			writeDrawn("images/drawn/aya/chef4-5.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Gggghgh~!");
			writeText("You can see the wand jammed inside her dickhole expand as a massive amount of cum starts getting pumped through it at once.");
			writeDrawn("images/drawn/aya/chef4-6.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Cumming! I can't stop cumming!");
			writeText("The gallon-sized container is already at maximum capacity, and threatens to burst if any more cum is pumped into it.");
			writeText("Luckily that isn't a problem, since...");
			writeDrawn("images/drawn/aya/chef4-7.jpg", "Art by Aya");
			writeText("The hose breaks off and flies through the air, jizz pours out of it and splatters onto the floor and your clothes.");
			writeDrawn("images/drawn/aya/chef4-8.jpg", "Art by Aya");
			writeSpeech(data.story.chefName, "ava", "Aaaah! I can't stop! More! ");
			writeText("Her cock is firing a constant high-pressure stream at this point powerfully enough to splatter against the ceiling and streaks of it land in her hair and on her bound hands.");
			writeText("It just doesn't stop. At some point you shut off the vibrator, but even once the jet of cum stops, the wand's head still inside her dick holds her urethra open. Cum oozes out of her dick as her eyes roll back in her head, her psyche gone."); 
			writeText("...");
			writeDrawn("images/drawn/aya/chef4-9.jpg", "Art by Aya");
			writeText("After some finagling, you manage to pull the wand out of her dick, allowing it to go flaccid. Cum hasn't stopped leaking out of her dick, a sign she hasn't really stopped cumming even now.");
			writeSpeech(data.story.name, "player", "Are you alright ma'am?");
			writeSpeech(data.story.chefName, "ava", "Mhmm...");
			writeText("She answers slowly, her energy sapped.");
			writeSpeech(data.story.chefName, "ava", "There's another wand attachment and hose in the drawer to your left. Set it up and plug it into me, and you can take the next container home with you. ");
			writeSpecial("You earned $20!");
			data.story.money +=20;
			break;
		}
		case "doll1": {
			writeText("You get a good look at her to inspect exactly what her deal could be. There's a pull string with a little ring at the end on her back.");
			writeSpeech(data.story.name, "player", "This is ridiculous...");
			writeText("You pull the string and set her down on your desk.");
			writeText("Without so much as a creepy sound effect, she starts to move. She leans back and stretches her arms to check her seams.");
			writeText("Once she's done, she hops onto her feet to face you.");
			writeDrawn("images/drawn/doll/profile1.png", "Art by OuttaSync");
			writeSpeech(data.story.name, "player", "H-hello?");
			writeText("She takes a moment to look at her tag.");
			writeSpeech(data.story.dollName, "doll", "The name's "+data.story.dollName+", companion and cock sock!");
			writeText("She takes a moment to size you up.");
			writeSpeech(data.story.dollName, "doll", "So, what do ya wanna do together? I'm pretty good for tea parties, and my stitching's a lot tougher than it looks! Or we could just hang out and talk.");
			writeSpeech(data.story.name, "player", "I don't know, this is a little weird...");
			writeText("...");
			writeSpeech(data.story.name, "player", "And I just don't know what to do! I mean, she's like some kind of reality-warping demigoddess now, how am I supposed to feel? What can I even do?");
			writeText("She's taking notes while adjusting her tiny pair of fake glasses.");
			writeSpeech(data.story.dollName, "doll", "Uh huh. I feel ya. Listen, I know just what your need.");
			writeText("She tosses aside her fake psychiatry stuff and bends over.");
			writeDrawn("images/drawn/doll/scene1-1.jpg", "Art by OuttaSync");
			writeText("She stretches herself out to show off a tight, velvety-looking hole.");
			writeSpeech(data.story.dollName, "doll", "Don't worry, I'm built for this kinda thing! Somebody like you just needs to vent their frustrations every once in a while.");
			writeSpeech(data.story.name, "player", "I don't know...");
			writeSpeech(data.story.dollName, "doll", "Shaddup, pick me up, and use me!");
			writeText("You grab her by the waist and slip off your underwear.");
			writeSpeech(data.story.dollName, "doll", "That's the spirit! Don't worry, I can stretch to fit-<br>Oh. Well, It's plenty fine for my size!");
			writeText("You start pushing yourself inside of her as she lets out a soft squeal.");
			writeText("The feeling is... Indescribable. It certainly feels good. The sensation of fabric has a sort of... Slickness?");
			writeText("There's not too much friction, it feels more like you're wearing a textured condom inside out.");
			writeText("It wasn't too long ago that you watched your sister grow a dick, but this is without a doubt the strangest thing you've experienced in your entire life.");
			writeSpeech(data.story.dollName, "doll", "Heck yeah! More! You can be rougher with me!");
			writeText("Too quickly you can feel your knees begin to buckle. As you thrust your inches in and out it feels like a dozen tongues running along your short length.");
			writeText("You hilt yourself inside and feel your body clench up as you start to leak out cum inside of her.");
			writeText("If her eyes could roll back they would be, she looks like she's being shocked. Because of how small she is, your load must be soaking through her fabric right into her brain.");
			writeText("She lets out a woozy giggle as her body absorbs the cum.");
			writeSpeech(data.story.dollName, "doll", "Feel bettuh?");
			writeSpeech(data.story.name, "player", "I... I'm not sure. It felt good, but...");
			writeDrawn("images/drawn/doll/scene1-2.png", "Art by OuttaSync");
			break;
		}
		case "doll2": {
			writeSpeech(data.story.dollName, "doll", "Hiya, welcome back!");
			writeText("She greets you warmly, but you can't muster a response and just plop onto your bed. After some jumping and climbing she's on your bed too.");
			writeSpeech(data.story.dollName, "doll", "You okay? Wanna talk about it? Do anal?");
			writeSpeech(data.story.name, "player", "I'm fine, just tired. Things have been... Things are changing pretty fast lately.");
			writeText("You can feel her small body resting against your head giving you a soft hug.");
			writeSpeech(data.story.name, "player", "...Thanks. I-<br>Wait, did you say anal? Can you even do that?");
			writeSpeech(data.story.dollName, "doll", "Yep! I'm fully equipped!");
			writeText("...");
			writeDrawn("images/drawn/doll/scene2.jpg", "Art by OuttaSync");
			writeText("She's tight, even for your size. It makes sense though. Even though your dick is only a few inches long, it's still going deep enough into to distend her chest.");
			writeText("It feels different from normal, the tightness, elasticity, and the slicker texture. It certainly isn't worse though, and you can already feel a familiar sensation bubbling up inside you.");
			writeText("You have no idea how she works, but she's certainly hungry for more. Beads of drool leak out of her with each thrust onto the bed.");
			writeText("You've only been at this for a few minutes, but you quickly feel yourself reaching orgasm inside of her.");
			writeText("She lets out a squal as cum pumps into her... Guts? And soaks into her fabric body.");
			writeText("You pull her off of yourself with a *SCHLORP* and she ragdolls down, laying on her face and shivering.");
			writeSpeech(data.story.name, "player", "You okay?");
			writeText("After a moment, she gives a tiny thumbs up.");
			writeText("She'll obviously need a second to recover if you want to chat again before bed. ");
			break;
		}
		case "doll3": {
			writeText("Or at least you thought she was.");
			writeSpeech(data.story.name, "player", ""+data.story.dollName+"?");
			writeText("You look around the room, but to no avail.");
			writeText("You check on the bed, under the sheets, in the drawers, everywhere.");
			writeSpeech(data.story.name, "player", "Where could she be?");
			writeText("As you're looking behind the dresser in case she fell, you realize you can hear a faint noise coming through the wall, coming from your sister's room.");
			writeText("As you listen to the noise, a strange feeling comes over you.");
			writeText("For whatever reason, you feel like if you investigate the noise, you'll regret it, but you aren't sure why.");
			if (data.story.currentScene != "gallery") {
				writeText("You could just <span class='choiceText' onclick='sceneTransition(`homePlayerRoom`)'>go on with your day</span>. "+data.story.dollName+" can probably handle herself.");
			}
			else {
				writeText("You could just <span class='choiceText' onclick='sceneTransition(`gallery`)'>go on with your day</span>. "+data.story.dollName+" can probably handle herself.");
			}
			writeText("But, if you really feel like you need to know what's going on...");
			writeText("...");
			writeSpeech(data.story.dollName, "doll", "Ngf! NFF!");
			writeSpeech(data.story.sisterName, "jean", "Ah, damn! You're a noisy little sextoy, aren't you?");
			writeDrawn("images/drawn/doll/scene3-1.jpg", "Art by OuttaSync");
			writeText(""+data.story.sisterName+"'s dick is a lot smaller than it usually is, not that she has a consistent size anymore. Probably to avoid tearing "+data.story.dollName+"'s body in half.");
			writeText(""+data.story.dollName+"'s body inflates like a balloon as what must be a full pint of jizz is pumped into her body. She can't even form words anymore, and is just babbling incoherently.");
			writeText("Alright, you can come in now little bro.");
			writeText("You push open the door, not sure how she knew you were here.");
			writeText("Before saying anything, "+data.story.sisterName+" slides "+data.story.dollName+" off her dick and tosses her over to you.");
			writeSpeech(data.story.sisterName, "jean", "She thought she'd improve our relationship by talking to me, not that we need it. You know, if you wanted to cum, I could have just turned your dick into a faucet for a day. Metaphorically, I mean.");
			writeText("There are a lot of conflicting emotions going through your mind right now.");
			writeSpeech(data.story.sisterName, "jean", "Hey. Using a doll for emotional support is fine. This isn't a hellscape, you can keep a jizzrag, but if you need to talk to someone me and mom are always here.");
			writeText("You can't think of a response, and dollName is still quivering in your hand.");
			writeSpeech(data.story.sisterName, "jean", "Well, mom is still a work in progress. Anyways, out. If you still feel bad later, I can wash the toy for you.");
			writeText("...");
			writeText("You're back in your room battling with a flurry of conflicting thoughts and feelings.");
			writeSpeech(data.story.dollName, "doll", "Heeeey buuudy~");
			writeText("Meanwhile "+data.story.dollName+" is high on jizz.");
			writeSpeech(data.story.dollName, "doll", "Heeey. Your sis's actually pretty nice. You just gotta tell her how you feel, ya know? And a really great golden rule... A gr-*hic*! Remember...");
			writeDrawn("images/drawn/doll/scene3-2.png", "Art by OuttaSync");
			break;
		}
		case "vr1": {
			writeText("You walk through the carved entryway and travel deeper into the cave. Soon, darkness surrounds you, and you can feel a presence beside you.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Who dares to trespass my lair? Who are you to throw away what life you've been allowed to keep?");
			writeSpeech("Elizabeth", "vr", "! I am princess of the kingdom of flowers, heir to the throne! My name is Elizabeth. I have been called here by the grace of God, I seek to cleanse the kingdom of an unholy curse!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "You needn't shout, I'm standing right here. Can you not see in the dark? And what do you mean by the voice of G-");
			writeText("The voice goes quiet, and you can feel the stare of leering eyes.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "*Ahem*<br>Of course, by the grace of God. I am a priest of His light, and I can offer you what you seek.");
			writeSpeech("Elizabeth", "vr", "Truly? Oh praise be, so you can end this madness?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "No, I am not his vessel or his hand. All I can offer is to give you the strength to bring fortune back to the kingdom.");
			writeSpeech("Elizabeth", "vr", "Me? Well, if He has chosen me, I must answer. What must I do, Father? I will suffer any burden to save my people?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Any burden?");
			writeText("The tone of the question catches you off your guard. Were this not a man of the cloth, you would be certain that he was a garden-variety pervert.");
			writeSpeech("Elizabeth", "vr", "Any burden, without doubt. Please, what must I do?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Very well. The curse was born from a lack of faith in the heavens. The people of this kingdom have succumb to sin. You-");
			writeSpeech("Elizabeth", "vr", "Heavens, no! The people of this kingdom are kind and just! The temple is in fine repair thanks to volunteer work, the children are fed and educated, and we've the largest supply of puppies in the land! How can we have strayed from His teachings?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Shut up, no interrupting. What men do in public is different from behind closed doors. Every man in the kingdom has dreamed of catching you alone in an alley and stripping you bare, forcing you to learn to love as they-");
			writeSpeech("Elizabeth", "vr", "Forbidden love? Out of wedlock? Never!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "... Anyways, to cleanse the land you must take upon the weight of their sin. To indulge in their weakness to give them strength.");
			writeSpeech("Elizabeth", "vr", "That sounds legitimate. How do I do this?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "I will place an unholy mark upon your body which will draw the temptations of men and women to you. Their desires will course through your veins, and you must indulge them as they arrive. Lift your dress.");
			writeSpeech("Elizabeth", "vr", "I understand, I think. You must place the mark upon what must not be seen. For God, I will comply.");
			writeText("You begin to life your dress, showing off the forbidden, yet tempting flesh of your ankle.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "... Are you fucking with me? Higher, woman. To where you'd bear children.");
			writeText("Though the act is unspeakable, eventually you are convinced to allow the priest to touch your exposed midsection. As a man of the cloth, he would surely never take advantage of the moment and stare at your undergarments, but you still feel nervous nonetheless.");
			writeText("You can see the glow of the spell illuminate the room as a sigil is drawn into the flesh in front of your womb. Though you cannot see it, you can already feel its influence over your mind.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "It is done. I've hidden the sigil from sight so you won't be burned at the stake should you be discovered. Return home and bear this indecency for one month, and the plague shall end.");
			writeSpeech("Elizabeth", "vr", "Thank you father, I shall complete these trials!");
			writeText("With that you leave the priest in his suspiciously dark cave, and return home.");
			writeText("...");
			writeText("You are chastised quite a bit for having stolen a horse, but all the while your mind is on your divine mission. Ever since you've returned to the castle you've felt... Strange.");
			writeText("Your tutor's words are ignored as you can feel a growing heat inside you, and you stumble. Quickly you are ushered to your room, where you have a chance to rest.");
			writeText("Still, the heat persists. You strip free from your clothes, and the heat is no longer insufferable. The air is stagnant here, hardly thinking of anything you sneak free from your room, stark naked.");
			writeText("");
			writeBig("images/drawn/vr/1-1.jpg");
			writeSpeech("Elizabeth", "vr", "Oh my. I... I can't believe I'm doing this...");
			writeText("Soldiers patrol the hallways, but you've lived long enough to know their route by heart. As you passes by you dart into a corner, your hands barely able to cover your ample breasts and pussy.");
			writeText("As your hand brushes your nipples you tremble and the heat from your womb flares, begging for relief.");
			writeSpeech("Elizabeth", "vr", "Ah, to pleasure myself freely. Is that what I must do now? I am not some whore, but...");
			writeBig("images/drawn/vr/1-2.jpg");
			writeSpeech("Elizabeth", "vr", "Ah! Goodness. The heat... I want more... I can't stop!");
			writeText("Your hands go lower to soothe your aching lips. You feel as though you've gone into heat. Here, exposed, you are fingerfucking yourself to a messy orgasm.");
			writeBig("images/drawn/vr/1-3.jpg");
			writeSpeech("Elizabeth", "vr", "Ngh! Yes! More! Cumming!");
			writeBig("images/drawn/vr/1-4.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Did you hear something?");
			writeSpeech("Elizabeth", "vr", "Hah... Hah... I must... Escape.");
			writeText("...");
			writeSpeech("Elizabeth", "vr", "That felt good. And even if it was wrong, to follow the order of God is just! Should I have another desire like that...");
			writeText("The heat from your womb ignites again as you run through the halls.");
			writeSpeech("Elizabeth", "vr", "Then I must surely accommodate them.");
			writeText("...");
			writeText("Among the castle's guard, a rumor began to spread of a banshee roaming the halls. The brave patrolmen were not daunted however, even when they would find puddles of ectoplasm on the ground.");
			break;
		}
		case "vr2": {
			writeText("The dungeon pathway eventually gives way to a tunnel of dirt and cobblestone. You may your way through the tunnel and push open the false wooden wall to emerge in a small hut in an abandoned area of the castle town.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Good, very good, princess.");
			writeSpeech("Elizabeth", "vr", "Father, I can hear you more clearly now!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Yes, you're free from the castle's grasp now. Strip, and I'll begin the incantation.");
			writeText("There's no hesitation in your actions. Even in the tunnel you could feel the mark of your trial drawing in more sin from the townspeople above. Dozens of people walk the streets here, each far worse at controlling their desires than the castle's guard.");
			writeText("Soon, the air begins to shimmer around you and a faint sigil appears in the air above your head.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "It is done. Only God can see you now. Go into the square and... Do what comes naturally.");
			writeSpeech("Elizabeth", "vr", "I understand. For my country.");
			writeText("...");
			writeBig("images/drawn/vr/2-1.jpg");
			writeSpeech("Elizabeth", "vr", "Ehehe! I'm totally naked in the town square! My tits and pussy are totally uncovered!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "The spell subdues your voice as well, but you should move to another spot. Someone could bump into you here.");
			writeSpeech("Elizabeth", "vr", "Gonna mas-tur-bate~! Gonna mas-tur-bate~!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "... Are you listening to me?");
			writeBig("images/drawn/vr/2-2.jpg");
			writeSpeech("Elizabeth", "vr", "Ehehe! I'm totally naked in the town square! My tits and pussy are totally uncovered!<br>Ah! I'm already leaking! It burns so good!");
			writeSpeech("???", "scripts/gamefiles/none.png", "... So then what happened?");
			writeSpeech("Elizabeth", "vr", "Ngh! People are walking right next to me and they don't even know what their princess is doing!");
			writeBig("images/drawn/vr/2-3.jpg");
			writeSpeech("Elizabeth", "vr", "Ah, my nipples feel so good! Give it to me, all your feelings and desires!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "<i>I expected this to work faster, my lord won't be pleased with such a small amount. Maybe if I...</i>");
			writeBig("images/drawn/vr/2-4.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Right. So then Bertram's daughter just... The fuck?");
			writeSpeech("Elizabeth", "vr", "...");
			writeSpeech("???", "scripts/gamefiles/none.png", "... You see that too, right Tina?");
			writeSpeech("Elizabeth", "vr", "You... You can see me?");
			writeText("Your heart skips a beat. Every rational part of your brain tells you now to flee, to escape and save the royal family the embarrassment of their only daughter being found naked, masturbating in the town square.");
			writeText("But another part of your body is in control. Women are shocked, but envious. Men desire your body. You being completely exposed before their eyes is awakening dark thoughts within them, and those desires flow directly into your cursed mark.");
			writeBig("images/drawn/vr/2-5.jpg");
			writeSpeech("Elizabeth", "vr", "Ehehe! Ehehe, yes! Everyone's watching me!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Is that the princess?");
			writeSpeech("???", "scripts/gamefiles/none.png", "Thomas, avert your eyes!");
			writeSpeech("Elizabeth", "vr", "Feels so good! I'm playing with my pussy in public~! Gonna... Gonna...!");
			writeBig("images/drawn/vr/2-6.jpg");
			writeSpeech("Elizabeth", "vr", "Cumming~~~!");
			writeText("The spray of juices covers the cobblestone pathway. People are too shocked by the display to move. Pants become strained as you can feel the eyes of the townspeople upon you.");
			writeText("And just like that, you disappear before their eyes.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "You've done well today. Leave, before someone realizes how you pulled off the disappearing trick.");
			writeSpeech("Elizabeth", "vr", "So good... More...");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Hmm. I might need to get out out of there myself...<br>No matter, I've more than enough strength stored up now.");
			break;
		}
		case "vr3": {
			writeSpeech("Elizabeth", "vr", "Father? A word? I cannot read from this book. It is writen in some unholy pagan language.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "That's just regular text in messy handwriting.");
			writeSpeech("Elizabeth", "vr", "The unholy markings burn my virgin eyes. There must be another way to fight what plagues this land.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "...I'll cast the spell, you just having touched the book is enough to dispel the defenses.");
			writeSpeech("Elizabeth", "vr", "You make the sacrifice which no one else can. Thank you. Now, I must get to my father's speech.");
			writeText("...");
			writeBig("images/drawn/vr/3-1.jpg");
			writeSpeech("King Charles", "scripts/gamefiles/none.png", "And so, now more than ever, out people must stand united before God.");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Look at Princess Elizabeth. She remains so composed.");
			writeSpeech("Guard B", "scripts/gamefiles/none.png", "I'd heard she'd locked herself in her room for days. Perhaps because of the ghost in the castle?");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Hardly. Such a benevolent woman would have befriended even a dark spirit on sight.");
			writeText("Although the higher-ups in authority remained silent as the king's speech droned on, the common guardsmen would whisper anecdotes between each other to pass the time.");
			writeText("Neither one realized however that dark magic was in the air. Your work in obtaining the tome is proving useful, as the warlock's summoning spell is nearing it's end.");
			writeText("With such a massive crowd, it almost strikes you as strange that the mark is not bending your will, that you are not on the ground exposing yourself to the kingdom. Perhaps it is that you have finally conquered your trials?");
			writeBig("images/drawn/vr/3-2.jpg");
			writeSpeech("Elizabeth", "vr", "Oooh!");
			writeText("Without warning, tentacles come into existence within your dress.");
			writeSpeech("King Charles", "scripts/gamefiles/none.png", "Balance your lives, bear the burden of suffering for god health, and the burden of seclusion to prevent the plague's spread.");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Did you just see that? Did the princess just let out a yelp?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Elizabeth, calm yourself! This is another test!");
			writeSpeech("Elizabeth", "vr", "<i>Father!? Am I hallucinating, or did I just lose my virginity?</i>");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Compose yourself! This is a manifestation of mankind's desire. Let it use you.");
			writeBig("images/drawn/vr/3-3.jpg");
			writeText("The tentacle remains still for the moment. The limb of the creature inside you is complacent just to allow your body to adjust.");
			writeSpeech("Guard B", "scripts/gamefiles/none.png", "You must have been hearing things.");
			writeText("The king's speech drones on yet longer, but rather than stand with pride as the nation's glorious rose, you are barely keeping a straight face as a demon tarnishes what was once a well-protected chastity.");
			writeText("Wet sounds are almost audible to the people around you as the creature suddenly bunches itself up.");
			writeBig("images/drawn/vr/3-4.jpg");
			writeText("And thrusts itself deep enough to depress the entrance to your womb.");
			writeSpeech("Elizabeth", "vr", "Mmmm~!<br><i>It really is... So deep~ This is so much better than my fingers!</i>");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Holy shit...");
			writeSpeech("Guard B", "scripts/gamefiles/none.png", "I... Is she having an orgasm?");
			writeText("The edges of your dress try valiantly to keep your dignity intact as the monster takes ownership of your body. The sudden onset of lust is drawn from whoever can see you, and feeds the monster further. Bumps begin to slide up it's length.");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "No way, we must be misunders-");
			writeBig("images/drawn/vr/3-5.jpg");
			writeSpeech("Elizabeth", "vr", "Cumming~!");
			writeText("Steadily the creature begins to pump its eggs into your womb, stuffing what tainted semen will fit in there as well for good measure.");
			writeSpeech("Elizabeth", "vr", "<i>It's inside me! I'm being made to cum by a hellspawn's eggs!</i>");
			writeText("Although none can see it, the energy collected by the princess's deeds begins to spread across the massive crowd. Suddenly men and women alike find something else on their mind as the king prattles on.");
			writeText("With it's purpose complete, the creature begins to wither and fade away. You don't adjust your dress for a time, casting a glance and a wink to your audience.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "The deed is done, the energy is collected. This kingdom will be seeing a great wave of change by the time the sun sets.");
			break;
		}
		case "vr4": {
			writeBig("images/drawn/vr/4-1.jpg");
			writeBig("images/drawn/vr/4-2.jpg");
			writeBig("images/drawn/vr/4-3.jpg");
			writeBig("images/drawn/vr/4-4.jpg");
			writeBig("images/drawn/vr/4-5.jpg");
			break;
		}
		case "vr5": {
			writeBig("images/drawn/vr/5-1.jpg");
			writeBig("images/drawn/vr/5-2.jpg");
			writeBig("images/drawn/vr/5-3.jpg");
			writeBig("images/drawn/vr/5-4.jpg");
			writeBig("images/drawn/vr/5-5.jpg");
			writeBig("images/drawn/vr/5-6.jpg");
			break;
		}
		default: {
			writeText("This event is not yet finished, but do not fret! You've still unlocked the ability to view this scene later via the gallery. In a future version, once this scene has been completed you'll be able to watch this scene from there so long as you have a laptop.");
			break;
		}
	}
}

function writeZombieEvent(n) {
	document.getElementById('output').innerHTML = '';
	switch (n) {
		case "basic1": {
			writeText("You're so exhausted you barely even register the feeling as the zombie pushes you down into a puddle of running rainwater. Try as you might, you don't have the strength to resist as she rips your pants off.");
			writeSpeech("You", "zombie", "No! Please, stop!");
			writeText("She either can't understand you or doesn't care, either way she doesn't stop as she rips off your panties. She tries to thrust right in but is stopped as her dick is just way too big to fit inside of you. You feel relieved for almost a second until she starts jacking herself off just inches away from the entrance to your pussy.");
			writeText("After a few seconds she spurts out a dollop of thick precum onto your labia and lets go of her dick. You try to squirm away, but she grabs you by the throat with one hand as she starts rubbing her jizz into your skin with the other.");
			writeText("Her fingers thrust inside of you, covering the entrance to your vagina with her infectious dickslime. Everywhere it touches you feel your skin grow puffy and sensitive. For as disgusting as you feel right now, her fingers feel really, really <b>good</b>.");
			writeText("But before you get the chance to start enjoying the sensations they've already stopped. She pulls the hand that was just fingerfucking you and puts it around your neck as she positions the head of her dick against your womanhood.");
			writeSpeech("You", "zombie", "No...");
			writeText("Your objections are a lot quieter now, but that's just because you're being choked. It's not like you wanted to become a mindless fuck machine, right?");
			writeText("But she doesn't care about any of that as she presses dick dick against you and pushes. Inch after inch sinks into you as you resist with all the might you can muster.");
			writeText("And it's enough to stop her. A few inches in and you're just too tight to take any more. The situation is hopeless, no one is coming to save you, but this last act of defiance is enough to keep you focused and in the moment.");
			writeText("Until she pumps another load of precum into you. The pain of your resistance starts to fade and firecrackers start going off in your brain as your body starts to relax against your will. She pushes deeper and deeper inside of you before she starts pulling out.");
			writeBig("images/zombie/basic1-1.gif");
			writeText("She's relentless in her thrusting, and with every few thrusts comes another load of precum that makes the situation feel even better. Every time you absorb her juice into your body, your infection grows more complete.");
			writeText("With one big thrust you can feel her dick impact the entrance to your womb, but instead of body-clenching pain you feel spine-melting pleasure. She starts cumming, real jizz instead of precum, and you <b>feel</b> it being pumped into your womb.");
			writeText("You can feel your body changing by the second. Your breasts start growing and you feel the entrance to your womb start to dilate in preparation for becoming a brand new dick.");
			writeText("But she isn't done with you yet. She starts thrusting again to prolong her orgasm and the tip of her dick kisses your womb's entrance over and over again until her dick's tip pushes through. She pushes her head in, pumping her jizz directly into you stuffing you full of her infected milk.");
			writeBig("images/zombie/basic1-2.gif");
			writeText("She tries to pull out but stops and just starts tugging. Your womb, desperate for more, is wrapped around the head of her dick and won't let go. She keeps getting more and more forceful and pushes back in before trying to pull out.");
			writeText("After an audible *POP* she pulls herself free, and you start squirting her infected load out of your body. With every squeeze you push out more, and the bulge of your overstuffed womb starts to flatten. After one last push you squirt the cum a good few inches out, but you feel something else getting pushed out as well.");
			writeText("You look down, and standing at full mast is a brand new dick. You can feel a heavy pair of balls below it large enough to rest in the puddle of water beneath you.");
			writeText("Your mind can't hold a complete thought anymore. This is your new life.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "basic2": {
			writeText("The zombie pushes you down and starts rubbing herself against your face, covering your features in the sweat from her dick and balls to mark you with her scent. Once she's done that she grabs you by the hair and presses the head of her dick against your lips, but your keep your mouth firmly shut.");
			writeText("Frustrated, she throws you to the ground and, with one smooth motion, rips off your pants.");
			writeSpeech("You", "zombie", "No, wait! You can use my mouth instead!");
			writeText("You open your mouth and wiggle your tongue around to tempt her, and it actually works. She lets you sit back up and presses her dick against your lips again.");
			writeText("You lay some gentle kisses onto her head and stroke her shaft with your hand. Quickly she takes a sharp breath and her balls tighten. Seeing the signs, you point her dick away from you and start licking the shaft. Her sweat makes your tongue tingle, like a sour candy as she pumps a glob of precum onto the floor.");
			writeText("The room is quickly filled with a heady scent. The precum is thick and cloudy, but your attention is pulled away from it by the zombie growling.");
			writeText("She obviously doesn't approve of the waste, and grabs you by the hair and forces her dick into your mouth. Out of fear of what she'll do to you if you don't comply, you make sure she can't feel your teeth.");
			writeText("The sensation is overwhelming, her sweat is all at once salty, bitter, and sweet like honey. She delivers some shallow thrusts punching the back of your throat but never pushes past it. With a grunt, it becomes clear that she wants you to taste this next load.");
			writeText("A dollop of precum is pumped out, this time directly onto your tongue. Your mouth feels like it's going numb, tingling like you just chomped on a giant mint. You know you should hold it in your mouth and spit it out as soon as you can, but...");
			writeSpeech("You", "zombie", "*Gulp*");
			writeText("And just like that, you're <b>infected</b>. You can feel the load as it goes down your throat and into your stomach. Her cock pulses in your mouth and she decides its time to go even deeper. As she pushes herself into your throat, you can feel your body changing.");
			writeText("Your clit is rubbing against your suddenly much-tighter panties, and you feel your pussy start to gape open. You try to clench up to tighten it closed, but each time yo do you feel a lovely squeezing sensation. One last squeeze is all it takes for you to start cumming as you feel an explosive pleasure wash over you. The zombie unsheaths herself from her throat to reach down and tear off your panties to set your newborn balls and shaft free.");
			writeText("You can feel your pelvis clench as you spurt out a small load of clear fluid, but you still feel really backed up. You feel dazed, but you also want more as you wrap your lips around her shaft again.");
			writeBig("images/zombie/basic2-2.gif");
			writeText("She pushes herself back inside you and you offer no resistance. At this point your gag reflex is a thing of the past and you're loving every pump of precum she spurts down your throat.");
			writeText("Soon enough your own cock is at full mast and she hilts herself balls deep inside of you before she starts cumming for real. After only a few spurts though, she starts to pull out.");
			writeText("You try to stop her, sucking on her dick with all your might, but she pushes your head and slams you into the wall freeing herself.");
			writeBig("images/zombie/basic2-1.gif");
			writeText("She jacks herself off before she fires another rope of sticky jizz onto your face, and then she steps back to spray another onto your cock. You feel yourself changing again as pleasure starts to build up inside of you, and you <b>spuuurt</b> out a thick load of sludge-like cum. It's more like jelly than jizz as you pump out every last bit of the contents of your old womb to make room for new infectious sperm.");
			writeText("Your ability to speak is long gone and your brain is foggy as you sit and enjoy the new sensations.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "basic3": {
			writeText("You slowly sneak up behind the zombie as thoughts run through your head. Your brain is saying things like 'Don't leave your weapon behind!', 'Don't fight her without a weapon!' 'Don't tear your clothes off so your fat dick can swing freely!'");
			writeText("You ignore them as you tackle the zombie to the ground and roll her over. She's startled, but doesn't fight back once you lay your dick on top of hers.");
			writeText("Yours is larger than hers is, and you literally rub in that fact by grinding your dick into hers. You're excited to be the one doing the fucking for a change, but it doesn't go according to plan as the feeling of her shaft rubbing against yours feels <b>really</b> good.");
			writeText("You frot against her until you feel your balls clench up and you prematurely start spurting your dickmilk onto her shaft. After three shots your dick has stopped firing, but you're still rubbing against her until she pushes you away.");
			writeText("She rubs her shaft to lubricate it with your cum and starts sinking her dick into your virgin hole. The feeling of her dick spreading you apart feels fantastic until she bumps up against something that makes you quiver on the spot.");
			writeText("She thrusts a few times trying to push past the block, your fat prostate is enough to stop her from getting any further until she <b>SLAMS</b> past it.");
			writeBig("images/zombie/basic3-2.gif");
			writeText("The feeling of your bitch-button getting flattened is enough to make you start pumping out a fresh load of dickmilk much larger than the first. She hilts herself deep inside you and you rub your hand along the bulge in your midsection, appreciating the outline of her head as she uses you like a human fleshlight before she pushes you down and starts thrusting.");
			writeBig("images/zombie/basic3-1.gif");
			writeText("You don't have any words as you feel your prostate being ground into paste, but you do have some for every time her massive balls slam into yours.");
			writeSpeech("You", "zombie", "Oh FUCK! YES. YES. YES.");
			writeText("You love every second of it, you feel your balls tightening for the third time as she rearranges your intestines.");
			writeText("...");
			writeText("By the end of it you're still in control of yourself. Your inoculation means that you can't go full zombie like the rest, but that doesn't mean anything as you suckle on your new master's dick to prepare her for round two.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "horde1": {
			writeText("You fling a marble from your bag and it *PLING*s off the hood of a distant car.");
			writeText("One marble after the other is thrown, and you make your way a good distance through the mess of cars. The zombies are in a frenzy now, confident that there's a human in the area, but they don't know where.");
			writeText("You're about to throw another as you turn the corner of a broken-down police cruiser as you make eye contact with one of the infected.");
			writeText("She reacts much more quickly than you do. You barely have time to dodge out of the way of her tackle, and you drop your bag of marbles onto the road as you do. Thinking quickly, you plant your boot in her face as she goes for another lunge, pushing her down a small incline.");
			writeText("With her out of the way, you break into a sprint to escape the highway, only to stop a few steps later as you realize you've been surrounded.");
			writeSpeech("You", "zombie", "Fuck.");
			writeText("There's an unmistakable hunger in their eyes. In every direction, they block all avenues of escape.");
			writeSpeech("You", "zombie", "Please, no!");
			writeText("...");
			writeBig("images/zombie/horde1.gif");
			writeSpeech("You", "zombie", "Fuck! Yes!");
			writeText("You tune changed quickly once you got some infected precum in you. At first it was awful. They had no idea of the concept of how to take turns, so the horde wasn't satisfied until you had a dick in your mouth and ass, and two at once penetrating your once-tight pussy.");
			writeText("It wasn't all that bad though. The hopelessness of the situation made it a lot easier to give in.");
			writeText("You could feel the rumbling of your body changing earlier, now whenever they hit the back of your pussy they bump against something that sends shives down your spine. Their thrusts get more and more shallow until eventually they're force to pull out, and as they do two fat balls pop out of what used to be your vagina.");
			writeText("You're one of them now. And until you can satisfy the whole crowd with your mouth and ass, you're the bottom bitch around here.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "horde2": {
			writeText("You want to punch your brain. Of course, you weren't thinking with your head when you took the route down the highway. But you're pretty sure your fucked-up half-zombie brain would enjoy a punch to the dick.");
			writeText("You never had a chance. The inclines on the sides of the road were flooded, so you had to walk down the road directly using the cars for cover. You bumped face-first into a zombie's dick, now here you are.");
			writeText("To your credit, you actually tried to fight back. Sure, it was more playful slapping than fighting, but at least you tried.");
			writeText("Some of them simply walk by and pay you no mind, probably on the lookout for some fresh meat to infect. Others haven't had a chance to stick their dick into something for days and really need some relief.");
			writeBig("images/zombie/horde2.gif");
			writeText("Maybe someday all of them will have left you alone for a better source of fuckmeat. You won't be the same though, not that you care anymore.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "siren1": {
			writeBig("images/real/general/sissy9.gif");
			writeText("Test for siren event 1.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "siren2": {
			if (data.zombieData.rimDisabled == false) {
				writeBig("images/zombie/siren2.gif");
				writeText("Test for siren event 2.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If you should for some reason want to watch it, you can still view it in the gallery after changing these settings.");
			}
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "hunter1": {
			if (data.zombieData.beastDisabled == false) {
				writeBig("images/zombie/hunter1.gif");
				writeText("Test for hunter event 1.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If you should for some reason want to watch it, you can still view it in the gallery after changing these settings.");
			}
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "hunter2": {
			if (data.zombieData.rimDisabled == true || data.zombieData.beastDisabled == true) {
				writeText("This scene has been disabled by your fetish settings. If you should for some reason want to watch it, you can still view it in the gallery after changing these settings.");
			}
			else {
				writeBig("images/zombie/hunter2.gif");
				writeText("Test for hunter event 2.");
			}
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "worms1": {
			writeText("The feeling of a soft pillow and softer blanket offer a comfort you haven't felt in weeks. The dingy matress you have at the safehouse is simply no comparison. Soon enough, what was intended to be just a nap is drawn out into a deep sleep");
			writeText("...");
			writeText("Vision flutters across your eyes. Tingling sensations pass through your limbs and you feel a presence spread across your body.");
			writeText("The soreness of your eyelids tells you that you're tired, but still awake. Strangely, you feel a breeze over various parts of your body. Stranger still, you can't move a muscle.");
			writeText("Panic begins to wake you up as your skin crawls, but you're completely paralyzed.");
			writeText("You look down, head propped up on the pillow, and see the reason for the feeling of cold air on your body.");
			writeText("Small, wriggling worms are creeping across your body, a mucous that covers them has eaten through the fabric of the blanket and chunks of your clothes.");
			writeSpeech("You", "zombie", "Nnnn!");
			writeText("They're exploring across your body. Wherever they touch feels like a mild coursing electricity.");
			writeText("You try to struggle, to roll off the bed, to do anything, but to no avail.");
			writeText("The panic within you burns even brighter as you can feel the sensation of one of them getting through your underwear, tiny feelers rubbing against the outer lips of your folds.");
			writeText("The creatures continue crawling upon your skin, coating your body with an aphrodisiac meant to ensure compliance once the paralysis has worn off. Against your will the sensations, the teasing of the creatures has caused you to grow wet.");
			writeText("Entirely working off instinct, this is the signal to the worm at the entrance to your pussy to push forwards in search of a host.");
			writeSpeech("You", "zombie", "NNNN-!");
			writeText("No one hears your screams as the worm inches inside of you. The aphrodisiac coating it's body makes the sensations feel incredible in combination to the worm's 2-inch thickness.");
			writeText("You suck in a breath trying to focus through the sensation of lightning coursing through your body as you orgasm. The paralytic is beginning to wear off, but it's too late. The other worms smell the scent coming from your quivering pussy and have begun to swarm around your hole.");
			writeText("One after another begins to push inside of you as the first presses against the entrance to your womb. Feelers press against the closed cervix and your body spasms.");
			writeText("Your movement scares the remaining worms away, but there are still four inside of you. Your walls clench around them, and they squirm inside of you in response.");
			writeSpeech("You", "zombie", "AAAH~!");
			writeText("The worm in front presses itself hard against the entrance to your womb, trying to squirm its way inside. The chemical coating causing your body to welcome, rather than reject the intrusion.");
			writeText("You can feel your insides spasm to allow the worms inside, and as they begin to push through your back arches and you <b>spray</b> all over the bed in a mixture of squirt and the worm's fluid.");
			writeText("There's a small pricking sensation as they latch onto the walls of your womb and begin to pump body-altering chemicals into your bloodstream. Your eyes dilate as a cool calmness washes over you.");
			writeText("Barely conscious, you can feel yourself roll over and prop your ass into the air. Instinctively you know you're signaling for the escaped worms to return.");
			writeBig("images/zombie/worms1.gif");
			writeText("To return to a willing host.");
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "worms2": {
			if (data.zombieData.wormDisabled == false) {
				writeText("The feeling of a soft pillow and softer blanket offer a comfort you haven't felt in weeks. The dingy matress you have at the safehouse is simply no comparison. Soon enough, what was intended to be just a nap is drawn out into a deep sleep");
				writeText("...");
				writeText("Vision flutters across your eyes. Tingling sensations pass through your limbs and you feel a presence spread across your body.");
				writeText("More than that, you can feel yourself at a full erection, your shaft standing unrestricted by the underwear you were wearing.");
				writeText("You're completely paralyzed, all you can do is look down to stare at the head of your cock, and the creature slowly crawling up the side of your shaft.");
				writeText("There's a slime coating it's body, and as it crawls along your skin it leaves a powerful tingling sensation.");
				writeText("You lay there, motionless, watching with a disturbed curiosity as it reaches the head. It's tiny feelers rub along the sensitive flesh and you can already feel yourself starting to leak precum.");
				writeText("But the creature isn't satisfied to just sit and taste, and it positions itself directly at your urethra and begins to push itself inside.");
				writeSpeech("You", "zombie", "NNNN-!");
				writeText("This is where the real panic starts, as you struggle helplessly against the chemical paralysis.");
				writeText("It might be the creature's mucous, or it could be part of your infection, but rather than burning pain and tearing skin, all you feel are firecrackers in your brain as your cumhole stretches to accommodate the worm.");
				writeText("The feeling of a creature crawling down inside your dick is an alien one, even for someone who grew a dick just earlier today. Once you realize that the sensation is closer to pleasure than pain, your panic begins to fade.");
				writeText("Your eyes roll back in their sockets and you let out whining moans as the creature makes it past the halfway point. Your balls tighten and you hope that you'll find relief from the creature soon, but no dice.");
				writeText("The jet of cum you'd hope to fire across the bed is instead stuck, and the creature continues pressing on. The sensation that you're on the edge of an orgasm doesn't fade.");
				writeText("It travels farther down, set on finding the source of your cum. By the end of this, you'll be infected even farther.");
				writeText("You twitch and shake, mouth agape as the creature continues to coat the inside of your dick with an aphrodisiac. The tingling almost makes you wish that there were a zombie there who could fuck the hole to end the buzzing sensation.");
				writeText("The size of the worm left your urethra gaping slightly, and the hole winks every time your dick tries to push out an orgasm.");
				writeText("There's a pricking sensation as the worm rubs against your prostate, and you can feel a coolness enter your bloodstream.");
				writeText("Your body must be changing, because you pump out a massive load of cum that arcs through the air far enough to splatter against the wall. Your whole body clenches as your fire another rope, the room now smelling like fresh lemons coated in sperm.");
				writeText("You lift yourself up slightly and end up rolling off the bed, trying to feel for where the new changes to your body are, as a continuous stream starts to leak out of the head of your infested cock.");
				writeBig("images/zombie/worms2.gif");
				writeText("You can hear the sound of slithering in the walls as the scent of your tainted sperm begins to attract more of the creatures. The thought of more worms trying to fight their way into your perverted dickmeat causes another bit of splooge to ooze out of you.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If you should for some reason want to watch it, you can still view it in the gallery after changing these settings.");
			}
			if (data.story.currentScene != "zombieGallery") {
				writeText("<p class='choiceText' onclick='gameOver()'>Game Over</p>");
			}
			break;
		}
		case "survivor": {
			writeBig("images/zombie/survivor.gif");
			writeText("Test for survivor event.");
			break;
		}
		case "tainted": {
			writeText("The donuts are stale at best, and the glaze is certainly not fresh, but you've been eating nothing but rations for weeks now, so they taste better than anything you can even think of.");
			writeText("One, two, and three are already in your stomach before you start to feel a weird sensation wash over you. Had they gone bad? You try to set the fourth back down, but find you just can't and keep shoveling food into your mouth like a desperate pig.");
			writeText("You can feel the sensation growing, your body changing and your pants becoming tighter. Once you've eaten every one you're bringing the plate up to your mouth and licking the glaze off of it. It's salty taste overpowers your senses.");
			writeText("You feel dazed once the plate is clean, and you look around the room for anything else like it. When you can't find any you feel a pressure coming from your pelvis and you double over.");
			writeText("The sensation throbs and you feel your pussy lips start to spread like you're being fucked. Clenching only increases the pressure, so you relax and hear a muffled *POP* from your pussy and your pants suddenly feel way to tight. You slide them off and undo the clasp on your underwear, and...");
			writeBig("images/zombie/tainted.gif");
			writeSpecial("You now have a dick.");
			writeSpeech("You", "zombie", "Oh no, oh no no no...");
			writeText("You grasp it to make sure it's real, and it is. The sensation of pleasure that hits out as you grasp it ensure that it is 100% a real, fat, dick.");
			writeText("You feel your insides churning and hear a small gurgling sound as suddenly your dick pumps out a torrent of white slime onto the floor, pushing out what remains of your old womb. You should be panicking, but...");
			writeSpeech("You", "zombie", "Sho... Sho geeEEEEWD!");
			writeText("This is a real orgasm, not like the clenching and squirting from before. Once your balls have been emptied of white slime, you can actually see them inflating before your eyes as they start preparing sperm to infect others with.");
			writeText("But you pry your hands away from your dick. The slime on the floor smells FUCKING AMAZING! But you need to stay in control. You've just been infected, but you can still think rationally. Maybe you've infected yourself with a weaker version of the virus? If that's true, you're a walking vaccine now, but whatever the case you still need to get back home. Who knows what further infection will do to you?");
			if (data.story.currentScene != "zombieGallery") {
				data.zombieData.infected = true;
				writeText("<p class='choiceText' onclick='sceneTransition(`convenienceStore`)'>Go back to scavenging</p>");
			}
			break;
		}
		case "infected": {
			writeBig("images/zombie/infected.gif");
			writeText("Test for infected event.");
			break;
		}
		case "journalBasic": {
			writeBig("images/zombie/basic.jpg");
			writeText("These are the most common types of zed wandering out there. The virus has transformed them, man and woman, into sex-crazed machines. They don't need to eat or drink, and they're stronger than two men together. I've seen one almost leap a six-foot fence in a single jump.");
			writeText("Their weakness is that they're fucking stupid. They'll slam themselves against a door for hours and never even try the handle. They also need to sleep, and boy do they need to breed.");
			writeText("I've been watching the ones outside the building for a week now. They're disinterested towards each other most of the time, but when they're pent up they'll attack each other or just start stroking themselves on the spot. It only takes about a few hours for them to reach this point too.");
			writeText("Their sperm is how they spread the virus, some prefer to do it anally over orally. But their saliva and body fluids have an almost hypnotic effect and smell. I've seen some of the smarter ones just start pissing and jacking away outside of barricaded buildings until the survivors inside can't take it anymore. They also seem to understand enough to infect any food they can find laying around.");
			writeText("They cum differently too, it's more like they start leaking semen right away, pumping out entire liters before they finally cum for real in really viscous, sticky ropes.");
			writeText("I've found that a couple of air fresheners, swapped out every week can help prevent the smell, so long as nobody here opens a window.");
			writeText("<span class='choiceText' onclick='sceneTransition(`journal`)'>Finish reading the section</span>.");
			break;
		}
		case "journalHunter": {
			writeBig("images/zombie/hunter.jpg");
			writeText("Dogs infected by the virus. I think any breed can be infected, but I've only ever seen Mrs. Fincher's dobermans in the area.");
			writeText("Like the regular breed of zombies they don't need to eat or drink, but these ones can hunt via the scent of blood. They can track down people from a pretty huge distance away, and their speed has greatly improved too. I once saw a survivor driving a car through town. A hunter was able to catch up to the car as it was driving and jumped on top. It thrust itself through the open window, but I didn't see what happened after that. If they're like the regular zombies, it probably started spraying semen all over the inside of the car.");
			writeText("I've noticed that they're actually a lot less aggressive than normal zombies if you act submissive. Mrs. Fincher didn't even try to fight back, so the hunters were really gentle with her. That is, before she finished turning and started begging for rougher treatment.");
			writeText("I think they've moved on to the forest now, so there shouldn't be any hunters in the city at the moment.");
			writeText("<span class='choiceText' onclick='sceneTransition(`journal`)'>Finish reading the section</span>.");
			break;
		}
		case "journalSiren": {
			writeBig("images/zombie/siren.jpg");
			writeText("These fuckers are the most dangerous types I've ever seen. Normal zombies are tough to deal with, but they have weaknesses. These ones are smart, really smart. They can open doors, use tools, climb up ladders, the works.");
			writeText("They aren't anywhere near as strong though, I think I could take one in a fight if I had to, but the most dangerous part of them is their pheromones.");
			writeText("See, their bodies are way softer, and their dicks are so small I don't think they even can get erections. What they do is emit pheromones that turn men into sex fiends, and try to seduce the men into fucking their asses. They infect the men like an STD while still pumping spunk all over everything.");
			writeText("They got Tommy, so the building is compromised. I was able to stay safe and eventually everyone else left the building. Sirens still get horny like normal zombies but they can't cum from their dicks, so they need to keep an entourage with them when they aren't hunting. When they find prey they'll ditch their fuckbudies, who are still covered in pheromones.");
			writeText("The one that got Tommy was headed to the south last time I saw her, maybe she's heading to that unfinished place at Ridgewood?");
			writeText("<span class='choiceText' onclick='sceneTransition(`journal`)'>Finish reading the section</span>.");
			break;
		}
		case "journalWorms": {
			writeBig("images/zombie/worms.jpg");
			writeText("I've never actually seen one of these, but they sound terrifying. Supposedly they're the cause of the virus, they're tiny worms that crawl inside of your vagina or dick and start to transform you from the inside-out.");
			writeText("The guy who saw them said his house was infested with them. They got into his wife while they were sleeping, and it only took a few seconds once one got into her worm for her to stop crying and start squirting all over the bed. They got his son too, they slithered into his balls and while he said it hurt at first, his son's cock started pumping out load after load of thick cum. He got them out of the house but they started to turn into zombies. He said he just left one night while he heard his wife fucking his son in the ass...");
			writeText("He brought it up that they love the scent of lemons, which is the same scent as my air fresheners. Luckily he's from a town over, and they aren't the most mobile of types.");
			if(data.zombieData.cityZombie == true) {
				writeText("You hear a sound from behind you and turn around. While you were reading, the <span class='choiceText' onclick='sceneTransition(`cityZombie`)'>zombified previous resident</span> escapes the closet and is attacking you!");
			}
			else {
				writeText("<span class='choiceText' onclick='sceneTransition(`journal`)'>Finish reading the section</span>.");
			}
			break;
		}
	}
	unlockZombieScene(n);
	if (data.story.currentScene == "zombieGallery") {
		writeTransition("zombieGallery", "Back to the gallery");
	}
}