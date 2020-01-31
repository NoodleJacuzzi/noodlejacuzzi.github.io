var locationArray = [
	{index: "playerHouse", buttons: [
		{name: "Leave the Apartment", top: 79, left: 20, type: "location", target: "apartmentOutside", time: "MorningEvening",},
		{name: "Head Straight to Work", top: 79, left: 50, type: "location", target: "playerOffice", time: "MorningEvening",},
	],},
	{index: "street", buttons: [
		{name: "Go Home", top: 80, left: 33, type: "location", target: "apartmentOutside", time: "MorningEvening",},
		{name: "University", top: 60, left: 42, type: "location", target: "schoolEntrance", time: "MorningEvening",},
		{name: "Park District", top: 80, left: 70, type: "location", target: "parkDistrict", time: "MorningEvening",},
		{name: "Vintage Street", top: 58, left: 70, type: "location", target: "vintageStreet", time: "MorningEvening",},
		{name: "Shopping District", top: 60, left: 0, type: "location", target: "shoppingDistrict", time: "MorningEvening",},
	],},
	{index: "apartmentOutside", buttons: [
		{name: "Your Home", top: 55, left: 65, type: "location", target: "playerHouse", time: "MorningEvening",},
		{name: "Head into Town", top: 50, left: 28, type: "location", target: "street", time: "MorningEvening",},
	],},
	{index: "schoolEntrance", buttons: [
		{name: "Head into Town", top: 50, left: 25, type: "location", target: "street", time: "MorningEvening",},
		{name: "Upper Floor", top: 50, left: 65, type: "location", target: "northHallway", time: "MorningEvening",},
		{name: "West Hallway", top: 79, left: 2, type: "location", target: "westHallway", time: "MorningEvening",},
		{name: "East Hallway", top: 79, left: 70, type: "location", target: "eastHallway", time: "MorningEvening",},
	],},
	{index: "northHallway", buttons: [
		{name: "Your Office", top: 70, left: 70, type: "location", target: "playerOffice", time: "MorningEvening",},
		{name: "Teacher's Lounge", top: 45, left: 70, type: "location", target: "teacherLounge", time: "MorningEvening",},
		{name: "Stairs to the Roof", top: 40, left: 40, type: "location", target: "roof", time: "MorningEvening",},
		{name: "School Entrance", top: 79, left: 40, type: "location", target: "schoolEntrance", time: "MorningEvening",},
	],},
	{index: "westHallway", buttons: [
		{name: "Classroom A", top: 50, left: 70, type: "location", target: "classroomA", time: "MorningEvening",},
		{name: "Library", top: 47, left: 50, type: "location", target: "library", time: "MorningEvening",},
		{name: "Cafeteria", top: 60, left: 37, type: "location", target: "cafeteria", time: "MorningEvening",},
		{name: "School Entrance", top: 79, left: 35, type: "location", target: "schoolEntrance", time: "MorningEvening",},
	],},
	{index: "eastHallway", buttons: [
		{name: "Classroom B", top: 50, left: 15, type: "location", target: "classroomB", time: "MorningEvening",},
		{name: "Computer Room", top: 50, left: 45, type: "location", target: "computerRoom", time: "MorningEvening",},
		{name: "Gym", top: 45, left: 75, type: "location", target: "gym", time: "MorningEvening",},
		{name: "School Entrance", top: 79, left: 70, type: "location", target: "schoolEntrance", time: "MorningEvening",},
	],},
	{index: "playerOffice", buttons: [
		{name: "Back to the Hallway", top: 79, left: 35, type: "location", target: "northHallway", time: "MorningEvening",},
		{name: "Go Back Home", top: 25, left: 41, type: "location", target: "playerHouse", time: "MorningEvening",},
	],},
	{index: "teacherLounge", buttons: [
		{name: "Back to the Hallway", top: 79, left: 35, type: "location", target: "northHallway", time: "MorningEvening",},
	],},
	{index: "roof", buttons: [
		{name: "Back to the Hallway", top: 35, left: 30, type: "location", target: "northHallway", time: "MorningEvening",},
	],},
	{index: "classroomA", buttons: [
		{name: "West Hallway", top: 30, left: 45, type: "location", target: "westHallway", time: "MorningEvening",},
	],},
	{index: "library", buttons: [
		{name: "West Hallway", top: 79, left: 45, type: "location", target: "westHallway", time: "MorningEvening",},
	],},
	{index: "cafeteria", buttons: [
		{name: "West Hallway", top: 79, left: 45, type: "location", target: "westHallway", time: "MorningEvening",},
	],},
	{index: "classroomB", buttons: [
		{name: "East Hallway", top: 79, left: 65, type: "location", target: "eastHallway", time: "MorningEvening",},
	],},
	{index: "gym", buttons: [
		{name: "East Hallway", top: 39, left: 0, type: "location", target: "eastHallway", time: "MorningEvening",},
	],},
	{index: "computerRoom", buttons: [
		{name: "East Hallway", top: 79, left: 35, type: "location", target: "eastHallway", time: "MorningEvening",},
	],},
	{index: "vintageStreet", buttons: [
		{name: "Back into Town", top: 79, left: 0, type: "location", target: "street", time: "MorningEvening",},
	],},
	{index: "parkDistrict", buttons: [
		{name: "Back into Town", top: 79, left: 40, type: "location", target: "street", time: "MorningEvening",},
	],},
	{index: "shoppingDistrict", buttons: [
		{name: "Back into Town", top: 79, left: 0, type: "location", target: "street", time: "MorningEvening",},
	],},
	{index: "store", buttons: [
		{name: "Go Outside", top: 30, left: 25, type: "location", target: "shoppingDistrict", time: "MorningEvening",},
	],},
	{index: "map", buttons: [
		{name: "University", top: 35, left: 23, type: "location", target: "schoolMap", time: "MorningEvening",},
		{name: "Streets", top: 55, left: 40, type: "location", target: "street", time: "MorningEvening",},
		{name: "Your Home", top: 45, left: 70, type: "location", target: "playerHouse", time: "MorningEvening",},
		{name: "Shopping District", top: 20, left: 60, type: "location", target: "shoppingDistrict", time: "MorningEvening",},
		{name: "Vintage Street", top: 10, left: 30, type: "location", target: "vintageStreet", time: "MorningEvening",},
		{name: "Park District", top: 65, left: 10, type: "location", target: "parkDistrict", time: "MorningEvening",},
	],},
	{index: "schoolMap", buttons: [
		{name: "Back to Town", 			top: 82, 	left: 40, 	type: "location", target: "map", time: "MorningEvening",},
		{name: "School Entrance", 		top: 67, 	left: 40, 	type: "location", target: "schoolEntrance", time: "MorningEvening",},
		{name: "West Hallway", 			top: 45, 	left: 25, 	type: "location", target: "westHallway", time: "MorningEvening",},
		{name: "Classroom A", 			top: 25, 	left: 2, 	type: "location", target: "classroomA", time: "MorningEvening",},
		{name: "Cafeteria", 			top: 45, 	left: 2, 	type: "location", target: "cafeteria", time: "MorningEvening",},
		{name: "Library", 				top: 65, 	left: 2, 	type: "location", target: "library", time: "MorningEvening",},
		{name: "East Hallway", 			top: 45, 	left: 55, 	type: "location", target: "eastHallway", time: "MorningEvening",},
		{name: "Classroom B", 			top: 25, 	left: 70, 	type: "location", target: "classroomB", time: "MorningEvening",},
		{name: "Computer Room", 		top: 65, 	left: 70, 	type: "location", target: "computerRoom", time: "MorningEvening",},
		{name: "Gym", 					top: 45, 	left: 85, 	type: "location", target: "gym", time: "MorningEvening",},
		{name: "North Hallway 2F", 		top: 17, 	left: 38, 	type: "location", target: "northHallway", time: "MorningEvening",},
		{name: "Your Office",			top: 2, 	left: 13, 	type: "location", target: "playerOffice", time: "MorningEvening",},
		{name: "Teacher's Lounge", 		top: 2, 	left: 62, 	type: "location", target: "teacherLounge", time: "MorningEvening",},
		{name: "Roof", 					top: 0, 	left: 45, 	type: "location", target: "roof", time: "MorningEvening",},
	],},
];

