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
			writeSpeech("Reprehensive Bangle", "scripts/gamefiles/items/reprehensiveBangle.jpg", "Tag List:<br>Unperceived Sex<br>Memory Alteration");
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
			writeSpeech("assistant", "", "Mr. "+data.player.lName+"! Glad you're back. After the fifth attempt management said we should give up on you.");
			writeText("She tosses you a coat and a change of clothes. Looking over yourself, you're wearing what almost resembles a hospital gown.");
			writeText("It's all coming back to you, you grabbed some earings, and...");
			writeBig("images/prologue1.gif");
			writeBig("images/prologue2.gif");
			writeBig("images/prologue3.gif");
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
			writeTransition("gameConsole", "Go back");
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
			writeTransition("playerHouse", "Finish up");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
				writeTransition("playerHouse", "Go back");
			}
			else {
				writePorn();
				writeTransition("laptop", "Go back");
			}
			break;
		}
		case "gallery" : {
			generateGalleryNav();
			writeTransition("playerHouse", "Finish up");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeTransition("playerHouse", "Go back");
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
			writeTransition("playerHouse", "Cancel and leave");
			break;
		}
		//Locations
		case "room": {
			writeBig("scripts/gamefiles/locations/room.jpg");
			switch (data.player.day) {
				case 0: {
					writeText("You're feeling way too tired to do anything right now.");
					writeTransition("newDay", "Go to bed");
					break;
				}
				case 1: {
					writeSpecial("Alright broski, everything after this point is strictly demo. Everything here on out is a placeholder and it'll get axed the first chance I get.");
					writeText("In the morning you'd have the option to either sleep in, allowing you more time to use your artifacts at home, or go to work. Hop on over there so you can get to working with an artifact.");
					writeText("There's no good time to work it in, but there'd also be a wardrobe here where you can change your player image, a journal that acts as the gallery, and an item that'll let you rename the cast.");
					writeTransition("work", "Go to work");
					break;
				}
				default: {
					if (data.player.time == "Morning") {
						writeText("The alarm is going off. Using the bracelet you could always just erase any proof that you skipped work today.");
						writeText("Although if you decide to skip, your ride will leave without you.");
						writeTransition("work", "Get up and head to work.");
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
			switch (data.player.day) {
				case 0: {
					writeText("You're still feeling groggy from the amnestics, you should probably head to bed once you're ready to sleep it off.");
					writeFunction("writeEvent('prologue1')", "Talk to Sophia");
					writeFunction("writeEvent('prologue2')", "Call the office");
					writeTransition("room", "Go to your room");
					break;
				}
				case 1: {
					writeFunction("writeEvent('prologue3')", "Use the bracelet on Veronica");
					writeFunction("writeEvent('prologue4')", "Take the bracelet our into town");
					writeFunction("writeEvent('prologue5')", "Test dreaming with the artifact");
					writeTransition("demo", "Finish the demo");
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
			switch (data.player.day) {
				case 0: {
					break;
				}
				case 1: {
					writeText("Here you can research artifacts or equip them. You'll need to research the artifacts at least once before you can equip them.");
					writeArtifact("bracelet");
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
							writeTransition("home", "Head home");
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
		//Artifacts
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
	switch (scene) {
		case "prologue1": {
			writeSpeech("roommate", "", "Oh hey, feeling better?");
			writeSpeech("player", "", "A little. Anything new with you?");
			writeSpeech("roommate", "", "Hell yeah, I got a date! I'm going out with the home ecc teacher, that blonde girl you met at Tiffany's?");
			writeSpeech("player", "", "Right, right, of course I remember. You both work at uh...");
			writeSpeech("roommate", "", "St. Prince's University.");
			writeSpeech("player", "", "Yeah, that place. Good for you, she's a catch.");
			writeSpeech("roommate", "", "Thanks. You really should get some rest by the way, you still look like you've gone a week without sleep.");
			writeTransition("home", "Go back");
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
			writeTransition("home", "Go back");
			break;
		}
		case "prologue3": {
			writeSpeech("girlfriend", "", "And? What did she say?");
			writeSpeech("roommate", "", "She uh... Um... Nnn...");
			writeSpeech("girlfriend", "", "Hey, are you alright? You sound kind of strange.");
			writeBig("images/bracelet1-1.gif");
			writeSpeech("roommate", "", "Y-yeah, I'm fine. I've just been a bit... B-bit...!");
			writeText(""+data.story[0].fName+" clasps her hand over her mouth as she cums, her legs shaking.");
			writeSpeech("roommate", "", "<i>What the hell is going on? Did I just cum?</i><br>Sorry, I uh-");
			writeSpeech("girlfriend", "", "Don't lie to me, I know what's going on you little slut.");
			writeSpeech("roommate", "", "W-what?");
			writeSpeech("girlfriend", "", "You're jilling off! God, you can't wait until tonight, can you?");
			writeSpeech("roommate", "", "O-oh! Haha! You got me, I'm just thinking of you-");
			writeBig("images/bracelet1-2.gif");
			writeSpeech("roommate", "", "C-cumming! Coming over! Tonight! I just can't focus on anything else!");
			writeSpeech("girlfriend", "", "Well you'd better not tire yourself out before tonight. I've got magic fingers, you'll never be satisfied with anyone else, you hear me?");
			writeSpeech("roommate", "", "N-never be satisfied... With anyone else...");
			writeText("Her eyes roll back as she cums again on your dick.");
			writeSpeech("girlfriend", "", "Well you have fun alright? Love you!");
			writeSpeech("roommate", "", "Lov-");
			writeText("You grab "+data.story[0].fName+"'s phone and throw it aside before grabbing "+data.story[0].fName+" by the hair so you can finish yourself off with her mouth.");
			writeText("...");
			writeSpecial("This is a scene where you use an artifact on your roommate.");
			writeSpecial("Essentially the basic game loop is that you research artifacts at work and then come home to use artifacts to trigger scenes at home. Maximum focus on the content with minimal interruptions.");
			writeTransition("home", "Go home");
			break;
		}
		case "prologue4": {
			writeSpeech("player", "", "Hey, you don't mind if I take this, do you?");
			writeText("You wave the candy bar in front of the cashier's face.");
			writeSpeech("player", "", "No response, alright. Hey, you hungry?");
			writeText("You lob another piece of candy at the cashier's head, and it bounces off.");
			writeSpeech("Cashier", "scripts/gamefiles/none.png", "Ow, What the hell? <br>Fucking ghosts...");
			writeText("Well, this has been fun. Messing with a cashier for two hours to convince them the store is haunted by an asshole ghost is certainly a unique experience.");
			writeText("You decide to head home, the hotter cashier isn't working today.");
			writeSpecial("This is a scene where you take the artifact out on the town. In a full release, these would be the scenes where you experiment with the artifacts in exotic locales ranging from beaches to yoga studios.");
			writeSpecial("Obviously in the full release these would be much more in-depth and would have actual content.");
			writeTransition("home", "Go home");
			break;
		}
		case "prologue5": {
			writeText("Visions float through your mind, spinning through your psyche.");
			writeBig("images/braceletDream.gif");
			writeText("Familiar faces you've never seen before writhe in barely contained pleasure. The bracelet is on your arm and you're taking advantage of the women who spurned you.");
			writeText("But at the end of a long day you begin your walk home. As you're crossing the street a car doesn't hit the brakes and is headed right for you.");
			writeText("Too late, you realize you'd been invisible to the world.");
			writeSpecial("Each artifact you can take home will have a dream like this one, usually ending in an explanation of what happened to a previous holder of the artifact. If you've already triggered the dream then sleeping through the night is skipped to avoid wasting time.");
			writeSpecial("Dream scenes will be a lot more erotic and detailed in a full release. ");
			writeTransition("home", "Go home");
			break;
		}
		default: {
			writeText("This event is not yet finished, but do not fret! You've still unlocked the ability to view this scene later via the gallery. In a future version, once this scene has been completed you'll be able to watch this scene from there so long as you have a laptop.");
			writeTransition(data.player.currentScene, "Finish");
			break;
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
		//writeTransition("playerHouse", "Skip the event");
	}
	if (specialEvent == false) {
		console.log("No events found");
		writeTransition("room", "Get out of bed");
	}
}