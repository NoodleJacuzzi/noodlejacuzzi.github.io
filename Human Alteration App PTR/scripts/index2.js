var picturesDisabled = false;
var saveName;
var randNum;
var tempScene = "";
var activeWindow = "";

var data = {
	player: {
		name: "You",
		body: "male",
		image: "",
		clothing: "menShorts",
		underwear: "nothing",
		version: 1,
		currentScene: "start",
		time: "Evening",
		money: 20,
		route: "dom",
		skill: 0,
		flags: "",
		color: "#86b4dc",
		pervert: false,
	},
	style: {
		dialogue: "basic",
		menu: "basic",
		choices: "basic",
		font: "basic",
		imageSize: 1,
		fontSize: 1,
	},
	story: [
		{index: "mother", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "sister", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "friend", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "teacher", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "chef", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "office", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "exotic", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "clothes", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "candy", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "bully", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "evil", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "camboi", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "neighbor", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "doll", name: "???", trust: 0, outfit: "", flags: "",},
	],
	inventory: [],
	gallery: [],
}

var clothingArray = [
	{name: "Nothing", image: "scripts/gamefiles/none.png", lewd: true, category: "none", description: "nothing."}, 
	{name: "Button-up", image: "images/real/clothes/menShorts.jpg", lewd: false, category: "men", description: "a casual button-up shirt and a pair of shorts."}, 
	{name: "Black", image: "images/real/clothes/menBlack.jpg", lewd: false, category: "men", description: "an all-black outfit."}, 
	{name: "Drawstring", image: "images/real/clothes/menDrawstring.jpg", lewd: false, category: "men", description: "a casual white outfit with drawstring pants."}, 
	{name: "Jacket", image: "images/real/clothes/menJacket.jpg", lewd: false, category: "men", description: "an outdoorsy looking outfit."}, 
	{name: "Bikini", image: "images/real/clothes/bikini.jpg", lewd: false, category: "women", description: "a yellow bikini, perfect for a trip to the beach."}, 
	{name: "Blue Sweater", image: "images/real/clothes/blue.jpg", lewd: false, category: "women", description: "a blue sweater and jeans."}, 
	{name: "Bodypaint", image: "images/real/clothes/bodypaint.jpg", lewd: true, category: "lewd", description: "a fake set of clothes made out of paint."}, 
	{name: "Bottomless", image: "images/real/clothes/bottomless.jpg", lewd: true, category: "lewd", description: "a black sweater, but nothing to cover your ass or privates."}, 
	{name: "Red Coat", image: "images/real/clothes/coatCasual.jpg", lewd: false, category: "women", description: "a comfy red coat, a black v-neck shirt and jeans."}, 
	{name: "Skimpy Dress", image: "images/real/clothes/dressSkimpy.jpg", lewd: true, category: "lewd", description: "a blue dress which barely covers your nipples."}, 
	{name: "Exercise", image: "images/real/clothes/exercise.jpg", lewd: false, category: "women", description: "a workout outfit."}, 
	{name: "Fishnet", image: "images/real/clothes/fishnet.jpg", lewd: true, category: "lewd", description: "a fishnet shirt clearly displaying your breasts."}, 
	{name: "Latex", image: "images/real/clothes/latex.jpg", lewd: true, category: "lewd", description: "a latex outfit."}, 
	{name: "Maid Uniform", image: "images/real/clothes/maid.jpg", lewd: false, category: "women", description: "a maid uniform."}, 
	{name: "Microbikini", image: "images/real/clothes/microbikini.jpg", lewd: true, category: "lewd", description: "a microbikini that hardly covers any skin."}, 
	{name: "College Student", image: "images/real/clothes/schoolCollege.jpg", lewd: false, category: "women", description: "a sweater, leggings, and a large scarf."},
	{name: "Sissy", image: "images/real/clothes/sissy.jpg", lewd: false, category: "women", description: "a pink skirt."},  
	{name: "Superheroine", image: "images/real/clothes/superhero.jpg", lewd: true, category: "lewd", description: "a superheroine outfit."}, 
	{name: "Sweater", image: "images/real/clothes/sweater.jpg", lewd: false, category: "women", description: "a grey sweater."},  
	{name: "Trailer-Park Whore", image: "images/real/clothes/trailer.jpg", lewd: true, category: "lewd", description: "a top and shorts cut so short you could flash someone by shifting your weight."},  
	{name: "Transparent Shirt", image: "images/real/clothes/transparent.jpg", lewd: true, category: "lewd", description: "a transparent shirt."},  
	{name: "Transparent Bikini", image: "images/real/clothes/transparentbikini.jpg", lewd: true, category: "lewd", description: "a transparent bikini."},  
	{name: "Transparent Dress", image: "images/real/clothes/transparentShort.jpg", lewd: true, category: "lewd", description: "a transparent dress."}, 
];

