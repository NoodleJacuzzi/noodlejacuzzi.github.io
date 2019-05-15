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
	bodytypes: {
		basic: true,
		sub: false, //sub body
		dom1: false, //dom body 1
		dom2: false, //dom body 2
		dom3: false, //dom body 3
		jean: false, //jean
		lisa: false, //lisa
		riley: false, //riley
		liz: false, //elizabeth
	},
	story: {
		name: "Emily", 
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
		{index: 'chef4', name: "Overflow", unlocked: false, hint: 'Coffee shop owner corruption level 4. Requires Pop Rocks. Talk to her during the day.'},
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
		{index: 'dream1', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
		{index: 'dream2', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
		{index: 'dream3', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
		{index: 'dream4', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
		{index: 'dream5', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
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
	{index: 'mom3S', name: "Finally Snapping", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'mom4S', name: "Loving Milk-Tank", unlocked: false, hint: 'Corruption level 4. Talk to her during the day. Requires friend corruption of at least 5'},
	{index: 'sister1S', name: "Taste of Revenge", unlocked: false, hint: 'After reaching corruption level 2 with all other characters, talk to her with a Pop Rock.'},
	{index: 'sister2S', name: "Hole in the Wall", unlocked: false, hint: 'Talk to her with a Pop Rock after completing the event "Taste of Revenge".'},
	{index: 'sister3S', name: "Hole in the Wall 2", unlocked: false, hint: 'Talk to her with a Stretchy Taffy after completing the event "Hole in the Wall".'},
	{index: 'friend1S', name: "Confession Interrupted", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'friend2S', name: "Bathroom Stall", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'friend3S', name: "Love Letter", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'friend4S', name: "Meeting Mom", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'friend5S', name: "Romance", unlocked: false, hint: 'Corruption level 4. Talk to her after completing the event "Finally Snapping".'},
	{index: 'teacher1S', name: "Hungry Eyes", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'teacher2S', name: "Disfunction", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'teacher3S', name: "Exploration", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'teacher4S', name: "Strap-On", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'teacher5S', name: "Smothering", unlocked: false, hint: 'Corruption level 5. Talk to her during the day with a Plug Pop.'},
	{index: 'teacher6S', name: "Sounding", unlocked: false, hint: 'Corruption level 5. Talk to her during the day with a Stretchy Taffy.'},
	{index: 'office1S', name: "Public Indecency", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'office2S', name: "Public Flasher", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'office3S', name: "Superhero", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'office4S', name: "Sidekick", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'chef1S', name: "Rewarding Meal", unlocked: false, hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'chef2S', name: "Direct Feeding", unlocked: false, hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'chef3S', name: "Food Preparation", unlocked: false, hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'chef4S', name: "Enjoying the Work", unlocked: false, hint: 'Corruption level 4. Talk to her during the day with a Caramel Melts.'},
	{index: 'chef5S', name: "Chef's Special", unlocked: false, hint: 'Watersports Content! Corruption level 4. Talk to her during the day with a Fruit Gushers.'},
	{index: 'doll1', name: "Awakening", unlocked: false, hint: 'Purchase the doll, then talk to her in your room.'},
	{index: 'doll2', name: "Frustrations", unlocked: false, hint: 'Talk to the her at least a day after completing the event "Awakening".'},
	{index: 'doll3', name: "Borrowed", unlocked: false, hint: 'Talk to the her at least a day after completing the event "Frustrations".'},
	{index: 'misc1S', name: "Take a Break", unlocked: false, hint: 'Complete the prologue'},
	{index: 'misc2S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'misc3S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'misc4S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'misc5S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'vr1', name: "Chapter 1", unlocked: false, hint: 'Complete chapter 1 of princess quest.'},
	{index: 'vr2', name: "Chapter 2", unlocked: false, hint: 'Complete chapter 2 of princess quest.'},
	{index: 'vr3', name: "Chapter 3", unlocked: false, hint: 'Complete chapter 3 of princess quest.'},
	{index: 'vr4', name: "Chapter 4", unlocked: false, hint: 'Complete chapter 4 of princess quest.'},
	{index: 'vr5', name: "Epilogue", unlocked: false, hint: 'Collect all of the secret items in princess quest.'},
	{index: 'dream1S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'dream2S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'dream3S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'dream4S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
	{index: 'dream5S', name: "Unfinished Scene", unlocked: false, hint: 'This scene is not yet implemented'},
];

var zombie = {
}

var items = [
	{name: "Baseball Bat", image: "images/items/baseballBat.jpg", description: "A tough wooden bat. Without this, you'd be helpless in a fight.",},
	{name: "Medical Kit", image: "images/items/medicalKit.jpg", description: "A medical kit that will patch you up if you're hurt.",},
	{name: "Factory Key", image: "images/items/key.jpg", description: "A key labeled 'Woodridge Factory Gate'.",},
	{name: "House Key", image: "images/items/key.jpg", description: "A key labeled with an address in town. It's probably for that blue house you saw earlier.",},
	{name: "Bag of Marbles", image: "images/items/bagOfMarbles.jpg", description: "A bag of marbles. They make a loud noise when thrown.",},
	{name: "Rope", image: "images/items/rope.jpg", description: "A small coil of rope. Too small to use for climbing, but you could make a trap from it.",},
	{name: "Flashlight", image: "images/items/flashlight.jpg", description: "A blindingly bright flashlight.",},
	{name: "Air Freshener", image: "images/items/airFreshener.jpg", description: "Smells like lemons.",},
	{name: "Snack", image: "images/items/snack.jpg", description: "Some unexpired food, eating it will restore stamina.",},
	{name: "Food Supply", image: "images/items/foodSupply.jpg", description: "A month's worth of food. You'll need to take this back to the safehouse.",},
	{name: "Water Supply", image: "images/items/waterSupply.jpg", description: "A month's worth of water. You'll need to take this back to the safehouse.",},
];

//Start & System Config Stuff
function startup() {
	saveSlot(14);
	if(localStorage.getItem('data13')) {
		loadSlot(13);
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
	sceneTransition(data.story.currentScene);
	document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		endingChoices = {family: 1, friend: 1, teacher: 1, chef: 1, office: 1, sub: 0,}
		tokyo = false;
		loadSlot(14);
	}
}

//Scene creation
function writeSpeech (name, img, text) {
	switch (data.story.bodytype) {
		case 0:
			img = "scripts/gamefiles/real/zombie.jpg";
		break;
		case 1:
			img = "scripts/gamefiles/drawn/player.jpg";
		break;
		case 2:
			img = "scripts/gamefiles/real/profile1.jpg";
		break;
		case 3:
			img = "scripts/gamefiles/real/profile2.jpg";
		break;
		case 4:
			img = "scripts/gamefiles/real/profile3.jpg";
		break;
		case 5:
			img = "scripts/gamefiles/drawn/jean.jpg";
		break;
		case 6:
			img = "scripts/gamefiles/drawn/lisa.jpg";
		break;
		case 7:
			img = "scripts/gamefiles/drawn/riley.jpg";
		break;
		case 8:
			img = "scripts/gamefiles/drawn/elizabeth.jpg";
		break;
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
	document.getElementById('playerName').innerHTML = data.story.name;
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	console.log("menu updated");
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
	saveSlot(13);
	console.log("autosaved");
	zombieInvShowing = false;
}

//Menu updating
function changeName(target) {
	switch (target) {
		case 'player':
			data.story.name = document.getElementById('nameSubmission').value;
			sceneTransition('mainMenu');
		break;
	}
}

function updateBody(n) {
	n = parseInt(n);
	data.story.bodytype = n;
	var papaya = document.getElementById("playerImg");
	switch(n) {
		case 0:
			document.getElementById('playerImage').src = "images/zombie/player.jpg";
			if(papaya) {
				document.getElementById('playerImg').src = "images/zombie/player.jpg";
			}
		break;
		case 1:
			document.getElementById('playerImage').src = "images/zombie/sub.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/sub.jpg";
			}
		break;
		case 2:
			document.getElementById('playerImage').src = "images/zombie/body1.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/body1.jpg";
			}
		break;
		case 3:
			document.getElementById('playerImage').src = "images/zombie/body2.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/body2.jpg";
			}
		break;
		case 4:
			document.getElementById('playerImage').src = "images/zombie/body3.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/body3.jpg";
			}
		break;
		case 5:
			document.getElementById('playerImage').src = "images/zombie/jean.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/jean.jpg";
			}
		break;
		case 6:
			document.getElementById('playerImage').src = "images/zombie/lisa.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/lisa.jpg";
			}
		break;
		case 7:
			document.getElementById('playerImage').src = "images/zombie/riley.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/riley.jpg";
			}
		break;
		case 8:
			document.getElementById('playerImage').src = "images/zombie/profile1.jpg";
			if(papaya) {
			document.getElementById('playerImg').src = "images/zombie/profile1.jpg";
			}
		break;
	}
}