function changeLocation(n) {
	document.getElementById('output').innerHTML = '';
	var locationTarget = 'failed';
	for (i = 0; i < locationArray.length; i++) { //find the location target
		if (n == locationArray[i].index) {
			console.log('Location target found. Now loading location '+locationArray[i].index)
			locationTarget = i;
		}
	}
	if (locationTarget == 'failed') { //error message;
		document.getElementById('output').innerHTML = '';
		writeText("You encountered a bug! Error code: locationTargetFailed");
		writeText("Send me a message with where you were and what button you clicked on, thanks!");
		writeFunction("changeLocation('playerHouse')", "Go Back Home");
	}
	else {
		var bg = "images/locations/" + locationArray[locationTarget].index + data.player.time + ".jpg";
		changeBG(locationArray[locationTarget].bg);
		if (data.player.time == "Night" && data.player.location != "playerHouse") {
			console.log(data.player.location);
			n = 'playerHouse';
			data.player.location = "playerHouse";
			writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
			writeFunction("changeLocation('playerHouse')", "Go Back Home");
		}
		else {
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
			if (data.player.time != "Night" && data.player.location != "map"  && data.player.location != "schoolMap" && checkItem("Town Map") == true) {
				printLocationButton(
					'Use Map', 
					0, 
					0, 
					'map', 
				);
			}
			if (n == "store") {
				loadShop();
			}
			else {
				checkForEncounters();
			}
		}
	}
	if (n == 'gallery') {
		document.getElementById('output').innerHTML = '';
		loadEvent('system', 'laptop');
	}
	wrapper.scrollTop = 0;
	var bg = "images/locations/" + n + data.player.time + ".jpg";
	document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
	updateMenu();
	hideStuff();
	if (data.player.ghost != undefined) {
		checkForGhosts(n);
	}
	saveSlot(110);
}

function printLocationButton(name, top, left, target) {
	switch (data.player.style) {
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

function changeBG(n) {
	document.getElementById('wrapperBG').style.backgroundImage = "url("+n+")";
}