var galleryArray = [
	{index: 'mom1', name: "Experimentation", hint: 'Complete the prologue.'},
	{index: 'mom2', name: "Maid from Heaven", hint: 'Mom corruption level 1. This automatically triggers in the morning.'},
	{index: 'mom3', name: "Bedhead", hint: 'Mom corruption level 2. Talk to her during the day.'},
	{index: 'mom4', name: "Impregnation", hint: 'Mom corruption level 3 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'mom5', name: "Deep Cleaning", hint: 'Mom corruption level 4. Requires Plug Pop. Talk to her during the day.'},
	{index: 'mom6', name: "Bathroom Break", hint: 'Watersports Content! Mom corruption level 4. Requires Fruit Gushers. Talk to her during the day.'},
	{index: 'mom7', name: "Morning Pee", hint: 'Watersports Content! Mom corruption level 4. Automatically triggers in the mornning. Choose "stay inside".'},
	{index: 'sister1', name: "Unwashed", hint: 'Sister corruption level 1. Talk to her during the day.'},
	{index: 'sister2', name: "Anal Solo", hint: 'Sister corruption level 2. Requires Adult Toy. Talk to her during the day.'},
	{index: 'sister3', name: "Anal Full", hint: 'Sister corruption level 3 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'sister4', name: "Plugged", hint: 'Sister corruption level 4. Requires plug pop. Talk to her during the day.'},
	{index: 'sister5', name: "Anal Horse", hint: 'Sister corruption level 4. Requires horse toy and stretchy taffy. Talk to her during the day after triggering the event "Plugged".'},
	{index: 'sister6', name: "Family Dinner", hint: 'Sister corruption level 5 and Mom corruption level 4. Talk to her during the day.'},
	{index: 'sister7', name: "Family Fun Time", hint: 'Sister corruption level 5 and Mom corruption level 4. Requires Pop Rocks. Talk to her during the day.'},
	{index: 'friend1', name: "Your Confession", hint: 'Classmate corruption level 2 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'friend2', name: "Her Confession", hint: 'Classmate corruption level 2. Talk to her again after the event Confession.'},
	{index: 'friend3', name: "Gateway Candy", hint: 'Classmate corruption level 3. Requires Caramel Melt. Talk to her during the day.'},
	{index: 'friend4', name: "Popping Cherries", hint: 'Classmate corruption level 4. Talk to her during the day.'},
	{index: 'friend5', name: "Tables Turned", hint: 'Classmate corruption level 5 (requires skill level of master). Requires Stretchy Taffy. Talk to her during the day.'},
	{index: 'teacher1', name: "Breaststroke", hint: 'Teacher corruption level 1. Talk to her during the day.'},
	{index: 'teacher2', name: "Swllowing Improves Health", hint: 'Teacher corruption level 2 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'teacher3', name: "Curricular Fun", hint: 'Teacher corruption level 3. Talk to her during the day.'},
	{index: 'teacher4', name: "Extracurricular Fun", hint: 'Teacher corruption level 4 (requires skill level of master). Talk to her during the day.'},
	{index: 'teacher5', name: "Bathroom Duty", hint: 'Watersports content! Teacher corruption level 5. Talk to her during the day.'},
	{index: 'office1', name: "Hidden Fantasy", hint: 'Office woman corruption level 1 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'office2', name: "Left Overnight", hint: 'Office woman corruption level 2. Talk to her during the day.'},
	{index: 'office3', name: "Checkup", hint: 'Office woman corruption level 2. Talk to her again after the Left Overnight event.'},
	{index: 'office4', name: "Permanent Fixture", hint: 'Office woman corruption level 3 (requires skill level of master). Talk to her during the day.'},
	{index: 'chef1', name: "Creamer", hint: 'Coffee shop owner corruption level 1. Requires Creamer. Talk to her during the day.'},
	{index: 'chef2', name: "From the Tap", hint: 'Coffee shop owner corruption level 2. Talk to her during the day.'},
	{index: 'chef3', name: "Restaurant's Closed", hint: 'Coffee shop owner corruption level 3. Talk to her during the day.'},
	{index: 'misc1', name: "Adriana Special", hint: 'After purchasing all three tickets, purchase the special deal in the exotic shop. Increases skill level to advanced.'},
	{index: 'misc2', name: "Adriana Special 2", hint: 'After purchasing all other items in the exotic shop, purchase the second special deal in the exotic shop.'},
	{index: 'misc3', name: "Gina Special", hint: 'After purchasing the clothing ticket, go to the clothing shop.'},
	{index: 'misc4', name: "Gina Special 2", hint: 'After purchasing the clothing ticket, purchase the special deal in the clothing shop.'},
	{index: 'misc5', name: "Human Onahole", hint: 'Go to the streets with skill level of advanced. Requires Onahole. Increases skill level to master.'},
	{index: 'mom1S', name: "Sister's Experiment", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'mom2S', name: "Desperate Maid", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'mom3S', name: "Loving Milk-Tank", hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'sister1S', name: "Taste of Revenge", hint: 'After reaching corruption level 2 with all other characters, talk to her with a Pop Rock.'},
	{index: 'sister2S', name: "Punishment", hint: 'Talk to her with a Pop Rock after completing the event "Taste of Revenge".'},
	{index: 'sister3S', name: "Tokyo Pop", hint: 'Talk to her after learning about the Tokyo Pop filming and after completing the event "Punishment".'},
	{index: 'sister4S', name: "New Toy", hint: 'Talk to her after triggering the event "Student Teacher Dynamic".'},
	{index: 'sister5S', name: "Pushing Limits", hint: 'Talk to her after triggering the event "New Toy".'},
	{index: 'friend1S', name: "Confession Interrupted", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'friend2S', name: "Bathroom Stall", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'friend3S', name: "Love Letter", hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'friend4S', name: "True Romance", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'teacher1S', name: "Hungry Eyes", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'teacher2S', name: "Disfunction", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'teacher3S', name: "Exploration", hint: 'Corruption level 3. Talk to her during the day with a Plug Pop.'},
	{index: 'teacher4S', name: "Sounding", hint: 'Corruption level 3. Talk to her during the day with a Stretchy Taffy.'},
	{index: 'teacher5S', name: "Student Teacher Dynamic", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'office1S', name: "Public Indecency", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'office2S', name: "Public Flasher", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'office3S', name: "Superhero", hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'office4S', name: "Public Punishment", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'chef1S', name: "Rewarding Meal", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'chef2S', name: "Direct Feeding", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'chef3S', name: "Food Preparation", hint: 'Corruption level 3. Talk to her during the day with a Pop Rock.'},
	{index: 'chef4S', name: "Enjoying the Work", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'doll1', name: "Awakening", hint: 'Purchase the doll, then talk to her in your room.'},
	{index: 'doll2', name: "Frustrations", hint: 'Talk to the her at least a day after completing the event "Awakening".'},
	{index: 'doll3', name: "Borrowed", hint: 'Talk to the her at least a day after completing the event "Frustrations".'},
	{index: 'misc1S', name: "Take a Break", hint: 'Complete the prologue'},
];

var logbookArray = [
	{
		index: "mother", 
		desc: "N/A",
		color: "#B38D8A",
	},
	{
		index: "sister", 
		desc: "N/A",
		color: "#F5D193",
	},
	{
		index: "friend", 
		desc: "N/A",
		color: "#BC0219",
	},
	{
		index: "teacher", 
		desc: "N/A",
		color: "#F5D193",
	},
	{
		index: "chef", 
		desc: "N/A",
		color: "#81666F",
	},
	{
		index: "office", 
		desc: "N/A",
		color: "#F9A4A4",
	},
	{
		index: "exotic", 
		desc: "N/A",
		color: "#DD7677",
	},
	{
		index: "clothes", 
		desc: "N/A",
		color: "#DE5D47",
	},
	{
		index: "candy", 
		desc: "N/A",
		color: "#DF7FA5",
	},
	{
		index: "evil", 
		desc: "N/A",
		color: "#6C019E",
	},
	{
		index: "bully", 
		desc: "N/A",
		color: "#FFD800",
	},
	{
		index: "camboi", 
		desc: "N/A",
		color: "#2D70FF",
	},
	{
		index: "neighbor", 
		desc: "N/A",
		color: "#00843D",
	},
];

var menuArray = [
	{ID: "invButton", name:"INVENTORY", func: "generateWindow('inventory')", div: "buttonMenuPrimary"},
	{ID: "logButton", name:"LOGBOOK", func: "generateWindow('logbook')", div: "buttonMenuPrimary"},
	{ID: "saveButton", name:"SAVE/LOAD", func: "generateWindow('save')", div: "buttonMenuPrimary"},
	{ID: "setButton", name:"SETTINGS", func: "generateWindow('settings')", div: "buttonMenuPrimary"},
	{ID: "restartButton", name:"RESTART", func: "restartButton()", div: "buttonMenu"},
	{ID: "mobButton", name:"MOBILE VERSION", func: "mobileButton()", div: "buttonMenu"},
];

var encounterArray = [
	{character: "mother", index: "", text: "", requirements: "", altName: "", altImage: "", altColor: ""}
];

var locationArray = [
	{index: "playerHouse", buttons: [
		{name: "Leave the Apartment", top: 79, left: 20, type: "location", target: "apartmentOutside", time: "Evening",},
	],},
];

var shopArray = [
	{type: "candy", price: 5, route: "domsub", index: "popRocks", name: "Pop Rocks", desc: ""},
	{type: "candy", price: 5, route: "domsub", index: "caramelMelts", name: "Caramel Melts", desc: ""},
	{type: "candy", price: 5, route: "domsub", index: "plugPops", name: "Plug Pops", desc: ""},
	{type: "candy", price: 5, route: "domsub", index: "stretchyTaffy", name: "Stretchy Taffy", desc: ""},
	{type: "candy", price: 5, route: "domsub", index: "fruitGushers", name: "Fruit Gushers", desc: ""},
	{type: "exotic", price: 5, route: "domsub", index: "vrMachine", name: "Virtual Reality Headset", desc: ""},
	{type: "exotic", price: 5, route: "domsub", index: "laptop", name: "Laptop", desc: ""},
	{type: "exotic", price: 5, route: "dom", index: "creamer", name: "Coffee Creamer", desc: ""},
	{type: "exotic", price: 5, route: "dom", index: "toy", name: "Adult Toy", desc: ""},
	{type: "exotic", price: 5, route: "dom", index: "horse", name: "Horse Toy", desc: ""},
	{type: "exotic", price: 5, route: "dom", index: "onahole", name: "Onahole Toy", desc: ""},
	{type: "exotic", price: 5, route: "domsub", index: "candyTicket", name: "Candy Ticket", desc: ""},
	{type: "exotic", price: 5, route: "dom", index: "clothingTicker", name: "Clothing Ticket", desc: ""},
	{type: "exotic", price: 5, route: "sub", index: "beautyTicket", name: "Beauty Ticket", desc: ""},
	
	{type: "clothesMale", price: 5, route: "dom", index: "menShorts", name: "Button-up", desc: "a casual button-up shirt and a pair of shorts."},
	{type: "clothesMale", price: 5, route: "dom", index: "menBlack", name: "Black", desc: "an all-black outfit."},
	{type: "clothesMale", price: 5, route: "dom", index: "menDrawstring", name: "Drawstring", desc: "a casual white outfit with drawstring pants."},
	{type: "clothesMale", price: 5, route: "dom", index: "menJacket", name: "Jacket", desc: "an outdoorsy looking outfit."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "bikini", name: "Bikini", desc: "a yellow bikini, perfect for a trip to the beach."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "blue", name: "Blue Sweater", desc: "a blue sweater and jeans."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "bodypaint", name: "Bodypaint", desc: "a fake set of clothes made out of paint."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "bottomless", name: "Bottomless", desc: "a black sweater, but nothing to cover your ass or privates."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "coatCasual", name: "Red Coat", desc: "a comfy red coat, a black v-neck shirt and jeans."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "dressSkimpy", name: "Skimpy Dress", desc: "a blue dress which barely covers your nipples."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "exercise", name: "Exercise", desc: "a workout outfit."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "fishnet", name: "Fishnet", desc: "a fishnet shirt clearly displaying your breasts."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "latex", name: "Latex", desc: "a latex outfit."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "maid", name: "Maid Uniform", desc: "a maid uniform."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "microbikini", name: "Microbikini", desc: "a microbikini that hardly covers any skin."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "schoolCollege", name: "College Student", desc: "a sweater, leggings, and a large scarf."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "sissy", name: "Sissy", desc: "a pink skirt."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "superhero", name: "Superheroine", desc: "a superheroine outfit."},
	{type: "clothesTrapTrans", price: 5, route: "dom", index: "sweater", name: "Sweater", desc: "a grey sweater."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "trailer", name: "Trailer-Park Whore", desc: "a top and shorts cut so short you could flash someone by shifting your weight."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "transparent", name: "Transparent Shirt", desc: "a transparent shirt."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "transparentbikini", name: "Transparent Bikini", desc: "a transparent bikini."},
	{type: "clothesTrapTransLewd", price: 5, route: "dom", index: "transparentShort", name: "Transparent Dress", desc: "a transparent dress."},
	{type: "clothesSub", price: 5, route: "sub", index: "dress", name: "Black Dress", desc: "a thin black dress that barely goes down your thighs."},
	{type: "clothesSub", price: 5, route: "sub", index: "skirt", name: "Skirt", desc: "a thin black dress that barely goes down your thighs."},
	{type: "clothesSub", price: 5, route: "sub", index: "schoolgirl", name: "Schoolgirl", desc: "a thin black dress that barely goes down your thighs."},
	{type: "underwearMale", price: 5, route: "dom", index: "boxers", name: "Boxers", desc: "a slightly-worn pair of boxers."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Black Panties", desc: "a pair of black panties."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Dong Hammock", desc: "a pair of panties that tries its best to smuggle your fruit."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Pink Panties", desc: "a pair of pink panties."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Skimpy Thong", desc: "a small thong."},
	{type: "underwearSub", price: 5, route: "dom", index: "panties", name: "Panties", desc: "a tight pair of white panties that have been altered to cradle your balls."},
	{type: "underwearSub", price: 5, route: "dom", index: "frilly", name: "Frilly Panties", desc: "a tight pair of frilly panties that have been altered to cradle your balls."},
	{type: "underwearSub", price: 5, route: "dom", index: "thong", name: "Packed Thong", desc: "an extremely tight thong that barely contains your flaccid dick."},
];

//Startup & Systems config

function startup() {
	generateHTML();
	saveSlot(11);
	wrapper.scrollTop = 0;
	if(localStorage.getItem('data10')) {
		//loadSlot(10);
		sceneTransition('start');
	}
	else{
		sceneTransition('start');
	}
}

function generateHTML() {
	//console.log("Now generating HTML foundation");
	document.getElementById('body').innerHTML = `
		<div id = "menu" class = "menu">
			<div id="titlePanel">
				<p id = "title" class = "title">Human Alteration App</p>
				<div id="closeButton" class="closeButton" onclick="closeButton()"><</div>
				<p id = "version" class = "version">V1.1</p>
				<p id = "author">
					<a href="https://noodlejacuzzi.github.io/index.html">Noodle Jacuzzi</a><br>
					<a href="https://www.patreon.com/noodlejacuzzi">Patreon</a>
				</p>
			</div>
			<div id="buttonMenu">
				<div id="buttonMenuPrimary" class="flexbox">
				</div>
			</div>
			<div id="playerPanel" class="flexbox">
				<img id="playerImage" class="playerImage" src="scripts/gamefiles/none.png">
				<div id="playerStats">
					<h3 id = "playerName" class = "char_player version">???</h3>
					<p id = "playerMoney" class = "version">$0</p>
				</div>
				<img id="playerClothes" class="playerImage" src="scripts/gamefiles/none.png">
				<div id="corruptionList">
				</div>
			</div>
		</div>
		<div id="openButton" class="openButton" onclick="openButton()">></div>
		<div id = "windowHolder" class = "windowHolder">
		</div>
		<div id = "wrapper" class = "wrapper">
			<div id="wrapperBG"></div>
			<div id = "output" class = "output">
			<div class="loader"></div> 
			</div>
			<div id="footer" class="footer">
			</div>
		</div>
	`;
	updateMenu();
}

function disablePictures() {
	if (picturesDisabled == false) {
		picturesDisabled = true;
		updateMenu();
		writeText("<i>Images disabled. No further images aside from navigation and dialogue profiles will appear.</i>");
	}
	else {
		location.reload();
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(11);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Character functions

function raiseTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('raising the trust of '+name+' by '+n);
			data.story[trustIndex].trust += n;
		}
	}
}

function setTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('setting the trust of '+name+' to '+n);
			data.story[trustIndex].trust = n;
		}
	}
}

function checkTrust(name) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			return data.story[trustIndex].trust;
		}
	}
}

