//Index.js
//Create variables
//When adding a new scene, update generateSelf for unlocking the scene
var picturesDisabled = false;
var saveName;
var invHidden = true;
var saveHidden = true;
var warHidden = true;
var selfHidden = true;
var zombieInvShowing = false;
var imagesDisabled = false;
var incest = true;
var tokyo = false;
var randNum;
var endingChoices = {
	family: 1,
	friend: 1,
	teacher: 1,
	chef: 1,
	office: 1,
	sub: 0,
}
var endingsLocked = {
	family2: false,
	family3: false,
	friend2: false,
	friend3: false,
	teacher2: false,
	teacher3: false,
	chef2: false,
	chef3: false,
	office2: false,
	office3: false,
}
var data = {
	story: {
		name: "You", version: 0.8, freeSample: false,
		currentScene: "start", money: 20, route: "dom", skill: 0, playingGame: false,
		popRocks: 0, caramelMelts: 0, plugPops: 0, stretchyTaffy: 0, fruitGushers: 0, 
		vrMachine: false, princessGame: false, zombieGame: false, laptop: false, creamer: false, doll: false, toy: false, horse: false, onahole: false,
		beautyTicket: false, candyTicket: false, clothingTicket: false, 
		bodytype: 0, chestSize: 0, buttSize: 0, lipSize: 0, clothing: 1, underwear: 1,
		motherName: "???", motherScore: 0, motherReady: false, 
		sisterName: "???", sisterScore: 0, sisterReady: false, 
		friendName: "???", friendScore: 0, friendReady: false, 
		teacherName: "???", teacherScore: 0, teacherReady: false, 
		officeName: "???", officeScore: 0, officeReady: false, 
		chefName: "???", chefScore: 0, chefReady: false, 
		dollName: "???", dollScore: 0, dollReady: false, 
		vrName: "???", vrScore: 0, vrReady: false, vr1: false, vr2: false, vr3: false, vr4: false,
		exoticVisited: false, candyVisited: false, clothingVisited: false, salonVisited: false, laptopSetup: false, time: "day",
	},
	clothingArray: [
		{name: "Nothing", image: "scripts/gamefiles/none.png", lewd: true, category: "none", owned: true, description: "nothing."}, 
		{name: "Button-up", image: "images/real/clothes/menShorts.jpg", lewd: false, category: "men", owned: false, description: "a casual button-up shirt and a pair of shorts."}, 
		{name: "Black", image: "images/real/clothes/menBlack.jpg", lewd: false, category: "men", owned: false, description: "an all-black outfit."}, 
		{name: "Drawstring", image: "images/real/clothes/menDrawstring.jpg", lewd: false, category: "men", owned: false, description: "a casual white outfit with drawstring pants."}, 
		{name: "Jacket", image: "images/real/clothes/menJacket.jpg", lewd: false, category: "men", owned: false, description: "an outdoorsy looking outfit."}, 
		{name: "Bikini", image: "images/real/clothes/bikini.jpg", lewd: false, category: "women", owned: false, description: "a yellow bikini, perfect for a trip to the beach."}, 
		{name: "Blue Sweater", image: "images/real/clothes/blue.jpg", lewd: false, category: "women", owned: false, description: "a blue sweater and jeans."}, 
		{name: "Bodypaint", image: "images/real/clothes/bodypaint.jpg", lewd: true, category: "lewd", owned: false, description: "a fake set of clothes made out of paint."}, 
		{name: "Bottomless", image: "images/real/clothes/bottomless.jpg", lewd: true, category: "lewd", owned: false, description: "a black sweater, but nothing to cover your ass or privates."}, 
		{name: "Red Coat", image: "images/real/clothes/coatCasual.jpg", lewd: false, category: "women", owned: false, description: "a comfy red coat, a black v-neck shirt and jeans."}, 
		{name: "Skimpy Dress", image: "images/real/clothes/dressSkimpy.jpg", lewd: true, category: "lewd", owned: false, description: "a blue dress which barely covers your nipples."}, 
		{name: "Exercise", image: "images/real/clothes/exercise.jpg", lewd: false, category: "women", owned: false, description: "a workout outfit."}, 
		{name: "Fishnet", image: "images/real/clothes/fishnet.jpg", lewd: true, category: "lewd", owned: false, description: "a fishnet shirt clearly displaying your breasts."}, 
		{name: "Latex", image: "images/real/clothes/latex.jpg", lewd: true, category: "lewd", owned: false, description: "a latex outfit."}, 
		{name: "Maid Uniform", image: "images/real/clothes/maid.jpg", lewd: false, category: "women", owned: false, description: "a maid uniform."}, 
		{name: "Microbikini", image: "images/real/clothes/microbikini.jpg", lewd: true, category: "lewd", owned: false, description: "a microbikini that hardly covers any skin."}, 
		{name: "College Student", image: "images/real/clothes/schoolCollege.jpg", lewd: false, category: "women", owned: false, description: "a sweater, leggings, and a large scarf."},
		{name: "Sissy", image: "images/real/clothes/sissy.jpg", lewd: false, category: "women", owned: false, description: "a pink skirt."},  
		{name: "Superheroine", image: "images/real/clothes/superhero.jpg", lewd: true, category: "lewd", owned: false, description: "a superheroine outfit."}, 
		{name: "Sweater", image: "images/real/clothes/sweater.jpg", lewd: false, category: "women", owned: false, description: "a grey sweater."},  
		{name: "Trailer-Park Whore", image: "images/real/clothes/trailer.jpg", lewd: true, category: "lewd", owned: false, description: "a top and shorts cut so short you could flash someone by shifting your weight."},  
		{name: "Transparent Shirt", image: "images/real/clothes/transparent.jpg", lewd: true, category: "lewd", owned: false, description: "a transparent shirt."},  
		{name: "Transparent Bikini", image: "images/real/clothes/transparentbikini.jpg", lewd: true, category: "lewd", owned: false, description: "a transparent bikini."},  
		{name: "Transparent Dress", image: "images/real/clothes/transparentShort.jpg", lewd: true, category: "lewd", owned: false, description: "a transparent dress."}, 
	],
	underwearArray: [
		{name: "Nothing", image: "scripts/gamefiles/none.png", category: "none", owned: true, description: "nothing underneath your clothes. One wrong move and you could attract quite a bit of attention."}, 
		{name: "Boxers", image: "images/real/underwear/boxers.jpg", category: "men", owned: false, description: "a slightly-worn pair of boxers"}, 
		{name: "Black Panties", image: "images/real/underwear/erotic5.jpg", category: "women", owned: false, description: "a pair of black panties."}, 
		{name: "Dong Hammock", image: "images/real/underwear/regular7.jpg", category: "women", owned: false, description: "a pair of panties that tries its best to smuggle your fruit."}, 
		{name: "Pink Panties", image: "images/real/underwear/regular5.gif", category: "women", owned: false, description: "a pair of pink panties."}, 
		{name: "Skimpy Thong", image: "images/real/underwear/regular6.jpg", category: "lewd", owned: false, description: "a small thong."}, 
	],
	galleryArray: [
		{index: 'mom1', name: "Experimentation", unlocked: false, hint: 'Complete the prologue.'},
		{index: 'mom2', name: "Maid from Heaven", unlocked: false, hint: 'Mom corruption level 1. This automatically triggers in the morning.'},
		{index: 'mom3', name: "Bedhead", unlocked: false, hint: 'Mom corruption level 2. Talk to her during the day.'},
		{index: 'mom4', name: "Impregnation", unlocked: false, hint: 'Mom corruption level 3 (requires skill level of advanced). Talk to her during the day.'},
		{index: 'mom5', name: "Deep Cleaning", unlocked: false, hint: 'Mom corruption level 4. Requires Plug Pop. Talk to her during the day.'},
		{index: 'mom6', name: "Bathroom Break", unlocked: false, hint: 'Watersports Content! Mom corruption level 4. Requires Fruit Gushers. Talk to her during the day.'},
		{index: 'mom7', name: "Morning Pee", unlocked: false, hint: 'Watersports Content! Mom corruption level 4. Automatically triggers in the mornning. Choose "stay inside".'},
		{index: 'sister1', name: "Unwashed", unlocked: false, hint: 'Sister corruption level 1. Talk to her during the day.'},
		{index: 'sister2', name: "Anal Solo", unlocked: false, hint: 'Sister corruption level 2. Requires Adult Toy. Talk to her during the day.'},
		{index: 'sister3', name: "Anal Full", unlocked: false, hint: 'Sister corruption level 3 (requires skill level of advanced). Talk to her during the day.'},
		{index: 'sister4', name: "Plugged", unlocked: false, hint: 'Sister corruption level 4. Requires plug pop. Talk to her during the day.'},
		{index: 'sister5', name: "Anal Horse", unlocked: false, hint: 'Sister corruption level 4. Requires horse toy and stretchy taffy. Talk to her during the day after triggering the event "Plugged".'},
		{index: 'sister6', name: "Family Dinner", unlocked: false, hint: 'Sister corruption level 5 and Mom corruption level 4. Talk to her during the day.'},
		{index: 'sister7', name: "Family Fun Time", unlocked: false, hint: 'Sister corruption level 5 and Mom corruption level 4. Requires Pop Rocks. Talk to her during the day.'},
		{index: 'friend1', name: "Your Confession", unlocked: false, hint: 'Classmate corruption level 2 (requires skill level of advanced). Talk to her during the day.'},
		{index: 'friend2', name: "Her Confession", unlocked: false, hint: 'Classmate corruption level 2. Talk to her again after the event Confession.'},
		{index: 'friend3', name: "Gateway Candy", unlocked: false, hint: 'Classmate corruption level 3. Requires Caramel Melt. Talk to her during the day.'},
		{index: 'friend4', name: "Popping Cherries", unlocked: false, hint: 'Classmate corruption level 4. Talk to her during the day.'},
		{index: 'friend5', name: "Tables Turned", unlocked: false, hint: 'Classmate corruption level 5 (requires skill level of master). Requires Stretchy Taffy. Talk to her during the day.'},
		{index: 'teacher1', name: "Breaststroke", unlocked: false, hint: 'Teacher corruption level 1. Talk to her during the day.'},
		{index: 'teacher2', name: "Swllowing Improves Health", unlocked: false, hint: 'Teacher corruption level 2 (requires skill level of advanced). Talk to her during the day.'},
		{index: 'teacher3', name: "Curricular Fun", unlocked: false, hint: 'Teacher corruption level 3. Talk to her during the day.'},
		{index: 'teacher4', name: "Extracurricular Fun", unlocked: false, hint: 'Teacher corruption level 4 (requires skill level of master). Talk to her during the day.'},
		{index: 'teacher5', name: "Bathroom Duty", unlocked: false, hint: 'Watersports content! Teacher corruption level 5. Talk to her during the day.'},
		{index: 'office1', name: "Hidden Fantasy", unlocked: false, hint: 'Office woman corruption level 1 (requires skill level of advanced). Talk to her during the day.'},
		{index: 'office2', name: "Left Overnight", unlocked: false, hint: 'Office woman corruption level 2. Talk to her during the day.'},
		{index: 'office3', name: "Checkup", unlocked: false, hint: 'Office woman corruption level 2. Talk to her again after the Left Overnight event.'},
		{index: 'office4', name: "Permanent Fixture", unlocked: false, hint: 'Office woman corruption level 3 (requires skill level of master). Talk to her during the day.'},
		{index: 'chef1', name: "Creamer", unlocked: false, hint: 'Coffee shop owner corruption level 1. Requires Creamer. Talk to her during the day.'},
		{index: 'chef2', name: "From the Tap", unlocked: false, hint: 'Coffee shop owner corruption level 2. Talk to her during the day.'},
		{index: 'chef3', name: "Restaurant's Closed", unlocked: false, hint: 'Coffee shop owner corruption level 3. Talk to her during the day.'},
		{index: 'vr1', name: "Chapter 1", unlocked: false, hint: 'Complete chapter 1 of princess quest.'},
		{index: 'vr2', name: "Chapter 2", unlocked: false, hint: 'Complete chapter 2 of princess quest.'},
		{index: 'vr3', name: "Chapter 3", unlocked: false, hint: 'Complete chapter 3 of princess quest.'},
		{index: 'vr4', name: "Chapter 4", unlocked: false, hint: 'Complete chapter 4 of princess quest.'},
		{index: 'vr5', name: "Epilogue", unlocked: false, hint: 'Collect all of the secret items in princess quest.'},
		{index: 'misc1', name: "Adriana Special", unlocked: false, hint: 'After purchasing all three tickets, purchase the special deal in the exotic shop. Increases skill level to advanced.'},
		{index: 'misc2', name: "Adriana Special 2", unlocked: false, hint: 'After purchasing all other items in the exotic shop, purchase the second special deal in the exotic shop.'},
		{index: 'misc3', name: "Gina Special", unlocked: false, hint: 'After purchasing the clothing ticket, go to the clothing shop.'},
		{index: 'misc4', name: "Gina Special 2", unlocked: false, hint: 'After purchasing the clothing ticket, purchase the special deal in the clothing shop.'},
		{index: 'misc5', name: "Human Onahole", unlocked: false, hint: 'Go to the streets with skill level of advanced. Requires Onahole. Increases skill level to master.'},
	],
		zombieData: {
		scene: "",
		stamina: 3,
		wounded: false,
		infected: false,
		townZombie: true,
		cityZombie: true,
		factoryZombie: true,
		beastDisabled: false,
		rimDisabled: false,
		wormDisabled: false,
	},
		zombieInventory: [
	],
		zombieGallery: [
		{index: 'basic1', name: "Zombie Assault 1", unlocked: false, hint: 'Fight the zombie in the town with no stamina while not infected.'},
		{index: 'basic2', name: "Zombie Assault 2", unlocked: false, hint: 'Fight the zombie in the apartment basement with no stamina.'},
		{index: 'basic3', name: "Zombie Assault 3", unlocked: false, hint: 'Fight the zombie in the factory with no weapon while infected.'},
		{index: 'siren1', name: "Siren's Voice 1", unlocked: false, hint: 'While infected, use the flashlight in the factory.'},
		{index: 'siren2', name: "Siren's Voice 2", unlocked: false, hint: 'While infected, use the rope in the factory.'},
		{index: 'hunter1', name: "Hunter's Chase 1", unlocked: false, hint: 'While wounded and at no stamina, try to travel through the forest with a weapon.'},
		{index: 'hunter2', name: "Hunter's Chase 2", unlocked: false, hint: 'While wounded and without a weapon, try to travel through the forest.'},
		{index: 'horde1', name: "Horde Gangbang 1", unlocked: false, hint: 'Use the bag of marbles at the highway.'},
		{index: 'horde2', name: "Horde Gangbang 2", unlocked: false, hint: 'While infected and at full stamina, return to the highway after obtaining the food and water supplies.'},
		{index: 'worms1', name: "Infestation 1", unlocked: false, hint: 'Rest at the blue house with the air freshener in your inventory.'},
		{index: 'worms2', name: "Infestation 2", unlocked: false, hint: 'While infected, rest at the blue house with the air freshener in your inventory.'},
		{index: 'survivor', name: "Vaccination", unlocked: false, hint: 'While infected, talk to the fellow survivor in the red house.'},
		{index: 'tainted', name: "Tainted", unlocked: false, hint: 'Eat the infected food in the convenience store.'},
		{index: 'infected', name: "Infected Ending", unlocked: false, hint: 'Eat the infected food in the convenience store, then beat the game.'},
	],
}
var clothingSubArray = [
	{name: "Nothing", image: "images/drawn/clothes/naked.jpg", lewd: true, category: "none", owned: true, description: "nothing."}, 
	{name: "Black Dress", image: "images/drawn/clothes/dress.jpg", lewd: false, category: "none", owned: true, description: "a thin black dress that barely goes down your thighs."}, 
	{name: "Skirt", image: "images/drawn/clothes/skirt.jpg", lewd: false, category: "drawn", owned: false, description: "a thin black dress that barely goes down your thighs."}, 
	{name: "Schoolgirl", image: "images/drawn/clothes/schoolgirl.jpg", lewd: false, category: "drawn", owned: false, description: "a thin black dress that barely goes down your thighs."}, 
	//To check if the player is wearing lewd clothing, if (data.clothingArray[data.story.clothing].lewd == true)
];
var underwearSubArray = [
	{name: "Nothing", image: "images/drawn/clothes/commando.jpg", lewd: true, category: "none", owned: true, description: "nothing."}, 
	{name: "Panties", image: "images/drawn/clothes/panties.jpg", category: "none", owned: true, description: "a tight pair of white panties that have been altered to cradle your balls."}, 
	{name: "Frilly", image: "images/drawn/clothes/frilly.jpg", category: "drawn", owned: false, description: "a tight pair of white panties that have been altered to cradle your balls."}, 
	{name: "Thong", image: "images/drawn/clothes/thong.jpg", category: "drawn", owned: false, description: "a tight pair of white panties that have been altered to cradle your balls."}, 
];
var gallerySubArray = [
	{index: 'mom1S', name: "Sister's Experiment", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'mom2S', name: "Desperate Maid", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'mom3S', name: "Loving Milk-Tank", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'sister1S', name: "Taste of Revenge", unlocked: false, hint: 'After reaching corruption level 2 with all other characters, talk to her with a Pop Rock.'},
	{index: 'sister2S', name: "Punishment", unlocked: false, hint: 'Talk to her with a Pop Rock after completing the event "Taste of Revenge".'},
	{index: 'sister3S', name: "Tokyo Pop", unlocked: false, hint: 'Talk to her after learning about the Tokyo Pop filming and after completing the event "Punishment".'},
	{index: 'sister4S', name: "New Toy", unlocked: false, hint: 'Talk to her after triggering the event "Student Teacher Dynamic".'},
	{index: 'sister5S', name: "Pushing Limits", unlocked: false, hint: 'Talk to her after triggering the event "New Toy".'},
	{index: 'friend1S', name: "Confession Interrupted", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'friend2S', name: "Bathroom Stall", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'friend3S', name: "Love Letter", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'friend4S', name: "True Romance", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'teacher1S', name: "Hungry Eyes", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'teacher2S', name: "Disfunction", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'teacher3S', name: "Exploration", unlocked: false, hint: 'Corruption level 3. Talk to her during the day with a Plug Pop.'},
	{index: 'teacher4S', name: "Sounding", unlocked: false, hint: 'Corruption level 3. Talk to her during the day with a Stretchy Taffy.'},
	{index: 'teacher5S', name: "Student Teacher Dynamic", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'office1S', name: "Public Indecency", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'office2S', name: "Public Flasher", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'office3S', name: "Superhero", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'office4S', name: "Public Punishment", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'chef1S', name: "Rewarding Meal", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'chef2S', name: "Direct Feeding", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'chef3S', name: "Food Preparation", unlocked: false, hint: 'Corruption level 3. Talk to her during the day with a Pop Rock.'},
	{index: 'chef4S', name: "Enjoying the Work", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'doll1', name: "Awakening", unlocked: false, hint: 'Purchase the doll, then talk to her in your room.'},
	{index: 'doll2', name: "Frustrations", unlocked: false, hint: 'Talk to the her at least a day after completing the event "Awakening".'},
	{index: 'doll3', name: "Borrowed", unlocked: false, hint: 'Talk to the her at least a day after completing the event "Frustrations".'},
	{index: 'misc1S', name: "Take a Break", unlocked: false, hint: 'Complete the prologue'},
	{index: 'vr1', name: "Chapter 1", unlocked: false, hint: 'Complete chapter 1 of princess quest.'},
	{index: 'vr2', name: "Chapter 2", unlocked: false, hint: 'Complete chapter 2 of princess quest.'},
	{index: 'vr3', name: "Chapter 3", unlocked: false, hint: 'Complete chapter 3 of princess quest.'},
	{index: 'vr4', name: "Chapter 4", unlocked: false, hint: 'Complete chapter 4 of princess quest.'},
	{index: 'vr5', name: "Epilogue", unlocked: false, hint: 'Collect all of the secret items in princess quest.'},
];

