function writeScene(scene) {
	console.log("Now writing scene "+scene);
	switch(scene) {
		case "start" : {
			writeHTML(`
			im scripts/gamefiles/logo.png
			t Salutations friends! This is an adult game created by me, NoodleJacuuzi. You can find and keep up with all of my work, including Human Alteration App, Hentai University, and more at my <a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a>!
			`);
			break;
		}
		case "prologue1": {
			//Select your class and name
			writeHTML(`
			
			`);
			writeFunction("rename('player', 'prologue2')", "Continue");
			break;
		}
		case "prologue2": {
			//Select your assistant's body and name
			writeHTML(`
			
			`);
			writeFunction("rename('assistant', 'prologue2')", "Continue");
			break;
		}
		case "dungeonMenu": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonShop')", "Test dungeon shop");
			writeFunction("writeScene('dungeonBuild')", "Test dungeon arrangement");
			writeFunction("writeScene('advisor')", "Test advisor actions");
			writeFunction("writeScene('prison')", "Test prison & treasury actions");
			writeFunction("writeScene('dungeonBegin')", "Test gameplay loop");
			writeFunction("writeScene('direct')", "Test direct combat");
			break;
		}
		case "dungeonShop": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonMenu')", "Go back");
			break;
		}
		case "dungeonBuild": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonMenu')", "Go back");
			break;
		}
		case "advisor": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonMenu')", "Go back");
			break;
		}
		case "prison": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonMenu')", "Go back");
			break;
		}
		case "dungeonBegin": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonMenu')", "Go back");
			break;
		}
		case "direct": {
			writeHTML(`
			
			`);
			writeFunction("writeScene('dungeonMenu')", "Go back");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Error code: writeSceneFailure "+scene);
			writeText("" + JSON.stringify(data) + "");
			writeFunction("changeLocation('homePlayerRoom')", "Return home");
		}
	}
	updateMenu();
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log("Now writing event "+scene);
	var addendum = false;
	switch (scene) {
		case "": {
			writeHTML(`
			
			`);
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Your error code is writeEventFailure "+scene);
			writeFunction("writeScene('start')", "Return to start menu");
		}
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
	if (data.player.currentScene == "gallery" && addendum == false) {
		writeFunction("sceneTransition('gallery')", "Finish");
	}
}