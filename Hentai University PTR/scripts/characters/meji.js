var character = {index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "", textColor: "#7e52a3"};

var logbook = { //Logbook details for each character.
	index: "meji", 
	desc: "A very outwardly-confident young man with a crossdressing habit. Despite wanting to 'keep it a secret', he goes to some <i>very</i> crowded places when dressed-up.",
	body: "He has a slim, effeminate figure that's well-suited for crossdressing. He usually lets down his ponytail whenever he wears women's clothing.",
	clothes: "He usually wears a school uniform - the male version while at school, and a girl's uniform when around the town.",
	home: "He usually hangs out around the Class B hallway.",
	tags: "Crossdressing, Anal Orgasms, Orgasm Denial",
};

var newItems = [//Lists the shop items unique to this character
	{name: "Leotard", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/leotard.jpg", description: "A sports-leotard for women."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "meji1a", name: "A particularly loud student is walking down the hall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji2", name: "You spot a familiar face.", location: 'street', time: "Evening", itemReq: "", trustMin: 10, trustMax: 10, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji3", name: "You can see meji coming down the hall with his friends.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 20, trustMax: 24, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji3", name: "You can see meji coming down the hall with his friends.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 40, trustMax: 44, type: "tab", top: 0, left: 0, day: "both",},
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
			writeText("Well, that or having some seriously repressed de"+data.player.honorific+"es, but that can be a bit of a gamble. No need to put him on the defensive just yet...");
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
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...You can't tell anyone...");
			writeText("He quickly rushes over to you, grabbing you by the shirt and trying to pull you down to look him in the eyes.");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","Not one single person hears about this, you got that!?");
			writeFunction("writeEncounter('meji2b')", "Agree and walk him safely to his place");
			writeFunction("writeEncounter('meji2c')", "Explain how you won't tolerate such rudeness");
			break;
		}
		case "meji2b" : {
			writeSpeech("player","","...I mean, sure. I don't really think I have a reason to tell anyone, anyway.");
			writeText("He pauses.");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...W-wait, really?");
			writeText("His grip on your shirt relaxes a bit, before he suddenly stands a bit straighter and he steps back.");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","I, uh... I mean, of course you don't.");
			writeSpeech("player","","Yup. What you do for fun in your spare time is none of my business.");
			writeText("He tenses.");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","W-Well, it's not like I do this a lot! It's just, sometimes, I... Uh...");
			writeSpeech("player","","How about I just walk you home?");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...Thanks.");
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
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","Y-You can't tell her-");
			writeSpeech("player","","I won't tell anyone anything.");
			writeText("His eyes go wide for a moment, his grip relaxing-");
			writeSpeech("player","","<i>Yet.</i>");
			writeText("You push his hand away from your chest, staring down at him as you make a show of looking him over.");
			writeSpeech("player","","If you don't want me to go sharing what I'm looking at with every student and faculty member around the university, then I have a simple little request...");
			writeText("You lean forward, dropping your voice to whisper in his ear...");
			writeSpeech("player","","You're going to ask me, <i>politely</i>, not to share your <i>crossdressing habit</i> with everyone.");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...T-That's all...?");
			writeSpeech("player","","Nobody likes a rude <i>bitch</i>, "+fName('meji')+".");
			writeText("He flinches at the word, but bows his head down a bit.");
			writeSpeech("meji","scripts/gamefiles/profiles/meji2.jpg","...I'm... sorry. Please, don't tell anyone about my... <i>c-crossdressing habit</i>...");
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
						else if(galleryCheck('meji4') != true){
							writeFunction("writeEvent('meji4')", "Ask him about last time");
						}
					}
					else{
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


		//This will likely be the stopping point for this version


		case "meji4" : { // - NOT WRITTEN
			//you give meji the option to just leave and you'll stop this
			//no more blackmail, no more surprise-anal, and no more talking
			//you even drop the hypnosis that makes his dick numb
			//you give him time to think about it
			break;
		}
		case "meji5" : { // - NOT WRITTEN
			//initiated from your office/outside of it (he's waiting for you)
			//he's back, and he gives in completely
			//even without the hypnosis, he still can't feel his cock
			//he couldn't even get close to cumming until he started fingering his ass and thinking about you
			//now, he wants to fuck, and he's willing to beg
			//basically choose either meji6.1 or meji6.3, and use meji6 for the next interactions
			break;
		}
		case "meji6" : { // - NOT WRITTEN
			//another option-set
			//option 1, he's tied-up, blindfolded, and brought to orgasm with his nipples and ass while his dick feels nothing
			//option 2, you tell him to buy the sluttiest bikini he can find and have him take you home
			//option 3, get some bloomers, meet up in the gym, and tease his nipples while fucking an orgasm out of him
			//option 4, get those bloomers and experience an exclusively nipple-based orgasm as you hypno-whisper into his ear
			break;
		}
		case "meji7" : { // - NOT WRITTEN
			//go to a by-the-hour place
			//technically an option-set
			//while there, you can have him blow you (he cums)
			//you can mating-press his ass
			//you can lift and bounce him on your cock
			break;
		}
		case "meji8" : { // - NOT WRITTEN
			//if you have a high-enough counseling for school corruption, then:
			//you can speak with him about the idea of spreading him around
			//he gets unbelievably aroused and agrees, rounding up the class for a gangbang
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
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
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
			if (data.player.gender = "man") {
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
			writeSpeech("player","","You<i> thrust it in,</i>, right?");
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
	{index: "mejiReward", trust: 25,},
	{index: "mejiReward", trust: 45,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "mejiReward" : {
			writePhoneImage("images/meji/fin.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("meji", "", "You've finished all of "+data.story[7].fName+"'s content for this version, congratulations!");
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