var zombie = {
}

var items = [
	{name: "Baseball Bat", image: "images/real/items/baseballBat.jpg", description: "A tough wooden bat. Without this, you'd be helpless in a fight.",},
	{name: "Medical Kit", image: "images/real/items/medicalKit.jpg", description: "A medical kit that will patch you up if you're hurt.",},
	{name: "Factory Key", image: "images/real/items/key.jpg", description: "A key labeled 'Woodridge Factory Gate'.",},
	{name: "House Key", image: "images/real/items/key.jpg", description: "A key labeled with an address in town. It's probably for that blue house you saw earlier.",},
	{name: "Bag of Marbles", image: "images/real/items/bagOfMarbles.jpg", description: "A bag of marbles. They make a loud noise when thrown.",},
	{name: "Rope", image: "images/real/items/rope.jpg", description: "A small coil of rope. Too small to use for climbing, but you could make a trap from it.",},
	{name: "Flashlight", image: "images/real/items/flashlight.jpg", description: "A blindingly bright flashlight.",},
	{name: "Air Freshener", image: "images/real/items/airFreshener.jpg", description: "Smells like lemons.",},
	{name: "Snack", image: "images/real/items/snack.jpg", description: "Some unexpired food, eating it will restore stamina.",},
	{name: "Food Supply", image: "images/real/items/foodSupply.jpg", description: "A month's worth of food. You'll need to take this back to the safehouse.",},
	{name: "Water Supply", image: "images/real/items/waterSupply.jpg", description: "A month's worth of water. You'll need to take this back to the safehouse.",},
];

//Start & System Config Stuff
function startup() {
	saveSlot(11);
	document.getElementById("inventory").style.visibility = "hidden"; 
	document.getElementById("save").style.visibility = "hidden"; 
	document.getElementById("self").style.visibility = "hidden"; 
	document.getElementById("wardrobe").style.visibility = "hidden"; 
	gameMode = "dialogue";
	hidePrincess();
	init();
	//alert(data.story.currentScene);
	//console.log(data);
	if(localStorage.getItem('data10')) {
		loadSlot(10);
	}
	else{
		sceneTransition('start');
	}
}

function disablePictures() {
	document.getElementById("playerImage").style.visibility = "hidden";		
	document.getElementById("playerImage").style.width = "0%";
	document.getElementById("playerImage").style.border = "none";
	document.getElementById("playerClothes").style.visibility = "hidden";		
	document.getElementById("playerClothes").style.width = "0%";
	document.getElementById("playerClothes").style.border = "none";
	document.getElementById("playerUnderwear").style.visibility = "hidden";		
	document.getElementById("playerUnderwear").style.width = "0%";
	document.getElementById("playerUnderwear").style.border = "none";
	imagesDisabled = true;
	sceneTransition(data.story.currentScene);
	document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		endingChoices = {family: 1, friend: 1, teacher: 1, chef: 1, office: 1, sub: 0,}
		tokyo = false;
		loadSlot(11);
	}
}

