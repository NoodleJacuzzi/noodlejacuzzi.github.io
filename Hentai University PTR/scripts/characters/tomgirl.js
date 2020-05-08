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
	{index: "tomgirlReturn", name: "tomgirl is here", location: 'classroomA', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
	{index: "newQuo", name: "tomgirl is here", location: 'classroomA', time: "MorningEvening", itemReq: "", trustMin: 101, trustMax: 102, type: "tab", top: 0, left: 0, day: "both",},
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
			if (galleryCheck('tomgirl1') == true && galleryCheck('tomgirl2') == true && galleryCheck('tomgirl3') == true && galleryCheck('tomgirl4') == true) {
				writeEncounter('tomgirl4');
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Nevermind");
				passTime();
			}
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
			setTrust('tomgirl', 100);
			data.player.location = "vintageStreet";
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "tomgirlReturn": {
			//New 1
			writeBig("images/tomgirl/profileN.jpg", "Art by Nagi Ichi");
			writeText("It looks like tomgirlF is back, he's in class talking with a few of his classmates. Notably, he's got a pink hairclip on. ");
			writeSpeech("Girl", "none", "Wow, it really stands out. Is that like a breast cancer awareness thing? Or is it your sister's? ");
			writeSpeech("tomgirl", "new.jpg", "No, actually it's mine. I-");
			writeSpeech("Boy", "none", "Honestly, I just love how it shows how comfortable you are with your sexuality, you know? Boys can pull off pink too!");
			writeSpeech("tomgirl", "new.jpg", "Eheh, yeah I suppose.");
			writeText("His posture suggests that he's lost the tension he was holding in before, he's relaxed. That changes once he notices you're checking out the classroom though.");
			if (data.player.gender == "man") {
				writeSpeech("tomgirl", "new.jpg", "Ah, excuse me. <br> Sir? Are we headed to your office again?");
			}
			else {
				writeSpeech("tomgirl", "new.jpg", "Ah, excuse me. <br> Ma'am? Are we headed to your office again?");
			}
			writeText("The two of you head off to your office together. Once the two of you are out the door tomgirlF takes your arm in his as you walk.");
			writeSpeech("Girl", "none", "Hey, have you noticed how friendly he's getting with that counselor?");
			writeSpeech("Boy", "none", "And how nice he is lately? Not to mention the hairclip... You don't think he's...<br>Naaah.");
			writeText("The two of them shake their heads and laugh it off. ");
			writeText("...");
			writeSpeech("player", "", "You know, I just can't put my finger on it, but something's different about you.");
			writeText("tomgirlF is seated on your couch, blushing and nervously fiddling with the hem of his shirt.");
			writeSpeech("tomgirl", "new.jpg", "You're... You're really going to make me say it? That's really messed up...");
			writeText("He's got an excited smile on his face but he can't hold eye contact with you.");
			writeSpeech("player", "", "Hmm... I feel like it's on the tip of my tongue.");
			writeSpeech("tomgirl", "new.jpg", "F-fine you jerk! I'm broken! I'm totally addicted to your c-cock now, and I'm not ashamed of it anymore, okay? You happy!?");
			writeSpeech("player", "", "Ah, you've got a new hairclip! That's what it is!");
			writeSpeech("tomgirl", "new.jpg", "...Eh? Oh, yeah. I just... I thought you'd like it... Since you got off on me in... In girl's clothes before.");
			writeSpeech("player", "", "It suits you. Good girl. ");
			writeText("He goes rigid, putting his hands in his lap and can't lift his gaze from the floor as his smile gets wider. Despite claiming he's not ashamed anymore, it's still pretty fun to mess with him.");
			writeSpeech("tomgirl", "new.jpg", "S-so what are we doing today? I brought a couple of... Things. I'm sure you'd bring something like them anyways so it isn't a big deal... ");
			writeText("...");
			writeEvent('tomgirlnew1');
			writeText("...");
			writeText("You didn't have enough left in the tank for another round, so the two of you stopped. tomgirlF had to rest for awhile on your couch so that he could walk and talk again, but after that he left with an even brighter pep in his step than before.");
			raiseTrust('tomgirl', 1);
			passTime();
			writeFunction("changeLocation('playerOffice')", "Finish");
			break;
		}
		case "newQuo": {
			if (checkTrust('tomgirl') == 101) {
				writeSpeech("Girl", "none", "So... You're super sure? It isn't just like a phase?");
				writeSpeech("tomgirl", "new.jpg", "One-hundred percent~!");
				writeText("tomgirlF is talking to his classmates again. This time he's the bundle of energy and the other students look like they're juggling conflicting emotions.");
				writeSpeech("Boy", "none", "So... Does it actually like, feel good? Down there?");
				writeSpeech("tomgirl", "new.jpg", "When my boyfriend fucks me? Hell. Yes. It feels so much better than normal, and being manhandled by those strong hands...");
				writeSpeech("Boy", "none", "That's... That's so...");
				writeSpeech("Girl", "none", "Fucking hot! God, I knew those fanfics had some merit!");
				writeSpeech("Boy", "none", "Yeah, good on you for accepting yourself! Hey, you wanna go shopping later? I'd love to get a chance to meet your boyfriend.");
				writeSpeech("tomgirl", "new.jpg", "Maybe some other time. I'm hoping to... Ah, playerSir!");
				writeText("tomgirlF quickly bows out of the conversation to head over to you. It doesn't take a mind reader to guess that the two female students he was talking with are now fantasizing about you and tomgirlF together.");
				writeText("The two of you walk out of the office, and once you're out of sight he pulls your hand drawing it to his ass. You give it a grope. ");
				writeSpeech("tomgirl", "new.jpg", "Mmm, can you feel it? My suprise for later?");
				writeSpeech("player", "", "Feel what?");
				writeSpeech("tomgirl", "new.jpg", "<b>Exactly. </b>");
				writeSpeech("player", "", "It seems like rumors are going to start spreading. About us. ");
				writeSpeech("tomgirl", "new.jpg", "Ah, don't worry. They all think you're a super devoted counselor who helped me come out of the closet. <br>I mean, you actually did, but they won't know how you actually did it.");
				writeText("He wraps his arms around yours like he's some kind of trophy wife as the two of you make your way to your office.");
				writeText("...");
				writeText("Once you've arrived tomgirlF takes a seat on your sofa.");
				raiseTrust('tomgirl', 1);
			}
			else {
				writeText("tomgirlF is chatting with classmates again, but follows you to your office quickly enough.");
			}
			writeSpeech("tomgirl", "new.jpg", "So, for today. Maybe a quickie? Last time in the gym was so hot~!");
			if (galleryCheck('tomgirlnew2') != true) {
				writeFunction("writeEncounter('tomgirlnew2')", "Go to the gym");
			}
			else {
				writeFunction("writeEncounter('tomgirlnew2Quickie')", "Go to the gym");
			}
			writeSpeech("tomgirl", "new.jpg", "I also had something Important I wanted to ask you. It's a little embarrassing.");
			writeFunction("writeEncounter('tomgirlnew3a')", "Ask about what's up");
			if (checkFlag('succubus', 'corruption')==true) {
				//writeSpeech("player", "", "<i>At this point there's no question, I could use the corruption ability I learned from succubusF on him. </i>");
				//writeFunction("writeEncounter('tomgirlnew4a')", "Talk about corruption");
			}
			writeFunction("changeLocation('playerOffice')", "Rain check. Let's meet tomorrow");
			break;
		}
		case "tomgirlnew2": {
			writeEvent('tomgirlnew2');
			data.player.location = "gym";
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "tomgirlnew2Quickie": {
			writeEvent('tomgirlnew2Quickie');
			data.player.location = "gym";
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "tomgirlnew3a": {
			writeSpeech("tomgirl", "new.jpg", "Well, the truth is... I wanna get married!");
			writeSpeech("player", "", "... Excuse you?");
			writeSpeech("tomgirl", "new.jpg", "I mean, not officially, we'd get in trouble of course. But feeling like I did yesterday... There's not an ounce of resistance left in my heart! I wanna wake up every day in your arms, I wanna kiss you on your way to work! I want you to come home, every day, and pound my cute ass into the carpeting and make me clean you up after!");
			writeSpeech("player", "", "I, uh...");
			writeSpeech("tomgirl", "new.jpg", "Please, I've never been as happy, I've never felt as fulfilled as I do when I'm with you! Even when you aren't balls deep in me, I can't help but feel butterflies whenever I think about you! <br>I love you!</b>");
			writeText("You aren't really the type to tie yourself down, but tomgirlF's confession puts you in a strange position. He's certainly your type, and his sex drive absolutely matches yours...");
			writeFunction("writeEncounter('tomgirlnew3b')", "I love you too, let's do it");
			writeFunction("writeEncounter('tomgirlnew3c')", "I don't do exclusivity");
			break;
		}
		case "tomgirlnew3b": {
			writeEvent('tomgirlnew3');
			addFlag('tomgirl', 'endingA');
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "tomgirlnew3c": {
			writeSpeech("player", "", "I don't do exclusivity, I'm sorry. You're wonderful, and certainly my type, but I won't do marriage.");
			writeSpeech("tomgirl", "new.jpg", "Oh... I, uh...");
			writeText("He seems down, shellshocked and unsure of himself. ");
			writeSpeech("player", "", "tomgirlF, if you really are serious, then listen to me. What we have is special, but it isn't unique. You've only just dipped a toe into the world of cheek-bruising anal sex. Think about all the men you've met in your life you've just sidestepped past.");
			writeSpeech("tomgirl", "new.jpg", "I... I'm sorry, I didn't-");
			writeSpeech("player", "", "Don't be sorry, you haven't done anything wrong. You're open to a whole new world now, alright? Go sightseeing with a new set of eyes, if you know what I'm saying.");
			writeText("He takes a moment to pause, finally catching on to what you're suggesting. ");
			writeSpeech("tomgirl", "new.jpg", "I think I understand. But please, don't say no. Think about it, please? Maybe we can talk about it tomorrow?");
			writeSpeech("player", "", "I'll consider it, and I'll let you know if I change my mind.");
			writeSpeech("tomgirl", "new.jpg", "Thank you. I should go, sorry. I'll see you tomorrow, alright? I'd like to go home a bit earlier today.");
			writeSpeech("player", "", "You've got a new life ahead of you, tomgirlF. I'll be there to enjoy it with you.");
			writeSpeech("tomgirl", "new.jpg", "Thank you...");
			writeText("With that, he leaves. He probably won't give up on proposing, but he should be okay even if you don't ever accept.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "tomgirlnew4a": {
			writeSpeech("player", "", "I actually have something a little more serious than usual to talk about.");
			writeSpeech("tomgirl", "new.jpg", "Oh? Please, fire away!");
			writeSpeech("player", "", "Well, I wanted to know if... Things won't always be like they are now. People get older and the world just changes. What if I told you I had a way to change that?");
			writeSpeech("tomgirl", "new.jpg", "I'm not sure I follow.");
			writeSpeech("player", "", "I'm saying the you as you are right now, cute and absolutely fuckable, would be your real self forever.");
			writeSpeech("tomgirl", "new.jpg", "Oh, you mean like therapy or hormones. I don't really-<br>No, maybe you're right. If you think it's what's best than I'll go through with it.");
			writeText("It seems like he doesn't quite grasp what you mean, but that's fine. It seems like he's willing to accept the change if you are.");
			//writeFunction("writeEncounter('tomgirlnew4b')", "Corrupt tomgirlF");
			writeFunction("changeLocation(data.player.location)", "Change your mind");
			break;
		}
		case "tomgirlnew4b": {
			writeEvent('tomgirlnew4');
			setTrust('tomgirl', 666);
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
	{index: "tomgirlnew1", name: "Fully Broken"},
	{index: "tomgirlnew2", name: "Gym Quickie"},
	{index: "tomgirlnew4", name: "Corruption"},
];

function writeEvent(name) { //Plays the actual event.
	//document.getElementById('output').innerHTML = '';
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
			writeSpeech("tomgirl", "", "Waitwaitwait what the fuck am I doing?<i><br>Why did I just grab it? Is *he controlling me?</i>");
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
			//document.getElementById('output').innerHTML = '';
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
			writeSpeech("tomgirl", "", "Nhhhg!<br><i>Fuck! *He's fucking huge! *He's destroying my ass!</i>");
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
			break;
		}
		case "tomgirlFinish": {
			raiseTrust('tomgirl', 1);
			changeLocation(data.player.location);
			break;
		}
		case "tomgirlnew1": {
			writeBig("images/tomgirl/new1-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Ah~! Hah~!");
			writeSpeech("player", "", "I can't believe you brought a fitted girl's uniform. How did you feel getting measured?");
			writeSpeech("tomgirl", "new.jpg", "Mmm~! <br>The... Ah~! The woman was really nice, she said I'd look really c-cuuute~!");
			writeSpeech("player", "", "God damn, you really are broken, aren't you? All that brattiness has just melted away and you're nothing but a buttslut, aren't you?");
			writeSpeech("tomgirl", "new.jpg", "I... I'm a...");
			writeSpeech("player", "", "Too slow! For hesitating, I want you to hold back from cumming.");
			writeBig("images/tomgirl/new1-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "W-what? No! I'm sorry, I'm your slut, playerSir!");
			writeText("You lean in close to his face, he's still having trouble with eye contact.");
			writeSpeech("player", "", "Now you listen closely. I don't want a half-hearted bitch, I want you completely broken. You are going to hold yourself back, balance on the edge of cumming, until your body physically cannot take anymore. And when you finally do cum, you won't just be reaching release. Every but of resistance you still have left is getting pumped out too.");
			writeText("He lets out a pained whimper, already wanting to cum. He still has some suggestion still in him from his first session though, so he can't disobey you.");
			writeSpeech("player", "", "Fuck, you're tight. You must've been excited for this, huh?");
			writeSpeech("tomgirl", "new.jpg", "Y-yes! I was fucking myself with my dildo last night, but I couldn't... I wanted to... I want to cum! Please~! I'm so close~! ");
			writeSpeech("player", "", "Too! Fucking! Bad! ");
			writeBig("images/tomgirl/new1-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Ggghh~!");
			writeText("His body twitches and his dicklette does a little shake as you pump inside him, but he still can't find release. ");
			writeSpeech("tomgirl", "new.jpg", "Wanna... Can't... Please...");
			writeText("Every time you slowly push past his prostate his penis throbs again.");
			writeSpeech("player", "", "You really have done your best today, haven't you? Good girl.");
			writeText("Suddenly he goes rigid, the words setting him off, not just pushing him over the edge but throwing him over. ");
			writeBig("images/tomgirl/new1-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "AAAH~!");
			writeText("His cum arcs through the air way more powerfully than you've ever seen from him before, splattering against his face.");
			writeBig("images/tomgirl/new1-5.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "Oh, what a shame. Your outfit is ruined now.");
			writeSpeech("tomgirl", "new.jpg", "...");
			writeText("He's unresponsive, and his eyes have rolled back into his head.");
			writeSpeech("player", "", "... I should get you out of that outfit, the top actually does look good on you. <br>Fuck, already fully hard again.");
			writeText("...");
			writeBig("images/tomgirl/new1-6.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "Fuck, cumming again! ");
			writeSpeech("tomgirl", "new.jpg", "Ihm not mizter... Hazabmm...");
			writeText("He mumbles out another bit of word salad, at this point you decide to stop. He's on his seventh squirt since you took his top off, and the both of you are dehydrated. More to the point, you're starting to worry he's got brain damage.");
			writeText("You take a seat on your chair, take a drink of water, close your eyes and relax in the afterglow.");
			writeSpeech("player", "", "Alright, I guess I'll need to take you home myself then? I'll probably need to-<br>Gah!");
			writeBig("images/tomgirl/new1-7.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Mpphh... Mmm~...");
			writeSpeech("player", "", "Fuck, you are completely insatiable, aren't you? Are you cleaning me up to trying to coax another marathon out of me?");
			writeSpeech("tomgirl", "new.jpg", "Mmm... Mhhmm~!");
			writeSpeech("player", "", "What am I even going to do with you?");
			break;
		}
		case "tomgirlnew2": {
			writeSpeech("player", "", "You really are insatiable.");
			writeBig("images/tomgirl/new2-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Well, that's really your fault, isn't it? There's no way I'd go back to normal sex after I've had a taste of you.");
			writeSpeech("player", "", "And there's not a drop of hesitation left? Who owns you?");
			writeSpeech("tomgirl", "new.jpg", "You do~! I'll get playerF tatooed on me if you'd like me to prove it~");
			writeSpeech("player", "", "I might take you up on that someday. But for now...");
			writeBig("images/tomgirl/new2-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Aah~!");
			writeSpeech("player", "", "Have you finally gotten what you've wanted? What you <b>needed</b>?");
			writeSpeech("tomgirl", "new.jpg", "Yes! Yes playerSir~!");
			writeSpeech("player", "", "You were pretty- Nggh<br>Pretty arrogant when I met you. Who know how deep the cocklust went under the surface?");
			writeSpeech("tomgirl", "new.jpg", "You did! You saw right through me, playerSir! You didn't believe my shit for a second, and you could see the slut I really was all along~!");
			writeSpeech("player", "", "And... Ngh... And what do you have to say to me?");
			writeBig("images/tomgirl/new2-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Thank youuuu~");
			writeText("He's breathing heavily as you pull out and listen to see if anyone noticed the sounds you two were making.");
			writeBig("images/tomgirl/new2-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "So... So warm...");
			writeSpeech("player", "", "Now get your pants back on, you're walking home with those expensive looking panties soaked in my cum. Got it?");
			writeSpeech("tomgirl", "new.jpg", "Yes playerSir~");
			break;
		}
		case "tomgirlnew2Quickie": {
			writeBig("images/tomgirl/new2-1.jpg", "Art by Nagi Ichi");
			writeBig("images/tomgirl/new2-2.jpg", "Art by Nagi Ichi");
			writeBig("images/tomgirl/new2-3.jpg", "Art by Nagi Ichi");
			writeBig("images/tomgirl/new2-4.jpg", "Art by Nagi Ichi");
			break;
		}
		case "tomgirlnew3": {
			writeText("You lean back and close your eyes, deep in thought. This could be a pretty serious commitment. But,if you had to pick someone to commit to...");
			writeText("When you open them, tomgirlF is inches away from you, more excited than you've ever seen him before. He looks ready to hang off your every word.");
			writeSpeech("player", "", "I love you too, let's do it.");
			writeSpeech("tomgirl", "new.jpg", "R-really?");
			writeSpeech("player", "", "I can't give you a ceremony or anything like that-");
			writeText("tomgirlF grabs you and pulls you into a deep kiss, before it's broken off and he excitedly bounces up and down.");
			writeSpeech("tomgirl", "new.jpg", "That doesn't matter! So long as I'm with you I'll be happy, and...<br>And people like us don't need the normal kind of ceremony, you know?");
			writeSpeech("player", "", "Feeling bashful? It's a bit late for that.");
			writeSpeech("tomgirl", "new.jpg", "Well, this is special... Really special. I wanna go back to your place, okay?");
			writeSpeech("player", "", "Alright, I'll pack up and-");
			writeSpeech("tomgirl", "new.jpg", "Actually, I'd like to go on ahead. We're going to be married, right? I want to show you what every day is going to be like from now on with your new 'wife'.");
			writeText("You hesitate for a moment. You've lived a long life of not really trusting anyone, but maybe that's time to change.");
			writeSpeech("player", "", "That's fine. I'll be home in an hour. Here's my address, and...");
			writeText("You hand him your apartment keys.");
			writeSpeech("player", "", "Here're my keys, don't lose them. I'll have spares made for you later.");
			writeSpeech("tomgirl", "new.jpg", "Thank you! I'll treasure them!");
			writeText("He plants a kiss on your lips before running out.");
			writeText("...");
			writeText("You roll your neck to work out the kinks on your way back. A little paranoid voice is telling you that you made a bad call. And on any other day that voice would be making your decisions but...");
			writeSpeech("player", "", "I guess I really am in love...");
			writeText("As you walk up the stairs you text tomgirlF to let him know you're almost home. You hear the lock on your door click unlocked.");
			writeText("You gently open the door, shut it behind you, and walk inside.");
			writeBig("images/tomgirl/new3-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Welcome back, honey~");
			writeSpeech("player", "", "You pulled out all the stops, didn't you? You look great.");
			writeSpeech("tomgirl", "new.jpg", "Thank you, I did. This was a bit pricy...<br>But if you like it, it's worth it. I'm all yours after all.");
			writeSpeech("player", "", "And I'm all yours.");
			writeSpeech("tomgirl", "new.jpg", "Y-you're all mine~<br>You're mine... I still can't believe you said yes...");
			writeBig("images/tomgirl/new3-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "C-come on, then. You should kiss your... Your w-wife...");
			writeSpeech("player", "", "Actually, I was thinking. Lately you've been lasting longer than I have, so I went and bought you a wedding gift on my way home.");
			writeSpeech("tomgirl", "new.jpg", "A gift?");
			writeText("Rather than answer with words, you pul your wedding gift out of your bag and put it to good use.");
			writeBig("images/tomgirl/new3-3.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Khhg~<br> Ah~!");
			writeSpeech("player", "", "Now, I love you. I do. But you and I aren't the type of people who are going to have a warm relationship where we cuddle through the night.<br>Well, maybe after.<br>But if you want me to be yours exclusively, you know what you need to do, right?");
			writeSpeech("tomgirl", "new.jpg", "Yes! I'll be a good wife! I'll be by your side no matter what, I'll-");
			writeSpeech("player", "", "<b>Cum.</b>");
			writeBig("images/tomgirl/new3-4.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Aaaah~! Cumminnnggg~!");
			writeSpeech("player", "", "Good girl!");
			writeSpeech("tomgirl", "new.jpg", "Nnnhg~!");
			writeText("You pull out the dildo and let it drop to the floor. He'll be cleaning it later but for now you've got a sweeter prize in mind.");
			writeBig("images/tomgirl/new3-5.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "My, you look so inviting. Now, about that kiss...");
			writeText("...");
			writeBig("images/tomgirl/new3-6.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Mmm~! Mmm~!");
			writeBig("images/tomgirl/new3-7.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "MMMM~!");
			writeText("tomgirlF screams into your mouth as the two of you cum in unison.");
			writeText("...");
			writeBig("images/tomgirl/new3-9.jpg", "Art by Nagi Ichi");
			writeText("tomgirlF deliriously moans along with each thrust as you bounce him in your lap.");
			writeBig("images/tomgirl/new3-10.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Mmmm~!<br><i>Cumming again~! Can't... Think... Straight...</i>");
			writeText("<hr>");
			writeBig("images/tomgirl/new4-1.jpg", "Art by Nagi Ichi");
			writeSpeech("player", "", "Nggh, fucking take it!");
			writeSpeech("tomgirl", "new.jpg", "Khh~! I-<br>I'm gonna-");
			writeBig("images/tomgirl/new4-2.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Ghhhg~!");
			writeText("...");
			writeSpeech("player", "", "Hah... Hah... God damn, that was a whole honeymoon in one night.");
			writeSpeech("tomgirl", "new.jpg", "Ghhh... C-cum...");
			writeSpeech("player", "", "Oh? You can still speak? Well, I suppose I can go for round... Eleven? Fuck it, sleep is overrated.");
			writeText("The two of you have sex well into the morning and put rabbits to shame, spending the first night of the rest of your lives together.");
			writeText("It isn't exactly the most vanilla of relationships, but you'll make it work.");
			writeBig("images/tomgirl/new3-8.jpg", "Art by Nagi Ichi");
			break;
		}
		case "tomgirlnew4": {
			writeText("You pat tomgirlF on the head and focus on the back of your hand.");
			writeSpeech("tomgirl", "new.jpg", "What's going on with you? You're acting even weirder than-");
			writeText("He goes quiet as the mark on the back of your hand becomes visible, glowing dimly with a red light.");
			writeText("And then just as soon as it started, the light fades away.");
			writeSpeech("tomgirl", "new.jpg", "I... I feel weird.");
			writeText("tomgirl rubs at his chest through his clothes, before he quickly stands up.");
			writeSpeech("tomgirl", "new.jpg", "I need-<br>Oh~! I feel... Hot!");
			writeText("Frantically he starts trying to undo his shirt buttons before he gives up and just tears his cardigan open.");
			writeSpeech("tomgirl", "new.jpg", "What's going on? What did you do, I'm sc-");
			writeText("His panic stops as you embrace him in a hug.");
			writeSpeech("player", "", "Nothing will happen if you don't want it to happen. Let go, and you'll be okay.");
			writeText("He's breathing heavily but does relax in your arms.");
			writeSpeech("tomgirl", "new.jpg", "I... I feel really hot, playerSir.");
			writeSpeech("player", "", "How about I help with that?");
			writeText("...");
			writeText("You help tomgirlF get undressed without ruining his outfit. Without hesitation he lays on his back and spreads his legs for you.");
			writeSpeech("tomgirl", "new.jpg", "Please, I need it...");
			writeBig("images/tomgirl/new4-1.jpg", "Art by Nagi Ichi");
			writeSpeech("tomgirl", "new.jpg", "Gghh... <br>What's going on with me? With my body? ");
			writeBig("images/tomgirl/new4-2.jpg", "Art by Nagi Ichi");
			writeBig("images/tomgirl/new4-3.jpg", "Art by Nagi Ichi");
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
	{index: "tomgirlCorrupted", trust: 666,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "tomgirlReward": {
			clearText('tomgirl');
			writePhoneImage("images/tomgirl/9-5.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("tomgirl", "", "You've finished all the content for tomgirlF for this version!");
			break;
		}
		case "tomgirlCorrupted": {
			clearText('tomgirl');
			writePhoneImage("images/tomgirl/9-5.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("tomgirl", "", "You've transformed tomgirlF into a succubus (male)! More content will come along soon!");
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