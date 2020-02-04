var character = {index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "", color: "#7e52a3", author: "CryptoGreek", artist: "Nagi Ichi"};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "meji", 
	desc: "A very outwardly-confident young man with a crossdressing habit. Despite wanting to 'keep it a secret', he goes to some <i>very</i> crowded places when dressed-up.",
	body: "He has a slim, effeminate figure that's well-suited for crossdressing. He usually lets down his ponytail whenever he wears women's clothing.",
	clothes: "He usually wears a school uniform - the male version while at school, and a girl's uniform when around the town.",
	home: "He usually hangs out around the Class B hallway.",
	tags: "Crossdressing, Anal Orgasms, Orgasm Denial",
	artist: "Artist: Nagi Ichi",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
	{name: "Leotard", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/leotard.jpg", description: "A sports-leotard for women."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "meji1a", name: "A particularly loud student is walking down the hall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji2", name: "You spot a familiar face.", location: 'street', time: "Evening", itemReq: "", trustMin: 10, trustMax: 10, type: "tab", top: 0, left: 0, day: "both",},

	//Submissive meji
	{index: "meji3", name: "You can see meji coming down the hall with his friends.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 20, trustMax: 24, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji4", name: "It looks like meji is standing in the hallway alone, like he's waiting for something.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 25, trustMax: 25, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji5", name: "meji's leaning against the wall, adjusting his shirt a bit while he looks around.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 26, trustMax: 26, type: "tab", top: 0, left: 0, day: "both",},

	//Willful/bratty meji
	{index: "meji3", name: "You can see meji coming down the hall with his friends.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 40, trustMax: 44, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji4", name: "It looks like meji is standing in the hallway alone, like he's waiting for something.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 45, trustMax: 45, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji5", name: "meji's leaning against the wall, adjusting his shirt a bit while he looks around.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 46, trustMax: 46, type: "tab", top: 0, left: 0, day: "both",},
	
	{index: "meji6", name: "meji's standing on his own, looking through his phone and leaning on the wall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji7", name: "meji's leaning against the wall and looking through his phone.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 61, trustMax: 62, type: "tab", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "meji1a" : {
			//encountering him in the school during morning
			//call him to the office and you can get him to out himself
			writeText("Three students are having a pretty loud discussion of their 'conquests' as they walk by.");
			writeBig("images/meji/1-1.jpg", "Art by Nagi Ichi");
			writeText("You recognize the one in the middle pretty easily - one of the 'high profile cases' when it comes to needing counseling.");
			writeText(fName('meji')+ " "+lName('meji')+", a rich-kid delinquent attending university because it's what's 'expected of him'. Counseling is a hard-sell when people don't want to work for something, but given your abilities...");
			writeFunction("writeEncounter('meji1aa')", "Invite him to your office");
			writeFunction("changeLocation(data.player.location)", "Leave and let "+fName('principal')+" handle him");
			break;
		}
		case "meji1aa" : {
			setTrust('meji', 10);
			writeSpeech("player","",fName('meji')+" "+lName('meji')+"?");
			writeText("He stops, only now realizing you're here.");
			writeSpeech("meji","","Yeah. What do <i>you</i> want?");
			writeSpeech("player","","Not much, just a conversation in my office. As the new counselor, the Principal said I might want to speak to you. Any idea why?");
			writeText("His eyes narrow.");
			writeSpeech("meji","","I've got a feeling, yeah.");
			writeText("He nods to the guys beside him before nodding again to you.");
			writeSpeech("meji","","Let's make it quick.");
			writeText("...");
			writeText("You arrive in your office pretty quickly, letting " + fName('meji')+" in before shutting the door behind you.");
			writeText("He sits casually on the small bed you had set up, crossing his arms as he looks at you.");
			writeSpeech("meji","","So, how's this supposed to go down? You ask a couple of questions, I answer, you tell "+fName('principal')+" everything's fine?");
			writeSpeech("player","","...In a manner of speaking, yes. She didn't give very many details about you, so I'd like to know why you think she'd drop your name specifically.");
			writeText("That was a blatant lie, of course. His file had more than a few incidents laid out in excruciating detail... but your methods require a certain level of trust when starting out.");
			writeText("Well, that or having some seriously repressed desires, but that can be a bit of a gamble. No need to put him on the defensive just yet...");
			writeText("He scoffs, leaning back a bit.");
			writeSpeech("meji","","God, where the fuck do I <i>begin?</i> I swear, she has to have it out for me for something...");
			writeText("Off to a good start, then.");
			writeText("...");
			writeText("He ends up spending a good amount of time ranting about the principal, several instructors, and a few of the students before he finally realizes the time and leaves.");
			writeText("From the seems of things, he needed a place to just rant. Aside from that group of his, at least. He's not ready for full-hypnosis just yet, but you get the feeling he's already rather open to suggestions...");
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "meji2" : {
			writeText("Despite the fact that you could <i>swear</i> you spotted mejiF, you very quickly lose sight of him.");
			writeText("At least, until the familiar color of his hair pops up nearby. You turn quickly to look at him, just barely catching a glimpse of him before he darts off quickly.");
			writeText("You can tell he changed clothes, but it's not too clear why he's darting off towards a few of the harder-to-navigate alleys.");
			writeText("He's panicking, so he'll probably head in the opposite direction of you while using the alleys to make himself hard to follow. It wouldn't take a genius psychologist to figure out where he'll come out...");
			writeFunction("writeEncounter('meji2a')", "Go to where he's most likely to come out");
			writeFunction("changeLocation(data.player.location)", "Leave him be");
			break;
		}
		case "meji2a" : {
			writeText("Getting ahead of him isn't exactly hard, though you do find yourself breathing a bit heavily after the run. You get a minute or so to catch your breath before...");
			writeBig("images/meji/1-2.jpg", "Art by Nagi Ichi");
			writeText("He freezes in place when he spots you.");
			writeSpeech("player","","You know, I think you wouldn't do too bad as a runner, " + fName('meji') + ".");
			writeText("His hands go to his sides, clenching tightly into fists.");
			writeSpeech("meji","images/meji/meji2.jpg","...You can't tell anyone...");
			writeText("He quickly rushes over to you, grabbing you by the shirt and trying to pull you down to look him in the eyes.");
			writeSpeech("meji","images/meji/meji2.jpg","Not one single person hears about this, you got that!?");
			writeFunction("writeEncounter('meji2b')", "Agree and walk him safely to his place");
			writeFunction("writeEncounter('meji2c')", "Explain how you won't tolerate such rudeness");
			break;
		}
		case "meji2b" : {
			writeSpeech("player","","...I mean, sure. I don't really think I have a reason to tell anyone, anyway.");
			writeText("He pauses.");
			writeSpeech("meji","images/meji/meji2.jpg","...W-wait, really?");
			writeText("His grip on your shirt relaxes a bit, before he suddenly stands a bit straighter and he steps back.");
			writeSpeech("meji","images/meji/meji2.jpg","I, uh... I mean, of course you don't.");
			writeSpeech("player","","Yup. What you do for fun in your spare time is none of my business.");
			writeText("He tenses.");
			writeSpeech("meji","images/meji/meji2.jpg","W-Well, it's not like I do this a lot! It's just, sometimes, I... Uh...");
			writeSpeech("player","","How about I just walk you home?");
			writeSpeech("meji","images/meji/meji2.jpg","...Thanks.");
			writeText("Getting him to his place is pretty quick; his house looks like some old, traditional-looking place. He really is a rich kid, then.");
			writeText("All things considered, he's probably a <i>lot</i> more open to suggestion than you thought, but it might be a good idea to leave that for another day.");
			writeText("When you do get to his place, he just mumbles a quick thanks and practically sprints through the door, his face bright red.");
			writeText("Speaking to him at school again should be pretty interesting...");
			data.player.location = 'vintageStreet';
			writeFunction("changeLocation(data.player.location)", "Leave him be");
			setTrust('meji', 40);
			passTime();
			break;
		}
		case "meji2c" : {
			writeText("You take a moment to really focus on him.");
			writeText("His eyes have a clearly desperate look to them, and his hand, despite gripping tightly, is still faintly shaking.");
			writeText("Most of him is shaking, actually.");
			writeSpeech("player","","...Is that really how someone in your position should be making a request?");
			writeText("He freezes.");
			writeSpeech("player","","Hm. Seems like the principal was right about your attitude needing... <i>adjustment.</i>");
			writeSpeech("meji","images/meji/meji2.jpg","Y-You can't tell her-");
			writeSpeech("player","","I won't tell anyone anything.");
			writeText("His eyes go wide for a moment, his grip relaxing-");
			writeSpeech("player","","<i>Yet.</i>");
			writeText("You push his hand away from your chest, staring down at him as you make a show of looking him over.");
			writeSpeech("player","","If you don't want me to go sharing what I'm looking at with every student and faculty member around the university, then I have a simple little request...");
			writeText("You lean forward, dropping your voice to whisper in his ear...");
			writeSpeech("player","","You're going to ask me, <i>politely</i>, not to share your <i>crossdressing habit</i> with everyone.");
			writeSpeech("meji","images/meji/meji2.jpg","...T-That's all...?");
			writeSpeech("player","","Nobody likes a rude <i>bitch</i>, "+fName('meji')+".");
			writeText("He flinches at the word, but bows his head down a bit.");
			writeSpeech("meji","images/meji/meji2.jpg","...I'm... sorry. Please, don't tell anyone about my... <i>c-crossdressing habit</i>...");
			writeSpeech("player","","...Good enough. Go home, "+fName('meji')+". We'll talk more at school.");
			writeText("He swallows nervously, nodding once before running off quickly.");
			writeText("...All in all, it didn't exactly build <i>trust</i> between you two, but you can already tell that things are going to get <i>interesting.</i>");
			data.player.location = 'vintageStreet';
			writeFunction("changeLocation(data.player.location)", "Head home");
			setTrust('meji', 20);
			passTime();
			break;
		}
		case "meji3" : { // - NOT WRITTEN
			//it's a set of options
			//option 1, if not already done, is the fingering
			//option 2, available once the fingering is done, is fucking his ass in-uniform
			//option 3 involves getting a leotard and fucking his ass, but he doesn't orgasm
			//option 4, leotard, is netting him his first anal orgasm by grinding your cock inside him

			//This checks if the first event has been done, as the opening dialogue and available choices change depending on whether it has.
			if(galleryCheck('meji1') != true){

				//Dialogue for if you walked him home during Encounter meji2
				if(checkTrust('meji') == 40){
					writeText(fName('meji')+" sees you approaching and stops. He says something to his group before approaching you alone.");
					writeSpeech("meji","","Hey.");
					writeText("He shifts his weight, placing one hand on his hip.");
					writeSpeech("meji","","Thanks, for before. Especially the, uh... 'walking me home' part. Was there something you needed?");
				}

				//Dialogue for if you chastised him during Encounter meji2
				else if(checkTrust('meji') == 20){
					writeText(fName('meji')+" sees you approaching and pales. Muttering something to his group, he quickly approaches you.");
					writeSpeech("meji","","Y-Yo. Uh, I mean...");
					writeText("He takes a moment to breathe, before he starts looking confident again.");
					writeSpeech("meji","","Thank you, "+data.player.honorific+". For not... telling anyone.");
				}
				else{
					writeText("This is test-text. If you see this in-game, then something's fucky.");
				}

				writeFunction("writeEncounter('meji3a')", "Invite him to your office for hypnotic training");
				writeFunction("changeLocation(data.player.location)", "Leave him be for now");
				break;
			}

			else{
				//Forgive me this ugly-as-sin 'if/else'ing below.
				//Dialogue for if you walked him home during Encounter meji2
				if(checkTrust('meji') == 41){
					writeText("When he sees you, "+fName('meji')+" quickly separates from his friends and walks up to you.");
					writeText("He seems to walk a bit oddly as he approaches, and you can see a flash of something in his eyes.");
					writeSpeech("meji","","I think we, uh... need to talk about last time?");
					writeFunction("writeEncounter('meji3z')", "Take him to your office");
					writeFunction("changeLocation(data.player.location)", "Leave him be for now");
					break;
				}

				//Dialogue for if you chastised him during Encounter meji2
				else if(checkTrust('meji') == 21){
					writeText("When you approach, "+fName('meji')+" quickly separates from his friends and walks up to you.");
					writeText("His face is clearly flushed, he's walking a bit oddly, and he seems to fidget a bit with the crotch of his pants.");
					writeSpeech("meji","","Hello, "+data.player.honorific+". I wanted to speak with you, maybe in your office...?");
					writeFunction("writeEncounter('meji3z')", "Take him to your office");
					writeFunction("changeLocation(data.player.location)", "Leave him be for now");
					break;
				}
				else if(checkTrust('meji') == 22 || checkTrust('meji') == 42){
					if(data.player.hypnosis < 2){
						writeText("You can see " +fName('meji')+ " up ahead with his friends. Unfortunately, you can't really help him just yet.");
						writeText("Maybe the shopping district might have something to help? Their stock is pretty... <i>varied.</i>");
						writeFunction("changeLocation(data.player.location)", "Leave him be for now");
						break;
					}
					else{
						writeText("You can see " +fName('meji')+ " up ahead with his friends. With a better understanding of your abilities, you should be able to help him out now.");
						writeFunction("writeEvent('meji2')", "Invite him to your office");
						writeFunction("changeLocation(data.player.location)", "Leave him be for now");
						break;
					}
				}
				else{
					writeText("As he and his friends approach, you see "+fName('meji')+ " clearly perk up as he spots you.");
					writeText("He waves off his friends quickly, coming up to you and shifting nervously.");
					if(checkTrust('meji') < 40){
						writeSpeech("meji","","Is now a good time? I, uh... I still haven't been able to <i>finish</i>. I was hoping you could help...?");
					}
					else{
						writeSpeech("meji","","Hello, "+data.player.honorific+". I was wondering if now would be a good time for some <i>counseling...?</i>");
					}
					if(galleryCheck('meji2') != true){
						writeFunction("writeEvent('meji2')", "Fuck his ass");
					}
					if(checkItem('Leotard') == true){
						if(galleryCheck('meji3') != true){
							writeFunction("writeEncounter('meji3c')", "Give him the leotard");
						}
					}
					if(galleryCheck('meji3') == true && galleryCheck('meji4') != true){
						writeFunction("writeEvent('meji4')", "Ask him about last time");
					}
					else{
						if(checkItem("Leotard") == false)
							writeFunction("writeEncounter('meji3b')", "Tell him you want to see something new");
					}
				}
				writeFunction("changeLocation(data.player.location)", "Leave him be for now");
			}
			break;
		}
		case "meji3z" : {
			//This is named Zed because I messed up and forgot to account for this scene during allocation shut up
			writeText("When the two of you reach your office, you shut and lock the door just in case before turning to "+fName('meji')+".");
			writeText("It's obvious what the problem is, but...");
			writeSpeech("player","","Is something wrong?");
			writeText("He kinda flinches at that, his hands fidgeting in his lap.");
			writeSpeech("meji","","...When I was, uh... <i>under</i>, did anything happen?");
			writeSpeech("player","","Do you remember anything happening?");
			writeText("His face goes red as he pauses.");
			writeSpeech("meji","","Honestly, I'm not sure? I just remember feeling really, <i>really...</i>");
			writeText("His voice hitches for a second, but he covers it up (poorly) with a cough.");
			writeSpeech("meji","","<font size='-1'><i>...It felt really good.</i></font>");
			writeText("...Huh. Well, he's being honest, so you probably shouldn't mislead him.");
			writeSpeech("player","","And now, you can't feel any pleasure from your dick, right?");
			writeText("He sits up straighter, looking right at you with a cautious smile.");
			writeSpeech("meji","","Y-Yeah! Do you know how to fix it?");
			writeSpeech("player","","It's... not necessarily that easy.");
			writeText("He stops.");
			writeSpeech("player","","I can probably fix it, but I'd need you to be honest with me about something.");
			writeText("You think for a moment about how to phrase it, before just going with the blunt option.");
			writeSpeech("player","","Did you masturbate with your ass after losing sensation in your penis?");
			writeText("His rapidly-reddening face gives the answer immediately.");
			writeSpeech("meji","","I didn't... y'know, <i>finish</i> or anything though so it should be fine, right?");
			writeText("You just shrug.");
			writeSpeech("player","","Hypnosis can be fickle, but it can't make you do anything you don't want. If you really want sensation down there, it'll come back if you give it some time.");
			writeText("Probably. You can speed it up, of course, but it really is on him for this one.");
			writeSpeech("meji","","O-Oh. But, what do I do until then?");
			writeText("He fidgets a bit more and, on closer inspection, you can see the problem.");
			writeText("Just because he can't get off with his dick doesn't mean it can't get hard.");
			writeSpeech("player","","That's... definitely a question. Fucking your ass didn't help?");
			writeSpeech("meji","","I, uh... couldn't finish.");
			writeText("He shifts a bit, and his odd walking earlier starts making sense.");
			writeSpeech("player","","Got it. In that case, I think I have a plan, but I'm afraid it'll take some time to prepare.");
			writeText("He just nods, standing up and getting ready to leave. He seems a lot more relaxed now that he knows nothing's actually <i>wrong</i> with him.");
			writeText("...Technically, this 'problem' of his could actually be a legitimate issue for him, but altering it isn't as easy as just telling him his dick is sensitive.");
			writeText("If he's willing to fuck his ass until he can barely walk, though...");
			if(data.player.hypnosis >= 2){
				writeText("Given that your hypnosis abilities have been improving lately, you can have a nice little routine ready by tomorrow.");
				writeText("It'll take a few sessions, of course, but if he's open and willing, it'll work perfectly.");
			}
			else{
				writeText("Well, that's a thought to be had once you improve your skills a bit more. Increasing sensation is a lot more finicky than taking it away.");
				writeText("Might be a good idea to practice on someone else to improve, or find some other way to improve your hypnosis.");
			}
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Get back to work");
			raiseTrust('meji', 1);
			passTime();
			break;
		}
		case "meji3a" : { //Intro to ass training, varies depending on trust
			writeSpeech("player","","I have something important to discuss with you.");
			if(checkTrust('meji') == 40){
				writeText("He nods, waving to his friends and following you to your office.");
			}
			else{
				writeText("He nods, obediently following behind you.");
			}
			writeText("...");
			writeText("When you arrive, "+fName('meji')+" sits down on the bed, still keeping his eyes on you.");
			if(checkTrust('meji') == 40){
				writeSpeech("meji","","Does this have to do with... <i>the other night?</i>");
				writeText("He shifts uncomfortably for a moment, glancing at the door as it shuts.");
				writeText("Nodding, you tell him,");
				writeSpeech("player","","I think the other night probably wasn't the best way for us to broach the topic of your... hobby.");
				writeText("He winces, but nods.");
				writeSpeech("meji","","Sorry about that, by the way. I, uh... probably shouldn't have grabbed you like that.");
				writeSpeech("player","","It's fine. It was a stressful situation, after all. And that stress is part of the reason I brought you here. You see, I became a counselor here because my counseling methods are a bit... odd.");
				writeText("Reaching into your pocket, you pull out your pendant, his eyes widening.");
			}
			else{
				writeText("He shifts a bit, looking rather uncomfortable. He even jumps a little when the door clicks shut.");
				writeSpeech("meji","","...This is about the other night.");
				writeText("You nod, sitting down on the bed beside him.");
				writeSpeech("player","","While I think you probably could've been a little less rude about it, I do understand why you wouldn't want word to spread. And, like I said, I won't go tattling on you unless you give me a reason.");
				writeText("At that, you reach into your pocket and pull out your pendant, his eyes widening as you do.");
			}
			writeSpeech("meji","","...You can't be serious.");
			writeSpeech("player","","I am, actually. It's not quite the 'do whatever I say' trick that people think. It's really just a way to help someone relax, be a bit more open about themselves.");
			writeText("He shifts a bit, looking down at it.");
			writeSpeech("meji","","Do you mind if I...?");
			writeText("You shrug, handing it to him. He rolls it around in his hand for a few seconds, looking at it from nearly every angle.");
			writeText("It's not like it's actually anything special, but if he <i>thinks</i> it is...");
			writeSpeech("meji","","...I'm not saying I actually believe in this, but I do owe you one. So, how does this work?");
			writeText("You smile, gently taking it back from him.");
			writeSpeech("player","","The details of it can be pretty complicated to explain, but it basically boils down to keeping an eye on the pendant while you listen closely to my voice. Of course, since you'll want to be as comfortable as possible...");
			writeText("He thinks for a moment, before nodding.");
			writeSpeech("meji","","Y-Yeah. If you don't mind, then...");
			writeText("...");
			writeText("It takes a few minutes for him to relax enough to go into trance, but what you learn after he does is pretty interesting.");
			writeText("You started out by just asking simple questions, but <i>he</i> was the one that started talking about what he would do after coming home, still crossdressing.");
			writeText("The fact that he has so many fantasies about being dominated just helps you push him deeper and deeper into trance, and he doesn't exactly spare any details...");
			writeText("At this point, he's more than far enough along for you to help him enjoy himself, and have some fun of your own along the way. It helps that, in that skirt, he can make for a pretty convincing girl.");
			writeFunction("writeEvent('meji1')", "See how far along he already is in training his ass");
			break;
		}
		case "meji3b" : {
			writeSpeech("meji","","Something new...? What do you...");
			writeText("He thinks for a moment before his face goes red.");
			if(checkTrust('meji') >= 40){
				writeSpeech("meji","","...<i>Oh.</i> I mean, I don't have a problem with something like that, but... I don't really have any spending money right now.");
			}
			else{
				writeSpeech("meji","","...Sorry, "+data.player.honorific+", but I don't have the money for something like that. I don't usually keep much money on-hand for things like that...");
			}
			writeText("Hm. Well, that is a problem... But then again, there's no reason <i>you</i> can't buy something, if you're interested in seeing him in it. Maybe there's something at the shopping district...?");
			writeFunction("writeEncounter('meji3')", "Choose something else");
			writeFunction("changeLocation(data.player.location)", "Leave him be for now");
			break;
		}
		case "meji3c" : {
			removeItem("Leotard");
			writeText("His eyes go wide as you try to discretely hand it to him.");
			if(checkTrust('meji') >= 40){
				writeSpeech("meji","","Th-This is... Wow.");
				writeText("He looks up at you, as flushed as usual as he grins.");
				writeSpeech("meji","","If this is your way of requesting something...");
				writeText("His voice goes much quieter.");
				writeSpeech("meji","","<i>Then just tell me when to come to your office, "+data.player.honorific+".</i>");
				writeText("Hoo boy. That would normally be how this goes but, this time...");
				writeSpeech("player","","The last club meeting in the room behind the gym finishes in an hour.");
				writeText("He tenses sharply.");
				writeSpeech("player","","If you're not up for it, though-");
				writeSpeech("meji","","Don't be late... Please.");
			}
			else{
				writeText("His face is clearly flushed and, you note, you can see him starting to tent his pants already.");
				writeSpeech("meji","","...When do you want me, "+data.player.honorific+"?");
				writeText("Normally, you'd just take him to your office now, but...");
				writeSpeech("player","","The last club meeting in the room behind the gym finishes in an hour.");
				writeText("He tenses sharply.");
				writeSpeech("player","","If you're not up for it, though-");
				writeSpeech("meji","","Thank you for the gift, "+data.player.honorific+". I won't be late.");
			}
			writeText("He quickly strides off in the direction of the gym, probably to scope it out.");
			writeFunction("writeEvent('meji3')", "Burn a little time and meet up with him");
			break;
		}
		case "meji4" : {
			writeText("When you start to approach, "+data.story[7].fName+" perks up visibly.");
			if(data.story[7].trust > 40){
				writeText("He smiles widely as he leans against the wall.");
				if(data.player.gender == "man"){
					writeSpeech("meji","","Just the guy I was looking for. You aren't busy, are you?");
				}
				else{
					writeSpeech("meji","","Just the lady I was looking for. You aren't busy, are you?");
				}
				writeSpeech("player","","I can make time. What's the matter?");
				writeSpeech("meji","","<i>Personal</i> stuff. Your office?");
				writeSpeech("player","","Sounds good.");
			}
			else{
				writeText("He clasps his hands in front of him as he stands a bit straighter.");
				writeSpeech("meji","","Good morning. Are you busy? I was hoping we could talk about... something.");
				writeSpeech("player","","Is this more of a <i>private</i> discussion?");
				writeText("He nods, fiddling with his hands in front of him.");
				writeSpeech("player","","The office, then.");
			}
			writeText("...");
			writeText(data.story[7].fName+" relaxes a bit as the familiar <b>click</b> of the lock rings out.");
			if(data.story[7].trust > 40){
				writeText("He sits down on the bed, resting his hands behind him. It's probably not an accident that that pose thrusts his chest out.");
				writeText("Despite that, though, he seems to be avoiding eye-contact.");
				writeSpeech("player","","So, what sort of personal stuff did you want to talk about?");
				writeSpeech("meji","","...Last time felt good, right? I mean, you came a <i>lot</i>, but like... You really enjoyed it, yeah? I know that, after cumming the first time, it can get really sensitive, but I don't think I ever really slowed down.");
				writeText("He shifts a bit in his seat, starting to kick his legs gently.");
				writeSpeech("meji","","I just want to make sure I didn't go too far, or something.");
				writeText("You take a moment to sit down next to him, resting a hand on his thigh.");
				writeSpeech("player","","You were fine, "+data.story[7].fName+". The whole point was to go as far as <i>you</i> wanted, and if I wasn't enjoying it, I'd have just told you.");
				writeText("He relaxes a bit, exhaling deeply.");
				writeSpeech("meji","","Okay. Thanks, I just... wanted to be sure. I've been having a lot of fun with this, and I don't want to go ruining it just 'cause I was feeling a little <i>too</i> pent-up.");
				writeSpeech("player","","It's all good. Remember, if you're ever feeling that pent-up again, I'm happy to help you <i>unload</i>... as long as you're willing to the do the same for me, of course.");
				writeText("With that, you feel his pants shift under your palm as his hand traces around your thigh.");
				writeSpeech("meji","","If you're not careful, "+data.player.honorific+", I'll take statements like that as permission to help you unload every chance I get~. In fact...");
				writeText("His hand slides further up, just barely missing your crotch as he runs his fingers to your hips.");
				writeSpeech("meji","","Maybe that <i>is</i> permission...?");
				writeFunction("writeEncounter('meji4a')", "Lean back and nod");
				writeFunction("writeEncounter('meji4b')", "Maybe later");
			}
			else{
				writeText("He pauses for a second before sitting on the bed and brushing off his pants. A slow, deep breath later...");
				writeSpeech("meji","","I... wasn't too forceful last time, was I? I know you gave me permission and all, but you were gone when I woke up.");
				writeText("He continues fidgeting, one of his hands shifting against his hip as he does.");
				writeSpeech("meji","","I don't mean to come off as clingy, "+data.player.honorific+", it's just... I didn't go too far, did I? You're not still sore or anything?");
				writeText("You take a moment to sit down next to him, resting a hand on his thigh.");
				writeSpeech("player","","You were fine. A bit controlling, maybe, but that was kind of the point. I <i>wanted</i> you to get off, and if I wasn't enjoying myself, I'd have just told you... which probably would've just made you try even harder.");
				writeText("His face flushes again as you feel his pants shift under your palm.");
				writeSpeech("player","","If I don't want you to do something, during sex or otherwise, I'll tell you. If I <i>do</i> want you to do something, I'll tell you that, too. Games are the most fun when <i>everyone</i> enjoys themselves, after all.");
				writeSpeech("meji","","...Thank you. This, what we've been doing, has been great. I didn't want to ruin it just because I was too desperate to get myself off and ended up getting too rough.");
				writeSpeech("player","","It's all good. Honestly, the only lingering problem I have from last time is the throbbing erection I get when I think about it.");
				writeText("At that, "+data.story[7].fName+" leans a bit closer to you, one of his hands resting on your thigh.");
				writeSpeech("meji","","That sounds like a bit of a problem, "+data.player.honorific+". A very <i>big</i> problem, at that...");
				writeText("He slowly looks up, smiling gently as he locks eyes with you.");
				writeSpeech("meji","","Would you like me to <i>take responsibility?</i>");
				writeFunction("writeEncounter('meji4a')", "Lean back and nod");
				writeFunction("writeEncounter('meji4b')", "Maybe later");
			}
			break;
		}
		case "meji4a" : {
			raiseTrust('meji',1);
			writeEvent("meji5");
			passTime();
			writeText("His hands move towards his bikini bottoms for a moment, but he stops.");
			if(checkTrust('meji')>40){
				writeSpeech("meji","","Crap... It's getting late.");
				writeText("He gestures to the clock, frowning.");
				writeSpeech("meji","","Sorry, I wasn't originally planning on doing anything with you today. Thought you might still be sore, so I kinda made plans...");
				writeSpeech("player","","That's fine. This <i>was</i> kind of spur-of-the-moment. Thanks for checking up with me, though. And for the <i>fun</i>, of course.");
				writeText("He smiles, standing up and stretching his legs a bit as he picks up his clothes.");
				writeSpeech("meji","","I'm happy to do it. Plus, I get the feeling you'll be <i>very</i> enthusiastic about paying me back for <i>every single <b>drop.</b></i>");
				writeText("He winks as he slides his pants up, hiding his underwear as he wipes the last of his spit from his chin.");
				writeSpeech("meji","","How do I look? Did I miss anything?");
				writeSpeech("player","","You got it all. Not a soul out there would suspect that you just sucked off your counselor in women's swimwear.");
				writeText("He scoffs, swinging jokingly at you.");
				writeSpeech("meji","","Ah, quit it. The fact that I can still taste you is enough of a turn-on, "+data.player.honorific+" - keep talking like that, and I'll rip through my jeans.");
				writeText("mejiF unlocks the door, leaning against it for a second.");
				writeSpeech("meji","","Thanks for the talk, by the way. See you later!");
			}
			else{
				writeSpeech("meji","","Damn... It's getting late.");
				writeText("He gestures to the clock, frowning.");
				writeSpeech("meji","","Sorry, I wasn't sure that we were doing anything today. I thought you might still be sore, so I... kinda made plans...");
				writeSpeech("player","","That's fine. This <i>was</i> rather spur-of-the-moment, after all.");
				writeText("He smiles, standing up and stretching his legs a bit as he picks up his clothes.");
				writeSpeech("meji","","Thank you, "+data.player.honorific+". I'll make sure to keep my schedule open after school.");
				writeText("He quickly slides his pants up, hiding his underwear as he wipes the last of his spit from his chin.");
				writeSpeech("meji","","I didn't miss anything, did I?");
				writeSpeech("player","","You got it all. Not a soul out there would suspect that you just sucked off your counselor in women's swimwear.");
				writeText("He looks down to the floor, smiling as his face gets a little flushed.");
				writeSpeech("meji","","Or that I can still <i>taste</i> you, "+data.player.honorific+". Don't go making me wait <i>too</i> long, please?");
				writeText("mejiF unlocks the door, leaning against it for a second.");
				writeSpeech("meji","","...Thanks for the talk, by the way. It means a lot.");
			}
			writeText("He leaves quickly, shutting the door behind him and leaving you with whatever business you have planned for the day.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meji4b" : {
			raiseTrust('meji',1);
			writeSpeech("player","","Not today, sorry. I'm a bit tied up with some other business.");
			writeText("He smiles, nodding.");
			writeSpeech("meji","","That's fine - I kinda thought you might be. I hope you won't make me wait <i>too</i> long, though~! I actually have something I'd like to show you next time, so let's both look forward to it.");
			writeSpeech("player","","Sure thing, mejiF.");
			writeText("With that, he stands up and (after checking the buttons on his shirt) exits the room, leaving you to your business.");
			writeFunction("changeLocation(data.player.location)", "Get back to work");
			break;
		}

		case "meji5" : {
			passTime();
			if(checkTrust('meji') == 26){
				addFlag('meji','submissive');
			}
			else{
				addFlag('meji','willful');
			}
			setTrust('meji',60);
			if(checkFlag('meji','willful')){
				writeText("mejiF grins broadly as he spots you, brushing at his shirt for a second.");
			}
			else{
				writeText("mejiF smiles gently as you approach. He seems to keep fiddling with his pants, right around his hip...");
			}
			if(galleryCheck("meji5")){
				if(checkFlag('meji','willful'))
					writeSpeech("meji","","How about the two of us pick up where we left off? If we head back to my place, we won't have to worry about anyone knocking on your office door~!");
				else
					writeSpeech("meji","","Hello, playerSir. I was wondering if maybe you wanted to pick up where we left off last time? We could go to my place and not worry about getting interrupted...");
			}
			else{
				if(checkFlag('meji','willful'))
					writeSpeech("meji","","Heya, playerSir! I was wondering if you were free later? I want to show you that 'something' I mentioned last time!");
				else
					writeSpeech("meji","","Hello, playerSir. I was wondering if you have some time later today? I'd like to show you that 'something' I mentioned last time...");
			}
			writeFunction("writeEncounter('meji5a')", "Go to his place");
			writeFunction("changeLocation(data.player.location)", "Maybe later");
			break;
		}
		case "meji5a" : {
			if(checkFlag('meji','willful')){
				writeText("mejiF's grin widens further. He quickly scans the hallway and, satisfied that no one seems to be watching, he steps forward.");
				writeText("You feel his lips press gently against yours as he winks.");
				writeSpeech("meji","","See you then, playerSir.");
				writeText("He strides off confidently, his hands folded clasped his back as he goes. Plus, with that sway he has going on, it's a pleasure to watch him go...");
			}
			else{
				writeText("His face gets a little redder.");
				writeSpeech("meji","","Alright. I'll see you then, playerSir.");
				writeText("He starts to turn away, but pauses.");
				writeText("He looks around for a second and, seeing no one else looking, he quickly steps toward you.");
				writeText("His lips just barely brush up against yours before he steps back.");
				writeSpeech("meji","","Thanks.");
				if(galleryCheck("meji5"))
					writeText("Before you can respond, he darts off. Seems like he's really looking forward to finishing what you two started...");
				else
					writeText("Before you can respond, he darts off. Seems like he's really excited to show you whatever it is he got...");
			}
			writeText("...");
				writeText("Shutting the door as you step into his house, you can hear what sounds like mejiF humming from the main room.");
				writeText("He goes quiet as you walk further in.");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","playerF?");
			else{
				if(data.player.gender == "man")
					writeSpeech("meji","","Sir?");
				else
					writeSpeech("meji","","Ma'am?");
			}
			writeText("Rounding the corner, you see mejiF sitting in the middle of the room, smiling and pocketing his phone.");
			if(galleryCheck("meji5"))
				writeSpeech("player","","The one and only. Looks like I might've kept you waiting?");
			else
				writeSpeech("player","","The one and only. You said you had something you wanted to show me? Is it safe to assume it's something <i>fun?</i>");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","Nah. I was texting some friends about the weekend, so your timing is actually perfect.");
			else
				writeSpeech("meji","","Not at all! I was just making plans for the weekend, so I was barely waiting at all.");
			writeSpeech("player","","Oh? What sort of plans? Nothing that a school counselor might object to, I hope.");
			writeText("mejiF smiles, shaking his head.");
			writeSpeech("meji","","Study group, actually. I can't spend <i>all</i> my time having fun - if I did, I'd flunk right out of the University.");
			if(checkFlag('meji','willful')){
				writeText("Saying that, he grins saucily and starts undoing his shirt's top-button.");
				writeSpeech("meji","","Of course, that doesn't mean I can't have my fun between the study sessions.");
			}
			else{
				writeText("Saying that, he blushes a bit as he reaches for his shirt's buttons.");
				writeSpeech("meji","","Of course, while I plan on studying up, everyone needs a bit of fun between sessions. Don't you agree, playerSir?");
			}
			if(galleryCheck("meji5")){
				writeSpeech("player","","A bit of relaxation can do wonders for your studying... probably. And that's just one more reason we should pick up where we left off.");
				writeSpeech("meji","","Of course.");
			}
			else{
				writeSpeech("player","","A bit of relaxation can do wonders for your studying... probably. But I suppose that means you're about to show me a new <i>studying aid?</i>");
				writeSpeech("meji","","You could say that.");
			}
			writeText("mejiF turns around for a moment, undoing the buttons on his shirt and his pants.");
			writeText("When he turns back around, it's to show what he's been wearing underneath.");
			if(galleryCheck("meji5")){
				writeBig("images/meji/8-1.jpg", "Art by Nagi Ichi");
				writeSpeech("meji","","Do you like it? I've been wearing it under my uniform lately... including in your office back then.");
				writeSpeech("player","","I'd say it looks nice, but I feel like you're not looking for a <i>verbal</i> reply.");
				writeText("He smiles as he tosses his other clothes to the side.");
				writeText("He steps in front of you before kneeling down, his hands rubbing against your crotch as he slides forward.");
				writeSpeech("meji","","Mmm... I could tell from looking at you, but feeling it in my hand is way better.");
				if(data.player.gender == "man"){
					writeText("He leans his head down, pulling your pants low enough to reveal your underwear.");
					writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
					writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
					writeText("He slides your underwear down, your cock springing out as it does, smiling up at you and giving a wink.");
				}
				else{
					writeText("He leans his head down, lifting your skirt just enough to reveal your panties.");
					writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
					writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
					writeText("He slides your panties down, your cock springing out as it does, smiling up at you and giving a wink.");
				}
			writeSpeech("meji","","So let's get right to it~!");
			writeFunction("writeEvent('meji7')", "Get ready to fuck");
			break;
			}
			else{
				writeEvent("meji6");
			}
			break;
		}
		case "meji6" : {
			if(checkTrust('meji') == 60)
				setTrust('meji',61);
			writeText("You clear your throat as you approach, making him look up from the phone.");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","Oh, hey! What's up?");
				writeSpeech("player","","Not much... <b>puppy.</b>");
				writeText("mejiF freezes for a second, just barely suppressing a shuddering moan before turning bright red.");
				writeSpeech("meji","","W-Whoa there... At least wait until the halls are empty~");
				writeText("He grins, putting a hand on his hip and speaking quietly.");
				writeSpeech("meji","","Of course, if you want to do some <i>public-play,</i> I can't say I'm against it.");
				writeText("He pauses.");
				writeSpeech("meji","","I mean, unless there's something else you wanted to talk about... or <i>try out,</i> at least.");
			}
			else{
				writeSpeech("meji","","Ah, hello playerSir! Sorry, I got a little distracted.");
				writeSpeech("player","","It's fine. Something important?");
				writeSpeech("meji","","Just the study-group I mentioned before. We were going over integral calculus, and I was reviewing the text logs.");
				writeText("He pockets the phone, smiling up at you.");
				writeSpeech("meji","","Was there something you wanted to ask about?");
				writeSpeech("player","","I just wanted to check on you... <b>puppy.</b>");
				writeText("mejiF freezes for a second, just barely suppressing a shuddering moan before turning bright red.");
				writeText("He takes a second to look around, seeing if anyone heard, but it seems like no one did.");
				writeSpeech("meji","","...Thank you, playerSir!");
				writeText("He shifts his weight, clasping his hands in front of him.");
				writeSpeech("meji","","If you want to do public-play, though, I'd be happy to go into town with you. If you're interested, that is...");
				writeText("He pauses.");
				writeSpeech("meji","","Well, unless there was something else you wanted to talk about?");
			}
			if(galleryCheck('meji8') != true)
				writeFunction("writeEvent('meji8')", "Go for a walk in town while he cross-dresses");
			if(galleryCheck('meji9') != true)
				//writeFunction("writeEvent('meji9')", "Have him meet you in the gym with women's workout shorts on");
			writeFunction("changeLocation(data.player.location)", "Maybe later");
			break;
		}
		case "meji7" : {
			if(checkTrust('meji') == 61)
				setTrust('meji',62);
			writeText("You see mejiF head just slightly twitch as you approach, and he looks up.");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","Yo. What's up, playerSir?");
				writeText("He grins wolfishly.");
				writeSpeech("meji","","You here to invite innocent ol' me out for a little <i>fun?</i>");
			}
			else{
				writeSpeech("meji","","Good morning, playerSir!");
				writeText("He quickly pockets his phone, smiling gently up at you.");
				writeSpeech("meji","","Did you want to talk to me about something?");
			}
			if(galleryCheck("meji8") != true)
				writeFunction("writeEvent('meji8')", "Go for a walk in town while he cross-dresses");
			// if(galleryCheck("meji9") != true)
			// 	writeFunction("writeEvent('meji9')", "Have him meet you in the gym with women's workout shorts on");
			// if(galleryCheck("meji8") && galleryCheck("meji9"))
			if(galleryCheck("meji8"))
				writeSpecial("That's all the content currently available for for mejiF. More to come, though!");
			writeFunction("changeLocation(data.player.location)", "Maybe later");
			break;
		}
		case "meji8" : {
			passTime();
			if(checkTrust('meji') == 61)
				writeSpeech("player","","Actually, public-play isn't such a bad idea. I know you own a girl's uniform, but...");
			else
				writeSpeech("player","","I was thinking about going for walk through town with you. I know you own a girl's uniform, but...");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","You want to know if I've got casualwear that <i>doesn't</i> look like it belongs on a gymnast?");
				writeText("He smirks.");
				writeSpeech("meji","","It's a bit revealing, but I've got just the outfit. Where do you wanna meet?");
				writeSpeech("player","","How about near the shopping district?");
				writeSpeech("meji","","Perfect. See you after classes!");
			}
			else{
				writeSpeech("meji","","Ah, I do have a casual outfit. Though, it's a bit more revealing than the uniform...");
				writeSpeech("player","","'Public indecency' revealing, or 'the way I like it' revealing?");
				writeText("He laughs lightly.");
				writeSpeech("meji","","More of the second, I think. Where did you want to meet up?");
				writeSpeech("player","","How about near the shopping district?");
				writeSpeech("meji","","That sounds great. I'll see you after classes!");
			}
			writeText("...");
			writeEvent("meji8");
			break;
		}
		case "meji8a" : {
			data.player.location = "shoppingDistrict";
			addFlag('meji','alleySex')
			writeSpeech("player","","Reactions can be pretty entertaining to watch... <b><i>puppy.</i></b>");
			writeText("His grip on your arm tightens sharply, accompanied by an audible hitch in his breathing.");
			writeSpeech("meji","","...Thank you, playerSir~");
			if(checkFlag('meji','willful')){
				writeText("He smirks up at you, a teasing look in his eyes.");
				writeSpeech("meji","","But I don't plan on falling apart <i>that</i> easily. After all...");
			}
			else{
				writeText("He smiles up at you, a teasing twinkle in his eyes.");
				writeSpeech("meji","","I'll be sure not to fall apart <i>too</i> easily, though. After all...");
			}
			writeText("He stands up on his toes, his breath warm against your ear...");
			writeSpeech("meji","","<i>You trained me better than that.</i>");
			writeText("Relaxing a bit, mejiF leans against you as you walk.");
			writeText("There's a strong part of you that's saying to just have a nice day on the town, just enjoy hanging out with mejiF...");
			writeText("And then there's the <i>very</i> strong part that's taking those words as a challenge.");
			writeSpeech("player","","Hey, did you know that there's a particular store near here that you might be interested in?");
			writeSpeech("meji","","Really? What kind?");
			writeSpeech("player","","A pet store.");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","...Oh, I am going to regret today in the <i>best</i> ways.");
			else
				writeSpeech("meji","","...Oh <i>fuck yes.</i>");
			writeText("...");
			writeText("You have a very <i>interesting</i> time looking at the animals. There were the fish, of course, and the ferrets were absolutely lovely. The hamsters were pudgy, and the mice... Well, they're not for everyone.");
			writeText("And, of course, there were all the dogs.");
			writeText("You really didn't know that two dogs had given birth to full litters just last week, but the timing was pretty great.");
			writeText("The best part wasn't even when you would use the trigger on mejiF. Since the trigger was specifically set to go off when you called him a puppy, it was pretty rare for it to happen accidentally.");
			writeText("No, the best part was definitely watching him balance how much he loved the adorable little floofs with how jealous he was getting at hearing the word without any effect.");
			writeText("Of course, you managed to keep things civil by figuring out that, even if you weren't calling <i>him</i> puppy, maintaining direct eye-contact while saying it seemed to have a lesser effect.");
			writeText("However, all good things must come to an end, and using a pet shop to tease your companion can only last so long...");
			writeText("Mainly because if you stayed any longer, there's no way mejiF could hide his erection, and you really don't want to explain to the staff why a crossdresser is erect in a pet store.");
			writeSpeech("meji","","...");
			writeText("mejiF's actually been silent for a few minutes now, ever since you left. He's kept his grip on your arm pretty tight, and he's walking very close.");
			writeSpeech("player","","...Are you okay?");
			writeText("There's another moment of silence, before he lets go of your arm.");
			writeText("You turn to look at him, and...");
			if(checkFlag('meji','willful')){
				writeBig("images/meji/9-2w.jpg", "Art by Nagi Ichi");
				writeSpeech("meji","","I'm f-fine. I'm definitely not about to...");
				writeText("He blinks a few times before taking a deep breath.");
				writeSpeech("meji","","...Screw it.");
				writeSpeech("player","","W-Whoa!");
				writeText("You feel mejiF suddenly and sharply pull on your arm, taking the both of you to a side-alley.");
				writeText("A second later, his arms are wrapped around your chest as he takes an even deeper breath.");
				writeText("It takes you a moment to notice, but...");
				writeText("This is one of the alleys mejiF used to try and avoid you back when you first saw him cross-dressing.");
				writeSpeech("meji","","...God, your smell is only making this stupid hard-on <i>so much worse.</i>");
				writeText("He looks up from your chest, pouting.");
				writeSpeech("meji","","And you always know <i>exactly</i> what you're doing whenever you do it. You're totally making it impossible to go a day without thinking about your body, you know that?");
				writeSpeech("player","","...Thanks?");
				writeSpeech("meji","","Thank me with a <i>different</i> part, playerSir.");
				writeText("He pulls back from you, turning around and cautiously looking around the alley to make sure you're alone...");
				writeText("...before popping his skirt over his ass, showing off the thin pink fabric barely covering his hole.");
				writeSpeech("meji","","So, what are you waiting for? I'm practically already cu- <i><b>FUCK!</b></i>");
				writeText("Your hand swings across his ass, the expletive accompanied by a low moan as his body shivers a bit.");
				writeSpeech("player","","You are, without question, the most <i>masochistic <b>bitch</b></i> I've ever met. You know that?");
				writeSpeech("meji","","...I fucking <i>love</i> your foreplay~");
			}
			else{
				writeBig("images/meji/9-2w.jpg", "Art by Nagi Ichi");
				writeText("He's breathing a bit heavily, trying to maintain eye-contact as you realize that the reason he was standing close was to hide his erection from the crowd.");
				writeSpeech("meji","","I, um... I might've underestimated the trigger.");
				writeSpeech("player","","Yeah, I can see that.");
				writeText("You pull him a bit closer to try and mask it a bit.");
				writeSpeech("player","","Let's get you back to my place, and we'll see about dealing with that- WHOA!");
				writeText("You feel mejiF suddenly and sharply pull on your arm, pulling you further down the street.");
				writeSpeech("meji","","Sorry, playerSir, but...");
				writeText("He takes you to a side-alley - an alley that you actually recognize as one of the ones mejiF used to try and avoid you back when you first saw him cross-dressing.");
				writeText("A second later, his arms are wrapped around your chest as he takes a deep breath.");
				writeSpeech("meji","","...God, your smell is only making this stupid hard-on <i>so much worse.</i>");
				writeText("He looks up from your chest, pouting.");
				writeSpeech("meji","","Here.");
				writeSpeech("player","","...Here?");
				writeText("He nods slowly.");
				writeSpeech("meji","","Last time we were here, I was... rude. When you suggested public-play, I, um... kinda had an agenda.");
				writeText("He pulls back from you, turning around and cautiously looking around the alley to make sure you're alone...");
				writeText("...before popping his skirt over his ass, showing off the thin pink fabric barely covering his hole.");
				writeSpeech("meji","","I already apologized, and you already forgave me, but...");
				writeText("He runs his hands along his ass, his erection forcing his panties to stretch to their limit.");
				writeSpeech("meji","","I just <i>really</i> wanted to do it here... If you're okay with- <i><b>FUCK!</b></i>");
				writeText("Your hand swings across his ass, the expletive accompanied by a low moan as his body shivers a bit.");
				writeSpeech("player","","You are, without question, the most <i>masochistic <b>bitch</b></i> I've ever met. You know that?");
				writeSpeech("meji","","...I'm sorry, I-");
			}
			writeText("Another slap quickly shuts him up, before you then slide his panties to the side.");
			writeSpeech("player","","But you're <i>my</i> bitch, <b>puppy.</b>");
			writeText("You press yourself against him, his whole body shuddering from the trigger as you undo your belt.");
			writeSpeech("player","","And if you want to get fucked in the alley like a dog...");
			writeText("You free your cock from your grab his hands by the wrists as you line up your quickly-freed cock to his hole.");
			writeSpeech("player","","Then I'm happy to oblige.");
			writeText("Pulling him with your arms, you slam into him forcefully, his slick walls opening up easily for you.");
			writeBig("images/meji/9-3.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","Oh fuck...!");
			writeText("You immediately go full-force, the sound of your thighs slamming against his ass ringing out dangerously loud.");
			writeText("Not that mejiF seems to care the much, his ass tightening around you.");
			writeSpeech("player","","Is this what you wanted the whole time?");
			writeText("You buck against him sharply, a high-pitched squeal escaping his lips.");
			writeSpeech("player","","Teasing me from the start... You wanted to get fucked in the streets.");
			writeSpeech("meji","","Y-Yeah...!");
			writeSpeech("player","","We could get caught pretty easily. Especially with you moaning like a <i>bitch in heat.</i>");
			writeText("He barely squeaks out a response as he starts quaking around your shaft.");
			writeSpeech("player","","But I bet getting caught-");
			writeText("You draw back until the very tip of your dick is barely inside.");
			writeSpeech("player","","-would just make you <i>spurt even harder.</i>");
			writeText("You <b>slam</b> your shaft in again, mejiF's legs nearly giving out as he starts to cum, almost as if on-cue.");
			writeBig("images/meji/9-4.jpg", "Art by Nagi Ichi");
			writeText("You can feel his ass milking your own load out of you while he paints the wall white, but it's not enough for either of you.");
			writeText("Letting go of his hands, you place one on his thigh while grabbing his hair with the other.");
			writeText("You pull him closer to your body, speaking directly into his ear.");
			writeSpeech("player","","Now, what do you say to the man that just made you <i>cum,</i> <b>puppy?</b>");
			if(checkFlag('meji','willful')){
				writeText("You can feel him laugh softly, even as his body keeps shuddering.");
				writeSpeech("meji","","Harder, daddy~");
				writeText("Oh, this promises to be fun...");
			}
			else{
				writeText("You feel his own hand reach back, pulling your head towards his.");
				writeText("For a moment, you feel his lips press hungrily against yours, his tongue sliding into your mouth for a second before he pulls back, looking at you with lust-hazed eyes.");
				writeSpeech("meji","","Thank you for filling my ass, playerSir~... Please keep using me until <i>you're</i> satisfied too...!");
				writeText("Oh, this promises to be fun...");
			}
			writeText("...");
			writeText("The two of you eventually manage to satisfy each other, miraculously without anyone coming to investigate the sounds of your fuckfest.");
			writeText("Most of the day is gone at that point, but then again, the whole point of going out was experimenting a bit with public play, so...");
			writeText("Mission accomplished. Plus, there's a certain primal satisfaction that comes from walking mejiF home while your cum runs down his legs...");
			writeText("It might be a good idea to give him a bit of time to recover, though. Either way, it's about time to head out. You have other business to attend to... Probably.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meji8b" : {
			//Go to the gym and drill him from behind. Nipple-teasing happens, he blows his load, simple stuff.
			break;
		}
		case "meji9" : {
			//Go to the gym and drill him from behind. Nipple-teasing happens, he blows his load, simple stuff.
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "meji1", name: "Beginner's Training"},
	{index: "meji2", name: "Feeling Numb"},
	{index: "meji3", name: "Backing Up Leotard"},
	{index: "meji4", name: "Finally Finishing"},
	{index: "meji5", name: "Lingerie Blowjob"},
	{index: "meji6", name: "Lingerie Blowjob with Intro"},
	{index: "meji7", name: "Lingerie Fuck"},
	{index: "meji8", name: "Public Walk and Fuck"},
	{index: "meji9", name: "Women's Shorts Fuck"},
];

function writeEvent(name) { //Plays the actual event.
	wrapper.scrollTop = 0;
	switch (name) {
		case "meji1" : {
			document.getElementById('output').innerHTML = '';
			writeText("You get "+fName('meji')+" to stand up and bend over, which he does pretty easily, his eyes still shut. Going by the way he's tenting his panties, talking about his favorite ways to get off turned him on pretty good, even under hypnosis.");
			writeText("Given his various fantasies, you look around for something to bind his wrists with, but you just find some easily-torn rubber tubing... which, all things considered, is probably fine.");
			writeText("You tie his hands behind his back and slide his panties to the side.");
			writeText("You have lube in one of your drawers, of course. You didn't exactly come to this university unprepared.");
			writeText("Smearing it across a finger, you continue speaking.");
			writeSpeech("player","","You're still rather relaxed, aren't you, "+fName('meji')+"?");
			writeSpeech("meji","","Nn...");
			writeText("As soon as you bring your lubed finger to his ass, his breathing picks up, and you slide your other hand onto his thigh to stabilize him.");
			writeText("You can feel him squirming against your hands, not-quite-straining against the fragile makeshift-rope.");
			writeSpeech("player","","Hm... This might shock him out of it, but...");
			writeText("You carefully start pushing your finger into him, and you notice his eyes starting to open.");
			writeBig("images/meji/3-1.jpg", "Art by Nagi Ichi");
			if (data.player.gender == "man") {
				writeSpeech("meji","","Haa... Ah...? S-"+data.player.honorific+", what is...");
			}
			else {
				writeSpeech("meji","","Haa... Ah...? M-"+data.player.honorific+", what is...");
			}
			writeText("Shame starts to flood his face, but you push your finger a bit deeper and...");
			writeSpeech("meji","","<i>N-Nn~...!</i>");
			writeText("The rapid clenching of his ass almost feels like it's sucking on you, "+fName('meji')+ " hanging his head a bit.");
			writeSpeech("player","","You know... I never said you had to stop.");
			writeSpeech("meji","","W-what?");
			writeText("You plunge your finger further, finding your target as you press into his prostate. You can barely hear youself over his moan.");
			writeSpeech("player","","You were talking about how you play with yourself at home. Remember?");
			writeText("His eyes refocus a bit and you can see his cock twitch in his panties.");
			writeSpeech("meji","","...like this...");
			writeSpeech("player","","Hm. I couldn't hear anything. Oh well, it was fun.");
			writeText("You start sliding your hand out, but panic flies across his face.");
			writeSpeech("meji","","W-Wait! I...");
			writeText("He takes a slow, deep breath.");
			writeSpeech("meji","","I play with m-my ass... I finger it, just like this, while jerking off...!");
			writeText("Nodding along, you pull his panties even further to the side, his cock flopping out weakly.");
			writeSpeech("player","","You mean... like this?");
			writeBig("images/meji/3-2.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","<i>F-Fuck~!</i> J-Just like that!");
			writeText("You start carefully pressuring his prostate as you jerk him off, moans and whimpers now quietly spilling out of his mouth.");
			writeSpeech("player","","And what do you think about when you're fingering yourself, <i>slut?</i>");
			writeText("He goes quiet for just a second's hesitation, until you just barely slow down-");
			writeSpeech("meji","","<font size='-1'>...Getting fucked...</font> Having someone grab me from behind, and <i>bend me over</i>, and just <i><b><font size='+2'>fucking my ass until I'm a jizz-covered mess!</size></b></i>");
			writeSpeech("player","","Wow.");
			writeText("You speed up even more.");
			writeSpeech("player","","You know, I thought you might've been a bit of a slut, but...");
			writeText("You can feel him start twitching in your hand.");
			writeSpeech("player","","You're actually just a subby masochist <i>bitch</i>, aren't you?");
			writeText("He squeezes tighter around you, just about to cum when you take your hand off of his dick.");
			writeSpeech("meji","","B-But I was...!");
			writeSpeech("player","","You were about to cum like a <i>man</i>, "+fName('meji')+". Not much of one, honestly, but the point still stands. If you want to cum, you'd better listen.");
			writeText("Leaning forward, you push your finger in as far as you can, speaking quietly.");
			writeText("He's still partially in trance, so this should work...");
			writeSpeech("player","","The more you cum from that cock of yours, the less you'll be able to feel it.");
			writeText("You start slowly jerking him off again, twisting your finger inside of him.");
			writeSpeech("player","","If you were to let me milk you right now, let you spill your cockmilk all over the floor... I'm not sure you could cum from your dick ever again. Is that really what you want?");
			writeText("He starts squirming against you even more, seemingly resisting... but not even partially straining the fragile tubing on his wrists.");
			writeSpeech("player","","Do you really want to spurt out the last of that masculinity of yours, and become a <i>slutty little <b>bitch</b></i> that can only get off on anal?");
			writeSpeech("meji","","...care...");
			writeText("You start going even faster, feeling his cock start to throb and his hips start to buck.");
			writeSpeech("player","","You'd better hurry up and stop me... Otherwise, you'll-");
			writeText("Suddenly, he slams his ass against your hand, his breathing rough and labored.");
			writeSpeech("meji","","I don't care <i>I don't care <b>I don't care!</b></i> Finger me, fuck me, just <i>please let me cum!</b>");
			writeSpeech("player","","...You really are a desperate little <i>whore.</i>");
			writeText("Your words are the last straw as he starts tightening hard, pulling your finger against his anal-slut-button with every squeeze.");
			writeBig("images/meji/3-3.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","<i><b>CUMMING~!</b></i>");
			writeText("His cum spills all over the floor, shot after shot milked out of him as his whole body squirms in every direction.");
			writeText("During his shaking, you can hear the tubing snap as he grabs out for the bed, his moans barely muffled by the sheets.");
			writeText("You're honestly impressed by the amount the spatters everywhere before he finally collapses against the bed.");
			writeText("He barely looks conscious at this point, and you don't imagine he'll be recovering from <i>that</i> very quickly.");
			writeText("It gives you time to clean up, at least...");
			writeText("...");
			writeText("After he recovers a bit, you pull him out of trance - he's still a bit out of it, of course, but when you tell him you'll be calling him back in sometime soon, you see him shudder in pleasure.");
			writeSpeech("meji","","T-Thank you, "+data.player.honorific+"~...!");
			writeText("As he leaves, you can't help but wonder if he'll be as thankful when he's back to normal and can't feel his hand when he touches his dick...");
			if (data.player.location != 'gallery') {
				data.player.location = 'playerOffice';
				writeFunction("changeLocation(data.player.location)", "Finish up");
				raiseTrust('meji', 1);
				passTime();
			}
			break;
		}
		case "meji2" : {
			document.getElementById('output').innerHTML = '';
			writeText("You and "+fName('meji')+" arrive in your office pretty quickly - it seems like he's a bit antsy.");
			writeSpeech("meji","","Did you figure how to fix it?");
			writeSpeech("player","","Not exactly, no. I did figure <i>something</i> out, though.");
			writeText("Well, two things actually. The first was what you actually did want to know.");
			writeText("The other is that the hypnosis for his dick wouldn't last this long unless, on some level, he really did want it numb.");
			writeText("Neat.");
			writeSpeech("player","","I can't help you with your dick. What I can do, though, is help you feel a little less <i>pent-up.</i>");
			writeSpeech("meji","","...But wait, how are you-");
			writeSpeech("player","","Anal.");
			writeText("His breathing picks up <i>fast.</i>");
			writeSpeech("meji","","O-Oh. I, um... My uniform is in my bag. Could you turn around...?");
			writeText("...You just told him you were going to plow him, and he's embarrassed about being seen getting changed?");
			writeText("Fuck it, might as well.");
			writeSpeech("meji","","Thanks...");
			writeText("A few seconds later, he's in-uniform, sitting on the bed while your pendant sways.");
			writeText("It takes a little bit longer for him to go under than last time but, when he goes into trance, he goes deep.");
			writeText("You use a bit more of that plastic tubing to bind his arms behind his back, slowly pushing him down onto the bed.");
			writeText("As you do, sliding his panties to the side, you watch as his throbbing cock twitches around and, more importantly, his ass seems to tighten around nothing.");
			writeText("You get the lube, spreading it across your fingers carefully as you start teasing his hole.");
			writeSpeech("player","","Alright... "+fName('meji')+", are you ready?");
			writeSpeech("meji","","Nn...!");
			writeText("He starts grinding his ass against your hand, half-lidded eyes trying their best to focus on you.");
			writeSpeech("player","","Good enough.");
			writeText("You start carefully lubing his insides with your fingers, carefully stretching him out.");
			writeText("It doesn't take long. His ass eagerly takes in one finger, then another. You still take your time applying the lube, but the way he's squirming...");
			writeSpeech("player","","Just how often do you play with this ass of yours?");
			writeText("He moans gently, his voice quiet.");
			writeSpeech("meji","","E-Every night... I have a dildo...");
			writeSpeech("player","","Oh...? And how do you usually use it?");
			writeText("He opens his mouth to speak, but a strangled mewl is all that comes out as you pull out your fingers.");
			writeSpeech("meji","","I t-tease around my hole...");
			writeText("You undo your belt, the air feeling almost cold against your length before you press against him.");
			writeSpeech("meji","","After I'm wet enough, I...");
			writeText("He pauses, his eyes opening a bit more, but you get the gist of what he does next.");
			writeSpeech("player","","You<i> thrust it in,</i> right?");
			writeBig("images/meji/4-1.jpg","Art by Nagi Ichi");
			writeText("You can immediately see his cock start to rhythmically bob up and down as you squeezes around you.");
			writeText("Days of being pent-up has his cock already streaming almost cum-colored pre.");
			writeSpeech("meji","","F-Fuck...~!");
			writeText("You saw in slowly and carefully, watching his eyes flutter each time your head scrapes against his insides with each thrust.");
			writeText("But this isn't just about feeling a little nice...");
			writeText("You lean forward, nearly pinning his knees behind his head as you start to quietly whisper into his ear...");
			writeSpeech("player","","Is this what you wanted, "+fName('meji')+"? To be a playerG's private little <i>butt-slut?</i>");
			writeSpeech("meji","","Fuck, yes...!");
			writeSpeech("player","","But that sort of things has <i>costs,</i> doesn't it, "+fName('meji')+"?");
			writeSpeech("meji","","<i>Y-yes!</i>");
			writeText("You start speeding up, breathing onto his ear now as he writhes in pleasure beneath you.");
			writeSpeech("player","","Each thrust is making your ass more and more sensitive, isn't it?");
			writeSpeech("meji","","Yes!");
			writeText("Every 'yes' has him breathing deeper, has him squirming more and more.");
			writeSpeech("player","","Yes <i>what?</i>");
			writeSpeech("meji","","<i>Y-Yes, "+data.player.honorific+"~!</i>");
			writeText("You grin, picking up speed.");
			writeBig("images/meji/4-2.jpg","Art by Nagi Ichi");
			writeSpeech("player","","You know what you are, don't you?");
			writeText("You hear him swallow hard, before smiling.");
			writeSpeech("meji","","I-I'm a subby masochist <i>bitch</i>...! I'm a horny little <i>whore~!</i>");
			writeSpeech("player","","Very good. And do you know how honest whores get rewarded?");
			writeText("His ass grips onto you like a vice, <i>almost</i> slowing you down as you start fucking him harder.");
			writeText("He keeps trying to answer, but every push and pull of your cock slams against his prostate, only moans and mewls coming out of his mouth.");
			writeSpeech("player","","You really are eager, aren't you? In that case, let's finish...");
			writeText("You slam your hips into his quickly, pushing yourself to the edge and beyond as you feel your cock start to twitch.");
			writeBig("images/meji/4-3.jpg","Art by Nagi Ichi");
			writeText("From the first spurt, he starts spasming around you, your hands being the only thing stopping his legs from wrapping around his back.");
			writeText("His cock rapidly bounces up and down, the same precum still oozing down as he twitches underneath you.");
			writeText("As you pump the last of your jizz inside of him, your dick making a lewd <b>pop</b> as you pull out, he goes limp.");
			writeText("Just like last time, he's barely able to move but, this time, you're taking advantage of that.");
			writeSpeech("player","","You're going to remember <i>everything</i> with perfect clarity this time.");
			writeText("You swing your hand down, slapping his ass as his entire body tightens, a quiet moan escaping his lips.");
			writeSpeech("player","","And each time we fuck, it'll get <i>better</i> and <i>better</i> until eventually...");
			writeSpeech("player","","You can start spurting without ever even <i>needing</i> to touch that dick of yours. <i>Is that clear?</i>");
			writeSpeech("meji","","<i>Y-Yes...<b> "+data.player.honorific+"~...!</b></i>");
			writeText("You give him another, gentler slap on the ass.");
			writeSpeech("player","","Good girl...");
			writeText("...");
			writeText("After a while, "+fName('meji')+" recovers enough to clean himself up, changing back into his other uniform before leaving.");
			writeText("Not without a quick thanks, of course. He's never felt better, apparently.");
			writeText("That's your good deed for the day. Now, to deal with the <i>rest</i> of the day...");
			if (data.player.location != 'gallery') {
				data.player.location = 'playerOffice';
				writeFunction("changeLocation(data.player.location)", "Finish up");
				raiseTrust('meji', 1);
				passTime();
			}
			break;
		}
		case "meji3" : {
			document.getElementById('output').innerHTML = '';
			writeText("A few minutes after you're sure everyone's left the club room (and double-checking that no one seems to be coming back), you gently try the door.");
			writeText("Locked. Makes sense, if he's already in there. You gently knock.");
			writeText("There's a moment of silence, before...");
			writeSpeech("meji","","Is that you?");
			writeSpeech("player","","...No.");
			writeText("The lock clicks as he opens the door and you step in.");
			writeBig("images/meji/5-1.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","I double-checked the room for anything anyone forgot, and there doesn't seem to be anything.");
			writeSpeech("player","","That worried about someone seeing you like this?");
			writeText("He tries to scowl, but the skin-tight leotard does nothing to hide the tell-tale twitch of arousal.");
			writeSpeech("meji","","...S-So, are you going to put me under? It's a little hard to relax in here.");
			writeSpeech("player","","Not this time. Consider it part of your... training. How's the dick, by the way?");
			writeSpeech("meji","","<font size='-1'>...still numb...</font>");
			writeSpeech("player","","Then in that case, let's get right to it.");
			writeText("He stands a bit straighter, stiffening a bit (in both meanings of the word).");
			writeSpeech("meji","","H-How do you want me?");
			writeText("You look around for a moment, before pulling out the lube and pointing to the table.");
			writeSpeech("player","","That's a little bit below waist-level, so why don't you climb on it?");
			writeText("To his credit, he only pauses in confusion for a second before moving.");
			writeSpeech("player","","Good girl.");
			writeText("You quickly move towards him, preparing to start lubing up his ass as he leans forward a bit...");
			writeSpeech("player","","Are you... already dripping?");
			writeText("You can't see his face but, given how easily he blushes...");
			writeSpeech("meji","","I, um... I didn't want to get caught, so I thought if I got myself ready earlier-");
			writeText("A loud slap across his ass turns his words into a throaty moan.");
			writeSpeech("player","","You really <i>are</i> a good little bitch.");
			writeSpeech("meji","","...Thank you, "+data.player.honorific+"~.");
			writeText("At that, though, you quickly strip and grab something from your bag.");
			writeText("There's no way in Hell that the tubing would work for his legs, but it's obvious how much he enjoys being bound, so...");
			writeText("He tenses at the sound of the tape being pulled, but he holds still as you wrap it around his smoothly shaved legs.");
			writeSpeech("player","","There. That should keep you from bucking <i>too</i> hard.");
			writeText("Without further ado, you line your head up with his slick hole, pressing gently as it starts to spread...");
			writeText("And you stop.");
			writeText(fName('meji')+" doesn't say anything for a few seconds, waiting patiently, until you nod and say,");
			writeSpeech("player","","Get fucking, whore.");
			writeText("He <i>immediately</i> backs up against you, biting his lower lip to avoid from moaning too loudly as your head pops in and starts gliding inside of his ass.");
			writeBig("images/meji/5-2.jpg","Art by Nagi Ichi");
			writeText("He takes a moment to collect himself, before getting to work.");
			writeText("Since he isn't in trance this time, his muscle control is phenomenal, squeezing gently as he pulls you in deeper, then relaxing as he bobs forward.");
			writeText("Even partially bound, he moves easily to take you deeper and deeper with each thrust, but unfortunately for you both, he can't exactly go <i>fast</i> in this position.");
			writeText("Pretty soon, his moans go from pleasure to frustration, trying to back himself up harder against you. He grits his teeth, using his arms to push and pull himself.");
			writeText("Given such an admirable attempt, you can't help yourself.");
			writeSpeech("player","","Don't fall.");
			writeText("You tighten your hand around his wasit and <i>thrust.</i>");
			writeBig("images/meji/5-3.jpg", "Art by Nagi Ichi");
			writeText("His ass slams back against yours as he tries to keep his balance, the table almost rocking forward as you viciously fuck his asshole.");
			writeText("The sound of his ass against your hips echoes in the room, but "+fName('meji')+" doesn't even seem to notice as starts twisting his hips each time you bottom-out.");
			writeText("The other hypnotic suggestions are clearly still holding strong, particularly the one that makes him more sensitive with each thrust, as he's soon panting raggedly as he milks your cock with his ass.");
			writeSpeech("player","","Fuck... You're a high-quality piece of <i>bitchmeat</i>, you know that?");
			writeText("He squeezes around you.");
			writeSpeech("meji","","A-Are you close...?");
			writeSpeech("player","","That depends.");
			writeText("Your hand slides a bit up his waist as you step in, <i>slamming</i> your cock into him.");
			writeSpeech("player","","How much do you want it?");
			writeText("He leans his head forward, pressing his hands firmly against the table.");
			writeSpeech("meji","","More than anything else...! Please, fill my bitch-hole with your <i>hot fucking cum~!</i>");
			writeText("You raise your free hand, slapping his ass once, then twice. Each time you do, he squeezes just a bit tighter, moaning just a bit louder.");
			writeText("You only last a few more seconds of thrusting, before you feel it start to spurt.");
			writeBig("images/meji/5-4.jpg","Art by Nagi Ichi");
			writeText("More of it spills out than you intended, but the rapid tensing of "+fName('meji')+"'s ass keeps a lot of it in place.");
			writeText("He manages to stay upright this time, even as you slide the leotard over his spasming asshole.");
			writeSpeech("meji","","Th-Thank you... "+data.player.honorific+"...");
			writeText("You give him one last swat to the ass, relishing the hitched breathing and spasming as he goes limp.");
			writeText("Just before he does, though, you spot a single bead of cum beneath him, separate from the rest.");
			writeText("He didn't orgasm, but he got close. One more time, and he might actually cum from just anal...");
			writeText("As much as the thought gets you ready for round two, your eyes do go to the clock.");
			writeSpeech("player","","Damn...");
			writeText("It's getting late, and you know for a fact that the janitor isn't going to be happy if you're caught here.");
			writeText("You help "+fName('meji')+" get cleaned up, the leotard going underneath his regular clothes as he finishes up.");
			writeText("Just before you leave, though, he moves close to you and goes up on his toes and whispers in your ear,");
			writeSpeech("meji","","I can feel your cum inside the leotard, y'know~...");
			writeText("He does a little hop, and you feel his lips just barely brush against your ear.");
			writeText("With that, he darts out of the room, leaving you with a bit of time left before dark and a raging hard-on.");
			if (data.player.location != 'gallery') {
			data.player.location = 'gym';
				writeFunction("changeLocation(data.player.location)", "Get going");
				raiseTrust('meji', 1);
				passTime();
			}
			break;
		}
		case "meji4" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","You seem like you had fun last time.");
			writeText(fName('meji')+" stands up a bit straighter, nodding.");
			writeSpeech("meji","","A <i>lot</i> of fun, "+data.player.honorific+". I, um... actually would've liked to keep going, but...");
			writeSpeech("player","","You didn't want to get seen?");
			writeText("He slowly nods, shyly looking to the side.");
			writeSpeech("meji","","Yeah. I didn't want you to get caught and lose your job, or... worse.");
			writeText("...Fuck it, you are <i>definitely</i> getting him off.");
			writeSpeech("player","","Your place. Bring the leotard.");
			writeText("He pauses in surprise.");
			writeSpeech("meji","","I'm... actually wearing it now. I thought you might like it if-");
			writeText("You step closer to him, his voice squeaking as you do.");
			writeSpeech("player","","<i>Now.</i>");
			writeText("He stiffens.");
			writeSpeech("meji","","Yes, "+data.player.honorific+"~");
			writeText("...");
			writeText("The moment his front door is shut, he starts pulling off his male uniform, revealing the leotard beneath.");
			writeText("You start stripping as well, barely taking in the general lack of decoration. The moment your pants are off, "+fName('meji')+" leads you by the hand to a large living-room.");
			writeText("As he turns to face you, smiling wide, you can see the twitching outline of his cock as his eyes drift down to yours.");
			writeSpeech("meji","","How do you want me, "+data.player.honorific+"~?");
			writeText("You think for a moment...");
			writeSpeech("player","","This time... You choose.");
			writeText("He pauses for a moment.");
			writeSpeech("meji","","R-Really?");
			writeText("You just nod, his entire face lighting up.");
			writeSpeech("meji","","Well, then... Can you lie down, please? Last time, I couldn't do too much until you started thrusting, so I want to... ride you.");
			writeText("You go along with it, the carpeting feeling nice on your back, and fortunately not something you'll need to clean the jizz off of later.");
			writeText("He quickly straddles you, resting his plump ass on your length for a second before taking deep breaths.");
			writeText("Just the sensation of the thin strip of leotard on your cock, wrapped on both sides by his ass...");
			writeSpeech("player","","Fuck...!");
			writeText("Hearing that, "+fName('meji')+" starts rotating and grinding his hips against you with a smile, relishing in the feeling of your half-hard cock growing to full mast.");
			writeText("He slowly lifts himself up, sliding the leotard to the side to expose his pink, well-fucked hole.");
			writeSpeech("meji","","A-Are you ready, "+data.player.honorific+"?");
			writeSpeech("player","",fName('meji')+", I was ready to bend you over in an alley and <i>fuck you sense-</i>");
			writeText("He immediately drops his full body weight down, swallowing your cock balls-deep in one smooth motion and shutting you up completely.");
			writeBig("images/meji/6-1.jpg", "Art by Nagi Ichi");
			writeText("He wastes absolutely no time in bouncing up and down, his eyes rolling up in ecstasy.");
			writeSpeech("meji","","God... I fucking <i>love</i> this~!");
			writeText("His hands press down harder on your thighs, bouncing quickly as your head rubs all over his insides.");
			writeSpeech("meji","","When I got home, I was still so <i><b>fucking turned on</b></i>, I couldn't think...! I tried fucking myself with my dildo, but it wasn't the same~!");
			writeText("It's been less than thirty seconds, but the bouncing, the squeezing, the twisting all together has you already fighting to hold yourself back.");
			writeSpeech("meji","","It's your fault...! Whenever you're inside of me, I feel so <i>full</i>! I spent an hour <i><b>slamming</b></i> a dildo into my slutty little bitch-hole, stirring up your jizz while it was still warm, and <i><b>nothing.</b></i>");
			writeText("His entire body pitches forward, his hands resting on your chest now as you feel yourself reaching your limit.");
			writeSpeech("meji","","Whenever you're inside of me, it just feels better and better. I don't even <i>care</i> about my useless cock, because it could <i>never</i> feel as good as yours.");
			writeText("He starts slowing down a bit, running his hands up your body.");
			writeSpeech("meji","","Do you have any idea how empty I feel every time you come near me? Do you have any idea how many times you've thrust into me, how sensitive my ass even <i>is</i> now?");
			writeText("He slows, almost to a stop, and brings his hand to his stomach, ignoring his cock completely.");
			writeSpeech("meji","","Fucking me senseless one day, and then turning around and leaving me to fill myself up with some plastic toy... And then you let <i>me</i> choose how today goes?");
			writeText("Without even moving, you can feel his ass start tightening rhythmically around you, rapidly milking your length as you see the muscles in his abs rapidly tighten along with it.");
			writeSpeech("meji","","This is your fault, <i><b>"+data.player.honorific+",</b></i>, and the only way to make up for it is to <i>draing your balls inside of me <b>down to the last drop.</b></i>");
			writeText("You open your mouth to reply, but he quickly starts bouncing again, the tightening only speeding up, and you feel yourself lose it.");
			writeBig("images/meji/6-2.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","F-Fuck, it's hot...!");
			writeText("He slows down just a bit, adjusting his position before grinning.");
			writeSpeech("meji","","S-So... Let's see how many shots you have in you. Are you ready, <i><b>"+data.player.honorific+"~?</b></i>");
			writeText("...");
			writeText("You didn't even bother trying to track of how long you two fucked.");
			writeText("You'd changed positions a few times, but it always came back to cowgirl and, as you're finally starting to flag, you feel it.");
			writeText("A jolt goes up his back as he slams down against you with short, shallow movements, your hips bucking up every time he comes down.");
			writeSpeech("meji","","Fuck... Fuck fuck fuck~! I can feel it...!");
			writeText("His hands start clutching your thighs tightly, his legs start shaking uncontrollably, and it happens.");
			writeBig("images/meji/6-3.jpg", "Art by Nagi Ichi");
			writeText("As he starts spurting through the leotard, you fire one last load inside of him, leaning forward to support him as he nearly falls into you.");
			writeText("Seconds fade away as you two lay there before, eventually, you find the strength to get up.");
			writeText("You're not sure how dark it was when you went limp enough to pop out of his ass, but it's clearly night at this point.");
			writeText(fName('meji')+" is clearly out like a light, sleeping contentedly on your chest.");
			writeText("Despite how much you want to sleep yourself, you opt to get up, move him onto the couch, and finally head home.");
			writeText("Good fucking <i>God</i>, you need a shower...");
			if (data.player.location != 'gallery') {
			writeFunction("changeLocation(data.player.location)", "Go home and sleep");
			raiseTrust('meji', 1);
			passTime();
			passTime();
			}
			break;
		}
		case "meji5" : {
			if (data.player.location != 'gallery' && (checkTrust('meji') == 26 || checkTrust('meji') == 46) && (checkFlag('meji','submissive') == false || checkFlag('meji','willful') == false)) {
				writeText("mejiF grins as he raises his free hand to his shirt.");
				writeSpeech("meji","","I was hoping I'd get to show you this soon. See, I recently saved up just enough cash to pick up something I think we'll <i>both</i> enjoy...");
				writeText("He slides down between your legs, pulling off his clothes with practiced ease as you do the same.");
			}
			writeText("He spreads his legs out a bit, looking up at you from your thighs as his tongue rolls out of his mouth.");
			writeBig("images/meji/7-1.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","How's the view up there?");
			writeSpeech("player","","Absolutely stunning.");
			writeText("His blush gets deeper as he starts running his hand up and down your shaft, his tongue spreading his spit around your head.");
			writeText("His other hands slowly runs up your thigh and, after a moment, he pushes forward.");
			writeText("He takes your head into his mouth as he starts twisting his head a bit, his tongue and lips teasing at your tip as his slick hand jerks you off.");
			writeSpeech("player","","<i>Fuck...</i> You've got a gift for this, you know that?");
			writeText("You can feel him hum in agreement around your cock before he starts pulling away. The suction feels incredible as he keeps sliding back, until...");
			writeText("<font size='+2'><b><i>*POP~!*</i></b></font>");
			writeText("He grins up at you as he brings his other hand down to your cock as well.");
			writeSpeech("meji","","I've been practicing with some toys. Still, though...");
			writeText("He pauses to drag his tongue around your tip, teasing your slit just a bit before pulling back.");
			writeSpeech("meji","","I'm kinda surprised that this is my first time with you in my mouth. Three times in my ass, <i>and God knows how many loads down there,</i> and I'm only just now sucking you off. Kinda weird, isn't it?");
			writeSpeech("player","","A bit, sure. But that just means we have a lot of time to make up for, doesn't it?");
			writeSpeech("meji","","My thoughts <i>exactly</i>, "+data.player.honorific+"~!");
			writeText("Going back down on you, he wraps his lips around your head and starts bobbing up and down, his hand picking up speed.");
			writeBig("images/meji/7-2.jpg","Art by Nagi Ichi");
			writeText("The wet, sloppy sound of his blowjob gets louder as he starts bobbing lower each time, slowly inching his way down your shaft as he starts using fewer fingers to stroke your length.");
			writeText("After a few dozen more bounces, his hand moves down to gently toy with your sack, his lips nearly going down to your base with every bob.");
			writeText("He tries pushing all the way down, your cockhead pressing against the entrace to his throat, but he can't <i>quite</i> get all the way down.");
			writeText("After a few more tries, he puts both of his palms on the ground as he pulls his mouth off of you, gasping loudly and looking up to your eyes as he catches his breath.");
			writeSpeech("player","","You okay, mejiF?");
			writeSpeech("meji","","Y-Yeah. Just... having a bit of trouble relaxing my throat. It'll be easier once I get you past it the first time...");
			writeSpeech("player","","In that case... Want some help?");
			writeText("He pauses, then nods with a smile.");
			writeSpeech("meji","","I'll leave it to you. And remember, it's my first time - <i>don't</i> be gentle~!");
			writeText("Grabbing the back of his head, you shift your hips forward as his arms spread out a bit. You stand just a bit straighter, and start to slowly push in.");
			writeText("Making it to the throat barrier already feels great, the blowjob completely soaking your cock and his mouth, and you feel your head press against the entrance.");
			writeSpeech("player","","Okay... Hum when you're ready.");
			writeText("He starts to take a few slow, deep breaths...");
			writeSpeech("meji","","Hmm- <font size='+2'><i><b>HGPH~!!</b></i></font>");
			writeText("Just as he started to hum, you bucked your hips forward and forced your cock into his throat, moaning throatily as he starts gagging around you.");
			writeText("You quickly pop yourself back out, giving mejiF a few seconds to cough and collect himself...");
			writeText("Except, instead of coughing, he just smirks and looks up at you playfully.");
			writeSpeech("meji","","I-Is that... a-all you're gunna give, to this pussy...?");
			writeText("Your hand goes back to his head, gripping his hair tightly. You feel him shiver in pleasure as you jerk his head towards your length.");
			writeSpeech("player","","Squeeze my thigh when you need air.");
			writeText("His mouth engulfs your length as you start pulling his head against your hips, pushing into his throat as he tries matching your pace.");
			writeText("He's practically fucking his own throat after a few seconds, his hands going behind you to grab your ass. The rare moments that he stops for air are impressively far apart as he keeps bouncing up and down.");
			writeText("When he starts <i>swallowing around you</i>, you realize just how close you've gotten.");
			writeSpeech("player","","mejiF, I'm...!");
			writeText("You can feel him start humming around you, barely able to stay standing as one of his hands starts massaging your spit-slick balls again.");
			writeText("When you finally cum, it feels like you're shooting your load directly into his stomach as his throat and tongue milk every drop out of you.");
			writeText("The seconds drag on as he keeps swallowing around your shaft until, finally, you feel your head pop out of his throat, along his tongue, and past his lips.");
			writeText("He pauses for just a moment, before gently pressing his lips against your head for a wet, sloppy kiss.");
			writeBig("images/meji/7-3.jpg","Art by Nagi Ichi");
			writeText("He gives you a smug smirk and leans back.");
			writeSpeech("meji","","Not bad for my first <i>real</i> blowjob, right?");
			writeSpeech("player","","mejiF.");
			writeText("He pauses.");
			writeSpeech("meji","","...Y-Yeah?");
			writeSpeech("player","","You were <i>amazing</i>.");
			writeText("The smugness immediately disappears, replaced by a face-wide blush as his eyes going to pretty much anywhere except for yours.");
			if((data.player.location != "gallery") && (checkFlag('meji','submissive') || checkFlag('meji','willful')))
				writeSpeech("meji","","...Thanks. But you know, we're not stopping here~");
			else
				writeSpeech("meji","","...Thanks.");
			break;
		}
		case "meji6" : {
			if(data.player.location == "gallery")
				document.getElementById('output').innerHTML = '';
			writeBig("images/meji/8-1.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","Do you like it? I've been wearing it under my uniform lately... including in your office back then.");
			writeSpeech("player","","I'd say it looks nice, but I feel like you're not looking for a <i>verbal</i> reply.");
			writeText("He smiles as he tosses his other clothes to the side.");
			writeText("He steps in front of you before kneeling down, his hands rubbing against your crotch as he slides forward.");
			writeSpeech("meji","","Mmm... I could tell from looking at you, but feeling it in my hand is way better.");
			if(data.player.gender == "man"){
				writeText("He leans his head down, pulling your pants low enough to reveal your underwear.");
				writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
				writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
				writeText("He slides your underwear down, your cock springing out as it does, smiling up at you and giving a wink.");
				writeEvent("meji5");
			}
			else{
				writeText("He leans his head down, lifting your skirt just enough to reveal your panties.");
				writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
				writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
				writeText("He slides your panties down, your cock springing out as it does, smiling up at you and giving a wink.");
				writeEvent("meji5");
			}
			writeFunction("writeEvent('meji7')", "Get ready to fuck");
			break;
		}
		case "meji7" : {
			document.getElementById('output').innerHTML = '';
			writeText("Grabbing your hand, he pulls you to the side of the room to a futon. He smiles and kneels down on it, but...");
			writeSpeech("player","","Actually, let's try a different position.");
			writeSpeech("meji","","Really? I mean, sure. I don't know too many, but which one-");
			writeText("You step forward, gently pushing his body over onto his back. As he does, you see his erection completely pop out of his bikini bottoms as you push your hands against his thighs.");
			writeSpeech("meji","","O-Oh.");
			writeText("He looks down at your cock, then back up to your face, a bit embarrassed.");
			writeSpeech("meji","","M-Missionary is fine too. Better than fine, really.");
			writeText("He grabs onto his own legs, pulling them back a bit.");
			writeBig("images/meji/8-2.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","God... You feel so <i>warm</i>... If you were getting pent-up, you should've gotten me sooner.");
			writeText("He smiles, rolling his hips a bit as you rub your cock against his hole.");
			writeSpeech("meji","","I'd've been more than happy to take <i>every drop you've got.</i> So don't keep both of us waiting, okay?");
			writeText("You smirk, lining your cockhead up to his hole.");
			writeSpeech("player","","You're practically <i>begging</i> me to get as rough as I can, aren't you?");
			writeSpeech("meji","","If I <i>literally</i> beg, do you promise to fuck me harder~?");
			writeText("You answer by <b>shoving</b> your cock into his ass, hearing his throaty moan as angle yourself a bit lower...");
			writeSpeech("meji","","O-Oh <b>FUCK, <i>right there~!</i></b>");
			writeText("Pressing your head against his prostate, you piston against it for a few seconds, watching him squirm as his cock starts to dribble out almost-white precum.");
			writeBig("images/meji/8-3.jpg", "Art by Nagi Ichi");
			writeSpeech("player","","I actually wouldn't mind hearing you beg a little. Would you like to try?");
			writeText("He opens his mouth but, as he does, you <i>pound</i> his prostate quickly, cutting him off with his own moan.");
			writeText("Panting raggedly, he shudders underneath you as he squeezes around your shaft.");
			writeSpeech("player","","Well? Didn't you just say...");
			writeText("You pull out almost completely, your head almost sliding out...");
			writeSpeech("player","","...not to <i>keep us both <b>waiting?</b></i>");
			writeText("You buck your hips forward, hearing him gasp and feeling him shiver as you bottom-out in his ass.");
			writeSpeech("meji","","<font size='-2'>S-Sorry...!</font> <font size='-1'>P-Please...!</font>");
			writeText("You shift your weight in small circles, his voice hitching as you move your cock around inside his ass.");
			writeSpeech("player","","Please? Please what, mejiF?");
			writeSpeech("meji","","<font size='-1'>F-Fuck me...</font>");
			writeSpeech("player","","You can do better than that.");
			writeText("Slowly, you draw your cock out, pressing against every senstive fold you can as he squeals.");
			writeSpeech("meji","","F-Fuck me stupid...! Please, use my body like a sex-toy! Like <i>your</i> sex-toy!");
			writeSpeech("player","","If that's what you want...");
			writeText("Halfway out now, you gently prod at his prostate with your cock.");
			writeSpeech("player","","Then <b><i>relax.</i></b> Relax every part of you, and just focus on <i>this.</i>");
			writeText("You saw further into him, seeing him bite his lip gently as he holds his legs.");
			writeSpeech("player","","You still remember last time you relaxed, don't you? How you got <i>more and more <b>sensitive</b> with every thrust?</i>");
			writeSpeech("meji","","Y-Yes playerSir...!");
			writeSpeech("player","","Focus on that memory, on how <i>good</i> it felt to be relaxed while a "+data.player.gender+" uses you.");
			writeText("His eyes start to haze over, his breathing deepening.");
			writeSpeech("player","","Think about the sensation of my hard cock <i>splitting you apart.</i>");
			writeSpeech("meji","","N-Nn~...");
			writeSpeech("player","","And now... think about how <i>empty</i> you feel.");
			writeText("You pull out completely, a pathetic mewl escaping his lips for a second. His eyes start to clear up, but...");
			writeSpeech("player","","<i><b>Puppy.</b></i>");
			writeText("You immediately thrust back in, your hips clapping against his thighs as he moans.");
			writeSpeech("player","","That's what you are, mejiF. You are my...");
			writeText("You pull out...");
			writeSpeech("player","","...adorable, lovable, cute little <i><b>puppy.</b></i>");
			writeText("He groans again as you push in as deep as you can, grinding against his ass when you can't go further.");
			writeSpeech("player","","And whenever I remind you of what you are, do you know what will happen?");
			writeSpeech("meji","","No... playerSir...");
			writeSpeech("player","","I think you do. I think you know how <i>full</i> you'll feel, how <i>good</i> it'll be.");
			writeText("You see his dick start to twitch, practically oozing precum from the tip and dribbling it all over his stomach.");
			writeSpeech("player","","And I think we <i>both</i> know what would happen if I said it too many times.");
			writeText("His body starts to shake underneath you, your cock still slowly moving back and forth, every thrust making the next one that much more pleasureful.");
			writeSpeech("player","","Let's test out <i>exactly</i> what that would look like... <i><b><font size='+2'>puppy.</font></b></i>");
			writeText("His eyes go wide, his mouth gaping open as he completely loses control.");
			writeBig("images/meji/8-4.jpg","Art by Nagi Ichi");
			writeText("His jizz spurts out across his face, some of it spilling into his mouth and most of it spattering across his chest and hair.");
			writeText("But it doesn't stop after the first rope.");
			writeSpeech("player","","Remember this feeling, <b>puppy.</b> Remember how good it feels to be called that, to hear <i><b>me</b></i> call you that.");
			writeText("A few more spurts fly out, the sight of him painting his own face pushing you closer to the edge.");
			writeSpeech("player","","Do you understand what I'm saying?");
			writeText("He gives a vague, unsteady nod, his tongue lapping at the cum on his face.");
			writeSpeech("meji","","<font size='-1'>Y-Yes... playerSir~...");
			writeText("With a grin, you thrust quickly and deeply, mejiF's orgasm milking you, your own just seconds off.");
			writeSpeech("player","","<i>Good <b>puppy.</b></i>");
			writeText("He twitches around you one last time as you fill his ass with your spunk, the last dribbles of his semen dripping onto his stomach.");
			writeText("Pulling out, you can see your load start to ooze out, mejiF's eyes rolled up in semi-conscious bliss.");
			writeBig("images/meji/8-5.jpg","Art by Nagi Ichi");
			writeText("You smile down at him before confidently shouting, and accentuating it with a firm slap on his ass,");
			writeSpeech("player","","<i><b>Wake up.</b></i>");
			writeText("His eyes refocus a little... but not much.");
			writeText("His legs flop down against the bed, your jizz oozing out onto the sheets as he starts shuddering a bit.");
			writeSpeech("meji","","Is... Is this how you use all your toys...?");
			writeSpeech("player","","Yup.");
			writeText("A dumb grin spreads across his face, his eyes shutting.");
			if(data.player.gender == "man")
				writeSpeech("meji","","I love it... <i>Master...</i>");
			else
				writeSpeech("meji","","I love it... <i>M-Mistress...</i>");
			writeText("His breathing levels out quickly, meaning that he fell asleep. Not that you can blame him, given the hypnosis treatment.");
			writeSpeech("player","","...Well, might as well clean up. Hope he doesn't mind me using one of his towels to wipe him off...");
			if(data.player.location != "gallery")
				data.player.location = "vintageStreet";
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meji8" : {
			passTime();
			document.getElementById('output').innerHTML = '';
			writeText("You arrive a bit earlier than you intended, so you spend a few minutes meandering about the district.");
			writeText("Seems like there's a coffee shop near here. You might have to try that place out sometime...");
			writeText("After a bit of mindless wandering, you hear mejiF's voice call out to you.");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","There you are! Sorry for the wait, I was having some trouble finding the belt for this one.");
			else
				writeSpeech("meji","","Ah, playerSir! I thought I'd get here first.");
			writeSpeech("player","","It's fine, I was...");
			writeText("You pause, taking in his appearance and outfit.");
			writeBig("images/meji/9-1.jpg","Art by Nagi Ichi");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","What do you think? I've never actually worn this one outside before, since the shirt shows off my stomach.");
			else{
				writeSpeech("player","","So when you called it revealing...");
				writeSpeech("meji","","I meant my, um... stomach, yes. I'm a lot more used to skirts than belly-shirts.");
			}
			writeSpeech("player","","If I didn't know better, I'd say you were trying to tempt me into taking you straight to my place...");
			if(checkFlag('meji','willful')){
				writeText("He laughs, shaking his head.");
				writeSpeech("meji","","Don't be ridiculous, playerSir.");
				writeText("He toys with the skirt a bit, the barest hint of pink flashing for a moment.");
				writeSpeech("meji","","<i>I wouldn't make you wait that long.</i>");
				writeSpeech("player","","Well, you're certainly pretty forward today.");
				writeSpeech("meji","","Hm... I wonder why?");
				writeText("He slides up next to you, grabbing onto your arm with a wide grin.");
				writeSpeech("meji","","Maybe it's because it's fun to see your reactions.");
				writeText("You pause to think for a moment.");
				writeText("Fun reactions, huh...?");
				writeFunction("writeEncounter('meji8a')", "\"Reactions can be pretty entertaining to watch... <i>puppy.</i>\"");
			}
			else{
				writeSpeech("meji","","Mm, not at all. If anything, I'm actually looking forward to hanging out with you.");
				writeText("He flattens out his skirt a bit, smiling.");
				writeSpeech("meji","","Being around you without thinking about sex has a different kind of appeal, playerSir.");
				writeSpeech("player","","...You know, you <i>could</i> call me by my name, if you wanted.");
				writeSpeech("meji","","I know, but...I don't think I will.");
				writeText("He steps next to you, gently interlocking his arm with yours.");
				writeSpeech("meji","","I like how saying it makes me feel. Calling you playerSir makes things feel simpler, I guess. Plus...");
				writeSpeech("player","","...!");
				writeText("You feel one of his hands brush along your thigh, his voice dropping to a whisper.");
				writeSpeech("meji","","<i>It reminds me of the feeling of being underneath you, playerSir.</i>");
				writeText("You feel his hand retreat, though he still holds onto your arm.");
				writeSpeech("player","","...Well, you're certainly being more forward than normal today.");
				writeSpeech("meji","","I think being happy tends to do that. Though... I admit that your reactions are pretty fun.");
				writeSpeech("player","","Is that so...?");
				writeText("Fun reactions, huh?");
				writeText("That sounds like an interesting idea...");
				writeFunction("writeEncounter('meji8a')", "\"Reactions can be pretty entertaining to watch... <i>puppy.</i>\"");
			}
			break;
		}
		case "meji9" : {
			//Meet with
			document.getElementById('output').innerHTML = '';
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
	{index: "mejiReward", trust: 62,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "mejiReward": {
			if(checkItem("Leotard"))
				removeItem("Leotard");
			writePhoneImage("images/meji/fin.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("meji", "", "You've finished all of mejiF's content for this version, congratulations!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
console.log(character.index+'.js loaded correctly. request type is '+requestType)

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