function changeEnding(c, n) {
	switch (c) {
		case "family": {
			endingChoices.family = n;
			switch (n) {
				case 1:
					document.getElementById('familyEnd').innerHTML = 'Loving Family';
					document.getElementById('images/real/lisa/profile1.jpg').src = 'images/real/lisa/profile1.jpg';
				break;
				case 2:
					if (endingsLocked.family2 == false) {
						document.getElementById('familyEnd').innerHTML = 'familyEnd2';
						document.getElementById('images/real/lisa/profile1.jpg').src = 'images/real/lisa/profile2.jpg';
					}
				break;
				case 3:
					if (endingsLocked.family3 == false) {
						document.getElementById('familyEnd').innerHTML = 'familyEnd3';
						document.getElementById('images/real/lisa/profile1.jpg').src = 'images/real/lisa/profile5.jpg';
					}
				break;
			}
			break;
		}
		case "friend": {
			endingChoices.friend = n;
			switch (n) {
				case 1:
					document.getElementById('friendEnd').innerHTML = 'App Companion';
					document.getElementById('images/real/riley/profile1.jpg').src = 'images/real/riley/profile1.jpg';
				break;
				case 2:
					if (endingsLocked.friend2 == false) {
						document.getElementById('friendEnd').innerHTML = 'friendEnd2';
						document.getElementById('images/real/riley/profile1.jpg').src = 'images/real/riley/profile3.jpg';
					}
				break;
				case 3:
					if (endingsLocked.friend3 == false) {
						document.getElementById('friendEnd').innerHTML = 'friendEnd3';
						document.getElementById('images/real/riley/profile1.jpg').src = 'images/real/riley/profile5.jpg';
					}
				break;
			}
			break;
		}
		case "teacher": {
			endingChoices.teacher = n;
			switch (n) {
				case 1:
					document.getElementById('teacherEnd').innerHTML = 'Kinder Teacher';
					document.getElementById('images/real/kendra/profile1.jpg').src = 'images/real/kendra/profile1.jpg';
				break;
				case 2:
					if (endingsLocked.teacher2 == false) {
						document.getElementById('teacherEnd').innerHTML = 'teacherEnd2';
						document.getElementById('images/real/kendra/profile1.jpg').src = 'images/real/kendra/casual2.jpg';
					}
				break;
				case 3:
					if (endingsLocked.teacher3 == false) {
						document.getElementById('teacherEnd').innerHTML = 'teacherEnd3';
						document.getElementById('images/real/kendra/profile1.jpg').src = 'images/real/kendra/casual4.jpg';
					}
				break;
			}
			break;
		}
		case "chef": {
			endingChoices.chef = n;
			switch (n) {
				case 1:
					document.getElementById('chefEnd').innerHTML = 'Entrepreneur';
					document.getElementById('images/real/ava/profile1.jpg').src = 'images/real/ava/profile1.jpg';
				break;
				case 2:
					if (endingsLocked.chef2 == false) {
						document.getElementById('chefEnd').innerHTML = 'chefEnd2';
						document.getElementById('images/real/ava/profile1.jpg').src = 'images/real/ava/profile3.jpg';
					}
				break;
				case 3:
					if (endingsLocked.chef3 == false) {
						document.getElementById('chefEnd').innerHTML = 'chefEnd3';
						document.getElementById('images/real/ava/profile1.jpg').src = 'images/real/ava/profile5.jpg';
					}
				break;
			}
			break;
		}
		case "office": {
			endingChoices.office = n;
			switch (n) {
				case 1:
					document.getElementById('officeEnd').innerHTML = 'Secretive CEO';
					document.getElementById('images/real/alexis/profile1.jpg').src = 'images/real/alexis/profile1.jpg';
				break;
				case 2:
					if (endingsLocked.office2 == false) {
						document.getElementById('officeEnd').innerHTML = 'officeEnd2';
						document.getElementById('images/real/alexis/profile3.jpg').src = 'images/real/alexis/profile3.jpg';
					}
				break;
				case 3:
					if (endingsLocked.office3 == false) {
						document.getElementById('officeEnd').innerHTML = 'officeEnd3';
						document.getElementById('images/real/alexis/profile4.jpg').src = 'images/real/alexis/profile4.jpg';
					}
				break;
			}
			break;
		}
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Showing / Hiding Windows
function hideStuff() {
	hideInv();
	hideSave();
	hideSelf();
	hideWardrobe();
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

function warButton() {
	if (warHidden == true) {
		showWardrobe();
	}
	else {
		hideWardrobe();
	}
}

function hideWardrobe() {
	warHidden = true;
	document.getElementById("wardrobe").style.visibility = "hidden";	
}

function showWardrobe() {
	if (data.story.currentScene == 'homePlayerRoom') {
		hideStuff();
		warHidden = false;
		generateWardrobe();
		document.getElementById("wardrobe").style.visibility = "visible"; 
	}
	else {
		alert("You can only change clothes in your room.");
	}
}

function showPrincess() {
	document.getElementById("screen").style.visibility = "visible";	
	document.getElementById("floor").style.visibility = "visible";	
	document.getElementById("ceiling").style.visibility = "visible";	
	document.getElementById("demo").style.visibility = "visible";	
	document.getElementById("screenBox").style.height = "400px";	
	document.getElementById("screenButtons").style.visibility = "visible";	
	document.getElementById("screenButtons").style.height = "100px";	
}

function hidePrincess() {
	document.getElementById("screen").style.visibility = "hidden";	
	document.getElementById("floor").style.visibility = "hidden";	
	document.getElementById("ceiling").style.visibility = "hidden";	
	document.getElementById("demo").style.visibility = "hidden";		
	document.getElementById("screenBox").style.height = "0px";	
	document.getElementById("buttonLeft").style.visibility = "hidden";	
	document.getElementById("buttonLeft").style.height = "0px";	
	document.getElementById("buttonRight").style.visibility = "hidden";	
	document.getElementById("buttonRight").style.height = "0px";	
	document.getElementById("buttonUp").style.visibility = "hidden";	
	document.getElementById("buttonUp").style.height = "0px";	
	document.getElementById("buttonDown").style.visibility = "hidden";	
	document.getElementById("buttonDown").style.height = "0px";	
	document.getElementById("screenButtons").style.visibility = "hidden";	
	document.getElementById("screenButtons").style.height = "0px";	
}

//Scene creation
function writeSpeech (name, img, text) {
	if (data.story.route == "dom") {
		switch (img) {
			case "player":
				img = "scripts/gamefiles/real/profile" + data.story.bodytype + ".jpg";
			break;
			case "lisa":
				img = "scripts/gamefiles/real/lisa.jpg";
			break;
			case "jean":
				img = "scripts/gamefiles/real/jean.jpg";
			break;
			case "riley":
				img = "scripts/gamefiles/real/riley.jpg";
			break;
			case "kendra":
				img = "scripts/gamefiles/real/kendra.jpg";
			break;
			case "ava":
				img = "scripts/gamefiles/real/ava.jpg";
			break;
			case "alexis":
				img = "scripts/gamefiles/real/alexis.jpg";
			break;
			case "adriana":
				img = "scripts/gamefiles/real/adriana.jpg";
			break;
			case "gina":
				img = "scripts/gamefiles/real/gina.jpg";
			break;
			case "danny":
				img = "scripts/gamefiles/real/danny.jpg";
			break;
			case "zombie":
				img = "scripts/gamefiles/real/zombie.jpg";
			break;
			case "vr":
				img = "scripts/gamefiles/drawn/elizabeth.jpg";
			break;
			case "knight":
				img = "scripts/gamefiles/drawn/knight.jpg";
			break;
			case "drawn/vr/profile4.jpg":
				img = "scripts/gamefiles/drawn/warlock.jpg";
			break;
			case "doll":
				img = "scripts/gamefiles/drawn/doll.jpg";
			break;
		}
	}
	else {
		switch (img) {
			case "player":
				img = "scripts/gamefiles/drawn/player.jpg";
			break;
			case "lisa":
				img = "scripts/gamefiles/drawn/lisa.jpg";
			break;
			case "jean":
				img = "scripts/gamefiles/drawn/jean.jpg";
			break;
			case "riley":
				img = "scripts/gamefiles/drawn/riley.jpg";
			break;
			case "kendra":
				img = "scripts/gamefiles/drawn/kendra.jpg";
			break;
			case "ava":
				img = "scripts/gamefiles/drawn/ava.jpg";
			break;
			case "alexis":
				img = "scripts/gamefiles/drawn/alexis.jpg";
			break;
			case "adriana":
				img = "scripts/gamefiles/real/adriana.jpg";
			break;
			case "gina":
				img = "scripts/gamefiles/real/gina.jpg";
			break;
			case "zombie":
				img = "scripts/gamefiles/real/zombie.jpg";
			break;
			case "vr":
				img = "scripts/gamefiles/drawn/elizabeth.jpg";
			break;
			case "knight":
				img = "scripts/gamefiles/drawn/knight.jpg";
			break;
			case "drawn/vr/profile4.jpg":
				img = "scripts/gamefiles/drawn/warlock.jpg";
			break;
			case "doll":
				img = "scripts/gamefiles/drawn/doll.jpg";
			break;
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "`
			+ img +
		`">
		<p class = "textName">`+ name + `</p>
		<p>` + text + `</p>
	</div>
	<br>
	`
}

function writeBig (img) {
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="bigPicture" src="` + img + `">
			<br>
		`;
	}
}

function writeDrawn (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<p class = 'tinyText'>`+ cap + `</p>
		<br>
	`;
	}
}

function writeMed (img) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" id="` + img + `" src="` + img + `">
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
	console.log("menu updated");
	hideStuff();
	if (data.story.playingGame == true) {
		data.zombieData.scene = scene;
	}
	data.story.currentScene = scene;
	console.log(data.story.currentScene);
	//alert(data.story.currentScene);
	//beforeCheck();
	//afterCheck();
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
	saveSlot(10);
	console.log("autosaved");
	zombieInvShowing = false;
}

function laptop(genre) {
	randNum = getRandomInt(3);
	document.getElementById('output').innerHTML = '';
	switch(genre) {
		case "straight": {
			switch (randNum) {
				case 0:
					writeBig("images/real/general/vaginal6.gif");
				break;
				case 1:
					writeBig("images/real/general/mom4-1.gif");
				break;
				case 2:
					writeBig("images/real/general/teacher3-1.gif");
				break;
			}
			break;
		}
		case "throat": {
			switch (randNum) {
				case 0:
					writeBig("images/real/general/deepthroat4.gif");
				break;
				case 1:
					writeBig("images/real/general/deepthroat2.gif");
				break;
				case 2:
					writeBig("images/real/general/deepthroat7.gif");
				break;
			}
			break;
		}
		case "anal": {
			switch (randNum) {
				case 0:
					writeBig("images/real/general/anal7.gif");
				break;
				case 1:
					writeBig("images/real/general/office3-3.gif");
				break;
				case 2:
					writeBig("images/real/general/office4-2.gif");
				break;
			}
			break;
		}
		case "gay": {
			switch (randNum) {
				case 0:
					writeBig("images/real/general/sissy3.gif");
				break;
				case 1:
					writeBig("images/real/general/sissy9.gif");
				break;
				case 2:
					writeBig("images/real/general/friend3-2.gif");
				break;
			}
			break;
		}
		case "sub": {
			writeBig("images/drawn/aya/friend2-6.jpg");
			writeBig("images/drawn/aya/mom2-4.jpg");
			writeBig("images/drawn/aya/office2-2.jpg");
			writeText("Numerous images of girlcock fill your screen, a message appears flashing in and out.");
			writeText("There are better ways to get your rocks off in my new world, little bro.");
			writeText("It seems like porn is out of the question.");
			break;
		}
	}
	writeTransition("laptop", "Finish");
}

function addendum(n) {
	switch (n) {
		case "riley1": {
			writeSpeech(data.story.name, "player", "You go ahead and enjoy yourself.");
			writeText(""+data.story.friendName+" smiles and licks her lips as she starts disrobing. Sean wants to start shouting questions, but stops mid-word as he sees "+data.story.friendName+"'s dick.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "<i>W-what the hell? Why does she have a dick? And why it so... Whoa, back up. I'm not gay or any shit like that...</i>");
			writeSpeech(data.story.friendName, "riley", "Turn around, lemme see the goods.");
			writeText("He wants to argue, to storm out, or even to start throwing punches to try and salvage some pride. But he can't bring himself to disobey for some reason, and the thought of breaking one of his nails punching somebody just sounds awful.");
			writeText("He turns around, showing off his huge new bubble butt, a result of the app in the hands of a master.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "<i>Fucking...why the fuck am I showing them my asshole? Why do I want them to see it? Am I getting off on this?</i>");
			writeText("His conflicted thoughts are sent flying as "+data.story.friendName+" slaps his ass, causing his booty to jiggle and leaving a bright red handprint.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "Ngh...");
			writeText(""+data.story.friendName+" was close to all the cheerleaders at school, there's no way she wouldn't blab about this. The rumor would spread like wildfire about his now puny dick, how he bent over and lost his anal virginity without any resistance.");
			writeText("He can feel a bead of precum form at the tip of his clitty as he imagines being known as the school's new buttslut.");
			writeText("...");
			writeBig("images/real/general/friend5-1.gif");
			writeSpeech("Shannon", "scripts/gamefiles/none.png", "More! Fuck me harder! God, being a girl is so much better!");
			writeText("There's no resistance, no crying out in pain. Sean, now Shannon, took to the first minutes of the rest of her life with glee.");
			writeText("A hyper sensitive prostate probably helped smooth things along, especially since she started spurting like a bitch from the very first moment she had "+data.story.friendName+"'s cock inside her.");
			writeText("You grunt as you fire off rope of semen onto Shanon's face. Shanon worshipfully takes it, trying to catch whatever she can on her tongue.");
			writeText("Grabbing onto Shanon's hips, "+data.story.friendName+" pulls them back and slams herself into Shannon as they both start moaning. ");
			writeText("With every clench of "+data.story.friendName+"'s balls, Shannon is following suit with a much smaller, more pathetic spurt of her own onto the bedsheets.");
			writeText("...");
			writeText("Shannon is unconscious on the bed, her cute little dicklette resting in a pool of her wasted cum. Her gaping, cum-coated ass twitches, but can't close fully.");
			writeSpeech(data.story.name, "player", "So what will you do with her?");
			writeSpeech(data.story.friendName, "riley", "Well, everyone in the crew hated Sean, but I think they'll have a change of heart once they see the new him. Throwing in a dedicated fucksleeve and pussylicker could get me some brownie points with the captain. <br>And if things don't work out, I can always use him to motivate the football team. ");
			if (data.story.currentScene != "gallery") {
				data.story.time = "night";
				writeTransition("homePlayerRoom", "Finish up for the day");
				data.story.motherReady = false;
			}
			else {
				writeTransition("gallery", "Go back");
			}
			break;
		}
		case "riley2": {
			writeSpeech(data.story.name, "player", "I'll take you up on that.");
			writeText("You start taking of your clothes. Sean wants to keep arguing, but stops mid-word once he sees you dick.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "W-what the hell? Why is it so... Whoa, back up. I'm not gay or any shit like that...");
			writeSpeech(data.story.friendName, "riley", "Turn around Sean, show him the goods.");
			writeText("He wants to argue, to storm out, or even to start throwing punches to try and salvage some pride. But he can't bring himself to disobey for some reason, and the thought of breaking one of his nails throwing a punch just sounds awful.");
			writeText("He turns around, showing off his huge new bubble butt, a result of the app in the hands of a master.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "Fucking...why the fuck am I showing them my asshole? Why do I want them to see it? Am I getting off on this?");
			writeText("His conflicted thoughts are sent flying as "+data.story.friendName+" slaps his ass, causing his booty to jiggle and leaving a bright red handprint.");
			writeSpeech("Sean", "scripts/gamefiles/none.png", "Ngh...");
			writeText(""+data.story.friendName+" was close to all the cheerleaders at school, there's no way she wouldn't blab about this. The rumor would spread like wildfire about his now puny dick, how he bent over and lost his anal virginity without any resistance.");
			writeText("He can feel a bead of precum form at the tip of his clitty as he imagines being known as the school's new buttslut.");
			writeText("...");
			writeBig("images/real/general/friend5-1.gif");
			writeSpeech("Shannon", "scripts/gamefiles/none.png", "More! Fuck me harder! God, being a girl is so much better!");
			writeText("There's no resistance, no crying out in pain. Sean, now Shannon, took to the first minutes of the rest of her life with glee.");
			writeText("A hyper sensitive prostate probably helped smooth things along, especially since she started spurting like a bitch from the very first moment she had your cock inside her.");
			writeText(""+data.story.friendName+" grunts as she fires a rope of semen onto Shanon's face. Shanon worshipfully takes it, trying to catch whatever she can on her tongue.");
			writeText("Grabbing onto Shanon's hips, you pull them back and slam yourself into her as you start to fill her ass.");
			writeText("With every rope of jizz you fire off, she's following suit with a much smaller, more pathetic spurt of her own onto the bedsheets.");
			writeText("...");
			writeText("Shannon is unconscious on the bed, her cute little dicklette resting in a pool of her wasted cum. Her gaping, cum-coated ass twitches, but can't close fully.");
			writeSpeech(data.story.name, "player", "So what will you do with her?");
			writeSpeech(data.story.friendName, "riley", "Well, everyone in the crew hated Sean, but I think they'll have a change of heart once they see the new him. Throwing in a dedicated fucksleeve and pussylicker could get me some brownie points with the captain. <br>And if things don't work out, I can always use him to motivate the football team. ");
			if (data.story.currentScene != "gallery") {
				data.story.time = "night";
				writeTransition("homePlayerRoom", "Finish up for the day");
				data.story.motherReady = false;
			}
			else {
				writeTransition("gallery", "Go back");
			}
			break;
		}
		case "alexis1": {
			writeDrawn("images/drawn/aya/office3-3.jpg", "Art by Aya");
			writeText("Reach out and squeeze her balls between your fingers in an act of defiance.");
			writeSpeech(data.story.officeName, "alexis", "Eeek!");
			writeText("This should teach her to attack innocent citizens... Or not.");
			writeDrawn("images/drawn/aya/office3-4.jpg", "Art by Aya");
			writeText("She starts stroking herself as you squeeze her balls. The harder you squeeze, the faster she jerks herself off and the farther her eyes roll back.");
			writeText("You let go of her nutsack, but it's too late.");
			writeDrawn("images/drawn/aya/office3-5.jpg", "Art by Aya");
			writeText("Her jizz arcs through the air, splattering cum on her face and her cowtits.");
			writeDrawn("images/drawn/aya/office3-6.jpg", "Art by Aya");
			writeText("She's silent as she stares at you with a hungry expression, her tongue slips out of her mouth and she licks up a stray grob of cum off her lips.");
			writeText("While she's distracted, you quickly get out of there. ");
			if (data.story.currentScene != "gallery") {
				data.story.time = "night";
				writeTransition("homePlayerRoom", "Finish up for the day");
				data.story.motherReady = false;
			}
			else {
				writeTransition("gallery", "Go back");
			}
			break;
		}
		case "alexis2": {
			writeDrawn("images/drawn/aya/office3-7.jpg", "Art by Aya");
			writeText("Don't bother fighting it and lean forward to take the head if your dick into your mouth.");
			writeText("She bites down on a gloved knuckle as her cockhead slides down a willing mouth.");
			writeDrawn("images/drawn/aya/office3-8.jpg", "Art by Aya");
			writeText("Her hips buck as you slide deeper down on her shaft. No gagging or choking, your new body was made for taking dick like this.");
			writeText("Her eyes roll back as you go down far enough to kiss her tightening ballsack, before you pull out just enough for the head of her dick to start spurting on the back of your tongue.");
			writeDrawn("images/drawn/aya/office3-9.jpg", "Art by Aya");
			writeSpeech(data.story.officeName, "alexis", "Mmmm! ");
			writeText("She legs shake as she practically starts pissing a river of cum down your throat. Her eyes roll back so far you wonder if her brain just broke.");
			writeText("Making a seal with your lips, you pull off her dick as noisily as you can manage while staring right at her.");
			writeDrawn("images/drawn/aya/office3-10.jpg", "Art by Aya");
			writeText("You wipe off a rope of cum from your mouth and start walking home as "+data.story.officeName+" drunkenly giggles to herself. ");
			if (data.story.currentScene != "gallery") {
				data.story.time = "night";
				writeTransition("homePlayerRoom", "Finish up for the day");
				data.story.motherReady = false;
			}
			else {
				writeTransition("gallery", "Go back");
			}
			break;
		}
	}
}

//Menu updating
function updateMenu() {
	document.getElementById('playerName').innerHTML = data.story.name;
	document.getElementById('playerMoney').innerHTML = "$" + data.story.money;
	document.getElementById('corrupt1List').innerHTML = data.story.motherName;
	document.getElementById('corrupt1Score').innerHTML = data.story.motherScore;
	document.getElementById('corrupt2List').innerHTML = data.story.sisterName;
	document.getElementById('corrupt2Score').innerHTML = data.story.sisterScore;
	document.getElementById('corrupt3List').innerHTML = data.story.friendName;
	document.getElementById('corrupt3Score').innerHTML = data.story.friendScore;
	document.getElementById('corrupt4List').innerHTML = data.story.teacherName;
	document.getElementById('corrupt4Score').innerHTML = data.story.teacherScore;
	document.getElementById('corrupt5List').innerHTML = data.story.chefName;
	document.getElementById('corrupt5Score').innerHTML = data.story.chefScore;
	document.getElementById('corrupt6List').innerHTML = data.story.officeName;
	document.getElementById('corrupt6Score').innerHTML = data.story.officeScore;
	document.getElementById('playerClothes').src = data.clothingArray[data.story.clothing].image;
	document.getElementById('playerUnderwear').src = data.underwearArray[data.story.underwear].image;
}

function changeName(target) {
	switch (target) {
		case 'player':
			data.story.name = document.getElementById('nameSubmission').value;
			updateMenu();
			switch (data.story.bodytype) {
				case 1:
					data.clothingArray[1].owned = true;
					data.underwearArray[1].owned = true;
				break;
				case 2:
					data.clothingArray[17].owned = true;
					data.underwearArray[2].owned = true;
				break;
				case 3:
					data.clothingArray[6].owned = true;
					data.underwearArray[3].owned = true;
				break;
			}
			sceneTransition('lookInTheMirror');
		break;
		case 'mother':
			data.story.motherName = document.getElementById('nameSubmission').value;
			updateMenu();
			sceneTransition('finishAndSitDown');
		break;
		case 'sister':
			data.story.sisterName = document.getElementById('nameSubmission').value;
			updateMenu();
			sceneTransition('finishAndEatBreakfast');
		break;
		case 'friend':
			data.story.friendName = document.getElementById('nameSubmission').value;
			updateMenu();
			sceneTransition('theTeacherArrives');
		break;
		case 'teacher':
			data.story.teacherName = document.getElementById('nameSubmission').value;
			updateMenu();
			sceneTransition('classStarts');
		break;
		case 'office':
			data.story.officeName = document.getElementById('nameSubmission').value;
			updateMenu();
			sceneTransition('arriveAtHome');
		break;
		case 'chef':
			data.story.chefName = document.getElementById('nameSubmission').value;
			updateMenu();
			sceneTransition('grabABite');
		break;
		case 'doll':
			data.story.dollName = document.getElementById('nameSubmission').value;
			data.story.dollScore +=1;
			sceneTransition('streetsExoticShop');
		break;
		case 'vr':
			data.story.vrName = document.getElementById('nameSubmission').value;
		break;
		case 'all':
			switch (data.story.bodytype) {
				case 1:
					data.clothingArray[1].owned = true;
					data.underwearArray[1].owned = true;
				break;
				case 2:
					data.clothingArray[17].owned = true;
					data.underwearArray[2].owned = true;
					data.story.chestSize = 1;
					data.story.buttSize = 1;
					data.story.lipSize = 1;
				break;
				case 3:
					data.clothingArray[6].owned = true;
					data.underwearArray[3].owned = true;
					data.story.chestSize = 2;
					data.story.buttSize = 2;
					data.story.lipSize = 1;
				break;
			}
			data.story.name = document.getElementById('nameSubmission').value;
			data.story.motherName = document.getElementById('nameSubmission1').value;
			data.story.sisterName = document.getElementById('nameSubmission2').value;
			data.story.friendName = document.getElementById('nameSubmission3').value;
			data.story.teacherName = document.getElementById('nameSubmission4').value;
			data.story.chefName = document.getElementById('nameSubmission5').value;
			data.story.officeName = document.getElementById('nameSubmission6').value;
			updateMenu();
			sceneTransition('arriveAtHome');
		break;
	}
}

function changeBody(n) {
	data.story.bodytype = n;
	switch(n) {
		case 1:
			document.getElementById('bodytype').innerHTML = "Macho Man";
		break;
		case 2:
			document.getElementById('bodytype').innerHTML = "Sissy Trap";
		break;
		case 3:
			document.getElementById('bodytype').innerHTML = "Shemale";
		break;
		case 4:
			document.getElementById('bodytype').innerHTML = "NYI";
		break;
		case 5:
			document.getElementById('bodytype').innerHTML = "NYI";
		break;
	}
	document.getElementById('selfBig').src = "images/real/body/body" + data.story.bodytype + ".jpg";
	updateBody(n);
}

function updateBody(n) {
	n = parseInt(n);
	data.story.bodytype = n;
	switch(n) {
		case 0:
			document.getElementById('playerImage').src = "images/real/body/body0.jpg";
			data.story.underwear = 1;
		break;
		case 1:
			document.getElementById('playerImage').src = "images/real/body/body1.jpg";
				data.story.clothing = 1;
				data.story.underwear = 1;
		break;
		case 2:
			document.getElementById('playerImage').src = "images/real/body/body2.jpg";
				data.story.clothing = 17;
				data.story.underwear = 2;
		break;
		case 3:
			document.getElementById('playerImage').src = "images/real/body/body3.jpg";
				data.story.clothing = 6;
				data.story.underwear = 3;
		break;
		case 4:
			document.getElementById('playerImage').src = "images/drawn/aya/player.jpg";
			data.story.clothing = 1;
			data.story.underwear = 1;
		break;
	}
	wear('clothing', data.story.clothing);
	wear('underwear', data.story.underwear);
}

function corrupt(target) {
	var tranTarget = target + 'Corruption';
	switch (target) {
		case "many":
			sceneTransition('motherCorruption');
			data.story.motherScore += 1;
			data.story.sisterScore += 1;
			data.story.teacherScore += 1;
			data.story.motherReady = true;
			data.story.sisterReady = true;
			data.story.teacherReady = true;
		break;
		case "everyone":
			sceneTransition('motherCorruption');
			data.story.motherScore += 1;
			data.story.sisterScore += 99;
			data.story.friendScore += 1;
			data.story.teacherScore += 1;
			data.story.chefScore += 1;
			data.story.officeScore += 1;
			data.story.motherReady = true;
			data.story.friendReady = true;
			data.story.teacherReady = true;
			data.story.chefReady = true;
			data.story.officeReady = true;
		break;
		case "mother":
			sceneTransition(tranTarget);
			data.story.motherScore += 1;
			data.story.motherReady = true;
		break;
		case "sister":
			sceneTransition(tranTarget);
			data.story.sisterScore += 1;
			data.story.sisterReady = true;
		break;
		case "friend":
			sceneTransition(tranTarget);
			data.story.friendScore += 1;
			data.story.friendReady = true;
		break;
		case "teacher":
			sceneTransition(tranTarget);
			data.story.teacherScore += 1;
			data.story.teacherReady = true;
		break;
		case "chef":
			sceneTransition(tranTarget);
			data.story.chefScore += 1;
			data.story.chefReady = true;
		break;
		case "office":
			sceneTransition(tranTarget);
			data.story.officeScore += 1;
			data.story.officeReady = true;
		break;
		case "doll":
			data.story.dollScore += 1;
		break;
	}
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

//Saving & Loading
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
	endingChoices = {family: 1, friend: 1, teacher: 1, chef: 1, office: 1, sub: 0,}
	tokyo = false;
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	updateBody(data.story.bodytype);
	wear('clothing', data.story.clothing);
	wear('underwear', data.story.underwear);
	sceneTransition(data.story.currentScene);
	updateSave();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.story.currentScene, "Finished copying");
}

function loadFile(){
	endingChoices = {family: 1, friend: 1, teacher: 1, chef: 1, office: 1, sub: 0,}
	tokyo = false;
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(10);
	loadSlot(10);
	if (data.story.name == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(11);
	}
	else {
		saveSlot(10);
		loadSlot(10);
	}
	updateSave();
}

function generateSave() {
	for (i = 1; i < 9; i++) {
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
	if (typeof data.story.version == 'undefined') {
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
}

//Gallery
function unlockScene(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == false) {
				 document.getElementById('output').innerHTML += `<p class = "specialText">You've unlocked a new scene in the gallery!</p>`;
			}
			data.galleryArray[i].unlocked = true
		}
	}
}

function generateGallery(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == true) {
				document.getElementById('output').innerHTML += `
				<p class = "choiceText" onclick="galleryView('` + data.galleryArray[i].index + `')">` + data.galleryArray[i].name + `</p>
				`;
			}
		}
	}
}

function galleryCheck(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}

function galleryView(scene) {
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	writeEvent(scene);
	if (data.story.currentScene == "gallery") {
		writeTransition("gallery", "Go back");
	}
	else {
		writeTransition("princessGallery", "Go back");
	}
}

//Logbook
function generateNav() {
	document.getElementById('logbookLeft').innerHTML = "";
	document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('self')">You</p>`;
	if (data.story.motherName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('mom')">` + data.story.motherName + `</p>`;
	}
	if (data.story.sisterName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('sister')">` + data.story.sisterName + `</p>`;
	}
	if (data.story.friendName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('friend')">` + data.story.friendName + `</p>`;
	}
	if (data.story.teacherName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('teacher')">` + data.story.teacherName + `</p>`;
	}
	if (data.story.chefName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('chef')">` + data.story.chefName + `</p>`;
	}
	if (data.story.officeName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('office')">` + data.story.officeName + `</p>`;
	}
	if (data.story.dollName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('doll')">` + data.story.dollName + `</p>`;
	}
	if (data.story.vrName != '???') {
		document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('vr')">` + data.story.vrName + `</p>`;
	}
	switchDesc('self');
}

function switchDesc(n) {
	if (imagesDisabled != true) {
		document.getElementById('logbookRight').innerHTML = `
			<img id="selfImage" class="selfImage" src="images/none.png">
			<br>
		`;
	}
	else {
		document.getElementById('logbookRight').innerHTML = ``;
	}
	switch (n) {
		case 'self':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "selfBody">BODY DESCRIPTION</span>
					<br> <br>
					<span id = "selfLips">BODY DESCRIPTION</span>
					<br> <br>
					<span id = "selfSkin">BODY DESCRIPTION</span>
					<br> <br>
					<span id = "ifNaked">
					<span id = "selfClothes">BODY DESCRIPTION</span>
						<br> <br>
					<span id = "selfUnderwear">BODY DESCRIPTION</span>
					</span>
					<br> <br>
					<span id = "selfChest">BODY DESCRIPTION</span>
					<br> <br>
					<span id = "selfButt">BODY DESCRIPTION</span>
					<br> <br>
					<span id = "selfJunk">BODY DESCRIPTION</span>
				</p>
			`;
			generateSelf('self');
		break;
		case 'mom':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherCorruption">Corruption: 0</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('mom');
		break;
		case 'sister':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherCorruption">Corruption: 0</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('sister');
		break;
		case 'friend':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherCorruption">Corruption: 0</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('friend');
		break;
		case 'chef':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherCorruption">Corruption: 0</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('chef');
		break;
		case 'office':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherCorruption">Corruption: 0</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('office');
		break;
		case 'teacher':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherCorruption">Corruption: 0</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('teacher');
		break;
		case 'doll':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('doll');
		break;
		case 'vr':
			document.getElementById('logbookRight').innerHTML += `
				<p class = "selfDesc">
					<span id = "otherName">Name: Kendra</span>
					<br> <br>
					<span id = "otherStatus">Status: Single Mother</span>
					<br> <br>
					<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
					<br> <br>
					<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
					<br> <br>
					<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
					<br> <br>
				</p>
			`;
			generateSelf('vr');
		break;
	}
}

function generateSelf(n) {
	switch (n) {
		case "self": {
			switch (data.story.bodytype) {
				case 0:
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body0.jpg`)'>regular looking guy</span> without any stand-out features.";
				break;
				case 1:
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body1.jpg`)'>good-looking guy</span> with a strong jawline and a muscular figure.";
				break;
				case 2:
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body2.jpg`)'>petite boy</span> who could effortlessly pass for a girl.";
				break;
				case 3:
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body3.jpg`)'>tall, leggy woman</span> in everything but what you keep in your pants.";
				break;
				case 4:
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/drawn/aya/player.jpg`)'>short, busty boy</span> who looks like a girl in <i>nearly</i> every aspect.";
				break;
			}
			switch (data.story.lipSize) {
				case 0:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips1.jpg`)'>unassuming pink lips</span>";
				break;
				case 1:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips2.jpg`)'>kissable pink lips</span>";
				break;
				case 2:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips6.jpg`)'>pillowy lips</span> that have gotten you quite a few longing glances.";
				break;
				case 3:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips5.jpg`)'>fat, fuckable lips</span> which form an o-shape when you're not speaking.";
				break;
			}
			if (data.story.route == "sub") {
					document.getElementById('selfLips').innerHTML = "You have a pair of soft, pink lips. Rubbing your finger over them feels nice and soothing.";
			}
			switch (data.story.bodytype) {
				case 0:
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin1.jpg`)'>pale</span> and occasionally itchy.";
				break;
				case 1:
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin3.gif`)'>tough, but well-groomed and cared for.</span>";
				break;
				case 2:
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin2.gif`)'>hairless and completely smooth.</span> You find yourself running your hands along it when you have a free moment.";
				break;
				case 3:
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin5.jpg`)'>hairless and completely smooth.</span> Women and men alike would love to run their tongue along it.";
				break;
				case 4:
					document.getElementById('selfSkin').innerHTML = "Your skin is hairless and completely smooth. As you move the feeling of your clothes on your body makes you feel a little tingly. Maybe after getting used to it the sensations will fade into the background.";
				break;
			}
			switch (data.story.buttSize) {
				case 0:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM2.jpg`)'>decently tight butt</span>, the result of doing squats every other day.";
				break;
				case 1:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM1.jpg`)'>tight butt</span>, the result of a good diet and regular exercise.";
				break;
				case 2:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM4.jpg`)'>plump booty</span>, enough to turn heads on the street.";
				break;
				case 3:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/butt3.gif`)'>round ass</span>, which people (and you) need to conciously hold back from slapping.";
				break;
				case 4:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/butt8.gif`)'>fuckable ass</span>, the sort of which men would sell their daughter to taste.";
				break;
				case 5:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM5.jpg`)'>gigantic ass</span>, enough to make a man believe in god.";
				break;
			}
			if (data.story.route == "sub") {
					document.getElementById('selfButt').innerHTML = "You have an admittedly impressive ass. Your sister clearly has a specific taste in women.";
			}
			switch (data.story.bodytype) {
				case 0:
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk1.jpg`)'>unassuming penis</span>, a little on the shorter side, isn't causing a commotion right now.";
				break;
				case 1:
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk4.jpg`)'>imposing dick</span> is enough to dampen underwear on sight.";
				break;
				case 2:
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk5.jpg`)'>adorable little penis</span> is flaccid at the moment. When your aroused though, it can grow up to 8 inches.";
				break;
				case 3:
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/skin5.jpg`)'>fat, bitch-breaking cock</span> is constantly trying to break free of your clothes.";
				break;
				case 4:
					document.getElementById('selfJunk').innerHTML = "Your penis is snuggly tucked away. You can certainly get aroused, but trying to get yourself off is a fruitless endeavor. It seems like anal might be your only option for awhile.";
				break;
			}
			switch (data.story.chestSize) {
				case 0:
					document.getElementById('selfChest').innerHTML = "You have some <span class='selfSwitch' onclick='selfImage(`images/real/body/malebody.jpg`)'>decently strong pectoral muscles</span>.";
				break;
				case 1:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs2.gif`)'>soft, a-cup breasts</span>.";
				break;
				case 2:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs3.gif`)'>perky, c-cup breasts</span>.";
				break;
				case 3:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs4.gif`)'>bouncy, D-cup breasts</span>.";
				break;
				case 4:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs7.gif`)'>fat, E-cup breasts</span>. With every movement they sway tantalisingly.";
				break;
				case 5:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs8.gif`)'>gigantic, F-cup breasts</span>. With every movement they threaten to burst from your shirt and expose you in public as a fat-titted whore.";
				break;
			}
			if (data.story.route == "sub") {
					document.getElementById('selfChest').innerHTML = "You have a surprisingly reserved bust. If you weren't quite so effeminate, your silhouette could probably pass for a man's. That said, your nipples are incredibly sensitive. You might need to start wearing a bra to avoid them being visible through your clothes on a cold day.";
			}
			document.getElementById('selfClothes').innerHTML = `Right now you're wearing <span class='selfSwitch' onclick='selfImage("` + data.clothingArray[data.story.clothing].image + `")'>` + data.clothingArray[data.story.clothing].description + `</span>`;
			document.getElementById('selfUnderwear').innerHTML = `Underneath that you're wearing <span class='selfSwitch' onclick='selfImage("` + data.underwearArray[data.story.underwear].image + `")'>` + data.underwearArray[data.story.underwear].description + `</span>`;
			if (data.story.clothing == 0) {
				if (data.story.underwear == 0) {
					document.getElementById('ifNaked').innerHTML = "You're completely naked! Luckily the app has a clause protecting people from noticing."
				}
				else {
					document.getElementById('ifNaked').innerHTML = `All you're wearing right now is <span class='selfSwitch' onclick='selfImage("` + data.underwearArray[data.story.underwear].image + `")'>` + data.underwearArray[data.story.underwear].description + `</span>`;
				}
			}
			if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/body/body" + data.story.bodytype + ".jpg";}
			if (data.story.route == "sub") {
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/player.jpg";}
			}
			generateLogbookGallery('misc');
			//generateLogbookGallery('dream');
			break;
		}
		case "mom": {
			document.getElementById('otherCorruption').innerHTML = "Corruption: " + data.story.motherScore;
			if (data.story.route == "dom") {
				switch (data.story.motherScore) {
					case 0: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.motherName;
						document.getElementById('otherStatus').innerHTML = "Status: Single Mother";
						document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/sweaterMom.jpg`)'>brown, ribbed sweater</span> she wears whenever she can.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs8.gif`)'>large, E-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You've only ever managed to catch glimpses of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular4.jpg`)'>black underwear.</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/lisa/oldfile1.jpg";}
						break;
					}
					case 1: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.motherName;
						document.getElementById('otherStatus').innerHTML = "Status: Mother & Maid";
						document.getElementById('otherClothes').innerHTML = "Her new outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressMom.jpg`)'>leopard-print dress and necklace of fake jewels</span> she wears whenever she can.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs8.gif`)'>large, E-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "With her shorter skirt you've caught more than a few eyefuls of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular4.jpg`)'>black underwear.</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/lisa/profile1.jpg";}
						break;
					}
					case 2: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.motherName;
						document.getElementById('otherStatus').innerHTML = "Status: Loyal Servant";
						document.getElementById('otherClothes').innerHTML = "Her new outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressMom.jpg`)'>leopard-print dress and necklace of fake jewels</span> she wears whenever she can.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs8.gif`)'>large, E-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Every so often when your sister isn't looking, she'll lift her skirt to show off her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'> erotic black underwear.</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/lisa/profile2.jpg";}
						break;
					}
					case 3: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.motherName;
						document.getElementById('otherStatus').innerHTML = "Status: Loyal Servant";
						document.getElementById('otherClothes').innerHTML = "Her new outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressMom.jpg`)'>leopard-print dress and necklace of fake jewels</span> she wears whenever she can.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs8.gif`)'>large, E-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Every so often when your sister isn't looking, she'll lift her skirt to show off her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'> erotic black underwear.</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/lisa/profile4.jpg";}
						break;
					}
					case 4: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.motherName;
						document.getElementById('otherStatus').innerHTML = "Status: Loving Cocksleeve";
						document.getElementById('otherClothes').innerHTML = "Her new outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressMom.jpg`)'>leopard-print dress and necklace of fake jewels</span> she wears whenever she needs to wear clothes.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs8.gif`)'>large, E-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "At this point you don't even think your mother wears <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none6.jpg`)'>underwear</span> anymore.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/lisa/profile4.jpg";}
						break;
					}
				}
			}
			else {
				document.getElementById('otherName').innerHTML = "Name: " + data.story.motherName;
				document.getElementById('otherStatus').innerHTML = "Status: Family Maid";
				document.getElementById('otherClothes').innerHTML = "When she isn't wearing an erotic excuse for a maid's outfit, she's usually wearing a pretty conservative white shirt and jeans.";
				document.getElementById('otherChest').innerHTML = "Her tits have increased in size greatly thanks to your sister's use of the app. Now, if you had to guess, they'd be around a G cup at least. She isn't shy about showing them off anymore either.";
				document.getElementById('otherJunk').innerHTML = "Her ass in jeans is absolutely divine. At this point the clothes in her wardrobe are as tight as a second skin.";
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/lisa.jpg";}
			}
			break;
		}
		case 'sister': {
			document.getElementById('otherCorruption').innerHTML = "Corruption: " + data.story.sisterScore;
			if (data.story.route == "dom") {
				switch (data.story.sisterScore) {
					case 0: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
						document.getElementById('otherStatus').innerHTML = "Status: Shut-In Sister";
						document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogatop.jpg`)'>thin tank top and some yoga pants.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Lounging around the house, she's caught you staring at her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogapants.jpg`)'>ass in yoga pants a few times</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/jean/profile1.jpg";}
						break;
					}
					case 1: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
						document.getElementById('otherStatus').innerHTML = "Status: Shut-In Sister";
						document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogatop.jpg`)'>thin tank top and some yoga pants.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Lounging around the house, she's caught you staring at her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogapants.jpg`)'>ass in yoga pants a few times</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/jean/profile1.jpg";}
						break;
					}
					case 2: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
						document.getElementById('otherStatus').innerHTML = "Status: Frustrated Sister";
						document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogatop.jpg`)'>thin tank top and some yoga pants.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Lately, you notice that her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/yoga1.jpg`)'>yoga pants</span> have been getting tighter and tighter.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/jean/profile2.jpg";}
						break;
					}
					case 3: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
						document.getElementById('otherStatus').innerHTML = "Status: Desperate Sister";
						document.getElementById('otherClothes').innerHTML = "She's been wearing skimpier outfits lately. Today, she's wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/shorts.jpg`)'>thin top and even thinner shorts.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Instead of wearing her usual lounging pants, she mostly wears <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none3.jpg`)'>very thin shorts without any underwear</span> these days.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/jean/profile3.jpg";}
						break;
					}
					case 4: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
						document.getElementById('otherStatus').innerHTML = "Status: Buttslut Sister";
						document.getElementById('otherClothes').innerHTML = "She's been wearing skimpier outfits lately. Today, she's wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/shorts.jpg`)'>thin top and even thinner shorts.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Instead of wearing her usual lounging pants, she mostly wears <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none3.jpg`)'>very thin shorts without any underwear</span> these days.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/jean/profile4.jpg";}
						break;
					}
					case 5: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
						document.getElementById('otherStatus').innerHTML = "Status: Anal Sex Junkie";
						document.getElementById('otherClothes').innerHTML = "She <span class = 'selfSwitch' onclick = 'selfImage(`images/real/jean/naked.jpg`)'>doesn't wear clothes around the house anymore</span>.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Nowadays, she refuses to wear anything to cover her ass, preferring that you be able to see her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none7.jpg`)'>ruined asshole</span> 24/7.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/jean/profile5.jpg";}
						break;
					}
				}
			}
			else {
				document.getElementById('otherName').innerHTML = "Name: " + data.story.sisterName;
				document.getElementById('otherStatus').innerHTML = "Status: Alteration App User";
				document.getElementById('otherClothes').innerHTML = "According to her, 'Erotic clothes are hotter than being naked'. She straddles the line these days, wearing an outfit made of latex and pasties.";
				document.getElementById('otherChest').innerHTML = "Her breasts aren't anywhere near as large as your mother's, but she's plumped up by a good amount. When she thinks you aren't looking she'll spend a good amount of time some days just kneading and rubbing them, enjoying her new size.";
				document.getElementById('otherJunk').innerHTML = "She isn't reserved about letting her dick bulge be visible through her underwear. When it isn't erect its a pretty manageable size, but when she gets going it can grow up to a foot long.";
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/jean.jpg";}
			}
			break;
		}
		case 'chef':{
			document.getElementById('otherCorruption').innerHTML = "Corruption: " + data.story.chefScore;
			if (data.story.route == "dom") {
				switch (data.story.chefScore) {
					case 0: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.chefName;
						document.getElementById('otherStatus').innerHTML = "Status: Exhausted Widow";
						document.getElementById('otherClothes').innerHTML = "When she isn't working, she tends towards a casual <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/jeansShirt.jpg`)'>t-shirt and jeans combo.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs5.gif`)'>large, D-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You have no idea what she might look like under her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/pants3.jpg`)'>jeans.</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/ava/profile1.jpg";}
						break;
					}
					case 1: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.chefName;
						document.getElementById('otherStatus').innerHTML = "Status: Working Widow";
						document.getElementById('otherClothes').innerHTML = "When she isn't working, she tends towards a casual <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/jeansShirt.jpg`)'>t-shirt and jeans combo.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs5.gif`)'>large, D-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You have no idea what she might look like under her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/pants3.jpg`)'>jeans.</span>";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/ava/profile2.jpg";}
						break;
					}
					case 2: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.chefName;
						document.getElementById('otherStatus').innerHTML = "Status: Cum-Drinking Barista";
						document.getElementById('otherClothes').innerHTML = "She's taken to wearing nicer clothes lately. When the shop's open, she's usually wearing <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogaSuit.jpg`)'>a blazer and tight pants.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs5.gif`)'>large, D-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Since you've started hanging around her more, you've had a chance to see what kind of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic2.jpg`)'>underwear</span> she prefers.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/ava/profile3.jpg";}
						break;
					}
					case 3: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.chefName;
						document.getElementById('otherStatus').innerHTML = "Status: Semen Slurper";
						document.getElementById('otherClothes').innerHTML = "She's taken to wearing nicer clothes lately. When the shop's open, she's usually wearing <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogaSuit.jpg`)'>a blazer and tight pants.</span>";
						document.getElementById('otherChest').innerHTML = "It might be because of her new diet, but her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs13.jpg`)'>F-cup breasts</span> jsut keep growing.";
						document.getElementById('otherJunk').innerHTML = "Since you've started hanging around her more, you've had a chance to see what kind of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic2.jpg`)'>underwear</span> she prefers.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/ava/profile4.jpg";}
						break;
					}
					case 4: {
						document.getElementById('otherName').innerHTML = "Name: " + data.story.chefName;
						document.getElementById('otherStatus').innerHTML = "Status: Exotic Entrepreneur";
						document.getElementById('otherClothes').innerHTML = "She's taken to wearing nicer clothes lately. When the shop's open, she's usually wearing <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogaSuit.jpg`)'>a blazer and tight pants.</span>";
						document.getElementById('otherChest').innerHTML = "It might be because of her new diet, but her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs13.jpg`)'>F-cup breasts</span> jsut keep growing.";
						document.getElementById('otherJunk').innerHTML = "Her collection of lingere is actually pretty impressive. Your favorite is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic4.jpg`)'>pair that don't even cover her ass</span>.";
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/ava/profile5.jpg";}
						break;
					}
				}
			}
			else {
				document.getElementById('otherName').innerHTML = "Name: " + data.story.chefName;
				document.getElementById('otherStatus').innerHTML = "Status: Maid Cafe Owner";
				document.getElementById('otherClothes').innerHTML = "Her new business is a self-run maid cafe, probably based on some anime. She doesn't even wear a uniform. She just wears an apron and some leather bondage gear underneath it.";
				document.getElementById('otherChest').innerHTML = "Her new breasts are pretty modest to match her now much younger body. Her nipples are very visible through her apron though.";
				document.getElementById('otherJunk').innerHTML = "She doesn't wear any kind of underwear, just an assortment of condoms she switches through along the course of the day. Even if she isn't playing with herself she's always leaking and building up more sperm. Serveral times during the day she'll stop on the spot to have a spontaneous, hands-free orgasm and then head to the kitchen to put on a fresh condom.";
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/ava.jpg";}
			}
			break;
		}
		case 'friend':{
			document.getElementById('otherCorruption').innerHTML = "Corruption: " + data.story.friendScore;
			if (data.story.route == "dom") {
				switch (data.story.friendScore) {
					case 0: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/riley/profile1.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
						document.getElementById('otherStatus').innerHTML = "Status: Fellow Student";
						document.getElementById('otherClothes').innerHTML = "She usually comes to class wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/school.jpg`)'>white & red school uniform.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You've never seen what she looks like <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt5.jpg`)'>under her clothes.</span>";
						break;
					}
					case 1: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/riley/profile1.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
						document.getElementById('otherStatus').innerHTML = "Status: Your Girlfriend";
						document.getElementById('otherClothes').innerHTML = "She usually comes to class wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/school.jpg`)'>white & red school uniform.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You've never seen what she looks like <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt5.jpg`)'>under her clothes.</span>";
						break;
					}
					case 2: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/riley/profile2.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
						document.getElementById('otherStatus').innerHTML = "Status: Your Girlfriend";
						document.getElementById('otherClothes').innerHTML = "She usually comes to class wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/school.jpg`)'>white & red school uniform.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You've never seen what she looks like <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt5.jpg`)'>under her clothes.</span>";
						break;
					}
					case 3: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/riley/profile3.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
						document.getElementById('otherStatus').innerHTML = "Status: Curious About the App";
						document.getElementById('otherClothes').innerHTML = "She usually comes to class wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/school.jpg`)'>white & red school uniform.</span>";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Out of the kindness of her heart (and after a great many requests), she sent you an <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none8.jpg`)'>underskirt selfie.</span>";
						break;
					}
					case 4: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/riley/profile4.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
						document.getElementById('otherStatus').innerHTML = "Status: Loving Girlfriend";
						document.getElementById('otherClothes').innerHTML = "The other day, she sent you a selfie of a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/transparentSchool.jpg`)'>special dress</span> she'd like to wear to school one day.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Out of the kindness of her heart (and after a great many requests), she sent you an <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none8.jpg`)'>underskirt selfie.</span>";
						break;
					}
					case 5: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/riley/profile5.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
						document.getElementById('otherStatus').innerHTML = "Status: Loving Girlfriend";
						document.getElementById('otherClothes').innerHTML = "With your assistance she's been able to wear a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/transparentShort.jpg`)'>transparent dress</span> on school grounds.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "Out of the kindness of her heart (and after a great many requests), she sent you an <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none8.jpg`)'>underskirt selfie.</span>";
						break;
					}
				}
			}
			else {
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/riley.jpg";}
				document.getElementById('otherName').innerHTML = "Name: " + data.story.friendName;
				document.getElementById('otherStatus').innerHTML = "Status: Shemale Student";
				document.getElementById('otherClothes').innerHTML = "She still wears a uniform to school, but its a lot more Japanese-inspired than it was before.";
				document.getElementById('otherChest').innerHTML = "Her tits are really large for a student. The way they bounce as she moves around makes me think she doesn't wear a bra to school.";
				document.getElementById('otherJunk').innerHTML = "Underneath her skirt is a huge dick, way too big for underwear to cover, even when its soft. It doesn't happen with anyone else, but whenever she's around me for very long she needs to excuse herself to the bathroom almost right away.";
			}
			break;
		}
		case 'office':{
			document.getElementById('otherCorruption').innerHTML = "Corruption: " + data.story.officeScore;
			if (data.story.route == "dom") {
				switch (data.story.officeScore) {
					case 0: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/alexis/profile1.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.officeName;
						document.getElementById('otherStatus').innerHTML = "Status: Business Woman";
						document.getElementById('otherClothes').innerHTML = "She's usually wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/suitBlack.jpg`)'>well-fitted business suit</span> when she walks by.";
						document.getElementById('otherChest').innerHTML = "She probably has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.gif`)'>B-cup breasts</span>.";
						document.getElementById('otherJunk').innerHTML = "You've never seen what she looks like <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/pants6.jpg`)'>under her clothes</span>.";
						break;
					}
					case 1: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/alexis/profile2.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.officeName;
						document.getElementById('otherStatus').innerHTML = "Status: Horny Secretary";
						document.getElementById('otherClothes').innerHTML = "Lately she's ditched the boring pantsuit for the sake of a much <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/officeShort.jpg`)'>skimpier skirt</span>. It's almost like her preferences have completely flipped.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.gif`)'>B-cup breasts</span>.";
						document.getElementById('otherJunk').innerHTML = "Tragically, because of her skirt's short length whenever she bends over she flashes everyone around her a shot of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular3.jpg`)'>thin panties</span>.";
						break;
					}
					case 2: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/alexis/profile3.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.officeName;
						document.getElementById('otherStatus').innerHTML = "Status: Professional Whore";
						document.getElementById('otherClothes').innerHTML = "Lately she's ditched the boring pantsuit for the sake of a much <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/officeShort.jpg`)'>skimpier skirt</span>. It's almost like her preferences have completely flipped.";
						document.getElementById('otherChest').innerHTML = "Like magic, her bust size went up recently. Now she has large <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs7.gif`)'>DD-cup breasts</span>.";
						document.getElementById('otherJunk').innerHTML = "Tragically, because of her skirt's short length whenever she bends over she flashes everyone around her a shot of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular3.jpg`)'>thin panties</span>.";
						break;
					}
					case 3: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/alexis/profile4.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.officeName;
						document.getElementById('otherStatus').innerHTML = "Status: Public Relief Fixture";
						document.getElementById('otherClothes').innerHTML = "Last you heard she sold most of her designer clothes and replaced them with a collection of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressSkimpy.jpg`)'>titillating outfits</span> that make her profession clear.";
						document.getElementById('otherChest').innerHTML = "Like magic, her bust size went up recently. Now she has large <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs7.gif`)'>DD-cup breasts</span>.";
						document.getElementById('otherJunk').innerHTML = "As a professional, her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic3.jpg`)'>thong</span> is more of an advertisement than clothing at this point.";
						break;
					}
				}
			}
			else {
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/alexis.jpg";}
				document.getElementById('otherName').innerHTML = "Name: " + data.story.officeName;
				document.getElementById('otherStatus').innerHTML = "Status: Exhibitionist";
				document.getElementById('otherClothes').innerHTML = "Her outfit is a lot more fashionable now. She tends to wear sweaters and skirts a lot more often than business suits these days. I'm not sure why the glasses were added though.";
				document.getElementById('otherChest').innerHTML = "Her breasts are around the same size, but they're a lot more noticeable now that she wears tighter clothing with no bra.";
				document.getElementById('otherJunk').innerHTML = "She doesn't even think twice about exposing herself in public, so it's pretty obvious that she'd go commando at all times. She doesn't even tape her dick to her leg to hide it either, I think she gets off on knowing that others can see her erection.";
			}
			break;
		}
		case 'teacher':{
			document.getElementById('otherCorruption').innerHTML = "Corruption: " + data.story.teacherScore;
			if (data.story.route == "dom") {
				switch (data.story.teacherScore) {
					case 0: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/kendra/profile1.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
						document.getElementById('otherStatus').innerHTML = "Status: Disgruntled Teacher";
						document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacher.jpg`)'>white blouse</span> and a grey pencil skirt.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "It might not have been an accident, but you saw her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'>erotic, partially transparent thong</span> once when she bent over.";
						break;
					}
					case 1: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/kendra/profile1.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
						document.getElementById('otherStatus').innerHTML = "Status: Gullible Teacher";
						document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacher.jpg`)'>white blouse</span> and a grey pencil skirt.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "You've gotten a good look at her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'>erotic, partially transparent thong</span> lately.";
						break;
					}
					case 2: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/kendra/profile3.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
						document.getElementById('otherStatus').innerHTML = "Status: Research Partner";
						document.getElementById('otherClothes').innerHTML = "Her new preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacherSexy.jpg`)'>exposing blouse</span> and a grey skirt.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "She makes sure to keep her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt4.jpg`)'>skirt pulled up</span> whenever you and she are alone.";
						break;
					}
					case 3: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/kendra/casual2.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
						document.getElementById('otherStatus').innerHTML = "Status: Research Experiment";
						document.getElementById('otherClothes').innerHTML = "Her new preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacherSexy.jpg`)'>exposing blouse</span> and a grey skirt.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "She makes sure to keep her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt4.jpg`)'>skirt pulled up</span> whenever you and she are alone.";
						break;
					}
					case 4: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/kendra/profile5.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
						document.getElementById('otherStatus').innerHTML = "Status: Classroom Toy";
						document.getElementById('otherClothes').innerHTML = "Her new preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacherSexy.jpg`)'>exposing blouse</span> and a grey skirt.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "By now she understands that <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none6.jpg`)'>wearing underwear</span> on school grounds is pointless.";
						break;
					}
					case 5: {
						if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/real/kendra/casual4.jpg";}
						document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
						document.getElementById('otherStatus').innerHTML = "Status: School Fixture";
						document.getElementById('otherClothes').innerHTML = "Obviously she can't wear professional looking clothes anymore. Now she wears a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/microbikini.jpg`)'>microbikini</span> to school.";
						document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>";
						document.getElementById('otherJunk').innerHTML = "By now she understands that <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none6.jpg`)'>wearing underwear</span> on school grounds is pointless.";
						break;
					}
				}
			}
			else {
				if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/aya/kendra.jpg";}
				document.getElementById('otherName').innerHTML = "Name: " + data.story.teacherName;
				document.getElementById('otherStatus').innerHTML = "Status: Dysfunctional Teacher";
				document.getElementById('otherClothes').innerHTML = "I guess " + data.story.sisterName + " must have held a grudge against her from when she was still in school, because " + data.story.teacherName + " isn't even able to wear normal clothes anymore. She comes to class wearing a bikini and low cut shorts.";
				document.getElementById('otherChest').innerHTML = "Her tits are around the same size, but in her outfit they get even more staring looks. She doesn't seem to mind either. I saw a student reach out and twist one of her nipples because she was 'being a bitch' and all she did was grind against him while he did it.";
				document.getElementById('otherJunk').innerHTML = "And to top it all off, her shorts don't even contain her dick. It's half hanging out at all times but nobody even seems to notice. It doesn't even seem to get hard that often either, I've seen her with an erection maybe once, but most of the time it just hangs there covered in sagging foreskin.";
			}
			break;
		}
		case 'doll':{
			if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/doll/profile1.png";}
			document.getElementById('otherName').innerHTML = "Name: " + data.story.dollName;
			document.getElementById('otherStatus').innerHTML = "Status: Loving Companion";
			document.getElementById('otherClothes').innerHTML = "Her only outfit is a red sundress. On the tag on the back it says 'OuttaSync'. That must be the doll's creator.";
			document.getElementById('otherChest').innerHTML = "She has no breasts to speak of, but she has a great personality.";
			document.getElementById('otherJunk').innerHTML = "Underneath her dress is a highly-flexible pocket pussy. She says due to its elasticity, she can enjoy sex with anyone no matter their size.";
			break;
		}
		case 'vr':{
			if (data.story.route == "dom") {
			switch (data.story.vrScore) {
				case 0:
					if (imagesDisabled != true) {document.getElementById('selfImage').src = "images/drawn/vr/profile1.jpg";}
					document.getElementById('otherName').innerHTML = "Name: " + data.story.vrName;
					document.getElementById('otherStatus').innerHTML = "Status: Beloved Princess";
					document.getElementById('otherClothes').innerHTML = "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacher.jpg`)'>flowing pink ballgown.</span>";
					document.getElementById('otherChest').innerHTML = "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacher.jpg`)'>gigantic, H-cup breasts.</span>";
					document.getElementById('otherJunk').innerHTML = "Between her legs is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacher.jpg`)'>plump, unused vagina.</span>";
				break;
				}
			}
			break;
		}
	}
	generateLogbookGallery(n);
}

