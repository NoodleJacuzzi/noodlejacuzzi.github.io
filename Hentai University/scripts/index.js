var picturesDisabled = false;
var saveName;
var invHidden = true;
var saveHidden = true;
var selfHidden = true;
var phoneHidden = true;
var imagesDisabled = false;
var tabIndex;
var randNum;
var textStage = 0;
var tempScene;
var data = {
	player: {
		name: "You",
		character: "basic",
		characterArtist: "Art by Ishimura",
		currentScene: "start",
		time: "Morning",
		day: 1,
		money: 30,
		hypnosis: 1,
		hacking: 0,
		counseling: 0,
		lastText: 100,
		dayID: 1,
		version: 2,
	},
	story: [
		{index: "mom", met: false, fName: "Emily", lName: "Smith", trust: 0, encountered: false, textEvent: "",},
		{index: "kuro", met: false, fName: "Steph", lName: "Black", trust: 0, encountered: false, textEvent: "",},
		{index: "tomgirl", met: false, fName: "Sam", lName: "White", trust: 0, encountered: false, textEvent: "",},
		{index: "purple", met: false, fName: "Mary", lName: "Williams", trust: 0, encountered: false, textEvent: "",},
		{index: "chubby", met: false, fName: "Margaret", lName: "Williams", trust: 0, encountered: false, textEvent: "",},
		{index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "",},
		{index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "",},
		{index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "",},
		{index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "",},
		{index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "",},
		{index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "",},
		{index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",},
		{index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",},
	],
	gallery: [
	],
	items: [
	],
	bodytypes: [
		{index: "basic", artist: "Art by Ishimura",}
	],
	phoneImages: [
	],
}

var galleryArray = [
	{index: "mom1", name: "Drinking Buddy", hint: "Emily Smith's event"},
	{index: "mom2", name: "Breaking Tensions", hint: "Emily Smith's event"},
	{index: "purple1", name: "Daughter's Payment 1", hint: "Mary Williams' event"},
	{index: "purple2", name: "Daughter's Payment 2", hint: "Mary Williams' event"},
	{index: "purple3", name: "Family Bonding", hint: "Mary Williams' event"},
	{index: "chubby1", name: "Mother's Payment", hint: "Margaret Willams' event"},
	{index: "tomgirl1", name: "Fascination", hint: "Sam White's event"},
	{index: "tomgirl2", name: "Probing", hint: "Sam White's event"},
	{index: "tomgirl3", name: "Gym Excursion", hint: "Sam White's event"},
	{index: "tomgirl4", name: "Relief", hint: "Sam White's event"},
	{index: "tomgirl5", name: "Full Blown Gay Anal Sex", hint: "Sam White's event"},
	{index: "kuro1", name: "Free First Handy", hint: "Steph Black's event"},
	{index: "kuro2", name: "Another Handjob", hint: "Steph Black's event"},
	{index: "kuro3", name: "Ignored Back-Blaster", hint: "Steph Black's event"},
	{index: "maid1", name: "Casual Titjob", hint: "Lena Rogers's event"},
	{index: "mistress1", name: "Penthouse Blowies", hint: "Anna Fletcher's event"},
	{index: "meji1", name: "Beginner's Training", hint: "Reese Kieran's event"},
	{index: "meji2", name: "Feeling Numb", hint: "Reese Kieran's event"},
	{index: "meji3", name: "Backing Up Leotard", hint: "Reese Kieran's event"},
	{index: "meji4", name: "Finally Finishing", hint: "Reese Kieran's event"},
]

var itemArray = [ //If price is 0 it isn't for sale
	{name: "Butt", key: true, price: 0, image: "scripts/gamefiles/items/butt.jpg", description: ""},
	{name: "Leotard", key: true, price: 20, image: "scripts/gamefiles/items/leotard.jpg", description: "A womens' sports-leotard."},
	{name: "Beer", key: true, price: 5, image: "scripts/gamefiles/items/beer.jpg", description: "A can of beer. You don't drink it, but some people do."},
	{name: "Petunia", key: true, price: 10, image: "scripts/gamefiles/items/petunia.jpg", description: "A beautiful purple flower."},
	{name: "Hypnosis Textbook", key: false, price: 50, image: "scripts/gamefiles/items/hypnosisTextbook.jpg", description: "A textbook on hypnosis, you can read it at home to improve your skill."},
	{name: "Hacking Textbook", key: false, price: 50, image: "scripts/gamefiles/items/hackingTextbook.jpg", description: "A textbook on hacking, you can read it at home to improve your skill."},
	{name: "Counseling Textbook", key: false, price: 50, image: "scripts/gamefiles/items/counselingTextbook.jpg", description: "A textbook on counseling, you can read it at home to improve your skill."},
	{name: "Lady", key: true, price: 5, image: "scripts/gamefiles/profiles/lady.jpg", description: "For if you'd like to play as a cute lady. Unlocks the 'Lady' character portrait. Aesthetic change only, art by Nusumenaihxseki"},
]

var logbookArray = [
	{index: "mom", 
	desc: "A widowed woman, she's older than you. She honestly seems lonely sometimes, even though she can be a bit blunt.",
	body: "She's probably into her fourties, but she'd never tell. She has light hair and a very curvaceous body.",
	clothes: "Her preferred outfit is a v-neck shirt thin enough that you can faintly make out her black bra through it and a pair of jeans.",
	home: "She lives in the same apartment complex as you. She occasionally goes to buy groceries in the shopping district.",
	tags: "Unshaven, Drunken Sex, Vanilla, Pregnancy (Ending)",},
	{index: "kuro", 
	desc: "A university student with an incredibly chilled-out view on sex. She prefers texting over any other form of communication.",
	body: "You have no idea how she made it into this school, but it's clear enough how she paid for it at least. She's gorgeous and her blond hair and full tan make it clear that isn't an accident.",
	clothes: "Her preferred outfit is a riff on the school uniform, with a microskirt so short she's gotten chewed out at school more than once.",
	home: "She mostly hangs out on the roof before and after classes.",
	tags: "Prostitution, Unenthusiastic Sex (at first), Cum on Clothes",},
	{index: "tomgirl", 
	desc: "A university student who worries about his masculinity, mostly due to his effeminate figure.",
	body: "He's about a foot shorter than you and looks twinkier than a snack cake. He's also more than a little obvious in checking out your ass when he thinks nobody's looking.",
	clothes: "His preferred outfit is the school uniform, although he'd probably look better in a skirt.",
	home: "His designated classroom is class B.",
	tags: "Tomgirl, Sissification, Prostate Stimulation, Anal",},
	{index: "purple", 
	desc: "A university student who's been having trouble making the grade. If she doesn't pick up the slack, she could face being expelled.",
	body: "Still, she doesn't have any intention of using her body to make the grade, at least for now.",
	clothes: "She's pretty hot and she knows it, preferring to wear her jacket open and with a shorter skirt than is regulation.",
	home: "Her designated classroom is class A. Sometimes she heads to the hallway outside your office in the mornings.",
	tags: "Mom-Daughter Threesome, Public Sex, Gangbang",},
	{index: "chubby", 
	desc: "The mother of a university student, she's struggling to help her daughter improve her grades.",
	body: "She's a bit out of shape, but has a pretty good looking mom-bod with huge breasts. You've never seen her without a smile on her face.",
	clothes: "She prefers softer colors, her baggy clothes actually make her look larger than she is.",
	home: "She lives on Vintage Street with her daughter. She tends to sleep through the evenings.",
	tags: "Mom-Daughter Threesome, Public Sex, Gangbang",},
	{index: "maid", 
	desc: "A woman that works as a certain rich woman's personal maid. Off-work, she's surprising lax for a maid.",
	body: "She's surprisingly pretty fit, even if her outfits tend to hide that.",
	clothes: "She usually wears her maid uniform and, even when wearing casual outfits, she's prefers whites, grays, and blacks.",
	home: "She spends most of her time in-town, running errands for her employer.",
	tags: "Casual Sex, FFM Threesome",},
	{index: "mistress", 
	desc: "A fairly rich young woman that has her maid handle taking care of her.",
	body: "Her relaxed lifestyle has her a bit more plump than most, which her custom-cut outfits seem to highlight quite well.",
	clothes: "She generally prefers clothes with colors that match her hair or complexion.",
	home: "She lives at the top of a particularly large complex near the Park District.",
	tags: "Public Sex, FFM Threesome",},
	{index: "meji", 
	desc: "A very outwardly-confident young man with a crossdressing habit. Despite wanting to 'keep it a secret', he goes to some <i>very</i> crowded places when dressed-up.",
	body: "He has a slim, effeminate figure that's well-suited for crossdressing. He usually lets down his ponytail whenever he wears women's clothing.",
	clothes: "He usually wears a school uniform - the male version while at school, and a girl's uniform when around the town.",
	home: "He usually hangs out around the Class B hallway.",
	tags: "Crossdressing, Anal Orgasms, Orgasm Denial",},
	{index: "principal", 
	desc: "The principal of the university you work at. She's pretty kind but is suprisingly strong willed.",
	body: "She's probably in her early thirties, but could be as young as 25.",
	clothes: "She prefers an older style of dress with a white blouse and a black pencil skirt, but her shirt is worn out enough that you can clearly make out her bra underneath.",
	home: "You have no idea where she lives, she's pretty private when it comes to her personal life. With her, it's all business all the time.",
	tags: "No scenes yet, sorry! In the future she'll send you on more missions for special scenes, and her content will be based on your Counseling skill.",},
	{index: "secretary", 
	desc: "The principal's personal secretary. She handles a great deal of general paperwork for the school, although a lot of it needs to be corrected.",
	body: "She has pretty much no confidence in herself at all. Supposedly she laments not having a boyfriend, but she never actually makes any effort to make new friends.",
	clothes: "Her clothes tend to look new or very well kept, and she dresses quite conservatively.",
	home: "She lives somewhere in town, probably close to the principal's home since they tend to arrive at the same time.",
	tags: "No scenes yet, sorry!",},
	{index: "neet", 
	desc: "A university student, supposedly. You've never seen her in a class in session, and nobody seems to know how long she's been attending.",
	body: "She's very well endowed despite being short, but she could really take some time to take care of herself. Notably, her hair is a mess.",
	clothes: "You aren't sure if she even owns anything aside from the school uniform, and it always looks perpetually wrinkled.",
	home: "According to her file, she lives in the computer lab.",
	tags: "No scenes yet, sorry!",},
	{index: "scarf", 
	desc: "A fellow university teacher. Her sister works here too. She's an expert hypnotist suffering from a 'artist's block'.",
	body: "It's not clear how old she is. When you really focus, there's a slight blur around her body whenever you look at her.",
	clothes: "Her preferred outfit is a v-neck shirt and a yellow scarf. She must be wearing some sort of herbal perfume because your head feels fuzzy around her.",
	home: "She lives somewhere south of the shopping district, but spends most of her time at the school. ",
	tags: "No scenes yet, sorry! In the future her content will be dependent on increasing your Hypnosis skill.",},
	{index: "green", 
	desc: "A fellow university teacher. Her sister works here too. Her personality flips when around her sister, acting almost like she's in a trance.",
	body: "She's the younger sister, and keeps herself more in shape.",
	clothes: "She prefers to wear green over any other color, it goes well with her sister's outfits.",
	home: "She lives somewhere south of the shopping district, but spends most of her time at the school. ",
	tags: "No scenes yet, sorry!",},
];

//Startup & Systems config
function startup() {
	saveSlot(111);
	document.getElementById("inventory").style.visibility = "hidden"; 
	document.getElementById("save").style.visibility = "hidden"; 
	document.getElementById("self").style.visibility = "hidden"; 
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data110')) {
		loadSlot(110);
	}
	else{
		sceneTransition('start');
	}
}

function disablePictures() {
	document.getElementById("playerImage").style.visibility = "hidden";		
	document.getElementById("playerImage").style.width = "0%";
	document.getElementById("playerImage").style.border = "none";
	imagesDisabled = true;
	sceneTransition(data.player.currentScene);
	document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(111);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function passTime() {
	switch (data.player.time) {
		case "Morning":
			data.player.time = "Evening";
		break;
		case "Evening":
			data.player.time = "Night";
		break;
		case "Night":
			if (data.player.currentScene == "newDay") {
				data.player.time = "Morning";
			}
		break;
	}
}

function nap() {
	passTime();
	document.getElementById('output').innerHTML = '';
	writeText("You get a lovely nap in.");
	sceneTransition(data.player.currentScene);
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideInv();
	hideSave();
	hideSelf();
	hidePhone();
	//console.log("hideStuff end");
}

function invButton() {
	if (invHidden == true) {
		showInv();
	}
	else {
		hideInv();
	}
}

function hideInv() {
	invHidden = true;
	document.getElementById("inventory").style.visibility = "hidden";	
}

function showInv() {
	hideStuff();
	generateInv();
	invHidden = false;
	document.getElementById("inventory").style.visibility = "visible"; 
}

function saveButton() {
	if (saveHidden == true) {
		showSave();
	}
	else {
		hideSave();
	}
}

function hideSave() {
	saveHidden = true;
	document.getElementById("save").style.visibility = "hidden"; 
}

function showSave() {
	hideStuff();
	generateSave();
	saveHidden = false;
	document.getElementById("save").style.visibility = "visible"; 
}

function selfButton() {
	if (selfHidden == true) {
		showSelf();
	}
	else {
		hideSelf();
	}
}

function hideSelf() {
	selfHidden = true;
	document.getElementById("self").style.visibility = "hidden";	
}

function showSelf() {
	hideStuff();
	selfHidden = false;
	document.getElementById("self").style.visibility = "visible"; 
	generateNav();
}

function phoneButton() {
	document.getElementById('phoneButton').innerHTML = "PHONE";
	document.getElementById('phoneButtonMobile').innerHTML = "PHONE";
	if (phoneHidden == true) {
		showPhone();
	}
	else {
		hidePhone();
	}
}

function hidePhone() {
	phoneHidden = true;
	document.getElementById("phone").style.visibility = "hidden";	
	document.getElementById('phoneRight').innerHTML = '';
}

function showPhone() {
	hideStuff();
	phoneHidden = false;
	document.getElementById("phone").style.visibility = "visible"; 
	generateContacts();
}

function listTextbooks() {
		document.getElementById('output').innerHTML = '';
	if (checkItem("Hypnosis Textbook") == false && checkItem("Hacking Textbook") == false && checkItem("Counseling Textbook") == false) {
		writeText("<p class='centeredText'>You don't have any textbooks to read.<span>");
	}
	if (checkItem("Hypnosis Textbook") == true) {
		writeFunction("textbooks('hypnosis')", "Read your hypnosis textbook");
	}
	if (checkItem("Hacking Textbook") == true) {
		writeFunction("textbooks('hypnosis')", "Read your hacking textbook");
	}
	if (checkItem("Counseling Textbook") == true) {
		writeFunction("textbooks('hypnosis')", "Read your counseling textbook");
	}
	writeTransition(data.player.currentScene, "Go back");
}

function textbook(n) {
		document.getElementById('output').innerHTML = '';
	switch (n) {
		case "hypnosis":
			data.player.hypnosis += 1;
			removeItem("Hypnosis Textbook");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, which is probably appropriate. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hypnosis has improved!");
		break;
		case "hacking":
			data.player.hacking += 1;
			removeItem("Hacking Textbook");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, but still interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hacking has improved!");
		break;
		case "counseling":
			data.player.counseling += 1;
			removeItem("Counseling Textbook");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, but the pictures are interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in counseling has improved!");
		break;
	}
	writeTransition(data.player.currentScene, "Finish");
}

//Scene creation
function writeSpeech (name, img, text) {
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	if (name == "player") {
		img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		name = data.player.name;
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName + ' ' + data.story[i].lName
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			`+ img +`
		">
		<p class = "textName">`+ name + `</p>
		<p>` + text + `</p>
	</div>
	<br>
	`;
}

function writeTab (name, img, scene, text) {
	tabIndex;
	var tabTrust;
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			tabIndex = i;
			name = data.story[i].fName + ' ' + data.story[i].lName;
		}
	}
	if (data.story[tabIndex].trust == 0) {
		name = "???";
	}
	switch (true) {
		case (data.story[tabIndex].trust > 99): {
			tabTrust = "Love";
			break;
		}
		case (data.story[tabIndex].trust > 79): {
			tabTrust = "Trusting";
			break;
		}
		case (data.story[tabIndex].trust > 59): {
			tabTrust = "Friendly";
			break;
		}
		case (data.story[tabIndex].trust > 39): {
			tabTrust = "Relaxed";
			break;
		}
		case (data.story[tabIndex].trust > 19): {
			tabTrust = "Wary";
			break;
		}
		default: {
			tabTrust = "Unknown";
			break;
		}
	}
	console.log(tabIndex);
	console.log("Now generating tab for " + name + ", linking to scene " + scene + " with the text " + text);
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "`+ img +`">
		<p class = "textName">` + name + `</p>
		<p> Status: ` + tabTrust + `</p>
		<p class="switch" onclick="writeEncounter('`+data.story[tabIndex].index+`', '`+scene+`')">` + text + `</p>
	</div>
	<br>
	`;
}

function writeBig (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `" title="` + cap + `">
		<br>
	`;
	}
}

function writeMed (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `" title="` + cap + `">
		<br>
	`;
	}
}

function writeBG (scene) {
	var bg = "images/locations/" + scene + data.player.time + ".jpg";
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="backgroundPicture" src="` + bg + `">
		<br>
	`;
	}
	checkForEvents();
}

function writeButton(name, func, top, left) {
	if (imagesDisabled == true) {
		writeFunction(func, name);
	}
	else {
		console.log(name + '' + func);
		document.getElementsByClassName('playerRoom')[0].innerHTML += `
			<div class="pictureButton" onclick='`+func+`'
			style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+name+`</div>
		`;
	}
}

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + scene + `
		</p>
	`;
}

