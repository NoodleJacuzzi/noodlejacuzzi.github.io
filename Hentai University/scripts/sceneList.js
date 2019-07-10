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
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("This game uses art by three artists. Enoshima Iki, Nagi Ichi, and Oreteki18kin. Hover over an image for the artist who created it. Check it out:");
			writeMed("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeMed("images/tomgirl/profile.jpg", "Art by Nagi Ichi");
			writeMed("images/purple/profile.jpg", "Art by Oreteki18kin");
			writeText("All three of the artists who's works I've used have different styles, and all work is censored due to Japan's censorship laws. I don't ever intend to mix and match within scenes, but it is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider simply avoiding characters by these artists.");
			writeTransition("oretekiTest", "See a Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeTransition("nagiTest", "See a Nagi Ichi example <br>(AT LEAST 90% GAY)");
			writeText("I'm always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like me to consider adding another artist (I'm considering Aomizuan, Akushizu, and Wataya at the moment), or you'd like to suggest content of your own, you can shoot me a message at anytime on TFgames, F95zone, or my Patreon page at https://www.patreon.com/noodlejacuzzi");
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
				
				//document.getElementsByClassName('playerRoom')[0].innerHTML +=
					//`<div class="pictureButton" onclick="sceneTransition('eastHallway')"
					//style="top: 79%; left: 40%; max-width: 30%;">East Hallway</div>`;
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
			writePlayerHouse();
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
	document.getElementById('output').innerHTML = '';
	switch (scene) {
		//Dom route
		case "mom1": {
			writeText("You awaken in the morning, eager to appreciate the fruits of your labor. You walk out of your room, eager to see your mother transformed into the sex-fiend of your dreams, but you stop in your tracks as you walk past her room. Her door is cracked slightly open.");
			writeBig("images/real/general/solo2.gif");
			writeText("Still laying in bed well into the morning, your mother is rubbing at her pussy. The wet spot on her sheets leads you to believe she's been at it for quite a while now. Her moans have a tinge of panic to them as she rolls onto her side.");
			writeSpeech(data.story.motherName, "scripts/gamefiles/real/oldfile0.jpg", "God, oh god... What's happening to me? Got to get help... Got to...");
			writeText("Your mother slides out of bed, her hand still furiously jilling herself. She can't even make it halfway to the door before she leans back onto the wall.");
			writeBig("images/real/general/solo1.gif");
			writeText("Her rubbing reaches a crescendo and her body convulses, but even afther hand keeps rubbing. Her moans and whimpers are quick and panicked.");
			writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
			writeText("If you wan't to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
			writeText("...");
			writeText("You spend your free time studying the app and its nature.");
			writeSpecial("You've achieved a novice level of understanding of the Human Alteration App's use!");
			writeText("You have a plan now, and a few people you can use for guinea pigs. From now on you'll be able to corrupt individuals after going to bed, but for now you can explore the town freely. What you do from this point on is up to you, but it might be worth it to head to the coffee shop and help out for some pocket change.");
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
				case "mom1A": {
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
			}
			break;
		}
		case "kuro": {
			switch (scene) {
				case "kuro1": {
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
				case "tomgirl1": {
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
			}
			break;
		}
		case "purple": {
			switch (scene) {
				case "purple1": {
					writeBig("images/purple/profile.jpg", "Art by Oreteki18kin");
					writeSpeech("purple", "", "'Scuse me.");
					writeText("A student with purple hair bumps into you while walking.");
					writeBig("images/purple/1-4.jpg", "Art by Oreteki18kin");
					writeBig("images/purple/2-2.jpg", "Art by Oreteki18kin");
					writeText("When you come to, she's nowhere to be seen.");
					writeText("Your phone buzzes in your pocket.");
					writeTransition("westHallway", "Keep going");
					data.story[3].textEvent = "purple1";
					notification();
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
	data.story[tabIndex].encountered = true;
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
			}
			break;
		}
		case "purple": {
			switch (n) {
				case "purple1": {
					writePhoneSpeech("purple", "", "Beep Boop.");
					writePhoneImage("images/purple/4-2.jpg", "Art by Oreteki18Kin");
					writePhoneImage("images/purple/5-1.jpg", "Art by Oreteki18Kin");
					break;
				}
			}
			break;
		}
	}
}

function checkForEvents() {
	switch (true) { //Check for noncharacter events
		case (tempScene == "parkDistrict"): {
			if (data.player.dayID < 1) {
				//writeFunction("sceneTransition('hypnosisTutor')", "There's an old man on a bench");
			}
			break;
		}
	}
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
						//writeTab ("mom", "", "mom1B", "A woman is struggling with some groceries.");
					}
				}
			}
		break;
		}
	}
	switch (true) { //Check for kuro's events
		case (data.story[1].trust == 0): { //level 1
			if (tempScene == "schoolEntrance") {
				if (data.player.time == "Morning") {
					writeTab ("kuro", "", "kuro1", "Someone is being chewed out at the gate.");
				}
			}
		break;
		}
	}
	switch (true) { //Check for tomgirl's events
		case (data.story[2].trust == 0): { //level 1
			if (tempScene == "northHallway") {
				if (data.player.time == "Evening") {
					writeTab ("tomgirl", "", "tomgirl1", "An effeminate boy is chatting with another student.");
				}
			}
		break;
		}
	}
	switch (true) { //Check for purple's events
		case (data.story[3].trust == 0): { //level 1
			if (tempScene == "westHallway") {
				writeTab ("purple", "", "purple1", "Someone is about to bump into you.");
			}
		break;
		}
	}
}

function checkForPhoneEvents() {
	switch (true) { //Check for mom's phone events
		case (data.story[0].trust == 0): { //level 1
			if (data.player.day > 2) {
				if (data.story[0].textEvent == "mom1") {
					data.story[0].textEvent = "momAngry";
					notification();
				}
			}
			break;
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