function generateLogbookGallery(n) {
	for (i = 0; i < data.galleryArray.length; i++) {
		if (data.galleryArray[i].index.includes(n)) {
			if (data.galleryArray[i].unlocked == true) {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + data.galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</span>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + data.galleryArray[i].name + '<br>' + data.galleryArray[i].hint + '</span>';
				break;
			}
		}
	}
}

function selfImage(img) {
	document.getElementById('selfImage').src = img;
}

//Inventory
function generateInv() {
	clearInv();
	if (data.story.popRocks > 0) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">Pop Rocks</p>
			<p id = "popRocks" class = "itemQuantity">9</p>
			<img class ="itemImage" src="images/real/items/popRocks.jpg">
		</div>
		`;
		document.getElementById('popRocks').innerHTML = data.story.popRocks;
	}
	if (data.story.caramelMelts > 0) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">Caramel Melts</p>
			<p id = "caramelMelts" class = "itemQuantity">9</p>
			<img class ="itemImage" src="images/real/items/caramelMelts.jpg">
		</div>
		`;
		document.getElementById('caramelMelts').innerHTML = data.story.caramelMelts;
	}
	if (data.story.plugPops > 0) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">Plug Pops</p>
			<p id = "plugPops" class = "itemQuantity">9</p>
			<img class ="itemImage" src="images/real/items/plugPop.jpg">
		</div>
		`;
		document.getElementById('plugPops').innerHTML = data.story.plugPops;
	}
	if (data.story.stretchyTaffy > 0) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">Stretchy Taffy</p>
			<p id = "stretchyTaffy" class = "itemQuantity">9</p>
			<img class ="itemImage" src="images/real/items/stretchTaffy.jpg">
		</div>
		`;
		document.getElementById('stretchyTaffy').innerHTML = data.story.stretchyTaffy;
	}
	if (data.story.fruitGushers > 0) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">Fruit Gushers</p>
			<p id = "fruitGushers" class = "itemQuantity">9</p>
			<img class ="itemImage" src="images/real/items/fruitGushers.jpg">
		</div>
		`;
		document.getElementById('fruitGushers').innerHTML = data.story.fruitGushers;
	}
	if (data.story.vrMachine == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">VR Machine</p>
			<img class ="itemImage" src="images/real/items/vrMachine.jpg">
		</div>
		`;
	}
	if (data.story.laptop == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Laptop</p>
			<img class ="itemImage" src="images/real/items/laptop.jpg">
		</div>
		`;
	}
	if (data.story.creamer == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Creamer</p>
			<img class ="itemImage" src="images/real/items/creamer.jpg">
		</div>
		`;
	}
	if (data.story.doll == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Doll</p>
			<img class ="itemImage" src="images/real/items/doll.png">
		</div>
		`;
	}
	if (data.story.toy == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Adult Toy</p>
			<img class ="itemImage" src="images/real/items/adultToy.jpg">
		</div>
		`;
	}
	if (data.story.onahole == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Onahole</p>
			<img class ="itemImage" src="images/real/items/onahole.jpg">
		</div>
		`;
	}
	if (data.story.horse == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Horse Toy</p>
			<img class ="itemImage" src="images/real/items/horseToy.jpg">
		</div>
		`;
	}
	if (data.story.princessGame > 0) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Princess Quest</p>
			<img class ="itemImage" src="images/real/items/princessGame.jpg">
		</div>
		`;
	}
	if (data.story.princessGame > 1) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Princess Quest Guide</p>
			<img class ="itemImage" src="images/real/items/princessGame.jpg">
		</div>
		`;
	}
	if (data.story.zombieGame > 0) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Rainy DayZ</p>
			<img class ="itemImage" src="images/real/items/zombieGame.jpg">
		</div>
		`;
	}
	if (data.story.zombieGame > 1) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Rainy DayZ Guide</p>
			<img class ="itemImage" src="images/real/items/zombieGame.jpg">
		</div>
		`;
	}
	if (data.story.beautyTicket == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Beauty Ticket</p>
			<img class ="itemImage" src="images/real/items/beautyTicket.jpg">
		</div>
		`;
	}
	if (data.story.candyTicket == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Candy Ticket</p>
			<img class ="itemImage" src="images/real/items/candyTicket.jpg">
		</div>
		`;
	}
	if (data.story.clothingTicket == true) {
		document.getElementById('windowRight').innerHTML += `
		<div class = "item">
			<p class = "itemName">Clothing Ticket</p>
			<img class ="itemImage" src="images/real/items/clothingTicket.jpg">
		</div>
		`;
	}
}

