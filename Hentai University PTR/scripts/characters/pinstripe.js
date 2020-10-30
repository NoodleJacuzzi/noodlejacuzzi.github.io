var character = {index: "pinstripe", fName: "Edith", lName: "Weber", trust: 0, encountered: false, textEvent: "", met: false, color: "#924F82", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false,};

var logbook = {
	index: "pinstripe", 
	desc: "An attendant of Parent Teacher Student Association council meetings, she's a member of the university's legal department. She's been looking a little to hard into your past for your tastes.",
	body: "She has the body of a mature woman turned up to eleven, she could probably moonlight as a pornstar quite easily. Still, with her attitude it doesn't seem likely that she'll want to settle for becoming anyone's trophy wife.",
	clothes: "She usually wears professional-looking suits, albeit ones that tightly hug her body. Upon her face is a pair of thin reading glasses.",
	home: "She lives in a small apartment you should be able to navigate to from the central area of the city's streets, when she isn't around the school trying to catch you red handed and have you thrown out of the university on your ass.",
	tags: "Ageplay, bimbofication, mindbreak",
	artist: "Artist: Enoshima Iki",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "You're walking down the hall, when...", requirements: "?trust pinstripe 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "office", name: "pinstripeF's office is here", requirements: "?trust pinstripe 1; ?location eastHallway;", altName: "", altImage: "",},
	{index: "potionQuo", name: "pinstripeF's office is here", requirements: "?trustMin pinstripe 10; ?trustMax pinstripe 13; ?location eastHallway;", altName: "", altImage: "",},
	{index: "potionFinishedQuo", name: "pinstripeF's office is here", requirements: "?trustMin pinstripe 80; ?trustMax pinstripe 81; ?location eastHallway;", altName: "", altImage: "",},
	{index: "missing", name: "pinstripeF's office is here", requirements: "?trust pinstripe 60; ?location eastHallway;", altName: "", altImage: "",},
	{index: "streetCatcall", name: "did you just see...?", requirements: "?trust pinstripe 60; ?location streets;", altName: "", altImage: "images/pinstripe/schoolgirl.jpg",},
	{index: "dosedQuo", name: "You should be able to find pinstripeF here", requirements: "?trust pinstripe 61; ?location streets;", altName: "", altImage: "images/pinstripe/schoolgirl.jpg",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define player = sp player;
		define pinstripe = sp pinstripe;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
			writeHTML(`
				t The upcoming PTSA council is worrying. If they hire an independent investigator who decides to give your references a direct visit...
				t Hypnosis is good, but if a trained detective is looking for holes, he'll find them. You can't take that risk.
				t Distracted, you turn the corner a little to fast and-
				t <i><b>Soooooooooft</b></i>
				t For a brief moment you're taken to another world, one of pillows and silk sheets, before you fall on your ass. You bumped into someone, and you look up to see who.
				t And up, and up.
				im intro1.jpg
				sp pinstripe; ...
				sp player; Sorry about that, wasn't watching where I was going. I'm playerF, and you are...
				t She's quiet. Her glare down at you makes you feel like you're in court. 
				im intro2.jpg
				sp pinstripe; pinstripeL, legal department, senior faculty.
				t You stand up, she doesn't offer to help.
				sp player; Well, nice to meet you. You don't look senior at all, if you don't mind me saying.
				sp pinstripe; This is the most prestigious university on this hemisphere, our turndown rate is higher than any other institution in the state. You have a higher chance of getting a heart transplant than you do of attending here.
				t She takes a step forwards to intimidate you, she's very tall.
				sp pinstripe; So tell me, what exactly are you doing here?
			`);
			passTime();
			writeFunction("writeEncounter('introB')", "I belong here.");
			writeFunction("writeEncounter('introA')", "Going back to my office");
			break;
		}
		case "introA": {
			writeHTML(`
				sp player; Just trying to get back to my office.
				sp pinstripe; I have my eye on you. The faculty here ought to be held to as high a standard as our student body. I have personally overseen seventeen firings for inappropriate behavior in the workplace.<br>I know trouble when I see *him.
				sp player; And I'm trouble?
				sp pinstripe; The school does not need counselors, you're a liability. A *man of your... Type, being left alone with students is a disaster waiting to hit the school.
				sp player; What exactly is my "type", Mrs. pinstripeL?
				sp pinstripe; I'm not sure yet. The matter is pending investigation, I'll know after the next meeting I have with principalF.
				t With that she leaves, her heels clacking as she goes. 
			`);
			setTrust("pinstripe", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "introB": {
			writeHTML(`
				sp player; I earned my place here legitimately.<br><i>As far as you know, anyways.</i>
				sp pinstripe; Convince yourself all you like, I'll wait to see actual evidence. I'm sure the results of a <i>proper</i> investigation will let us see you in the act.
				sp player; And what exactly do you think I'll be doing?
				sp pinstripe; Searching for a new job. And I'll see to it that principalF won't be a favorable reference for you.
				t With that she leaves, her heels clacking as she goes.
			`);
			setTrust("pinstripe", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "office": {
			if (checkFlag("pinstripe", "potionFlag") != true) {
				writeHTML(`
					t pinstripeF's office is here, but she'll probably be alert to any of your shenanigans.
					t Maybe someone else can help you? She probably won't be the easiest PTSA target to take on first.
				`);
			}
			else {
				writeHTML(`
					t pinstripeF's office is here, but she'll probably be alert to any of your shenanigans.
					t Luckily, you have a solution to that...
				`);
				writeFunction("writeEncounter('potionStart')", "Use the blonding potion");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
		}
		case "potionStart": {
			writeHTML(`
				t With a pep in your step and a bit of the potion on your collar, you push open the door to pinstripeF's office and walk confidently inside.
				sp pinstripe; Ah, you. Come to submit your resignation? 
				sp player; No, actually. I get you don't trust me, I thought we could review my papers and references together, so I can help you see I have nothing to hide.
				sp pinstripe; Right, your papers. Actually, I was looking through your resume just now, and... And...
				t She keeps squinting to focus on the paperwork in her hand, like she's having trouble reading it. Finally she gives up and starts trying to rub away a headache from her temples, and you take the opportunity to strike. A single spray from the potion is all it takes.
				sp pinstripe; Gah! What the hell? Did you just... Just...
				t Her surprise gives way to confusion as she looks around the room
				sp pinstripe; What was... What was in that squirt... Thingy?<br>You went fshht and now everything's... Fuzzy...
				t The potion is quite fast acting.
				sp player; Listen, you need to trust me, alright?
				sp pinstripe; What!? You just sprayed me, why would-
				t Another spray.
				sp pinstripe; S-stop that! It smells funny... Not like teehee, but more like bleh! Like cotton candy, or-
				t Another spray.
				sp pinstripe; Ghhhsh... 
				t She's blinking rapidly and wobbling in her seat.
				sp player; It's hot in here, isn't it?
				sp pinstripe; Pffft, no waaaay~<br>You just need... Just a little... Hah!
				sp player; Hmm, but it's going to get really hot in here soon, you should get ready, right?
				sp pinstripe; Wha... Okaaay~
				t She stands up on unsteady legs and wobbles towards the AC, and just kind of... Looks at it.
				t It seems the potion doesn't let you rewrite their common sense like hypnosis does, it just makes her really, really stupid.
				t Still, this should be enough. With a stern voice you could command her to stay home from the next PTSA meeting, or you could play around to your heart's content.
			`);
			passTime();
			writeFunction("writeEncounter('potionIntro')", "Enjoy yourself");
			writeFunction("writeEncounter('potionCancel')", "Keep her out of the way");
			break;
		}
		case "potionIntro": {
			writeHTML(`
				t You walk up to pinstripeF, still struggling to figure out the air conditioning, and give her another spray. It should be fun to see how far you can go, and what effects-<br>Interesting, were her eyes always this shade of pink?
				sp pinstripe; Ahah, fssht! Fssht! Heehee!
				sp player; You really are deteriorating fast. I'm your boss now, got it?
				sp pinstripe; Dee-tee... Boss?
				sp player; Don't think, just listen. All your smarts when poof, okay? All your good ideas melted right out of those ears, and-
				sp pinstripe; Aaaaah!
				t She clasps her hands to her ears and looks distressed. It's quite adorable.
				sp player; Calm down, it's okay. I'll have all the good ideas from now on, okay? You don't need to think, just remember this. If I say something is a <b>good idea</b>, you'll do it. Okay?
				sp pinstripe; Oh... Kay! That's super easy!
				sp player; Good girl! Now remember, it's a <b>good idea</b> to listen to playerF, got it?
				sp pinstripe; Yep!
				t <b>You now have control of pinstripeF, another PTSA member is in your pocket!</b>
				sp pinstripe; Oh... I feel... Dizzy...<br>And sleepy too...
				sp player; That's no problem, take a nap. You and I have a lot of fun ahead of us.
				t She's already out, asleep on her couch. Best to let her rest. The effects of the potion might not stick, but you always have more, and the seed has been planted.
			`);
			setTrust("pinstripe", 10);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "potionCancel": {
			writeHTML(`
				sp player; pinstripeF.
				sp pinstripe; Y-yes?
				sp player; Coming up is a PTSA meeting. It'd be a good idea to stay home that day.<br>Maybe every day, actually. Pass the time by masturbating.
				sp pinstripe; Woooah~! That sounds way more fun! <br>But wouldn't I get in trouble?
				sp player; I'll have control of the school by the time you do. I'll take care of you after, alright?
				sp pinstripe; Kaaay~! Gonna cum a whoooole bunch~!
				t Giddily, she leaves her office to head home and play with herself to her heart's content.
				t <b>pinstripeF is out of the picture, one less PTSA member to worry about!</b>
			`);
			setTrust("pinstripe", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "potionQuo": {
			switch(checkTrust("pinstripe")) {
				case 10: {
					writeHTML(`
						pinstripe You... What do <i>you</i> want?
						t She seems totally back to normal, albeit looking like she's nursing a headache trying to focus on tedius paperwork.
						player Just checking up on you.
						pinstripe Then leave, I'm fine. Actually doing work, unlike-
						player It'd be a <b>good idea</b> if you were more polite to me.
						pinstripe ... Fine. I suppose we might as well keep our working relationship professional. Now, what did you need?
					`);
					writeFunction("writeEncounter('pinstripeTitsuck')", "Give her a massage");
					writeFunction("writeEncounter('pinstripeSecondDose')", "Use the blonding potion again");
					writeFunction("writeEncounter('cancel')", "Go back");
					break;
				}
				case 11: {
					writeHTML(`
						pinstripe Who is-<br>Oh. Come to bother me again, then? Fine. We won't be seeing much of each other after the next council meeting anyways.
						player It'd be a <b>good idea</b> to be nicer to me</b>, you know.
						pinstripe That isn't...<br>I suppose I have been acting somewhat crudely. I apologize, if only not to dishonor this institution.
					`);
					writeFunction("writeEncounter('pinstripeFuck')", "Go for a special massage");
					writeFunction("writeEncounter('cancel')", "Go back");
					break;
				}
				case 12: {
					writeHTML(`
						pinstripe ... Counselor. Did you need something?
						player Not happy to see me?
						pinstripe I'm working. I don't have time to play around.
						player You know, it'd be a <b>good idea</b> if you were honest and open with me.
						pinstripe We aren't friends, playerF.<br>... But, we do work closely together...<br>If you embarrass or oust me though, I'm sure you know what I'll do in return. Now, again, did you need something?
					`);
					writeFunction("writeEncounter('pinstripeCowgirl')", "Help her relax");
					writeFunction("writeEncounter('cancel')", "Go back");
					break;
				}
				case 13: {
					writeEvent("pinstripeBroken");
					setTrust("pinstripe", 80);
					writeFunction("changeLocation(data.player.location)", "Finish");
					break;
				}
			}
		}
		case "pinstripeTitsuck": {
			passTime();
			writeEvent(name);
			raiseTrust("pinstripe", 1);
			writeFunction("writeEncounter('pushYourLuck')", "Take her");
			writeText("But maybe it might be smarter to be patient. You've given her so many <b>good ideas</b> today already, it might be best to let them sit.");
			writeFunction("writeEncounter('backOff')", "Have patience");
			break;
		}
		case "pushYourLuck": {
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/nude.jpg;
				t You stand up and start freeing your member in front pinstripeF. Her eyes shoot open. Once they can focus again, that is.
				pinstripe What the hell are you doing?
				player Giving you what you need. It's a <b>goo-</b>
				pinstripe Get the hell out of my...! Ghh... What am <i>I</i> doing...
				t She stands up off her chair and starts trying to cover herself up. This could be bad...
			`);
			writeFunction("writeEncounter('gameOver')", "Excuse yourself");
			writeFunction("writeEncounter('pinstripeSecondDose')", "Use the blonding potion again");
			break;
		}
		case "backOff": {
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/nude.jpg;
				player That will be the end of our massage today, alright pinstripeF?
				pinstripe A-already?<br>Right... Right, I need to get back... Back to work.
				t With a smile you leave her office as she attempts to get dresssed. A day of stewing should leave her much more open to future suggestions.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "gameOver": {
			writeHTML(`
				t You file away another bit of paperwork and get ready to head back home as sky starts to grow darker. There's plenty to do. Corrupt each member of the PTSA and use them as a springboard to get a hold of principalF. A lot of work but with patience-
				t You're startled out of your daydream by the sound of a siren. An ambulance? Was someone hurt? 
				t You step out of your office only to see a group of officers walking up the stairway. From the moment the one in the lead spots you it's clear your fate is sealed.
				t You're arrested, and it certainly seems like they've got solid evidence against you. principalF comes out of her office to see you getting cuffed, but makes no move to help you.
				t Somewhere along the line you must've made a mistake, a miscalculation. Now you're going away for a long time.
				t <b>GAME OVER</b>
			`);
			break;
		}
		case "pinstripeFuck": {
			passTime();
			writeEvent(name);
			raiseTrust("pinstripe", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "pinstripeCowgirl": {
			passTime();
			writeEvent(name);
			raiseTrust("pinstripe", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "potionFinishedQuo": {
			if (checkTrust("pinstripe") == 80) {
				writeHTML(`
					pinstripe Ah, you're back. Is... Is that idea of not cumming alone a permanent thing? I was trying last night, and... Nevermind.
					t She's totally broken to your whims at this point, but you could always do with a little more fun.
				`);
				raiseTrust("pinstripe", 1);
			}
			else {
				writeHTML(`
					t As you walk into her office, pinstripeF sighs. It isn't clear if it's annoyance or relief, and she starts to unbutton her top.
				`);
			}
			writeFunction("writeEncounter('pinstripeTitsuckRepeat')", "Enjoy her breasts again");
			writeFunction("writeEncounter('pinstripeFuckRepeat')", "Fuck her again");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "pinstripeTitsuckRepeat": {
			passTime();
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/nude.jpg;
				im tit1.jpg
				pinstripe Again... I figured you were more about the thrill of the hunt, isn't this... Rather plain for you?
				player Please, I know how desperate you are. Sometimes it's fun to relax and revel.
				pinstripe I... I'm not-
				im tit2.jpg
				pinstripe Oooh~
				t There it is again. The feeling of resistance cracking, then melting away. At this point it's a drug, an addiction.
				t For normal women this is foreplay, but at this point it's clear to both of you...
				im tit3.jpg
				pinstripe Oooouhh~!
				t pinstripeF is not normal anymore.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "pinstripeFuckRepeat": {
			passTime();
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/horny.jpg;
				im fuck1.jpg
				pinstripe Okay... We need to do this quickly...
				player The way you look at me, you look like you're starving.
				pinstripe I'm not! I'm not...
				im fuck2.jpg
				pinstripe Mmmh~! I can't wait anymore!
				t Reservations, hesitance, shame?
				t *<b>THRUST</b>*
				t Gone.
				t Willpower, critical thinking, common decency?
				t *<b>THRUST</b>*
				t Gone.
				t Any last idea that she can resist cumming when you creampie her?
				t *<b>THRUST</b>*
				im fuck3.jpg
				t Gone.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "pinstripeSecondDose": {
			passTime();
			writeEvent(name);
			setTrust("pinstripe", 60);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "missing": {
			writeHTML(`
				t ... But pinstripeF isn't.
				t You open the door to her office, but she's nowhere to be found. Curious. Maybe the potion had some unforeseen effects? You can't imagine it's left her bedridden.
				t You should search around for her.
			`);
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "streetCatcall": {
			passTime();
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/schoolgirl.jpg;
				t You make your way through the alley in disbelief. There's no way that could have been-
				im schoolgirl.jpg
				pinstripe You alright *mister? You seem out of breath.
				player pinstripeF?! What happened to you?
				pinstripe <i>That's</i> your first question? I thought for sure a *man like you'd cum right up and ask me "how much"!
				t Is... Is it possible she took that "whore" thing seriously? Well, her disappearing from school won't necessarily be tied to you. Especially if nobody notices until the next meeting...
				t You're pulled out of your thoughts when she approaches you.
				pinstripe You know, I don't know why... But when I look at'cha I wanna give you a discount. How about this...
				t She steps up to you to whisper into your ear.
				pinstripe You can use my mouth...<br>For the price of one fat load inside me.
				t She pulls you by the hand, it looks like she already has a destination in mind. Either her own home or a seedy motel.
			`);
			writeFunction("writeEncounter('pinstripeMouth')", "Let her lead");
			break;
		}
		case "pinstripeMouth": {
			writeEvent(name);
			setTrust("pinstripe", 100);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "dosedQuo": {
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/schoolgirl.jpg;
				im service0.jpg
				pinstripe Welcum back mister! Wanna play? You can use either of my mouths, free if you promise to treat me right~
			`);
			writeFunction("writeEncounter('pinstripeMouthRepeat')", "Use her mouth");
			break;
		}
		case "pinstripeMouthRepeat": {
			passTime();
			writeHTML(`
				im service2-1.jpg
				t At first you thought she'd be disappointed at buying her mouth instead of her snatch, but her enthusiasm shows she enjoys giving head plenty.
				im service2-2.jpg
				t Just like before she's a blur of impeccable technique and enthusiasm. You don't last long, no *man could, but with how frantically she rubs herself it's clear she's getting close too.
				im service2-3.jpg
				t And just as you reach your crescendo, so does the mouth maniac beneath you.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
	}
}

var eventArray = [
	{index: "pinstripeTitsuck", name: "Event Name"},
	{index: "pinstripeFuck", name: "Event Name"},
	{index: "pinstripeCowgirl", name: "Event Name"},
	{index: "pinstripeBroken", name: "Event Name"},
	{index: "pinstripeSecondDose", name: "Event Name"},
	{index: "pinstripeMouth", name: "Event Name"},
	{index: "pinstripePussy", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "pinstripeTitsuck": {
			writeHTML(`
				player So, how are you feeling?
				pinstripe Fine. Just... Just tired.
				player Maybe you need a nice massage? It'd be a <b>good idea</b> to get all that exhaustion worked out of you.
				pinstripe Mmm...<br>Maybe. I'll schedule one later this week then.
				player Oof. Those clinics can be real price-gougers. Listen, I can do it for you, and for free!
				pinstripe I don't know...
				...
				define pinstripe = sp pinstripe; im images/pinstripe/nude.jpg;
				im tit1.jpg
				t pinstripeF scowls a little, every time she tries to think critically about how exactly she got into this situation it just makes her head hurt. Her thoughts are bombarded with blaringly loud "good ideas" you've given her.
				t And to make matters worse, her inquisitive mind feels even more dulled over once she started feeling your eyes on her breasts. But why? It's just a way to avoid paying for-
				im tit2.jpg
				pinstripe B-be gentle! They're... Very sensitive...
				t What was she thinking about again? It couldn't have been that important, right? She's getting wet, but that's not unusual for a good massage.
				t ... That's what you told her anyways.
				t Yet somehow with every flick of her nipple and knead of her heaving breasts, there's an undertone that something is wrong. If she weren't distracted by how loud her heartbeat is feeling in her ears, she might be able to place it.
				pinstripe H-hold on for a second, I-
				im tit3.jpg
				t And that train of thought dissolves in a moment. The feeling of having her nipple sucked appeals to her maternal instinct, igniting a flame pinstripeF kept tucked away for her late-night fantasies.
				t Hands behind her head pinstripeF can do nothing but accept the sexual torment, her thighs clenching with every suckle. She may not be lactating, yet, but she sure is leaking somewhere.
				t You pull your head back, letting her breast fall from your mouth. She's nearly red in the face, teeth grit and breathing hard. The 'massage' act has been taken as far as it can go, you could drop the pretenses here and go on the attack...
			`);
			break;
		}
		case "pinstripeFuck": {
			writeHTML(`
				player Feeling any better?
				pinstripe Fine. Your massage skills could use a little work though.
				player You're saying I should get more practice, then? On you?
				pinstripe ... I suppose I feel a little tender.
				t Absentmindedly she rubs her chest.
				player Well, luckily for you I've been reading up on some new techniques. It's a <b>good idea</b> to be open to new experiences after all.
				pinstripe I... I agree. It's always important to keep an open mind.
				...
				define pinstripe = sp pinstripe; im images/pinstripe/horny.jpg;
				im fuck1.jpg
				t Something must be wrong. pinstripeF is sure of it. Something about this situation is very abnormal, and these little relaxation sessions are conditioning her to ignore it. 
				player You ready?
				pinstripe Yes... Fuck! Wait, I was so close-
				im fuck2.jpg
				t As her body moves on it's own and her eyes cross unimportant thoughts are forced into the back set. While some part of her brain is still trying to piece together what you're doing to her, it is rudely interrupted whenever she bottoms out on your dick.
				t Slowly she realizes that with each thrust her own inner voice is gradually replaced with your words, conditioning her to accept and appreciate her new place.
				t And as you watch a bead of sweat run down her face to pool in her cleavage, it's clear wanton lust has won the day.
				im fuck3.jpg
				t But there's always more work to do.
			`);
			break;
		}
		case "pinstripeCowgirl": {
			writeHTML(`
				player So, interested in a little it of relaxation again?
				t She goes quiet, a moment of deep thought.
				t The obvious answer is no. To question you about exactly why she seems so compelled not to resist your advances. Yet her mind can't seem to accept that conclusion and she can't figure out why. The only answer left is to stay in control, to overcome whatever mental hangups are making her act like this. Just one more time she'll indulge herself and then she'll have all the answers.
				t And so she stands, a determined look in her eyes, ready to give you her answer.
				...
				define pinstripe = sp pinstripe; im images/pinstripe/horny.jpg;
				im cowgirl2.jpg
				t And her answer was to jump you, no condom to separate her from her deepest desire. All she needed was to tell herself that this was a really, really good idea...
				t And it all just clicked.
				im cowgirl1.jpg
				pinstripe Sho... Thick...
				t Her mind is quiet, for once. Of couse no rational thought could survive in an environment like this. It'd be silenced, then beaten down with every white flash of light of pleasure that shakes her body every time she can feel your full, throbbing cock inside of her.
				t You can feel yourself approaching the edge. You give a token resistance, with your hands rather than words of course. She obviously isn't listening to reason anymore.
				t But no dice. Pushing her fat asscheeks back for a moment of reprieve only makes her try to bounce harder. So...
				im cowgirl3.jpg
				t There's a very brief moment of hesitation when your first spurt of cum hits the entrance to her womb. But then she resumes. It isn't clear if she's riding out as much pleasure as she can get, or if she's actively milking you for all you've got.
				t Really, it doesn't matter anymore.
			`);
			break;
		}
		case "pinstripeBroken": {
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/horny.jpg;
				t You walk into pinstripeF's office, ready for another bit of fun torment. Inside she's hunched over her desk, breathing deeply and her hair is messier than normal.
				t When she notices you, she doesn't say a word. She stands up and walks around the desk, sitting down to reveal...
				im lick1.jpg
				pinstripe I-i've been working all day, and I keep feeling distracted. I keep seeing things I never did... With you. <br>I don't know why, but when you say things... It feels like it makes everything alright. It's a g-good idea to relax, and not to be ashamed of myself, right?
				player What exactly do you want? 
				pinstripe I want you to tell me that this is normal... That I should just get back to work...
				player Sure! It's completely normal, get back to work.
				pinstripe That... It didn't... 
				player Of course it didn't. That's not what you want to hear. You want to hear that it's a <b>good idea</b> to spend all day playing with yourself. You want to hear that it's a <b>good idea</b> to get off on the thought of your master's touch.
				pinstripe I don't... Have... A-
				player Yes you do, pinstripeF. Because I'm the one making decisions for you.<br>Want proof? It's a <b>good idea</b> for you to take off those panties, and show me your cunt.
				pinstripe I... I'm only doing this because I can't-
				player No. You're doing this because I told you to. Go ahead and try and resist any of the <b>good ideas</b> I've given you. I'll be having some fun.
				im lick2.jpg
				pinstripe N-no...! I've only been listening because they were...<br>I shouldn't be ashamed, of course! Nngh~
				t Her legs shudder.
				pinstripe A-and it's important to relax, f-for my health!
				t Her eyes flutter.
				pinstripe A-and... I shouldn't get of without permission... Because... Because... I... Should only cum...
				im lick3.jpg
				pinstripe With... You~
				player Very good. Why don't you go ahead and repeat my instructions to yourself while I have some fun, alright?
				pinstripe That sounds... Like a good idea...
				...
				t As you leave an exhausted pinstripeF, still repeating all the ideas you've given her, you can't help but feel accomplished.
			`);
			break;
		}
		case "pinstripeSecondDose": {
			writeHTML(`
				t A quick application of your little friend ought to help. As you pull out the spraybottle pinstripeF's face lights up in recognition, only to be dulled when you actually spray her with the stuff. All those pesky concerns and inhibitions gone, shattered like glassware hitting concrete.
				player Curious. You shouldn't recognize this. Oh well.<br>Now, you should know better than to-
				pinstripe M-my head... Feels foggy...<br>What's this nice taste?
				player That nice taste is your punishment, pinstripeF. Don't you like it?
				pinstripe I do! N-no, I mean...<br>My head hurts...
				player Do you remember what I told you last time?
				pinstripe No... I'm sorry...
				player I told you that you should listen to what I say. That when I say something is a <b>Good idea</b>, you'll treat it as an absolute fact. Right? Now, it's a <b>good idea</b> to strip for me.
				t At first she seemed worried, but once she realizes obeying you is as simple as getting naked she's all smiles.
				pinstripe Yes!
				t She starts stripping without hesitation, not even thinking about the situation or who might be around.
				t In a moment there's only one piece left. In a few smooth motions her overworked bra is tossed aside, leaving her completely bare.
				im nude.jpg
				define pinstripe = sp pinstripe; im images/pinstripe/nude.jpg;
				sp pinstripe; Kay... Ooh, I feel tingly! It <i>was</i> a good idea!
				player <i>I should really keep more of this stuff handy.</i><br>Hands up, let me see those tits.
				im tit1.jpg
				player Now, and make sure this one sticks, okay?<br>It's a really, really <b>good idea</b> for you to start acting like the whore...
				im tit2.jpg
				pinstripe Ah~!
				player You <b>really are</b>!
				t There are any number of women in the school you can take things slowly with. This time is different. With every tug on her fat nipples, which she enjoys greatly, you want to stamp out any resistance in the most direct fashion you can.
				t Until she can take no more, squirting and spraying the carpet as her legs fail her. Panting for breath, you loom over her.
				player No more resistance, got it? Your ability to be a threat to me is over, understand?
				pinstripe Ye... Yesh...
				t She wobbles, her eyes close as she falls down asleep. There's nothing more to be done today, it's for the best to leave. If she still has any resistance left tomorrow another application of the potion should fix that right up.
			`);
			break;
		}
		case "pinstripeMouth": {
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/schoolgirl.jpg;
				t Eventually you and her make your way to her place, a suprisingly humble place for someone like pinstripeF.
				t She offered to blow you in the alley, but... Eugh.
				player So, did you already have that uniform, or-
				pinstripe Too many questions! You gotta relax *mister~!
				player Do you really not... Remember...
				im service1-1.jpg
				t You have plenty of very important quesions for her, but they're escaping you at the moment.
				im service1-2.jpg
				pinstripe Mmm, see anything you like? It's all on offer tonight. Although I'm feeling thirsty from all that walking~
				t It seems like the potion's effects are more intense than you planned, and they may very well be permanent, but... Oh well! Her absence works out for you just as well as her support does.
				t The thought crosses your mind while you strip that this might be an act, but that quickly fades when you see how excitedly she's rubbing her snatch watching you.
				t Right as you finish she's coming towards you on her knees, she can't even wait for you to walk towards the bed.
				im service2-1.jpg
				pinstripe Mmm~!<br>Mwah! What a taste~! You must not be able to keep the women away!
				t She takes turns alternating between suckling the head and jerking you.
				pinstripe Ooh, I'll do an extra good job, alright? You just relax and make sure you come back to my neighborhood, got that stud?
				im service2-2.jpg
				t Finished with her foreplay, her motion becomes a blur as she takes you to the hilt, kisses your pelvis and balls, and pulls back up to repeat the process. There's no way she was this skilled before, the potion must've freed up a lot of room in that head of hers.
				t She's relentless, and she's still playing with herself beneath her tiny excuse for a skirt.
				t The enthusiasm, her performance, and the feeling of her plush lips against you whenever she bottoms out...
				im service2-3.jpg
				t Messy.
				t She makes long, drawn-out sucking motions milking you as much as she can, even making sure your final few splurts are right onto her tongue. As she swallows it down she shudders. 
				pinstripe Thanks for the meal, stud~
				...
				t Try as you might to question her afterwards it seems like the former pinstripeF is gone. Exactly what you'll do with her from now on is up in he air. Aside from drop by now and again to get your dick wet, of course.
			`);
			break;
		}
		case "pinstripePussy": {
			writeHTML(`
				define pinstripe = sp pinstripe; im images/pinstripe/schoolgirl.jpg;
			`);
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
	{index: "empty", requirements: "?trust principal 10000;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
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