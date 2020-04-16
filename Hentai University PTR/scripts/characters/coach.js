var character = {index: "coach", fName: "Amy", lName: "Silver", trust: 0, encountered: false, textEvent: "", met: false, color: "#D7BB2E", author: "Slackersavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};

var logbook = {
	index: "coach", 
	desc: "The University's sports Director. From what you know, she's a bitch.",
	body: "A blonde bombshell, she's apparently a former star track athlete brought to the school to try and boost the campus' sports program. She gets results, but her methods and personal conduct leave a lot to be desired.",
	clothes: "While working, she tends to wear a track suit, apparently a hold over from her old days.",
	home: "Usually found lazing about in the teacher's lounge. Usually given a wide berth, given that she refuses to stop smoking in there, no matter how many times she's been chastized for it.",
	tags: "",
	artist: "Himitsu Kessha Vanitas",
	author: "Slackersavior",
};

var newItems = [
	{name: "School Uniform", 				key: true, 		price: 40, 	image: "scripts/gamefiles/items/schooluniform.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "coach1", name: "You see coach smoking at her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach2", name: "coach is staring at her phone as you approach.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 35, trustMax: 39, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach3", name: "coach is playing with her phone, she looks up as you get close to her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 50, trustMax: 55, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach4", name: "coach is waiting for you at her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 75, trustMax: 80, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach5", name: "coach is looking over student files at her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 105, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach6", name: "coach is working quietly.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 106, trustMax: 110, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach7", name: "coach has her student files out again, ready for your next introduction.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 111, trustMax: 120, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach8", name: "coach gets up from her desk as you enter, leaning into your ear.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 121, trustMax: 130, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach9", name: "coach has the last file in her hands.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 130, trustMax: 135, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach10", name: "coach is relaxing at her desk, waiting on you.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 136, trustMax: 140, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coachfinal", name: "coach is working on something as you swing by her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 195, trustMax: 210, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "coach1": {
			writeText("You stride up to coachF's desk resolute. You have everything you need, now all you need to do is get her isolated...");
			writeSpeech("player", "", "coachF, I have something I'd like to speak to you about...");
			writeSpeech("coach", "", "Pfft. I'm not going to stop smoking in here. When are you all going to learn?");
			writeBig("images/coach/1a.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She isn't even looking at you.");
			writeSpeech("player", "", "coachF, this is serious. I need you to come with me.");
			if (data.player.counseling > 3) {writeFunction("writeEncounter('coach1a')", "She looks at you quizzically for a moment, but then stands up and walks with you.");}
			writeFunction("writeEncounter('coachfail')", "She barely even registers you as she tells you to piss off.");
			break;
		}
		case "coach1a": {
			setTrust('coach', 30);
			writeText("She walk with you to your office, putting out her cigarette as she moves.");
			writeSpeech("coach", "", "So apparently you're some kind of wonderboy for the University, so I can't ignore you anymore.");
			if (checkFlag("principal", "kuroF")==true){
			writeSpeech("coach", "", "I hear you cleaned up that tramp who hangs around the roof.");}
			if (checkFlag("principal", "neetF")==true){	
			writeSpeech("coach", "", "You dealt with the principal's 'gremlin' problem");}
			if (checkFlag("principal", "starletF")==true){
			writeSpeech("coach", "", "You worked with that crazy girl who wants to be a pornstar? Man, this school is wild.");}
			if (checkFlag("principal", "purpleF")==true){
			writeSpeech("coach", "", "And... you helped out purpleF. Sweet girl, but she needs to toughen up.");}
			if (checkFlag("principal", "scarfF")==true){
			writeSpeech("coach", "", "Though I imagine the reason you're dealing with me is that scarfF now cleans her desk. I'm not going to be as nice, though.");}
			writeSpeech("player", "", "coachF, I have reports that you have been treating the students like workhorses. There have been multiple cases of students complaining about their treatment, both in and out of practice. You belittling them, berating them, in at least a few cases getting physical. This behavior is unacceptable.");
			writeSpeech("coach", "", "Hah! Is that all? You think this is the first time they've brought me in for a little disciplinary warning? Look here, you punk, my station here is secure. You can put down the fact that you gave me a warning, that you made sure I knew I was being watched, and then you and I can go back to our corners and never speak to each other again.");
			writeText("Well, you knew she was a bitch... Time to play your trump card.");
			writeSpeech("player", "", "That's not the only unacceptable behavior I've been made aware of, coachF. Tell me, do you go to the beach often?");
			writeText("Her expression falters a bit, and her eyes narrow.");
			writeSpeech("coach", "", "... My boyfriend and I go there often. Why? Is that some sort of crime?");
			writeSpeech("player", "", "Well, no, but I have to wonder how the university would react if they knew what you and your boyfriend got up to at the beach.");
			writeText("Her expression falters a bit, and her eyes narrow. You flash the photo sportsF sent to you.");
			writeBig("images/coach/sportsphone2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her face drops, before twisting into a scowl.");
			writeSpeech("player", "", "How do you think the University would react to this picture being made public?");
			writeSpeech("coach", "", "You goddamned bastard.");
			writeSpeech("coach", "", "... What do you want?");
			writeText("That... Honestly went smoother than expected. You had a hand on your pendant in your pocket and the other ready to swing if things had gotten violent, but it seems she's willing to play ball, at least for now.");
			writeSpeech("player", "", "It's simple, coachF. I don't really care about what you're doing with your boyfriend, but I do care about this school. I want you to start taking this job seriously. I'm going to give you a series of training and orientation videos, and I want you to watch them and take them to heart. The students and faculty here deserve to be treated better than how you've been acting.");
			writeText("She laughs.");
			writeSpeech("coach", "", "Are you serious? You have a picture of me with my tongue in my boyfriend's asshole, and what you ask for is for me to go through NEO? Fuck it, FINE. But after that, you delete that picture, and if I ever see you anywhere off this campus I'm going to wring your neck until it's narrow enough to use as a straw.");
			writeSpeech("player", "", "Deal, coachF. But I think by the time you're done with the course, you'll practically be a different person. And I think by the end, you'll like the new you a lot more than how you are now.");
			writeFunction("changeLocation(data.player.location)", "She scoffs and leaves your office. Time to get to work preparing some employee training material.");
			passTime();
			break;
		}
		case "coach2": {
			writeText("You approach coachF slowly. The more she looks at the preview you sent, the more effective the total package will be when she walks into it. But it looks like your caution was unwarranted, it takes you knocking on her desk to break her focus on the phone's screen.");
			writeSpeech("coach", "", "Gah! Fucking! Goddamn, playerF! Don't sneak up on me like that, next time I'll sock you square in the jaw!.");
			writeText("You flash her your signature smile.");
			writeSpeech("player", "", "Come on, coachF, you knew I was coming, and I walked straight up to your desk. It's not like I was sneaking. Or were you distracted by something?");
			writeSpeech("coach", "", "I... Fucking... Was I? I dunno, my focus has been off all day. I think I slept shitty last night or something.");
			writeText("Your preview is working better than you could have hoped. Here's hoping the rest works even better.");
			writeSpeech("player", "", "Well, I hope you don't fall asleep during your orientation video. If you do, you know I'm going to make you watch it again.");
			writeText("She narrows her gaze, and you can swear as she pulls her lips back you see fangs.");
			writeSpeech("coach", "", "Fuck you, playerF, why should I...");
			writeText("A shake of your phone is all the reminder she needs. You still have the leverage here. And it's not like you're asking for too much.");
			writeText("Or so she thinks right now.");
			writeSpeech("coach", "", "FINE. If I fall asleep, I'll watch it all over again. How long is this fucking thing, anyways?");
			writeSpeech("player", "", "Nope. Not telling you. If I do, you'll set an alarm at the end of it, and you'll just sleep through it anyways.");
			writeText("A scowl forms on her face. Yep, that had been her plan, alright.");
			writeSpeech("player", "", "In fact, I think if that's how it's going to be, I'll need to supervise your orientation myself.");
			writeText("Her eyes practically barrel roll out of her head.");
			writeSpeech("coach", "", "I can watch a damn video myself, fuckhead. But if that gets you off my back, fine. Feel free and enjoy me suffering through your home movies.");
			writeFunction("loadEncounter('coach', 'coach2a')", "You lead her to your office.");
			writeFunction("changeLocation(data.player.location)", "I'm not quite ready yet, I'll be back when I am.");
			break;
		}
		case "coach2a": {
			passTime();
			setTrust('coach', 50)
			writeText("You sit behind your desk and invite coachF to sit in one of the chairs across from you.");
			writeSpeech("coach", "", "Oh, boy, is this where the counseling happens? Oh, playerT playerF, I just can't stand my classes lately. Feh.");
			writeText("You sigh as you get things set up on your laptop.");
			writeSpeech("player", "", "Here's hoping that these videos turn you around. These students really deserve better than the ways you've been treating them.");
			writeSpeech("coach", "", "Oh yeah, and I'm sure you treat them <i>much</i> better than I do. Come on, you never tried to get a little physical with any of the girls with daddy issues?");
			writeText("... She may have hit the nail on the head. You're going to get her back for that one. You make a show of giving an exasperated sigh and a pointed look before continuing.");
			writeSpeech("player", "", "No, coachF. I don't take advantage of the students. What I do is everything in my power to make sure they're happy, healthy, and live a meaningful life.");
			writeText("I mean, it's pretty much the truth. Aside from the 'not taking advantage of the students' thing. You hear her chuckle as you finish your false indignation");
			writeSpeech("coach", "", "Yeah, yeah, Mr. Goody Two Shoes. Just get this video playing so I can get out of here.");
			writeText("Well, she asked. You turn your laptop around, pressing play as the monitor is turned to face coachF.");
			writeText("The video starts up with that spiral logo, and you see her eyes lose focus as she watches. It took a few days work, but between the soundtrack, your homemade voiceover, and the subliminals embedded in the video itself, you know you've outdone yourself this time.");
			writeText("You spend the next hour just watching as coachF takes in your training program.");
			writeSpeech("player", "", "Remember, you're here to help. Everyone here on campus is counting on you. Make sure to respect your students, and your coworkers.");
			writeText("You couldn't push too hard at first. Too much all at once would cause her to slip out and lead to some probably violent outbursts, given her attitude.");
			writeSpeech("player", "", "And in turn, your coworkers will help you. Trust them. You can count on them. They'll tell you what to do, and following their advice will make your life easier, happier, and more fulfilling.");
			writeSpeech("player", "", "So now, coachF. Sleep. Get some rest.");
			writeText("coachF had been relaxed in the chair before, but upon hearing the video, she rolls her head back. It could have been cute, but about a minute after the video ends, she's snoring louder than a car engine. You let her sleep for a bit, making sure everything seemed to work right, before moving over to her and shaking her.");
			writeSpeech("player", "", "coachF. Hey. coachF. I think I won the bet. You ready to watch another video tomorrow?");
			writeSpeech("coach", "", "Mmm... Fucking... Fine. Just let me sleep a few more minutes. At least while I'm doing this I get paid to nap at work.");
			writeFunction("writeEvent('coach2b')", "Fine, but first, stand up.");
			break;
		}
		case "coach3": {
			writeText("coachF looks up from her phone.");
			writeSpeech("coach", "", "playerF. Here to show me another home movie?");
			writeText("Her tone isn't great, but she isn't actively cursing at you. And while she has a cigarette in her mouth, it isn't lit.");
			writeSpeech("player", "", "Not smoking today?");
			writeSpeech("coach", "", "scarfF asked me to stop, so I put my last one out.");
			writeText("Yep. Video worked like a charm.");
			writeFunction("loadEncounter('coach', 'coach3a')", "Time for the next one.");
			writeFunction("changeLocation(data.player.location)", "You're not quite ready yet. Maybe later.");
			break;
		}
		case "coach3a": {
			passTime();
			setTrust('coach', 70)
			writeText("You move behind coachF's desk, and lean in to whisper in her ear.");
			writeSpeech("player", "", "Are you ready to learn how to be a good little slut now?");
			writeText("coachF smiles, whispering back as she stands up quickly.");
			writeSpeech("coach", "", "Of course, playerH. I'll be anything you want me to be.");
			writeText("You lead her down the hall to your office, shutting and locking the door ");
			writeSpeech("coach", "", "Now let's get...");
			writeText("coachF had been stripping before she turned around and saw you setting up your laptop for another presentation.");
			writeSpeech("coach", "", "Oh you have got to be fucking kidding me.");
			writeSpeech("player", "", "Nope. I told you you'd need to watch another orientation video.");
			writeText("coachF throws up her hands in frustration.");
			writeSpeech("coach", "", "This is not what I meant when I said you need to treat me right, fucker.");
			writeText("She's upset, but she is sitting down. Getting a cigarette lit as you fiddle with the laptop.");
			writeSpeech("player", "", "Tell you what, you make it even halfway, I'll be sure to make it worth your while.");
			writeSpeech("coach", "", "And if I don't 'the pictures'. Yeah, fucking, yeah. Here I was ready to blow your dumb ass, and all you want is showing off your goddamned...");
			writeText("You sigh and hit play. No reason to keep this going longer than it needs to be.");
			writeFunction("writeEvent('coach3b')", "coachF focuses on the screen, as the video starts to run.");
			break;
		}
		case "coach4": {
			writeText("You move to coachF's desk, and she looks up from the papers in front of her. Once again, her cigarette is in her mouth, but unlit.");
			writeSpeech("player", "", "How are you doing today, coachF?");
			writeText("She smiles, it actually seems halfway genuine.");
			writeSpeech("coach", "", "It's going alright. principalF asked me to look through some potential recruits coming to the school, so I've been kind of busy...");
			writeText("She leans forward, and her smile goes from halfway genuine to true as she looks at you.");
			writeSpeech("coach", "", "But if you need me for something, playerH, of course I can help you.");
			writeText("She reaches down as she speaks, feigning an adjustment to her jacket, but clearly giving you a look to her bare chest beneath it.");
			writeSpeech("coach", "", "So did you need me for anything today, playerH? I've been so looking forward to our next lesson...");
			if (checkItem("School Uniform") == true){writeFunction("loadEncounter('coach', 'coach4a')", "In fact, I am ready for your next lesson.");}
			writeFunction("changeLocation(data.player.location)", "You still need to buy her a uniform, another day it is.");
			break;
		}
		case "coach4a": {
			passTime();
			setTrust('coach', 81)
			writeSpeech("player", "", "I am actually ready for your next lesson.");
			writeText("You see her face light up as you lean in.");
			writeSpeech("player", "", "But you, are not, my little slut.");
			writeText("You drop the bag with the school uniform behind her desk.");
			writeSpeech("player", "", "Put that on, I'll meet you in your house, slut. It's time for you to get a proper education.");
			writeText("coachF looks down into the bag, before nodding back up to you.");
			writeSpeech("coach", "", "I can't wait, playerH.");
			writeFunction("writeEvent('coach4b')", "coachF texts you her address quickly, and about half an hour later, you're at her place.");
			break;
		}
		case "coach5": {
			writeText("You call to coachF as she works.");
			writeSpeech("player", "", "coachF, are you ready to get started on that student wellness project?");
			writeText("She smiles up at you as you pull a chair close enough to whisper.");
			writeSpeech("player", "", "I take it those are the student files I sent you?");
			writeText("She fans the files out in front of you, nodding.");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Yes, playerH. I've talked to all of them. They've been told that during practices or classes they'll be asked to see you in an effort to check in on the mental health of the team. They're not super excited about it, but it seems like sportsF has been telling them that you helped her a lot, so they all at least understand.");
			writeText("She looks into your eyes and whispers.");
			writeSpeech("coach", "", "So, sportsF...?");
			writeText("You nod.");
			writeSpeech("player", "", "Another one of mine. She actually got me the picture of you sticking your tongue in your boyfriend's ass.");
			writeSpeech("coach", "", "You cheeky fucker!");
			writeText("She quickly covers her mouth, realizing what she just said, but you laugh it off.");
			writeSpeech("player", "", "That's fair. Besides...");
			writeText("You lean in to her ear, whispering harshly.");
			writeSpeech("player", "", "I'll be sure to make you pay for that later, slut.");
			writeSpeech("coach", "", "I'm sorry, Master. Thank you Master.");
			writeFunction("loadEncounter('coach', 'coach5a')", "You look over the files. Time to make a decision.");
			writeFunction("changeLocation(data.player.location)", "You were just checking in, you'll come back later.");
			break;
		}
		case "coach5a": {
			setTrust('coach', 106)
			writeSpeech("player", "", "So, what should I know about each of these girls?");
			writeText("coachF gets back to business, laying out the files again.");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "orangeF. She's a bit of a firebrand. New to the team. She could probably use some anger management counseling.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "swimmerF. She seems to have trouble keeping focus. She puts in a lot of energy, but her results are always a mess.");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "coldF. She's smart, and she gets along well with people, but she's never really clicked with most of the team. From what I understand, she doesn't spend much time out.");
			writeSpeech("coach", "", "So, playerH, who was it you wanted to meet today?");
			writeFunction("loadEncounter('orange', 'orange1')", "I'll meet with orangeF. Probably best to get her anger issues under control.");
			writeFunction("loadEncounter('swimmer', 'swimmer1')", "swimmerF could use some help. We don't want our students struggling.");
			writeFunction("loadEncounter('cold', 'cold1')", "coldF seems like a good candidate, send her to my office.");
			break;
		}
		case "coach6": {
			writeSpeech("coach", "", "So did your meeting go well, playerH?");
			writeSpeech("player", "", "It did. Things are coming along nicely with them.");
			writeSpeech("coach", "", "So... Did I earn my reward, playerH?");
			writeFunction("loadEncounter('coach', 'coach6a')", "You did, slut. Come with me.");
			writeFunction("changeLocation(data.player.location)", "Not just yet. I still have more work to do.");
			break;
		}
		case "coach6a": {
			setTrust('coach', 111)
			passTime();
			writeText("coachF can barely contain herself as she stands up.");
			writeSpeech("coach", "", "Meet me at my place, then playerH. We'll work out the specifics there.");
			writeFunction("writeEvent('coach6b')", "Not long after, you walk into coachF's home.");
			break;
		}
		case "coach7": {
			setTrust('coach', 121)
			writeSpeech("coach", "", "Ah, playerH! Who is it you wanted to see this time?");
			if(checkTrust('orange') == 0){
				writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "orangeF. She's a bit of a firebrand. New to the team. She could probably use some anger management counseling.");
				writeFunction("loadEncounter('orange', 'orange1')", "I'll meet with orangeF. Probably best to get her anger issues under control.");
			}
			if(checkTrust('swimmer') == 0){
				writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "swimmerF. She seems to have trouble keeping focus. She puts in a lot of energy, but her results are always a mess.");
				writeFunction("loadEncounter('swimmer', 'swimmer1')", "swimmerF could use some help. We don't want our students struggling.");
			}
			if(checkTrust('cold') == 0){
				writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "coldF. She's smart, and she gets along well with people, but she's never really clicked with most of the team. From what I understand, she doesn't spend much time out.");
				writeFunction("loadEncounter('cold', 'cold1')", "coldF seems like a good candidate, send her to my office.");
			}
			break;
		}
		case "coach8": {
			writeText("coachF whispers as she passes you in the doorway.");
			writeSpeech("coach", "", "I hope the new girls have been to your liking, playerH.");
			writeText("You pull back and answer.");
			writeSpeech("player", "", "They have been, coachF. I expect you'll see their behavior improving very soon.");
			writeText("She pushes by you, leaving the teacher's lounge as she whispers again.");
			writeSpeech("coach", "", "Thank you, playerH. I'll be at home for the next few hours. Can I expect you?");
			writeFunction("loadEncounter('coach', 'coach8a')", "You've done well. I'll meet you soon.");
			writeFunction("changeLocation(data.player.location)", "I have other plans today, slut. You'll get yours soon.");
			break;
		}
		case "coach8a": {
			setTrust('coach', 131)
			passTime();
			writeText("You decide to take your time today. You send coachF a text, telling her to wait for you- touching herself and keeping herself ready for you until you arrive, not to cum until you've arrived. Then, you wait. You give her about an hour before you stride into her door.");
			writeBig("images/coach/selfienude.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ahh!~ Master! Please... I can't take much more...");
			writeFunction("writeEvent('coach8b')", "Who would you be if you kept her waiting any longer?");
			break;
		}
		case "coach9": {
			setTrust('coach', 136)
			writeSpeech("coach", "", "Last candidate for our student wellness program. I'll send her up to your office, playerH.");
			if(checkTrust('orange') == 0){
				writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "orangeF. She's a bit of a firebrand. New to the team. She could probably use some anger management counseling.");
				writeFunction("loadEncounter('orange', 'orange1')", "I'll meet with orangeF. Probably best to get her anger issues under control.");
			}
			if(checkTrust('swimmer') == 0){
				writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "swimmerF. She seems to have trouble keeping focus. She puts in a lot of energy, but her results are always a mess.");
				writeFunction("loadEncounter('swimmer', 'swimmer1')", "swimmerF could use some help. We don't want our students struggling.");
			}
			if(checkTrust('cold') == 0){
				writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "coldF. She's smart, and she gets along well with people, but she's never really clicked with most of the team. From what I understand, she doesn't spend much time out.");
				writeFunction("loadEncounter('cold', 'cold1')", "coldF seems like a good candidate, send her to my office.");
			}
			break;
		}
		case "coach10": {
			writeText("coachF smiles at you as you come near.");
			writeSpeech("coach", "", "Hey, playerF! Is the student wellness program is seeing results? I hope they're not giving you too much trouble.");
			writeSpeech("player", "", "Not at all, coachF.");
			writeText("You sit down across the desk from her, leaning in.");
			writeFunction("loadEncounter('coach', 'coach10a')", "In fact, I think we should celebrate our success tonight.");
			writeFunction("changeLocation(data.player.location)", "I still have some work to do today, but we should celebrate later.");
			break;
		}
		case "coach10a": {
			setTrust('coach', 200)
			writeText("coachF tries to contain her excitement, but her poker face is very bad..");
			writeSpeech("coach", "", "Oh! Great! That sounds great! What do you-");
			writeText("You lean in further, putting your hand on hers. As you touch her, she stops speaking, the red blush on her face rapidly spreading.");
			writeSpeech("player", "", "Quiet. You earned this.");
			writeText("The blushing just gets worse, but she does take a minute to breathe and collect her thoughts before speaking again.");
			writeSpeech("coach", "", "I... Okay. No, wait. We earned this. So... I- I guess... Meet you at the bar later?");
			writeFunction("loadEncounter('coach', 'coach10b')", "Sounds good.");
			break;
		}
		case "coach10b": {
			passTime();
			passTime();
			writeText("Later that night, you head to the bar, meeting up with coachF. From the look of things, she's already a few drinks in by the time you arrive. You've only just gotten in the door of the place when she's yelling to you from her table.");
			writeSpeech("coach", "", "playerF! playerH! Come on, get over here!");
			writeText("You spend the next few hours enjoying your time with coachF. From what you knew about her before, she had been a bit of a terror in the bar. Loud, obnoxious. Kicked out more than a few times for harassing other customers and staff. But now? After your work? She's a trusted regular. Throughout the night you have people nearly contstantly rotating in and out of your booth, sharing stories and laughing before coachF gets a deck of cards and starts an impromptu low stakes poker game. She never has an empty drink, most are bought for her, either won as bets in the card game, or paid for by people she's apparently been helping with personal matters during her personal time.");
			data.player.money += 20;
			writeSpecial("You won 20 bucks! Nice!");
			writeText("Your own drink sits, mostly untouched during the night. You come out of the poker game a little richer for your troubles, but having had a damn good time listening to coachF share stories about her time as an athlete, stories about the people who join your table throughout the night, and stories about the school, students, and teachers- with only the occasional wink as she describes 'the cute ones' she's seen around lately.");
			writeText("Finally, closing time rolls around. And you know who you want to take you home. As you gather up your jacket and pick up a slightly stumbling coachF, she leans into your ear and speaks. A breathy whisper, hot against your face, her breath smells like whiskey and cigarette smoke.");
			writeSpeech("coach", "", "I hope that's not the end of our night... Master.");
			writeSpeech("player", "", "Don't be silly, slut. Our night has just started.");
			writeFunction("writeEvent('coach10c')", "You support her on your shoulder as you walk her home.");
			updateMenu();
			break;
		}
		case "coachfinal": {
			writeText("coachF has a few student files on her desk, but as you approach she puts them up.");
			writeSpeech("coach", "", "Hey, playerH. Just looking at some new prospects for next semester. Did you need me for anything?")
			writeText("She gives you a playful wink as you answer.");
			writeFunction("loadEncounter('coach', 'coachfinaloffice')", "Can I speak to you in my office?");
			writeFunction("loadEncounter('coach', 'coachfinalhome')", "Are you free tonight to meet at your place? I have something I wanted to talk to you about.");
			writeFunction("loadEncounter('coach', 'coachfinalbeach')", "Want to take an early day and get some sun?");
			writeFunction("changeLocation(data.player.location)", "Not today, coachF. I'll see you later.");
			break;
		}
		case "coachfinaloffice": {
			writeText("coachF follows you back to your office, making small talk about work before the door clicks closed.");
			writeSpeech("coach", "", "So, Master, what is it you wanted to... <i>talk</i> to me about here?")
			writeFunction("loadEncounter('coach', 'coachfinaloffice1')", "You don't even wait for her to strip before you grab her tits.");
			writeFunction("loadEncounter('coach', 'coachfinaloffice2')", "Bend over the desk, slut.");
			writeFunction("loadEncounter('coach', 'coachfinaloffice3')", "You sit in your chair and pat your lab, as she strips down.");
			writeFunction("changeLocation(data.player.location)", "Not today, you have other things to do.");
			break;
		}
		case "coachfinaloffice1": {
			passTime();
			writeBig("images/coach/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Just like old times, huh?");
			writeBig("images/coach/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You quickly unzip her jacket and push her down, as you do, coachF gets to work.");
			writeBig("images/coach/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Damn this feels good.");
			writeBig("images/coach/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you get closer, you start to buck your hips, using her tits as an onahole for your pleasure.");
			writeBig("images/coach/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/coach/2b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "It's such a waste to let it spill...");
			writeText("coachF begins to lick up any of your cum she can, gathering it up into her hands and on her fingers and drinking it from there. Whatever is left gets covered by her jacket. The stains are faint, but it's nothing that won't wash out.");
			writeSpeech("coach", "", "I should probably go to the gym showers, get myself clean. See you soon?");
			writeFunction("changeLocation(data.player.location)", "With that, it's time to get back to work.");
			updateMenu();
			break;
		}
		case "coachfinaloffice2": {
			passTime();
			writeBig("images/coach/finaloffice2-1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Of course Master. Do you have another video for me to watch?");
			writeText("You put it in her quickly, as the video plays. coachF rocks herself back and forth as she watches.");
			writeSpeech("coach", "", "Mmm.~ Oh, Master, she's cute. Should I try to find you a lookalike?");
			writeBig("images/coach/finaloffice2-2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You feel her practically gushing at the thought. Her words come out rough between hard breaths as she loses herself more and more in the idea.");
			writeSpeech("coach", "", "Or do you like the redhead more, Master? Or maybe I should find a pair just like these two?");
			writeText("Her movements become more erratic as she gets close to cumming on your cock. She's holding back as much as she can, but you don't think she'll last much longer. She isn't even looking at the screen in the slightest, the scene in her head doing more for her than any porn ever will.");
			writeSpeech("coach", "", "But maybe, Master... Maybe next time you'll let me have a turn with the girls I bring to you?");
			writeText("You grunt as you thrust yourself deep, and lean into her ear.");
			writeSpeech("player", "", "Bring me sluts like that, and you can do whatever you want with them. But only <i>after</i> you watch me fuck them brainless. You can have my sloppy seconds.");
			writeSpeech("coach", "", "Yes! Yes, Master! I can't wait! I'll suck your cum out of their used holes, while they clean your cock! I- Fuck!~ I'm-");
			writeBig("images/coach/finaloffice2-3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You feel her cunt clamp down on your cock as she cums. Her own orgasm pushes you over the edge and you cum, bucking yourself as far in as you can. When your orgasm finally subsides, you pull yourself out.");
			writeBig("images/coach/finaloffice2-4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "It's a waste to use a condom, Master. You can fill me up anytime.");
			writeText("You pull the condom off, and hand it to coachF.");
			writeSpeech("player", "", "It's a bit of a waste, but it does make clean up a lot easier. You know what to do, slut.");
			writeText("She licks her lips as she takes the condom with a flourish.");
			writeSpeech("coach", "", "Of course Master. We can't let your cum be wasted, after all...");
			writeText("And coachF upends the condom into her mouth, making a show of getting some cum on her fingers and licking them clean before sticking her tongue directly into the condom and trying to gather up any remnants.");
			writeSpeech("coach", "", "At least the condom is flavored. Not as good as fresh from the source, but it's better than that rubber taste.");
			writeText("When she's finally emptied out the condom as best she can, she throws it into the garbage and gets dressed to leave. As she leaves, she turns and winks at you.");
			writeSpeech("coach", "", "Let me know if you ever need anything else, playerH.");
			writeFunction("changeLocation(data.player.location)", "You let her leave and get back to work.");
			updateMenu();
			break;
		}
		case "coachfinaloffice3": {
			passTime();
			writeBig("images/coach/3b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "My favorite seat in the house. Thanks so much for saving it for me, Master.");
			writeText("She gets on top of you, and spreads her already wet cunt. As she does, she grazes it against your length, lubing you up before she picks herself up and slowly presses your head against her open slit.");
			writeSpeech("coach", "", "I'm so looking forward to-");
			writeText("You cut her off as you grab her shoulders and push her down suddenly.");
			writeBig("images/coach/3b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "<b>Fuck!</b?");
			writeSpeech("player", "", "I'm here to fuck you, slut. No more teasing. Get to work.");
			writeSpeech("coach", "", "You're right, Master, just let me-");
			writeBig("images/coach/3b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF relaxes and starts to move, lifting herself up before sliding herself down slowly. Taking every inch of you into her. As she does, you enjoy your place in her cleavage. Licking and sucking anything you can as her breasts move wildly around your head.");
			writeSpeech("coach", "", "There we go. Sorry to make you wait, Master.");
			writeText("Now that she's found her rhythm, she picks up the pace. As she goes on, you feel her legs starting to shake and her breathing gets ragged. You're getting close to cumming when she whispers into your ear.");
			writeSpeech("coach", "", "I can't take much...");
			writeBig("images/coach/3b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her voice in your ear pushes you over the edge, and you cum inside your personal slut. The feeling of you filling her sets her off, and she collapses onto your lap as her legs give out. Your cum fills her deepest parts as she leans against you. After a moment's rest, she pulls back and smiles.");
			writeSpeech("coach", "", "Mmm.~ I'm going to let that leak out during practice later. You think sportsF will notice? Maybe I should drag her back to the equipment room after to clean me out...");
			writeFunction("changeLocation(data.player.location)", "You both get dressed and she leaves, smiling mischievously as she heads to the gym.");
			updateMenu();
			break;
		}
		case "coachfinalhome": {
			passTime();
			writeText("You wait a bit before heading to coachF's house.");
			writeBig("images/coach/selfie1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She greets you at the door wearing what are probably her pajamas.");
			writeSpeech("coach", "", "What can your slut do for you, Master?")
			writeFunction("loadEncounter('coach', 'coachfinalpj1')", "Kneel, I'm using your mouth today.");
			writeFunction("loadEncounter('coach', 'coachfinalpj2')", "Get on the bed and bend over.");
			writeFunction("loadEncounter('coach', 'coachfinalpj3')", "Grab her by the hair and put her on the bed.");
			writeFunction("loadEncounter('coach', 'coachfinalnude')", "Strip.");
			writeFunction("loadEncounter('coach', 'coachfinalschoolgirl')", "Put on your schoolgirl outfit. I think it's time for your lessons.");
			writeFunction("loadEncounter('coach', 'coachfinalcow')", "Get your bikini on, slut.");
			break;
		}
		case "coachfinalnude": {
			writeText("coachF strips quickly, revealing her already soaked cunt to you.");
			writeBig("images/coach/selfienude.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "I'm ready for however you want me, Master.")
			writeText("As she speaks, she moves to meet you, placing her hands on your cock.");
			writeBig("images/coach/finalnude1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "So... How can your slut be of service today?")
			writeFunction("loadEncounter('coach', 'coachnude1')", "You push her to her knees, and as she sinks, she grabs the lube from her nightstand.");
			writeFunction("loadEncounter('coach', 'coachnude2')", "You lay her on the bed, admiring the view before you get to work.");
			break;
		}
		case "coachnude1": {
			writeText("coachF doesn't resist your push in the slightest. Sinking fluidly to her knees as you sit on the bed. She begins to open the lube and prepare herself.");
			writeSpeech("coach", "", "Exactly where I want to be...");
			writeText("coachF lets the lube drizzle onto her fingers, slowly covering her hands, spreading her fingers and letting the lube run between them, and fall over her hands. Making a mess as it spills from her hands to her massive tits. Once her hands are covered, she moves to her tits, rubbing the spilled lube into her skin, making sure to get her breasts slick and shiny before wrapping them around your cock.");
			writeBig("images/coach/8b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She quickly wraps her tits around your cock, her lubed up skin against you slick and cool at first, warming as her body heat counteracts the cooling of the lube.");
			writeSpeech("coach", "", "I love how this lube feels on my skin, Master. And every time I feel it... I can't stop thinking about how easy it makes it to slip things into my ass. Turning that hole into a tight little sleeve.");
			writeSpeech("coach", "", "In fact... Master, may I get my dildo? I want to feel it inside me...");
			writeText("You pat her head, and lift her chin up to look into her eyes.");
			writeSpeech("player", "", "Go right ahead, slut. Stretch your ass. And get it ready for my cock.");
			writeText("Her eyes light up as you speak, and she jumps to her feet as soon as you've finished.");
			writeSpeech("coach", "", "Thank you Master! I'll be right back...");
			writeText("coachF gets into her nightstand again, and pulls out a large dildo. She moves back to you quickly, crawling back to her place between your legs.");
			writeSpeech("coach", "", "First, Master, let me show you something...");
			writeText("coachF gets the lube again, applying a generous amount to the dildo before rubbing it as if it was your cock. You see her use some of the same techniques she used to get you hard to make sure the thing is slick over every inch.");
			writeSpeech("coach", "", "And now...");
			writeText("coachF puts the dildo up to her lips, and opens her mouth wide. As she does, you see her other hand move down to her own ass, fingers probing, and again making sure everything is properly lubricated. coachF takes the dildo slowly into her mouth, pushing in and in, trying to take it all the way to the base. Her eyes bugle before she closes them, trying to suppress her gag reflex as she works the fake cock in, inch by inch. With every bit of progress she makes, you see her fingers working her asshole more and more open, probing deeper and deeper as well. Finally, without ever pulling out, she manages to get the dildo in her throat, all the way to its fake balls, and she opens her eyes in triumph.");
			writeText("Just as slowly as she worked the dildo in, she pulls the dildo out. Now that her ass is properly warmed up, her other hand comes back up. coachF places it against her throat, and you see the bulge in her throat work its way up, her fingers tracing the faint bulge of the fake cock head as it moves up her neck. When she finally pulls the dildo out, she holds it up beside her head, drool and spit trailing from her mouth to the dildo as she grins, wide as she can and coughs as she speaks up.");
			writeSpeech("coach", "", "I've <i>cough</i> been taking tips from sportsF. She suggested practicing like this, and loaned me one of her training dildos. Now, sorry to keep you waiting, let me just...");
			writeText("coachF places the dildo on the ground, attaching it by the bottom suction cup so that she can ride it as she works. There's just a moment of prep before she quickly sits, letting herself worm her way down as she settles back in place for the titjob she started.");
			writeBig("images/coach/8b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "There we go. So good... Your cock between my tits, and a dildo in my ass. This is heaven for a slut like me, Master.");
			writeText("She works her tits harder, squeezing them tightly around your cock. You can feel her picking herself up and setting herself down on the dildo, and the movement only adds to the movement and feeling of the titjob. Every time she comes back down, she briefly takes the tip of your cock into her mouth, trying to fill herself on both ends.");
			writeSpeech("coach", "", "<b>Fuck</b> Master, having two holes filled feels soo good. You don't happen to have any other toys who could... Join us? One day? I could suck them off while you pound my ass... Or if you brought a woman, she could use a strap on to fuck my ass, while You fucked my slutty pussy. Or if you brought another toy, I could be completely filled. No more empty holes, exactly what a slut like me should strive for.");
			writeText("Her fantasies come out between ragged breaths as her movements become more and more wild. She's bottomed out on her dildo, and now when she comes down, she can practically get half of your cock in her mouth before she lifts herself again. After a few minutes, you lose control, and cum all over your desperate toy.");
			writeBig("images/coach/8b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Yeees!~");
			writeBig("images/coach/8b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "You don't think we're done here, do you?");
			writeSpeech("coach", "", "Of course not, Master. We're done when you say we're done. And I can feel your cock still twitching.");
			writeText("coachF swallows, and speaks again.");
			writeSpeech("coach", "", "But... I'm sorry, Master, I wore myself out on my dildo...");
			writeText("You grab her hair, pulling her up, bit by bit as you speak. Lifting her off the dildo she's impaled herself on.");
			writeSpeech("player", "", "That's fine, slut. I'll just use you like the living fuck doll you are.");
			writeText("coachF is doing her best to lift herself up as you pull her up by her hair. As you pull, she gasps in equal parts pain and pleasure as the dildo slowly works its way out of her ass, and as she slowly manages to get her feet weakly under her.");
			writeSpeech("coach", "", "I wouldn't have it any other way, Master.");
			writeFunction("loadEncounter('coach', 'coachnude1a')", "With a final loud POP, she comes completely off the dildo, and you push her onto the bed.");
			updateMenu();
			break;
		}
		case "coachnude1a": {
			writeText("coachF lands on the bed with a small thump, face pressed into the pillow and ass up. Looking at her, her asshole is wide open, twitching almost in anticipation as you bring yourself behind her.");
			writeSpeech("player", "", "Such an inviting little fuck hole.");
			writeSpeech("coach", "", "I'm ready for you, Master. Please, use me like the toy I am.");
			writeText("coachF tries her best, weakly moving her hands to her cheeks and attempting to spread her ass even wider for you.");
			writeBig("images/coach/final1aa.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Aaah!~ Master!~ I'm still raw!~ Please...");
			writeText("She bites the pillow as you push yourself further in. Her pleas are betrayed by the feeling of her ass around your cock, relaxing itself and allowing you further and further, before you quickly bottom out inside her.");
			writeSpeech("player", "", "Please <i>what</i>, slut? Tell me what you need and I'll do it. If you <i>really</i> think you can't take it, if you really don't want me to fuck you into a mindless stupor, just tell me. I'll stop. If you can't take it, if you don't want this, I can always...");
			writeText("You begin to pull out, slowly working your cock back out of her cock. Your cock head just barely begins to pass her rim when she screams.");
			writeSpeech("coach", "", "<b>FUCK! NO PLEASE! FUCK ME MASTER! USE MY ASS! GIVE IT TO ME! FUCK ME LIKE THE STUPID SLUT I AM!</b>");
			writeBig("images/coach/final1ab.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("And with that you shove yourself back in. Hilting your cock in her prepared ass immediately. There are times where you're loving, where you take your time. This isn't that. She wants to be used like a toy, and that's what you give her. As you thrust yourself in and out, hard and fast, the bed rocks, headboard slamming into the wall as you pound her like a cheap onahole. Underneath you, coachF is screaming your name, screaming for more. This pace is grueling, your thighs burn, and your hips hurt from how hard you're slamming into coachF's ass. You wouldn't be surprised if her ass is bruised. Luckily, at this pace, you don't last long at all, especially not with how well your slut's trained ass works itself to drain your balls. coachF is locked in a near perpetual orgasm, muscles in her ass seemingly twitching at random as she loses control. Those spasms send you over the edge in a matter of minutes.");
			writeBig("images/coach/final1ac.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You collapse on top of coachF after you've cum, and your cock slowly slips out of her as it goes flaccid. It feels like an eternity you're trying to catch your breath, but eventually you manage to get your feet under you and stand up. You finally stand and look down at coachF, still panting and lost in her own head.");
			writeSpeech("player", "", "Did you like that, slut?");
			writeSpeech("coach", "", "Yes Master. I loved it...");
			writeText("coachF slowly looks up at you, eyes glazed over in pleasure. You reach down and pat her head, then put a cover over her.");
			writeSpeech("player", "", "Sleep for now. When you wake up, get yourself cleaned up. I'm sure we'll have more times like this soon.");
			writeFunction("changeLocation(data.player.location)", "As you leave, you hear her mumbling thanks under her breath. You don't think she'll be making it back to work today.");
			updateMenu();
			break;
		}
		case "coachnude2": {
			writeBig("images/coach/final2a.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Mmm... Don't stop there, Master. Give it to me.");
			writeText("You start slow, moving your hips in, trying to feel for her sensitive spots. Every gasp and twitch she makes under you, you stop pushing in, instead rocking your hips back and forth. Teasing her with your slow movements as she begs for more.");
			writeBig("images/coach/final2b.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Master! Why are you going so slow? I can take it! Please... Please, give me more!");
			writeBig("images/coach/final2c.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Once you've finally bottomed out, you give her what she wants. There's no rhythm to your thrusts, and the movement is a little awkward, as you move your hips wildly, trying to hit all those spots that made her cry out on your first push in. Every thrust forcing a cry from coachF, every movement and adjustment causing her to writhe in pleasure beneath you.");
			writeSpeech("coach", "", "Oh my god, oh my god, oooohhh~");
			writeBig("images/coach/final2d.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You grab coachF's tits hard, and cum deep inside your slut. You feel her pussy convulsing around your cock, her own orgasm triggered by the feeling of your cum filling her to the brim.");
			writeBig("images/coach/final2e.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Goddamn, you came so much... Are the others not doing enough for you, or do you just like the feeling of my cunt that much?");
			writeText("You pull out and watch as your cum leaks out of coachF, admiring your own handiwork.");
			writeBig("images/coach/final2f.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "What can I say, I trained you well, slut.");
			writeSpeech("coach", "", "Yes you did, Master. I'll clean up, I'm sure you have other... <i>things</i> to do today.");
			writeFunction("loadEncounter('coach', 'coachnude1a')", "She is right. You gather your things and take off.");
			updateMenu();
			break;
		}
		case "coachfinalpj1": {
			writeText("coachF drops to her knees immediately, mouth watering as she gets your pants off.");
			writeSpeech("coach", "", "It's been too long since I've tasted you, Master. Now...");
			writeBig("images/coach/6b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She opens wide and pushes her head as far as she can manage. She gags slightly and spit begins to trail down her face as she pulls off.");
			writeSpeech("coach", "", "Let me take care of you, Master.");
			writeBig("images/coach/6b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She practically dives back onto your cock, pushing herself deeper and deeper. She doesn't quite make it to your base, before pulling herself off and licking your balls.");
			writeSpeech("coach", "", "I forgot how good it feels when your cock twitches in my throat. I can barely breathe, and all i can smell id your musk. <i>Fuck</i> it's so hot...");
			writeText("Taking a breath and admiring your now slobber covered cock, she starts to say something else when you reel your hand back and slap her.");
			writeSpeech("player", "", "I didn't come here to hear your whore mouth babbling. Now get onto my cock, slut. If I hear anything other than gagging, I'll be taking this perfect cock to one of the other girls...");
			writeText("At the suggestion you'd stop fucking her, she whimpers, and redoubles her efforts. Before getting back onto your cock, she gets to work licking. She starts at the head, and works her way down, taking your balls slowly into her mouth and pumping your cock with her free hand. Then, back up, just as slowly, until she gets back to your head, taking a moment to steel herself.");
			writeText("Before <i>impaling</i> her head on your cock. Taking the hand that had been on your cock and putting it to the back of her head, as if trying to push herself deep down, and hold herself there. She quickly works her way down to your base, frantically trying to please you. As she goes, you feel her throat spasm as she gags and holds herself down. Each spasm causing her throat to tighten around your cock. She never once pulls off completely, instead pulling herself off to your head and taking quick breaths in between quick, deep plunges. Her desperation for approval clear as she force fucks her own face on your cock. Your thighs are covered in spit and drool, and her shirt is soaked enough that you can see her nipples through the gag slime and thin white t-shirt. One last gag triggers your orgasm. The first spurt goes straight down her throat before she pulls back, letting you fill her mouth.");
			writeBig("images/coach/6b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Don't you dare waste a drop, slut.");
			writeText("coachF swallows quickly, trying to keep any cum from escaping her lips as your orgasm winds down. You can feel her tongue probing as you've finished, licking up anything she may have missed.");
			writeBig("images/coach/6b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Thank you for the meal, Master! I'm sorry for my earlier behavior.");
			writeSpeech("player", "", "You proved your worth, slut. Now clean up. I'll see you later.");
			writeFunction("changeLocation(data.player.location)", "'Of course Master' she says as you get dressed and leave.");
			updateMenu();
			break;
		}
		case "coachfinalpj2": {
			writeText("coachF practically bounds to the bed, before throwing herself onto it. Face down, ass up.");
			writeSpeech("coach", "", "Use any hole you like, Master. Your slut's body is made for you to use.");
			writeBig("images/coach/6c6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Any hole you want, huh? Well, that sounds like an invitation to you. You run your cock along her cunt, teasing and prodding, but not entering just yet. coachF moans under you with each movement, until you bring the head of your cock to her wet and waiting cunt, pushing in slowly, until finally your own hips meet hers. You take a moment there, wiggling your hips, finding her sensitive spots. Then you slowly pull yourself out, inching your way bit by bit until your cock head is once again placed just at the entrance to her slit.");
			writeSpeech("coach", "", "Thank you for the warmup Master. But please, don't hold back. Use your slut like the whore she is. I don't want to be treated delicately. I want you to <b>Fuck. Me. Up.</b>");
			writeBig("images/coach/6c7.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Good idea. Before she's done asking, you pull yourself back. You're lubed up enough now, her wet cunt saw to that. There's no hesitation as you thrust in to her ass, meeting resistance at first before she does her best to loosen up for you.");
			writeSpeech("coach", "", "Jesus! I'm going to split open... <b>Don't stop!</b>");
			writeText("You can feel the walls of her ass opening and squeezing as she tries to take you deeper and bring you to climax. Her voice cracks as she begs you for more.");
			writeBig("images/coach/6c9.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck! Deeper! Cum in me! Fill me up Master!");
			writeText("You buck your hips wildly and grip her hips tight. At this point, you've stopped doing anything for her. You bring your cock in and out hard and fast as you can. You can feel her cunt gushing against your thighs, and hear her screaming as you use her like a toy, but none of it really registers. The only things you care about are the feeling of bottoming out in your personal slut's ass, her own body trying desperately to milk you of your cum and get her reward.");
			writeSpeech("player", "", "Take it, you whore!");
			writeBig("images/coach/6c8.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You thrust in as deeps as you can before letting go. Filling her ass with your cum, and feeling her own orgasm as she loses control. You spend a few moments gasping and getting your breath back, and then pull out.");
			writeSpeech("player", "", "Good work, slut. Maybe I should use you like that more often.");
			writeText("coachF, pleasure drunk from her orgasm, answers you in barely a whisper.");
			writeSpeech("coach", "", "Please do, Master.");
			writeFunction("changeLocation(data.player.location)", "You have coachF clean you off with her mouth before taking your leave.");
			updateMenu();
			break;
		}
		case "coachfinalpj3": {
			writeText("coachF cries out as you grab her hair, though the sound is more pleasure than pain.");
			writeBig("images/coach/6c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Mmm.~ What did I do to deserve this reward, Master?");
			writeSpeech("player", "", "You've done well, lately. I thought you might appreciate some...");
			writeBig("images/coach/6c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Positive reinforcement.");
			writeText("She gasps as you shove yourself in. No teasing, no playing around. But she's plenty wet and ready for you.");
			writeSpeech("coach", "", "Yeeess!~");
			writeText("She moves with you as you go. You can feel her hips moving as you thrust, her movement limited by your weight on top of her. Your pace picks up, and you feel her adjust just slightly, bringing her hips down, running your cock along her upper inside walls.");
			writeBig("images/coach/6c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck! That's the spot! Fucking! Ah!~ There, Master!");
			writeText("Your thrusts get wild as coachF holds herself steady under you, trying to guide your cock to her g-spot. As you move, you feel her orgasm tighten and lock under you, the rest of her body spasming as she keeps her hips locked in place for you to keep using.");
			writeBig("images/coach/6c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The feeling quickly overwhelms you, and you fill coachF to the brim with your seed.");
			writeBig("images/coach/6c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "You've done well, lately, coachF. I hope you liked your reward.");
			writeText("coachF smiles up at you, idly fingering her cunt as you pull out.");
			writeSpeech("coach", "", "I did Master. I promise I'll keep up the good work, I can't stand thinking I'd never get that again...");
			writeFunction("changeLocation(data.player.location)", "You chuckle and get ready to leave. As you do, you see coachF idly licking her fingers clean of cum.");
			updateMenu();
			break;
		}
		case "coachfinalschoolgirl": {
			writeText("She quickly gets changed before lounging onto the bed.");
			writeBig("images/coach/profileP.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "And just what do you plan to tach me today, playerH?")
			writeSpeech("player", "", "We'll start with an oral exam.");
			writeSpeech("coach", "", "Mmm. I hope all my practice pays off. If I get a bad grade on this, who knows what extra credit I'll need to do...")
			writeBig("images/coach/4b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "We start off small...")
			writeText("coachF begins to lick you up and down, rubbing your cock against her face and trying to take every bit of your cock into her mouth. Wrapping her lips around each portion of your shaft and swirling her tongue around before moving herself down, bit by bit. She starts to move her hands to cup your balls when you pull your cock up and <b>slap</b> her cheek with it.");
			writeSpeech("player", "", "Now, now. It's an <i>oral</i> exam, slut. Don't go trying to cheat.");
			writeSpeech("coach", "", "Ah! Of course, sorry, playerH. I just got caught up in the work...")
			writeText("She quickly gets back to work, doing one last pass of your cock, from the bottom of your balls to the tip of your cock before she opens her mouth wide and looks up to you, ready to be used.");
			writeBig("images/coach/4b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF quickly moves her head down, trying to fit as much of you into her mouth as she can. She's making progress... But slower than you'd like.");
			writeSpeech("player", "", "I think you've been slacking on your studies lately, slut. Maybe you need a hand...");
			writeBig("images/coach/4b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF moans as you take hold of her hair and force your cock further down her throat. Once you've gotten as far as you think you can, you start to fuck her face, bringing your hips forward and back. The entire time, her tongue keeps working, licking and swirling around your cock head, and just barely poking out to touch your sack when you finally touch her nose to your hips.");
			writeBig("images/coach/4b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You hear and feel as coachF moans in victory once she's managed to take you to the hilt, and you pause for just a moment to let her bask in her accomplishment before you fuck her face again in earnest. The feeling of her tongue on your shaft, her throat tightening around you, the spray of spit whenever you push yourself all the way in splashing against your thighs drives you to the edge of orgasm quickly, and with one final thrust you cum straight down her throat. You feel her swallowing around your shaft as you let spray after spray loose inside her, and to her credit, she never once flinches or pulls back.");
			writeBig("images/coach/4b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("When your orgasm finally stops, she pulls herself off your cock, with a loud satisfying pop.");
			writeSpeech("coach", "", "Mmm~. I don't think I'll need dinner tonight, Master. You filled me up good.");
			writeSpeech("player", "", "A solid performance... I'd give you a B. You did need help when you got to the hardest parts of the exam.");
			writeSpeech("coach", "", "Oh... Please, playerH. I need this A to keep my scholarship. Is there anything I can do to earn a few extra points?");
			writeSpeech("player", "", "I can think of something, I'm sure...");
			writeText("As you speak, you push coachF onto the bed.");
			writeSpeech("coach", "", "Wait, playerH, I'm not too sure about this... What-");
			writeBig("images/coach/4c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ah!~ playerH!~");
			writeBig("images/coach/4c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you fuck her, you feel her squirt against your cock. Any words or jokes she had cut short as she screams in pleasure. So much for the role play, Oh well, you can still enjoy your personal slut. The outfit is tight around her chest, and as you thrust you can see her nipples poking through the sheer, thin fabric of her shirt.");
			writeBig("images/coach/4c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuuuck!~");
			writeText("You cum deep inside coachF as she wiggles undreneath you, holding her legs open to stop her convulsions from pushing you out. Once you've finally stopped, you pull out, and smile down at her.");
			writeBig("images/coach/4c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Not bad, slut. I think your grades will improve. Though, to be sure, we should keep up these 'private lessons' don't you think?");
			writeSpeech("coach", "", "Of course, playerH! I wouldn't want to lose my scholarship. Thanks for your help.");
			writeFunction("changeLocation(data.player.location)", "You leave, balls empty and body tired.");
			updateMenu();
			break;
		}
		case "coachfinalcow": {
			writeText("coachF moves quickly, giving you a show as she wiggles her way out of her t-shirt and squeezes into her bikini.");
			writeBig("images/coach/selfiecow.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "This outfit is so tight, Master. Every time I move, it rubs against my clit and nipples. Ah.~ It drives me insane.")
			writeBig("images/coach/10d1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF smiles as you begin to fondle her tits. You work your hands over the fabric, feeling the material over her warm soft breasts. You begin to knead them, harder and harder, feeling her nipples harden under your fingers.");
			writeBig("images/coach/10d3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ah! Master! That's...")
			writeText("coachF is trying to maintain her composure as you keep going, but you can feel her heartbeat quickening, and see as she rubs her thighs together, her cunt wet and aching.");
			writeSpeech("player", "", "What's wrong, slut? Is this too much for you? Or do you want more?");
			writeSpeech("coach", "", "More... Please, Master! Moo-")
			writeBig("images/coach/10d3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You cut off her cries, licking at her breasts and biting her hardened nipple gently ");
			writeSpeech("player", "", "That's a good noise, slut.");
			writeSpeech("coach", "", "Ye-yes Master! I'm your cow slut! Moo!~ Mooo!~");
			writeText("You can feel coachF cum as she debases herself for you, mooing loudly and begging you for more. Once you feel like you've gotten your fill playing with her breasts, you decide it's time for more.");
			writeFunction("loadEncounter('coach', 'coachfinalcowa')", "Selfish cow. Lay on the bed. It's my turn.");
			updateMenu();
			break;
		}
		case "coachfinalcowa": {
			writeText("coachF moves slowly to the bed, and you move to straddle her, placing your cock between her tits.");
			writeBig("images/coach/10d4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Moo-aster! I'm still... Ahh!~.");
			writeText("Still sensitive from her orgasm, she weakly protests, begging you for mercy.");
			writeBig("images/coach/10d5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Not that she'll get any.");
			writeSpeech("player", "", "I told you that it was my turn now, slut. Now, just sit back, relax, and enjoy it.");
			writeText("She whimpers as you continue. wildly thrusting into her cleavage, and holding her tits firmly down and in, giving you a perfect cock sleeve. It isn't long before you finally cum.");
			writeBig("images/coach/10d6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You cover coachF in your cum, spraying as you continue thrusting. When you've finally stopped, coachF smiles up at you.");
			writeBig("images/coach/phonereward.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "That feels so good on my skin, Master...");
			writeText("You're not done yet, though...");
			writeText("You don't give her a chance to react before you're already moving down to her soaked cunt.");
			writeBig("images/coach/finalcow1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Maaaster!~");
			writeText("You debate, just for a moment, covering her mouth to silence her moans and screams of pleasure. But the noises are just to good to stop. You take your time, coachF's cries and the feeling of her aching cunt trying its best to squeeze you dry not something you want to cut short. But all good things come to an end, and you finally reach the point of no return.");
			writeBig("images/coach/finalcow2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF lets loose one final scream as you fill her to the brim.");
			writeSpeech("coach", "", "<b>FUCK YES! MOO-STER! THANK YOU!~</b>");
			writeText("Even after you've finished cumming, you can feel coachF lost in her own orgasms under you, triggered by the feeling of your cum deep inside her.");
			writeBig("images/coach/finalcow3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You pull out and watch as she slowly tries to pull herself together. It takes a bit, but she finally manages to sit up, and she gives you a look..");
			writeSpeech("coach", "", "Moo? Really?");
			writeSpeech("player", "", "You seemed to like it.");
			writeSpeech("coach", "", "... Yeah. I did. Go ahead. I'll get things cleaned up here.");
			writeFunction("changeLocation(data.player.location)", "Sounds good to you.");
			updateMenu();
			break;
		}
		case "coachfinalbeach": {
			passTime();
			writeText("You leave the school and head to the beach. Not long after, you meet up with coachF.");
			writeBig("images/coach/sportsphone1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "I love this bikini, playerH. Do you know why?")
			writeText("She leans in as she tells you.");
			writeSpeech("coach", "", "It's because I love showing off my slutty body to everyone. Knowing that only my Master gets to use me. Teasing them, while thinking of all the ways you'd treat me that they would <i>never</i> think of. And that's why they don't deserve me. And why you do.")
			writeSpeech("coach", "", "So, Master... Did sportsF ever tell you where my hiding spot was?")
			writeText("She leads you by the hand to a small alcove, hidden from the rest of the beach. Once there, she turns you you.");
			writeSpeech("coach", "", "How would you like to use your fuck toy, Master?")
			writeSpeech("player", "", "Well, I seem to remember getting a picture once, of a certain ass licking slut. I think maybe it's time to let her loose.")
			writeText("You see her eyes light up at the thought, but she tries to play coy.");
			writeSpeech("coach", "", "I... you want me to... I don't know if I can...")
			writeText("You pull your shorts down and grab her hair, pushing her down to her knees, speaking as you turn yourself around.");
			writeSpeech("player", "", "Maybe, slut, I wasn't clear enough. That's fair. Lick. My. Ass. Make it good.")
			writeText("She hesitates for just a moment longer, but turning around you can already see her smiling and touching herself as she speaks up and licks her lips.");
			writeBig("images/coach/sportsphone2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF starts slowly, tongue probing the skin around your ass, while her hands start to work your cock. You can feel her moaning as she works, making the licking irregular, and adding the feeling of her breath quickly in and out with each moan, hot and heavy as her tongue probes. Once you're hard, she takes her massive tits, and wraps them around your cock, trading the precision of her fingers for the more brute force titfuck while she focuses on her tongue work.");
			writeSpeech("player", "", "I told you to lick my ass, slut! Get your tongue in there. Stop dancing around the main dish.")
			writeBig("images/coach/coachbeach1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF immediately gets to work. Her tongue probing at your asshole desperately. You feel it, wet and warm, circling around your rim, teasing a bit before she pushes in. You relax and let her inside, and her tongue pushes in slowly, swirling inside your asshole as she continues to pump your cock with her tits. You feel yourself getting closer and closer to orgasm, all these sensations at once pushing you quickly to the edge.");
			writeSpeech("player", "", "Fucking hell. You must love this.")
			writeText("She pulls back, nose still pressed into you crack, and speaks, sound muffled by your ass, but you can hear her clearly enough.");
			writeSpeech("coach", "", "Of course I love this, Master! Your ass tastes divine, and letting my Master use me, debase me, turn me into a plaything for him to humiliate... This is what I was made for. This is what <i>you</i> made me. And I would never. <b>ever</b> want anything else.")
			writeText("And with that, she gets back in there. Her tongue deep in your ass, squirming and probing ever spot she can get to. Her tits around your cock, moving frantically as she squeezes them tight. You can feel her nose against the top of your ass crack as she wiggles her head bit by bit to hit new depths. You hold as long as you can, but it isn't more than a minute before you cum.");
			writeBig("images/coach/coachbeach2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You take a moment to breathe before you speak again.");
			writeSpeech("player", "", "Not bad... Maybe I should reward you.")
			writeText("You once again see that light in her eyes for a moment before she looks down.");
			writeSpeech("coach", "", "Letting me lick your ass was more than enough reward for me, Master.")
			writeSpeech("player", "", "Fine. No reward. But bend over. I'm not done here. You're walking off this beach with my cum on and in you.")
			writeText("She whimpers as she finds a rock to lean against. Her cunt is soaked as you line up behind her. You wouldn't doubt she already came at least once with her tongue inside you. But just one isn't nearly enough for either of you.");
			writeBig("images/coach/coachbeach3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You give her a spank as you enter her.");
			writeSpeech("player", "", "And remember slut, be quiet. You don't want to get caught, do you?")
			writeSpeech("coach", "", "I... Yes. I'll be... <i>fuck</i>... quiet.")
			writeText("You don't hold back. You can see coachF bite her lip hard to keep her screams in. She is usually a loud one, but she's doing well for now keeping quiet. Time to have a little fun.");
			writeSpeech("player", "", "Good girl being quiet so far. You feel that pressure? That desperate need to scream out, though, right?")
			writeText("She bites her lip harder, and nods as you push in, bringing your mouth to her ear and whispering the command.");
			writeSpeech("player", "", "Don't let that pressure break, slut. You're not allowed to cum until I let you scream. Let the pressure of the scream and the pressure of the pleasure mix. Hold it all in, until your Master decides he's done with you and lets you scream his name.")
			writeText("You can see her jaw practically lock as she tries to hold it all in. But she nods again.");
			writeBig("images/coach/coachbeach4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You fuck her wildly, coachF keeping lock jawed as you go. Her own movements are minimal, she's doing everything she has to hold herself back and stop herself from cumming or making a noise, but you don't have that constraint. You thrust in irregular patterns, making sure to keep her on her toes and not give her a rhythm. You break her concentration by grabbing her tits or spanking her ass. The wild fuck fest doesn't do much for extending the time you can last, but it does mean that coachF can barely open her mouth to breathe for fear of screaming by the time you've gotten close to cumming.");
			writeText("You thrust in deep as you can and lean into her ear one more time.");
			writeSpeech("player", "", "I'm going to cum in you, slut. When I do, I want you to scream my name, and cum harder than you ever have before.");
			writeBig("images/coach/coachbeach5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "<b>FUCK! YES! playerF! CUM IN YOUR PET SLUT!</b>")
			writeBig("images/coach/coachbeach6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF cums. And cums. And cums. Your own orgasm ended, you pull out. coachF loses whatever strength she has, and falls as you pull out, your cock no longer supporting her up, and her own arms too lost in her whole body muscle spasming orgasm to keep her up. She falls to the ground, face in the sand, ass up, pussy leaking your cum slowly as she twitches in pleasure beneath you. You watch her for a while until she stops twitching, put your shorts on and cover her in a large towel before carrying her out.");
			writeFunction("changeLocation(data.player.location)", "If anyone asks on your way out, you think she's just got a little heat stroke. You make your way to the car and drive her home, before continuing on with your day.");
			updateMenu();
			break;
		}
		case "coachfail": {
			passTime();
			writeText("She doesn't even look up.");
			writeSpeech("coach", "", "Fuck off, newbie. You aren't even worth my time.");
			writeText("She's not budging.");
			writeSpeech("player", "", "coachF, please, my job is the well being of the students and you...");
			writeText("Her scowl now falls on you.");
			writeSpeech("coach", "", "I said fuck off, newbie. You've got no pull here.");
			writeText("This is getting you nowhere. Maybe if you were higher regarded by the staff...");
			writeFunction("changeLocation(data.player.location)", "You storm off. This can wait, and you'd rather not risk a fight in the teacher's lounge.");
			break;
		}
	}	
}

var eventArray = [
	{index: "coach2b", name: "Testing Your Work"},
	{index: "coach3b", name: "Office Sex"},
	{index: "coach4b", name: "Schoolgirl Sex"},
	{index: "coach6b", name: "T-Shirt Sex"},
	{index: "coach8b", name: "Her reward"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "coach2b": {
			writeText("She doesn't look happy about it, but she stands up.");
			writeSpeech("coach", "", "Couldn't just let me sleep... Uggh.");
			writeSpeech("player", "", "You can sleep more in a bit, but first I need to see what from the training took.");
			writeSpeech("player", "", "How do you feel, coachF?");
			writeSpeech("coach", "", "Tired, playerH.");
			writeSpeech("player", "", "That's normal. What did you think of the video?");
			writeSpeech("coach", "", "It... Wasn't as bad as I thought. And thinking about it... You guys may be right about my attitude. You've been kinda dicks about it, but I can at least see where you guys are coming from.");
			writeSpeech("player", "", "So...?");
			writeSpeech("coach", "", "So...");
			writeText("She lets loose a big sigh as she stands up and smiles at you..");
			writeSpeech("coach", "", "So I guess I'm saying I'm sorry. Just don't let principalF know I caved on that this easy.");
			writeText("And with those words, you're both smiling. The video was a lot of work, but now you'll be able to ramp the next one up and...");
			writeSpeech("coach", "", "And tell you what, since I was such a bitch about it, I think I should make it up to you.");
			writeSpeech("coach", "", "Come here.");
			writeText("She practically yanks you out of your chair by your wrists and shoves your hands onto her breasts.");
			writeBig("images/coach/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "What d'ya think, playerF? Sound like reasonable payback for my shitty attitude?");
			writeText("You start to play with her breasts, hands playing over her tracksuit. Immediately, you realize that she's not wearing anything under her jacket. You feel her nipples hardening as she looks down and notices your own hardening member.");
			writeBig("images/coach/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Not bad. Maybe I have the right idea, then.");
			writeText("coachF slinks down to her knees, unzipping her jacket and freeing her breasts, and you lower your pants, freeing your now erect cock.");
			writeSpeech("coach", "", "Goddamn, playerF! Should have told me you were packing this beast away before. I can think of a lot of ways to show my <i>respect</i> for this thing.");
			writeText("coachF gets to work quickly, wetting her hand with spit before rubbing your length. She's good. Her hands dance around your cock, making sure to get your whole cock slick before wrapping her tits around it.");
			writeSpeech("coach", "", "Oooh, yeah. That feels good.");
			writeBig("images/coach/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She squeezes herself around your cock, and gets to work. You can feel her moaning slightly as she goes, every time she squeezes her breasts a little harder, or when she adjusts her grip and pulls her nipples as she works. Her voice wavers as she keeps going.");
			writeBig("images/coach/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Haaah. Oooh yeah. I think I found a new fuck buddy here, alright.");
			writeText("Not bad, but not quite what you wanted. Time to push your luck. You grab her head and push her down to your cock.");
			writeSpeech("player", "", "I don't think you get to decide that, now do you, slut?");
			writeText("She keeps up her titjob as you push and pull her by the hair into a shallow blowjob. When you pull her up, she answers.");
			writeSpeech("coach", "", "Mmm.. No playerH. I don't. You do.");
			writeText("sportsF was right about her. For all her bitchy exterior, in her heart, she really is a slut.");
			writeSpeech("player", "", "And why should I fuck your bitch ass? Given how you treat me and anyone else you've met, I don't see any reason to see you more than I absolutely have to.");
			writeText("To her credit, she does look hurt when you bring up her attitude.");
			writeSpeech("coach", "", "I... The only reason I was with that guy at the beach is because he knew how to treat me in bed. But even he had things he didn't want. I had to practically beg him to let me lick his ass, and he had the audacity to complain about it later.");
			writeSpeech("coach", "", "You though... You know how to treat a lady right.");
			writeSpeech("coach", "", "If you keep treating me right, playerH... I'll make an effort to treat everyone else right.");
			writeText("She's practically begging you for it. You really thought she'd be harder to convert.");
			writeSpeech("player", "", "Fine, bitch. If that's how you want to be treated. Get to work, make me cum.");
			writeText("coachF smiles wide, and gives you a wink.");
			writeSpeech("coach", "", "Yes, playerH!");
			writeText("You take your hand off her head and let her get to it. She redoubles her efforts, taking it upon herself to suck the top of your cock as she keeps wrapping her tits around you. As she works, she makes sure to vary the pressure, her timing, and makes sure to keep drooling along your length, to make sure you're properly lubricated. It doesn't take long before you're about to cum.");
			writeSpeech("player", "", "Get ready, bitch, here it comes!");
			writeBig("images/coach/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF takes your cock and shoves it hard into her own chest. Not trying to use her tits to get you off, but pushing them together around your length as if they're a new hole just for you to fuck. You take the invitation gladly as you thrust in and out, hard and fast, her spit and your precum lubing the hole as you finally let go, covering her chest in your semen.");
			writeText("You pull yourself out slowly, letting your cum spread and run on her.");
			writeBig("images/coach/2b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Holy shit, playerH. That's quite a load. Maybe someone needs to get out and get active more often if you're pent up like that.");
			writeText("You resist the urge to laugh. If she knew just how much you were getting around the school, she'd probably have reported you, even with the blackmail you've got on her.");
			writeSpeech("player", "", "Quiet, slut. Or did you forget the pictures I could still send out? See you soon for your next orientation video. I'm sure you'll find it much more exciting than this last one.");
			writeText("coachF stops her teasing quickly at the mention of the picture. She quickly starts to clean herself up, though the tissue in your office only gets so much cum off of her chest and you can see faint cum stains on her jacket as she moves to the door.");
			writeSpeech("coach", "", "Yeah, yeah. I hope for your sake that's true.");
			writeFunction("changeLocation(data.player.location)", "As she leaves, you get to work cleaning your office.");
			updateMenu();
			break;
		}
		case "coach3b": {
			writeText("coachF stares, semi-focused the whole time as the video plays. You hear your own voice as you run her through some new programming.");
			writeSpeech("player", "", "Remember, coachF, you need to respect your coworkers. And the best way to show your respect is to obey. To be a model teacher when principalF asks it of you. To behave yourself when scarfF demands.");
			writeSpeech("player", "", "A proper teacher shows respect to everyone she works with. Students, teachers, parents. And above all, they respect the one who taught them.");
			writeSpeech("coach", "", "Show respect. And obey when asked.");
			writeSpeech("player", "", "After all, you belong to me now. I'm your coworker. I'm your teacher. I'm your superior.");
			writeSpeech("coach", "", "Yeeah. Respect and obey.");
			writeSpeech("player", "", "I'm your master.");
			writeSpeech("coach", "", "Master...");
			writeText("Seems like the video worked better than you could have hoped. Now... Time to have some fun. You stop this video and prep another before getting into position behind coachF.");
			writeSpeech("player", "", "Strip, and bend over the desk, coachF. I told you if you made it halfway through I'd make it worth your time.");
			writeText("She stands up, slow but steady, and bends herself over the desk, taking off her tracksuit as you put a condom on yourself.");
			writeSpeech("coach", "", "Mmm. You gonna take control, then, playerH?");
			writeBig("images/coach/3b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She smiles and looks back at you as she takes a drag. You feel her begin to rock her hips as you tease her entrance. Her cunt wet and practically begging you to enter.");
			writeSpeech("coach", "", "Try and break me, you fucking animal.");
			writeText("No need for further invitation, you push yourself into her waiting slit. As you do, you press play on the next video in line.");
			writeBig("images/coach/3b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Holy shit, what...");
			writeText("The video begins to play as you settle into a rhythm. Perverted scenes and extreme porn begins to play, including a few choice scenes starring yourself.");
			if(galleryCheck("maid1") ==  true){
				writeBig("images/maid/2-3.jpg", "Art by Oreteki18kin");
				writeSpeech("coach", "", "... A shame to let it go to waste");
			}
			if(galleryCheck("starlet1a") ==  true){
				writeBig("images/starlet/1-3.jpg", "Art by Oreteki18kin");
				writeSpeech("coach", "", "Lana... You... Oooh fuck.");
			}
			if(galleryCheck("starlet2") ==  true){
				writeBig("images/starlet/2-2.jpg", "Art by Oreteki18kin");
				writeSpeech("coach", "", "Such a good little slut.");
			}
			if(galleryCheck("mistress3") ==  true){
				writeBig("images/mistress/3-3.jpg");
				writeSpeech("coach", "", "Be a good whore...");
			}
			if(galleryCheck("sports8b") ==  true){
				writeBig("images/sports/8c3.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "Zoe... I always knew she'd fuck like a beast.");
			}
			writeText("You give her a spank as the video starts to loop.");
			writeSpeech("player", "", "So you understand, slut?");
			writeText("Her eyes stay on the screen as image after image of deprived sex act flashes on screen.");
			writeSpeech("coach", "", "Yes, playerH! Make me your whore!");
			writeText("You slide your cock out of her, and grab her by the hips, pulling a chair so you can sit with her bouncing on your cock while she keeps watching the video.");
			writeBig("images/coach/3b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Get moving, then, bitch.");
			writeText("She gives your cock a few tugs, and rubs her slit against you before lining up your cock and lowering herself.");
			writeSpeech("coach", "", "Yes, playerH!");
			writeText("She moves quickly, bouncing up and down, you feel her sliding herself forwards and back, rocking to try and bottom you out as far as she can manage all while she stares at the screen, transfixed by your 'training program'.");
			writeSpeech("player", "", "Not bad, slut. Keep it up.");
			writeBig("images/coach/3b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As she moves, she puts her breasts on your face. You kiss, lick, and suck as she moves, losing yourself to the carnal pleasure of a newly broken girl.");
			writeSpeech("coach", "", "Fuck, fuck, fuuuck, I'm gonna...");
			writeText("Her wild bucking as she cums on top of you is too much to bear. You cum, thrusting yourself as deep as you can manage.");
			writeBig("images/coach/3b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Pause the video, coachF.");
			writeText("She does so slowly, moving her hand reluctantly to your laptop to stop the cascade of porn.");
			writeSpeech("coach", "", "That was incredible, playerH.");
			writeBig("images/coach/3b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her smile says so much as she slowly rises off of you and begins to clean herself enough to face the public.");
			writeSpeech("player", "", "You were pretty good, yourself, my little slut.");
			writeText("coachF shudders as you call her that.");
			writeSpeech("coach", "", "Oh yeah, you do know how to treat a woman right. From what I saw in that video, you treat plenty of women right.");
			writeSpeech("coach", "", "... And I'm just another one, huh?");
			writeSpeech("player", "", "Not <i>just</i> another one. But you are one of mine now. And how does that feel?");
			writeSpeech("coach", "", "I... don't know yet. I feel like I should be pissed, but at the same time...");
			writeSpeech("coach", "", "... I think it feels right?");
			writeText("coachF's confusion quickly passes. She's certainly under your control, but you don't know if she's ready for what you want just yet.");
			writeSpeech("player", "", "That's good for now. Don't worry, you have plenty more to learn. And I'm very good at teaching bitches like you.");
			writeText("You give coachF another spank as you say that, and you hear her whimper 'Yes playerH.' as she walks out of your office.");
			writeFunction("changeLocation(data.player.location)", "Almost. Maybe one more lesson, then she'll be ready.");
			updateMenu();
			break;
		}
		case "coach4b": {
			writeText("You don't even knock on the door. You stride into coachF's home as if you own it. Which, in a few hours, you functionally might.");
			writeSpeech("coach", "", "Oh, playerH! Are you here to teach this hopeless little schoolgirl slut?");
			writeBig("images/coach/profileP.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You chuckle to yourself. Sure, you can work with this.");
			writeSpeech("player", "", "Yes. Yes I am. You've been a bitchy little whore, and it's time I put you in your place.");
			writeBig("images/coach/4b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Mmm, playerH... That looks so good. How exactly do you plan to teach me?");
			writeSpeech("player", "", "Move to the edge of the bed, slut. It's time for you to learn your place.");
			writeText("She finishes off the rest of her beer, and puts out her cigarette as she moves. You strip yourself and move above her, putting your sizable cock onto her face. She starts to try and lick you before you pull your cock back and give her a meaty <i>SLAP</i> on the cheek with it.");
			writeBig("images/coach/4b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "What's wrong, slut? Did you want something? Did you expect something? Speak up.");
			writeText("She looks up at you, desperately.");
			writeSpeech("coach", "", "I... I didn't want to speak out of turn, playerH. Please... Please let me suck your perfect cock. Let me properly show you my respect... My devotion.... My talents.");
			writeText("She licks her lips as she speaks. You can see drool dripping from the corner of her mouth as she looks up into your eyes. Waiting for permission before doing anything.");
			writeSpeech("player", "", "You're confident in your skills then, slut? No. That's not what you're here for today. You're not here to impress me. You're here so that I can get off. Open your mouth. Don't move your hands, don't lick me, don't take me in. Just open your mouth and wait.");
			writeText("She nods, opening her mouth wide, as you line yourself up with her mouth. You take a few moments to admire the view, coachF trying desperately to taste you without moving her head, before you line your cock up with her waiting hole.");
			writeSpeech("player", "", "Stick out your tongue as far as you can, slut. Lick me as I use you.");
			writeText("She grunts her acceptance as you slap your cock onto her waiting tongue. Hungrily, she moves her tongue as far up and down on your shaft without moving her own head. As she does, you begin to rock your own hips. Not shoving yourself into her mouth, but letting it slide across her tongue, move up her nose, as you let her lick further and further down. Then back up, slowly. from base to head. Letting her lick along your urethra, letting her spit shine your head before moving yourself back up, sliding your length along her face, smearing spit and precum along her nose and near her eyes. But like the good slut she is, she never breaks eye contact.");
			writeText("And you push further, past the base of your cock, and let her take your now twitching balls into her mouth, and she greedily sucks them. Taking each one into her mouth individually and worshiping your sack around them with her tongue. You keep pushing, letting her lick along the bottom of your ball sack, before shoving her nose into your balls, and her mouth into your taint. Her tongue never stops, touching every inch of you she can possibly get to given her limited movement. You can practically feel her trying to seek out your asshole with her tongue, but you stop her short.");
			writeSpeech("player", "", "You really are an asslicking slut, aren't you?");
			writeText("coachF moans under you, where she's stuck she can't smell anything but your musk as her nose presses into your taint and balls, her eyes, half covered by your sack over her face, are clouded and unfocused, lost in the pleasure of serving you.");
			writeText("You give her what she wants, pushing her into your taint further, and her tongue immediately gets to work, licking around your rim before just barely poking it's way in. You feel her probing and moaning as she tries to find whatever spots set you off the most.");
			writeText("You let her work for a few minutes before slowly moving her back up, and she continues her work the whole way back, slobbering and wetting every inch of your cock before she's back into position, mouth wide open, tongue out, just out of reach of licking your cock.");
			writeSpeech("coach", "", "playerH? Permission to speak?");
			writeSpeech("player", "", "What is it, slut? Because I don't intend to stop.");
			writeSpeech("coach", "", "Thank you playerH. Thank you for treating me like the worthless slut I am. Thank you for taking the time to teach me how to show you the proper respect. And thank you for showing me what I truly am.");
			writeText("And with that, she returns to her position. Mouth open, waiting for your commands.");
			writeSpeech("player", "", "We're not done yet, my little slut. Keep your hands where they are. I'm going to use your face as a toy.");
			writeText("She nods, a small movement, to show she's ready for whatever you ask of her.");
			writeBig("images/coach/4b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You thrust in quickly. She was expecting it, but even then, with how quickly you move, and the size of your cock, you don't get very far before you meet resistance.");
			writeSpeech("player", "", "Open up, slut. You were so confident about your skills. Prove you have them.");
			writeText("You feel her groan as she tries her best to relax. Every grunt and moan sending vibrations up and down you length as you start to use her throat in earnest. She wasn't lying, she is good at this, even without moving her hands, and trying her best to keep her head still, her skilled tongue wrapping around your cock as you use her like an onahole does wonders. You settle into a rhythm quickly, thrusting in and out, finding her limit every time, before holding and letting her gag as you push yourself deeper and deeper in.");
			writeBig("images/coach/4b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Bit by bit, she finally manages to properly deepthroat you. Once you're there, you redouble your efforts. Every time you move, you feel spit slipping out from her lips, covering her too small uniform in drool, making her white top translucent.");
			writeText("You get as deep as you think you're going to manage today, and stop.");
			writeSpeech("player", "", "Hold it right there, slut. I want to feel you gagging for a bit. Maybe we'll see how long you can hold your breath...");
			writeBig("images/coach/4b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She tries to moan a response, but with you that deep in her throat, it only leads to her gagging on her own spit. She closes her eyes and focuses, trying to stay exactly where she is. Fighting every urge she has to pull back and get air. You feel her desperately trying to tongue your cock, and you feel her throat spasm as her gag reflex- however suppressed- manages to kick in. You leave her there for nearly a full minute before you grab her hair and yank her off you cock.");
			writeBig("images/coach/4b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF's face is covered in spit, and she's trying her best to catch her breath, but even after that treatment she maintains her position in case you want to keep using her. Mouth open, tongue out. Waiting for your command.");
			writeFunction("writeEvent('coach4c')", "Not bad, slut. Lie on your back.");
			updateMenu();
			break;
		}
		case "coach4c": {
			writeText("She immediately lets herself fall to her back. It occurs to you that the position you had her in probably wasn't comfortable. Oh well. This one won't be either.");
			writeSpeech("coach", "", "How is it you want to fuck your schoolgirl slut, playerH?");
			writeText("You smile and grab her legs. Pushing them up and out, spreading her legs and exposing her soaking cunt, before putting your cock onto her lips.");
			writeSpeech("player", "", "Quiet, whore. I'm not done using you.");
			writeText("For the first time since you've started you see her falter.");
			writeSpeech("coach", "", "Hey, wait, hang on, you need to put on a con-");
			writeText("Her protests are cut off by a <i>SLAP</i> as you smack her face. <b>Hard.</b>");
			writeSpeech("player", "", "I told you to be <b>quiet.</b> You still don't understand, do you slut?");
			writeBig("images/coach/4c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "<b>You. Belong. To ME.</b>");
			writeText("She whimpers as you enter her, and as she realizes just what that truly means.");
			writeSpeech("coach", "", "I... I'm sorry, playerH. You're right. Fuck me raw. Use your slut however you please.");
			writeText("Despite her original protest, you feel her trying even harder to please you. coachF truly is a submissive slut deep down. Or if she wasn't before, she is now.");
			writeSpeech("player", "", "Did I tell you to move, bitch? Stay. Still.");
			writeText("Another whimper as she tries to keep herself still. You feel her legs shaking, and back tighten up as you continue mercilessly pumping inside her. This position must be hell on her muscles. But she tries her best to keep herself wide open as you drill her into her own bed.");
			writeBig("images/coach/4c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you continue, you feel her cunt tighten even more, and a spray against your thighs as she cums and squirts against you. As her orgasm subsides, you slow yourself down. It's time to put the final nail in the coffin.");
			writeSpeech("player", "", "There's a proper slut. Do you want more?");
			writeText("She barely even acknowledges you speaking, so you reel back and give her another slap across the face.");
			writeSpeech("player", "", "I asked you a question, slut! Do you want more?!");
			writeText("Her eyes snap to attention, and she screams her response.");
			writeSpeech("coach", "", "Yeees! Please, playerH! Give me more!");
			writeSpeech("player", "", "Then tell me what you are, slut! Tell me what you'd do for me.");
			writeSpeech("coach", "", "Anything, playerH! I'd do anything! I'm worthless, nothing but a slut, a toy for you to use however you fucking want! So please, playerH! <b>Use! Your! Slut!</b> ");
			writeText("She screams as you bottom out in her. That's exactly what you wanted to hear. You're not going to last much longer, but in thirty seconds or so of chaotic pumping you lose count of the number of times she cums underneath you.");
			writeBig("images/coach/4c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("A primal grunt leaves your lips as you finally lose control and cum inside your newly converted slave. You feel her body respond in kind, another wave of orgasms racking her body, but she's long since stopped making more noise than whimpers, her eyes a million miles away, her mind giving in to how good it is to finally have found her place.");
			writeBig("images/coach/4c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You say nothing as you pull yourself out quickly. Leaving her empty as your cum spills out of her cunt and onto her bed. You begin to get dressed as you ask her a question");
			writeSpeech("player", "", "So, I asked you before, slut. You weren't completely convinced. Tell me now. How does it feel to be one of mine?");
			writeText("Her breathing steadies as she closes her eyes and really thinks about what you asked her. It's a full three minutes before she opens her eyes to see you fully dressed and ready to leave, and she gives you her answer.");
			writeSpeech("coach", "", "I don't know why I ever wanted anything else... Master?");
			writeText("You smile. She already knows what you expect. Most of the women in the videos had been calling you the same thing.");
			writeSpeech("player", "", "Good, my slut. I'm glad you finally understand.");
			writeFunction("changeLocation(data.player.location)", "Without another word, you leave. Giving her time to adjust to her new outlook on life.");
			updateMenu();
			break;
		}
		case "coach6b": {
			writeBig("images/coach/selfie1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Master. I'm so glad to see you.");
			writeText("You don't even give her time to react, pushing her down to her knees in the entrance of her own home.");
			writeSpeech("coach", "", "Fuck, I love it when you-");
			writeText("No time to waste. You shove your cock into her open mouth as she speaks.");
			writeBig("images/coach/6b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "I'm not here for a chat, slut. Get to work.");
			writeText("She pulls her head off your cock and smiles up to you.");
			writeSpeech("coach", "", "Of course you're not Master.");
			writeText("And with that she immediately gets back to work. Today you allow her to use her hands, but true to her own nature, she keeps one hand holding a cigarette while the other works the base of your cock, occasionally loosening her grip to let her fingertips lightly brush and graze across your sack, causing your balls to twitch from the light but electric touch. All while she takes the head of your cock into her mouth, licking and drooling, letting her spit leak out and lubricate the bottom of your shaft as she works it.");
			writeText("She pulls off for a second, taking a breath and admiring your now slobber covered cock.");
			writeSpeech("coach", "", "Here, Master, let me show you a trick...");
			writeBig("images/coach/6b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF takes a long drag on her cigarette before getting back on your cock. The feeling is... Bizarre. The smoke makes her mouth hotter, and you can feel her throat is less relaxed and more ready to gag as she goes deeper. And it's not long before you look down and see the smoke from her drag blowing out of her nose as she tries to keep her breath going.");
			writeSpeech("player", "", "Nice trick, slut.");
			writeText("She moans a thank you as she keeps working on your cock. You let her work for a while, until you feel that pressure, and you get ready to blow.");
			writeSpeech("player", "", "Don't you dare stop, slut. Swallow it all!");
			writeBig("images/coach/6b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF pulls back as you cum, letting it flow into her mouth, making sure to keep a tight seal with her lips over your cock head, not letting any cum spill. After you've finished, you feel her tongue licking you clean before she swallows. Once. Gulp. Twice. Gulp. And she pulls off.");
			writeBig("images/coach/6b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck, you taste good.");
			writeSpeech("player", "", "I hope you don't think we're done here, slut.");
			writeText("You drag her by her hair to the bed. She crawls next to you the whole way.");
			writeFunction("writeEvent('coach6c')", "You throw coachF onto the bed roughly, and she lands on her back.");
			updateMenu();
			break;
		}
			case "coach6c": {
			writeText("You practically rip her panties off, as you move to fuck her.");
			writeBig("images/coach/6c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck me, Master. I've been a good slut for you, right? So please... Please fuck me!");
			writeText("You tease her a little longer as she begs, rubbing your cock against her cunt. It's not long, but to her it must feel like an eternity. Her cries getting more and more desperate as you push your head against her lips and slowly enter her.");
			writeBig("images/coach/6c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You start slowly. This is meant to be a reward. Feeling out for her sensitive spots, you thrust and move your hips slowly. Each time she whimpers as you find some new part of her body she never thought would bring her pleasure. It's not long before she's turning to putty underneath you.");
			writeBig("images/coach/6c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ahh~. That's... I can't... Fuuck!~");
			writeText("There it is. You pick up the pace now that you've got an idea where she's weak, making sure to twist your hips just right at the peak of your thrust. Both of your thighs are soaked with her juices and you feel yourself about to cum again as you thrust in one last time.");
			writeBig("images/coach/6c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/coach/6c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ah~ Master. That was-");
			writeText("You cut her off again, pulling her up and onto her knees, and pointing her away from you. You don't give her time to react before you line your cock up with her plump ass.");
			writeSpeech("player", "", "I'm still not done, slut.");
			writeBig("images/coach/6c6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "If you're not done, Master, then your slut is here to please.");
			writeSpeech("player", "", "Then please me, slut. Get my cock in your ass.");
			writeSpeech("coach", "", "I've... Never.. But, yes. I will Master. Just let me...");
			writeText("She slowly pushes herself backwards. You cock meeting resistance as it presses up against her tight, puckered hole. Slowly, she relaxes and starts to take you in.");
			writeBig("images/coach/6c7.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck, fuck fuck, fuck, fuck...");
			writeText("Her curses are no louder than a whisper as she slowly inches your cock into herself. Bit by bit, she moves herself back and forth, trying to go a little deeper each time, and making good progress.");
			writeText("Too bad you're feeling impatient.");
			writeText("She moves to pull herself off your cock again, when you grab her hips and <b>yank</b> her backwards onto your cock, nearly bottoming out before she clenches in surprise and pain.");
			writeSpeech("coach", "", "<b>Fuck!</b> Master I-");
			writeText("You pull back your hand and spank her right across her ass, hard enough to leave a red mark that may become a bruise.");
			writeSpeech("player", "", "Quiet slut! I gave you plenty of time to loosen yourself up for me, now I'm going to fuck. You. Senseless.");
			writeText("And with that you start to pump yourself quickly. With how tight she is, and how much she's clenched down, you can't actually get much movement, but the feeling of her ass trying to hold you in and squeeze you dry is overpowering. You work your way deeper and deeper with each thrust, and you get ready to give your slut one last load.");
			writeSpeech("coach", "", "Cum in me Master! Please! Fill this worthless slut's ass!");
			writeBig("images/coach/6c8.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Take it you whore!");
			writeText("As you cum, you feel her cum with you, her ass convulsing, tightening and loosening as your cum fills her to the brim.");
			writeBig("images/coach/6c9.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "So full... Thank you Master.");
			writeText("You pull yourself out and take a moment to admire your handiwork before cleaning yourself and getting ready to go. coachF is too worn out to move, and merely stays where she was, kneeling on the bed, cum leaking out of both her holes as you take off.");
			writeFunction("changeLocation(data.player.location)", "Another satisfied slave.");
			updateMenu();
			break;
		}
		case "coach8b": {
			writeText("You strip and sit on the bed, pointing to the ground in front of you. She moves quickly, kneeling in front of you and wrapping your cock around her massive tits.");
			writeBig("images/coach/8b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Oooh, it's been too long. Your slut missed this feeling, Master.");
			writeText("She squeezes her breasts hard around your cock, pumping you desperately. You hear her moan with each movement. As horny as she is, as on the edge as she's been for the last hour, she has no real control over her movement, it's all erratic and desperate for the feeling of your cock on her body.");
			writeBig("images/coach/8b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As a small bit of precum leaks from your tip, she smiles and leans her head down to lick it clean, shuddering with pleasure when she tastes you.");
			writeSpeech("coach", "", "I've spent so long thinking about what I'm doing, Master. Leading those girls to you for you to break. Right into your open arms.");
			writeText("Her words form in gasps as she works. Her breath ragged and uneven.");
			writeSpeech("coach", "", "Thinking about how you'll turn those girls into your slaves. Your harem. Like me. Another desperate moaning mess for you to use however you please.");
			writeText("She can barely get out a word as she redoubles her pace, but she keeps talking. Sneaking in syllables between moans, between licks, as she keeps trying to milk the cum out of your twitching cock.");
			writeSpeech("coach", "", "orangeF on her knees in front of you, cock in her mouth, as she touches herself.");
			writeSpeech("coach", "", "swimmerF underneath you, licking your balls, tongue meeting with orangeF when she bottoms out and touches her nose to your pelvis.");
			writeSpeech("coach", "", "And coldF, behind you, face pressed into your ass, licking you clean as she debases herself for your pleasure.");
			writeSpeech("coach", "", "And <b>I</b> gave them to you.");
			writeSpeech("coach", "", "And your slut will always be there to bring you more.");
			writeBig("images/coach/8b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("That sends you over the line, and you burst, covering her breasts in your cum.");
			writeText("You both stop for a moment, catching your breath and getting ready for what comes next.");
			writeBig("images/coach/8b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Well, apparently the girls still need some training if you're that pent up... Maybe I should change volleyball practice up a bit...");
			writeText("You slap her and pull her onto the bed. You're not done yet.");
			writeSpeech("player", "", "Time for the main course, slut.");
			writeBig("images/coach/8b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You don't give her time to respond before forcing your way in. It's not long before she's reduced to formless moans.");
			writeBig("images/coach/8b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Maa-!~ -Ter!~ Fuu!~ Give... Give it to your slut!~ Do-Don't hold back!");
			writeBig("images/coach/8b7.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("This pace is brutal. You feel your legs and core burning, but her whimpers under you, and the feeling of using this woman, once so proud and bitchy as a willing fuck doll makes all the muscle fatigue you'll feel tomorrow worth it. You lose control of the rhythm quickly, as it just turns into wild and violent thrusting. Finally, you push yourself in one last time, deep as you can manage, and let yourself cum.");
			writeBig("images/coach/8b8.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "<b>THANK YOU MASTER!~</b>");
			writeText("It takes full minutes before you find enough energy to pull yourself out, leaving coachF a sloppy mess on her own bed.");
			writeSpeech("coach", "", "I... I don't think I can move, Master. I'm sorry, that was... That was intense.");
			writeText("You chuckle. She's right about that much. Working quickly, you do a little bit of cleanup before throwing a blanket onto coachF.");
			writeSpeech("player", "", "Get some rest, then. I'll tell principalF you weren't feeling well and checked out for the day.");
			writeFunction("changeLocation(data.player.location)", "She mutters a thank you, pulling the blanket close as you shuffle out the door. You can already hear her snoring as you walk away.");
			updateMenu();
			break;
		}
		case "coach10c": {
			writeText("You get to coachF's house and pull her inside. Once you're in, though...");
			writeBig("images/coach/10c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As soon as you've made your way into the door, coachF grabs you by the shirt and pushes you into a wall.");
			writeSpeech("coach", "", "Look, you... You... I- I know you've changed me, okay? I don't know what you did. I don't know how you did it.");
			writeText("Her voice cracks as she speaks.");
			writeBig("images/coach/10c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "I used to be such a bitch. I was never fucking happy with anything. I never wanted to help anyone. Why would I? They were wasting my time. All I wanted to do was get paid, get drunk, and get laid.");
			writeSpeech("coach", "", "Now though? Now I don't just want to get paid. I want to do my job. I want to help the people around me. And now... Now I get why people didn't like me before. Now I get that I was the one wasting people's time.");
			writeBig("images/coach/10c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She smiles as she continues.");
			writeSpeech("coach", "", "And I know most, if not all of it, isn't normal. No normal person would want to lead people to you and make them your sex slaves.");
			writeSpeech("coach", "", "No normal version of this change comes with wanting to throw myself at your boots and lick them clean, just to prove my devotion to you.");
			writeSpeech("coach", "", "But the truth is... Deep down, I still <i>do</i> just want the simple things. I still do want to do my job, even if that means something a little different now. I still do want to get drunk, and enjoy my time off, even if that getting drunk is now in the company of good friends, not just alone on my couch.");
			writeSpeech("coach", "", "And more than anything else, I still want to get laid. But now, that means I want my perfect Master's cock to fill every part of me. Not just forcing lesser men to do their best, but having the best treat me like I deserve to be treated.");
			writeText("coachF lets go of your collar and strips quickly. When she's finally naked, she turns to you and looks into your eyes, before letting her gaze fall to the floor and her head dip down. More in embarrassment than submission, but still.");
			writeBig("images/coach/10c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "So, Master. From the bottom of my heart. Thank you for what you've done to me.");
			writeText("You stand there in a minute of stunned silence before making your next move.");
			writeBig("images/coach/10c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You pull her in and kiss her hard. The look of surprise on her face quickly melts into pleasure as you worm your tongue into her mouth.");
			writeBig("images/coach/10c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Finally, you pull back, coachF tries for a moment to push forward, keeping the kiss going before you hold her back and she shies back.");
			writeSpeech("coach", "", "Thank you, Master. Now... give me a minute. I have a something I think you'll enjoy.");
			writeFunction("writeEvent('coach10d')", "You nod, and relax in her bed while she steals away to the closet.");
			updateMenu();
			break;
		}
		case "coach10d": {
			writeText("Just a few minutes later, and coachF strides out of the closet.");
			writeBig("images/coach/selfiecow.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "So, Master... How do you want to use your lowly slut tonight?");
			writeText("As she speaks, she pulls on her tits, teasing you with the sight of her nipples beneath her small, thin bikini.");
			writeSpeech("player", "", "Come here, slut.");
			writeBig("images/coach/10d1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You grab at her tits roughly. coachF moves her own hands out of the way, giving you free reign to do as you like with her body.");
			writeSpeech("coach", "", "Ahh!~ Master! You're being so rough.");
			writeBig("images/coach/10d2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Please don't stop. Pull your slut's udders! Milk me dry!");
			writeBig("images/coach/10d3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Well, she asked. You wrap your lips around her nipple and suck. Her nipples hardened already, you run your tongue along it's length before lightly biting as you pull back. Every movement you make forcing moans from coachF.");
			writeSpeech("coach", "", "Master, I can't take much more teasing... Please...");
			writeSpeech("player", "", "If you think I'm done with these tits, slut...");
			writeText("You grip her breasts hard, and hear her cry out in pain as you push her straight down onto the bed. You're about to place your cock between her tits when coachF speaks up.");
			writeSpeech("coach", "", "Wait! Wait, Master! I have...");
			writeText("She reaches her hand out to the nightstand and pulls out a bottle of lube.");
			writeSpeech("coach", "", "Here, Master, let me...");
			writeText("coachF upturns the bottle of lube onto her chest, rubbing it in, and covering every inch of her tits, giving you a show of pulling her nipples and cupping all her curves as she does. Making her chest slick before she moves her hands up and away, giving you full control.");
			writeSpeech("coach", "", "There Master, your slut is ready.");
			writeBig("images/coach/10d4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You reach down and get a rough grip on coachF's tits again, before moving your cock against her cleavage. As you press in, you feel the warmth of her breasts, and the slick feeling of the lube as you slide your cock in underneath her bikini.");
			writeText("You begin to thrust, and as you do, you pull her tits up and down with your movements, using them as a tool to jerk yourself, even as you fuck them. coachF keeps her hands above her head, and underneath you you can feel her twisting and turning her hips and legs. She may have her hands under control, but she's obviously turned on, and feeling that bikini bottom rubbing against her as you pull and push her around must be driving her wild.");
			writeSpeech("coach", "", "So rough, Master.~ Ah!~ I take it my tits please you, then?~");
			writeBig("images/coach/10d5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You grunt an affirmation as you pick up the pace. The lube has done wonders for this. It's not as personally satisfying as having your slaves lube you up with their own spit, but the feeling is much smoother. Almost silky.");
			writeText("And then a thought occurs to you.");
			writeSpeech("player", "", "This is damn good lube, slut. Why did you have it on hand?");
			writeText("Her face, already flushed red with arousal, seems to bloom even redder. Apparently she's embarrassed. You don't stop thrusting, but between moans and gasps, she answers.");
			writeSpeech("coach", "", "I... Master, I really liked having you in my ass. I've been using that lube and my dildo to train myself for when you decide to use me like that again. The dildo doesn't compare to you, Master, but it still feels good...");
			writeBig("images/coach/10d6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("The admission sends you over the edge, and you cum all over your slut's face.");
			writeBig("images/coach/phonereward.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You're still idly using her tits to play with yourself as she licks her lips, trying to swallow any of your cum she can without moving.");
			writeSpeech("coach", "", "Damn, Master! Even after all those girls I sent you you <i>still</i> have this much cum to give your slut? I really don't deserve you, playerH.");
			writeText("You pull yourself back, and take a moment to breathe before getting up and moving to the nightstand. coachF takes the moment to clean herself with her fingers, wiping herself off, then licking fingers clean, one at a time. She turns for a moment, and you grab the lube and double up on yourself, making sure your cock is slick everywhere as you get back onto the bed and surprise coachF by pushing her onto her stomach.");
			writeSpeech("coach", "", "Master! What are you-");
			writeText("Her question is cut short as you place your cock up against her asshole.");
			writeBig("images/coach/10d7.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "<b>Ooooh! Fuck! Yes!</b>");
			writeSpeech("player", "", "You said you had been training your ass, huh, slut? Then let's see if you can take it.");
			writeText("Getting inside her takes a moment. You're lubed up, but she isn't and you can feel the discomfort as you start, pushing yourself in inch by inch. But as you work your way in, as the overcoating of lube on your cock spreads in her ass, and as you feel her relax, letting her body loosen as you push, you can feel her twitching under you. The moment you bottom out, you feel the walls of her ass twitch and hear her let out a sharp exhale around the pillow she's bitten down on.");
			writeBig("images/coach/10d8.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Did you just cum, slut?");
			writeText("You hear her try and mumble into the pillow. Not good enough. You rear your hand back and <b>SPANK</b> her ass hard.");
			writeSpeech("player", "", "I asked you a question, slut! Answer me!");
			writeText("She wrenches her head up and screams her answer.");
			writeSpeech("coach", "", "<b>Yes! Fuck yes! I came when my Master filled my ass! Thank you Master! Please, give your slut more!</b>");
			writeText("And right back to biting the pillow. Oh well, it won't stop you. Now that she's loosened up, you start to fuck her in earnest. slowly picking up the pace until you're back to the proper pace for using your slutty fucktoy. You can just barely hear coachF mumbling 'fuck, fuck, fuck' into the pillow every time you push in. It's not long after you've hit that pace you feel her ass spasm again, overtaken by another orgasm, and the feeling of her walls rapidly tightening and loosening around your cock as you continue your primal thrusting is too much.");
			writeBig("images/coach/10d9.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "<b>MMM!~ Fank uu mater!~</b>");
			writeText("She screams her thanks into the pillow. Another slight break before pulling yourself out and admiring your work. coachF's ass is properly gaped, spilling your cum onto her bed. Looking at her face, she's blissful and unaware of the world around her, still mumbling thank yous into her pillow, which has been soaked through with spit and drool.");
			writeSpeech("player", "", "That's enough, slut. Can you stand?");
			writeText("Her eyes focus for a moment before she nods and shakily pulls herself up to her knees. She takes a couple of deep breaths and steadies herself as you reach out a hand to help her off the bed.");
			writeSpeech("coach", "", "... Master, <i>any</i> time you want to use my ass, just let me know. That was incredible.");
			writeText("You laugh, and pat her head.");
			writeSpeech("player", "", "Slut, if I wanted to use your ass, you know I don't need permission. But I'll keep it in mind. Now strip.");
			writeText("She looks slightly confused, and is a little unsteady when she moves to pull the bikini bottom off, but slowly gets nude in front of you.");
			writeSpeech("coach", "", "What is it Master, did you want to-");
			writeText("She's just gotten naked when you push her onto the bed and <b>SNAP</b> your fingers.");
			writeSpeech("player", "", "<i>Sleep</i>. It is far too late, and we still have work in the morning.");
			writeText("She's already out by the time you get to complaining about the time. You find a relatively clean blanket and throw it over her, before you kiss her forehead. As you kiss her, she mumbles.");
			writeSpeech("coach", "", "Thank you, Master... Love you Master...");
			writeText("... And then the snoring ruins what was a nice moment. Oh well.");
			writeFunction("changeLocation(data.player.location)", "Now where the ever living fuck are your pants?");
			updateMenu();
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
	{index: "coachphone1", trust: 30,},
	{index: "coachphone2", trust: 31,},
	{index: "coachphone3", trust: 70,},
	{index: "coachphone4", trust: 81,},
	{index: "coachreward", trust: 200,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "coachphone1": {
			writePhoneSpeech("coach","","So, when am I supposed to watch these 'orientation videos'. Waste of fucking time.");
			writePhoneSpeech("player","","You could at least pretend to take this seriously.");
			writePhoneSpeech("coach","","Trust me shithead, I'm taking it seriously. Just wondering how to cut your brake lines without getting caught by the police.");
			writePhoneSpeech("player","","Well, step one is probably 'don't text your plan to me.'");
			writePhoneSpeech("player","","Besides, I walk to work.");
			writePhoneSpeech("coach","","Hit and run it is.");
			writePhoneSpeech("player","","I'll let you know when I have the course prepared. I get the feeling you'll need some specially made stuff if I want the lessons to sink in.");
			writePhoneSpeech("coach","","Oh, fucking joy. I get to see your home movies.");
			setTrust('coach', 31)
			break;
		}
		case "coachphone2": {
			writePhoneSpeech("coach","","You have those videos yet?");
			if(data.player.hacking > 2){
				writePhoneChoices("Yep, you want a preview?");
			}
			break;
		}
		case "coachphone2A": {
			writePhoneSpeech("coach","","A preview, what the fuck are you talking about?");
			writePhoneSpeech("player","","Oh, just the opening logo. I made it myself, and I'm pretty proud of it.");
			writePhoneSpeech("coach","","Christ you're a nerd.");
			writePhoneImage("images/coach/ribbonball.gif", "spinny");
			writePhoneSpeech("coach","","I... What... What did you just send me?");
			writePhoneSpeech("player","","Neat, right? It works better when paired with the voice over and backing track, but the image itself is pretty good all on it's own.");
			writePhoneSpeech("coach","","I don't... Whatever, you nerd, just meet me in the teacher's lounge so I can watch this shit and be done with it. Then I can go back to figuring out how to kill you.");
			setTrust('coach', 35);
			break;
		}
		case "coachphone3": {
			writePhoneSpeech("coach","","Sooo...?");
			writePhoneSpeech("player","","So what?");
			writePhoneSpeech("coach","","When did you want to see me next?");
			writePhoneSpeech("coach","","I... Damnit. Sorry, playerH! I meant... playerH when is my next lesson?");
			writePhoneSpeech("player","","If that's how you're going to behave, slut, I don't think it's worth my time to teach you.");
			writePhoneSpeech("coach","","No! playerH! I promise, I'll learn. I just... I missed you.");
			writePhoneSpeech("player","","Then prove it, and make up for not showing me the respect I deserve.");
			writePhoneSpeech("coach","","I... I understand, playerH.");
			writePhoneImage("images/coach/selfie1.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("player","","Not good enough, slut. I expect more.");
			writePhoneSpeech("coach","","Shit. Sorry, playerH! I should have known... I... What do you want from me, playerH?");
			writePhoneChoices("Strip, slut. Show me your body.", "Do you have anything appropriate laying around you house?");
			break;
		}
		case "coachphone3A": {
			writePhoneSpeech("coach","","I... Fuck, of course I should have... One second, playerH.");
			writePhoneImage("images/coach/selfienude.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("coach","","I made sure to warm myself up for you, playerH.");
			writePhoneSpeech("player","","What did you think about while you touched yourself, slut?");
			writePhoneSpeech("coach","","I thought about you, playerH. I thought about you teaching me how to be a better teacher. How to be a better slut for you.");
			writePhoneSpeech("player","","That's a good whore. I need to pick something up for your next lesson. You need a proper uniform.");
			writePhoneSpeech("coach","","Thank you, playerH! I'll be ready");
			setTrust('coach', 75);
			break;
		}
		case "coachphone3B": {
			writePhoneSpeech("coach","","I... Shit how could I forget. Give me a second, playerH.");
			writePhoneImage("images/coach/selfiecow.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("coach","","I bought this a while back, but I haven't gotten a chance to wear it for anyone yet. Of course I should have worn this for you, playerH.");
			writePhoneSpeech("player","","A fitting outfit for you, slut.");
			writePhoneSpeech("coach","","Thank you, playerH.");
			writePhoneSpeech("coach","","Wearing it makes me feel like an animal. A pet for you to use, playerH. Would you please use your slut cow's udders?");
			writePhoneSpeech("player","","I will, though not yet. I need to pick something up for your next lesson. You need a proper uniform.");
			writePhoneSpeech("coach","","Whenever you want me, playerH. I'll be ready for you.");
			setTrust('coach', 75);
			break;
		}
		case "coachphone4": {
			writePhoneSpeech("coach","","Master? I... I wanted to ask. What's next?");
			writePhoneSpeech("player","","Next, you're going to help me add to my harem.");
			writePhoneSpeech("coach","","Is your slut not enough for you Master?");
			writePhoneSpeech("player","","I plan to make this whole town mine. You will help me, slut.");
			writePhoneSpeech("coach","","If you want it Master, I'll do anything.");
			writePhoneSpeech("player","","And for each new addition, I promise to reward you, slut.");
			writePhoneSpeech("coach",""," Oh! Thank you Master! Then I'll get right to it.");
			writePhoneSpeech("player","","I already have a few ideas, slut. I'm going to send you some students' files. I'll meet you in the teacher's lounge when I'm ready.");
			setTrust('coach', 100);
			break;
		}
		case "coachreward": {
			writePhoneImage("images/coach/phonereward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","","That's all for coldF for now! I'll be finishing her up soonish.");
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