function writeScene(scene) {
	switch (data.player.image) {
		case "a":
			var lizChoice = "lizA";
		break;
		case "b":
			var lizChoice = "lizB";
		break;
		case "c":
			var lizChoice = "lizC";
		break;
		default:
			var lizChoice = "lizC";
	}
	writeHTML(`
		define liz = sp Liz; img scripts/gamefiles/profiles/`+lizChoice+`.jpg;
	`)
	switch(scene) {
		case "start": {
			document.getElementById('output').innerHTML += `
				<img src="scripts/gamefiles/logo.png" class = "bigPicture" style="border: none; width: 40vw;"><br>
				<p style ="margin: auto; text-align:center;">Username: <span style="background-color:white; color:black;"> ******** </span></p><br>
				<p style ="margin: auto; text-align:center;">Password:  <span style="background-color:white; color:black;"> ******** </span></p>
				<p class="choiceText" onclick="sceneTransition('mainMenu')" style="width: 40vw; border:none;">
					Login
				</p>
				`;
			break;
		}
		case "mainMenu": {
			writeText("<p class='centeredText'>Terminal open, access granted. Welcome technician, please submit your request.</p>");
			writeText("<p class='centeredText'>You have <b>5</b> saved documents in your <b>Introduction</b> folder.</p>");
			writeTransition("caseSelect", "View case files");
			writeTransition("prologue", "Open introduction folder");
			writeTransition("psaList", "Public/Private Service Announcements");
			writeText("...");
			writeTransition("funding", "Medicenter Funding", "#91eba9");
			//writeTransition("bugchasers", "Medicenter Technical Staff", "#91eba9");
			writeTransition("affiliates", "Affiliate & Medicenter Advertisement Log", "#91eba9");
			writeTransition("settings", "Console Settings", "#91eba9");
			writeTransition("creation", "Treatment Design Experiment", "#91eba9");
			//writeTransition("cheat", "Enter Cheat Codes", "#91eba9");
			writeText("...");
			writeTransition("start", "Log out", "#FF0000");
			break;
		}
		case "creation": {
			target = 9999;
			if (data.player.board == null) {
				data.player.board = 
				[
					0, 0, 0, 0,
					0, 0, 0, 0,
					0, 0, 0, 0,
					0, 0, 0, 0,
				]
			}
			generateCreationBoard();
			writeFunction("blocks()", "Test");
			writeFunction("clearCreation()", "Empty");
			writeFunction("outputCreation()", "Output to Array");
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "funding": {
			writeText("Bitch Medicenter funding is provided by private donors. Thanks to this support from good samaritans the medicenter can remain open to the general public, instead of blocking off much-needed medical care from the financially challenged.");
			writeText("From the bottoms of the hearts of every staffmember here at Bitch Medicenter, Thank you to Swallows999, Joseph, Robbie, Joshua Ingram, Liam M, that GUY, Elias Errati, Iron Diana, ryguy, 4MinuteWarning, Hi There, Carlos, 林家豪, Richard, dragoon48, Negativatron, Dustin Leichsenring, G, Ramsey Bisher, jack spencer, maxime, J_C_L, Dkells, Jinouga, Marco Wassmer, Taylor Trout, andres mejia, Colin E, Badaxe, Jesse Greene, Scal, ChronosEdge, Donovan Korpa, Brandon, Noh Bhodie, Billymays, Genxin, Johnny Mind, Ethan Brian, Sean Morehead, Brent Roberts, poyo, Greatsage56 ., sb2017, Wysdom, Me Notyou, Chris Rucker, john sparks, Darien Cordero, Ally Smith, Brandon Leary, scott, Elijah Hansen, Sergio Prichard, pablo perez, Sera, ggboomsky, Emily Pajak, RatKnight, Bradley Herbert, gabriel, SomebodyElse, dante schraeder, Peter H, 长平 鬣, Culton Niccum, thesingleguy, Kethis Immortalis, colt, Anton Schmidt, david thompson, Jayesonn leleaux, Bleed1ngthunder, Eric Hslew, Don, Vikteren, Dean, Kudon, theoron, AnotherAccount333, Lucas, Kaliden, Tyler Ross, greatred, FrostyTB, l, ranchy sanchy, Johnathan Thornburg, Limitless, Greg Torres, nathan, KVBismarc, Geoff Heimos, liam paterson, ChubbiestThread, Reverberations, ShadowFalls, William Parker, Magnus, XaiuX, l1monat, Kieron Kow, Slomberg, henry grobins, ddkre, SmolFish, I'm a Mitch, GirmusCz, Anthony Ewing, Daniel Vivette, Harry Brasch, Daekash, fireballcreations, Markus Hansen, Louis Hayes, Tanman, Erin Trippet, DarthMalak, Danny Nguyen, yami, Grim2011, Darrell Goodman, Z, John Lewis, Bonelessunknown, Phanes, Scumstango, Aegil, Wei, Dugelle, Simon Rencher, dhccpmc, Chaaaanon, Charles Morris, Nutburger, Whynot, mazterlith, Anthony Munso, john smith, Your Husbando, Carlos, Firestar99255, Verillia tristari, CaptainMontana, ItsAllOgreNow, Gwen Yurick, Nils Maier, Blaise Fenn, Angel, Ariados, Jane, Snaked, Debarre Sonny, Drashin, qwerty, murgatroid99, Skyrim mod lvr, Roy, Wild Bill, brandon for supporting the medicenter!");
			writeText("If you're interested in funding this clinic, head over to the medicenter's <a href='https://www.patreon.com/noodlejacuzzi'>Funding Page</a>. If you have any comments, criticisms, or suggestions for new medical procedures, direct them to the site manager's personal <a href='https://discord.gg/pDht5BZ'>Forum</a> where he'd love to hear what you think!");
			writeHTML(`
				t For technical support message the site administrator, but a number of volunteers have supported the medicenter in the past. These people are:
				t OrangeMaestro
				t JamesSmith
				t SlackerSavior
				t and BenhaminBlue101
				t Atomic Goblin
				t Totalatomic
				t Special thanks to them!
			`);
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "affiliates": {
			writeText("The following are a collection of other works completed by site manager NoodleJacuzzi. After extensive peer review and focus testing they will air on medicenter television as entertainment during waiting lounge period.");
			writeTransition("haa", "Human Alteration App Commercial");
			writeTransition("princess", "Princess Quest Commercial");
			writeTransition("rainyDayZ", "Rainy DayZ Commercial");
			writeTransition("anomaly", "Anomaly Vault Commercial");
			writeTransition("university", "Hentai University Commercial");
			writeTransition("medicenter", "Bitch Medicenter Marketing Campaign");
			writeText("...");
			writeText("Additionally, other corporations / individuals may air their commercials on medicenter television on request, or if the site manager deems them as 'that good shit'. If you own the material and dislike it's inclusion here, please contact the site manager for its removal.");
			writeTransition("dtc", "Dared to Change Commercial");
			writeTransition("ravager", "Ravager Commercial");
			writeTransition("mainMenu", "Go back");
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
			writeTransition("affiliates", "Close file");
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
			writeTransition("affiliates", "Close file");
			break;
		}
		case "rainyDayZ": {
			writeText("A young woman walks into an abandoned cafe, the windows all boarded up. She sets her worn baseball bat aside and begins reading the evacuation notice she found.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Report unusual behavior.");
			writeText("The screen flashes to a pack of hounds running through the forest.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Barricade your homes.");
			writeText("The screen cuts to a small-dicked woman singing naked in the rain, hypnotized-looking men stumbling after her.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Avoid all contact with infected individuals.");
			writeText("The screen flashes to a dozen naked women, all sporting dicks, chasing a red-hooded woman.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Wait for official instructions. Ha!");
			writeText("It cuts back to the young survivor crumpling up the notice.");
			writeSpeech("You", "scripts/gamefiles/commercials/rainy.jpg", "Wait my ass. This used to be a nice nei-Aaah!?");
			writeText("She's tackled from behind by a woman she hadn't noticed. Within moments she's pinned to the ground and the sounds of vigorous mouthfucking fill the room. The camera zooms out, out of the cafe and over the city blanketed by the rain.");
			writeBig("scripts/gamefiles/commercials/rainyDayZ.jpg");
			writeTransition("affiliates", "Close file");
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
			writeTransition("affiliates", "Close file");
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
			writeSpeech("You", "scripts/gamefiles/commercials/thomas.jpg", "Get this camera out of my face. <b>NOW.</b>");
			writeSpeech("Victoria", "scripts/gamefiles/commercials/victoria.jpg", "Y-yes master!");
			writeText("<i>The playback ends here.</i>");
			writeBig("scripts/gamefiles/commercials/hentaiUniversity.png");
			writeTransition("affiliates", "Close file");
			break;
		}
		case "medicenter": {
			writeBig("scripts/gamefiles/commercials/medicenter.jpg");
			writeTransition("affiliates", "Close file");
			break;
		}
		case "dtc": {
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
			writeSpeech("Manic \"Gimme the Gobbo\" Mike","scripts/gamefiles/commercials/other.jpg","I took my wife to D.T.C. for a relaxing anniversary, and she turned herself into a shortstack goblin girl with a vagina deeper than the plot of Neon Genesis Evangelion. Ten out of ten, would recommend.");
			writeText("Slowly nodding, the woman turns to look soulfully into the camera as the Founder of D.T.C. fumes indignantly.");
			writeSpeech("Narrator","scripts/gamefiles/commercials/narrator.jpg","The intense role-playing experience clearly knows no limits, with some players seeming convinced that it's real. If you're interested in an intensive role-playing experience, then D.T.C. may be right for you.");
			writeBig("scripts/gamefiles/commercials/dtc.png");
			writeText("D.T.C. - Games that Change Your Life! Learn more at Dare(d) to Change's <a href='https://tfgames.site/index.php?module=viewgame&id=2189'>IGDB entry at TFGames.</a><br>");
			writeText("<i><font size='-2'>Dare(d) to Change is a subsidiary of CryptoGreekCreates - we Crypt-Do what Noo-Don't.</font></i>");
			writeTransition("affiliates", "Close file");
			break;
		}
		case "ravager": {
			writeText("Your dungeon master has placed you in a dreadfully precarious position.");
			writeText("<i><font size='-1'>You're playing as the most phenomenal creature ever created...</font></i>");
			writeText("Their skin grows cold at the first glimpse at your enormous size.");
			writeText("<i><font size='-1'>You're the product of an incredible lineage...</font></i>");
			writeText("Survival depends on a quick, decisive move...");
			writeText("<i><font size='-1'>The choice is yours...</font></i>");
			writeText("Will you fight, or run?");
			writeText("<i><font size='-1'>Use your sharp teeth!</font></i>");
			writeBig("scripts/gamefiles/commercials/ravager.png");
			writeText("Draconic transformation is banned on medicenter property due to potential fire hazards.");
			writeText("<i><font size='-1'>But you can learn more about Ravager here: <a href = 'https://4minutewarning.itch.io/ravager'>https://4minutewarning.itch.io/ravager</a></font></i>");
			writeTransition("affiliates", "Close file");
			break;
		}
		case "settings": {
			if (checkFlag("portraitsDisabled") == false) {
				writeTransition("portraitsDisable", "Disable character thumbnail portraits in dialogue", "#FF0000");
			}
			else {
				writeTransition("portraitsEnable", "Enable character thumbnail portraits in dialogue", "#91eba9");
			}
			if (checkFlag("picturesDisabled") == false) {
				writeTransition("picturesDisable", "Disable all pictures/gifs in scenes", "#FF0000");
			}
			else {
				writeTransition("picturesEnable", "Enable pictures/gifs in scenes", "#91eba9");
			}
			if (checkFlag("textOnly") == false) {
				writeTransition("textOnlyEnable", "Enable text-only cases and PSAs", "#91eba9");
			}
			else {
				writeTransition("textOnlyDisable", "Disable text-only cases and PSAs", "#FF0000");
			}
			if (checkFlag("skip") == false) {
				writeTransition("skipEnable", "Auto-skip operations");
			}
			else {
				writeTransition("skipDisable", "Disable auto-skip");
			}
			writeTransition("lizSelection", "Change Liz's model");
			writeTransition("cheat", "Enter cheat codes");
			writeFunction("saveFile()", "Export save data to string");
			writeFunction("loadFile()", "Import save data");
			writeFunction("restartButton()", "Delete all save data", "#FF0000");
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "textOnlyEnable": {
			addFlag("textOnly");
			writeScene("settings");
			break;
		}
		case "textOnlyDisable": {
			removeFlag("textOnly");
			writeScene("settings");
			break;
		}
		case "skipEnable": {
			addFlag("skip");
			writeScene("settings");
			break;
		}
		case "skipDisable": {
			removeFlag("skip");
			writeScene("settings");
			break;
		}
		case "portraitsEnable": {
			removeFlag("portraitsDisabled");
			writeScene("settings");
			break;
		}
		case "portraitsDisable": {
			addFlag("portraitsDisabled");
			writeScene("settings");
			break;
		}
		case "picturesEnable": {
			removeFlag("picturesDisabled");
			writeScene("settings");
			break;
		}
		case "picturesDisable": {
			addFlag("picturesDisabled");
			writeScene("settings");
			break;
		}
		case "author": {
			writeText("Bitch Medicenter is an adult game created by NoodleJacuuzi. You can find and keep up with all of my work, including Human Alteration App, Princess Quest, Rainy DayZ, Hentai University, and Anomaly Vault at my <a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a>.");
			writeText("I especially recommend Human Alteration App's Dom Route and Anomaly Vault in particular, as they have a very similar tone and style to this game.");
			writeText("This game features heavy use of themes of hypnosis and body modification. While all content in this game can be considered optional due to its structure, these two themes make up a large amount of the game's content.");
			writeText("If there's a specific topic you'd like to avoid, you can read a potential treatment plan for each character detailing what will happen in the resulting scene. This game contains no underage or scatological content.");
			writeText("I'm funded by <a href='https://www.patreon.com/noodlejacuzzi'>Patreon</a>, thank you to Swallows999, Ben Dover, CaptainMontana, Joshua Ingram, MrManPerson, Robbie, Lasse B, andres mejia, Arthorias28, Badaxe, ChronosEdge, Colin E, Judavarius, Lunarghost, Marco Wassmer, Q Q, Scal, Taylor Trout, Adonnak, andy, Andy, Andy Amundy, Angel, Anthony Munso, Ariados, Arkhalis, Arthur radcliffe, Auckard, Blaise Fenn, Bobby Hamilton, bono, brandon, Carlos, Chaaaanon, Charles Morris, David Lange, Debarre Sonny, Devin, Dewr, Drashin, Ed, Guy68691, Gwen Yurick, iNoH8+, ItsAllOgreNow, Jacob Cannon, Jane, jdktjk205, Jesse Greene, joe, joe, joe mulhall, john smith, Joseph Gibbs, Joshua Melzark, Julia Ferro, Karan Raj Gupta, LaCrazy, lm Carma, Lucas Molski, Luke, marvin diaz, mazterlith, Mirza Hasan, Monkey, murgatroid99, Nha, Nils Maier, Nisi, Noah, Nutburger, Oliver Jones, Philipp, Prodigal211, qwerty, Roy, Ryan Linn, sage, Sebastian Eckel, Shawn, sky, Skyrim mod lvr, Slipokk, Snaked, Steam Screw, stratum, surgE, Taurus Travon Rashad Lemar Brackin, Theodrian, Ungy Bungy, valdis, Vincent Madaire-Cullen, Wayne culbert, Wild Bill, Will Osboldstone, William Richardson, Yongdian Guo, Your Husbando, Профессор Преображенский, and 凱 陳 for supporting my work!");
			writeText("If you have any comments, criticisms, or suggestions for content for this or future chapters, please let me know about them on my patreon, or in the Noodle Jacuzzi <a href='https://discord.gg/pDht5BZ'>Discord</a> where I'd love to hear what you think!.");
			writeText("As an extra note, no cheat codes, sorry. There's one you get for unlocking all the game's scenes, but you get that for unlocking all the scenes. If you have any cheat code ideas, please let me know!");
			writeText("Thanks for reading this section. I really do recommend checking out my other works, I think they're pretty good too and I try to focus on not wasting a player's time.");
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "unusedIdeas": {
			writeText("First and foremost, Rainy DayZ was originally a minigame for Human Alteration App, for that reason a lot of the code was kinda spaghetti, and the game was meant to be very short. Please let me know if any traces of that are still present (IE a scene is too short).");
			writeText("The Rainy DayZ scenario was based on the left 4 dead 2 map Hard Rain, I thought the rainy aesthetic and the element of backtracking was really cool, although it didn't add too much from a gameplay standpoint with this being a text-based game. Other left 4 dead maps would be cool to riff off as well, but I wouldn't want to tread the exact same ground with the zombies.");
			writeText("L4d also had really cool special infected, most of which I tried to make some kind of spin on. However ultimately hunters and witches felt too much like regular zombies, spitters boomers and jockies were just not appealing, and the rest were hard to find images that wouldn't completely break immersion. Resident evil was the biggest inspiration for special zombies.");
			writeText("Zombie ideas are hard to come by since they need to be represented by regular people in the images, so nothing like Nemesis from RE3. I tried asking fans of the game for ideas, but no dice. Thus, I'll need to focus on situations in the future. The game already has the 'survivor scavenging for supplies' and 'scientist during a containment breach' stories, but there are a lot more I think could work:");
			writeText("A husband and wife trying to escape a resort island during an outbreak. The wife is infected with a mild strain, so you need to help her while escaping the island. Based on Dead Island, this is the most likely pick for a scenario 3.");
			writeText("A reporter enters a mall during an outbreak to get footage of what's going on. Based on Dead Rising, the biggest draw here is a system where you either help survivors or let them get turned while you record them, super evil!");
			writeText("A man is stranded and seeks help in a seemingly abandoned town in Alaska, during a heavy snowstorm. This was actually the original idea for this game, which is why the 'unlock everything' cheat in v1 was cold mile. One cool idea is that halfway through enemy agents come into the town and try to hunt your down.");
			writeText("Something based on silent hill, probably a pretty straightforwards 'man goes to spoopy town' storyline, but it'll be tough to capture SH's unnerving aesthetic.");
			writeText("A hard-boiled agent investigates a spooky mansion. This one would be straight from Resident Evil 1, and would actually use drawn CGs from Eroquis's work instead of real porn gifs. I ended up scrapping it since it would deviate too far from the shemale zombie concept to straight up use resident evil's monsters, but it could probably end up being its own game.");
			writeText("Similar to the above, a game set in space based on the CG from Eroquis's <i>Dirty Prison Ship</i> game. This one would probably also need to be its own game, as aliens are even farther from the original concept.");
			writeText("Lemme know if you have any ideas to expand on the above, or just suggestions in general! Over the next few updates I hope to add more demos, check out these ones for a preview of what's to come:");
			writeTransition("scarletMansion", "Preview - Scarlet Mansion");
			writeTransition("onTheRecord", "Preview - On the Record");
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "cheat": {
			document.getElementById('wrapperBG').style.backgroundImage = "url(scripts/gamefiles/locations/streets.jpg)";document.getElementById('output').innerHTML += `
				<p class='centeredText'>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='diagnostic()'>Submit</p>
			`;
			writeTransition("settings", "Go back");
			break;
		}
		case "caseSelect": {
			writeText("Query accepted. The following case files are available:");
			writeCase("wife", "Adriana", "Subject is a housewife of middle age who suffers from a near nonexistent libido, which has caused a great deal of marital stress.");
			writeCase("girlfriend", "Kylie", "Subject is struggling to enjoy sexual relations without finding a healthy outlet for her dominant desires. While the subject's boyfriend is open to such play, she finds herself unable to engage properly.");
			writeCase("jock", "John", "Subject states that he finds it difficult to become aroused when bedding women, citing a heavy reliance on viagra and other drugs. He claims it is a biological issue, but several in-depth screenings show signs of heavily repressed masochistic and homosexual leanings.");
			writeCase("schoolboy", "Danny", "Subject suffers from a hyperactive bladder and seeks medical assistance overcoming self-esteem issues as a result.");
			writeCase("milf", "Lisa", "Subject's son is being bullied by schoolmates. Subject was not aware that this is a sexual satisfaction improvement services, and was under the impression, although she would not refer to her son as such, that this was a hospital for 'little bitches'.");
			writeCase("runner", "Marie", "Subject seeks a modification that will improve her daily fitness routine.");
			writeCase("streamer", "Mandy", "Subject seeks a quick, cheap modification that will help her overcome her social anxieties so she can perform as a streamer.");
			if (checkFlag("textOnly") == true) {
				writeCase("junkie", "Jen", "Subject seeks a relief from a botched body-modification job preventing her from ejaculating.");
				writeCase("otherkin", "Dakota", "Subject believes that she is, on all levels except physical, a horse.");
				writeCase("catgirl", "Daisy", "Subject is an experienced camgirl seeking a modification to mix up her content online.");
			}
			if (checkFlag("anomaly") == true) {
				writeCase("anomaly", "Valentina-26", "Subject is suffering from acute nymphomania, and is sexually assaulting security staff.");
			}
			if (checkFlag("rainy") == true) {
				writeCase("rainy", "Parasol Contract", "Subject is suffering from acute nymphomania, and is sexually assaulting security staff.");
			}
			if (checkFlag("alteration") == true) {
				writeCase("alteration", "???", "Subject is somehow unable to achieve orgasm via masturbation, and seeks modification to bypass whatever is the cause.");
			}
			//writeTransition("potentialCases", "Request additional case files");
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "potentialCases": {
			writeText("Treatment plans may utilize hypnosis-type treatment or body modification-type treatment. The following cases are available for future scheduling:");
			writeSpecial("NOTICE: Due to maintenance, direct request for additional case files is disabled. Please send case file requests directly to the email account of the site manager at noodlejacuzzi@gmail.com. Please include the desired case file in addition to suggested treatment plan.");
			writeSpecial("SECONDARY NOTICE: Many case files have been recorded in an incomplete state. Please ignore any missing pictures and names, these will be updated once the site manager updates the database. For the moment placeholder code names have been implemented in certain entries.");
			writeSpeech("jock", "", "Subject states that he finds it difficult to become aroused when bedding women, citing a heavy reliance on viagra and other drugs. He claims it is a biological issue, but several in-depth screenings show signs of heavily repressed masochistic and homosexual leanings.");
			writeSpeech("milf", "", "Subject's son is being bullied by schoolmates. Subject was not aware that this is a sexual satisfaction improvement services, and was under the impression, although she would not refer to her son as such, that this was a hospital for 'little bitches'.");
			writeSpeech("nagger", "", "Subject arrives nearly every day to whine about her love life troubles, demanding the clinic satisfy her desires without pay.");
			writeSpeech("girlfriend", "", "Subject is struggling to enjoy sexual relations without finding a healthy outlet for her dominant desires. While the subject's boyfriend is open to such play, she finds herself unable to engage properly.");
			writeSpeech("shemale", "", "Subject suffers from severe anxiety over her nature as trans, preventing her from forming meaningful connections over a perceived fear of others becoming aware of her body.");
			writeSpeech("camwhore", "", "Subject seeks an alternate career path based on her attractive body and seeks a referral or guidance on the matter. Subject leans towards becoming a 'camwhore' when pressed.");
			writeSpeech("schoolboy", "", "Subject suffers from a hyperactive bladder and seeks medical assistance overcoming self-esteem issues as a result.");
			writeSpeech("otherkin", "", "Subject believes that on a spiritual level she is a horse, the four legged mammal. She seeks medical assistance here as no other clinic will offer treatment, and is willing to sign away her rights as a human.");
			writeTransition("caseSelect", "Go back to case files");
			break;
		}
		case "wifeFile": {
			writeHTML(`
				img scripts/gamefiles/characters/wife.jpg
				t IDENTIFYING INFORMATION:<br>The subject is a 27-year old housewife without children, living with her husband. She was admitted voluntarily. She is currently in Waiting Room A.
				t CHIEF COMPLAINT:<br>Subject claims to suffer from a near nonexistent libido. This has caused a great amount of personal and marital stress. Methods such as traditional therapy and perscription drugs have proven ineffective.
			`);
			writeTransition("wifeInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Sensitivity Increase, Sluttification, Mind Break<br>A modification plan that would forcibly increase her sex drive. However, because of the disparity between physical and mental, a 'mind break' state could occur.
			`);
			writeTransition("wifeA", "Begin treatment plan A");
			writeHTML(`
				t TREATMENT PLAN B - MODIFICATION:<br>KEYWORDS: Cheating, Bimbofication, Gangbang<br>A modification plan that would encourage social behavior by increasing libido, reducing critical thinking skills, and impeding orgasm without a companion.
			`);
			writeTransition("wifeB", "Begin treatment plan B");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "wifeInterview": {
			writeHTML(`
				define wife = sp wife; img scripts/gamefiles/profiles/wife.jpg;
				t Playback begins, a beautiful woman in a sundress is sitting on the patient bed. She looks bored and more than a little annoyed.
				liz Could you state your name and problem for the record? 
				wife Adriana. My husband won't shut up about wanting sex. How many times do I need to repeat it? You only had me write it down fifty times. 
				liz Sorry, we just need to be thorough. So he's pressuring you for sex? 
				wife He wants me to be more 'active', that he can't live forever with a 'frigid' wife. 
				liz And what about you? What do you think? 
				wife I think it's bullshit, but I signed an even more bullshit prenup. If he wants my pussy tweaked so that I jump his bones more often, fine. 
				liz So it's just a matter of obligation? You don't enjoy lovemaking? 
				wife Are you judging me? 
				liz Of course not, ma'am. But sex is a pleasurable and fulfilling act. Maybe something is holding you back, aren't you curious about what your life could be like with a whole new world open to you? 
				wife Just... Just do whatever. I'm not interested in being lectured. If you think I'm missing out, feel free to prove it. 
				liz We'll do our best, ma'am.
			`);
			writeTransition("wifeFile", "Finish review");
			break;
		}
		case "wifeA": {
			blockGame = true;
			blocks();
			break;
		}
		case "wifeB": {
			blockGame = true;
			blocks();
			break;
		}
		case "girlfriendFile": {
			writeHTML(`
				img scripts/gamefiles/characters/girlfriend.jpg
				t IDENTIFYING INFORMATION:<br>The subject is a 23-year old college student in a committed relationship with a 24-year old man. She and her boyfriend were admitted voluntarily, and are both in Waiting Room B.
				t CHIEF COMPLAINT:<br>Subject claims that sex is unsatisfying and that she suffers from low libido. Brainwave scans show signs of extremely repressed dominant tendencies and unrealized gender dysphoria. Similar, albeit submissive tendencies, have been found in the subject's boyfriend, likely this is the cause of low sexual desire between the pair.
			`);
			writeTransition("girlfriendInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>Female-to-Shemale, Male-to-Sissy, Prostate growth<br>A modification plan that causes the subject to grow a sizable penis, and alter her boyfriend to be more physically receptive to the idea.
			`);
			writeTransition("girlfriendA", "Begin treatment plan A");
			writeHTML(`
				t TREATMENT PLAN B - HYPNOSIS:<br>Femdom, Submissive Male, Strap-on, Chastity<br>A hypnosis plan that would release the repressed desires of both the subject and her boyfriend. Several device recommendations would also be provided for a more fulfilling sexual relationship.
			`);
			writeTransition("girlfriendB", "Begin treatment plan B");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "girlfriendInterview": {
			writeHTML(`
				define girlfriend = sp Kylie; img scripts/gamefiles/profiles/girlfriend.jpg;
				define boyfriend = sp Michael; img scripts/gamefiles/profiles/boyfriend.jpg;
				t Playback begins, a man and a woman are sitting on the patient bed holding hands.
				liz Could you both state your names and reasons for coming?
				girlfriend Kylie, and this is my boyfriend-
				boyfriend Michael, who for the record thinks this is all unnecessary.
				liz There's no need for that, Michael. Try to keep an open mind and we'll all be better for it, okay?
				t Michael sulks, but remains silent.
				liz So, if I recall you're here because the two of you aren't as intimate as you used to be? Is that correct?
				girlfriend Yeah. I'm just... Just not feeling like everything's... I don't know how to describe it.
				liz Like your needs aren't being met, mentally?
				girlfriend Yeah, yeah.
				liz And Michael, do you feel the same?
				boyfriend What? No! Kylie's great, I-
				liz Michael, please. Try not to use language that places blame. This is an issue you're both facing together.
				boyfriend ... Fine. No, I'm fine in bed. If Kylie thinks we should change it up I'm fine with that.
				girlfriend Thank you honey.
				boyfriend I still think they're just trying to mess with your head. You only started feeling this way after that commercial with the dominatrix.
				liz I think I understand the situation. We have machines that compile records to deal with hard to express issues like this. If you'd like we can move on to the alteration step right away.
				boyfriend You'd better not fuck with-
				girlfriend Honey, please! They're professionals, let's just trust them. I love you, but... Look, what do we have to lose?
				boyfriend Our bodies! Our... Fine. If it means not losing you, I'm okay with... Whatever stuff. So long as we can undo it later.
				liz This isn't some gas station with a modification engine, our modifications can potentially be undone. Let's get the two of you prepped, alright?
			`);
			writeTransition("girlfriendFile", "Finish review");
			break;
		}
		case "girlfriendA": {
			blockGame = true;
			blocks();
			break;
		}
		case "girlfriendB": {
			blockGame = true;
			blocks();
			break;
		}
		case "jockFile": {
			writeHTML(`
				img scripts/gamefiles/characters/jock.jpg
				t IDENTIFYING INFORMATION:<br>The subject is a 34-year old former quarterback not currently in a relationship. Subject was admitted voluntarily and was compliant during interview.
				t CHIEF COMPLAINT:<br> Subject seeks modification that can allow for an active sex life despite his former erotic drug use. Specific substances used resulted in shrinking of genitalia to an irreversible degree, and subject is willing to enhance other or change aspects of his body for a safer modification plan.
			`);
			writeTransition("jockInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Feminization, Male-to-Femboi, Rimming<br>A modification plan that would alter the subject's body into the popular 'femboi' archetype.
			`);
			writeTransition("jockA", "Begin treatment plan A");
			writeHTML(`
				t TREATMENT PLAN B - MODIFICATION:<br>KEYWORDS: Genderswap, Male-to-Female, Solo F<br>A modification plan that would entirely switch the subject's gender to that of a woman on a pseudo-temporary basis.
			`);
			writeTransition("jockB", "Begin treatment plan B");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "jockInterview": {
			writeHTML(`
			define jock = sp John; img scripts/gamefiles/profiles/jock.jpg;
			t Playback begins, a large bald man is sitting on the patient bed. At more than six-feet tall he's muscular and fit even for his size. He could be military or play some serious contact sports.
			liz Alright, could you-
			jock Is that a camera? I dunno how I feel about being recorded ma'am.
			liz There's no need to worry. Only I and the technician overseeing your case will see this, and your identity will be taken off the record once patient satisfaction is achieved. So, your name and problem?
			jock Right... My name is John, and I've got a small dick.
			liz Mmhmm. And this causes you distress?
			jock Honestly I gotta be direct. I experimented a lot with some stuff when I was younger.
			liz Steroids?
			jock No, my body's natural. I'm talking about... You know... I had a girlfriend in college who was into... Shrinking.
			liz Ah. I understand.
			t There's a tooltip explaining the context here as the video pauses. A few years ago a pleasure drug made circulation. Only effective on people with dicks, it would lead to extreme pleasure but result in a decrease in penis length. Highly addictive, many people struggle with infertility today.
			liz We've had customers who have partaken in 'Mistress Touch' before. I need to warn you there's no easy fix. There's a reason it goes untreated for so long.
			jock I know. Believe me, I know. But I just want to find a way to be happy with who I am. I know plenty of people who are fine with having a smaller dick, I wanna be one of them.
			liz Ah, I see. Conditioning?
			jock I'm retiring from the game, I'm not worried about losing all this.
			t He gestures to the whole of his body.
			jock Whatever you think is best is what I'll go for. I wanna wake up different, somebody who can maintain a relationship.
			`);
			writeTransition("jockFile", "Finish review");
			break;
		}
		case "jockA": {
			blockGame = true;
			blocks();
			break;
		}
		case "jockB": {
			blockGame = true;
			blocks();
			break;
		}
		case "schoolboyFile": {
			writeHTML(`
				img scripts/gamefiles/characters/schoolboy.jpg
				t IDENTIFYING INFORMATION:<br>The subject is a student at a local university not currently in a relationship. Subject was admitted voluntarily and was compliant during interview, albeit nervously supplying some pieces of information.
				t CHIEF COMPLAINT:<br>Subject has a rare genetic trait resulting in a faster processing of water, resulting in greater urinary output. He seeks relief from how it inconveniences his daily life.
			`);
			writeTransition("schoolboyInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Watersports, Piss-Drinking, Pheromones<br>A modification plan that would encourage the subject (And others around him) to better accommodate and appreciate his condition.
			`);
			writeTransition("schoolboyB", "Begin treatment plan A");
			writeHTML(`
				t TREATMENT PLAN B - MODIFICATION:<br>KEYWORDS: Watersports, Sissification, Anal<br>A modification plan that would allow for greater bladder storage with the side effect of greatly increasing anal sensitivity.
			`);
			writeTransition("schoolboyA", "Begin treatment plan B");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "schoolboyInterview": {
			writeHTML(`
				define schoolboy = sp Danny; img scripts/gamefiles/profiles/schoolboy.jpg;
				t Playback begins, a young man is sitting nervously on the patient bed fidgeting every so often. He looks very young, hopefully Liz was thorough in checking his ID. 
				liz Could you say your name and your reason for coming here to the camera, please? 
				schoolboy My name is Danny. I... I don't know about this... 
				liz Please, don't be afraid. The only people who will see this are me and the technician working on your case. We deal with cases like this one all the time, there's nothing to be ashamed of. 
				schoolboy Alright. Okay. I, uh... 
				T The young man takes a deep breath. 
				schoolboy I pee a lot...
				liz Could you please repeat that at a normal volume? 
				schoolboy I p-pee a lot! Sorry, I... I pee a lot. It's a medical condition, my body processes water really quick. I need to drink more, and... 
				liz And this is causing you distress? 
				schoolboy Yeah. I need to ask to leave class a lot- at college! At college I need to leave class a lot to use the bathroom. Bus rides are awful, and I even still... I still have accidents sometimes. Mom says I should accept who I am, that I'm special in my own way, but-
				liz And she's correct. A condition like what you're describing is rare, but certainly not endangering in any way. I understand why you're here though. 
				schoolboy You do? 
				liz Of course. Now, that should be enough for the interview. For research purposes could we have a sample? Knowing your maximum output is important too, I assume the fidgeting is because...? 
				schoolboy Oh! Yes, I do need to... Maximum output? 
				liz Yes. We have a variety of sizes. 
				T Liz picks up and holds a pint-sized beaker. 
				schoolboy Actually, I think you'll need something a lot bigger than that. 
				T Playback ends here. There's a document attached with several notes. <br>Output: 0.7 gallons. <br>Stream stength: Strong<br>Taste: Slightly less bitter than average, otherwise normal. <br>No unusual chemicals or fluids found. 0.2 Gallons saved for further machine analysis and testing. 
			`);
			writeTransition("schoolboyFile", "Finish review");
			break;
		}
		case "schoolboyA": {
			blockGame = true;
			blocks();
			break;
		}
		case "schoolboyB": {
			blockGame = true;
			blocks();
			break;
		}
		case "milfFile": {
			writeHTML(`
				img scripts/gamefiles/characters/milf.jpg
				t IDENTIFYING INFORMATION:<br>The subject is a widowed 43 year old single mother who came on behalf of her son. She has agreed to bring her son in or make herself available for future modification.
				t CHIEF COMPLAINT:<br>Subject's son is experiencing bullying and is developing potential social and physical hangups as a result, and is only semi-cooperative with potential treatments.
			`);
			writeTransition("milfInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Male Domination, Incest, Masculinity Enhancement<br>A modification plan which would improve the subject's son's confidence and masculinity through rigorous virility enhancements.
			`);
			writeTransition("milfA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "milfInterview": {
			writeHTML(`
				define milf = sp Lisa; img scripts/gamefiles/profiles/milf.jpg;
				t Playback begins, a woman is sitting on the patient bed. She's gorgeous, the only things more attention grabbing than her thick hips is her incredible bust barely contained by her dress. She's obviously distressed, playback has begun mid-argument.
				milf - and so he keeps coming back with bruises, and even a black eye! I just don't know what to do!
				liz I see. I've just started recording so our technical staff can be kept up to date. Could you say your name and reason for coming? 
				milf Yes. My name is Lisa. I'm here because my son, James, is getting bullied, I actually thought that... Well... 
				liz Right, that this was a center for 'little bitches', I remember.
				milf Just so you know I'd never call my son that! I jus-
				liz I see. And how old is he?
				milf Eighteen, just last month. He doesn't eat or get out much, so he looks a lot younger. Honestly I just don't know what more I can do. I feel like I've failed, that he just isn't ready for the real world yet.
				liz Of course. This is actually a regular occurrence, we even have a pediatric ward with specialists for all ages. But to focus here there are a couple of different treatment plans we could follow.
				milf Anything would work, I've got a lot saved up. My husband's life insurance policy and my nest egg could be enough for an early retirement, but I'll do anything to help my baby boy.
				liz Right. So some plans would involve alteration procedures to your son. Body alteration could improve his physical condition, mental alteration could allow him to take control of the situation. But there's also another route we could take, altering you.
				milf Excuse me? How would that help?
				liz Often times mental changes can be extremely useful, there could be solutions here you just aren't seeing. A boost to charisma or critical thinking could help you push your child to be more independent or mediate their relationship with the abusers.
				milf So... I'd just talk it out? Convince the bullies to leave him alone?
				liz Right, or we alter him to successfully navigate the situation himself. If you don't have a particular plan in mind, our technical staff excel in weighing factors like these to come to the optimal solution. I guarantee that if you trust the technician working your case, your problem will be solved.
				milf ... Okay. I don't know what to do, but I'll trust your judgement on this. Do whatever will turn out best for my son, please. He's in the car, he said he wasn't interested in having a doctor 'observe' him. 
			`);
			writeTransition("milfFile", "Finish review");
			break;
		}
		case "milfA": {
			blockGame = true;
			blocks();
			break;
		}
		case "milfB": {
			blockGame = true;
			blocks();
			break;
		}
		case "runnerFile": {
			writeHTML(`
				img scripts/gamefiles/characters/runner.jpg
				t IDENTIFYING INFORMATION:<br>The subject is a 22-year old woman not currently in a relationship. She was referred here by a friend and was admitted voluntarily. The subject prefers hypnotic treatment to body modification if possible.
				t CHIEF COMPLAINT:<br>The subject requests minor modifications meant to improve her ongoing fitness routine, desiring it to become less tedious and more rewarding.
			`);
			writeTransition("runnerInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Fitness, Lesbian, Lezdom<br>A modification plan that would improve and lengthen the state of 'runner's high', specially modified to encourage social behavior after a workout.
			`);
			writeTransition("runnerA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "runnerInterview": {
			writeHTML(`
				define runner = sp Marie; img scripts/gamefiles/profiles/runner.jpg;
				t Playback begins, a very fit young woman in a sports bra and shorts is sitting on the patient bed.
				liz Could you repeat that for the camera real quick? It wasn't recording.
				runner I just wanna be fit, y'know? And I guess if you could touch up a few old scars while you're at it... I wouldn't mind looking good for a potential exercise buddy.
				t Marie shyly plays with her hair, Liz just smiles in response.
				liz That's absolutely no problem. a simple enhancement job should fix those up and give you a healthy burst of energy. As for pay it shouldn't come out to too much. What's your insurance like? Ah, that's all the relevant details for the technician. Let me just turn the camera off.
			`);
			writeTransition("runnerFile", "Finish review");
			break;
		}
		case "runnerA": {
			blockGame = true;
			blocks();
			break;
		}
		case "streamerFile": {
			writeHTML(`
				img scripts/gamefiles/characters/streamer.jpg
				t IDENTIFYING INFORMATION:<br>Subject is a 27-year old woman suffering from social anxiety not in a current relationship.
				t CHIEF COMPLAINT:<br>Subject's social anxiety is inhibiting her ability to perform as an online streamer. Given her current lack of a job a quicker modification is preferable to a lengthier therapy treatment.
			`);
			writeTransition("streamerInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - HYPNOSIS:<br>KEYWORDS: Exhibitionism, Squirting, Solo F<br>A hypnosis plan that should bypass her normal anxiety response to being seen, essentially replacing stagefright with a phenomenon more enjoyable to watch.
			`);
			writeTransition("streamerA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "streamerInterview": {
			writeHTML(`
				define streamer = sp Mandy; img scripts/gamefiles/profiles/streamer.jpg;
				liz -am please, the camera has a maximum length. If you go on for too long the recording will start erasing earlier segments. Now please, again, but more concisely.
				t The interview is already in motion, a frustrated Liz crumples up an interview log and throws it aside to start fresh. A young woman is using a pair of chairs like a therapist's couch.
				streamer But-<br>Okay... One more time. I'm awkward, I'm sweaty, and I'm poor. I wanna be hot and charismatic enough to do shit like sell feet pics and not worry about my rent.
				liz Hmm... The foot fetish market is starting to get quite competitive. Do you still need to be able to walk?
				streamer Yes! Of course I-<br>...Sorry, lost my cool there. It was just an example.
				liz Right. And you weren't exaggerating about your low budget. You can't afford a body modification, just a hypnosis treatment.<br>Luckily that should be all you need.
				streamer Seriously?
				liz Yes. An attitude adjustment is all an enterprising young woman needs these days if she wants to work on camera.
				streamer Like as a normal streamer right? I play games on camera and people throw money at me?
				liz You will be on camera, and people will throw money at you. Those two are correct.
				streamer What?
				liz What.
				streamer ...Whatever.<br>Honestly I think it comes from my father. He'd always-
				liz Again, not a therapist. That'll be all, thank you. I'll arrange for your treatment and call you in when we're ready.
			`);
			writeTransition("streamerFile", "Finish review");
			break;
		}
		case "streamerA": {
			blockGame = true;
			blocks();
			break;
		}
		case "anomalyFile": {
			writeHTML(`
				img scripts/gamefiles/characters/agent.jpg
				t IDENTIFYING INFORMATION:<br>Subject was admitted in a state of extreme nymphomania, unresponsive to others except to sexually assault on-site security staff. She was brought in by a secondary woman calling herself Ms. Jensen. Traces of foreign particles and bacteria not registered in any database were found on their clothes.
				t CHIEF COMPLAINT:<br>Subject's extreme nymphomania is progressing, immediate modification is required to restore mental function.
			`);
			writeTransition("anomalyInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Anomaly, Vault<br>A modification plan designed specifically to combat extreme nymphomania.
			`);
			writeTransition("anomalyA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "anomalyInterview": {
			writeHTML(`
				define boss = sp Mrs. Jensen; img scripts/gamefiles/profiles/boss.jpg;
				liz Okay, wait. Who are you exactly, and why does the patient you brought in have a "-26" in her name?
				boss Agent Valentina-26's situation is... Complicated. A testing mishap with some earrings.
				liz Uh-huh. And that's why she's doing... That... To our security guards?
				im images/anomaly/interview.gif
				boss Look, can you fix her? Our in-house methods are out at the moment, and Valentina-33 isn't cleared for fieldwork yet.
				liz Ma'am, this is extremely bizzare. I'm afraid I-
				t Liz is interrupted as the woman pulls an old gold coin from her pocket.
				boss Fix her, and I'll let you eat me out.
				liz I... Well, this is unorthodox. I don't take bribes... But if you're a paying customer of the clinic...<br>Will you... Pull my hair while I lick your pussy?
			`);
			writeTransition("anomalyFile", "Finish review");
			break;
		}
		case "anomalyA": {
			blockGame = true;
			blocks();
			break;
		}
		case "rainyFile": {
			writeHTML(`
				img scripts/gamefiles/characters/parasol.jpg
				t IDENTIFYING INFORMATION:<br>Subject is a representative of Parasol Medical Corporation, and brought with them multiple uncooperative patients along with appropriate paperwork to begin study of a potential new medical trial.
				t CHIEF COMPLAINT:<br>Subject seeks to create a self-replicating virus capable of altering the human body in a multitude of ways, specifically the replacement of female genitalia with sizeable male organs, aphrodisiac bodily fluids, and lack of intellect or restraint.
			`);
			writeTransition("rainyInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Female-to-shemale, Dick growth, Rainy, DayZ<br>A modification plan that meets the client's criteria by altering the body to produce the desired self-propagating effects.
			`);
			writeTransition("rainyA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "rainyInterview": {
			writeHTML(`
				define unknown = sp Parasol Representative; img scripts/gamefiles/profiles/parasol.jpg;
				liz I'm sorry sir, if we can't record this then the deal is off.
				unknown Fine. But if this leaks...
				liz There's no chance of that. So this is some sort of government contract you said?
				unknown Similar. We're contracting sites like yours to develop a certain kind of...
				liz Virus, it looks like. I'd certainly turn you down if you were an individual client, this looks like a fetish taken simply too far. If this were to get out...<br>Well, since you're with a reputable pharmaceutical company I'm sure it will be fine.
				unknown Can you do it? It's holding back progress, we can't crack the genetic formula to make all the elements work together.
				liz Well, it'll surely be tough. A self-propagating body modification virus...<br>I have nothing but faith in our technician though, and our equipment is top of the line. <br>Working with an esteemed group like Parasol Corporation, this will surely shine some good PR on the medical center!
				unknown Oh, your efforts will be front page news alright.
			`);
			writeTransition("rainyFile", "Finish review");
			break;
		}
		case "rainyA": {
			blockGame = true;
			blocks();
			break;
		}
		case "alterationFile": {
			writeHTML(`
				img scripts/gamefiles/characters/sub.jpg
				t IDENTIFYING INFORMATION:<br>Subject is a male of an unknown age and declined many personal questions, but is mostly compliant with instruction. 
				t CHIEF COMPLAINT:<br>Subject is unable to masturbate and desires hypnotic conditioning or bodily modification to undo whatever psychological effect is preventing him from getting off.
			`);
			writeTransition("alterationInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS:<br>A modification plan 
			`);
			writeTransition("alterationA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "alterationInterview": {
			writeHTML(`
				define sub = sp ???; img scripts/gamefiles/profiles/sub.jpg;
				liz Ah, I forgot to start the recording. There we go.<br>Subject claims a recent modification has left him unable to properly cum or stimulate himself, and seeks assistance from the medical center.<br>I notice your listed hometown actually has a local clinic. We'll offer the same services as there, so why come all the way out here?
				sub Well... I'd just rather be a little farther away from home for personal reasons. Plus I've been to a few places, but their results were...
				liz Hmm. Well we'll do our best. Now I'm seeing you're quite pent up. Is this voluntary?
				sub No, not even slightly.
				liz Hmm. A rapid buildup suggests you're exposed to stimulating visuals regularly. An almost purposeful automatic rejection to being able to jerk off...<br>Do you live with someone highly dominant?
				sub You could say that...<br>Money isn't an issue, I've made a decent amount at a cafe I help out at. See, you can disable images over and over to generate-
				liz Good to know. <br>Well, in any case standard treatment would be to try and undo the mental and physical effects. The operation should be straightforwards. Go ahead and relax and we'll start preparations.
			`);
			writeTransition("alterationFile", "Finish review");
			break;
		}
		case "alterationA": {
			blockGame = true;
			blocks();
			break;
		}
		case "catgirlFile": {
			writeHTML(`
				t IDENTIFYING INFORMATION:<br>Subject is a popular online streamer notable for her love of body modifications, she sports two fully-function cat-ears.
				t CHIEF COMPLAINT:<br>Subject requests additional modifications of the medicenter's choice to 'spice up' her streaming career. Her physiology is compatible with extreme modifications.
			`);
			writeTransition("catgirlInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Shortstack, All-the-way-through, Anal, Large insertion<br>A modification plan aiming for the popular 'shortstack' fad, wherein a girl is both short and stacked.
			`);
			writeTransition("catgirlA", "Begin treatment plan A");
			writeHTML(`
				t TREATMENT PLAN B - MODIFICATION:<br>KEYWORDS: Aural Sex, Ear-fuck<br>A modification plan that would allow the subject's ears to be used as sexual organs..
			`);
			writeTransition("catgirlB", "Begin treatment plan B");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "catgirlInterview": {
			writeHTML(`
				define catgirl = sp Daisy; img scripts/gamefiles/profiles/catgirl.jpg;
				t Playback begins, a grinning young woman is sitting on the bed. The first thing that grabs attention to her is her outfit. She's wearing a loose shirt cut just above the midriff, and only a thin strip of cloth hanging from the front of the shirt covers her privates. Her legs are bare, and the sides of her hips are visible showing no signs of any kind of underwear.
				t The second thing about her are her ears, large, poofy, and catlike in nature. Her grin is also notably sharper-looking than a normal person's.
				s liz; Okay, could you state your name and problem for the record?
				s catgirl; No problems here doc, I've never had a bodymod go south. My name's catgirlF, and I'm just trying tk spice things up for my newtoob channel. Hey, could I get a copy of this recording later?
				s liz; I don't see why not. May I...?
				t Liz reaches forwards towards catgirlF's head. 
				s catgirl; Of course! 
				t catgirlF leans her head down, allowing Liz to inspect her ears. Even the lightest touch is enough to get catgirlF's right foot tapping on the floor.
				s catgirl; Aww yeah, that's the spot... 
				t Liz maintains a professional air as she meticulously examines catgirlF, even as it's clear her patient could probably get off on the treatment.
				s liz; The ears are astounding, truly masterwork. 
				t Liz Softly blows on the thin fur, causing catgirlF to let out a squeak. 
				s liz; Alright. Well catgirlF, it's obvious you're very compatible with a wide range of bodymods. We could probably rebuild your entire body from the ground up and there'd be very little chance for rejection. So, what kind of 'spice' did you have in mind?
				s catgirl; You sure? I don't mind you taking a close look~<br>Well whatever. I don't really mind, honestly. So long as I'm still cute in the end. I kinda wanna start pulling more eyes to my channel though. 
				s liz; What kind of content do you cover? 
				s catgirl; The usual vlog stuff. Talking about my day, storytime stuff, sex toy demonstrations and reviews, I did a bunch of vids on fetish reviews but that fell apart when I got to cuck stuff. People are seriously divided on that stuff. 
				s liz; Well, we did have a civil war over it.<br>In any case maybe something trending then? We've got a premade shortstack archetype that's very popular with girls in your demographic, and 'unusual orifice penetration' has been on the rise on Spermhub. 
				S catgirl; You keep up with that kind of stuff? 
				s liz; Being educated on current trends is essential. Being a porn connoisseur is part of a bodymod physician's job description. Plus, the education pays off in the bedroom. 
				t To prove her point Liz reaches out to begin fondling catgirlF's ears again. This time instead of a careful  examination it's a passionate groping, gently stroking and lightly tugging the fuzzy ears. 
				s catgirl; O-ooh~<br>Whatever you think is best then, miss~
				s liz; By the way, the seat's cover is disposable so there's no need to worry about getting it wet. 
			`);
			writeTransition("catgirlFile", "Finish review");
			break;
		}
		case "catgirlA": {
			blockGame = true;
			blocks();
			break;
		}
		case "catgirlB": {
			blockGame = true;
			blocks();
			break;
		}
		case "junkieFile": {
			writeHTML(`
				t IDENTIFYING INFORMATION:<br>Subject is a young woman with a penis, and was admitted voluntarily. Her medical history shows a recent visit to a body modification clinic called "BodyModz".
				t CHIEF COMPLAINT:<br>Subject's recent body modification treatment has resulted in an inability to ejaculate, causing a slow buildup of semen to accumulate. Subject seeks relief from this accumulation.
			`);
			writeTransition("junkieInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Horsecock, Dickgirl<br>A modification plan that would replace subject's genitalia completely with stored stallion penis.
			`);
			writeTransition("junkieA", "Begin treatment plan A");
			writeHTML(`
				t TREATMENT PLAN B - MODIFICATION:<br>KEYWORDS: Prostate Enhancement, Large Insertions, Anal, Dickgirl<br>A modification plan that would allow for prostate stimulation as a means of sperm evacuation.
			`);
			writeTransition("junkieB", "Begin treatment plan B");
			writeHTML(`
				t TREATMENT PLAN C - MODIFICATION:<br>KEYWORDS: CBT, Large Balls, Masochism, Dickgirl<br>A modification plan that would allow for testicular stimulation as a means of sperm evacuation.
			`);
			writeTransition("junkieC", "Begin treatment plan C");
			writeHTML(`
				t TREATMENT PLAN D - MODIFICATION:<br>KEYWORDS: Spontaneous Orgasm, Addictive Cum<br>A modification plan that would allow for automatic sperm ejaculation without stimulation of genitals.
			`);
			writeTransition("junkieD", "Begin treatment plan D");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "junkieInterview": {
			writeHTML(`
				define junkie = sp Jen; img scripts/gamefiles/profiles/junkie.jpg;
				t Playback begins, a brunette with a ponytail is sitting on a bed. She's got a fuzzy brown sweater and a dark red skirt on. Notably, it looks like she's trying to smuggle apples in her top, and like she's trying to smuggle melons in her skirt. She looks nervous as Liz, the medicenter's physician takes a seat across from her.
				liz So, could you clearly state your name and your problem for the video here?
				t The brunette is distracted for a moment. Liz is wearing a modern physician's uniform; she's showing off a lot of cleavage and the skirt barely makes it down an inch of her thighs. It's not too crazy to think only a decade ago this style was called 'skimpy porno nurse', but now it's just professional fashion.
				junkie Yes. I'm Jennifer Holmes, everybody calls me Jen, and I've been a masturbation addict for about four years now. Lately it'll take me an hour or more to finish cumming, sometimes multiple times a day. I'll just keep going afterwards too.
				liz And my records show you tried to correct this at... Um...
				junkie General modshop. It's a local place.
				liz Eugh. Ah, sorry. And so...?
				junkie Well, it worked at first. The sensations from my cock were a lot less powerful, so I didn't want to masturbate as much. About a week passed and some woman next door was doing her public squirt show on her balcony, so I thought I'd jerk off, and...
				liz And...?
				junkie Well, it's a bit... Hard to describe...
				liz Feel free to demonstrate for the camera.
				junkie What. But I-
				t The interview recording fast-forwards, showing a blurred conversation until Jen agrees to disrobe and the video resumes.
				junkie A-are you sure? Thus is a bit embarrassing... 
				t Jen is naked in the center of the room, her six-inch dick is standing erect, but much more noticeably her balls are hanging down to her knees, nearly the size of watermelons.
				liz Absolutely. Did you need some visual aid?
				t Liz leans forwards to emphasize her cleavage, but it seems like Jen was already barely holding back from jerking off on the spot. She grabs her shaft and starts jerking off, showing off her years of crankworking experience.
				liz Oh my, quite quickly~
				t Liz sighs appreciatively as Jen thrusts into her palm, her massive nuts swinging back and forth.
				junkie I-I've been o-oooh-on edge for weeks now, it's getting harder to... To hold back. Ghhhh~! Cumming~!
				t Jen thrusts into her hand, slamming down and back up her balls visibly shift and look like they jerk up for a second, before they seem to almost plump up, and Jen finishes without actually releasing any sperm.
				junkie Hah... And that's... That's the issue. Every time I finish a little bit faster, and my balls keep getting bigger, but I can't actually cum. I can't have children like this, I can barely go outsi-
				t Jen, distressed, is nearly on the verge of tears until Liz reaches out and embraces Jen in a hug.
				t Jen holds back a sob before she gets more into the hug a bit more that would be considered professional. She lowers her head into Liz's cleavage, desperately thrusting at the air for a moment causing her balls to swing back and forth. She says something to muffled for you to hear, before her balls shudder and plump up again.
				Once she's finished 'cumming' Jen pushes herself away.
				junkie Hah... Hah... Even that was enough. I don't think I'll have long... I need your help, please. I'll pay you back, I pro-
				liz There's no need to worry. We have a wonderful technician on our side who can help you out. Since this is an emergency, I won't be able to explain our processes in detail.
				junkie That's fine! Please, just help me!
			`);
			writeTransition("junkieFile", "Finish review");
			break;
		}
		case "junkieA": {
			blockGame = true;
			blocks();
			break;
		}
		case "junkieB": {
			blockGame = true;
			blocks();
			break;
		}
		case "junkieC": {
			blockGame = true;
			blocks();
			break;
		}
		case "junkieD": {
			blockGame = true;
			blocks();
			break;
		}
		case "otherkinFile": {
			writeHTML(`
				t IDENTIFYING INFORMATION:<br>Subject is a young woman unwilling to give her medically accurate age, she believes that through reincarnation or some other means, she is a horse's soul trapped in a human body.
				t CHIEF COMPLAINT:<br>The idea that the subject's soul is bound to a human form has no scientific basis, but provided she is willing to pay and sign any amount of paperwork means she could be of value to the clinic.
			`);
			writeTransition("otherkinInterview", "Review interview file");
			writeHTML(`
				t TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS:Female-to-male-centaur, Horsecock, HuStallion?<br>
			`);
			writeTransition("otherkinA", "Begin treatment plan A");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "otherkinInterview": {
			writeHTML(`
				define otherkin = sp Dakota; img scripts/gamefiles/profiles/otherkin.jpg;
				t The recording begins with a frustrated lizF fixing the camera.
				liz Please, control yourself from now on. Hopefully the camera wasn't damaged.
				otherkin Sorry, I guess I can't control my tail sometimes!
				t lizF stops, and takes a long, slow breath.
				liz You do not have a tail, ma'am. This is not a convention, I need you to be medically accurate and truthful, otherwise any treatment conducted could be unsafe for your health.
				otherkin S-sorry... But I really do! You just can't see it.<br>I feel it, and I just know that deep down in my soul, and on every spiritual level I am a majestic mare, destined to gallop across the plains!
				liz Mhmm. And have you spoken with a psychological physician about this? Wouldn't it be cheaper to deal with his via-
				otherkin You don't understand! No clinic will help me the way I need to be helped! Money is not an object!
				liz Yes, but there are legal limits to what-
				otherkin I don't care about those! I'll sign away whatever rights I need to, I'll swear it on camera and in front of lawyer if I need to!
				t lizF's frustrated expression vanishes. She pushes a button on the side of a small cabinet and a whirring is emitted.
				otherkin What's that sound?
				liz The rumble of scientific progress. Now, how soon can you sign, and what kind of horse breed would you say you identify as?
			`);
			writeTransition("otherkinFile", "Finish review");
			break;
		}
		case "otherkinA": {
			blockGame = true;
			blocks();
			break;
		}
		case "psaList": {
			writeText("The following are a collection of educational public service announcements .");
			writeTransition("welcome", `"Welcome to the Medicenter"`);
			writeTransition("dust", `"Bimbo Dust"`);
			if (checkFlag("sissy") == true) {
				writeTransition("bubble", `"Bubble and Dee"`);
			}
			if (checkFlag("woman") == true) {
				writeTransition("hypermeth", `"The Hypermeth Epidemic"`);
			}
			if (checkFlag("university") == true) {
				writeTransition("universityPSA", `"Hypnosis in Action"`);
			}
			if (checkFlag("princess") == true) {
				writeTransition("princessPSA", `"A Physician Plays a Japanese Adult Game"`);
			}
			if (checkFlag("textOnly") == true) {
				writeTransition("living", `"What is a living dildo?"`);
			}
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "welcome": {
			writeHTML(`
				define doctor = sp Doctor; img scripts/gamefiles/none.png;
				t Playback begins, showing a much younger-looking Liz standing next to a doctor. The video is quite outdated.
				doctor Hiya, and welcome to the Fine Lady Medical Institute! If you're watching this, welcome to the team! Say hi!
				t Liz walks forwards, holding a wobbling tray. There's an abrupt cut and Liz is holding a new tray, her white dress looks stained. 
				liz H-hello! Welcome!
				doctor Whether you're a physician, a technician, or even just an intern like Liz here, you're a part of the family. Let me show you around!
				t The camera cuts to the doctor and Liz standing in front of a large machine.
				doctor This here is our bread and butter, the modification machine! Careful not to fall, we're standing on the cutting-edge of science!
				liz Wow doctor, I'm so impressed I want to look more closely. With my hands!
				doctor No touching the equipment!
				liz G-gee, thanks for the warning doc! By directly touching the machine I could've been shocked, poked, or otherwise injured in a way not covered by modern workman comp laws!<br>I'll be sure to always follow safety regulations!
				t The camera cuts to Liz holding a scalpel and a bag filled with a blue dust.
				liz Is this really necessary? This seems dangerous...
				doctor Then do it properly in one take, intern. Alright, rolling in three, two...<br>Here's Liz hard at work, but accidents can happen to everyone!
				liz G-gee, I sure hope I don't accidently stab this bag of drugs and get it-<br>Fuck! Ow! Shitshitshit some got in me-
				doctor Always remember that security is just a call away! 
				t The camera cuts to the doctor standing over a naked, writhing Liz who's brain is quite frazzled.
				im images/psas/welcome.gif
				doctor We deal with sensitive substances-
				liz Please...! Fuck my throat, spank my ass! I need to cum!
				doctor We deal with sensitive substances-<br>Stop thrashing around! You're ruining the take!
				liz Fuck my ass dry, I don't care if it hurts! PLEASE!
				t The doctor sighs and rubs his temples.
				doctor God damn shithole'll be under in a week. God I can't wait until I can quit.<br>Wait, were we rolling?
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "living": {
			writeHTML(`
				t The video begins with a shot of just Liz sitting in a stool under a spotlight, cradling an extremely lifelike dildo in her arms.
				t Hello, and welcome back to Talking Today. Talking today is Liz, a physician from Bitch Medicenter, here to educate us about living sex toys.
				liz Thanks for having me! 
				t This procedure was once highly illegal and only carried out in black-market 'chop-shops', but luckily a safer and reversible version was found. Now the procedure is quite popular as a multi-year contract position. Sell your body to someone else while you live purely as a sex toy for a few years. 
				liz Yep! And you can volunteer for it too. Normally your brain limits incoming stimulation, or normalizes it so see a decline in the fun chemicals if you overload on something. As you can see here, Jerry doesn't have a brain right now!<br>Well, he does, you just can't see it. My point is that basically, every fiber of your being is all right here.<br>Not only that, but your now mindless body can also be rented out for menial or security work, giving you a double income!
				t With article 15 of the Comfort Act passing, you can now live as a private sex object as well! Images and videos of proper human dildo and onahole often trend online so you can see what you're getting into. 
		liz Sign up today! We now offer nonhuman genitalia options and fun colors!
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "bubble": {
			writeHTML(`
				t Bubble & Dee has been the #1 erotic candy shop in the nation for four years today, starting as a brand in a small city selling only to exclusive customers. Now, we're a mega brand but we're still in touch with the men and women walking the streets today. We thought we'd celebrate with something special. Now introducing the latest product in the Bubble & Dee family: Gummy Dicks classic! 
				im images/psas/candy1.gif
				t Jeremy here is enjoying the result of our latest batch. How's it feel?<br>Well, if he weren't screaming at the top of his lungs bouncing on that dildo, I'm sure he'd say "Taste's great"! Just like the modern citizen who gives our candy a taste!
				im images/psas/candy2.gif
				t Whoa, likes like Oliver here got a bite of the sour variation, perfect for pranks! Just one bite can shatter a masculinity in half, and it looks like he gobbled down a whole handful! Uh-oh! Keep cumming Oli, you'll be a man again soon!
				im images/psas/candy3.gif
				t Ronnie here is participating in our latest hashtag challenge, send a message on twatter with the hashtag #gummydickclassic for a chance to win a lifetime supply! You've seen what one bite can do!
				liz Bitch Medicenter is a proud partner of Bubble & Dee Corporations, come on downtown for a sample today!
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "dust": {
			writeHTML(`
				t Playback begins in a skatepark, Liz rolls onscreen wearing all the appropriate safety gear.
				t And she promptly eats pavement as the board rolls out from beneath her. Playback rewinds as the take is reshot, and she rolls onscreen properly.
				liz Hey fellow young adults, wanna do some drugs?<br>If you said no, congrats, you passed the test!
				t Liz holds up a small bag of white powder.
				liz This right here is cocaine, and-<br>FUCK! Cut! Redo!
				t Another quick rewind.
				liz This right here is Bimbo Dust and it's seriously whack! Your parents may have told you about it. They may be serious lamoid fuddy-duddies, but they care about you! Y'know, I have a friend named Mary, let's go check up on her.
				im images/psas/dust1.gif
				liz Oh noooo! Mary took a hit of bimbo dust! She used to want to be a lawyer, but now she can't even spell the word law! Hold on, let's go check on my friend Margaret!
				im images/psas/dust2.gif
				liz Double un-radical! My two friends have both made the mistake of engaging in drug-use! What a perfect representation of how two-thirds of young adult women have experimented with dangerous drugs by the age of 27!<br>Listen girls, don't let anybody pressure you. Your brain is a beautiful thing, don't throw it away to get your rocks-off!
				t The camera returns to Liz, now wearing an askew baseball cap with the word "NO" written on it.
				liz Call the number below to show you won't be D.A.R.E.D. to do drugs, and you can get this Say No To Drugs cap! Wear it like me and any drug dealer who comes up to you at a 90 degree angle will know you're no customer of his!
				t THIS PSA IS PAID FOR BY YOUR COMMUNITY LEADERS. BITCH MEDICENTER AND THE SAY NO TO DRUGS CAMPAIGN ARE NO LONGER ASSOCIATED WITH THE NEO-TERRORIST DRUG DISTRIBUTION GROUP D.A.R.E.D.
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "hypermeth": {
			writeHTML(`
				t The video opens of a solemn shot of Liz on a chair.
				liz Hi. My name's Liz and if you're under the age of twenty-seven your generation is experiencing the biggest drug epidemic this century. And it's mostly because of this little bad boy right here.
				t Liz holds up a hand holding a small blue crystal in her hand.
				liz This... Is hypermeth. Your friends or classmates might tell you it's fine, that the symptoms clear up quickly, or that the addiction is entirely mental. They'll say the anti-hypermeth PSAs you see on video ads are overblow, and that's partially true. <br>We've all see the classic 'this is your dick, this is your dick on hypermeth.' No, hypermeth will not cause you to literally drown your local library or pawn shop in cum. <br>But you should always keep in mind what this little blue rock can do to you. Mind bending pleasure, but at what cost? Nosebleeds, literal brain scrambling, temporary to permanent perception of pain as pleasure. That last one sounds fun until the landlord catches you getting your 'slut shocks' with a metal fork in an outlet. The truth is that modern medicine has moved past this dangerous neurodrug. Take a look at Angelina here.
				im images/psas/meth1.gif
				liz Angelina is responsibly using a new, safer alternative to the dangerous drug. I get it, I understand where you're coming from if you feel that urge just to scramble up your brains and turn into the sluttiest thing since fast food. I myself suffered from a hypermeth addiction after I was exposed years ago.
				im images/psas/meth2.gif
				liz If you struggle with hypermeth addiction, the damage doesn't have to be permanent. Come on down to Bitch Medicenter and I'll see you through your treatment personally. 
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "universityPSA": {
			writeHTML(`
				define sec = sp Lisa; img scripts/gamefiles/profiles/secretary.jpg;
				define prin = sp Victoria; img scripts/gamefiles/profiles/principal.jpg;
				liz Hello everyone! It's time for a PSA, this time on human vs machine hypnotic conditioning.<br>Now today we have two volunteers. One has been personally conditioned by an anonymous hypnotist, and the other was reverted to a clean slate and then hypnotized by the commonplace machine used in clinics like the one here at Bitch Medicenter.
				im images/psas/hu1.jpg
				sec W-wha... What's going on? principalF? What are you-
				prin Hello everyone! Welcome to the show, I hope you all splurt while watching me and this bitch get fucked!
				liz Now the brunette has a much stronger will, making her resistant to most types of hypnotism. She was 'broken in' by our machines. This has the byproduct of completely dissolving the original person's willpower. <br>Whereas her partner was hypnotised by a human. She'll resist verbally, but physically she'll listen to whatever order we give her.
				sec P-please, let us go! And please turn principalF back to normal! We are professional-
				liz Bring in the studs, please.
				im images/psas/hu2.jpg
				prin Cocks! Fat, heavy cocks that'll make me squirt!
				liz Notice that both of them are showing signs of extreme arousal. While practical human hypnosis does have limitations, it grants a much greater degree of freedom and plyability over how you control the subject. The woman, Victoria, possesed an extreme aversion to anyhing 'unclean', or 'filthy', so that has been brute-force overpowered into an addiction to debasing herself.
				im images/psas/hu3.jpg
				t The room is filled with wanton moaning as secretaryF's will is broken, and the two women give in to their rough treatment as little more than human onaholes.
				im images/psas/hu4.jpg
				liz I hope this difference was educational. Please only use professional hypnotists if you're interested in a human touch, unless you want your puppets snapping out of their trance mid-deepthroat. <br>I'd like to thank the donor of these two ladies, and wish them the best of luck running their educational institution.
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "princessPSA": {
			writeHTML(`
				t This is a short film on the anatomical accuracy of a game's scenes, and how possible they are with modern technology. The video begins with Liz sitting in an office chair with a computer screen displaying a Japanese game.
				liz Hello! I'm a physician at Bitch Medicenter, a human modification clinic specializing in sexual wellness. Today we'll be breaking down scenes from the Japanese Pin-Point release with art done by the artist Neromashin that's seen a sort of 'retro revival' ever since it's high-quality fan translation. We'll start with it's famous bell scene, roll the clip.
				im images/psas/princess1.jpg
				liz So rule number one of the clinic is to never use unsterilized equipment, and rule number two is to never do modifications in a less than private environment. Although this is clearly meant for the sexual gratification of the audience rather than a strictly profession modification job.
				im images/psas/princess2.jpg
				liz Now the character here is using magical needles which cause extreme sensitivity increase and spontaneous orgasming, assumedly to debase these lovely girls. While they aren't needles, the effects are quite similar to the drug known as hypermeth, which is a real problem on the streets these days.
				im images/psas/princess3.jpg
				liz The princess and her loyal knight here both have a very large network of future partners, which is good as hyper meth has many side-effects including total brain shutdown from pleasure overload. Please use the safer alternatives!<br>Not much left to say on this note. Alright, next scene.
				im images/psas/princess4.jpg
				liz Now, notice the sudden and extreme dick-growth. Typically this would be done with a rapid transformation of the ovaries, causing them to become fat testicles immediately capable of oozing out the woman's former eggs as an extremely gunky form of sperm. The process of "giving birth" to these nuts, splurting them from her pussy lips is extremely pleasurable.
				im images/psas/princess5.jpg
				liz But what you can't see from this angle is that the woman actually still has a fully functional vagina. It's likely that whatever nerves formed her G-spot have fused with a newly grown prostate gland as well. An extremely difficult procedure, but not impossible. I've never overseen such a procedure myself though. Let's take a look at another scene.
				im images/psas/princess6.jpg
				liz Now in this scene the princess Elizabeth is concealing a newly-birthed swarm of tentacles. While we actually do offer a very similar treatment involving heavily genetically modified leech-squid hybrids, it is illegal in most states to conceal the creatures like this. They must be at least partially visible and you should mark yourself as a designated breeder.
				im images/psas/princess7.jpg
				liz Now notice the generally oblivious nature of the king next to her. This is entirely unrealistic, it certainly shattered my immersion when it occurred.<br>In any case that's all we have time for today, please give feedback on more stories like this. With enough interest we could make another PSA, or even start offering themed treatments based on the games you suggest!
			`);
			writeTransition("psaList", "Go back");
			break;
		}
		case "prologue": {
			writeTransition("prologue6", "Salutations!");
			writeTransition("prologue1", "Bitch Medicenter Technician Job Advertisement");
			writeTransition("prologue2", "Acceptance Letter");
			writeTransition("prologue3", "Technician Responsibility Outline");
			writeTransition("prologue4", "Modification Process Instructions");
			writeTransition("mainMenu", "Go back to the home screen");
			break;
		}
		case "prologue1": {
			writeText("HELP WANTED: Lobotomy Inc. Bitch Medicenter 91023 Westchester Lane");
			writeText("POSITION DETAILS: Modification and Hypnosis Technician required. Applicants are expected to meet at least one of the following requirements:<br>PhD in Anatomy & PhD in Applied Psychology<br>20 Years experience in human modification or hypnosis equivalent<br>License in use of our Human Alteration App<br>Flexible morality and willingness to learn");
			writeText("Applicants should submit their resume in triplicate online or via mail and be expected to work immediately.");
			writeTransition("prologue", "Go back to the introduction documents");
			break;
		}
		case "prologue2": {
			writeText("[Mr./Ms.] [APPLICANT'S NAME HERE. REMOVE BEFORE SENDING]");
			writeText("I'm very pleased to inform you that your resume has been chosen from our numerous applicants, and that you have earned the prestigious position of Modification and Hypnosis Technician here at Bitch Medicenter.");
			writeText("There's no interview process, simply come to the office on 91023 Westchester Lane and you may begin the training process.");
			writeText("You'll be running the machines that make our work possible, although you won't actually be interacting with patients.");
			writeText("We here at Bitch Medicenter solve problems. Problems like sexual dissatisfaction, a lack of personal identity, and terminal cases of 'stuck up bitchiness'. I'd just like to extend my gratitude to you for applying. Since the scandal last October where an unknown chemical leaked from 'our' facility, transforming a large portion of the population into sex-hungry shemale zombies, there's been a stigma around our company.");
			writeText("Personally, it's clear to me that the leak came from the nearby Arby's. But I digress.");
			writeText("We've already got a case lined up that you can assist with, I hope to get a chance to meet you in person soon.");
			writeText("- Noodle Jacuzzi, Site Manager");
			writeTransition("prologue", "Go back to the introduction documents");
			break;
		}
		case "prologue3": {
			writeText("RESPONSIBILITY OUTLINE FOR MODIFICATION AND HYPNOSIS TECHNICIAN");
			writeText("Bitch Medicenter provides personalized transformations of your body and mind. We do not offer refunds or comply with any known insurance policies. (Exceptions will be made for the insurance branch of Lobotomy Inc.)");
			writeText("Utilize the Modification and Hypnosis devices to fulfill treatment plans as they are prescribed. Technicians may suggest treatment plans by requesting additional case files, or by sending an email to the site manager at noodlejacuzzi@gmail.com if the request system is disabled.");
			writeText("No additional information available.");
			writeTransition("prologue", "Go back to the introduction documents");
			break;
		}
		case "prologue4": {
			writeText("The Body-Mod 3000(tm) is a state of the art body modification tool meant for use only by trained professionals or to be outsourced anonymously on the internet.");
			writeText("Use the arrow keys or swipe on the device's touch screen to move each block on the screen at once. Whenever two blocks with the same number on the front would collide, they combine and add their numbers together.");
			writeText("Each time blocks are combined, they increase your score. Get your score to equal or surpass the target score, and you move on to the next stage.");
			writeText("Complete all three stages and you've finished modifying the subject. Keep an eye on the Modification Status box for an idea of exactly what's happening to the subject.");
			writeTransition("prologue", "Go back to the introduction documents");
			break;
		}
		case "prologue5": {
			writeText("To whom it may concern,");
			writeText("The device used for hypnosis has undergone a critical malfunction. I'm working on it at the moment, but it seems quite likely that the device will be inoperable for the foreseeable future.");
			writeText("For the moment the only treatment plan options will need to be done entirely through body modification. Best of luck, hopefully the machine will be ready again soon.");
			writeText("Noodle Jacuzzi, Site Manager");
			writeTransition("prologue", "Go back to the introduction documents");
			break;
		}
		case "prologue6": {
			writeHTML(`
				liz Salutations! I know this isn't usual practice, but I like to make a point of introducing myself to new technicians.
				liz My name is Liz, I'm the lead physician here. Looking at the scheduling, I'm probably the only one you'll be working with, I hope we get along. <br>Usually the medical and technical staff don't interact much, but I think a bond of trust is important. I know our facilities are kept separate, but I'd love to think of you as a friend of you'd let me. I might be a bit opinionated and hot-headed at times, but I became a physician to help people. Taking on this role means you're either selfless like me or just want to get off on the modification logs. Either way you're helping people too, you've got my respect as a colleague already. 
				T At the bottom of the email is signed 'Love, Liz' along with a link to an online folder named 'icebreakers'. Numerous images are inside.
			`);
			//liz By the way, one of my weekend hobbies is being modded. If you're interested I'd love to be a guinea pig for you to try out some of the more out-there body mod techniques. Of course you should only ever perform procedures inside your comfort zone of course. Putting my body in your hands is one of the best trust-raising exercises I know. Let me know if you'd be interested in that! Only temporary though, we can't have our fun interfering with our work. 
			writeBig("images/liz/"+lizChoice+"1.jpg");
			writeBig("images/liz/"+lizChoice+"2.jpg");
			writeBig("images/liz/"+lizChoice+"3.jpg");
			writeTransition("prologue", "Go back to the introduction documents");
			break;
		}
		case "lizSelection": {
			writeHTML(`
				liz Which model would you like? This will change Liz's portrait for speech, and the introduction email icebreakers.
			`);
			writeTransition("lizC", "Skylar Vox");
			writeTransition("lizA", "Lily Labeau");
			writeTransition("lizB", "Monique Alexander");
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "lizC": {
			data.player.image = "c";
			writeScene("lizSelection");
			break;
		}
		case "lizB": {
			data.player.image = "b";
			writeScene("lizSelection");
			break;
		}
		case "lizA": {
			data.player.image = "a";
			writeScene("lizSelection");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			document.getElementById('output').innerHTML += `
			` + JSON.stringify(data) + `
			`;
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeText(scene);
			writeBig("images/butts.jpg");
			writeTransition("start", "Go back to the title.");
		}
	}
}

function writeEvent(scene) {
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	switch (scene) {
		case "prologue1": {
			break;
		}
		case "wifeA": {
			writeText(characterArray[0].fName+" groans as she suddenly comes to her senses. She's been out for a few hours, but to her it feels like she just went under a few seconds ago.");
			writeSpeech("wife", "", "Mmm... Wha? Is it already over? No scarring, have they even st-");
			writeText("Her words stop in her mouth as her body siezes, her brain finally catching up to the unfamiliar sensations running through her nerves.");
			writeSpeech("wife", "", "Ghh... What the f-fuuckk?");
			writeText("Nerves are alight, she looks around in a dazed panic and finds a note on the nearby table.");
			writeHTML(`
				define wife = sp wife; img scripts/gamefiles/profiles/wife.jpg;
				liz Ah! You're awake. This is fantastic, are you enjoying your new body?
				wife What the hell... What did you do to me?
				liz You basically have a whole new body. I've taken the liberty of calling you a cab. I know you're itching to try it out, but take it slow for now. <br>Because your body is so sensitive, you might end up as what we in the professional world call a 'broken slut' if you dive right in to the new world of sexual pleasure available.
				im images/wife/wifeA-0.gif
				wife Nnn... Gotta... Cab... Cumming~!
				liz I'll leave you to enjoy yourself for now, someone will come in when your ride arrives. I'm sure you'll have no problem living a satisfying life like this. 
			`);
			writeText("Her first orgasm in god knows how many years runs through her, taking her breath and rational thought away. She'll be politely escorted out by security to make room for new patients eventually.");
			addFlag("woman");
			writeFunction("writeEvent('wifeAA')", "That night...");
			break;
		}
		case "wifeAA": {
			writeSpeech("Mr. "+characterArray[0].lName, "none", "Honey! I'm home!");
			writeText(characterArray[0].fName+"'s husband wearily makes his way to the bedroom and takes off his suit, puts on an old t-shirt and starts getting ready for bed.");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "You didn't wait too long, did you? I had dinner on my way home. How was the appointment?");
			writeSpeech("wife", "", "G-good~! Everything's... Everything's fine now~!");
			writeText("He's a little confused at her tone, but relaxes once he hears "+characterArray[0].fName+" open the bathroom door.");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "I got offered a few extra hours this month. I'm thinking of-<br>H-honey? What are you wearing?");
			writeText("He doesn't have time to admire "+characterArray[0].fName+"'s red lingerie as he's suddenly pushed down onto the bed.");
			writeBig("images/wife/wifeA-1.gif");
			writeSpeech("wife", "", "I can't wait any more... My hands aren't enough.");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "Mmm... What's gotten into-?");
			writeSpeech("wife", "", "Shut up. Here's what's going to happen. I'm going to suck you off, then you're going to pound that fat dick into me until I can't think anymore, okay?.");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "Wait, your appointment. You didn't go to that modification-gah!");
			writeBig("images/wife/wifeA-2.gif");
			writeText("He doesn't have a chance to finish his sentence as "+characterArray[0].fName+" plants her pussy against his lips, showing more enthusiasm than she's ever shown before in all her years of marriage.");
			writeBig("images/wife/wifeA-3.gif");
			writeSpeech("wife", "", "Mmm~ Mmm~ Mmmwah~!<br><i>Holy shit, I didn't know this could feel good... Do I even have a gag reflex anymore?</i>");
			writeText("For as much fun as giving a blowjob is with her newly enhanced nerves, she knows she needs something deeper. She pulls the cock out of her mouth with a *POP* and maneuvers to press her husbands cock against the entrance to her pussy.");
			writeText("But dark urges and curiosity overtake her, and she moves the cockhead to her other hole's entrance. Even after years of pleading and birthday requests, she'd never entertained the thought of anal sex for even a minute.");
			writeSpeech("wife", "", "<i>I've never done something like this before... I bet... I bet it'd feel...</i>");
			writeBig("images/wife/wifeA-4.gif");
			writeSpeech("wife", "", "Aaaah~! Goood~!");
			writeBig("images/wife/wifeA-5.gif");
			writeSpeech("wife", "", "Yes! Yes, fuck yes! Fuck me into pieces with your huge cock!");
			writeText("She was wet, <b>sopping</b> wet.");
			writeSpeech("wife", "", "God, you should have done this years ago! Broken me, turned me into the bitch in heat I deserve to be!");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "Shut up!");
			writeBig("images/wife/wifeA-6.gif");
			writeSpeech("wife", "", "Nnngh~!<br><i>God, I'm being used like a cheap whore! I need... I need more!</i>");
			writeText("And her wish is granted as her husband lifts her enough to push her off the bed, forcing her face down and her ass up in the air as he pounds her slutty asshole.");
			writeBig("images/wife/wifeA-7.gif");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "YOU *SLAM*<br>FUCKING *SLAM*<br>WHORE!*SLAM*<br>YOU SOLD YOUR BODY TO THAT MEDICENTER, FOR WHAT?!");
			writeSpeech("wife", "", "Ghhg~! For this! And now that I have a taste for this, for real <b>sex</b>, I'll never go back!");
			writeText("At this he pulls his cock out, and "+characterArray[0].fName+" experiences a moment of genuine terror at the thought of going even one minute without a hard cock inside her.");
			writeSpeech("Mr. "+characterArray[0].lName, "none", "Lets see what else they've done to you.");
			writeText(""+characterArray[0].fName+" is eager to get back on top, desperate for any more addictive pleasure as his raw cock pushes into her cunt.");
			writeBig("images/wife/wifeA-8.gif");
			writeSpeech("wife", "", "Oh my god! Oh my gawd~!!!");
			writeText("She might as well have been a virgin for all the good her experience did. 300% vaginal sensitivity up? It felt more like the sensitivity was 300 times stronger.");
			writeBig("images/wife/wifeA-9.gif");
			writeText("The overload of sensations begins to fry her brain, more powerful than any drug on the market. Chemicals her brain never expected to deal with were running rampant through her body, and a sensation she'd never felt before began to build up to a bursting point.");
			writeBig("images/wife/wifeA-10.gif");
			writeText("She <b>squirts</b>. She sprays in an arc powerful enough to shoot several feet forwards. Her voice has gone hoarse from screaming.");
			writeText("You've done a fine job. The client's request for a more satisfying sex life has been met. In the long term she'll basically be a sex junkie, but that's not your problem.");
			writeText("If she could form words right now, she'd probably give you a glowing review! Great work!");
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "girlfriendA": {
			writeText("Once the anesthesia has worn off, the pair  begin to groggily come to their senses and find themselves in a soft bed.");
			writeSpeech("<del>Michael</del> <ins>Michelle</ins>", "scripts/gamefiles/profiles/boyfriendPost.jpg", "Fuck... My head...");
			writeSpeech("girlfriendPost", "", "Mmm...~ Is it over?");
			writeBig("scripts/gamefiles/characters/boyfriendPost.jpg");
			writeSpeech("boyfriendPost", "", "What the fuck!? What the hell happened to me?");
			writeText(characterArray[6].fName+" begins to panic as he runs his hands along his new body. All of his former muscle mass is gone, and his prized package has lost nearly all of its former girth.");
			writeSpeech("girlfriendPost", "", "What's wrong ho-");
			writeBig("images/girlfriend/girlfriendA-1.gif");
			writeSpeech("girlfriendPost", "", "Ooooh~...");
			writeBig("images/girlfriend/girlfriendA-2.gif");
			writeSpeech("boyfriendPost", "", "Are you al-<br>Holy shit! You've got a cock!");
			writeText(characterArray[4].fName+" just nods halfheartedly, still staring at her boyfriend's new ass. New sensations pooling in her mind from her untouched and backed-up cock.");
			writeText(characterArray[6].fName+" leaps off the bed and faces one of the security cameras, furious.");
			writeSpeech("boyfriendPost", "", "You god damn chop-shop motherfuckers! You'd better turn us back!");
			writeSpeech("girlfriendPost", "", "Mmm~... Honey, there's no reversion policy. Or refunds. That's why this place is so cheap...");
			writeSpeech("boyfriendPost", "", "I... Fuck! Come on, we're leaving. And then we're suing this place to the god damn foundations!");
			writeText(characterArray[4].fName+" just nods again as she's pulled out of the room. Dark, unfamiliar desires are pounding in her head. As her boyfriend's fat ass jiggles while they make their escape, she licks her lips.");
			writeFunction("writeEvent('girlfriendAA')", "Later");
			addFlag("sissy");
			break;
		}
		case "girlfriendAA": {
			writeText("It's been only two days since the alteration, but already the pair's relationship had begun to change.");
			writeText(characterArray[4].fName+" had been encouraging "+characterArray[6].fName+" to take a moment to enjoy the changes, promising that they'd get transformed back to normal at a more reputable clinic.");
			writeText("And to his credit, "+characterArray[6].fName+" had certainly tried. He'd really gone at it and tried fapping, but to no avail. Even the most hardcore of porn couldn't get him off with how his pecker was acting.");
			writeText("Just touching it was enough to kill any hope of a boner, almost like his brain was programmed not to receive pleasure from his dick. No matter how much he tried to jerk off, nothing happened.");
			writeText(characterArray[4].fName+" offered to help, giving an enthusiastic blowjob to his pathetic little member, but it wasn't even close to enough.");
			writeBig("images/girlfriend/girlfriendA-3.gif");
			writeText("But when her tongue strayed lower to get a taste of that perfect puffy donut of an asshole, his attitude changed.");
			writeText("Whereas before he'd always been strong and silent during sex, hardly making a peep, now he's squirming and moaning uncontrollably.");
			writeText("And finally, after what felt like an agonizing two days of no-release torment, his little clitty begins to leak a few drops of cum.");
			writeText("His eyes roll back in his head, the sensation of cumming even this piddling amount is much stronger than even his strongest of past orgasms.");
			writeText("Huffing and exhausted, he finally looks back down as he no longer feels his girlfriend's tongue in his ass.");
			writeBig("images/girlfriend/girlfriendA-4.gif");
			writeFunction("writeEvent('girlfriendAAA')", "Later");
			break;
		}
		case "girlfriendAAA": {
			writeSpeech("boyfriendPost", "", "Ah~! Ah~! Yes! Fuck me harder!");
			writeSpeech("girlfriendPost", "", "It's ringing... and... Ah! Hello! Is this Bitch Medicenter? I was calling about my recent alteration, my name is "+characterArray[4].fName+" "+characterArray[4].lName+".");
			writeBig("images/girlfriend/girlfriendA-5.gif");
			writeSpeech("boyfriendPost", "", "Ghh~! I can feel your cock slamming against my bitch-button!");
			writeSpeech("girlfriendPost", "", "Mhmm. I just wanted to apologize for our behavior as we left. I'm here with him right now, and we really do enjoy... Oh? This is a common occurrence?");
			writeSpeech("boyfriendPost", "", "Gonna cum! My clitty is leaking!");
			writeSpeech("girlfriendPost", "", "Shut up, bitch!<br>Ah, sorry, I'm with him right now. He's insatiable, although I guess I am too. Anyways, thank you so much! We'll be leaving a positive review for sure!<br>Alright, thank you.");
			writeText("As she hangs up the phone "+characterArray[4].fName+" slows her rhythm and pulls her cock out of her boyfriend's ass.");
			writeSpeech("boyfriendPost", "", "Noo~... Did I do something wrong?");
			writeText(characterArray[4].fName+" responds by grabbing "+characterArray[6].fName+"'s leg and yanking him off the bed, causing him to land face-first in the puddle of boicum he made.");
			writeText("As he obediently cleans up his mess, she lays back on the bed.");
			writeSpeech("girlfriendPost", "", "You want my cum? Earn it.");
			writeSpeech("boyfriendPost", "", "Yes mistress!");
			writeText("He eagerly climbs atop her, giggling absent-mindedly as his mistress's cock fills his ass again.");
			writeBig("images/girlfriend/girlfriendA-6.gif");
			writeText("He bounces up and down. His clitty's sensitivity is way down, so the only time he even feels anything from it anymore is when it's slapping on his mistress's abdomen.");
			writeSpeech("girlfriendPost", "", "Mmmm~... Good girl. Enjoy your reward.");
			writeText("And soon enough her modified cum begins to pump into his hole. The changes made to it have had some major effects on "+characterArray[6].fName+"'s brain. Just a drop is enough to send him into a sexual frenzy now, so when a pint of it floods his ass it sends powerful, almost electric shocks up his spine.");
			writeText("His body shaking and mouth hanging wordlessly open, he shows his appreciation the only way he knows how.");
			writeBig("images/girlfriend/girlfriendA-7.gif");
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "girlfriendB": {
			writeHTML(`
				define girlfriend = sp Kylie; img scripts/gamefiles/profiles/girlfriend.jpg;
				define boyfriend = sp Michael; img scripts/gamefiles/profiles/boyfriend.jpg;
				girlfriend Mmm...
				t Kylie gently opens her eyes to the sight of the resting room. She doesn't feel different, although she does see her boyfriend resting on the table across from her.
				girlfriend Michael, hey. Cmon, get up.
				boyfriend Mmm...
				liz Do I hear a pair of love birds chirping away?
				t Liz excitedly bursts into the room.
				liz Good morning! How do you feel?
				boyfriend Tired.
				girlfriend The same as before, actually.
				liz The effects should be subtle at first. You'll notice changes as the days go by. Treat this as a course correction instead of a new direction and you should be surprised soon enough. To be direct, most of the changes were made to Michael's mind and body. 
				boyfriend Huh. I don't feel any different.
				liz Well, keep an eye on each other and don't hesitate to give us a call if something seems off, alright?
				girlfriend Thanks!
				...
				boyfriend Do you think we got ripped off? I mean, what if this ends up being a placebo?
				t The car ride has been uneventful so far, although every so often when Michael glances to the side he sees Kylie staring back at him, almost... Hungry.
				girlfriend We'll see. Oh, actually stop here. I kinda wanna check out that shop.
				boyfriend A sex toy place? Haven't we spent enough today?
				t Despite his tone Michael finds himself pulling over anyways.
			`);
			writeFunction("writeEvent('girlfriendBB')", "Weeks later...");
			addFlag("sissy");
			break;
		}
		case "girlfriendBB": {
			writeHTML(`
				define boyfriend = sp Michael; img scripts/gamefiles/profiles/boyfriendTrap.jpg;
				t Michael sighs and lays back on his bed. Every time he and Kylie go out shopping his room seems to get a little... Fluffier. His fashion sense, his style, even the way he looks has been changing pretty quick, and he's been weirdly receptive to it all.
				t His phone at his ear, a woman is asking him questions.
				boyfriend Well, it's just... She started small, you know? She brought in an onahole...
				im images/girlfriend/bb1.gif
				boyfriend Then a strap-on...
				im images/girlfriend/bb2.gif
				boyfriend And now a chastity cage...
				im images/girlfriend/bb3.gif
				boyfriend I just... I can't say no, you know? It's only been a month... Will this keep escalating? Should we come back to the clinic?<br>"Do I want it to keep escalating?"<br>Well, I mean-
				girlfriend Honeeey~! Food's here! Do you want the strap-on or the paddle tonight? Help me carry if you want both! 
				boyfriend Ah, I'll call you back.<br>No, I wouldn't say "dissatisfied", but...<br>Alright, I guess I can leave a review. Okay, bye.
				t He hangs up and quickly rushes to the door, but hesitates as he catches a glimpse of something shiny and silver. A small key.
				t As he touches it his caged dick throbs, he hasn't had a "proper" release in almost a week, so immediately he takes the key and...
				boyfriend Mistress~! You forgot my cage key in my room again~! 
				t He's quickly out the door to help carry goods and return the key.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "wifeB": {
			writeHTML(`
				define wife = sp wife; img scripts/gamefiles/profiles/wife.jpg;
				liz Alrighty the treatment should be finished, how do you feel?
				wife ... Foggy. And warm.
				liz I see, I see... That's within projected limits then.<br>So in short what we've done is a pretty typical libido enhancement, one that gradually builds up over time. Be sure to achieve orgasm regularly.
				wife Ugh, fine. I'll pick up some toys from-
				liz With your husband, specifically. Or any other person will do actually. As one of the things you came in for was marital stress, we've set up some mental blocks to prevent you from cumming unless you're with another person.
				wife What?! But what if... If...<br>Fuck, what's wrong with my head?
				liz Hard to focus? The more pent-up you are the harder it'll be to think rationally. Basically when you're in this state you turn off some of the thinky bits to focus on amplifying various sensations across your body.
				t Her brain filling up with fuzz by the second, Adriana pushes herself off the table and tries to leave.
				liz Ah, wait!
				wife F-fuck you!
				liz Not during office hours, but if you really need me to-
				t Adriana pushes past Liz and makes her way out the door.
				liz Call us if you have any questions! Be sure to achieve orgasm at least once a day, but not more than-<br>... Aaand she's gone. We were supposed to tweak the rate of lust buildup... Well, she paid in advance, so I suppose it's not my problem anymore.
			`);
			addFlag("woman");
			writeFunction("writeEvent('wifeBB')", "Later...");
			break;
		}
		case "wifeBB": {
			writeHTML(`
				t It's been several days since her operation, and the fuzz clouding Adriana's mind has only grown stronger.
				t From the moment she got home a sexual heat was kindling inside her, and nothing she could do would stop it. Rubbing herself, using her dildo, she'd even tried anal for god's sake! Sure it felt good, amazing even, but it wasn't getting her any closer to relief. 
				t Now she has guests over, her husband's friends.
				sp wife; <i>Focus, Adriana... God, why does it still feel like I'm forgetting something?</i>
				im images/wife/bb1.gif
				t As she sets down a plate she bends over slightly. The guest she's serving gawks at the thick amount of anal lubricant from her play session just a few hours ago, coupled with the fact that she's completely forgone wearing anything at all beneath her already-skimpy dress.
				t She walks back to the kitchen, unaware she's being followed by one, then two, then three of her houseguests while her husband is distracted. One of them decides to show something off.
				im images/wife/bb2.gif
				t The next few moments are a blur for her, a sensation on her ass and a dominant hand around her neck. A rough voice saying to relax, that it's all a bit of fun.
				t Every stray thought needs to fight it's way through a dense fog. That is, until it all finally clicks for her.
				t She doesn't need to think at all! What she really needs is to cum, and these men can help her with that. All she needs to do is make herself presentable...
				im images/wife/bb3.gif
				t Encourage her helpers to make the fun better for everyone...
				im images/wife/bb4.gif
				t And get her reward for good behavior!
				im images/wife/bb5.gif
				t And that reward hits her like a firehose to the brain. Triggered by an orgasm her body quakes, her sense of reason slowly comes back, allowing her mind to start operating on logic instead of bestial lust.
				t And she promptly ignores this returning sense of self for the sake of enjoying the ride.
				t But what she doesn't realize is that because her intelligence is affected by her lust, she literally can get fucked stupid unless she takes control of the situation.
				wife Oh god, fuck me harder~!
				t Oh well.
				...
				im images/wife/bb6.gif
				t In the aftermath of the dinner party, all but one person in attendance would agree that it was an incredible and wonderfully memorable experience.
				t For that one person it was a living nightmare as he realized his wife was not only openly getting fucked by his coworkers, but also that she'd had her mind and body altered to allow her to slut it up like an enthusiastic whore.
				im images/wife/bb7.gif
				t But what really matters is Adriana's opinion, and if she weren't giggling vapidly at how nice sperm feels on her face, she'd give the medicenter a glowing recommendation, albeit with a limited vocabulary.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "runnerA": {
			writeHTML(`
				define runner = sp Marie; img scripts/gamefiles/profiles/runner.jpg;
				liz Gooood morning~! Rise and shine!
				runner Mmm... How long was I out? It feels like I slipped into a nap, did the op-<br>Whoa!
				t Marie hops out of bed and jumps in place.
				runner I feel so energized! I was never a morning person... Holy crap!
				liz Indeed! Energy was the primary focus. Morning fatigue takes the wind out of a lot of early-morning workout sails.<br>We've improved your metabolism too. Not too much, just make sure to get plenty to eat before or after you exercise.
				runner Heck yeah! I think I'll run home today!
				liz Great to hear, you're already paid in full. Be sure to have a good toy or partner ready for when the sexual heat hits you.
				runner ... Eh?<br>I didn't... What? Sexual heat?
				liz Yep! As a cap-off to a good workout, what better to burn calories than a nice round of frantic sex?<br>Your body has been altered a little to improve the normal heat response following a workout. Basically for every calorie burned through exercise you'll feel an intense burst of lust.
				runner I didn't ask for that!
				liz But you said you were hoping to attract a partner. Oh, you must mean pheromones. Don't worry, the sexual heat and attractive body should do that work for you.
				runner I... I don't... I wanted to find a buddy the normal way!
				liz Oh, well we could throw in an exhibitionism fetish, or I could recommend a good orgy-
				runner Stop! Stop. Just... Aaagh!
				t Marie runs out of the room.
				liz ... Huh. Did she come to a place called 'Bitch Medicenter'... Not expecting a sexualized treatment?<br>No, that's silly. It must've been something I said.
				...
				t By the time Marie has made it home she's soaked with sweat. She unlocks the door and stumbles inside. 
				runner Hah... Hah... Fuck, shit, what... What do I do? Gotta... Gotta call...
				t A blast of sensation causes her legs to buckle, her workout shorts are already damp with sweat, but suddenly they're wet with something else. She forces herself upright, and starts making a phonecall.
				runner Ghh... Fucking... I can barely hold back...<br>Ashley! You bitch, that place you recommended-Ghhh!<br>Just... Just get over here! <b>NOW!</b>
			`);
			addFlag("woman");
			writeFunction("writeEvent('runnerAA')", "Later");
			break;
		}
		case "runnerAA": {
			writeHTML(`
				t A warm, average day in an unassuming home is interrupted as a fit young woman strides through the room. Her body coated in sweat, she peels off her sports bra and throws it aside.
				runner Ashley! Get your ass downstairs!
				t A tired woman walks down the stairs. She's not a morning person, but she's got a smug look on her face.
				t Suddenly she's grabbed as Marie takes her by the hair, forcing her down to her knees.
				im images/runner/aa1.gif
				runner Cmon! It's hitting me! 
				t Ashley just mumbles an "Mhmm" as best she can, happy to enjoy the morning routine of her friend turned fuckbuddy even as her nose is mashed against Marie's clit.
				t What she did wasn't something a good friend would do, but it was something a horny friend would do. Convincing Marie to go was a hassle, but the "punishment" she got as a result has been worth it.
				runner Deeper... Ghh... I should take you there myself, do to you what they did to me...
				t Ashley just moans into Marie's muff at the thought.
				...
				im images/runner/aa3.gif
				t The pair have never been closer, and Marie has never been fitter. Great job!
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "streamerA": {
			writeHTML(`
				define streamer = sp Mandy; img scripts/gamefiles/profiles/streamer.jpg;
				t A dazed Mandy is laying on a bed, her eyes open but awareness still asleep, until Liz snaps her fingers bringing her back to reality.
				streamer W-what!? Wha...? Is it over?
				liz Yes, the hypnosis is complete and it seems to have been implanted successfully. Quite the modern marvel, isn't it?
				streamer But-
				liz You still feel the same, yes. You should. Feeling awkward is noticeable, you shouldn't notice anything in a conversation that goes smoothly.<br>You'll still have all the normal self-doubt that comes with a life on camera, but hopefully the work our technician has done will be enough.
				streamer Hopefully?
				liz You didn't pay enough for an absolute, ma'am. Success online is more than just your body, it's also personality and luck, and creativity helps too. 
				streamer But what actually changed?
				liz Performance anxiety tends to lead to symptoms of panic. We've changed the way you think to replace that panic with excitement instead. They're actually quite similar, you know.
				streamer So like, I'll get really hyped when I'm scared?
				liz "Hyped"? That might be the word for it. In any case, if you still find yourself unable to perform make another appointment and we'll see what else we can do.
				streamer I see, thanks! I'll let you guys know how it goes!
				t Mandy leaves and Liz waves her off, before Liz takes a seat at the room's computer to search something.
				liz "Hyped"... "Hyped"... Oh my, that's not the right word at all. Oh well.
			`);
			addFlag("woman");
			writeFunction("writeEvent('streamerAA')", "Later");
			break;
		}
		case "streamerAA": {
			writeHTML(`
				t Fifteen minutes into the stream it's all coming together. She chose a trending game, she's wearing an outfit that shows off certain aspects of her 'personality', and it's the perfect time of the day to pull in the viewers.
				t Everything's turning out just fine, except...
				streamer <i>Why the fuck... It's not working...</i>
				t Her mouth is dry, the viewers are watching as she shakily picks up her water bottle after having died for the third time in a row to an easy boss.
				t Her blood pumping through her veins at record pace, the thump of her heart audible in her ears, the sweat sliding down her skin, it's clear to everyone her body is so full of nervous energy it's like she's being chased by a wild animal.
				t She can't even get out an apology as she reaches for her mouse to cancel the stream, and as she does she sees her own face, right next to the counter showing how many hundreds of people are watching her right now.
				t Her fingers clench involuntarily and she grits her teeth as a white flash ignites her brain. A cool yet hot sensation pulses through her body, and then again. Her skin tingles and her eyes unfocus as she tries to make sense of the sensations flooding her.
				im images/streamer/aa1.gif
				t Everything slows down, and Mandy's awareness slowly returns to her body as she feels a damp sensation from her lower body.
				t All the nervous energy has been released, but as she looks up to see she's still live, it begins to build up again.
			`);
			writeFunction("writeEvent('streamerAAA')", "Later");
			break;
		}
		case "streamerAAA": {
			writeHTML(`
				t On a much more explicit site, an experienced camgirl has started her stream once again. Hundreds, then thousands flood in to view the show.
				streamer Heeey everybody~! Ooh, welcome back~<br>Nggh, I love that burst of excitement from starting up. Thanks for cumming~!
				t The once-shy streamer, now long-since banned from her all-ages previous website, had no trouble at all finding a new audience who supported and enjoy her boundless enthusiasm and addiction to being seen.
				streamer So many more~<br> Cmon, all of you. Tell me what you'd do to me if you were here. I don't want a counter, I want to really feel like you're all here, staring at my totally soaked pussy~!
				t The chatbox begins to fill in a frenzy, hundreds of depraved messages basically turning it into an orgy of text.
				streamer "Any surgery?" No, this body is all natural. The confidence is from this body-mod place down the ways, Bitch Medicenter.
				im images/streamer/aaa1.gif
				t For her the lewdness of the streaming is almost second nature, so in order to get her kicks off she has the camera zoomed in just before she squirts. She puts on quite the show for the audience, and for herself to enjoy later.
				streamer Ghh... "Would I recommend them?" Of course! Actually, I was maybe thinking of dropping by again soon~<br>I wanna turn up whatever they did for me so that the meet & greet is extra fun!<br>"Chat's moving so fast nobody will know I'm gay"? Saw that! Ooh, another one's cumming!
				t It turns out all she needed was a bit of confidence all along. The treatment was a success!
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "schoolboyA": {
			writeHTML(`
				define schoolboy = sp James; img scripts/gamefiles/profiles/schoolboy.jpg;
				t The boy wakes up slowly, it's an unfamiliar sensation. Every morning before this the urge to piss before he wets the bed would have him violently run to the bathroom, he almost does this time on instinct.
				liz Good morning~! 
				t Liz enthusiastically strides into the room.
				schoolboy Did it work?
				liz Of course! Well, we didn't actually reduce your buildup, but we've improved your capacity a great deal. It should no longer inconvenience you in daily life.
				schoolboy That's great!
				liz Now, as a side-effect your prostate will be even more sensitive than before. Any serious stimulation of the gland will cause an involuntary release, causing you to squirt.
				schoolboy L-like a girl!?
				liz Exactly! It will feel absolutely euphoric. In fact the only difference between squirting and a traditional orgasm will be that you can squirt for minutes at a time. However!
				t Fantasies of bouncing on a fat dildo to an emasculating squirtgasm are interrupted as Liz grabs his attention by waving a finger in his face. 
				liz The human body isn't equipped to understand these sorts of orgasms. This is a very common treatment, and the documentary 'Squirting Away my Masculinity' covers a lot of the side effects. Every time you get off this way your brain will be overloaded by certain chemicals and hormones that go way past what it's meant to deal with. 
				schoolboy W-what should I do?
				liz You have two options. One, accept your new desires to wear cute dresses and have your asshole pounded until you become a squirting bitch, becoming more feminine and sensitive with every time you squirt like a girl... <br>Or two, don't do anal.
				t Danny gulps, shivering.
				liz Well, what you do from now on is your own choice. Let us know if any complications arise.
			`);
			writeFunction("writeEvent('schoolboyAA')", "Later");
			break;
		}
		case "schoolboyAA": {
			writeHTML(`
				t Slowly.
				t Danny's eyes flutter and he bites his lip.
				t Slowly.
				t It took only days before he broke, too curious about the potential pleasure to hold back from buying a toy online. Back home and on break from school he can hear his family on the floor below.
				t Slowly.
				t The documentary 'Squirting Away my Masculinity' is open on his computer screen, paused on a shot of a euphoric sissy spraying onto his bedsheets.
				im images/schoolboy/aa1.gif
				t Slowly, Danny lowers himself onto the dildo until he can feel the balls against the rim of his ass. The pressure of his squished prostate causes his flaccid dick to leak a clear fluid. A side-effect of the treatment is that his pee and cum have both become so clear he can't distinguish the two.
				t His instincts hold him back, unable to simply let go, throw away his masculinity and soak the floor in squirt in the most embarrassing orgasm of his life.
				t Slowly, Danny lifts himself back up, and that resistance cracks, breaks, and is then shattered as Danny mashes his prostate and the back of his bladder with the fat head of the sex toy.
				t Danny squeals as the floodgates are broken. While he doesn't know if it's piss or cum, he does know what his mind instinctively calls it.
				t Squirt. The kind produced by women and sissies when they cum like a bitch in heat.
				t The long-term effects, as described in the documentary, range from chest and ass sensitivity to a complete addiction to humiliating anal squirtgasms. Many graduate from sex toys to finding dominant women who get off on treating men like playthings or men who treat sissies as squirting dicksleeves.
				t The growing pool beneath his feet shows that Danny will be becoming very acquainted with these effects in the coming months.
				...
				im images/schoolboy/aa2.gif
				t Danny now no longer views his condition as a curse, but as a blessing. Fantastic work!
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "schoolboyB": {
			writeHTML(`
				define schoolboy = sp Danny; img scripts/gamefiles/profiles/schoolboy.jpg;
				t The boy suddenly jolts up, as if waking from a nightmare, crossing his legs on instinct as his need to piss rattles him awake once again.
				t Yet this time he's not in the comfort of his own home, he's in a hospital bed wearing a gown that barely goes down to his thighs, not even covering half his morning wood.
				liz Good morning~! Sleep well?
				schoolboy I still need to pee... Really bad. Was the operation a failure?
				liz No, your output has not been reduced at all. We here at the medicenter celebrate unicorns, we don't chop off their horns so they can be like the other horses.
				schoolboy B-but... I don't understand!
				t Liz sighs, and gently takes Danny's dick in her hands. He gasps at the touch, his urethra winking open then closed as he grunts in exertion trying to hold back.
				liz All we did was add a mild pheromone effect, so that others are encouraged to appreciate your special nature as they should.
				t Liz kneels down, planting a kiss on Danny's midsection.
				liz Your every encounter with a woman with even the smallest of submissive streaks will be dominated by them wanting you to cover their faces in your piss. They'll ask, plead, even beg you open-legged and wantonly fingering themselves for you to pee down their throats.
				t Danny's legs shake.
				liz And if you go farther, if you push yourself past their lower lips and pump hot piss into their womb, they'll squirt harder than in their entire lives, and it won't even come close to the force you're defiling them with. They'll stroke their bulging abdomens, proud not because they're waiting mothers, but because they're happy to be your human toilets.
				t He gasps, barely holding on. Liz leans in close to whisper into his ear.
				liz Let go, and a half-dozen piss-whore volunteers will be drinking you down before the room's cleaning systems can even activate.
				t His piss-slit winks open again as a brutal, mind-striking scent fills the air as his urethra distends. A prelude to the flood about to be let loose upon the room.
				t But instead Liz releases his member and stands up, collecting her clipboard and opening the door.
				liz Alright, that should be everything.
			`);
			writeFunction("writeEvent('schoolboyBB')", "Later");
			break;
		}
		case "schoolboyBB": {
			writeHTML(`
				t A young woman stops suddenly at her bathroom door, her half-awake roommate is at the toilet, completely unaware he's forgotten to close the door.
				t Her first instinct is to call out, embarrass him a little for his mistake, yet...
				t "My god... He's pissing like a racehorse..."
				t The thought crosses her mind as she nibbles on her lower lip. She's meant to be leaving by now, yet she's stuck staring at her roommate lets his stream foam up the toilet.
				t Her body moves on instinct, but not away.
				schoolboy Haaah... It feels like it takes longer every-<br>Hannah!?
				im images/schoolboy/bb1.gif
				t The woman beneath him, her face soaked with piss, just gasps and sighs longingly, thirsty for more. She licks ber lips, enjoying the tingling sensation on her tongue, and then lunges forwards to take the flaccid dick, piss still dripping from the tip, into her mouth.
				t She hollows out her cheeks to suck out as much more as she can, her thighs spread and her pussy leaking.
				t She feels his urethra distend, a sign that a fresh blast is coming, and she pulls back so she can taste it as she swallows it down.
				t In the coming months Danny will be finding himself quite popular as his roommate lets slip his condition, and it's all thanks to a successful treatment.
			`);
			addFlag("sissy");
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "jockA": {
			writeHTML(`
				define jock = sp Jenny; img scripts/gamefiles/profiles/jockTrap.jpg;
				t Jenny smacks <s>his</s><b>her</b> lips as <s>he</s><b>she</b> wakes up, noticing a peculiar taste on them. 
				jock Mmm... W-whoa! I'm... 
				t Suddenly the door opens and Liz steps inside. 
				liz Ah, awake at last! You've been out for a few days, but that's to be expected. A full body alteration like this averages about 43 hours of rest time, you're right on the mark. 
				jock I'm... I'm really short now... 
				liz It's a lot more than that. Mental changes first. What's your name? 
				jock Jenny... Wait-
				liz No, that's correct. The mental rewiring causes some people to shift their self identity. Basically you're a whole new you, and every step of the way you'll find out something new about yourself. Tastes, sense of style, even orientation in some people. Tell me, how do you feel when I do this? 
				t Liz leans forwards to show off her cleavage, and Jenny sits straight up and swallows hard. 
				liz Sexual excitement is up, pansexual at least. Feel free to experiment of course. 
				jock I, um... 
				t Jenny's little cock is standing up straight as well, visibly hard as Jenny tries to cover herself up.
				liz Ah, I wouldn't do-
				im images/jock/a1.gif
				jock Aah~! 
				liz Too late. This is a transitory period, touching yourself can make you into even more of a quickshot than before. 
				jock I came so quickly... 
				liz There's no need to worry, this new body of yours is exactly what you need. This is the new you. Trust me, there are plenty of women who are going to love it. Men too if you want to go down that road. 
				jock Really? I don't know... What kind of woman would want someone like me?
				liz Men obsessed with penile length forget that there are plenty of strong lesbian relationships out there. Still, you're very much lacking in confidence... 
				t Liz lets out a sigh before she takes her glasses off. She stands up and ensures the door is firmly shut and locked. 
				liz Alright, this one's a freebie. Let's have a go at improving that self confidence of yours, honey. 
				t ... 
				t About a half hour later the door unlocks and opens, with Jenny stumbling out with a bow-legged gait. He's got on a new outfit, a short skirt and a tight pink tee. 
				jock T-thank you again miss! I'll let you know how I feel in the morning! 
				t Liz follows out after, her hair a bit frazzled. She's putting on a fresh coat of lipstick. 
				liz Don't mention it. Come back any time, okay? And make sure to get some fluids in you.Oh, you missed a spot, right there. 
				jock Ah! 
				t Jenny quickly wipes off a small smudge of red lipstick from his inner thigh and leaves, almost tripping a few times. 
			`);
			writeFunction("writeEvent('jockAA')", "Later");
			break;
		}
		case "jockAA": {
			writeHTML(`
				jock Hello? Is this the Bitch Medicenter? My n-name is Jenny, I just... Just wanted to do a followup? 
				im images/jock/aa1.gif
				jock Aaah~! Your mouth feels... Really g-oh! Miss Liz! S-sorry, I'm just... You were right, it didn't take too long at all. I went right to a bar and I met s-oooh~
				t The woman between his legs giggles as he squirts another thin load of sweet cum into her hand. 
				im images/jock/aa2.gif
				jock Ah... I met someone and she's... She really likes me... She says I'm really cute and-Aah~! S-stop! I just came! <br>I'm sorry, I told her I'd be using the phone but she said she didn't care~! Ah~! I just wanted to say thank you, I feel really good~! <br>Ngh, yes, I'll keep you updated~! ByyyyiIIIEEE~!!! 
				t Treatment complete! 
			`);
			addFlag("sissy");
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "jockB": {
			writeHTML(`
				define jock = sp Jenny; img scripts/gamefiles/profiles/jockGirl.jpg;
				t Slowly, a woman is stirred awake by the pulse of a heart monitor and the soft light of the medicenter against her closed eyes.
				t The feeling of her skin, the softness of her hair, everything seems different. Even the lungs she breaths with seem changed, having become a little smaller.
				t So she closes her eyes again, pushing the idea of her changed body aside as a dream. She almost dozes off again until a human typhoon bursts into the room.
				liz Gooood morning Jenny~! Ah, did I wake you? Sorry! The monitor said you were already...
				jock It's... Fine.<br>Did you say "Jenny"?
				liz Yep! It's medicenter policy to give a twist on the patient's name when they wake up from this treatment. It helps set in the mental changes before we talk about the physical ones.<br>It can be made permanent, there's a courthouse downtown we point so many people to that they gave us a referral code.<br>In any case, have a look!
				im images/jock/b1.gif
				jock I...
				liz It's technically temporary. You produce the chemicals needed to sustain the body via orgasm, and once you're dry you'll turn back to your previous self. I'd say the exchange rate would be about seven days per orgasm.
				jock I'm... Gorgeous...
				liz You are. There's no downside to staying like this, but if you want to turn back all you need to do is abstain from cumming.<br>So, you're all paid up. Be sure to let us know if any complications arise, alright? I'm sure you want to get acquainted with your new self. Here's a pamphlet, I recommend the documentary "Ex-change", it covers a similar procedure.
				jock I... I'll check it out. Thank you!
			`);
			addFlag("woman");
			writeFunction("writeEvent('jockBB')", "Later");
			break;
		}
		case "jockBB": {
			writeHTML(`
				t Barely cognizant, Jenny tries her best to tick up a mental counter, to keep track of exactly how many times she's cum so far.
				im images/jock/bb1.gif
				t Unfortunately for her, keeping track is tough. Some flashes of pleasure are much hotter than others, and some last so long it isn't clear where one ends and another begins.
				im images/jock/bb2.gif
				t Twenty five? Six? She passed out for a moment and might've cum during that lapse of consciousness, did that count?
				t She tries to focus and glances over at a nearby clock. Accounting for the drive home and the stop at a specialty shop...
				t It's only been about five hours since the operation.
				im images/jock/bb3.gif
				t As her hips shudder once more, it's clear there's no reason to bother counting anymore.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "milfA": {
			writeHTML(`
				define milf = sp Lisa; img scripts/gamefiles/profiles/milf.jpg;
				milf Is... Is he alright? 
				liz He's just sleeping. His body is still adjusting, we made some physical changes in addition to the mental ones. Take him home and don't worry, you should get some rest too. 
				milf And he'll really be better? 
				liz I guarantee you the bullying will be a thing of the past. 
				milf I... Thank you so much! 
				t After a few moments of Lisa showing her gratitude and being shocked at the low cost of the treatment, the mother and her son head home. 
				t ... 
				milf He's sleeping so peacefully... Oof! You've gotten a lot heavier too! I remember when I could... Hmmrg... Hold you in my... Arms! 
				t Lisa manages to carry her son out of the car. Curiously despite not being particularly close to any of them, some of the other moms in the neighborhood offer to help carry the weight. Each of them in their own slightly unsettling way lets Lisa know they'd love to come by and offer their well wishes to her son once he's awake. 
				milf <i>Strange... I didn't know any of them cared about me or my son...</i>
				t Once she's inside the group of mothers set down James on the bed. A few of them seem hesitant to leave, but reluctantly do so once Lisa promises to keep them updated. 
				t Exhausted, Lisa strips down and falls asleep in her own bed. 
			`);
			addFlag("woman");
			writeFunction("writeEvent('milfAA')", "Later");
			break;
		}
		case "milfAA": {
			writeHTML(`
				t Lisa awakens to the smell of food. A real breakfast, not the five-minute cereal meal and bruised orange she usually makes. She smiles contentedly as the scent of bacon wakes her up, only for her to jerk up as she realizes her husband is gone and her son can't cook. 
				t She sprints out of her room to the kitchen, almost tripping on the smooth floor, only to find her son standing at the stove frying up some grub. 
				son Morning mom! I was thinking I should take over breakfast making from now on. I really should learn how to cook already, and, well, if I get any skinnier I might snap! 
				t He looks almost the same. He's the same weight, still as scrawny as before, but in some ways he looks completely different. His hair and face are clean, he's showered and groomed, and he looks happy just to be alive and in the moment. His voice has an energetic buzz to it, like his day is better just because he gets to see his mother. 
				milf I... I don't... 
				son It's almost ready. I started cooking the more fragrant foods last. You sure came out in a hurry though, you must be as starving as I am! 
				t James turns around holding a full plate of food. The eggs are a bit messy and some of the bacon is a bit overcooked, but it looks delicious nonetheless. 
				milf You... You're smiling... 
				son Yep! For a long time it didn't seem like there was a point, but I get it now. I wanna smile because it makes me happy, not the other way around. It makes other people happy too, so-<br>You're crying? What's wrong? 
				milf N-nothing! Sorry honey, it's nothing. 
				t Lisa pulls out a chair and takes a seat, but jumps a little in shock as she sits down.
				t In her haste she'd forgotten to put on anything, she's still in her lingerie. 
				milf Oh! I'm really sorry, I'll be-
				t James looks at her confused as he sets her plate down. 
				son What's wrong? 
				milf I... I just... 
				t There's no leering or indecency in his gaze, she can feel her heartbeat quicken as their eyes meet. 
				milf It's nothing... <br><i>What am I doing? There's no way he hasn't noticed... I should go and change, and... But if I call attention to myself... </i>
				t Voices bounced around inside her head to and fro, logical voices battling, saying 'go back and get changed!' or 'he's your son, it's fine so long as you don't draw attention to it!'. 
				t But a darker, more sinister voice quietly whispered 'You want him to see.' 
				t For years she'd known her little boy was growing up, that she was an attractive woman and that he wasn't exactly performing well with women at his school. Logical reasoning and plenty of... Evidence... Had revealed that her son was using her body as jerk-off fuel. 
				t The thought disgusted her. It tainted her idea of her beloved baby boy into just some creep jerking off.
				son So, how is it? 
				milf Mmm... It's really good.
				son I followed instructions online, it turns out they're a lot easier to follow if you study them a lot first. 
				t He keeps going on, but eventually Lisa starts to tune him out. His enthusiasm is infectious and she's happy he's improving, but there's something unmistakably wrong about the feeling in her chest whenever she looks at him. 
				t A slip of her hand and her fork drops beneath the table. She stops him from getting up and goes beneath herself. 
				t And yet she stops herself from going back up. Something about being down on her knees feels... Right. James's legs shift, and she finds herself hungrily eyeing the crotch of his pants. She moves in closer. 
				milf <i>The physician wasn't very specific about what she changed... I... Really should... </i>
				t But before she can get any closer her son stands up and steps away from the table.
				son Mom? What the hell is going on with you? 
				milf Wait, I can explain! 
				son I thought it was an accident or something, you coming out wearing something like that. And now you're trying to do what exactly down there? 
				milf I just... My fork... 
				son Is in my pants? Listen mom, I get what's going on. And it can't happen. 
				t She's at a loss for words as she crawls out from beneath the table. 
				son I've been thinking maybe it's time for me to get my own place. Strike out on my own, you know? I know you've been lonely without dad, maybe me moving out will give you the space you need to find someone else. 
				t The voices in her head go quiet. Logic is fading and panic is setting in. She didn't want this, to be alone in an empty house. Guided by some bizarre desperate logic to make him stay as he turns to face her, she does something unthinkable. 
				im images/milf/aa1.gif
				t Tearing open her lingerie top, she exposes herself to her son. 
				t As he walks towards her she can see it in his eyes. His idea of her as a strong respectable single mother being shattered. The only thing in front of him is a desperate pervert exposing her breasts to her own soon. 
				t Her body quivers and shakes, fluid drips through fabric onto the dining room floor, the look in his eyes in his eyes being enough to trigger an orgasm.
			`);
			writeFunction("writeEvent('milfAAA')", "Continue...");
			break;
		}
		case "milfAAA": {
			writeHTML(`
				t Silence is broken by a slap to the face.
				milf Nnnhg~! 
				son You bitch. You're so desperate for dick, <b>any</b> dick, that this is how you act? You get this is illegal, right? That you're throwing your life away to be some degenerate slut? 
				milf I don't care! Please stay! I'll do anything, you can slap me again! 
				t And he does, smacking her in the face hard enough to send her to the ground. She twitches and shakes in a second orgasm. 
				milf Fuck... You're treating me like a whore~! 
				son This really is what you want? 
				milf Yes~! I'll do anything! 
				t Rationality had long since vanished from her mind. He didn't seem like he was leaving, now she just needed to <b>really</b> convince him to stay. The thought of disappointing him felt like a stabbing pain. 
				t James places his hand on his mother's cheek. She holds her breath as he pulls down the zipper of her jeans. 
				t His cock flops out onto her face and she takes a deep breath. It seemed unchanged from the medicenter's procedure, but to her the cock was anything but average. To her, it was her entire world. 
				im images/milf/aaa1.gif
				t He seemed so different, looking down on her. So fearless and confident. He looked at her like she was a piece of meat ready to be <b>devoured</b>
				im images/milf/aaa2.gif
				milf <i>Fuck! This cock is gonna make me cream like a <b>BITCH!</b>
				son You like that? From now on I'll be making breakfast for myself, you'll need to feed yourself. You get what I mean? 
				t She tries to moan out an 'Mmhmm!' between gags and glurks as she's impaled on her son's cock. 
				son This is the start of a new daily routine, got it? Every morning I'll relieve myself in your mouth and you'll greet out neighbors with a jizz-caked smile. Whenever I want I'll bend you over and take your pussy and ass, you're <b>MINE!</b>
				t She squirts again through her lace panties. The rhythmic thrusting goes on and on, her vision starting to fade. The last thing she sees is her son's abdomen mashing against her face as he hilts himself balls-deep in her throat. 
				t She doesn't know how much of this is the medicenter's, but suddenly the interest all the other women were showing in her son began to make sense. 
				im images/milf/aaa3.gif
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "milfB": {
			writeHTML(`
				
			`);
			writeFunction("writeEvent('milfBB')", "Later");
			break;
		}
		case "milfBB": {
			writeHTML(`
				
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "junkieA": {
			writeHTML(`
				define junkie = sp Jen; img scripts/gamefiles/profiles/junkie.jpg;
				t Jen moans as she opens her eyes. The clinic is designed to be relaxing. The plain white tile ceiling, the soft light fixtures, the two-foot horsecock in Jen's peripheral vision...
				t Jen closes her eyes again and tries to wake up, but to no avail. She opens back up again to make sure she's awake, alive, and definitely the owner of the obsidian shaft of horsemeat.
				liz Good morning, you've been out for a while now. Sweet dreams?
				junkie I... I've got a horsecock.
				liz Yes you do. The damage to your genitalia was too severe, I'm afraid.
				t Normally that sort of news would devastate a woman, but a shaft like Jen's new one does a great job to mitigate that sort of loss. Her shaft throbs, new chemicals surging through her body, and a sense of power and size sweep over her.
				junkie It's so... Big. And just the air on it feels incredible...
				liz Yes. You're the proud owner of grade-A stallion meat from a top quality stud. Our technician is no slouch either, would you like to touch it?
				junkie But the price, I can't-
				t Jen's brain goes from grey matter to putty as Liz grasps the pillar of horse dick.
				liz The fact that we helped someone in need is more than enough to make up for it. Plus, Bitch Medicenter could always use the PR.
				junkie So good~!
				t Jen is no virgin to a handjob, not even close. Years of self conditioning have made jerking off more a habit than a joy, but this cock is brand new, untouched by a woman's hand.
				junkie Gonna... Fuck~!
				t Within moments Liz's stroking has summoned forth Jen's orgasm. Jen squirms like she's just discovered masturbation for the first time. Jen pants and squeals as her cock and balls work to push out the month-old backed-up load, filling the room with the scent of musky cock sludge.
				junkie Guh-Cumming~!
				liz Good, good, just relax and nut. We need to get out all that backed-up human sperm. We didn't do this completely pro-bono I'm afraid. Your new cock will be producing very valuable 'stud-juice', which is medicenter property.
				t Uncaring that she's effectively sold out the rights to her jizz, Jen thrusts into Liz's hand. With every spurt, the contents of her nutsack have less and less human DNA inside them. Just as she finishes cumming, she doesn't have time to rest. There's an audible gurgle from her nutsack and a pleasant fog fills Jen's head.
				liz Now, we'll be taking your new sperm auction off to ranchers, so be sure to come here regularly to be milked. You can impregnate women as well, not with your own DNA of course, but be sure to let us know if you do. We'll be keeping a close eye on anyone you impregnate with the medicenter's jizz... Hold on, are you even listening?
				junkie Fuck~! Fuck~! Wanna cum~!
				t Jen has completely tuned out everything aside from the feeling of the hand on her horsecock and the fat, gurgling nuts hanging below.
				liz Well, I suppose that's the right attitude. From the sounds of it your new balls have already begun production. Would you care for another handjob? Maybe my breasts? Oh, and we have quite the assorted array of onaholes, both the plastic and living variety.
			`);
			writeFunction("writeEvent('junkieAA')", "Later");
			break;
		}
		case "junkieAA": {
			writeHTML(`
				t Jen groans as she slams her length balls-deep into the jizz extraction machine. From the outside it looks impersonal, a collection of tubes leading to a container of white glorpy fluid. Yet on the inside are hundreds of different types of textures and aphrodisiac lubricant designed solely for the purpose of allowing anyone with a dick to put aside conscious thought and spray cum as hard as possible. 
				t Jen pants, exhausted, as she leans against the machine for support. 
				sp junkie; I can't... I'm done... 
				t Even with the top of the line design and chemical additives, seven loads is pushing the imit even for a virile stud. 
				t The entire room is nearly fogged over, the smell of sweat and cum is so thick in the air it's visible. Yet the head researcher Liz is unfazed.
				liz Very good then, give yourself a few more thrusts to make sure you've milked out every last drop. Now, I see you submitted a report asking that you be able to cum on your own time? 
				sp junkie; Yeah... My friend found out about the treatment... She's a size queen, so she's been hounding me about my dick since then. 
				liz Hmm... Trying to factor in the going price on your average load, then accounting for how much your debt would increase... It's all a bit complicated. How about we simplify this. You meet a monthly quota and you can squirt away all you like on your own afterwards. Let's say four liters? 
				sp junkie; That's... That's more than a gallon. Even if I'm saving up all month I can't... What happens if I can't meet the quota? 
				liz That's no problem at all! Here, let me see... Ah! 
				Liz pulls out a number of tools. Whether they look terrifying or arousing enough to make you leak on sight is entirely subjective.
				liz Firstly we have a top of the line chastity cage, similar to the one we offered you before except this one has a design to constantly stimulate the head of your cock and a growing tube that will stimulate the inside of your urethra. Wearing this for a month often doubles output, although wearing it longer allows the tube to actually stimulate the contents of your nutsack directly and-
				sp junkie; NO! No, no. Ever since my friend found out I need to hold myself back from cumming she's been relentlessly teasing me. If she finds out I'm wearing one of those...
				liz Ah, no problem then. We also have an onahole laced with several performance enhancing drugs. 
				t Liz holds up a remarkably realistic looking fleshlight. So realistic in fact that as Liz strokes the lips of the toy, it quivers slightly and leaks a clear line of fluid. On the side of the toy is the word "Daisy". 
				sp junkie; Is that... 
				liz Yes, top of the line. She volunteered for the treatment to pay off a load, law school is quite expensive these days I'm told. She's due to be turned back in a few weeks, but I'm sure you could convince her to stay your toy quite easily with that tool of yours. 
				sp junkie; I don't... I heard people get addicted to those things... 
				liz Absolutely! Obviously you should only use them in moderation, but who wouldn't get addicted to a girl like this? Holding her in your hand, feeling her entire body wrapped around your cock, knowing the only thought she can even have is a desperate begging for you to pump her, inflate her like a jizz balloon and let every fiber of her being cum as hard as a human onahole can! Ah, I see you had another load in your after all. 
				t True to Liz's word, Jen has resumed slamming her meat into the extraction machine. Sweat drips down her face as her overworked balls gurgle to meet her need to cum.
				liz You know, maybe your 'limit' is more of a mental block than anything else. All these treatments honestly might not even work out for you. Increasing your cum generation would help, but it'd increase your debt as well. Maybe there's a sweet spot, but really you run the risk of enhancing yourself so far that you'll be spending every waking moment focused on your overproductive stud sack. There are over the counter supplements, but the ones that claim to trade brainpower for sexual output are a lot more effective than they let on. 
				t Liz kneels down. Jen is wantonly thrusting against the machine, her fat pair of inhumanly thick balls swinging in the air. Liz flips a switch on the machine, causing Jen to stop in surprise as, at the moment she's balls deep, the machine comes to life. Hundreds of small, soft nubs, a rhythmic pulsing, and a gentle suction activate to stimulate her foot-long horsecock. 
				t As Jen moans and her legs quiver, Liz gentle cradles one of her fat balls. 
				liz Maybe the best solution is the cheapest. You say your friend likes teasing, yes? Why not bring her over? If she were right here, dutifully worshipping your stud nuts and gently coaxing out your magnificent swimmers, maybe even slurping this pair down to clean them of this lovely-looking sheen of sweat, you would have no trouble at all meeting your quota, right? 
				t The thought pushes Jen over the edge, her balls tightening hard enough that the cradled nut is lifted from Liz's hand. She shatters her previous output record as a splortching sound fills the room louder than the whrrr of the extraction machine. 
				liz That's... Four and a half liters, fantastic! See? With only a month of abstinence and a top of the line semen-slurper machine you had no trouble at all meeting your quota. Feel free to splurt as much as you like for the month, so long as you can make next month's quota of course. Ah, and if you do bring your friend please be sure to recommend our bodymod services as well. 
				t Jen just nods absentmindedly as she staggers back, her brain totally fried from six consecutive orgasms after holding back for so long. Despite her exhaustion though, it's clear having another session with the amazing machine is the only thing her mind. 
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "junkieB": {
			writeHTML(`
				define junkie = sp Jen; img scripts/gamefiles/profiles/junkie.jpg;
				t As Jen wakes up, she rubs her eyes and looks around.
				liz Ah, good morning. You were out for a little longer than expected. Luckily the treatment was a success.
				junkie Really? I don't feel too good, I feel kinda blo-ghhh~!
				t As Jen sits up, her abdomen puts pressure on a small bump on her pelvis.
				junkie Wh-what did you do?
				liz I think the real question is 'what was I thinking, going to some back-alley hack shop?' the damage to your penile nervous system was extensive, I'm afraid you'll never properly cum from penile stimulation again.
				junkie N-no... B-but sitting up just now, it felt really good.
				liz Ah, that's where Bitch Medicenter has come in. We couldn't undo the existing damage, so we've worked out a sort of loophole.
				t Liz pushes on the small bump on Jen's pelvis, causing her body to tense up in unexpected pleasure.
				liz This, my dear, is your newly expanded prostate gland. All of your backed up sperm is stored in here once your balls become full, no more unnecessary expansion of your poor testicles now.
				t After Liz removes her hand, Jen can't keep hers away and keeps pressing on the bump.
				junkie So good~ Feels so goood~!
				liz Now, please keep in mind there is a serious downside, as your sperm production levels remain the same. This means that eventually your gland will continue to expand to unhealthy levels, and if you ignore it, it could burst.
				t This is enough to sober Jen up.
				junkie B-burst? W-what do I do? Pushing on the bump doesn't seem to be enough...
				liz Not to worry, dear. Unlike some other clinics, we here at Bitch Medicenter care about our clients even after treatment is finished. Here.
				t Liz draws back a curtain to reveal a stool with an absolutely massive horsecock dildo sitting on it. It's at least a foot long, probably more.
				liz To relieve your swollen prostate gland, jerking off won't work at all. You'll need to forcefully mash all that cum out regularly. The bigger the tool used the better, so at no extra charge we put you through the 'size-queen whore' treatment as well.
				junkie Oh my~... It looks really big~...
				liz Ah, yes. Your brain chemistry has been altered to help encourage bigger insertions, so your sperm production has already begun to kick on. Quickly now, straddle it.
				junkie B-but I'm not ready yet!
				liz Don't worry. Did you read the 'size queen whore' package? Self lubrication is part of the modification, now straddle!
				t Despite the stool being quite low, Jen needs to stand on the tips of her toes to align her lower body with the dildo. Reluctantly, she presses the tip against her hole.
				junkie A-are you sure this is safe?
				liz Absolutely. Your flexibility has been greatly increased, and your lubrication is working just fine.
				t Liz is correct, as glossy clear fluid coats the entirety of the donut-shaped puffy rim of Jen's ass.
				t Pushing down hard, Jen manages to force the wide tip of the dildo into herself.
				junkie Nnn... It doesn't feel as good as I was hoping... But it doesn't hurt either.
				liz Ma'am, you need to go deeper. We didn't alter rim sensitivity to avoid you casually teasing yourself, as it would only worsen your condition.
				junkie Okay...
				t Jen lowers herself further onto the massive sex toy, stopping almost five inches down when the tip of the toy bumps into a into something big and spongy.
				junkie Ooough~!
				liz There it is, very good! Now, you'll need to apply stimu-<br>Um, ma'am?
				t Jen bounces up and down rhythmically, punching her inflated prostate from below with shallow thrusts. Liz sighs.
				liz Ma'am, please.
				t Liz grabs Jen by the waist to hold her steady.
				liz Teasing yourself like this is unhealthy and pointless, you need to go... Much... HARDER!
				t Liz pulls Jen down with all her might, slamming her down to the base of the horsecock.
				t Jen lets out a high pitched scream. Just bumping the toy against her prostate had felt better than cumming did before, but how the toy had completely mashed her prostate down to size.
				t She wasn't cumming. Cumming means bursts of cum, one after the other. Squirting cum out of her balls like squeezing water out of a sponge. This was smashing that sponge with a sledgehammer. Months of backed up sperm shot out of her flaccid cockhead like a faucet on full blast.
				t Her voice gives out as the stream weakens quickly, the force of the jet powerful enough to leave her urethra gaping.
				liz Now, ma'am, you'll need to do this regularly. Your prostate will continue to grow constantly, it must absolutely be, to put it bluntly, 'mashed into gooey paste' very regularly.
				t Liz, still holding Jen by the waist, lifts Jen off the toy. Without the horsecock putting pressure on it, The bulge on Jen's abdomen begins to return to its previous shape, albeit smaller.
				t But that's short lived as Liz slams Jen back down, causing another powerful spray of sperm to cover the wall.
				liz Now please keep in mind you'll need to vary this often. Just using one cock might cause your prostate to deform to it's shape, reducing effectiveness. Switch often. Other models like the  'Double Canine Knot Dog Cock', 'BBC Womb-Puncher', and the 'Bumpy Demon Dick Womb-Ruiner' would be good places to start. A well endowed partner could also help, or fisting play could work too.
				t Up and down, Liz drags Jen to the tip of the horsecock before pushing her back down. Every 'thrust' enough to mash the prostate and splurt out more cum.
				liz Larger buttplugs can help avoid excessive growth while you sleep, vibration has also been found to soothe people of your condition. It is safe to sleep without them of course, provided you thoroughly slam and smash your super engorged prostate once you wake up. And of cou-... Oh my, Jen?
				t Jen is completely out of it, the pleasure from the first thrust having completely broken her mind, she fainted.
				liz Hmm. Well, I suppose it's to be expected. Let's see how well you sleep with the dildo inside of you for now, and I'll give you a refresher later.
			`);
			writeFunction("writeEvent('junkieBB')", "Later...");
			break;
		}
		case "junkieBB": {
			writeHTML(`
				liz Ma'am, this is a sensitive measurement tool designed to give data on your prostate. It just <i>feels</i> like a sex toy.
				t Every time Jen comes in for a routine checkup, she leaves with a hundred snippy remarks bouncing around in her head, all of them left unsaid, as the only thing she can actually manage to say is...
				junkie Guuuhd~! I can feel mushing my prostate~!
				t A torrent of backed-up jizz splatters onto the floor, the mess has a consistency similar to long worms made from jelly. They pile up beneath Jen's cock, not pooling like normal sperm would.
				t A quick snack from Liz tells her what she needs to know. The way she slurps up a strand of cum is very professional.
				t This is the forth checkup in two months. Jen should know how to effectively relieve herself by this point, but something about Liz's technique...
				t She certainly wasn't failing to get off enough on purpose or anything, just so she could have Liz completely crush her bitch-button of a p-spot. That would be rediculous.
				liz Tsk tsk, I can taste that you're pent up. Is your prostate bigger than before?
				t Jen's only answer is to wantonly moan out a string of obscenities, pushing her hips back to thrust in just a few more inches of the veiny, studded dildo stuffed up her asshole.
				liz Hmm, curious. Your body has adapted to the modifications in an unexpected way.<br>Not in a bad way, but rather... Hmm... Let me try something.
				t Liz gently places her palm over a bloat in Jen's midsection and draws back the dildo. In one smooth motion she thrusts back in and presses on the bulge, assaulting Jen's prostate from both sides. What Jen screams out as her wagging cock spurts even more cum can't be described as words, let alone anything resembling english.
				liz If I'm correct then you shouldn't be at risk of bursting, rather you should actually be able to grow... My, almost indefintely.<br>Permanent prostate growth as a result of chastity, mind you your cum will likely just get even thicker. The smell would be so overpowering in a week that...<br>Would you be willing to stay here at the medical center to run some tests?
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "junkieC": {
			writeHTML(`
				define junkie = sp Jen; img scripts/gamefiles/profiles/junkie.jpg;
				liz Wakey wakey~
				junkie Hmm...?
				t Jen groggily rubs her eyes, before wakening energy begins to course through her.
				junkie Th-the treatment! Am I finally-
				t She sits up, only to be disappointed that her balls are still the size of watermelons. She experimentally pokes her flaccid cock, and feels...
				junkie ... Nothing?
				liz Indeed. The damage to your system from whatever clinic you visited before was extensive. To prevent further injury, all pleasurable sensation to your penis has been shut down.
				junkie N-no... No! How could you!? I just w-Gghhhgg~! 
				t To calm her patient, Liz gently pushes down on Jen's heavy ballsack, causing a massive surge of pleasure to arc through her brain.
				junkie W-what was that? It's never felt like that before...
				liz Please, ma'am, understand that Bitch Medicenter is not like other clinics. We care about you, and will ensure you can live a happy life after your treatment. We were not able to repair the damage to your penis, so we've constructed a workaround to ensure you are able to evacuate your testicles regularly. If you would lift your legs?
				junkie O-okay...
				t Still nervous, Jen lifts both of her legs up while lying back on the bed. To an untrained eye, it would look like she's been put into the 'mating press' position.
				liz Very good. Now, the changes were extensive, but there were no extra charges for additional modification. You'll never be able to masturbate like you did before, but our wonderful technician has altered your testicles to allow for the next best thing.
				t Liz gets onto the bed and gently lifts one of Jen's massive balls in the palm of her hands.
				t Jen's body begins to shiver as Liz draws the testicle to her chest, enveloping it in a warm hug, before squeezing <b>hard</b>.
				junkie Gggghgg~!!!
				t Warm semen is forced out of Jen's flaccid cock, splurting onto her chest and face.
				liz Now, regular squeeze sessions should be enough. Simply take four hours out of your day every day to thoroughly empty your fat nutsack, and make sure to clean up after yourself.
				junkie F-four hours? That's even longer than it took before... But at least I can cum again...
				liz Well, there is a way to do it more quickly and force it all put at once in a few minutes. It's perfectly safe as well, it's just that some patients are a little off-put by it.
				junkie Really? Please, tell me!
				liz Of course, just one moment. 
				t Liz slides off the side of the bed and begins digging through a drawer.
				liz Would you be fine with a demonstration?
				junkie Yes, please.
				t With a coy smile, Liz finally finds the tool. A laminated wooden paddle, air holes in the center to ensure lower resistance when swung through the air.
				liz Very good then! Now, please hold still. This could seriously hurt if anywhere besides your ballsack were to be spanked like this.
				t Jen gulps as Liz picks up the still-packed nut that hadn't been squeezed.
				t With a resounding *CRACK* the room suddenly erupts with the sound of Jen screaming and the audible *SPLURT* of her flaccid cock spewing cum.
				liz Now, be sure to evacuate yourself fully with this method. Leaving yourself half-full will only cause your production levels to increase.
				t *SPANK*
				t *SPANK*
				t *SPANK*
				t Jen's voice reaches octaves too high to be audible, and her eyes roll back in her head as her cock splurts with every strike, until finally nothing more comes out. Her left nut is a bright red, a large indentation in it from the paddle.
				liz Very good. Now, you may have noticed that there was no pain, or if there was it was overshadowed by mind-overwhelming pleasure. Once nothing more splurts out you can safely move on to the next one.
				t Jen says nothing in response, her eyes vacant and mouth leaking drool. But that changes once Liz gets to work on the other nut.
				t *SPANK*
				t *SPANK*
				t *SPANK*
				liz See? Our technician truly is a miracle worker. These nuts will be back to their usual state after a good night's sleep. By the way, you may want to have a friend or parent perform this in case you faint during the process.
				t Jen writhes as Liz places her balls back onto the bed, reflexively seeking out more of that wonderful sensation.
				liz Now, I know it feels quite wonderful, but this really is completely different from jerking yourself off. Continuing the spanking after your balls are empty will only cause them to fill faster afterwards, so be sure to set limits for yourself and your partner. Secondly, once you start, you absolutely must finish draining yourself. Try to do it early in the day, otherwise you could accidentally sit on your fat nuts on a public bench or something, ruining your clothes, and you'd have no choice but to immediately begin spanking yourself empty right there.
				t Jen absentmindedly jerks at the thought.
				liz Wonderful, I'll take that as a 'yes I understand'. If you ever end up needing to impregnate a woman, I'd recommend getting a third party to spank you while you're inside her. Your flaccid cock won't be impressing much of anyone, but the feeling of having your cervix flooded by a jet of abused sperm is quite lovely... Or so I've heard. Anyways, please. Let me know how you feel in the morning, alright?
			`);
			writeFunction("writeEvent('junkieCC')", "Later...");
			break;
		}
		case "junkieCC": {
			writeHTML(`
				t A few weeks after her treatment Jen rubs her eyes, waking up to a very familiar morning scene.
				t Her sheets are absolutely ruined with thick jizz, she must've rolled over in her sleep, yet her nuts are still the size of softballs.
				t Her iron-hard cock stands at attention pointed right at her face, but she knows stroking herself won't have any effect on the built-up lust.
				sp junkie; Well... If I need to wash the sheets anyways...
				t She takes a deep breath and squeezes her legs together, and with an audible splurt she soaks her face and pillow in a thick mat of sperm. Beneath closed eyelids her eyes have rolled back.
				t Again, again, again. Leaving a single drop of sperm means it'll build up faster, and tomorrow's load will be even thicker, even nastier.
				t Her beloved paddle sits next to her on the bed, but on days like this she enjoys the slowness of squeezing it all out herself.
				t Sometimes a good life means enjoying a blissful day to yourself.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "junkieD": {
			writeHTML(`
				define junkie = sp Jen; img scripts/gamefiles/profiles/junkie.jpg;
				t Jen slowly awakens from a dreamless sleep to a few pleasant sensations. The smell of strawberry perfume, the comfy bedsheets of the patient table, and most of all the feeling of her dick leaking.
				t It's a steady stream of clear watery fluid that leaks down the side of her dick, before the pleasure spikes and Jen's eyes shoot open as as a glunky bulge travels up her urethra to splurt out a glob of sticky white cum. It only travels a few inches, landing into a container held by Liz's waiting hands.
				liz Seventeen... Check. Oh, good morning. You've been a very busy girl today, careful not to get up to fast.
				t Jen slowly sits up, almost every part of her body feeling sapped of energy.
				liz I've been collecting your emissions for the better part of an hour. Normally I'd have an intern handle this, but they have a habit of snacking on the job.
				junkie I'm cumming again? You undid the effects?
				liz Well, yes, but also no. I'm afraid the damage was too extensive, so we've done a bypass. Basically the brain receives pleasure signals, and once there's enough the brain triggers an orgasm. What we've done is skip that buildup phase entirely. Now, whenever your balls have any reasonable amount of sperm inside them, they'll immediately be spurted out. Spontaneous orgasm, basically.
				junkie I... Will there be warning? How often will I cum like this?
				t Liz looks thoughtful for a moment. During the pause Jen's eyes move along Liz's plump, lipstick-covered lips. She can feel her balls shift slightly and there's a barely audible gurgling sound, but Liz ignores it like it's business as usual.
				liz Well, it really depends on your lifestyle. If you spend all day cooped up doing accounting or something, you'll probably cum maybe once every few hours. Plus your dick's stimulation has been reduced to put a halt to jerk off habits. That said anything that can build arousal will speed up the process. Testicle fondling, prostate stimulation, and if you've got an exhibition fetish just changing your condom in public could set you off. The downtime between orgasms could be as short as a minute. Especially given how good cumming can feel, you might be halfway to cumming again right after shooting.
				junkie A few minutes? Wait, condom changing?
				liz Of course! Now, a few social media posts about how we've undone the damage done by bodymods will be enough for us to pay for your treatment out of pocket. Maybe you could leave a review for us too. But you'll need to pay for your condom supply yourself. Your balls are basically in a near-constant state of production, and will only get more efficient. You'll want heavy duty ones for overnight wear, and 'stay-ons' for daily use. You don't want a full condom slipping off mid conversation, of course. Be careful though, 'stay-ons' can leak if overfilled, leading to jizz trickling down your leg. Tell me, do you have a lot of experience with them? 
				junkie With condoms? Not really. I just kinda clean up after myself with a towel...
				liz Well, there's no need to be worried. There are plenty of brands you won't even notice wearing. Although mono-molecule thin ones will probably burst after just a few shots. And cheer up, there are a few neat tricks you can do with them too!
				t To prove her point, Liz pushes a few filled jizz containers out of the way and takes a blue condom package from a side table. She unwraps it and pops it into her mouth. After a bit of finagling with her tongue, she blows a small bubble with it.
				junkie That's kinda cool, I guess. But how am I going to pay-
				t Liz interrupts Jen with an upraised finger, before Liz leans down to press her lips against the head of Jen's cock. In one smooth motion Liz's lips envelop the dick, effortlessly deepthroating the member and covering it in a smooth thin layer of plastic.
				t Jen goes silent, and her balls gurgle again a bit louder than before. Her hands on autopilot, she grabs Liz by the hair and holds her head against her crotch.
				junkie Ghhhg~!
				t Feeling the very familiar sensation of her balls draining, Jen pants open-mouthed as she inflates the condom in Liz's throat.
				t After a few splurts she pulls back, but gets stuck. Tugging on her cock, Liz lets out a glurk for the first time as the bulging condom refuses to budge.
				junkie Oh, uh... Sorry...
				t Liz sighs, or tries her best to with a jizz balloon bulging in her neck. She reaches up and tugs at the edge of the condom, before Jen pulls back and the filled condom slides off her cock, still in Liz's throat.
				t Deftly Liz ties the condom's opening into a knot, before slowly inching the balloon out. The squelching noises are enough to make Jen's balls grumble again, but despite the jizz balloon's size and the fact that she can't breath Liz slides the condom out with a practiced precision. Almost like she's done this before with a much larger condom.
				liz Ah~
				t Liz sighs as she hefts the balloon, at least two pounds of sperm filling it. It's dripping with saliva, but is otherwise completely intact and filled with the familiar off-white color of cum.
				liz A shame that I already had lunch today. This model is designed to dissolve in stomach acid anyways, but I can't be high for he rest of my shift.
				junkie That was awesome, but how am I gonna pay for- Did you say high?
				liz Why yes~! Well, a euphoric high. You should be able to afford a condom supply by selling you jizz now. It's been modified to have a more palatable taste and smell. Well, to some at lest. I prefer the unmodified stuff. It'll also have a variety of effects. Temporary sexual organ enlargement, sexual high, the usual stuff. You shouldn't have any problems finding a buyer, especially if you change condoms in public. That said, the medicenter will gladly purchase any excess. The seventeen canisters you filled already should actually cover the cost of treatment by themselves.
				t Liz sets the condom to rest on the table, it almost looks like a water balloon filled with cream.
				liz Now, some important notes. I know condom bursting is a popular fad these days, but you'll need specialized rubbers for that. Edible ones for oral, and specialty models if you want that feeling of the condom bursting inside someone's womb or ass. Also, many subjects of this treatment can develop some fetishes that could be... Troubling.
				junkie Like what?
				liz Well, with how often you'll be cumming into condoms, some people can feel a bit cooped up. They'll forgo the condoms and sit back with a crooked smile as they watch how far their new balls can splurt sperm. They might cover their rooms, their furniture, some even get a kick out of jizzing in public. Having a lovely conversation while they just start cumming onto the street mid-walk. Obviously you should have someone's consent before you cum on them, and if you're in public don't forget that the passersby didn't consent either. At the very least they could shout out 'I'm gonna spurt cum from my fat balls all over the floor!' before they lift their skirt.
				junkie I'll keep that... Mmm~ In mind... I think I need to cum again, miss.
				liz Oh, I only brought seventeen, and that last condom was my personal spare... Well, this is an emergency I suppose. Feel free to cum in my mouth as many times as you need, I'll have an intern bring in some more condoms for your ride home.
			`);
			writeFunction("writeEvent('junkieDD')", "Later...");
			break;
		}
		case "junkieDD": {
			writeHTML(`
				t On a snowy evening a bus comes to a stop. Each pedestrian inside has their own story, but only one of them is mid-orgasm.
				t Half awake, mostly tired from a log day's work, she still has the state of mind to hold back her moans as she feels another lance of pleasure traveling down her urethra, causing another splurt to fill her ultra durable condom.
				t She swallows dryly as her abdomen twitches in post-orgasmic pleasure, marking her fourteenth load of the day.
				t Yet what she doesn't realize is that while her condom is more than strong enough to contain more than a pound of thick, viscous semen, it's not something she can afford to just ignore. There's a single moment where an exhausted haze flips to blind panic as the end of the condom, pulled down by the weight of her enhanced sperm, slips over the ridge of her cock.
				t The next moments are in slow motion to her. The feeling of cool air on her cockhead, the sound of a makeshift jizz-balloon splatting against the bus's floor, the mind-fuck sensation of the aphrodisiac-laden sperm's scent frying her nostrils, and the next lance of pleasure from her cock as she cums again.
				t This isn't the first time an event like this has occured, but will be the first time the bus has hosted a drug-haze fuelled orgy.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "catgirlA": {
			writeHTML(`
				define cat = sp Daisy; img scripts/gamefiles/profiles/catgirl.jpg;
				define catgirl = sp Daisy; img scripts/gamefiles/profiles/catgirl.jpg;
				t With a jolt Daisy awakens from what was a deep sleep. Some kind of bizarre, musty smell filling her brain and sending her body into overdrive. One of the many factors of her catgirl treatment she couldn't decide between being an side-effect or a benefit. But the sudden jolt up causes her face to bop up against the source of the smell, something spongey and very, very large.
				t Someone grunts as Daisy instinctively nuzzles against the meaty appendage, her brain working overdrive to identify it as an absolute beast of a horsecock before it focuses on less important matters, like where she is and how she got here. She's almost pulled out of her mental haze by the sound of a curtain drawing.
				liz Good morning! Ah, I see you've become acquainted with your demonstration partner for today already.
				t Liz steps in to separate the mewling catgirl from the horsecock'd stud for a moment, giving Daisy a light slap on the face to bring her back to reality.
				cat W-wuzzah...
				liz Focus for just a moment please, I'd like to show you the results of the operation. This fine lady here is a volunteer who offered to help you realize your new body's full potential.
				cat New... Body...?
				t Liz steps back and Daisy takes a moment to look over herself. The first thing she notices is that she's smaller, at least a foot and a half shorter. The second thing she notices is how incredibly thick and soft her squishy thighs are. It's only after a few moments of delightful cooing and squeezing them that she realizes the same thing has happened to the rest of her body.
				liz We've basically transferred your height into thickness, I believe the proverbial term is 'shortstack'.
				t Daisy continues to explore her delightfully soft new form, paying special attention to her absolute bombshell of an ass, before a familiar scent catches her nose and she's drooling from both ends onto the bed.
				t Liz sighs. The catgirl's self-exploration show has distracted the volunteer stud, and the growing reaction to that show has distracted the catgirl. A vicious cycle ensuring that Liz's opportunity to further explain is over.
				liz Fine, fine. At least stand over here. I'll explain as I demonstrate, hopefully at least some of it will get through to you.
				t Liz takes Daisy by the hand to the center of the room. Standing at full height she's eye-level with the horsecock that's more than two-feet long and not even fully erect. While Daisy is distracted Liz kneels down to properly prepare the kitty for her play.
				t Daisy mewls as her asshole is suddenly spread well past it's old limits by a pair of soft hands, painlessly gaping at least three inches open as the cool air of the room plays havoc with her ability form a line of though.
				liz Oh my, this is actually quite fun. Your body's elasticity has been greatly improved. While your pussy is a bit too small for some of the more well-endowed out there, we've implemented a fun workaround by greatly simplifying and optimizing your digestive system.
				t Liz enjoys spreading and squishing Daisy's meaty hole for a moment until the very well-endowed stud watching the show can take no more. She steps forwards bumping her now very erect three-foot cock into the mewling girl's face, and grunts.
				t Liz picks up the mewling catgirl by her legs and Daisy's arms wrap around the physician's neck for support. Concern spikes through the catgirl's mind for the first time since she woke up as she feels the stud's cockhead press against her soft donut of a butthole
				t Daisy's eyes bulge out as a massive surge of anal pleasure decimates her worries. As an experienced girl, she's had more than a fair share of anal fun, but nothing she's ever taken before could ever compare to the stud's yard-long horsecock.
				t Liz gently nuzzles the catgirl's head with her cheek as the massive dick spears through her, creating a very visible bulge in her abdomen. Daisy waits with baited breath and pleasured shuddering as she waits for the stud to bottom out, to feel the glorious tap of massive nuts against her bouncy asscheeks.
				t And she waits. And waits. And as she waits the pleasure increases as the cock sinks yet deeper, now the bulge is in her chest and it's so large she could titfuck it.
				cat Oyugh god... How deep... Can it... ghhhhhoggh~
				t Daisy's ramblings are cut short as cloudy white drool from her mouth actually begins leaking more than her pussy is, before the bulge begins to travel up her throat.
				t It's the absolute strangest sensation of her life, feeling like a reverse-deepthroat as she closes her mouth, only to feel the spongey head of horsedick press against the back of her lips. The extremely potent taste of pre-jizz fills her mouth for a moment, and with one shove she finally feels the tap of the stud's ballsack against her ass at the same time as the cockhead pushes past her lips and spews a rope of precum on her face.
				liz All the way through flawlessly, the technician has truly outdone themselves this time.
				t Daisy does her best to gurgle in response as Liz does her best to hoist the speared catgirl up off the massive horsecock, only to force her back down until the flared tip slides past her lips again in a bizarre display of spitroasting, and then repeats. Each time the head of the cock slides back down Daisy's throat far enough she can verbalize her pleasure in sloppy wet groans, and her cunt gushes every time she 'swallows' the cock's head, but Liz and the the girl with the horsecock just ignore her like they ignore the growing pool of cunt-drool forming on the floor.
				t Finally it's clear the horsecocked girl is nearing her limits. She grabs onto Daisy's arms and pulls the human cocksock all the way down until the flared tip emerges from her lips again, the cock's urethra winking and shooting out another rope of precum that arcs into the air before splattering in Daisy's hair.
				liz Ah, she's too short, you're saying? Greedy girl, you've gotten too used to being balls deep in bigger girls. Fine, pull back a moment.
				t The stud whimpers and pulls back, allowing Daisy room to verbalize her pleasure again for just a moment until Liz leans forwards for a deep tongue kiss.
				t Her mind completely ravaged by by being anally ruined by a three-foot horsecock, all Daisy can do is let her eyes roll back at the feeling of Liz's tongue molesting her own, especially as she can feel the bulge of the horsecock traveling up her neck again.
				t Soon enough Daisy's jaw is being stretched wide again as her and Liz's mouths are no longer linked by interlocking tongue, but by a massive flared dick that's gone all the way through a catgirl shortstack only to have the head suckled by Liz.
				t Even for an experienced stud, Daisy's tight ass combined with an unconventional double-throatfuck is too much. The stud's balls tighten as a full load of thick sperm travels up her cock, causing a small yet very visible bulge to travel up Daisy's distended body. Daisy can feel the cumload as in goes up, up past her abdomen, up past her chest, and up her throat until she can feel the gout of sperm travel past her lips. Her thighs clench as the reality of how she's being used hits hard enough for her to cum while the stud's cock fires a round of grade-A jizz.
				t And yet unlike the ruined cocksock cumming on a stud's three-foot dick, Liz is the picture of grace as she dutifully swallows, even going so far as to continue to push herself deeper and mash her lips against Daisy's. As Daisy's vision begins to darken from a lack of air, Liz gently signals the stud with a soft tap on Daisy's distended stomach.
				t The stud pulls her still-cumming cock back, shuddering as it passes through two pairs of soft lips. One last load of cum fires forth, bulging out Daisy's cheeks before passing through her lips and being swallowed by Liz. Finally Daisy's vision goes black.
				t ...
				t Daisy wakes up a lot less violently than she expected, her eyelids gently fluttering open to see the ceiling of the resting room above her. A curtain is drawn open as Liz happily hums a strange tune, one hand rubbing a visibly distended stomach as the other holds a medical chart.
				t After a short checkup to ensure Daisy is in tip-top condition, she's discharged with a clean bill of health, a body that can only be described as short and stacked, and the earlier stud's phone number in case she ever needs a streaming partner.
			`);
			writeFunction("writeEvent('catgirlAA')", "Later...");
			break;
		}
		case "catgirlAA": {
			writeHTML(`
				catgirl Hey hey my hunnies! Welcome back to a full body fuck stream special! Today we have a new member of the family!
				t The stream starts and the chatbox flies by. Daisy looks excited, and reaches off the side of her bed to lift up a dildo larger than her torso, which she nuzzles affectionately.
				catgirl Ah~ First donation names it starting now!<br>'Dicky Dickboi'? That'll do. Everyone say hi to dicky!<br>'Acockalypse'? 'Peniscalibur'? 'Rectifier'? Pfft, 'The Government'? These are great guys, but now I need to buy more to use the names! Take responsibility, alright?<br>Now, gotta lube up!
				t She licks her lips and in a deliciously slow and deliberate motion she takes the thick head into her mouth and swallows down, down, down. Inch after inch vanishes until she turns so that her pert asshole is pointed right at the camera.
				t There's a single *glrk* as she pushes down even farther, and suddenly the tip of the dildo emerges from her ass to splatter the rim with lubricant.
				t It goes out, and back in, repeating as she lubes herself up by reverse-assfucking herself on camera.
				t She finally pulls off the toy with a long, loud slurping motion.
				catgirl Bwaah~!<br>For all you at home curious, the lube makes my ass taste like strawberries.
				t She wiggles her ass in front of the camera before readjusting herself, making kissing noises as the head bumps against her asshole.
				catgirl Mmm, this a good time to talk about the sponsor? No? Hehe, you guys are so spoiled~!<br>Good thing I am too~!
				t Wasting no time Daisy slides down the pole, inches go by as her asshole swallows more and more plastic dickflesh.
				t When she reaches the halfway point she massages the large bulge in her upper-abdomen, cooing at the sensation of being so full, and then she pushes down to sink even deeper.
				catgirl Omigawd, i'm so stuffed~!<nr>Bgghh... Hey, you guys wanna say hello again~?
				t She pushes down a few inches and leans towards the webcam. She opens her mouth and at the back of her throat the black cockhead can clearly be seen.
				t The stream goes crazy, and to cap off the moment Daisy pushes down a little further so that every detail of the reverse-deepthroat can clearly be seen until the rim bumps up against the back of her teeth. The audience is treated to quite the show as her tongue dances around in her mouth around the toy.
				t She swallows it back down, not gagging even once as she lifts her ass a few inches up.
				catgirl Oooh~! It tastes just as good from this end! I gotta thank that medicenter later!<br>Don't worry hunnies, I can breath just fine. You all ready for the main event?
				t The viewcount spiking even higher gives a good answer.
				t She smiles and sits back down until the black cockhead pushes through her grin. Spitroasted from one end she rubs the saliva-coated head of the toy with one hand, and holds a small black remote in the other.
				t With a single click every facet of her being from her asshole to her perky lips begins to vibrate.
				t She spreads her legs to show her pussy's reaction to the vibration, the special camera able to pick up every last line of clear fluid being squirted out as her body is wrecked by the largest vibe toy she's ever used.
				t She gurgles something unintelligible as she clicks the remote again, and again, and again, each time the power of the vibrator intensifies and her gurgling squeals get higher pitched.
				t Tears stream down her face as her eyes roll back, the the edges of her stretched-out mouth show she's smiling.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "catgirlB": {
			writeHTML(`
				define cat = sp Daisy; img scripts/gamefiles/profiles/catgirl.jpg;
				define catgirl = sp Daisy; img scripts/gamefiles/profiles/catgirl.jpg;
				t The very soft whisper of someone saying 'good morning' is enough to get Daisy to jolt upright. The sounds of machines beeping and people taking rooms over playing in her head like loud white noise. She clutches her ears trying and failing to block out the noise.
				liz The operation is almost finished. Aside from your hearing you shouldn't feel any different, that's normal. 
				t Liz speaks in a soft whisper, but Daisy can still hear her clearly.
				liz Now, I'm sure you're worried about how loud everything is, but don't worry. The procedure greatly increased the sensitivity of your ears, and we just need to apply a special lotion to the inside to keep the benefit while canceling out how sensitive they are to noise.
				t Daisy keeps her fluffy ears covered as Liz opens a drawer, pulling out a tube of some off-white fluid and a pink plastic dick.
				cat T-that doesn't look like a cotton swab, ma'am...
				t Liz softly chuckles as she applies the thick goop to the six-inch toy. Daisy's tail twitches instinctively at the sound of the lotion being spread across the dildo's surface.
				cat So what... I can get off on sounds now?
				liz Well, one kind of auditory stimulation, depending on how you word it. Ear, please.
				t Daisy's stomach drops as Liz approaches her, dildo in hand.
				cat Whoa whoa, hold on. I can barely make it through a cleaning, doc. There's no way you're getting any closer than that.
				liz If this were a demonstration I'd respect that, but this is part of the treatment. Unless you want to spend the rest of your life wearing noise-canceling headphones, I need your ears.
				t After a moment of hesitation, Daisy lets Liz approach her side. She closes her eyes and tries to tune out the blaring noises around her and the feeling of Liz's hands against moving along her fur... The dildo brushes against Daisy's ear, the slimy coating getting on her soft hair.
				t As the plastic cockhead bumps against the catgirl's inner ear her fears vanish along with all other thoughts. Her face is one of confusion and reflexive panic as she instinctively draws back before Liz grabs her by the head and puts pressure on the plastic cock. Unable to catch her breath Daisy's grits her teeth until, with a slick splortch, the dildo pushes into her ear.
				t Daisy's eyes cross and she tries to verbalize what she's feeling, but only a high-pitched whine escapes. Her grimace has become a very crooked grin, her eyes cross, and as the dildo slides in farther the plastic toy begins to run havoc with her mind.
				t Lights pop in and out, slimy sounds reverberate through her ear and vibrate through her body, and the sensation causes the catgirl's leg to start twitching reflexively. With one last bit of effort Liz forces the dildo plastic balls-deep into Daisy's head, a sudden jet of girlcum spraying out from between the catgirl's legs as she giggles drunkenly.
				t The walls shift like they're made out of animal fur and what feels like electricity zaps through her cunt. Liz Pulls the dildo out, pushes it back in, and twists it for good measure before getting into a rhythm of thrusting. Each thrust causes another squirt of girlcum, like Liz is mashing a 'CUM' button Daisy didn't know she had.
				cat Ghh... Sqshing... Braayy...
				liz Mhmm... Just relax, okay? Hold on, I need another one.
				t Liz pushes and sinks the dildo to the hilt again. The mindbreaking thrusting stopped, Daisy has time to focus on the feeling of fullness in her head. Trying to form thoughts is hard, and parts of her body aren't responsive. Not numb, but like they're getting fucked up signals from her brain. She hears the sound of a drawer again, followed by a slick goop being rubbed, before she feels Liz grab her by the other ear.
				t There's a lot less resistance to the insertion this time, but as the dildo is pushed deeper into her head Daisy writhes and twists in Liz's grip. She can't form full thoughts anymore. The twitching, her jaw dropping, her tongue lolling out, and her orgasmic screaming are all the result of a body on autopilot getting some very confusing signals from her brain.
				t As Liz hilts the second dildo could swear she smells flowers mixed with ozone, her vision goes white as her brain blacks out.
				t ...
				t Daisy wakes up in a strange way. She's already sitting up and her eyes are already open, it's like her brain has only just turned on.
				liz Helloooo? Are you- Oh, you're awake? It seems the hearing sensitivity has been fixed. How many fingers am I holding up?
				t Daisy stares at the hand making a peace sign in front of her. She tries to say 'two' but all that comes out is gibberish. Instead she settles with holding up two fingers of her own.
				liz Good, so it's mainly just the language centers of of your brain that have been displaced. Potentially critical thinking too. You'll be staying here today though, your brain needs time to rewire itself, basically. A lot of gray matter got mushed around. But, on the plus side, the treatment was a success. Your ears are one-hundred percent safe to use for sexual pleasure now.
				t Daisy lifts her hand to her ear, gently massaging the entrance that until recently was stuffed with a sex toy. And with only the slightest bit of pressure...
				cat Ghh~!
				t Her body twitches, feeling like a direct connection to her pussy. Her body still instinctively seeking pleasure surprises her, instead of reaching for her pussy both her hands go to her ears seeking pleasure.
				liz You'll want to be careful about the size of toys, or partners, that you have fun with. You won't break, but you'll have a hard time forming rational thoughts and you'll need to give yourself time to adjust again... Err, big toy make you squirt squirt, but make kitty dumb dumb. Okay?
				t Daisy nods along absentmindedly.
				liz Good! Now, feel free to have fun passing the time, we've got sensors in the room to make sure you're safe. Don't worry about hygiene either, you've been well cleaned out and should stay that way. Feel free to push your limits, this is a safe... Place!
				t Liz hefts out a solid, wobbling block of fake flesh in the form of a foot-long dildo onto the bed, and the catgirl's ears twitch as her pussy clenches.
			`);
			writeFunction("writeEvent('catgirlBB')", "Later...");
			break;
		}
		case "catgirlBB": {
			writeHTML(`
				cat Hey hey my hunnies! Welcome back to another mindfucking sub special!
				t The stream starts and the chatbox flies by. Daisy grins smuggly and her ears twitch in appreciation.
				cat You guys have been waiting so long! I guess you really want me to get started, huh? Hehe~!
				t She hefts up a dildo, at least nine inches long. She softly strokes it as she shows off it's unusual shape.
				t It has a tapered tip and is lined with nubs like those of a cat, while the end is bulgded out in a large knot.
				cat This soft little bits along the shaft here are designed to cause ovulation in girls, pretty cool, huh? Can you guys imagine what they'll do to my brain? Hehe~!<br>Alright, I gotta be picky with lube today, I'll be smelling this for months...
				t She makes her selection from a large pile of lubricants and adjusts the camera so her whole body is showing. As she lubes up the shaft she's careful to thoroughly coat every nub.
				cat Just remember guys if I fall off the bed just use your imagination, kay? Kitty gets twitchy she's scrambling her thinky bits.<br>Okaaay, here we go~!
				t Millions watch as she pushes the tapered tip of the penis into her ear, the camera catching every small twitch of her facial muscles as she pushes in.
				t Three inches in and all seems fine, until she tugs at the dildo and her legs flail for a moment.
				cat Ahaha~ yeah! That'sh theeeee shtuff! Deeeper~!
				t The camera doesn't exist anymore as she gets off on pushing the toy deeper and deeper into her ear, tugging at it every few inches to feel the nubs against her grey matter. By the time she's at the knot her body is shaking and her sheets are soaked.
				t Her mind can't decide if it's feeling pleasure or pain, so it's deep-frying her squished-up brain in a mixture of both.
				t Finally with one last exertion she pushes the the fat knot past her ear, shoving the toy as deep as it can go. Feeling herself on the edge for good measure she gives it one, big, twist!
				t The audio of the stream clips as she screams so high her microphone can barely catch it, her mind scrambled her trails off as she slumps down.
				t One eye open and rolled back, the other barely open at all, there's no sign of movement for a few long seconds, until a slight twitch of her legs leads to a sudden fountain of squirt blasting in a solid stream strong enough to soak her computer screen and webcam for good measure.
				t The viewcount is still climbing, even as moments go by without any motion from her. The image through the beads of fluid of this completely conked-out catgirl with a dildo shoved into her ear is enough to keep a steady viewcount.
				t In a few hours she'll wake back up, and the effort to pull the nubbed toy away from her brain will begin round 2 of her masturbation stream.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "otherkinA": {
			writeHTML(`
				define otherkin = sp Dakota; im scripts/gamefiles/profiles/otherkin.jpg;
				t A wonderous sky above, freshly cut grass beneath her hooves, Dakota joyfully gallops through the field. The wind in her hair, the strong feeling in her muscles, it's everything she's every dreamed of.
				t Yet the fading reality soon makes it clear she <i>is</i> dreaming. Soon the lush green fields are replaced with a tiled floor, somehow nearly ten feet away.
				t Her hands reach up and touch her face, still tragically human, yet inside of her she still feels that same power coursing through her.
				liz i just want to say how much I appreciate you volunteering for this.
				t She's shocked out of her haze by a voice behind her, and as she turns to face it she sees something wonderful.
				t A horse's body. Her body. Though it clashes with her human torso, from the waist down she's every bit the magnificent creature she always knew she was.
				liz It's incredible work, isn't it? Out technician honestly blows me away. The bonding is perfect, although I think an apology is in order.
				t Suddenly that powerful feeling inside Dakota spikes. That sensation of being strong, unbreakable, it just keeps building up. She can feel something beneath her, a pulsating bundle of nerves growing by the second. She can't think, can barely breath as unfamiliar sensations ravage her brain.
				liz These days, there's no stock for mares, only stallions. As a result the fine specimen you've become is a little more... Studly that you probably expected to be.
				t Dakota can feel every movement, no matter how slight, of Liz's hands as she explores Dakota's new body.
				liz Powerful muscles, a good show of your value as breeding stock. A beautiful donut-rim of an ass, that'll be a moneymaker, women and men alike will break the bank to seal their lips around yours. But the real prize...
				t White lightning surges through oterkinF's mind and body as she feels a pair of hands grasp the beast between her legs. It must be massive, even for a stallion! Just picturing it in her mind makes the fog grow so strong she can't evej think anymore, yet too quickly the hands are gone.
				liz Despite growing demand for horse sperm, animal rights activists have banned virility enhancements on animal subjects. The legal headaches and the pay required to make human milking studs is even worse. But, since the procedures were conducted while you were still regarded as a human, and you don't need to be paid a wage now that you're a horse...
				t As Liz goes on about legal issues Dakota grows increasingly more frantic. Down on her knees she rubs her massive horsecock against the smooth floor, coating the ground in thick musk, but growing no closer to release.
				liz Ah, don't bother with that. You're in a state known as a 'rut', nothing short of a warm wet hole will get you off now. Your brain still being a woman's means it's also clashing with that, so you're technically in a state of heat as well. Not to worry though, simultaneous dick and anal stimulation will scratch those itches, temporarily.<br>We have a lovely ranch that'll pay very good money and quite a few royalties to take you in. You'd like that, wouldn't you? Teenagers, milfs, even some sissies between your legs worshipping you like a god while a desperate slut makes out with your asshole like it's her husband. And afterwards you'll be properly bred.
				t Dakota thrashes, too desperate for release from this overwhelming <b>need</b> to think rationally. Her throbbing horsecock and asshole both overtaking every bit of her mind.
				liz Who's a good stallion? You are! Oh yes you are! Now, before you go to your new home give this good girl a little taste. Which part do you want satisfied first?
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "anomalyA": {
			writeHTML(`
				define boss = sp Mrs. Jensen; img scripts/gamefiles/profiles/boss.jpg;
				im images/anomaly/a1.gif
				boss Damnit, why the hell is she still like this?
				im images/anomaly/a2.gif
				liz Mmm-aaah! I'm not sure! Whatever happened to her, our machines can't fix it!
				boss Worthless... Fine. It's been too long for us to revert her. I'll need to accelerate 27's training.<br>Lick harder you worthless slut!
				liz Ah, thank you!
				t Jensen rubs her temples. This universe has proven to be exhausting, and god knows what her doppleganger is doing back in her own dimension.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "rainyA": {
			writeHTML(`
				define unknown = sp Parasol Representative; img scripts/gamefiles/profiles/parasol.jpg;
				unknown You can't seriously have produced results this fast.
				liz But we have! Take a look.<br>Say, these woman <i>are</i> volunteers like you said, right? They've been struggling a lot since they woke up.
				unknown They've just got some... Active fantasies. Rape fetishes, bug chasers, that kind of thing.
				liz Works for me. The drug was administered a bit ago, see for yourself.
				im images/rainy/a1.gif
				liz Complete replacement of her womb and pussy with a fully functional penis and testicles. What's left of her ovaries have already been splurted out as a load of cum, and now she's generating an infectious load capable of doing the same to others. In men it'll act as a both a steroid equivalent and feminizing agent.
				unknown And the infection process?
				im images/rainy/a2.gif
				liz Should go smoothly. We've made her bodily fluids highly addictive, but the actual modification process is extremely streamlined. You should be able to modify the treatment easily.
				unknown Excellent. Previously we worked with parasite breeds, but this might be exactly what we need to really push boundaries. 
				liz And our deal?
				unknown Oh, the clinic will get what it deserves. And believe me, the whole world will get a chance to see what you've done here today!
				im images/rainy/a3.gif
				t As the latest batch of test subjects lose their mind to pleasure and the urge to spread the infection, the room is filled with lewd sounds and the sound of sinister cackling from the mysterious client.  
				liz Sir, I know it can be hard to resist sometimes, but we have a strict 'No maniacal laughter' policy in the clinic. It upsets the patients.
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "alterationA": {
			writeHTML(`
				define sub = sp ???; img scripts/gamefiles/profiles/sub.jpg;
				liz So, how does it feel?
				im images/alteration/a1.png
				sub It's... Perfect...
				liz You should be able to cum just fine now, and-
				im images/alteration/a2.png
				sub Ghhh~!
				liz Oh, don't mind me I guess. Be sure to cum on the floor, it'll be easier to clean that way.<br>Huh, I wonder...
				sub So good! Finally... Finally gonna...!
				liz Sudden alteration... Lives with a dom... Wait a second!
				im images/alteration/a3.png
				liz Stop right there.
				sub W-what? Why!? I'm so close!
				liz I thought this was fishy. You've been modified by an alteration app! This operation was illegal!<br>Whoever did this doesn't want you cumming without permission!
				sub No, please, you need to understand! My sister, she's-
				liz Security!
				sub Nonono I can't wait anymore! FUCK!
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		case "otherkinA": {
			writeHTML(`
				define otherkin = sp Dakota; img scripts/gamefiles/profiles/otherkin.jpg;
				t A wonderous sky above, freshly cut grass beneath her hooves, Dakota joyfully gallops through the field. The wind in her hair, the strong feeling in her muscles, it's everything she's every dreamed of.
				t Yet the fading reality soon makes it clear she <i>is</i> dreaming. Soon the lush green fields are replaced with a tiled floor, somehow nearly ten feet away.
				t Her hands reach up and touch her face, still tragically human, yet inside of her she still feels that same power coursing through her.
				liz i just want to say how much I appreciate you volunteering for this.
				t She's shocked out of her haze by a voice behind her, and as she turns to face it she sees something wonderful.
				t A horse's body. Her body. Though it clashes with her human torso, from the waist down she's every bit the magnificent creature she always knew she was.
				liz It's incredible work, isn't it? Out technician honestly blows me away. The bonding is perfect, although I think an apology is in order.
				t Suddenly that powerful feeling inside Dakota spikes. That sensation of being strong, unbreakable, it just keeps building up. She can feel something beneath her, a pulsating bundle of nerves growing by the second. She can't think, can barely breath as unfamiliar sensations ravage her brain.
				liz These days, there's no stock for mares, only stallions. As a result the fine specimen you've become is a little more... Studly that you probably expected to be.
				t Dakota can feel every movement, no matter how slight, of Liz's hands as she explores Dakota's new body.
				liz Powerful muscles, a good show of your value as breeding stock. A beautiful donut-rim of an ass, that'll be a moneymaker, women and men alike will break the bank to seal their lips around yours. But the real prize...
				t White lightning surges through otherkinF's mind and body as she feels a pair of hands grasp the beast between her legs. It must be massive, even for a stallion! Just picturing it in her mind makes the fog grow so strong she can't even think anymore, yet too quickly the hands are gone.
				liz Despite growing demand for horse sperm, animal rights activists have banned virility enhancements on animal subjects. The legal headaches and the pay required to make human milking studs is even worse. But, since the procedures were conducted while you were still regarded as a human, and you don't need to be paid a wage now that you're a horse...
				t As Liz goes on about legal issues Dakota grows increasingly more frantic. Down on her knees she rubs her massive horsecock against the smooth floor, coating the ground in thick musk, but growing no closer to release.
				liz Ah, don't bother with that. You're in a state known as a 'rut', nothing short of a warm wet hole will get you off now. Your brain still being a woman's means it's also clashing with that, so you're technically in a state of heat as well. Not to worry though, simultaneous dick and anal stimulation will scratch those itches, temporarily.<br>We have a lovely ranch that'll pay very good money and quite a few royalties to take you in. You'd like that, wouldn't you? Teenagers, milfs, even some sissies between your legs worshipping you like a god while a desperate slut makes out with your asshole like it's her husband. And afterwards you'll be properly bred.
				t Dakota thrashes, too desperate for release from this overwhelming <b>need</b> to think rationally. Her throbbing horsecock and asshole both overtaking every bit of her mind.
				liz Who's a good stallion? You are! Oh yes you are! Now, before you go to your new home give this good girl a little taste. Which part do you want satisfied first?
			`);
			writeTransition("caseSelect", "Finish");
			break;
		}
		default: {
			writeText("You've encountered an error! Please let me know about this, the errorcode is:");
			writeText("writeScene "+scene);
			break;
		}
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
}