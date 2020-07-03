function writeScene(scene) {
	switch(scene) {
		case "start": {
			document.getElementById('output').innerHTML += `
				<img src="scripts/gamefiles/locations/rain.gif" style="position:absolute; height:100vh; width:100vw; top: 0; left: 0; opacity: 0.3; pointer-events: none;">
				<img src="scripts/gamefiles/logo.png" class = "bigPicture" style="border: none;">
				<p class="choiceText" onclick="sceneTransition('scenarioSelect')" style="width: 30vw; border:none;">
					Start
				</p>
				`;
			console.log('preparing to rain');
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/city.jpg)";
			break;
		}
		case "scenarioSelect": {
			data.items = [];
			data.player.scenario = "";
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			if (data.quicksave != null) {
				writeFunction("quickLoad()", "Load Last Quicksave");
			}
			writeTransition("rainyDayZ", "Scenario 1 - RainyDayZ");
			writeTransition("theFacility", "Scenario 2 - The Facility");
			writeTransition("spreadIsland", "Scenario 3 - Spread Island");
			writeTransition("typhoidMary", "Preview - Typhoid Mary");
			writeTransition("scarletMansion", "Preview - Scarlet Mansion");
			//writeTransition("onTheRecord", "Preview - On the Record");
			writeText("...");
			writeTransition("settings", "Game Settings", "#91eba9");
			writeTransition("author", "Author & Credits Information", "#91eba9");
			writeTransition("gallery", "Scene Gallery", "#91eba9");
			writeTransition("cheat", "Enter Cheat Codes", "#91eba9");
			writeText("...");
			writeTransition("start", "Back to Title Screen", "#FF0000");
			writeText("New to the game? Be sure to see the settings menu for save data notes and to disable fetishes you dislike.");
			break;
		}
		case "settings": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			if (data.player.beastDisabled == false) {
				writeFunction("toggle('beast')", "Disable beast content", "#FF0000");
			}
			else {
				writeFunction("toggle('beast')", "Enable beast content", "#91eba9");
			}
			if (data.player.rimDisabled == false) {
				writeFunction("toggle('rim')", "Disable rim content", "#FF0000");
			}
			else {
				writeFunction("toggle('rim')", "Enable rim content", "#91eba9");
			}
			if (data.player.wormDisabled == false) {
				writeFunction("toggle('worm')", "Disable parasite content", "#FF0000");
			}
			else {
				writeFunction("toggle('worm')", "Enable parasite content", "#91eba9");
			}
			if (data.player.wsDisabled == false) {
				writeFunction("toggle('ws')", "Disable watersports content", "#FF0000");
			}
			else {
				writeFunction("toggle('ws')", "Enable watersports content", "#91eba9");
			}
			writeFunction("saveFile()", "Export save data to string");
			writeFunction("saveTXT()", "Export save data to .noodle file");
			writeText("NOTE: Playing in incognito or with cookies disabled can prevent the game from saving. Use this to save your gallery data if needed.");
			writeFunction("loadFile()", "Import save data from string");
			document.getElementById('output').innerHTML += `
			<p class='rawText'>You can also load external data from .noodle file:</p>
			<input type="file" id="loadFile" onload="fileLoaded()" class = "loadFileButton button" onchange = "loadSave()"></input>
			`;
			writeText("NOTE: This game is incompatible with pre v1.1 Rainy DayZ save files. Trying to load saves from versions before v1.1 will cause the game to break.");
			writeFunction("restartButton()", "Delete all save data", "#FF0000");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "author": {
			writeText("Rainy DayZ is a game created by Noodle Jacuzzi. You can find and check out my other works at my <a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a>.");
			writeText("I'm funded by <a href='https://www.patreon.com/noodlejacuzzi'>Patreon</a>, but Rainy DayZ as a whole doesn't perform too well in monthly polls against Anomaly Vault and Hentai University. If you'd like to support this game's development consider supporting me and letting me know you'd like more. Still, I wouldn't be making this game, or any of my others past Human Alteration App, if not for the people who support me! <br>Thank you to: O Xy Enkin, Swallows999, Iron Alex, Robbie, Joshua Ingram, Justifiable Gaming, ryguy, 4MinuteWarning, Hi There, Keith, Carlos, 林家豪, Richard, Skyrim mod lvr, Negativatron, Dustin Leichsenring, G, Ramsey Bisher, jack spencer, J_C_L, Filament, XxrobothacksxX, Dkells, Jinouga, Marco Wassmer, Taylor Trout, andres mejia, Colin E, Badaxe, Jesse Greene, Scal, ChronosEdge, Geoffrey Munoz, nicholas guerra, david thompson, Jayesonn leleaux, Bleed1ngthunder, Eric Hslew, Yesdani Perez, Vikteren, Dean, Sveny13, Kudon, theoron, AnotherAccount333, Gavin Davis, Lucas, Kaliden, Krose, Tyler Ross, greatred, FrostyTB, Riven Drasek, l, ranchy sanchy, Limitless, Greg Torres, Geoff Heimos, liam paterson, ChubbiestThread, Reverberations, ShadowFalls, William Parker, Magnus, Emanuel  Garcia, XaiuX, l1monat, Kieron Kow, Slomberg, henry grobins, SmolFish, I'm a Mitch, GirmusCz, Anthony Ewing, Daniel Vivette, Harry Brasch, Daekash, Markus Hansen, Louis Hayes, Tanman, DarthMalak, Danny Nguyen, yami, Trevor, Grim2011, Darrell Goodman, Z, John Lewis, Bonelessunknown, Phanes, Scumstango, Aegil, Wei, Dugelle, dhccpmc, Chaaaanon, Charles Morris, Nutburger, Noah, William Richardson, mazterlith, Sebastian Eckel, Anthony Munso, john smith, Your Husbando, Carlos, Joshua Melzark, Vincent Madaire-Cullen, ItsAllOgreNow, Gwen Yurick, Nils Maier, Blaise Fenn, stratum, Angel, Ariados, Jane, Snaked, Muryu, Debarre Sonny, Drashin, qwerty, murgatroid99, Roy, Wild Bill, and brandon for supporting my work!");
			writeText("As a note, this game also features a dog zombie. To view his scenes you must deliberately wound yourself, go to the forest, and either leave your weapon behind or have 0 stamina when you encounter him. If you dislike this sort of content, you can avoid it easily by doing anything other than what I've just described. To avoid any potential legal troubles, this dog is actually a woman in a very, very convincing dog suit. If you want absolutely no part in this at all, disable some of the more out-there fetishes in the settings menu.");
			writeText("If you have any comments, criticisms, or suggestions for content for this or future chapters, please let me know about them in the <a href='https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12575'>TFgames thread</a>, on my patreon, or in the Noodle Jacuzzi <a href='https://discord.gg/pDht5BZ'>Discord</a>.");
			writeText("As an extra note, no cheat codes aside from <b>oowoo</b>, sorry. There's one you get for unlocking all the game's scenes, but you get that for unlocking all the scenes. If you have any cheat code ideas, please let me know!");
			writeText("Thanks for reading this section. You can check below for some unused scenario ideas / concepts if you'd like. It's just text about the game's design and development though.");
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			writeTransition("unusedIdeas", "Unused Concepts");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "unusedIdeas": {
			writeText("First and foremost, Rainy DayZ was originally a minigame for Human Alteration App, for that reason a lot of the code was kinda spaghetti, and the game was meant to be very short. Please let me know if any traces of that are still present (IE a scene is too short).");
			writeText("The Rainy DayZ scenario was based on the left 4 dead 2 map Hard Rain, I thought the rainy aesthetic and the element of backtracking was really cool, although it didn't add too much from a gameplay standpoint with this being a text-based game. Other left 4 dead maps would be cool to riff off as well, but I wouldn't want to tread the exact same ground with the zombies.");
			writeText("L4d also had really cool special infected, most of which I tried to make some kind of spin on. However ultimately hunters and witches felt too much like regular zombies, spitters boomers and jockies were just not appealing, and the rest were hard to find images that wouldn't completely break immersion. Resident evil was the biggest inspiration for special zombies.");
			writeText("Zombie ideas are hard to come by since they need to be represented by regular people in the images, so nothing like Nemesis from RE3. I tried asking fans of the game for ideas, but no dice. Thus, I'll need to focus on situations in the future. The game already has the 'survivor scavenging for supplies' and 'scientist during a containment breach' stories, but there are a lot more I think could work:");
			writeText("<del>A husband and wife trying to escape a resort island during an outbreak. The wife is infected with a mild strain, so you need to help her while escaping the island. Based on Dead Island, this is the most likely pick for a scenario 3.</del> Used for Spread Island.");
			writeText("A reporter enters a mall during an outbreak to get footage of what's going on. Based on Dead Rising, the biggest draw here is a system where you either help survivors or let them get turned while you record them, super evil!");
			writeText("A man is stranded and seeks help in a seemingly abandoned town in Alaska, during a heavy snowstorm. This was actually the original idea for this game, which is why the 'unlock everything' cheat in v1 was cold mile. One cool idea is that halfway through enemy agents come into the town and try to hunt your down.");
			writeText("Something based on silent hill, probably a pretty straightforwards 'man goes to spoopy town' storyline, but it'll be tough to capture SH's unnerving aesthetic.");
			writeText("A hard-boiled agent investigates a spooky mansion. This one would be straight from Resident Evil 1, and would actually use drawn CGs from Eroquis's work instead of real porn gifs. I ended up scrapping it since it would deviate too far from the shemale zombie concept to straight up use resident evil's monsters, but it could probably end up being its own game.");
			writeText("Similar to the above, a game set in space based on the CG from Eroquis's <i>Dirty Prison Ship</i> game. This one would probably also need to be its own game, as aliens are even farther from the original concept.");
			writeText("Lemme know if you have any ideas to expand on the above, or just suggestions in general! Over the next few updates I hope to add more demos, check out these ones for a preview of what's to come:");
			writeTransition("scarletMansion", "Preview - Scarlet Mansion");
			writeTransition("onTheRecord", "Preview - On the Record");
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "gallery": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			generateGalleryNav();
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "cheat": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='diagnostic()'>Submit</p>
			`;
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		//Rainy DayZ
		case "rainyDayZ": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/rainy.jpg)";
			writeMed("scripts/gamefiles/characters/Rainy DayZ.jpg");
			writeText("Scenario 1 - Rainy DayZ");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry shemales, you play as a young woman searching for supplies to survive.");
			writeText("Exploration is encouraged since there's no reward for returning to the safehouse with the supplies. Try to get all of the events if you can and don't worry, there's no penalty aside from your time for a game over.");
			data.player.scenario = "Rainy DayZ";
			updateMenu();
			countScenes();
			writeTransition("rainyStart", "Start Rainy DayZ");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "rainyStart": {
			data.player.stamina = 2;
			data.player.wounded = false;
			data.player.infected = false;
			data.player.lockbox = "";
			data.player.townZombie = true;
			data.player.cityZombie = true;
			data.player.factoryZombie = true;
			data.player.flower = false;
			data.quicksave = null;
			data.items = [];
			addItem("Baseball Bat");
			writeText("It's cloudy and overcast today, just like it's been for months now. Your stockpile of food has run dry, so you need to find some more before you get hungry. Not only that, but with the weather getting worse you'll need to find enough to keep you fed for at least a few days.");
			writeText("You remember there was a convenience store in the city. At this point it's your only hope. You carry a large wooden bat in your hands in case you see one of <b>them</b>.");
			writeText("You only have so much room for carrying things. Trying to pick up more than six objects is too much for you, and you'll need to carry food and water back on the return trip.");
			writeSpeech("player", "", "<i>It's time to get moving.</i>");
			writeText("You can get to the city via the highway, it isn't too long of a trek. For now, you'll need to [townStreets|open the door] and head out into town.");
			zombieFooter();
			break;
		}
		case "townStreets": {
			writeText("Worn and partially broken, a [greenHouse|house painted green] stands strong against the wind. If you recall right, it was the home of a handyman. While there's probably no food, there might be something inside that could help you.");
			writeText("More out of the way, a [redHouse|red house] actually has some fortifications intact. If you take the time to break in you might find something useful.");
			if (checkItem("House Key") == true) {
				writeText("On the main street surrounded by an iron fence, a [blueHouse|blue house] is practically calling your name. You've tried to break in before, but this time you have a key.");
			}
			else {
				writeText("On the main street surrounded by an iron fence, a lone blue house stands tall, taunting you. You've tried to break in before, but the entire house is locked down. Every window and back door are barricaded closed, and the front door is deadbolted shut. Maybe you can find a key for the house somewhere?");
			}
			if (data.player.townZombie == true) {
				writeText("You think you hear a [townZombie|zombie] skulking around. Taking it out now might make moving around easier.");
			}
			if (checkItem("Food Supply") == false) {
				writeText("You can see a path to the [highway|highway] from here. You'll need to be careful though, since it's probably crawling with infected.");
			}
			else {
				writeText("You're almost there. A fifteen minute walk is (hopefully) all that's between you and your [safehouse|safehouse]. With exhaustion creeping over you, you wonder if you can make it. Maybe it would be best to find a place to rest for now.");
			}
			zombieFooter();
			break;
		}
		case "townZombie": {
			if (data.player.flower == true) {
				if (data.player.infected == true) {
					writeEvent('flower2');
				}
				else {
					writeEvent('flower1');
				}
			}
			else {
				if (data.player.infected == true) {
					writeText("After making sure there isn't another one around, you approach the zombie from behind. Even despite the weather though she still notices you and turns around, but after starting at you for a moment she just starts walking away.");
					data.player.townZombie = false;
					writeText("The zombie wasn't interested and left. Now you can move around the [townStreets|streets] without worry.");
				}
				else {
					if (data.player.stamina > 0) {
						if (checkItem("Baseball Bat") == true) {
							writeText("After making sure there isn't another one around, you approach the zombie from behind. Even despite the weather though she still notices you and turns around. Time to fight.");
							writeSpecial("You're slightly more tired now, but you've defeated the zombie!");
							data.player.stamina -= 1;
							data.player.townZombie = false;
							writeText("You've defeated the zombie. Now you can move around the [townStreets|streets] without worry.");
						}
						else {
							writeEvent("basic1");
						}
					}
					else {
						writeEvent("basic1");
					}
				}
			}
			break;
		}
		case "blueHouse": {
			writeText("Success! The key works and you're able to break into the home. Unfortunately, the owners are already gone, and they took everything they owned with them. You navigate the rooms one by one but there's barely anything here.");
			writeText("On a large table there's a bowl full of old, moldy fruit. Curiously, only the lemons have been eaten. It almost looks like something tore into each of them and left the rinds in the bowl, ignoring the other fruit.");
			writeText("The place is pretty well secured though. If it weren't for the occasional sound in the walls, probably a rat, you'd be tempted to make this into your new safehouse.");
			if (checkItem("House Key") == true) {
				if (data.player.infected == false) {
					writeText("The master bedroom isn't even all that dusty. The whole room is cozy, and still warm despite the weather. The large, queen-sized bed sits at the west side of the room. You're exhausted from the journey and you still have a ways to go, maybe you should take a event[worms1|rest?]");
				}
				else {
					writeText("The master bedroom isn't even all that dusty. The whole room is cozy, and still warm despite the weather. The large, queen-sized bed sits at the west side of the room. You're exhausted from the journey and you still have a ways to go, maybe you should take a event[worms2|rest?]");
				}
			}
			else {
				writeText("You go to investigate the master bedroom, but your hand stops on the knob as you hear a slithering sound. After a moment of silence, you hear it again. Something's in the walls, and you don't think its a natural animal. You decide that this isn't the best place for a nap.");
			}
			writeText("You can [townStreets|leave] through the front door at any time.");
			zombieFooter();
			break;
		}
		case "greenHouse": {
			writeText("The place is a mess and water is leaking through the ceiling. You've been here a few times before, so you can find your way around here pretty easily. Every room has been picked clean at this point except the owner's studio.");
			writeText("You walk into the studio, the table and equipment covered with dust. A minute of searching is all it should take to be done with this place.");
			if (checkItem("Flashlight") == false) {
				writeText("On the desk underneath a thin layer of dust is a large item[Flashlight|flashlight]. It might still work if it uses long-lasting batteries. It's pretty large though, you should be careful not to take anything you don't need.");
			}
			else {
				writeText("There's an empty spot on the table where you took the flashlight from.");
			}
			writeText("There's also a large empty box on the table. At first you think you might be able to store a snack in there for later, but you can't really think of a good reason to do that.");
			if (data.player.wounded == false) {
				writeText("Over the side of the table you think you can see [greenInjury|something metal]. A spike of sharp metal is in the way and is too heavy to move, but you can probably just grab the thing around it.");
			}
			else {
				writeText("On close inspection, the gleaming object behind the table is a broken screwdriver. The spike blocking the way is still wet with some blood. It isn't rusty though, so no chance of tetanus.");
			}
			writeText("You can [townStreets|leave] through the front door at any time.");
			zombieFooter();
			break;
		}
		case "greenInjury": {
			data.player.wounded = true;
			writeText("You lean on the table and reach for the object, but your arm isn't long enough. You stretch as far as you can, and your fingertips rub against the object.");
			writeText("The push is enough to knock the object over, farther than you could hope to reach. To make matters worse you lose your balance, causing the spike to slash against your arm. 'Fuck!' You exclaim. It really hurts.");
			writeSpecial("You are now wounded!");
			writeText("There's no point in whining about it. You should [greenHouse|move on] and keep searching.");
			break;
		}
		case "redHouse": {
			if (checkItem("Food Supply") == false) {
				writeText("You enter the red house after bypassing some barricades and sliding open a window. There are some footprints in the dust here, and they're recent too. You skulk around for a moment to confirm that the house is empty. Whoever lives here must be out right now.");
				if (checkItem("Snack") == false) {
					writeText("After some quick searching you find a small cache of food. It probably belongs to another survivor, and you don't want to make enemies. That said, taking just one item[Snack|snack] shouldn't hurt.");
				}
				else {
					writeText("More searching reveals a small cache of food. It probably belongs to another survivor. You don't want to make enemies, and you already have something to eat.");
				}
				if (checkItem("Rope") == false) {
					writeText("Hanging on the wall is a length of item[Rope|rope]. Food is precious, but supplies like this are a lot less important. It should be fine to take if you think you need it.");
				}
				else {
					writeText("On the wall is a hook where some rope used to hang.");
				}
				if (checkItem("Bag of Marbles") == false) {
					writeText("Aside from those, you find a item[Bag of Marbles|bag of marbles] sitting on the floor. These are clearly more important than food, and you should definitely take them.");
					writeText("That was a joke, a little bit of post-apocalypse humor for you.");
				}
				else {
					writeText("It doesn't seem like there is anything else here worth taking.");
				}
			}
			else {
				writeText("You sneak into the house very quietly. The window is already open, so you don't think you're alone here. Soon enough you're proven right, and you peer around the corner to find a [fellowSurvivor|fellow survivor]! ");
			}
			writeText("You can [townStreets|leave] through the front door at any time.");
			zombieFooter();
			break;
		}
		case "fellowSurvivor": {
			if (data.player.infected == true) {
				writeEvent("survivor1");
				writeText("You should [townStreets|leave] before she gets back up.");
			}
			else {
				writeText("There's a woman sprawled out on the floor, she's covered in infected cum, and it looks fresh. She's completely out cold, but she hasn't transformed yet.");
				writeText("Her breathing is ragged, and as her chest heaves droplets of fresh jizz leak out of her pussy.");
				writeText("This is extremely dangerous, even a small amount of infected cum can have a disorientating effect. If you event[survivor2|get any closer] you won't be able to control yourself, if you haven't lost control already.");
			}
			break;
		}
		case "highway": {
			writeText("Your journey is exhausting and a half hour of walking leaves you weary, especially since you need to be on high alert.");
			data.player.stamina -= 1;
			writeSpecial("You're slightly more tired now, but you've almost made it to the city!");
			writeText("The trip along the highway is slow and tense, but your stealth pays off once you catch wiff of a scent powerful enough to be smelt through the rain. It's the smell of infected cum.");
			writeText("The deed is already done, the crowd of shambling, purposeless zombies is slowly dispersing. Their former target is laying in the middle of the road, their body caked with semen so thick the rain isn't enough to wash it off.");
			writeText("You don't want to wait around to see them wake up, and you certainly don't want any of the crowd to notice you. It would be best to just try and [cityStreets|sneak past] the horde and make your way into the city. With the rain masking your steps and scent, you should have no problem making it through with your clothes still on.");
			if (checkItem("Bag of Marbles") == true) {
				writeText("But an idea strikes you as you get ready to start sneaking. Your event[horde1|bag of marbles] makes a small click as you hold it in your hand. You could use it as a distraction to make your way through more safely.");
				writeText("Although it doesn't seem like it's necessary, since they have no idea you're here anyway.");
			}
			else {
				writeText("If you had some things to throw, you might be able to cause a distraction to get by. But for now, sneaking is your only option.");
			}
			zombieFooter();
			if (checkItem("Food Supply") == true) {
				writeEvent("horde2");
			}
			break;
		}
		case "cityStreets": {
			writeText("You've reached the outskirts of the city, cars line the road even out here. The rain is getting pretty heavy, so it might be fore the best and hurry on your way.");
			writeText("As you walk down the street, you see an open window on the second story of an apartment building. The place looks closed off, so there aren't any other entrances. If you wanted to, you could scale the wall and [studioApartment|enter the apartment complex].");
			if (data.player.flower != true) {
				writeText("Blooming through a crack in the pavement is a beautiful bright-red flower. You aren't much of a nature gal yourself, but it couldn't hurt to [flower|give it a whiff].");
			}
			else {
				writeText("The bright red flower is here. It's really pretty, but something about the way it smells leaves you a bit put off.");
			}
			if (checkItem("Food Supply") == false) {
				writeText("But at the end of the block is your real goal, the [convenienceStore|convenience store]. The entrance is covered in wooden planks, but you spy a way you could sneak in.");
			}
			else {
				writeText("The rain is getting harder and harder, and your bag isn't getting any lighter. You need to may your way back to the safehouse as soon as you can. The clearest way back you can think of would be to take the highway again, but with the storm going on you'll need to take the road directly instead of walking on the outskirts.");
				writeText("If you feel like you need to get something in the [convenienceStore|convenience store] you won't have another chance to get it.");
				if (data.player.stamina > 1) {
					writeText("You're well fed and prepared for a journey, you feel like you could head through the [highway|highway] even considering the danger.");
				}
				else {
					writeText("You don't feel like you have enough energy to risk taking the highway.");
				}
				if (checkItem("Factory Key") == true) {
					writeText("The factory's gate key is sitting in your pocket. The path to the [factoryGate|factory] should be relatively high and dry, especially compared to the highway.");
				}
				writeText("You could cut directly through the [forest|forest]. You'll be cutting down on distance, and there should be far fewer zombies.");
			}
			zombieFooter();
			break;
		}
		case "flower": {
			data.player.flower = true;
			writeText("You lean in to smell the flower. It's pretty incredible how beautiful nature can be in this hellscape of a town.");
			writeText("It smells pretty bad though. Way too powerful. Saccharine, a sickly sweet smell.");
			writeText("Still, it's nice to look at. As you stand back up the room spins slightly. You're probably dehydrated or something. How pretty the flower is quickly wipes away a nagging sensation that something bad is about to happen.");
			writeText("You should probably [cityStreets|get moving].");
			break;
		}
		case "studioApartment": {
			writeText("You climb through the windowsill and enter the apartment silent as a mouse. The open window has left the room looking pretty damp, but is otherwise in pretty good shape.");
			if (checkItem("Snack") == false) {
				writeText("On the table, amid a pile of trash looks like a sealed can of food you can take as a item[Snack|snack].");
			}
			writeText("Hanging from the wall is a small mangled key, it's so mashed up you can't make out the text on it anymore.");
			writeText("The halls are claustrophobic and dark, each door you pass by has been smashed open, not a good sign. An even worse sign is the smell coming from some of the rooms, the smell of infected semen. Down two flights of stairs is a much heavier door held closed by a simple latch. Inside is some sort of [apartmentBasement|basement room].");
			writeText("Despite how dangerous the situation seems, you still have a way out by [cityStreets|heading back out through the window].");
			zombieFooter();
			break;
		}
		case "apartmentBasement": {
			writeText("The room is small, and there's an odd smell to the room. You think you hear something for a moment, but there isn't a second sound.");
			if (checkItem("Air Freshener") == false) {
				writeText("Resting on a desk are a few objects, the first one you notice is a neon green lemon-scented air freshener. You could use this to mask your scent, although the rain is already doing a pretty good job of that.");
			}
			else {
				writeText("Resting on a desk are a few objects, but you already took the air freshener. You notice that the smell of the room seems a little more powerful now.");
			}
			if (data.player.wounded == false) {
				writeText("In the corner of the room is a wastebasket filled with a variety of objects. If you really feel like you need to, you could [apartmentInjury|reach inside] to search for anything useful.");
			}
			else {
				writeText("In the corner of the room is a wastebasket filled with a variety of objects splattered with a few drops of blood. You don't really feel like you need to search through it right now.");
			}
			if (checkItem("House Key") == false) {
				writeText("There's a pile of clothes in the corner. A quick look through them reveals a single item[House Key|blue key with a lemon-scented air freshener attached].");
			}
			else {
				writeText("There's a pile of clothes in the corner.");
			}
			writeText("Finally, resting on the desk is an [journal|old journal], probably owned by the previous resident of this place.");
			writeText("If you feel you've had enough, you can leave through the [studioApartment|door].");
			zombieFooter();
			break;
		}
		case "apartmentInjury": {
			data.player.wounded = true;
			writeText("You start rummaging through the wastebasket but quickly pull your hand out. You need to hold back your voice as you stem the small flow of blood. <b>You're bleeding!</b> A small knife was left inside the basket.");
			writeText("You don't have a medical kit, so there's nothing to do now but wait. You can clean yourself up a bit more later, but once the bleeding stops you can go back to [apartmentBasement|searching the room].");
			break;
		}
		case "journal": {
			writeText("The journal appears normal until a month ago, when the infections started. Everything after that is a scrawl of notes of varying usefulness. One pretty clean section is devoted to the zombies, and the different types of them.");
			writeText("Read the entry on event[journalBasic|basic zombies].");
			writeText("Read the entry on event[journalHunter|hunter zombies].");
			writeText("Read the entry on event[journalSiren|siren zombies].");
			writeText("Read the entry on event[journalWorms|zombie worms].");
			writeText("There's also an event[journalFlower|extra note] laying on the table.");
			writeText("If you're finished reading, you can [apartmentBasement|close the book].");
			break;
		}
		case "cityZombie": {
			if (data.player.stamina > 0) {
				if (checkItem("Baseball Bat") == true) {
					writeText("You shove the zombie away from you and ready your weapon. Time to fight.");
					writeSpecial("You're slightly more tired now, but you've defeated the zombie!");
					data.player.stamina -= 1;
					data.player.cityZombie = false;
					writeText("You've defeated the zombie. Now you can move around the [apartmentBasement|room] without worry.");
				}
				else {
					
					writeEvent("basic2");
				}
			}
			else {
				
				writeEvent("basic2");
			}
			break;
		}
		case "convenienceStore": {
			data.player.townZombie = true;
			writeText("It takes some work to get inside the convenience store, which is a good sign. The place is still intact and dry, but the glass windows leave you worried about this place's safety. It probably won't hold up against the building storm.");
			writeText("But aside from that the place is everything you had hoped it would be. Some of the shelves have been picked clean, but others are still lined with sealed food. It only takes you a few moments to fill your backpack with a month's worth of food and water. Now you need to carry them back.");
			if (checkItem("Food Supply") == false || checkItem("Water Supply") == false) {
				if (data.items.length > 4 && checkItem("Food Supply") == false && checkItem("Water Supply") == false) {
					writeText("You're carrying too much to take the food and water supply. You'll need to drop some things.");
					writeText("Drop your drop[" + data.items[0].name + "|"+data.items[0].name+"].");
					writeText("Drop your drop[" + data.items[1].name + "|"+data.items[1].name+"].");
					writeText("Drop your drop[" + data.items[2].name + "|"+data.items[2].name+"].");
					writeText("Drop your drop[" + data.items[3].name + "|"+data.items[3].name+"].");
					writeText("Drop your drop[" + data.items[4].name + "|"+data.items[4].name+"].");
					if (data.items.length > 5) {
						writeText("Drop your drop[" + data.items[5].name + "|"+data.items[5].name+"].");
					}
				}
				else {
					if (checkItem("Food Supply") == false) {
						writeText("Take the item[Food Supply|food supply].");
					}
					if (checkItem("Water Supply") == false) {
						writeText("Take the item[Water Supply|water supply].");
					}
				}
			}
			else {
				if (checkItem("Food Supply") == false) {
					writeText("Take the item[Food Supply|food supply].");
				}
				if (checkItem("Water Supply") == false) {
					writeText("Take the item[Water Supply|water supply].");
				}
			}
			if (data.player.infected == false) {
				writeText("The golden rule is to not snack on scavenged stuff, so you spend a little bit longer looking around for something you can eat right now. Behind the counter and inside a sealed container is a single glazed donut. It has a bit of a smell, and is probably stale right now, but in this moment you could be the last person on earth to event[tainted|eat a donut].");
			}
			else {
				if (checkItem("Factory Key") == false) {
					writeText("Underneath the container of the infected food is a item[Factory Key|small silver key] with the words 'Ridgewood Factory' engraved on it.");
				}
			}
			if (checkItem("Food Supply") == true && checkItem("Water Supply") == true) {
				writeText("The wind outside is howling and shaking the windows, it might be time to [cityStreets|leave] soon.");
			}
			zombieFooter();
			break;
		}
		case "factoryGate": {
			writeText("This path is much shorter than the highway, all you'll need to do is cut through the factory itself to get to the back road. From there it's a straight, mostly dry way back to town.");
			writeText("You slide the key into the large lock at the front door and turn it, and are met with a crunching sound. The gate opens, but won't close.");
			writeText("The factory itself is wide and spacious, but is near entirely empty. All that's left are construction materials. From what you can gather, this place wasn't finished yet. You can navigate the place pretty easily and are soon on the second floor.");
			if (checkItem("Baseball Bat") == true) {
				writeText("A large door you walk through strikes you as a risk. If you've been followed here then you could end up getting caught in a dead end. You could drop[Baseball Bat|leave your weapon behind] to bar the door.");
			}
			else {
				writeText("Laying against a door as a makeshift lock is your baseball bat. It's so tightly set in place that you couldn't move it if you wanted to.");
			}
			if (data.player.factoryZombie == true) {
				writeText("You think you hear a noise and dart for cover. Slowly, a zombie walks across a length of scaffolding above you. If you wanted to you could try to [factoryZombie|take it out], or you could just [upperFactory|sneak past it] and go further into the factory.");
			}
			else {
				writeText("With the zombie out of the way, you are free to go [upperFactory|further into the factory].");
			}
			zombieFooter();
			break;
		}
		case "factoryZombie": {
			if (data.player.infected == false) {
				data.player.factoryZombie = false;
				writeText("For whatever reason, the zombie seems to be distracted by something and runs off. Looks like you're safe to [factoryGate|wander the factory] for now.");
			}
			else {
				if (checkItem("Baseball Bat") == true) {
					writeText("After making sure there isn't another one around, you climb up and swing at the zombie from behind. A single swing and she's down for the count.");
					data.player.factoryZombie = false;
					writeText("You've defeated the zombie. Now you can move around the [factoryGate|factory] without worry.");
				}
				else {
					
					writeEvent("basic3");
				}
			}
			break;
		}
		case "upperFactory": {
			writeText("The inner chambers of the factory seem almost like a maze. Winding pathways lead back and forth in circles a few times before you get your bearings together. Not only that, but it's pretty dark in here. It isn't pitch black, but if you aren't careful you could hurt yourself.");
			writeText("A small noise and something moving in the corner of your vision set you on high alert. You crouch and wait patiently, and after a few minutes you can hear a sound that almost sounds like soft snoring. Whatever it is, you're in the home stretch now, you shouldn't take a risk by calling out to it.");
			if (data.player.infected == true) {
				if (checkItem("Flashlight") == true) {
					writeText("Navigating in the darkness with something in the room could be risky. You could use your event[siren1|flashlight] to find your way out of the building.");
				}
				else {
					writeText("It's way too dark to try finding whatever might be in the room with you, so hunting it down isn't an option.");
				}
				if (checkItem("Rope") == true) {
					writeText("You could event[siren2|set a trap with your rope] and make some noise to lure whatever's in the area to it. It probably can't chase you down if it's tied down.");
				}
				else {
					writeText("If you had something to make a trap with, you could snare whatever might be in the room with you and escape.");
				}
			}
			writeText("If you aren't too worried about the snoring sound, you could just quietly [townStreets|sneak out of the factory]. It should be a straight and simple shot back to town.");
			zombieFooter();
			break;
		}
		case "forest": {
			writeText("Hiking through the forest ends up being a lot more exhausting than you thought.");
			if (data.player.stamina > 0) {
				data.player.stamina -= 1;
				writeSpecial("You feel exhausted, but you've almost made it through the forest.");
			}
			writeText("The foliage grows thinner and the wind grows stronger, it should only be another few minutes before you arrive in town. Your elation is put to a quick end when the snap of a twig tells you you're being followed from a good distance away.");
			if (checkItem("Baseball Bat") == true) {
				writeText("Obviously you can't dump the supplies, but you could drop[Baseball Bat|leave your weapon behind] to try and escape faster.");
			}
			else {
				writeText("You've already dropped your weapon to try and save yourself, but you can still hear whatever is following you gaining on you.");
			}
			if (data.player.wounded == true) {
				if (checkItem("Baseball Bat") == false) {
					writeText("Wounded and without a weapon, all you can hope to do is event[hunter2|make this easier on yourself and give up].");
				}
				else {
					if (data.player.stamina < 1) {
						writeText("Wounded and completely exhausted, all you can hope to do is event[hunter1|go down fighting].");
					}
					else {
						writeText("You wait for a moment, cautious and ready. Your wounds keep you from sprinting away from danger. Luckily you have your trusty bat and you have enough energy left to fight. When the zombified dog leaps out from the brush, your quick reaction lets you slam it away with your bat.");
						writeText("Your pursuer defeated you keep moving through the forest. Soon enough you break through the treeline and [townStreets|arrive in town].");
					}
				}
			}
			else {
				writeText("You break out into a sprint, trees rushing past you as you desperately try to outpace whatever's following you. Thankfully you aren't wounded. Soon enough you break through the treeline and [townStreets|arrive in town].");
			}
			zombieFooter();
			break;
		}
		case "safehouse": {
			writeText("You've done it! This young woman will survive another month with the supplies you've gathered, and all without being viciously molested by sex-hungry shemale zombies too! If this was the goal you've been shooting for, then great job!");
			writeText("Check out the 'Author Information' section in the scenario selection menu for a more detailed set of credits, or play the game again to try and get yourself on the business end of the infected.");
			writeTransition("rainyDayZ", "Thanks for playing!");
			if (data.player.infected == true) {
				writeEvent('infected');
			}
			break;
		}
		//The Facility
		case "theFacility": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/facility.jpg)";
			writeMed("scripts/gamefiles/characters/The Facility.jpg");
			writeText("Scenario 2 - The Facility");
			writeText("Deep in the dark heart of an underground laboratory, experiments are unfolding which will lead the world to ruin.");
			writeText("You, a scientist in the thick of a chaotic containment breach, must escape the facility with your life and mind intact.");
			data.player.scenario = "The Facility";
			updateMenu();
			countScenes();
			//writeText("Note: Only 6 of the scenes are currently unlockable.");
			//writeSpecial("This scenario unfinished. It should be finished in version 2.0 if you'd like to play the full thing. You can explore the facility, but you can't use the keycards to unlock the inoculation lab:");
			//writeFunction("writeEvent('start')", "View the intro");
			writeTransition("facilityStart", "Start The Facility");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "facilityStart": {
			data.player.horny = true;
			data.player.keycards = 0;
			data.player.flags = "";
			data.items = [];
			writeEvent('start');
			data.quicksave = null;
			break;
		}
		case "weaponLab": {
			writeText("The weapons lab is empty and dark. From what you can gather you were unconscious for at least a few hours. Most of the work you did here was theoretical, there's nothing you can take to defend yourself. Plus, the idea of hurting your masterpieces makes you feel a little queasy.");
			if (checkItem('Soldier Recording 1') != true) {
				writeText("Laying on a nearby table is a soldier's helmet, the kind used by armed fireteams sent in to evaluate containment breaches. Has a team already been down here? Were you abandoned? In any case, these helmets are equipped with cameras, and have small item[memory cards that keep a backup of their footage|Soldier Recording 1]");
			}
			else {
				writeText("Laying on a nearby table is a soldier's helmet, the kind used by armed fireteams sent in to evaluate containment breaches. You've already taken the memory card inside, but you can't view its contents here.");
			}
			if (data.player.flags.includes("weaponLabDoor") != true) {
				writeText("The room is filled with weapon testing rooms, basically broom closets where new strains are tested on bound infected. All but one are empty, it looks like one is still in use. You could [try to input the passcode for the door|lockedCell].");
			}
			else {
				if (data.player.flags.includes("domination") != true) {
					writeText("The weapon's lab cell door is open. Inside, nearly frothing at the mouth is a woman wearing almost nothing. It looks like her hands are zip-tied to an outcropping of the wall.");
					writeText("She lunges at you, or at least she attempts to. The restraints aren't enough to keep her tied up forever though, you should get moving.");
					if (data.player.horny == true) {
					writeText("Although... Just looking at her, tied up and her cock angry from a lack of release... You're pretty hard yourself. Maybe you should [shut her up|domination] and get some relief at the same time.");
					}
				}
				else {
					writeText("The weapon's lab cell door is open. Inside the soldier formerly known as Jones is laying glassy-eyed in a puddle of your and her cum. Though her restraints look like they're on the verge of breaking, you should be alright for now.");
				}
			}
			writeText("If there's nothing else to do here, you should probably leave and head into the [laboratory hub|labHub].");
			break;
		}
		case "domination": {
			writeEvent(scene);
			data.player.horny == false;
			data.player.flags += "domination";
			break;
		}
		case "lockedCell": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Enter passcode: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='passcodeEntry()'>Submit</p>
			`;
			writeText("[Go back|weaponLab].");
			break;
		}
		case "labHub": {
			writeText("You're in the floor's central hub. Multiple doors around you lead to different research labs.");
			writeText("The door to the now empty [Weapons Lab|weaponLab] is behind you.");
			writeText("The door to the [Chemical Lab|chemLab] is to your left. Inside research is conducted mostly on fluids, research like DNA analysis and acid tests. No live testing, so the room should be safe.");
			writeText("The door on your right is the [Containment Lab|containmentLab], where live specimen are studied. The security is extremely tight in case of a containment breach, so it's likely still safe even given the circumstances.");
			writeText("The door down the hall leads to the [Parasite Lab|parasiteLab], where non-human infection vectors are being researched. It's likely to be very dangerous.");
			if (checkItem('White Keycard') == true && checkItem('Blue Keycard') == true && checkItem('Red Keycard') == true) {
				writeText("With three keycards in your possesion, you can freely get through the security checkpoint and enter the [Innoculation Lab|innoculationLab].");
			}
			else {
				writeText("The largest door in front of you leads to the Inoculation Lab, but the door is sealed shut. It's the most likely location of the cure you need, but there's no way in. An ID reader is on the side of the door, in order to gain access despite containment you'd need three keycards to insert here.");
			}
			writeHTML(`
				t Finally, there's a pathway to the [main lobby|lobby]. Inside is the elevator you can use to escape.
			`);
			break;
		}
		case "lobby": {
			writeText("You're in this floor's entrance lobby. There's a desk at the front for a security guard, but there's nobody on duty right now.");
			writeText("At the desk is a computer used for checking records and observing the status of various other rooms. Each room is labeled with a bright red 'COMPROMISED' warning, except for the inoculation lab which is marked with the word 'LOCKDOWN'.");
			writeText("Also on screen is a data file, someone was viewing it before everything went to shit. The file is labeled ['Alternative Siren Strains'|sirenFile].");
			writeText("Attached to the computer is a small external memory card reader. If you have any, you could [view their recordings here|recordingFiles].");
			writeText("The exit elevator appears to be working, but in your condition you won't last long. You need to find the cure before you can escape. For now, you should head back into the [central hub|labHub].");
			break;
		}
		case "recordingFiles": {
			writeText("You open the program needed to view memory card recordings. What will you do?");
			if (checkItem('Soldier Recording 1') == true) {
				writeText("[View the memory card you found in the weapons lab|fireteam1].");
			}
			if (checkItem('Soldier Recording 2') == true) {
				writeText("[View the memory card you found in the parasite lab|fireteam2].");
			}
			if (checkItem('Captain Recording') == true) {
				writeText("[View the captain's memory card|fireteam3].");
			}
			writeText("[Power off the terminal|lobby].");
			break;
		}
		case "fireteam1": {
			writeEvent(scene);
			writeText("[Finish watching|recordingFiles].");
			break;
		}
		case "fireteam2": {
			writeEvent(scene);
			writeText("[Finish watching|recordingFiles].");
			break;
		}
		case "fireteam3": {
			writeEvent(scene);
			writeText("[Finish watching|recordingFiles].");
			break;
		}
		case "sirenFile": {
			writeSpecial("AUTHENTICATION GRANTED");
			writeHTML(`
				t The following are several logs for an alternative to the current Siren-class infection strain. Due to their method of hunting proving to be extremely dangerous for male employees and administrative personnel, large amounts of research have been conducted to finding another method as good at attracting male victims. 
				...
			`);
			if (data.player.wsDisabled != true) {
				writeHTML(`
					im sirenPiss.gif
					t Siren-deviation delta, Water Nymph
					t Sirens possess a valuable ability to draw in targets from secure locations without line of sight. Suggestions were posed that the sense of smell and taste would make good alternatives. 
					t With this deviation the smell and taste of the subject's urine were enhanced with string pheromones. The desired result was obtained as victims would desperately lap up the deviation's piss and greedily beg for more until full infection was guaranteed. 
					t However already infected individuals also showed similar desires for the liquid, and results have shown that nearly every other strain of infected will even ignore humans in the area to find these nymphs and drink from them. 
					t Even if we make the nymphs dislike pissing on or in already infected individuals, other infected quickly realize the nymphs can be forced to urinate if subjected to prostate stimulation. Thus results in a large-form gangrape until the nymph admits total defeat and wets herself before quickly being licked clean. This continues until the nymph can no longer hold back from spraying piss from any kind of anal pleasure, and wetting themselves becomes linked to achieving orgasm. 
					t Result: Partial failure. Some researchers believe the nymph's strain can be repurposed into another unique strain entirely. 
				`);
			}
			else {
				writeHTML(`
					t REDACTED INFORMATION.
					t RESEARCH CONTENT HAS BEEN AUTOMATICALLY PURGED BASED ON USER SETTINGS.
				`);
			}
			writeHTML(`
				...
				im sirenUrethra.gif
				t Siren deviation gamma, Charybdis. 
				t The siren's soft bodytype has proven attractive towards male subjects who would normally resist the allure of common infected. Thus this strain attempts to capitalize on that. The infected's urethra becomes stretchier allowing for better urethral stimulation. The already existing nervous structure means that sensitivity enhancement is not required as the play is already highly pleasurable when combined with the usual endurance improvements of basic strains. 
				t However allowing the urethral to accept an insertion the size of an average male's cock has proven difficult and time-consuming. Not only that but the treatment has had the side-effect of causing the charybdis to become extremely masochistic, often manually preventing herself from cumming by sounding herself deeply just before orgasm, preventing any ejaculation but prolonging the pleasure of masturbation sessions. 
				t Result: Total failure. Creating a strain of masochistic small-dicked girls who want their cocks to be fucked is not getting us closer to global infection. The researchers conducting the tests were revealed to have sounding fetishes, and were promptly infected with the charybdis strain themselves. Videos will be distributed for employee morale and to make an example of the charybdis team. 
				...
			`);
			if (data.player.beastDisabled != true) {
				writeHTML(`
					im sirenBeast.gif
					t Siren deviation epsilon, Echidna. 
					t Result has proven generally positive in using a siren deviation as a support type infected. Their ability to guide and nurture other strains, particularly hound strains, has proven effective so far. By removing their ability to hypnotically attract men, and instead giving them the ability to attract and infect animals, the advantages of the siren remain intact without posing danger to research and combat staff. Like most siren strains they have higher than usual intelligence, though not to the point of speech. 
					t ?fetish rim; Notably, echidnas do not use animals strictly for infection and pleasure, and will often spend long periods of time pampering their "children", referring to their infected pets. While typically this includes bending over and being knotted one-by-one by an entire pack of hounds, this also means slowly pleasuring her children with her hands while passionately rimming their asses and moaning like a normal woman would make out with her husband. Though this seems like a waste of infected sperm, hounds treated this way seem to become even stronger and more virile after these milking situations. 
					t ?fetish ws; New children invited into the pack tend to become very attached to their denmother, and often after their first sexual experience with their echidna they will mark her. This seems to result in extreme sexual pleasure for the echidna, who will quickly achieve orgasm by being sprayed with piss. Echidnas with large packs will sometimes even request that the entire pack spray and mark her all at once, cumming extremely hard from her small, unused penis while attempting to drink as much as she can. Hounds involved in this ritual seem to lose respect for their denmother at this point and begin to treat the echidna roughly, much to the denmother's delight. 
					t Result: Partial success. While they synergize with hound-type infected, that strain was already extremely effective. The echidna strain is being further tested, but has not recieved final approval yet. 
				`);
			}
			else {
				writeHTML(`
					t REDACTED INFORMATION.
					t RESEARCH CONTENT HAS BEEN AUTOMATICALLY PURGED BASED ON USER SETTINGS.
				`);
			}
			writeHTML(`
				t [CLOSE FILE|lobby]
			`);
			break;
		}
		case "chemLab": {
			writeText("The chemical lab smells very powerfully of alcohol, the kind used for cleaning. There aren't any traces of infected in the area, so you should be fine to relax.");
			writeText("The primary research station has a number of chemicals lined out for study. You have a lot of experience here, so if you have the time you could [mix up something useful at the table|chemistry].");
			if (data.player.horny == true) {
				writeText("Insatiable despite how recently you just came, your cock is still standing strong. The chairs here are comfortable, you could [take a moment to pleasure yourself|chemJerk] if you wanted.");
			}
			writeText("There are several research terminals in the room, with your authentication you can access a synopsis of whatever the researchers here were working on. One is on a project labeled '[whizzer|whizzerFile]' another is an [unread email on resistance to the infection|resistanceFile], and another is some kind of [email on the infection process|infectionFile].");
			if (checkItem('Orange Potion') == true) {
				if (checkItem('Blue Keycard') != true) {
					writeText("You spy the blue plastic card you'll need to get into the innoculation lab, but it's down a grate. Now that you have the acidic potion, with careful application you can get into the grate and take the item[access keycard|Blue Keycard] inside.");
				}
				else {
					writeText("You've already grabbed the keycard from the grate.");
				}
			}
			else {
				writeText("Several researchers must've left in a hurry, one of them very high ranked. Researchers of that level keep an access keycard, so after looking around you spy the blue plastic card you'll need to get into the innoculation lab, but it's down a grate. The thing is bolted on, you'll need to break or melt the bolts to get inside.");
			}
			if (checkItem('Captain Recording') != true) {
				writeText("Laying on a nearby table is another soldier's helmet, why are these just laying around? There's an extra marking on it to signify this is a squad leader's helmet. The helmet is intact, and you can item[take the memory card inside|Captain Recording]");
			}
			else {
				writeText("Laying on a nearby table is a squad leader's helmet, you've already taken the memory card from it.");
			}
			writeText("Your throat is starting to feel a little dry, you might've been out for a long time, and spurting from your cock probably isn't helping the matter. Normally you wouldn't chance it, but an open beaker of an off-yellow fluid is here. It seems inviting somehow, and you are really thirsty, so maybe you should [drink it?|whizzerDrink]");
			writeText("If there's nothing else to do here you should probably leave and go back to the [laboratory hub|labHub].");
			break;
		}
		case "chemistry": {
			writeHTML(`
				t You're sitting at the chemistry table. A number of ingredients are available to you.
			`);
			if (data.player.horny == true) {
				writeHTML(`
					t Your cock throbs, distracting you for just a moment and reminding you of how horny you are right now. You'll need to be quick so as not to end up in a jerk-off frenzy, or relieve yourself so you can work at 100%.
				`);
			}
			writeText("First up is the [yellow ingredient, marked with an image of a rock|yellow].");
			writeText("Next is the [red ingredient, marked with an image of an object shattering|red].");
			writeText("Then there's the [blue ingredient, marked with an image of a brain|blue].");
			writeText("Then there's the [white ingredient, marked with an image of a penis|white].");
			writeText("If you don't want to mix anything, you could [step away from the table|chemLab]");
			break;
		}
		case "yellow": {
			writeText("You take the yellow ingredient, marked with an image of a rock. What will you mix it with?");
			writeText("Mix with the [red ingredient, marked with an image of an object shattering|yellowred].");
			writeText("Mix with the [blue ingredient, marked with an image of a brain|yellowblue].");
			if (data.player.horny == true) {
				writeText("Mix with the [white ingredient, marked with an image of a penis|yellowwhite].");
			}
			else {
				writeText("Mix with the [white ingredient, marked with an image of a penis|yellowwhite]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			writeText("You could always [change your mind|chemistry]");
			break;
		}
		case "red": {
			writeText("You take the red ingredient, marked with an image of an object shattering. What will you mix it with?");
			writeText("Mix with the [yellow ingredient, marked with an image of a rock|yellowred].");
			if (data.player.horny == true) {
				writeText("Mix with the [blue ingredient, marked with an image of a brain|redblue].");
			}
			else {
				writeText("Mix with the [blue ingredient, marked with an image of a brain|redblue]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			if (data.player.horny == true) {
				writeText("Mix with the [white ingredient, marked with an image of a penis|redwhite].");
			}
			else {
				writeText("Mix with the [white ingredient, marked with an image of a penis|redwhite]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			writeText("You could always [change your mind|chemistry]");
			break;
		}
		case "blue": {
			writeText("You take the blue ingredient, marked with an image of a brain. What will you mix it with?");
			writeText("Mix with the [yellow ingredient, marked with an image of a rock|yellowblue].");
			if (data.player.horny == true) {
				writeText("Mix with the [red ingredient, marked with an image of an object shattering|redblue].");
			}
			else {
				writeText("Mix with the [red ingredient, marked with an image of an object shattering|redblue]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			if (data.player.horny == true) {
				writeText("Mix with the [white ingredient, marked with an image of a penis|bluewhite].");
			}
			else {
				writeText("Mix with the [white ingredient, marked with an image of a penis|bluewhite]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			writeText("You could always [change your mind|chemistry]");
			break;
		}
		case "white": {
			writeText("You take the white ingredient, marked with an image of a penis. What will you mix it with?");
			if (data.player.horny == true) {
				writeText("Mix with the [yellow ingredient, marked with an image of a rock|yellowwhite].");
			}
			else {
				writeText("Mix with the [yellow ingredient, marked with an image of a rock|yellowwhite]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			if (data.player.horny == true) {
				writeText("Mix with the [red ingredient, marked with an image of an object shattering|redwhite].");
			}
			else {
				writeText("Mix with the [red ingredient, marked with an image of an object shattering|redwhite]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			if (data.player.horny == true) {
				writeText("Mix with the [blue ingredient, marked with an image of a brain|bluewhite].");
			}
			else {
				writeText("Mix with the [white ingredient, marked with an image of a brain|bluewhite]. Your mind unclouded, you think this will probably create a dangerous, unstable mixture.");
			}
			writeText("You could always [change your mind|chemistry]");
			break;
		}
		case "yellowred": {
			writeText("You mix together the ingredients, and the result is a frothy orange liquid that's quite fizzy. You recognize the reaction, you've just created acid!");
			writeText("It's safe for any kind of organic material, it'll just melt things like metal or stone.");
			addItem("Orange Potion");
			writeText("[Potion in hand, you should finish up|chemLab]");
			break;
		}
		case "yellowblue": {
			writeText("You mix together the ingredients, and the result is a frothy green liquid that's doesn't seem very reactive. You recognize the consistency, you've created a sleeping potion!");
			writeText("Splashing this on someone should knock them clean out, it's quite effective on infected individuals and is the most common type of sedative used here.");
			addItem("Green Potion");
			writeText("[Potion in hand, you should finish up|chemLab]");
			break;
		}
		case "yellowwhite": {
			writeHTML(`
				t The moment the first drip of the mixtures touch, you realize this was a bad idea. The liquids meeting fuzz and bubble, before exploding outwards in a cloud of gas. 
				t You cough and run back, but you definitely inhaled a lot of the stuff. As you clear your lungs and wait for the cloud to dissipate, you feel your cock twitch. 
				t It's... Absolutely larger than before, by at least two inches. At the very least though it doesn't seem to be growing any further. You'll need to hope nothing bad comes from this. 
				t As you step forwards you sigh with pleasure. Just from walking forwards it's clear your cock's sensitivity is even higher. <b>You'll need to jerk off at some point if you want to be clear headed!</b>
			`);
			data.player.horny = true;
			data.player.flags += "rockPotion";
			writeText("[Clean yourself off|chemLab]");
			break;
		}
		case "redblue": {
			writeEvent('mindBreak');
			writeTransition('theFacility', 'GAME OVER', '#FF0000');
			break;
		}
		case "redwhite": {
			writeEvent('cockBreak');
			writeTransition('theFacility', 'GAME OVER', '#FF0000');
			break;
		}
		case "bluewhite": {
			writeEvent('cockMind');
			writeTransition('theFacility', 'GAME OVER', '#FF0000');
			break;
		}
		case "chemJerk": {
			writeEvent('solo1');
			break;
		}
		case "whizzerDrink": {
			writeEvent('whizzer');
			break;
		}
		case "whizzerFile":{
			if (data.player.wsDisabled == false) {
				writeSpecial("AUTHENTICATION GRANTED");
				writeBig("whizzer.jpg");
				writeText("Research synopsis and update on strain XW-tt2, infected pseudoname 'Whizzer'.");
				writeText("The virus is highly effective and contaminates others quickly, even able to infect subjects already infected.");
				writeText("Almost immediately sperm production in men and infected women ceases, replaced with hyperactivity in the bladder. Subject will immediately piss out  remaining sperm and seek to infect others with their now highly contagious urine.");
				writeText("Male subjects and infected display odd signs when in the presence of whizzer fluid, rationalizing reasons to drink it and even deluding themselves into thinking they're dying of thirst or that it's just colored water. Even if the subject is aware of this effect, they still delude themselves or conveniently 'forget'.");
				writeText("No such reaction occurs with women, so open-top experimentation is permitted while the staff remains all female.");
				writeText("[CLOSE FILE|chemLab]");
			}
			else {
				writeText("This scene has been disabled by your fetish settings for containing watersports content.");
				writeText("[CLOSE FILE|chemLab]");
			}
			break;
		}
		case "infectionFile":{
			writeSpecial("AUTHENTICATION GRANTED");
			writeText("Dear Madeline");
			writeText("As per my last email, you'll find an outline of the infection process below.");
			writeText("We've completely removed the airborne infection ability from the virus after the lackluster performance at the Sanctuary Resort, so only direct fluid transmission is the only method now.");
			writeText("Once someone drinks an infected subject's cum, the changes begin immediately. DNA is overwritten, causing their physical appearances to become more attractive and feminine, but the primary changes occur in the reproductive organs.");
			writeText("For women the womb begins to mutate, eggs and fallopian tubes becoming testicles. 'Fat nuts' as you've called them. They'll begin to be pushed out as a new prostate gland begins to develop, eventually the woman's vagina will expel these new nuts. I understand the process is pleasurable, I don't need to hear your collection of wet popping noises.");
			writeText("At the same time the woman's clit begins to lengthen and change shape until it becomes a fully functioning penis. The woman's eggs, having been thoroughly ravaged by the virus, are expelled in a paste similar to a man's spunk. No, we do not keep any for 'tasting'. New highly infectious sperm cells are then generated and the woman's intelligence & sense of self are overpowered with a desire to spread the infection through rape.");
			writeText("For male subjects the process is mostly similar, the changes to appearance are more pronounced as they become much more feminine. They'll grow highly sensitive breasts and anal sensitivity will improve. Old sperm is pumped out and infectious, highly addictive sperm is built up. Highly submissive males have a higher tendency to mutate into the smaller-dicked strains like Sirens. This improves anal sensitivity even higher and actually decreases cock size. Studies have found that they still remain just as enticing as their large-dicked sisters.");
			writeText("Here's an example we took from an earlier virus test showing the results in action. Hopefully this will satisfy you, and you'll keep your fantasies in your room where they belong instead of endangering everyone here with your self-infection fetish.");
			writeBig("infection.gif");
			writeText("[CLOSE FILE|chemLab]");
			break;
		}
		case "resistanceFile": {
			writeHTML(`
				t Re: INFECTION WEAKNESS (URGENT)
				t Recent tests performed on infection vectors show extremely positive results, however test ID #Gamma-1872 resulted in another example of an infected with near full control of mental capacity. 
				t The linking factor between these cases may be sugar consumption. It's possible that taking infected fluids orally along with food or drink high in sugar will result in a situation similar to a mental vaccine. It's possible this is why there were so many cases of mentally-resistant infected during the test case at Sanctuary Hotel Resort, as the infection was first distributed through cocktails. Some of these likely coated the rim with sugar. The aerosolized drug spread through the hotel afterwards may have been the reason the tests were not a complete failure.
				t Team C formally requests a budget increase to study this phenomenon, and hopefully engineer a resistance in the highly dangerous alpha strain. Having <i>her</i> in the facility can be quite nerve-wracking for some members of the staff.nerve-wracking for some members of the staff. 
				t We already have a test subject, some military officer came into a testing site claiming she was looking for shelter. There's a blockade around the city, nobody should come looking for her. Even if she does develop some of the characteristics like enhanced strength, we don't forsee her containment being a problem.
			`);
			writeText("[CLOSE FILE|chemLab]");
			break;
		}
		case "containmentLab": {
			writeText("You're in the containment lab, and you aren't alone. There's at least five other infected in here, but luckily they're locked up. They're stuck behind a full three inches of strong plastic shielding and a set of thick iron bars.");
			writeText("One is agitated by your presence, and is humping the wall with her sizable cock. Others are attempting to get through the wall and attack you, and the rest don't seem to care.");
			writeText("There's a [central research station here|hordeFile], where a stakeholder synopsis of research on infected hordes was being written.");
			if (data.player.horny == true) {
				writeText("Your cock is already acting up again, it seems like the humping infected woman's show is getting to you more than you expected. If you wanted you could take a seat and [jerk off|containmentJerk].");
			}
			if (checkItem('Green Potion') == true) {
				if (checkItem('White Keycard') != true) {
					writeText("One cell in particular is marked as unused, but has a single infected woman inside. On her neck is a lanyard with your prize. Now that you have the sleeping gas potion, with careful application you can get into the cell and take the item[access keycard|White Keycard] she's wearing.");
				}
				else {
					writeText("You put the infected researcher to sleep, and stole their access keycard.");
				}
			}
			else {
				writeText("One cell in particular is marked as unused, but has a single infected woman inside. She's pressing against the plexiglass for freedom, and you notice she's wearing a tattered labcoat.");
				writeText("Hanging from her neck on a lanyard is a white keycard. Grabbing it would probably help get you into the innoculation lab, but you'll need to disable or knock the infected researcher out first.");
			}
			writeText("There's an air vent shaft on the floor here, the cover has been unscrewed and taken off. It'll lead back to the laboratory hub, but it's so small you should only use it in case of an emergency, like if you were being chased.");
			writeText("If there's nothing else to do here you should probably leave and go back to the [laboratory hub|labHub].");
			break;
		}
		case "hordeFile": {
			writeSpecial("AUTHENTICATION GRANTED");
			writeBig("horde.jpg");
			writeText("We've been noticing a trend lately in certain infection methods, so experimentation has started on groups of infected, dubbed 'hordes'. Usually infected tend not to care about grouping up, they scatter throughout a city looking for prey. However, when a large amount of subjects become infected at the same time a sort of bond is formed between them.");
			writeText("These bonded infected will then stick together and even use rudimentary teamwork to spread the infection, and in turn increase the size of their horde. They'll gang-rape survivors, causing the infection to spread extremely rapidly. ");
			writeText("Some members of the horde, usually those with the smallest dick size, are relegated to bottom positions. Rather than becoming pent up, the horde will frequently engage in orgies, taking whatever frustrations they have out on the 'bottom bitches' as we've come to know them. Bottoms will become more submissive overtime, increasing anal sensitivity and decreasing penis length to near Siren levels. ");
			writeText("[CLOSE FILE|containmentLab]");
			break;
		}
		case "containmentJerk": {
			writeEvent('solo2');
			break;
		}
		case "hordeRelease": {
			writeEvent('releaseTheHorde');
			break;
		}
		case "parasiteLab": {
			writeText("You're in the parasite lab. Here, research is conducted into alternate infection vectors, typically animal or insect methods. The place is splattered over the walls and some desks with an off-white goo, a lot stickier and viscous than cum. Worse, some of the research tanks look like they've been smashed from the inside out, and the tanks beneath are leaking fog which covers the floor of the room. Still, nothing attacks, so hopefully you're safe for now.");
			if (checkItem('Red Keycard') != true) {
				writeText("On the table covered in a slimy gunk is a item[access keycard|Red Keycard].");
			}
			else {
				writeText("You already took the keycard, making sure to clean it off thoroughly.");
			}
			if (checkItem('Soldier Recording 2') != true) {
				writeText("Laying on a nearby table is another soldier's helmet, covered in a very thick layer of slime. Though it's a bit sticky, the item[the memory card inside should be intact|Soldier Recording 2]");
			}
			else {
				writeText("Laying on a nearby table is a soldier's helmet caked in slime. The memory card was intact though, so you took it.");
			}
			writeText("There are a pair of still-functional research terminals in the room. A terminal partially covered in the sticky white substance is on a project codenamed '[spider|spiderFile]', and another caked in cum is a log on a project codenamed '[mind worm|wormFile]'. With your high level of security clearance, you could read up on these to get an idea of what might be on the loose.");
			if (data.player.horny == true) {
				writeText("Something about the unnerving environment is making your skin tingle. You know it'd probably be risky, but a dark part of you wants to take a seat and [jerk off|parasiteJerk].");
			}
			writeText("If there's nothing else to do here you should probably leave and go back to the [laboratory hub|labHub].");
			break;
		}
		case "spiderFile": {
			writeSpecial("AUTHENTICATION GRANTED");
			writeBig("spider.jpg");
			writeText("We're on day 43 of our research into the arachnid infection vector project, progress is good in most areas. We've managed to breed out their desire for male and infected subjects, the spiders only prey on entirely biologically female subjects and ignore everyone else. Results are inconclusive on trans women, but looking good. ");
			writeText("One of the subjects attacked an intern, Roxanne, on day 23. Rather than save her we've been letting her serve as a proof of concept for the oviposition methods. They wrapped her up in a cocoon and implanted eggs vigorously and repeatedly. It seems like with only a single human womb they could reproduce quickly enough to fill a town in a week.");
			writeText("Subjects are kept well-cared for and are provided nutrients, the lubrication fluid is extremely addictive and arousing. Roxanne stopped struggling after only a few minutes, and even though she isn't capable of communication anymore it's very clear she does not want to leave.");
			writeText("Luckily the arachnid's natural tendencies not to wander are highly useful. Unless seeking prey they'll stay put, making containment extremely easy. Some security staff members have been lax though, I've submitted a report to let the spiders free to attack a security squad so that they'll be back on guard. ");
			writeText("[CLOSE FILE|parasiteLab]");
			break;
		}
		case "wormFile": {
			writeSpecial("AUTHENTICATION GRANTED");
			writeBig("worm.jpg");
			writeText("Alright, I don't have long. Security will be in soon to transport me, so I need to get this writing done quickly.");
			writeText("These worms are an emergency measure. In less than 1% of the population mental resistance is strong enough for infected to retain their rationality for a time. These worms seek out those resistant infected, inject them with a powerful paralytic, then enter the infected's body through their ears or nose to access the brain.");
			writeText("I understand it sounds gross but it feels so goooooo");
			writeText("I need to focus, losing control already. I'm hosting one now, I can feel it growing acclimated to my brain chemistry. They find the parts of your brain responsible for rational thought and hijack them. If they think you can lead them to other resistant individuals they'll turn you into a sort of sleeper agent to infect others.");
			writeText("But if they think you have nothing to offer they'll just crush those parts of your grey matter, removing what individuality you might have left. After that they start injecting pleasure chemicals directly into your brain. The guards are almost here to escort me to the inoculation chamber so that the worm can be removed before it finds the sections dedicated to rational tho");
			writeText("<i>The log ends here. You probably shouldn't touch the console, as it's coated in an inhuman amount of cum.</i>");
			writeText("[CLOSE FILE|parasiteLab]");
			break;
		}
		case "parasiteJerk": {
			writeEvent('mindWorms');
			break;
		}
		case "innoculationLab": {
			writeText("The sealed vault door to the inoculation lab opens with a loud hiss. The room is cold, nearly freezing. There's a soft buzz from the walls coming from the numerous refrigeration storage devices lining the walls.");
			writeText("The door seals shut once you enter. You can safely use the room as you please, but it's designed to keep you inside until a security team can escort you out. You can't bypass the system, you'll need to completely shut down the system to escape.");
			writeText("that's pretty bad given the extremely well-braced containment cell in the back of the room. It's meant to contain something big, big enough to put every infected on the loose to shame. There's a [research terminal|alphaFile] next to it with an entry about what's inside.");
			writeText("Escape is the most important thing to you right now, even if it means setting a monster loose right on your heels. The infection cure is here, all you need to do is [administer it|infectionCure], disable the security systems, and then escape.");
			break;
		}
		case "alphaFile": {
			writeSpecial("AUTHENTICATION GRANTED");
			writeBig("alpha.jpg");
			writeText("The alpha strain is a uniquely modified version of the base virus with every aspect tuned to be as efficient as possible. It can't be spread from its original infection, when she infects someone they turn into a regular infected shemale. An alpha also maintains a much higher level of intelligence, able to form single word statements.");
			writeText("Immediately after infection the change begins. Unlike traditional strains the growth here is completed over the course of months and is separated into three distinct development phases.");
			writeText("The first of these phases is in cock growth. The alpha strain causes dick growth like the normal virus, only it causes a much greater degree of growth. Pictured above is shortly before her cock reached the fifteen inch mark.");
			writeText("After that the second phase is bodily and muscular growth. At the end of this phase the alpha is nearly seven feet tall and hundreds of pounds of muscle, far from the hundred pound waif she was in the beginning. Her strength is inhuman, she could absolutely break through containment if the sedative flow is broken.");
			writeText("But she's most dangerous after her third phase, where her personality begins to change. The woman we began out experiments on was extremely docile and submissive, but not one ounce of that is still present. We've had seventeen containment breaches thus far because of her. Eye contact is enough to cause complete submissiveness in some cases. Smelling her skin causes a strong desire to lick her sweat, which has a powerful addictive quality. Her sperm cells give off a pheromone so powerful it needs to be treated as dangerous as nuclear material. They have additional body-altering properties as well to ensure women and men will stretch to accommodate her length.");
			writeText("Her dominance may even have a memetic quality. According to surveys of our teams the alpha is present in the masturbation fantasies of nearly every member of staff, even those barely involved with the project.");
			writeText("This project is an extreme danger to everyone in the facility, I recommend we halt the project as soon as possible, and that the alpha be sent to live on a remote island along with everyone on the project team as soon as possible. Luxuries and resources should be provided solely to suit her desires; based on her semen output the rest of us will not be needing food.");
			writeText("[CLOSE FILE|innoculationLab]");
			break;
		}
		case "infectionCure": {
			if (data.player.flags.includes("rockPotion") != true) {
				writeEvent('cure');
				writeText("You don't have long, you've got no chance if whatever's in there catches you. You need to [get out of the lab|hubChase] as soon as possible.");
			}
			else {
				writeEvent('cockRock');
			}
			break;
		}
		case "hubChase": {
			if (data.player.horny == true) {
				writeEvent('failure');
			}
			else {
				writeText("You should be fine, you tell yourself. You've got a big lead and whatever's behind you is held back by strong metal containments.");
				writeText("When you reach the center of the laboratory hub, you hear a large metal wall being thrown aside in the room behind you. You don't have a lot of choices or time to make one.");
				writeText("The [lobby|lobbyChase] is straight ahead.");
				writeText("Otherwise, you could try to hide in the [chemical lab|chemChase], in the [containment lab|containmentChase], or the [parasite lab|parasiteChase].");
				if (data.player.flags.includes("weaponLabDoor") == true) {
					writeText("You remember you left the cell door open in the [weapon lab|weaponChase]. If you hide in there the alpha might be distracted by the chained-up infected woman.");
				}
				writeText("Whatever you decide, you'll need to hurry.");
			}
			break;
		}
		case "lobbyChase": {
			writeText("You make a mad dash into the floor's main lobby. You can hear the alpha behind you.");
			writeText("The [elevator|elevatorEscape] to the surface is within reach. But if it's slow you could be caught before the doors close. Still, it's your only option now.");
			break;
		}
		case "parasiteChase": {
			writeEvent("spider");
			break;
		}
		case "weaponChase": {
			writeEvent("alpha3");
			break;
		}
		case "chemChase": {
			writeEvent("alpha1");
			break;
		}
		case "containmentChase": {
			writeEvent("alpha2");
			break;
		}
		case "elevatorEscape": {
			writeText("Desperately running for a way out you trip over and slam into the elevator doors. You pick yourself up and mash the button as quickly as you can. ");
			writeText("The elevator's power source runs independently of the rest of the facility for exactly this sort of situation. ");
			writeText("The door opens and you rush inside to hit the button for the surface. As the doors close agonizingly slowly, you can see one of the inner laboratory hub doors being thrown off its hinges. ");
			writeText("The elevator grumbles and starts to ascend. ");
			writeSpeech("player", "", "I'm... I'm alive! I did it... ");
			writeText("Tired, naked, and just barely having escaped from an alpha infected, you finally feel yourself starting to relax despite how cold the floor is. ");
			writeText("The forecast predicted a tropical storm would be hitting the state soon, it's probably pouring up on the surface. You'll need to find clothes, shelter, and food as quickly as possible. ");
			writeText("Despite how weary your body is, you stand back up as the elevator comes to a stop. The doors slide open to reveal dozens of armed soldiers and researchers, all wearing the logo of your company. ");
			writeText("One of them is mid-report, talking about how there were 'no survivors, just as simulations predicted', before everyone stops what they're doing to face you with a look of shock. Within moments your hands are up as multiple rifles are pointed right at you. ");
			writeText("You've escaped infection, where will you end up from here? ");
			writeText("...");
			writeText("You've done it! It's unsure what fate will befall this spunky scientist, but she's been saved from sexual assault and infection for now at least. If this was the goal you've been shooting for, then great job!");
			writeText("Check out the 'Author Information' section in the scenario selection menu for a more detailed set of credits, or play the game again to try and get yourself on the business end of the infected.");
			writeTransition("theFacility", "Thanks for playing!");
			break;
		}
		//Spread Island
		case "spreadIsland": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/spreadIsland.jpg)";
			writeMed("scripts/gamefiles/characters/Spread Island.jpg");
			writeText("Scenario 3 - Spread Island");
			writeText("On a resort island, two newlyweds are enjoying a party-filled honeymoon vacation until all hell breaks loose.");
			writeText("You, a loving husband, must find a way to get yourself and your infected wife to safety.");
			data.player.scenario = "Spread Island";
			updateMenu();
			countScenes();
			writeSpecial("Also, for this campaign you'll need to name your wife:");
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Your wife's name: <input type="text" id="nameSubmission" value="Kate"></p>
				<p class='choiceText' onclick='renameWife()'>Start Spread Island</p>
			`;
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "spreadStart": {
			data.quicksave = null;
			data.player.flags = "";
			writeSpeech("DJ", "none", " Alright party people, you ready to turn it up!?");
			writeText("The crowd roars in approval.");
			writeSpeech("DJ", "none", " Then I'll give you all something to sink your teeth into, let's tear this place apart!");
			writeText("The DJ works his magic and a base line vibrates the whole room. You aren't much of a party person these days, but it's nice to get away from daily life and cut loose.");
			writeText("You're mindlessly shuffling along with the repetitive beat, until you feel a familiar weight rest against you. Your wife is back from the bathroom.");
			writeSpeech("wife", "", "I don't feel so good...");
			writeText("...");
			writeSpeech("player", "", "Too much to drink, honey?");
			writeText("The two of you left the party, hopefully an early rest will help her feel better.");
			writeSpeech("wife", "", "I... The bar was offering that free new drink, I wanted to go for some new experiences... That's all I had though...");
			writeText("She nearly falls over, so you pick her up bridal style and carry her to your room.");
			writeSpeech("wife", "", "I feel... Really bloated... Sorry honey, I ruined our last day-");
			writeSpeech("player", "", "None of that, shush. You'll feel better in the morning. You're a lot more important to me that some party, alright?");
			writeText("She gives you a faint smile, before groaning and rubbing her abdomen and drawing a sharp breath. You manage to get the door to your room open and gently lay her down. You leave her over the covers, she's sweating pretty hard. You start slipping off her 'party clothes', they don't look too comfortable.");
			writeSpeech("wife", "", "They s-said it was a test for something new...");
			writeSpeech("player", "", "Just calm down and try to rest. A drink wouldn't do this, maybe you caught a flu.");
			writeSpeech("wife", "", "Squeezing... Tight...");
			writeSpeech("player", "", "Alright, you stay here. I'll go find some help, alright?");
			writeSpeech("wife", "", "No! Please... Please stay, I can't... Gghh...");
			writeText("Now you're starting to get worried. You grab the phone and dial the lobby, and within a single ring it's picked up.");
			writeSpeech("Receptionist", "none", "Merridot lobby, how can I help?");
			writeSpeech("player", "", "It's my wife, I think she's sick. We're in room 106.");
			writeSpeech("Receptionist", "none", "Alright sir, don't panic. We've gotten a few other reports like that so our medic is busy. I'll call in an ambulance for them to take a look-<br>Ma'am? Ma'am I'm sorry, you can't walk around dressed like that, I-");
			writeText("You hear the receptionist drop the phone and the sounds of a scuffle.");
			writeSpeech("Receptionist", "none", "Please, calm- What is- Stop! Stop please! No!!!");
			writeSpeech("player", "", "Hello? What the hell is going on over there? Hello?!");
			writeText("This is going nowhere. You hang up and dial the emergency number, but the line is busy.");
			writeSpeech("player", "", "What the fuck, you can get put on hold? What kind of third world... Honey?");
			writeText("Your wife is writhing on the bed, it looks like she's in pain. She's moaning and shaking from side to side, she looks delirious as she starts slipping her panties down.");
			writeText("Her clit is bright red and swollen, it almost looks like it's growing.");
			writeSpeech("player", "", "Honey, you didn't... <br><i>No, she was only in the bathroom for a few minutes, and an STD wouldn't kick in this fast. <br>And what the hell am I thinking? She wouldn't cheat on me on our honeymoon.</i>");
			writeSpeech("wife", "", "Aaagh! It won't... Hhhg... It won't come out!");
			writeBig("intro-1.gif");
			writeText("Her labia is spread out as she tries to push something, but winks back closed and she groans from heavy exertion. There's a small but visible bulge on her pubic area.");
			writeText("Suddenly there's a thud at the door. Panicked, you rush over and open it, and a young woman stumbles, nearly falls, into your room.");
			writeSpeech("player", "", "Thank god, you must've run all the way here. She's on the bed, quick, help her!");
			writeText("The young woman shambles over to the bed, a strange look in her eyes. As she approaches your writhing wife, you finally notice the bulge in her shorts.");
			writeBig("intro-2.gif");
			writeSpeech("player", "", "What the hell?");
			writeText("She's got a dick, and it looks like she wants to use it. You're [frozen in shock|frozen], trying to find the state of mind to [shove her away|shoveHerAway] from your wife.");
			break;
		}
		case "frozen": {
			writeEvent(scene);
			writeTransition('scenarioSelect', 'GAME OVER', '#FF0000');
			break;
		}
		case "shoveHerAway": {
			writeText("You tackle the woman and push her towards the exit. She's disorientated, but pretty strong. You barely manage to get her out of the door and slam it shut. She bangs on the door a few times but after you hear a man screaming outside the banging stops. She must've found someone else.");
			writeSpeech("player", "", "Alright, we need to get out of here.");
			writeSpeech("wife", "", "Nnnngh!");
			writeText("Your wife lets out a high-pitched scream before a sudden wet *POP* sound fills the air, and her body goes slack.");
			writeText("Where her clit was is now a full-on cock, and a pair of egg sized balls have replaced her cunt. She wraps her hand around her new shaft, eager to finally feel relief.");
			writeBig("shove.gif");
			writeSpeech("wife", "", "Yesss... Cumming...");
			writeSpeech("player", "", "Honey! Honey please, stay with me! We need to get out of here, I won't abandon you! We need to get back home, home to our families!");
			writeSpeech("wife", "", "Home... Where everyone else is... Everyone else...");
			writeText("She's in some kind of delusion as her cock jerks. Someone on the mainland must be able to help, some doctor, some surgery, anything. But first you need to get out of here.");
			writeSpeech("player", "", "Keep the door closed, don't open it for anyone but me, alright? I'll find some help, a wheelchair if I have to, and we're making it out of here alive. You still with me?");
			writeSpeech("wife", "", "Mhmm...");
			writeText("She weakly mumbles out a response before closing her eyes. She needs rest, at least she isn't going psycho rapist like that woman you kicked out.");
			writeText("For now you need to find a safe way out of the resort so that you and your wife can get off the island, and quickly. From the sounds of things, this isn't a localized incident. People all over the resort are turning. [You need to get moving, quickly|hotelRoom].");
			break;
		}
		case "hotelRoom": {
			writeHTML(`
				t You're in room 201 of the Sanctuary Hotel. The structure of the room means there aren't any windows.
				t Your wife, wifeF, is on the bed getting some rest. Once you've found a safe way out you should wake her and get moving, there's no telling how long until another infected arrives.
				t ?item Strange Gas; You have the container of strange gas with you. It might be some kind of antidote, but it isn't likely. Still, looking at the flaccid dick between your wife's legs, you're desperate for any kind of hope. Will you [expose her to the strange gas?|hotelWifePleasureGas]?
				t ?item Bedding Rope; You found a safe way out by [climbing down from the window of room 204|hotelEscape]
				t It seems like the woman from earlier was distracted, it should be safe to [head out into the hallway|hotelHallway].
			`);
			break;
		}
		case "hotelWifePleasureGas": {
			writeEvent(scene);
			break;
		}
		case "hotelHallway": {
			writeHTML(`
				t You're in the second floor hallway of the Sanctuary Hotel. Something's going on with the hotel's systems, every door's electronic lock is registered as 'unlocked'. Almost like someone <i>wants</i> the rooms to be accessible.
				t [Room 201|hotelRoom] is where you and your wife are staying. With the doors malfunctioning it's not safe to stick around. Once you've found a way out you can safely go back and get her.
				t [Room 202|hotel202] is across the hallway, you can hear someone sobbing through the door.
				t [Room 203|hotel203] is a little down the hall, and is unlocked.
				t [Room 204|hotel204] a little down and across the hall, the door is wide open and nobody's inside.
				t Down the stairs is the main lobby, maybe the only way out. You could [grab your wife and head downstairs|hotelMainExit] as a last resort, but you can hear the sounds of chaos down there.
			`);
			break;
		}
		case "hotelMainExit": {
			writeEvent(scene);
			break;
		}
		case "hotel202": {
			writeHTML(`
				t You're in room 202 of the Sanctuary Hotel, or at least you're looking inside.
				t The room is trashed, with no windows or working lamps to illuminate the room. In the shadows you can see someone, it almost looks like her hair is growing. The noises she's making are having some kind of effect on your head, like you've got a headache and her voice is clearing it.
				t [She seems so sad, you can comfort her with your big strong arms|hotelFreshSiren].
				t [Or you could resist and close the door|hotelHallway].
			`);
			break;
		}
		case "hotelFreshSiren": {
			writeEvent(scene);
			break;
		}
		case "hotel203": {
			writeHTML(`
				t You're in room 203 of the Sanctuary Hotel. The room is in pristine condition.
				t Atop the bed is a strange suitcase. It's open, with a pair of canisters of some strange pink gas inside. One of the canisters has a hose attached, and is connected to an air vent. You could probably [break the hose|hotelPleasureGas] if you really tried.
				t !item Strange Gas; The other canister isn't in use. It's definitely got something to do with what's going on, maybe you should item[take the unused canister|Strange Gas]?
				t ?item Strange Gas; You already took the other canister.
				t !item Bedding; Since the room is untouched, the item[bedding and sheets|Bedding] are still here. They might be useful.
				t ?item Bedding; The beds are bare aside from the suitcase, as you took the bedding and sheets.
				t [Head out into the hallway|hotelHallway].
			`);
			break;
		}
		case "hotelPleasureGas": {
			writeEvent(scene);
			break;
		}
		case "hotel204": {
			writeHTML(`
				t You're in room 204 of the Sanctuary Hotel. It's been picked clean. Food from the fridge, towels, even the sheets from the bed have been taken.
				
				t ?item Onahole; The drawers are empty.
				t !item Bedding; There's a window here, but it's a full story drop to a paved walkway below. 
				t ?item Bedding; !item Bedding Rope; There's a window here, but it's a full story drop to a paved walkway below. With the bedding you took from the other room, you could item[make a rope to climb down|Bedding Rope].
				t ?item Bedding; ?item Bedding Rope; There's a window here, but it's a full story drop to a paved walkway below. You've created a rope to [climb down and escape|hotelAbandon], but what about wifeF? You'll need to go back for her if you want to escape together.
				t [Head out into the hallway|hotelHallway].
			`);
			//t !item Onahole; Everything... Except a fleshlight. There's an onahole here, still in the box inside one of the drawers. This probably wasn't a priority to be taken. If you really feel like you'll need it, you could item[take it with you|Onahole].
			break;
		}
		case "hotelAbandon": {
			writeEvent(scene);
			break;
		}
		case "hotelEscape": {
			writeHTML(`
				t You gently nudge wifeF awake. She's exhausted from the toll the infection is taking on her body, but she's human. That's all that matters. 
				sp player; Come on honey, it isn't safe here. I've got a safe way out, let's go.
				t She nods and slowly climbs out of bed, needing to lean on you as you make your way to room 204.
				t As you pass the strange suitcase her eyes linger on it and the pink gas container inside.
				t But you have bigger things to focus on. You set up the rope, throw down a pile of pillows, and make sure it's secure before you climb down. She's behind you, although she nearly falls and you need to help her.
				sp wife; Honey... I can't focus...
				sp player; It's fine, just stay in control.
				t Looking around you can see a way out of the hotel towards the less populated expensive villa area. If anyone is getting help right now it'd be the richest folk. 
				...
				t You arrive in the villa area, but there's nobody to be seen. Maybe they've already been evacuated?
				t Suddenly, wifeF can no longer support herself and nearly falls.
				sp player; wifeF? What's wrong?!
				t Her breathing is ragged, so you take her into a thankfully unoccupied building and set her upon the large bed. Almost immediately she begins stroking the very erect member between her legs.
				sp wife; I... I can't!
				t Her balls look full to burst, and she's jacking herself off as furiously as she can. Yet...
				t She can't cum. At least not with just her hand.
				t You gulp dryly as you come to a stunning conclusion. If you and her are going to get off this island, you'll need to [find some way for her to get off|villaKing]
			`);
			break;
		}
		case "villaKing": {
			writeHTML(`
				t You're in the king villa, a large resort villa for the ultra wealthy. It must have been evacuated already, because the place has clearly been looted. The fridge, hanging open, has nothing but partially melted ice inside.
				t There's nothing of value left besides wifeF on the bed, fruitlessly jerking herself off. Tears are forming in her eyes as she arches her back, it wasn't exhaustion slowing you two down before, but mind-consuming lust. It's clear she isn't able to get off herself, despite how frantically she jerks herself.
				t If you can't find anything to help her with... You may need to [help her yourself|wifeHelp].
				t ?item Onahole; [You could give her the onahole you found.|wifeOnahole].
				t ?item Dildo; [You could give her the dildo you found.|wifeDildo].
				t ?item Chastity Cage; [You use the ice from the nearby fridge combined with the chastity cage to keep her dick in check|wifeCage].
				t [You can head outside, into the affluent villa district|villaOutside].
			`);
			break;
		}
		case "wifeHelp": {
			writeEvent(scene);
			break;
		}
		case "wifeDildo": {
			writeEvent(scene);
			writeHTML(`
				...
				t The two of you move on, leaving the affluent district behind. There's no helicopters, no tanks, no police of any kind. The island must be devolving into chaos, but there's no trace of government response.
				t As you're wandering around a hiking path looking for any kind of help, you feel a small bite on your neck.
				t You hear wifeF freaking out for some reason as you lift your hand to scratch the bite, only for your hand to brush against something... Metal.
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('scenarioSelect', 'END OF PREVIEW', '#FF0000');
			}
			//writeText("The earth goes wobbly, and [sleep suddenly seems like a great idea right now|compoundAwaken].");
			break;
		}
		case "wifeOnahole": {
			writeEvent(scene);
			writeHTML(`
				...
				t The two of you move on, leaving the affluent district behind. There's no helicopters, no tanks, no police of any kind. The island must be devolving into chaos, but there's no trace of government response.
				t As you're wandering around a hiking path looking for any kind of help, you feel a small bite on your neck.
				t You hear wifeF freaking out for some reason as you lift your hand to scratch the bite, only for your hand to brush against something... Metal.
				t The earth goes wobbly, and [sleep suddenly seems like a great idea right now|compoundAwaken].
			`);
			break;
		}
		case "wifeCage": {
			writeEvent(scene);
			addFlag('caged');
			writeHTML(`
				...
				t The two of you move on, leaving the affluent district behind. There's no helicopters, no tanks, no police of any kind. The island must be devolving into chaos, but there's no trace of government response.
				t As you're wandering around a hiking path looking for any kind of help, you feel a small bite on your neck.
				t You hear wifeF freaking out for some reason as you lift your hand to scratch the bite, only for your hand to brush against something... Metal.
				t The earth goes wobbly, and [sleep suddenly seems like a great idea right now|compoundAwaken].
			`);
			break;
		}
		case "villaQueen": {
			writeHTML(`
				t You're in the queen villa, a medium resort villa for the wealthy.
				t And the perverted, apparently. The walls are lined with bondage gear and sex toys of varying shapes and sizes. From ball-gags to zipper outfits...
				t !item Dildo; There's a collection of dildos on the wall, you could item[grab one and take it back to your wife|Dildo].
				t ?item Dildo; There's a collection of dildos on the wall, you don't need more than one. You hope.
				t ?item Chastity Cage; You already took a chastity cage, there's no reason to take another. It's not like any of the other infected will let you put one on them.
				t [You can head outside, into the rich district|villaOutside].
			`);
			//t !item Chastity Cage; There's also a collection of chastity cages in varying sizes. The largest one should fit wifeF. She might not like being caged up, but you might need to item[take one with you|Chastity Cage].
			break;
		}
		case "villaSoldier": {
			writeHTML(`
				t You're in the soldier villa, a small resort villa for the wealthy. Despite it's name it seems to be made for high class vacationers just like the other two.
				t Peeking inside, you can see someone's already here. Someone is rummaging through the fridge with a pile of foodstuffs besides her. It's a looter.
				t Aside from her, there doesn't seem to be anything worth taking in here. Nothing that will help wifeF anyways. Unless...
				t You could grab something blunt, drag her across the way, throw her in through the door...
				t You shake your head. You can't be considering [sacrificing her to get your wife off|wifeSacrifice], can you?
				t [You can head outside, into the affluent villa district|villaOutside].
			`);
			break;
		}
		case "wifeSacrifice": {
			writeEvent(scene);
			break;
		}
		case "villaOutside": {
			writeHTML(`
				t You're in the wealthier area of the resort. This place was already advertised as paradise, so this must've been sold as a 'premium paradise'. No hotel rooms here, instead each guest is given an entire villa to relax and enjoy their vacation in.
				t First is the [king villa|villaKing] where wifeF is. You can just barely hear her frantically moaning inside, unable to find relief. You'll need to be quick, otherwise you risk someone or something hearing her.
				t Next is the [queen villa|villaQueen], a little ways off.
				t Finally is the [soldier villa|villaSoldier], slightly smaller than the other two.
			`);
			break;
		}
		case "compoundAwaken": {
			writeHTML(`
				t You awaken to a pounding headache, and the sound of mysterious voices garbled by what sound like gasmasks.
				sp ???; im none; His wife has turned, but she's clearly a resistant. With so many the second formula must be defective, right? Any sign of infection on him?
				sp ???; im none; No, not yet anyways. It's a shame, watching the guy get turned by his wife would've been pretty hot.
				sp ???; im none; We get a bonus if we turn anyone with an eel. God, what were they thinking when they created a breed that needs hours to prepare?<br>And seriously Tasha, get your head out of the shitpipe. We're here on business.
				sp ???; im none; Aww come on, you're still on that whole global destabilization thing? Why can't you be honest and admit you've got a massive fetish for...
				t The conversation fades as the two of them walk away. Peering through a small hole into the hallway, you can see more people patrolling around. They're wearing some kind of urban camoflague, and their faces are obscured by thick masks. All of the men are wearing headphones as well.
				t This is a dangerous situation, these people aren't working for any government you know. With wifeF somewhere else and you locked in here, there's no telling how you'll make it out of this alive.
				t Still, you should [plan your escape|compoundRoom].
			`);
			data.player.guardMovement = 0;
			break;
		}
		case "compoundRoom": {
			writeHTML(`
				t You're in some kind of cell, or at least the best one that cound be made out of some kind of closet.
				t !flag playerDoorUnlocked; The door is locked, and won't budge. It's some kind of electronic lock that's been fitted onto the door, they must still have power over here. There's no keyhole, but there is a small hole you can peer through.
				t ?flag playerDoorUnlocked; You unlocked the door with the compound's command console, so you can freely [head out into the hallway|compoundHall], so long as you're careful not to be caught.
				t Searching around, you can see an air vent that probably connects to a series of ventilation shafts. Why some prying the loose bolts break off and you can [crawl inside|compoundVent1].
			`);
			calculateMovement();
			break;
		}
		case "compoundVent0": {
			writeHTML(`
				t Through the grate you can see a small storage closet. You can [climb out|compoundCloset] if you'd like.
				t You can head [forwards|compoundVent1] or [wait|compoundVent0].
			`);
			break;
		}
		case "compoundCloset": {
			writeHTML(`
				t You're in a small storage closet. Various cleaning supplies and other goods tell you this building probably wasn't built to be a military stronghold, whoever's running the place must be using this as a temporary base of opperations.
				t !item Wire Cutters; There doesn't seem to be anything too useful, especially against armed soldiers, but maybe you could use a pair of item[wire cutters|Wire Cutters] as a weapon?
				t ?item Wire Cutters; You already took the pair of wire cutters.
				t !flag closetDoor; The door out is locked tight, and breaking it open would make a ton of noise. Better play it safe.
				t ?flag closetDoor; You unlocked the door from the other side, so you can [safely leave the closet|compoundMain].
				t Aside from that there isn't anything too useful in this place, using a small box you can [climb back into the vent|compoundVent0].
			`);
			break;
		}
		case "compoundVent1": {
			writeHTML(`
				t Through the grate you can see the room you were trapped in. You can [climb out|compoundRoom] if you'd like.
				t You can head [forwards|compoundVent2], [backwards|compoundVent0], or [wait|compoundVent1].
			`);
			calculateMovement();
			break;
		}
		case "compoundVent2": {
			writeHTML(`
				t Through the grate you can see a room filled with transparent containers of pink gas.
				t !flag gasDisturbed; The grate here is loose, you can [climb out into the gas room|compoundGasRoom]. However it's a solid drop, so you won't be able to climb back in.
				t ?flag gasDisturbed; A soldier with a mask is trying to patch up the hose you broke. It's not safe to head in. You thank your lucky stars that the gas seems to be dense enough it can't reach up here.
				t You can head [forwards|compoundVent3], [backwards|compoundVent1], or [wait|compoundVent2].
			`);
			calculateMovement();
			break;
		}
		case "compoundVent3": {
			writeHTML(`
				t Through the grate you can see a large kennel, each cage containing a sleeping dog.
				t !flag houndsDisturbed; The grate here is loose too, you can [sneak in|compoundKennels] if you're careful. However it's a solid drop, so you won't be able to climb back in.
				t ?flag houndsDisturbed; Several soldiers are trying to calm the dogs down, it's not safe to go in. You're certain one is looking at you, if they set those dogs loose to hunt you down...
				t You'd rather not think about it.
				t You can head [forwards|compoundVent4], [backwards|compoundVent2], or [wait|compoundVent3].
			`);
			calculateMovement();
			break;
		}
		case "compoundVent4": {
			writeHTML(`
				t Through the grate you can see wifeF, resting on a bed. She's asleep, and the bolts on this vent have been properly maintained. No breaking in from here.
				t You've crawled in a sort of circle, so her room must be directly next to yours. If you could unlock the doors in this place you'd have no trouble getting to her.
				t You can head [backwards|compoundVent3], or [wait|compoundVent4].
			`);
			calculateMovement();
			break;
		}
		case "compoundGasRoom": {
			writeHTML(`
				t You're in a room filled with transparent canisters filled with a strange pink gas. They're probably the same as the ones you saw in the suitcase back at your hotel.
				t From here you can't actually climb back up to the vents, you're in serious danger if you're caught.
				t !item Wire Cutters; A large machine seems to be pumping the strange pink gas. The hoses look a lot stronger than the one you saw before.
				t ?item Wire Cutters; A large machine seems to be pumping the strange pink gas. The hoses look a lot stronger than the one you saw before. You could use your [wire cutters|gasDisturbed] to cause some serious mayhem with just a small cut, then sneak out.
				t You're hiding behind the doorway as a patrol goes by, you should be able to [sneak out of the room|compoundMain] if you're careful.
			`);
			calculateMovement();
			break;
		}
		case "gasDisturbed": {
			writeHTML(`
				t You pull out the wire cutters and get to work creating a gas leak.
				t Only a very small cut will do, you can't risk exposing yourself to the stuff. Good thing too, because this is some seriously thick rubber tubing. It's under a lot of pressure, so once you break through you can hear a *HSSSSS* as pink smoke is released. You hold your breath and hide in a corner until a group of people runs in.
				t Now, while the soldiers are focused on the gas leak, you need to [sneak out of the room|compoundMain]!
			`);
			addFlag("gasDisturbed");
			break;
		}
		case "compoundKennels": {
			writeHTML(`
				t You're in some kind of kennel, but the animals in here are anything but normal. Large, tough-looking hounds that could tear a man apart at a moment's notice. Good thing they're asleep.
				t From here you can't actually climb back up to the vents, you're in serious danger if you're caught.
				t There's an exit to some kind of main lobby, this whole building isn't too secure against people who still have functioning brains. Still, there are still patrols going on, you can't get out without causing a distraction. Speaking of a distraction... If you [rattled these cages a little|houndsDisturbed] these boys would probably make enough noise for the whole facility to hear, allowing you to sneak around the compound.
				t There's not a lot of room here, if you need to hide the only spot is [right behind one of the cages|compoundHounds], and squeezing behind there would absolutely wake the beast up. 
			`);
			calculateMovement();
			break;
		}
		case "compoundHounds": {
			writeEvent(scene);
			break;
		}
		case "houndsDisturbed": {
			writeHTML(`
				t The hounds are asleep, completely out of it at the moment. You silent tiptoe up to the cage...
				t And smack the fuck out of it.
				t The dog inside goes absolutely insane, thrashing about in surprise and anger, before it turns into just anger. He barks and snarls, and soon every dog in the room has joined him. You rush over to the side of the room until a few soldiers rush in to check on the hounds.
				t Now, while the soldiers are focused on the dogs, you need to [sneak out of the room|compoundMain]!
			`);
			addFlag("houndsDisturbed");
			break;
		}
		case "compoundWifeRoom": {
			writeHTML(`
				t You're in your wife's cell. She's currently asleep, although she's panting and rubbing her erect shaft through her clothes. You don't know how much longer she can take being cooped up in here. If you think the way out is clear, you can [wake her up and make a break for it|compoundEscape].
				t You've unlocked the door with the main console, the way into the [main hallway|compoundHall] is clear.
			`);
			calculateMovement();
			if (checkFlag('caged') == true) {
				writeEvent("compoundCage");
			}
			break;
		}
		case "compoundHall": {
			writeHTML(`
				t You're in a small, nondescript hallway. From here the escape route is open and in the chaos you should be okay.
				t The door to your cell is here. You can [head inside|compoundRoom] if you have unfinished business.
				t The door to your wife's cell is here as well. You can [head inside to rescue her|compoundWifeRoom].
			`);
			break;
		}
		case "compoundMain": {
			writeHTML(`
				t You're in some kind of main lobby, various decorations welcoming you to 'the best vacation island on the ocean', multiple fliers advertising Sanctuary Hotel.
				t !flag gasDisturbed; There are still a few soldiers around, but you should be able to sneak into a [room full of gas canisters|compoundGasRoom]. However, there might be someone inside, so it's risky to enter from here.
				t ?flag gasDisturbed; There's a very mild pink fog seeping from the gas room, causing a distraction as the soldiers rush to repair the line.
				t !flag houndsDisturbed; There are still a few soldiers around, but you should be able to sneak into what appears to be a [kennel room|compoundKennels]. However, there might be someone inside, so it's risky to enter from here.
				t ?flag houndsDisturbed; The hounds are barking, attracting attention to the kennels. You should be safe to roam around the compound.
				t You can sneak over to a [small door, probably some kind of closet|compoundCloset].
				t Finally, there's a larger door, cracked halfway open. Inside you can see some monitors, it must be a sort of [control room|compoundControlRoom].
			`);
			addFlag("closetDoor");
			break;
		}
		case "compoundControlRoom": {
			writeHTML(`
				t You're in some kind of cobbled together control room, varying monitors showing what appear to be feeds all across the island. Several monitors are just command consoles, displaying stats measuring how many people have been infected, and what vector transformed them.
				t Typing 'help' into the main console lists a variety of options, only a few of them are particularly useful though. You enter in the unlockDoor(*) command immediately, and a little feedback message shows that <b>all locked doors inside the building are now unlocked</b>.
				t !item Kennels Opened; item[Set the kennels to open up on a timer|Kennels Opened].
				t ?item Kennels Opened; You've set the kennels to open on a short timer, that should stop anyone from following you.
				t !item Gas Opened; item[Start overloading the gas room, so that it explodes after a short buildup|Gas Opened].
				t ?item Gas Opened; You've set the gas to build up, ignoring the warnings that critical mass will cause an explosion of infectious material soon. That'll serve them right for infecting wifeF.
				t In the chaos you should be able to [sneak back out of the control room, into the lobby|compoundMain].
			`);
			addFlag("playerDoorUnlocked");
			break;
		}
		case "compoundEscape": {
			writeHTML(`
				t You shake wifeF awake, and her eyes shoot open. For a second you worry she's completely turned, until...
				sp wife; Honey? What's-
				sp player; No time, we need to get out of here. Come on!
				t You take her by the hand and the two of you sprint off. This place is about to go to hell, so not much point in being sneaky anymore. In the chaos the two of you manage to get out of the facility, and it seems like the road is mostly clear of infected.
				t You cast one last look at the building behind you.
				...
			`);
			if (checkItem("Kennels Opened") == true) {
				if (data.player.beastDisabled != true) {
				writeHTML(`
					t The place has gone to hell indeed. Instilling loyalty in the hounds should probably have been a priority. That isn't a mistake the hounds will make though.
					t Teeth tear away at body armor, jaws crunch masks into pieces, and most soldiers go down before they can even fire a shot.
					im endingHounds.gif
					t The women are broken to serve the hounds, being pounded and knotted until their new masters cocks pop out, and they're turned into infected bitches soon after.
					t The "men" are turned more slowly, forced to serve the hounds with their mouths and tongues until they're addicted to the taste of virile beast, but in the end every one of them is turned as well. Their new breasts make service easier.
					...
				`);
				}
				else {
					writeText("This ending blurb has been disabled by your content preferences!");
				}
			}
			if (checkItem("Gas Opened") == true) {
				writeHTML(`
					t The building is rocked by a sudden explosion, before a thick gout of gas begins to seep into a fortified safe room with a pair of soldiers in it.
					t One of them simply sighs, and starts to undo the clasps on her mask.
					sp ???; im none; Tasha! What the fuck are you thinking?!
					sp ???; im none; It's over, the mission's a failure. The higher-ups are gonna write this whole thing off, why the hell would they stick their necks out for us?<br>... You've seen the faces of the people who inhale this stuff, right? I haven't been satisfied with one-night flings since the first time I used this stuff on somebody.
					t Tasha takes a deep breath of the pink gas and her eyes cross before they roll back in their sockets. The smoke works fast. It feels like lightning is arcing through her body, and she barely notices that her companion is undoing her belt.
					sp ???; im none; Fuck's sake, at least get undressed first. I'm on top, alright? Honestly, I have always kinda wondered what dicking somebody felt like...<br>Hey, you fried already? Jesus this stuff pops your brain fast.
					t It pops something else quickly too. By the time the soldier has her gasmask off Tasha is already able to start showing off her brand new cock.
					im endingGas.gif
					sp ???; im none; I'd better get one as big as that...<br>I guess something cute would be pretty hot too.
					t The soldier takes a deep breath, and within seconds can feel her gray matter turning to mush.
					...
				`);
			}
			writeHTML(`
				t Exhausted, you nearly collapse on the ground. You must be nearly half a mile away from the compound by now, yet you can still hear the sounds of chaos coming from the base.
				t You lean against a large rock for support, and wifeF leans against you nuzzling you.
				sp wife; We're... We're not making it off the island, are we? 
				t Her voice isn't nearly as ragged as yours. Maybe the infection has it's perks after all. Yet there's an airyness to her breath, like she's barely holding herself back.
				sp player; I don't think so.<br>... Make it quick, alright?
				sp wife; What?
				sp player; Living like this... I don't know how long I'll manage, but I'd rather go on my own terms, with you. I'm ready.
				t You close your eyes, waiting to hear the sounds of wifeF shedding her clothes, or maybe the sensation of her tackling you, yet all you feel is a swift slap to the face.
				sp wife; After all that, you're giving up?! Fuck that! If I've managed to hold back this long...<br>It wasn't for nothing. We're making it off this shithole, and I'm leaving a one-star review.
				sp player; But...
				sp wife; But nothing! I may... May not be able to hold myself back forever, but you and I are figuring out what made me like this. I'm not spending a single hour on this godforsaken island unless I at least have some company who can smash two brain cells together!
				t You sigh, happy that wifeF seems to be keeping a hold on her ego at least. You aren't sure how she's managed to resist turning into a zombie, but she has a point. Wandering the island as a pair of horny dickgirls sounds a lot better than being hunted, or turning mindless yourself.
				t The two of you have another adventure ahead of you, but for now, this is...
				t <b>THE END</b>
			`);
			writeText("...");
			writeText("You've done it! It's unsure what fate will befall this pair of lovebirds, but at least this honeymoon will be a lot more passionate than it would be otherwise. If this was the goal you've been shooting for, then great job!");
			writeText("Check out the 'Author Information' section in the scenario selection menu for a more detailed set of credits, or play the game again to try and get some of those other scenes.");
			writeTransition("spreadIsland", "Thanks for playing!");
			if (checkItem("Opened") == false) {
				writeEvent("compoundFailure");
			}
			break;
		}
		//Scarlet Mansion
		case "scarletMansion": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/scarletMansion.jpg)";
			writeMed("scripts/gamefiles/characters/Scarlet Mansion.jpg");
			writeText("Scenario Preview - Scarlet Mansion");
			writeText("In a forest bordering a quarantined city there's a scarlet mansion not listed on any map.");
			writeText("You, a brother searching for his missing sister, must explore the mansion and live to find out what bizarre experiments are underway.");
			data.player.scenario = "Scarlet Mansion";
			updateMenu();
			writeSpecial("This scenario is only a demo, so all that's available are a few short scenes that are made to convey the idea of what this route will contain. If you like it, please voice your opinion! Leave comments or a review on TFGames, voice what you like on Discord, or support me on Patreon.");
			writeTransition("scarletStart", "Play the Preview");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "scarletStart": {
			data.items = [];
			data.quicksave = null;
			data.player.flags = "";
			sceneTransition('scarletIntro');
			break;
		}
		case "scarletIntro": {
			writeSpeech("Lansing", "images/Scarlet Mansion/lansing.jpg", "This is Sergeant Lansing of Charlie Team, two days into the search and no sign of the missing civilians. We had an ATV searching the forest near the border of Mongoose City, but have since lost contact with them.");
			writeText("We found signs of Franklin, member of Bravo Team, in a barricaded section of the forest three hours ago. Scraps of cloth, ID tags, and several samples of a unknown white substance with narcotic effects. We hope to see the results soon, but communication with the police station we sent the samples to has suddenly stopped.");
			writeText("The team and I have stopped at a mansion in the forest, not present on any maps. Local wildlife is highly agitated, so we'll be taking shelter here until backup arrives.");
			writeText("That was the last anyone heard of Charlie Team, it was more than a week ago. Backup never came, orders were sent to all local divisions to abandon the city and set up security checkpoints as roads leading in. Defying their blockade, you set out through the barricade lines with an unregistered vehicle. Your sister, Kelsey Lansing would hate to hear you've come to rescue her, but what kind of big brother would you be if you just left her out here?");
			writeText("You come to a stop just off the road. According to the mission logs, the mansion should close. All you need to do now is [make your way through the forest|scarletForest].");
			break;
		}
		case "scarletForest": {
			writeText("The air is cold and dry, it's late autumn so the forest's floor is covered in leaves. The trees are too dense for your car, so you decide to hoof it. Unable to sneak in any powerful weaponry, all you've got is a stun-gun, your wilderness exploration gear, and a radio.");
			writeText("Along the path is a [broken-down shed|scarletShed]. It looks like at one point it was heavily barricaded, meant to keep something out.");
			writeText("In the distance, you can make out the sounds of dogs howling and barking. It doesn't seem to be getting louder, so they aren't getting any closer. Aside from that, the forest is pretty calm. You should be fine to [continue on|scarletMansionEntrance].");
			break;
		}
		case "scarletShed": {
			writeText("You decide to check out the shed. The door and windows are boarded up, but the west-facing wall has been smashed through.");
			writeText("You can see scraps of clothes and some kind of fluid stains the walls and floor. You stick your head in through the broken wall for a better look.");
			writeText("A smell hits you right away, kind of like fish and sweat. It's pretty awful, something about it is making you feel woozy. It'd be best to [keep moving|scarletForest].");
			break;
		}
		case "scarletMansionEntrance": {
			writeText("Not having anything in particular to go on, you follow the sound of the dogs. Soon enough the trees give way to a massive clearing with a looming mansion in the center.");
			writeText("It's got red walls and all of the windows are covered by curtains. One of the lights is on, but the window is blocked off by iron bars.");
			writeText("A pair of [sturdy wooden doors|scarletEntry] on the front, the mansion is pretty intimidating. This is something straight out a horror flick. Still, if Kelsey is alive, she's probably inside. You should try the door.");
			writeText("Near the entrance is a [massive kennel|scarletKennel], several dogs wildly barking and throwing themselves against the cage walls to get at you.");
			break;
		}
		case "scarletKennel": {
			if (data.player.beastDisabled == false) {
				writeText("The walls are study enough, so you should be fine to check it out. You get closer to the cage.");
				writeText("The dogs are absolutely rabid. They're all Dobermen, but something is off about them. They gnaw and claw at their containment, probably eager to tear you apart. There's the some fluid splattered on the inside of the cage. They're all wearing studded leather collars with big... Batteries? They're some kind of shock collars probably, way stronger than anything you could get over the counter.");
				writeText("After a minute, it hits you as to what's different about them. They're bigger than their breed should be, more muscular, and they're all erect. They've each got a second collar on, fastened around their dicks each also with a smaller battery on them. They don't seem happy about it, you should [get moving|scarletMansionEntrance].");
			}
			else {
				writeText("The walls are study enough, so you should be fine to check it out. You get closer to the cage.");
				writeText("The dogs are absolutely rabid. They're all Dobermen, but they're all partially decomposed, like they're straight out of a zombie movie. They gnaw and claw at their containment, probably eager to tear you apart. There's the some fluid splattered on the inside of the cage. They're all wearing studded leather collars with big... Batteries? They're some kind of shock collars probably, way stronger than anything you could get over the counter.");
				writeText("They don't seem happy about their containment, you should [get moving|scarletMansionEntrance].");
			}
			break;
		}
		case "scarletEntry": {
			writeText("You approach the door, it has multiple scratch marks on the front but otherwise it's pristine. You give a knock, but there's no response. Testing your luck you turn the knob, and the door opens. It wasn't locked.");
			writeText("As you walk in you hear something metal snap behind you, and the barking from the kennel gets louder and closer. Thinking quickly you shut the door and feel something slam against it. Looks like you'll need to find someone, preferably their owner, to deal with the hounds if you want to leave.");
			writeText("The windows are all guarded from the inside by thick metal, so there's no need to worry about the dogs getting in from that end. You should be able to safely [explore the mansion foyer|scarletFoyer].");
			break;
		}
		case "scarletFoyer": {
			writeText("You're in the mansion foyer.");
			writeText("It's very dark in here, and flipping the lightswitch doesn't seem to do anything.");
			writeText("You can hear the sounds of scratching and barking from outside. The big wooden door stands sturdy though.");
			writeText("There's a large staircase leading up to the second floor, with two doors. One leads to the [West Wing|scarletWestWing], and is unlocked. One leads to the East Wing, and has a small passcode lock on it.");
			writeText("Below the staircase is a large oaken door, the two knobs chained together with a massive, rusty iron lock keeping the door closed.");
			writeText("There's a rather flimsy wooden door off to the side with a window on it. It's really dark, but it seems to lead to some kind of [garage|scarletGarage].");
			if (data.player.flags.includes('scarletChastityTorture') == true && data.player.flags.includes('scarletHoundsTorture') == true) {
				writeSpecial("You've already found both of the events of this scenario, it is a demo after all. Thanks for playing!");
			}
			break;
		}
		case "scarletGarage": {
			if (data.player.flags.includes('scarletHoundsTorture') != true) {
				writeText("You open the door to the garage and flip the lightswitch, but no results. Luckily some moonlight is shining into the room, so you at least aren't blind.");
				writeText("The room is strange. You're in some kind of glass box in the corner of the garage with no way to actually explore the rest of the room. It isn't fragile stuff either, it's tempered glass, bulletproof.");
				writeText("There's a figure in the darkness of the room, not moving. It looks vaguely human, like someone chained to the ground. It could also be some kind of a statue or something.");
				writeText("There's a button in the box with you, it looks like the kind used to open garage doors. You could [press it|scarletHoundsTorture].");
				writeText("If you're done in here, you can go back to the [mansion foyer|scarletFoyer].");
			}
			else {
				writeText("You're in the garage, or at least some blocked off section of it.");
				writeText("The room is strange. You're in some kind of glass box in the corner of the garage with no way to actually explore the rest of the room. It isn't fragile stuff either, it's tempered glass, bulletproof.");
				writeText("In the center of the room is an unconscious woman, coated in sexual fluids.");
				writeText("If you're done in here, you can go back to the [mansion foyer|scarletFoyer].");
			}
			break;
		}
		case "scarletHoundsTorture": {
			writeText("You press the button. It must run off a different battery, because the garage door begins to open. Fat lot of good it does you since you're stuck in a box, the only door in here leading you back to the foyer.");
			writeText("As the garage door opens, moonlight shines into the room, revealing the figure in the center. There are no cars, no equipment, just a disorientated looking woman chained to the ground.");
			writeText("As she notices you, she lunges towards your box, only to stop when the chain on her leg is pulled taut.");
			writeText("There's a feral hunger in her eyes, but more noticeably there's a pretty large dick between her legs.");
			writeText("You don't have the time to figure that out though, because it looks like the garage door is partially blocked off by a cage. There's a tunnel connecting the garage door to something outside, and soon enough you see why.");
			writeText("A pair of hounds make their way inside, the whole contraption designed to allow access to the kennel when the button is pushed.");
			writeText("The chained woman doesn't seem to care, and keeps trying to lunge at you as the dogs approach her.");
			writeText("The tempered glass is way too strong for you to break, there's no way to save the woman. It's pretty clear what's about to happen, so you can either [get out of here|scarletFoyer] as soon as possible or stay and event[indulge your morbid curiosity|scarletHoundsTorture].");
			data.player.flags += 'scarletHoundsTorture';
			break;
		}
		case "scarletWestWing": {
			writeText("You're in the west wing.");
			writeText("The door creaks as you walk into the long hallway. It's pretty dark, but you can see the wallpaper is decorated with soft blue and white stripes.");
			writeText("There's a pair of brown doors, probably leading to bedrooms. The door marked with a clover is closest to you is locked, and the [other door marked with a spade|scarletSpadeBedroom] has a dented knob and is unlocked.");
			//writeText("There's a white door with a sign on the front labeled ['Bathroom'|scarletWestBathroom].");
			writeText("The [stairs back to the foyer|scarletFoyer] are behind you.");
			break;
		}
		case "scarletSpadeBedroom": {
			if (data.player.flags.includes('scarletChastityTorture') != true) {
				writeText("You're in the spade bedroom");
				writeText("The wallpaper is white, decorated sparsely by black spade icons. The room is pretty musty, and has a familiar scent.");
				writeText("Across from you is a large bed with white sheets, and chained onto the bed is a woman. She's completely naked excepted for a black blindfold and a chastity cage containing her flaccid dick.");
				writeText("When you enter she shudders for a moment and thrusts her hips into the air as if begging for release.");
				writeText("She groans, but there's no trace of intelligence in her voice. Talking to her is pointless, like she doesn't even register you are speaking.");
				writeText("There's a device on a dresser near the bed, it's the same color as the woman's chastity cage. It looks mismashed together, like it was scrapped together by an amateur. There's a dial on the device, you could [toy around with it|scarletChastityTorture].");
				writeText("Otherwise, the room is empty. If you're done here, you can head back out to the [west wing|scarletWestWing].");
			}
			else {
				writeText("You're in the spade bedroom");
				writeText("The wallpaper is white, decorated sparsely by black spade icons. The room is pretty musty, and has a familiar scent.");
				writeText("Across from you is a large bed with white sheets, and chained onto the bed is a woman. She's completely naked excepted for a black blindfold and a chastity cage containing her flaccid dick.");
				writeText("When you enter she shudders for a moment and tenses up, as if trying to seek shelter from you.");
				writeText("Otherwise, the room is empty. If you're done here, you can head back out to the [west wing|scarletWestWing].");
			}
			break;
		}
		case "scarletChastityTorture": {
			writeEvent(scene);
			data.player.flags += 'scarletChastityTorture';
			break;
		}
		case "scarletWestBathroom": {
			if (data.player.flags.includes('scarletSirenTorture') != true) {
				writeText("You're in the west wing bathroom.");
				writeText("The room is dark, but at least a window lets in some moonlight. There's the usual fixtures, a sink, a tub, and so on. The unusual part is the rather petite woman chained to the wall. She's got on iron clasps but they're nothing compared to the complex looking gag on her mouth. It seems to be designed to allow her tongue to stick out, but completely shut down her ability to make sounds aside from a muffled and... Modulated? Grunt.");
				writeText("The whole deal is way too complex for you to free her from, but it doesn't seem like she wants to be freed.");
				writeText("The door was hooked up to some kind of wire. When you opened it, it led to some kind of mechanical dildo machine being activated, and after a few *whirrs* the device starts to power up.");
			}
			else {
				writeText("You're in the west wing bathroom.");
				writeText("The room is dark, but at least a window lets in some moonlight. There's the usual fixtures, a sink, a tub, and so on.");
				writeText("The woman chained to the wall is laying against the tiles behind her, the machine she's hooked up to is probably out of juice.");
				writeText("Dangling from her neck is a metal tag, listing an identification number and a name, 'Kennedy'. It belongs to a member of Charlie Team, one of Kelsey's squadmates!");
				writeText("She often told you about him being reprimanded for getting too handsy with women. How on earth did this girl get his tag?");
				writeText("It doesn't seem like there are any answers left in here, probably best to head back out into the west wing hallway.");
			}
			break;
		}
		case "scarletSirenTorture": {
			writeEvent(scene);
			break;
		}
		case "scarletParlor": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletWardrobe": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletBalcony": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletGuestBedroom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletMainHall": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletHeartBathroom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletHeartBedroom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletTheaterRoom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletDiningRoom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletStorageRoom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletBasement": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletLabEntrance": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletServerRoom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletCellRoom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletControlRoom": {
			writeHTML(`
			
			`);
			break;
		}
		case "scarletTrappedRoom": {
			writeHTML(`
			
			`);
			break;
		}
		//Typhoid Mary
		case "typhoidMary": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/typhoidMary.jpg)";
			writeMed("scripts/gamefiles/characters/Typhoid Mary.jpg");
			writeText("Scenario Preview - Typhoid Mary");
			writeText("A full year after the first outbreak began, the world is now an empty place where scavengers struggle to survive and the infected become more desperate than ever for release.");
			writeText("You are a survivor of an infected world who's fallen prey to infection herself. Infect the compound, or hide your state and carry on as a survivor.");
			data.player.scenario = "Typhoid Mary";
			updateMenu();
			writeSpecial("This scenario is only a demo, so all that's available are a few short scenes that are made to convey the idea of what this route will contain. If you like it, please voice your opinion! Leave comments or a review on TFGames, voice what you like on Discord, or support me on Patreon.");
			writeTransition("intro1", "Start the Demo");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		case "intro1": {
			writeText("You are a seasoned survivor. Almost a whole year alone, you eventually joined a group of survivors for greater security. Competent, skilled, and most importantly immune to the alluring voice of the Siren-type infected, you're an important friend to your fellow survivors. You try not to get attached, attachment leads to making emotional choices, and those lead to mistakes. You don't make mistakes.");
			writeText("Until today, that is.");
			writeText("It was a routine assignment on a hot day, just scavenge for supplies and head back safely. One of <i>them</i> jumped you from behind, pinning you to the ground and shoving her dick in your face. She must've been particularly starved for a fuck, because she was in a frenzy and leaking more precum than any human could fire in a full load. You tried to scream, that was the second mistake.");
			writeText("Thankfully you were lucky, you pushed her away and she was so on-edge that a few kicks were enough to set her off. While she has a good-old-fashioned ruined orgasm you're spitting and trying to wipe your mouth.");
			writeSpeech("player", "", "It wasn't enough... I'm safe... I gotta be, everything I've worked for, I can't be infected...");
			writeText("That's what you kept telling yourself, going into a full state of denial even as you felt a strong pressure in your abdomen.");
			writeText("Despite how you were sweating like a dog through the makeshift security checkpoint, you made it through without trouble. One of your fellow survivors walks up to you.");
			writeBig("monicaFull.jpg");
			writeSpeech("Monica", "monica", "Heeey! Fucking steaming today, yeah? But we made it, and...<br>Come here, I got something to show you.");
			writeText("Monica used to be the gruff and cynical type, but after you saved her ass, literally, she's since warmed up to you.");
			writeSpeech("player", "", "I can't right now, I'm, uh, gonna head back to my room real quick.");
			writeSpeech("Monica", "monica", "Don't be like that, check this out!");
			writeText("She pulls you aside to show off something she snuck through the checkpoint.");
			writeSpeech("Monica", "monica", "Genuine white chocolate. I mean, It's seriously melted, but this is the real stuff!");
			writeText("Your head is clouding over, it's getting harder to form words as the pressure in your gut builds.");
			writeSpeech("Monica", "monica", "Here, lemme open... Damn, this stuff'll get everywhere if you're not careful.");
			writeText("A small glob of melted chocolate lands on her cheek as she forces the bag open.");
			writeSpeech("player", "", "<i>Ghh... I'm fine, I'm fine, just need to get to my room... I can't look sick in front of everyone...</i><br>That's really cool, but I need to-");
			writeText("Your pussy throbs as you see her scoop the bit of chocolate off her cheek and suck it off her finger. Soon enough she takes a scoop from the melted candy and pushes it into your mouth too.");
			writeSpeech("Monica", "monica", "I know you aren't the type for 'weak stuff' like some of us are, okay? But you gotta relax sometime. It's not like anybody out there is still making candy, you gotta enjoy what little bits of happiness we find along the way.<br>Damn girl, you really like chocolate, don't you?");
			writeText("She misunderstands your actions as you suck and slurp on her index finger. The sugary taste actually helps a bit somehow. The heavy fog on your mind clears just a little and you can think again. You still feel like somebody stuffed ball bearings into your womb, but you'll take what you can get.");
			writeSpeech("player", "", "S-sorry, yeah I really like it. I gotta-");
			writeText("She places the wrapper filled with melted candy in your hands.");
			writeSpeech("Monica", "monica", "I don't owe you anymore, okay? Go enjoy it, and don't tell anybody I gave it to you. You know how doc gets when we sneak in food, even sealed stuff. And go get some rest, you look like one of those infected bitches.");
			writeSpeech("player", "", "Thank you...");
			writeText("You stumble off all the way to the part of the compound your room is located. Luckily nobody is around, they're all celebrating the latest scavenging haul, otherwise they might've commented on how you've got a bowlegged gait.");
			writeText("Just walking is getting harder, the pressure on your abdomen is getting more intense with every step.");
			writeSpeech("player", "", "Not infected... Not infected... Not-");
			writeText("Suddenly it hits you, the pressure reaches it's peak and your clit feels engorged. The room spins and the pressure releases by a very muffled *pop*.");
			writeText("Gasping for air like you're a fish out of water, you still manage to barely stumble your way to your door and make it into the [privacy of your room|intro2].");
			break;
		}
		case "intro2": {
			writeText("You collapse onto your bed and shimmy your now too-tight pants off to expose your tights.");
			writeText("You have a reputation for being a bit of a no-nonsense hard-ass, but you still have at least one reminder of what life used to be like. A pair of partially transparent tights. They're not very practical for your lifestyle, but everyone in the base has at least one weakness. Not to mention it's one more (albeit flimsy) line of defense.");
			writeText("You can see your new cockhead straining against the fabric. Your infection is clear at this point, there's no more denying it, yet all you can think is...");
			writeSpeech("player", "", "Don't rip, don't rip, don't rip...");
			writeText("As your cock engorges you still have your mental faculties for some reason. At least one last hope you can continue to live a normal life as a member of the survivor's compound. Even if it means lying to the people you trust. And the first step is hoping your dick stays a manageable length.");
			writeText("You've heard rumors that some infected cocks can get up to fifteen inches, there's no way you'll pass as a shemale with a cock that massive, so your only hope is that you stay small enough to avoid tearing the fabric.");
			writeBig("intro1.gif");
			writeText("But it isn't looking good. The newly grown dick and your freshly birthed set of balls rub against the soft fabric sending signals to your brain it was never meant to deal with and can't make sense of.");
			writeText("The logic centers of your brain are in full panic mode as you clutch the sheets of your bed to try and resist jacking off. Your brain is trying to make excuses, 'stroking it a little won't hurt, you're gonna cum anyway', but you grit your teeth and try to hold back.");
			writeText("Finally, it feels like your cock has stopped growing. The fabric is intact, you can hide the size. The only strange thing is that your body won't relax, every muscle is still ten-");
			writeBig("intro2.gif");
			writeSpeech("player", "", "Ghhg~!");
			writeText("Your cock twitches and splurts, pumping messy, gooey spunk through the tights and onto your bedsheets. Your fat balls twitch and tighten as they pump out what used to be the eggs of your womb, now ravaged by the infection into infectious slime.");
			writeText("Barely holding back tears as the sensation overloads your brain, your body finally relaxes and you feel the sperm soak your tights and pool at your crotch.");
			writeSpeech("player", "", "Ghh... I'm fucking dead...<br>No, it can't get any w-");
			writeText("*KNOCK* *KNOCK*");
			writeText("The darker, hungrier part of your brain governed by your cock and the logical part barely keeping control work in unison for once as you, on autopilot, grab and hide your sperm-covered sheets and anything else you can find that you sprayed on. You grab an old pair of pants and hope it'll be enough to hide the jizz-soaked mess at your crotch.");
			writeSpeech("player", "", "Who-*ahem*<br>What's up?");
			writeText("The door opens and Monica walks through.");
			writeSpeech("Monica", "monica", "Hey, just checki-<br>Damn girl, it stinks like sweat in here. Uh, just checking on you, you were acting a bit weird earlier.");
			writeSpeech("player", "", "Sorry, I'm fine. Totally good-");
			writeText("You try to angle yourself away from her as the jizz begins to darken your pants, hoping she'll leave soon, but it backfires when, after a moment of silence, you turn back to see her holding your soiled sheets.");
			writeSpeech("Monica", "monica", "Fuck, I'm really sorry, I should've told you it was me right away. I can't believe you hid it like this.");
			writeSpeech("player", "", "I... I didn't...");
			writeText("Panic runs through your thought process, a dark instinct is pushing you to <b>take her before it's too late</b>.");
			writeSpeech("Monica", "monica", "Hiding the candy in your bedsheets, bad call. I wonder if it's still good?");
			writeText("She takes a tiny bit onto her finger. You could [stop her|intro3a], or you could [remain silent|intro3b]");
			break;
		}
		case "intro3a": {
			writeSpeech("player", "", "S-stop I'm sorry, please go!");
			writeSpeech("Monica", "monica", "Okay, okay, fine. Listen, you've been acting weird lately, I just want you to know I'm here for you, no mater what.");
			writeSpeech("player", "", "Thank you, I know you mean it...<br>I just... I just need some privacy right now.");
			writeSpeech("Monica", "monica", "Okay. I gotcha, I'll go.");
			writeText("She walks out of your room, closing the door behind you.");
			writeSpeech("Monica", "monica", "Hey, you ever need someone to talk to, you let me know, alright? Everyone has broken down at least once at this point, being a survivor isn't easy. We've lost people we love, and it seems like things will never get better...");
			writeText("You don't say anything in response, listening carefully for the sound of her footsteps as she walks away.");
			writeText("She was right, everyone does break at some point. Usually it's depression or a panic attack as the world looks darker everyday, but as you pull off your pants and grab your tights, you have to admit that this is a bit of a different case.");
			writeText("*RIIIIIIIIIP*");
			writeBig("wanton.gif");
			writeText("Like the broken excuse for a human you are, you wantonly start to explore yourself in the middle of the room. The logical part of your brain is pleading to stop, but it feels way to good for that. Instead, while you enjoy coating your room in spunk, you start to think of a strategy.");
			writeText("You'll need to pass as uninfected for now, so you'll need a plan. The building being used as a compound does have a 'self-pleasure' room, keeping people pent up with a horde of dickgirls outside is a bad mix after all. Maybe you can find a chastity cage to keep yourself contained during the strategy meeting later today? In any case, it's no longer a matter of just surviving, it's finding some way of being a shemale obsessed with cumming in a post-apocalyptic world without getting caught.");
			writeTransition("typhoidMary", "END OF DEMO");
			break;
		}
		case "intro3b": {
			writeText("You say nothing as she scoops your cum and sucks it off her finger. Is it morbid curiosity? Selfishness? Or pure perversion that stops you from saying anything? You have no idea.");
			writeText("Immediately her face scrunches up in disgust.");
			writeSpeech("Monica", "monica", "Ah, fuck. I'm sorry girl, but when was the last time you washed these sheets? This shit's ruined, doesn't even taste sweet anymore. Listen, I can sneak these into the wash tomorrow, you good with... With...");
			writeText("The infection hits everyone at different speeds. The bit of precum you got must've been weak, it took an hour to really kick in, but this is the first load of a new set of balls, and Monica looks dizzy right away as she swallows on instinct.");
			writeText("You see the lump travel down her throat, and your cock throbs against your pants.");
			writeSpeech("Monica", "monica", "It's... God it's so fucking hot in here...");
			writeSpeech("player", "", "Yeah, life's a bitch sometimes.");
			writeSpeech("Monica", "monica", "I, uh... Could I sit down a moment? I don't feel...");
			writeSpeech("player", "", "Go ahead. Take as long as you need.");
			writeText("She lays back on your bed, her breathing erratic. The effects of the infectious sperm are hitting her hard and fast, and in a moment she's writhing and scratching at her jeans.");
			writeSpeech("Monica", "monica", "I... Hot! It's... Ugh, it hurts!");
			writeSpeech("player", "", "Are you sick? Maybe we should get those jeans off. And maybe you need... Need more fluids...");
			writeText("You grab the clump of bedsheets and press it against her face. Despite her protests at first, all she can do after a few breaths is squirm and moan. You let go of the cloth and start pulling off her pants. Before they're even down all the way, she screams into the bedsheets and the squirming stops.");
			writeText("You roll her over to better get her pants off, and appreciate the fruits of your labor.");
			writeBig("monica1.gif");
			writeSpeech("player", "", "No panties? Dangerous in our lines of work, makes it all the more convenient for an infected to have their way with you. Hold still.");
			writeText("She gives a tired grunt, but no other response as she stops failing about.");
			writeBig("monica2.gif");
			writeText("She should be desperately pawing at herself to get off, her first load churning in her new balls, but she obeys with nothing more than a whimper.");
			writeText("You start stroking faster. You can see her balls throb.");
			writeSpeech("player", "", "Don't cum, hold it in.");
			writeBig("monica3.gif");
			writeText("Despite being clearly in the throes of an orgasm, she does her best not to splurt onto the floor, only leaking a few droplets.");
			writeSpeech("player", "", "Stand up.");
			writeText("She obeys again. Her eyes have fogged over, there's not a trace of humanity left already.");
			writeSpeech("player", "", "I... Why are you listening to me? Sit.");
			writeText("She obeys again. She's obviously pent up and fidgets occasionally, but she doesn't touch herself.");
			writeSpeech("player", "", "You'll... You'll obey me now, won't you? Do whatever I want... Will others, too?");
			writeText("Hiding a member of the infected, especially one as mindless as Monica is now, while also explaining her disappearance would be tough, nearly impossible after a while. But if you can command the infected, suddenly a lot of possibilities open up. If you told her to lay low while you infected others...");
			writeSpeech("player", "", "I could infect the entire compound...");
			writeText("Thoughts of survival are drifting away. Now the logical part of your brain is working in tandem with the darker, more instinctual part birthed by your infection.");
			writeSpeech("player", "", "If I can't have a normal life, why should they? They'd throw me out without a second thought if they knew the truth...");
			writeText("You begin hatching a scheme, if this is the end of your life as a survivor, you're going to see everything crumble with you. First is the strategy meeting later today, if you're going to infect the compound, you've got one day to do it.");
			writeTransition("typhoidMary", "END OF DEMO");
			break;
		}
		//On the Record
		case "onTheRecord": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/forTheRecord.jpg)";
			writeMed("scripts/gamefiles/characters/On the Record.jpg");
			writeText("Scenario Preview - On the Record");
			writeText("Rumors of a new bioweapon are all the buzz, and now a small town mall has been selected as the latest target.");
			writeText("You, the hottest of hot-shot journalists, must infiltrate the mall and get the scoop on what's going on.");
			data.player.scenario = "On the Record";
			updateMenu();
			//writeSpecial("This scenario is only a demo, so all that's available are a few short scenes that are made to convey the idea of what this route will contain. If you like it, please voice your opinion! Rainy DayZ has a smaller fanbase than my other two current works, so please (respectfully) voice your desires and ideas for what you'd like this game to contain. Leave comments or a review on TFGames, voice what you like on Discord, or support me on Patreon.");
			//writeTransition("recordStart", "Play the Preview");
			writeTransition("scenarioSelect", "Go back");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.<b>ERROR CODE:</b> Scene Write Failure, Scene "+scene+" does not exist.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			document.getElementById('output').innerHTML += JSON.stringify(data);
			writeText("Inventory window:" + invHidden + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("start", "Go back to the title.");
		}
	}
}

function calculateMovement(location) {
	data.player.guardMovement += 1;
	if (data.player.guardMovement == 5) {
		data.player.guardMovement = 1;
	}
	if (checkFlag("houndsDisturbed") == true || checkFlag("gasDisturbed") == true) {
		//Do nothing
	}
	else {
	switch (data.player.currentScene) {
		case "compoundRoom": {
			if (data.player.guardMovement == 1) {
				writeText("You can hear someone outside the door. Peering through the window of the door you can see several figures in what looks like special ops gear, fully covered and holding strange guns.");
			}
			break;
		}
		case "compoundVent2": {
			if (data.player.guardMovement == 1) {
				writeText("You can hear someone moving outside the vent, but they're getting farther away. If you exit the vent now you'll be caught.");
			}
			if (data.player.guardMovement == 2) {
				writeText("The sound of footsteps have stopped, you should be safe to exit now.");
			}
			break;
		}
		case "compoundVent3": {
			if (data.player.guardMovement == 2) {
				writeText("You can hear someone moving outside the vent, but they're getting farther away. If you exit the vent now you'll be caught.");
			}
			if (data.player.guardMovement == 3) {
				writeText("The sound of footsteps have stopped, you should be safe to exit now.");
			}
			break;
		}
		case "compoundGasRoom": {
			if (data.player.guardMovement == 1) {
				writeText("You can hear someone approaching! You'll need to hide quickly!");
			}
			if (data.player.guardMovement == 2) {
				writeEvent("compoundCaught");
			}
			break;
		}
		case "compoundKennels": {
			if (data.player.guardMovement == 2) {
				writeText("You can hear someone approaching! You'll need to hide quickly!");
			}
			if (data.player.guardMovement == 3) {
				writeEvent("compoundCaught");
			}
			break;
		}
		case "compoundWifeRoom": {
			if (data.player.guardMovement == 3) {
				writeText("You can hear someone approaching! You'll need to hide quickly!");
			}
			if (data.player.guardMovement == 4) {
				writeEvent("compoundCaught");
			}
			break;
		}
	}
	}
}

function renameWife() {
	var goof = document.getElementById('nameSubmission').value;
	data.player.wife = goof;
	sceneTransition('spreadStart');
}

function writeEvent(n) {
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	switch (n) {
		//Rainy DayZ
		case "basic1": {
			writeText("You're so exhausted you barely even register the feeling as the zombie pushes you down into a puddle of running rainwater. Try as you might, you don't have the strength to resist as she rips your pants off.");
			writeSpeech("player", "", "No! Please, stop!");
			writeText("She either can't understand you or doesn't care, either way she doesn't stop as she rips off your panties. She tries to thrust right in but is stopped as her dick is just way too big to fit inside of you. You feel relieved for almost a second until she starts jacking herself off just inches away from the entrance to your pussy.");
			writeText("After a few seconds she spurts out a dollop of thick precum onto your labia and lets go of her dick. You try to squirm away, but she grabs you by the throat with one hand as she starts rubbing her jizz into your skin with the other.");
			writeText("Her fingers thrust inside of you, covering the entrance to your vagina with her infectious dickslime. Everywhere it touches you feel your skin grow puffy and sensitive. For as disgusting as you feel right now, her fingers feel really, really <b>good</b>.");
			writeText("But before you get the chance to start enjoying the sensations they've already stopped. She pulls the hand that was just fingerfucking you and puts it around your neck as she positions the head of her dick against your womanhood.");
			writeSpeech("player", "", "No...");
			writeText("Your objections are a lot quieter now, but that's just because you're being choked. It's not like you wanted to become a mindless fuck machine, right?");
			writeText("But she doesn't care about any of that as she presses dick dick against you and pushes. Inch after inch sinks into you as you resist with all the might you can muster.");
			writeText("And it's enough to stop her. A few inches in and you're just too tight to take any more. The situation is hopeless, no one is coming to save you, but this last act of defiance is enough to keep you focused and in the moment.");
			writeText("Until she pumps another load of precum into you. The pain of your resistance starts to fade and firecrackers start going off in your brain as your body starts to relax against your will. She pushes deeper and deeper inside of you before she starts pulling out.");
			writeBig("basic1-1.gif");
			writeText("She's relentless in her thrusting, and with every few thrusts comes another load of precum that makes the situation feel even better. Every time you absorb her juice into your body, your infection grows more complete.");
			writeText("With one big thrust you can feel her dick impact the entrance to your womb, but instead of body-clenching pain you feel spine-melting pleasure. She starts cumming, real jizz instead of precum, and you <b>feel</b> it being pumped into your womb.");
			writeText("You can feel your body changing by the second. Your breasts start growing and you feel the entrance to your womb start to dilate in preparation for becoming a brand new dick.");
			writeText("But she isn't done with you yet. She starts thrusting again to prolong her orgasm and the tip of her dick kisses your womb's entrance over and over again until her dick's tip pushes through. She pushes her head in, pumping her jizz directly into you stuffing you full of her infected milk.");
			writeBig("basic1-2.gif");
			writeText("She tries to pull out but stops and just starts tugging. Your womb, desperate for more, is wrapped around the head of her dick and won't let go. She keeps getting more and more forceful and pushes back in before trying to pull out.");
			writeText("After an audible *POP* she pulls herself free, and you start squirting her infected load out of your body. With every squeeze you push out more, and the bulge of your overstuffed womb starts to flatten. After one last push you squirt the cum a good few inches out, but you feel something else getting pushed out as well.");
			writeText("You look down, and standing at full mast is a brand new dick. You can feel a heavy pair of balls below it large enough to rest in the puddle of water beneath you.");
			writeText("Your mind can't hold a complete thought anymore. This is your new life.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "basic2": {
			writeText("The zombie pushes you down and starts rubbing herself against your face, covering your features in the sweat from her dick and balls to mark you with her scent. Once she's done that she grabs you by the hair and presses the head of her dick against your lips, but your keep your mouth firmly shut.");
			writeText("Frustrated, she throws you to the ground and, with one smooth motion, rips off your pants.");
			writeSpeech("player", "", "No, wait! You can use my mouth instead!");
			writeText("You open your mouth and wiggle your tongue around to tempt her, and it actually works. She lets you sit back up and presses her dick against your lips again.");
			writeText("You lay some gentle kisses onto her head and stroke her shaft with your hand. Quickly she takes a sharp breath and her balls tighten. Seeing the signs, you point her dick away from you and start licking the shaft. Her sweat makes your tongue tingle, like a sour candy as she pumps a glob of precum onto the floor.");
			writeText("The room is quickly filled with a heady scent. The precum is thick and cloudy, but your attention is pulled away from it by the zombie growling.");
			writeText("She obviously doesn't approve of the waste, and grabs you by the hair and forces her dick into your mouth. Out of fear of what she'll do to you if you don't comply, you make sure she can't feel your teeth.");
			writeText("The sensation is overwhelming, her sweat is all at once salty, bitter, and sweet like honey. She delivers some shallow thrusts punching the back of your throat but never pushes past it. With a grunt, it becomes clear that she wants you to taste this next load.");
			writeText("A dollop of precum is pumped out, this time directly onto your tongue. Your mouth feels like it's going numb, tingling like you just chomped on a giant mint. You know you should hold it in your mouth and spit it out as soon as you can, but...");
			writeSpeech("player", "", "*Gulp*");
			writeText("And just like that, you're <b>infected</b>. You can feel the load as it goes down your throat and into your stomach. Her cock pulses in your mouth and she decides its time to go even deeper. As she pushes herself into your throat, you can feel your body changing.");
			writeText("Your clit is rubbing against your suddenly much-tighter panties, and you feel your pussy start to gape open. You try to clench up to tighten it closed, but each time yo do you feel a lovely squeezing sensation. One last squeeze is all it takes for you to start cumming as you feel an explosive pleasure wash over you. The zombie unsheaths herself from her throat to reach down and tear off your panties to set your newborn balls and shaft free.");
			writeText("You can feel your pelvis clench as you spurt out a small load of clear fluid, but you still feel really backed up. You feel dazed, but you also want more as you wrap your lips around her shaft again.");
			writeBig("basic2-2.gif");
			writeText("She pushes herself back inside you and you offer no resistance. At this point your gag reflex is a thing of the past and you're loving every pump of precum she spurts down your throat.");
			writeText("Soon enough your own cock is at full mast and she hilts herself balls deep inside of you before she starts cumming for real. After only a few spurts though, she starts to pull out.");
			writeText("You try to stop her, sucking on her dick with all your might, but she pushes your head and slams you into the wall freeing herself.");
			writeBig("basic2-1.gif");
			writeText("She jacks herself off before she fires another rope of sticky jizz onto your face, and then she steps back to spray another onto your cock. You feel yourself changing again as pleasure starts to build up inside of you, and you <b>spuuurt</b> out a thick load of sludge-like cum. It's more like jelly than jizz as you pump out every last bit of the contents of your old womb to make room for new infectious sperm.");
			writeText("Your ability to speak is long gone and your brain is foggy as you sit and enjoy the new sensations.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
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
			writeBig("basic3-2.gif");
			writeText("The feeling of your bitch-button getting flattened is enough to make you start pumping out a fresh load of dickmilk much larger than the first. She hilts herself deep inside you and you rub your hand along the bulge in your midsection, appreciating the outline of her head as she uses you like a human fleshlight before she pushes you down and starts thrusting.");
			writeBig("basic3-1.gif");
			writeText("You don't have any words as you feel your prostate being ground into paste, but you do have some for every time her massive balls slam into yours.");
			writeSpeech("player", "", "Oh FUCK! YES. YES. YES.");
			writeText("You love every second of it, you feel your balls tightening for the third time as she rearranges your intestines.");
			writeText("...");
			writeText("By the end of it you're still in control of yourself. Your inoculation means that you can't go full zombie like the rest, but that doesn't mean anything as you suckle on your new master's dick to prepare her for round two.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "horde1": {
			writeText("You fling a marble from your bag and it *PLING*s off the hood of a distant car.");
			writeText("One marble after the other is thrown, and you make your way a good distance through the mess of cars. The zombies are in a frenzy now, confident that there's a human in the area, but they don't know where.");
			writeText("You're about to throw another as you turn the corner of a broken-down police cruiser as you make eye contact with one of the infected.");
			writeText("She reacts much more quickly than you do. You barely have time to dodge out of the way of her tackle, and you drop your bag of marbles onto the road as you do. Thinking quickly, you plant your boot in her face as she goes for another lunge, pushing her down a small incline.");
			writeText("With her out of the way, you break into a sprint to escape the highway, only to stop a few steps later as you realize you've been surrounded.");
			writeSpeech("player", "", "Fuck.");
			writeText("There's an unmistakable hunger in their eyes. In every direction, they block all avenues of escape.");
			writeSpeech("player", "", "Please, no!");
			writeText("...");
			writeBig("horde1.gif");
			writeSpeech("player", "", "Fuck! Yes!");
			writeText("You tune changed quickly once you got some infected precum in you. At first it was awful. They had no idea of the concept of how to take turns, so the horde wasn't satisfied until you had a dick in your mouth and ass, and two at once penetrating your once-tight pussy.");
			writeText("It wasn't all that bad though. The hopelessness of the situation made it a lot easier to give in.");
			writeText("You could feel the rumbling of your body changing earlier, now whenever they hit the back of your pussy they bump against something that sends shivers down your spine. Their thrusts get more and more shallow until eventually they're force to pull out, and as they do two fat balls pop out of what used to be your vagina.");
			writeText("You're one of them now. And until you can satisfy the whole crowd with your mouth and ass, you're the bottom bitch around here.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "horde2": {
			writeText("You want to punch your brain. Of course, you weren't thinking with your head when you took the route down the highway. But you're pretty sure your fucked-up half-zombie brain would enjoy a punch to the dick.");
			writeText("You never had a chance. The inclines on the sides of the road were flooded, so you had to walk down the road directly using the cars for cover. You bumped face-first into a zombie's dick, now here you are.");
			writeText("To your credit, you actually tried to fight back. Sure, it was more playful slapping than fighting, but at least you tried.");
			writeText("Some of them simply walk by and pay you no mind, probably on the lookout for some fresh meat to infect. Others haven't had a chance to stick their dick into something for days and really need some relief.");
			writeBig("horde2.gif");
			writeText("Maybe someday all of them will have left you alone for a better source of fuckmeat. You won't be the same though, not that you care anymore.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "siren1": {
			writeText("You turn on your flashlight. The best defense is a good offense, so the best course of action is to find what's chasing you and take them on directly.");
			writeText("There, in the corner! You see a flash of blond hair as something runs just out of sight.");
			writeText("You make chase, and you can hear a soft giggling as you run. For some reason it almost seems to replay in your head as you think about the sound, over and over.");
			writeText("You almost get lost for a second until another giggle gives them away. They're pretty fast, but you won't give up the chase!");
			writeText("...");
			writeText("Many corners turned, many catwalks crossed, and lots of laughing later, you finally catch up to her and corner her in a dead end.");
			writeText("She turns around to face you, biting her lip and looking sad that the game is over. She's beautiful, not a trace of the dirt or sweat you'd find on any other zombie.");
			writeText("Her dick is flaccid and cute, she wiggles it from side to side when she notices you're staring.");
			writeText("You can feel yourself hardening, and she can see it through your clothes. She turns around and wiggles her ass at you invitingly.");
			writeText("There's a strange scent in the air, it's somehow relaxing and energizing at the same time. You can't remember why you started chasing her in the first place as she giggles again.");
			writeText("... Oh, that's right! You were going to punish this naughty girl for running away from you, of course!");
			writeText("...");
			writeBig("siren1.gif");
			writeText("Everything just feels nice. You can't even remember why you ever wanted to leave the factory in the first place. Thrusting into her ass feels so good...");
			writeText("And she likes it too. She lets out happy little giggles whenever she cums on the floor, and the nice scent in the air just gets stronger.");
			writeText("She leans back and kisses you, and you feel yourself cumming again into her ass. Every time you do, it almost feels like your dick gets a little shorter, and your body gets a little softer, but you don't mind.");
			writeText("You don't think you could stop even if you wanted to.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "siren2": {
			writeText("With some rope and a decent amount of hunting knowledge, your snare trap is set. If anyone tries to approach you while you rest, they'll be strung up and you can escape.");
			writeText("All you need to do now is wait, so you create a bit of cover using a sheet of cloth between some boxes.");
			writeText("...");
			writeText("You wake up with a jolt as you hear the rope of your trap make a loud *CRACK* sound as it tightens around something.");
			writeText("Your trap has been sprung, you knew someone was following you!");
			writeText("You exit your makeshift shelter, ready to start running, but you stumble when whatever you trapped begins... Whining?");
			writeText("It sounds like the fake sort of crying a child would do when they want attention but for some reason you can't seem to keep it out of the front of your mind. The sound is ringing in your ears over and over, and your vision starts to blur as your body moves on autopilot.");
			writeText("<b>HELP</b>");
			writeText("Soon enough you're where you set your trap, and suspended in midair by her leg is a naked woman.");
			writeText("<b<HELP ME</b>");
			writeText("You need the noise to stop. The ringing in your ears is making you see stars.");
			writeText("<b>I'M STUCK</b>");
			writeText("But slowly the painful ringing stops, and whatever was making the sound goes quiet. As your mind unclouds, you realize you've just finished undoing the knot of your trap.");
			writeText("You step back, the zombie is freed. Worse than that, you can hear the sounds of other zombies closing in, obviously alerted by the sound.");
			writeText("The zombie you freed tackles you. She's light, and a lot weaker than the others, so you should have no trouble thr-");
			writeText("... All your worries start to fade away as her lips meet yours. What were you thinking about?");
			writeText("She's so soft. Her dick is so small compared to yours. Why are you wearing clothes again? You take them off with her help.");
			writeText("...");
			writeBig("siren2.gif");
			writeText("You can't close your ass anymore, and you lost count of how many of them have used you already.");
			writeText("You blissfully giggle as her palm cups your cheek, and she gives you another kiss.");
			writeText("Every zombie in the factory came running when she was in trouble, so she had to repay them somehow. And you helped! You're a great helper. You're going to be helping her for as long as she wants, and she'll keep rewarding you with those beautiful lips of hers.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "hunter1": {
			if (data.player.beastDisabled == false) {
				writeText("You drop your pack and heft your bat. There's only one thing left to do now.");
				writeText("One of the zombified dogs comes out from behind a tree. You're wounded and have almost no energy left, but you still have some fight in you.");
				writeText("He bars his teeth and growls, and you get ready to start swinging.");
				writeSpeech("player", "", "Come get some, motherfucker.");
				writeText("...");
				writeBig("hunter1.gif");
				writeSpeech("player", "", "Yes! Yes! Deeper!");
				writeText("You couldn't even take down the first one, smacking him with the bat just made him angry.");
				writeText("But that made him fuck you harder, so who's the real winner here?");
				writeText("It's pretty clearly you as you cum for the third time on his massive dogcock, before he stops his quick thrusting and goes balls deep into you.");
				writeSpeech("player", "", "Oooooh...");
				writeText("You can feel his inflated knot inside you as he starts to fill you with hot cum.");
				writeText("Maybe if you act bratty enough to one of the other members of the pack, they'll treat you like the bitch you are and start using your face.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "hunter2": {
			if (data.player.rimDisabled == true || data.player.beastDisabled == true) {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			else {
				writeText("You feel a jolt of pain go through your arm, your wound must be worse than you thought. You fall over, you can't keep running. You drop whatever you can, your pack, the supplies, anything weighing you down.");
				writeText("But it isn't enough. They surround you quickly. Even if you had your weapon, you'd need more energy than you have to fight them off.");
				writeText("You can feel your eyes start to water as one of the infected dogs comes out from behind a tree.");
				writeSpeech("player", "", "Please, no...");
				writeText("You try to crawl away, but when you start moving he lets out a growl that stops you in your tracks.");
				writeText("But he isn't attacking yet. You still hold on to one last glimmer of hope. He comes up and starts sniffing your, face, before backing off to start walking circles around you.");
				writeText("You realize you'll need to be completely submissive if you don't want to be torn to shreds. He stops in front of you and turns around. He looks over his shoulder at you expectantly. He can't seriously mean...");
				writeText("...");
				writeBig("hunter2.gif");
				writeSpeech("player", "", "*Slurp*<br><i>Oh god, I can't believe I'm doing this... </i>");
				writeText("With every lick you can feel your fear fading away into a mess of feelings, lust being the dominant one.");
				writeText("He's panting, his huge cock is hanging down and dripping with precum as you make out with his asshole.");
				writeText("But he might not be enjoying it as much as you are. You switch from slurping licks to worshipful kisses and back again.");
				writeText("More of them are starting to fill the clearing, surrounding you. Each of them look just as hungry as the first one did.");
				writeText("You push your tongue deeper into his ass as he starts to cum onto the dirt floor. This is your life now.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "worms1": {
			if (data.player.wormDisabled == false) {
			writeText("The feeling of a soft pillow and softer blanket offer a comfort you haven't felt in weeks. The dingy mattress you have at the safehouse is simply no comparison. Soon enough, what was intended to be just a nap is drawn out into a deep sleep");
			writeText("...");
			writeText("Vision flutters across your eyes. Tingling sensations pass through your limbs and you feel a presence spread across your body.");
			writeText("The soreness of your eyelids tells you that you're tired, but still awake. Strangely, you feel a breeze over various parts of your body. Stranger still, you can't move a muscle.");
			writeText("Panic begins to wake you up as your skin crawls, but you're completely paralyzed.");
			writeText("You look down, head propped up on the pillow, and see the reason for the feeling of cold air on your body.");
			writeText("Small, wriggling worms are creeping across your body, a mucous that covers them has eaten through the fabric of the blanket and chunks of your clothes.");
			writeSpeech("player", "", "Nnnn!");
			writeText("They're exploring across your body. Wherever they touch feels like a mild coursing electricity.");
			writeText("You try to struggle, to roll off the bed, to do anything, but to no avail.");
			writeText("The panic within you burns even brighter as you can feel the sensation of one of them getting through your underwear, tiny feelers rubbing against the outer lips of your folds.");
			writeText("The creatures continue crawling upon your skin, coating your body with an aphrodisiac meant to ensure compliance once the paralysis has worn off. Against your will the sensations, the teasing of the creatures has caused you to grow wet.");
			writeText("Entirely working off instinct, this is the signal to the worm at the entrance to your pussy to push forwards in search of a host.");
			writeSpeech("player", "", "NNNN-!");
			writeText("No one hears your screams as the worm inches inside of you. The aphrodisiac coating it's body makes the sensations feel incredible in combination to the worm's 2-inch thickness.");
			writeText("You suck in a breath trying to focus through the sensation of lightning coursing through your body as you orgasm. The paralytic is beginning to wear off, but it's too late. The other worms smell the scent coming from your quivering pussy and have begun to swarm around your hole.");
			writeText("One after another begins to push inside of you as the first presses against the entrance to your womb. Feelers press against the closed cervix and your body spasms.");
			writeText("Your movement scares the remaining worms away, but there are still four inside of you. Your walls clench around them, and they squirm inside of you in response.");
			writeSpeech("player", "", "AAAH~!");
			writeText("The worm in front presses itself hard against the entrance to your womb, trying to squirm its way inside. The chemical coating causing your body to welcome, rather than reject the intrusion.");
			writeText("You can feel your insides spasm to allow the worms inside, and as they begin to push through your back arches and you <b>spray</b> all over the bed in a mixture of squirt and the worm's fluid.");
			writeText("There's a small pricking sensation as they latch onto the walls of your womb and begin to pump body-altering chemicals into your bloodstream. Your eyes dilate as a cool calmness washes over you.");
			writeText("Barely conscious, you can feel yourself roll over and prop your ass into the air. Instinctively you know you're signaling for the escaped worms to return.");
			writeBig("worms1.gif");
			writeText("To return to a willing host.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "worms2": {
			if (data.player.wormDisabled == false) {
				writeText("The feeling of a soft pillow and softer blanket offer a comfort you haven't felt in weeks. The dingy mattress you have at the safehouse is simply no comparison. Soon enough, what was intended to be just a nap is drawn out into a deep sleep");
				writeText("...");
				writeText("Vision flutters across your eyes. Tingling sensations pass through your limbs and you feel a presence spread across your body.");
				writeText("More than that, you can feel yourself at a full erection, your shaft standing unrestricted by the underwear you were wearing.");
				writeText("You're completely paralyzed, all you can do is look down to stare at the head of your cock, and the creature slowly crawling up the side of your shaft.");
				writeText("There's a slime coating it's body, and as it crawls along your skin it leaves a powerful tingling sensation.");
				writeText("You lay there, motionless, watching with a disturbed curiosity as it reaches the head. It's tiny feelers rub along the sensitive flesh and you can already feel yourself starting to leak precum.");
				writeText("But the creature isn't satisfied to just sit and taste, and it positions itself directly at your urethra and begins to push itself inside.");
				writeSpeech("player", "", "NNNN-!");
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
				writeBig("worms2.gif");
				writeText("You can hear the sound of slithering in the walls as the scent of your tainted sperm begins to attract more of the creatures. The thought of more worms trying to fight their way into your perverted dickmeat causes another bit of splooge to ooze out of you.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "flower1": {
			writeText("You walk up to the infected woman and get ready to either fight or run, but suddenly you can smell that powerfully sweet scent from the flower earlier.");
			writeText("You look around, but there aren't any flowers around.");
			writeText("Just then a chill runs up your spine, and you feel your hands moving on their own grabbing the bottom of your shirt and pulling the cloth up.");
			writeSpeech("player", "", "<i>W-what the hell is going on? </i>");
			writeText("You can't even speak aloud, it's like your body is on autopilot as you throw aside your shirt and leave your chest exposed. Right away your body is moving again to take off your pants.");
			writeText("Something's got control of your body, and it isn't letting go. The infected woman still hasn't noticed you, luckily, but that could change at any second.");
			writeText("Panic fills your eyes as you squat down and spread your legs, exposing yourself to the woman yet hoping she won't turn around to see you.");
			writeText("Your hand moves to your snatch, either terror or a bizarre sudden exhibitionism fetish has caused it to become dripping wet.");
			writeText("It takes all the resistance you can muster not to whorisly moan as your fingers begin teasing your slit.");
			writeSpeech("player", "", "<i>What the fuck is wrong with me?! God, I need to snap out of this... Please, let this be a dream! </i>");
			writeBig("flower1.gif");
			writeSpeech("player", "", "Khhh...");
			writeText("The loud weather is the only thing saving you now, as you can't resist heavily breathing while you play with yourself.");
			writeSpeech("player", "", "<i>Fuck... FINE! </i>");
			writeText("You give in, hoping that an orgasm will shock you back to your senses.");
			writeText("Completely leaning in to your urges, you relax and start fingerfucking yourself. At this point you don't know if you're enjoying this so much because your body is being controlled, or if you really, really need to cum.");
			writeSpeech("player", "", "Ggghhh~");
			writeText("No longer caring if she sees you, you lean back on the ground, pussy high in the air as you fuck your quim with your hand.");
			writeText("Finally it hits you like a wave.");
			writeSpeech("player", "", "Cumming!");
			writeText("You let out a barely held-back squeal as you squirt all over your hand and the ground, before your body falls slump.");
			writeText("The rain is falling around you as your body quakes.");
			writeSpeech("player", "", "<i>Fuck, that was amazing... I could get addict-</i>");
			writeText("Your thought process goes dead in the water as a cock appears in your field of vision from below, your show had an audience after all.");
			writeText("You can still run, evade the infected bitch and use the rain to your advantage. You can still survive!");
			writeText("But instead, on autopilot, all you can do is lick your lips and spread your pussy for the infected woman.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "flower2": {
			writeText("You walk up to the infected woman and get ready to either fight or run, but suddenly you can smell that powerfully sweet scent from the flower earlier.");
			writeText("You look around, but there aren't any flowers around.");
			writeText("Just then a chill runs up your spine. Your needy cock has been trying to get your attention on the run here, but for the sake of surviving your trip home you opted to ignore it. Yet, for some reason you feel your hands moving on their own grabbing your pants and pulling them down.");
			writeText("Something's got control of your body, and it isn't letting go. The infected woman still hasn't noticed you, luckily, but that could change at any second.");
			writeText("Panic fills your eyes as you squat down and spread your legs, exposing your bobbing shaft to the woman yet hoping she won't turn around to see you.");
			writeBig("flower2.gif");
			writeSpeech("player", "", "Khhh...");
			writeText("The infected woman is just down the way, either searching for shelter or a victim to infect, but you're stuck in the middle of the street stroking yourself.");
			writeSpeech("player", "", "<i>Fuck... FINE! </i>");
			writeText("You give in, hoping that an orgasm will shock you back to your senses.");
			writeText("Completely leaning in to your urges, you relax and start fingerfucking yourself. At this point you don't know if you're enjoying this so much because your body is being controlled, or if you really, really need to cum.");
			writeSpeech("player", "", "Ggghhh~");
			writeText("No longer caring if she sees you, you lean back on the ground, desperately jerking off to a big release.");
			writeText("Finally it hits you like a wave.");
			writeSpeech("player", "", "Cumming!");
			writeText("You let out a barely held-back squeal as you spray all over your hand and the ground, before your body falls slump.");
			writeText("The rain is falling around you as your body quakes.");
			writeSpeech("player", "", "<i>Fuck, that was amazing... I could get addict-</i>");
			writeText("Your thought process goes dead in the water as a cock appears in your field of vision from below, your show had an audience after all.");
			writeText("You can still run, evade the infected bitch and use the rain to your advantage. You can still survive!");
			writeText("But instead, on autopilot, all you can do is lick your lips. Your cock is softening, so it's obvious who will be on top.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "survivor1": {
			writeText("Rational thought went out the window the moment you saw her. A human woman? Here, in town? Your body moved on autopilot when you tackled her down to the ground.");
			writeText("She struggled, sure, but she's probably been running on maybe an hour of sleep in the last three days. She gives up and just goes limp soon enough.");
			writeSpeech("player", "", "Hey, relax, I'm human.");
			writeText("That gets her attention. She stops struggling long enough for you maneuver yourself to sit down on her hips, pinning her to the ground.");
			writeSpeech("player", "", "Now listen, you're got two choices. We do this the easy way, or the hard way.");
			writeText("She tells you to let her go, that she doesn't have any supplies left, and that you should just leave her out here to die.");
			writeText("Her voice dies in her throat once you've started taking your pants off. The moment she sees your cock, she starts to struggle again.");
			writeSpeech("player", "", "Calm down, calm down. You know better than to scream out here, right? Good. <br>Look, I'm special alright? I'm infected, but I can still think and talk like normal. I can make you special too.");
			writeText("She stops struggling, the glob of precum you pumped onto her coat while talking probably helped.");
			writeSpeech("player", "", "Think about it. I'm a walking vaccine. You don't need to worry about being infected, you can eat or take whatever you want safely.");
			writeText("You're bullshitting, but she doesn't need to know that. You push your dick against her cheek, and let out a small moan as you pump out another dollop onto her cheek.");
			writeSpeech("player", "", "So, again, the easy way, or the hard way?");
			writeText("...");
			writeText("The two of you started fucking like rabbits the moment your clothes came off. Apparently your sperm has the same aphrodisiac effect as the other zombies, good to know.");
			writeSpeech("player", "", "Gonna cum! Gonna cum inside you, you ready?");
			writeText("She shudders in response, unable to form words. Your thrusts are getting more shallow, her body has already begun to change.");
			writeSpeech("player", "", "Cumming!");
			writeText("Her body jerks with each load of cum you pump into her womb. You feel a pressure at the head of your dick, so you pull out. She writhes on the table, but soon enough her change is complete.");
			writeBig("survivor.gif");
			writeText("A brand new set of balls hangs below a fresh dick.");
			writeSpeech("player", "", "So? How does it feel?");
			writeText("Any sort of thought or feeling aside from hunger is gone from her eyes. Her hands wrap around her new dick and she starts jerking off.");
			writeText("This isn't right. There's no recognition to your words, all she's focused on is her dick. At this point, it seems like...");
			writeText("Like she's just a regular infected.");
			writeText("You start to leave as she has her first orgasm, pumping out sperm hard enough to splatter the walls of the room. You need to get home and figure this out");
			break;
		}
		case "survivor2": {
			writeText("You approach the girl with shaking hands, she's definitely younger than you. It's a damn tragedy what happened.");
			writeText("You tell yourself you just need to check her pulse, that you need to see if she's still alive, but that doesn't explain why your hand runs along her sticky skin after you check.");
			writeSpeech("player", "", "I... Need to stop this... I could get infected. <br>But maybe that's not such a bad thing-");
			writeText("You shake your head to rid yourself of the intrusive thought. How could that not be a bad thing? You need to leave but...");
			writeText("You can't bring yourself to stop rubbing her skin, the smell in the air is intoxicating.");
			writeSpeech("player", "", "Maybe... Maybe there isn't a chance I'll make it out of this... Wouldn't it be better to just live as one of them? And this is a chance for it to happen on my own terms, so that I don't end up like...");
			writeText("You shudder as you look at the girl's unconscious face, and rub your fingers along her slightly gaped cunt.");
			writeText("She shudders, there's a squishing sound as the smell in the room suddenly intensifies, and you lift your hand back up to see a glob of smelly infected sperm.");
			writeSpeech("player", "", "This is so fucked up...");
			writeText("You feel yourself shaking as you lift your hand over your head, and you stick your tongue out. Is this how addicts feel when they're holding the drug they need in their hand?");
			writeText("A long glob slowly extends down your tongue, and when it finally lands you can feel your cunt throb as your brain tries to make sense of what you just tasted.");
			writeSpeech("player", "", "So good... So good! Fuck, I need to... Stop...");
			writeText("You try telling yourself it's okay, that just a taste is fine, and that you'll spit it out.");
			writeText("Swishing around the delicious glob of infection in your mouth, you ignore the creeping panic in the back of your mind as you pull the hem of your pants out and begin to rub your sperm-coated hand against the lips of your pussy.");
			writeSpeech("player", "", "F-fuuuuck~!");
			writeText("You relish the taste on your tongue, your body shaking in pre-orgasm jitters already. It feels so much better to masturbate like this, right on the edge of danger.");
			writeText("You slip one of your fingers into your cunt and swallow hand, and your body shakes as you have a powerful squirting orgasm from sealing your own fate. The inside of your pants are completely ruined, just like your body.");
			writeText("The girl groans, pulling you out of your stupor. You aren't lying to yourself anymore, you need more of that cum. That's why you're so disheartened when a bit of it splurts out of her pussy and onto the floor.");
			writeText("You move quickly, trying to lap up as much of the sperm as she can splurt out.");
			writeBig("survivor2.gif");
			writeText("Her groans are getting louder and she's writhing in pleasure. More cum is getting pushed out of her body, so you skip the middle man, plant a fat kiss on her cunt lips, and start trying to suck out her infected creampie.");
			writeText("You let out a shameful whimper as more cum floods your mouth, your pussy squirting again as you can feel your body changing.");
			writeText("Suddenly she screams like she's trying to deliver a baby, her body shaking in an orgasm as you suck harder. This time as you suck, instead of more sperm, you're rewarded with a pair of fat shemale balls plunging out of her now-destroyed cunt and into your mouth.");
			writeText("You feel another orgasm coming on as you feel the balls throb in your mouth. Inside are the content of this girl's old womb, her identity as a woman, being turned into an infectious sludge.");
			writeText("Her clit has become an absolutely monstrous cock, and soon you'll be changing the same way.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "tainted": {
			writeText("The donuts are stale at best, and the glaze is certainly not fresh, but you've been eating nothing but rations for weeks now, so they taste better than anything you can even think of.");
			writeText("One, two, and three are already in your stomach before you start to feel a weird sensation wash over you. Had they gone bad? You try to set the fourth back down, but find you just can't and keep shoveling food into your mouth like a desperate pig.");
			writeText("You can feel the sensation growing, your body changing and your pants becoming tighter. Once you've eaten every one you're bringing the plate up to your mouth and licking the glaze off of it. It's salty taste overpowers your senses.");
			writeText("You feel dazed once the plate is clean, and you look around the room for anything else like it. When you can't find any you feel a pressure coming from your pelvis and you double over.");
			writeText("The sensation throbs and you feel your pussy lips start to spread like you're being fucked. Clenching only increases the pressure, so you relax and hear a muffled *POP* from your pussy and your pants suddenly feel way to tight. You slide them off and undo the clasp on your underwear, and...");
			writeBig("tainted.gif");
			writeSpecial("You now have a dick.");
			writeSpeech("player", "", "Oh no, oh no no no...");
			writeText("You grasp it to make sure it's real, and it is. The sensation of pleasure that hits out as you grasp it ensure that it is 100% a real, fat, dick.");
			writeText("You feel your insides churning and hear a small gurgling sound as suddenly your dick pumps out a torrent of white slime onto the floor, pushing out what remains of your old womb. You should be panicking, but...");
			writeSpeech("player", "", "Sho... Sho geeEEEEWD!");
			writeText("This is a real orgasm, not like the clenching and squirting from before. Once your balls have been emptied of white slime, you can actually see them inflating before your eyes as they start preparing sperm to infect others with.");
			writeText("But you pry your hands away from your dick. The slime on the floor smells FUCKING AMAZING! But you need to stay in control. You've just been infected, but you can still think rationally. Maybe you've infected yourself with a weaker version of the virus? If that's true, you're a walking vaccine now, but whatever the case you still need to get back home. Who knows what further infection will do to you?");
			if (data.player.currentScene != "gallery") {
				data.player.infected = true;
				writeText("[convenienceStore|Go back to scavenging]");
			}
			break;
		}
		case "infected": {
			writeText("You're safe! Every time you skirted death has been worth it. A full month's storage of food and water, all in the safety of your well-barricaded home.");
			writeText("The storm rages outside, but it's muffled by the thick walls. This place used to be someone's bunker, but they never got the chance to use it. They left plenty of things lying around, some more useful than others.");
			writeText("As you take off your gear and lay down to relax, you feel your cock start to harden. You still have one last thing ti deal with.");
			writeText("Luckily you have plenty of time now. You can study your strain of infection, maybe even find some kind of vaccine for the infection.");
			writeText("But more importantly, starting now, you need to practice some discipline. You are the one who controls the dick, not the other way around.");
			writeText("...");
			writeBig("infected.gif");
			writeSpeech("player", "", "Wanna cum, wanna cum!");
			writeText("A whole month in complete solitary with nothing but an insatiable dick to entertain yourself with? You didn't even last a week.");
			writeText("Some of the stuff you thought was useless turned out to be pretty amazing. Now you wouldn't trade those boxes of adult toys for all the food in the world.");
			writeText("The storm ended a long time ago, and you haven't exactly been conserving food or water lately. It isn't your fault though! Why bother saving resources, when it feels so much better just to pump them out as cum instead?");
			writeText("You'll need to leave soon to get more supplies. Something tells you that next time you leave, you'll find something a lot more fun than buttplugs and fleshlights, and you won't want to come back.");
			if (data.player.currentScene != "gallery") {
				writeTransition('rainyDayZ', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "journalBasic": {
			writeBig("basic.jpg");
			writeText("These are the most common types of zed wandering out there. The virus has transformed them, man and woman, into sex-crazed machines. They don't need to eat or drink, and they're stronger than two men together. I've seen one almost leap a six-foot fence in a single jump.");
			writeText("Their weakness is that they're fucking stupid. They'll slam themselves against a door for hours and never even try the handle. They also need to sleep, and boy do they need to breed.");
			writeText("I've been watching the ones outside the building for a week now. They're disinterested towards each other most of the time, but when they're pent up they'll attack each other or just start stroking themselves on the spot. It only takes about a few hours for them to reach this point too.");
			writeText("Their sperm is how they spread the virus, some prefer to do it anally over orally. But their saliva and body fluids have an almost hypnotic effect and smell. I've seen some of the smarter ones just start pissing and jacking away outside of barricaded buildings until the survivors inside can't take it anymore. They also seem to understand enough to infect any food they can find laying around.");
			writeText("They cum differently too, it's more like they start leaking semen right away, pumping out entire liters before they finally cum for real in really viscous, sticky ropes.");
			writeText("I've found that a couple of air fresheners, swapped out every week can help prevent the smell, so long as nobody here opens a window.");
			writeText("[journal|Finish reading the section].");
			break;
		}
		case "journalHunter": {
			writeBig("hunter.jpg");
			writeText("Dogs infected by the virus. I think any breed can be infected, but I've only ever seen Mrs. Fincher's dobermans in the area.");
			writeText("Like the regular breed of zombies they don't need to eat or drink, but these ones can hunt via the scent of blood. They can track down people from a pretty huge distance away, and their speed has greatly improved too. I once saw a survivor driving a car through town. A hunter was able to catch up to the car as it was driving and jumped on top. It thrust itself through the open window, but I didn't see what happened after that. If they're like the regular zombies, it probably started spraying semen all over the inside of the car.");
			writeText("I've noticed that they're actually a lot less aggressive than normal zombies if you act submissive. Mrs. Fincher didn't even try to fight back, so the hunters were really gentle with her. That is, before she finished turning and started begging for rougher treatment.");
			writeText("I think they've moved on to the forest now, so there shouldn't be any hunters in the city at the moment.");
			writeText("[journal|Finish reading the section].");
			break;
		}
		case "journalSiren": {
			writeBig("siren.jpg");
			writeText("These fuckers are the most dangerous types I've ever seen. Normal zombies are tough to deal with, but they have weaknesses. These ones are smart, really smart. They can open doors, use tools, climb up ladders, the works.");
			writeText("They aren't anywhere near as strong though, I think I could take one in a fight if I had to, but the most dangerous part of them is their pheromones.");
			writeText("See, their bodies are way softer, and their dicks are so small I don't think they even can get erections. What they do is emit pheromones that turn men into sex fiends, and try to seduce the men into fucking their asses. They infect the men like an STD while still pumping spunk all over everything.");
			writeText("Not only that, but they can make this weird screech sound. It hurt like a glass shard in the head, but for some reason whenever a man heard it they started running out of cover towards her.");
			writeText("They got Tommy, so the building is compromised. I was able to stay safe and eventually everyone else left the building. Sirens still get horny like normal zombies but they can't cum from their dicks, so they need to keep an entourage with them when they aren't hunting. When they find prey they'll ditch their fuckbudies, who are still covered in pheromones.");
			writeText("Now, Tommy wasn't exactly what I'd call a 'tough guy'. Honestly he was a do-no-harm sort of pacifist, pretty rare these days. I guess that's why he turned into a girly-looking one unlike the rest.");
			writeText("The one that got Tommy was headed to the south last time I saw her, maybe she's heading to that unfinished place at Ridgewood?");
			writeText("[journal|Finish reading the section].");
			break;
		}
		case "journalWorms": {
			writeBig("worms.jpg");
			writeText("I've never actually seen one of these, but they sound terrifying. Supposedly they're the cause of the virus, they're tiny worms that crawl inside of your vagina or dick and start to transform you from the inside-out.");
			writeText("The guy who saw them said his house was infested with them. They got into his wife while they were sleeping, and it only took a few seconds once one got into her worm for her to stop crying and start squirting all over the bed. They got his son too, they slithered into his balls and while he said it hurt at first, his son's cock started pumping out load after load of thick cum. He got them out of the house but they started to turn into zombies. He said he just left one night while he heard his wife fucking his son in the ass...");
			writeText("He brought it up that they love the scent of lemons, which is the same scent as my air fresheners. Luckily he's from a town over, and they aren't the most mobile of types.");
			if(data.player.cityZombie == true && data.player.infected != true) {
				writeText("You hear a sound from behind you and turn around. While you were reading, the [cityZombie|zombified previous resident] escapes the closet and is attacking you!");
			}
			else {
				writeText("[journal|Finish reading the section].");
			}
			break;
		}
		case "journalFlower": {
			writeText("<i>This note is written on a torn-out crumpled piece of paper.</i>");
			writeText("Alright, this is going to sound like bullshit, but I swear it's true.");
			writeText("I saw McKenzie on her way back from a scouting mission, she said she felt a bit off after smelling some weird flower. It was strange that she'd be out and about after a mission, since everybody usually can't wait to get their rations and lock themselves up in their rooms after going out.");
			writeText("I tailed her for a bit and she actually went back out. I saw her in the streets start to strip. She snuck around and found an infected bitch, and she started jilling off right there!");
			writeText("I know this sounds like she just got a strong whiff of some infected jizz, or maybe she had some kind of a danger fetish, but I swear she wasn't like that.");
			writeText("She had a real look of terror on her face as she stripped, and she saw me just before the infected noticed her. She mouthed 'Help Me'.");
			writeText("It keeps playing in my head, so I just needed to get it out onto paper. I'm trying to keep these logs realistic and practical, but I just can't explain this one. Between this and the worms, I got no idea what's going on. If you're reading this, God help you, I don't have any answers.");
			writeText("[journal|Finish reading].");
			break;
		}
		//The Facility
		case "start": {
			writeBig("player.jpg");
			writeText("It all happened so fast.");
			writeText("There was no blaring alarm, no warning broadcast, nothing official to warn everyone. All you had were an alert on your phone from a close friend telling you to be ready to fight for your life, a squadron of armed soldiers bursting into your office for a 'surprise inspection', then the lights went out.");
			writeText("Blind panic hit your assistants, they didn't last long. They ran out of the room and were taken immediately. The soldiers followed soon after, and now you are alone.");
			writeText("But you're not like them. You're brilliant, and willing to do whatever it takes. From all the evidence you have, it's clear exactly what's going on, what pathogen is breaching containment.");
			writeText("So you get a vial from cryo-storage, a green fluid inside and a biohazard warning on the front.");
			writeSpeech("player", "", "I'm not ending up like the rest of them... I didn't sacrifice everything to lose my mind.");
			writeText("Taking the final plunge you down the vial and double over just moments later.");
			writeSpeech("player", "", "Hagck... Fuck, it's awful.");
			writeText("The viral agent you swallowed works its way through your body, infecting you with a weaker version of the virus running rampant outside.");
			writeSpeech("player", "", "Kggh~!");
			writeText("From the awful taste you were expecting this to be a lot more painful.");
			writeText("Instead it's a strong, but not unpleasant pressure on your womb.");
			writeSpeech("player", "", "Focus... focus...");
			writeText("There's a stretching sound, then a tearing sound as your clit strains against your now too-tight stockings. You feel your pussy dilate as something is trying to push it's way out.");
			writeSpeech("player", "", "Gotta stay... In... Cont-");
			writeText("And finally it happens with a muffled *POP*, what remains of your womb descends and a pair of brand new testicles burst free as your stockings are torn to shreds.");
			writeText("Your skin burns and itches, every but of your body trying to fight back against the infection, and your mind is fighting too.");
			writeSpeech("player", "", "Guuuddd~! Fuhhhck~!");
			writeText("You tear off your clothes, throwing every piece as far as you can to escape the feeling of confinement.");
			writeText("Naked and writhing on the floor, you feel on the edge of defeat, of succumbing, as you feel your new balls pulse with life.");
			writeBig("start.gif");
			writeText("A heavenly feeling overtakes you as you feel your humanity drain from your cockhead. First a trickle, then globs from your pisshole landing in the ground with a wet *splat*.");
			writeText("With your body ravaged, even if you manage to obtain the cure and revert the changes, any hope you had of bearing children is pumped out of your new dangling nuts.");
			writeText("Your vision wavers and fades. All your energy devoted to fighting the virus, you let the darkness overtake you.");
			writeText("...");
			writeText("Slowly, you come too. The first thing to take your attention is not the sight of the dark room or the musky scent filling the lab, but the tingling of the cold air on your morning wood. Your plan was a success. Infected have already been through here, but they chose to ignore you. Not only that but you have full control of your mind as well!");
			writeText("Well, maybe not full control. It feels like a massive chunk of your brain, one previously devoted to pushing the boundaries of bioscience, has been smushed and relabeled as 'pump cock and splurt cum'.");
			writeText("The facility's lockdown has failed. Top priority is to find a cure for the virus before your body loses the battle and it completely consumes your mind. After that, escape. The infected won't ignore you for long now, if you've been out for very long they're likely starved enough to not care that you're already one of them.");
			if (data.player.currentScene != "gallery") {
				writeText("[It's time to get moving.|weaponLab]");
			}
			break;
		}
		case "mindWorms": {
			if (data.player.wormDisabled == false) {
				writeText("You know this is the wrong place and absolutely the wrong time, but you can't hold yourself back anymore. You NEED to cum, and you need to cum now.");
				writeText("You take a seat on the stained chair and start jerking off. The danger of it all is intoxicating, arousing, until you feel something touch your hand. You lift it to get a closer look.");
				writeBig("worm-1.gif");
				writeText("a small worm extends it's tentacles over your skin, and your body goes slack as a paralytic chemical spreads through your bloodstream.");
				writeSpeech("player", "", "<i>Fuck! Fuck fuck fuck, no!</i>");
				writeText("The worm slithers up your arm, your shoulder, your neck, and then the side of your face. All you can do is look around the room in a blind panic.");
				writeText("The worm slithers up to the entrance of your ear and extends its tentacles out again.");
				writeSpeech("player", "", "<i>Shit, I need to-... I need to... </i>");
				writeText("Your panic begins to fade as a new chemical races through you. The worm retracts its tentacles and begins crawling into your ear. It doesn't hurt, it all feels cold, goopy, but mostly it feels pleasant.");
				writeText("The worm slithers into your head, bumping into your brain and extends its tentacles again inside you. It feels around trying to figure you out. Your vision blacks out for a moment, a brief flicker of pain shoots up your leg and then vanishes, your arm jerks up before coming back down onto the arm of the chair.");
				writeText("Finally the worm finds the part of your brain it's looking for and squeezes.");
				writeBig("worm-2.gif");
				writeText("Reflexively you cum as your vision and mind go a bright white of pleasure. It's recognized you as resistant to the virus, so now it's taking away your rationality by force.");
				writeText("Desperately in the back of your mind, the part not bathing in pleasure chemicals, you try to think of a last way out. Of a way you could be useful to the worm. Anything at all to save your mind.");
				writeText("But the worm squeezes again on what's left of your rationality and starts injecting chemicals directly into your grey matter. No longer capable of rational thought, or of any thought at all, you'll sit here spurting and leaking until the worm is finished with you. ");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "whizzer": {
			if (data.player.wsDisabled == false) {
			writeText("Your lips and throat feel dryer than ever before. You weren't thirsty a moment ago, but now you feel like you could pass out from thirst at any second. With shaking hands you lift the beaker full of yellow fluid.");
			writeSpeech("player", "", "I-it's lemonade. Or tea! That's gotta be... Gotta be...");
			writeText("You lift the beaker to your lips, the smell feels like it's burning your nose and frying your brain. The moment the liquid touches your lips... ");
			writeText("You can't hold back, you start chugging it as fast as you can. It's piss. Warm, infected piss and you can't hold back from drinking a pint of it.");
			writeText("The taste defies words. You brain tells you this should be disgusting, but you don't want to ever drink anything else again. It dribbles down your chin, you feel a pang of sorrow knowing you're spilling but you can't slow down.");
			writeText("It's warm and bitter, you can only imaging how much better it would taste directly from a shemale's cock. Your own dick is fully erect and leaking, and soon you can feel the changes occurring inside you.");
			writeText("A moan is forced from your throat as you can feel an orgasm coming on, causing you to choke and sputter on the flow of piss going down your throat. It gets into your lungs speeding up the infection process, and you keep drinking.");
			writeText("Your cock jerks without you even touching it, soon enough you're leaking a solid stream of jizz from your cockhead. With every gulp the stream gets more powerful, the sperm becoming more watery and less thick.");
			writeText("Eventually you reach the end of the pitcher. You lick the inside as best you can as your cock sprays one last gout of piss and sperm onto the floor, and then you collapse.");
			writeText("You can barely move as the second infection of the night spreads through you, changing you even further. Your balls feel empty for once, but you feel a sudden strong pressure on your bladder.");
			writeBig("whizzer.gif");
			writeText("Wordlessly you shake as your cock starts spraying infectious piss onto yourself and the floor.");
			writeSpeech("player", "", "Gguuuuhhhd~!");
			writeText("It feels like an orgasm but just won't stop. Every time you try to stem the stream it builds up unbearably and feels even better when you relax and blast with full force.");
			writeText("Thoughts of survival and the cure are far behind you. As the stream weakens you feel your bladder working overtime as more piss is ready to be released already. You do your best to hold yourself back, only a small stream leaking out as you stand up.");
			writeText("Piss dribbling down your leg with every step, you begin making your way to the containment lab. The infected in there are going to have a very good drink tonight. ");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "solo1": {
			writeText("You take a seat to finally relax, the throbbing of your cock has been a constant distraction so far. You lift up the nameplate on the desk. ");
			writeSpeech("player", "", "Sorry... Amanda. I'll be using your desk. I suppose you won't ever be using it again anyways. ");
			writeText("You're about to start when something pink catches your eye in a partially-open drawer.");
			writeSpeech("player", "", "Oh my...");
			writeText("It's a dildo, a pretty decently sized one too. Work here can involve subjects that are a little... Arousing, for some to work on. Since being distracted can be dangerous, workers are encouraged to satisfy themselves regularly.");
			writeSpeech("player", "", "Still, a dildo in your drawer? Hmm... <br>I've never done anal before, but with this new body it might be fun. I'll give it a quick shot and go back to jerking off if it hurts.");
			writeText("...");
			writeBig("solo1.gif");
			writeSpeech("player", "", "Ah~! Ah~! Fuck, this is so much better than my pussy was~!");
			writeText("You'd always wondered why some men were so into anal. Some would get downright religious about it. But every time the toy hits your bitch button of a prostate, you get a little closer to understanding.");
			writeSpeech("player", "", "Fuck yessss~!");
			writeText("You start cumming hard, splurting a glob of your infected jizz onto the floor every time you pump your toy into your asshole. Towards the end you can't even muster the force to keep jerking your cock, focusing all your attention on slamming your prostate even after you stop cumming.");
			writeText("...");
			writeSpeech("player", "", "Alright, I need to go. No matter how good it felt...");
			writeText("At some point you managed to stop and clean the cum off yourself. You're satisfied now, even if it did take a few more anal sessions after the first. ");
			if (data.player.currentScene != "gallery") {
			writeText("[Get moving|chemLab]");
			}
			data.player.horny = false;
			break;
		}
		case "solo2": {
			writeText("Study the layout of the room carefully to make sure there are no surprises, you take a seat on a chair. Only a single slow stroke of your new cock and you're rock hard, you can't hold back any longer. ");
			writeText("The infected are becoming more aggressive in their containment cell, pent up and hungry, even for someone who's already infected. ");
			writeText("Electric sensation runs up your spine as you jerk yourself off in front of all of them. Yet it isn't enough. ");
			writeText("You feel your heartbeat in your ears as you decide to play things a little risky and push a button on the console. The clear plastic shield lifts, meaning that the only thing between you and the infected is a set of iron bars.");
			writeBig("solo2-1.gif");
			writeText("One puts on a show for you, eagerly waving her cock side to side to entice you.");
			writeSpeech("player", "", "Ghh... This is so wrong... I'm jerking off in front of a bunch of... <br>Fuck, I don't have much longer...!");
			writeBig("solo2-2.gif");
			writeSpeech("player", "", "Nnnhg!");
			writeText("Your legs shake as you paint the floor with your infectious spunk, filling the room with the heady scent of jizz. The infected are even more riled up now. You move to press the button to close the outer shield, but the large red button next to it...");
			if (data.player.currentScene != "gallery") {
			writeText("A simple slip up, [pushing the wrong button and letting them all out|hordeRelease]. Nobody would judge you for an honest mistake like that, right?");
			writeText("But you've got to remain in control and close the outer shield, then you need to [get back to finding the cure|containmentLab]. ");
			}
			data.player.horny = false;
			break;
		}
		case "releaseTheHorde": {
			writeText("Your finger slipped. That's what you'll tell yourself. It doesn't matter any more anyways, the iron bars are raising and the horde is set loose. Pent up and teased, each of them want nothing more than to turn you into their cum-sock, and they aren't interested taking turns.");
			writeText("They grab you and throw you to the ground, your cock already hardening again at the rough treatment. ");
			writeSpeech("player", "", "Ah~! Yes~! I wanna be your bitch, I don't wanna think anymore~! Cock~! Co-Mmph~! ");
			writeBig("horde.gif");
			writeText("They pile on to you. As many as your holes can take all at once, then more. The horde is angry, the ones who can't fuck you yet begin smashing the console in frustration, you quiver at what it'll feel like when they do that to you.");
			writeText("Alarms go off as more cages and doors around the facility are unlocked. After a moment of hard, bareback sex with the infected shemales, more infected begin to pile into the room. They're all hungry, and you're on the menu.");
			writeText("Your chances at reaching the cure are long gone now. You threw away your humanity into a jizz puddle, there's no turning back. ");
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "mindBreak": {
			writeHTML(`
				t The moment the first drip of the mixtures touch, you realize this was a bad idea. The liquids meeting fuzz and bubble, before exploding outwards in a cloud of gas. 
				t You cough and run back, but you definitely inhaled a lot of the stuff. As you clear your lungs and wait for the cloud to dissipate, you feel... Different. 
				t Your body is the same, your cock dangling between your legs and your fat nuts twitching as they prepare a load of infectious cum for an unassuming woman. 
				t ... Why did that thought pass your mind? You squint and rub your temples, trying to focus. Yet all you can think about is... 
				im mindBreak1.gif
				t Chasing down some woman, forcing your cock between her legs until her screams of terror are replaced with begging for more. 
				t You stumble backwards, trying to regain a hold on your sanity. Yet the only thing on your mind is... 
				im mindBreak2.gif
				t The image of someone you've hunted down. Once a proud man, now someone near the end of their infection process gleefully taking your cum as his body changes. 
				t Your mind is slipping away, becoming more primal. The scientist is gone, you are a regular infected now, someone on the hunt. 
				t But there's no one here left to hunt, and your ruined brain can't think of a way out. You are stuck here, maybe forever. 
				t Oh well, you can jerk off for as long as you want at least. 
			`);
			break;
		}
		case "cockBreak": {
			writeHTML(`
				t The moment the first drip of the mixtures touch, you realize this was a bad idea. The liquids meeting fuzz and bubble, before exploding outwards in a cloud of gas. 
				t You cough and run back, but you definitely inhaled a lot of the stuff. As you clear your lungs and wait for the cloud to dissipate, you feel... Different.
				t Your cock is rock hard between your legs, yet you look down at it and feel... Dissapointed. You reach down and grasp it, stroking it up and down. 
				t Yet your grip is rough, ineligant, like you're trying to punish yourself. You stroke faster as your balls clench up, before you pull your hand away and thrust at the air. 
				t Without any kind of stimulation the orgasm is ruined. It'll allow you to cum, but without any relief from the sexual hunger overtaking you. 
				im cockBreak.gif
				t As your cock spews out it's last rope of cum it sags, noticably smaller than before. It looks almost whimpy, pathetic like this, but for some reason you can't help but feel happy. 
				t You reach down to grasp the head between your index finger and thumb, stroking yourself again. Your hips jerk as you coo, and you feel yourself about to cum even faster this time. 
				t Suddenly you pull your hands away again, this time right on the edge. You can feel yourself about to cum, you're so close. 
				t On autopilot again, you stick out your ass and lift your hand, before... 
				t *SPANK*! 
				sp player; Oooh~! 
				t You spray, no, <b>squirt</b> cum onto the floor, the load much smaller and weaker than the last. You grab and knead your asscheeks, spreading your soft asshole between them. 
				t Your precious little dicky is so soft and small now. With what's left of your mental faculties you remember that there's a supply of containment devices around here. The thought of what you'd look like all caged-up and desperate...
				t Oh no! Just the thought of your tiny clitty all locked up in a cage got you all excited again. It's time for another punishment session! 
			`);
			break;
		}
		case "cockMind": {
			writeHTML(`
				t The moment the first drip of the mixtures touch, you realize this was a bad idea. The liquids meeting fuzz and bubble, before exploding outwards in a cloud of gas. 
				t You cough and run back, but you definitely inhaled a lot of the stuff. As you clear your lungs and wait for the cloud to dissipate, you feel... Different, yet you aren't sure where.
				t Your wide hips are normal, your ass is still fat and jiggly, your cock is the same, long size. As you brush your fingers over your lips though, you realize how you've changed. 
				im cockMind1.gif
				t You lips are much larger, and way more sensitive. Just rubbing your fingers over your lips... No, your fat, plush fuckpillows, is enough to send a shiver down your spine. 
				t You realize you're walking out of the chemical lab. You're worried your mind is being affected by the mixture, but you're probably just checking for some clues to escape. 
				t You open the door of the containment lab and take a good, long look at the infected in captivity before licking your lips. You're probably just hungry. 
				t You walk straight over to the control console. You're probably just checking for any hidden keycards. 
				t You press the button to open the containment cells. You probably have some kind of plan, right? 
				t You blow the biggest looking one of them a kiss as they approach you from all sides. You're... Probably... 
				... 
				im cockMind2.gif
				t From the very first moment one of their cocks touched your newly altered lips, you were hooked. Your only worried that one of them would use your ass instead, leaving you one less load to slurp down. Luckily every single one seems to be completely hypnotized by your lips. 
				t The one you're sucking off squirms and moans. She seemed like the dominant type, but the moment her cock was between your lips she was buckling at the knees. 
				t You must be generating some kind of pleasure drug from your lips, but that's not what you're focused on anymore. All that matters is that your mouth feels amazing! Every thrust into your mouth is like firecrackers in your brain. Your cock splurts onto the floor, completely untouched. Your mouth is the only sexual hole you need any more. 
				t But the other girls are starting to get antsy. At this rate you'll need to let two, maybe even three of them fuck your mouth at once. 
			`);
			break;
		}
		case "cockRock": {
			writeText("You take the cure vial and an injector. Carefully, you align the needle and pump the vial's contents into yourself.");
			writeSpeech("player", "", "Khh...");
			writeText("You nearly topple over. A second round of body shifting is taking its toll on you. The cure systematically eradicates traces of the infection in your body, then reconstructs you to your older self.");
			writeText("Clutching your stomach you fall down to your knees. Your balls, which dangled down at least two inches before, now tightly press against your taint.");
			writeHTML(`
				t You bite your lip as cum is forced out of you. Your balls being squeezed tight as they're forced back into your body. Your cock pulses and throbs, returning to the size of your normal clit but retaining the sensitivity.
				t Then suddenly your eyes shoot wide open. You grit your teeth and another load fires from your urethra covering the floor in even more of your nut sludge. 
				t You writhe on the floor as your cock is burning in white-hot pleasure. You try to grab it instinctualy, and you realize it's even bigger than before. 
				im rockCock.gif
				t The sensations won't stop, and neither will the growth. In the back of your mind you realize that the unstable mixture you exposed yourself to earlier is almost certainly the cause, but there's nothing you can do now. 
				t It takes every bit of your willpower to pull your hand away from your cock. You forcibly try to control your breathing. Even if the innoculation failed, even if you are stuck with this fact dick for the rest of your life, you still can remain in control. 
				t Until your cock says otherwise. Even without any kind of stimulation, you feel another rush of cum building up, your balls tightening, and what's left of your willpower spurt out of your penis in the form of sticky, white sperm. 
				t Your cock surges again, becoming even larger and more sensitive. If you couldn't resist before, there's no chance now. You splurt again, the load actually taking a few seconds just to make it all the way up your towering dick. The second to last thought that passes through your mind is "this is the end". 
				t After that, the last thought you have is "COCK! CUMMING! SPLURTING!" 
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "cure": {
			writeText("You take the cure vial and an injector. Carefully, you align the needle and pump the vial's contents into yourself.");
			writeSpeech("player", "", "Khh...");
			writeText("You nearly topple over. A second round of body shifting is taking its toll on you. The cure systematically eradicates traces of the infection in your body, then reconstructs you to your older self.");
			writeText("Clutching your stomach you fall down to your knees. Your balls, which dangled down at least two inches before, now tightly press against your taint.");
			writeText("You bite your lip as cum is forced out of you. Your balls being squeezed tight as they're forced back into your body. Your cock pulses and throbs, returning to the size of your normal clit but retaining the sensitivity.");
			writeText("The fog over your mind finally begins to fade and a sweet happiness floats onto you as your womb begins to take shape.");
			writeText("After the pressure and the cold sweat have ended, you stand on wobbly legs before rubbing between them.");
			writeBig("infectionCure.gif");
			writeSpecial("You are no longer infected!");
			writeText("It's not a perfect change. You'll need some seriously potent sperm to get pregnant given how damaged your eggs are, but at least you have a womb again. With no time to waste you get to work. Now you'll need to escape the compound. Getting infected again would likely be permanent, you can't take any risks.");
			writeText("...");
			writeText("You grab a wire and snap it clean out of place. The lights shudder before snapping off and the room is bathed in white light. The lab's doors shudder and unseal, and there's a loud BANG containment cell from the containment cell behind you");
			break;
		}
		case "failure": {
			writeHTML(`
				t You... Can't seem to move. 
				sp player; Shit... Shit shit shit... What is wrong... With... 
				t You nearly topple over as your mind races with equal parts panic and lust as you realize what's going on. 
				t You mave have cum when you drank the innoculation potion, but you never truly relieved yourself. All that pent up lust that came with your transformation into an infected shemale, combined with the lust of your newly highly sensitive pussy... It's all too much. 
				im failure1.gif
				t With reckless abandon you realize your only answer is to cum. <b>Hard</b>. You stroke your cunt, fingering it hoping you'll achieve release before the Alpha... 
				t Your brain stops thinking as a powerful musk fills your brain. You turn your head and see her feet, and you intended to let your gaze travel up to her face, but the moment your eyes rest on her mammoth, 15 inch cock... 
				im failure2.gif
				t You squirt, spraying the floor. You're cumming harder than you ever have in your entire life, and you know it isn't because of your fingering. 
				t She steps forwards and you pant tongue-out in desperate submission. 
				t ?fetish ws; She chuckles, a deep, throaty noise that makes your pussy clench. She lifts her half-hard titan of a dick and sighs. 
				t ?fetish ws; Your fingers never stopped stroking, and only grow faster as you realize what's happening. A thick, yellow fluid sprays from her cock as you squirt again putting your previous orgasm to shame as she marks you. 
				t ?fetish ws; Her piss shouldn't be infectious, shouldn't be addictive, shouldn't be turning you into a mewling, squirting bitch, and yet only one thought reins supreme in your mind. 
				t <b>Your Alpha is here.</b>
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "alpha1": {
			writeText("The door slides open and you race into the chemical lab searching for a place to hide, the only realistic hiding place is underneath a desk. You get beneath one away from the door, now all you can do is wait.");
			writeText("The door starts to slide closed, but you don't actually hear it seal. Rather, the sliding is interrupted by a metallic whir and the crunch of a broken motor, before it's ripped off its track and tossed aside.");
			writeText("<b style = 'font-size: 200%;'>\"HUNGRY.\"</b>");
			writeText("The voice booms through the lab. You pull in your knees draw yourself tightly into a ball as the sound of footsteps grows closer.");
			writeText("Your heart is pounding, but there's something in the air that's making your thoughts feel hazy. Her voice keeps echoing in your head, and despite your fear you reach between your legs.");
			writeText("Terror and panic hold you back from moving quickly, but you are absolutely soaked. You do your best to try and focus on the footsteps as they grow closer still, hoping she can't find you and that she'll get bored of hunting. You'll make a break for it once she leaves, and-");
			writeBig("chemChase1.gif");
			writeText("Every thought running through your mind comes to a screeching halt as she walks by your desk. Your heart is pounding, but not out of fear. It might be something in the air, or a part of her infection, but you lose every bit of self control you still had. Her massive cock, glistening with sweat hangs in front of you.");
			writeText("You take action, reaching out and moving out from beneath the desk. As she sees you, she gives a deep, bemused chuckle that sends a tingle down your spine.");
			writeSpeech("player", "", "It's so... So big, and so perfect... I w-... I need it...");
			writeText("You grasp the massive fuckmonster, feeling its weight in your hands. You lean in forwards and give the length a worshipful lick.");
			writeText("The beast is incredible, the head as thick as an apple. There's no way you could take it, so all you can do is reverently stroke it with your hands and press the head against your mouth. Sticking out your tongue, you french kiss her urethra like you're making love just in time for her to grunt and a single massive glob of sperm hits your tongue and is forced into your mouth.");
			writeText("You try to swallow it right away, but it's just too thick. Your eyes water and your sinuses burn, but you wouldn't dare try to spit it out. All of your work curing your infection fades away as you chew the alpha's ball jelly.");
			writeText("Finally you pull your mouth away from her cock with a lewd squelch, tip your head back, and suck in your cheeks as you force the thick, sticky load down your throat. You can actually feel the distention on your neck as the jizz slides down, infecting you. The heat travels down through your chest until you swear you can hear it enter your stomach.");
			writeText("You lower a hand to start fingering your sopping twat, you won't have it much longer anyway. Having ingested such a thick load of infected sperm, it'll be replaced with a cock within minutes. Already you can feel yourself riding your jizz-fueled high to an orgasm, and-");
			writeBig("chemChase2.gif");
			writeText("<b style = 'font-size: 200%;'>\"HUNGRY.\"</b>");
			writeText("You're snapped out of your stupor and want to slap yourself as you realize how selfish you were being. You belong to her now, and you pull your hand away from your cunt back to her massive dick,");
			writeText("But she isn't interested in worshipful kisses or a slow handjob. She grabs you by the hair and mashes her cockhead against your mouth. It can't possibly fit, you tell yourself, but you don't try to stop her. You are hers to toy with, and hers to break.");
			writeText("But to your amazement you feel your jaw stretching until finally her massive cockhead is forced inside. It stretches your jaw, and then your throat too. Soon enough you're impaled on her throbbing cock and she grabs you by the neck to pump her fuck-baton in and out of her new jizz-sock.");
			writeText("She lets out another deep grunt. That first load was just precum, just enough to prepare you to accept her monstrous length. Now you can feel the full effects of her cum as her balls tighten and throb.");
			writeText("As you fondle and squeeze her massive balls you feel your gushing pussy get slammed by the hardest, and last orgasm it'll ever have, all completely hands-free.");
			writeText("Tears run down your face as the massive distentions of jizz stop at your lips, your mouth is unable to open any further to accept her wonderful gift. But each time her balls throb her jizz spurts push harder until finally you hear a 'pop' and your jaw relents.");
			writeText("What must be pounds, gallons of jizz travel down the length of her cock. Much thicker than her precum. Ropes of the infectious stuff are pumped into your stomach to meet the load of pre you already swallowed.");
			writeText("You can feel your mind fading, but you fight harder than ever to remain conscious and in control. You're the only one in the facility who can work machinery.");
			writeText("You're the only one left who can help your alpha escape.");
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "alpha2": {
			writeText("The door slides open and you race into the containment lab searching for a place to hide, and you immediately move for the crawlspace. Nothing big enough to break through a containment wall like that would fit through a space like this.");
			writeText("The only problem is you can't fit through it either.");
			writeSpeech("player", "", "Fuck, fuck, fuck! Nonono!");
			writeText("You've got your body up to the waist in the vent, the problem is that your lower body is still sticking out. You inch and wiggle your way in further, you'll figure out how to escape later, but for now-");
			writeText("There's a loud BANG on the containment lab door. The infected in their cells are going crazy over your naked body, and it's got the attention of whatever's out there.");
			writeSpeech("player", "", "Almost... Almost... Yes!");
			writeText("You manage to get unstuck just as you hear the containment lab door explode open. You crawl further into the vent, just a little further and-");
			writeText("You feel your heart jump as a strong hand grasps you by the ankle.");
			writeSpeech("player", "", "No! No!");
			writeText("You're forcefully dragged out of the vent until the alpha infected has what she wants. Your upper body still in the crawlspace she roughly jabs her cockhead against your pussy.");
			writeText("Your skin tingles, even her sweat is enough to start the infection process and haze your mind. But even still the fact of the matter is that she's simply way too big. All she can do is rub her cockhead against your twat, but it's enough.");
			writeSpeech("player", "", "Ghhhhg~!");
			writeText("In the darkness of the vent you can't see anything, all you can do is focus on your convulsing cunt as a load of infectious slime covers your pussy and ass. Thoughts of escape and survival as a human are beginning to fade away. Everything fades, until you feel her cockhead pressing against your pussy again.");
			writeSpeech("player", "", "S-stop~! You're too.. Too... NNNNHG~!");
			writeText("You feel like you're being tazed, you can hear your heartbeat in your head as her cock spreads your pussy. Her sperm must already be altering your body beyond hope of repair. You'll never be satisfied with anything less again.");
			writeBig("containmentChase.gif");
			writeText("Every thrust is a battle, even for the alpha. A human's cunt wasn't meant for this kind of treatment.");
			writeSpeech("player", "", "YESH~! HARDER~!");
			writeText("But you aren't human anymore. Less than halfway in and her cockhead bumps against your cervix. You can feel a distention on her cock going down your cunt, stretching you even more, until your womb is suddenly packed full of alpha infected cum.");
			writeText("It won't stay that way for long. As your womb is attacked by the virus, the alpha pulls out from your pussy leaving you a gaping mess, and aligns her cock with your asshole. Your consciousness begins to fade, but that's okay.");
			writeText("You'll probably wake up to the feeling of her load in your ass.");
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "alpha3": {
			if (data.player.rimDisabled == false) {
			writeHTML(`
				t You dive into the weapon lab, hoping the alpha didn't see you. 
				t As you hide in a small cabinet, the infected woman tied up in a testing cell begins to tug at her bonds. Good, she should work as a distraction. All you need to do is hope the alpha isn't intelligent enough to realize she's been tricked and you're home f-
				t <b style = 'font-size: 200%;'>"HUNGRY"</b>
				t The voice shakes you to your core, and you almost cry out on impulse. You hear the heavy footfalls of the alpha move past you, and you open the cabinet door just a peek. 
				t The infected woman squirms and you hear a small snapping sound as she finally breaks free of her restraints. Pent up and in a frenzy, she charges at the alpha. 
				... 
				im weaponChase.gif
				t Thrust, clench, pull back. 
				t Thrust, clench, pull back. 
				t <b>Thrust, clench, pull back. </b>
				t You'd swear you can hear every splurt of alpha cum filling up the infected woman's ass. You can <b>SEE</b> the distention of the alpha's cockhead bulge in the infected woman's body, and you can see the way the bulge inflates for just a moment with every rope of sperm fired. 
				t But once the flow stops, the Alpha just resumes thrusting. No cool down, no waiting. The infected woman has either accepted her fate or fainted, you can't hear her struggling anymore. All that's left of her is a twitch of her legs as she paints the floor again. 
				t You can't hold yourself back anymore as you push open the cabinet door and crawl out. Part of you is screaming to escape, to get to the elevator, but... 
				t You aren't crawling towards the exit. 
				t The infected woman can barely be seen. The alpha's massive balls slamming into the much smaller pair, you'd be suprised if the infected could fuck anything with her dick after the alpha is finished. 
				t You whimper as you struggle to stop yourself. Your eyes locked on the meaty ass making the infected woman its bitch with every thrust. You whimper reflexively. 
				t The alpha notices you and reaches back with her strong hand and grabs you by the hair like a cheap whore, before yanking you forwards to press your face against her asshole.
				t Your cunt throbs and your womb feels like jelly as you realize the faster you help the alpha to cum... 
				t The sooner you'll be next. 
			`);
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "spider": {
			if (data.player.beastDisabled == false) {
			writeText("The door slides open and you race into the parasite lab searching for a place to hide, the desks are all covered with strange substances. You run around the room searching for any form of escape, even running into a containment cell.");
			writeText("With lots of suspended rock formations, this must have been made for some kind of animal. For now you put that aside, hoping the alpha chasing your can't climb.");
			writeText("You make your way up and into some kind of small cave, or crawlspace. The floor and walls are lined with extremely sticky white ropes.");
			writeSpeech("player", "", "Fuck... I wish I were wearing... Anything, really.");
			writeText("You barely hear the parasite lab door smash open. You should be safe but you keep crawling forwards just in case.");
			writeText("Suddenly, a rope wraps around your face covering your mouth. Your arms and legs follow and are pulled taut when the sticky ropes on the floor lift a few inches off the ground.");
			writeText("You hear the sounds of inhuman legs scuttling around you as another rope, they must be some kind of webbing, wraps around your face covering your eyes.");
			writeSpeech("player", "", "Mmph! Mmmpfh!");
			writeText("Desperately you try and struggle, bite, and gnaw through the webbing, only to find your muscles start to relax and your heartbeat slow. The webs taste...");
			writeSpeech("player", "", "<i>Good?</i>");
			writeText("There's some kind of substance in the webs, your eyes lid over as you swallow some kind of intoxicating substance. Continued munching relaxes you further, even as you're turned over and dragged down the tunnels.");
			writeText("At this point there's no chance of rescue anymore. You're pulled into a large room completely coated with webbing as small spider-like creatures scurry about between large web sacks hung from the ceiling.");
			writeText("Every so often you notice one of the sacks let out a moan and shudder.");
			writeSpeech("player", "", "Mmph... Mpph...<br><i>More... Moreee...</i>");
			writeText("You're hoisted up and covered in more webs, every part of your body cocooned except for your ass and pussy. You can still breath, but the air filtered through the webbing is intoxicating.");
			writeText("You feel one of the spiders crawl up to your rear and something long and thin presses against your pussy. You draw a sharp breath as it pushes inside you filling your lungs with more of the addictive narcotic.");
			writeText("The spider's length pushes farther inside of you, just enough to lightly tap the entrance to your womb, before the length thickens and you feel a liquid being pumped into you.");
			writeSpeech("player", "", "Mmmmph~!");
			writeText("In your drugged state you can't struggle, but even the webbing can't hold back your moans as lightning flashes in your brain. It must be a super concentrated version of what's in the webs, injected directly into your cunt.");
			writeText("Soon after the flow stops and the length thins back down. You let out a whine before a large bump hits your cuntlips. Something's being sent down the spider's ovipositor, at least three inches wide. You're stretched out as an egg is forced into your cunt, traveling down until you can feel it press against your cervix.");
			writeText("More eggs travel down the length, putting pressure on the first as it presses against the entrance to your womb. The drugs having relaxed your body, eventually you have no choice but to relent and allow the egg inside.");
			writeText("Then another. And another.");
			writeSpeech("player", "", "Mmmph... <br><i>MORE! MORE!</i>");
			writeText("The drugs race through your system preventing you from even the slightest movement. More eggs are stuffed into you until no more could possibly fit, and the spider begins to pull out. All the eggs still inside the ovipositor are squeezed out into your cunt, and once the spider has fully withdrawn some of them fall out with a *plop*");
			writeBig("egg.gif");
			writeText("Barely awake, your consciousness fades as you feel another ovipositor press against your asshole. ");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('theFacility', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "fireteam1": {
			writeHTML(`
				t "So, we got any more info on the situation down there?" A woman in full body armor asks. The elevator she's riding in is quite cramped, as two other heavily armed figures are riding with her.
				t "None. We get in, activate containment procedures, ensure Alpha is still locked up, and get out."
				t The elevator door opens. 
				t The footage glitches, static covers the screen. 
				... 
				t "Captain... I can't... Please, don't leave me..." 
				t The speaker, the same soldier as was speaking before, is sitting against the wall, her pants are missing and cum is leaking from her cunt. In front of her a large metal door seals shut.
				t "I can't risk you infecting me, Jones. If you make it through this with your mind intact, the passcode is 828." Then the voice over the radio goes silent. "If you don't... I'll be in there soon to take your tags, and the recordings."
				t "Captain... Captain please, it... Ghh..." 
				t The soldier takes off her helmet and the camera attached to it and throws it aside as she writhes. Her muscles clench, she grunts, and there's a soft wet *POP* sound in the air. 
				t The helmet settles on the ground, allowing the camera to record the soldier. 
				im soldier1.gif
				t The soldier's body has changed. Her womb and clit unrecognizable. Where once a pussy was leaking infected cum, now a bulging cock is leaking infected precum. 
				t "F-fuck you, captain... You fucking... Ice queen bitch... When I make it out..."
				t She strokes her cock as her rambling becomes less coherent. Another hand goes between her legs, circling the rim of her asshole before she begins to finger herself. 
				t "Your husband... I know you peg him, how would he like... A real dick...<br>And that cute son of yours was looking at my ass last time, maybe I'll let him shoot out his first load inside me... Before I turn him into a girlyboy slut!" 
				t As she bucks her hips and begins to cum, spraying the floor and the camera in a thick layer of cum, her bitter fantasies melt away into wild grunts and moans. The audio makes it clear she's still pleasuring herself, but it's also clear her mind is long gone at this point. 
			`);
			break;
		}
		case "fireteam2": {
			if (data.player.wormDisabled == false) {
			writeHTML(`
				t This recording begins in the middle of a frantic battle in the parasite lab, or a different section you have access to at least. 
				t A heavily pregnant woman in a labcoat has pushed down the soldier wearing the camera. The soldier is barely holding her back as she turns towards the lab's door, which has just clicked shut. 
				t "Help! Don't leave me like this, this bitch is-" 
				t The pregnant woman giggles, before she turns her head. Out from her ear slowly slithers a red worm, the woman cooing as the parasite stimulates her brain on its journey. 
				t The soldier closes her mouth and tries to break free, but to no avail. The camera shakes as the soldier struggles, but suddenly she stops moving. 
				t "No, no no no, why can't I move!?" 
				t From the sounds of it the parasite has inflicted her with a paralytic chemical, and has now begun to crawl into her ear. Strange, the parasite should specifically target already infected woman, maybe it's a new mutation?
				t The soldier's scared grunting and sobbing slowly gives way to disorientated moans. The pregnant woman holding her down relaxes her grip and backs off. 
				t The soldier twitches, the mind worm parasite trying to figure out which parts of the brain trigger which reflexes. All the while the pregnant woman giggles and strokes the soldier's cunt to ease the transition along.
				im soldier2.gif
				t The soldier screams out as she's forced to a sudden, squirting orgasm that sprays the floor. The pregnant woman giggles again as her gut wriggles, suggesting that she's already been turned into a broodmother for these creatures. Once the mind worm has it's way, it's likely the soldier will willingly accept the same fate. 
			`);
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			break;
		}
		case "fireteam3": {
			if (data.player.beastDisabled == false) {
			writeHTML(`
				t "You... You sons of bitches! If you think you'll get away with this, you're dead wrong!" 
				t The woman on screen looks seriously pissed off. She's taken her helmet off and is using it as a recording device. 
				t "This is captain Rita Vasquez, I'm the captain of a fireteam for the fucked up organization that started all this shit. I was sent here on a containment job. All my subordinates have already been infected.
				t I completed my mission, but... Those mother fuckers... They're abandoning me. They'd rather just study what's going on in here, using their own employees as 'data points'. They've sent in hounds after me, I don't have much longer. I already infected myself too, I'd rather turn from drinking some vial than getting fucked by some zombie with a dick. It was some research sample called 'Echidna', maybe the hounds will ignore me since I'm infected. 
				t Listen, I know if you're reading this you probably work for them too. Get out. They don't care about your life, the world, or even money. Those motherfuckers just want to see the world burn. But I'm not scared."
				t She holds up a small handgun.
				t "I'm taking them down with me. I'm a warrior, I'll go down with honor, with dignity-"
				t The captain is interrupted as her makeshift blockade is shattered, and barking can be heard from offscreen. The camera is knocked over and glitches out. 
				... 
				t When the video resumes, a much happier-looking captain is smiling into the screen. She looks happy that the camera has resumed recording, and a large hound enters the frame and begins licking her face. 
				t The captain giggles, and begins reciprocating the kiss. It seems like she's already infected. 
				t The dog stops licking and the captain whines, until the dog steps onto the table. Its bright red, fully erect cock dangling between its legs. The captain looks completely hypnotized. She adjusts her uniform and softly gasps as the hound places his dick between her breasts. 
				im soldier3.gif
				t At the height of his thrusts the captain will lean her head forwards to plant a small smooch on the growing knot at the base of her lover's fat dick. The hound grunts and begins to thrust even faster, before slamming down his hips so that the knot rests between the captain's large breasts. 
				t The captain giggles as a sticky sound can be heard, the hound's cock beginning to fill her jumpsuit with infected jizz. 
				t ?fetish rim; She sighs appreciatively as she's marked, before she leans in to worship her new lover's ass. Wet sounds and moaning which would be much more appropriate for a steamy make-out session between lovers can be heard as the captain stimulates his anus with her tongue. 
				t There's another bark from offscreen. It seems as though the pack has been ordered to return to the surface.
			`);
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			break;
		}
		case "domination": {
			writeHTML(`
				t The woman struggles against her bindings. They don't look too strong but they're keeping her in place for now.
				t Unable to even jerk herself off she's clearly pent up and quite angry about it. As her bindings still keep her in place her anger fades for a moment replaced with a look of desperation. She thrusts her hips up and waves her cock in the air, hoping you'll stimulate it or at least fuck her into a squirting mess.
				t But this is about your relief, not hers, so you grab her by the hair and press your dick against her lips. She resists, but only for a moment as you draw your cock back.
				t *WHAP*!
				t You smack her across the face with your dick, she whines and her cock jerks up. Either you just slapped the resistance right out of her body or you just slapped a masochistic fetish into her brain.
				t Regardless she's a beast of instinct now, so all she cares about is that she got a surge of pleasure from that. She pants open-mouthed to show her apology for her earlier rudeness.
				...
				im domination.gif
				t Her eyes and nose water as you relieve yourself with her face. You have a large grin on your face as you grip her by the hair. If someone were watching, they wouldn't be able to tell which of you is the mindless infected. 
				t Dominance like this is... <b>Addictive</b>.
				t Her cock bobs with each thrust, pulsing as if on the edge. Her eyes flutter as her consciousness fades, clearly hungrier for sexual relief than air. You want to see how much longer she can last, but...
				t That's your inquisitive side thinking, it's why you're the best at what you do but you shouldn't play around too long. You firmly tug her by the hair and sigh in relief as your balls throb, and you begin to cum down her throat.
				t You hear something splattering beneath you, she must be cumming on the floor as she blacks out. Of course the poor dear won't be feeling any less pent up if her orgasm is ruined like this. Oh well.
				t You pull out, her body is still limp until she suddenly coughs and gasps for air. She looks up at you, eyes still full of desperate need even as her half-hard cock is flagging, but the only thing you give her is a facial.
				t Well, that was fun, but you should...
			`);
			if (data.player.currentScene != "gallery") {
				writeText("[Get moving|weaponLab]");
			}
			break;
		}
		//Spread Island
		case "frozen": {
			writeText("This must be a dream, it has to be. Some woman, with a dick, stumbles into your hotel room as your wife is out of her mind. You must've gotten wasted, or high, or passed out at some point after hitting your head.");
			writeText("The woman's thick cock spreads your wife's pussy, but only makes it a few inches in before it seems like the girl can't thrust any farther.");
			writeBig("frozen-1.gif");
			writeText("After only a few thrusts the woman, an annoyed look on her face, pulls out. Your wife groans, her eyes crossing as she makes one big push, and...");
			writeText("*POP*");
			writeText("A single, egg-sized ball pops out of your wife's pussy. She moans in relief, before grunting and spasming and...");
			writeText("*POP*");
			writeText("Tears run down your wife's face, ones of relief, and maybe even pleasure. Her clit has fully transformed into a full-on cock and her pussy has become a pair of fat nuts.");
			writeText("You finally work up the nerve to pinch yourself, and the pain is too real for you to pretend isn't there.");
			writeSpeech("player", "", "Please... Please let me wake up... Honey, please tell me this is-");
			writeText("The woman lunges at you, tackling you to the ground. With inhuman strength she begins to tear your clothes off while trying to smear her cock against your face.");
			writeText("You try to fight back, but you've got no spirit left. Everything that's happened up to now has been insane, you can't muster up the will.");
			writeText("The woman lets out a small hiss as her cock leaks a glob of precum onto your check, and you instantly feel much better. The hopelessness and despair seem a lot smaller now, and your head suddenly feels too stuffy to focus on anything except the woman atop you.");
			writeText("She repositions herself as she snaps the button on your pants and starts pulling them off. No longer needing to pin you down, she gets your bottom half exposed quickly.");
			writeText("You relax and close your eyes for a moment ready to accept your fate, until you feel something pressing against your cheek. As you opem them, you see your wife's loving eyes, her gorgeous body, and...");
			writeBig("frozen-2.gif");
			writeText("Her throbbing cock.");
			writeText("She presses her head against your lips, and you relent. At least this way you'll be together forever, just not in the way you expected when you married her.");
			writeText("The woman presses her head against your asshole as you take your wife's cock in your mouth. Whatever happened to them is happening to you too, your body is already changing. You feel softer, more ready for the pair of infected women about to spitroast you. Your mind has begun to fade away, your identity as a human is gone.");
			break;
		}
		case "hotelWifePleasureGas": {
			writeHTML(`
				t You gently nudge wifeF from her half-asleep state. 
				t She's disorientated, exhausted by the toll whatever is going on is having on her body. But more importantly she's still human, at least mentally. 
				sp player; Here, I found this... Thing in another room, I think it might be related to whatever apocalypse thing is going on right now. <br>It's a long shot, but it could be a cure, or some kind of vaccine. 
				t You hold up the small device with the nozzle pointed at her. She looks worried, but she trusts you. She closes her eyes, and you press the button. 
				t A small pink spray is released. wifeF takes a breath hesistantly and her eyes shoot open. She starts taking deep breaths and twitching, leaning forwards as if searching for more. Her cock throbs once, twice, then a third time as it goes from flaccid to fully erect. 
				t She clenches her teeth hard and her eyes cross. Her cock is cumming without the slightest bit of stimulation. 
				im wifePleasureDrug1.gif
				t You hold on to at least some last, small hope that it's just purging the virus from her system until you see her already large dick throb again, it's undeniably larger than it was a second ago. 
				t She looks at you, eyes tinged pink and without a trace of humanity behind them, and lunges. 
				t The next thing you know you're on the ground beneath her, her cock's head still leaking cum and pointed right at your face. She grabs the device from your hand, barely recognizing how close her dick is to an uninfected mouth. And to make matters worse you hear ferocious sounds of banging and clawing at the door. 
				t She nuzzles against it like a cat and catnip, bites at it, scratches it, everything to try and get <b>more</b>, until she finds the button by accident and sprays a large hit of it directly into her face. 
				t She takes a deep breath and makes a sound halfway between a squeal and a giggle before her body starts to shake. Her balls audibly <b>gurgle</b> as you make a last ditch effort to try and free yourself before... 
				im wifePleasureDrug2.gif
				t Too late. A few small shots, the kind you could expect a normal human to fire, before a torrent of infected nut-sludge is seemingly pissed out of her urethra onto your face and upper body.
				t You can barely avoid it getting into your mouth, let alone your nose. And to make matters worse wifeF knows how to use the device now. Holding down the button the room is nearly filled with the pink gas.
				t The pure jizz coating you, the strange pink chemical, it's too much.
				t You start to cum, splurting everything into your pants. Your jizz, your pride, dignity, every intelligent thought you've ever had as a human is splurted out by force as your body is changed and infected.
				t The door breaks down, letting a torrent of infected inside. Attracted by the gas, all they see is a room of pink, and two infected in the throes of orgasm. 
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "hotelMainExit": {
			writeHTML(`
				t You make your way back into the room, the sound of you grabbing whatever you need to survive waking up wifeF from her stupor. 
				t She's exhausted from the toll the infection is taking on her body, but she's human. That's all that matters. 
				t You take her by the arm. You'll carry her if you need to, and head out towards the main lobby. 
				... 
				t It's a shitshow down here, people fighting to get in for shelter and people like you fighting to get out. Hotel staff are abandoning ship and looters have already started grabbing everything they can. You hold wifeF close as you force your way through the crowd of terrified people. 
				t "SHE'S INFECTED!" 
				t You aren't sure who said it, but the crowd around you pulls away. The chaos isn't stopping yet though. There's the sound of a window shattering, screams of panic and terror, and wifeF stumbles slowing you down. 
				sp wife; I can't... I can't stop!<br>I'm sorry, all these people...! 
				t She's got an erection tenting her dress, a dead giveaway of her infection, and she's doing her absolute best to control herself but can't stop from stroking her dick through the thin fabric of her dress. 
				t You reach out to help her, to pull her hands away so you can get moving again, but you feel a weight against you as the room goes sideways. 
				t The next thing you know a woman with a crazed look in her eyes is dry-humping you, a fat bulge in her shorts. 
				sp player; wifeF! Help! 
				t She steps forwards on shaky legs looking you right in the eyes. So close to exploding, her willpower on the verge of shattering, the sight of her husband pinned down by some crazy woman with a dick is enough to push her over the edge. 
				im mainExit.gif
				t Biting her lip she can't help but fully commit to jerking off, a large glob of precum splashing against your cheek as the infected woman tears apart your and her clothes. 
				sp wife; I'm sorry! I'm sorry, but I can't stop! 
				t She presses the head of her cock against your mouth as another jet of precum is fired. The other infected has finished clearing the way as well. The precum must already be infecting you, because the feeling of her dick against the rim of your anus makes you want to scream out in pleasure instead of pain. 
				t The edges of your vision go faint and the last thing you see is wifeF's crying face as she bites her lip, the horror of the situation making her cum even harder into your mouth. 
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "hotelFreshSiren": {
			writeHTML(`
				t You reach out to hug the girl. Her skin is so soft... She hugs you back, her sobs feel musical to your ears. Everything in the room seems to darken in your vision, except for her. 
				t Dimly you're aware that you're being pushed down, and she parts her skirt to show you the small cock between her legs. 
				t She's infected. You should be scared of this girl who basically has you pinned, scared of the small dick that's about to infect you, yet... It's so cute! 
				t You reach down, unzipping your fly and trying to shimmy free of your pants, and she giggles to reward your newborn loyalty. You hear the door open, and the two of you look up. 
				sp wife; H... Honey? 
				t The girl atop you laughs when she sees your wife, terrified and distraught, and the sound seems to soothe her. Your wife steps forward not of her own accord, her dick at full erection. She appreciates the girl's voice as much as you do. 
				im freshSiren.gif
				t Every one of her moans feels so perfect in your ears. Even her gagging on your wife's dick is like a series of perfect notes to a wonderful song. 
				t Your wife squeals, rudly interupting the girl's voice, but the girl just giggles as her mouth is flooded with cum to let you know that everything is alright. 
				t The girl pulls her mouth off of your wife's cock, her cheeks puffed out, and leans down to you with her lips puckered for a kiss. 
				t Some small part of you is still trying to pull away, and she can see it, but she just giggles to rid you of that last pesky independent thought as your lips meet. Your mouth is flooded with a wonderful fluid you can feel changing you from the inside out.
				t You drink from her. From your wife's balls to her mouth to yours. Your own cock throbs and grows. She hums a playful tune, happy that she now has two toys to keep her satisfied while all hell breaks loose on the island. 
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "hotelPleasureGas": {
			writeHTML(`
				t You tug at the hose attached to the wall. It's got a pretty strong bond, but if you just... Pull... Harder...! 
				t There's a sound of rubber breaking before the *KSSSSSSH* of gas as you break the seal. A thick gout of pink gas is spraying from the hose. You cover your mouth and nose, but it's too late. 
				t The gas makes your skin tingle, eyes water, and the small amount you inhaled begins fucking up your body from the inside. You feel a sudden, <b>intense</b> pressure from your nuts as it feels like they're about to burst.
				t You tug at your pants. Probably not the best course of action, but you can't think straight as it feels like the gas is melting away your brain. You gasp, no longer in control of yourself, but you do notice that your voice is higher. It almost has a songlike quality to it. 
				im pleasureGas.gif
				t By the time your pants are off your body has already changed enough that you don't recognize what you see.
				t You feel yourself fall down onto the floor, your cock feels white hot yet there's a cool sensation coming from your urethra, like you're leaking. 
				t Leaking... Leaking... 
				t A giggle escapes your lips. You feel... Smaller... The gas fills your body, replacing what's human with something else. 
				t Soon, there isn't anything human left in your mind or body. 
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "hotelAbandon": {
			writeHTML(`
				t You've landed safely in the pile of soft bedding, and stand up unharmed. Looking around you can see a way out of the hotel towards the less populated expensive villa area. If anyone is getting help right now it'd be the richest folk. 
				t You take a step forwards, but can't help but look back up from where you came. 
				t wifeF... 
				t But there's no turning back now. Even if you could get back up she's already infected. Even if you can't live with yourself after escaping alone, you'll be alive to try. 
				t Yet as you make a break for it, you can only imagine what horrible things are happening to wifeF right now... 
				...
				im wifeAbandoned.gif
				t Scores of them have swarmed her, she's given up hope that you'll be back. 
				t As her mind goes blank, only one thing is for sure anymore. Even if you survive your journey off the island the image of your wife will always be on your mind, but your image won't ever cross hers again.
				t But you didn't escape the island. What happened to you remains to be seen, but the dream of escaping together, or even safely, is gone.
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "wifeHelp": {
			writeHTML(`
				sp wife; It's not...! Not enough! <br>Please, you mouth, I need it! 
				sp player; But-
				sp wife; PLEASE! You can spit it out, but I <b>NEED</b> to cum! 
				t Your wife, broken and begging with tears in her eyes, convinces you to swallow your pride (and hopefully nothing else). 
				t The moment your lips are around the head of her cock a torrent of spooge floods your mouth. You back off quickly, spitting it out and hoping you aren't infected. 
				t Your mouth feels... Fuzzy. 
				sp wife; Put it back! Please! That was... Ggghh... Just precum! 
				t You look at her dick in disbelief, her precum was thicker than a normal man could shoot out in a full load. 
				t You try to keep focused, trying not to think about how the numbness in your mouth might actually be a plesant buzz, or how much more eager you are to continue than you were a second ago. 
				t You slide your lips back onto her dick again, carefully, slowly you-
				t She isn't having any of it. She grabs you by the hair and starts ruthlessly fucking your face. Another glob of precum fills your mouth and the entrance to your throat. You tap on wifeF's thigh begging for mercy. 
				t And that's when she thrusts deep enough to tap her balls against your chin, and starts cumming. 
				im wifeHelp.gif
				t You can hear the audible splorting noise, you're well past being infected now. But when you look up, the eyes staring back at you don't have a trace of human intelligence, just animalistic, bestial lust.
				t You feel the coolness of the infection overtaking you, and the edges of your vision darken. 
				t ?fetish ws; But just before you black out, you feel her hand stroking your hair lovingly. She sighs, and you feel something traveling down her urethra. The very last sensation you feel before blacking out is your wife's piss flooding your stomach. She moans, as if this is just as good as getting off. 
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "wifeDildo": {
			writeHTML(`
				sp player; Here, I found this, I hope it-
				t She grabs the toy from your hand without a second thought, pressing it against her nutsack on instinct, before lowering it down to her asshole. 
				t Your wife had never been a fan of anal before, but... 
				im wifeDildo.gif
				t The sensation of the plastic dick is enough to trick her body, and she's <b>squirting</b> a full stream of cum from her infected cock. You need to keep away as she's spraying over a foot away. 
				t Her eyes are glazed over, like she's ignoring the whole world and focusing only on the thrusting of her anus, and the feeling of the dildo smashing against her prostate as quickly as she can bounce. 
				t As she slowly comes to a stop, her cock flagging and the dildo creating a distention on her abdomen, her eyes flutter closed. 
				sp player; Honey? Honey, are you okay? 
				sp wife; Mmm... Hmm? 
				sp player; Come on, we need to get moving, let's go. 
				t She nods, looking only half awake. She softly coos as she slides off the dildo, one last spurt of cum splattering the floor as she stands up on unsteady legs. 
				t The smell is... Intoxicating, but you can't succumb.
			`);
			break;
		}
		case "wifeCage": {
			writeHTML(`
				sp player; wifeF, please! <br>Whatever you shoot out, it's infectious. If we're going to make it off this island... 
				t You hold the chastity cage in one hand, and the ice cubs in the other. She looks at both, her face is very conflicted. She closes her eyes, releases her dick from her hands, and clutches the sheets tightly. 
				t You move fast, there's no telling how long her willpower will hold out. Using the icecube, you-
				sp wife; Oooough~! 
				t Just the touch if it makes her jerk her hips, but that was absolutely not a moan of pain. You do your best to hold her down and force her cock to soften and numb, but it seems like she's getting off on this. 
				t Yet, not actually enough to cum. You say a little prayer, hoping her brain makes it through this intact. 
				... 
				im wifeCage.gif
				t Finally, the cage is in place. She's huffing and puffing on the bed like she's just been through labor. Just one look in her eyes tells you she's teetering on the edge of sanity. 
				sp player; Can you keep going.
				t She nods. It's clearly only one thing is on her mind though, and her fiddling with the chastity cage makes it clear what that is.
			`);
			break;
		}
		case "wifeSacrifice": {
			writeHTML(`
				t Fear, hesitation, doubt, all those things seem to just fade away.
				t Quietly you you walk up behind her, and...
				...
				t You push open the door to the king's villa, wifeF doesn't even stop jacking off as you walk in, but you can see her eyes widen in horror when she sees what... Or who, you brought for her.
				t There are no words between you two as you set the scavenger down on the bed besides your wife. This is finally enough to stop her jerking off. She might be hesitant to infect someone, but wifeF is positively drooling over your offering.
				t You decide to step out, but you leave the door open as you leave. You can hear wifeF's wanton moaning as you give her some time to get off.
				t As you step out of the building your hards start to shake and your gut churns. You've essentially doomed someone, thrown away their lives, but nothing matters anymore except escaping with wifeF.
				t Yet as you hear wifeF groan and a splorting sound letting you know she's cumming, you can't help but wonder... What's next? What if you do make it home? The way wifeF looked almost hungry when you reminded her of all her firends back on the mainland-
				t You're shocked out of deep thought as you hear a second moan from an unfamiliar voice from the villa behind you and you rush back to see wifeF and the scavenger, but your wife isn't the one on top.
				im wifeSacrifice.gif
				t Your wife flaccid from freshly cumming is gleefully taking the newly infected woman's cock, her floppy dick dangling between her legs.
				t The infected woman notices you and stos her thrusting, she pulls out of your wife's ass and sprints towards you.
				t wifeF meanwhile just whines in dissapointment, until she notices you as well. Rather than trying to help, her hands snake between her legs as her cock starts to harden again.
				t The infected woman tackles you, taking you down. Your head bumps against something and your vision goes dark, your last concious thought that <i>you</i> won't be waking up, and that the king's villa will soon be the home of three infected.
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "wifeOnahole": {//unfinished
			writeHTML(`
				im wifeOnahole1.gif
				im wifeOnahole2.gif
			`);
			break;
		}
		case "compoundCage": {
			writeHTML(`
				im compoundCage.gif
			`);
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "compoundCaught": {
			if (data.player.wormDisabled == false) {
				writeHTML(`
					im compoundCaught.gif
				`);
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "compoundHounds": {
			if (data.player.beastDisabled == false) {
				writeHTML(`
					im compoundHounds.gif
				`);
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		case "compoundFailure": {
			if (data.player.wormDisabled == false) {
				writeHTML(`
					im compoundFailure.gif
				`);
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeTransition('spreadIsland', 'GAME OVER', '#FF0000');
			}
			break;
		}
		//Scarlet Mansion
		case "scarletChastityTorture": {
			writeText("You pick up the device, it's like some kind of remote. The woman is still struggling against her bonds. There's also a small condom on her caged dick.");
			writeText("You turn the dial and the woman lets out a sudden breathy moan. A dim buzzing can be heard from her chastity cage, and she's gritting her teeth now.");
			writeText("You turn the dial up further and she stops struggling, now tightly clenching the bedsheet with her fingers as she thrusts her caged cock up and down helplessly.");
			writeText("You turn it up again and the light glows brighter. Her cock is desperately trying to grow erect but is prevented by the metal cage.");
			writeText("You can clearly hear a buzzing clearly, it's muffled and barely audible from her abdomen. There must be some kind of toy inside her ass, maybe a vibrator or a shocker stimulating her prostate.");
			writeText("You turn the dial again and she desperately gasps, her arms and legs twitching. Her caged cockhead starts leaking thick, heady cum. Even with the condom the smell of it is powerful and more than a little intoxicating.");
			writeBig("chastityTorture.gif");
			writeText("She's already cumming, but you can't help yourself but turn the dial father. Her moans turn into screams rising in pitch with the dial as you turn it all the way up. The chastity cage actually seems to grow smaller and tighter as the light glows brighter, and her small, piddly stream of cum turns into an arcing jet that sprays from the hole in the cage.");
			writeText("The buzzing is very audible now, whatever it's doing must be incredibly intense. The orgasm just keeps going on until you turn the dial back down.");
			writeText("Panting and exhausted, she goes slack on the bed. But you, being the morbidly curious sort you are, suddenly turn the dial right back up.");
			writeText("No buildup, she lets out a scream as another several spurts of cum are forced out of her body. The shots get smaller and weaker, but the stream isn't stopping. The device must have more control over her than it seems, if you turn it to a certain level it seems like she's just on the edge of cumming.");
			if (data.player.currentScene != "gallery") {
				writeText("No matter how many times you push her, she never seems to be satisfied. The smell is getting too powerful for you now. You have no choice but to set down the device and [leave the room|scarletWestWing] as soon as you can.");
			}
			break;
		}
		case "scarletHoundsTorture": {
			if (data.player.beastDisabled == false) {
			writeText("The woman is abnormally fixated on you even as one of the massive hounds comes up her and plants his paws on her back, mounting her.");
			writeText("You can see his erect cock dangling, fully erect, with the shock collar wrapped around his base.");
			writeText("He bucks up against the woman, his cock poking her dangling balls a few times before he lines himself up with her ass and slowly pushes in.");
			writeText("Finally the woman's attention is pulled away from you just as the dog roughly shoves his hips forward. The other dog lazily lies down in front of the woman, lifting his leg to expose his cock to her.");
			writeText("She doesn't seem to care that the cock in front of her is red, or that it has a pointed tip. Completely enamored at first sigh, she moves forward to start licking at the red length while the dog behind her starts to get into the flow of thrusting.");
			writeBig("dogTorture.gif");
			writeText("Quickly enough the one behind her is already ready to cum. His thrusts stop in the middle like he's blocked by something, and a squint shows that it's a growing bulge near the base of his dick. He's having trouble thrusting his knot inside until the woman bucks backwards in time with his thrusts. Soon after she lurches forwards to deepthroat the cock in her mouth.");
			writeText("Both creatures cumming, they stop their thrusting to dump their loads into the woman's holes. But just as things begin to slow down, a red light blinks on the cock-shock collars. The woman lets out a high-pitched muffled yelp, but the hounds seem more aggravated than pained. Despite still cumming, they both start to pick up the pace and begin thrusting faster.");
			writeText("The collars flash red again, causing the infected woman to spasm and let out a spurt of cum from her untouched dick. The shocks must be for her, and it seems like she's getting off on being zapped while being used as a bitch.");
			writeText("After having had enough, the hound behind the woman begins to tug and pull to try and free his knot from the woman's greedy asshole. He tugs and tugs, before finally the cock is freed with a big *POP* and a line of dog cum spurts from the woman's abused hole through the air.");
			writeText("Still leaking, drops of dog cum slide down her balls and down her erect, dangling shaft to mix with her cum before dripping down into the growing pool on the floor.");
			if (data.player.wsDisabled == false) {
				writeText("The hound using her mouth stands up, but before it decides it's done it lifts its leg. The dangling dog cock hands inches away from the woman's cum-coated face, before it sprays her with a blast of piss. The woman, barely conscious at this point, grasps the cock in her hand and moves the still-spraying tip to her mouth. Greedily, she opens up and begins sucking off the still-pissing dog until the stream weakens.");
			}
			writeText("As though trained, once the dogs are finished they leave the garage and head back to their kennels.");
			}
			else {
				writeText("This scene has been disabled by your fetish settings. If for some reason want to watch it, you can still view it in the gallery after changing your settings.");
			}
			if (data.player.currentScene != "gallery") {
				writeText("With the show over, you should head back to the [mansion foyer|scarletFoyer].");
			}
			break;
		}
		case "scarletSirenTorture": {
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it. <b>ERROR CODE:</b> Event Write Failure, Event "+n+" does not exist.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			document.getElementById('output').innerHTML += JSON.stringify(data);
			writeText("Inventory window:" + invHidden + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("start", "Go back to the title.");
		}
	}
	unlockScene(n);
	if (data.player.currentScene == "gallery") {
		writeTransition("gallery", "Back to the gallery");
	}
}