function addFlag(character, flag) {
	console.log(character+flag);
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			console.log('adding the flag named '+flag+' to '+character);
			data.story[flagIndex].flags += flag;
		}
	}
}

function removeFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == true) {
				console.log('Removing flag '+flag+' from '+character);
				data.story[flagIndex].flags = data.story[flagIndex].flags.replace(flag, "");
			}
			else {
				console.log('error! flag '+flag+' not found!');
			}
		}
	}
}

function checkFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}

function replaceCodenames(text) {
	var codenameCheck = "";
	while (text.includes('playerF') == true) {
	text = text.replace('playerF', name);
	}
	while (text.includes('playerGender') == true) {
	text = text.replace('playerGender', gender);
	}
	while (text.includes('playerG') == true) {
	text = text.replace('playerG', gender);
	}
	while (text.includes('playerMan') == true) {
	text = text.replace('playerMan', gender);
	}
	while (text.includes('playerTitle') == true) {
	text = text.replace('playerTitle', title);
	}
	while (text.includes('playerT') == true) {
	text = text.replace('playerT', title);
	}
	while (text.includes('playerMister') == true) {
	text = text.replace('playerMister', title);
	}
	while (text.includes('playerHonorific') == true) {
	text = text.replace('playerHonorific', honorific);
	}
	while (text.includes('playerH') == true) {
	text = text.replace('playerH', honorific);
	}
	while (text.includes('playerSir') == true) {
	text = text.replace('playerSir', honorific);
	}
	switch (data.player.pronoun) {
		case "man": {
			while (text.includes('he') == true) {
			text = text.replace('he', 'he');
			}
			while (text.includes('He') == true) {
			text = text.replace('He', 'He');
			}
			while (text.includes('HE') == true) {
			text = text.replace('HE', 'HE');
			}
			while (text.includes('his') == true) {
			text = text.replace('his', 'his');
			}
			while (text.includes('His') == true) {
			text = text.replace('His', 'His');
			}
			while (text.includes('HIS') == true) {
			text = text.replace('HIS', 'HIS');
			}
			while (text.includes('man') == true) {
			text = text.replace('man', 'man');
			}
			while (text.includes('Man') == true) {
			text = text.replace('Man', 'Man');
			}
			while (text.includes('MAN') == true) {
			text = text.replace('MAN', 'MAN');
			}
			while (text.includes('him') == true) {
			text = text.replace('him', 'him');
			}
			while (text.includes('Him') == true) {
			text = text.replace('Him', 'Him');
			}
			while (text.includes('HIM') == true) {
			text = text.replace('HIM', 'HIM');
			}
			while (text.includes('boy') == true) {
			text = text.replace('boy', 'boy');
			}
			while (text.includes('Boy') == true) {
			text = text.replace('Boy', 'Boy');
			}
			while (text.includes('BOY') == true) {
			text = text.replace('BOY', 'BOY');
			}
			while (text.includes('guy') == true) {
			text = text.replace('guy', 'guy');
			}
			while (text.includes('Guy') == true) {
			text = text.replace('Guy', 'Guy');
			}
			while (text.includes('GUY') == true) {
			text = text.replace('GUY', 'GUY');
			}
			while (text.includes('mister') == true) {
			text = text.replace('mister', 'mister');
			}
			while (text.includes('Mister') == true) {
			text = text.replace('Mister', 'Mister');
			}
			while (text.includes('MISTER') == true) {
			text = text.replace('MISTER', 'MISTER');
			}
			while (text.includes('sir') == true) {
			text = text.replace('sir', 'sir');
			}
			while (text.includes('Sir') == true) {
			text = text.replace('Sir', 'Sir');
			}
			while (text.includes('SIR') == true) {
			text = text.replace('SIR', 'SIR');
			}
			while (text.includes('male') == true) {
			text = text.replace('male', 'male');
			}
			while (text.includes('Male') == true) {
			text = text.replace('Male', 'Male');
			}
			while (text.includes('MALE') == true) {
			text = text.replace('MALE', 'MALE');
			}
			while (text.includes('geezer') == true) {
			text = text.replace('geezer', 'geezer');
			}
			while (text.includes('Geezer') == true) {
			text = text.replace('Geezer', 'Geezer');
			}
			while (text.includes('GEEZER') == true) {
			text = text.replace('GEEZER', 'GEEZER');
			}
			while (text.includes('master') == true) {
			text = text.replace('master', 'master');
			}
			while (text.includes('Master') == true) {
			text = text.replace('Master', 'Master');
			}
			while (text.includes('MASTER') == true) {
			text = text.replace('MASTER', 'MASTER');
			}
			break;
		}
		case "woman": {
			while (text.includes('he') == true) {
			text = text.replace('he', 'she');
			}
			while (text.includes('He') == true) {
			text = text.replace('He', 'She');
			}
			while (text.includes('HE') == true) {
			text = text.replace('HE', 'SHE');
			}
			while (text.includes('his') == true) {
			text = text.replace('his', 'her');
			}
			while (text.includes('His') == true) {
			text = text.replace('His', 'Her');
			}
			while (text.includes('HIS') == true) {
			text = text.replace('HIS', 'HER');
			}
			while (text.includes('man') == true) {
			text = text.replace('man', 'woman');
			}
			while (text.includes('Man') == true) {
			text = text.replace('Man', 'Woman');
			}
			while (text.includes('MAN') == true) {
			text = text.replace('MAN', 'WOMAN');
			}
			while (text.includes('him') == true) {
			text = text.replace('him', 'her');
			}
			while (text.includes('Him') == true) {
			text = text.replace('Him', 'Her');
			}
			while (text.includes('HIM') == true) {
			text = text.replace('HIM', 'HER');
			}
			while (text.includes('boy') == true) {
			text = text.replace('boy', 'girl');
			}
			while (text.includes('Boy') == true) {
			text = text.replace('Boy', 'Girl');
			}
			while (text.includes('BOY') == true) {
			text = text.replace('BOY', 'GIRL');
			}
			while (text.includes('guy') == true) {
			text = text.replace('guy', 'girl');
			}
			while (text.includes('Guy') == true) {
			text = text.replace('Guy', 'Girl');
			}
			while (text.includes('GUY') == true) {
			text = text.replace('GUY', 'GIRL');
			}
			while (text.includes('mister') == true) {
			text = text.replace('mister', 'miss');
			}
			while (text.includes('Mister') == true) {
			text = text.replace('Mister', 'Miss');
			}
			while (text.includes('MISTER') == true) {
			text = text.replace('MISTER', 'MISS');
			}
			while (text.includes('sir') == true) {
			text = text.replace('sir', "ma'am");
			}
			while (text.includes('Sir') == true) {
			text = text.replace('Sir', "Ma'am");
			}
			while (text.includes('SIR') == true) {
			text = text.replace('SIR', "MA'AM");
			}
			while (text.includes('male') == true) {
			text = text.replace('male', 'female');
			}
			while (text.includes('Male') == true) {
			text = text.replace('Male', 'Female');
			}
			while (text.includes('MALE') == true) {
			text = text.replace('MALE', 'FEMALE');
			}
			while (text.includes('geezer') == true) {
			text = text.replace('geezer', 'hag');
			}
			while (text.includes('Geezer') == true) {
			text = text.replace('Geezer', 'Hag');
			}
			while (text.includes('GEEZER') == true) {
			text = text.replace('GEEZER', 'HAG');
			}
			while (text.includes('master') == true) {
			text = text.replace('master', 'mistress');
			}
			while (text.includes('Master') == true) {
			text = text.replace('Master', 'Mistress');
			}
			while (text.includes('MASTER') == true) {
			text = text.replace('MASTER', 'MISTRESS');
			}
			break;
		}
	}
	for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
		codenameCheck = data.story[codenameIndex].index + "F";
		text = text.replace(codenameCheck, data.story[codenameIndex].fName);
		codenameCheck = data.story[codenameIndex].index + "L";
		text = text.replace(codenameCheck, data.story[codenameIndex].lName);
	}
	if (data.player.oowoo == true) {
		while (text.includes('<br>') == true) {
		text = text.replace('<br>', 'TESTTHING');
		}
		while (text.includes('th') == true) {
		text = text.replace('th', 'd');
		}
		while (text.includes('Th') == true) {
		text = text.replace('Th', 'D');
		}
		while (text.includes('what') == true) {
		text = text.replace('what', 'wat');
		}
		while (text.includes('What') == true) {
		text = text.replace('What', 'Wat');
		}
		while (text.includes('l') == true) {
		text = text.replace('l', 'w');
		}
		while (text.includes('r') == true) {
		text = text.replace('r', 'w');
		}
		while (text.includes('L') == true) {
		text = text.replace('L', 'W');
		}
		while (text.includes('R') == true) {
		text = text.replace('R', 'W');
		}
		while (text.includes('TESTTHING') == true) {
		text = text.replace('TESTTHING', '<br>');
		}
		switch (getRandomInt(15)) {
			case 0:
				text = text + " ♥w♥";
			break;
			case 1:
				text = text + " (˘ω˘)";
			break;
			case 2:
				text = text + " (U ᵕ U❁)";
			break;
			case 3:
				text = text + " ( ˊ.ᴗˋ )";
			break;
			case 4:
				text = text + " ( ͡o ꒳ ͡o )";
			break;
			case 5:
				text = text + " ( ´ω` )۶";
			break;
			case 6:
				text = text + " OwO";
			break;
			case 7:
				text = text + " (*ฅ́˘ฅ̀*)";
			break;
			case 8:
				text = text + " ( ͡o ᵕ ͡o )";
			break;
			case 9:
				text = text + " ✧･ﾟ: *✧･ﾟ♡*(ᵘʷᵘ)*♡･ﾟ✧*:･ﾟ✧";
			break;
			case 10:
				text = text + " ★⌒ヽ(˘꒳˘ *)";
			break;
			case 11:
				text = text + " (◕ ˬ ◕✿)";
			break;
			case 12:
				text = text + " (◕∇◕✿)";
			break;
			case 13:
				text = text + " (ꈍ ᴗ ꈍ✿)";
			break;
			case 14:
				text = text + " (◕‸ ◕✿) *pout*";
			break;
			case 15:
				text = text + " (≖ ︿ ≖ ✿)";
			break;
		}
	}
	return(text);
}

