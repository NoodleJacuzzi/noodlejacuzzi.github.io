function writeScene(scene) {
	console.log("Now writing scene ID " + scene + ", the time is " + data.player.time);
	switch(scene) {
		case "start" : {
			document.getElementById('playerImage').src = "scripts/gamefiles/none.png";
			writeBig("scripts/gamefiles/logo2.png");
			writeText("Hentai University is an adult game created by NoodleJacuuzi and Captain Cryptogreek. You can find and keep up with all NoodleJacuzzi's games, including Human Alteration App, Princess Quest, and Rainy DayZ at the master index here: <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi's Index</a>");
			writeText("You can find more of Captain Cryptogreek's work here: <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek on Reddit</a>");
			writeText("This game is based (loosely) on the design of Hentai High School by Capta1n and the Hentai High School + project. However, there are no elements of school management or system of global corruption. The smaller scale means it will be more feasible to complete than either of those games.");
			writeText("As a content warning, this game features hypnosis and dubious consent between partners, and mostly depicts straight M/F sex. There are several male characters who have scenes depicting undoubtably homosexual content, but they universally have a trap/twink bodytype and no specific character relationships are ever forced on the player. Finally, all characters are portrayed as being 18 or older. Every single character is a high-school graduate, and we currently don't intend to add any character who looks underage.");
			writeText("If you'd like to avoid any specific fetishes, each character's logbook page lists the fetishes their scenes cover. Keep in mind that, as you are a hypnotist, hypnosis/mind control is so common we won't list it in the tags.");
			writeTransition("prologue", "Start the game as a man");
			writeTransition("prologueAlt", "Start the game as a futanari");
			writeText("<hr>");
			writeText("Other notes:");
			writeText("We're always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like us to consider adding another artist, or you'd like to suggest content of your own, you can shoot us a message anywhere this game is posted. You can find the Patreon here: <a href='https://www.patreon.com/noodlejacuzzi'>Patreon Link</a><br>");
			writeText("You can also send us a message directly. Noodlejacuzzi is on discord (NoodleJacuzzi#4120) or you can send an email at noodlejacuzzi@gmail.com");
			writeText("Captain Cryptogreek can be messaged on his reddit account where he regularly posts captions. You can also shoot him an email if you'd like him to proofread or you'd like to commission his skills at cryptogreekcaptions@gmail.com");
			writeText("Thank you to: Swallows999, MrManPerson, Lasse Bannow, ChronosEdge, brandon, Debarre Sonny, Drashin, iNoH8+, Mirza Hasan, murgatroid99, Oliver Jones, qwerty, Roy, Skyrim mod lvr, Wild Bill, Will Osboldstone, and 凱 陳 for funding this game! The patreon funds are split as Captain Cryptogreek has taken over as lead writer for the game.");
			writeSpecial("And special thanks to Stiggy752 for the game's new CSS!");
			writeText("I've added the option to start as a futanari. This only changes your character's image and the pronouns used (so that you're ma'am instead of sir). Please let Noodle Jacuzzi know if anyone is still referring to your as 'sir' when inappropriate, thank you.");
			writeText("The game is more freeform and slower paced than my previous works. If you get stuck, please let us know. There isn't currently a guide, but we can easily feature an FAQ here.");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("This game uses art by three artists. Enoshima Iki, Nagi Ichi, and Oreteki18kin. Hover over an image for the artist who created it. Check it out:");
			writeMed("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeMed("images/tomgirl/profile.jpg", "Art by Nagi Ichi");
			writeMed("images/purple/profile.jpg", "Art by Oreteki18kin");
			writeText("All three of the artists who's works we've used have different styles, and all work is censored due to Japan's censorship laws. We don't ever intend to mix and match within scenes, but it is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider simply avoiding characters by these artists.");
			writeTransition("oretekiTest", "See an Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeTransition("nagiTest", "See a Nagi Ichi example <br>(AT LEAST 90% GAY)");
			break;
		}
		case "prologue": {
			writeText("Dear <input type='text' id='nameSubmission' value='Thomas'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few men have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			writeText("- Yours, Principal "+data.story[8].fName+".");
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
			writeText("- Yours, Principal "+data.story[8].fName+".");
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
			writeTransition("playerHouse", "Get started");
			break;
		}
		case "oretekiTest": {
			writeBig("images/porn/5A-3.jpg", "Art by Oreteki18Kin");
			writeTransition("start", "go back");
			break;
		}
		case "nagiTest": {
			writeBig("images/tomgirl/7-5.jpg", "Art by Nagi Ichi");
			writeTransition("start", "go back");
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
			checkDay();
			checkForPhoneEvents();
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
		case "gameConsole": {
			writeTransition("cheat", "Enter cheat code");
			writeTransition("playerHouse", "Go back");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeTransition("playerHouse", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed("images/"+data.story[i].index+"/profile.jpg");
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeTransition("playerHouse", "Cancel and leave");
			break;
		}
		case "paperwork": {
			writeText("You can do paperwork here, earning some quick overtime cash based on your Counseling skill. Would you like to spend a few hours doing that?");
			writeTransition("filing", "Yes");
			writeTransition("playerOffice", "No");
			break;
		}
		case "filing": {
			var moneyMade = 5 + data.player.counseling;
			if (data.player.currentScene != scene) {
				passTime();
				data.player.money += moneyMade;
				updateMenu();
			}
			writeText("You spent some time doing paperwork. It's a slow and boring job, but money is money after all.");
			writeSpecial("You earned $" + moneyMade + "!");
			if (data.player.time != "Night") {
				writeTransition("playerOffice", "Finish up");
			}
			else {
				writeTransition("playerHouse", "It's getting late, head home");
			}
			break;
		}
		case "hypnosisTutor": {
			writeText("Testing one two three");
			writeTransition("playerHouse", "Go back home");
			break;
		}
		//Sandbox
		case "street": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";
				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('apartmentOutside')"
						style="top: 80%; left: 33%; max-width: 25%">Go Home</div>
						<div class="pictureButton" onclick="sceneTransition('schoolEntrance')"
						style="top: 60%; left: 42%; max-width: 25%">University</div>
						<div class="pictureButton" onclick="sceneTransition('shoppingDistrict')"
						style="top: 60%; left: 0%; max-width: 25%;">Shopping district</div>
						<div class="pictureButton" onclick="sceneTransition('parkDistrict')"
						style="top: 80%; left: 75%; max-width: 25%">Park district</div>
						<div class="pictureButton" onclick="sceneTransition('vintageStreet')"
						style="top: 58%; left: 75%; max-width: 25%">Vintage Street</div>
					</div>
				`;
			}
			else {
			writeTransition("apartmentOutside", "Head back home");
			writeTransition("schoolEntrance", "Head to the university");
			writeTransition("shoppingDistrict", "Head to the shopping district");
			writeTransition("parkDistrict", "Head to the park district");
			writeTransition("vintageStreet", "Go to Vintage Street");
			}
			checkForEvents();
			break;
		}
		case "apartmentOutside": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('playerHouse')"
						style="top: 55%; left: 65%; max-width: 25%;">Your Home</div>
						<div class="pictureButton" onclick="sceneTransition('street')"
						style="top: 50%; left: 28%; max-width: 25%;">Head into town</div>
					</div>
				`;
			}
			else {
				writeTransition("playerHouse", "Your home");
				writeTransition("street", "Head into town");
			}
			checkForEvents();
			break;
		}
		case "playerHouse": {
			var bg = "images/locations/playerHouse" + data.player.time + ".jpg";
			if (imagesDisabled != true) {
				switch (data.player.time) {
					case "Morning": {
						document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
						document.getElementById('output').innerHTML += `
							<div class="playerRoom">
								<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
								<div class="pictureButton" onclick="listTextbooks()"
								style="top: 20%; left: 72%; max-width: 25%;">Read a Book</div>
								<div class="pictureButton" onclick="sceneTransition('gameConsole')"
								style="top: 54%; left: 72%; max-width: 25%;">Game Console</div>
								<div class="pictureButton" onclick="sceneTransition('wardrobe')"
								style="top: 62%; left: 1%; max-width: 25%;">Wardrobe</div>
								<div class="pictureButton" onclick="sceneTransition('laptop')"
								style="top: 40%; left: 5%; max-width: 20%;">Use the computer</div>
								<div class="pictureButton" onclick="nap()"
								style="top: 52%; left: 35%; max-width: 35%;">Take a nap</div>
								<div class="pictureButton" onclick="sceneTransition('apartmentOutside')"
								style="top: 79%; left: 20%; max-width: 25%;">Leave the Apartment</div>
								<div class="pictureButton" onclick="sceneTransition('playerOffice')"
								style="top: 79%; left: 50%; max-width: 25%;">Head Straight to Work</div>
							</div>
						`;
						break;
					}
					case "Evening": {
						document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
						document.getElementById('output').innerHTML += `
							<div class="playerRoom">
								<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
								<div class="pictureButton" onclick="sceneTransition('gameConsole')"
								style="top: 54%; left: 79%; max-width: 20%;">Game Console</div>
								<div class="pictureButton" onclick="listTextbooks()"
								style="top: 20%; left: 72%; max-width: 25%;">Read a Book</div>
								<div class="pictureButton" onclick="sceneTransition('wardrobe')"
								style="top: 62%; left: 1%; max-width: 25%;">Wardrobe</div>
								<div class="pictureButton" onclick="sceneTransition('laptop')"
								style="top: 40%; left: 5%; max-width: 20%;">Use the computer</div>
								<div class="pictureButton" onclick="sceneTransition('newDay')"
								style="top: 52%; left: 35%; max-width: 22%;">Go to sleep</div> 
								<div class="pictureButton" onclick="sceneTransition('apartmentOutside')"
								style="top: 79%; left: 20%; max-width: 25%;">Leave the Apartment</div>
								<div class="pictureButton" onclick="sceneTransition('playerOffice')"
								style="top: 79%; left: 50%; max-width: 25%;">Head Straight to Work</div>
							</div>
						`;
						break;
					}
					case "Night": {

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
						document.getElementById('output').innerHTML += `
							<div class="playerRoom">
								<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
								<div class="pictureButton" onclick="sceneTransition('gameConsole')"
								style="top: 54%; left: 82%; max-width: 20%;">Game Console</div>
								<div class="pictureButton" onclick="sceneTransition('wardrobe')"
								style="top: 62%; left: 1%; max-width: 25%;">Wardrobe</div>
								<div class="pictureButton" onclick="sceneTransition('laptop')"
								style="top: 40%; left: 5%; max-width: 20%;">Use the computer</div>
								<div class="pictureButton" onclick="sceneTransition('newDay')"
								style="top: 52%; left: 35%; max-width: 22%;">Go to sleep</div>
							</div>
						`;
						break;
					}
				}
			}
			else {
				switch (data.player.time) {
					case "Morning": {
						writeFunction("nap()", "Take a nap until evening");
						writeTransition("apartmentOutside", "Leave the apartment");
						writeTransition("playerOffice", "Head straight to work");
						break;
					}
					case "Evening": {
						writeTransition("newDay", "Go to sleep early");
						writeTransition("apartmentOutside", "Leave the apartment");
						writeTransition("playerOffice", "Head straight to work");
						break;
					}
					case "Night": {
						writeTransition("newDay", "Go to sleep");
						break;
					}
				}
			}
			checkForEvents();
			break;
		}
		case "schoolEntrance": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('street')"
						style="top: 50%; left: 25%; max-width: 20%;">Head Into Town</div>
						<div class="pictureButton" onclick="sceneTransition('northHallway')"
						style="top: 52%; left: 60%; max-width: 30%;">Upper Floor</div>
						<div class="pictureButton" onclick="sceneTransition('westHallway')"
						style="top: 79%; left: 2%; max-width: 25%;">West Hallway</div>
						<div class="pictureButton" onclick="sceneTransition('eastHallway')"
						style="top: 79%; left: 73%; max-width: 25%;">East Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("northHallway", "North hallway");
			writeTransition("westHallway", "West hallway");
			writeTransition("eastHallway", "East hallway");
			writeTransition("street", "Head into town");
			}
			checkForEvents();
			break;
		}
		case "northHallway": {
			//writeBG(scene);
			if (imagesDisabled != true) {

				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('playerOffice')"
						style="top: 70%; left: 75%; max-width: 20%;">Your Office</div>
						<div class="pictureButton" onclick="sceneTransition('teacherLounge')"
						style="top: 45%; left: 75%; max-width: 20%;">Teacher's Lounge</div>
						<div class="pictureButton" onclick="sceneTransition('roof')"
						style="top: 40%; left: 40%; max-width: 20%;">Stairs To The Roof</div>
						<div class="pictureButton" onclick="sceneTransition('schoolEntrance')"
						style="top: 79%; left: 40%; max-width: 20%;">School Entrance</div>
					</div>
				`;
			}
			else {
			writeTransition("playerOffice", "Your office");
			writeTransition("teacherLounge", "Teacher's Lounge");
			writeTransition("roof", "Go to the roof");
			writeTransition("schoolEntrance", "Back to the entrance");
			}
			checkForEvents();
			break;
		}
		case "westHallway": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('classroomA')"
						style="top: 50%; left: 75%; max-width: 25%;">Classroom A</div>
						<div class="pictureButton" onclick="sceneTransition('library')"
						style="top: 50%; left: 50%; max-width: 20%;">Library</div>
						<div class="pictureButton" onclick="sceneTransition('cafeteria')"
						style="top: 53%; left: 37%; max-width: 25%;">Cafeteria</div>
						<div class="pictureButton" onclick="sceneTransition('schoolEntrance')"
						style="top: 79%; left: 35%; max-width: 20%;">School Entrance</div>
					</div>
				`;
			}
			else {
			writeTransition("classroomA", "Classroom A");
			writeTransition("library", "Library");
			writeTransition("cafeteria", "Cafeteria");
			writeTransition("schoolEntrance", "School Entrance");
			}
			checkForEvents();
			break;
		}
		case "eastHallway": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('classroomB')"
						style="top: 50%; left: 15%; max-width: 25%;">Classroom B</div>
						<div class="pictureButton" onclick="sceneTransition('computerRoom')"
						style="top: 50%; left: 45%; max-width: 25%;">Computer Room</div>
						<div class="pictureButton" onclick="sceneTransition('gym')"
						style="top: 45%; left: 75%; max-width: 20%;">Gym</div>
						<div class="pictureButton" onclick="sceneTransition('schoolEntrance')"
						style="top: 79%; left: 70%; max-width: 25%;">School Entrance</div>
					</div>
				`;
			}
			else {
			writeTransition("classroomB", "Classroom B");
			writeTransition("computerRoom", "Computer Room");
			writeTransition("gym", "Gym");
			writeTransition("schoolEntrance", "Back to the entrance");
			}
			checkForEvents();
			break;
		}
		case "playerOffice": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="listTextbooks()"
						style="top: 40%; left: 5%; max-width: 25%;">Read a Book</div>
						<div class="pictureButton" onclick="nap()"
						style="top: 50%; left: 35%; max-width: 20%;">Take a Nap</div>
						<div class="pictureButton" onclick="sceneTransition('paperwork')"
						style="top: 40%; left: 65%; max-width: 25%;">File Paperwork</div>
						<div class="pictureButton" onclick="sceneTransition('northHallway')"
						style="top: 79%; left: 35%; max-width: 30%;">Back to the Hallway</div>
						<div class="pictureButton" onclick="sceneTransition('playerHouse')"
						style="top: 25%; left: 41%; max-width: 30%;">Go back Home</div>
					</div>
				`;
			}
			else {
				writeTransition("playerHouse", "Head straight back home");
				if (checkItem("Hypnosis Textbook") == false && checkItem("Hacking Textbook") == false && checkItem("Counseling Textbook") == false) {
					writeText("<p class='centeredText'>You could study here if you had some material to work with.<span>");
				}
				if (checkItem("Hypnosis Textbook") == true) {
					writeTransition("hypnosisTextbook", "Read your hypnosis textbook");
				}
				if (checkItem("Hacking Textbook") == true) {
					writeTransition("hackingTextbook", "Read your hacking textbook");
				}
				if (checkItem("Counseling Textbook") == true) {
					writeTransition("counselingTextbook", "Read your counseling textbook");
				}
				if (data.player.time == "Morning") {
					writeFunction("nap()", "Take a nap until evening");
				}
				writeTransition("paperwork", "File Paperwork");
				writeTransition("northHallway", "Back to the hallway");
			}
			checkForEvents();
			break;
		}
		case "teacherLounge": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('northHallway')"
						style="top: 79%; left: 35%; max-width: 30%;">Back to the Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("northHallway", "Back to the hallway");
			}
			checkForEvents();
			break;
		}
		case "roof": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('northHallway')"
						style="top: 79%; left: 35%; max-width: 30%;">Back to the Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("northHallway", "Back to the hallway");
			}
			checkForEvents();
			break;
		}
		case "classroomA": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";
				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('westHallway')"
						style="top: 30%; left: 45%; max-width: 30%;">West Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("westHallway", "Back to the west hallway");
			}
			checkForEvents();
			break;
		}
		case "library": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('westHallway')"
						style="top: 79%; left: 45%; max-width: 30%;">West Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("westHallway", "Back to the west hallway");
			}
			checkForEvents();
			break;
		}
		case "cafeteria": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('westHallway')"
						style="top: 79%; left: 45%; max-width: 30%;">West Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("westHallway", "Back to the west hallway");
			}
			checkForEvents();
			break;
		}
		case "classroomB": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('eastHallway')"
						style="top: 79%; left: 65%; max-width: 30%;">East Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("eastHallway", "Back to the east hallway");
			}
			checkForEvents();
			break;
		}
		case "computerRoom": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('eastHallway')"
						style="top: 79%; left: 35%; max-width: 30%;">East Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("eastHallway", "Back to the east hallway");
			}
			checkForEvents();
			break;
		}
		case "gym": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('eastHallway')"
						style="top: 39%; left: 0%; max-width: 30%;">East Hallway</div>
					</div>
				`;
			}
			else {
			writeTransition("eastHallway", "Back to the east hallway");
			}
			checkForEvents();
			break;
		}
		case "vintageStreet": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('street')"
						style="top: 79%; left: 0%; max-width: 30%;">Back into Town</div>
					</div>
				`;
			}
			else {
			writeTransition("street", "Head into town");
			}
			checkForEvents();
			break;
		}
		case "parkDistrict": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";

				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('street')"
						style="top: 79%; left: 40%; max-width: 30%;">Back into Town</div>
					</div>
				`;
			}
			else {
			writeTransition("street", "Head into town");
			}
			checkForEvents();
			break;
		}
		case "shoppingDistrict": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";
				
				document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('street')"
						style="top: 79%; left: 0%; max-width: 30%;">Back into Town</div>
					</div>
				`;
			}
			checkForEvents();
			generateShop();
			if (imagesDisabled == true) {
				writeTransition("street", "Head into town");
			}
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Tried to access:" + tempScene + "");
			writeText("" + JSON.stringify(data) + "");
			writeText("Inventory window:" + invHidden + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("start", "Go back");
		}
	}
}

