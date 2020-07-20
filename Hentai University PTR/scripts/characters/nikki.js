var character = {index: "nikki", fName: "Nikki", lName: "Hunt", trust: 0, encountered: false, textEvent: "", met: false, color: "#445B6D", author: "CryptoGreek", artist: "Enoshima Iki", textHistory: "", unreadText: false,};

var logbook = {
	index: "nikki", 
	desc: "A university student with fairly high marks in every course without exception - despite looking fairly tired most of the time, she also seems remarkably diligent.",
	body: "She's a bespectacled beauty befitting the university; her body fills out her uniform incredibly well, and seeing as she has a <i>lot</i> of PE classes in her files, she's must be quite fit beneath it all.",
	clothes: "She mostly wears a very snug-fitting version of the university's general uniform, though the fit of the uniform is modified to match her specific bodytype.",
	home: "Her files say she lives in an apartment just a stone's throw from the university, so she's almost always on-campus.",
	tags: "Online Exhibitionism, Cuckquean, Cumplay",
	artist: "Enoshima Iki",
	author: "CryptoGreek",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "nikkiEnc1", name: "It looks like one of the students is "+(data.player.time == "Morning" ? "taking a break between classes." : "finished with classes."), requirements: "?trustMax nikki 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "nikkiEnc1CA", name: "It looks like nikki is talking to another student.", requirements: "?trust nikki 20; ?location eastHallway;", altName: "", altImage: "",},
	{index: "nikkiEnc2", name: "nikki seems to be reading a textbook alone nearby.", requirements: "?trust nikki 30; ?location northHallway; parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc2", name: "nikki seems to be reading a textbook just down the hall from your office.", requirements: "?trust nikki 30; ?location eastHallway; parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc3", name: "nikki seems to be reading another textbook.", requirements: "?trustMin nikki 40; ?trustMax nikki 45; ?location northHallway; parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc3", name: "nikki's writing in a notebook nearby.", requirements: "?trustMin nikki 40; ?trustMax nikki 45; ?location eastHallway; parity even;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "nikkiEnc1": {
			if(galleryCheck('kuro1')){
				var hasImage = false;
				console.log("hasImage is currently false");
				for(var i = 0; i < data.phoneImages.length; i++){
					console.log("Now checking the "+i+" phoneImage")
				    if(data.phoneImages[i].src.includes("nikki.jpg")){
				    	console.log("hasImage is now true");
				        hasImage = true;
				    }
				}
				if(hasImage){
					console.log("The player does possess the image.");
					writeText("Actually, isn't that...?");
					writeBig("images/nikki/profile.jpg","Art by Enoshima Iki");
					writeText("Approaching her, it isn't hard to recognize her from the picture on your phone.");
					writeText("It's a pretty different angle, but looking at her in uniform, you actually remember her student file too - nikkiF nikkiL. If you recall correctly, she has pretty great grades in her courses...");
					writeText("She didn't seem like the exhibitionist kind, but you suppose the files can't really contain everything.");
					writeText("You could apporach her if you wanted, though the question is really of how you want to do so...");
					writeFunction("writeEncounter('nikkiEnc1B')", "Carefully show her the picture here");
					writeFunction("writeEncounter('nikkiEnc1A')", "Ask her as a counselor to come to your office first");
				}
				else{
					console.log("The player does not possess the image, but has been overheard.")
					writeBig("images/nikki/profile.jpg","Art by Enoshima Iki");
					writeText("nikkiF nikkiL... You recognize her from her student file. She's taken a wide variety of classes at the university, and always scored well regardless of the subject - especially on the many PE classes.");
					writeText("Aside from that, you only really remember that she requested a custom-fit uniform and that, according to the last counselor's notes, she doesn't keep 'the best company'.");
					writeFunction("writeEncounter('nikkiEnc1C')", "Call out to her");
				}
			}
			else{
					console.log("The player does not possess the image, and has not received a handjob from kuroF.");
					writeBig("images/nikki/profile.jpg","Art by Enoshima Iki");
					writeText("nikkiF nikkiL... You recognize her from her student file. She's taken a wide variety of classes at the university, and always scored well regardless of the subject - especially on the many PE classes.");
					writeText("Aside from that, you only really remember that she requested a custom-fit uniform and that, according to the last counselor's notes, she doesn't keep 'the best company'.");
					writeFunction("writeEncounter('nikkiEnc1C')", "Call out to her");
			}
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc1A" : {
			passTime();
			writeSpeech("player","","You're nikkiF, right?");
			writeText("She turns her head to face you, blinking once before looking you over.");
			writeSpeech("nikki","","I am, yes. May I help you, playerMister...?");
			writeSpeech("player","","Call me playerF. I'm the new student counselor. I was actually hoping I could speak with you in my office? Nothing's wrong of course, but I wanted to speak with a few of the students while I get settled into my position.");
			writeText("An almost invisible frown appears on her face, quickly replaced by a small, if nervous smile as she nods.");
			writeSpeech("nikki","","Of course. Lead the way, playerMister Counselor.");
			writeText("...");
			writeText("When you arrive, you internally debate whether you want to close the door. You wouldn't want to put her on edge, but given the nature of what you'll be discussing...");
			writeSpeech("player","","Go ahead and take a seat while I shut this.");
			writeText("The soft click of the door rings out in the otherwise silent room, followed by the sound of nikkiF sitting down as you move to sit across from her.");
			writeText("She has an... odd look about her. Not odd in that it's out of place, but almost like it's <b>too</b> in-place. Past attempts at hypnosis have taught you, at this point, that anything <b>too</b> normal is just as suspicious as the extreme.");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("player","","Truth be told, what I wanted to discuss with you was actually something a bit different.");
			writeText("She pauses slightly, a genuine-seeming look of confusion going across her face as you pull out your phone.");
			writeText("Then, you show her the image, and her expression shifts to something markedly more... neutral.");
			writeSpeech("player","","Your poker face is impeccable.");
			writeSpeech("nikki","","Thank you.");
			writeText("She pauses for a moment, the slight drowsiness from her earlier expression completey replaced by an almost calculating look.");
			writeSpeech("nikki","","Do we want to go over any ground rules? I think it might be a good idea to get any of those out of the way first.");
			writeText("Not a bad idea, but... Well, better to be safe than sorry. She knows about your activities and hasn't been hypnotized...");
			writeSpeech("player","","Before any of that, I'd like to know a bit more about you, if you don't mind.");
			writeText("She pauses for a moment, before nodding simply.");
			writeSpeech("nikki","","Ah, okay - what did you want to know?");
			writeText("You'll need to make her a bit more comfortable before you can hypnotize her, so you'll start out simple...");
			writeText("You reach into your pocket, looping the pendant around you wrist as you speak.");
			writeSpeech("player","","I see that you've taken quite the variety of courses here. Your major is listed as...");
			writeText("You reach for your files, but nikkiF shifts and replies,");
			writeSpeech("nikki","","Ah, business management.");
			writeSpeech("player","","Right, right.");
			writeText("You look over the files a bit, skimming the information for anything of note.");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("nikki","","You said you wanted to speak with me about something?");
			writeSpeech("player","","I'm looking to get acquainted with some of the students, seeing as I'm new here. And, honestly? My memory isn't the best.");
			writeText("You give a small, self-deprecating laugh as you set the papers down.");
			writeSpeech("player","","You're doing pretty good in your classes, but some of these don't really seem to make sense for a business major. Workplace psychology makes sense, but...");
			writeText("You glance down at the papers.");
			writeSpeech("player","","Well, it might just be me, but film study seems to be a bit disconnected. Was that just a personal-interest thing? I know I took a few classes like that myself.");
			writeText("She perks up slightly, her hands separating and sitting neatly on each thigh now.");
			writeSpeech("nikki","","Ah, a family friend showed me a Hitchcock film some time ago, and I thought it would be good to take a fun course alongside some of the more difficult ones that term.");
			writeText("You bring your hand up from your pocket, the pendant glinting slightly in the light/");
			writeSpeech("player","","And all the PE courses?");
			writeSpeech("nikki","","A sounds mind resides within a sound body.");
			writeText("Her eyes move to the pendant for a moment... but she quickly refocuses.");
			writeSpeech("player","","And you have plans for what you'll do after your associate's degree?");
			writeSpeech("nikki","","I think I'll go for a bachelor's, or maybe get a job if I can.");
			writeSpeech("player","","I see.");
			writeSpeech("nikki","","Sorry, could you repeat that? There was a sound in the hall.");
			writeText("She lies pretty well...");
			writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
			writeSpeech("nikki","","Yes, I-");
			writeSpeech("player","","And film history?");
			writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
			writeSpeech("nikki","","Yes. A friend-");
			writeSpeech("player","","-showed you a Hitchcock film.");
			writeSpeech("nikki","","Yes.");
			writeText("She blinks once, her brow furrowing slightly.");
			writeSpeech("nikki","","Yes, they-... h-he did.");
			writeSpeech("player","","Ah, are you feeling alright?");
			writeText("You lean forward slightly, the pendant catching the light again.");
			writeSpeech("nikki","","Y-Ye-");
			writeText("She suddenly stops.");
			writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
			writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
			writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
			writeSpeech("player","","Do... what?");
			writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
			writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
			writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
			writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
			writeSpeech("player","","I'm not sure I know what you're talking about.");
			writeText("This is <b>not</b> going according to plan.");
			writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
			writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
			writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
			writeSpeech("player","","Look, I think-");
			writeSpeech("nikki","","I'd like you to do it again.");
			writeSpeech("player","","...Pardon?");
			writeText("Another near-invisible frown... though this time, she doesn't hide it.");
			writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
			writeText("She crosses her arms over her chest.");
			writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
			writeText("Once again, she pauses slightly, her eyes going to the pendant.");
			writeSpeech("nikki","","...You did it again.");
			writeText("Shaking her head gently, she looks into your eyes...");
			writeText("And you can see that her face is getting flushed.");
			writeSpeech("player","","nikkiF... What do you think I'm doing?");
			writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
			writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
			writeSpeech("player","","And when did that happen?");
			writeSpeech("nikki","","After you asked med questions and I answered...");
			writeText("Her eyes go to the pendant once again.");
			writeSpeech("player","","When you answered 'Yes'.");
			writeSpeech("nikki","","...Yes.");
			writeText("Her breathing picks up slightly, before she shakes her head.");
			writeSpeech("nikki","","Why do you keep stopping?");
			writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
			writeSpeech("nikki","","Because it was the best way to interact with you.");
			writeSpeech("player","","...Okay, define 'best'.");
			writeText("She seems to mull over her words for a moment.");
			writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
			writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
			writeSpeech("player","","You were putting on a face to put me at ease.");
			writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
			writeText("...Oh. Oh!");
			writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
			writeSpeech("nikki","","Correct.");
			writeSpeech("player","","You really are a business major, aren't you?");
			writeSpeech("nikki","","...Yes?");
			writeText("You shake your head.");
			writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
			writeText("A look of genuine confusion goes across nikkF's face.");
			writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
			writeSpeech("player","","And you liked it because...?");
			writeSpeech("nikki","","...I don't understand the question.");
			writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
			writeSpeech("player","","I think I need you to come back to talk again some time.");
			writeText("You scribble down your number, handing it to her.");
			writeSpeech("player","","Text me any time. But here's the thing...");
			writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
			writeSpeech("player","","We just talked about your grades. Right?");
			writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
			writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
			writeText("...Not quite what you were going for, but okay.");
			if(data.player.time == "Morning")
				writeSpeech("nikki","","Now, I do have some more classes before I head home, but...");
			else
				writeSpeech("nikki","","I do have to be heading home now, but...");
			writeText("Her expression tightens up into the same pleasant look as before.");
			writeSpeech("nikki","","I look forward to learning more about what you're doing to me, playerMister Counselor~");
			writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
			writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
			setTrust('nikki',30);
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc1B" : {
			passTime();
			writeSpeech("player","","You're nikkiF, right?");
			writeText("She pauses, looking towards you.");
			writeSpeech("nikki","","I am, yes. You're... the new counselor, yes?");
			writeSpeech("player","","That's me. I actually had a question I wanted to ask you about this phone...");
			writeText("nikkiF smiles slightly, nodding.");
			writeSpeech("nikki","","What's your quest-");
			writeText("When she sees the screen, she pauses.");
			writeText("Then, with a perfectly natural delivery, she says,");
			writeSpeech("nikki","","kuroF's had that problem before. If you want, I can fix it up in your office, though I might end up intruding on you for a while in doing so.");
			writeSpeech("player","","Oh, it's no problem - be my pleasure, really.");
			writeSpeech("nikki","","Then lead the way.");
			writeText("...");
			writeText("When you get into the office, nikkiF calmly shuts the door behind the two of you and, for a moment, seems to pause.");
			writeText("You hear her take a slow, deep breath before she moves to sit on the couch. Her expression is actually almost perfectly neutral as she looks you over.");
			writeSpeech("player","","Your poker face is impeccable.");
			writeSpeech("nikki","","Thank you.");
			writeText("She pauses for a moment.");
			writeSpeech("nikki","","Do we want to go over any ground rules?");
			writeText("Not a bad idea, but... Well, better to be safe than sorry. She knows about your activities and hasn't been hypnotized...");
			writeSpeech("player","","Before any of that, I'd like to know a bit more about you, if you don't mind.");
			writeText("She pauses for a moment, before nodding simply.");
			writeSpeech("nikki","","Ah, okay - what did you want to know?");
			writeText("You'll need to make her a bit more comfortable before you can hypnotize her, so you'll start out simple...");
			writeText("You reach into your pocket, looping the pendant around you wrist as you speak.");
			writeSpeech("player","","I see that you've taken quite the variety of courses here. Your major is listed as...");
			writeText("You reach for your files, but nikkiF shifts and replies,");
			writeSpeech("nikki","","Ah, business management.");
			writeSpeech("player","","Right, right.");
			writeText("You look over the files a bit, skimming the information for anything of note.");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("nikki","","You said you wanted to speak with me about something?");
			writeSpeech("player","","I'm looking to get acquainted with some of the students, seeing as I'm new here. And, honestly? My memory isn't the best.");
			writeText("You give a small, self-deprecating laugh as you set the papers down.");
			writeSpeech("player","","You're doing pretty good in your classes, but some of these don't really seem to make sense for a business major. Workplace psychology makes sense, but...");
			writeText("You glance down at the papers.");
			writeSpeech("player","","Well, it might just be me, but film study seems to be a bit disconnected. Was that just a personal-interest thing? I know I took a few classes like that myself.");
			writeText("She perks up slightly, her hands separating and sitting neatly on each thigh now.");
			writeSpeech("nikki","","Ah, a family friend showed me a Hitchcock film some time ago, and I thought it would be good to take a fun course alongside some of the more difficult ones that term.");
			writeText("You bring your hand up from your pocket, the pendant glinting slightly in the light/");
			writeSpeech("player","","And all the PE courses?");
			writeSpeech("nikki","","A sounds mind resides within a sound body.");
			writeText("Her eyes move to the pendant for a moment... but she quickly refocuses.");
			writeSpeech("player","","And you have plans for what you'll do after your associate's degree?");
			writeSpeech("nikki","","I think I'll go for a bachelor's, or maybe get a job if I can.");
			writeSpeech("player","","I see.");
			writeSpeech("nikki","","Sorry, could you repeat that? There was a sound in the hall.");
			writeText("She lies pretty well...");
			writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
			writeSpeech("nikki","","Yes, I-");
			writeSpeech("player","","And film history?");
			writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
			writeSpeech("nikki","","Yes. A friend-");
			writeSpeech("player","","-showed you a Hitchcock film.");
			writeSpeech("nikki","","Yes.");
			writeText("She blinks once, her brow furrowing slightly.");
			writeSpeech("nikki","","Yes, they-... h-he did.");
			writeSpeech("player","","Ah, are you feeling alright?");
			writeText("You lean forward slightly, the pendant catching the light again.");
			writeSpeech("nikki","","Y-Ye-");
			writeText("She suddenly stops.");
			writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
			writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
			writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
			writeSpeech("player","","Do... what?");
			writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
			writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
			writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
			writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
			writeSpeech("player","","I'm not sure I know what you're talking about.");
			writeText("This is <b>not</b> going according to plan.");
			writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
			writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
			writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
			writeSpeech("player","","Look, I think-");
			writeSpeech("nikki","","I'd like you to do it again.");
			writeSpeech("player","","...Pardon?");
			writeText("Another near-invisible frown... though this time, she doesn't hide it.");
			writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
			writeText("She crosses her arms over her chest.");
			writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
			writeText("Once again, she pauses slightly, her eyes going to the pendant.");
			writeSpeech("nikki","","...You did it again.");
			writeText("Shaking her head gently, she looks into your eyes...");
			writeText("And you can see that her face is getting flushed.");
			writeSpeech("player","","nikkiF... What do you think I'm doing?");
			writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
			writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
			writeSpeech("player","","And when did that happen?");
			writeSpeech("nikki","","After you asked med questions and I answered...");
			writeText("Her eyes go to the pendant once again.");
			writeSpeech("player","","When you answered 'Yes'.");
			writeSpeech("nikki","","...Yes.");
			writeText("Her breathing picks up slightly, before she shakes her head.");
			writeSpeech("nikki","","Why do you keep stopping?");
			writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
			writeSpeech("nikki","","Because it was the best way to interact with you.");
			writeSpeech("player","","...Okay, define 'best'.");
			writeText("She seems to mull over her words for a moment.");
			writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
			writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
			writeSpeech("player","","You were putting on a face to put me at ease.");
			writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
			writeText("...Oh. Oh!");
			writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
			writeSpeech("nikki","","Correct.");
			writeSpeech("player","","You really are a business major, aren't you?");
			writeSpeech("nikki","","...Yes?");
			writeText("You shake your head.");
			writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
			writeText("A look of genuine confusion goes across nikkF's face.");
			writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
			writeSpeech("player","","And you liked it because...?");
			writeSpeech("nikki","","...I don't understand the question.");
			writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
			writeSpeech("player","","I think I need you to come back to talk again some time.");
			writeText("You scribble down your number, handing it to her.");
			writeSpeech("player","","Text me any time. But here's the thing...");
			writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
			writeSpeech("player","","We just talked about your grades. Right?");
			writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
			writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
			writeText("...Not quite what you were going for, but okay.");
			if(data.player.time == "Morning")
				writeSpeech("nikki","","Now, I do have some more classes before I head home, but...");
			else
				writeSpeech("nikki","","I do have to be heading home now, but...");
			writeText("Her expression tightens up into the same pleasant look as before.");
			writeSpeech("nikki","","I look forward to <i>nothing,</i> playerMister Counselor.");
			writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
			writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
			setTrust('nikki',30);
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc1C" : {
			passTime();
			writeSpeech("player","","You're nikkiF, right?");
			writeText("She turns her head to face you, blinking once before looking you over.");
			writeSpeech("nikki","","I am, yes. May I help you, playerMister...?");
			writeSpeech("player","","Call me playerF. I'm the new student counselor. I was actually hoping I could speak with you in my office? Nothing's wrong of course, but I wanted to speak with a few of the students while I get settled into my position.");
			writeText("An almost invisible frown appears on her face, quickly replaced by a small, if nervous smile as she nods.");
			writeSpeech("nikki","","Of course. Lead the way, playerMister Counselor.");
			writeText("...");
			writeText("Arriving in your office, you debate for a moment whether to leave the door open, but ultimately decide to do so. No reason <b>not</b> to be careful.");
			writeText("Sitting down, you smile reassuringly to her.");
			writeSpeech("player","","I see that you've taken quite the variety of courses here. Your major is listed as...");
			writeText("You reach for your files, but nikkiF shifts and replies,");
			writeSpeech("nikki","","Ah, business management.");
			writeSpeech("player","","Right, right.");
			writeText("You look over the files a bit, skimming the information for anything of note.");
			writeSpeech("nikki","","...If you like, I can shut the door.");
			writeSpeech("player","","Ah, I wasn't planning on discussing anything protected under FERPA, if that's what you're worried about..");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("nikki","","You said you wanted to speak with me about something?");
			writeSpeech("player","","I'm looking to get acquainted with some of the students, seeing as I'm new here. And, honestly? My memory isn't the best.");
			writeText("You give a small, self-deprecating laugh as you set the papers down.");
			writeSpeech("player","","You're doing pretty good in your classes, but some of these don't really seem to make sense for a business major. Workplace psychology makes sense, but...");
			writeText("You glance down at the papers.");
			writeSpeech("player","","Well, it might just be me, but film study seems to be a bit disconnected. Was that just a personal-interest thing? I know I took a few classes like that myself.");
			writeText("She perks up slightly, her hands separating and sitting neatly on each thigh now.");
			writeSpeech("nikki","","Ah, a family friend showed me a Hitchcock film some time ago, and I thought it would be good to take a fun course alongside some of the more difficult ones that term.");
			writeSpeech("player","","And all the PE courses?");
			writeSpeech("nikki","","A sounds mind resides within a sound body.");
			writeSpeech("player","","And you have plans for what you'll do after your associate's degree?");
			writeSpeech("nikki","","I think I'll go for a bachelor's, or maybe get a job if I can.");
			writeSpeech("player","","I see.");
			writeText("You nod calmly, looking her over.");
			if(data.player.hypnosis >= 3){
				writeText("This will take a slight change in tactics.");
				writeText("You reach into your pocket, looping your pendant around your wrist before leaning forward.");
				writeText("Resting your elbows on the desk, you smile reassuringly as the pendant catches the light, nikkiF's eyes looking at it for a moment...");
				writeText("...and then another. And another.");
				writeText("She blinks once before refocusing, not even having noticed that her guard dropped for a second there - that her smile had completely dropped.");
				writeSpeech("nikki","","Sorry, could you repeat that? There was a sound in the hall.");
				writeText("She lies pretty well...");
				writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
				writeSpeech("nikki","","Yes, I-");
				writeSpeech("player","","And film history?");
				writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
				writeSpeech("nikki","","Yes. A friend-");
				writeSpeech("player","","-showed you a Hitchcock film.");
				writeSpeech("nikki","","Yes.");
				writeText("She blinks once, her brow furrowing slightly.");
				writeSpeech("nikki","","Yes, they-... h-he did.");
				writeSpeech("player","","Ah, are you feeling alright?");
				writeText("You lean forward slightly, the pendant catching the light again.");
				writeSpeech("nikki","","Y-Ye-");
				writeText("She suddenly stops.");
				writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
				writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
				writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
				writeSpeech("player","","Do... what?");
				writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
				writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
				writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
				writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
				writeSpeech("player","","I'm not sure I know what you're talking about.");
				writeText("This is <b>not</b> going according to plan.");
				writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
				writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
				writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
				writeSpeech("player","","Look, I think-");
				writeSpeech("nikki","","I'd like you to do it again.");
				writeSpeech("player","","...Pardon?");
				writeText("Another near-invisible frown... though this time, she doesn't hide it.");
				writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
				writeText("She crosses her arms over her chest.");
				writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
				writeText("Once again, she pauses slightly, her eyes going to the pendant.");
				writeSpeech("nikki","","...You did it again.");
				writeText("Shaking her head gently, she looks into your eyes...");
				writeText("And you can see that her face is getting flushed.");
				writeSpeech("player","","nikkiF... What do you think I'm doing?");
				writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
				writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
				writeSpeech("player","","And when did that happen?");
				writeSpeech("nikki","","After you asked med questions and I answered...");
				writeText("Her eyes go to the pendant once again.");
				writeSpeech("player","","When you answered 'Yes'.");
				writeSpeech("nikki","","...Yes.");
				writeText("Her breathing picks up slightly, before she shakes her head.");
				writeSpeech("nikki","","Why do you keep stopping?");
				writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
				writeSpeech("nikki","","Because it was the best way to interact with you.");
				writeSpeech("player","","...Okay, define 'best'.");
				writeText("She seems to mull over her words for a moment.");
				writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
				writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
				writeSpeech("player","","You were putting on a face to put me at ease.");
				writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
				writeText("...Oh. Oh!");
				writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
				writeSpeech("nikki","","Correct.");
				writeSpeech("player","","You really are a business major, aren't you?");
				writeSpeech("nikki","","...Yes?");
				writeText("You shake your head.");
				writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
				writeText("A look of genuine confusion goes across nikkF's face.");
				writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
				writeSpeech("player","","And you liked it because...?");
				writeSpeech("nikki","","...I don't understand the question.");
				writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
				writeSpeech("player","","I think I need you to come back to talk again some time.");
				writeText("You scribble down your number, handing it to her.");
				writeSpeech("player","","Text me any time. But here's the thing...");
				writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
				writeSpeech("player","","We just talked about your grades. Right?");
				writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
				writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
				writeText("...Not quite what you were going for, but okay.");
				if(data.player.time == "Morning")
					writeSpeech("nikki","","Now, I do have some more classes before I head home, but...");
				else
					writeSpeech("nikki","","I do have to be heading home now, but...");
				writeText("Her expression tightens up into the same pleasant look as before.");
				writeSpeech("nikki","","I look forward to <i>nothing,</i> playerMister Counselor.");
				writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
				writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
				setTrust('nikki',30);
			}
			else{
				writeText("As it is, it'll take a bit of time to do anything with her. For whatever reason, she's intent on convincing you that she's nervous.");
				writeSpeech("player","","Well... Seems to me like things are going pretty good for you thus far.");
				writeText("You smile brightly at her, picking up the papers on the desk.");
				writeSpeech("player","","If it's alright, I'd like to talk with you again sometime. I'd recommend looking into trying to form some connections with businesses now, while you're still in school, so that you at least have options prepared for when you graduate.");
				writeSpeech("nikki","","Ah, I've been looking into that sort of thing, actually. Not much progress though, if I'm being honest...");
				writeText("\"And you're not\", you resist the urge to say.");
				writeSpeech("player","","Well, don't be a stranger. If there's anything you need to talk about, remember that my door is always open to those who need someone to listen.");
				writeText("She smiles brightly, nodding once.");
				writeSpeech("nikki","","I look forward to speaking with you again, playerMister Counselor.");
				writeText("With that, she stands up and heads out.");
				writeText("...Well, might as well get started on preparing.");
				writeText("You're not sure what game she's playing, but that's fine. In the end, you always win anyway...");
				setTrust('nikki',20);
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nikkiEnc1CA" : {
			passTime();
			writeText("When you approach her, you almost call out to her... before realizing she must've already noticed you, as the person she was talking to gives some kind of understanding nod and leaves just as you approach.");
			writeSpeech("nikki","","Ah, playerMister Counselor - how are you today?");
			writeText("She looks up at you with that same measured smile.");
			writeSpeech("player","","I'm doing pretty good, just wanted to ask you something I forgot to mention yesterday - it has to do with your PE credits though, so if you want to discuss it in my office...?");
			writeText("A momentary look of concern seems to pass through her as she nods.");
			writeSpeech("nikki","","Please, lead the way.");
			writeText("...");
			writeText("Sitting down across from her, you smile a bit.");
			writeText("You reach into your pocket, looping your pendant around your wrist before leaning forward.");
			writeText("It's not how you'd normally do it, but...");
			writeSpeech("nikki","","You wanted to discuss my credits, yes?");
			writeSpeech("player","","That's right. You see...");
			writeText("Shifting a bit forward, you angle the pendant to catch the light, nikkiF's eyes looking at it for a moment as it just barely sways.");
			writeSpeech("nikki","","Ah, I didn't see that yesterday. It's...");
			writeText("She pauses slightly.");
			writeSpeech("nikki","","It looks quite nice.");
			writeText("Slowly, she turns her head back to face you, the small smile returning to her face.");
			writeSpeech("player","","Thank you. But the answer to my question...?");
			writeText("nikkiF pauses in confusion.");
			writeSpeech("nikki","","Sorry, could you repeat the question? I must've been distracted by your... pendant.");
			writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
			writeSpeech("nikki","","Yes, I-");
			writeSpeech("player","","And film history?");
			writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
			writeSpeech("nikki","","Yes. A friend-");
			writeSpeech("player","","-showed you a Hitchcock film.");
			writeSpeech("nikki","","Yes.");
			writeText("She blinks once, her brow furrowing slightly.");
			writeSpeech("nikki","","Yes, they-... h-he did.");
			writeSpeech("player","","Ah, are you feeling alright?");
			writeText("You lean forward slightly, the pendant catching the light again.");
			writeSpeech("nikki","","Y-Ye-");
			writeText("She suddenly stops.");
			writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
			writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
			writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
			writeSpeech("player","","Do... what?");
			writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
			writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
			writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
			writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
			writeSpeech("player","","I'm not sure I know what you're talking about.");
			writeText("This is <b>not</b> going according to plan.");
			writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
			writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
			writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
			writeSpeech("player","","Look, I think-");
			writeSpeech("nikki","","I'd like you to do it again.");
			writeSpeech("player","","...Pardon?");
			writeText("Another near-invisible frown... though this time, she doesn't hide it.");
			writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
			writeText("She crosses her arms over her chest.");
			writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
			writeText("Once again, she pauses slightly, her eyes going to the pendant.");
			writeSpeech("nikki","","...You did it again.");
			writeText("Shaking her head gently, she looks into your eyes...");
			writeText("And you can see that her face is getting flushed.");
			writeSpeech("player","","nikkiF... What do you think I'm doing?");
			writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
			writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
			writeSpeech("player","","And when did that happen?");
			writeSpeech("nikki","","After you asked med questions and I answered...");
			writeText("Her eyes go to the pendant once again.");
			writeSpeech("player","","When you answered 'Yes'.");
			writeSpeech("nikki","","...Yes.");
			writeText("Her breathing picks up slightly, before she shakes her head.");
			writeSpeech("nikki","","Why do you keep stopping?");
			writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
			writeSpeech("nikki","","Because it was the best way to interact with you.");
			writeSpeech("player","","...Okay, define 'best'.");
			writeText("She seems to mull over her words for a moment.");
			writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
			writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
			writeSpeech("player","","You were putting on a face to put me at ease.");
			writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
			writeText("...Oh. Oh!");
			writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
			writeSpeech("nikki","","Correct.");
			writeSpeech("player","","You really are a business major, aren't you?");
			writeSpeech("nikki","","...Yes?");
			writeText("You shake your head.");
			writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
			writeText("A look of genuine confusion goes across nikkF's face.");
			writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
			writeSpeech("player","","And you liked it because...?");
			writeSpeech("nikki","","...I don't understand the question.");
			writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
			writeSpeech("player","","I think I need you to come back to talk again some time.");
			writeText("You scribble down your number, handing it to her.");
			writeSpeech("player","","Text me any time. But here's the thing...");
			writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
			writeSpeech("player","","We just talked about your grades. Right?");
			writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
			writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
			writeText("...Not quite what you were going for, but okay.");
			if(data.player.time == "Morning")
				writeSpeech("nikki","","Now, I do have one more class before I head home, but...");
			else
				writeSpeech("nikki","","I do have to be heading home now, but...");
			writeText("Her expression tightens up into the same pleasant look as before.");
			writeSpeech("nikki","","I look forward to <i>nothing,</i> playerMister Counselor.");
			writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
			writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
			setTrust('nikki',30);
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc2" : {
			passTime();
			setTrust('nikki',40);
			writeSpeech("player","","Brushing up before a class?");
			writeText("She looks up slightly from the book, one on physiology from the looks of it, and she gives the measured smile again.");
			writeSpeech("nikki","","I am, yes. It isn't for a little while, though.");
			writeSpeech("player","","Well, in that case... Do you want to continue our conversation from before?");
			writeText("nikkiF pulls out a bookmark, smoothly shutting the book.");
			writeSpeech("nikki","","Lead the way.");
			writeText("...");
			writeText("Shutting the door behind you, you once again wrap the pendant's cord around your wrist as you turn.");
			writeText("Sure enough, you can hear her breathing hitch slightly when you turn around and it catches");
			writeText("You jostle your wrist slightly, the pendant swaying from it as nikkiF seems to relax a bit, the measured smile going back to a more natural, neutral expression.");
			writeSpeech("player","","What got you into doing this sort of thing, if you don't mind my asking?");
			writeSpeech("nikki","","It's stress relief. Constantly focusing on grades and exams, on forming relations with businesses and exploiting familial connections... It's tiresome.");
			writeText("She steps forward, her expression still neutral as her eyes trail up your body, her finger trailing up your arm.");
			writeSpeech("nikki","","You see, being in control all the time, thinking through every little action for every possible outcome... Do it for too long, and you start wanting something <i>else.</i>");
			writeText("nikkiF leans into you fully now, getting up on her toes to whisper in your ear,");
			writeSpeech("nikki","","You want to <i>lose</i> that control, have it <i>pounded out of you</i> until you're a drooling mess that couldn't make a decision if you wanted to. Unfortunately...");
			writeText("She steps back, a miniscule frown on her face.");
			writeSpeech("nikki","","As much as I'd love to bend over and get used like a cumrag, finding someone discrete is a challenge"+(checkTrust('kuro') > 24 ? ", though hearing that you were involved with kuroF made it a bit simpler." : ", though the fact that you're a counselor here makes it a bit simpler."));
			writeText("You roll your wrist again.");
			writeSpeech("player","","Because if anyone hears about this, I'd lose my job.");
			writeSpeech("nikki","","Y-");
			writeText("She shudders in place.");
			writeSpeech("nikki","","...Yes. My privacy is more-or-less guaranteed by virtue of your position.");
			writeText("Well, virtue is hardly the word you'd use, but you get the intent.");
			writeSpeech("nikki","","...Yes. Hm. Yes, yes, yes.");
			writeText("Her frown deepens a bit.");
			writeSpeech("nikki","","Drat. It only happens when I'm actually answering a question.");
			writeSpeech("player","","You're pretty diligent, aren't you?");
			writeText("She smiles minutely, before stepping in again. Her fingers go up your thigh as she replies,");
			writeSpeech("nikki","","Yes~");
			writeText("There's a sharp exhale from her nose before she sighs contentedly.");
			writeSpeech("nikki","","Let's get down to fun, hm? I think it's about time we got to the good parts...");
			writeText("She puts her hands on her skirt, slowly getting down to her knees as she lowers herself down, one hand's fingers trailing down your thighs as she does, the other hand going under her own skirt.");
			writeSpeech("nikki","","I'll only be getting a taste for you today, but next time I'm sure we'll have do quite a bit more...");
			writeFunction("writeEvent('nikki1')", "Watch her kneel");
			break;
		}
		case "nikkiEnc3" : {
			passTime();
			writeText("As you approach, nikkiF looks up at you again from her book. Psychology, this time.");
			writeSpeech("nikki","","Well hello again, playerMister Counselor. How may I help you today?");
			if(galleryCheck('nikki1repeat'))
				writeSpecial("You've finished all of nikkiF's content as of this PTR upload.")
			//writeFunction("writeEvent('nikkiEnc3A')", "Try to hypnotize her in your office");
			writeFunction("writeEvent('nikki1repeat')", "Go to your office for another handjob");
			writeFunction("changeLocation(data.player.location)", "Never mind, nothing for today");
			break;
		}
		case "nikkiEnc3A" : {
			writeSpeech("player","","Actually, I was hoping to speak with you about the same thing as last time, if you're free.");
			writeText("She shuts the textbook smoothly, the measured smile on her face as she folds her hands in front of herself.");
			writeSpeech("nikki","","Of course, I'm happy to help. Your office, then?");
			writeText("You nod, turning and heading back while she trails slightly behind you.");
			writeText("...");
			writeText("With the door clicked shut again, Nikki's expression returns to neutral as she sits, though there's still that hint of excitement behind her eyes that she doesn't try to hide.");
			writeSpeech("nikki","","Are you planning on using the pendant again, perhaps~?");
			writeSpeech("player","","Picked up on that, hm?");
			writeSpeech("","","");

			writeText("Her ");
			writeSpeech("player","","<b>Go blank.</b>");
			writeText("Her body relaxes a bit, sinking back in her seat for a moment... before they start to refocus.");
			writeSpeech("player","","I said <i><b>blank.</b></i>");
			writeText("She shudders slightly again, her eyes fluttering a bit as her face flushes.");
			writeSpeech("nikki","","Hah~...!");

			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "nikki1", name: "Handjob in the Backroom"},
	{index: "nikki1repeat", name: "Another Handjob in the Backroom"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "nikki1": {
			writeText("Kneeling down, nikkiF looks closely at the shape of your cock through your clothes. She just sits there for a second, seemingly thinking, before reaching her hand up.");
			writeBig("images/nikki/1-1.jpg","Art by Enoshima Iki");
			writeText("Her hand strokes upwards, her palm applying pressure to the base as she gets a good, strong feel for it.");
			writeText("You can see her lick her lips a bit as she stares intently, before the sharply focus on your face.");
			writeText("She seems to almost study it for a moment, watching your features as she shifts her hand and rubs with her fingers against your covered shaft.");
			writeSpeech("nikki","","Hm...");
			writeSpeech("player","","Are you studying me?");
			writeText("Her lips curl into a small smile for a moment.");
			writeSpeech("nikki","","Guilty as charged. Everyone's different, so I can't help but be curious...");
			writeText("Her hand slides up, reaching your zipper before pulling down.");
			writeSpeech("nikki","","...what sort of expressions you'll make~.");
			writeText("nikkiF's hand helps pull your cock out, her expression going neutral again as she runs her hand along your length.");
			writeBig("images/nikki/1-2.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Oh...? Quite the nice size.");
			writeText("Her thumb teases the underside of your cock, just barely below the head as her pointer finger slides over the ridge of your tip, feeling not too bad.");
			writeSpeech("player","","For someone curious about my expressions, you're not particularly emotive yourself.");
			writeText("She quirks a momentary smile again, shrugging slightly as her hand starts stroking your shaft.");
			writeSpeech("nikki","","I'm sure you'll see some interesting expressions with time, playerMister Counselor.");
			writeText("She leans forward, her nose gently pressing against your head as she looks up at you. She pauses for a moment, before her tongue...");
			writeSpeech("player","","Nn...");
			writeText("...slowly slides up the underside of your cock, the rough-and-wet sensation going almost too slow as you feel her breathing against you.");
			writeText("When she reaches the tip, she looks down at it for a moment, before using just the end of her tongue to circle around your cockhead, encircling the slit before pulling back.");
			writeSpeech("nikki","","...I like yours.");
			writeSpeech("player","","...Pardon?");
			writeText("Her hand resumes stroking you, her lips and tongue toying with your head as her fingers squeeze and stroke at your shaft.");
			writeText("You can't help but groan as each finger seems to shift pressure just the slightest bit differently, the spit from her tongue being spread along your cock as she goes.");
			writeSpeech("nikki","","The texture, the taste... The smell.");
			writeText("nikkiF smiles again, this time a bit wider as she takes your head into her mouth, her free hand adjusting her glasses as she bobs her head up and down.");
			writeText("She doesn't take you deep, but each time she moves, her lips drag along your sensitive glans again and again, her tongue still teasing at every point it can as her eyes linger on yours.");
			writeSpeech("player","","Fuck...!");
			writeText("Every noise you make, every facial expression and word, she seems to focus on them all as she goes, looking for the spots that make your voice go low and throaty as she goes.");
			writeText("Her hand moves faster and rougher now, her mouth opening just enough after every few bobs to leak spit down your cock before her mouth gets unbelievably tight again.");
			writeText("Letting out a low groan, you relax in place a bit, letting her do as she likes. You have half a mind to try and hold out, but she said she only wanted a taste for today, so...");
			writeSpeech("player","","I-");
			writeText("Your lips barely open before you lean further forward, sliding your cock further into her mouth with an almost mischievous twinkle to her eyes as you feel your cock rub up against the inside of her cheek.");
			writeText("Your hips buck slightly forward, rubbing up inside her mouth for just another moment, before you reach the edge and she pulls back quickly-");
			writeBig("images/nikki/1-3.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Ah...?");
			writeText("Her hand keeps stroking you, a firm grasp milking each rope of cum from your cock as you shoot all over her.");
			writeText("She doesn't seem too too focused on where it lands though, as she stares intently at your shaft until you finish, her tongue gently running over her lips again as she watches each twitch until you finally finish.");
			if(data.player.location != 'gallery'){
				writeSpeech("nikki","","...Ah.");
				writeText("Shaking her head slightly, she refocuses and raises her clean hand to her hair now.");
				writeSpeech("nikki","","I... may not have thought that through.");
				writeSpeech("player","","Here, I'll grab something...");
				writeText("...");
				writeText("Several cold wet-wipes later, nikkiF is checking her hair carefully. Seemingly satisfied, she gives a slight nod and says, more to herself than anything,");
				writeSpeech("nikki","","That should be fine for now. I'll give it a more thorough cleaning at home of course, but this will be enough until then.");
				writeText("Looking to the clock, she nods a second time before turning to fully face you. Her eyes just barely narrow as she looks you over.");
				writeSpeech("nikki","","...You're an interesting person, playerMister Counselor. I look forward to seeing more of you, if you're willing to brave the risk.");
				writeSpeech("player","","Same to you, nikkiF. Good luck keeping those grades up.");
				writeText("She gives you a wry smile, nodding once before leaving the room.");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "nikki1repeat" : {
			writeText("nikkiF kneels down in front of you, her tongue tracing her lips as she brings her hand to your pants again.");
			writeBig("images/nikki/1-1.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Ah...");
			writeText("Her hand toys with it through your pants for a bit, before she leans forward.");
			writeText("As she takes your cock out, it presses against her face for a moment as she takes a deep breath.");
			writeSpeech("nikki","","Mm... There we go~");
			writeText("She runs her tongue along the shaft, from the base to the tip, before leaning back and grasping you firmly with her hand.");
			writeBig("images/nikki/1-2.jpg","Art by Enoshima Iki");
			writeText("She starts stroking you fairly quickly, teasing the ridge of your head every time her hand reaches the top.");
			writeText("After a few dozen strokes, she leans forward, her tongue teasing your head playfully as she strokes you faster and faster, her other hand under her skirt.");
			writeSpeech("player","","Fuck...!");
			writeText("You feel her exhale from her nose, a small smile on her face as she targets the same sensitive points as before.");
			writeText("Minutes pass as she strokes your cock, her lips and tongue moving across your cock again and again, until...");
			writeSpeech("player","","I'm close...!");
			writeSpeech("nikki","","Don't hold back~");
			writeBig("images/nikki/1-3.jpg","Art by Enoshima Iki");
			writeText("When you finish bucking your hips, your seed spraying across her again, she lets out a contented sigh.");
			if(data.player.location != 'gallery'){
				if(checkTrust('nikki') < 45)
					setTrust('nikki',45);
				writeText("Then, pulling out a wet wipe and a small spray bottle, one almost like it's for perfume, she gives her hair a quick spritz.");
				writeSpeech("nikki","","It's the same thing that "+(checkTrust('kuro') >= 20 ? "kuroF uses." : "a friend uses when she does these sorts of things."));
				writeText("The cleanup goes pretty quickly, though the spray leaves a slight lavender scent behind. When she's finished, though, she smiles back at you.");
				writeSpeech("nikki","","Until next time, playerMister Counselor.");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
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
	{index: "nikkiReward", requirements: "?trust nikki 45;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "nikkiReward": {
			writePhoneImage("images/nikki/reward.jpg", "nikkiReward, Art by Enoshima Iki");
			writePhoneSpeech("nikki", "", "You've finished all of the currently-available content for nikkiF, congratulations! Leave a comment in the Discord or any of the discussion threads if you're interested in seeing more!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			clearText(character.index);
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