function renameCharacter(target, scene) {
	switch (target) {
		case "player":
		var goof = document.getElementById('nameSubmission').value;
		data.player.name = goof;
		break;
		case "prologueSkip":
		var goof = document.getElementById('nameSubmission0').value;
		data.player.name = goof;
		for (i = 0; i < 6; i++) {
			var sheet = 'nameSubmission' + i + '1';
			data.story[i].name = document.getElementById(sheet).value;
		}
		case "all":
			for (i = 0; i < data.story.length; i++) {
				var sheet = 'nameSubmission' + i + '1';
				data.story[i].name = document.getElementById(sheet).value;
			}
		break;
		default:
		var goof = document.getElementById('nameSubmission').value;
		for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
			if (data.story[characterIndex].index == target) {
				data.story[characterIndex].name = goof;
			}
		}
	}
	sceneTransition(scene);
}

//Scene creation
function checkRequirements(string) {
	var finalJudgement = true;
	while (string.includes("!location ") == true) {
		var check = string.split(`!location `).pop().split(`;`)[0];
		if (check.includes(data.player.location) == true) {
			finalResult = false;
		}
		string = string.replace(`!location `+check+`;`, ``);
	}
	while (string.includes("?location ") == true) {
		var check = string.split(`?location `).pop().split(`;`)[0];
		if (check.includes(data.player.location) != true) {
			finalResult = false;
		}
		string = string.replace(`?location `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		if (checkItem(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!item `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		if (checkItem(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?item `+check+`;`, ``);
	}
	while (string.includes("!skill ") == true) {
		var check = string.split(`!skill `).pop().split(`;`)[0];
		if (data.player.skill >= check) {
			finalResult = false;
		}
		string = string.replace(`!skill `+check+`;`, ``);
	}
	while (string.includes("?skill ") == true) {
		var check = string.split(`?skill `).pop().split(`;`)[0];
		if (data.player.skill < check) {
			finalResult = false;
		}
		string = string.replace(`?skill `+check+`;`, ``);
	}
	while (string.includes("!time ") == true) {
		var check = string.split(`!time `).pop().split(`;`)[0];
		if (data.player.time == check) {
			finalResult = false;
		}
		string = string.replace(`!time `+check+`;`, ``);
	}
	while (string.includes("?time ") == true) {
		var check = string.split(`?time `).pop().split(`;`)[0];
		if (data.player.time != check) {
			finalResult = false;
		}
		string = string.replace(`?time `+check+`;`, ``);
	}
	while (string.includes("?flag player ") == true) {
		var check = string.split(`?flag player `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?flag player  `+check+`;`, ``);
	}
	while (string.includes("!flag player ") == true) {
		var check = string.split(`!flag player `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!flag player  `+check+`;`, ``);
	}
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		var corruptionTarget = data.story[characterIndex].index;
		while (string.includes("?trust "+corruptionTarget) == true) {
			var check = string.split(`?trust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) != check) {
				finalResult = false;
			}
			string = string.replace(`?trust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?minTrust "+corruptionTarget) == true) {
			var check = string.split(`?minTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) < check) {
				finalResult = false;
			}
			string = string.replace(`?minTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?maxTrust "+corruptionTarget) == true) {
			var check = string.split(`?maxTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) > check) {
				finalResult = false;
			}
			string = string.replace(`?maxTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!flag "+corruptionTarget) == true) {
			var check = string.split(`!flag `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkFlag(corruptionTarget, check) == true) {
				finalResult = false;
			}
			string = string.replace(`!flag `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?flag "+corruptionTarget) == true) {
			var check = string.split(`?flag `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkFlag(corruptionTarget, check) != true) {
				finalResult = false;
			}
			string = string.replace(`?flag `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	if (finalResult == true) {
		return string;
	}
	else {
		return false;
	}
}

function changeLocation(n) {
	document.getElementById('output').innerHTML = ``;
	var locationTarget = 'failed';
	for (i = 0; i < locationArray.length; i++) { //find the location target
		if (n == locationArray[i].index) {
			console.log('Location target found. Now loading location '+locationArray[i].index)
			locationTarget = i;
		}
	}
	if (locationTarget == 'failed') { //error message;
		document.getElementById('output').innerHTML = '';
		writeText("You encountered a bug! Error code: locationTargetFailed - "+n);
		writeText("Send me a message with where you were and what button you clicked on, thanks!");
		writeFunction("changeLocation('playerHouse')", "Go Back Home");
	}
	else {
		var bg = "images/locations/" + locationArray[locationTarget].index + ".jpg";
		changeBG(locationArray[locationTarget].bg);
		if (data.player.time == "Night" && data.player.location != "playerHouse") {
			n = 'playerHouse';
		}
		document.getElementById('output').innerHTML += `
			<div class="playerRoom">
				<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
			</div>
		`;
		data.player.location = n;
		console.log(data.player.location);
		for (i = 0; i < locationArray[locationTarget].buttons.length; i++) {
			if (locationArray[locationTarget].buttons[i].time.includes(data.player.time)) {
				printLocationButton(
					locationArray[locationTarget].buttons[i].name, 
					locationArray[locationTarget].buttons[i].top, 
					locationArray[locationTarget].buttons[i].left, 
					locationArray[locationTarget].buttons[i].target, 
				);
			}
		}
		checkForEncounters();
	}
	writeScene(n);
}

function changeBG() {
	document.getElementById('wrapperBG').style.backgroundImage = "url("+n+")";
}

function printLocationButton(name, top, left, target) {
	switch (data.player.menu) {
		case "lobotomy": {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='changeLocation("`+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%; border: 3px solid; border-radius: 0px;">`+name+`</div>
			`;
			break;
		}
		case "persona": {
			var ransomStringStart = name;
			ransomStringStart = ransomStringStart.toLowerCase();
			ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
			console.log(ransomStringStart);
			var ransomStringEnd = "";
			if (ransomStringStart.charAt(2) == "g" || ransomStringStart.charAt(2) == "v") {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 1:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(5deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					console.log(ransomStringEnd);
					ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			else {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 1:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(-15deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					//console.log(ransomStringEnd);
						ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButtonPersona" onclick='changeLocation("`+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+ransomStringEnd+`</div>
			`;
			break;
		}
		default: {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='changeLocation("`+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+name+`</div>
			`;
		}
	}
}

function checkForEncounters() {
	for (encounterIndex = 0; encounterIndex < encounterArray.length; encounterIndex++) {
		var requirements = checkRequirements(encounterArray[encounterIndex].requirements);
		if (requirements != false) {
			switch (encounterArray[encounterIndex].type) {
				case "button": {
					printEncounterButton(
					encounterArray[encounterIndex].text, 
					encounterArray[encounterIndex].top, 
					encounterArray[encounterIndex].left, 
					encounterArray[encounterIndex].index
					);
					break;
				}
				case "message": {
					writeText(encounterArray[encounterIndex].text);
					break;
				}
				default: {
					if (finalResult == true) {
						printEncounterTab(
						encounterArray[encounterIndex].character, 
						encounterArray[encounterIndex].index,
						encounterArray[encounterIndex].text,
						encounterArray[encounterIndex].altName,
						encounterArray[encounterIndex].altImage,
						encounterArray[encounterIndex].altColor
						);
					}
				}
			}
		}
	}
}

function printEncounterTab(character, scene, text, altName, altImage, altColor) {
	console.log("Now generating tab for " + name + ", linking to scene " + scene + " with the text " + text + " " +altImage);
	writeSpeech(character, "", `
	<p class="switch" onclick="sceneTransition('`+scene+`')">` + replaceCodenames(text) + `</p>`,
	altName, altImage, altColor);
}

function writeHTML(text) {
	//Separate the text into lines
	var lines = text.split('\n');
	//For each of these lines
	for(var lineCounter = 0;lineCounter < lines.length;lineCounter++){
		//Remove all tabs from the line, in case we use tab spacing
		while (lines[lineCounter].includes('\t') == true) {
			lines[lineCounter] = lines[lineCounter].replace(`\t`, ``);
		}
		//Check for requirements
		lines[lineCounter] = checkRequirements(lines[lineCounter]);
		//If the line is not empty (we don't want to print empty lines)
		if (lines[lineCounter] != "" && lines[lineCounter] != false) {
			//Grab the first word of the line to use as the command
			var command = lines[lineCounter].replace(/ .*/,'');
			//Depending on which command, execute different code. Convert the command to lowercase as well in case we used Sp instead of sp, as js is case-sensitive.
			switch (command.toLowerCase()) {
				//If the command is "t"
				case "t": {
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					//Execute the writeText command to print everything left to the screen.
					writeText(lines[lineCounter]);
					//Don't execute any of the below switch cases.
					break;
				}
				case "sp": {
					//Get the name of our speaker
					var name = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; im" is in our code we want to specify a specific profile image, so use that. Otherwise set the image variable blank so it can be automatically found.
					if (lines[lineCounter].includes("; im")) {
						var image = lines[lineCounter].split(`im `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`im `+image+`; `, ``);
					}
					else {
						var image = "";
					}
					//If "; altName" is in our code we want to use an alternate name for the character, so use that. Otherwise set the altName variable blank.
					if (lines[lineCounter].includes("; altName")) {
						var altName = lines[lineCounter].split(`altName `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altName `+altName+`; `, ``);
					}
					else {
						var altName = "";
					}
					//If "; altColor" is in our code we want to specify a specific color for the character, so use that. Otherwise set the altColor variable blank.
					if (lines[lineCounter].includes("; altColor")) {
						var altColor = lines[lineCounter].split(`altColor `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altColor `+altColor+`; `, ``);
					}
					else {
						var altColor = "";
					}
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `+name+`; `, ``);
					//Execute the writeSpeech command to print everything we have left.
					//TODO: Add custom colors and custom names
					writeSpeech(name, image, lines[lineCounter], altName, altColor);
					break;
				}
				case "im": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; cap" is in our code we want to attach a caption to our image. Otherwise leave the caption blank.
					if (lines[lineCounter].includes("; cap")) {
						var caption = lines[lineCounter].split(`cap `).pop().split(`;`)[0];
					}
					else {
						var caption = "";
					}
					//Bring up the image on screen. Since we aren't printing the line itself we don't need to clean it by removing commands.
					writeBig(location, caption);
					break;
				}
				case "b": {
					//Get the label of our button
					var name = lines[lineCounter].split(`b `).pop().split(`;`)[0];
					//Get the function we want our button to perform
					var func = lines[lineCounter].split(`f `).pop().split(`;`)[0];
					//If "; arg" is in our code we want the function to have a special argument. Otherwise leave the argument section blank.
					if (lines[lineCounter].includes("; arg")) {
						var argument = lines[lineCounter].split(`arg `).pop().split(`;`)[0];
					}
					else {
						var argument = "";
					}
					//Write the button to the screen using the information we've collected.
					writeFunction(func+"('"+argument+"')", name)
					break;
				}
				//This is for convenience. If the line is just an elipses, replace it with a horizontal line cutting across the screen.
				case "...": {
					writeText("<hr>");
					break;
				}
				//If the command isn't found in the list above then the code can't be parsed (understood), print an error code in red.
				default: {
					writeText("<span style='color:red'>Unknown command. The line '"+lines[lineCounter]+"' could not be parsed.");
				}
			}
		}
	}
}

function writeText(text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 20px 200px;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='rawText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeCenteredText(text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 20px 200px;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpeech (name, img, text, altName, altColor) {
	var finalName = "";
	var finalImg = "";
	var finalColor = "";
	var checkForError = "";
	//If the player is using a shortcut...
	if (img == "") {
		finalImg = "images/"+name+"/"+name+".jpg";
	}
	else {
		if (img.includes("images") != true) {
			finalImg = "images/"+name+"/"+img;
		}
		else {
			finalImg = img;
		}
	}
	//Check for pervert mode
	if (data.player.pervert == true) {
		var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`P.jpg'"`;
		finalImg = finalImg.replace('.jpg', 'P.jpg');
	}
	//Check if a transparent shot should be used
	if (data.player.style == "persona" || data.player.style == "royalty") {
		var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`.jpg'"`;
		finalImg = finalImg.replace('P.jpg', '.jpg');
		finalImg = finalImg.replace('.jpg', 'T.png');
	}
	//Search the data variable for if a shortcut was used
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			finalName = data.story[i].fName + ' ' + data.story[i].lName;
			finalColor = data.story[i].color;
		}
	}
	//If the name is player, use the player's details
	if (name == "player") {
		finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		finalName = data.player.name;
		switch (data.player.color) {
			case null:
			case "":
			data.player.color = "#86b4dc"
			default:
			finalColor = data.player.color;
		}
	}
	if (img == "none") {
		finalImg = "images/none.png";
	}
	//HIDDEN shortcut for crypto to mask the name of the character
	if (text.includes("HIDDEN") == true) {
		finalName = "???";
		text = text.replace("HIDDEN", "");
	}
	//Check if an alternate final color should be used.
	if (altColor != null && altColor != "") {
		finalColor = altColor;
	}
	//Check if an alternate final name should be used.
	if (altName != null && altName != "") {
		finalName = altName;
	}
	//Output the speech in the assigned style.
	switch (data.style.dialogue) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxLobotomy" style="border-color: `+finalColor+`;
			background: linear-gradient(90deg, 
			#000000 10px, 
			`+finalColor+` 10px, 
			`+finalColor+` 210px, 
			#000000 210px);">
				<div class = "lobotomyThumb" style="background-color: `+finalColor+`">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ finalImg +`
						"`+checkForError+`>
					</div>
					<p class = "textNameLobotomy">`+ finalName + `</p>
				</div>
				<div class="textBoxContentLobotomy">
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxRoyalty">
				<div class = "royaltyThumb">
					<div class = "royaltyImageHolder">
						<img class = "textThumbRoyalty" style="
							position:absolute;
							-webkit-filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);
							filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);"
						src = "`+finalImg+`"`+checkForError+`>
						<img class = "textThumbRoyalty" src = "`+finalImg+`"`+checkForError+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+finalColor+`;">
						<p class = "textNameRoyalty" style = "color:`+finalColor+`;">`+finalName+`</p>
					</div>
				</div>
				<div class="textBoxContentRoyalty">
					<div class="dialogueBoxRoyalty" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxPersona">
				<div class = "personaThumb">
					<img class = "textThumbPersona" src = "`+finalImg+`"`+checkForError+`>
				</div>
				<div class="textBoxContentPersona">
					<div class="nameBoxPersona">
						<p class = "textNamePersona" style = "color:`+finalColor+`">`+ finalName + `</p>
						<div class="textNamePersonaWhite" style = "border-color:`+finalColor+`"></div>
						<div class="textNamePersonaBlack"></div>
						<div class="personaNameArrow"></div>
						<div class="personaNameArrowShadow" style = "border-right-color:`+finalColor+`"></div>
					</div>
					<div class="dialogueBoxPersona" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML +=`
			<div class="textBox" style="border-color: `+finalColor+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+finalColor+`" src = "
					`+ finalImg +`
				"`+checkForError+`>
				<div class="textBoxContent">
				<p class = "textName" style="color:`+finalColor+`">`+ finalName + `</p>
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
		}
	}
}

function writeBig (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			img = img.replace('profile', 'profileP');
			//console.log(img);
		}
	}
	if (picturesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="bigPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
			<br>
		`;
	}
}

function writeMed (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			img = img.replace('profile', 'profileP');
			//console.log(img);
		}
	}
	if (picturesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
			<br>
		`;
	}
}

