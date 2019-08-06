function writeScene(scene) {
	console.log("Now writing scene ID " + scene + ", the time is " + data.player.time);
	switch(scene) {
		//System Locations
		case "start" : {
			writeBig("scripts/gamefiles/logo.png");
			writeText("Anomaly Vault is an adult game created by NoodleJacuuzi. You can find and keep up with all of my work, including Human Alteration App, Princess Quest, Rainy DayZ, and Hentai University at my master index here:");
			writeText("https://noodlejacuzzi.github.io/index.html");
			writeText("As a content warning this game features numerous bizarre fetishes which may be too extreme for some. At the bottom of this page you can find a fetish list, detailing the tags associated with each of this game's artifacts. If there's a specific topic you'd like to avoid, stay away from the related artifacts. This game contains no underage or scatological content.");
			writeTransition("prologue", "Start the game");
			//writeTransition("prologueSkip", "Skip the prologue");
			writeText("Other notes:");
			writeText("This game was commissioned via Patreon by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</p>");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("I'm always open to comments or criticism. If you have an idea for an artist or scene or you'd like to suggest content of your own, you can shoot me a message at anytime on TFgames, F95zone, or my Patreon page at https://www.patreon.com/noodlejacuzzi");
			writeText("You can also send me a message on discord (I'm NoodleJacuzzi#4120) or an email at noodlejacuzzi@gmail.com");
			writeTransition("contentList", "See a breakdown of each artifact's content");
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
			writeSpeech("Reprehensive Bangle", "scripts/gamefiles/items/bracelet.jpg", "<br>Tag List:<br>Unperceived Sex<br>Memory Alteration<br>Dubious Consent<br>Seduction of women in committed relationships");
			writeSpeech("Erotibox", "scripts/gamefiles/items/erotibox.jpg", "<br>Tag List:<br>Corruption<br>Mind Control<br>Emma Watson Deepfake");
			writeSpeech("Exchange Gas", "scripts/gamefiles/items/gas.jpg", "DARK VAULT<br>Tag List:<br>Genderswap<br>Cock Worship");
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
						writeFunction("nap()", "Take a nap");
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
						writeFunction("nap()", "Take a nap");
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
							writeSpeech("roommate", "", "I was just about to head out. I think we've got some leftovers in the fridge.");
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
							writeFunction("nap()", "Waste time");
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
			writeArtifact("gas");
			writeTransition("work", "Go back");
			break;
		}
		//Artifacts
		case "braceletResearch": {
			tempScene = 'work';
			researchLevel('bracelet');
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
			break;
		}
		case "gasResearch": {
			tempScene = 'work';
			researchLevel('gas');
			break;
		}
		case "bracelet": {
			var researchScenes = 0;
			var researchName1 = scene+"Research";
			var researchName2 = "";
			var researchCounter = 1;
			console.log('researchName1 = ' +researchName1);
			for (i = 0; i < data.gallery.length; i++) {
				researchName2 = researchName1 + researchCounter;
				console.log('researchName2 = ' +researchName2);
				if (data.gallery[i].index.includes(researchName2)) {
					console.log('found scene named ' +data.gallery[i].index+ ', incresing research scenes');
					researchScenes += 1;
					researchCounter += 1;
				}
			}
			console.log('researchScenes = ' + researchScenes);
			var sceneTarget = 'failed';
			for (i = 0; i < researchScenes; i++) {
				researchName2 = scene+"research"+i;
				if (galleryCheck(researchName2) == false) {
					sceneTarget = researchName2;
					break;
				}
			}
			console.log('sceneTarget = ' + sceneTarget);
			if (sceneTarget != 'failed') {
				writeEvent(researchName2);
			}
			break;
		}
		case "bracelet": {
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
			writeSpeech("player", "", "Hey! Bitch!");
			writeBig("images/braceletResearch.gif");
			writeText("You slap "+data.story[1].fName+" hard on the ass, and she does a little jump on the spot while letting out a squeak. But instead of getting mad she just rubs her ass and looks around to see if anyone saw.");
			writeText("...");
			writeSpeech("notes", "", "Findings:<br>The bracelet allows the wearer to be unperceived by others but only when the wearer desires to go unnoticed.<br>If the wearer wishes, any action they take will go unnoticed, including physical actions such as pinching and molesting. People affected by these actions will still feel the repercussions, but they will ignore the actions as if they were run of the mill occurrences.<br>The wearer can erase memories from other people's minds. This effect is limited to memories of the wearer or the wearer's indirect actions.");
			writeSpecial("Each artifact will have a research scene like this one. They won't be erotic in nature, that is saved for later scenes where you continue to research the artifact or bring it home. These scenes just explain the nature and capabilities of an artifact so that you understand what you're getting into.");
			writeText("You now have the bracelet equipped. Let's hop on back home.");
			writeTransition("home", "Go home");
			break;
		}
		case "coin": {
			break;
		}
		case "playerHouse": {
			writeTransition("home", "You broke something! The error code is 'home'");
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
			writeTransition("start", "Go back");
		}
	}
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log('now writing event '+scene);
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
			writeSpeech("player", "", "Alright, I'm crossing a line here. No going back now.<br>"+roommateF+"? You home?");
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
			writeText(girlfriendF+" leans as far forwards as she can beneath you and pulls "+roommateF+" into a deep kiss. You can feel her "+girlfriendF+"'s pussy clench. She's french-kissing her girlfriend while a man pumps jizz into her womb.");
			writeText("You pull out, spent, and watch as "+roommateF+"'s hole gapes a little open once you pull out. She must've cum at least twelve times by your count, but she's damn good at hiding it.");
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
			writeBig("images/gas/research1-1.gif");
			writeBig("images/gas/research1-2.gif");
			writeBig("images/gas/research1-3.gif");
			break;
		}
		case "gasResearch2": {
			writeBig("images/gas/research2-1.gif");
			writeBig("images/gas/research2-2.gif");
			writeBig("images/gas/research2-3.gif");
			break;
		}
		case "gasResearch3": {
			writeBig("images/gas/research3-1.gif");
			writeBig("images/gas/research3-2.gif");
			writeBig("images/gas/research3-3.gif");
			break;
		}
		case "failed": {
			writeText("Wracking your brain, you just don't have any more ideas for how to research this artifact in a clinical setting.");
			writeText("You've already finished researching this artifact, but there might be more to do with it if you can equip it and bring it home.");
			break;
		}
		default: {
			writeText("You've encountered an error! Please let me know about this, the errorcode is:");
			writeText("writeScene "+scene);
			break;
		}
	}
	if (data.player.currentScene != 'gallery' && scene != 'failed') {
		console.log('passing time');
		passTime();
	}
	if (data.player.currentScene == "darkVault") {
		tempScene = 'work';
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
			}
			if (data.player.artifact1 == "bracelet") {
				if (galleryCheck('braceletOutdoor1') == false) {
					writeFunction("writeEvent('braceletOutdoor1')", "Take the bracelet to the gym");
				}
				else {
					if (galleryCheck('braceletOutdoor2') == false) {
						writeFunction("writeEvent('braceletOutdoor2')", "Take the bracelet to the gym again");
					}
				}
			}
			switch (data.player.artifact2) {
				case "coin": {
					break;
				}
			}
		}
		break;
	}
}