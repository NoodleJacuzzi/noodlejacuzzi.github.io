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
]

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "kuro1" : {
			//meeting kuro
			writeText("As you approach to investigate, you see the a member of the student council leaving the other way.");
			writeText("The argument seems to have been resolved, but...");
			writeBig("images/kuro/profile.jpg","Art by Enoshima Iki");
			writeSpeech("kuro","","Heya~! Looks like the two of us were being a bit loud, huh? Sorry~!");
			writeText("She slides her lollipop back into her mouth with a wink, starting to walk off.");
			writeFunction("loadEncounter('kuro', 'kuro2')", "Invite "+fName('kuro')+" to your office");
			writeFunction("changeLocation(data.player.location)", "Just let her go");
			break;
		}
		case "kuro2" : {
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
			writeSpeech("kuro","","Mmm... I was starting to wonder if you were even coming.");
			writeSpeech("player","","Didn't mean to make you wait.");
			writeFunction("loadEncounter('kuro', 'kuro3a')", "Invite "+fName('kuro')+" to your office");
			writeFunction("changeLocation(data.player.location)", "Tell her she's probably late for class and leave");
			break;
		}
		//go to your office for private affairs
		case "kuro3a" : {
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
				//if she's been hypno'd, basically
				writeText("As you approach her, "+fName('kuro')+"'s flushes as she stands a bit straighter, her thighs rubbing against each other.");
				writeSpeech("kuro","","Heya *Master~! Ooh, don't tell me, you're here for another night of fun with your favorite cocksock, right?");
				writeFunction("loadEncounter('kuro', 'kuro4a')", "Have sex");
				writeFunction("writeEvent('kuro6')", "69 each other");
				//more scenes may be implemented later
				data.player.location = "roof";
				writeFunction("changeLocation(data.player.location)", "Leave her be");
				break;
			}
			break;
		}
		case "kuro4a" : {
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
			writeText("When you arrive at her house, the door's unlocked and, unlike last time, kuroF is standing there waiting for you.");
			writeText("She grins widely, fingering her lollipop as she shifts in place.");
			writeSpeech("kuro","","So, <i>stud</i>, how do you want this to go? Do you need a little help getting ready, or do you want to just <i>jump right in?</i>");
			writeFunction("writeEvent('kuroMoney1')", "Take your time");
			writeFunction("writeEvent('kuroMoney2')", "Get right to it");
			break;
		}
		case "kuro5" : {
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
			writeText("There's a tense silence for a moment... before you shrug.");
			writeSpeech("player","","I guess you could just apologize, though.");
			writeText("She nods, relaxing.");
			writeSpeech("kuro","","Sorry, hun... They're just sheets, but I guess I was just kinda frustrated. Not used to being the, uh... <i>subby one</i>, I guess.");
			writeSpeech("player","","It's fine. So... <i>Doors,</i> huh?");
			writeText("She blushes which, given how hard she's been to catch off-guard, is pretty nice.");
			writeSpeech("kuro","","Y-Yeah. I barely remember yesterday after we started fucking, but hearing you slam the door on your way out was...");
			writeText("Her whole body shudders slightly as she remembers the sound, her legs spreading slightly.");
			writeSpeech("kuro","","If I knew you fucked like that, I wouldn't have waited this long.");
			writeSpeech("kuro","","...I do need new sheets, though. I was planning on skipping class to get them, but then I started texting you, and then I shut my front door, and here we are.");
			writeText("Hm... She needs to go shopping? There probably aren't too many opportunities to trigger her, since there aren't too many traditional doors in a store...");
			writeText("Plus, you <i>could</i> remove the trigger pretty easily if you wanted, but maybe just replacing it would be fun?");
			writeFunction("writeEncounter('kuro6c')", "Remove the trigger");
			writeFunction("writeEncounter('kuro6d')", "Make her get turned on by beeping noises");
			break;
		}
		case "kuro6b" : {
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
			writeSpeech("player","","As long as you you're sorry, it's fine. Still...");
			writeText("You smirk.");
			writeSpeech("player","","<i>Doors,</i> huh?");
			writeText("She blushes which, given how hard she's been to catch off-guard, is pretty nice.");
			writeSpeech("kuro","","Y-Yeah. I barely remember yesterday after we started fucking, but hearing you slam the door on your way out was...");
			writeText("Her whole body shudders slightly as she remembers the sound, her legs spreading slightly.");
			writeSpeech("kuro","","If I knew you fucked like that, I wouldn't have waited this long.");
			writeSpeech("kuro","","...I do need new sheets, though. I was planning on skipping class to get them, but then I started texting you, and then I shut my front door, and here we are.");
			writeText("Hm... She needs to go shopping? There probably aren't too many opportunities to trigger her, since there aren't too many traditional doors in a store...");
			writeText("Plus, you <i>could</i> remove the trigger pretty easily if you wanted, but maybe just replacing it would be fun?");
			writeFunction("writeEncounter('kuro6c')", "Remove the trigger");
			writeFunction("writeEncounter('kuro6d')", "Make her get turned on by beeping noises");
			break;
		}
		case "kuro6c" : {
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
			writeFunction("changeLocation(data.player.location)", "Finish (for now)");
			break;
		}
		case "kuro6d" : {
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
			writeFunction("changeLocation(data.player.location)", "Finish (for now)");
			break;
		}
		case "kuroCasino1": {
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
			writeText("Eventually, she even stops that much, leaving you to the endless cacophany of sexual sensation that you chose.");
			writeText("The only thing you can think about anymore, the only thing you <i>want</i> to think about anymore, is the pleasure of an endless night in the casino with kuroF.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
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
	{index: "kuro4", name: "Primary-Route: Hypno-Fuck"},
//Secondary Route
	{index: "kuro5", name: "Cuck-Route: Watching and Jerking"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
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
				writeSpeech("kuro","","She's... a new counselor at school. And she's not a bad size...");
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
			writeText("Sliding her lollipop into her cheek, she runs her wet tongue across and palm and fingers, covering it in her saliva.");
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
				writeSpeech("player","","");
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
			writeText("Each time you thrust deep, angling up just enough to feel her your head rubbing against every ridge inside of her, you feel her calves get just a little bit tenser.");
			writeText("Despite that, though, she manages to keep a mostly-controlled fact the entire time, focusing on squeezing tightly around you instead.");
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
			writeText("After the last few ropes spurt into the condom, you slowly pull out with wet sound.");
			writeSpeech("player","","Looks like it. Still, it's not like I'm <i>completely</i> spent.");
			writeText("She grins, reaching over the bed and grabbing a few more condoms.");
			writeSpeech("kuro","","I was <i><b>really</b></i> hoping you'd say that.");
			writeText("...");
			writeText("You ended up spending the entire morning fucking her, but she never seemed to lose that same smug look throughout it all. The last time you went over the edge, it was imagining that face of hers contorted in pleasure.");
			writeText("Still, considering the fact that you're a hypnotist, maybe it's possible to use <i>that</i> to take her down a notch...");
			writeText("That's for another day, though. For now, a shower and back to work...");
			if(data.player.location != "gallery"){
				data.player.location = "vintageStreet";
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
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
			writeSpeech("player","","How long have you been been dripping like this?");
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
			writeSpeech("player","","That's a good question, kuroF. But how I about <i>I order you to relax.</i>");
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
			writeText("She blinks once, before looking vaugely confused.");
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
			writeText("You squeeze her breast tighter as bring your mouth to her ear.");
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
		case "kuro5" : {//hypno into mindbreak sex - NOT WRITTEN
			break;
		}
		case "kuro5a" : {//raw sex - NOT WRITTEN
			break;
		}
		case "kuro5b" : {//disinterested sex - NOT WRITTEN
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
	{index: "kuroReward1", trust: 64,},
	{index: "kuroReward1", trust: 65,},
	//SECONDARY ROUTE TEXTS:
	{index: "kuroPhone6", trust: 26,},
	{index: "kuroReward2", trust: 40,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
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
			writePhoneSpeech("kuro","","Gmorning mister counciler!! Howya doin?");
			writePhoneChoices("Good morning, Stephanie","Morning Steph","What's the hizzity-hizzaps, Steph-dawg?");
			break;
		}
		case "kuroPhone2A" : {
			writePhoneSpeech("player","","Good morning, Stephanie. I'm doing well - how are you?");
			writePhoneSpeech("kuro","","It's STEPH silly!!! it's way cuter!");
			writePhoneSpeech("kuro","","Hope your having a good day... and that maybe i can make it better~");
			writePhoneSpeech("kuro","","Maybe come up to the roof later? (.^_~.)");
			writePhoneSpeech("kuro","","I'll be waiting hun!");
			break;
		}
		case "kuroPhone2B" : {
			writePhoneSpeech("player","","Morning Steph. Pretty good, you?");
			writePhoneSpeech("kuro","","Pretty good pretty good! could do with a little more fun tho >(^*^)>");
			writePhoneSpeech("kuro","","Maybe with you?");
			writePhoneSpeech("kuro","","Thats only if you come up to the roof later tho! .(^-^).");
			writePhoneSpeech("kuro","","Ill be waiting~");
			break;
		}
		case "kuroPhone2C" : {
			writePhoneSpeech("player","","What's the hizzity-hizzaps, Steph-dawg?");
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
			writePhoneSpeech("kuro","","Yes sir.");
			writePhoneSpeech("player","","Second. You'll take your duties as a student a bit more seriously. I'm supposed to be counseling you, after all.");
			writePhoneSpeech("kuro","","Yes sir.");
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
			writePhoneSpeech("kuro","","Yes sir.");
			writePhoneSpeech("player","","Second. You'll take your duties as a student a bit more seriously. I'm supposed to be counseling you, after all.");
			writePhoneSpeech("kuro","","Yes sir.");
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
			writePhoneSpeech("kuro","","Yes sir.");
			writePhoneSpeech("player","","Second. You'll take your duties as a student a bit more seriously. I'm supposed to be counseling you, after all.");
			writePhoneSpeech("kuro","","Yes sir.");
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
		case "kuroPhoneBA" : {
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
		case "kuroReward1" : {
			writePhoneImage("images/kuro/7-4.jpg", "InConclusion, Art by Enoshima Iki");
			if(galleryCheck("kuroMoney2")){
				writePhoneSpeech("kuro", "", "You've finished all of "+fName('kuro')+"'s content for this version, congratulations!");
			}
			else{
				writePhoneSpeech("kuro","","You've reached the end of kuroF's route - congratulations!");
				writePhoneSpeech("kuro","","You missed one scene. You can view it either by asking kuroF about sex with a lot of money on-hand, or you can just unlock it by responding to this text!");
				writePhoneSpeech("kuro","","Thanks for playing~!");
				writePhoneChoices("Unlock the Gallery");
			}
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