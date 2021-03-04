//This is a repository for all scenes and events in game, to keep the index.js file from ballooning out. Alt+3 to collapse scenes for easier navigation on notepad++
// <- These slashes denote comments
function writeScene(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log("Now writing scene ID " + scene);
	switch(scene) {
		//System Locations
		case "start" : {
			//Quick writeHTML cheat sheet:
			//t Hello!
			//^ Will write plain text reading "Hello!"
			//player My name is playerF!
			//^ Will write speech using the entry labelled "player" in the characterArray array in index.js, automatically finding the appropriate images and colors
			//sp Rando Guy; img scripts/gamefiles/profiles/red.jpg; altColor #FFFFFF; Hey there!
			//^ A manual method of writing speech, specifically denoting the desired name, image, and dialogue color.
			//img images/research1.jpg
			//^ Will display the image images/research1.jpg
			writeHTML(`
				t Placeholder for the start menu
			`);
			break;
		}
		//Locations
		default: {
			writeHTML(`
				t You've encountered an error! The desired scene ID was not found, perhaps the ID was misspelt in the writeScene function?
				t You tried to write the scene `+scene+`
			`);
			writeTransition("start", "Back to the title");
			break;
		}
	}
}

function writeEvent(event) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log('now writing event ID '+event);
	switch (event) {
		case "example": {
			writeHTML(`
				
			`);
			break;
		}
		default: {
			writeHTML(`
				t You've encountered an error! The desired event ID was not found, perhaps the ID was misspelt in the writeEvent function?
				t You tried to write the event `+event+`
			`);
			writeTransition("start", "Back to the title");
			break;
		}
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
}