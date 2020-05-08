var character = 'system';
var eventArray = [];


function writeEncounter(scene) {
	console.log('now writing encounter '+scene);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (scene) {
		case "start" : {
			updateMenu();
			writeBig("scripts/gamefiles/logo2.png");
			writeText("Hello! This is version 2 of a modding tutorial written by NoodleJacuzzi, developer of Hentai University.");
			writeText("You can find and keep up with all of my games, including Human Alteration App, Princess Quest, and Rainy DayZ, Anomaly Vault, and Hentai University at the master index here: <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi's Index</a>");
			writeText("CaptainCryptogreek, Hentai University's writer, had nothing to do with this tutorial, but you can find his work here: <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek on Reddit</a>");
			writeText("Hentai University and this tutorial would not exist without support from my patrons! You can find the Patreon here: <a href='https://www.patreon.com/noodlejacuzzi'>Patreon Link</a>>");
			writeText("You can also send me a message directly. Come on over to my <a href='https://discord.gg/B3AszYM'>discord</a> or you can send an email at noodlejacuzzi@gmail.com");
			writeText("Captain Cryptogreek can be messaged on his reddit account where he regularly posts captions. You can also shoot him an email if you'd like him to proofread or you'd like to commission his skills at cryptogreekcaptions@gmail.com");
			writeSpecial("And special thanks to Stiggy752 for the CSS!");
			writeFunction("writeEncounter('gettingStarted')", "Get started writing a mod");
			writeFunction("writeEncounter('installation')", "How to isntall mods");
			break;
		}
		case "gettingStarted": {
			writeText("For this tutorial I'll be adding a character named Tia Sun, and I'll be walking you through the process of implementation step-by-step.");
			writeText("The very first step of adding your own character is the most important one: planning.");
			writeText("You'll need a bevy of images for your character, I recommend collecting them from a single artist CG set for consistency. I use sadpanda, although I've collected a few from Hitomi.la as well. In preparing for Hentai University I collected several hundred image sets");
			writeText("I'll be using [Izakaya Yocchan (Enoshima Iki)] Sunao de Otonashikute Mucchimuchi na Imouto no Love Love Hatsujouki, making sure only to use textless images. You also can create your own images or pick singles off of a site like Gelbooru if you prefer.");
			//Link to artist list
			writeBig("images/1-1.jpg", "Having a lot of images is helpful because you might not use all of them. Please credit artists, and more importantly don't rip off the efforts of translators who might have already done the cg sets you're using.");
			writeText("Now this is important. Each character has a unique <b>codename</b>. This is unrelated to their actual name, and can be anything you like. I would keep it short though for efficiency. This codename must be unique otherwise the game will break. Because the girl I've chosen looks like a shut-in, I'll be using the codename neet.");
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>To personalize this tutorial, choose your codename here, and you'll be given instructions on exactly what you should be naming your files and folders.</p>
				<p class='centeredText'>Enter codename: <input type="text" id="cheatSubmission" value="CODENAME"></p>
				<p class='choiceText' onclick='proceed()'>Continue to the next section, profiles.</p>
			`;
			break;
		}
		case "profile": {
			writeText("There are two images which are required for each character; the profiles.");
			writeText("First is the larger character standing shot. Find a good single shot of the character standing in their normal outfit.");
			writeText("Then, go to the Hentai University/images folder. Create a folder and name it with your character's code name. In this case, you'll be creating a folder named CODENAME.");
			writeBig("images/2-1.jpg", "Remember that I'm adding Tia Sun, codenamed neet. My images will be different from what you see.");
			writeText("Pop in your image and name it profile.jpg. Jpg images are better for keeping the game's filesize low, a major advantage over real porn games.");
			writeBig("images/2-2.jpg", "Be careful about capitalization, the image and the folder should both be lowercase.");
			writeText("Next we need the talking profile, for this you'll need to open your profile.jpg image in an image editor and crop out a square image of the character's face.");
			writeText("Save this cropped square image to the Hentai University/images/CODENAME folder as CODENAME.jpg");
			writeBig("images/2-3.jpg", "Try to pick a neutral expression, since this is your character's face for pretty much everything.");
			//Pervert mode stuff
			//Persona style stuff
			//Example image with P.jpg and T.png
			writeText("With that, we have the required images. More images can be added later as you need them for scenes.");
			writeFunction("writeEncounter('JSFile')", "Continue to the next section, the .js file");
			break;
		}
		case "JSFile": {
			writeText("Hentai University uses a system where it loads everything relating to the character from a single js file. I made a blank one you can use, so go to the Hentai University/scripts/characters folder and make a copy of blank character.js");
			writeText("Name this file CODENAME.js and open it up in your preferred text editor. I personally use notepad++, and I don't recommend using vanilla notepad since it's difficult to pick out mistakes.");
			writeBig("images/3-1.jpg", "Absolutely DO NOT use microsoft word, it will not work.");
			writeText("Now this file looks pretty complicated but just bear with me. We'll be going over every relevant part of this file bit by bit in excruciating detail.");
			writeText("As a tip while using notepad++, you can hit ALT+3 and ALT+1 to collapse the functions to make things easier to navigate.");
			writeText("Up at the top is probably the most important part of your character. This var character line is what is added to your save file to make the character appear in game. Lets get started with creating!");
			writeFunction("writeEncounter('varCharacter')", "Continue to the next section, the character variable");
			break;
		}
		case "varCharacter": {
			writeBig("images/4-1.jpg", "Empty code, numbered for your convenience.");
			writeText("1: The character's index, aka their codename. In your case, write CODENAME inbetween the two double quotation marks.");
			writeText("2: The character's first name.");
			writeText("3: The character's last name.");
			writeText("4, 5, 6, and 7: Ignore these, they're meant to be left as-is.");
			writeText("8: This is the character's color, used for their text boxes. This is in hex format, google 'hex color picker' for a tool you can use for color picking.");
			writeText("9: This is you! Enter your username here so the character can be credited. Don't feel too bad about keeping anonymous.");
			writeText("10: This is the character's artist. If you're using more than one artist like if you collected singles from Gelbooru, leave this blank.");
			writeText("Be careful to keep things contained between the quotes.");
			writeBig("images/4-2.jpg", "Be careful not to delete the commas in this step.");
			writeText("With the var all filled out, the next step is the logbook.");
			writeFunction("writeEncounter('logbook')", "Continue to the next section, the logbook");
			break;
		}
		case "logbook": {
			writeBig("images/5-1.jpg", "Empty logbook variable, this is what it should like like before you get started writing.");
			writeText("This is a pretty straightforward step. Basically fill in the double quotation marks here with relevant details.");
			writeText("First is the index, this should be the character's codename. For your character, fill in the space between the double quotation marks with CODENAME");
			writeText("After that, each of the following lines relates to a different paragraph on the logbook's page for your character. You can write anything you want in each of them, the names here are more suggestions than rules.");
			writeBig("images/5-2.jpg", "Filled out code. I'm leaving my tag section blank for now, but you'll want to use tags separated by commas.");
			writeText("Here's an image for what the final product will look like after we're all done with this tutorial:");
			writeBig("images/5-3.jpg", "What it'll look like ingame once we're finished.");
			writeText("EDIT: I've since added two more categories to the logbook, artist and author. These should be pretty self explanatory, just the character's artist (use 'Various' if you're using images from multiple artists) and your username. Same as in the character var basically.");
			writeFunction("writeEncounter('newItems')", "Continue to the next section, adding new items");
			break;
		}
		case "newItems": {
			writeBig("images/6-1.jpg", "Empty code, numbered for your convenience.");
			writeText("Here's where you can add new items to the shop. If you'd like to add an item to the inventory that the player doesn't need to buy, I'll explain how to do that in a few sections.");
			writeText("You can fill in the placeholder already in place. If you want to add more items, copy the placeholder like this:");
			writeBig("images/6-2.jpg", "Careful not to delete any commas!");
			writeText("1: The item's name. Be sure not to mispell here, this is important.");
			writeText("2: Defines whether this is a key item or not. Key items can only be purchased once and are kept on a different side of the inventory from non-key items. Non-key items can be purchased any number of times.");
			writeText("3: The price of the item. If the price is set to 0, it won't appear in the shop.");
			writeText("4: The item's image. It does not need to be in the items folder in the gamefiles, just have a path leading wherever you'd like.");
			writeText("5: The item's description.");
			writeBig("images/6-3.jpg", "I'm not adding any items for Tia, so here's an item from Emily's js file.");
			writeBig("images/6-4.jpg", "What it'll look like ingame once we're finished.");
			writeText("Once you're done adding items it's on to the next step: encounters.");
			writeFunction("writeEncounter('encounterArray')", "Continue to the next section, the encounter array");
			break;
		}
		case "encounterArray": {
			writeBig("images/7-1.jpg", "Empty code, numbered for your convenience.");
			writeText("This is what makes the encounter tabs appear on the map. These are non-erotic scenes that are not meant to be repeatable, and by default you'll only encounter a character once per day.");
			writeText("You will need a lot of these, so be ready to make copies like so:");
			writeBig("images/7-2.jpg", "Careful not to delete any commas!");
			writeText("Lets go through this code part-by-part. You'll need to do this for every encounter you want.");
			writeText("1: the encounter's index. The button this will make will point to a specific encounter, this is a sort of pointer that tells the system what encounter to play. You can use encounter names like 'introduction', but to keep things consistent I use the character's index (CODENAME for you) and add a number and / or a letter for organization. For example the first scene could be named CODENAME1a");
			writeText("2: This is what appears on the encounter button. There's a macro in place so that if you use the character's codename here it'll replace the codename with your character's first name.");
			writeText("3: The location where the encounter tab appears. There's a list of all the game's locations in the cheat sheet section. Locations have no spaces and use what's called camelCase, where each new word starts with a capital letter and the first word is uncapitalized. Park District would be parkDistrict. West Hallway would be westHallway.");
			writeText("4: The time the location takes place. Morning if the encounter should only appear in the morning, and Evening if the the encounter should only appear in the evening. Write MorningEvening if the encounter can appear either morning or evening.");
			writeText(`5: Any items that would be required for the encounter to appear. Use the item's name, including capitalization and spaces. For example, if you need the Hypnosis Textbook for the scene to appear, the line would be:<br>itemReq: "Hypnosis Textbook".`);
			writeText("6: The minimum trust at which the encounter can appear. Trust is set to 0 by default.");
			writeText("7. The maximum trust at which the encounter can appear. Trust uses a greater-than-or-equal to system. For example:<br>trustMin: 0, trustMax: 0 - The encounter will only appear when the character's trust equals 0.<br>trustMin: 5, trustMax: 10 - The encounter will only appear if the character's trust is anywhere from 5 to 10.");
			writeText(`8: The type of button created. This should be left as "tab".`);
			writeText(`9 and 10: The position of the button. If you're leaving the type as "tab" you can safely ignore these.`);
			writeText(`11: The type of day the encounter to appear on, "even", "odd", or "both".`);
			writeBig("images/7-3.jpg", "Filled out code");
			writeBig("images/7-4.jpg", "What it'll look like ingame once we're finished.");
			writeText("Make and fill these out until you have whatever amount of encounters you feel is appropriate. Next we'll start actually writing the encounters.");
			writeFunction("writeEncounter('writeEncounter')", "Continue to the next section, writing encounters");
			break;
		}
		case "writeEncounter": {
			writeBig("images/8-1.jpg", "Empty code");
			writeText("You will only be using a small block of this code. This part, specifically:");
			writeBig("images/8-2.jpg", "Your entire encounter will be between the { and the break;");
			writeText("In order to add more encounters, copy this block of code like so:");
			writeBig("images/8-3.jpg", "You can safely delete the writeFunction line if you don't need it.");
			writeText("Here you'll be writing out the encounters you listed in the encounterArray. There's a lot of things you can do here, but here are some important notes:");
			writeText(`Replace the placeholder in the case "placeholder" line with the index of the encounter you're writing.`);
			writeText("Make sure you're writing your code above the break;, otherwise your code won't appear on screen.");
			writeText("Since there's a lot to cover here, here's a list of what you can do already built into the game's engine. This same list is in the cheat sheet at the end:");
			writeFunction("writeEncounter('writeText')", "writeText - Write plain dialogue");
			writeFunction("writeEncounter('writeSpecial')", "writeSpecial - Writing special text");
			writeFunction("writeEncounter('writeSpeech')", "writeSpeech - Write a character speaking");
			writeFunction("writeEncounter('weight')", "Weight - Stylizing text");
			writeFunction("writeEncounter('names')", "Names - names & honorific shortcuts");
			writeFunction("writeEncounter('writeBig')", "Write an image");
			writeFunction("writeEncounter('passTime')", "passTime - Cause time to progress");
			writeFunction("writeEncounter('checkTrust')", "checkTrust - check if the player has a certain amount of trust with the character");
			writeFunction("writeEncounter('setTrust')", "setTrust & raiseTrust - Change the character's trust level");
			writeFunction("writeEncounter('addItem')", "addItem - Add an item to the player's inventory");
			writeFunction("writeEncounter('checkItem')", "checkItem - Check if the player has a specific item in their inventory");
			writeFunction("writeEncounter('removeItem')", "removeItem - Remove an item from the player's inventory");
			writeFunction("writeEncounter('money')", "money - Raising & lowering the player's money");
			writeFunction("writeEncounter('writeFunction')", "writeFunction - make a button on the player's screen");
			writeFunction("writeEncounter('changeLocation')", "changeLocation - Changing the player's location");
			writeFunction("writeEncounter('writeEncounter')", "writeEncounter - Link to another encounter");
			writeFunction("writeEncounter('writeEvent')", "writeEvent - write an event/link to an event");
			writeFunction("writeEncounter('loadEncounter')", "loadEncounter and loadEvent - loading from another js file");
			writeFunction("writeEncounter('finishEncounter')", "Finish - Ending an encounter");
			writeText("That's a lot! But in the future there will probably be more. The more functions I can use, the more control modders will have over the characters they add.");
			writeText("I can't know what you'll decide to write, but here's an example scene and what it looks like in-game:");
			writeBig("images/8-4.jpg", "Filled out code");
			writeBig("images/8-5.jpg", "What it'll look like ingame once we're finished.");
			writeText("Something to keep in mind is that in notepad++ you can hit alt-3 to close the brackets so you can more easily oversee all the encounters you created.");
			writeBig("images/8-6.jpg", "Click the + marks to open folded lines.");
			writeFunction("writeEncounter('eventArray')", "Continue to the next section, the event array");
			break;
		}
		case "eventArray": {
			writeBig("images/9-1.jpg", "Empty code");
			writeText("This is the list of all the character's repeatable events. You might need to add more, so:");
			writeBig("images/9-2.jpg", "This is getting out of hand!");
			writeText("You've got the event's index and the event's name, there's not much to discuss here.");
			writeFunction("writeEncounter('writeEvent')", "Continue to the next section, writing events");
			break;
		}
		case "writeEvent": {
			writeText("Writing events is like writing encounters, they're nearly identical in fact. Just like before you'll be using this section:");
			writeBig("images/8-2.jpg", "Same as before. In fact, this is the same image from the writing encounters section, I've reused it!");
			writeText("You'll be learning how to call an event later. Events can be any length, they're the meat of the game. Events are replayable in the gallery, so there's one big iron-clad rule here:");
			writeText("Because events are repeatable via the gallery, <b>do not do things like change trust or add items in an event.</b>");
			writeFunction("writeEncounter('functionCheatSheet')", "Review the function cheat sheet.");
			writeFunction("writeEncounter('phoneArray')", "Continue to the optional next section, the phone array");
			writeFunction("writeEncounter('finalization')", "Skip ahead to finalization");
			break;
		}
		case "phoneArray": {
			writeBig("images/10-1.jpg", "Empty code");
			writeText("this is another array, just like with events and encounters.");
			writeText("At the start of the day, if the player's trust is exactly equal to the trust value, the player will receive a text from the character. It'll check if they already have received the text of course.");
			writeText("Carefully plan out when you want the player to receive texts, keep in mind you can't check the player's text history. The only way to progress with a character is by increasing / decreasing trust.");
			writeFunction("writeEncounter('writePhoneEvent')", "Continue to the next section, writing phone events");
			break;
		}
		case "writePhoneEvent": {
			writeBig("images/11-1.jpg", "Empty code");
			writeText("Same as writeEncounter and writeEvent. Copy the relevant code blocks to add more entries.");
			writeText("Alright, time for more writing! But the phone works a little differently. We don't use writeText and writeBig here, instead there are a few important functions we have for writing phone texts.");
			writeFunction("writeEncounter('writePhoneSpeech')", "writePhoneSpeech - Write some speech");
			writeFunction("writeEncounter('writePhoneImage')", "writePhoneImage - Send the player an image they'll save onto their phone");
			writeFunction("writeEncounter('writePhoneChoice')", "writePhoneChoice - Branch the text conversation");
			writeText("I don't plan for Tia to have any texts, so here's an example from Emily:");
			writeBig("images/11-2.jpg", "Example code");
			writeBig("images/11-3.jpg", "Only part is shown because of the window's size.");
			writeFunction("writeEncounter('finalization')", "Continue to the next section, finalization");
			break;
		}
		case "finalization": {
			writeText("Alright, just to double check. Your character's js file is named CODENAME.js? And the character var is filled out exactly right for what you want? It can be a hassle to go back and change those.");
			writeText("Great! Now we'll actually get them working. Testing is probably the most important part.");
			writeText(`Open up Hentai University.html and go to your house. Open the game console and click "Load a mod character"`);
			writeText("Type the character's code name, so you'll type in CODENAME");
			writeBig("images/12-1.jpg", "This is me, typing in the codename of the character I'm adding.");
			writeText("Now your character is loaded! You should see your character's profile. If you made a mistake here, restart so that the mistake is removed from the game's save data.");
			writeText("And that's it! Test until the character is in a bug-free state. You can keep going back and changing your encounters, events, items, etc as you need, just be sure to refresh the page after saving your js file.");
			writeText("Once you're done testing, put your image folder and CODENAME.js file into some kind of archive like a rar, and upload it so that others can play it.");
			writeFunction("writeEncounter('endorsement')", "Continue to the last section, endorsement");
			break;
		}
		case "endorsement": {
			writeText("I'd really like to support modding for the game. Absolutely feel free to send me your character's files after you're finished testing.");
			writeText("If you'd like I can include your character in the game too as a fully-implemented character.");
			writeText("I'll need to proof your work, fixing typos and such. If it's in a broken / typo-infested state, I'll probably send it back to you with a few notes on what needs fixing.");
			writeText("Keep in mind I'm funded by patreon, so there are some hard limits to what I can implement. Hypnosis already crosses some lines.");
			writeText("So listen. I won't tell you not to make things like bestiality or scat, but I can't put that stuff in the game myself, and I'd rather it not be on my public discord.");
			writeText("If some thread or space is made dedicated to modding this game, please let me know. I'll put a link to it here in this guide.");
			writeText("There are some things that I can't put into the game myself, but my very handsome and close friend Joodle Nacuzzi has a few ideas for some fun things he'd like to put in the game that can't be put up on my discord.");
			writeText("Aside from that, feel free to message me for help or advice. There's my email, noodlejacuzzi@gmail.com, and the game's discord at https://discord.gg/B3AszYM");
			writeText("And this game would absolutely not exist if not for the people who support me on patreon. I love making games, but rebuilding Hentai University's entire engine to improve broken pieces and to allow for mod support, as well as making this tutorial took a total of 20 hours of time spent writing code.");
			writeText("Thank you, truly, to everyone who's supported me.");
			writeFunction("writeEncounter('functionCheatSheet')", "Continue to the function cheet sheet");
			break;
		}
		case "functionCheatSheet": {
			writeFunction("writeEncounter('writeText')", "writeText - Write plain dialogue");
			writeFunction("writeEncounter('writeSpecial')", "writeSpecial - Writing special text");
			writeFunction("writeEncounter('writeSpeech')", "writeSpeech - Write a character speaking");
			writeFunction("writeEncounter('weight')", "Weight - Stylizing text");
			writeFunction("writeEncounter('names')", "Names - names & honorific shortcuts");
			writeFunction("writeEncounter('writeBig')", "Write an image");
			writeFunction("writeEncounter('passTime')", "passTime - Cause time to progress");
			writeFunction("writeEncounter('checkTrust')", "checkTrust - check if the player has a certain amount of trust with the character");
			writeFunction("writeEncounter('setTrust')", "setTrust & raiseTrust - Change the character's trust level");
			writeFunction("writeEncounter('addItem')", "addItem - Add an item to the player's inventory");
			writeFunction("writeEncounter('checkItem')", "checkItem - Check if the player has a specific item in their inventory");
			writeFunction("writeEncounter('removeItem')", "removeItem - Remove an item from the player's inventory");
			writeFunction("writeEncounter('money')", "money - Raising & lowering the player's money");
			writeFunction("writeEncounter('writeFunction')", "writeFunction - make a button on the player's screen");
			writeFunction("writeEncounter('changeLocation')", "changeLocation - Changing the player's location");
			writeFunction("writeEncounter('writeEncounter')", "writeEncounter - Link to another encounter");
			writeFunction("writeEncounter('writeEvent')", "writeEvent - write an event/link to an event");
			writeFunction("writeEncounter('loadEncounter')", "loadEncounter and loadEvent - loading from another js file");
			writeFunction("writeEncounter('finishEncounter')", "Finish - Ending an encounter");
			writeFunction("writeEncounter('writePhoneSpeech')", "writePhoneSpeech - Write some speech");
			writeFunction("writeEncounter('writePhoneImage')", "writePhoneImage - Send the player an image they'll save onto their phone");
			writeFunction("writeEncounter('writePhoneChoice')", "writePhoneChoice - Branch the text conversation");
			writeFunction("writeEncounter('locationList')", "List of all locations in game");
			writeText("That's the whole list!");
			writeFunction("writeEncounter('writeEncounter')", "Go back to writing encounters");
			writeFunction("writeEncounter('writeEvent')", "Go back to writing events");
			writeFunction("writeEncounter('writePhoneEvent')", "Go back to writing phone events");
			break;
		}
		case "installation": {
			writeText("Alright so you've downloaded a mod character and want to know how to install it.");
			writeText("Easy peasy! You should've downloaded a rar, or zip, or 7z file. Extract that, and you should find two things, a folder full of images and a .js file:");
			writeBig("images/13-1.jpg", "I'm using a character named Tia Sun for this example.");
			writeText("Take the folder of images and put it into the Hentai University/images folder");
			writeBig("images/13-2.jpg", "Ignore those black boxes at the top");
			writeText("Then take the .js file and put it into the Hentai University/scripts/characters folder");
			writeBig("images/13-3.jpg", "Ignore those black boxes at the top");
			writeText("Next, open up Hentai University.html file. Go to your home and click on the game console, then select 'Load a mod character'");
			writeText("Then, type in the name of the character's image folder (no capitalization):");
			writeBig("images/12-1.jpg", "Make sure to type it in exactly, without capitalization.");
			writeText("That should do it!");
			writeFunction("writeEncounter('start')", "Back to the start menu");
			break;
		}
		case "writeText": {
			writeText("A function that writes plain text.");
			writeText(`writeText("");`);
			writeText("Write your text between the two double quotation marks, like so:");
			writeText(`writeText("Once upon a time...");`);
			writeText("This will print regular text reading 'Once upon a time'.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writeSpecial": {
			writeText("A function that writes special, funky text. Used for when the player recieves some kind of reward.");
			writeText(`writeSpecial("");`);
			writeText("Write your text between the two double quotation marks, like so:");
			writeText(`writeSpecial("You earned $5!");`);
			writeText("This will print centered, green text reading 'You earned $5!'");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writeSpeech": {
			writeText("A function that writes dialogue.");
			writeSpecial(`writeSpeech("", "", "");`);
			writeText("The first set of quotes is for the name / the code name.");
			writeText("The second set of quotes is for the profile image used for the dialogue. Leave this blank if you're writing dialogue for an established character or the player, as its set up to automatically find an image if this spot is left empty.");
			writeText("The third set of quotes is for the actual dialogue.");
			writeText("For the player's dialogue, write player between the first set of double quotes.<br>Leave the second pair of double quotes alone.<br>Write the dialogue inbetween the third pair of quotes.");
			writeSpecial(`writeSpeech("player", "", "Hello, this is him, yes.");`);
			writeText("For your character's dialogue, write CODENAME between the first set of double quotes.<br>Leave the second pair of double quotes alone.<br>Write the dialogue inbetween the third pair of quotes.");
			writeSpecial(`writeSpeech("neet", "", "Why are you talking like that?");`);
			writeText("For some rando's dialogue, write the rando's name between the first set of double quotes.<br>Write none between the second pair of double quotes, or specify a specific image to use here.<br>Write the dialogue inbetween the third pair of quotes.");
			writeSpecial(`writeSpeech("???", "none", "I have no image, my existence is blank.");`);
			writeSpecial(`writeSpeech("Doll", "scripts/gamefiles/profiles/doll.jpg", "I don't fit with the game thematically!");`);
			writeBig("images/14-1.jpg", "This is an example of all of the above");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "weight": {
			writeText("Add some <b>Ooomph</b> to your text by boldening or italicizing.");
			writeSpecial("&lt;b&gt;Text between these two will be <b>bold</b>&lt;/b&gt;");
			writeSpecial("&lt;i&gt;Text between these two will be <i>italicized</i>&lt;/i&gt;");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "names": {
			writeText("The game's engine is built with some automatic text replacement functions.");
			writeText("For a character's first name, use their code name and append an F");
			writeText("For a character's last name, use their code name and append an L");
			writeText("For the player's name, write playerF");
			writeSpecial(`writeText("Your character's name is CODENAMEF CODENAMEL, and the player's name is playerF");`);
			writeBig("images/14-2.jpg", "Text is automatically replaced with writeText, writeSpecial, writeSpeech, and writePhoneSpeech");
			writeText("For the player's gender (man or woman), write playerG, playerGender, or playerMan");
			writeText("For the player's title (Mister or Miss), write playerT, playerTitle, or playerMister");
			writeText("For the player's honorific (sir or ma'am), write playerH, playerHonorific, or playerSir");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writeBig": {
			writeText("Writes an image.");
			writeSpecial(`writeBig("images/", "Art by");`);
			writeText("The first part is the image path, telling the system exactly where the image is. The second part is what appears when you hover over the image. I try to use this to credit the original artist.");
			writeSpecial(`writeBig("images/neet/profile.jpg", "Art by Enoshima Iki");`);
			writeText("This will write the profile.jpg image from the neet folder in the images folder. When the player hovers over it, 'Art by Enoshima Iki' will be displayed.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "passTime": {
			writeText(`passTime();`);
			writeText("Put this at the bottom of an encounter to make time progress from morning to evening, or from evening to night.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "checkTrust": {
			writeText("This returns the character's trust. This doesn't do anything by itself, we need an if statement to do anything with it. Here's some framework you can copy and use.");
			writeSpecial(`if (checkTrust('CODENAME') == 0) {`);
			writeSpecial(`writeText("Hello!");`);
			writeSpecial(`}`);
			writeText("This will make 'Hello!' appear if your trust with CODENAME is exactly 0 (the starting value).");
			writeSpecial(`if (checkTrust('CODENAME') > 5) {`);
			writeSpecial(`writeText("Hello!");`);
			writeSpecial(`}`);
			writeSpecial(`else {`);
			writeSpecial(`writeText("Goodbye!");`);
			writeSpecial(`}`);
			writeText("This will make 'Hello!' appear if your trust with CODENAME is more than 5, and it will make 'Goodbye!' appear otherwise.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "setTrust": {
			writeText("setTrust() sets the trust level to a specific number.");
			writeSpecial(`setTrust("CODENAME", 20);`);
			writeText("This sets the trust level of CODENAME to 20.");
			writeText("raiseTrust() raises the trust level by a number.");
			writeSpecial(`raiseTrust("CODENAME", 1);`);
			writeText("This raises the trust of CODENAME by 1.");
			writeText("Just put these at the bottom of your encounter like so:");
			writeText("These functions are important for making sure the next relevant encounter will play. If you're stuck trying to get an encounter to trigger, click 'save to file' at the bottom of your save menu and check what trust you're at. You might have set an improper value.");
			writeText("Once again, <b>do not alter trust in events</b>, as events can be repeated in the gallery.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "addItem": {
			writeText("Adds an item to the player's inventory.");
			writeSpecial(`addItem("", true, "");`);
			writeText("The first set of quotes is for the item's name. Use capitalization and spaces as necessary.");
			writeText("The 'true' is a true/false switch for if the item is a key item or not. You can safely leave it set to true for most cases.");
			writeText("The last set of quotes is for the image path for the item's icon.");
			writeSpecial(`addItem("Petunia", true, "scripts/gamefiles/items/flower.jpg");`);
			writeText("The function doesn't actually display any kind of message, so you'll want to let the player know they got a thing by using writeSpecial.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "checkItem": {
			writeText("This returns as true if the player has a specific item in their inventory.");
			writeText("This is another function that does nothing by itself. You'll need an if statement.");
			writeSpecial(`if (checkItem("Petunia") == true) {`);
			writeSpecial(`writeText("You have a flower!");`);
			writeSpecial(`}`);
			writeSpecial(`else {`);
			writeSpecial(`writeText("You do not have a flower, why are you even alive?");`);
			writeSpecial(`}`);
			writeText("This will write 'You have a flower!' if the player has an item named 'Petunia' in their inventory. Otherwise, it'll write a disparaging message.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "removeItem": {
			writeText(`removeItem("")`);
			writeText("This will remove an item from the player's inventory. It won't display a message, so be sure to write something visible to the player if you're taking their item away.");
			writeText(`removeItem("Petunia")`);
			writeText(`writeText("You decided to plant your flower.")`);
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "money": {
			writeText("No functions for this, this is just plain javascript. Insert these lines to manipulate money.");
			writeSpecial("data.player.money = 30");
			writeText("This sets the player's money to $30.");
			writeSpecial("data.player.money += 10;");
			writeText("This adds $10 to the player's money.");
			writeSpecial("data.player.money -= 20;");
			writeText("This adds $20 to the player's money.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writeFunction": {
			writeText("Makes a button on screen that runs a function when clicked.");
			writeSpecial(`writeFunction("('')", "");`);
			writeText("This is a little more complicated, so here are the important examples:");
			writeSpecial(`writeFunction("writeEncounter('CODENAME1a')", "Trigger the encounter");`);
			writeText("Writes a button (like the one at the bottom of this page) that reads 'Trigger the encounter'. When clicked, it will trigger the encounter with the index 'CODENAME1a'");
			writeSpecial(`writeFunction("writeEvent('CODENAME1')", "Trigger the event");`);
			writeText("Writes a button that reads 'Trigger the event'. When clicked, it will trigger the event with the index 'CODENAME1'");
			writeSpecial(`writeFunction("changeLocation('playerHouse')", "Go back home");`);
			writeText("Writes a button that reads 'Go back home'. When clicked, it will end whatever the player is doing and send them back to the player's house.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "changeLocation": {
			writeText("Clears the screen and transports the player.");
			writeSpecial(`changeLocation("")`);
			writeText("Just as a reminder, locations have no spaces and use what's called camelCase, where each new word starts with a capital letter and the first word is uncapitalized. Park District would be parkDistrict. West Hallway would be westHallway.");
			writeText("Because the function activates as soon as its loaded, you'll really want to make a button that triggers this function instead.");
			writeSpecial(`writeFunction("changeLocation('playerHouse')", "Go back home");`);
			writeText("This writes a button that reads 'Go back home'. When clicked, it will end whatever the player is doing and send them back to the player's house.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writeEncounter": {
			writeText("Clears the screen and writes an encounter.");
			writeSpecial(`writeEncounter("")`);
			writeText("This isn't very useful by itself, because it will write the encounter right away. What's more useful is making a button.");
			writeSpecial(`writeFunction("writeEncounter('CODENAME1a')", "Trigger the encounter");`);
			writeText("Writes a button (like the one at the bottom of this page) that reads 'Trigger the encounter'. When clicked, it will trigger the encounter with the index 'CODENAME1a'");
			writeText("You can use this to continue from one encounter to the next, or provide choices.");
			writeSpecial(`writeFunction("writeEncounter('CODENAME2a')", "Take the blue pill");`);
			writeSpecial(`writeFunction("writeEncounter('CODENAME2b')", "Take the red pill");`);
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writeEvent": {
			writeText("Clears the screen and writes an event. Functionally identical to writeEncounter, but with events instead.");
			writeSpecial(`writeEvent("")`);
			writeText("Same as before, the more useful way to use this is by making a button.");
			writeSpecial(`writeFunction("writeEvent('CODENAME1')", "Trigger the event");`);
			writeText("Writes a button that reads 'Trigger the event'. When clicked, it will trigger the event with the index 'CODENAME1'");
			writeText("Unlike encounters though I use writeEvent by itself semi-frequently. If I want to trigger an event and raise trust, I can just do this:");
			writeBig("images/14-3.jpg", "I'm encapsulating an event inside an encounter. The event will be repeatable without raising Tia's trust.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "loadEncounter": {
			writeText("This should be considered an advanced function, and you will probably never need to use it.");
			writeText("This game loads multiple js files all the time. I'm not completely sure why you would want to, but here's how you load up an encounter different js file.");
			writeText(`loadEncounter("", "");`);
			writeText("The first set of quotes is the character's codename, the second is the event you want to run.");
			writeText("And here's how you load an event:");
			writeText(`loadEvent("", "");`);
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "finishEncounter": {
			writeText("So, you've written everything out for your encounter. There are two ways to finish it up and let the player get back to walking around.");
			writeText("The first is to make a button that will take the player to a desired location:");
			writeSpecial(`writeFunction("changeLocation('playerHouse')", "Go back home");`);
			writeText("The other is that you can make a button that will clear the screen and let the player go back to navigation without changing their location:");
			writeSpecial(`writeFunction("changeLocation(data.player.location)", "Finish");`);
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "locationList": {
			writeText("Most locations are pretty straightforwards. The player's house is playerHouse. Here's a list for all of them in case some are tricky to understand.");
			writeText("playerHouse - The player's house");
			writeText("apartmentOutside - Outside the player's house");
			writeText("street - The city's streets");
			writeText("shoppingDistrict - The city's shopping district.");
			writeText("vintageStreet - Vintage Street");
			writeText("parkDistrict - Park District");
			writeText("schoolEntrance - The school staircase entryway");
			writeText("northHallway - The upper floor, leads to your office, the roof, and the teacher's lounge.");
			writeText("playerOffice - The player's office");
			writeText("roof - The school's roof");
			writeText("teacherLounge - The teacher's lounge");
			writeText("westHallway - The hallway outside classroom A, also leads to the library and the cafeteria.");
			writeText("classroomA - Classroom A. I tend to put traps in here, but that's not a rule.");
			writeText("cafeteria - The school cafeteria");
			writeText("library - The school library");
			writeText("eastHallway - The hallway outside classroom B, also leads to the computer room and gym.");
			writeText("classroomB - Classroom B.");
			writeText("computerRoom - The school computer room.");
			writeText("gym - The school gym.");
			writeText("If I forgot one, let me know please!");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writePhoneSpeech": {
			writeSpecial(`writePhoneSpeech("", "", "");`);
			writeText("Nearly identical to writing regular speech, but for the phone.");
			writeSpecial(`writePhoneSpeech("kuro", "", "Haaaaaay~");`);
			writeText("This will write a text from kuro, saying 'Haaaaaay~'");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writePhoneImage": {
			writeSpecial(`writePhoneImage("images/", "Art by")`);
			writeText("Nearly identical to writing normal images, but for the phone.");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		case "writePhoneChoice": {
			writeSpecial(`writePhoneChoice("", "", "")`);
			writeSpecial(`writePhoneChoice("", "")`);
			writeText("This function is a little more complicated than previous ones since you can write two or three choices.");
			writeText("When you click on one of these choices it will append an A, B, or C to the text event.");
			writeText("Basically, here's how it works: You have a text with the index CODENAMEPhone1. At the end you give the player 2 choices.");
			writeSpecial(`writePhoneChoice("Yes please", "No thank you")`);
			writeText("Clicking 'Yes please', since its the first option will append an A. this means the phone will write the phone event CODENAMEPhone1A");
			writeText("Then at the end of CODENAMEPhone1A, you have another set of choices.");
			writeSpecial(`writePhoneChoice("To my house", "To the school")`);
			writeText("The player clicks 'To the school', the second option, which leads to the phone event CODENAMEPhone1AB.");
			writeText("Here's a diagram:");
			writeBig("images/14-4.jpg", "A handy chart!");
			writeFunction("writeEncounter('functionCheatSheet')", "Go back to the cheat sheet");
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

console.log('system.js loaded correctly. request type is '+requestType);

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