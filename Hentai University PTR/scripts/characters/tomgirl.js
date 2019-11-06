var character = {index: "tomgirl", met: false, fName: "Sam", lName: "White", trust: 0, encountered: false, textEvent: "", color: "#a79e9a",};

var logbook = { //Logbook details for each character.
	index: "tomgirl", 
	desc: "A university student who worries about his masculinity, mostly due to his effeminate figure.",
	body: "He's about a foot shorter than you and looks twinkier than a snack cake. He's also more than a little obvious in checking out your ass when he thinks nobody's looking.",
	clothes: "His preferred outfit is the school uniform, although he'd probably look better in a skirt.",
	home: "His designated classroom is class A.",
	tags: "Tomgirl, Sissification, Prostate Stimulation, Anal",
	artist: "Nagi Ichi",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "tomgirl1", name: "An effeminate boy is chatting with another student.", location: 'schoolEntrance', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "tomgirl3", name: "tomgirl is here", location: 'classroomA', time: "MorningEvening", itemReq: "", trustMin: 2, trustMax: 5, type: "tab", top: 0, left: 0, day: "both",},
	{index: "tomgirl4", name: "tomgirl is here", location: 'classroomA', time: "MorningEvening", itemReq: "", trustMin: 6, trustMax: 6, type: "tab", top: 0, left: 0, day: "both",},
]

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "tomgirl1": {
			writeBig("images/tomgirl/1-2.jpg", "Art by Nagi Ichi");
			writeSpeech("???", "none", "Bro, it's not just the fact that they're missing! The whole thing just screams lazy!");
			writeSpeech("tomgirl", "", "Dude, I don't care about your virtual animals. I-");
			writeText("Two students are having a heated discussion about something, and one of them turns towards you as you walk up the stairs.");
			writeText("The one looking at you has an effeminate look to him, but gives off a pretty disrespectful vibe. His name is "+fName('tomgirl')+" "+lName('tomgirl')+" if you remember your files right.");
			writeText("He's staring at you, so you decide to...");
			writeBig("images/tomgirl/1-3.jpg", "Art by Nagi Ichi");
			writeFunction("loadEncounter('tomgirl', 'tomgirl2')", "Invite "+fName('tomgirl')+" to your office");
			writeFunction("changeLocation(data.player.location)", "Walk on by");
			break;
		}
		case "tomgirl2": {
			writeSpeech("tomgirl", "", "So... What exactly did you need from me?");
			writeSpeech("player", "", "Well I'm the school's new counselor, and there are a few students I was told to look out for. Any idea why you'd be on that list?");
			writeSpeech("tomgirl", "", "Not really. I'm doing fine, I think.");
			writeSpeech("player", "", "I see. No physical issues, no mental hangups? Nothing being repressed?");
			writeText("He looks thoughtful for a moment, before he seems to be distracted while looking you in the eyes.");
			writeSpeech("tomgirl", "", "I... uh... No! No, sorry, nothing.");
			writeSpeech("player", "", "Hmm. Well, I have a rather, how should I say, fringe method of work. It's why I was accepted here. Would you be willing to work with me for a moment, so I can come to understand you?");
			writeSpeech("tomgirl", "", "I mean, I don't see why not.");
			writeText("...");
			writeText("In some aspects he's putty in your hands, the hypnosis takes effect almost instantly.");
			writeSpeech("tomgirl", "", "I just like how it feels. Women's underwear is more comfortable for me.");
			writeSpeech("player", "", "Of course. Have you ever thought about exploring those feelings farther?");
			writeSpeech("tomgirl", "", "No! ... No. I'm not interested in thinking about that stuff.");
			writeText("But in other ways he's putting up a hell of a resistance. His hangups about being seen as effeminate are almost strong enough to break him out of the hypnosis. Almost.");
			writeSpeech("player", "", "Alright, we don't need to talk about that. Just watch this pendant and I'll give you some very important instructions.");
			writeText("...");
			writeText("*SNAP*");
			writeSpeech("tomgirl", "", "Huh? Sorry, I think I doze-");
			writeSpeech("player", "", ""+fName('tomgirl')+" "+lName('tomgirl')+".");
			writeSpeech("tomgirl", "", "Y-yes "+data.player.honorific+"?");
			writeSpeech("player", "", "I'm not actually a school counselor. I'm a practicing hypnotist who intends to enslave whoever I want at my whim.");
			writeSpeech("tomgirl", "", "... Excuse me?");
			writeSpeech("player", "", "You're my next target. By the time I'm done with you, you'll be nothing more than a loyal sex slave begging for my touch.");
			writeSpeech("tomgirl", "", "What the fuck? Fuck off, weirdo!");
			writeText("He runs out of the room, slamming the door behind him.");
			writeText("...");
			writeText("A few moments later, the door is thrown open again.");
			writeSpeech("tomgirl", "", "What the fuck did you do to me?!");
			writeSpeech("player", "", "You've got some strong hangups. I look forward to breaking you, but for now I needed to make sure you wouldn't go snitching. You won't be able to disobey me, or reveal my plan to anyone. You'll have a hard time skipping school too.");
			writeSpeech("tomgirl", "", "Y-you're psychotic!");
			writeSpeech("player", "", "See you tomorrow "+fName('tomgirl')+". Same time?");
			writeText("He runs off without a response. Oh well, you have him in your grasp.");
			data.player.location = "playerOffice";
			passTime();
			writeFunction("changeLocation(data.player.location)", "Go back");
			setTrust('tomgirl', 2);
			break;
		}
		case "tomgirl3": {
			writeText("You lean into the classroom to call for "+fName('tomgirl')+".");
			writeSpeech("player", "", ""+fName('tomgirl')+". Come with me.");
			switch (checkTrust('tomgirl')) {
				case 2: {
					writeText("He quickly bows out of the conversation, making up as fake an excuse as he can. None of his classmates pick up on it though.");
					writeText("He meets you outside the classroom, apprehension in his eyes.");
					writeSpeech("tomgirl", "", "Well? What the fuck do you want, psycho?");
					break;
				}
				case 3: {
					writeText("He quickly bows out of the conversation, making up as fake an excuse as he can. None of his classmates pick up on it though.");
					writeText("He meets you outside the classroom, nervousness in his eyes.");
					writeSpeech("tomgirl", "", "L-listen. You don't need to do this. Let me go, and I won't tell anybody, okay?");
					break;
				}
				case 4: {
					writeText("He quickly bows out of the conversation, apologizing to his classmates as he leaves.");
					writeText("He meets you outside the classroom, his eyes looking hopeless, yet still angry.");
					writeSpeech("tomgirl", "", "Stop this! You can't keep calling me out of class like this, what if they find out?");
					writeSpeech("player", "", "I thought you wanted them to find out?");
					writeSpeech("tomgirl", "", "Shut up! Just... What do you want?");
					break;
				}
				case 5: {
					writeText("He quickly runs towards the door, his classmates are used to it at this point.");
					writeText("He meets you outside the classroom, he almost seems excited.");
					writeSpeech("tomgirl", "", "So? What sort of fucked up stuff is next? Get it over with already.");
					writeSpeech("player", "", "Well, aren't you turning out nicely.");
					writeSpeech("tomgirl", "", "S-shut up! Quit making me wait, it's even worse than the shit you actually do.");
					break;
				}
			}
			if (galleryCheck('tomgirl1') != true) {
				writeFunction("loadEvent('tomgirl', 'tomgirl1')", "'Take me to your house'");
			}
			else {
				if (galleryCheck('tomgirl2') != true) {
					writeFunction("loadEvent('tomgirl', 'tomgirl2')", "'Take me to your house again'");
				}
			}
			if (galleryCheck('tomgirl3') != true) {
				writeFunction("loadEvent('tomgirl', 'tomgirl3')", "'Meet me in the gym'");
			}
			if (galleryCheck('tomgirl4') != true) {
				writeFunction("loadEvent('tomgirl', 'tomgirl4')", "'I want a video of you'");
			}
			writeFunction("changeLocation(data.player.location)", "Nevermind");
			passTime();
			break;
		}
	case "tomgirl4": {
		writeText("As you walk into the classroom you don't even need to call "+fName('tomgirl')+"'s name, it almost seems like he was waiting for you.");
		writeText("The two of you walk out, "+fName('tomgirl')+" pulling on your sleeve to get you to hurry up out the doorway.");
		writeSpeech("player", "", "Jeez. Needy little bitch aren't you?");
		writeSpeech("tomgirl", "", "J-just hurry up! I wanna get this over with so I can go home. What do you want this time, another blowjob?");
		writeSpeech("player", "", "You're right on the edge, aren't you? I think it's time to push you over the edge. Take me to your place again.");
		writeSpeech("tomgirl", "", "Fine, come on.");
		writeText("...");
		writeEvent('tomgirl5');
		data.player.location = "vintageStreet";
		passTime();
		writeFunction("changeLocation(data.player.location)", "Finish");
		break;
	}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "tomgirl1", name: "Fascination"},
	{index: "tomgirl2", name: "Probing"},
	{index: "tomgirl3", name: "Gym Excursion"},
	{index: "tomgirl4", name: "Relief"},
	{index: "tomgirl5", name: "Full Blown Gay Anal Sex"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "tomgirl1": {
			document.getElementById('output').innerHTML = '';
			writeText("Although he tries to argue, your hypnosis keeps him in check and he takes you over to his house.");
			writeText("...");
			writeSpeech("player", "", "I can't believe you had this whole outfit in your closet.");
			writeSpeech("tomgirl", "", "Sh-shut up!");
			writeSpeech("player", "", "Doesn't seem like you have a sister. Did you buy this for yourself?");
			writeText("He keeps quiet, blushing heavily.");
			writeSpeech("player", "", "Oh well, it doesn't really matter right now. It's about time to get started.");
			writeSpeech("tomgirl", "", "Get started with w- Oh fuck no...");
			writeBig("images/tomgirl/2-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "You fucking sicko, you pervert degenerate. Are you seriously exposing yourself in front of-");
			writeSpeech("player", "", "Shut up, get to work.");
			writeBig("images/tomgirl/2-2.jpg", "Art by Nagi Ichi");
			writeText("Grumbling, he grasps your shaft as his eyes glaze over, but only for a moment.");
			writeBig("images/tomgirl/2-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Waitwaitwait what the fuck am I doing?<i><br>Why did I just grab it? Is he controlling me?</i>");
			writeSpeech("player", "", "Damn, your hands are pretty soft.");
			writeSpeech("tomgirl", "", "<i>Fuck, stop talking. This is weird. I feel weird, right? My hand feels...</i>");
			writeText("As his face grows even redder, he starts increasing his pace. His technique is fantastic.");
			writeSpeech("tomgirl", "", "<i>Fuckfuckfuck hurry up and cum already! I don't even last half as lon-</i>");
			writeBig("images/tomgirl/2-4.jpg", "Art by Nagi Ichi");
			writeText("As you start to cum, his jerking slows down. He goes from quick rapid strokes to slow milking tugs.");
			writeBig("images/tomgirl/2-5.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "<i>What... What is this feeling?</i>");
			writeSpeech("player", "", "Nice work. I'll see you next time I'm feeling pent up.");
			writeSpeech("tomgirl", "", "...");
			tempScene = 'vintageStreet';
			if (data.player.location != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl2": {
			document.getElementById('output').innerHTML = '';
			writeText("Instead of arguing "+fName('tomgirl')+" just looks downcast as he hears your request, understanding that resistance is impossible.");
			writeText("...");
			writeSpeech("player", "", "God damn, it's immaculate.");
			writeSpeech("tomgirl", "", "S-stop staring! I clean myself properly, so what?");
			writeBig("images/tomgirl/3-1.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "This is a lot more than just regular cleaning. Do you play with yourself regularly down here?");
			writeSpeech("tomgirl", "", "...");
			writeSpeech("player", "", "I asked you a question-!");
			writeBig("images/tomgirl/3-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "...!");
			writeText("You shove your index finger into him, and it goes in with little resistance. You already know the answer, but you want to see him squirm.");
			writeSpeech("player", "", "If you don't start talking, I'm gonna force some answers out of you.");
			writeBig("images/tomgirl/3-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "And yet he remains silent.");
			writeText("...");
			writeText("After a few minutes of silence and anal torment, his dick has started to dribble precum.");
			writeSpeech("player", "", "Feel like talking now, or do I need to keep going until you cum?");
			writeBig("images/tomgirl/3-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "F-fucking fine! Yes! I play with my ass, is that what you wanted to hear?");
			writeSpeech("player", "", "See? Was that so hard?");
			writeText("You pull your hand away, there's some resistance, as if his body didn't want to let go.");
			writeSpeech("player", "", "Keep yourself ready down there, I'll want a piece of that ass someday.");
			writeSpeech("tomgirl", "", "S-someday?");
			writeText("There's a lot of apprehension in his voice, but also a hint of disappointment.");
			tempScene = 'vintageStreet';
			if (data.player.location != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl3": {
			document.getElementById('output').innerHTML = '';
			writeText(""+fName('tomgirl')+" nods his head and starts walking towards the gym. To avoid suspicion, you follow after a few minutes.");
			writeText("...");
			writeSpeech("player", "", "Ah, damn. You've got some talent, for an amateur.");
			writeBig("images/tomgirl/4-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Mmph!<i><br>Asshole!</i>");
			writeSpeech("player", "", "And that's some nice lingerie. Did you wear that today just for me?");
			writeSpeech("tomgirl", "", "Mmph *slurp* Mm-mm!");
			writeSpeech("player", "", "Hey don't feel too bad. Tell you what, since you wore something nice, you can go ahead and play with yourself as you blow me. I know you want to.");
			writeBig("images/tomgirl/4-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Mmmph...<i><br>Ignore it "+fName('tomgirl')+", this is just a reflexive boner. Just keep him happy so he doesn't go any farther.<br>Any farther... With something like this...</i>");
			writeBig("images/tomgirl/4-3.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "Oh wow! Now that's the energy I like!");
			writeText("He doesn't even seem to hear you, completely lost in trying to thrust you down his throat as far as he can manage. Which isn't that far, but points of enthusiasm.");
			writeSpeech("player", "", "Just a little more... Gonna fill your mouth with my cum, your ready?");
			writeBig("images/tomgirl/4-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "<i>Cumming! Fuck!</i>");
			writeText("You start cumming into his mouth, he's so lost in his own orgasm that he swallows every drop on reflex.");
			writeText("Once he's finished he realized what's happen, takes your dick out of his mouth, and starts spitting out onto the floor.");
			writeSpeech("player", "", "Careful not to make too much of a mess. Don't want anyone asking questions, do we?");
			tempScene = 'gym';
			if (data.player.location != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl4": {
			document.getElementById('output').innerHTML = '';
			writeSpeech("tomgirl", "", "... What?");
			writeSpeech("player", "", "I said, send me a video of-.");
			writeSpeech("tomgirl", "", "I heard what you said! Fuck, fine! When?");
			writeSpeech("player", "", "Now. Head home and I'll wait for it in my office.");
			writeSpeech("tomgirl", "", "You can't be serious.");
			writeText("You were serious.");
			writeText("...");
			writeText("*PLING*");
			writeText("A notification icon pops up as you receive an email. Inside is a video clip of "+fName('tomgirl')+" laying naked on his bed.");
			writeBig("images/tomgirl/5-1.jpg", "Art by Nagi Ichi");
			writeText("There's a frustrated, almost defeated expression in his eyes as he sucks on a black dildo.");
			writeText("You don't remember telling him to play with his ass, but if that's his go-to...");
			writeBig("images/tomgirl/5-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Aaaah~!");
			writeText("He pushes the black dildo into his asshole, his dick wobbles as the rubber toy slides into him.");
			writeText("The video almost seems like it skips on parts, editing out bit of him talking.");
			writeText("He pushes the toy deeper into himself, finally hilting it and...");
			writeBig("images/tomgirl/5-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "C-cumming...~");
			writeText("His untouched dick spurts out a clear white fluid as he pulls and thrusts the toy. The orgasm goes on for almost a full minute as he rhythmically punishes his prostate.");
			writeText("By the time he's finished it seems more like he stops from exhaustion, like he could've kept going and extended the orgasm even longer.");
			writeBig("images/tomgirl/5-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Ghhff... Hope you're fucking happy, pervert...");
			tempScene = 'playerOffice';
			if (data.player.location != 'gallery') {
				writeFunction("writeEvent('tomgirlFinish')", "Go back");
			}
			break;
		}
		case "tomgirl5": {
			document.getElementById('output').innerHTML = '';
			writeText("It's finally time for you to take this all the way. You get "+fName('tomgirl')+" out of class and take him to his place.");
			writeBig("images/tomgirl/5-5.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Ghhg... God, you're way too fucking big...");
			writeSpeech("player", "", "You're the one who was eager to get on top.");
			writeSpeech("tomgirl", "", "T-that's because you're controlling me, asshole! Making me feel all this weird shit.");
			writeSpeech("player", "", "I'm not making you feel anything, this is your body acting honestly. You're a natural sissy buttslut who can't get enou-");
			writeBig("images/tomgirl/5-6.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Aaaah~! Cumming~~~");
			writeSpeech("player", "", "I don't remember giving you permission to cum so quickly. Hey!");
			writeBig("images/tomgirl/5-7.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Ghhg...");
			writeText("He doesn't seem able to hear you, lost in a post orgasm haze.");
			writeSpeech("player", "", "Having a good time?.");
			writeText("He doesn't answer, soaking in the afterglow until you push him off of you before turning him around.");
			writeSpeech("tomgirl", "", "H-hey! What're you-");
			writeBig("images/tomgirl/5-8.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Aaah~!");
			writeSpeech("player", "", "You had your chance, now I'm in control.");
			writeSpeech("tomgirl", "", "No! Stop! You're too rough!");
			writeBig("images/tomgirl/5-9.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Nhhhg!<br><i>Fuck! He's fucking huge! He's destroying my ass!</i>");
			writeSpeech("player", "", "You. Are. Mine.");
			writeText("You punctuate each word with a powerful thrust, slapping your hips against his ass.");
			writeSpeech("tomgirl", "", "<i>Fuck! It feels so good~! Gonna...!</i>");
			writeBig("images/tomgirl/5-10.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Cumming~! I'm cumming on your dick~!");
			writeText("You don't give him a chance to rest. You're pushing right through to the next orgasm without a break.");
			writeText("...");
			writeBig("images/tomgirl/5-11.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "", "Cumming... I'm cumming again~...");
			writeText("His dick twitches and bobs, dryly cumming for the fourth time.");
			writeSpeech("player", "", "You're mine now. You'll never have a normal life again.");
			writeSpeech("tomgirl", "", "Y-yes "+data.player.honorific+"~!");
			writeText("The two of you go for a few more rounds before you cum inside his ass. You let him fall onto the bed, twitching and broken.");
			writeText("With him completely broken, he'll probably take a break from school for now. Once he comes back, he'll be a completely different 'man'.");
			setTrust('tomgirl', 100);
			if (data.player.location != 'gallery') {
				data.player.location = 'vintageStreet';
			}
			break;
		}
		case "tomgirlFinish": {
			raiseTrust('tomgirl', 1);
			changeLocation(data.player.location);
			break;
		}
	}
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
	{index: "tomgirlReward", trust: 100,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "tomgirlReward": {
			writePhoneImage("images/tomgirl/9-5.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("tomgirl", "", "You've finished all of "+data.story[2].fName+"'s content for this version, congratulations!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong phone event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log('tomgirl.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEvent(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			writeFunction("loadEncounter('system', 'gallery')", "Finish");
		}
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