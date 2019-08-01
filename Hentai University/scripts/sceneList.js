function writeScene(scene) {
	console.log("Now writing scene ID " + scene + ", the time is " + data.player.time);
	switch(scene) {
		case "start" : {
			writeBig("scripts/gamefiles/logo2.png");
			writeText("Hentai University is an adult game created by NoodleJacuuzi. You can find and keep up with all of my work, including Human Alteration App, Princess Quest, and Rainy DayZ at my master index here:");
			writeText("https://noodlejacuzzi.github.io/index.html");
			writeText("This game is based (loosely) on the design of Hentai High School by Capta1n and the Hentai High School + project. However, there are no elements of school management or system of global corruption. The smaller scale means it will be more feasible to complete than either of those games.");
			writeText("As a content warning, this game features hypnosis and dubious consent between partners, and mostly depicts straight M/F sex. There are several male characters who have scenes depicting undoubtably homosexual content, but they universally have a trap/twink bodytype and no specific character relationships are ever forced on the player. Finally, all characters are portrayed as being 18 or older. Every single character is a high-school graduate, and I currently don't intend to add any character who looks underage.");
			writeText("If you'd like to avoid any specific fetishes, each character's logbook page lists the fetishes their scenes cover. Keep in mind that, as you are a hypnotist, hypnosis/mind control is so common I won't list it in the tags.");
			writeTransition("prologue", "Start the game");
			writeText("Other notes:");
			writeText("The game is more freeform and slower paced than my previous works. If you get stuck, please let me know. I'm not sure how/if I even need to make a guide for this.");
			writeText("I tend to assume that if you click to hang out with a character, you're set on the idea of spending that block of time with them. I feel like 'do you want to spend the evening with emily' is a bit pointless if you clicked to knock on her door. IF you feel differently, please let me know.");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("This game uses art by three artists. Enoshima Iki, Nagi Ichi, and Oreteki18kin. Hover over an image for the artist who created it. Check it out:");
			writeMed("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeMed("images/tomgirl/profile.jpg", "Art by Nagi Ichi");
			writeMed("images/purple/profile.jpg", "Art by Oreteki18kin");
			writeText("All three of the artists who's works I've used have different styles, and all work is censored due to Japan's censorship laws. I don't ever intend to mix and match within scenes, but it is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider simply avoiding characters by these artists.");
			writeTransition("oretekiTest", "See a Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeTransition("nagiTest", "See a Nagi Ichi example <br>(AT LEAST 90% GAY)");
			writeText("I'm always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like me to consider adding another artist, or you'd like to suggest content of your own, you can shoot me a message at anytime on TFgames, F95zone, or my Patreon page at https://www.patreon.com/noodlejacuzzi");
			writeText("You can also send me a message on discord (I'm NoodleJacuzzi#4120) or an email at noodlejacuzzi@gmail.com");
			break;
		}
		case "prologue": {
			writeText("Dear <input type='text' id='nameSubmission' value='Thomas'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few men have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			writeText("- Yours, Principal Victoria");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologue2": {
			writeBig("scripts/gamefiles/characters/basic.jpg", "Art by Ishimura");
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
		case "hypnosisTextbook": {
			if (scene != data.player.currentScene) {
				data.player.hypnosis += 1;
				removeItem("Hypnosis Textbook");
				passTime();
			}
			writeText("You read through the textbook. It's a bit mind-numbing, which is probably appropriate. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hypnosis has improved!");
			writeTransition("playerOffice", "Finish up");
			break;
		}
		case "hackingTextbook": {
			if (scene != data.player.currentScene) {
				data.player.hacking += 1;
				removeItem("Hacking Textbook");
				passTime();
			}
			writeText("You read through the textbook. It's a bit mind-numbing, but still interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hacking has improved!");
			writeTransition("playerOffice", "Finish up");
			break;
		}
		case "counselingTextbook": {
			if (scene != data.player.currentScene) {
				data.player.counseling += 1;
				removeItem("Counseling Textbook");
				passTime();
			}
			writeText("You read through the textbook. It's a bit mind-numbing, but the pictures are interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in counseling has improved!");
			writeTransition("playerOffice", "Finish up");
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
		//Characters
		case "mom": {
			writeTransition("start", "Go back");
			break;
		}
		//Sandbox
		case "street": {
			//writeBG(scene);
			if (imagesDisabled != true) {
				var bg = "images/locations/" + scene + data.player.time + ".jpg";
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
						document.getElementById('output').innerHTML += `
							<div class="playerRoom">
								<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
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
						document.getElementById('output').innerHTML += `
							<div class="playerRoom">
								<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
								<div class="pictureButton" onclick="sceneTransition('gameConsole')"
								style="top: 54%; left: 79%; max-width: 20%;">Game Console</div>
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
				document.getElementById('output').innerHTML += `
					<div class="playerRoom">
						<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
						<div class="pictureButton" onclick="sceneTransition('textbooks')"
						style="top: 40%; left: 5%; max-width: 25%;">Check Textbooks</div>
						<div class="pictureButton" onclick="nap()"
						style="top: 50%; left: 35%; max-width: 20%;">Take a Nap</div>
						<div class="pictureButton" onclick="sceneTransition('paperwork')"
						style="top: 40%; left: 65%; max-width: 25%;">File Paperwork</div>
						<div class="pictureButton" onclick="sceneTransition('northHallway')"
						style="top: 79%; left: 35%; max-width: 30%;">Back to the Hallway</div>
					</div>
				`;
			}
			else {
				writeTransition("playerHouse", "Head straight back home");
				if (checkItem("Hypnosis Textbook") == false && checkItem("Hacking Textbook") == false && checkItem("Counseling Textbook") == false) {
					writeText("<p class='centeredText'>You could study her if you had some material to work with.<span>");
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
		case "textbooks": {
			if (checkItem("Hypnosis Textbook") == false && checkItem("Hacking Textbook") == false && checkItem("Counseling Textbook") == false) {
				writeText("<p class='centeredText'>You don't have any textbooks to read.<span>");
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
			writeTransition("playerOffice", "Go back");
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
	//document.getElementById('output').innerHTML = '';
	if (scene.includes("porn")) {
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
			writeSpeech("tomgirl", "", "Mmmph...<i><br>Ignore him "+data.story[2].fName+", this is just a reflexive boner. Just keep him happy so he doesn't go any farther.<br>Any farther... With something like this...</i>");
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
			writeSpeech("tomgirl", "", "Y-yes sir~!");
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
			writeSpeech("chubby", "", "Hmmhmm~ It's so warm and wet inside me, isn't it? Is it to your liking? I haven't had a man in years, never someone like you, master.");
			writeSpeech("player", "", "You feel amazing, almost as tight as your daughter's pussy.");
			writeSpeech("chubby", "", "So polite! But, you know how a man like you shows his honesty, right? <br>Not~<br>With~<br>Words~");
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
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
}

function writeEncounter(n, scene) {
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
			}
			break;
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
					writeSpeech("tomgirl", "", "Y-yes sir?");
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
					writeText("After some time it's clear she's gt a lot of repressed emotions, but she isn't relaxed enough for hypnosis to work right now.");
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
					writeSpeech("purple", "", "See you later mom! Oh, uh, hi sir.");
					writeSpeech("player", "", "Good morning "+data.story[3].fName+". On your way to school?");
					writeSpeech("purple", "", "Yes sir. You?");
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
					writeSpeech("purple", "", "Gah! Uh... Oh, sorry. I got distracted. I don't think your method works, sir.");
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
					writeText("The best course of action would be to speak to "+data.story[4].fname+".");
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
					writeSpeech("purple", "", "Sorry sir. Would you like to head home with me now?");
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
					writeSpeech("purple", "", "It's fine, mom! I'll see you up there, alright sir?");
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


function writePhoneEvent(n) {
	saveSlot(110);
	console.log("Writing event " + n + " for " + data.story[data.player.lastText].index);
	data.player.lastText = parseInt(data.player.lastText);
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
	}
}

function checkForEvents() {
	switch (true) { //Check for misc events
		case (tempScene == "parkDistrict"): {
			if (data.player.dayID > 0) {
				//writeButton('A Strange Man is Swinging a Watch', 'sceneTransition("hypnosisTutor")', 55, 7);
			}
			break;
		}
	}
	if (data.story[0].encountered == false) {
		switch (true) { //Check for mom's events
			case (data.story[0].trust == 0): { //level 1
				if (tempScene == "playerHouse") {
					if (data.player.time == "Morning") {
						if (data.player.dayID > 4) {
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
						//writeTab ("kuro", "", "kuroTest", "Someone is being chewed out at the gate.");
					}
				}
			break;
			}
		}
	}
	if (data.story[2].encountered == false) {
		switch (true) { //Check for tomgirl's events
			case (data.story[2].trust == 0): { //level 1
				if (tempScene == "northHallway") {
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
					writeTab ("purple", "", "purple1B", "A student's file is on your desk.");
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
}

function checkDay() { //For checking for holidays, payday, and for new text messages, alt-2 to close
	var specialEvent = false;
	if (data.player.day % 5 === 0) {
		writeSpecial("It's payday! $20 has been wired to your account.");
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