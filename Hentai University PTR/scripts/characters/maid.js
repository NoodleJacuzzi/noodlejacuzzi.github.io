var character = {index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "", textColor: "#CCCCCC"};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "maid", 
	desc: "A woman that works as a certain rich woman's personal maid. Off-work, she's surprising lax for a maid.",
	body: "She's surprisingly pretty fit, even if her outfits tend to hide that.",
	clothes: "She usually wears her maid uniform and, even when wearing casual outfits, she's prefers whites, grays, and blacks.",
	home: "She spends most of her time in-town, running errands for her employer.",
	tags: "Casual Sex, FFM Threesome",
	artist: "Artist: Oreteki18kin",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "maid1", name: "You see a woman in an unusual outfit looking through some items, looking for something.", location: 'shoppingDistrict', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "maid2", name: "You can see maid nearby. It looks like she just finished shopping.", location: 'shoppingDistrict', time: "Evening", itemReq: "", trustMin: 20, trustMax: 20, type: "tab", top: 0, left: 0, day: "odd",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "maid1" : {//Introduce Maid while she's shopping
			writeText("The maid stands out quite a bit as she moves around the shop, her eyes quickly combing the shelves.");
			writeBig("images/maid/profile.jpg");
			writeText("After a few more seconds, she notices you staring.");
			writeSpeech("maid","","May I help you?");
			writeFunction("writeEncounter('maid1a')", "Apologize for staring");
			writeFunction("changeLocation(data.player.location)", "Say 'no' and leave");
			break;
		}
		case "maid1a" : {
			writeSpeech("player","","Sorry, it's just that you don't exactly see a lot of people in maid outfits nowadays.");
			writeText("She smiles wryly.");
			writeSpeech("maid","","That's fair. It's a bit old-fashioned, perhaps, but I think there's some value in that, too.");
			writeText("She reaches forward, grabbing a spray-bottle from the shelf. She rolls it around, reading the back.");
			writeSpeech("maid","","I'm "+fName('maid')+", by the way. "+fName('maid')+" "+lName('maid')+".");
			writeSpeech("player","",data.player.name+" - it's a pleasure to meet you.");
			writeSpeech("maid","","The pleasure is mine, "+data.player.name+".");
			writeText("She puts the bottle into a small basket on the ground, lifting it as she steps past you.");
			writeSpeech("player","","Need any help carrying things?");
			writeText("The thinks for a moment.");
			writeSpeech("maid","","...I have a few more items I need. If you don't mind, of course.");
			writeSpeech("player","","Not at all.");
			writeText("She hands you her basket which... weighs a bit more than you expected. It's packed pretty tightly and efficiently...");
			writeSpeech("player","","Lead the way.");
			writeText("She nods, starting to walk.");
			writeText("...");
			writeText("A while later, after helping "+fName('maid')+" empty the two <i>very</i> well-packed baskets into her car, you shut the trunk and relish the freedom of your hands from the basket-handles.");
			writeText("...Aside from the basket of your stuff, at least.");
			writeSpeech("maid","","Thank you very much for your assistance.");
			writeText(fName('maid')+" bows her head slightly, smiling.");
			writeSpeech("player","","Happy to help. Plus, it was a good reminder to pick up a few things, so it was a win-win.");
			writeSpeech("maid","","Perhaps. Even so, I'll need to think of some way to thank you at a later date.");
			writeText("She moves into the driver's seat, the engine coming to life.");
			writeSpeech("player","","I'd say that's unnecesary, but I get the feeling that's the wrong answer. Instead, I'll just look forward to it.");
			writeText("She laughs.");
			writeSpeech("maid","","You're a smart one. I'll see you later, then.");
			writeText("With that, her car pulls out, leaving you alone.");
			writeFunction("changeLocation(data.player.location)", "Go home");
			data.story[5].trust = 20;
			passTime();
			break;
		}
		case "maid2" : {//Meet Maid in the shopping district again, she invites you over and gives you a titjob while hypno'd
			writeSpeech("maid","","Ah, "+data.player.name+". I was hoping I'd see you before I left.");
			writeSpeech("player","","Sorry to keep you waiting, then. What's up?");
			writeSpeech("maid","","I enjoyed our talk yesterday, and was interested to know if you'd like to chat? I'm headed home now.");
			writeSpeech("player","","Sounds great. Are we walking, or...?");
			writeSpeech("maid","","Driving.")
			writeText("She grins wryly.");
			writeSpeech("maid","","I'm not <i>nearly</i> so cruel as to force you to carry these all the way to park district.");
			writeText("...");
			writeText("The two of your arrive at her place fairly quickly, and putting away her purchases is quick.");
			writeText("You spend most of the time talking about your jobs. She, being a maid, usually handles cleaning her boss's apartment... which, apparently, is a challenge given how large it is.");
			writeText("When you start talking about your own job, the conversation quickly focuses on your... <i>unique methods.</i>");
			writeSpeech("maid","","Hypnosis?");
			writeText("She shakes her head, looking amused.");
			writeSpeech("maid","","And it really works?");
			writeSpeech("player","","Not the way the movies say it does, but yeah. It puts them in a relaxed state of mind, which helps them open up.");
			writeSpeech("maid","","Really? That's all?");
			writeSpeech("player","","...You know, just because some people <i>can</i> make a guy cluck like a chicken doesn't mean that's all it's good for.");
			writeText("She laughs, shaking her head.");
			writeSpeech("maid","","I really meant no offense, it's just... It sounds a bit silly, I suppose since I don't know much about it.");
			writeText("You roll your pendant around between your fingers.");
			writeSpeech("player","","Well, we could always try it here.");
			writeSpeech("maid","","Oh? I would've thought it wouldn't work on skeptics.");
			writeSpeech("player","","The clucking part, sure. But just helping you relax a little? <i>Trivial.</i>");
			writeSpeech("maid","","...Well, I suppose I could always use a bit of relaxation.");
			writeText("You grin.");
			writeSpeech("player","","Then let's start with just watching my pendant, and listening to my voice...");
			writeText("...");
			writeText("Her amused expression quickly gives way to a relaxed one and, in what you consider record time, her eyes glaze over.");
			writeText("You actually have to stop and check if she's really under or just messing with you, but it seems like she just went into trance that easily.");
			writeSpeech("player","","Huh. I know some people are easier to put under then others, but... Just how susceptible are you...?");
			writeText("Scientific curiosity spurs you forward as you look her over.");
			writeSpeech("player","","...Is that how you normally dress at home?");
			writeText("She slowly, hazily shakes her head.");
			writeSpeech("player","","Hm. Well, why don't you make yourself a bit more comfortable, then?");
			writeText("You change your tone, leaning in a bit closer.");
			writeSpeech("player","","After all, you feel <i>completely relaxed</i> around me, don't you? It's only <i>natural</i> that you'd be as relaxed as if you were alone.");
			writeText("A pause... then she stands. The haze fades from her eyes quickly.");
			writeText("She clearly relaxes her posture, taking a sharp breath in.");
			writeSpeech("maid","","Sorry, but could you give me a sec? Gotta change.");
			writeText("She casually kicks her shoes off, barely paying attention to where they land as she walks off.");
			writeText("...Guess she's not as formal when alone, then?");
			writeText("After a minute or so, you can hear her walking back into the room, accompanied by the hiss of a can as she cracks open a beer.");
			writeText("She hops the side of the couch easily, thumping onto it with a relaxed sigh.");
			writeText("Turning to face her, you see...");
			writeBig("images/maid/2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("player","","You, uh... really made yourself comfortable.");
			writeSpeech("maid","","Yup.");
			writeText("She takes a slow sip, before offering it to you. You turn it down - better to stay sober while hypnotizing someone.");
			writeSpeech("maid","","I love my job, but the outfit can be a bit stuffy, y'know? Plus, I can never be sure when the boss might grab my ass or lift my skirt or something, so it's not like I can skimp on the prepwork.");
			writeSpeech("player","","That sounds like sexual harrassment.");
			writeSpeech("maid","","It would be, but she and I are fuck-buddies. Have been for most of a decade, actually.");
			writeSpeech("player","","Oh. You're a lesbian?");
			writeSpeech("maid","","Nah, we're almost exclusively into men. We just make an exception for each other.");
			writeText("She takes a deep drink from her beer.");
			writeSpeech("maid","","Plus, since I get to dictate her diet, she's an absolute <i>treat</i> to eat out. Had to learn some two-dozen recipes for it, but her taste is worth it. Plus, it's not like she's complaining about the extra enthusiasm, y'know?");
			writeText("...Well, fuck. You're now even more turned on than before.");
			writeSpeech("player","","...It's getting hot in here.");
			writeText(fName('maid')+" frowns.");
			writeSpeech("maid","","Is it? I can always turn on the air condi-");
			writeSpeech("player","","It's broken, <i>remember?</i>");
			writeText("She pauses, confusion playing across her face.");
			writeSpeech("maid","","...Right. I guess I forgot.");
			writeSpeech("player","","And given that it's hot, you should-");
			writeText("Before you even finish, she pulls open the front of her robe, her tits spilling out as she lets out a sigh of relief. She then turns to you.");
			writeSpeech("maid","","Sorry, I missed that. What's up?");
			writeSpeech("player","","...I was just saying I was going to take off some clothes, since that's the <i>natural</i> response to this heat.");
			writeSpeech("maid","","Naturally.");
			writeText("She takes another long drink from the beer, which has to be nearing empty at this point.");
			writeFunction("writeEvent('maid1')", "Pull down your pants");
			raiseTrust('maid', 1);
			passTime();
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "maid1", name: "Casual Titjob"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "maid1" : {
			document.getElementById('output').innerHTML = '';
			writeText("When you pull out your cock, she nearly chokes on her drink.");
			writeSpeech("maid","","Hm. You're big enough to do porn.");
			writeText("She pauses.");
			writeSpeech("maid","","Actually, <i>do</i> you do porn? Because I'm imagining eating out my boss under the desk while she watches a video of you fucking someone. It's... pretty hot.");
			writeSpeech("player","","I can't say that I've ever done it. But we could record this, I guess? I have my phone.");
			writeText("She flinches back, now scowling.");
			writeSpeech("maid","","Whoa, hold up. Do I seriously look like the kind of girl who'd let you record her?");
			writeSpeech("player","","...It's only natural?");
			writeText("She blinks once.");
			writeSpeech("maid","","Huh. Right, I guess it is. Forgot about that.");
			writeText("Okay, just what kind of relationship does she have to have with her boss for her to be <i>this</i> easy to control?");
			writeText("After a second, she chugs the last of the beer and casually tosses it to the kitchen. It lands perfectly into the bin.");
			writeSpeech("player","","Whoa. Nice sho-");
			writeText("Your words stop in your mouth as you see her kneel down in front of you, staring at your cock.");
			writeSpeech("maid","","You gonna whip it out or what? I don't want the video to start mid-way.");
			writeText("...Fuck it, let's do this. You quickly pop out your phone, setting it to record.");
			writeText("She looks at the camera for a second, before a grin spreads across her face as she looks greedily at your dick.");
			writeBig("images/maid/2-2.jpg", "Art by Oreteki18kin");
			writeSpeech("maid","","I'll give you my number after I milk out your first load, so you'd better send that to me.");
			writeText("With that, she leans forward, her tits completely engulfing your cock. She starts kneading herself around you, but quickly figures out a major problem.");
			writeSpeech("maid","","Damn... Too much friction. Do you mind if I try something real quick?");
			writeSpeech("player","","Sure, go a-<i><b>HEAD-!</b></i>");
			writeText("In one smooth movement, she takes your cock to the base, pausing only to press your head past her throat barrier.");
			writeText("One second turns to two as she starts humming something, the vibrations carrying through your cock before she slowly pulls back.");
			writeText("Her drool oozes out all over your cock and her tits as she nods with satisfaction.");
			writeSpeech("maid","","My boss throat-fucked me with a strap-on once, and there was a <i>lot</i> of extra-slick spit.");
			writeSpeech("player","","...Okay, but can you do that again?.");
			writeSpeech("maid","","Nah. She's distended my throat before, but we never tried a titjob. Didn't make sense with a strap-on, y'know?");
			writeText("With that, she wraps her arms around her tits and winks at the camera.");
			writeSpeech("maid","","Thinking of you, babe~!");
			writeText("Her spit-slick tits shift around your length, her shoulders wiggling as she shakes her whole body.");
			writeText("After a few seconds, she presses herself entirely against you, rubbing her breasts up and down your crotch as your head pokes out of and into her cleavage.");
			writeSpeech("maid","","Don't forget to moan for the audience, "+data.player.name+".");
			writeText("Like she has to remind you...");
			writeText("You don't even bother trying to keep quiet as her head ducks down, her tongue teasing your tip every time it pops out.");
			writeText("Seconds quickly turn to minutes as she slowly changes things up.");
			writeText("Pretty quickly, you realize that she's checking what makes you moan the loudest and doing more of it.");
			writeText("Her hands both go down to your balls, carefully kneading them around and toying with them as her arms press her tits together tighter.");
			writeSpeech("player","","I'm getting close...!");
			writeSpeech("maid","","Fuck, the cumshot's her favorite part. Steady the phone against the couch!");
			writeText("You quickly do so, holding off just long enough to get it in position, before...");
			writeBig("images/maid/2-3.jpg", "Art by Oreteki18kin");
			writeText("You blast your load across her face and tits, a large puddle forming in her cleavage as she catches some with her mouth.");
			writeText("Your hips buck hard as you slip out from between her breasts, before the last few shots are expended.");
			writeSpeech("player","","You're fucking <i>amazing</i>, "+fName('maid')+".");
			writeText("She just half-scoffs, swallowing most of your load easily.");
			writeSpeech("maid","","Movie's not over yet, babe. We've still got <i>clean-up</i>.");
			writeText("The next minute or so is spent with her licking every drop from your shaft, even licking it off of your stomach before she grabs the phone.");
			writeText("Pressing your cock against the outside of her chest, she winks and quickly taps a few buttons.");
			writeSpeech("maid","","...'Kay, video's over, and I took a nice little photo. Mind if I plug my number in?");
			writeText("She doesn't bother waiting for a response.");
			writeSpeech("maid","","Aaaaand... sent.");
			writeText("She flops back casually against the couch, grabbing a box of tissues from beneath it and starting to wipe off her chest.");
			writeSpeech("maid","","Hey, do you mind if I introduce the two of you later? She's wanted to spice things up with a real dick for a while now.");
			writeText("Feeling drained down to the last drop, you just nod.");
			writeSpeech("maid","","Nice! Thanks so much, hun. You're a sweetie.");
			writeText("She gives you a quick peck on the cheek.");
			writeSpeech("maid","","Now, I'm off to take a shower, otherwise the smell of cum'll have me jilling it for hours. Talk to you later, babe!");
			writeText("She bounds off casually, heading into what you assume is the bathroom.");
			writeText("...");
			writeText("It takes a while, but you do manage to pull yourself out of the afterglow and away from the couch.");
			writeText("You're pretty interested in meeting this boss of hers but, for now, maybe it's better to head home and shower...");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
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
	{index: "placeholder", trust: 200,},
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