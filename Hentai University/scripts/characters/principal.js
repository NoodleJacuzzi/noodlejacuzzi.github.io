var character = {index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "", color: "#e47311",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "principal", 
	desc: "The principal of the university you work at. She's pretty kind but is surprisingly strong willed.",
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
	{index: "caseSelect", name: "Enter Principal principal's Office.", requirements: "?location northHallway; ?trustMin principal 41; !counseling 5; !flag principal council; ?flag secretary trouble;",},
	{index: "councilStart", name: "principal wanted to see you", requirements: "?location northHallway; ?trustMin principal 41; ?counseling 5; !flag principal council;",},
	{index: "caseSelect", name: "Enter Principal principal's Office.", requirements: "?location northHallway; ?trustMin principal 41; ?flag principal council; ?flag secretary trouble;",},
	{index: "secretaryTrouble", name: "Enter Principal principal's Office.", requirements: "?location northHallway; !flag secretary trouble; ?trustMin principal 41;",},
	{index: "street", name: "You spot principal on the street.", requirements: "?location street; !flag principal street; ?trustMin principal 41;",},
	{index: "sauna", name: "You spot principal walking into a building.", requirements: "?location shoppingDistrict; !flag principal sauna; ?trustMin principal 41;",},
	{index: "subtlePresident", name: "principal is staring at president's painting here.", requirements: "?location schoolEntrance; ?trustMin president 81; ?trustMin principal 41; !flag principal subtlePresident;",},
	{index: "principalBeach1", name: "principal is here with some other women.", location: 'beach', time: "MorningEvening", itemReq: "", trustMin: 41, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log('now running encounter '+name);
	writeHTML(`
		define principal = sp principal;
		define secretary = sp secretary;
		define player = sp player;
		define president = sp president;
		define pinstripe = sp pinstripe;
		define instructor = sp instructor;
		define scarf = sp scarf;
		define ojou = sp ojou;
		define nurse = sp nurse;
		define starlet = sp starlet;
		define pornstar = sp pornstar;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
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
			if (data.player.day == 1) {
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
			if (checkItem("Town Map") == false) {
				writeSpeech("principal", "", "I do at least have a map of the town. There are a number of districts outside the school, it might be worth it to do infrequent housecalls. I apologize I couldn't find one in time to include with your letter.");
				addItem("Town Map", true, "scripts/gamefiles/items/map.jpg")
				writeSpecial("You obtained a town map!");
			}
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
					if(checkTrust('purple') > 60) {
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
					if(checkTrust('starlet') > 82) {
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
			if (checkFlag("principal", "council") == true) {
				var presidentStatus = "";
				if (checkTrust("president") > 0) {
					presidentStatus = "met";
				}
				if (checkTrust("president") > 99) {
					presidentStatus = "corrupt";
				}
				switch (presidentStatus) {
					case "met": {
						writeHTML(`
							principal I've heard you and presidentF have already met. I do hope she comes around to you.<br>She's quite set on learning the results of your secondary investigation as soon as possible.
							t You haven't finished corrupting presidentF.
						`);
						break;
					}
					case "corrupt": {
						writeHTML(`
							principal I spoke with presidentF the other day, she wasn't asking about your investigation like she normally does. I'm glad she's warming up to you.
							t presidentF has been corrupted.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal Have you spoken with our student council yet? They meet in the room just outside this office, although only two are present outside of special meetings.
						`);
					}
				}
				var nurseStatus = "";
				if (checkTrust("nurse") > 0) {
					nurseStatus = "met";
				}
				if (checkTrust("nurse") == 3) {
					nurseStatus = "absent";
				}
				if (checkTrust("nurse") > 79) {
					nurseStatus = "corrupt";
				}
				switch (nurseStatus) {
					case "absent": {
						writeHTML(`
							principal I haven't seen nurseF around the school lately... It seems like she might not be coming to the PTSA meeting at the very least.
							t nurseF will not be attending the meeting.
						`);
						break;
					}
					case "met": {
						writeHTML(`
							principal nurseF was asking about you, she's actually a PTSA member. You should visit her if you have the chance.
							t You haven't finished corrupting nurseF.
						`);
						break;
					}
					case "corrupt": {
						writeHTML(`
							principal Has nurseF seemed out of the ordinary to you? She was quite excited about the upcoming meeting last time we spoke, but normally she's quite withdrawn...
							t nurseF has been corrupted.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal Ah, by the way, you should see our nurse if you find the time. Her office is in the west hallway.
						`);
					}
				}
				var scarfStatus = "";
				if (checkTrust("scarf") > 0) {
					scarfStatus = "met";
				}
				if (checkTrust("scarf") > 41) {
					scarfStatus = "challenging";
				}
				if (checkTrust("scarf") > 99) {
					scarfStatus = "corrupt";
				}
				switch (scarfStatus) {
					case "challenging": {
						writeHTML(`
							principal Are you and scarfF playing some kind of game? You should wrap it up before the meeting.
							t scarfF isn't on your side yet.
						`);
						break;
					}
					case "met": {
						writeHTML(`
							principal scarfF still won't get back to me about the meeting. I hope she'll attend.
							t You haven't fully corrupted scarfF.
						`);
						break;
					}
					case "corrupt": {
						writeHTML(`
							principal scarfF seems more open lately. I'm glad she'll be attending the meeting, but when I brought it up she started chuckling... Menacingly...
							t scarfF is on your side.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal I know there's at least one teacher attending the PTSA meeting. She's... Difficult to get a hold of at times.
						`);
					}
				}
				var mamaStatus = "";
				if (checkTrust("mama") > 0) {
					mamaStatus = "met";
				}
				if (checkTrust("mama") > 20) {
					mamaStatus = "bull";
				}
				if (checkTrust("mama") == 100) {
					mamaStatus = "son";
				}
				switch (mamaStatus) {
					case "met": {
						writeHTML(`
							principal Ugh, mamaF has called me three times today... Goodness, if I need to hear about her son again, I may have a breakdown.
							t You haven't fully corrupted mamaF.
						`);
						break;
					}
					case "son": {
						writeHTML(`
							principal I received the strangest call from mamaF. She's under the impression her son will be attending the PTSA meeting. I thought he wasn't even in the country yet...
							t mamaF has been corrupted.
						`);
						break;
					}
					case "bull": {
						writeHTML(`
							principal mamaF hasn't called today... Strange. The last time we spoke she was quite excited for the PTSA meeting...
							t mamaF has been corrupted.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal Alright, I'm making a personal request. There's a woman named mamaF mamaL, I'll try to introduce you. Please, make her stop calling about her son. He doesn't even attend this school yet!
						`);
					}
				}
				var ojouStatus = "";
				if (checkTrust("ojou") > 0) {
					ojouStatus = "met";
				}
				if (checkFlag("ojou", "incubus") == true) {
					ojouStatus = "absent";
				}
				if (checkTrust("ojou") > 79) {
					ojouStatus = "corrupt";
				}
				switch (ojouStatus) {
					case "corrupt": {
						writeHTML(`
							principal I say you and ojouF in the hallway earlier, I noticed she didn't fly off the handle at you. Progress, I suppose.
							t ojouF has been corrupted.
						`);
						break;
					}
					case "absent": {
						writeHTML(`
							principal I received a call the other day letting me know ojouF wouldn't be attending the PTSA meeting. I didn't recognize the voice though...
							t ojouF will not be attending the meeting.
						`);
						break;
					}
					case "met": {
						writeHTML(`
							principal ojouF stormed in here the other day, she had a few choice remarks about several members of the staff, including you. I'm sorry you had to be caught in her little tirade... I hoped her friends could cool her down, but no dice...
							t You haven't fully corrupted ojouF.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal One of the attendees of the PTSA will be a major donor's daughter. If you could talk to her about her behavior I'd appreciate it, but please tread carefully. Her class is on the east side of the school.
						`);
					}
				}
				var pinstripeStatus = "";
				if (checkTrust("pinstripe") > 0) {
					pinstripeStatus = "met";
				}
				if (checkTrust("pinstripe") > 59) {
					pinstripeStatus = "corrupt";
				}
				if (checkTrust("pinstripe") > 89) {
					pinstripeStatus = "absent";
				}
				switch (pinstripeStatus) {
					case "corrupt": {
						writeHTML(`
							principal pinstripeF seems to have stopped her own bit of investigations about you. PErhaps she's finally satisfied? I'll have to ask ehr about it at the meeting.
							t pinstripeF has been corrupted.
						`);
						break;
					}
					case "absent": {
						writeHTML(`
							principal I haven't seen pinstripeF around, and someone texted me this image of... No, it couldn't be...
							t pinstripeF will not be attending the meeting.
						`);
						break;
					}
					case "met": {
						writeHTML(`
							principal Hmm... pinstripeF is in a mood today, I wonder if I could cheer her up...
							t You haven't fully corrupted pinstripeF.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal Ah, I don't think you've met, but one of the attendees of the PTSA meeting will be our resident lawyer. Her office is just down the hall.
						`);
					}
				}
				var instructorStatus = "";
				if (checkTrust("instructor") > 0) {
					instructorStatus = "met";
				}
				if (checkTrust("instructor") > 1) {
					instructorStatus = "corrupt";
				}
				switch (instructorStatus) {
					case "corrupt": {
						writeHTML(`
							principal instructorF has been acting oddly... She says she likes your 'vision for the school'. I'm not sure what that means, maybe she isn't the perfect replacement for coachF I was hoping for...
							t instructorF has been corrupted.
						`);
						break;
					}
					case "met": {
						writeHTML(`
							principal instructorF's training is going well! She actually asked about you, of course I let her know you were safe to speak with her athletes.
						`);
						break;
					}
					default: {
						writeHTML(`
							principal Hmhm, I've received word that my friend instructorF has arrived. She'll be training a few potential athletes in our gym area.<br>She hasn't formally come on to replace our current coach, but I may have my fingers crossed~
						`);
					}
				}
			}
			if (checkFlag("secretary", "trouble") == true && checkFlag("secretary", "help") != true) {
				writeFunction("writeEncounter('secretaryDiscussion')", "Talk about secretaryF");
			}
			//Manipulation
			if (checkFlag("president", "shadowCouncil") == true) {
				if (checkFlag("principal", "manipulation") == false) {
					writeFunction("writeEncounter('principalManipulation')", "Use common sense manipulation on principalF");
				}
				else {
					if (checkFlag("starlet", "principal") == true) {
						if (data.player.studio.filmXFetish1 == true) {
							if (data.player.studio.filmXFetish2 == true) {
								writeFunction("writeEncounter('streetWater')", "Use CSM and film "+data.player.studio.filmXName);
							}
							else {
								writeFunction("writeEncounter('streetNoWater')", "Use CSM and film "+data.player.studio.filmXName);
							}
						}
						else {
							writeFunction("writeEncounter('interviewStart')", "Use CSM and film "+data.player.studio.filmXName);
						}
					}
					else {
						writeFunction("writeEncounter('principalManipulationFollowup')", "Check if the common sense manipulation stuck");
					}
				}
				var subtleCounter = 0;
				if (checkFlag("principal", "subtlePresident") == true) {
					subtleCounter += 1;
				}
				if (checkFlag("secretary", "hypnosis") == true) {
					if (data.player.counseling > 3) {
						//subtle instructor
						if (checkFlag("principal", "subtleInstructor") != true) {
							writeFunction("writeEncounter('subtleInstructor')", "Bring principalF to instructorF");
						}
						else {
							subtleCounter += 1;
						}
						//subtle scarf
						if (checkFlag("principal", "subtleScarf") != true) {
							writeFunction("writeEncounter('subtleScarf')", "Bring scarfF to principalF");
						}
						else {
							subtleCounter += 1;
						}
						//subtle starlet
						if (checkFlag("principal", "subtleStarlet") != true) {
							writeFunction("writeEncounter('subtleStarlet')", "Subtly direct principalF to starletF's debut");
						}
						else {
							subtleCounter += 1;
						}
						//subtle confidence
						if (subtleCounter > 2) {
							writeFunction("writeEncounter('subtleConfide')", "principalF seems unnerved. It seems like your efforts are about to pay off!");
						}
					}
					else {
						writeText("principalF doesn't trust you enough for you to gaslight her!");
					}
				}
				else {
					writeText("You'll need to hypnotize secretaryF if you want to gaslight principalF. You can't her being the voice of reason.");
				}
				//blackmail confrontation
				if (checkFlag("secretary", "blackmail") == true) {
					writeFunction("writeEncounter('blackmailConfrontation')", "If you're absolutely confident, you could try blackmailing principalF");
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
		case "principalBeach1": {
			writeBig("images/scarf/principalBeach.jpg");
			writeSpeech("principal", "bikini.jpg", "Oh, playerF? What a coincidence. I was just breaking in the new outfit.");
			writeSpeech("secretary", "bikini.jpg", "M-miss! Are you sure this is what you meant for me to wear? This is degrading!");
			writeBig("images/scarf/secretaryBeach.jpg");
			writeSpeech("principal", "bikini.jpg", "Oh hush, you look fantastic. If I recall, you said you wanted me to see you wearing it, right?");
			writeSpeech("secretary", "bikini.jpg", "Yes, but I wanted <i>you</i> to see me wearing it! Not the entire beach!");
			writeBig("images/scarf/blondeBeach.jpg");
			writeSpeech("Blonde", "images/principal/blonde.jpg", "This vacation was just what we needed, right sis?");
			writeSpeech("principal", "bikini.jpg", "Liberating down to the soul. I suppose we should finish tormenting secretaryF for the day.<br>Unless... playerF, I don't suppose you'd like to join in on the fun?");
			writeText("For all her struggle, secretaryF seems to be enjoying herself too...");
			writeSpeech("secretary", "bikini.jpg", "Please, we should be getting back!");
			writeSpeech("player", "", "Huh. I didn't know principalF had a sister.");
			writeSpeech("scarf", "bikini.jpg", "She's quite sweet. Won't you get to know her better?");
			writeFunction("writeEncounter('principalBeach2')", "Join the trio");
			writeFunction("changeLocation(data.player.location)", "Ignore them, focus");
			break;
		}
		case "principalBeach2": {
			writeText("You grab principalF by the hand, more on instinct than anything else.");
			writeSpeech("principal", "bikini.jpg", "Relax, just let go.");
			writeSpeech("Blonde", "images/principal/blonde.jpg", "We can all have fun together.");
			writeSpeech("secretary", "bikini.jpg", "W-what are you doing? Have some decency!");
			writeBig("images/scarf/principalBeachSex1.jpg");
			writeSpeech("Blonde", "images/principal/blonde.jpg", "Go ahead, she's all ready for you!");
			writeSpeech("principal", "bikini.jpg", "Don't hold back, she needs a good punishing.");
			writeText("In the back of your mind you know you have somewhere to be, but...");
			writeBig("images/scarf/principalBeachSex2.jpg");
			writeSpeech("secretary", "bikini.jpg", "Aaah~!");
			writeSpeech("principal", "bikini.jpg", "Relax, give in. There's nowhere you'd rather be but here.");
			writeText("As she looks you in the eyes, it's clear she isn't talking to secretaryF.");
			writeBig("images/scarf/principalBeachSex3.jpg");
			writeText("Before you fall into an endless loop of pleasure, you can hear a voice whispering into your ear.");
			writeSpeech("scarf", "bikini.jpg", "You put up a good resistance, child. Just relax, enjoy.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
		case "councilStart": {
			writeHTML(`
				sp player; So, what did you want to speak to me about?
				sp principal; Take a seat.<br>As you know this university prides itself on maintaining a professional environment. In order to ensure that environment is maintained I regularly host a forum with influential representatives of the school.
				sp player; Ah, like a PTA meeting?
				sp principal; PTSA, actually. It stands for Parent Teacher Student Association. Attendance is opt-in, faculty and major donors are invited to attend, although some donors choose to have their children represent their interests instead. Hence the "Student" in PTSA. Mostly it's a forum for suggesting policy change and identifying... <i>Problematic</i> elements of the school.
				t They way she says that sounds ominous, but this could be a pretty good opportunity for you. If you have control of the council, the school is essentially yours. 
				sp principal; You're certainly welcome to attend, one of the talking points will be reviewing your performance after all. Looking over student performance after counselings, discussing the results of the secondary background check.
				sp player; ... The what now?
				sp principal; Well, you're working with students in a private environment. I know a few members of the student body have requested additional screening.<br>... They won't find anything though, right?
				sp player; Of course not.
				t As you lie like a dog it's clear this is the time to begin hatching a plan. If you can't manage control of the council you're dead in the water. 
				sp player; Who else will be there?
				sp principal; Well, there's plenty of time before the meeting, and it is opt-in. Once the best time for the meeting is determined secretaryF will handle the dates. I know the school nurse nurseF always makes it a point to attend, and I intend to strongarm scarfF into finally attending for once.<br>Oh! And the student council president, their room is just outside of here.  She's asked a lot of questions about you actually, I'd perhaps take some time to get to know her and show her your good side.<br>Now, I'm actually quite held up at the moment, secretaryF double-booked my evening. I'll have details sent to you as they arise.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			addFlag('principal', 'council');
			break;
		}
		case "secretaryTrouble": {
			writeHTML(`
				secretary Oh, oh no...
				t You approach principalF's office as usual, but her secretary is... Frazzled, to say the least.
				player Problem?
				secretary Oh! Oh, no, nothing to worry about... I hope. I'm sure I'm just panicking over nothing. Just let me...
				t She pulls out a paper shredder from beneath her desk, opens it, and the moment she sees lines of a yellowed parchment on the top of the shreddings she shuts the machine back up.
				secretary ...
				player I'll, uh... See myself into principalF's office.
				t She doesn't respond, looking at nothing with a thousand-yard stare.
			`);
			addFlag("secretary", "trouble");
			writeFunction("writeEncounter('caseSelect')", "Continue");
			break;
		}
		case "secretaryDiscussion": {
			writeHTML(`
				player Hey, secretaryF seemed kinda freaked out earlier.
				principal Today? I don't think she had anything important to handle today. Shred some misfiled reports, make copies of some historical...
				t Realizing what likely happened, principalF closes her eyes and sighs for a good long while.
				principal ... I think I may need to make her an appointment. An optometrist, general doctor... I'd speak to a dentist at this point if they could promise an answer...
				player Well, if you or her need help with anyth-
				principal Think carefully about that next sentence, playerF. I can't afford to cover that much overtime.
				player I mean as a friend. I can help secretaryF out if something comes up.
				principal I appreciate that. Believe me, something is <i>always</i> up. Luckily, it at least cuts down on corruption here. Some way or another I end up handling every one of this school's financial reports myself. <br>I once had a marketing rep turn themselves in to the police. After my fifth request for the same monthly report, he assumed we saw through his forgery.
				player And I take it that it was just secretaryF. I gotcha. I'll free up my schedule and talk to secretaryF.
				principal Thank you.
			`);
			addFlag("secretary", "help");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "councilQuo": {
			writeHTML(`
				principal Ah, playerF. What can I do for you? The council meeting still doesn't have a set date, I'm afraid.
			`);
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
					if(checkTrust('purple') > 60) {
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
					if(checkTrust('starlet') > 82) {
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
			if (checkFlag("secretary", "trouble") == true && checkFlag("secretary", "help") != true) {
				writeFunction("writeEncounter('secretaryDiscussion')", "Talk about secretaryF");
			}
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "street": {
			writeHTML(`
				im 102.jpg
				secretary Is that...?
				principal I think it is. Good to see you around, playerF. Enjoying a bit of fresh air?
			`);
			addFlag("principal", "street");
			writeFunction("writeEncounter('streetA')", "Anything to get away from work");
			writeFunction("writeEncounter('streetB')", "It's important to have a grasp on the neighborhood");
			break;
		}
		case "streetA": {
			writeHTML(`
				principal ... I expect that kind of talk from secretaryF, not from our first counselor.
				secretary I'm way too casual...
				principal We may not be at the school, but you should still treat your position, and the insitution, with respect.
				secretary Right, but I'm sure it won't happen again. We all make mistakes.
				principal ... See to it that you act in a more befitting way of your profession next time.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "streetB": {
			writeHTML(`
				secretary Eh? Why?
				principal Of course, understanding the local culture will let you better connect with wayward students. Not to mention speaking with them in a more casual environment means a better chance at them opening up.
				player ... Exactly right.
				secretary Whoa, I never even considered that!
				principal Well, don't let me keep you.<br>Still thinking about your role in the school, even while out and about. I'm glad the trust I've placed in you is proving correct.
			`);
			data.player.counseling +=1;
			writeSpecial("You've improved principalF's trust in you somewhat!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "sauna": {
			writeHTML(`
				t Following pricipalF and secretaryF inside may not be the most honest move, but social people do this all the time, right? Catching up with friends, they call it.
				t In any case...
				im 109.jpg
				principal playerF! My, you certainly get around. Already found this lovely place, so soon after moving into town?
				secretary Hello!
				principal So, what brings you here?
			`);
			addFlag("principal", "sauna");
			writeFunction("writeEncounter('saunaA')", "Just enjoying the view");
			writeFunction("writeEncounter('saunaB')", "It's good for the soul");
			break;
		}
		case "saunaA": {
			writeHTML(`
				secretary Eh? Of what?
				principal ... I certainly hope you weren't insuating what I think you were. Sexual harassment is not something I treat as a joke.
				player No, no! I meant... The mural! There are some incredible murals here.<br>... On the men's side. I mean.
				principal ... Right. Take care.
				secretary Take a picture if you can, I love murals! Bye!
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "saunaB": {
			writeHTML(`
				principal I quite agree! I know this is far below the temperature which kills bacterium, but I find it still helps make me feel a little cleaner afterwards.
				secretary It's great for aches and pains too! Especially those caused by workplace accidents...
				principal Speaking of, I need to head home to correct a mistep. A small matter.
				secretary What? Ma'am, I would hardly call deleting a teacher's faculty page-<br>Ah, you were covering for me... Sorry.
				principal Oh well... Try to keep it a secret, playerF. I'll see you back at the school.
			`);
			data.player.counseling +=1;
			writeSpecial("You've improved principalF's trust in you somewhat!");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "principalManipulation": {
			addFlag("principal", "manipulation");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "principalManipulationFollowup": {
			writeHTML(`
				player So I wanted to talk about yesterday, we were-
				principal I don't recall us meeting yesterday... I believe I had a booked schedule. In fact, I'm not sure I was at the shool at all.
				player I see.<br><i>She's in denial, and it's working. So, the manipulation at least works, I just need a way to take advantage of it and make it stick...</i>
				t With no way to push forwards, you're out of luck on this front.
			`);
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "subtlePresident": {
			writeHTML(`
				principal ...
				im images/president/painting.jpg
				player Incredible, isn't it?
				principal Eh?! Oh, playerF. My, I must have the most unbecoming air around me, to be staring at this for so long... I must look like a lecher.
				player Never, it's an incredible display of talent and self-confidence in both her abilities and sense of self.
				principal Right! Our student council is a beacon of virtue, even in a school like this.<br>Still...
				player There will always be the prudes, I suppose. The type of people who see perversion in everything.
				principal Well, not everything...
				player No, I mean it. In times of stress a catalyst can result in occurances like hallucinations. It's torn lives apart.
				principal Oh my! Then something like this-
				player No, it's not the painting's fault. It's just important to be aware of these things. I've dealt with cases like it before, highly repressed individuals who develop mental conditions leading to, well...
				principal Well what?
				player Oh, I should be going. See you around, principalF.
				t You leave, all the while she seems more and more nervous while glancing back at the painting.
			`);
			passTime();
			addFlag("principal", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "subtleInstructor": {
			writeHTML(`
				define track = sp Casey; im images/instructor/track.jpg; altColor #227F2E;
				define karate = sp Aiko; im images/instructor/karate.jpg; altColor #FAF9FE;
				define instructor = sp instructor;
				player Are you alright? You look a little off today. And I mean that in the most professional way I can, of course.
				principal Actually... I suppose I have been having this bizarre feelings around the school. Like I hear voices from classrooms after everyone has left. Strange things like that.
				player I think some fresh air could do you good.
				...
				t The two of you walk towards the gym. You meant to subtly nudge her here, but...
				principal You simply must see them. Our star athletes, coached by an actual olympian! I'm certain we'l have a flourishing set of sporting scholarships flowing in. I've constructed a track and field, a pool, even a judo arena, and-
				im images/instructor/113a.jpg
				principal Wh-WHAAA-?
				track Oh, it's the principal! Come to watch us train?
				principal W-why on earth-
				im images/instructor/101.jpg
				karate Apologies, ma'am. Not everyone is here today, but we can-
				principal instructorF.
				t She says it quietly, but with such ice cold rage in her voice that it can't help but be heard across the field.
				instructor principalF! Heya, here to watch-
				principal EXPLAIN!
				instructor Eh? Not much to explain. Just an ordinary routine.
				principal ORDINARY?! YOU CALL-
				player I'm not sure what the issue is...
				principal -THIS... Th... Wait, what? playerF, they're-
				track Yeah, is something the matter?
				karate I've been trained as a black belt, ma'am, this training, aside from how effective instructorF is, is routine.
				principal But... But I-
				player Maybe you should sit down. What exactly seems weird?
				principal ... N-nothing. I suppose I'm just... You really...? I don't... Maybe I'm just a little tired...
				instructor Hey, no shame. Owning up to your own mistakes is the sign of a great teacher.
				principal I'm... I'll be going now, I need to get some rest.
				t She walks off, looking completely shellshocked.
				t Her trust in you must be a little shaken, but her trust in everything should be falling apart. So long as she still has faith in you in the end, your plan is safe.
				player ... That was amazing, instructorF! How did you know about my plan? 
				instructor What plan?
			`);
			data.player.counseling -= 1;
			passTime();
			addFlag("principal", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "subtleStarlet": {
			writeHTML(`
				define starlet = sp starlet;
				player Well, I noticed that some students in class...
				...
				t After a good amount of bullshittery later you step out the door. A few texts to pornstarF, finding an anonymous way to send an email to principalF, and a lot of patience later...
				principal WHAT THE-!<br>secretaryF! Get in here, right now!
				secretary Coming! Oh no, did I write the wrong school name...?
				t When she sees you, she shouts for you to come in too.
				principal I just recieved an anonymous tip, a link to a video.
				im starlet.jpg
				starlet Oh god, fuck me harder~!
				principal Explain this, NOW!
				t Staring a hardcore porno of you fucking starletF in the ass, you maintain a completely straight face.
				player It's a video interview?
				secretary Of a student, I think? Is she saying something about the school?
				principal Wh-<br>Are you two suffering a concussion? Do you not see what's in the screen?
				t She turns the screen around to once more confirm that yes, she is watching a barely-legal teen get reamed in the ass on camera.
				secretary I'm not sure what you're talking about.
				player Me either.
				principal You... I don't...<br>I didn't want to have to do this, but... I can't be going crazy...
				t Hesitating, she forwards the link to someone else, quickly recieving the reply that the video seems completely innoculus.
				principal Even my own sister doesn't... I don't...
				secretary Are you alright? Should I get you another coffee?
				principal N-no... I just... I think I just need some fresh air.<br>I apologize, I'm... I'm not sure...
				t As principalF steps away from her desk, she does so on shaky legs.
				secretary Oh, I really hope this isn't my fault...
				t You leave as well. principalF's trust in you is a little shaken, but so is her trust in reality itself. So long as it's strong enough that she trusts you when everything else falls around her, you're in the clear.
				...
				starlet Alright, that was pretty weird. Upload my debut online, give you the link, then change the video afterwards?
				player That way when she sent it, she was actually sending a regular video. Just in case she sent it to someone outside the school.
				starlet The school? Huh?
				player Don't worry about it. I'll see you around, starletF.
				starlet All right... Oh, my mom got a dildo recently. Named it after you, just thought I'd let you know. Bye!
			`);
			data.player.counseling -= 1;
			passTime();
			addFlag("principal", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "subtleScarf": {
			writeHTML(`
				define scarf = sp scarf;
				player I think scarfF was willing to talk to you, you know, about the desk thing?
				principal Eh? Really? You managed to do that? She doesn't even show up to some of her own staff review sessions! This is fantastic. Please, if you could get her, I'd appreciate it.
				...
				scarf principalF.
				principal Oh, this is wonderful. Thank you for-
				scarf Is it hot in here?
				principal Um, I don't think the heater is even on, but I can-
				im images/scarf/casinoStart2.jpg
				scarf No need.
				principal W-wait, what are you-?!
				im images/scarf/scarfBeach1.jpg
				scarf You were saying, principalF? I believe it was something about my desk habits?
				principal I... I, I, I...<br>Please keep it cleaner. Thank you! Good meeting! Well, this has been lovely, but-
				t As she stands up to wave scarfF out, the environment around her is undeniably not her office. She's at the beach. scarfF is wearing a bikini. And she...
				im 042.jpg
				principal ...
				t And one look at you has her face going completely crimson. At your crotch in particular. 
				t But just like that the illusionary beach is gone.
				scarf You're acting odd today. I suppose I'll see you around then, at the council meeting? Maybe?
				principal ...
				t scarfF leaves, principalF is starstruck, and can't form the words she's looking for.
				t Taking your cue, you leave. principalF's trust in you is clearly shaken, but her trust in reality probably is too. So long as she still believes in you when all is said and done, your plan should still work.
			`);
			passTime();
			data.player.counseling -= 1;
			addFlag("principal", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "subtleConfide": {
			writeHTML(`
				player ... You alright?
				principal I'm... Fine. Everything's normal.
				t She does not look it. She keeps touching things, as if to confirm they're real. Of course she's quick with the sanitizer afterwards.
				principal Filthy... Filthy... Almost out, I should order a third...
				player Listen, principalF. You've been acting oddly. I've seen this before.
				principal You have?! I-i mean... What do you mean?
				player You're seeing things. Hallucinations, aren't you?
				t She bites her lip.
				principal Th-the principal of this prestigious institution... Is not some whackjob seeing naked people everywhere.
				player I never said anything about naked people. principalF, I can help.
				principal ... How? A-and if you're about to suggest some hack with a degree in a soft science, I-
				player Hypnosis.
				t She gives you a look. One that says 'get right the fuck out of here', 'I did not just hear that garbage come out of a human being's mouth', and 'oh god I'm doomed' all in a single glance.
				player I'm serious. I have helped others in this exact situation before.
				principal E-even when they start seeing... You know what... In their dreams? A-and they wake up sweating? A-and they keep replaying it all in their heads?
				player ... Exactly. Just lay back. This'll be quick.
				t She's conflicted, but she's also desperate, and very sleep deprived.
				...
				player You are going to submit, obey my-
				principal N-no... No...
				t Even in her half-asleep trance, she still rejects any hint of command.
				player Hm... Okay, how about this...<br>Seeing all this, all this degeneracy, it makes you worried.
				principal Mhmm...
				player Afraid.
				principal Mhmm...
				player And when it all comes out, your life is over. The school, gone.
				principal No... No...!
				player But there's hope. Before it all comes crumbling down, you'll come to me. I am the one who can help you. I am the one who makes the world normal.
				principal playerF... When it all breaks down... playerF... Normal around...
				t *SNAP*
				principal Gah!
				player And that's all. How do you feel?
				principal I... I feel good, actually. That's probably because of the nap, but I guess I should appreciate your efforts.<br>God, was I really so desperate I'd turn to <i>hypnosis</i>? I really am...<br>Oh! I'm so sorry, thank you.<br>I should really be getting home. I'll see you around, playerF.
				player Of course. Let me know if it starts happening again.
				t As principalF starts preparing to leave you have your own preparations to make.
			`);
			writeFunction("writeEncounter('subtleEpilogueStart')", "Continue");
			break;
		}
		case "subtleEpilogueStart": {
			writeHTML(`
				define blonde = sp Blonde; im images/principal/blondeP.jpg;
				t What started as an ordinary morning for principalF quickly takes a dive into the unusual.
				im 039.jpg
				blonde Fuck, ah, good morning sis! One of your students came by earlier, she-
				principal No, no no no. No more, please! This can't be happening!
				blonde What's up? You've been acting odd lately.
				principal What are you doing?!
				blonde I'm... I'm getting deep-dicked by some stranger? Like I do? Why, you want some? Nggh, it really hits the right spots.
				im 040.jpg
				principal Oh no... Auditory hallucinations too... I'm sorry, I need to go, right now!
				t principalF rushes past the door and hurries to her car.
				principal Police station? Hospital? A-asylum?
				t Her mind races through destinations, anywhere that could have some help as her mind falls to pieces.
				t Yet for some reason, she drives towards the school.
			`);
			document.getElementById('playerImage').src = "images/principal/profile.jpg";
			writeFunction("writeEncounter('subtleEpilogueEntrance')", "Continue");
			break;
		}
		case "subtleEpilogueEntrance": {
			writeHTML(`
				principal Wh-why am I... I'm at the school... playerF! Oh, maybe he can help! I'll just head on in-
				t But at the front entrance, and through the classroom windows, sigts and sounds she hoped never to hear are plainly visible.
				im purple.jpg
				principal No... No no no...
				im ribbon.jpg
				principal My beloved students...
				im images/starlet/1-4.jpg
				principal Being... Being <i>used</i> like common whores... I need to find another way in... The gym!
			`);
			document.getElementById('playerImage').src = "images/principal/profile.jpg";
			writeFunction("writeEncounter('subtleEpilogueInstructor')", "Continue");
			break;
		}
		case "subtleEpilogueInstructor": {
			writeHTML(`
				define instructor = sp instructor;
				principal Focus.... Just keep calm... The gym opens into the hallway, so if I just head-
				instructor principalF! You're just in time! Hey, check it out.
				im images/instructor/141.jpg
				principal instructorF, g-good morning. I see you're having your team-
				instructor Get gangbanged, yeah.
				im images/instructor/142.jpg
				instructor It's a seriously effective way to work up a sweat. Not to mention exercise routines can get pretty tedious, but this way-
				principal That's nice, but I need to be-
				im images/instructor/143.jpg
				instructor Whoa, what a load! Part of it her partner's virility, but the <i>real</i> secret to the size of their creampie is how experienced she's becoming. 
				principal Experience... She's cumming...
				instructor Real hard, yeah! Speaking of, I can't really keep up the tour. Sorry, but I can't keep my head on around all these dicks. I'll see you around?
				t But principalF has already run off.
			`);
			document.getElementById('playerImage').src = "images/principal/profile.jpg";
			writeFunction("writeEncounter('subtleEpilogueStarlet')", "Continue");
			break;
		}
		case "subtleEpilogueStarlet": {
			writeHTML(`
				principal Just keep moving... Just keep moving...
				t And yet she can't help herself but catch a glance into a classroom she passes. 
				t Dozens of students, all masturbating as the teacher happily plays a video of...
				im images/starlet/A-2-2.jpg
				principal It's not real... It's not real... They'd never actually watch p-porn in class...<br>Dammit principalF, stop staring!
			`);
			document.getElementById('playerImage').src = "images/principal/profile.jpg";
			writeFunction("writeEncounter('subtleEpilogueFinale')", "Continue");
			break;
		}
		case "subtleEpilogueFinale": {
			updateMenu();
			writeHTML(`
				principal Almost there... Almost there...<br>But, what do I even expect to find? Why am I in such a hurry to get to... To...
				im 093.jpg
				secretary Haah~! P-please, I can't hold on much longer!<br>principalF? Are you okay?
				player You look like you've seen a ghost. A lot of them, actually. Everything alright?
				principal What are you two...<br>No, please, playerF, I need your help, it's urgent!
				player Alright, I'll be with you in a moment. secretaryF needs my help too.
				secretary Y-yeah, please, help me... 
				t As principalF watches, her closest friend and dearest companion straddles your waist, slowly enveloping your cock.
				im 129.jpg
				secretary Ghh, it was you-ooouh<br>Your dream to run the perfect school, riiiiIGHT?<br>Everyone here... Is happy! And satisfied!
				principal No, this isn't what I wanted!
				player Then why can't you look away? You want an out, right? An escape from everything that's crashing down around you? Just relax, do what comes naturally.
				im 130.jpg
				principal I... I don't...
				secretary Cumming~!
				t Something cracks.
				im 131.jpg
				principal I shouldn't...
				player Everything will be okay, if you just let go.
				t Something breaks.
				im 132a.jpg
				principal I can't... I won't...
				t And finally, something shatters.
				im 133.jpg
				t She looks up at you, her eyes filled with panic and terror, hoping beyond reason she's made the right decision to simply go with the flow. To stop thinking.
				player See? There you go. You look better already.
				secretary I was so worried about you!
				t Relief. Validation. A broken calm sweeps over principalF as despite the insanity of the situation, she no longer needs to feel worried.
				im 134.jpg
				t Complete submission in exchange for the world to make sense again. That's what it's taken for you to break down her once iron will. 
				im 135.jpg
			`);
			writeFunction("writeEncounter('subtleEpilogueAftermath')", "Continue");
			break;
		}
		case "subtleEpilogueAftermath": {
			writeHTML(`
				t You set down your pendant, and with a snap of your fingers principalF goes from a dazed trance to a pleasant smile.
				player Bark like a dog, please.
				principal Woof, woof!
				player Now expose yourself.
				im 076.jpg
				principal Okay!
				player Very good! You and I, principalF, are going to achieve both of our dreams. Isn't that exciting? We just need to properly define what a 'perfect school' is.
				principal Of course, *master!
				im 077.jpg
				principal Aaaah~!
				player And I'll need your help too, secretaryF. Pay close attention.
				secretary Y-yes *sir! I'll take notes!
				t Your victory in place, there are no longer any barriers to hold you back here at the school. The possibilities are limitless...
				t With the future sure to be a wonderful, carnal scramble to increase your influence even further, there's no telling what exactly is in store for you or the school...
				im 078.jpg
				t But it'll definitely be a lot of fun. Until then, this is...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "blackmailConfrontation": {
			writeHTML(`
				player I know your secret.
				principal Oh? I have a few, but they're quite mundane. My favorite snack, or my-
				player The students. Don't play dumb with me. I've seen the admissions, and the rejections, and any reporter with half a brain would make the same connections I did.<br>Unless you want me to leak this to the press, I suggest-
				principal I think we're done here. Well, you're done here, to be more specific. For what it's worth, I actually did think of you as a fine addition to the school up to now.
				player What? You can't just-
				principal I have seven different methods of calling the school's security in this room, but if you'd like to just be fired instead of arrested, I suggest you simply walk away.
				t She must be bluffing... But her confidence suggests otherwise.
				t You've played and it didn't work out this time. The only thing left to do is to accept defeat gracefully, and leave.
			`);
			if (
				checkTrust('oujo') > 79 &&
				checkTrust('nurse') > 79 &&
				checkTrust('pinstripe') == 60 &&
				checkFlag("president", "shadowCouncil") == true
			) {
				writeFunction("writeEncounter('blackmailFailure')", "Continue");
			}
			else {
				writeFunction("writeEncounter('blackmailSuccess')", "Continue");
			}
			break;
		}
		case "blackmailFailure": {
			writeHTML(`
				t You sigh. Despite your newfound connections at the school your plan ultimately turned out to be a dud. It's a shame too, 'Principal of Hentai University' would've been a great title.
				t Alas, nothing for it. Maybe there's some other place for you out there. Maybe a high school next time? Tragically those tend to be pretty tedious to work with, and without much payoff for all the work.
				t Nothing for it but to try again someday, but as for this story there are no more pages left to turn. Your tale has come to an abrupt end.
			`);
			break;
		}
		case "blackmailSuccess": {
			writeHTML(`
				president Not so fast, principalF!
				principal Eh? presidentF, I'll be with you in a moment. It's quite rude to-
				president It's <i>quite rude</i> to threaten someone who's uncovered your secret! Did you really think you'd get away with this?
				principal Now now, this is all just a misunderstanding. Let's just-
				instructor I'm here, I got the message! principalF, is this all true? My athletes were chosen based on looks, not on talent or hard work?
				scarf My, what's going on in here? I got quite the distressing email earlier. principalF, do you know anything about it?
				principal I... What's going-
				ojou principalF! How <i>dare</i> you! My father will be furious when he sees the evidence I've been sent!
				t The room is quickly growing more and more cramped as all the women presidentF called in begin to file angrily into the room.
				pinstripe principalF, we need to talk. There's room for serious legal action here.
				nurse Ah, is this the PTSA meeting? An email labelled 'evidence' is quite the bizarre way to schedule something, but since we're all here...
				t The clamour grows louder until it's silenced by principalF standing from her chair. Silent and still smiling, her presence is enough to command the room.
				principal secretaryF? Are you out there?
				secretary Y-yes ma'am! I'm so sorry, they all just-
				t secretaryF enters the room, probably trying to cool the tensions down, but the moment she catches your eye...
				t She halters a bit, hypnotic conditioning coming into play.
				secretary I'm sorry, principalF... I c-can't keep it hidden any longer...<br>B-but don't worry! E-even if we're kicked out, we'll still have each other!
				principal W... What?
				pinstripe 'Kicked out'? secretaryF, things are a little more serious than that.
				secretary That's okay! Even if we're sent to j-jail, I'll still be-
				principal JAIL?!
				t Always the woman in control, principalF looks like her head is spinning.
				player It looks like your idea of a perfect school is falling apart. Anything to say for yourself?
				principal Falling... Apart?
				t Her world is turning upside down. Every member of what is essentially her cabinet turning on her... Her closest friend and confidant betraying her trust... Her breathing becomes erratic. She looks you square in the eyes and...
				principal Hah... Haha! HAHAHA!
				t She breaks into a manic laughter, unable to handle the absurdity of it all. And when the room quickly erupts into chaos as a result she collapses, having fainted from the pressure.
			`);
			writeFunction("writeEncounter('blackmailFollowup')", "Continue");
			break;
		}
		case "blackmailFollowup": {
			writeHTML(`
				president So... What will you actually <i>do</i> with her?
				scarf Her psyche has been completely shattered. She's so vulnerable even instructorF could hypnotize her at this point.
				nurse I have some things I could use to keep her like this, if you want.
				t At this point your companions are abuzz planning your next move, but you already have the only idea you'll need.
				...
				im 069.jpg
				t There's so much to do, there'll never be enough time. But you're the type to appreciate the journey <i>and</i> the destination.
				im 070.jpg
				t While she's still in an almost-concious trance, you whisper the words that will seal her fate before giving her a good wake-up call.
				im 071.jpg
				principal Haaah?!<br>Wh-what's going on?!
				player Good morning!
				principal Where's ev-<br>Ghh, what are you doing?!
				player Relax. Layers and layers of hypnotic commands and suggestions should make it easy, thanks to yours truly and scarfF.<br>I won't bother explaining it all, but the important thing is that the next time you cum all this resistance will be gone.
				principal ...
				player Even now you feel your will fading, right?
				im 072.jpg
				principal It doesn't have to be this way.
				player Excuse me?
				principal You can be better than this! Look at yourself. We could... Could be helping people! Please... Don't do this...
				t Her passionate gaze begins to drift, and her words are getting stuck in her throat.
				player You're a strange one, principalF. But it's time to finally give in.
				principal I won't... I'm stronger than-!
				im 073.jpg
				principal Ghhh~!
				t Through clenched teeth she groans. Hot flashes in her body, words she's ready to scream fade away before they reach her tongue. By the time her orgasm fades she looks like she only barely recognizes the room she's in.
				principal Not... Not right...
				player Still resistant, huh? Don't you worry, we'll have plenty of time together.
			`);
			writeFunction("writeEncounter('blackmailFinale')", "Continue");
			break;
		}
		case "blackmailFinale": {
			writeHTML(`
				t Morning light streams into your room, and the smell of cooked food fills the air.
				...
				im 001.jpg
				secretary Good morning, *sir. I'll have your breakfast ready in a-
				im 002.jpg
				secretary Ah?<br>Right, of course.
				t In the following days since principalF's breakdown and your subsequent rebuilding of her, things have been... Quiet.
				im 003.jpg
				secretary Hah~
				t In a certain sense, at least.
				t It turns out running a school is far from a solo affair. If you want to transform the place into the paradise of your dreams a lot of key figures throughout the town need to see things your way.
				t So while you have your own companions to take care of all that, you've been relaxing at principalF's place.
				...
				im 004.jpg
				secretary Hghh... Aaah~
				t secretaryF's mouth hangs open, a constant stream of raw sex has really improved your stamina, and lately she's had a hard, but enjoyable time trying to keep up with you.
				t So before you even cum you decide to give her a break. A firm slap on the ass is her way of saying goodbye as she slumps on the counter.
			`);
			writeFunction("writeEncounter('blackmailEnding')", "Continue");
			break;
		}
		case "blackmailEnding": {
			writeHTML(`
				t You open the door and presidentF steps inside.
				president Everything's going smoothly. It turns out that most people in high places don't run thejr ships as cleanly as principalF did. Ah, did I interrupt?
				player Not at all. Come on, I can talk and train principalF at the same time.
				president Oh, I suppose I am a little curious as to how our dear principal has turned out.
				im 005.jpg
				principal Ah, good morning master~!
				player Good morning. Finally learning your place?
				principal Will my training stop if I do?
				president There are a lot of women vying for playerF's attention.
				principal Then I'll never accept being a slutty dicksleeve sow for *master playerF's pleasure! Punishment! Please?
				im 006.jpg
				player She still has a bit of sass to her... Maybe I'll keep her like this.
				president Mm, I have to ask. What's first? Abolishing the uniform, maybe making a slutty outfit mandatory? Perhaps... Nothing at all?<br>The school halls filled with women brazenly showing their bare cunts? Or perhaps just your favorites, and-
				im 007.jpg
				principal Gllrk!
				president My, I can see that idea is at least tempting. I have more. Perhaps clubs based around exploring carnal desires, now that the school is more liberal?
				player You really are trying to get a rise out of me, aren't you? Want me to to put you in principalF's position?
				im 008.jpg
				president I can't say I'm not jealous...
				player Do a good job and I'll let you take her place for a while.
				president You certainly know how to motivate a girl~<br>Speaking of, treasurerF has been quite well behaved lately. I should reward her myself...
				im 009.jpg
				principal Ooouh~! Cock~! Fuck me~!
				president What else... instructorF's got a bevy of new exercise techniques she wanted to show off to the school, nurseF has a few new concotions and wanted to run some guinea pigs by you... scarfF wanted to thank you for 'reigniting her passions', whatever that means.
				im 010.jpg
				principal Cumming~! Slutbunny principalF is cumming from her pussy!
				president Haah~<br>You know, if you ever feel you need a variety, I'd <i>love</i> to handle her training myself some day~
				player I'm sure you have a few ideas.
				president Of course~<br>But for now I should be going. The mayor is the next target, it shouldn't be too much of a chore to find their weakness.<br>I'll see you around, *master. The others send their regards.
				t And on that note presidentF takes her leave. With your prime obstacle out of the way, the opportunities you have for control are limitless.
				t But complete freedom of choice is it's own form of paralysis. For now, all you can do is keep living one day at a time.
			`);
			writeFunction("writeEncounter('blackmailEpilogue')", "Continue");
			break;
		}
		case "blackmailEpilogue": {
			writeHTML(`
				t Months have passed. You close the door behind you, ready to end the day and start the night. Though your work at the school is progressing nicely, it's always lovely to come back home and appreciate the fruits of your other labor.
				im 136.jpg
				secretary Welcome back...<br>Tonight, would you like-
				principal *Master~<br>Could you please tell secretaryF it's my turn tonight?
				t Complete control of the town, the school, and of your own personal harem. Life is good, but on this note, this is...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "streetNoWater": {
			writeHTML(`
				define starlet = sp starlet;
				define pornstar = sp pornstar;
				starlet I can't believe we're doing this. My hands are shaking...
				pornstar Those hands will be doing a lot more if you ruin this shot.<br>Fucking cameraman unions, this is the greatest opportunity this studio has ever had.
				t starletF and pornstarF both double-check their cameras. They'll be on recording duty.
				pornstar And where are they? You said they'd be here-
				starlet They're only a few minutes late, mom. Don't be a buttplug.
				pornstar Don't you backtalk to me! And I'm the buttplug? You're literally wearing-
				im 102.jpg
				principal Excuse me.
				secretary Ah, is this the crew?! I'm so sorry, we meant to be here earlier, but there was a dolphin, porpoise actually. We ran it over-
				principal The point is we're here. This is the filming location for the interview, yes? For the school?
				starlet Yes ma'am! The school will be getting a lot of attention from this.
				t You cross your fingers. Your helper is somewhere around here, hopefully, and principalF should already be under.
				principal Ah, starletF! My, it's good to see you pursuing a proper career path.
				pornstar Alright, I'll be direct. principalF? You know what you're getting into, right? You are going to be fucked, on camera, double-penetration in this alleyway. And your friend too.
				principal ...
				t A long silence overtakes all of you.
				principal ... Of course. In order to show I can take in any problem student, I need to show I can't be broken by something as disgusting as the human penis.
				pornstar ... Fuck yes. Alright, let's get rolling.
				...
				im 103.jpg
				principal -University. I'm full time, and have never filmed pornography before.
				t principalF and secretaryF are crouched in the middle of the street, their tits and cunts bared to the world.
				t principalF looks as photogenic as always, looking kind and open. secretaryF is clearly embarassed, although she can't exactly place why.
				principal Fetishes? Ah, I don't have any. Sex is disgusting, I make sure to punish myself nightly for any untoward thoughts I have during the day. And you, secretaryF?
				secretary ... principalF.
				principal No, I mean do you have any... Nevermind. So, when will the sexual conduct begin?
				pornstar Soon. Now, go ahead. You remember what we told you about?
				principal Ah, right! Alright, all my students, and all the faculty who respect me. I want you all to watch closely, alright?
				secretary principalF... I'm getting wet...
				principal That's disgusting! Show some class, secretaryF. We came here to show that our university is lead by strength, not to cum like street-whores.
				secretary Yes ma'am!
				player This is it...
				starlet The moment of truth...
				pornstar Thinking about all the money I'm about to make... God I'm so wet right now...
			`);
			writeFunction("writeEncounter('streetFuck')", "Continue");
			break;
		}
		case "streetWater": {
			writeHTML(`
				starlet I can't believe we're doing this. My hands are shaking...
				pornstar Those hands will be doing a lot more if you ruin this shot.<br>Fucking cameraman unions, this is the greatest opportunity this studio has ever had.
				t starletF and pornstarF both double-check their cameras. They'll be on recording duty.
				pornstar And where are they? You said they'd be here-
				starlet They're only a few minutes late, mom. Don't be a buttplug.
				pornstar Don't you backtalk to me! And I'm the buttplug? You're literally wearing-
				im 102.jpg
				principal Excuse me.
				secretary Ah, is this the crew?! I'm so sorry, we meant to be here earlier, but there was a dolphin, porpoise actually. We ran it over-
				principal The point is we're here. This is the filming location for the interview, yes? For the school?
				starlet Yes ma'am! The school will be getting a lot of attention from this.
				t You cross your fingers. Your helper is somewhere around here, hopefully, and principalF should already be under.
				principal Ah, starletF! My, it's good to see you pursuing a proper career path.
				pornstar Alright, I'll be direct. principalF? You know what you're getting into, right? You are going to be fucked, on camera, double-penetration in this alleyway. And your friend too.
				principal ...
				t A long silence overtakes all of you.
				principal ... Of course. In order to show I can take in any problem student, I need to show I can't be broken by something as disgusting as the human penis.
				pornstar ... Fuck yes. Alright, let's get rolling.
				...
				im 103.jpg
				principal -University. I'm full time, and have never filmed pornography before.
				t principalF and secretaryF are crouched in the middle of the street, their tits and cunts bared to the world.
				t principalF looks as photogenic as always, looking kind and open. secretaryF is clearly embarassed, although she can't exactly place why.
				principal Fetishes? Ah, I don't have any. Sex is disgusting, I make sure to punish myself nightly for any untoward thoughts I have during the day. And you, secretaryF?
				secretary ... principalF.
				principal No, I mean do you have any... Nevermind. So, when will the sexual conduct begin?
				pornstar Soon. Now, go ahead. You remember what we told you about?
				principal Ah, right! Alright, all my students, and all the faculty who respect me. I want you all to watch closely, alright?
				t principalF closes her eyes for a moment, her pussy visibly becoming wetter. secretaryF cant take her eyes away and quickly shows her arousal in the same way, until...
				im 104.jpg
				principal Hahhh~! I'm having an orgasm while pissing in the street~! 
				secretary Ghh... Some of your piss is splashing onto me~
				principal I'm sorry! I swore I wouldn't cum, but I'm already~
				secretary More~ P-please~ I-if you need someone to drink it-
				principal Fuck~!
				t Her breathing slows back down and her stream becomes a slow trickle.
				principal Hah... N-now, that was just a fluke, alright? I won't be cumming again. I'll show every one of my students at home that real strength is unbreakable. 
				t She stands up, still beaming with pride. When secretaryF leans forwards towards her cunt she shoves secretaryF backwards onto her back.
				principal That's disgusting! Now, show some decorum, we didn't come here to act like street-whores!
				secretary Yes ma'am!
			`);
			writeFunction("writeEncounter('streetFuck')", "Continue");
			break;
		}
		case "streetFuck": {
			writeHTML(`
				im 105.jpg
				principal Gah, fuck! All you students and parents watching at home, I hope you... Hope You can see I'm much stronger than common bitch running an institution!
				secretary Cumming~!
				principal Your children... Ghh!!<br>Will be safe with me~! Despite how much I leak whenever these huge, disgusting cocks thrust into me, I haven't... Ghh, cum once! Purity! Decency! I run a clean... Clean...
				t As the second set of actors walks on stage, principalF suddenly looks panicked.
				principal N-no! Hold on a moment! M-my ass is-<br>If you defile my beautiful asshole at the same time as this disgusting ballslop is pumped against my womb-
				im 106.jpg
				principal AAAAH~!<br>My pussy! I'm squirting from a fat dick in my asshooooole~!
				secretary principalF~! I love you~!
				principal Aaah~! S-stop looking at me! Stop watching! I'm pure! I'd never... Never SUBIIIIT~!
				secretary They're ruining me~!
				...
				im 107.jpg
				principal Hah... Hah... I'm still... Still standing strong~! All the children who look up to me... E-even if my cunt and asshole are leaking delic... Disgusting cum... M-my pussy and ass will be back to looking perfect tomorrow...
				secretary Ruined... I'm-
				principal Shut up! I'm not... No matter if I came, no matter if I'm sure to be pregnant with a stranger's cum... No matter if... If the cameras caught... Everything...
				t A look of horror overtakes principalF's eyes for just a moment. Just the smallest glimmer of recognition of where she is, and what she's just done, before-
				principal CUMMMING~!!!
				t The ground is sprayed with a solid stream of squirt before principalF collapses to the ground, unconscious and soaked.
			`);
			writeFunction("writeEncounter('streetAftermath')", "Continue");
			break;
		}
		case "streetAftermath": {
			writeHTML(`
				starlet I... I don't...
				player Hooh... It's done...
				t It was exhausting, but to see principalF completely shattered like that...
				starlet No way...
				t As the crew begins to disperse, get cleaned up, or start packing up, starletF walks over to principalF. There's still a look of disbelief and disgust on her face as she nudges principalF's unresponsive body with her foot.
				t Well, almost unresponsive. A splatter of cum from her asshole is the only sign she's still in there.
				t Meanwhile you're grabbed and pulled aside from pornstarF.
			`);
			writeFunction("writeEncounter('pornoFinale')", "Continue");
			break;
		}
		case "interviewStart": {
			writeHTML(`
				starlet I can't believe we're doing this. My hands are shaking...
				pornstar Those hands will be doing a lot more if you ruin this shot.<br>Fucking cameraman unions, this is the greatest opportunity this studio has ever had.
				t starletF and pornstarF both double-check their cameras. They'll be on recording duty.
				pornstar And where are they? You said they'd be here-
				starlet They're only a few minutes late, mom. Don't be a buttplug.
				pornstar Don't you backtalk to me! And I'm the buttplug? You're literally wearing-
				secretary H-hello!<br>I'm so sorry I'm late. principalF will be right behind me. There was a baby seal on the street, not a real one I mean. Anyways, I gave her the wrong directions-
				pornstar Who the hell are you?
				secretary I'm secretaryF, I'm principalF's secretary. Again, I'm so sorry... She really will be bere shortly!
				pornstar ... Fine. Take a seat. We start rolling in three.
				...
				im 091.jpg
				secretary I-isn't the camera a bit low?
				pornstar No. Now, how would you describe your relationship to principalF principalL?
				secretary I'm her secretary... A-and friend, I think... We go out sometimes, to relax after work. Actually, almost every night unless I mess up big time.
				pornstar Interesting. Now, while we wait for her to arrive, go ahead and show us your pussy.
				secretary E-excuse me?!
				pornstar Bare cunt. Fuckhole. Show me your only redeeming quality while we wait for the woman who actually matters.
				t There's a moment of hesitation, youdross your fingers hoping your helper is somewhere around here, and that secretaryF's common sense has already been warped.
				secretary ...
				im 092.jpg
				secretary Y-yes ma'am...
				pornstar You like being degraded, don't you? I could see it in your eyes from the moment you walked in.
				secretary ...
				pornstar And I bet you can't wait until principalF arrives. You want to see our stud here plunge his cock into her and shower her womb with his cum.<br>Here, let's get a closer look.
				im 094.jpg
				pornstar Well well, the would-be whore is soaked. How do you feel?
				secretary ... Good...
				pornstar Louder!
				secretary I feel good! I want you to abuse me more! My pussy tingles hard whenever... You...
				principal ...
				secretary principalF! When did you-
				principal You disgusting little cretin. I give your incompetent failure of an ass every opportunity, and this is how you repay me?
				secretary N-no! Ngh~!
				pornstar Holy crap, she came just from that? Well, alright. Scene transition!
			`);
			if (
				//principal
				data.player.studio.filmXFetish2 == true
			) {
				writeFunction("writeEncounter('interviewPrincipal')", "Continue");
			}
			else {
				writeFunction("writeEncounter('interviewSecretary')", "Continue");
			}
			break;
		}
		case "interviewPrincipal": {
			writeHTML(`
				pornstar So, you're really going through with this?
				principal Absolutely. I need to correct the absolutely shameful display secretaryF put on.
				starlet ... By staring in a porno?
				principal Young lady, start those cameras right now!
				starlet Sheesh. Poor secretaryF, I can see why she's such a maso-piggy.
				im 094.jpg
				principal Hello my students, parents, and anyone interested in my school.
				player <i>It's not like you built the place, narcissist.</i>
				principal I'm here to clean up a little after my secretary's mistakes. Unlike her, I'm not some disgusting sow who gets off from verbal abuse.<br>No, I am a strong, independent self-made woman, unafraid to proudly display that my beautiful pussy will have no problem withstanding anything these degenerates can do to me.
				secretary principalF.
				principal Now, all you at home, please watch.
				im 095.jpg
				principal Ah~! Of course~<br>Something like this... Is nothing...<br>Especially compared to my nightly punishment sessions...<br>R-remember... lustful thoughts... A-are... Impure...
				im 096.jpg
				principal Ccckkk~!<br>Nnnot... Cumming...
				...
				im 097.jpg
				principal A... and so you all see, I am incorruptible~<br>No matter if this cock is big or thick, or even as my closest friend turned-whore scum watches as my pussy... Pussy...
				starlet Uh, principalF? You alright?
				principal More... More! I can take it any more~!
				t Her stoic demeanor finally giving way she wantonly bounces atop you eager to race to her next orgasm. The cameras, secretaryF's face inches from her gushing cunt, none of it matters any more.
				t And through all of it her inner voice is firmly silenced. For what resistance it would have put up, her sanity has no interest returning to someone outed as a complete whore on camera. No amount of denial or lies could hide this.
				t So she stops thinking.
				principal Aha, ahahah~! So good~!
				t The editing crew is going to have a lot to work with tonight.
				...
				secretary Mmph... Nhh...
				starlet Wow, she's taking cleanup duty like a champ~! Hey, principalF, can you hear me? Your eyes are open, but I don't see any awareness in 'em!
				t A light kick fails to jostle principalF awake. It does cause more of her cream-filling to leak out, leaving more work for secretaryF.
				t Meanwhile pornstarF grabs you by the hand, and drags you aside.
			`);
			writeFunction("writeEncounter('pornoFinale')", "Continue");
			break;
		}
		case "interviewSecretary": {
			writeHTML(`
				principal Wait, what are you-
				pornstar Sorry honey, we're both jonesing too, but we all gotta wait our turn.
				secretary W-wait, me?! W-with principalF watching?
				starlet Oh relax! If she were actually interested in helping her friend, she'd be stopping us instead if just watching.
				principal Hold on just a moment! I... I, wait... Why am I...?
				t principalF clutches her head.
				principal I agreed... To... What?!
				t And just as she breaks free of the manipulation, you're in position.
				im 099.jpg
				secretary Ah fuck~!
				principal secretaryF! What are you doing?!
				pornstar You know damn well what we're doing, honey. We're making a porno out of your friend while you watch!
				starlet You gonna try to stop us?
				principal I... I don't-
				im 100.jpg
				t secretaryF's legs twitch and her pussy quivers as you dump a load into her cunt, the feelings coursing through her made more intense by the gaze of the woman she loves and respects.
				secretary Cumming~!
				principal ...
				im 101.jpg
				t Myriad emotions flow through principalF. Disbelief, confusion, rage, shock... Curiosity. But eventually it settles on...
				principal A-a dream... I must not've cleansed myself hard enough... That's it...
				player You're up next.
				principal R-right... A dream... Indulgence in a dream... Is...
				...
				t Hours have passed, though you've put principalF through the ringer more than a dozen times she's still stuck in her delusions.
				principal Dream... Dreaming...
				starlet This isn't a dream! You and your friend just got creampied on camera! Dace the music already!
				t Even a slap across the face isn't enough. principalF just keeps mumbling to herself, every so often looking at secretaryF's cum-covered body and finding herself unable to look away.
				t Meanwhile pornstarF grabs you by the hand and pulls you aside.
			`);
			writeFunction("writeEncounter('pornoFinale')", "Continue");
			break;
		}
		case "pornoFinale": {
			writeHTML(`
				pornstar How? Actresses like her don't grow on trees, despite how orange her hair is. I need to know how you did this.
				player Oh, I guess it was just my natral charisma.
				pornstar They say that money can't buy power, but you know what poverty buys you? A cold corner of an alleyway, followed by the cheapest hole in the ground the city can afford.<br>I'm not taking no for an answer, you and I are never going to worry about money again.
				player It's tempting.
				pornstar You and I have something a lot bigger than a school in store for us if you can work this kind of magic again.
				starlet Hey, what're you two talking about over here?
				pornstar Dicks.
				starlet Nice!
				t pornstarF leans in to whisper into your ear.
				pornstar Slap a grin on that face before I slap a handprint on this ass and get out there. We'll talk more about this afterwards.
			`);
			writeFunction("writeEncounter('pornoEpilogue')", "Continue");
			break;
		}
		case "pornoEpilogue": {
			writeHTML(`
				t Though the possibilities of hypnotically-enhanced pornos are endless, the world changed by them will have to remain a mystery for now.
				im 111.jpg
				t Unable to face the truth, principalF sumply decends into depravity. The desire for a perfect school is eventually replaced by the desire for a cum-drunk afterglow.
				im 126.jpg
				t secretaryF follows, the manipulation effect has long since faded but her devotion to principalF is unbreakable.
				t A changed world is on the horizon, once decided by your talents and cunning, and pornstarF's ambitions to redefine reality's norms wih porn.
				t But for now, a line must be drawn somewhere. Thus, this is...
			`);
			removeFlag("starlet", "principal");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
	}
	unencounter('principal');
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "principalManipulation", name: "Common Sense Manipulation"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "principalManipulation": {
			writeHTML(`
				player Sorry, I need to send a quick message to someone. I may have something important to show you later.
				principal Oh? Feel free. My schedule is always completely empty or four-times overbooked. I'm in prior for now.
				...
				t Your support this time will be standing outside the office, distracting secretaryF. Meanwhile, you're taking a deep breath to steel yourself.
				t You stand up from your chair and begin to disrobe, hoping that the common sense manipulation will be effective again. There's always the chance she could simply be too willful, to prudish, too-
				t Your train of thought, and body, are quickly shoved off balance. What happens next is a blur of motion. Did it not work? Is she running to escape and call the police? Is she-
				im 080.jpg
				principal You disgusting cretin! Ooh, how dare you show off a disgusting fuckstick like that to me!
				t She berrates you with a joyous look on your face. This is not what you planned for.
				principal Ooh, you're just an animal, guided by base urges searching for something to pump your <i>filthy</i>, <i>disgusing</i>, <i>cockslime</i> into, right?
				t The effect warps basic logic in the target's mind. She must have a serious compulsion about feeling clean, as well as a ton of repressed lust to be acting like this.
				im 081.jpg
				principal Oh fuck~! Degenerate! Slut with fat cock! I'll drain those disgusting balls until you're pure enough to work at my perfect school!
				t There's no room to resist.
				principal Nggh, lie back there! I've never failed to purge desire from myself, by the time I'm done with you, you won't even manage to put out a leering glare, let alone an ounce of ballslop!
				...
				im 082.jpg
				principal Haha... Aha... You might be filthy, disgusting even on the outside, but has my perfect cunt cleaned out your insides? I bet it has...<br>Now, you slime-covered toad, I'll grace you by cleaning up. Hold still, I won't enjoy this at all you know. But swallowing down disgusing urges is all part of being perfect~!
				...
				t As you walk out you feel a hand grope your ass and pricipalF whispers into your ear, brazenly massaging you.
				principal If you <i>ever</i> have a disgusting urge like this again, I'll slurp every drop of desire out of those degenerate balls.
				t And then she waves you off like nothing's happened. Within a few hours she'll react like nothing happened, and probably convince herself it was all a fever dream or something.
			`);
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
	{index: "council", requirements: "?counseling 5; !flag principal council;"},
	{index: "reward", requirements: "?flag principal endingBlackmail; ?flag principal endingSubtle; ?flag principal endingPorno;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "council": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage for images, and writePhoneChoices
			writePhoneSpeech("principal", "", "If you aren't busy, I'd like to see you in my office later today. There's a matter coming up you could use a briefing on.");
			break;
		}
		case "reward": {
			writePhoneImage("images/president/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("president", "", "Congratulations, you've gotten all three of principalF's endings, and beaten Hentai University! I hope you enjoyed!");
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
	case "load": {
		data.story.push(character);
		console.log(character);
		console.log(data.story);
		writeSpecial(character.fName+" has been added to the game!");
		writeSpeech(character.index, "", character.fName+ " " + character.lName + ", written by "+ logbook.author + ", art by "+ logbook.artist+".");
		break;
	}
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
			for (number = 0; number < encounterArray.length; number++) { //start going through encounter array
				var finalLocation = "";
				var finalResult = true;
				if (encounterArray[number].location != null) {
					var finalLocation = encounterArray[number].location;
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map" && data.player.gps == true) { //check the location
						if (encounterArray[number].time.includes(data.player.time)) { //check the time
							if (encounterArray[number].trustMin <= checkTrust(character.index) && encounterArray[number].trustMax >= checkTrust(character.index)) { //check the trust requirements
								if (encounterArray[number].day == "even" && data.player.day%2 == 1) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].day == "odd" && data.player.day%2 == 0) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].itemReq != "" && checkItem(encounterArray[number].itemReq) != true) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect item");
								}
							}
							else {
								//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect trust at "+checkTrust(character.index)+". Trustmin: "+encounterArray[number].trustMin);
								finalResult = false;
							}
						}
						else {
							//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect time");
							finalResult = false;
						}
					}
					else {
						//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect location");
						finalResult = false;
					}
				}
				else {
					//console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var requirements = checkRequirements(encounterArray[number].requirements);
					//console.log(requirements);
					if (requirements != true) {
						finalResult = false;
					}
				}
				if (finalResult == true) {
					//console.log("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
					if (data.player.location == "map" && finalLocation != "beach" && finalLocation != "casino") {
						var textString = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) { //find the location target
							if (locationArray[locationIndex].index == finalLocation) {
								var textString = locationArray[locationIndex].name + " - ";
							}
						}
						if (textString != "") {
							printEncounterTab(character.index, encounterArray[number].index, textString + encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
						else {
							printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
					}
					else {
						//console.log(number);
						printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
					}
				}
				else {
					//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!final result for "+encounterArray[number].index+" false, location is "+finalLocation);
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
		var finalMessage = "";
		var finalResult = true;
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			//Start finding the data.story variable associated with the character
			for (phoneHistoryCheck = 0; phoneHistoryCheck < data.story.length; phoneHistoryCheck++) {
				if (data.story[phoneHistoryCheck].index == character.index) {
					//If the character has no unread texts
					//If the character does not have this text in their text history
					if (
					data.story[phoneHistoryCheck].unreadText != true &&
					data.story[phoneHistoryCheck].textHistory.includes(phoneArray[number].index) != true &&
					data.story[phoneHistoryCheck].textEvent != phoneArray[number].index
					) {
						//If the phone record is using the old system...
						if (phoneArray[number].trust != null) {
							var finalResult = false;
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
						else {
							if (phoneArray[number].requirements.includes("?time") == false) {
								phoneArray[number].requirements += "?time Morning;";
							}
							//Check the requirements
							var requirements = checkRequirements(phoneArray[number].requirements);
							console.log("Now examining encounter entry "+phoneArray[number].index+phoneArray[number].requirements+", result is "+requirements);
							if (requirements != false) {
								notification(character.index)
								data.story[phoneHistoryCheck].unreadText = true;
								data.story[phoneHistoryCheck].textEvent = phoneArray[number].index;
								data.story[phoneHistoryCheck].textHistory += phoneArray[number].index;
							}
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