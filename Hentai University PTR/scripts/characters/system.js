var character = 'system';
var eventArray = [
	{index: "paperwork", name: "File Paperwork", location: 'playerOffice', time: "MorningEvening", 
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0,}
];
var newItems = [ //If price is 0 it isn't for sale
	{name: "Butt", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/butt.jpg", description: ""},
	{name: "Ghost AR", 			key: true, 		price: 0, 	image: "scripts/gamefiles/items/ghostAR.jpg", description: "The brand new mobile game Ghost AR! Track ghosts around the city, collect them all and save the world from their ghastly threat!"},
	{name: "Town Map", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/map.jpg", description: "Allows you to navigate around town more easily."},
	{name: "Hypnosis Textbook", key: false, 	price: 50, 	image: "scripts/gamefiles/items/hypnosisTextbook.jpg", description: "A textbook on hypnosis, you can read it at home to improve your skill."},
	{name: "Hacking Textbook", 	key: false, 	price: 50, 	image: "scripts/gamefiles/items/hackingTextbook.jpg", description: "A textbook on hacking, you can read it at home to improve your skill."},
	{name: "Counseling Textbook", key: false, 	price: 50, 	image: "scripts/gamefiles/items/counselingTextbook.jpg", description: "A textbook on counseling, you can read it at home to improve your skill."},
	{name: "Lady", 				key: true, 		price: 0, 	image: "scripts/gamefiles/profiles/lady.jpg", description: "For if you'd like to play as a cute lady. Unlocks the Lady character portrait. Aesthetic change only, art by Nusumenaihxseki"},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default. Tab appears below the map, button appears on the map itself
	{index: "paperwork", 	name: "File some Paperwork", 	location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 65, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "gameConsole", 	name: "Game Console", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 72, day: "both",},
	{index: "wardrobe", 	name: "Wardrobe", 				location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 1, day: "both",},
	{index: "laptop", 		name: "Use the Computer", 		location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 5, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerHouse', 		time: "MorningEvening", 			itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "newDay", 		name: "Go to Bed", 				location: 'playerHouse', 		time: "Night", 		itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "shop", 		name: "General Store", 			location: 'shoppingDistrict', 	time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 60, day: "both",},
];

function writeEncounter(scene) {
	console.log('now writing encounter '+scene);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	if (scene.includes("porn") || data.player.location == 'gallery') {
		document.getElementById('output').innerHTML = '';
	}
	switch (scene) {
		case "start" : {
			updateMenu();
			document.getElementById('playerImage').src = "scripts/gamefiles/none.png";
			var bg = "scripts/gamefiles/logo2.png";
			document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
			writeBig("scripts/gamefiles/logo2.png");
			writeText("Hentai University is an adult game created by NoodleJacuuzi and Captain Cryptogreek. You can find and keep up with all NoodleJacuzzi's games, including Human Alteration App, Princess Quest, and Rainy DayZ at the master index here: <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi's Index</a>");
			writeText("You can find more of Captain Cryptogreek's work here: <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek on Reddit</a>");
			writeText("This game is based (loosely) on the design of Hentai High School by Capta1n and the Hentai High School + project. However, there are no elements of school management or system of global corruption. The smaller scale means it will be more feasible to complete than either of those games.");
			writeText("As a content warning, this game features hypnosis and dubious consent between partners, and mostly depicts straight M/F sex. There are several male characters who have scenes depicting undoubtably homosexual content, but they universally have a trap/twink/femboi bodytype and no specific character relationships are ever forced on the player. Finally, all characters are portrayed as being 18 or older. Every single character is a high-school graduate, and we currently don't intend to add any character who looks underage.");
			writeText("If you'd like to avoid any specific fetishes, each character's logbook page lists the fetishes their scenes cover. Keep in mind that, as you are a hypnotist, hypnosis/mind control is so common we won't list it in the tags.");
			writeFunction("loadEncounter('system', 'prologue')", "Start the game as a man");
			writeFunction("loadEncounter('system', 'prologueAlt')", "Start the game as a futanari");
			writeText("<hr>");
			writeText("Other notes:");
			writeText("Are <b>you</b> interested in getting your own character into Hentai University? Well, you're in luck! Hentai University v3 includes <b>Mod Support!</b> Hop over to the game's <a href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'>Modding Tutorial</a> if you're interested.");
			writeText("We're always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like us to consider adding another artist, or you'd like to suggest content of your own, you can shoot us a message anywhere this game is posted. You can find the Patreon here: <a href='https://www.patreon.com/noodlejacuzzi'>Patreon Link</a>");
			writeText("You can also send us a message directly. Noodlejacuzzi is on discord (NoodleJacuzzi#4120) or you can send an email at noodlejacuzzi@gmail.com");
			writeText("Captain Cryptogreek can be messaged on his reddit account where he regularly posts captions. You can also shoot him an email if you'd like him to proofread or you'd like to commission his skills at cryptogreekcaptions@gmail.com");
			// replace [\r\n]+ with , 
			writeText("Thank you to: Swallows999, Madgunner, Joshua Ingram, Madgunner, Robbie, Lasse B, CaptainMontana, ChronosEdge, Scal, Badaxe, andres mejia, Arthorias28, Colin E, Dkells, FearlessViper26, Filament, J_C_L, jack spencer, Jinouga, Marco Wassmer, maxime, Ramsey Bisher, Taylor Trout, XxrobothacksxX, brandon, Roy, Wild Bill, Debarre Sonny, Drashin, murgatroid99, qwerty, Andy Amundy, Angel, Ariados, Blaise Fenn, Gwen Yurick, Jane, Jesse Greene, joe, lm Carma, Nils Maier, Snaked, stratum, å‡± é™³, andy, Andy, Carlos, ItsAllOgreNow, Joshua Melzark, valdis, Vincent Madaire-Cullen, Aegil, Anthony Munso, Arthur radcliffe, AxiosMIles, Bawornnan samart, Bonelessunknown, Chaaaanon, Charles Morris, Colin, Darrell Goodman, Devin, dhccpmc, Dugelle, Guy68691, jdktjk205, John Lewis, john smith, Joseph Gibbs, mazterlith, Monkey, Noah, Nutburger, Phanes, Prodigal211, ptw1985, Scumstango, Sebastian Eckel, Simon Rencher, sky, Smiley Green, Taurus Travon Rashad Lemar Brackin, Wayne culbert, Wei, William Richardson, Your Husbando, Z, zoobot5, and สิรวิชณ์ อาสว่าง,  for funding this work! The patreon funds are split as Captain Cryptogreek has taken over as lead writer for the game.");
			writeSpecial("And special thanks to Stiggy752 for the game's new CSS!");
			writeText("I've added the option to start as a futanari. This only changes your character's image and the pronouns used (so that you're ma'am instead of sir). Please let Noodle Jacuzzi know if anyone is still referring to you as 'sir' when inappropriate, thank you.");
			writeText("The game is more freeform and slower paced than my previous works. If you get stuck, please let us know. There isn't currently a guide, but we can easily feature an FAQ here.");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("This game uses art by three artists. Enoshima Iki, Nagi Ichi, Oreteki18kin, and Gujira. Hover over an image for the artist who created it. Check it out, and feel free to check out each artist's pixiv as well:");
			listArtists();
			writeText("All five of the artists who's works we've used have different styles, and all work is censored due to Japan's censorship laws. We don't ever intend to mix and match within scenes, but it is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider simply avoiding characters by these artists.");
			writeFunction("loadEncounter('system', 'oretekiTest')", "See an Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeFunction("loadEncounter('system', 'nagiTest')", "See a Nagi Ichi example <br>(AT LEAST 90% GAY)");
			writeFunction("loadEncounter('system', 'gujiraTest')", "See a Gujira example <br>(AT LEAST 80% GAY)");
			break;
		}
		case "listTextbooks": {
			listTextbooks();
			break;
		}
		case "prologue": {
			writeText("Dear <input type='text' id='nameSubmission' value='Thomas'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few men have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologueAlt": {
			data.player.gender = "woman";
			data.player.title = "Miss";
			data.player.honorific = "ma'am";
			if (checkBody("basil") != true) {
				var goof = {index: "basil", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			var pepsi = data.bodytypes.length-1;
			changeBody(pepsi);
			writeText("Dear <input type='text' id='nameSubmission' value='Tomara'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few women of your background have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologue2": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are " + data.player.name + ", amateur hypnotist.");
			writeText("The time spent collecting and hypnotizing references almost wasn't worth it, especially with how long faking your credentials took. But it paid off in the end.");
			writeText("Today you'll be sliding right into your new position as a school counselor. Your direct supervisor is well under your control, so you have completely free range for as long as you play it safe.");
			writeText("The house is free too, so you could just sleep in all day and get paid every five days like clockwork. But there's a lot more on offer here to enjoy.");
			writeText("This town is a hotspot of beautiful women, and the school it surrounds is often referred to by its nickname.");
			writeText("<b>Hentai University</b>");
			writeFunction("changeLocation('playerHouse')", "Get Started");
			break;
		}
		case "oretekiTest": {
			writeBig("images/porn/5A-3.jpg", "Art by Oreteki18Kin");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "nagiTest": {
			writeBig("images/tomgirl/7-5.jpg", "Art by Nagi Ichi");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "gujiraTest": {
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "cheat": {
			writeCenteredText("You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.");
			writeCenteredText("I keep a list of all of these on my patreon, go there, even if you aren't a patron, to find them.");
			writeCenteredText("Enter cheat code: <input type='text' id='cheatSubmission' value=''>");
			writeFunction("diagnostic()", "Submit");
			writeFunction("loadEncounter('system', 'gameConsole')", "Go back");
			break;
		}
		case "load": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Warning: Save before using. Enter the modded character's index EXACTLY or it will cause issues and you'll need to load the game.</p>
				<p class='centeredText'>Enter character's index: <input type="text" id="indexSubmission" value=""></p>
				<p class='choiceText' onclick='modCharacter()'>Submit</p>
			`;
			if (data.player.location == "") {
				writeFunction("writeEncounter('start')", "Finish");
			}
			else {
				writeFunction("writeEncounter('gameConsole')", "Finish");
			}
			break;
		}
		case "newDay": {
			if (data.player.location != scene) {
				randNum = getRandomInt(8);
				randNum += 1;
				data.player.dayID = randNum;
				console.log("Today's day ID is " + data.player.dayID);
				data.player.day += 1;
			}
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			data.player.time = "Morning";
			updateMenu();
			//checkDay();
			var specialEvent = false;
			//Checking for special events
			console.log("Now checking for special events for on day " + data.player.day);
			if (data.player.day == 3) {
				//specialEvent = true;
				//writeFunction("writeEvent('specialDay')", "Go to the special event");
				//writeTransition("playerHouse", "Skip the event");
			}
			if (checkTrust('succubus') > 70) {
				if (checkFlag('succubus', 'breakfast') == false) {
					specialEvent = "breakfast"; 
				}
			}
			if (checkTrust('succubus') > 77) {
				if (checkFlag('succubus', 'mission') == false) {
					specialEvent = "mission"; 
				}
			}
			switch (specialEvent) {
				case "breakfast": 
					loadEncounter('succubus', 'breakfast');
				break;
				case "mission": 
					loadEncounter('succubus', 'missionStart');
				break;
				default: {
					console.log("No events found");
					checkForPhone();
					document.getElementById('output').innerHTML += `
						<div class="playerRoom">
							<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
						</div>
					`;
					printLocationButton(
						"Get out of bed", 
						40, 
						40, 
						"playerHouse", 
					);
				}
			}
			if (data.player.day % 5 === 0) {
				var paybaby = 10 + data.player.counseling;
				writeSpecial("It's payday! $10 has been wired to your account.");
				if (data.player.counseling > 0) {
					writeSpecial("You've received an extra $" + data.player.counseling + " for being so skilled, you sly dog!");
				}
				data.player.money += paybaby;
			}
			if (checkTrust('principal') == 40) {raiseTrust('principal', 1);}
			break;
		}
		case "laptop": {
			writeFunction("loadEncounter('system', 'porn')", "Look up porn");
			writeFunction("loadEncounter('system', 'gallery')", "View the gallery");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
			writeFunction("changeLocation('playerHouse')", "Finish");
			}
			else {
				writePorn();
				writeFunction("loadEncounter('system', 'laptop')", "Go back");
			}
			break;
		}
		case "gallery" : {
			data.player.location = 'gallery';
			generateGalleryNav();
			writeFunction("changeLocation('playerHouse')", "Finish up");
			break;
		}
		case "gameConsole": {
			writeFunction("loadEncounter('system', 'cheat')", "Enter cheat code");
			writeFunction("loadEncounter('system', 'load')", "Load a mod character");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed("images/"+data.story[i].index+"/profile.jpg");
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
			}
			writeFunction("renameEveryone()')", "Rename characters");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "paperwork": {
			writeText("You can do paperwork here, earning some quick overtime cash based on your Counseling skill. Would you like to spend a few hours doing that?");
			writeFunction("loadEncounter('system', 'filing')", "Yes");
			writeFunction("changeLocation('playerOffice')", "No");
			break;
		}
		case "filing": {
			var moneyMade = 5 + data.player.counseling;
			passTime();
			data.player.money += moneyMade;
			updateMenu();
			writeText("You spent some time doing paperwork. It's a slow and boring job, but money is money after all.");
			writeSpecial("You earned $" + moneyMade + "!");
			if (data.player.time != "Night") {
				writeFunction("changeLocation('playerOffice')", "Finish up");
			}
			else {
				writeFunction("changeLocation('playerHouse')", "It's getting late, head home");
			}
			break;
		}
		case "shopLoad": {
			writeFunction("loadEncounter('system','shop')", "test shop");
			break;
		}
		case "shop": {
			changeLocation('store');
			break;
		}
		case "nap": {
			passTime();
			changeLocation(data.player.location);
			break;
		}
		case "credits": {
			writeText("Incredible! Outstanding! You've reached one of Hentai University's endings!");
			writeText("This game was made by <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a> and <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek</a>. Hop on in to our <a href='https://discord.gg/pDht5BZ'>Discord</a> and let us know what you thought, we'd love to hear from you. You can also find a section dedicated to modding in there, maybe check that out? Be sure to show show your support for the members of the modding community of course if you do.");
			writeText("Thank you to:  Swallows999, Madgunner, Joshua Ingram, Madgunner, Robbie, Lasse B, CaptainMontana, ChronosEdge, Scal, Badaxe, andres mejia, Arthorias28, Colin E, Dkells, FearlessViper26, Filament, J_C_L, jack spencer, Jinouga, Marco Wassmer, maxime, Ramsey Bisher, Taylor Trout, XxrobothacksxX, brandon, Roy, Wild Bill, Debarre Sonny, Drashin, murgatroid99, qwerty, Andy Amundy, Angel, Ariados, Blaise Fenn, Gwen Yurick, Jane, Jesse Greene, joe, lm Carma, Nils Maier, Snaked, stratum, å‡± é™³, andy, Andy, Carlos, ItsAllOgreNow, Joshua Melzark, valdis, Vincent Madaire-Cullen, Aegil, Anthony Munso, Arthur radcliffe, AxiosMIles, Bawornnan samart, Bonelessunknown, Chaaaanon, Charles Morris, Colin, Darrell Goodman, Devin, dhccpmc, Dugelle, Guy68691, jdktjk205, John Lewis, john smith, Joseph Gibbs, mazterlith, Monkey, Noah, Nutburger, Phanes, Prodigal211, ptw1985, Scumstango, Sebastian Eckel, Simon Rencher, sky, Smiley Green, Taurus Travon Rashad Lemar Brackin, Wayne culbert, Wei, William Richardson, Your Husbando, Z, zoobot5, and สิรวิชณ์ อาสว่าง for funding this work!");
			writeSpecial("Thanks for playing! We hope you'll be seeing more endings in the future!");
			writeFunction("changeLocation('playerHouse')", "Keep playing");
			writeSpecial("Here's a list of artists who's works are currently in the game:");
			listArtists();
			break;
		}
		case "porn0A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Lol what a stupid hat<br>Anonymous: Holy shit is that Angelica from Pop Pop girls?<br>Anonymous: Obviously not you fucking idiot, why would she be doing porn?<br>");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: You're living the life bro<br>Anonymous: Cat outfits are stupid (USER WAS BANNED FOR THIS POST)");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Isn't blackmail like this actually illegal?<br>Anonymous: Holy shit guys I think I go to the same school as her<br>Anonymous: Pics or it didn't happen");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-7.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Whoa holy shit is this a mod?<br>Anonymous: Sauce plz<br>Anonymous: Lurk moar dumbass<br>Anonymous: Is this actually programmed into the game?");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

console.log('system.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEncounter(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			//writeFunction("changeLocation('playerHouse')", "Finish");
		}
		break;
	}
	case "check": {
		for (i = 0; i < encounterArray.length; i++) {
			if (encounterArray[i].location.includes(data.player.location)) {
				if (encounterArray[i].time.includes(data.player.time)) {
					if (encounterArray[i].type == "tab") {
						printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
					}
					else {
						printEncounterButton('system', encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
					}
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
}

//Needs events for computer, wardrobe, textbooks, napping, and paperwork