function writeFunction (name, func) {
	switch (data.style.choices) {
		case "lobotomy": {
			var skewNumber = getRandomInt(8);
			skewNumber -= 4;
			var borderNumber = getRandomInt(2) + 3;
			var rotationNumber = getRandomInt(2) -1;
			if (skewNumber >= 0) {
				skewNumber += getRandomInt(3);
			}
			if (skewNumber <= 0) {
				skewNumber -= getRandomInt(3);
			}
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			var rotationReverse = rotationNumber - rotationNumber - rotationNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFrameLobotomy" 
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
				border: solid `+borderNumber+`px;
			">
			<p class="choiceTextLobotomy" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			onclick="` + name + `">
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		case "persona": {
			var skewNumber = 5;
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFramePersona" onclick="` + name + `"
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
			">
			<p class="choiceTextPersona" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			>
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="` + name + `">
					` + replaceCodenames(func) + `
				</p>
			`;
		}
	}
}

function credits() {
	
}

function sceneTransition(scene) {
	wrapper.scrollTop = 0;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	saveSlot(10);
}

//Creating & Deleting windows

function deleteWindow() {
	activeWindow = "";
	document.getElementById('windowHolder').innerHTML = ``;
}

function generateWindow(type) {
	activeWindow = type;
	document.getElementById('windowHolder').innerHTML = `
	<div class = 'windowBackdrop' onclick = 'deleteWindow()'>
		<div id = 'window' class = 'popup' onclick="event.stopPropagation()"></div>
	</div>
	`;
	switch (type) {
		case "string": {
			document.getElementById('window').innerHTML += `
			<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
			<div id = "windowList" class="saveList">
			<p>Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.</p>
			<p>`+JSON.stringify(data)+`</p>
			</div>`;
			break;
		}
		case "save": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
				<div id = "windowList" class="saveList">
				</div>
			`;
			for (saveCounter = 1; saveCounter < 9; saveCounter++) {
				document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save`+saveCounter+`Name" class = "saveName">Slot `+saveCounter+`</p>
					<p id = "save`+saveCounter+`Date" class = "saveDate"></p>
					<p id = "load`+saveCounter+`Button" class = "loadButton button" onclick = "loadSlot(`+saveCounter+`)"></p>
					<p id = "delete`+saveCounter+`Button" class = "deleteButton button" onclick = "deleteSlot`+saveCounter+`)"></p>
					<p id = "save`+saveCounter+`Button" class = "saveButton button" onclick = "saveSlot(`+saveCounter+`)">SAVE</p>
				</div>
				`;
			}
			document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Manual</p>
					<!-- <p id = "load9Button" class = "loadFileButton button" onclick = "loadFile()">Load from text string</p>
					<!-- <p id = "delete9Button" class = "deleteButton button" onclick = "deleteSlot(9)"></p> -->
					<!-- <p id = "save9Button" class = "saveFileButton button" onclick = "saveFile()">Save to text string</p> -->
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveTXT()">Save to .txt file</p>
					<input type="file" id="loadFile" onload="fileLoaded()" class = "loadFileButton button" onchange = "loadSave()"></input>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">String</p>
					<p id = "load9Button" class = "loadFileButton button" onclick = "loadString()">Load from text string</p>
					<!-- <p id = "delete9Button" class = "deleteButton button" onclick = "deleteSlot(9)"></p> -->
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveString()">Save to text string</p>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Auto</p>
					<p class = "loadFileButton button" onClick="window.location.reload();">The game autosaves regularly. Refresh the page to load the autosave anytime.</p>
				</div>
			`;
			generateSave();
			break;
		}
		case "inventory": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">Inventory</h1>
				<div id = "gridInventory" class="gridInventory">
				</div>
			`;
			for (i = 0; i < data.inventory.length; i++) {
				document.getElementById('gridInventory').innerHTML += `
				<div class = "item">
					<p class = "itemName">`+data.inventory[i].name+`</p>
					<img class ="itemImage" src="`+data.inventory[i].image+`">
				<div>
				`;
			}
			break;
		}
		case "logbook": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">LOGBOOK</h1>
				<div class = "logbookLeft" id = "windowLeft">
				</div>
				<div class = "logbookRight" id = "windowRight">
				</div>
			`;
			//generateSelf();
			break;
		}
		case "settings": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SETTINGS</h1>
			`;
			break;
		}
		case "wardrobe": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">WARDROBE</h1>
				<div class = "logbookLeft" id = "windowLeft">
				</div>
				<div class = "logbookRight" id = "windowRight">
				</div>
			`;
			generateClothes();
			break;
		}
	}
}

