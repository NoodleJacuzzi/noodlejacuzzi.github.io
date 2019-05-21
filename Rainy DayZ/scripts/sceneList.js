function writeScene(scene) {
	switch(scene) {
		case "start" : {
			updateBody(0);
			writeBig("images/zombie/player.jpg");
			document.getElementById('output').innerHTML += `
				<p>Your name is <input type="text" id="nameSubmission" value="Emily"></p>
			`;
			document.getElementById('nameSubmission').defaultValue = data.story.name;
			writeText("Rainy DayZ is a game created by Noodle Jacuzzi. You can find and keep up with all of my work at my master index here:<br>https://noodlejacuzzi.github.io/index.html");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry shemales, you play as a young woman searching for supplies to survive.");
			writeText("Exploration is encouraged since there's no reward for returning to the safehouse with the supplies. Try to get all of the events if you can.");
			writeText("Successful survival in this game is easy, and also not the point. The goal here is to sabotage this woman's efforts, and leave her to be assaulted by zombies of varying shapes and sizes. This game features a heavy emphasis on shemale content, and includes some rimming content.");
			writeText("In addition, this game also features a dog zombie. To view his scenes (which are not yet finished) you must deliberately wound yourself, go to the forest, and either leave your weapon behind or have 0 stamina when you encounter him. If you dislike this sort of content, you can avoid it easily by doing anything other than what I've just described. To avoid any potential legal troubles, this dog is actually a woman in a very, very convincing dog suit. If you want absolutely no part in this at all, you can click the buttons below to disable some of the more contentious content.");
			writeText("This game autosaves whenever you click on a choice, and will load that save even if you refresh the page.");
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
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="restartButton()">
					Delete all save data
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="saveFile()">
					Export Save Data
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="loadFile()">
					Import Save Data
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="changeName('player')">
					Proceed
				</p>
			`;
			break;
		}
		case "mainMenu": {
			if (data.zombieData.scene != "") {
				writeTransition("zombieResume", "Resume playing");
			}
			writeTransition("zombieStart", "Start a new game");
			writeTransition("zombieGallery", "View the gallery");
			if (data.story.zombieGame > 1) {
				writeTransition("zombieGuide", "Read the strategy guide");
			}
			writeTransition("start", "Back to the start screen");
			document.getElementById('output').innerHTML += `
				<p>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='purchase()'>Submit</p>
			`;
			writeTransition("bodySwap", "Change character image");
			break;
		}
		case "bodySwap": {
			document.getElementById('output').innerHTML += `
				<img id="playerImg" class="bigPicture" src="images/zombie/basic.jpg">
			`;
			updateBody(data.story.bodytype);
			if (data.bodytypes.basic == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(0)'>Basic</p>
				`;
			}
			if (data.bodytypes.sub == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(1)'>Aya</p>
				`;
			}
			if (data.bodytypes.dom1 == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(2)'>Macho</p>
				`;
			}
			if (data.bodytypes.dom2 == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(3)'>Sissy</p>
				`;
			}
			if (data.bodytypes.dom3 == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(4)'>Shemale</p>
				`;
			}
			if (data.bodytypes.jean == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(5)'>Jean</p>
				`;
			}
			if (data.bodytypes.lisa == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(6)'>Lisa</p>
				`;
			}
			if (data.bodytypes.riley == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(7)'>Riley</p>
				`;
			}
			if (data.bodytypes.liz == true) {
				document.getElementById('output').innerHTML += `
					<p class='choiceText' onclick='updateBody(8)'>Elizabeth</p>
				`;
			}
			writeTransition("mainMenu", "Go back");
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
			writeTransition("mainMenu", "Back to the main menu");
			break;
		}
		case "zombieGallery": {
			generateZombieGallery();
			writeTransition("mainMenu", "Back to the main menu");
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
				document.getElementById('output').innerHTML += `
					<img id="playerImg" class="bigPicture" src="images/zombie/basic.jpg">
				`;
				updateBody(data.story.bodytype);
				writeText("It's cloudy and overcast today, just like it's been for months now. Your stockpile of food has run dry, so you need to find some more before you get hungry. Not only that, but with the weather getting worse you'll need to find enough to keep you fed for at least a few days.");
				writeText("You remember there was a convenience store in the city. At this point it's your only hope. You have a medical kit strapped to your side in case of emergencies, and a large wooden bat in your hands in case you see one of <b>them</b>.");
				writeSpeech(data.story.name, "zombie", "<i>It's time to get moving.</i>");
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
			writeTransition("mainMenu", "Go back home.");
		}
	}
}

function writeZombieEvent(n) {
	document.getElementById('output').innerHTML = '';
	switch (n) {
		case "basic1": {
			writeText("You're so exhausted you barely even register the feeling as the zombie pushes you down into a puddle of running rainwater. Try as you might, you don't have the strength to resist as she rips your pants off.");
			writeSpeech(data.story.name, "zombie", "No! Please, stop!");
			writeText("She either can't understand you or doesn't care, either way she doesn't stop as she rips off your panties. She tries to thrust right in but is stopped as her dick is just way too big to fit inside of you. You feel relieved for almost a second until she starts jacking herself off just inches away from the entrance to your pussy.");
			writeText("After a few seconds she spurts out a dollop of thick precum onto your labia and lets go of her dick. You try to squirm away, but she grabs you by the throat with one hand as she starts rubbing her jizz into your skin with the other.");
			writeText("Her fingers thrust inside of you, covering the entrance to your vagina with her infectious dickslime. Everywhere it touches you feel your skin grow puffy and sensitive. For as disgusting as you feel right now, her fingers feel really, really <b>good</b>.");
			writeText("But before you get the chance to start enjoying the sensations they've already stopped. She pulls the hand that was just fingerfucking you and puts it around your neck as she positions the head of her dick against your womanhood.");
			writeSpeech(data.story.name, "zombie", "No...");
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
			writeSpeech(data.story.name, "zombie", "No, wait! You can use my mouth instead!");
			writeText("You open your mouth and wiggle your tongue around to tempt her, and it actually works. She lets you sit back up and presses her dick against your lips again.");
			writeText("You lay some gentle kisses onto her head and stroke her shaft with your hand. Quickly she takes a sharp breath and her balls tighten. Seeing the signs, you point her dick away from you and start licking the shaft. Her sweat makes your tongue tingle, like a sour candy as she pumps a glob of precum onto the floor.");
			writeText("The room is quickly filled with a heady scent. The precum is thick and cloudy, but your attention is pulled away from it by the zombie growling.");
			writeText("She obviously doesn't approve of the waste, and grabs you by the hair and forces her dick into your mouth. Out of fear of what she'll do to you if you don't comply, you make sure she can't feel your teeth.");
			writeText("The sensation is overwhelming, her sweat is all at once salty, bitter, and sweet like honey. She delivers some shallow thrusts punching the back of your throat but never pushes past it. With a grunt, it becomes clear that she wants you to taste this next load.");
			writeText("A dollop of precum is pumped out, this time directly onto your tongue. Your mouth feels like it's going numb, tingling like you just chomped on a giant mint. You know you should hold it in your mouth and spit it out as soon as you can, but...");
			writeSpeech(data.story.name, "zombie", "*Gulp*");
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
			writeSpeech(data.story.name, "zombie", "Oh FUCK! YES. YES. YES.");
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
			writeSpeech(data.story.name, "zombie", "Fuck.");
			writeText("There's an unmistakable hunger in their eyes. In every direction, they block all avenues of escape.");
			writeSpeech(data.story.name, "zombie", "Please, no!");
			writeText("...");
			writeBig("images/zombie/horde1.gif");
			writeSpeech(data.story.name, "zombie", "Fuck! Yes!");
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
			writeBig("images/zombie/siren1.gif");
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
			writeSpeech(data.story.name, "zombie", "Nnnn!");
			writeText("They're exploring across your body. Wherever they touch feels like a mild coursing electricity.");
			writeText("You try to struggle, to roll off the bed, to do anything, but to no avail.");
			writeText("The panic within you burns even brighter as you can feel the sensation of one of them getting through your underwear, tiny feelers rubbing against the outer lips of your folds.");
			writeText("The creatures continue crawling upon your skin, coating your body with an aphrodisiac meant to ensure compliance once the paralysis has worn off. Against your will the sensations, the teasing of the creatures has caused you to grow wet.");
			writeText("Entirely working off instinct, this is the signal to the worm at the entrance to your pussy to push forwards in search of a host.");
			writeSpeech(data.story.name, "zombie", "NNNN-!");
			writeText("No one hears your screams as the worm inches inside of you. The aphrodisiac coating it's body makes the sensations feel incredible in combination to the worm's 2-inch thickness.");
			writeText("You suck in a breath trying to focus through the sensation of lightning coursing through your body as you orgasm. The paralytic is beginning to wear off, but it's too late. The other worms smell the scent coming from your quivering pussy and have begun to swarm around your hole.");
			writeText("One after another begins to push inside of you as the first presses against the entrance to your womb. Feelers press against the closed cervix and your body spasms.");
			writeText("Your movement scares the remaining worms away, but there are still four inside of you. Your walls clench around them, and they squirm inside of you in response.");
			writeSpeech(data.story.name, "zombie", "AAAH~!");
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
				writeSpeech(data.story.name, "zombie", "NNNN-!");
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
			writeSpeech(data.story.name, "zombie", "Oh no, oh no no no...");
			writeText("You grasp it to make sure it's real, and it is. The sensation of pleasure that hits out as you grasp it ensure that it is 100% a real, fat, dick.");
			writeText("You feel your insides churning and hear a small gurgling sound as suddenly your dick pumps out a torrent of white slime onto the floor, pushing out what remains of your old womb. You should be panicking, but...");
			writeSpeech(data.story.name, "zombie", "Sho... Sho geeEEEEWD!");
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