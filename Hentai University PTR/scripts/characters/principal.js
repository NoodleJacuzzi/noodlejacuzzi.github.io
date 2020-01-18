var character = {index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "", color: "#e47311",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "principal", 
	desc: "The principal of the university you work at. She's pretty kind but is suprisingly strong willed.",
	body: "She's probably in her early thirties, but could be as young as 25.",
	clothes: "She prefers an older style of dress with a white blouse and a black pencil skirt, but her shirt is worn out enough that you can clearly make out her bra underneath.",
	home: "You have no idea where she lives, she's pretty private when it comes to her personal life. With her, it's all business all the time.",
	tags: "No scenes yet, sorry! In the future she'll send you on more missions for special scenes, and her content will be based on your Counseling skill.",
	artist: "Artist: Oreteki18kin",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introduction1", name: "Principal principal's Office is here. You should introduce yourself.", location: 'northHallway', time: "MorningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "caseSelect", name: "Enter Principal principal's Office.", location: 'northHallway', time: "MorningEvening", itemReq: "", trustMin: 41, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log('now running encounter '+name);
	switch (name) {
		case "introduction1": {
			writeText("The door to "+fName('principal')+"'s office is closed and her secretary is away from her desk. There's a little nameplate reading "+fName('secretary')+" "+lName('secretary')+". Otherwise, the desk is really messy.");
			writeText("You consider knocking on the door, but quickly, someone rushes in past you and starts looking through the desk.");
			writeBig("images/secretary/profile.jpg", "Art by Oreteki18Kin");
			writeSpeech("secretary", "", "Excuse me! Sorry!");
			writeSpeech("player", "", "No problem. Is "+fName('principal')+" in?");
			writeSpeech("secretary", "", "Uh... Yes, yes. Give me... What's your name?");
			writeSpeech("player", "", data.player.name+". I'm the new hire. Nice to meet you.");
			writeSpeech("secretary", "", "Mhm. Go ahead. Aww man...");
			writeText("While she's busy rummaging through desk drawers, you go ahead and...");
			writeFunction("writeEncounter('introduction2')", "Go into the office");
			break;
		}
		case "introduction2": {
			writeText("And the office is empty too. The entire place is meticulously organized, completely spotless.");
			writeSpeech("player", "", "Hello?");
			writeSpeech("???", "none", "Just a moment!");
			writeBig("images/principal/profile.jpg", "Art by Oreteki18Kin");
			if (data.story.day == 1) {
				writeSpeech("principal", "", "Ah, you must be "+data.player.name+". Quite punctual to meet with me so soon, a good habit.");
				writeSpeech("player", "", "I'm very forward thinking. Forward in general, really.");
				writeSpeech("principal", "", "So, your supervisor should have filled you in on your responsibilities already. Correct? We've never had a dedicated counselor here, so I'm afraid there's not much framework for you.");
			}
			else {
				writeSpeech("principal", "", "Ah, you must be "+data.player.name+". It's good to meet you. I take it you're more punctual with students?");
				writeSpeech("player", "", "Of course, ma'am. Sorry for not meeting with you sooner.");
				writeSpeech("principal", "", "It's not an issue. This meeting isn't mandatory, your supervisor should have filled you in on your responsibilities already. Correct? We've never had a dedicated counselor here, so I'm afraid there's not much framework for you.");
			}
			writeText("She takes a seat at her desk. Despite it being the middle of the day, the desk is spotless except for a few papers, her computer, and a bottle of hand sanitizer.");
			writeSpeech("player", "", "It's not a problem. So, should I get right to work then?");
			writeSpeech("principal", "", "Did you have a particular student in mind? I'm quite proud of the fact that our students are remarkably well-adjusted.");
			writeSpeech("player", "", "From the pact you made for eternal youth, and the school's success, of course.");
			writeSpeech("principal", "", "... Excuse me?");
			writeSpeech("player", "", "A bad joke, sorry. In any case, most issues can be found just by picking out students who seem like they need help, or by talking with the teachers.");
			writeSpeech("principal", "", "Very good then, don't let me keep you. I've been keeping some notes on students you should meet, but my secretary "+fName('secretary')+" was keeping track of them.");
			writeSpeech("player", "", "Ah. I'll come back another time then. It was good meeting you.");
			writeSpeech("principal", "", "And you.");
			writeText("She seems very disarmed, but a strong feeling in your gut warns you away from attempting hypnosis right away.");
			writeText("Fastidious people, the kind who have a dedicated bathroom in their office, tend to be very resistant to letting themselves relax. You'll need her to trust you if you want to get anywhere with her.");
			passTime();
			setTrust('principal', 40);
			setTrust('secretary', 20);
			data.story[8].met = "";
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "caseSelect": {
			writeSpeech("secretary", "", "Go right ahead.");
			writeText("...");
			writeSpeech("principal", "", "Good to see you again. Let me see here...");
			if (data.story[8].met.includes('kuroS') != true) {
				writeSpeech("principal", "", "I've got the file of a very unconventional young woman. She's been... Soliciting... The school's security, the teachers, anyone in any position of authority. If you could straighten her out, that would be very helpful.");
				writeFunction("writeEncounter('kuroCaseStart')", fName('kuro')+" "+lName('kuro')+"'s file");
			}
			else {
				if (data.story[8].met.includes('kuroF') != true) {
					writeSpeech("principal", "", "Have you had a chance to speak with Ms. "+lName('kuro')+" yet?");
					if(checkTrust('kuro') > 0) {
						writeFunction("writeEncounter('kuroCaseEnd')", "Report on "+fName('kuro')+"'s case.");
					}
				}
			}
			if (data.story[8].met.includes('purpleS') != true) {
				writeSpeech("principal", "", "I've got the file of a young woman who's been struggling since her father passed away. Her grades are down and her friends say she's been growing distant.");
				writeFunction("writeEncounter('purpleCaseStart')", fName('purple')+" "+lName('purple')+"'s file");
			}
			else {
				if (data.story[8].met.includes('purpleF') != true) {
					writeSpeech("principal", "", "Have you had a chance to speak with Ms. "+lName('purple')+" yet?");
					if(checkTrust('purple') > 0) {
						writeFunction("writeEncounter('purpleCaseEnd')", "Report on "+fName('purple')+"'s case.");
					}
				}
			}
			if (data.story[8].met.includes('neetS') != true) {
				writeSpeech("principal", "", "There've been reports of a... Um... 'Gremlin', in the computer lab. I know it's ridiculous, but...");
				writeFunction("writeEncounter('neetCaseStart')", "Gremlin's file");
			}
			else {
				if (data.story[8].met.includes('neetF') != true) {
					writeSpeech("principal", "", "Have you looked into the reports of the creature in the computer lab? I've heard that gremlins come out later in the day.");
					if(checkTrust('neet') > 0) {
						writeFunction("writeEncounter('neetCaseEnd')", "Report on "+fName('neet')+"'s case.");
					}
				}
			}
			if (data.story[8].met.includes('starletS') != true) {
				writeSpeech("principal", "", "I've got a student who isn't taking career planning week seriously. She's a good student who I think has a lot of potential. Could you help her out?");
				writeFunction("writeEncounter('starletCaseStart')", "Beige file");
			}
			else {
				if (data.story[8].met.includes('starletF') != true) {
					writeSpeech("principal", "", "Have you spoken with Miss starletL yet? Gotten her to change her mind?");
					if(checkTrust('starlet') > 81) {
						writeFunction("writeEncounter('starletCaseEnd')", "Report on starletL's case.");
					}
				}
			}
			if (data.story[8].met.includes('scarfS') != true) {
				writeSpeech("principal", "", "I don't necessarily want to point the blame at anyone in particular, but there is one teacher I feel hasn't been performing at her best lately. I know it isn't your job, but could you speak to her?");
				writeFunction("writeEncounter('scarfCaseStart')", fName('scarf')+" "+lName('scarf')+"'s file");
			}
			else {
				if (data.story[8].met.includes('scarfF') != true) {
					writeSpeech("principal", "", "Have you had a chance to speak with Ms. "+lName('scarf')+" yet?");
					if(checkTrust('scarf') > 20) {
						writeFunction("writeEncounter('scarfCaseEnd')", "Report on "+fName('scarf')+"'s case.");
					}
				}
			}
			if (data.story[8].met.includes('nurseS') != true) {
				writeSpeech("principal", "", "I've gotten some... Troubling news from some students lately about something untoward going on in the nurse's office. Could you check it out?");
				writeFunction("writeEncounter('nurseCaseStart')", "nurseF's file");
			}
			else {
				if (data.story[8].met.includes('nurseF') != true) {
					writeSpeech("principal", "", "Have you found anything that might suggest what our nurse might be up to?");
					if(checkTrust('nurse') > 79) {
						writeFunction("writeEncounter('nurseCaseEnd')", "Report on nurseF's case.");
					}
				}
			}
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "kuroCaseStart": {
			writeText("You take "+fName('kuro')+"'s file.");
			writeSpeech("player", "", "I can certainly try.");
			writeSpeech("principal", "", "Thank you. I believe she's usually being held up in the mornings at the school's entrance.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.story[8].met += "kuroS";
			addItem("File A-1", true, "images/kuro/kuro.jpg")
			if(checkTrust('kuro') > 0) {
				writeEncounter('kuroCaseEarly');
			}
			break;
		}
		case "kuroCaseEnd": {
			writeSpeech("player", "", "I've had the chance to speak with "+fName('kuro')+". It's a bit early, but I think she's making progress.");
			writeSpeech("principal", "", "Oh? Oh! How grand! Hopefully her grades will improve too. Will she be changing her outfit? She follows dress code, but her nails and hair are a bit...");
			writeSpeech("player", "", "Flashy? I'll talk to her about it. But it's important to allow the little freedoms so that she doesn't try to assert herself too much.");
			writeSpeech("principal", "", "I see. You're the expert, so I'll leave this in your hands then. Thank you.");
			data.story[8].met += "kuroF";
			data.player.counseling += 1;
			removeItem("File A-1");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuroCaseEarly": {
			writeSpeech("player", "", "Actually, I've already had the chance to speak with "+fName('kuro')+". It's a bit early, but I think she's making progress.");
			writeSpeech("principal", "", "Oh? Oh! How grand! Hopefully her grades will improve too. Will she be changing her outfit? She follows dress code, but her nails and hair are a bit...");
			writeSpeech("player", "", "Flashy? I'll talk to her about it. But it's important to allow the little freedoms so that she doesn't try to assert herself too much.");
			writeSpeech("principal", "", "I see. You're the expert, so I'll leave this in your hands then. Thank you.");
			data.story[8].met += "kuroF";
			data.player.counseling += 1;
			removeItem("File A-1");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purpleCaseStart": {
			writeSpeech("player", "", "I can give it a shot. The loss of a parent is pretty heavy though.<br><i>She probably won't be satisfied unless I can get her back to a healthy mindset. I'll probably need to use hypnosis for this.</i>");
			writeSpeech("principal", "", "Wonderful! I'll be waiting to hear about how it goes. I'll have the file sent to your office, and she's in class B, take the east hallway. I believe she lives on Vintage Street as well.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.story[8].met += "purpleS";
			addItem("File B-1", true, "images/purple/purple.jpg")
			if(checkTrust('purple') > 80) {
				writeEncounter('purpleCaseEarly');
			}
			break;
		}
		case "purpleCaseEnd": {
			writeSpeech("player", "", "I've had a chance to speak with "+fName('purple')+". I've spoken with her mother too, and I'm making progress.");
			writeSpeech("principal", "", "Oh, I see. How is she doing, then?");
			writeSpeech("player", "", "Better. You'll notice a bump in her grades soon.");
			writeSpeech("principal", "", "That's... That's incredible! Well, I'll have to keep an eye on her to be sure, but if you're right than you really are worth your position. Thank you very much.");
			writeSpeech("player", "", "It's not a problem. Let me know if you need anything else, then?");
			writeSpeech("principal", "", "Absolutely. You'll be the first I go to.");
			data.story[8].met += "purpleF";
			data.player.counseling += 1;
			removeItem("File B-1");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purpleCaseEarly": {
			writeSpeech("player", "", "Ah, "+fName('purple')+".");
			writeSpeech("principal", "", "You know her?");
			writeSpeech("player", "", "I do. I've met her mother too. And I've already had a chance to discuss these issues, and her future.");
			writeSpeech("principal", "", "Oh, I see. How is she doing, then?");
			writeSpeech("player", "", "Better. You'll notice a bump in her grades soon.");
			writeSpeech("principal", "", "That's... That's incredible! Well, I'll have to keep an eye on her to be sure, but if you're right than you really are worth your position. Thank you very much.");
			writeSpeech("player", "", "It's not a problem. Let me know if you need anything else, then?");
			writeSpeech("principal", "", "Absolutely. You'll be the first I go to.");
			data.story[8].met += "purpleF";
			removeItem("File B-1");
			data.player.counseling += 1;
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetCaseStart": {
			writeSpeech("player", "", "Gremlin?");
			writeSpeech("principal", "", "Yes, I asked security to look into it, but they thought I was joking.");
			writeSpeech("player", "", "Why not say you heard there was a rat? That's less likely to sound like a joke.");
			writeSpeech("principal", "", "That's horrible! How could I lie to public employees like that? I-");
			writeSpeech("player", "", "Gotcha. Alright, I'll check it out.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.story[8].met += "neetS";
			addItem("File B-2", true, "images/neet/neet.jpg")
			if(checkTrust('neet') > 0) {
				writeEncounter('neetCaseEarly');
			}
			break;
		}
		case "neetCaseEnd": {
			writeSpeech("player", "", "I found your gremlin, it's a student.");
			writeSpeech("principal", "", "Oh thank goodness. Well, who is it? I can't have students around here looking like goblins, the school's image will be hurt.");
			writeSpeech("player", "", "Her name is Tia Sun, it's not a problem. Whoever reported her must've mistaken her silhouette, the room is really dark.");
			writeSpeech("principal", "", "I see. Thank you for taking the matter seriously, I appreciate it.");
			data.story[8].met += "neetF";
			data.player.counseling += 1;
			removeItem("File B-2");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeSpeech("principal", "", "Sun, hmm? I don't recall anyone by that name enrolled here. I'll look into the matter, thank you again.");
			writeSpeech("player", "", "No problem, Mrs. principalL.");
			writeSpeech("principal", "", "I shall see you around then. It's <i>Ms.</i> principalL, by the way.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetCaseEarly": {
			writeSpeech("player", "", "Ah, "+fName('neet')+".");
			writeSpeech("principal", "", "You named it?");
			writeSpeech("player", "", "Her. Tia Sun.");
			writeSpeech("principal", "", "... I see. Well, pets are not allowed on the premises, and I can't have one of our employees owning a goblin, so-");
			writeSpeech("player", "", "She's a student, Mrs. principalL.");
			writeSpeech("principal", "", "Oh. Oh! Goodness me, I misunderstood. Someone else must have misunderstood as well, I'll send them a memo with the proper definition of 'gremlin'. Thank you, playerF.");
			writeSpeech("player", "", "No problem, Mrs. principalL.");
			writeSpeech("principal", "", "I shall see you around then. It's <i>Ms.</i> principalL, by the way.");
			data.story[8].met += "neetF";
			removeItem("File B-2");
			data.player.counseling += 1;
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletCaseStart": {
			loadCharacter('starlet');
			loadCharacter('pornstar');
			writeText("You take the file.");
			writeSpeech("player", "", "So what do you mean she isn't taking it seriously? Is she causing trouble?");
			writeSpeech("principal", "", "No! She's incredibly polite and well-behaved, and is otherwise a model student aside from her C average.");
			writeSpeech("player", "", "So then what's the problem? I don't see any... Hold on, are there pages missing?");
			writeSpeech("principal", "", "Yes, well... I'm sorry! I can't do it. Please, just try to talk some sense into her. I can't even bring up the subject to her mother, I'm at a loss.");
			writeSpeech("player", "", "<i>Something must be seriously wrong if she can't even discuss it. I might be going in over my head, but...</i><br>I'll do my best. But I can't make any promises.");
			writeSpeech("principal", "", "Thank you so much... If you'll excuse me for a moment, just thinking about it makes me need to wash my hands. Good luck.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.story[8].met += "starletS";
			addItem("File A-3", true, "images/starlet/starlet.jpg")
			break;
		}
		case "starletCaseEnd": {
			writeSpeech("principal", "", "Please, please tell me you've solved the issue.");
			writeSpeech("player", "", "I have. I even spoke with starletF's mother about the problem. starletF will be getting some practical experience to help guide her down the correct path.");
			writeSpeech("principal", "", "Thank goodness... You truly are dependable. I was skeptical at first, but you've already proven yourself invaluable to the school.");
			writeText("principalF reaches across the table to shake your hand, then sanitizes it afterwards.");
			data.story[8].met += "starletF";
			data.player.counseling += 1;
			removeItem("File A=3");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeSpeech("principal", "", "Ah, has she settled on a career path yet?");
			writeSpeech("player", "", "Yes. Her grades will probably still hover where they are, but she has a solid future ahead of her.");
			writeSpeech("principal", "", "Wonderful!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "scarfCaseStart": {
			writeSpeech("player", "", "So what do you mean 'not up to her best'?");
			writeSpeech("principal", "", "Well, she has't recieved any complaints, and her students are doing fine on their psychology tests, it's just that...");
			writeSpeech("player", "", "<i>So she's a psychology teacher?</i><br>So what's the problem?");
			writeSpeech("principal", "", "She isn't picking up after herself! The teacher's lounge is always such a mess at the end of the day, and her desk is the worst!<br>Sorry, I lost control of myself for a moment.");
			writeSpeech("player", "", "<i>That's her idea of losing control?</i><br>Alright, I guess I can ask her to pick up after herself.");
			writeSpeech("principal", "", "Thank you, I would really appreciate it. She teaches in Class B, down the east hallway.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.story[8].met += "scarfS";
			addItem("File T-1", true, "images/scarf/scarf.jpg")
			break;
		}
		case "scarfCaseEnd": {
			writeSpeech("player", "", "Yes I have, I've asked her to keep her desk cleaner. And Ms. "+fName('scarf')+" volunteered to help keep the room cleaner as well.");
			writeSpeech("principal", "", "Wonderful! I know it's not your job, so thank you very much for the help.");
			data.story[8].met += "scarfF";
			data.player.counseling += 1;
			removeItem("File T-1");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nurseCaseStart": {
			writeText("You take "+fName('nurse')+"'s file.");
			writeSpeech("player", "", "What do you mean 'untoward'? ");
			writeSpeech("principal", "", "Well, nothing too bad. Misplaced bottles, incorrect prescriptions. ");
			writeSpeech("player", "", "Ah, so you think she might be stealing pills?");
			writeSpeech("principal", "", "The opposite, actually. I keep close track of what the office is allocated, but a student came to me the other day confident that there was a collection of bottles with names that don't make any sense for a school nurse to have access to. I had security look into her office, but nothing came of it.");
			writeSpeech("player", "", "And you think I can... Help?");
			writeSpeech("principal", "", "I'd imagine she'd feel a lot more comfortable speaking with you than with security. She might open up and let something slip.");
			writeSpeech("player", "", "You're quite confident she's in the wrong for someone without any proof.");
			writeSpeech("principal", "", "I don't trust anyone, playerF. I'll maintain proper decorum, but I have no intention of giving anyone enough leeway to destroy this university's reputation.");
			writeSpeech("player", "", "Noted. I'll chat her up and let you know if anything's up.");
			writeSpeech("principal", "", "I appreciate it.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.story[8].met += "nurseS";
			addItem("File T-2", true, "images/nurse/nurse.jpg")
			if(checkTrust('nurse') > 79) {
				writeEncounter('nurseCaseEarly');
			}
			break;
		}
		case "nurseCaseEnd": {
			writeSpeech("player", "", "I had a chance to look into nurseF, she seems pretty harmless and I didn't see any 'untoward' chemicals in there.");
			writeSpeech("principal", "", "Really? No strange substances, no... <i>Hard drugs</i>?");
			writeSpeech("player", "", "Nope. How trustworthy was this source of yours?");
			writeSpeech("principal", "", "Well... Perhaps not as trustworthy as I thought. I'll followup myself, but I think perhaps I can relax the scrutiny on Ms. nurseL.");
			writeSpeech("player", "", "Whatever you think is best. I'll-");
			writeText("You notice a flower on principalF's desk, it looks familiar, like the one you saw in the book in nurseF's office.");
			writeSpeech("player", "", "Could I have a petal from this? I'm, uh, trying to find a flower that matches the color scheme of my office.");
			writeSpeech("principal", "", "Of course! Finally coordinating your office, how wonderful. I'll forward some of my daily minimalist magazine articles to your work email as well.<br>Now, I need to get back to work.");
			writeSpecial("Obtained the Regent's Flower petal!");
			addItem("Regent Flower Petal", true, "images/nurse/flower.jpg");
			data.story[8].met += "nurseF";
			data.player.counseling += 1;
			removeItem("File T-2");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nurseCaseEarly": {
			writeSpeech("player", "", "What do you mean 'untoward'? ");
			writeSpeech("principal", "", "Well, nothing too bad. Misplaced bottles, incorrect prescriptions. ");
			writeSpeech("player", "", "You think nurseF might be stealing pills?");
			writeSpeech("principal", "", "The opposite, actually. A student came to me the other day confident that there was a collection of bottles with names that don't make any sense for a school nurse to have access to. You're already acquainted with her?");
			writeSpeech("player", "", "Yeah, and I can confirm there's nothing unusual going on in the office. How trustworthy was this source?");
			writeSpeech("principal", "", "Well... Perhaps not as trustworthy as I thought. I'll followup myself, but I think perhaps I can relax the scrutiny on Ms. nurseL.");
			writeSpeech("player", "", "Whatever you think is best. I'll-");
			writeText("You notice a flower on principalF's desk, it looks familiar, like the one you saw in the book in nurseF's office.");
			writeSpeech("player", "", "Could I have a petal from this? I'm, uh, trying to find a flower that matches the color scheme of my office.");
			writeSpeech("principal", "", "Of course! Finally coordinating your office, how wonderful. I'll forward some of my daily minimalist magazine articles to your work email as well.<br>Now, I need to get back to work.");
			writeSpecial("Obtained the Regent's Flower petal!");
			addItem("Regent Flower Petal", true, "images/nurse/flower.jpg");
			data.story[8].met += "nurseF";
			data.player.counseling += 1;
			removeItem("File A-1");
			updateMenu();
			writeSpecial("Your 'counseling' ability has improved! This means a pay bump, and "+fName('principal')+" trusts you more!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "test": {
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
	if (data.player.location == "gallery") {
		writeFunction("changeLocation(data.player.location)", "Finish");
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
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "testPhone": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage for images, and writePhoneChoices
			writePhoneSpeech("mom", "", "Hello. This is "+fName('mom')+".");
			writePhoneChoices("Sleep well?", "Who?");
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