function clearInv() {
	document.getElementById('windowLeft').innerHTML = ""
	document.getElementById('windowRight').innerHTML = ""
	document.getElementById('wardrobeLeft').innerHTML = ""
	document.getElementById('wardrobeRight').innerHTML = ""
}

//Wardrobe
function generateWardrobe() {
	clearInv();
	for (i = 0; i < data.clothingArray.length; i++) {
		if (data.clothingArray[i].owned == true) {
			document.getElementById('wardrobeLeft').innerHTML += '<div class = "wardrobeItem" onclick = "wear(`clothing`, ' + i + ')"><p class = "itemName">' + data.clothingArray[i].name + '</p><img class ="itemImage" src="' + data.clothingArray[i].image + '"></div>';
		}
	}
	for (i = 0; i < data.underwearArray.length; i++) {
		if (data.underwearArray[i].owned == true) {
			document.getElementById('wardrobeRight').innerHTML += '<div class = "wardrobeItem" onclick = "wear(`underwear`, ' + i + ')"><p class = "itemName">' + data.underwearArray[i].name + '</p><img class ="itemImage" src="' + data.underwearArray[i].image + '"></div>';
		}
	}
}

function wear(type, n) {
	if (type == 'clothing') {
		if (n == 0) {
			document.getElementById("playerClothes").style.width = "0%";
			document.getElementById("playerClothes").style.border = "none";
			data.story.clothing = n;
		}
		else {
			document.getElementById("playerClothes").style.width = "95%";
			document.getElementById("playerClothes").style.border = "3px solid white";
			data.story.clothing = n;
			document.getElementById('playerClothes').src = data.clothingArray[n].image;
		}
	}
	if (type == 'underwear') {
		data.story.underwear = n;
		document.getElementById('playerUnderwear').src = data.underwearArray[n].image;
		if (n == 0) {
			switch (data.story.bodytype) {
				case 1:
					document.getElementById('playerUnderwear').src = "images/real/body/buttM2.jpg";
				break;
				case 2:
					document.getElementById('playerUnderwear').src = "images/real/body/junk5.jpg";
				break;
				case 3:
					document.getElementById('playerUnderwear').src = "images/real/body/naked3.jpg";
				break;
				case 4:
					document.getElementById('playerUnderwear').src = "images/drawn/clothes/commando.jpg";
				break;
			}
		}
	}
}

