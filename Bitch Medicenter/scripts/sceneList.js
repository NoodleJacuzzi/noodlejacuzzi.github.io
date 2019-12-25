function writeScene(scene) {
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
			writeText("<p class='centeredText'>Terminal open, access granted. Please submit your request.</p>");
			writeText("<p class='centeredText'>You have <b>4</b> saved documents in your <b>Introduction</b> folder.</p>");
			writeTransition("caseSelect", "View case files");
			writeTransition("prologue", "Open introduction folder");
			writeText("...");
			writeTransition("funding", "Medicenter Funding", "#91eba9");
			writeTransition("affiliates", "Affiliate & Medicenter Advertisement Log", "#91eba9");
			writeTransition("settings", "Console Settings", "#91eba9");
			//writeTransition("cheat", "Enter Cheat Codes", "#91eba9");
			writeText("...");
			writeTransition("start", "Log out", "#FF0000");
			break;
		}
		case "funding": {
			writeText("Bitch Medicenter funding is provided by private donors. Thanks to this support from good samaritans the medicenter can remain open to the general public, instead of blocking off much-needed medical care from the financially challenged.");
			writeText("From the bottoms of the hearts of every staffmember here at Bitch Medicenter, Thank you to Swallows999, Ben Dover, CaptainMontana, Joshua Ingram, MrManPerson, Robbie, Lasse B, andres mejia, Arthorias28, Badaxe, ChronosEdge, Colin E, Judavarius, Lunarghost, Marco Wassmer, Q Q, Scal, Taylor Trout, Adonnak, andy, Andy, Andy Amundy, Angel, Anthony Munso, Ariados, Arkhalis, Arthur radcliffe, Auckard, Blaise Fenn, Bobby Hamilton, bono, brandon, Carlos, Chaaaanon, Charles Morris, David Lange, Debarre Sonny, Devin, Dewr, Drashin, Ed, Guy68691, Gwen Yurick, iNoH8+, ItsAllOgreNow, Jacob Cannon, Jane, jdktjk205, Jesse Greene, joe, joe, joe mulhall, john smith, Joseph Gibbs, Joshua Melzark, Julia Ferro, Karan Raj Gupta, LaCrazy, lm Carma, Lucas Molski, Luke, marvin diaz, mazterlith, Mirza Hasan, Monkey, murgatroid99, Nha, Nils Maier, Nisi, Noah, Nutburger, Oliver Jones, Philipp, Prodigal211, qwerty, Roy, Ryan Linn, sage, Sebastian Eckel, Shawn, sky, Skyrim mod lvr, Slipokk, Snaked, Steam Screw, stratum, surgE, Taurus Travon Rashad Lemar Brackin, Theodrian, Ungy Bungy, valdis, Vincent Madaire-Cullen, Wayne culbert, Wild Bill, Will Osboldstone, William Richardson, Yongdian Guo, Your Husbando, Профессор Преображенский, and 凱 陳 for supporting my work!");
			writeText("If you're interested in funding this clinic, head over to the medicenter's <a href='https://www.patreon.com/noodlejacuzzi'>Funding Page</a>. If you have any comments, criticisms, or suggestions for new medical procedures, direct them to the site manager's personal <a href='https://discord.gg/pDht5BZ'>Forum</a> where he'd love to hear what you think!");
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "affiliates": {
			writeText("The following are a collection of other work collated by site manager NoodleJacuzzi. After extensive peer review and focus testing they will air on medicenter television as entertainment during waiting lounge period.");
			writeTransition("haa", "Human Alteration App Commercial");
			writeTransition("princess", "Princess Quest Commercial");
			writeTransition("rainyDayZ", "Rainy DayZ Commercial");
			writeTransition("anomaly", "Anomaly Vault Commercial");
			writeTransition("university", "Hentai University Commercial");
			writeTransition("medicenter", "Bitch Medicenter Marketing Campaign");
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
			writeText("The screen flashes to a dozen naked woman, all sporting dicks, chasing a red-hooded woman.");
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
		case "settings": {
			writeFunction("saveFile()", "Export save data to string");
			writeFunction("loadFile()", "Import save data");
			writeFunction("restartButton()", "Delete all save data", "#FF0000");
			writeTransition("mainMenu", "Go back");
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
			writeTransition("mainMenu", "Go back");
			break;
		}
		case "caseSelect": {
			writeText("Query accepted. The following case files are available:");
			writeCase("wife");
			writeCase("girlfriend");
			writeTransition("potentialCases", "Request additional case files");
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
			writeBig("scripts/gamefiles/characters/wife.jpg");
			writeText("IDENTIFYING INFORMATION:<br>The subject is a 27-year old housewife without children, living with her husband. She was admitted voluntarily. She is currently in Waiting Room A.");
			writeText("CHIEF COMPLAINT:<br>Subject claims to suffer from a near nonexistent libido. This has caused a great amount of personal and marital stress. Methods such as traditional therapy and perscription drugs have proven ineffective.");
			writeText("TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Sensitivity Increase, Sluttification, Mind Break<br>A modification plan that would forcibly increase her sex drive. However, because of the disparity between physical and mental, a 'mind break' state could occur.");
			writeTransition("wifeA", "Begin treatment plan A");
			writeText("TREATMENT PLAN B - HYPNOSIS:<br>KEYWORDS: Cheating, Sluttification, Corruption<br>A hypnosis plan that would enable her to enjoy depravity more on a mental level than a physical one. However, serious risk exists that she could fall much further than intended.");
			writeSpecial("ERROR - Hypnosis treatment plans unavailable. Please submit a report to the site manager if hypnosis plan is essential.");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "wifeA": {
			blockGame = true;
			blocks();
			break;
		}
		case "girlfriendFile": {
			writeBig("scripts/gamefiles/characters/girlfriend.jpg");
			writeText("IDENTIFYING INFORMATION:<br>The subject is a 23-year old college student in a committed relationship with a 24-year old man. She and her boyfriend were admitted voluntarily, and are both in Waiting Room B.");
			writeText("CHIEF COMPLAINT:<br>Subject claims that sex is unsatisfying and that she suffers from low libido. Brainwave scans show signs of extremely repressed dominant tendencies and unrealized gender dysphoria. Similar, albeit submissive tendencies, have been found in the subject's bodyfriend, likely this is the cause of low sexual desire between the pair.");
			writeText("TREATMENT PLAN A - MODIFICATION:<br>KEYWORDS: Female-to-Shemale, Male-to-Sissy, Prostate growth<br>A modification plan that cause the subject to grow a sizable penis, and alter her byfriend to be more physically receptive to the idea.");
			writeTransition("girlfriendA", "Begin treatment plan A");
			writeText("TREATMENT PLAN B - HYPNOSIS:<br>KEYWORDS: Femdom, Submissive Male, Humiliation, Chastity<br>A hypnosis plan that would release the repressed desires of both the subject and her boyfriend. Several device recommendations would also be provided for a more fulfilling sexual relationship.");
			writeSpecial("ERROR - Hypnosis treatment plans unavailable. Please submit a report to the site manager if hypnosis plan is essential.");
			writeTransition("caseSelect", "Go back to file selection");
			break;
		}
		case "girlfriendA": {
			blockGame = true;
			blocks();
			break;
		}
		case "prologue": {
			writeTransition("prologue1", "Bitch Medicenter Technician Job Advertisement");
			writeTransition("prologue2", "Acceptance Letter");
			writeTransition("prologue3", "Technician Responsibility Outline");
			writeTransition("prologue4", "Modification Process Instructions");
			writeTransition("prologue5", "Hypnosis Device Malfunction");
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
			writeText("Complete all three stages and you've finished modifying the subject. Keep an eye on the Modification Status boxfor an idea of exactly what's happening to the subject.");
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
		case "blocks": {
			blockGame = true;
			blocks(1);
			writeTransition("start", "Go back");
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
			writeText("'Sorry! Our assistant is out at the moment, so she won't be able to escort you out. You basically have a whole new body, so we've taken the liberty of calling you a cab.<br>We know you're itching to try it out, but take it slow for now. Because your body is so sensitive, you might end up as what we in the professional world call a 'broken slut' if you dive right in to the new world of sexual pleasure available.'");
			writeBig("images/wife/wifeA-0.gif");
			writeSpeech("wife", "", "Nnn... Gotta... Cab... Cumming~!");
			writeText("Her first orgasm in god knows how many years runs through her, taking her breath and rational thought away. She'll be politely escorted out by security to make room for new patients eventually.");
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
			writeText("He doesn't have a chance to finish his sentence as "+characterArray[0].fName+"plants her pussy against his lips, showing more enthusiasm than she's ever shown before in all her years of marriage.");
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
			writeText("Once the anasthesia has worn off, the pair  begin to grogilly come to their senses and find themselves in a soft bed.");
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
			writeSpeech("girlfriendPost", "", "Mhmm. I just wanted to apologize for our behavior as we left. I'm here with him right now, and we really do enjoy... Oh? This is a common occurence?");
			writeSpeech("boyfriendPost", "", "Gonna cum! My clitty is leaking!");
			writeSpeech("girlfriendPost", "", "Shut up, bitch!<br>Ah, sorry, I'm with him right now. He's insatiable, although I guess I am too. Anyways, thank you so much! We'll be leaving a positivie review for sure!<br>Alright, thank you.");
			writeText("As she hangs up the phone "+characterArray[4].fName+" slows her rhythm and pulls her cock out of her boyfriend's ass.");
			writeSpeech("boyfriendPost", "", "Noo~... Did I do something wrong?");
			writeText(characterArray[4].fName+" responds by grabbing "+characterArray[6].fName+"'s leg and yanking him off the bed, causing him to land face-first in the puddle of boicum he made.");
			writeText("As he obediently cleans up his mess, she lays back on the bed.");
			writeSpeech("girlfriendPost", "", "You want my cum? Earn it.");
			writeSpeech("boyfriendPost", "", "Yes mistress!");
			writeText("He eagerly clims atop her, giggling absent-mindedly as his mistress's cock fills his ass again.");
			writeBig("images/girlfriend/girlfriendA-6.gif");
			writeText("He bounces up and down. His clitty's sensitivity is way down, so the only time he even feels anything from it anymore is when it's slapping on his mistress's abdomen.");
			writeSpeech("girlfriendPost", "", "Mmmm~... Good girl. Enjoy your reward.");
			writeText("And soon enough her modified cum begins to pump into his hole. The changes made to it have had some major effects on "+characterArray[6].fName+"'s brain. Just a drop is enough to send him into a sexual frenzy now, so when a pint of it floods his ass it sends powerful, almsot electric shocks up his spine.");
			writeText("His body shaking and mouth hanging wordlessly open, he shows his appreciation the only way he knows how.");
			writeBig("images/girlfriend/girlfriendA-7.gif");
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