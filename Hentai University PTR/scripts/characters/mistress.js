var character = {index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "", textColor: "#ed9082",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "mistress", 
	desc: "A fairly rich young woman that has her maid handle taking care of her.",
	body: "Her relaxed lifestyle has her a bit more plump than most, which her custom-cut outfits seem to highlight quite well.",
	clothes: "She generally prefers clothes with colors that match her hair or complexion.",
	home: "She lives at the top of a particularly large complex near the Park District.",
	tags: "Public Sex, FFM Threesome",
	artist: "Artist: Oreteki18kin",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "mistress1", name: "A woman a bit off of the main path seems to be looking around carefully.", location: 'parkDistrict', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mistress2", name: "mistress is sitting on a nearby bench, humming to herself.", location: 'parkDistrict', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "even",},
]

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "mistress1" : {//Introduce Mistress as being lost (she's actually an exhibitionist)
			writeText("From the looks of it, it looks like she might be lost...? She seems to be looking around quite a bit but, after a moment, she spots you.");
			writeBig("images/mistress/1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("???","images/mistress/mistress.jpg","O-Oh! Hello there!");
			writeText("She very nearly trips over one of the branches, but keeps her balance... despite the two<i> very</i> clear challenges to it.");
			writeText("She moves away from the few of the trees, looking more than a bit embarrassed as she brushes at her coat.");
			writeFunction("writeEncounter('mistress1a')", "Ask if she's lost");
			writeFunction("changeLocation(data.player.location)", "Nod politely to her and leave");
			break;
		}
		case "mistress1a" : {
			writeSpeech("player","","Did you get turned around or something?");
			writeText("She looks confused for a second, but quickly nods.");
			writeSpeech("???","images/mistress/mistress.jpg","Y-Yeah... I just got a little lost, that's all!");
			writeText("She finishes brushing herself off, smiling as she offers her hand.");
			writeSpeech("mistress","","I'm "+fName('mistress')+" "+lName('mistress')+". It's a pleasure!");
			writeText("You shake her hand, noting that it's a little warm as she seems to blush a bit.");
			writeSpeech("player","",data.player.name+", and the pleasure's mine. If you're looking to head out to Main, just follow the path and take the first left.");
			writeText("Her smile widens as she nods softly.");
			writeSpeech("mistress","","Huh. Guess I wasn't as far from the path as I thought. You must come by this path a lot!");
			writeSpeech("player","","Er... Not a lot, but I've walked by a few times.");
			writeText("You shift in place a bit, before "+fName('mistress')+" seems to notice... something.");
			writeSpeech("mistress","","Ah, sorry! I've got to get going. Thanks for the help, "+data.player.name+"!");
			writeText("She quickly darts down the path, leaving you alone.");
			writeText("That was... something. It doesn't actually seem like she got lost, but...");
			writeText("Well, it's not like it's your business right now. You could probably ask her about it, though, if you see her again.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust('mistress', 40);
			passTime();
			break;
		}
		case "mistress2" : {//Meet Mistress in the woods again, she invites you over and gives you a blowie
			writeText("As you start to approach, her eyes lock onto you almost immediately.");
			writeText("She stands, smiling as she starts to blush.");
			writeBig("images/mistress/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("player","","Not lost this time, then?");
			writeSpeech("mistress","","Not this time. Thanks again, by the way!");
			writeText("She sits back down, patting the open spot on the bench beside her.");
			writeSpeech("mistress","","Just standing around is a bit boring, so if you'd like to chat?");
			writeSpeech("player","","I'm not sure I'll be that exciting, but I'd be happy to talk.");
			writeText("...");
			writeText("The two of you chat for a little while. You don't learn a lot, aside from the fact that she's from a rather wealthy family, until...");
			writeSpeech("player","","No offense meant, but... How did you get lost last time? This isn't exactly the largest of parks.");
			writeText("Her face gets even redder as she leans back a little bit.");
			writeSpeech("mistress","","Hm... Well, it's not <i>really</i> that I got lost, per se... It's a little hard to explain carefully, but if you're okay with a bit of bluntness...");
			writeText("She gently grabs your hand, carefully raising it up...");
			writeText("And pressing it against her breast, the soft material of the coat not quite thick enough to hide what she's trying to show you.");
			writeSpeech("player","","No bra, huh?");
			writeSpeech("mistress","","Just stockings. No bra, no panties.");
			writeText("She smiles wide, taking in your expression as you feel her other hand trace along your thigh.");
			writeSpeech("mistress","","I didn't think anyone would come along. When I heard you coming... Well, there's a reason I said <i>standing around</i> is boring. Now, my place is pretty close so, in continuing to be blunt, let me ask...");
			writeText("She leans a bit closer to your ear.");
			writeSpeech("mistress","","<i>Would you be willing to spend some more time with a <b>pervert</b> like me?</i>");
			raiseTrust('mistress', 1);
			passTime();
			writeFunction("writeEvent('mistress1')", "Let her lead the way");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "mistress1", name: "Penthouse Blowies"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "mistress1" : {
			document.getElementById('output').innerHTML = '';
			writeText("After arriving at her place, she shows you the living room for a few seconds before smiling almost nervously.");
			writeSpeech("mistress","","Just one sec - gotta make sure nobody else is home!");
			writeText("She darts off, the sound of doors rapidly opening and shutting ringing out for a minute, before... silence.");
			writeText("It doesn't last long, though, before she comes out again, though in a separate outfit.");
			writeBig("images/mistress/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","The coat stains a bit too easily.");
			writeText("With that, she sits down on the couch and, with all of your knowledge of hypnotic counseling and sexual experience, it becomes clear...");
			writeText("She has absolutely no idea what to do at this point.");
			writeSpeech("player","","So, no offense meant, but... Is this your first time taking someone home?");
			writeText("She flushes.");
			writeSpeech("mistress","","In my defense, I was really, <i>really</i> turned on.");
			writeSpeech("player","","It's fine, don't worry about it. If you need to take some time to just relax a bit, just take it. It's not like getting a little stiff ever killed anyone.");
			writeText("Plus, with your abilities, you're not exactly strapped for potential partners...");
			writeText("Hearing what you said, though, "+fName('mistress')+" seems to relax a bit, breathing a bit slower.");
			writeText("She seems to wait a few seconds, then a few more, before finally speaking.");
			writeSpeech("mistress","","I want you in my throat.");
			writeSpeech("player","","...Well, I'm not gonna say <i>no,</i> but isn't that a little-");
			writeSpeech("mistress","","You seem nice, "+data.player.name+", and I like that. But I'm <i>really</i> turned on, and the guys in porn are usually less, 'We'll go at your pace' and more, '<i><b>Don't wear a choker you'd like unbroken.</b></i>'");
			writeSpeech("mistress","","...Unrelated note, I need to buy a choker.");
			writeText("She takes another slow, deep breath.");
			writeSpeech("mistress","","The point is, I don't know how to talk to you, but I would like to press my nose against your pelvis.");
			writeSpeech("player","","...So, you want me to take the lead?");
			writeSpeech("mistress","","<i>Yes please.</i>");
			writeText("You promptly stand up, moving in front of her.");
			writeText("You were absolutely willing to wait for her to be ready but, after hearing her say all that?");
			writeBig("images/mistress/2-1.jpg");
			writeSpeech("mistress","","...You could do porn.");
			writeText("She pauses.");
			writeSpeech("mistress","","Actually, do you do porn? Because that would be-");
			writeText("You gently place your hands on the back of her head, casually reminding her,");
			writeSpeech("player","","You said you wanted me in your throat.");
			writeBig("images/mistress/2-2.jpg");
			writeText("You pull her mouth onto your cock, a muffled moan coming out of "+fName('mistress')+" as her tongue touches your tip.");
			writeText("You're not able to pull her very deep but her <i>enthusiasm</i> makes up for it.");
			writeText("When you're not pulling her down as deep as she can take it, she's bobbing up and down, twisting her head around as she sucks.");
			writeText("Despite the wild, almost pornographic movements, she never breaks eye contact.");
			writeSpeech("player","","Fuck... You're doing great, " +fName('mistress')+"...");
			writeText("After a few seconds, she pulls her head off of you, jerking you off as she smiles.");
			writeText("You expect her to speak but, instead, she lowers her head.");
			writeText("She angles her grip on you, her hands slowing down as she carefully drags her tongue from your balls all the way to the tip.");
			writeText("She licks all around the head for several seconds, jerking you off faster, and faster...");
			writeText("Then, with a wink, she pulls her hands away, wraps her mouth around your head, and takes you as deep as she can.");
			writeSpeech("player","","Holy shit... Just how much porn do you watch...?");
			writeText("You can feel her laugh a little as she tries (and fails) to take you into her throat.");
			writeSpeech("player","","Well, if you've seen a lot, then you <i>have</i> to know what's next.");
			writeText("She pauses, her hands moving to stabilize herself as you grab the back of her head tightly.");
			writeBig("images/mistress/2-3.jpg", "Art by Oreteki18kin");
			writeText("You slam her down hard and fast, pounding at the entrance to her throat with every thrust, the sounds of your cock fucking her mouth almost as loud as her moans around your length.");
			writeText("As you start to approach your limit, you put even more force behind your thrusts, slamming your hips forward until you feel her hands grabbing your thighs.");
			writeText("You start to slow down, in case you were getting to be a bit too much, when she <i>pulls.</i>");
			writeSpeech("player","","<i><b>Fucking Hell...!</b></i>");
			writeText("She pulls you into her throat, the tightness almost overwhelming you as she finally presses her nose to your pelvis.");
			writeText("Small tears are forming in her eyes, but the message is clear.");
			writeText("You start thrusting your hips against her mouth, the tip of your cock sliding out of, and back into her throat with every thrust.");
			writeText("After less than thirty seconds of this, you can feel yourself reaching your limit.");
			writeText("You pull your hands away from her head just in case before cumming.");
			writeSpeech("mistress","","<font size='+2'><i><b>M-MFPH!?</b></i></font>");
			writeText("Your cock slides out of her throat with the first spurt, before the entirety of your cock pops out and you jizz onto her face.");
			writeText("She almost coughs a few times but quickly regains her composure, her hands going between her legs as her chest heaves with each breath.");
			writeText("Slowly, she looks back up to you, opening her mouth.");
			writeBig("images/mistress/2-4.jpg", "Art by Oreteki18kin");
			writeText("She swirls it around her mouth for a few seconds before closing it, swallowing with a small grimace.");
			writeSpeech("player","","...Bitter?");
			writeText("She nods, pressing her hand gently to her throat.");
			writeSpeech("player","","Sorry. I, uh... got a little carried away.");
			writeText("Her eyes widen. Shaking her head, she stands up quickly and leans in.");
			writeSpeech("mistress","","<font size='-1'><i>I loved it...</i></font>");
			writeText("She smiles gently as she leans back, giving a half-firm nod.");
			writeText("After, though, she makes an almost-sweeping-motion, like a brush, and points to the door.");
			writeText("Being an expert in sexual sign language, you ignore her way of saying that she'll handle clean-up. Between the both of you, you get finished far faster, and it gives her a chance to wash her face.");
			writeText("Just before you exit the apartment, you feel her pull on your shirt gently.");
			writeText("Her lips just barely brush against your cheek before you're pushed all the way through the door, "+fName('mistress')+" winking as she shuts it behind her.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			//data.story[6].trust = 100;

			break;
		}
	}
	//Don't touch the rest of this stuff, it has to do with unlocking scenes.
	var unlockedScene = "";
	for (i = 0; i < eventArray.length; i++) {
		if (eventArray[i].index == name) {
			unlockedScene = eventArray[i];
		}
	}
	if (unlockedScene != "" && galleryCheck(name) != true) {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "testPhone", trust: 200,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "mistressReward" : {
			writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEvent(eventName);
		break;
	}
	case "unlock": {
		var unlockedScene = "";
		for (i = 0; i < eventArray.length; i++) {
			if (eventArray[i].index == n) {
				unlockedScene = eventArray[i];
			}
		}
		if (unlockedScene != "") {
			data.gallery.push(unlockedScene);
			writeSpecial("You unlocked a new scene in the gallery!");
		}
		else {
			console.log("Error, no scene named "+n+" found to unlock.");
		}
		break;
	}
	case "check": {
		if (encounteredCheck(character.index) != true) {
			for (i = 0; i < encounterArray.length; i++) {
				if (encounterArray[i].location.includes(data.player.location)) { //check the location
					if (encounterArray[i].time.includes(data.player.time)) { //check the time
						if (encounterArray[i].trustMin <= checkTrust(character.index) && encounterArray[i].trustMax >= checkTrust(character.index)) { //check the trust requirements
							if (encounterArray[i].day == "even" && data.player.day%2 == 0) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].reqItem) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
							if (encounterArray[i].day == "odd" && data.player.day%2 == 1) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].itemReq) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
							if (encounterArray[i].day == "both") {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].itemReq) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
						}
					}
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
	case "logbook": {
		logbookArray.push(logbook);
		break;
	}
	case "phoneCheck": {
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			if (checkTrust(character.index) == phoneArray[number].trust) { //if the player's trust with the character meets the text requirement
				for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
					if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
						if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
							notification(character.index)
							data.story[phoneEventCheck].textEvent = phoneArray[number].index;
							console.log(data.story[phoneEventCheck].textEvent);
						}
					}
				}
			}
		}
		break;
	}
	case "phoneEvent": {
		writePhoneEvent(eventName);
		break;
	}
}