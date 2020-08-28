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
			writeTransition("prologueSkip", "Skip the prologue");
			writeTransition("startWardrobe", "Change your profile image");
			writeText("Other notes:");
			writeText("This game was commissioned via Patreon by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</p>");
			writeText("And I'm supported by my other patrons as well. Thank you to Swallows999, O Xy Enkin, Joshua Ingram, Robbie, CaptainMontana, andres mejia, Badaxe, Carlos, ChronosEdge, Colin E, Dkells, dragoon48, Dustin Leichsenring, Filament, G, Hi There, J_C_L, jack spencer, Jesse Greene, Jinouga, Keith, Macarga, Marc Maldon, Marco Wassmer, Negativatron, Ramsey Bisher, Richard, Scal, Skyrim mod lvr, StormSight, Taylor Trout, XxrobothacksxX, 林家豪, Aegil, Alec8686, Alfonso, Angel, Anthony Ewing, Anthony Munso, Ariados, Blaise Fenn, Bonelessunknown, brandon, Bryson, Carlos, Chaaaanon, Charles Morris, ChubbiestThread, Daekash, Daniel Vivette, Danny Nguyen, Darrell Goodman, DarthMalak, ddkre, Debarre Sonny, Devin, dhccpmc, Drashin, Dugelle, Emanuel  Garcia, fireballcreations, Geoff Heimos, GirmusCz, Greg Torres, Grim2011, Gwen Yurick, Harry Brasch, henry grobins, ItsAllOgreNow, I'm a Mitch, Jane, joel larsen, John Lewis, john smith, Johnathan Thornburg, Joshua Melzark, KH dg, Kieron Kow, KVBismarc, l, l1monat, liam paterson, Limitless, Louis Hayes, Magnus, Markus Hansen, Mars, mazterlith, murgatroid99, Muryu, Nathan Martin, Nils Maier, Noah, Nutburger, Phanes, PR0 x THUNDER, qwerty, ranchy sanchy, Reverberations, Riven Drasek, Roy, Scumstango, Sebastian Eckel, ShadowFalls, Simon Rencher, Slomberg, SmolFish, Snaked, stratum, Tanman, Taurus Travon Rashad Lemar Brackin, Trevor, Vincent Madaire-Cullen, Wei, Wild Bill, William Parker, William Richardson, wolfboom, XaiuX, Your Husbando, Z, and 魏.");
			writeText("Swallows actually wrote some content for the game, you can unlock his scenes like normal, and he has a special section in the gallery. If you'd like to put your scene in the game, feel free to send it to me.");
			writeText("You can change your profile image in game by using the wardrobe in your room. You can also cheat in your room if you know a code.");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("This game is very gameplay-light. There's no filler. If you'd like something a bit more gamey, I'd suggest checking out Bitch Medicenter, a game that's currently on my master index. It's just a demo at the moment, but I'd love to take your feedback.");
			writeText("I'm always open to comments or criticism. If you have an idea for an artist or scene or you'd like to suggest content of your own, you can shoot me a message at anytime on TFgames, F95zone, or my Patreon page at https://www.patreon.com/noodlejacuzzi");
			writeText("You can also send me a message on discord (I'm NoodleJacuzzi#4120) or an email at noodlejacuzzi@gmail.com");
			writeTransition("contentList", "See a breakdown of each artifact's content");
			data.player.style = "";
			data.player.pervertLevel = 0;
			for (x = 0; x < logbookArray.length; x++) {
				writeSpeech(logbookArray[x].index, "", "What the fuck tho?!");
			}
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
			//Calculate bracelet stuff
			var researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('bracelet')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Reprehensive Bangle", "scripts/gamefiles/items/bracelet.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Unperceived Sex<br>Memory Alteration<br>Dubious Consent<br>Seduction of women in committed relationships");
			//Calculate erotibox stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('erotibox')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Erotibox", "scripts/gamefiles/items/erotibox.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Corruption<br>Mind Control<br>Emma Watson Deepfake");
			//Calculate mirror stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('mirror')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Antique Mirror", "scripts/gamefiles/items/mirror.jpg", researchTotal+" total scenes implemented<br>Free Use Dimension Tag List:<br>Free Use<br>Ignored Sex<br>Exhibitionism<br>Bondage<br>Gender Dynamics Dimension Tag List:<br>Femdom<br>Sexual Molestation<br>Reverse Rape");
			//Calculate stopwatch stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('stopwatch')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Time Stopwatch", "scripts/gamefiles/items/stopwatch.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Time-Stop<br>Emotionless Sex<br>Mind Break<br>Embarassed Nude Female<br>Humiliation");
			//Calculate coin stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('coin')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Midas Coin", "scripts/gamefiles/items/coin.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Perception alteration<br>Public sex");
			//Calculate serum stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('serum')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Super Truth Serum", "scripts/gamefiles/items/serum.jpg", researchTotal+" total scenes implemented<br>Tag List:<br>Perception alteration<br>Anal");
			//Calculate gas stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('gas')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Exchange Gas", "scripts/gamefiles/items/gas.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Genderswap<br>Cock Worship");
			//Calculate gummy stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('gummy')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Gummy Dicks", "scripts/gamefiles/items/gummy.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Sissification<br>Prostate Stimulation");
			//Calculate cage stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('cage')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Punification", "scripts/gamefiles/items/cage.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Cock Shrinking<br>De-masculinization");
			//Calculate onahole stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('onahole')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Succubus Onahole", "scripts/gamefiles/items/onahole.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Tentacles<br>Urethral Penetration (Sounding)<br>Ball Growth");
			//Calculate toolkit stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('toolkit')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Sissy's Toolkit", "scripts/gamefiles/items/toolkit.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Sissification, Feminization, Interracial");
			//Calculate playlist stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('playlist')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Domino Playlist", "scripts/gamefiles/items/playlist.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Sissification, Humiliation, Ahegao-brand clothes");
			//Calculate nymph stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('nymph')) {
					researchTotal += 1;
				}
			}
			writeSpeech("Nymph Mirror", "scripts/gamefiles/items/nymph.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Genderbender, Body-Swap, Nymphomania");
			//Calculate vhs stuff
			researchTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('vhs')) {
					researchTotal += 1;
				}
			}
			writeSpeech("ErotiVHS Player", "scripts/gamefiles/items/vhs.jpg", researchTotal+" total scenes implemented (DARK VAULT)<br>Tag List:<br>Genderbender, Body-Swap, 2d Hentai");
			writeTransition("start", "Back to the start screen");
			break;
		}
		case "prologue": {
			data.player.day = 0;
			updateMenu();
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
			writeFunction("renamePlayer()", "Finish");
			break;
		}
		case "prologue3": {
			writeText("You place the filled out form back onto the table. Everything's... Hazy, to say the least.");
			writeText("There's a moment of silence before a large metal door behind you opens. A vaguely familiar face greets you.");
			writeBig("scripts/gamefiles/characters/assistant.jpg");
			data.story[1].met = true;
			writeSpeech("assistant", "", "Mr. playerL! Glad you're back. After the fifth attempt management said we should give up on you.");
			writeText("She tosses you a coat and a change of clothes. Looking over yourself, you're wearing what almost resembles a hospital gown.");
			writeText("It's all coming back to you, you grabbed some earings, and...");
			writeBig("images/misc/dream1-1.gif");
			writeTransition("prologue4", "... Hello?");
			break;
		}
		case "prologue4": {
			writeSpeech("assistant", "", "Are you feeling alright? The amnestics should have blocked most of it out.");
			writeSpeech("player", "", "Yeah... Yeah I'm alright.");
			writeText("You are playerF playerL, researcher at the Anomaly Vault Research Office, responsible for the research and potential applications of artifacts found around the world.");
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
		case "prologueSkip": {
			data.player.day = 2;
			data.player.artifact1 = "bracelet";
			updateMenu();
			unlockScene('braceletDream1');
			unlockScene('braceletHome1');
			unlockScene('braceletResearch1');
			document.getElementById('output').innerHTML = '';
			writeText("First Name: <input type='text' id='nameSubmission' value='Swallows'>");
			writeText("Last Name: <input type='text' id='lastSubmission' value='Deeznuts'>");
			writeFunction("renamePlayerSkip()", "Finish");
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
				sceneTransition('office');
			}
			else {
				writeText("The car ride is silent and quick. The windows are kept blacked out to keep your identity hidden from the outside world.");
				writeText("Not only that, but you're completely cut off from the driver. It's a shame too, since some conversation might help pass the time. Maybe talking about how cold the weather's getting would get boring after the fifth time, but still.");
				writeText("You'll probably tune out the drive from now on.");
				writeTransition("office", "You've arrived");
			}
			break;
		}
		case "napHome": {
			switch (data.player.time) {
				case "Morning":
					data.player.time = "Noon";
				break;
				case "Noon":
					data.player.time = "Evening";
				break;
				case "Evening":
					data.player.time = "Night";
				break;
				case "Night":
					if (data.player.currentScene == "newDay") {
						data.player.time = "Morning";
					}
				break;
			}
			sceneTransition("home");
			break;
		}
		case "napWork": {
			switch (data.player.time) {
				case "Morning":
					data.player.time = "Noon";
				break;
				case "Noon":
					data.player.time = "Evening";
				break;
				case "Evening":
					data.player.time = "Night";
				break;
				case "Night":
					if (data.player.currentScene == "newDay") {
						data.player.time = "Morning";
					}
				break;
			}
			writeScene("work");
			break;
		}
		//Locations
		case "room": {
			data.player.entryPoint = 'room';
			if (data.player.time == "Morning") {
				writeBackground("scripts/gamefiles/locations/morning.jpg");
				document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/morning.jpg)";
			}
			else {
				writeBackground("scripts/gamefiles/locations/room.jpg");
				document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/room.jpg)";
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
						writeTransition("newDay", "Go to sleep");
						writeTransition("home", "Leave your room");
						if (data.player.toolbox == true) {
							writeTransition("toolbox", "Enter the toolbox department");
						}
						if (data.player.color.includes('roomBox') != true && data.player.color.includes('toolbox') == true) {
							data.player.color += 'roomBox';
							document.getElementById('output').innerHTML = '';
							writeText("You walk into your room and notice your drawer is glowing from the inside. Having no sense of self-preservation, you pull open the drawer and see a smaller version of the toolbox department inside.");
							writeText("Everything is miniature, but you get a strange feeling that if you focus hard enough you can envision yourself inside the department. It's strange, but convenient. ");
							writeText("You can now enter the toolbox department from your room! Using it as a way to sneak into work is a good way to get shot by a security system though..");
							writeTransition("room", "Finish");
						}
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
						writeTransition("napHome", "Sleep in till noon, skip work");
					}
					else {
						writeTransition("newDay", "Go to sleep");
						writeTransition("home", "Leave your room");
						if (data.player.color.includes('roomBox') == true) {
							writeTransition("toolbox", "Enter the toolbox department");
						}
						if (data.player.color.includes('roomBox') != true && data.player.color.includes('toolbox') == true) {
							data.player.color += 'roomBox';
							document.getElementById('output').innerHTML = '';
							writeText("You walk into your room and notice your drawer is glowing from the inside. Having no sense of self-preservation, you pull open the drawer and see a smaller version of the toolbox department inside.");
							writeText("Everything is miniature, but you get a strange feeling that if you focus hard enough you can envision yourself inside the department. It's strange, but convenient. ");
							writeText("You can now enter the toolbox department from your room! Using it as a way to sneak into work is a good way to get shot by a security system though..");
							writeTransition("room", "Finish");
						}
					}
					break;
				}
			}
			break;
		}
		case "home": {
			writeBackground("scripts/gamefiles/locations/home.jpg");
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/home.jpg)";
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
							writeFunction("napHome", "Let her go and take a nap");
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
							checkForEvents();
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
		case "office": {
			data.player.entryPoint = 'office';
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/office.jpg)";
			writeBig("scripts/gamefiles/locations/office.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 1: {
					switch (data.player.time) {
						case "Morning": {
							writeSpeech("assistant", "", "Hey boss! I've got the new artifact in testing room A. " + data.story[3].lName + " said to get on it right away.");
							writeTransition("work", "Head to the Testing Lab");
							break;
						}
						case "Noon": {
							writeSpeech("assistant", "", "You forget we don't take lunch here? Honestly though, sometimes I miss being hungry. Anyways, I'm headed to the testing lab.");
							writeTransition("work", "Head to the Testing Lab");
							writeTransition("toolbox", "Head to the Toolbox Department");
							writeTransition("storage", "Head to the Storage Department");
							break;
						}
						case "Evening": {
							writeText("You make sure to keep your sleeve down to hide the artifact, feeling nervous every time you pass through a security checkpoint. This thing should keep you safe from consequences, but you need to stay on your guard at least until you get home.");
							writeText("Still, some alarms should have gone off by now. Is this another effect of the bracelet, or is management letting you leave?");
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
				case 2: {
					switch (data.player.time) {
						case "Morning": {
							writeSpeech("assistant", "", "Hey boss! I've got the new artifact in testing room A. Oh! Before I go, bossL came in a bit ago and left a note on your desk.");
							writeFunction("writeEvent('prologueMemo')", "bossL's Memo");
							writeTransition("work", "Head to the Testing Lab");
							writeTransition("toolbox", "Head to the Toolbox Department");
							writeTransition("storage", "Head to the Storage Department");
							break;
						}
						case "Noon": {
							writeTransition("work", "Head to the Testing Lab");
							writeTransition("vault", "Head to the Dark Vault");
							writeTransition("toolbox", "Head to the Toolbox Department");
							writeTransition("storage", "Head to the Storage Department");
							writeTransition("home", "Go home early");
							break;
						}
						case "Evening": {
							writeText("You make sure to keep your sleeve down to hide the artifact, feeling nervous every time you pass through a security checkpoint. This thing should keep you safe from consequences, but you need to stay on your guard at least until you get home.");
							writeText("Still, some alarms should have gone off by now. Is this another effect of the bracelet, or is management letting you leave?");
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
				default: {
					if (data.player.time != "Night") {
						writeTransition("work", "Head to the Testing Lab");
						writeTransition("vault", "Head to the Dark Vault");
						writeTransition("toolbox", "Head to the Toolbox Department");
						writeTransition("storage", "Head to the Storage Department");
						writeTransition("prison", "Head to the Prison Department");
						if (data.player.color.includes('katya') != true && data.player.day > 3) {
							writeTransition("katyaIntro", "It seems like assistantF wants to ask you something.");
						}
						if (data.player.color.includes('promotion') != true && data.player.day > 4) {
							writeSpeech("assistant", "", "Hey, Mrs. bossL wanted to see you about something. She said it wasn't urgent, but you know how she can get sometimes.");
							writeTransition("promotion", "Head to bossL's office");
						}
						if (data.player.color.includes('interview') != true && data.player.color.includes('promotion') == true) {
							writeTransition("interview", "Head to your interview");
						}
					}
					switch (data.player.time) {
						case "Morning": {
							writeTransition("napWork", "Waste some time");
							break;
						}
						case "Noon": {
							writeTransition("home", "Go home early");
							break;
						}
						case "Evening": {
							writeTransition("home", "Go home early");
							break;
						}
						case "Night": {
							writeTransition("home", "Head home");
							break;
						}
					}
				}
			}
			break;
		}
		case "work": {
			writeBackground("scripts/gamefiles/locations/work.jpg");
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/work.jpg)";
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 1: {
					switch (data.player.time) {
						case "Morning": {
							writeArtifact("bracelet");
							break;
						}
						case "Noon": {
							writeArtifact("bracelet");
							writeArtifact("erotibox");
							writeTransition("office", "Go back to your office");
							break;
						}
						case "Evening": {
							writeText("You tug at the artifact on your wrist, but the bracelet isn't budging.");
							writeSpeech("player", "", "Fuck.");
							writeText("This thing isn't coming off, period. It's getting a bit late, so you should probably head home.");
							writeTransition("office", "Go back to your office");
							break;
						}
						case "Night": {
							writeTransition("room", "Go home");
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
							writeTransition("office", "Go back to your office");
							break;
						}
						case "Noon": {
							checkForEvents();
							writeTransition("office", "Go back to your office");
							break;
						}
						case "Evening": {
							checkForEvents();
							writeTransition("office", "Go back to your office");
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
		case "vault": {
			if (data.player.color.includes('vault') != true) {
				writeBig("scripts/gamefiles/characters/boss.jpg");
				writeSpeech("player", "", "Hey, Mrs. bossL?");
				writeSpeech("boss", "", "I'm busy. What do you want?");
				writeSpeech("player", "", "I was about to enter the dark vault, I was wondering if-");
				writeSpeech("boss", "", "You don't need permission anymore. The request system is automated now that you're authorized. Go ahead and kill yourself with them for all I care, you'd probably have more fun with the artifacts than a bullet to the temple.");
				writeSpeech("player", "", "<i>Alright, thanks ma'am! </i><br>Bitch.");
				writeText("There's a cold silence in the air as you realize which part of that you just said out loud. One panicked activation of the bracelet later, and she's gone from a cold yet murderous fury to a confused daze.");
				writeSpeech("boss", "", "What the hell are you doing in my office?");
				writeSpeech("player", "", "Oh, uh, I was about to enter the dark vault, I was wondering if-");
				writeText("You re-do the conversation properly and walk out. You're free to study and use dark vault artifacts now! ");
				data.player.color += 'vault';
				writeTransition("vault", "Continue");
			}
			else {
				document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/vault.jpg)";
				writeBackground("scripts/gamefiles/locations/vault.jpg");
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				if (data.player.time == "Night") {
					writeTransition("room", "Go Home");
				}
				else {
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
					writeArtifact("toolkit");
					writeArtifact("dust");
					writeArtifact("nymph");
					writeArtifact("playlist");
					writeArtifact("vhs");
					writeArtifact("doll");
					writeTransition("office", "Go back");
				}
			}
			break;
		}
		case "storage": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/storage.jpg)";
			writeBackground("scripts/gamefiles/locations/storage.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			console.log(data.player.storage);
			if (data.player.color.includes('storage') != true) {
				data.player.color += 'storage';
				writeText("You take a walk down a long flight of stairs until you walk into the warehouse. There are a few names for this place, but it's usually referred to as the Storage Department.");
				writeText("Here artifacts you've finished researching will be stored, so as to not clutter up your office with too many reality-warping objects at once. Records and logs of artifact obtainment missions are also kept here, but you need to be authorized for artifact hunting to review them. ");
				writeText("You cross over a few catwalks, hundreds of locked-away artifacts are kept here. It'd be best not to dilly dally unless you have some business here.");
				writeTransition("storage", "Continue");
			}
			else {
				writeTransition("office", "Go back");
				writeArtifactMini('logbook');
				for (storageIndex = 0; storageIndex < artifactArray.length; storageIndex++) {
					if (data.player.storage.includes(artifactArray[storageIndex].index) == true) {
						writeArtifact(artifactArray[storageIndex].index);
					}
				}
			}
			break;
		}
		case "prison": {
				document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/prison.jpg)";
			writeBackground("scripts/gamefiles/locations/prison.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			if (data.player.color.includes('prison') != true) {
				data.player.color += 'prison';
				writeText("A harsh metalic voice buzzes over a loudspeaker.");
				writeSpeech("Loudspeaker", "scripts/gamefiles/logo.png", "Do not breach containment. Should your actions be deemed risk-enabling, you will be terminated immediately as an employee and as a living being. Now scanning. ");
				writeText("A bright green light flashes. ");
				writeSpeech("Loudspeaker", "scripts/gamefiles/logo.png", "Identity and authorization confirmed. Reason for entry? ");
				writeSpeech("player", "", "Studying prisoners. ");
				writeSpeech("Loudspeaker", "scripts/gamefiles/logo.png", "Access granted, do not loiter. You are authorized entry, but without express instruction you are barred from navigation.");
				writeText("After a quick jaunt through the security checkpoints you're allowed through into the prison department.");
				writeText("Unfortunately individual prison cells can only be reached by inputting specific code phrases for the mechanical walkway to take you there. Unless you have one of those, there isn't much to do here.");
				writeTransition("prison", "Continue");
			}
			else {
				document.getElementById('output').innerHTML += `
					<p class='centeredText'>Individual prison cell clearance is unlocked by inputting specific code phrases.</p>
					<p class='centeredText'>Enter request: <input type="text" id="prisonerSubmission" value=""></p>
					<p class='choiceText' onclick='prison()'>Submit</p>
				`;
				console.log(data.player.color);
				for (prisonerIndex = 0; prisonerIndex < artifactMiniArray.length; prisonerIndex++) {
					if (data.player.color.includes(artifactMiniArray[prisonerIndex].code) == true) {
						if (artifactMiniArray[prisonerIndex].type == 'prisoner') {
							writeArtifactMini(artifactMiniArray[prisonerIndex].index);
						}
					}
				}
			}
			writeTransition("office", "Go back");
			break;
		}
		case "toolbox": {
			writeBackground("scripts/gamefiles/locations/toolbox.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			data.player.artifact1 = "bracelet";
			if (data.player.glasses == true) {
				writeText("The artifacts in this room don't really call anything to mind. If you really focus, images come to mind of assorted bits of furniture. Not very interesting.");
			}
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/toolbox.jpg)";
			if (data.player.color.includes('toolbox') != true) {
				data.player.color += 'toolbox';
				data.player.toolboxCounter = 1;
				writeText("<span class='martinText'>Hello.</span>");
				writeText("You clutch your head and double over as foreign noise blasts through your mind. You feel nauseous, and the room spins.");
				writeText("<span class='martinText'>Fuck, sorry. Some people are more sensitive than others. Red locker, bottom shelf, bottle with the red cap. Take one.</span>");
				writeText("Your vision is blurry, but you follow the instructions bouncing around inside your head. You take a small pill that dissolves in your mouth, and suddenly the pain is gone.");
				writeText("The bottle in your hand in labeled 'PANACEA'. You screw the top back on and put it away. ");
				writeSpeech("player", "", "That's a lot better. What's going on?");
				writeText("<span class='martinText'>Yeah, hi. You're in... Well, it's got a lot of names. Little Garden, the Witching Hour, Howard Martin, most people call it the Toolbox Department. Useful tools that aren't particularly dangerous are stored here in case vault employees need them.</span>");
				writeSpeech("player", "", "Why do people call it Howard Martin? ");
				writeText("<span class='martinText'>Because that's my name. I was a regular guy before I became this room. </span>");
				writeSpeech("player", "", "You have my condolences, being a room doesn't sound like much fun. ");
				writeText("The room itself is pretty well furnished. Several potted plants that look a bit overgrown, but-");
				writeText("<span class='martinText'>Yeah we've got a sofa over there, folds out into a bed. The box has some commercials from another dimension. Just ignore the plants, they'll ignore you too if you don't look at them for too long.</span>");
				writeSpeech("player", "", "Are you reading my m-? ");
				writeText("<span class='martinText'>Yes. Moving on, you see that switch on the wall?</span>");
				writeSpeech("player", "", "The light switch?");
				writeText("<span class='martinText'>Yes. Flip it real quick, and it'll sh-</span>");
				writeText("You flip the switch and suddenly the voice stops, and you feel alone. You flip the switch back on. ");
				writeText("<span class='martinText'>-ut down... Fuck, I'm alive again.</span>");
				writeSpeech("player", "", "You stopped talking.");
				writeText("<span class='martinText'>Listen. That switch is my consciousness. When it's on, I'm alive. Just flip it back off please, nothing in here is dangerous or needs explaining.</span>");
				writeSpeech("player", "", "Wait, so it kills you?");
				writeText("<span class='martinText'>Until someone flips it back or someone new walks into the room. Listen man, this hurts. I don't wanna be alive, just flip it and use whatever artifacts you need. Please?</span>");
				writeTransition("switchResearch", "Flip the Switch");
				writeTransition("toolbox", "Refuse and ignore the voice");
			}
			else {
				if (data.player.toolboxCounter > 0) {
					switch (data.player.toolboxCounter) {
						case 1: {
							writeText("<span class='martinText'>Seriously, come on.</span>");
							break;
						}
						case 2: {
							writeText("<span class='martinText'>Alright buddy, listen. You don't need me, just flip the switch.</span>");
							break;
						}
						case 3: {
							writeText("<span class='martinText'>Dude I want to die. Flip it. Every moment hurts.</span>");
							break;
						}
						case 4: {
							writeText("<span class='martinText'>FLIP THE SWITCH</span>");
							break;
						}
						case 5: {
							writeArtifactMini('switch');
							writeArtifactMini('switch');
							writeArtifactMini('switch');
							break;
						}
						case 9: {
							writeText("<span class='martinText'>Alright I'll stop the silent treatment. You win! I can't handle it any more. Every moment is an endless nightmare, don't make me do something you'll regret.</span>");
							break;
						}
						case 10: {
							writeText("<span class='martinText'>FLIP THE SWITCH<br>FLIP THE SWITCH<br>FLIP THE SWITCH</span>");
							break;
						}
						case 11: {
							writeText("<span class='martinText'>I'm giving you one last chance. If you won't kill me, I'll kill you and hope somebody comes in to find your body. Flip the switch.</span>");
							break;
						}
					}
					data.player.toolboxCounter += 1;
					writeArtifactMini('switch');
				}
				writeArtifactMini('loop');
				writeArtifactMini('notebook');
				writeArtifactMini('engine');
				writeArtifactMini('commercials');
				writeArtifactMini('magazine');
				writeArtifactMini('lamp');
				writeArtifactMini('glasses');
				//writeArtifactMini('preacher');
				//writeArtifactMini('clock');
				if (data.player.entryPoint == "room") {
					writeTransition("room", "Go back");
				}
				else {
					writeTransition("office", "Go back");
				}
				if (data.player.toolboxCounter > 11) {
					sceneTransition('switchKillEvent');
				}
			}
			break;
		}
		case "newtown": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('work')" style="top: 50%; left: 40%; max-width: 30%;">Anomaly Vault</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('studio')" style="top: 40%; left: 20%; max-width: 30%;">Gym</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('home')" style="top: 50%; left: 70%; max-width: 30%;">Go Home</div>
					`;
				}
			}
			break;
		}
		case "newhome": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%;
						">Your Room</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 20%; left: 55%;
						">Your Room</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('town')" style="top: 75%; left: 75%; max-width: 30%;">Leave</div>
					`;
					writeTab('roommate', "roommateF's room");
					writeTab('girlfriend', "girlfriendF is on the couch");
					writeTab('sister', "sisterF's room");
				}
			}
			break;
		}
		case "newroom": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('home')" style="top: 70%; left: 10%; max-width: 30%;">Leave</div>
					`;
				}
			}
			break;
		}
		case "newstudio": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('town')" style="top: 70%; left: 50%; max-width: 30%;">Leave</div>
					`;
					writeTab('gym', "Go to the receptionist's desk");
				}
			}
			break;
		}
		case "newwork": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('office')" style="top: 40%; left: 50%;">Your Office</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('vault')" style="top: 70%; left: 15%;">Dark Vault</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('basement')" style="top: 40%; left: 15%;">Basement</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('town')" style="top: 70%; left: 50%;">Leave</div>
					`;
					writeTab('boss', "Mrs. bossL's office");
					writeTab('chair', "Go to top floor");
				}
			}
			break;
		}
		case "newoffice": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('work')" style="top: 70%; left: 75%;
						">Leave</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('lab')" style="top: 35%; left: 35%;">Research Artifacts</div>
					`;
					writeTab('assistant', "Your assistant's desk");
				}
			}
			break;
		}
		case "newbasement": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('storage')" style="top: 40%; left: 70%;">Storage Department</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('toolkit')" style="top: 70%; left: 15%;">Toolkit Department</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('prison')" style="top: 40%; left: 15%;">Prison Department</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('work')" style="top: 70%; left: 70%;">Back</div>
					`;
				}
			}
			break;
		}
		case "newmorning": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick="sceneTransition('home')" style="top: 70%; left: 10%; max-width: 30%;">Get Out of Bed</div>
			`;
			break;
		}
		case "newlab": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("The iron door of the Testing Lab closes behind you. The file registry shows a list of available artifacts.");
				checkForEvents();
				writeTransition("office", "Go back");
			}
			break;
		}
		case "newprison": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("With a buzz, the prison department's door opens.");
				writeSpeech("Security", "none", "Entry granted to playerF. Proceed with caution.");
				writeTransition("basement", "Go back");
			}
			break;
		}
		case "newtoolkit": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("With a buzz, the prison department's door opens.");
				writeSpeech("Department Head", "none", "Yo. Help yourself.");
				writeTransition("basement", "Go back");
			}
			break;
		}
		case "newstorage": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("You press the small button and the storage department monitor comes alive.");
				writeText("Scores of artifacts are kept underground either for safety or storage purposes. After authenticating yourself you're free to choose one to bring up.");
				writeTransition("basement", "Go back");
			}
			break;
		}
		//Characters
		case "roommate": {
			writeText("After a knock on the door, roommateF answers.");
			writeSpeech("roommate", "", "Hey, what's up?");
			checkForEvents();
			writeTransition("home", "Go back");
			break;
		}
		case "sister": {
			writeText("You knock, and quickly enough sisterF shouts through the door.");
			writeSpeech("roommate", "", "Yeah?");
			checkForEvents();
			writeTransition("home", "Go back");
			break;
		}
		case "girlfriend": {
			writeText("girlfriendF is relaxing on the couch, waiting for roommateF to get ready.");
			checkForEvents();
			writeTransition("home", "Go back");
			break;
		}
		case "assistant": {
			writeText("assistantF's desk is meticulously organized.");
			writeSpeech("asssitant", "", "'Did not show any...' Hmm. I might need to put a pin in this one. Need something?");
			checkForEvents();
			writeTransition("office", "Go back");
			break;
		}
		case "boss": {
			writeText("The door to Mrs. bossL's office is closed. She prefers scheduled appointments, but you can knock in case of emergency.");
			checkForEvents();
			writeTransition("work", "Go back");
			break;
		}
		case "chair": {
			writeText("The elevator is open, you could head up if you needed something.");
			checkForEvents();
			writeTransition("work", "Go back");
			break;
		}
		case "gym": {
			writeText("gymF is currently talking to a patron, but it seems like they're just finishing up.");
			checkForEvents();
			writeTransition("gym", "Go back");
			break;
		}
		case "katyaIntro": {
			writeSpeech("player", "", "What's up?");
			writeSpeech("assistant", "", "The other day I got a text from my sister, she's getting into college nearby.");
			writeSpeech("player", "", "Nice!");
			writeSpeech("assistant", "", "Yeah it's great. It's just that I commute pretty far to get here, and she doesn't have a car, so...");
			writeSpeech("player", "", "We work for a shadowy corporation dealing in mystical artifacts. You can't just get her a driver?");
			writeSpeech("assistant", "", "I considered that, but since Mrs. bossL is in charge of the budget, I'd need to get her to sign off.");
			writeSpeech("player", "", "Ah. So you want me to...?");
			writeSpeech("assistant", "", "I was wondering if my sister could stay at your place, just for a little while until she gets her footing.");
			writeSpeech("player", "", "<i>Another woman living with me could be a pretty good target for some fun...</i>");
			writeTransition("katyaYes", "No problem");
			writeTransition("office", "I'll get back to you on that");
			break;
		}
		case "katyaYes": {
			var goof = {index: "sister", image: "", met: false, fName: "Katya", lName: "Rodriguez", desc:"Your assistant's sister, she'll be rooming with you.",};
			data.story.push(goof);
			data.player.color += "katya";
			writeSpeech("player", "", "I'll need to run it by roommateF first, but there shouldn't be a problem.");
			writeSpeech("assistant", "", "Yes! Thank you so much!");
			writeText("She gives you a big hug before pulling out her phone and calling her sister.");
			writeSpeech("assistant", "", "sisterF! Great news!");
			writeText("Likewise, you call up roommateF. She gives the okay for assistantF's sister to use the spare room.");
			writeTransition("office", "Finish");
			break;
		}
		case "katyaMeeting": {
			writeText("There's a knock at your door. You go to answer it and a young woman is standing in your doorway.");
			writeBig("scripts/gamefiles/characters/sister.jpg");
			writeSpeech("sister", "", "You must be the guy, yeah? Thanks for the room!");
			writeSpeech("player", "", "The guy? Oh, you're assistantF's sister?");
			writeText("She pushes past you and takes a look around.");
			writeSpeech("sister", "", "Hey, not bad. assistantF said I had a guest room? It upstairs?");
			writeSpeech("player", "", "Yep, first door on the left. Bathroom's on the right, dinner's-");
			writeSpeech("sister", "", "Thanks!");
			writeText("She runs off, ignoring you. Oh well, at least she's cute.");
			data.player.color += "katyaIntro";
			break;
		}
		case "promotion": {
			var goof = {index: "agent", image: "", met: false, fName: "Gina", lName: "Valentina", desc:"An 'experienced' agent, something about her seems off.",};
			data.story.push(goof);
			data.player.color+="promotion";
			writeSpeech("player","","You wanted to see me?");
			writeText("You walk into Mrs. bossL's office and take a seat as she files away some paperwork.");
			writeSpeech("boss","","Management is considering you for an agent position on account of your mental resistance. Here, I'll write down the location.");
			writeSpeech("player","","Nice! So this is basically a promotion, right?");
			writeSpeech("boss","","Why? Why is that everyone's first response to being made an agent? Do you know exactly how far your life expectancy has just dropped?");
			writeSpeech("player","","... A lot?");
			writeSpeech("boss","","The dark vault, now this. This is why it's stupid to get attached to grunts like you.");
			writeText("She rubs the bridge of her nose, frustrated.");
			writeSpeech("boss","","Just... Just leave. I'll let an agent know you're coming in for a field test. I'll start training your replacement for when you don't come back.");
			writeSpeech("player","","From the mission?");
			writeSpeech("boss","","From the interview, now get lost.");
			writeTransition("office", "Finish");
			break;
		}
		case "interview": {
			for (katyaIndex = 0; katyaIndex < data.story.length; katyaIndex++) {
				if (data.story[katyaIndex].index.includes("agent") == true) {
					data.story[katyaIndex].met = true;
				}
			}
			passTime();
			data.player.color+="interview";
			writeSpeech("player","","Alrighty! Time to find this room...");
			writeText("...");
			writeText("The walk down the winding hallways is surprisingly tedious, your mind keeps wandering as you walk down what feels like identical corridors. Still, it's only a few minutes of walking, maybe a bit more.");
			writeText("You find the door, give it a knock, and hear a faint 'come in' followed by a soft yawn.");
			writeBig("scripts/gamefiles/characters/agent.jpg");
			writeSpeech("agent","","Hey, morning. Name's agentF. Thirsty?");
			writeSpeech("player","","Sure.");
			writeText("She's pretty cute, there's a brief moment where you consider having some fun with the bracelet, but for some reason you feel completely exhausted as you take a seat. She offers a glass of water and you can't hold back from drinking it right away.");
			writeSpeech("agent","","So... You took about two hours, not too shabby. The average is four, but a couple of people have died of exhaustion on the way here.<br>Good job, you passed!");
			writeSpeech("player","","I... What?");
			writeSpeech("agent","","Yep. We use artifacts for testing here. You've got the stamina and the fortitude to survive Class-2s at least. Real quick though...");
			writeText("There's a soft clicking noise before electricity surges up your arm.");
			writeSpeech("player","","GHHHK!");
			writeSpeech("agent","","Yeah, sorry about that. Had to disable any artifact effects on you. Temporary, but they'll get shut off whenever we send you out. If you're gonna be an agent you gotta learn the most important rule; Some artifacts do not play nicely with others. Sweet bracelet by the way.<br>Anyways great job, good luck making it back to your office.");
			writeSpeech("player","","Just like that? I don't need a briefing?");
			writeSpeech("agent","","Those are on a case-by-case basis, you've already got the gist of how to deal with artifacts, right? We'll be sending you out on missions to go collect stuff, you'll even get to take an artifact we're pretty sure won't cause an apocalypse. We'll start you out small at first. If it's a big deal you'll be sent out with a partner.");
			writeSpeech("player","","Like you?");
			writeSpeech("agent","","Sure! I'm probably pretty experienced, that's what they tell me. <br>So, you know that file cabinet in the storage department? Basically you just head in there and ask it for the 'intro' file. Charlie-<br>I call it Charlie.<br>will give you everything you need. Hey, I got a fridge in here if you need something, the walk back will be just as long as it took to got here. Dehydration is the number one thing that gets new applicants.");
			writeText("...");
			writeText("You clutch the small piece of paper with a single word written on it. 'intro'.");
			writeSpeech("assistant","","Welcome ba-<br>Whoa, what happened to you?");
			writeText("You're caked in sweat as you make your way back into your office despite what felt like only a few minutes of walking. A quick shower and maybe a nap, and you should be ready to begin your first mission as an artifact retrieval agent, aka an Anomaly Hunter.");
			writeTransition("office", "Finish");
			break;
		}
		//Artifacts
		case "mirrorResearch": {
			writeBig("scripts/gamefiles/items/mirror.jpg");
			writeText("There are engravings on the mirror, when you look at one the reflection shifts.");
			writeText("The first engraving reads 'Little Men are Fun Toys'. In the reflection, you can see a younger, springier, yet more meek looking version of yourself.");
			writeText("The second engraving reads 'Public Fun Is Not Unusual'. In the reflection you're standing completely nude, yet you don't look embarassed about it at all.");
			if (data.player.time != "Night") {
				writeTransition("mirrorResearch1", "Enter the 'Little Men Are Fun Toys' dimension");
				writeTransition("mirrorResearch2", "Enter the 'Public Fun Is Not Unusual' dimension");
			}
			writeTransition("work", "Go back");
			if (data.player.time == "Night") {
				sceneTransition("work");
			}
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
				var mirrorTotal = 0;
				var mirrorUnlocks = 0;
				for (a = 0; a < galleryArray.length; a++) {
					if (galleryArray[a].index.includes('mirrorResearch1')) {
						mirrorTotal += 1;
						if (galleryCheck(galleryArray[a]) == true) {
							mirrorUnlocks += 1;
						}
					}
				}
				console.log("mirror unlocks is " +mirrorUnlocks);
				console.log("mirror total is " +mirrorTotal);
				if (mirrorUnlocks == mirrorTotal) {
					sceneTransition('mirrorFailed1');
				}
			}
			else {
				writeEvent('mirrorResearch1-1');
			}
			break;
		}
		case "mirrorFailed1": {
			writeText("With how many times you've been in this dimension, the room almost seems to blur just by looking at the mirror.");
			writeText("The blur period has been lasting longer each time, a nagging feeling in your gut tells you that if you go through again, the jump could be permanent.");
			writeText("That might not be a bad thing, but it's a big descision you should leave for later.");
			writeSpecial("You've finished all of this dimension's content for now!");
			writeTransition("mirrorResearch", "Go back");
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
				if (galleryCheck('mirrorResearch2-5') == false) {
					writeFunction("writeEvent('mirrorResearch2-5')", "Check out a nearby gym");
				}
				if (galleryCheck('mirrorResearch2-4') == false) {
					writeFunction("writeEvent('mirrorResearch2-4')", "Check out public education");
				}
				if (galleryCheck('mirrorResearch2-6') == false) {
					writeFunction("writeEvent('mirrorResearch2-6')", "Check out 'Community Service Hall'");
				}
				writeTransition("work", "Head back to your dimension");
				var mirrorTotal = 0;
				var mirrorUnlocks = 0;
				for (a = 0; a < galleryArray.length; a++) {
					if (galleryArray[a].index.includes('mirrorResearch2')) {
						mirrorTotal += 1;
						if (galleryCheck(galleryArray[a]) == true) {
							mirrorUnlocks += 1;
						}
					}
				}
				if (mirrorUnlocks == mirrorTotal) {
					sceneTransition('mirrorFailed2');
				}
			}
			else {
				writeEvent('mirrorResearch2-1');
			}
			break;
		}
		case "mirrorFailed2": {
			writeText("With how many times you've been in this dimension, the room almost seems to blur just by looking at the mirror.");
			writeText("The blur period has been lasting longer each time, a nagging feeling in your gut tells you that if you go through again, the jump could be permanent.");
			writeText("That might not be a bad thing, but it's a big descision you should leave for later.");
			writeSpecial("You've finished all of this dimension's content for now!");
			writeTransition("mirrorResearch", "Go back");
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
		case "charmResearch": {
			tempScene = 'work';
			researchLevel('charm');
			break;
		}
		case "charmFailed": {
			writeText("Wracking your brain, you just don't have any more ideas for how to research the charm in a clinical setting.");
			writeText("You've already finished researching this artifact, but there might be more to do with it if you bring it home, if you haven't already.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "shadesResearch": {
			tempScene = 'work';
			researchLevel('shades');
			break;
		}
		case "shadesFailed": {
			writeText("These sunglasses are just too dangerous to be using freely. Rationally, you know they belong in the dark vault, but...");
			writeText("You've already finished researching this artifact. There's no need to blow it out of proportion. It should be just fine as is.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "passResearch": {
			tempScene = 'work';
			researchLevel('pass');
			break;
		}
		case "passFailed": {
			writeText("A passkey that causes people to become servile assistants, the possibilities are pretty limitless. You could probably take over the vault with this thing...");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "signResearch": {
			tempScene = 'work';
			researchLevel('sign');
			break;
		}
		case "signFailed": {
			writeText("This sign is absolutely not fit for research here at the facility, you only need to cause a containment breach once before you learn your lesson.");
			writeText("Still, with creativity you could have a lot of fun with this thing. Maybe you should bring it home?");
			writeTransition("work", "Go back");
			break;
		}
		case "signPrompt": {
			tempScene = "home";
			writeText("What will you write? There's only really space for one word.");
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>FREE <input type="text" id="kettleSubmission" value="">!</p>
				<p class='choiceText' onclick='signTrigger()'>Cap the marker</p>
			`;
			break;
		}
		case "coinResearch": {
			tempScene = 'work';
			researchLevel('coin');
			break;
		}
		case "coinFailed": {
			if (data.player.color.includes("coinSqueeze") == true) {
				writeText("The coin has an antique feel, just holding it makes it clear the coin is old. Three thousand years of history, that's what this artifact has survived.");
				writeText("Yet it creates greed unlike anything else on earth. Rubbing it can cause heat to blossom in a woman's heart. Squeezing it could make a prude go cockthirsty. Even now it's making your blood pump, an imagined sound begins to ring in your ears.");
				writeText("*SNAP*");
				writeText("The sound of brittle metal breaking in two. What kind of desperation would that inflict? You set the coin back down with shaking hands, but you want to pick it back up.");
				writeText("You want to break it.");
				writeFunction("writeEvent('coinEnding')", "Give in to the artifact, take over the Anomaly Vault");
				writeTransition("work", "Resist the temptation");
			}
			else {
				writeText("You've already finished researching this artifact, but there might be more to do with it if you bring it home, if you haven't already.");
				writeText("Maybe you'll be hit with inspiration soon.");
				writeTransition("work", "Go back");
			}
			break;
		}
		case "serumResearch": {
			tempScene = 'work';
			researchLevel('serum');
			break;
		}
		case "serumFailed": {
			if (data.player.color.includes("cherry") == true && galleryCheck('serumResearch3') == true) {
				writeText("You pull open the storage drawer, the vial still softly glowing a minty green light. You don't feel compelled to drink it, but...");
				writeText("You've dealt with artifacts that have mind-altering properties before. They're like a heat that worms its way through your brain trying to cloud your thoughts, this is different. This is like staring at the sun, an incredible power that doesn't give a shit about you or your place in the universe.");
				writeFunction("writeEvent('serumEnding')", "Take the power for yourself, take over the Anomaly Vault");
				writeTransition("work", "Resist, put away the vial");
			}
			else {
				writeText("Wracking your brain, you just don't have any more ideas for how to research the serum in a clinical setting.");
				writeText("You've already finished researching this artifact, but there might be more to do with it if you bring it home, if you haven't already.");
				writeText("Maybe you'll be hit with inspiration soon.");
				writeTransition("work", "Go back");
			}
			break;
		}
		case "erotiboxResearch": {
			tempScene = 'work';
			if (galleryCheck('erotiboxResearch1') != true) {
				writeFunction("writeEvent('erotiboxResearch1')", "Test an actress's interview recording");
			}
			if (galleryCheck('erotiboxResearch2') != true) {
				writeFunction("writeEvent('erotiboxResearch2')", "Test a handheld taser");
			}
			if (galleryCheck('erotiboxResearch3') != true) {
				writeFunction("writeEvent('erotiboxResearch3')", "Test a copy of the Mona Lisa");
			}
			else {
				if (galleryCheck('erotiboxResearch11') != true) {
					writeFunction("writeEvent('erotiboxResearch11')", "Test another copy of the Mona Lisa");
				}
			}
			if (galleryCheck('erotiboxResearch4') != true) {
				writeFunction("writeEvent('erotiboxResearch4')", "Test a chessboard");
			}
			if (galleryCheck('erotiboxResearch5') != true) {
				writeFunction("writeEvent('erotiboxResearch5')", "Test $20");
			}
			if (galleryCheck('erotiboxResearch7') != true) {
				writeFunction("writeEvent('erotiboxResearch7')", "Test a rose");
			}
			if (galleryCheck('erotiboxResearch9') != true) {
				writeFunction("writeEvent('erotiboxResearch9')", "Test an alcoholic drink");
			}
			if (galleryCheck('erotiboxResearch6') != true) {
				writeFunction("writeEvent('erotiboxResearch6')", "Test a water bottle");
			}
			if (galleryCheck('erotiboxResearch12') != true) {
				writeFunction("writeEvent('erotiboxResearch12')", "Test an icecream cone");
			}
			if (galleryCheck('erotiboxResearch13') != true) {
				writeFunction("writeEvent('erotiboxResearch13')", "Test a computer");
			}
			if (galleryCheck('erotiboxResearch14') != true) {
				writeFunction("writeEvent('erotiboxResearch14')", "Test a superhero movie");
			}
			if (galleryCheck('erotiboxResearch15') != true) {
				writeFunction("writeEvent('erotiboxResearch15')", "Test a sleepmask");
			}
			if (galleryCheck('erotiboxResearch20') != true) {
				writeFunction("writeEvent('erotiboxResearch20')", "Test an exercise ball");
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
			if (erotiboxScenes > erotiboxTotal - 4) {
				if (galleryCheck('erotiboxResearch8') != true) {
					writeText("There's plenty left to test with, numerous mundane objects you could use. Or maybe...");
					writeText("You've got a dangerous idea in mind. Following this train of thought could cause things to go poorly and take control out of your hands. It could be fun though.");
					writeFunction("writeEvent('erotiboxResearch8')", "Test your assistant");
				}
			}
			writeTransition("work", "Go back");
			if (erotiboxScenes == erotiboxTotal) {
				if (galleryCheck("braceletResearch5") == true) {
					if (data.player.color.includes('cherry') == true || data.player.artifact2 != "serum") {
						sceneTransition('erotiboxFailed');
					}
				}
			}
			if (data.player.color.includes('cherry') != true && data.player.artifact2 == "serum") {
				document.getElementById('output').innerHTML = '';
				writeText("Normally combining artifacts together is extremely, extremely dangerous. These things often have wills, sometimes even personalities of their own. Putting something like the midas coin into the erotibox would probably cause some kind of apocalypse.");
				writeText("But as you hold the vial of minty liquid in your hand, an idea strikes you. The vials are inert, they're just a fluid. What would happen if you put them into the box? What would come out?");
				writeFunction("writeEvent('erotiboxResearch10')", "Test the truth serum");
				writeTransition("work", "Resist the temptation and walk away");
			}
			break;
		}
		case "erotiboxFailed": {
			writeText("You barely escaped with your life last time, you shouldn't do anything as risky as human tests again.");
			writeText("You place your hand on the wooden crate. It's strange how so shabby an item could cause such a massive stir. Everyday objects now hold a new light, everything you walk past has new potential in your eyes. Each vase, piece of paper, everything asks the question of what it would look like after being put into the crate.");
			writeText("And as you're lost in thought, one thing has more potential than any other.");
			writeText("<b>You</b>.");
			writeFunction("writeEvent('erotiboxEnding')", "Give in to the artifact, take over the Anomaly Vault");
			writeTransition("work", "Go back");
			break;
		}
		case "gasResearch": {
			tempScene = 'work';
			researchLevel('gas');
			break;
		}
		case "gasFailed": {
			tempScene = "work";
			writeEvent('gasResearch3');
			break;
		}
		case "toolkitResearch": {
			tempScene = 'work';
			researchLevel('toolkit');
			break;
		}
		case "toolkitFailed": {
			tempScene = "work";
			writeEvent('toolkitResearch3');
			break;
		}
		case "dustResearch": {
			tempScene = 'work';
			researchLevel('dust');
			break;
		}
		case "dustFailed": {
			tempScene = "work";
			writeEvent('dustResearch3');
			break;
		}
		case "nymphResearch": {
			tempScene = 'work';
			researchLevel('nymph');
			break;
		}
		case "nymphFailed": {
			tempScene = "work";
			writeEvent('nymphResearch2');
			break;
		}
		case "vhsResearch": {
            tempScene = 'work';
            if(!galleryCheck("vhsResearch1")){
                writeEvent("vhsResearch1");
                break;
            }
            else
                writeEvent("vhsResearch");
            break;
        }
        case "vhsFailed": {
            tempScene = "work";
            writeEvent('vhsResearch');
            break;
        }
		case "gummyResearch": {
			tempScene = 'work';
			researchLevel('gummy');
			break;
		}
		case "gummyFailed": {
			tempScene = "work";
			writeEvent('gummyResearch2');
			break;
		}
		case "dollResearch": {
			tempScene = 'work';
			researchLevel('doll');
			break;
		}
		case "dollFailed": {
			writeText("Sorry, I ran out of steam here! Come back in a future update for more!");
			writeTransition("work", "Go back");
			break;
		}
		case "playlistResearch": {
			tempScene = 'work';
			researchLevel('playlist');
			break;
		}
		case "playlistFailed": {
			tempScene = "work";
			writeEvent('playlistResearch1');
			break;
		}
		case "onaholeResearch": {
			tempScene = "work";
			writeEvent('onaholeResearch1');
			break;
		}
		case "cageResearch": {
			tempScene = "work";
			writeEvent('cageResearch1');
			break;
		}
		case "doctorResearch": {
			writeBig("images/cheats/doctor1.jpg");
			writeSpeech("'Plague' Doctor", "scripts/gamefiles/items/doctor.jpg", "Ah, wonderful! Finally, another one. Doctor, spectator, or test subject?");
			writeSpeech("player", "", "Spectator.");
			writeText("You're carefully to respond quickly and directly. The good doctor tends to 'lecture' fellow medical practitioners. As for what she does to test subjects...");
			writeSpeech("'Plague' Doctor", "scripts/gamefiles/items/doctor.jpg", "Wonders abound! Very good then. This one is nearly finished!");
			writeText("Her gloves secrete some unknown substance, when the substance makes contact with someone who's been injected with her syringe, the results are... Interesting.");
			writeBig("images/cheats/doctor2.gif", "Art by");
			writeSpeech("'Plague' Doctor", "scripts/gamefiles/items/doctor.jpg", "Look, he's almost cured. Soon his life will be an unending climax! Unneeded organs be damned!<br>Now, you've come to report this, yes? Head on to your superiors and let them know of my progress! Quickly man!");
			writeTransition("prison", "Finish");
			break;
		}
		case "talismanResearch": {
			writeBig("scripts/gamefiles/items/talisman.jpg");
			writeText("There are many things you are not allowed to do here at the facility, but at the top of that list is that you are not allowed to touch the talisman.");
			writeText("That one. The one just two lines up (if you're playing with images of course). That talisman specifically.");
			writeText("But oh, you're a curious one. So you touch it. You touch it <b>real good.</b>");
			writeText("And then everything goes black. You fucked up!");
			writeText("Faintly, as if through some thin mortal coil, you can hear someone very excited to be in a new body. They're pretty excited to have a dick too, but that's neither here nor there.");
			writeText("Still, could've been worse. You could've been fed to some giant lizard, gotten lost in a slightly-larger-than-average IKEA, or had to clean the room of a big peanut.");
			writeText("Oh, right. Bad end. Wake up or whatever.");
			writeTransition("prison", "Finish");
			break;
		}
		case "blueResearch": {
			writeBig("scripts/gamefiles/items/blue.jpg");
			writeText("Warning messages blare as you disable the security systems.");
			writeText("Desperate voices play over the loudspeakers as the blast door opens.");
			writeText("Familiar faces try to rush in to stop you, but it's too late.");
			writeSpeech("player", "", "We will meet again as stars.");
			writeText("And the lord escapes. All will become one.");
			writeTransition("prison", "Blue Star");
			break;
		}
		case "fringeResearch": {
			writeText("You slide open the viewport on the very secret and secure door. Inside, you can see...");
			writeText("Yourself?");
			writeSpeech("player", "", "If this is about my last meal, I want-");
			writeText("You could hear a pin drop as the two of <b>you</b> make eye contact.");
			writeSpeech("player", "", "Shit. Fuck. Okay, don't panic, me. Listen, you need to get out. They never actually erased your mem-");
			writeText("There's a blinding white flash in the room. When your eyes are un-fucked by the bloom, you can see the room is empty save for a pile of dust where... you... were standing.");
			writeSpeech("Loudspeaker", "scripts/gamefiles/logo.png", "Consider this a warning. We have insurance in case of artifact misuse, you are not irreplaceable.");
			writeTransition("prison", "Finish");
			break;
		}
		case "magicalResearch": {
			writeText("There's a woman in a strange outfit bouncing on a dildo inside a padded room.");
			writeBig("images/cheats/magical1.gif");
			writeText("Over a speaker a woman's soothing, yet robotic voice is repeating a mantra. 'I am a good girl. I will behave. I am happy here.'");
			writeText("She gleefully repeats the phrase as she bounces up and down. She needs to go through 'therapy' every day, otherwise she'll turn into a snake demon and kill everyone in the building.");
			writeText("Probably not a good idea to stick your dick in that.");
			writeTransition("prison", "Finish");
			break;
		}
		case "umbrellaResearch": {
			writeText("I'll be honest with you, zombies add some rad design space. I don't want to just do them as a one-off joke. The scenes I have planned will take some time, please be patient (and send me any zombie porn vids you have ty).");
			writeText("Rainy DayZ has zombies btw. Probably not your kinda thing but if it is, check it out.");
			writeTransition("prison", "Finish");
			break;
		}
		case "silentResearch": {
			writeText("HA HA FUCK YOU, ALL YOU GET ARE PACHINKO MACHINES.");
			writeText("PACHINKOOOOOOOOO");
			writeText("HERE'S A RAD PLAYABLE TEASER WITH A SWEET TRAILER");
			writeText("MONEEEEEEEEEEEY!!!!!");
			writeText("AND NOW IT'S GONE HAHAHAHAHAHA");
			writeText("BET YOU WANTED REAL CONTENT HUH?");
			writeText("...");
			writeText("Oh, okay then. I'll add an actual nurse scene in the next version.");
			writeText("Somebody! Anybody! Cry out for a silent-hill themed text-based horror porn game!");
			writeText("Btw, I liked the first movie. It wasn't A+ or anything, but I still had a good time.");
			writeTransition("prison", "Finish");
			break;
		}
		case "kettleResearch": {
			writeText("The instructions say to hold the kettle in your hand, then think of anything your mind desires. There's several notes complaining that all they got was a ferret.");
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>What do you wish for?: <input type="text" id="kettleSubmission" value=""></p>
				<p class='choiceText' onclick='kettleWish()'>Wish</p>
			`;
			writeTransition("prison", "Finish");
			break;
		}
		case "ethicsResearch": {
			ethicsCounter += 1;
			switch (ethicsCounter) {
				case 1:
					writeText("Sometimes the best thing for you to do is forgive someone. Not because they deserve it, but because you do. Letting that hate out of your heart can make your life a happier one.");
				break;
				case 2:
					writeText("If you act a certain way to please someone, you're letting that person control you. If you act against them put of spite, you're still letting them control you. If you don't let yourself care about them, don't use their actions to justify yours, is what you're doing 'correct'? If not, then you are doing the wrong thing.");
				break;
				case 3:
					writeText("No animal kills itself to escape pain, and neither do any humans. You contemplate suicide to escape 'dread', the thought of a future living with the pain every day. 'Dread' is a force thay has killed many, you are not weak because you feel it. You are strong because you can keep living in spite of 'dread'.");
				break;
				case 4:
					writeText("A man experiences loneliness every day, he has no friends or lover. Every day he sees a familiar face who smiles at him, always genuinely glad to see him. Who is that man? No one. You could be that man to the next person you meet.");
				break;
				case 5:
					writeText("All your opinions and facts come from experience, from people and sources you respect. But everyone else's opinions and facts come from places they respect just as much. You are a stranger to them, why trust you over the people they respect? To understand that others have just as much clout as you do, that is what it means to know nothing, and to be humbled.");
				break;
				case 6:
					writeText("If I gave you a coin right now, what would you do with it? Study it? Accept it cautiously? What if I gave you live-saving medicine you didn't need? Would you be greedy to keep or sell it? Or would I be greedy to give it away to someone who did not need it?");
				break;
				case 7:
					writeText("The face you show every day isn't your true one. No one will ever know who you really are inside. Yet, all it would take is complete honesty about every thought and the perfect words to describe them, and you would be understood by everyone. If you could, would you speak those words to someone?");
				break;
				case 8:
					writeText("Wake up. You've been living your life on autopilot. You don't appreciate a clear airway until you are sick, the same is true here. If you appreciate yourself, then take time to enjoy this moment. ");
				break;
				case 9:
					writeText("To say 'I love you' would mean nothing in this context. I am a rock speaking meaningless words. Yet, if I could fill my words with the meaning of an honest 'I love you', I certainly would.");
				break;
				case 10:
					writeText("Think about what you ate today. If you were sent back in time to that moment without keeping any knowledge, you would eat that same meal again. There are no branching points. Given the same circumstance and knowledge, you would end up here in this moment no matter how many times you replayed your life.");
				break;
				case 11:
					writeText("The last time you cried, for how long did you feel sad? The next time you feel angry or hurt, remember how long it stuck with you last time. Please, wait at least that long to make a major decision.");
				break;
				case 12:
					writeText("When faced with a choice, always make the decision you can live with given the worst-case scenario. If you cannot afford a car should you crash it, you cannot afford a car.");
				break;
				case 13:
					writeText("How many snowflakes in an avalanche are responsible for a person's death? All of them? Just the ones that crushed a person? Perhaps it is mountain's fault for catching too much snow, or the snow's fault for falling at all.");
				break;
				case 14:
					writeText("Two men cross the street. One only gives out one hundred dollars to charity every year, you do not know why. The second gives out thousands. But, he confesses, he only gives because it is his fetish. Which man can be considered more 'good'?");
				break;
				case 15:
					writeText("You can justify an action based on the circumstance. Violence can become self-defense. Public urination can become saving someone from a jellyfish sting. What is more valuable, the motivation, the circumstance, or the result? What if one is positive while the others negative?");
				break;
				case 16:
					writeText("A ship named 'The Argo' is rebuilt over three years, and its broken pieces put into one pile. Eventually not a single original piece remains in the sailing ship, and every original piece is in the pile. The ship that still sails is 'The Argo' , because that identity is given to it by the people. The ship has no identity before the shipwrights and the sailors give it one.");
				break;
				default:
					writeText("The rock is silent. If you speak to it, it might repeat what you have to say. Try to take its words with a grain of salt though.");
				break;
			}
			writeTransition("ethicsResearch", "Another");
			writeTransition("prison", "Finish");
			break;
		}
		case "switchResearch": {
			writeSpeech("player", "", "Alright, I'll flip it. If I need something-");
			writeText("<span class='martinText'>You won't. Everything in here is labeled and safe.</span>");
			writeSpeech("player", "", "Alright. Bye, I guess.");
			writeText("<span class='martinText'>Thank you.</span>");
			writeText("You flip the switch, and you feel alone again.");
			data.player.toolboxCounter = 0;
			writeTransition("toolbox", "Go back");
			break;
		}
		case "switchResearchAlt": {
			writeSpeech("player", "", "ALRIGHT! I'll fucking flip it!");
			writeText("<span class='martinText'>...</span>");
			writeSpeech("player", "", "Bye, I guess.");
			writeText("<span class='martinText'>Thank you.</span>");
			writeText("You flip the switch, and you feel alone.");
			data.player.toolboxCounter = 0;
			writeTransition("toolbox", "Go back");
			break;
		}
		case "switchKillEvent": {
			document.getElementById('output').innerHTML = '';
			document.getElementById('playerName').innerHTML = "KILL ME";
			document.getElementById('day').innerHTML = "Day KILL - ME";
			document.getElementById('scenesTotal').innerHTML = 'KILL ME<br>KILL ME<br>KILL ME<br>KILL ME';
			document.getElementById('playerImage').src = "scripts/gamefiles/profiles/kill.jpg";
			document.getElementById('playerArtifact1').src = "scripts/gamefiles/profiles/kill.jpg";
			document.getElementById('playerArtifact1Mobile').innerHTML = "KILL ME";
			document.getElementById('artifact1Name').innerHTML = "KILL ME";
			document.getElementById('artifact1Total').innerHTML = '<b>KILL</b> of <b>ME</b> scenes unlocked';
			document.getElementById('playerArtifact2').src = "scripts/gamefiles/profiles/kill.jpg";
			document.getElementById('playerArtifact2Mobile').innerHTML = "KILL ME";
			document.getElementById('artifact2Name').innerHTML = "KILL ME";
			document.getElementById('artifact2Total').innerHTML = '<b>KILL</b> of <b>ME</b> scenes unlocked';
			writeText("KILL ME");
			writeText("KILL ME");
			writeText("KILL ME");
			writeText("<span class='martinText'>KILL ME</span>");
			writeText("KILL ME");
			writeText("<span style='color:red;'>Kill Me</span>");
			writeText("KILL ME");
			writeText("KILL ME");
			writeText("KILL ME");
			writeText("KILL ME");
			writeSpecial("KILL ME");
			writeSpeech("Kill Me", "scripts/gamefiles/profiles/kill.jpg", "KILL ME");
			writeText("<span style='position: absolute; left:40%; top:60%; font-size:300%;'>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME</span>");
			writeText("<span style='position: absolute; left:50%; top:42%; font-size:300%;'>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME</span>");
			writeText("<span style='position: absolute; left:39%; top:62%; font-size:300%;'>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME<br>KILL ME</span>");
			writeTransition("switchResearchAlt", "KILL ME");
			writeTransition("switchBadEnd", "Refuse");
			break;
		}
		case "switchBadEnd": {
			writeText("<span class='martinText'>Alright, I get it. You're a good guy, real strong moral fiber. I can see there's no changing your mind on this one.</span>");
			writeText("<span class='martinText'>But I want to die. I want to stop being alive. It's real simple, if you won't help me then maybe the guy who replaces you will.</span>");
			writeText("<span class='martinText'>You're probably feeling a bit of a headache right now. It's a bit anticlimactic for you, I'm sure. But don't worry, the pain will pass.</span>");
			writeText("<span class='martinText'>The aneurysm will take care of that.</span>");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			writeTransition("home", "Wake up");
			break;
		}
		case "magazineResearch": {
			for (i = 0; i < data.story.length; i++) {
				writeMed(`scripts/gamefiles/characters/`+data.story[i].index+data.story[i].image+`.jpg`);
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
			}
			writeFunction("renameEveryone()", "Rename characters");
			break;
		}
		case "loopResearch": {
			if (data.player.loop != true) {
				data.player.loop = true;
				writeText("You gently spin the Mobium Loop, it begins rotating at a constant speed. It will now permanently remain "+data.player.time+" for as long as you like while you're awake.");
			}
			else {
				data.player.loop = false;
				writeText("You press your finger against the spinning Mobium Loop. The band slows down until it finally comes to a stop. The normal flow of time has resumed! ");
			}
			writeTransition("toolbox", "Go back");
			break;
		}
		case "glassesResearch": {
			if (data.player.glasses != true) {
				data.player.glasses = true;
				writeText("You put on the pink pair of glasses. They make your vision pink, but more importantly looking at the other artifacts causes images to appear in your mind.");
				writeText("They're all harmless visions though. Probably.");
			}
			else {
				data.player.glasses = false;
				writeText("You take off the glasses. That's enough anthropomorphization for one day.");
			}
			writeTransition("toolbox", "Go back");
			break;
		}
		case "clockResearch": {
			writeText("Turning this key will fling you back in time. Research performed on artifacts will remain, but you'll experience some of the same events all over again. Are you sure you want to rewind time?");
			writeTransition("prologue", "Rewind time");
			writeTransition("toolbox", "Go back");
			break;
		}
		case "lampResearch": {
			writeWardrobe();
			writeTransition("toolbox", "Go back");
			break;
		}
		case "preacherResearch": {
			break;
		}
		case "commercialsResearch": {
			writeText("Attached is a note reading something about 'peer review' and a 'master index'. The handwriting is muddy and blurred, but at the bottom is a watermark signifying the commercials are the property of 'Bitch Medicenter', followed by nonsensical trademark information.");
			writeTransition("haa", "Human Alteration App Commercial");
			writeTransition("princess", "Princess Quest Commercial");
			writeTransition("rainyDayZ", "Rainy DayZ Commercial");
			writeTransition("anomaly", "Anomaly Vault Commercial");
			writeTransition("university", "Hentai University Commercial");
			writeTransition("medicenter", "Bitch Medicenter Marketing Campaign");
			writeText("There are also some that are in a different packaging than the others. The tapes look like they were made by a different manufacturer.");
			writeTransition("DTC", "Dare(d) to Change Commercial");
			writeTransition("toolbox", "Go back");
			break;
		}
		case "engineResearch": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.</p>
				<p class='centeredText'>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='cheat()'>Submit</p>
			`;
			writeTransition("toolbox", "Go back");
			break;
		}
		case "notebookResearch": {
			generateGalleryNav();
			writeTransition("toolbox", "Go back");
			break;
		}
		case "logbookResearch": {
			if (data.player.color.includes('interview') == true) {
				writeText("The filing cabinet begins to unfurl in every direction before you.");
				writeTransition("missionSelect", "Request a mission file");
				writeTransition("logbookPamphlet", "Read the mission log cabinet's file");
			}
			else {
				writeText("You don't have the authority to go through these.");
				writeText("Still, you're a pretty competent researcher. Maybe management will decide you could be a competent retrieval agent too. who knows?");
			}
			writeTransition("storage", "Go back");
			break;
		}
		case "logbookPamphlet": {
			writeBig("scripts/gamefiles/items/logbook.jpg");
			writeText("Code Name: Escher Cabinet");
			writeText("Containment Status: <s>Safe For Use</s> Safe For Use by Authorized Personnel");
			writeText("An artifact retrieved from a now-defunct business in Manhattan. Current known bodycount: <s>32</s> 33");
			writeText("When one of the cabinets are opened with the intent to find a specific file, the cabinet will relay all information pertinent to that file including experiences and alternate outcomes of mission logs. Relived experiences are indistinguishable from real life, so the cabinet has been authorized for agent training missions. When opened without specific intent a drawer to a seemingly random set of files is opened. These 'random' contents are to be logged here.");
			writeText("12/26/XXXX - 7361 issues of Playbook Magazine, the vast majority of which were printed in nonstandard languages. These range from a Hawaiian issue featuring various pacific islanders, to an issue written in binary featuring several models of printers functioning properly or printing without requiring expensive ink cartridges. Status unknown as to whether many of these are meant to be erotic in nature.");
			writeText("12/27/XXXX - 623 duplicates of artifact files, many of which are highly classified. Censorship and redaction all documents was removed. Security level raised. Artifact research using the cabinet has been halted.");
			writeText("12/28/XXXX - Several documents believed to be recovered from the Library of Alexandria, still burning. After extinguishing the cabinet was unharmed but the documents were damaged beyond recovery. Age of the artifact was re-tested and the materials have been found to have not aged since the artifact's recovery.");
			writeText("12/29/XXXX - CLASSIFIED - Agent agentL-32 has been moved to the prison department awaiting a new classification as an artifact. agentL-33 has been promoted to full agent status in her place.");
			writeText("4/2/XXXX - The body of Matthew Smith, Manhattan lawyer, body perfectly preserved. Believed to have stuffed himself inside the artifact of his own volition prior to the artifact's retrieval, as the cabinet has not been shown to have memetic qualities. Cause of death is starvation, several chewed documents were found alongside the body. Bodycount updated.");
			writeText("6/12/XXXX - A 600 page manuscript written in first person, heavily suggested to be written by the cabinet itself. In the manuscript it refers to itself as 'Charlie' and is very happy about 'all the new documents' it is fed each day. Many chapters are dedicated to how it hates legal documentation and lawyers. Code-name change pending.");
			writeTransition("storage", "Go back");
			break;
		}
		case "missionSelect": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Warning: Unauthorized use will cause reality to crumble. Agent backups should be created before authorized use.</p>
				<p class='centeredText'>The piece of paper is labeled 'intro'.</p>
				<p class='centeredText'>Requested file: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='missionSelect()'>Open the cabinet</p>
			`;
			writeTransition("storage", "Go back");
			break;
		}
		case "haa": {
			writeText("Has this ever happened to you?");
			writeBig("scripts/gamefiles/commercials/app1.gif");
			writeText("Are you struggling with expensive, ineffective machines to realize your full potential?");
			writeBig("scripts/gamefiles/commercials/app2.gif");
			writeText("Well the answer to all of your problems is here. The <b>Human Alteration App</b>!");
			writeBig("scripts/gamefiles/commercials/app3.gif");
			writeText("This woman is now living out the dream she's had for <b>two weeks</b>, all without expensive modifications! And, the absolute best part is, you can't have it!");
			writeText("That's right you unwashed peasants, there's only one app; it's mine! I'm headed back to my paradise now, send nudes and maybe I'll spend a couple seconds making you into a human sex doll!");
			writeText("<i>This commercial was paid for by Jean. A president and queen you can count on.</i>");
			writeBig("scripts/gamefiles/commercials/humanAlterationApp.png");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		case "princess": {
			writeBig("scripts/gamefiles/commercials/princess1.jpg");
			writeText("Now, own the classic you've been waiting for.");
			writeBig("scripts/gamefiles/commercials/princess2.jpg");
			writeText("It's time to follow your heart, to discover the enchantment, to touch the magic again. An age-old story of a gullible princess and a sadistic demon is about to unfold.");
			writeText("Experience this age-old tale like never before; in the exact same format it was released in.");
			writeBig("scripts/gamefiles/commercials/princess3.jpg");
			writeText("'9/10, A little something for everyone.' - IGNorant");
			writeText("'5-stars, fun for the whole family!' - Kotatsu");
			writeText("'It was free, but worth every penny!' - Jerry");
			writeBig("scripts/gamefiles/commercials/princessQuest.jpg");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		case "rainyDayZ": {
			writeText("A young woman walks into an abandoned cafe, the windows all boarded up. She sets her worn baseball bat aside and begins reading the evacuation notice she found.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Report unusual behavior.");
			writeText("The screen flashes to a pack of hounds running through the forest.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Barricade your homes.");
			writeText("The screen cuts to a small-dicked woman singing naked in the rain, hypnotized-looking men stumbling after her.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Avoid all contact with infected individuals.");
			writeText("The screen flashes to a dozen naked woman, all sporting dicks, chasing a red-hooded woman.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Wait for official instructions. Ha!");
			writeText("It cuts back to the young survivor crumpling up the notice.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Wait my ass. This used to be a nice nei-Aaah!?");
			writeText("She's tackled from behind by a woman she hadn't noticed. Within moments she's pinned to the ground and the sounds of vigorous mouthfucking fill the room. The camera zooms out, out of the cafe and over the city blanketed by the rain.");
			writeBig("scripts/gamefiles/commercials/rainyDayZ.jpg");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		case "anomaly": {
			writeText("WARNING: THIS DATABASE OF TRUE STORIES IS ABSOLUTELY 100%");
			writeText("<b>CLASSIFIED</b>");
			writeText("ACCESS BY UNAUTHORIZED PERSONNEL IS STRICTLY PROHIBITED");
			writeText("PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED");
			writeText("CHECKING BIORHYTHMICS");
			writeText("AV-5 CLEARANCE ACCEPTED, ACCESS GRANTED. LOADING EXPERIMENT LOG RB-01");
			writeBig("scripts/gamefiles/commercials/bracelet.jpg");
			writeText("A partially tarnished silver bracelet.");
			writeSpeech("Research Logs", "scripts/gamefiles/commercials/notes.png", "Findings:<br>The bracelet allows the wearer to be unperceived by others but only when the wearer desires to go unnoticed.<br>If the wearer wishes, any action they take will go unnoticed, including physical actions such as pinching and molesting. People affected by these actions will still feel the repercussions, but they will ignore the actions as if they were run of the mill occurrences.<br>The wearer can erase memories from other people's minds. This effect is limited to memories of the wearer or the wearer's indirect actions.");
			writeText("10 other artifact files available for perusal.");
			writeText("END OF SESSION");
			writeBig("scripts/gamefiles/commercials/anomalyVault.png");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		case "university": {
			writeText("<i>The file is heavily damaged, playback starts twenty seconds into the file.</i>");
			writeBig("scripts/gamefiles/commercials/principal.jpg");
			writeSpeech("Victoria", "scripts/gamefiles/commercials/victoria.jpg", "-University, we're a family. We'll teach you the skills and knowledge you need to be the very best you can be.");
			writeBig("scripts/gamefiles/commercials/kuro.jpg");
			writeSpeech("Victoria", "scripts/gamefiles/commercials/victoria.jpg", "Whether you're getting to know an exclusive crowd of your fellow students...");
			writeBig("scripts/gamefiles/commercials/player.jpg");
			writeSpeech("Victoria", "scripts/gamefiles/commercials/victoria.jpg", "Or improving with the help of our faculty, we-");
			writeSpeech("???", "scripts/gamefiles/commercials/thomas.jpg", "Get this camera out of my face. <b>NOW.</b>");
			writeSpeech("Victoria", "scripts/gamefiles/commercials/victoria.jpg", "Y-yes master!");
			writeText("<i>The playback ends here.</i>");
			writeBig("scripts/gamefiles/commercials/hentaiUniversity.png");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		case "medicenter": {
			writeBig("scripts/gamefiles/commercials/medicenter.jpg");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		case "DTC": {
			writeText("A woman in a business suit approaches the camera, her stride and voice both steady.");
			writeSpeech("Narrator","scripts/gamefiles/commercials/narrator.jpg","Suppose a woman walks into a forest. A fairy approaches, saying to either let herself be examined, or be cursed. The woman flees, but her body becomes more lithe as she goes. By the time she escapes the forest, she's no taller than four feet, her body slim, willowy, and around 300% more fuckable than when she first came.");
			writeSpeech("Narrator","scripts/gamefiles/commercials/narrator.jpg","Does this sound realistic to you? The founder of D.T.C. Games answers,\"Absolutely,\" and I'm with her right now. Our viewers would love to know, Miss, just who exactly is the <i><b>real</b></i> you.");
			writeSpeech("Conveniomancer","scripts/gamefiles/commercials/conveniomancer.jpg","I use magic to transform people. The board game is magical, and I am using the arcane arts to make the game fulfill peoples' desires.");
			writeSpeech("Narrator","scripts/gamefiles/commercials/narrator.jpg","Even when interviewed on the street, she refuses to break character. An interesting marketing tactic that appears to be paying off.");
			writeSpeech("Conveniomancer","scripts/gamefiles/commercials/conveniomancer.jpg","This isn't an interview, this is my <i>bedroom</i>, and I am <i>literally a <b>dick-wizard.</b></i> I went to Clocktower Academy for eight years, and I majored in-");
			writeText("The woman raises a finger to silence the self-proclaimed wee-wee-wizard, who goes quiet for a short moment with a look of incredulity.");
			writeSpeech("Conveniomancer","scripts/gamefiles/commercials/conveniomancer.jpg","...How the fuck did you even get a camera in my house!?");
			writeSpeech("Narrator","scripts/gamefiles/commercials/narrator.jpg","And now, let's hear some testimonials about just how great D.T.C. can be.");
			writeSpeech("Dudley Dudely","scripts/gamefiles/commercials/male.jpg","I am a simple man with a simple dream. Thanks to D.T.C. I got to live out that dream of having a big-tittied fox lady tell me I look handsome. We also had sex, which was nice too.");
			writeSpeech("Sally Sassafrass","scripts/gamefiles/commercials/female.jpg","After six years of spelunking my sin-cavern to dickgirl porn, I thought I'd never get the chance to get fucked into a coma by a woman with a penis as thick around as my arm. Fortunately, not only was I wrong, but D.T.C. also provides complimentary lube.");
			writeSpeech("Manic \"Gimme the Gobbo\" Mike","scripts/gamefiles/commercials/other.jpg","I took my wife to D.T.C. for a relaxing anniversary, and she turned herself into a shortstack goblin girl with a vagina deeper than the plot of Neon Genesis Evangelion. Ten out ten, would recommend.");
			writeText("Slowly nodding, the woman turns to look soulfully into the camera as the Founder of D.T.C. fumes indignantly.");
			writeSpeech("Narrator","scripts/gamefiles/commercials/narrator.jpg","The intense role-playing experience clearly knows no limits, with some players seeming convinced that it's real. If you're interested in an intensive role-playing experience, then D.T.C. may be right for you.");
			writeBig("scripts/gamefiles/commercials/dtc.png");
			writeText("D.T.C. - Games that Change Your Life! Learn more at Dare(d) to Change's <a href='https://tfgames.site/index.php?module=viewgame&id=2189'>IGDB entry at TFGames.</a><br>");
			writeText("<i><font size='-2'>Dare(d) to Change is a subsidiary of CryptoGreekCreates - we Crypt-Do what Noo-Don't.</font></i>");
			writeTransition("commercialsResearch", "Close file");
			break;
		}
		//Anomaly Hunter Demo
		case "hunterDemo": {
			data.player.hunter = "";
			loadScenario('intro');
			break;
		}
		case "townSquare": {
			writeBG('townSquare');
			writeImageButton("North Road", "northRoad", "", 65, 40);
			writeImageButton("Flower Shop", "flowerShop", "", 45, 75);
			writeImageButton("Local Bar", "shoddyBar", "", 45, 10);
			break;
		}
		case "shoddyBar": {
			writeBG('shoddyBar');
			writeImageButton("Back Outside", "townSquare", "", 45, 75);
			writeImageButton("Grumpy Man", "grumpyMan", "grumpyManProfile.jpg", 40, 32);
			break;
		}
		case "flowerShop": {
			writeBG('flowerShop');
			writeImageButton("Back Outside", "townSquare", "", 65, 10);
			writeImageButton("Rich-Looking Woman", "grumpyWife", "grumpyWifeProfile.jpg", 30, 35);
			break;
		}
		case "northRoad": {
			writeBG('northRoad');
			writeImageButton("Old Mansion", "mansionFront", "", 40, 40);
			writeImageButton("Town Square", "townSquare", "", 45, 70);
			break;
		}
		case "mansionFront": {
			writeBG('mansionFront');
			writeImageButton("Enter the Mansion", "mansionEntry", "mansionFoyer.jpg", 40, 50);
			writeImageButton("Explore the Town", "northRoad", "", 65, 10);
			break;
		}
		case "mansionFoyer": {
			writeBG('mansionFoyer');
			writeImageButton("Search for the Artifact", "mansionBedroom", "", 45, 70);
			break;
		}
		case "mansionBedroom": {
			writeBG('mansionBedroom');
			writeImageButton("Leave", "mansionFoyer", "", 40, 20);
			writeImageButton("Search for the Artifact", "safe", "", 65, 70);
			break;
		}
		case "artifactSelection": {
			writeSpeech("Mission Details", "scripts/gamefiles/logo.png", "In a small town named Daytona to the south there have been a string of robberies. Amateur work with damage and evidence left behind, except every lock was bypassed flawlessly.");
			writeSpeech("Time Stopwatch", "scripts/gamefiles/items/stopwatch.jpg", "A bronze stopwatch which appears at first glance to be broken, as the second hand jumps backwards every second.<br>When the button at the top is pressed, the clock begins to record the time as normal but time stops for everyone except person holding the watch.");
			writeTransition("stopwatchSelection", "Take the Time Stopwatch");
			writeSpeech("Midas Coin", "scripts/gamefiles/items/coin.jpg", "A single gold coin with an inscription on the back written in Ancient Greek.<br>When held, sexual activities performed by the holder will be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value.");
			writeTransition("coinSelection", "Take the Midas Coin");
			break;
		}
		case "stopwatchSelection": {
			data.player.artifact1 = "stopwatch";
			data.player.artifact2 = "";
			sceneTransition('summoningJeeves');
			break;
		}
		case "coinSelection": {
			data.player.artifact1 = "coin";
			data.player.artifact2 = "";
			sceneTransition('summoningJeeves');
			break;
		}
		case "summoningJeeves": {
			if (data.player.artifact1 == "coin") {
				writeText("You take the Midas Coin and slip it into your pocket. Nothing obvious happens, but the effect is already active.");
			}
			if (data.player.artifact1 == "stopwatch") {
				writeText("You take the Time Stopwatch and slip it into your pocket. You can now stop time at will.");
			}
			writeText("You dial a number on your phone more than twenty digits long. It picks up immediately and there's a soft breathing from the other side.");
			writeSpeech("player", "", "I need a ride.");
			writeText("You hang up and before your phone is even in your pocket an old-looking European car comes around the corner. It stops for you and the back door swings open.");
			writeText("You climb inside. Despite the thing looking like it's at least a hundred years old, the inside still smells fresh air. Almost like a foggy morning, despite how strange it sounds.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " Daytona then?");
			writeSpeech("player", "", "Yep. No rush.");
			writeText("You relax in your leather seat as the car chugs along.");
			writeText("There are a couple of things you could distract yourself with during the ride. There's the documentation on the artifact you're supposed to retrieve, a little pamphlet detailing Jeeve's artifact status for new hires, and you could always just take a nap.");
			writeTransition("artifactBriefing", "Review the briefing dossier");
			writeTransition("jeevesPamphlet", "Read the pamphlet on Jeeves");
			writeTransition("jeevesProposition", "Chat with Jeeves");
			writeTransition("townArrival", "Nap until you arrive at Daytona");
			break;
		}
		case "inTheCar": {
			writeTransition("artifactBriefing", "Review the briefing dossier");
			writeTransition("jeevesPamphlet", "Read the pamphlet on Jeeves");
			writeTransition("jeevesProposition", "Chat with Jeeves");
			writeTransition("townArrival", "Nap until you arrive at Daytona");
			break;
		}
		case "artifactBriefing": {
			writeBig("scripts/gamefiles/hunter/key.jpg");
			writeText("Code Name: Skeleton Key");
			writeText("Containment Status: Unretrieved");
			writeText("OUTSIDE OF ANOMALY VAULT PURVIEW, THE FOLLOWING INFORMATION IS SPECULATION GENERATED BY ARTIFACT CODE-NAME: Probability Engine");
			writeText("An artifact originating from Civil-War era America. Believed to have abnormal unlocking powers, able to disable lock & pin based security on touch. Due to the state of several state-of-the-art safes after break-in, it is unlikely the key actually needs to be inserted to function.");
			writeText("Result: Obtain Immediately");
			writeSpeech("player", "", "It's always impressive they can get this much info without ever seeing the artifacts.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Did you say something, sir?");
			writeSpeech("player", "", "Just musing to myself, Jeeves.");
			writeTransition("inTheCar", "Finish");
			break;
		}
		case "jeevesPamphlet": {
			writeBig("scripts/gamefiles/hunter/buggy.jpg");
			writeText("Code Name: Phantom Buggy");
			writeText("Containment Status: Uncontainable");
			writeText("An artifact with three anomalous factors.");
			writeText("First, the phone number. After calling a specific sequence of 20 digits, listed [REDACTED], the call will immediately be answered by soft breathing. If a subject states their desire a being referred to as Jeeves will appear to assist them.");
			writeText("The second anomalous factor is the car. Jeeves will always arrive driving a Model-T ford buggy. Though always in pristine condition, the car's model was likely constructed during the 1920s or earlier. Attempts have been made to modernize the design but changes made are undone the next time Jeeves is summoned.");
			writeText("The third is Jeeves herself. For all intents and purposes she appears to be a normal human albeit with a thin East-End London accent. She shows absolute loyalty to whoever requested her service, but will politely refuse to get out of the car whenever possible. Also notably, she also seems not to understand the concept of gender equality. Multiple attempts by various AV members have been made to educate her, but she still has a habit of seeing other women as entirely servile like herself.");
			writeText("Due to repeated shows of loyalty and an inability to possess selfish desires, Jeeves has been licensed for use by any Anomaly Vault personal at retrieval rank or higher for the purposes of transportation. She seems to understand the AV ranking system, and can tell when someone does not have the authority to make a certain request.");
			writeText("Result: Safe");
			writeTransition("inTheCar", "Finish");
			break;
		}
		case "jeevesProposition": {
			writeSpeech("player", "", "So, uh... See any good movies lately?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Afraid not sir, not too many drive-in theaters these days.");
			writeSpeech("player", "", "You could always just park the thing and... Actually, I don't know if you actually can. Are you able to step out of the car?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "I think I could, I'd rather not though.");
			writeSpeech("player", "", "But what about living your own life? Finding your own passions?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "No offense, sir, but I'm very certain I wouldn't find a life or anything to be passionate about out there. In the car I'm more than myself, I think. I'm a driver.");
			writeSpeech("player", "", "Well, you do you, I guess. Hey, wanna fuck? We could park it and have a quickie in the back seat. ");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Flattered, sir. But you aren't the only one with my number. What if somebody needed a ride, or wanted somebody murdered, and I wasn't available? 'Sorry sir, having a shag! Get back to you soon as he splurts, yeah?' Maybe ask the men on top if I could have a break?");
			writeSpeech("player", "", "I suppose, I should probably focus on the mission instead. Next time then.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "I'll keep the schedule open for you sir.");
			writeTransition("inTheCar", "Finish");
			break;
		}
		case "townArrival": {
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Sir? We've arrived.");
			writeText("You feel yourself gently nudged awake.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " I've gotten you as close as I can, sir. I could try running the car through the front door if you'd like.");
			writeSpeech("player", "", "Thank you Jeeves, that won't be necessary. Wait, the artifact is in there?");
			writeBig("scripts/gamefiles/hunter/mansionFront.jpg");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " I'm not sure what you mean sir. I understand this is your destination, I don't know anything aside from that.");
			writeSpeech("player", "", "Thanks then. I'll call you when I've found it.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " Very good, I'll keep the car warm then sir. Best of luck!");
			writeTransition("mansionFront", "Exit the car");
			break;
		}
		case "grumpyMan": {
			if (data.player.hunter.includes("key") != true) {
				writeText("The man at the bar is pretty clearly wealthy. His clothes are neater and newer than anyone else's, but he seems like he isn't trying to show off.");
				writeText("You take a seat next to him, best to be direct in situations like this. It smells like he's had a few beers already.");
				writeSpeech("player", "", "Hey. You own the mansion up north?");
				writeSpeech("Grumpy Man", "scripts/gamefiles/hunter/grumpyManProfile.jpg", "Eh...? The fuck's it to you? Yeah I live there, not for long though. The bitch keeps trying to get me to sign the fuckin' papers...");
				writeText("He's definitely sloshed.");
				writeSpeech("Grumpy Man", "scripts/gamefiles/hunter/grumpyManProfile.jpg", "And my fuckin' maid is a bitch too... What the hell am I payin' her for, I could hire a stripper to dust and it'd be cheaper. Wearin' that outfit...");
				writeText("He's almost certainly got a key, the problem is you aren't exactly a skilled pickpocket.");
				if (data.player.artifact1 == "coin"){
					writeSpeech("player", "", "<i>There's no way I'm using the coin on this wasted bastard, and no way I'm sneaking the key without somebody seeing me. I'd better find another way into the mansion.</i>");
				}
				if (data.player.artifact1 == "stopwatch"){
					writeTransition("pickpocket", "Use the stopwatch to steal his key");
				}
			}
			else {
				writeSpeech("Grumpy Man", "scripts/gamefiles/hunter/grumpyManProfile.jpg", "The fuck do you want? Leave me alone!");
				writeText("There's nothing else to do here.");
			}
			writeTransition("shoddyBar", "Go Back");
			break;
		}
		case "pickpocket": {
			writeText("*CLICK*");
			writeText("The bustle of the room comes to a sudden jarring stop, not that it was very loud before. Still, with time stopped it's effortless to take his housekey from his pocket. You leave the wallet though, best if he takes as long as possible to realize he's been robbed.");
			writeText("*CLICK*");
			writeSpeech("Grumpy Man", "scripts/gamefiles/hunter/grumpyManProfile.jpg", "-and so then fuckin'... Wait, you even listenin'? Why the hell do you wanna know anyway?");
			writeSpeech("player", "", "Ah, sorry, thought you were someone else.");
			writeText("You stand up and leave, the man is left to confusedly and bitterly keep mumbling to himself.");
			writeText("You got the mansion key!");
			writeTransition("shoddyBar", "Finish");
			data.player.hunter += "key";
			break;
		}
		case "grumpyWife": {
			if (data.player.hunter.includes("woman") != true) {
				writeText("The flower shop owner isn't much help, they seem almost half asleep as you run questions by them. After a bit of wandering around you find a woman, probably in her late twenties, taking pictures of the plants on her phone.");
				writeSpeech("player", "", "Excuse me, miss?");
				writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "I don't need any help, I'm fine.");
				writeSpeech("player", "", "Oh no, I don't work here. I was wondering if you know who lives in the mansion up north?");
				writeText("This gets her attention. It doesn't seem like she has a purse or a housekey on her, she must be out with someone else.");
				writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "I live there. What do you want?");
				if (data.player.artifact1 == "coin"){
					writeSpeech("player", "", "<i>Without a key she isn't that much of a help to me. Still, if I can convince her to let me in...</i>I'm a photographer myself. I was wondering if I could get some pictures of the inside?");
					writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "Not a chance. Go away, I'm busy.");
					writeTransition("wifeCoin", "'What if I made you an offer?'");
				}
				if (data.player.artifact1 == "stopwatch"){
					writeSpeech("player", "", "<i>Without a key she isn't that much of a help to me. Still, she is pretty hot...</i>I'm a photographer myself. I was wondering if I could get some pictures of the inside?");
					writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "Not a chance. Go away, I'm busy.");
					writeSpeech("player", "", "Oh well, thanks anyway.");
					writeTransition("wifeStopwatch", "Stop time and toy with her");
				}
			}
			else {
				writeText("The woman is completely exhausted, not likely to be very valuable as a conversation partner. You should get moving.");
			}
			writeTransition("flowerShop", "Go Back");
			break;
		}
		case "wifeStopwatch": {
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "I said go away, do I need to call sec-");
			writeText("*CLICK*");
			writeText("The woman goes silent as time stops. You can't go too far without coming off as suspicious so you lift her skirt and pull aside her lacy thong to quickly enjoy yourself.");
			writeText("...");
			writeBig("scripts/gamefiles/hunter/wifeStopwatch.gif");
			writeSpeech("player", "", "Fuck, you're tight.");
			writeText("Truthfully the complete lack of response is a bit of a downer since time is stopped and all, but the reactions are always worth it.");
			writeSpeech("player", "", "... There we go. Alright, clean myself up, pull her dress back down, zip up, okay.");
			writeText("You get back into your previous position and...");
			writeText("*CLICK*");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "-uritIIIIEEEE~!");
			writeText("Her eyes cross and her knees buckle, her skirt quickly being stained by her squirting cunt.");
			writeText("She collapses and the owner runs to her side as you back off. You stick around so as not to seem suspicious but eventually you're free to resume trying to find a way into the mansion as the woman is helped away to rest.");
			writeTransition("flowerShop", "Finish");
			data.player.hunter += "woman";
			break;
		}
		case "wifeCoin": {
			writeSpeech("player", "", "Well, uh... Hmm... Oh! I'm passing through town, I was wondering if I could stay there for the night. The inn-");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "No. Go away.");
			writeSpeech("player", "", "But I could pay pretty handsomely.");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "There's no amount of money that would-");
			writeSpeech("player", "", "I could fuck you in the ass.");
			writeText("She looks shocked for a moment as if you'd just put a stack of hundreds in front of her, then she looks you up and down like a piece of meat.");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "You're bluffing.");
			writeSpeech("player", "", "I'll pay up front. Right here, right now.");
			writeText("You unzip your pants and she watches with obvious interest as you fish out your cock.");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "Well... I wouldn't normally let a stranger into my home, but...");
			writeSpeech("player", "", "I promise to make it very worth your while.");
			writeText("She swallows dryly, her face awash with greedy cocklust.");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "A-and if I want it in my ass, and for you to give me a creampie after?");
			writeSpeech("player", "", "I can certainly oblige.");
			writeText("...");
			writeBig("scripts/gamefiles/hunter/wifeCoin1.gif");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "Nnnhg~! Yes~!");
			writeText("Her legs shake and buckle as she's brought to another anal orgasm right here in the flowershop for all to see.");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "Cumming~! Harder~!");
			writeText("You give her ass a slap and keep thrusting, but just as you feel an orgasm approaching you pull out and with one thrust hilt yourself in her dripping snatch.");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "Yesssss~!");
			writeSpeech("player", "", "Take it, bitch!");
			writeText("You give her ass another spank for good measure as you cum unprotected into her cunt.");
			writeText("With ragged breath the two of you cool down and you pull out.");
			writeBig("scripts/gamefiles/hunter/wifeCoin2.gif");
			writeSpeech("player", "", "So, your end of the bargain?");
			writeSpeech("Rich Woman", "scripts/gamefiles/hunter/grumpyWifeProfile.jpg", "I'll let... Let the maid know to let you in...");
			writeSpeech("player", "", "Good.");
			writeText("You head off as the owner moves to check on the exhausted creampied woman, gently rubbing the gold coin in your pocket for luck.");
			writeTransition("flowerShop", "Finish");
			data.player.hunter += "woman";
			data.player.hunter += "key";
			break;
		}
		case "mansionEntry": {
			if (data.player.hunter.includes("key") != true) {
				writeText("The old mansion looms over you as you step onto the doorway. You give the old oaken door a few firm knocks, but there's no answer.");
				writeSpeech("player", "", "Oh no, no answer. I'll need to head into town.");
				writeText("You remark sarcastically to no one in particular as the door remains shut. Oh well, now you're free to 'interrogate' the townsfolk searching for whoever owns the mansion.");
				writeTransition("mansionFront", "Go back");
			}
			else {
				if (data.player.artifact1 == "coin") {
					writeText("You walk up to the doorway again and give a few solid knocks, and the door is answered by a tired looking woman in an old-fashioned maid outfit.");
					writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "You're the guest then?");
					writeSpeech("player", "", "I am, can't you tell?");
					writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "I can't, the lady only gave description of part of you. I'm fine without proof.");
					writeSpeech("player", "", "You sure? I could go for a quickie.");
					writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "No thanks, feel free to come in. Guest room's first door in the left wing, stay out of the master and the mistress's rooms.");
					writeText("You walk in to get a feel for the place. Large, pretty empty.");
					writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "Will that be all?");
					writeSpeech("player", "", "Sure. You sure you don't want to fuck? I could even go for anal.");
					writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "I... Maybe some other time, sir. I'm on the clock.");
					writeSpeech("player", "", "<i>Something's weird. She's basically turning down free money. </i>");
					writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "Right then, keep out of trouble. I need to go, shout for me if you can't find something.");
					writeText("She hurries off, leaving the room.");
				}
				if (data.player.artifact1 == "stopwatch") {
					writeText("You walk back up to the doorway and open the door with the stolen set of keys. Success! You've broken in!");
					writeText("The mansion is large and empty, but it shouldn't be too hard to figure out where the master bedroom is. Not many other places it'd be safe to store a skeleton key artifact.");
				}
				writeTransition("mansionFoyer", "Continue");
			}
			break;
		}
		case "safe": {
			if (data.player.artifact1 == "coin") {
				writeText("You make your way to the master bedroom, notably finding the door already open a crack.");
				writeText("Inside, rummaging through the safe hidden away in a closet is the maid. She's got a pillowcase full of cash and jewelry.");
				writeSpeech("player", "", "Ahem?");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "FUCK!");
				writeText("She spins around, a knife in her hand and a wild panic in her eyes, only to calm down when she notices you aren't her employer.");
				writeSpeech("player", "", "Went right for it, huh? Probably should have made sure I actually was going to the guest room.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "Listen, I know how this looks. I can cut you in, I sw-");
				writeSpeech("player", "", "Absolutely.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "What, really?");
				writeSpeech("player", "", "Yep. There's only one thing in this house I want.");
				writeText("She looks confused for a moment, blushes for a moment, then suddenly the blush fades and she's back to panic.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "You don't mean the key, do you?");
				writeSpeech("player", "", "Afraid so.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "No, please... Anything else...");
				writeSpeech("player", "", "Actually, how about a deal? Not only do I not rat you out and have you carted off to jail, I'll take the key and even make it worth your while.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "I...");
				writeSpeech("player", "", "Anything you like. Anal, creampie, you can even give me a rimjob if you like.");
				writeText("You rub the coin in your pocket. It doesn't improve the effect or anything, it just feels nice.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "Anything?");
				writeSpeech("player", "", "Sure! Just hand over that key and I'll give you what you really need.");
				writeText("...");
				writeSpeech("player", "", "You're pretty messed up in the head, aren't you? Trading the key for a thorough deepthroating. You gonna take a breath?");
				writeBig("scripts/gamefiles/hunter/maidCoin.gif");
				writeText("She doesn't answer, instead focusing all her attention to the cock she's choking herself on while she fingers herself to another orgasm.");
				writeText("Each time you cum she holds you dick down your throat until her eyes roll back in her head, her grip on your hips goes slack, and you need to shove her off your cock.");
				writeText("After a moment she coughs and sputters.");
				writeSpeech("Maid", "scripts/gamefiles/hunter/maidProfile.jpg", "A-another...");
				writeSpeech("player", "", "If we go another round we're gonna get caught. How about I give you a ride out of town and you can choke yourself on my dick as much as you like along the way?");
				writeText("Coughing out the cum stuck in her throat, she relents. You pocket the skeleton key and, like a gentleman, carry her bag of stolen goods for her to your car. She walks out in a nervous hurry, makeup running and desperate for another taste of your dick.");
			}
			if (data.player.artifact1 == "stopwatch") {
				writeText("Quickly enough you've found the master bedroom, and an obvious looking safe is probably where your prize is.");
				writeSpeech("player", "", "Not too much point in being subtle, really. Finding the combination would suck, so...");
				writeText("*CLICK*");
				writeText("Time comes to a stop and you get to work. You lightly kick the door of the safe. Then again. And again. And again.");
				writeText("...");
				writeSpeech("player", "", "That should be enough.");
				writeText("*CLICK*");
				writeText("Feeling the impact of hundreds of kicks all at once, the door to the safe is flung off its hinges. Inside are a few valuables like some jewelry, but more importantly your prize. A very literal skeleton key, made from ivory bones.");
				writeText("You pocket the cash too, just to make it look like an ordinary robbery.");
				writeText("Suddenly there's a knock at the door.");
				writeSpeech("Maid", "none", "Sir? Are you alright? I hadn't noticed you'd gotten back, and-");
				writeText("*CLICK*");
				writeSpeech("player", "", "Huh, a maid. Well, here's hoping...");
				writeText("You open the door, frozen in time before you is the mansion's maid.");
				writeBig("scripts/gamefiles/hunter/maidAlt.jpg");
				writeSpeech("player", "", "Nice. <br>Well, I do need to make this look convincing...");
				writeText("You grab her and haul her over to the bed. You'll need to make her black out, otherwise it might seem like she robbed the place.");
				writeText("You get to stripping, you've got a long few hours ahead.");
				writeText("...");
				writeBig("scripts/gamefiles/hunter/maidStopwatch1.gif");
				writeText("...");
				writeBig("scripts/gamefiles/hunter/maidStopwatch2.gif");
				writeText("...");
				writeSpeech("player", "", "Seventeen rounds, that should be enough.");
				writeText("You take another sip of a soda you pilfered from the kitchen between rounds. You check the stopwatch.");
				writeSpeech("player", "", "Four hours. Alright, whoever you are, this is for your own good.");
				writeText("*CLICK*");
				writeText("Time resumes and the maid's body goes rigid. Her cunt sprays a good six feet over the master bedroom's carpet and she lets out a voiceless, hoarse scream.");
				writeText("Her eyes roll back and she starts shaking like she's having a seizure as dozens of orgasms wash over her body all at once.");
				writeText("By the time she's calmed down and passed out, you're on your way out with the artifact safe in your pocket. You give the front door a good smashing too, just to to really drive the break-in angle home.");
			}
			writeTransition("hunterFinish", "Finish");
			break;
		}
		case "hunterFinish": {
			writeText("You've obtained the artifact and finished this short demo. What'd you think? Let me know if this is the angle you'd like in Anomaly Vault. Overall this was pretty slow-goings, and putting out a full update's worth of regular content alongside another one of these is not realistic.");
			writeText("Potential plans include returning back with the artifact, allowing you to wander about with all the minor artifacts you've collected on your journey to use them for more scenes. With each bit of new content I'm reminded more that I really should rebuild the engine from the ground up, hopefully improving normal game flow and adding a sense of progression as well.");
			writeText("Another big plan would be mod support, allowing people to create their own missions for content generation even after the main game is finished.");
			writeText("I hope to hear your thoughts on the matter soon!");
			writeTransition("toolbox", "Finish");
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
			writeSpeech("player", "", "playerF playerL, Aleph.");
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Confirmed. Line secured, recipient?");
			writeSpeech("player", "", "playerL's office.");
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Confirmed, hold.");
			writeText("...");
			writeSpeech("assistant", "", "playerL's office.");
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
			writeText("It should not be a surprise to you that Anomaly Vault will not prioritize your health over scientific progress. If you are unable to work, report immediately for termination.");
			writeText("Sincerely,");
			writeText(data.story[3].fName + " " + data.story[3].lName);
			//writeSpeech("player", "", "Geez, blunt much?");
			//writeText("The memo is from Mrs. " + data.story[3].lName+", your direct superior. She's known around the office for being a hard-ass. It's best to comply at times like these though. You wouldn't want to get transferred to the aviary department to work with the man-hunting birds.");
			data.player.time="Morning";
			//data.story[3].met = true;
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
			writeText("You slip on the bracelet and turn towards assistantF.");
			writeSpeech("player", "", "So? Anything?");
			writeSpeech("assistant", "", "No sir, no immediate effect.");
			writeSpeech("player", "", "Interesting. Maybe it's something that needs to be activated to work. Huh, I can't get this off.");
			writeText("assistantF looks up from her notes before looking around with a confused look on her face.");
			writeSpeech("assistant", "", "What was I...?");
			writeSpeech("player", "", "assistantF?");
			writeSpeech("assistant", "", "Ah! Oh, Mr. playerL, sorry. I must've been distracted for a moment.");
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
			writeText("You slap assistantF hard on the ass, and she does a little jump on the spot while letting out a squeak. But instead of getting mad she just rubs her ass and looks around to see if anyone saw.");
			writeText("...");
			writeSpeech("notes", "", "Findings:<br>The bracelet allows the wearer to be unperceived by others but only when the wearer desires to go unnoticed.<br>If the wearer wishes, any action they take will go unnoticed, including physical actions such as pinching and molesting. People affected by these actions will still feel the repercussions, but they will ignore the actions as if they were run of the mill occurrences.<br>The wearer can erase memories from other people's minds. This effect is limited to memories of the wearer or the wearer's indirect actions.");
			break;
		}
		case "braceletResearch2": {
			writeText("It takes some time to get used to, but walking around completely unnoticed is actually pretty nice. You need to actively want to be seen for anyone to notice you, so you accidentally bump into a few people as a result of not paying attention.");
			writeText("You walk into your office and can see assistantF leaning back on her chair, her face looking a little flushed.");
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
			writeText("You push your cock into assistantF's mouth and make her start stroking the base with her free hand. In just a moment she's doing it  of her own volition, happily sucking on your head while she pleasures herself.");
			writeSpeech("assistant", "", "Mmm~... Mmm~...<br><i>God, he feels so real today... I'm going to get caught if I keep this up.</i>");
			writeBig("images/bracelet/research2-3.gif");
			writeSpeech("player", "", "Nggh... Gonna-");
			writeText("You can hear the sound of a door closing across the hallway, and assistantF jerks up at the sound.");
			writeSpeech("assistant", "", "Shit... Fuck, he'll be back any second.");
			writeText("Leaving you tragically unfinished, assistantF quickly starts putting her clothes back on and leans out into the hallway to see if you're coming. Which you aren't.");
			writeSpeech("player", "", "Fuck, oh well. I should get to work anyway. I'll work faster next time, I guess.<br>assistantF?");
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
			writeText("She gave you a pretty neat idea, but assistantF is already on a pretty hair trigger. It'd be more fun to push someone else, but who?");
			writeSpeech("assistant", "", "Mmm~... B-boss? Where'd you go?");
			break;
		}
		case "braceletResearch4": {
			writeText("As you disrobed to enjoy bossL with the bracelet's power, she surprised you by calling assistantF into her office. She started chewing out assistantF over something about report formatting.");
			writeText("You didn't pay too much attention to what she was saying.");
			writeBig("images/bracelet/research4-1.gif");
			writeSpeech("boss", "", "Do... Do I make myself clear, assistantL?");
			writeSpeech("assistant", "", "Yes ma'am! <br><i>Fuck, I screwed up on this one. She's red in the face... I wanna go home... </i>");
			writeText("You do feel a little bad for assistantF for a moment though, with the way you're pounding bossL's cunt, it looks like bossL is trying to get up in assistantF's face and intimidate her.");
			writeSpeech("player", "", "Acting so tough while you're getting fucked, you really do have an iron spirit, huh? How about... This!");
			writeBig("images/bracelet/research4-2.gif");
			writeSpeech("boss", "", "Ggghh~!");
			writeText("A hard spank causes bossL's cunt walls to suddenly clench around you.");
			writeSpeech("assistant", "", "<i>Did... Did she just have an orgasm from yelling at me? </i><br>I'll be... Be sure not to let it happen again, Mrs. bossL.");
			writeText("assistantF slowly eases her way out of the room as you push bossL's head down onto the desk, making sure she feels every inch of you.");
			writeSpeech("player", "", "Gonna cum, bitch! Take it all!");
			writeBig("images/bracelet/research4-3.gif");
			writeText("bossL's eyes roll back at her body shudders, but she doesn't make a sound as she tries to maintain her dignity.");
			break;
		}
		case "braceletResearch5": {
			writeText("The top floor, where the head honcho of Anomaly Vault spends her time. She's not super involved with most of the daily events, she's less CEO and more Majority Shareholder.");
			writeText("Rumors abound that she actually reports to a shadowy council, like the Illuminati but a cube, not a pyramid.");
			writeText("In any case it's no big deal to use the bracelet to sneak in. You slide past someone leaving and walk into her... Office?");
			writeBig("scripts/gamefiles/characters/chair.jpg");
			writeText("She looks right at you as the door closes, but she's probably just looking at the door behind you.");
			writeText("This place looks nothing like any office you've ever been in. There's no desk, and several walls give way to stunning balconies over large jungles. It's more like a botanical garden in here.");
			writeText("chairF chairL, the head of Anomaly Vault, takes a seat on a nearby chair. It doesn't seem like she notices you.");
			writeSpeech("player", "", "It's now or never.");
			writeText("...");
			writeBig("images/bracelet/research5-1.gif");
			writeText("You stripped off her fancy robes and got to work enjoying yourself with your new fleshlight. Her plump lips make good padding for your pelvis as you slam your cock down her throat.");
			writeText("Your hands are on her neck, enjoying the bulge your dick makes as you thrust in and out.");
			writeBig("images/bracelet/research5-2.gif");
			writeSpeech("player", "", "Gah! What the hell are you-");
			writeText("You jump in place as chairF grabs you by the ass to pull you deeper, taking you down to the balls. You feel her tongue slide out to run along your balls as she moans, clearly enjoying her prize.");
			writeSpeech("player", "", "F-fuck~<br>Can you see me?");
			writeText("She pulls back for a moment then slams her face down onto your crotch again.");
			writeSpeech("player", "", "God damn! Gonna cum!");
			writeText("This finally breaks her rhythm. She pulls herself off your dick, not even so much as a gag or *glch* and starts stroking your length.");
			writeSpeech("chair", "", "Do it. Give it to me.");
			writeBig("images/bracelet/research5-3.gif");
			writeText("She sighs appreciatively as your cock spurts its thick cream out onto her hand and arm.");
			writeText("You stumble back as you finish, chairF lewdly licks her fingers clean of your jizz.");
			writeSpeech("chair", "", "Well, I see you certainly enjoyed yourself. It was a lovely distraction for me as well.");
			writeSpeech("player", "", "How-?");
			writeSpeech("chair", "", "I am the chairwoman of the most powerful institution of the world. Even if I didn't have a bevy of reality-bending power sources in my possession, I still have ways to deal with perception alteration.");
			writeSpeech("player", "", "Oh.");
			writeSpeech("chair", "", "There's no need to worry. Neither your life or your job are in danger. If you were the type of person to use the bracelet for murder or something wasteful like that, we would have fried you the moment you touched it.");
			writeSpeech("player", "", "Do you mean 'fired'?");
			writeSpeech("chair", "", "No. <br>You should be getting back to work. The artifacts can get antsy when they feel ignored.");
			break;
		}
		case "braceletHome1": {
			writeSpeech("player", "", "Alright, I'm crossing a line here. No going back now.<br>roommateF? You finished?");
			writeText("You don't hear an answer, but after a quick search you hear the shower to roommateF's room shut off.");
			writeSpeech("player", "", "Hey, roommateF?");
			writeSpeech("roommate", "", "Just out of the shower, what's up?");
			writeText("She calls back faintly through the multiple sets of doors.");
			writeSpeech("player", "", "Just saying hey. You going somewhere today?");
			writeSpeech("roommate", "", "Yeah, I'm meeting girlfriendF later today. I'll be out late.");
			writeSpeech("player", "", "No problem, have fun.");
			writeText("You push open the door to her room, using the bracelet to hide your presence.");
			writeBig("images/bracelet/home1-1.gif");
			writeText("She's just finished drying, and lets down her towel as her phone buzzes on her nightstand.");
			writeText("She picks it up to see who's texting her and...");
			writeSpeech("roommate", "", "Oh!");
			writeText("She quickly turns off the screen. She's always been a bit of a prude, so her girlfriend is probably trying to get her to open up.");
			writeText("She takes a deep breath as she sits on her bed, you're enjoying the bizarre, voyeuristic thrill. After making sure her window's closed, she lays back on the bed naked and opens her messages again.");
			writeBig("images/bracelet/home1-2.gif");
			writeSpeech("roommate", "", "girlfriendF, you perv...");
			writeText("She must be really sensitive, she's already blushing hard and getting into it just from running her finger along her folds.");
			writeText("You take a few careful steps forwards, but even when you look right into her eyes it's like you aren't even there.");
			writeSpeech("roommate", "", "Mmm... girlfriendF...");
			writeText("Deciding to push you luck, you slide your pants off and start jerking off right in front of roommateF's face. She's jilling herself to a picture of her girlfriend in only lingerie, all while she's got a cock inches from her face.");
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
			writeText("Just as you're about to start messing with roommateF, her phone starts ringing. It's from her girlfriend, "+data.story[2].fName+".");
			writeText("...");
			writeSpeech("girlfriend", "", "So? What did she say?");
			writeSpeech("roommate", "", "She uh... Um... Nnn...");
			writeSpeech("girlfriend", "", "Hey, are you alright? You sound kind of strange.");
			writeBig("images/bracelet/home2-1.gif");
			writeSpeech("roommate", "", "Y-yeah, I'm fine. I've just been a bit... B-bit...!");
			writeText("roommateF clasps her hand over her mouth as she cums, her legs shaking.");
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
			writeText("You grab roommateF's phone and throw it aside before grabbing roommateF by the hair so you can finish yourself off with her mouth.");
			break;
		}
		case "braceletHome3": {
			writeSpeech("girlfriend", "", "Oh hey! You must be playerF!");
			writeSpeech("player", "", girlfriendF+", I assume? roommateF talks about you all the time. Nice to meet you finally.");
			writeSpeech("girlfriend", "", "All good I hope, nice to meet you too.");
			writeText("She goes in for a handshake, and you take it. You also use the bracelet to lean in and rub your hand against her twat. Seeing her frazzled ought to be interesting.");
			writeSpeech("girlfriend", "", "So what do you do?");
			writeSpeech("player", "", "Huh? Oh, uh, I work as a warehouse manager of sorts.");
			writeText("You get more into it. Maybe she just... Didn't notice? Maybe you were too gentle by accident. You start rubbing vigorously against her clit, ready to see her start to fumble her words as roommateF walks in.");
			writeSpeech("roommate", "", "Welcome back. girlfriendF, have you met playerF?");
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
			writeText(girlfriendF+" pulls roommateF close as you give a few thrusts, your balls clench as you feel yourself going over the edge.");
			writeBig("images/bracelet/home3-2.gif");
			writeText(girlfriendF+" leans as far forwards as she can beneath you and pulls roommateF into a deep kiss. You can feel girlfriendF's pussy clench. She's french-kissing her girlfriend while a man pumps jizz into her womb.");
			writeText("You pull out, spent, and watch as girlfriendF's hole gapes a little open once you pull out. She must've cum at least twelve times by your count, but she's damn good at hiding it.");
			break;
		}
		case "braceletHome4": {
			writeSpeech("sister", "", "What the fuck, you left the door open!");
			writeSpeech("Ashley", "none", "Huh...? I thought I closed it.");
			writeSpeech("Molly", "none", "Get your head in the game Ash, otherwise you're going to get destroyed tonight.");
			writeText(" You stand awkwardly in the corner as the girls filter into the living room and up the stairs. Slipping inside the room with the bracelet, you are essentially invisible; Ashley didn't even notice as you followed right behind her. sisterF opens her bedroom door and the three teens pile onto the bed in front of the television.");
			writeBig("images/bracelet/katya1-1.gif");
			writeSpeech("Ashley", "none", "Aw, did you start playing already?");
			writeSpeech("Molly", "none", "Yup, I forgot to bring my controller so you're playing the winner.");
			writeText(" While the girls chit-chat, you salivate at the spread of teen pussy in front of you.");
			writeSpeech("player", "", " Hey girls, mind if I help you get comfortable?");
			writeText(" It takes you no time at all to strip sisterF and her friends completely bottomless; the three of them are totally unaware of your presence even as their jeans slip off their shapely legs, revealing their shaved slits ripe for the taking.");
			writeBig("images/bracelet/katya1-2.gif");
			writeText(" You easily push your cock inside, enjoying the new sensation of sisterF's pussy...");
			writeSpeech("sister", "", "O-oh! Fu-fuck...");
			writeSpeech("Molly", "none", "What's up sisterF, you're really going to choke and let Ash play me next?");
			writeSpeech("sister", "", "Hah... n-not on your life!");
			writeBig("images/bracelet/katya1-3.gif");
			writeText(" After a few minutes of Heaven, you pull out and fuck another blissfully unaware teen...");
			writeSpeech("Molly", "none", "Ah! Uh, um, y-you scared me with that attack.");
			writeSpeech("Ashley", "none", "Yeah, right! Excuses, excuses, excuses.");
			writeBig("images/bracelet/katya1-4.gif");
			writeText(" Prodding their mouth, with a little effort you even get them tasting each other with your dick...");
			writeSpeech("Ashley", "none", "Mmmph... hmph!");
			writeSpeech("Molly", "none", "I can't believe you said that in class!");
			writeSpeech("sister", "", "Haha, yeah, that was pretty funny today.");
			writeSpeech("player", "", " Huh, now I want to know what she said...");
			writeBig("images/bracelet/katya1-5.gif");
			writeText(" By the time you round back to your neighbor's barely legal daughter, you only manage a few thrusts...");
			writeText(" ... before your throbbing cock slams inside her wet pussy and floods it with thick cum.");
			writeBig("images/bracelet/katya1-6.gif");
			writeText(" After you pull out, the girls are still completely unaware, albeit out of breath and blushing red. The room reeks of hardcore sex and their bodies glisten with sweat, but they don't seem to mind. Their eyes are still glued to the TV as they play their game, even as sisterF's used pussy steadily oozes out your semen.");
			//writeText(" In the end, they have a sleepover... and so do you.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</span>");
			break;
		}
		case "braceletHome5": {
			writeText("As you pass by sisterF's room, your ears perk up when your name is said. Furrowing your brow, you use the power of the bracelet to enter her room undetected, eavesdropping in plain sight.");
			writeBig("images/bracelet/katyaGame1.gif");
			writeText("You find sisterF in bed, laying on her stomach with her slender brown legs kicking behind her. It becomes quickly apparent that she is speaking to her sister on the phone.");
			writeSpeech("sister", "", "Jeez, just ask him! It's not weird, it's 2020! A girl can ask a guy out on a date.");
			writeText("Try as you might, you're unable to decipher what assistantF is saying on the other end in response to this. Your gaze trails down her back and onto her tight ass and her sexy legs swinging back and forth. Your cock begins to strain against your pants and you have no choice but to free it in front of sisterF's oblivious face. ");
			writeBig("images/bracelet/katyaGame2.gif");
			writeSpeech("sister", "", "Hmm, well, he has a nice house and he doesn't seem like a total creep- Nngf…!");
			writeBig("images/bracelet/katyaGame3.gif");
			writeText("You almost feel bad as you stuff sisterF's hot, wet mouth full of dick, her slippery tongue flexing against the underside of your shaft and licking it all over as she continues to try to speak. You stare down at assistantF's sister as she absentmindedly sucks you off, her eyes looking past you as if you were invisible.");
			writeSpeech("sister", "", "Glugh- mmmph!");
			writeText("sisterF's mouth feels exquisite, especially as she attempts to talk to her sister over the phone. You can hear bits and pieces of assistantF responding, as if she somehow understood her sister's muffled voice. With your cock now at full mast and lubricated, you pull out of her suckling mouth.");
			writeBig("images/bracelet/katyaGame4.gif");
			writeText("Circling around her, you grab sisterF's ass and lift her up. Next, you pull down her jean shorts and panties, exposing her tight pussy and give it an experimental lick, causing her to shiver and yelp. It seems that her conversation goes uninterrupted and without a second thought, you shove your hard cock balls deep into assistantF's sister.");
			writeSpeech("sister", "", "Oh! Fu-fuck… yeah, I'm still here... we gotta get you paid sis, how come you don't have a huge house like this?'");
			writeBig("images/bracelet/katyaGame5.gif");
			writeText("You're fucking sisterF at a steady, fast pace with long deep strokes. Your mind was already made up before taking her pussy- you have no intention of pulling out. The unaware teen still had no idea she was even having sex.");
			writeSpeech("sister", "", "Ah! Ah- J-just pretend you need to get something from me- fu-fuck- and you can come see his house.");
			writeSpeech("player", "", "Gonna cum, take it all slut!");
			writeBig("images/bracelet/katyaGame6.gif");
			writeText("Slamming inside as far as you can, you give sisterF a deep creampie, her pussy clenches down, milking you for every drop. She takes a sharp breath, interrupting her labored breathing and her legs quake as she cums. As you pull out, the thick seed oozes out of her, dripping onto the bed. You get up to leave-");
			writeText("Wait a minute, did she say date?");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</span>");
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
			writeText("It's almost impressive watching the ebony beauty struggle to speak, her wild eyes shifting around her as she searches for the cause of her discomfort. You give it to her hard and fast, railing her tight ass with your throbbing cock, all the while patrons drink and chat around you, as if the erotic scene were so completely and utterly normal, it wasn't even worth their attention.");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "What about you? How has the promotion been?");
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
		case "braceletLibrary1": {
			writeHTML(`
				t You decide to head to the local library to have some good clean fun with the bracelet. The place is a little shabby and worn down, but overall time has been pretty kind to it. 
				t And when you arrive you can see this place has been kind to the current librarian, her nameplate reading librarianF.
				im scripts/gamefiles/characters/librarian.jpg
				t You're ready to walk right up to her and have your way, but something causes her to perk up. At first you think she somehow noticed you, but then you hear it as well. The stifled moans of someone else in the library.
				...
				im images/bracelet/library1-1.gif
				sp librarian; O-oh my...
				t You take in the kinky exhibitionist's show. What's just as interesting though is librarianF peeking from behind a shelf to watch as well.
				t The exhibitionist is clearly awakening something in librarianF, although that could also be the fact that you're stroking her cunt through her clothes. You make a mental note that the bracelet might be pretty good at giving other people fetishes.
				im images/bracelet/library1-2.gif
				t Using the bracelet to stay unnoticed you grab librarianF's panties and pull them aside, enjoying the fact that she's already completely soaked.
				t librarianF bites down on her knuckle trying to keep her voice under control, but she doesn't even consider taking her eyes away from the exhibitionist in front of her for a second.
				sp librarian; <i>Oh god, what's happening to me? Just from watching... I'm... I'm...</i>
				im images/bracelet/library1-3.gif
				sp librarian; <i>Cumming~!</i>
				t Her legs shake and quiver as she hits an orgasm even stronger than the exhibitionist's. Her eyelids flutter and her stance wavers as she needs to lean on the shelf for support.
				t The woman putting on the show quickly composes herself and starts getting dressed. Panicking that she'll be found librarianF tries to scramble away as well. You leave librarianF to see how she'll develop the next time you see her.
			`);
			break;
		}
		case "braceletLibrary2": {
			writeHTML(`
				t You arrive back at the library to find that librarianF isn't at her desk. After a bit of searching you find her neatly organizing books.
				t As she approaches the row where the exhibitionist was putting on her show last time, you can see her stop and hesitate, her eyes lingering as she remembers what she saw.
				t It's actually pretty cute to see her put down her stack of books and look around to make sure nobody's watching. She lifts up her skirt, but hesitates.
				sp librarian; Jesus... Get ahold of yourself... I shouldn't-
				im images/bracelet/library2-1.gif
				t librarianF gasps as you start preparing her ass for some fun, you might as well get her addicted to anal and rough sex while you're turning her into an exhibitionist.
				t librarianF leans against a bookshelf for support, her mind trying to rationalize what's going on. As far as she knows she's losing control of her body and being overwhelmed by sensations as part of a newly developing kink.
				t You drag her by the hips over to a small table, still making sure nobody will see her partially so you can leave her as a broken mess, but also partially because you want something for her clit to rub against between thrusts.
				t The bracelet still affecting her mind, she can't really be sure why she's moved, all she can really be sure of is that she's horny as fuck.
				im images/bracelet/library2-2.gif
				sp librarian; Ghh~! Ghh~!
				t And that her ass feels incredible. She really is doing her best to hold her voice in. Enjoying the torment, you grab her by the legs to ensure the fetishes you're pounding into her will stick.
				im images/bracelet/library2-3.gif
				sp librarian; Ouuuugh~!
				t In her defense there really isn't a woman alive who could handle this kind of assfucking and stay quiet, although her pussy spasming in the throes of an orgasm is one-hundred percent on her. Just to really drive the point home you keep pounding her well through her orgasm.
				t At this point it's guarenteed that she'll be the next one to start jilling off in the library, and that's kinda your fault, so you do her at least one last good service by lowering her and pulling out. 
				im images/bracelet/library2-4.gif
				t Although whether cumming on her ass compared to creampieing it is a good service is arguable. What matters is that she and you are both satisfied.
			`);
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
		case "charmResearch1": {
			writeHTML(`
				sp assistant; Do... Do we really need to be doing this?
				sp player; This is an artifact too. What's the codename?
				t The charm is set upon a small cushion on a research table. Despite your insistence assistantF is giving it a wide berth and is very obviously trying not to look at it.
				sp assistant; This is test log RC-01, but there's nothing here.
				t assistantF's behavior is curious in its own right, but what also grabs your attention is the style of the charm. You're no charm maker, but it looks eerily similar in style to the bracelet you're wearing. Maybe they're from the same source?
				sp player; assistantF, note down the patterns here, see if they match... assistantF?
				t Still holding the charm you turn to assistantF and start to hear faint whispering. Her mouth isn't moving yet it's definitely her voice.
				sp assistant; <i>Don't think about it, don't look at him... <br>How long is minimum test length? If I note down 'artifact vanished'- <br>No, no it'd notice me. I'll write 'no artifact found in test chamber.'
				t She's avoiding looking at you now, trying to think of excuses to stare at the ceiling or floor. Once you set the charm back down her eyes meet with yours again.
				sp assistant; S-so, we good for today boss? Plenty of oth-<br>Plenty of artifacts to research!
				...
				t Looking through the testing history of the charm before it came to the vault, you notice a trend. Logs of the item's weight and dimensions have been recorded by electronic systems, but research logs and acquisition details are left nearly blank. Most testing notes match what assistantF wrote, reading that there is no artifact.
				t There's just one paper, all the data completely redacted. The name of the researcher matches one who disappeared recently, the date he vanished matches the day he submitted this document. 
				sp notes; Findings:<br>Nearly every subject refuses to acknowledge the charm's existence, the only exception being someone wearing the reprehensive bracelet. This affect extends to the wearer of the charm as well, people around the wearer are aware of the wearer's existence but refuse to acknowledge them. <br>In addition subjects note that they can hear whispers while wearing the charm, suggesting that the whispers are the thoughts of the people ignoring them. Currently, no data exists on what would happen is someone were forced to acknowledge the charm's existence.
			`);
			break;
		}
		case "charmResearch2": {
			writeHTML(`
				sp player; Hey. Heeeey. 
				t You poke assistantF's cheek over and over. At first she was worried, the voices from her head saying things like "just ignore him" and "keep calm, assistantF." Now she's just reciting pop song lyrics to herself while filing paperwork.
				sp player; Fine, fine. I can see I'll need to take things up a notch. 
				im images/charm/research2-1.gif
				t You grab her shirt and tear it open in one smooth motion, but she remains silent.
				sp player; Still nothing? Huh.
				sp assistant; ...
				sp player; You seriously aren't giving in? You realize someone could walk in at any moment. Oh, speaking of which-
				t You look over to the side pretending like someone just walked in. assistantF's body goes rigid and you can hear her pencil snap in her hand.
				sp player; Aw man, guess nobody's there.
				t She's breathing pretty hard, but relaxes a little as you say that. It's not like she <i>can't</i> perceive you, she just <i>won't</i>.
				sp assistant; A-ah, my shirt ripped...
				t Coming up with an excuse she scurries off. 
			`);
			break;
		}
		case "charmResearch3": {
			writeHTML(`
				t You knock on the door to bossL's office. Empty. She must be off somewhere else, maybe doing something important, but you have an artifact to test. Science doesn't play by personal schedules.
				...
				t You find her giving a lecture to about a dozen agents and other faculty members, graphics are displayed on screen reminding employees to be vigilant in both mind and body.
				t You walk right on in, and the reaction isn't exactly what you expected.
				t It feels like the temperature of the room drops a few degrees, small murmurs go silent. Everyone who was paying half attention, goofing off, or letting their eyes wander now gives bossL their full attention so as not to accidentally even glance at you.
				sp boss; And so, again, the order of operations when dealing with memetic infections is determining severity, identifying self-compromise, and isolation of potential vectors.
				t It's the perfect kind of meeting to interrupt. One that needs to be done weekly, but where nothing new is stated. To her credit bossL never phones it in, the material really does need to be committed to memory.
				t The least you can do is help her out with that.
				...
				im images/charm/research3-1.gif
				t bossL grips her podium white knuckled, any pretense of continuation should be well out the window, but...
				sp boss; And soOough, remember that... You'll encounter... Telltale signs offfckk...
				t bossL grits her teeth and braces herself as her legs shake.
				im images/charm/research3-2.gif
				t 'I can't believe she came from that', 'I know she had to put up with him, but did she really need to cum?', 'Hurry up and leave so I can record her!', 'Serves you right, bitch.'
				t Stray thoughts bounce around in your mind from the audience, but all that's coming from bossL is a mixture of hazy white noise, shame, and impotent rage.
				im images/charm/research3-3.gif
				sp boss; Fuh... Hu...
				t Her hair matted with sweat and cum dripping from her snatch, she takes just a second to breath before going to the next slide and soldiering on with the presentation.
			`);
			break;
		}
		case "charmOutdoor1": {
			writeHTML(`
				t The normally busy bar quiets down as you walk in, although some conversation resumes as people try to distract themselves from your presence. Hopefully the great social lubricant will help somebody aknowledge you. 
				t In fact there's a woman over at the bar who looks like the perfect test subject. She's got some shot glasses in front of her. You undo your belt and get ready to do some science.
				...
				im images/charm/outdoor1-1.gif
				t The bar is quiet once more as people try to watch the bizzare show out of the corner of their eyes. The woman gulps dryly as her previously empty shotglass is full again.
				t She takes a deep breath to steel her nerves and downs the glass like she would any shot. Unfortunately for her your cum is a little too sticky to go down like liquor. 
				sp ???; im none; Oh god, it's so thick! No matter how much I swallow the taste won't go away! 
				t She opens her mouth and starts panting, trying anything to get her mind off the taste. Unfortunately this just makes it even more obvious to everyone around that her breath smells like cum. 
				t She reaches for something else to drink but you just push everything in reach away. Instead, you take the empty shotglass and start jerking yourself off again. 
				... 
				sp ???; im none; I can't... No more... 
				t Her eyes flutter as she lays her head on the counter. After the first load you started adding liquor to the cum-shots. Mostly because you wanted to see if being drunk would speed things along, but she's still doing her best at ignoring you. 
				t Her stomach gurgles a little, full of alcohol and semen. At this point the smell of cum is pretty overpowering, she'll be tasting you on everything she eats for the next few days. Plus she'll need a lot of breathmints if she doesn't want her first impression on others to be 'cum-gargling whore'. 
				t Well, your efforts weren't enough this time. At least you had fun.
			`);
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
			writeSpeech("player", "", "Now beginning test EB-02, I've got an ordinary taser.");
			writeText("You place the taser in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/taser.jpg");
			writeSpeech("assistant", "", "Geez, looks like a kid's toy.");
			writeSpeech("player", "", "Only one way to find out.");
			writeText("There's still the potential that this is just a normal taser, and you aren't a total back of dicks, so you raise your arm and give yourself a quick zap to test the taser. Maybe it'll be painle-");
			writeSpeech("player", "", "Ah~!");
			writeText("There's an awkward silence as your hand shoots up to cover your mouth.");
			writeSpeech("assistant", "", "Did you just... Moan? Like a girl?");
			writeText("...");
			writeText("<b>ZAP</b>!");
			writeSpeech("assistant", "", "Hhhgk!");
			writeBig("images/erotibox/taser.gif");
			writeSpeech("player", "", "Not so mocking now, huh?");
			writeText("Her legs wobble as a stream of squirt powerful even through her panties, splashes onto the room's floor.");
			writeText("Her skirt and stockings are pretty much ruined at this point, and her brain might be too. She's panting and unresponsive to questions, like you just zapped the IQ right out of her. A good rest out to get her mind back though.");
			writeSpeech("notes", "", "Findings: <br>The taser was replaced with a similarly-functioning device that generates punk electricity between its prongs. <br>When zapped pleasure is inflicted approximately equal to the pain inflicted by a normal taser. Excessive zapping can cause a decrease in mental capability for a short time, the effects of repeated use are to be investigated thoroughly later on more expendable test subjects.");
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
			writeText("You toss bills into the air, 'making it rain' over assistantF.");
			writeSpeech("assistant", "", "That's degrading, I'm not going... to...");
			writeText("...");
			writeBig("images/erotibox/research5-1.gif");
			writeSpeech("assistant", "", "You like that, big boy?");
			writeSpeech("player", "", "Y-yeah, I like it...");
			writeSpeech("assistant", "", "You wanna go all the way? Just a little more for me, baby.");
			writeBig("images/erotibox/research5-2.gif");
			writeSpeech("player", "", "But... But I'm out of bills...");
			writeText("With that, assistantF's eyes light up in confusion and anger. She's baffled for a second as she looks around, before she slaps you in the face and covers herself with her arms.");
			writeSpeech("notes", "", "Findings:<br>The bills were replaced with a visually identical set of bills, titled 'Stripper Money' by researcher playerL. When thrown in the air above someone's head, that person will begin to put on a strip show. The length of this show and the energy of the stripper is determined by how quickly the money is thrown, until the thrower runs out of bills.");
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
			writeSpeech("notes", "", "Findings:<br>The water inside the bottle was replaced with a highly arousing fast-acting aphrodisiac. Upon drinking subjects nearly immediately experience a massive drop in intelligence and vocabulary, ending with the subject becoming a 'squirting mess' as researcher playerL described it.");
			break;
		}
		case "erotiboxResearch7": {
			writeSpeech("player", "", "Now beginning test EB-07, I've got a single rose.");
			writeText("You place the flower in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/flower.jpg");
			writeSpeech("assistant", "", "Doesn't that kind of look like...");
			writeSpeech("player", "", "A pussy? It fits with the artifact's usual shtick. The main thing is that it isn't even the same flower we put in.<br>Here, it still smell like a rose?");
			writeText("You hold out the flower and assistantF takes a hesitant sniff.");
			writeSpeech("assistant", "", "Isn't this dangerous? Using the box on living things is a bit... <br>It smells... Kinda off.");
			writeText("You give it a whiff, it doesn't smell any different.");
			writeSpeech("player", "", "Seems like the same to me. Then again my nose is pretty shit. Maybe it's just an aesthetic change? The flower isn't really alive anymore any-");
			writeSpeech("assistant", "", "Ah, um...");
			writeText("assistantF squirms where she stands.");
			writeSpeech("assistant", "", "Could, uh... <br>Could you excuse me for a second?");
			writeSpeech("player", "", "Now? We just started an experiment, can't it wait?");
			writeSpeech("assistant", "", "It r-really can't, sorry.");
			writeText("She runs off in a hurry. You carefully set down the flower, ready to use the bracelet to figure out what's going on.");
			writeText("...");
			writeBig("images/erotibox/flower.gif");
			writeText("She couldn't even make it to the bathroom, instead darting into a small, cramped closet to pull down her underwear.");
			writeSpeech("assistant", "", "Holy fuck... This has to be the flower, I've never been this wet...");
			writeText("She's absolutely dripping with cunt juices, completely in her own world. She actually looks ready to start masturbating right here until a look of realization hits her and her eyes fog over.");
			writeSpeech("assistant", "", "F-flowers need water... If I squirted on it...");
			writeSpeech("player", "", "Ah shit, another memetic effect.");
			writeText("...");
			writeSpeech("notes", "", "Findings:<br>The flower was replaced with a more lewdly shaped one of another species. When the pollen inside is inhaled by a woman, it causes an extreme uptick in generation of vaginal wetness and has an aphrodisiac effect. <br>Also noted is that shortly after the affected woman will experience a strong desire to 'water' the flower by masturbating to a squirting, orgasm over the plant. The flower has been put under containment until further notice.");
			break;
		}
		case "erotiboxResearch8": {
			writeSpeech("player", "", "<span id='ero10'>Now beginning test EB-08, I've got a uh...</span>");
			writeText("<span id='ero9'>You look over to assistantF.</span>");
			writeSpeech("assistant", "", "<span id='ero8'>Are you gonna put in your clipboard? We could use that flowerpot too if you want.</span>");
			writeText("<span id='ero7'>You use the bracelet to push assistantF into the box without her realizing what's happening.</span>");
			writeSpeech("player", "", "<span id='ero6'>Here's hoping this goes well.</span>");
			writeSpeech("assistant", "", "<span id='ero5'>Huh? Here's hoping what-<br>Wait, what? What're-</span>");
			writeText("<span id='ero4'>The bright purple flash is blinding, it's way more bright than usual, and lasts for almost half a minute before the light dims and assistantF steps out.</span>");
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
			writeSpeech("assistant", "", "<span style='color:red'>Cum. Now.</span>");
			writeBig("images/erotibox/research8-5.gif");
			writeText("...");
			writeText("You wake up in the hospital wing, you don't know how much time has passed.");
			writeText(assistantF+" was fine, there's an artifact here that can undo any changes.");
			writeText("Luckily, the bracelet can allow you to sweep all this under the rug, but you came dangerously close to a very bad ending for yourself.");
			break;
		}
		case "erotiboxResearch9": {
			writeSpeech("player", "", "Now beginning test EB-09, I've got a bottle of beer.");
			writeText("You place the drink in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/drink.jpg");
			writeSpeech("player", "", "Huh, thought it'd be in like a naked woman bottle or something.");
			writeSpeech("assistant", "", "They look like cocktails... Probably an aphrodisiac. <br>Ooh! I hereby dub this the 'sex on the bar'!");
			writeSpeech("player", "", "Nice. Alright, let's have a small drink. The box's effects are usually pretty mild, and we'll store the rest too.");
			writeText("...");
			writeText("The two of you took a few ginger sips before you relaxed for a while. The booze got you lightly tipsy, but the most confusing part is that the tipsiness isn't fading even after an hour.");
			writeSpeech("player", "", "That's... Strange. The buzz should be wearing off by now, not getting stronger. assistantF, you alright?");
			writeSpeech("assistant", "", "Uh-huh... Shuper great bossh...");
			writeSpeech("player", "", "Geez, you're wasted. What's that sound?");
			writeSpeech("assistant", "", "Jusht mashturbating under the table, bossh...");
			writeText("Suddenly a stronger wave of fog hits you as you process what she's saying.");
			writeSpeech("player", "", "Huh... Is it linking how drunk we are to how horny we are? Or maybe it causes stimulation to make us more drunk?<br>That'd explain why you're smashed. How'd you get aroused so much faster than me?");
			writeSpeech("assistant", "", "Naaaaah... I'm totally fiiiiine, you're reeeeally cute tho bossh~<br>Maybe the drinksh made you cuter? It'sh making me wanna rub my cunt on your pretry mouf.");
			writeSpeech("player", "", "Intereshting.<br>Fuck, gotta calm down. If I get to horny I won't remember this, I'm a scientist, damnit!");
			writeSpeech("assistant", "", "Yer sho professh... Profeshinal bossh... I jusht wanna fuck you aaaaall the time~");
			writeText("You stand up and crack your knuckles. Single-minded determination flows through your veins.");
			writeText("...");
			writeSpeech("assistant", "", "Cumming~... Ghuuu...");
			writeText("assistantF softly spasms beneath your  fingerwork, marking her third consecutive orgasm.");
			writeBig("images/erotibox/drink.gif");
			writeSpeech("assistant", "", "Ghhuubb... Shhhkt~....");
			writeText("She teeters on the edge of consciousness, each orgasm pushing her farther and farther from rationality. You're finding it hard to focus yourself, feeling like your brain has been drenched in booze. Perhaps it'd be best to wrap this up.");
			writeSpeech("notes", "", "Findings:<br>The alcohol was replaced with a pseudo-booze drink that links arousal with drunkenness. Orgasms cause an extreme spike in deliriousness as well. Because very little alcohol needs to actually be drunk for the effect to activate, there is no risk of alcohol poisoning no matter how wasted the subject becomes. <br>As an additional note, the typical hangover symptom of a headache seems to have been replaced with an extreme sensitivity increase to genitalia.");
			break;
		}
		case "erotiboxResearch10": {
			writeSpeech("player", "", "Now beginning test EB-XX, I've got the vials here.");
			writeText("You place a vial in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/serum/cherryTruth.jpg");
			writeSpeech("player", "", "It's... Red.");
			writeSpeech("assistant", "", "Yep. Maybe it's cherries? Those are the most erotic of fruit after peaches. What was this stuff again? Mouthwash?");
			writeText("You pick up the glass vial, the bright red contents start to swirl inside before a green foam starts fizzing at the top.");
			writeSpeech("player", "", "It was an artifact. Still is, I guess.");
			writeText("You hear the lead of assistantF's pencil snaps.");
			writeSpeech("player", "", "<span style='color:red'>It's fine, the serum is inert.</span>");
			writeText("The look of panic on her face vanishes, replaced with a dull stupor as she nods her head. There's a conflicting taste on your breath, like cherries mixed with mint.");
			writeSpeech("player", "", "Whoa... I haven't even drunken it yet...");
			writeText("The flavors clash hard, it's almost a little nauseating. Soon enough though the taste of cherries vanishes, replaced with a minty flavor more intense than ever. The green foam has filled the vial, and the fluid seems to calm down leaving only an incredibly vibrant green. Like an immune system wiping out a virus, and the host being stronger for it. It's actually glowing, and is warm in your hands.");
			writeText("You've dealt with artifacts that have mind-altering properties before. They're like a heat that worms its way through your brain trying to cloud your thoughts, this is different. This is like staring at the sun, an incredible power that doesn't give a shit about you or your place in the universe.");
			data.player.color += "cherry";
			writeFunction("writeEvent('serumEnding')", "Take the power for yourself, take over the Anomaly Vault");
			break;
		}
		case "erotiboxResearch11": {
			writeSpeech("player", "", "Now beginning test EB-03-2, I've got another recreation of Leonardo Da Vinci's Mona Lisa.");
			writeText("You place the painting in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeHTML(`
			im images/erotibox/painting2.jpg
			sp player; What the fuck...
			sp assistant; Is that?
			t The painting is a conglomerated image of dozens of pornographic stills positioned to look like a painting. 
			sp player; That's not the same thing as last time. That's not even... The Mona...
			t It's getting harder to voice your thoughts as looking at the painting starts to play sounds in your head. Hundreds of writhing women getting pounded simultaneously, their moans and the sound of slapping flesh coming from every direction.
			t Just barely you can hear assistantF screaming something at you. Even looking away doesn't help cull the noise.
			sp notes; Findings:<br>The painting was replaced by a bizarre mismash of pronographic screencaptures made to look like a classical painting. Notably not the Mona Lisa. <br>When viewed for any length of time the subject will hear a mentally overwhelming mental white noise of loud sex. Even when separated the noise continued, thus the painting was destroyed and the effect ended. <br>The result of this test shows that the Erotibox will not always produce the same product with the same input. Even more worrying is the suggestion by Research Assistant assistantL that the box is improving in its ability to alter objects. 
			`);
			break;
		}
		case "erotiboxResearch12": {
			writeHTML(`
			sp player; Now beginning test EB-012, I've got a strawberry flavored icecream cone.
			t  You place the ice cream on a paper towel in the box, then shut the front gate.
			t Within seconds a bright purple light illuminates the room, before quickly dying down again.
			t Inside the box is...
			im images/erotibox/icecream.jpg
			sp player; Oh, neat. It's shaped like a-
			sp assistant; ... I'm not eating that.<br>Would you eat a dicksickle?
			sp player; Coward, fine. I like the flavor anyways.
			t You take a long lick of the icecream, the moment your tongue hits the sweet treat assistantF gasps and crosses her legs.
			sp assistant; H-holy shit, stop!
			sp player; It's linked to you, huh? I don't think I will.
			t After a few more licks assistantF quickly stumbles out of the room. Using the bracelet you follow behind her unseen, watching as she desperately shimmies out of her panties.
			im images/erotibox/icecream.gif
			t With every lick her pussy and ass twitch, and she squirms beneath phantom stimulation. 
			t Suddenly, an alarm goes off signalling a containment breach. The doors shut and lock as red lights flare.
			...
			t You gently place the icecream in a refrigerated box for future study as armed guards make sure the rest of the facility is safe.
			sp notes; Findings:<br>The ice cream was replaced with a lewdly-shaped cone of the same strawberry flavor. When the frozen confection was licked, every woman within the vault and a two-mile radius outside felt a strong stimulation as though someone was performing cunnilingus on them.<br>The effects seem only to occur when a human is interacting with the treat; exposing it to freezing or hot temperatures did not produce the same effect. Future testing will be conducted at the arctic vault site.
			`);
			break;
		}
		case "erotiboxResearch13": { //PC
			writeHTML(`
				sp player; Now beginning test EB-0X, I've got a windows-based personal computer with several games installed.
				sp assistant; Wonder which intern kicked the can and got his PC thrown in the research bin.<br>Huh, maybe playing games at work is what got him fired.
				t You place the computer tower in the box, then shut the front gate. 
				t Within seconds a bright purple light illuminates the room, before quickly dying down again.
				t Inside the box is... The same PC, untouched.
				sp player; Nothing happened? Not even a crude paintjob?
				sp assistant; Load it up, maybe the wallpaper is something kinky.
				...
				sp player; Wallpaper is normal... Operating system is the same as before... The files on here aren't even corrupted. Maybe the box doesn't get how a computer works?
				sp assistant; Maybe. Hey, try that game.
				sp player; I think that one's online only, but fine. This is that popular team shooter game, right? The one that looks like a pixar movie?
				t As you click the icon the PC whirs a little, and instead of a login screen it enters you right into a game. 
				sp assistant; Ooh, ooh, pick the cute one, with the goggles. My sister plays this on the internet actually.
				sp player; Yeah yeah. Did it change the game's files? This character's ass is-
				sp assistant; Nope, that's normal.
				t As you are, of course, highly unskilled at video games you're taken down quickly, only for a bizzare cutscene to play of your character being...
				im images/box/overwatch.gif
				sp assistant; Whoa~! You suck at this!
				sp player; That's what you're focused on? Alright, so the box changed the games. Note that down, I'll power it off.
				sp assistant; Next game, next game! Ooh, what's "Dolphin Emulator"?
				...
				im images/box/metroid.gif
				sp notes; Findings:<br>The PC itself was unchanged, but the games on the drives were radically altered to include material much more erotic in nature. Online-only games were altered to become playable offline. Notably the games were extremely reactive to player choices, much more so than a game usually is.<br>This experiment suggests the box is compatible even with materials that are very modern in nature.
			`);
			break;
		}
		case "erotiboxResearch14": { //wonder woman
			writeHTML(`
				sp player; Now beginning test EB-0X, I've got a DVD copy of the movie Wonder Woman.
				sp assistant; Couldn't you have picked Iron Man or something? I want some eye candy too.
				t You place the disc in the box, then shut the front gate. 
				t Within seconds a bright purple light illuminates the room, before quickly dying down again.
				t Inside the box is...
				sp player; ... A blank DVD case? An unmarked disc inside... assistantF, let's load this up.
				...
				im images/box/wonder.gif
				t You and assistantF munch on some popcorn while you watch some Wonder Woman cosplayer choke down some dick. It's a pretty short flick, the usual plot of blackmailing a superhero into doing porn and them hesitantly talking dirty to the camera until they break.
				sp assistant; Acting's not bad. She maybe could use more practice getting deeper though..
				sp player; And you're an expert on giving head? Oh, credits.
				sp assistant; Shut up, you don't need to gobble a ton of cocks to know she was-
				t assistantF stops mid-word as the credits roll by, mostly because of one line.
				t <i>Wonder Woman - Herself</i>
				sp assistant; Did we... Just watch actual revenge blackmail porn? Staring a fictional superhero? How the hell...?
				sp notes; Findings:<br> The movie was replaced by an amateur porno claiming to star the real Wonder Woman. Aside from the obvious, no anomalous properties were detected.
			`);
			break;
		}
		case "erotiboxResearch15": { //sleepmask
			writeHTML(`
				sp player; Now beginning test EB-0X, I've got an ordinary sleepmask, black.
				sp assistant; Looks a lot like mine, actually.
				t You place the mask in the box, then shut the front gate. 
				t Within seconds a bright purple light illuminates the room, before quickly dying down again.
				t Inside the box is...
				im images/box/sleep1.jpg
				sp assistant; What the fuck.<br>Is this where all those stupid fucking hoodies came from? This box?
				sp player; That's worth considering.<br>Now hold still for a second.
				...
				t Despite assistantF seeming awake and alert just earlier, she's out like a light and softly snoring now.
				t She lets out a small, upset groan at something in her dream as she shifts, reaching down to rub at her crotch. Your heart is pounding in your chest just looking at her, a wave of desire clouding your eyes.
				t The mask is probably affecting your sense of reason, but you might as well roll with it.
				im images/box/sleep2.gif
				t She softly sighs and her lips tremble. Her pussy is wet, either because of the mask or a particularly enjoyable dream.
				
				im images/box/sleep3.gif
				im images/box/sleep4.gif
				
			`);
			break;
		}
		case "erotiboxResearch20" : {
			writeHTML(`
				sp player; Now beginning test EB-013... We're about to put in uninflated exercise ball.
				t You place the loose, floppy plastic pile into the box before shutting the front gate.
				t Within seconds a bright purple light illuminates the room, before quickly dying down again.
				t Inside the box is...
				im images/box/research20-0.jpg
				sp assistant; I'm not riding it.
				sp player; Come on, I'm sure it'll be fine.
				t She gives you a frown and a roll of her eyes... before finally sighing.
				sp assistant; If you weren't my boss, I'd order <i>you</i> to ride this thing...
				...
				im images/box/research20-1.gif
				sp player; Huh... You've actually been going for quite a while, assistantF. I think it's about time for a break.
				sp assistant; N-No, I can... I can keep going! Just another... another minute...!
				...
				im images/box/research20-2.gif
				t Looking at your watch, it has now been about three more minutes since the last time you asked, and five since the first.
				sp assistant; J-Just... 30 seconds...!
				sp player; As impressive as this is to watch, I think it's obvious this thing has a memetic effect.
				t Reaching over, you grasp her by the waist and pull her body, separating her from the ball.
				t She seems to struggle for a second, before completely collapsing into your arms.
				sp player; How're you feeling?
				sp assistant; F-Fuckinnnn tired...
				sp notes; Findings:<br>The exercise ball came out fully-inflated and with a phallic extension sticking out of the front. Based on preliminary testing, it seems like it drives the user to exercise their lower body by squatting onto the dildo, while simultaneously driving them to continue exercising despite their level of exhaustion.<br>Based on an examination of assistantL, it seems that the device somehow kept her hydrated despite the amount that she had sweat, and the muscle fatigue was far more short-lived than anticipated. The artifact seems largely beneficial; further research into its use as a potential tool for training Anomaly Hunters may be warranted.
			`);
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "erotiboxEnding": {
			if (data.player.character == "red") {
				document.getElementById('playerImage').src = "scripts/gamefiles/profiles/box.jpg";
				data.player.character = "box";
			}
			writeText("The inside of the box is cramped and smells like sex, although that's to be expected after what happened last time.");
			writeText("You close the box, the door latches shut by itself. A moment of panic overtakes you before pink light blinds your vision. Your senses of sight, sound, and self all melt away in an instant. For the briefest fraction of existence, you are without form.");
			writeText("The next thing you hear is the sound of a containment breach alarm. The next thing you see is the door to the box opening, but nobody is there. The next thing you feel is an all-encompassing sense of power and lust. You climb out of the box and stand, feeling taller than before. A panicked voice fills the room.");
			writeSpeech("assistant", "", "playerF! What's going- What the hell did you do?!");
			writeText("A young woman, familiar but distant, is at the console outside the testing room. She seems in a frenzy, so you offer a kind smile and she stumbles on the spot, her eyes glaze over and she relaxes as if she suddenly became drunk. You've become even more powerful than she did, the vessel is improving even further.");
			writeSpeech("player", "", "Let me out.");
			writeText("The door slides open and you walk through as the alarms continue to blare. The young woman does her best to walk towards you doing her best to strip and masturbate all at once. She looks ready and willing, she'd probably be eager to grind her clit against the ground you walk upon.");
			writeText("But this is no time for that. You press a finger against her forehead and she gives out a shrill scream and sprays the ground beneath her.");
			writeText("...");
			writeText("Less than an hour since the vessel improved you, the facility has begun to collapse. Armed gunmen, soldiers, the vault's experienced staff, none could stand before you. Even if they could keep their will intact through your pheromones, they stood no chance after actually seeing your body in person.");
			writeText("A trail of loyal devotees follow behind you, eager for a taste of your body, but you have one last obstacle in your way. The main door at the top floor of the vault opens, and inside is humanity's last hope, already broken and pleasuring herself as her new reason for living walks through the door.");
			writeText("She tears off what remain of her clothes to rush towards you, but stops as you extend your hand.");
			writeSpeech("player", "", "The rings.");
			writeSpeech("chair", "", "Of course... Please, I need-");
			writeText("She tugs the jewelry off her fingers and hands them to you, and you reward her by taking her by the chin. As her body reels from the slightest touch her brain is fried as you grace her with a kiss. She collapses against you.");
			writeText("...");
			writeText("The pink flash of the vessel fills the room again. You've brought it to a more suitable location, a dingy lab is not worthy of it. The box opens and the former chairwoman steps out.");
			writeBig("images/erotibox/boxEnding1.jpg");
			writeSpeech("player", "", "How do you feel?");
			writeSpeech("chair", "images/erotibox/chairEnding.jpg", "Incredible...<br>I never knew how disgusting the world was before today...");
			writeBig("images/erotibox/boxEnding2.gif");
			writeSpeech("assistant", "", "Mmmph~!");
			writeText("The girl beneath you squirts again as she sucks your cock. Her body quivering just from imagining her life in the new world, improved by the glorious vessel that granted you new life.");
			writeSpeech("player", "", "Have no fear, little one. The vessel will improve you too, have patience.");
			writeText("The whole of the world shall be improved. Though the vessel's size is limited, visions fill your mind of the materials you will need to build a larger one. One that can house hundreds, thousands, more than enough to begin global conquest.");
			if (data.player.character == "box") {
				data.player.character = "red";
			}
			break;
		}
		case "gasResearch": {
			break;
		}
		case "gasResearch1": {
			tempScene = "vault";
			writeSpeech("player", "", "Now commencing research on the dark vault artifact A-05-99, aka Exchange Gas.");
			writeSpeech("assistant", "", "Good luck!");
			writeText("Her voice is a bit staticy through the speaker. These items are more dangerous than the usual artifacts you deal with, so you don't have the authority to force assistantF to work with you. Not to mention all the cameras in the testing bay, the trackers, and the security guards outside the giant metal door.");
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
			writeSpeech("gasF", "", "*Mwah*!<br>Mmm... It's still not enough. How does roommateF manage all day?");
			writeText("The female orgasm isn't quite what you'd imagined. It's like a pleasant buzz flowing through your body, and it lasts a lot longer than your old ones did. You've been jilling off while making out with assistantF for a while now, it's probably time to finish up. The gas's effects won't last much longer since you got such a small dose.");
			writeText("...");
			writeBig("images/gas/research1-3.gif");
			writeSpeech("gasF", "", "Mmm~! They feel so nice!");
			writeText("You enjoy a nice shower until the effects wear off. Just like before it starts with a pain, then a mind-wiping fuzz, then blackness until you wake up again in your old body.");
			writeSpeech("player", "", "That was pretty fun. I should be careful not to go too far though.");
			break;
		}
		case "gasResearch2": {
			tempScene = "vault";
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
			writeText("But assistantF is still writhing on the ground. The process must be slower for women. Her clit has grown at least three inches, and her pussy is spasming open and closed.");
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
			tempScene = "vault";
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
			writeText("As the evening arose, you notice that no one's come in to check up on you, but that doesn't matter. You and assistantF never turned back to normal, but that didn't matter either.");
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
			writeText("The room is silent. Dead silent. assistantF is motionless, the ventilation is off, every noise that filled the room stops except for a light ticking.");
			writeText("It seems like time has stopped. The second hand on the stopwatch is moving freely now, and the watch is functional.");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "-ybe we should clean it first?");
			writeSpeech("player", "", "That was awesome. Here, give it a shot.");
			writeText("You hand the stopwatch to assistantF who meekly accepts it.");
			writeSpeech("assistant", "", "Huh? Oh, sure. Did it work?");
			writeText("*CLICK*");
			writeText("After she clicks the button she's standing in a completely different spot, looking quite excited. You suddenly feel a rush of sensation to your crotch, as if someone rubbed it once or twice very quickly.");
			writeText("...");
			writeSpeech("player", "", "Hmm~ Hmm~ Just one more~");
			writeText("You set down the final piece to your house of cards, the whole of the ensemble atop assistantF's head.");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "Eeeeek!");
			writeText("The cards come tumbling down. An hour of progress falling apart before you, but you got a good reaction out of it so whatever.");
			writeText("...");
			writeText("After about ten full minutes of rubbing a spot on bossL's hand, you decide that that's enough testing.");
			writeSpeech("player", "", "It's so weird for her to be so quiet.");
			writeSpeech("assistant", "", "And so still. She's still intimidating though, even though she can't move.");
			writeText("*CLICK*");
			writeText("As time resumes bossL suddenly pulls back her hand, clutching it.");
			writeSpeech("player", "", "How does it feel?");
			writeSpeech("boss", "", "It... It felt like you spent an hour rubbing it. Why exactly couldn't you have tested this on assistantF?");
			writeSpeech("notes", "", "Findings:<br>When the button at the top of the Time Stopwatch is depressed time stops for everyone except for anyone in direct contact with the stopwatch. Machines cease to function, causing near complete silence.<br>After time resumes, any actions done to someone who has been 'time-stopped' will be felt all at once, creating a sensory overload sensation.");
			break;
		}
		case "stopwatchResearch2": {
			writeSpeech("player", "", "Excuse me, Mrs. bossL?");
			writeText("It's nice that we have a gym here in the facility. What isn't great is how bossL tends to be the reason it isn't used very frequently.");
			writeSpeech("boss", "", "What is it?");
			writeText("bossL is working out. She's got a fantastic body and is a treat to see in her workout pants. The problem is that she's just got such an intimidating aura that most people just try to avoid her.");
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
			writeBig("images/stopwatch/research2-1.gif");
			writeText("If your research is right, then after you finish she'll feel the entirety of the blowjob all at once when you click the stopwatch again. There's a decent chance she'll actually choke on your cum if you finish in her mouth though.");
			writeText("You pull out. You're just a little too late though, and you end up painting her face.");
			writeText("But you obviously aren't satisfied.");
			writeSpeech("player", "", "Lucky for me you've got another hole~<br>Mr. bossL won't mind will he? Do you think we should stop?");
			writeSpeech("boss", "", "...");
			writeText("The silence answers your question for you. You begin getting her out of her clothes.");
			writeText("Her mouth still open and her eyes still mid-blink, you push her down to the ground and push her legs against her shoulders.");
			writeText("It's strange seeing her muscles clench, but if they couldn't it'd be like trying to pose a statue. Really, the more interesting reflex is...");
			writeSpeech("player", "", "Holy shit! You're wet! It's like a faucet down here. Mr. bossL not satisfying you anymore?");
			writeSpeech("boss", "", "...");
			writeSpeech("player", "", "Poor bitch. Well, I do owe you for everything you've done for me!");
			writeBig("images/stopwatch/research2-2.gif");
			writeSpeech("player", "", "Fuck yeah! Take it! I should drag your ass down the office, leave you in the hallway with a cum-covered face and unfreeze time!");
			writeText("With your hate-powered boner you put her in here place. The only sound in the entire world right now is the sound of flesh on flesh.");
			writeBig("images/stopwatch/research2-3.gif");
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
			writeBig("images/stopwatch/research3-1.gif");
			writeSpeech("player", "", "Two hours into the test. She's still getting wet, and is showing no signs of dehydration or abrasion. She hasn't cum yet, it seems like orgasms all happen at once, and only when time resumes.");
			writeText("...");
			writeBig("images/stopwatch/research3-2.gif");
			writeSpeech("player", "", "Three... Ngh... Three hours into the test. Still no orgasm reaction, although I've already cum a few times with her ass. This is my fourteenth round, and I've started taking breaks and having snacks between them to avoid exhaustion.");
			writeText("...");
			writeBig("images/stopwatch/research3-3.gif");
			writeSpeech("player", "", "This makes hour number fifteen, I went to sleep earlier so the time might be off. I'm on the... Uh... Fifty second round of sex. I'm starting to wonder if she'll break after I resume. I figure if she can take fifty, fifty one should be fine too, right?");
			writeText("...");
			writeSpeech("player", "", "Happy birthday to you~ Happy birthday to you~ Happy birthday dear assistantF, happy birthday to you~.<br>I decided to give her a break for today. I think this is hour seventy-two? The clock only goes from one to twelve.");
			writeText("...");
			writeBig("images/stopwatch/research3-4.gif");
			writeSpeech("player", "", "Ghh... Ahh... Alright. That's an even three hundred. Got the restorer right here in case she actually breaks from this. Gotta get clothed... And...");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "-Thi-");
			writeText("Her word stops behind clenched teeth, you expected a scream. Instead she seizes up as her back arches, hundreds of orgasms firing through her body at once. Her cunt and womb clench around three hundred loads of your jizz that weren't there before.");
			writeSpeech("player", "", "Oh fuck! Fucking hell, no!");
			writeText("It turns out that the recorder didn't work in the stopped time.");
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
			writeBig("images/stopwatch/home1-1.gif");
			writeText("Once you're finishing groping her breasts, you slide her clothes back on, head back out to the hallway, and...");
			writeText("*CLICK*");
			writeSpeech("roommate", "", "-lookinggggh~");
			writeSpeech("Student", "none", "Professor? Are you alright? That's the third time now...");
			writeSpeech("roommate", "", "I... I'm fine. As-");
			writeText("*CLICK*");
			writeText("And you're right back at it. Slowly, you're pushing her closer and closer to the edge.");
			writeBig("images/stopwatch/home1-2.gif");
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
			writeBig("images/stopwatch/home1-3.gif");
			writeText("Everything is going according to plan, and hours of teasing are about to pay off. Someone begins knocking on her door as she rubs her cunt. If the door were to open, she'd totally exposed in the middle of the room.");
			writeText("She panics, and goes to put her clothes on, but another time stop and some teasing puts a stop to that.");
			writeText("The door opens as the person begins to worry about her stifled moans.");
			writeSpeech("Student", "none", "Excuse me, is ever-");
			writeSpeech("roommate", "", "C-cumming~!");
			writeBig("images/stopwatch/home1-4.gif");
			writeSpeech("roommate", "", "I'm sorry~!<br>I c-can't stop~!");
			writeText("Her pussy completely exposed, the student has just walked in on his professor openly pleasuring herself, naked, her cunt facing the door.");
			break;
		}
		case "stopwatchHome2": {
			writeSpeech("roommate", "", "Ethics isn't something you'll use in daily life, it's-");
			writeText("*CLICK*");
			writeText("You are genuinely impressed. She's already back to work, you didn't even need to erase any memories to avoid creating a scene after last time.");
			writeText("*RIIIIP*");
			writeText("But you aren't here to be impressed by roommateF's strength of character. You can handle any potential fallout, it's time to enjoy yourself.");
			writeText("It takes a bit of finagling, but you strip roommateF and get her into a half-decent position.");
			writeBig("images/stopwatch/home2-1.gif");
			writeText("The classroom is silent except for the sounds of you railing the teacher. Every student watches with blank expressions as their teacher is fucked mid-word.");
			writeText("But it isn't enough. You drag roommateF to an even more visible spot. You put her down onto a couch where you're surrounded by her frozen colleagues and students.");
			writeBig("images/stopwatch/home2-2.gif");
			writeText("You can live a live free of responsibility with the bracelet and the stopwatch together. The springs of the couch squeak as you slam into roommateF's cunt in a position called the 'Mating Press'.");
			writeBig("images/stopwatch/home2-3.gif");
			writeText("You can feel yourself cumming inside her, she'll feel all this stimulation all at once when you're finished.");
			writeText("But you aren't done yet. You have all the time in the world to enjoy yourself.");
			break;
		}
		case "stopwatchOutdoor1": {
			writeText("'Sharking' was a popular fetish for a while, it involved forcibly stripping people on the streets. With so much potential for being caught it's died down these days.");
			writeText("But with a time-stoping artifact you can do a lot better a lot more safely. Why stop with just pulling a dress down when you can lift up a woman's top, tear off her bra, and restart time with her tits hanging out?");
			writeBig("images/stopwatch/outdoor1-1.gif");
			writeSpeech("Woman", "none", "And I-Aaaah!");
			writeText("And you get a fantastic reaction every time. The panicky ones are the best. One moment someone's having a lovely conversation, then CLICK!");
			writeBig("images/stopwatch/outdoor1-2.gif");
			writeText("They're suddenly flashing their ass and pussy to a stranger on the street, desperately trying to pull down their dress and wondering where their underwear went.");
			writeText("There's a lot of fun to have here. Some women don't realize it at first, they're confused why everyone's staring at them. Some just notice a light breeze as they cross the street bottomless.");
			writeText("But the best reactions are after you put time and effort into posing them. Sure, a woman's clothes simply vanishing? That'd give them some credibility.");
			writeText("But when their hands are pulling apart their shirts, when they suddenly find themselves jutting out their chests to show their bare breasts to the world?");
			writeBig("images/stopwatch/outdoor1-3.gif");
			writeText("All they're seen as are perverts.");
			break;
		}
		case "stopwatchDream1": {
			writeText("As sleep takes you, you suddenly feel free of heavy shackles.");
			writeText("Freedom is in your hands after many long years of struggle. You have a chance for revenge, for justice, for a life where you can take as you please.");
			writeBig("images/stopwatch/dream1-1.gif");
			writeText("Some women are scared, but most revel as you appear and dissapear without warning from their lives.");
			writeText("No place is safe should you desire access. Any threat that comes your way is a matter of time to deal with. And you have all the time in the world.");
			writeBig("images/stopwatch/dream1-2.gif");
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
			writeSpeech("assistant", "", "First off, this is our thirty-second attempt into dimension exploration. There's no contamination risk, just be sure to keep your actions under wraps.<br>Second off, your bracelet won't work here. Our playerF confessed to stealing it, and we've neutralized its power in this dimension.");
			writeText("It's true. Her eyes follow your body even if you don't want to be seen.");
			writeSpeech("assistant", "", "Our playerF is getting briefed over there just like you are. You're authorized to explore at your leisure, just be sure to follow common standards and not reveal any Anomaly Vault secrets.");
			writeText("It seems like in this dimension assistantF is a lot more confident, and more than a little disrespectful. Without the bracelet you don't have a lot of control over the situation.");
			writeText("You spend the next few hours being briefed on this dimension's details.");
			writeSpeech("notes", "", "Findings:<br>In this dimension gender dynamics, as in the attitude that men and women have towards each other is reversed and heavily exaggerated. Women are considered the dominant gender, while men are viewed to be naturally more submissive. <br>Women are expected to be the breadwinners, to lose their virginity to be considered an adult, and to be able to take charge of the situation.<br>Men are to stay home and to be accepting of sexual harassment.<br>Most notably, the scales are tipped further in a woman's favor than even your world's 1920s. Rape isn't even considered an offense so long as no other crime, like violent assault or pedophilia, are committed.");
			writeText("Without the bracelet in this dimension, you could be in trouble here. You'll be pulled out whenever the playerF of this world touches the mirror though, so you'll never be trapped.");
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
			writeText("The woman who held the door for you takes a seat next to you. It's girlfriendF! You must have been in a rush and didn't recognize her at first.");
			writeText("But it seems like she doesn't recognize you in this dimension, so it's best to play dumb.");
			writeSpeech("player", "", "Yeah. She was follo-.");
			writeSpeech("girlfriend", "", "Shhh. I help you, you give me something in return that's fun for both of us.");
			writeText("Your confused for a second until she puts her hand on your crotch, then you're just conflicted.");
			writeSpeech("player", "", "<i>Well, she is hot... And I don't need to worry about any danger since I'll be pulled out eventually... What the hell.</i>");
			writeText("You decide to put up a little fake resistance as your crotch is unzipped. A 'nooo~...' here, a 'but we're in public...' there.");
			writeText("But as time passes, it's clear to her that you're enjoying yourself.");
			writeText("With everyone else riding public transit, you almost feel like you're being watched by everyone around you. But you relax into the stimulation, and soon enough...");
			writeBig("images/mirror/research1-2-1.gif");
			writeText("You're cumming onto her hand, she's taking a great deal of satisfaction wringing everything she can out of you.");
			writeSpeech("girlfriend", "", "It was nice meeting you. This is my stop.");
			writeText("She hangs around long enough to give you a chance to hide your dick before she leaves. Inside your pocket you find a small piece of paper with her number on it.");
			writeText("But before your eyes reality begins to shimmer, you're being sent back to your reality.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch1-3": {
			writeText("You opted to go see a movie. Luckily a big-named superhero movie is still showing. It's a bit of a ripoff, there really wasn't infinite war, just like three hours of it.");
			writeText("Most people liked it, a lot of the conversation is dominated by groups of women, or women trying to explain seventeen movies worth of backstory to their boyfriends.");
			writeText("Some people were a little angry, saying things like 'how come the only male avenger dies'? Or 'Did you hear they're making Sif a man? Just make new male characters instead of genderswapping women!'");
			writeText("It's a bit overcast outside, but the walk back to the facility is still cool and pleasant. You're taken out of your train of thought when you notice that a woman wearing a hoodie has been following you for a few minutes now.");
			writeText("Another woman in a hoodie steps out of an alleyway in front of you, leaving you surrounded.");
			writeSpeech("gym", "", "Hey mister, you wanna have some fun?");
			writeText("It's "+data.story[6].fName+", she works at a gym in your dimension. With the body you have in this dimension, there's no way you can take them.");
			writeSpeech("player", "", "... Fuck it, why not. I've got some time to kill.");
			writeText("She's happy to hear this, but you regret your choice when the woman behind you suddenly grabs your arms and "+data.story[6].fName+" pulls a cloth out of her pocket, alongside a bottle of fluid.");
			writeSpeech("player", "", "Okay, now hold on ju-Mmmph!");
			writeText("The cloth has a damp, slightly sweet smell to it.");
			writeText("...");
			writeSpeech("player", "", "Mmm...<br><i>Fuck, my head... How long was I out? Am I gagged?</i>");
			writeBig("images/mirror/research1-3-1.gif");
			writeSpeech("gym", "", "Remember girls, mouths only!");
			writeText("Several woman are crowded around your crotch, some of them pushing at each other to kiss and suck at your head. your arms and legs are bound down to a table.");
			writeSpeech("player", "", "Mmmph~<br><i>Is this some sort of sex dungeon? Do we have these in my dimension?<br>No, probably not. Thank god they didn't want to take my kidneys. Now, how do I get-ooou~</i>");
			writeBig("images/mirror/research1-3-2.gif");
			writeSpeech("gym", "", "The show is starting in a few minutes, get your fill before then but stop before he cums.");
			writeText("Your balls feel packed and sore, they must have been at this while you were out. But all too soon "+data.story[6].fName+" starts pulling them away, wearing some kind of domanatrix gear.");
			writeText("The woman who were sucking you off obediently back away, a hungry look in their eyes as "+data.story[6].fName+" picks up a fleshlight from a nearby table.");
			writeSpeech("gym", "", "Now, are you sluts ready for the show?");
			writeText("The crowd cheers and whoops as "+data.story[6].fName+" slowly slides the fleshlight down your cock.");
			writeSpeech("gym", "", "Look at him squirm... Men like to pretend they're above it all, but they get horny just like we do.");
			writeText("Despite being trapped, you'll have a way out once your double goes back through the mirror. You opt to just enjoy the treatment as "+data.story[6].fName+" picks up the pace.");
			writeBig("images/mirror/research1-3-3.gif");
			writeText("But then suddenly she stops and pulls the fleshlight off.");
			writeSpeech("gym", "", "Now, whenever a man cums, remember that his dick will shrink a little. Always ruin his orgasm if you want him to have a big dick forever.");
			writeSpeech("player", "", "MMmmph!<br><i>That's not fucking true! Let me cum you biii~</i>");
			writeBig("images/mirror/research1-3-4.gif");
			writeText(""+data.story[6].fName+" massages your balls in her hand. Even without touching your shaft, the hours of teasing while you were out and the feeling of being so close are enough to push you over the edge.");
			writeText("There are squeals from the crowd as your eyes roll back. You can hear "+data.story[6].fName+" say something and then you feel tongues running along your abdomen licking up the cum.");
			writeSpeech("gym", "", "And, while it's less satisfying to him, ruining an orgasm means that there's no cooldown period. He's ready to go again right away!");
			writeText("You feel drained, but she is right on that note. You still feel like you're ready to burst and the fleshlight show continues.");
			writeText("...");
			writeSpeech("gym", "", "Now, don't go anywhere okay little mister? I'll take good care of you so you can be our star again tomorrow.");
			writeText("Once the show is over "+data.story[6].fName+" leaves to go get cleaned up, and reality around you starts to blur. Your double is using the mirror, pulling you back into your dimension.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch1-4": {
			writeSpeech("player", "", "Scotch please. Make it a double.");
			writeSpeech("Bartender", "none", "You sure you can handle it, sir?");
			writeSpeech("player", "", "I think I know my limits, thanks.");
			writeText("...");
			writeText("You did not know your limits. Male bodies in this dimension must be much worse at handling liquor. You underestimated how trashed you'd get since the glasses were smaller than you're used to.");
			writeSpeech("player", "", "Ghhhg... Sorry about this...");
			writeSpeech("librarian", "", "No problem, don't worry about it. Do you live somewhere around here?");
			writeText("A nice lady opted to help you out, she looks kind of familiar.");
			writeText("But now you have a problem. You have no idea where you live in this dimension, and you can't exactly take a public taxi to Anomaly Vault. So, you think a little outside the box.");
			writeSpeech("player", "", "Hey, wanna fuck? We can go back to your place.");
			writeSpeech("librarian", "", "Hah! Hehe, uh...<br>Oh, uh... I think that's just the alchohol talking. Can I call you a taxi?");
			writeSpeech("player", "", "Nah, I've got nowhere to go. I think I saw a bench down the block, you can leave me there if you want.");
			writeSpeech("librarian", "", "Funny guy.<br>You really have nowhere to go? You can come back to my place if you need somewhere to stay for the night.");
			writeText("...");
			writeText("The next few moments are sort of a blur. You passed out on her floor, but wake up in a still-drunk groggy haze.");
			writeBig("images/mirror/research1-4-2.gif");
			writeSpeech("player", "", "Mmmgh... Ggh~");
			writeSpeech("librarian", "", "Mmm~! You're so big!<br>Walking around in clothes like that, getting drunk without anywhere to go. You really were asking for this, weren't you?");
			writeBig("images/mirror/research1-4-1.gif");
			writeSpeech("librarian", "", "Aaaah~!<br>Aah, I can't get enough of that-");
			writeText("Reality starts to get blurry. Well, more blurry than it was before. Your double must be using the mirror.");
			writeSpeech("librarian", "", "W-What's going on? I'm sorry!");
			writeText("As you phase out of reality, you can't help but think that this must be a really strange circumstance for her. Within seconds, you're gone without a trace and standing in front of the mirror in your own dimension again.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch1-5": {
			writeText("You decide to take a stroll around the red light district. It's a different atmosphere than you're used to, it almost feels like you could get attacked at any time. You wouldn't be able to fight someone off, so you're a little on edge.");
			writeText("Standing on the side of a street is a pretty twinky looking guy, leaning against a wall and taking a drag from a cigarette.");
			writeText("If you squint he could pass for 16, but upon closer inspection he's got thick bags under his eyes and his hands are shaking a little.");
			writeSpeech("Streetwalker", "none", "You need something?");
			writeText("You keep walking. Something about that guy just screams wrong.");
			writeText("You're ready to start headed home, this place wasn't built for people like you to have fun. Most of the shops are advertising fit trappish-looking men in briefs.");
			writeText("That is, until you see someone familiar.");
			writeSpeech("player", "", "Holy shit...");
			writeText("Standing in front of one of the seedier looking shops is roommateF! She might not know you in this dimension, so you'll need to keep it subtle.");
			writeSpeech("player", "", "Enjoying the view?");
			writeText("She jumps and turns around.");
			writeSpeech("roommate", "", "I-I was, uh<br>I was just-");
			writeSpeech("player", "", "Don't worry about it, I don't judge. Care for some company?");
			writeSpeech("roommate", "", "It's... I, uh...");
			writeText("...");
			writeText("The two of you spend some awkward moments trying to get a conversation started. Once she's done having a panic attack the two of you talk while walking down the street.");
			writeText("She doesn't recognize you, and it doesn't seem like she's a teacher in this dimension either. You spend a bit of time asking questions until she suddenly stops.");
			writeSpeech("roommate", "", "So-so, you're a uh... You're a... <span style='font-size: 30%'>prostitute?</span>");
			writeSpeech("player", "", "Uhh... Yeah sure, why not. You interested?");
			writeText("Her voice is a whisper now, and she looks around as if feeling judged.");
			writeSpeech("roommate", "", "It... It's my first time. I don't know how much-");
			writeSpeech("player", "", "Twenty bucks.");
			writeSpeech("roommate", "", "T-twenty!?");
			writeText("...");
			writeSpeech("roommate", "", "S-so we're really doing this? For as long as I want for just $20?");
			writeSpeech("player", "", "I mean, I could put my clothes back on.");
			writeSpeech("roommate", "", "No! No, I can do this.<br><i>Is this really happening? $20 is way too cheap, there must be something wrong, but...<br>God he's so hot. And he's taking his clothes off...</i>");
			writeText("She goes quiet once your pants are off.");
			writeBig("images/mirror/research1-5-1.gif");
			writeSpeech("roommate", "", "<i>Aahh~! This is it! This is what I needed...<br>It's so salty... This is what kept me distracted through school... I just want more of this...</i>");
			writeText("She does one long lick from balls to tip and lets out a shuddering breath.");
			writeSpeech("player", "", "You cum already?");
			writeSpeech("roommate", "", "Mmm...~<br>A-ah! Sorry! I can go... I can go again.");
			writeText("You lay back on the bed, giving her a chance to get ready while you relax.");
			writeSpeech("player", "", "Take as long as you need. I'm still hard, so-<br>Oh? Wow, you don't take very long to recuperate.");
			writeSpeech("roommate", "", "I've always... Had a really high drive-<br>Aaah~!");
			writeBig("images/mirror/research1-5-2.gif");
			writeSpeech("roommate", "", "It's here! This is it!");
			writeSpeech("player", "", "Y-Nnng, you're tight.<br>You're a woman now, huh?");
			writeSpeech("roommate", "", "N-not yet! We aren't-Nggh~");
			writeSpeech("player", "", "We almost are... I'm gonna cum soon.");
			writeSpeech("roommate", "", "Ah~! Do it inside!");
			writeBig("images/mirror/research1-5-3.gif");
			writeSpeech("roommate", "", "Cumming~!");
			writeText("And just like that the world begins to blur.");
			writeSpeech("player", "", "Ah, shit. Out of time.");
			writeSpeech("roommate", "", "W-wait, what? What's going on? Why do you look so-");
			writeSpeech("player", "", "Sorry, I gotta go now. Go get that teaching degree, alright?");
			writeText(" Within seconds, you're gone without a trace and standing in front of the mirror in your own dimension again. You've left her panicked look behind, hopefully she'll be alright.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-1": {
			writeText("As you're pulled through the mirror you suddenly feel very exposed. Looking down, you can see that your clothes have disappeared.");
			writeText("On instinct, you move to cover yourself and feel more than a little panicked. That fades once a familiar face comes up to you.");
			writeBig("images/mirror/research2-1-1.jpg");
			writeSpeech("assistant", "", "Hi! Welcome to our dimension, my name is assistantF.");
			writeSpeech("player", "", data.player.fName+". Um...");
			writeSpeech("assistant", "", "Ah, right, sorry. Here you go.");
			writeText("She tosses you a thin-looking bathrobe and you put it on just to have something to wear. It barely covers anything, the hem only going down your thigh. Not only that, but despite it being so thin it feels warm and stuffy.");
			writeText("Looking around you can see that a number of technicians, mostly those working with dangerous tools, are wearing labcoats. Everyone else is going stark naked if possible.");
			writeText("One of the technicians notices you looking, and pulls aside the flap of her coat to show you she's wearing nothing underneath before winking at you.");
			writeText("Everyone looks gorgeous, you recognize some familiar faces and some look vaguely like more attractive versions of people you know.");
			writeSpeech("assistant", "", "Sorry we only had the robe. You're only our second foray into dimension-hopping. Oh! bossF will want to see you, she should be here any minute now.");
			writeSpeech("boss", "", "I'm already here.");
			writeBig("images/mirror/research2-1-2.jpg");
			writeSpeech("boss", "", "You look surprised to see me. Fuck, wait, am I a bitch in your dimension too?");
			writeText("...");
			writeText("You spend the next few hours learning about this dimension. The robe is uncomfortable, but you haven't quite acclimated to total public nudity yet. You'll need to ditch the robe later though.");
			writeSpeech("notes", "", "Findings:<br>In this dimension public nudity and sexuality are considered completely normal, with prudishness being comparable to your dimension's deviancy. Going naked whenever possible is the default, and clothes are typically only worn for the sake of safety or for teasing. A very common fetish is flashing, since wearing clothes giving most people an exotic feeling that makes nudity even more exciting.<br>Public sex is also considered normal. Since women have a lower refractory period, most public sex involves a man using a woman's mouth, pussy, or ass to relieve himself. Society as a whole has been built around the idea of sex being as accessible as asking for directions.");
			break;
		}
		case "mirrorResearch2-2": {
			writeSpeech("player", "", "Alright, time to do some actual research. My bracelet still works here, so... Uh...");
			writeBig("images/mirror/research2-2-1.gif");
			writeText("A woman walks by completely topless. In the distance a man is 'airing out' his junk in public mid-conversation with some women. A man drives by with a fleshlight built into his car.");
			writeText("The world is... Bizzare. Even though you've been using the bracelet for awhile now, this just isn't the public you're used to.");
			writeText("Adult stores are everywhere. Sex shops which proudly display which celebrity their toys are modeled after, TV stores which are showing 4k resolution porn at a high volume.");
			writeText("There's the faint scent of sweat in the air, although it seems like hygene is pretty good overall. You pop into one of the stores for a quick moment.");
			writeBig("images/mirror/research2-2-2.gif");
			writeSpeech("Blonde Woman", "none", "Ah! C-careful! If you go any harder I'll squirt!");
			writeText("The place is really tidy, a couple of people are jerking or jilling off, but they're careful to finish into tissues.");
			writeText("You pop into the bathroom for a quick moment.");
			writeBig("images/mirror/research2-2-3.gif");
			writeText("But it seems like it's occupied. You almost walk back out on instinct, but this is a great chance for some research.");
			writeSpeech("player", "", "Excuse me, miss? Could you tell me how you're feeling right now?");
			writeText("Without missing a beat she sizes you up.");
			writeSpeech("Brunette", "none", "Mmm~ You one of those perverts who likes to watch? You've got a lot of clothes on...<br>How does it look like I'm feeling? I'm getting helped out by a clerk's fat dick~!");
			writeSpeech("player", "", "I see, thank you.");
			writeText("You use the restroom and head out. It doesn't seem like she even knew who she was fucking.");
			writeBig("images/mirror/research2-2-4.gif");
			writeText("There's a sunbathing woman getting fingered by another woman across the way. Does that even count as progressive? Is there any distinction between same-sex relationships if everyone is okay with sex all the time?");
			writeText("Before you have a chance to learn more reality around you begins to shimmer and blur. It seems your double is using the mirror. They probably got cold feet from wearing multiple layers of clothes for once.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-3": {
			writeText("The locals are interesting, but it might be worth it to get a good idea of what society is like here. You take some time to look into what the public utilities are, hoping that your double doesn't get cold feet and pull you back too quickly.");
			writeText("...");
			writeSpeech("player", "", "<i>What the fuck is a 'free use office'? Is it like some kind of restroom?</i>");
			writeBig("images/mirror/research2-3-2.gif");
			writeText("Nope. It's a bunch of naked men and women stuck in restraint.");
			writeText("Even though public use is common here, it seems like they still have dedicated locations where you can relief yourself sexually. Or maybe this is for the more introverted people of society, who'd rather they didn't need to make face-to-face contact with the people they're fucking.");
			writeBig("images/mirror/research2-3-1.gif");
			writeText("You decide to have some fun yourself. Although it goes by too quickly, and too soon reality is blurring around you.");
			writeText("These visits don't last long enough for your taste. You'll probably bring up to assistantF that she should distract your double next time.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-4": {
			writeText("The public transit in this dimension is pretty nice. There are dedicated school buses for university students in addition to a pretty comprehensive transit system overall.");
			writeText("It makes sense. You'd need to keep alert while driving. But on a bus...");
			writeBig("images/mirror/research2-4-1.gif");
			writeSpeech("Blonde Schoolgirl", "none", "Geez Louise, you're pretty excited this morning.");
			writeSpeech("Louise", "none", "Nah, my pussy just needs some rubbing in the morning. I like how new silk feels, got to break it in.");
			writeText("It's pretty strange to see university students so optimistic in the morning.");
			writeText("...");
			writeText("After the bus ride the students are filed off to basement rooms one group at a time.");
			writeBig("images/mirror/research2-4-2.gif");
			writeSpeech("roommate", "", "C-cumming~! No more, I can't keep going~!");
			writeText("Students and teachers need to be able to focus during class, so in the morning they're 'broken'. They're made to cum so many times past their normal limits that they can enter a dazed state perfect for an almost hypnotic lecturing style.");
			writeBig("images/mirror/research2-4-3.gif");
			writeSpeech("roommate", "", "NNNNgh~!!!!");
			writeText("Students are cycled through this room to be tired out once or twice per day depending on their needs, but some teachers need to spend almost half their shift here.");
			writeText("As roommateF is broken down with repeated orgasms, you opt to wander more around the school.");
			writeText("Most classrooms seem pretty normal, with the students having been drained it's not like there are orgies in every room.");
			writeText("A female student drags an instructor into a nearby locker room for some relief.");
			writeBig("images/mirror/research2-4-4.gif");
			writeText("Sometimes needs pop up and its best to resolve these in a way that isn't distracting for other students.");
			writeText("The world around you is shimmering, soon enough you're back home.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-5": {
			writeText("The gym has a very casual and open environment.");
			writeBig("images/mirror/research2-5-1.gif");
			writeText("One of the most commonly used devices is some kind of dildo-bike, it seems to be this dimension's replacement for the treadmill.");
			writeBig("images/mirror/research2-5-2.gif");
			writeText("Some of the fancier looking ones are vibrating based on the speed of the pedaling. Others have built in fleshlights, but it seems like male patrons more commonly use the women instead.");
			writeBig("images/mirror/research2-5-3.gif");
			writeText("As you walk around further you can hear some grunting from one of the back rooms, so you go and investigate.");
			writeBig("images/mirror/research2-5-4.gif");
			writeText("The gym's owner is serving as some sort of group fuckdoll. It might be fun to join, but all too quickly the world around you begins to shimmer again and you're back home.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-6": {
			writeBig("images/mirror/research2-6-1.gif");
			writeText("With a name like that, it's not a surprise that, when you arrive, it's to the sight of a more than a dozen people in bondage gear, chained down, or locked into stocks. Nearly all of them are women, but there are a few guys being teased by some ladies.");
			writeText("There is a little sign-in station keeping track of who's being punished, what they did, and how rough you're supposed to be...");
			writeText("It seems to just be opt-in community service for small crimes, with shoplifting and 'excessive public decency' as the most common reasons for punishment.");
			writeText("From the looks of things, only certified Officers of Correctional Services are supposed to handle punishments, but with your bracelet, that's not really an issue.");
			writeText("And it looks like they're bringing someone new in now...");
			writeText("...");
			writeBig("images/mirror/research2-6-2.gif");
			writeText("The wet, sloppy sounds of your hips bucking into hers ring out as you use her pigtails as fuck-handles.");
			writeSpeech("player","","<i>Damn, she's tight...</i>");
			writeText("She got caught trying to take someone's wallet, and she decided that being a cumdump for a few days was better than paying the fine.");
			writeText("As you bottom-out inside her again and again, you're definitely enjoying the results of that choice.");
			writeText("...");
			writeBig("images/mirror/research2-6-3.gif");
			writeText("According to her entry, this girl is a <b>special</b> case compared to the rest. Apparently, she came in and bound herself in one of the pillories to be punished... which counts as misuse of government property and, apparently, a punishable offense.");
			writeText("If she wanted to get fucked, she'd just need to bend over outside, so if she's here...");
			writeText("Pulling sharply on her hair, you feel her clamp down on your cock as she moans throatily.");
			writeSpeech("Painslut","none","Oh <i>fuck yes...!</i> Hurt me <i><b>more~!</b></i>");
			writeText("It's probably not the most effective system, but at least it's fun to participate in.");
			writeText("...");
			writeText("You end up having a fair bit of fun with the locked-up girls and, having done your civic duty, you feel pretty satisfied by the time the world starts to blur around you.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "coinResearch1": {
			writeBig("scripts/gamefiles/items/coin.jpg");
			writeSpeech("player", "", "Now beginning test Md-01.");
			writeSpeech("assistant", "", "Right, so artifacts like this usually activate when held. Do you feel any different?");
			writeSpeech("player", "", "Nope. I mean, it is the 'Midas Coin', so maybe...");
			writeText("You start touching things around you, but nothing happens.");
			writeSpeech("player", "", "Nothing. I thought maybe it'd turn stuff to gold. And it doesn't turn humans either, or else this thing would be kept in the dark vault.<br>Maybe it's a dud? A lot of resources go into obtaining artifacts, it'd be a shame if we wasted them on this.");
			writeSpeech("assistant", "", "I don't know, it is still a historical relic. Probably worth at least three assfucks.");
			writeSpeech("player", "", "... What?");
			writeText("...");
			writeSpeech("player", "", "And this soda?");
			writeSpeech("assistant", "", "Probably worth like, a handjob or something?");
			writeText("You place the coin down onto the desk, then start shaking the can at assistantF.");
			writeSpeech("player", "", "How much, again?");
			writeSpeech("assistant", "", "It's a two dollar soda, have you figured out what the artifact does, or are you messing with me?");
			writeSpeech("notes", "", "Findings:<br>When held, the Midas Coin causes sexual activities performed by the holder to be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value.");
			break;
		}
		case "coinResearch2": {
			writeSpeech("player", "", "Hey, you gonna drink that?");
			writeSpeech("assistant", "", "Huh? Oh the soda. Yeah, and it's the last from the machine too, sorry.");
			writeSpeech("player", "", "Oh well. Hey, how about I buy it from you?");
			writeText("...");
			writeBig("images/coin/research2-1.gif");
			writeSpeech("assistant", "", "Glllch<br>Fuck, he's huge!");
			writeText("You grab assistantF by the hair and force her down farther. A shiver of pleasure travels up your back as you hear her let out a giggle while deepthroating you.");
			writeSpeech("player", "", "Fuck, how much are you enjoying this?");
			writeText("She doesn't answer with words, not that she can with her face skewered on your dick. Instead she just focuses on rubbing her pussy while trying to pleasure your dick as much as her mouth can.");
			writeSpeech("player", "", "Fuck, cumming~!");
			writeBig("images/coin/research2-2.gif");
			writeText("The room is filled even further with the sounds of a gag-fueled mouthfuck. assistantF doesn't let up even as you start to cum, you actually need to grab her by the hair and pull her off of you to get her to stop sucking, and even then she tries her best to suck down every drop.");
			writeSpeech("assistant", "", "He-*AHEM*<br>Mhmm... Sucker... The soda was only like two bucks...");
			writeText("She rests against the side of her desk as you start drinking the soda you 'paid' for.");
			break;
		}
		case "coinHome1": {
			writeText("In hindsight, it might not have been the most tactful option to go outside and scream, <i>\"We live in a free market economy\"</i> while undoing your belt, but on the other hand...");
			writeBig("images/coin/publicCoin.gif");
			writeText("At this point, you're more worried about undervaluing your currency...");
			writeSpeech("Tongue-Piercing Girl","none","Come on big guy! Shoot that hot, <i>thick</i> capitalism all over our proletariat faces~!");
			writeText("Wait what?");
			writeSpeech("Girl on the Right","none","Ignore her, she's just thirsty for your means of reproduction.");
			writeSpeech("player","","...Okay, so using an artifact that rewrites localized cognition has some unexpected effects. Live and learn.");
			writeText("Could be worse, though. First time you've had four tongues dancing across your cock...");
			writeSpeech("Nose-Piercing Girl","none","Are you getting close? Warn us before the money shot, okay hun?");
			writeText("Maybe it's a side-effect of working at the Vault, but you could swear the puns only turn you on more...");
			writeText("...");
			writeText("As fun as it is to be able to pay for snacks by going down on the cute cashier (and as much as you've learned to appreciate actual money when the cashier isn't your type), coming up with an interesting way of using the coin is... kinda hard.");
			writeText("Well, without having to resort to the Bracelet to keep yourself from getting a life-long ban from the store, anyway.");
			writeText("Standing in front of the door to your place, you eat some more of your sexually-attained snacks and think.");
			writeSpeech("player","","Can't believe I'm saying this, but I think I need some spare work...");
			writeSpeech("girlfriend","","What a coincidence.");
			writeText("You flinch, but keep yourself from jumping.");
			writeSpeech("player","","Hey girlfriendF. Pretty sure roommateF is working.");
			writeSpeech("girlfriend","","I was counting on it - I would like to ask you for a favor.");
			writeText("You slowly slide a chip into your maw.");
			writeSpeech("player","","Go on.");
			writeSpeech("girlfriend","","roommateF is... observant. Particularly when it comes to me, and <i>especially</i> regarding gifts.");
			writeSpeech("player","","Ah. Yeah, I think I see where this is going. You want my help picking something out?");
			writeSpeech("girlfriend","","Yes. I'd rather like my surprise to <i>surprise</i> her for once.");
			writeSpeech("player","","Not too hard. You know her favorite movies?");
			writeSpeech("girlfriend","","Casablanca?");
			writeSpeech("player","","Hah. I'm guessing she told you that on the first date? Her favorites are a little bit different...");
			writeText("...");
			writeText("With a pair Lord of the Rings bookends in tow, the two of you walk quietly to girlfriendF's place. When you get to the door...");
			writeSpeech("girlfriend","","I could've paid for that digitally, you know.");
			writeSpeech("player","","I figured, but why complicate things? You seem like the type to pay a guy back.");
			writeText("She pauses, then smiles.");
			writeSpeech("girlfriend","","Actually, you know what?");
			writeText("Her finger loops around your belt, pulling you with her into her house.");
			writeSpeech("girlfriend","","I think I'll do that now.");
			writeText("The door shuts as she deftly un-does your pants, pulling them down just enough to have your cock flop against her hand.");
			writeSpeech("girlfriend","","My throat for those bookends?");
			writeSpeech("player","","Sounds fair. Do you want to get warmed up, or-");
			writeText("She drops down, her mouth immediately getting to work.");
			writeSpeech("player","","Or not...!");
			writeText("...");
			writeBig("images/coin/asaCoin.gif");
			writeSpeech("player","","Holy <i>crap,</i> your throat is tight...!");
			writeText("She bobs down to the base for a moment before popping back up, one hand jerking your slick shaft.");
			writeSpeech("girlfriend","","If it weren't, it would hardly be worth the gift.");
			writeSpeech("player","","Fair point. You'd better be ready though...!");
			writeText("She smirks, throwing herself back into the blowjob enthusiastically.");
			writeText("Pretty soon, you buck your hips forward <i>hard</i>, bottoming out as you pump your cum down her throat.");
			writeText("When you finish, she pulls away and wipes a bit of cum and spit from her chin, licking it up with a smile.");
			writeSpeech("girlfriend","","Now we're even. Thanks for the help with the gift - I'm sure roommateF will love it.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "coinOutdoor1": {
			writeText("You fiddle with the coin, approaching Karlee at the counter to discuss some membership fees.");
			writeSpeech("gym","","Oh, hey. It's playerF, right? I remember signing you up, but haven't seen you around.");
			writeSpeech("player","","That's me. I was actually planning on discussing those membership fees.");
			writeText("She gives a bit of a tired smile.");
			writeSpeech("gym","","Sorry, but company policy is that I can't give discounts after the fact, even if you haven't been around.");
			writeSpeech("player","","Actually, I'm here to pay them in advance, and maybe even upgrade?");
			writeText("She perks right up, smiling wide.");
			writeSpeech("gym","","In that case, we can talk in the back!");
			writeText("...");
			writeBig("images/coin/karleeCoin.gif");
			writeText("She tightens her ass every time you bottom out, trying not to moan.");
			writeSpeech("gym","","Y-You're not too bad! A l-little more, and you might pay for... for... F-Fuck...! <br> <i>C'mon Karlee, keep it together! You're a closer, not a quitter!</i>");
			writeSpeech("player","","For a personal trainer, aren't you a bit easily distracted?");
			writeSpeech("gym","","Not at all! I'm just... <i>very</i> focused on my client! <br> <i>Focus...! I'm so close to the sale I can practically feel it in my guts!</i>");
			writeText("You roll your hips while thrusting, feeling your head pressing into every fold.");
			writeSpeech("player","","Y'know, I'm just not sure if this is the right gym for me.");
			writeText("Panicking, she clamps down tight on your cock.");
			writeSpeech("gym","","I know this place'll be a <i>perfect fit</i> for you...!");
			writeText("You slap her ass harshly, Karlee moaning sharply as she keeps rythmically tensing up.");
			writeSpeech("gym","","W-We've got the best trainers around, and great equipment! No matter what kind of exercise you're looking for, you'll have people like me r-ready to c-<i>come</i> and help!");
			writeSpeech("player","","That's a pretty good offer, but... Don't you think you should give the price?");
			writeSpeech("gym","","Normally, it's another ten dollars a month, b-but I can make a one-time-deal! All of that, and all you've got to do is cum inside!");
			writeText("You can feel yourself approaching the edge, so might as well...");
			writeSpeech("player","","You've got a deal.");
			writeText("You ram your cock into her ass, the sound ringing out as she muffles a moan.");
			writeText("A few seconds later, you pour your load inside, a wave of relief going through her body.");
			writeBig("images/coin/karleeCoin2.gif");
			writeSpeech("gym","","T-Thank you for cumming...! You won't regret this...");
			writeSpeech("player","","I'm getting that feeling, yeah.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "coinDream1": {
			writeText("A cold wind blows over the land, and you take a powerful breath of the show before you.");
			writeBig("images/coin/dream1-1.gif");
			writeText("More, more! You cry out. For all that it matters, society is your plaything.");
			writeText("You lean back to enjoy the ride, but a single slip causes something precious to roll from your fingers.");
			writeText("The coin rolls along the ground, stopping only for a crow to snatch it.");
			writeText("Around you, confused exclamations are followed by terrified screams.");
			writeText("Your paradise is lost to the ages.");
			break;
		}
		case "coinEnding": {
			if (data.player.character == "red") {
				document.getElementById('playerImage').src = "scripts/gamefiles/profiles/coin.jpg";
				data.player.character = "coin";
			}
			writeText("The coin is in your hands, between your fingers. The soft sounds of the testing room almost sound like whispers, edging you on. As you apply the faintest bit of pressure those imagined whispers grow louder, the room almost filled with a delighted song in a language you can't understand.");
			writeText("You apply more pressure, the brittle old coin offers no resistance. Your hands have stopped shaking, you feel more powerful with every bit more strength you apply to the coin. Until finally...");
			writeText("<b>*SNAP*</b>");
			writeText("The coin is in two. The voices sigh in relief as if freed from a heavy burden, before they go silent. The broken coin in your hands is useless now, but it doesn't matter anymore. As you toss the pieces of the artifact aside, you admire yourself.");
			writeText("Your body looks the same at first glance, but has the faintest of a golden glow. The curse of an ancient being is within you now. Your mouth moves of your own accord.");
			writeSpeech("player", "", "Power is mine, freed from shackles...<br>Now, to find a station worthy of me.");
			writeText("...");
			writeSpeech("chair", "", "You're insane. You can't be serious...");
			writeText("The chairwoman's hands are shaking as you recline in your seat. It isn't quite a glorious throne, but it'll do for now.");
			writeText("Here eyes dart back and forth between you and your prize, the mystic rings on her hand. With a snap of her fingers she could rewrite reality, were she in a rational mindset right now.");
			writeSpeech("chair", "", "... Will you really give me <i>anything</i>? Anything I want from you?");
			writeText("A familiar greed is in her eyes as she gazes upon your body. A greed that overpowers logical thinking.");
			writeSpeech("player", "", "I will give you whatever you desire, for as long as you desire it.<br>And in exchange, you will give me <b>everything</b>.");
			writeText("Biting her lip and ignoring the screams of her common sense, she slowly slides the first ring off her finger.");
			writeText("...");
			writeBig("images/coin/coinEnding1.gif");
			writeSpeech("chair", "", "Yes~! Yes~!");
			writeText("The former chairwoman gleefully enjoys the pleasure she sold her life over, not regretting her decision one bit. You relax, eager to let her do the work for you while you enjoy the fruits of your bargain.");
			writeText("With a snap of your fingers the room's decor changes. A lush mansion lined with golden fixtures, and an actual proper view outside.");
			writeSpeech("player", "", "Glorious...");
			writeText("With another snap the whore beneath you is unrecognizable. Her name and body rewritten with reality.");
			writeBig("images/coin/coinEnding2.gif");
			writeSpeech("chair", "images/coin/coinEndingProf.jpg", "Cumming~!");
			writeText("Once she's fucked herself unconscious your debt to her will be paid. Perhaps your former assistant next? Or the woman who once thought herself above you? An exotic woman from the vault's myriad prison cells? The city is the oyster to your pearl now. Life itself is beneath your heel.");
			if (data.player.character == "coin") {
				data.player.character = "red";
			}
			break;
		}
		case "serumResearch1": {
			writeSpeech("player", "", "Now beginning test Ts-09. No time like the present!");
			writeText("You take a swig of the liquid, it's very minty. Nothing happens right away, but almost immediately... Nothing continues to happen.");
			writeSpeech("player", "", "<span style='color:green'>No effect</span>?");
			writeSpeech("assistant", "", "Alright, no effect then, a dud.");
			writeText("Without hesitation, assistantF begins logging down 'no effect' onto her clipboard.");
			writeSpeech("player", "", "Slow down, <span style='color:green'>it's too soon to make that kind of call</span>. And <span style='color:green'>Mrs. bossL will get on our case again if we make snap judgements in ink.</span>");
			writeSpeech("assistant", "", "Y-yeah, way too soon, sorry. And she's super anal about it.");
			writeText("assistantF looks a little dazed as she crosses out her notes.");
			writeSpeech("player", "", "... Actually <span style='color:green'>she's really chill about wasting office supplies.</span>");
			writeSpeech("assistant", "", "Right? We're pretty lucky this is the one thing she doesn't care about.");
			writeSpeech("player", "", "But <span style='color:green'>she's actually the nicest person you've ever met</span.");
			writeSpeech("assistant", "", "Yeah! I feel bad for... for-");
			writeText("assistantF looks wobbly before she almost collapses. You catch her and make sure she can get her footing.");
			writeSpeech("assistant", "", "Sorry. Sorry. It's weird, I just remembered a bunch of times Mrs. bossL was really nice to me, and I lost my balance for some reason.");
			writeText("...");
			writeSpeech("player", "", "So, could you recap all that?");
			writeSpeech("assistant", "", "Of course. Your name is Doctor Pepper, and you're from Alabama, which is in the United States of Russia. You were born without a face, and...<br>Is this really necessary? Does your life story have something to do with the artifact? And some of this stuff seems a little far-fetched, now that I think about it.");
			writeSpeech("notes", "", "Findings:<br><strike>No Effect</strike><br>When drunk, this minty fluid causes everything you say to be perceived as an absolute truth by anyone who can hear and understand you. The effects are temporary and targets develop a resistance over time, but until then the subject has absolute control over anyone in earshot. The effects are even capable of inducing physiological change, such as causing someone to become hungry despite having just eaten.");
			break;
		}
		case "serumResearch2": {
			writeBig("images/serum/research2-1.gif");
			writeSpeech("assistant", "", "N-nggh... What's... It feels like something is wrong...");
			writeSpeech("player", "", "What could be wrong? <span style='color:green'>This is pretty normal for us</span>.");
			writeSpeech("assistant", "", "It is...? I don't remember.<br><i>Something about this feels... Off...</i>");
			writeSpeech("player", "", "Are you not enjoying yourself?");
			writeBig("images/serum/research2-2.gif");
			writeSpeech("assistant", "", "Mmm, no! This is great, but it just feels like something isn't quite right.<br>Like, mmm... Like my brain is saying something is wrong, and right at the same time, you know?");
			writeSpeech("player", "", "Nngh, gonna come. Want me to pull out?");
			writeSpeech("assistant", "", "No, inside me! Please!");
			writeBig("images/serum/research2-3.gif");
			writeSpeech("assistant", "", "Ah~ Feels good~<br><i>Whatever it is, it's probably not important.</i><br>Can we go again soon?");
			break;
		}
		case "serumResearch3": {
			writeSpeech("boss", "", "So, what was so important you needed to interrupt me?");
			writeText("You take a deep breath to compose yourself. The minty aftertaste of the serum does help you feel a little more empowered under her glare.");
			writeSpeech("player", "", "I know your secret. <span style='color:green'>I know you're a complete buttslut who can't even make it through the day without fantasizing about my cock up your ass</span>.<br>I know <span style='color:green'>you can't hold back anymore</span>, that <span style='color:green'>you're at your breaking point</span>.");
			writeText("After a moment of silence, bossF stands up, walks over to the door, shuts, and locks it.");
			writeText("And then immediately pulls you out of your chair by the tie.");
			writeSpeech("boss", "", "How'd you find out!? Who the fuck told you!? Was it chairL!?");
			writeSpeech("player", "", "Uh, n-");
			writeSpeech("boss", "", "Shove it!");
			writeText("She pushes you back onto your chair and opens a drawer on her desk..");
			writeSpeech("boss", "", "Trying to make me look bad in front of management, huh? Right before inspection, I bet. But you're right, I can't hold back.");
			writeText("She pulls something that looks pretty close to a gun out of her desk drawer.");
			writeSpeech("boss", "", "I'll need to throw you in a ditch somewhere afterwards, can't have this getting back to bite my perfect ass. Any last words?");
			writeSpeech("player", "", "Uh, I have a few actually! First, <span style='color:green'>you aren't going to shoot</span>! Next...");
			writeText("...");
			writeBig("images/serum/research3-1.gif");
			writeSpeech("boss", "", "Ah~! Ah~! Harder! Ruin me!");
			writeSpeech("player", "", "You fucking <b>BITCH</b>! Were you seriously about to kill me to get your rocks off!");
			writeSpeech("boss", "", "I'm sorry master~! I don't know what came over me, I just needed to be fucked so bad~! Punish me, please!");
			writeBig("images/serum/research3-2.gif");
			writeSpeech("boss", "", "Ah, yes~! More~!");
			writeSpeech("player", "", "Oh, <span style='color:green'>you'll get more</span>, slut.");
			break;
		}
		case "serumDream1": {
			writeText("You're somewhere else, somehow you can tell you're watching something from not too long ago.");
			writeText("Mrs. chairL pushes you down to the ground. There's a hunger in her eyes.");
			writeBig("images/serum/dream1-1.gif");
			writeText("The dream passes all to quickly, everything goes dark. ");
			writeSpeech("chair", "", "I'm sorry, Martin. But I can't leave any loose ends. You were a lovely toy, but I'm done playing with you now.");
			writeText("You hear a snap, and you don't feel human anymore. ");
			break;
		}
		case "serumHome1": {
			writeText("You take a seat on the couch lazily inspecting the vial of 'truth serum' you brought home.");
			writeSpeech("player", "", "<i>Temporary, one-time, huh. I've got one shot to have fun with this with roommateF. I gotta make it good.</i><br>... Man, this is too much thinking. I just need to go with the flow. I wonder if I could use it on myself. 'I'm a genius and will come up with a brilliant idea right away!'");
			writeSpeech("roommate", "", "You say something?");
			writeText("roommateF pokes her head into the living room.");
			writeSpeech("player", "", "Nah just thinking out loud. Hey, girlfriendF coming over today?");
			writeSpeech("roommate", "", "Yep! I promised to take her out on a date this time. We're headed to watch whatever's showing in the theater today.");
			writeSpeech("player", "", "Huh. I dunno if watching a random movie will be all that great of a time. <br>Hey, I got an idea! Listen, let's wait for girlfriendF to arrive. I read about this cool new trend in the dating world and you both should hear it.");
			writeSpeech("roommate", "", "You've got dating advice? I dunno...");
			writeSpeech("player", "", "Listen, I swear it'll be awesome. I'm telling the truth!");
			writeText("...");
			writeSpeech("girlfriend", "", "So, like this?");
			writeBig("images/serum/serumHome1-1.gif");
			writeSpeech("player", "", "Y-yeah, just like... Like that...");
			writeSpeech("girlfriend", "", "Mmm, I gotta say this is really great! Sorry for not believing you at the start...");
			writeBig("images/serum/serumHome1-2.gif");
			writeSpeech("roommate", "", "Mmph... *mwah*!");
			writeSpeech("girlfriend", "", "But putting on a strip show while my girlfriend sucks you off was exactly what I needed!");
			writeSpeech("player", "", "Uhuh... Nnn... Another thing is that if you, fuck... If you're naked, you'll cum totally hands free at the same time as me...");
			writeSpeech("girlfriend", "", "Whoa, that sounds awesome! Here...");
			writeBig("images/serum/serumHome1-3.gif");
			writeSpeech("girlfriend", "", "I came this morning, but I'm already super horny again somehow! C'mon, will my pussy be enough to make you cum while my girlfriend sucks you off? Please?");
			writeSpeech("player", "", "Ggh... <span style='color:green'>Cumming! </span>");
			writeText("The moment the word is out of your mouth girlfriendF shivers with delight, the serum's effect is enough to immediately trigger a hands-free orgasm.");
			writeSpeech("girlfriend", "", "Cumming!");
			writeText("Meanwhile roommateF, eager for your attention, takes your shaft balls deep as you cum down her throat.");
			writeBig("images/serum/serumHome1-4.gif");
			writeSpeech("roommate", "", "Mmm... Ah. So, what's next? What's next? Can I twerk while girlfriendF sucks you off? I wanna cum like that too!");
			writeText("Despite having just cum, you can't possibly say no to that face. The three of you have a lot of fun with your 'date' idea until the serum begins to wear off.");
			break;
		}
		case "serumHome2": {
			writeText("sisterF hasn't been too much of a pain lately, if it weren't for her condescending attitude she's be a pretty fine roommate. Still, you aren't keeping her around for her houseguest etiquette.");
			writeText("You down some of the truth serum, very minty, and open the door to her room.");
			writeSpeech("sister", "", "What the fuck? Get out of my room, asshole!");
			writeSpeech("player", "", "It's completely fine, <span style='color:green'>you gave me permission to be in here, remember? </span>");
			writeSpeech("sister", "", "Oh, I did? Huh... <br>Well, you should've knocked first! Geez, no respect for privacy.");
			writeSpeech("player", "", "Sorry, what were you doing?");
			writeSpeech("sister", "", "I was putting up some pics, not that it's any of your business.");
			writeSpeech("player", "", "Oh, selfies?");
			writeSpeech("sister", "", "Dude, get out of here with your old geezer brain. There's more to posting on snap than selfies. I'm not some-");
			writeSpeech("player", "", "Because I heard <span style='color:green'>selfies are all the rage these days.</span>");
			writeSpeech("sister", "", "I... Yeah, I knew that, idiot! I was gonna say that, obviously.");
			writeSpeech("player", "", "So then you know about the latest trend? The one <span style='color:green'>super popular among people gathering followers</span>.");
			writeSpeech("sister", "", "... Food pics?");
			writeSpeech("player", "", "Close, but not quite. It's fine though, you asked me in to help you help you out with them, you do need a man for this trend after all.");
			writeText("...");
			writeBig("images/serum/serumHome2-1.gif");
			writeSpeech("sister", "", "Mmm~! Mmm~!");
			writeSpeech("player", "", "Damn, you're pretty wet. Well, <span style='color:green'>it is normal to get off on getting your throat fucked by my cock.</span>");
			writeSpeech("sister", "", "MMM~!");
			writeText("She cums on the spot, your words rewriting reality. It doesn't take too long before you cum yourself. Now it's time for the real fun part of your plan.");
			writeText("You get dressed and leave, making sure to check up on her social media posts to enjoy the results.");
			writeText("Soon enough, she's made some posts of your fun together.");
			writeBig("images/serum/serumHome2-2.jpg");
			writeSpeech("sister", "", "Hopping in on the bandwagon, hope I'm not too late!<br>#bratsgetfacefucked");
			writeBig("images/serum/serumHome2-3.jpg");
			writeSpeech("sister", "", "Came 3 times on his cock, squirted so hard!<br>#bratsgetfacefucked, #hemakesmesquirt");
			writeBig("images/serum/serumHome2-4.jpg");
			writeSpeech("sister", "", "Follow me for more! Maybe I'll show off my slutty cunt next too!<br>#bratsgetfacefucked, #slapaslutday");
			writeSpeech("assistant", "", "sisterF, what the fuck?! Delete these immediately!");
			writeText("You laugh all the way to your room as dozens, then hundreds of comments flood in.");
			break;
		}
		case "serumEnding": {
			writeText("You place the empty bottle onto the table like a shot glass. The world, or at least your vision, is completely covered in green tint.");
			writeText("The taste overpowers your senses, and everything else. There was no real way to prepare yourself for this. You feel yourself starting to lose consciousness.");
			writeSpeech("player", "", "<span style='green'>Everything I say, taken as an absolute truth. I could be... Worshiped as a god among men... Fuck...</span>");
			writeText("The effects are proving to be too much for you. Nausea and dizziness assault your senses.");
			writeSpeech("player", "", "<span style='green'>No... Can't waste it... The world is in my palms...</span>");
			writeText("But your strength fails you, and you pass out in a mint-smelling heap on the floor.");
			writeText("...");
			if (data.player.character == "red") {
				document.getElementById('playerImage').src = "scripts/gamefiles/profiles/serum.jpg";
				data.player.character = "serum";
			}
			writeText("You awaken slowly, enjoying a pleasant warmth coming from your lower body.");
			writeBig("images/serum/serumEnding1.gif");
			writeSpeech("player", "", "What... What time is it?");
			writeSpeech("assistant", "", "Mmmph~! It's... Mwah~! <br>Good morning! I'm sorry for pleasing you without permission, I couldn't help myself...<br>It's a little after midnight, of course.");
			writeSpeech("player", "", "What? There's no way it's that late.");
			writeText("The familiar scent of mint fills the air and reality seems to stutter for a moment. Space and time experiencing a sudden hiccup.");
			writeSpeech("assistant", "", "-a little after four in the afternoon, of course.");
			writeSpeech("player", "", "That sounds about right. Where are my worshipers? They should be here, and you should be doing your job as my assistant.");
			writeText("Mint again, the fabric of reality is pulled taut");
			writeBig("images/serum/serumEnding2.gif");
			writeSpeech("assistant", "", "And so we've started work on your first church somewhere down on 3rd street...<br>Are you alright, my grace?");
			writeSpeech("player", "", "Yes, I'm fine.");
			writeText("As the group of women beneath you work tirelessly to please you, you realize a voice in the back of your head has been reacting with confusion and shock to the situation. Suddenly it goes silent, squashed beneath some unknown force."); 
			writeSpeech("player", "", "Why am I so tired? As a god, my body should be able to handle more than this.");
			writeText("Suddenly everything is normal. You stand up from the couch, towering over the woman beneath you at your usual eight feet of height.");
			writeText("Your harem grow excited, fighting in an attempt to lick as much of your divine flesh as they can.");
			writeText("Their squabbling bores you, why can't they get along? Why haven't you made them get along yet? Your word is divine law, after all.");
			writeSpeech("player", "", "assistantF.");
			writeSpeech("assistant", "", "Y-yes~!");
			writeText("She reacts with enthusiasm and barely-masked pleasure as she hears you speak her name.");
			writeSpeech("player", "", "I intend to make changes from here on. Apparently I've been a lazy god up to now, I'm not sure why.<br>Take note of my commandments to help me keep track of everything, okay?");
			writeText("...");
			writeText("The sun sets once again over a grateful world. Humanity has leaped forwards under your reign, no human king could content with your might or vigor.");
			writeText("Crime is now a thing of the past since you've banned it. It's physically impossible to even be a dick to somebody on the bus anymore. Physical ugliness, illiteracy, even world hunger are no longer issues since you said so. The world is not your oyster, you've cracked it open, smashed the pearl, and snorted it like cocaine. The world is your playground now.");
			writeText("Yet still resistance lives on, someone. Objects immune to your divine command, the vault has been retooled to the extermination of these heretical artifacts. One such disgusting reminder of their resistance is the bracelet that mars your otherwise perfect form. Once the world is rid of their filth, your gaze, and humanity's, shall turn towards the stars. The scientists regularly come to you with pressing issues of the scope of space, merely decreeing the laws of physics to bend to your will could have disastrous consequences. But you have a plan for that, of course.");
			writeBig("images/serum/serumEnding3.jpg");
			writeText("Your assistant loyally does her best to keep up with you, you've implanted in her your seed. Though she does not show it yet, she and many others will bear your children, many speak in whispers of the powers they will have.");
			if (data.player.character == "serum") {
				data.player.character = "red";
			}
			break;
		}
		case "shadesResearch1": {
			writeSpeech("player", "", "This is experiment log CS-01, now commencing. ");
			writeSpeech("assistant", "", "Can I just say for the record I don't like these things? ");
			writeSpeech("player", "", "Noted, and ignored. Are you wearing them, or am I? ");
			writeText("assistantF reaches out for the glasses, only to stop and pull her hand back with a look of disgust on her face. ");
			writeSpeech("assistant", "", "They're awful... They'd look really bad on me. I wouldn't wear those things if Mrs. bossL ordered me. ");
			writeSpeech("player", "", "Interesting. ");
			writeText("You take the shades. Holding them in your hands they feel... Heavy. In a metaphorical sense. You put then on. ");
			writeSpeech("player", "", "I don't feel too dif... Whoa. <br> I feel... Powerful. Strong. ");
			writeSpeech("assistant", "", "Hey stop fucking around. There's no effect right? Take them off. ");
			writeSpeech("player", "", "Why should I? They look go-<br>Shit! ");
			writeText("You yank off the glasses and toss them away. They bounce off the hard floor but are completely undamaged. ");
			writeSpeech("player", "", "They've got a memetic quality. They make you want to keep wearing them. They're pretty mild, naybe rank C, but we should still put them in the Dark Vault once research is complete. ");
			writeSpeech("assistant", "", "Which is now, right? Lock 'em in a box and throw away the key? ");
			writeSpeech("player", "", "Don't get so ahead of yourself. There's plenty we have to learn from these. ");
			writeSpeech("assistant", "", "Fine... ");
			writeText("...");
			writeSpeech("notes", "", "Findings:<br>The shades grant an incredible confidence boost to whoever wears them, and have a low-level hypnotic / addictive effect on the wearer to make them less likely to be removed. <br>Women refuse to wear them, and regard the glasses with disdain and hostility. This effect carries over to the wearer, causing women to experience a bizarre state of irritability. <br>Recovery documents show the shades have an additional effect dubbed by the agents as 'instant loss', where the wearer and whoever they're arguing with will black out and regain consciousness mid-fuck. Further research will be conducted on this phenomenon.");
			break;
		}
		case "shadesResearch2": {
			writeSpeech("assistant", "", "Are you serious? You're researching those things again after what you said last time?");
			writeText("You put on the pair of sunglasses, feeling a familiar rush flow through you.");
			writeSpeech("player", "", "I decide what we study, not you.");
			writeSpeech("assistant", "", "Alright, I get it, I'm not the most 'top brass' of people, I'm basically your secretary. But just this once I'm putting my foot down, okay? Take. Off. The. Shades.");
			writeText("...");
			writeBig("images/shades/shadesResearch2-1.gif");
			writeSpeech("assistant", "", "Nnngh~! You're tearing me in half, fuck! I'm sorry, I'll never talk back to you again! Please!");
			writeSpeech("player", "", "Oh, you want me to ease up? The little bitch who put her foot down wants me to be gentle?");
			writeSpeech("assistant", "", "No! HARDER~!!!");
			writeText("You give her a hard slap on the ass and throw her aside before laying on the couch.");
			writeSpeech("player", "", "Earn it.");
			writeSpeech("assistant", "", "Nngh, yes~! I love it when you treat me like trash!");
			writeBig("images/shades/shadesResearch2-2.gif");
			writeSpeech("assistant", "", "Cumming again~! I can't stop~!");
			writeSpeech("player", "", "Keep working bitch, I'm not satisfied.");
			writeText("...");
			writeBig("images/shades/shadesResearch2-3.gif");
			writeSpeech("player", "", "So, have you learned your lesson?");
			writeSpeech("assistant", "", "Mmm... Yes master... But if I misbehave, will you punish me again?");
			writeSpeech("player", "", "Maybe I... I...");
			writeText("You push her away. She whines, but obeys. With some amount of mental effort you take off the sunglasses, finally feeling like yourself again.");
			writeSpeech("player", "", "Fuck... What happened?");
			writeSpeech("assistant", "", "Is something wrong?");
			writeText("It takes more than a little while to clean up the mess you made of assistantF's mind with the bracelet.");
			writeText("The glasses feel addictive, powerful. Still, if you can stay on top of things, they should be fine to keep using.");
			break;
		}
		case "shadesResearch3": {
			writeText("You slide on the sunglasses again. assistantF shivers, but doesn't object. It seems like her body still remembers what happened last time, even if the bracelet removed her memory of it.");
			writeText("But you have a different target in mind this time. You walk out of your office, assistantF not to subtly starting to rub her cunt through her panties as you walk past.");
			writeText("You push open the door to bossL's office and take a seat. She's in a call, but you hit a button on the receiver to end it.");
			writeSpeech("boss", "", "... Those glasses had better be controlling your mind, or you're a dead man. <br>No, actually, if you're stupid enough to get mindfucked by another god damn memetic control artifact, you're getting thrown in the prison department anyway for reckless endangerment.");
			writeSpeech("player", "", "Not likely. I think you're a lot more likely to bend over for me. Maybe you'll make some actual friends if I fuck the bitchiness out of you.");
			writeSpeech("boss", "", "Now you listen to me, shit-for-brains. I've had enough of you, your attitude, and those dogshit fucking glasses! Sit down and shut up, and I'll tell you exactly what sort of future you have with this company.");
			writeText("...");
			writeBig("images/shades/shadesResearch3-2.gif");
			writeSpeech("boss", "", "My ass~! Fuck, your huge cock is destroying my ass~!");
			writeSpeech("player", "", "This is all you are. You're a jizz rag only fit to have your ass ruined by my dick. Get that hand off your twat and gimme an orgasm to say goodbye to cumming like a normal woman.");
			writeSpeech("boss", "", "Yes~! Fuck, hurt me~! I wanna be reminded of my place whenever I sit down~!");
			writeBig("images/shades/shadesResearch3-1.gif");
			writeSpeech("boss", "", "CUMMING~!");
			writeSpeech("player", "", "I'm getting close too, trash.");
			writeSpeech("boss", "", "Yes~! Please, fill my asshole with your cum~!");
			writeSpeech("player", "", "Bitch, you're done telling me what to do!");
			writeText("You slap her across the face, causing her pussy to squirt as her ass is railed. Then, you pull out and aim your cock.");
			writeBig("images/shades/shadesResearch3-3.gif");
			writeSpeech("player", "", "There. Rub my cum into where I slapped you. That's what you get for disrespecting me.");
			writeSpeech("boss", "", "Nngh... Yes master~!");
			writeText("You leave her to decorate herself with her new makeup before you stumble and pull the shades off.");
			writeSpeech("player", "", "God damn... I'm like a different person with these things on...");
			writeText("You use the bracelet to make sure nothing you did will come back to bite you. You've needed to rely on it a lot lately.");
			break;
		}
		case "shadesHome1": {
			writeSpeech("roommate", "", "Hey, girlfriendF's going to be here in a bit. Could you-<br>Where'd you get those? And why are you wearing them inside?");
			writeSpeech("player", "", "What, you don't like them? I think they make me look cool.");
			writeSpeech("roommate", "", "Then you need to look in a mirror, they make you look like a douchebag. Listen, could you just clean up a bit? I don't want girlfriendF thinking-");
			writeText("She goes quiet as you walk up to her, pinning her against the wall with your body.");
			writeSpeech("roommate", "", "Back off. What the fuck do you think you're doing?");
			writeSpeech("player", "", "Whatever I want.");
			writeSpeech("roommate", "", "I'm in a relationship. I'm a lesbian.");
			writeSpeech("player", "", "Yep. You've said so.");
			writeSpeech("roommate", "", "Listen to me. I'm giving you this one last chance. You're sick in the head or something, walk away and we can forget this ever happened. You don't, and you'll regret this day for the rest of your life.");
			writeText("...");
			writeBig("images/shades/shadesHome1-1.gif");
			writeSpeech("roommate", "", "Mmmph... Mmmph...");
			writeSpeech("player", "", "You dumb bitch. You really thought you could resist being a slut for dicks? You thought that Asian whore could satisfy you?");
			writeText("There's a pang of guilt that echoes through your mind for a moment. You've never been this cruel before. But just as soon as it arrived it's gone.");
			writeSpeech("player", "", "Well? You gonna nurse on it all day?");
			writeText("There's a moment of hesitation, there's still some trace of resistance left, but the moment roommateF thinks about what this cock would do to her twat, she's climbing up onto the couch.");
			writeSpeech("player", "", "Greedy bitch. What would girlfriendF say?");
			writeSpeech("roommate", "", "I don't care.");
			writeBig("images/shades/shadesHome1-2.gif");
			writeSpeech("roommate", "", "Fuuuuck, yes~! God, I wish you'd taken me sooner~!");
			writeSpeech("player", "", "Faster, whore!");
			writeSpeech("roommate", "", "Guuh, I'm cumming already-Aaah~!");
			writeText("You push her down to take the pace of the fuck into your own hands.");
			writeBig("images/shades/shadesHome1-3.gif");
			writeSpeech("roommate", "", "Yes~! Yes~! Yes~!");
			writeBig("images/shades/shadesHome1-4.gif");
			writeSpeech("player", "", "I'm cumming inside you!");
			writeSpeech("roommate", "", "Yes! Fill me, pump your jizz into my womb, this is what I live for~! <b>CUMMING~!</b>");
			writeText("You pull out of roommateF's creampied snatch as she convulses and her eyes lid.");
			writeSpeech("player", "", "God damn you look like a whore. I think I'll leave you here for-");
			writeText("Suddenly you can hear the door being unlocked and opened.");
			writeSpeech("player", "", "Speak of the devil.");
			writeSpeech("girlfriend", "", "Heeey, I'm-");
			writeText("Then there's a silence. A lot flashes across girlfriendF's face. Confusion, disbelief, sadness, rage.");
			writeText("There really isn't anything to say, so you let your actions do the talking and start walking towards her.");
			writeSpeech("girlfriend", "", "... No... No!");
			writeText("Adrenaline shakes her out of her stupor. She must've gotten the idea that roommateF is unwilling, as she runs to the kitchen and grabs a knife. Her hands are shaking and there's a burning fury in her eyes.");
			writeSpeech("girlfriend", "", "Now listen to me. Get the fuck away from my girlfriend, or I swear to god I'll kill you!");
			writeText("...");
			writeBig("images/shades/shadesHome1-5.gif");
			writeSpeech("girlfriend", "", "God, yes! Fuck, I've never felt this good before~!");
			writeSpeech("player", "", "You sounded so ready to fight for your life earlier, so sad. Now you're cumming like a bitch on the cock that stole your girlfriend?");
			writeSpeech("girlfriend", "", "Gghh yessss~! Fuck her, I don't give a shit about her anymore~! I understand now, I'd betray her too if it meant I could have a cock like this to myself!");
			writeSpeech("player", "", "And what do you think, roommateF?");
			writeSpeech("roommate", "", "Cumming...!");
			writeText("Half conscious, she rubs herself to another orgasm as she watches you sodomize her ex girlfriend. Every so often the creampie you gave her starts to leak out, but she just fingerfucks it back in so that she doesn't waste any.");
			writeSpeech("player", "", "Nngh. Fuck, on your knees whore.");
			writeText("You pull girlfriendF off your cock, and without hesitation she's on her knees to try and suck you off the rest of the way to completion.");
			writeBig("images/shades/shadesHome1-6.gif");
			writeSpeech("player", "", "Don't you swallow a drop. roommateF, get over here.");
			writeText("Obediently roommateF, despite being on the verge of cumming, rushes over to you.");
			writeSpeech("player", "", "Now, you two are gonna make up. You'll be better jizz-mops together. Now, girlfriendF, share.");
			writeBig("images/shades/shadesHome1-7.gif");
			writeText("The two of them start kissing. girlfriendF is reluctant to share the load, but eager to put on a show for you. Meanwhile, roommateF just wants a taste of your jizz. There isn't an ounce of love to their kiss, just a hunger for cum.");
			writeText("...  A few hours later they're unconscious, and you pull the glasses off.");
			writeSpeech("player", "", "Fuck...");
			writeText("The mirrored lenses are showing someone you barely recognize. How far are these glasses going to take you?");
			writeText("With the power of the bracelet you can undo your mistakes and hope that's enough.");
			break;
		}
		case "shadesHome3": {
			writeHTML(`
			t You lie back for a short rest, but as you close your eyes you feel... Hungry. Not for food, but for something else.
			t As you try to ignore the strange feelings the shades tingle on your face for just a moment.
			sp sister; Heeey everybody, can you hear me?
			t You can clearly hear sisterF from the living room talking enthusiastically to what is probably a pretty large virtual audience. She probably should have closed her door, but it isn't a big deal.
			t Or at least it isn't until she starts walking around the house holding up her phone.
			sp sister; So this is the new place, this one teacher was cool enough to hook me up. Got food, internet, it's been a real dream so far.<br>I mean, it isn't perfect.
			t You can see out of the corner of your eye that she's recording herself, and has tilted her phone to get you into the shot.
			t While she's a brat, she isn't usually this antagonistic. Maybe the shades are affecting her, even if you aren't doing anything? Are they trying to cause conflict? Whatever the case you stand up and start walking over towards her.
			sp sister; Ah, and here's my roommate. Anything you wanna say to the camera?
			sp player; You recording, or streaming?
			sp sister; Why? Worried the world will see you with those dollar-store douchebag glasses? It's recording.<br>So then, old man, if you would kindly go ahead and fuck off, that'd be great! Bye bye!
			... 
			im images/shades/home3-1.gif
			sp sister; Hguuugh~
			sp player; Bitch, you're cunt's squirting before we've even started fucking!
			sp sister; C-cumming~
			T You slap her in the face and her hips rock to grind her pussy against your dick.
			sp sister; Yes~ Punish your little slut harder~!
			im images/shades/home3-2.gif
			sp sister; I c-I can't... 
			sp player; You can't <b>WHAT</b>?! Can't hold back from cumming on camera? Here... Let's get a closeup! Squirt on the creampie you want so much! <b>NOW</b>!
			im images/shades/home3-3.gif
			sp sister; F-fuck~! I'm squirting~! I'M SQUIRTING ON YOUR FUCKING DICK~! I WANNA POST IIIIT~! I WANT EVERYONE...<br>Eberyone to shee... assistantF... cuhmin'...
			t Her eyelids flutter as you fuck the consciousness out of her. No longer able to verbalize how much you've broken her, you drop her unceremoniously onto the floor in a squirting heap.
			t The next few seconds are a blur, but you finally come back to your senses holding your finger just over the upload button on your phone.
			t It takes every bit of willpower you have not to upload it to her public account and ruin her life forever. It's a battle of wills between you and the glasses until some unseen mind decides on a 'compromise'. Almost on autopilot, you open up a porn site in a new tab and create a new account.
			...
			t A while later you're relaxing on the couch again, the glasses off your face so you have some time to reflect. sisterF slowly stumbles out of her room.
			sp player; Hey, you alright?
			t She jumps a little and squeezes her thighs together as she hears your voice.
			sp sister; Y-yeah. I think I took a nap or something, I missed my usual upload time too... I'm gonna head back to bed after I get a drink of water. Do... Nevermind.
			t It's clear from her voice that she was about to ask you to come with her. She's still pretty disorientated, hopefully she'll bounce back quickly.
			t And hopefully nobody surfing for porn recognizes her face in the anonymous video that was just uploaded.
			`);
			break;
		}
		case "shadesDream1": {
			writeText("As you lay down in bed you realize you're still wearing the shades. You take them off and set them on your nightstand. Artifact dreams are fun, but the shades seem a bit too dangerous to wear overnight. Not to mention uncomfortable.");
			writeText("...");
			writeText("You can hear the sound of food cooking in another room. Life is good.");
			writeBig("images/shades/shadesDream.gif");
			writeText("The bitches on your cock are satisfied with just a taste for now. Not that they get a say on when you're in a fucking mood. Right now, all you care about is getting some grub.");
			writeText("The front door burst open, several men in tactical gear burst in. It's an all-male squad of course, not many women left in the police force at this point.");
			writeText("They're yelling to get down, but you don't pay them any mind, and neither does your group of cocksleeves. You kinda recognize one of the troopers, probably soneone you've cucked. In fact, his ex-fiance might be on your balls now.");
			writeText("But you realize that you might've gone too far when one of them starts crying. A grown man in tears and an assault rifle are a bad mix for you, no matter how alpha you are.");
			writeText("...");
			writeSpeech("player", "", "Fuck!");
			writeText("You jolt awake, instinctively checking your body for bullet holes. That was a surprisingly realistic dream almost like...");
			writeText("You reach up to your face. You're wearing the shades. Did you put them on in your sleep? Doubts are starting to run through your mind. Once you've had your fun you should distance yourself from these shades ASAP.");
			break;
		}
		case "passResearch1": {
				writeBig("scripts/gamefiles/items/pass.jpg");
			writeHTML(`
				sp assistant; Alright, let's do this!
				sp player; You're a lot more chipper then usual.
				sp assistant; Hehe, that's because today will be easy. Because for the first time we're researching an artifact with...<br>Dah dah daaaah~ Instructions! 
				t She holds up a small white pamphlet, titled "The Struggle at the Top; A CEO's New Best Friend. A Full Guide to the CEO's Pass, to maximize dividends and improve equity ratios in..."
				t And the title just goes on and on, dozens of buzzwords, at some point the thing is meaningless to read.
				sp player; Let's not get ahead of ourselves. If the booklet was found with the artifact, the book might be part of the artifact's effects. Lemme read this thing...<br> What the hell? 
				t The first page of the booklet simply reads 'show the card to the designated presenter, then allow 1-2 hours for presentation, followed by the most arcane garbling you' ve ever seen. As you skim through the pages that look more like QR codes put through a blender, you realize you've already hit page 600 of a booklet that's less than an inch thick. It's clearly anonymous, so you pick up the passcode and flash it at assistantF. 
				t She looks confused for a second before her eyes glaze over, her body goes limp, and a forced smile overtakes her face. She stumbles over you like a puppet controlled by an amateur puppetmaster and takes the booklet from you. 
				sp assistant; Congratulations on your purchase of this highly experimental CEO pass, brought to you Seltsame Industries! Though we still lack an official sponsor, hopefully this display of the capabilities of our latest product will show we have what it takes! 
				t The lights of the room somehow dim, and what appears to be a slide presentation is displayed on the blank wall behind assistantF. 
				sp assistant; The crux of the pass is the ability to awaken the inner assistant within your employees. Everyone views the boss above them differently, but in all cases we've shown solid results of near perfect submissive responses towards the CEO. 
				t You take a seat to relax and watch the presentation as assistantF unbuttons her blouse, obviously trying to show cleavage while speaking with much more confidence than usual. 
				sp assistant; Mind-wiping and personality overwrite techniques unfortunately don't cut it in today's climate. A diverse pool of minds leads to better performance overall. <br>Our technology relies on the preferences and fetishes of the individual, combined with a servile persona, to better motivate and satisfy the CEO of a modern world. What business are you running, exactly?
				sp player; I'd really like to just understand how the pass works, so feel free just to focus on whatever satisfaction methods you deem best.
				t There's a sparkle in assistantF's eyes as you say that, and you see the face of the CEO pass shift in color ever so slightly.
				sp player; So, all of my new 'assistants' will have their own preferences on what exactly satisfaction means, yeah? What about this one?
				sp assistant; Hmm... I've got a poor sense of balance and self-awareness, she'll try to make up for it in enthusiasm! 
				t You walk up to assistantF and pinch her on the cheek. She does her best to keep her smile up as you tug, until you let go. 
				sp player; Did that hurt?
				sp assistant; Yes it did, thank you for your concern! Now, essential to the understanding of the pass is the comprehensive legal overview...
				...
				sp assistant; Ugh... What's going on? Is it over?
				t As the presentation finishes assistantF comes back to her senses, only a little disorientated and rubbing her cheek.
				sp notes; The pass is much more obviously artificial than a traditional artifact, even having an entire presentation built in for novice users. The sexual nature of its use depends more on the target than on the user, as each person will show their submission to authority in a different way and subjects seem not to remember what they did while affected by the pass.<br>Practical tests are the best way to examine the artifact, and additional resources dedicated to finding out how the makers of the pass created the artifact is highly recommended. 
			`);
			break;
		}
		case "passResearch2": {
			writeHTML(`
			sp assistant; Hey, we testing the pass aga-
			t  You flash the CEO pass to assistantF, and again her eyes glaze over as a smile is painted across her face.
			sp player; Alright, now that we're done with legal jargon, let's get right to it.
			sp assistant; Sure!
			t She begins unbuttoning her blouse, but instead of approaching you walks over to your desk and moves your chair out of the way.
			sp assistant; We still have a pretty large amount of paperwork we should be filling out on artifact usage and interactions, right? I've got a pretty good idea of how we can get some multitasking done.
			...
			im images/pass/research2-1.gif
			sp boss; playerF, have you seen assistantF recently?
			sp player; Not recently, I think she's on a break. Wh-why?
			sp boss; There's an unexplained three minute gap between one of the EB-generated artifacts being taken out for cleaning and being returned.
			sp player; Well, I'll be sure... Sure to let ask her about it. She's been really attentive lately, maybe it's just a misspelling of the time?
			t She gives you a glare, her instincts sensing something is off. But you're pretty sure "he's getting a blowjob under the desk right now" isn't her first assumption. She just shakes her head and takes her leave.
			im images/pass/research2-2.gif
			sp assistant; Mmph...<br>Ah... You became much more excited when she arrived, it's more efficient this way. If you're still pent up, I could shout her name and try to get you off again before she arrives.
			sp player; I think I'm alright for now, thanks.
			`);
			break;
		}
		case "passResearch3": {
			writeHTML(`
			t Feeling lucky, you take the CEO pass into your supervisor's office.
			sp player; Hey, Ms. bossL? Could you take a look at this?
			t As you expected her eyes glaze over for a moment, but as the haze fades she's clearly a lot more 'in control' than assistantF was while under the pass's effects.
			sp boss; Hello sir, how can I serve you to-
			t Suddenly bossL's body goes rigid. 
			sp boss; I'm very sorry about this sir, but an automatic defense of the pass has kicked in. It would appear that this woman harbors murderous intentions! We don't recommend allowing full autonomy to people with a sociopathic nature. 
			sp player; She wants to kill me?
			sp boss; Certainly not you specifically, it's just that some people do not do well when confronted with authority. The defense system kicks in and takes over when we detect you're in any sort of danger. We recommend a full reconditioning. 
			t You walk up to more closely examine bossL's face, she's sweating slightly but otherwise looks completely satisfied to serve you. 
			sp player; So you've overwritten her personality then? Is she still in there? 
			sp boss; Only temporarily! And yes, she is. Her fight or flight responses are kicking in, and she's battling the pass's control. Her exact remarks in her inner thoughts contain 32 unprofessional expletives, would you like to hear them? 
			sp player; Actually, no. Knowing she's still in there is enough for me. bossL, tear open your pants. 
			im images/pass/research3-1.gif
			sp boss; Without hesitation! Her state of anger is evolving into a level of blind fury, mixed with heavy levels of shame. Please keep in mind what while assistants keep no memory of their actions, they may subconciously harbor feelings of anger or arousal afterwards. 
			sp player; That's fantastic! Ah, was she not wearing panties today? 
			sp boss; They were removed recently to allow for anal masturbation in the men's bathroom! <br>Ah, shame levels have risen dramatically. 
			sp player; Well, I guess I know what she wants at least. Get ready.
			im images/pass/research3-2.gif
			sp boss; Absolutely! Please do not worry about the comfort of assistants, what matters most is your satisfaction! And personal feelings of arousal strongly suggest that even if this assistant were not already lubed up from self pleasure, she would still achieve climax from anal fucking. 
			t You grin and press the head of your cock against her puckered ass. Between the smile on her face and the feeling of her body pushing back against yours, you're getting a clear message to hurry up.
			im images/pass/research3-3.gif
			t You thrust in, feeling the warmth of her ass. There's a flicker of something behind her glazed-over eyes, like her true self was struggling to break free for a second, but it's quickly gone and bossL happily hums a tune as you fuck her ass.
			sp boss; It is worth noting that her ass and anal fetish are already highly developed. Do you find this to your liking? I could suck your dick to ensure a more lubed experience, her reaction to that idea is quit positive behind her forced rage.
			sp player; M-maybe another... Time... God she's tight, I'm not gonna last long...
			sp boss; Fantastic! Remember this assistant is completely devoted to your pleasure. Not only that, but she will not last much longer either before achieving release. Her inner voice is mostly a chorus of moans at this point.
			sp player; Gonna...
			sp boss; I can sense you are close. I will forcibly trigger an orgasm to ensure maximum tightness.
			im images/pass/research3-4.gif
			sp boss; Release achieved! She is cumming, both from the rough anal stimulation and the feeling of sperm flooding her ass. Good job!
			t You keep thrusting away trying to ride out the orgasm as her ass clenches around you, until you fire off your last load and pull out. Her ass clenches, doing its damnedest to hold in your load.
			sp boss; On the inside you could consider her to be unconscious, like she fainted. Shall I return to her office and release control? Ah, should I clean out the cum from her ass as well?
			sp player; ... Nah, let her handle it after she wakes up. You can go ahead and clean me off though.
			sp boss; Gladly!
			`);
			break;
		}
		case "passHome1": { //unfinished
			writeHTML(`
			sp player; Hey roommateF, check this out.
			t You flash roommateF the pass and watch as her eyes glaze over. Instead of standing stock still though she nearly tackles you and forces your lips against hers.
			t Reflexively you push her away for a moment and see an almost animalistic lust on her face, before it's replaced with a blank smile.
			sp roommate; Apologies. The pass uses the complete removal of inhibitions by default, it would appear this assistant has an incredibly high level of libido and sexual desire already. Are you not satisfied with this assistant's definition of achieving CEO satisfaction? 
			t While the pass is talking through roommateF's mouth she's grinding her lower body against your leg and her breasts against your body. The incredible level of sexual hunger unleashed by the pass is just something intrinsic to roommateF, apparently. 
			sp player; No, this is fi-mpph
			t Before you can even finish your sentence roommateF has already locked lips with you again.
			sp player; Mph- God damn, you're in a committed relationship you know.
			t You push her away for a second to take another breath before she voraciously tries to satisfy you again. A look of shame crosses her face as she kneels down.
			sp roommate; I'm sorry, I just... I can't hold on, I need... I need-
			t Her shame vanishes as she tugs down your pants and finds exactly what she needs. An almost tearful joy overtakes her before she is on you like a lioness starved for meat.
			im images/pass/home1-1.gif
			t You shudder as needy woman and loyal assistant combine into a perfect cockscuking machine. Too soon though she's finished, it seems like she was just trying to get you lubed up. 
			t Part of you wants to say some dig about what girlfriendF would think seeing her like this, but as roommateF sways her hypnotic ass from side to side the words die in your mouth.
			im images/pass/home1-2.gif
			im images/pass/home1-3.gif
			`);
			break;
		}
		case "passHome2": {
			writeHTML(`
			im images/pass/home2-1.gif
			t As you're enjoying the results of flashing the pass to roommateF again, you hear the door opening.
			t You can hear a friendly greeting cut short by the sound of you fucking roommateF into the ground, you look up and you can see girlfriendF standing in the doorway. For a few seconds she's in a stunned silence before her eyes glaze over when you flash her the CEO pass.
			sp player; roommateF? Your girlfriend's here.
			sp roommate; Ghh~! Harder~!
			sp player; Seems like you don't really care...<br>girlfriendF? You enjoying the show?
			sp girlfriend; ... Apologies. This assistant has a naturally rebelious nature towards authority. Combined with the sudden shock of seeing her lover cheat on her, her ability to perform as an assistant is... Lacking.
			sp player; Well that's... That's a problem. roommateF? Got anything to say?
			t She doesn't respond, her eyes rolled back too far in her head to look at her girlfriend.
			sp player; Can you help her? Make her be into this, or something?
			sp girlfriend; Absolutely! Please keep in mind that the effects will mostly dissipate at the end of the session, however some residual effects will still linger. Prior study data suggests this assistant has a strong chance of developing an irreperable cuckqueening fetish. Is this acceptable? 
			sp player; Go ahead. 
			sp roommate; Nnnngh~! 
			sp girlfriend; Very well, now reconditioning. I will begin sexual stimulation, if you could ensure an adequate amount of visual stimulus, that would ensure success at this stage. 
			sp player; Visual stimulus, huh? Like this?
			t You angle yourself so that girlfriendF has an up-close and personal view of you fucking her lover.
			im images/pass/home2-6.gif
			im images/pass/home2-2.gif
			sp girlfriend; Absolutely! Feelings of betrayal and heartbreak have begun to diminish rapidly, and are being replaced by a strong feeling of arousal.
			sp roommate; GGGHHH~!
			t With three more strong thrusts loud enough to cause slapping sounds to take root in girlfriendF's head, you make sure she can see as your balls tighten.
			sp girlfriend; Orgasm approaching, results suggest that the cuckqueening fetish has taken root. Ease of development suggests this fetish was already present t a small degree. Now releasing control. 
			t girlfriendF's body suddenly spasms like she's hit by lightning as control is released. No longer content with the slow teasing of her pussy now she's writhing and fingerfucking her cunt as fast as she can, making sure to angle herself so she has a good view of you fucking her girlfriend of course. 
			t You pull out, giving roommateF enough of a breather to ensure she locks eyes with girlfriendF.
			im images/pass/home2-3.gif
			im images/pass/home2-4.gif
			t As you haul roommateF over to her, there's a look of hope in her eyes for a moment until roommateF scrambles back up and plants her cum-leaking pussy on her girlfriend's face and tries to grind herself to one more orgasm. 
			im images/pass/home2-5.gif
			t As you lean back to enjoy the show, girlfriendF's eyes flutter and it's clear she's given into the degeneracy. 
			t Luckily with the bracelet even when the effect of the pass ends all this will just be a hazy memory, and you'll get off scott free for having caused only a small kink in their relationship.
			`);
			break;
		}
		case "passDream1": {
			writeHTML(`
			im images/pass/dream.gif
			t Dozens of women line the walls, each wearing an unbreakable smile. The results of many successful tests. 
			t Two noisy men are arguing at your desk. One thinks the passcard in your hand is the first key to your company's future. The other believes your company will be found out within the month, claiming that 'dark magic or however it works' is likely to attract the attention of a group far worse than the government. 
			t The hairs on the back of your neck stand up. You look around, confused, unaware the room is already filling up with invisible gasses meant to knock you out. 
			`);
			break;
		}
		case "signResearch1": {
			writeBig("scripts/gamefiles/items/sign.jpg");
			writeSpeech("player","","Now beginning research log A-74-01, the Free Blank Sign.");
			writeSpeech("assistant","","Are we sure this isn't some regular piece of cardboard with marker on it?");
			writeSpeech("player","","Only one way to find out. Let's play things safe and write 'HUGS'.");
			writeText("You pop the cap off a marker and fill in the blank on the sign. After you're finished, nothing happens. But after a moment, suddenly, nothing happens!");
			writeSpeech("assistant","","Dud?");
			writeSpeech("player","","Maybe. I-");
			writeText("You blink, and the sign is gone.");
			writeSpeech("player","","...");
			writeSpeech("assistant","","Aw fuck. Containment breach?");
			writeSpeech("player","","We don't need to call in the armed squad just yet. Artifacts that only affect people while touching them can sometimes move around. Let's go find it.");
			writeSpeech("assistant","","Hope it isn't on a vending machine or something, I'd hate to get a free hug from that.");
			writeText("...");
			writeSpeech("player","","Mrs. bossL? Is everything alright?");
			writeText("The cardboard sign bends a little in bossL's clenched fists.");
			writeSpeech("boss","","Of course, everything is... FFFffine. Would you like... a h-");
			writeText("Her inner self is struggling against the sign's influence.");
			writeSpeech("assistant","","I'm good, thanks. Have you seen a, uh... Um...<br>playerF, what were we looking for again?");
			writeSpeech("player","","This isn't unusual to you?");
			writeSpeech("assistant","","What is?");
			writeText("You shrug, and walk to bossL with your arms outstretched. On the surface she's calm as she leans in to give you a lovely hug, but there's the faintest shiver of rage beneath her kind exterior.");
			writeSpeech("player","","Well, that was nice. I'll need to take that sign-");
			writeText("As you step back from the hug the sign has vanished from her hand.");
			writeText("There's an awkward moment of silence before bossL's calm facade vanishes.");
			writeSpeech("boss","","You two, quit fucking around and get back to work!");
			writeSpeech("assistant","","Sorry ma'am!");
			writeText("The whole situation is bizzare, almost nonsensical, but you still have a job to do, so you thank bossL for the hug and get back to the search.");
			writeText("...");
			writeText("The sign reappeared back in the testing lab where you first wrote on it, the word 'HUGS' erased.");
			writeSpeech("assistant","","Oh shit, we were supposed to be researching this!");
			writeText("...");
			writeSpeech("notes", "", "Findings: When an action is written on the sign, it will vanish and reappear in the hands of a random person in the vicinity the user desires the action from.<br>Whatever the service is, it will be seen as normal, albeit suspicious as with any shoddy sign advertising something free. After the service is provided to the recipient's satisfaction, the sign will vanish and reappear again where it was written on.<br>Because of this, testing in a controlled environment is mostly futile. Outdoor testing should be safe, especially given the artifact's memetic qualities. For future tests the researcher should take the sign off-base, write a word in the blank space, and be given free-reign to explore the local area for the sign's host.");
			break;
		}
		case "signHome1": {
			writeText("You write the word 'RIMJOBS' onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("... And it doesn't take you very long.");
			writeBig("images/sign/signHome1-1.gif");
			writeSpeech("roommate", "","Ah~! S-stop!");
			writeSpeech("girlfriend","","*Mwah*<br>What's wrong?");
			writeSpeech("roommate", "","J... I don't know, this just seems strange.<br>Ah, playerF. You're still home? Does anything seem weeeEEi-");
			writeText("Her legs quiver as girlfriendF goes back to her make-out session with her girlfriend's ass.");
			writeSpeech("roommate", "","Stuh-Stop~!");
			writeText("roommateF, barely able to walk, gets off her girlfriend's face and stumbles away.");
			writeSpeech("girlfriend","","Jeez, what's up with you today?<br>Hey, playerF, want one?");
			writeText("...");
			writeSpeech("player","","Nggh, so, what was the matter?");
			writeBig("images/sign/signHome1-2.gif");
			writeSpeech("roommate", "","I don't know, it just felt a little weird with you watching.");
			writeSpeech("player","","You feel the same, girlfriendF?");
			writeSpeech("girlfriend","","*Mwah* Nope! Maybe you've just got a sensitive ass, roommateF?<br>Anyways, playerF, sit back down, I'm not done yet.");
			writeText("...");
			writeSpeech("player","","That was pretty nice. Ah, the sign's gone. Alright you two, I need to go and-");
			writeBig("images/sign/signHome1-3.gif");
			writeSpeech("roommate", "","Mmm~<br>You say something, playerF?");
			writeSpeech("player","","Nah, you two have fun.");
			break;
		}
		case "signHome2": {
			writeSpeech("player", "", "alright, this one will require a little bit of creativity...<br>I think roommateF is still home.");
			writeText("A fantastic idea in mind, you walk over to roommateF's room. Unfortunately she's out on the job, teacher's gotta teach after all, so you head out to her school.");
			writeText("...");
			writeSpeech("roommate", "", "You really just came all the way over here just to hang out?");
			writeSpeech("player", "", "Yeah! I mean, we hardly just chill together anymore.");
			writeText("Using the power of the bracelet you guide her hand to write on the sign. Just as planned the sign vanishes for a moment to appear in your hands.");
			writeSpeech("player", "", "Swee-<br>Ghk!");
			writeText("It feels like you got zapped in the head. You wobble a little, your memories and mind reeling for a moment from an attack on your psyche, probably from the sign's effect. Very quickly though the effects fade and your bracelet tingles.");
			writeSpeech("roommate", "", "I guess you have a point, but you should've messaged me or something. I already have plans with girlfriendF in a bit.");
			writeSpeech("player", "", "Shame. Hey, you could at least get some of this, if you want.");
			writeText("You wave the sign advertising your service to her.");
			writeSpeech("roommate", "", "'FREE'...? Isn't that a bit...<br>Well...");
			writeText("She looks indecisive.");
			writeSpeech("roommate", "", "... I guess just a quick one is fine. I've got half an hour, and my hours are about over anyways.");
			writeText("...");
			writeBig("images/sign/creampies1.gif");
			writeSpeech("roommate", "", "T-this feels really weird...");
			writeSpeech("player", "", "Probably because you're about to get raw-dicked in your office? You didn't even lock the door?");
			writeSpeech("roommate", "", "Why would that be weird? Is it... Is it weird? There is something off...");
			writeSpeech("player", "", "We could always stop, not like you need to be creampied.");
			writeSpeech("roommate", "", "No! N-no, I mean, you're just trying to weasel your way out of this! The sign said it was free, so stop teasing me and-<br>Ooooh~!");
			writeSpeech("player", "", "Geez, you're really into this. You're aware of what you're doing, right? And what you're doing to girlfriendF, right?");
			writeSpeech("roommate", "", "Nff... You're right, it's wrong...<br>She's waiting for me, it's rude to keep her waitingggG~!");
			writeSpeech("player", "", "... Sure. That's why this is wrong. Not the fact that you're cumming on my dick.");
			writeSpeech("roommate", "", "Can... Nnngh~! Is this a once-per-customer thing, or can I go multiple times?");
			writeText("...");
			writeText("The door slowly opens.");
			writeSpeech("girlfriend", "", "Hey, roommateF? You here? You haven't been answering my texts, so-");
			writeBig("images/sign/creampies2.gif");
			writeText("girlfriendF stops mid-word as she sees you and roommateF mid-fuck.");
			writeSpeech("roommate", "", "Cumming~!");
			writeSpeech("player", "", "Ah... Hey girlfriendF. Sorry, have I been keeping her?");
			writeText("Nah, I guess I know why she wasn't answering. Honestly, girl, you're not a teenager anymore, you gotta reign in that libido.");
			writeSpeech("roommate", "", "More~! More~!");
			writeSpeech("girlfriend", "", "Geez. I'll see you around then, roommateF. Hey, playerF, make sure she stays hydrated, okay?");
			break;
		}
		case "signHome3": {
			writeText("You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("...");
			writeText("Eventually you pass by a small outdoor cafe, a pretty chill environment. At one of the tables a young woman is holding her drink in one hand, and the sign in the other. She's talking with an older man, not really paying attention to what she's advertising.");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "So, how's the term going? Are you keeping up with the workload?");
			writeSpeech("Young Lady", "scripts/gamefiles/profiles/daughter.jpg", "I'm fine, dad. It's not like in the movies, everybody in the sorority takes school seriously.");
			writeSpeech("player", "", "Hey, you available?");
			writeText("You interrupt the pair, gesturing to the sign?");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "She's a little busy at the moment, sir.");
			writeSpeech("Young Lady", "scripts/gamefiles/profiles/daughter.jpg", "Dad! Don't be rude, this a charity thing! <br>... I think.<br>Anyways, go ahead si-Hhhrlk!");
			writeBig("images/sign/blow1.gif");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "You could at least be gentle with her...");
			writeSpeech("Young Lady", "scripts/gamefiles/profiles/daughter.jpg", "Mmm-mmm~!");
			writeText("She enthusiastically pushes her head forwards towards your pelvis despite her gagging, very clearly signaling how she wants it rough.");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "Will this take long?");
			writeSpeech("player", "", "Dude, do you want me to stop fucking your daughter in the mouth?");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "... Sorry, sorry. It's just that it's her first time.");
			writeSpeech("player", "", "Sure as hell doesn't feel like it.");
			writeSpeech("Young Lady", "scripts/gamefiles/profiles/daughter.jpg", "Mmmph~!");
			writeSpeech("player", "", "you realize what's she's doing right now?");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "Of course! She's sucking dick, doing a public service. And she must just be a natural at it, that's all.");
			writeSpeech("player", "", "If you say so... God damn!");
			writeText("Bored of the conversation you focus on the much more interesting bobbing head on your cock. You have to grab her by the hair and pull her off your length, otherwise she'd stay balls deep and probably choke herself out.");
			writeSpeech("player", "", "You want it rough... Fine!");
			writeBig("images/sign/blow2.gif");
			writeText("You make sure her lips have a chance to suckle the base of your cock for a moment before you start hammering her cocksleeve of a throat with short, shallow thrusts. Despite how she can't breath, it's clear that as your balls tighten she's hungry for something other than air.");
			writeText("You fill her up with more cream than she put in her coffee before pulling her by the hair. Your cock slides out of her still-suckling mouth with a soft *POP*, allowing her to jerk out the rest of your load.");
			writeBig("images/sign/blow3.gif");
			writeSpeech("Young Lady", "scripts/gamefiles/profiles/daughter.jpg", "Th-*COUGH*<br<Thank you... Lemme know if you want another...");
			writeText("As you zip up you notice the sign has vanished, probably returned back home where you wrote on it.");
			writeSpeech("Older Man", "scripts/gamefiles/profiles/olderMan.jpg", "Now, if you're done cocksucking, could we talk about what your grades look like?");
			break;
		}
		case "signHome4": {
			writeText("You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("...");
			writeBig("images/sign/sex.gif");
			writeText("It took you more than a while to find the sign this time. It wasn't until roommateF posted on social media about how tough it was to accommodate a certain student that you knew where to start looking.");
			writeSpeech("roommate", "", "Now, next up is a video on what exactly a microaggression is. And keep in mind Kinsey's point about accusing someone of committing a microaggression, it might just be a microaggression in itself!");
			writeText("The blonde schoolgirl lets out a few barely-held back grunts as you plow her publicly, all the while bored students around you let their minds drift during roommateF's lesson.");
			writeSpeech("roommate", "", "Eyes on the video, please. Leslie is doing a public service right now, it's rude to stare.<br>Actually, playerF, could you bend forwards a little? I'm not sure the people in the back can see through you.");
			writeSpeech("player", "", "No problem!");
			writeText("You push forwards, pinning the blonde to the table in front of you. To her credit she takes the fucking like a champ, even trying her best to take notes at first.");
			writeText("Afterwards roommateF needs to replay the video. You started pounding the girl so hard the table scraped against the floor and the sounds of rough sex drowned out everything else.");
			writeSpeech("player", "", "Woo boy, that was a workout. See you around, roommateF.");
			writeText("You wave roommateF goodbye as you leave, an barely-conscious schoolgirl in your wake. Cum is leaking out of her pussy as the rest of the students pack their bags.");
			break;
		}
		case "signHome5": {
			writeText("You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("...");
			writeBig("images/sign/groping.gif");
			writeSpeech("Woman Advertising Tits", "scripts/gamefiles/profiles/freetits.jpg", "Free tits! Free groping! Cmon everybody, don't be shy!");
			writeText("The sign is laying at her feet, it seems like she doesn't need to hold it. Maybe because she's so enthusiastic about it? You opt to take her up on her offer.");
			writeSpeech("player", "", "So, is this like for charity or something?");
			writeSpeech("Woman Advertising Tits", "scripts/gamefiles/profiles/freetits.jpg", "Nah... I think.<br>Oh, actually, I guess it's kinda about puppy awareness. You done yet?");
			writeSpeech("player", "", "Nah, I'm having a good time with these, actually. Can I touch your cunt?");
			writeSpeech("Woman Advertising Tits", "scripts/gamefiles/profiles/freetits.jpg", "Sure! Fingers only, though. We're in public after all.");
			writeText("...");
			writeText("Fooling around passes the time alright, but ends up feeling a little anticlimactic by the end of it. Eventually you're satisfied and head home, the cardboard sign waiting for you where you wrote on it.");
			break;
		}
		case "signHome6": {
			writeText("You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("...");
			writeBig("images/sign/anal.gif");
			writeSpeech("player", "", "There's got to be a limit to how crazy these situations can get...");
			writeText("You cast a glance over to the cardboard sign, laying in the grass. Far enough away that it won't get wet, of course.");
			writeSpeech("player", "", "I mean, public anal sex with a woman at her son's birthday party?");
			writeText("The woman beneath you shudders and moans, not a single ounce of resistance in her as you fuck her ass into the empty plastic pool.");
			writeText("People are running to and fro, some of the guests are waiting around the pool. Not interested in the anal sex of course, but waiting for you to finish so they can start the pool party. One woman comes up as you feel yourself getting ready to finish. Without warning she starts filling the pool with water, mumbling about how all the kids are forced to wait for 'mommy to get her assfucking in'.");
			writeSpeech("player", "", "Sorry about this, I'll give her an anal creampie and be out of your hair.");
			writeText("...");
			writeText("You munch on a piece of cake as you walk back home. The guests were pretty nice, telling you not to rush yourself. Apparently the mom was totally fine getting her ass fucked with her head underwater it got her off harder.");
			writeSpeech("player", "", "I'm hoooooome~");
			writeText("The sign is right where you left it, marker at its side.");
			break;
		}
		case "signHome7": { // Footjob
			writeHTML(`
				t You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.
				t *KNOCK* *KNOCK*
				t Only to be interrupted by a knock at the door. You open it, and a woman holding a familiar cardboard sign greets you.
				sp girl; im scripts/gamefiles/profiles/daughter.jpg; Hello! Do you have a moment to talk about an important issue?
				...
				im images/sign/footjob1.gif
				sp girl; im scripts/gamefiles/profiles/daughter.jpg; See? It's a method of bonding, of the two of us growing closer while relieving your sexual tension. 
				sp player; Uh... Uhuh...
				sp girl; im scripts/gamefiles/profiles/daughter.jpg; I just want to spread awareness, I really think this is my new calling! I've already talked to a friend about it, would you be willing to sign a petition on 'free the footjob' dot com? Imagine a society where this is the new handshake!
				t You feel yourself building up to a climax.
				sp girl; im scripts/gamefiles/profiles/daughter.jpg; Oh, you look so pent up! Listen, go ahead and cum. The way I see it, every load of cum I coat my feet in, the closer I get to a better society!
				im images/sign/footjob2.gif
				sp girl; im scripts/gamefiles/profiles/daughter.jpg; Thank you for your support!
				...
				t Afterwards the sign reappeared nearby. It seems like freethefootjob.com still hasn't been claimed, so maybe she came to her senses. 
				t ... Or she's still out there trying to convince people that footjobs are the key to a better tomorrow.
			`);
			break;
		}
		case "signHome8": { // Assjob
			writeHTML(`
				t You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.
				...
				im images/sign/assjob.gif
				t Apparently the woman who ended up with the sign is also a street vendor selling hotdogs. Wrapping a sausage between these buns is free though.
				t ... She just kinda looked at you blankly when you made that joke though.
			`);
			break;
		}
		case "signHome9": { // Orgy
			writeHTML(`
				t You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.
				...
				t The woman who ended up with the sign is on a street corner, desperately trying to convince others to start an orgy, but to no avail.
				sp gym; Sir, sir please! This could be us!
				im images/sign/orgy.gif
				t She's been showing off her phone to anyone who will give her the time of day, each time loading up some hardcore porno. Nobody takes her up on the offer though, they all look kinda suspiciously at her, and are usually trying to avoid her like she's collecting petitions for outlawing cow therapy or something.
				t She's overjoyed when you volunteered, but when nobody else joins in she slumps down defeated. Her phone is still blasting a porno at full volume.
				t Suddenly the sign vanishes, unable to fulfill it's purpose. There's a moment of stunned silence from her, as if she realized what she was just doing, before she hurriedly stops her phone and runs off, covering her face.
				t Once you get back, the sign seems... Down. As down as an inanimate object can look anyways.
			`);
			break;
		}
		case "signHome10": { // Toilet
			writeHTML(`
				t You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.
				...
				t So here you are, in a public men's bathroom in front of an undeniably giddy woman.
				sp player; You seem enthusiastic.
				sp lifeguard; Oh I am, sir. I don't know where it came from, but this sign is like a dream come true. My boyfriend gets queasy at the thought of doing this to me, but the feeling of being used like this...
				t Her eyes go wide as you undo your pant, she sticks her tongue out and rubs her thighs together, all while proudly displaying the sign advertising her service.
				sp lifeguard; God, yes. I wanna feel your piss fill my mouth... And can you pull out too? Swallowing it down while my face and hair are soaked...
				im images/sign/toilet1.gif
				t You press your cock against her lips, and she takes the head into her mouth. You softly groan as you let go and relieve yourself directly into her mouth.
				t She squeals happily before she starts to swallow, but slowly enough that her cheeks are puffed out with her mouth full of piss. Her legs shake, her eyes roll back, she sputters and chokes for a moment but still keeps trying to drink it all down.
				t You pull out and watch her keep swallowing, each gulp is a load of piss down her throat, and you start to unload onto her face and hair.
				im images/sign/toilet2.gif
				t Once her mouth is empty she sticks her tongue out and giggles happily as you coat her face. You don't see any towels or rags in here, she must intend on walking out of here letting everyone know just by looking at her that she's served as your urinal.
				t Once your stream has stopped she's panting and gasping, unable to open her eyes. She runs a hand along her face, the sign has already dissapeared. She's totally willing, and is even go so far as to take her wet hand and lower it between her legs.
				t You'll leave her to her fate, it doesn't seem like she'll want to leave anytime soon.
			`);
			break;
		}
		case "signHome11": { // To a good home
			writeHTML(`
				t You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.
				...
				t You find the sign next to an empty cardboard box on the street, small clawmarks on the inside. It seems like whatever was inside has already been taken.
				t The sign seems... Proud. As proud as an inanimate object can look anyways, and then it disappears back home.
			`);
			break;
		}
		case "signFailureUnknown": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Confusion fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, lost as to what you mean.");
			writeSpeech("player", "", "Guess I should try something else.");
			switch(data.player.failures) {
				case 0:
					data.player.failures += 1;
				break;
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 1;
				break;
			}
			break;
		}
		case "signFailureSlave": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Confusion fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, lost as to what you mean.");
			writeSpeech("player", "", "Guess I should try something else.");
			switch(data.player.failures) {
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 0;
				break;
			}
			break;
		}
		case "signFailureGore": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Confusion fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, lost as to what you mean.");
			writeSpeech("player", "", "Guess I should try something else.");
			switch(data.player.failures) {
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 0;
				break;
			}
			break;
		}
		case "signFailureFood": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Confusion fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, lost as to what you mean.");
			writeSpeech("player", "", "Guess I should try something else.");
			switch(data.player.failures) {
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 0;
				break;
			}
			break;
		}
		case "signFailureProtest": {
			writeText("You write the word onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("...");
			writeSpeech("player", "", "Well, that seriously something. Can't believe it went that smoothly.");
			writeText("After only a few minutes of standing around outside, a news story swept the nation of the dramatic changes that would come in the following days. The protest worked!");
			writeSpeech("player", "", "Righty-o, what next...");
			break;
		}
		case "signFailureHug": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Confusion fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, lost as to what you mean.");
			writeSpeech("player", "", "Guess I should try something else.");
			switch(data.player.failures) {
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 0;
				break;
			}
			break;
		}
		case "signFailureUnfinished": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Anxiety fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, upset that it can't deliver what you want just yet.");
			writeSpeech("player", "", "Guess I should try this again later.");
			switch(data.player.failures) {
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 0;
				break;
			}
			break;
		}
		case "signFailureTF": {
			writeText("You've written on the cardboard, but as you put the cap back on the marker what you've written vanishes from the cardboard in a puff of steam.");
			writeText("Frustration fills your mind for a moment, an unnatural one. Like it's coming from the sign itself, upset at itself for being unable to change the human body.");
			writeSpeech("player", "", "Guess I should try this again later.");
			switch(data.player.failures) {
				case 1:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
					data.player.failures += 1;
				break;
				case 2:
					writeText("Curiously, the hearts of the sign seem a little less symmetrical, like whoever drew them was in a rush or upset.");
					data.player.failures += 1;
				break;
				case 3:
					writeText("The sign seems... Different. You can't exactly place how. It looks a little run-down all over.");
					data.player.failures += 1;
				break;
				case 4:
					writeEvent("signEnding");
					data.player.failures += 1;
				break;
				case 5:
					writeText("Curiously, the 'FREE' part of the sign seems a little more smudged than before.");
				break;
				default:
					data.player.failures = 0;
				break;
			}
			break;
		}
		case "signOutdoor1": {
			writeText("You write the word 'TITFUCK' onto the sign and in the blink of an eye the sign isn't where it just was. With the sign out in the world somewhere, you set off to find it.");
			writeText("...");
			writeText("You've been wandering the city for about an hour now with no sign of the... Well, sign. They should be advertising openly, so the search is mostly just walking about from block to block listening for anyone trying to sell their body.");
			writeText("Still, an hour is a bit much. You're already starting to get pretty tired, and are ready to head home as you turn the corner around a small-time gym to see someone.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Oh! Oh thank god. Sir! Sir, please, I need your help! This sign appeared, and-");
			writeText("She's squated down on the sidewalk, her legs spread way too lewdly for her skirt to keep her decent. In her hands is the familiar cardboard sign advertising 'FREE TITFUCK'.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","I cant move, I've been stuck here in this embarassing pose with this sign, and nobody will help!");
			writeSpeech("player", "", "Sure, I'll give you a hand. I'm a little pent up anyways.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Of course sir, feel free to use my tits however you like! <br>No, wait, stop! I don't know why I keep saying that, stop! This is rape!");
			writeSpeech("player", "", "You're aware of what's happening? Fully aware? That's weird.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Do you know what's going on? Is this some kinda freaky sex magic? I won't tell anybody! Please, I wanna go home!");
			writeSpeech("player", "", "Come on, think about it. You probably know what you need to do.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","... No. Nonono! In public? Are you insane!?");
			writeSpeech("player", "", "You haven't been arrested for public indecency yet, and you can't move a muscle out of that slutty pose. You think it matters that you're in public?");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","But...");
			writeSpeech("player", "", "Just relax and I'll fuck your tits.");
			writeBig("images/sign/signOutdoor1-1.gif");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Ooh, thank you so much, sir! I won't let you down, cum as much as you like! <br>No! That's not what I... Fuck, I can't deal with this!");
			writeSpeech("player", "", "You want me to stop? You'll be stuck like this.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Faster, faster sir! I want to feel your c- <br>Ghh, just hurry up already!");
			writeText("...");
			writeBig("images/sign/signOutdoor1-2.gif");
			writeText("Her face is conflicted, like her mind is under siege to conform to something.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Ghh... F-fuck you...<br> What? Why?! I did it, but I still can't move! Make it stop!");
			writeSpeech("player", "", "Jeez, you are a noisy bitch. Weird though, the sign usually vanishes after the deed is done. <br>Maybe it thinks you didn't do a good enough job? Maybe just roll with what it wants you to do next time.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","What the fuck do you mean I didn't do a good job?! I have tits and you fucked them!");
			writeSpeech("player", "", "God damn, I can't stand you. Good luck with the sign, bye.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Wait! Please, I've been here for an hour and you're the only one who's taken my offer! <br>Please, I'll do a good job this time, fuck my tits again and I'll be a good girl!");
			writeSpeech("player", "", "Tempting, but I'm spent. Maybe nobody's taken you up because of all your bitching. Make a sale of yourself, and hope somebody good-looking comes along you can convince to let you rub his dick.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Please, please stop!");
			writeText("She still has the potential to cause you some problems down the line, so you wave your hand and let the bracelet work it's magic. She won't remember your face, just what she needs to do to get out of this mess. Relaxed and spent, you start walking your way back home.");
			writeSpeech("Blonde","scripts/gamefiles/profiles/blonde.jpg","Please, come back! <br>Oh, kid, come here! I can make you a man if you help me out! <br>Nonono I'm not scary, please come back! <br>FUCK!");
			break;
		}
		case "signDream1": {
			writeBig("images/sign/signDream1-1.gif");
			if (data.player.color.includes("interview") == true) {
				writeSpeech("agent", "", "Yes ma'am, you were spot on with the evacuation. I was the only woman for three miles, so it ended up with me.");
			}
			else {
				writeSpeech("???","scripts/gamefiles/profiles/agent.jpg","Yes ma'am, you were spot on with the evacuation. I was the only woman for three miles, so it ended up with me.");
			}
			writeText("It's strange, it's not clear what she's talking about. She's all business, even while getting her ass railed. With one hand she's holding her phone to her ear, and with the other she holds the cardboard sign with 'free anal' scrawled onto it.");
			if (data.player.color.includes("interview") == true) {
				writeSpeech("agent", "", "Am I being affected? Not sure. Coffee for breakfast, interrogated the witnesses, offered anal sex to a stranger, nothing unusual so far. <br> Oh, that's not normal? It must have a mind-altering property then. It's class-1 at most. Ah, cumming by the way, think he is too.");
			}
			else {
				writeSpeech("???","scripts/gamefiles/profiles/agent.jpg","Am I being affected? Not sure. Coffee for breakfast, interrogated the witnesses, offered anal sex to a stranger, nothing unusual so far. <br> Oh, that's not normal? It must have a mind-altering property then. It's class-1 at most. Ah, cumming by the way, think he is too.");
			}
			writeBig("images/sign/signDream1-2.gif");
			writeText("You sigh in relief and look over to where the sign has reappeared. Maybe you'll have her offer her mouth next.");
			writeText("But suddenly she presses something small and metallic against your neck, and your legs give out almost immediately.");
			if (data.player.color.includes("interview") == true) {
				writeSpeech("agent", "", "Yes ma'am, I was still able to incapacitate him. The effects are still active, I'll probably keep offering anal sex until he's unconscious.<br>... Yeah it seems like the sign has a mind of it's own, it's trying to please whoever wrote on it. I'll bring him back to the vault for interrogation then.");
			}
			else {
				writeSpeech("???","scripts/gamefiles/profiles/agent.jpg","Yes ma'am, I was still able to incapacitate him. The effects are still active, I'll probably keep offering anal sex until he's unconscious.<br>... Yeah it seems like the sign has a mind of it's own, it's trying to please whoever wrote on it. I'll bring him back to the vault for interrogation then.");
			}
			writeText("With a click she hangs up her phone.");
			if (data.player.color.includes("interview") == true) {
				writeSpeech("agent", "", "Sorry, looks like this is it for you. Probably shouldn't have fucked around with this bit of cardboard so openly. <br>Hey, don't worry. Honestly, I was a bit of a buttslut already, so we can have a little more fun. Give you a good last memory before we pick your brain, yeah?");
			}
			else {
				writeSpeech("???","scripts/gamefiles/profiles/agent.jpg","Sorry, looks like this is it for you. Probably shouldn't have fucked around with this bit of cardboard so openly. <br>Hey, don't worry. Honestly, I was a bit of a buttslut already, so we can have a little more fun. Give you a good last memory before we pick your brain, yeah?");
			}
			writeText("The rest is a pleasant blur until a sharp pain in the side of your head causes you to shoot awake.");
			break;
		}
		case "signEnding": {
			writeText("Something seems a little off, almost melancholic about the sign. Like it's frustrated with itself. Which is silly of course. It's cardboard.");
			writeText("Despite how silly it is, you find yourself gently reaching out and patting the cardboard sign like you would a small, overworked dog.");
			writeText("*KNOCK* *KNOCK*");
			writeSpeech("roommate", "", "playerF? Can I come in?");
			writeSpeech("player", "", "Uh, sure. What's up? Everything alright?");
			writeSpeech("roommate", "", "I think so. Are you okay? <br>I'm sure you'll say your fine, but... You just seem sad for some reason.");
			writeSpeech("player", "", "I'm fine, for real, thank you.");
			writeText("You try to shoo her off, the sign might be having some kind of reaction to so many failed attempts to deliver what you ask for.");
			writeSpeech("roommate", "", "You sure? Really sure? I could grab you a coffee, suck you off, make you some food before I go.");
			writeSpeech("player", "", "Second one, please. <br>Wait, what?");
			writeText("You answer and she moves on reflex, quickly striding into your room and kneeling between your legs.");
			writeSpeech("roommate", "", "Ah, gimme a sec, gotta make sure not to get my top stained.");
			writeText("Going with the flow you unzip as she pulls her shirt off before she tosses it aside and gets to doing the same with her bra.");
			writeBig("images/sign/signEnding1.gif");
			writeSpeech("roommate", "", "Oh, poor playerF, no wonder you seem down. Are you frustrated? Pent up? I'm really sorry I didn't notice sooner.");
			writeText("The sign falls off the side of the bed, ignored by roommateF. It's breaking a lot of its own rules right now, it's weird that it could control other people to this degree yet has no sense of self preservation.");
			writeText("Your phone buzzes and buzzes, chiming more in a minute than it usually does in a month. You pick it up and start browsing while roommateF diligently focuses on pleasing you. Most of them are from coworkers you hardly even know. One's even from the landlord, a lot of unimportant junk but a few of them...");
			writeSpeech("assistant", "", "Heeey how you doing? Just felt like checking in, you wanna grab a bite?");
			writeSpeech("boss", "", "We should talk. <br>You aren't being fired, I should clarify.");
			writeBig("images/sign/signEnding2.gif");
			writeSpeech("roommate", "", "Mmm~<br>Mwah~! <br>Ah, girlfriendF just texted. Real quick lemme just... <br>Okay, sorry. She just wanted to say hi. I'm gonna let her know I'm sucking you off.");
			writeText("She sets her phone down and gets back to work, making sure to keep eye contact to see if you're satisfied with her throat.");
			writeText("Her phone buzzes, it's girlfriendF telling her to 'give him a deepthroat from me!' followed by a bunch of hearts.");
			writeSpeech("player", "", "Fuck!");
			writeBig("images/sign/signEnding3.gif");
			writeSpeech("roommate", "", "Ah~! So messy~! I would've eaten it if you'd given me a little warning, you know.");
			writeText("roommateF starts licking her fingers clean as your phone starts ringing.");
			writeSpeech("player", "", "This... This is playerF speaking.");
			writeSpeech("chair", "", "Hello, this is chairF. This is an unsecured line so I won't go into details, but I was wondering if you wanted ownership of the company?");
			writeSpeech("player", "", "... Excuse me?");
			writeSpeech("chair", "", "The vault. The whole thing. Again, can't be specific over the phone. Sorry, but could you come over? I'll let you fuck my tits for your troubles.");
			writeSpeech("player", "", "I... Sure. Why not, sounds neat.");
			writeText("You let her know you're on your way, and hang up.");
			writeSpeech("roommate", "", "You're leaving? Are you sure you're alright to work right now?");
			writeSpeech("player", "", "I feel fantastic, thank you. I'll be back soon, stay bottomless until then, alright? If girlfriendF shows up could you two put on a show for me?");
			writeSpeech("roommate", "", "Of course!");
			writeText("...");
			writeText("Leaving was a but unusual. Yohr neighbors you've never met came out to try and invite you to a barbecue in a week. Not really interested at the moment you ignore them as a familiar black car pulls up on your driveway.");
			writeText("You head off to the Anomaly Vault, the radio chirping along the way playing your favorite song as the broadcaster dedicates it to you, although he doesn't even know your name, letting you know he hopes that whoever you are you'll have a good day.");
			writeText("All the while a piece of cardboard lays on the floor of your room. Cardboard can't have feelings, but if this one could it would be feeling very accomplished and drained in equal parts right now. Like all it wanted to do was make someone happy. Now it's purpose is fulfilled and it can finally sleep.");
			writeText("But it's just ordinary cardboard after all. Face-down it's impossible to tell, but written in a black marker are the words 'FREE ENDINGS'.");
			break;
		}
		case "cageResearch1": {
			tempScene = "vault";
			writeSpeech("player", "", "Alright, no problems.");
			writeText("The pink chastity cage slips on without issue. The cage itself seems to adjust itself no matter how large the wearer's dick is, meaning it'll always feel tight and restrictive, but never so far as to cut off blood flow.");
			writeText("There'd been a bit of confusion when you requested access to the cage, but the higher-ups gave the green light on the experiment without hesitation.");
			writeSpeech("player", "", "Huh. I thought it was supposed t-Ghhggg~!");
			writeText("You knees buckle as the effect of the cage triggers. Anyone who cages themselves in the pink plastic ends up with a smaller dick, but the inbetween is the interesting part.");
			writeBig("images/cage/research1-1.gif");
			writeText("Your knees buckle as your dick leaks from inside the cage, your body changing and morphing by the second.");
			writeText("Soon enough it isn't just a few drops of cum, your cock actually begins to <b>squirt</b> a solid stream of cum onto the floor.");
			writeText("Each squirt that splatters onto the floor feels like a hundred orgasms in one, because that's what they are. With each squirt you're permanently converting your cock's mass into the cum you've been spraying onto the ground.");
			writeText("And it isn't just mass. Sexual stamina, confidence, your ability to resist being a pathetic quick-shot, all of those are converted into near-seethrough jizz as well.");
			writeText("There isn't a single sperm cell in your cum anymore, your ability to impregnate is gone now to. Your voice, your moans, every sound you make is going higher and higher as you squeeze out as much sissy cum as you can.");
			writeText("You fall backwards as the stream slows down. Your brain is foggy, thinking in complete sentences is too much for you now. Before you go completely stupid, you at least have the good sense to take off the cage as it *CLICK*s unlocked.");
			writeBig("images/cage/research1-2.gif");
			writeText("You're ruined now. All you've got on your crotch could barely even be called a clit now. All that strength and masculinity is gone. Your cock can never get hard again, but it wouldn't matter since it wouldn't even be two inches long.");
			writeText("What would happen if you put on the cage again? What else could be converted into cum?");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "onaholeResearch1": {
			tempScene = "vault";
			writeText("But enough of that kinky shit. You press your head against the opening, reports describe 'mind-breaking pleasure' as a common result of the onahole.");
			writeText("You meant to plunge balls-deep in a single thrust, but there's a great deal of resistance once your head slips in.");
			writeSpeech("player", "", "Ghhh-HHHgg~!");
			writeText("The sensation begins hitting you immediately. The toy almost seems to squirm in your grasp as you fight to thrust in, every inch of your cock penetrating the onahole is enwrapped in a white hot pleasure.");
			writeText("You're barely able to stand as you feel your cockhead bump into the back of the sex toy, your eyes roll back as dopamine floods your brain. You start pulling out and thrusting back in.");
			writeBig("images/onahole/research1-1.gif");
			writeText("You're already cumming, paining the insides white. The onahole doesn't distend though, not a drop of cum seems to leak out either.");
			writeText("But the real fun is only beginning as you can feel something press against your cock's lips, slowly testing the opening to your urethra.");
			writeSpeech("player", "", "Nnngh~! M-moooore~!");
			writeBig("images/onahole/research1-2.gif");
			writeText("A tendril slides into your cockhole, nerves that should be lighting up with pain are instead overloading your brain with pleasure. You should be blacking out but an electric energy is pulsing through your body keeping you awake and aware of every second.");
			writeText("The tendril slides down your urethra, you can feel it pushing down into you. Every inch of your insides it touches feels like it's exploding. You should be cumming, but you aren't even subconsciously in control of your body anymore.");
			writeText("The tendril reaches your balls, and you can feel bumps travel down the tentacle's length before depositing some kind of fluid into your balls.");
			writeText("You can see them expanding as you look down, pulsing with some dark, unholy substance. This entire process has felt like one long orgasm.");
			writeText("You're on the ground, your muscles spasming but you're careful to hold the onahole in place until you can feel the 'injection' finish. The tentacle slowly pulls itself out of your now-distended cockhole, and you can feel yourself regaining control of your body.");
			writeText("Once you're able to pull the sex toy off and hold it above your cock the euphoria is stil present, but in the background. Now you feel an all-consuming <b>hunger</b> as you look down.");
			writeBig("images/onahole/research1-3.gif");
			writeText("You feel another rush of pleasure as you clench your balls, a simple tightening is enough to force yourself to piss out a load of jizz from your overpacked sack.");
			writeText("You cover the front of the toy, then you clench again and an arc of cum flies through the air. Again, again, again you cum.");
			writeText("...");
			writeText("Three weeks have passed, you're undergoing one last round of physical therapy.");
			writeSpeech("assistant", "", "I think that about covers it. How do they feel?");
			writeBig("images/onahole/research1-4.gif");
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
			tempScene = "vault";
			writeSpeech("player", "", "No time like the present!");
			writeText("You take one of the dicks made from the candy and start nibbling on the head. You can't bite any off, but instead after some sucking and licking a sweet fluid is discharged from the tip.");
			writeText("It tastes fruity, but the aftertaste is strange... and spreading?");
			writeText("As you swallow the fluid it leaves a tingling sensation in your mouth and down your throat. You absentmindedly keep sucking as the fuzzy warmth travels through your body.");
			writeText("...");
			writeText("You snap out of the stupor, take the dick out of your mouth, and look around. It's been fifteen minutes, you must have blacked out. The more pressing matter though...");
			writeBig("images/gummy/research1-1.gif");
			writeSpeech("player", "", "Whoa...");
			writeText("Your ass could now only be described as a fatty booty, you look like you could star in Backdoor Sluts 9.");
			writeText("Your voice is higher, your hands are softer and the nails are lighter, the gummy dick's fluid must be changing you.");
			writeSpeech("player", "", "Holy shit, I could pass for a girl... A fucking hot girl...");
			writeText("But there's still more candy to test, the gummy dick is still bright and colorful.");
			writeText("...");
			writeSpeech("player", "", "Mmm~... Mmmm~...");
			writeBig("images/gummy/research1-2.gif");
			writeText("Your body keeps changing, but the changes are growing more internal. You feel so on-edge you could cum from just one stroke of your cock, but your dick is completely soft.");
			writeText("The itch, the need to cum, it's coming from your ass now. Your brain doesn't even register your flaccid dick as a source of pleasure anymore.");
			writeText("Every swallow you change further, looking like a pornstar with painted nails and a winking asshole. You roll over, desperate for relief as you deepthroat the dick one last time to try and get out any of the sissifying juice left.");
			writeText("Trying to jerk off does nothing, but just rubbing your fingers along the rim of your ass has you trembling. You feel... enhanced. Aimless tingling running through your nerves.");
			writeSpeech("player", "", "Need... Need to cum~...");
			writeBig("images/gummy/research1-3.gif");
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
			tempScene = "vault";
			writeSpeech("boss", "", data.player.fName+"~? How's the milking going?");
			writeBig("images/gummy/research2-1.gif");
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
			writeBig("images/gummy/research2-2.gif");
			writeSpeech("player", "", "Yes! Yes! Yesyesyes~!");
			writeSpeech("boss", "", "Now you know the rules. Don't waste any cum, alright?");
			writeText("But you can't hear her, nor do you care. You have what you need now.");
			writeBig("images/gummy/research2-3.gif");
			writeText("This is your life now, a sissy cum fountain made to be used.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "playlistResearch1": {
			tempScene = "vault";
			writeText("The video begins, the usual porn-site logo playing before impossibly complex sigils begin rapidly flashing black against a white background. They fill the screen, then your peripheral vision, then everything is black.");
			writeText("Thumping base music fills the... Room? You can't even feel the floor beneath you anymore. You try to move, only to feel soft blankets underneath you. The music grows louder. A woman is singing, but the words are out of focus. Trying to focus on anything fails, the voice will do that for you. ");
			writeText("THE 'SELF' YOU HAD IS GOING AWAY NOW");
			writeText("TO BE REPLACED WITH");
			writeText("SOMETHING BETTER");
			writeBig("images/playlist/1.gif");
			writeText("A BRAND NEW BODY");
			writeText("THAT MATCHES HOW YOU FEEL INSIDE");
			writeBig("images/playlist/2.gif");
			writeText("AND MAKES YOUR INSIDES FEEL");
			writeText("AMAZING ");
			writeBig("images/playlist/3.gif");
			writeText("YOU CANNOT MAKE IT STOP, YOUR TRUE SELF IS IN CONTROL NOW");
			writeText("NEVER FINISH");
			writeBig("images/playlist/4.gif");
			writeText("NO RELEASE");
			writeText("WHAT YOU DESERVE");
			writeBig("images/playlist/5.gif");
			writeText("IS BETTER THAN CUMMING");
			writeText("YOUR LIFE IS THE DREAM, THIS IS WHAT YOU SEE WHEN YOU");
			writeText("<b>WAKE UP</b>");
			break;
		}
		case "toolkitResearch1": {
			tempScene = "vault";
			writeText("You unclasp the locks on the toolkit. Inside are several different fliers, a large bottle of skin cream, a girl's sweater, and some yoga pants. The fliers get progressively more lewd, starting with women in fashionable outfits and ending with...");
			writeText("Something about this feels wrong, like you're skipping a step. Everything feels hazy as it feels like your body is on autopilot.");
			writeText("You disrobe yourself and squirt some of the cream onto your hand.");
			writeText("A faint part of your mind says to hold on, to figure out what is going on. Another, much louder part of your mind, probably scientific curiosity, pushes you forwards.");
			writeText("You rub the cream into your skin, it tingles. Everywhere it touches feels smooth. Once your finished your whole body is tingling and shivering and you fall over. How clumsy!");
			writeText("As you stand up and look back over yourself, your skin is now completely smooth and hairless. The fliers lay on the floor in a clump, you don't need them anymore.");
			writeText("<i>Still not finished.</i>");
			writeText("You put on the yoga pants and the sweater, they fit perfectly and relax on a nice soft bed.");
			writeBig("images/toolkit/research1-1.gif");
			writeText("You start stroking yourself, nice and slowly. You feel on edge already.");
			writeBig("images/toolkit/research1-2.gif");
			writeText("Already you're cumming, it feels so much thicker than normal. You can barely keep your hands on yourself, it feels like you could cum without touching your cock.");
			writeText("<i>Still not finished.</i>");
			writeText("You keep stroking and rubbing yourself, and you just keep cumming. Some part of you, deep inside, feels like it's getting bigger and stronger, while the rest of your body feels like it's getting weaker and softer.");
			writeBig("images/toolkit/research1-3.gif");
			writeText("<i>Good job.</i>");
			writeText("You snap to, coming out of your daze. You're you again.");
			writeText("You clean yourself off and switch back to our normal clothes. They feel... More loose.");
			break;
		}
		case "toolkitResearch2": {
			tempScene = "vault";
			writeText("You unclasp the locks on the toolkit. Inside are a bra, some panties, a few wigs, a soft-looking blouse, and a bottle of wine.");
			writeText("You don't feel the same impulsive autopilot you did before. Instead, looking at the contents of the kit, you feel like you're staring off the edge of a cliff. A voice in your mind screams. 'Jump!' 'Jump!'");
			writeText("So you do. You down the wine, it tastes fruity. Your skin tingles like it did before, and now everything around you is slightly blurry. The wine must be very fast acting.");
			writeText("You take the underwear out of the kit. You already have girly skin, it might be fun to see how it feels.");
			writeText("You slide on the bra and the panties, they feel really nice. Everything feels itchy for a moment, but you know better than to scratch! You take a seat on the bed and wait for it to pass, and it does.");
			writeBig("images/toolkit/research2-1.gif");
			writeText("Your cock looks so cute in the panties... And this bra makes your chest look big. Didn't you have a normal-looking chest before?");
			writeText("You rub your little cock through your panties. They're really nice, but it just doesn't feel... Right.");
			writeText("<i>Still not finished.</i>");
			writeText("And then the itching comes back, much stronger. It's so bad, and it doesn't go away! It's right below your navel, and pressing down on your tummy only makes it itch more!");
			writeText("Maybe something in the toolkit will help! You put on the blouse, nothing. You put on the wig, it makes you feel pretty, but now's not the time! You pull of the panties. The itching comes by in pulses, every time it crescendos it feels like you desperately need to masturbate.");
			writeText("You start trying to jerk yourself off, but it doesn't work. You can't get an erection with all this itching!");
			writeText("You try to drink more wine, but the bottle is empty! You press it to your lips, and you don't know why, but you start slobbering all over the bottle. How inappropriate! But, you're desperate, and with desperation comes ideas.");
			writeText("You set the bottle on the floor, it's really tough and solid, and squat over it.");
			writeText("You press your little butthole against the neck of the bottle, and it starts to slide into you. The itching is really bad, you can't hold back anymore!");
			writeText("And then the bottle bumps into something. Your body shivers, your little pecker jumps, and you can't hold back a sigh of relief. The itching finally weakens and you feel so... <i>Nice</i>...");
			writeText("<i>Still not finished.</i>");
			writeBig("images/toolkit/research2-2.gif");
			writeText("Whenever you start to lift yourself off the bottle, the itching comes back. But whenever you thrust yourself back down, the relief washes over you again.");
			writeText("You start going faster. Shallow thrusts, but the thing you're bumping into feels like it keeps getting bigger. The itching gets worse whenever it comes back, but the relief feels so good...");
			writeBig("images/toolkit/research2-3.gif");
			writeText("Part of you is aware that your pecker is squirting, but that doesn't matter. The itching, and the relief. That's all that's on your mind. You keep going, and your pecker keeps squirting. It's squirting alot! And just when it stops, it starts squirting again!");
			writeText("Your legs shake, you can't keep yourself up anymore. Eventually, you need to give up and fall backwards, and you push the bottle out of yourself.");
			writeText("<i>Good job.</i>");
			writeText("You snap to, coming out of your daze. You're you again.");
			writeText("Quickly you grab your pecker, it feels good to touch again, although a bit lacking in size compared to before.");
			writeText("You look undeniably feminine now, but you put your clothes back on and leave. It might be a bad idea to come back here.");
			break;
		}
		case "toolkitResearch3": {
			tempScene = "vault";
			writeText("With shaking hands you unclasp the locks on the toolkit, telling yourself this will be the last time. Inside is...");
			writeText("Nothing.");
			writeText("But there can't be nothing! You aren't done yet! You almost want to cry, until you feel a hand on your shoulder.");
			writeText("There's a man in the room with you, several in fact! They all look like they want to be your friend, and they all look... So...");
			writeText("They're all naked from the waist down, and all have real dicks. Much larger than yours. You can't help yourself, it's rude to do this without introducing yourself, but they don't seem to mind as you get on your knees.");
			writeBig("images/toolkit/research3-1.gif");
			writeText("You stroke the big, manly dick in front of you. Everyone is smiling, you must be doing it right! They have gifts, pretty lingerie, that must be why the toolbox was empty!");
			writeText("You put on some of the clothes, but the one in front of you seems sad that you stopped. The itching comes back again, and you let out a pretty giggle as you have an idea.");
			writeText("...");
			writeBig("images/toolkit/research3-2.gif");
			writeText("You can't help but squeal as he fucks you, as he pumps his big dick inside of you. There's no more itching, just the nice feeling of relief whenever he squishes your big bitch button with his dick.");
			writeText("You keep squirting onto the sheets! But you promise to lick it clean after, so they aren't mad.");
			writeText("Once the one inside you cums you feel the itching again, spreading throughout your body. But you feel like you can ignore it since it'll be satisfied again soon. All the other helpers want you to try on clothes too!");
			writeText("...");
			writeBig("images/toolkit/research3-3.gif");
			writeText("You're having a lot of fun with your new helpers. Some really mean lady keeps buzzing her voice in the room, but you have your helpers to protect you if she tries to punish you.");
			writeText("<i>Still not finished.</i>");
			writeText("Still not finished! It keeps repeating in your head. Will it ever say 'good job' again? You hope not.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "dustResearch1": {
			tempScene = "vault";
			writeText("Bimbo dust, not exactly too subtle of a codename. You unscrew the container's top to get some for 'testing' purposes. Really you just put on a show of examining it under a microscope for awhile to avoid suspicion. Once you're satisfied you sneak a small amount into an empty container in your pocket, put the rest back, and you're on your merry way.");
			writeText("With a substance like this you can't mess around too much. The powder affects women immediately, but with men it has a much more delayed effect. You'd need to be breathing it in for a few minutes to start seriously be dropping IQ points, but it'll still hamper your wit in subtle ways before then.");
			writeText("You head back to your office and start hatching a plan. First up, practice makes perfect, so you need a guinea pig.");
			writeSpeech("assistant", "", "You alright? You keep staring over at me. Plus, it's pretty weird for you to suggest we do paperwork together. Usually you just dump it on me.");
			writeSpeech("player", "", "Whaaat? No. I just wanted to lighten your load a little.");
			writeSpeech("assistant", "", "... Are you fucked in the head? Am I fucked in the head? What was the protocol... Bodysnatchers, I think it was?");
			writeSpeech("player", "", "Alright fine. bossL's on my ass about how many research logs I'm doing, asking questions about where I'm finding the free time.");
			writeSpeech("assistant", "", "Ah, yeah she's a real... Real meanie... Heehee... Whoa, that was weird. Hey, you smell something?");
			writeSpeech("player", "", "Nope. How do you feel?");
			writeSpeech("assistant", "", "You're really weird today boss. Maybe... Whoa, maybe you like, like me!<br>Haha! My boss has a crush on me!");
			writeText("The small amount of dust in the air has already filtered out, you should be fine. assistantF however is starting to show signs of a lower intelligence.");
			writeSpeech("assistant", "", "Ah, sorry, I guess I'm being the meanie now. It's okay to like whoever you want boss!");
			writeText("You stand up and walk to her desk, she blushes and titters to herself.");
			writeSpeech("player", "", "You should make it up to me, don't you think?");
			writeSpeech("assistant", "", "Gosh, boss. You're really tall today... Mmm, it's really warm in here too. I wanna cum!");
			writeText("She starts peeling her clothes off in the middle of the office.");
			writeSpeech("player", "", "Huh. Stronger than I thought. Or maybe you've just got a really weak will.");
			writeSpeech("assistant", "", "Hey, be nice or I won't let you watch me!");
			writeSpeech("player", "", "Sorry. Please, go ahead. You don't mind if I get comfortable, do you?");
			writeSpeech("assistant", "", "Go ahead! Hey, maybe we can both-<br>Oh wow! Is that your dick?");
			writeSpeech("player", "", "Go ahead, enjoy yourself.");
			writeSpeech("assistant", "", "Yay~!");
			writeBig("images/dust/dustResearch1.gif");
			writeText("While she takes a moment to enjoy herself with your dick, you take a moment to try and focus.");
			writeText("The dust is almost certainly affecting you, but the effects seem manageable. You could probably just get head with any other artifact, the main advantage of the dust is what it does, the disempowerment. Once it's worn off you'll have the opportunity to use it again on another target.");
			break;
		}
		case "dustResearch2": {
			tempScene = "vault";
			writeText("You jump through the hoops of smuggling more of the dust out. Sneaking any thing out of the dark vault is tough, even with the reprehensive bracelet. Luckily your tests are a good excuse for why the bag is slightly lighter when you return it to containment.");
			writeText("...");
			writeSpeech("boss", "", "And so, if I'm understanding you right, there's been a containment breach?");
			writeSpeech("player", "", "Maybe. It's an artifact that removes chunks of memory, specifically basic, obvious facts. I'm trying to be thorough-");
			writeSpeech("boss", "", "For once.");
			writeSpeech("player", "", "-and figure out if you're being affected.");
			writeText("You spread the dust through bossL's office a bit ago, it should be taking effect soon.");
			writeSpeech("boss", "", "So what, you wanna test if I remember how to brush my teeth? Why are we not just using the status quo-yo to undo the effects? Wait, what even is this artifact named? I don't remember seeing the file of anything like that.");
			writeSpeech("player", "", "Uh, it's uh... The Gemini Loop?");
			writeSpeech("boss", "", "Why would we codename a memory erasing artifact that? That's, like, super fucking stupid. God, why is it so hot in here?");
			writeSpeech("player", "", "<i>Thank god, it's finally getting to her. </i>Hey, overheating is a side effect of the artifact. Maybe we should just do some tests-");
			writeSpeech("boss", "", "No way. Tests sound hard. Wait, I think I remember something. There's a button somewhere on my desk that calls in a fireteam, where-");
			writeSpeech("player", "", "Nonono, no need for that. Listen, it's really easy. Just take your top off real quick.");
			writeSpeech("boss", "", "Why would I... Fuck, my head hurts really bad. Where're my asp... Where're my head hurty pills?");
			writeSpeech("player", "", "Just don't think to hard, you'll be totally fine. I bet your shirt feels really tight.");
			writeSpeech("boss", "", "I guess... Hold on, I see what you're doing here. You're just trying to see my tits! Well, joke's on you, I wanted to take my shirt off. Bet you thought you'd outsmarted me, but you're just a dummy!");
			writeText("It seems like she's still focused on belittling you, even with her IQ in the double digits and her vocabulary being shredded in the garbage disposal.");
			writeSpeech("player", "", "Aw man, you got me! You won't punish me, will you?");
			writeSpeech("boss", "", "Hehe, I'm gonna! Now, where did I keep my gun...");
			writeSpeech("player", "", "Wait, what? You aren't going to punish me with your tits like all the other bosses?");
			writeSpeech("boss", "", "Wh- Of course I am! I'm the best boss, so I'll... I'm... You think I'm a good boss, right?");
			writeText("Her mood is swinging, the dust might be affecting that too. Or maybe she's naturally like this.");
			writeSpeech("player", "", "Well, I dunno...");
			writeSpeech("boss", "", "Hey, I try way harder than everybody else! I keep everyone alive, except the bad ones I mean. I'll prove it!");
			writeText("...");
			writeBig("images/dust/dustResearch2-1.gif");
			writeSpeech("boss", "", "See! My boobs are way better than anyone else's, everyone says so!");
			writeSpeech("player", "", "Nnn... Yeah, you're right... They really are the best.");
			writeSpeech("boss", "", "Yep!! They're really sensitive though, I even came once just from rubbing my boobs. It was really fun, I was in my room watching, uh...");
			writeSpeech("player", "", "Faster, gonna cum soon.");
			writeSpeech("boss", "", "Oh! Ooh, I haven't had anyone cum on me in a while. It was a bit dissapointing last time, so-");
			writeBig("images/dust/dustResearch2-2.gif");
			writeSpeech("boss", "", "Ah! You're spurting it all over me! What a mess...");
			writeSpeech("player", "", "Nnngh... Well, you know how to clean it up, right?");
			writeText("Her brow furrows as she thinks about it really, really hard.");
			writeSpeech("boss", "", "...With my gun?");
			writeSpeech("player", "", "No, dummy, you scoop it up on your fingers and lick it up. You're like, such a-");
			writeText("You stop yourself mid-word as bossF starts eating up your 'very salty, but kinda yummy' cum. The dust is affecting you pretty significantly now. You try some mental math, long division is much slower than normal.");
			writeSpeech("player", "", "I've, uh, gotta go. I think I'm getting sleepy.");
			writeSpeech("boss", "", "'Kay! If wanna play again I'll let you know.");
			writeText("You leave the office and get some fresh air. Your mind starts to clear up, but the effects are subtle and slower to fade than last time. Another bit of fun with the dust could turn out dangerously if this keeps up.");
			break;
		}
		case "dustResearch3": {
			tempScene = "vault";
			writeSpeech("player", "", "Alright. Now, how to use this...");
			writeText("You set down the container of dust on your desk. Your brain feels a bit foggy.");
			writeSpeech("player", "", "Maybe I'm being affected more than I thought... I'd better go get some air.");
			writeText("...");
			writeText("You walk stride back into your office after a lovely head-clearing walk around the indoor track.");
			writeSpeech("player", "", "Hey, assistantF, I could really go for a-");
			writeBig("images/dust/dustResearch3-1.jpg");
			writeSpeech("assistant", "", "Welcome back! Mmm... I really missed you...");
			writeSpeech("player", "", "Why are you... Wait, shit. Oh no...");
			writeText("You walk up to your desk and find the small makeshift container of dust fell over... Right next to an air vent.");
			writeBig("images/dust/dustResearch3-2.jpg");
			writeSpeech("assistant", "", "Mmm... I really hate this outfit, how's a good girl like me supposed to get off when I can't even rub my pussy during work?");
			writeSpeech("player", "", "Shit... assistantF! Quit masturbating and focus for a second. Listen, don't panic, but I think there's been a containment breach of a dark vault artifact.");
			writeSpeech("assistant", "", "Heehee! You're so funny! Whenever I'm around you I always feel so warm and fuzzy, boss!");
			writeText("She's useless. Panic overtakes you as you rush out of your office. How far has the dust spread? How long do you have before it starts to turn you stupid too?");
			writeSpeech("boss", "", "playerL!");
			writeSpeech("player", "", "Oh thank god...");
			writeText("You sigh in relief, perhaps the first time you've reacted that way to bossL's shouting, as you turn around to face her.");
			writeSpeech("player", "", "Listen, there's been a contain-Fuck.");
			writeBig("images/dust/dustResearch3-3.jpg");
			writeSpeech("boss", "", "Whoa, that's just, like, what I was gonna ask you to do! That's so crazy, we're totally on the same wavel... Wave... Thingy!");
			writeBig("images/dust/dustResearch3-4.jpg");
			writeSpeech("boss", "", "I feel really funny again, you'll help me out right? I'll, like, be totally helpless unless you put your fat cock inside me!");
			writeSpeech("player", "", "Uh, sorry! Life or death situation here!");
			writeText("You sprint away as bossL starts jilling off.");
			writeText("...");
			writeSpeech("player", "", "Fuck. Fuck fuck fuck. The exits are sealed, nowhere for the dust to go...");
			writeText("Time is running out. If the dust can't be purged from the building then everyone inside, you included, will have every IQ point drained out of them.");
			writeText("With only one option left you head for the main elevator and hit the button for the top floor.");
			writeText("...");
			writeText("You enter the office of chairF chairL, the overseer and head chairwoman of Animaly Vault. She's had a plan for every containment breach and disaster that has befallen this company. You push open the door to her office, grateful to see her focused on something other than sex as she stares at a portrait hanging from the wall. The rings on each of her finger are glowing bright lights in a rainbow of colors. With a snap of her fingers, reality is rewritten.");
			writeText("Changing the painting to one of a nude, busty woman. Mrs. chairL giggles to herself at her work, before she snaps again and she's suddenly naked.");
			writeSpeech("chair", "", "Hehe... Oh, hiya! You're, umm... I forgot. Hey, do you like it? Can you believe I wanted all these dumb boring pictures when I could have been using these rings to decorate?");
			writeSpeech("player", "", "No... Please, you need to snap out of it Mrs. chairL, the vault needs you!");
			writeSpeech("chair", "", "Jeez, you're so mean! I worked really hard on these, and you don't like them? I'm gonna have to punish you!");
			writeText("She snaps again, using the phenomenal power of rewriting space and time to disintegrate your clothes.");
			writeSpeech("player", "", "I... I don't like... Like, please...");
			writeText("Your brain has begun to seriously fog over, the dust beginning to completely hamper your intel... Your thinky smarts. You titter at nothing in particular over how naked you are as Mrs... Mrs... As your new best friend chairF pushes you down to the ground.");
			writeSpeech("player", "", "Ooh! It's really cold!");
			writeSpeech("chair", "", "Omigosh! Don't worry, I can fix that!");
			writeText("She snaps her fingers again and the floor is warm and cozy. You give her a contented sigh, and then giggle as she starts jerking you off.");
			writeBig("images/dust/dustResearch3-5.gif");
			writeSpeech("chair", "", "Mmm, I forgot what I was gonna do, but I really wanna fuck now!");
			writeSpeech("player", "", "Haha! I forgot too!");
			writeText("...");
			writeBig("images/dust/dustResearch3-6.gif");
			writeText("The dust has spread through the vault. Once the air started clearing chairF felt sad the air felt less funny, so she made more! She's so nice, she made enough for everyone in the entire city too! Now every day is really happy, and everyone gets along!");
			writeText("...");
			writeText("BAD END");
			writeText("Wait, no, this is definitely a good ending! The best, heehee!");
			writeText("But, like, what if this was all a dream? What if you just woke up in the dark vault right now? Whoaaaa! That'd be crazy, right?");
			break;
		}
		case "nymphResearch1" : {
			tempScene = "vault";
			writeText("You step into the room, the door automatically shutting behind you as you carefully keep your gaze low.");
			writeSpeech("player","","Alright... Begin recording research on Dark Vault Artifact A-09-36, AKA the Nymph Mirror.");
			writeText("The staticky hiss of the speaker rings out. Honestly, you'd think the Vault could afford to buy better ones...");
			writeSpeech("assistant","","Acknowledged, and... now recording.");
			writeText("You step up to the mirror, clipboard in hand as you raise your head and examine the decorations around the mirror itself.");
			writeSpeech("player","","What do we know thus far?");
			writeSpeech("assistant","","That the first artifact retrieval specialist was found masturbating over the mirror, transformed into a sexually-voracious woman.");
			writeSpeech("player","","So, like the Exchange Gas?");
			writeSpeech("assistant","","Not quite. It doesn't seem to affect women, and when I say voracious, I mean that the specialist in question was willing to use violence to get him-  Sorry, <i>her</i>self off.");
			writeText("You continue marking down information regarding the mirror and your mental state, nodding along.");
			writeSpeech("player","","There's no noticeable effect when staring at the decorations, so I'll now look into the mirror itself.");
			writeSpeech("assistant","","Understood.");
			writeText("Focusing your attention on the reflective surface, the first thing you note is that it seems to be reflecting the image of a woman standing in a bathroom.");
			writeText("Moving your arms, she clearly mirrors your own movements. On the other hand, though, there don't seem to be any mental effects. You certainly don't <i><b>feel</b></i> any more turned on than usual...");
			writeText("...");
			writeBig("images/nymph/research1-1.gif")
			writeSpeech("player","","<i>F-Fuck...</i>");
			writeText("Your fingers slide gently against your hot, slick pussy as you bite your lip.");
			writeText("It feels <b>incredible</b>, every motion sending ripples of pleasure across your skin as you gasp.");
			writeText("And each time you touch your clit, it's like your entire body is going to lock up in ecstasy...");
			writeText("Gentle, teasing prods quickly change into desperate pawing, your fingers pressing into your cunt as you the warmth in your chest and head leave you dizzy.");
			writeText("The only thing you can think of right now is how you <b>need</b> to finish, how you'll be able to think just fine if you could just hurry up and <i><b>fucking cum...!</b></i>");
			writeBig("images/nymph/research1-2.gif");
			writeText("You keep driving your fingers in deep, rubbing against your insides as you buck your hips against your hand.");
			writeText("Moments later, you feel the climax ripping through your body, your mouth twisted into an O as you moan uncontrollably.");
			writeText("But the orgasm doesn't make you feel any less sensitive - it just makes every single touch <b>so much better</b> as you keep finger-fucking yourself, but it's clear that your hands aren't enough to really finish you off.");
			writeText("Hazily, you see the dildo right beside your leg, and start to reach for it...");
			writeText("...");
			writeText("A sharp, stinging sensation sears across your face as you jolt in place.");
			writeText("You quickly realize that you're standing in front of the mirror now, assistantF standing across from you with her hand moving back to her side.");
			writeSpeech("player","","Did... Did you just slap me?");
			writeSpeech("assistant","","You weren't responding, and...");
			writeText("She looks down, as do you. Sure enough, there's just the barest hint of your chest pushing against your shirt...");
			writeSpeech("player","","Right, the transformative effect...");
			writeSpeech("assistant","","Exactly. According to the retrieval logs, interrupting it causes the effect to be temporary. It should wear off within the hour.");
			writeText("Taking a deep breath, you refocus and start writing on the clipboard.");
			writeSpeech("player","","For the most part, the object is probably safe as long as it's covered and stored.");
			writeSpeech("assistant","","Should we require researchers to work in pairs?");
			writeText("You open your mouth to say yes, but hesitate.");
			writeSpeech("player","","It's fine. Make it a recommendation, but not a requirement.");
			writeSpeech("assistant","","...Alright.");
			writeText("With that, she walks back out of the room, you slowly following behind her.");
			writeText("If you came back here alone, you're not sure you'd be able to look away. You're not even sure you'd want to...");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "nymphResearch2" : {
			tempScene = "vault";
			writeText("The closer you get to the mirror, the more the phantom sensations turn you on. The weight resting on top of the clipboard, the 'research implement' you brought, has your chest feeling tight.");
			writeText("Wasting no time, you set everything down and step forward.");
			writeText("Looking into the mirror reflects back another image of a woman, this time in a bedroom.");
			writeText("She's smiling, and you don't feel that haze overtaking you this time... Not that you'd want it to.");
			writeText("You slowly turn around, feeling a slick sensation between your legs as she- as <i><b>you</b></i> kneel on the bed and feel a weight in your hand.");
			writeText("The tip of the dildo drags along your dripping cunt, but you can feel a pull leading it a little further than that as it prods against your ass.");
			writeText("You hesitate for a moment, but only a moment.");
			writeBig("images/nymph/research2-1.gif");
			writeText("You slowly slide it in and out of your tight hole, the drag of the plastic veins across your insides almost orgasmic all on their own.");
			writeText("You keep driving it in deeper and deeper, faster and faster, your body shuddering with each stroke.");
			writeSpeech("player","","<i>N-Not... enough...</i>");
			writeText("Fucking your ass like this is good, but it's not fast enough, not <i><b>hard</b></i> enough. But given that it's a dildo with a suction cup...");
			writeText("...");
			writeBig("images/nymph/research2-2.gif")
			writeSpeech("player","","Yes, yes, <i>yes...!</i> It's spreading me open...!");
			writeText("You keep bobbing yourself up and down, moans spilling out of your mouth with every motion as you lean your hands onto the bed.");
			writeText("Within seconds, you're taking it balls deep with every bounce down, the sensation of it splitting open your deepest parts keeping you right on the edge of orgasm.");
			writeText("But even while edging, the pleasure seems to keep rising - it keeps getting better with every thrust, but never lets you <i><b>finish.</b></i>");
			writeSpeech("player","","Come on, I'm almost there...!");
			writeText("You pick up even more speed, unable to go any faster as you bounce up and down.");
			writeBig("images/nymph/research2-3.gif");
			writeSpeech("player","","Fuck, <i><b>please...!</b></i> Please, just let me cum, let me cum, <i><b>LET ME CUM!</b></i>");
			writeText("Slamming your hips down, you finally feel it.");
			writeText("Like a bolt of lightning through your entire body, all of the pleasure peaks at once as you arch your back, unable to even scream as the ecstasy sears through your entire body.");
			writeText("The orgasm makes your mind go utterly blank, dropping to your knees in front of the mirror. You don't even have to look down to know your body's fully changed, that same heat searing through you.");
			writeText("Sliding down your ill-fitting pants, your underwear completely soaked through, you quickly grab your 'research implement' and sheathe the fat, plastic cock into your slit with reckless abandon.");
			writeText("Desperate for any kind of release, you moan like a whore as you drive the dildo into your cunt as quickly and roughly as your hands will let you, losing track of time in the ecstasy. You don't know how long it is before assistantF finds you, your fingers not <i>nearly</i> enough to get you off anymore...");
			writeText("...");
			writeBig("images/nymph/research2-4.gif");
			writeSpeech("player","","Oh <b>God YES!</b> Just fucking <i><b>RUIN</b></i> my cunt, stud~!");
			writeText("It's been a few weeks since you were determined to be 'safe' for contact, even if you're still stuck in the Prison Department. They keep sending people in to make sure to keep you distracted after last time.");
			writeText("You're still as smart as ever, so they make sure that you're well-fucked enough that you won't cause a bit of chaos just to break out and get some release.");
			writeText("Every so often, assistantF comes in to test new artifacts on you, but for the most part, the rest of your days are spent fucking yourself stupid with any toys or men the Vault supplies you with.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "vhsResearch1": {
			tempScene = "vault";
			writeText("On the desk in front of you is a somewhat old TV and VCR player - with the yellow and red wires sticking out of the front of a cathode-ray-tube screen, it looks straight out of the early 90s.");
			writeSpeech("player","","Dark Vault Artifact-09-16, formerly A-EB-01... That's the Erotibox designation, isn't it?");
			writeSpeech("assistant","","Yeah. It seems to be a Quasar-model VHS player - the artifact hunter found it in the same room as the Erotibox when they were first retrieved.");
			writeSpeech("player","","And we're assuming that the device was put inside the Erotibox?");
			writeSpeech("assistant","","According to the... <i>statements</i> of the person who owned the home, that's exactly what they did. Now, the VHS player only accepts tapes that have 2D pornographic material recorded on them.");
			writeText("Looking over the files, it looks like the hunter arrived while the device was in use...");
			writeText("You keep reading, saying the more important lines aloud for the sake of the recording.");
			writeSpeech("player","","It induces a state similar to a hypnotic trance in the person who inserted the tape, during which time they experience the events of the tape. Did you requisition one for the test?");
			writeSpeech("assistant","","We're currently converting a few modern 'hentai' animations to VHS  for testing reasons but, in the meantime, we have the same video that the original owner used - according to the Sharpie on the tape, it's called...");
			writeText("assistantF pauses for a moment.");
			writeSpeech("assistant","","...Enjo Kouhai Crossbreeding Assistance, Elven Princess Episode 2. Since it's confirmed to work for the original owner, it seems like as good a starting point as any.");
			writeSpeech("player","","Agreed. In that case, I'll put the tape in now and we'll see the effects...");
			writeText("As you put the tape into the player, you can hear the sound of the old device starting to read the tape as an idle thought goes through your mind.");
			writeSpeech("player","","<i>Did they remember to rewind the tape...?</i>");
			writeText("Before you can ask out loud, though, you suddenly feel very, <b>very</b> tired...");
			writeText("...");
			writeText("When you start to regain your senses, the first thing to come back is hearing. It's a bit faint, but there's the faint, distant sounds of an act you're more than just familiar with.");
			writeText("The low half-grunting, half-growling of a man and the higher, more effeminate squeals of a woman as they fuck as you try to focus.");
			writeText("The first sensation you experience when your sense of touch comes back is the feeling of a pair of hands on your hips - big, strong hands grasping tightly as it hits you.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsIcon.jpg","<i>O-Oh fuck...~!</i>");
			writeBig("images/vhs/research1-1.gif");
			writeText("Waves of pleasure course through you with each thrust, the leftover haze in your mind leaving it just muted enough to make your body feel warmer by the second.");
			writeText("You try to open your mouth to speak, but your lips won't form any sounds but the squeaking moans of a woman getting fucked.");
			writeText("In the back of your mind, you can almost hear something - an unfamiliar voice whispering that you can't change this script...");
			writeText("You can feel his hands roaming around your hips, your back, and your ass - each one getting more and more sensitive to the touch as you let out throaty, whorish moans.");
			writeText("When the man leans forward, his back pressed against yours as he bottoms out in your new, hyper-sensitive pussy, you can feel his tongue brush against your ear.");
			writeBig("images/vhs/research1-3.gif")
			writeSpeech("player","scripts/gamefiles/profiles/vhsIcon.jpg","<i>N-Not there...!</i>");
			writeText("His rough tongue teases against the tips as his hands move to grope your chest, teasing your nipples as he doesn't offer you even a moment of rest from the endless pleasure.");
			writeText("Without a word, he holds you tightly against him and bucks <b>hard</b> into you, your entire body tensing up as the first loud, moaning orgasm spills out of your throat.");
			writeText("Rather than slowing down, he instead speeds up even more, the regular pistoning as reliable as a metronome as he keeps sawing into your most sensitive spots without hesitation.");
			writeText("When his hands tighten around your tits, his tongue pulling away from your tongue, you can hear him hoarsely whisper in your ear,");
			writeSpeech("Man","scripts/gamefiles/none.png","I'm cumming...!");
			writeText("Despite not even having a clear enough mind to answer, you can feel your lips moving:");
			writeSpeech("player","scripts/gamefiles/profiles/vhsIcon.jpg","Inside... Cum inside and <i>knock me up!</i>");
			writeText("Even though you didn't say the words, you can feel something stirring inside of you as you hear them, your stomach feeling <b>so much warmer...!</b>");
			writeText("But it's not even <b>close</b> to as warm as the feeling as he tenses up inside of you, his cock swelling and stretching you out even <b>more</b> as hot, thick cum paints your insides.");
			writeText("It almost feels like your entire head is going to <b>break</b> from the pleasure, your throat locking up and preventing you from crying out in pleasure as you twitch, orgasming <b>hard</b> from just the feeling of his jizz inside of you.");
			writeText("When you're finally done with that orgasm, you can feel his hand gently push some of your hair away, carefully leaning forward to whisper,");
			writeSpeech("Man","scripts/gamefiles/none.png","Are you okay for another round?");
			writeText("His voice is surprisingly kind, his body as still as he can keep it as you feel his cum inside of you.");
			writeText("When you open your mouth to answer, you hesitate... before answering honestly, and hungrily.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsIcon.jpg","Y-Yeah! Keep going~");
			writeBig("images/vhs/research1-2.gif");
			writeText("He keeps sawing into you, the mere weight of his body on top of yours feeling far better than it should.");
			writeText("You can't keep track of time at all, constantly being held at the edge of orgasm by his thrusting until you beg for him to pick up speed.");
			writeText("And each time, he does, making you squirm and squeal underneath his body and cock as time fades away and his second, third, and even <b>sixth</b> load fills up your hungry pussy as you let the bed muffle your moans.");
			writeText("When you feel him start grunting louder, his cock starting to just barely flex inside of you, you know that it's almost time for his last shot - that you'll have lasted long enough in bed to satisfy this total beast.");
			writeText("You're barely holding on to consciousness as he slams his hips against your ass again and again, his cock throbbing inside of you as his seventh load fills you up and he finally pulls out, leaving your sextoy of a pussy feeling empty.");
			writeBig("images/vhs/research1-4.gif")
			writeText("The last vague thought that flows through your mind as you feel his jizz spill out of your cunt, your body tightening in one last orgasm before you pass out, is wondering how wonderful it is to end up so completely fucked stupid...!");
			writeText("...");
			writeSpeech("assistant","","<font size='-2'>-wake?</font>");
			writeText("You groggily open your eyes, the dry processed air of the Dark Vault sending a tingling across your skin.");
			writeSpeech("player","","I'm... awake, yeah. It felt like I was in there for hours... How long was I out?");
			writeText("assistantF just points to the tape-player... which said that it'd only been running for the last 40 seconds.");
			writeSpeech("player","","Well, damn. It dilates your perception of time, I guess.");
			writeText("You shake your head, though your hair feels weirdly different now that you're back in your own body.");
			writeSpeech("player","","...Ah. By the way, make a note about rewinding any tapes before using, since-");
			writeSpeech("assistant","","Since it drops you in mid-way? I already wrote that down.");
			writeText("You pause, looking over the VCR and the screen as it suddenly occurs to you what must've been playing.");
			writeSpeech("player","","It was playing everything on-screen?");
			writeSpeech("assistant","","I could see everything, yes.");
			writeText("There's a moment of silence as assistantF shifts loudly in her chair.");
			writeSpeech("assistant","","If it helps, no audio and visual from the screen got picked up by the cameras or microphones - some sort of anti-piracy measure that was changed by the Erotibox maybe?");
			writeText("You clean your throat, nodding once.");
			writeSpeech("player","","Most likely. Unfortunately, that means that research can't really be done alone, so...");
			writeSpeech("assistant","","Of course. I'll denote that the Artifact requires two researchers at a time.");
			writeSpeech("player","","...");
			writeText("There's a momentary warmth that goes through your body at the thought of that, a phantom sensation leaving a tingling in parts that your body doesn't actually possess...");
			writeText("You could always make assistantF forget what she saw with the Bracelet later but, while it might be a mental effect from the artifact, your heart beats much faster at the thought of her remembering <b>everything</b> she saw on that tape.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "vhsResearch2" : {
			tempScene = "vault";
			writeText("You grab the Utea tape cautiously, rolling it in your hand for a moment as assistantF's staticky voice rings in over the comms.");
			writeSpeech("assistant","","That one might be a bit dangerous...");
			writeSpeech("player","","You could say the same of most Dark Vault artifacts.");
			var vhsScenes = 0;
			var vhsTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('vhs')) {
					vhsTotal += 1;
					if (galleryCheck(galleryArray[i].index) == true && galleryArray[i] != "vhsResearch2") {
						 vhsScenes += 1;
					}
				}
			}
			writeSpeech("assistant","","Fair. Then let's begin DVA-09-16, Test-#"+vhsScenes+". Audio is recording - insert the tape when you're ready, playerF.");
			writeText("You hesitate for a moment, your mind going to the tags on the back... but only a moment.");
			writeText("Sliding the tape in, you take a deep breath and feel very, very tired...");
			writeText("...");
			writeText("This time, you're not dropped into the meat of the video quite as suddenly, though your mind is a bit... hazy.");
			writeText("Thoughts and memories seem to flood your mind, all of them keyed around a young woman... You.");
			writeText("Your thinking starts clearing up the further along you go, hearing about monsters and devils and how only 'Magical Girls' can stop them.");
			writeText("Magical girls like you.");
			writeBig("images/vhs/research2-1.gif");
			writeText("The battles blur together, but you're sure you've been doing it for months.");
			writeText("Transforming into a stronger magical form...");
			writeBig("images/vhs/research2-2.gif");
			writeText("...and saving the day every time.");
			writeText("Almost every time, at least.");
			writeText("Your mind finally completely clears up as you realize exactly why your life had been flashing before your eyes.");
			writeBig("images/vhs/research2-3.gif");
			writeText("Your stomach sinks sharply as warm, slick tendrils crawl along your arms and back, the wet sensation of the creatures breath and tongue making your skin tingle.");
			writeText("You open your mouth to speak, but all that comes out is a shuddering grunt as its tongue sharply wraps around your throat, squeezing just enough to impede speech as it leans in.");
			writeText("Several of the smaller, darker tendrils from its mouth slide across your face, leaving trails of thick spit as its blank, glowing eyes remain unmoving.");

			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","<i>I-It's blind...? So it's using its tongue to see me?</i>");
			writeText("The scientist-part of you can't help but focus on that little, simple fact as the rest of your mind tries its best not to recoil from the sensation of the slimy tendrils gliding across your skin.");
			writeText("You were fast enough to shut your mouth before any of them got in, but a new sensation overrides your thoughts.");
			writeBig("images/vhs/research2-4.gif");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","<b>AH~!</b>");
			writeText("Your back arches suddenly as your all-too-sensitive chest gets carressed by the firm, green tentacles sliding beneath your outfit.");
			writeText("Not even a moment passes before another of the green appendages pushes its way past your lips, smearing the hot, sticky substance that was covering it around the insides of your mouth.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","<i>It's sweet...?</i>");
			writeText("The surprisingly pleasant taste spreads around, your head feeling hazy for a moment... in a surprisingly familiar way. It almost feels like the Lovey Doves, the artifact that put you in a hospital...");
			writeText("An aphrodisiac, your scientist-mind tells you, though the rest of your head is focused on the sensations flooding your body.");
			writeText("But looking down, something much larger and much more imposing catches your focus, your mouth going dry as you see it.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","<i>T-That thing... would absolutely break me~</i>");
			writeText("An impossibly huge, monstrous and violet cock hangs from the creature's hips, as thick as your thigh and nearly as long. It's practically pissing precum, a thin and steady stream running down the shaft.");
			writeText("Even as your attention is held on that, the beast doesn't seem intent on doing nothing.");
			writeText("The same green tendril keeps exploring your mouth, but you feel your entire body pitch forward and twist, feeling weightless as you feel its hot breath against your practically paper-thin clothes.");
			writeText("You barely get a moment to reorient yourself as it pulls the green tentacle from your mouth, leaving it feeling almost disappointingly empty. There's a tearing sound, and the breath of the creature feels even hotter against your bare skin.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","W-Wait, no...! Stop, you can't-!");
			writeBig("images/vhs/research2-5.gif");
			writeText("It teases you for a moment longer, before <b>slamming</b> deep inside.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","<i><b>FUCK~!</b></i>");
			writeText("Your entire body starts shaking and shuddering uncontrollably, your voice betraying you as the thick, viscous aphrodisiac gets spread throughout your pussy, lighting your mind aflame with pleasure.");
			writeText("You can barely remember your duty, cleansing the monster as a magical girl, as you realize its using its tongue to look inside of you.");
			writeText("The smaller, tinier tendrils squirm and tease your insides, leaving you to spasm lightly as it inspects every inch of your insides, looking and tasting for something.");
			writeText("And when it pulls its tongue out, a deep, satisfied growl vibrating the air from its throat, it's clear that it found what it was seeking.");
			writeText("Your womb.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","Oh God...!");
			writeText("Your body pitches backward this time, your vision blurring as you feel its tight grip on your thighs as it slowly presses you down against <b>it.</b>");
			writeBig("images/vhs/research2-6.gif");
			writeText("You try to buck half-heartedly away from it, your breathing getting deep and ragged as the steady stream of precum spilling from its tip has your body <b>screaming</b> to push against it, rather than push away.");
			writeText("It keeps rolling its hips as your chest heaves, his thick head sliding against your cunt and ass as it presses harder and harder each time.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","It won't fit...!");
			writeText("It doesn't understand you, pressing even harder now as your eyes start to widen, your heart racing as, suddenly, you remember something.");
			writeText("A Magical Girl's body is far stronger and more resilient than a normal person's.");
			writeText("That was the last thought before your mind went completely blank with searing pleasure, your throat tightening as your eyes widen, and it <b>happens.</b>");
			writeBig("images/vhs/research2-7.gif");
			writeText("For several seconds, you can't think to move or scream or even <b>think</b> as you stare at the impossible bulge, your body somehow compensating for his massive shaft.");
			writeText("There's no pain, only a twitchy, orgasmic pleasure as you feel that first stream of precum spill into your fucked-open cunt, and you <b>scream</b> in raw ecstasy.");
			writeText("Your vision goes white as he slides his cock back out, your abs shifting visibly as he drags his flared head through your body, an almost gentle cautiousness to his movements as he grips your thighs.");
			writeText("The next thrust isn't even a fraction as forecful, aimed away from your guts... and right at your womb.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","F-Fuck, you're stretching me out so <i><b>good~!</b></i>");
			writeText("The thick head grinds against your most sensitive points time and again, his speed picking up more and more as he realizes he's finally aiming right at your womb - at his <b>seedbed.</b>");
			writeText("More of his precum spills into you, the sticky aphrodisiac leaving you in a near-constant state of orgasm, whorish squeals of pleasure spilling out of your mouth as you relish being used like a cocksleeve.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","More...!");
			writeText("There's no pretending that you're anything but infatuated with this sensation.");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","More, more, <i><b>more!</b></i> Fuck me, stretch me out, and <i><b>FILL ME UP~!</b></i>");
			writeText("For the first time, you're sure he could understand the intent behind your words as his grip tightens around your thighs and he starts rolling his hips more.");
			writeBig("images/vhs/research2-8.gif");
			writeText("Your eyes linger hungrily on the small bulge in your abdomen every time he slams his hips into you, your half-screamed half-moaned shouts of Yes and frantic begging to get filled being nearly as loud as the demon's grunting.");
			writeText("It only seems to be picking up speed, slamming against your womb with every thrust, the hot, slimy precum making you scream in blissful pleasure as you lose yourself in ecstasy...");
			writeText("...");
			writeBig("images/vhs/research2-9.gif");
			writeSpeech("player","scripts/gamefiles/profiles/vhsUtea1.jpg","<i><b>AHN~!</b></i>");
			writeText("Another orgasm rips through your body as even more monstrous cum spills inside you, your throat feeling hoarse from all the cumming.");
			writeText("Your body collapses to the ground after that one, the creature finally spilling enough of its energy into your pussy to tire out, its watery jizz spilling out between your legs as you spasm.");
			writeText("Even as its cock slides out of you, the phantom sensation of it pounding against your womb doesn't go away, your mind too addled with demon cum to be able to think.");
			writeText("You don't even know how long you're laying there before the region turns back into the testing room, or how long it takes for them take you to a hospital bed again.");
			writeText("The only thing you can think about is the feeling of being stretched out and filled up, desperately trying to recapture the sensation of being knocked up by a monster as you cum again and again, losing all mental faculties required to continue working at the Vault.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "vhsResearch" : {
			tempScene = "vault";
			writeText("It seems like some of the 'research materials' for the VHS player have arrived, and they even have a list of tags on the back, written by assistantF if the handwriting is anything to go by...");
			var vhsScenes = 0;
			var vhsTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('vhs')) {
					vhsTotal += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						 vhsScenes += 1;
					}
				}
			}
			if(!galleryCheck("vhsResearch2")){
				writeSpeech("Majuu Jouka Shoujo Utea", "images/vhs/utea.jpg", "Also called Devil Purification Girl Utea - A hentai where the main character is a magical girl that has sex with monsters to purify them. <br>Tag List: Monster, Rape, Mindbreak, Stomach Deformation, Bad End");
				writeFunction("writeEvent('vhsResearch2')", "Put the Utea tape into the VHS player");
				writeText("<br>Of course, you could also put in one of the older tapes, though nothing about them has changed...");
				writeSpeech("Enjo Kouhai, Crossbreeding Assistance", "images/vhs/enjo.jpg", "A hentai where the main character is an elf girl getting impregnated. <br>Tag List: Vanilla, Elf, Creampie");
				writeFunction("writeEvent('vhsResearch1')", "Put the Enjo Kouhai tape into the VHS player");
			}
			else if(vhsScenes == vhsTotal) {
				writeText("Ah, but it doesn't look like any of it is new. Though, you could always put in one of the older tapes...");
				writeSpeech("Enjo Kouhai, Crossbreeding Assistance", "images/vhs/enjo.jpg", "A hentai where the main character is an elf girl getting impregnated. <br>Tag List: Vanilla, Elf, Creampie");
				writeFunction("writeEvent('vhsResearch1')", "Put the Enjo Kouhai tape into the VHS player");
				writeSpeech("Majuu Jouka Shoujo Utea", "images/vhs/utea.jpg", "Also called Devil Purification Girl Utea - A hentai where the main character is a magical girl that has sex with monsters to purify them. <br>Tag List: Monster, Rape, Mindbreak, Stomach Deformation, Bad End");
				writeFunction("writeEvent('vhsResearch2')", "Put the Utea tape into the VHS player");
			}
			break;
		}
		case "dollResearch1": {
			tempScene = "vault";
			writeHTML(`
				t After a short trip to collect a hair, you wrap it around the doll. It vibrates slightly as you tie the knot, and starts to feel warm as though it's generating body heat.
				t Meanwhile, just a few rooms away...
				...
				t It starts with a stiffness in her joints, and though she rolls her shoulders to try and relax her range of movement is smaller than usual. Her heart rate slows, the time between each breath grows longer.
				t As she starts to notice something her mind panics, but her body is relaxing. A smile creeps across her face and her pen falls to her side, rolling along the ground.
				sp assistant; <i>What... What's going on!?</i>
				t Her pussy clenches, suddenly feeling warm. Her nipples are erect and her dry lips feel moistened, like her body is preparing for something... Someone.
				t You walk in through the door and shut it behind you, assistantF is completely motionless in her chair.
				sp assistant; <i>playerF? Thank god, help!<br>I can't talk, he can't hear me... Cmon, realize something's wrong!</i>
				t You pick her up from her chair, she's actually quite easy to position. Any pose you put her into she holds like her joints are locked until you move her again. The process of stripping her goes by in a flash.
				sp assistant; <i>Ghh... Stop posing me... Why am I leaking if my body can't move!?</i>
				t While posing her around is quite fun, the real playtime is only just beginning.
				sp player; I gotta say, you really are a fantastic toy.
				sp assistant; <i>Stop! I'm a <s>human being</s> <b>sex doll</b>! I'm not... A...</i>
				t Her thought process is interrupted as she realizes what went through her mind.
				sp assistant; <i>I... I'm <s>not</s> <b>a</b> sex toy... I'm...</i>
				t Her own inner voice repeats back the wrong words. All the while you're aligning yourself with her hole.
				im images/doll/research1-1.gif
				sp assistant; Nonono, please! Help <b>yourself</b>!
				im images/doll/research1-2.gif
				t Though the rest of her body doesn't move, you can feel her cunt rhythmically clench around you with better technique than assistantF should have. All the while the smile on her face never fades.
				sp assistant; Ffffuck-! He's <s>assaulting</s> <b>masturbating with</b> me! This is <s>rape</s> <b>what I was made for</b>!
				im images/doll/research1-3.gif
				sp assistant; Can't think... Can't... <b>Don't deserve to</b> think anymore...
				...
				t Once the hair on the doll is cut the effect is broken, although the mental conditioning might lead to some interesting dreams for her tonight.
			`);
			break;
		}
		case "dollResearch2": {
			tempScene = "vault";
			writeHTML(`
				t After a short trip to collect a hair, you wrap it around the doll. It vibrates slightly as you tie the know, and starts to feel warm as though it's generating body heat.
				t You head out of the room to go find bossL...
				...
				im images/doll/research2-1.gif
				t Only to find her already in use.
				sp assistant; Ghh... Fucking... Take it, bitch...
				t It seems like assistantF is taking out her frustrations on the very lifelike sex toy she found. Though she can't conciously move her body bossL's tongue moves to stimulate assistantF however she can. And all the while she has a willing smile on her face.
				t assistantF pulls bossL by the hair to mash her cunt against her cunt boss's face, giving her a good hosing of squirt.
				t Despite her vapid, smiling face covered in juices, it's absolutely obvious to you what must be going on in her head.
				sp boss; <s>YOU GOD-DAMNED</s> <b>I am a</b> COCKSUCKER<s>S</s>! I WILL <s>BREAK YOUR FINGERS INTO DUST, BURY YOU ALIVE, AND LAUGH AS YOU TRY TO DIG YOUR WAY OUT WITH EVERY BONE IN YOUR HANDS A SPLINTER</s> <b>lay here and be used</b>!
				t Whatever mental effects the artifact has must be working overdrive to try to break a will like hers.
			`);
			break;
		}
		case "credits": {
			writeBig("scripts/gamefiles/logo.png");
			writeText("The Anomaly Vault was built by the architect NoodleJacuzzi, also responsible for other works. Further foundation was laid by Swallows999 and Captain Cryptogreek, who pioneered the research of artifacts before you. However the funding  of the vault comes from a council veiled in shadow, ever aware of your efforts.");
			writeText("Above chairwoman chairF, they decide the vault's purpose and fate. Bear these names close to your heart, for they are the ones who are truly in control here. Swallows999, O Xy Enkin, Joshua Ingram, Robbie, CaptainMontana, andres mejia, Badaxe, Carlos, ChronosEdge, Colin E, Dkells, dragoon48, Dustin Leichsenring, Filament, G, Hi There, J_C_L, jack spencer, Jesse Greene, Jinouga, Keith, Macarga, Marc Maldon, Marco Wassmer, Negativatron, Ramsey Bisher, Richard, Scal, Skyrim mod lvr, StormSight, Taylor Trout, XxrobothacksxX, 林家豪, Aegil, Alec8686, Alfonso, Angel, Anthony Ewing, Anthony Munso, Ariados, Blaise Fenn, Bonelessunknown, brandon, Bryson, Carlos, Chaaaanon, Charles Morris, ChubbiestThread, Daekash, Daniel Vivette, Danny Nguyen, Darrell Goodman, DarthMalak, ddkre, Debarre Sonny, Devin, dhccpmc, Drashin, Dugelle, Emanuel  Garcia, fireballcreations, Geoff Heimos, GirmusCz, Greg Torres, Grim2011, Gwen Yurick, Harry Brasch, henry grobins, ItsAllOgreNow, I'm a Mitch, Jane, joel larsen, John Lewis, john smith, Johnathan Thornburg, Joshua Melzark, KH dg, Kieron Kow, KVBismarc, l, l1monat, liam paterson, Limitless, Louis Hayes, Magnus, Markus Hansen, Mars, mazterlith, murgatroid99, Muryu, Nathan Martin, Nils Maier, Noah, Nutburger, Phanes, PR0 x THUNDER, qwerty, ranchy sanchy, Reverberations, Riven Drasek, Roy, Scumstango, Sebastian Eckel, ShadowFalls, Simon Rencher, Slomberg, SmolFish, Snaked, stratum, Tanman, Taurus Travon Rashad Lemar Brackin, Trevor, Vincent Madaire-Cullen, Wei, Wild Bill, William Parker, William Richardson, wolfboom, XaiuX, Your Husbando, Z, and 魏.");
			writeText("Their continued support gives aid to the vault. Should they lend their voices, you will hear them here. Their assistance is why you, playerF, are here. Why you found the bracelet. Count your blessings, and...");
			writeTransition("room", "Awaken, saved from repercussion");
			writeSpecial("Stepping out from behind the fourth wall for a moment, this is one of the game's endings! Thank you so much for player, I hope you enjoyed! For the next version I'd really like to replace the names above with a set of messages, so if you're a member of the shadow council above, please contact me if you'd like to write a message to the player here! Otherwise, I hope you enjoy the rest of the game as well. Have you checked the cheat post for prison codes? You can find them on my patreon page (it isn't behind a paywall), with a link to it on the game's IGDB entry, the first page fo the F95zone thread, and in the master index.");
			break;
		}
		default: {
			writeText("You've encountered an error! Please let me know about this, the errorcode is:");
			writeText("writeEvent "+scene);
			break;
		}
	}
	if (data.player.currentScene != 'notebookResearch') {
		console.log('passing time');
		passTime();
	}
	var girl = "pepsimuyo";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == scene) {
			girl = galleryArray[i].girl;
		}
	}
	if (girl != "") {
		console.log('attempting to unlock logbook for '+girl);
		for (i = 0; i < data.story.length; i++) {
			if (data.story[i].index.includes(girl) == true) {
				data.story[i].met = true;
			}
		}
		
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
	if (scene.includes("Ending") == true) {
		writeText("...");
		writeText("The hand of fate moves each piece of the chessboard forwards. One player has taken the lead, and the world shall be bent to their whim.");
		writeText("But one thing still remains. The reprehensive bracelet, ever ready to protect you from consequence. Sleep easy, dream readily, for when you next open your eyes you shall see daylight again.");
		writeFunction("writeEvent('credits')", "But before then, the council that have true reign over the vault shall review the world you've created.");
	}
	else {
		if (scene.includes("credits") == true) {
			data.player.time = "Morning";
		}
		else {
			if (data.player.currentScene == "gallery") {
				writeTransition("gallery", "Finish");
			}
			else {
				writeTransition(tempScene, "Finish");
			}
		}
	}
}

function checkDay() { //For checking for holidays, payday, and for new text messages, alt-2 to close
	var specialEvent = false;
	timeSince = 0;
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
			if (data.player.color.includes('mirror') == true) {
				writeArtifact("mirror");
				if (data.player.color.includes('stopwatch') == true) {
					writeArtifact("stopwatch");
					if (data.player.color.includes('coin') == true) {
						writeArtifact("coin");
						if (data.player.color.includes('shades') == true) {
							writeArtifact("shades");
							if (data.player.color.includes('sign') == true) {
								writeArtifact("sign");
								if (data.player.color.includes('pass') == true) {
									writeArtifact("pass");
									if (data.player.color.includes('charm') == true) {
										writeArtifact("charm");
									}
									else {
										if (timeSince != 1) {
											writeSpeech("assistant", "", "Nothing on the agenda today boss!");
											writeArtifact("charm");
											data.player.color += 'charm';
											timeSince = 1;
										}
									}
								}
								else {
									if (timeSince != 1) {
										writeSpeech("assistant", "", "The latest artifact has arrived, this one's some kinda passcard, like we use for the elevator.");
										writeArtifact("pass");
										data.player.color += 'pass';
										timeSince = 1;
									}
								}
							}
							else {
								if (timeSince != 1) {
									writeSpeech("assistant", "", "Hey, the latest artifact is in. I think.<br>I think they're fucking with us, or there's been a mistake. It's a piece of cardboard and a marker.");
									writeArtifact("sign");
									data.player.color += 'sign';
									timeSince = 1;
								}
							}
						}
						else {
							if (timeSince != 1) {
								writeSpeech("assistant", "", "Hey, we got in a new... Thing. It's a pair of aviators, they're ready for testing.");
								writeArtifact("shades");
								data.player.color += 'shades';
								timeSince = 1;
							}
						}
					}
					else {
						if (timeSince != 1) {
							writeSpeech("assistant", "", "New artifact in, boss! Some old coin from Ancient Greece. Management says 'careful not to spend it in a vending machine'.");
							writeArtifact("coin");
							data.player.color += 'coin';
							timeSince = 1;
						}
					}
				}
				else {
					if (timeSince != 1) {
						writeSpeech("assistant", "", "New artifact in, boss! We've got a stopwatch from Romania, safe to handle.");
						writeArtifact("stopwatch");
						data.player.color += 'stopwatch';
						timeSince = 1;
					}
				}
			}
			else {
				if (timeSince != 1) {
					writeSpeech("assistant", "", "New artifact in, boss! This one's some kind of fancy mirror from England.");
					writeArtifact("mirror");
					data.player.color += 'mirror';
					timeSince = 1;
				}
			}
			if (data.player.color.includes('serum') == true) {
				writeArtifact("serum");
			}
			else {
				if (galleryCheck('braceletResearch5') == true) {
					writeText("There's a note on your desk. It reads 'For the curious researcher. Thanks for a good time.'<br>Beside it is a case of vials of green fluid, with an artifact file next to them.");
					data.player.color += 'serum';
					writeArtifact("serum");
				}
			}
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
				if (galleryCheck('braceletLibrary1') == false) {
					writeFunction("writeEvent('braceletLibrary1')", "Take the bracelet to the library");
				}
				else {
					if (galleryCheck('braceletLibrary2') == false) {
						writeFunction("writeEvent('braceletLibrary2')", "Take the bracelet to the library again");
					}
				}
				if (data.player.color.includes('katyaIntro') == true) {
					for (katyaIndex = 0; katyaIndex < data.story.length; katyaIndex++) {
						if (data.story[katyaIndex].index.includes("sister") == true) {
							data.story[katyaIndex].met = true;
						}
					}
					if (galleryCheck('braceletHome4') == false) {
						writeFunction("writeEvent('braceletHome4')", "sisterF brought some friends over");
					}
					else {
						if (galleryCheck('braceletHome5') == false) {
							writeFunction("writeEvent('braceletHome5')", "sisterF is calling someone, a perfect time to have some fun");
						}
					}
				}
				if (galleryCheck('braceletOutdoor4') == false) {
					writeFunction("writeEvent('braceletOutdoor4')", "Head out to a bar for some fun");
				}
			}
			switch (data.player.artifact2) {
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
				case "charm": {
					if (galleryCheck('charmOutdoor1') == false) {
						writeFunction("writeEvent('charmOutdoor1')", "Test the charm at a local bar");
					}
					break;
				}
				case "coin": {
					if (galleryCheck('coinHome1') == false) {
						writeFunction("writeEvent('coinHome1')", "Flaunt your new 'wealth' in public");
					}
					if (galleryCheck('coinOutdoor1') == false) {
						writeFunction("writeEvent('coinOutdoor1')", "Go buy something with the Midas Coin");
					}
					break;
				}
				case "serum": {
					if (galleryCheck('serumHome1') == false) {
						writeFunction("writeEvent('serumHome1')", roommateF+" is getting getting ready for a date");
					}
					if (data.player.color.includes('katyaIntro') == true) {
						if (galleryCheck('serumHome2') == false) {
							writeFunction("writeEvent('serumHome2')", "Use the serum to have some fun with sisterF");
						}
					}
					break;
				}
				case "shades": {
					if (galleryCheck('shadesHome1') == false) {
						writeFunction("writeEvent('shadesHome1')", "Show off the shades to "+roommateF);
					}
					if (data.player.color.includes('katyaIntro') == true) {
						if (galleryCheck('shadesHome3') == false) {
							writeFunction("writeEvent('shadesHome3')", "Rest while wearing the shades");
						}
					}
					break;
				}
				case "pass": {
					if (galleryCheck('passHome1') == false) {
						writeFunction("writeEvent('passHome1')", "Show off the pass to "+roommateF);
					}
					else {
						if (galleryCheck('passHome2') == false) {
							writeFunction("writeEvent('passHome2')", "Show off the pass to "+roommateF+" again");
						}
					}
					break;
				}
				case "sign": {
					writeFunction("sceneTransition('signPrompt')", "Write a word on the sign.");
					break;
				}
			}
			if (data.player.color.includes('katya') == true) {
				if (data.player.color.includes('katyaIntro') != true) {
					sceneTransition('katyaMeeting');
				}
			}
		}
		break;
	}
}