function writeFunction (name, func) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `">
			` + func + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + text + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + text + `</p>
	`;
}
	
function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(110);
	console.log("scene transition end");
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`A')" src="images/porn/` + pornID + `A.jpg">
			<br>
		`;
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`B')" src="images/porn/` + pornID + `B.jpg">
			<br>
		`;
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`C')" src="images/porn/` + pornID + `C.jpg">
			<br>
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

//Menu
function updateMenu() {
	document.getElementById('playerName').innerHTML = data.player.name;
	document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
	document.getElementById('playerImage').title = data.player.characterArtist;
	if (data.player.hypnosis == 0) {
		document.getElementById('playerHypnosis').innerHTML = "";
	}
	else {
		document.getElementById('playerHypnosis').innerHTML = "Hypnosis: " + data.player.hypnosis;
	}
	if (data.player.counseling == 0) {
		document.getElementById('playerCounseling').innerHTML = "";
	}
	else {
		document.getElementById('playerCounseling').innerHTML = "Counseling: " + data.player.counseling;
	}
	if (data.player.hacking == 0) {
		document.getElementById('playerHacking').innerHTML = "";
	}
	else {
		document.getElementById('playerHacking').innerHTML = "Hacking: " + data.player.hacking;
	}
}

function changeName() {
	data.player.name = document.getElementById('nameSubmission').value;
	updateMenu();
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	sceneTransition("playerHouse");
}

function renamePlayer() {
	data.player.name = document.getElementById('nameSubmission').value;
	sceneTransition("prologue2");
}

//Saving
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	generateSave();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	sceneTransition(data.player.currentScene);
	updateSave();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(110);
	loadSlot(110);
	if (data.player.name == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(111);
	}
	else {
		saveSlot(110);
		loadSlot(110);
	}
	updateSave();
}

function generateSave() {
	for (i = 101; i < 109; i++) {
		var searchName = 'data' + i;
		if(localStorage.getItem(searchName)) {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "LOAD";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "DELETE";
			var buttonName = 'save' + i + 'Date';
			var dateName = 'date' + i;
			document.getElementById(buttonName).innerHTML = localStorage.getItem(dateName);
		}
		else {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'save' + i + 'Date';
			document.getElementById(buttonName).innerHTML = "";
		}
	}
}

function updateSave() {
	if (data.player.version == undefined) {
		console.log('version 1 detected, updating save');
		data.player.version = 2;
		data.story[5] = {index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "",};
		data.story[6] = {index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "",};
		data.story[7] = {index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "",};
		data.story[8] = {index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "",};
		data.story[9] = {index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "",};
		data.story[10] = {index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "",};
		data.story[11] = {index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",};
		data.story[12] = {index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",};
	}
	saveSlot(110);
}

//Gallery
function unlockScene(n) {
	var unlockedScene = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == n) {
			unlockedScene = galleryArray[i];
		}
	}
	if (unlockedScene != "") {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Error, no scene named "+n+" found to unlock.");
	}
}

function generateGalleryNav() {
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].trust > 0) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGalleryPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
				<br>
				<span class = "choiceText" onclick="generateGalleryPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div>
			<br>
			`;
		}
	}
}

function generateGalleryPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("images/"+n+"/profile.jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			if (galleryCheck(data.gallery[i].index) == true) {
				writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
			}
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function galleryCheck(n) {
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			return true;
		}
	}
}

//Logbook
function generateNav() {
	document.getElementById('logbookLeft').innerHTML = '';
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].trust > 0) {
			document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('`+i+`')">` + data.story[i].fName + `</p>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		var scenesUnlocked = 0;
		var scenesTotal = 0;
		var indexer = data.story[n].index;
		console.log("searching for " + indexer + " in gallery");
		for (x = 0; x < galleryArray.length; x++) {
			console.log(galleryArray[x].index);
			if (galleryArray[x].index.includes(indexer)) {
				console.log("Index does include " + indexer);
				scenesTotal += 1;
				if (galleryCheck(galleryArray[x].index) == true) {
					scenesUnlocked += 1;
				}
			}
		}
		console.log("Displaying logbook page for character "+data.story[n].fName+".");
		var tabTrust;
		switch (true) {
			case (data.story[n].trust > 99): {
				tabTrust = "Devoted";
				break;
			}
			case (data.story[n].trust > 79): {
				tabTrust = "Trusting";
				break;
			}
			case (data.story[n].trust > 59): {
				tabTrust = "Friendly";
				break;
			}
			case (data.story[n].trust > 39): {
				tabTrust = "Relaxed";
				break;
			}
			case (data.story[n].trust > 19): {
				tabTrust = "Wary";
				break;
			}
			default: {
				tabTrust = "Unknown";
				break;
			}
		}
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="images/`+data.story[n].index+`/profile.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</p><br><br>
			<p class = "selfDesc">Trust: `+tabTrust+`</p><br><br>
			<p class = "selfDesc">Scenes Unlocked: `+scenesUnlocked+`/`+scenesTotal+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].desc+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].body+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].clothes+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].home+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].tags+`</p>br><br>
			<p class = "selfDesc">   </p>br><br>
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Name: `+data.player.name+`</p><br><br>
			<p class = "selfDesc">Day: `+data.player.day+`</p><br><br>
			<p class = "selfDesc">Time: `+data.player.time+`</p><br><br>
			<p class = "selfDesc">Money: $`+data.player.money+`</p><br><br>
			<p class = "selfDesc">Skills: </p><br><br>
		`;
		if (data.player.hypnosis > 0) {
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">Hypnosis: `+data.player.hypnosis+`</p><br><br>
			`;
		}
		if (data.player.hacking > 0) {
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">Hacking: `+data.player.hacking+`</p><br><br>
			`;
		}
		if (data.player.counseling > 0) {
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">Conseling: `+data.player.counseling+`</p><br><br>
			`;
		}
	}
}