//Shops
function generateExoticShop() {
	if (data.story.doll == false) {
		if (data.story.route == "sub") {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('doll')">
				<p class = "shopName">Enchanted Doll</p>
				<p class = "shopDesc">Lonely? Desperate? This lovely lady can keep the less-endowed among you company during the darker nights. Stretches to accomodate all sizes! Art by OuttaSync.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/doll.png">
			</div>
			`;
		}
	}
	if (data.story.toy == false) {
		if (data.story.route == "dom") {
			document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('toy')">
				<p class = "shopName">Adult Toy</p>
				<p class = "shopDesc">You know what this is, and what it can do.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/adultToy.jpg">
			</div>
			`;
		}
	}
	if (data.story.onahole == false) {
		if (data.story.route == "dom") {
			document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('onahole')">
				<p class = "shopName">Onahole</p>
				<p class = "shopDesc">You're an app user, so you shouldn't need this. Unless you're feeling creative, that is.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/onahole.jpg">
			</div>
			`;
		}
	}
	if (data.story.vrMachine == false) {
		/*document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('vrMachine')">
				<p class = "shopName">VR Machine</p>
				<p class = "shopDesc">Want something to spice up that virtual life? This machine is so real, you'll swear you're getting lectured on financial responsibility!</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/vrMachine.jpg">
			</div>
		`;
		*/
	}
	else {
		/*
		if (data.story.princessGame == false) {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem" onclick = "purchase('princessGame')">
					<p class = "shopName">Princess Quest</p>
					<p class = "shopDesc">An adult game for the VR machine. Heavy focus on corruption and all that weird shit from your R18 chinese cartoons.</p>
					<p class = "shopPrice">$5</p>
					<img class="shopImage" src="images/real/items/princessGame.jpg">
				</div>
			`;
		}
		else {
			if (data.story.princessGame == true) {
				document.getElementById('output').innerHTML += `
					<br>
					<div class = "shopItem" onclick = "purchase('princessGuide')">
						<p class = "shopName">Princess Quest Guide</p>
						<p class = "shopDesc">A strategy guide for the game Princess Quest. Contains guides for each level, and how to unlock secrets.</p>
						<p class = "shopPrice">$5</p>
						<img class="shopImage" src="images/real/items/princessGame.jpg">
					</div>
				`;
			}
		}
		if (data.story.zombieGame == false) {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem" onclick = "purchase('zombieGame')">
					<p class = "shopName">Rainy DayZ</p>
					<p class = "shopDesc">An adult game for the VR machine. Heavy focus on futa and non-undead zombies.</p>
					<p class = "shopPrice">$5</p>
					<img class="shopImage" src="images/real/items/zombieGame.jpg">
				</div>
			`;
		}
		else {
			if (data.story.zombieGame == true) {
				document.getElementById('output').innerHTML += `
					<br>
					<div class = "shopItem" onclick = "purchase('zombieGuide')">
						<p class = "shopName">Rainy DayZ Guide</p>
						<p class = "shopDesc">A strategy guide for the game Rainy DayZ. Contains guides for how to unlock each scene.</p>
						<p class = "shopPrice">$5</p>
						<img class="shopImage" src="images/real/items/zombieGame.jpg">
					</div>
				`;
			}
		}
		*/
	}
	if (data.story.laptop == false) {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('laptop')">
				<p class = "shopName">Laptop</p>
				<p class = "shopDesc">A portable computer (that you'll use to look up porn).</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/laptop.jpg">
			</div>
		`;
	}
	if (data.story.creamer == false) {
		if (data.story.route == "dom") {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem" onclick = "purchase('creamer')">
					<p class = "shopName">Coffee Creamer</p>
					<p class = "shopDesc">An easily re-sealable cup of a generic white coffee creamer.</p>
					<p class = "shopPrice">$5</p>
					<img class="shopImage" src="images/real/items/creamer.jpg">
				</div>
			`;
		}
	}
	if (data.story.horse == false) {
		if (data.story.route == "dom") {
			document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('horse')">
				<p class = "shopName">Horse Toy</p>
				<p class = "shopDesc">This is the meat that can't be beat! Warning, not for the faint of heart / inflexible of body.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/horseToy.jpg">
			</div>
			`;
		}
	}
	if (data.story.beautyTicket == false) {
		if (data.story.route == "dom") {
			document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('beautyTicket')">
				<p class = "shopName">Beauty Ticket</p>
				<p class = "shopDesc">Unlocks additional exotic purchases at the Beauty Salon.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/beautyTicket.jpg">
			</div>
			`;
		}
	}
	if (data.story.candyTicket == false) {
		document.getElementById('output').innerHTML += `
		<br>
		<div class = "shopItem" onclick = "purchase('candyTicket')">
			<p class = "shopName">Candy Ticket</p>
			<p class = "shopDesc">Unlocks additional exotic purchases at the Candy Shop.</p>
			<p class = "shopPrice">$5</p>
			<img class="shopImage" src="images/real/items/candyTicket.jpg">
		</div>
		`;
	}
	if (data.story.clothingTicket == false) {
		if (data.story.route == "dom") {
			document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('clothesTicket')">
				<p class = "shopName">Clothing Ticket</p>
				<p class = "shopDesc">Unlocks additional exotic purchases at the Clothing Store.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/items/clothingTicket.jpg">
			</div>
			`;
		}
	}
	if (data.story.clothingTicket == true && data.story.beautyTicket == true && data.story.candyTicket == true && galleryCheck("misc1") == false) {
		document.getElementById('output').innerHTML += `
		<br>
		<div class = "shopItem" onclick = "purchase('exoticSpecial1')">
			<p class = "shopName">Special Service</p>
			<p class = "shopDesc">Purchase something special.</p>
			<p class = "shopPrice">$10</p>
			<img class="shopImage" src="scripts/gamefiles/real/adriana.jpg">
		</div>
		`;
	}
	if (data.story.toy == true && data.story.horse == true && galleryCheck("misc1") == true && galleryCheck("misc2") == false) {
		document.getElementById('output').innerHTML += `
		<br>
		<div class = "shopItem" onclick = "purchase('exoticSpecial2')">
			<p class = "shopName">Special Service</p>
			<p class = "shopDesc">Purchase something special.</p>
			<p class = "shopPrice">$10</p>
			<img class="shopImage" src="scripts/gamefiles/real/adriana.jpg">
		</div>
		`;
	}
}

function generateCandyShop() {
	//Generate Pop Rocks
	document.getElementById('output').innerHTML += `
	<br>
	<div class = "shopItem" onclick = "purchase('popRocks')">
		<p class = "shopName">Pop Rocks</p>
		<p class = "shopDesc">You'll be sputtering endlessly! Even the slightest breeze will have you cross-eyed and firing!<br>Warning: Induces premature ejaculation and excessive semen production.</p>
		<p class = "shopPrice">$5</p>
		<img class="shopImage" src="images/real/items/popRocks.jpg">
	</div>
	`;
	//Generate Caramel Melts
	document.getElementById('output').innerHTML += `
	<br>
	<div class = "shopItem" onclick = "purchase('caramelMelts')">
		<p class = "shopName">Caramel Melts</p>
		<p class = "shopDesc">These melt in your mouth, making everything you put in afterwards taste heavenly! Warning: Induces a strong desire for 'irrumatio' play. Remember: dick is not a healthy alternative for oxygen.</p>
		<p class = "shopPrice">$5</p>
		<img class="shopImage" src="images/real/items/caramelMelts.jpg">
	</div>
	`;	
	//Generate Plug Pops
	document.getElementById('output').innerHTML += `
	<br>
	<div class = "shopItem" onclick = "purchase('plugPops')">
		<p class = "shopName">Plug Pop</p>
		<p class = "shopDesc">These suckers will pucker and plump you up! Permanently cleans, slickens, and keeps clean the digestive tract, rectum, and sphincter. Not meant for oral use.</p>
		<p class = "shopPrice">$5</p>
		<img class="shopImage" src="images/real/items/plugPop.jpg">
	</div>
	`;	
	//Generate stretchyTaffy
	document.getElementById('output').innerHTML += `
	<br>
	<div class = "shopItem" onclick = "purchase('stretchyTaffy')">
		<p class = "shopName">Stretchy Taffy</p>
		<p class = "shopDesc">Ever feel like you or your lover are just too wound up? Take a bit of these, and you'll have no problems fitting in anywhere! Warning: Side effects include preparing your body for anal sex.</p>
		<p class = "shopPrice">$5</p>
		<img class="shopImage" src="images/real/items/stretchTaffy.jpg">
	</div>
	`;		
	//Generate fruitGushers
	document.getElementById('output').innerHTML += `
	<br>
	<div class = "shopItem" onclick = "purchase('fruitGushers')">
		<p class = "shopName">Fruit Gusher</p>
		<p class = "shopDesc">Let's be real here. Watersports can be tough to schedule. Not a problem here! Chew on one of these and you'll be a garden hose for a few minutes at a time. Feels and tastes great too!</p>
		<p class = "shopPrice">$5</p>
		<img class="shopImage" src="images/real/items/fruitGushers.jpg">
	</div>
	`;	
}

function generateBeautyShop() {
	if (data.story.route == "sub" || data.story.bodytype != 1) {
		if (data.story.chestSize < 5) {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem" onclick = "purchase('chestUp')">
					<p class = "shopName">Breast Enhancement</p>
					<p class = "shopDesc">Everybody can feel like they don't measure up, especially would-be stud hunters. One injection of our special formula will have you swinging our praises!</p>
					<p class = "shopPrice">$5</p>
					<img class="shopImage" src="images/real/body/boobs7.gif">
				</div>
			`;
		}
		if (data.story.buttSize < 5) {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem" onclick = "purchase('buttUp')">
					<p class = "shopName">Ass Enhancement</p>
					<p class = "shopDesc">For the enlightened ones of the modern era, one injection of this formula will move you forwards along the path to a fat booty.</p>
					<p class = "shopPrice">$5</p>
					<img class="shopImage" src="images/real/body/butt6.gif">
				</div>
			`;
		}
		if (data.story.lipSize < 3) {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem" onclick = "purchase('lipsUp')">
					<p class = "shopName">Lips Enhancement</p>
					<p class = "shopDesc">From a tiny touch-up to slapping a pair of erotic DSLs onto your face, this injection is the one you need.</p>
					<p class = "shopPrice">$5</p>
					<img class="shopImage" src="images/real/body/lips4.jpg">
				</div>
			`;
		}
	}
	if (data.story.bodytype != 1) {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('newBody1')">
				<p class = "shopName">Complete Alteration (Macho)</p>
				<p class = "shopDesc">An experimental surgery that will completely change the way you look at yourself.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/body/body1.jpg">
			</div>
		`;
	}
	if (data.story.bodytype != 2) {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('newBody2')">
				<p class = "shopName">Complete Alteration (Sissy)</p>
				<p class = "shopDesc">An experimental surgery that will completely change the way you look at yourself.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/body/body2.jpg">
			</div>
		`;
	}
	if (data.story.bodytype != 3) {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('newBody3')">
				<p class = "shopName">Complete Alteration (Shemale)</p>
				<p class = "shopDesc">An experimental surgery that will completely change the way you look at yourself.</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="images/real/body/body3.jpg">
			</div>
		`;
	}
}

function generateClothingShop(target) {
	for (i = 0; i < data.clothingArray.length; i++) {
		if (data.clothingArray[i].owned == false && data.clothingArray[i].category == target) {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('clothing` + i + `')">
				<p class = "shopName">` +  data.clothingArray[i].name + `</p>
				<p class = "shopDesc">` + data.clothingArray[i].description + `</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="` + data.clothingArray[i].image + `">
			</div>
			`;
		}
	}
	for (i = 0; i < data.underwearArray.length; i++) {
		if (data.underwearArray[i].owned == false && data.underwearArray[i].category == target) {
		document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('underwear` + i + `')">
				<p class = "shopName">` +  data.underwearArray[i].name + `</p>
				<p class = "shopDesc">` + data.underwearArray[i].description + `</p>
				<p class = "shopPrice">$5</p>
				<img class="shopImage" src="` + data.underwearArray[i].image + `">
			</div>
			`;
		}
	}
	if (target == "special") {
		if (data.story.clothingTicket == true && galleryCheck("misc4") == false) {
			document.getElementById('output').innerHTML += `
			<br>
			<div class = "shopItem" onclick = "purchase('ginaSpecial')">
				<p class = "shopName">Special Service</p>
				<p class = "shopDesc">Purchase something special.</p>
				<p class = "shopPrice">$50</p>
				<img class="shopImage" src="scripts/gamefiles/real/gina.jpg">
			</div>
			`;
		}
	}
}

function purchase(good) { //Thanks to aevojoey for help with this section
	flashMoney();
	var n;
	if (good.includes("clothing") === true) {
		n = parseInt(good.substring(8, good.length));
		good = "clothing";
	}
	if (good.includes("underwear") === true) {
		n = parseInt(good.substring(9, good.length));
		good = "underwear";
	}
	if (good.includes("newBody") === true) {
		n = parseInt(good.substring(7, good.length));
		good = "newBody";
	}
	switch (good) {
		case "popRocks": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.popRocks += 1;
			}
			break;
		}
		case "caramelMelts": { 
			if (data.story.money > 4)	{ 
				data.story.money -=5;   
				data.story.caramelMelts += 1;           
			} 
			break;
		} 
		case "plugPops": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.plugPops += 1;
			}
			break;
		}
		case "stretchyTaffy": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.stretchyTaffy += 1;
			}
			break;
		}
		case "fruitGushers": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.fruitGushers += 1;
			}
			break;
		}
		case "laptop": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.laptop += 1;
			}
			break;
		}
		case "creamer": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.creamer += 1;
			}
			break;
		}
		case "toy": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.toy += 1;
			}
			break;
		}
		case "onahole": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.onahole += 1;
			}
			break;
		}
		case "horse": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.horse += 1;
			}
			break;
		}
		case "princessGame": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.princessGame += 1;
			}
			break;
		}
		case "princessGuide": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.princessGame += 1;
			}
			break;
		}
		case "zombieGame": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.zombieGame += 1;
			}
			break;
		}
		case "zombieGuide": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.zombieGame += 1;
			}
			break;
		}
		case "beautyTicket": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.beautyTicket += 1;
			}
			break;
		}
		case "candyTicket": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.candyTicket += 1;
			}
			break;
		}
		case "clothesTicket": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.clothingTicket += 1;
			}
			break;
		}
		case "vrMachine": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.vrMachine += 1;
			}
			break;
		}
		case "doll": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.doll = true;
				data.story.currentScene = "doll";
			}
			break;
		}
		case "newBody": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.currentScene = "bodyChange";
				updateBody(n);
			}
			break;
		}
		case "chestUp": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.currentScene = "chestUp";
			}
			break;
		}
		case "buttUp": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.currentScene = "buttUp";
			}
			break;
		}
		case "lipsUp": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.currentScene = "lipsUp";
			}
			break;
		}
		case "clothing": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.clothingArray[n].owned = true;
			}
			break;
		}
		case "underwear": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.underwearArray[n].owned = true;
			}
			break;
		}
		case "ginaSpecial": { 
			if (data.story.money > 4) {
				data.story.money -=5;
				data.story.currentScene = "clothingSpecial";
			}
			break;
		}
		case "exoticSpecial1": { 
			if (data.story.money > 9) {
				data.story.money -=10;
				data.story.currentScene = "exoticSpecial1";
			}
			break;
		}
		case "exoticSpecial2": { 
			if (data.story.money > 9) {
				data.story.money -=10;
				data.story.currentScene = "exoticSpecial2";
			}
			break;
		}
		default: break;
	}
	updateMenu();
	sceneTransition(data.story.currentScene);
}

//Zombie Game functions
function generateZombieInv() {
	if (zombieInvShowing == false) {
		zombieInvShowing = true;
		for (i = 0; i < data.zombieInventory.length; i++) {
			document.getElementById('output').innerHTML += `
				<br>
				<div class = "shopItem">
					<p class = "shopName">`+data.zombieInventory[i].name+`</p>
					<p class = "shopDesc">`+data.zombieInventory[i].description+`</p>
					<img class="shopImage" src="`+data.zombieInventory[i].image+`">
				</div>
			`;
		}
	}
}
function addItem(n) {
	if (data.zombieInventory.length < 6) {
		for (i = 0; i < items.length; i++) {
			if (n == items[i].name) {
				data.zombieInventory.push(items[i]);
			}
		}
		sceneTransition(data.zombieData.scene);
	}
	else {
		writeText("You don't have enough space to pick that up.");
	}
}
function removeItem(n) {
	for (i = 0; i < data.zombieInventory.length; i++) {
		if (data.zombieInventory[i].name.includes(n)) {
			data.zombieInventory.splice(i, 1);
			break;
		}
	}
	if (data.story.currentScene == "convenienceStore" || data.story.currentScene == "factoryGate") {
		sceneTransition(data.story.currentScene);
	}
}
function eatSnack() {
	data.zombieData.stamina += 1;
	removeItem("Snack");
	sceneTransition(data.story.currentScene);
}
function generateZombieGallery() {
	for (i = 0; i < data.zombieGallery.length; i++) {
		if (data.zombieGallery[i].unlocked == true) {
			document.getElementById('output').innerHTML += `
			<p class = "choiceText" onclick="writeZombieEvent('` + data.zombieGallery[i].index + `')">` + data.zombieGallery[i].name + `</span>
			`;
		}
	}
}
function unlockZombieScene(n) {
	for (i = 0; i < data.zombieGallery.length; i++) {
		if (n == data.zombieGallery[i].index) {
			if (data.zombieGallery[i].unlocked == false) {
				data.zombieGallery[i].unlocked = true;
				writeSpecial("You've unlocked a new scene in the gallery!");
			}
		}
	}
}
function itemCheck(n) {
	for (i = 0; i < data.zombieInventory.length; i++) {
		if (data.zombieInventory[i].name.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}
function exitGame() {
	data.story.playingGame = false;
	sceneTransition("vr", "Stop playing");
}
function gameOver() {
	clearData();
	exitGame();
}
function clearData() {
	data.zombieData.scene = "safehouse";
	data.zombieData.stamina = 2;
	data.zombieData.wounded = false;
	data.zombieData.infected = false;
	data.zombieData.lockbox = "";
	data.zombieData.townZombie = true;
	data.zombieData.cityZombie = true;
	data.zombieData.factoryZombie = true;
	data.zombieInventory = [];
	addItem("Baseball Bat");
	addItem("Medical Kit");
}
function zombieFooter() {
	switch (data.zombieData.stamina) {
		case 0:
			writeText("You have a no energy left to fight. If you encountered a zombie right now, you'd definitely lose.");
			if (itemCheck("Snack") == true) {
				writeText("There isn't anyone around. You could take a break to eat a <span class='choiceText' onclick='eatSnack()'>snack</span> to regain some stamina.");
			}
		break;
		case 1:
			writeText("You have a some stamina left. You could fight off a zombie right now if you had to.");
			if (itemCheck("Snack") == true) {
				writeText("There isn't anyone around. You could take a break to eat a <span class='choiceText' onclick='eatSnack()'>snack</span> to regain some stamina.");
			}
		break;
		case 2:
			writeText("You have a lot of energy left.");
		break;
	}
	if (data.zombieData.wounded == true) {
		writeText("You are bleeding a little, you should avoid dangerous situations.");
	}
	if (data.zombieInventory.length > 5) {
		writeText("You're carrying a lot of weight, you don't think you can carry anything more.");
	}
	writeText("<p class='choiceText' onclick='exitGame()'>Stop playing</p>");
	writeText("<p class='choiceText' onclick='generateZombieInv()'>Check inventory</p>");
}
function toggle(fetish) {
	switch (fetish) {
		case "beast":
			if (data.zombieData.beastDisabled == false) {
				data.zombieData.beastDisabled = true;
				document.getElementById('beastButton').innerHTML = `Enable 'bestiality' content.`;
				document.getElementById('beastContent').innerHTML = `Scene 'Hunter 1' disabled. <br>Scene 'Hunter 2' disabled.`;
			}
			else {
				data.zombieData.beastDisabled = false;
				document.getElementById('beastButton').innerHTML = `Disable 'bestiality' content.`;
				document.getElementById('beastContent').innerHTML = ``;
			}
		break;
		case "rim":
			if (data.zombieData.rimDisabled == false) {
				data.zombieData.rimDisabled = true;
				document.getElementById('rimButton').innerHTML = `Enable rimjob content.`;
				document.getElementById('rimContent').innerHTML = `Scene 'Siren 2' disabled. <br>Scene 'Hunter 2' disabled.`;
			}
			else {
				data.zombieData.rimDisabled = false;
				document.getElementById('rimButton').innerHTML = `Disable rimjob content.`;
				document.getElementById('rimContent').innerHTML = ``;
			}
		break;
		case "worm":
			if (data.zombieData.wormDisabled == false) {
				data.zombieData.wormDisabled = true;
				document.getElementById('wormButton').innerHTML = `Enable sounding (urethral insertion) content.`;
				document.getElementById('wormContent').innerHTML = `Scene 'Worms 2' disabled.`;
			}
			else {
				data.zombieData.wormDisabled = false;
				document.getElementById('wormButton').innerHTML = `Disable sounding content.`;
				document.getElementById('wormContent').innerHTML = ``;
			}
		break;
	}
}

//function updateGallery() {
	//if(localStorage.getItem('gallery')) {
		//var galleryTemp = localStorage.getItem('gallery');
		//galleryTemp = JSON.parse(galleryTemp);
		//for (i = 0; i < galleryTemp.length; i++) {
			//if (galleryTemp[i].unlocked == true) {
				//data.galleryArray[i].unlocked = true;
			//}
		//}
		//localStorage.setItem('gallery',JSON.stringify(galleryArray));
	//}
	//else {
		//localStorage.setItem('gallery',JSON.stringify(galleryArray));
	//}
//}