function writeEvent(scene) {
	wrapper.scrollTop = 0;
	//document.getElementById('output').innerHTML = '';
	if (scene.includes("porn") || data.player.currentScene == 'gallery') {
		document.getElementById('output').innerHTML = '';
	}
	switch (scene) {
		case "mom1": {
			writeSpeech("player", "", ""+data.story[0].fName+"! Hey!");
				writeText("She has a familiar despondent look in her eyes, but it softens as she sees you waving from across the street.");
				writeText("She gives you a small wave back and you walk over to her.");
				writeSpeech("player", "", "Care for some company?");
				writeSpeech("mom", "", "I would. Thank you.");
				writeText("Her voice is quiet, she seems down. The two of you walk in an unusual silence.");
				writeBig("images/mom/1-1.jpg", "Art by Enoshima Iki");
				writeText("She really is gorgeous, it's a shame she's not very open to hypnosis.");
				writeBig("images/mom/1-2.jpg", "Art by Enoshima Iki");
				writeSpeech("player", "", "Ah, sorry.");
				writeSpeech("mom", "", "It's fine.");
				writeText("She seems like she noticed you staring, but doesn't say anything else.");
				writeText("The two of you make your way back to the apartment complex, but when you reach your door "+data.story[0].fName+" grasps your hand and pulls you towards her apartment.");
				writeSpeech("mom", "", "You have booze right? I need a drink, and I'm almost dry.");
				writeSpeech("player", "", "Yeah, I have some.");
				writeText("...");
				writeBig("images/mom/2-1.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "And so then what happened next? Nothing! Nothing at all!");
				writeText("She got changed into her pajamas before she started downing the booze. Her massive breasts are just barely visible through the near-transparent top.");
				writeSpeech("player", "", "Uhuh. Yeah.");
				writeText("After only a few cans she seems well past buzzed and is now droning on about nothing at all. It'd be fine if you had something to drink too, but she isn't sharing.");
				writeSpeech("player", "", "Well, I should probably get going. Early day tomorrow.");
				writeBig("images/mom/2-2.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Hey.");
				writeText("She sits up, slightly wobbly.");
				writeSpeech("mom", "", "Fuck you.");
				writeSpeech("player", "", "Excuse me?");
				writeSpeech("mom", "", "I'm hot, right? Why did you just leave the other night?");
				writeSpeech("player", "", "I'm sorry? Did you want me to do something? Like, sexual, to you while you were drunk?");
				writeSpeech("mom", "", "Hell no, I would've punched the shit out of you.");
				writeSpeech("player", "", "I don't understand. What do you want then?");
				writeText("She looks frustrated, more at herself than you.");
				writeSpeech("mom", "", "I just... I want something, you know? I wanna speak my mind without drinking. I don't want to spend all day waiting for the day to end. I don't want to hear about community events and then chicken out at the last moment, telling myself 'I bet I'll have an awful time anyways!'<br>I just...");
				writeBig("images/mom/2-3.jpg", "Art by Enoshima Iki");
				writeText("She lifts her top, letting her tits flop out.");
				writeSpeech("mom", "", "Here! Stare at them all you want. I could feel you looking at them while we were walking.");
				writeSpeech("player", "", "You're my friend "+data.story[0].fName+", but I'm getting tired of this. You look gorgeous, what's wrong?");
				writeSpeech("mom", "", "I just... I don't want to be alone right now. Please stay.");
				writeSpeech("player", "", "And if I do?");
				writeSpeech("mom", "", "T-then I'll do whatever you-");
				writeBig("images/mom/2-4.jpg", "Art by Enoshima Iki");
				writeText("You grab her by the waist and take her nipple into your mouth.");
				writeSpeech("mom", "", "Mmmnn...");
				writeText("You suck hungrily on her nipple, and she's squirming in your grasp.");
				writeText("Within moments, a full-body shiver makes its way up her body and she gasps.");
				writeText("Wordlessly, she pants. She must've been on a pretty long dry spell.");
				writeSpeech("mom", "", "... You're next. Take off your pants. I'm not going to go far, but I can at least help you out too.");
				writeText("...");
				writeBig("images/mom/2-5.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Just leave everything to me. Don't think about anything else, okay?<br><i>Just keep your mind clear. No backing out now.</i>");
				writeText("Her gentle hand slides up and down your shaft.");
				writeSpeech("mom", "", "Don't hold it in. Just focus on my hand. Let it all out.");
				writeBig("images/mom/2-6.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Ah, it shot pretty high.");
				writeText("There's an almost relaxed admiration in your voice as she watches sperm ooze out from your cockhead.");
			break;
		}
		case "mom2": {
			writeSpeech("player", "", "Hello?");
			writeSpeech("mom", "", "Good morning!");
			writeBig("images/mom/3-1.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "I was just on my way to pick up a few things, wanna come?");
			writeSpeech("player", "", "Yeah, sure.");
			writeText("...");
			writeBig("images/mom/3-2.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "So, about last night.");
			writeBig("images/mom/3-3.jpg", "Art by Enoshima Iki");
			writeText("She sighs, trying to collect herself.");
			writeSpeech("mom", "", "Yes. Listen. I like you, you like me, right?");
			writeSpeech("player", "", "Yep. Wouldn't have spent as much time with you if I didn't enjoy hanging out with you.");
			writeBig("images/mom/3-4.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Ugh. This really wasn't worth all the worrying, was it?");
			writeSpeech("player", "", "Cmon. Let's head home.");
			writeText("...");
			writeBig("images/mom/3-5.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Ohhh... I don't get why you like them so much.");
			writeText("You knead her breasts, enjoying her wrthing as you run your fingers over her nipples.");
			writeBig("images/mom/3-6.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "A-ahhh...<br>How... Long are you going to spend teasing me?");
			writeSpeech("player", "", "As long as I like.");
			writeSpeech("mom", "", "Well, I can't wait anymore");
			writeText("She pulls you by the arm over to her bed, and tosses you a string of condoms.");
			writeSpeech("mom", "", "You know how to use them, right?<br>... Sorry, of course you do. I'm just-");
			writeSpeech("player", "", "Shh.");
			writeBig("images/mom/3-7.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "You're really wet.");
			writeSpeech("mom", "", "Don't say stuff like that out loud, I'll get self-conscious.<br>And I don't want to see any of that 'pump and dump' stuff I hear about, alright? IF you feel like you're going to pop early, sto-");
			writeBig("images/mom/3-8.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Aaaaa~!!<br>S-stop~! I wasn't... Nnn...");
			writeSpeech("player", "", "You're more than ready. Don't hold back. A beautiful woman like you deserves to get lost in the sensation.");
			writeSpeech("mom", "", "S-stop... Aaah~<br>Quit it with the corny... With the corny smooth talking.");
			writeSpeech("player", "", "You're right. No more words.");
			writeBig("images/mom/3-9.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Aaaah~!");
			writeText("Her legs shaking, you ride through an orgasm, filling the first condom of many tonight.");
			break;
		}
		case "kuro1" : {
			document.getElementById('output').innerHTML = '';
			writeText("As the door clicks shut behind you, she practically starts preening as she adjusts her sitting position, casually kicking off her shoes.");
			writeBig("images/kuro/1-2.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Mm~! Maybe you're not as much of a killjoy as the principal made you sound! Still...");
			writeText("She seems to think for a moment.");
			writeSpeech("kuro","","Not to be rude, but a girl's gotta be cautious, y'know? Start off a little slow with... y'know...");
			writeText("She smirks.");
			writeBig("images/kuro/1-3.jpg", "Art by Enoshima Iki");
			writeText("...");
			writeText("A minute later, you've double-checked that the door is soundly locked as "+data.story[1].fName+" pulls you over to the seat.");
			writeText("She teasingly runs a finger down right over your zipper, her nail making a faint scraping sound across the denim for a moment.");
			writeSpeech("kuro","","Mm... A nice reaction~!");
			writeText("She pokes at your stiffening, still-confined cock for a second, her eyes glinting playfully.");
			writeText("She doesn't make you wait for long, though, before she firmly grasps your zipper with one hand and your belt-buckle with the other.");
			writeSpeech("kuro","","Let's get to the fun part, okay hun~? Don't worry - first time's free.");
			writeText("With startling speed, she quickly undoes your fly, button, and belt, standing up swiftly as everything goes loose at once.");
			writeText("You quickly shimmy down your pants and underwear, though you see "+data.story[1].fName+" starting to fidget less-than-discretely with her phone.");
			writeText("Despite the distraction, her hand quickly grasps your cock, starting to stroke it.");
			writeText("Her soft palm keeps changing the pressure with every stroke, her eyes darting between her phone and your face as she alters her grip.");
			writeText("It gets better by the second, her thumb moving to spread the quickly-welling pre around your head...");
			writeSpeech("kuro","","Ah!");
			writeText("Her phone starts ringing suddenly, her hand slowing down for just a second before picking back up.");
			writeSpeech("kuro","","Sorry, gotta take this.");
			writeBig("images/kuro/2-1.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Hey! Sorry, but this isn't exactly the best time.");
			writeText("She starts picking up speed, her grip tightening firmly around your shaft.");
			writeText("When your precum starts getting smeared around, she starts moving even faster, stroking your sensitive head with every rise and fall.");
			writeSpeech("kuro","","A "+data.player.gender+", yeah.");
			writeText("Her eyes move to yours for a moment, her lips quirking up into a small smile.");
			if (data.player.gender == "man") {
				writeSpeech("kuro","","He's... a new guy at school. And he's not a bad size...");
			}
			if (data.player.gender == "woman") {
				writeSpeech("kuro","","She's... a new counselor at school. And she's not a bad size...");
			}
			writeText("Her eyes drift down as she says that, her lollipop rolling around in her mouth for a second.");
			writeText("She changes her grip again, the sound of her jacking you off getting even louder.");
			writeText("After a second, "+data.story[1].fName+" laughs.");
			writeSpeech("kuro","","Holy shit, you can hear that?");
			writeText("She shifts the phone a bit, smirking as she shimmies a little closer to you.");
			writeText("Her hand starts moving even faster, dragging a guttural sound from your throat as you're brought to the edge.");
			writeSpeech("kuro","","Mm~. Trust me, hun, you ain't heard <i>nothin'</i> yet.");
			writeText("She aims your cock straight up, and...!");
			writeBig("images/kuro/2-2.jpg", "Art by Enoshima Iki");
			writeText("You try to keep your groan as quiet as possible, but you can still faintly hear something over her phone as you paint yourself and "+data.story[1].fName+"'s hand.");
			writeSpeech("kuro","","Hah~! Oh my God, you are <i>such</i> a slut!");
			writeText("Her hand has slowed to barely more than a crawl, milking the very last drops out before she raises her cum-covered hand and looks you in the eyes.");
			if (data.player.gender == "man") {
			writeSpeech("kuro","","One sec, gotta clean up real quick - his load was <i>huge.</i>");
			}
			if (data.player.gender == "woman") {
			writeSpeech("kuro","","One sec, gotta clean up real quick - her load was <i>huge.</i>");
			}
			writeText("Maintaining eye-contact, she brings her hand to her mouth and rolls her lollipop around, exposing her slick, wet tongue as she laps up your jizz with a smirk.");
			writeSpeech("kuro","","You know, hun...");
			writeText("She leans forward, pulling the phone far enough away not to be overhead...");
			writeSpeech("kuro","","Now that I know how messy you can get, next time? <i>I'll have to catch it all with my mouth.</i>");
			writeText("She slowly stands up, rolling her wrist a bit as she brings the phone back to her ear.");
			writeSpeech("kuro","","Introduce you?");
			writeText("She looks you over appraisingly.");
			writeSpeech("kuro","","Maybe later, but for now?");
			writeText("She gives you a saucy wink, moving for the door.");
			if (data.player.gender == "man") {
			writeSpeech("kuro","","He's <i>all</i> mine.");
			}
			if (data.player.gender == "woman") {
			writeSpeech("kuro","","She's <i>all</i> mine.");
			}
			writeText("With surprising precision, she unlocks and opens the door just enough to slip through, the sound of it shutting almost immediately resounding.");
			writeText("You are, in all honesty, a little spent. It actually takes you a moment to realize that she couldn't have locked it behind her, which you quickly jump up to fix.");
			writeText("Still... That was one <i>Hell</i> of a handjob.");
			if (data.player.currentScene != 'gallery') {
				data.player.currentScene = "playerOffice";
				passTime();
				data.story[1].trust = 20;
				writeTransition(data.player.currentScene, "Clean yourself up");
			}
			break;
		}
		case "kuro2" : {//second handy
			if (data.player.currentScene != 'gallery') {
			if(data.player.money < 5){
				writeSpeech("kuro","","Um... You <i>do</i> realize you don't have enough, right?");
				writeFunction("writeEncounter('kuro', 'kuro4')", "Choose something else");
				writeTransition(data.player.currentScene, "Leave her be");
				scene = "kuro1";
				break;
			}
			document.getElementById('output').innerHTML = '';
			data.player.money -=5;
			}
			writeSpeech("kuro","","Mm~! I like that choice, hun!");
			writeText("She smiles, walking ahead of you to your office.");
			writeText("It doesn't take you two long at all to get there, or for you to get undressed.");
			writeText("A few seconds later, she smirks as she raises her hand to her mouth.");
			writeSpeech("kuro","","Let's make just a little more noise this time, okay?");
			writeText("Sliding her lollipop into her cheek, she runs her wet tongue across and palm and fingers, covering it in her saliva.");
			writeText("The slick sensation of her hand, tightening and letting go quickly and rhythmically, immediately has you biting back a moan.");
			writeText("Then, "+data.story[1].fName+" raises her phone, the screen showing some other girl's name on the other end of the line.");
			writeSpeech("kuro","","Don't worry about her leaking anything about you, stud. Even if I actually <i>did</i> tell her your name, her <i>pussy's</i> the only thing that'd be leaking anywhere.");
			writeText("She relaxes back a bit, bringing the phone to her ear.");
			writeSpeech("kuro","","Honestly, having her listen while I get you off... I didn't realize how much of a <i>turn-on</i> it'd be.");
			writeText("As she picks up speed, she angles the phone a bit more and turns up her volume.");
			writeText("A second later, you hear the sound of a woman moaning, audibly fingerfucking herself to the sound of the fast, sloppy handjob "+data.story[1].fName+"'s giving you.");
			writeText("Between both her voice and " +data.story[1].fName+"'s hand, you barely last a few minutes before you start spurting.");
			writeText("After a few seconds...");
			writeBig("images/kuro/2-3.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","So, how was it?");
			writeSpeech("kuro","","Ah, you didn't... Well, that's fine.");
			writeText("She smiles, raising her hand to her mouth again as she laps up some of your cum.");
			if (data.player.gender == "man") {
			writeSpeech("kuro","","It doesn't look like this guy has a problem with trying again some other time.");
			}
			if (data.player.gender == "woman") {
			writeSpeech("kuro","","It doesn't look like this girl has a problem with trying again some other time.");
			}
			writeText("She double-checks her clothes for any leftover jizz on her before she gets up and leaves, winking to you just before slipping through the door.");
			if (data.player.currentScene != 'gallery') {
			if(data.story[1].trust < 22){
				data.story[1].trust += 1;
			}
			unlockScene("kuro2");
			data.player.currentScene = "playerOffice";
			passTime();
			writeTransition(data.player.currentScene, "Lock the door and clean yourself up");
			}
			break;
		}
		case "kuro3" : {//nonchalant back
			if (data.player.currentScene != 'gallery') {
			if(data.player.money < 10){
				writeSpeech("kuro","","Um... You <i>do</i> realize you don't have enough, right?");
				writeFunction("writeEncounter('kuro', 'kuro4')", "Choose something else");
				writeTransition(data.player.currentScene, "Leave her be");
				scene = "kuro1";
				break;
			}
			document.getElementById('output').innerHTML = '';
			data.player.money -=10;
			}
			writeSpeech("kuro","","Jerking on me, huh? As long as you pay for any stains, <i>I'm all yours, hun.</i> Of course, can't exactly do this one here, so...");
			writeText("She slips a piece of paper into your pocket with a wink.");
			writeSpeech("kuro","","I'll leave the back-door unlocked.");
			writeText("She walks off, a clear sway in her hips that <i>almost</i> bounces her skirt high enough to see under.");
			writeText("You finish your business for the day quickly, heading over to the address she gave you.");
			writeText("...");
			writeText("You feel a bit odd going around the house but, sure enough, the back door <i>is</i> unlocked.");
			writeText("You shut it behind you, the sound of it ringing loudly in the otherwise-silent house.");
			writeSpeech("kuro","","In here~!");
			writeText("Following her voice, you quickly spot her lazing on her bed, phone in hand.");
			writeBig("images/kuro/3-1.jpg");
			writeText("She's gently bouncing her legs on the bed, shifting yet another lollipop in her mouth.");
			writeSpeech("kuro","","Mm, don't mind the phone. I'm just texting, so nobody'll hear you... this time.");
			writeText("She shifts a bit, her shift sliding further up and exposing more of her back.");
			writeSpeech("kuro","","You don't plan on making a girl wait, do you?");
			writeText("...");
			writeText("Pretty soon, you've fished out your cock, jerking off above her back,");
			writeText(data.story[1].fName+" doesn't seem interested, just typing a few texts that you can't see.");
			writeText("After another minute or so, though, she shifts positions a bit, her legs bending at the knees as her feet come up.");
			writeText("You have to grit your teeth as she starts toying gently with your balls, her eyes moving away from her phone and focusing on you.");
			writeSpeech("kuro","","Jeez. Do you take this long on your own all the time?");
			writeText("One foot continues rubbing against your sack, the other teasing at your head as you keep stroking.");
			writeText("Despite that, even as you get closer to the edge, she just returns to her phone, typing with one hand...");
			writeBig("images/kuro/3-3.jpg");
			writeBig("images/kuro/3-4.jpg");
			writeSpeech("kuro","","Ah, you're finished. And it looks like you shot a pretty big load, too... Not too bad.");
			writeText("She shifts around a bit, angling her phone down.");
			writeSpeech("kuro","","There's not a whole lot a girl can do when you're the one jerking, but it looks like you still enjoyed yourself. Anyway, I'm meeting with someone in a bit, so I have to get changed. Later, hun.");
			writeText("She calmly pulls her cum-covered socks off, walking out of the room, and something about the devil-may-care attitude just <i>gets</i> you this time.");
			writeSpeech("player","","Hey, "+data.story[1].fName+". There's a picture I wanted to show you sometime. Mind if I text it to you later?");
			writeText("She pauses, before shrugging.");
			writeSpeech("kuro","","Sure, knock yourself out.");
			if(data.player.hacking == 0){
				//writeText("With that, she walks out of sight, leaving you to get your clothes on and start thinking about what you'll need for a bit of <i>digital</i> hypnosis. Maybe there's someone at school who's better with computers...?");
			}
			else{
				//writeText("With that, she walks out of sight. Considering your skill with digital devices, it shouldn't be too hard to put something together that'll <i>really</i> catch her attention...");
			}
			writeText("You have an idea, but no idea how to pull it off. Maybe inspiration will strike you later? For now, you're finished.");
			if (data.player.currentScene != 'gallery') {
			data.player.currentScene = "vintageStreet";
			passTime();
			writeTransition(data.player.currentScene, "Leave");
			if(data.story[1].trust < 24){
				data.story[1].trust += 1;
			}
			}
			break;
		}
		case "kuro4" : {//blowjob - NOT WRITTEN
			break;
		}
		case "kuro5" : {//hypno into mindbreak sex - NOT WRITTEN
			break;
		}
		case "kuro5a" : {//raw sex - NOT WRITTEN
			break;
		}
		case "kuro5b" : {//disinterested sex - NOT WRITTEN
			break;
		}
		case "tomgirl1": {
			document.getElementById('output').innerHTML = '';
			writeText("Although he tries to argue, your hypnosis keeps him in check and he takes you over to his house.");
			writeText("...");
			writeSpeech("player", "", "I can't believe you had this whole outfit in your closet.");
			writeSpeech("tomgirl", "", "Sh-shut up!");
			writeSpeech("player", "", "Doesn't seem like you have a sister. Did you buy this for yourself?");
			writeText("He keeps quiet, blushing heavily.");
			writeSpeech("player", "", "Oh well, it doesn't really matter right now. It's about time to get started.");
			writeSpeech("tomgirl", "", "Get started with w- Oh fuck no...");
			writeBig("images/tomgirl/2-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "You fucking sicko, you pervert degenerate. Are you seriously exposing yourself in front of-");
			writeSpeech("player", "", "Shut up, get to work.");
			writeBig("images/tomgirl/2-2.jpg", "Art by Nagi Ichi");
			writeText("Grumbling, he grasps your shaft as his eyes glaze over, but only for a moment.");
			writeBig("images/tomgirl/2-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Waitwaitwait what the fuck am I doing?<i><br>Why did I just grab it? Is he controlling me?</i>");
			writeSpeech("player", "", "Damn, your hands are pretty soft.");
			writeSpeech("tomgirl", "", "<i>Fuck, stop talking. This is weird. I feel weird, right? My hand feels...</i>");
			writeText("As his face grows even redder, he starts increasing his pace. His technique is fantastic.");
			writeSpeech("tomgirl", "", "<i>Fuckfuckfuck hurry up and cum already! I don't even last half as lon-</i>");
			writeBig("images/tomgirl/2-4.jpg", "Art by Nagi Ichi");
			writeText("As you start to cum, his jerking slows down. He goes from quick rapid strokes to slow milking tugs.");
			writeBig("images/tomgirl/2-5.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "<i>What... What is this feeling?</i>");
			writeSpeech("player", "", "Nice work. I'll see you next time I'm feeling pent up.");
			writeSpeech("tomgirl", "", "...");
			tempScene = 'vintageStreet';
			if (data.player.currentScene != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl2": {
			document.getElementById('output').innerHTML = '';
			writeText("Instead of arguing "+data.story[2].fName+" just looks downcast as he hears your request, understanding that resistance is impossible.");
			writeText("...");
			writeSpeech("player", "", "God damn, it's immaculate.");
			writeSpeech("tomgirl", "", "S-stop staring! I clean myself properly, so what?");
			writeBig("images/tomgirl/3-1.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "This is a lot more than just regular cleaning. Do you play with yourself regularly down here?");
			writeSpeech("tomgirl", "", "...");
			writeSpeech("player", "", "I asked you a question-!");
			writeBig("images/tomgirl/3-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "...!");
			writeText("You shove your index finger into him, and it goes in with little resistance. You already know the answer, but you want to see him squirm.");
			writeSpeech("player", "", "If you don't start talking, I'm gonna force some answers out of you.");
			writeBig("images/tomgirl/3-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "And yet he remains silent.");
			writeText("...");
			writeText("After a few minutes of silence and anal torment, his dick has started to dribble precum.");
			writeSpeech("player", "", "Feel like talking now, or do I need to keep going until you cum?");
			writeBig("images/tomgirl/3-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "F-fucking fine! Yes! I play with my ass, is that what you wanted to hear?");
			writeSpeech("player", "", "See? Was that so hard?");
			writeText("You pull your hand away, there's some resistance, as if his body didn't want to let go.");
			writeSpeech("player", "", "Keep yourself ready down there, I'll want a piece of that ass someday.");
			writeSpeech("tomgirl", "", "S-someday?");
			writeText("There's a lot of apprehension in his voice, but also a hint of disappointment.");
			tempScene = 'vintageStreet';
			if (data.player.currentScene != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl3": {
			document.getElementById('output').innerHTML = '';
			writeText(""+data.story[2].fName+" nods his head and starts walking towards the gym. To avoid suspicion, you follow after a few minutes.");
			writeText("...");
			writeSpeech("player", "", "Ah, damn. You've got some talent, for an amateur.");
			writeBig("images/tomgirl/4-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Mmph!<i><br>Asshole!</i>");
			writeSpeech("player", "", "And that's some nice lingerie. Did you wear that today just for me?");
			writeSpeech("tomgirl", "", "Mmph *slurp* Mm-mm!");
			writeSpeech("player", "", "Hey don't feel too bad. Tell you what, since you wore something nice, you can go ahead and play with yourself as you blow me. I know you want to.");
			writeBig("images/tomgirl/4-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Mmmph...<i><br>Ignore it "+data.story[2].fName+", this is just a reflexive boner. Just keep him happy so he doesn't go any farther.<br>Any farther... With something like this...</i>");
			writeBig("images/tomgirl/4-3.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "Oh wow! Now that's the energy I like!");
			writeText("He doesn't even seem to hear you, completely lost in trying to thrust you down his throat as far as he can manage. Which isn't that far, but points of enthusiasm.");
			writeSpeech("player", "", "Just a little more... Gonna fill your mouth with my cum, your ready?");
			writeBig("images/tomgirl/4-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "<i>Cumming! Fuck!</i>");
			writeText("You start cumming into his mouth, he's so lost in his own orgasm that he swallows every drop on reflex.");
			writeText("Once he's finished he realized what's happen, takes your dick out of his mouth, and starts spitting out onto the floor.");
			writeSpeech("player", "", "Careful not to make too much of a mess. Don't want anyone asking questions, do we?");
			tempScene = 'gym';
			if (data.player.currentScene != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl4": {
			document.getElementById('output').innerHTML = '';
			writeSpeech("tomgirl", "", "... What?");
			writeSpeech("player", "", "I said, send me a video of-.");
			writeSpeech("tomgirl", "", "I heard what you said! Fuck, fine! When?");
			writeSpeech("player", "", "Now. Head home and I'll wait for it in my office.");
			writeSpeech("tomgirl", "", "You can't be serious.");
			writeText("You were serious.");
			writeText("...");
			writeText("*PLING*");
			writeText("A notification icon pops up as you receive an email. Inside is a video clip of "+data.story[2].fName+" laying naked on his bed.");
			writeBig("images/tomgirl/5-1.jpg", "Art by Nagi Ichi");
			writeText("There's a frustrated, almost defeated expression in his eyes as he sucks on a black dildo.");
			writeText("You don't remember telling him to play with his ass, but if that's his go-to...");
			writeBig("images/tomgirl/5-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Aaaah~!");
			writeText("He pushes the black dildo into his asshole, his dick wobbles as the rubber toy slides into him.");
			writeText("The video almost seems like it skips on parts, editing out bit of him talking.");
			writeText("He pushes the toy deeper into himself, finally hilting it and...");
			writeBig("images/tomgirl/5-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "C-cumming...~");
			writeText("His untouched dick spurts out a clear white fluid as he pulls and thrusts the toy. The orgasm goes on for almost a full minute as he rhythmically punishes his prostate.");
			writeText("By the time he's finished it seems more like he stops from exhaustion, like he could've kept going and extended the orgasm even longer.");
			writeBig("images/tomgirl/5-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Ghhff... Hope you're fucking happy, pervert...");
			tempScene = 'playerOffice';
			if (data.player.currentScene != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl5": {
			document.getElementById('output').innerHTML = '';
			writeText("It's finally time for you to take this all the way. You get "+data.story[2].fName+" out of class and take him to his place.");
			writeBig("images/tomgirl/5-5.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Ghhg... God, you're way too fucking big...");
			writeSpeech("player", "", "You're the one who was eager to get on top.");
			writeSpeech("tomgirl", "", "T-that's because you're controlling me, asshole! Making me feel all this weird shit.");
			writeSpeech("player", "", "I'm not making you feel anything, this is your body acting honestly. You're a natural sissy buttslut who can't get enou-");
			writeBig("images/tomgirl/5-6.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Aaaah~! Cumming~~~");
			writeSpeech("player", "", "I don't remember giving you permission to cum so quickly. Hey!");
			writeBig("images/tomgirl/5-7.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Ghhg...");
			writeText("He doesn't seem able to hear you, lost in a post orgasm haze.");
			writeSpeech("player", "", "Having a good time?.");
			writeText("He doesn't answer, soaking in the afterglow until you push him off of you before turning him around.");
			writeSpeech("tomgirl", "", "H-hey! What're you-");
			writeBig("images/tomgirl/5-8.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Aaah~!");
			writeSpeech("player", "", "You had your chance, now I'm in control.");
			writeSpeech("tomgirl", "", "No! Stop! You're too rough!");
			writeBig("images/tomgirl/5-9.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Nhhhg!<br><i>Fuck! He's fucking huge! He's destroying my ass!</i>");
			writeSpeech("player", "", "You. Are. Mine.");
			writeText("You punctuate each word with a powerful thrust, slapping your hips against his ass.");
			writeSpeech("tomgirl", "", "<i>Fuck! It feels so good~! Gonna...!</i>");
			writeBig("images/tomgirl/5-10.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Cumming~! I'm cumming on your dick~!");
			writeText("You don't give him a chance to rest. You're pushing right through to the next orgasm without a break.");
			writeText("...");
			writeBig("images/tomgirl/5-11.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Cumming... I'm cumming again~...");
			writeText("His dick twitches and bobs, dryly cumming for the fourth time.");
			writeSpeech("player", "", "You're mine now. You'll never have a normal life again.");
			writeSpeech("tomgirl", "", "Y-yes "+data.player.honorific+"~!");
			writeText("The two of you go for a few more rounds before you cum inside his ass. You let him fall onto the bed, twitching and broken.");
			writeText("With him completely broken, he'll probably take a break from school for now. Once he comes back, he'll be a completely different 'man'.");
			data.story[2].trust = 100;
			if (data.player.currentScene != 'gallery') {
				data.player.currentScene = 'vintageStreet';
			}
			break;
		}
		case "tomgirlFinish": {
			data.story[2].trust += 1;
			sceneTransition(tempScene);
			break;
		}
		case "purple1": {
			writeSpeech("player", "", "You sure took my advice to heart.");
			writeBig("images/purple/1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hmm? I'm just acting like I normally do.");
			writeText("Her personality no longer held back, she actually comes across as very strong willed.");
			writeSpeech("player", "", "Yes yes, just act <b>normal</b>. Speaking of which, you'll be sucking my dick like <b>normal</b>, right?");
			writeText("She scoffs at the question, looking more than a little confused.");
			writeSpeech("purple", "", "Of course! Why are you even bothering to ask instead of fishing it out?");
			writeBig("images/purple/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Eheh, it's excited.");
			writeText("She grasps your hefty dick in her hand, admiring it's weight and musk.");
			writeSpeech("purple", "", "God, it's huge. You'll completely wreck me, you know that, right? You'll really fuck me up with this thing, you know?");
			writeSpeech("player", "", "Yeah, I will. Open up, I need some relief. You come into my office with a body like yours, you really had this coming, you know?");
			writeSpeech("purple", "", "Of course! And it's totally normal that I pay you back for all that");
			writeText("She plants a fat kiss on the head of your cock.");
			writeSpeech("purple", "", "hard");
			writeText("She runs her tongue up your length.");
			writeSpeech("purple", "", "work you did helping a little tease like me!");
			writeText("You grab her by the hair and press the head of your dick against her lips. She lets out an appreciative giggle before she opens up.");
			writeSpeech("player", "", "I'm gonna have fun with you. And just remember, having an orgasm while choking on your counselor's fat dick is totally <b>normal</b>, okay?");
			writeText("...");
			writeBig("images/purple/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Mmmpph!");
			writeText("She cums for the third time from the taste of your cock, rocking her brain with an orgasm as your cum backs up out her nose.");
			writeText("Her underwear is soaked clean through, and there's a growing wet spot on the floor.");
			writeText("She's taken the initiative though, she's in control and she wants to keep choking on your length.");
			writeText("Even as you can hear her gagging and unable to breath, she grinds her pussy against the floor and pushes herself deeper.");
			writeText("Finally you pull her by the hair off of you. She's barely able, but she gives out a whine as your cock slides out of her mouth.");
			writeText("After some time coughing the massive amount of jizz out of her lungs, she looks up at you.");
			writeBig("images/purple/1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Th-thank-*COUGH*<br>Thank you... *ahem*... Very much master. Can we do it again?");
			writeSpeech("player", "", "Next time. We don't want your mother getting too suspicious. Clean yourself up, I'll see you later.");
			writeSpeech("purple", "", "I will master!");
			break;
		}
		case "purple2": {
			writeBig("images/purple/2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Ehehe... I'm ready for you. Fish it out! Please!");
			writeText("You pull down your pants and "+data.story[3].fName+" squirms in appreciation.");
			writeSpeech("purple", "", "Yes! That's what I want! Take me, own me!");
			writeSpeech("player", "", "Damn, you're really broken, aren't you? You dove headfirst into the hypnosis instead of trying to fight it at all.");
			writeSpeech("purple", "", "Please... I want to feel good...");
			writeSpeech("player", "", "And you will. But you understand what I'm about to do, right?");
			writeText("You slap your cock against her snatch teasingly.");
			writeSpeech("purple", "", "Yessss...~!");
			writeBig("images/purple/2-4.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "YEEEeeeSS~!!!");
			writeText("She's squealing like a firecracker went off inside her brain. You grab her by the mouth to keep her quiet.");
			writeSpeech("player", "", "Shut up. Your mother isn't ready to find us yet.");
			writeSpeech("purple", "", "Mmmm~!<br><i>More! More!</i>");
			writeText("You push your dick inside her, stirring up her insides as she squeezes your length.");
			writeText("Tears have started to form in he eyes as her brain tries to process the sensations.");
			writeSpeech("player", "", "Breaking down already, huh? I-");
			writeText("You're interrupted while you pull out when she wraps her legs around you.");
			writeSpeech("player", "", "Fine. I see what you want. One more scream out of you though and we stop here.");
			writeText("...");
			writeBig("images/purple/2-5.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Hah... Hah...<br><i>Can't think... More...</i>");
			writeText("Her cunt thoroughly filled with cum, you pull out only to hear a sound from behind you.");
			writeSpeech("player", "", "We've got a voyeur. Come with me, "+data.story[3].fName+".");
			writeSpeech("purple", "", "Mhm...");
			break;
		}
		case "purple3": {
			writeSpeech("purple", "", "Yes! Yes! Yes!");
			writeSpeech("chubby", "", "Ghg... Huh? Where- W-WHAT?!");
			writeBig("images/purple/3-1.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Harder! Make me your bitch!<br>Ah! M-morning mom!");
			writeSpeech("chubby", "", "W... What's...");
			writeSpeech("player", "", "Sorry about this ma'am. I really wish you hadn't been so nosey. If I had more time, this could've been a simple and clean process. But I obviously can't get you relaxed, so I need to get you mentally broken.");
			writeSpeech("chubby", "", "I don't understand...");
			writeSpeech("purple", "", "Nggh... Cmon mom! Stop distracting him! Fuck, I'm cumming again!");
			writeText("You lift "+data.story[3].fName+" up so that when she squirts on your cock a little of it gets onto "+data.story[4].fName+"'s face.");
			writeSpeech("chubby", "", "W-why? Why? Why!?");
			writeSpeech("player", "", "I need to break you. What better way to do that...");
			writeText("You start rapidly thrusting into "+data.story[3].fName+", making sure "+data.story[4].fName+" has a good view of your cock slamming into her daughter's cunt.");
			writeSpeech("player", "", "Than to fill your daughter's cunt with my cum right in front of you?");
			writeBig("images/purple/3-2.jpg", "Art by Oreteki18kin");
			writeSpeech("purple", "", "Yesssss~! Fuck, you're filling my womb with your cockmilk!");
			writeSpeech("player", "", "And am I forcing you to do this?");
			writeSpeech("purple", "", "No! I want this! I wanna wake up every day rubbing my pussy thinking about you! I wanna sneak into your office so I can suck your cock while you work! I want you to walk in and start fucking me in front of everyone right in the middle of class!");
			writeSpeech("chubby", "", "...");
			writeText("Once you're finished with "+data.story[3].fName+" you grab your pendant and hold it in front of "+data.story[4].fName+"'s face.");
			writeSpeech("player", "", "Don't worry, this has all been a bad dream. Don't you want to wake up?");
			writeSpeech("chubby", "", "... Yes please...");
			writeSpeech("player", "", "Then watch this pendant closely. This pendant is your salvation. Watch it swing from side to side, and everything will be <b>normal</b>.");
			writeSpeech("chubby", "", "Everything... Normal...");
			break;
		}
		case "chubby1": {
			writeSpeech("chubby", "", "Ah, hello!");
			writeText(""+data.story[4].fName+" ushers you in quickly and closes the door.");
			writeSpeech("chubby", "", "Welcome back, master. I'm afraid "+data.story[3].fName+" is out right now. She's meeting with some friends. She's been doing so well lately, thank you again for all you've done.");
			writeSpeech("player", "", "No problem. I'm actually here for you.");
			writeSpeech("chubby", "", "Oh? Ah, I see.");
			writeText("One look at the bulge in your pants is all she needs to see.");
			writeText("...");
			writeBig("images/chubby/1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Hmmhmm~ It's so warm and wet inside me, isn't it? Is it to your liking? I haven't had a "+data.player.gender+" in years, never someone like you, master.");
			writeSpeech("player", "", "You feel amazing, almost as tight as your daughter's pussy.");
			writeSpeech("chubby", "", "So polite! But, you know how a "+data.player.gender+" like you shows his honesty, right? <br>Not~<br>With~<br>Words~");
			writeText("Each word is punctuated with a gyration of her hips and a rhythmic clench of her pussy.");
			writeSpeech("chubby", "", "You're so cute master, you've got such a dreamy look on your face. Will you cum inside me? Will you pump enough sperm inside me to make me cumdrunk?");
			writeText("You can feel your balls clenching as you hear the front door opening and shutting after.");
			writeBig("images/chubby/1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Cumming~<br>Welcome home honey! Master is here!");
			writeSpeech("purple", "", "Master?!");
			writeText(""+data.story[3].fName+" runs into the room as your cock flops out of her mother.");
			writeBig("images/chubby/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("chubby", "", "Don't worry honey, I saved you some. I'm sure he'll be ready for another round after he watches you suck his cum out of my pussy.");
			writeText("...");
			writeBig("images/purple/3-3.jpg", "Art by Oreteki18kin");
			writeText("You collapse backwards onto the bedspread, totally spent.");
			writeSpeech("chubby", "", "Now now "+data.story[3].fName+", no need to be greedy.");
			writeText("The daughter doesn't have the stamina of the mother. After only two rounds "+data.story[3].fName+" couldn't take any more, and now she grimaces as she sucks the results of your fourth and fifth round off her mother's tits.");
			writeSpeech("chubby", "", "Now, what do we say for master?");
			writeSpeech("purple", "", "*Mwah*!<br>Thank you for filling us up master!");
			writeText("After a short break, you opt to get a move on as they fall asleep coated in your pungent cum.");
			break;
		}
		case "maid1" : {
			document.getElementById('output').innerHTML = '';
			writeText("When you pull out your cock, she nearly chokes on her drink.");
			writeSpeech("maid","","Hm. You're big enough to do porn.");
			writeText("She pauses.");
			writeSpeech("maid","","Actually, <i>do</i> you do porn? Because I'm imagining eating out my boss under the desk while she watches a video of you fucking someone. It's... pretty hot.");
			writeSpeech("player","","I can't say that I've ever done it. But we could record this, I guess? I have my phone.");
			writeText("She flinches back, now scowling.");
			writeSpeech("maid","","Whoa, hold up. Do I seriously look like the kind of girl who'd let you record her?");
			writeSpeech("player","","...It's only natural?");
			writeText("She blinks once.");
			writeSpeech("maid","","Huh. Right, I guess it is. Forgot about that.");
			writeText("Okay, just what kind of relationship does she have to have with her boss for her to be <i>this</i> easy to control?");
			writeText("After a second, she chugs the last of the beer and casually tosses it to the kitchen. It lands perfectly into the bin.");
			writeSpeech("player","","Whoa. Nice sho-");
			writeText("Your words stop in your mouth as you see her kneel down in front of you, staring at your cock.");
			writeSpeech("maid","","You gonna whip it out or what? I don't want the video to start mid-way.");
			writeText("...Fuck it, let's do this. You quickly pop out your phone, setting it to record.");
			writeText("She looks at the camera for a second, before a grin spreads across her face as she looks greedily at your dick.");
			writeBig("images/maid/2-2.jpg", "Art by Oreteki18kin");
			writeSpeech("maid","","I'll give you my number after I milk out your first load, so you'd better send that to me.");
			writeText("With that, she leans forward, her tits completely engulfing your cock. She starts kneading herself around you, but quickly figures out a major problem.");
			writeSpeech("maid","","Damn... Too much friction. Do you mind if I try something real quick?");
			writeSpeech("player","","Sure, go a-<i><b>HEAD-!</b></i>");
			writeText("In one smooth movement, she takes your cock to the base, pausing only to press your head past her throat barrier.");
			writeText("One second turns to two as she starts humming something, the vibrations carrying through your cock before she slowly pulls back.");
			writeText("Her drool oozes out all over your cock and her tits as she nods with satisfaction.");
			writeSpeech("maid","","My boss throat-fucked me with a strap-on once, and there was a <i>lot</i> of extra-slick spit.");
			writeSpeech("player","","...Okay, but can you do that again?.");
			writeSpeech("maid","","Nah. She's distended my throat before, but we never tried a titjob. Didn't make sense with a strap-on, y'know?");
			writeText("With that, she wraps her arms around her tits and winks at the camera.");
			writeSpeech("maid","","Thinking of you, babe~!");
			writeText("Her spit-slick tits shift around your length, her shoulders wiggling as she shakes her whole body.");
			writeText("After a few seconds, she presses herself entirely against you, rubbing her breasts up and down your crotch as your head pokes out of and into her cleavage.");
			writeSpeech("maid","","Don't forget to moan for the audience, "+data.player.name+".");
			writeText("Like she has to remind you...");
			writeText("You don't even bother trying to keep quiet as her head ducks down, her tongue teasing your tip every time it pops out.");
			writeText("Seconds quickly turn to minutes as she slowly changes things up.");
			writeText("Pretty quickly, you realize that she's checking what makes you moan the loudest and doing more of it.");
			writeText("Her hands both go down to your balls, carefully kneading them around and toying with them as her arms press her tits together tighter.");
			writeSpeech("player","","I'm getting close...!");
			writeSpeech("maid","","Fuck, the cumshot's her favorite part. Steady the phone against the couch!");
			writeText("You quickly do so, holding off just long enough to get it in position, before...");
			writeBig("images/maid/2-3.jpg", "Art by Oreteki18kin");
			writeText("You blast your load across her face and tits, a large puddle forming in her cleavage as she catches some with her mouth.");
			writeText("Your hips buck hard as you slip out from between her breasts, before the last few shots are expended.");
			writeSpeech("player","","You're fucking <i>amazing</i>, "+data.story[5].fName+".");
			writeText("She just half-scoffs, swallowing most of your load easily.");
			writeSpeech("maid","","Movie's not over yet, babe. We've still got <i>clean-up</i>.");
			writeText("The next minute or so is spent with her licking every drop from your shaft, even licking it off of your stomach before she grabs the phone.");
			writeText("Pressing your cock against the outside of her chest, she winks and quickly taps a few buttons.");
			writeSpeech("maid","","...'Kay, video's over, and I took a nice little photo. Mind if I plug my number in?");
			writeText("She doesn't bother waiting for a response.");
			writeSpeech("maid","","Aaaaand... sent.");
			writeText("She flops back casually against the couch, grabbing a box of tissues from beneath it and starting to wipe off her chest.");
			writeSpeech("maid","","Hey, do you mind if I introduce the two of you later? She's wanted to spice things up with a real dick for a while now.");
			writeText("Feeling drained down to the last drop, you just nod.");
			writeSpeech("maid","","Nice! Thanks so much, hun. You're a sweetie.");
			writeText("She gives you a quick peck on the cheek.");
			writeSpeech("maid","","Now, I'm off to take a shower, otherwise the smell of cum'll have me jilling it for hours. Talk to you later, babe!");
			writeText("She bounds off casually, heading into what you assume is the bathroom.");
			writeText("...");
			writeText("It takes a while, but you do manage to pull yourself out of the afterglow and away from the couch.");
			writeText("You're pretty interested in meeting this boss of hers but, for now, maybe it's better to head home and shower...");
			writeTransition(data.player.currentScene, "Finish");
			if (data.player.currentScene != 'gallery') {
				
			data.story[5].trust += 1;
			passTime();
			}

			//data.story[5].trust = 100;

			break;
		}
		case "mistress1" : {
			document.getElementById('output').innerHTML = '';
			writeText("After arriving at her place, she shows you the living room for a few seconds before smiling almost nervously.");
			writeSpeech("mistress","","Just one sec - gotta make sure nobody else is home!");
			writeText("She darts off, the sound of doors rapidly opening and shutting ringing out for a minute, before... silence.");
			writeText("It doesn't last long, though, before she comes out again, though in a separate outfit.");
			writeBig("images/mistress/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","The coat stains a bit too easily.");
			writeText("With that, she sits down on the couch and, with all of your knowledge of hypnotic counseling and sexual experience, it becomes clear...");
			writeText("She has absolutely no idea what to do at this point.");
			writeSpeech("player","","So, no offense meant, but... Is this your first time taking someone home?");
			writeText("She flushes.");
			writeSpeech("mistress","","In my defense, I was really, <i>really</i> turned on.");
			writeSpeech("player","","It's fine, don't worry about it. If you need to take some time to just relax a bit, just take it. It's not like getting a little stiff ever killed anyone.");
			writeText("Plus, with your abilities, you're not exactly strapped for potential partners...");
			writeText("Hearing what you said, though, "+data.story[6].fName+" seems to relax a bit, breathing a bit slower.");
			writeText("She seems to wait a few seconds, then a few more, before finally speaking.");
			writeSpeech("mistress","","I want you in my throat.");
			writeSpeech("player","","...Well, I'm not gonna say <i>no,</i> but isn't that a little-");
			writeSpeech("mistress","","You seem nice, "+data.player.name+", and I like that. But I'm <i>really</i> turned on, and the guys in porn are usually less, 'We'll go at your pace' and more, '<i><b>Don't wear a choker you'd like unbroken.</b></i>'");
			writeSpeech("mistress","","...Unrelated note, I need to buy a choker.");
			writeText("She takes another slow, deep breath.");
			writeSpeech("mistress","","The point is, I don't know how to talk to you, but I would like to press my nose against your pelvis.");
			writeSpeech("player","","...So, you want me to take the lead?");
			writeSpeech("mistress","","<i>Yes please.</i>");
			writeText("You promptly stand up, moving in front of her.");
			writeText("You were absolutely willing to wait for her to be ready but, after hearing her say all that?");
			writeBig("images/mistress/2-1.jpg");
			writeSpeech("mistress","","...You could do porn.");
			writeText("She pauses.");
			writeSpeech("mistress","","Actually, do you do porn? Because that would be-");
			writeText("You gently place your hands on the back of her head, casually reminding her,");
			writeSpeech("player","","You said you wanted me in your throat.");
			writeBig("images/mistress/2-2.jpg");
			writeText("You pull her mouth onto your cock, a muffled moan coming out of "+data.story[6].fName+" as her tongue touches your tip.");
			writeText("You're not able to pull her very deep but her <i>enthusiasm</i> makes up for it.");
			writeText("When you're not pulling her down as deep as she can take it, she's bobbing up and down, twisting her head around as she sucks.");
			writeText("Despite the wild, almost pornographic movements, she never breaks eye contact.");
			writeSpeech("player","","Fuck... You're doing great, " +data.story[6].fName+"...");
			writeText("After a few seconds, she pulls her head off of you, jerking you off as she smiles.");
			writeText("You expect her to speak but, instead, she lowers her head.");
			writeText("She angles her grip on you, her hands slowing down as she carefully drags her tongue from your balls all the way to the tip.");
			writeText("She licks all around the head for several seconds, jerking you off faster, and faster...");
			writeText("Then, with a wink, she pulls her hands away, wraps her mouth around your head, and takes you as deep as she can.");
			writeSpeech("player","","Holy shit... Just how much porn do you watch...?");
			writeText("You can feel her laugh a little as she tries (and fails) to take you into her throat.");
			writeSpeech("player","","Well, if you've seen a lot, then you <i>have</i> to know what's next.");
			writeText("She pauses, her hands moving to stabilize herself as you grab the back of her head tightly.");
			writeBig("images/mistress/2-3.jpg", "Art by Oreteki18kin");
			writeText("You slam her down hard and fast, pounding at the entrance to her throat with every thrust, the sounds of your cock fucking her mouth almost as loud as her moans around your length.");
			writeText("As you start to approach your limit, you put even more force behind your thrusts, slamming your hips forward until you feel her hands grabbing your thighs.");
			writeText("You start to slow down, in case you were getting to be a bit too much, when she <i>pulls.</i>");
			writeSpeech("player","","<i><b>Fucking Hell...!</b></i>");
			writeText("She pulls you into her throat, the tightness almost overwhelming you as she finally presses her nose to your pelvis.");
			writeText("Small tears are forming in her eyes, but the message is clear.");
			writeText("You start thrusting your hips against her mouth, the tip of your cock sliding out of, and back into her throat with every thrust.");
			writeText("After less than thirty seconds of this, you can feel yourself reaching your limit.");
			writeText("You pull your hands away from her head just in case before cumming.");
			writeSpeech("mistress","","<font size='+2'><i><b>M-MFPH!?</b></i></font>");
			writeText("Your cock slides out of her throat with the first spurt, before the entirety of your cock pops out and you jizz onto her face.");
			writeText("She almost coughs a few times but quickly regains her composure, her hands going between her legs as her chest heaves with each breath.");
			writeText("Slowly, she looks back up to you, opening her mouth.");
			writeBig("images/mistress/2-4.jpg", "Art by Oreteki18kin");
			writeText("She swirls it around her mouth for a few seconds before closing it, swallowing with a small grimace.");
			writeSpeech("player","","...Bitter?");
			writeText("She nods, pressing her hand gently to her throat.");
			writeSpeech("player","","Sorry. I, uh... got a little carried away.");
			writeText("Her eyes widen. Shaking her head, she stands up quickly and leans in.");
			writeSpeech("mistress","","<font size='-1'><i>I loved it...</i></font>");
			writeText("She smiles gently as she leans back, giving a half-firm nod.");
			writeText("After, though, she makes an almost-sweeping-motion, like a brush, and points to the door.");
			writeText("Being an expert in sexual sign language, you ignore her way of saying that she'll handle clean-up. Between the both of you, you get finished far faster, and it gives her a chance to wash her face.");
			writeText("Just before you exit the apartment, you feel her pull on your shirt gently.");
			writeText("Her lips just barely brush against your cheek before you're pushed all the way through the door, "+data.story[6].fName+" winking as she shuts it behind her.");
			writeTransition(data.player.currentScene, "Finish");
			if (data.player.currentScene != 'gallery') {
				
			data.story[6].trust += 1;
			passTime();
			}

			//data.story[6].trust = 100;

			break;
		}
		case "meji1" : {
			document.getElementById('output').innerHTML = '';
			writeText("You get "+data.story[7].fName+" to stand up and bend over, which he does pretty easily, his eyes still shut. Going by the way he's tenting his panties, talking about his favorite ways to get off turned him on pretty good, even under hypnosis.");
			writeText("Given his various fantasies, you look around for something to bind his wrists with, but you just find some easily-torn rubber tubing... which, all things considered, is probably fine.");
			writeText("You tie his hands behind his back and slide his panties to the side.");
			writeText("You have lube in one of your drawers, of course. You didn't exactly come to this university unprepared.");
			writeText("Smearing it across a finger, you continue speaking.");
			writeSpeech("player","","You're still rather relaxed, aren't you, "+data.story[7].fName+"?");
			writeSpeech("meji","","Nn...");
			writeText("As soon as you bring your lubed finger to his ass, his breathing picks up, and you slide your other hand onto his thigh to stabilize him.");
			writeText("You can feel him squirming against your hands, not-quite-straining against the fragile makeshift-rope.");
			writeSpeech("player","","Hm... This might shock him out of it, but...");
			writeText("You carefully start pushing your finger into him, and you notice his eyes starting to open.");
			writeBig("images/meji/3-1.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","Haa... Ah...? S-"+data.player.honorific+", what is...");
			writeText("Shame starts to flood his face, but you push your finger a bit deeper and...");
			writeSpeech("meji","","<i>N-Nn~...!</i>");
			writeText("The rapid clenching of his ass almost feels like it's sucking on you, "+data.story[7].fName+ "hanging his head a bit.");
			writeSpeech("player","","You know... I never said you had to stop.");
			writeSpeech("meji","","W-what?");
			writeText("You plunge your finger further, finding your target as you press into his prostate. You can barely hear youself over his moan.");
			writeSpeech("player","","You were talking about how you play with yourself at home. Remember?");
			writeText("His eyes refocus a bit and you can see his cock twitch in his panties.");
			writeSpeech("meji","","...like this...");
			writeSpeech("player","","Hm. I couldn't hear anything. Oh well, it was fun.");
			writeText("You start sliding your hand out, but panic flies across his face.");
			writeSpeech("meji","","W-Wait! I...");
			writeText("He takes a slow, deep breath.");
			writeSpeech("meji","","I play with m-my ass... I finger it, just like this, while jerking off...!");
			writeText("Nodding along, you pull his panties even further to the side, his cock flopping out weakly.");
			writeSpeech("player","","You mean... like this?");
			writeBig("images/meji/3-2.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","<i>F-Fuck~!</i> J-Just like that!");
			writeText("You start carefully pressuring his prostate as you jerk him off, moans and whimpers now quietly spilling out of his mouth.");
			writeSpeech("player","","And what do you think about when you're fingering yourself, <i>slut?</i>");
			writeText("He goes quiet for just a second's hesitation, until you just barely slow down-");
			writeSpeech("meji","","<font size='-1'>...Getting fucked...</font> Having someone grab me from behind, and <i>bend me over</i>, and just <i><b><font size='+2'>fucking my ass until I'm a jizz-covered mess!</size></b></i>");
			writeSpeech("player","","Wow.");
			writeText("You speed up even more.");
			writeSpeech("player","","You know, I thought you might've been a bit of a slut, but...");
			writeText("You can feel him start twitching in your hand.");
			writeSpeech("player","","You're actually just a subby masochist <i>bitch</i>, aren't you?");
			writeText("He squeezes tighter around you, just about to cum when you take your hand off of his dick.");
			writeSpeech("meji","","B-But I was...!");
			writeSpeech("player","","You were about to cum like a man, "+data.story[7].fName+". Not much of one, honestly, but the point still stands. If you want to cum, you'd better listen.");
			writeText("Leaning forward, you push your finger in as far as you can, speaking quietly.");
			writeText("He's still partially in trance, so this should work...");
			writeSpeech("player","","The more you cum from that cock of yours, the less you'll be able to feel it.");
			writeText("You start slowly jerking him off again, twisting your finger inside of him.");
			writeSpeech("player","","If you were to let me milk you right now, let you spill your cockmilk all over the floor... I'm not sure you could cum from your dick ever again. Is that really what you want?");
			writeText("He starts squirming against you even more, seemingly resisting... but not even partially straining the fragile tubing on his wrists.");
			writeSpeech("player","","Do you really want to spurt out the last of that masculinity of yours, and become a <i>slutty little <b>bitch</b></i> that can only get off on anal?");
			writeSpeech("meji","","...care...");
			writeText("You start going even faster, feeling his cock start to throb and his hips start to buck.");
			writeSpeech("player","","You'd better hurry up and stop me... Otherwise, you'll-");
			writeText("Suddenly, he slams his ass against your hand, his breathing rough and labored.");
			writeSpeech("meji","","I don't care <i>I don't care <b>I don't care!</b></i> Finger me, fuck me, just <i>please let me cum!</b>");
			writeSpeech("player","","...You really are a desperate little <i>whore.</i>");
			writeText("Your words are the last straw as he starts tightening hard, pulling your finger against his anal-slut-button with every squeeze.");
			writeBig("images/meji/3-3.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","<i><b>CUMMING~!</b></i>");
			writeText("His cum spills all over the floor, shot after shot milked out of him as his whole body squirms in every direction.");
			writeText("During his shaking, you can hear the tubing snap as he grabs out for the bed, his moans barely muffled by the sheets.");
			writeText("You're honestly impressed by the amount the spatters everywhere before he finally collapses against the bed.");
			writeText("He barely looks conscious at this point, and you don't imagine he'll be recovering from <i>that</i> very quickly.");
			writeText("It gives you time to clean up, at least...");
			writeText("...");
			writeText("After he recovers a bit, you pull him out of trance - he's still a bit out of it, of course, but when you tell him you'll be calling him back in sometime soon, you see him shudder in pleasure.");
			writeSpeech("meji","","T-Thank you, "+data.player.honorific+"~...!");
			writeText("As he leaves, you can't help but wonder if he'll be as thankful when he's back to normal and can't feel his hand when he touches his dick...");
			if (data.player.currentScene != 'gallery') {
				data.player.currentScene = 'playerOffice';
				writeTransition(data.player.currentScene, "Finish up");
				data.story[7].trust += 1;
				passTime();
			}
			break;
		}
		case "meji2" : {
			document.getElementById('output').innerHTML = '';
			writeText("You and "+data.story[7].fName+" arrive in your office pretty quickly - it seems like he's a bit antsy.");
			writeSpeech("meji","","Did you figure how to fix it?");
			writeSpeech("player","","Not exactly, no. I did figure <i>something</i> out, though.");
			writeText("Well, two things actually. The first was what you actually did want to know.");
			writeText("The other is that the hypnosis for his dick wouldn't last this long unless, on some level, he really did want it numb.");
			writeText("Neat.");
			writeSpeech("player","","I can't help you with your dick. What I can do, though, is help you feel a little less <i>pent-up.</i>");
			writeSpeech("meji","","...But wait, how are you-");
			writeSpeech("player","","Anal.");
			writeText("His breathing picks up <i>fast.</i>");
			writeSpeech("meji","","O-Oh. I, um... My uniform is in my bag. Could you turn around...?");
			writeText("...You just told him you were going to plow him, and he's embarrassed about being seen getting changed?");
			writeText("Fuck it, might as well.");
			writeSpeech("meji","","Thanks...");
			writeText("A few seconds later, he's in-uniform, sitting on the bed while your pendant sways.");
			writeText("It takes a little bit longer for him to go under than last time but, when he goes into trance, he goes deep.");
			writeText("You use a bit more of that plastic tubing to bind his arms behind his back, slowly pushing him down onto the bed.");
			writeText("As you do, sliding his panties to the side, you watch as his throbbing cock twitches around and, more importantly, his ass seems to tighten around nothing.");
			writeText("You get the lube, spreading it across your fingers carefully as you start teasing his hole.");
			writeSpeech("player","","Alright... "+data.story[7].fName+", are you ready?");
			writeSpeech("meji","","Nn...!");
			writeText("He starts grinding his ass against your hand, half-lidded eyes trying their best to focus on you.");
			writeSpeech("player","","Good enough.");
			writeText("You start carefully lubing his insides with your fingers, carefully stretching him out.");
			writeText("It doesn't take long. His ass eagerly takes in one finger, then another. You still take your time applying the lube, but the way he's squirming...");
			writeSpeech("player","","Just how often do you play with this ass of yours?");
			writeText("He moans gently, his voice quiet.");
			writeSpeech("meji","","E-Every night... I have a dildo...");
			writeSpeech("player","","Oh...? And how do you usually use it?");
			writeText("He opens his mouth to speak, but a strangled mewl is all that comes out as you pull out your fingers.");
			writeSpeech("meji","","I t-tease around my hole...");
			writeText("You undo your belt, the air feeling almost cold against your length before you press against him.");
			writeSpeech("meji","","After I'm wet enough, I...");
			writeText("He pauses, his eyes opening a bit more, but you get the gist of what he does next.");
			writeSpeech("player","","You<i> thrust it in,</i>, right?");
			writeBig("images/meji/4-1.jpg","Art by Nagi Ichi");
			writeText("You can immediately see his cock start to rhythmically bob up and down as you squeezes around you.");
			writeText("Days of being pent-up has his cock already streaming almost cum-colored pre.");
			writeSpeech("meji","","F-Fuck...~!");
			writeText("You saw in slowly and carefully, watching his eyes flutter each time your head scrapes against his insides with each thrust.");
			writeText("But this isn't just about feeling a little nice...");
			writeText("You lean forward, nearly pinning his knees behind his head as you start to quietly whisper into his ear...");
			writeSpeech("player","","Is this what you wanted, "+data.story[7].fName+"? To be a man's private little <i>butt-slut?</i>");
			writeSpeech("meji","","Fuck, yes...!");
			writeSpeech("player","","But that sort of things has <i>costs,</i> doesn't it, "+data.story[7].fName+"?");
			writeSpeech("meji","","<i>Y-yes!</i>");
			writeText("You start speeding up, breathing onto his ear now as he writhes in pleasure beneath you.");
			writeSpeech("player","","Each thrust is making your ass more and more sensitive, isn't it?");
			writeSpeech("meji","","Yes!");
			writeText("Every 'yes' has him breathing deeper, has him squirming more and more.");
			writeSpeech("player","","Yes <i>what?</i>");
			writeSpeech("meji","","<i>Y-Yes, "+data.player.honorific+"~!</i>");
			writeText("You grin, picking up speed.");
			writeBig("images/meji/4-2.jpg","Art by Nagi Ichi");
			writeSpeech("player","","You know what you are, don't you?");
			writeText("You hear him swallow hard, before smiling.");
			writeSpeech("meji","","I-I'm a subby masochist <i>bitch</i>...! I'm a horny little <i>whore~!</i>");
			writeSpeech("player","","Very good. And do you know how honest whores get rewarded?");
			writeText("His ass grips onto you like a vice, <i>almost</i> slowing you down as you start fucking him harder.");
			writeText("He keeps trying to answer, but every push and pull of your cock slams against his prostate, only moans and mewls coming out of his mouth.");
			writeSpeech("player","","You really are eager, aren't you? In that case, let's finish...");
			writeText("You slam your hips into his quickly, pushing yourself to the edge and beyond as you feel your cock start to twitch.");
			writeBig("images/meji/4-3.jpg","Art by Nagi Ichi");
			writeText("From the first spurt, he starts spasming around you, your hands being the only thing stopping his legs from wrapping around his back.");
			writeText("His cock rapidly bounces up and down, the same precum still oozing down as he twitches underneath you.");
			writeText("As you pump the last of your jizz inside of him, your dick making a lewd pop as you pull out, he goes limp.");
			writeText("Just like last time, he's barely able to move but, this time, you're taking advantage of that.");
			writeSpeech("player","","You're going to remember <i>everything</i> with perfect clarity this time.");
			writeText("You swing your hand down, slapping his ass as his entire body tightens, a quiet moan escaping his lips.");
			writeSpeech("player","","And each time we fuck, it'll get <i>better</i> and <i>better</i> until eventually...");
			writeSpeech("player","","You can start spurting without ever even <i>needing</i> to touch that dick of yours. <i>Is that clear?</i>");
			writeSpeech("meji","","<i>Y-Yes...<b> "+data.player.honorific+"~...!</b></i>");
			writeText("You give him another, gentler slap on the ass.");
			writeSpeech("player","","Good girl...");
			writeText("...");
			writeText("After a while, "+data.story[7].fName+" recovers enough to clean himself up, changing back into his other uniform before leaving.");
			writeText("Not without a quick thanks, of course. He's never felt better, apparently.");
			writeText("That's your good deed for the day. Now, to deal with the <i>rest</i> of the day...");
			if (data.player.currentScene != 'gallery') {
			data.player.currentScene = 'playerOffice';
			writeTransition(data.player.currentScene, "Finish up");
			data.story[7].trust += 1;
			passTime();
			}
			break;
		}
		case "meji3" : {
			document.getElementById('output').innerHTML = '';
			writeText("A few minutes after you're sure everyone's left the club room (and double-checking that no one seems to be coming back), you gently try the door.");
			writeText("Locked. Makes sense, if he's already in there. You gently knock.");
			writeText("There's a moment of silence, before...");
			writeSpeech("meji","","Is that you?");
			writeSpeech("player","","...No.");
			writeText("The lock clicks as he opens the door and you step in.");
			writeBig("images/meji/5-1.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","I double-checked the room for anything anyone forgot, and there doesn't seem to be anything.");
			writeSpeech("player","","That worried about someone seeing you like this?");
			writeText("He tries to scowl, but the skin-tight leotard does nothing to hide the tell-tale twitch of arousal.");
			writeSpeech("meji","","...S-So, are you going to put me under? It's a little hard to relax in here.");
			writeSpeech("player","","Not this time. Consider it part of your... training. How's the dick, by the way?");
			writeSpeech("meji","","<font size='-1'>...still numb...</font>");
			writeSpeech("player","","Then in that case, let's get right to it.");
			writeText("He stands a bit straighter, stiffening a bit (in both meanings of the word).");
			writeSpeech("meji","","H-How do you want me?");
			writeText("You look around for a moment, before pulling out the lube and pointing to the table.");
			writeSpeech("player","","That's a little bit below waist-level, so why don't you climb on it?");
			writeText("To his credit, he only pauses in confusion for a second before moving.");
			writeSpeech("player","","Good girl.");
			writeText("You quickly move towards him, preparing to start lubing up his ass as he leans forward a bit...");
			writeSpeech("player","","Are you... already dripping?");
			writeText("You can't see his face but, given how easily he blushes...");
			writeSpeech("meji","","I, um... I didn't want to get caught, so I thought if I got myself ready earlier-");
			writeText("A loud slap across his ass turns his words into a throaty moan.");
			writeSpeech("player","","You really <i>are</i> a good little bitch.");
			writeSpeech("meji","","...Thank you, "+data.player.honorific+"~.");
			writeText("At that, though, you quickly strip and grab something from your bag.");
			writeText("There's no way in Hell that the tubing would work for his legs, but it's obvious how much he enjoys being bound, so...");
			writeText("He tenses at the sound of the tape being pulled, but he holds still as you wrap it around his smoothly shaved legs.");
			writeSpeech("player","","There. That should keep you from bucking <i>too</i> hard.");
			writeText("Without further ado, you line your head up with his slick hole, pressing gently as it starts to spread...");
			writeText("And you stop.");
			writeText(data.story[7].fName+" doesn't say anything for a few seconds, waiting patiently, until you nod and say,");
			writeSpeech("player","","Get fucking, whore.");
			writeText("He <i>immediately</i> backs up against you, biting his lower lip to avoid from moaning too loudly as your head pops in and starts gliding inside of his ass.");
			writeBig("images/meji/5-2.jpg");
			writeText("He takes a moment to collect himself, before getting to work.");
			writeText("Since he isn't in trance this time, his muscle control is phenomenal, squeezing gently as he pulls you in deeper, then relaxing as he bobs forward.");
			writeText("Even partially bound, he moves easily to take you deeper and deeper with each thrust, but unfortunately for you both, he can't exactly go <i>fast</i> in this position.");
			writeText("Pretty soon, his moans go from pleasure to frustration, trying to back himself up harder against you. He grits his teeth, using his arms to push and pull himself.");
			writeText("Given such an admirable attempt, you can't help yourself.");
			writeSpeech("player","","Don't fall.");
			writeText("You tighten your hand around his wasit and <i>thrust.</i>");
			writeBig("images/meji/5-3.jpg", "Art by Nagi Ichi");
			writeText("His ass slams back against yours as he tries to keep his balance, the table almost rocking forward as you viciously fuck his asshole.");
			writeText("The sound of his ass against your hips echoes in the room, but "+data.story[7].fName+" doesn't even seem to notice as starts twisting his hips each time you bottom-out.");
			writeText("The other hypnotic suggestions are clearly still holding strong, particularly the one that makes him more sensitive with each thrust, as he's soon panting raggedly as he milks your cock with his ass.");
			writeSpeech("player","","Fuck... You're a high-quality piece of <i>bitchmeat</i>, you know that?");
			writeText("He squeezes around you.");
			writeSpeech("meji","","A-Are you close...?");
			writeSpeech("player","","That depends.");
			writeText("Your hand slides a bit up his waist as you step in, <i>slamming</i> your cock into him.");
			writeSpeech("player","","How much do you want it?");
			writeText("He leans his head forward, pressing his hands firmly against the table.");
			writeSpeech("meji","","More than anything else...! Please, fill my bitch-hole with your <i>hot fucking cum~!</i>");
			writeText("You raise your free hand, slapping his ass once, then twice. Each time you do, he squeezes just a bit tighter, moaning just a bit louder.");
			writeText("You only last a few more seconds of thrusting, before you feel it start to spurt.");
			writeBig("images/meji/5-4.jpg");
			writeText("More of it spills out than you intended, but the rapid tensing of "+data.story[7].fName+"'s ass keeps a lot of it in place.");
			writeText("He manages to stay upright this time, even as you slide the leotard over his spasming asshole.");
			writeSpeech("meji","","Th-Thank you... "+data.player.honorific+"...");
			writeText("You give him one last swat to the ass, relishing the hitched breathing and spasming as he goes limp.");
			writeText("Just before he does, though, you spot a single bead of cum beneath him, separate from the rest.");
			writeText("He didn't orgasm, but he got close. One more time, and he might actually come from just anal...");
			writeText("As much as the thought gets you ready for round 2, your eyes do go to the clock.");
			writeSpeech("player","","Damn...");
			writeText("It's getting late, and you know for a fact that the janitor isn't going to be happy if you're caught here.");
			writeText("You help "+data.story[7].fName+" get cleaned up, the leotard going underneath his regular clothes as he finishes up.");
			writeText("Just before you leave, though, he moves close to you and goes up on his toes and whisperes in your ear,");
			writeSpeech("meji","","I can feel your cum inside the leotard, y'know~...");
			writeText("He does a little hop, and you feel his lips just barely brush against your ear.");
			writeText("With that, he darts out of the room, leaving you with a bit of time left before dark and a raging hard-on.");
			if (data.player.currentScene != 'gallery') {
			data.player.currentScene = 'gym';
			writeTransition(data.player.currentScene, "Get going");
			data.story[7].trust += 1;
			passTime();
			}
			break;
		}
		case "meji4" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","You seem like you had fun last time.");
			writeText(data.story[7].fName+" stands up a bit straighter, nodding.");
			writeSpeech("meji","","A <i>lot</i> of fun, "+data.player.honorific+". I, um... actually would've liked to keep going, but...");
			writeSpeech("player","","You didn't want to get seen?");
			writeText("He slowly nods, shyly looking to the side.");
			writeSpeech("meji","","Yeah. I didn't want you to get caught and lose your job, or... worse.");
			writeText("...Fuck it, you are <i>definitely</i> getting him off.");
			writeSpeech("player","","Your place. Bring the leotard.");
			writeText("He pauses in surprise.");
			writeSpeech("meji","","I'm... actually wearing it now. I thought you might like it if-");
			writeText("You step closer to him, his voice squeaking as you do.");
			writeSpeech("player","","<i>Now.</i>");
			writeText("He stiffens.");
			writeSpeech("meji","","Yes, "+data.player.honorific+"~");
			writeText("...");
			writeText("The moment his front door is shut, he starts pulling off his male uniform, revealing the leotard beneath.");
			writeText("You start stripping as well, barely taking in the general lack of decoration. The moment your pants are off, "+data.story[7].fName+" leads you by the hand to a large living-room.");
			writeText("As he turns to face you, smiling wide, you can see the twitching outline of his cock as his eyes drift down to yours.");
			writeSpeech("meji","","How do you want me, "+data.player.honorific+"~?");
			writeText("You think for a moment...");
			writeSpeech("player","","This time... You choose.");
			writeText("He pauses for a moment.");
			writeSpeech("meji","","R-Really?");
			writeText("You just nod, his entire face lighting up.");
			writeSpeech("meji","","Well, then... Can you lie down, please? Last time, I couldn't do too much until you started thrusting, so I want to... ride you.");
			writeText("You go along with it, the carpeting feeling nice on your back, and fortunately not something you'll need to clean the jizz off of later.");
			writeText("He quickly straddles you, resting his plump ass on your length for a second before taking deep breaths.");
			writeText("Just the sensation of the thin strip of leotard on your cock, wrapped on both sides by his ass...");
			writeSpeech("player","","Fuck...!");
			writeText("Hearing that, "+data.story[7].fName+" starts rotating and grinding his hips against you with a smile, relishing in the feeling of your half-hard cock growing to full mast.");
			writeText("He slowly lifts himself up, sliding the leotard to the side to expose his pink, well-fucked hole.");
			writeSpeech("meji","","A-Are you ready, "+data.player.honorific+"?");
			writeSpeech("player","",data.story[7].fName+", I was ready to bend you over in an alley and <i>fuck you sense-</i>");
			writeText("He immediately drops his full body weight down, swallowing your cock balls-deep in one smooth motion and shutting you up completely.");
			writeBig("images/meji/6-1.jpg", "Art by Nagi Ichi");
			writeText("He wastes absolutely no time in bouncing up and down, his eyes rolling up in ecstasy.");
			writeSpeech("meji","","God... I fucking <i>love</i> this~!");
			writeText("His hands press down harder on your thighs, bouncing quickly as your head rubs all over his insides.");
			writeSpeech("meji","","When I got home, I was still so <i><b>fucking turned on</b></i>, I couldn't think...! I tried fucking myself with my dildo, but it wasn't the same~!");
			writeText("It's been less than thirty seconds, but the bouncing, the squeezing, the twisting all together has you already fighting to hold yourself back.");
			writeSpeech("meji","","It's your fault...! Whenever you're inside of me, I feel so <i>full</i>! I spent an hour <i><b>slamming</b></i> a dildo into my slutty little bitch-hole, stirring up your jizz while it was still warm, and <i><b>nothing.</b></i>");
			writeText("His entire body pitches forward, his hands resting on your chest now as you feel yourself reaching your limit.");
			writeSpeech("meji","","Whenever you're inside of me, it just feels better and better. I don't even <i>care</i> about my useless cock, because it could <i>never</i> feel as good as yours.");
			writeText("He starts slowing down a bit, running his hands up your body.");
			writeSpeech("meji","","Do you have any idea how empty I feel every time you come near me? Do you have any idea how many times you've thrust into me, how sensitive my ass even <i>is</i> now?");
			writeText("He slows, almost to a stop, and brings his hand to his stomach, ignoring his cock completely.");
			writeSpeech("meji","","Fucking me senseless one day, and then turning around and leaving me to fill myself up with some plastic toy... And then you let <i>me</i> choose how today goes?");
			writeText("Without even moving, you can feel his ass start tightening rhythmically around you, rapidly milking your length as you see the muscles in his abs rapidly tighten along with it.");
			writeSpeech("meji","","This is your fault, <i><b>"+data.player.honorific+",</b></i>, and the only way to make up for it is to <i>draing your balls inside of me <b>down to the last drop.</b></i>");
			writeText("You open your mouth to reply, but he quickly starts bouncing again, the tightening only speeding up, and you feel yourself lose it.");
			writeBig("images/meji/6-2.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","F-Fuck, it's hot...!");
			writeText("He slows down just a bit, adjusting his position before grinning.");
			writeSpeech("meji","","S-So... Let's see how many shots you have in you. Are you ready, <i><b>"+data.player.honorific+"~?</b></i>");
			writeText("...");
			writeText("You didn't even bother trying to track of how long you two fucked.");
			writeText("You'd changed positions a few times, but it always came back to cowgirl and, as you're finally starting to flag, you feel it.");
			writeText("A jolt goes up his back as he slams down against you with short, shallow movements, your hips bucking up every time he comes down.");
			writeSpeech("meji","","Fuck... Fuck fuck fuck~! I can feel it...!");
			writeText("His hands start clutching your thighs tightly, his legs start shaking uncontrollably, and it happens.");
			writeBig("images/meji/6-3.jpg", "Art by Nagi Ichi");
			writeText("As he starts spurting through the leotard, you fire one last load inside of him, leaning forward to support him as he nearly falls into you.");
			writeText("Seconds fade away as you two lay there before, eventually, you find the strength to get up.");
			writeText("You're not sure how dark it was when you went limp enough to pop out of his ass, but it's clearly night at this point.");
			writeText(data.story[7].fName+" is clearly out like a light, sleeping contentedly on your chest.");
			writeText("Despite how much you want to sleep yourself, you opt to get up, move him onto the couch, and finally head home.");
			writeText("Good fucking <i>God</i>, you need a shower...");
			if (data.player.currentScene != 'gallery') {
			writeTransition(data.player.currentScene, "Go home and sleep");
			data.story[7].trust += 1;
			passTime();
			passTime();
			}
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn1C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn2A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn2B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn3C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn4A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn4B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn4C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "porn7A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
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
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
		case "specialDay": {
			data.player.time = "Evening";
			data.player.currentScene = "schoolEntrance";
			writeTransition(data.player.currentScene, "Say goodbye");
			break;
		}
		default: {
			writeText("This event is not yet finished, but do not fret! You've still unlocked the ability to view this scene later via the gallery. In a future version, once this scene has been completed you'll be able to watch this scene from there so long as you have a laptop.");
			writeTransition(data.player.currentScene, "Finish");
			break;
		}
	}
	if (data.player.currentScene == 'gallery') {
		writeTransition(data.player.currentScene, "Finish");
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
}

function writeEncounter(n, scene) {
	wrapper.scrollTop = 0;
	console.log("Now writing scene ID " + scene + ", with character ID " + n);
	document.getElementById('output').innerHTML = '';
	switch (n) {
		case "mom": {
			switch (scene) {
				case "momTest": {
					writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
					writeSpeech("mom", "", "Good morning! Just thought I'd drop on by to say hello to my new neightbor!");
					writeSpeech("player", "", "Morning. Nice to meet you.");
					writeText("She reaches out and gives you a firm handshake. As her hand meets yours, images flash through your mind.");
					writeBig("images/mom/2-1.jpg", "Art by Enoshima Iki");
					writeBig("images/mom/3-3.jpg", "Art by Enoshima Iki");
					writeBig("images/mom/7-4.jpg", "Art by Enoshima Iki");
					writeText("You snap out of it and shake your head from side to side. She doesn't seem to notice.");
					writeSpeech("mom", "", "I live right on down the hall, feel free to drop by anytime.");
					passTime();
					writeTransition("playerHouse", "Say goodbye");
					break;
				}
				case "mom1A": {
					writeText("*KNOCK* *KNOCK* *KNOCK*");
					writeSpeech('player', '', 'Coming, hold on a second.');
					writeText("You crack your neck and walk over to open the door.");
					writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
					writeSpeech('mom', '', 'Hiya!');
					writeText("A woman is at the door, probably in her early fourties but still quite beautiful. She has faint wrinkles beside her eyes, but what catch your attention right away are her nipples, large enough to make visible bumps through her bra and shirt.");
					writeText("You manage to play it off as a wandering glance though, totally smooth.");
					writeSpeech('mom', '', "The name's " + data.story[0].fName + " " + data.story[0].lName + ", I'm your neighbor a few doors down.");
					writeSpeech('player', '', "Nice to meet you, I'm " +data.player.name + ".");
					writeText("She shakes your hand with a firm, energetic grip.");
					writeSpeech('mom', '', "I've seen you walk by a few times. If you're ever lost I can't help, but I can point you in the direction of the market if you need it.");
					writeSpeech('player', '', "I might take you up on that some time, I'm new in town.");
					writeSpeech('mom', '', "No problem, it's that way!");
					writeText("She points off in a vaguely westward direction before laughing at her joke.");
					writeText("She quickly takes the reigns of the conversation, bouncing between subjects like the weather, the state of the building, and at some point she glides right past the fact that she's a widow.");
					writeText("Her incredibly strong personality makes itself clear right away. Even a master hypnotist would have trouble getting through her will with months of preparation.");
					writeText("Still, she seems eager enough for some company that you could quickly make friends with her. Spending some time listening to her go on about nothing in particular and not completely sperging out will probably be enough.");
					writeText("Eventually the conversation slows back down.");
					writeSpeech('mom', '', "Aw damnit, is it that late already? I gotta get back in and quit wasting your time.");
					writeSpeech('player', '', "Only if you promise to waste it again, it's been lovely to get to know you.");
					writeSpeech('mom', '', "Ha! Little flirt, I'm old enough to be your mother.");
					writeSpeech('player', '', "Talk you later, " + data.story[0].fName + ".");
					writeSpeech('mom', '', "Bye!");
					passTime();
					data.story[0].trust = 40;
					data.story[0].encountered = true;
					writeTransition(data.player.currentScene, "Go back inside");
					break;
				}
				case "mom1B": {
					writeText("The woman brings her bag through the doorway, but one breaks open at the bottom spilling out onto the floor.");
					writeSpeech('mom', '', "God...! Damn little...");
					writeSpeech('player', '', "Need some help?");
					writeSpeech('mom', '', "Yes please, one second...");
					writeText("You pick up the small bags of dried fruit that fell out.");
					writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
					writeSpeech('mom', '', "Thanks. Lucky it wasn't the wine, right?");
					writeText("The woman in the doorway is probably in her early fourties but is still quite beautiful. She has faint wrinkles beside her eyes, but what catch your attention right away are her nipples, large enough to make visible bumps through her bra and shirt.");
					writeText("You manage to play it off as a wandering glance though, totally smooth.");
					writeSpeech('mom', '', "Oh hey, you new in town?");
					writeSpeech('player', '', "Yes actually, I just moved in. The name's " +data.player.name + ".");
					writeSpeech('mom', '', "The name's " + data.story[0].fName + " " + data.story[0].lName + ", I'm your neighbor a few doors down. If you're ever lost I can't help, but I can point you in the direction of the market if you need it.");
					writeSpeech('player', '', "I might take you up on that some time, I'm not great at navigation.");
					writeSpeech('mom', '', "No problem, it's that way!");
					writeText("She points off in a vaguely westward direction before laughing at her joke.");
					writeText("She quickly takes the reigns of the conversation, bouncing between subjects like the weather, the state of the building, and at some point she glides right past the fact that she's a widow.");
					writeText("Her incredibly strong personality makes itself clear right away. Even a master hypnotist would have trouble getting through her will with months of preparation.");
					writeText("Still, she seems eager enough for some company that you could quickly make friends with her. Spending some time listening to her go on about nothing in particular and not completely sperging out will probably be enough.");
					writeText("Eventually the conversation slows back down.");
					writeSpeech('mom', '', "Aw damnit, is it that late already? I gotta get back in and quit wasting your time.");
					writeSpeech('player', '', "Only if you promise to waste it again, it's been lovely to get to know you.");
					writeSpeech('mom', '', "Ha! Little flirt, I'm old enough to be your mother.");
					writeSpeech('player', '', "Talk you later, " + data.story[0].fName + ".");
					writeSpeech('mom', '', "Bye!");
					passTime();
					data.story[0].trust = 40;
					data.story[0].encountered = true;
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom2A": {
					writeText("As you're walking down the hall you see " + data.story[0].fName + " walking towards her apartment. She's got an emotionally drained look in her eyes, so you call out to her and her expression brightens.");
					writeSpeech('mom', '', "" +data.player.name + "! Hey how've you been? Help me carry these in?");
					writeSpeech('player', '', "Sure, no problem.");
					writeText("You help her get her bags inside. She offers you to sit down at the table and hands you a glass of water.");
					writeText("...");
					writeText("As you get comfortable in your seat, you notice " + data.story[0].fName + " preparing some tea with a soft smile on her face.");
					writeFunction("writeEncounter('mom','mom2AA')", "Strike up a conversation");
					writeFunction("writeEncounter('mom','mom2AB')", "Enjoy the silence");
					passTime();
					data.story[0].trust = 60;
					break;
				}
				case "mom2AA": {
					writeSpeech("player", "", "So do you always walk to and back from the shopping district? It's a pretty long road from the store back home.");
					writeSpeech("mom", "", "Yeah. The road is usually deserted by now. It's usually quiet, but today it felt pretty nice. What about you?");
					writeSpeech("player", "", "Oh I was just in the neighborhood, not really looking for anything in particular.");
					writeSpeech("mom", "", "Well you found it. Got the lay of the land yet?");
					writeSpeech("player", "", "Yeah I think I've got a pretty good grasp of the town by now. It's a nice place. I could definitely see myself staying here.");
					writeSpeech("mom", "", "That's great! It's always nice to know you can set your roots somewhere.");
					writeText("...");
					writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + data.story[0].fName + " follows along with what you say with patient attentiveness.");
					writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways.");
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom2AB": {
					writeText("You decide to remain quiet and enjoy the silence.");
					writeText("...");
					writeText("Eventually, " + data.story[0].fName + " brings up something about the weather and the two of you are wrapped up in smalltalk.");
					writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + data.story[0].fName + " follows along with what you say with patient attentiveness.");
					writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways. ");
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom2B": {
					writeText("As you're walking down the road you see " + data.story[0].fName + " walking towards her apartment. She's got an emotionally drained look in her eyes, so you call out to her and her expression brightens.");
					writeSpeech('mom', '', "" +data.player.name + "! Hey how've you been? Help me carry these home?");
					writeSpeech('player', '', "Sure, no problem.");
					writeText("You take half her bags and start walking down the street alongside her.");
					writeText("...");
					writeText("The two of you walk in silence for a moment. It isn't an awkward one, and " + data.story[0].fName + " has a soft smile on her face.");
					writeFunction("writeEncounter('mom','mom2BA')", "Strike up a conversation");
					writeFunction("writeEncounter('mom','mom2BB')", "Enjoy the silence");
					passTime();
					data.story[0].trust = 60;
					data.player.currentScene = "apartmentOutside";
					break;
				}
				case "mom2BA": {
					writeSpeech("player", "", "Do you always walk this way? It's a pretty long road from the store back home.");
					writeSpeech("mom", "", "Yeah. This road is usually deserted by now. It's usually quiet, but today it feels pretty nice. What about you?");
					writeSpeech("player", "", "Oh I was just in the neighborhood, not really looking for anything in particular.");
					writeSpeech("mom", "", "Well you found it. Got the lay of the land yet?");
					writeSpeech("player", "", "Yeah I think I've got a pretty good grasp of the town by now. It's a nice place. I could definitely see myself staying here.");
					writeSpeech("mom", "", "That's great! It's always nice to know you can set your roots somewhere.");
					writeText("...");
					writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + data.story[0].fName + " follows along with what you say with patient attentiveness.");
					writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways.");
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom2BB": {
					writeText("You decide to remain quiet and enjoy the silence.");
					writeText("...");
					writeText("Eventually, " + data.story[0].fName + " brings up something about the weather and the two of you are wrapped up in smalltalk.");
					writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + data.story[0].fName + " follows along with what you say with patient attentiveness.");
					writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways. ");
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom3": {
					writeText("It'd be hard to miss her, as she's drunkenly mumbling half the words to some old pop song while fumbling with her keys.");
					writeSpeech('player', '', "Have a fun afternoon?");
					writeText("She jumps on the spot, scard for just a second before she gives you a smile that says 'glad to see you'.");
					writeSpeech('mom', '', "" +data.player.name + "! Heyyyyyy! Cmon in!");
					writeText("You'd intended just to say hi, but what the hell.");
					writeText("...");
					writeSpeech('mom', '', "Fuggin sweet... Got a phone number...");
					writeSpeech('player', '', "Don't give it out like candy, I only give my number to people I like.");
					writeSpeech('mom', '', "Fu... Who the fuck am I gonna give it out to, huh?");
					writeText("She waves her phone in your face, showing off her empty contacts list. You see a few numbers she hasn't spoken to in years, and there isn't even a 'mom' or a 'dad' entry.");
					writeSpeech('mom', '', "Hehe... Eheh... Ha! I've got your nuuuumber. You'd better reshpond if I send you something...");
					writeText("Eventually she starts heavily slurring her words, she's walking the edge of conciousness.");
					writeSpeech('player', '', "You alright? Maybe I should get going.");
					writeSpeech('mom', '', "Nooooo! Hey we've got all day left, don't leave me alone! You don't talk much, but beeee-lieve me, it gets quiet when I'm alone in here buddyyy...");
					writeText("She lazily grabs onto your arm, holding it tightly. You can feel her soft hands, but also her breasts through her shirt against your skin.");
					writeText("You weigh the options, but one thing tips the scales. Having your way with her here would feel nice, but it'd also be temporary at best.");
					writeText("She's a nice friend, and maybe that could go somewhere in the future. You'll be a gentleman here, especially since she's an awful pick for hypnotizing. Getting away with it would be more trouble than it's worth.");
					writeSpeech('player', '', "Alright " + data.story[0].fName + ", time to get you into bed.");
					writeSpeech('mom', '', "Fuggin... Not even fuggin tired you little bitch...");
					writeText("You get her into bed without much trouble despite her protests. Before you leave she grabs onto your hand for a few moments before she's out like a light.");
					passTime();
					data.story[0].trust = 80;
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom4": {
					writeEvent('mom1');
					removeItem('Beer');
					writeText("...");
					writeSpeech("mom", "", "You should go, I've already sobered up. I'm sorry.");
					writeSpeech("player", "", "We can talk tomorrow, alright? I'm still here for you if you need me.");
					passTime();
					data.story[0].trust = 90;
					data.story[0].textEvent = '';
					data.player.currentScene = "apartmentOutside";
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom5": {
					writeEvent('mom2');
					writeText("...");
					writeText("You two spend the next few hours enjoying each other's company, before finally the two of you begin to get dressed.");
					writeSpeech("player", "", "This was nice. Wanna do it again sometime?");
					writeSpeech("mom", "", "Sure. I'll be out of town for a few days, but I'll be back soon. We can, well, have some fun once I'm back.");
					writeSpeech("player", "", "It's a date.");
					passTime();
					data.story[0].trust = 100;
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "mom6": {
					writeFunction("writeEncounter('mom','momSex1')", "Have Sex");
					writeFunction("writeEncounter('mom','momSex2')", "Have Sex");
					writeFunction("writeEncounter('mom','momDrunk')", "Give her a beer");
					writeFunction("writeEncounter('mom','momBeach')", "Go to the beach");
					writeFunction("writeEncounter('mom','momEnding')", "Settle down with " + data.story[0].fName);
					passTime();
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
			}
			break;
		}
		case "kuro": {
			switch (scene) {
				case "kuroTest": {
					writeBig("images/kuro/profile.jpg", "Art by Enoshima Iki");
					writeSpeech("???", "none", "I keep telling you, that skirt is too short!");
					writeSpeech("kuro", "", "Yeah, yep. Uhuh.");
					writeText("A student is being accosted by one of the faculty. As you walk by, she looks over at you.");
					writeText("As your eyes meet hers, visions flash in your eyes.");
					writeBig("images/kuro/2-2.jpg", "Art by Enoshima Iki");
					writeBig("images/kuro/4-2.jpg", "Art by Enoshima Iki");
					writeBig("images/kuro/5-2.jpg", "Art by Enoshima Iki");
					writeText("By the time the visions fade, you're standing at the school's entrance and several hours have passed.");
					writeSpeech("player", "", "Whoa, spooky.");
					passTime();
					writeTransition("schoolEntrance", "Get Moving");
					break;
				}
				case "kuro1" : {//meeting kuro
					writeText("As you approach to investigate, you see the a member of the student council leaving the other way.");
					writeText("The argument seems to have been resolved, but...");
					writeBig("images/kuro/profile.jpg","Art by Enoshima Iki");
					writeSpeech("kuro","","Heya~! Looks like the two of us were being a bit loud, huh? Sorry~!");
					writeText("She slides her lollipop back into her mouth with a wink, starting to walk off.");
					writeFunction("writeEncounter('kuro', 'kuro2')", "Invite "+data.story[1].fName+" to your office");
					writeTransition(data.player.currentScene, "Just let her go");
					break;
				}
				case "kuro2" : {//if you invite her to your office
					writeText("She pauses for a second before smirking.");
					if (data.player.gender == "man") {
						writeSpeech("kuro","","Lead the way, Mr. Counselor~!");
					}
					if (data.player.gender == "woman") {
						writeSpeech("kuro","","Lead the way, Ms. Counselor~!");
					}
					writeText("...");
					writeText("When you arrive, she sits down casually, crossing her legs underneath her.");
					writeSpeech("kuro","","So, what am I in for?");
					writeSpeech("player","","I was curious about the shouting I heard, Miss...?");
					writeSpeech("kuro","","Ah, just call me "+data.story[1].fName+"~! Most of the older guys do.");
					writeText("You pause.");
					writeSpeech("kuro","","As for the shouting, that was just that council guy getting on my case about my skirt again. He's <i>suuuper</i> strict about the length!");
					writeText("She casually lifts the hem of her skirt, just barely hiding her panties.");
					writeSpeech("kuro","","It's not like it's <i>that</i> short, right?");
					data.story[1].encountered = true;
					writeFunction("writeEncounter('kuro', 'kuro2a')", "Side with her");
					writeFunction("writeEncounter('kuro', 'kuro2b')", "Side with the student councilman");
					//Two-prong choice:
					//Side with her on skirt length
					//Side with council president
					//Trust level determines the next text event
					//What I want is the ability to erase the two options after one is just, and to just append the following section to the page in its place. 
					break;
				}
				case "kuro2a" : {//if you side with her on skirt length
					//Side with her regarding skirt length
					writeSpeech("player","","Well, it does cover everything it's supposed to, I suppose.");
					writeText("She smiles widely.");
					writeSpeech("kuro","","Right, right! That guy really oughtta learn to relax, and <i>open up</i> to new ideas, y'know?");
					writeText("She lets go of her skirt's hem, but not before pulling it taut for just an instant.");
					writeText("Blue with black fringe, huh? It's a pretty good combination.");
					writeSpeech("kuro","","You seem like a pretty... <i>open</i> guy, "+data.player.title+" Counselor. If you're ever up for seeing how open <i>I</i> can be... Well, I like to hang out on the roof.");
					writeText("She walks past you, starting to whistle innocently as you feel her finger brush gently against your hip.");
					writeText("You get the feeling that this could turn out pretty fun, if you play your cards right.");
					data.player.currentScene = "playerOffice";
					passTime();
					writeTransition(data.player.currentScene, "Go back");
					data.story[1].trust = 2;
					break;
				}
				case "kuro2b" : {//if you side with the student councilman on skirt length
					//Side with the council president
					writeSpeech("player","","He has a point, though. A skirt that short can be a bit distracting... for students.");
					writeText("She looks amused.");
					writeSpeech("kuro","","Just for students, huh?");
					writeText("She lets go of her skirt's hem, but not before pulling it taut for just an instant.");
					writeText("Blue with black fringe, huh? She has a good sense of style, at least.");
					writeText("She stands up, pulling a piece of paper from her shirt and leaning forward.");
					writeSpeech("kuro","","Well, if you're ever up for a different kind of <i>distraction</i>, you can find me hanging around the roof.");
					writeText("She walks past you, starting to whistle innocently as you feel her finger brush gently against your shirt.");
					writeText("Well. This looks like it might turn out interestingly...");
					data.player.currentScene = "playerOffice";
					passTime();
					writeTransition(data.player.currentScene, "Go back");
					data.story[1].trust = 1;
					break;
				}
				//I don't know how to do text events. I will assume that you will implement them.
				//The main point is that afterwards, set trust, I guess? Dunno how this works.
				//meeting on the roof
				case "kuro3" : {
					writeSpeech("kuro","","Mmm... I was starting to wonder if you were even coming.");
					writeSpeech("player","","Didn't mean to make you wait.");
					writeFunction("writeEncounter('kuro', 'kuro3a')", "Invite "+data.story[1].fName+" to your office");
					writeTransition(data.player.currentScene, "Tell her she's probably late for class and leave");
					break;
				}
				//go to your office for private affairs
				case "kuro3a" : {
					if(data.story[1].trust == 3){
						writeSpeech("kuro","","Mm. Maybe this time, we'll make ourselves a little more comfortable?");
						writeSpeech("kuro","","Lead the way, "+data.player.title+" Counselor.");
						writeText("...");
						writeText("When you arrive in your office, she casually bumps her hip against the door, pushing it.");
						writeFunction("writeEvent('kuro1')", "Let it close");
						writeFunction("writeEncounter('kuro', 'kuro3b')", "Stop the door from shutting");
						break;
					}
					else{
						writeSpeech("kuro","","Taking charge early, huh? I can't say I dislike it~!");
						writeSpeech("kuro","","Lead the way, "+data.player.title+" Counselor!");
						writeText("...");
						writeText("When you arrive in your office, she smirks.");
						writeSpeech("kuro","","Y'know, the last teacher that had me in their office almost seemed afraid to let the door close.");
						writeText("She gently pushes it, letting it slowly inch shut as she plops down.");
						writeFunction("writeEvent('kuro1')", "Let it close");
						writeFunction("writeEncounter('kuro', 'kuro3b')", "Stop the door from shutting");
						break;
					}
				}
				//basically rejecting her
				case "kuro3b" : {
					if(data.story[1].trust == 3){
						writeText("She sighs, shaking her head.");
						writeSpeech("kuro","","I might like playing around, but this isn't my kind of game, "+data.player.honorific+".");
						writeText("She turns on her heel, leaving.");
						data.player.currentScene = "playerOffice";
						passTime();
						writeTransition(data.player.currentScene, "Go back");
						break;
					}
					else{
						writeText("She looks disappointed, but sits up a bit straighter.");
						writeBig("images/kuro/1-1.jpg", "Art by Enoshima Iki");
						writeSpeech("kuro","","Well, can't blame you. Wouldn't want rumors going around, I guess.");
						writeText("She sighs, rolling the lollipop in her mouth.");
						writeSpeech("kuro","","If it's about counseling, I'll have'ta stop ya right there. I'm not the 'sit and chat about repressed emotions' kinda girl.");
						writeSpeech("player","","I figured as much, but I thought I should still offer. It is literally my job. If you ever need a place to relax that isn't the roof...");
						writeText("She just shrugs, standing up now.");
						writeSpeech("kuro","","Yeah, yeah. If it rains, I might show up. It's a comfortable seat, at least.");
						writeText("Stepping forward, she pulls the door all the way open, before pausing.");
						writeText("Leaning a bit closer to you, she whispers,");
						writeSpeech("kuro","","If you're ever interested in the two of us getting <i>real</i> comfortable, though...");
						writeText("She just lets her statement trail off for a moment, before leaving the room.");
						writeText("Getting her to open up might be a bit more... difficult, than expected.");
						data.player.currentScene = "playerOffice";
						passTime();
						writeTransition(data.player.currentScene, "Go back");
						data.story[1].trust = 3;
						break;
					}
				}
				case "kuro4" : {//another roof-meeting
					if(data.story[1].trust < 60){
						writeText("As you approach her, "+data.story[1].fName+" looks you over, rolling another of her lollipops in her mouth.");
						writeSpeech("kuro","","Mm, you're a little pent-up, huh? I don't mind helping out, but there's this bag I <i>almost</i> have enough for, y'know?");
						if(galleryCheck('kuro2') != true){
							writeFunction("writeEvent('kuro2')", "Another handjob ($5)"); //REMOVE IF SEEN
						}
						if(galleryCheck('kuro3') != true){
							writeFunction("writeEvent('kuro3')", "Jerk off on her ($10)"); //REMOVE IF SEEN
						}
						if(data.story[1].trust > 21){ // remove if seen
						// 	writeFunction("writeEvent('kuro4')", "Ask for a blowjob ($15)");
						}
						if(data.story[1].trust < 40){ // remove if seen
							//writeFunction("writeEncounter('kuro', 'kuro4a')", "Ask about sex ($?)");
						}
						else{ // maybe || kuro4d not seen?
							//writeFunction("writeEncounter('kuro', 'kuro4a')", "Have sex ($30)");
						}
						writeTransition(data.player.currentScene, "Leave her be");
						break;
					}
					else{
						//if she's been hypno'd, basically
						writeText("As you approach her, "+data.story[1].fName+"'s flushes as she stands a bit straighter, her thighs rubbing against each other.");
						writeSpeech("kuro","","Heya Master~! Ooh, don't tell me, you're here for another night of fun with your favorite cocksock, right?");
						writeFunction("writeEncounter('kuro', 'kuro4a')", "Have sex");
						writeFunction("writeEvent('kuro6')", "69 each other");
						//more scenes may be implemented later
						data.player.currentScene = "roof";
						writeTransition(data.player.currentScene, "Leave her be");
						break;
					}
					break;
				}
				case "kuro4a" : {
					if(data.story[1].trust<40){
						writeSpeech("kuro","","Ah. No offense, but that sort of thing is... y'know? I'd need to get to know you better as a client before we can do stuff like that. Sorry, hun.");
						writeFunction("writeEncounter('kuro', 'kuro4')", "Choose something else");
						writeTransition(data.player.currentScene, "Leave her be");
						// if(data.player.money >= 100){
						// 	writeFunction("writeEncounter('kuro', 'kuro4b')", "Offer $100");
						// }
						break;
					}
					else if(data.story[1].trust<60){
						writeSpeech("kuro","","Mm... I could use a good fuck, and you've been a <i>very</i> good client. Meet me at my place.");
						writeText("She leans in towards you, standing on her toes to whisper in your ear,");
						writeSpeech("kuro","","<i>I'll bring the condoms.</i>");
						writeText("With that, she practically skips off, smiling widely and very purposefully flashing her panties to you with every step.");
						writeFunction("writeEvent('kuro', 'kuro5')", "Finish your business for the day and head to her place");
						break;
					}
					else{
						//EDIT ME TO ACCOUNT FOR THE EXISTENCE OF MULTIPLE POST-HYPNO SEX SCENES BASED ON PREVIOUS SELECTIONS
						writeText("She laughs, her finger toying a strand of hair.");
						writeSpeech("kuro","","Only if you promise to do it raw, Master~!");
						writeText("She bounces onto the balls of her feet, giving you a quick peck on the cheek before leaving the roof.");
						writeFunction("writeEncounter('kuro', 'kuro5a')", "Finish your business for the day and head to her place");
						break;
					}
					break;
				}
				case "kuro4b" : {
					writeText("Her eyes go wide as you show her the money, her lollipop clicking against her teeth.");
					writeSpeech("kuro","","That's <i>one</i> way into a girl's panties.");
					writeText("She smiles widely, taking the money gently as she runs a finger along your belt.");
					writeSpeech("kuro","","My place. Tonight. <i>I'll bring the condoms.</i>");
					writeText("At that, she all-but-skips away, sliding the bills into her bra, likely for a lack of pockets.");
					writeFunction("writeEvent('kuro5')", "Finish your business for the day and head to her place");
					break;
				}
			}
		}
		case "tomgirl": {
			switch (scene) {
				case "tomgirlTest": {
					writeBig("images/tomgirl/1-2.jpg", "Art by Nagi Ichi");
					writeSpeech("???", "none", "Dude, it's not just the fact that they're missing! The whole thing just screams lazy!");
					writeSpeech("tomgirl", "", "Dude, I don't care about your virtual animals. I-");
					writeText("A student is having a heated discussion about something with another student, but turns towards you as you walk up the stairs.");
					writeBig("images/tomgirl/2-1.jpg", "Art by Nagi Ichi");
					writeBig("images/tomgirl/4-3.jpg", "Art by Nagi Ichi");
					writeBig("images/tomgirl/9-5.jpg", "Art by Nagi Ichi");
					writeText("When you come to, he's nowhere to be seen.");
					writeTransition("northHallway", "Keep going");
					break;
				}
				case "tomgirl1": {
					writeBig("images/tomgirl/1-2.jpg", "Art by Nagi Ichi");
					writeSpeech("???", "none", "Bro, it's not just the fact that they're missing! The whole thing just screams lazy!");
					writeSpeech("tomgirl", "", "Dude, I don't care about your virtual animals. I-");
					writeText("Two students are having a heated discussion about something, and one of them turns towards you as you walk up the stairs.");
					writeText("The one looking at you has an effeminate look to him, but gives off a pretty disrespectful vibe. His name is "+data.story[2].fName+" "+data.story[2].lName+" if you remember your files right.");
					writeText("He's staring at you, so you decide to...");
					writeBig("images/tomgirl/1-3.jpg", "Art by Nagi Ichi");
					writeFunction("writeEncounter('tomgirl', 'tomgirl2')", "Invite "+data.story[2].fName+" to your office");
					writeTransition(data.player.currentScene, "Walk on by");
					break;
				}
				case "tomgirl2": {
					writeSpeech("tomgirl", "", "So... What exactly did you need from me?");
					writeSpeech("player", "", "Well I'm the school's new counselor, and there are a few students I was told to look out for. Any idea why you'd be on that list?");
					writeSpeech("tomgirl", "", "Not really. I'm doing fine, I think.");
					writeSpeech("player", "", "I see. No physical issues, no mental hangups? Nothing being repressed?");
					writeText("He looks thoughtful for a moment, before he seems to be distracted while looking you in the eyes.");
					writeSpeech("tomgirl", "", "I... uh... No! No, sorry, nothing.");
					writeSpeech("player", "", "Hmm. Well, I have a rather, how should I say, fringe method of work. It's why I was accepted here. Would you be willing to work with me for a moment, so I can come to understand you?");
					writeSpeech("tomgirl", "", "I mean, I don't see why not.");
					writeText("...");
					writeText("In some aspects he's putty in your hands, the hypnosis takes effect almost instantly.");
					writeSpeech("tomgirl", "", "I just like how it feels. Women's underwear is more comfortable for me.");
					writeSpeech("player", "", "Of course. Have you ever thought about exploring those feelings farther?");
					writeSpeech("tomgirl", "", "No! ... No. I'm not interested in thinking about that stuff.");
					writeText("But in other ways he's putting up a hell of a resistance. His hangups about being seen as effeminate are almost strong enough to break him out of the hypnosis. Almost.");
					writeSpeech("player", "", "Alright, we don't need to talk about that. Just watch this pendant and I'll give you some very important instructions.");
					writeText("...");
					writeText("*SNAP*");
					writeSpeech("tomgirl", "", "Huh? Sorry, I think I doze-");
					writeSpeech("player", "", ""+data.story[2].fName+" "+data.story[2].lName+".");
					writeSpeech("tomgirl", "", "Y-yes "+data.player.honorific+"?");
					writeSpeech("player", "", "I'm not actually a school counselor. I'm a practicing hypnotist who intends to enslave whoever I want at my whim.");
					writeSpeech("tomgirl", "", "... Excuse me?");
					writeSpeech("player", "", "You're my next target. By the time I'm done with you, you'll be nothing more than a loyal sex slave begging for my touch.");
					writeSpeech("tomgirl", "", "What the fuck? Fuck off, weirdo!");
					writeText("He runs out of the room, slamming the door behind him.");
					writeText("...");
					writeText("A few moments later, the door is thrown open again.");
					writeSpeech("tomgirl", "", "What the fuck did you do to me?!");
					writeSpeech("player", "", "You've got some strong hangups. I look forward to breaking you, but for now I needed to make sure you wouldn't go snitching. You won't be able to disobey me, or reveal my plan to anyone. You'll have a hard time skipping school too.");
					writeSpeech("tomgirl", "", "Y-you're psychotic!");
					writeSpeech("player", "", "See you tomorrow "+data.story[2].fName+". Same time?");
					writeText("He runs off without a response. Oh well, you have him in your grasp.");
					data.player.currentScene = "playerOffice";
					passTime();
					writeTransition(data.player.currentScene, "Go back");
					data.story[2].trust = 2;
					break;
				}
				case "tomgirl3": {
					writeText("You lean into the classroom to call for "+data.story[2].fName+".");
					writeSpeech("player", "", ""+data.story[2].fName+". Come with me.");
					switch (data.story[2].trust) {
						case 2: {
							writeText("He quickly bows out of the conversation, making up as fake an excuse as he can. None of his classmates pick up on it though.");
							writeText("He meets you outside the classroom, apprehension in his eyes.");
							writeSpeech("tomgirl", "", "Well? What the fuck do you want, psycho?");
							break;
						}
						case 3: {
							writeText("He quickly bows out of the conversation, making up as fake an excuse as he can. None of his classmates pick up on it though.");
							writeText("He meets you outside the classroom, nervousness in his eyes.");
							writeSpeech("tomgirl", "", "L-listen. You don't need to do this. Let me go, and I won't tell anybody, okay?");
							break;
						}
						case 4: {
							writeText("He quickly bows out of the conversation, apologizing to his classmates as he leaves.");
							writeText("He meets you outside the classroom, his eyes looking hopeless, yet still angry.");
							writeSpeech("tomgirl", "", "Stop this! You can't keep calling me out of class like this, what if they find out?");
							writeSpeech("player", "", "I thought you wanted them to find out?");
							writeSpeech("tomgirl", "", "Shut up! Just... What do you want?");
							break;
						}
						case 5: {
							writeText("He quickly runs towards the door, his classmates are used to it at this point.");
							writeText("He meets you outside the classroom, he almost seems excited.");
							writeSpeech("tomgirl", "", "So? What sort of fucked up stuff is next? Get it over with already.");
							writeSpeech("player", "", "Well, aren't you turning out nicely.");
							writeSpeech("tomgirl", "", "S-shut up! Quit making me wait, it's even worse than the shit you actually do.");
							break;
						}
					}
					if (galleryCheck('tomgirl1') != true) {
						writeFunction("writeEvent('tomgirl1')", "'Take me to your house'");
					}
					else {
						if (galleryCheck('tomgirl2') != true) {
							writeFunction("writeEvent('tomgirl2')", "'Take me to your house again'");
						}
					}
					if (galleryCheck('tomgirl3') != true) {
						writeFunction("writeEvent('tomgirl3')", "'Meet me in the gym'");
					}
					if (galleryCheck('tomgirl4') != true) {
						writeFunction("writeEvent('tomgirl4')", "'I want a video of you'");
					}
					writeTransition(data.player.currentScene, "Nevermind");
					passTime();
					break;
				}
			case "tomgirl4": {
				writeText("As you walk into the classroom you don't even need to call "+data.story[2].fName+"'s name, it almost seems like he was waiting for you.");
				writeText("The two of you walk out, "+data.story[2].fName+" pulling on your sleeve to get you to hurry up out the doorway.");
				writeSpeech("player", "", "Jeez. Needy little bitch aren't you?");
				writeSpeech("tomgirl", "", "J-just hurry up! I wanna get this over with so I can go home. What do you want this time, another blowjob?");
				writeSpeech("player", "", "You're right on the edge, aren't you? I think it's time to push you over the edge. Take me to your place again.");
				writeSpeech("tomgirl", "", "Fine, come on.");
				writeText("...");
				writeEvent('tomgirl5');
				data.player.currentScene = "vintageStreet";
				passTime();
				writeTransition(data.player.currentScene, "Finish");
				break;
			}
			}
			break;
		}
		case "chubby": {
			switch (scene) {
				case "chubby1": {
					writeSpeech("chubby", "", "Yeees~? Oh, hello! "+data.story[3].fName+" is still-");
					writeSpeech("player", "", "At school, yes, but she's on her way back right now. Listen, take this.");
					writeText("You hand her the petunia.");
					writeSpeech("chubby", "", "Oh, how lovely. Oh, um...<br>I'm flattered, but-");
					writeSpeech("player", "", "I need to be direct, she'll probably be home soon. "+data.story[3].fName+"'s having a bit of trouble connecting. I was hoping you could give her this as a gift.");
					writeSpeech("chubby", "", "I'm not sure that...<br>Oh, this is the same one she has on her bag.");
					writeSpeech("player", "", "I believe that meditation is the way to go for your daughter, but it's important that this gift comes from you.");
					writeSpeech("chubby", "", "I see, of course. Thank you. I'll let her know about the um...");
					writeSpeech("player", "", "Meditation.");
					writeSpeech("chubby", "", "Thank you. You really have gone above and beyond, the university is lucky to have you.");
					writeTransition(data.player.currentScene, "Finish");
					removeItem('petunia');
					data.story[3].trust = 80;
					data.story[3].encountered = true;
					passTime();
					break;
				}
				case "chubby2": {
					writeEvent('chubby1');
					writeTransition(data.player.currentScene, "Finish");
					data.story[3].trust = 100;
					data.story[4].trust = 100;
					passTime();
					break;
				}
			}
		}
		case "purple": {
			switch (scene) {
				case "purpleTest": {
					writeBig("images/purple/profile.jpg", "Art by Oreteki18kin");
					writeSpeech("purple", "", "'Scuse me.");
					writeText("A student with purple hair bumps into you while walking.");
					writeBig("images/purple/1-4.jpg", "Art by Oreteki18kin");
					writeBig("images/purple/2-2.jpg", "Art by Oreteki18kin");
					writeText("When you come to, she's nowhere to be seen.");
					writeText("Your phone buzzes in your pocket.");
					writeTransition("westHallway", "Keep going");
					data.story[3].textEvent = "purpleTest";
					notification();
					break;
				}
				case "purple1A": {
					writeBig("images/purple/profile.jpg", "Art by Oreteki18kin");
					writeText("She's a purple haired schoolgirl, she looks familiar...");
					writeText("Ah, yes. You saw her file earlier. Her name is "+data.story[3].fName+" "+data.story[3].lName+".");
					writeText("She's had trouble with her grades since her father passed away, despite still keeping up attendance.");
					writeText("She seems cute enough, if you wanted to you could call her to your office for some 'counseling'.");
					writeFunction("writeEncounter('purple', 'purple1C')", "Call her to your office.");
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "purple1B": {
					writeText("The file is from the principal, so it's worth even just a glance.");
					writeText("It's on someone named "+data.story[3].fName+" "+data.story[3].lName+".");
					writeBig("images/purple/profile.jpg", "Art by Oreteki18kin");
					writeText("She's had trouble with her grades since her father passed away, despite still keeping up attendance.");
					writeText("She seems cute enough, if you wanted to you could call her over for some 'counseling'.");
					writeFunction("writeEncounter('purple', 'purple1C')", "Call her to your office.");
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "purple1C": {
					writeSpeech("player", "", "Thank you again for joining me, Ms. "+data.story[3].lName+".");
					writeSpeech("purple", "", "You can call me "+data.story[3].fName+". Was there something you needed?");
					writeSpeech("player", "", "Yes, I was just wondering how you've been holding up lately.");
					writeText("...");
					writeText("After some time it's clear she's got a lot of repressed emotions, but she isn't relaxed enough for hypnosis to work right now.");
					writeText("Given enough time you could build up a relationship of trust with her and get through her walls. For now, the two of you just talk aimlessly for awhile.");
					writeSpeech("purple", "", "So was that everything you needed?");
					writeSpeech("player", "", "Yes, thank you. I'd like to speak with you again like this sometime, if that's alright.");
					writeSpeech("purple", "", "Sure. Bye.");
					data.player.currentScene = 'playerOffice';
					data.story[3].trust = 20;
					passTime();
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "purple2A": {
					writeSpeech("chubby", "", "Good luck at school honey, see you later!");
					writeSpeech("purple", "", "See you later mom! Oh, uh, hi "+data.player.honorific+".");
					writeSpeech("player", "", "Good morning "+data.story[3].fName+". On your way to school?");
					writeSpeech("purple", "", "Yes "+data.player.honorific+". You?");
					writeFunction("writeEncounter('purple', 'purple2C')", "'No, I was actually hoping to speak with your mother.'");
					writeTransition(data.player.currentScene, "'Yes, I'll meet you there.");
					break;
				}
				case "purple2B": {
					writeSpeech("player", "", "Hello "+data.story[3].fName+". On your way home?");
					writeSpeech("purple", "", "Yes I am. Sorry I can't stay and talk.");
					writeSpeech("player", "", "It's completely fine. Is your mother waiting for you?");
					writeText("She nods.");
					writeFunction("writeEncounter('purple', 'purple2C')", "'I'd like to meet her, if possible.'");
					writeTransition(data.player.currentScene, "'Stay safe getting home then.");
					break;
				}
				case "purple2C": {
					writeSpeech("purple", "", "Mom? We've got a guest. He's a counselor from school.");
					writeSpeech("chubby", "", "I'll be right there!");
					writeSpeech("purple", "", "Alright, uh, make yourself at home I guess. I've gotta go.");
					writeText("She heads off, leaving you in the hall. You look around for a moment, admiring the photos on the wall.");
					writeSpeech("chubby", "", "Hello!");
					writeBig("images/chubby/profile.jpg", "Art by Oreteki18kin");
					writeSpeech("chubby", "", "I'm "+data.story[4].fName+", "+data.story[3].fName+"'s mom. You're the new counselor at school?");
					writeSpeech("player", "", "Yes ma'am. I was hoping to get to know a little more about your daughter.");
					writeText("She takes your hand in a gentle handshake and the two of you start talking after she leads you to a couch.");
					writeText("...");
					writeText("The two of you end up talking for a few hours. She's got a very kind tone, but she seems too pensive to be open to hypnosis.");
					writeText("Still, she could present an opening in "+data.story[3].fName+"'s defenses.");
					writeSpeech("player", "", "So, in short, your daughter might be a little slow in getting home some days.");
					writeSpeech("chubby", "", "Of course! I'm away in the evenings most days, but you're welcome to speak with me or my daughter whenever you need to.");
					data.player.currentScene = 'vintageStreet';
					data.story[3].trust = 40;
					data.story[4].trust = 40;
					passTime();
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "purple3": {
					writeSpeech("player", "", "It's good to talk to you again "+data.story[3].fName+".");
					writeSpeech("purple", "", "Uh huh. Listen, I'm not really sure this is necessary.");
					writeSpeech("player", "", "If it can help, I think it's worth the time. You wouldn't walk home on a broken leg would you? There's nothing wrong with needing help.");
					writeText("She thinks about this for a moment, then sighs.");
					writeSpeech("purple", "", "This'll help mom, right? She won't need to be worried?");
					writeSpeech("player", "", "Absolutely. You'll be living a whole new life once you let me in.");
					writeSpeech("purple", "", "Strange way to phrase that, but okay. Where do we start?");
					writeSpeech("player", "", "Well...");
					writeFunction("writeEncounter('purple', 'purple3A')", "Help her with schoolwork");
					writeFunction("writeEncounter('purple', 'purple3B')", "Talk about her feelings");
					break;
				}
				case "purple3A": {
					writeSpeech("player", "", "Let's talk about your schoolwork. Letting things pile up can leave you feeling overwhelmed, so let's try to shrink that backlog a bit. Do you have any assignments on you?");
					writeSpeech("purple", "", "Yeah. I keep them in my backpack. They're a bit crumpled at this point.");
					writeSpeech("player", "", "No problem. Let's get started.");
					writeText("...");
					writeText("The backlog shrinks quickly. For as worried as you might have been about having no formal tutoring training, it seems like most of the work is stuff she already understands. She just needed some time and focus to deal with them.");
					writeSpecial("You feel like "+data.story[3].fName+"'s trust in your has improved!");
					writeText("As time passes she gets stuck on a certain problem. She should already understand how to solve it, but she's still having trouble.");
					writeFunction("writeEncounter('purple', 'purple3AA')", "Solve it for her");
					writeFunction("writeEncounter('purple', 'purple3AB')", "Walk her through the problem");
					break;
				}
				case "purple3AA": {
					writeSpeech("player", "", "Alright, so for this one you need to use this method, which gives you this total...");
					writeSpeech("purple", "", "Aaaah right. Sorry, this subject is a pain for me.");
					writeText("While it wasn't ideal for encouraging growth, solving the problem for her improved her view of you.");
					writeSpecial("You feel like "+data.story[3].fName+"'s trust in your has improved!");
					writeText("Within the next few hours you've exhausted all of her backlog of schoolwork. Once the last page is finished the two of you relax against your chairs.");
					writeSpeech("purple", "", "Finished... I haven't had a clear schedule for weeks now.");
					writeSpeech("player", "", "You've done very well. This might be a good time to reconnect to old friends and enjoy the free time. You've earned a break at least.");
					writeSpeech("purple", "", "Yeah. I should really get going now.");
					writeSpeech("player", "", "Of course. You're welcome back any time.");
					writeText("The two of you shake hands and she stands to leave, but after a moment of contemplation she sits back down.");
					writeSpeech("purple", "", "Could, uh, could I ask you something?");
					writeSpeech("player", "", "Absolutely. What's up?");
					writeSpeech("purple", "", "I've been having trouble sleeping, and it's been tough to actually get motivated to, you know... Talk to people. I'm not really sure how to 'reconnect', basically.");
					writeSpeech("player", "", "Hmm. I actually might have the solution to that.");
					writeFunction("writeEncounter('purple', 'purple3BA')", "Suggest meditation");
					writeFunction("writeEncounter('purple', 'purple3BB')", "Suggest hypnotism");
					break;
				}
				case "purple3AB": {
					writeSpeech("player", "", "Alright, so for this one you remember the method here, right?");
					writeSpeech("purple", "", "Uh, I think so. This is the total, right?");
					writeSpeech("player", "", "Close. If you look here...");
					writeText("The two of you work through a great deal of her schoolwork, but by the time a few hours have passed there's still quite a bit left to do.");
					writeSpeech("player", "", "You've done very well. There's still more left but I think this is a good stopping point for today.");
					writeSpeech("purple", "", "Sure. I think I can finish the rest later.");
					writeText("She starts putting away her books, and you notice there's a pressed flower hanging on her backpack. IT looks like a real flower, not a plastic one.");
					writeFunction("writeEncounter('purple', 'purple3BC')", "Ask about the flower");
					break;
				}
				case "purple3B": {
					writeSpeech("player", "", "I was hoping to talk more about you and how you're doing.");
					writeText("She sighs, she seems like more of the tomboyish type and might have some trouble talking about her feelings.");
					writeText("Still, you're a professional. Or at least you're professionally faking it.");
					writeSpeech("player", "", "Bear with me, please. I'm more than experienced here, and I can help.");
					writeSpeech("purple", "", "Alright, alright. What do you want to know?");
					writeText("...");
					writeText("Your discussion goes on for a few hours slowly breaking down her barriers. She's still a bit uncomfortable, but once you get her going about herself she carries most of the conversation herself.");
					writeText("She's a sporty sort who tends to tackle problems head on, but this problem is out of her wheelhouse.");
					writeSpeech("purple", "", "I've been having trouble sleeping, and it's been tough to actually get motivated to, you know... Talk to people. I just spend most of my time in bed.");
					writeSpeech("player", "", "Well, there are a few things I know of to help.");
					writeText("As you're about to give a suggestion you notice a strange purple flower dangling on her keychain. It seems like it's a real flower, not a plastic one. It might be an interesting topic to delve into, although it might not be a great idea to get distracted right now.");
					writeFunction("writeEncounter('purple', 'purple3BA')", "Suggest meditation");
					writeFunction("writeEncounter('purple', 'purple3BB')", "Suggest hypnotism");
					writeFunction("writeEncounter('purple', 'purple3BC')", "Ask about the flower");
					break;
				}
				case "purple3BA": {
					writeSpeech("player", "", "Have you ever tried meditation?");
					writeSpeech("purple", "", "Sitting around all day? I feel like I've been doing a lot of that lately.");
					writeSpeech("player", "", "Not quite. It's about clearing your mind and accepting whatever enters your thoughts, before letting it go. Why don't we give it a try?");
					writeSpeech("purple", "", "Alright. Do I need to do that 'ooooohm' thing?");
					writeSpeech("player", "", "You can do, or not do, whatever makes you comfortable.");
					writeText("...");
					writeText("The two of you practice meditation for awhile. The clear-mind state it puts her into is slowly decreasing her mental fortitude, but she isn't quite ready yet.");
					writeSpeech("player", "", "How do you feel?");
					writeSpeech("purple", "", "Better, actually. Thank you.");
					writeSpeech("player", "", "It's no problem at all. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
					writeSpeech("purple", "", "Yeah. See you later.");
					writeText("She packs up her bags, now much more trusting of you.");
					data.story[3].trust = 80;
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Finish");
					passTime();
					break;
				}
				case "purple3BB": {
					writeSpeech("player", "", "Have you ever thought about, and hear me out here, hypnosis?");
					writeSpeech("purple", "", "... Excuse me? Like that whole 'you are feeling like a sleepy chicken' thing?");
					writeSpeech("player", "", "It's not like how it's presented on tv. It puts you into a relaxed state, you'll be able to speak without inhibition or anxiety.");
					writeSpeech("purple", "", "Huh.");
					writeText("She seems interested, but still hesitant. Maybe it was a bit too early to suggest something like hypnosis.");
					writeText("Still, the seed is sown.");
					writeSpeech("player", "", "You should think about it on your own, and come to your own conclusions on the matter. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
					writeSpeech("purple", "", "Yeah. See you later.");
					writeText("She packs up her bags, the idea of hypnosis still floating around in her mind.");
					data.story[3].trust = 60;
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Finish");
					passTime();
					break;
				}
				case "purple3BC": {
					writeSpeech("player", "", "Could you tell me about that flower on your backpack?");
					writeSpeech("purple", "", "Oh, uh...");
					writeText("She unclips the flower from her bag.");
					writeSpeech("purple", "", "This is a petunia, it was a gift from dad. He'd give me fresh ones I'd clip onto my bag. This one's getting a bit old, but...");
					writeText("...");
					writeText("She seems lost in thought. Trying to talk her out of this funk isn't working, this might be all you can do for today.");
					writeSpeech("player", "", "Thank you for your time. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
					writeSpeech("purple", "", "Yeah... Later.");
					writeText("She packs up her bags and leaves. this session wasn't too productive, but the info about the flower could prove useful. They probably sell them in the shopping district, but you obviously can't give one to her directly.");
					writeText("If you want to break down her barriers, it might be worth talking to her mother again.");
					data.story[3].trust = 50;
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Finish");
					passTime();
					break;
				}
				case "purple4": {
					writeSpeech("player", "", "So, how have you been? Has meditation paid off at all for you?");
					writeText("She responds with a smile. She really seems like she's in a better place than when you saw her last.");
					writeSpeech("purple", "", "Yep! Taking some time to relax was nice. I guess I'd been letting things pile up, you know?");
					writeSpeech("player", "", "Absolutely. Just remember that it's an iterative process. Taking some time for self care should be a regular sort of deal.");
					writeSpeech("purple", "", "Yeah. I slept really well last night, so I'll try to make it a daily occurrence.");
					writeSpeech("player", "", "Actually, I have a method that can also work, if you're interested.");
					writeSpeech("purple", "", "Sure. If it helps I'll take it. What's the method?");
					writeSpeech("player", "", "Just take a look at this pendant right here. Keep your eyes on it, alright?");
					writeSpeech("purple", "", "Right. I'm gonna... Gonna keep an eye... My eyes... On...");
					writeSpeech("player", "", "Just relax. Everything is under control. This is all normal. Everything is normal.");
					writeText("...");
					writeText("*SNAP*");
					writeSpeech("purple", "", "Gah! Uh... Oh, sorry. I got distracted. I don't think your method works, "+data.player.honorific+".");
					writeSpeech("player", "", "You might want to check your clock.");
					writeSpeech("purple", "", "Hmm? Oh my god! It's been hours? Whoa!");
					writeSpeech("player", "", "And you can call me master from now on. It's just what's <b>normal</b>.");
					writeSpeech("purple", "", "Yeah sure, master. Listen I gotta get home. I told my mom I'd be home already, she's probably already caling the police.");
					writeSpeech("player", "", "That'd be a problem. I'll see you later then. And for our next session, it'll be at your house? Just like <b>normal</b>?");
					writeSpeech("purple", "", "Of course master! I'll catch you later!");
					data.player.currentScene = 'playerOffice';
					data.story[3].trust = 90;
					writeTransition(data.player.currentScene, "Finish");
					passTime();
					break;
				}
				case "purple5": {
					writeSpeech("player", "", "So, how have you been? Have you given any more thought to hypnosis?");
					writeSpeech("purple", "", "I uh, I've given it some thought and uh...");
					writeText("You hold up your hand to interrupt her stumbling.");
					writeSpeech("player", "", "Don't worry too much. If you aren't 100% accepting of the process, it won't work anyway. How about we try some other methods first?");
					writeText("This relaxes her. You'll need to get her to open up to the idea first. Luckily by the end of the day she should be more accomodating.");
					writeSpeech("purple", "", "What did you have in mind?");
					writeSpeech("player", "", "Have you ever tried meditation?");
					writeSpeech("purple", "", "Sitting around all day? I feel like I've been doing a lot of that lately.");
					writeSpeech("player", "", "Not quite. It's about clearing your mind and accepting whatever enters your thoughts, before letting it go. Why don't we give it a try?");
					writeSpeech("purple", "", "Alright. Do I need to do that 'ooooohm' thing?");
					writeSpeech("player", "", "You can do, or not do, whatever makes you comfortable.");
					writeText("...");
					writeText("The two of you practice meditation for awhile. The clear-mind state it puts her into is slowly decreasing her mental fortitude, but she isn't quite ready yet.");
					writeSpeech("player", "", "How do you feel?");
					writeSpeech("purple", "", "Better, actually. Thank you.");
					writeSpeech("player", "", "It's no problem at all. Now, you need to get home, right? It's getting late. I'll see you later, alright?");
					writeSpeech("purple", "", "Yeah. See you later.");
					writeText("She packs up her bags, now much more trusting of you.");
					data.story[3].trust = 80;
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Finish");
					passTime();
					break;
				}
				case "purple6": {
					writeSpeech("player", "", "So, how have you been?");
					writeSpeech("purple", "", "I've been managing.");
					writeText("...");
					writeText("The conversation is short and terse, you can't find a way to connect with her.");
					writeText("Before too long she decides that it'd be best to go, she's got schoolwork to deal with after all.");
					writeText("She spoke of the petunia last time, it seems like she has a great deal of emotional attachment to the flower.");
					writeText("A gift might get her out of the funk, but you can't give it too her directly. You're just the school counselor after all.");
					writeText("The best course of action would be to speak to "+data.story[4].fName+".");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "purple6": {
					writeSpeech("player", "", "So, how have you been?");
					writeSpeech("purple", "", "I've been managing.");
					writeText("...");
					writeText("The conversation is short and terse, you can't find a way to connect with her.");
					writeText("Before too long she decides that it'd be best to go, she's got schoolwork to deal with after all.");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "purple7A": {
					writeSpeech("purple", "", "Ah! Master! I've been waiting for-");
					writeSpeech("player", "", "Shh! Calling me master in public isn't <b>normal</b>.");
					writeText("She enthusiasm is instantly halted as she looks around.");
					writeSpeech("purple", "", "Sorry "+data.player.honorific+". Would you like to head home with me now?");
					writeFunction("writeEncounter('purple', 'purple7B')", "Of course. Let's go");
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Not right now");
					break;
				}
				case "purple7B": {
					writeText("The two of enter "+data.story[3].fName+"'s house together.");
					writeSpeech("chubby", "", "Welcome home! Oh, hello "+data.player.name+"!");
					writeSpeech("player", "", "Good to see you again "+data.story[4].fName+". I'm here to help your daughter in a more relaxed environment. We'll be heading up to her room, if that's fine.");
					writeSpeech("chubby", "", "Oh, well I don't-");
					writeSpeech("purple", "", "It's fine, mom! I'll see you up there, alright "+data.player.honorific+"?");
					writeText(""+data.story[3].fName+" runs upstairs. "+data.story[4].fName+" is left shocked and turns to you.");
					writeSpeech("chubby", "", "My goodness, she's just like her old self! I...");
					writeText("Tears are starting to form in "+data.story[3].fName+"'s eyes.");
					writeSpeech("chubby", "", "Thank you! Thank you so much! Whatever you need, go ahead. Can I make something for you for after?");
					writeSpeech("player", "", "No thank you. I'll be out of your hair before too long.");
					writeSpeech("chubby", "", "Take as long as you need!");
					writeText("You can hear "+data.story[3].fName+" calling for you from upstairs, so you get moving.");
					writeSpeech("chubby", "", "It's incredible... She's exactly like before...");
					writeText("...");
					writeEvent('purple1');
					writeText("As you walk downstairs, a happy voice greets you.");
					writeSpeech("chubby", "", "Oh! How did it go?");
					writeSpeech("player", "", "I really got through to her. She said to let you know she'd be up there for a while. Working through feelings and all that.");
					writeSpeech("chubby", "", "No problem. Thank you again. If you ever need anything, just let me know.");
					data.player.currentScene = 'vintageStreet';
					writeTransition(data.player.currentScene, "Finish");
					data.story[3].trust = 95;
					passTime();
					break;
				}
				case "purple8": {
					writeSpeech("player", "", "Hello "+data.story[3].fName+", here for another-");
					writeText("She pulls you into your office and closes the door behind you before pulling you into a deep kiss.");
					writeText("It's desperate and hungry, she's forcing her tongue into your mouth but starts shuddering when you push back.");
					writeSpeech("purple", "", "*mwah*! Master... I need more. I haven't been able to stop playing with myself. Even in class, I...");
					writeSpeech("player", "", "Say no more. It's not safe here, let's head to your place.");
					writeText("...");
					writeSpeech("purple", "", "Mom, I'm home! And I brought the counselor with me! We're gonna go in my room, okay?");
					writeSpeech("chubby", "", "Alright honey! Dinner's in an hour!");
					writeText("The two of you head upstairs before "+data.story[4].fName+" can get another word out.");
					writeSpeech("chubby", "", "<i>I wonder what they're doing up there...</i>");
					writeText("...");
					writeEvent('purple2');
					writeText("...");
					writeText(""+data.story[4].fName+" is breathing rapidly as she holds her phone.");
					writeSpeech("chubby", "", "Oh god, oh god... Who do I even call? What is happening?");
					writeText("The images of what she saw are burnt into her brain. Images of her own daughter having... Having SEX right in front of her!");
					writeText("Through a doorway. And obviously consensually.");
					writeSpeech("chubby", "", "What do I do? The police won-");
					writeText("And just like that, everything goes black for her.");
					writeText("...");
					writeEvent('purple3');
					writeText("...");
					writeSpeech("player", "", "Well, I'll be going now.");
					writeSpeech("chubby", "", "Come back anytime!");
					writeSpeech("purple", "", "Come back and fuck me whenever you want some of this schoolgirl pussy, master!");
					writeText("You leave with a chuckle "+data.story[4].fName+" scolds her daughter for her vulgar language.");
					writeSpeech("chubby", "", "Language like that is for in private young lady, or you'll get master in trouble!");
					writeText("She'll need some time and some direction from her daughter, but "+data.story[4].fName+" is well under your control now. You'll come back later to enjoy her, and her daughter too.");
					data.player.currentScene = 'vintageStreet';
					writeTransition(data.player.currentScene, "Finish");
					data.story[3].trust = 99;
					passTime();
					break;
				}
				case "purple9": {
					writeEvent('chubby1');
					writeTransition(data.player.currentScene, "Finish");
					data.story[3].trust = 100;
					data.story[4].trust = 100;
					passTime();
					break;
				}
			}
			break;
		}
		case "placeholder": {
			switch (scene) {
				case "": {
					break;
				}
			}
			break;
		}
		case "principal": {
			switch (scene) {
				case "introduction1": {
					writeText("The door to "+data.story[8].fName+"'s office is closed and her secretary is away from her desk. There's a little nameplate reading "+data.story[9].fName+" "+data.story[9].lName+". Otherwise, the desk is really messy.");
					writeText("You consider knocking on the door, but quickly, someone rushes in past you and starts looking through the desk.");
					writeBig("images/secretary/profile.jpg", "Art by Oreteki18Kin");
					writeSpeech("secretary", "", "Excuse me! Sorry!");
					writeSpeech("player", "", "No problem. Is "+data.story[8].fName+" in?");
					writeSpeech("secretary", "", "Uh... Yes, yes. Give me... What's your name?");
					writeSpeech("player", "", data.player.name+". I'm the new hire. Nice to meet you.");
					writeSpeech("secretary", "", "Mhm. Go ahead. Aww man...");
					writeText("While she's busy rummaging through desk drawers, you go ahead and...");
					writeFunction("writeEncounter('principal', 'introduction2')", "Go into the office");
					break;
				}
				case "introduction2": {
					writeText("And the office is empty too. The entire place is meticulously organized, completely spotless.");
					writeSpeech("player", "", "Hello?");
					writeSpeech("???", "none", "Just a moment!");
					writeBig("images/principal/profile.jpg", "Art by Oreteki18Kin");
					if (data.story.day == 1) {
						writeSpeech("principal", "", "Ah, you must be "+data.player.name+". Quite punctual to meet with me so soon, a good habit.");
						writeSpeech("player", "", "I'm very forward thinking. Forward in general, really.");
						writeSpeech("principal", "", "So, your supervisor should have filled you in on your responsibilities already. Correct? We've never had a dedicated counselor here, so I'm afraid there's not much framework for you.");
					}
					else {
						writeSpeech("principal", "", "Ah, you must be "+data.player.name+". It's good to meet you. I take it you're more punctual with students?");
						writeSpeech("player", "", "Of course, ma'am. Sorry for not meeting with you sooner.");
						writeSpeech("principal", "", "It's not an issue. This meeting isn't mandatory, your supervisor should have filled you in on your responsibilities already. Correct? We've never had a dedicated counselor here, so I'm afraid there's not much framework for you.");
					}
					writeText("She takes a seat at her desk. Despite it being the middle of the day, the desk is spotless except for a few papers, her computer, and a bottle of hand sanitizer.");
					writeSpeech("player", "", "It's not a problem. So, should I get right to work then?");
					writeSpeech("principal", "", "Did you have a particular student in mind? I'm quite proud of the fact that our students are remarkably well-adjusted.");
					writeSpeech("player", "", "From the pact you made for eternal youth, and the school's success, of course.");
					writeSpeech("principal", "", "... Excuse me?");
					writeSpeech("player", "", "A bad joke, sorry. In any case, most issues can be found just by picking out students who seem like they need help, or by talking with the teachers.");
					writeSpeech("principal", "", "Very good then, don't let me keep you. I've been keeping some notes on students you should meet, but my secretary "+data.story[9].fName+" was keeping track of them.");
					writeSpeech("player", "", "Ah. I'll come back another time then. It was good meeting you.");
					writeSpeech("principal", "", "And you.");
					writeText("She seems very disarmed, but a strong feeling in your gut warns you away from attempting hypnosis right away.");
					writeText("Fastidious people, the kind who have a dedicated bathroom in their office, tend to be very resistant to letting themselves relax. You'll need her to trust you if you want to get anywhere with her.");
					passTime();
					data.story[8].trust = 40;
					data.story[8].met = "";
					data.story[9].trust = 20;
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "caseSelect": {
					writeSpeech("secretary", "", "Go right ahead.");
					writeText("...");
					writeSpeech("principal", "", "Good to see you again. Let me see here...");
					if (data.story[8].met.includes('kuroS') != true) {
						writeSpeech("principal", "", "I've got the file of a very unconventional young woman. She's been... Soliciting... The school's security, the teachers, anyone in any position of authority. If you could straighten her out, that would be very helpful.");
						writeFunction("writeEncounter('principal', 'kuroCaseStart')", data.story[1].fName+" "+data.story[1].lName+"'s file");
					}
					else {
						if (data.story[8].met.includes('kuroF') != true) {
							writeSpeech("principal", "", "Have you had a chance to speak with Ms. "+data.story[1].lName+" yet?");
							if (data.story[1].trust > 20) {
								writeFunction("writeEncounter('principal', 'kuroCaseEnd')", "Report on "+data.story[1].fName+"'s case.");
							}
						}
					}
					if (data.story[8].met.includes('purpleS') != true) {
						writeSpeech("principal", "", "I've got the file of a young woman who's been struggling since her father passed away. Her grades are down and her friends say she's been growing distant.");
						writeFunction("writeEncounter('principal', 'purpleCaseStart')", data.story[3].fName+" "+data.story[3].lName+"'s file");
					}
					else {
						if (data.story[8].met.includes('purpleF') != true) {
							writeSpeech("principal", "", "Have you had a chance to speak with Ms. "+data.story[3].lName+" yet?");
							if (data.story[1].trust > 20) {
								writeFunction("writeEncounter('principal', 'purpleCaseEnd')", "Report on "+data.story[3].fName+"'s case.");
							}
						}
					}
					if (data.story[8].met.includes('scarfS') != true) {
						writeSpeech("principal", "", "I don't necessarily want to point the blame at anyone in particular, but there is one teacher I feel hasn't been performing at her best lately. I know it isn't your job, but could you speak to her?");
						writeFunction("writeEncounter('principal', 'scarfCaseStart')", data.story[11].fName+" "+data.story[11].lName+"'s file");
					}
					else {
						if (data.story[8].met.includes('scarfF') != true) {
							writeSpeech("principal", "", "Have you had a chance to speak with Ms. "+data.story[11].lName+" yet?");
							if (data.story[11].trust > 20) {
								writeFunction("writeEncounter('principal', 'scarfCaseEnd')", "Report on "+data.story[11].fName+"'s case.");
							}
						}
					}
					writeTransition(data.player.currentScene, "Go back");
					break;
				}
				case "kuroCaseStart": {
					writeText("You take "+data.story[1].fName+"'s file.");
					writeSpeech("player", "", "I can certainly try.");
					writeSpeech("principal", "", "Thank you. I believe she's usually being held up in the mornings at the school's entrance.");
					writeTransition(data.player.currentScene, "Finish");
					data.story[8].met += "kuroS";
					if (data.story[1].trust > 20) {
						writeEncounter('principal', 'kuroCaseEarly');
					}
					break;
				}
				case "kuroCaseEnd": {
					writeSpeech("player", "", "I've had the chance to speak with "+data.story[1].fName+". It's a bit early, but I think she's making progress.");
					writeSpeech("principal", "", "Oh? Oh! How grand! Hopefully her grades will improve too. Will she be changing her outfit? She follows dress code, but her nails and hair are a bit...");
					writeSpeech("player", "", "Flashy? I'll talk to her about it. But it's important to allow the little freedoms so that she doesn't try to assert herself too much.");
					writeSpeech("principal", "", "I see. You're the expert, so I'll leave this in your hands then. Thank you.");
					data.story[8].met += "kuroF";
					data.player.counseling += 1;
					updateMenu();
					writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+data.story[8].fName+" trusts you more!");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "kuroCaseEarly": {
					writeSpeech("player", "", "Actually, I've already had the chance to speak with "+data.story[1].fName+". It's a bit early, but I think she's making progress.");
					writeSpeech("principal", "", "Oh? Oh! How grand! Hopefully her grades will improve too. Will she be changing her outfit? She follows dress code, but her nails and hair are a bit...");
					writeSpeech("player", "", "Flashy? I'll talk to her about it. But it's important to allow the little freedoms so that she doesn't try to assert herself too much.");
					writeSpeech("principal", "", "I see. You're the expert, so I'll leave this in your hands then. Thank you.");
					data.story[8].met += "kuroF";
					data.player.counseling += 1;
					updateMenu();
					writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+data.story[8].fName+" trusts you more!");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "purpleCaseStart": {
					writeSpeech("player", "", "I can give it a shot. The loss of a parent is pretty heavy though.<br><i>She probably won't be satisfied unless I can get her back to a healthy mindset. I'll probably need to use hypnosis for this.</i>");
					writeSpeech("principal", "", "Wonderful! I'll be waiting to hear about how it goes. I'll have the file sent to your office, and she's in class B, take the east hallway. I believe she lives on Vintage Street as well.");
					writeTransition(data.player.currentScene, "Finish");
					data.story[8].met += "purpleS";
					if (data.story[3].trust > 80) {
						writeEncounter('principal', 'purpleCaseEarly');
					}
					break;
				}
				case "purpleCaseEnd": {
					writeSpeech("player", "", "I've had a chance to speak with "+data.story[3].fName+". I've spoken with her mother too, and I'm making progress.");
					writeSpeech("principal", "", "Oh, I see. How is she doing, then?");
					writeSpeech("player", "", "Better. You'll notice a bump in her grades soon.");
					writeSpeech("principal", "", "That's... That's incredible! Well, I'll have to keep an eye on her to be sure, but if you're right than you really are worth your position. Thank you very much.");
					writeSpeech("player", "", "It's not a problem. Let me know if you need anything else, then?");
					writeSpeech("principal", "", "Absolutely. You'll be the first I go to.");
					data.story[8].met += "purpleF";
					data.player.counseling += 1;
					updateMenu();
					writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+data.story[8].fName+" trusts you more!");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "purpleCaseEarly": {
					writeSpeech("player", "", "Ah, "+data.story[3].fName+".");
					writeSpeech("principal", "", "You know her?");
					writeSpeech("player", "", "I do. I've met her mother too. And I've already had a chance to discuss these issues, and her future.");
					writeSpeech("principal", "", "Oh, I see. How is she doing, then?");
					writeSpeech("player", "", "Better. You'll notice a bump in her grades soon.");
					writeSpeech("principal", "", "That's... That's incredible! Well, I'll have to keep an eye on her to be sure, but if you're right than you really are worth your position. Thank you very much.");
					writeSpeech("player", "", "It's not a problem. Let me know if you need anything else, then?");
					writeSpeech("principal", "", "Absolutely. You'll be the first I go to.");
					data.story[8].met += "purpleF";
					data.player.counseling += 1;
					updateMenu();
					writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+data.story[8].fName+" trusts you more!");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "scarfCaseStart": {
					writeSpeech("player", "", "So what do you mean 'not up to her best'?");
					writeSpeech("principal", "", "Well, she has't recieved any complaints, and her students are doing fine on their psychology tests, it's just that...");
					writeSpeech("player", "", "<i>So she's a psychology teacher?</i><br>So what's the problem?");
					writeSpeech("principal", "", "She isn't picking up after herself! The teacher's lounge is always such a mess at the end of the day, and her desk is the worst!<br>Sorry, I lost control of myself for a moment.");
					writeSpeech("player", "", "<i>That's her idea of losing control?</i><br>Alright, I guess I can ask her to pick up after herself.");
					writeSpeech("principal", "", "Thank you, I would really appreciate it. She teaches in Class B, down the east hallway.");
					writeTransition(data.player.currentScene, "Finish");
					data.story[8].met += "scarfS";
					break;
				}
				case "scarfCaseEnd": {
					writeSpeech("player", "", "Yes I have, I've asked her to keep her desk cleaner. And Ms. "+data.story[11].fName+" volunteered to help keep the room cleaner as well.");
					writeSpeech("principal", "", "Wonderful! I know it's not your job, so thank you very much for the help.");
					data.story[8].met += "scarfF";
					data.player.counseling += 1;
					updateMenu();
					writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+data.story[8].fName+" trusts you more!");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "neetCaseStart": {
					break;
				}
				case "neetCaseEnd": {
					break;
				}
				case "neetCaseEarly": {
					break;
				}
			}
			break;
		}
		case "neet": {
			switch (scene) {
				case "introduction": {
					break;
				}
			}
			break;
		}
		case "scarf": {
			switch (scene) {
				case "introduction1": {
					writeText("You wave to her as she walks down the hallway.");
					writeBig("images/scarf/profile.jpg", "Art by Enoshima Iki");
					writeSpeech("player", "", "Excuse me, could I have-");
					writeText("But she just keeps walking, uninterested in conversation. It's like you're not even there.");
					writeSpeech("player", "", "Could I just have a second please?");
					writeText("... And she's gone, what a pain. This really isn't your job, but it'll help you get closer to "+data.story[8].fName+".");
					writeText("In any case if she isn't interested in chatting in the halls, maybe you'll find her in the teacher's lounge?");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "caseSelect": {
					writeSpeech("scarf", "", "Yes? Did you need something? I loathe having my time wasted.");
					if (data.player.hypnosis == 1 && data.story[7].trust > 20) {
						writeSpeech("player", "", "<i>I should ask about a technique to use on "+data.story[7].fName+"</i>");
						writeFunction("writeEncounter('scarf','mejiTraining')", "Ask about the technique");
					}
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
				case "mejiTraining": {
					writeSpeech("player", "", "I want to learn a technique to increase sensitivity. By a lot.");
					writeSpeech("scarf", "", "Oho~? And how exactly will you use something like that?");
					writeSpeech("player", "", "Well, to start...");
					writeText("...");
					writeSpeech("scarf", "", "I'm quite convinced. Very well then.");
					writeText(data.story[11].fName+" teaches you the sensitivity increase technique.");
					data.player.hypnosis += 1;
					updateMenu();
					writeSpecial("Your skill in hypnosis has improved!");
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
			}
			break;
		}
		case "green": {
			switch (scene) {
				case "introduction": {
					writeBig("images/green/profile.jpg", "Art by Enoshima Iki");
					writeSpeech("player", "", "Hi there, is Ms. "+data.story[11].lName+" here?");
					writeSpeech("green", "", "That's me, hello! Or did you mean my sister?");
					writeSpeech("player", "", "Oh, you're related? That's interesting. Could you...");
					writeText("...");
					writeText("You explained the situation to "+data.story[12].fName+".");
					writeSpeech("green", "", "That certainly sounds like her. I'll give her the message, but I don't think she'll listen.");
					writeSpeech("player", "", "Alright, plan B then.");
					writeText("You look around to make sure you and "+data.story[12].fName+" are alone. This is probably overkill for making sure the room gets cleaned, but you were probably going to hypnotize all the teachers at some point.");
					writeSpeech("player", "", "Alright, could you just look at this coin here? Watch it swing back and forth, back and- Wait what?");
					writeText(data.story[12].fName+" suddenly stands up with a angry glare in her eyes.");
					writeSpeech("green", "", "So you're the piece of shit that's been doing all this...");
					writeSpeech("player", "", "Fuck, wait.");
					writeText("She starts charging towards you. You've never actually fought anybody, and your hypnosis has never backfired this hard before. It likes like you have no choice but to fight.");
					writeText("... Or that's what you thought. You hear someone snapping their fingers and "+data.story[12].fName+" goes slump on the ground.");
					writeSpeech("scarf", "", "You shouldn't play with other people's toys, you know.");
					writeBig("images/scarf/profile.jpg", "Art by Enoshima Iki");
					writeSpeech("scarf", "", "Well I suppose it can't be helped. Two artists like us, we're bound to bump into each other.");
					writeText("Her words are slow and measured, just looking at her makes your brain fuzz over a little.");
					writeSpeech("player", "", "Are you a hypnotist, like me?");
					writeSpeech("scarf", "", "Like you? Well, maybe in some ways. I'm someone who's already had my fun, so to speak. I became bored of the power some time ago, like you will someday.");
					writeSpeech("player", "", "Not going to happen.");
					writeSpeech("scarf", "", "Oho~. So passionate. I'll take your word for it, I suppose. Was there a reason you tried to hypnotize my sister, perchance? She was moments from killing you, I was very thorough planting traps in her mind in case anyone tried to steal my toy.");
					writeText("...");
					writeSpeech("scarf", "", "Cleaning? You wanted the room to be... Ah, you must be trying to appeal to the principal. Fine. I'll have her clean up after me. I'll be keeping an eye on you. You wanted my sister yes? I could be entreated to... share, her. If you can entertain me.");
					writeSpeech("player", "", "I take it that dicking you here wouldn't be enough?");
					writeSpeech("scarf", "", "Such confidence~! But you are correct. I have a... refined, pallete. Bring me your conquests, and I might teach you some of the spells I've learned over the years.");
					writeSpecial("You've earned "+data.story[12].fName+"'s attention! She can improve your hypnosis skills. Someday, you might be able to bring characters you've hypnotised to unlock new scenes!");
					data.story[11].trust = 40;
					data.story[12].trust = 40;
					writeTransition(data.player.currentScene, "Finish");
					break;
				}
			}
			break;
		}
		case "maid" : {
			switch (scene) {
				case "maid1" : {//Introduce Maid while she's shopping
					writeText("The maid stands out quite a bit as she moves around the shop, her eyes quickly combing the shelves.");
					writeBig("images/maid/profile.jpg");
					writeText("After a few more seconds, she notices you staring.");
					writeSpeech("maid","","May I help you?");
					writeFunction("writeEncounter('maid', 'maid1a')", "Apologize for staring");
					writeTransition(data.player.currentScene, "Say 'no' and leave");
					break;
				}
				case "maid1a" : {
					writeSpeech("player","","Sorry, it's just that you don't exactly see a lot of people in maid outfits nowadays.");
					writeText("She smiles wryly.");
					writeSpeech("maid","","That's fair. It's a bit old-fashioned, perhaps, but I think there's some value in that, too.");
					writeText("She reaches forward, grabbing a spray-bottle from the shelf. She rolls it around, reading the back.");
					writeSpeech("maid","","I'm "+data.story[5].fName+", by the way. "+data.story[5].fName+" "+data.story[5].lName+".");
					writeSpeech("player","",data.player.name+" - it's a pleasure to meet you.");
					writeSpeech("maid","","The pleasure is mine, "+data.player.name+".");
					writeText("She puts the bottle into a small basket on the ground, lifting it as she steps past you.");
					writeSpeech("player","","Need any help carrying things?");
					writeText("The thinks for a moment.");
					writeSpeech("maid","","...I have a few more items I need. If you don't mind, of course.");
					writeSpeech("player","","Not at all.");
					writeText("She hands you her basket which... weighs a bit more than you expected. It's packed pretty tightly and efficiently...");
					writeSpeech("player","","Lead the way.");
					writeText("She nods, starting to walk.");
					writeText("...");
					writeText("A while later, after helping "+data.story[5].fName+" empty the two <i>very</i> well-packed baskets into her car, you shut the trunk and relish the freedom of your hands from the basket-handles.");
					writeText("...Aside from the basket of your stuff, at least.");
					writeSpeech("maid","","Thank you very much for your assistance.");
					writeText(data.story[5].fName+" bows her head slightly, smiling.");
					writeSpeech("player","","Happy to help. Plus, it was a good reminder to pick up a few things, so it was a win-win.");
					writeSpeech("maid","","Perhaps. Even so, I'll need to think of some way to thank you at a later date.");
					writeText("She moves into the driver's seat, the engine coming to life.");
					writeSpeech("player","","I'd say that's unnecesary, but I get the feeling that's the wrong answer. Instead, I'll just look forward to it.");
					writeText("She laughs.");
					writeSpeech("maid","","You're a smart one. I'll see you later, then.");
					writeText("With that, her car pulls out, leaving you alone.");
					writeTransition(data.player.currentScene, "Go home");
					data.story[5].trust = 20;
					passTime();
					break;
				}
				case "maid2" : {//Meet Maid in the shopping district again, she invites you over and gives you a titjob while hypno'd
					writeSpeech("maid","","Ah, "+data.player.name+". I was hoping I'd see you before I left.");
					writeSpeech("player","","Sorry to keep you waiting, then. What's up?");
					writeSpeech("maid","","I enjoyed our talk yesterday, and was interested to know if you'd like to chat? I'm headed home now.");
					writeSpeech("player","","Sounds great. Are we walking, or...?");
					writeSpeech("maid","","Driving.")
					writeText("She grins wryly.");
					writeSpeech("maid","","I'm not <i>nearly</i> so cruel as to force you to carry these all the way to park district.");
					writeText("...");
					writeText("The two of your arrive at her place fairly quickly, and putting away her purchases is quick.");
					writeText("You spend most of the time talking about your jobs. She, being a maid, usually handles cleaning her boss's apartment... which, apparently, is a challenge given how large it is.");
					writeText("When you start talking about your own job, the conversation quickly focuses on your... <i>unique methods.</i>");
					writeSpeech("maid","","Hypnosis?");
					writeText("She shakes her head, looking amused.");
					writeSpeech("maid","","And it really works?");
					writeSpeech("player","","Not the way the movies say it does, but yeah. It puts them in a relaxed state of mind, which helps them open up.");
					writeSpeech("maid","","Really? That's all?");
					writeSpeech("player","","...You know, just because some people <i>can</i> make a guy cluck like a chicken doesn't mean that's all it's good for.");
					writeText("She laughs, shaking her head.");
					writeSpeech("maid","","I really meant no offense, it's just... It sounds a bit silly, I suppose since I don't know much about it.");
					writeText("You roll your pendant around between your fingers.");
					writeSpeech("player","","Well, we could always try it here.");
					writeSpeech("maid","","Oh? I would've thought it wouldn't work on skeptics.");
					writeSpeech("player","","The clucking part, sure. But just helping you relax a little? <i>Trivial.</i>");
					writeSpeech("maid","","...Well, I suppose I could always use a bit of relaxation.");
					writeText("You grin.");
					writeSpeech("player","","Then let's start with just watching my pendant, and listening to my voice...");
					writeText("...");
					writeText("Her amused expression quickly gives way to a relaxed one and, in what you consider record time, her eyes glaze over.");
					writeText("You actually have to stop and check if she's really under or just messing with you, but it seems like she just went into trance that easily.");
					writeSpeech("player","","Huh. I know some people are easier to put under then others, but... Just how susceptible are you...?");
					writeText("Scientific curiosity spurs you forward as you look her over.");
					writeSpeech("player","","...Is that how you normally dress at home?");
					writeText("She slowly, hazily shakes her head.");
					writeSpeech("player","","Hm. Well, why don't you make yourself a bit more comfortable, then?");
					writeText("You change your tone, leaning in a bit closer.");
					writeSpeech("player","","After all, you feel <i>completely relaxed</i> around me, don't you? It's only <i>natural</i> that you'd be as relaxed as if you were alone.");
					writeText("A pause... then she stands. The haze fades from her eyes quickly.");
					writeText("She clearly relaxes her posture, taking a sharp breath in.");
					writeSpeech("maid","","Sorry, but could you give me a sec? Gotta change.");
					writeText("She casually kicks her shoes off, barely paying attention to where they land as she walks off.");
					writeText("...Guess she's not as formal when alone, then?");
					writeText("After a minute or so, you can hear her walking back into the room, accompanied by the hiss of a can as she cracks open a beer.");
					writeText("She hops the side of the couch easily, thumping onto it with a relaxed sigh.");
					writeText("Turning to face her, you see...");
					writeBig("images/maid/2-1.jpg", "Art by Oreteki18kin");
					writeSpeech("player","","You, uh... really made yourself comfortable.");
					writeSpeech("maid","","Yup.");
					writeText("She takes a slow sip, before offering it to you. You turn it down - better to stay sober while hypnotizing someone.");
					writeSpeech("maid","","I love my job, but the outfit can be a bit stuffy, y'know? Plus, I can never be sure when the boss might grab my ass or lift my skirt or something, so it's not like I can skimp on the prepwork.");
					writeSpeech("player","","That sounds like sexual harrassment.");
					writeSpeech("maid","","It would be, but she and I are fuck-buddies. Have been for most of a decade, actually.");
					writeSpeech("player","","Oh. You're a lesbian?");
					writeSpeech("maid","","Nah, we're almost exclusively into men. We just make an exception for each other.");
					writeText("She takes a deep drink from her beer.");
					writeSpeech("maid","","Plus, since I get to dictate her diet, she's an absolute <i>treat</i> to eat out. Had to learn some two-dozen recipes for it, but her taste is worth it. Plus, it's not like she's complaining about the extra enthusiasm, y'know?");
					writeText("...Well, fuck. You're now even more turned on than before.");
					writeSpeech("player","","...It's getting hot in here.");
					writeText(data.story[5].fName+" frowns.");
					writeSpeech("maid","","Is it? I can always turn on the air condi-");
					writeSpeech("player","","It's broken, <i>remember?</i>");
					writeText("She pauses, confusion playing across her face.");
					writeSpeech("maid","","...Right. I guess I forgot.");
					writeSpeech("player","","And given that it's hot, you should-");
					writeText("Before you even finish, she pulls open the front of her robe, her tits spilling out as she lets out a sigh of relief. She then turns to you.");
					writeSpeech("maid","","Sorry, I missed that. What's up?");
					writeSpeech("player","","...I was just saying I was going to take off some clothes, since that's the <i>natural</i> response to this heat.");
					writeSpeech("maid","","Naturally.");
					writeText("She takes another long drink from the beer, which has to be nearing empty at this point.");
					writeFunction("writeEvent('maid1')", "Pull down your pants");
					break;
				}
				//Maid says that her employer wanted to meet you, so she takes you to Mistress's place where Mistress ends up exposing herself by 'accident' - NOT WRITTEN
				//If multiple start-points are ever implemented, this event would preclude the starting events for Mistress
				// case "maid3" : {
				// 	break;
				// }


				break;
			}
			break;
		}
		case "mistress" : {
			switch (scene) {
				case "mistress1" : {//Introduce Mistress as being lost (she's actually an exhibitionist)
					writeText("From the looks of it, it looks like she might be lost...? She seems to be looking around quite a bit but, after a moment, she spots you.");
					writeBig("images/mistress/1-1.jpg", "Art by Oreteki18kin");
					writeSpeech("???","scripts/gamefiles/profiles/mistress.jpg","O-Oh! Hello there!");
					writeText("She very nearly trips over one of the branches, but keeps her balance... despite the two<i> very</i> clear challenges to it.");
					writeText("She moves away from the few of the trees, looking more than a bit embarrassed as she brushes at her coat.");
					writeFunction("writeEncounter('mistress', 'mistress1a')", "Ask if she's lost");
					writeTransition(data.player.currentScene, "Nod politely to her and leave");
					break;
				}
				case "mistress1a" : {
					writeSpeech("player","","Did you get turned around or something?");
					writeText("She looks confused for a second, but quickly nods.");
					writeSpeech("???","scripts/gamefiles/profiles/mistress.jpg","Y-Yeah... I just got a little lost, that's all!");
					writeText("She finishes brushing herself off, smiling as she offers her hand.");
					writeSpeech("mistress","","I'm "+data.story[6].fName+" "+data.story[6].lName+". It's a pleasure!");
					writeText("You shake her hand, noting that it's a little warm as she seems to blush a bit.");
					writeSpeech("player","",data.player.name+", and the pleasure's mine. If you're looking to head out to Main, just follow the path and take the first left.");
					writeText("Her smile widens as she nods softly.");
					writeSpeech("mistress","","Huh. Guess I wasn't as far from the path as I thought. You must come by this path a lot!");
					writeSpeech("player","","Er... Not a lot, but I've walked by a few times.");
					writeText("You shift in place a bit, before "+data.story[6].fName+" seems to notice... something.");
					writeSpeech("mistress","","Ah, sorry! I've got to get going. Thanks for the help, "+data.player.name+"!");
					writeText("She quickly darts down the path, leaving you alone.");
					writeText("That was... something. It doesn't actually seem like she got lost, but...");
					writeText("Well, it's not like it's your business right now. You could probably ask her about it, though, if you see her again.");
					writeTransition(data.player.currentScene, "Finish");
					data.story[6].trust = 40;
					passTime();
					break;
				}
				case "mistress2" : {//Meet Mistress in the woods again, she invites you over and gives you a blowie
					writeText("As you start to approach, her eyes lock onto you almost immediately.");
					writeText("She stands, smiling as she starts to blush.");
					writeBig("images/mistress/1-2.jpg", "Art by Oreteki18kin");
					writeSpeech("player","","Not lost this time, then?");
					writeSpeech("mistress","","Not this time. Thanks again, by the way!");
					writeText("She sits back down, patting the open spot on the bench beside her.");
					writeSpeech("mistress","","Just standing around is a bit boring, so if you'd like to chat?");
					writeSpeech("player","","I'm not sure I'll be that exciting, but I'd be happy to talk.");
					writeText("...");
					writeText("The two of you chat for a little while. You don't learn a lot, aside from the fact that she's from a rather wealthy family, until...");
					writeSpeech("player","","No offense meant, but... How did you get lost last time? This isn't exactly the largest of parks.");
					writeText("Her face gets even redder as she leans back a little bit.");
					writeSpeech("mistress","","Hm... Well, it's not <i>really</i> that I got lost, per se... It's a little hard to explain carefully, but if you're okay with a bit of bluntness...");
					writeText("She gently grabs your hand, carefully raising it up...");
					writeText("And pressing it against her breast, the soft material of the coat not quite thick enough to hide what she's trying to show you.");
					writeSpeech("player","","No bra, huh?");
					writeSpeech("mistress","","Just stockings. No bra, no panties.");
					writeText("She smiles wide, taking in your expression as you feel her other hand trace along your thigh.");
					writeSpeech("mistress","","I didn't think anyone would come along. When I heard you coming... Well, there's a reason I said <i>standing around</i> is boring. Now, my place is pretty close so, in continuing to be blunt, let me ask...");
					writeText("She leans a bit closer to your ear.");
					writeSpeech("mistress","","<i>Would you be willing to spend some more time with a <b>pervert</b> like me?</i>");
					writeFunction("writeEvent('mistress1')", "Let her lead the way");
					break;
				}
				//Meet Maid, who takes you to Mistress's place where Mistress ends up exposing herself by 'accident'
				//If multiple start-points are ever implemented, this event would preclude the starting event for Maid
				// case "mistress3" : {
				// 	break;
				// }


				break;
			}
			break;
		}
		case "meji" : {
			switch (scene) {
				case "meji1a" : {
					//encountering him in the school during morning
					//call him to the office and you can get him to out himself
					writeText("Three students are having a pretty loud discussion of their 'conquests' as they walk by.");
					writeBig("images/meji/1-1.jpg", "Art by Nagi Ichi");
					writeText("You recognize the one in the middle pretty easily - one of the 'high profile cases' when it comes to needing counseling.");
					writeText(data.story[7].fName+ " "+data.story[7].lName+", a rich-kid delinquent attending university because it's what's 'expected of him'. Counseling is a hard-sell when people don't want to work for something, but given your abilities...");
					writeFunction("writeEncounter('meji', 'meji1aa')", "Invite him to your office");
					writeTransition(data.player.currentScene, "Leave and let "+data.story[8].fName+" handle him");
					break;
				}
				case "meji1aa" : {
					data.story[7].trust = 10;
					writeSpeech("player","",data.story[7].fName+" "+data.story[7].lName+"?");
					writeText("He stops, only now realizing you're here.");
					writeSpeech("meji","","Yeah. What do <i>you</i> want?");
					writeSpeech("player","","Not much, just a conversation in my office. As the new counselor, the Principal said I might want to speak to you. Any idea why?");
					writeText("His eyes narrow.");
					writeSpeech("meji","","I've got a feeling, yeah.");
					writeText("He nods to the guys beside him before nodding again to you.");
					writeSpeech("meji","","Let's make it quick.");
					writeText("...");
					writeText("You arrive in your office pretty quickly, letting " + data.story[7].fName+" in before shutting the door behind you.");
					writeText("He sits casually on the small bed you had set up, crossing his arms as he looks at you.");
					writeSpeech("meji","","So, how's this supposed to go down? You ask a couple of questions, I answer, you tell "+data.story[10].fName+" everything's fine?");
					writeSpeech("player","","...In a manner of speaking, yes. She didn't give very many details about you, so I'd like to know why you think she'd drop your name specifically.");
					writeText("That was a blatant lie, of course. His file had more than a few incidents laid out in excruciating detail... but your methods require a certain level of trust when starting out.");
					writeText("Well, that or having some seriously repressed de"+data.player.honorific+"es, but that can be a bit of a gamble. No need to put him on the defensive just yet...");
					writeText("He scoffs, leaning back a bit.");
					writeSpeech("meji","","God, where the fuck do I <i>begin?</i> I swear, she has to have it out for me for something...");
					writeText("Off to a good start, then.");
					writeText("...");
					writeText("He ends up spending a good amount of time ranting about the principal, several instructors, and a few of the students before he finally realizes the time and leaves.");
					writeText("From the seems of things, he needed a place to just rant. Aside from that group of his, at least. He's not ready for full-hypnosis just yet, but you get the feeling he's already rather open to suggestions...");
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Finish");
					passTime();
					break;
				}
				case "meji2" : {
					writeText("At first, you're not entirely sure if you really do recognize them.");
					writeText("Fortunately, it's pretty clear that she (or, you quickly realize, <i>he</i>) recognizes you.");
					writeText("He starts moving suddenly, darting off towards a few of the harder-to-navigate alleys, but it doesn't take a genius to figure out how to follow him.");
					writeText("He's panicking, so he'll probably head in the opposite direction of you while using the alleys to make himself hard to follow...");
					writeFunction("writeEncounter('meji','meji2a')", "Go to where he's most likely to come out");
					writeTransition(data.player.currentScene, "Leave him be");
					break;
				}
				case "meji2a" : {
					writeText("Getting ahead of him isn't exactly hard, though you do find yourself breathing a bit heavily after the run. You get a minute or so to catch your breath before...");
					writeBig("images/meji/1-2.jpg", "Art by Nagi Ichi");
					writeText("He freezes in place when he spots you.");
					writeSpeech("player","","You know, I think you wouldn't do too bad as a runner, " + data.story[7].fName + ".");
					writeText("His hands go to his sides, clenching tightly into fists.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...You can't tell anyone...");
					writeText("He quickly rushes over to you, grabbing you by the shirt and trying to pull you down to look him in the eyes.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","Not one single person hears about this, you got that!?");
					writeFunction("writeEncounter('meji', 'meji2b')", "Agree and walk him safely to his place");
					writeFunction("writeEncounter('meji', 'meji2c')", "Explain how you won't tolerate such rudeness");
					break;
				}
				case "meji2b" : {
					writeSpeech("player","","...I mean, sure. I don't really think I have a reason to tell anyone, anyway.");
					writeText("He pauses.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...W-wait, really?");
					writeText("His grip on your shirt relaxes a bit, before he suddenly stands a bit straighter and he steps back.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","I, uh... I mean, of course you don't.");
					writeSpeech("player","","Yup. What you do for fun in your spare time is none of my business.");
					writeText("He tenses.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","W-Well, it's not like I do this a lot! It's just, sometimes, I... Uh...");
					writeSpeech("player","","How about I just walk you home?");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...Thanks.");
					writeText("Getting him to his place is pretty quick; his house looks like some old, traditional-looking place. He really is a rich kid, then.");
					writeText("All things considered, he's probably a <i>lot</i> more open to suggestion than you thought, but it might be a good idea to leave that for another day.");
					writeText("When you do get to his place, he just mumbles a quick thanks and practically sprints through the door, his face bright red.");
					writeText("Speaking to him at school again should be pretty interesting...");
					data.player.currentScene = 'vintageStreet';
					writeTransition(data.player.currentScene, "Leave him be");
					data.story[7].trust = 40;
					passTime();
					break;
				}
				case "meji2c" : {
					writeText("You take a moment to really focus on him.");
					writeText("His eyes have a clearly desperate look to them, and his hand, despite gripping tightly, is still faintly shaking.");
					writeText("Most of him is shaking, actually.");
					writeSpeech("player","","...Is that really how someone in your position should be making a request?");
					writeText("He freezes.");
					writeSpeech("player","","Hm. Seems like the principal was right about your attitude needing... <i>adjustment.</i>");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","Y-You can't tell her-");
					writeSpeech("player","","I won't tell anyone anything.");
					writeText("His eyes go wide for a moment, his grip relaxing-");
					writeSpeech("player","","<i>Yet.</i>");
					writeText("You push his hand away from your chest, staring down at him as you make a show of looking him over.");
					writeSpeech("player","","If you don't want me to go sharing what I'm looking at with every student and faculty member around the university, then I have a simple little request...");
					writeText("You lean forward, dropping your voice to whisper in his ear...");
					writeSpeech("player","","You're going to ask me, <i>politely</i>, not to share your <i>crossdressing habit</i> with everyone.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...T-That's all...?");
					writeSpeech("player","","Nobody likes a rude <i>bitch</i>, "+data.story[7].fName+".");
					writeText("He flinches at the word, but bows his head down a bit.");
					writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...I'm... sorry. Please, don't tell anyone about my... <i>c-crossdressing habit</i>...");
					writeSpeech("player","","...Good enough. Go home, "+data.story[7].fName+". We'll talk more at school.");
					writeText("He swallows nervously, nodding once before running off quickly.");
					writeText("...All in all, it didn't exactly build <i>trust</i> between you two, but you can already tell that things are going to get <i>interesting.</i>");
					data.player.currentScene = 'vintageStreet';
					writeTransition(data.player.currentScene, "Head home");
					data.story[7].trust = 20;
					passTime();
					break;
				}
				case "meji3" : { // - NOT WRITTEN
					//it's a set of options
					//option 1, if not already done, is the fingering
					//option 2, available once the fingering is done, is fucking his ass in-uniform
					//option 3 involves getting a leotard and fucking his ass, but he doesn't orgasm
					//option 4, leotard, is netting him his first anal orgasm by grinding your cock inside him

					//This checks if the first event has been done, as the opening dialogue and available choices change depending on whether it has.
					if(galleryCheck('meji1') != true){

						//Dialogue for if you walked him home during Encounter meji2
						if (data.story[7].trust == 40){
							writeText(data.story[7].fName+" sees you approaching and stops. He says something to his group before approaching you alone.");
							writeSpeech("meji","","Hey.");
							writeText("He shifts his weight, placing one hand on his hip.");
							writeSpeech("meji","","Thanks, for before. Especially the, uh... 'walking me home' part. Was there something you needed?");
						}

						//Dialogue for if you chastised him during Encounter meji2
						else if (data.story[7].trust == 20){
							writeText(data.story[7].fName+" sees you approaching and pales. Muttering something to his group, he quickly approaches you.");
							writeSpeech("meji","","Y-Yo. Uh, I mean...");
							writeText("He takes a moment to breathe, before he starts looking confident again.");
							writeSpeech("meji","","Thank you, "+data.player.honorific+". For not... telling anyone.");
						}
						else{
							writeText("This is test-text. If you see this in-game, then something's fucky.");
						}

						writeFunction("writeEncounter('meji','meji3a')", "Invite him to your office for hypnotic training");
						writeTransition(data.player.currentScene, "Leave him be for now");
						break;
					}

					else{
						//Forgive me this ugly-as-sin 'if/else'ing below.
						//Dialogue for if you walked him home during Encounter meji2
						if (data.story[7].trust == 41){
							writeText("When he sees you, "+data.story[7].fName+" quickly separates from his friends and walks up to you.");
							writeText("He seems to walk a bit oddly as he approaches, and you can see a flash of something in his eyes.");
							writeSpeech("meji","","I think we, uh... need to talk about last time?");
							writeFunction("writeEncounter('meji','meji3z')", "Take him to your office");
							writeTransition(data.player.currentScene, "Leave him be for now");
							break;
						}

						//Dialogue for if you chastised him during Encounter meji2
						else if(data.story[7].trust == 21){
							writeText("When you approach, "+data.story[7].fName+" quickly separates from his friends and walks up to you.");
							writeText("His face is clearly flushed, he's walking a bit oddly, and he seems to fidget a bit with the crotch of his pants.");
							writeSpeech("meji","","Hello, "+data.player.honorific+". I wanted to speak with you, maybe in your office...?");
							writeFunction("writeEncounter('meji','meji3z')", "Take him to your office");
							writeTransition(data.player.currentScene, "Leave him be for now");
							break;
						}
						else if(data.story[7].trust == 22 || data.story[7].trust == 42){
							if(data.player.hypnosis < 2){
								writeText("You can see " +data.story[7].fName+ " up ahead with his friends. Unfortunately, you can't really help him just yet.");
								writeText("Maybe the shopping district might have something to help? Their stock is pretty... <i>varied.</i>");
								writeTransition(data.player.currentScene, "Leave him be for now");
								break;
							}
							else{
								writeText("You can see " +data.story[7].fName+ " up ahead with his friends. With a better understanding of your abilities, you should be able to help him out now.");
								writeFunction("writeEvent('meji2')", "Invite him to your office");
								writeTransition(data.player.currentScene, "Leave him be for now");
								break;
							}
						}
						else{
							writeText("As he and his friends approach, you see "+data.story[7].fName+ " clearly perk up as he spots you.");
							writeText("He waves off his friends quickly, coming up to you and shifting nervously.");
							if(data.story[7].trust < 40){
								writeSpeech("meji","","Is now a good time? I, uh... I still haven't been able to <i>finish</i>. I was hoping you could help...?");
							}
							else{
								writeSpeech("meji","","Hello, "+data.player.honorific+". I was wondering if now would be a good time for some <i>counseling...?</i>");
							}
							if(galleryCheck('meji2') != true){
								writeFunction("writeEvent('meji2')", "Fuck his ass");
							}
							if(checkItem('Leotard') == true){
								if(galleryCheck('meji3') != true){
									writeFunction("writeEncounter('meji','meji3c')", "Give him the leotard");
								}
								else if(galleryCheck('meji4') != true){
									writeFunction("writeEvent('meji4')", "Ask him about last time");
								}
							}
							else{
								writeFunction("writeEncounter('meji','meji3b')", "Tell him you want to see something new");
							}
						}
						writeTransition(data.player.currentScene, "Leave him be for now");
					}
					break;
				}
				case "meji3z" : {
					//This is named Zed because I messed up and forgot to account for this scene during allocation shut up
					writeText("When the two of you reach your office, you shut and lock the door just in case before turning to "+data.story[7].fName+".");
					writeText("It's obvious what the problem is, but...");
					writeSpeech("player","","Is something wrong?");
					writeText("He kinda flinches at that, his hands fidgeting in his lap.");
					writeSpeech("meji","","...When I was, uh... <i>under</i>, did anything happen?");
					writeSpeech("player","","Do you remember anything happening?");
					writeText("His face goes red as he pauses.");
					writeSpeech("meji","","Honestly, I'm not sure? I just remember feeling really, <i>really...</i>");
					writeText("His voice hitches for a second, but he covers it up (poorly) with a cough.");
					writeSpeech("meji","","<font size='-1'><i>...It felt really good.</i></font>");
					writeText("...Huh. Well, he's being honest, so you probably shouldn't mislead him.");
					writeSpeech("player","","And now, you can't feel any pleasure from your dick, right?");
					writeText("He sits up straighter, looking right at you with a cautious smile.");
					writeSpeech("meji","","Y-Yeah! Do you know how to fix it?");
					writeSpeech("player","","It's... not necessarily that easy.");
					writeText("He stops.");
					writeSpeech("player","","I can probably fix it, but I'd need you to be honest with me about something.");
					writeText("You think for a moment about how to phrase it, before just going with the blunt option.");
					writeSpeech("player","","Did you masturbate with your ass after losing sensation in your penis?");
					writeText("His rapidly-reddening face gives the answer immediately.");
					writeSpeech("meji","","I didn't... y'know, <i>finish</i> or anything though so it should be fine, right?");
					writeText("You just shrug.");
					writeSpeech("player","","Hypnosis can be fickle, but it can't make you do anything you don't want. If you really want sensation down there, it'll come back if you give it some time.");
					writeText("Probably. You can speed it up, of course, but it really is on him for this one.");
					writeSpeech("meji","","O-Oh. But, what do I do until then?");
					writeText("He fidgets a bit more and, on closer inspection, you can see the problem.");
					writeText("Just because he can't get off with his dick doesn't mean it can't get hard.");
					writeSpeech("player","","That's... definitely a question. Fucking your ass didn't help?");
					writeSpeech("meji","","I, uh... couldn't finish.");
					writeText("He shifts a bit, and his odd walking earlier starts making sense.");
					writeSpeech("player","","Got it. In that case, I think I have a plan, but I'm afraid it'll take some time to prepare.");
					writeText("He just nods, standing up and getting ready to leave. He seems a lot more relaxed now that he knows nothing's actually <i>wrong</i> with him.");
					writeText("...Technically, this 'problem' of his could actually be a legitimate issue for him, but altering it isn't as easy as just telling him his dick is sensitive.");
					writeText("If he's willing to fuck his ass until he can barely walk, though...");
					if(data.player.hypnosis >= 2){
						writeText("Given that your hypnosis abilities have been improving lately, you can have a nice little routine ready by tomorrow.");
						writeText("It'll take a few sessions, of course, but if he's open and willing, it'll work perfectly.");
					}
					else{
						writeText("Well, that's a thought to be had once you improve your skills a bit more. Increasing sensation is a lot more finicky than taking it away.");
						writeText("Might be a good idea to practice on someone else to improve, or find some other way to improve your hypnosis.");
					}
					data.player.currentScene = 'playerOffice';
					writeTransition(data.player.currentScene, "Get back to work");
					data.story[7].trust += 1;
					passTime();
					break;
				}
				case "meji3a" : { //Intro to ass training, varies depending on trust
					writeSpeech("player","","I have something important to discuss with you.");
					if (data.story[7].trust == 40){
						writeText("He nods, waving to his friends and following you to your office.");
					}
					else{
						writeText("He nods, obediently following behind you.");
					}
					writeText("...");
					writeText("When you arrive, "+data.story[7].fName+" sits down on the bed, still keeping his eyes on you.");
					if (data.story[7].trust == 40){
						writeSpeech("meji","","Does this have to do with... <i>the other night?</i>");
						writeText("He shifts uncomfortably for a moment, glancing at the door as it shuts.");
						writeText("Nodding, you tell him,");
						writeSpeech("player","","I think the other night probably wasn't the best way for us to broach the topic of your... hobby.");
						writeText("He winces, but nods.");
						writeSpeech("meji","","Sorry about that, by the way. I, uh... probably shouldn't have grabbed you like that.");
						writeSpeech("player","","It's fine. It was a stressful situation, after all. And that stress is part of the reason I brought you here. You see, I became a counselor here because my counseling methods are a bit... odd.");
						writeText("Reaching into your pocket, you pull out your pendant, his eyes widening.");
					}
					else{
						writeText("He shifts a bit, looking rather uncomfortable. He even jumps a little when the door clicks shut.");
						writeSpeech("meji","","...This is about the other night.");
						writeText("You nod, sitting down on the bed beside him.");
						writeSpeech("player","","While I think you probably could've been a little less rude about it, I do understand why you wouldn't want word to spread. And, like I said, I won't go tattling on you unless you give me a reason.");
						writeText("At that, you reach into your pocket and pull out your pendant, his eyes widening as you do.");
					}
					writeSpeech("meji","","...You can't be serious.");
					writeSpeech("player","","I am, actually. It's not quite the 'do whatever I say' trick that people think. It's really just a way to help someone relax, be a bit more open about themselves.");
					writeText("He shifts a bit, looking down at it.");
					writeSpeech("meji","","Do you mind if I...?");
					writeText("You shrug, handing it to him. He rolls it around in his hand for a few seconds, looking at it from nearly every angle.");
					writeText("It's not like it's actually anything special, but if he <i>thinks</i> it is...");
					writeSpeech("meji","","...I'm not saying I actually believe in this, but I do owe you one. So, how does this work?");
					writeText("You smile, gently taking it back from him.");
					writeSpeech("player","","The details of it can be pretty complicated to explain, but it basically boils down to keeping an eye on the pendant while you listen closely to my voice. Of course, since you'll want to be as comfortable as possible...");
					writeText("He thinks for a moment, before nodding.");
					writeSpeech("meji","","Y-Yeah. If you don't mind, then...");
					writeText("...");
					writeText("It takes a few minutes for him to relax enough to go into trance, but what you learn after he does is pretty interesting.");
					writeText("You started out by just asking simple questions, but <i>he</i> was the one that started talking about what he would do after coming home, still crossdressing.");
					writeText("The fact that he has so many fantasies about being dominated just helps you push him deeper and deeper into trance, and he doesn't exactly spare any details...");
					writeText("At this point, he's more than far enough along for you to help him enjoy himself, and have some fun of your own along the way. It helps that, in that skirt, he can make for a pretty convincing girl.");
					writeFunction("writeEvent('meji1')", "See how far along he already is in training his ass");
					break;
				}
				case "meji3b" : {
					writeSpeech("meji","","Something new...? What do you...");
					writeText("He thinks for a moment before his face goes red.");
					if(data.story[7].trust >= 40){
						writeSpeech("meji","","...<i>Oh.</i> I mean, I don't have a problem with something like that, but... I don't really have any spending money right now.");
					}
					else{
						writeSpeech("meji","","...Sorry, "+data.player.honorific+", but I don't have the money for something like that. I don't usually keep much money on-hand for things like that...");
					}
					writeText("Hm. Well, that is a problem... But then again, there's no reason <i>you</i> can't buy something, if you're interested in seeing him in it. Maybe there's something at the shopping district...?");
					writeFunction("writeEncounter('meji','meji3')", "Choose something else");
					writeTransition(data.player.currentScene, "Leave him be for now");
					break;
				}
				case "meji3c" : {
					writeText("His eyes go wide as you try to discretely hand it to him.");
					if(data.story[7].trust >= 40){
						writeSpeech("meji","","Th-This is... Wow.");
						writeText("He looks up at you, as flushed as usual as he grins.");
						writeSpeech("meji","","If this is your way of requesting something...");
						writeText("His voice goes much quieter.");
						writeSpeech("meji","","<i>Then just tell me when to come to your office, "+data.player.honorific+".</i>");
						writeText("Hoo boy. That would normally be how this goes but, this time...");
						writeSpeech("player","","The last club meeting in the room behind the gym finishes in an hour.");
						writeText("He tenses sharply.");
						writeSpeech("player","","If you're not up for it, though-");
						writeSpeech("meji","","Don't be late... Please.");
					}
					else{
						writeText("His face is clearly flushed and, you note, you can see him starting to tent his pants already.");
						writeSpeech("meji","","...When do you want me, "+data.player.honorific+"?");
						writeText("Normally, you'd just take him to your office now, but...");
						writeSpeech("player","","The last club meeting in the room behind the gym finishes in an hour.");
						writeText("He tenses sharply.");
						writeSpeech("player","","If you're not up for it, though-");
						writeSpeech("meji","","Thank you for the gift, "+data.player.honorific+". I won't be late.");
					}
					writeText("He quickly strides off in the direction of the gym, probably to scope it out.");
					writeFunction("writeEvent('meji3')", "Burn a little time and meet up with him");
					break;
				}


				//This will likely be the stopping point for this version


				case "meji4" : { // - NOT WRITTEN
					//you give meji the option to just leave and you'll stop this
					//no more blackmail, no more surprise-anal, and no more talking
					//you even drop the hypnosis that makes his dick numb
					//you give him time to think about it
					break;
				}
				case "meji5" : { // - NOT WRITTEN
					//initiated from your office/outside of it (he's waiting for you)
					//he's back, and he gives in completely
					//even without the hypnosis, he still can't feel his cock
					//he couldn't even get close to cumming until he started fingering his ass and thinking about you
					//now, he wants to fuck, and he's willing to beg
					//basically choose either meji6.1 or meji6.3, and use meji6 for the next interactions
					break;
				}
				case "meji6" : { // - NOT WRITTEN
					//another option-set
					//option 1, he's tied-up, blindfolded, and brought to orgasm with his nipples and ass while his dick feels nothing
					//option 2, you tell him to buy the sluttiest bikini he can find and have him take you home
					//option 3, get some bloomers, meet up in the gym, and tease his nipples while fucking an orgasm out of him
					//option 4, get those bloomers and experience an exclusively nipple-based orgasm as you hypno-whisper into his ear
					break;
				}
				case "meji7" : { // - NOT WRITTEN
					//go to a by-the-hour place
					//technically an option-set
					//while there, you can have him blow you (he cums)
					//you can mating-press his ass
					//you can lift and bounce him on your cock
					break;
				}
				case "meji8" : { // - NOT WRITTEN
					//if you have a high-enough counseling for school corruption, then:
					//you can speak with him about the idea of spreading him around
					//he gets unbelievably aroused and agrees, rounding up the class for a gangbang
					break;
				}
			}
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Type: Improper encounter direction");
			writeText("character ID: " + n);
			writeText("scene ID: " + scene);
			writeText("" + JSON.stringify(data) + "");
			writeText("Inventory window:" + invHidden + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("start", "Go back");
		}
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == n) {
			console.log("Set encountered for " +n+ " to true.");
			data.story[i].encountered = true;
		}
	}
}

function checkForEvents() {
	if (data.story[8].met == false) {
		data.story[8].met = "";
	}
	switch (true) { //Check for misc events
		case (tempScene == "parkDistrict"): {
			if (data.player.dayID > 0) {
				//writeButton('A Strange Man is Swinging a Watch', 'sceneTransition("hypnosisTutor")', 55, 7);
			}
			break;
		}
	}
	if (data.story[9].encountered == false) {
		switch (true) { //Check for principal's events using secretary's check
			case (data.story[8].trust == 0): {
				if (tempScene == "northHallway") {
					writeTab ("principal", "", "introduction1", "The principal's office is here. You should introduce yourself.");
				}
				break;
			}
			case (data.story[8].trust > 0): {
				if (tempScene == "northHallway") {
					writeTab ("principal", "", "caseSelect", "Enter the principal's office.");
				}
				break;
			}
		}
	}
	if (data.story[11].encountered == false) {
		switch (true) { //Check for scarf's events
			case (data.story[11].trust == 0): {
				if (tempScene == "eastHallway") {
					if (data.story[8].met.includes('scarfS') == true) {
						writeTab ("scarf", "", "introduction1", "A teacher is walking down the hall");
					}
				}
				break;
			}
		}
	}
	if (data.story[12].encountered == false) {
		switch (true) { //Check for green's events
			case (data.story[11].trust == 0): {
				if (tempScene == "teacherLounge") {
					if (data.story[8].met.includes('scarfS') == true) {
						writeTab ("green", "", "introduction", "A teacher is doing paperwork here");
					}
				}
				break;
			}
			case (data.story[11].trust > 0): {
				if (tempScene == "teacherLounge") {
					writeTab("scarf", "", "caseSelect", data.story[11].fName+" is here");
				}
			}
		}
	}
	if (data.story[0].encountered == false) {
		switch (true) { //Check for mom's events
			case (data.story[0].trust == 0): { //level 1
				if (tempScene == "playerHouse") {
					if (data.player.time == "Morning") {
						if (data.player.dayID > 3) {
							writeTab ("mom", "", "mom1A", "Someone is at the door.");
						}
					}
				}
				if (tempScene == "apartmentOutside") {
					if (data.player.time == "Evening") {
						if (data.player.dayID < 4) {
							writeTab ("mom", "", "mom1B", "A woman is struggling with some bags.");
						}
					}
				}
				break;
			}
			case (data.story[0].trust == 40): { //level 2
				if (tempScene == "apartmentOutside") {
					if (data.player.time == "Morning") {
						if (data.player.dayID > 3) {
							writeTab ("mom", "", "mom2A", data.story[0].fName + " is bringing in groceries.");
						}
					}
				}
				if (tempScene == "shoppingDistrict") {
					if (data.player.time == "Evening") {
						if (data.player.dayID < 4) {
							writeTab ("mom", "", "mom2B", data.story[0].fName + " is shopping here.");
						}
					}
				}
				break;
			}
			case (data.story[0].trust == 60): { //level 3
				if (tempScene == "apartmentOutside") {
					if (data.player.time == "Evening") {
						writeTab ("mom", "", "mom3", data.story[0].fName + " is drunkenly stumbling home.");
					}
				}
				break;
			}
			case (data.story[0].trust > 79 && data.story[0].trust < 89): { //level 4
				if (checkItem('Beer') == true) {
					if (tempScene == "vintageStreet") {
						writeTab ("mom", "", "mom4", data.story[0].fName + " is walking down the street.");
					}
				}
				break;
			}
			case (data.story[0].trust == 90): { //level 5
				if (tempScene == "apartmentOutside") {
					if (data.player.time == "Evening") {
						writeTab ("mom", "", "mom5", "Knock on "+data.story[0].fName + "'s Door.");
					}
				}
				break;
			}
			case (data.story[0].trust == 100): { //level 6
				if (tempScene == "apartmentOutside") {
					if (data.player.time == "Evening") {
						//writeTab ("mom", "", "mom6", "Knock on "+data.story[0].fName + "'s Door.");
					}
				}
				break;
			}
		}
	}
	if (data.story[1].encountered == false) {
		switch (true) { //Check for kuro's events
			case (data.story[1].trust == 0): { //level 1
				if (tempScene == "schoolEntrance") {
					if (data.player.time == "Morning") {
						writeTab ("kuro", "", "kuro1", "Someone is being chewed out at the gate.");
					}
				}
				break;
			}
			case (data.story[1].trust >= 1 && data.story[1].trust <= 3): { //level 2
				if (tempScene == "roof") {
					if (data.player.time == "Morning") {
						writeTab ("kuro", "", "kuro3", data.story[1].fName+" is leaning against the fence.");
					}
				}
				break;
			}
			case (data.story[1].trust >= 21 && data.story[1].trust < 23): { //level 3
				if (tempScene == "roof") {
					if (data.player.time == "Morning") {
						writeTab ("kuro", "", "kuro4", data.story[1].fName+" is leaning against the fence.");
					}
				}
				break;
			}
		}
	}
	if (data.story[2].encountered == false) {
		switch (true) { //Check for tomgirl's events
			case (data.story[2].trust == 0): { //level 1
				if (tempScene == "schoolEntrance") {
					if (data.player.time == "Evening") {
						writeTab ("tomgirl", "", "tomgirl1", "An effeminate boy is chatting with another student.");
					}
				}
				break;
			}
			case (data.story[2].trust > 1 && data.story[2].trust < 6): { 
				if (tempScene == "classroomA") {
					writeTab ("tomgirl", "", "tomgirl3", ""+data.story[2].fName+" is here.");
				}
				break;
			}
			case (data.story[2].trust == 6): { 
				if (tempScene == "classroomA") {
					writeTab ("tomgirl", "", "tomgirl4", ""+data.story[2].fName+" is here.");
				}
				break;
			}
		}
	}
	if (data.story[3].encountered == false) {
		switch (true) { //Check for purple's events
			case (data.story[3].trust == 0): { //level 1
				if (tempScene == "classroomB") {
					writeTab ("purple", "", "purple1A", "A student is rummaging through her bag.");
				}
				if (tempScene == "playerOffice") {
					if (data.story[8].met.includes('purpleS') == true) {
						writeTab ("purple", "", "purple1B", "A student's file is on your desk.");
					}
				}
			break;
			}
			case (data.story[3].trust == 20): { //level 1
				if (tempScene == "vintageStreet") {
					if (data.player.time == "Morning") {
						writeTab ("purple", "", "purple2A", data.story[3].fName + " is leaving for school");
					}
				}
				if (tempScene == "classroomB") {
					if (data.player.time == "Evening") {
						writeTab ("purple", "", "purple2B", data.story[3].fName + " is getting ready to head home");
					}
				}
			break;
			}
			case (data.story[3].trust == 40): { //level 1
				if (tempScene == "classroomB") {
					if (data.player.time == "Morning") {
						writeTab ("purple", "", "purple3", data.story[3].fName + " is waiting for class to begin");
					}
				}
				if (tempScene == "playerOffice") {
					if (data.player.time == "Evening") {
						writeTab ("purple", "", "purple3", data.story[3].fName + " is standing outside your office");
					}
				}
			break;
			}
			case (data.story[3].trust == 50): { //level 1
				if (tempScene == "vintageStreet") {
					if (data.player.time == "Morning") {
						if (checkItem('Petunia') == true) {
							writeTab ("chubby", "", "chubby1", data.story[4].fName + "'s house is here");
						}
						else {
							writeText(data.story[3].fName + "'s house is here. If you had a gift, you could give it to her mother to get her out of her funk.");
						}
					}
				}
				if (tempScene == "playerOffice") {
					if (data.player.time == "Evening") {
						writeTab ("purple", "", "purple6", data.story[3].fName + " is standing outside your office");
					}
				}
			break;
			}
			case (data.story[3].trust == 60): { //level 1
				if (tempScene == "playerOffice") {
						writeTab ("purple", "", "purple5", data.story[3].fName + " is standing outside your office");
				}
			break;
			}
			case (data.story[3].trust == 80): { //level 1
				if (tempScene == "playerOffice") {
						writeTab ("purple", "", "purple4", data.story[3].fName + " is standing outside your office");
				}
			break;
			}
			case (data.story[3].trust == 90): { //level 1
				if (tempScene == "playerOffice") {
						writeTab ("purple", "", "purple7A", data.story[3].fName + " is standing outside your office");
				}
			break;
			}
			case (data.story[3].trust == 95): { //level 1
				if (tempScene == "playerOffice") {
						writeTab ("purple", "", "purple8", data.story[3].fName + " is standing outside your office");
				}
			break;
			}
			case (data.story[3].trust == 99): { //level 1
				if (tempScene == "vintageStreet") {
						writeTab ("purple", "", "purple9", data.story[3].fName + "'s mother is here.");
				}
			break;
			}
		}
	}
	if (data.story[5].encountered == false) {
		switch (true) { //Check for maid's events
			case (data.story[5].trust == 0): { //level 1
				if (tempScene == "shoppingDistrict") {
					if (data.player.time == "Evening") {
						writeTab ("maid", "", "maid1", "You see a woman in a maid's outfit looking through some items, looking for something.");
					}
				}
				break;
			}
			case (data.story[5].trust == 20): { //level 2
				if (tempScene == "shoppingDistrict") {
					if (data.player.day % 2 === 1) {
						writeTab ("maid", "", "maid2", "You can see "+data.story[5].fName+" nearby. It looks like she just finished shopping.");
					}
				}
				break;
			}
		}
	}
	if (data.story[6].encountered == false) {
		switch (true) { //Check for mistress's events
			case (data.story[6].trust == 0): { //level 1
				if (tempScene == "parkDistrict") {
					if (data.player.time == "Evening") {
						writeTab ("mistress", "", "mistress1", "A woman a bit off of the main path seems to be looking around carefully.");
					}
				}
				break;
			}
			case (data.story[6].trust == 40): { //level 2
				if (tempScene == "parkDistrict") {
					if (data.player.day % 2 === 0) {
						writeTab ("mistress", "", "mistress2", data.story[6].fName+" is sitting on a nearby bench, humming to herself.");
					}
				}
				break;
			}
		}
	}
	if (data.story[7].encountered == false) {
		switch (true) { //Check for meji's events
			case (data.story[7].trust == 0): { //level 1
				if (tempScene == "westHallway") {
					if (data.player.time == "Morning") {
						writeTab ("meji", "", "meji1a", "A particularly loud student is walking down the hall.");
					}
				}
				break;
			}
			case (data.story[7].trust == 10): { //level 2
				if (tempScene == "street") {
					if (data.player.time == "Evening") {
						document.getElementById('output').innerHTML +=`
						<div class = "textBox char_meji">
							<img class = "textThumb" src = "scripts/gamefiles/profiles/meji2.jpg">
							<div class="textBoxContent">
							<p class = "textName">???</p>
							<p class="status"> Status: Unknown</p>
							<p class="switch" onclick="writeEncounter('meji', 'meji2')">You spot someone vaguely familiar...</p>
						</div>	</div>
						<br>
						`;
					}
				}
				break;
			}
			case ((data.story[7].trust >= 20 && data.story[7].trust <=24) || (data.story[7].trust >= 40 && data.story[7].trust <= 44)): { //level 3
				if (tempScene == "westHallway") {
					if (data.player.time == "Morning") {
						writeTab ("meji", "", "meji3", "You can see "+data.story[7].fName+" coming down the hall with his friends.");
					}
				}
				break;
			}
		}
	}
	if (tempScene != "playerHouse") {
		if (data.player.time == "Night") {
			document.getElementById('output').innerHTML = '';
			writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
			writeTransition("playerHouse", "Head home");
		}
	}
}

function checkForPhoneEvents() {
	switch (data.story[0].trust) {
		case 80: {
				if (data.story[0].textEvent != "momPhone1") {
					data.story[0].textEvent = "momPhone1";
					notification();
				}
			break;
		}
		case 81: {
				if (data.story[0].textEvent != "momPhone2") {
					data.story[0].textEvent = "momPhone2";
					notification();
				}
			break;
		}
		case 82: {
				if (data.story[0].textEvent != "momPhone3") {
					data.story[0].textEvent = "momPhone3";
					notification();
				}
			break;
		}
		case 83: {
				if (data.story[0].textEvent != "momPhone4") {
					data.story[0].textEvent = "momPhone4";
					notification();
				}
			break;
		}
		case 84: {
				if (data.story[0].textEvent != "momPhone5") {
					data.story[0].textEvent = "momPhone5";
					notification();
				}
			break;
		}
	}
	switch (data.story[1].trust) {
		case 1: {
			if (data.story[1].textEvent != "kuroPhone1") {
				data.story[1].textEvent = "kuroPhone1";
				notification();
			}
			break;
		}
		case 2: {
			if (data.story[1].textEvent != "kuroPhone1") {
				data.story[1].textEvent = "kuroPhone1";
				notification();
			}
			break;
		}
		case 20 : {
			if(data.story[1].textEvent != "kuroPhone2") {
				data.story[1].textEvent = "kuroPhone2";
				notification();
			}
			break;
		}
		case 22 : {
			if(data.story[1].textEvent != "kuroPhone3") {
				data.story[1].textEvent = "kuroPhone3";
				notification();
			}
			break;
		}
		case 24 : {
			if(data.story[1].textEvent != "kuroPhone4") {
				data.story[1].textEvent = "kuroPhone4";
				notification();
			}
			break;
		}
	}
	if (data.story[1].trust == 25) {
		if (data.story[1].textEvent != "kuroReward") {
			data.story[1].textEvent = "kuroReward";
			notification();
		}
	}
	if (data.story[0].trust == 100) {
		if (data.story[0].textEvent != "momReward") {
			data.story[0].textEvent = "momReward";
			notification();
		}
	}
	if (data.story[2].trust == 100) {
		if (data.story[2].textEvent != "tomgirlReward") {
			data.story[2].textEvent = "tomgirlReward";
			notification();
		}
	}
	if (data.story[3].trust == 100) {
		if (data.story[3].textEvent != "purpleReward") {
			data.story[3].textEvent = "purpleReward";
			notification();
		}
	}
	if (data.story[5].trust == 21) {
		if (data.story[5].textEvent != "maidReward") {
			data.story[5].textEvent = "maidReward";
			notification();
		}
	}
	if (data.story[6].trust == 41) {
		if (data.story[6].textEvent != "mistressReward") {
			data.story[6].textEvent = "mistressReward";
			notification();
		}
	}
	if (data.story[7].trust == 25 || data.story[7].trust == 45) {
		if (data.story[7].textEvent != "mejiReward") {
			data.story[7].textEvent = "mejiReward";
			notification();
		}
	}
}

function writePhoneEvent(n) {
	phoneRight.scrollTop = 0;
	saveSlot(110);
	console.log("Writing event " + n + " for " + data.story[data.player.lastText].index);
	data.player.lastText = parseInt(data.player.lastText);
	console.log("test");
	switch (data.story[data.player.lastText].index) {
		case "mom": { //alt 3 to close
			switch (n) {
				case "mom1": { //alt 5 to close
					writePhoneImage("images/mom/profile.jpg", "Mom 1");
					writePhoneSpeech("mom", "", "Hello! I can send texts now!");
					writePhoneChoices("That's nice", "Who is this?");
					break;
				}
				case "mom1A": { //alt 5 to close
					textStage += 1;
					writePhoneEvent("mom1");
					textStage -= 1;
					writePhoneSpeech("mom", "", "This is Emily, don't you have my information saved?");
					writePhoneChoices("NEW PHONE WHO DIS", "I'm messing with you, Em");
					break;
				}
				case "mom1AB": { //alt 5 to close
					textStage += 1;
					writePhoneEvent("mom1A");
					textStage -= 1;
					writePhoneImage("images/mom/profile.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("mom", "", "WOOO");
					data.story[data.player.lastText].textEvent = "";
					break;
				}
				case "mom1B": { //alt 5 to close
					writePhoneEvent("mom1A");
					writePhoneImage("images/mom/profile.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("mom", "", "message B");
					break;
				}
				case "momAngry": {
					writePhoneSpeech("mom", "", "You haven't been answering my texts!");
				}
				case "momPhone1": {
					writePhoneSpeech("mom", "", "Hello. This is "+data.story[0].fName+".");
					writePhoneChoices("Sleep well?", "Who?");
					break;
				}
				case "momPhone1A": {
					writePhoneSpeech("player", "", "Sleep well?");
					writePhoneSpeech("mom", "", "Yes. I have not slept that well in years, thank you.");
					writePhoneSpeech("mom", "", "It was probably the booze though.");
					writePhoneSpeech("mom", "", "I will talk to you again later.");
					writePhoneSpeech("player", "", "Take care.");
					data.story[0].trust = 81;
					break;
				}
				case "momPhone1B": {
					writePhoneSpeech("player", "", "Who?");
					writePhoneSpeech("mom", "", "Sorry. I must have the wrong number. Please have a nice day.");
					writePhoneSpeech("mom", "", "Wait");
					writePhoneSpeech("mom", "", "You jerk I can see your picture attached to the number");
					writePhoneSpeech("player", "", "Sorry, I couldn't resist. How're you doing?");
					writePhoneSpeech("mom", "", "I am doing well. Still hungover. Good night.");
					writePhoneSpeech("player", "", "Take care. Talk to you later.");
					data.story[0].trust = 81;
					break;
				}
				case "momPhone2": {
					writePhoneSpeech("mom", "", "Good morning. I have been thinking about going to the beach sometime.");
					writePhoneSpeech("mom", "", "Have you been to the beach before?");
					writePhoneChoices("Yep. I had a good time.", "Not recently, no.");
					break;
				}
				case "momPhone2A": {
					writePhoneSpeech("player", "", "Yep. I had a good time. I'd go again with you, though.");
					writePhoneSpeech("mom", "", "Flirt!");
					writePhoneSpeech("mom", "", "I still have my old bikini though.");
					writePhoneSpeech("player", "", "I must see it. You cannot tease me like this.");
					writePhoneImage("images/mom/7-2.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("mom", "", "Do not go sharing it around.");
					writePhoneSpeech("player", "", "Whoaaaaa!");
					writePhoneSpeech("player", "", "Gorgeous.");
					writePhoneSpeech("player", "", "Wait, who took the picture?");
					writePhoneSpeech("player", "", "Hello?");
					data.story[0].trust = 82;
					break;
				}
				case "momPhone2B": {
					writePhoneSpeech("player", "", "Not recently, no. I'd go if you came in a bikini though.");
					writePhoneSpeech("mom", "", "Flirt! I don't even know if my old one still fits.");
					writePhoneSpeech("player", "", "I'll buy you a new one. What did the old one look like?");
					writePhoneSpeech("mom", "", "Horndog! I know what you are planning.");
					writePhoneSpeech("player", "", "You can't blame me for trying.");
					writePhoneImage("images/mom/7-2.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("mom", "", "Do not go sharing it around.");
					writePhoneSpeech("player", "", "Whoaaaaa!");
					writePhoneSpeech("player", "", "Gorgeous.");
					writePhoneSpeech("player", "", "Wait, who took the picture?");
					writePhoneSpeech("player", "", "Hello?");
					data.story[0].trust = 82;
					break;
				}
				case "momPhone3": {
					writePhoneSpeech("mom", "", "Good morning. I am sorry about missing your texts.");
					writePhoneSpeech("mom", "", "I went to bed after sending the picture.");
					writePhoneChoices("It's fine. What's up?", "I won't pry");
					break;
				}
				case "momPhone3A": {
					writePhoneSpeech("player", "", "It's fine. What's up with you?");
					writePhoneSpeech("mom", "", "Nothing very different. A TV show I like is on a marathon today.");
					writePhoneSpeech("mom", "", "It is about housewives.");
					writePhoneSpeech("player", "", "Sounds neat. Enjoy yourself, alright?");
					writePhoneSpeech("mom", "", "I will!");
					data.story[0].trust = 83;
					break;
				}
				case "momPhone3B": {
					writePhoneSpeech("player", "", "I won't pry. If you need someone to talk to, I'm here.");
					writePhoneSpeech("mom", "", "I appreciate it, but I really am alright.");
					writePhoneSpeech("mom", "", "I will talk to you later.");
					writePhoneSpeech("mom", "", "Thank you.");
					writePhoneSpeech("player", "", "No problem.");
					data.story[0].trust = 83;
					break;
				}
				case "momPhone4": {
					writePhoneSpeech("mom", "", "Good morning again.");
					writePhoneSpeech("mom", "", "I was wondering what you do.");
					writePhoneSpeech("player", "", "To pass the time?");
					writePhoneSpeech("mom", "", "No. For your job. What do you do for a -living-.");
					writePhoneChoices("I'm a school counselor", "I's a federal agent", "I'm a hypnotist");
					break;
				}
				case "momPhone4A": {
					writePhoneSpeech("player", "", "Ah, gotcha. I'm a school counselor.");
					writePhoneSpeech("mom", "", "Ooh. Like helping kids? Do you work at that highschool down the road?");
					writePhoneSpeech("player", "", "No. That's been under construction for years. Pretty sure it's condemned by now.");
					writePhoneSpeech("player", "", "I'm at the university across town.");
					writePhoneSpeech("mom", "", "They have counselors there?.");
					writePhoneSpeech("player", "", "Not usually, I'm worth it tho ;)");
					writePhoneSpeech("mom", "", "Haha! You are smooth. Talk to you later.");
					writePhoneSpeech("player", "", "Later");
					data.story[0].trust = 84;
					break;
				}
				case "momPhone4B": {
					writePhoneSpeech("player", "", "I'm a federal agent, I'm here on a sting operation drug bust.");
					writePhoneSpeech("mom", "", "Oh no!");
					writePhoneSpeech("mom", "", "Will you be leaving after?");
					writePhoneSpeech("mom", "", "Have you already caught them?");
					writePhoneSpeech("player", "", "That was a joke.");
					writePhoneSpeech("mom", "", "I knew that");
					writePhoneSpeech("mom", "", "You cannot fool me");
					writePhoneSpeech("mom", "", "Got to go");
					writePhoneSpeech("player", "", "No problem. Talk to you later.");
					data.story[0].trust = 84;
					break;
				}
				case "momPhone4C": {
					writePhoneSpeech("player", "", "I'm a hypnotist. I bend people's will to live like a king here.");
					writePhoneSpeech("mom", "", "haha");
					writePhoneSpeech("mom", "", "Can you hypnotize the landlord to reduce my rent?");
					writePhoneSpeech("player", "", "Sure.");
					writePhoneSpeech("mom", "", "Thank you haha.");
					writePhoneSpeech("player", "", "No problem.");
					writePhoneSpeech("mom", "", "Got to go");
					writePhoneSpeech("player", "", "No problem. Talk to you later.");
					data.story[0].trust = 84;
					break;
				}
				case "momPhone5": {
					writePhoneSpeech("mom", "", "I will be out of the house soon. Going to visit a friend on Vintage Street.");
					writePhoneSpeech("player", "", "Want some company?");
					writePhoneSpeech("mom", "", "Only if you bring beer.");
					writePhoneSpeech("mom", "", "But it is a long way back. I might see you on my way home.");
					writePhoneSpeech("player", "", "I'll be sure to say hi.");
					writePhoneSpeech("mom", "", "And booze?");
					writePhoneSpeech("player", "", "I'll see if I can grab some.");
					writePhoneSpeech("mom", "", "Thank you");
					writePhoneSpeech("mom", "", "I saw a thing in a magazine the other day. Watch");
					writePhoneSpeech("mom", "", "<3");
					writePhoneSpeech("mom", "", "It is a heart.");
					writePhoneSpeech("player", "", "<3 You too.");
					data.story[0].trust = 85;
					break;
				}
				case "momReward": {
					writePhoneImage("images/mom/7-4.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("mom", "", "You've finished all of "+data.story[0].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
		case "purple": {
			switch (n) {
				case "purpleReward": {
					writePhoneImage("images/purple/4-2.jpg", "Art by Oreteki18kin");
					writePhoneSpeech("purple", "", "You've finished all of "+data.story[3].fName+"'s & "+data.story[4].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
		case "tomgirl": {
			switch (n) {
				case "tomgirlReward": {
					writePhoneImage("images/tomgirl/9-5.jpg", "Art by Nagi Ichi");
					writePhoneSpeech("tomgirl", "", "You've finished all of "+data.story[2].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
		case "kuro" : {
			switch (n) {
				case "kuroPhone1" : {
					writePhoneSpeech("kuro","","Heyhey~! Got your number from the principle");
					if(data.story[1].trust == 1){
						writePhoneSpeech("kuro","","She seemed way cool about it, which kinda makes sense (no offense)");
						writePhoneSpeech("kuro","","Guess you cum highly rec'd huh?");
						writePhoneSpeech("kuro","","Hope your more interesting than she makes you sound tho, lol!");
						writePhoneChoices("I'm good at my job","I'd say I'm interesting");
						break;
					}
					else{
						writePhoneSpeech("kuro","","She seemed way cool about it");
						writePhoneSpeech("kuro","","TOTALLY wasnt expecting that");
						writePhoneSpeech("kuro","","Guess you cum highly rec'd huh?");
						writePhoneSpeech("kuro","","Hope your more interesting than she makes you sound tho");
						writePhoneSpeech("kuro","","If you're free cum up to the roof sometime!");
						writePhoneChoices("My office is more private","Look forward to it");
						break;
					}
				}
				case "kuroPhone1A" : {
					if (data.story[1].trust == 1){
						if(data.story[1].trust < 3){
							data.story[1].trust = 3;
						}
						writePhoneSpeech("player","","I'm good at counseling, and it sounds like she knows it.");
						writePhoneSpeech("kuro","","I'll try not to hold it against you");
						writePhoneSpeech("kuro","","Kidding~! See you on the roof~!");
						break;
					}
					else{
						if(data.story[1].trust < 3){
							data.story[1].trust = 3;
						}
						writePhoneSpeech("player","","Why not meet up at my office? It's a bit more private than the roof.");
						writePhoneSpeech("kuro","","Lesson num.1: girls like it WAY more when you cum to them");
						writePhoneSpeech("kuro","","Maybe next time I'll cum when you call for me? lol");
						break;
					}
				}
				case "kuroPhone1B" : {
					if(data.story[1].trust == 1){
						if(data.story[1].trust < 3){
							data.story[1].trust = 3;
						}
						writePhoneSpeech("player","","Oh, I'd say that I'm pretty interesting.");
						writePhoneSpeech("kuro","","Mm is that so?");
						writePhoneSpeech("kuro","","Im looking forward to how you prove it~!");
						break;
					}
					else{
						if(data.story[1].trust < 3){
							data.story[1].trust = 3;
						}
						writePhoneSpeech("player","","Look forward to it.");
						writePhoneSpeech("kuro","","Straight to the point");
						writePhoneSpeech("kuro","","I like it");
						writePhoneSpeech("kuro","","Seeya there~!");
						break;
					}
				}
				case "kuroPhone2" : {
					if(data.story[1].trust < 21){
						data.story[1].trust = 21;
					}
					writePhoneSpeech("kuro","","Gmorning mister counciler!! Howya doin?");
					writePhoneChoices("Good morning, Stephanie","Morning Steph","What's the hizzity-hizzaps, Steph-dawg?");
					break;
				}
				case "kuroPhone2A" : {
					writePhoneSpeech("player","","Good morning, Stephanie. I'm doing well - how are you?");
					writePhoneSpeech("kuro","","It's STEPH silly!!! it's way cuter!");
					writePhoneSpeech("kuro","","Hope your having a good day... and that maybe i can make it better~");
					writePhoneSpeech("kuro","","Maybe come up to the roof later? (.^_~.)");
					writePhoneSpeech("kuro","","I'll be waiting hun!");
					break;
				}
				case "kuroPhone2B" : {
					writePhoneSpeech("player","","Morning Steph. Pretty good, you?");
					writePhoneSpeech("kuro","","Pretty good pretty good! could do with a little more fun tho >(^*^)>");
					writePhoneSpeech("kuro","","Maybe with you?");
					writePhoneSpeech("kuro","","Thats only if you come up to the roof later tho! .(^-^).");
					writePhoneSpeech("kuro","","Ill be waiting~");
					break;
				}
				case "kuroPhone2C" : {
					writePhoneSpeech("player","","What's the hizzity-hizzaps, Steph-dawg?");
					writePhoneSpeech("kuro","","...");
					writePhoneSpeech("kuro","","Honey...");
					writePhoneSpeech("kuro","","No.");
					writePhoneSpeech("kuro","","Just...");
					writePhoneSpeech("kuro","","No.");
					writePhoneSpeech("kuro","","We can still meet up.");
					writePhoneSpeech("kuro","","Just please Don't.");
					break;
				}
				case "kuroPhone3" : {
					if(data.story[1].trust < 23){
						data.story[1].trust = 23;
					}
					writePhoneSpeech("kuro","","Heyhey~! Wanna see something cool?");
					writePhoneChoices("Sure","Nah");
					break;
				}
				case "kuroPhone3A" : {
					writePhoneSpeech("player","","Sure. What is it?");
					writePhoneImage("images/kuro/3-1.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("kuro","","Had a friend over last night and took some pics~!");
					writePhoneSpeech("kuro","","You like?");
					writePhoneChoices("Beautiful","Not bad, but messy","What friend?");
					break;
				}
				case "kuroPhone3B" : {
					writePhoneSpeech("player","","Nah.");
					writePhoneSpeech("kuro","","Lol your supposed to say yeah!");
					writePhoneSpeech("kuro","","Maybe shoulda said something sexy tho");
					writePhoneSpeech("kuro","","Maybe that would make you go yes maam");
					writePhoneSpeech("kuro","","Here");
					writePhoneImage("images/kuro/3-1.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("kuro","","Had a friend over last night and took some pics~!");
					writePhoneSpeech("kuro","","You like?");
					writePhoneChoices("Beautiful","Not bad, but messy","What friend?");
					break;
				}
				case "kuroPhone3AA" : {
					writePhoneSpeech("player","","You look incredible.");
					writePhoneSpeech("kuro","","Flatterer!!! Youll make me blush!!!");
					writePhoneSpeech("kuro","","Hope you enjoy the pic (and enjoy yourself to it too)");
					writePhoneSpeech("kuro","","V(^-')v");
					break;
				}
				case "kuroPhone3AB" : {
					writePhoneSpeech("player","","Not a bad angle, but your bed's a bit messy.");
					writePhoneSpeech("kuro","","A cute girl sends you a pic of their ass and you comment on their bed? smh");
					writePhoneSpeech("kuro","","Still, the dense ones can be cute too");
					writePhoneSpeech("kuro","","Check me out on the roof and Ill show you how your supposed to act! lol");
					break;
				}
				case "kuroPhone3AC" : {
					writePhoneSpeech("player","","Who was the friend?");
					writePhoneSpeech("kuro","","Ooh, getting jealous? Dont worry, its not some other guy");
					writePhoneSpeech("kuro","","A girlfriend was SUPER interested in what she heard, so she came over");
					writePhoneSpeech("kuro","","Besides, your my only client for now anyway");
					writePhoneSpeech("kuro","","Feel privileged!");
					writePhoneSpeech("kuro","","Ooh, gtg she's calling now, sry");
					break;
				}
				case "kuroPhone3BA" : {
					writePhoneSpeech("player","","You look incredible.");
					writePhoneSpeech("kuro","","Flatterer!!! Youll make me blush!!!");
					writePhoneSpeech("kuro","","Hope you enjoy the pic (and enjoy yourself to it too)");
					writePhoneSpeech("kuro","","V(^-')v");
					break;
				}
				case "kuroPhone3BB" : {
					writePhoneSpeech("player","","Not a bad angle, but your bed's a bit messy.");
					writePhoneSpeech("kuro","","A cute girl sends you a pic of their ass and you comment on their bed? smh");
					writePhoneSpeech("kuro","","Still, the dense ones can be cute too");
					writePhoneSpeech("kuro","","Check me out on the roof and Ill show you how your supposed to act! lol");
					break;
				}
				case "kuroPhone3BC" : {
					writePhoneSpeech("player","","Who was the friend?");
					writePhoneSpeech("kuro","","Ooh, getting jealous? Dont worry, its not some other guy");
					writePhoneSpeech("kuro","","A girlfriend was SUPER interested in what she heard, so she came over");
					writePhoneSpeech("kuro","","Besides, your my only client for now anyway");
					writePhoneSpeech("kuro","","Feel privileged!");
					writePhoneSpeech("kuro","","Ooh, gtg she's calling, sry");
					break;
				}
				case "kuroPhone4" : {
					if(data.story[1].trust < 25){
						data.story[1].trust = 25;
					}
					writePhoneSpeech("kuro","","Hi hi~! Talked to my phone-buddy about that hj i gave ya");
					writePhoneSpeech("kuro","","You wouldnt BELIEVE how turned on she was!!!");
					writePhoneSpeech("kuro","","You had her fucking herself like CRAZY");
					writePhoneSpeech("kuro","","Im starting to think NOT introducing you guys would be too cruel!");
					writePhoneSpeech("kuro","","What do you think?");
					writePhoneChoices("I'm satisfied with you","I'd love to meet her");
					break;
				}
				case "kuroPhone4A" : {
					writePhoneSpeech("kuro","","Well arent you the perfect flatterer?");
					writePhoneSpeech("kuro","","If you go saying stuff like that ill get too turned on to stay at school all day lol");
					writePhoneSpeech("kuro","","Still gotta look out for a sister tho, so here (~>^.^)~>");
					writePhoneImage("images/kuro/nikki.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("kuro","","Even if you don't go spurting on your phone screen shell cum like CRAZY knowing some dude shes never met might be jerking it to her");
					writePhoneSpeech("kuro","","The way she talked about bumping into people around campus with no idea if they blasted rope to her ass got ME crazy turned on");
					writePhoneSpeech("kuro","","Maybe youll see her around the university if you ever decide one sexy bitch isnt enough for ya~");
					break;
				}
				case "kuroPhone4B" : {
					writePhoneSpeech("kuro","","Oof, shes gonna get so turned on hearing that");
					writePhoneSpeech("kuro","","here");
					writePhoneImage("images/kuro/nikki.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("kuro","","She wanted you to have a pic of her, she said shes gonna cum like CRAZY knowing some guy shes never met might be jerking it to her");
					writePhoneSpeech("kuro","","She totally went on about not knowing which guy at school has been jerking it to a pic of her ass");
					writePhoneSpeech("kuro","","If you see her around the university you could totally whisper that you enjoyed the pic");
					writePhoneSpeech("kuro","","I bet that slut would totally cum on the spot~!");
					writePhoneSpeech("kuro","","Fuck im runnign late gtg");
					break;
				}
				case "kuroReward" : {
					writePhoneImage("images/kuro/7-4.jpg", "Art by Enoshima Iki");
					writePhoneSpeech("kuro", "", "You've finished all of "+data.story[1].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
		case "maid" : {
			switch (n) {
				case "maidReward" : {
					writePhoneImage("images/maid/fin.jpg", "Art by Oreteki18kin");
					writePhoneSpeech("maid", "", "You've finished all of "+data.story[5].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
		case "mistress" : {
			switch (n) {
				case "mistressReward" : {
					writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
					writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
		case "meji" : {
			switch (n) {
				case "mejiReward" : {
					writePhoneImage("images/meji/fin.jpg", "Art by Nagi Ichi");
					writePhoneSpeech("meji", "", "You've finished all of "+data.story[7].fName+"'s content for this version, congratulations!");
					break;
				}
			}
			break;
		}
	}
}

function checkDay() { //For checking for holidays, payday, and for new text messages, alt-2 to close
	var specialEvent = false;
	if (data.player.day % 5 === 0) {
		var paybaby = 10 + data.player.counseling;
		writeSpecial("It's payday! $10 has been wired to your account.");
		if (data.player.counseling > 0) {
			writeSpecial("You've received an extra $" + data.player.counseling + " for being so skilled, you sly dog!");
		}
		data.player.money += paybaby;
	}
	//Emily's events
	console.log("Now checking for Emily's events for on day " + data.player.day);
	if (data.player.day > 2) {
		//writeText("Emily wanted to talk today.");
	}
	//Checking for special events
	console.log("Now checking for special events for on day " + data.player.day);
	if (data.player.day == 3) {
		//specialEvent = true;
		//writeFunction("writeEvent('specialDay')", "Go to the special event");
		//writeTransition("playerHouse", "Skip the event");
	}
	if (specialEvent == false) {
		console.log("No events found");
		writeTransition("playerHouse", "Get out of bed");
	}
}