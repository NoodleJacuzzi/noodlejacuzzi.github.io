var character = {index: "sports", fName: "Zoe", lName: "Parker", trust: 0, encountered: false, textEvent: "", met: false, color: "#496EBF", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};

var logbook = {
	index: "sports", 
	desc: "A volleyball player at the university. A star of the school, between her record on the court and grades that are nothing to scoff at.",
	body: "You're not sure how she manages to move on the court given her natural endowments. Not that any of the boys are complaining.",
	clothes: "When training, she wears the school's volleyball uniform. In class, she wears a smart skirt and blouse. Though, her skirt does seem somewhat short for regulations.",
	home: "She spends alternating afternoons either studying in Class B, or practicing her skills on the court.",
	tags: "forced, sweat, oppai",
	artist: "Himitsu Kessha Vanitas",
	author: "SlackerSavior",
};

var newItems = [
	{name: "Neko", 				key: true, 		price: 50, 	image: "scripts/gamefiles/items/nekoears.jpg", description: "A skimpy cat outfit, for roleplay sex."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "sports1", name: "The volleyball team is practicing this afternoon. One of the girls catches your eye.", location: 'gym', time: "MorningEveningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "sports2", name: "sports is working on some homework in the classroom.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 1, trustMax: 10, type: "tab", top: 0, left: 0, day: "even", altImage:"class.jpg",},
	{index: "sports3", name: "sports is studying late again. She seems twitchy as you approach.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 20, trustMax: 22, type: "tab", top: 0, left: 0, day: "even", altImage:"class.jpg",},
	{index: "sports4", name: "Volleyball practice has cleared out. From the equipment room, you hear faint moans.", location: 'gym', time: "Evening", itemReq: "", trustMin: 40, trustMax: 45, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "sports5", name: "sports is fidgeting in the classroom, long after everyone else has called it quits for the day.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 105, trustMax: 110, type: "tab", top: 0, left: 0, day: "even", altImage:"class.jpg",},
	{index: "sports6", name: "The Volleyball Team practice is in full swing.", location: 'gym', time: "Evening", itemReq: "", trustMin: 112, trustMax: 115, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "sports7", name: "sports is waiting patiently for you.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 125, trustMax: 125, type: "tab", top: 0, left: 0, day: "even", altImage:"class.jpg",},
	{index: "sports8", name: "sports is working on homework again, though now she looks much happier with it than when you first saw her.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 131, trustMax: 140, type: "tab", top: 0, left: 0, day: "even", altImage:"class.jpg",},
	{index: "sportsfinalclass", name: "sports is hanging around the classroom, she glows when she sees you.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 150, trustMax: 200, type: "tab", top: 0, left: 0, day: "even", altImage:"class.jpg",},
	{index: "sportsfinalgym", name: "sports is finishing up practice. You could always go hang out with her for the night.", location: 'gym', time: "Evening", itemReq: "", trustMin: 150, trustMax: 200, type: "tab", top: 0, left: 0, day: "odd",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "sports1": {//Meeting her in the gym for the first time
			writeText("You sit around watching the volleyball team practice. One of the students in particular catches your eye.");
			writeBig("images/sports/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As she takes a break you decide that it may be a good time to introduce yourself.");
			writeFunction("loadEncounter('sports', 'sports1a')", "Introduce yourself to the team captain");
			writeFunction("changeLocation(data.player.location)", "Come back another day");
			break;
		}
		case "sports1a": {//Introducing yourself in the gym
			writeSpeech("player", "", "Hello. I'm the new school councelor, playerF. Practice seems to be going well, are you doing alright?");
			writeText("She seems to have only half heard you, as she scans her teammates ");
			writeSpeech("sports", "", "Oh, uhm. Hi, then. Is there a reason you're here in the gym? You're a little in the way here, and I need to get back to practice.");
			writeSpeech("player", "", "No real reason aside from introductions.");
			writeText("As you speak, she turns to face you. It seems obvious that she's sizing you up.");
			writeBig("images/sports/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "Introductions made then. I'm sportsF sportsL. Now, if you'd excuse me, I really do need to get back.");
			writeText("The longer she looks at you, the more you see her glare sharpening.");
			writeSpeech("player", "", "Of course, sportsF, sorry to get in your way. If you or anyone on the team needs anything, my office doors are always open.");
			writeSpeech("sports", "", "Oookay, then. Next time, please keep away from the court. We're busy here, and I don't have time to keep my eyes on you and the ball to keep you out of trouble.");
			writeText("She rolls her eyes as she gets back to the court. Maybe it would be better to catch her while she isn't busy with practice...");
			passTime();
			setTrust('sports', 5);
			updateMenu();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "sports2": {//Meeting in classroomB, with some privacy and time
			writeText("sportsF is staring at some classwork, obviously frustrated. As you get close, you can hear her muttering to herself.");
			writeSpeech("sports", "class.jpg", "Goddamned lousy chemistry. Never should have taken this course...");
			writeText("Now may be a good time to try and get on her good side...");
			writeFunction("loadEncounter('sports', 'sports2a')", "Can I help you with something sportsF?");
			writeFunction("changeLocation(data.player.location)", "She'll probably work it out.");
			break;
		}
		case "sports2a": {//Continuation of above
			passTime();
			writeText("She jumps up as you speak. Apparently she didn't hear you get close.");
			writeSpeech("sports", "class.jpg", "Ahh!");
			writeBig("images/sports/2a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Oh! Uhh.... playerT... playerF? You're lucky I didn't hit you with my bag, you scared the crap out of me.");
			writeSpeech("player", "", "Sorry about that sportsF, you just looked like you were having some problems with your assignment.");
			writeText("She looks from you, down to the paper on the desk, then back up. She still looks pissed, but it looks like you managed to make her angrier at the chemistry than at you.");
			writeSpeech("sports", "class.jpg", "I... Yeah. Chemistry isn't my strong suit.");
			writeSpeech("player", "", "Do you want some help? It's been a while, but I think I still remember most of what came up in O. Chem back in the day.");
			writeText("She takes a moment after you ask, apparently weighing how much you could possibly help before realizing that the worst that happens is she just asks you to leave.");
			writeText("She's wrong, but how could she know about your hypnosis hobby?");
			writeSpeech("sports", "class.jpg", "Alright playerT playerF, but if we hit any more walls, I'm going home for the night.");
			if (data.player.hypnosis > 1) 
				{writeFunction("loadEncounter('sports', 'sports2b')", "That sounds reasonable sportsF. After all, we wouldn't want you getting too stressed. It's my job to make sure the student body is as <i>relaxed</i> as possible.");}
			else 
				{writeFunction("loadEncounter('sports', 'sports2fail')", "That sounds reasonable sportsF. Let's get to work.");}
			break;
		}
		case "sports2b": {//She was wrong
			setTrust('sports', 21);
			writeSpeech("player", "", "And that's how a chair conformation works.");
			writeText("A few hours have passed, and you've given a small lecture on some of the trouble spots she had been having. She really is a good student. She absorbed everything you said very readily.");
			writeSpeech("player", "", "You feeling more <i>relaxed</i> about that test coming up now?");
			writeSpeech("sports", "class.jpg", "I actually am. A lot. This class has really been stressing me out lately.");
			writeText("She stands up and starts packing to leave for home.");
			writeBig("images/sports/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Thanks. Thanks a lot, actually, playerT playerF. You're a lot nicer than I thought at first.");
			writeSpeech("sports", "class.jpg", "To be honest, the first time I saw you in the Gym, I thought you were a bit of a pervert, staring at the volleyball team like that.");
			writeSpeech("sports", "class.jpg", "I... Uhh... Sorry about that.");
			{writeFunction("writeEvent('sports2c')", "You laugh a little bit.");}
			break;
		}
			
		case "sports2fail": {//No hypno skill
			writeText("You spend the next hour working with sportsF to get her over her chemistry hump.");
			writeText("She really is a good student, but any attempt you make to push with hypnosis is quickly shut down. She's surprisingly sharp.");
			writeSpeech("sports", "class.jpg", "Alright, that's enough! Agh. This is giving me a headache.");
			writeBig("images/sports/2a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Sorry, playerT playerF. I can't take any more chemistry tonight. I'll get back to it later.");
			writeText("Just when you were starting to make progress.");
			writeSpeech("player", "", "That's fine sportsF, we did have a deal. Tell you what, if you need any more help, I'll try to poke my head in here later to give you a hand.");
			writeText("She's still wary. Hopefully she didn't catch onto what you were doing as you tutored her. She takes a long sigh before turning her head and answering");
			writeSpeech("sports", "class.jpg", "I'd actually appreciate that, playerT playerF. You were helping a lot, this class just has me really wound up.");
			writeSpeech("player", "", "Okay. See you next study session?");
			writeSpeech("sports", "class.jpg", "Yeah, yeah... Don't remind me. I don't want to see another chemical formula in my life.");
			writeText("She packs up quickly before leaving. Maybe if you had a bit more practice with hypnosis, you could make this work.");
			writeFunction("changeLocation(data.player.location)", "Next time.");
			break;
		}
		case "sports3": {//Tutor time 2 - Electric Boogaloo. Titjob
			writeSpeech("sports", "class.jpg", "What do you want, you bastard?");
			writeText("Her eyes cut daggers into yours, but you know you have the upper hand here.");
			writeSpeech("player", "", "Exactly what I told you last time, sportsF. I want to make sure you're a happy and well rounded student here at our University. And I'm just worried that your busy schedule and class load makes it hard for you to <i>relax</i>.");
			writeText("There it is. Her gaze softens as you say the word, and her focus drifts. Just a bit, but enough.");
			writeText("Oh, this is going to be fun.");
			writeFunction("loadEncounter('sports', 'sports3a')", "So, what is it you needed help with, sportsF?");
			writeFunction("changeLocation(data.player.location)", "Leave her be for now.");
			break;
		}
		case "sports3a": {//Tutor time 2 part 1
			setTrust('sports', 25);
			passTime();
			writeSpeech("sports", "class.jpg", "I don't need any help from you, damnit.");
			writeText("Her words have lost a bit of that bite from earlier. Her listing speech would almost sound like a question, if it wasn't for the cursing.");
			writeSpeech("player", "", "Oh, I think you do. Remember last time?");
			writeText("You see her shuffle, legs rubbing against each other, and under her uniform you can see her nipples hardening.");
			writeFunction("writeEvent('sports3b')", "I see that you do. Take off your blouse, sportsF.");
			break;
		}
		case "sports4": {//Back of the gym
			writeText("You work your way to the equipment room, the moaning sounds getting louder as you approach.");
			writeFunction("loadEncounter('sports', 'sports4a')", "Before you walk in, you may as well take a peek...");
			writeFunction("changeLocation(data.player.location)", "Let her stew for a day or two, she'll be ready when you need her.");
			break;
		}
		case "sports4a": {//Peek
			setTrust('sports', 100);
			passTime();
			writeBig("images/sports/4-1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "That... Son of a bitch... Won't win.");
			writeFunction("writeEvent('sports4b')", "You smile as you walk in. She won't be the same after today.");
			break;
		}
		case "sports5": {//Blowjob start? (y/n)
			writeText("As you walk in the room, sportsF jumps to her feet.");
			writeBig("images/sports/2a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Master! You were so late, you had me worried you wouldn't show up.");
			writeFunction("loadEncounter('sports', 'sports5a')", "I had to be sure that everyone else cleared out. You wouldn't want to be caught, now would you?");
			writeFunction("changeLocation(data.player.location)", "You training will have to wait, sportsF. I'm afraid I have other things to do tonight.");
			break;
		}
		case "sports5a": {//Blowjob start (Y)
			setTrust('sports', 111);
			passTime();
			writeText("You see her breathing pick up and her face start to turn bright red.");
			writeBig("images/sports/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Master, before we start, I have to tell you something. I... I've never done this before.");
			writeText("You give her a quizzical look as you get closer.");
			writeSpeech("player", "", "Really, sportsF?  You weren't a virgin, were you?");
			writeSpeech("sports", "class.jpg", "No playerH. I'm sorry, if I had known about you I would have saved myself, but I-");
			writeSpeech("player", "", "<i>Relax</i> slave.  I'm not bothered by that. You should see some of the other slaves I've collected. Some of the students at this school are real pieces of work...");
			writeText("She looks down, dejected by the knowledge you have others in your harem.");
			writeSpeech("sports", "class.jpg", "You have other... No, Master, I'm sorry. That makes sense. You are my Master, but you're definitely still a pervert. I should have expected you to have more women under control.");
			writeSpeech("player", "", "Oh, not just women. Do you know Reese? I've been working on him recently.");
			writeBig("images/sports/2a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She looks you in the eyes, apparently flabberghasted by your bold admission.");
			writeSpeech("sports", "class.jpg", "You... Damn, Master, you really are a pervert.");
			writeSpeech("player", "", "... Does that really surprise you at this point? I plan to bring this whole school- Hell, maybe even this whole town- under my control, eventually. One person at a time if need be. And I expect you to help me, slave.");
			writeText("The confusion in her eyes is immediately gone as you give her the order.");
			writeSpeech("sports", "class.jpg", "If that's what you want from me, my perverted Master, I'll do my best to bring everyone I know under your control. Just...");
			writeText("She shuffles her feet, hands reaching below her skirt to touch her cunt. Looking down her leg, you see she must have been dripping during this whole conversation, a small puddle has formed around her feet as she starts to touch herself in earnest. She leans in and whispers in your ear, breathy and lust filled.");
			writeSpeech("sports", "class.jpg", "Just don't forget Master, you're not the only pervert here.");
			writeFunction("writeEvent('sports5b')", "Get on your knees, slave. I'm going to teach you how to properly serve me with your mouth.");
			break;
		}
		case "sports6": {//Swimsuit Sex Start (y/n)
			writeText("Today, you decide to sit and watch practice. You already have sportsF firmly in your grasp. It may be time to scope out other prospects.");
			writeText("A few members of the team in particular catch your eye. Good thing you had the foresight to grab the files of the team members from your cabinet. You start cross referencing the girls against the photos in their files.");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("orangeF orangeL. She's an up and coming new student on the team. She only came to the school last semester, so you don't have a lot, but she's gotten into a few loud arguments on campus that haven't yet escalated, but some of her teachers are worried about her fiery temper.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("swimmerF swimmerL. She's a backup on the volleyball team, but does most of her work with the swimming team. Her grades aren't very good, but most teachers seem to have a small note about how she's earnest and tries her hardest, even if her grades don't show it.");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coldF coldL. As opposed to the other two, you don't have anything that sets off as a flag in her file. You'll probably need to ask sportsF about her directly.");
			writeText("A whole host of new girls for you to break in. You're sure by now that sportsF will do anything she needs to and make them yours.");
			writeText("Perverted ideas dance through your head as you continue to watch the team practice. You catch sportsF stealing a few glances your way during practice, and while most would probably think the stain spreading on her shorts was just an unfortunate sweat mark, you suspect there's a more illict explanation at play.");
			writeText("Practice begins to wind down, the girls finishing up with one last practice set. sportsF lands a killing spike, and the girls shuffle off towards the locker room- it looks like sportsF is limping a little...");
			writeFunction("loadEncounter('sports', 'sports6a')", "The girls start to shuffle out of the locker room in a few groups. You wait for sportsF, and...");
			writeFunction("changeLocation(data.player.location)", "As the girls file out of the locker room, you walk out.");
			break;
		}
		case "sports6a": {//Swimsuit Sex Start (y)
			setTrust('sports', 120);
			passTime();
			writeText("The volleyball team clears out. Some of the members smile and wave at you as you walk by. A couple break off from the rest and come over to speak to you. As they do, you make sure to hide the files you'd been looking through.");
			writeSpeech("orange", "", "Oh, hey, playerT playerF! How's it going?");
			writeText("Seems like sportsF has been telling her team about you. They all seem far friendlier than the first time you came by.");
			writeSpeech("player", "", "Hello there... orangeF?");
			writeText("She smiles even wider. Good thing you'd been reading through student files...");
			writeSpeech("orange", "", "You do know my name! sportsF has been talking about you recently, and we all wanted to thank you for what you're doing.");
			writeSpeech("swimmer", "", "Mm-hmm.");
			writeSpeech("cold", "", "It's... Yeah, thanks a lot.");
			writeText("That wasn't... Quite what you expected.");
			writeSpeech("player", "", "I... Well, while I like being appreciated, girls, what exactly am I being thanked for?")
			writeText("orangeF steps up. Apparently she was the one taking point on this whole thing.");
			writeSpeech("orange", "", "Well playerF, we know sportsF has been going to you lately, and we wanted to thank you for helping her out.")
			writeSpeech("orange", "", "Before she started talking to you, she seemed like she was always on edge. We were friends before we got to this school, but once she got here I think the pressure of volleyball, her classes, everything Miss Bit... I mean... Miss coachL has her doing for the team was really hurting her.")
			writeText("You raise your eyebrow at that last part.");
			writeSpeech("player", "", "Miss Bitch, huh?")
			writeText("She blushes and looks away.");
			writeSpeech("orange", "", "You haven't met her, have you?")
			writeSpeech("player", "", "Not yet, but it sounds like I need to. Don't worry girls, I'll try to talk some sense into her.")
			writeText("Despite your reassuring words, none of the girls seem convinced.");
			writeSpeech("orange", "", "Good luck with that, playerT playerF. Others have tried, I don't think I've seen any of them come back in one piece.")
			writeSpeech("swimmer", "", "Oh! playerT playerF, sportsF said she'd be a little late to counseling. She thinks she twisted her ankle at the end of practice and wanted to take a long shower and stretch herself out some to make sure it wasn't anything serious.");
			writeSpeech("cold", "", "She really went for it on that last play.");
			writeSpeech("orange", "", "Hah! That's our captain! She'll be fine tomorrow. I just hope she doesn't keep you waiting too long, playerT playerF, you probably have important things to do.")
			writeSpeech("player", "", "No, no, that's perfectly fine. I'll wait here for her. You girls get going. I'm sure you have work to do. And remember- If you need anything my door is always open. Don't be strangers.")
			writeText("The girls laugh and assure you that they won't hesitate if something is wrong. They must really put a lot of faith in sportsF if they turned around on you so hard, so fast.");
			writeFunction("writeEvent('sports6c')", "You wait patiently, watching all the girls leave before you're sure that it's time to move.");
			break;
		}
		case "sports7": {//Take her home (y/n)
			writeText("For the first time in a long while, sportsF seems to actually be working on homework as you approach.");
			writeSpeech("player", "", "Ahem.");
			writeText("She looks up calmly from her work.");
			writeSpeech("player", "", "Is your work going well, sportsF?");
			writeText("She smiles clear up at you and stands up.");
			writeSpeech("sports", "class.jpg", "Yep, playerT playerF! In fact, I'm all done now.");
			writeText("She moves closer to you. The room hasn't emptied out yet, a few students are still chatting and working through an assignment in the corner.");
			writeSpeech("player", "", "Good! So I take it that your Organic class is going better than when we started?")
			writeText("She's packing up her bag and starts to move towards you.");
			writeSpeech("sports", "class.jpg", "Oh yeah! I aced the last test, and the professor even complimented me on my improvement.")
			writeText("She closes the last distance between you and puts her lips up to your ear, whispering softly as she leans in.");
			writeSpeech("sports", "class.jpg", "So, since I don't have anymore work to do, why don't I repay my Master for everything he's done for me?")
			writeText("She leans back, still smiling that tricky little smile as you hear the students in the corner laughing about something or another.");
			writeFunction("loadEncounter('sports', 'sports7a')", "You smile back. Tonight is going to be good.");
			writeFunction("changeLocation(data.player.location)", "As much as you'd like to, you have other things to do tonight. Rain check?");
			break;
		}
		case "sports7a": {//Take her home (y)
			setTrust('sports', 130);
			passTime();
			writeText("Your turn to lean in.");
			writeSpeech("player", "", "Of course we can, slave. I'm taking you home tonight and filling every hole you have full of cum.");
			writeText("For how much of a minx she thought she was being, the desperate noise she made makes it obvious she wasn't ready for counterplay");
			writeText("You slip her a piece of paper with your address and she nods back.");
			writeFunction("writeEvent('sports7b')", "You go home, and prepare your bed for a night of use.");
			break;
		}
		case "sports8": {//Give cat (y/n)
			writeText("You walk into the classroom, a few students hanging around and chatting while sportsF works on some homework in the corner.");
			if (checkItem("Neko") == true){writeFunction("loadEncounter('sports', 'sports8a')", "You walk into the classroom, hands holding a gift behind your back.");}
			writeFunction("changeLocation(data.player.location)", "You'll come back another day.");
			break;
		}
		case "sports8a": {//Take her home (y)
			setTrust('sports', 150);
			passTime();
			removeItem("Neko");
			writeSpeech("player", "", "sportsF, how did your last test go?");
			writeText("sportsF looks up at you, and a few students see you two talking.");
			writeSpeech("sports", "class.jpg", "Oh, playerT playerF! It went great. I'm actually thinking of taking a few more chemistry courses next semester.");
			writeText("You laugh and pull the gift from behind your back. A neat little box with some cute designs on it.");
			writeSpeech("player", "", "I heard from your professor. I just wanted to give you this as a reward for your hard work. You've really turned around lately, and I wanted to make sure you knew the faculty was proud of you.");
			writeText("A few students see you, but they're also regulars. They know that you and sportsF had been working hard to get her grades up, and a little gift at the end of a lot of work seems like a nice touch from the staff.");
			writeText("What they don't see or hear is you leaning in and whispering to sportsF.");
			writeSpeech("player", "", "I expect you at my home tonight, pet.");
			writeSpeech("sports", "class.jpg", "Thank you Master. Your pet won't disappoint you.");
			writeFunction("writeEvent('sports8b')", "You shake her hand and make a big show of praising her work as an improving student before going home and waiting for your pet to arrive.");
			break;
		}
		case "sportsfinalclass": {//How do you want her - Class
			writeText("sportsF is working on homework, but as you approach she starts to put things away. The rest of the class has shuffled out, and you made sure to lock the door on your way in.");
			writeSpeech("sports", "class.jpg", "Hello, Master, is there something you want from me?")
			writeFunction("loadEncounter('sports', 'sportsfinalclass1')", "Whip those tits out, slave.");
			writeFunction("loadEncounter('sports', 'sportsfinalclass2')", "Get on your knees and open your mouth.");
			writeFunction("loadEncounter('sports', 'sportsfinalclass3')", "You sit down on a desk chair and pat your lap.");
			writeFunction("loadEncounter('sports', 'sportsfinalclass4')", "Bend over, slave.");
			writeFunction("loadEncounter('sports', 'sportsfinalhome')", "Meet me at my house, we'll find something to do there.");
			writeFunction("changeLocation(data.player.location)", "Nothing now, just checking in.");
			break;
		}
		case "sportsfinalclass1": {//Titjob
			passTime();
			writeText("sportsF immediately pulls up her blouse and you get to work.");
			writeBig("images/sports/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("After getting your fill of fondling, you push her to her knees and she desperately wraps her tits around your member.");
			writeBig("images/sports/3b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/3b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/3b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/3b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("sportsF hungrily licks up as much cum as she can from your cock and her own tits before getting to work cleaning up.");
			writeSpeech("sports", "class.jpg", "Thank you for using me, Master. Don't hesitate to come by anytime you need help relaxing!")
			writeFunction("changeLocation(data.player.location)", "Time to head home.");
			break;
		}
		case "sportsfinalclass2": {//Blowjob
			passTime();
			writeText("sportsF drops to her knees and licks her lips as you pull your cock out.");
			writeSpeech("sports", "class.jpg", "I could live off your cum, if you let me, Master. It's the best treat in the world.")
			writeBig("images/sports/5b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/5b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/5b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/5b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She works quickly, using all the tricks you taught her to make you cum.");
			writeSpeech("sports", "class.jpg", "No better meal in the world. Thank you so much Master! Don't hesitate to come by anytime you need help relaxing!")
			writeFunction("changeLocation(data.player.location)", "Time to head home.");
			break;
		}
		case "sportsfinalclass3": {//Sitting sex
			passTime();
			writeText("sportsF takes your invitation quickly. Pulling down her panties and pulling up her blouse as she guides you into her waiting cunt.");
			writeBig("images/sports/7b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("sportsF slowly rises off of you and begins to clean up.");
			writeSpeech("sports", "class.jpg", "Thank you for using me, Master. Don't hesitate to come by anytime you need help relaxing!")
			writeFunction("changeLocation(data.player.location)", "Time to head home.");
			break;
		}
		case "sportsfinalclass4": {//Doggy
			passTime();
			writeText("sportsF Bends over her desk, and pulls down her panties, spreading her lips as an invitation.");
			writeBig("images/sports/doggyclass1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/doggyclass2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/doggyclass3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/doggyclass4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She feels you cum, and starts to move and clean up, before you grab both of her arms and pull her back into you. Once she's off the desk, you grab her tits and pull yourself out of her pussy... Before lining yourself up with her tight little asshole.");
			writeSpeech("sports", "class.jpg", "Ah! Yes Master! Fill my ass! I'm begging you, it's been too long since I've been your personal butt slut.")
			writeText("sportsF spreads her cheeks as much as she can, and that's all the invitation you need before you push your way in.");
			writeBig("images/sports/doggyclass5.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/doggyclass6.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/doggyclass7.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You pull yourself out after you've cum, and sportsF falls to her knees and catches her breath before finding the strength to start cleaning up.");
			writeSpeech("sports", "class.jpg", "Oh, Master, we should do that more often. Thank you for using your butt slut. Don't hesitate to come by anytime you need help relaxing!")
			writeFunction("changeLocation(data.player.location)", "Time to head home.");
			break;
		}
		case "sportsfinalgym": {//How do you want her - Class
			writeText("You watch the volleyball practice for a while, and debate sending sportsF a text to meet her afterwards. Does something sound good today?");
			writeFunction("loadEncounter('sports', 'sportsfinalgymlocker')", "Get yourself ready after practice. I'll meet you in the locker room.");
			writeFunction("loadEncounter('sports', 'sportsfinalgymswimsuit')", "I'll see you in the locker room after practice. Wear your swimsuit.");
			writeFunction("loadEncounter('sports', 'sportsfinalhome')", "Meet me at my house, we'll find something to do there.");
			writeFunction("changeLocation(data.player.location)", "Not today, you have other things to do.");
			break;
		}
		case "sportsfinalgymlocker": {//How do you want her - Gym
			passTime();
			writeText("You give it some time before sneaking your way into the locker room.");
			writeBig("images/sports/4-1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/4-2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("sportsF is making sure she's wet and ready as you join her.");
			writeSpeech("sports", "", "Ah! Master! I'm all ready for anything, so how did you want to use me today?")
			writeText("You move in and kiss her before making your decision.");
			writeBig("images/sports/4-3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/4-4.jpg", "Art by Himitsu Kessha Vanitas");
			writeFunction("loadEncounter('sports', 'sportsfinalgymlocker1')", "You push her onto her back, laying down on top of her.");
			writeFunction("loadEncounter('sports', 'sportsfinalgymlocker2')", "You lie her down gently, getting yourself into position behind her.");
			break;
		}
		case "sportsfinalgymlocker1": {//You on top
			writeBig("images/sports/gympress1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Today, you decide you'll use her as a toy. You hold her down, giving her no room to squirm as you thrust in. At first gentle, but you rapidly pick up the pace.");
			writeBig("images/sports/gympress2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The more she tries to squirm, the rougher you act with her, finally, you reach a breaking point.");
			writeBig("images/sports/gympress3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you pull out, sportsF lies there, between her practice and the rough treatment she just got, you don't think she'll be cleaning for a bit. Between ragged breaths, she speaks up.");
			writeSpeech("sports", "", "Thank you for using me Master. I'll clena up soon. I just need a moment. My body aches, in all the best ways right now.")
			writeFunction("changeLocation(data.player.location)", "Well, if she says so. You give her a quick pat on the head as you leave her in the afterglow and head home.");
			break;
		}
		case "sportsfinalgymlocker2": {//You behind
			writeText("Time to recreate the day you broke her. Lining yourself up behind her, she's already wet enough for you to slide yourself in.");
			writeBig("images/sports/4a2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/4a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/4a3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her cries pick up volume and speed as you use your sporty little fuck toy.");
			writeBig("images/sports/4a4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Eventually, you reach your limit and cum deep inside her, as she throws her head back and cums with you.");
			writeText("You pull yourself out, leaving her lying on the floor as you clean yourself enough to get home. sportsF slowly stands and begins to clean as you leave.");
			writeSpeech("sports", "", "Ah, thank you Master. Thank you for reminding me that I belong to you.")
			writeFunction("changeLocation(data.player.location)", "You chuckle and give her a small spank as you leave.");
			break;
		}
		case "sportsfinalgymswimsuit": {//Swimsuit sex
			writeText("When you finally get to the locker room, sportsF is already up against the wall, holding her dripping cunt open as she waits for you.");
			writeSpeech("sports", "", "Master! Please hurry! I can't wait any longer!")
			writeText("Who are you to refuse that kind of invitation.");
			writeBig("images/sports/6c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/6c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/6c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She turns to putty in your hands as you cum inside her.");
			writeBig("images/sports/6c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Pulling out, you notice some cum on her suit. You wonder if you'll be able to spot the stains the next time she wears it in class.");
			writeSpeech("sports", "", "Thank you Master, for using your perverted slave.")
			writeFunction("changeLocation(data.player.location)", "You leave her to clean up, and spot her licking up the cum on her suit as you leave the locker room.");
			break;
		}
		case "sportsfinalgymswimsuit": {//Swimsuit sex
			writeText("When you finally get to the locker room, sportsF is already up against the wall, holding her dripping cunt open as she waits for you.");
			writeSpeech("sports", "", "Master! Please hurry! I can't wait any longer!.")
			writeText("Who are you to refuse that kind of invitation.");
			writeBig("images/sports/6c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/6c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/6c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She turns to putty in your hands as you cum inside her.");
			writeBig("images/sports/6c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Pulling out, you notice some cum on her suit. You wonder if you'll be able to spot the stains the next time she wears it in class.");
			writeSpeech("sports", "", "Thank you Master, for using your perverted slave.")
			writeFunction("changeLocation(data.player.location)", "You leave her to clean up, and spot her licking up the cum on her suit as you leave the locker room.");
			break;
		}
		case "sportsfinalhome": {//How do you want her - Home
			passTime();
			writeText("An hour later, sportsF is in your arms at your home.");
			writeBig("images/sports/7c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Now, Master, how did you want your slave to pleasure you today?")
			writeFunction("loadEncounter('sports', 'sportsfinalhome1')", "On your knees, slave, use your mouth and tits to make me cum.");
			writeFunction("loadEncounter('sports', 'sportsfinalhome2')", "You push her down onto your bed.");
			writeFunction("loadEncounter('sports', 'sportsfinalhome3')", "You grab her arms and turn her away from you, on her hands and knees on the bed.");
			writeFunction("loadEncounter('sports', 'sportsfinalcat')", "Put on your lingerie, I want you to be my pet tonight.");
			break;
		}
		case "sportsfinalhome1": {//Titjob Home
			writeText("sportsF slowly slinks to her knees in front of you, licking her lips before lubing your cock with her spit. Once you're covered, she gets to work squeezing her tits around you.");
			writeBig("images/sports/7d1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7d2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Mmm... I love the feeling of your dick between my breasts, Master.")
			writeText("sportsF keeps moving, occasionally putting your cock head in her mouth, and swirling her tongue over your sensitive spots. Finally, you pop.");
			writeBig("images/sports/7d3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7d4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Your cum covers her face and tits. When you've finally stopped spurting, sportsF gets to work licking you and herself clean, making a show of swallowing every bit of cum she can lick up, gathering the last of it on her fingers before sucking it clean.");
			writeSpeech("sports", "class.jpg", "Mmm!~ Thank you Master. Is there anything else you need from your lowly slave?")
			writeFunction("changeLocation(data.player.location)", "You spend the night with her, making sure to use your slave to the fullest before sending her off to school in the morning.");
			break;
		}
		case "sportsfinalhome2": {//Missionary Home
			writeText("You force her down firmly, getting a firm grasp on her breasts as you line up with her waiting cunt.");
			writeBig("images/sports/missionhome1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/missionhome2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Ahh!~ Yes, Master, I'm so full.~")
			writeText("You feel sportsF relax herself as you bottom out inside her. Once you're all the way in, you squeeze her breasts, and every time you do you feel her cunt tighten up around you, varying the pressure and feeling as you thrust in and out, before letting your load fill her.");
			writeBig("images/sports/missionhome3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/missionhome4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her moans reach a crescendo as your cum paints her insides. Both of you are breathing hard as she looks into your eyes and speaks.");
			writeSpeech("sports", "class.jpg", "So how do you want me next, Master?")
			writeFunction("changeLocation(data.player.location)", "You spend the night with her, making sure to use your slave to the fullest before sending her off to school in the morning.");
			break;
		}
		case "sportsfinalhome3": {//Doggy Home
			writeText("You wrench sportsF hard into position on the bed. Today she's here for your pleasure.");
			writeBig("images/sports/7c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You don't even give her time to breathe as you thrust in and out. With how roughly you handle her, you know it has to hurt, but as you move you hear her groans of pain give way to moans of pleasure.");
			writeSpeech("sports", "class.jpg", "Ahh!~ Master!~ Don't hold back! I'm your toy, feel free to use me, any way you want. Even if I break, keep using me! Please, just don't stop!")
			writeText("You rear back your hand and give her a spank, right across the ass. She screams out as you keep moving. At this pace, it's not long before you cum.");
			writeBig("images/sports/homedoggy3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/homedoggy4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You give her just a moment to catch her breath, before you start up again. You're not done yet. Placing your cock against her asshole, you thrust in,");
			writeBig("images/sports/7c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/7c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "You don't have to tell me how to treat you, slave. You belong to me, and I do what I want with you. Now scream for me, slut. Beg for more.");
			writeSpeech("sports", "class.jpg", "Yes Master! Please, use me! Fuck me ass! Fuck my cunt! Turn me into a quivering mess! Stuff your cock down my throat until I stop breathing! Make me lick your ass, drink your piss, treat me like the worthless whore slave I am! Please Master!")
			writeFunction("changeLocation(data.player.location)", "You spend the rest of the night doing just that, using your toy in every way you can think of before sending her home, covered in cum beneath her clothes.");
			break;
		}
		case "sportsfinalcat": {//How do you want her - Cat outfit
			writeBig("images/sports/profileP.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Your pet is here, Master. How do you want to use her tonight?")
			writeBig("images/sports/8b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You pull her in, kissing her and making sure she's wet enough for however you choose to use her next..");
			writeBig("images/sports/8b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/8b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/8b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeFunction("loadEncounter('sports', 'sportsfinalcat1')", "You're doing the work tonight, my pet. Get on top of me.");
			writeFunction("loadEncounter('sports', 'sportsfinalcat2')", "Get on your hands and knees, pet. I'll fuck you like a real animal tonight.");
			writeFunction("loadEncounter('sports', 'sportsfinalcat3')", "You push her onto her back, and take a hold of her hands as you thrust yourself in.");
			break;
		}
		case "sportsfinalcat1": {//Cat outfit - Ride
			writeSpeech("sports", "sportsP.jpg", "Purr~ yes Master. Just lie back, your pet will do all the work tonight.")
			writeText("You lie back, and sportsF moves on top of you, giving your cock a few rubs against her pussy before slowly moving herself down. Taking it slowly, moving herself lower and lower.");
			writeBig("images/sports/8c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/8c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/8c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She moves faster and faster, and you start moving to match her, thrusting upward and twisting your hips to hit every spot inside her moist little cunt. Soon, you find yourself on the edge and cum inside her.");
			writeBig("images/sports/8c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She throws her head back and screams as you do, almost literally cumming her brains out on your cock.");
			writeBig("images/sports/8c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeFunction("changeLocation(data.player.location)", "With a smile, she asks how you want her next. You spend the night using your pet in all kinds of creative ways before getting to sleep, sending her to school in the morning.");
			break;
		}
		case "sportsfinalcat2": {//Cat outfit - Doggy
			writeSpeech("sports", "sportsP.jpg", "Of course, Master. Your pet is here for your pleasure.")
			writeText("She keels on the bed, ass up, and head down.");
			writeSpeech("sports", "sportsP.jpg", "Please, Master, fill me up. Your pet needs it soo badly.")
			writeText("You line yourself up behind sportsF, brabbing onto her shoulders and pushing her forcefully onto your cock. The motion is awkward, but does a lot to reinforce her position as a toy for you tonight.");
			writeBig("images/sports/catdoggy1.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/sports/catdoggy2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You match your thrusts with psuhing and pulling sportsF back and forth in the opposite directions of your movement, making the sex more violent, and making a nice SMACK everytime you bottom out, and her ass smacks against your hips. She screams out in pleasure as you tense up, ready to cum.");
			writeBig("images/sports/catdoggy3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You fill her, deep as you can manage, before pulling out and letting your cum spill out of her now empty cunt.");
			writeBig("images/sports/phoneReward.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The only thing keeping her up at this point is you holding her shoulders, but even weak as she is like this, shaking in your hands, you hear her plead for more.");
			writeSpeech("sports", "sportsP.jpg", "How would you like to use your pet next, Master?");
			writeFunction("changeLocation(data.player.location)", "You give her a spank, moving her into the next position. It's a long time before you send her home, soaked in cum beneath her clothes.");
			break;
		}
		case "sportsfinalcat3": {//Cat outfit - missionary
			writeSpeech("sports", "sportsP.jpg", "Ah, Master! Thank you. I love looking into your eyes as you use me.")
			writeText("You enter her gently. Working your way in slowly as she wiggles and tries to help you push in deeper and deeper.");
			writeBig("images/sports/missioncat1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Ooooh~, Master! Thanks you, thank you, thank you.");
			writeText("Now that she's loosened up, she's ready to go faster. You thrust in harder now, pushing her to her limit.");
			writeBig("images/sports/missioncat2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You keep at it, and as you get close, you lean in and whisper to your pet.");
			writeSpeech("player", "", "I'm going to cum, my pet. When I do, let yourself go. Cum for me, my pet.");
			writeText("A small whimper escapes her, as you redouble your efforts. No more moaning, no more screaming. sportsF is doing everything she can to hold back her orgasm until you cum inside her. And you're trying as hard as you can to hold back and build that pressure up. But as hard as you try, it's not long before you can't take it any more.");
			writeBig("images/sports/missioncat3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you cum, sportsF throws her head back and lets loose a scream. She's loud enough you get a little worried, but you know this place is well soundproofed. While she screams, you can feel her squirting and twitching on your cock, wetting your stomach, your thighs, and the sheets of the bed. When her twitching finally subsides, you look into her eyes. Unfocused and lost in the afterglow.");
			writeBig("images/sports/missioncat4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You pull yourself out and take a moment to admire your handiwork before putting a cover over your pet. You can hear her muttering quietly as you do.");
			writeSpeech("sports", "sportsP.jpg", "Thank you Master... I love you Master...")
			writeFunction("changeLocation(data.player.location)", "You let her rest for a bit, and do the cleaning yourself this time. Once she's gathered her wits, you send her home.");
			break;
		}
	}
}	

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "sportsphone1", trust: 25,},
	{index: "sportsphone2", trust: 100,},
	{index: "sportsphone3", trust: 111,},
	{index: "sportsphone4", trust: 120,},
	{index: "sportsphone5", trust: 121,},
	{index: "sportsphone6", trust: 122,},
	{index: "sportsphone7", trust: 130,},
	{index: "sportsphoneReward", trust: 150,},
];	
	
function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "sportsphone1": {
			writePhoneSpeech("sports","","I can't even text people about the sick shit you're making me do!");
			writePhoneSpeech("sports","","I swear, one day I'm going to make you pay for this.");
			writePhoneSpeech("sports","","I had to walk home wearing my damn swimsuit because you ruined my blouse!");
			writePhoneSpeech("sports","","And I had to do it without panties, because I soaked mine through when I came!");
			writePhoneSpeech("sports","","What the fuck?! I didn't mean to send that!");
			writePhoneSpeech("player","","I did tell you to be honest with me.");
			writePhoneSpeech("sports","","FUCK YOU!");
			writePhoneChoices("Well, did you at least have fun?","I'd love to see you in that swimsuit.");
			break;
		}
		case "sportsphone1A": {
			writePhoneSpeech("player","","Did you at least have fun yesterday?");
			writePhoneSpeech("sports","","Yes.");
			writePhoneSpeech("sports","","Fuck.");
			writePhoneSpeech("sports","","Please make this stop.");
			writePhoneSpeech("sports","","You're not going to make this stop, are you?");
			writePhoneSpeech("player","","Nope.");
			writePhoneSpeech("sports","","Goddamnit.");
			writePhoneSpeech("player","","I bet you in that swimsuit made quite a sight.");
			writePhoneSpeech("sports","","All the towels in the gym had been taken for cleaning by the time I got to my locker. I had cum stains on my chest the whole way home.");
			writePhoneSpeech("sports","","Kill me, please.");
			writePhoneSpeech("player","","I'd love to see you in it sometime.");
			writePhoneSpeech("sports","","Then come by the class swimming day and perv on me, you son of a bitch, it's not like I can stop you.");
			writePhoneSpeech("player","","I was hoping for a picture, but hey, that's not a bad idea.");
			writePhoneSpeech("sports","","Whatever you've done won't even let me shut my stupid mouth. Uuugh.");
			writePhoneSpeech("player","","Relax, sportsF, you'll learn to love it soon.");
			writePhoneSpeech("player","","So I have something else you may think is fun...");
			writePhoneSpeech("sports","","... What is it?");
			writePhoneSpeech("player","","First thing's first, I've seen you topless, but I want to see all of you. Send me a picture of your pussy.");
			writePhoneSpeech("sports","","... Fine. But you'll never get this, damnit. I'll never have sex with you, you bastard.");
			writePhoneSpeech("player","","Be sure to smile.");
			writePhoneImage("images/sports/phone1.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("sports","","Asshole.");
			writePhoneSpeech("player","","Relax, sportsF. You did something for me, so now I'll do something for you.");
			writePhoneSpeech("player","","After your next volleyball practice, stay late. Once everyone is gone, go to the back room and get yourself ready for me.");
			writePhoneSpeech("sports","","Yes playerH. I'll be ready.");
			setTrust('sports',40);
			break;
		}
		case "sportsphone1B": {
			writePhoneSpeech("player","","I bet you in that swimsuit made quite a sight.");
			writePhoneSpeech("sports","","All the towels in the gym had been taken for cleaning by the time I got to my locker. I had cum stains on my chest the whole way home.");
			writePhoneSpeech("sports","","Kill me, please.");
			writePhoneSpeech("player","","I'd love to see you in it sometime.");
			writePhoneSpeech("sports","","Then come by the class swimming day and perv on me, you son of a bitch, it's not like I can stop you.");
			writePhoneSpeech("player","","I was hoping for a picture, but hey, that's not a bad idea.");
			writePhoneSpeech("sports","","Whatever you've done won't even let me shut my stupid mouth. Uuugh.");
			writePhoneSpeech("player","","Did you at least have fun yesterday?");
			writePhoneSpeech("sports","","Yes.");
			writePhoneSpeech("sports","","Fuck.");
			writePhoneSpeech("sports","","Please make this stop.");
			writePhoneSpeech("sports","","You're not going to make this stop, are you?");
			writePhoneSpeech("player","","Nope.");
			writePhoneSpeech("sports","","Goddamnit.");
			writePhoneSpeech("player","","Relax, sportsF, you'll learn to love it soon.");
			writePhoneSpeech("player","","So I have something else you may think is fun...");
			writePhoneSpeech("sports","","... What is it?");
			writePhoneSpeech("player","","First thing's first, I've seen you topless, but I want to see all of you. Send me a picture of your pussy.");
			writePhoneSpeech("sports","","... Fine. But you'll never get this, damnit. I'll never have sex with you, you bastard.");
			writePhoneSpeech("player","","Be sure to smile.");
			writePhoneImage("images/sports/phone1.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("sports","","Asshole.");
			writePhoneSpeech("player","","Relax, sportsF. You did something for me, so now I'll do something for you.");
			writePhoneSpeech("player","","After your next volleyball practice, stay late. Once everyone is gone, go to the back room and get yourself ready for me.");
			writePhoneSpeech("sports","","Yes playerH. I'll be ready.");
			setTrust('sports',40);
			break;
		}
		case "sportsphone2": {
			writePhoneSpeech("sports","","Master! I did it. I walked home the entire way with your cum dripping from me.");
			writePhoneImage("images/sports/phone2.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("sports","","I don't know which felt better, Master, it moving inside me, or the feeling of it coming out.");
			writePhoneSpeech("player","","Good slave. Did you do anything else when you got home?");
			writePhoneSpeech("sports","","I touched myself as your cum leaked out of me. I almost came again, but I didn't think it would have been right without your permission Master.");
			writePhoneSpeech("player","","Very good, slave.");
			writePhoneSpeech("sports","","I also... Oh, this is embarassing!");
			writePhoneSpeech("sports","","Master, I also licked some of your cum off my fingers when I was done. It tasted so good. Master... Can we train my mouth next time? I want to taste you so bad.");
			writePhoneSpeech("player","","Of course, slave. We'll meet up in the classroom for our next session.");
			setTrust('sports',105);
			break;
		}
		case "sportsphone3": {
			writePhoneSpeech("sports","","I'm still practicing my deepthroat skills, Master. Are there any other things you want me to practice or do?");
			writePhoneSpeech("player","","You know what my goals are, slave. I want you to introduce me to any others you think I can bring under my control.");
			writePhoneSpeech("sports","","Yes Master! I think I may have someone in mind, but I'll need some time to figure things out. Have you met the campus sports director?");
			writePhoneImage("images/coach/profile.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("player","","I haven't.");
			writePhoneSpeech("sports","","To be honest, Master, she's a controlling bitch. If you gave her an 'attitude adjustment' you'd have the whole campus thanking you.");
			writePhoneSpeech("player","","Try to get me a meeting with her. I'll see what I can do.");
			writePhoneSpeech("sports","","Thank you Master! Oh, I can't wait to see that bitch knocked down a peg. Just thinking about it has me wet.");
			writePhoneImage("images/sports/phone3.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("sports","","Is there anything else you want from me Master?");
			writePhoneSpeech("player","","I still want to see you in that swimsuit, slave. I'll meet you in the locker room after your next practice.");
			writePhoneSpeech("sports","","Yes, master! I'll make sure I'm wet and ready for you!");
			setTrust('sports',112);
			break;
		}
		case "sportsphone4": {
			writePhoneSpeech("sports","","Master! What is it you need from me?");
			writePhoneSpeech("player","","I think it's time to start expanding my influence. Can you get me a meeting with the sports director? Preferably alone.");
			writePhoneSpeech("sports","","I... Master, are you sure?");
			writePhoneSpeech("player","","Do you not think I can manage breaking her?");
			writePhoneSpeech("sports","","To be honest, Master, I'm nervous about it. I don't want anything to go wrong...");
			writePhoneSpeech("player","","Relax, sportsF. I can do this. But, do be safe, I'll have you do something to make my job easier.");
			writePhoneSpeech("sports","","That sounds good, Master. What is it you need me to do?");
			writePhoneSpeech("player","","Get me a compromising picture of her. It doesn't need to be anything incredibly damning, but it has to be something I can work into blackmail material.");
			writePhoneSpeech("sports","","That's... devious, Master. I'll try to get something. It'll probably take me a while, though.");
			writePhoneSpeech("player","","That's perfectly fine, slave. Just be sure not to get caught first. There are always more chances to get a picture as long as you're not caught. Do this for me, and I'll be sure to reward you properly.");
			writePhoneSpeech("sports","","I'll be careful Master. I'll let you know what I find when I can.");
			setTrust('sports',121);
			break;
		}
		case "sportsphone5": {
			writePhoneSpeech("sports","","I think I may be onto something Master!");
			writePhoneSpeech("player","","What is it?");
			writePhoneImage("images/coach/sportsphone1.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("sports","","coachF and her boyfriend were out at the beach today. She was wearing a skimpy suit and everything.");
			writePhoneSpeech("player","","Promising, slave, but not enough. She wore that out in public herself. I don't think she would be too embarassed with this.");
			writePhoneSpeech("sports","","I know Master, but I think they went off to have sex at some point during their date. I lost track of them at the beach and the next time I saw them was coming out of a little alcove hidden from the rest of the beach. I'm going to try and see if I can get a picture of them together soon.");
			writePhoneSpeech("player","","That seems like a good call. Remember, don't get caught.");
			writePhoneSpeech("sports","","I won't Master!");
			setTrust('sports',122);
			break;
		}
		case "sportsphone6": {
			writePhoneSpeech("sports","","I think you're going to like this, Master...");
			writePhoneSpeech("player","","Hmm?");
			writePhoneSpeech("sports","","You wanted something compromising, and I got something I know she'll never want people to see.");
			writePhoneSpeech("player","","And that something is...?");
			writePhoneImage("images/coach/sportsphone2.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("sports","","She's a little ass licking slut, Master! She acts like such a bitch, but...");
			writePhoneSpeech("player","","Holy shit, sportsF. That's more than enough.");
			writePhoneSpeech("sports","","They went to the beach again, and I managed to follow them into the alcove without getting caught. I <i>heard</i> her beg to stick her tongue in there. Miss coachL is a freak!");
			writePhoneSpeech("sports","","It did make me think about doing that to you, and I can't say the idea didn't make me super horny... But we both already knew I'm a pervert.");
			writePhoneSpeech("player","","You did very well, slave. Meet me next chance you get for a tutoring session. I'll reward you properly.");
			writePhoneSpeech("sports","","Master! Don't tease me... I'm never going to be able to focus on classes now.");
			setTrust('sports',125);
			if (checkTrust('coach') == 0) {setTrust('coach',1)};
			break;
		}
		case "sportsphone7": {
			writePhoneSpeech("sports","","Master! I have a favor to ask for. I promise to make it worth your while...");
			writePhoneSpeech("player","","That makes me worried. What is it slave?");
			writePhoneSpeech("sports","","I found something at the shopping center and I think we'd both really enjoy it.");
			writePhoneSpeech("player","","Something?");
			writePhoneImage("images/sports/profileP.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("sports","","It's a lingerie set with an adorable pair of cat ears. I tried it on in the dressing room, but I didn't have enough to buy it.");
			writePhoneSpeech("player","","So you wanted me to...");
			writePhoneSpeech("sports","","If you can buy it Master, you know I'll make it worth your while! It even comes with a little white leather choker, like a collar. Mmm. Just wearing it in the dressing room made me feel hot.");
			writePhoneSpeech("sports","","Thinking about you putting a leash on me, and walking me around, like your personal pet.");
			writePhoneSpeech("sports","","Pleeease Master?~");
			writePhoneSpeech("player","","I'll take a look, slave, but I can't promise anything.");
			writePhoneSpeech("sports","","Thank you Master! If you do get it, meet me in the classroom!");
			setTrust('sports',131);
			break;
		}
		case "sportsphoneReward": {
			writePhoneImage("images/sports/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","Congrats! You've finished all of sportsF's content! She's done! Feel free to meet her in the gym and class for some repeat sex scenes. Hope you enjoyed.");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}
var eventArray = [
	{index: "sports2c", name: "Classroom Groping"},
	{index: "sports3b", name: "Classroom Titjob"},
	{index: "sports4b", name: "Mindbreak Sex"},
	{index: "sports5b", name: "Classroom Blowjob"},
	{index: "sports6c", name: "Swimsuit Sex"},
	{index: "sports7b", name: "Take her home"},
	{index: "sports8b", name: "Cat Outfit"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "sports2c": {//She was wrong
			writeSpeech("player", "", "That's perfectly fine, sportsF. I understand. And I can't say I wasn't at least acting like a bit of a pervert, but you are very sexy.");
			writeSpeech("sports", "class.jpg", "I'm... What? playerT playerF, that's not...");
			writeSpeech("player", "", "<i>Relax</i> sportsF. But you know it's bad to judge a book by it's cover. I think you should make it up to me.");
			writeSpeech("sports", "class.jpg", "I... I already apologized, playerT playerF. What...");
			writeSpeech("player", "", "Well, if I'm a pervert, why don't you apologize by doing something perverted for me? Lift up your shirt. So that next time you're on the court I don't have to sneak glances.");
			writeSpeech("sports", "class.jpg", "That... doesn't...");
			writeText("For a moment you're you may have overdone it, before her hands start to move. It seems like for all her mind struggles, her body seems to enjoy this treatment.");
			writeBig("images/sports/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "I was... Right about... You.");
			writeSpeech("player", "", "<i>Relax</i> sportsF. You were right. But I was right about you too. You like this, don't you?");
			writeSpeech("sports", "class.jpg", "I... Don't...");
			writeFunction("writeEvent('sports2d')", "Time to take a risk.")
			updateMenu();
			break;
		}
		case "sports2d": {//She was really right, though
			writeBig("images/sports/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Quiet, sportsF. Just <i>relax</i>.");
			writeSpeech("sports", "class.jpg", "You... Ahh... playerT playerF.");
			writeText("She squirms under your fingers. Whatever fight she had left in her giving way to pleasure as you fondle her breasts.");
			writeSpeech("player", "", "See, that's more like it. Doesn't that feel good?");
			writeSpeech("sports", "class.jpg", "Please... I can't...");
			writeText("The right reaction, but not enough... Maybe...");
			writeBig("images/sports/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "playerT playerF! Ah! That hurts!");
			writeText("She keeps squirming as you suck on her breasts, but despite her protests, when you put a hand under her skirt to check, she's already soaked through her panties.");
			writeSpeech("player", "", "See, I was right. I wasn't the only pervert on that court.");
			writeSpeech("sports", "class.jpg", "I'm... Not...");
			writeBig("images/sports/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "AAH!");
			writeText("Your hands move, rougher and faster, as she finally cracks. You feel her body shake in your hands, as she cums, before she stops fighting and leans into you, knees weak from her orgasm.");
			writeSpeech("player", "", "See. Just two perverts. It's okay, I'll be sure to teach you how to get those urges out healthily.");
			writeText("Still unsteady, she looks up to you, unsure, as you continue.");
			writeSpeech("player", "", "<i>Relax</i> we'll continue these tutoring sessions in the future. Here and after your volleyball practice.");
			writeSpeech("player", "", "Don't tell anyone about this. If anyone asks, tell them the truth. That playerT playerF is helping you relax considering your busy schedule. Helping you learn, and making sure you aren't getting too stressed given all the pressures you have on you.");
			writeText("The fire in her eyes lights up again. Not as strong as before, but still there.");
			writeSpeech("sports", "class.jpg", "You won't get away with this, pervert.");
			writeSpeech("player", "", "But you won't tell anyone.");
			writeText("She opens her mouth, as if to scream at you, before freezing in place. It sunk in. You don't have to worry. Dejected, she looks away.");
			writeSpeech("sports", "class.jpg", "... No playerH.");
			writeSpeech("sports", "class.jpg", "I won't.");
			writeSpeech("player", "", "Good. Now get yourself cleaned up. The school is closing soon. You wouldn't want anyone to catch you here like this.");
			writeFunction("changeLocation(data.player.location)", "As you leave, smile on your face, you hear her cleaning up behind you.");
			updateMenu();
			break;
		}
		case "sports3b": {//Tutor time 2 part 1
			writeSpeech("sports", "class.jpg", "I don't need any help from you, damnit.");
			writeText("Her words have lost a bit of that bite from earlier. Her listing speech would almost sound like a question, if it wasn't for the cursing.");
			writeSpeech("player", "", "Oh, I think you do. Remember last time?");
			writeText("You see her shuffle, legs rubbing against each other, and under her uniform you can see her nipples hardening.");
			writeSpeech("player", "", "I see that you do. Take off your blouse, sportsF.");
			writeText("She lifts her shirt slowly. You can see her breathing pick up, and the slightest moan escapes her mouth as the fabric brushes against her nipples.");
			writeBig("images/sports/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Your breasts are really sensitive, then.");
			writeSpeech("sports", "class.jpg", "Shut up, you bastard. Don't talk to me like that.");
			writeSpeech("player", "", "You really shouldn't be speaking like that to your teacher. I'm just trying to teach you how to make yourself happy and <i>relaxed</i>. The best way to <i>relax</i> is to let go of all that tension you have built up.");
			writeBig("images/sports/3a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Please... Please...");
			writeText("She's almost there. It's time to press your advantage.");
			writeSpeech("player", "", "Please what, sportsF? Tell me what you want me to do, that will make you feel more <i>relaxed</i>.");
			writeText("Whatever fight left in her gives away. Only for a second, but long enough for her to speak.");
			writeSpeech("sports", "class.jpg", "Please teach me how to relax, playerH.");
			writeText("Just a moment of weakness, but that's how you open the door. She's already snapped back a bit, but the desire is there, and now it's real.");
			writeSpeech("sports", "class.jpg", "How did you make me say that, you bastard?");
			writeSpeech("player", "", "I didn't make you do anything. This is what you want, right?");
			writeText("She looks down. She's still angry at you, but she's more angry at herself. But that's fine by you.");
			writeSpeech("sports", "class.jpg", "... Yes playerH. It's what I want.");
			writeText("Barely more than a whisper, but that's more than enough.");
			writeFunction("writeEvent('sports3c')", "Then kneel down, sportsF. Let's relieve that tension.");
			updateMenu();
			break;
		}
		case "sports3c": {//Tutor time 2 part 2
			writeText("She slowly lowers herself to the ground, blouse open, on her knees in front of you.");
			writeSpeech("sports", "class.jpg", "And how is being on my knees supposed to make me relax, you ass?");
			writeSpeech("player", "", "Like this.");
			writeText("As you speak, you lower your pants, pulling out your already hard cock. The look on her face flashes briefly between shock, anger, and just a hint of desire.");
			writeSpeech("sports", "class.jpg", "Holy shit. Why does such an evil bastard have a cock like that?");
			writeSpeech("player", "", "Put it between your tits, sportsF.");
			writeText("You see her shuffle, legs rubbing against each other, and under her uniform you can see her nipples hardening.");
			writeBig("images/sports/3b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She does it slowly. Cursing as she moves. At least, at first.");
			writeSpeech("sports", "class.jpg", "<i>Ahh... Mmm. Fuck, me. Why...</i>");
			writeBig("images/sports/3b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Damn, your breasts are <i>very</i> sensitive. I shouldn't be surprised, considering you came earlier using only your tits, but still. How does that feel, sportsF? Be honest with me.");
			writeSpeech("sports", "class.jpg", "<i>Fuck!</i> It feels good, okay? Your cock feels like an electric current on my skin, you dumb bastard!");
			writeText("Well, you asked for honesty. Your own breathing is starting to pick up now, as she moves faster and her breathing warms your cock as you thrust in and out with her rhythmic movements.");
			writeSpeech("player", "", "I'm getting close, sportsF. Get ready for it.");
			writeText("She barely even hears you, too caught up in her own pleasure. Her movement no longer rhythmic, and now just spasms. Her breathing heavy and irregular, as she fondles her own breasts around your cock, and yanks on her own nipples.");
			writeBig("images/sports/3b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Your own orgasmic grunt is drowned out by sportsF's own cries as she cums.");
			writeSpeech("sports", "class.jpg", "Fuuuck!");
			writeText("You both take a moment to catch your breath, before sportsF seems to realize what's just happened.");
			writeSpeech("sports", "class.jpg", "You fucking asshole! How am I supposed to get home covered like this?");
			writeSpeech("player", "", "That doesn't seem like the proper way to address your teacher, sportsF.");
			writeText("Another moment of hesitation, but this one is shorter. before she looks up at you.");
			writeSpeech("sports", "class.jpg", "... I'm sorry playerH.");
			writeSpeech("player", "", "Almost there, sportsF. But I helped you to <i>relax</i>, now didn't I? Helped you relieve that tension you were feeling. So what should you say?.");
			writeText("This time, just a split second. It won't last like this, she's too strong willed, but every time you get her here it gets easier to bring her back.");
			writeSpeech("sports", "class.jpg", "Thank you, playerH, for helping me relax.");
			writeText("As she says relax you feel a small shudder go through her body over your cock, still snugly placed between her tits.");
			writeSpeech("player", "", "Good girl, sportsF. Now get yourself cleaned up. It's time to go home.");
			writeFunction("changeLocation(data.player.location)", "Another successful day.");
			updateMenu();
			break;
		}
		case "sports4b": {//Back of the gym
			writeBig("images/sports/4-2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "Just gotta... Relax.");
			writeText("You see her shudder. It's always nice to see progress in action.");
			writeSpeech("player", "", "Enjoying yourself sportsF?");
			writeSpeech("sports", "", "Ah! playerH!");
			writeText("As she says that, her body tenses up.");
			writeSpeech("sports", "", "I mean... Fuck. What do you want?");
			writeText("As you get closer to her, you see her legs shifting again. Her shorts are soaked through, and her shirt is nearly translucent with the amount of sweat she's covered in, between her volleyball practice and her own preparation for you.");
			writeSpeech("player", "", "Stand up, sportsF. I told you what I was here for. I'm going to do something for you this time.");
			writeText("Her once steady glare now looks uncertain as she rises to her feet. She's too far under, and far too horny to think straight or fight back.");
			writeSpeech("sports", "", "And what could you possibly do for me, you perverted bas...");
			writeText("While she speaks, you move in. Grabbing her breast and starting in on kisses all up and down her neck, before moving down to her underarm.");
			writeBig("images/sports/4-3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "AH! You perverted... I just got done with a workout, I haven't even showered yet!");
			writeSpeech("player", "", "Are you asking me to stop, sportsF?");
			writeSpeech("sports", "", "I... No, playerH.");
			writeSpeech("player", "", "Oh? So you do want me to keep going? Tell me why.");
			writeSpeech("sports", "", "<i>Fuck you!</i> I'm too horny for this! I can't stop thinking about your cock between my tits, and how your cum felt on my chest as I walked home! I don't want you to stop because I want more!");
			writeText("There wasn't even a hint of hesitation in that outburst.");
			writeSpeech("player", "", "Good girl. See, was that so hard?");
			writeText("Whatever she had that was still fighting back is long gone now. Her breathing picks up again as she gets closer and closer to cumming.");
			writeBig("images/sports/4-4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "I'm gonna cum, I'm gonna...");
			writeText("And then you pull back. Taking your hands and tongue off her body, and leaving her too near the edge to think straight.");
			writeSpeech("sports", "", "No! You fu... playerH. Please. Why did you stop?");
			writeSpeech("player", "", "Lie down, sportsF. And keep touching yourself. You remember what you said to me earlier?");
			writeSpeech("sports", "", "I... What? What are you talking about playerH?");
			writeText("As she speaks, she lies down on the floor, fingers slowly working her glistening cunt.");
			writeSpeech("player", "", "You told me that I would never have you.");
			writeSpeech("player", "", "Do you still think that? <i>Relax</i>, and tell me what you really want.");
			writeText("She's done fighting. The words fall out of her mouth, as soon as you've asked the question.");
			writeSpeech("sports", "", "I want you to fuck me playerH! Fuck me and make me yours!");
			writeText("There's a flash across her face as she says those words. Resignation, followed by embarrassment.");
			writeSpeech("sports", "", "I mean... Please playerH. Please fuck me. I can't stand this.");
			writeSpeech("player", "", "Good girl, and don't worry. After today, you'll definitely be mine.");
			writeFunction("writeEvent('sports4c')", "You lay down behind her and line yourself up, before thrusting yourself in.");
			updateMenu();
			break;
		}	
		case "sports4c": {//Back of the gym continued, first fuck - Breaking
			writeSpeech("sports", "", "OH FUCK! playerH!");
			writeBig("images/sports/4a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Your first thrust takes her by surprise, and you feel her cum as you slide yourself all the way in, her tight cunt already dripping wet and slick making it easy to bottom out in her. As her first orgasm subsides, you feel her go limp in your arms.");
			writeSpeech("player", "", "Oh no, sportsF. We're far from done here. I told you I would make you mine. Now, let's get started.");
			writeText("The smallest moans escape her lips at first, but it's not long before she's screaming in pleasure again as you pick up the pace and use your new toy.");
			writeBig("images/sports/4a2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "Please, playerH! Thank you playerH! Make me yours. Please, please, please!");
			writeSpeech("sports", "", "I'm sorry I ever fought this! I'm sorry for calling you a pervert! Just don't stop!");
			writeText("As you continue, it's all you can do to not blow your load right here and now, but you need to be sure to break her. You hold on as best you can as her pleading loses focus again, turning from sentences, to words, to animalistic moans as she cums over and over again from your merciless thrusting.");
			writeBig("images/sports/4a3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "I can't! I can't! Please! playerH! Please cum! I want it!");
			writeText("That's all you can take. As she screams for you to cum, you let loose inside her.");
			writeBig("images/sports/4a4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("sportsF's words again turn to pleasure drunk screams as she throws her head back.She shakes in your arms and lets loose one final mind shattering orgasm as your cum fills her to the brim.");
			writeSpeech("sports", "", "Thank you playerH... Thank you playerH...");
			writeText("Her words are no louder than a gasp as you pull out of her and admire your handiwork. God, you love this job.");
			writeSpeech("player", "", "Take a breath and <i>relax</i>, sportsF. Tell me how you feel.");
			writeText("Nearly two full minutes pass as she catches her breath before she speaks again. Just as you were afraid you had taken it too far and broken her for good, you hear her start to whisper between ragged pants.");
			writeSpeech("sports", "", "Felt. So. Good. Feel. So. Full. Thanks you, playerH. I'm sorry I ever doubted your methods. Please keep tutoring me.");
			writeSpeech("player", "", "Good girl. But there's something wrong.");
			writeText("A brief look of panic crosses her face, as she sits upright and looks at you in the eyes.");
			writeSpeech("sports", "", "What? What's wrong, playerH? I promise, I'll fix it. Please. If I don't have you, I don't know if I can ever relax again!");
			writeText("Some of that edge and nervousness seeps out as she speaks the word. You smile, and pat her head.");
			writeSpeech("player", "", "What's wrong is that this is no longer tutoring, now is it? And you've gone far past being my student.");
			writeSpeech("sports", "", "It's not tutoring... And I'm not your student? But, playerH, if it's not...");
			writeSpeech("player", "", "Quiet, girl. You're not my student anymore, are you. You're my slave.");
			writeSpeech("sports", "", "I'm your... Slave?");
			writeSpeech("player", "", "And slaves don't get tutoring, do they? No, slaves get training.");
			writeSpeech("sports", "", "Slaves need to be trained...");
			writeSpeech("player", "", "That's right.");
			writeSpeech("sports", "", "So.. then... If I'm your slave... You're...");
			writeSpeech("player", "", "I'm your Master. And you should address me as such when we're alone. Keep behaving like normal when we're not together, otherwise we may get caught. And if we get caught, I'll never be able to help you <i>relax</i> again.");
			writeText("The idea of not being able to relax forces a small protesting mewl out of her mouth, as she speaks up.");
			writeSpeech("sports", "", "I understand Master! Just... Please don't make me wait long for our next training session.");
			writeSpeech("player", "", "Of course not. Clean up here, slave. But leave my cum in you. I want you to walk all the way home with it sloshing inside you.");
			writeText("She smiles. The fire back in her eyes, but now you know that fire is dedication to you.");
			writeSpeech("sports", "", "Right away Master!");
			writeText("You hear her cleaning behind you as you clear the room. Looking back, you see her doing it one handed. The other hand attempting to hold as much cum as she can inside her for her walk home.");	
			writeFunction("changeLocation(data.player.location)", "Time to go home and clean yourself, too.");
			updateMenu();
			break;
		}
		case "sports5b": {//Classroom Blowjob
			writeText("sportsF immediately drops to her knees in front of you.");
			writeSpeech("sports", "class.jpg", "Yes, playerH! Please teach me to be a good cocksucker!");
			writeText("Her eagerness falters as you pull out your cock. Replaced by a mixture of fear, desire, and nervousness.");
			writeSpeech("player", "", "So you really haven't done this before?");
			writeSpeech("sports", "class.jpg", "No Master, my old boyfriend always wanted to try but I never liked the idea of having him in my mouth, it just seemed... Gross.");
			writeText("As she speaks, you notice she seems to be slurring her words. Looking down, you see drool flowing freely from her mouth as she stares at your cock.");
			writeSpeech("sports", "class.jpg", "But after I tasted your cum I couldn't think of anything other than tasting your cock. Having it in my mouth. Licking you up and down, rubbing it all over my face as I put your balls in my mouth.");
			writeText("Oh, this is a treat. You keep letting her speak. She's lost in her own fantasies right now, and it would be a shame to snap her out of them just yet. As she keeps going, you start to rub your cock on her face. Slowly teasing all over, every touch of your cock on her body sending small shockwaves of pleasure as she drools all over herself and spills her desires to you.");
			writeSpeech("sports", "class.jpg", "After licking your balls, teasing all up and down your cock. Then pushing myself lower, and getting my tongue all over your taint as your balls twitch on my forehead. I thought about how it would feel and taste to stick my tongue in your ass. Making sure you were clean all over. Doing everything I could to please my Master.");
			writeSpeech("sports", "class.jpg", "I watched a bunch of blowjob porn last night. Tried to practice deepthroating with my fingers. Pretending my fingers were your massive cock. But nothing could prepare me for how good this would feel. On my knees. Where I should be. In front of my Master.");
			writeText("She looks directly into your eyes now. Looking up with her cock on her face, precum leaking onto her forehead, and drool all over her face, still trailing down and staining her blouse. Looking down, you see her skirt is soaked, as she sits in her own juices.");
			writeSpeech("sports", "class.jpg", "Thank you so much Master, for making me your slave.");
			writeSpeech("player", "", "Open your mouth, slave. And get ready to have your fantasies come true.");
			writeText("She immediately stops speaking and opens her mouth as wide as possible. Her hands jump. No longer touching herself, instead solely focused on guiding you into her mouth and pleasuring you.");
			writeBig("images/sports/5b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("There's no hesitation, as she tries to start by shoving your cock as far down her throat as she can manage. As soon as her tongue touches you, you feel a small orgasmic shake pass through her body as she moans on your cock.");
			writeSpeech("player", "", "Wait, slave! Slow down. Don't push yourself too much at the beginning, or you'll end up with a sore jaw halfway through.");
			writeText("She seems confused, but stops. As she pulls off your cock, she gives a last suck and you hear the satisfying <b>POP</b> as your cock comes free.");
			writeSpeech("sports", "class.jpg", "Ah! <i>cough cough</i>");
			writeSpeech("sports", "class.jpg", "I'm sorry Master, I just needed you in me so badly... Ahh, that felt sooo good.");
			writeSpeech("player", "", "Your enthusiasm is noted, and appreciated, sportsF. But start slowly. Take your tongue and run it up and down my cock. Take my balls in your mouth. Lick up as much precum as you can from my cock, and savor it's taste.");
			writeText("You keep speaking as she gets started, following your instructions to the letter. She never takes her tongue or her hands off of your cock, worshiping it like it was the only thing in the world that mattered to her. She's a very good student.");
			writeSpeech("player", "", "Once you've properly covered my cock in your drool and spit, take the head in. And slowly work your way down until you meet resistance.");
			writeBig("images/sports/5b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She starts to work her way down your cock, slowly moving her head up and down, each time going deeper and deeper. It's all you can do to not blow your load now, but you do want to make sure that she gets some proper practice in. As she moves deeper, you can feel and hear her moaning around your cock, vibrations up and down your shaft as those moans are muffled by your cock.");
			writeSpeech("player", "", "I know it feels good, slave, but don't forget to come up for air every once in a while. When you do, use your hands to keep things going. ");
			writeText("She pulls herself off reluctantly. Catching her breath for a moment before speaking as she works her hands around your shaft and balls.");
			writeSpeech("sports", "class.jpg", "Master, I don't need air. I just need your cock in my mouth. I want to choke on it. This is how I want to die.");
			writeText("Sometimes you scare yourself with how good you are at this.");
			writeSpeech("player", "", "Again, your enthusiasm is noted, but I'd prefer we do this again, and you dying on my cock won't help that. Though maybe one day I can hold you down until you run out of air, and then keep using you as you're passed out.");
			writeText("You can see her shudder at the idea. <i>Damn</i> you're good.");
			writeSpeech("player", "", "Do another run of your tongue from the bottom of my balls to the tip of my cock before you get back to it. It gives you time to rest, and varies the pleasure I feel. While you have my cock in you mouth, use your hands to either stroke the parts of my cock you can't get into your mouth, play with my balls, or, if you really want to push yourself, grab my ass and try to pull yourself in as far as you can. Just be sure not to overdo it. Just like on the court, we don't want you to hurt yourself. Because then you'd need rest before we could do this again.");
			writeText("She gets her mouth back onto your cock. Working her way deeper down, before she hits a limit. When she does, she takes her hands off your cock and grips your ass, trying to pull her way down to your base. To her credit, for a first timer, she made a lot of progress.");
			writeText("You start to get worried she's over done it, but just when you're about to force her off, she slowly pulls herself off with another satisfying <b>POP</b>.");
			writeSpeech("sports", "class.jpg", "I didn't think I'd ever find training that felt better than volleyball, but this feels so much better than a workout.");
			writeText("She gets right back to it, no more pushing herself. She's trying to make you cum now, moving herself back and forth as fast as she can without causing herself much discomfort. She's entirely focused on the job at hand. One more piece of advice.");
			writeSpeech("player", "", "Eyes up slave. Whenever you suck on my cock, you should maintain eye contact as much as possible. I'm nearly there. <i>Relax</i>, look into my eyes, and keep my cock in your mouth as I cum. Keep the cum in your mouth, and savor the taste before you swallow it.");
			writeBig("images/sports/5b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The sight of her blue eyes, desperately looking up to you for her reward is too much for you to take. You finally let go, cumming into your new toy's mouth. sportsF struggles to keep herself from flinching as the torrent of cum streams into her mouth. You even see a little cum has managed to shoot out of her nose. When you finally feel the orgasm subside, you feel as she sucks air in, pulling that glob straight back into her nose, so she can swallow every bit of your load. <i>That</i> is dedication.");
			writeSpeech("player", "", "That's all, slave. Swallow everything, and when you've finished with what's in your mouth, be sure to lick me clean.");
			writeText("You hear her try to say 'Yes Master' with your cock in her mouth. She doesn't waste a moment.");
			writeBig("images/sports/5b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She closes her eyes, and you feel her tongue swirl in her mouth, trying to gather up as much cum as she can while tasting it with every section of her taste buds. You feel her moan as she explores every inch of your cock with her tongue, to make sure she's gathered all the cum she can before she swallows. As she does, you hear the unmistakable sound of another orgasm gushing onto the floor.");
			writeText("Slowly, making sure she licks up any leftover cum as she rises off your cock, she gives one last <b>POP</b> before looking up into your eyes with an open mouth, showing the last remnant of cum in her mouth before she does a theatrical swallow. Opening her mouth again for you to see that she swallowed all of your massive load.");
			writeSpeech("sports", "class.jpg", "Thank you Master, for teaching your slave how to be a proper toy for you! I'll make sure to practice so that I can properly serve you in the future.");
			writeText("This girl is a natural. You want nothing more than to bend her over the desk and fuck her senseless, but you'd never finish up and clean before the janitors came in the morning considering the time, so that will have to wait.");
			writeSpeech("player", "", "You did very well, slave. We need to get this place cleaned up, get started while I go get some supplies from the janitor's closet. We made a bit of a mess.");
			writeText("sportsF looks around, for the first time since you started remembering where she is, probably.");
			writeSpeech("sports", "class.jpg", "Oh, shit. Yes, Master. I'll get right to work.");
			writeFunction("changeLocation(data.player.location)", "You spend the next hour cleaning before heading home for the night.");
			updateMenu();
			break;
		}
		case "sports6c": {//Swimsuit Sex
			writeText("You make your way to the locker room, making sure that no one spots you as you sneak your way in.");
			writeText("Working your way in, the locker room itself seems to be empty, but you can hear a shower running just a bit further in.");
			writeText("You start to move quicker, cock hardening as you move towards the shower and spot sportsF. You quickly strip and call out.");
			writeSpeech("player", "", "Slave, I told you to be ready for me. I wanted to see you in your swimsuit, why are you still naked?");
			writeText("sportsF flinches, apparently she thought she had more time.");
			writeSpeech("sports", "", "Ah! I'm sorry, Master! I wanted to be sure I was clean for you. Last time I hadn't gotten a chance to shower before... I'll change right away!");
			writeSpeech("player", "", "Quiet. Work quickly, slave.");
			writeText("She nods frantically. You don't really care that she wasn't changed yet, but it's always nice to see her flustered. She quickly moves to her locker and fiddles with the lock, cursing as in her haste she screws up the combination.");
			writeText("Once she's finally opened her locker, she begins to get dressed. Once again, moving a little too quickly for her own good. She's too wrapped up in her own head to hear you get up and move behind her. You pounce as soon as she's snapped her shoulder straps on, grabbing her tits, and shoving yourself into her already wet snatch.");
			writeBig("images/sports/6c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "Ahh!~ Master!~");
			writeText("She tightens up like mad as you force your way in. You don't know whether she came, she's trying to milk you, or she was just too surprised to let herself relax. Either way, the tightness as you wiggle your way deeper and deeper into her cunt is heavenly. As you fuck her, you fondle her tits, each squeeze causing more desperate cries to escape her lips. Something about the swimsuit strikes you as off, though...");
			writeSpeech("player", "", "You wear this in class, slave? Or did you do something special just for me? This swimsuit seems tighter than the ones I usually see the students wear.");
			writeSpeech("sports", "", "I... Master! I switched swimsuits the first time you asked me about it! When you said that you wanted to see me in my swimsuit, the idea made me so hot!");
			writeText("You slow your thrusts and start to tease her with your movements, giving her time to breathe and answer your questions.");
			writeSpeech("player", "", "So, you swapped to a tighter swimsuit so that...");
			writeSpeech("sports", "", "So that if you did come and see me you'd see <i>all</i> of me. And so that the entire time I'd have my cunt rubbed, my nipples teased. This material clings so well to me, and it feels so good when it moves, and rubs my sensitive spots.");
			writeText("You stop. That timeline doesn't quite add up...");
			writeSpeech("player", "", "Damn, even back then, when you weren't fully under my control?");
			writeText("She looks you in the eyes, your cock bottomed out in her, your hands squeezing her tit, frozen in place as she confesses to you from the bottom of her heart.");
			writeSpeech("sports", "", "Master, I've been under your control since the first time I saw you in the gym. I just didn't know it until far too late.");
			writeSpeech("sports", "", "Now, Master. Use. My. Cunt. Fuck me senseless. And make me whole.");
			writeText("No need to tell you twice. It's time to pick up the pace.");
			writeBig("images/sports/6c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You move faster and faster, and you feel her respond in kind. You can feel her moving as you hold her up, moving her hips back and forth as much as she can while she's held like this. When you squeeze her tit, you feel her cunt clench, bringing you closer and closer to the edge.");
			writeSpeech("player", "", "Get ready, slave. I'm going to fill you up.");
			writeText("There aren't any words, she's too focused on pleasuring you too form a coherent thought, but you feel her lean forward and redouble her efforts. She gives up any real control she had, and turns into a pliable toy in your hand, doing everything she can to move with your desires and milk your cock for all it's worth.");
			writeBig("images/sports/6c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you cum, you squeeze her breast as hard as you can, and pull her back into you. She screams in pleasure and you feel her own orgasm as she twitches and tries desperately to hold herself up.");
			writeBig("images/sports/6c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "", "Aah~. Hah~. Thank you for using me, Master. I hope your fuck toy did a good job today.");
			writeText("You grab her hair and turn her head, planting a quick kiss on her forehead.");
			writeSpeech("player", "", "You did very well slave. Get yourself cleaned up. I'm going to leave now. Send me a text in the morning, I'll have tasks for you.");
			writeSpeech("sports", "", "Yes Master. I'll be sure to text you as soon as I'm awake.");
			writeFunction("changeLocation(data.player.location)", "You move toward the door, planning your next move..");
			updateMenu();
			break;
		}
		case "sports7b": {//Take her home
			writeText("A few hours, and a little bit of cleaning later, you hear a knock at the door.");
			writeText("As fun as it would be to make her wait... You probably shouldn't have a desperate and horny student hanging outside your door unsupervised if you want to stay unnoticed.");
			writeText("You move quickly to the door and let sportsF in. The moment the door closes, she latches onto you, pushing you into a nearby chair.");
			writeSpeech("sports", "class.jpg", "Master!~ Ahh!~ I was looking forward to this so much.");
			writeText("You cut her off with a kiss, when you pull back, lifting her shirt and pulling up her skirt as you do it.");
			writeBig("images/sports/7b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "No panties?");
			writeSpeech("sports", "class.jpg", "Why wear clothes I only know will get ruined?");
			writeText("You get back to kissing her. As you do, you feel her rubbing her wet snatch against your cock, though your pants, which are already soaked.");
			writeBig("images/sports/7b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Master!~ I can't wait.~");
			writeText("She reaches down desperately. Unzipping your pants and ripping your cock out, before rubbing it against her wet pussy. Teasing both of you, and lubing your cock up for entry before slowly lining you up to her entrance and sliding you in.");
			writeBig("images/sports/7b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Yeeesss!~");
			writeSpeech("sports", "class.jpg", "Master, thank you!");
			writeText("She's too far gone in her own lust to stop at this point, so you just let her go- wildly bucking up and down on your cock, pleading for you to fill her. She's not the only one who couldn't wait for this, after all. May as well enjoy her doing most of the work.");
			writeText("She starts moving more erratically, and you feel yourself ready to cum. You give her one last push, and feel her go limp in your arms as your cock twitches and spurts inside her.");
			writeBig("images/sports/7b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("A few minutes pass like this as you both catch your breath. She moves first, slowly pulling herself off of your cock before getting down on her knees and bowing her head low.");
			writeSpeech("sports", "class.jpg", "I'm sorry for that, Master, I just... I needed you. Please forgive your lowly slave.");
			writeText("Seeing her prostrate her in front of you, you know there won't be a problem finding a round two. Or three. Or four, tonight.");
			writeSpeech("player", "", "I forgive you, slave, but remember, I plan to fill all your holes today. I hope you came prepared.");
			writeText("She looks up from her bow, eyes resolute.");
			writeSpeech("sports", "class.jpg", "I've never been more ready for anything in my life, Master.");
			writeText("You smile, and pet her head, before grabbing a fistfull of hair and pulling her up to her feet. You hear a moan of pleasure as you drag her back to your mouth for a kiss.");
			writeFunction("writeEvent('sports7c')", "Then get me hard again, slave. We have work to do tonight.");
			updateMenu();
			break;
		}
		case "sports7c": {//Take her home
			writeBig("images/sports/7c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her hand rubs along the length of your shaft as you kiss. Lightly touching up and down, making sure the whole thing is still coated and lubed with her own sex's juices as she begins to jerk you off, getting you ready to use her again.");
			writeBig("images/sports/7c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Master! Ahh~ How do you want to use your slave?");
			writeText("She keeps moving her hand, and your cock quickly finds itself ready for round two.");
			writeSpeech("player", "", "Get onto the bed. On all fours, head down, ass up, like when you were begging forgiveness. I'm going to use your ass.");
			writeText("You push her down to her knees, and she looks up at you in understanding before crawling to your bed. Making a show, moving slowly, swinging her shapely ass as she moves to your bed.");
			writeText("Once she's made it to the bed, she puts her head all the way down, facing away from you, back arched, hands in front of her stretched out. Her ass, up in the air, slightly waving as she waits for you to use her.");
			writeText("And you wait. Slowly stroking yourself to the sight, but not moving closer to her.");
			writeText("At first, she's patient. She thinks you're teasing her. But as you wait, you see her start to panic. Was something wrong? Did she not do something right? Is there something she forgot?");
			writeText("Then, it suddenly clicks.");
			writeSpeech("sports", "class.jpg", "PLEASE MASTER, USE ME! FILL MY ASS!");
			writeText("That's what you were waiting for. You quickly line yourself up, running your cock once more along her cunt to wet yourself and make sure you're nicely lubed before placing the head of your cock on her puckered asshole.");
			writeText("And you spank her as hard as you can manage before forcing your way in.");
			writeBig("images/sports/7c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "That's a good little slut!");
			writeText("You can't go very quickly at first, but she quickly loosens up as you go. As you pick up the pace, you grab onto her hands, pulling her up and forcing her to move herself.");
			writeText("As you settle into a rhythm, you feel her gushing on your thighs.");
			writeSpeech("player", "", "Oh, it turns out my slave is a proper butt slut!");
			writeBig("images/sports/7c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She tries to speak, before you pick up the pace again, cutting off any words she had and replacing them with screams and moans.");
			writeSpeech("player", "", "I'm getting close, slave. Are you ready to have your ass filled?");
			writeSpeech("sports", "class.jpg", "Yeeesh!~ Fill me Master!~");
			writeBig("images/sports/7c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You push in as deep as you can, and let go. Her ass twitching and squeezing your cock of every last drop of cum.");
			writeText("When you finally feel your orgasm subside, you start moving yourself out slowly. Giving her ass one last smack as you pop your cock out and admire her gaping hole.");
			writeSpeech("sports", "class.jpg", "Thank you Master... I never thought anal would feel so good. Ahh.");
			writeFunction("writeEvent('sports7d')", "We're not done yet. I did say I'd fill ALL your holes.");
			updateMenu();
			break;
		}
		case "sports7d": {//Take her home
			writeText("She moves slowly at first, still shaky from her first ass fucking, but she knows what it is you want.");
			writeText("You sit on the edge of the bed, and she crawls down, kneeling in front of you. As she settles in, you can see a small puddle of cum forming below her as she leaks onto the floor.");
			writeBig("images/sports/7d1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Of course, Master. After all, all of my holes, all of my being, belongs to you. I'd be honored to clean your cock with my body.");
			writeText("And once again, your cock which had been softening, begins to harden as she plays with your cock. First, with her hands, making sure you're hard again, before wrapping her tits around your shaft.");
			writeSpeech("sports", "class.jpg", "And the only proper tool I have to clean you are my breasts.. And my mouth.");
			writeText("She slowly rubs your cock between her breasts, before pulling back. Once your cock is free, she moves her mouth down to your balls. Taking each one into her mouth individually, and swirling her tongue around them. Slowly working her way up, before she licks from the base of your cock all the way to your head. She takes your cock head into her mouth moving her tongue in small circles as you feel her play with your urethra. She pulls back briefly and looks up at you. With a wink, she slowly works her head all the way down, nearly taking you to the base, filling her mouth and throat with her cock. She holds there for a moment, before pulling back up, and getting her tits around your cock once again.");
			writeSpeech("sports", "class.jpg", "I've been practicing.");
			writeText("You grunt your approval as she gets back to work. She moves her tits around your cock faster and faster, occasionally giving you a break before shifting from her breasts to her mouth, and back again.");
			writeBig("images/sports/7d2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("It takes a long while and a lot of work on sportsF's part, but you finally come close to orgasm number three as she gets back to her titjob.");
			writeSpeech("sports", "class.jpg", "Please, Master. Cum on me. Mark me as yours.");
			writeText("She sticks out her tongue, licking your cock as she keeps jerking you off with her tits. The whole thing is finally too much as you cum again.");
			writeBig("images/sports/7d3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The first spurt catches you both by surprise, but sportsF quickly gets her mouth around your cock head and starts to swallow. You feel her tongue playing with yout tip, and she keeps moving her tits around your cock until you've finally stopped. Doing one last pass with her tongue, she pulls her mouth off of you, and gives a final theatrical gulp.");
			writeBig("images/sports/7d4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "class.jpg", "Delicious!~");
			writeText("A few deep breaths, and sportsF looks up to you again.");
			writeSpeech("sports", "class.jpg", "So how do you want me next, Master?");
			writeFunction("changeLocation(data.player.location)", "You spend all night using your fucktoy. Damn, this girl has endless energy.");
			updateMenu();
			break;
		}
		case "sports8b": {//Cat Outfit
			writeText("You're not home for long before sportsF knocks on the door, and you let her in.");
			writeText("She looks around briefly before seeing the camera you've set up near the bed.");
			writeText("She moves in front of it before asking.");
			writeSpeech("sports", "sportsP.jpg", "You want to record this, Master?");
			writeText("You smile and nod.");
			writeSpeech("player", "", "So be sure to put on a show, pet.");
			writeText("She nods her head once, before taking a deep breath and putting on a smile. Then, she begins stripping, sensually letting her uniform fall to the ground every time she removes a piece. Seems like she wore the lingerie under her uniform on the way over to meet you.");
			writeBig("images/sports/profileP.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Your pet is here to serve you, Master.");
			writeBig("images/sports/8b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Then it's time to get to work, little kitty.");
			writeText("She sinks to her knees and crawls to you. You pat her head, and lead her into the bedroom, sitting on the bed before calling her into your lap.");
			writeBig("images/sports/8b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You work your tongue into her mouth as she grinds on your cock.");
			writeBig("images/sports/8b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You pull back for a moment and enjoy your pet's look of ecstacy before continuing.");
			writeBig("images/sports/8b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You begin to push her onto her back, but she stops you.");
			writeSpeech("sports", "sportsP.jpg", "No, Master, today I'm showing you my appreciation. Please, lie back, and let your pet do all the work.");
			writeFunction("writeEvent('sports8c')", "You lay back as your pet starts to straddle you.");
			updateMenu();
			break;
		}
		case "sports8c": {//Cat Outfit
			writeText("As you lie there, your pet rubs your cock against her slit, teasing her entrance before she smoothly lowers herself down.");
			writeBig("images/sports/8c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Nyaaa!~");
			writeText("She seems to be taking her role as a pet seriously, as she moves, you hear her purr and cry out, mimicking the sounds of a cat... Or, more accurately, mimicking the sounds of cat girl porn.");
			writeBig("images/sports/8c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "That's it, kitty. Keep it up");
			writeText("sportsF is an athletic girl, and you've never been disappointed by her stamina. She picks up the pace as you speak, bouncing up and down with her whole body, making sure to never let you slip out of her tight cunt.");
			writeBig("images/sports/8c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Mmm!~ Master!~ I'm going to cum! Please, cum with me! Cum inside your slutty kitty!~");
			writeText("Her pace and cries are too much. With a cry, you let loose into her, feeling her own orgasm triggered by the first spray of cum filling her.");
			writeBig("images/sports/8c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Ahh!~");
			writeText("Her face contorts, and her eyes lose focus as she loses herself in the pleasure of being used by her Master.");
			writeBig("images/sports/8c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("sports", "sportsP.jpg", "Thank you for using me Master. Is there anything else my Master desires from me?");
			writeFunction("changeLocation(data.player.location)", "Looks like you have another long night ahead of you.");
			updateMenu();
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
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map") { //check the location
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