//Menu

function updateMenu() {
	//Update player name, image, color, money
	document.getElementById('playerName').innerHTML = data.player.name;
	document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";
	document.getElementById('playerClothes').src = "images/clothes/"+data.player.clothing+".jpg";
	//Update corruption listfor (i = 0; i < data.story.length; i++) {
	document.getElementById('corruptionList').innerHTML = `
		<h3 class = "char_player version">Corruption</h3>
	`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].name != "???" && data.story[i].trust != 0) {
			document.getElementById('corruptionList').innerHTML += `<p>`+data.story[i].name+`: `+data.story[i].trust+`</p>`;
		}
	}
	//Update menu buttons
	document.getElementById('buttonMenu').innerHTML = `<div id="buttonMenuPrimary" class="flexbox"></div>`;
	switch (data.style.menu) {
		default: {
			for (i = 0; i < menuArray.length; i++) {
				document.getElementById(menuArray[i].div).innerHTML += `
					<h4 id="`+menuArray[i].ID+`" class="button" onclick="`+menuArray[i].func+`">`+menuArray[i].name+`</h4>
				`;
			}
		}
	}
}

function changeBody(n) {
	//change data.player.body
	//change data.player.image
	//updateMenu
	//check if big player image exists, if so update it
}

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "400px";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Saving

