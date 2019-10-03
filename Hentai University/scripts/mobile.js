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
		name = data.player.name;
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
			<img class="selfImage" src="` + img + `" title="` + cap + `">
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
