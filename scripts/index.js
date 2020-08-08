//Index.js
//Create variables
//When adding a new scene, update generateSelf for unlocking the scene
var slideShowCounter = 0;
var slideShow = [];

var games =[
	{index: "AV", title: "Anomaly Vault", sponsor: "Swallows999"},
	{index: "HU", title: "Hentai University", sponsor: ""},
	{index: "HAA", title: "Human Alteration App", sponsor: ""},
	{index: "RDZ", title: "Rainy DayZ", sponsor: ""},
	{index: "BM", title: "Bitch Medicenter", sponsor: ""},
	{index: "PQ", title: "Princess Quest", sponsor: ""},
];

var news =[
	{date: "8/7/20", game: "", headline: "The Master Index Updated", link: "https://noodlejacuzzi.github.io/", text: "The master index has recieved a facelift! Lemme know what you think, or if anything's broken!<br>The discord now uses roles in the place of @here pings, so feel free to drop in and sign up!"},
	{date: "7/24/20", game: "HU", headline: "Hentai University v12", link: "https://www.patreon.com/posts/39683865", text: "Added Hentai University's latest release to the index"},
	{date: "7/10/20", game: "RDZ", headline: "Rainy DayZ v3", link: "https://www.patreon.com/posts/39193031", text: "Added Rainy DayZ's latest release to the index"},
	{date: "5/22/20", game: "AV", headline: "Anomaly Vault v7", link: "https://www.patreon.com/posts/37422705", text: "Added Anomaly Vault's latest release to the index"},
	{date: "7/16/19", game: "BM", headline: "Bitch Medicenter Demo v2", link: "https://www.patreon.com/posts/29222676", text: "Added Bitch Medicenter's latest release to the index"},
	{date: "6/28/19", game: "HAA", headline: "Human Alteration App v1.0", link: "https://www.patreon.com/posts/27965721", text: "Added Human Alteration App's latest release to the index"},
	{date: "5/20/19", game: "PQ", headline: "Princess Quest v1.0", link: "https://mega.nz/#!Gl9whSBL!S0FswXAxehzhP3cMGOPa5-mp-CjFRtTHQ4-3BjCITX8", text: "Added Princess Quest's latest release to the index"},
];

var gamesAlreadyListed = "";

//Start & System Config Stuff
function startup() {
	sceneTransition("start");
}
function startupDesktop() {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/mobile.html'">Click here for the mobile version!</p>
	`;
	writeScene("start");
}

function openLink(n){
	var win = window.open(n, '_blank');
	win.focus();
}

function generateNews() {
	for (x = 0; x < news.length; x++) {
		document.getElementById('newsFeed').innerHTML += `
			`+news[x].date+` - <a href="`+news[x].link+`">`+news[x].headline+`</a>
			<br>
			`+news[x].text+`
			<hr>
		`;
		for (y = 0; y < games.length; y++) {
			console.log("Attempting to write news entry "+news[x].game+news[x].text);
			if (games[y].index == news[x].game && gamesAlreadyListed.includes(news[x].game) == false) {
				if (gamesAlreadyListed == "") {
					document.getElementById('wrapperBG').style.backgroundImage = "url(images/"+news[x].game+".png)";
				}
				gamesAlreadyListed += games[y].index;
				document.getElementById('noodleGames').innerHTML += `
					<div class="gameContainer" onclick="sceneTransition('`+games[y].index+`')">
						<img class="bigPicture" src="images/`+games[y].index+`.png">
						<div id = "game`+games[y].index+`" class="gameTitle">
							<p class="gameTitleText">`+games[y].title+`</p>
						</div>
					</div>
				`;
				if (games[y].sponsor != "") {
					document.getElementById('game'+games[y].index).innerHTML += `
						<img class="sponsor" src="images/greenCrown.png">
					`;
				}
			}
		}
	}
}

function generateGame() {
	document.getElementById('output').innerHTML += `
	`;
}

//Scene creation

function writeBig (img) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
}

function writeSlideshow(img){
	document.getElementById('output').innerHTML += `
	<div style="display: block;margin: auto;width:205.4px">
		<img src="images/leftArrow.png" onclick="slideshowLeft()">
		<img src="images/rightArrow.png" onclick="slideshowRight()">
	</div>
	<img id="slideshowImg" class="bigPicture" src="` + img + `">
	<br>
	`;
}

function slideshowLeft() {
	slideShowCounter -= 1;
	if (slideShowCounter < 0) {
		slideShowCounter = slideShow.length-1;
	}
	document.getElementById("slideshowImg").src = slideShow[slideShowCounter]; 
}

function slideshowRight() {
	slideShowCounter += 1;
	if (slideShowCounter > slideShow.length-1) {
		slideShowCounter = 0;
	}
	document.getElementById("slideshowImg").src = slideShow[slideShowCounter]; 
}

//Still need to do slideshow functionality and css

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + scene + `
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
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
}