function transferToNewEngine() {
	//player name, player body, version, clothing, underwear, currentScene, time, money, route, skill
	//flags: freeSample, exoticVisited, candyVisited, clothingVisited, salonVisited, laptopSetup,
	//Inventory
	//mother
	//sister
	//friend
	//teacher
	//office
	//chef
	//doll
	//clothing
	//underwear
	//gallery
}

function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	switch (data.player.route) {
		case "dom": {
			date = date.toDateString() + " " + date.toLocaleTimeString() + "<br>Dom Route";
			if (data.player.flags.includes("vegetarian") == true) {
				date += " (Vegetarian)";
			}
			break;
		}
		case "sub": {
			date = date.toDateString() + " " + date.toLocaleTimeString() + "<br>Sub Route";
			break;
		}
		default: {
			date = date.toDateString() + " " + date.toLocaleTimeString();
			break;
		}
	}
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	//deleteWindow();
	if (activeWindow == "save") {
		generateSave();
	}
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	sceneTransition(data.player.currentScene);
	updateSave();
	deleteWindow();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function saveString() {
	deleteWindow();
	generateWindow("string");
}

function loadString() {
	var dataPlaceholder = prompt("Please paste the data", "");
	dataPlaceholder = JSON.parse(dataPlaceholder);
	if (dataPlaceholder == "") {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(111);
	}
	else {
		data = dataPlaceholder;
		updateSave();
		saveSlot(110);
		loadSlot(110);
	}
}

function saveToFile() {
	
}

function loadFromFile() {
	
}

function fileLoaded() {
	
}