//Saving & Loading
function saveSlot(slot) {
	console.log(slot);
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
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
	sceneTransition(data.story.currentScene);
}

function saveFile(){
	console.log(n);
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.story.currentScene, "Finished copying");
}

function loadFile(){
	var dataTemp = prompt("Please paste the data", "");
	dataTemp = JSON.parse(dataTemp);
	if (dataTemp.bodytypes) {
		data = dataTemp;
		saveSlot(13);
		loadSlot(13);
	}
	else {
		for (i = 0; i < data.zombieGallery.length; i++) {
			if (dataTemp.zombieGallery[i].unlocked == true) {
				data.zombieGallery[i].unlocked = true;
			}
		}
		alert("Data from HAA detected, your gallery progress has been transferred.")
	}
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

function purchase() {
	var goof = document.getElementById('cheatSubmission').value;
	switch (goof) {
		case "sub route": {
			updateBody(1);
			data.bodytypes.sub = true;
			break;
		}
		case "dom man": {
			updateBody(2);
			data.bodytypes.dom1 = true;
			break;
		}
		case "dom trap": {
			updateBody(3);
			data.bodytypes.dom2 = true;
			break;
		}
		case "dom shemale": {
			updateBody(4);
			data.bodytypes.dom3 = true;
			break;
		}
		case "horror story": {
			updateBody(5);
			data.bodytypes.jean = true;
			break;
		}
		case "sex the hex": {
			updateBody(6);
			data.bodytypes.lisa = true;
			break;
		}
		case "paradise": {
			updateBody(7);
			data.bodytypes.riley = true;
			break;
		}
		case "princess quest": {
			updateBody(8);
			data.bodytypes.liz = true;
			break;
		}
	}
			sceneTransition(data.story.currentScene);
}
//Logbook
//Inventory
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
	sceneTransition("mainMenu", "Stop playing");
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