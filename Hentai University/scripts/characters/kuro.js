var character = {index: "kuro", met: false, fName: "Steph", lName: "Black", trust: 0, encountered: false, textEvent: "", color: "#fde1a5",};

var logbook = { //Logbook details for each character.
	index: "kuro", 
	desc: "A university student with an incredibly chilled-out view on sex. She prefers texting over any other form of communication.",
	body: "You have no idea how she made it into this school, but it's clear enough how she paid for it at least. She's gorgeous and her blond hair and full tan make it clear that isn't an accident.",
	clothes: "Her preferred outfit is a riff on the school uniform, with a microskirt so short she's gotten chewed out at school more than once.",
	home: "She mostly hangs out on the roof before and after classes.",
	tags: "Prostitution, Phone Sex, Cum on Clothes",
	artist: "Artist: Enoshima Iki",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
{index: "kuro1", name: "Someone is being chewed out at the gate", location: 'schoolEntrance', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro3", name: "kuro is leaning against the fence", location: 'roof', time: "Morning", itemReq: "", trustMin: 1, trustMax: 4, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro4", name: "kuro is leaning against the fence", location: 'roof', time: "Morning", itemReq: "", trustMin: 21, trustMax: 25, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro5", name: "kuro is fiddling with her phone, rubbing her thighs together as she waits", location: 'roof', time: "Morning", itemReq: "", trustMin: 60, trustMax: 62, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro6", name: "kuro is sitting near the fence, her panties in clear view", location: 'roof', time: "Morning", itemReq: "", trustMin: 63, trustMax: 63, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuroCasino1", name: "kuro is here", location: 'casino', time: "MorningEvening", itemReq: "", trustMin: 60, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
// {index: "kuro7", name: "kuro is standing near the fence, toying with the hem of her skirt", location: 'roof', time: "Morning", itemReq: "", trustMin: 70, trustMax: 70, type: "tab", top: 0, left: 0, day: "both",},
// {index: "kuro7", name: "kuro is leaning against the fence again, typing into her phone casually - IF TWO THINGS APPEARED, I MISSED THIS SUPER OBVIOUS ERROR", location: 'roof', time: "Morning", itemReq: "", trustMin: 70, trustMax: 70, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro7", name: "kuro is leaning against the fence with her eyes shut, her skirt squeezed tightly in one fist as she bites her lip", requirements: "?trust kuro 71; ?flag kuro Pentup; ?location roof;", altName: "", altImage: "",},
{index: "kuro7", name: "kuro is looking out at the town through the fence, fiddling with her skirt", requirements: "?trust kuro 71; ?flag kuro Disciplined; ?location roof;", altName: "", altImage: "",},
{index: "kuro7", name: "kuro is leaning against the fence, typing something on her phone", requirements: "?trust kuro 71; !flag kuro Pentup; !flag kuro Disciplined; ?location roof;", altName: "", altImage: "",},
// {index: "kuro7", name: "kuro is leaning against the fence, twirling a lollipop in her mouth while staring up at the clouds", location: 'roof', time: "Morning", itemReq: "", trustMin: 72, trustMax: 72, type: "tab", top: 0, left: 0, day: "both",},
// {index: "kuroLate", name: "kuro is sitting on the ground with a disappointed expression, fiddling with her phone", location: 'roof', time: "Evening", itemReq: "", trustMin: 72, trustMax: 72, type: "tab", top: 0, left: 0, day: "both",},
// {index: "kuroStoodUp", name: "kuro is leaning against the fence, a lollipop in her mouth and her phone in her hand", location: 'roof', time: "Morning", itemReq: "", trustMin: 73, trustMax: 73, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro8", name: "kuro is sitting in front of the fence, tapping her thigh with one hand and typing on her phone with the other", location: 'roof', time: "Morning", itemReq: "", trustMin: 105, trustMax: 105, type: "tab", top: 0, left: 0, day: "both",},
{index: "kuro9", name: "kuro is sitting in front of the fence again, typing on her phone", location: 'roof', time: "Morning", itemReq: "", trustMin: 110, trustMax: 110, type: "tab", top: 0, left: 0, day: "both",},
]

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	var nikkiInitial = "";
	for(var i = 0; i < data.story.length; i++)
		if(data.story[i].index == 'nikki')
			nikkiInitial = data.story[i].fName.charAt(0);
	switch (name) {
		case "kuro1" : {
			//meeting kuro
			document.getElementById('output').innerHTML = '';
			writeText("As you approach to investigate, you see a member of the student council leaving the other way.");
			writeText("The argument seems to have been resolved, but...");
			writeBig("images/kuro/profile.jpg","Art by Enoshima Iki");
			writeSpeech("kuro","","Heya~! Looks like the two of us were being a bit loud, huh? Sorry~!");
			writeText("She slides her lollipop back into her mouth with a wink, starting to walk off.");
			writeFunction("loadEncounter('kuro', 'kuro2')", "Invite "+fName('kuro')+" to your office");
			writeFunction("changeLocation(data.player.location)", "Just let her go");
			break;
		}
		case "kuro2" : {
			document.getElementById('output').innerHTML = '';
			//if you invite her to your office
			writeText("She pauses for a second before smirking.");
			if (data.player.gender == "man") {
				writeSpeech("kuro","","Lead the way, Mr. Counselor~!");
			}
			if (data.player.gender == "woman") {
				writeSpeech("kuro","","Lead the way, Ms. Counselor~!");
			}
			writeText("...");
			writeText("When you arrive, she sits down casually, crossing her legs underneath her.");
			writeSpeech("kuro","","So, what am I in for?");
			writeSpeech("player","","I was curious about the shouting I heard, Miss...?");
			writeSpeech("kuro","","Ah, just call me "+fName('kuro')+"~! Most of the older guys do.");
			writeText("You pause.");
			writeSpeech("kuro","","As for the shouting, that was just that council guy getting on my case about my skirt again. He's <i>suuuper</i> strict about the length!");
			writeText("She casually lifts the hem of her skirt, just barely hiding her panties.");
			writeSpeech("kuro","","It's not like it's <i>that</i> short, right?");
			data.story[1].encountered = true;
			writeFunction("loadEncounter('kuro', 'kuro2a')", "Side with her");
			writeFunction("loadEncounter('kuro', 'kuro2b')", "Side with the student councilman");
			break;
		}
		case "kuro2a" : {
			document.getElementById('output').innerHTML = '';
			//Side with her regarding skirt length
			writeSpeech("player","","Well, it does cover everything it's supposed to, I suppose.");
			writeText("She smiles widely.");
			writeSpeech("kuro","","Right, right! That guy really oughtta learn to relax, and <i>open up</i> to new ideas, y'know?");
			writeText("She lets go of her skirt's hem, but not before pulling it taut for just an instant.");
			writeText("Blue with black fringe, huh? It's a pretty good combination.");
			writeSpeech("kuro","","You seem like you're pretty... <i>open</i>, "+data.player.title+" Counselor. If you're ever up for seeing how open <i>I</i> can be... Well, I like to hang out on the roof.");
			writeText("She walks past you, starting to whistle innocently as you feel her finger brush gently against your hip.");
			writeText("You get the feeling that this could turn out pretty fun, if you play your cards right.");
			data.player.location = "playerOffice";
			passTime();
			writeFunction("changeLocation(data.player.location)", "Go back");
			setTrust('kuro', 2);
			break;
		}
		case "kuro2b" : {
			document.getElementById('output').innerHTML = '';
			//Side with the council president
			writeSpeech("player","","He has a point, though. A skirt that short can be a bit distracting... for students.");
			writeText("She looks amused.");
			writeSpeech("kuro","","Just for students, huh?");
			writeText("She lets go of her skirt's hem, but not before pulling it taut for just an instant.");
			writeText("Blue with black fringe, huh? She has a good sense of style, at least.");
			writeText("She stands up, pulling a piece of paper from her shirt and leaning forward.");
			writeSpeech("kuro","","Well, if you're ever up for a different kind of <i>distraction</i>, you can find me hanging around the roof.");
			writeText("She walks past you, starting to whistle innocently as you feel her finger brush gently against your shirt.");
			writeText("Well. This looks like it might turn out interestingly...");
			data.player.location = "playerOffice";
			passTime();
			writeFunction("changeLocation(data.player.location)", "Go back");
			setTrust('kuro', 1);
			break;
		}
		case "kuro3" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("kuro","","Mmm... I was starting to wonder if you were even coming.");
			writeSpeech("player","","Didn't mean to make you wait.");
			writeFunction("loadEncounter('kuro', 'kuro3a')", "Invite "+fName('kuro')+" to your office");
			writeFunction("changeLocation(data.player.location)", "Tell her she's probably late for class and leave");
			break;
		}
		//go to your office for private affairs
		case "kuro3a" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro') == 4){
				writeSpeech("kuro","","Mm. Maybe this time, we'll make ourselves a little more comfortable?");
				writeSpeech("kuro","","Lead the way, "+data.player.title+" Counselor.");
				writeText("...");
				writeText("When you arrive in your office, she casually bumps her hip against the door, pushing it.");
				writeFunction("writeEvent('kuro1')", "Let it close");
				writeFunction("loadEncounter('kuro', 'kuro3b')", "Stop the door from shutting");
				break;
			}
			else{
				writeSpeech("kuro","","Taking charge early, huh? I can't say I dislike it~!");
				writeSpeech("kuro","","Lead the way, "+data.player.title+" Counselor!");
				writeText("...");
				writeText("When you arrive in your office, she smirks.");
				writeSpeech("kuro","","Y'know, the last teacher that had me in their office almost seemed afraid to let the door close.");
				writeText("She gently pushes it, letting it slowly inch shut as she plops down.");
				writeFunction("writeEvent('kuro1')", "Let it close");
				writeFunction("loadEncounter('kuro', 'kuro3b')", "Stop the door from shutting");
				break;
			}
		}
		//basically rejecting her
		case "kuro3b" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro') == 4){
				writeText("She sighs, shaking her head.");
				writeSpeech("kuro","","I might like playing around, but this isn't my kind of game, "+data.player.honorific+".");
				writeText("She turns on her heel, leaving.");
				data.player.location = "playerOffice";
				passTime();
				writeFunction("changeLocation(data.player.location)", "Go back");
				break;
			}
			else{
				writeText("She looks disappointed, but sits up a bit straighter.");
				writeBig("images/kuro/1-1.jpg", "Art by Enoshima Iki");
				writeSpeech("kuro","","Well, can't blame you. Wouldn't want rumors going around, I guess.");
				writeText("She sighs, rolling the lollipop in her mouth.");
				writeSpeech("kuro","","If it's about counseling, I'll have'ta stop ya right there. I'm not the 'sit and chat about repressed emotions' kinda girl.");
				writeSpeech("player","","I figured as much, but I thought I should still offer. It is literally my job. If you ever need a place to relax that isn't the roof...");
				writeText("She just shrugs, standing up now.");
				writeSpeech("kuro","","Yeah, yeah. If it rains, I might show up. It's a comfortable seat, at least.");
				writeText("Stepping forward, she pulls the door all the way open, before pausing.");
				writeText("Leaning a bit closer to you, she whispers,");
				writeSpeech("kuro","","If you're ever interested in the two of us getting <i>real</i> comfortable, though...");
				writeText("She just lets her statement trail off for a moment, before leaving the room.");
				writeText("Getting her to open up might be a bit more... difficult, than expected.");
				data.player.location = "playerOffice";
				passTime();
				writeFunction("changeLocation(data.player.location)", "Go back");
				setTrust('kuro', 4);
				break;
			}
		}
		case "kuro4" : {//another roof-meeting
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro') < 60){
				if((checkTrust('kuro') == 24 || checkTrust('kuro') == 25) && (galleryCheck('kuroMoney2') == true)){
					writeText("Seeing you approach, kuroF smiles up at you, but quickly returns to typing on her phone.");
					writeSpeech("player","","You look... busy?");
					writeSpeech("kuro","","A bit, yeah. I'm <i>totes</i> swamped today. I've got this to-do list, and I've been putting off most of it, so I gotta handle it today.");
					writeText("She sighs a little. but then smiles up at you again.");
					writeSpeech("kuro","","Of course, that <i>does</i> include picking up some more condoms, so once it's done?");
					writeText("She steps forward, her breasts pressing against your chest as whispers into your ear,");
					writeSpeech("kuro","","We can have even more <i>fun</i>.");
					writeSpeech("player","","I'll look forward to-");
					writeText("Her tongue gently runs along your ear-lobe.");
					writeSpeech("kuro","","You better, hun~! Oh, and after you painted my back, you mentioned texting me a pic. Send it whenev's!");
					writeText("With that, she darts off with a wink and a laugh, leaving you to return to your business.");
					writeFunction("changeLocation(data.player.location)", "Leave");
					break;
				}
				else if(checkTrust('kuro') < 24 && galleryCheck('kuro2') == true && galleryCheck('kuro3') == true && (data.story[1].textEvent.includes('kuroPhone3A') == true || data.story[1].textEvent.includes('kuroPhone3B') == true)){
					writeText("kuroF smiles as you approach but jolts in place a little.");
					writeSpeech("kuro","","Heya~! Sorry, but I- <i>hic!</i>... There's been a bit of hiccup. Can you come back tomorrow? I'm- <i>hic!</i> I'm headed home early today.");
					writeText("She darts past you, her hand over her mouth as she continues to hiccup.");
					writeText("Weird situation... It should resolve itself, though.");
					setTrust('kuro',24);
					writeFunction("changeLocation(data.player.location)", "Leave");
					break;
				}
				writeText("As you approach her, "+fName('kuro')+" looks you over, rolling another of her lollipops in her mouth.");
				writeSpeech("kuro","","Mm, you're a little pent-up, huh? I don't mind helping out, but there's this bag I <i>almost</i> have enough for, y'know?");
				if(galleryCheck('kuro2') != true){
					writeFunction("writeEvent('kuro2')", "Another handjob ($5)"); //REMOVE IF SEEN
				}
				if(galleryCheck('kuro3') != true){
					writeFunction("writeEvent('kuro3')", "Jerk off on her ($10)"); //REMOVE IF SEEN
				}
				if((checkTrust('kuro') < 40) && (galleryCheck("kuroMoney2") != true)){ // remove if seen
					writeFunction("loadEncounter('kuro', 'kuro4a')", "Ask about sex ($?)");
				}
				writeFunction("changeLocation(data.player.location)", "Leave her be");
				break;
			}
			else{
				// //if she's been hypno'd, basically
				// writeText("As you approach her, "+fName('kuro')+"'s flushes as she stands a bit straighter, her thighs rubbing against each other.");
				// writeSpeech("kuro","","Heya *Master~! Ooh, don't tell me, you're here for another night of fun with your favorite cocksock, right?");
				// writeFunction("loadEncounter('kuro', 'kuro4a')", "Have sex");
				// writeFunction("writeEvent('kuro6')", "69 each other");
				// //more scenes may be implemented later
				// data.player.location = "roof";
				// writeFunction("changeLocation(data.player.location)", "Leave her be");
				writeSpecial("Error: kuro4, Event Bypass.")
				writeText("This text should never appear in the game. If it did, then Crypto messed up - tell him that he really should clean up after himself more often.");
				break;
			}
			break;
		}
		case "kuro4a" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro')<40){
				writeText("She pauses to think for a moment, but ultimately shakes her head.");
				writeSpeech("kuro","","Ah. No offense, but that sort of thing is... y'know? I'd need to get to know you better as a client before we can do stuff like that. Sorry, hun.");
				if(data.player.money >= 100)
					writeFunction("loadEncounter('kuro', 'kuro4b')", "Offer $100");
				else
					writeText("Hm. She seemed hesitant to turn you down, so maybe there's a way to convince her...?");
				writeFunction("loadEncounter('kuro', 'kuro4')", "Choose something else");
				writeFunction("changeLocation(data.player.location)", "Leave her be");

				break;
			}
			else if(checkTrust('kuro')<60){
				writeSpeech("kuro","","Mm... I could use a good fuck, and you've been a <i>very</i> good client. Meet me at my place.");
				writeText("She leans in towards you, standing on her toes to whisper in your ear,");
				writeSpeech("kuro","","<i>I'll bring the condoms.</i>");
				writeText("With that, she practically skips off, smiling widely and very purposefully flashing her panties to you with every step.");
				writeFunction("writeEvent('kuro', 'kuro5')", "Finish your business for the day and head to her place");
				break;
			}
			else{
				//EDIT ME TO ACCOUNT FOR THE EXISTENCE OF MULTIPLE POST-HYPNO SEX SCENES BASED ON PREVIOUS SELECTIONS
				writeText("She laughs, her finger toying a strand of hair.");
				writeSpeech("kuro","","Only if you promise to do it raw, *Master~!");
				writeText("She bounces onto the balls of her feet, giving you a quick peck on the cheek before leaving the roof.");
				writeFunction("loadEncounter('kuro', 'kuro5a')", "Finish your business for the day and head to her place");
				break;
			}
			break;
		}
		case "kuro4b" : {
			document.getElementById('output').innerHTML = '';
			data.player.money -= 100;
			passTime();
			writeText("Her eyes go wide as you show her the money, her lollipop clicking against her teeth.");
			writeSpeech("kuro","","That's <i>one</i> way into a girl's panties.");
			writeText("She smiles widely, taking the money gently as she runs a finger along your belt.");
			writeSpeech("kuro","","My place. Tonight. <i>I'll bring the condoms.</i>");
			writeText("At that, she all-but-skips away, sliding the bills into her bra, likely for a lack of pockets.");
			writeFunction("writeEncounter('kuroMoney')", "Finish your business for the day and head to her place");
			break;
		}
		case "kuroMoney" : {
			document.getElementById('output').innerHTML = '';
			writeText("When you arrive at her house, the door's unlocked and, unlike last time, kuroF is standing there waiting for you.");
			writeText("She grins widely, fingering her lollipop as she shifts in place.");
			writeSpeech("kuro","","So, <i>stud</i>, how do you want this to go? Do you need a little help getting ready, or do you want to just <i>jump right in?</i>");
			writeFunction("writeEvent('kuroMoney1')", "Take your time");
			writeFunction("writeEvent('kuroMoney2')", "Get right to it");
			break;
		}
		case "kuro5" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			writeText("kuroF smiles, her lollipop sliding into her cheek.");
			if(data.player.gender == "man"){
				writeSpeech("kuro","","Heyhey, Mister Counselor~! I was worried that you were gonna keep little ol' me waiting.");
			}
			else{
				writeSpeech("kuro","","Heyhey, Miss Counselor~! I was worried that you were gonna keep little ol' me waiting.");
			}
			writeText("She fiddles with her phone a bit before sliding it between her breasts.");
			if(checkTrust('kuro')==62){
				if(galleryCheck('kuroMoney2')==true)
					writeSpeech("kuro","","You seem a bit more confident about your <i>skills</i> this time. Got some sorta secret weapon this time?");
				else
					writeSpeech("kuro","","You seemed pretty confident over the phone. Got some sorta <i>secret weapon</i> this time?");
				writeSpeech("player","","You could say that, yeah.");
				writeText("She laughs a little.");
				writeSpeech("kuro","","Well, I'll let it be a surprise, then. But if you just went and picked up a ribbed condom or something, I'll tell you now that that won't be enough... on its own.");
				writeSpeech("player","","It's not that. Don't worry - this'll be a lot of fun for <i>both</i> of us.");
				writeSpeech("kuro","","I hope so. You having me blow that last guy got me all riled up without even a <i>bit</i> of satisfaction, so you'd better make up for it~!");
				setTrust('kuro',63);
				writeFunction("writeEvent('kuro4')", "Head to her place");
				break;
			}
			else if(checkTrust('kuro')==61){
				if(!checkFlag('kuro','OralFixation'));
				addFlag('kuro','OralFixation');
				writeSpeech("kuro","","Geez. I haven't been able to stop thinking about the text I sent you, about the story.");
				writeText("She pouts, leaning into your chest.");
				writeSpeech("kuro","","Because of you, this itty-bitty lollipop isn't <i>nearly</i> enough to distract me... Just how do you plan on dealing with that, hm?");
			}
			else{
				writeSpeech("kuro","","Did you like that pic? I was thinking about how hard it must've made you, and I got <i>crazy</i> turned-on.");
				writeText("She pouts, leaning into your chest.");
				writeSpeech("kuro","","Because of you, sucking on some itty-bitty lollipop isn't <i>nearly</i> enough to distract me... Just how do you plan on dealing with that, hm?");
			}
			writeSpeech("player","","With my dick.");
			writeText("She pauses, pouting even more.");
			writeSpeech("kuro","","I mean, that <i>is</i> what I was implying, but wasn't that a little blunt?");
			if(galleryCheck('kuroMoney2')==true){
				writeSpeech("player","","It's not like it's the first time, and I thought you said you're feeling pent-up... But, hey, if you <i>want</i> me to play hard to get-");
				writeSpeech("kuro","","No, that's fine!");
				writeText("She reaches around you, resting her arms on her shoulders as she puts her face right up to yours.");
				writeSpeech("kuro","","My place. You and me, plus a couple condoms. I'll make sure to take it easy on you this time - that should keep it fair.");
			}
			else{
				writeSpeech("player","","You just said you're feeling pent-up, but if you <i>want</i> me to play hard to get, I can always-");
				writeSpeech("kuro","","Oh, hush!");
				writeText("She reaches around you, resting her arms on her shoulders as she puts her face right up to yours.");
				writeSpeech("kuro","","You <i>are</i> kinda right, though, so I'll get to the point before I soak through my panties.");
				writeText("You feel her thigh slide between your legs, rubbing against your crotch as she does.");
				writeSpeech("kuro","","Come to my place later. I'd normally charge pretty heavy for this sorta thing but, since I'm the one coming onto you, I won't charge a cent if you can get me off.");
				writeText("She smirks, her face leaning so close that the stick of her lollipop is almost pressing against you.");
				writeSpeech("kuro","","Don't go leaving a girl unsatisfied, hun.");
			}
			writeText("You open your mouth to speak but, before you can...");
			writeText("She presses her lips against yours, her tongue rubbing against yours for a second before she pulls away.");
			writeSpeech("kuro","","Enjoy~!");
			writeText("Her lollipop sits in your mouth as she strides away.");
			writeText("...It doesn't taste bad.");
			setTrust('kuro',63);
			writeFunction("writeEvent('kuro4')", "Head to her place");
			break;
		}
		case "kuro6" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			setTrust('kuro',64);
			writeText("Her eyes settle on you almost immediately, her expression very controlled as she shifts slightly.");
			if(data.player.gender == "man"){
				writeSpeech("kuro","","You owe me those sheets, Mister C-");
			}
			else{
				writeSpeech("kuro","","You owe me those sheets, Miss Couns-");
			}
			writeText("The door to the roof shuts behind you, her voice shifting to a high squeak as her panties darken a bit.");
			writeText("Blushing deeply, she pushes her skirt down as she looks up at you.");
			writeSpeech("player","","...kuroF, how many times have you heard a door-");
			writeSpeech("kuro","","Not important!");
			writeText("It takes another second for her to collect herself.");
			writeSpeech("kuro","","Dunno why that's happening, but-");
			writeText("You reach over and open the door slightly, her eyes going wide.");
			writeSpeech("kuro","","H-Hold on a sec, you don't have to-");
			writeText("The door closes, barely loud enough to be heard, especially over her moaning.");
			writeSpeech("player","","You know, calling me a jerk was pretty rude.");
			writeText("She freezes.");
			writeFunction("writeEncounter('kuro6a')", "Let her off easy");
			writeFunction("writeEncounter('kuro6b')", "Time to button-mash");
			break;
		}
		case "kuro6a" : {
			document.getElementById('output').innerHTML = '';
			writeText("There's a tense silence for a moment... before you shrug.");
			writeSpeech("player","","I guess you could just apologize, though.");
			writeText("She nods, relaxing.");
			writeSpeech("kuro","","Sorry, hun... They're just sheets, but I guess I was just kinda frustrated. Not used to being the, uh... <i>subby one</i>, I guess.");
			writeSpeech("player","","It's fine. So... <i>Doors,</i> huh?");
			writeText("She blushes which, given how hard she's been to catch off-guard, is pretty nice.");
			writeSpeech("kuro","","Y-Yeah. I barely remember yesterday after we started fucking, but hearing you slam the door on your way out was...");
			writeText("Her whole body shudders slightly as she remembers the sound, her legs spreading slightly.");
			if(!galleryCheck('kuroMoney2'))
				writeSpeech("kuro","","If I knew you fucked like that, I wouldn't have waited this long.");
			else
				writeSpeech("kuro","","God, that was so much better than the first time.");
			writeSpeech("kuro","","...I do need new sheets, though. I was planning on skipping class to get them, but then I started texting you, and then I shut my front door, and here we are.");
			writeText("Hm... She needs to go shopping? There probably aren't too many opportunities to trigger her, since there aren't too many traditional doors in a store...");
			writeText("Plus, you <i>could</i> remove the trigger pretty easily if you wanted, but maybe just replacing it would be fun?");
			writeFunction("writeEncounter('kuro6c')", "Remove the trigger");
			writeFunction("writeEncounter('kuro6d')", "Make her get turned on by beeping noises");
			break;
		}
		case "kuro6b" : {
			document.getElementById('output').innerHTML = '';
			writeText("There's a brief moment where you wonder if this is really a good idea.");
			writeText("Your hand stops halfway, thinking about what would happen if she moaned too loud, if people heard and came to investigate.");
			writeText("You pull your hand away from the door, then, when you think about losing your job...");
			writeText("And then you decide, 'Fuck it', and start slamming that door open and closed like a motherfucker.");
			writeText("Each time you do, kuroF makes a breathy, almost-silent squeak, her entire body collapsing down as she orgasms again and again.");
			writeText("You were something in the dozens when you finally stopped, kuroF's eyes glazed over in orgasmic-bliss as her body twitches uncontrollably.");
			writeText("...It might be a while before she's good to talk...");
			writeText("...");
			writeText("Finally recovered, kuroF glares at you for a few seconds.");
			writeSpeech("kuro","","...If I said that that was a total dick move, would you do it again?");
			writeSpeech("player","","No clue.");
			writeSpeech("kuro","","Then I won't <i>explicitly</i> say that it was a dick move. Explicitly.");
			writeSpeech("player","","That sounds like sass.");
			writeText("You reach slowly towards the door again, her body tensing up a bit.");
			writeText("Despite the clearly aghast expression on her face, though, you can clearly see her rubbing her thighs together...");
			writeSpeech("kuro","","S-Sorry.");
			writeText("She sighs, lowering her head a bit.");
			writeSpeech("kuro","","Calling you a jerk over some sheets I tore was totally uncool. I'm just... not used to being the subby one, I guess.");
			writeSpeech("player","","As long as you're sorry, it's fine. Still...");
			writeText("You smirk.");
			writeSpeech("player","","<i>Doors,</i> huh?");
			writeText("She blushes which, given how hard she's been to catch off-guard, is pretty nice.");
			writeSpeech("kuro","","Y-Yeah. I barely remember yesterday after we started fucking, but hearing you slam the door on your way out was...");
			writeText("Her whole body shudders slightly as she remembers the sound, her legs spreading slightly.");
			if(!galleryCheck('kuroMoney2'))
				writeSpeech("kuro","","If I knew you fucked like that, I wouldn't have waited this long.");
			else
				writeSpeech("kuro","","God, that was so much better than the first time.");
			writeSpeech("kuro","","...I do need new sheets, though. I was planning on skipping class to get them, but then I started texting you, and then I shut my front door, and here we are.");
			writeText("Hm... She needs to go shopping? There probably aren't too many opportunities to trigger her, since there aren't too many traditional doors in a store...");
			writeText("Plus, you <i>could</i> remove the trigger pretty easily if you wanted, but maybe just replacing it would be fun?");
			writeFunction("writeEncounter('kuro6c')", "Remove the trigger");
			writeFunction("writeEncounter('kuro6d')", "Make her get turned on by beeping noises");
			break;
		}
		case "kuro6c" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro') == 64){
				setTrust('kuro',65);
			}
			writeText("You make eye-contact for a moment, before speaking clearly.");
			writeSpeech("player","","This is an order.");
			writeText("Her eyes half-unfocus, nodding along.");
			writeSpeech("player","","<i>You no longer orgasm when you hear a door shut.</i> That hypnotic trigger will not affect you any more. Understood?");
			writeText("After another second, she nods firmly.");
			writeSpeech("player","","Good. Now wake up.");
			writeText("She blinks, her eyes refocusing.");
			writeSpeech("kuro","","Whoa, zoned out for a sec. Sorry.");
			writeText("She shakes her head around.");
			writeSpeech("kuro","","Anyway, I'm gonna get new sheets, which means shopping with a friend. She's pretty miffed about us not hanging out as much, and I can't really blame her.");
			writeText("She shrugs, but then smirks as she stands up.");
			writeSpeech("kuro","","I'll still be keeping those old sheets, though.");
			writeText("She wraps her arms around your waist as she presses her lips to your ear.");
			writeSpeech("kuro","","No need to rip up the new ones when I take you home, right?");
			writeText("She then pulls away, smiling.");
			writeSpeech("kuro","","I'll text ya when I'm available again, 'kay?");
			writeSpeech("player","","I'll be looking forward to it.");
			writeText("With that, you're alone on the roof, idly noting that the spot where kuroF was sitting is slightly damp.");
			writeText("...Well, you've still got a job to do, and a hobby to have <i>fun</i> with.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuro6d" : {
			document.getElementById('output').innerHTML = '';
			writeText("You make eye-contact for a moment, before speaking clearly.");
			writeSpeech("player","","This is an order.");
			writeText("Her eyes half-unfocus, nodding along.");
			writeSpeech("player","","<i>You no longer orgasm when you hear a door shut.</i> That hypnotic trigger will not affect you any more.");
			writeText("She shifts a bit, breathing slowly.");
			writeSpeech("player","","Instead, the sound of loud, beeping noises will turn you on more and more.");
			writeText("Her breathing starts getting a bit heavier.");
			writeSpeech("player","","It could be any kind of beep, from a store's scanner, to receiving a text.");
			writeText("If she has a friend that sends cluster-texts, she's in for quite the ride.");
			writeSpeech("player","","Do you understand?");
			writeText("After another second, she nods firmly.");
			writeSpeech("player","","Good. Now wake up.");
			writeText("She blinks, her eyes refocusing.");
			writeSpeech("kuro","","Whoa, zoned out for a sec. Sorry.");
			writeText("She shakes her head around.");
			writeSpeech("kuro","","Anyway, I'm gonna get new sheets, which means shopping with a friend. She's pretty miffed about us not hanging out as much, and I can't really blame her. We'll probably spend a whole day shopping, <i>at least.</i>");
			writeText("She shrugs, but then smirks as she stands up.");
			writeSpeech("kuro","","I'll still be keeping those old sheets, though.");
			writeText("She wraps her arms around your waist as she presses her lips to your ear.");
			writeSpeech("kuro","","No need to rip up the new ones when I take you home, right?");
			writeText("She then pulls away, smiling.");
			writeSpeech("kuro","","I'll text ya when I'm available again, 'kay?");
			writeSpeech("player","","I'll be looking forward to it.");
			writeText("With that, you're alone on the roof, idly noting that the spot where kuroF was sitting is slightly damp.");
			writeText("...Well, you've still got a job to do, and a hobby to have <i>fun</i> with.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuroCasino1": {
			document.getElementById('output').innerHTML = '';
			writeBig("images/kuro/7-1.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro", "", "Heyhey~! I was wondering how long you'd keep me waiting, *Mister Counselor~");
			writeSpeech("player", "", "kuroF? Is that a swimsuit?");
			writeSpeech("kuro", "", "Yup!");
			writeText("She raises her hands a bit, running her palms along the sides of her chest as she thumbs the straps on her shoulders.");
			writeSpeech("kuro", "", "Of course, if you don't like it, I'd be happy to let you take it off for me~");
			writeText("Given the nature of the casino, it's no surprise she's here to tempt you. You should probably keep going, but...");
			writeSpeech("kuro", "", "I'm gonna head in there. If you're interested in getting a good feel for the beds, I'd love the company of something more fun than my fingers!");
			writeText("She sways her hips smoothly, her shorts hiding nothing as she starts through the door.");
			writeSpeech("scarf", "bunny.jpg", "Come, it's fine to relax~ Just enjoy yourself, playerF...");
			if(checkTrust('kuro') == 64 || checkFlag('kuro','Triggered')){
				writeText("kuroF pauses for a moment though, running her her hand along the doorframe and smirking over her shoulder at you.");
				writeSpeech("kuro", "", "But don't go slamming the door <i>too</i> hard, hun. <i>I want you <b>inside</b> when I start to cum~!</i>");
			}
			writeFunction("writeEncounter('kuroCasino2')", "Go into the room with kuroF");
			writeFunction("changeLocation(data.player.location)", "Resist, keep on track");
			break;
		}
		case "kuroCasino2": {
			document.getElementById('output').innerHTML = '';
			writeBig("images/kuro/7-2.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro", "", "Hah~ Looks like we get to have a bit of fun, hm? Let's see how I look in a couple of <i>saucy outfits</i>...!");
			writeText("kuroF smirks, her arms raised as you feel a pleasant haze starting to fill your head.");
			writeText("Time feels vague and loose, moments blurring between one another as pleasure starts to stuff your mind, like cotton in your brain.");
			writeText("You lose track of sensation and the moment-to-moment details, your thoughts quickly focusing solely on her body.");
			writeSpeech("scarf", "bunny.jpg", "That's very good~ Just relax and enjoy this, and leave your body to me.");
			writeBig("images/scarf/casinoKuro1.jpg", "Art by Enoshima Iki");
			writeText("Your mind and skin feel more sensitive than ever before, wave after wave of ecstasy flooding your head.");
			writeSpeech("scarf", "bunny.jpg", "You don't have to worry about anything anymore. Just keep having fun with that slutty little body and leave everything to me.");
			writeBig("images/scarf/casinoKuro2.jpg", "Art by Enoshima Iki");
			writeText("You're sure she kept talking. A part of you is still able to recognize that, though what she's actually <i>saying</i>, you can't be sure.");
			writeText("Eventually, she even stops that much, leaving you to the endless cacophony of sexual sensation that you chose.");
			writeText("The only thing you can think about anymore, the only thing you <i>want</i> to think about anymore, is the pleasure of an endless night in the casino with kuroF.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
		case "kuro7" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro') < 100)
				setTrust('kuro',100);
			if(checkFlag('kuro','Pentup')){
				writeText("The moment the door shuts behind you, you see her eyes snap open as she eyes you hungrily.");
				writeSpeech("kuro","","You...");
				writeSpeech("player","","Me.");
				writeText("She takes a slow, deep breath, smoothing down her skirt a bit.");
				writeSpeech("kuro","","We're headed to my place.");
				writeText("You smile a bit, looking around.");
				writeSpeech("player","","Oh? Are you sure here isn't fine?");
				writeText("She swallows audibly, but ultimately just raises an eyebrow.");
				writeSpeech("kuro","","Hun, whatever neighborhood we fuck in is going to <i>know</i> I'm getting dicked down like a bitch in heat. Do you really want the whole school to hear me <i>howling</i> your name?");
				writeSpeech("player","","...You are <i>really</i> pent up.");
				writeSpeech("kuro","","Do you have any idea how many things go beep nowadays? Cars, stores, those little chimes in convenience stores, and I could swear that <i>nobody</i> uses vibrate on their phone.");
				writeText("She takes another slow, deep breath, her face flushed.");
				writeSpeech("player","","...I see. If you want it removed-");
				writeText("Before you can finish the sentence, you feel her lips press against yours, a half-moan stifled against you as she stops your sentence.");
				writeText("Barely leaning back at all, she looks you right in the eyes.");
				writeSpeech("kuro","","This is the most turned-on I have ever been. I don't want the whole 'beeping arousal' thing to stop, playerF, <i><b>I want the fucking to start.</b></i><br>Now, are we heading to my place, or are we doing this here? Because the council prez has been making more rounds than ever with the PTA meeting coming up, but I'm not sure how much longer I'm gonna care about whether she catches you <i>balls-deep inside my cunt.</i>");
				writeSpeech("player","","Your place it is, then.");
				writeText("She grins, giving you a peck on the cheek as she moves to open the door.");
				writeSpeech("kuro","","Lead the way, <i>stud.</i>");
				writeText("...");
				writeText("The walk to your home is quick, as you come to realize that even in a short walk, a <b>lot</b> of things make beeping noises.");
				writeText("kuroF's poker-face is near-perfect, which makes sense given the hypnosis, but the flush on her face is still pretty telling to someone like you.");
				writeText("When you actually arrive at her place, she steps inside with graceful confidence.");
			}
			else if(checkFlag('kuro','Disciplined')){
				writeSpeech("player","","See something interesting out there?");
				writeText("She turns her head a bit, grinning over her shoulder at you.");
				writeSpeech("kuro","","Maybe~");
				writeText("Turning her whole body now, she folds her hands behind her back and leans forward a bit.");
				writeSpeech("kuro","","I'd ask if you're as excited to see me as I am to see you, but I'm not sure that's even possible~!");
				writeSpeech("player","","It's good to see you again, kuroF. How was shopping?");
				writeText("She lets out a gentle laugh, her hand running along her thigh.");
				writeSpeech("kuro","","I spent the entire day edging and cumming over and over again, my heart <i>racing</i> every time I heard the beep of someone's phone, or someone entering a convenience store, or pressing a button on a vending machine.<br>And hun, the shopping district has a <i><b>lot</b></i> of vending machines.");
				writeSpeech("player","","You had fun, then?");
				writeSpeech("kuro","","It was a little awkward at first, but around the second time I came because someone came into the same store as me and the chime went off?");
				writeText("Her hands trace along her body, a small shiver going through her at the thought.");
				writeSpeech("kuro","","Yeah, I'd say I had a <i>lot</i> of fun~");
				writeText("She steps closer to you, her chest pressing against yours now as she grins.");
				writeSpeech("kuro","","But honestly, it's nowhere near as fun when I'm cumming all on my own~!");
				writeSpeech("player","","Well, in that case...");
				writeText("You run your hands along her hips for a moment, before she clicks her tongue.");
				writeSpeech("kuro","","Not here, hun. The student council president has been going around checking on places a lot more since word about another faculty meeting spread, and I don't wanna get caught.");
				if(!checkFlag('principal','council')){
					writeSpeech("player","","Faculty meeting? First I'm hearing about it...");
					writeSpeech("kuro","","I'd probably hit up the principal and ask her then. Well, after we're finished, of course~");
				}
				else{
					writeSpeech("player","","Right... That'd be a problem.");
					writeSpeech("kuro","","Yup. Better to take this somewhere <i>private~</i>");
				}
				writeSpeech("player","","Your place, then?");
				writeSpeech("kuro","","Just lead me to the bed and I'll be a happy little bitch~");
				writeText("...");
				writeText("The walk to your home is pretty sedate, especially considering exactly how many things make loud beeping noises on the way to her place..");
				writeText("kuroF's poker-face is near-perfect, even when she gets a few texts (though she seems much more focused on you than her phone), but the flush on her face is still pretty telling to someone like you.");
				writeText("When you actually arrive at her place, she steps inside with graceful confidence.");
			}
			else if(checkFlag('kuro','Triggered')){
				writeSpeech("player","","How was shopping?");
				writeText("kuroF looks over her shoulder at you with a grin.");
				writeSpeech("kuro","","The first twenty minutes were a little nerve-wracking, but once I got used to it?<br>Well, let's just say I just woke up to a new fetish~");
				writeSpeech("player","","I'm always happy to help a beautiful woman discover new things about herself.");
				writeSpeech("kuro","","Hah, you flirt~!");
				writeText("She saunters towards you, a sway in her hips as she leans her chest against yours.");
				writeSpeech("kuro","","But you know, I recall saying a little something about paying you back for turning my shopping trip into an exhibitionist's wet dream... And hun?");
				writeText("You feel her gently grab your wrist, pulling your hand under her skirt as you feel nothing but her wet pussy. You feel her upper lips press gently against your ear as she whispers,");
				writeSpeech("kuro","","I've been looking forward to repaying you for every <i>full-body shudder</i> and <i>suppressed moan</i> I had to hide~");
				writeSpeech("player","","Then we'd better head to my office. Unless you'd rather do it here...?");
				writeText("She shakes her head, her eyes going to the door.");
				writeSpeech("kuro","","Not here, hun. The student council president has been going around checking on places a lot more since word about some faculty meeting started to spread, and I don't wanna get caught.");
				if(checkFlag('principal','council')){
					writeSpeech("player","","Right, the meeting... principalF mentioned that. Your place it is, then.");
				}
				else{
					writeSpeech("player","","Faculty meeting? First I'm hearing about it...");
					writeSpeech("kuro","","Ask the principal later, then. For now, I think we have something else to focus on~");
				}
				if(data.player.gender == 'man')
					writeText("Her finger traces the front of your pants, teasing your shaft through them.");
				else
					writeText("She traces a finger down the front of your skirt, teasing your shaft through it.");
				writeSpeech("kuro","","You know how to get to my place, so lead the way hun, and I'll do my best to pay you back for <i>every</i> bit of pleasure~");
				writeText("...");
				writeText("The walk to your home is pretty sedate, especially considering exactly how many things make loud beeping noises on the way to her place..");
				writeText("kuroF's poker-face is near-perfect, even when she gets a few texts (though she seems much more focused on you than her phone), but the flush on her face is still pretty telling to someone like you.");
				writeText("When you actually arrive at her place, she steps inside with graceful confidence.");
			}
			else{
				writeText("As you shut the door to the roof, kuroF turns her head down to you with a grin.");
				writeSpeech("kuro","","Hiya there, playerTitle Counselor~! Hope my shopping trip didn't leave you <i>too</i> pent-up... though I'd be happy to hear you missed me~");
				writeText("She grins, folding her hands behind her back.");
				writeSpeech("kuro","","How's the counseling thing going, by the way? I don't think I ever actually asked how you're doing with the whole 'job' thing.");
				if(checkFlag('kuro','OralFixation')){
					writeSpeech("player","","Yeah, our conversations tend not to focus too much on career paths. It tends to go towards things like <i>oral fixations.</i>");
					writeText("kuroF's face flushes a bit.");
					writeSpeech("kuro","","R-Right, forgot I told you about that. In hindsight, it's a little embarrassing...");
					writeSpeech("player","","You're embarrassed about how kissing a girl gave you an oral fixation... but you're fine with giving a handjob while on the phone with a friend.");
					writeSpeech("kuro","","That's, like, totally different! Besides, a girl doesn't...");
					writeText("She pauses, her face getting even redder.");
					writeSpeech("player","","...doesn't forget her first kiss?");
					writeText("She turns her head away, pouting.");
					writeSpeech("kuro","","Y'know, this isn't the kind of teasing I came up here for.");
					writeSpeech("player","","Not my fault you're cute when you're flustered.");
					writeText("She rolls her eyes, smiling a bit now.");
					writeSpeech("kuro","","Well let's swap 'cute' for 'sexy', hun. I don't know about you, but I'm getting pretty turned-on myself.<br>...And not by the kissing thing.");
					writeText("Right, she does still have that trigger that turns her on whenever she's around you...");
					writeText("She steps toward you, pressing her chest gently against yours as she grins, gently grabbing your wrist...");
					writeText("And helping you get a feel of how wet she is under her skirt... and how bare she is, too.");
					writeSpeech("kuro","","So how about we have some fun, hun~?");
					if(data.player.gender == 'man')
						writeText("Her finger traces the front of your pants, teasing your shaft through them.");
					else
						writeText("She traces a finger down the front of your skirt, teasing your shaft through it.");
					writeSpeech("player","","We'd better head to my office, then. Unless you'd rather do it here...?");
					writeText("She shakes her head, her eyes going to the door.");
					writeSpeech("kuro","","Here probably isn't a good idea. The student council president has been going around checking on places a lot more since word about some faculty meeting started to spread, and I don't wanna get caught.<br>...Even if that girl's expression if she saw you balls-deep inside me would be hilarious.");
					if(checkFlag('principal','council')){
						writeSpeech("player","","Right, the meeting... principalF mentioned that. Your place it is, then.");
					}
					else{
						writeSpeech("player","","Faculty meeting? First I'm hearing about it...");
						writeSpeech("kuro","","Ask the principal later, then. For now, I think we have something else to focus on~");
						writeSpeech("player","","Your place it is, then.");
					}
					writeSpeech("kuro","","Lead the way~");
				}
				else{
					writeSpeech("player","","Yeah, our conversations tend not to focus too much on career paths. It tends to go toward more... <i>sexual</i> matters.");
					writeText("She laughs playfully, her hand tracing one of her breasts over her cardigan as she smirks.");
					writeSpeech("kuro","","Hm, I wonder why~? After all, I'm such a pure young maiden - I have no idea why your mind would go to such perverted places around me~!");
					writeSpeech("player","","Well, clearly I'll need to get my mind out of the gutter and just stop thinking about you sexually.");
					writeText("She rolls her eyes.");
					writeSpeech("kuro","","Right, like you could look at my body and <i>not</i> think of how much tan skin you could <i>paint white.</i> God knows I've gotten off to the thought more than once...");
					writeSpeech("player","","Well, I guess we're both just incorrigible perverts, aren't we?");
					writeSpeech("kuro","","Guess we must be perfect for each other then~ Though, I wouldn't mind testing our <i>compatibility</i> again once or twice... or a few dozen more times, just to be sure.");
					writeText("She steps toward you, pressing her chest gently against yours as she grins, gently grabbing your wrist...");
					writeText("And helping you get a feel of how wet she is under her skirt... and how bare she is, too.");
					writeSpeech("kuro","","So, how about you and I find a nice spot to conduct these lovely little tests~?");
					writeSpeech("player","","We'd better head to my office, then. Unless you'd rather do it here...?");
					writeText("She shakes her head, her eyes going to the door.");
					writeSpeech("kuro","","Here probably isn't a good idea. The student council president has been going around checking on places a lot more since word about some faculty meeting started to spread, and I don't wanna get caught.<br>...Even if that girl's expression if she saw you balls-deep inside me would be hilarious.");
					if(checkFlag('principal','council')){
						writeSpeech("player","","Right, the meeting... principalF mentioned that. Your place it is, then.");
					}
					else{
						writeSpeech("player","","Faculty meeting? First I'm hearing about it...");
						writeSpeech("kuro","","Ask the principal later, then. For now, I think we have something else to focus on~");
					}
					writeSpeech("player","","Your place it is, then.");
					writeSpeech("kuro","","Just lead the way~");
				}
				writeText("...");
				writeText("The walk to her place is pretty sedate, though kuroF doesn't seem to mind - she even mentions an interest in psychology. One of these days, you should probably talk with her about her career plans, seeing as you <b>are</b> her counselor...");
				writeText("When you actually arrive at her place, she steps in casually, though one of her hands does fiddle with her skirt a bit.");
			}
			writeFunction("writeEvent('kuro6')", "Shut the door behind you");
			break;
		}
		case "kuroPentUp" : {
			if(data.player.location == 'gallery')
				document.getElementById('output').innerHTML = '';
			writeText("The moment the door shuts behind you, every bit of calm, grace, and confidence disappears as you watch her entire body shiver as a moan spills out of her throat, a hand going to her chest for a second as she pants.");
			writeText("Now that you two are alone and in private, the hypnosis isn't forcing her to act 'normal'.");
			writeSpeech("player","","kuroF.");
			writeText("She turns to look at you, standing a bit straighter as she bites her lip.");
			writeSpeech("player","","Before we start, I have some questions for you.");
			writeText("Her hands start messing with her skirt even more, but she nods.");
			writeSpeech("player","","How many times did you edge yesterday?");
			writeSpeech("kuro","","I lost count.");
			writeSpeech("player","","Then make an educated guess.");
			writeText("She takes a slow, deep breath and closes her eyes.");
			writeSpeech("kuro","","We, um... bought something like thirty or forty small items at one point, since "+nikkiInitial+" wanted to pick up groceries.");
			writeSpeech("kuro","","I don't know how to count that. It kept beeping over, and over, and over... and I could barely think. The beeping just kept going, and I kept talking with "+nikkiInitial+", but the only thing I could think about was how close I was.");
			writeSpeech("player","","And was there ever a moment you were alone? When you didn't have to look <i>normal</i> in front of people?");
			writeText("Her body shudders again as she nods.");
			writeSpeech("kuro","","A few times, yeah. Whenever "+nikkiInitial+" would use the bathroom, and I was sure no one could see me. I'd just be <i>so turned on,</i> but I couldn't get off...!");
			writeSpeech("player","","Then it sounds like you followed my orders perfectly, kuroF. And checking the text-log...");
			writeText("She visibly perks up.");
			writeSpeech("player","","...It seems I <i>did</i> promise a reward, didn't I?");
			writeText("She opens her mouth, but you tap Send first.");
			if(data.player.location !="gallery"){
				for(var i = 0; i < data.story.length; i++){
					if(data.story[i].index == 'kuro'){
						data.story[i].textEvent = "kuroPhoneTemp";
					}
				}
			}
			writeText("Her phone buzzes again, her words turning to a moan as she shudders again.");
			writeText("Send, and she moans again. Send, Send, Send...");
			writeSpeech("player","","...Well, I think that's enough teasing for now.");
			writeText("You put your phone down near the bed, stepping toward her.");
			writeSpeech("player","","Take off your skirt.");
			writeText("Her hand quickly goes to her hip, fiddling with it for just a second before it drops to the ground. You have half a mind to stop her and ask her to fold it, but making her wait any longer might be a little much.");
			writeText("Given her current state, she probably doesn't even require an induction to instill a hypnotic trigger, so...");
			writeText("You pull off your pants, sitting down on the bed and pointing at your cock.");
			writeSpeech("player","","I'm going to be lifting that trigger of yours... conditionally. You can orgasm...");
			writeText("She looks elated for a moment.");
			writeSpeech("player","","...from the taste of my cum.");
			writeSpeech("kuro","","<i><b>Fuck yes~!</b></i>");
			writeText("She moves to kneel in front of the bed, but you stop her.");
			writeSpeech("player","","You won't be the only one using your mouth, kuroF.");
			writeText("Understanding, she nods and gets up on the bed almost impatiently, bringing her tan legs down on either side of your head as her wet pussy hovers right above you.");
			writeText("Your hands go to her hips as you grasp them firmly, no words coming from her as she takes your head into her mouth excitedly.");
			writeBig("images/kuro/8-1.jpg","Art by Enoshima Iki");
			writeText("She bobs up and down pretty deep to start, her tongue flicking against your head whenever she reaches the top, before flattening it and letting your cock drag against it as she takes you more than half-way down with each movement.");
			writeText("Her hand also moves fairly quickly, alternating pressure around your shaft - squeezing tight at the bottom, then relaxing a little as reaches the top and comes back down.");
			writeSpeech("player","","You seem pretty determined to cum.");
			writeText("She just hums in reply, the vibrations making your cock twitch in response for a moment... at which point she starts humming more.");
			writeText("Still, you're not in this position so that you can use your mouth for talking...");
			writeText("Pulling her down a bit more, you bring her cunt to your face as you extend your tongue, just gently moving it along her slit to start.");
			writeText("Given how sensitive she is at this point, though, that alone gets her moaning throatily around your cock as she picks up speed.");
			writeText("Bringing your left hand away from her hips, you spread her lips a bit as you slowly drag your tongue down and along her labia.");
			writeText("After just a little bit of that, you can feel her just barely begin to press her hips back towards you... and you respond by speeding up just a bit, adding a little pressure with each long stroke.");
			writeSpeech("kuro","","Ghn...~! <i>Mm...!</i>");
			writeText("Her moaning and pleasure make her lose a little of the control in her movements, but the small shaking of her hands and the feeling of her throat more than make up for it.");
			writeText("The feeling of her mouth around you gets a bit tighter as she focuses on taking you deeper with each bob, barely taking any time at all to start pressing her lips against your balls every second as the wet sound of cock-choked moans fills the air.");
			writeText("Her hand stops focusing on your shaft at all, her throat taking you balls-deep with every thrust, instead focusing on gently toying with your sack, gently rolling it around as her breathing gets more and more labored.");
			writeText("You're not focused on holding out at all, letting her push you closer and closer to the edge... and really, trying to get off quickly yourself. She deserves her reward, after all.");
			writeText("Switching up technique on a girl right before she finishes is generally not the best plan, so you just focus on the long, slow, forceful drags across her pussy as you spread her lips while kuroF works for that orgasm.");
			writeText("It isn't much longer before you hit the edge, your hips bucking just a bit as you let out the first rope into her mouth, and she cums.");
			writeSpeech("kuro","","<i><b><font size='+1'>MMMU~!</font></b></i>");
			writeText("Her body shudders on top of you, her thighs coming together and squeezing around your head as her throaty moans milk every drop she can get out of you.");
			writeText("It only takes a few seconds for you to finish, but she keeps shuddering on top of you for a good half-minute before finally coming to a stop, her breathing becoming gentle as she recovers, pulling her head up a bit until only your tip remains in her mouth.");
			writeBig("images/kuro/8-2.jpg","Art by Enoshima Iki");
			writeText("She stays like that for a few more seconds before finally lifting her head all the way up. A bit of the jizz spilled out while she was cumming, but most of it ended up in her mouth.");
			writeSpeech("kuro","","T-That was... amazing.");
			writeText("And given that she's speaking clearly, she swallowed.");
			writeText("Running your hand along her ass, you gently move her to the side a bit as she lays back on the bed.");
			writeText("She eyes you up and down just as hungrily at the start.");
			writeSpeech("kuro","","Round two?");
			writeText("There's a hopeful tinge to her voice as you laugh.");
			writeSpeech("player","","Is that what you want your reward to be? Two rounds?");
			writeText("She seems to think for a moment, before smirking.");
			writeSpeech("kuro","","Fuck me as long and as hard as you can, lover~");
			writeText("You pull off your shirt, kuroF doing the same with both hers and the cardigan before she lifts her legs a bit.");
			writeText("Moving between them, she lays back completely as you lean forward, your hands on her shoulders as you focus.");
			writeSpeech("player","","Cum as much as you like, kuroF. But really...");
			writeText("It's been a while since you bothered with self-hypnosis, but it has its place.");
			writeSpeech("player","","...you should be careful about how you word your wishes.");
			writeText("...");
			writeText("One hand teases her chest roughly, her moans spilling out uncontrollably as you gently pinch at her nipple.");
			writeSpeech("kuro","","N-Nuohfuckfuckfuck...!");
			writeText("Her legs squeeze your body tightly against her, your cock as deep as it can go as her eyes shut tightly.");
			writeText("You tighten your other hand's grasp on her thigh, a sharp gasp coming from her.");
			writeSpeech("player","","How many?");
			writeSpeech("kuro","","T-Three...!");
			writeSpeech("player","","Three what?");
			writeText("You pull your hand back, only to swat her ass sharply.");
			writeSpeech("kuro","","T-Three orgasms!");
			writeText("You squeeze her ass in your hands again, nodding.");
			writeSpeech("player","","Now count how many you have while I'm <i>thrusting.</i> And remember...");
			writeText("You bring your lips to her ear.");
			writeSpeech("player","","Every time you cum, everything will feel <i>so much better.</i>");
			writeText("Her eyes go wide as you roll you hips back, only getting rougher with her chest.");
			writeText("...");
			writeText("Your hand swats against her ass again, the loud slap ringing out with her moans.");
			writeText("Gently running your fingers along the red cheek, you go back to fingering her, counting the seconds.");
			writeText("After around twelve seconds, you pull your hand away.");
			writeSpeech("player","","How long?");
			writeSpeech("kuro","","F-Fifteen...~!");
			writeSpeech("player","","Wrong.");
			writeText("Another slap rings out, her body shuddering at the brink of orgasm as she gasps sharply.");
			writeSpeech("player","","The next slap will feel even better.");
			writeText("She lets out a gentle moan as you bring your hand to her pussy again.");
			writeText("Ten seconds this time.");
			writeSpeech("kuro","","E-Eleven~...");
			writeSpeech("player","","Close.");
			writeText("Her body shakes with the sound of the slap again.");
			writeText("...");
			writeText("Your hands press down against her shoulders as you slam your hips into hers again and again.");
			writeText("The first few times, you tried focusing on whatever would cause her the most pleasure, but you're honestly not sure there's much of a difference at this point.");
			writeBig("images/kuro/8-3.jpg","Art by Enoshima Iki");
			writeText("You keep fucking her roughly, unsure of the number of times you've had to stop to get a drink and some more lube, but you're pretty sure that if you pulled open the blinds, the sun would've set already.");
			writeText("She was hypnotized earlier into staying conscious and aware of all of the pleasure no matter how many times she came, but even hypnosis has its limits.");
			writeText("Taking a slow, deep breath while pistoning into her, you flip the trigger for your self-hypnosis.");
			writeSpeech("player","","I'm close to finishing again...? Well, might as well.");
			writeText("Moving your hands to her hips, you grasp her tightly and start thrusting into her, though it's not quite as fast or as hard.");
			writeText("Given that the sensation is so much stronger though, you get pretty close as you grunt,");
			writeSpeech("player","","Cumming...!");
			writeText("In all honesty, given how many loads you've already pumped out, you're probably dry at this point... but it still feels pretty good.");
			writeBig("images/kuro/8-4.jpg","Art by Enoshima Iki");
			writeText("Plus, her mouth does gently loll open, so she still seems to feel it. Though you're positive she'll be staying home tomorrow...");
			writeText("Pulling out, you roll your shoulders a bit and look at the clock.");
			writeSpeech("player","","It's already night... I should probably head home now.");
			writeText("You take a moment to look around for a paper and pencil (gotta leave a note for the poor girl)... before shrugging and grabbing your phone.");
			writeText("Her phone beeps once from your text message, kuroF shuddering slightly as it does.");
			writeText("...You'll have to get rid of that trigger at some point.");
			writeText("Probably.");
			if(data.player.location == "gallery")
				writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuroDisciplined" : {
			if(data.player.location == 'gallery')
				document.getElementById('output').innerHTML = '';
			writeText("The moment the door shuts behind you, every bit of calm, grace, and confidence disappears as you watch her entire body shiver as a moan spills out of her throat, a hand going to her chest for a second as she pants.");
			writeText("She does recover fairly quickly though, turning back to you with a flushed face and a grin.");
			writeSpeech("kuro","","That beeping really builds up, doesn't it~?");
			writeText("Running a hand through her hair, she collects herself as she reaches for her skirt.");
			writeSpeech("player","","Impatient, aren't we?");
			writeSpeech("kuro","","Not exactly.");
			writeText("Her skirt falls to the ground as she strips confidently, standing naked in front of you with a grin.");
			writeText("You can see her dripping cunt completely from here as she folds her hands behind her back.");
			writeSpeech("kuro","","Those texts you sent, one after the other, was a nice little reminder, hun, that this...");
			writeText("She gestures towards her body.");
			writeSpeech("kuro","","...is <i>yours.</i> If I were a screamer, the entire <i>mall</i> would've known I was cumming my slutty little brains out, and <i>you're</i> the one that did it.");
			writeSpeech("kuro","","I'm not stripping because I'm impatient.<br>I'm stripping because I want you to look at what's yours so you can <i><b>take it</b></i> as you see fit, <i>*Master~!</i>");
			writeSpeech("player","","...Once we're finished fucking, make sure I set up a 'Good girl' trigger.");
			writeSpeech("kuro","","Not 100% what that means, but sure. If I can still think straight after this, anyway.");
			writeSpeech("player","","No promises. But seeing as you're so eager to serve, how about we start with oral?");
			writeText("She nods with a smirk, stepping towards you and getting ready to kneel...");
			writeSpeech("player","","Not quite.");
			writeText("Taking off your pants, you sit back on the bed, placing your phone beneath the pillow.");
			writeSpeech("player","","You won't be the only one using your mouth.");
			writeText("It takes a second for it to click in her head before she nods excitedly.");
			writeText("Laying on your back, you see her hop onto the bed, her tan legs moving to either side of your head as she leans forward, her chest pressing against your abdomen as she grasps your cock.");
			writeText("Her wet pussy is hovering just inches above your face as you grap her waist firmly and inch her down just a bit as, wordlessly, she takes your head into her mouth with a happy hum.");
			writeBig("images/kuro/8-1.jpg","Art by Enoshima Iki");
			writeText("She bobs her head up and down slowly and shallowly at first, turning her head a little as she goes down and flicking her tongue against your head as she enjoys the moment.");
			writeText("Her hand firmly grasps the base of your shaft, working alongside her mouth to play with every inch of your cock at once, especially as her other hand moves to gently toy with your balls.");
			writeText("Pulling her mouth off your cock for a moment, you can practically hear her smile as she says,");
			writeSpeech("kuro","","Let's see who can get the other off first, hun~!");
			writeText("She gently kisses your tip before she thrusts her head back down, taking half your shaft at once as she rapidly picks up speed.");
			writeSpeech("player","","This is hardly a fair fight, you know.");
			writeText("Reaching back under the pillow, you calmly type a random character into your phone.");
			writeText("Of course, while you're not against playing dirty, you're still going to enjoy playing...");
			writeText("As you bring her hips a little lower, you bring your tongue against her pussy and trace a single long line up... and hit Send.");
			writeText("She shudders sharply as her phone beeps from the floor, before coming up and laughing gently.");
			writeSpeech("kuro","","But fair just isn't as fun~!");
			writeText("You grin, typing a random character and hitting Send again.");
			if(data.player.location !="gallery"){
				for(var i = 0; i < data.story.length; i++){
					if(data.story[i].index == 'kuro'){
						data.story[i].textEvent = "kuroPhoneTemp";
					}
				}
			}
			writeSpeech("player","","You learn fast. Now let's have some fun...");
			writeText("She keeps bobbing her head up and down as you pull your tongue along her pussy, focusing especially hard right above where her lips meet... It isn't long before she starts pushing her hips towards you, her cunt desperate for you to pick up the pace.");
			writeText("When you do, the stimulation only makes her pick up speed herself, though, as she takes you deeper and faster, the throaty sounds of her moans mixing with the wet sounds of her using your cock to fuck her mouth.");
			writeText("She stops using her hand as she starts taking you even deeper with each movement, her lips nearly pressing against your base every second as she twists her head just enough to make you feel it.");
			writeText("In all honesty, if you were a normal *guy, she'd get you off first and win the challenge handily - she's damn good.");
			writeText("So you call her phone, and it starts to ring.");
			writeText("The way she gently shakes on top of you just makes every stroke from your tongue that much more stimulating for her, and she has trouble focusing on blowing you.");
			writeText("Her phone just keeps ringing as her moans get louder and louder, her hands going to your thighs to stabilize herself as she takes you into her throat as deep as she can, before she finally loses completely.");
			writeText("Her head comes up as she lets out a loud, throaty moan, her grip on your legs squeezing tight as she shudders on top of you, and her hips pressing back hard against your head.");
			writeText("When she finally finishes cumming, you feel her relax onto your chest a bit... before she starts jerking you off again.");
			writeSpeech("kuro","","You really like playing with your toy, don't you~?");
			writeText("She gently kisses your shaft, starting from the base and going up to the tip.");
			writeSpeech("player","","Well, you <i>do</i> make a pretty fun sex-toy...");
			writeSpeech("kuro","","Then use me like one, lover~");
			writeText("She pauses, and you can practically hear her grin now as she says,");
			writeSpeech("kuro","","Fill my throat with your cum, <i><b>*Master.</b></i>");
			writeText("With that, she thrusts her head back down, taking you into her throat suddenly as your hips buck slightly.");
			writeSpeech("player","","F-Fuck...!");
			writeText("Your groans just make her even more energetic, her tongue dragging against your shaft and head over and over as she deepthroats you, spit spilling out of her mouth and down your cock as she does.");
			writeText("Leaning back fully, your head going against the bed, you feel your cock twitch as she works vigorously to make you cum, and it's working.");
			writeText("She throats your cock, swallowing around your length as you get closer to the edge, every part of your cock being played with by her mouth, and you don't last much longer.");
			writeText("When you thrust your hips up, your cock twitching rapidly, she takes you as deep as she can.");
			writeText("Each rope spurts down her throat, the head massaged again and again as she swallows around you, milking every drop she can get from your cock.");
			writeText("But it's not quite enough, as you can feel her pull away a bit, her lips dragging across your shaft as she inhales sharply through her nose.");
			writeBig("images/kuro/8-2.jpg","Art by Enoshima Iki");
			writeText("When you're finished, she raises her mouth away from your shaft, still breathing heavily a bit.");
			writeSpeech("kuro","","T-There...!");
			writeText("She looks over her shoulder, a proud expression on her face.");
			writeSpeech("kuro","","I made you cum, <i>*Master!</i>");
			writeSpeech("player","","Good girl.");
			writeText("She absolutely needs that trigger...");
			writeText("But in the meantime, it might be a good time to really test her limits.");
			writeSpeech("player","","Actually, I think you deserve a reward for that performance...");
			writeSpeech("kuro","","Ooh, what is it?");
			writeSpeech("player","","Lay back.");
			writeText("You sit up as she lays down onto the bed, grinning up at you as she spreads her legs.");
			writeSpeech("kuro","","Is my reward a second round~?");
			writeSpeech("player","","Is that <i>exactly</i> what you want your reward to be?");
			writeText("You line up your shaft with her pussy, resting it atop her warm, hungry cunt as she thinks for a moment.");
			writeText("A second longer, and she smirks.");
			writeSpeech("kuro","","I want you to fuck me as long and as hard as you can, *Master~");
			writeText("Her hand traces a small circle on your chest as she continues smugly,");
			writeSpeech("kuro","","I want you to <i>fuck me stupid.</i>");
			writeText("Perfect.");
			writeSpeech("player","","That's exactly what I wanted to hear, kuroF.");
			writeText("You lean forward, your cock beginning to push into her...");
			writeSpeech("player","","But you really should be careful what you wish for. So how about we start with double?");
			writeSpeech("kuro","","...Double?");
			writeText("You focus your gaze on her eyes.");
			writeSpeech("player","","This is an order...");
			writeText("Honestly, you might need some self-hypnosis for this one...");
			writeText("...");
			writeText("One hand teases her chest roughly, her moans spilling out uncontrollably as you gently pinch at her nipple.");
			writeSpeech("kuro","","N-Nuohfuckfuckfuck...!");
			writeText("Her legs squeeze you tightly against her, your cock as deep as it can go as her eyes shut tightly.");
			writeText("You tighten your other hand's grasp on her thigh, a sharp gasp coming from her.");
			writeSpeech("player","","How many?");
			writeSpeech("kuro","","T-Three...!");
			writeSpeech("player","","Three what?");
			writeText("You pull your hand back, only to swat her ass sharply.");
			writeSpeech("kuro","","T-Three orgasms!");
			writeText("You squeeze her ass in your hands again, nodding.");
			writeSpeech("player","","Now count how many you have while I'm <i>thrusting.</i> And remember...");
			writeText("You bring your lips to her ear.");
			writeSpeech("player","","Every time you cum, everything will feel <i>so much better.</i>");
			writeText("Her eyes go wide as you roll you hips back, only getting rougher with her chest.");
			writeText("...");
			writeText("Her face falls into the sheets as you grab her wrists, fucking her from behind.");
			writeText("She moans whorishly as she looks forward, staring at her phone resting against the headboard.");
			writeSpeech("player","","Bark for the camera.");
			writeSpeech("kuro","","W-WooFUCK~!");
			writeText("Slamming your hips forward, she shudders as you bottom-out, her moaning getting louder with each thrust.");
			writeText("You slow down a bit...");
			writeSpeech("player","","You can't cum until you do it <i>properly.</i>");
			writeText("Of course, you let go of one wrist to raise a hand...");
			writeSpeech("kuro","","W-...Woo<i>OH GOD YES</i>");
			writeText("Her ass shakes a bit as you slap it hard, her free hand going to the bed to stabilize herself again...");
			writeText("Only for her to lose her balance as you grab it back, pulling her against you.");
			writeSpeech("player","","Let's try that again.");
			writeSpeech("kuro","","Y-Yes *Master~");
			writeText("...");
			writeBig("images/kuro/8-3.jpg","Art by Enoshima Iki");
			writeSpeech("kuro","","<font size ='-1'>Haah~...!</font>");
			writeText("The rapid sound of your hips against hers nearly drowns out kuroF's moans as you press your hands into her chest, teasing her breasts.");
			writeText("There's a part of you that thinks that you <b>probably</b> should've stopped around the twentieth time, but she did say 'fucked stupid'...");
			writeText("As she squeezes around you again, her chest heaving, you look her in the eyes.");
			writeSpeech("player","","How many times is that?");
			writeSpeech("kuro","","<font size='-1'>F-Fuck...!</font>");
			writeText("You squeeze her chest tighter, her cunt squeezing around you again.");
			writeSpeech("player","","kuroF.");
			writeSpeech("kuro","","I... I dunno...~!");
			writeText("You can feel your own orgasm approaching again, and you continue.");
			writeSpeech("player","","And how many times have I cum?");
			writeSpeech("kuro","","...I 'unno~...!");
			writeSpeech("player","","One last question then.")
			writeText("She tries to focus on you, her nails digging into the sheets as you keep pistoning into her.");
			writeSpeech("player","","Are you ready for one more load?");
			writeSpeech("kuro","","Y-Yesh~!");
			writeText("Moving your hands to her waist, you pull her in tight to your hips, focusing on one last orgasm.");
			writeText("The wet, sloppy sound of you fucking her cunt gets louder as you slam into her, your shaft pressing against her walls as she tries her best to make you cum.");
			writeSpeech("kuro","","Fill me...~! O-One more~!");
			writeText("She shakes her hips a bit as you thrust in, her tits shifting lewdly as she begs, putting you over the edge.");
			writeSpeech("player","","Cumming...!");
			writeSpeech("kuro","","<i>Yessss...!</i>");
			writeBig("images/kuro/8-4.jpg","Art by Enoshima Iki");
			writeText("You're pretty sure you're out of juice at this point, but from the way kuroF's eyes roll up and her mouth lolls open in pleasure, you don't think she cares.");
			writeText("She just lays there, a half-conscious and <b>thoroughly</b>-fucked mess, as you pull your cock out.");
			writeText("Her pussy tries to keep squeezing around you, but it just makes your cum spill out as you get a good look at how you stretched her out.");
			writeText("You have half a mind to head out and let her recover as-is, but...");
			writeSpeech("player","","...Can you hear me?");
			writeText("She just responds with a little bit of twitching and panting.");
			writeSpeech("player","","Cool, that's close enough to a trance.");
			writeText("Leaning forward to her ear, you speak firmly and clearly.");
			writeSpeech("player","","When I leave the room, your sensitivity will be back to normal. You'll feel sore in the morning, but it won't hurt much. You'll just be in a nice, pleasant haze...");
			writeText("There's no way she's used to the soreness of a full sex-marathon, so that should help.");
			writeText("Huh, actually...");
			writeText("Pulling aside the shades over the window, your eyes widen a bit.");
			writeSpeech("player","","Crap, how is it nighttime already...?");
			writeText("With that in mind, you look back at kuroF.");
			writeSpeech("player","","You'll also fall asleep when I shut the door. You'll sleep deeply, and wake up well-rested.");
			writeText("Now if only the well-rested part worked with self-hypnosis...");
			writeSpeech("player","","Sleep well, kuroF.");
			writeText("She lets out a soft, slurred, half-moaned response, and you just nod.");
			writeText("Time to get home and shower...");
			writeText("Or Hell, maybe just skip straight to bed. Spending an entire afternoon fucking someone is tiring...");
			if(data.player.location == "gallery")
				writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuroCasual" : {
			if(data.player.location == 'gallery')
				document.getElementById('output').innerHTML = '';
			writeText("kuroF shudders slightly at the sound of the door shutting. The trigger itself was removed, but she must be remembering the feeling anyway. Good ol' Pavlovian arousal...");
			writeText("Stepping toward her, you wrap your arms around her waist as she lets out a low, satisfied hum.");
			if(checkFlag('kuro','Triggered')){
				writeSpeech("player","","You were saying something about paying me back, right?");
				writeSpeech("kuro","","Mm, of course~ It's no fun if I'm the only one getting off.<br>...Well, it's actually <i>tons</i> of fun, but it's not the same kind of fun as feeling a hot, throbbing cock inside my holes~");
			}
			else{
				writeSpeech("kuro","","Mm, going by what's pressing against my butt, I must not be the only one looking forward to this~");
				writeSpeech("player","","With a body like yours, how could I not?");
				writeSpeech("kuro","","You flirt~ Stop being so cute~");
			}
			writeText("Her hand goes to her skirt, fiddling with it as she turns her head a bit to kiss you.");
			writeText("While she presses her lips against yours, you can feel her pushing her hips against you too, her skirt falling to the floor as she presses her ass against your cock through your clothes.");
			writeSpeech("kuro","","How about we take this to the bed, stud~? I've got a nice classic position you might like~");
			writeSpeech("player","","Gladly.");
			writeText("You pull off your pants as she steps towards the bed. Sitting back on it, she gently presses your chest back until you're laying down, before getting on the bed herself.");
			writeText("Placing her legs on either side of your head, she lays her body against yours, her tits pressing against your chest, as you hear her give another satisfied hum.");
			writeSpeech("kuro","","God, you look wonderful from this angle too, playerTitle Counselor~ Absolutely <i>delicious~!</i>");
			writeBig("images/kuro/8-1.jpg","Art by Enoshima Iki");
			writeText("You feel her lips wrap around your head as her tongue teases at it in her mouth, going slowly and giving every inch of it a bit of love.");
			writeText("After a few more moments of that, she brings it out of her mouth to give it a soft, wet kiss right on the tip... before pushing that kiss forward, her lips gliding across your shaft as she goes down.");
			writeSpeech("player","","Fuck...!");
			writeText("You can feel her out a happy little hum, pleased that you're enjoying it.");
			writeText("Not to be outdone, you tighten your grasp on her hips and bring her ass down, your tongue getting to work as well.");
			writeText("It's her turn to groan as you drag your tongue around her pussy, teasing at the lips first before moving to the center.");
			writeText("Slow, long strokes, circling around and then teasing the slit, before following the lips back to the top to tease her little clit...");
			writeSpeech("kuro","","Hgh~!");
			writeText("She moans around your cock, her breathing getting a little labored as she tries to focus on your cock again.");
			writeText("You have half a mind to try increasing her sensitivity, but this is fine for now...");
			writeText("Her hand carefully strokes your shaft whenever she raises her head, her lips and fingers just barely apart as she twists her wrist just enough to change up the pressure.");
			writeText("She pauses near the top this time, her hand continuing to stroke you, but her mouth just barely below your tip...");
			writeSpeech("kuro","","Hm~!");
			writeText("With a satisfied hum, she traces along the bottom of your head with her tongue, lapping at you roughly as she keeps jerking you off faster and faster.");
			writeText("Of course, neither of you plan on stopping with just a bit of oral...");
			writeText("Slowly bringing her mouth all the way up, you feel a bit of her spit dribble onto your head, her hand smearing it around sloppily as she looks back at you.");
			writeSpeech("kuro","","Ready for the next part, lover~?");
			writeSpeech("player","","Whenever you are, kuroF.");
			writeText("At that, she moves to lay down on the bed, spreading her legs wide with a grin.");
			writeText("Her cardigan comes off, casually tossed across the bed as she brings her fingers to her pussy, spreading and toying with it a little while you pull off your shirt.");
			writeSpeech("kuro","","You ready for another 'compatibility test'?");
			writeText("Leaning between her legs, you rest your cock against her hot, wet cunt.");
			writeText("You thrust along her slit a few times, not actually fucking her for a few seconds.");
			writeSpeech("player","","Tell me what you want.");
			writeSpeech("kuro","","I want you to fuck me~");
			writeText("You run your hand along her thigh, pushing your head against her hole.");
			writeSpeech("player","","Tell me how hard you want it.");
			writeSpeech("kuro","","F-Fuck, as <i>hard as you can~!</i>");
			writeText("With that, you push forward into her, an unrestrained, throaty moan coming out of her as she grasps her chest, squeezing them gently.");
			writeBig("images/kuro/8-3.jpg","Art by Enoshima Iki");
			writeSpeech("kuro","","Yes, yes...! You feel so fucking good!");
			writeText("You lean into her more, her hips shifting as you use the angle to fuck her deeper, sawing in and out roughly.");
			writeSpeech("player","","Now tell me why it feels-");
			writeText("Before you can finish, you feel her arm reach around you and pull you forward.");
			writeText("She presses her lips to yours for a moment, before pulling back and pressing her forehead to yours instead.");
			writeSpeech("kuro","","'Because your cock is perfect for my tan little cunt', right?");
			writeText("She smiles and shakes her head gently.");
			writeSpeech("kuro","","I don't know how that hypno-stuff of yours works, stud, or why saying 'Yes' to you gets my pussy fucking <i>soaked</i>, but I do know one thing for sure.");
			writeText("She lets you go, pushing out her chest a bit.");
			writeSpeech("kuro","","I don't want a slow build-up. I want you to do what you did last time, to <i>fuck me up</i> and turn me into a <i>cum-dripping <b>fuck-sleeve.</b></i>");
			writeText("You can feel yourself swelling inside her, your own grin matching hers.");
			writeSpeech("player","","Be careful what you wish for. But seeing as you're so eager...");
			writeText("You run your hand along her chest, squeezing her tit.");
			writeSpeech("player","","...We'll start with double.");
			writeSpeech("kuro","","...Oh <i>fuck yes...!</i>");
			writeText("...");
			writeText("One hand teases her chest roughly, her moans spilling out uncontrollably as you gently pinch at her nipple.");
			writeSpeech("kuro","","N-Nuohfuckfuckfuck...!");
			writeText("Her legs squeeze you tightly against her, your cock as deep as it can go as her eyes shut tightly.");
			writeText("You tighten your other hand's grasp on her thigh, a sharp gasp coming from her.");
			writeSpeech("player","","How many?");
			writeSpeech("kuro","","T-Three...!");
			writeSpeech("player","","Three what?");
			writeText("You pull your hand back, only to swat her ass sharply.");
			writeSpeech("kuro","","T-Three orgasms!");
			writeText("You squeeze her ass in your hands again, nodding.");
			writeSpeech("player","","Now count how many you have while I'm <i>thrusting.</i> And remember...");
			writeText("You bring your lips to her ear.");
			writeSpeech("player","","Every time you cum, everything will feel <i>so much better.</i>");
			writeText("Her eyes go wide as you roll you hips back, only getting rougher with her chest.");
			writeText("...");
			writeText("Laying on her back, her head over the side of the bed, kuroF keeps uselessly fingering herself while you thrust into her throat.");
			writeText("The wet, sloppy sounds of you using her mouth like a sextoy fill the room as she tries to moan around your shaft.");
			writeSpeech("player","","That throat of yours feels better than your cunt, doesn't it?");
			writeText("Even half-choked by cock, you can still recognize her attempt to say 'Yes', her body quivering a bit.");
			writeText("Drawing your body back a bit, you pull your cock out of her mouth as she gasps sharply, taking deep breaths.");
			writeText("You give her a few seconds, before asking,");
			writeSpeech("player","","Did you cum from just your throat yet?");
			writeSpeech("kuro","","H-Hah... No~...");
			writeSpeech("player","","That must be making it <i>so much more sensitive.</i>");
			writeText("Her body shudders, her mouth the only hole that can give her pleasure right now.");
			writeSpeech("kuro","","Yes...! Please, keep using my throat~!");
			writeText("Stepping forward, you line your back up to her mouth as you run your thumb along her neck.");
			writeSpeech("player","","Are you ready?");
			writeSpeech("kuro","","<i>Yes~!</i>");
			writeText("Thrusting forward, you push into her throat fully, your balls resting on her face as she moans in pleasure.");
			writeText("...");
			writeText("By the time you're finally finished, she's laying on the bed, her breathing finally calming down a bit as she rests a bit.");
			writeText("Her arm is over her eyes, her body covered in sweat.");
			writeSpeech("player","","You okay?");
			writeText("She gives a small little nod.");
			writeSpeech("player","","And is that what you wanted?");
			writeText("Her body hops a little with a small laugh.");
			writeSpeech("kuro","","Ye... just feelin tired...");
			writeText("You take a moment to look at the clock.");
			writeSpeech("player","","According to the clock, we've been at it for hours, so I'm not surprised.");
			writeText("She moves her arm from her eyes, looking at you curiously.");
			writeSpeech("kuro","","How're you fine then...?");
			writeSpeech("player","","Cardio.<br>...and a little self-hypnosis.");
			writeSpeech("kuro","","Heh. Cheater.");
			writeSpeech("player","","You seemed to enjoy the benefits.");
			writeText("She laughs a little more.");
			writeSpeech("kuro","","Fuckin'... gonna sleep. Shower after.");
			writeSpeech("player","","Good idea. In fact...");
			writeText("You lean next to her, focusing on meeting her gaze.");
			writeSpeech("player","","After I shut the door, you're going to fall asleep - a deep, comfortable sleep.");
			writeSpeech("kuro","","Psh, like that'd... that'd work.");
			writeSpeech("player","","Because <i>that's</i> the most unreasonable application of hypnosis today.");
			writeSpeech("kuro","","Hah~... G'night, playerF...");
			writeSpeech("player","","Sleep well, kuroF.");
			writeText("She lets out a soft, slurred, half-moaned response, and you just nod.");
			writeText("Time to get home and shower...");
			writeText("Or Hell, maybe just skip straight to bed. Spending an entire afternoon fucking someone is tiring...");
			if(data.player.location == 'gallery')
				writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuro8" : {
			document.getElementById('output').innerHTML = '';
			if(checkFlag('kuro','Radicool')){
				writeSpeech("player","","What's crackalackin, kuroF?");
				writeText("She gives you A Look, then rolls her eyes playfully.");
				writeSpeech("kuro","","The 'hizzity-hizzaps' was bad enough, hun. But I'm doing good... aside from chemistry kicking my ass, at least.");
			}
			else{
				writeSpeech("player","","How're you doing, kuroF?");
				writeSpeech("kuro","","Pretty good, actually. Aside from chemistry kicking my ass, at least.");
			}
			if(checkTrust('sports') > 0){
				writeSpeech("player","","Huh, sportsF was having the same problem.");
				writeText("kuroF raises an eyebrow.");
				writeSpeech("kuro","","sportsF... That's that volleyball girl, yeah?");
				writeSpeech("player","","Yeah, that's-");
				writeSpeech("kuro","","The one with the big fuckin' tiddies?");
				writeSpeech("player","","...Yeah, that's sportsF.");
				writeText("She seems to think for a moment.");
				writeSpeech("kuro","","...Does the carpet match the drapes?");
				writeSpeech("player","","I'm beginning to think you're easily distracted.");
			}
			else{
				writeSpeech("player","","Yeah, it's a pretty common problem class.");
			}
			writeText("She smirks a little.");
			writeSpeech("kuro","","But let's skip the chem-talk, hm? It's boring enough in class, and I'd rather get to the fun stuff~");
			if(galleryCheck('kuroMoney2') && galleryCheck('kuro7') && galleryCheck('kuro8')){
				writeSpecial("You've completed all of kuroF's content for this version!")
			}
			writeFunction("writeEncounter('kuro8a')", (checkFlag('kuro','Radicool') ? "Let's get jiggy with it" : "Let's have some fun"));
			writeFunction("writeEncounter('kuro8b')", "Actually, it sounds like you need help with chemistry...");
			writeFunction("changeLocation(data.player.location)", "Another time");
			break;
		}
		case "kuro8a" : {
			document.getElementById('output').innerHTML = '';
			writeFunction("writeEvent('kuro7')", "Have her blow you"+((galleryCheck('kuroMoney') || galleryCheck('kuro7')) ? " again" : ""));
			writeFunction("writeEvent('kuro8')", "Fuck her in a swimsuit");
			writeFunction("writeEncounter('kuroMoneyRedo')", "Use hypnosis to make her think you're buying an hour");
			writeFunction("writeEncounter('kuro8aa')", "Never mind");
			break;
		}
		case "kuro8aa" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("kuro","","So, what's up? Were you looking to have a bit of <i>fun~?</i>");
			writeFunction("writeEncounter('kuro8a')", (checkFlag('kuro','Radicool') ? "Let's get jiggy with it" : "Let's have some fun"));
			writeFunction("writeEncounter('kuro8b')", "Actually, it sounds like you need help with chemistry...");
			writeFunction("changeLocation(data.player.location)", "Another time");
			break;
		}
		case "kuro8b" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('kuro') == 105)
				setTrust('kuro',110);
			if(!checkFlag('kuro','Studying'))
				addFlag('kuro','Studying');
			if(checkTrust('sports') > 0){
				writeSpeech("player","","Did you want any help? With chemistry, I mean. sportsF was having trouble with it too, so I recently reviewed it.");
				writeText("kuroF raises an eyebrow.");
				writeSpeech("kuro","","sportsF... That's that volleyball girl, yeah?");
				writeSpeech("player","","Yeah, that's-");
				writeSpeech("kuro","","The one with the big fuckin' tiddies?");
				writeSpeech("player","","...Yeah, that's sportsF.");
				writeText("She seems to think for a moment.");
				writeSpeech("kuro","","...Does the carpet match the drapes?");
				writeSpeech("player","","I'm beginning to think you're easily distracted.");
				writeSpeech("kuro","","I mean, it doesn't help that it's pretty boring. Are you sure you wanna help? I thought you came up here to stick your dick in me, not deal with a textbook.");
			}
			else{
				writeSpeech("player","","Did you want any help? With chemistry, I mean. It's been a while, but I remember the basics fairly well.");
				writeText("kuroF looks you over for a moment.");
				writeSpeech("kuro","","Are you sure? I mean, I kinda thought you came up here to stick your dick in me, not deal with a textbook.");
			}
			writeSpeech("player","","I see no reason why we can't be civilized people and do both. Plus it's literally my job, and I have to do it at least once a week or principalF might catch on.");
			writeText("She laughs, shrugging again as she pockets her phone.");
			writeSpeech("kuro","","Well, when you put it that way, why not? First we cover the theoreticals on population growth, and then we cover the <i>practical~</i>");
			writeSpeech("player","","That's a good way to put it. Now, if the subject really is growth rates...");
			writeText("...");
			writeSpeech("kuro","","I think I get it. It's fuckin' weird though.");
			writeSpeech("player","","A little, but you'll get used to logarithmic growth after a while.");
			writeSpeech("kuro","","Hun, I can't trust myself to <i>pronounce</i> that shit.");
			writeSpeech("player","","Then it's a good thing you won't be tested on pronounciation, isn't it?");
			writeText("Shutting the textbook, kuroF rolls her shoulders a bit.");
			writeSpeech("kuro","","God, nothing quite like a textbook to get you drier than the Sahara, right?");
			writeSpeech("player","","They're not exactly known for being page-turners, no.");
			writeText("The two of you stand up, putting away her books as kuroF is quiet for a few moments.");
			writeSpeech("kuro","","...So, like, what d'you wanna do? I'm not super used to pivoting from books to sex, so...");
			writeSpeech("player","","We'll have to head somewhere a bit more private, but...");
			writeFunction("writeEvent('kuro7')", "Have her blow you"+(galleryCheck('kuroMoney') ? " again" : ""));
			writeFunction("writeEvent('kuro8')", "Fuck her in a swimsuit");
			writeFunction("writeEncounter('kuroMoneyRedo')", "Use hypnosis to make her think you're buying an hour");
			writeFunction("writeEncounter('kuroJustStudy')", "That was it, actually");
			break;
		}
		case "kuroMoneyRedo" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			writeText("Looking kuroF in the eyes, you calmly say,");
			writeSpeech("player","","I'm going to give you an <i>order.</i>");
			writeText("She blinks once, before she nods half-blankly.");
			writeSpeech("player","","We're going to be doing a bit of... role-play. I've just spent a nice amount to buy some <i>time</i> with you, and we're meeting up at your place");
			writeText("She pauses for a moment, thinking it through... before nodding.");
			writeText("A second later, she grins.");
			writeSpeech("kuro","","Mm, I'll see you at my place, <i>stud~!</i>");
			writeText("Calmly turning on her heel, she struts towards the stairwell, undoubtedly to get ready...");
			writeText("...");
			writeText("When you arrive at her house, the door's unlocked and kuroF is standing in the hallway waiting for you with a saucy grin.");
			writeText("Bringing her hand to her mouth, she draws out her lollipop as she shifts in place.");
			writeSpeech("kuro","","So, <i>stud</i>, how do you want this to go? Do you need a little help getting ready, or do you want to just <i>jump right in?</i>");
			writeFunction("writeEvent('kuroMoney1')", "Take your time");
			writeFunction("writeEvent('kuroMoney2')", "Get right to it");
			break;
		}
		case "kuroJustStudy" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","...Actually, I think that was kinda it. The textbook may have taken my sex drive.");
			writeSpeech("kuro","","God, <i>right?</i> I swear, if it weren't for how expensive these things can be, I'd chuck the thing over the fence and watch it fall.");
			writeSpeech("player","","I get that. See you tomorrow?");
			writeSpeech("kuro","","Sure. Thanks for the help though, even if it ended up being a total buzzkill.");
			writeSpeech("player","","Happy to help.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuro9" : {
			document.getElementById('output').innerHTML = '';
			writeText("kuroF grins up at you as you shut the roof-door behind you.");
			writeSpeech("kuro","","Heyhey~! How's it going? Did you come up just to see me, or...");
			writeText("Her smile widens further.");
			writeSpeech("kuro","","Did you come up to <i>feel</i> me~?");
			if(galleryCheck('kuroMoney2') && galleryCheck('kuro7') && galleryCheck('kuro8')){
				writeSpecial("You've completed all of kuroF's content for this version!")
			}
			writeFunction("writeEncounter('kuro9a')", (checkFlag('kuro','Radicool') ? "Let's get jiggy with it" : "Let's have some fun"));
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuro9a" : {
			document.getElementById('output').innerHTML = '';
			writeFunction("writeEvent('kuro7')", "Have her blow you"+((galleryCheck('kuroMoney') || galleryCheck('kuro7')) ? " again" : ""));
			writeFunction("writeEvent('kuro8')", "Fuck her in a swimsuit");
			writeFunction("writeEncounter('kuroMoneyRedo')", "Use hypnosis to make her think you're buying an hour");
			writeFunction("writeEncounter('kuro9aa')", "Never mind");
			break;
		}
		case "kuro9aa" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("kuro","","So, what's up? Were you looking to have a bit of <i>fun~?</i>");
			writeFunction("writeEncounter('kuro8a')", (checkFlag('kuro','Radicool') ? "Let's get jiggy with it" : "Let's have some fun"));
			writeFunction("changeLocation(data.player.location)", "Another time");
			break;
		}
			/*
			writeText("Running a hand through her hair, she lets out a low sigh.");
			writeSpeech("kuro","","Could be doing better in classes, but that's not really your problem.");
			writeSpeech("player","","...I'm a counselor.");
			writeText("She pauses.");
			writeSpeech("kuro","","Right. That's, uh... Forgot about that.");
			writeSpeech("player","","Blame my sensual lovemaking prowess.");
			writeText("She chuckles, nodding.");
			writeSpeech("kuro","","I'll blame that, yeah. Anyway, it's a long story, but I haven't exactly been doing <i>stellar</i> in bio. Or chem. Or, uh...");
			writeText("She stops to think.");
			writeSpeech("kuro","","In most courses, actually. Bio and chem are just the only ones fucking me dry.");
			if(checkTrust('sports') > 0){
				writeSpeech("player","","Looks like chem is whooping you and sportsF both.");
				writeText("kuroF raises an eyebrow.");
				writeSpeech("kuro","","sportsF... That's that volleyball girl, yeah?");
				writeSpeech("player","","Yeah, that's-");
				writeSpeech("kuro","","The one with the big fuckin' tiddies?");
				writeSpeech("player","","...Yeah, that's sportsF.");
				writeText("She seems to think for a moment.");
				writeSpeech("kuro","","...Does the carpet match the drapes?");
				writeSpeech("player","","I'm beginning to think you're easily distracted.");
			}
			else{
				writeSpeech("player","","Yeah, those are pretty common problem classes.");
			}
			writeText("She sighs, shrugging.");
			writeSpeech("kuro","","Well, Bio isn't exactly the most interesting class. I prefer the more <i>personal</i> parts of growing a population, not the formulas.");
			writeSpeech("player","","Did you want any help? It's been a while since I've had to take bio or chem, but I remember the basics.");
			writeText("kuroF eyes you up.");
			writeSpeech("kuro","","Are you sure? I mean, I'd be glad for the help, but I kinda thought you came up here to stick your dick in me.");
			writeSpeech("player","","I see no reason why we can't be civilized people and do both. Plus it's literally my job, and I have to do it at least once a week or principalF might catch on.");
			writeText("She laughs, shrugging again as she pockets her phone.");
			writeSpeech("kuro","","You know what? Sure. Might as well build stress before you help me relieve it, right?");
			writeSpeech("player","","That's a good way to put it. Now, you mentioned the formula for population growth...");
			writeText("...");
			writeSpeech("kuro","","I think I get it. It's fuckin' weird though.");
			writeSpeech("player","","A little, but you'll get used to logarithmic growth after a while.");
			writeSpeech("kuro","","Hun, I can't trust myself to <i>pronounce</i> that shit.");
			writeSpeech("player","","Then it's a good thing you won't be tested on that, isn't it?");
			writeText("Shutting the textbook, kuroF rolls her shoulders a bit.");
			writeSpeech("kuro","","God, nothing quite like a textbook to get you drier than the Sahara, right?");
			writeSpeech("player","","They're not exactly known for being page-turners, no.");
			writeText("The two of you stand up, putting away her books as kuroF is quiet for a few moments.");
			writeSpeech("kuro","","...So, like, what d'you wanna do? 'Cause to be honest, I'm");

			writeSpeech("kuro","","...So, like, what d'you wanna do? 'Cause to be honest, I'm not exactly used to being submissive and stuff, so I'm...");
			writeText("She flushes a little.");
			writeSpeech("kuro","","Embarrassed, I guess? I normally just... do what I want. But like, how do I ask for orders?");
			writeSpeech("player","","Like that, basically.");
			writeText("Her eyes kinda narrow at you.");
			writeSpeech("kuro","","I can't tell if that was an honest answer, or if I just got sassed.");
			writeSpeech("player","","It's really just something you learn from experience. Did you <i>want</i> orders?");
			writeSpeech("kuro","","I mean, yeah?");
			writeText("She stops, taking a deep breath.");
			writeSpeech("kuro","","Yes.");
			break;
		}
		*/
		/*
		case "kuroLate" : {
			writeSpeech("player","","You're still here?");
			writeText("kuroF looks up from her phone, pausing.");
			writeSpeech("kuro","","Uhhhhhhh");
			writeText("Pocketing the phone, she brushes off her skirt.");
			writeSpeech("kuro","","I mean, yeah? You said to meet you here, and since you were a little late, I started playing some phone games.");
			writeSpeech("player","","And you... lost track of time?");
			writeSpeech("kuro","","Yup. Totes.");
			writeText("...Yeah, she was definitely waiting for you.");
			writeSpeech("kuro","","Anyway, sounds like we both lost track of time or something. Work come up?");
			writeSpeech("player","","Pretty much. I'm free now though, if you're still up for it.");
			writeText("She looks up at evening sky, scratching the back of her head.");
			writeSpeech("kuro","","Sorry, maybe tomorrow? I know it's kinda weird to say that, since I was sitting here, but");
			break;
		}
		case "kuroStoodUp" : {
			writeText("Hearing the sound of the door shut, kuroF looks up.");
			writeSpeech("kuro","","Yo! Glad you could make it - how're ya doing?");
			writeText("Pocketing the phone, she grins at you.");
			break;
		}
		*/
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
//Neutral Route
{index: "kuro1", name: "Free First Handy"},
{index: "kuro2", name: "Another Handjob"},
{index: "kuro3", name: "Ignored Back-Blaster"},
{index: "kuroMoney1", name: "$100 Fuck-Fest: Blow-Hard"},
{index: "kuroMoney2", name: "$100 Fuck-Fest: Getting Your Money's Worth"},
//Primary Route
{index: "kuro4", name: "Hypno-Fuck"},
{index: "kuro6", name: "Taking Her Home, and in Many Positions"},
{index: "kuro7", name: "Getting a Blowjob"},
{index: "kuro8", name: "Getting Wet in a Swimsuit"},
//Secondary Route
{index: "kuro5", name: "Cuck-Route: Watching and Jerking"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	var nikkiInitial = "";
	for(var i = 0; i < data.story.length; i++)
		if(data.story[i].index == 'nikki')
			nikkiInitial = data.story[i].fName.charAt(0);
	switch (name) {
		case "kuro1" : {
			document.getElementById('output').innerHTML = '';
			writeText("As the door clicks shut behind you, she practically starts preening as she adjusts her sitting position, casually kicking off her shoes.");
			writeBig("images/kuro/1-2.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Mm~! Maybe you're not as much of a killjoy as the principal made you sound! Still...");
			writeText("She seems to think for a moment.");
			writeSpeech("kuro","","Not to be rude, but a girl's gotta be cautious, y'know? Start off a little slow with... y'know...");
			writeText("She smirks.");
			writeBig("images/kuro/1-3.jpg", "Art by Enoshima Iki");
			writeText("...");
			writeText("A minute later, you've double-checked that the door is soundly locked as "+fName('kuro')+" pulls you over to the seat.");
			writeText("She teasingly runs a finger down right over your zipper, her nail making a faint scraping sound across the denim for a moment.");
			writeSpeech("kuro","","Mm... A nice reaction~!");
			writeText("She pokes at your stiffening, still-confined cock for a second, her eyes glinting playfully.");
			writeText("She doesn't make you wait for long, though, before she firmly grasps your zipper with one hand and your belt-buckle with the other.");
			writeSpeech("kuro","","Let's get to the fun part, okay hun~? Don't worry - first time's free.");
			writeText("With startling speed, she quickly undoes your fly, button, and belt, standing up swiftly as everything goes loose at once.");
			writeText("You quickly shimmy down your pants and underwear, though you see "+fName('kuro')+" starting to fidget less-than-discretely with her phone.");
			writeText("Despite the distraction, her hand quickly grasps your cock, starting to stroke it.");
			writeText("Her soft palm keeps changing the pressure with every stroke, her eyes darting between her phone and your face as she alters her grip.");
			writeText("It gets better by the second, her thumb moving to spread the quickly-welling pre around your head...");
			writeSpeech("kuro","","Ah!");
			writeText("Her phone starts ringing suddenly, her hand slowing down for just a second before picking back up.");
			writeSpeech("kuro","","Sorry, gotta take this.");
			writeBig("images/kuro/2-1.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Hey! Sorry, but this isn't exactly the best time.");
			writeText("She starts picking up speed, her grip tightening firmly around your shaft.");
			writeText("When your precum starts getting smeared around, she starts moving even faster, stroking your sensitive head with every rise and fall.");
			writeSpeech("kuro","","A "+data.player.gender+", yeah.");
			writeText("Her eyes move to yours for a moment, her lips quirking up into a small smile.");
			if (data.player.gender == "man") {
				writeSpeech("kuro","","He's... a new guy at school. And he's not a bad size...");
			}
			if (data.player.gender == "woman") {
				writeSpeech("kuro","","She's... a new girl at school. And she's not a bad size...");
			}
			writeText("Her eyes drift down as she says that, her lollipop rolling around in her mouth for a second.");
			writeText("She changes her grip again, the sound of her jacking you off getting even louder.");
			writeText("After a second, "+fName('kuro')+" laughs.");
			writeSpeech("kuro","","Holy shit, you can hear that?");
			writeText("She shifts the phone a bit, smirking as she shimmies a little closer to you.");
			writeText("Her hand starts moving even faster, dragging a guttural sound from your throat as you're brought to the edge.");
			writeSpeech("kuro","","Mm~. Trust me, hun, you ain't heard <i>nothin'</i> yet.");
			writeText("She aims your cock straight up, and...!");
			writeBig("images/kuro/2-2.jpg", "Art by Enoshima Iki");
			writeText("You try to keep your groan as quiet as possible, but you can still faintly hear something over her phone as you paint yourself and "+fName('kuro')+"'s hand.");
			writeSpeech("kuro","","Hah~! Oh my God, you are <i>such</i> a slut!");
			writeText("Her hand has slowed to barely more than a crawl, milking the very last drops out before she raises her cum-covered hand and looks you in the eyes.");
			if (data.player.gender == "man") {
				writeSpeech("kuro","","One sec, gotta clean up real quick - his load was <i>huge.</i>");
			}
			if (data.player.gender == "woman") {
				writeSpeech("kuro","","One sec, gotta clean up real quick - her load was <i>huge.</i>");
			}
			writeText("Maintaining eye-contact, she brings her hand to her mouth and rolls her lollipop around, exposing her slick, wet tongue as she laps up your jizz with a smirk.");
			writeSpeech("kuro","","You know, hun...");
			writeText("She leans forward, pulling the phone far enough away not to be overhead...");
			writeSpeech("kuro","","Now that I know how messy you can get, next time? <i>I'll have to catch it all with my mouth.</i>");
			writeText("She slowly stands up, rolling her wrist a bit as she brings the phone back to her ear.");
			writeSpeech("kuro","","Introduce you?");
			writeText("She looks you over appraisingly.");
			writeSpeech("kuro","","Maybe later, but for now?");
			writeText("She gives you a saucy wink, moving for the door.");
			if (data.player.gender == "man") {
				writeSpeech("kuro","","He's <i>all</i> mine.");
			}
			if (data.player.gender == "woman") {
				writeSpeech("kuro","","She's <i>all</i> mine.");
			}
			writeText("With surprising precision, she unlocks and opens the door just enough to slip through, the sound of it shutting almost immediately resounding.");
			writeText("You are, in all honesty, a little spent. It actually takes you a moment to realize that she couldn't have locked it behind her, which you quickly jump up to fix.");
			writeText("Still... That was one <i>Hell</i> of a handjob.");
			if (data.player.location != 'gallery') {
				if(!checkFlag('nikki','Phone'))
					addFlag('nikki','Phone');
				data.player.location = "playerOffice";
				passTime();
				setTrust('kuro', 20);
				writeFunction("changeLocation(data.player.location)", "Clean yourself up");
			}
			break;
		}
		case "kuro2" : {//second handy
			if (data.player.location != 'gallery') {
				if(data.player.money < 5){
					writeSpeech("kuro","","Um... You <i>do</i> realize you don't have enough, right?");
					writeFunction("loadEncounter('kuro', 'kuro4')", "Choose something else");
					writeFunction("changeLocation(data.player.location)", "Leave her be");
					scene = "kuro1";
					break;
				}
				document.getElementById('output').innerHTML = '';
				data.player.money -=5;
			}
			writeSpeech("kuro","","Mm~! I like that choice, hun!");
			writeText("She smiles, walking ahead of you to your office.");
			writeText("It doesn't take you two long at all to get there, or for you to get undressed.");
			writeText("A few seconds later, she smirks as she raises her hand to her mouth.");
			writeSpeech("kuro","","Let's make just a little more noise this time, okay?");
			writeText("Sliding her lollipop into her cheek, she runs her wet tongue across her palm and fingers, covering it in her saliva.");
			writeText("The slick sensation of her hand, tightening and letting go quickly and rhythmically, immediately has you biting back a moan.");
			writeText("Then, "+fName('kuro')+" raises her phone, the screen showing some other girl's name on the other end of the line.");
			writeSpeech("kuro","","Don't worry about her leaking anything about you, stud. Even if I actually <i>did</i> tell her your name, her <i>pussy's</i> the only thing that'd be leaking anywhere.");
			writeText("She relaxes back a bit, bringing the phone to her ear.");
			writeSpeech("kuro","","Honestly, having her listen while I get you off... I didn't realize how much of a <i>turn-on</i> it'd be.");
			writeText("As she picks up speed, she angles the phone a bit more and turns up her volume.");
			writeText("A second later, you hear the sound of a woman moaning, audibly fingerfucking herself to the sound of the fast, sloppy handjob "+fName('kuro')+"'s giving you.");
			writeText("Between both her voice and " +fName('kuro')+"'s hand, you barely last a few minutes before you start spurting.");
			writeText("After a few seconds...");
			writeBig("images/kuro/2-3.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","So, how was it?");
			writeSpeech("kuro","","Ah, you didn't... Well, that's fine.");
			writeText("She smiles, raising her hand to her mouth again as she laps up some of your cum.");
			if (data.player.gender == "man") {
				writeSpeech("kuro","","It doesn't look like this guy has a problem with trying again some other time.");
			}
			if (data.player.gender == "woman") {
				writeSpeech("kuro","","It doesn't look like this girl has a problem with trying again some other time.");
			}
			writeText("She double-checks her clothes for any leftover jizz on her before she gets up and leaves, winking to you just before slipping through the door.");
			if (data.player.location != 'gallery') {
				if(checkTrust('kuro') < 24){
					raiseTrust('kuro', 1);
				}
				data.player.location = "playerOffice";
				passTime();
				writeFunction("changeLocation(data.player.location)", "Lock the door and clean yourself up");
			}
			break;
		}
		case "kuro3" : {//nonchalant back
			if (data.player.location != 'gallery') {
				if(data.player.money < 10){
					writeSpeech("kuro","","Um... You <i>do</i> realize you don't have enough, right?");
					writeFunction("loadEncounter('kuro', 'kuro4')", "Choose something else");
					writeFunction("changeLocation(data.player.location)", "Leave her be");
					scene = "kuro1";
					break;
				}
				document.getElementById('output').innerHTML = '';
				data.player.money -=10;
				updateMenu();
			}
			writeSpeech("kuro","","Jerking on me, huh? As long as you pay for any stains, <i>I'm all yours, hun.</i> Of course, can't exactly do this one here, so...");
			writeText("She slips a piece of paper into your pocket with a wink.");
			writeSpeech("kuro","","I'll leave the back-door unlocked.");
			writeText("She walks off, a clear sway in her hips that <i>almost</i> bounces her skirt high enough to see under.");
			writeText("You finish your business for the day quickly, heading over to the address she gave you.");
			writeText("...");
			writeText("You feel a bit odd going around the house but, sure enough, the back door <i>is</i> unlocked.");
			writeText("You shut it behind you, the sound of it ringing loudly in the otherwise-silent house.");
			writeSpeech("kuro","","In here~!");
			writeText("Following her voice, you quickly spot her lazing on her bed, phone in hand.");
			writeBig("images/kuro/3-1.jpg", "Art by Enoshima Iki");
			writeText("She's gently bouncing her legs on the bed, shifting yet another lollipop in her mouth.");
			writeSpeech("kuro","","Mm, don't mind the phone. I'm just texting, so nobody'll hear you... this time.");
			writeText("She shifts a bit, her shift sliding further up and exposing more of her back.");
			writeSpeech("kuro","","You don't plan on making a girl wait, do you?");
			writeText("...");
			writeText("Pretty soon, you've fished out your cock, jerking off above her back,");
			writeText(fName('kuro')+" doesn't seem interested, just typing a few texts that you can't see.");
			writeText("After another minute or so, though, she shifts positions a bit, her legs bending at the knees as her feet come up.");
			writeText("You have to grit your teeth as she starts toying gently with your balls, her eyes moving away from her phone and focusing on you.");
			writeSpeech("kuro","","Jeez. Do you take this long on your own all the time?");
			writeText("One foot continues rubbing against your sack, the other teasing at your head as you keep stroking.");
			writeText("Despite that, even as you get closer to the edge, she just returns to her phone, typing with one hand...");
			writeBig("images/kuro/3-3.jpg", "Art by Enoshima Iki");
			writeBig("images/kuro/3-4.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Ah, you're finished. And it looks like you shot a pretty big load, too... Not too bad.");
			writeText("She shifts around a bit, angling her phone down.");
			writeSpeech("kuro","","There's not a whole lot a girl can do when you're the one jerking, but it looks like you still enjoyed yourself. Anyway, I'm meeting with someone in a bit, so I have to get changed. Later, hun.");
			writeText("She calmly pulls her cum-covered socks off, walking out of the room, and something about the devil-may-care attitude just <i>gets</i> you this time.");
			writeSpeech("player","","Hey, "+fName('kuro')+". There's a picture I wanted to show you sometime. Mind if I text it to you later?");
			writeText("She pauses, before shrugging.");
			writeSpeech("kuro","","Sure, knock yourself out.");
			if(data.player.hacking == 0){
				writeText("With that, she walks out of sight, leaving you to get your clothes on and start thinking about what you'll need for a bit of <i>digital</i> hypnosis. Maybe there's someone at school who's better with computers...?");
			}
			else{
				writeText("With that, she walks out of sight. Considering your skill with digital devices, it shouldn't be too hard to put something together that'll <i>really</i> catch her attention...");
			}
			// writeText("You have an idea, but no idea how to pull it off. Maybe inspiration will strike you later? For now, you're finished.");
			if (data.player.location != 'gallery') {
				data.player.location = "vintageStreet";
				passTime();
				writeFunction("changeLocation(data.player.location)", "Leave");
				if(checkTrust('kuro') < 24){
					raiseTrust('kuro', 1);
				}
			}
			break;
		}
		case "kuroMoney1" : {
			writeSpeech("player","","I think we'll start off slow. Don't want to end this any sooner than we have to, right?");
			writeText("She slowly pulls her lollipop out of her mouth, stepping forward.");
			writeSpeech("kuro","","Mm... I couldn't agree more, "+data.player.honorific+".");
			if(data.player.gender == "man"){
				writeText("Hooking her finger into your belt, and already making short work of it, she gently pulls you to her room.");
				writeText("When you step through the door, she leans into you and presses her mouth against yours.");
				writeText("You feel her tongue press into your mouth for just a moment, before she steps back with an impish smile and your belt in her hand.");
				writeSpeech("kuro","","I want you on that bed with your pants off, mister~!");
			}
			else{
				writeText("Hooking her finger into your shirt, she gently pulls you to her room.");
				writeText("She nearly has your half-tented skirt off by the time you step through the doorway, before she leans into you and presses her mouth against yours.");
				writeText("You feel her tongue press into your mouth for just a moment, before she steps back with an impish smile and your skirt in her hand.");
				writeSpeech("kuro","","Pull down those panties and take a seat, little miss.");
			}
			writeText("She licks her lips as she appreciates your growing tent in your underwear.");
			writeSpeech("kuro","","We want you as <i>hard as you can get</i> before the condom goes on.");
			writeText("When you plant your ass on the bed, she splays out her body right next to you, looking up at you.");
			if(data.player.gender == "man"){
				writeText("You gesture her forward slightly as you slide down your underwear.");
				writeText("As you do, your cock springs out, spattering a drop of pre across her cheek.");
			}
			else{
				writeText("You slowly draw the fabric of your panties down, kuroF's eyes settling on the wet spot where your tip was.");
				writeSpeech("kuro","","Guess I'm not the only girl excited to be here~!");
			}
			writeText("You feel her hand gently grasp around your base as she winks.");
			writeBig("images/kuro/5-1.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Let's see how you taste, hm?");
			writeText("She slowly lowers her mouth onto your head, her wet lips sliding down as her tongue starts lapping at the bottom of the head.");
			writeText("She bobs up and down a bit, her eyes never leaving yours as she moans around your cock.");
			writeText("As she goes a bit deeper, you feel her tongue start to speed up, getting especially vigorous when she reaches the top.");
			writeText("Her tongue teases your urethra as she does, before she dives back down.");
			writeText("She barely advances half-an-inch with each drop, but the way her just-barely-rough tongue teases your shaft almost has your hips bucking.");
			writeText("When she finally bobs low enough that she nearly reaches the base, she pauses.");
			writeText("It lasts a second, then two, and you spot the twinkle in her eyes as she stays entirely still.");
			writeText("Taking the hint, you grab the back of her head and <i>thrust.</i>");
			writeText("She gags loudly as you slam your cockhead deep into her throat, but you can still feel her laugh around your shaft as she presses her nose against your stomach.");
			writeText("kuroF just gently squirms in place, every shift sending pleasure up your shaft, until you feel her gently pat your thigh.");
			if(data.player.gender == "man"){
				writeText("Removing your hand, you groan deeply as she pulls herself away almost agonizingly slowly, pausing once again at the top.");
			}
			else{
				writeText("Removing your hand, you curl your body forward with a moan as she pulls herself away almost agonizingly slowly, pausing once again at the top.");
			}
			writeText("With a resounding <i>*POP*</i>, she finally seperates your cock and her lips as she slowly strokes your length.");
			writeSpeech("kuro","","Just one sec, hun...");
			writeText("Her other hand raises up a condom (which, you realize, she must've unwrapped while throating you) and gently pinches the tip.");
			writeText("The slow rolling slide of the condom down your shaft isn't the most interesting sensation but, given that it only lasts a moment, it doesn't <i>really</i> matter.");
			writeBig("images/kuro/5-2.jpg", "Art by Enoshima Iki");
			writeText("She grins and brings it right up to her face, breathing deeply for a moment.");
			writeSpeech("kuro","","There we go... Are you ready for the main event, hun?");
			writeFunction("writeEvent('kuroMoney2')", "Absolutely");
			break;
		}
		case "kuroMoney2" : {
			if((galleryCheck("kuroMoney1") != true) && (data.player.location != 'gallery')){
				writeEvent("kuroMoney1");
				document.getElementById('output').innerHTML = '';
				wrapper.scrollTop = 0;
				writeSpeech("kuro","","Excited, are you? Well, I won't keep you waiting, so let's get to the bed.");
				if(data.player.gender == "man"){
					writeText("Getting right down to business, she leads you into her bedroom and quickly undoes your belt, pausing for a moment to look at the rapidly-growing bulge in your pants.");
				}
				else{
					writeText("Getting right down to business, she leads you into her bedroom and quickly removes your skirt, pausing for a moment to look at the rapidly-growing bulge in your panties.");
				}
				writeText("A second later, though, and you have your underwear down as she slides a rather bright green condom down your shaft.");
				writeText("With it properly in-place, she grins and lays onto the bed.");
				writeSpeech("kuro","","You ready for the main event, hun?");
				writeSpeech("player","","Absolutely. Are you?");
			}
			if(data.player.location == 'gallery'){
				writeSpeech("player","","Are you ready?");
			}
			writeText("kuroF laughs, smiling up at you as she lifts her legs, revealing her underwear.");
			writeBig("images/kuro/5-3.jpg")
			writeSpeech("kuro","","Hun, for the rest of the day, I'm your <i>personal sex toy.</i> You ever asked a Fleshlight if it was ready for a dick before?");
			writeSpeech("player","","Point taken. In that case...");
			writeText("You lean forward, grabbing her ankles tightly as you slap your cock down against her panties.");
			writeText("The texture against your shaft is soft and smooth, but not quite as good as the feeling of her skin against your head as you roll your hips forward.");
			writeSpeech("kuro","","Like my choice? I think blue suits me better, but the purple felt nice and <i>sexy.</i> What do you think?");
			writeText("You lower one hand to slide her panties to the side, pretending to think deeply for a moment.");
			writeSpeech("player","","Well, I think...");
			writeText("You press your head against her, feeling just as much as hearing her breathing speed up.");
			writeSpeech("player","","...that <i><b>sex-toys</b></i> don't talk.");
			writeBig("images/kuro/5-4.jpg", "Art by Enoshima Iki");
			writeText("She lets out a half-laugh, half-moan as you push into her, her slit squeezing down on you and feeling warm even through the condom.");
			writeSpeech("kuro","","S-Sounds like you haven't been using the right ones, "+data.player.title+" Counselor~!");
			writeText("You feel her squeeze tightly around you as you slide in deeper.");
			writeSpeech("kuro","","After all...");
			writeText("She rolls her hips around, your cock pressing against all of her walls with each twist.");
			writeSpeech("kuro","","Isn't it just <i>so much better</i> when your toy can <i><b>moan your name?</b></i>");
			writeSpeech("player","","I'd rather make you scream it...!");
			writeText("Swinging your hips forward, her breathing hitches as you bottom-out inside of her; she tries to catch her breath, but-");
			writeSpeech("player","","I don't plan on holding back.");
			writeText("You saw into her cunt with each thrust, changing the angle slightly with each time to see how she reacts. She's good at keeping her feelings off of her face, but...");
			writeSpeech("player","","Ah, so you like it there?");
			writeText("...she's not <i>quite</i> as good when it comes to keeping her calves from tensing.");
			writeText("Each time you thrust deep, angling up just enough to feel your head rubbing against every ridge inside of her, you feel her calves get just a little bit tenser.");
			writeText("Despite that, though, she manages to keep a mostly-controlled face the entire time, focusing on squeezing tightly around you instead.");
			writeSpeech("kuro","","Sorry, h-hun~ But when you try and fuck me like that, I can't help but take it as a challenge~!");
			writeText("At that, she lifts her body a bit, almost like a sit-up, and almost the entire sensation of fucking her changes.");
			writeText("You can just barely see her abs moving where her shirt rides up and her skirt slid aside, tightening and relaxing quickly as she squeezes around you.");
			writeText("Instead of just pressure around your whole cock raising or dropping, she squeezes along your shaft almost like she's milking you.");
			writeText("Each time you draw back, she relaxes right until your head is nearly out before <i>clamping</i> down and rolling her hips.");
			writeText("Then, when you thrust in, she relaxes just enough that you feel her folds stroking your entire shaft.");
			writeText("And in that moment where you're balls-deep and not moving, she squeezes down as tightly as you can handle it, waiting for the moment that you pull back.");
			writeSpeech("player","","Shit...!");
			writeSpeech("kuro","","Haha~! Come on, hun~ What happened to making me <i>scream your name?</i>");
			writeText("Despite yourself, you can't stop thrusting wildly into her, barely able to hold on.");
			writeText("After only a few more thrusts, you can't hold back any more.");
			writeSpeech("player","","<i><b>Cumming...!</b></i>");
			writeBig("images/kuro/5-5.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","Nnn~... I can <i>feel</i> your hot, <i>fat</i> load stretching that condom down there... Looks like I won, huh?");
			writeText("After the last few ropes spurt into the condom, you slowly pull out with a wet sound.");
			writeSpeech("player","","Looks like it. Still, it's not like I'm <i>completely</i> spent.");
			writeText("She grins, reaching over the bed and grabbing a few more condoms.");
			writeSpeech("kuro","","I was <i><b>really</b></i> hoping you'd say that.");
			writeText("...");
			if(data.player.location != "gallery"){
				if(checkTrust('kuro')>100){
					writeText("By the time the two of you are finished, most of the afternoon is gone, along with most of the condoms, but you're pretty satisfied.");
					writeText("And given that you jacked up kuroF's sensitivity a bit during the sex, she's feeling pretty good too.");
					writeText("But for now, it's about time to get going before you actually do lose the whole afternoon...");
				}
				else{
					writeText("You ended up spending the entire morning fucking her, but she never seemed to lose that same smug look throughout it all. The last time you went over the edge, it was imagining that face of hers contorted in pleasure.");
					writeText("Still, considering the fact that you're a hypnotist, maybe it's possible to use <i>that</i> to take her down a notch...");
					writeText("That's for another day, though. For now, a shower and back to work...");
				}
				data.player.location = "vintageStreet";
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuro4" : {//hypno into mindbreak sex
			writeText("When you reach her house, you can't even shut the door behind you before kuroF's tongue is in your mouth.");
			writeText("Your back ends up pushing the door shut before she pulls back, her face flushed as she smirks.");
			writeSpeech("kuro","","I've been waiting for this since this morning, so let's get right to the point~!");
			writeText("She runs a finger along your crotch before starting to pull off her shirt, walking to the bed as she casually tosses her clothes to the ground.");
			writeText("Seems like telling her to get turned on whenever she's around you is paying off pretty quickly...");
			writeSpeech("kuro","","Come on, don't go leaving a girl hangin'~!");
			writeText("Stripping down, you walk into her room, seeing her laying down and spreading herself.");
			writeBig("images/kuro/phone5a.jpg", "Art by Enoshima Iki");
			writeSpeech("kuro","","You enjoyin' the view?");
			writeText("She spreads her legs a bit, a damp spot on the sheets becoming visible as she grins.");
			writeSpeech("kuro","","Or do you think you need a closer look?");
			writeText("You step forward, one hand grasping your cock as you move between her legs.");
			writeSpeech("player","","How long have you been dripping like this?");
			writeText("She moans a bit as your other hand slides down to her warm, slick pussy.");
			writeSpeech("kuro","","Since I woke up, of course. Your texts come with a pic of your face, y'know.");
			writeText("You barely have to push at all to feel your finger go into her, before she squeezes down around you.");
			writeSpeech("player","","Really, now? Just looking at my picture was enough to-");
			writeText("You stop, feeling her calves curl around your legs.");
			writeSpeech("kuro","","Okay, look, I love foreplay as much as the next girl, but...");
			writeText("She pulls sharply forward, forcing you to use your hands to catch yourself as your shaft slaps against her ass.");
			writeSpeech("kuro","","Stop talking and <i>fuck me, stud.</i>");
			writeSpeech("player","","...Y'know what? Sure.");
			writeText("You line yourself up, your head pressing against her pussylips for a moment, before you wrap your hands around her waist.");
			writeSpeech("player","","But we're doing it my way.");
			writeText("You roll the two of you over, her weight resting comfortably on you as you both look up.");
			writeText("kuroF gives a slight hum of approval, her hand going down to your cock poking out between her thighs.");
			writeSpeech("kuro","","Not my favorite position, but it'll do...");
			writeText("She pauses.");
			writeSpeech("kuro","","Ah, wait. Where's the condom?");
			writeSpeech("player","","That's a good question, kuroF. But how about <i>I order you to relax.</i>");
			writeText("Her eyes unfocus as you grab one of her tits, her entire body relaxing underneath you.");
			writeSpeech("kuro","","W-Whaa...?");
			writeBig("images/kuro/6-2.jpg", "Art by Enoshima Iki");
			writeText("She tries raising her body up, but only goes up a bit as her eyes narrow slightly.");
			writeSpeech("kuro","","I can't control my...");
			writeText("She pauses, her eyes nearly coming back into focus...");
			writeText("...but failing as she goes limp.");
			writeSpeech("player","","Can you feel all of this, kuroF?");
			writeSpeech("kuro","","Nn... It's, hazy...? What's happening...?");
			writeText("You slow down your thrusting, only pushing halfway into her each time.");
			writeSpeech("player","","You're going under, kuroF. Deeper and deeper into trance, with every thrust...");
			writeText("She blinks once, before looking vaguely confused.");
			writeSpeech("kuro","","But, trance is... that's not real, right...?");
			writeText("Her eyes flutter slightly as you push and pull inside of her, her breathing getting softer.");
			writeSpeech("player","","Of course it isn't. But it <i>feels</i> like it is, right?");
			writeText("You lean forward, sawing into her again and again.");
			writeSpeech("player","","It just feels so nice to listen, so it might as well be real... Right?");
			writeSpeech("kuro","","A-Ah...? I guess...");
			writeText("You slow down even more, holding back while maintaining eye-contact.");
			writeSpeech("player","","It feels good, doesn't it?");
			writeText("You lower one hand to her clit for emphasis, gently pressing around it.");
			writeSpeech("kuro","","Yes...?");
			writeText("You <b>slam</b> your hips forward.");
			writeSpeech("kuro","","<i><b>N-Nn!</b></i>");
			writeSpeech("player","","That was a <i>question</i>, not an <i>answer.</i>");
			writeText("Her eyes start refocusing, but thrusting faster into her cunt pulls her mind away from it.");
			writeSpeech("kuro","","Y-yes... It feels good...");
			writeSpeech("player","","And it's just getting <i>better,</i> right?");
			writeSpeech("kuro","","Yes...!");
			writeText("She seems like she's trying to focus on squeezing around you, but she keeps failing every time you bottom-out.");
			writeSpeech("player","","And it feels <i>good</i> to say 'Yes' to me, right?");
			writeSpeech("kuro","","Y-Yes...! Ooooh fuck...!");
			writeText("She starts whispering it under her breath, her body starting to quiver each time.");
			writeText("Her legs are shaking almost uncontrollably as you pick up speed again.");
			writeText("The way she's wildly squeezing around you, trying to control her body but failing, is almost as erotic as her moans.");
			writeSpeech("kuro","","N-No fair...! Why do you feel so good...!?");
			writeText("You squeeze her breast tighter as you bring your mouth to her ear.");
			writeSpeech("player","","Isn't it obvious, kuroF?");
			writeText("Aiming for the points that make her squirm the most, you start pistoning into her cunt full-force.");
			writeSpeech("player","","It's because this cock is the perfect fit for that little tan cunt of yours.");
			writeText("Her breathing hitches.");
			writeSpeech("player","","That's why you can barely focus, why you're <i>already almost cumming. And it's why...</i>");
			writeText("Your hand moves down, caressing her abs gently.");
			writeSpeech("kuro","","I-It's why I want you to cum... <i>in there...?</i>");
			writeText("Your hand just barely pinches her skin, kuroF sharply sucking in air.");
			writeSpeech("player","","Another question, kuroF?");
			writeSpeech("kuro","","No, I meant... that <i>I want you to cum inside...!</i>");
			writeSpeech("player","","Are you <i>sure</i> that's what you want?");
			writeSpeech("kuro","","Y-Yes~! F-Fuck, hurry up! I'm almost-");
			writeText("You slow down slightly, a disappointed mewl coming from her as she starts trying to thrust herself onto you.");
			writeSpeech("player","","I'm beginning to think you forgot the power-dynamic here, kuroF.");
			writeSpeech("kuro","","Please...!");
			writeText("Her hand goes down to her clit, clearly intent on cumming, but...");
			writeSpeech("player","","Until I give the order, you <i>are not allowed to orgasm.</i>");
			writeText("You feel her slow down too.");
			writeSpeech("kuro","","W-Wait a sec, I didn't-");
			writeText("Your hand goes up to her hair, grabbing tightly.");
			writeSpeech("player","","Now let's see if I can <i>fuck</i> some manners into a <i>bitch...</i>");
			writeText("She pauses like she's going to speak, but she just meekly nods.");
			writeText("...")
			writeText("You bottom-out one last time, shooting a last load into her cunt as she lays there.");
			writeText("You still didn't let her cum, the pleasure rising in her until she couldn't think of anything else.");
			writeText("As you pull out, her folds don't hold nearly as tightly as when you started, your head pulling her open with barely a slick *pop* as you pull out.");
			writeBig("images/kuro/6-3.jpg", "Art by Enoshima Iki");
			writeText("As your cum starts to spill out, kuroF twitches slightly.");
			writeSpeech("kuro","","<i><b>N-No...</b></i>");
			writeText("She reaches down, her body still hypnotically relaxed as she limply presses her hand against her gaping pussy.");
			writeText("As satisfying as this was, leaving her like this would cause a bit of a problem.");
			writeText("And, as everyone knows, the solution to every problem is hypnosis. No exceptions.");
			writeText("You lean forward, smiling a bit.");
			writeSpeech("player","","kuroF. I'm going to clean myself off and leave. I'm going to close the door behind me, and you know what'll happen?");
			writeText("She lets out a desperate moan, barely able to focus on you.");
			writeSpeech("player","","When you hear me close that door, you're going to <i><b>cum.</b></i> Every orgasm you <i>would</i> have had will hit you all at once when you hear me shut that door.");
			writeText("You stand up, stretching out a bit.");
			writeText("Purposefully taking your time, you use her shower to rinse the sex and sweat off, slowly getting your clothes back on without ever shutting a door.");
			writeText("When you finally do leave, you shut the door behind you with a loud <i><b>*BANG*</b></i>.");
			writeText("There's the sharp intake of breath behind the door, ragged panting a second later, and the shifting sounds of her sheets as she writhes across them.");
			writeSpeech("player","","...Would've taken her for a screamer, but this is fine.");
			writeText("Just for fun, you also slam the front door loud enough to be heard on your way out, casually striding down the street and wondering how she'll be feeling tomorrow.");
			if(data.player.location != "gallery"){
				data.player.location = "vintageStreet";
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "kuro5" : {//cuck-route, event 1 - NOT WRITTEN YET
			writeSpecial("Dunno how you viewed this scene, but it's for an unwritten route where kuroF has sex with a bunch of other guys. If you see this in the game, tell CryptoGreek in the Discord, because that means something in the code is Hella fucky.")
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "kuro6" : {
			if(data.player.location == 'gallery'){
				writeText("There are three versions of this scene, all of which are fairly similar, but which all have slightly different tones and dialogue.");
				writeText("Pent-Up, which plays if the player hypnotized kuroF into being unable to cum for the entire shopping trip.");
				writeText("Disciplined, which plays if the player sent a large group of texts to kuroF during the shopping trip in order to discipline her.");
				writeText("Casual, which plays if neither of the above occurred.");
				writeFunction("writeEncounter('kuroPentUp')", "Pent-Up");
				writeFunction("writeEncounter('kuroDisciplined')", "Disciplined");
				writeFunction("writeEncounter('kuroCasual')", "Casual");
				break;
			}
			else{
				passTime();
				if(checkFlag('kuro','Pentup')){
					passTime();
					writeEncounter('kuroPentUp');
				}
				else if(checkFlag('kuro','Disciplined')){
					passTime();
					writeEncounter('kuroDisciplined');
				}
				else{
					writeEncounter('kuroCasual');
				}
				writeFunction("changeLocation(data.player.location)", "Finish");
				break;
			}
			writeSpecial("This text shouldn't appear. Error in kuro6: Event Bypass")
			writeFunction("changeLocation(data.player.location)", "Go Back");
			break;
		}
		case "kuro7" : {
			if(data.player.location != 'gallery'){
				passTime();
				writeSpeech("player","","Let's take this to my place for a blowjob.");
				writeText("kuroF grins.");
				writeSpeech("kuro","","Perfect~!");
				writeText("...");
			}
			writeText("As the door behind you shuts, kuroF already has a finger ready to pull you by your "+(data.player.gender=="man" ? "belt" : "skirt")+".");
			writeText("Not that it stays on for very long as she presses her chest against yours with a grin, her hands deftly "+(data.player.gender=="man" ? "sliding your pants down your legs" : "loosening your skirt and pulling it down")+".");
			writeSpeech("kuro","","Mm, someone feels excited~");
			writeText("Sliding down your underwear too, her breathing hitches slightly as your cock springs out, making her grin widely.");
			writeSpeech("kuro","","Beautiful as always, hun~ You take a seat, and I'll get right to <i>servicing you~</i>");
			writeText("Kneeling down in front of you, she grins up at you from beside your cock.");
			writeBig("images/kuro/5-1.jpg","Art by Enoshima Iki");
			writeText("With a wink and a smile, she brings her mouth down around your head, teasing at it gently as her tongue dances around the tip.");
			writeText("Bobbing down, she moans deeply as her hand strokes you, enjoying every moment of blowing you.");
			writeText("Going deeper and moving faster, her tongue starts rubbing up against your glans more and more, making you groan in pleasure.");
			writeText("Slowly pulling her head all the way up, she barely leaves any cock in her mouth as she swirls her tongue around the head.");
			writeBig("images/kuro/9-1.jpg","Art by Enoshima Iki");
			writeText("Raising her head a bit, she grins as she strokes you.");
			writeSpeech("kuro","","Now, for the fun part~");
			writeText("Lining it up, she places her hands on your hips and moves down fast, taking you right to the throat barrier...");
			writeSpeech("kuro","","<i>Glrk~!</i>");
			writeText("...and now past it.");
			writeText("Her tight, wet mouth and throat squeeze around you as she bobs up and down, the sloppy sounds of her mouth getting fucked filling the room.");
			writeText("She takes every inch almost hungrily, locking eyes with you and relishing every sound of pleasure you make.");
			writeText("Given how one of her hands seems to be between her legs, she's even getting off on taking you into her mouth.");
			writeText("Again and again, she takes you deep, bringing you closer and closer to the edge...");
			writeText("Reaching forward, you grab the back of her head and, for a moment, pause.");
			writeText("She gives a slight nod up at you, you grasp her hair in your fist and <b>pull.</b>");
			writeSpeech("kuro","","<i><b>MMF~!</b></i>");
			writeText("Bouncing her forward and back, you let out a throaty groan as you rapidly throatfuck her, using her mouth like a cocksleeve.");
			writeText("The rapid, controlled rate is what finally puts you over, your cum spurting into her mouth before you pull out a bit.");
			writeBig("images/kuro/9-2.jpg","Art by Enoshima Iki");
			writeText("Most of your jizz spills down onto you, but some of it ends up on her face.");
			writeText("Of course, she barely takes a moment to bring her mouth down to your cock, her tongue lapping up every bit with a small smirk.");
			writeText("When she finishes, she swallows it all.");
			writeSpeech("kuro","","All clean~");
			if(data.player.location != 'gallery')
				writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuro8" : {
			if(data.player.location != 'gallery'){
				passTime();
				writeSpeech("player","","Do you happen to have a swimsuit by chance?");
				writeText("kuroF's face widens into a grin.");
				writeSpeech("kuro","","Hun, I have just the thing.");
				writeText("...");
			}
			writeText("kuroF rushes ahead to her room to change while you lock the entrance. You're barely halfway to her before you see her shirt fly out the open door.");
			writeText("A moment later, she steps out with her hands on her hips.");
			writeSpeech("kuro","","So, how does it look?");
			writeBig("images/kuro/7-1.jpg","Art by Enoshima Iki");
			writeSpeech("player","","You look incredible.");
			writeText("Her smile widens a bit.");
			writeSpeech("kuro","","Thanks. But I didn't put this on just to be looked at~");
			writeText("Grabbing you by the hand, she pulls you into her bedroom and towards the bed.");
			writeText("When you move to take off your shirt, she deftly undoes your "+(data.player.gender=="man" ? "belt" : "skirt")+" and lets "+(data.player.gender=="man" ? "your pants" : "it")+" drop to the ground.");
			writeText("Stripped down, you grab kuroF by the waist and pull her down with you as she lets out a satisfied hum, your hands moving up her body to her shoulders.");
			writeSpeech("kuro","","Hah, we're off to a good start, aren't we~?");
			writeText("She looks down a bit, your cock standing at full mast between her thighs now.");
			writeBig("images/kuro/7-3.jpg","Art by Enoshima Iki");
			writeSpeech("kuro","","How about we try this?");
			writeText("Bringing her legs together, you feel her thighs squeeze around your shaft, the two of them just enough to completely cover cock from base to tip.");
			writeText("You can feel her roll her hips a bit, basically jerking you off with her thighs as you begin to thrust your own hips a bit.");
			writeText("It isn't much longer than a minute before your pre has gotten her thighs all slick, her thighs moving carefully to stroke you now.");
			writeText("But this isn't really the main course, and both of you know it...");
			writeText("Reaching down, kuroF slides her bikini bottoms to the side before bringing her hands back up to her chest, toying with her breasts a bit as you feel your cock rub against her slit.");
			writeText("Given that you can't see down there right now, it takes a bit of careful aiming and rubbing, but after kuroF spreads her legs again, and after a few seconds of prodding...");
			writeBig("images/kuro/7-4.jpg","Art by Enoshima Iki");
			writeSpeech("kuro","","Ahn~!");
			writeText("You pull her body tight against yours as you roll your hips forward, fucking her as she arches her back.");
			writeText("Your hands move down to her chest, caressing them over the bikini top and pressing down around her areola.");
			writeSpeech("kuro","","Yes...! Fuck me harder~!");
			writeText("Sawing in and out of her, you keep fucking her, her hot, wet pussy squeezing around your shaft as she rolls her hips back against you.");
			writeText("Your hands roam across her body as the sound of you stirring up her cunt fills the room, her moaning getting louder.");
			writeText("You lose track of how long you keep pistoning in and out of her, focusing on the pleasure of the moment until you feel yourself start to get close.");
			writeSpeech("player","","kuroF, I'm...!");
			writeSpeech("kuro","","I-Inside...~!");
			writeText("Squeezing her own tits sharply, you can feel her start to squirm on top of you, reaching the edge herself.");
			writeText("Putting your energy into the last thrusts, you focus on her cunt as you start to cum.");
			writeBig("images/kuro/7-5.jpg","Art by Enoshima Iki");
			writeText("kuroF lets out a throaty moan through her teeth, her body quivering on top of yours as she cums, the sensation of being pumped full of hot, sticky cum finishing her off.");
			writeText("Both you and kuroF are breathing a little heavily, relaxing a bit in that position, until she turns her head a bit.");
			writeSpeech("kuro","","I'm gonna keep this lil' outfit ready for next time, hun~...");
			if(data.player.location != 'gallery')
				writeFunction("changeLocation(data.player.location)", "Finish");
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
	//NEUTRAL ROUTE TEXTS:
	{index: "kuroPhone1", trust: 1,},
	{index: "kuroPhone1", trust: 2,},
	{index: "kuroPhone2", trust: 20,},
	{index: "kuroPhone3", trust: 22,},
	{index: "kuroPhone4", trust: 24,},
	{index: "kuroPhone5", trust: 25,},
	//PRIMARY ROUTE TEXTS:
	{index: "kuroPhone7", trust: 63,},
	{index: "kuroPhone8", trust: 64,},
	{index: "kuroPhone9", trust: 65,},
	{index: "kuroPhone10", requirements:"?trust kuro 70; ?flag kuro Pentup;"},
	{index: "kuroPhone11", requirements:"?trust kuro 70; ?flag kuro Disciplined;"},
	{index: "kuroPhone12", requirements:"?trust kuro 70; !flag kuro Disciplined; !flag kuro Pentup;"},
	{index: "kuroPhone13", requirements:"?trust kuro 73; !flag kuro Disciplined; !flag kuro Pentup;"},
	{index: "kuroPhone14", requirements:"?trust kuro 100;"},
	{index: "kuroPhone15", requirements:"?trust kuro 101;"},
	{index: "kuroReward1", requirements:"?trust kuro 110;"},
	//SECONDARY ROUTE TEXTS:
	{index: "kuroPhone6", trust: 26,},
	{index: "kuroReward2", trust: 40,},
	//NEUTRAL TEXTS
	{index: "kuroPhoneTemp", trust: -1,},
	]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	var nikkiInitial = "";
	for(var i = 0; i < data.story.length; i++)
		if(data.story[i].index == 'nikki')
			nikkiInitial = data.story[i].fName.charAt(0);
		switch (name) {
			case "kuroPhone1" : {
				writePhoneSpeech("kuro","","Heyhey~! Got your number from the principle");
				if(checkTrust('kuro') == 1){
					writePhoneSpeech("kuro","","She seemed way cool about it, which kinda makes sense (no offense)");
					writePhoneSpeech("kuro","","Guess you cum highly rec'd huh?");
					writePhoneSpeech("kuro","","Hope your more interesting than she makes you sound tho, lol!");
					writePhoneChoices("I'm good at my job","I'd say I'm interesting");
					break;
				}
				else{
					writePhoneSpeech("kuro","","She seemed way cool about it");
					writePhoneSpeech("kuro","","TOTALLY wasnt expecting that");
					writePhoneSpeech("kuro","","Guess you cum highly rec'd huh?");
					writePhoneSpeech("kuro","","Hope your more interesting than she makes you sound tho");
					writePhoneSpeech("kuro","","If you're free cum up to the roof sometime!");
					writePhoneChoices("My office is more private","Look forward to it");
					break;
				}
			}
			case "kuroPhone1A" : {
				if(checkTrust('kuro') == 1){
					if(checkTrust('kuro') < 3){
						setTrust('kuro', 3);
					}
					writePhoneSpeech("player","","I'm good at counseling, and it sounds like she knows it.");
					writePhoneSpeech("kuro","","I'll try not to hold it against you");
					writePhoneSpeech("kuro","","Kidding~! See you on the roof~!");
					break;
				}
				else{
					if(checkTrust('kuro') < 3){
						setTrust('kuro', 3);
					}
					writePhoneSpeech("player","","Why not meet up at my office? It's a bit more private than the roof.");
					writePhoneSpeech("kuro","","Lesson num.1: girls like it WAY more when you cum to them");
					writePhoneSpeech("kuro","","Maybe next time I'll cum when you call for me? lol");
					break;
				}
			}
			case "kuroPhone1B" : {
				if(checkTrust('kuro') == 1){
					if(checkTrust('kuro') < 3){
						setTrust('kuro', 3);
					}
					writePhoneSpeech("player","","Oh, I'd say that I'm pretty interesting.");
					writePhoneSpeech("kuro","","Mm is that so?");
					writePhoneSpeech("kuro","","Im looking forward to how you prove it~!");
					break;
				}
				else{
					if(checkTrust('kuro') < 3){
						setTrust('kuro', 3);
					}
					writePhoneSpeech("player","","Look forward to it.");
					writePhoneSpeech("kuro","","Straight to the point");
					writePhoneSpeech("kuro","","I like it");
					writePhoneSpeech("kuro","","Seeya there~!");
					break;
				}
			}
			case "kuroPhone2" : {
				if(checkTrust('kuro') < 21){
					setTrust('kuro', 21);
				}
				writePhoneSpeech("kuro","","Gmorning playerMister counciler!! Howya doin?");
				writePhoneChoices("Good morning to you too","Morning kuroF","What's the hizzity-hizzaps, kuroF-dawg?");
				break;
			}
			case "kuroPhone2A" : {
				writePhoneSpeech("player","","Good morning to you too. I'm doing well - how are you?");
				writePhoneSpeech("kuro","","Lol that's wayy too formal silly!!!");
				writePhoneSpeech("kuro","","Hope your having a good day... and that maybe i can make it better~");
				writePhoneSpeech("kuro","","Maybe come up to the roof later? (.^_~.)");
				writePhoneSpeech("kuro","","I'll be waiting hun!");
				break;
			}
			case "kuroPhone2B" : {
				writePhoneSpeech("player","","Morning kuroF. Pretty good, you?");
				writePhoneSpeech("kuro","","Pretty good pretty good! could do with a little more fun tho >(^*^)>");
				writePhoneSpeech("kuro","","Maybe with you?");
				writePhoneSpeech("kuro","","Thats only if you come up to the roof later tho! .(^-^).");
				writePhoneSpeech("kuro","","Ill be waiting~");
				break;
			}
			case "kuroPhone2C" : {
				if(!checkFlag('kuro','Radicool'))
					addFlag('kuro','Radicool');
				writePhoneSpeech("player","","What's the hizzity-hizzaps, kuroF-dawg?");
				writePhoneSpeech("kuro","","...");
				writePhoneSpeech("kuro","","Honey...");
				writePhoneSpeech("kuro","","No.");
				writePhoneSpeech("kuro","","Just...");
				writePhoneSpeech("kuro","","No.");
				writePhoneSpeech("kuro","","We can still meet up.");
				writePhoneSpeech("kuro","","Just please Don't.");
				break;
			}
			case "kuroPhone3" : {
				if(checkTrust('kuro') < 23){
					setTrust('kuro', 23);
				}
				writePhoneSpeech("kuro","","Heyhey~! Wanna see something cool?");
				writePhoneChoices("Sure","Nah");
				break;
			}
			case "kuroPhone3A" : {
				writePhoneSpeech("player","","Sure. What is it?");
				writePhoneImage("images/kuro/3-1.jpg", "FromBehind, Art by Enoshima Iki");
				writePhoneSpeech("kuro","","Had a friend over last night and took some pics~!");
				writePhoneSpeech("kuro","","You like?");
				writePhoneChoices("Beautiful","Not bad, but messy","What friend?");
				break;
			}
			case "kuroPhone3B" : {
				writePhoneSpeech("player","","Nah.");
				writePhoneSpeech("kuro","","Lol your supposed to say yeah!");
				writePhoneSpeech("kuro","","Maybe shoulda said something sexy tho");
				writePhoneSpeech("kuro","","Maybe that would make you go yes maam");
				writePhoneSpeech("kuro","","Here");
				writePhoneImage("images/kuro/3-1.jpg", "FromBehind, Art by Enoshima Iki");
				writePhoneSpeech("kuro","","Had a friend over last night and took some pics~!");
				writePhoneSpeech("kuro","","You like?");
				writePhoneChoices("Beautiful","Not bad, but messy","What friend?");
				break;
			}
			case "kuroPhone3AA" : {
				writePhoneSpeech("player","","You look incredible.");
				writePhoneSpeech("kuro","","Flatterer!!! Youll make me blush!!!");
				writePhoneSpeech("kuro","","Hope you enjoy the pic (and enjoy yourself to it too)");
				writePhoneSpeech("kuro","","V(^-')v");
				break;
			}
			case "kuroPhone3AB" : {
				writePhoneSpeech("player","","Not a bad angle, but your bed's a bit messy.");
				writePhoneSpeech("kuro","","A cute girl sends you a pic of their ass and you comment on their bed? smh");
				writePhoneSpeech("kuro","","Still, the dense ones can be cute too");
				writePhoneSpeech("kuro","","Check me out on the roof and Ill show you how your supposed to act! lol");
				break;
			}
			case "kuroPhone3AC" : {
				writePhoneSpeech("player","","Who was the friend?");
				writePhoneSpeech("kuro","","Ooh, getting jealous? Dont worry, its not some other guy");
				writePhoneSpeech("kuro","","A girlfriend was SUPER interested in what she heard, so she came over");
				writePhoneSpeech("kuro","","Besides, your my only client for now anyway");
				writePhoneSpeech("kuro","","Feel privileged!");
				writePhoneSpeech("kuro","","Ooh, gtg she's calling now, sry");
				break;
			}
			case "kuroPhone3BA" : {
				writePhoneSpeech("player","","You look incredible.");
				writePhoneSpeech("kuro","","Flatterer!!! Youll make me blush!!!");
				writePhoneSpeech("kuro","","Hope you enjoy the pic (and enjoy yourself to it too)");
				writePhoneSpeech("kuro","","V(^-')v");
				break;
			}
			case "kuroPhone3BB" : {
				writePhoneSpeech("player","","Not a bad angle, but your bed's a bit messy.");
				writePhoneSpeech("kuro","","A cute girl sends you a pic of their ass and you comment on their bed? smh");
				writePhoneSpeech("kuro","","Still, the dense ones can be cute too");
				writePhoneSpeech("kuro","","Check me out on the roof and Ill show you how your supposed to act! lol");
				break;
			}
			case "kuroPhone3BC" : {
				writePhoneSpeech("player","","Who was the friend?");
				writePhoneSpeech("kuro","","Ooh, getting jealous? Dont worry, its not some other guy");
				writePhoneSpeech("kuro","","A girlfriend was SUPER interested in what she heard, so she came over");
				writePhoneSpeech("kuro","","Besides, your my only client for now anyway");
				writePhoneSpeech("kuro","","Feel privileged!");
				writePhoneSpeech("kuro","","Ooh, gtg she's calling, sry");
				break;
			}
			case "kuroPhone4" : {
				if(checkTrust('kuro') < 25){
					setTrust('kuro', 25);
				}
				writePhoneSpeech("kuro","","Hi hi~! Talked to my phone-buddy about that hj i gave ya");
				writePhoneSpeech("kuro","","You wouldnt BELIEVE how turned on she was!!!");
				writePhoneSpeech("kuro","","You had her fucking herself like CRAZY");
				writePhoneSpeech("kuro","","Im starting to think NOT introducing you guys would be too cruel!");
				writePhoneSpeech("kuro","","What do you think?");
				writePhoneChoices("I'm satisfied with you","I'd love to meet her");
				break;
			}
			case "kuroPhone4A" : {
				writePhoneSpeech("kuro","","Well arent you the perfect flatterer?");
				writePhoneSpeech("kuro","","If you go saying stuff like that ill get too turned on to stay at school all day lol");
				writePhoneSpeech("kuro","","Still gotta look out for a sister tho, so here (~>^.^)~>");
				writePhoneImage("images/kuro/nikki.jpg", "FriendAssUp, Art by Enoshima Iki");
				writePhoneSpeech("kuro","","Even if you don't go spurting on your phone screen shell cum like CRAZY knowing some dude shes never met might be jerking it to her");
				writePhoneSpeech("kuro","","The way she talked about bumping into people around campus with no idea if they blasted rope to her ass got ME crazy turned on");
				writePhoneSpeech("kuro","","Maybe youll see her around the university if you ever decide one sexy bitch isnt enough for ya~");
				break;
			}
			case "kuroPhone4B" : {
				writePhoneSpeech("kuro","","Oof, shes gonna get so turned on hearing that");
				writePhoneSpeech("kuro","","here");
				writePhoneImage("images/kuro/nikki.jpg", "FriendAssUp, Art by Enoshima Iki");
				writePhoneSpeech("kuro","","She wanted you to have a pic of her, she said shes gonna cum like CRAZY knowing some guy shes never met might be jerking it to her");
				writePhoneSpeech("kuro","","She totally went on about not knowing which guy at school has been jerking it to a pic of her ass");
				writePhoneSpeech("kuro","","If you see her around the university you could totally whisper that you enjoyed the pic");
				writePhoneSpeech("kuro","","I bet that slut would totally cum on the spot~!");
				writePhoneSpeech("kuro","","Fuck im runnign late gtg");
				break;
			}
			case "kuroPhone5" : {
				writePhoneSpeech("kuro","","Heyhey~! Feel free to send me that pic you mentioned whenevs");
				if(data.player.hacking > 0){
					writePhoneChoices("I'm sending it now");
				}
				break;
			}
			case "kuroPhone5A" : {
				writePhoneSpeech("player","","I'm sending it now; make sure you're alone when you look at it.");
				writePhoneSpeech("kuro","","Ooh, is it kinky? Can't wait~!");
				writePhoneImage("images/kuro/hypno.gif","Hypnosis");
				writePhoneSpeech("player","","Did it go through?");
				writePhoneSpeech("kuro","","Yes");
				writePhoneSpeech("player","","Okay. Can you tell me what it is?");
				writePhoneSpeech("kuro","","No");
				writePhoneSpeech("player","","Huh. This might be working better than expected.");
				writePhoneSpeech("player","","Alright, let's test.");
				writePhoneChoices("Send me a lewd pic","Tell me an embarrassing secret","Give some student a blowjob");
				break;
			}
			case "kuroPhone5AA" : {
				if(checkTrust('kuro') < 60){
					setTrust('kuro',60);
				}
				writePhoneSpeech("player","","Send me a picture of yourself in something lewd.");
				writePhoneImage("images/kuro/phone5a.jpg","SpreadEm, Art by Enoshima Iki");
				writePhoneSpeech("player","","That was really fast.");
				writePhoneSpeech("kuro","","Had it on my phone. Posted online a while ago.");
				writePhoneSpeech("player","","Makes sense. It looks like orders work over the phone, so here's a new set:");
				writePhoneSpeech("player","","First. You have to listen to what I tell you in-person, and being around me will turn you on.");
				writePhoneSpeech("kuro","","Yes playerSir.");
				writePhoneSpeech("player","","Second. You'll take your duties as a student a bit more seriously. I'm supposed to be counseling you, after all.");
				writePhoneSpeech("kuro","","Yes playerSir.");
				writePhoneSpeech("player","","Third. You will continue to act the same as you always do unless it would conflict with other orders.");
				writePhoneSpeech("kuro","","Kk, should be pretty easy");
				writePhoneSpeech("player","","Finally, fourth. You will think the text was some outdated meme. You will delete these texts from your log and forget this conversation, but still follow your orders.");
				writePhoneSpeech("player","","When you wake up tomorrow, everything will be exactly the same, <i>except</i> that you will follow your orders exactly. Understood?");
				if(data.player.gender == "man")
					writePhoneSpeech("kuro","","Yeah yeah, I got it. I'll be up on the roof like usual, Mr. Cousnilor!");
				else
					writePhoneSpeech("kuro","","Yeah yeah, I got it. I'll be up on the roof like usual, Ms. Cousnilor!");
				writePhoneSpeech("kuro","","*councilor, I mean");
				writePhoneSpeech("player","","Counselor, actually.");
				writePhoneSpeech("kuro","","With an s? Serious?");
				writePhoneSpeech("kuro","","Whatevs, u know what I mean. Later hun~! (^<^)~/");
				break;
			}
			case "kuroPhone5AB" : {
				if(checkTrust('kuro') < 61){
					setTrust('kuro',61);
				}
				writePhoneSpeech("player","","Tell me something embarrassing that you normally wouldn't.");
				writePhoneSpeech("kuro","","A few years ago, me and some friends were playing Truth or Dare. Me and my best friend were dared to player Seven Minutes in Heaven.");
				writePhoneSpeech("kuro","","When we were done, I told everyone I took the lead and made out with her full-French style, but the truth is that I felt super embarrassed at first.");
				writePhoneSpeech("kuro","","My friend took the lead by fingering me and muffling my moans with her mouth and having me suck on her tongue. I came in the first few minutes from the way she kept teasing me all over.");
				writePhoneSpeech("kuro","","Whenever I think about the taste of her lips and the way her tongue moved around my mouth, I get crazy turned on.");
				writePhoneSpeech("kuro","","I've had an oral fixation ever since, which is the reason I'm always sucking on a lollipop. If my mouth's empty, I get distracted thinking about that night.");
				writePhoneSpeech("player","","Have you ever told anyone else that?");
				writePhoneSpeech("kuro","","No. Not even her. It's too embarassing to tell a girl that you have to always be sucking on something to not get distracted by her tongue.");
				writePhoneSpeech("player","","Makes sense. Sexy stories aside, now that we're finished testing that out, it's time to give you some orders.");
				writePhoneSpeech("player","","First. You have to listen to what I tell you in-person, and being around me will turn you on.");
				writePhoneSpeech("kuro","","Yes playerSir.");
				writePhoneSpeech("player","","Second. You'll take your duties as a student a bit more seriously. I'm supposed to be counseling you, after all.");
				writePhoneSpeech("kuro","","Yes playerSir.");
				writePhoneSpeech("player","","Third. You will continue to act the same as you always do unless it would conflict with other orders.");
				writePhoneSpeech("kuro","","Kk, should be pretty easy");
				writePhoneSpeech("player","","Finally, fourth. You will think the text was some outdated meme. You will delete these texts from your log. You will forget this conversation, but still follow your orders.");
				writePhoneSpeech("player","","When you wake up tomorrow, everything will be exactly the same, <i>except</i> that you will follow your orders exactly. Understood?");
				if(data.player.gender == "man")
					writePhoneSpeech("kuro","","Yeah yeah, I got it. I'll be up on the roof like usual, Mr. Coucnilor!");
				else
					writePhoneSpeech("kuro","","Yeah yeah, I got it. I'll be up on the roof like usual, Ms. Coucnilor!");
				writePhoneSpeech("kuro","","*councilor, I mean");
				writePhoneSpeech("player","","Counselor, actually.");
				writePhoneSpeech("kuro","","With an s? Serious?");
				writePhoneSpeech("kuro","","Whatevs, u know what I mean. Later hun~! (^<^)/");
				break;
			}
			case "kuroPhone5AC" : {
				if(checkTrust('kuro') < 26){
					setTrust('kuro',26);
				}
				writePhoneSpeech("player","","Might as well go all out at the start.");
				writePhoneSpeech("player","","I want you to find a student you wouldn't normally fuck, and give him a blowjob. Send proof when you're done.");
				writePhoneSpeech("kuro","","K");
				writePhoneSpeech("player","","Actually, wait. Don't want you talking about this text or the hypno, so here's some ground rules real quick:");
				writePhoneSpeech("player","","First. You have to listen to what I tell you in-person, and being around me will turn you on.");
				writePhoneSpeech("kuro","","Yes playerSir.");
				writePhoneSpeech("player","","Second. You'll take your duties as a student a bit more seriously. I'm supposed to be counseling you, after all.");
				writePhoneSpeech("kuro","","Yes playerSir.");
				writePhoneSpeech("player","","Third. You will continue to act the same as you always do unless it would conflict with other orders.");
				writePhoneSpeech("kuro","","Kk, should be pretty easy");
				writePhoneSpeech("player","","Finally, fourth. You will think the text was some outdated meme. You will delete these texts from your log. You will forget this conversation, but still follow your orders.");
				writePhoneSpeech("player","","When you wake up tomorrow, everything will be exactly the same, <i>except</i> that you will follow your orders exactly. Understood?");
				writePhoneSpeech("kuro","","Totes~! I won't be on the roof tomorrow but I'll make sure to send pics when I find a guy, so look forward to them!");
				break;
			}
			case "kuroPhone6" : {
				if(checkTrust('kuro') < 27){
					setTrust('kuro',27);
				}
				writePhoneSpeech("kuro","","Guess who had a pretty fun night?");
				writePhoneImage("images/kuro/phone5c.jpg","CuckBlowies, Art by Enoshima Iki");
				writePhoneSpeech("kuro","","I wanted him to catch the money-shot, but he popped <i>crazy</i> fast and missed it! Would've been a total disappointment, but his load was at least pretty big.");
				writePhoneSpeech("kuro","","Milked him onto the floor, tho. Way easier to clean then my hair. Kinda expected him to give up there, but I talked him up enough to get him to <i>swab my throat</i> a little.");
				writePhoneSpeech("kuro","","Still not the kinda guy I'd go for, tho. No endurance! One minute thrusting in my throat, and he's exhausted! Two loads in, and he's totally spent. Didn't even get me off!");
				writePhoneSpeech("player","","Sounds like you're pretty pent up.");
				if(data.player.gender == "man")
					writePhoneSpeech("kuro","","Fuck yeah I am! Ugh! Got any suggestions there Mr Counciler?");
				else
					writePhoneSpeech("kuro","","Fuck yeah I am! Ugh! Got any suggestions there Ms Counciler?");
				writePhoneChoices("Come to the roof today","Find someone to let some steam off on");
				break;
			}
			case "kuroPhone6A" : {
				writePhoneSpeech("player","","Come up to the roof today and I can help you out with that.");
				if(data.player.gender == "man"){
					writePhoneSpeech("kuro","","You sure about that? No offense, but you don't exactly look like the kind of guy that'll pin my ears behind my head and make me see god.");
				}
				else{
					writePhoneSpeech("kuro","","You sure about that? No offense, but you don't exactly look like the kind of gal that'll pin my ears behind my head and make me see god.");
				}
				writePhoneChoices("Appearances can be deceiving","I can hypnotize a guy");
				break;
			}
			case "kuroPhone6AA" : {
				if(checkTrust('kuro') < 62){
					setTrust('kuro',62);
				}
				writePhoneSpeech("player","","Appearances can be deceiving.");
				writePhoneSpeech("kuro","","If your that sure, then okay. I'll even make this one free... IF you can handle it.");
				writePhoneSpeech("player","","See you on the roof, kuroF.");
				break;
			}
			case "kuroPhone6AB" : {
				if(checkTrust('kuro') < 40){
					setTrust('kuro',40);
				}
				writePhoneSpeech("player","","I can hypnotize someone into basically being a walking, grunting, fuck-machine.");
				writePhoneSpeech("kuro","","...really.");
				writePhoneSpeech("player","","Right, forgot that I told you to forget getting hypnotized. Delete that text, and here's an order: Believe me when I say I have a friend who will fuck the living daylights out of you.");
				writePhoneSpeech("kuro","","Sounds like a hell of a friend. Where are we meeting?");
				writePhoneSpeech("player","","I'll take him to your place.");
				writePhoneSpeech("kuro","","Ooh, do you plan on watching? That would be crazy hot.");
				writePhoneSpeech("player","","I'll be there to make sure that everything is working properly.");
				writePhoneSpeech("kuro","","I'm looking forward to it! See ya then, hun~!");
				break;
			}
			case "kuroPhone6B" : {
				writePhoneSpeech("player","","You can always look for another guy that's a bit better. That guy was someone you wouldn't normally fuck, yeah? So just find someone better.");
				writePhoneSpeech("kuro","","Ha. Ha. Ha. Right, cause my dick-dar can just spot the difference between a hotties a one pump chump of if a fat bastard can fuck for days.");
				writePhoneSpeech("kuro","","If it were that easy for a girl to find a sex-god to stretch her out, I'd be missing a lot more classes than I am, hun.");
				writePhoneSpeech("kuro","","Got any ideas that don't involve walking the streets and eyeing up half the town?");
				writePhoneChoices("There's always me","I can hypnotize a guy");
				break;
			}
			case "kuroPhone6BA" : {
				if(checkTrust('kuro') < 62){
					setTrust('kuro',62);
				}
				writePhoneSpeech("player","","There's always me, you know. You've seen what I've got down there.");
				writePhoneSpeech("kuro","","Hmm... That's actually a good point. Tell you what, we meet up on the roof, I take you to bed, and if you can get me off hard enough, you don't pay a cent for my services.");
				writePhoneSpeech("kuro","","That sound fair?");
				writePhoneSpeech("player","","Not fair to you, maybe.");
				writePhoneSpeech("kuro","","Confident huh? I like it. See ya on the roof.");
				break;
			}
			case "kuroPhone6BB" : {
				if(checkTrust('kuro') < 40){
					setTrust('kuro',40);
				}
				writePhoneSpeech("player","","I can hypnotize someone into basically being a walking, grunting, fuck-machine.");
				writePhoneSpeech("kuro","","...really.");
				writePhoneSpeech("player","","Right, forgot that I told you to forget getting hypnotized. Delete that text, and here's an order: Believe me when I say I have a friend who will fuck the living daylights out of you.");
				writePhoneSpeech("kuro","","Sounds like a hell of a friend. Where are we meeting?");
				writePhoneSpeech("player","","I'll take him to your place.");
				writePhoneSpeech("kuro","","Ooh, do you plan on watching? That would be crazy hot.");
				writePhoneSpeech("player","","I'll be there to make sure that everything is working properly.");
				writePhoneSpeech("kuro","","I'm looking forward to it! See ya then, hun~!");
				break;
			}
			case "kuroPhone7" : {
				writePhoneSpeech("kuro","","Jerk.");
				writePhoneSpeech("kuro","","Stupid jerk.");
				writePhoneSpeech("kuro","","Stupid jerk faced jerk.");
				writePhoneSpeech("kuro","","Your a jerk u no that?");
				writePhoneChoices("Maybe a little","Whatever for?", "You're*");
				break;
			}
			case "kuroPhone7A" : {
				writePhoneSpeech("player","","...Okay, maybe a little.");
				writePhoneSpeech("kuro","","A little? Hun I need NEW SHEETS");
				writePhoneSpeech("kuro","","My nails totally fucked them up");
				writePhoneSpeech("kuro","","Props to my main tho");
				writePhoneSpeech("kuro","","Main, fuck autocorrect");
				writePhoneSpeech("kuro","","MANI. AS IN MANICURE");
				writePhoneSpeech("kuro","","Guess Im typing with two hands now");
				writePhoneChoices("You didn't like last night?", "Two hands?");
				break;
			}
			case "kuroPhone7B" : {
				writePhoneSpeech("player","","Whatever could you mean?");
				writePhoneSpeech("kuro","","Oh I dunno maybe the HOLES IN MY SHEETS");
				writePhoneSpeech("kuro","","My nails totally fucked them up");
				writePhoneSpeech("kuro","","Props to my main tho");
				writePhoneSpeech("kuro","","Main, fuck autocorrect");
				writePhoneSpeech("kuro","","MANI. AS IN MANICURE");
				writePhoneSpeech("kuro","","Guess Im typing with two hands now");
				writePhoneChoices("You didn't like last night?", "Two hands?");
				break;
			}
			case "kuroPhone7C" : {
				writePhoneSpeech("player","","You're*");
				writePhoneSpeech("kuro","","You're life ends in 30 minutes");
				writePhoneSpeech("player","","...Excuse me?");
				writePhoneSpeech("kuro","","Ugh its a reference. Never mind");
				writePhoneSpeech("kuro","","You owe me new sheets jerk.");
				writePhoneSpeech("kuro","","I fuckin tore them last night");
				writePhoneSpeech("kuro","","At least my nails didn't break, props to my main");
				writePhoneSpeech("kuro","","Main, fuck autocorrect");
				writePhoneSpeech("kuro","","MANI. AS IN MANICURE");
				writePhoneSpeech("kuro","","Guess Im typing with two hands now");
				writePhoneChoices("You didn't like last night?", "Two hands?");
				break;
			}
			case "kuroPhone7AA" : {
				writePhoneSpeech("player","","You didn't like last night, then?");
				writePhoneSpeech("kuro","","Dont put words in my mouth hun");
				writePhoneSpeech("kuro","","Dont know how you did it, but I have never cum so hard I needed to buy new sheets");
				writePhoneSpeech("kuro","","If it weren't my bed Id be fingerfucking myself to the memory");
				writePhoneSpeech("kuro","","Which I actually was until I saw my sheets");
				writePhoneSpeech("kuro","","Jerk");
				writePhoneSpeech("kuro","","Gotta hurry if I wanna be at school on time");
				writePhoneSpeech("kuro","","Meat me on the roof");
				break;
			}
			case "kuroPhone7AB" : {
				writePhoneSpeech("player","","Why were you typing with one hand?");
				writePhoneSpeech("kuro","","Don't ask questions u no the answer to");
				writePhoneSpeech("kuro","","If it weren't MY sheets that were fucked up I wouldn't have stopped to text you");
				writePhoneSpeech("player","","That's high praise.");
				writePhoneSpeech("kuro","","You totally owe me new sheets jerk");
				writePhoneSpeech("kuro","","Gotta hurry if I wanna be at school on time");
				writePhoneSpeech("kuro","","Meat me on the roof");
				break;
			}
			case "kuroPhone7BA" : {
				writePhoneSpeech("player","","You didn't like last night, then?");
				writePhoneSpeech("kuro","","Dont put words in my mouth hun");
				writePhoneSpeech("kuro","","Dont know how you did it, but I have never cum so hard I needed to buy new sheets");
				writePhoneSpeech("kuro","","If it weren't my bed Id be fingerfucking myself to the memory");
				writePhoneSpeech("kuro","","Which I actually was until I saw my sheets");
				writePhoneSpeech("kuro","","Jerk");
				writePhoneSpeech("kuro","","Gotta hurry if I wanna be at school on time");
				writePhoneSpeech("kuro","","Meat me on the roof");
				break;
			}
			case "kuroPhone7BB" : {
				writePhoneSpeech("player","","Why were you typing with one hand?");
				writePhoneSpeech("kuro","","Don't ask questions u no the answer to");
				writePhoneSpeech("kuro","","If it weren't MY sheets that were fucked up I wouldn't have stopped to text you");
				writePhoneSpeech("player","","That's high praise.");
				writePhoneSpeech("kuro","","You totally owe me new sheets jerk");
				writePhoneSpeech("kuro","","Gotta hurry if I wanna be at school on time");
				writePhoneSpeech("kuro","","Meat me on the roof");
				break;
			}
			case "kuroPhone7CA" : {
				writePhoneSpeech("player","","You didn't like last night, then?");
				writePhoneSpeech("kuro","","Dont put words in my mouth hun");
				writePhoneSpeech("kuro","","Dont know how you did it, but I have never cum so hard I needed to buy new sheets");
				writePhoneSpeech("kuro","","If it weren't my bed Id be fingerfucking myself to the memory");
				writePhoneSpeech("kuro","","Which I actually was until I saw my sheets");
				writePhoneSpeech("kuro","","Jerk");
				writePhoneSpeech("kuro","","Gotta hurry if I wanna be at school on time");
				writePhoneSpeech("kuro","","Meat me on the roof");
				break;
			}
			case "kuroPhone7CB" : {
				writePhoneSpeech("player","","Why were you typing with one hand?");
				writePhoneSpeech("kuro","","Don't ask questions u no the answer to");
				writePhoneSpeech("kuro","","If it weren't MY sheets that were fucked up I wouldn't have stopped to text you");
				writePhoneSpeech("player","","That's high praise.");
				writePhoneSpeech("kuro","","You totally owe me new sheets jerk");
				writePhoneSpeech("kuro","","Gotta hurry if I wanna be at school on time");
				writePhoneSpeech("kuro","","Meat me on the roof");
				break;
			}
			case "kuroPhone8" : {
				if(!checkFlag('kuro','Triggered'))
					addFlag('kuro','Triggered');
				if(checkTrust('kuro')==64)
					setTrust('kuro',70);
				writePhoneSpeech("kuro","","Do u have any idea how hard it is to keep a straight face like this");
				writePhoneSpeech("kuro","","And dont play dum, u kno exactly what I mean");
				writePhoneChoices("You don't like it?", "That's kinda the point");
				break;
			}
			case "kuroPhone8A" : {
				writePhoneSpeech("player","","You don't like it?");
				writePhoneSpeech("kuro","","My mouth is for putting dicks in, not words");
				writePhoneSpeech("kuro","","It's different when I'm actually with "+nikkiInitial+" instead of on the phone");
				writePhoneSpeech("kuro","","She bought a whole bunch of stuff, and the cashier had to scan");
				writePhoneSpeech("kuro","","Every");
				writePhoneSpeech("kuro","","Single");
				writePhoneSpeech("kuro","","One");
				writePhoneChoices("Sounds like you had fun", "Do you want me to deal with it?");
				break;
			}
			case "kuroPhone8AA" : {
				writePhoneSpeech("player","","Sounds like you had fun.");
				writePhoneSpeech("kuro","","I had to ask "+nikkiInitial+" to handle paying while I went to the bathroom");
				writePhoneSpeech("kuro","","If this stall were cleaner I'd be jilling myself silly to a pic of you rn");
				writePhoneSpeech("player","","That's a pretty high compliment.");
				writePhoneSpeech("kuro","","Ahhhh she keeps texting me");
				writePhoneSpeech("kuro","","Y u gotta text in short messages ahhhh");
				writePhoneSpeech("kuro","","God and we're not even half done with shopping");
				writePhoneSpeech("kuro","","I'm totally getting you back for this hun");
				writePhoneChoices("I'm looking forward to it", "[Discipline her by sending a bunch of texts]");
				break;
			}
			case "kuroPhone8AB" : {
				writePhoneSpeech("player","","If it's too much, I can deal with it and get rid of the trigger.");
				writePhoneSpeech("kuro","","It's not too much");
				writePhoneSpeech("kuro","","It's just");
				writePhoneSpeech("kuro","","Embarassing");
				writePhoneSpeech("kuro","","Ahhhh she keeps texting me");
				writePhoneSpeech("kuro","","Y u gotta text in short messages "+nikkiInitial);
				writePhoneSpeech("kuro","","God and we're not even half done with shopping");
				writePhoneSpeech("kuro","","I'm totally getting you back for this hun");
				writePhoneChoices("I'm looking forward to it", "[Discipline her by sending a bunch of texts]");
				break;
			}
			case "kuroPhone8AAA" : {
				writePhoneSpeech("player","","Threatening me with a good time? I'm looking forward to it.");
				writePhoneSpeech("kuro","","I'll make sure to fulfill your expectations then hun");
				writePhoneSpeech("kuro","","Assuming this beeping doesn't make me cum my braind out anyway");
				writePhoneSpeech("kuro","","We totes oughta talk about that next time btw, you still haven't told me how you do it");
				writePhoneSpeech("kuro","","In the meantime tho, gotta get back to "+nikkiInitial+", but you'd better meat me tomorrow");
				writePhoneSpeech("player","","Meet*");
				writePhoneSpeech("kuro","","That wasn't a typo hun");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone8AAB" : {
				if(!checkFlag('kuro','Disciplined'))
					addFlag('kuro','Disciplined');
				writePhoneSpeech("player","","You");
				writePhoneSpeech("player","","Shouldn't");
				writePhoneSpeech("player","","Threaten");
				writePhoneSpeech("player","","Me");
				writePhoneSpeech("player","","With");
				writePhoneSpeech("player","","A");
				writePhoneSpeech("player","","Good");
				writePhoneSpeech("player","","Time");
				writePhoneSpeech("player","","kuroF");
				writePhoneSpeech("kuro","","no fair");
				writePhoneSpeech("player","","Fair");
				writePhoneSpeech("player","","Isn't");
				writePhoneSpeech("player","","As");
				writePhoneSpeech("player","","Fun.");
				writePhoneSpeech("player","","And I think we both know that, don't we kuroF?");
				writePhoneSpeech("player","","...You there?");
				writePhoneSpeech("kuro","","Just checking that I'm alone in the bathroom");
				writePhoneSpeech("kuro","","If someone heard me cumming my brains out in a public toilet, I'd die of shame");
				writePhoneSpeech("kuro","","Gotta get back to "+nikkiInitial+", but you'd better meat me tomorrow");
				writePhoneSpeech("player","","Meet*");
				writePhoneSpeech("kuro","","That wasn't a typo hun");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone8ABA" : {
				writePhoneSpeech("player","","Threatening me with a good time? I'm looking forward to it.");
				writePhoneSpeech("kuro","","I'll make sure to fulfill your expectations then hun");
				writePhoneSpeech("kuro","","Assuming this beeping doesn't make me cum my brains out anyway");
				writePhoneSpeech("kuro","","We totes oughta talk about that next time btw, you still haven't told me how you do it");
				writePhoneSpeech("kuro","","In the meantime tho, gotta get back to "+nikkiInitial+", but you'd better meat me tomorrow");
				writePhoneSpeech("player","","Meet*");
				writePhoneSpeech("kuro","","That wasn't a typo hun");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone8ABB" : {
				if(!checkFlag('kuro','Disciplined'))
					addFlag('kuro','Disciplined');
				writePhoneSpeech("player","","You");
				writePhoneSpeech("player","","Shouldn't");
				writePhoneSpeech("player","","Threaten");
				writePhoneSpeech("player","","Me");
				writePhoneSpeech("player","","With");
				writePhoneSpeech("player","","A");
				writePhoneSpeech("player","","Good");
				writePhoneSpeech("player","","Time");
				writePhoneSpeech("player","","kuroF");
				writePhoneSpeech("kuro","","no fair");
				writePhoneSpeech("player","","Fair");
				writePhoneSpeech("player","","Isn't");
				writePhoneSpeech("player","","As");
				writePhoneSpeech("player","","Fun.");
				writePhoneSpeech("player","","And I think we both know that, don't we kuroF?");
				writePhoneSpeech("player","","...You there?");
				writePhoneSpeech("kuro","","Just checking that I'm alone in the bathroom");
				writePhoneSpeech("kuro","","If someone heard me cumming my brains out in a public toilet, I'd die of shame");
				writePhoneSpeech("kuro","","Gotta get back to "+nikkiInitial+", but you'd better meat me tomorrow");
				writePhoneSpeech("player","","Meet*");
				writePhoneSpeech("kuro","","That wasn't a typo hun");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone8B" : {
				writePhoneSpeech("player","","That's kinda the point.");
				writePhoneSpeech("kuro","","Ye, but still");
				writePhoneSpeech("kuro","","I keep almost moaning whenever I hear something beep");
				writePhoneSpeech("kuro","","Like, it's totally hot, but I could swear "+nikkiInitial+"'s getting sus");
				writePhoneSpeech("kuro","","If I didn't know better, I'd say she knows and bought like 40 different things just to rile me up");
				writePhoneSpeech("kuro","","Had to ask her to handle paying while I 'use the bathroom'");
				writePhoneSpeech("kuro","","Srsly, if this stall was cleaner, I'd probably skip texting and go straight to jilling with a pic of u");
				writePhoneChoices("If it's too much, I can remove the trigger", "[Send hypno-pic and order her not to cum]");
				break;
			}
			case "kuroPhone8BA" : {
				writePhoneSpeech("player","","If it's too much, I can deal with it and get rid of the trigger.");
				writePhoneSpeech("kuro","","It's not too much");
				writePhoneSpeech("kuro","","It's just");
				writePhoneSpeech("kuro","","Embarassing");
				writePhoneSpeech("kuro","","Ahhhh she keeps texting me");
				writePhoneSpeech("kuro","","Y u gotta text in short messages "+nikkiInitial);
				writePhoneSpeech("kuro","","God and we're not even half done with shopping");
				writePhoneSpeech("kuro","","I'm totally getting you back for this hun");
				writePhoneChoices("I'm looking forward to it", "[Discipline her by sending a bunch of texts]");
				break;
			}
			case "kuroPhone8BAA" : {
				writePhoneSpeech("player","","Threatening me with a good time? I'm looking forward to it.");
				writePhoneSpeech("kuro","","I'll make sure to fulfill your expectations then hun");
				writePhoneSpeech("kuro","","Assuming this beeping doesn't make me cum my braind out anyway");
				writePhoneSpeech("kuro","","We totes oughta talk about that next time btw, you still haven't told me how you do it");
				writePhoneSpeech("kuro","","In the meantime tho, gotta get back to "+nikkiInitial+", but you'd better meat me tomorrow");
				writePhoneSpeech("player","","Meet*");
				writePhoneSpeech("kuro","","That wasn't a typo hun");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone8BAB" : {
				if(!checkFlag('kuro','Disciplined'))
					addFlag('kuro','Disciplined');
				writePhoneSpeech("player","","You");
				writePhoneSpeech("player","","Shouldn't");
				writePhoneSpeech("player","","Threaten");
				writePhoneSpeech("player","","Me");
				writePhoneSpeech("player","","With");
				writePhoneSpeech("player","","A");
				writePhoneSpeech("player","","Good");
				writePhoneSpeech("player","","Time");
				writePhoneSpeech("player","","kuroF");
				writePhoneSpeech("kuro","","no fair");
				writePhoneSpeech("player","","Fair");
				writePhoneSpeech("player","","Isn't");
				writePhoneSpeech("player","","As");
				writePhoneSpeech("player","","Fun.");
				writePhoneSpeech("player","","And I think we both know that, don't we kuroF?");
				writePhoneSpeech("player","","...You there?");
				writePhoneSpeech("kuro","","Just checking that I'm alone in the bathroom");
				writePhoneSpeech("kuro","","If someone heard me cumming my brains out in a public toilet, I'd die of shame");
				writePhoneSpeech("kuro","","Gotta get back to "+nikkiInitial+", but you'd better meat me tomorrow");
				writePhoneSpeech("player","","Meet*");
				writePhoneSpeech("kuro","","That wasn't a typo hun");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone8BB" : {
				if(!checkFlag('kuro','Pentup'))
					addFlag('kuro','Pentup');
				writePhoneSpeech("player","","Sounds like you're getting really turned on. It would be a real shame if I were to say...");
				writePhoneImage("images/kuro/hypno.gif","Hypnosis");
				writePhoneSpeech("player","","You're not allowed to cum. Until I remove this trigger, at least.");
				writePhoneSpeech("player","","You'll still get more and more turned on with every beep, but you won't be able to go over the edge.");
				writePhoneSpeech("player","","You'll be stuck edging over and over, your breathing getting heavier and more ragged, your body getting more desperate.");
				writePhoneSpeech("player","","Doesn't that sound like fun, kuroF?");
				writePhoneSpeech("kuro","","Yes");
				writePhoneSpeech("player","","Good. But remember, getting caught would be very bad, so I'll help out a little.");
				writePhoneSpeech("player","","No matter how turned on you get, you'll still act normally around other people.");
				writePhoneSpeech("player","","You won't show any abnormal signs of arousal around others, no matter how desperately you want to fill your pussy until you have a screaming orgasm.");
				writePhoneSpeech("player","","Do you understand?");
				writePhoneSpeech("kuro","","Yes");
				writePhoneSpeech("player","","Good girl. Now go back to shopping with your friend, and make sure to listen very closely to all the sounds around you while you shop.");
				writePhoneSpeech("player","","You wouldn't want to miss any beeping, would you?");
				writePhoneSpeech("kuro","","No");
				writePhoneSpeech("kuro","","But hun");
				writePhoneSpeech("kuro","","You know what your getting urself into dont you?");
				writePhoneSpeech("player","","If you do well, I'll make sure to reward you when I see you.");
				writePhoneSpeech("kuro","","Okay, but don't say I didn't warn you");
				writePhoneSpeech("kuro","","I'm going back to shopping now, but I'll see you soon");
				writePhoneSpeech("kuro","","Kisses~");
				break;
			}
			case "kuroPhone9" : {
				if(checkTrust('kuro')==65)
					setTrust('kuro',70);
				writePhoneSpeech("kuro","","Just wanted to give you a quick update!");
				writePhoneSpeech("kuro","","Me and "+nikkiInitial+" are spending the rest of the day shopping around");
				writePhoneSpeech("kuro","","We'll be finishing up sometime later today, though we'll be kicking back and watching some movies tonite");
				writePhoneSpeech("kuro","","Will be available tomorrow tho! I'm sure you missed me a whole bunch~");
				writePhoneChoices("I'm fine, you should enjoy your time with your friend","I get the feeling you're the one that misses me","It's a little boring without my cocksleeve");
				break;
			}
			case "kuroPhone9A" : {
				writePhoneSpeech("player","","I'm doing fine. You should enjoy your time with your friend though, since you mentioned that you haven't spent as much time together.");
				writePhoneSpeech("kuro","","Aww, how considerate~! But your supposed to say something like");
				writePhoneSpeech("kuro","","kuroF my life is so lonely without a tanned sex goddess draining my balls, I totes need you around my cock ASAP");
				writePhoneSpeech("kuro","","Gotta make a girl feel wanted y'know?");
				writePhoneSpeech("player","","kuroF, I want to pin you down and fuck you until neither one of us can move, but I can be patient enough to wait for you to hang out with friends between rampant sweaty fuck-fests.");
				writePhoneSpeech("kuro","","Ahhhhhhh that was perfect!! If I didn't want to make "+nikkiInitial+" wait, I'd totally end up jilling myself in bathroom stall while sexting~");
				writePhoneSpeech("kuro","","But fun times will have to wait until I see you on the roof~ Just thinking about what you did, what you can do to me and make me cum from, gets me so fcking horny");
				writePhoneSpeech("kuro","","I'm looking forward to all the fun we'll be having but I gtg, kisses~!");
				break;
			}
			case "kuroPhone9B" : {
				writePhoneSpeech("player","","I have the weirdest feeling that you're the one that misses me more.");
				writePhoneSpeech("kuro","","Lol just cuz ur rite doesn't mean you should say it!! Read the mood hun~");
				writePhoneSpeech("kuro","","I swear, closing my front door might not have made me cum, but just remembering it");
				writePhoneSpeech("kuro","","Unf. Just thinking about what you did, what you can do to me and make me cum from, gets me so fcking horny");
				writePhoneSpeech("kuro","","I can't wait to see you again");
				writePhoneSpeech("kuro","","But I'd better get back to "+nikkiInitial+" before chatting with you ends with me jilling it in a public bathroom, lol~");
				writePhoneSpeech("player","","I'll see on the roof some time, then.");
				writePhoneSpeech("kuro","","I'm looking forward to it, kisses~!");
				break;
			}
			case "kuroPhone9C" : {
				writePhoneSpeech("player","","Honestly, it's a little boring, not having a cute little cocksock shuddering on top of me.");
				writePhoneSpeech("kuro","","Ahhhhhhh stop that~!! You're gonna make it even harder to focus, hun~!");
				writePhoneSpeech("kuro","","I can't wait to see you on the roof again");
				writePhoneSpeech("kuro","","That thing you did with the doors, I totally wanna know more about it");
				writePhoneSpeech("kuro","","Closing my front door didn't make me start cumming and stuff, but just remembering it got me so fcking wet");
				writePhoneSpeech("kuro","","But I'd better get back to "+nikkiInitial+" before chatting with you ends with me jilling it in a public bathroom, lol~");
				writePhoneSpeech("player","","I'll see on the roof some time, and you'd better be ready to make me shudder hun (not that you've had trouble with it thus far~)");
				writePhoneSpeech("kuro","","I'm looking forward to it, kisses~!");
				break;
			}
			case "kuroPhone10" : {
				if(checkTrust('kuro')==70)
					setTrust('kuro',71);
				writePhoneSpeech("kuro","","You, me");
				writePhoneSpeech("kuro","","Roof");
				writePhoneSpeech("kuro","","Please");
				break;
			}
			case "kuroPhone11" : {
				if(checkTrust('kuro')==70)
					setTrust('kuro',71);
				writePhoneSpeech("kuro","","Heya! Gonna be up on the roof later today");
				writePhoneSpeech("kuro","","Looking forward to some fun if you have the time~");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone12" : {
				if(checkTrust('kuro')==70)
					setTrust('kuro',71);
				writePhoneSpeech("kuro","","Heyhey~! Got my new sheets, spent some time watching movies with "+nikkiInitial+", and my schedule just happns to be open~");
				writePhoneSpeech("kuro","","I wonder if a certain sexy counselor will be cumming by the roof today~?");
				writePhoneSpeech("kuro","","But for realzies, I'm pretty horny ngl");
				writePhoneSpeech("kuro","","We gonna fck today?");
				writePhoneChoices("I'll meet you on the roof", "I'm busy today, maybe some other time");
				break;
			}
			case "kuroPhone12A" : {
				writePhoneSpeech("player","","I'll meet you on the roof.");
				writePhoneSpeech("kuro","","Nnf, I'm looking forward to it~ Don't leave me hanging!");
				break;
			}
			case "kuroPhone12B" : {
				writePhoneSpeech("player","","Sorry, but I have some business I have to handle. Maybe some other time?");
				writePhoneSpeech("kuro","","Awww... but okay. I can be patient too! Good luck with your stuff, I'll be on the roof whenever you need a lovely pair of lips around your cock~");
				writePhoneSpeech("kuro","","And spoiler-alert: I mean both kinds of lips~");
				break;
			}
			case "kuroPhone13" : {
				if(checkTrust('kuro')==72)
					setTrust('kuro',73);
				writePhoneSpeech("kuro","","So like, not to be that chick, but you kinda dipped on me?");
				writePhoneSpeech("kuro","","I was super excited, but you didn't show");
				writePhoneSpeech("kuro","","Did something come up?");
				writePhoneChoices("Sorry, important business came up", "Sorry, I forgot you were waiting", "I wanted to tease you a bit more");
				break;
			}
			case "kuroPhone13A" : {
				writePhoneSpeech("player","","Sorry, some important stuff came up that I had to handle. You didn't wait too long, did you?");
				writePhoneSpeech("kuro","","Not that long, no.");
				writePhoneSpeech("kuro","","And yeah, I figured something might've pulled you away - it's totes fine, things happen!");
				writePhoneSpeech("kuro","","I'll be up on the roof again later today, maybe I'll see you there?");
				writePhoneSpeech("kuro","","Kisses~!");
				break;
			}
			case "kuroPhone13B" : {
				if(!checkFlag('kuro','StoodUp'))
					addFlag('kuro','StoodUp');
				writePhoneSpeech("player","","Sorry, I... kinda forgot you were waiting for me.");
				writePhoneSpeech("kuro","","Wow");
				writePhoneSpeech("kuro","","Not gonna lie, that kinda stings");
				writePhoneSpeech("kuro","","If you're not sure if you'll be coming, just say you're not sure");
				writePhoneSpeech("kuro","","I don't like being stood up");
				writePhoneSpeech("player","","Sorry about that.");
				writePhoneSpeech("kuro","","It's fine, it happens. I've had times where I forgot to respond to a text, so I get it");
				writePhoneSpeech("kuro","","I'll be on the roof again. Come by if you can?");
				break;
			}
			case "kuroPhone13C" : {
				writePhoneSpeech("player","","I wanted to tease you a bit more.");
				writePhoneSpeech("kuro","","Ah. See, I didn't really get that from the text?");
				writePhoneSpeech("kuro","","I was more disappointed than aroused by being stood up");
				writePhoneSpeech("kuro","","Denial play is fine, just be a bit more clear next time? Thanks");
				writePhoneSpeech("kuro","","I'll be up on the roof again today, come by if you have the time");
				break;
			}
			case "kuroPhone14" : {
				if(checkTrust('kuro')==100)
					setTrust('kuro',101);
				writePhoneSpeech("kuro","","I am so tired rn");
				writePhoneSpeech("kuro","","In like a good way tho");
				writePhoneSpeech("kuro","","Like holy shit");
				writePhoneSpeech("kuro","","Fuckin god damn");
				writePhoneSpeech("kuro","","Not comin to school btw");
				writePhoneSpeech("kuro","","My legs are nooooooooodles");
				writePhoneSpeech("kuro","","Delicious tan noodles");
				writePhoneSpeech("kuro","","Heh I'm a snack");
				writePhoneChoices("Rest up, see you when you can walk", "You are definitely a snack", "No I'm a snack");
				break;
			}
			case "kuroPhone14A" :{
				writePhoneSpeech("player","","Rest up - we can have more fun when you can walk and talk properly.");
				writePhoneSpeech("kuro","","Ye");
				writePhoneSpeech("kuro","","For realzies tho, gonna lay back down, catch a nap maybe");
				writePhoneSpeech("kuro","","Have a good day!");
				writePhoneSpeech("player","","You too.");
				break;
			}
			case "kuroPhone14B" :{
				writePhoneSpeech("player","","You are definitely a snack");
				writePhoneSpeech("kuro","","Yaaayyyyy thnx so much ya firlt");
				writePhoneSpeech("kuro","","Fuckinnnnn flirt");
				writePhoneSpeech("kuro","","For realzies tho, gonna lay back down, catch a nap maybe");
				writePhoneSpeech("kuro","","Have a good day!");
				writePhoneSpeech("player","","You too.");
				break;
			}
			case "kuroPhone14C" :{
				writePhoneSpeech("player","","No, I'm a snack.");
				writePhoneSpeech("kuro","","We're both snacks");
				writePhoneSpeech("kuro","","Just a couple a snacks");
				writePhoneSpeech("kuro","","Tastin each other, gettin our munch on");
				writePhoneSpeech("kuro","","The munch is sex");
				writePhoneSpeech("player","","You're very tired.");
				writePhoneSpeech("kuro","","Cuz of your dick");
				writePhoneSpeech("kuro","","For realzies tho, gonna lay back down, catch a nap maybe");
				writePhoneSpeech("kuro","","Have a good day!");
				writePhoneSpeech("player","","You too.");
				break;
			}
			case "kuroPhone15" : {
				if(checkTrust('kuro')==101)
					setTrust('kuro',105);
				writePhoneSpeech("kuro","","Guess who's walkin and talkin and leaving people gawkin, and who'll be at school today?");
				writePhoneChoices("Glad to hear you're back", "It's me");
				break;
			}
			case "kuroPhone15A" : {
				writePhoneSpeech("player","","Glad to hear you're back.");
				writePhoneSpeech("kuro","","Ha, you've fallen for my trick");
				writePhoneSpeech("kuro","","It's you! You're the one I was talking about");
				writePhoneSpeech("kuro","","Boom, you've been flattered");
				writePhoneSpeech("kuro","","What're you gonna do about it");
				writePhoneSpeech("player","","You're cute.");
				writePhoneSpeech("kuro","","Crap I can't believe I lost");
				writePhoneSpeech("kuro","","I'll be on the roof again btw~ See ya there?");
				break;
			}
			case "kuroPhone15B" : {
				writePhoneSpeech("player","","It's me.");
				writePhoneSpeech("kuro","","Ha, you've fallen for my trick");
				writePhoneSpeech("kuro","","Fuck wait");
				writePhoneSpeech("kuro","","You were supposed to say it was me");
				writePhoneSpeech("kuro","","Then I'd say it was you all along, and you'd be all embarrassed");
				writePhoneSpeech("kuro","","I want a redo");
				writePhoneSpeech("player","","No takebacksies");
				writePhoneSpeech("kuro","","Noooooo");
				writePhoneSpeech("kuro","","Jk we're both fucking cuties");
				writePhoneSpeech("kuro","","I'll be on the roof again btw, meet ya there?");
				break;
			}
			case "kuroPhone16" : {
				writePhoneSpeech("kuro","","Heyhey! Just wanted to say thanks again for helping with chem work");
				writePhoneSpeech("kuro","","It's still Hella boring, but it's at least more interesting wit u");
				break;
			}
			case "kuroPhoneTemp" : {
				writePhoneSpeech("player","","D");
				writePhoneSpeech("player","","D");
				writePhoneSpeech("player","","D");
				writePhoneSpeech("player","","D");
				writePhoneSpeech("player","","D");
				writePhoneSpeech("player","","D");
				writePhoneSpeech("player","","D");
				break;
			}
			case "kuroReward1" : {
				writePhoneImage("images/kuro/7-4.jpg", "InConclusion, Art by Enoshima Iki");
				if(galleryCheck('kuro7') && galleryCheck('kuro8')){
					writePhoneSpeech("kuro", "", "You've finished all of "+fName('kuro')+"'s content for this version, congratulations!");
				}
				else{
					writePhoneSpeech("kuro", "", "You've finished all of "+fName('kuro')+"'s content for this version, congratulations!");
					writePhoneSpeech("kuro","","If you haven't seen the new scenes on the roof with kuroF (swimsuit and blowjob), you should check them out.");
				}
				writePhoneSpeech("kuro","","Plus, there's actually three versions of the event 'Taking Her Home, and in Many Positions'. If you access it through the Gallery (in your house, on your computer), you can view any of the versions you like!");
				writePhoneSpeech("kuro","","There's also a little snippet explaining how each version is triggered - basically, the version you get depends on your choices when you reply to texts.");
				writePhoneSpeech("kuro","","Thanks for playing, and look forward to the next update!");
				break;
			}
			case "kuroReward1A" : {
				if(galleryCheck("kuroMoney2")){
					writePhoneImage("images/kuro/7-4.jpg", "InConclusion, Art by Enoshima Iki");
					writePhoneSpeech("kuro", "", "You've finished all of "+fName('kuro')+"'s content for this version, congratulations!");
				}
				else{
					hideStuff();
					writeEvent("kuroMoney1");
					writeEvent("kuroMoney2");
					document.getElementById('output').innerHTML = '';
					writeSpecial("Two new scenes have been added to kuroF kuroL's Gallery.");
					writeSpecial("These are available from the computer at your home.");
					data.player.location = "playerHouse";
					writeFunction("changeLocation(data.player.location)", "Return home");
				}
				break;
			}
			case "kuroReward2" : {
				writePhoneImage("images/kuro/CFin.jpg", "WatchOn, Art by Enoshima Iki");
				writePhoneSpeech("kuro", "", "You've finished all of the available content for "+fName('kuro')+"'s secondary route (Netorase), congratulations!");
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
					console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var requirements = checkRequirements(encounterArray[number].requirements);
					console.log(requirements);
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