function generateSave() {
	for (i = 1; i < 9; i++) {
		var searchName = 'data' + i;
		//console.log(localStorage.getItem(searchName));
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
	if (typeof data.story.version == 'undefined') {
		if (typeof data.player.version == 'undefined') {
			if (data.story.route == "sub") {
				data.galleryArray[2].name = "Loving Milk-Tank";
				data.galleryArray[5].name = "Punishment";
				data.galleryArray[6].name = "Tokyo Pop";
				data.galleryArray[6].hint = 'Talk to her after learning about the Tokyo Pop filming and after completing the event "Punishment".'
				data.galleryArray[10].name = "True Romance";
				data.galleryArray[14].hint = 'Corruption level 3. Talk to her during the day with a Plug Pop.'
				data.galleryArray[15].name = "Sounding";
				data.galleryArray[15].hint = 'Corruption level 3. Talk to her during the day with a Stretchy Taffy.'
				data.galleryArray[16].name = "Fisting";
				data.galleryArray[16].hint = 'Corruption level 4. Talk to her during the day.'
				data.galleryArray[24].hint = "Corruption level 3. Talk to her during the day with a Pop Rock.";
				data.galleryArray[25].hint = "Corruption level 4. Talk to her during the day.";
				data.galleryArray[3].name = "REMOVED";
				data.galleryArray.splice(3, 1);
				data.galleryArray.splice(10, 1);
				data.galleryArray.splice(15, 1);
				data.galleryArray.splice(18, 1);
				data.galleryArray.splice(22, 1);
			}
			else {
				data.galleryArray.splice(31, 1);
			}
			data.story.version = 0.7;
			console.log("Updating save to version 0.7");
		}
	}
	if (data.story.version == 0.7) {
		if (data.story.route == "sub") {
			var office4 = {index: 'office4S', name: "Public Punishment", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'};
			var sister4 = {index: 'sister4S', name: "New Toy", unlocked: false, hint: 'Talk to her after triggering the event "Student Teacher Dynamic".'};
			var sister5 = {index: 'sister5S', name: "Pushing Limits", unlocked: false, hint: 'Talk to her after triggering the event "New Toy".'};
			data.galleryArray.push(office4);
			data.galleryArray.push(sister4);
			data.galleryArray.push(sister5);
			data.story.freeSample = false;
			data.galleryArray[14].name = "Student Teacher Dynamic";
		}
		data.story.version = 0.75;
		console.log("Updating save to version 0.7.5");
	}
	if (data.story.version == 0.75) {
		if (data.story.route == "dom") {
			data.galleryArray.splice(41, 5);
		}
		if (data.story.route == "sub") {
			console.log(data.galleryArray[35].index);
			console.log(data.galleryArray[26].index);
			data.galleryArray.splice(35, 5);
			data.galleryArray.splice(26, 4);
		}
		data.story.version = 0.8;
		console.log("Updating save to version 0.8");
		alert("Older version save data detected. Your save data has been automatically updated for version 0.8");
	}
	if (data.story.version == 0.8) {
		console.log("ver 1.0 save detected, updating");
		var newSaveContainer = {
			player: {
				name: "You",
				body: "male",
				image: "",
				clothing: "menShorts",
				underwear: "nothing",
				version: 1,
				currentScene: "start",
				time: "Afternoon",
				money: 20,
				route: "dom",
				skill: 0,
				flags: "",
				color: "#86b4dc",
				pervert: false,
			},
			style: {
				dialogue: "basic",
				menu: "basic",
				choices: "basic",
				font: "basic",
				imageSize: 1,
				fontSize: 1,
			},
			story: [
				{index: "mother", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "sister", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "friend", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "teacher", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "chef", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "office", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "exotic", name: "Adriana", trust: 0, outfit: "", flags: "",},
				{index: "clothes", name: "Danny", trust: 0, outfit: "", flags: "",},
				{index: "candy", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "bully", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "evil", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "camboi", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "neighbor", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "doll", name: "???", trust: 0, outfit: "", flags: "",},
			],
			inventory: [],
			gallery: [],
		}
		newSaveContainer.player.name = data.story.name;
		newSaveContainer.player.version = 1.0;
		newSaveContainer.player.currentScene = data.story.currentScene;
		newSaveContainer.player.money = data.story.money;
		newSaveContainer.player.route = data.story.route;
		newSaveContainer.player.skill = data.story.skill;
		newSaveContainer.story[0].name = data.story.motherName;
		newSaveContainer.story[0].trust = data.story.motherScore;
		newSaveContainer.story[1].name = data.story.sisterName;
		newSaveContainer.story[1].trust = data.story.sisterScore;
		newSaveContainer.story[2].name = data.story.friendName;
		newSaveContainer.story[2].trust = data.story.friendScore;
		newSaveContainer.story[3].name = data.story.teacherName;
		newSaveContainer.story[3].trust = data.story.teacherScore;
		newSaveContainer.story[4].name = data.story.chefName;
		newSaveContainer.story[4].trust = data.story.chefScore;
		newSaveContainer.story[5].name = data.story.officeName;
		newSaveContainer.story[5].trust = data.story.officeScore;
		if (data.story.candyVisited == true) {
			newSaveContainer.story[7].name = "Gina";
		}
		switch (data.story.bodytype) {
			case 0: 
				newSaveContainer.player.body = "";
			break;
			case 1: 
				newSaveContainer.player.body = "male";
				newSaveContainer.player.clothing = "menShorts";
				newSaveContainer.player.underwear = "boxers";
			break;
			case 2: 
				newSaveContainer.player.body = "boi";
				newSaveContainer.player.clothing = "sissy";
				newSaveContainer.player.underwear = "regular5";
			break;
			case 3: 
				newSaveContainer.player.body = "trans";
				newSaveContainer.player.clothing = "blue";
				newSaveContainer.player.underwear = "regular7";
			break;
			case 4: 
				newSaveContainer.player.body = "sub";
				newSaveContainer.player.clothing = "dress";
				newSaveContainer.player.underwear = "panties";
			break;
		}
		if (data.story.popRocks > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "popRocks") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.caramelMelts > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "caramelMelts") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.plugPops > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "plugPops") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.stretchyTaffy > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "stretchyTaffy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.fruitGushers > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "fruitGushers") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.vrMachine == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "vrMachine") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.laptop == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "laptop") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.creamer == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "creamer") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.doll == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "doll") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.toy == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "toy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.horse == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "horse") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.onahole == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "onahole") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.clothingTicket == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "clothingTicket") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.candyTicket == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "candyTicket") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.clothingArray.length; oldIndex++) {
			if (data.clothingArray[oldIndex].owned == true) {
				for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
					if (data.clothingArray[oldIndex].name == shopArray[itemIndex].name) {
						var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
						newSaveContainer.inventory.push(addedItem);
					}
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.underwearArray.length; oldIndex++) {
			if (data.underwearArray[oldIndex].owned == true) {
				for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
					if (data.underwearArray[oldIndex].name == shopArray[itemIndex].name) {
						var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
						newSaveContainer.inventory.push(addedItem);
					}
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.galleryArray.length; oldIndex++) {
			//console.log("Scene detected. Unlocked status is "+data.galleryArray[oldIndex].unlocked);
			if (data.galleryArray[oldIndex].unlocked == true) {
				for (newIndex = 0; newIndex < galleryArray.length; newIndex++) {
					if (galleryArray[newIndex].index == data.galleryArray[oldIndex].index) {
						var newScene = {index: galleryArray[newIndex].index, name: galleryArray[newIndex].name};
						newSaveContainer.gallery.push(newScene);
					}
				}
			}
		}
		if (data.story.exoticVisited == true) {
			newSaveContainer.player.flags += "exoticVisited";
		}
		if (data.story.clothingVisited == true) {
			newSaveContainer.player.flags += "clothingVisited";
		}
		if (data.story.laptopSetup == true) {
			newSaveContainer.player.flags += "laptopSetup";
		}
		data = newSaveContainer;
	}
}

//Gallery

function generateGallery() {
	
}

function unlockScene(n) {
	
}

function galleryCheck(n) {
	
}

//Logbook

function generateNav() {
	
}

function switchDesc(n) {
	
}

function selfImage(n) {
	
}

function generateLogbookGallery(n) {
	
}

//Inventory & shopping

function loadShop(n) {
	
}

function purchaseItemTab(name, price, image, desc) {
	
}

function purchase(index) {
}

function flashMoney() {
	
}

function flashy() {
	
}

function addItem(index) {
	for (addItemIndex = 0; addItemIndex < shopArray.length; addItemIndex++) {
		if (shopArray[addItemIndex].index == index) {
			var addedItem = {type: shopArray[addItemIndex].type, index: shopArray[addItemIndex].index, name: shopArray[addItemIndex].name, desc: shopArray[addItemIndex].desc};
			data.items.push(addedItem);
		}
	}
}

function removeItem(index) {
	
}

function checkItem(index) {
	
}

function generateInv() {
	clearInv();
	for (i = 0; i < data.inventory.length; i++) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">`+data.inventory[i].name+`</p>
			<img class ="itemImage" src="`+data.inventory[i].image+`">
		<div>
		`;
	}
}

function clearInv() {
	document.getElementById('windowLeft').innerHTML = ""
	document.getElementById('windowRight').innerHTML = ""
}

//Wardrobe

function generateWardrobe() {
	
}

function checkClothes() {
	
}

function changeClothes() {
	
}