function generateLogbookGallery(n) {
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(n)) {
			if (galleryCheck(galleryArray[i].index) == true) {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</p>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + galleryArray[i].name + '<br>' + galleryArray[i].hint + '</p>';
				break;
			}
		}
	}
}

//Inventory & shopping
function generateInv() {
	clearInv();
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].key == false) {
			document.getElementById('windowLeft').innerHTML += `
			<div class = "item">
				<p class = "itemName">`+data.items[i].name+`</p>
				<img class ="itemImage" src="`+data.items[i].image+`">
			<div>
			`;
		}
		else {
			document.getElementById('windowRight').innerHTML += `
			<div class = "item">
				<p class = "itemName">`+data.items[i].name+`</p>
				<img class ="itemImage" src="`+data.items[i].image+`">
			<div>
			`;
		}
	}
}

function clearInv() {
	document.getElementById('windowLeft').innerHTML = ""
	document.getElementById('windowRight').innerHTML = ""
}

function generateShop() {
	console.log("Now generating shop");
	for (i = 0; i < itemArray.length; i++) {
		console.log("generating item "+ i + ": " + itemArray[i].name);
		if (itemArray[i].price != 0) {
			if (itemArray[i].key == false) {
				document.getElementById('output').innerHTML += `
					<div class = "shopItem" onclick = "purchase(`+i+`)">
						<p class = "shopName">`+itemArray[i].name+`</p>
						<p class = "shopDesc">`+itemArray[i].description+`</p>
						<p class = "shopPrice">$`+itemArray[i].price+`</p>
						<img class ="shopImage" src="`+itemArray[i].image+`">
					</div>
					<br>
				`;
			}
			else {
				if (checkItem(itemArray[i].name) == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase(`+i+`)">
							<p class = "shopName">`+itemArray[i].name+`</p>
							<p class = "shopDesc">`+itemArray[i].description+`</p>
							<p class = "shopPrice">$`+itemArray[i].price+`</p>
							<img class ="shopImage" src="`+itemArray[i].image+`">
						</div>
					<br>
					`;
				}
			}
		}
	}
	if (data.player.time == "Night") {
		document.getElementById('output').innerHTML = '';
		writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
		writeTransition("playerHouse", "Head home");
	}
}

function purchase(n) {
	console.log("purchasing " + itemArray[n].name);
	if (data.player.money >= itemArray[n].price) {
		flashMoney();
		data.player.money -= itemArray[n].price;
		data.items.push(itemArray[n]);
	}
	sceneTransition(data.player.currentScene);
}

function checkItem(n) {
	console.log("Checking for item ID " + n);
	for (x = 0; x < data.items.length; x++) {
		if (data.items[x].name.includes(n)) {
			console.log("Item id " + data.items[0].name + " is owned");
			return true;
			break;
		}
	}
	return false;
}

function removeItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			data.items.splice(i, 1);
			break;
		}
	}
}

//Cheating
function cheat() {
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "human alteration app": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub"};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "haa": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub", artist: "Art by Aya",};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "princess quest": {
			if (checkBody("sub") != true) {
				var goof = {index: "elizabeth", artist: "Art by Neromashin",};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "rainy dayz": {
			if (checkBody("sub") != true) {
				var goof = {index: "jill", artist: "Unknown artist",};
				data.bodytypes.push(goof);
			}
			else {
				goof = "null";
			}
			break;
		}
		case "new name": {
			data.player.currentScene = "renamingRoom";
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	if (goof == "null") {
		writeText("You've already used this code before.");
	}
}

function writeWardrobe() {
	if (checkItem("Lady") == true) {
		if (checkBody("lady") == false) {
			var goof = {index: "lady", artist: "Art by Nusumenaihxseki",};
			data.bodytypes.push(goof);
		}
	}
	for (i = 0; i < data.bodytypes.length; i++) {
		writeMed("scripts/gamefiles/characters/"+data.bodytypes[i].index+".jpg", data.bodytypes[i].artist);
		writeFunction("changeBody('"+i+"')", data.bodytypes[i].index);
	}
}

function checkBody(n) {
	console.log("Now checking for bodytype " + n);
	for (i = 0; i < data.bodytypes.length; i++) {
		if (data.bodytypes[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function changeBody(n) {
	data.player.character = data.bodytypes[n].index;
	data.player.characterArtist = data.bodytypes[n].artist;
	updateMenu();
}

//Phone
function notification() {
	writeText("Bzzt! You got a text!");
	document.getElementById('phoneButton').innerHTML = "PHONE(*)";
	document.getElementById('phoneButtonMobile').innerHTML = "PHONE(*)";
}

function writePhoneSpeech (name, img, text) {
	if (img == "") {
		img = name;
	}
	if (name == "player") {
		img = data.player.character;
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName + ' ' + data.story[i].lName
		}
	}
	document.getElementById('phoneRight').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			scripts/gamefiles/profiles/`+ img +`.jpg
		">
		<p class = "textName">`+ name + `</p>
		<p class = "selfDesc">` + text + `</p>
	</div>
	<br>
	`
}

function writePhoneImage (img, cap) {
	console.log("writing phone image "+cap);
	if (imagesDisabled != true) {
		document.getElementById('phoneRight').innerHTML += `
			<img class="phonePicture" src="` + img + `" title="` + cap + `">
			<br>
		`;
	}
	var savedImage = {name: cap, src: img,};
	if (checkPhoneImages(cap) == false) {
		data.phoneImages.push(savedImage);
		console.log("Unlocked image "+savedImage.name);
	}
}

function writePhoneChoices (text1, text2, text3) {
	if (textStage == 0) {
		var choiceList = `
				<div id = "phoneChoice">
				<p class="choiceText" onclick="phoneChoice('A')">
					` + text1 + `
				</p>
				<p class="choiceText" onclick="phoneChoice('B')">
					` + text2 + `
				</p>
		`;
		if (typeof text3 != 'undefined') {
			choiceList += `
				<p class="choiceText" onclick="phoneChoice('C')">
					` + text3 + `
				</p>
		`;
		}
		choiceList += `
			</div>
		`;
		document.getElementById('phoneRight').innerHTML += choiceList;
	}
}

function generateContacts() {
	console.log("contacts generated");
	data.player.lastText = 100;
	document.getElementById('phoneLeft').innerHTML = ``;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].textEvent!= "") {
			document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchContact('`+i+`')">` + data.story[i].fName + `</p>`;
			data.player.lastText = i;
		}
	}
	if (data.player.lastText != 100) {
		switchContact(data.player.lastText);
	}
	else {
		document.getElementById('phoneWindow').innerHTML = "PHONE";
	}
	if (imagesDisabled != true) {
		document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "phoneImages()">Saved Images</p>`;
	}
}

function switchContact(n) {
	phoneRight.scrollTop = 0;
	console.log("contact switched");
	document.getElementById('phoneRight').innerHTML = '';
	document.getElementById('phoneWindow').innerHTML = data.story[n].fName;
	data.player.lastText = n;
	writePhoneEvent(data.story[data.player.lastText].textEvent);
}

function phoneImages() {
	phoneRight.scrollTop = 0;
	data.phoneImages.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
	console.log("viewing phone images");
	document.getElementById('phoneWindow').innerHTML = "SAVED IMAGES";
	document.getElementById('phoneRight').innerHTML = '';
	for (i = 0; i < data.phoneImages.length; i++) {
		writePhoneImage(data.phoneImages[i].src, data.phoneImages[i].name);
		document.getElementById('phoneRight').innerHTML += '<p class="choiceText" onclick="deleteImage('+i+')">DELETE</p>';
	}
}

function checkPhoneImages(n) {
	console.log("checking phone images for "+n);
	for (i = 0; i < data.phoneImages.length; i++) {
		if (data.phoneImages[i].name.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function deleteImage(n) {
	data.phoneImages.splice(n, 1);
	phoneImages();
}

function phoneChoice(n) {
	document.getElementById('phoneRight').innerHTML = '';
	data.story[data.player.lastText].textEvent += n;
	writePhoneEvent(data.story[data.player.lastText].textEvent);
}
