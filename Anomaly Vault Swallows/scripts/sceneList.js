function writeScene(scene) {
	console.log("Now writing scene ID " + scene + ", the time is " + data.player.time);
	switch(scene) {
		//System Locations
		case "start" : {
			writeBig("scripts/gamefiles/logo.png");
			writeText("Anomaly Vault is an adult game created by NoodleJacuuzi. You can find and keep up with all of my work, including Human Alteration App, Princess Quest, Rainy DayZ, and Hentai University at my master index here:");
			writeText("https://noodlejacuzzi.github.io/index.html");
			writeText("As a content warning this game features numerous bizarre fetishes which may be too extreme for some. At the bottom of this page you can find a fetish list, detailing the tags associated with each of this game's artifacts. If there's a specific topic you'd like to avoid, stay away from the related artifacts. This game contains no underage or scatological content.");
			writeText("In addition, there is a section called the Dark Vault. In here are several more divisive fetishes, currently including (temporary) male-to-female transformation. These scenes are optional for progression, and are not counted in the total scene count on the menu or in the logbook.");
			writeTransition("prologue", "Start the game");
			writeTransition("startWardrobe", "Change your profile image");
			//writeTransition("prologueSkip", "Skip the prologue");
			writeText("Other notes:");
			writeText("This game was commissioned via Patreon by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</p>");
			writeText("Swallows actually wrote some content for the game, you can unlock his scenes like normal, and he has a special section in the gallery. If you'd like to put your scene in the game, feel free to send it to me.");
			writeText("You can change your profile image in game by using the wardrobe in your room. You can also cheat in your room if you know a code.");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("I'm always open to comments or criticism. If you have an idea for an artist or scene or you'd like to suggest content of your own, you can shoot me a message at anytime on TFgames, F95zone, or my Patreon page at https://www.patreon.com/noodlejacuzzi");
			writeText("You can also send me a message on discord (I'm NoodleJacuzzi#4120) or an email at noodlejacuzzi@gmail.com");
			writeTransition("contentList", "See a breakdown of each artifact's content");
			writeText("You can feel your heartbeat pick up its pace as you hold the onahole in your hand. The soft texture is like skin, it almost feels like you're holding someone's hand.");
			break;
		}
		case "startWardrobe": {
			writeWardrobe();
			writeTransition("start", "Go back");
			break;
		}
		case "demo": {
			writeText("So that's all I've got for now. You should have a decent idea of the game's structure at this point. With the engine good to go each actual release would include 8-10 scenes, probably introducing two new artifacts with each version.");
			writeText("I'd be splitting my focus between this and other projects, but I think I could reliably get a new release for this game out every month.");
			writeText("Between work research, home use, and dream sequences there are quite a few directions to take each artifact. One thing you could do is let me know directly what you'd do with the artifact and I can implement that in game. 'I'd use the bracelet at the beach!' Then I write a beach scene.");
			writeText("I only showed off two of the girls, so here's a list of each girl I have images / code prepared for, I can use any of them pretty freely:");
			for (i = 0; i < data.story.length; i++) {
				writeMed(`scripts/gamefiles/characters/`+data.story[i].index+data.story[i].image+`.jpg`);
				document.getElementById('output').innerHTML += `
				<p class="centeredText">`+data.story[i].fName+` `+data.story[i].lName+`</p> 
				<p class="centeredText">`+data.story[i].desc+`</p> 
				`;
			}
			writeText("And with that everything I have to present is finished.");
			break;
		}
		case "contentList": {
			var researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('bracelet')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Reprehensive Bangle", "scripts/gamefiles/items/bracelet.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Unperceived Sex<br>Memory Alteration<br>Dubious Consent<br>Seduction of women in committed relationships");
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('erotibox')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Erotibox", "scripts/gamefiles/items/erotibox.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Corruption<br>Mind Control<br>Emma Watson Deepfake");
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('gas')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Exchange Gas", "scripts/gamefiles/items/gas.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Genderswap<br>Cock Worship");
			writeTransition("start", "Back to the start screen");
			break;
		}
		case "prologue": {
			writeSpeech("???", "scripts/gamefiles/logo.png", "Hello there! Whoever you are and wherever you came from, welcome to the Artifact Vault recovery office!");
			writeSpeech("???", "scripts/gamefiles/logo.png", "You're probably feeling a little bit like you've just come into existence, right? Not to worry, you've likely been alive for at least several years.");
			writeSpeech("???", "scripts/gamefiles/logo.png", "You're coming down off an amnestic high. Get too close to a dangerous artifact, huh? We've all been there. You, like many others in your office, have just been mind-wiped.");
			writeSpeech("???", "scripts/gamefiles/logo.png", "Now, we've all heard the stories about the downsides. Stories about erectil-");
			writeText("The screen goes dark, and the introduction video stops playing.");
			writeSpeech("Woman's Voice", "scripts/gamefiles/logo.png", "Hello?<br>Can you understand me?");
			writeText("After a second of confusion you nod your head and try to say something, but your throat is so dry it just comes out as a cough.");
			writeSpeech("Woman's Voice", "scripts/gamefiles/logo.png", "This speaker is one-way, so I can't hear you. But the fact that you didn't try to rape the window is a good sign. Try filling out the form in front of you.");
			writeText("You hear a *click* as metal bindings release your arms, and a small metal table lifts from the ground with a pencil and paper on it.");
			writeSpeech("Woman's Voice", "scripts/gamefiles/logo.png", "Use the pencil to fill out the form, and please do not attempt to pleasure yourself with either object.");
			writeTransition("prologue2", "Pick up the pencil");
			break;
		}
		case "prologue2": {
			writeText("First Name: <input type='text' id='nameSubmission' value='Swallows'>");
			writeText("Last Name: <input type='text' id='lastSubmission' value='Deeznuts'>");
			writeText("Age: <input type='text' id='ageSubmission' value='25'>");
			writeText("Favorite Color: <input type='text' id='colorSubmission' value='Blue'>");
			writeText("Here would be where you enter details about yourself and pick your character's image, including an option to disable the image from appearing on the left side menu. I'll put that selection in the actual release, so enjoy being a red blob for now.");
			//writeTransition("prologue3", "Finish");
			writeFunction("renamePlayer()", "Finish");
			break;
		}
		case "prologue3": {
			writeText("You place the filled out form back onto the table. Everything's... Hazy, to say the least.");
			writeText("There's a moment of silence before a large metal door behind you opens. A vaguely familiar face greets you.");
			writeBig("scripts/gamefiles/characters/assistant.jpg");
			data.story[1].met = true;
			writeSpeech("assistant", "", "Mr. "+data.player.lName+"! Glad you're back. After the fifth attempt management said we should give up on you.");
			writeText("She tosses you a coat and a change of clothes. Looking over yourself, you're wearing what almost resembles a hospital gown.");
			writeText("It's all coming back to you, you grabbed some earings, and...");
			writeBig("images/misc/dream1-1.gif");
			writeTransition("prologue4", "... Hello?");
			break;
		}
		case "prologue4": {
			writeSpeech("assistant", "", "Are you feeling alright? The amnestics should have blocked most of it out.");
			writeSpeech("player", "", "Yeah... Yeah I'm alright.");
			writeText("You are "+data.player.fName+" "+data.player.lName+", researcher at the Anomaly Vault Research Office, responsible for the research and potential applications of artifacts found around the world.");
			writeSpeech("assistant", "", "It'll all come back slowly, try not to push yourself. Mrs. Jensen says you're fine to head home for the day, so get some rest alright?");
			writeText("She steps aside after handing you a glass of water.");
			writeSpeech("assistant", "", "First door on the left, the drivers will take you home. Try not to recall the events of the research, alright?");
			writeTransition("prologue5", "Head home");
			break;
		}
		case "prologue5": {
			writeText("Everything's almost happening by itself. You're ushered into a black car with darkened windows, and in a flash the car's door opens again and you're allowed to leave.");
			writeText("You walk up to what is probably your doorstep and fish out a key on autopilot.");
			writeText("The place is warm and lived in, and a voice calls out to you from another room.");
			writeSpeech("roommate", "", "Welcome home. I picked up some-");
			writeBig("scripts/gamefiles/characters/roommate.jpg");
			data.story[0].met = true;
			writeSpeech("roommate", "", "Holy crap, you alright?");
			writeSpeech("player", "", "Yeah got splashed with some chemicals, I'll be alright, just need some rest.");
			writeSpeech("roommate", "", "Alright... I picked up some Chinese if you're hungry.");
			writeTransition("home", "'Thanks'");
			break;
		}
		case "cheat": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.</p>
				<p class='centeredText'>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='cheat()'>Submit</p>
			`;
			writeTransition("room", "Go back");
			break;
		}
		case "newDay": {
			if (data.player.currentScene != scene) {
				data.player.day += 1;
			}
			data.player.time = "Morning";
			updateMenu();
			checkDay();
			break;
		}
		case "laptop": {
			writeTransition("porn", "Look up porn");
			writeTransition("gallery", "View the gallery");
			writeTransition("home", "Finish up");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
				writeTransition("home", "Go back");
			}
			else {
				writePorn();
				writeTransition("laptop", "Go back");
			}
			break;
		}
		case "gallery" : {
			generateGalleryNav();
			writeTransition("room", "Finish up");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeTransition("room", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed(`scripts/gamefiles/characters/`+data.story[i].index+data.story[i].image+`.jpg`);
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeTransition("home", "Cancel and leave");
			break;
		}
		case "drive": {
			if (data.player.day > 1) {
				sceneTransition('work');
			}
			else {
				writeText("The car ride is silent and quick. The windows are kept blacked out to keep your identity hidden from the outside world.");
				writeText("Not only that, but you're completely cut off from the driver. It's a shame too, since some conversation might help pass the time.");
				writeTransition("work", "You've arrived");
			}
			break;
		}
		//Locations
		case "room": {
			if (data.player.time == "Morning") {
				writeBig("scripts/gamefiles/locations/morning.jpg");
			}
			else {
				writeBig("scripts/gamefiles/locations/room.jpg");
			}
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 0: {
					writeText("You're feeling way too tired to do anything right now.");
					writeTransition("newDay", "Go to bed");
					break;
				}
				case 1: {
					if (data.player.time == "Morning") {
						writeText("A soft knocking on your door wakes you up.");
						writeSpeech("roommate", "", "Hey, your ride's here. Black SUV with scary sunglass people.");
						writeText("You stretch out, a good night of sleep did wonders for you.");
						writeSpeech("player", "", "Be right out!");
						writeText("Unfortunately you can't skip out on work. Working with artifacts is great, but the option to stay and chill at home would be nice some days.");
						writeTransition("home", "Get out of bed");
					}
					else {
						writeTransition("wardrobe", "Open the wardrobe");
						writeTransition("gallery", "Review your research notes");
						writeTransition("cheat", "Cheat");
						writeTransition("newDay", "Go to sleep");
						writeTransition("home", "Leave your room");
					}
					break;
				}
				default: {
					if (data.player.time == "Morning") {
						if (data.player.day == 2) {
							writeSpecial("From now on, the drive to work, and dreamless nights will both be skipped.");
							writeText("The alarm is going off. Using the bracelet you could get out of it if you wanted.");
							writeText("Although if you decide to skip, your ride will leave without you.");
						}
						else {
							writeText("The alarm is going off.");
						}
						writeTransition("drive", "Get up and head to work.");
						writeFunction("nap()", "Sleep in till noon, skip work");
					}
					else {
						writeTransition("wardrobe", "Open the wardrobe");
						writeTransition("gallery", "Review your research notes");
						writeTransition("cheat", "Cheat");
						writeTransition("newDay", "Go to sleep");
						writeTransition("home", "Leave your room");
					}
					break;
				}
			}
			break;
		}
		case "home": {
			writeBig("scripts/gamefiles/locations/home.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 0: {
					writeText("You're still feeling groggy from the amnestics, you should probably head to bed once you're ready to sleep it off.");
					writeFunction("writeEvent('prologue1')", "Talk to "+roommateF);
					writeFunction("writeEvent('prologue2')", "Call the office");
					writeTransition("room", "Go to your room");
					break;
				}
				case 1: {
					switch (data.player.time) {
						case "Morning": {
							writeSpeech("roommate", "", "Morning. Sleep well?");
							writeSpeech("player", "", "Like a drunk rock. Thanks for the food.");
							writeSpeech("roommate", "", "No problem. You should probably get going soon.");
							writeText("She's already packing her bags, not much more you can do right now aside from make yourself presentable and leaving.");
							writeTransition("drive", "Head to work");
							break;
						}
						case "Evening": {
							writeText("Your drive home goes without incident. You keep the bracelet hidden, allowing you to smuggle it home.");
							writeText("If what you've done is discovered, a fate worse than death potentially awaits you.");
							writeText("But the bracelet also lets you dodge consequences too, so what you do with it is up to you. The freedom in your hands is tempting, but what to do with it?");
							writeSpeech("roommate", "", "Oh, hey! You're home a little early.");
							writeText(data.story[0].fName + " tosses a lipstick container into her purse.");
							writeSpeech("roommate", "", "I was just about to take a shower and head out. I think we've got some leftovers in the fridge.");
							writeText("An opportunity presents itself, test the artifact even further and live life with no consequences.");
							writeFunction("writeEvent('braceletHome1')", "Use the bracelet on " + data.story[0].fName);
							writeFunction("nap()", "Let her go and take a nap");
							break;
						}
						case "Night": {
							writeText("It's dark out and every sane person around has gone to sleep. It'd be best to head to bed now.");
							writeTransition("room", "Head to your room");
							break;
						}
					}
					break;
				}
				default: {
					switch (data.player.time) {
						case "Morning": {
							writeTransition("room", "Head to your room");
							break;
						}
						case "Noon": {
							checkForEvents();
							writeTransition("room", "Head to your room");
							break;
						}
						case "Evening": {
							checkForEvents();
							writeTransition("room", "Head to your room");
							break;
						}
						case "Night": {
							writeTransition("room", "Head to your room");
							break;
						}
					}
					break;
				}
			}
			break;
		}
		case "work": {
			writeBig("scripts/gamefiles/locations/work.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 0: {
					break;
				}
				case 1: {
					switch (data.player.time) {
						case "Morning": {
							writeSpeech("assistant", "", "Hey boss! I've got the new artifact in testing room A. " + data.story[3].lName + " said to get on it right away.");
							writeArtifact("bracelet");
							break;
						}
						case "Noon": {
							writeFunction("writeEvent('prologueMemo')", data.story[2].lName+"'s Memo");
							writeArtifact("bracelet");
							writeArtifact("erotibox");
							writeTransition("darkVault", "Request a Dark Vault artifact");
							break;
						}
						case "Evening": {
							writeText("You tug at the artifact on your wrist, but the bracelet isn't budging.");
							writeSpeech("player", "", "Fuck.");
							writeText("This thing isn't coming off, period. It's getting a bit late, so you should probably head home.");
							writeTransition("home", "Head home");
							break;
						}
						case "Night": {
							writeTransition("home", "Head home");
							break;
						}
					}
					
					//writeArtifact("coin");
					break;
				}
				default: {
					switch (data.player.time) {
						case "Morning": {
							checkForEvents();
							writeFunction("nap()", "Waste time");
							break;
						}
						case "Noon": {
							checkForEvents();
							writeTransition("home", "Go home early");
							break;
						}
						case "Evening": {
							checkForEvents();
							writeTransition("home", "Go home early");
							break;
						}
						case "Night": {
							writeTransition("home", "Head home");
							break;
						}
					}
					break;
				}
			}
			break;
		}
		case "darkVault": {
			writeText("Request authorized. Which artifact will you requisition?");
			writeText("WARNING: Dark Vault artifacts pose a significant risk to the researcher and, by extension, to Anomaly Vault. Great care has been taken to ensure that these artifacts cannot be removed from their testing area under any circumstance.");
			writeText("In the event of misuse, onstaff security will seal the testing rooms and the researcher inside. Great care must be taken with these items.");
			var researchStatus = 0;
			var researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].dark == true) {
					researchTotal += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						researchStatus += 1;
					}
				}
			}
			writeText(researchStatus+" of "+researchTotal+" total dark vault scenes obtained.");
			writeArtifact("gas");
			writeArtifact("gummy");
			writeArtifact("cage");
			writeArtifact("onahole");
			writeTransition("work", "Go back");
			break;
		}
		//Artifacts
		case "mirrorResearch": {
			writeBig("scripts/gamefiles/items/mirror.jpg");
			writeText("There are engravings on the mirror, when you look at one the reflection shifts.");
			writeText("The first engraving reads 'Little Men are Fun Toys'. In the reflection, you can see a younger, springier, yet more meek looking version of yourself.");
			writeText("The second engraving reads 'Public Fun Is Not Unusual'. In the reflection you're standing completely nude, yet you don't look embarassed about it at all.");
			writeTransition("mirrorResearch1", "Enter the 'Little Men Are Fun Toys' dimension");
			writeTransition("mirrorResearch2", "Enter the 'Public Fun Is Not Unusual' dimension");
			writeTransition("work", "Go back");
			break;
		}
		case "mirrorResearch1": {
			tempScene = 'work';
			if (galleryCheck('mirrorResearch1-1') == true) {
				writeSpeech("assistant", "", "Alright, you're clear. Try not to get felt up on a bus or something, the last few guests we've had underestimated daily life here.");
				if (galleryCheck('mirrorResearch1-2') == false) {
					writeFunction("writeEvent('mirrorResearch1-2')", "Take a train around town");
				}
				if (galleryCheck('mirrorResearch1-3') == false) {
					writeFunction("writeEvent('mirrorResearch1-3')", "Go see a movie");
				}
				if (galleryCheck('mirrorResearch1-4') == false) {
					writeFunction("writeEvent('mirrorResearch1-4')", "Go to a bar");
				}
				if (galleryCheck('mirrorResearch1-5') == false) {
					writeFunction("writeEvent('mirrorResearch1-5')", "Go to the red light district");
				}
				writeTransition("work", "Head back to your dimension");
			}
			else {
				writeEvent('mirrorResearch1-1');
			}
			break;
		}
		case "mirrorResearch2": {
			tempScene = 'work';
			if (galleryCheck('mirrorResearch2-1') == true) {
				writeSpeech("assistant", "", "Alright babe, forms are filled. Get those clothes off and you're free to roam the city. Stay clean, and stay away from sharp stuff. You don't have the instincts that come with the nudist lifestyle.");
				if (galleryCheck('mirrorResearch2-2') == false) {
					writeFunction("writeEvent('mirrorResearch2-2')", "Talk to some locals");
				}
				if (galleryCheck('mirrorResearch2-3') == false) {
					writeFunction("writeEvent('mirrorResearch2-3')", "Walk around the city");
				}
				if (galleryCheck('mirrorResearch2-4') == false) {
					writeFunction("writeEvent('mirrorResearch2-4')", "Check out public education");
				}
				if (galleryCheck('mirrorResearch2-5') == false) {
					writeFunction("writeEvent('mirrorResearch2-5')", "Check out a nearby gym");
				}
				writeTransition("work", "Head back to your dimension");
			}
			else {
				writeEvent('mirrorResearch2-1');
			}
			break;
		}
		case "stopwatchResearch": {
			tempScene = 'work';
			researchLevel('stopwatch');
			break;
		}
		case "stopwatchFailed": {
			writeText("*CLICK*");
			writeText("Time is stopped.");
			writeText("*CLICK*");
			writeText("Time resumes.");
			writeText("In such a clinical setting this watch seems like such a simple object. And yet if this watch were in the outside world, whoever held it would have godlike power.");
			writeText("If society were built around only two dimensions, then the man who could move in the third dimension would be king. The same is true here.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "braceletResearch": {
			tempScene = 'work';
			researchLevel('bracelet');
			break;
		}
		case "braceletFailed": {
			writeText("Wracking your brain, you just don't have any more ideas for how to research the bracelet in a clinical setting.");
			writeText("You've already finished researching this artifact, but there might be more to do with it if you bring it home, if you haven't already.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "erotiboxResearch": {
			tempScene = 'work';
			if (galleryCheck('erotiboxResearch1') != true) {
				writeFunction("writeEvent('erotiboxResearch1')", "Test an actress's interview recording");
			}
			if (galleryCheck('erotiboxResearch2') != true) {
				//writeFunction("writeEvent('erotiboxResearch2')", "Test a pocket watch");
			}
			if (galleryCheck('erotiboxResearch3') != true) {
				writeFunction("writeEvent('erotiboxResearch3')", "Test a copy of the Mona Lisa");
			}
			if (galleryCheck('erotiboxResearch4') != true) {
				writeFunction("writeEvent('erotiboxResearch4')", "Test a chessboard");
			}
			if (galleryCheck('erotiboxResearch5') != true) {
				writeFunction("writeEvent('erotiboxResearch5')", "Test $20");
			}
			if (galleryCheck('erotiboxResearch7') != true) {
				//writeFunction("writeEvent('erotiboxResearch7')", "Test a buttplug");
			}
			if (galleryCheck('erotiboxResearch6') != true) {
				writeFunction("writeEvent('erotiboxResearch6')", "Test a water bottle");
			}
			var erotiboxScenes = 0;
			var erotiboxTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('erotibox')) {
					erotiboxTotal += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						 erotiboxScenes += 1;
					}
				}
			}
			if (erotiboxScenes == erotiboxTotal - 1) {
				if (galleryCheck('erotiboxResearch8') != true) {
					writeText("There's nothing left in the testing room to use... Or maybe...");
					writeText("You've got a dangerous idea in mind. Following this train of thought could cause things to go poorly and take control out of your hands. It could be fun though.");
					writeFunction("writeEvent('erotiboxResearch8')", "Test your assistant");
				}
			}
			if (erotiboxScenes == erotiboxTotal) {
				sceneTransition('erotiboxFailed');
			}
			writeTransition("work", "Go back");
			break;
		}
		case "erotiboxFailed": {
			writeText("You barely escaped with your life last time, you shouldn't do anything as risky as human tests again.");
			writeText("But at the moment you can't think of anything else to put in the box. Maybe inspiration will strike you again some day in the future?");
			writeTransition("work", "Go back");
			break;
		}
		case "gasResearch": {
			tempScene = 'work';
			researchLevel('gas');
			break;
		}
		case "gasFailed": {
			writeEvent('gasResearch3');
			break;
		}
		case "gummyResearch": {
			tempScene = 'work';
			researchLevel('gummy');
			break;
		}
		case "gummyFailed": {
			writeEvent('gummyResearch2');
			break;
		}
		case "onaholeResearch": {
			writeEvent('onaholeResearch1');
			break;
		}
		case "cageResearch": {
			writeEvent('cageResearch1');
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Tried to access:" + tempScene + "");
			writeText("" + JSON.stringify(data) + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("room", "Go back");
		}
	}
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log('now writing event '+scene);
	if (data.player.currentScene == "darkVault") {
		tempScene = 'work';
	}
	switch (scene) {
		case "prologue1": {
			writeSpeech("roommate", "", "Oh hey, feeling better?");
			writeSpeech("player", "", "A little. Anything new with you?");
			writeSpeech("roommate", "", "Hell yeah, I got a date! I'm going out with the home ecc teacher, that Asian girl you met at Tiffany's?");
			writeSpeech("player", "", "Right, right, of course I remember. You both work at uh...");
			writeSpeech("roommate", "", "St. Prince's University.");
			writeSpeech("player", "", "Yeah, that place. Good for you, she's a catch.");
			writeSpeech("roommate", "", "Thanks. You really should get some rest by the way, you still look like you've gone a week without sleep.");
			break;
		}
		case "prologue2": {
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Identification?");
			writeSpeech("player", "", ""+data.player.fName+" "+data.player.lName+", Aleph.");
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Confirmed. Line secured, recipient?");
			writeSpeech("player", "", ""+data.player.lName+"'s office.");
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Confirmed, hold.");
			writeText("...");
			writeSpeech("assistant", "", ""+data.player.lName+"'s office.");
			writeSpeech("player", "", "Hey Veronica, just letting you know I'm home safe.");
			writeSpeech("assistant", "", "Oh good! I'm just cleaning up and prepping, we've got a new artifact tomorrow.");
			writeSpeech("player", "", "We're not working on the earings?");
			writeSpeech("assistant", "", "Nope! Mrs. Jensen says you've fried your brain too many times, so we're shelving the lovey-doves. We've got some kind of invisibility bracelet up next.");
			writeSpeech("player", "", "Invisibility?");
			writeSpeech("assistant", "", "Well, not really. It says it makes you unpercievable, we had to bake the room to get it off the last subject.");
			writeSpeech("player", "", "Alright, thanks for the heads up. See you tomorrow.");
			writeSpeech("assistant", "", "Bye!");
			break;
		}
		case "prologueMemo": {
			writeText(data.player.lName+",");
			writeText("While your resistance to the lovey-doves yesterday showed you have room for improvement, the fact that you're sane enough to talk now shows you have enough mental fortitude to warrant an increase in authority.");
			writeText("For this reason, combined with our current staff shortage, I've authorized you to perform research on artifacts as you deem fit. All class-C low-lethality artifacts, including the 'erotibox' are at your disposal.");
			writeText("In addition you should now be able to submit requests for Dark Vault artifacts.");
			writeText("The Dark Vault is a storage site for artifacts which have already been heavily researched and have been deemed potentially dangerous to researchers. Take great care not to threaten the company through inappropriate handling.");
			writeText("Research into these items is not considered mandatory by company policy, so take great care to understand the risks of these items before you submit any requests for them.");
			writeText("Sincerely,");
			writeText(data.story[3].fName + " " + data.story[3].lName);
			data.player.time="Morning";
			break;
		}
		case "dream1": {
			writeText("Each time you close your eyes visions flash before you.");
			writeBig("images/misc/dream1-1.gif");
			writeText("Memories of a pair of earings that messed with your head and voice.");
			writeBig("images/misc/dream1-2.gif");
			writeText("Making people listen to your commands, but you had no control over yourself.");
			writeBig("images/misc/dream1-3.gif");
			writeText("Some artifacts have had a proven history of danger to the user and the people around them.");
			writeText("Eventually sleep takes you. You'll need to be careful not to get turned into a puppet in the future.");
			break;
		}
		case "dream2": {
			writeText("You flop down onto the bed, memories of a good day behind you.");
			writeText("You can feel your mind becoming sluggish, and it gets harder to focus. The cold of the bracelet doesn't bother you too much anymore.");
			writeText("But as you approach the boundary of being awake, you feel a cool wind on your skin, and the voices of people around you.");
			writeText("You jolt awake, snapping yourself out of it. You're still in your room.");
			writeText("The bracelet's image is hanging in your mind, are you somehow connected to it? Those might have been memories of the previous owner of the artifact.");
			writeText("From now on you'll keep careful track of any new developments in your dreams.");
			break;
		}
		case "braceletResearch1": {
			data.player.artifact1 = "bracelet";
			updateMenu();
			writeBig("scripts/gamefiles/items/bracelet.jpg");
			writeSpeech("player", "", "This is experiment log RB-01, now commencing.");
			writeText("You slip on the bracelet and turn towards "+data.story[1].fName+".");
			writeSpeech("player", "", "So? Anything?");
			writeSpeech("assistant", "", "No sir, no immediate effect.");
			writeSpeech("player", "", "Interesting. Maybe it's something that needs to be activated to work. Huh, I can't get this off.");
			writeText(""+data.story[1].fName+" looks up from her notes before looking around with a confused look on her face.");
			writeSpeech("assistant", "", "What was I...?");
			writeSpeech("player", "", ""+data.story[1].fName+"?");
			writeSpeech("assistant", "", "Ah! Oh, Mr. "+data.player.lName+", sorry. I must've been distracted for a moment.");
			writeSpeech("player", "", "Interesting.");
			writeText("...");
			writeSpeech("player", "", "I just smashed your favorite mug, and you don't even remember it?");
			writeSpeech("assistant", "", "You did what?!");
			writeText("She's obviously mad, but once you focus on the memory of dropping the cup, she takes on a more neutral expression.");
			writeSpeech("assistant", "", "Hey, have you seen my coffee cup anywhere?");
			writeText("...");
			writeSpeech("player", "", "Huh, it isn't coming off.");
			writeSpeech("assistant", "", "Oh boy. Well, the last person was dead, maybe it doesn't come off while the wearer is still alive?");
			writeSpeech("player", "", "... Just forget I said anything.");
			writeSpeech("assistant", "", "Anything about what?");
			writeText("...");
			writeSpeech("player", "", "Hey! Bitch!");
			writeBig("images/bracelet/research1-1.gif");
			writeText("You slap "+data.story[1].fName+" hard on the ass, and she does a little jump on the spot while letting out a squeak. But instead of getting mad she just rubs her ass and looks around to see if anyone saw.");
			writeText("...");
			writeSpeech("notes", "", "Findings:<br>The bracelet allows the wearer to be unperceived by others but only when the wearer desires to go unnoticed.<br>If the wearer wishes, any action they take will go unnoticed, including physical actions such as pinching and molesting. People affected by these actions will still feel the repercussions, but they will ignore the actions as if they were run of the mill occurrences.<br>The wearer can erase memories from other people's minds. This effect is limited to memories of the wearer or the wearer's indirect actions.");
			break;
		}
		case "braceletResearch2": {
			writeText("It takes some time to get used to, but walking around completely unnoticed is actually pretty nice. You need to actively want to be seen for anyone to notice you, so you accidentally bump into a few people as a result of not paying attention.");
			writeText("You walk into your office and can see "+assistantF+" leaning back on her chair, her face looking a little flushed.");
			writeSpeech("player", "", "No way...");
			writeBig("images/bracelet/research2-1.gif");
			writeSpeech("player", "", "Holy shit, you are! You little slut, you're trying to get off at work!");
			writeSpeech("assistant", "", "Mmm...");
			writeSpeech("player", "", "Damn. I wonder how long you've been doing this. Well, if you're gonna put on a show, you should at least go all the way.");
			writeText("You grab her underwear and pull it down her leg. She seems confused for a second, but her brain begins to rationalize it away as a result of the bracelet.");
			writeSpeech("assistant", "", "When did I...?<br>Mmm~, gotta hide.");
			writeText("On her own accord she gets down on the floor to hide her body better in case you walk in. She pulls her clothes off and hides them underneath her desk.");
			writeBig("images/bracelet/research2-2.gif");
			writeSpeech("assistant", "", "Mmm~, I really need to stop this... Soon it'll be every day...");
			writeSpeech("player", "", "Damn right it will. I wonder if I can...");
			writeText("You push her down onto the floor while she strokes her clit. She doesn't seem to notice, instead trying to get her watch off with her free hand until you take it.");
			writeSpeech("player", "", "Here, and...");
			writeText("You push your cock into "+assistantF+"'s mouth and make her start stroking the base with her free hand. In just a moment she's doing it  of her own volition, happily sucking on your head while she pleasures herself.");
			writeSpeech("assistant", "", "Mmm~... Mmm~...<br><i>God, he feels so real today... I'm going to get caught if I keep this up.</i>");
			writeBig("images/bracelet/research2-3.gif");
			writeSpeech("player", "", "Nggh... Gonna-");
			writeText("You can hear the sound of a door closing across the hallway, and "+assistantF+" jerks up at the sound.");
			writeSpeech("assistant", "", "Shit... Fuck, he'll be back any second.");
			writeText("Leaving you tragically unfinished, "+assistantF+" quickly starts putting her clothes back on and leans out into the hallway to see if you're coming. Which you aren't.");
			writeSpeech("player", "", "Fuck, oh well. I should get to work anyway. I'll work faster next time, I guess.<br>"+assistantF+"?");
			writeSpeech("assistant", "", "Aaaah! Oh my god, you scared me! How'd you get over there?");
			break;
		}
		case "braceletResearch3": {
			writeText("With some time and practice, you've found a new trick. You can get someone to register your presence without them registering what you're doing.");
			writeSpeech("assistant", "", "It's a shame that the bracelet didn't work. I guess it must have broken when the last user died.");
			writeSpeech("player", "", "Oh? Any particular reason why it's a shame?");
			writeSpeech("assistant", "", "Well, I-Nnngh... Sorry. It's just that if you could go unnoticed, you could do just about anything. You could rob a bank, Mmm~! S-sorry, I don't know what's going on with me. You c-could-");
			writeBig("images/bracelet/research3-1.gif");
			writeSpeech("player", "", "Have sex with someone mid conversation?");
			writeSpeech("assistant", "", "Y-yeah I suppose. You couldddd~!<br><i>Cumming... God what's going on with me? Did I just... No, maybe I'm just pent up.");
			writeSpeech("player", "", "You okay? I'm almost finished, so you should be able to go soon.");
			writeSpeech("assistant", "", "N-no problem, it's my pleasure. O-ooh~, and you could do a lot more too. If you could do it any time, you could mmm~make someone associate pleasure with something, you know?");
			writeSpeech("player", "", "That's a pretty good idea, actually. Maybe I'll give that a shot. Speaking of which...");
			writeBig("images/bracelet/research3-2.gif");
			writeSpeech("assistant", "", "Mmmm~! Ah~!<br><i>It happened again, I definitely just came...</i>");
			writeSpeech("player", "", "I'll let you soak in the afterglow, you won't notice if I just go ahead and leave will you? Didn't think so.");
			writeText("She gave you a pretty neat idea, but "+assistantF+" is already on a pretty hair trigger. It'd be more fun to push someone else, but who?");
			writeSpeech("assistant", "", "Mmm~... B-boss? Where'd you go?");
			break;
		}
		case "braceletHome1": {
			writeSpeech("player", "", "Alright, I'm crossing a line here. No going back now.<br>"+roommateF+"? You finished?");
			writeText("You don't hear an answer, but after a quick search you hear the shower to "+roommateF+"'s room shut off.");
			writeSpeech("player", "", "Hey, "+roommateF+"?");
			writeSpeech("roommate", "", "Just out of the shower, what's up?");
			writeText("She calls back faintly through the multiple sets of doors.");
			writeSpeech("player", "", "Just saying hey. You going somewhere today?");
			writeSpeech("roommate", "", "Yeah, I'm meeting "+girlfriendF+" later today. I'll be out late.");
			writeSpeech("player", "", "No problem, have fun.");
			writeText("You push open the door to her room, using the bracelet to hide your presence.");
			writeBig("images/bracelet/home1-1.gif");
			writeText("She's just finished drying, and lets down her towel as her phone buzzes on her nightstand.");
			writeText("She picks it up to see who's texting her and...");
			writeSpeech("roommate", "", "Oh!");
			writeText("She quickly turns off the screen. She's always been a bit of a prude, so her girlfriend is probably trying to get her to open up.");
			writeText("She takes a deep breath as she sits on her bed, you're enjoying the bizarre, voyeuristic thrill. After making sure her window's closed, she lays back on the bed naked and opens her messages again.");
			writeBig("images/bracelet/home1-2.gif");
			writeSpeech("roommate", "", ""+girlfriendF+", you perv...");
			writeText("She must be really sensitive, she's already blushing hard and getting into it just from running her finger along her folds.");
			writeText("You take a few careful steps forwards, but even when you look right into her eyes it's like you aren't even there.");
			writeSpeech("roommate", "", "Mmm... "+girlfriendF+"...");
			writeText("Deciding to push you luck, you slide your pants off and start jerking off right in front of "+roommateF+"'s face. She's jilling herself to a picture of her girlfriend in only lingerie, all while she's got a cock inches from her face.");
			writeText("But instead of being off guard, her eyes unfocus, her breathing gets deeper, and she starts rubbing her twat faster.");
			writeSpeech("roommate", "", "<i>God.. I can almost smell...</i><br>No!");
			writeText("She stops right on the verge of an orgasm and sits up.");
			writeSpeech("roommate", "", "N-no more of that, focus... You have girlfriend now... What would she think if she knew you were masturbating to the thought of the smell of a d-d... Dick...");
			writeText("Meanwhile you're about to get off. The admission that she could get off on your cock stink is almost pushing you over the edge. So, as she begins to get dressed you step forwards. She's putting on her bra now, so you slip down her fresh pair of panties and...");
			writeBig("images/bracelet/home1-3.gif");
			writeText("Start depositing a load of cum into her underwear.");
			writeText("She does a few confused sniffs, but doesn't otherwise notice. She grabs her underwear and pulls them up, and you can <b>hear</b> the sound of your jizz being smushed against her pussy.");
			writeText("Having had your fun, you exit her room satisfied in the knowledge that she'll go on a date with a load of your cum covering her twat.");
			break;
		}
		case "braceletHome2": {
			writeText("Just as you're about to start messing with "+data.story[0].fName+", her phone starts ringing. It's from her girlfriend, "+data.story[2].fName+".");
			writeText("...");
			writeSpeech("girlfriend", "", "So? What did she say?");
			writeSpeech("roommate", "", "She uh... Um... Nnn...");
			writeSpeech("girlfriend", "", "Hey, are you alright? You sound kind of strange.");
			writeBig("images/bracelet/home2-1.gif");
			writeSpeech("roommate", "", "Y-yeah, I'm fine. I've just been a bit... B-bit...!");
			writeText(""+data.story[0].fName+" clasps her hand over her mouth as she cums, her legs shaking.");
			writeSpeech("roommate", "", "<i>What the hell is going on? Did I just cum?</i><br>Sorry, I uh-");
			writeSpeech("girlfriend", "", "Don't lie to me, I know what's going on you little slut.");
			writeSpeech("roommate", "", "W-what?");
			writeSpeech("girlfriend", "", "You're jilling off! God, you can't wait until tonight, can you?");
			writeSpeech("roommate", "", "O-oh! Haha! You got me, I'm just thinking of you-");
			writeBig("images/bracelet/home2-2.gif");
			writeSpeech("roommate", "", "C-cumming! Coming over! Tonight! I just can't focus on anything else!");
			writeSpeech("girlfriend", "", "Well you'd better not tire yourself out before tonight. I've got magic fingers, you'll never be satisfied with anyone else, you hear me?");
			writeSpeech("roommate", "", "N-never be satisfied... With anyone else...");
			writeBig("images/bracelet/home2-3.gif");
			writeText("Her eyes roll back as she cums again on your dick.");
			writeSpeech("girlfriend", "", "Well you have fun alright? Love you!");
			writeSpeech("roommate", "", "Lov-");
			writeText("You grab "+data.story[0].fName+"'s phone and throw it aside before grabbing "+data.story[0].fName+" by the hair so you can finish yourself off with her mouth.");
			break;
		}
		case "braceletHome3": {
			writeSpeech("girlfriend", "", "Oh hey! You must be "+data.player.fName+"!");
			writeSpeech("player", "", girlfriendF+", I assume? "+roommateF+" talks about you all the time. Nice to meet you finally.");
			writeSpeech("girlfriend", "", "All good I hope, nice to meet you too.");
			writeText("She goes in for a handshake, and you take it. You also use the bracelet to lean in and rub your hand against her twat. Seeing her frazzled ought to be interesting.");
			writeSpeech("girlfriend", "", "So what do you do?");
			writeSpeech("player", "", "Huh? Oh, uh, I work as a warehouse manager of sorts.");
			writeText("You get more into it. Maybe she just... Didn't notice? Maybe you were too gentle by accident. You start rubbing vigorously against her clit, ready to see her start to fumble her words as "+roommateF+" walks in.");
			writeSpeech("roommate", "", "Welcome back. "+girlfriendF+", have you met "+data.player.fName+"?");
			writeSpeech("girlfriend", "", "We were just introducing ourselves. He was telling me about his warehouse job.");
			writeSpeech("roommate", "", "Good luck, he's never spilt any details to me.");
			writeSpeech("girlfriend", "", "Really? It like a 'national defense classified' sort of thing?");
			writeText("You're at a loss, nothing? No 'oohs' or 'mmmyah~!'s");
			writeSpeech("player", "", "Y-yeah. It pays well though.");
			writeText("Well, you aren't about to take this challenge lying down.");
			writeText("...");
			writeSpeech("girlfriend", "", "And so then what did he say?");
			writeSpeech("roommate", "", "He said he'd have the grades done by Tuesday. Hey, are you alright?");
			writeBig("images/bracelet/home3-1.gif");
			writeSpeech("player", "", "Fucking. Break. You. Whore!");
			writeText("You're slamming balls deep into her asshole, you've felt her clench and quiver a few times now, but there hasn't been a single lull in the conversation.");
			writeSpeech("girlfriend", "", "I feel fine, why?");
			writeSpeech("roommate", "", "It's just... I don't know. Something seems a bit off.");
			writeText("You've had enough games. You pull yourself out with a *POP*! and line yourself up for a single thrust into her twat.");
			writeSpeech("player", "", "Let's see you keep a straight face when you're getting your womb filled!");
			writeSpeech("girlfriend", "", "You worry too much. I... Um~... Come here.");
			writeText(girlfriendF+" pulls "+roommateF+" close as you give a few thrusts, your balls clench as you feel yourself going over the edge.");
			writeBig("images/bracelet/home3-2.gif");
			writeText(girlfriendF+" leans as far forwards as she can beneath you and pulls "+roommateF+" into a deep kiss. You can feel "+girlfriendF+"'s pussy clench. She's french-kissing her girlfriend while a man pumps jizz into her womb.");
			writeText("You pull out, spent, and watch as "+girlfriendF+"'s hole gapes a little open once you pull out. She must've cum at least twelve times by your count, but she's damn good at hiding it.");
			break;
		}
		case "braceletHome4": {
			writeBig("images/bracelet/home4-1.gif");
			writeBig("images/bracelet/home4-2.gif");
			break;
		}
		case "braceletOutdoor1": {
			writeText("You don't come here often, work usually keeps you busy, but there's plenty here to enjoy.");
			writeSpeech("gym", "", "No problem, head on back.");
			writeBig("scripts/gamefiles/characters/gym.jpg");
			writeText("This woman is "+data.story[6].fName+" "+data.story[6].lName+", she works as a trainer and at the reception desk infrequently.");
			writeSpeech("gym", "", "Hi, you new here?");
			writeSpeech("player", "", "Yeah, actually I was hoping to hire a trainer. I felt like trying out something new today.");
			writeSpeech("gym", "", "No problem! If I can just get your details down you can be working out today. What kind of exercise did you have in mind?");
			writeText("...");
			writeBig("images/bracelet/outdoor1-1.gif");
			writeText("*SLAP*");
			writeSpeech("gym", "", "Glruk~! Mmmph~!<i><br>What's happening? How did I get up...? Why can't I close my mouth? Why do my tits feel like they're getting slapped?</i>");
			writeText("Her body on autopilot, she lifts her hands to slide it betwen her legs. Her perception of reality so damaged by the bracelet's effect she isn't even sure where she is anymore.");
			writeSpeech("player", "", "Damn you have a tight throat. How many patrons are gonna smell the jizz on your breath before the day is over? Or maybe you'll head home and start bouncing on a dildo right away to satisfy yourself?");
			writeSpeech("???", "scripts/gamefiles/none.png", "Hey, anyone here?");
			writeText("Someone calls out from the reception desk.");
			writeSpeech("player", "", "In here!");
			writeText("The customer opens the office door and stops in his tracks.");
			writeSpeech("gym", "", "Glark~! Glk~!<i><br>Hi! Can I help you?</i>");
			writeText("She tries to greet him, but the words come out muffled through your cock.");
			writeSpeech("player", "", "You need something?");
			writeSpeech("???", "scripts/gamefiles/none.png", "I'll uh, I'll just go.");
			writeSpeech("player", "", "Aaand he's gone. Shame, he'll miss the big finish. You ready to finally see me?");
			writeText("You feel your cock ready to burst, so hilt yourself in her throat and finally let her see you.");
			writeBig("images/bracelet/outdoor1-2.gif");
			writeSpeech("gym", "", "Glk, glk, glk~!?");
			writeText("She finally comes to the realization that she's been getting throatfucked as you pump cum down her throat.");
			writeText("She's starting to panic, finding it hard to breath, but once you're done with her she won't remember you were even here.");
			break;
		}
		case "braceletOutdoor2": {
			writeSpeech("player", "", "Alright, time for another day of fun~<br>Huh. The receptionist's a guy this time. Where's...?");
			writeText("After a bit of looking around, you find "+data.story[6].fName+" chatting with someone near the backdoor.");
			writeSpeech("gym", "", "I was supposed to meet you at your place, doofus.");
			writeSpeech("???", "scripts/gamefiles/none.png", "What can I say? I wanted to see you again, honey.");
			writeSpeech("gym", "", "Shh! I'll lose all my cred as a tough girl if you call me that here! Come on.");
			writeText("As the two of them leave, some other workers talk amongst themselves. 'I heard they're getting married next month', 'They're already acting like newlyweds' and so on. With the power of the bracelet, you might as well have some fun with this.");
			writeText("...");
			writeText("After a pretty uninteresting car ride, you've arrived at "+data.story[6].fName+"'s place.");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "Listen, maybe it's finally time for us to go all the way.");
			writeSpeech("gym", "", "I... Nnn... I'm not some slut. I'm saving myself for m-marriage. We both agreed.");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "Fine, fine. Hey, I love you.");
			writeBig("images/bracelet/outdoor2-1.gif");
			writeSpeech("gym", "", "I l-... Love you too.");
			writeSpeech("player", "", "<i>Poor guy, putting up with waiting so long. Might as well put on a show for him, even if he can't really 'see' it.<br>Nggh, damn, you have a tight ass. you must work out!</i>");
			writeBig("images/bracelet/outdoor2-2.gif");
			writeSpeech("gym", "", "Hah... Mmmn, I feel really off today.<br><i>This is weird... It almost feels like someone's... No, no way. I've been doing too much anal with Tommy and the boys lately, my head's going funny.</i>");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "Hey, you want anything from the store?");
			writeText("You give her a good slap on the ass to tighten her up.");
			writeSpeech("gym", "", "G-gaaah~!<br><i>Cumming~! God, it feels just like I'm getting pounded in the ass!</i>");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", data.story[6].fName+"?");
			writeSpeech("gym", "", "I-I'm fine. I guess I'm a little pent up too. Can't wait for March. You haven't been... Nngh... Getting second thoughts, have you?");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "I'd never hurt you like that. I love you, and I always will.");
			writeBig("images/bracelet/outdoor2-3.gif");
			writeSpeech("gym", "", "Ggghg~! L-love y-NNNh~!<br><i>Again! I'm cumming while fantasizing about getting fucked in the ass!</i>");
			writeSpeech("player", "", "Hope you're ready for round two, slut!");
			writeBig("images/bracelet/outdoor2-4.gif");
			break;
		}
		case "braceletOutdoor4": {
			writeText("You decide to head down to a local upscale wine bar that only allowed women, named 'Madam Pompadour'. It was a popular evening hangout for the more affluent women in the city:  like business executives off work for the night, lawyers desiring some stress relief and wealthy trophy wives with nothing to do. Tonight was your night to get lucky!");
			writeText("When you arrive, you simply walk past the bouncer and enter the exclusive pub. You quickly spot two lovely ladies at the bar, you imagine chatting about something unimportant. With an eager grin, you walk up right behind the black woman wearing a sexy red dress.");
			writeSpeech("player", "", "Hey slut, I'm going to fuck you in the ass in a second if you don't stop me.");
			writeBig("images/bracelet/outdoor4-1.gif");
			writeText("You unceremoniously lift up the hem of her dress and begin pounding her asshole, taking the gorgeous black woman from behind on her barstool. She gasps and grunts at the sudden intrusion, her confused body tensing as she was suddenly forced into anal sex… but she otherwise has no idea you're there. She bravely continues her conversation with her coworker.");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "O-oh, oh fuck…! Agh… t-that's crazy…");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "Thank you! That's what I said, but does Michael ever listen to me? Of course not.");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "Ungh! Uh-huh… y-yeah.");
			writeBig("images/bracelet/outdoor4-2.gif");
			writeText("It's almost impressive watching the ebony beauty struggle to speak, her wild eyes shifting around her as she searches for the cause of her discomfort. You give it to her hard and fast, railing her tight ass with your throbbing cock, all the while patrons drink and chat around you, as if the erotic scene so completely and utterly normal, it wasn't even worth their attention.");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "What about you? How's has the promotion been?");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "Ah! Uh, w-well, you know. It's been alright. Hnngh…! J-just a lot of stress, I guess.");
			writeText("Your hands leave her smooth hips and travel around to her heavy chest, groping her bouncing tits through her skimpy red dress. The blonde bimbo in front of her continues blabbering as if nothing was happening, her friend was getting her tits massaged in front of her while having anal sex and no one in the bar is any the wiser.");
			writeBig("images/bracelet/outdoor4-3.gif");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "Jesus! Ah, god! Yes, fuck…!");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "Damn, I had no idea it was so bad. I could always try to find you a new position at my place?");
			writeText("It was easy to tell that the girl you were fucking was starting to enjoy it… well, easy for you. To the rest of the bar, she just seemed like an over-worked office girl loudly voicing her stress out. With your balls churning, you grab the blonde and roughly pull her to the ground to blow your load on her face.");
			writeBig("images/bracelet/outdoor4-4.gif");
			writeText("After you finish coating the unaware blonde with a layer of fresh sperm, you watch in amusement as she stumbles back up to her seat, wiping the gooey strings of spunk from her eyes.");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "Shit, sorry, maybe I've had too much… I can't believe I fell out of my chair in front of everyone.");
			writeText("You head behind the bar and grab a bottle of wine, taking sips right from the bottle like a barbarian as you people-watch and observe the other patrons. After an hour or two you head home for the night.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</span>");
			break;
		}
		case "braceletDream1": {
			writeText("Visions float through your mind, spinning through your psyche.");
			writeBig("images/bracelet/dream1-1.gif");
			writeText("Familiar faces you've never seen before writhe in barely contained pleasure. The bracelet is on your arm and you're taking advantage of the women who spurned you.");
			writeText("But at the end of a long day you begin your walk home. As you're crossing the street a car doesn't hit the brakes and is headed right for you.");
			writeText("Too late, you realize you'd been invisible to the world.");
			break;
		}
		case "erotiboxResearch": {
			break;
		}
		case "erotiboxResearch1": {
			writeSpeech("player", "", "Now beginning test EB-01, I've got an interview recording with actress Emma Watson.");
			writeText("You place the flash drive with the recordings in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is the same flash drive, untouched.");
			writeSpeech("assistant", "", "Did it work?");
			writeSpeech("player", "", "Dunno. Let's load it up and see what's on it.");
			writeText("...");
			writeBig("images/erotibox/research1-1.gif");
			writeSpeech("player", "", "Whoa, is that really her?");
			writeSpeech("assistant", "", "This is pretty fucked up. Could we make porn of anyone with this thing?");
			writeSpeech("player", "", "Wanna give it a shot? We could use your ID.");
			writeBig("images/erotibox/research1-2.gif");
			writeSpeech("assistant", "", "No wa-Oh wow, she's really getting into it.<br>Wanna do another test? For science?");
			writeSpeech("notes", "", "Findings:<br>The files of the interview were replaced with a detailed, but most likely fake, porn shoot involving Emma Watson.");
			break;
		}
		case "erotiboxResearch2": {
			writeSpeech("player", "", "Now beginning test EB-02, I've got an ordinary clockwork pocket watch, made primarily from silver and steel.");
			break;
		}
		case "erotiboxResearch3": {
			writeSpeech("player", "", "Now beginning test EB-03, I've got a recreation of Leonardo Da Vinci's Mona Lisa.");
			writeText("You place the painting in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/research3-1.jpg");
			writeSpeech("player", "", "Well, uh...");
			writeSpeech("assistant", "", "I like it better this way, actually. I thought it'd be more erotic though.");
			writeSpeech("player", "", "Yeah... Uh huh...");
			writeSpeech("assistant", "", "You alright?<br>Shit! Is it memetic? What's your name?");
			writeText("You're lost in the painting. Something about it... The hands are...");
			writeBig("images/erotibox/research3-2.gif");
			writeText("You can't look away, the voices around you are growing more faint.");
			writeSpeech("assistant", "", "Security! Security! We need a female guard!");
			writeSpeech("notes", "", "Findings:<br>The painting was replaced with a stylized painting. Upon looking at it, male subjects would become distracted. After being separated from the painting they return to normal, and claim they remember receiving a 'divine' hand job from an unknown woman.");
			break;
		}
		case "erotiboxResearch4": {
			writeSpeech("player", "", "Now beginning test EB-04, I've got a chessboard made from wood and ivory.");
			writeText("You place the board in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/research4-1.jpg");
			writeSpeech("assistant", "", "Well, that's a bit tasteless.");
			writeSpeech("player", "", "We're both adults here, we can handle some nudity. Wanna play?");
			writeText("...");
			writeSpeech("assistant", "", "And... And that takes your bishop... Ngh...");
			writeSpeech("player", "", "And... Here.");
			writeSpeech("assistant", "", "Shhhhame the board doesn't have any special effects, huh?");
			writeSpeech("player", "", "Yeah. Thats... That's checkmate.");
			writeBig("images/erotibox/research4-2.gif");
			writeSpeech("assistant", "", "Aaah~! Cumming~!");
			writeSpeech("notes", "", "Findings:<br>The chessboard and pieces were replaced with a version of chess using highly sexualized versions of the pieces. Upon reviewing the footage, it becomes clear that players unknowingly begin to have sex with each other during the game, their ability in the game deciding how dominant they are during the sex. Upon checkmate, both players will climax.");
			break;
		}
		case "erotiboxResearch5": {
			writeSpeech("player", "", "Now beginning test EB-05, I've got twenty dollars in American single dollar bills.");
			writeSpeech("assistant", "", "I wonder if it'll be like, a sexy George Washington.");
			writeText("You place the bills in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeSpeech("player", "", "They haven't changed?");
			writeSpeech("assistant", "", "What? Aw man, that's lame. Hey, what're you doing?");
			writeSpeech("player", "", "I mean, they're singles. Kinda feels like they were made for this.");
			writeText("You toss bills into the air, 'making it rain' over "+assistantF+".");
			writeSpeech("assistant", "", "That's degrading, I'm not going... to...");
			writeText("...");
			writeBig("images/erotibox/research5-1.gif");
			writeSpeech("assistant", "", "You like that, big boy?");
			writeSpeech("player", "", "Y-yeah, I like it...");
			writeSpeech("assistant", "", "You wanna go all the way? Just a little more for me, baby.");
			writeBig("images/erotibox/research5-2.gif");
			writeSpeech("player", "", "But... But I'm out of bills...");
			writeText("With that, "+assistantF+"'s eyes light up in confusion and anger. She's baffled for a second as she looks around, before she slaps you in the face and covers herself with her arms.");
			writeSpeech("notes", "", "Findings:<br>The bills were replaced with a visually identical set of bills, titled 'Stripper Money' by researcher "+data.player.lName+". When thrown in the air above someone's head, that person will begin to put on a strip show. The length of this show and the energy of the stripper is determined by how quickly the money is thrown, until the thrower runs out of bills.");
			break;
		}
		case "erotiboxResearch6": {
			writeSpeech("player", "", "Now beginning test EB-06, I've got a plastic bottle filled with tapwater.");
			writeText("You place the bottle in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is the same bottle, but the water inside seems to be colored slightly pink.");
			writeSpeech("assistant", "", "Huh. My favorite color. So, how do we test it?<br>Fuck you, you aren't going to make me drink it, are you?");
			writeSpeech("player", "", "I would never do such a thing.");
			writeText("...");
			writeText("You do such a thing, putting some into her coffee while and hiding it using the bracelet.");
			writeSpeech("assistant", "", "Aaah~!");
			writeBig("images/erotibox/research6-1.gif");
			writeSpeech("assistant", "", "G-gawd, I can't... Ohmigawd! Fuck meeee~!");
			writeBig("images/erotibox/research6-2.gif");
			writeSpeech("notes", "", "Findings:<br>The water inside the bottle was replaced with a highly arousing fast-acting aphrodisiac. Upon drinking subjects nearly immediately experience a massive drop in intelligence and vocabulary, ending with the subject becoming a 'squirting mess' as researcher "+data.player.lName+" described it.");
			break;
		}
		case "erotiboxResearch7": {
			writeSpeech("player", "", "Now beginning test EB-07, I've got a plastic buttplug made of plastic, ordered online.");
			break;
		}
		case "erotiboxResearch8": {
			writeSpeech("player", "", "<span id='ero10'>Now beginning test EB-08, I've got a uh...</span>");
			writeText("<span id='ero9'>You look over to "+assistantF+".</span>");
			writeSpeech("assistant", "", "<span id='ero8'>Are you gonna put in your clipboard? We could use that flowerpot too if you want.</span>");
			writeText("<span id='ero7'>You use the bracelet to push "+assistantF+" into the box without her realizing what's happening.</span>");
			writeSpeech("player", "", "<span id='ero6'>Here's hoping this goes well.</span>");
			writeSpeech("assistant", "", "<span id='ero5'>Huh? Here's hoping what-<br>Wait, what? What're-</span>");
			writeText("<span id='ero4'>The bright purple flash is blinding, it's way more bright than usual, and lasts for almost half a minute before the light dims and "+assistantF+" steps out.</span>");
			writeText("<span id='ero3'>You can hear an alarm go off and the door clicks behind you, but...</span>");
			writeBig("images/erotibox/research8-0.jpg");
			writeText("<span id='ero1'>There's a scent in the air... It's intoxicating. Rescue is coming, but...</span>");
			document.getElementById('output').innerHTML += `
				<p style='color:red'>You have no choice but to take a breath</p>
			`;
			writeText("Pheromones fill the air, a single lungful has you broken.");
			writeBig("images/erotibox/research8-1.gif");
			writeSpeech("assistant", "", "Come here... Come to me...");
			writeText("You can't control your body.");
			writeSpeech("player", "", "I... I need to...");
			writeBig("images/erotibox/research8-2.gif");
			writeText("She is a machine, hungrily slurping on your balls.");
			writeText("Memories are fading away, nothing matters any more.");
			writeBig("images/erotibox/research8-3.gif");
			writeSpeech("assistant", "", "Yes! Fuck me! Worship me with your cock!");
			writeSpeech("player", "", "Cumming! I'm cumming again for you!");
			writeBig("images/erotibox/research8-4.gif");
			writeText("Her thirst is unending, you've already given her all you have but she wants more.");
			writeSpeech("assistant", "", "More! Harder! Break me!");
			writeSpeech("player", "", "I can't... I can't cum any more... I don't have any-");
			writeText("She grabs you by the chin and stares into your eyes.");
			document.getElementById('output').innerHTML +=`
			<div class = "textBox">
				<img class = "textThumb" src = "scripts/gamefiles/profiles/assistant.jpg">
				<p class = "textName">`+ data.story[0].fName + `</p>
				<p style='color:red'>Cum. Now.</p>
			</div>
			<br>
			`;
			writeBig("images/erotibox/research8-5.gif");
			writeText("...");
			writeText("You wake up in the hospital wing, you don't know how much time has passed.");
			writeText(assistantF+" was fine, there's an artifact here that can undo any changes.");
			writeText("Luckily, the bracelet can allow you to sweep all this under the rug, but you came dangerously close to a very bad ending for yourself.");
			break;
		}
		case "gasResearch": {
			break;
		}
		case "gasResearch1": {
			writeSpeech("player", "", "Now commencing research on the dark vault artifact A-05-99, aka Exchange Gas.");
			writeSpeech("assistant", "", "Good luck!");
			writeText("Her voice is a bit staticy through the speaker. These items are more dangerous than the usual artifacts you deal with, so you don't have the authority to force "+assistantF+" to work with you. Not to mention all the cameras in the testing bay, the trackers, and the security guards outside the giant metal door.");
			writeText("But if this works properly, all this hassle should be worth it, even if the gas's effects are temporary.");
			writeText("You pull the pin on the gas grenade and toss it away from you. Soon the mixed pink and blue cloud of gas fills the room.");
			writeText("It isn't hard to breath like you expected, but a different problem soon arises as you double over.");
			writeSpeech("player", "", "Ggghg, gaaagh!!");
			writeSpeech("assistant", "", "Are you okay? Can you hear me?!");
			writeText("The vents activate, but that's secondary to you right now. Right now you're in... pain?");
			writeText("It hurt at first, but it feels like your mind is being filled with cotton. The pain is soon gone, and so is your vision. You can hear fabric tearing and dissolving before that goes out too.");
			writeText("...");
			writeSpeech("gasF", "", "Mmm... What-");
			writeBig("images/gas/research1-1.gif");
			writeSpeech("gasF", "", "Oooh~!");
			writeText("The gas worked, your entire body has been changed!");
			writeText("Thousands of new nerves are sending electric signals through your body.");
			writeSpeech("gasF", "", "Nnngh... Not enough, I need more...");
			writeText("You get up and walk naked out of the recovery room, the bracelet keeping you hidden from any unwanted eyes. The air on your new naked body has you tingling all over as you make your way towards your office.");
			writeText("...");
			writeBig("images/gas/research1-2.gif");
			writeSpeech("gasF", "", "*Mwah*!<br>Mmm... It's still not enough. How does "+roommateF+" manage all day?");
			writeText("The female orgasm isn't quite what you'd imagined. It's like a pleasant buzz flowing through your body, and it lasts a lot longer than your old ones did. You've been jilling off while making out with "+assistantF+" for a while now, it's probably time to finish up. The gas's effects won't last much longer since you got such a small dose.");
			writeText("...");
			writeBig("images/gas/research1-3.gif");
			writeSpeech("gasF", "", "Mmm~! They feel so nice!");
			writeText("You enjoy a nice shower until the effects wear off. Just like before it starts with a pain, then a mind-wiping fuzz, then blackness until you wake up again in your old body.");
			writeSpeech("player", "", "That was pretty fun. I should be careful not to go too far though.");
			break;
		}
		case "gasResearch2": {
			writeSpeech("player", "", "Now commencing research on the dark vault artifact A-05-99, aka Exchange Gas.");
			writeSpeech("assistant", "", "So, it won't hurt too much right? You looked awful last time...");
			writeSpeech("player", "", "It's perfectly safe, I went back to normal, right? Besides, you volunteered.");
			writeSpeech("assistant", "", "<i>Only because you wouldn't stop talking about how fun it was...</i>");
			writeSpeech("assistant", "", "Y-yeah, I guess...");
			writeText("You pull the pin on the gas grenade and toss it away from you. Soon the mixed pink and blue cloud of gas fills the room.");
			writeText("This time, the mind-fuzz hits you before the pain does. You tip over, but manage to catch yourself.");
			writeSpeech("assistant", "", "Aaah! Aaagh!");
			writeText(assistantF+"writhes on the ground as your vision blinks in and out, your body changing more and more between each short blackout.");
			writeText("Your clothes have torn apart and dissolved, and within moments you're in your new body. The vents kick on and the gas clears up.");
			writeText("But "+assistantF+" is still writhing on the ground. The process must be slower for women. Her clit has grown at least three inches, and her pussy is spasming open and closed.");
			writeText("Her back arches as she thrusts her hips in the air, trying to push something out.");
			writeSpeech("assistant", "", "Ghh... Ghhhg!");
			writeText("*POP*!");
			writeText("Her clit has grown into a full sized cock now, and spurts out a jet of clear fluid as two heavy balls plop out of what used to be her vagina, dangling down until she slumps onto the floor.");
			writeText("Over the course of the next few minutes, the rest of her body begins to change to match her new equipment.");
			writeText("...");
			writeSpeech("gasM", "", "It's... It's so...");
			writeSpeech("gasF", "", "Pretty cool right? How's it feel now that you're on the other side?");
			writeSpeech("gasM", "", "It feels pretty damn good. And you... You look...");
			writeText("There's a hunger in her... his? His eyes as he takes in your body.");
			writeBig("images/gas/research2-1.gif");
			writeSpeech("gasF", "", "Somebody's excited.");
			writeSpeech("gasM", "", "Sorry! God, it has a mind of its own.");
			writeSpeech("gasF", "", "Don't be sorry, I look good. Just don't get too curious, the change becomes unstable if we take in DNA from our old gender.");
			writeSpeech("gasM", "", "Right, okay. I wanna go back to normal later. It's just that you look really, really good.");
			writeText("He walks up to you, cock fully engorged.");
			writeBig("images/gas/research2-2.gif");
			writeSpeech("gasF", "", "It sure does look that way. Here.");
			writeText("You grasp her thick, meaty cock in your hands. Is this gay? No, you're a girl now, so this is totally straight of course.");
			writeSpeech("gasM", "", "A-aaah~! Your hand feels really good!");
			writeSpeech("gasF", "", "Y-yeah... You're still a quick shot, huh?<br><i>Holy crap, what is this doing to me? I feel like I could cum just from having this cock swinging in front of my face...</i>");
			writeSpeech("gasM", "", "G-gonna...!");
			writeBig("images/gas/research2-3.gif");
			writeText("You point her cock away from you, your eyes locked on every strand of cum that goes flying through the air.");
			writeText("The electricity running through you right now is a hundred times more intense than it was last time, and you aren't even touching your pussy right now.");
			writeText("This artifact really is dangerous...");
			writeText("...");
			writeSpeech("player", "", "Everything alright?");
			writeSpeech("assistant", "", "Yeah, everything's back to normal. Do... Do you want to test it again?");
			writeText("You don't give an answer. It feels like if you do it again, you might not want to go back.");
			break;
		}
		case "gasResearch3": {
			writeText("The transformation went even smoother this time, you're getting used to this. You didn't even black out.");
			writeText("And the transformation wasn't the only thing that got smoother.");
			writeBig("images/gas/research3-1.gif");
			writeSpeech("gasF", "", "Ooooh~!");
			writeSpeech("gasM", "", "See? And if I put pressure here, I can do this-!");
			writeSpeech("gasF", "", "Nnngh! More~!");
			writeText("But to your dissapointment he pulls his hands away.");
			writeSpeech("gasM", "", "This is the third time you've cum already. You're going to teach me how to do it properly too, right?");
			writeSpeech("gasF", "", "Y-yeah. I'll show you how to cum... I promise.");
			writeText("...");
			writeBig("images/gas/research3-2.gif");
			writeSpeech("gasF", "", "Yes, deeper~!");
			writeSpeech("gasM", "", "Nghh, you're so fucking tight...<br>But we need to stop! We shouldn't be-<br>Oooh~! I can't hold it back!");
			writeSpeech("gasF", "", "Do it! I don't care anymore, cum in me!");
			writeBig("images/gas/research3-3.gif");
			writeText("Hours go by, the two of you lost in an endless sexual frenzy.");
			writeText("As the evening arose, you notice that no one's come in to check up on you, but that doesn't matter. You and "+assistantF+" never turned back to normal, but that didn't matter either.");
			writeText("This is the rest of your life, spending everything for the sake of a cock in your twat.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "stopwatchResearch1": {
			writeBig("scripts/gamefiles/items/stopwatch.jpg");
			writeSpeech("player", "", "Alright, now beginning test TS-01. No obvious method aside from pressing the button at the top, so here we go.");
			writeSpeech("assistant", "", "It seems pretty old, ma-");
			writeText("*CLICK*");
			writeSpeech("player", "", "Sorry, what was that?");
			writeText("The room is silent. Dead silent. "+assistantF+" is motionless, the ventilation is off, every noise that filled the room stops except for a light ticking.");
			writeText("It seems like time has stopped. The second hand on the stopwatch is moving freely now, and the watch is functional.");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "-ybe we should clean it first?");
			writeSpeech("player", "", "That was awesome. Here, give it a shot.");
			writeText("You hand the stopwatch to "+assistantF+" who meekly accepts it.");
			writeSpeech("assistant", "", "Huh? Oh, sure. Did it work?");
			writeText("*CLICK*");
			writeText("After she clicks the button she's standing in a completely different spot, looking quite excited. You suddenly feel a rush of sensation to your crotch, as if someone rubbed it once or twice very quickly.");
			writeText("...");
			writeSpeech("player", "", "Hmm~ Hmm~ Just one more~");
			writeText("You set down the final piece to your house of cards, the whole of the ensemble atop "+assistantF+"'s head.");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "Eeeeek!");
			writeText("The cards come tumbling down. An hour of progress falling apart before you, but you got a good reaction out of it so whatever.");
			writeText("...");
			writeText("After about ten full minutes of rubbing a spot on "+bossL+"'s hand, you decide that that's enough testing.");
			writeSpeech("player", "", "It's so weird for her to be so quiet.");
			writeSpeech("assistant", "", "And so still. She's still intimidating though, even though she can't move.");
			writeText("*CLICK*");
			writeText("As time resumes "+bossL+" suddenly pulls back her hand, clutching it.");
			writeSpeech("player", "", "How does it feel?");
			writeSpeech("boss", "", "It... It felt like you spent an hour rubbing it. Why exactly couldn't you have tested this on "+assistantF+"?");
			writeSpeech("notes", "", "Findings:<br>When the button at the top of the Time Stopwatch is depressed time stops for everyone except for anyone in direct contact with the stopwatch. Machines cease to function, causing near complete silence.<br>After time resumes, any actions done to someone who has been 'time-stopped' will be felt all at once, creating a sensory overload sensation.");
			break;
		}
		case "stopwatchResearch2": {
			writeSpeech("player", "", "Excuse me, Mrs. "+bossL+"?");
			writeText("It's nice that we have a gym here in the facility. What isn't great is how "+bossL+" tends to be the reason it isn't used very frequently.");
			writeSpeech("boss", "", "What is it?");
			writeText(""+bossL+" is working out. She's got a fantastic body and is a treat to see in her workout pants. The problem is that she's just got such an intimidating aura that most people just try to avoid her.");
			writeText("As one of the top-level supervisors, a single word from her can have you switching departments by the end of the day. Nobody wants to be transferred to the soul-vampire department.");
			writeSpeech("player", "", "Ah, I just had something I wanted to show you. It has to do with the stopwatch.");
			writeSpeech("boss", "", "And it couldn't wait? You really need me to do your job for you while I'm on my brea-");
			writeText("*CLICK*");
			writeSpeech("player", "", "'While I'm on my break?'<br>Good god, you're always on a break. You pick a different time every day, nobody knows when it's safe to...<br>Fuck. I didn't come here to bitch and moan. I'm here to relieve frustration another way.");
			writeText("It's neat to just spend awhile fucking around in the stopped time. As you move her head around, her ponytail swings around as if time were progressing normally. Then when you let go it freezes mid-movement.");
			writeText("You grab her by the throat and you can feel muscles moving instinctively, but her mouth hangs open and her eyes are totally still. It's almost like playing with a doll.");
			writeSpeech("player", "", "Well, don't mind me. Just getting in a... Workout!");
			writeText("You open her mouth a little further, then slide your dick past her lips.");
			writeText("Getting a time-stopped blowjob feels... Different. You can still feel her throat clenching back up after you pull your dick out, but there's no sign of a gag reflex. She's still building up saliva, but her tongue is completely still.");
			writeText("Really, there's only one thing for it. Pummeling her throat like the stress-relief bitch she is.");
			writeBig("imagebox/stopwatch/research2-1.gif");
			writeText("If your research is right, then after you finish she'll feel the entirety of the blowjob all at once when you click the stopwatch again. There's a decent chance she'll actually choke on your cum if you finish in her mouth though.");
			writeText("You pull out. You're just a little too late though, and you end up painting her face.");
			writeText("But you obviously aren't satisfied.");
			writeSpeech("player", "", "Lucky for me you've got another hole~<br>Mr. "+bossL+" won't mind will he? Do you think we should stop?");
			writeSpeech("boss", "", "...");
			writeText("The silence answers your question for you. You begin getting her out of her clothes.");
			writeText("Her mouth still open and her eyes still mid-blink, you push her down to the ground and push her legs against her shoulders.");
			writeText("It's strange seeing her muscles clench, but if they couldn't it'd be like trying to pose a statue. Really, the more interesting reflex is...");
			writeSpeech("player", "", "Holy shit! You're wet! It's like a faucet down here. Mr. "+bossL+" not satisfying you anymore?");
			writeSpeech("boss", "", "...");
			writeSpeech("player", "", "Poor bitch. Well, I do owe you for everything you've done for me!");
			writeBig("imagebox/stopwatch/research2-2.gif");
			writeSpeech("player", "", "Fuck yeah! Take it! I should drag your ass down the office, leave you in the hallway with a cum-covered face and unfreeze time!");
			writeText("With your hate-powered boner you put her in here place. The only sound in the entire world right now is the sound of flesh on flesh.");
			writeBig("imagebox/stopwatch/research2-3.gif");
			writeText("And you finish with a creampie. You can erase her memory of this with the bracelet, and she'll be leaving work today with your cum in her snatch.");
			writeText("*CLICK*");
			writeSpeech("boss", "", "k-NGGGHHhhH~!");
			break;
		}
		case "stopwatchResearch3": {
			writeSpeech("player", "", "Thanks again for volunterring to test this with me.");
			writeSpeech("assistant", "", "It's fine. You don't really need my permission, you know?");
			writeSpeech("player", "", "Yeah, but this'll be more fun knowing you wanted this.");
			writeSpeech("assistant", "", "Wanted what? H-hey, don't get any-");
			writeText("*CLICK*");
			writeSpeech("player", "", "Alright, research log TS-02. Time to test this thing's limits.");
			writeText("...");
			writeBig("imagebox/stopwatch/research3-1.gif");
			writeSpeech("player", "", "Two hours into the test. She's still getting wet, and is showing no signs of dehydration or abrasion. She hasn't cum yet, it seems like orgasms all happen at once, and only when time resumes.");
			writeText("...");
			writeBig("imagebox/stopwatch/research3-2.gif");
			writeSpeech("player", "", "Three... Ngh... Three hours into the test. Still no orgasm reaction, although I've already cum a few times with her ass. This is my fourteenth round, and I've started taking breaks and having snacks between them to avoid exhaustion.");
			writeText("...");
			writeBig("imagebox/stopwatch/research3-3.gif");
			writeSpeech("player", "", "This makes hour number fifteen, I went to sleep earlier so the time might be off. I'm on the... Uh... Fifty second round of sex. I'm starting to wonder if she'll break after I resume. I figure if she can take fifty, fifty one should be fine too, right?");
			writeText("...");
			writeSpeech("player", "", "Happy birthday to you~ Happy birthday to you~ Happy birthday dear "+assistantF+", happy birthday to you~.<br>I decided to give her a break for today. I think this is hour seventy-two? The clock only goes from one to twelve.");
			writeText("...");
			writeBig("imagebox/stopwatch/research3-4.gif");
			writeSpeech("player", "", "Ghh... Ahh... Alright. That's an even three hundred. Got the restorer right here in case she actually breaks from this. Gotta get clothed... And...");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "-Thi-");
			writeText("Her word stops behind clenched teeth, you expected a scream. Instead she seizes up as her back arches, hundreds of orgasms firing through her body at once. Her cunt and womb clench around three hundred loads of your jizz that weren't there before.");
			writeSpeech("player", "", "Oh fuck! Fucking hell, no!");
			writeText("It turns out that the recorded didn't work in the stopped time.");
			writeSpeech("player", "", "Fuck, we'll need to do it again. I'll get a notepad, you want a sandwich or anything?");
			writeSpeech("assistant", "", "...");
			writeText("Once all the seizing and squirting has stopped she flops onto the floor, twitching occasionally as she squirts again.");
			break;
		}
		case "stopwatchHome1": {
			writeText("You decide to follow " +roommateF+ " to the university she works at. It's loud and there are just way too many people rushing by in a hurry to make it to class.");
			writeText("*CLICK*");
			writeText("And now it's quiet.");
			writeText("It doesn't take too long to find " +roommateF+ "'s office. She's in a meeting with a student, and an evil idea crosses your mind.");
			writeText("...");
			writeBig("imagebox/stopwatch/home1-1.gif");
			writeText("Once you're finishing groping her breasts, you slide her clothes back on, head back out to the hallway, and...");
			writeText("*CLICK*");
			writeSpeech("roommate", "", "-lookinggggh~");
			writeSpeech("Student", "none", "Professor? Are you alright? That's the third time now...");
			writeSpeech("roommate", "", "I... I'm fine. As-");
			writeText("*CLICK*");
			writeText("And you're right back at it. Slowly, you're pushing her closer and closer to the edge.");
			writeBig("imagebox/stopwatch/home1-2.gif");
			writeText("Playing with her, teasing her over the course of an hour. Stopping and resuming often enough that she has time to adjust and cool down so that she never quite hits n orgasm.");
			writeText("*CLICK*");
			writeSpeech("roommate", "", "-I wassss~!<br>Was... Saying...");
			writeText("...");
			writeText("After the student leaves you keep teasing her until she finally starts to break.");
			writeText("Hours of slowly teasing her finally pay off as she reaches down into her panties and starts trying to cum, desperate for some release.");
			writeText("*CLICK*");
			writeText("And then you start to subtly push her. Sliding her clothes off further, putting her into more erotic poses. Soon enough she's naked and stroking her clit while standing in front of the door.")
			writeText("*CLICK*");;
			writeSpeech("roommate", "", "Ghh... Wha-? How did I...? F-fuck it... Need to cum...");
			writeBig("imagebox/stopwatch/home1-3.gif");
			writeText("Everything is going according to plan, and hours of teasing are about to pay off. Someone begins knocking on her door as she rubs her cunt. If the door were to open, she'd totally exposed in the middle of the room.");
			writeText("She panics, and goes to put her clothes on, but another time stop and some teasing puts a stop to that.");
			writeText("The door opens as the person begins to worry about her stifled moans.");
			writeSpeech("Student", "none", "Excuse me, is ever-");
			writeSpeech("roommate", "", "C-cumming~!");
			writeBig("imagebox/stopwatch/home1-4.gif");
			writeSpeech("roommate", "", "I'm sorry~!<br>I c-can't stop~!");
			writeText("Her pussy completely exposed, the student has just walked in on his professor openly pleasuring herself, naked, her cunt facing the door.");
			break;
		}
		case "stopwatchHome2": {
			writeSpeech("roommate", "", "Ethics isn't something you'll use in daily life, it's-");
			writeText("*CLICK*");
			writeText("You are genuinely impressed. She's already back to work, you didn't even need to erase any memories to avoid creating a scene after last time.");
			writeText("*RIIIIP*");
			writeText("But you aren't here to be impressed by "+roommateF+"'s strength of character. You can handle any potential fallout, it's time to enjoy yourself.");
			writeText("It takes a bit of finagling, but you strip "+roommateF+" and get her into a half-decent position.");
			writeBig("imagebox/stopwatch/home2-1.gif");
			writeText("The classroom is silent except for the sounds of you railing the teacher. Every student watches with blank expressions as their teacher is fucked mid-word.");
			writeText("But it isn't enough. You drag "+roommateF+" to an even more visible spot. You put her down onto a couch where you're surrounded by her frozen colleagues and students.");
			writeBig("imagebox/stopwatch/home2-2.gif");
			writeText("You can live a live free of responsibility with the bracelet and the stopwatch together. The springs of the couch squeak as you slam into "+roommateF+"'s cunt in a position called the 'Mating Press'.");
			writeBig("imagebox/stopwatch/home2-3.gif");
			writeText("You can feel yourself cumming inside her, she'll feel all this stimulation all at once when you're finished.");
			writeText("But you aren't done yet. You have all the time in the world to enjoy yourself.");
			break;
		}
		case "stopwatchOutdoor1": {
			writeText("'Sharking' was a popular fetish for a while, it involved forcibly stripping people on the streets. With so much potential for being caught it's died down these days.");
			writeText("But with a time-stoping artifact you can do a lot better a lot more safely. Why stop with just pulling a dress down when you can lift up a woman's top, tear off her bra, and restart time with her tits hanging out?");
			writeBig("imagebox/stopwatch/outdoor1-1.gif");
			writeSpeech("Woman", "none", "And I-Aaaah!");
			writeText("And you get a fantastic reaction every time. The panicky ones are the best. One moment someone's having a lovely conversation, then CLICK!");
			writeBig("imagebox/stopwatch/outdoor1-2.gif");
			writeText("They're suddenly flashing their ass and pussy to a stranger on the street, desperately trying to pull down their dress and wondering where their underwear went.");
			writeText("There's a lot of fun to have here. Some women don't realize it at first, they're confused why everyone's staring at them. Some just notice a light breeze as they cross the street bottomless.");
			writeText("But the best reactions are after you put time and effort into posing them. Sure, a woman's clothes simply vanishing? That'd give them some credibility.");
			writeText("But when their hands are pulling apart their shirts, when they suddenly find themselves jutting out their chests to show their bare breasts to the world?");
			writeBig("imagebox/stopwatch/outdoor1-3.gif");
			writeText("All they're seen as are perverts.");
			break;
		}
		case "stopwatchDream1": {
			writeText("As sleep takes you, you suddenly feel free of heavy shackles.");
			writeText("Freedom is in your hands after many long years of struggle. You have a chance for revenge, for justice, for a life where you can take as you please.");
			writeBig("imagebox/stopwatch/dream1-1.gif");
			writeText("Some women are scared, but most revel as you appear and dissapear without warning from their lives.");
			writeText("No place is safe should you desire access. Any threat that comes your way is a matter of time to deal with. And you have all the time in the world.");
			writeBig("imagebox/stopwatch/dream1-2.gif");
			writeText("But at one point you made a mistake. All the power in the world, and you are your own worst enemy.");
			writeText("The stopwatch slips from your grasp and tumbles down into the ocean. The world around you is still frozen.");
			writeText("...");
			writeText("Fifty long years have passed, your body is old and frail. But you've finally found it and taken it from the ocean's depths. Once the button is pressed, the world will spin again. No one will remember you. Your whole life has gone by in the space between two seconds.");
			writeText("*CLICK*");
			break;
		}
		case "mirrorResearch1-1": {
			writeText("As you pass through the mirror you realize that your balance is off. You take a moment to inspect yourself.");
			writeText("In this dimension you're shorter, standing at only five-foot six. Your body is much more toned and lithe, but you're still pretty visibly a guy. You could probably pass for a 16 year old here.");
			writeSpeech("player", "", "So, this is-");
			writeSpeech("assistant", "", "Another reality, yeah. Listen honey, we need to set some ground rules first.");
			writeText(assistantF+" is writing something on a clipboard as she approaches you. Her outfit is more reserved as she has a more confident stance.");
			writeSpeech("player", "", "I think I can-");
			writeSpeech("assistant", "", "First off, this is our thirty-second attempt into dimension exploration. There's no contamination risk, just be sure to keep your actions under wraps.<br>Second off, your bracelet won't work here. Our "+data.player.fName+" confessed to stealing it, and we've neutralized its power in this dimension.");
			writeText("It's true. Her eyes follow your body even if you don't want to be seen.");
			writeSpeech("assistant", "", "Our "+data.player.fName+" is getting briefed over there just like you are. You're authorized to explore at your leisure, just be sure to follow common standards and not reveal any Anomaly Vault secrets.");
			writeText("It seems like in this dimension "+assistantF+" is a lot more confident, and more than a little disrespectful. Without the bracelet you don't have a lot of control over the situation.");
			writeText("You spend the next few hours being briefed on this dimension's details.");
			writeSpeech("notes", "", "Findings:<br>In this dimension gender dynamics, as in the attitude that men and women have towards each other is reversed and heavily exaggerated. Women are considered the dominant gender, while men are viewed to be naturally more submissive. <br>Women are expected to be the breadwinners, to lose their virginity to be considered an adult, and to be able to take charge of the situation.<br>Men are to stay home and to be accepting of sexual harassment.<br>Most notably, the scales are tipped further in a woman's favor than even your world's 1920s. Rape isn't even considered an offense so long as no other crime, like violent assault or pedophilia, are committed.");
			writeText("Without the bracelet in this dimension, you could be in trouble here. You'll be pulled out whenever the "+data.player.fName+" of this world touches the mirror though, so you'll never be trapped.");
			tempScene = 'work';
			break;
		}
		case "mirrorResearch1-2": {
			writeText("It's pretty weird just walking around the city, you almost feel like a piece of meat, to use a cliche.");
			writeText("But for real, you're pretty glad that most people in this dimension are good-looking. The stares actually feel nice coming from all these attractive women.");
			writeText("Although one is a bit... persistent. She forgot to turn the shutter noise off on her phone, and she's been following you for the last block snapping pictures.");
			writeText("You manage to rush onto a train just as its about to depart, a well-dressed woman holds the door for you.");
			writeText("The doors close and you find a seat pretty easily. The woman stalking you realizes she was too late, and actually throws her phone down onto the ground in frustration.");
			writeSpeech("player", "", "Geez, dodged that crazy bullet.");
			writeSpeech("girlfriend", "", "Oh yeah?");
			writeText("The woman who held the door for you takes a seat next to you. It's "+girlfriendF+"! You must have been in a rush and didn't recognize her at first.");
			writeText("But it seems like she doesn't recognize you in this dimension, so it's best to play dumb.");
			writeSpeech("player", "", "Yeah. She was follo-.");
			writeSpeech("girlfriend", "", "Shhh. I help you, you give me something in return that's fun for both of us.");
			writeText("Your confused for a second until she puts her hand on your crotch, then you're just conflicted.");
			writeSpeech("player", "", "<i>Well, she is hot... And I don't need to worry about any danger since I'll be pulled out eventually... What the hell.</i>");
			writeText("You decide to put up a little fake resistance as your crotch is unzipped. A 'nooo~...' here, a 'but we're in public...' there.");
			writeText("But as time passes, it's clear to her that you're enjoying yourself.");
			writeText("With everyone else riding public transit, you almost feel like you're being watched by everyone around you. But you relax into the stimulation, and soon enough...");
			writeBig("imagebox/mirror/research1-2-1.gif");
			writeText("You're cumming onto her hand, she's taking a great deal of satisfaction wringing everything she can out of you.");
			writeSpeech("girlfriend", "", "It was nice meeting you. This is my stop.");
			writeText("She hangs around long enough to give you a chance to hide your dick before she leaves. Inside your pocket you find a small piece of paper with her number on it.");
			writeText("But before your eyes reality begins to shimmer, you're being sent back to your reality.");
			break;
		}
		case "mirrorResearch1-3": {
			writeBig("imagebox/mirror/research1-3-1.gif");
			writeBig("imagebox/mirror/research1-3-2.gif");
			writeBig("imagebox/mirror/research1-3-3.gif");
			writeBig("imagebox/mirror/research1-3-4.gif");
			break;
		}
		case "mirrorResearch1-4": {
			writeBig("imagebox/mirror/research1-4-1.gif");
			writeBig("imagebox/mirror/research1-4-2.gif");
			break;
		}
		case "mirrorResearch1-5": {
			writeBig("imagebox/mirror/research1-5-1.gif");
			writeBig("imagebox/mirror/research1-5-2.gif");
			break;
		}
		case "mirrorResearch2-1": {
			writeText("As you're pulled through the mirror you suddenly feel very exposed. Looking down, you can see that your clothes have disappeared.");
			writeText("On instinct, you move to cover yourself and feel more than a little panicked. That fades once a familiar face comes up to you.");
			writeBig("images/mirror/research1-1.jpg");
			writeSpeech("assistant", "", "Hi! Welcome to our dimension, my name is "+assistantF+".");
			writeSpeech("player", "", data.player.fName+". Um...");
			writeSpeech("assistant", "", "Ah, right, sorry. Here you go.");
			writeText("She tosses you a thin-looking bathrobe and you put it on just to have something to wear. It barely covers anything, the hem only going down your thigh. Not only that, but despite it being so thin it feels warm and stuffy.");
			writeText("Looking around you can see that a number of technicians, mostly those working with dangerous tools, are wearing labcoats. Everyone else is going stark naked if possible.");
			writeText("One of the technicians notices you looking, and pulls aside the flap of her coat to show you she's wearing nothing underneath before winking at you.");
			writeText("Everyone looks gorgeous, you recognize some familiar faces and some look vaguely like more attractive versions of people you know.");
			writeSpeech("assistant", "", "Sorry we only had the robe. You're only our second foray into dimension-hopping. Oh! "+bossF+" will want to see you, she should be here any minute now.");
			writeSpeech("boss", "", "I'm already here.");
			writeBig("images/mirror/research1-2.jpg");
			writeSpeech("boss", "", "You look surprised to see me. Fuck, wait, am I a bitch in your dimension too?");
			writeText("...");
			writeText("You spend the next few hours learning about this dimension. The robe is uncomfortable, but you haven't quite acclimated to total public nudity yet. You'll need to ditch the robe later though.");
			writeSpeech("notes", "", "Findings:<br>In this dimension public nudity and sexuality are considered completely normal, with prudishness being comparable to your dimension's deviancy. Going naked whenever possible is the default, and clothes are typically only worn for the sake of safety or for teasing. A very common fetish is flashing, since wearing clothes giving most people an exotic feeling that makes nudity even more exciting.<br>Public sex is also considered normal. Since women have a lower refractory period, most public sex involves a man using a woman's mouth, pussy, or ass to relieve himself. Society as a whole has been built around the idea of sex being as accessible as asking for directions.");
			tempScene = 'work';
			break;
		}
		case "mirrorResearch2-2": {
			writeBig("imagebox/mirror/research2-2-1.gif");
			writeBig("imagebox/mirror/research2-2-2.gif");
			writeBig("imagebox/mirror/research2-2-3.gif");
			writeBig("imagebox/mirror/research2-2-4.gif");
			break;
		}
		case "mirrorResearch2-3": {
			writeBig("imagebox/mirror/research2-3-1.gif");
			writeBig("imagebox/mirror/research2-3-2.gif");
			break;
		}
		case "mirrorResearch2-4": {
			writeBig("imagebox/mirror/research2-4-1.gif");
			writeBig("imagebox/mirror/research2-4-2.gif");
			writeBig("imagebox/mirror/research2-4-3.gif");
			writeBig("imagebox/mirror/research2-4-4.gif");
			break;
		}
		case "mirrorResearch2-5": {
			writeBig("imagebox/mirror/research2-5-1.gif");
			writeBig("imagebox/mirror/research2-5-2.gif");
			writeBig("imagebox/mirror/research2-5-3.gif");
			writeBig("imagebox/mirror/research2-5-4.gif");
			break;
		}
		case "cageResearch1": {
			writeSpeech("player", "", "Alright, no problems.");
			writeText("The pink chastity cage slips on without issue. The cage itself seems to adjust itself no matter how large the wearer's dick is, meaning it'll always feel tight and restrictive, but never so far as to cut off blood flow.");
			writeText("There'd been a bit of confusion when you requested access to the cage, but the higher-ups gave the green light on the experiment without hesitation.");
			writeSpeech("player", "", "Huh. I thought it was supposed t-Ghhggg~!");
			writeText("You knees buckle as the effect of the cage triggers. Anyone who cages themselves in the pink plastic ends up with a smaller dick, but the inbetween is the interesting part.");
			writeBig("imagebox/cage/research1-1.gif");
			writeText("Your knees buckle as your dick leaks from inside the cage, your body changing and morphing by the second.");
			writeText("Soon enough it isn't just a few drops of cum, your cock actually begins to <b>squirt</b> a solid stream of cum onto the floor.");
			writeText("Each squirt that splatters onto the floor feels like a hundred orgasms in one, because that's what they are. With each squirt you're permanently converting your cock's mass into the cum you've been spraying onto the ground.");
			writeText("And it isn't just mass. Sexual stamina, confidence, your ability to resist being a pathetic quick-shot, all of those are converted into near-seethrough jizz as well.");
			writeText("There isn't a single sperm cell in your cum anymore, your ability to impregnate is gone now to. Your voice, your moans, every sound you make is going higher and higher as you squeeze out as much sissy cum as you can.");
			writeText("You fall backwards as the stream slows down. Your brain is foggy, thinking in complete sentences is too much for you now. Before you go completely stupid, you at least have the good sense to take off the cage as it *CLICK*s unlocked.");
			writeBig("imagebox/cage/research1-2.gif");
			writeText("You're ruined now. All you've got on your crotch could barely even be called a clit now. All that strength and masculinity is gone. Your cock can never get hard again, but it wouldn't matter since it wouldn't even be two inches long.");
			writeText("What would happen if you put on the cage again? What else could be converted into cum?");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "onaholeResearch1": {
			writeText("But enough of that kinky shit. You press your head against the opening, reports describe 'mind-breaking pleasure' as a common result of the onahole.");
			writeText("You meant to plunge balls-deep in a single thrust, but there's a great deal of resistance once your head slips in.");
			writeSpeech("player", "", "Ghhh-HHHgg~!");
			writeText("The sensation begins hitting you immediately. The toy almost seems to squirm in your grasp as you fight to thrust in, every inch of your cock penetrating the onahole is enwrapped in a white hot pleasure.");
			writeText("You're barely able to stand as you feel your cockhead bump into the back of the sex toy, your eyes roll back as dopamine floods your brain. You start pulling out and thrusting back in.");
			writeBig("imagebox/onahole/research1-1.gif");
			writeText("You're already cumming, paining the insides white. The onahole doesn't distend though, not a drop of cum seems to leak out either.");
			writeText("But the real fun is only beginning as you can feel something press against your cock's lips, slowly testing the opening to your urethra.");
			writeSpeech("player", "", "Nnngh~! M-moooore~!");
			writeBig("imagebox/onahole/research1-2.gif");
			writeText("A tendril slides into your cockhole, nerves that should be lighting up with pain are instead overloading your brain with pleasure. You should be blacking out but an electric energy is pulsing through your body keeping you awake and aware of every second.");
			writeText("The tendril slides down your urethra, you can feel it pushing down into you. Every inch of your insides it touches feels like it's exploding. You should be cumming, but you aren't even subconsciously in control of your body anymore.");
			writeText("The tendril reaches your balls, and you can feel bumps travel down the tentacle's length before depositing some kind of fluid into your balls.");
			writeText("You can see them expanding as you look down, pulsing with some dark, unholy substance. This entire process has felt like one long orgasm.");
			writeText("You're on the ground, your muscles spasming but you're careful to hold the onahole in place until you can feel the 'injection' finish. The tentacle slowly pulls itself out of your now-distended cockhole, and you can feel yourself regaining control of your body.");
			writeText("Once you're able to pull the sex toy off and hold it above your cock the euphoria is stil present, but in the background. Now you feel an all-consuming <b>hunger</b> as you look down.");
			writeBig("imagebox/onahole/research1-3.gif");
			writeText("You feel another rush of pleasure as you clench your balls, a simple tightening is enough to force yourself to piss out a load of jizz from your overpacked sack.");
			writeText("You cover the front of the toy, then you clench again and an arc of cum flies through the air. Again, again, again you cum.");
			writeText("...");
			writeText("Three weeks have passed, you're undergoing one last round of physical therapy.");
			writeSpeech("assistant", "", "I think that about covers it. How do they feel?");
			writeBig("imagebox/onahole/research1-4.gif");
			writeText("You heft your massive balls and watch them jiggle as you let them fall.");
			writeSpeech("player", "", "Incredible. They're so big, I can almost hear the cum being built up inside them.");
			writeSpeech("assistant", "", "Your body has adapted now. You'll be able to safely use the onahole again, and they'll get even bigger.<br>The process will fuck you up mentally though. We'll probably never even have another conversation like this again.");
			writeText("And it'll be completely worth it, too. Anything to feel that all-consuming pleasure again.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "gummyResearch1": {
			writeSpeech("player", "", "No time like the present!");
			writeText("You take one of the dicks made from the candy and start nibbling on the head. You can't bite any off, but instead after some sucking and licking a sweet fluid is discharged from the tip.");
			writeText("It tastes fruity, but the aftertaste is strange... and spreading?");
			writeText("As you swallow the fluid it leaves a tingling sensation in your mouth and down your throat. You absentmindedly keep sucking as the fuzzy warmth travels through your body.");
			writeText("...");
			writeText("You snap out of the stupor, take the dick out of your mouth, and look around. It's been fifteen minutes, you must have blacked out. The more pressing matter though...");
			writeBig("imagebox/gummy/research1-1.gif");
			writeSpeech("player", "", "Whoa...");
			writeText("Your ass could now only be described as a fatty booty, you look like you could star in Backdoor Sluts 9.");
			writeText("Your voice is higher, your hands are softer and the nails are lighter, the gummy dick's fluid must be changing you.");
			writeSpeech("player", "", "Holy shit, I could pass for a girl... A fucking hot girl...");
			writeText("But there's still more candy to test, the gummy dick is still bright and colorful.");
			writeText("...");
			writeSpeech("player", "", "Mmm~... Mmmm~...");
			writeBig("imagebox/gummy/research1-2.gif");
			writeText("Your body keeps changing, but the changes are growing more internal. You feel so on-edge you could cum from just one stroke of your cock, but your dick is completely soft.");
			writeText("The itch, the need to cum, it's coming from your ass now. Your brain doesn't even register your flaccid dick as a source of pleasure anymore.");
			writeText("Every swallow you change further, looking like a pornstar with painted nails and a winking asshole. You roll over, desparate for relief as you deepthroat the dick one last time to try and get out any of the sissifying juice left.");
			writeText("Trying to jerk off does nothing, but just rubbing your fingers along the rim of your ass has you trembling. You feel... enhanced. Aimless tingling running through your nerves.");
			writeSpeech("player", "", "Need... Need to cum~...");
			writeBig("imagebox/gummy/research1-3.gif");
			writeSpeech("player", "", "Oooo-oooh~!!!");
			writeText("As you push your manicured fingers into your fuckhole, they bump up against something soft that sends wonderful sensations through your body.");
			writeText("It's too big to be your prostate... Probably. Unless your prostate grew three times as large and as sensitive.");
			writeText("But there's no point worrying anymore. Each press of your fingers against your bitch-button causes a stream of cum to flow freely from your dick.");
			writeText("You squirm and enjoy you new body until eventually you're wrung dry, and fall asleep.");
			writeText("...");
			writeText("By the time you've woken back up, you're in your old body again. You do feel a little softer all around though, and even when hard your dick seems a little floppier than before. Another usage, and the effects might be permanent.");
			break;
		}
		case "gummyResearch2": {
			writeSpeech("boss", "", data.player.name+"~? How's the milking going?");
			writeBig("imagebox/gummy/research2-1.gif");
			writeSpeech("player", "", "C-cumming! Cumming again!");
			writeText("It's strange. Here you are, hand on your dick, but all you can focus on is the dildo in your ass as you pump sissy cum out of yourself.");
			writeSpeech("player", "", "T-three! Came three times!");
			writeSpeech("boss", "", "Good boy. It looks like high quality stuff too.");
			writeText("Once your transformation became permanent you no longer came sperm. Instead your jizz is a high-quality sweet that sells pretty well on the black market.");
			writeText("Or so you're told. You're not allowed to have or waste any.");
			writeSpeech("player", "", "M-my reward?");
			writeSpeech("boss", "", "Shhh. Over the mat. You'll get your reward. Harry?");
			writeText("A large man walks into the room, stark naked and dick hanging down slapping against his thighs.");
			writeText("You're giddy with anticipation as you assume the position.");
			writeBig("imagebox/gummy/research2-2.gif");
			writeSpeech("player", "", "Yes! Yes! Yesyesyes~!");
			writeSpeech("boss", "", "Now you know the rules. Don't waste any cum, alright?");
			writeText("But you can't hear her, nor do you care. You have what you need now.");
			writeBig("imagebox/gummy/research2-3.gif");
			writeText("This is your life now, a sissy cum fountain made to be used.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		default: {
			writeText("You've encountered an error! Please let me know about this, the errorcode is:");
			writeText("writeScene "+scene);
			break;
		}
	}
	if (data.player.currentScene != 'gallery') {
		console.log('passing time');
		passTime();
	}
	writeTransition(tempScene, "Finish");
	var girl = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == scene) {
			girl = galleryArray[i].girl;
		}
	}
	console.log('attempting to unlock logbook for '+girl);
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == girl) {
			data.story[i].met = true;
		}
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
}

function checkDay() { //For checking for holidays, payday, and for new text messages, alt-2 to close
	var specialEvent = false;
	console.log("Now checking for special events for on day " + data.player.day);
	if (data.player.day == 3) {
		//specialEvent = true;
		//writeFunction("writeEvent('specialDay')", "Go to the special event");
		//writeTransition("home", "Skip the event");
	}
	specialEvent = dreamCheck();
	switch (data.player.artifact2) {
		case "coin": {
			break;
		}
	}
	if (specialEvent == false) {
		console.log("No events found");
		sceneTransition('room');
	}
	else {
		writeEvent(specialEvent);
	}
	data.player.time = "Morning";
}

function checkForEvents() {
	switch (tempScene) {
		case "work": {
			writeArtifact("bracelet");
			writeArtifact("erotibox");
			writeArtifact("mirror");
			writeArtifact("stopwatch");
			writeTransition("darkVault", "Request a Dark Vault artifact");
			break;
		}
		case "home": {
			if (data.player.artifact1 == "bracelet") {
				if (galleryCheck('braceletHome1') == false) {
					writeFunction("writeEvent('braceletHome1')", "Use the bracelet on " + data.story[0].fName);
				}
				else {
					if (galleryCheck('braceletHome2') == false) {
						writeFunction("writeEvent('braceletHome2')", "Use the bracelet on " + data.story[0].fName + " again");
					}
					else {
						if (galleryCheck('braceletHome3') == false) {
							writeFunction("writeEvent('braceletHome3')", data.story[0].fName + "'s girlfriend is coming over, use the bracelet on her");
						}
						else {
							if (galleryCheck('braceletHome4') == false) {
								//writeFunction("writeEvent('braceletHome4')", "Use the bracelet on " + data.story[0].fName + " and " + data.story[2].fName);
							}
						}
					}
				}
				if (galleryCheck('braceletOutdoor1') == false) {
					writeFunction("writeEvent('braceletOutdoor1')", "Take the bracelet to the gym");
				}
				else {
					if (galleryCheck('braceletOutdoor2') == false) {
						writeFunction("writeEvent('braceletOutdoor2')", "Take the bracelet to the gym again");
					}
				}
				if (galleryCheck('braceletOutdoor4') == false) {
					writeFunction("writeEvent('braceletOutdoor4')", "Head out to a bar for some fun");
				}
			}
			switch (data.player.artifact2) {
				case "coin": {
					break;
				}
				case "stopwatch": {
					if (galleryCheck('stopwatchHome1') == false) {
						writeFunction("writeEvent('stopwatchHome1')", "Use the stopwatch on " + data.story[0].fName + " at the school");
					}
					else {
						
						if (galleryCheck('stopwatchHome2') == false) {
							writeFunction("writeEvent('stopwatchHome2')", "Use the stopwatch on " + data.story[0].fName + " at the school again");
						}
					}
					if (galleryCheck('stopwatchOutdoor1') == false) {
						writeFunction("writeEvent('stopwatchOutdoor1')", "Start a strip-show on the street");
					}
					break;
				}
			}
		}
		break;
	}
}